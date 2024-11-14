// Generated from /home/mauricio/Documents/Obsidian/2024/Ciclo2/Paradigmas/Evaluaciones/Proyectos/Proyecto 2/proyectoBiesVM/bies/biesC/grammar/biesC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link biesCParser}.
 */
public interface biesCListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link biesCParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(biesCParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(biesCParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(biesCParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(biesCParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#printInstr}.
	 * @param ctx the parse tree
	 */
	void enterPrintInstr(biesCParser.PrintInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#printInstr}.
	 * @param ctx the parse tree
	 */
	void exitPrintInstr(biesCParser.PrintInstrContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#simpleLetInstr}.
	 * @param ctx the parse tree
	 */
	void enterSimpleLetInstr(biesCParser.SimpleLetInstrContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#simpleLetInstr}.
	 * @param ctx the parse tree
	 */
	void exitSimpleLetInstr(biesCParser.SimpleLetInstrContext ctx);
	/**
	 * Enter a parse tree produced by the {@code LambdaNoParams_Label}
	 * labeled alternative in {@link biesCParser#anonymousLetFunction}.
	 * @param ctx the parse tree
	 */
	void enterLambdaNoParams_Label(biesCParser.LambdaNoParams_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code LambdaNoParams_Label}
	 * labeled alternative in {@link biesCParser#anonymousLetFunction}.
	 * @param ctx the parse tree
	 */
	void exitLambdaNoParams_Label(biesCParser.LambdaNoParams_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code LambdaWithParams_Label}
	 * labeled alternative in {@link biesCParser#anonymousLetFunction}.
	 * @param ctx the parse tree
	 */
	void enterLambdaWithParams_Label(biesCParser.LambdaWithParams_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code LambdaWithParams_Label}
	 * labeled alternative in {@link biesCParser#anonymousLetFunction}.
	 * @param ctx the parse tree
	 */
	void exitLambdaWithParams_Label(biesCParser.LambdaWithParams_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Number_Label}
	 * labeled alternative in {@link biesCParser#primarydata}.
	 * @param ctx the parse tree
	 */
	void enterNumber_Label(biesCParser.Number_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Number_Label}
	 * labeled alternative in {@link biesCParser#primarydata}.
	 * @param ctx the parse tree
	 */
	void exitNumber_Label(biesCParser.Number_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code String_Label}
	 * labeled alternative in {@link biesCParser#primarydata}.
	 * @param ctx the parse tree
	 */
	void enterString_Label(biesCParser.String_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code String_Label}
	 * labeled alternative in {@link biesCParser#primarydata}.
	 * @param ctx the parse tree
	 */
	void exitString_Label(biesCParser.String_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Array_Label}
	 * labeled alternative in {@link biesCParser#primarydata}.
	 * @param ctx the parse tree
	 */
	void enterArray_Label(biesCParser.Array_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Array_Label}
	 * labeled alternative in {@link biesCParser#primarydata}.
	 * @param ctx the parse tree
	 */
	void exitArray_Label(biesCParser.Array_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Id_Label}
	 * labeled alternative in {@link biesCParser#primarydata}.
	 * @param ctx the parse tree
	 */
	void enterId_Label(biesCParser.Id_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Id_Label}
	 * labeled alternative in {@link biesCParser#primarydata}.
	 * @param ctx the parse tree
	 */
	void exitId_Label(biesCParser.Id_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Sub_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterSub_Label(biesCParser.Sub_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Sub_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitSub_Label(biesCParser.Sub_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Mul_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMul_Label(biesCParser.Mul_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Mul_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMul_Label(biesCParser.Mul_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Or_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterOr_Label(biesCParser.Or_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Or_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitOr_Label(biesCParser.Or_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code And_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAnd_Label(biesCParser.And_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code And_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAnd_Label(biesCParser.And_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Neq_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNeq_Label(biesCParser.Neq_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Neq_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNeq_Label(biesCParser.Neq_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Div_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterDiv_Label(biesCParser.Div_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Div_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitDiv_Label(biesCParser.Div_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Le_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterLe_Label(biesCParser.Le_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Le_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitLe_Label(biesCParser.Le_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Add_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAdd_Label(biesCParser.Add_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Add_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAdd_Label(biesCParser.Add_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Eq_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterEq_Label(biesCParser.Eq_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Eq_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitEq_Label(biesCParser.Eq_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AnonymousFunctionExpr_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAnonymousFunctionExpr_Label(biesCParser.AnonymousFunctionExpr_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AnonymousFunctionExpr_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAnonymousFunctionExpr_Label(biesCParser.AnonymousFunctionExpr_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Ge_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterGe_Label(biesCParser.Ge_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Ge_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitGe_Label(biesCParser.Ge_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code FunctionCallExpr_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCallExpr_Label(biesCParser.FunctionCallExpr_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code FunctionCallExpr_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCallExpr_Label(biesCParser.FunctionCallExpr_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Parens_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParens_Label(biesCParser.Parens_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Parens_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParens_Label(biesCParser.Parens_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Lt_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterLt_Label(biesCParser.Lt_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Lt_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitLt_Label(biesCParser.Lt_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Gt_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterGt_Label(biesCParser.Gt_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Gt_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitGt_Label(biesCParser.Gt_LabelContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PrimaryData_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterPrimaryData_Label(biesCParser.PrimaryData_LabelContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PrimaryData_Label}
	 * labeled alternative in {@link biesCParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitPrimaryData_Label(biesCParser.PrimaryData_LabelContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(biesCParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(biesCParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(biesCParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(biesCParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(biesCParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(biesCParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#array}.
	 * @param ctx the parse tree
	 */
	void enterArray(biesCParser.ArrayContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#array}.
	 * @param ctx the parse tree
	 */
	void exitArray(biesCParser.ArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#id}.
	 * @param ctx the parse tree
	 */
	void enterId(biesCParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#id}.
	 * @param ctx the parse tree
	 */
	void exitId(biesCParser.IdContext ctx);
}