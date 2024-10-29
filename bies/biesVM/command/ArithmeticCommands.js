import Command from './Command.js';

/**
 * Clase que representa comandos aritméticos.
 * @extends Command
 */
class ArithmeticCommands extends Command {
    /**
     * Crea una instancia de ArithmeticCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['ADD', 'SUB', 'MUL', 'DIV']);
    }

    /**
     * Suma dos números.
     * @type {Function}
     */
    ADD = this.performBinaryOperation((a, b) => a + b);

    /**
     * Resta dos números.
     * @type {Function}
     */
    SUB = this.performBinaryOperation((a, b) => a - b);

    /**
     * Multiplica dos números.
     * @type {Function}
     */
    MUL = this.performBinaryOperation((a, b) => a * b);

    /**
     * Divide dos números.
     * @type {Function}
     * @throws Lanzará un error si se intenta dividir por cero.
     */
    DIV = this.performBinaryOperation((a, b) => {
        if (b === 0) {
            throw new Error('Error: División por cero');
        }
        return a / b;
    });
}

export default ArithmeticCommands;