// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fusion-tables/FusionTablesSql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `FusionTablesSqlParser`.
 */
export interface FusionTablesSqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.fusionTablesSql`.
	 * @param ctx the parse tree
	 */
	enterFusionTablesSql?: (ctx: FusionTablesSqlContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.fusionTablesSql`.
	 * @param ctx the parse tree
	 */
	exitFusionTablesSql?: (ctx: FusionTablesSqlContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.sql_stmt`.
	 * @param ctx the parse tree
	 */
	enterSql_stmt?: (ctx: Sql_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.sql_stmt`.
	 * @param ctx the parse tree
	 */
	exitSql_stmt?: (ctx: Sql_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.table_name_in_ddl`.
	 * @param ctx the parse tree
	 */
	enterTable_name_in_ddl?: (ctx: Table_name_in_ddlContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.table_name_in_ddl`.
	 * @param ctx the parse tree
	 */
	exitTable_name_in_ddl?: (ctx: Table_name_in_ddlContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.table_name_in_dml`.
	 * @param ctx the parse tree
	 */
	enterTable_name_in_dml?: (ctx: Table_name_in_dmlContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.table_name_in_dml`.
	 * @param ctx the parse tree
	 */
	exitTable_name_in_dml?: (ctx: Table_name_in_dmlContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.create_table_as_select_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_as_select_stmt?: (ctx: Create_table_as_select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.create_table_as_select_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_as_select_stmt?: (ctx: Create_table_as_select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.describe_stmt`.
	 * @param ctx the parse tree
	 */
	enterDescribe_stmt?: (ctx: Describe_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.describe_stmt`.
	 * @param ctx the parse tree
	 */
	exitDescribe_stmt?: (ctx: Describe_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.show_tables_stmt`.
	 * @param ctx the parse tree
	 */
	enterShow_tables_stmt?: (ctx: Show_tables_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.show_tables_stmt`.
	 * @param ctx the parse tree
	 */
	exitShow_tables_stmt?: (ctx: Show_tables_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.alter_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_stmt?: (ctx: Alter_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.alter_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.create_view_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_view_stmt?: (ctx: Create_view_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.create_view_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_view_stmt?: (ctx: Create_view_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.drop_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_table_stmt?: (ctx: Drop_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.drop_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_table_stmt?: (ctx: Drop_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.insert_stmt`.
	 * @param ctx the parse tree
	 */
	enterInsert_stmt?: (ctx: Insert_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.insert_stmt`.
	 * @param ctx the parse tree
	 */
	exitInsert_stmt?: (ctx: Insert_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.update_stmt`.
	 * @param ctx the parse tree
	 */
	enterUpdate_stmt?: (ctx: Update_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.update_stmt`.
	 * @param ctx the parse tree
	 */
	exitUpdate_stmt?: (ctx: Update_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.column_assignment`.
	 * @param ctx the parse tree
	 */
	enterColumn_assignment?: (ctx: Column_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.column_assignment`.
	 * @param ctx the parse tree
	 */
	exitColumn_assignment?: (ctx: Column_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.delete_stmt`.
	 * @param ctx the parse tree
	 */
	enterDelete_stmt?: (ctx: Delete_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.delete_stmt`.
	 * @param ctx the parse tree
	 */
	exitDelete_stmt?: (ctx: Delete_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.eq_comparison`.
	 * @param ctx the parse tree
	 */
	enterEq_comparison?: (ctx: Eq_comparisonContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.eq_comparison`.
	 * @param ctx the parse tree
	 */
	exitEq_comparison?: (ctx: Eq_comparisonContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.table_name_with_alias`.
	 * @param ctx the parse tree
	 */
	enterTable_name_with_alias?: (ctx: Table_name_with_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.table_name_with_alias`.
	 * @param ctx the parse tree
	 */
	exitTable_name_with_alias?: (ctx: Table_name_with_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	enterSelect_stmt?: (ctx: Select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	exitSelect_stmt?: (ctx: Select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.ordering_term`.
	 * @param ctx the parse tree
	 */
	enterOrdering_term?: (ctx: Ordering_termContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.ordering_term`.
	 * @param ctx the parse tree
	 */
	exitOrdering_term?: (ctx: Ordering_termContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.join_clause`.
	 * @param ctx the parse tree
	 */
	enterJoin_clause?: (ctx: Join_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.join_clause`.
	 * @param ctx the parse tree
	 */
	exitJoin_clause?: (ctx: Join_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.result_column`.
	 * @param ctx the parse tree
	 */
	enterResult_column?: (ctx: Result_columnContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.result_column`.
	 * @param ctx the parse tree
	 */
	exitResult_column?: (ctx: Result_columnContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.qualified_column_name`.
	 * @param ctx the parse tree
	 */
	enterQualified_column_name?: (ctx: Qualified_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.qualified_column_name`.
	 * @param ctx the parse tree
	 */
	exitQualified_column_name?: (ctx: Qualified_column_nameContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.aggregate_exp`.
	 * @param ctx the parse tree
	 */
	enterAggregate_exp?: (ctx: Aggregate_expContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.aggregate_exp`.
	 * @param ctx the parse tree
	 */
	exitAggregate_exp?: (ctx: Aggregate_expContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.column_name_beginning_expr`.
	 * @param ctx the parse tree
	 */
	enterColumn_name_beginning_expr?: (ctx: Column_name_beginning_exprContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.column_name_beginning_expr`.
	 * @param ctx the parse tree
	 */
	exitColumn_name_beginning_expr?: (ctx: Column_name_beginning_exprContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.column_name_in_dml`.
	 * @param ctx the parse tree
	 */
	enterColumn_name_in_dml?: (ctx: Column_name_in_dmlContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.column_name_in_dml`.
	 * @param ctx the parse tree
	 */
	exitColumn_name_in_dml?: (ctx: Column_name_in_dmlContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.and_or_or`.
	 * @param ctx the parse tree
	 */
	enterAnd_or_or?: (ctx: And_or_orContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.and_or_or`.
	 * @param ctx the parse tree
	 */
	exitAnd_or_or?: (ctx: And_or_orContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.geometry`.
	 * @param ctx the parse tree
	 */
	enterGeometry?: (ctx: GeometryContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.geometry`.
	 * @param ctx the parse tree
	 */
	exitGeometry?: (ctx: GeometryContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.circle`.
	 * @param ctx the parse tree
	 */
	enterCircle?: (ctx: CircleContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.circle`.
	 * @param ctx the parse tree
	 */
	exitCircle?: (ctx: CircleContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.rectangle`.
	 * @param ctx the parse tree
	 */
	enterRectangle?: (ctx: RectangleContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.rectangle`.
	 * @param ctx the parse tree
	 */
	exitRectangle?: (ctx: RectangleContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.coordinate`.
	 * @param ctx the parse tree
	 */
	enterCoordinate?: (ctx: CoordinateContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.coordinate`.
	 * @param ctx the parse tree
	 */
	exitCoordinate?: (ctx: CoordinateContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.error_message`.
	 * @param ctx the parse tree
	 */
	enterError_message?: (ctx: Error_messageContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.error_message`.
	 * @param ctx the parse tree
	 */
	exitError_message?: (ctx: Error_messageContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias?: (ctx: Column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias?: (ctx: Column_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.table_name`.
	 * @param ctx the parse tree
	 */
	enterTable_name?: (ctx: Table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.table_name`.
	 * @param ctx the parse tree
	 */
	exitTable_name?: (ctx: Table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.column_name`.
	 * @param ctx the parse tree
	 */
	enterColumn_name?: (ctx: Column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.column_name`.
	 * @param ctx the parse tree
	 */
	exitColumn_name?: (ctx: Column_nameContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.new_table_name`.
	 * @param ctx the parse tree
	 */
	enterNew_table_name?: (ctx: New_table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.new_table_name`.
	 * @param ctx the parse tree
	 */
	exitNew_table_name?: (ctx: New_table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.view_name`.
	 * @param ctx the parse tree
	 */
	enterView_name?: (ctx: View_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.view_name`.
	 * @param ctx the parse tree
	 */
	exitView_name?: (ctx: View_nameContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	enterTable_alias?: (ctx: Table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	exitTable_alias?: (ctx: Table_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	enterNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	exitNumeric_literal?: (ctx: Numeric_literalContext) => void;

	/**
	 * Enter a parse tree produced by `FusionTablesSqlParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `FusionTablesSqlParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;
}

