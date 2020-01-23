// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/jpa/JPA.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Ql_statementContext } from "./JPAParser";
import { Select_statementContext } from "./JPAParser";
import { Update_statementContext } from "./JPAParser";
import { Delete_statementContext } from "./JPAParser";
import { From_clauseContext } from "./JPAParser";
import { Identification_variable_declarationContext } from "./JPAParser";
import { Range_variable_declarationContext } from "./JPAParser";
import { JoinContext } from "./JPAParser";
import { Fetch_joinContext } from "./JPAParser";
import { Join_specContext } from "./JPAParser";
import { Join_association_path_expressionContext } from "./JPAParser";
import { Join_collection_valued_path_expressionContext } from "./JPAParser";
import { Join_single_valued_association_path_expressionContext } from "./JPAParser";
import { Collection_member_declarationContext } from "./JPAParser";
import { Single_valued_path_expressionContext } from "./JPAParser";
import { State_field_path_expressionContext } from "./JPAParser";
import { Single_valued_association_path_expressionContext } from "./JPAParser";
import { Collection_valued_path_expressionContext } from "./JPAParser";
import { State_fieldContext } from "./JPAParser";
import { Update_clauseContext } from "./JPAParser";
import { Update_itemContext } from "./JPAParser";
import { New_valueContext } from "./JPAParser";
import { Delete_clauseContext } from "./JPAParser";
import { Select_clauseContext } from "./JPAParser";
import { Select_expressionContext } from "./JPAParser";
import { Constructor_expressionContext } from "./JPAParser";
import { Constructor_itemContext } from "./JPAParser";
import { Aggregate_expressionContext } from "./JPAParser";
import { Where_clauseContext } from "./JPAParser";
import { Groupby_clauseContext } from "./JPAParser";
import { Groupby_itemContext } from "./JPAParser";
import { Having_clauseContext } from "./JPAParser";
import { Orderby_clauseContext } from "./JPAParser";
import { Orderby_itemContext } from "./JPAParser";
import { SubqueryContext } from "./JPAParser";
import { Subquery_from_clauseContext } from "./JPAParser";
import { Subselect_identification_variable_declarationContext } from "./JPAParser";
import { Association_path_expressionContext } from "./JPAParser";
import { Simple_select_clauseContext } from "./JPAParser";
import { Simple_select_expressionContext } from "./JPAParser";
import { Conditional_expressionContext } from "./JPAParser";
import { Conditional_termContext } from "./JPAParser";
import { Conditional_factorContext } from "./JPAParser";
import { Conditional_primaryContext } from "./JPAParser";
import { Simple_cond_expressionContext } from "./JPAParser";
import { Between_expressionContext } from "./JPAParser";
import { In_expressionContext } from "./JPAParser";
import { In_itemContext } from "./JPAParser";
import { Like_expressionContext } from "./JPAParser";
import { Null_comparison_expressionContext } from "./JPAParser";
import { Empty_collection_comparison_expressionContext } from "./JPAParser";
import { Collection_member_expressionContext } from "./JPAParser";
import { Exists_expressionContext } from "./JPAParser";
import { All_or_any_expressionContext } from "./JPAParser";
import { Comparison_expressionContext } from "./JPAParser";
import { Comparison_operatorContext } from "./JPAParser";
import { Arithmetic_expressionContext } from "./JPAParser";
import { Simple_arithmetic_expressionContext } from "./JPAParser";
import { Arithmetic_termContext } from "./JPAParser";
import { Arithmetic_factorContext } from "./JPAParser";
import { Arithmetic_primaryContext } from "./JPAParser";
import { String_expressionContext } from "./JPAParser";
import { String_primaryContext } from "./JPAParser";
import { Datetime_expressionContext } from "./JPAParser";
import { Datetime_primaryContext } from "./JPAParser";
import { Boolean_expressionContext } from "./JPAParser";
import { Boolean_primaryContext } from "./JPAParser";
import { Enum_expressionContext } from "./JPAParser";
import { Enum_primaryContext } from "./JPAParser";
import { Entity_expressionContext } from "./JPAParser";
import { Simple_entity_expressionContext } from "./JPAParser";
import { Functions_returning_numericsContext } from "./JPAParser";
import { Functions_returning_datetimeContext } from "./JPAParser";
import { Functions_returning_stringsContext } from "./JPAParser";
import { Trim_specificationContext } from "./JPAParser";
import { Numeric_literalContext } from "./JPAParser";
import { Pattern_valueContext } from "./JPAParser";
import { Input_parameterContext } from "./JPAParser";
import { LiteralContext } from "./JPAParser";
import { Constructor_nameContext } from "./JPAParser";
import { Enum_literalContext } from "./JPAParser";
import { Boolean_literalContext } from "./JPAParser";
import { Simple_state_fieldContext } from "./JPAParser";
import { Embedded_class_state_fieldContext } from "./JPAParser";
import { Single_valued_association_fieldContext } from "./JPAParser";
import { Collection_valued_association_fieldContext } from "./JPAParser";
import { Abstract_schema_nameContext } from "./JPAParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JPAParser`.
 */
export interface JPAListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JPAParser.ql_statement`.
	 * @param ctx the parse tree
	 */
	enterQl_statement?: (ctx: Ql_statementContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.ql_statement`.
	 * @param ctx the parse tree
	 */
	exitQl_statement?: (ctx: Ql_statementContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.update_statement`.
	 * @param ctx the parse tree
	 */
	enterUpdate_statement?: (ctx: Update_statementContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.update_statement`.
	 * @param ctx the parse tree
	 */
	exitUpdate_statement?: (ctx: Update_statementContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	enterDelete_statement?: (ctx: Delete_statementContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	exitDelete_statement?: (ctx: Delete_statementContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.from_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_clause?: (ctx: From_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.from_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_clause?: (ctx: From_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.identification_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterIdentification_variable_declaration?: (ctx: Identification_variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.identification_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitIdentification_variable_declaration?: (ctx: Identification_variable_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.range_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterRange_variable_declaration?: (ctx: Range_variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.range_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitRange_variable_declaration?: (ctx: Range_variable_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.join`.
	 * @param ctx the parse tree
	 */
	enterJoin?: (ctx: JoinContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.join`.
	 * @param ctx the parse tree
	 */
	exitJoin?: (ctx: JoinContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.fetch_join`.
	 * @param ctx the parse tree
	 */
	enterFetch_join?: (ctx: Fetch_joinContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.fetch_join`.
	 * @param ctx the parse tree
	 */
	exitFetch_join?: (ctx: Fetch_joinContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.join_spec`.
	 * @param ctx the parse tree
	 */
	enterJoin_spec?: (ctx: Join_specContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.join_spec`.
	 * @param ctx the parse tree
	 */
	exitJoin_spec?: (ctx: Join_specContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.join_association_path_expression`.
	 * @param ctx the parse tree
	 */
	enterJoin_association_path_expression?: (ctx: Join_association_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.join_association_path_expression`.
	 * @param ctx the parse tree
	 */
	exitJoin_association_path_expression?: (ctx: Join_association_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.join_collection_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	enterJoin_collection_valued_path_expression?: (ctx: Join_collection_valued_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.join_collection_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	exitJoin_collection_valued_path_expression?: (ctx: Join_collection_valued_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.join_single_valued_association_path_expression`.
	 * @param ctx the parse tree
	 */
	enterJoin_single_valued_association_path_expression?: (ctx: Join_single_valued_association_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.join_single_valued_association_path_expression`.
	 * @param ctx the parse tree
	 */
	exitJoin_single_valued_association_path_expression?: (ctx: Join_single_valued_association_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.collection_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterCollection_member_declaration?: (ctx: Collection_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.collection_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitCollection_member_declaration?: (ctx: Collection_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.single_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	enterSingle_valued_path_expression?: (ctx: Single_valued_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.single_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	exitSingle_valued_path_expression?: (ctx: Single_valued_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.state_field_path_expression`.
	 * @param ctx the parse tree
	 */
	enterState_field_path_expression?: (ctx: State_field_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.state_field_path_expression`.
	 * @param ctx the parse tree
	 */
	exitState_field_path_expression?: (ctx: State_field_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.single_valued_association_path_expression`.
	 * @param ctx the parse tree
	 */
	enterSingle_valued_association_path_expression?: (ctx: Single_valued_association_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.single_valued_association_path_expression`.
	 * @param ctx the parse tree
	 */
	exitSingle_valued_association_path_expression?: (ctx: Single_valued_association_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.collection_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	enterCollection_valued_path_expression?: (ctx: Collection_valued_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.collection_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	exitCollection_valued_path_expression?: (ctx: Collection_valued_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.state_field`.
	 * @param ctx the parse tree
	 */
	enterState_field?: (ctx: State_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.state_field`.
	 * @param ctx the parse tree
	 */
	exitState_field?: (ctx: State_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.update_clause`.
	 * @param ctx the parse tree
	 */
	enterUpdate_clause?: (ctx: Update_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.update_clause`.
	 * @param ctx the parse tree
	 */
	exitUpdate_clause?: (ctx: Update_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.update_item`.
	 * @param ctx the parse tree
	 */
	enterUpdate_item?: (ctx: Update_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.update_item`.
	 * @param ctx the parse tree
	 */
	exitUpdate_item?: (ctx: Update_itemContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.new_value`.
	 * @param ctx the parse tree
	 */
	enterNew_value?: (ctx: New_valueContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.new_value`.
	 * @param ctx the parse tree
	 */
	exitNew_value?: (ctx: New_valueContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.delete_clause`.
	 * @param ctx the parse tree
	 */
	enterDelete_clause?: (ctx: Delete_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.delete_clause`.
	 * @param ctx the parse tree
	 */
	exitDelete_clause?: (ctx: Delete_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.select_clause`.
	 * @param ctx the parse tree
	 */
	enterSelect_clause?: (ctx: Select_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.select_clause`.
	 * @param ctx the parse tree
	 */
	exitSelect_clause?: (ctx: Select_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.select_expression`.
	 * @param ctx the parse tree
	 */
	enterSelect_expression?: (ctx: Select_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.select_expression`.
	 * @param ctx the parse tree
	 */
	exitSelect_expression?: (ctx: Select_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.constructor_expression`.
	 * @param ctx the parse tree
	 */
	enterConstructor_expression?: (ctx: Constructor_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.constructor_expression`.
	 * @param ctx the parse tree
	 */
	exitConstructor_expression?: (ctx: Constructor_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.constructor_item`.
	 * @param ctx the parse tree
	 */
	enterConstructor_item?: (ctx: Constructor_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.constructor_item`.
	 * @param ctx the parse tree
	 */
	exitConstructor_item?: (ctx: Constructor_itemContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.aggregate_expression`.
	 * @param ctx the parse tree
	 */
	enterAggregate_expression?: (ctx: Aggregate_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.aggregate_expression`.
	 * @param ctx the parse tree
	 */
	exitAggregate_expression?: (ctx: Aggregate_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.where_clause`.
	 * @param ctx the parse tree
	 */
	enterWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.where_clause`.
	 * @param ctx the parse tree
	 */
	exitWhere_clause?: (ctx: Where_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.groupby_clause`.
	 * @param ctx the parse tree
	 */
	enterGroupby_clause?: (ctx: Groupby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.groupby_clause`.
	 * @param ctx the parse tree
	 */
	exitGroupby_clause?: (ctx: Groupby_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.groupby_item`.
	 * @param ctx the parse tree
	 */
	enterGroupby_item?: (ctx: Groupby_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.groupby_item`.
	 * @param ctx the parse tree
	 */
	exitGroupby_item?: (ctx: Groupby_itemContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.having_clause`.
	 * @param ctx the parse tree
	 */
	enterHaving_clause?: (ctx: Having_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.having_clause`.
	 * @param ctx the parse tree
	 */
	exitHaving_clause?: (ctx: Having_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	enterOrderby_clause?: (ctx: Orderby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	exitOrderby_clause?: (ctx: Orderby_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.orderby_item`.
	 * @param ctx the parse tree
	 */
	enterOrderby_item?: (ctx: Orderby_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.orderby_item`.
	 * @param ctx the parse tree
	 */
	exitOrderby_item?: (ctx: Orderby_itemContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.subquery`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.subquery`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.subquery_from_clause`.
	 * @param ctx the parse tree
	 */
	enterSubquery_from_clause?: (ctx: Subquery_from_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.subquery_from_clause`.
	 * @param ctx the parse tree
	 */
	exitSubquery_from_clause?: (ctx: Subquery_from_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.subselect_identification_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterSubselect_identification_variable_declaration?: (ctx: Subselect_identification_variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.subselect_identification_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitSubselect_identification_variable_declaration?: (ctx: Subselect_identification_variable_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.association_path_expression`.
	 * @param ctx the parse tree
	 */
	enterAssociation_path_expression?: (ctx: Association_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.association_path_expression`.
	 * @param ctx the parse tree
	 */
	exitAssociation_path_expression?: (ctx: Association_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.simple_select_clause`.
	 * @param ctx the parse tree
	 */
	enterSimple_select_clause?: (ctx: Simple_select_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.simple_select_clause`.
	 * @param ctx the parse tree
	 */
	exitSimple_select_clause?: (ctx: Simple_select_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.simple_select_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_select_expression?: (ctx: Simple_select_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.simple_select_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_select_expression?: (ctx: Simple_select_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.conditional_term`.
	 * @param ctx the parse tree
	 */
	enterConditional_term?: (ctx: Conditional_termContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.conditional_term`.
	 * @param ctx the parse tree
	 */
	exitConditional_term?: (ctx: Conditional_termContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.conditional_factor`.
	 * @param ctx the parse tree
	 */
	enterConditional_factor?: (ctx: Conditional_factorContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.conditional_factor`.
	 * @param ctx the parse tree
	 */
	exitConditional_factor?: (ctx: Conditional_factorContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.conditional_primary`.
	 * @param ctx the parse tree
	 */
	enterConditional_primary?: (ctx: Conditional_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.conditional_primary`.
	 * @param ctx the parse tree
	 */
	exitConditional_primary?: (ctx: Conditional_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.simple_cond_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_cond_expression?: (ctx: Simple_cond_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.simple_cond_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_cond_expression?: (ctx: Simple_cond_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.between_expression`.
	 * @param ctx the parse tree
	 */
	enterBetween_expression?: (ctx: Between_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.between_expression`.
	 * @param ctx the parse tree
	 */
	exitBetween_expression?: (ctx: Between_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.in_expression`.
	 * @param ctx the parse tree
	 */
	enterIn_expression?: (ctx: In_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.in_expression`.
	 * @param ctx the parse tree
	 */
	exitIn_expression?: (ctx: In_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.in_item`.
	 * @param ctx the parse tree
	 */
	enterIn_item?: (ctx: In_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.in_item`.
	 * @param ctx the parse tree
	 */
	exitIn_item?: (ctx: In_itemContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.like_expression`.
	 * @param ctx the parse tree
	 */
	enterLike_expression?: (ctx: Like_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.like_expression`.
	 * @param ctx the parse tree
	 */
	exitLike_expression?: (ctx: Like_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.null_comparison_expression`.
	 * @param ctx the parse tree
	 */
	enterNull_comparison_expression?: (ctx: Null_comparison_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.null_comparison_expression`.
	 * @param ctx the parse tree
	 */
	exitNull_comparison_expression?: (ctx: Null_comparison_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.empty_collection_comparison_expression`.
	 * @param ctx the parse tree
	 */
	enterEmpty_collection_comparison_expression?: (ctx: Empty_collection_comparison_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.empty_collection_comparison_expression`.
	 * @param ctx the parse tree
	 */
	exitEmpty_collection_comparison_expression?: (ctx: Empty_collection_comparison_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.collection_member_expression`.
	 * @param ctx the parse tree
	 */
	enterCollection_member_expression?: (ctx: Collection_member_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.collection_member_expression`.
	 * @param ctx the parse tree
	 */
	exitCollection_member_expression?: (ctx: Collection_member_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.exists_expression`.
	 * @param ctx the parse tree
	 */
	enterExists_expression?: (ctx: Exists_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.exists_expression`.
	 * @param ctx the parse tree
	 */
	exitExists_expression?: (ctx: Exists_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.all_or_any_expression`.
	 * @param ctx the parse tree
	 */
	enterAll_or_any_expression?: (ctx: All_or_any_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.all_or_any_expression`.
	 * @param ctx the parse tree
	 */
	exitAll_or_any_expression?: (ctx: All_or_any_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.comparison_expression`.
	 * @param ctx the parse tree
	 */
	enterComparison_expression?: (ctx: Comparison_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.comparison_expression`.
	 * @param ctx the parse tree
	 */
	exitComparison_expression?: (ctx: Comparison_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	enterComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	exitComparison_operator?: (ctx: Comparison_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_expression?: (ctx: Arithmetic_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_expression?: (ctx: Arithmetic_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.simple_arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_arithmetic_expression?: (ctx: Simple_arithmetic_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.simple_arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_arithmetic_expression?: (ctx: Simple_arithmetic_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.arithmetic_term`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_term?: (ctx: Arithmetic_termContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.arithmetic_term`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_term?: (ctx: Arithmetic_termContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.arithmetic_factor`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_factor?: (ctx: Arithmetic_factorContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.arithmetic_factor`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_factor?: (ctx: Arithmetic_factorContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.arithmetic_primary`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_primary?: (ctx: Arithmetic_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.arithmetic_primary`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_primary?: (ctx: Arithmetic_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.string_expression`.
	 * @param ctx the parse tree
	 */
	enterString_expression?: (ctx: String_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.string_expression`.
	 * @param ctx the parse tree
	 */
	exitString_expression?: (ctx: String_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.string_primary`.
	 * @param ctx the parse tree
	 */
	enterString_primary?: (ctx: String_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.string_primary`.
	 * @param ctx the parse tree
	 */
	exitString_primary?: (ctx: String_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.datetime_expression`.
	 * @param ctx the parse tree
	 */
	enterDatetime_expression?: (ctx: Datetime_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.datetime_expression`.
	 * @param ctx the parse tree
	 */
	exitDatetime_expression?: (ctx: Datetime_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.datetime_primary`.
	 * @param ctx the parse tree
	 */
	enterDatetime_primary?: (ctx: Datetime_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.datetime_primary`.
	 * @param ctx the parse tree
	 */
	exitDatetime_primary?: (ctx: Datetime_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.boolean_expression`.
	 * @param ctx the parse tree
	 */
	enterBoolean_expression?: (ctx: Boolean_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.boolean_expression`.
	 * @param ctx the parse tree
	 */
	exitBoolean_expression?: (ctx: Boolean_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.boolean_primary`.
	 * @param ctx the parse tree
	 */
	enterBoolean_primary?: (ctx: Boolean_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.boolean_primary`.
	 * @param ctx the parse tree
	 */
	exitBoolean_primary?: (ctx: Boolean_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.enum_expression`.
	 * @param ctx the parse tree
	 */
	enterEnum_expression?: (ctx: Enum_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.enum_expression`.
	 * @param ctx the parse tree
	 */
	exitEnum_expression?: (ctx: Enum_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.enum_primary`.
	 * @param ctx the parse tree
	 */
	enterEnum_primary?: (ctx: Enum_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.enum_primary`.
	 * @param ctx the parse tree
	 */
	exitEnum_primary?: (ctx: Enum_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.entity_expression`.
	 * @param ctx the parse tree
	 */
	enterEntity_expression?: (ctx: Entity_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.entity_expression`.
	 * @param ctx the parse tree
	 */
	exitEntity_expression?: (ctx: Entity_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.simple_entity_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_entity_expression?: (ctx: Simple_entity_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.simple_entity_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_entity_expression?: (ctx: Simple_entity_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.functions_returning_numerics`.
	 * @param ctx the parse tree
	 */
	enterFunctions_returning_numerics?: (ctx: Functions_returning_numericsContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.functions_returning_numerics`.
	 * @param ctx the parse tree
	 */
	exitFunctions_returning_numerics?: (ctx: Functions_returning_numericsContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.functions_returning_datetime`.
	 * @param ctx the parse tree
	 */
	enterFunctions_returning_datetime?: (ctx: Functions_returning_datetimeContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.functions_returning_datetime`.
	 * @param ctx the parse tree
	 */
	exitFunctions_returning_datetime?: (ctx: Functions_returning_datetimeContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.functions_returning_strings`.
	 * @param ctx the parse tree
	 */
	enterFunctions_returning_strings?: (ctx: Functions_returning_stringsContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.functions_returning_strings`.
	 * @param ctx the parse tree
	 */
	exitFunctions_returning_strings?: (ctx: Functions_returning_stringsContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.trim_specification`.
	 * @param ctx the parse tree
	 */
	enterTrim_specification?: (ctx: Trim_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.trim_specification`.
	 * @param ctx the parse tree
	 */
	exitTrim_specification?: (ctx: Trim_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	enterNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	exitNumeric_literal?: (ctx: Numeric_literalContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.pattern_value`.
	 * @param ctx the parse tree
	 */
	enterPattern_value?: (ctx: Pattern_valueContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.pattern_value`.
	 * @param ctx the parse tree
	 */
	exitPattern_value?: (ctx: Pattern_valueContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.input_parameter`.
	 * @param ctx the parse tree
	 */
	enterInput_parameter?: (ctx: Input_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.input_parameter`.
	 * @param ctx the parse tree
	 */
	exitInput_parameter?: (ctx: Input_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.constructor_name`.
	 * @param ctx the parse tree
	 */
	enterConstructor_name?: (ctx: Constructor_nameContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.constructor_name`.
	 * @param ctx the parse tree
	 */
	exitConstructor_name?: (ctx: Constructor_nameContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.enum_literal`.
	 * @param ctx the parse tree
	 */
	enterEnum_literal?: (ctx: Enum_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.enum_literal`.
	 * @param ctx the parse tree
	 */
	exitEnum_literal?: (ctx: Enum_literalContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	enterBoolean_literal?: (ctx: Boolean_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	exitBoolean_literal?: (ctx: Boolean_literalContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.simple_state_field`.
	 * @param ctx the parse tree
	 */
	enterSimple_state_field?: (ctx: Simple_state_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.simple_state_field`.
	 * @param ctx the parse tree
	 */
	exitSimple_state_field?: (ctx: Simple_state_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.embedded_class_state_field`.
	 * @param ctx the parse tree
	 */
	enterEmbedded_class_state_field?: (ctx: Embedded_class_state_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.embedded_class_state_field`.
	 * @param ctx the parse tree
	 */
	exitEmbedded_class_state_field?: (ctx: Embedded_class_state_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.single_valued_association_field`.
	 * @param ctx the parse tree
	 */
	enterSingle_valued_association_field?: (ctx: Single_valued_association_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.single_valued_association_field`.
	 * @param ctx the parse tree
	 */
	exitSingle_valued_association_field?: (ctx: Single_valued_association_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.collection_valued_association_field`.
	 * @param ctx the parse tree
	 */
	enterCollection_valued_association_field?: (ctx: Collection_valued_association_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.collection_valued_association_field`.
	 * @param ctx the parse tree
	 */
	exitCollection_valued_association_field?: (ctx: Collection_valued_association_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `JPAParser.abstract_schema_name`.
	 * @param ctx the parse tree
	 */
	enterAbstract_schema_name?: (ctx: Abstract_schema_nameContext) => void;
	/**
	 * Exit a parse tree produced by `JPAParser.abstract_schema_name`.
	 * @param ctx the parse tree
	 */
	exitAbstract_schema_name?: (ctx: Abstract_schema_nameContext) => void;
}

