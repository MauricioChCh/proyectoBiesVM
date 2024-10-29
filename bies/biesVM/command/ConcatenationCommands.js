import Command from './Command.js';

/**
 * Clase que representa comandos de concatenación.
 * @extends Command
 */
class ConcatenationCommands extends Command {
    /**
     * Crea una instancia de ConcatenationCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['CAT']);
    }

    /**
     * Concatena dos valores.
     * @type {Function}
     */
    CAT = this.performBinaryOperation((a, b) => a + b);
}

export default ConcatenationCommands;