import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import fs from 'fs';
import { Logger } from '../Logger.js';

/**
 * @file CommandExecutor.js
 * Clase que se encarga de ejecutar los comandos del sistema.
 * Proporciona métodos para construir y ejecutar comandos necesarios para
 * la ejecución de la máquina virtual biesVM.
 *
 * @class CommandExecutor
 * @version 1.0.0
 * 
 * @author Joshua Yarit Amador Lara
 * @author Mauricio Chaves Chaves [Coordinador]
 * @author Fabiola Rojas Alvarado
 * @author Eddy Villarreal Muñoz
 */
class CommandExecutor {
    /**
     * Crea una instancia de CommandExecutor.
     */
    constructor() {
        /**
         * @property {Logger} logger - Instancia del logger para manejo de logs.
         */
        this.logger = Logger;
    }

    /**
     * Obtiene la ruta raíz del proyecto.
     * @returns {string} Ruta raíz del proyecto.
     */
    getProjectRoot() {
        const filename = fileURLToPath(import.meta.url);
        const dirname = path.dirname(filename);
        return path.join(dirname, '..', '..', '..');
    }

    /**
     * Verifica si el directorio biesVM existe.
     * @param {string} projectRoot - Ruta raíz del proyecto.
     * @returns {string} Ruta del directorio biesVM.
     * @throws {Error} Si el directorio no existe.
     */
    validateBiesVMDirectory(projectRoot) {
        const biesVMPath = path.join(projectRoot, 'biesVM');
        if (!fs.existsSync(biesVMPath)) {
            throw new Error('El directorio biesVM no existe en la ruta especificada.');
        }
        return biesVMPath;
    }

    /**
     * Obtiene los comandos del sistema según el sistema operativo.
     * @param {boolean} isWindows - Indica si el sistema operativo es Windows.
     * @returns {Object} Comandos del sistema.
     */
    getSystemCommands(isWindows) {
        return {
            rmdir: isWindows ? 'rmdir /s /q output' : 'rm -rf output',
            mkdir: 'mkdir output'
        };
    }

    /**
     * Construye el comando biesVM con las flags correspondientes.
     * @returns {string} Comando biesVM completo.
     */
    buildBiesVMCommand() {
        const baseCommand = `node src/biesVM.js "${path.join('basm', 'Compilador.basm')}"`;
        const flags = [
            this.logger.getVerbose() ? '-v' : '',
            this.logger.getDebug() ? '-d' : ''
            // Descomentar si se requiere soporte para archivos de salida y error:
            // this.logger.getOutfile() ? '-o' : '',
            // this.logger.getErrfile() ? '-e' : ''
        ];
        return `${baseCommand} ${flags.filter(Boolean).join(' ')}`;
    }

    /**
     * Construye la lista de comandos a ejecutar.
     * @param {string} biesVMPath - Ruta del directorio biesVM.
     * @param {Object} systemCommands - Comandos del sistema.
     * @returns {string} Comandos concatenados.
     */
    buildCommandList(biesVMPath, systemCommands) {
        const antlrCommand = `java -jar "${path.join('lib', 'antlr-4.13.1-complete.jar')}" ` +
            `-Dlanguage=JavaScript "${path.join(biesVMPath, 'grammar', 'biesVM.g4')}" ` +
            `-no-listener -visitor -o "${path.join(biesVMPath, 'output')}"`;

        return [
            `cd "${biesVMPath}"`,
            systemCommands.rmdir,
            systemCommands.mkdir,
            antlrCommand,
            this.buildBiesVMCommand()
        ].join(' && ');
    }

    /**
     * Ejecuta el proceso con los comandos especificados.
     * @param {string} commands - Comandos a ejecutar.
     * @param {string} projectRoot - Ruta raíz del proyecto.
     * @returns {Promise<void>}
     */
    executeProcess(commands, projectRoot) {
        return new Promise((resolve, reject) => {
            const child = spawn(commands, {
                shell: true,
                cwd: projectRoot,
                stdio: 'inherit'
            });

            child.on('error', (error) => {
                reject(new Error(`Error al ejecutar los comandos: ${error.message}`));
            });

            child.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`El proceso terminó con el código: ${code}`));
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Ejecuta los comandos del sistema.
     * @returns {Promise<void>}
     */
    async executeCommands() {
        try {
            console.log(chalk.blueBright('Llamando a biesVM ...'));

            const projectRoot = this.getProjectRoot();
            this.logger.log(`Project root: ${projectRoot}`);

            const biesVMPath = this.validateBiesVMDirectory(projectRoot);
            const systemCommands = this.getSystemCommands(process.platform === 'win32');
            const commands = this.buildCommandList(biesVMPath, systemCommands);

            await this.executeProcess(commands, projectRoot);
        } catch (error) {
            this.logger.err(chalk.red(error.message));
        }
    }
}

export default CommandExecutor;
