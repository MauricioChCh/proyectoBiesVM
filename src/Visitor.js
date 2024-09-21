import chalk from 'chalk';
import biesLanguageVisitor from '../output/biesLanguageVisitor.js';
import VM from './Vm.js';


export class Visitor extends biesLanguageVisitor {
    constructor(logger = { log: () => {} }) {
        super();
        this.vm = new VM(logger); 
        this.logger = logger;
    }

    visitProgram(ctx) {
        this.logger.log(chalk.cyanBright('Visitando el programa'));
        super.visitProgram(ctx);
        return this.vm;
    }

    visitFunctionDef(ctx) {
        const functionName = ctx.LABEL_IDENTIFIER(0).getText();
        const functionBody = ctx.statement().map(stmt => stmt.getText());
        if (!this.vm.functions) {
            this.vm.functions = {};
        }
        this.vm.functions[functionName] = functionBody;
        this.logger.log(`Definida función ${functionName} con cuerpo: ${functionBody}`);
        return super.visitFunctionDef(ctx);
    }

    visitInstruction(ctx) {
        const text = ctx.getText().trim();
        this.logger.log(`Visitando instrucción: ${text}`);
        //console.log('Visitando instrucción: ${text}');
        
        // Usar expresión regular para separar tipo y argumentos
        const match = text.match(/^([A-Z]+)(\d+|\$[a-zA-Z][a-zA-Z0-9]*|(\d+ \d+))*$/);
        if (!match) {
            throw new Error(`Formato de instrucción desconocido: ${text}`);
        }

        const type = match[1];
        const args = match[2] ? match[2].split(' ').map(arg => isNaN(arg) ? arg : parseInt(arg)) : [];

        this.vm.executeInstruction({ type, args });
        return super.visitInstruction(ctx);
    }
   
}

export default Visitor;