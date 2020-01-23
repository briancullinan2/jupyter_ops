// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm6502/asm6502.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `asm6502Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface asm6502Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `asm6502Parser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.assemblerinstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblerinstruction?: (ctx: AssemblerinstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.assembleropcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssembleropcode?: (ctx: AssembleropcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.lbl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLbl?: (ctx: LblContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.argumentlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentlist?: (ctx: ArgumentlistContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix?: (ctx: PrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `asm6502Parser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;
}

