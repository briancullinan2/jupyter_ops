// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr4/examples/Hello.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { RContext } from "./HelloParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HelloParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HelloVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HelloParser.r`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitR?: (ctx: RContext) => Result;
}

