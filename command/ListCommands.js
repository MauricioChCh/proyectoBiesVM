import Command from './Command.js';

/**
 * Clase que representa comandos de listas.
 * @extends Command
 */
class ListCommands extends Command {
    /**
     * Crea una instancia de ListCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['LNT', 'LIN', 'LTK', 'LRK', 'TOL']);
    }

    /**
     * Verifica si el valor en la cima de la pila es una lista vacía.
     * Si es una lista vacía, coloca 1 en la pila; de lo contrario, coloca 0.
     */
    LNT() {
        const V = this.vm.stack[0];
        const T = Array.isArray(V) && V.length === 0 ? 1 : 0;
        this.vm.stack = [T, ...this.vm.stack.slice(1)];
    }

    /**
     * Inserta un elemento en la lista en la cima de la pila.
     * El elemento se coloca al principio de la lista.
     */
    LIN() {
        this.vm.stack.push([this.vm.stack.pop()].concat(this.vm.stack.pop()));
    }

    /**
     * Toma un índice y una lista de la pila y coloca el elemento en el índice especificado en la pila.
     * Si el índice es inválido, coloca undefined en la pila.
     */
    LTK() {
        const index = this.vm.stack.pop();
        const list = this.vm.stack.pop();
        if (Array.isArray(list) && index >= 0 && index < list.length) {
            this.vm.stack.push(list[index]);
        } else {
            this.vm.stack.push(undefined);
        }
    }

    /**
     * Toma un índice y una lista de la pila y coloca una sublista desde el índice especificado hasta el final en la pila.
     * Si el índice es inválido, coloca undefined en la pila.
     */
    LRK() {
        const index = this.vm.stack.pop();
        const list = this.vm.stack.pop();
        if (Array.isArray(list) && index >= 0 && index < list.length) {
            this.vm.stack.push(list.slice(index));
        } else {
            this.vm.stack.push(undefined);
        }
    }

    /**
     * Convierte un valor en una lista y lo coloca en la pila.
     * Si el valor es una lista, lo deja sin cambios.
     * Si el valor es una cadena, lo convierte en una lista de caracteres.
     * Si el valor es un número, lo convierte en una lista de dígitos.
     * Si el valor es de otro tipo, lo coloca en una lista de un solo elemento.
     */
    TOL() {
        const value = this.vm.stack.pop();
        const list = Array.isArray(value)
            ? value
            : typeof value === 'string'
                ? Array.from(value)
                : typeof value === 'number'
                    ? Array.from(String(value), Number)
                    : [value];
        this.vm.stack.push(list);
    }
}

export default ListCommands;