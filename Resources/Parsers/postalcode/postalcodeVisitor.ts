// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/postalcode/postalcode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PostalcodeContext } from "./postalcodeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `postalcodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface postalcodeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `postalcodeParser.postalcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostalcode?: (ctx: PostalcodeContext) => Result;
}

