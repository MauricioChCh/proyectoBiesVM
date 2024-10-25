import Command from './Command.js';

class StackCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['POP', 'SWP', 'LDV', 'BLD', 'BST']);
    }

    POP() {
        this.vm.stack.pop();
    }

    SWP() {
        this.vm.stack.push(this.vm.stack.pop());
        this.vm.stack.push(this.vm.stack.pop());
    }

    LDV(instruction) {
        const value = instruction.args.join(' ');
        let parsedValue;
        try {
            parsedValue = JSON.parse(value);
        } catch (e) {
            parsedValue = value;
        }
        this.vm.stack.push(
            Array.isArray(parsedValue)
                ? parsedValue
                : value.startsWith('"') && value.endsWith('"') && value.length > 2
                    ? String(value.slice(1, -1))
                    : value === '""'
                        ? undefined
                        : !isNaN(Number(value))
                            ? Number(value)
                            : undefined
        );
    }

    BLD(instruction) {
        const [bindLayerIndex, bindVariableIndex] = instruction.args;
        this.vm.stack.push(this.vm.getCurrentLayer(bindLayerIndex)[bindVariableIndex]);
    }

    BST(instruction) {
        const [layerIndex, variableIndex] = instruction.args;
        const value = this.vm.stack.pop();
        this.vm.getCurrentLayer(layerIndex)[variableIndex] = value;
        this.vm.logger.debug(`Stored value: ${value}`);
    }
}

export default StackCommands;