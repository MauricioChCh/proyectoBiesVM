import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { Logger } from '../Logger.js';

/**
 * Clase que se encarga de escribir el bytecode en un archivo.
 * Permite escribir el bytecode en una ruta especificada por el usuario o en una ruta por defecto.
 *
 * @class FileWriter
 * @file FileWriter.js
 * @version 1.0.0
 * 
 * @author Joshua Yarit Amador Lara
 * @author Mauricio Chaves Chaves [Coordinador]
 * @author Fabiola Rojas Alvarado
 * @author Eddy Villarreal Muñoz
 * 
 * @requires fs
 * @requires path
 * @requires chalk
 * @requires Logger
 * @requires fileURLToPath
 */
class FileWriter {
    /**
     * Escribe el bytecode en los archivos necesarios.
     * Si el usuario especifica un archivo de salida, se escribe allí; de lo contrario, se usa un archivo por defecto.
     * 
     * @param {Array<string>} bytecode - El bytecode a escribir, representado como un array de strings.
     * @returns {Promise<void>}
     */
    async writeByteCodeToFile(bytecode) {
        const logger = Logger;
        try {
            const content = bytecode.join('\n');
            const outfile = logger.getOutfile();

            // Escribir en el archivo proporcionado por el usuario si existe
            if (outfile) {
                await this._writeToFile(outfile, content);
                console.log(chalk.green(`Bytecode guardado en: ${outfile}`));
            }

            // Escribir en el archivo por defecto
            const defaultFilePath = this._getDefaultFilePath();
            await this._writeToFile(defaultFilePath, content);

        } catch (error) {
            logger.err(chalk.red(`Error al escribir el bytecode: ${error.message}`));
        }
    }

    /**
     * Escribe contenido en un archivo específico.
     * 
     * @private
     * @param {string} filePath - La ruta del archivo donde se guardará el contenido.
     * @param {string} content - El contenido a escribir en el archivo.
     * @returns {Promise<void>}
     */
    async _writeToFile(filePath, content) {
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, content, 'utf-8');
    }

    /**
     * Devuelve la ruta del archivo por defecto para guardar el bytecode.
     * 
     * @private
     * @returns {string} Ruta del archivo por defecto.
     */
    _getDefaultFilePath() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const dirPath = path.join(__dirname, '..', '..', '..', 'biesVM', 'basm');
        return path.join(dirPath, 'Compilador.basm');
    }
}

export default FileWriter;
