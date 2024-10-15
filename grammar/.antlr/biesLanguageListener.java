// Generated from /home/mauricio/Documents/Obsidian/2024/Ciclo2/Paradigmas/Evaluaciones/Proyectos/Proyecto 1/pruebas/proyectoBiesVM/grammar/biesLanguage.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link biesLanguageParser}.
 */
public interface biesLanguageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(biesLanguageParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(biesLanguageParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#functionDef}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDef(biesLanguageParser.FunctionDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#functionDef}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDef(biesLanguageParser.FunctionDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(biesLanguageParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(biesLanguageParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#instruction}.
	 * @param ctx the parse tree
	 */
	void enterInstruction(biesLanguageParser.InstructionContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#instruction}.
	 * @param ctx the parse tree
	 */
	void exitInstruction(biesLanguageParser.InstructionContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#loadInstr}.
	 * @param ctx the parse tree
	 */
	void enterLoadInstr(biesLanguageParser.LoadInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#loadInstr}.
	 * @param ctx the parse tree
	 */
	void exitLoadInstr(biesLanguageParser.LoadInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#arithInstr}.
	 * @param ctx the parse tree
	 */
	void enterArithInstr(biesLanguageParser.ArithInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#arithInstr}.
	 * @param ctx the parse tree
	 */
	void exitArithInstr(biesLanguageParser.ArithInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#logicalInst}.
	 * @param ctx the parse tree
	 */
	void enterLogicalInst(biesLanguageParser.LogicalInstContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#logicalInst}.
	 * @param ctx the parse tree
	 */
	void exitLogicalInst(biesLanguageParser.LogicalInstContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#controlInstr}.
	 * @param ctx the parse tree
	 */
	void enterControlInstr(biesLanguageParser.ControlInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#controlInstr}.
	 * @param ctx the parse tree
	 */
	void exitControlInstr(biesLanguageParser.ControlInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#funcInstr}.
	 * @param ctx the parse tree
	 */
	void enterFuncInstr(biesLanguageParser.FuncInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#funcInstr}.
	 * @param ctx the parse tree
	 */
	void exitFuncInstr(biesLanguageParser.FuncInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#comparisonInstr}.
	 * @param ctx the parse tree
	 */
	void enterComparisonInstr(biesLanguageParser.ComparisonInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#comparisonInstr}.
	 * @param ctx the parse tree
	 */
	void exitComparisonInstr(biesLanguageParser.ComparisonInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#stringInstr}.
	 * @param ctx the parse tree
	 */
	void enterStringInstr(biesLanguageParser.StringInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#stringInstr}.
	 * @param ctx the parse tree
	 */
	void exitStringInstr(biesLanguageParser.StringInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#listInstr}.
	 * @param ctx the parse tree
	 */
	void enterListInstr(biesLanguageParser.ListInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#listInstr}.
	 * @param ctx the parse tree
	 */
	void exitListInstr(biesLanguageParser.ListInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#array}.
	 * @param ctx the parse tree
	 */
	void enterArray(biesLanguageParser.ArrayContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#array}.
	 * @param ctx the parse tree
	 */
	void exitArray(biesLanguageParser.ArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesLanguageParser#inputString}.
	 * @param ctx the parse tree
	 */
	void enterInputString(biesLanguageParser.InputStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesLanguageParser#inputString}.
	 * @param ctx the parse tree
	 */
	void exitInputString(biesLanguageParser.InputStringContext ctx);
}