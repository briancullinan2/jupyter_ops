// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cookie/cookie.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CookieContext } from "./cookieParser";
import { NameContext } from "./cookieParser";
import { Av_pairsContext } from "./cookieParser";
import { Av_pairContext } from "./cookieParser";
import { AttrContext } from "./cookieParser";
import { ValueContext } from "./cookieParser";
import { WordContext } from "./cookieParser";
import { TokenContext } from "./cookieParser";
import { Quoted_stringContext } from "./cookieParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `cookieParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface cookieVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `cookieParser.cookie`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCookie?: (ctx: CookieContext) => Result;

	/**
	 * Visit a parse tree produced by `cookieParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `cookieParser.av_pairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAv_pairs?: (ctx: Av_pairsContext) => Result;

	/**
	 * Visit a parse tree produced by `cookieParser.av_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAv_pair?: (ctx: Av_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `cookieParser.attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr?: (ctx: AttrContext) => Result;

	/**
	 * Visit a parse tree produced by `cookieParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `cookieParser.word`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWord?: (ctx: WordContext) => Result;

	/**
	 * Visit a parse tree produced by `cookieParser.token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToken?: (ctx: TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `cookieParser.quoted_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoted_string?: (ctx: Quoted_stringContext) => Result;
}

