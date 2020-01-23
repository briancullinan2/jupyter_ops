// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/useragent/useragent.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./useragentParser";
import { ProductContext } from "./useragentParser";
import { NameContext } from "./useragentParser";
import { VersionContext } from "./useragentParser";
import { CommentContext } from "./useragentParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `useragentParser`.
 */
export interface useragentListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `useragentParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `useragentParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `useragentParser.product`.
	 * @param ctx the parse tree
	 */
	enterProduct?: (ctx: ProductContext) => void;
	/**
	 * Exit a parse tree produced by `useragentParser.product`.
	 * @param ctx the parse tree
	 */
	exitProduct?: (ctx: ProductContext) => void;

	/**
	 * Enter a parse tree produced by `useragentParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `useragentParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `useragentParser.version`.
	 * @param ctx the parse tree
	 */
	enterVersion?: (ctx: VersionContext) => void;
	/**
	 * Exit a parse tree produced by `useragentParser.version`.
	 * @param ctx the parse tree
	 */
	exitVersion?: (ctx: VersionContext) => void;

	/**
	 * Enter a parse tree produced by `useragentParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `useragentParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

