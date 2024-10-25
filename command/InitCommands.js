import Command from './Command.js';

class InitCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['INI', 'HLT']);
    }

    INI(instruction) {
        const mainFunctionName = instruction.args[0];
        const mainFunctionBody = this.vm.functions[mainFunctionName];

        if (!mainFunctionBody) {
            this.vm.logger.log(`Error: Main function ${mainFunctionName} not defined`);
            throw new Error(`Main function ${mainFunctionName} not defined`);
        }

        this.vm.code = mainFunctionBody;

        this.vm.stack = [];
        this.vm.bindings = [{}];
        this.vm.contextStack = [];
        this.vm.programCounter = 0;
    }

    HLT() {
        this.vm.code = [];
        this.vm.stack = [];
        this.vm.bindings = [];
        this.vm.contextStack = [];
    }
}

export default InitCommands;