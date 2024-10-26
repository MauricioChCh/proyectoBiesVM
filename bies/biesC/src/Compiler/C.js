import chalk from 'chalk';
import FileWriter from './FileWriter.js';
import CommandExecutor from './CommandExecutor.js';

/**
 * Clase que representa el compilador (C).
 */
class C {
    /**
     * Crea una instancia de C.
     * @param {Object} [logger={ log: () => {} }] - Objeto Logger para registrar mensajes.
     */
    constructor(logger = { log: () => { } }) {
        /**
         * Logger para registrar mensajes.
         * @type {Object}
         */
        this.logger = logger;

        /**
         * Código a ser compilado.
         * @type {Array}
         */
        this.code = [];

        /**
         * Bytecode generado.
         * @type {Array}
         */
        this.bydeCode = [];

        /**
         * Instancia de FileWriter para escribir el bytecode.
         * @type {FileWriter}
         */
        this.fileWriter = new FileWriter();

        /**
         * Instancia de CommandExecutor para ejecutar comandos del sistema.
         * @type {CommandExecutor}
         */
        this.commandExecutor = new CommandExecutor();
    }

    /**
     * Ejecuta el código proporcionado en el compilador.
     * @param {Array} code - El código a ejecutar.
     */
    run(code) {
        this.code = code;
        for (const instruction of code) {
            this.convertCodeToByteCode(instruction);
        }
        this.fileWriter.writeByteCodeToFile(this.bydeCode); // Escribe el bytecode en un archivo
        this.commandExecutor.executeCommands(); // Ejecuta los comandos del sistema
    }

    /**
     * Convierte una instrucción a bytecode.
     * @param {string} instruction - La instrucción a convertir.
     */
    convertCodeToByteCode(instruction) {
        console.log(chalk.yellow(`Convirtiendo `) + chalk.green(`${instruction}`) + chalk.yellow(` a bytecode...`));

        switch (instruction) {
            case 'statement':
                // No hacer nada por el momento
                return;

            case 'print':
                this.bydeCode.push('PRN');
                break;

            case 'EOF':
                this.bydeCode.push('HLT');
                break;

            default:
                if (instruction.startsWith('"') && instruction.endsWith('"')) {
                    this.bydeCode.push(`LDV ${instruction}`);
                }
                break;
        }
    }
}

export default C;