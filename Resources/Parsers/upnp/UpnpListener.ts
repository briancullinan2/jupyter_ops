// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/upnp/Upnp.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SearchCritContext } from "./UpnpParser";
import { SearchExpContext } from "./UpnpParser";
import { RelExpContext } from "./UpnpParser";
import { QuotedValContext } from "./UpnpParser";
import { EscapedQuoteContext } from "./UpnpParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `UpnpParser`.
 */
export interface UpnpListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `UpnpParser.searchCrit`.
	 * @param ctx the parse tree
	 */
	enterSearchCrit?: (ctx: SearchCritContext) => void;
	/**
	 * Exit a parse tree produced by `UpnpParser.searchCrit`.
	 * @param ctx the parse tree
	 */
	exitSearchCrit?: (ctx: SearchCritContext) => void;

	/**
	 * Enter a parse tree produced by `UpnpParser.searchExp`.
	 * @param ctx the parse tree
	 */
	enterSearchExp?: (ctx: SearchExpContext) => void;
	/**
	 * Exit a parse tree produced by `UpnpParser.searchExp`.
	 * @param ctx the parse tree
	 */
	exitSearchExp?: (ctx: SearchExpContext) => void;

	/**
	 * Enter a parse tree produced by `UpnpParser.relExp`.
	 * @param ctx the parse tree
	 */
	enterRelExp?: (ctx: RelExpContext) => void;
	/**
	 * Exit a parse tree produced by `UpnpParser.relExp`.
	 * @param ctx the parse tree
	 */
	exitRelExp?: (ctx: RelExpContext) => void;

	/**
	 * Enter a parse tree produced by `UpnpParser.quotedVal`.
	 * @param ctx the parse tree
	 */
	enterQuotedVal?: (ctx: QuotedValContext) => void;
	/**
	 * Exit a parse tree produced by `UpnpParser.quotedVal`.
	 * @param ctx the parse tree
	 */
	exitQuotedVal?: (ctx: QuotedValContext) => void;

	/**
	 * Enter a parse tree produced by `UpnpParser.escapedQuote`.
	 * @param ctx the parse tree
	 */
	enterEscapedQuote?: (ctx: EscapedQuoteContext) => void;
	/**
	 * Exit a parse tree produced by `UpnpParser.escapedQuote`.
	 * @param ctx the parse tree
	 */
	exitEscapedQuote?: (ctx: EscapedQuoteContext) => void;
}

