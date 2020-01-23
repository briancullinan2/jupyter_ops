// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdp7/pdp7.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./pdp7Parser";
import { LineContext } from "./pdp7Parser";
import { DeclarationsContext } from "./pdp7Parser";
import { DeclarationContext } from "./pdp7Parser";
import { DeclarationRightContext } from "./pdp7Parser";
import { InstructionContext } from "./pdp7Parser";
import { ArgumentContext } from "./pdp7Parser";
import { AssignmentContext } from "./pdp7Parser";
import { SymbolContext } from "./pdp7Parser";
import { ExpressionContext } from "./pdp7Parser";
import { MultiplyingExpressionContext } from "./pdp7Parser";
import { AtomContext } from "./pdp7Parser";
import { StringContext } from "./pdp7Parser";
import { EolContext } from "./pdp7Parser";
import { CommentContext } from "./pdp7Parser";
import { LabelContext } from "./pdp7Parser";
import { VariableContext } from "./pdp7Parser";
import { OpcodeContext } from "./pdp7Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `pdp7Parser`.
 */
export interface pdp7Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `pdp7Parser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.declarations`.
	 * @param ctx the parse tree
	 */
	enterDeclarations?: (ctx: DeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.declarations`.
	 * @param ctx the parse tree
	 */
	exitDeclarations?: (ctx: DeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.declarationRight`.
	 * @param ctx the parse tree
	 */
	enterDeclarationRight?: (ctx: DeclarationRightContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.declarationRight`.
	 * @param ctx the parse tree
	 */
	exitDeclarationRight?: (ctx: DeclarationRightContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.eol`.
	 * @param ctx the parse tree
	 */
	enterEol?: (ctx: EolContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.eol`.
	 * @param ctx the parse tree
	 */
	exitEol?: (ctx: EolContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `pdp7Parser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `pdp7Parser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;
}

