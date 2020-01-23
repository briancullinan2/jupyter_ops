// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pl0/pl0.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./pl0Parser";
import { BlockContext } from "./pl0Parser";
import { ConstsContext } from "./pl0Parser";
import { VarsContext } from "./pl0Parser";
import { ProcedureContext } from "./pl0Parser";
import { StatementContext } from "./pl0Parser";
import { AssignstmtContext } from "./pl0Parser";
import { CallstmtContext } from "./pl0Parser";
import { WritestmtContext } from "./pl0Parser";
import { QstmtContext } from "./pl0Parser";
import { BangstmtContext } from "./pl0Parser";
import { BeginstmtContext } from "./pl0Parser";
import { IfstmtContext } from "./pl0Parser";
import { WhilestmtContext } from "./pl0Parser";
import { ConditionContext } from "./pl0Parser";
import { ExpressionContext } from "./pl0Parser";
import { TermContext } from "./pl0Parser";
import { FactorContext } from "./pl0Parser";
import { IdentContext } from "./pl0Parser";
import { NumberContext } from "./pl0Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `pl0Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface pl0Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `pl0Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.consts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsts?: (ctx: ConstsContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.vars`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVars?: (ctx: VarsContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.procedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure?: (ctx: ProcedureContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.assignstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignstmt?: (ctx: AssignstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.callstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallstmt?: (ctx: CallstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.writestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWritestmt?: (ctx: WritestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.qstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQstmt?: (ctx: QstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.bangstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBangstmt?: (ctx: BangstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.beginstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeginstmt?: (ctx: BeginstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.ifstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfstmt?: (ctx: IfstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.whilestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhilestmt?: (ctx: WhilestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;

	/**
	 * Visit a parse tree produced by `pl0Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

