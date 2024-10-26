// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by biesCParser.

export default class biesCVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by biesCParser#program.
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesCParser#statement.
	visitStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by biesCParser#printInstr.
	visitPrintInstr(ctx) {
	  return this.visitChildren(ctx);
	}



}