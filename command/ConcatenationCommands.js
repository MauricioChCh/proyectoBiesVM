import Command from './Command.js';

class ConcatenationCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['CAT']);
    }

    CAT = this.performBinaryOperation((a, b) => a + b);
}

export default ConcatenationCommands;