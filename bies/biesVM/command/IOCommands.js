import Command from './Command.js';
import chalk from 'chalk';
import readline from 'readline';

/**
 * Clase que representa comandos de entrada/salida.
 * @extends Command
 */
class IOCommands extends Command {
    /**
     * Crea una instancia de IOCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['PRN', 'INP']);
    }

    /**
     * Imprime un valor desde la pila en la consola.
     * Si el valor es un arreglo, lo convierte a una cadena JSON antes de imprimirlo.
     */
    PRN() {
        const value = this.vm.stack.pop();
        const output = Array.isArray(value) ? JSON.stringify(value) : value;
        console.log(chalk.cyan(output));
    }

    /**
     * Lee una entrada del usuario desde la consola y la coloca en la pila.
     * @returns {Promise<void>} Una promesa que se resuelve cuando la entrada del usuario se ha leído y colocado en la pila.
     */
    async INP() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const userInput = await new Promise((resolve) => rl.question('', resolve));
        rl.close();

        this.vm.stack.push(userInput);
    }

    /**
     * Obtiene una entrada del usuario desde la consola.
     * @returns {Promise<string>} Una promesa que se resuelve con la entrada del usuario.
     */
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