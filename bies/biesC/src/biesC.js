#!/usr/bin/env node
/**
 * Script para el compilador que ejecuta archivos .bies.
 * Utiliza el módulo commander para gestionar argumentos de línea de comandos
 * y chalk para el formateo de la salida en consola.
 *
 * @module biesC
 */

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import chalk from 'chalk';
import { Logger } from './Logger.js';
import { analizarArchivoBies } from './integrateLexerParser.js';

const program = new Command();


/**
 * Configura el programa usando commander.
 *
 * - `nombre`: 'biesC' - Nombre del comando.
 * - `descripcion`: 'Compilador para ejecutar archivos .bies' - Descripción de la herramienta.
 * - `version`: '1.0.0' - Versión de la herramienta.
 *
 * @argument {string} <archivo> - Archivo BIES a ejecutar.
 * @option {boolean} -v, --verbose - Modo verbose para salida detallada.
 * @option {boolean} -d, --detail - Modo detallado para ver el proceso de parseo.
 * @option {string} -o, --outfile <outfile> - Archivo de salida .basm.
 * @option {string} -e, --errFile <errfile> - Archivo de errores .txt.
 */
program
    .name('biesC') // Nombre del comando
    .description('Compilador para ejecutar archivos .bies')
    .version('1.1.0') // Versión de la herramienta
    .argument('<archivo>', 'Archivo BIES a ejecutar') // Argumento obligatorio (el archivo)
    .option('-v, --verbose', 'Modo verbose') // Opción opcional para ver el proceso más detallado
    .option('-d, --detail', 'Modo detallado') // Opción opcional ver más detalladamente el proceso de parseo
    .option('-o, --outfile <outfile>', 'Modo outfile, sysout del archivo') // las salidas de print (sysout) en el archivo outfile
    .option('-e, --errFile <errfile>', 'Modo errfile, salidas syserr del archivo') // las salidas de errores (syserr) en el archivo errfile
    .action((fileName, options) => {
        const logger = Logger;
        

        /**
         * Verifica que el archivo tenga la extensión .bies y que exista.
         * Si hay errores, se detiene la ejecución y se muestra un mensaje en consola.
         *
         * @param {string} fileName - Nombre del archivo a verificar.
         * @param {object} options - Opciones del comando.
         */

        const fileExt = path.extname(fileName);
        if (fileExt !== '.bies') {
            logger.err("Error: El archivo debe tener la extensión .bies");
            process.exit(1);
        }

        // Verificar si el archivo existe
        if (!fs.existsSync(fileName)) {
            logger.err(`Error: El archivo ${fileName} no existe.`);
            process.exit(1);
        }


        // Validar outfile
        if (options.outfile) {
            let outExt = path.extname(options.outfile);
            if (!outExt) {
                // Si no hay extensión, agregar .basm
                options.outfile += '.basm';
            } else if (outExt !== '.basm') {
                logger.err("Error: El archivo de salida debe tener la extensión .basm");
                process.exit(1);
            }
        }
       

        // Validar errfile
        if (options.errFile) {
            let errExt = path.extname(options.errFile);
            if (!errExt) {
                // Si no hay extensión, agregar .txt
                options.errFile += '.txt';
            } else if (errExt !== '.txt') {
                logger.err("Error: El archivo de errores debe tener la extensión .txt");
                process.exit(1);
            }
        } 

        logger.configure(options.verbose, options.detail, options.outfile, options.errFile);
        

        // Opción de modo detallado
        logger.log(chalk.blueBright('Modo detallado activado...'));
        console.log(`Verificando el archivo: ${fileName}`);

        try {
            analizarArchivoBies(fileName);

        } catch (error) {
            logger.err((`Error al analizar el archivo ${fileName}:`), error);
        }

    });

// Procesa los argumentos de la línea de comandos
program.parse(process.argv);