// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/romannumerals/romannumerals.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionContext } from "./romannumeralsParser";
import { ThousandsContext } from "./romannumeralsParser";
import { Thous_partContext } from "./romannumeralsParser";
import { HundredsContext } from "./romannumeralsParser";
import { Hun_partContext } from "./romannumeralsParser";
import { Hun_repContext } from "./romannumeralsParser";
import { TensContext } from "./romannumeralsParser";
import { Tens_partContext } from "./romannumeralsParser";
import { Tens_repContext } from "./romannumeralsParser";
import { OnesContext } from "./romannumeralsParser";
import { Ones_repContext } from "./romannumeralsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `romannumeralsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface romannumeralsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `romannumeralsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.thousands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThousands?: (ctx: ThousandsContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.thous_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThous_part?: (ctx: Thous_partContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.hundreds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHundreds?: (ctx: HundredsContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.hun_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHun_part?: (ctx: Hun_partContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.hun_rep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHun_rep?: (ctx: Hun_repContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.tens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens?: (ctx: TensContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.tens_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens_part?: (ctx: Tens_partContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.tens_rep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTens_rep?: (ctx: Tens_repContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.ones`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnes?: (ctx: OnesContext) => Result;

	/**
	 * Visit a parse tree produced by `romannumeralsParser.ones_rep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnes_rep?: (ctx: Ones_repContext) => Result;
}

