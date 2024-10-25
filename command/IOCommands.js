import Command from './Command.js';
import chalk from 'chalk';
import readline from 'readline';

class IOCommands extends Command {
    constructor(vm) {
        super(vm);
        this.bindMethods(['PRN', 'INP']);
    }

    PRN() {
        const value = this.vm.stack.pop();
        const output = Array.isArray(value) ? JSON.stringify(value) : value;
        console.log(chalk.cyan(output));
    }

    async INP() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const userInput = await new Promise((resolve) => rl.question('', resolve));
        rl.close();

        this.vm.stack.push(userInput);
    }

    async getUserInput() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const userInput = await new Promise((resolve) => rl.question('', resolve));
        rl.close();

        return userInput;
    }
}

export default IOCommands;