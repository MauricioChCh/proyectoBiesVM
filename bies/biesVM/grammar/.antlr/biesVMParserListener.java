// Generated from /home/mauricio/Documents/Obsidian/2024/Ciclo2/Paradigmas/Proyectos/Proyecto 1/pruebas/biesvm/grammar/biesVMParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link biesVMParser}.
 */
public interface biesVMParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link biesVMParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(biesVMParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesVMParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(biesVMParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesVMParser#functionDef}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDef(biesVMParser.FunctionDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesVMParser#functionDef}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDef(biesVMParser.FunctionDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesVMParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(biesVMParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesVMParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(biesVMParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesVMParser#instruction}.
	 * @param ctx the parse tree
	 */
	void enterInstruction(biesVMParser.InstructionContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesVMParser#instruction}.
	 * @param ctx the parse tree
	 */
	void exitInstruction(biesVMParser.InstructionContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesVMParser#loadInstr}.
	 * @param ctx the parse tree
	 */
	void enterLoadInstr(biesVMParser.LoadInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesVMParser#loadInstr}.
	 * @param ctx the parse tree
	 */
	void exitLoadInstr(biesVMParser.LoadInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesVMParser#arithInstr}.
	 * @param ctx the parse tree
	 */
	void enterArithInstr(biesVMParser.ArithInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesVMParser#arithInstr}.
	 * @param ctx the parse tree
	 */
	void exitArithInstr(biesVMParser.ArithInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesVMParser#controlInstr}.
	 * @param ctx the parse tree
	 */
	void enterControlInstr(biesVMParser.ControlInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesVMParser#controlInstr}.
	 * @param ctx the parse tree
	 */
	void exitControlInstr(biesVMParser.ControlInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesVMParser#funcInstr}.
	 * @param ctx the parse tree
	 */
	void enterFuncInstr(biesVMParser.FuncInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesVMParser#funcInstr}.
	 * @param ctx the parse tree
	 */
	void exitFuncInstr(biesVMParser.FuncInstrContext ctx);
}