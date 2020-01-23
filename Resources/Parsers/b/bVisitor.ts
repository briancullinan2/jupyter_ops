// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/b/b.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./bParser";
import { DefinitionContext } from "./bParser";
import { IvalContext } from "./bParser";
import { StatementContext } from "./bParser";
import { NullstmtContext } from "./bParser";
import { ExpressionstmtContext } from "./bParser";
import { BlockstmtContext } from "./bParser";
import { ReturnstmtContext } from "./bParser";
import { GotostmtContext } from "./bParser";
import { SwitchstmtContext } from "./bParser";
import { WhilestmtContext } from "./bParser";
import { IfstmtContext } from "./bParser";
import { CasestmtContext } from "./bParser";
import { ExternsmtContext } from "./bParser";
import { AutosmtContext } from "./bParser";
import { RvalueContext } from "./bParser";
import { TernaryContext } from "./bParser";
import { ComparisonContext } from "./bParser";
import { AssignmentContext } from "./bParser";
import { ExpressionContext } from "./bParser";
import { FunctioninvocationContext } from "./bParser";
import { FunctionparametersContext } from "./bParser";
import { AssignContext } from "./bParser";
import { IncdecContext } from "./bParser";
import { UnaryContext } from "./bParser";
import { BinaryContext } from "./bParser";
import { LvalueContext } from "./bParser";
import { ConstantContext } from "./bParser";
import { NameContext } from "./bParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `bParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface bVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `bParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.ival`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIval?: (ctx: IvalContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.nullstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullstmt?: (ctx: NullstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.expressionstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionstmt?: (ctx: ExpressionstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.blockstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockstmt?: (ctx: BlockstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.returnstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnstmt?: (ctx: ReturnstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.gotostmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotostmt?: (ctx: GotostmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.switchstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchstmt?: (ctx: SwitchstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.whilestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhilestmt?: (ctx: WhilestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.ifstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfstmt?: (ctx: IfstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.casestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCasestmt?: (ctx: CasestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.externsmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternsmt?: (ctx: ExternsmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.autosmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAutosmt?: (ctx: AutosmtContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.rvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRvalue?: (ctx: RvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.ternary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernary?: (ctx: TernaryContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.functioninvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctioninvocation?: (ctx: FunctioninvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.functionparameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionparameters?: (ctx: FunctionparametersContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.incdec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncdec?: (ctx: IncdecContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.unary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary?: (ctx: UnaryContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.binary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary?: (ctx: BinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `bParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;
}

