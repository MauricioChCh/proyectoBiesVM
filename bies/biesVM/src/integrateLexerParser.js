import antlr4 from 'antlr4';
import biesVMLexer from '../output/biesVMLexer.js';
import biesVMParser from '../output/biesVMParser.js';
import Visitor from './Visitor.js';
import { Logger } from './Logger.js';
import fs from 'fs';
import chalk from 'chalk';

// Función que integra el lexer y parser y analiza el archivo
/**
 * Analiza un archivo .basm utilizando un lexer y un parser generados por ANTLR.
 *
 * @param {string} filePath - La ruta del archivo .basm a analizar.
 * @param {Logger} logger - Un objeto Logger para registrar mensajes y errores.
 * @returns {boolean} Devuelve true si el análisis fue exitoso, false en caso contrario.
 */
export function analizarArchivoBasm(filePath) {
    const logger = new Logger();
    try {
        // Lee el contenido del archivo especificado en `filePath`
        const input = fs.readFileSync(filePath, { encoding: 'utf-8' });

        // Crea un flujo de entrada para el lexer
        const chars = new antlr4.InputStream(input);
        const lexer = new biesVMLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);

        // Crea el parser con los tokens generados por el lexer
        const parser = new biesVMParser(tokens);

        parser.buildParseTrees = true
        ; // Habilita la construcción de árboles de análisis
        const tree = parser.program(); // Inicia el análisis sintáctico

        logger.debug(chalk.cyanBright('Árbol de análisis sintáctico:'));
        logger.debug(chalk.cyan(tree.toStringTree(null, parser))); // Muestra el árbol de análisis

        const visitor = new Visitor(); // Crea una instancia del visitor
        visitor.visit(tree); // Ejecuta el visitor, lo que también ejecutará las instrucciones
        return true; // Indica que el análisis fue exitoso
    } catch (error) {
        // Captura y muestra cualquier error que ocurra durante el análisis
        console.error(chalk.red('Error durante el análisis del archivo:'), error);
        return false; // Indica que el análisis falló
    }
}