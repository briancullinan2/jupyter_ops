// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asmZ80/asmZ80.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./asmZ80Parser";
import { LineContext } from "./asmZ80Parser";
import { InstructionContext } from "./asmZ80Parser";
import { OpcodeContext } from "./asmZ80Parser";
import { Register_Context } from "./asmZ80Parser";
import { DirectiveContext } from "./asmZ80Parser";
import { AssemblerdirectiveContext } from "./asmZ80Parser";
import { LblContext } from "./asmZ80Parser";
import { ExpressionlistContext } from "./asmZ80Parser";
import { LabelContext } from "./asmZ80Parser";
import { ExpressionContext } from "./asmZ80Parser";
import { MultiplyingExpressionContext } from "./asmZ80Parser";
import { ArgumentContext } from "./asmZ80Parser";
import { DollarContext } from "./asmZ80Parser";
import { StringContext } from "./asmZ80Parser";
import { NameContext } from "./asmZ80Parser";
import { NumberContext } from "./asmZ80Parser";
import { CommentContext } from "./asmZ80Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `asmZ80Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface asmZ80Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `asmZ80Parser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.register_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_?: (ctx: Register_Context) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblerdirective?: (ctx: AssemblerdirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.lbl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLbl?: (ctx: LblContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.expressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionlist?: (ctx: ExpressionlistContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.dollar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDollar?: (ctx: DollarContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `asmZ80Parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

