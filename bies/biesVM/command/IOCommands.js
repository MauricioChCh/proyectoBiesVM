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
     * Convierte un array a una cadena con formato adecuado.
     * @param {Array} array - El array a convertir.
     * @returns {string} - La representación en cadena del array.
     */
    formatArray(array) {
        return '[' + array.map(item => Array.isArray(item) ? this.formatArray(item) : item).join(', ') + ']';
    }

    /**
     * Imprime un valor desde la pila en la consola.
     * Si el valor es un arreglo, lo convierte a una cadena JSON antes de imprimirlo.
     * Los elementos del arreglo se imprimen con un espacio en blanco entre ellos.
     */
    PRN() {
        if(this.vm.execute){
            const value = this.vm.stack.pop();
            if (value !== undefined) {
                const output = Array.isArray(value) ? this.formatArray(value) : value;
                console.log(chalk.cyan(output));
            }
        }
    }

    /**
     * Lee una entrada del usuario desde la consola y la coloca en la pila.
     * @returns {Promise<void>} Una promesa que se resuelve cuando la entrada del usuario se ha leído y colocado en la pila.
     */
    async INP() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const userInput = await this.getUserInput(rl); // Obtiene el input del usuario

        this.vm.stack.push(userInput); // Almacena el input en el stack
        rl.close(); // Cierra la interfaz readline
    }
    
    /**
     * Obtiene una entrada del usuario desde la consola.
     * @returns {Promise<string>} Una promesa que se resuelve con la entrada del usuario.
     */
    getUserInput(rl) {
        return new Promise((resolve) => rl.question('', (answer) => resolve(answer.trim())));
    }

    /**
     * Limpia la interfaz readline al terminar.
     */
    // closeInterface() {
    //     this.rl.close();
    // }
}

export default IOCommands;