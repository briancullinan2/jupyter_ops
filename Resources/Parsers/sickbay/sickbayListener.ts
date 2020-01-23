// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sickbay/sickbay.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SickbayContext } from "./sickbayParser";
import { LineContext } from "./sickbayParser";
import { StmtContext } from "./sickbayParser";
import { IntExprContext } from "./sickbayParser";
import { IntVarContext } from "./sickbayParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `sickbayParser`.
 */
export interface sickbayListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `sickbayParser.sickbay`.
	 * @param ctx the parse tree
	 */
	enterSickbay?: (ctx: SickbayContext) => void;
	/**
	 * Exit a parse tree produced by `sickbayParser.sickbay`.
	 * @param ctx the parse tree
	 */
	exitSickbay?: (ctx: SickbayContext) => void;

	/**
	 * Enter a parse tree produced by `sickbayParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `sickbayParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `sickbayParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `sickbayParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `sickbayParser.intExpr`.
	 * @param ctx the parse tree
	 */
	enterIntExpr?: (ctx: IntExprContext) => void;
	/**
	 * Exit a parse tree produced by `sickbayParser.intExpr`.
	 * @param ctx the parse tree
	 */
	exitIntExpr?: (ctx: IntExprContext) => void;

	/**
	 * Enter a parse tree produced by `sickbayParser.intVar`.
	 * @param ctx the parse tree
	 */
	enterIntVar?: (ctx: IntVarContext) => void;
	/**
	 * Exit a parse tree produced by `sickbayParser.intVar`.
	 * @param ctx the parse tree
	 */
	exitIntVar?: (ctx: IntVarContext) => void;
}

