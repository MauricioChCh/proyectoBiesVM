import antlr4 from 'antlr4';
import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
import Visitor from './Visitor.js';
import fs from 'fs';
import chalk from 'chalk';

// Función que integra el lexer y parser y analiza el archivo
export function analizarArchivoBasm(filePath, logger) {
    try {
        const input = fs.readFileSync(filePath, { encoding: 'utf-8' });

        const chars = new antlr4.InputStream(input);
        const lexer = new biesVMLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new biesVMParser(tokens);

        parser.buildParseTrees = true;
        const tree = parser.program();

        //console.log("Tree: " + tree.toStringTree(null, parser));

        logger.debug(chalk.cyanBright('Árbol de análisis sintáctico:'));
        logger.debug(tree.toStringTree(null, parser)); // Muestra el árbol de análisis

        const visitor = new Visitor(logger);
        visitor.visit(tree); // Ejecuta el visitor, lo que también ejecutará las instrucciones

        return true;
    } catch (error) {
        console.error(chalk.red('Error durante el análisis del archivo:'), error);
        return false;
    }
}