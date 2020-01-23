// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr4/examples/Hello.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RContext } from "./HelloParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HelloParser`.
 */
export interface HelloListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HelloParser.r`.
	 * @param ctx the parse tree
	 */
	enterR?: (ctx: RContext) => void;
	/**
	 * Exit a parse tree produced by `HelloParser.r`.
	 * @param ctx the parse tree
	 */
	exitR?: (ctx: RContext) => void;
}

