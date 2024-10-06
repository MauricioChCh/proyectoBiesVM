import chalk from 'chalk';
import Visitor from './Visitor.js';
import antlr4 from 'antlr4';
import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';

/**
 * Clase VM que representa la máquina virtual biesVM.
 * Implementa una máquina de pila con soporte para funciones, entornos de bindings,
 * y un stack de contextos, basada en la 'SECD' de Landin. La máquina ejecuta instrucciones
 * ensambladas a partir de código `biesASM`.
 */
class VM {
    /**
     * Crea una nueva instancia de la máquina virtual `biesVM`.
     * @param {Object} [logger={ log: () => {} }] - Objeto para registrar mensajes de depuración.
     */
    constructor(logger = { log: () => {} }) {
        /** @type {Array<*>} stack - Pila principal de ejecución (S). */
        this.stack = [];

        /** @type {Array<Object>} bindings - Pila de entornos de bindings (B). */
        this.bindings = [{ /* Capa 0 */ }];

        /** @type {Array<Object>} contextStack - Pila de contextos de ejecución (D). */
        this.contextStack = [];

        /** @type {Array<Object>} environment - Entorno de ejecución actual (no usado directamente en la primera versión). */
        this.environment = [];

        /** @type {Object} functions - Almacén de funciones definidas. */
        this.functions = {};

        /** @type {Array<Object>} code - Código a ejecutar (C). */
        this.code = [];

        /** @type {number} instructionPointer - Puntero de instrucción actual. */
        this.instructionPointer = 0;

        /** @type {Object} logger - Logger para mensajes de depuración. */
        this.logger = logger;
    }

    /**
     * Obtiene la capa actual del entorno de bindings.
     * @param {number} layerIndex - Índice de la capa a obtener.
     * @returns {Object} Entorno de la capa especificada.
     */
    getCurrentLayer(layerIndex) {
        if (!this.bindings[layerIndex]) {
            this.bindings[layerIndex] = {};
        }
        return this.bindings[layerIndex];
    }

    /**
     * Ejecuta una instrucción en la máquina virtual.
     * @param {Object} instr - Instrucción a ejecutar.
     * @param {string} instr.type - Tipo de instrucción.
     * @param {Array<*>} [instr.args=[]] - Argumentos de la instrucción.
     */


    executeInstruction(instr) {
        switch (instr.type) {
            // Carga y almacenamiento de valores
            case 'LDV':
                // ([LDV V| C], S, B, D) => (C, [V | S], B, D)
                // La instrucción `LDV` carga un valor `V` en la pila `S`.
                // El estado de la máquina cambia al agregar `V` en la pila `S`.
                this.stack.push(parseInt(instr.args[0]));
                break;

            case 'BLD':
                // ([BLD L, V], S, B, D) => (C, [B[L][V] | S], B, D)
                // Carga el valor de la variable `V` en la capa `L` del entorno `B` y lo coloca en `S`.
                const [bindLayer, bindVarIndex] = instr.args;
                const valueToLoad = this.getCurrentLayer(bindLayer)[bindVarIndex];
                this.stack.push(valueToLoad);
                break;

            case 'STK':
                // ([STK L, V], S, B, D) => (C, S', [S.pop() | B[L][V]], D)
                // Almacena el valor superior de la pila en la capa `L` y variable `V` del entorno `B`.
                const [stkLayerIndex, stkVarIndex] = instr.args;
                const stkValueToStore = this.stack.pop();
                this.getCurrentLayer(stkLayerIndex)[stkVarIndex] = stkValueToStore;
                break;

            case 'HIL':
                // ([HIL| C], S, B, D) => (C, [hilera | S], B, D)
                // Construye una hilera con todos los elementos en la pila.
                let hilera = "[" + this.stack.join(", ") + "]";

                // Reemplaza la pila con la hilera construida
                this.stack = [hilera];
                break;

            case 'BST':
                // ([BST V, L], S, B, D) => (C, S, [V | B[L]], D)
                // Almacena `V` en el entorno de la capa `L` en `B`.
                const [layerIndex, varIndex] = instr.args;
                const valueToStore = this.stack.pop();
                this.getCurrentLayer(layerIndex)[varIndex] = valueToStore;
                break;

            // Operaciones aritméticas
            case 'ADD':
                // ([ADD| C], [N, M| S], B, D) => (C, [N + M | S], B, D)
                // La instrucción `ADD` suma los dos elementos superiores de la pila `S`
                // y coloca el resultado de la suma en la cima de la pila.
                this.stack.push(this.stack.pop() + this.stack.pop());
                break;

            case 'SUB':
                // ([SUB| C], [N, M| S], B, D) => (C, [M - N | S], B, D)
                // Resta el segundo elemento superior `M` de `S` menos el elemento superior `N` de `S`
                // y coloca el resultado en la cima de la pila.
                const topValue = this.stack.pop(); // Valor superior (N)
                const secondValue = this.stack.pop(); // Segundo valor (M)
                this.stack.push(secondValue - topValue);
                break;

            case 'MUL':
                // ([MUL| C], [N, M| S], B, D) => (C, [N * M | S], B, D)
                // Multiplica los dos elementos superiores de `S` y almacena el resultado.
                this.stack.push(this.stack.pop() * this.stack.pop());
                break;

            case 'DIV':
                // ([DIV| C], [N, M| S], B, D) => (C, [M / N | S], B, D)
                // Divide el segundo elemento superior `M` por el superior `N`.
                const divisor = this.stack.pop(); // A (divisor)
                const dividend = this.stack.pop(); // B (dividendo)
                if (divisor === 0) {
                    throw new Error('Error: Division by zero');
                }
                this.stack.push(parseFloat(dividend) / parseFloat(divisor));
                break;
            case 'NEG':
                // ([NEG| C], [N| S], B, D) => (C, [-N | S], B, D)
                // Cambia el signo del valor superior de `S`.
                this.stack.push(-this.stack.pop());
                break;

            case 'POW':
                // ([POW| C], [N, M| S], B, D) => (C, [M ^ N | S], B, D)
                const exponent = this.stack.pop(); // Obtiene el exponente de la pila
                const base = this.stack.pop(); // Obtiene la base de la pila
                this.stack.push(Math.pow(base, exponent)); // Calcula la potencia y la empuja a la pila
                break;

            case 'SQRT':
                // ([SQRT| C], [N| S], B, D) => (C, [sqrt(N) | S], B, D)
                const value = this.stack.pop(); // Obtiene el valor de la pila
                if (value < 0) {
                    throw new Error('Error: La raíz cuadrada de un número negativo no es un número real');
                }
                this.stack.push(Math.sqrt(value)); // Calcula la raíz cuadrada y la empuja a la pila
                break;

            // Comparaciones
            case 'GTE':
                // ([GTE| C], [N, M| S], B, D) => (C, [M >= N | S], B, D)
                // Compara si el segundo elemento superior `M` es mayor o igual al superior `N`.
                const n = this.stack.pop(); // Valor N
                const m = this.stack.pop(); // Valor M
                this.stack.push(m >= n);
                break;

            // Control de flujo
            case 'LDF':
                // ([LDF F, k | C], S, E, D) => (C, [FCL | S], E, D)
                // Carga la closure de la función `F` en `S` con `k` parámetros.
                const [functionNameLDF, k] = instr.args;
                const functionBodyLDF = this.functions[functionNameLDF];
                if (!functionBodyLDF) {
                    throw new Error(`Function ${functionNameLDF} not defined`);
                }
                const paramCountLDF = k !== undefined ? k : this.functions[functionNameLDF].paramCount || 1;
                const closureLDF = {
                    functionName: functionNameLDF,
                    body: functionBodyLDF,
                    paramCount: paramCountLDF,
                    environment: this.environment.slice()
                };
                this.stack.push(closureLDF);
                break;

            case 'APP':
                // ([APP k], S, B, D) => (C, [FCL | S], B, [FCL, S, B, C, I | D])
                // Aplica la función closure `FCL` en la cima de la pila `S`.
                let closureAPP = this.stack.pop();
                const argCount = instr.args && instr.args.length > 0 ? parseInt(instr.args[0]) : 1;
                if (closureAPP && closureAPP.body) {
                    this.contextStack.push({
                        code: this.code,
                        instructionPointer: this.instructionPointer,
                        stack: this.stack.slice(),
                        bindings: this.bindings.slice()
                    });
                    let newBinding = {};
                    for (let i = argCount - 1; i >= 0; i--) {
                        if (this.stack.length > 0) {
                            newBinding[i] = this.stack.pop();
                        } else {
                            console.warn(`Advertencia: No hay suficientes argumentos en la pila para la función ${closureAPP.functionName}`);
                            break;
                        }
                    }
                    this.bindings.unshift(newBinding);
                    this.code = closureAPP.body;
                    this.instructionPointer = 0;
                    const functionBody = this.code.join('\n');
                    this.logger.log(chalk.magenta(`Ejecutando función ${closureAPP.functionName} con cuerpo:`) + `\n${functionBody}`);
                    const chars = new antlr4.InputStream(functionBody);
                    const lexer = new biesVMLexer(chars);
                    const tokens = new antlr4.CommonTokenStream(lexer);
                    const parser = new biesVMParser(tokens);
                    parser.buildParseTrees = true;
                    const tree = parser.program();
                    const visitor = new Visitor();
                    visitor.vm = this;
                    visitor.visit(tree);
                } else {
                    throw new Error('Closure or closure body is undefined');
                }
                break;

            case 'RET':
                // ([RET], S, B, D) => (C, S', B', D)
                // Retorna desde una función, restaurando el estado anterior.
                let returnValue = this.stack.pop();
                let previousContext = this.contextStack.pop();
                if (previousContext) {
                    this.code = previousContext.code;
                    this.stack = previousContext.stack;
                    this.bindings = previousContext.bindings;
                    this.instructionPointer = previousContext.instructionPointer;
                    if (typeof returnValue !== 'undefined') {
                        this.stack.push(returnValue);
                    }
                }
                break;

            case 'INI':
                // ([INI F], S, B, D) => (C, [], [{}], [])
                // Establece el código de la función principal y reinicia el entorno.
                const mainFunctionName = instr.args[0];
                const mainFunctionBody = this.functions[mainFunctionName];
                if (!mainFunctionBody) {
                    this.logger.log(`Error: Main function ${mainFunctionName} not defined`);
                    throw new Error(`Main function ${mainFunctionName} not defined`);
                }
                this.code = mainFunctionBody;
                this.stack = [];
                this.bindings = [{}];
                this.contextStack = [];
                this.instructionPointer = 0;
                break;

            // Salida y finalización
            case 'PRN':
                // ([PRN| C], [V | S], B, D) => (C, S, B, D)
                // Imprime el valor superior de `S` y lo elimina.
                const print = this.stack.pop();
                if (print !== undefined) {
                    console.log(chalk.yellow(`${print}`));
                }
                break;

            case 'HLT':
                // ([HLT| C], S, B, D) => ([], [], [], [])
                // Detiene la máquina virtual y limpia todos los estados de `C`, `S`, `B` y `D`.
                this.code = [];
                this.stack = [];
                this.bindings = [];
                this.contextStack = [];
                break;

            default:
                this.logger.log(`Unknown instruction: ${instr.type} ejecutada con argumentos ${JSON.stringify(instr.args)}`);
                throw new Error(`Instrucción desconocida: ${instr.type}`);
        }
    }

}

export default VM;