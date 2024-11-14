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
        this.logger = logger;
        this.code = [];
        this.bydeCode = [];
        this.fileWriter = new FileWriter();
        this.commandExecutor = new CommandExecutor();
    }

    /**
     * Ejecuta el código proporcionado en el compilador.
     * @param {Array} code - El código a ejecutar.
     */
    run(code) {
        this.code = code;
        this.fileWriter.writeByteCodeToFile(this.code); // Escribe el bytecode en un archivo
        this.commandExecutor.executeCommands(); // Ejecuta los comandos del sistema
    }
}

export default C;