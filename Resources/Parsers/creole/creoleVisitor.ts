// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/creole/creole.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DocumentContext } from "./creoleParser";
import { LineContext } from "./creoleParser";
import { MarkupContext } from "./creoleParser";
import { TextContext } from "./creoleParser";
import { BoldContext } from "./creoleParser";
import { ItalicsContext } from "./creoleParser";
import { HrefContext } from "./creoleParser";
import { ImageContext } from "./creoleParser";
import { HlineContext } from "./creoleParser";
import { ListitemContext } from "./creoleParser";
import { TableheaderContext } from "./creoleParser";
import { TablerowContext } from "./creoleParser";
import { TitleContext } from "./creoleParser";
import { NowikiContext } from "./creoleParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `creoleParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface creoleVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `creoleParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.markup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMarkup?: (ctx: MarkupContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.bold`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBold?: (ctx: BoldContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.italics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItalics?: (ctx: ItalicsContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.href`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHref?: (ctx: HrefContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.image`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImage?: (ctx: ImageContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.hline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHline?: (ctx: HlineContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.listitem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListitem?: (ctx: ListitemContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.tableheader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableheader?: (ctx: TableheaderContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.tablerow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablerow?: (ctx: TablerowContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.title`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitle?: (ctx: TitleContext) => Result;

	/**
	 * Visit a parse tree produced by `creoleParser.nowiki`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNowiki?: (ctx: NowikiContext) => Result;
}

