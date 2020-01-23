// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tiny/tiny.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tinyParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tinyVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tinyParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.stmt_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt_list?: (ctx: Stmt_listContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.assign_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_stmt?: (ctx: Assign_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.read_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRead_stmt?: (ctx: Read_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.write_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWrite_stmt?: (ctx: Write_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.id_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_list?: (ctx: Id_listContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.expr_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_list?: (ctx: Expr_listContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOp?: (ctx: OpContext) => Result;

	/**
	 * Visit a parse tree produced by `tinyParser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;
}

