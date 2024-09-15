import antlr4 from 'antlr4';
import  biesVMLexer  from '../output/biesVMLexer.js'; 
import  biesVMParser  from '../output/biesVMParser.js'; 
;
import fs from 'fs';

// Función que integra el lexer y parser y analiza el archivo
export function analizarArchivoBasm(filePath) {
    
    try {
        // Leemos el archivo de entrada 
        const input = fs.readFileSync(filePath, { encoding: 'utf-8' });

        // Iniciamos el lexer
        const chars = new antlr4.InputStream(input);
        const lexer = new biesVMLexer(chars);

        // Generamos tokens a partir del lexer
        const tokens = new antlr4.CommonTokenStream(lexer);

        console.log(tokens);
        // Pasa los tokens al parser
        const parser = new biesVMParser(tokens);

        // Llama la regla principal del parser (por ejemplo, 'program')
        const tree = parser.program();

        // Si llega aquí, el archivo es válido sintácticamente
        console.log('El archivo .basm es válido y ha sido parseado correctamente.');
        console.log(tree.toStringTree(parser.ruleNames)); // Opción para imprimir el árbol sintáctico

        // Retornar true si el análisis fue exitoso
        return true;
    } catch (error) {
        console.error('Error durante el análisis del archivo:', error);
        return false;
    }
}

