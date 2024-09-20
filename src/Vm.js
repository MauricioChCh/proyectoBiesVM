import Visitor from './Visitor.js'; 
import antlr4 from 'antlr4';
import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
class VM {
    constructor() {
        this.stack = []; // S: Pila principal de ejecución
        this.bindings = [{ /* Capa 0 */ }]; // B: Entorno de bindings (capa 0 inicial)
        this.contextStack = []; // D: Contexto de ejecución
        this.environment = []; 
        this.functions = {}; // Almacena las funciones definidas
        this.code = []; // Código a ejecutar
        this.instructionPointer = 0; // Puntero de instrucción
    }

 
    getCurrentLayer(layerIndex) { //Ayuda a obtener la capa/layer actual
        if (!this.bindings[layerIndex]) {
            this.bindings[layerIndex] = {};
        }
        return this.bindings[layerIndex];
    }

    executeInstruction(instr) {
        switch(instr.type) {
            case 'LDV':
                this.stack.push(parseInt(instr.args[0]));
                break;
            case 'ADD':
                this.stack.push(this.stack.pop() + this.stack.pop());
                break;
            case 'MUL':
                this.stack.push(this.stack.pop() * this.stack.pop());
                break;
            case 'PRN':

                const print = this.stack.pop();
                print===undefined? "": console.log(print);
                break;
            case 'HLT':
                this.code = []; // Limpia el código
                this.stack = []; // Limpia la pila de ejecución
                this.bindings = []; // Limpia el entorno
                this.contextStack = []; // Limpia el contexto de ejecución
                break;
            case 'BST': 
                const [layerIndex, varIndex] = instr.args;
                const valueToStore = this.stack.pop();
                this.getCurrentLayer(layerIndex)[varIndex] = valueToStore;
                break;

            case 'BLD':
                // BLD capa varIndex: Carga de la capa y variable a la pila
                const [bindLayer, bindVarIndex] = instr.args;
                const valueToLoad = this.getCurrentLayer(bindLayer)[bindVarIndex];
                this.stack.push(valueToLoad);
                break;
            case 'LDF':
                const functionName = instr.args[0];
                const functionBody = this.functions[functionName];
                if (!functionBody) {
                    throw new Error(`Function ${functionName} not defined`);
                }
                const closure = {
                    functionName: functionName,
                    body: functionBody,
                    environment: this.environment.slice() // Captura el entorno actual
                };

                this.stack.push(closure);
                break;

                case 'APP':
                    // Verificamos si en el tope de la pila hay un valor y un closure
                    let closure1 = this.stack.pop(); // El closure de la función
               //     let value = this.stack.pop();   // El valor a pasar a la función
                
                    console.log('Estado de la pila:', this.stack);
                    console.log('Closure extraído:', closure1);
                  //  console.log('Valor extraído:', value);
                
                    if (closure1 && closure1.body) {
                        // Guarda el estado actual en la pila de contexto
                        this.contextStack.push({ code: this.code, stack: this.stack.slice(), bindings: this.bindings.slice() });
                
                        // Convertir el cuerpo de la función a una cadena de entrada
                        const functionBodyString = closure1.body.join('\n');
                        console.log('Cuerpo de la función como cadena:', functionBodyString);
                
                        // Crear un nuevo lexer y parser con la cadena de entrada
                        const chars = new antlr4.InputStream(functionBodyString);
                        const lexer = new biesVMLexer(chars);
                        const tokens = new antlr4.CommonTokenStream(lexer);
                        const parser = new biesVMParser(tokens);
                
                        // Generar el árbol de análisis sintáctico
                        parser.buildParseTrees = true;
                        const tree = parser.program();
                
                        // Visitar el árbol y ejecutar las instrucciones
                        const visitor = new Visitor();
                        visitor.vm = this; // Pasar la instancia actual de VM al visitor
                        visitor.visit(tree);
                
                        // Empujar el valor como parte del nuevo entorno de bindings
                       // this.bindings.push({ 0: value });
                    } else {
                        console.error('Closure o cuerpo del closure es undefined');
                        throw new Error('Closure or closure body is undefined');
                    }
                    
                    break;
            
            case 'RET':
                let returnValue = this.stack.pop(); // Valor de retorno de la función
            
                // Restauramos el contexto previo
                let previousContext = this.contextStack.pop();
                if (previousContext) {
                    this.code = previousContext.code;  // Restaurar código anterior
                    this.stack = previousContext.stack; // Restaurar pila anterior
                    this.bindings = previousContext.bindings; // Restaurar bindings anteriores
                    this.instructionPointer = previousContext.instructionPointer; // Restaurar puntero de instrucción
            
                    // Empujar el valor de retorno en la pila si no es undefined
                    if (returnValue !== undefined) {
                        this.stack.push(returnValue);
                    }
                }
                break;
                
            case 'INI':
                // Inicializa el entorno y apunta al código de la función principal
                const mainFunctionName = instr.args[0];
                const mainFunctionBody = this.functions[mainFunctionName];
                if (!mainFunctionBody) {
                    throw new Error(`Main function ${mainFunctionName} not defined`);
                }
                this.code = mainFunctionBody; // Cambia el código a partir de la función principal
                this.stack = [];  // Reinicia la pila
                this.bindings = [{}]; // Reinicia el entorno de bindings
                this.contextStack = []; // Reinicia el contexto de ejecución
                this.instructionPointer = 0; // Reinicia el puntero de instrucción
                break;
            
            default:
                throw new Error(`Unknown instruction: ${instr.type}`);
        }
    }
}

export default VM;