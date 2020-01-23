// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sql/sqlite/SQLite.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./SQLiteParser";
import { ErrorContext } from "./SQLiteParser";
import { Sql_stmt_listContext } from "./SQLiteParser";
import { Sql_stmtContext } from "./SQLiteParser";
import { Alter_table_stmtContext } from "./SQLiteParser";
import { Analyze_stmtContext } from "./SQLiteParser";
import { Attach_stmtContext } from "./SQLiteParser";
import { Begin_stmtContext } from "./SQLiteParser";
import { Commit_stmtContext } from "./SQLiteParser";
import { Compound_select_stmtContext } from "./SQLiteParser";
import { Create_index_stmtContext } from "./SQLiteParser";
import { Create_table_stmtContext } from "./SQLiteParser";
import { Create_trigger_stmtContext } from "./SQLiteParser";
import { Create_view_stmtContext } from "./SQLiteParser";
import { Create_virtual_table_stmtContext } from "./SQLiteParser";
import { Delete_stmtContext } from "./SQLiteParser";
import { Delete_stmt_limitedContext } from "./SQLiteParser";
import { Detach_stmtContext } from "./SQLiteParser";
import { Drop_index_stmtContext } from "./SQLiteParser";
import { Drop_table_stmtContext } from "./SQLiteParser";
import { Drop_trigger_stmtContext } from "./SQLiteParser";
import { Drop_view_stmtContext } from "./SQLiteParser";
import { Factored_select_stmtContext } from "./SQLiteParser";
import { Insert_stmtContext } from "./SQLiteParser";
import { Pragma_stmtContext } from "./SQLiteParser";
import { Reindex_stmtContext } from "./SQLiteParser";
import { Release_stmtContext } from "./SQLiteParser";
import { Rollback_stmtContext } from "./SQLiteParser";
import { Savepoint_stmtContext } from "./SQLiteParser";
import { Simple_select_stmtContext } from "./SQLiteParser";
import { Select_stmtContext } from "./SQLiteParser";
import { Select_or_valuesContext } from "./SQLiteParser";
import { Update_stmtContext } from "./SQLiteParser";
import { Update_stmt_limitedContext } from "./SQLiteParser";
import { Vacuum_stmtContext } from "./SQLiteParser";
import { Column_defContext } from "./SQLiteParser";
import { Type_nameContext } from "./SQLiteParser";
import { Column_constraintContext } from "./SQLiteParser";
import { Conflict_clauseContext } from "./SQLiteParser";
import { ExprContext } from "./SQLiteParser";
import { Foreign_key_clauseContext } from "./SQLiteParser";
import { Raise_functionContext } from "./SQLiteParser";
import { Indexed_columnContext } from "./SQLiteParser";
import { Table_constraintContext } from "./SQLiteParser";
import { With_clauseContext } from "./SQLiteParser";
import { Qualified_table_nameContext } from "./SQLiteParser";
import { Ordering_termContext } from "./SQLiteParser";
import { Pragma_valueContext } from "./SQLiteParser";
import { Common_table_expressionContext } from "./SQLiteParser";
import { Result_columnContext } from "./SQLiteParser";
import { Table_or_subqueryContext } from "./SQLiteParser";
import { Join_clauseContext } from "./SQLiteParser";
import { Join_operatorContext } from "./SQLiteParser";
import { Join_constraintContext } from "./SQLiteParser";
import { Select_coreContext } from "./SQLiteParser";
import { Compound_operatorContext } from "./SQLiteParser";
import { Cte_table_nameContext } from "./SQLiteParser";
import { Signed_numberContext } from "./SQLiteParser";
import { Literal_valueContext } from "./SQLiteParser";
import { Unary_operatorContext } from "./SQLiteParser";
import { Error_messageContext } from "./SQLiteParser";
import { Module_argumentContext } from "./SQLiteParser";
import { Column_aliasContext } from "./SQLiteParser";
import { KeywordContext } from "./SQLiteParser";
import { NameContext } from "./SQLiteParser";
import { Function_nameContext } from "./SQLiteParser";
import { Database_nameContext } from "./SQLiteParser";
import { Table_nameContext } from "./SQLiteParser";
import { Table_or_index_nameContext } from "./SQLiteParser";
import { New_table_nameContext } from "./SQLiteParser";
import { Column_nameContext } from "./SQLiteParser";
import { Collation_nameContext } from "./SQLiteParser";
import { Foreign_tableContext } from "./SQLiteParser";
import { Index_nameContext } from "./SQLiteParser";
import { Trigger_nameContext } from "./SQLiteParser";
import { View_nameContext } from "./SQLiteParser";
import { Module_nameContext } from "./SQLiteParser";
import { Pragma_nameContext } from "./SQLiteParser";
import { Savepoint_nameContext } from "./SQLiteParser";
import { Table_aliasContext } from "./SQLiteParser";
import { Transaction_nameContext } from "./SQLiteParser";
import { Any_nameContext } from "./SQLiteParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SQLiteParser`.
 */
export interface SQLiteListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SQLiteParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.error`.
	 * @param ctx the parse tree
	 */
	enterError?: (ctx: ErrorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.error`.
	 * @param ctx the parse tree
	 */
	exitError?: (ctx: ErrorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.sql_stmt_list`.
	 * @param ctx the parse tree
	 */
	enterSql_stmt_list?: (ctx: Sql_stmt_listContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.sql_stmt_list`.
	 * @param ctx the parse tree
	 */
	exitSql_stmt_list?: (ctx: Sql_stmt_listContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.sql_stmt`.
	 * @param ctx the parse tree
	 */
	enterSql_stmt?: (ctx: Sql_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.sql_stmt`.
	 * @param ctx the parse tree
	 */
	exitSql_stmt?: (ctx: Sql_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.alter_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_stmt?: (ctx: Alter_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.alter_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.analyze_stmt`.
	 * @param ctx the parse tree
	 */
	enterAnalyze_stmt?: (ctx: Analyze_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.analyze_stmt`.
	 * @param ctx the parse tree
	 */
	exitAnalyze_stmt?: (ctx: Analyze_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.attach_stmt`.
	 * @param ctx the parse tree
	 */
	enterAttach_stmt?: (ctx: Attach_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.attach_stmt`.
	 * @param ctx the parse tree
	 */
	exitAttach_stmt?: (ctx: Attach_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.begin_stmt`.
	 * @param ctx the parse tree
	 */
	enterBegin_stmt?: (ctx: Begin_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.begin_stmt`.
	 * @param ctx the parse tree
	 */
	exitBegin_stmt?: (ctx: Begin_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.commit_stmt`.
	 * @param ctx the parse tree
	 */
	enterCommit_stmt?: (ctx: Commit_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.commit_stmt`.
	 * @param ctx the parse tree
	 */
	exitCommit_stmt?: (ctx: Commit_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.compound_select_stmt`.
	 * @param ctx the parse tree
	 */
	enterCompound_select_stmt?: (ctx: Compound_select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.compound_select_stmt`.
	 * @param ctx the parse tree
	 */
	exitCompound_select_stmt?: (ctx: Compound_select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.create_index_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_index_stmt?: (ctx: Create_index_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.create_index_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_index_stmt?: (ctx: Create_index_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.create_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_stmt?: (ctx: Create_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.create_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_stmt?: (ctx: Create_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.create_trigger_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_trigger_stmt?: (ctx: Create_trigger_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.create_trigger_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_trigger_stmt?: (ctx: Create_trigger_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.create_view_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_view_stmt?: (ctx: Create_view_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.create_view_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_view_stmt?: (ctx: Create_view_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.create_virtual_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterCreate_virtual_table_stmt?: (ctx: Create_virtual_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.create_virtual_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitCreate_virtual_table_stmt?: (ctx: Create_virtual_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.delete_stmt`.
	 * @param ctx the parse tree
	 */
	enterDelete_stmt?: (ctx: Delete_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.delete_stmt`.
	 * @param ctx the parse tree
	 */
	exitDelete_stmt?: (ctx: Delete_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.delete_stmt_limited`.
	 * @param ctx the parse tree
	 */
	enterDelete_stmt_limited?: (ctx: Delete_stmt_limitedContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.delete_stmt_limited`.
	 * @param ctx the parse tree
	 */
	exitDelete_stmt_limited?: (ctx: Delete_stmt_limitedContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.detach_stmt`.
	 * @param ctx the parse tree
	 */
	enterDetach_stmt?: (ctx: Detach_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.detach_stmt`.
	 * @param ctx the parse tree
	 */
	exitDetach_stmt?: (ctx: Detach_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.drop_index_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_index_stmt?: (ctx: Drop_index_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.drop_index_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_index_stmt?: (ctx: Drop_index_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.drop_table_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_table_stmt?: (ctx: Drop_table_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.drop_table_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_table_stmt?: (ctx: Drop_table_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.drop_trigger_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_trigger_stmt?: (ctx: Drop_trigger_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.drop_trigger_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_trigger_stmt?: (ctx: Drop_trigger_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.drop_view_stmt`.
	 * @param ctx the parse tree
	 */
	enterDrop_view_stmt?: (ctx: Drop_view_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.drop_view_stmt`.
	 * @param ctx the parse tree
	 */
	exitDrop_view_stmt?: (ctx: Drop_view_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.factored_select_stmt`.
	 * @param ctx the parse tree
	 */
	enterFactored_select_stmt?: (ctx: Factored_select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.factored_select_stmt`.
	 * @param ctx the parse tree
	 */
	exitFactored_select_stmt?: (ctx: Factored_select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.insert_stmt`.
	 * @param ctx the parse tree
	 */
	enterInsert_stmt?: (ctx: Insert_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.insert_stmt`.
	 * @param ctx the parse tree
	 */
	exitInsert_stmt?: (ctx: Insert_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.pragma_stmt`.
	 * @param ctx the parse tree
	 */
	enterPragma_stmt?: (ctx: Pragma_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.pragma_stmt`.
	 * @param ctx the parse tree
	 */
	exitPragma_stmt?: (ctx: Pragma_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.reindex_stmt`.
	 * @param ctx the parse tree
	 */
	enterReindex_stmt?: (ctx: Reindex_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.reindex_stmt`.
	 * @param ctx the parse tree
	 */
	exitReindex_stmt?: (ctx: Reindex_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.release_stmt`.
	 * @param ctx the parse tree
	 */
	enterRelease_stmt?: (ctx: Release_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.release_stmt`.
	 * @param ctx the parse tree
	 */
	exitRelease_stmt?: (ctx: Release_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.rollback_stmt`.
	 * @param ctx the parse tree
	 */
	enterRollback_stmt?: (ctx: Rollback_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.rollback_stmt`.
	 * @param ctx the parse tree
	 */
	exitRollback_stmt?: (ctx: Rollback_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.savepoint_stmt`.
	 * @param ctx the parse tree
	 */
	enterSavepoint_stmt?: (ctx: Savepoint_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.savepoint_stmt`.
	 * @param ctx the parse tree
	 */
	exitSavepoint_stmt?: (ctx: Savepoint_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.simple_select_stmt`.
	 * @param ctx the parse tree
	 */
	enterSimple_select_stmt?: (ctx: Simple_select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.simple_select_stmt`.
	 * @param ctx the parse tree
	 */
	exitSimple_select_stmt?: (ctx: Simple_select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	enterSelect_stmt?: (ctx: Select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	exitSelect_stmt?: (ctx: Select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.select_or_values`.
	 * @param ctx the parse tree
	 */
	enterSelect_or_values?: (ctx: Select_or_valuesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.select_or_values`.
	 * @param ctx the parse tree
	 */
	exitSelect_or_values?: (ctx: Select_or_valuesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.update_stmt`.
	 * @param ctx the parse tree
	 */
	enterUpdate_stmt?: (ctx: Update_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.update_stmt`.
	 * @param ctx the parse tree
	 */
	exitUpdate_stmt?: (ctx: Update_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.update_stmt_limited`.
	 * @param ctx the parse tree
	 */
	enterUpdate_stmt_limited?: (ctx: Update_stmt_limitedContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.update_stmt_limited`.
	 * @param ctx the parse tree
	 */
	exitUpdate_stmt_limited?: (ctx: Update_stmt_limitedContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.vacuum_stmt`.
	 * @param ctx the parse tree
	 */
	enterVacuum_stmt?: (ctx: Vacuum_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.vacuum_stmt`.
	 * @param ctx the parse tree
	 */
	exitVacuum_stmt?: (ctx: Vacuum_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.column_def`.
	 * @param ctx the parse tree
	 */
	enterColumn_def?: (ctx: Column_defContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.column_def`.
	 * @param ctx the parse tree
	 */
	exitColumn_def?: (ctx: Column_defContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.column_constraint`.
	 * @param ctx the parse tree
	 */
	enterColumn_constraint?: (ctx: Column_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.column_constraint`.
	 * @param ctx the parse tree
	 */
	exitColumn_constraint?: (ctx: Column_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.conflict_clause`.
	 * @param ctx the parse tree
	 */
	enterConflict_clause?: (ctx: Conflict_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.conflict_clause`.
	 * @param ctx the parse tree
	 */
	exitConflict_clause?: (ctx: Conflict_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.foreign_key_clause`.
	 * @param ctx the parse tree
	 */
	enterForeign_key_clause?: (ctx: Foreign_key_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.foreign_key_clause`.
	 * @param ctx the parse tree
	 */
	exitForeign_key_clause?: (ctx: Foreign_key_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.raise_function`.
	 * @param ctx the parse tree
	 */
	enterRaise_function?: (ctx: Raise_functionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.raise_function`.
	 * @param ctx the parse tree
	 */
	exitRaise_function?: (ctx: Raise_functionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.indexed_column`.
	 * @param ctx the parse tree
	 */
	enterIndexed_column?: (ctx: Indexed_columnContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.indexed_column`.
	 * @param ctx the parse tree
	 */
	exitIndexed_column?: (ctx: Indexed_columnContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.table_constraint`.
	 * @param ctx the parse tree
	 */
	enterTable_constraint?: (ctx: Table_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.table_constraint`.
	 * @param ctx the parse tree
	 */
	exitTable_constraint?: (ctx: Table_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.with_clause`.
	 * @param ctx the parse tree
	 */
	enterWith_clause?: (ctx: With_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.with_clause`.
	 * @param ctx the parse tree
	 */
	exitWith_clause?: (ctx: With_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.qualified_table_name`.
	 * @param ctx the parse tree
	 */
	enterQualified_table_name?: (ctx: Qualified_table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.qualified_table_name`.
	 * @param ctx the parse tree
	 */
	exitQualified_table_name?: (ctx: Qualified_table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.ordering_term`.
	 * @param ctx the parse tree
	 */
	enterOrdering_term?: (ctx: Ordering_termContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.ordering_term`.
	 * @param ctx the parse tree
	 */
	exitOrdering_term?: (ctx: Ordering_termContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.pragma_value`.
	 * @param ctx the parse tree
	 */
	enterPragma_value?: (ctx: Pragma_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.pragma_value`.
	 * @param ctx the parse tree
	 */
	exitPragma_value?: (ctx: Pragma_valueContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.common_table_expression`.
	 * @param ctx the parse tree
	 */
	enterCommon_table_expression?: (ctx: Common_table_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.common_table_expression`.
	 * @param ctx the parse tree
	 */
	exitCommon_table_expression?: (ctx: Common_table_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.result_column`.
	 * @param ctx the parse tree
	 */
	enterResult_column?: (ctx: Result_columnContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.result_column`.
	 * @param ctx the parse tree
	 */
	exitResult_column?: (ctx: Result_columnContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.table_or_subquery`.
	 * @param ctx the parse tree
	 */
	enterTable_or_subquery?: (ctx: Table_or_subqueryContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.table_or_subquery`.
	 * @param ctx the parse tree
	 */
	exitTable_or_subquery?: (ctx: Table_or_subqueryContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.join_clause`.
	 * @param ctx the parse tree
	 */
	enterJoin_clause?: (ctx: Join_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.join_clause`.
	 * @param ctx the parse tree
	 */
	exitJoin_clause?: (ctx: Join_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.join_operator`.
	 * @param ctx the parse tree
	 */
	enterJoin_operator?: (ctx: Join_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.join_operator`.
	 * @param ctx the parse tree
	 */
	exitJoin_operator?: (ctx: Join_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.join_constraint`.
	 * @param ctx the parse tree
	 */
	enterJoin_constraint?: (ctx: Join_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.join_constraint`.
	 * @param ctx the parse tree
	 */
	exitJoin_constraint?: (ctx: Join_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.select_core`.
	 * @param ctx the parse tree
	 */
	enterSelect_core?: (ctx: Select_coreContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.select_core`.
	 * @param ctx the parse tree
	 */
	exitSelect_core?: (ctx: Select_coreContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.compound_operator`.
	 * @param ctx the parse tree
	 */
	enterCompound_operator?: (ctx: Compound_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.compound_operator`.
	 * @param ctx the parse tree
	 */
	exitCompound_operator?: (ctx: Compound_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.cte_table_name`.
	 * @param ctx the parse tree
	 */
	enterCte_table_name?: (ctx: Cte_table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.cte_table_name`.
	 * @param ctx the parse tree
	 */
	exitCte_table_name?: (ctx: Cte_table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.signed_number`.
	 * @param ctx the parse tree
	 */
	enterSigned_number?: (ctx: Signed_numberContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.signed_number`.
	 * @param ctx the parse tree
	 */
	exitSigned_number?: (ctx: Signed_numberContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.literal_value`.
	 * @param ctx the parse tree
	 */
	enterLiteral_value?: (ctx: Literal_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.literal_value`.
	 * @param ctx the parse tree
	 */
	exitLiteral_value?: (ctx: Literal_valueContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.error_message`.
	 * @param ctx the parse tree
	 */
	enterError_message?: (ctx: Error_messageContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.error_message`.
	 * @param ctx the parse tree
	 */
	exitError_message?: (ctx: Error_messageContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.module_argument`.
	 * @param ctx the parse tree
	 */
	enterModule_argument?: (ctx: Module_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.module_argument`.
	 * @param ctx the parse tree
	 */
	exitModule_argument?: (ctx: Module_argumentContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.column_alias`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias?: (ctx: Column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.column_alias`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias?: (ctx: Column_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.database_name`.
	 * @param ctx the parse tree
	 */
	enterDatabase_name?: (ctx: Database_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.database_name`.
	 * @param ctx the parse tree
	 */
	exitDatabase_name?: (ctx: Database_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.table_name`.
	 * @param ctx the parse tree
	 */
	enterTable_name?: (ctx: Table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.table_name`.
	 * @param ctx the parse tree
	 */
	exitTable_name?: (ctx: Table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.table_or_index_name`.
	 * @param ctx the parse tree
	 */
	enterTable_or_index_name?: (ctx: Table_or_index_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.table_or_index_name`.
	 * @param ctx the parse tree
	 */
	exitTable_or_index_name?: (ctx: Table_or_index_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.new_table_name`.
	 * @param ctx the parse tree
	 */
	enterNew_table_name?: (ctx: New_table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.new_table_name`.
	 * @param ctx the parse tree
	 */
	exitNew_table_name?: (ctx: New_table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.column_name`.
	 * @param ctx the parse tree
	 */
	enterColumn_name?: (ctx: Column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.column_name`.
	 * @param ctx the parse tree
	 */
	exitColumn_name?: (ctx: Column_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.collation_name`.
	 * @param ctx the parse tree
	 */
	enterCollation_name?: (ctx: Collation_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.collation_name`.
	 * @param ctx the parse tree
	 */
	exitCollation_name?: (ctx: Collation_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.foreign_table`.
	 * @param ctx the parse tree
	 */
	enterForeign_table?: (ctx: Foreign_tableContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.foreign_table`.
	 * @param ctx the parse tree
	 */
	exitForeign_table?: (ctx: Foreign_tableContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.index_name`.
	 * @param ctx the parse tree
	 */
	enterIndex_name?: (ctx: Index_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.index_name`.
	 * @param ctx the parse tree
	 */
	exitIndex_name?: (ctx: Index_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.trigger_name`.
	 * @param ctx the parse tree
	 */
	enterTrigger_name?: (ctx: Trigger_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.trigger_name`.
	 * @param ctx the parse tree
	 */
	exitTrigger_name?: (ctx: Trigger_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.view_name`.
	 * @param ctx the parse tree
	 */
	enterView_name?: (ctx: View_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.view_name`.
	 * @param ctx the parse tree
	 */
	exitView_name?: (ctx: View_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.module_name`.
	 * @param ctx the parse tree
	 */
	enterModule_name?: (ctx: Module_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.module_name`.
	 * @param ctx the parse tree
	 */
	exitModule_name?: (ctx: Module_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.pragma_name`.
	 * @param ctx the parse tree
	 */
	enterPragma_name?: (ctx: Pragma_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.pragma_name`.
	 * @param ctx the parse tree
	 */
	exitPragma_name?: (ctx: Pragma_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.savepoint_name`.
	 * @param ctx the parse tree
	 */
	enterSavepoint_name?: (ctx: Savepoint_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.savepoint_name`.
	 * @param ctx the parse tree
	 */
	exitSavepoint_name?: (ctx: Savepoint_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.table_alias`.
	 * @param ctx the parse tree
	 */
	enterTable_alias?: (ctx: Table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.table_alias`.
	 * @param ctx the parse tree
	 */
	exitTable_alias?: (ctx: Table_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.transaction_name`.
	 * @param ctx the parse tree
	 */
	enterTransaction_name?: (ctx: Transaction_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.transaction_name`.
	 * @param ctx the parse tree
	 */
	exitTransaction_name?: (ctx: Transaction_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLiteParser.any_name`.
	 * @param ctx the parse tree
	 */
	enterAny_name?: (ctx: Any_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLiteParser.any_name`.
	 * @param ctx the parse tree
	 */
	exitAny_name?: (ctx: Any_nameContext) => void;
}

