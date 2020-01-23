// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinyc/tinyc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./tinycParser";
import { StatementContext } from "./tinycParser";
import { Paren_exprContext } from "./tinycParser";
import { ExprContext } from "./tinycParser";
import { TestContext } from "./tinycParser";
import { SumContext } from "./tinycParser";
import { TermContext } from "./tinycParser";
import { IdContext } from "./tinycParser";
import { IntegerContext } from "./tinycParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tinycParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tinycVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tinycParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `tinycParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `tinycParser.paren_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParen_expr?: (ctx: Paren_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `tinycParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `tinycParser.test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTest?: (ctx: TestContext) => Result;

	/**
	 * Visit a parse tree produced by `tinycParser.sum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSum?: (ctx: SumContext) => Result;

	/**
	 * Visit a parse tree produced by `tinycParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `tinycParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `tinycParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;
}

