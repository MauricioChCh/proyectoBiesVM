import Command from './Command.js';

class LogicCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['AND', 'OR', 'XOR']);
    }

    AND = this.performBinaryOperation((a, b) => a && b);
    OR = this.performBinaryOperation((a, b) => a || b);
    XOR = this.performBinaryOperation((a, b) => a !== b);
}

export default LogicCommands;