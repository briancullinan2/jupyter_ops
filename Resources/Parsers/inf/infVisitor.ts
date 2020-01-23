// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/inf/inf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { InfContext } from "./infParser";
import { SectionContext } from "./infParser";
import { SectionheaderContext } from "./infParser";
import { StringContext } from "./infParser";
import { LineContext } from "./infParser";
import { StringlistContext } from "./infParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `infParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface infVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `infParser.inf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInf?: (ctx: InfContext) => Result;

	/**
	 * Visit a parse tree produced by `infParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `infParser.sectionheader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSectionheader?: (ctx: SectionheaderContext) => Result;

	/**
	 * Visit a parse tree produced by `infParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `infParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `infParser.stringlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringlist?: (ctx: StringlistContext) => Result;
}

