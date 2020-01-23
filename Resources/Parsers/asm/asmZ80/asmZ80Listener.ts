// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asmZ80/asmZ80.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `asmZ80Parser`.
 */
export interface asmZ80Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `asmZ80Parser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.register_`.
	 * @param ctx the parse tree
	 */
	enterRegister_?: (ctx: Register_Context) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.register_`.
	 * @param ctx the parse tree
	 */
	exitRegister_?: (ctx: Register_Context) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 */
	enterAssemblerdirective?: (ctx: AssemblerdirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 */
	exitAssemblerdirective?: (ctx: AssemblerdirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.lbl`.
	 * @param ctx the parse tree
	 */
	enterLbl?: (ctx: LblContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.lbl`.
	 * @param ctx the parse tree
	 */
	exitLbl?: (ctx: LblContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	enterExpressionlist?: (ctx: ExpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	exitExpressionlist?: (ctx: ExpressionlistContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.dollar`.
	 * @param ctx the parse tree
	 */
	enterDollar?: (ctx: DollarContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.dollar`.
	 * @param ctx the parse tree
	 */
	exitDollar?: (ctx: DollarContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `asmZ80Parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `asmZ80Parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

