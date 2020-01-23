// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinybasic/tinybasic.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./tinybasicParser";
import { LineContext } from "./tinybasicParser";
import { StatementContext } from "./tinybasicParser";
import { ExprlistContext } from "./tinybasicParser";
import { VarlistContext } from "./tinybasicParser";
import { ExpressionContext } from "./tinybasicParser";
import { TermContext } from "./tinybasicParser";
import { FactorContext } from "./tinybasicParser";
import { VaraContext } from "./tinybasicParser";
import { NumberContext } from "./tinybasicParser";
import { RelopContext } from "./tinybasicParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tinybasicParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tinybasicVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tinybasicParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.varlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarlist?: (ctx: VarlistContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.vara`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVara?: (ctx: VaraContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `tinybasicParser.relop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelop?: (ctx: RelopContext) => Result;
}

