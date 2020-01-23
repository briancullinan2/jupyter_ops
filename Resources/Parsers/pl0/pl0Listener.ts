// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pl0/pl0.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `pl0Parser`.
 */
export interface pl0Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `pl0Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.consts`.
	 * @param ctx the parse tree
	 */
	enterConsts?: (ctx: ConstsContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.consts`.
	 * @param ctx the parse tree
	 */
	exitConsts?: (ctx: ConstsContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.vars`.
	 * @param ctx the parse tree
	 */
	enterVars?: (ctx: VarsContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.vars`.
	 * @param ctx the parse tree
	 */
	exitVars?: (ctx: VarsContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.procedure`.
	 * @param ctx the parse tree
	 */
	enterProcedure?: (ctx: ProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.procedure`.
	 * @param ctx the parse tree
	 */
	exitProcedure?: (ctx: ProcedureContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.assignstmt`.
	 * @param ctx the parse tree
	 */
	enterAssignstmt?: (ctx: AssignstmtContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.assignstmt`.
	 * @param ctx the parse tree
	 */
	exitAssignstmt?: (ctx: AssignstmtContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.callstmt`.
	 * @param ctx the parse tree
	 */
	enterCallstmt?: (ctx: CallstmtContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.callstmt`.
	 * @param ctx the parse tree
	 */
	exitCallstmt?: (ctx: CallstmtContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.writestmt`.
	 * @param ctx the parse tree
	 */
	enterWritestmt?: (ctx: WritestmtContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.writestmt`.
	 * @param ctx the parse tree
	 */
	exitWritestmt?: (ctx: WritestmtContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.qstmt`.
	 * @param ctx the parse tree
	 */
	enterQstmt?: (ctx: QstmtContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.qstmt`.
	 * @param ctx the parse tree
	 */
	exitQstmt?: (ctx: QstmtContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.bangstmt`.
	 * @param ctx the parse tree
	 */
	enterBangstmt?: (ctx: BangstmtContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.bangstmt`.
	 * @param ctx the parse tree
	 */
	exitBangstmt?: (ctx: BangstmtContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.beginstmt`.
	 * @param ctx the parse tree
	 */
	enterBeginstmt?: (ctx: BeginstmtContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.beginstmt`.
	 * @param ctx the parse tree
	 */
	exitBeginstmt?: (ctx: BeginstmtContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.ifstmt`.
	 * @param ctx the parse tree
	 */
	enterIfstmt?: (ctx: IfstmtContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.ifstmt`.
	 * @param ctx the parse tree
	 */
	exitIfstmt?: (ctx: IfstmtContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.whilestmt`.
	 * @param ctx the parse tree
	 */
	enterWhilestmt?: (ctx: WhilestmtContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.whilestmt`.
	 * @param ctx the parse tree
	 */
	exitWhilestmt?: (ctx: WhilestmtContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `pl0Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `pl0Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

