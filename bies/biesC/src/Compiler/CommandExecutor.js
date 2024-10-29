import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

/**
 * Clase que se encarga de ejecutar los comandos del sistema.
 */
class CommandExecutor {
    /**
     * Ejecuta los comandos del sistema.
     * @returns {Promise<void>}
     */
    async executeCommands() {
        try {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);

            const projectRoot = path.join(__dirname, '..', '..', '..');
            const commands = [
                `cd ${path.join(projectRoot, 'biesVM')}`,
                'rmdir /s /q output',
                'mkdir output',
                `java -jar ${path.join('lib', 'antlr-4.13.1-complete.jar')} -Dlanguage=JavaScript ./grammar/biesVM.g4 -no-listener -visitor -o output`,
                `biesVM ${path.join('basm', 'Compilador.basm')} -v`
            ].join(' && ');

            const child = spawn(commands, { shell: true, cwd: projectRoot, stdio: 'inherit' });

            child.on('error', (error) => {
                console.error(chalk.red(`Error al ejecutar los comandos: ${error.message}`));
            });

            child.on('exit', (code) => {
                if (code !== 0) {
                    console.error(chalk.red(`El proceso terminó con el código: ${code}`));
                }
            });
        } catch (error) {
            console.error(chalk.red(`Error al ejecutar los comandos: ${error.message}`));
        }
    }
}

export default CommandExecutor;