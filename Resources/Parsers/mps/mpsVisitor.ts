// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mps/mps.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModellContext } from "./mpsParser";
import { FirstrowContext } from "./mpsParser";
import { RowsContext } from "./mpsParser";
import { ColumnsContext } from "./mpsParser";
import { RhsContext } from "./mpsParser";
import { RangesContext } from "./mpsParser";
import { BoundsContext } from "./mpsParser";
import { EndataContext } from "./mpsParser";
import { RowdatacardContext } from "./mpsParser";
import { ColumndatacardsContext } from "./mpsParser";
import { RhsdatacardsContext } from "./mpsParser";
import { RangesdatacardsContext } from "./mpsParser";
import { BoundsdatacardsContext } from "./mpsParser";
import { ColumndatacardContext } from "./mpsParser";
import { RhsdatacardContext } from "./mpsParser";
import { RangesdatacardContext } from "./mpsParser";
import { BoundsdatacardContext } from "./mpsParser";
import { IntblockContext } from "./mpsParser";
import { StartmarkerContext } from "./mpsParser";
import { EndmarkerContext } from "./mpsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mpsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface mpsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `mpsParser.modell`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModell?: (ctx: ModellContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.firstrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstrow?: (ctx: FirstrowContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.rows`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRows?: (ctx: RowsContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.columns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumns?: (ctx: ColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.rhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRhs?: (ctx: RhsContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.ranges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRanges?: (ctx: RangesContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.bounds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBounds?: (ctx: BoundsContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.endata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndata?: (ctx: EndataContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.rowdatacard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowdatacard?: (ctx: RowdatacardContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.columndatacards`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumndatacards?: (ctx: ColumndatacardsContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.rhsdatacards`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRhsdatacards?: (ctx: RhsdatacardsContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.rangesdatacards`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangesdatacards?: (ctx: RangesdatacardsContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.boundsdatacards`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundsdatacards?: (ctx: BoundsdatacardsContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.columndatacard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumndatacard?: (ctx: ColumndatacardContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.rhsdatacard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRhsdatacard?: (ctx: RhsdatacardContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.rangesdatacard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangesdatacard?: (ctx: RangesdatacardContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.boundsdatacard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundsdatacard?: (ctx: BoundsdatacardContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.intblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntblock?: (ctx: IntblockContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.startmarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartmarker?: (ctx: StartmarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `mpsParser.endmarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndmarker?: (ctx: EndmarkerContext) => Result;
}

