import chalk from 'chalk';
import biesCVisitor from '../output/biesCVisitor.js';
import BuiltInsProcessor from './PredifinedSymbol.js';
import C from './Compiler/C.js';
import { Logger } from './Logger.js';

export class Visitor extends biesCVisitor {
    constructor() {
        super();
        this.logger = Logger;

        this.compiler = new C();

        // C -> Codigo generado por el visitor   
        this.byteCode = []; // byteCode almacenado
        this.mainCode = []; // Código principal
        this.functionCode = []; // Código específico para funciones

        // D -> Contextos de Ejecución
        this.functionCounter = 1; // Contador de funciones
        this.functionMap = {}; // Mapa de funciones
        this.currentScope = 0; // Scope actual
        this.func = false; // Indicador de si estamos dentro de una función

        // B -> Bindings
        this.variableCounter = 0; // Contador de variables
        this.variables = {}; // Mapa de variables

        // Instancia de BuiltInsProcessor
        this.builtInsProcessor = new BuiltInsProcessor(this);
        this.builtIns = null;
    }

    /**
     * Visita el nodo del programa.
     * @param {Object} ctx - El contexto del nodo.
     * @returns {C} - El compilador.
     */
    visitProgram(ctx) {
        this.logger.debug(chalk.magenta('\nNodo visitado: program'));
        this.visitChildren(ctx);
        this.generateMain();
        this.sendCodeToCompiler();
        return this.compiler;
    }

    visitStatement(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: statement'));
        this.visitChildren(ctx);
        return null;
    }

    visitExpr(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: expr'));
        this.visitChildren(ctx);
        return null;
    }

    /**
     * Envía el código al compilador.
     */
    sendCodeToCompiler() {
        this.compiler.run(this.byteCode);
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
        this.logger.log(chalk.green('Nodo visitado: ArithOp ->'), operator);
        (this.func ? this.functionCode : this.byteCode).push(bytecode);
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

    visitPow_Label(ctx) {
        this.processArithmeticOperation(ctx, '**', 'POW');
        return null;
    }

    isFunction = () => this.func;
    //--------------------------------------------- Visitas a nodos de datos primarios ---------------------------------------------

    visitPrimaryData_Label(ctx) {
        const primaryData = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: primaryData ->'), primaryData);

        // Verificar si primaryData es una variable definida y generar el bytecode correspondiente
        const bytecode = (primaryData in this.variables) ? this.variables[primaryData].byteload : `LDV ${primaryData}`;
        this.isFunction() ? this.functionCode.push(bytecode) : this.byteCode.push(bytecode);

        // Procesar builtIns si está definido
        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }

        return null;
    }

    visitNumber_Label(ctx) {
        const number = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: number ->'), number);
        this.isFunction() ? this.functionCode.push('LDV ' + number) : this.byteCode.push('LDV ' + number);
        return null;
    }

    visitString(ctx) {
        const string = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: string ->'), string);
        this.isFunction() ? this.functionCode.push('LDV ' + string) : this.byteCode.push('LDV ' + string);
        return null;
    }

    visitArray(ctx) {
        const array = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: array ->'), array);
        this.isFunction() ? this.functionCode.push('LDV ' + array) : this.byteCode.push('LDV ' + array);
        return null;
    }

    visitId_Label(ctx) {
        const id = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: id ->'), id);

        if (id in this.variables) { // Verificar si el id está en el mapa de variables
            this.isFunction() ? this.functionCode.push(this.variables[id].byteload) : this.byteCode.push(this.variables[id].byteload);
        }
        return null;
    }

    // --------------------------------------------- Visitas a nodos de instrucciones let ---------------------------------------------

    // ----------------------------------------------- Visitas a nodos de 'simple let' ------------------------------------------------

    visitSimpleLetInstr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: simpleLetInstr'));
        const id = ctx.id().getText();

        // Verificar si la variable ya está en el mapa de variables
        if (!(id in this.variables)) {
            this.variables[id] = { byteload: 'BLD 0 ' + this.variableCounter };
        }

        // Visitar los hijos del nodo para procesar la expresión
        this.visitChildren(ctx);

        // Generar el bytecode para asignar el valor a la variable
        this.isFunction() ? this.functionCode.push(`BST 0 ${this.variableCounter++}`) : this.byteCode.push(`BST 0 ${this.variableCounter++}`);
        return null;
    }

    visitSimpleConstInstr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: simpleConstInstr'));
        const id = ctx.id().getText();

        // Verificar si la variable ya está en el mapa de variables
        if (!(id in this.variables)) {
            this.variables[id] = { byteload: 'BLD 0 ' + this.variableCounter };
        }

        // Visitar los hijos del nodo para procesar la expresión
        this.visitChildren(ctx);

        // Generar el bytecode para asignar el valor a la variable
        this.isFunction() ? this.functionCode.push(`BST 0 ${this.variableCounter++}`) : this.code.push(`BST 0 ${this.variableCounter++}`);

        return null;
    }

    // ----------------------------------------------- Visitas a nodos de 'let-in' ------------------------------------------------

    visitLetInExpr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: letInInstr'));

        this.visitChildren(ctx);

        return null
    }

    visitConst_WithParams_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: constWithParams'));

        this.visitChildren(ctx);

        return null
    }

    visitConst_NoParams_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: const_NoParams'));

        this.visitChildren(ctx);

        return null
    }

    // --------------------------------------------- Visitas a nodos de 'anonymousLetFunction' ---------------------------------------------

    visitAnonymousLetFunction(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: anonymousLetFunction'));
        this.visitChildren(ctx);
        return null;
    }

    visitAnonymousConstFunction(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: anonymousConstFunction'));
        this.visitChildren(ctx);
        return null;
    }

    visitLambda_Label(ctx, paramCount = 0) {
        const functionType = paramCount === 0 ? 'LambdaNoParams' : 'LambdaWithParams';
        this.logger.debug(chalk.magenta(`Nodo visitado: ${functionType}`));

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

        // Cambiar el scope actual al nuevo scope de la función
        this.currentScope = this.functionCounter;

        // Agregar información de la función a `code`
        this.functionCode.push(`$FUN ${functionId} ARGS:${paramCount} PARENT:${parentContext}`);
        this.func = true;

        this.functionCode.push(...Array.from({ length: paramCount }, (_, i) => `BLD 0 ${i}`)); //Agrega un 'BLD' para cada parámetro

        // Actualizar el contexto padre actual
        this.compiler.currentParent = functionId;

        // Visitar el cuerpo de la función
        this.visitChildren(ctx);

        // Agregar el bytecode de retorno a la función
        this.functionCode.push('RET');
        // Finalizar función
        this.functionCode.push(`$END ${functionId}`);
        this.functionCode.push('\n');
        this.func = false;

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

    // Metodos especificos para LamdbaConstNoParams y LambdaConstWithParams
    visitLambdaConstNoParams_Label(ctx) {
        return this.visitLambda_Label(ctx, 0);
    }

    visitLambdaConstWithParams_Label(ctx) {
        const paramCount = ctx.id().length - 1; // Calcula la cantidad de parámetros
        return this.visitLambda_Label(ctx, paramCount);
    }

    visitFunctionCallExpr_Label(ctx) {
        const funcName = ctx.getText();
        this.logger.debug(chalk.magenta('Nodo visitado: FunctionCall -> '), funcName);
        this.visitChildren(ctx);
        return null;
    }

    visitFunctionCallWithParams_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: functionCallWithParams'));

        this.visitChildren(ctx);

        this.byteCode.push('LDF ' + this.functionMap[ctx.id().getText()].newId);
        this.byteCode.push('APP ' + this.functionMap[ctx.id().getText()].args);

        return null;
    }

    visitFunctionCallNoParams_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: functionCallNoParams'));

        this.visitChildren(ctx);

        this.byteCode.push('LDF ' + this.functionMap[ctx.id().getText()].newId);
        this.byteCode.push('APP ' + this.functionMap[ctx.id().getText()].args);

        return null;
    }

    generateMain() {
        const main = [];
        main.push(...this.functionCode);
        main.push('\n;Aquí inicia el "main"\n');
        main.push('$FUN $0 ARGS:0 PARENT:$0');
        main.push(...this.byteCode);
        main.push('$END $0');
        main.push('HLT');
        main.push('INI $0');
        main.push('\n;Aquí termina el "main"');
        this.byteCode = main;
    }

    visitPrintInstr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: printInstr'));

        this.visitChildren(ctx);
        this.isFunction() ? this.functionCode.push('PRN') : this.byteCode.push('PRN');
        return null;
    }

    visitPredifinedFunctionCall_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: predifinedFunctionCall'));

        this.visitChildren(ctx);

        return null;
    }

    visitExp_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: exp'));

        this.visitChildren(ctx);

        return null;
    }

    // PredifinedSymbols ------------------------------------------------------------------------------------------------------------

    // Método genérico para visitar los nodos de los símbolos predefinidos
    visitBuiltIns(ctx, label) {
        this.logger.debug(chalk.magenta(`Nodo visitado: ${label}`));

        this.builtIns = label;
        this.visitChildren(ctx);

        return null;
    }

    // Luego, los métodos específicos pueden delegar en la función genérica:
    visitBool_Label(ctx) {
        return this.visitBuiltIns(ctx, 'bool');
    }

    visitTrue_Label(ctx) {
        return this.visitBuiltIns(ctx, 'true');
    }

    visitFalse_Label(ctx) {
        return this.visitBuiltIns(ctx, 'false');
    }

    visitNull_Label(ctx) {
        return this.visitBuiltIns(ctx, 'null');
    }

    visitInput_Label(ctx) {
        return this.visitBuiltIns(ctx, 'input');
    }

    visitInt_Label(ctx) {
        return this.visitBuiltIns(ctx, 'int');
    }

    visitStr_Label(ctx) {
        return this.visitBuiltIns(ctx, 'str');
    }

    visitList_Label(ctx) {
        return this.visitBuiltIns(ctx, 'list');
    }

    visitLen_Label(ctx) {
        return this.visitBuiltIns(ctx, 'len');
    }
}

export default Visitor;