import chalk from 'chalk';
import biesCVisitor from '../output/biesCVisitor.js';
import biesCParser from '../output/biesCParser.js';
import C from './Compiler/C.js';

/**
 * Clase que implementa un visitante para el lenguaje Bies.
 * Extiende la funcionalidad de `biesCVisitor` para generar un árbol de sintaxis.
 */
export class Visitor extends biesCVisitor {
    /**
     * Crea una instancia de la clase Visitor.
     * @param {Object} [logger={ log: () => {} }] - Objeto que define el comportamiento del logger. Por defecto, usa un logger vacío.
     */
    constructor(logger = { log: () => { } }) {
        super();
        this.logger = logger;
        this.ruleNames = biesCParser.ruleNames; // Obtiene los nombres de las reglas del parser
        this.code = []; // Arreglo para acumular el recorrido
        this.compiler = new C(logger); // Instancia del compilador
    }

    /**
     * Visita el nodo raíz del programa.
     * @param {Object} ctx - Contexto del nodo del programa en el árbol de sintaxis.
     */
    visitProgram(ctx) {
        this.logger.log(chalk.cyanBright('Visitando el programa'));
        this.code.push('program');
        this.printAST(ctx); // Imprime el AST antes de comenzar el recorrido
        super.visitProgram(ctx); // Llama a la superclase para continuar el recorrido
        this.code.push('EOF'); // Agrega el nodo EOF al recorrido
        this.sendCode(); // Envía el código para ser ejecutado en el Compilador
        return this.compiler;
    }

    /**
     * Imprime el AST generado.
     * @param {Object} ast - El árbol de sintaxis abstracta generado.
     */
    printAST(ast) {
        console.log(chalk.cyan('\t\t\tAST generado:'));
        console.log(chalk.cyan(this.getTreeString(ast))); // Imprime el AST en formato de árbol
    }

    /**
     * Visita un nodo de declaración (statement).
     * @param {Object} ctx - Contexto del nodo statement en el árbol de sintaxis.
     */
    visitStatement(ctx) {
        this.logger.log(chalk.cyanBright('Visitando una declaración'));
        this.code.push('statement'); // Agrega el nodo statement al recorrido
        super.visitStatement(ctx); // Llama a la superclase para continuar el recorrido
    }

    /**
     * Visita un nodo de instrucción de impresión (printInstr).
     * @param {Object} ctx - Contexto del nodo printInstr en el árbol de sintaxis.
     */
    visitPrintInstr(ctx) {
        this.logger.log(chalk.cyanBright('Visitando printInstr'));
        this.code.push(ctx.STRING().getText()); // Agrega la cadena a imprimir
        this.code.push('print'); // Agrega el nodo print
        this.code.push('printInstr'); // Agrega el nodo printInstr
    }

    /**
     * Visita un nodo de nueva línea (NL).
     */
    visitNL() {
        this.logger.log(chalk.cyanBright('Visitando nueva línea'));
        this.code.push('\\n'); // Agrega la representación de la nueva línea al recorrido
    }

    /**
     * Obtiene la representación textual del árbol de sintaxis.
     * @param {Object} ast - El árbol de sintaxis abstracta generado.
     * @returns {string} La representación textual del árbol de sintaxis.
     */
    getTreeString(ast) {
        return ast.toStringTree(this.ruleNames, this);
    }

    /**
     * Envía el código generado durante el recorrido al compilador.
     */
    sendCode() {
        this.compiler.run(this.code); // Ejecuta el código en el Compilador
    }
}

export default Visitor;