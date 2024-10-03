#!/usr/bin/env node
// src/biesVM.js

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import chalk from 'chalk';
import { Logger } from './Logger.js';
import { analizarArchivoBasm } from './integrateLexerParser.js';

const program = new Command();

// Configuramos el programa usando commander
program
    .name('biesVM') // Nombre del comando
    .description('Máquina virtual para ejecutar archivos .basm')
    .version('1.0.0') // Versión de la herramienta
    .argument('<archivo>', 'Archivo BASM a ejecutar') // Argumento obligatorio (el archivo)
    .option('-v, --verbose', 'Modo verbose') // Opción opcional para ver el proceso más detallado
    .option('-d, --detail', 'Modo detallado') // Opción opcional ver más detalladamente el proceso de parseo
    .action((fileName, options) => {
        const logger = new Logger(options.verbose, options.detail);

        // Verificamos que el archivo tenga la extensión .basm
        const fileExt = path.extname(fileName);
        if (fileExt !== '.basm') {
            console.error(chalk.red("Error: El archivo debe tener la extensión .basm"));
            process.exit(1);
        }

        // Verificar si el archivo existe
        if (!fs.existsSync(fileName)) {
            console.error(chalk.red(`Error: El archivo ${fileName} no existe.`));
            process.exit(1);
        }

        // Opción de modo detallado
        logger.log(chalk.blueBright('Modo detallado activado...'));
        console.log(`Verificando el archivo: ${fileName}`);

        // Llamar a la integración del lexer y parser
        const esValido = analizarArchivoBasm(fileName, logger);

        if (esValido) {
            console.log(chalk.green(`El archivo ${fileName} es válido.`));
            // Aquí puedes invocar cualquier otra lógica, como ejecutar la VM
        } else {
            console.error(chalk.red(`El archivo ${fileName} tiene errores.`));
        }
    });

// Procesa los argumentos de la línea de comandos
program.parse(process.argv);