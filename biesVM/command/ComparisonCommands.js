import Command from './Command.js';

/**
 * Clase que representa comandos de comparación.
 * @extends Command
 */
class ComparisonCommands extends Command {
    /**
     * Crea una instancia de ComparisonCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['EQ', 'GT', 'GTE', 'LT', 'LTE']);
    }

    /**
     * Compara si dos valores son iguales.
     * @type {Function}
     */
    EQ = this.performUnaryOperation(a => a === this.vm.stack.pop());

    /**
     * Compara si un valor es mayor que otro.
     * @type {Function}
     */
    GT = this.performBinaryOperation((a, b) => a > b);

    /**
     * Compara si un valor es mayor o igual que otro.
     * @type {Function}
     */
    GTE = this.performBinaryOperation((a, b) => a >= b);

    /**
     * Compara si un valor es menor que otro.
     * @type {Function}
     */
    LT = this.performBinaryOperation((a, b) => a < b);

    /**
     * Compara si un valor es menor o igual que otro.
     * @type {Function}
     */
    LTE = this.performBinaryOperation((a, b) => a <= b);
}

export default ComparisonCommands;