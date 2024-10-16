import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
import Visitor from './Visitor.js';
import antlr4 from 'antlr4';
import chalk from 'chalk';
import readline from 'readline';

/**
 * Clase que implementa una máquina virtual para ejecutar instrucciones de un lenguaje de programación.
 * 
 * @class
 * @author Joshua Yarit Amador Lara
 * @author Mauricio Chaves Chaves
 * @author Fabiola Rojas Alvarado
 * @author Eddy Villarreal Muñoz
 * @version 1.0.0
 * @since 2024-10-15
 * @license ISC
 *
 */
class VM {
    /**
     * Crea una nueva instancia de la clase `VM`.
     * @constructor
     * @param {Object} [logger={ log: () => {} }] - Objeto que define el comportamiento del logger. Por defecto, usa un logger vacío.
     */
    constructor(logger = { log: () => {} }) {
        this.stack = [];
        this.bindings = [{}];
        this.contextStack = [];
        this.code = [];
        this.functions = {};
        this.programCounter = 0;
        this.logger = logger;
    }

    /** 
     * Obtiene la capa actual de bindings.
     * @param {number} layerIndex - El índice de la capa de bindings.
     * @returns {Object} La capa de bindings actual.
     */
    getCurrentLayer(layerIndex) {
        if (!this.bindings[layerIndex]) {
            this.bindings[layerIndex] = {};
        }
        return this.bindings[layerIndex];
    }

    /**
     * Ejecuta el código de la máquina virtual.
     * @param {Array} code - Instrucciones a ejecutar.
     */
    async run(code) {
        this.code = code;
        while (this.programCounter < this.code.length) {
            const instruction = this.code[this.programCounter];
            this.programCounter++;
            await this.executeInstruction(instruction);
        }
    }

    /**
     * Ejecuta una instrucción de la máquina virtual.
     * @param {Object} instruction - Instrucción a ejecutar.
     */
    async executeInstruction(instruction) {
        this.logger.log(`Visitando instrucción: ${instruction.type} ${instruction.args ? instruction.args.join(' ') : ''}`);
        const handler = this.instructionHandlers[instruction.type];
        if (handler) {
            await handler.call(this, instruction);
        } else {
            throw new Error(`Instrucción desconocida: ${instruction.type}`);
        }
    }
    
    /**
     * Manejadores de instrucciones.
     * @type {Object}
     */
    instructionHandlers = {
        /**
         * Carga un valor en la pila.
         * @param {Objecrt} instruction - Instrucción LDV.
         */
        LDV: (instruction) => {
            const valueArgument = instruction.args.join(' ');
            let value;

            // Comprobar si es un string entre comillas
            if (valueArgument.startsWith('"') && valueArgument.endsWith('"')) {
                // Es un string, eliminamos las comillas
                value = valueArgument.slice(1, -1);
            } else {
                // Intentamos convertirlo a número
                const numberValue = Number(valueArgument);

                // Si es un número válido (incluyendo enteros, negativos y decimales), lo usamos
                // Si no, lo dejamos como string
                value = !isNaN(numberValue) ? numberValue : valueArgument;
            }
            this.stack.push(value);
        },

        /**
         * Carga un valor de una capa de bindings en la pila.
         * @param {Object} instruction - Instrucción BLD.
         */ 
        BLD: function(instruction) {
            const [bindLayerIndex, bindVariableIndex] = instruction.args.map(Number);
            const value = this.getCurrentLayer(bindLayerIndex)[bindVariableIndex];
            this.logger.log(chalk.blue(`BLD: Cargando valor ${value} desde capa ${bindLayerIndex}, variable ${bindVariableIndex}`));
            this.stack.push(value);
        },

        /**
         * Crea una lista con los valores actuales de la pila.
         * @param {Object} instruction - Instrucción LIN.
         */ 
        LIN: () => {
            const listValues = "[" + this.stack.join(", ") + "]";
            this.stack = [listValues];
        },

        /**
         * Carga un valor de una lista en la pila.
         * @param {Object} instruction - Instrucción BST.
         */
        BST: function(instruction) {
            const [layerIndex, variableIndex] = instruction.args.map(Number);
            const value = this.stack.pop();
            this.getCurrentLayer(layerIndex)[variableIndex] = value;
            this.logger.log(chalk.blue(`BST: Almacenando valor ${value} en capa ${layerIndex}, variable ${variableIndex}`));
        },
        /**
         * 
         * @param {Object} layerIndex 
         * @returns - La capa de bindings del index.
         */
        getCurrentLayer: function(layerIndex) {
            while (this.bindings.length <= layerIndex) {
                this.bindings.push({});
            }
            return this.bindings[layerIndex];
        },

        // Operaciones aritméticas--------------------------------------------------------------------------------
        
        /**
         * Suma los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción ADD.
         */
        ADD: () => {
            this.stack.push(Number(this.stack.pop()) + Number(this.stack.pop()));
        },

        /**
         * Resta los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción SUB.
         */
        SUB: () => {
            const topValue = this.stack.pop();
            const secondValue = this.stack.pop();
            this.stack.push(secondValue - topValue);
        },

        /**
         * Multiplica los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción MUL.
         */ 
        MUL: () => {
            this.stack.push(this.stack.pop() * this.stack.pop());
        },

        /**
         * Divide los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción DIV.
         */ 
        DIV: () => {
            const divisor = this.stack.pop();
            const dividend = this.stack.pop();
            if (divisor === 0) {
                throw new Error('Error: Division by zero');
            }
            this.stack.push(parseFloat(dividend) / parseFloat(divisor));
        },

        /**
         * Calcula el módulo de los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción MOD.
         */ 
        NEG: () => {
            this.stack.push(-this.stack.pop());
        },

        // Lógica Binaria-----------------------------------------------------------------------------------------

        /**
         * Realiza la operación AND entre los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción AND.
         */
        AND: () => {
            this.stack.push(this.stack.pop() && this.stack.pop());
        },

        /**
         * Realiza la operación OR entre los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción OR.
         */ 
        OR: () => {
            this.stack.push(this.stack.pop() || this.stack.pop());
        },

        /**
         * Realiza la operación XOR entre los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción XOR.
         */ 
        XOR: () => {
            this.stack.push((this.stack.pop() !== this.stack.pop()));
        },

        // Lógica Unaria-----------------------------------------------------------------------------------------
        /**
         * Realiza la operación NOT en el valor superior de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción NOT.
         */
        NOT: () => {
            this.stack.push(!this.stack.pop());
        },


        // Comparaciones------------------------------------------------------------------------------------------
        /**
         * Realiza la operación de igualdad entre los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción EQ.
         */
        EQ: () => { // Igualdad
            this.stack.push(this.stack.pop() === this.stack.pop());
        },

        /**
         * Realiza la operación de desigualdad entre los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción NEQ.
         */ 
        GT: () => { // Mayor que
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();
            this.stack.push(Number(valueB) > Number(valueA));
        },

        /**
         * Realiza la operación de mayor o igual que entre los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción GTE.
         */
        GTE: () => {    // Mayor o igual que
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();
            this.stack.push(Number(valueB) >= Number(valueA));
        },

        /**
         * Realiza la operación de menor que entre los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción LT.
         */ 
        LT: () => { // Menor que
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();

            this.stack.push(Number(valueB) < Number(valueA));
        },

        /**
         * Realiza la operación de menor o igual que entre los dos valores superiores de la pila y empuja el resultado.
         * @param {Object} instruction - Instrucción LTE.
         */
        LTE: () => {    // Menor o igual que
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();

            this.stack.push(Number(valueB) <= Number(valueA));
        },

        //Casting------------------------------------------------------------------------------------------

        // Type Of
        
        /** 
         * Realiza la operación de tipo de un valor y empuja el resultado.
         * @param {Object} instruction - Instrucción INO.
         * @throws {Error} Lanza un error si el argumento no es un tipo válido.
        */
        INO: (instruction) => {
            const argumento = instruction.args[0].replace(/^"(.*)"$/, '$1');

            if (!['number', 'list', 'string'].includes(argumento)) {
                throw new Error('Argumento en instrucción INO no válido');
            }

            const checkType = (arg, val) => {
                const typeChecks = {
                    number: () => !isNaN(Number(val)),  // Modificado para convertir a número
                    list: () => Array.isArray(val),
                    string: () => typeof val === 'string',
                };
                return typeChecks[arg] ? typeChecks[arg]() : false;
            };

            const value = this.stack.pop();

            // Manejo de cadenas vacías
            const result = (value === '' && argumento === 'string') ? false : checkType(argumento, value);
            this.stack.push(result);
        },


        // Operaciones de listas e hileras-----------------------------------------------------------------------
        /** 
         * Extrae un caracter de una hilera y lo empuja a la pila.
         * @param {Object} instruction - Instrucción LST.
         */
        STK: function() {
            const index = this.stack.pop();  // Obtiene el índice de la pila
            const str = this.stack.pop();    // Obtiene la cadena de la pila

            // Validar que index sea un número y str sea una cadena
            if (typeof Number(index) === 'number' && Number.isInteger(Number(index)) && typeof str === 'string') {
                this.stack.push(str.charAt(Number(index))); // Extrae el carácter en la posición N y lo empuja a la pila
            }
        },

        /**
         * Toma el resto de la cadena y la empuja a la pila.
         * @param {Object} instruction - Instrucción LST.
         */ 
        SRK: (instruction) => {  //Tomar el resto de la hilera
            const [stackLayerIndex, stackVariableIndex] = instruction.args;
            const value = this.getCurrentLayer(stackLayerIndex)[stackVariableIndex];
            this.stack.push(value);
        },

        //String Operations-----------------------------------------------------------------------------------------
        /**
         * Empuja 1 si la cadena no está vacía, 0 en caso contrario.
         * @param {Object} instruction - Instrucción SNT.
         */ 
        SNT: () => {
            const str = this.stack.pop();
            this.stack.push(str === "" ? 0 : 1);
        },
        
        /**
         * Concatena dos cadenas y empuja el resultado.
         * @param {Object} instruction - Instrucción CAT.
         */ 
        CAT: () => {
            const b = this.stack.pop();
            const a = this.stack.pop();
            this.stack.push(a + b);
        },

        /**
         * 
         * @param {Object} instruction - Instrucción TOS.
         */ 
        TOS:()=>{

        },


        // Control de flujo----------------------------------------------------------------------------------------
        /**
         * Carga una función en la pila para su ejecución posterior.
         * @param {Object} instruction - Instrucción LDF.
         * @throws {Error} Lanza un error si la función no está definida.
         */
        LDF: (instruction) => {
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

        // Funciones
        /**
         * Llama a una función previamente cargada en la pila.
         * @param {Object} instruction - Instrucción APP.
         * @throws {Error} Lanza un error si la función no está definida.
         */
        APP: function(instruction) {
            let closure = this.stack.pop();
            this.logger.log(chalk.yellow('Closure:', JSON.stringify(closure)));
            const argCount = instruction.args && instruction.args.length > 0 ? parseInt(instruction.args[0]) : 1;
            
            if (closure && closure.body) {
                // Guardar el contexto actual
                this.contextStack.push({
                    code: this.code,
                    programCounter: this.programCounter,
                    bindings: this.bindings.slice()
                });
        
                // Crear un nuevo contexto para la función
                let newBinding = {};
                let args = [];
                for (let i = 0; i < argCount; i++) {
                    if (this.stack.length > 0) {
                        args.unshift(this.stack.pop());
                    } else {
                        console.warn(`Advertencia: No hay suficientes argumentos en la pila para la función ${closure.functionName}`);
                        break;
                    }
                }
        
                // Asignar los argumentos al nuevo binding
                for (let i = 0; i < args.length; i++) {
                    newBinding[i] = args[i];
                }
        
                // Añadir el nuevo binding al principio de la lista de bindings
                this.bindings.unshift(newBinding);
        
                // Configurar el nuevo contexto de ejecución
                this.code = closure.body;
                this.programCounter = 0;
        
                const functionBody = this.code.join('\n');
                this.logger.log(chalk.magenta(`Ejecutando función ${closure.functionName} con cuerpo:`) + `\n${functionBody}`);
                
                // Ejecutar la función
                const chars = new antlr4.InputStream(functionBody);
                const lexer = new biesVMLexer(chars);
                const tokens = new antlr4.CommonTokenStream(lexer);
                const parser = new biesVMParser(tokens);
                parser.buildParseTrees = true;
                const tree = parser.program();
                const visitor = new Visitor(this.logger);
                visitor.vm = this;
                visitor.visit(tree);
            } else {
                throw new Error('Closure or closure body is undefined');
            }
        },

        // Saltos/bifurcaciones

        /**
         * Salta a un desplazamiento específico en el conjunto de instrucciones.
         * @param {Object} instruction - Instrucción BR.
         */ 
        BR: (instruction) => {
            const branchOffset = Number(instruction.args[0]) - 1;
            this.programCounter += branchOffset;
        },

        /**
         * Salta si el valor superior de la es verdadero.
         * @param {Object} instruction - Instrucción BT.
         */ 
        BT: (instruction) => {
            if (this.stack.pop()) { // Verifica si el valor es verdadero
                const branchOffset = Number(instruction.args[0]) - 1;
                this.programCounter += branchOffset;
            }
        },

        /**
         * Salta si el valor superior de la pila es falso.
         * @param {Object} instruction - Instrucción BF.
         */ 
        BF: (instruction) => {
            if (!this.stack.pop()) { // Verifica si el valor es falso
                const branchOffset = Number(instruction.args[0]) -1;
                this.programCounter += branchOffset;
            }
        },

        // Salida, Entrada y finalización-------------------------------------------------------------------------------------
        /**
         * Imprime el valor superior de la pila.
         * @param {Object} instruction - Instrucción PRN.
         */
        PRN: () => {
            // const print = this.stack.pop();
            //     print===undefined? "": console.log(chalk.yellow(print));
            console.log(chalk.yellow(`${this.stack.pop()}`));
        },
        
        /**
         * Solicita la entrada de un valor y lo almacena en la pila.
         * @param {Object} instruction - Instrucción INP.
         * @returns {Promise} Una promesa que se resuelve con el valor ingresado por el usuario.
         */ 
        INP: async function() {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            
            const userInput = await new Promise((resolve) => rl.question('Ingrese un valor: ', resolve));
            rl.close();
            
            // Almacenar el valor en la pila
            this.stack.push(userInput);
        },
        
        /**
         * Retorna de una función y empuja el valor de retorno a la pila.
         * @param {Object} instruction - Instrucción RET.
         */ 
        RET: function() {
            let returnValue = this.stack.pop();
            this.logger.log(chalk.cyan('Valor de retorno:', returnValue));
        
            let previousContext = this.contextStack.pop();
            if (previousContext) {
                this.code = previousContext.code;
                this.bindings = previousContext.bindings;
                this.programCounter = previousContext.programCounter;
                
                // Empujar el valor de retorno a la pila del contexto anterior
                this.stack.push(returnValue);
            }
        },

        /**
         * Ejecuta la función de entrada `$0`.
         * @param {Object} instruction - Instrucción INI.
         * @throws {Error} Lanza un error si la función de entrada `$0` no está definida.
         */ 
        INI: async function () {
            const mainFunction = this.functions[`$0`];
            if (!mainFunction) {
                throw new Error("Función de entrada `$0` no encontrada.");
            }
        
            this.logger.log(chalk.blue("Ejecutando la función de entrada `$0`..."));
            
            // Ejecutar directamente las instrucciones de la función principal
            for (const instruction of mainFunction) {
                const parts = instruction.split(/\s+/);
                const type = parts[0];
                const args = parts.slice(1);
                await this.executeInstruction({ type, args });
            }
        },
        
        /**
         * Limpia la pila, las capas de bindings y el contexto de ejecución.
         * @param {Object} instruction - Instrucción HLT.
         */
        HLT: () => {
            this.code = [];
            this.stack = [];
            this.bindings = [];
            this.contextStack = [];
        }
    };
}

export default VM;
