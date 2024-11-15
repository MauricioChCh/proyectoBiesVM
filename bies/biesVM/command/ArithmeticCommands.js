import Command from './Command.js';

/**
 * Clase que representa comandos aritméticos.
 * @extends Command
 */
class ArithmeticCommands extends Command {
    constructor(vm) {
        super(vm);
        
        const operations = {
            ADD: (a, b) => a + b,
            SUB: (a, b) => a - b,
            MUL: (a, b) => a * b,
            DIV: (a, b) => {
                if (b === 0) throw new Error('Error: División por cero');
                return a / b;
            }
        };

        // Registra todas las operaciones automáticamente
        Object.entries(operations).forEach(([name, operation]) => {
            this[name] = this.performBinaryOperation(operation);
        });

        this.bindMethods(Object.keys(operations));
    }
}

export default ArithmeticCommands;