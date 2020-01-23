// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/creole/creole.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `creoleParser`.
 */
export interface creoleListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `creoleParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.markup`.
	 * @param ctx the parse tree
	 */
	enterMarkup?: (ctx: MarkupContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.markup`.
	 * @param ctx the parse tree
	 */
	exitMarkup?: (ctx: MarkupContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.bold`.
	 * @param ctx the parse tree
	 */
	enterBold?: (ctx: BoldContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.bold`.
	 * @param ctx the parse tree
	 */
	exitBold?: (ctx: BoldContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.italics`.
	 * @param ctx the parse tree
	 */
	enterItalics?: (ctx: ItalicsContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.italics`.
	 * @param ctx the parse tree
	 */
	exitItalics?: (ctx: ItalicsContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.href`.
	 * @param ctx the parse tree
	 */
	enterHref?: (ctx: HrefContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.href`.
	 * @param ctx the parse tree
	 */
	exitHref?: (ctx: HrefContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.image`.
	 * @param ctx the parse tree
	 */
	enterImage?: (ctx: ImageContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.image`.
	 * @param ctx the parse tree
	 */
	exitImage?: (ctx: ImageContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.hline`.
	 * @param ctx the parse tree
	 */
	enterHline?: (ctx: HlineContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.hline`.
	 * @param ctx the parse tree
	 */
	exitHline?: (ctx: HlineContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.listitem`.
	 * @param ctx the parse tree
	 */
	enterListitem?: (ctx: ListitemContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.listitem`.
	 * @param ctx the parse tree
	 */
	exitListitem?: (ctx: ListitemContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.tableheader`.
	 * @param ctx the parse tree
	 */
	enterTableheader?: (ctx: TableheaderContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.tableheader`.
	 * @param ctx the parse tree
	 */
	exitTableheader?: (ctx: TableheaderContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.tablerow`.
	 * @param ctx the parse tree
	 */
	enterTablerow?: (ctx: TablerowContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.tablerow`.
	 * @param ctx the parse tree
	 */
	exitTablerow?: (ctx: TablerowContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `creoleParser.nowiki`.
	 * @param ctx the parse tree
	 */
	enterNowiki?: (ctx: NowikiContext) => void;
	/**
	 * Exit a parse tree produced by `creoleParser.nowiki`.
	 * @param ctx the parse tree
	 */
	exitNowiki?: (ctx: NowikiContext) => void;
}

