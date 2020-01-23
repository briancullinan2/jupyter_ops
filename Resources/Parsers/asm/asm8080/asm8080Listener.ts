// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm8080/asm8080.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `asm8080Parser`.
 */
export interface asm8080Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `asm8080Parser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.register_`.
	 * @param ctx the parse tree
	 */
	enterRegister_?: (ctx: Register_Context) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.register_`.
	 * @param ctx the parse tree
	 */
	exitRegister_?: (ctx: Register_Context) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 */
	enterAssemblerdirective?: (ctx: AssemblerdirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 */
	exitAssemblerdirective?: (ctx: AssemblerdirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.lbl`.
	 * @param ctx the parse tree
	 */
	enterLbl?: (ctx: LblContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.lbl`.
	 * @param ctx the parse tree
	 */
	exitLbl?: (ctx: LblContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	enterExpressionlist?: (ctx: ExpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	exitExpressionlist?: (ctx: ExpressionlistContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.dollar`.
	 * @param ctx the parse tree
	 */
	enterDollar?: (ctx: DollarContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.dollar`.
	 * @param ctx the parse tree
	 */
	exitDollar?: (ctx: DollarContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `asm8080Parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `asm8080Parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

