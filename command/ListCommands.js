import Command from './Command.js';

class ListCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['LNT', 'LIN', 'LTK', 'LRK', 'TOL']);
    }

    LNT() {
        const V = this.vm.stack[0];
        const T = Array.isArray(V) && V.length === 0 ? 1 : 0;
        this.vm.stack = [T, ...this.vm.stack.slice(1)];
    }

    LIN() {
        this.vm.stack.push([this.vm.stack.pop()].concat(this.vm.stack.pop()));
    }

    LTK() {
        const index = this.vm.stack.pop();
        const list = this.vm.stack.pop();
        if (Array.isArray(list) && index >= 0 && index < list.length) {
            this.vm.stack.push(list[index]);
        } else {
            this.vm.stack.push(undefined);
        }
    }

    LRK() {
        const index = this.vm.stack.pop();
        const list = this.vm.stack.pop();
        if (Array.isArray(list) && index >= 0 && index < list.length) {
            this.vm.stack.push(list.slice(index));
        } else {
            this.vm.stack.push(undefined);
        }
    }

    TOL() {
        const value = this.vm.stack.pop();
        const list = Array.isArray(value)
            ? value
            : typeof value === 'string'
                ? Array.from(value)
                : typeof value === 'number'
                    ? Array.from(String(value), Number)
                    : [value];
        this.vm.stack.push(list);
    }
}

export default ListCommands;