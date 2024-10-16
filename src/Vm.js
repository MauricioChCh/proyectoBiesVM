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

            this.logger.debug(chalk.red(`Stack post LDV  `,  this.stack))

        },

        BLD: (instruction) => {
            const [bindLayerIndex, bindVariableIndex] = instruction.args;
            const value = this.getCurrentLayer(bindLayerIndex)[bindVariableIndex];
            this.stack.push(value);
            this.logger.debug(chalk.red(`Loaded value: ${value}`));

            this.logger.debug(chalk.red(`Stack post BLD  `,  this.stack))
        },

        LIN: () => {
            const listValues = "[" + this.stack.join(", ") + "]";
            this.stack = [listValues];
        },

        BST: (instruction) => {
            const [layerIndex, variableIndex] = instruction.args;
            const value = this.stack.pop();
            this.getCurrentLayer(layerIndex)[variableIndex] = value;
            this.logger.debug(chalk.red(`Stored value: ${value}`));
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
            const k = Number(this.stack.pop());
            const str = this.stack.pop();
            if (typeof str === 'string' && k >= 0 && k < str.length) {
                this.logger.debug(chalk.magenta("STACK en strk str[k]"), str[k]);
                this.stack.push(str[k]===''?'aaa':str[k]);
            } else {
               // this.stack.push(''); // Pushes an empty string instead of throwing an error
            }
            this.logger.debug("Pila tras SRK:", this.stack);
        },


        SRK: () => {  //Tomar el resto de la hilera
            this.logger.debug("Pila pre SRK:", this.stack);
            const k = Number(this.stack.pop());
            const str = this.stack.pop();
            if (typeof str === 'string' && k >= 0 && k <= str.length) {
                console.log('ESTE HOP: ',str.slice(k))
                this.stack.push(str.slice(k));
            } else {
                //this.stack.push(''); // Pushes an empty string instead of throwing an error
            }
            this.logger.debug("Pila tras SRK:", this.stack);
        },

        //String Operations-----------------------------------------------------------------------------------------
        SNT: () => { // String Null test
            const str = this.stack.pop();
            this.stack.push(str === "" ? 1 : 0);
        },
        
        CAT: () => {
            const b = this.stack.pop();
            const a = this.stack.pop();
            this.stack.push(a + b);
        },
        TOS: () => {
            const value = this.stack.pop();
            this.stack.push(String(value));
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
        APP: (instruction) => {
            this.logger.debug("Pila tras APP:", this.stack); //quitar
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
                this.logger.log(chalk.magenta(`Ejecutando función ${closure.functionName} con cuerpo:) + \n${functionBody}`));
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
            const print = this.stack.pop();
                print===undefined? "": console.log(chalk.yellow(print));
            //console.log(chalk.yellow(${this.stack.pop()}));
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
        
        RET: () => {
            let returnValue = this.stack.pop();
            let previousContext = this.contextStack.pop();
            if (previousContext) {
                this.logger.log(chalk.cyan('Valor de retorno:', returnValue));
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

        INI: (instruction) => {
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

        //Amiente y stack
        SWP: () => {
            const a = this.stack.pop();
            const b = this.stack.pop();
            this.stack.push(a);
            this.stack.push(b);
        },
        POP:() => {
            this.stack.pop();
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