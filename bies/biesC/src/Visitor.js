import chalk from 'chalk';
import biesCVisitor from '../output/biesCVisitor.js';
import biesCParser from '../output/biesCParser.js';
import C from './Compiler/C.js';

// Estrategia de visita para diferentes tipos de instrucciones
class VisitStrategy {
    static strategies = {
        // Estrategia por defecto (post-order: izquierdo -> derecho -> raíz)
        default: {
            rightFirst: false,
            getVisitOrder: (ctx) => ({
                left: () => null,
                right: () => null,
                root: () => ctx.constructor.name
            })
        },
        // Estrategia especial para printInstr (derecho -> izquierdo -> raíz)
        printInstr: {
            rightFirst: true,
            getVisitOrder: (ctx) => ({
                right: () => ctx.STRING().getText(),
                left: () => 'print',
                root: () => 'printInstr'
            })
        }
    };

    static getStrategy(nodeType) {
        return VisitStrategy.strategies[nodeType] || VisitStrategy.strategies.default;
    }
}

export class Visitor extends biesCVisitor {
    constructor(logger = { log: () => { } }) {
        super();
        this.logger = logger;
        this.ruleNames = biesCParser.ruleNames;
        this.code = [];
        this.compiler = new C(logger);
    }

    // Método genérico para visitar nodos según la estrategia
    visitNode(ctx, nodeType) {
        const strategy = VisitStrategy.strategies[nodeType];
        if (strategy && strategy.rightFirst) {
            return this.visitRightFirst(ctx, strategy.getVisitOrder(ctx));
        }
        return this.visitPostOrder(ctx);
    }

    // Visita específica para nodos que requieren visitar primero el hijo derecho
    visitRightFirst(ctx, orderFns) {
        const rightValue = orderFns.right();
        if (rightValue) this.code.push(rightValue);

        const leftValue = orderFns.left();
        if (leftValue) this.code.push(leftValue);

        const rootValue = orderFns.root();
        if (rootValue) this.code.push(rootValue);
    }

    // Visita post-order estándar
    visitPostOrder(ctx) {
        if (ctx.children) {
            ctx.children.forEach(child => {
                if (child.accept) {
                    child.accept(this);
                }
            });
        }
    }

    visitProgram(ctx) {
        this.logger.log(chalk.cyanBright('Visitando el programa'));
        this.code.push('program');
        this.printAST(ctx);
        this.visitPostOrder(ctx);
        this.code.push('EOF');
        this.sendCode();
        return this.compiler;
    }

    visitStatement(ctx) {
        this.logger.log(chalk.cyanBright('Visitando una declaración'));
        this.code.push('statement');
        this.visitPostOrder(ctx);
    }

    visitPrintInstr(ctx) {
        this.logger.log(chalk.cyanBright('Visitando printInstr'));
        this.visitNode(ctx, 'printInstr');
    }

    visitNL() {
        this.logger.log(chalk.cyanBright('Visitando nueva línea'));
        this.code.push('\\n');
    }

    printAST(ast) {
        console.log(chalk.cyan('\t\t\tAST generado:'));
        console.log(chalk.cyan(this.getTreeString(ast)));
    }

    getTreeString(ast) {
        return ast.toStringTree(this.ruleNames, this);
    }

    sendCode() {
        this.compiler.run(this.code);
    }
}

export default Visitor;