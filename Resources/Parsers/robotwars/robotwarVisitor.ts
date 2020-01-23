// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/robotwars/robotwar.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./robotwarParser";
import { LineContext } from "./robotwarParser";
import { LabelContext } from "./robotwarParser";
import { StatementContext } from "./robotwarParser";
import { AccumstatementContext } from "./robotwarParser";
import { AccumexpressionContext } from "./robotwarParser";
import { GosubstatementContext } from "./robotwarParser";
import { GotostatementContext } from "./robotwarParser";
import { TostatementContext } from "./robotwarParser";
import { EndsubstatementContext } from "./robotwarParser";
import { IfstatementContext } from "./robotwarParser";
import { ConditionContext } from "./robotwarParser";
import { ExpressionContext } from "./robotwarParser";
import { OperationContext } from "./robotwarParser";
import { ComparisonContext } from "./robotwarParser";
import { ArgumentContext } from "./robotwarParser";
import { RegisterContext } from "./robotwarParser";
import { NumberContext } from "./robotwarParser";
import { CommentContext } from "./robotwarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `robotwarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface robotwarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `robotwarParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.accumstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccumstatement?: (ctx: AccumstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.accumexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccumexpression?: (ctx: AccumexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.gosubstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGosubstatement?: (ctx: GosubstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.gotostatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotostatement?: (ctx: GotostatementContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.tostatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTostatement?: (ctx: TostatementContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.endsubstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndsubstatement?: (ctx: EndsubstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.ifstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfstatement?: (ctx: IfstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperation?: (ctx: OperationContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.register`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister?: (ctx: RegisterContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `robotwarParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

