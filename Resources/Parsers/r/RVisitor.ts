// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/r/R.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./RParser";
import { ExprContext } from "./RParser";
import { ExprlistContext } from "./RParser";
import { FormlistContext } from "./RParser";
import { FormContext } from "./RParser";
import { SublistContext } from "./RParser";
import { SubContext } from "./RParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `RParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RParser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;

	/**
	 * Visit a parse tree produced by `RParser.formlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormlist?: (ctx: FormlistContext) => Result;

	/**
	 * Visit a parse tree produced by `RParser.form`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForm?: (ctx: FormContext) => Result;

	/**
	 * Visit a parse tree produced by `RParser.sublist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSublist?: (ctx: SublistContext) => Result;

	/**
	 * Visit a parse tree produced by `RParser.sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSub?: (ctx: SubContext) => Result;
}

