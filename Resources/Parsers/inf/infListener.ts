// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/inf/inf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { InfContext } from "./infParser";
import { SectionContext } from "./infParser";
import { SectionheaderContext } from "./infParser";
import { StringContext } from "./infParser";
import { LineContext } from "./infParser";
import { StringlistContext } from "./infParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `infParser`.
 */
export interface infListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `infParser.inf`.
	 * @param ctx the parse tree
	 */
	enterInf?: (ctx: InfContext) => void;
	/**
	 * Exit a parse tree produced by `infParser.inf`.
	 * @param ctx the parse tree
	 */
	exitInf?: (ctx: InfContext) => void;

	/**
	 * Enter a parse tree produced by `infParser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `infParser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `infParser.sectionheader`.
	 * @param ctx the parse tree
	 */
	enterSectionheader?: (ctx: SectionheaderContext) => void;
	/**
	 * Exit a parse tree produced by `infParser.sectionheader`.
	 * @param ctx the parse tree
	 */
	exitSectionheader?: (ctx: SectionheaderContext) => void;

	/**
	 * Enter a parse tree produced by `infParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `infParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `infParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `infParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `infParser.stringlist`.
	 * @param ctx the parse tree
	 */
	enterStringlist?: (ctx: StringlistContext) => void;
	/**
	 * Exit a parse tree produced by `infParser.stringlist`.
	 * @param ctx the parse tree
	 */
	exitStringlist?: (ctx: StringlistContext) => void;
}

