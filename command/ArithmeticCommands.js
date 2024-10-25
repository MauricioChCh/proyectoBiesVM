import Command from './Command.js';

class ArithmeticCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['ADD', 'SUB', 'MUL', 'DIV']);
    }

    ADD = this.performBinaryOperation((a, b) => a + b);
    SUB = this.performBinaryOperation((a, b) => a - b);
    MUL = this.performBinaryOperation((a, b) => a * b);
    DIV = this.performBinaryOperation((a, b) => {
        if (b === 0) {
            throw new Error('Error: División por cero');
        }
        return a / b;
    });
}

export default ArithmeticCommands;