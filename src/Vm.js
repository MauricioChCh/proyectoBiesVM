import biesVMLexer from '../output/biesLanguageLexer.js';
import biesVMParser from '../output/biesLanguageParser.js';
import Visitor from './Visitor.js';
import antlr4 from 'antlr4';
import chalk from 'chalk';

class VM {
    constructor(logger = { log: () => {} }) {
        this.stack = [];
        this.bindings = [{}];
        this.contextStack = [];
        this.code = [];
        this.environment = [];
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

    run(code) {
        this.code = code;
        while (this.programCounter < this.code.length) {
            const instruction = this.code[this.programCounter];
            this.programCounter++;
            this.executeInstruction(instruction);
        }
    }

    executeInstruction(instruction) {
        this.logger.log(`Visitando instrucción: ${instruction.type} ${instruction.args.join(' ')}`);
        const handler = this.instructionHandlers[instruction.type];
        if (handler) {
            handler.call(this, instruction);
        } else {
            throw new Error(`Instrucción desconocida: ${instruction.type}`);
        }
    }

    instructionHandlers = {
        // Carga y almacenamiento de valores
        LDV: (instruction) => {
            const valueArgument = instruction.args.join(' ');
            this.stack.push(valueArgument.replace(/^"(.*)"$/, '$1'));
        },

        BLD: (instruction) => {
            const [bindLayerIndex, bindVariableIndex] = instruction.args;
            this.stack.push(this.getCurrentLayer(bindLayerIndex)[bindVariableIndex]);
        },

        LIN: () => {
            const listValues = "[" + this.stack.join(", ") + "]";
            this.stack = [listValues];
        },

        BST: (instruction) => {
            const [layerIndex, variableIndex] = instruction.args;
            this.getCurrentLayer(layerIndex)[variableIndex] = this.stack.pop();
        },

        // Operaciones aritméticas
        ADD: () => {
            this.stack.push(Number(this.stack.pop()) + Number(this.stack.pop()));
        },

        PLUS: (instruction) => {
            const currentLayer = this.bindings[0]; // Accedemos directamente a la capa 0 del entorno de bindings
            let currentValue = currentLayer[0];    // Accedemos directamente al índice 0
            if (currentValue == null) {  // Usamos == para cubrir undefined y null
                currentValue = 1;   // Asignamos el valor 1
            }
            currentValue =+ currentValue + +instruction.args[0];  // Conversión y suma en una línea
            currentLayer[0] = this.stack[this.stack.length - 1] = currentValue;  // Actualizamos bindings y stack
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

        POW: () => {
            const exponent = this.stack.pop();
            const base = this.stack.pop();
            this.stack.push(Math.pow(base, exponent));
        },

        SQRT: () => {
            const value = this.stack.pop();
            if (value < 0) {
                throw new Error('Error: La raíz cuadrada de un número negativo no es un número real');
            }
            this.stack.push(Math.sqrt(value));
        },

        // Comparaciones
        EQ: () => {
            this.stack.push(this.stack.pop() === this.stack.pop());
        },

        GT: () => {
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();
            this.stack.push(Number(valueB) > Number(valueA));
        },

        GTE: () => {
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();
            this.stack.push(Number(valueB) >= Number(valueA));
        },

        LT: () => {
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();
            this.stack.push(Number(valueB) < Number(valueA));
        },

        LTE: () => {
            const valueA = this.stack.pop();
            const valueB = this.stack.pop();
            this.stack.push(Number(valueB) <= Number(valueA));
        },

        // Operaciones de listas e hileras

        STK: () => {
            const index = this.stack.pop();       // Obtiene el índice de la pila
            const str = this.stack.pop();       // Obtiene la cadena de la pila

            this.stack.push(str.charAt(index)); // Extrae el carácter en la posición N y lo empuja a la pila
        },

        SRK: (instruction) => {  //Tomar el resto de la hilera
            const [stackLayerIndex, stackVariableIndex] = instruction.args;
            const value = this.getCurrentLayer(stackLayerIndex)[stackVariableIndex];
            this.stack.push(value);
        },

        // Control de flujo
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
                environment: this.environment.slice()
            };
            this.stack.push(closure);
        },

        APP: (instruction) => {
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
                this.logger.log(chalk.magenta(`Ejecutando función ${closure.functionName} con cuerpo:`) + `\n${functionBody}`);
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

        BR: (instruction) => {
            const branchOffset = Number(instruction.args[0]) - 1;
            this.programCounter += branchOffset;
        },

        BT: (instruction) => {
            if (this.stack.pop()) { // Verifica si el valor es verdadero
                const branchOffset = Number(instruction.args[0]) - 2;
                this.programCounter += branchOffset;
            }
        },

        BF: (instruction) => {
            if (!this.stack.pop()) { // Verifica si el valor es falso
                const branchOffset = Number(instruction.args[0]) -2;
                this.programCounter += branchOffset;
            }
        },

        RET: () => {
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
        },

        INI: (instruction) => {
            const mainFunctionName = instruction.args[0];
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
        },

        // Salida y finalización
        PRN: () => {
            const printValue = this.stack.pop();
            if (printValue !== undefined) {
                console.log(chalk.yellow(`${printValue}`));
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