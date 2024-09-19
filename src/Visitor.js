import biesLanguageVisitor from '../output/biesLanguageVisitor.js';
import biesLanguageParser from '../output/biesLanguageParser.js';
import VM from './Vm.js';

export class Visitor extends biesLanguageVisitor {
    constructor() {
        super();
        this.vm = new VM(); 
    }

    visitProgram(ctx) {
        console.log('Visitando el programa');
        super.visitProgram(ctx);
        return this.vm;
    }

    visitInstruction(ctx) {
        const text = ctx.getText().trim();
        console.log('Visitando instrucción', text);
        
        // Usar expresión regular para separar tipo y argumentos
        const match = text.match(/^([A-Z]+)(\d+( \d+)*)?$/); 
        if (!match) {
            throw new Error(`Formato de instrucción desconocido: ${text}`);
        }
    
        const type = match[1];
        const args = match[2] ? match[2].split(' ').map(arg => parseInt(arg)) : [];
    
        this.vm.executeInstruction({ type, args });
        return super.visitInstruction(ctx);
    }
   
}

export default Visitor;