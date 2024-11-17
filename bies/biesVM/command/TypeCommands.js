import Command from './Command.js';

/**
 * Clase que representa comandos de tipo.
 * @extends Command
 */
class TypeCommands extends Command {
    /**
     * Crea una instancia de TypeCommands.
     * @param {Object} vm - La instancia de la máquina virtual.
     */
    constructor(vm) {
        super(vm);
        this.bindMethods(['CST', 'INO']);
    }

    /**
     * Convierte un valor a su tipo correspondiente y lo coloca en la pila.
     * @param {Object} instruction - La instrucción que contiene el valor a convertir.
     */
    CST(instruction) {
        const value = this.vm.stack.pop();
        const targetType = instruction.args[0];

        let castedValue;

        switch (targetType) {
            case 'number':
                castedValue = parseFloat(value);
                if (isNaN(castedValue)) {
                    throw new Error(`No se puede convertir "${value}" a number.`);
                }
                break;

            case 'string':
                castedValue = String(value);
                break;

            case 'list':
                castedValue = Array.isArray(value) ? value : (value != null && typeof value[Symbol.iterator] === 'function') ? [...value] : [value];
                break;

            default:
                throw new Error(`Tipo de casting no soportado: ${targetType}`);
        }
        this.vm.stack.push(castedValue);
    }

    /**
     * Verifica si el valor en la cima de la pila es del tipo especificado.
     * @param {Object} instruction - La instrucción que contiene el tipo a verificar.
     * @throws {Error} Si el argumento de la instrucción INO no es válido.
     */
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