// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/quakemap/quakemap.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `quakemapParser`.
 */
export interface quakemapListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `quakemapParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;

	/**
	 * Enter a parse tree produced by `quakemapParser.entity`.
	 * @param ctx the parse tree
	 */
	enterEntity?: (ctx: EntityContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.entity`.
	 * @param ctx the parse tree
	 */
	exitEntity?: (ctx: EntityContext) => void;

	/**
	 * Enter a parse tree produced by `quakemapParser.keyvalue`.
	 * @param ctx the parse tree
	 */
	enterKeyvalue?: (ctx: KeyvalueContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.keyvalue`.
	 * @param ctx the parse tree
	 */
	exitKeyvalue?: (ctx: KeyvalueContext) => void;

	/**
	 * Enter a parse tree produced by `quakemapParser.brush`.
	 * @param ctx the parse tree
	 */
	enterBrush?: (ctx: BrushContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.brush`.
	 * @param ctx the parse tree
	 */
	exitBrush?: (ctx: BrushContext) => void;

	/**
	 * Enter a parse tree produced by `quakemapParser.brushline`.
	 * @param ctx the parse tree
	 */
	enterBrushline?: (ctx: BrushlineContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.brushline`.
	 * @param ctx the parse tree
	 */
	exitBrushline?: (ctx: BrushlineContext) => void;

	/**
	 * Enter a parse tree produced by `quakemapParser.coord`.
	 * @param ctx the parse tree
	 */
	enterCoord?: (ctx: CoordContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.coord`.
	 * @param ctx the parse tree
	 */
	exitCoord?: (ctx: CoordContext) => void;

	/**
	 * Enter a parse tree produced by `quakemapParser.num`.
	 * @param ctx the parse tree
	 */
	enterNum?: (ctx: NumContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.num`.
	 * @param ctx the parse tree
	 */
	exitNum?: (ctx: NumContext) => void;

	/**
	 * Enter a parse tree produced by `quakemapParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `quakemapParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `quakemapParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;
}

