import FileWriter from './FileWriter.js';
import CommandExecutor from './CommandExecutor.js';

/**
 * Clase que representa un compilador.
 * Se encarga de procesar código, generar bytecode y ejecutar comandos del sistema.
 * 
 * @class C
 * @file C.js
 * @version 1.0.0
 * 
 * @author Joshua Yarit Amador Lara
 * @author Mauricio Chaves Chaves [Coordinador]
 * @author Fabiola Rojas Alvarado
 * @author Eddy Villarreal Muñoz
 * 
 * @requires FileWriter
 * @requires CommandExecutor
 */
class C {
  
    /**
     * Crea una instancia del compilador C.
     */
    constructor() {
        /**
         * @property {Array} code - El código fuente proporcionado al compilador.
         */
        this.code = [];
        
        /**
         * @property {Array} byteCode - El código en formato de bytecode generado.
         */
        this.byteCode = []; // Posible corrección: 'bydeCode' a 'byteCode'
        
        /**
         * @property {FileWriter} fileWriter - Instancia para manejar la escritura de archivos.
         */
        this.fileWriter = new FileWriter();
        
        /**
         * @property {CommandExecutor} commandExecutor - Instancia para ejecutar comandos del sistema.
         */
        this.commandExecutor = new CommandExecutor();
    }

    /**
     * Ejecuta el código proporcionado y gestiona la generación de bytecode y ejecución de comandos.
     * 
     * @param {Array} code - El código fuente a ejecutar.
     * @throws {Error} Lanza un error si el código proporcionado no es válido.
     */
    run(code) {
        this.code = code;
        this.fileWriter.writeByteCodeToFile(this.code); // Escribe el bytecode en un archivo
        this.commandExecutor.executeCommands(); // Ejecuta los comandos del sistema
    }
}

export default C;
