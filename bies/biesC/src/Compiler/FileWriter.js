import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { Logger } from '../Logger.js';
/**
 * Clase que se encarga de escribir el bytecode en un archivo.
 */
class FileWriter {
    /**
     * Escribe el bytecode en los archivos necesarios.
     * @param {Array} bytecode - El bytecode a escribir.
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
     * @param {string} filePath - La ruta del archivo.
     * @param {string} content - El contenido a escribir.
     * @returns {Promise<void>}
     */
    async _writeToFile(filePath, content) {
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, content, 'utf-8');
    }

    /**
     * Devuelve la ruta del archivo por defecto para guardar el bytecode.
     * @returns {string} - La ruta del archivo por defecto.
     */
    _getDefaultFilePath() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const dirPath = path.join(__dirname, '..', '..', '..', 'biesVM', 'basm');
        return path.join(dirPath, 'Compilador.basm');
    }
}

export default FileWriter;