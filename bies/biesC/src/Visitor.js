// ----------------------------------------- Importaciones -----------------------------------------
import chalk from 'chalk';
import biesCVisitor from '../output/biesCVisitor.js';
import BuiltInsProcessor from './PredifinedSymbol.js';
import C from './Compiler/C.js';
import { Logger } from './Logger.js';


// ----------------------------------------- Clase Visitor -----------------------------------------

/**
 * Clase que representa un visitor para el lenguaje Bies.
 * Se encarga de visitar los nodos del árbol de análisis sintáctico y generar código.
 * 
 * @class Visitor
 * @extends biesCVisitor
 * @file Visitor.js
 * @version 1.0.0
 * 
 * @author Joshua Yarit Amador Lara
 * @author Mauricio Chaves Chaves [Coordinador]
 * @author Fabiola Rojas Alvarado
 * @author Eddy Villarreal Muñoz
 * 
 * @requires chalk
 * @requires biesCVisitor
 * @requires BuiltInsProcessor
 * @requires C
 * @requires Logger
 */


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

    // ----------------------------------------- Métodos Principales -----------------------------------------

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

    /**
     * Genera el código principal para la función 'main'.
     */
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

    // ----------------------------------------- Operaciones Aritméticas -----------------------------------------

    /**
     * Procesa un nodo de operación aritmética.
     * @param {Object} ctx - El contexto del nodo.
     * @param {string} operator - El operador aritmético.
     * @param {string} bytecode - El código de bytes correspondiente.
     */
    processOperation(ctx, operator, bytecode) {
        this.logger.debug(chalk.magenta(`Procesando operación ${operator} -> ${bytecode}`));

        // Primero visitamos los hijos para asegurar el orden correcto de operaciones
        this.visitChildren(ctx);

        // Agregamos la instrucción al código correspondiente según si estamos en una función o no
        (this.func ? this.functionCode : this.byteCode).push(bytecode);
    }

    visitPowExpr(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: PowExpr'));
        this.visitChildren(ctx);
        (this.func ? this.functionCode : this.byteCode).push('POW');
        return null;
    }

    visitMultDivExpr(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: MultDivExpr'));
        const operator = ctx.getChild(1).getText();

        // Primero visitamos los hijos para asegurar el orden correcto de operaciones
        this.visitChildren(ctx);

        switch (operator) {
            case '*':
                (this.func ? this.functionCode : this.byteCode).push('MUL');
                break;
            case '/':
                (this.func ? this.functionCode : this.byteCode).push('DIV');
                break;
            default:
                throw new Error(`Operador desconocido: ${operator}`);
        }
        return null;
    }

    visitAddSubExpr(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: AddSubExpr'));
        const operator = ctx.getChild(1).getText();

        // Primero visitamos los hijos para asegurar el orden correcto de operaciones
        this.visitChildren(ctx);

        switch (operator) {
            case '+':
                (this.func ? this.functionCode : this.byteCode).push('ADD');
                break;
            case '-':
                (this.func ? this.functionCode : this.byteCode).push('SUB');
                break;
            default:
                throw new Error(`Operador desconocido: ${operator}`);
        }
        return null;
    }

    // ----------------------------------------- Operaciones Comparativas -----------------------------------------

    visitEqualityExpr(ctx) {
        // Obtén los operandos de la operación
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const operator = ctx.getChild(1).getText(); // Obtiene el operador de comparación

        // Mapea el operador a las instrucciones de la máquina virtual
        let opcode;
        switch (operator) {
            case '==':
                opcode = 'EQ';
                break;
            case '!=':
                opcode = 'NEQ';
                break;
        }

        // Realiza la operación con los operandos
        this.processOperation(ctx, operator, opcode);
        return null;
    }

    visitRelationalExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const operator = ctx.getChild(1).getText();

        let opcode;
        switch (operator) {
            case '<':
                opcode = 'LT';
                break;
            case '>':
                opcode = 'GT';
                break;
            case '<=':
                opcode = 'LE';
                break;
            case '>=':
                opcode = 'GE';
                break;
        }

        this.processOperation(ctx, operator, opcode);
        return null;
    }

    // ----------------------------------------- Operaciones Lógicas -----------------------------------------

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

    // ----------------------------------------- Datos Primarios y Accesos -----------------------------------------

    visitPrimaryData_Label(ctx) {
        this.logger.log(chalk.magenta('Nodo visitado: primaryData ->'));

        this.visitChildren(ctx);

        return null;
    }

    visitNumber_Label(ctx) {
        const number = ctx.getText();
        this.logger.log(chalk.magenta('Nodo visitado: number ->'), number);

        this.isFunction() ? this.functionCode.push('LDV ' + number) : this.byteCode.push('LDV ' + number);

        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    visitString(ctx) {
        const string = ctx.getText();
        this.logger.log(chalk.magenta('Nodo visitado: string ->'), string);
        this.isFunction() ? this.functionCode.push('LDV ' + string) : this.byteCode.push('LDV ' + string);

        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    visitArray(ctx) {
        const array = ctx.getText();
        this.logger.log(chalk.magenta('Nodo visitado: array ->'), array);
        this.isFunction() ? this.functionCode.push('LDV ' + array) : this.byteCode.push('LDV ' + array);

        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    visitId_Label(ctx) {
        const id = ctx.getText();
        this.logger.log(chalk.magenta('Nodo visitado: id ->'), id);

        if (id in this.variables) {
            const command = `${this.variables[id].byteload} ${this.variables[id].arg1} ${this.variables[id].arg2}`;
            this.isFunction() ? this.functionCode.push(command) : this.byteCode.push(command);
        } else {
            this.variables[id] = { byteload: 'BLD', arg1: 0, arg2: this.variableCounter++ };
        }
        return null;
    }

    visitArrayAccess_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: arrayAccess'));
        this.visitId_Label(ctx.id());
        this.visitChildren(ctx);
        this.isFunction() ? this.functionCode.push('LTK') : this.byteCode.push('LTK');
        return null;
    }

    // ----------------------------------------- Instrucciones Let y Const -----------------------------------------

    visitSimpleLetInstr_Label(ctx) {
        return this.handleSimpleInstr(ctx, 'simpleLetInstr');
    }

    visitSimpleConstInstr_Label(ctx) {
        return this.handleSimpleInstr(ctx, 'simpleConstInstr');
    }

    handleSimpleInstr(ctx, label) {
        this.logger.debug(chalk.magenta(`Nodo visitado: ${label}`));
        const id = ctx.id().getText();

        // Verificar si la variable ya está en el mapa de variables
        if (!(id in this.variables)) {
            this.variables[id] = { byteload: 'BLD', arg1: 0, arg2: this.variableCounter++ };
        }

        // Visitar los hijos del nodo para procesar la expresión
        this.visitChildren(ctx);

        // Generar el bytecode para asignar el valor a la variable
        const targetArray = this.isFunction() ? this.functionCode : this.byteCode;
        targetArray.push(`BST 0 ${this.variables[id]?.arg2 ?? this.variableCounter++}`);

        return null;
    }

    // ----------------------------------------- Funciones Lambda -----------------------------------------

    visitLambdaConstWithParams_Label(ctx) {
        const paramCount = ctx.id().length - 1; // Calcula la cantidad de parámetros
        return this.visitLambda_Label(ctx, paramCount);
    }

    visitLambdaConstNoParams_Label(ctx) {
        return this.visitLambda_Label(ctx, 0);
    }

    visitAnonymousFunctionExpr(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: AnonymousFunctionExpr'));
        return this.visit(ctx.anonymousLetFunction());
    }

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

    visitLambdaNoParams_Label(ctx) {
        return this.visitLambda_Label(ctx, 0);
    }

    visitLambdaWithParams_Label(ctx) {
        const paramCount = ctx.id().length - 1; // Calcula la cantidad de parámetros
        return this.visitLambda_Label(ctx, paramCount);
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

        // Actualizar el mapa de variables con los parámetros de la función
        for (let i = 0; i < paramCount; i++) {
            this.variables[ctx.id(i + 1).getText()] = { byteload: 'BLD', arg1: 0, arg2: i };
        }

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
        for (let i = 0; i < paramCount - 1; i++) { // Generar funciones intermedias
            generateFunctionBlock(1);
        }
        if (paramCount > 0) {   // Generar la última función
            generateFunctionBlock(paramCount, true);
        }
        this.func = false;

        return null;
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

    // ----------------------------------------- Llamadas a Funciones -----------------------------------------

    visitFunctionCallExpr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: FunctionCall -> '), ctx.getText());
        this.visitChildren(ctx);
        return null;
    }

    visitFunctionCall_Label(ctx, type) {
        this.logger.debug(chalk.magenta(`Nodo visitado: ${type} ->`), ctx.getText());
        this.visitChildren(ctx);
        const functionId = ctx.id().getText();
        const functionDetails = this.functionMap[functionId];
        this.isFunction() ? this.functionCode.push(`LDF ${functionDetails.newId}`) : this.byteCode.push(`LDF ${functionDetails.newId}`);
        this.isFunction() ? this.functionCode.push(`APP ${functionDetails.args}`) : this.byteCode.push(`APP ${functionDetails.args}`);

        return null;
    }

    visitFunctionCallNoParams_Label(ctx) {
        return this.visitFunctionCall_Label(ctx, 'functionCallNoParams');
    }

    visitFunctionCallWithParams_Label(ctx) {
        return this.visitFunctionCall_Label(ctx, 'functionCallWithParams');
    }

    visitFunctionCallNested_Label(ctx) {
        return this.visitFunctionCall_Label(ctx, 'functionCallNested');
    }

    // ----------------------------------------- Funciones Predefinidas -----------------------------------------

    visitPredifinedFunctionCall_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: predifinedFunctionCall'));
        this.visitChildren(ctx);
        return null;
    }

    visitBuiltIns(ctx, label) {
        this.logger.debug(chalk.magenta(`Nodo visitado: ${label}`));

        this.builtIns = label;
        this.visitChildren(ctx);

        return null;
    }

    visitBool_Label(ctx) {
        return this.visitBuiltIns(ctx, 'bool');
    }

    visitTrue_Label() {
        this.builtIns = 'true';
        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    visitFalse_Label() {
        this.builtIns = 'false';
        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    visitNull_Label() {
        this.builtIns = 'none';
        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
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


    // ----------------------------------------- Instrucciones de Impresión -----------------------------------------

    visitPrintInstr_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: printInstr'));
        this.visitChildren(ctx);
        this.isFunction() ? this.functionCode.push('PRN') : this.byteCode.push('PRN');
        return null;
    }

    // ----------------------------------------- Operaciones de Entrada -----------------------------------------

    visitInputExprInstr_Label() {
        this.builtIns = 'input';
        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    visitInputExprInstrArgs_Label() {
        this.builtIns = 'input';
        if (this.builtInsProcessor[this.builtIns]) {
            this.builtInsProcessor[this.builtIns]();
        }
        return null;
    }

    // ----------------------------------------- Estructuras Let-In -----------------------------------------

    visitLetInExpr_Label(ctx) {
        this.logger.debug(chalk.red('Nodo visitado: letInExpr'));
        this.func = true;
        this.visitChildren(ctx);

        return null;
    }

    visitLetExpr_Label(ctx) {
        this.logger.debug(chalk.red('Nodo visitado: letExpr'));
        this.func = true;
        this.visitChildren(ctx);

        return null
    }

    visitInExpr_Label(ctx) {
        this.logger.debug(chalk.red('Nodo visitado: inExpr'));

        this.visitChildren(ctx);

        return null
    }

    // ----------------------------------------- Operaciones Generales y Expresiones -----------------------------------------

    visitParenthesisExpr(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: ParenthesisExpr'));
        return this.visit(ctx.expr());
    }

    visitExp_Label(ctx) {
        this.logger.debug(chalk.magenta('Nodo visitado: exp'));
        this.visitChildren(ctx);
        return null;
    }

    // ----------------------------------------- Métodos Auxiliares -----------------------------------------

    /**
     * Genera una variable temporal.
     * @returns {string} - Nombre de la variable temporal.
     */
    generateTempVar() {
        return `t${this.tempVarCounter++}`;
    }

    /**
     * Agrega una instrucción al conjunto de instrucciones.
     * @param {string} instruction - La instrucción a agregar.
     */
    addInstruction(instruction) {
        this.instructions.push(instruction);
    }

    /**
     * Verifica si el contexto actual está dentro de una función.
     * @returns {boolean} - `true` si está en una función, de lo contrario `false`.
     */
    isFunction = () => this.func;

}


export default Visitor;