import Command from './Command.js';

class BranchCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['NOP', 'BR', 'BT', 'BF']);
    }

    NOP() {
        // No operation
    }

    BR(instruction) {
        const branchOffset = Number(instruction.args[0]) - 1;
        this.vm.programCounter += branchOffset;
    }

    BT(instruction) {
        if (this.vm.stack.pop()) {
            const branchOffset = Number(instruction.args[0]) - 1;
            this.vm.programCounter += branchOffset;
        }
    }

    BF(instruction) {
        if (!this.vm.stack.pop()) {
            const branchOffset = Number(instruction.args[0]) - 1;
            this.vm.programCounter += branchOffset;
        }
    }
}

export default BranchCommands;