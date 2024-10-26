import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

/**
 * Clase que se encarga de escribir el bytecode en un archivo.
 */
class FileWriter {
    /**
     * Escribe el bytecode en un archivo.
     * @param {Array} bytecode - El bytecode a escribir.
     * @returns {Promise<void>}
     */
    async writeByteCodeToFile(bytecode) {
        try {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);

            const dirPath = path.join(__dirname, '..', '..', '..', 'biesVM', 'basm'); // Subir dos niveles y luego navegar a biesVM/basm
            const fileName = 'Compilador.basm'; // Nombre de archivo
            const filePath = path.join(dirPath, fileName);

            // Asegurarse de que la ruta de destino exista
            await fs.mkdir(dirPath, { recursive: true });

            const content = bytecode.join('\n');
            await fs.writeFile(filePath, content, 'utf-8');
        } catch (error) {
            console.error(chalk.red(`Error al escribir el bytecode en el archivo: ${error.message}`));
        }
    }
}

export default FileWriter;