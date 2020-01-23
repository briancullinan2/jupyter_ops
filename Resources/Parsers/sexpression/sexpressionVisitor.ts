// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sexpression/sexpression.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SexprContext } from "./sexpressionParser";
import { ItemContext } from "./sexpressionParser";
import { ListContext } from "./sexpressionParser";
import { AtomContext } from "./sexpressionParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `sexpressionParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface sexpressionVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `sexpressionParser.sexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSexpr?: (ctx: SexprContext) => Result;

	/**
	 * Visit a parse tree produced by `sexpressionParser.item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItem?: (ctx: ItemContext) => Result;

	/**
	 * Visit a parse tree produced by `sexpressionParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `sexpressionParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
}

