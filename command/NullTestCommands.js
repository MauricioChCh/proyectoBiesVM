import Command from './Command.js';

class NullTestCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['SNT']);
    }

    SNT() {
        const str = this.vm.stack.pop();
        this.vm.stack.push(str === "" ? 1 : 0);
    }
}

export default NullTestCommands;