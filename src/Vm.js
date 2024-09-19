class VM {
    constructor() {
        this.stack = []; // S: Pila principal de ejecución
        this.bindings = [{ /* Capa 0 */ }]; // B: Entorno de bindings (capa 0 inicial)
        this.contextStack = []; // D: Contexto de ejecución
        
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
            case 'PRN':
                
                console.log(this.stack.pop());
                break;
            case 'HLT':
                process.exit(0);
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
                // Implementar lógica para LDF
                break;
            case 'APP':
                // Implementar lógica para APP
                break;
            case 'RET':
                // Implementar lógica para RET
                break;
            case 'INI':
                // Implementar lógica para INI
                break;
            default:
                throw new Error(`Unknown instruction: ${instr.type}`);
        }
    }
}

export default VM;