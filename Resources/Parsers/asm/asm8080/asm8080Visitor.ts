// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm8080/asm8080.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./asm8080Parser";
import { LineContext } from "./asm8080Parser";
import { InstructionContext } from "./asm8080Parser";
import { OpcodeContext } from "./asm8080Parser";
import { Register_Context } from "./asm8080Parser";
import { DirectiveContext } from "./asm8080Parser";
import { AssemblerdirectiveContext } from "./asm8080Parser";
import { LblContext } from "./asm8080Parser";
import { ExpressionlistContext } from "./asm8080Parser";
import { LabelContext } from "./asm8080Parser";
import { ExpressionContext } from "./asm8080Parser";
import { MultiplyingExpressionContext } from "./asm8080Parser";
import { ArgumentContext } from "./asm8080Parser";
import { DollarContext } from "./asm8080Parser";
import { StringContext } from "./asm8080Parser";
import { NameContext } from "./asm8080Parser";
import { NumberContext } from "./asm8080Parser";
import { CommentContext } from "./asm8080Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `asm8080Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface asm8080Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `asm8080Parser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.register_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_?: (ctx: Register_Context) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblerdirective?: (ctx: AssemblerdirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.lbl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLbl?: (ctx: LblContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.expressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionlist?: (ctx: ExpressionlistContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.dollar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDollar?: (ctx: DollarContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8080Parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

