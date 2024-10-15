import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
import Visitor from './Visitor.js';
import antlr4 from 'antlr4';
import chalk from 'chalk';
import readline from 'readline';


class VM {
    constructor(logger = { log: () => {} }) {
        this.stack = [];
        this.bindings = [{}];
        this.contextStack = [];
        this.code = [];
        this.functions = {};
        this.programCounter = 0;
        this.logger = logger;

        
    }

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
    

    instructionHandlers = {
        // Carga y almacenamiento de valores----------------------------------------------------------------------
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

        BLD: function(instruction) {
            const [bindLayerIndex, bindVariableIndex] = instruction.args.map(Number);
            const value = this.getCurrentLayer(bindLayerIndex)[bindVariableIndex];
            this.logger.log(chalk.blue(`BLD: Cargando valor ${value} desde capa ${bindLayerIndex}, variable ${bindVariableIndex}`));
            this.stack.push(value);
        },
        LIN: () => {
            const listValues = "[" + this.stack.join(", ") + "]";
            this.stack = [listValues];
        },

        BST: function(instruction) {
            const [layerIndex, variableIndex] = instruction.args.map(Number);
            const value = this.stack.pop();
            this.getCurrentLayer(layerIndex)[variableIndex] = value;
            this.logger.log(chalk.blue(`BST: Almacenando valor ${value} en capa ${layerIndex}, variable ${variableIndex}`));
        },
        getCurrentLayer: function(layerIndex) {
            while (this.bindings.length <= layerIndex) {
                this.bindings.push({});
            }
            return this.bindings[layerIndex];
        },

        // Operaciones aritméticas--------------------------------------------------------------------------------
        ADD: () => {
            this.stack.push(Number(this.stack.pop()) + Number(this.stack.pop()));
        },

        SUB: () => {
            const topValue = this.stack.pop();
            const secondValue = this.stack.pop();
            this.stack.push(secondValue - topValue);
        },

        MUL: () => {
            this.stack.push(this.stack.pop() * this.stack.pop());
        },

        DIV: () => {
            const divisor = this.stack.pop();
            const dividend = this.stack.pop();
            if (divisor === 0) {
                throw new Error('Error: Division by zero');
            }
            this.stack.push(parseFloat(dividend) / parseFloat(divisor));
        },

        NEG: () => {
            this.stack.push(-this.stack.pop());
        },

        // Lógica Binaria-----------------------------------------------------------------------------------------

        AND: () => {
            this.stack.push(this.stack.pop() && this.stack.pop());
        },

        OR: () => {
            this.stack.push(this.stack.pop() || this.stack.pop());
        },

        XOR: () => {
            this.stack.push((this.stack.pop() !== this.stack.pop()));
        },

        // Lógica Unaria-----------------------------------------------------------------------------------------
        NOT: () => {
            this.stack.push(!this.stack.pop());
        },


        // Comparaciones------------------------------------------------------------------------------------------
        EQ: () => { // Igualdad
            this.stack.push(this.stack.pop() === this.stack.pop());
        },

        GT: () => { // Mayor que
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();
            this.stack.push(Number(valueB) > Number(valueA));
        },

        GTE: () => {    // Mayor o igual que
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();
            this.stack.push(Number(valueB) >= Number(valueA));
        },

        LT: () => { // Menor que
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();

            this.stack.push(Number(valueB) < Number(valueA));
        },

        LTE: () => {    // Menor o igual que
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();

            this.stack.push(Number(valueB) <= Number(valueA));
        },

        //Casting------------------------------------------------------------------------------------------

        // Type Of

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

        STK: function() {
            const index = this.stack.pop();  // Obtiene el índice de la pila
            const str = this.stack.pop();    // Obtiene la cadena de la pila

            // Validar que index sea un número y str sea una cadena
            if (typeof Number(index) === 'number' && Number.isInteger(Number(index)) && typeof str === 'string') {
                this.stack.push(str.charAt(Number(index))); // Extrae el carácter en la posición N y lo empuja a la pila
            }
        },


        SRK: (instruction) => {  //Tomar el resto de la hilera
            const [stackLayerIndex, stackVariableIndex] = instruction.args;
            const value = this.getCurrentLayer(stackLayerIndex)[stackVariableIndex];
            this.stack.push(value);
        },

        //String Operations-----------------------------------------------------------------------------------------
        SNT: () => {
            const str = this.stack.pop();
            this.stack.push(str === "" ? 0 : 1);
        },
        
        CAT: () => {
            const b = this.stack.pop();
            const a = this.stack.pop();
            this.stack.push(a + b);
        },
        TOS:()=>{

        },


        // Control de flujo----------------------------------------------------------------------------------------
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
        APP: async function(instruction) {
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
        
                const functionBody = this.code;
                this.logger.log(chalk.magenta(`Ejecutando función ${closure.functionName} con cuerpo:`) + `\n${functionBody.join('\n')}`);
                
                // Ejecutar la función
                for (const instruction of functionBody) {
                    const parts = instruction.split(/\s+/);
                    const type = parts[0];
                    const args = parts.slice(1);
                    await this.executeInstruction({ type, args });
                    if (type === 'RET') {
                        break;  // Salir del bucle si encontramos una instrucción RET
                    }
                }
            } else {
                throw new Error('Closure or closure body is undefined');
            }
        },

        // Saltos/bifurcaciones
        BR: (instruction) => {
            const branchOffset = Number(instruction.args[0]) - 1;
            this.programCounter += branchOffset;
        },

        BT: (instruction) => {
            if (this.stack.pop()) { // Verifica si el valor es verdadero
                const branchOffset = Number(instruction.args[0]) - 1;
                this.programCounter += branchOffset;
            }
        },

        BF: (instruction) => {
            
            if (!this.stack.pop()) { // Verifica si el valor es falso
                const branchOffset = Number(instruction.args[0]) -1;
                this.programCounter += branchOffset;
                
                
            }
        },

        // Salida, Entrada y finalización-------------------------------------------------------------------------------------
        PRN: () => {
            // const print = this.stack.pop();
            //     print===undefined? "": console.log(chalk.yellow(print));
            console.log(chalk.yellow(`${this.stack.pop()}`));
        },
        
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
        
        RET: async function() {
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
        

        HLT: () => {
            this.code = [];
            this.stack = [];
            this.bindings = [];
            this.contextStack = [];
        }
    };
}

export default VM;
