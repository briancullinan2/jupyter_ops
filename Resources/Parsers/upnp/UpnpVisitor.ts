// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/upnp/Upnp.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SearchCritContext } from "./UpnpParser";
import { SearchExpContext } from "./UpnpParser";
import { RelExpContext } from "./UpnpParser";
import { QuotedValContext } from "./UpnpParser";
import { EscapedQuoteContext } from "./UpnpParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UpnpParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface UpnpVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `UpnpParser.searchCrit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchCrit?: (ctx: SearchCritContext) => Result;

	/**
	 * Visit a parse tree produced by `UpnpParser.searchExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchExp?: (ctx: SearchExpContext) => Result;

	/**
	 * Visit a parse tree produced by `UpnpParser.relExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelExp?: (ctx: RelExpContext) => Result;

	/**
	 * Visit a parse tree produced by `UpnpParser.quotedVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedVal?: (ctx: QuotedValContext) => Result;

	/**
	 * Visit a parse tree produced by `UpnpParser.escapedQuote`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEscapedQuote?: (ctx: EscapedQuoteContext) => Result;
}

