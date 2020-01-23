// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lcc/lcc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LccContext } from "./lccParser";
import { TopicContext } from "./lccParser";
import { SubtopicContext } from "./lccParser";
import { SubclassesContext } from "./lccParser";
import { SubclassContext } from "./lccParser";
import { CuttersContext } from "./lccParser";
import { CutterContext } from "./lccParser";
import { DateContext } from "./lccParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `lccParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface lccVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `lccParser.lcc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLcc?: (ctx: LccContext) => Result;

	/**
	 * Visit a parse tree produced by `lccParser.topic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopic?: (ctx: TopicContext) => Result;

	/**
	 * Visit a parse tree produced by `lccParser.subtopic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtopic?: (ctx: SubtopicContext) => Result;

	/**
	 * Visit a parse tree produced by `lccParser.subclasses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubclasses?: (ctx: SubclassesContext) => Result;

	/**
	 * Visit a parse tree produced by `lccParser.subclass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubclass?: (ctx: SubclassContext) => Result;

	/**
	 * Visit a parse tree produced by `lccParser.cutters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCutters?: (ctx: CuttersContext) => Result;

	/**
	 * Visit a parse tree produced by `lccParser.cutter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCutter?: (ctx: CutterContext) => Result;

	/**
	 * Visit a parse tree produced by `lccParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;
}

