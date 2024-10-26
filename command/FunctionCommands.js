import Command from './Command.js';
import chalk from 'chalk';

/**
 * Clase que representa comandos de funciones.
 * @extends Command
 */
class FunctionCommands extends Command {
    /**
     * Crea una instancia de FunctionCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['LDF', 'APP', 'RET']);
    }

    /**
     * Define una función y la coloca en la pila.
     * @param {Object} instruction - La instrucción que contiene el nombre de la función y el número de parámetros.
     * @throws {Error} Si la función no está definida.
     */
    LDF(instruction) {
        const [functionName, paramCount] = instruction.args;
        const functionBody = this.vm.functions[functionName];
        if (!functionBody) {
            throw new Error(`Function ${functionName} not defined`);
        }
        const paramCountValue = paramCount !== undefined ? paramCount : this.vm.functions[functionName].paramCount || 1;
        const closure = {
            functionName: functionName,
            body: functionBody,
            paramCount: paramCountValue,
        };
        this.vm.stack.push(closure);
    }

    /**
     * Aplica una función con los argumentos proporcionados.
     * @param {Object} instruction - La instrucción que contiene el número de argumentos.
     * @throws {Error} Si el closure o el cuerpo del closure no están definidos.
     */
    APP(instruction) {
        let closure = this.vm.stack.pop();
        const argCount = instruction.args && instruction.args.length > 0 ? parseInt(instruction.args[0]) : 1;
        if (closure && closure.body) {
            this.vm.contextStack.push({
                code: this.vm.code,
                programCounter: this.vm.programCounter,
                stack: this.vm.stack.slice(),
                bindings: this.vm.bindings.slice()
            });
            let newBinding = {};
            for (let i = argCount - 1; i >= 0; i--) {
                if (this.vm.stack.length > 0) {
                    newBinding[i] = this.vm.stack.pop();
                } else {
                    console.warn(`Advertencia: No hay suficientes argumentos en la pila para la función ${closure.functionName}`);
                    break;
                }
            }
            this.vm.bindings.unshift(newBinding);
            this.vm.code = closure.body;
            this.vm.programCounter = 0;
            const functionBody = this.vm.code.join('\n');
            this.vm.logger.log(chalk.magenta(`Ejecutando función ${closure.functionName} con cuerpo:\n${functionBody}`));
            this.vm.executeAntlrParsing(functionBody);
        } else {
            throw new Error('Closure or closure body is undefined');
        }
    }

    /**
     * Retorna de una función, restaurando el contexto anterior.
     */
    RET() {
        let returnValue = this.vm.stack.pop();
        let previousContext = this.vm.contextStack.pop();
        if (previousContext) {
            this.vm.code = previousContext.code;
            this.vm.stack = previousContext.stack;
            this.vm.bindings = previousContext.bindings;
            this.vm.programCounter = previousContext.programCounter;
            if (typeof returnValue !== 'undefined') {
                this.vm.stack.push(returnValue);
            }
        }
    }
}

export default FunctionCommands;