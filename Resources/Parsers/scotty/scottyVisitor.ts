// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/scotty/scotty.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `scottyParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface scottyVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `scottyParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `scottyParser.program_lines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram_lines?: (ctx: Program_linesContext) => Result;

	/**
	 * Visit a parse tree produced by `scottyParser.var_assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_assign?: (ctx: Var_assignContext) => Result;

	/**
	 * Visit a parse tree produced by `scottyParser.fn_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFn_def?: (ctx: Fn_defContext) => Result;

	/**
	 * Visit a parse tree produced by `scottyParser.prefix_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix_exp?: (ctx: Prefix_expContext) => Result;

	/**
	 * Visit a parse tree produced by `scottyParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `scottyParser.id_tail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_tail?: (ctx: Id_tailContext) => Result;

	/**
	 * Visit a parse tree produced by `scottyParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `scottyParser.digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigits?: (ctx: DigitsContext) => Result;
}

