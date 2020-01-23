// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sickbay/sickbay.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SickbayContext } from "./sickbayParser";
import { LineContext } from "./sickbayParser";
import { StmtContext } from "./sickbayParser";
import { IntExprContext } from "./sickbayParser";
import { IntVarContext } from "./sickbayParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `sickbayParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface sickbayVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `sickbayParser.sickbay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSickbay?: (ctx: SickbayContext) => Result;

	/**
	 * Visit a parse tree produced by `sickbayParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `sickbayParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `sickbayParser.intExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntExpr?: (ctx: IntExprContext) => Result;

	/**
	 * Visit a parse tree produced by `sickbayParser.intVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntVar?: (ctx: IntVarContext) => Result;
}

