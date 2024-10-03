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

    visitFunctionDef(ctx) { // Maneja las definiciones de funciones
        const functionName = ctx.LABEL_IDENTIFIER(0).getText(); // Consigo el nombre o numeración del label
        const functionBody = ctx.statement().map(stmt => stmt.getText()); // Se obtiene el cuerpo de la función (Código)

        if (!this.vm.functions) { // Por si no existe el objeto functions dentro de la vm, lo crea vacío
            this.vm.functions = {};
        }

        this.vm.functions[functionName] = functionBody;
        this.logger.log(`Definida función ${functionName} con cuerpo: ${functionBody}`);
        return super.visitFunctionDef(ctx);
    }

    visitInstruction(ctx) {
        const text = ctx.getText().trim();
        this.logger.log(`Visitando instrucción: ${text}`);

        const parts = text.split(/\s+/);
        const type = parts[0];
        const args = parts.slice(1);

        this.vm.executeInstruction({ type, args });
        return super.visitInstruction(ctx);
    }
}

export default Visitor;