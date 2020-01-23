// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cookie/cookie.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `cookieParser`.
 */
export interface cookieListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `cookieParser.cookie`.
	 * @param ctx the parse tree
	 */
	enterCookie?: (ctx: CookieContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.cookie`.
	 * @param ctx the parse tree
	 */
	exitCookie?: (ctx: CookieContext) => void;

	/**
	 * Enter a parse tree produced by `cookieParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `cookieParser.av_pairs`.
	 * @param ctx the parse tree
	 */
	enterAv_pairs?: (ctx: Av_pairsContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.av_pairs`.
	 * @param ctx the parse tree
	 */
	exitAv_pairs?: (ctx: Av_pairsContext) => void;

	/**
	 * Enter a parse tree produced by `cookieParser.av_pair`.
	 * @param ctx the parse tree
	 */
	enterAv_pair?: (ctx: Av_pairContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.av_pair`.
	 * @param ctx the parse tree
	 */
	exitAv_pair?: (ctx: Av_pairContext) => void;

	/**
	 * Enter a parse tree produced by `cookieParser.attr`.
	 * @param ctx the parse tree
	 */
	enterAttr?: (ctx: AttrContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.attr`.
	 * @param ctx the parse tree
	 */
	exitAttr?: (ctx: AttrContext) => void;

	/**
	 * Enter a parse tree produced by `cookieParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `cookieParser.word`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.word`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;

	/**
	 * Enter a parse tree produced by `cookieParser.token`.
	 * @param ctx the parse tree
	 */
	enterToken?: (ctx: TokenContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.token`.
	 * @param ctx the parse tree
	 */
	exitToken?: (ctx: TokenContext) => void;

	/**
	 * Enter a parse tree produced by `cookieParser.quoted_string`.
	 * @param ctx the parse tree
	 */
	enterQuoted_string?: (ctx: Quoted_stringContext) => void;
	/**
	 * Exit a parse tree produced by `cookieParser.quoted_string`.
	 * @param ctx the parse tree
	 */
	exitQuoted_string?: (ctx: Quoted_stringContext) => void;
}

