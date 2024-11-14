import chalk from 'chalk';
import FileWriter from './FileWriter.js';
import CommandExecutor from './CommandExecutor.js';

/**
 * Clase que representa el compilador (C).
 */
class C {
    /**
     * Crea una instancia de C.
     * @param {Object} [logger={ log: () => {} }] - Objeto Logger para registrar mensajes.
     */
    constructor(logger = { log: () => { } }) {
        this.logger = logger;
        this.code = [];
        this.bydeCode = [];
        this.fileWriter = new FileWriter();
        this.commandExecutor = new CommandExecutor();
        this.variableCounter = 0; // Contador de variables
        this.variables = {}; // Mapa de variables
        this.functionCounter = 1; // Contador de funciones
        this.currentParent = '$0'; // Contexto padre actual
    }

    /**
     * Ejecuta el código proporcionado en el compilador.
     * @param {Array} code - El código a ejecutar.
     */
    run(code) {
        this.code = code;
        for (const instruction of code) {
            this.convertCodeToByteCode(instruction);
        }
        this.fileWriter.writeByteCodeToFile(this.bydeCode); // Escribe el bytecode en un archivo
        this.commandExecutor.executeCommands(); // Ejecuta los comandos del sistema
    }

    /**
     * Convierte una instrucción a bytecode.
     * @param {string} instruction - La instrucción a convertir.
     */
    convertCodeToByteCode(instruction) {
        console.log(chalk.yellow(`Convirtiendo `) + chalk.green(`${instruction}`) + chalk.yellow(` a bytecode...`));

        const matchAndProcess = (regex, process) => {
            const match = instruction.match(regex);
            if (match) {
                process(match);
                return true;
            }
            return false;
        };

        switch (true) {
            case instruction.startsWith('$FUN'):
                this.bydeCode.push(instruction);
                break;

            case instruction.startsWith('$END'):
                this.bydeCode.push(instruction);
                break;

            case instruction === 'print':
                this.bydeCode.push('PRN');
                break;

            case instruction === 'EOF':
                this.bydeCode.push('HLT');
                break;

            case (instruction.startsWith('"') && instruction.endsWith('"')):
                this.bydeCode.push(`LDV ${instruction}`);
                break;

            case (!isNaN(Number(instruction))):
                this.bydeCode.push(`LDV ${instruction}`);
                break;

            case (instruction.startsWith('[') && instruction.endsWith(']')):
                this.bydeCode.push(`LDV ${instruction}`);
                break;

            case instruction === '*':
                this.bydeCode.push('MUL');
                break;

            case instruction === '/':
                this.bydeCode.push('DIV');
                break;

            case instruction === '+':
                this.bydeCode.push('ADD');
                break;

            case instruction === '-':
                this.bydeCode.push('SUB');
                break;

            case matchAndProcess(/^let\s+([a-zA-Z_][a-zA-Z_0-9]*)\s*=\s*/, (match) => {
                const variableName = match[1];
                if (!(variableName in this.variables)) {
                    this.variables[variableName] = this.variableCounter++;
                }
                this.bydeCode.push(`BST 0 ${this.variables[variableName]}`);
            }):
                break;

            case matchAndProcess(/^\([a-zA-Z_][a-zA-Z_0-9]*(,\s*[a-zA-Z_][a-zA-Z_0-9]*)*\)\s*=>/, (match) => {
                const functionSignature = match[0];
                const args = functionSignature.slice(1, -3).split(',').map(arg => arg.trim());
                const argCount = args.length;
                const functionId = `$${this.functionCounter++}`;
                const parentContext = this.currentParent;

                // Generar la etiqueta de inicio de la función
                let functionStart = `$FUN ${functionId}`;
                if (argCount > 0) {
                    functionStart += ` ARGS:${argCount}`;
                }
                functionStart += ` PARENT:${parentContext}`;
                this.bydeCode.push(functionStart);

                // Actualizar el contexto padre actual
                this.currentParent = functionId;

                // Aquí se debe agregar la lógica del cuerpo de la función

                // Generar la etiqueta de fin de la función
                const functionEnd = `$END ${functionId}`;
                this.bydeCode.push(functionEnd);

                // Restaurar el contexto padre
                this.currentParent = parentContext;
            }):
                break;

            case matchAndProcess(/^[a-zA-Z_][a-zA-Z_0-9]*$/, (match) => {
                const variableName = match[0];
                if (variableName in this.variables) {
                    this.bydeCode.push(`BLD 0 ${this.variables[variableName]}`);
                }
            }):
                break;

            // Agregar más casos aquí para futuras instrucciones

            default:
                return;
        }
    }
}

export default C;