import Command from './Command.js';

/**
 * Clase que representa comandos de longitud.
 * @extends Command
 */
class LengthCommands extends Command {
    /**
     * Crea una instancia de LengthCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['LEN']);
    }

    /**
     * Calcula la longitud de un valor según su tipo.
     * @param {*} value - El valor del que se calculará la longitud.
     * @returns {number} La longitud calculada.
     */
    getLength(value) {
        if (typeof value === 'string' || Array.isArray(value)) {
            return value.length;
        }
        if (typeof value === 'number') {
            return value.toString().length;
        }
        return 0; // Longitud predeterminada para tipos no soportados.
    }

    /**
     * Calcula la longitud de una ocurrencia y la coloca en la pila.
     */
    LEN() {
        this.vm.stack.push(this.getLength(this.vm.stack.pop()));
    }

}

export default LengthCommands;
