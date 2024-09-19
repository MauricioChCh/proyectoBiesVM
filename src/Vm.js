class VM {
    constructor() {
        this.stack = []; //D
        this.environment = {}; 
        this.functions = {};
        
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
            case 'BSD':
                // Implementar lógica para BLD
                break;
            case 'BLD':
                // Implementar lógica para BLD
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