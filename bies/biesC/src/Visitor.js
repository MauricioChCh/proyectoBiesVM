// Visitor.js
import chalk from 'chalk';
import biesCVisitor from '../output/biesCVisitor.js';
import biesCParser from '../output/biesCParser.js';
import C from './Compiler/C.js';
import VisitStrategy from './VisitStrategy.js';

/**
 * Clase que representa el visitante del AST.
 */
export class Visitor extends biesCVisitor {
    /**
     * Crea una instancia de Visitor.
     * @param {Object} [logger={ log: () => {} }] - Objeto Logger para registrar mensajes.
     */
    constructor(logger = { log: () => { } }) {
        super();
        this.logger = logger;
        this.ruleNames = biesCParser.ruleNames;
        this.code = [];
        this.compiler = new C(logger);
    }

    /**
     * Visita un nodo del AST utilizando la estrategia adecuada.
     * @param {Object} ctx - El contexto del nodo.
     * @param {string} nodeType - El tipo de nodo.
     * @returns {void}
     */
    visitNode(ctx, nodeType) {
        const strategy = VisitStrategy.strategies[nodeType];
        if (strategy && strategy.rightFirst) {
            return this.visitRightFirst(strategy.getVisitOrder(ctx));
        }
        return this.visitPostOrder(ctx);
    }

    /**
     * Visita los nodos en el orden derecho -> izquierdo -> raíz.
     * @param {Object} orderFns - Funciones que definen el orden de visita.
     * @returns {void}
     */
    visitRightFirst(orderFns) {
        this.visitAndPush(orderFns.right());
        this.visitAndPush(orderFns.left());
        this.visitAndPush(orderFns.root());
    }

    /**
     * Visita y agrega el valor al código si no es nulo.
     * @param {string} value - El valor a agregar.
     * @returns {void}
     */
    visitAndPush(value) {
        if (value) this.code.push(value);
    }

    /**
     * Visita los nodos en post-order (izquierdo -> derecho -> raíz).
     * @param {Object} ctx - El contexto del nodo.
     * @returns {void}
     */
    visitPostOrder(ctx) {
        if (ctx.children) {
            ctx.children.forEach(child => {
                if (child.accept) {
                    child.accept(this);
                }
            });
        }
    }

    /**
     * Visita el nodo del programa.
     * @param {Object} ctx - El contexto del nodo.
     * @returns {C} - El compilador.
     */
    visitProgram(ctx) {
        this.logAndPush('Visitando el programa', 'program');
        this.printAST(ctx);
        this.visitPostOrder(ctx);
        this.code.push('EOF');
        this.sendCode();
        return this.compiler;
    }

    /**
     * Visita el nodo de una declaración.
     * @param {Object} ctx - El contexto del nodo.
     * @returns {void}
     */
    visitStatement(ctx) {
        this.logAndPush('Visitando una declaración', 'statement');
        this.visitPostOrder(ctx);
    }

    /**
     * Visita el nodo de una instrucción de impresión.
     * @param {Object} ctx - El contexto del nodo.
     * @returns {void}
     */
    visitPrintInstr(ctx) {
        this.logger.log(chalk.cyanBright('Visitando printInstr'));
        this.visitNode(ctx, 'printInstr');
    }

    /**
     * Visita el nodo de una nueva línea.
     * @returns {void}
     */
    visitNL() {
        this.logAndPush('Visitando nueva línea', '\\n');
    }

    /**
     * Registra un mensaje y agrega un valor al código.
     * @param {string} logMessage - El mensaje a registrar.
     * @param {string} codeValue - El valor a agregar al código.
     * @returns {void}
     */
    logAndPush(logMessage, codeValue) {
        this.logger.log(chalk.cyanBright(logMessage));
        this.code.push(codeValue);
    }

    /**
     * Imprime el AST.
     * @param {Object} ast - El AST a imprimir.
     * @returns {void}
     */
    printAST(ast) {
        console.log(chalk.cyan('\t\t\tAST generado:'));
        console.log(chalk.cyan(this.getTreeString(ast)));
    }

    /**
     * Obtiene la representación en cadena del AST.
     * @param {Object} ast - El AST.
     * @returns {string} - La representación en cadena del AST.
     */
    getTreeString(ast) {
        return ast.toStringTree(this.ruleNames, this);
    }

    /**
     * Envía el código al compilador.
     * @returns {void}
     */
    sendCode() {
        this.compiler.run(this.code);
    }
}

export default Visitor;