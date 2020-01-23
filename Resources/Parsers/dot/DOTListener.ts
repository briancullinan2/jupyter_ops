// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dot/DOT.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `DOTParser`.
 */
export interface DOTListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DOTParser.graph`.
	 * @param ctx the parse tree
	 */
	enterGraph?: (ctx: GraphContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.graph`.
	 * @param ctx the parse tree
	 */
	exitGraph?: (ctx: GraphContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	enterStmt_list?: (ctx: Stmt_listContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	exitStmt_list?: (ctx: Stmt_listContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.attr_stmt`.
	 * @param ctx the parse tree
	 */
	enterAttr_stmt?: (ctx: Attr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.attr_stmt`.
	 * @param ctx the parse tree
	 */
	exitAttr_stmt?: (ctx: Attr_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.attr_list`.
	 * @param ctx the parse tree
	 */
	enterAttr_list?: (ctx: Attr_listContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.attr_list`.
	 * @param ctx the parse tree
	 */
	exitAttr_list?: (ctx: Attr_listContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.a_list`.
	 * @param ctx the parse tree
	 */
	enterA_list?: (ctx: A_listContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.a_list`.
	 * @param ctx the parse tree
	 */
	exitA_list?: (ctx: A_listContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.edge_stmt`.
	 * @param ctx the parse tree
	 */
	enterEdge_stmt?: (ctx: Edge_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.edge_stmt`.
	 * @param ctx the parse tree
	 */
	exitEdge_stmt?: (ctx: Edge_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.edgeRHS`.
	 * @param ctx the parse tree
	 */
	enterEdgeRHS?: (ctx: EdgeRHSContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.edgeRHS`.
	 * @param ctx the parse tree
	 */
	exitEdgeRHS?: (ctx: EdgeRHSContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.edgeop`.
	 * @param ctx the parse tree
	 */
	enterEdgeop?: (ctx: EdgeopContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.edgeop`.
	 * @param ctx the parse tree
	 */
	exitEdgeop?: (ctx: EdgeopContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.node_stmt`.
	 * @param ctx the parse tree
	 */
	enterNode_stmt?: (ctx: Node_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.node_stmt`.
	 * @param ctx the parse tree
	 */
	exitNode_stmt?: (ctx: Node_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.node_id`.
	 * @param ctx the parse tree
	 */
	enterNode_id?: (ctx: Node_idContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.node_id`.
	 * @param ctx the parse tree
	 */
	exitNode_id?: (ctx: Node_idContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?: (ctx: PortContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?: (ctx: PortContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.subgraph`.
	 * @param ctx the parse tree
	 */
	enterSubgraph?: (ctx: SubgraphContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.subgraph`.
	 * @param ctx the parse tree
	 */
	exitSubgraph?: (ctx: SubgraphContext) => void;

	/**
	 * Enter a parse tree produced by `DOTParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `DOTParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
}

