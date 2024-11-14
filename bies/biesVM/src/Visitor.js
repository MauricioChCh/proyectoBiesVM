import chalk from 'chalk';
import biesVMVisitor from '../output/biesVMVisitor.js';
import VM from './Vm.js';
import { Logger } from './Logger.js';
/**
 * Clase que implementa un visitante para el lenguaje Bies.
 * Extiende la funcionalidad de `biesLanguageVisitor` para recorrer un árbol de sintaxis y
 * generar las instrucciones correspondientes que se ejecutarán en la máquina virtual (VM).
 */
export class Visitor extends biesVMVisitor {
    /**
     * Crea una instancia de la clase Visitor.
     * @param {Object} [logger={ log: () => {} }] - Objeto que define el comportamiento del logger. Por defecto, usa un logger vacío.
     */
    constructor() {
        super();
        /**
         * Logger para registrar las operaciones del visitante.
         * @type {Object}
         */
        this.logger = new Logger();
        /**
         * Máquina virtual utilizada para ejecutar las instrucciones generadas.
         * @type {VM}
         */
        this.vm = new VM();

        

        /**
         * Código acumulado durante el recorrido del árbol de sintaxis.
         * @type {Array<{ type: string, args: string[] }>}
         */
        this.code = [];
    }

    /**
     * Visita el nodo raíz del programa y recorre todos sus elementos.
     * Al finalizar el recorrido, envía el código acumulado para su ejecución en la máquina virtual.
     * @param {Object} ctx - Contexto del nodo del programa en el árbol de sintaxis.
     * @returns {VM} Instancia de la máquina virtual (`VM`) con las funciones y código cargado.
     */
    visitProgram(ctx) {
        this.logger.log(chalk.cyanBright('Visitando el programa'));
        super.visitProgram(ctx); // Visita cada elemento del programa y acumula las instrucciones
        this.sendCode(); // Envía el código para que sea ejecutado en `run()`
        return this.vm;
    }

    /**
     * Visita la definición de una función en el programa.
     * Almacena el nombre de la función y su cuerpo en la máquina virtual (`VM`).
     * @param {Object} ctx - Contexto del nodo de la definición de la función en el árbol de sintaxis.
     * @returns {*} El resultado de la visita a la definición de la función.
     */
    visitFunctionDef(ctx) {
        const functionName = ctx.LABEL_IDENTIFIER(0).getText();
        const functionBody = ctx.statement().map(stmt => stmt.getText());
        const args = ctx.NUMBER(0).getText(); // Extrae el número de argumentos
        const parent = ctx.LABEL_IDENTIFIER(1).getText(); // Extrae el contexto padre

        // La información extraída de la función, incluyendo args y parent es la siguiente
        //this.logger.log(chalk.blue(`Definida función ${functionName} con argumentos: ${args} en el contexto ${parent}`));

        if (!this.vm.functions) {
            this.vm.functions = {};
        }

        //this.vm.functions[functionName] = functionBody;
        
        this.vm.functions[functionName] = {
            body: functionBody,
            args: parseInt(args),
            parent: parent
        };
        
        this.logger.log(chalk.blue(`Definida función ${functionName} con cuerpo: ${functionBody}`));

        return super.visitFunctionDef(ctx);
    }

    /**
     * Visita una instrucción en el programa.
     * Divide la instrucción en sus partes (`type` y `args`) y la acumula en el arreglo `this.code`.
     * @param {Object} ctx - Contexto del nodo de la instrucción en el árbol de sintaxis.
     * @returns {*} El resultado de la visita a la instrucción.
     */
    visitInstruction(ctx) {
        const text = ctx.getText().trim();

        const parts = text.split(/\s+/);
        const type = parts[0];
        const args = parts.slice(1);

        this.code.push({ type, args });

        return super.visitInstruction(ctx);
    }

    /**
     * Envía el código acumulado a la máquina virtual (`VM`) para su ejecución.
     * Llama a la función `run` de la máquina virtual con el arreglo de instrucciones `this.code`.
     */
    sendCode() {
        this.vm.run(this.code); // Ejecuta todas las instrucciones almacenadas en `this.code`
    }
}

export default Visitor;