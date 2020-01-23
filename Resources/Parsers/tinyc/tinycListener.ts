// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinyc/tinyc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./tinycParser";
import { StatementContext } from "./tinycParser";
import { Paren_exprContext } from "./tinycParser";
import { ExprContext } from "./tinycParser";
import { TestContext } from "./tinycParser";
import { SumContext } from "./tinycParser";
import { TermContext } from "./tinycParser";
import { IdContext } from "./tinycParser";
import { IntegerContext } from "./tinycParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `tinycParser`.
 */
export interface tinycListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tinycParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `tinycParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `tinycParser.paren_expr`.
	 * @param ctx the parse tree
	 */
	enterParen_expr?: (ctx: Paren_exprContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.paren_expr`.
	 * @param ctx the parse tree
	 */
	exitParen_expr?: (ctx: Paren_exprContext) => void;

	/**
	 * Enter a parse tree produced by `tinycParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `tinycParser.test`.
	 * @param ctx the parse tree
	 */
	enterTest?: (ctx: TestContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.test`.
	 * @param ctx the parse tree
	 */
	exitTest?: (ctx: TestContext) => void;

	/**
	 * Enter a parse tree produced by `tinycParser.sum`.
	 * @param ctx the parse tree
	 */
	enterSum?: (ctx: SumContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.sum`.
	 * @param ctx the parse tree
	 */
	exitSum?: (ctx: SumContext) => void;

	/**
	 * Enter a parse tree produced by `tinycParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `tinycParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `tinycParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `tinycParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;
}

