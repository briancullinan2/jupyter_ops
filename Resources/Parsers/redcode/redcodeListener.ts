// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/redcode/redcode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./redcodeParser";
import { LineContext } from "./redcodeParser";
import { InstructionContext } from "./redcodeParser";
import { OpcodeContext } from "./redcodeParser";
import { ModifierContext } from "./redcodeParser";
import { MmodeContext } from "./redcodeParser";
import { NumberContext } from "./redcodeParser";
import { CommentContext } from "./redcodeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `redcodeParser`.
 */
export interface redcodeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `redcodeParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `redcodeParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `redcodeParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `redcodeParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `redcodeParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `redcodeParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `redcodeParser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `redcodeParser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;

	/**
	 * Enter a parse tree produced by `redcodeParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `redcodeParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `redcodeParser.mmode`.
	 * @param ctx the parse tree
	 */
	enterMmode?: (ctx: MmodeContext) => void;
	/**
	 * Exit a parse tree produced by `redcodeParser.mmode`.
	 * @param ctx the parse tree
	 */
	exitMmode?: (ctx: MmodeContext) => void;

	/**
	 * Enter a parse tree produced by `redcodeParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `redcodeParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `redcodeParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `redcodeParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

