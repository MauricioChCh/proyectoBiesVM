import Command from './Command.js';
import chalk from 'chalk';

/**
 * Clase que representa comandos de inicialización.
 * @extends Command
 */
class InitCommands extends Command {
    /**
     * Crea una instancia de InitCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['INI', 'HLT']);
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
     * Inicializa la máquina virtual con la función principal.
     * @param {Object} instruction - La instrucción que contiene el nombre de la función principal.
     * @throws {Error} Si la función principal no está definida.
     */
    INI() {
        const mainFunctionName = '$0';
        const mainFunction = this.vm.functions[mainFunctionName];

        if (!mainFunction) {
            this.vm.logger.log(`Error: Main function ${mainFunctionName} not defined`);
            throw new Error(`Main function ${mainFunctionName} not defined`);
        }

        this.vm.code = mainFunction.body;

        // Cargar y aplicar la función $0
        const closure = {
            functionName: mainFunctionName,
            body: mainFunction.body,
            paramCount: 0,
            parentContext: '$0',
        };
        this.vm.stack.push(closure);

        // Aplicar la función $0
        this.vm.contextStack.push({
            code: this.vm.code,
            programCounter: this.vm.programCounter,
            stack: this.vm.stack.slice(),
            bindings: this.vm.bindings.slice(),
            parentContext: closure.parentContext
        });
        this.vm.bindings.unshift({});
        this.vm.code = closure.body;
        this.vm.programCounter = 0;
        this.verifyFunctionBody(this.vm.code);
        const functionBody = this.vm.code.join('\n');
        this.vm.logger.log(chalk.green(`Inicializando\n`));
        this.vm.logger.log(chalk.magenta(`Ejecutando -> $FUN ${closure.functionName} ARGS:${closure.paramCount} PARENT:${closure.parentContext}\n${functionBody}`));
        this.vm.executeAntlrParsing(functionBody);

        this.vm.stack = []; // Limpiar la pila
        this.vm.bindings = [{}];    // Limpiar las asignaciones
        this.vm.contextStack = [];  // Limpiar la pila de contexto
        this.vm.programCounter = 0; // Reiniciar el contador de programa
    }

    /**
     * Detiene la ejecución de la máquina virtual y limpia su estado.
     */
    HLT() {
        this.vm.code = [];
        this.vm.stack = [];
        this.vm.bindings = [];
        this.vm.contextStack = [];
    }
}

export default InitCommands;