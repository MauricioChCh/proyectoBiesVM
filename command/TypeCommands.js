import Command from './Command.js';

class TypeCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['CST', 'INO']);
    }

    CST(instruction) {
        const value = instruction.args[0];
        let parsedValue;
        if (!isNaN(value) && !isNaN(parseFloat(value))) {
            parsedValue = parseFloat(value);
        } else {
            try {
                parsedValue = JSON.parse(value);
            } catch (e) {
                parsedValue = value;
            }
        }
        this.vm.stack.push(parsedValue);
    }

    INO(instruction) {
        const argumento = instruction.args[0];
        if (!['number', 'list', 'string'].includes(argumento)) {
            throw new Error('Argumento en instrucción INO no válido');
        }
        const checkType = (arg, val) => {
            const typeChecks = {
                number: () => typeof val === 'number' && !isNaN(val),
                list: () => Array.isArray(val),
                string: () => typeof val === 'string',
            };
            return typeChecks[arg] ? typeChecks[arg]() : false;
        };
        const value = this.vm.stack.pop();
        const result = (value === '' && argumento === 'string') ? false : checkType(argumento, value);
        this.vm.stack.push(result);
    }
}

export default TypeCommands;