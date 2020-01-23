// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wkt/wkt.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `wktParser`.
 */
export interface wktListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `wktParser.geometry`.
	 * @param ctx the parse tree
	 */
	enterGeometry?: (ctx: GeometryContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.geometry`.
	 * @param ctx the parse tree
	 */
	exitGeometry?: (ctx: GeometryContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.pointGeometry`.
	 * @param ctx the parse tree
	 */
	enterPointGeometry?: (ctx: PointGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.pointGeometry`.
	 * @param ctx the parse tree
	 */
	exitPointGeometry?: (ctx: PointGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.lineStringGeometry`.
	 * @param ctx the parse tree
	 */
	enterLineStringGeometry?: (ctx: LineStringGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.lineStringGeometry`.
	 * @param ctx the parse tree
	 */
	exitLineStringGeometry?: (ctx: LineStringGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.polygonGeometry`.
	 * @param ctx the parse tree
	 */
	enterPolygonGeometry?: (ctx: PolygonGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.polygonGeometry`.
	 * @param ctx the parse tree
	 */
	exitPolygonGeometry?: (ctx: PolygonGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.multiPointGeometry`.
	 * @param ctx the parse tree
	 */
	enterMultiPointGeometry?: (ctx: MultiPointGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.multiPointGeometry`.
	 * @param ctx the parse tree
	 */
	exitMultiPointGeometry?: (ctx: MultiPointGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.multiLineStringGeometry`.
	 * @param ctx the parse tree
	 */
	enterMultiLineStringGeometry?: (ctx: MultiLineStringGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.multiLineStringGeometry`.
	 * @param ctx the parse tree
	 */
	exitMultiLineStringGeometry?: (ctx: MultiLineStringGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.multiPolygonGeometry`.
	 * @param ctx the parse tree
	 */
	enterMultiPolygonGeometry?: (ctx: MultiPolygonGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.multiPolygonGeometry`.
	 * @param ctx the parse tree
	 */
	exitMultiPolygonGeometry?: (ctx: MultiPolygonGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.circularStringGeometry`.
	 * @param ctx the parse tree
	 */
	enterCircularStringGeometry?: (ctx: CircularStringGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.circularStringGeometry`.
	 * @param ctx the parse tree
	 */
	exitCircularStringGeometry?: (ctx: CircularStringGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.pointOrClosedPoint`.
	 * @param ctx the parse tree
	 */
	enterPointOrClosedPoint?: (ctx: PointOrClosedPointContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.pointOrClosedPoint`.
	 * @param ctx the parse tree
	 */
	exitPointOrClosedPoint?: (ctx: PointOrClosedPointContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.polygon`.
	 * @param ctx the parse tree
	 */
	enterPolygon?: (ctx: PolygonContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.polygon`.
	 * @param ctx the parse tree
	 */
	exitPolygon?: (ctx: PolygonContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.lineString`.
	 * @param ctx the parse tree
	 */
	enterLineString?: (ctx: LineStringContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.lineString`.
	 * @param ctx the parse tree
	 */
	exitLineString?: (ctx: LineStringContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.point`.
	 * @param ctx the parse tree
	 */
	enterPoint?: (ctx: PointContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.point`.
	 * @param ctx the parse tree
	 */
	exitPoint?: (ctx: PointContext) => void;

	/**
	 * Enter a parse tree produced by `wktParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `wktParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;
}

