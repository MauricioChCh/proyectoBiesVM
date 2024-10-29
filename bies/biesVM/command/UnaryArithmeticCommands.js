import Command from './Command.js';

/**
 * Clase que representa comandos aritméticos unarios.
 * @extends Command
 */
class UnaryArithmeticCommands extends Command {
    /**
     * Crea una instancia de UnaryArithmeticCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['NEG', 'SGN']);
    }

    /**
     * Realiza una operación unaria de negación en el elemento superior de la pila.
     * @type {Function}
     */
    NEG = this.performUnaryOperation(a => -a);

    /**
     * Determina el signo del valor en la cima de la pila.
     * Si el valor es mayor que 0, coloca 1 en la pila; de lo contrario, coloca 0.
     */
    SGN() {
        const N = this.vm.stack[0];
        this.vm.stack[0] = (N > 0) ? 1 : 0;
    }
}

export default UnaryArithmeticCommands;