// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdp7/pdp7.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `pdp7Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface pdp7Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `pdp7Parser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarations?: (ctx: DeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.declarationRight`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationRight?: (ctx: DeclarationRightContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.eol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEol?: (ctx: EolContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `pdp7Parser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;
}

