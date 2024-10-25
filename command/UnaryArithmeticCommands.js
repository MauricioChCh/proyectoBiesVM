import Command from './Command.js';

class UnaryArithmeticCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['NEG', 'SGN']);
    }

    NEG = this.performUnaryOperation(a => -a);

    SGN() {
        const N = this.vm.stack[0];
        this.vm.stack[0] = (N > 0) ? 1 : 0;
    }
}

export default UnaryArithmeticCommands;