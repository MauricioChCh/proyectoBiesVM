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
     * @param {Object} instruction - La instrucción que contiene el nombre de la función, el número de parámetros y el contexto padre.
     * @throws {Error} Si la función no está definida.
     */
    LDF(instruction) {
        const [functionName, paramCount, parentContext] = instruction.args;
        const functionData = this.vm.functions[functionName];
        if (!functionData) {
            throw new Error(`Function ${functionName} not defined`);
        }
        const paramCountValue = paramCount !== undefined ? parseInt(paramCount) : functionData.args || 0;
        const parentContextValue = parentContext !== undefined ? parentContext : functionData.parent || '$0';
        const closure = {
            functionName: functionName,
            body: functionData.body,
            paramCount: paramCountValue,
            parentContext: parentContextValue,
        };
        this.vm.stack.push(closure);
    }

    /**
     * Verifica si el cuerpo de la función es un array.
     * @param {Array} code - El código a verificar.
     * @throws {Error} Si el código no es un array.
     */
    verifyFunctionBody(code) {
        if (!Array.isArray(code)) {
            throw new Error('El cuerpo de la función no es un array');
        }
    }

    /**
     * Aplica una función con los argumentos proporcionados.
     * @param {Object} instruction - La instrucción que contiene el número de argumentos.
     * @throws {Error} Si el closure o el cuerpo del closure no están definidos.
     */
    APP(instruction) {
        let closure = this.vm.stack.pop();
        const argCount = instruction.args && instruction.args.length > 0 ? parseInt(instruction.args[0]) : closure.paramCount;
        if (closure && closure.body) {
            this.vm.contextStack.push({
                code: this.vm.code,
                programCounter: this.vm.programCounter,
                stack: this.vm.stack.slice(),
                bindings: this.vm.bindings.slice(),
                parentContext: closure.parentContext
            });
            let newBinding = {};
            for (let i = argCount - 1; i >= 0; i--) {
                if (this.vm.stack.length > 0) {
                    newBinding[i] = this.vm.stack.pop();
                } else {
                    console.warn(`Advertencia: No hay suficientes argumentos en la pila para la $FUN ${closure.functionName}`);
                    break;
                }
            }
            this.vm.bindings.unshift(newBinding);
            this.vm.code = closure.body;
            this.vm.programCounter = 0;
            this.verifyFunctionBody(this.vm.code);
            const functionBody = this.vm.code.join('\n');
            this.vm.logger.log(chalk.magenta(`Ejecutando -> $FUN ${closure.functionName} ARGS:${closure.paramCount} PARENT:${closure.parentContext}\n${functionBody}`));
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