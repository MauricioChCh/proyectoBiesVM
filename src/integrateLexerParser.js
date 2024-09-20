import antlr4 from 'antlr4';
import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
import Visitor from './Visitor.js';  

import fs from 'fs';



// Función que integra el lexer y parser y analiza el archivo
export function analizarArchivoBasm(filePath) {
    try {
        const input = fs.readFileSync(filePath, { encoding: 'utf-8' });
        console.log('Contenido del archivo: \n', input);
        const chars = new antlr4.InputStream(input); //crea los chars 
        const lexer = new biesVMLexer(chars); //crea el lexer en base a los caracteres

        const tokens = new antlr4.CommonTokenStream(lexer); //crea los tokens
        const parser = new biesVMParser(tokens);  //crea el parser en base a los tokens


        // console.log('Tokens del lexer:');
        // lexer.getAllTokens().forEach(token => {
        //     console.log(token.type, token.text);
        // });


   
        parser.buildParseTrees = true;
        const tree = parser.program();
    

         console.log('Árbol de análisis sintáctico:', tree.toStringTree(null, parser));

        const visitor = new Visitor();

         visitor.visit(tree); // Ejecuta el visitor, lo que también ejecutará las instrucciones
    


        // console.log('Ejecución completada para el archivo', filePath);


        return true;
    } catch (error) {
        console.error('Error durante el análisis del archivo:', error);
        return false;
    }
}