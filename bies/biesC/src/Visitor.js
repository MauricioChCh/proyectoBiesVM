// Visitor.js
import chalk from 'chalk';
import biesCVisitor from '../output/biesCVisitor.js';
import biesCParser from '../output/biesCParser.js';
import C from './Compiler/C.js';
import VisitStrategy from './VisitStrategy.js';

export class Visitor extends biesCVisitor {
    constructor(logger = { log: () => { } }) {
        super();
        this.logger = logger;
        this.ruleNames = biesCParser.ruleNames;
        this.code = [];
        this.compiler = new C(logger);
    }

    visitNode(ctx, nodeType) {
        const strategy = VisitStrategy.strategies[nodeType];
        if (strategy && strategy.rightFirst) {
            return this.visitRightFirst(ctx, strategy.getVisitOrder(ctx));
        }
        return this.visitPostOrder(ctx);
    }

    visitRightFirst(ctx, orderFns) {
        this.visitAndPush(orderFns.right());
        this.visitAndPush(orderFns.left());
        this.visitAndPush(orderFns.root());
    }

    visitAndPush(value) {
        if (value) this.code.push(value);
    }

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
        this.logAndPush('Visitando el programa', 'program');
        this.printAST(ctx);
        this.visitPostOrder(ctx);
        this.code.push('EOF');
        this.sendCode();
        return this.compiler;
    }

    visitStatement(ctx) {
        this.logAndPush('Visitando una declaración', 'statement');
        this.visitPostOrder(ctx);
    }

    visitPrintInstr(ctx) {
        this.logger.log(chalk.cyanBright('Visitando printInstr'));
        this.visitNode(ctx, 'printInstr');
    }

    visitNL() {
        this.logAndPush('Visitando nueva línea', '\\n');
    }

    logAndPush(logMessage, codeValue) {
        this.logger.log(chalk.cyanBright(logMessage));
        this.code.push(codeValue);
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