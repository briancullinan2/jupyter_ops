// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift/swift2/Swift2.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PrimaryContext } from "./Swift2Parser";
import { Postfix_operationContext } from "./Swift2Parser";
import { Function_call_expressionContext } from "./Swift2Parser";
import { Function_call_with_closure_expressionContext } from "./Swift2Parser";
import { Initializer_expressionContext } from "./Swift2Parser";
import { Initializer_expression_with_argsContext } from "./Swift2Parser";
import { Explicit_member_expression1Context } from "./Swift2Parser";
import { Explicit_member_expression2Context } from "./Swift2Parser";
import { Explicit_member_expression3Context } from "./Swift2Parser";
import { Explicit_member_expression4Context } from "./Swift2Parser";
import { Postfix_self_expressionContext } from "./Swift2Parser";
import { Dynamic_type_expressionContext } from "./Swift2Parser";
import { Subscript_expressionContext } from "./Swift2Parser";
import { Top_levelContext } from "./Swift2Parser";
import { StatementContext } from "./Swift2Parser";
import { StatementsContext } from "./Swift2Parser";
import { Loop_statementContext } from "./Swift2Parser";
import { For_statementContext } from "./Swift2Parser";
import { For_initContext } from "./Swift2Parser";
import { For_in_statementContext } from "./Swift2Parser";
import { While_statementContext } from "./Swift2Parser";
import { Condition_clauseContext } from "./Swift2Parser";
import { Condition_listContext } from "./Swift2Parser";
import { ConditionContext } from "./Swift2Parser";
import { Case_conditionContext } from "./Swift2Parser";
import { Optional_binding_conditionContext } from "./Swift2Parser";
import { Optional_binding_headContext } from "./Swift2Parser";
import { Optional_binding_continuation_listContext } from "./Swift2Parser";
import { Optional_binding_continuationContext } from "./Swift2Parser";
import { Repeat_while_statementContext } from "./Swift2Parser";
import { Branch_statementContext } from "./Swift2Parser";
import { If_statementContext } from "./Swift2Parser";
import { Else_clauseContext } from "./Swift2Parser";
import { Guard_statementContext } from "./Swift2Parser";
import { Switch_statementContext } from "./Swift2Parser";
import { Switch_casesContext } from "./Swift2Parser";
import { Switch_caseContext } from "./Swift2Parser";
import { Case_labelContext } from "./Swift2Parser";
import { Case_item_listContext } from "./Swift2Parser";
import { Default_labelContext } from "./Swift2Parser";
import { Where_clauseContext } from "./Swift2Parser";
import { Where_expressionContext } from "./Swift2Parser";
import { Labeled_statementContext } from "./Swift2Parser";
import { Statement_labelContext } from "./Swift2Parser";
import { Label_nameContext } from "./Swift2Parser";
import { Control_transfer_statementContext } from "./Swift2Parser";
import { Break_statementContext } from "./Swift2Parser";
import { Continue_statementContext } from "./Swift2Parser";
import { Fallthrough_statementContext } from "./Swift2Parser";
import { Return_statementContext } from "./Swift2Parser";
import { Availability_conditionContext } from "./Swift2Parser";
import { Availability_argumentsContext } from "./Swift2Parser";
import { Availability_argumentContext } from "./Swift2Parser";
import { Throw_statementContext } from "./Swift2Parser";
import { Defer_statementContext } from "./Swift2Parser";
import { Do_statementContext } from "./Swift2Parser";
import { Catch_clausesContext } from "./Swift2Parser";
import { Catch_clauseContext } from "./Swift2Parser";
import { Compiler_control_statementContext } from "./Swift2Parser";
import { Build_configuration_statementContext } from "./Swift2Parser";
import { Build_configuration_elseif_clausesContext } from "./Swift2Parser";
import { Build_configuration_elseif_clauseContext } from "./Swift2Parser";
import { Build_configuration_else_clauseContext } from "./Swift2Parser";
import { Build_configurationContext } from "./Swift2Parser";
import { Platform_testing_functionContext } from "./Swift2Parser";
import { Operating_systemContext } from "./Swift2Parser";
import { ArchitectureContext } from "./Swift2Parser";
import { Line_control_statementContext } from "./Swift2Parser";
import { Line_numberContext } from "./Swift2Parser";
import { File_nameContext } from "./Swift2Parser";
import { Generic_parameter_clauseContext } from "./Swift2Parser";
import { Generic_parameter_listContext } from "./Swift2Parser";
import { Generic_parameterContext } from "./Swift2Parser";
import { Requirement_clauseContext } from "./Swift2Parser";
import { Requirement_listContext } from "./Swift2Parser";
import { RequirementContext } from "./Swift2Parser";
import { Conformance_requirementContext } from "./Swift2Parser";
import { Same_type_requirementContext } from "./Swift2Parser";
import { Generic_argument_clauseContext } from "./Swift2Parser";
import { Generic_argument_listContext } from "./Swift2Parser";
import { Generic_argumentContext } from "./Swift2Parser";
import { DeclarationContext } from "./Swift2Parser";
import { DeclarationsContext } from "./Swift2Parser";
import { Top_level_declarationContext } from "./Swift2Parser";
import { Code_blockContext } from "./Swift2Parser";
import { Import_declarationContext } from "./Swift2Parser";
import { Import_kindContext } from "./Swift2Parser";
import { Import_pathContext } from "./Swift2Parser";
import { Import_path_identifierContext } from "./Swift2Parser";
import { Constant_declarationContext } from "./Swift2Parser";
import { Pattern_initializer_listContext } from "./Swift2Parser";
import { Pattern_initializerContext } from "./Swift2Parser";
import { InitializerContext } from "./Swift2Parser";
import { Variable_declarationContext } from "./Swift2Parser";
import { Variable_declaration_headContext } from "./Swift2Parser";
import { Variable_nameContext } from "./Swift2Parser";
import { Getter_setter_blockContext } from "./Swift2Parser";
import { Getter_clauseContext } from "./Swift2Parser";
import { Setter_clauseContext } from "./Swift2Parser";
import { Setter_nameContext } from "./Swift2Parser";
import { Getter_setter_keyword_blockContext } from "./Swift2Parser";
import { Getter_keyword_clauseContext } from "./Swift2Parser";
import { Setter_keyword_clauseContext } from "./Swift2Parser";
import { WillSet_didSet_blockContext } from "./Swift2Parser";
import { WillSet_clauseContext } from "./Swift2Parser";
import { DidSet_clauseContext } from "./Swift2Parser";
import { Typealias_declarationContext } from "./Swift2Parser";
import { Typealias_headContext } from "./Swift2Parser";
import { Typealias_nameContext } from "./Swift2Parser";
import { Typealias_assignmentContext } from "./Swift2Parser";
import { Function_declarationContext } from "./Swift2Parser";
import { Function_headContext } from "./Swift2Parser";
import { Function_nameContext } from "./Swift2Parser";
import { Function_signatureContext } from "./Swift2Parser";
import { Function_resultContext } from "./Swift2Parser";
import { Function_bodyContext } from "./Swift2Parser";
import { Parameter_clausesContext } from "./Swift2Parser";
import { Parameter_clauseContext } from "./Swift2Parser";
import { Parameter_listContext } from "./Swift2Parser";
import { ParameterContext } from "./Swift2Parser";
import { External_parameter_nameContext } from "./Swift2Parser";
import { Local_parameter_nameContext } from "./Swift2Parser";
import { Default_argument_clauseContext } from "./Swift2Parser";
import { Enum_declarationContext } from "./Swift2Parser";
import { Union_style_enumContext } from "./Swift2Parser";
import { Union_style_enum_membersContext } from "./Swift2Parser";
import { Union_style_enum_memberContext } from "./Swift2Parser";
import { Union_style_enum_case_clauseContext } from "./Swift2Parser";
import { Union_style_enum_case_listContext } from "./Swift2Parser";
import { Union_style_enum_caseContext } from "./Swift2Parser";
import { Enum_nameContext } from "./Swift2Parser";
import { Enum_case_nameContext } from "./Swift2Parser";
import { Raw_value_style_enumContext } from "./Swift2Parser";
import { Raw_value_style_enum_membersContext } from "./Swift2Parser";
import { Raw_value_style_enum_memberContext } from "./Swift2Parser";
import { Raw_value_style_enum_case_clauseContext } from "./Swift2Parser";
import { Raw_value_style_enum_case_listContext } from "./Swift2Parser";
import { Raw_value_style_enum_caseContext } from "./Swift2Parser";
import { Raw_value_assignmentContext } from "./Swift2Parser";
import { Raw_value_literalContext } from "./Swift2Parser";
import { Struct_declarationContext } from "./Swift2Parser";
import { Struct_nameContext } from "./Swift2Parser";
import { Struct_bodyContext } from "./Swift2Parser";
import { Class_declarationContext } from "./Swift2Parser";
import { Class_nameContext } from "./Swift2Parser";
import { Class_bodyContext } from "./Swift2Parser";
import { Protocol_declarationContext } from "./Swift2Parser";
import { Protocol_nameContext } from "./Swift2Parser";
import { Protocol_bodyContext } from "./Swift2Parser";
import { Protocol_member_declarationContext } from "./Swift2Parser";
import { Protocol_member_declarationsContext } from "./Swift2Parser";
import { Protocol_property_declarationContext } from "./Swift2Parser";
import { Protocol_method_declarationContext } from "./Swift2Parser";
import { Protocol_initializer_declarationContext } from "./Swift2Parser";
import { Protocol_subscript_declarationContext } from "./Swift2Parser";
import { Protocol_associated_type_declarationContext } from "./Swift2Parser";
import { Initializer_declarationContext } from "./Swift2Parser";
import { Initializer_headContext } from "./Swift2Parser";
import { Initializer_bodyContext } from "./Swift2Parser";
import { Deinitializer_declarationContext } from "./Swift2Parser";
import { Extension_declarationContext } from "./Swift2Parser";
import { Extension_bodyContext } from "./Swift2Parser";
import { Subscript_declarationContext } from "./Swift2Parser";
import { Subscript_headContext } from "./Swift2Parser";
import { Subscript_resultContext } from "./Swift2Parser";
import { Operator_declarationContext } from "./Swift2Parser";
import { Prefix_operator_declarationContext } from "./Swift2Parser";
import { Postfix_operator_declarationContext } from "./Swift2Parser";
import { Infix_operator_declarationContext } from "./Swift2Parser";
import { Infix_operator_attributesContext } from "./Swift2Parser";
import { Precedence_clauseContext } from "./Swift2Parser";
import { Precedence_levelContext } from "./Swift2Parser";
import { Associativity_clauseContext } from "./Swift2Parser";
import { AssociativityContext } from "./Swift2Parser";
import { Declaration_modifierContext } from "./Swift2Parser";
import { Declaration_modifiersContext } from "./Swift2Parser";
import { Access_level_modifierContext } from "./Swift2Parser";
import { PatternContext } from "./Swift2Parser";
import { Wildcard_patternContext } from "./Swift2Parser";
import { Identifier_patternContext } from "./Swift2Parser";
import { Value_binding_patternContext } from "./Swift2Parser";
import { Tuple_patternContext } from "./Swift2Parser";
import { Tuple_pattern_element_listContext } from "./Swift2Parser";
import { Tuple_pattern_elementContext } from "./Swift2Parser";
import { Enum_case_patternContext } from "./Swift2Parser";
import { Optional_patternContext } from "./Swift2Parser";
import { Expression_patternContext } from "./Swift2Parser";
import { AttributeContext } from "./Swift2Parser";
import { Attribute_nameContext } from "./Swift2Parser";
import { Attribute_argument_clauseContext } from "./Swift2Parser";
import { AttributesContext } from "./Swift2Parser";
import { Balanced_tokensContext } from "./Swift2Parser";
import { Balanced_tokenContext } from "./Swift2Parser";
import { ExpressionContext } from "./Swift2Parser";
import { Expression_listContext } from "./Swift2Parser";
import { Prefix_expressionContext } from "./Swift2Parser";
import { In_out_expressionContext } from "./Swift2Parser";
import { Try_operatorContext } from "./Swift2Parser";
import { Binary_expressionContext } from "./Swift2Parser";
import { Binary_expressionsContext } from "./Swift2Parser";
import { Conditional_operatorContext } from "./Swift2Parser";
import { Type_casting_operatorContext } from "./Swift2Parser";
import { Primary_expressionContext } from "./Swift2Parser";
import { Implicit_member_expressionContext } from "./Swift2Parser";
import { Literal_expressionContext } from "./Swift2Parser";
import { Array_literalContext } from "./Swift2Parser";
import { Array_literal_itemsContext } from "./Swift2Parser";
import { Array_literal_itemContext } from "./Swift2Parser";
import { Dictionary_literalContext } from "./Swift2Parser";
import { Dictionary_literal_itemsContext } from "./Swift2Parser";
import { Dictionary_literal_itemContext } from "./Swift2Parser";
import { Self_expressionContext } from "./Swift2Parser";
import { Superclass_expressionContext } from "./Swift2Parser";
import { Superclass_method_expressionContext } from "./Swift2Parser";
import { Superclass_subscript_expressionContext } from "./Swift2Parser";
import { Superclass_initializer_expressionContext } from "./Swift2Parser";
import { Closure_expressionContext } from "./Swift2Parser";
import { Closure_signatureContext } from "./Swift2Parser";
import { Capture_listContext } from "./Swift2Parser";
import { Capture_list_itemsContext } from "./Swift2Parser";
import { Capture_list_itemContext } from "./Swift2Parser";
import { Capture_specifierContext } from "./Swift2Parser";
import { Parenthesized_expressionContext } from "./Swift2Parser";
import { Expression_element_listContext } from "./Swift2Parser";
import { Expression_elementContext } from "./Swift2Parser";
import { Wildcard_expressionContext } from "./Swift2Parser";
import { Selector_expressionContext } from "./Swift2Parser";
import { Postfix_expressionContext } from "./Swift2Parser";
import { Argument_namesContext } from "./Swift2Parser";
import { Argument_nameContext } from "./Swift2Parser";
import { Trailing_closureContext } from "./Swift2Parser";
import { TypeContext } from "./Swift2Parser";
import { Type_annotationContext } from "./Swift2Parser";
import { Type_identifierContext } from "./Swift2Parser";
import { Type_nameContext } from "./Swift2Parser";
import { Tuple_typeContext } from "./Swift2Parser";
import { Tuple_type_bodyContext } from "./Swift2Parser";
import { Tuple_type_element_listContext } from "./Swift2Parser";
import { Tuple_type_elementContext } from "./Swift2Parser";
import { Element_nameContext } from "./Swift2Parser";
import { Protocol_composition_typeContext } from "./Swift2Parser";
import { Protocol_identifier_listContext } from "./Swift2Parser";
import { Protocol_identifierContext } from "./Swift2Parser";
import { Type_inheritance_clauseContext } from "./Swift2Parser";
import { Type_inheritance_listContext } from "./Swift2Parser";
import { Class_requirementContext } from "./Swift2Parser";
import { IdentifierContext } from "./Swift2Parser";
import { Identifier_listContext } from "./Swift2Parser";
import { Context_sensitive_keywordContext } from "./Swift2Parser";
import { Assignment_operatorContext } from "./Swift2Parser";
import { Negate_prefix_operatorContext } from "./Swift2Parser";
import { Build_ANDContext } from "./Swift2Parser";
import { Build_ORContext } from "./Swift2Parser";
import { Arrow_operatorContext } from "./Swift2Parser";
import { Range_operatorContext } from "./Swift2Parser";
import { Same_type_equalsContext } from "./Swift2Parser";
import { Binary_operatorContext } from "./Swift2Parser";
import { Prefix_operatorContext } from "./Swift2Parser";
import { Postfix_operatorContext } from "./Swift2Parser";
import { OperatorContext } from "./Swift2Parser";
import { Operator_characterContext } from "./Swift2Parser";
import { Operator_headContext } from "./Swift2Parser";
import { Dot_operator_headContext } from "./Swift2Parser";
import { Dot_operator_characterContext } from "./Swift2Parser";
import { LiteralContext } from "./Swift2Parser";
import { Numeric_literalContext } from "./Swift2Parser";
import { Boolean_literalContext } from "./Swift2Parser";
import { Nil_literalContext } from "./Swift2Parser";
import { Integer_literalContext } from "./Swift2Parser";
import { String_literalContext } from "./Swift2Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Swift2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Swift2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `primary`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `postfix_operation`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_operation?: (ctx: Postfix_operationContext) => Result;

	/**
	 * Visit a parse tree produced by the `function_call_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_expression?: (ctx: Function_call_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `function_call_with_closure_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_with_closure_expression?: (ctx: Function_call_with_closure_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `initializer_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer_expression?: (ctx: Initializer_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `initializer_expression_with_args`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer_expression_with_args?: (ctx: Initializer_expression_with_argsContext) => Result;

	/**
	 * Visit a parse tree produced by the `explicit_member_expression1`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicit_member_expression1?: (ctx: Explicit_member_expression1Context) => Result;

	/**
	 * Visit a parse tree produced by the `explicit_member_expression2`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicit_member_expression2?: (ctx: Explicit_member_expression2Context) => Result;

	/**
	 * Visit a parse tree produced by the `explicit_member_expression3`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicit_member_expression3?: (ctx: Explicit_member_expression3Context) => Result;

	/**
	 * Visit a parse tree produced by the `explicit_member_expression4`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicit_member_expression4?: (ctx: Explicit_member_expression4Context) => Result;

	/**
	 * Visit a parse tree produced by the `postfix_self_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_self_expression?: (ctx: Postfix_self_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dynamic_type_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamic_type_expression?: (ctx: Dynamic_type_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript_expression?: (ctx: Subscript_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.top_level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_level?: (ctx: Top_levelContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop_statement?: (ctx: Loop_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.for_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_statement?: (ctx: For_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.for_init`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_init?: (ctx: For_initContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.for_in_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_in_statement?: (ctx: For_in_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_statement?: (ctx: While_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.condition_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_clause?: (ctx: Condition_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.condition_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_list?: (ctx: Condition_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.case_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_condition?: (ctx: Case_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.optional_binding_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional_binding_condition?: (ctx: Optional_binding_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.optional_binding_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional_binding_head?: (ctx: Optional_binding_headContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.optional_binding_continuation_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional_binding_continuation_list?: (ctx: Optional_binding_continuation_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.optional_binding_continuation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional_binding_continuation?: (ctx: Optional_binding_continuationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.repeat_while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat_while_statement?: (ctx: Repeat_while_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.branch_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranch_statement?: (ctx: Branch_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.else_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_clause?: (ctx: Else_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.guard_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGuard_statement?: (ctx: Guard_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.switch_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_statement?: (ctx: Switch_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.switch_cases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_cases?: (ctx: Switch_casesContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.switch_case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_case?: (ctx: Switch_caseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.case_label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_label?: (ctx: Case_labelContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.case_item_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_item_list?: (ctx: Case_item_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.default_label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_label?: (ctx: Default_labelContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.where_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere_clause?: (ctx: Where_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.where_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere_expression?: (ctx: Where_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.labeled_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeled_statement?: (ctx: Labeled_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.statement_label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_label?: (ctx: Statement_labelContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.label_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel_name?: (ctx: Label_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.control_transfer_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControl_transfer_statement?: (ctx: Control_transfer_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.break_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_statement?: (ctx: Break_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.continue_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_statement?: (ctx: Continue_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.fallthrough_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFallthrough_statement?: (ctx: Fallthrough_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.availability_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAvailability_condition?: (ctx: Availability_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.availability_arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAvailability_arguments?: (ctx: Availability_argumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.availability_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAvailability_argument?: (ctx: Availability_argumentContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.throw_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrow_statement?: (ctx: Throw_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.defer_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefer_statement?: (ctx: Defer_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.do_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_statement?: (ctx: Do_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.catch_clauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatch_clauses?: (ctx: Catch_clausesContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.catch_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatch_clause?: (ctx: Catch_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.compiler_control_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompiler_control_statement?: (ctx: Compiler_control_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.build_configuration_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuild_configuration_statement?: (ctx: Build_configuration_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.build_configuration_elseif_clauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuild_configuration_elseif_clauses?: (ctx: Build_configuration_elseif_clausesContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.build_configuration_elseif_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuild_configuration_elseif_clause?: (ctx: Build_configuration_elseif_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.build_configuration_else_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuild_configuration_else_clause?: (ctx: Build_configuration_else_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.build_configuration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuild_configuration?: (ctx: Build_configurationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.platform_testing_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlatform_testing_function?: (ctx: Platform_testing_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.operating_system`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperating_system?: (ctx: Operating_systemContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.architecture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArchitecture?: (ctx: ArchitectureContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.line_control_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine_control_statement?: (ctx: Line_control_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.line_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine_number?: (ctx: Line_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.file_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_name?: (ctx: File_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.generic_parameter_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_parameter_clause?: (ctx: Generic_parameter_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.generic_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_parameter_list?: (ctx: Generic_parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.generic_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_parameter?: (ctx: Generic_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.requirement_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirement_clause?: (ctx: Requirement_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.requirement_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirement_list?: (ctx: Requirement_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.requirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirement?: (ctx: RequirementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.conformance_requirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConformance_requirement?: (ctx: Conformance_requirementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.same_type_requirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSame_type_requirement?: (ctx: Same_type_requirementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.generic_argument_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_argument_clause?: (ctx: Generic_argument_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.generic_argument_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_argument_list?: (ctx: Generic_argument_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.generic_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_argument?: (ctx: Generic_argumentContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarations?: (ctx: DeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.top_level_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_level_declaration?: (ctx: Top_level_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.code_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCode_block?: (ctx: Code_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.import_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_declaration?: (ctx: Import_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.import_kind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_kind?: (ctx: Import_kindContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.import_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_path?: (ctx: Import_pathContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.import_path_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_path_identifier?: (ctx: Import_path_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.constant_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_declaration?: (ctx: Constant_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.pattern_initializer_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_initializer_list?: (ctx: Pattern_initializer_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.pattern_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_initializer?: (ctx: Pattern_initializerContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_declaration?: (ctx: Variable_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.variable_declaration_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_declaration_head?: (ctx: Variable_declaration_headContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.variable_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_name?: (ctx: Variable_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.getter_setter_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter_setter_block?: (ctx: Getter_setter_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.getter_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter_clause?: (ctx: Getter_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.setter_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter_clause?: (ctx: Setter_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.setter_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter_name?: (ctx: Setter_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.getter_setter_keyword_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter_setter_keyword_block?: (ctx: Getter_setter_keyword_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.getter_keyword_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter_keyword_clause?: (ctx: Getter_keyword_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.setter_keyword_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter_keyword_clause?: (ctx: Setter_keyword_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.willSet_didSet_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWillSet_didSet_block?: (ctx: WillSet_didSet_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.willSet_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWillSet_clause?: (ctx: WillSet_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.didSet_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDidSet_clause?: (ctx: DidSet_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.typealias_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypealias_declaration?: (ctx: Typealias_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.typealias_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypealias_head?: (ctx: Typealias_headContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.typealias_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypealias_name?: (ctx: Typealias_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.typealias_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypealias_assignment?: (ctx: Typealias_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declaration?: (ctx: Function_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.function_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_head?: (ctx: Function_headContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name?: (ctx: Function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.function_signature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_signature?: (ctx: Function_signatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.function_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_result?: (ctx: Function_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.function_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_body?: (ctx: Function_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.parameter_clauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_clauses?: (ctx: Parameter_clausesContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.parameter_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_clause?: (ctx: Parameter_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_list?: (ctx: Parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.external_parameter_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternal_parameter_name?: (ctx: External_parameter_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.local_parameter_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_parameter_name?: (ctx: Local_parameter_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.default_argument_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_argument_clause?: (ctx: Default_argument_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.enum_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_declaration?: (ctx: Enum_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.union_style_enum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_style_enum?: (ctx: Union_style_enumContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.union_style_enum_members`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_style_enum_members?: (ctx: Union_style_enum_membersContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.union_style_enum_member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_style_enum_member?: (ctx: Union_style_enum_memberContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.union_style_enum_case_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_style_enum_case_clause?: (ctx: Union_style_enum_case_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.union_style_enum_case_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_style_enum_case_list?: (ctx: Union_style_enum_case_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.union_style_enum_case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_style_enum_case?: (ctx: Union_style_enum_caseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.enum_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_name?: (ctx: Enum_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.enum_case_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_case_name?: (ctx: Enum_case_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.raw_value_style_enum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_value_style_enum?: (ctx: Raw_value_style_enumContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.raw_value_style_enum_members`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_value_style_enum_members?: (ctx: Raw_value_style_enum_membersContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.raw_value_style_enum_member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_value_style_enum_member?: (ctx: Raw_value_style_enum_memberContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.raw_value_style_enum_case_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_value_style_enum_case_clause?: (ctx: Raw_value_style_enum_case_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.raw_value_style_enum_case_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_value_style_enum_case_list?: (ctx: Raw_value_style_enum_case_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.raw_value_style_enum_case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_value_style_enum_case?: (ctx: Raw_value_style_enum_caseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.raw_value_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_value_assignment?: (ctx: Raw_value_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.raw_value_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_value_literal?: (ctx: Raw_value_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.struct_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_declaration?: (ctx: Struct_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.struct_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_name?: (ctx: Struct_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.struct_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_body?: (ctx: Struct_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.class_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_declaration?: (ctx: Class_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.class_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_name?: (ctx: Class_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.class_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_body?: (ctx: Class_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_declaration?: (ctx: Protocol_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_name?: (ctx: Protocol_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_body?: (ctx: Protocol_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_member_declaration?: (ctx: Protocol_member_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_member_declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_member_declarations?: (ctx: Protocol_member_declarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_property_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_property_declaration?: (ctx: Protocol_property_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_method_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_method_declaration?: (ctx: Protocol_method_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_initializer_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_initializer_declaration?: (ctx: Protocol_initializer_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_subscript_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_subscript_declaration?: (ctx: Protocol_subscript_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_associated_type_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_associated_type_declaration?: (ctx: Protocol_associated_type_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.initializer_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer_declaration?: (ctx: Initializer_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.initializer_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer_head?: (ctx: Initializer_headContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.initializer_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer_body?: (ctx: Initializer_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.deinitializer_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeinitializer_declaration?: (ctx: Deinitializer_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.extension_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtension_declaration?: (ctx: Extension_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.extension_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtension_body?: (ctx: Extension_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.subscript_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript_declaration?: (ctx: Subscript_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.subscript_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript_head?: (ctx: Subscript_headContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.subscript_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript_result?: (ctx: Subscript_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.operator_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_declaration?: (ctx: Operator_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.prefix_operator_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix_operator_declaration?: (ctx: Prefix_operator_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.postfix_operator_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_operator_declaration?: (ctx: Postfix_operator_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.infix_operator_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfix_operator_declaration?: (ctx: Infix_operator_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.infix_operator_attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfix_operator_attributes?: (ctx: Infix_operator_attributesContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.precedence_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedence_clause?: (ctx: Precedence_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.precedence_level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedence_level?: (ctx: Precedence_levelContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.associativity_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociativity_clause?: (ctx: Associativity_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.associativity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociativity?: (ctx: AssociativityContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.declaration_modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_modifier?: (ctx: Declaration_modifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.declaration_modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_modifiers?: (ctx: Declaration_modifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.access_level_modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess_level_modifier?: (ctx: Access_level_modifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.wildcard_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcard_pattern?: (ctx: Wildcard_patternContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.identifier_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier_pattern?: (ctx: Identifier_patternContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.value_binding_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_binding_pattern?: (ctx: Value_binding_patternContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.tuple_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_pattern?: (ctx: Tuple_patternContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.tuple_pattern_element_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_pattern_element_list?: (ctx: Tuple_pattern_element_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.tuple_pattern_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_pattern_element?: (ctx: Tuple_pattern_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.enum_case_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_case_pattern?: (ctx: Enum_case_patternContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.optional_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional_pattern?: (ctx: Optional_patternContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.expression_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_pattern?: (ctx: Expression_patternContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.attribute_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_name?: (ctx: Attribute_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.attribute_argument_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_argument_clause?: (ctx: Attribute_argument_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.balanced_tokens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBalanced_tokens?: (ctx: Balanced_tokensContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.balanced_token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBalanced_token?: (ctx: Balanced_tokenContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.prefix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix_expression?: (ctx: Prefix_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.in_out_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn_out_expression?: (ctx: In_out_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.try_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_operator?: (ctx: Try_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.binary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_expression?: (ctx: Binary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.binary_expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_expressions?: (ctx: Binary_expressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.conditional_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_operator?: (ctx: Conditional_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.type_casting_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_casting_operator?: (ctx: Type_casting_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.implicit_member_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicit_member_expression?: (ctx: Implicit_member_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.literal_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_expression?: (ctx: Literal_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.array_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_literal?: (ctx: Array_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.array_literal_items`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_literal_items?: (ctx: Array_literal_itemsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.array_literal_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_literal_item?: (ctx: Array_literal_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.dictionary_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionary_literal?: (ctx: Dictionary_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.dictionary_literal_items`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionary_literal_items?: (ctx: Dictionary_literal_itemsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.dictionary_literal_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionary_literal_item?: (ctx: Dictionary_literal_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.self_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelf_expression?: (ctx: Self_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.superclass_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclass_expression?: (ctx: Superclass_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.superclass_method_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclass_method_expression?: (ctx: Superclass_method_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.superclass_subscript_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclass_subscript_expression?: (ctx: Superclass_subscript_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.superclass_initializer_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclass_initializer_expression?: (ctx: Superclass_initializer_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.closure_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosure_expression?: (ctx: Closure_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.closure_signature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosure_signature?: (ctx: Closure_signatureContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.capture_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapture_list?: (ctx: Capture_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.capture_list_items`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapture_list_items?: (ctx: Capture_list_itemsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.capture_list_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapture_list_item?: (ctx: Capture_list_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.capture_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapture_specifier?: (ctx: Capture_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.parenthesized_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesized_expression?: (ctx: Parenthesized_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.expression_element_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_element_list?: (ctx: Expression_element_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.expression_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_element?: (ctx: Expression_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.wildcard_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcard_expression?: (ctx: Wildcard_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.selector_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector_expression?: (ctx: Selector_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_expression?: (ctx: Postfix_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.argument_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_names?: (ctx: Argument_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.argument_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_name?: (ctx: Argument_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.trailing_closure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailing_closure?: (ctx: Trailing_closureContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.type_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_annotation?: (ctx: Type_annotationContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_identifier?: (ctx: Type_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_name?: (ctx: Type_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.tuple_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_type?: (ctx: Tuple_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.tuple_type_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_type_body?: (ctx: Tuple_type_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.tuple_type_element_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_type_element_list?: (ctx: Tuple_type_element_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.tuple_type_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_type_element?: (ctx: Tuple_type_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.element_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_name?: (ctx: Element_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_composition_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_composition_type?: (ctx: Protocol_composition_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_identifier_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_identifier_list?: (ctx: Protocol_identifier_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.protocol_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_identifier?: (ctx: Protocol_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.type_inheritance_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_inheritance_clause?: (ctx: Type_inheritance_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.type_inheritance_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_inheritance_list?: (ctx: Type_inheritance_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.class_requirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_requirement?: (ctx: Class_requirementContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.identifier_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier_list?: (ctx: Identifier_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.context_sensitive_keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContext_sensitive_keyword?: (ctx: Context_sensitive_keywordContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.negate_prefix_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegate_prefix_operator?: (ctx: Negate_prefix_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.build_AND`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuild_AND?: (ctx: Build_ANDContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.build_OR`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuild_OR?: (ctx: Build_ORContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.arrow_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrow_operator?: (ctx: Arrow_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.range_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_operator?: (ctx: Range_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.same_type_equals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSame_type_equals?: (ctx: Same_type_equalsContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.binary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_operator?: (ctx: Binary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.prefix_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix_operator?: (ctx: Prefix_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.postfix_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_operator?: (ctx: Postfix_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.operator_character`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_character?: (ctx: Operator_characterContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.operator_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_head?: (ctx: Operator_headContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.dot_operator_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDot_operator_head?: (ctx: Dot_operator_headContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.dot_operator_character`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDot_operator_character?: (ctx: Dot_operator_characterContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.numeric_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_literal?: (ctx: Numeric_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.boolean_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_literal?: (ctx: Boolean_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.nil_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNil_literal?: (ctx: Nil_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.integer_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_literal?: (ctx: Integer_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `Swift2Parser.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;
}

