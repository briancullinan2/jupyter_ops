// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/romannumerals/romannumerals.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `romannumeralsParser`.
 */
export interface romannumeralsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `romannumeralsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.thousands`.
	 * @param ctx the parse tree
	 */
	enterThousands?: (ctx: ThousandsContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.thousands`.
	 * @param ctx the parse tree
	 */
	exitThousands?: (ctx: ThousandsContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.thous_part`.
	 * @param ctx the parse tree
	 */
	enterThous_part?: (ctx: Thous_partContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.thous_part`.
	 * @param ctx the parse tree
	 */
	exitThous_part?: (ctx: Thous_partContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.hundreds`.
	 * @param ctx the parse tree
	 */
	enterHundreds?: (ctx: HundredsContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.hundreds`.
	 * @param ctx the parse tree
	 */
	exitHundreds?: (ctx: HundredsContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.hun_part`.
	 * @param ctx the parse tree
	 */
	enterHun_part?: (ctx: Hun_partContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.hun_part`.
	 * @param ctx the parse tree
	 */
	exitHun_part?: (ctx: Hun_partContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.hun_rep`.
	 * @param ctx the parse tree
	 */
	enterHun_rep?: (ctx: Hun_repContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.hun_rep`.
	 * @param ctx the parse tree
	 */
	exitHun_rep?: (ctx: Hun_repContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.tens`.
	 * @param ctx the parse tree
	 */
	enterTens?: (ctx: TensContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.tens`.
	 * @param ctx the parse tree
	 */
	exitTens?: (ctx: TensContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.tens_part`.
	 * @param ctx the parse tree
	 */
	enterTens_part?: (ctx: Tens_partContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.tens_part`.
	 * @param ctx the parse tree
	 */
	exitTens_part?: (ctx: Tens_partContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.tens_rep`.
	 * @param ctx the parse tree
	 */
	enterTens_rep?: (ctx: Tens_repContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.tens_rep`.
	 * @param ctx the parse tree
	 */
	exitTens_rep?: (ctx: Tens_repContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.ones`.
	 * @param ctx the parse tree
	 */
	enterOnes?: (ctx: OnesContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.ones`.
	 * @param ctx the parse tree
	 */
	exitOnes?: (ctx: OnesContext) => void;

	/**
	 * Enter a parse tree produced by `romannumeralsParser.ones_rep`.
	 * @param ctx the parse tree
	 */
	enterOnes_rep?: (ctx: Ones_repContext) => void;
	/**
	 * Exit a parse tree produced by `romannumeralsParser.ones_rep`.
	 * @param ctx the parse tree
	 */
	exitOnes_rep?: (ctx: Ones_repContext) => void;
}

