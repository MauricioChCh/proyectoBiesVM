import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
import Visitor from './Visitor.js';
import antlr4 from 'antlr4';
import chalk from 'chalk';

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

        /** @type {Array<Object>} code - Código a ejecutar (C). */
        this.code = [];

        /** @type {Array<Object>} environment - Entorno de ejecución actual */
        this.environment = [];

        /** @type {Object} functions - Almacén de funciones definidas. */
        this.functions = {};

        /** @type {number} programCounter - Puntero de instrucción actual. */
        this.programCounter = 0;

        this.isRunning = false;

        /** @type {Object} logger - Logger para mensajes de depuración. */
        this.logger = logger;
    }

    /**
     * Ejecuta una instrucción en la máquina virtual.
     * @param {Object} instr - Instrucción a ejecutar.
     * @param {string} instr.type - Tipo de instrucción.
     * @param {Array<*>} [instr.args=[]] - Argumentos de la instrucción.
     */

    /**
     * Obtiene la capa actual del entorno de bindings.
     * @param {number} layerIndex - Índice de la capa a obtener.
     * @returns {Object} Entorno de la capa especificada.
     */

    getCurrentLayer(layerIndex) { // Obtiene la capa actual del entorno de bindings
        if (!this.bindings[layerIndex]) {
            this.bindings[layerIndex] = {};
        }
        return this.bindings[layerIndex];
    }

    run() {
        if (this.code.length === 0) {
            throw new Error("No code loaded to execute");
        }
        this.programCounter = 0;
        this.executeProgram();
    }

    executeProgram() {
        this.isRunning = true;
        while (this.isRunning && this.programCounter < this.code.length) {
            const instr = this.code[this.programCounter];
            this.executeInstruction(instr);
        }
    }

    executeInstruction(instr) {
        //console.log(chalk.red(`Ejecutando instrucción en posición: ${this.programCounter}, tipo: ${instr.type}`));
        switch (instr.type) {
            // Carga y almacenamiento de valores
            case 'LDV':
                // ([LDV V | C], S, B, D) => (C, [V | S], B, D)
                // La instrucción `LDV` carga un valor `V` en la pila `S`.
                const valueArg = instr.args.join(' ');
                this.stack.push(valueArg.replace(/^"(.*)"$/, '$1')); // Expresión regular para quitar las comillas si existen
                break;

            case 'BLD':
                console.log("Instrucción BLD: ");
                // ([BLD L, V], S, B, D) => (C, [B[L][V] | S], B, D)
                // Carga el valor de la variable `V` en la capa `L` del entorno `B` y lo coloca en `S`.
                const [bindLayer, bindVarIndex] = instr.args;
                this.stack.push(this.getCurrentLayer(bindLayer)[bindVarIndex]);
                break;

            case 'STK':
                // ([STK L, V], S, B, D) => (C, S', [S.pop() | B[L][V]], D)
                // Almacena el valor superior de la pila en la capa `L` y variable `V` del entorno `B`.
                const [stkLayerIndex, stkVarIndex] = instr.args;
                this.getCurrentLayer(stkLayerIndex)[stkVarIndex] = this.stack.pop();
                break;

            case 'LIN':
                // ([LIN | C], [V, L | S]), B, D) => (C, [L.insert(0, V) | S]), B, D)
                // Construye una lista con los elementos especificados en instr.args y la coloca en la pila.
                const listValues = "[" + this.stack.join(", ") + "]"; // Toma los valores directamente de los argumentos de la instrucción
                this.stack = []; // Limpia la pila
                this.stack.push(listValues); // Coloca la lista en la pila
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

                this.stack.push(Number(this.stack.pop()) + Number(this.stack.pop()));
                break;

            case 'PLUS':
                const currentLayer = this.bindings[0]; // Accedemos directamente a la capa 0 del entorno de bindings
                let currentValue = currentLayer[0];    // Accedemos directamente al índice 0
                if (currentValue == null) {  // Usamos == para cubrir undefined y null
                    currentValue = 1;   // Asignamos el valor 1
                }
                currentValue =+ currentValue + +instr.args[0];  // Conversión y suma en una línea
                currentLayer[0] = this.stack[this.stack.length - 1] = currentValue;  // Actualizamos bindings y stack
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
            case 'EQ':
                // ([EQ|C], [N, M|S], B, D) => (C, [(M == N ? 1 : 0)|S], B, D)
                const nEq = this.stack.pop(); // Valor N
                const mEq = this.stack.pop(); // Valor M
                this.stack.push(Number(mEq) === Number(nEq));
                break;

            case 'GT':
                // ([GT|C], [N, M|S], B, D) => (C, [(M > N ? 1 : 0)|S], B, D)
                const nGt = this.stack.pop(); // Valor N
                const mGt = this.stack.pop(); // Valor M
                this.stack.push(Number(mGt) > Number(nGt));
                break;

            case 'GTE':
                // ([GTE| C], [N, M| S], B, D) => (C, [M >= N | S], B, D)
                // Compara si el segundo elemento superior `M` es mayor o igual al superior `N`.
                const n = this.stack.pop(); // Valor N
                const m = this.stack.pop(); // Valor M
                this.stack.push(Number(m) >= Number(n));
                break;


            case 'LT':
                // ([LT|C], [N, M|S], B, D) => (C, [(M < N ? 1 : 0)|S], B, D)
                const nLt = this.stack.pop(); // Valor N
                const mLt = this.stack.pop(); // Valor M
                this.stack.push(Number(mLt) < Number(nLt));
                break;

            case 'LTE':
                // ([LTE|C], [N, M|S], B, D) => (C, [(M <= N ? 1 : 0)|S], B, D)
                const nLte = this.stack.pop(); // Valor N
                const mLte = this.stack.pop(); // Valor M
                this.stack.push(Number(mLte) <= Number(nLte));
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
                let closureAPP = this.stack.pop();  // Obtiene la closure de la pila
                const argCount = instr.args && instr.args.length > 0 ? parseInt(instr.args[0]) : 1; // Obtiene el número de argumentos
                if (closureAPP && closureAPP.body) {    // Verifica que la closure y el cuerpo de la función no sean nulos
                    this.contextStack.push({    // Guarda el contexto actual en la pila de contextos
                        code: this.code,    // Guarda el código actual
                        programCounter: this.programCounter,    // Guarda el contador de programa actual
                        stack: this.stack.slice(),  // Guarda una copia de la pila
                        bindings: this.bindings.slice() // Guarda una copia de los bindings
                    });
                    let newBinding = {};    // Crea un nuevo binding
                    for (let i = argCount - 1; i >= 0; i--) {   // Recorre los argumentos
                        if (this.stack.length > 0) {    // Verifica que haya suficientes argumentos en la pila
                            newBinding[i] = this.stack.pop();   // Asigna el argumento al binding
                        } else {    // Si no hay suficientes argumentos en la pila
                            console.warn(`Advertencia: No hay suficientes argumentos en la pila para la función ${closureAPP.functionName}`);
                            break;
                        }
                    }
                    this.bindings.unshift(newBinding);
                    this.code = closureAPP.body;
                    this.programCounter = 0;
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

            case 'BR':
                console.log("Instrucción BR: ");
                const branchOffset = Number(instr.args[0]) -1; // Obtiene el offset de la instrucción
                this.programCounter += branchOffset; // Actualiza el contador de programa
                break;

            case 'BT':
                // ([BT j | C], [V | S], B, D) => Si V es true, (C, S, B, D) con el programCounter = j; si no, sigue con la siguiente instrucción.
                const conditionTrue = this.stack.pop();
                if (conditionTrue) {
                    this.programCounter = parseInt(instr.args[0], 10);
                }
                break;

            case 'BF':
                // ([BF j | C], [V | S], B, D) => Si V es false, (C, S, B, D) con el programCounter = j; si no, sigue con la siguiente instrucción.
                console.log("Signed number: ", parseInt(instr.args[0], 10));
                const conditionFalse = this.stack.pop();
                if (!conditionFalse) {
                    this.programCounter = parseInt(instr.args[0], 10);
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
                    this.programCounter = previousContext.programCounter;
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
                this.programCounter = 0;
                break;

            // Salida y finalización
            case 'PRN':
                console.log("Instrucción PRN: ");
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
        this.programCounter++; // Mover al siguiente índice de instrucción
    }
}

export default VM;