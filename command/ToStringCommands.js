import Command from './Command.js';

class ToStringCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['TOS']);
    }

    TOS = this.performUnaryOperation(a => String(a));
}

export default ToStringCommands;