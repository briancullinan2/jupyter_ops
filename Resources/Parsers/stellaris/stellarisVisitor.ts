// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stellaris/stellaris.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ContentContext } from "./stellarisParser";
import { ExprContext } from "./stellarisParser";
import { KeyvalContext } from "./stellarisParser";
import { KeyContext } from "./stellarisParser";
import { ValContext } from "./stellarisParser";
import { AttribContext } from "./stellarisParser";
import { AccessorContext } from "./stellarisParser";
import { GroupContext } from "./stellarisParser";
import { IdContext } from "./stellarisParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `stellarisParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface stellarisVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `stellarisParser.content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContent?: (ctx: ContentContext) => Result;

	/**
	 * Visit a parse tree produced by `stellarisParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `stellarisParser.keyval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyval?: (ctx: KeyvalContext) => Result;

	/**
	 * Visit a parse tree produced by `stellarisParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `stellarisParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVal?: (ctx: ValContext) => Result;

	/**
	 * Visit a parse tree produced by `stellarisParser.attrib`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrib?: (ctx: AttribContext) => Result;

	/**
	 * Visit a parse tree produced by `stellarisParser.accessor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessor?: (ctx: AccessorContext) => Result;

	/**
	 * Visit a parse tree produced by `stellarisParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `stellarisParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
}

