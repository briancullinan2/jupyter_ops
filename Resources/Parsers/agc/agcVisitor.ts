// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/agc/agc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./agcParser";
import { LineContext } from "./agcParser";
import { Blank_lineContext } from "./agcParser";
import { Comment_lineContext } from "./agcParser";
import { Instruction_lineContext } from "./agcParser";
import { Erase_lineContext } from "./agcParser";
import { Assignment_lineContext } from "./agcParser";
import { OpcodesContext } from "./agcParser";
import { ArgumentContext } from "./agcParser";
import { WsContext } from "./agcParser";
import { EolContext } from "./agcParser";
import { CommentContext } from "./agcParser";
import { LabelContext } from "./agcParser";
import { VariableContext } from "./agcParser";
import { ExpressionContext } from "./agcParser";
import { MultiplyingExpressionContext } from "./agcParser";
import { AtomContext } from "./agcParser";
import { InteContext } from "./agcParser";
import { DecimalContext } from "./agcParser";
import { RegisterContext } from "./agcParser";
import { OpcodeContext } from "./agcParser";
import { Axt_opcodeContext } from "./agcParser";
import { Pseudo_opcodeContext } from "./agcParser";
import { Standard_opcodeContext } from "./agcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `agcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface agcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `agcParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.blank_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlank_line?: (ctx: Blank_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.comment_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment_line?: (ctx: Comment_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.instruction_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_line?: (ctx: Instruction_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.erase_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErase_line?: (ctx: Erase_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.assignment_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_line?: (ctx: Assignment_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.opcodes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcodes?: (ctx: OpcodesContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.ws`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWs?: (ctx: WsContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.eol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEol?: (ctx: EolContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.inte`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInte?: (ctx: InteContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal?: (ctx: DecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.register`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister?: (ctx: RegisterContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.axt_opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxt_opcode?: (ctx: Axt_opcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.pseudo_opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudo_opcode?: (ctx: Pseudo_opcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `agcParser.standard_opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandard_opcode?: (ctx: Standard_opcodeContext) => Result;
}

