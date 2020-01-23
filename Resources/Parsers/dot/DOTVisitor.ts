// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dot/DOT.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GraphContext } from "./DOTParser";
import { Stmt_listContext } from "./DOTParser";
import { StmtContext } from "./DOTParser";
import { Attr_stmtContext } from "./DOTParser";
import { Attr_listContext } from "./DOTParser";
import { A_listContext } from "./DOTParser";
import { Edge_stmtContext } from "./DOTParser";
import { EdgeRHSContext } from "./DOTParser";
import { EdgeopContext } from "./DOTParser";
import { Node_stmtContext } from "./DOTParser";
import { Node_idContext } from "./DOTParser";
import { PortContext } from "./DOTParser";
import { SubgraphContext } from "./DOTParser";
import { IdContext } from "./DOTParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DOTParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DOTVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DOTParser.graph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraph?: (ctx: GraphContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.stmt_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt_list?: (ctx: Stmt_listContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.attr_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_stmt?: (ctx: Attr_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.attr_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_list?: (ctx: Attr_listContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.a_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitA_list?: (ctx: A_listContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.edge_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdge_stmt?: (ctx: Edge_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.edgeRHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdgeRHS?: (ctx: EdgeRHSContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.edgeop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdgeop?: (ctx: EdgeopContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.node_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_stmt?: (ctx: Node_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.node_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_id?: (ctx: Node_idContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort?: (ctx: PortContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.subgraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubgraph?: (ctx: SubgraphContext) => Result;

	/**
	 * Visit a parse tree produced by `DOTParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
}

