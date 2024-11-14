import chalk from 'chalk';
import biesCVisitor from '../output/biesCVisitor.js';
import C from './Compiler/C.js';

export class Visitor extends biesCVisitor {
    constructor(logger = { log: () => { } }) {
        super();
        this.logger = logger;
        this.code = [];
        this.compiler = new C(logger);
        this.mainCode = [];
        this.functionCounter = 1; // Contador de funciones
        this.functionMap = {}; // Mapa de funciones
        this.variableCounter = 0; // Contador de variables
        this.variables = {}; // Mapa de variables
    }

    /**
     * Visita el nodo del programa.
     * @param {Object} ctx - El contexto del nodo.
     * @returns {C} - El compilador.
     */
    visitProgram(ctx) {
        console.log(chalk.red('Nodo visitado: program'));
        this.visitChildren(ctx);
        this.generateMain();
        this.sendCodeToCompiler();
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

    processArithmeticOperation(ctx, operator, bytecode) {
        this.visitChildren(ctx);
        console.log(chalk.green('Nodo visitado: ArithOp ->'), operator);
        this.code.push(bytecode);
    }

    // --------------------------------------------- Visitas a nodos de operaciones matemáticas ---------------------------------------------

    visitMul_Label(ctx) {
        this.processArithmeticOperation(ctx, '*', 'MUL');
        return null;
    }

    visitDiv_Label(ctx) {
        this.processArithmeticOperation(ctx, '/', 'DIV');
        return null;
    }

    visitAdd_Label(ctx) {
        this.processArithmeticOperation(ctx, '+', 'ADD');
        return null;
    }

    visitSub_Label(ctx) {
        this.processArithmeticOperation(ctx, '-', 'SUB');
        return null;
    }

    //--------------------------------------------- Visitas a nodos de datos primarios ---------------------------------------------

    visitPrimaryData_Label(ctx) {
        const primaryData = ctx.getText();
        console.log(chalk.green('Nodo visitado: primaryData ->'), primaryData);

        // Verificar si primaryData es una variable definida y generar el bytecode correspondiente
        const bytecode = (primaryData in this.variables) ? this.variables[primaryData].byteload : `LDV ${primaryData}`;
        this.code.push(bytecode);

        return null;
    }

    visitNumber_Label(ctx) {
        const number = ctx.getText();
        console.log(chalk.green('Nodo visitado: number ->'), number);
        this.code.push('LDV ' + number);
        return null;
    }

    visitString(ctx) {
        const string = ctx.getText();
        console.log(chalk.green('Nodo visitado: string ->'), string);
        this.code.push('LDV ' + string);
        return null;
    }

    visitArray(ctx) {
        const array = ctx.getText();
        console.log(chalk.green('Nodo visitado: array ->'), array);
        this.code.push('LDV ' + array);
        return null;
    }

    visitId_Label(ctx) {
        const id = ctx.getText();
        console.log(chalk.green('Nodo visitado: id ->'), id);

        if (id in this.variables) { // Verificar si el id está en el mapa de variables
            this.code.push(this.variables[id].byteload); // Generar el bytecode BLD en lugar de BST
        } else {
            console.error(`Error: Variable ${id} no está definida`);
        }

        return null;
    }

    // --------------------------------------------- Visitas a nodos de instrucciones let ---------------------------------------------

    // ----------------------------------------------- Visitas a nodos de 'simple let' ------------------------------------------------

    visitSimpleLetInstr_Label(ctx) {
        console.log(chalk.red('Nodo visitado: simpleLetInstr'));
        const id = ctx.id().getText();

        // Verificar si la variable ya está en el mapa de variables
        if (!(id in this.variables)) {
            this.variables[id] = { byteload: 'BLD 0 ' + this.variableCounter };
        }

        // Visitar los hijos del nodo para procesar la expresión
        this.visitChildren(ctx);

        // Generar el bytecode para asignar el valor a la variable
        this.code.push(`BST 0 ${this.variableCounter++}`);

        return null;
    }

    // --------------------------------------------- Visitas a nodos de 'anonymousLetFunction' ---------------------------------------------

    visitAnonymousLetFunction(ctx) {
        console.log(chalk.red('Nodo visitado: anonymousLetFunction'));
        this.visitChildren(ctx);
        return null;
    }

    visitLambda_Label(ctx, paramCount = 0) {
        const functionType = paramCount === 0 ? 'LambdaNoParams' : 'LambdaWithParams';
        console.log(chalk.red(`Nodo visitado: ${functionType}`));

        const functionName = ctx.id(0).getText(); // Nombre de la función
        let parentContext = '$0'; // Contexto padre por defecto
        const functionId = `$${this.functionCounter++}`; // Identificador único de la función

        // Detectar si hay una llamada a función dentro del cuerpo de la lambda
        let functionCallName = null;

        if (ctx.expr()) {
            const exprText = ctx.expr().getText();
            functionCallName = exprText.includes('(') ? exprText.split('(')[0].trim() : null;
        }

        // Buscar si `functionName` es invocado en otra función
        for (const key in this.functionMap) {
            if (this.functionMap[key].invoking === functionName) {
                parentContext = this.functionMap[key].newId;
                break;
            }
        }

        // Guardar la función en el mapa de funciones con el contexto padre correcto
        this.functionMap[functionName] = {
            originalName: functionName,
            newId: functionId,
            args: paramCount,
            parent: parentContext,
            invoking: functionCallName || null
        };

        // Agregar información de la función a `code`
        this.code.push(`$FUN ${functionId} ARGS:${paramCount} PARENT:${parentContext}`);

        this.code.push(...Array.from({ length: paramCount }, (_, i) => `BLD 0 ${i}`)); //Agrega un 'BLD' para cada parámetro

        // Actualizar el contexto padre actual
        this.compiler.currentParent = functionId;

        // Visitar el cuerpo de la función
        this.visitChildren(ctx);

        // Finalizar función
        this.code.push(`$END ${functionId}`);
        this.code.push('\n');

        // Restaurar el contexto padre del compilador después de visitar la función
        this.compiler.currentParent = parentContext;

        return null;
    }

    // Métodos específicos para `LambdaNoParams` y `LambdaWithParams`
    visitLambdaNoParams_Label(ctx) {
        return this.visitLambda_Label(ctx, 0);
    }

    visitLambdaWithParams_Label(ctx) {
        const paramCount = ctx.id().length - 1; // Calcula la cantidad de parámetros
        return this.visitLambda_Label(ctx, paramCount);
    }

    visitFunctionCallExpr_Label(ctx) {
        const funcName = ctx.getText();
        console.log(chalk.red('Nodo visitado: FunctionCall -> '), funcName);
        this.visitChildren(ctx);
        return null;
    }

    visitFunctionCallWithParams_Label(ctx) {
        console.log(chalk.red('Nodo visitado: functionCallWithParams'));

        this.visitChildren(ctx);

        this.mainCode.push('LDF ' + this.functionMap[ctx.id().getText()].newId);
        this.mainCode.push('APP ' + this.functionMap[ctx.id().getText()].args);

        return null;
    }

    visitFunctionCallNoParams_Label(ctx) {
        console.log(chalk.red('Nodo visitado: functionCallNoParams'));

        this.visitChildren(ctx);

        this.mainCode.push('LDF ' + this.functionMap[ctx.id().getText()].newId);
        this.mainCode.push('APP ' + this.functionMap[ctx.id().getText()].args);

        return null;
    }

    generateMain() {
        this.code.push('\n\n;Aquí inicia el "main"\n');
        this.code.push(...this.mainCode);
        this.code.push('\n;Aquí termina el "main"');
    }

    visitPrintInstr_Label(ctx) {
        console.log(chalk.red('Nodo visitado: printInstr'));

        this.visitChildren(ctx);

        this.code.push('PRN');

        return null;
    }
}

export default Visitor;