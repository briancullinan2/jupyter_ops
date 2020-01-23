// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lcc/lcc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LccContext } from "./lccParser";
import { TopicContext } from "./lccParser";
import { SubtopicContext } from "./lccParser";
import { SubclassesContext } from "./lccParser";
import { SubclassContext } from "./lccParser";
import { CuttersContext } from "./lccParser";
import { CutterContext } from "./lccParser";
import { DateContext } from "./lccParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `lccParser`.
 */
export interface lccListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `lccParser.lcc`.
	 * @param ctx the parse tree
	 */
	enterLcc?: (ctx: LccContext) => void;
	/**
	 * Exit a parse tree produced by `lccParser.lcc`.
	 * @param ctx the parse tree
	 */
	exitLcc?: (ctx: LccContext) => void;

	/**
	 * Enter a parse tree produced by `lccParser.topic`.
	 * @param ctx the parse tree
	 */
	enterTopic?: (ctx: TopicContext) => void;
	/**
	 * Exit a parse tree produced by `lccParser.topic`.
	 * @param ctx the parse tree
	 */
	exitTopic?: (ctx: TopicContext) => void;

	/**
	 * Enter a parse tree produced by `lccParser.subtopic`.
	 * @param ctx the parse tree
	 */
	enterSubtopic?: (ctx: SubtopicContext) => void;
	/**
	 * Exit a parse tree produced by `lccParser.subtopic`.
	 * @param ctx the parse tree
	 */
	exitSubtopic?: (ctx: SubtopicContext) => void;

	/**
	 * Enter a parse tree produced by `lccParser.subclasses`.
	 * @param ctx the parse tree
	 */
	enterSubclasses?: (ctx: SubclassesContext) => void;
	/**
	 * Exit a parse tree produced by `lccParser.subclasses`.
	 * @param ctx the parse tree
	 */
	exitSubclasses?: (ctx: SubclassesContext) => void;

	/**
	 * Enter a parse tree produced by `lccParser.subclass`.
	 * @param ctx the parse tree
	 */
	enterSubclass?: (ctx: SubclassContext) => void;
	/**
	 * Exit a parse tree produced by `lccParser.subclass`.
	 * @param ctx the parse tree
	 */
	exitSubclass?: (ctx: SubclassContext) => void;

	/**
	 * Enter a parse tree produced by `lccParser.cutters`.
	 * @param ctx the parse tree
	 */
	enterCutters?: (ctx: CuttersContext) => void;
	/**
	 * Exit a parse tree produced by `lccParser.cutters`.
	 * @param ctx the parse tree
	 */
	exitCutters?: (ctx: CuttersContext) => void;

	/**
	 * Enter a parse tree produced by `lccParser.cutter`.
	 * @param ctx the parse tree
	 */
	enterCutter?: (ctx: CutterContext) => void;
	/**
	 * Exit a parse tree produced by `lccParser.cutter`.
	 * @param ctx the parse tree
	 */
	exitCutter?: (ctx: CutterContext) => void;

	/**
	 * Enter a parse tree produced by `lccParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `lccParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;
}

