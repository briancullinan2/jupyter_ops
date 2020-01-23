// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm6502/asm6502.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./asm6502Parser";
import { LineContext } from "./asm6502Parser";
import { InstructionContext } from "./asm6502Parser";
import { AssemblerinstructionContext } from "./asm6502Parser";
import { AssembleropcodeContext } from "./asm6502Parser";
import { LblContext } from "./asm6502Parser";
import { ArgumentlistContext } from "./asm6502Parser";
import { LabelContext } from "./asm6502Parser";
import { ArgumentContext } from "./asm6502Parser";
import { PrefixContext } from "./asm6502Parser";
import { StringContext } from "./asm6502Parser";
import { NameContext } from "./asm6502Parser";
import { NumberContext } from "./asm6502Parser";
import { CommentContext } from "./asm6502Parser";
import { OpcodeContext } from "./asm6502Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `asm6502Parser`.
 */
export interface asm6502Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `asm6502Parser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.assemblerinstruction`.
	 * @param ctx the parse tree
	 */
	enterAssemblerinstruction?: (ctx: AssemblerinstructionContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.assemblerinstruction`.
	 * @param ctx the parse tree
	 */
	exitAssemblerinstruction?: (ctx: AssemblerinstructionContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.assembleropcode`.
	 * @param ctx the parse tree
	 */
	enterAssembleropcode?: (ctx: AssembleropcodeContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.assembleropcode`.
	 * @param ctx the parse tree
	 */
	exitAssembleropcode?: (ctx: AssembleropcodeContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.lbl`.
	 * @param ctx the parse tree
	 */
	enterLbl?: (ctx: LblContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.lbl`.
	 * @param ctx the parse tree
	 */
	exitLbl?: (ctx: LblContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.argumentlist`.
	 * @param ctx the parse tree
	 */
	enterArgumentlist?: (ctx: ArgumentlistContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.argumentlist`.
	 * @param ctx the parse tree
	 */
	exitArgumentlist?: (ctx: ArgumentlistContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.prefix`.
	 * @param ctx the parse tree
	 */
	enterPrefix?: (ctx: PrefixContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.prefix`.
	 * @param ctx the parse tree
	 */
	exitPrefix?: (ctx: PrefixContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `asm6502Parser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `asm6502Parser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;
}

