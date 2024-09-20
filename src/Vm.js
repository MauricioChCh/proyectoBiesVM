class VM {
    constructor() {
        this.stack = []; // S: Pila principal de ejecución
        this.bindings = [{ /* Capa 0 */ }]; // B: Entorno de bindings (capa 0 inicial)
        this.contextStack = []; // D: Contexto de ejecución
        this.environment = []; 
        this.functions = {}; // Almacena las funciones definidas

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
                const b = this.stack.pop();
                const a = this.stack.pop();
                this.stack.push(a + b);
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
                // BST capa varIndex: Guarda lo último de la pila en la capa y variable indicadas
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
                // LDF functionName: Carga una función en la pila
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
                let value = this.stack.pop();   // El valor a pasar a la función
            
                if (closure1 && closure1.body) {
                    // Guarda el estado actual en la pila de contexto
                    this.contextStack.push({ code: this.code, stack: this.stack.slice(), bindings: this.bindings.slice() });
            
                    // Cargar el cuerpo de la función como nuevo código
                    this.code = closure1.body;
            
                    // Empujar el valor como parte del nuevo entorno de bindings
                    this.bindings.push({ 0: value });
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
                this.bindings = []; // Reinicia el entorno de bindings
                this.contextStack = []; // Reinicia el contexto de ejecución
                break;
            
            default:
                throw new Error(`Unknown instruction: ${instr.type}`);
        }
    }
}

export default VM;