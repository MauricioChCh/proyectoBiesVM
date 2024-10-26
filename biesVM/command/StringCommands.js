import Command from './Command.js';

/**
 * Clase que representa comandos de manipulación de cadenas.
 * @extends Command
 */
class StringCommands extends Command {
    /**
     * Crea una instancia de StringCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['STK', 'SRK']);
    }

    /**
     * Toma un índice y una cadena de la pila y coloca el carácter en el índice especificado en la pila.
     * Si el índice es inválido, coloca undefined en la pila.
     */
    STK() {
        const index = this.vm.stack.pop();
        const str = this.vm.stack.pop();
        if (typeof str === 'string' && typeof index === 'number' && index >= 0 && index < str.length) {
            this.vm.stack.push(str.charAt(index));
        } else {
            this.vm.stack.push(undefined);
        }
    }

    /**
     * Toma un índice y una cadena de la pila y coloca una subcadena desde el índice especificado hasta el final en la pila.
     * Si el índice es inválido, no realiza ninguna operación.
     */
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