import chalk from 'chalk';
import biesCVisitor from '../output/biesCVisitor.js';
import C from './Compiler/C.js';

export class Visitor extends biesCVisitor {
    constructor(logger = { log: () => { } }) {
        super();
        this.logger = logger;
        this.code = [];
        this.compiler = new C(logger);
        this.functionCounter = 1; // Contador de funciones
        this.functionMap = {}; // Mapa de funciones
    }

    /**
     * Visita el nodo del programa.
     * @param {Object} ctx - El contexto del nodo.
     * @returns {C} - El compilador.
     */
    visitProgram(ctx) {
        console.log(chalk.red('Nodo visitado: program'));
        this.visitChildren(ctx);
        //this.sendCodeToCompiler();
        return this.compiler;
    }

    visitStatement(ctx) {
        console.log(chalk.red('Nodo visitado: statement'));
        this.visitChildren(ctx);
        return null;
    }

    visitExpr(ctx) {
        console.log(chalk.red('Nodo visitado: expr'));
        this.visitChildren(ctx);
        return null;
    }

    /**
     * Envía el código al compilador.
     */
    sendCodeToCompiler() {
        this.compiler.run(this.code);
    }

    //--------------------------------------------- Funciones de visitas a los nodos ---------------------------------------------

    /**
     * Procesa un nodo de operación aritmética.
     * @param {Object} ctx - El contexto del nodo.
     * @param {string} operator - El operador aritmético.
     */

    // --------------------------------------------- Visita a Nodo de Operaciones Aritméticas ---------------------------------------------

    processArithmeticOperation(ctx, operator) {
        this.visitChildren(ctx);
        console.log(chalk.green('Nodo visitado: ArithOp ->'), operator);
        this.code.push(operator);
    }

    // --------------------------------------------- Visitas a nodos de operaciones matemáticas ---------------------------------------------

    visitMul_Label(ctx) {
        this.processArithmeticOperation(ctx, '*');
        return null;
    }

    visitDiv_Label(ctx) {
        this.processArithmeticOperation(ctx, '/');
        return null;
    }

    visitAdd_Label(ctx) {
        this.processArithmeticOperation(ctx, '+');
        return null;
    }

    visitSub_Label(ctx) {
        this.processArithmeticOperation(ctx, '-');
        return null;
    }

    //--------------------------------------------- Visitas a nodos de datos primarios ---------------------------------------------

    visitPrimaryData_Label(ctx) {
        const primaryData = ctx.getText();
        console.log(chalk.green('Nodo visitado: primaryData ->'), primaryData);
        this.code.push(primaryData);
        return null;
    }

    visitNumber_Label(ctx) {
        const number = ctx.getText();
        console.log(chalk.green('Nodo visitado: number ->'), number);
        this.code.push(number);
        return null;
    }

    visitString(ctx) {
        const string = ctx.getText();
        console.log(chalk.green('Nodo visitado: string ->'), string);
        this.code.push(string);
        return null;
    }

    visitArray(ctx) {
        const array = ctx.getText();
        console.log(chalk.green('Nodo visitado: array ->'), array);
        this.code.push(array);
        return null;
    }

    visitIdentifierData_Label(ctx) {
        const id = ctx.getText();
        console.log(chalk.green('Nodo visitado: id ->'), id);
        this.code.push(id);
        return null;
    }

    // --------------------------------------------- Visitas a nodos de instrucciones let ---------------------------------------------

    // --------------------------------------------- Visitas a nodos de 'simple let' ---------------------------------------------

    visitsimpleLetInstr(ctx) {
        const id = ctx.id().getText();
        const instruction = `let ${id} =`;  // Corregido: Template literal debe estar entre comillas invertidas

        // Verificar si la expresión no es nula antes de visitarla
        const expr = ctx.expr();
        if (expr) {
            this.visit(expr);
        }

        if (!this.code.includes(instruction)) {
            console.log(chalk.green('Nodo visitado: simpleLetInstr'), instruction);
            this.code.push(instruction);
        }
        return null;
    }

    // --------------------------------------------- Visitas a nodos de 'anonymousLetFunction' ---------------------------------------------

    visitAnonymousLetFunction(ctx) {
        console.log(chalk.red('Nodo visitado: anonymousLetFunction'));
        this.visitChildren(ctx);
        return null;
    }

    visitIdentifier(ctx) {
        const id = ctx.getText();
        console.log(chalk.green('Nodo visitado: id'), id);

        // Verificar si el identificador es una función y asignar el contexto de invocación
        if (this.functionMap[id]) {
            const functionData = this.functionMap[id];
            const parentContext = this.compiler.currentParent;

            // Registrar el contexto en el que ocurre
            functionData.invokedIn = parentContext;

            console.log(chalk.green('Invocación de función:'), functionData.id);
            console.log(chalk.green('Contexto de invocación:'), parentContext);
        }

        this.code.push(id);
        return null;
    }

    visitLambdaWithParams_Label(ctx) {
        console.log(chalk.red('Nodo visitado: LambdaWithParams'));

        const functionName = ctx.id(0).getText(); // Detectar el nombre de la función
        const paramCount = ctx.id().length - 1; // Calcular la cantidad de parámetros que tiene la función lambda
        const parentContext = this.compiler.currentParent || '$0'; // Obtener el contexto padre actual o asignar $0 si no hay ninguno
        const functionId = `$${this.functionCounter++}`; // Asignar un nuevo identificador para la función

        let functionCallName = null; // Inicializar la variable functionCallName

        // Verificar si hay una llamada a función dentro del cuerpo de la lambda
        if (ctx.expr()) {
            const exprText = ctx.expr().getText();
            functionCallName = exprText.includes('(') ? exprText.split('(')[0].trim() : null;
        }

        // Guardar la función en el mapa de funciones con su contexto padre y nombre original
        this.functionMap[functionName] = { originalName: functionName, newId: functionId, args: paramCount, parent: parentContext, invoking: functionCallName || null };

        // Imprimir el contenido de functionMap
        console.log(this.functionMap);

        // Imprimir la información en el formato solicitado
        console.log(`$FUN ${functionId} ARGS:${paramCount} PARENT:${parentContext}`);

        // Actualizar el contexto padre del compilador para la nueva función
        this.compiler.currentParent = functionId;

        // Visitar el cuerpo de la función
        this.visitChildren(ctx);

        // Restaurar el contexto padre del compilador después de visitar la función
        this.compiler.currentParent = parentContext;

        return null;
    }

    visitFunctionCallExpr_Label(ctx) {
        const funcName = ctx.getText();
        console.log(chalk.red('Nodo visitado: FunctionCall -> '), funcName);
        this.visitChildren(ctx);
        return null;
    }

    visitPrintInstr(ctx) {
        let printArgument = '';

        if (ctx.primarydata()) {
            const primaryData = ctx.primarydata();
            printArgument = primaryData.getText();
        } else if (ctx.expr()) {
            printArgument = ctx.expr().getText();
            this.visit(ctx.expr());
        }

        console.log(chalk.green('Nodo visitado: printInstr'), `print(${printArgument})`);

        if (!ctx.expr()) {
            this.code.push(printArgument);
        }

        this.code.push('print');
        return null;
    }
}

export default Visitor;