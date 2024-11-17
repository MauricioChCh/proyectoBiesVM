import Command from './Command.js';

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
     * Inicializa la máquina virtual con la función principal.
     * @param {Object} instruction - La instrucción que contiene el nombre de la función principal.
     * @throws {Error} Si la función principal no está definida.
     */
    INI() {
        const mainFunctionName = '$0';
        const mainFunctionBody = this.vm.functions[mainFunctionName];

        if (!mainFunctionBody) {
            this.vm.logger.log(`Error: Main function ${mainFunctionName} not defined`);
            throw new Error(`Main function ${mainFunctionName} not defined`);
        }

        this.vm.code = mainFunctionBody;

        this.vm.stack = [];
        this.vm.bindings = [{}];
        this.vm.contextStack = [];
        this.vm.programCounter = 0;
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