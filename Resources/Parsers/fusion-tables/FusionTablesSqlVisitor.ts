// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fusion-tables/FusionTablesSql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FusionTablesSqlContext } from "./FusionTablesSqlParser";
import { Sql_stmtContext } from "./FusionTablesSqlParser";
import { Table_name_in_ddlContext } from "./FusionTablesSqlParser";
import { Table_name_in_dmlContext } from "./FusionTablesSqlParser";
import { Create_table_as_select_stmtContext } from "./FusionTablesSqlParser";
import { Describe_stmtContext } from "./FusionTablesSqlParser";
import { Show_tables_stmtContext } from "./FusionTablesSqlParser";
import { Alter_table_stmtContext } from "./FusionTablesSqlParser";
import { Create_view_stmtContext } from "./FusionTablesSqlParser";
import { Drop_table_stmtContext } from "./FusionTablesSqlParser";
import { Insert_stmtContext } from "./FusionTablesSqlParser";
import { Update_stmtContext } from "./FusionTablesSqlParser";
import { Column_assignmentContext } from "./FusionTablesSqlParser";
import { Delete_stmtContext } from "./FusionTablesSqlParser";
import { Eq_comparisonContext } from "./FusionTablesSqlParser";
import { Table_name_with_aliasContext } from "./FusionTablesSqlParser";
import { Select_stmtContext } from "./FusionTablesSqlParser";
import { Ordering_termContext } from "./FusionTablesSqlParser";
import { Join_clauseContext } from "./FusionTablesSqlParser";
import { Result_columnContext } from "./FusionTablesSqlParser";
import { Qualified_column_nameContext } from "./FusionTablesSqlParser";
import { Aggregate_expContext } from "./FusionTablesSqlParser";
import { ExprContext } from "./FusionTablesSqlParser";
import { Column_name_beginning_exprContext } from "./FusionTablesSqlParser";
import { Column_name_in_dmlContext } from "./FusionTablesSqlParser";
import { And_or_orContext } from "./FusionTablesSqlParser";
import { GeometryContext } from "./FusionTablesSqlParser";
import { CircleContext } from "./FusionTablesSqlParser";
import { RectangleContext } from "./FusionTablesSqlParser";
import { CoordinateContext } from "./FusionTablesSqlParser";
import { KeywordContext } from "./FusionTablesSqlParser";
import { OperatorContext } from "./FusionTablesSqlParser";
import { LiteralContext } from "./FusionTablesSqlParser";
import { Error_messageContext } from "./FusionTablesSqlParser";
import { IdentifierContext } from "./FusionTablesSqlParser";
import { Column_aliasContext } from "./FusionTablesSqlParser";
import { Table_nameContext } from "./FusionTablesSqlParser";
import { Column_nameContext } from "./FusionTablesSqlParser";
import { New_table_nameContext } from "./FusionTablesSqlParser";
import { View_nameContext } from "./FusionTablesSqlParser";
import { Table_aliasContext } from "./FusionTablesSqlParser";
import { Numeric_literalContext } from "./FusionTablesSqlParser";
import { String_literalContext } from "./FusionTablesSqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FusionTablesSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FusionTablesSqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.fusionTablesSql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFusionTablesSql?: (ctx: FusionTablesSqlContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.sql_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql_stmt?: (ctx: Sql_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.table_name_in_ddl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_name_in_ddl?: (ctx: Table_name_in_ddlContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.table_name_in_dml`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_name_in_dml?: (ctx: Table_name_in_dmlContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.create_table_as_select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table_as_select_stmt?: (ctx: Create_table_as_select_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.describe_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribe_stmt?: (ctx: Describe_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.show_tables_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShow_tables_stmt?: (ctx: Show_tables_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.alter_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.create_view_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_view_stmt?: (ctx: Create_view_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.drop_table_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_table_stmt?: (ctx: Drop_table_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.insert_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_stmt?: (ctx: Insert_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.update_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_stmt?: (ctx: Update_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.column_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_assignment?: (ctx: Column_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.delete_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_stmt?: (ctx: Delete_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.eq_comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEq_comparison?: (ctx: Eq_comparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.table_name_with_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_name_with_alias?: (ctx: Table_name_with_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_stmt?: (ctx: Select_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.ordering_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdering_term?: (ctx: Ordering_termContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.join_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_clause?: (ctx: Join_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.result_column`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult_column?: (ctx: Result_columnContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.qualified_column_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualified_column_name?: (ctx: Qualified_column_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.aggregate_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_exp?: (ctx: Aggregate_expContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.column_name_beginning_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_name_beginning_expr?: (ctx: Column_name_beginning_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.column_name_in_dml`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_name_in_dml?: (ctx: Column_name_in_dmlContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.and_or_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_or_or?: (ctx: And_or_orContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.geometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeometry?: (ctx: GeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.circle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCircle?: (ctx: CircleContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.rectangle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRectangle?: (ctx: RectangleContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.coordinate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoordinate?: (ctx: CoordinateContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.error_message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_message?: (ctx: Error_messageContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.column_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_alias?: (ctx: Column_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_name?: (ctx: Table_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.column_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_name?: (ctx: Column_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.new_table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_table_name?: (ctx: New_table_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.view_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitView_name?: (ctx: View_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.table_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_alias?: (ctx: Table_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.numeric_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_literal?: (ctx: Numeric_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `FusionTablesSqlParser.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;
}

