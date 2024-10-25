import Command from './Command.js';

/**
 * Clase que representa comandos lógicos unarios.
 * @extends Command
 */
class UnaryLogicCommands extends Command {
    /**
     * Crea una instancia de UnaryLogicCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['NOT']);
    }

    /**
     * Realiza una operación unaria de negación lógica en el elemento superior de la pila.
     * @type {Function}
     */
    NOT = this.performUnaryOperation(a => !a);
}

export default UnaryLogicCommands;