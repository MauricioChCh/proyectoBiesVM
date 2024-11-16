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

    processOperation(ctx, operator, bytecode) {
        this.visitChildren(ctx);
        this.logger.log(chalk.green('Nodo visitado: ArithOp ->'), operator);
        (this.func ? this.functionCode : this.byteCode).push(bytecode);
    }

    // --------------------------------------------- Visitas a nodos de operaciones matemáticas ---------------------------------------------

    visitMul_Label(ctx) {
        this.processOperation(ctx, '*', 'MUL');
        return null;
    }

    visitDiv_Label(ctx) {
        this.processOperation(ctx, '/', 'DIV');
        return null;
    }

    visitAdd_Label(ctx) {
        this.processOperation(ctx, '+', 'ADD');
        return null;
    }

    visitSub_Label(ctx) {
        this.processOperation(ctx, '-', 'SUB');
        return null;
    }


    visitPow_Label(ctx) {
        this.processOperation(ctx, '**', 'POW');
        return null;
    }

    // ----------------------------------------- Visitas a nodos de operaciones comparacion ---------------------------------------------

    visitLt_Label(ctx) {
        this.processOperation(ctx, '<', 'LT');
        return null;
    }

    visitGt_Label(ctx) {
        this.processOperation(ctx, '>', 'GT');
        return null;
    }


    visitLe_Label(ctx) {
        this.processOperation(ctx, '<=', 'LE');
        return null;
    }

    visitGe_Label(ctx) {
        this.processOperation(ctx, '>=', 'GE');
        return null;
    }

    visitEq_Label(ctx) {
        this.processOperation(ctx, '==', 'EQ');
        return null;
    }

    visitNeg_Label(ctx) {
        this.processOperation(ctx, '!=', 'NEG');
        return
    }


    // --------------------------------------------- Visitas a nodos de operaciones lógicas ---------------------------------------------


    isFunction = () => this.func;
    //--------------------------------------------- Visitas a nodos de datos primarios ---------------------------------------------

    visitPrimaryData_Label(ctx) {
        this.logger.log(chalk.magenta('Nodo visitado: primaryData ->'));
        this.visitChildren(ctx);

        return null;
    }

    visitNumber_Label(ctx) {
        const number = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: number ->'), number);

        this.isFunction() ? this.functionCode.push('LDV ' + number) : this.byteCode.push('LDV ' + number);

        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }


    visitString(ctx) {
        const string = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: string ->'), string);
        this.isFunction() ? this.functionCode.push('LDV ' + string) : this.byteCode.push('LDV ' + string);

        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    visitArray(ctx) {
        const array = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: array ->'), array);
        this.isFunction() ? this.functionCode.push('LDV ' + array) : this.byteCode.push('LDV ' + array);

        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    visitId_Label(ctx) {
        const id = ctx.getText();
        this.logger.log(chalk.green('Nodo visitado: id ->'), id);

        if (id in this.variables) {
            const command = `${this.variables[id].byteload} ${this.variables[id].arg1} ${this.variables[id].arg2}`;
            this.isFunction() ? this.functionCode.push(command) : this.byteCode.push(command);
        } else {
            this.variables[id] = { byteload: 'BLD', arg1: 0, arg2: this.variableCounter++ };
        }
        return null;
    }

    // --------------------------------------------- Visitas a nodos de input---------------------------------------------
    visitInputExprInstr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: inputExprInstr'));
        this.visitChildren(ctx);
        this.isFunction() ? this.functionCode.push('INP') : this.byteCode.push('INP');
        return null;
    }

    visitInputExprInstrArgs_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: inputExprInstrArgs'));
        this.visitChildren(ctx);
        this.isFunction() ? this.functionCode.push('PRN') : this.byteCode.push('PRN');
        this.isFunction() ? this.functionCode.push('INP') : this.byteCode.push('INP');
        return null;
    }


    // --------------------------------------------- Visitas a nodos de instrucciones LEN ---------------------------------------------
    visitLenExpr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: lenExpr'));
        this.visitChildren(ctx);
        console.log('Llego a 0')
        this.isFunction() ? this.functionCode.push('LEN') : this.byteCode.push('LEN');
        return null;
    }
    
    // visitLenInstr_Label(ctx) {
    //     this.logger.debug(chalk.magenta('Nodo visitado: lenInstr'));
    //     this.visitChildren(ctx);
    //     console.log('Llego a 1')
    //     this.isFunction() ? this.functionCode.push('LEN') : this.byteCode.push('LEN');
    //     return null;
    // }


    // ----------------------------------------------- Visitas a nodos de 'simple let' ------------------------------------------------


    visitSimpleLetInstr_Label(ctx) {
        return this.handleSimpleInstr(ctx, 'simpleLetInstr');
    }

    visitSimpleConstInstr_Label(ctx) {
        return this.handleSimpleInstr(ctx, 'simpleConstInstr');
    }

    handleSimpleInstr(ctx, label) {
        this.logger.debug(chalk.magenta(`Nodo visitado: ${label}`));
        const id = ctx.id().getText();

        if (!(id in this.variables)) {
            this.variables[id] = { byteload: 'BLD', arg1: 0, arg2: this.variableCounter++ };
        }

        this.visitChildren(ctx);

        // Generar el bytecode para asignar el valor a la variable
        const targetArray = this.isFunction() ? this.functionCode : this.byteCode;
        targetArray.push(`BST 0 ${this.variables[id]?.arg2 ?? this.variableCounter++}`);

        return null;
    }

    // ----------------------------------------------- Visitas a nodos de 'let-in' ------------------------------------------------

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


    visitSimpleConstInstr_Label(ctx) {
        console.log(chalk.red('Nodo visitado: simpleConstInstr'));
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

    visitAnonymousConstFunction(ctx) {
        console.log(chalk.red('Nodo visitado: anonymousConstFunction'));
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

    // --------------------------------------------- Visitas a nodos de 'let-in' ---------------------------------------------
    visitLetInExpr_Label(ctx) {
        this.logger.debug(chalk.red('Nodo visitado: letInExpr'));
        this.visitChildren(ctx);
        return null;
    }

    visitLetExpr_Label(ctx) {
        this.logger.debug(chalk.red('Nodo visitado: letExpr'));
        this.visitChildren(ctx);
        return null
    }

    visitInExpr_Label(ctx) {
        this.logger.debug(chalk.red('Nodo visitado: inExpr'));
        this.visitChildren(ctx);
        return null
    }

    // --------------------------------------------- Visitas a nodos de 'NestedLambda_Label' ---------------------------------------------

    visitNestedLambda_Label(ctx) {
        this.func = true;
        const paramCount = ctx.id().length - 1;
        const lambdaName = ctx.id(0).getText();

        let functionDeclarations = '';

        // Método auxiliar para generar declaraciones de funciones
        const generateFunctionBlock = (argsCount, isLastFunction = false) => {
            const functionName = `$FUN $${this.functionCounter}`;
            const parentFunction = `$${this.functionCounter === 1 ? 0 : this.functionCounter - 1}`;

            functionDeclarations += `${functionName} ARGS:${argsCount} PARENT:${parentFunction}`;
            this.functionCode.push(`${functionName} ARGS:${argsCount} PARENT:${parentFunction}\n`);

            // Generar instrucciones BLD para cada argumento
            for (let i = 0; i < argsCount; i++) {
                const bldInstruction = `BLD 0 ${i}`;
                functionDeclarations += bldInstruction;
                this.functionCode.push(bldInstruction);
            }

            if (!isLastFunction) {
                this.functionCode.push(`LDF $${this.functionCounter + 1}`);
                this.functionCode.push(`APP ${paramCount}`);
            }

            // Si es la última función, incluir las instrucciones generadas por visitar hijos
            if (isLastFunction) {
                this.visitChildren(ctx);
            }

            this.functionCode.push(`RET`);

            const endInstruction = `\n$END $${this.functionCounter}\n`;
            functionDeclarations += endInstruction;
            this.functionCode.push(endInstruction);

            this.functionMap[lambdaName] = {
                originalName: lambdaName,
                newId: `$${1}`,
                args: 1,
                parent: `$${0}`,
                invoking: `$${1}`
            };

            this.functionCounter++;
        };

        // Generar funciones intermedias
        for (let i = 0; i < paramCount - 1; i++) {
            generateFunctionBlock(1);
        }

        // Generar la última función
        if (paramCount > 0) {
            generateFunctionBlock(paramCount, true);
        }
        this.func = false;

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

    visitFunctionCallNested_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: functionCallNested'));

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
        main.push('HLT');
        main.push('$END $0');
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


    // --------------------------------------------- Visitas a nodos de instrucciones de control ---------------------------------------------
    
    visitIfElseExpr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: ifElseExpr'));
        this.func = true;
        this.visitChildren(ctx);
        return null;
    }

    visitIf_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: if'));

        this.visitChildren(ctx);
        this.functionCode.push('BF 3');

        return null;
    }

    visitThen_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: then'));

        this.visitChildren(ctx);
        this.functionCode.push('RET');

        return null;
    }

    visitElse_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: else'));

        this.visitChildren(ctx);

        return null;
    }

    visitArrayAccess_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: arrayAccess'));

        this.visitId_Label(ctx.id());
        this.visitChildren(ctx);
        this.isFunction() ? this.functionCode.push('LTK') : this.byteCode.push('LTK');

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