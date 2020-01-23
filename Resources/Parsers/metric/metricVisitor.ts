// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/metric/metric.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UomContext } from "./metricParser";
import { MeasureContext } from "./metricParser";
import { ExponentContext } from "./metricParser";
import { PrefixContext } from "./metricParser";
import { UnitContext } from "./metricParser";
import { BaseunitContext } from "./metricParser";
import { DerivedunitContext } from "./metricParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `metricParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface metricVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `metricParser.uom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUom?: (ctx: UomContext) => Result;

	/**
	 * Visit a parse tree produced by `metricParser.measure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasure?: (ctx: MeasureContext) => Result;

	/**
	 * Visit a parse tree produced by `metricParser.exponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponent?: (ctx: ExponentContext) => Result;

	/**
	 * Visit a parse tree produced by `metricParser.prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix?: (ctx: PrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `metricParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by `metricParser.baseunit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseunit?: (ctx: BaseunitContext) => Result;

	/**
	 * Visit a parse tree produced by `metricParser.derivedunit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerivedunit?: (ctx: DerivedunitContext) => Result;
}

