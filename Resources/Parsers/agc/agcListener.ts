// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/agc/agc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `agcParser`.
 */
export interface agcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `agcParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.blank_line`.
	 * @param ctx the parse tree
	 */
	enterBlank_line?: (ctx: Blank_lineContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.blank_line`.
	 * @param ctx the parse tree
	 */
	exitBlank_line?: (ctx: Blank_lineContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.comment_line`.
	 * @param ctx the parse tree
	 */
	enterComment_line?: (ctx: Comment_lineContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.comment_line`.
	 * @param ctx the parse tree
	 */
	exitComment_line?: (ctx: Comment_lineContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.instruction_line`.
	 * @param ctx the parse tree
	 */
	enterInstruction_line?: (ctx: Instruction_lineContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.instruction_line`.
	 * @param ctx the parse tree
	 */
	exitInstruction_line?: (ctx: Instruction_lineContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.erase_line`.
	 * @param ctx the parse tree
	 */
	enterErase_line?: (ctx: Erase_lineContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.erase_line`.
	 * @param ctx the parse tree
	 */
	exitErase_line?: (ctx: Erase_lineContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.assignment_line`.
	 * @param ctx the parse tree
	 */
	enterAssignment_line?: (ctx: Assignment_lineContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.assignment_line`.
	 * @param ctx the parse tree
	 */
	exitAssignment_line?: (ctx: Assignment_lineContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.opcodes`.
	 * @param ctx the parse tree
	 */
	enterOpcodes?: (ctx: OpcodesContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.opcodes`.
	 * @param ctx the parse tree
	 */
	exitOpcodes?: (ctx: OpcodesContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.ws`.
	 * @param ctx the parse tree
	 */
	enterWs?: (ctx: WsContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.ws`.
	 * @param ctx the parse tree
	 */
	exitWs?: (ctx: WsContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.eol`.
	 * @param ctx the parse tree
	 */
	enterEol?: (ctx: EolContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.eol`.
	 * @param ctx the parse tree
	 */
	exitEol?: (ctx: EolContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.inte`.
	 * @param ctx the parse tree
	 */
	enterInte?: (ctx: InteContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.inte`.
	 * @param ctx the parse tree
	 */
	exitInte?: (ctx: InteContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.decimal`.
	 * @param ctx the parse tree
	 */
	enterDecimal?: (ctx: DecimalContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.decimal`.
	 * @param ctx the parse tree
	 */
	exitDecimal?: (ctx: DecimalContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.register`.
	 * @param ctx the parse tree
	 */
	enterRegister?: (ctx: RegisterContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.register`.
	 * @param ctx the parse tree
	 */
	exitRegister?: (ctx: RegisterContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.axt_opcode`.
	 * @param ctx the parse tree
	 */
	enterAxt_opcode?: (ctx: Axt_opcodeContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.axt_opcode`.
	 * @param ctx the parse tree
	 */
	exitAxt_opcode?: (ctx: Axt_opcodeContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.pseudo_opcode`.
	 * @param ctx the parse tree
	 */
	enterPseudo_opcode?: (ctx: Pseudo_opcodeContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.pseudo_opcode`.
	 * @param ctx the parse tree
	 */
	exitPseudo_opcode?: (ctx: Pseudo_opcodeContext) => void;

	/**
	 * Enter a parse tree produced by `agcParser.standard_opcode`.
	 * @param ctx the parse tree
	 */
	enterStandard_opcode?: (ctx: Standard_opcodeContext) => void;
	/**
	 * Exit a parse tree produced by `agcParser.standard_opcode`.
	 * @param ctx the parse tree
	 */
	exitStandard_opcode?: (ctx: Standard_opcodeContext) => void;
}

