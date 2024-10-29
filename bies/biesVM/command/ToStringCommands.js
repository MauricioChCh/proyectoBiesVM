import Command from './Command.js';

/**
 * Clase que representa comandos de conversión a cadena.
 * @extends Command
 */
class ToStringCommands extends Command {
    /**
     * Crea una instancia de ToStringCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['TOS']);
    }

    /**
     * Convierte el valor en la cima de la pila a una cadena.
     * @type {Function}
     */
    TOS = this.performUnaryOperation(a => String(a));
}

export default ToStringCommands;