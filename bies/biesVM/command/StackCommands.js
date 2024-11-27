import Command from './Command.js';

/**
 * Clase que representa comandos de pila.
 * @extends Command
 */
class StackCommands extends Command {
    /**
     * Crea una instancia de StackCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['POP', 'SWP', 'LDV', 'BLD', 'BST']);
    }

    /**
     * Elimina el elemento superior de la pila.
     */
    POP() {
        this.vm.stack.pop();
    }

    /**
     * Intercambia los dos elementos superiores de la pila.
     */
    SWP() {
        this.vm.stack.push(this.vm.stack.pop());
        this.vm.stack.push(this.vm.stack.pop());
    }

    /**
     * Carga un valor en la pila.
     * @param {Object} instruction - La instrucción que contiene el valor a cargar.
     */
    LDV(instruction) {
        const value = instruction.args.join(' ');
        let parsedValue;
        try {
            parsedValue = JSON.parse(value);
        } catch (e) {
            parsedValue = value;
        }
        this.vm.stack.push(
            Array.isArray(parsedValue)
                ? parsedValue
                : value === 'none'
                    ? null
                    : value.startsWith('"') && value.endsWith('"') && value.length > 2
                        ? String(value.slice(1, -1))
                        : value === '""'
                            ? undefined
                            : !isNaN(Number(value))
                                ? Number(value)
                                : undefined
        );
    }
    /**
     * Carga un valor desde una capa de bindings en la pila.
     * @param {Object} instruction - La instrucción que contiene el índice de la capa y el índice de la variable.
     */
    BLD(instruction) {
        const [bindLayerIndex, bindVariableIndex] = instruction.args;
        this.vm.stack.push(this.vm.getCurrentLayer(bindLayerIndex)[bindVariableIndex]);
        this.vm.logger.debug(`Loaded value:          ${this.vm.getCurrentLayer(bindLayerIndex)[bindVariableIndex]}`);
    }

    /**
     * Almacena un valor en una capa de bindings.
     * @param {Object} instruction - La instrucción que contiene el índice de la capa y el índice de la variable.
     */
    BST(instruction) {
        const [layerIndex, variableIndex] = instruction.args;
        const value = this.vm.stack.pop();
        for(let i = 0; i < parseInt(layerIndex); i++) {
            if(!(this.vm.bindings.length === parseInt(layerIndex) + 1)) {
                this.vm.bindings = [...this.vm.bindings, {}];
            }
        }
        this.vm.getCurrentLayer(layerIndex)[variableIndex] = value;

        this.vm.logger.debug(`Stored value:          ${value}`);
    }

}

export default StackCommands;