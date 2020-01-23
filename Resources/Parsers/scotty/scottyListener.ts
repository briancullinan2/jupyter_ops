// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/scotty/scotty.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./scottyParser";
import { Program_linesContext } from "./scottyParser";
import { Var_assignContext } from "./scottyParser";
import { Fn_defContext } from "./scottyParser";
import { Prefix_expContext } from "./scottyParser";
import { IdentifierContext } from "./scottyParser";
import { Id_tailContext } from "./scottyParser";
import { NumberContext } from "./scottyParser";
import { DigitsContext } from "./scottyParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `scottyParser`.
 */
export interface scottyListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `scottyParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `scottyParser.program_lines`.
	 * @param ctx the parse tree
	 */
	enterProgram_lines?: (ctx: Program_linesContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.program_lines`.
	 * @param ctx the parse tree
	 */
	exitProgram_lines?: (ctx: Program_linesContext) => void;

	/**
	 * Enter a parse tree produced by `scottyParser.var_assign`.
	 * @param ctx the parse tree
	 */
	enterVar_assign?: (ctx: Var_assignContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.var_assign`.
	 * @param ctx the parse tree
	 */
	exitVar_assign?: (ctx: Var_assignContext) => void;

	/**
	 * Enter a parse tree produced by `scottyParser.fn_def`.
	 * @param ctx the parse tree
	 */
	enterFn_def?: (ctx: Fn_defContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.fn_def`.
	 * @param ctx the parse tree
	 */
	exitFn_def?: (ctx: Fn_defContext) => void;

	/**
	 * Enter a parse tree produced by `scottyParser.prefix_exp`.
	 * @param ctx the parse tree
	 */
	enterPrefix_exp?: (ctx: Prefix_expContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.prefix_exp`.
	 * @param ctx the parse tree
	 */
	exitPrefix_exp?: (ctx: Prefix_expContext) => void;

	/**
	 * Enter a parse tree produced by `scottyParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `scottyParser.id_tail`.
	 * @param ctx the parse tree
	 */
	enterId_tail?: (ctx: Id_tailContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.id_tail`.
	 * @param ctx the parse tree
	 */
	exitId_tail?: (ctx: Id_tailContext) => void;

	/**
	 * Enter a parse tree produced by `scottyParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `scottyParser.digits`.
	 * @param ctx the parse tree
	 */
	enterDigits?: (ctx: DigitsContext) => void;
	/**
	 * Exit a parse tree produced by `scottyParser.digits`.
	 * @param ctx the parse tree
	 */
	exitDigits?: (ctx: DigitsContext) => void;
}

