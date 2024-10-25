import Command from './Command.js';

class ComparisonCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['EQ', 'GT', 'GTE', 'LT', 'LTE']);
    }

    EQ = this.performUnaryOperation(a => a === this.vm.stack.pop());
    GT = this.performBinaryOperation((a, b) => a > b);
    GTE = this.performBinaryOperation((a, b) => a >= b);
    LT = this.performBinaryOperation((a, b) => a < b);
    LTE = this.performBinaryOperation((a, b) => a <= b);
}

export default ComparisonCommands;