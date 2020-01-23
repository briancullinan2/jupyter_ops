// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/p/p.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./pParser";
import { SymbolContext } from "./pParser";
import { IterateContext } from "./pParser";
import { AtomContext } from "./pParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `pParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface pVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `pParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `pParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `pParser.iterate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterate?: (ctx: IterateContext) => Result;

	/**
	 * Visit a parse tree produced by `pParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
}

