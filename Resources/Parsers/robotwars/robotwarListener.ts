// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/robotwars/robotwar.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `robotwarParser`.
 */
export interface robotwarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `robotwarParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.accumstatement`.
	 * @param ctx the parse tree
	 */
	enterAccumstatement?: (ctx: AccumstatementContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.accumstatement`.
	 * @param ctx the parse tree
	 */
	exitAccumstatement?: (ctx: AccumstatementContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.accumexpression`.
	 * @param ctx the parse tree
	 */
	enterAccumexpression?: (ctx: AccumexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.accumexpression`.
	 * @param ctx the parse tree
	 */
	exitAccumexpression?: (ctx: AccumexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.gosubstatement`.
	 * @param ctx the parse tree
	 */
	enterGosubstatement?: (ctx: GosubstatementContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.gosubstatement`.
	 * @param ctx the parse tree
	 */
	exitGosubstatement?: (ctx: GosubstatementContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.gotostatement`.
	 * @param ctx the parse tree
	 */
	enterGotostatement?: (ctx: GotostatementContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.gotostatement`.
	 * @param ctx the parse tree
	 */
	exitGotostatement?: (ctx: GotostatementContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.tostatement`.
	 * @param ctx the parse tree
	 */
	enterTostatement?: (ctx: TostatementContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.tostatement`.
	 * @param ctx the parse tree
	 */
	exitTostatement?: (ctx: TostatementContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.endsubstatement`.
	 * @param ctx the parse tree
	 */
	enterEndsubstatement?: (ctx: EndsubstatementContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.endsubstatement`.
	 * @param ctx the parse tree
	 */
	exitEndsubstatement?: (ctx: EndsubstatementContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.ifstatement`.
	 * @param ctx the parse tree
	 */
	enterIfstatement?: (ctx: IfstatementContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.ifstatement`.
	 * @param ctx the parse tree
	 */
	exitIfstatement?: (ctx: IfstatementContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.operation`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.operation`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.register`.
	 * @param ctx the parse tree
	 */
	enterRegister?: (ctx: RegisterContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.register`.
	 * @param ctx the parse tree
	 */
	exitRegister?: (ctx: RegisterContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `robotwarParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `robotwarParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

