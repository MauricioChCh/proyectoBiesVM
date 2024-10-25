import Command from './Command.js';

/**
 * Clase que representa comandos de bifurcación.
 * @extends Command
 */
class BranchCommands extends Command {
    /**
     * Crea una instancia de BranchCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['NOP', 'BR', 'BT', 'BF']);
    }

    /**
     * No realiza ninguna operación.
     */
    NOP() {
        // No operation
    }

    /**
     * Realiza una bifurcación incondicional.
     * @param {Object} instruction - La instrucción que contiene el offset de bifurcación.
     */
    BR(instruction) {
        const branchOffset = Number(instruction.args[0]) - 1;
        this.vm.programCounter += branchOffset;
    }

    /**
     * Realiza una bifurcación si el valor en la cima de la pila es verdadero.
     * @param {Object} instruction - La instrucción que contiene el offset de bifurcación.
     */
    BT(instruction) {
        if (this.vm.stack.pop()) {
            const branchOffset = Number(instruction.args[0]) - 1;
            this.vm.programCounter += branchOffset;
        }
    }

    /**
     * Realiza una bifurcación si el valor en la cima de la pila es falso.
     * @param {Object} instruction - La instrucción que contiene el offset de bifurcación.
     */
    BF(instruction) {
        if (!this.vm.stack.pop()) {
            const branchOffset = Number(instruction.args[0]) - 1;
            this.vm.programCounter += branchOffset;
        }
    }
}

export default BranchCommands;