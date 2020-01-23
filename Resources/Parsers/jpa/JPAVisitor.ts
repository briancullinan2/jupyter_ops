// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/jpa/JPA.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JPAParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JPAVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JPAParser.ql_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQl_statement?: (ctx: Ql_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.select_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_statement?: (ctx: Select_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.update_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_statement?: (ctx: Update_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.delete_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_statement?: (ctx: Delete_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.from_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_clause?: (ctx: From_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.identification_variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentification_variable_declaration?: (ctx: Identification_variable_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.range_variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_variable_declaration?: (ctx: Range_variable_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.join`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin?: (ctx: JoinContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.fetch_join`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFetch_join?: (ctx: Fetch_joinContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.join_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_spec?: (ctx: Join_specContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.join_association_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_association_path_expression?: (ctx: Join_association_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.join_collection_valued_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_collection_valued_path_expression?: (ctx: Join_collection_valued_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.join_single_valued_association_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_single_valued_association_path_expression?: (ctx: Join_single_valued_association_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.collection_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_member_declaration?: (ctx: Collection_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.single_valued_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_valued_path_expression?: (ctx: Single_valued_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.state_field_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_field_path_expression?: (ctx: State_field_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.single_valued_association_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_valued_association_path_expression?: (ctx: Single_valued_association_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.collection_valued_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_valued_path_expression?: (ctx: Collection_valued_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.state_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_field?: (ctx: State_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.update_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_clause?: (ctx: Update_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.update_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_item?: (ctx: Update_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.new_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_value?: (ctx: New_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.delete_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_clause?: (ctx: Delete_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.select_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_clause?: (ctx: Select_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.select_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_expression?: (ctx: Select_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.constructor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_expression?: (ctx: Constructor_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.constructor_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_item?: (ctx: Constructor_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.aggregate_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_expression?: (ctx: Aggregate_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.where_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere_clause?: (ctx: Where_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.groupby_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupby_clause?: (ctx: Groupby_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.groupby_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupby_item?: (ctx: Groupby_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.having_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHaving_clause?: (ctx: Having_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.orderby_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderby_clause?: (ctx: Orderby_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.orderby_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderby_item?: (ctx: Orderby_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.subquery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.subquery_from_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery_from_clause?: (ctx: Subquery_from_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.subselect_identification_variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubselect_identification_variable_declaration?: (ctx: Subselect_identification_variable_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.association_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociation_path_expression?: (ctx: Association_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.simple_select_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_select_clause?: (ctx: Simple_select_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.simple_select_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_select_expression?: (ctx: Simple_select_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.conditional_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_term?: (ctx: Conditional_termContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.conditional_factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_factor?: (ctx: Conditional_factorContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.conditional_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_primary?: (ctx: Conditional_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.simple_cond_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_cond_expression?: (ctx: Simple_cond_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.between_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween_expression?: (ctx: Between_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.in_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn_expression?: (ctx: In_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.in_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn_item?: (ctx: In_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.like_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike_expression?: (ctx: Like_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.null_comparison_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_comparison_expression?: (ctx: Null_comparison_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.empty_collection_comparison_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_collection_comparison_expression?: (ctx: Empty_collection_comparison_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.collection_member_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_member_expression?: (ctx: Collection_member_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.exists_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists_expression?: (ctx: Exists_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.all_or_any_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_or_any_expression?: (ctx: All_or_any_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.comparison_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison_expression?: (ctx: Comparison_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.comparison_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison_operator?: (ctx: Comparison_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_expression?: (ctx: Arithmetic_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.simple_arithmetic_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_arithmetic_expression?: (ctx: Simple_arithmetic_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.arithmetic_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_term?: (ctx: Arithmetic_termContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.arithmetic_factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_factor?: (ctx: Arithmetic_factorContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.arithmetic_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_primary?: (ctx: Arithmetic_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.string_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_expression?: (ctx: String_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.string_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_primary?: (ctx: String_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.datetime_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetime_expression?: (ctx: Datetime_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.datetime_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetime_primary?: (ctx: Datetime_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.boolean_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_expression?: (ctx: Boolean_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.boolean_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_primary?: (ctx: Boolean_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.enum_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_expression?: (ctx: Enum_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.enum_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_primary?: (ctx: Enum_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.entity_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_expression?: (ctx: Entity_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.simple_entity_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_entity_expression?: (ctx: Simple_entity_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.functions_returning_numerics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions_returning_numerics?: (ctx: Functions_returning_numericsContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.functions_returning_datetime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions_returning_datetime?: (ctx: Functions_returning_datetimeContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.functions_returning_strings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions_returning_strings?: (ctx: Functions_returning_stringsContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.trim_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrim_specification?: (ctx: Trim_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.numeric_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_literal?: (ctx: Numeric_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.pattern_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_value?: (ctx: Pattern_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.input_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_parameter?: (ctx: Input_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.constructor_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_name?: (ctx: Constructor_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.enum_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_literal?: (ctx: Enum_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.boolean_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_literal?: (ctx: Boolean_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.simple_state_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_state_field?: (ctx: Simple_state_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.embedded_class_state_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmbedded_class_state_field?: (ctx: Embedded_class_state_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.single_valued_association_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_valued_association_field?: (ctx: Single_valued_association_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.collection_valued_association_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_valued_association_field?: (ctx: Collection_valued_association_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `JPAParser.abstract_schema_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstract_schema_name?: (ctx: Abstract_schema_nameContext) => Result;
}

