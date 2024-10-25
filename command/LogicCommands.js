import Command from './Command.js';

/**
 * Clase que representa comandos lógicos.
 * @extends Command
 */
class LogicCommands extends Command {
    /**
     * Crea una instancia de LogicCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['AND', 'OR', 'XOR']);
    }

    /**
     * Realiza una operación lógica AND entre dos valores.
     * @type {Function}
     */
    AND = this.performBinaryOperation((a, b) => a && b);

    /**
     * Realiza una operación lógica OR entre dos valores.
     * @type {Function}
     */
    OR = this.performBinaryOperation((a, b) => a || b);

    /**
     * Realiza una operación lógica XOR entre dos valores.
     * @type {Function}
     */
    XOR = this.performBinaryOperation((a, b) => a !== b);
}

export default LogicCommands;