// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/postalcode/postalcode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PostalcodeContext } from "./postalcodeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `postalcodeParser`.
 */
export interface postalcodeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `postalcodeParser.postalcode`.
	 * @param ctx the parse tree
	 */
	enterPostalcode?: (ctx: PostalcodeContext) => void;
	/**
	 * Exit a parse tree produced by `postalcodeParser.postalcode`.
	 * @param ctx the parse tree
	 */
	exitPostalcode?: (ctx: PostalcodeContext) => void;
}

