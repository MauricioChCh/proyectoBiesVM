import Command from './Command.js';

/**
 * Clase que representa comandos de prueba de nulidad.
 * @extends Command
 */
class NullTestCommands extends Command {
    /**
     * Crea una instancia de NullTestCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['SNT']);
    }

    /**
     * Verifica si el valor en la cima de la pila es una cadena vacía.
     * Si es una cadena vacía, coloca 1 en la pila; de lo contrario, coloca 0.
     */
    SNT() {
        const str = this.vm.stack.pop();
        this.vm.stack.push(str === "" ? 1 : 0);
    }
}

export default NullTestCommands;