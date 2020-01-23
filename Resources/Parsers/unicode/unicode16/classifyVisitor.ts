// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/unicode16/classify.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CodepointContext } from "./classifyParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `classifyParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface classifyVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `classifyParser.codepoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodepoint?: (ctx: CodepointContext) => Result;
}

