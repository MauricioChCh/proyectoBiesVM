import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
import Visitor from './Visitor.js';
import antlr4 from 'antlr4';
import chalk from 'chalk';
import readline from 'readline';

class VM {
    constructor(logger = { log: () => { } }) {
        this.stack = []; // Array -> S
        this.bindings = [{}]; // Array de Objetos -> B
        this.contextStack = []; // Array -> D
        this.code = []; // Array -> C
        this.functions = {};    //Objeto (diccionario)
        this.programCounter = 0;
        this.logger = logger;
    }

    // FUNCIONES --------------------------------------------------------------------------------------------
    getCurrentLayer(layerIndex) {
        if (!this.bindings[layerIndex]) {
            this.bindings[layerIndex] = {};
        }
        return this.bindings[layerIndex];
    }

    async run(code) {
        this.code = code;
        while (this.programCounter < this.code.length) {
            const instruction = this.code[this.programCounter];
            this.programCounter++;
            await this.executeInstruction(instruction);
        }
    }

    async executeInstruction(instruction) {
        this.logger.log(`Visitando instrucción: ${instruction.type} ${instruction.args ? instruction.args.join(' ') : ''}`);
        const handler = this.instructionHandlers[instruction.type];
        if (handler) {
            await handler.call(this, instruction);
        } else {
            throw new Error(`Instrucción desconocida: ${instruction.type}`);
        }
    }

    executeAntlrParsing(functionBody) {
        const chars = new antlr4.InputStream(functionBody);
        const lexer = new biesVMLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new biesVMParser(tokens);
        parser.buildParseTrees = true;
        const tree = parser.program();
        const visitor = new Visitor();
        visitor.vm = this;
        visitor.visit(tree);
    }

    async getUserInput() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const userInput = await new Promise((resolve) => rl.question('', resolve));
        rl.close();
        return userInput;
    }

    performArithmeticOperation(operation) {
        const [b, a] = [this.stack.pop(), this.stack.pop()];
        this.stack.push(operation(Number(a), Number(b)));
    }

    performLogicOperation(operation) {
        const [b, a] = [this.stack.pop(), this.stack.pop()];
        this.stack.push(operation(a, b));
    }

    performComparison(comparison) {
        const [b, a] = [this.stack.pop(), this.stack.pop()];
        this.stack.push(comparison(Number(a), Number(b)));
    }

    instructionHandlers = {

        // Carga inicialización, arranque y parada -----------------------------------------------------------------------------
        INI: (instruction) => { // Inicializar
            const mainFunctionName = instruction.args[0];
            const mainFunctionBody = this.functions[mainFunctionName];

            if (!mainFunctionBody) {
                this.logger.log(`Error: Main function ${mainFunctionName} not defined`);
                throw new Error(`Main function ${mainFunctionName} not defined`);
            }

            this.code = mainFunctionBody;   // Cargar el cuerpo de la función principal

            // Inicializar la pila (S), los bindings (B) y el contexto (D)
            this.stack = [];
            this.bindings = [{}];
            this.contextStack = [];     // Contexto actual D.current = C
            this.programCounter = 0;    // Inicializar el contador de programa
        },

        HLT: () => { // Stop
            this.code = [];
            this.stack = [];
            this.bindings = [];
            this.contextStack = [];
        },

        // De pila y ambiente -------------------------------------------------------------------------------------------------
        POP: () => { // Pop
            this.stack.pop();
        },

        SWP: () => { // Swap
            this.stack.push(this.stack.pop());
            this.stack.push(this.stack.pop());
        },

        LDV: (instruction) => { // Load value
            const value = instruction.args.join(' ');

            let parsedValue;
            try {
                parsedValue = JSON.parse(value);
            } catch (e) {
                parsedValue = value;
            }

            this.stack.push(
                Array.isArray(parsedValue)
                    ? parsedValue
                    : value.startsWith('"') && value.endsWith('"') && value.length > 2
                        ? String(value.slice(1, -1))    // Si el valor tiene comillas y no es vacío, quita las comillas
                        : value === '""'                // Si el valor es exactamente las comillas vacías
                            ? undefined                 // Empuja undefined
                            : !isNaN(Number(value))     // Si el valor no tiene comillas y puede convertirse a Number
                                ? Number(value)         // Convierte y guarda como Number
                                : undefined             // Si el valor no es válido, empuja undefined
            );
        },

        BLD: (instruction) => { // Load value from binding
            const [bindLayerIndex, bindVariableIndex] = instruction.args;
            this.stack.push(this.getCurrentLayer(bindLayerIndex)[bindVariableIndex]);
        },

        BST: (instruction) => {
            const [layerIndex, variableIndex] = instruction.args;
            const value = this.stack.pop();
            this.getCurrentLayer(layerIndex)[variableIndex] = value;
            this.logger.debug(chalk.red(`Stored value: ${value}`));
        },

        // Aritmética --------------------------------------------------------------------------------------------------------
        ADD: () => this.performArithmeticOperation((a, b) => a + b), // Suma
        SUB: () => this.performArithmeticOperation((a, b) => a - b), // Resta
        MUL: () => this.performArithmeticOperation((a, b) => a * b), // Multiplicación
        DIV: () => { // División
            const [b, a] = [this.stack.pop(), this.stack.pop()];
            if (b === 0) throw new Error('Error: División por cero');
            this.stack.push(a / b);
        },

        // Aritmética Unarias -----------------------------------------------------------------------------------------------

        NEG: () => { // Negation
            this.stack.push(-this.stack.pop());
        },

        SGN: () => { // Sign
            const N = this.stack[0]; // Obtenemos el primer elemento de la pila que debe ser un número
            this.stack[0] = (N > 0) ? 1 : 0; // Calculamos el signo y lo asignamos directamente al primer elemento de la pila
        },

        // Aritmética Relacional --------------------------------------------------------------------------------------------

        EQ: () => { // Equal
            this.stack.push(this.stack.pop() === this.stack.pop());
        },
        GT: () => this.performComparison((a, b) => a > b), // Greater than
        GTE: () => this.performComparison((a, b) => a >= b), // Greater than or equal
        LT: () => this.performComparison((a, b) => a < b), // Less than
        LTE: () => this.performComparison((a, b) => a <= b), // Less than or equal

        // Lógica Básica ----------------------------------------------------------------------------------------------------
        AND: () => this.performLogicOperation((a, b) => a && b), // AND
        OR: () => this.performLogicOperation((a, b) => a || b), // OR
        XOR: () => this.performLogicOperation((a, b) => a !== b), // XOR

        // Lógica Unaria ----------------------------------------------------------------------------------------------------

        NOT: () => this.stack.push(!this.stack.pop()), // NOT

        // Test de nulidad --------------------------------------------------------------------------------------------------
        SNT: () => { // String Null test
            const str = this.stack.pop();
            this.stack.push(str === "" ? 1 : 0);
        },

        // Concatenación -----------------------------------------------------------------------------------------------------

        CAT: () => { // Concatenación
            const b = this.stack.pop();
            const a = this.stack.pop();
            this.stack.push(a + b);
        },

        // Conversión universal a string de valor  ---------------------------------------------------------------------------

        TOS: () => { // To string
            const value = this.stack.pop();
            this.stack.push(String(value));
        },

        // Cadenas/Hileras/String -------------------------------------------------------------------------------------------

        STK: function () { // Extraer k-ésimo elemento
            const index = this.stack.pop(); // Índice de la pila
            const str = this.stack.pop(); // Cadena de la pila

            // Verificar si el índice es válido
            if (typeof str === 'string' && typeof index === 'number' && index >= 0 && index < str.length) {
                this.stack.push(str.charAt(index)); // Empuja el carácter correspondiente
            } else {
                this.stack.push(undefined); // Si el índice no es válido o la cadena no es válida, empuja undefined
            }
        },

        SRK: () => { // Substring Right k
            this.logger.debug("Pila pre SRK:", this.stack);
            const k = Number(this.stack.pop());
            const str = this.stack.pop();
            if (typeof str === 'string' && k >= 0 && k <= str.length) {
                this.stack.push(str.slice(k));
            }
            this.logger.debug("Pila tras SRK:", this.stack);
        },

        // Listas ------------------------------------------------------------------------------------------------------------

        LNT: () => { // List Null Test
            const V = this.stack[0]; // Obtenemos el primer elemento de la pila que debe ser una lista

            // Verificamos si V es una lista vacía
            const T = Array.isArray(V) && V.length === 0 ? 1 : 0; // T será 1 si V es una lista vacía, de lo contrario 0

            // Removemos V de la pila y añadimos el resultado T
            this.stack = [T, ...this.stack.slice(1)];
        },


        LIN: () => {
            this.stack.push([this.stack.pop()].concat(this.stack.pop()));  // Devolver la lista modificada a la pila
        },


        LTK: () => { // List Take
            const index = this.stack.pop(); // Obtener el índice k
            const list = this.stack.pop(); // Obtener la lista

            // Comprobar si la lista es un arreglo y si el índice es válido
            if (Array.isArray(list) && index >= 0 && index < list.length) {
                this.stack.push(list[index]); // Agregar el k-ésimo elemento de la lista a la pila
            } else {
                this.stack.push(undefined); // Agregar undefined si el índice es inválido
            }
        },


        LRK: () => { // List Rest k
            const index = this.stack.pop(); // Obtener el índice k
            const list = this.stack.pop(); // Obtener la lista V

            // Tomar el resto de la lista a partir del índice k y agregarlo a la pila
            this.stack.push(list.slice(index)); // Agregar el nuevo arreglo a la pila
        },


        TOL: () => { // To List
            const value = this.stack.pop(); // Obtener el valor V de la parte superior de la pila

            // Convertir el valor a una lista
            const list = Array.isArray(value)
                ? value // Si ya es un array, no hacemos nada
                : typeof value === 'string'
                    ? Array.from(value) // Convertir cadena en lista de caracteres
                    : typeof value === 'number'
                        ? Array.from(String(value), Number) // Convertir número en lista de dígitos
                        : [value]; // Para otros tipos, convertir a lista con un solo elemento

            // Agregar la lista a la pila
            this.stack.push(list);
        },


        // Bifurcaciones -------------------------------------------------------------------------------------------
        NOP: () => { // No operation
            // No hace nada
        },

        BR: (instruction) => { // Branch Relative
            const branchOffset = Number(instruction.args[0]) - 1;
            this.programCounter += branchOffset;
        },

        BT: (instruction) => { // Branch True
            if (this.stack.pop()) {
                const branchOffset = Number(instruction.args[0]) - 1;
                this.programCounter += branchOffset;
            }
        },

        BF: (instruction) => { // Branch False
            if (!this.stack.pop()) {
                const branchOffset = Number(instruction.args[0]) - 1;
                this.programCounter += branchOffset;
            }
        },

        // Carga, Llamado y Retorno de Funciones ---------------------------------------------------------------------------

        LDF: (instruction) => { // Load Function
            const [functionName, paramCount] = instruction.args;
            const functionBody = this.functions[functionName];
            if (!functionBody) {
                throw new Error(`Function ${functionName} not defined`);
            }
            const paramCountValue = paramCount !== undefined ? paramCount : this.functions[functionName].paramCount || 1;
            const closure = {
                functionName: functionName,
                body: functionBody,
                paramCount: paramCountValue,
            };
            this.stack.push(closure);
        },

        APP: (instruction) => { // Apply
            this.logger.debug("Pila tras APP:", this.stack);
            let closure = this.stack.pop();
            const argCount = instruction.args && instruction.args.length > 0 ? parseInt(instruction.args[0]) : 1;
            if (closure && closure.body) {
                this.contextStack.push({
                    code: this.code,
                    programCounter: this.programCounter,
                    stack: this.stack.slice(),
                    bindings: this.bindings.slice()
                });
                let newBinding = {};
                for (let i = argCount - 1; i >= 0; i--) {
                    if (this.stack.length > 0) {
                        newBinding[i] = this.stack.pop();
                    } else {
                        console.warn(`Advertencia: No hay suficientes argumentos en la pila para la función ${closure.functionName}`);
                        break;
                    }
                }
                this.bindings.unshift(newBinding);
                this.code = closure.body;
                this.programCounter = 0;
                const functionBody = this.code.join('\n');
                this.logger.log(chalk.magenta(`Ejecutando función ${closure.functionName} con cuerpo:\n${functionBody}`));
                this.executeAntlrParsing(functionBody);
            } else {
                throw new Error('Closure or closure body is undefined');
            }
        },

        RET: () => { // Return
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
            this.logger.debug("Pila tras RET:", this.stack);
        },

        // Tipos de datos ---------------------------------------------------------------------------------------------------

        CST: (instruction) => { //DE ESTA TENGO MUCHAS DUDAS Y SE DEBE DE REVISAR...
            // Tomamos el valor que está en args y lo intentamos analizar
            const value = instruction.args[0];

            let parsedValue;
            // Comprobar si el valor es un número (no en forma de string)
            if (!isNaN(value) && !isNaN(parseFloat(value))) {
                parsedValue = parseFloat(value); // Convertir directamente a número
            } else {
                try {
                    // Intentar parsear el valor como JSON
                    parsedValue = JSON.parse(value);
                } catch (e) {
                    // Si no se puede parsear, asumimos que es un string literal
                    parsedValue = value;
                }
            }

            // Agregar el valor a la pila
            this.stack.push(parsedValue);
        },


        INO: (instruction) => { // Instance Of
            const argumento = instruction.args[0];

            if (!['number', 'list', 'string'].includes(argumento)) {
                throw new Error('Argumento en instrucción INO no válido');
            }

            const checkType = (arg, val) => {
                const typeChecks = {
                    number: () => typeof val === 'number' && !isNaN(val),   // Chequeo estricto para números
                    list: () => Array.isArray(val),
                    string: () => typeof val === 'string',                  // Chequeo estricto para cadenas
                };
                return typeChecks[arg] ? typeChecks[arg]() : false;
            };

            const value = this.stack.pop();

            // Manejo de cadenas vacías
            const result = (value === '' && argumento === 'string')
                ? false
                : checkType(argumento, value);
            this.stack.push(result);
        },

        // IO Console ------------------------------------------------------------------------------------

        PRN: () => { // Print
            const value = this.stack.pop();
            const output = Array.isArray(value) ? JSON.stringify(value) : value;
            console.log(chalk.cyan(output));
        },

        INP: async function () { // Input
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            const userInput = await new Promise((resolve) => rl.question('', resolve));
            rl.close();

            this.stack.push(userInput); // Almacenar el valor en la pila
        },

    };
}

export default VM;