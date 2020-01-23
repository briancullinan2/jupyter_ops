// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tiny/tiny.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./tinyParser";
import { Stmt_listContext } from "./tinyParser";
import { StmtContext } from "./tinyParser";
import { Assign_stmtContext } from "./tinyParser";
import { Read_stmtContext } from "./tinyParser";
import { Write_stmtContext } from "./tinyParser";
import { Id_listContext } from "./tinyParser";
import { Expr_listContext } from "./tinyParser";
import { ExprContext } from "./tinyParser";
import { FactorContext } from "./tinyParser";
import { IntegerContext } from "./tinyParser";
import { OpContext } from "./tinyParser";
import { IdentContext } from "./tinyParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `tinyParser`.
 */
export interface tinyListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tinyParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	enterStmt_list?: (ctx: Stmt_listContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	exitStmt_list?: (ctx: Stmt_listContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.assign_stmt`.
	 * @param ctx the parse tree
	 */
	enterAssign_stmt?: (ctx: Assign_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.assign_stmt`.
	 * @param ctx the parse tree
	 */
	exitAssign_stmt?: (ctx: Assign_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.read_stmt`.
	 * @param ctx the parse tree
	 */
	enterRead_stmt?: (ctx: Read_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.read_stmt`.
	 * @param ctx the parse tree
	 */
	exitRead_stmt?: (ctx: Read_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.write_stmt`.
	 * @param ctx the parse tree
	 */
	enterWrite_stmt?: (ctx: Write_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.write_stmt`.
	 * @param ctx the parse tree
	 */
	exitWrite_stmt?: (ctx: Write_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.id_list`.
	 * @param ctx the parse tree
	 */
	enterId_list?: (ctx: Id_listContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.id_list`.
	 * @param ctx the parse tree
	 */
	exitId_list?: (ctx: Id_listContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.expr_list`.
	 * @param ctx the parse tree
	 */
	enterExpr_list?: (ctx: Expr_listContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.expr_list`.
	 * @param ctx the parse tree
	 */
	exitExpr_list?: (ctx: Expr_listContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.op`.
	 * @param ctx the parse tree
	 */
	enterOp?: (ctx: OpContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.op`.
	 * @param ctx the parse tree
	 */
	exitOp?: (ctx: OpContext) => void;

	/**
	 * Enter a parse tree produced by `tinyParser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `tinyParser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;
}

