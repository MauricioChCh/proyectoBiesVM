import Command from './Command.js';

class UnaryLogicCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['NOT']);
    }

    NOT = this.performUnaryOperation(a => !a);
}

export default UnaryLogicCommands;