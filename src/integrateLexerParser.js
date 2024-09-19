import antlr4 from 'antlr4';
import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
import Visitor from './Visitor.js';  
import VM from './Vm.js';
import fs from 'fs';





function parseInstruction(stmt) {
    const instr = stmt.instruction();
    if (!instr) return null;
    
    console.log("Parsing instruction:", instr.getText());
    
    try {
        if (instr.LDV()) {
            const numberCtx = instr.NUMBER();
            if (numberCtx && typeof numberCtx.getText === 'function') {
                return { type: 'LDV', value: numberCtx.getText() };
            } else {
                console.error("LDV instruction doesn't have the expected NUMBER token");
            }
        } else if (instr.ADD()) {
            return { type: 'ADD' };
        } else if (instr.RET()) {
            return { type: 'RET' };
        } else if (instr.HLT()) {
            return { type: 'HLT' };
        } else if (instr.APP()) {
            return { type: 'APP' };
        } else if (instr.PRN()) {
            return { type: 'PRN' };
        } else if (instr.BLD()) {
            const numbers = instr.NUMBER();
            if (numbers.length >= 2 && typeof numbers[0].getText === 'function' && typeof numbers[1].getText === 'function') {
                return { type: 'BLD', env: numbers[0].getText(), index: numbers[1].getText() };
            } else {
                console.error("BLD instruction doesn't have the expected NUMBER tokens");
            }
        } else if (instr.LDF()) {
            const labelCtx = instr.LABEL_IDENTIFIER();
            if (labelCtx && typeof labelCtx.getText === 'function') {
                return { type: 'LDF', func: labelCtx.getText() };
            } else {
                console.error("LDF instruction doesn't have the expected LABEL_IDENTIFIER token");
            }
        } else if (instr.INI()) {
            const labelCtx = instr.LABEL_IDENTIFIER();
            if (labelCtx && typeof labelCtx.getText === 'function') {
                return { type: 'INI', func: labelCtx.getText() };
            } else {
                console.error("INI instruction doesn't have the expected LABEL_IDENTIFIER token");
            }
        }
    } catch (error) {
        console.error("Error parsing instruction:", instr.getText(), error);
    }
    
    console.warn(`Instrucción desconocida o no manejada: ${instr.getText()}`);
    return null;
}




// Función que integra el lexer y parser y analiza el archivo
export function analizarArchivoBasm(filePath) {
    try {
        const input = fs.readFileSync(filePath, { encoding: 'utf-8' });
        console.log('Contenido del archivo:', input);
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
    

         //console.log('Árbol de análisis sintáctico:', tree.toStringTree(null, parser));

        const visitor = new Visitor();

         visitor.visit(tree); // Ejecuta el visitor, lo que también ejecutará las instrucciones
    


        // console.log('Ejecución completada para el archivo', filePath);


        return true;
    } catch (error) {
        console.error('Error durante el análisis del archivo:', error);
        return false;
    }
}