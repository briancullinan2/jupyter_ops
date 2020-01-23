// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/unicode16/classify.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CodepointContext } from "./classifyParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `classifyParser`.
 */
export interface classifyListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `classifyParser.codepoint`.
	 * @param ctx the parse tree
	 */
	enterCodepoint?: (ctx: CodepointContext) => void;
	/**
	 * Exit a parse tree produced by `classifyParser.codepoint`.
	 * @param ctx the parse tree
	 */
	exitCodepoint?: (ctx: CodepointContext) => void;
}

