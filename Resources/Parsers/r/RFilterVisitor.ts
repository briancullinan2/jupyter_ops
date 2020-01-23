// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/r/RFilter.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StreamContext } from "./RFilter";
import { EatContext } from "./RFilter";
import { ElemContext } from "./RFilter";
import { AtomContext } from "./RFilter";
import { OpContext } from "./RFilter";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RFilter`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RFilterVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RFilter.stream`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStream?: (ctx: StreamContext) => Result;

	/**
	 * Visit a parse tree produced by `RFilter.eat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEat?: (ctx: EatContext) => Result;

	/**
	 * Visit a parse tree produced by `RFilter.elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElem?: (ctx: ElemContext) => Result;

	/**
	 * Visit a parse tree produced by `RFilter.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `RFilter.op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOp?: (ctx: OpContext) => Result;
}

