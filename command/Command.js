class Command {
    constructor(vm) {
        this.vm = vm;
    }

    bindMethods(methods) {
        methods.forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    performBinaryOperation(operation) {
        return () => {
            const [b, a] = [this.vm.stack.pop(), this.vm.stack.pop()];
            this.vm.stack.push(operation(a, b));
        };
    }

    performUnaryOperation(operation) {
        return () => {
            const a = this.vm.stack.pop();
            this.vm.stack.push(operation(a));
        };
    }
}

export default Command;