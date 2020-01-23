// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/redcode/redcode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./redcodeParser";
import { LineContext } from "./redcodeParser";
import { InstructionContext } from "./redcodeParser";
import { OpcodeContext } from "./redcodeParser";
import { ModifierContext } from "./redcodeParser";
import { MmodeContext } from "./redcodeParser";
import { NumberContext } from "./redcodeParser";
import { CommentContext } from "./redcodeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `redcodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface redcodeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `redcodeParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `redcodeParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `redcodeParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `redcodeParser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `redcodeParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `redcodeParser.mmode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMmode?: (ctx: MmodeContext) => Result;

	/**
	 * Visit a parse tree produced by `redcodeParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `redcodeParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

