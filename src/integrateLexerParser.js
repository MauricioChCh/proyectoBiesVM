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
        // logger.debug(chalk.cyanBright(`Analizando archivo: ${filePath}`));
        // logger.debug(chalk.cyanBright('Contenido del archivo:'));
        // logger.debug(input);

        //console.log('Contenido del archivo: \n', input);
        const chars = new antlr4.InputStream(input); //crea los chars 
        const lexer = new biesVMLexer(chars); //crea el lexer en base a los caracteres

        const tokens = new antlr4.CommonTokenStream(lexer); //crea los tokens
        const parser = new biesVMParser(tokens);  //crea el parser en base a los tokens


        // logger.debug('Tokens generados por el lexer:');
        // lexer.getAllTokens().forEach(token => {
        //     logger.debug(`Tipo: ${token.type}, Texto: ${token.text}`);
        // });


   
        parser.buildParseTrees = true;
        const tree = parser.program();
    

        logger.debug(chalk.cyanBright('Árbol de análisis sintáctico:'));
        logger.debug(tree.toStringTree(null, parser)); // Muestra el árbol de análisis

        
        const visitor = new Visitor(logger);

         visitor.visit(tree); // Ejecuta el visitor, lo que también ejecutará las instrucciones
    


      


        return true;
    } catch (error) {
        console.error('Error durante el análisis del archivo:', error);
        return false;
    }
}