import chalk from 'chalk';
import biesLanguageVisitor from '../output/biesLanguageVisitor.js';
import VM from './Vm.js';

export class Visitor extends biesLanguageVisitor {
    constructor(logger = { log: () => {} }) {
        super();
        this.vm = new VM(logger);
        this.logger = logger;
        this.code = [];
        this.hasDetectedFunction = false; // Inicializa el estado de la detección de funciones
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

        this.vm.functions[functionName] = functionBody; // Se asigna la función a la vm
        this.logger.log(chalk.blue(`Definida función ${functionName} con cuerpo: ${functionBody}`));
        return super.visitFunctionDef(ctx); // Se visita la definición de la función
    }

    /*

    visitInstruction(ctx) {
        const text = ctx.getText().trim();
        this.logger.log(`Visitando instrucción: ${text}`);

        const parts = text.split(/\s+/);
        const type = parts[0];
        const args = parts.slice(1);

        this.vm.executeInstruction({ type, args });
        return super.visitInstruction(ctx);
    }

    * */

    visitInstruction(ctx) {
        const text = ctx.getText().trim();
        this.logger.log(`Visitando instrucción: ${text}`);

        // Separar la instrucción en tipo y argumentos
        const parts = text.split(/\s+/);
        const type = parts[0];
        const args = parts.slice(1);

        // Agregar la instrucción al código y actualizar la máquina virtual
        this.code.push({ type, args });
        this.vm.code = this.code;

        // Detectar si hay una función definida en el código
        //if (type === '$FUN' && !this.hasDetectedFunction) {
        //    this.hasDetectedFunction = true;
        //}

        // Verificar cuándo ejecutar el código según las instrucciones INI y HLT
        //if ((type === 'INI' && args[0] === '$main' && this.hasDetectedFunction) || (type === 'HLT' && !this.hasDetectedFunction)) {
        //    console.log('Ejecutando el código...');
        //    this.vm.run();
        //}

        this.vm.executeInstruction({ type, args });

        return super.visitInstruction(ctx); // Llamar a la implementación base si es necesario
    }
}

export default Visitor;