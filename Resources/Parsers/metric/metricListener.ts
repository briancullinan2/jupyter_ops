// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/metric/metric.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { UomContext } from "./metricParser";
import { MeasureContext } from "./metricParser";
import { ExponentContext } from "./metricParser";
import { PrefixContext } from "./metricParser";
import { UnitContext } from "./metricParser";
import { BaseunitContext } from "./metricParser";
import { DerivedunitContext } from "./metricParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `metricParser`.
 */
export interface metricListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `metricParser.uom`.
	 * @param ctx the parse tree
	 */
	enterUom?: (ctx: UomContext) => void;
	/**
	 * Exit a parse tree produced by `metricParser.uom`.
	 * @param ctx the parse tree
	 */
	exitUom?: (ctx: UomContext) => void;

	/**
	 * Enter a parse tree produced by `metricParser.measure`.
	 * @param ctx the parse tree
	 */
	enterMeasure?: (ctx: MeasureContext) => void;
	/**
	 * Exit a parse tree produced by `metricParser.measure`.
	 * @param ctx the parse tree
	 */
	exitMeasure?: (ctx: MeasureContext) => void;

	/**
	 * Enter a parse tree produced by `metricParser.exponent`.
	 * @param ctx the parse tree
	 */
	enterExponent?: (ctx: ExponentContext) => void;
	/**
	 * Exit a parse tree produced by `metricParser.exponent`.
	 * @param ctx the parse tree
	 */
	exitExponent?: (ctx: ExponentContext) => void;

	/**
	 * Enter a parse tree produced by `metricParser.prefix`.
	 * @param ctx the parse tree
	 */
	enterPrefix?: (ctx: PrefixContext) => void;
	/**
	 * Exit a parse tree produced by `metricParser.prefix`.
	 * @param ctx the parse tree
	 */
	exitPrefix?: (ctx: PrefixContext) => void;

	/**
	 * Enter a parse tree produced by `metricParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `metricParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `metricParser.baseunit`.
	 * @param ctx the parse tree
	 */
	enterBaseunit?: (ctx: BaseunitContext) => void;
	/**
	 * Exit a parse tree produced by `metricParser.baseunit`.
	 * @param ctx the parse tree
	 */
	exitBaseunit?: (ctx: BaseunitContext) => void;

	/**
	 * Enter a parse tree produced by `metricParser.derivedunit`.
	 * @param ctx the parse tree
	 */
	enterDerivedunit?: (ctx: DerivedunitContext) => void;
	/**
	 * Exit a parse tree produced by `metricParser.derivedunit`.
	 * @param ctx the parse tree
	 */
	exitDerivedunit?: (ctx: DerivedunitContext) => void;
}

