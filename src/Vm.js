import Visitor from './Visitor.js';
import antlr4 from 'antlr4';
import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';

class VM {
    constructor(logger = { log: () => {} }) {
        this.stack = [];                    // S: Pila principal de ejecución
        this.bindings = [{ /* Capa 0 */ }]; // B: Entorno de bindings (capa 0 inicial)
        this.contextStack = [];             // D: Contexto de ejecución
        this.environment = [];              // E: Entorno actual
        this.functions = {};                // Almacena las funciones definidas
        this.code = [];                     // Código a ejecutar
        this.instructionPointer = 0;        // Puntero de instrucción
        this.logger = logger;               // Logger para mensajes de depuración
    }

    getCurrentLayer(layerIndex) { // Ayuda a obtener la capa/layer actual
        if (!this.bindings[layerIndex]) {
            this.bindings[layerIndex] = {};
        }
        return this.bindings[layerIndex];
    }

    executeInstruction(instr) {
        switch (instr.type) {
            case 'LDV': // ([LDV V| C], S, B, D) => (C, [V | S], B, D) carga un valor V en la pila S
                this.stack.push(parseInt(instr.args[0]));
                break;

            case 'ADD': // ([ADD], S, B, D) => (C, [A + B | S], B, D) suma los dos valores superiores de S
                this.stack.push(this.stack.pop() + this.stack.pop());
                break;

            case 'MUL': // ([MUL], S, B, D) => (C, [A * B | S], B, D) multiplica los dos valores superiores de S
                this.stack.push(this.stack.pop() * this.stack.pop());
                break;

            case 'SUB': // ([SUB], S, B, D) => (C, [B - A | S], B, D) resta los dos valores superiores de S
                const A = this.stack.pop(); // A
                const B = this.stack.pop(); // B
                this.stack.push(A - B); // B - A
                break;

            case 'DIV': // ([DIV], S, B, D) => (C, [B / A | S], B, D) divide los dos valores superiores de S
                const divisor = this.stack.pop(); // A
                const dividend = this.stack.pop(); // B
                if (divisor === 0) {
                    throw new Error('Error: Division by zero');
                }
                this.stack.push(dividend / divisor);
                break;

            case 'PRN': // ([PRN], S, B, D) => (C, S, B, D) imprime el valor superior de S y lo remueve
                const print = this.stack.pop();
                if (print !== undefined) {
                    console.log(print);
                }
                break;

            case 'HLT': // ([HLT], S, B, D) => (C, [], [], []) reinicia el estado de la VM
                this.code = [];
                this.stack = [];
                this.bindings = [];
                this.contextStack = [];
                break;

            case 'STK': // ([STK L, V], S, B, D) => (C, S', [S.pop() | B[L][V]], D) guarda el valor superior de S en B[L][V]
                const [stkLayerIndex, stkVarIndex] = instr.args;
                const stkValueToStore = this.stack.pop();
                this.getCurrentLayer(stkLayerIndex)[stkVarIndex] = stkValueToStore;
                break;

            case 'BST': // ([BST V, L], S, B, D) => (C, S, [V | B[L]], D) almacena V en el layer L de B
                const [layerIndex, varIndex] = instr.args;
                const valueToStore = this.stack.pop();
                this.getCurrentLayer(layerIndex)[varIndex] = valueToStore;
                break;

            case 'BLD': // ([BLD L, V], S, B, D) => (C, [B[L][V] | S], B, D) carga el valor de B en la pila
                const [bindLayer, bindVarIndex] = instr.args;
                const valueToLoad = this.getCurrentLayer(bindLayer)[bindVarIndex];
                this.stack.push(valueToLoad);
                break;

            case 'LDF': // ([LDF F | C], S, E, D) => (C, [FCL | S], E, D) si D.locFun[F] = FCL. Entonces carga la función F en la pila
                const functionName = instr.args[0];
                const functionBody = this.functions[functionName];
                if (!functionBody) {
                    throw new Error(`Function ${functionName} not defined`);
                }
                const closure = {
                    functionName: functionName,
                    body: functionBody,
                    paramCount: this.functions[functionName].paramCount, // Asegúrate de tener esta información
                    environment: this.environment.slice()
                };
                this.stack.push(closure);
                break;

            case 'APP': // ([APP], S, B, D) => (C, [FCL | S], B, [FCL, S, B, C, I | D]) aplica la función FCL
                let closureAPP = this.stack.pop();
                if (closureAPP && closureAPP.body) {
                    // Guardamos el contexto actual
                    this.contextStack.push({
                        code: this.code,
                        instructionPointer: this.instructionPointer,
                        stack: this.stack.slice(),
                        bindings: this.bindings.slice()
                    });

                    // Creamos un nuevo binding para los argumentos de la función
                    let newBinding = {};
                    // Asumimos que el número de argumentos es el número de parámetros
                    // definidos en la función. Si no está disponible, podríamos usar un valor por defecto.
                    let argCount = closureAPP.paramCount || 1; // Por defecto, asumimos 1 argumento
                    for (let i = 0; i < argCount; i++) {
                        if (this.stack.length > 0) {
                            newBinding[i] = this.stack.pop();
                        } else {
                            console.warn(`Advertencia: No hay suficientes argumentos en la pila para la función ${closureAPP.functionName}`);
                            break;
                        }
                    }
                    this.bindings.unshift(newBinding);

                    // Cambiamos al cuerpo de la función
                    this.code = closureAPP.body;
                    this.instructionPointer = 0;

                    // Ejecutamos el cuerpo de la función
                    const functionBody = this.code.join('\n');
                    this.logger.log(`Ejecutando función ${closureAPP.functionName} con cuerpo:\n${functionBody}`);
                    const chars = new antlr4.InputStream(functionBody);
                    const lexer = new biesVMLexer(chars);
                    const tokens = new antlr4.CommonTokenStream(lexer);
                    const parser = new biesVMParser(tokens);
                    parser.buildParseTrees = true;
                    const tree = parser.program();
                    const visitor = new Visitor();
                    visitor.vm = this;
                    visitor.visit(tree);
                } else {
                    throw new Error('Closure or closure body is undefined');
                }
                break;

            case 'RET': // ([RET], S, B, D) => (C, S', B', D) retorna desde una función, restaurando el estado anterior
                let returnValue = this.stack.pop();
                let previousContext = this.contextStack.pop();
                if (previousContext) {
                    this.code = previousContext.code;
                    this.stack = previousContext.stack;
                    this.bindings = previousContext.bindings;
                    this.instructionPointer = previousContext.instructionPointer;
                    if (returnValue !== undefined) {
                        this.stack.push(returnValue);
                    }
                }
                break;

            case 'INI': // ([INI F], S, B, D) => (C, [], [{}], []) establece el código de la función principal
                const mainFunctionName = instr.args[0];
                const mainFunctionBody = this.functions[mainFunctionName];
                if (!mainFunctionBody) {
                    throw new Error(`Main function ${mainFunctionName} not defined`);
                }
                this.code = mainFunctionBody;
                this.stack = [];
                this.bindings = [{}];
                this.contextStack = [];
                this.instructionPointer = 0;
                break;

            default:
                throw new Error(`Unknown instruction: ${instr.type}`);
        }
    }
}

export default VM;