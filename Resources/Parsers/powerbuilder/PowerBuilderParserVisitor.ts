// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/powerbuilder/PowerBuilderParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Start_ruleContext } from "./PowerBuilderParser";
import { Header_ruleContext } from "./PowerBuilderParser";
import { Body_ruleContext } from "./PowerBuilderParser";
import { Window_propertyContext } from "./PowerBuilderParser";
import { Window_property_attribute_subContext } from "./PowerBuilderParser";
import { Attribute_nameContext } from "./PowerBuilderParser";
import { Attribute_valueContext } from "./PowerBuilderParser";
import { Forward_declContext } from "./PowerBuilderParser";
import { Datatype_declContext } from "./PowerBuilderParser";
import { Type_variables_declContext } from "./PowerBuilderParser";
import { Global_variables_declContext } from "./PowerBuilderParser";
import { Variable_declContext } from "./PowerBuilderParser";
import { Variable_decl_subContext } from "./PowerBuilderParser";
import { Decimal_decl_subContext } from "./PowerBuilderParser";
import { Array_decl_subContext } from "./PowerBuilderParser";
import { Constant_decl_subContext } from "./PowerBuilderParser";
import { Constant_declContext } from "./PowerBuilderParser";
import { Function_forward_declContext } from "./PowerBuilderParser";
import { Parameter_subContext } from "./PowerBuilderParser";
import { Parameters_list_subContext } from "./PowerBuilderParser";
import { Functions_forward_declContext } from "./PowerBuilderParser";
import { Function_bodyContext } from "./PowerBuilderParser";
import { On_bodyContext } from "./PowerBuilderParser";
import { Event_forward_declContext } from "./PowerBuilderParser";
import { Event_bodyContext } from "./PowerBuilderParser";
import { Access_typeContext } from "./PowerBuilderParser";
import { Access_modifContext } from "./PowerBuilderParser";
import { Access_modif_partContext } from "./PowerBuilderParser";
import { Scope_modifContext } from "./PowerBuilderParser";
import { ExpressionContext } from "./PowerBuilderParser";
import { Expression_listContext } from "./PowerBuilderParser";
import { Boolean_expressionContext } from "./PowerBuilderParser";
import { Condition_orContext } from "./PowerBuilderParser";
import { Condition_andContext } from "./PowerBuilderParser";
import { Condition_notContext } from "./PowerBuilderParser";
import { Condition_comparisonContext } from "./PowerBuilderParser";
import { Add_exprContext } from "./PowerBuilderParser";
import { Mul_exprContext } from "./PowerBuilderParser";
import { Unary_sign_exprContext } from "./PowerBuilderParser";
import { StatementContext } from "./PowerBuilderParser";
import { Statement_subContext } from "./PowerBuilderParser";
import { Assignment_subContext } from "./PowerBuilderParser";
import { Assignment_statementContext } from "./PowerBuilderParser";
import { Lvalue_subContext } from "./PowerBuilderParser";
import { Return_statementContext } from "./PowerBuilderParser";
import { Function_call_expression_subContext } from "./PowerBuilderParser";
import { Function_virtual_call_expression_subContext } from "./PowerBuilderParser";
import { Open_call_subContext } from "./PowerBuilderParser";
import { Close_call_subContext } from "./PowerBuilderParser";
import { Function_call_statementContext } from "./PowerBuilderParser";
import { Super_call_statementContext } from "./PowerBuilderParser";
import { Event_call_statement_subContext } from "./PowerBuilderParser";
import { Event_call_statementContext } from "./PowerBuilderParser";
import { Create_call_subContext } from "./PowerBuilderParser";
import { Create_call_statementContext } from "./PowerBuilderParser";
import { Destroy_call_subContext } from "./PowerBuilderParser";
import { Destroy_call_statementContext } from "./PowerBuilderParser";
import { For_loop_statementContext } from "./PowerBuilderParser";
import { Do_while_loop_statementContext } from "./PowerBuilderParser";
import { Do_loop_while_statementContext } from "./PowerBuilderParser";
import { If_statementContext } from "./PowerBuilderParser";
import { If_simple_statementContext } from "./PowerBuilderParser";
import { Continue_statementContext } from "./PowerBuilderParser";
import { Continue_subContext } from "./PowerBuilderParser";
import { Post_eventContext } from "./PowerBuilderParser";
import { Exit_statementContext } from "./PowerBuilderParser";
import { Choose_statementContext } from "./PowerBuilderParser";
import { Choose_case_value_subContext } from "./PowerBuilderParser";
import { Choose_case_cond_subContext } from "./PowerBuilderParser";
import { Choose_case_range_subContext } from "./PowerBuilderParser";
import { Choose_case_else_subContext } from "./PowerBuilderParser";
import { Goto_statContext } from "./PowerBuilderParser";
import { Label_statContext } from "./PowerBuilderParser";
import { Try_catch_blockContext } from "./PowerBuilderParser";
import { Throw_statContext } from "./PowerBuilderParser";
import { IdentifierContext } from "./PowerBuilderParser";
import { Identifier_name_exContext } from "./PowerBuilderParser";
import { Identifier_nameContext } from "./PowerBuilderParser";
import { Atom_subContext } from "./PowerBuilderParser";
import { Atom_sub_call1Context } from "./PowerBuilderParser";
import { Atom_sub_array1Context } from "./PowerBuilderParser";
import { Atom_sub_ref1Context } from "./PowerBuilderParser";
import { Atom_sub_member1Context } from "./PowerBuilderParser";
import { AtomContext } from "./PowerBuilderParser";
import { Array_access_atomContext } from "./PowerBuilderParser";
import { Numeric_atomContext } from "./PowerBuilderParser";
import { Boolean_atomContext } from "./PowerBuilderParser";
import { Cast_expressionContext } from "./PowerBuilderParser";
import { Data_type_nameContext } from "./PowerBuilderParser";
import { DataTypeSubContext } from "./PowerBuilderParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PowerBuilderParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PowerBuilderParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PowerBuilderParser.start_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_rule?: (ctx: Start_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.header_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader_rule?: (ctx: Header_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.body_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody_rule?: (ctx: Body_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.window_property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_property?: (ctx: Window_propertyContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.window_property_attribute_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_property_attribute_sub?: (ctx: Window_property_attribute_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.attribute_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_name?: (ctx: Attribute_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.attribute_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_value?: (ctx: Attribute_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.forward_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForward_decl?: (ctx: Forward_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.datatype_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatype_decl?: (ctx: Datatype_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.type_variables_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_variables_decl?: (ctx: Type_variables_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.global_variables_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_variables_decl?: (ctx: Global_variables_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.variable_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_decl?: (ctx: Variable_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.variable_decl_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_decl_sub?: (ctx: Variable_decl_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.decimal_decl_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal_decl_sub?: (ctx: Decimal_decl_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.array_decl_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_decl_sub?: (ctx: Array_decl_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.constant_decl_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_decl_sub?: (ctx: Constant_decl_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.constant_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_decl?: (ctx: Constant_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.function_forward_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_forward_decl?: (ctx: Function_forward_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.parameter_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_sub?: (ctx: Parameter_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.parameters_list_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters_list_sub?: (ctx: Parameters_list_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.functions_forward_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions_forward_decl?: (ctx: Functions_forward_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.function_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_body?: (ctx: Function_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.on_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOn_body?: (ctx: On_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.event_forward_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_forward_decl?: (ctx: Event_forward_declContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.event_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_body?: (ctx: Event_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.access_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess_type?: (ctx: Access_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.access_modif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess_modif?: (ctx: Access_modifContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.access_modif_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess_modif_part?: (ctx: Access_modif_partContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.scope_modif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScope_modif?: (ctx: Scope_modifContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.boolean_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_expression?: (ctx: Boolean_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.condition_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_or?: (ctx: Condition_orContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.condition_and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_and?: (ctx: Condition_andContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.condition_not`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_not?: (ctx: Condition_notContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.condition_comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_comparison?: (ctx: Condition_comparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.add_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_expr?: (ctx: Add_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.mul_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul_expr?: (ctx: Mul_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.unary_sign_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_sign_expr?: (ctx: Unary_sign_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.statement_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_sub?: (ctx: Statement_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.assignment_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_sub?: (ctx: Assignment_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.assignment_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_statement?: (ctx: Assignment_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.lvalue_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue_sub?: (ctx: Lvalue_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.function_call_expression_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_expression_sub?: (ctx: Function_call_expression_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.function_virtual_call_expression_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_virtual_call_expression_sub?: (ctx: Function_virtual_call_expression_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.open_call_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_call_sub?: (ctx: Open_call_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.close_call_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClose_call_sub?: (ctx: Close_call_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.function_call_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_statement?: (ctx: Function_call_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.super_call_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuper_call_statement?: (ctx: Super_call_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.event_call_statement_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_call_statement_sub?: (ctx: Event_call_statement_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.event_call_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_call_statement?: (ctx: Event_call_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.create_call_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_call_sub?: (ctx: Create_call_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.create_call_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_call_statement?: (ctx: Create_call_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.destroy_call_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestroy_call_sub?: (ctx: Destroy_call_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.destroy_call_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestroy_call_statement?: (ctx: Destroy_call_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.for_loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_loop_statement?: (ctx: For_loop_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.do_while_loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_while_loop_statement?: (ctx: Do_while_loop_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.do_loop_while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_loop_while_statement?: (ctx: Do_loop_while_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.if_simple_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_simple_statement?: (ctx: If_simple_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.continue_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_statement?: (ctx: Continue_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.continue_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_sub?: (ctx: Continue_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.post_event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPost_event?: (ctx: Post_eventContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.exit_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExit_statement?: (ctx: Exit_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.choose_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoose_statement?: (ctx: Choose_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.choose_case_value_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoose_case_value_sub?: (ctx: Choose_case_value_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.choose_case_cond_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoose_case_cond_sub?: (ctx: Choose_case_cond_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.choose_case_range_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoose_case_range_sub?: (ctx: Choose_case_range_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.choose_case_else_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoose_case_else_sub?: (ctx: Choose_case_else_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.goto_stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoto_stat?: (ctx: Goto_statContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.label_stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel_stat?: (ctx: Label_statContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.try_catch_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_catch_block?: (ctx: Try_catch_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.throw_stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrow_stat?: (ctx: Throw_statContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.identifier_name_ex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier_name_ex?: (ctx: Identifier_name_exContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.identifier_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier_name?: (ctx: Identifier_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.atom_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom_sub?: (ctx: Atom_subContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.atom_sub_call1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom_sub_call1?: (ctx: Atom_sub_call1Context) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.atom_sub_array1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom_sub_array1?: (ctx: Atom_sub_array1Context) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.atom_sub_ref1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom_sub_ref1?: (ctx: Atom_sub_ref1Context) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.atom_sub_member1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom_sub_member1?: (ctx: Atom_sub_member1Context) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.array_access_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_access_atom?: (ctx: Array_access_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.numeric_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_atom?: (ctx: Numeric_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.boolean_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_atom?: (ctx: Boolean_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.cast_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast_expression?: (ctx: Cast_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.data_type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_type_name?: (ctx: Data_type_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PowerBuilderParser.dataTypeSub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataTypeSub?: (ctx: DataTypeSubContext) => Result;
}

