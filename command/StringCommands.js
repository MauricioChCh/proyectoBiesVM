import Command from './Command.js';

class StringCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['STK', 'SRK']);
    }

    STK() {
        const index = this.vm.stack.pop();
        const str = this.vm.stack.pop();
        if (typeof str === 'string' && typeof index === 'number' && index >= 0 && index < str.length) {
            this.vm.stack.push(str.charAt(index));
        } else {
            this.vm.stack.push(undefined);
        }
    }

    SRK() {
        this.vm.logger.debug("Pila pre SRK:", this.vm.stack);
        const k = Number(this.vm.stack.pop());
        const str = this.vm.stack.pop();
        if (typeof str === 'string' && k >= 0 && k <= str.length) {
            this.vm.stack.push(str.slice(k));
        }
        this.vm.logger.debug("Pila tras SRK:", this.vm.stack);
    }
}

export default StringCommands;