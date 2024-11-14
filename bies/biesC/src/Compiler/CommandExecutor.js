import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import fs from 'fs';
import { Logger } from '../Logger.js';

/**
 * Clase que se encarga de ejecutar los comandos del sistema.
 */
class CommandExecutor {
    /**
     * Ejecuta los comandos del sistema.
     * @returns {Promise<void>}
     */

    /*
async executeCommands() {
        try {
            const filename = fileURLToPath(import.meta.url);
            const dirname = path.dirname(__filename);

            const projectRoot = path.join(__dirname, '..', '..', '..');
            const commands = [
                cd ${path.join(projectRoot, 'biesVM')},
                'rmdir /s /q output',
                'mkdir output',
                java -jar ${path.join('lib', 'antlr-4.13.1-complete.jar')} -Dlanguage=JavaScript ./grammar/biesVM.g4 -no-listener -visitor -o output,
                biesVM ${path.join('basm', 'Compilador.basm')} -v
            ].join(' && ');

            const child = spawn(commands, { shell: true, cwd: projectRoot, stdio: 'inherit' });

            child.on('error', (error) => {
                console.error(chalk.red(Error al ejecutar los comandos: ${error.message}));
            });

            child.on('exit', (code) => {
                if (code !== 0) {
                    console.error(chalk.red(El proceso terminó con el código: ${code}));
                }
            });
        } catch (error) {
            console.error(chalk.red(Error al ejecutar los comandos: ${error.message}));
        }
    }
    */
    

    async executeCommands() {
        const logger = new Logger(); // Instancia del Logger

            try {
                const filename = fileURLToPath(import.meta.url);
                const dirname = path.dirname(filename);
        
                const projectRoot = path.join(dirname, '..', '..', '..');
                console.log(`Project root: ${projectRoot}`);
    
                // Verificar si el directorio biesVM existe
                const biesVMPath = path.join(projectRoot, 'biesVM');
                if (!fs.existsSync(biesVMPath)) {
                    console.error(chalk.red('El directorio biesVM no existe en la ruta especificada.'));
                    return;
                }
        
                // Determinar los comandos según el sistema operativo
                const isWindows = process.platform === 'win32';
                const rmdirCommand = isWindows ? 'rmdir /s /q output' : 'rm -rf output';
                const mkdirCommand = 'mkdir output';
        
                // Crear los comandos con las rutas correctas
                const cdCommand = `cd "${biesVMPath}"`;
                const antlrCommand = `java -jar ${path.join('lib', 'antlr-4.13.1-complete.jar')} -Dlanguage=JavaScript ${path.join(biesVMPath, 'grammar', 'biesVM.g4')} -no-listener -visitor -o ${path.join(biesVMPath, 'output')}`;
                //const biesVMCommand = `biesVM ${path.join('basm', 'Compilador.basm')} -v`;
                var biesVMCommand = `node src/biesVM.js ${path.join('basm', 'Compilador.basm')}`;
                logger.log(chalk.blueBright('Ejecutando los comandos...'));
                const flags = [
                    logger.getVerbose() ? '-v' : '',
                    logger.getDebug()  ? '-d' : '',
                    logger.getOutfile()  ? '-o' : '',
                    logger.getErrfile()  ? '-e' : ''
                ];
                // Filtrar las opciones vacías y unirlas al comando
                biesVMCommand += ' ' + flags.filter(Boolean).join(' ');
                // Unir los comandos usando '&&'
                const commands = [
                    cdCommand,
                    rmdirCommand,
                    mkdirCommand,
                    antlrCommand,
                    biesVMCommand
                ].join(' && ');
        
                // Ejecutar los comandos
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