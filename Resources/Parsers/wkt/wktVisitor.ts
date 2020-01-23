// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wkt/wkt.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GeometryContext } from "./wktParser";
import { PointGeometryContext } from "./wktParser";
import { LineStringGeometryContext } from "./wktParser";
import { PolygonGeometryContext } from "./wktParser";
import { MultiPointGeometryContext } from "./wktParser";
import { MultiLineStringGeometryContext } from "./wktParser";
import { MultiPolygonGeometryContext } from "./wktParser";
import { CircularStringGeometryContext } from "./wktParser";
import { PointOrClosedPointContext } from "./wktParser";
import { PolygonContext } from "./wktParser";
import { LineStringContext } from "./wktParser";
import { PointContext } from "./wktParser";
import { NameContext } from "./wktParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `wktParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface wktVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `wktParser.geometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeometry?: (ctx: GeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.pointGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointGeometry?: (ctx: PointGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.lineStringGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineStringGeometry?: (ctx: LineStringGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.polygonGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygonGeometry?: (ctx: PolygonGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.multiPointGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiPointGeometry?: (ctx: MultiPointGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.multiLineStringGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiLineStringGeometry?: (ctx: MultiLineStringGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.multiPolygonGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiPolygonGeometry?: (ctx: MultiPolygonGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.circularStringGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCircularStringGeometry?: (ctx: CircularStringGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.pointOrClosedPoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointOrClosedPoint?: (ctx: PointOrClosedPointContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.polygon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygon?: (ctx: PolygonContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.lineString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineString?: (ctx: LineStringContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.point`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoint?: (ctx: PointContext) => Result;

	/**
	 * Visit a parse tree produced by `wktParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;
}

