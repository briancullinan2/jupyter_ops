// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/quakemap/quakemap.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MapContext } from "./quakemapParser";
import { EntityContext } from "./quakemapParser";
import { KeyvalueContext } from "./quakemapParser";
import { BrushContext } from "./quakemapParser";
import { BrushlineContext } from "./quakemapParser";
import { CoordContext } from "./quakemapParser";
import { NumContext } from "./quakemapParser";
import { StringContext } from "./quakemapParser";
import { TextContext } from "./quakemapParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `quakemapParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface quakemapVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `quakemapParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `quakemapParser.entity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity?: (ctx: EntityContext) => Result;

	/**
	 * Visit a parse tree produced by `quakemapParser.keyvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyvalue?: (ctx: KeyvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `quakemapParser.brush`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrush?: (ctx: BrushContext) => Result;

	/**
	 * Visit a parse tree produced by `quakemapParser.brushline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrushline?: (ctx: BrushlineContext) => Result;

	/**
	 * Visit a parse tree produced by `quakemapParser.coord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoord?: (ctx: CoordContext) => Result;

	/**
	 * Visit a parse tree produced by `quakemapParser.num`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNum?: (ctx: NumContext) => Result;

	/**
	 * Visit a parse tree produced by `quakemapParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `quakemapParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;
}

