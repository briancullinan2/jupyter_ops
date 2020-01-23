// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/useragent/useragent.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./useragentParser";
import { ProductContext } from "./useragentParser";
import { NameContext } from "./useragentParser";
import { VersionContext } from "./useragentParser";
import { CommentContext } from "./useragentParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `useragentParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface useragentVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `useragentParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `useragentParser.product`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProduct?: (ctx: ProductContext) => Result;

	/**
	 * Visit a parse tree produced by `useragentParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `useragentParser.version`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion?: (ctx: VersionContext) => Result;

	/**
	 * Visit a parse tree produced by `useragentParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

