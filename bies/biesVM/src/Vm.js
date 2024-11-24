import biesVMLexer from '../output/biesVMLexer.js';
import biesVMParser from '../output/biesVMParser.js';
import Visitor from './Visitor.js';
import antlr4 from 'antlr4';

import InitCommands from '../command/InitCommands.js';
import StackCommands from '../command/StackCommands.js';
import ArithmeticCommands from '../command/ArithmeticCommands.js';
import UnaryArithmeticCommands from '../command/UnaryArithmeticCommands.js';
import ComparisonCommands from '../command/ComparisonCommands.js';
import LogicCommands from '../command/LogicCommands.js';
import UnaryLogicCommands from '../command/UnaryLogicCommands.js';
import NullTestCommands from '../command/NullTestCommands.js';
import ConcatenationCommands from '../command/ConcatenationCommands.js';
import ToStringCommands from '../command/ToStringCommands.js';
import StringCommands from '../command/StringCommands.js';
import ListCommands from '../command/ListCommands.js';
import BranchCommands from '../command/BranchCommands.js';
import FunctionCommands from '../command/FunctionCommands.js';
import TypeCommands from '../command/TypeCommands.js';
import IOCommands from '../command/IOCommands.js';
import { Logger } from './Logger.js';
 
import LengthCommands from '../command/LengthCommands.js';

/**
 * Clase que representa una máquina virtual (VM).
 */
class VM {
    /**
     * Crea una instancia de VM.
     *
     */
    constructor() {
        this.stack = [];
        this.bindings = [{}];
        this.contextStack = [];
        this.code = [];
        this.functions = {};
        this.programCounter = 0;
        this.logger = new Logger();
  
        this.initCommands = new InitCommands(this);
        this.stackCommands = new StackCommands(this);
        this.arithmeticCommands = new ArithmeticCommands(this);
        this.unaryArithmeticCommands = new UnaryArithmeticCommands(this);
        this.comparisonCommands = new ComparisonCommands(this);
        this.logicCommands = new LogicCommands(this);
        this.unaryLogicCommands = new UnaryLogicCommands(this);
        this.nullTestCommands = new NullTestCommands(this);
        this.concatenationCommands = new ConcatenationCommands(this);
        this.toStringCommands = new ToStringCommands(this);
        this.stringCommands = new StringCommands(this);
        this.listCommands = new ListCommands(this);
        this.branchCommands = new BranchCommands(this);
        this.functionCommands = new FunctionCommands(this);
        this.typeCommands = new TypeCommands(this);
        this.ioCommands = new IOCommands(this);
        this.lengthCommands = new LengthCommands(this);

        this.bindCommandMethods();
    }

    /**
     * Vincula los métodos de comando a la instancia de VM.
     */
    bindCommandMethods() {
        const commandCategories = [
            this.initCommands,
            this.stackCommands,
            this.arithmeticCommands,
            this.unaryArithmeticCommands,
            this.comparisonCommands,
            this.logicCommands,
            this.unaryLogicCommands,
            this.nullTestCommands,
            this.concatenationCommands,
            this.toStringCommands,
            this.stringCommands,
            this.listCommands,
            this.branchCommands,
            this.functionCommands,
            this.typeCommands,
            this.ioCommands,
            this.lengthCommands,
        ];

        commandCategories.forEach(category => {
            Object.keys(category).forEach(command => {
                if (typeof category[command] === 'function') {
                    category[command] = category[command].bind(this);
                }
            });
        });
    }

    /**
     * Ejecuta el código proporcionado en la máquina virtual.
     * @param {Array} code - El código a ejecutar.
     */
    async run(code) {
        this.code = code;

        while (this.programCounter < this.code.length) {
            const instruction = this.code[this.programCounter];
            this.programCounter++;
            await this.executeInstruction(instruction);
        }
    }

    /**
     * Ejecuta una instrucción en la máquina virtual.
     * @param {Object} instruction - La instrucción a ejecutar.
     */
    async executeInstruction(instruction) {
        this.logger.log(`Visitando instrucción: ${instruction.type} ${instruction.args ? instruction.args.join(' ') : ''}`);

        const handler = this.getHandler(instruction.type);

        if (handler) {
            await handler(instruction);
        } else {
            throw new Error(`Instrucción desconocida: ${instruction.type}`);
        }
    }

    /**
     * Ejecuta el análisis sintáctico de ANTLR en el cuerpo de una función.
     * @param {string} functionBody - El cuerpo de la función a analizar.
     */
    executeAntlrParsing(functionBody) {
        const chars = new antlr4.InputStream(functionBody);
        const lexer = new biesVMLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new biesVMParser(tokens);
        parser.buildParseTrees = true;
        const tree = parser.program();
        const visitor = new Visitor();
        visitor.vm = this;
        visitor.visit(tree);
    }

    /**
     * Obtiene el manejador de una instrucción según su tipo.
     * @param {string} instructionType - El tipo de la instrucción.
     * @returns {Function} El manejador de la instrucción.
     */
    getHandler(instructionType) {
        const commandMap = {
            'INI': this.initCommands.INI,
            'HLT': this.initCommands.HLT,
            'POP': this.stackCommands.POP,
            'SWP': this.stackCommands.SWP,
            'LDV': this.stackCommands.LDV,
            'BLD': this.stackCommands.BLD,
            'BST': this.stackCommands.BST,
            'ADD': this.arithmeticCommands.ADD,
            'SUB': this.arithmeticCommands.SUB,
            'MUL': this.arithmeticCommands.MUL,
            'DIV': this.arithmeticCommands.DIV,
            'NEG': this.unaryArithmeticCommands.NEG,
            'SGN': this.unaryArithmeticCommands.SGN,
            'EQ': this.comparisonCommands.EQ,
            'GT': this.comparisonCommands.GT,
            'GTE': this.comparisonCommands.GTE,
            'LT': this.comparisonCommands.LT,
            'LTE': this.comparisonCommands.LTE,
            'AND': this.logicCommands.AND,
            'OR': this.logicCommands.OR,
            'XOR': this.logicCommands.XOR,
            'NOT': this.unaryLogicCommands.NOT,
            'SNT': this.nullTestCommands.SNT,
            'CAT': this.concatenationCommands.CAT,
            'TOS': this.toStringCommands.TOS,
            'STK': this.stringCommands.STK,
            'SRK': this.stringCommands.SRK,
            'LNT': this.listCommands.LNT,
            'LIN': this.listCommands.LIN,
            'LTK': this.listCommands.LTK,
            'LRK': this.listCommands.LRK,
            'TOL': this.listCommands.TOL,
            'NOP': this.branchCommands.NOP,
            'BR': this.branchCommands.BR,
            'BT': this.branchCommands.BT,
            'BF': this.branchCommands.BF,
            'LDF': this.functionCommands.LDF,
            'APP': this.functionCommands.APP,
            'RET': this.functionCommands.RET,
            'CST': this.typeCommands.CST,
            'INO': this.typeCommands.INO,
            'PRN': this.ioCommands.PRN,
            'INP': this.ioCommands.INP,
            'LEN': this.lengthCommands.LEN,
            'POW': this.arithmeticCommands.POW,
        };
        return commandMap[instructionType];
    }

    /**
     * Obtiene la capa actual de bindings.
     * @param {number} layerIndex - El índice de la capa.
     * @returns {Object} La capa de bindings.
     */
    getCurrentLayer(layerIndex) {
        return this.bindings[layerIndex] || {};
    }
}

export default VM;