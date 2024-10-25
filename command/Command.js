/**
 * Clase base para todos los comandos.
 */
class Command {
    /**
     * Crea una instancia de Command.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        this.vm = vm;
    }

    /**
     * Vincula los métodos especificados a la instancia de Command.
     * @param {Array<string>} methods - Los nombres de los métodos a vincular.
     */
    bindMethods(methods) {
        methods.forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    /**
     * Realiza una operación binaria en los dos elementos superiores de la pila.
     * @param {Function} operation - La operación binaria a realizar.
     * @returns {Function} Una función que realiza la operación binaria.
     */
    performBinaryOperation(operation) {
        return () => {
            const [b, a] = [this.vm.stack.pop(), this.vm.stack.pop()];
            this.vm.stack.push(operation(a, b));
        };
    }

    /**
     * Realiza una operación unaria en el elemento superior de la pila.
     * @param {Function} operation - La operación unaria a realizar.
     * @returns {Function} Una función que realiza la operación unaria.
     */
    performUnaryOperation(operation) {
        return () => {
            const a = this.vm.stack.pop();
            this.vm.stack.push(operation(a));
        };
    }
}

export default Command;