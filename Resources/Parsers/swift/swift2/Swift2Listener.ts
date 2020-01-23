// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift/swift2/Swift2.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `Swift2Parser`.
 */
export interface Swift2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `primary`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `primary`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `postfix_operation`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfix_operation?: (ctx: Postfix_operationContext) => void;
	/**
	 * Exit a parse tree produced by the `postfix_operation`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfix_operation?: (ctx: Postfix_operationContext) => void;

	/**
	 * Enter a parse tree produced by the `function_call_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_expression?: (ctx: Function_call_expressionContext) => void;
	/**
	 * Exit a parse tree produced by the `function_call_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_expression?: (ctx: Function_call_expressionContext) => void;

	/**
	 * Enter a parse tree produced by the `function_call_with_closure_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_with_closure_expression?: (ctx: Function_call_with_closure_expressionContext) => void;
	/**
	 * Exit a parse tree produced by the `function_call_with_closure_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_with_closure_expression?: (ctx: Function_call_with_closure_expressionContext) => void;

	/**
	 * Enter a parse tree produced by the `initializer_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterInitializer_expression?: (ctx: Initializer_expressionContext) => void;
	/**
	 * Exit a parse tree produced by the `initializer_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitInitializer_expression?: (ctx: Initializer_expressionContext) => void;

	/**
	 * Enter a parse tree produced by the `initializer_expression_with_args`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterInitializer_expression_with_args?: (ctx: Initializer_expression_with_argsContext) => void;
	/**
	 * Exit a parse tree produced by the `initializer_expression_with_args`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitInitializer_expression_with_args?: (ctx: Initializer_expression_with_argsContext) => void;

	/**
	 * Enter a parse tree produced by the `explicit_member_expression1`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterExplicit_member_expression1?: (ctx: Explicit_member_expression1Context) => void;
	/**
	 * Exit a parse tree produced by the `explicit_member_expression1`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitExplicit_member_expression1?: (ctx: Explicit_member_expression1Context) => void;

	/**
	 * Enter a parse tree produced by the `explicit_member_expression2`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterExplicit_member_expression2?: (ctx: Explicit_member_expression2Context) => void;
	/**
	 * Exit a parse tree produced by the `explicit_member_expression2`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitExplicit_member_expression2?: (ctx: Explicit_member_expression2Context) => void;

	/**
	 * Enter a parse tree produced by the `explicit_member_expression3`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterExplicit_member_expression3?: (ctx: Explicit_member_expression3Context) => void;
	/**
	 * Exit a parse tree produced by the `explicit_member_expression3`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitExplicit_member_expression3?: (ctx: Explicit_member_expression3Context) => void;

	/**
	 * Enter a parse tree produced by the `explicit_member_expression4`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterExplicit_member_expression4?: (ctx: Explicit_member_expression4Context) => void;
	/**
	 * Exit a parse tree produced by the `explicit_member_expression4`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitExplicit_member_expression4?: (ctx: Explicit_member_expression4Context) => void;

	/**
	 * Enter a parse tree produced by the `postfix_self_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfix_self_expression?: (ctx: Postfix_self_expressionContext) => void;
	/**
	 * Exit a parse tree produced by the `postfix_self_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfix_self_expression?: (ctx: Postfix_self_expressionContext) => void;

	/**
	 * Enter a parse tree produced by the `dynamic_type_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterDynamic_type_expression?: (ctx: Dynamic_type_expressionContext) => void;
	/**
	 * Exit a parse tree produced by the `dynamic_type_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitDynamic_type_expression?: (ctx: Dynamic_type_expressionContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterSubscript_expression?: (ctx: Subscript_expressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript_expression`
	 * labeled alternative in `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitSubscript_expression?: (ctx: Subscript_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.top_level`.
	 * @param ctx the parse tree
	 */
	enterTop_level?: (ctx: Top_levelContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.top_level`.
	 * @param ctx the parse tree
	 */
	exitTop_level?: (ctx: Top_levelContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.loop_statement`.
	 * @param ctx the parse tree
	 */
	enterLoop_statement?: (ctx: Loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.loop_statement`.
	 * @param ctx the parse tree
	 */
	exitLoop_statement?: (ctx: Loop_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.for_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_statement?: (ctx: For_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.for_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_statement?: (ctx: For_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.for_init`.
	 * @param ctx the parse tree
	 */
	enterFor_init?: (ctx: For_initContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.for_init`.
	 * @param ctx the parse tree
	 */
	exitFor_init?: (ctx: For_initContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.for_in_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_in_statement?: (ctx: For_in_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.for_in_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_in_statement?: (ctx: For_in_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.condition_clause`.
	 * @param ctx the parse tree
	 */
	enterCondition_clause?: (ctx: Condition_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.condition_clause`.
	 * @param ctx the parse tree
	 */
	exitCondition_clause?: (ctx: Condition_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.condition_list`.
	 * @param ctx the parse tree
	 */
	enterCondition_list?: (ctx: Condition_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.condition_list`.
	 * @param ctx the parse tree
	 */
	exitCondition_list?: (ctx: Condition_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.case_condition`.
	 * @param ctx the parse tree
	 */
	enterCase_condition?: (ctx: Case_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.case_condition`.
	 * @param ctx the parse tree
	 */
	exitCase_condition?: (ctx: Case_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.optional_binding_condition`.
	 * @param ctx the parse tree
	 */
	enterOptional_binding_condition?: (ctx: Optional_binding_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.optional_binding_condition`.
	 * @param ctx the parse tree
	 */
	exitOptional_binding_condition?: (ctx: Optional_binding_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.optional_binding_head`.
	 * @param ctx the parse tree
	 */
	enterOptional_binding_head?: (ctx: Optional_binding_headContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.optional_binding_head`.
	 * @param ctx the parse tree
	 */
	exitOptional_binding_head?: (ctx: Optional_binding_headContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.optional_binding_continuation_list`.
	 * @param ctx the parse tree
	 */
	enterOptional_binding_continuation_list?: (ctx: Optional_binding_continuation_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.optional_binding_continuation_list`.
	 * @param ctx the parse tree
	 */
	exitOptional_binding_continuation_list?: (ctx: Optional_binding_continuation_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.optional_binding_continuation`.
	 * @param ctx the parse tree
	 */
	enterOptional_binding_continuation?: (ctx: Optional_binding_continuationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.optional_binding_continuation`.
	 * @param ctx the parse tree
	 */
	exitOptional_binding_continuation?: (ctx: Optional_binding_continuationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.repeat_while_statement`.
	 * @param ctx the parse tree
	 */
	enterRepeat_while_statement?: (ctx: Repeat_while_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.repeat_while_statement`.
	 * @param ctx the parse tree
	 */
	exitRepeat_while_statement?: (ctx: Repeat_while_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.branch_statement`.
	 * @param ctx the parse tree
	 */
	enterBranch_statement?: (ctx: Branch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.branch_statement`.
	 * @param ctx the parse tree
	 */
	exitBranch_statement?: (ctx: Branch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.else_clause`.
	 * @param ctx the parse tree
	 */
	enterElse_clause?: (ctx: Else_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.else_clause`.
	 * @param ctx the parse tree
	 */
	exitElse_clause?: (ctx: Else_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.guard_statement`.
	 * @param ctx the parse tree
	 */
	enterGuard_statement?: (ctx: Guard_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.guard_statement`.
	 * @param ctx the parse tree
	 */
	exitGuard_statement?: (ctx: Guard_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.switch_statement`.
	 * @param ctx the parse tree
	 */
	enterSwitch_statement?: (ctx: Switch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.switch_statement`.
	 * @param ctx the parse tree
	 */
	exitSwitch_statement?: (ctx: Switch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.switch_cases`.
	 * @param ctx the parse tree
	 */
	enterSwitch_cases?: (ctx: Switch_casesContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.switch_cases`.
	 * @param ctx the parse tree
	 */
	exitSwitch_cases?: (ctx: Switch_casesContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.switch_case`.
	 * @param ctx the parse tree
	 */
	enterSwitch_case?: (ctx: Switch_caseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.switch_case`.
	 * @param ctx the parse tree
	 */
	exitSwitch_case?: (ctx: Switch_caseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.case_label`.
	 * @param ctx the parse tree
	 */
	enterCase_label?: (ctx: Case_labelContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.case_label`.
	 * @param ctx the parse tree
	 */
	exitCase_label?: (ctx: Case_labelContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.case_item_list`.
	 * @param ctx the parse tree
	 */
	enterCase_item_list?: (ctx: Case_item_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.case_item_list`.
	 * @param ctx the parse tree
	 */
	exitCase_item_list?: (ctx: Case_item_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.default_label`.
	 * @param ctx the parse tree
	 */
	enterDefault_label?: (ctx: Default_labelContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.default_label`.
	 * @param ctx the parse tree
	 */
	exitDefault_label?: (ctx: Default_labelContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.where_clause`.
	 * @param ctx the parse tree
	 */
	enterWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.where_clause`.
	 * @param ctx the parse tree
	 */
	exitWhere_clause?: (ctx: Where_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.where_expression`.
	 * @param ctx the parse tree
	 */
	enterWhere_expression?: (ctx: Where_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.where_expression`.
	 * @param ctx the parse tree
	 */
	exitWhere_expression?: (ctx: Where_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.labeled_statement`.
	 * @param ctx the parse tree
	 */
	enterLabeled_statement?: (ctx: Labeled_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.labeled_statement`.
	 * @param ctx the parse tree
	 */
	exitLabeled_statement?: (ctx: Labeled_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.statement_label`.
	 * @param ctx the parse tree
	 */
	enterStatement_label?: (ctx: Statement_labelContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.statement_label`.
	 * @param ctx the parse tree
	 */
	exitStatement_label?: (ctx: Statement_labelContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.label_name`.
	 * @param ctx the parse tree
	 */
	enterLabel_name?: (ctx: Label_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.label_name`.
	 * @param ctx the parse tree
	 */
	exitLabel_name?: (ctx: Label_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.control_transfer_statement`.
	 * @param ctx the parse tree
	 */
	enterControl_transfer_statement?: (ctx: Control_transfer_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.control_transfer_statement`.
	 * @param ctx the parse tree
	 */
	exitControl_transfer_statement?: (ctx: Control_transfer_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.break_statement`.
	 * @param ctx the parse tree
	 */
	enterBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.break_statement`.
	 * @param ctx the parse tree
	 */
	exitBreak_statement?: (ctx: Break_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.continue_statement`.
	 * @param ctx the parse tree
	 */
	enterContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.continue_statement`.
	 * @param ctx the parse tree
	 */
	exitContinue_statement?: (ctx: Continue_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.fallthrough_statement`.
	 * @param ctx the parse tree
	 */
	enterFallthrough_statement?: (ctx: Fallthrough_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.fallthrough_statement`.
	 * @param ctx the parse tree
	 */
	exitFallthrough_statement?: (ctx: Fallthrough_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.availability_condition`.
	 * @param ctx the parse tree
	 */
	enterAvailability_condition?: (ctx: Availability_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.availability_condition`.
	 * @param ctx the parse tree
	 */
	exitAvailability_condition?: (ctx: Availability_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.availability_arguments`.
	 * @param ctx the parse tree
	 */
	enterAvailability_arguments?: (ctx: Availability_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.availability_arguments`.
	 * @param ctx the parse tree
	 */
	exitAvailability_arguments?: (ctx: Availability_argumentsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.availability_argument`.
	 * @param ctx the parse tree
	 */
	enterAvailability_argument?: (ctx: Availability_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.availability_argument`.
	 * @param ctx the parse tree
	 */
	exitAvailability_argument?: (ctx: Availability_argumentContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.throw_statement`.
	 * @param ctx the parse tree
	 */
	enterThrow_statement?: (ctx: Throw_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.throw_statement`.
	 * @param ctx the parse tree
	 */
	exitThrow_statement?: (ctx: Throw_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.defer_statement`.
	 * @param ctx the parse tree
	 */
	enterDefer_statement?: (ctx: Defer_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.defer_statement`.
	 * @param ctx the parse tree
	 */
	exitDefer_statement?: (ctx: Defer_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.do_statement`.
	 * @param ctx the parse tree
	 */
	enterDo_statement?: (ctx: Do_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.do_statement`.
	 * @param ctx the parse tree
	 */
	exitDo_statement?: (ctx: Do_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.catch_clauses`.
	 * @param ctx the parse tree
	 */
	enterCatch_clauses?: (ctx: Catch_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.catch_clauses`.
	 * @param ctx the parse tree
	 */
	exitCatch_clauses?: (ctx: Catch_clausesContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.catch_clause`.
	 * @param ctx the parse tree
	 */
	enterCatch_clause?: (ctx: Catch_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.catch_clause`.
	 * @param ctx the parse tree
	 */
	exitCatch_clause?: (ctx: Catch_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.compiler_control_statement`.
	 * @param ctx the parse tree
	 */
	enterCompiler_control_statement?: (ctx: Compiler_control_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.compiler_control_statement`.
	 * @param ctx the parse tree
	 */
	exitCompiler_control_statement?: (ctx: Compiler_control_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.build_configuration_statement`.
	 * @param ctx the parse tree
	 */
	enterBuild_configuration_statement?: (ctx: Build_configuration_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.build_configuration_statement`.
	 * @param ctx the parse tree
	 */
	exitBuild_configuration_statement?: (ctx: Build_configuration_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.build_configuration_elseif_clauses`.
	 * @param ctx the parse tree
	 */
	enterBuild_configuration_elseif_clauses?: (ctx: Build_configuration_elseif_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.build_configuration_elseif_clauses`.
	 * @param ctx the parse tree
	 */
	exitBuild_configuration_elseif_clauses?: (ctx: Build_configuration_elseif_clausesContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.build_configuration_elseif_clause`.
	 * @param ctx the parse tree
	 */
	enterBuild_configuration_elseif_clause?: (ctx: Build_configuration_elseif_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.build_configuration_elseif_clause`.
	 * @param ctx the parse tree
	 */
	exitBuild_configuration_elseif_clause?: (ctx: Build_configuration_elseif_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.build_configuration_else_clause`.
	 * @param ctx the parse tree
	 */
	enterBuild_configuration_else_clause?: (ctx: Build_configuration_else_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.build_configuration_else_clause`.
	 * @param ctx the parse tree
	 */
	exitBuild_configuration_else_clause?: (ctx: Build_configuration_else_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.build_configuration`.
	 * @param ctx the parse tree
	 */
	enterBuild_configuration?: (ctx: Build_configurationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.build_configuration`.
	 * @param ctx the parse tree
	 */
	exitBuild_configuration?: (ctx: Build_configurationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.platform_testing_function`.
	 * @param ctx the parse tree
	 */
	enterPlatform_testing_function?: (ctx: Platform_testing_functionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.platform_testing_function`.
	 * @param ctx the parse tree
	 */
	exitPlatform_testing_function?: (ctx: Platform_testing_functionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.operating_system`.
	 * @param ctx the parse tree
	 */
	enterOperating_system?: (ctx: Operating_systemContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.operating_system`.
	 * @param ctx the parse tree
	 */
	exitOperating_system?: (ctx: Operating_systemContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.architecture`.
	 * @param ctx the parse tree
	 */
	enterArchitecture?: (ctx: ArchitectureContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.architecture`.
	 * @param ctx the parse tree
	 */
	exitArchitecture?: (ctx: ArchitectureContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.line_control_statement`.
	 * @param ctx the parse tree
	 */
	enterLine_control_statement?: (ctx: Line_control_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.line_control_statement`.
	 * @param ctx the parse tree
	 */
	exitLine_control_statement?: (ctx: Line_control_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.line_number`.
	 * @param ctx the parse tree
	 */
	enterLine_number?: (ctx: Line_numberContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.line_number`.
	 * @param ctx the parse tree
	 */
	exitLine_number?: (ctx: Line_numberContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.file_name`.
	 * @param ctx the parse tree
	 */
	enterFile_name?: (ctx: File_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.file_name`.
	 * @param ctx the parse tree
	 */
	exitFile_name?: (ctx: File_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.generic_parameter_clause`.
	 * @param ctx the parse tree
	 */
	enterGeneric_parameter_clause?: (ctx: Generic_parameter_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.generic_parameter_clause`.
	 * @param ctx the parse tree
	 */
	exitGeneric_parameter_clause?: (ctx: Generic_parameter_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.generic_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterGeneric_parameter_list?: (ctx: Generic_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.generic_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitGeneric_parameter_list?: (ctx: Generic_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.generic_parameter`.
	 * @param ctx the parse tree
	 */
	enterGeneric_parameter?: (ctx: Generic_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.generic_parameter`.
	 * @param ctx the parse tree
	 */
	exitGeneric_parameter?: (ctx: Generic_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.requirement_clause`.
	 * @param ctx the parse tree
	 */
	enterRequirement_clause?: (ctx: Requirement_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.requirement_clause`.
	 * @param ctx the parse tree
	 */
	exitRequirement_clause?: (ctx: Requirement_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.requirement_list`.
	 * @param ctx the parse tree
	 */
	enterRequirement_list?: (ctx: Requirement_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.requirement_list`.
	 * @param ctx the parse tree
	 */
	exitRequirement_list?: (ctx: Requirement_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.requirement`.
	 * @param ctx the parse tree
	 */
	enterRequirement?: (ctx: RequirementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.requirement`.
	 * @param ctx the parse tree
	 */
	exitRequirement?: (ctx: RequirementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.conformance_requirement`.
	 * @param ctx the parse tree
	 */
	enterConformance_requirement?: (ctx: Conformance_requirementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.conformance_requirement`.
	 * @param ctx the parse tree
	 */
	exitConformance_requirement?: (ctx: Conformance_requirementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.same_type_requirement`.
	 * @param ctx the parse tree
	 */
	enterSame_type_requirement?: (ctx: Same_type_requirementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.same_type_requirement`.
	 * @param ctx the parse tree
	 */
	exitSame_type_requirement?: (ctx: Same_type_requirementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.generic_argument_clause`.
	 * @param ctx the parse tree
	 */
	enterGeneric_argument_clause?: (ctx: Generic_argument_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.generic_argument_clause`.
	 * @param ctx the parse tree
	 */
	exitGeneric_argument_clause?: (ctx: Generic_argument_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.generic_argument_list`.
	 * @param ctx the parse tree
	 */
	enterGeneric_argument_list?: (ctx: Generic_argument_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.generic_argument_list`.
	 * @param ctx the parse tree
	 */
	exitGeneric_argument_list?: (ctx: Generic_argument_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.generic_argument`.
	 * @param ctx the parse tree
	 */
	enterGeneric_argument?: (ctx: Generic_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.generic_argument`.
	 * @param ctx the parse tree
	 */
	exitGeneric_argument?: (ctx: Generic_argumentContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.declarations`.
	 * @param ctx the parse tree
	 */
	enterDeclarations?: (ctx: DeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.declarations`.
	 * @param ctx the parse tree
	 */
	exitDeclarations?: (ctx: DeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.top_level_declaration`.
	 * @param ctx the parse tree
	 */
	enterTop_level_declaration?: (ctx: Top_level_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.top_level_declaration`.
	 * @param ctx the parse tree
	 */
	exitTop_level_declaration?: (ctx: Top_level_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.code_block`.
	 * @param ctx the parse tree
	 */
	enterCode_block?: (ctx: Code_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.code_block`.
	 * @param ctx the parse tree
	 */
	exitCode_block?: (ctx: Code_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.import_declaration`.
	 * @param ctx the parse tree
	 */
	enterImport_declaration?: (ctx: Import_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.import_declaration`.
	 * @param ctx the parse tree
	 */
	exitImport_declaration?: (ctx: Import_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.import_kind`.
	 * @param ctx the parse tree
	 */
	enterImport_kind?: (ctx: Import_kindContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.import_kind`.
	 * @param ctx the parse tree
	 */
	exitImport_kind?: (ctx: Import_kindContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.import_path`.
	 * @param ctx the parse tree
	 */
	enterImport_path?: (ctx: Import_pathContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.import_path`.
	 * @param ctx the parse tree
	 */
	exitImport_path?: (ctx: Import_pathContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.import_path_identifier`.
	 * @param ctx the parse tree
	 */
	enterImport_path_identifier?: (ctx: Import_path_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.import_path_identifier`.
	 * @param ctx the parse tree
	 */
	exitImport_path_identifier?: (ctx: Import_path_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.constant_declaration`.
	 * @param ctx the parse tree
	 */
	enterConstant_declaration?: (ctx: Constant_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.constant_declaration`.
	 * @param ctx the parse tree
	 */
	exitConstant_declaration?: (ctx: Constant_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.pattern_initializer_list`.
	 * @param ctx the parse tree
	 */
	enterPattern_initializer_list?: (ctx: Pattern_initializer_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.pattern_initializer_list`.
	 * @param ctx the parse tree
	 */
	exitPattern_initializer_list?: (ctx: Pattern_initializer_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.pattern_initializer`.
	 * @param ctx the parse tree
	 */
	enterPattern_initializer?: (ctx: Pattern_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.pattern_initializer`.
	 * @param ctx the parse tree
	 */
	exitPattern_initializer?: (ctx: Pattern_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitVariable_declaration?: (ctx: Variable_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.variable_declaration_head`.
	 * @param ctx the parse tree
	 */
	enterVariable_declaration_head?: (ctx: Variable_declaration_headContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.variable_declaration_head`.
	 * @param ctx the parse tree
	 */
	exitVariable_declaration_head?: (ctx: Variable_declaration_headContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.variable_name`.
	 * @param ctx the parse tree
	 */
	enterVariable_name?: (ctx: Variable_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.variable_name`.
	 * @param ctx the parse tree
	 */
	exitVariable_name?: (ctx: Variable_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.getter_setter_block`.
	 * @param ctx the parse tree
	 */
	enterGetter_setter_block?: (ctx: Getter_setter_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.getter_setter_block`.
	 * @param ctx the parse tree
	 */
	exitGetter_setter_block?: (ctx: Getter_setter_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.getter_clause`.
	 * @param ctx the parse tree
	 */
	enterGetter_clause?: (ctx: Getter_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.getter_clause`.
	 * @param ctx the parse tree
	 */
	exitGetter_clause?: (ctx: Getter_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.setter_clause`.
	 * @param ctx the parse tree
	 */
	enterSetter_clause?: (ctx: Setter_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.setter_clause`.
	 * @param ctx the parse tree
	 */
	exitSetter_clause?: (ctx: Setter_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.setter_name`.
	 * @param ctx the parse tree
	 */
	enterSetter_name?: (ctx: Setter_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.setter_name`.
	 * @param ctx the parse tree
	 */
	exitSetter_name?: (ctx: Setter_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.getter_setter_keyword_block`.
	 * @param ctx the parse tree
	 */
	enterGetter_setter_keyword_block?: (ctx: Getter_setter_keyword_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.getter_setter_keyword_block`.
	 * @param ctx the parse tree
	 */
	exitGetter_setter_keyword_block?: (ctx: Getter_setter_keyword_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.getter_keyword_clause`.
	 * @param ctx the parse tree
	 */
	enterGetter_keyword_clause?: (ctx: Getter_keyword_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.getter_keyword_clause`.
	 * @param ctx the parse tree
	 */
	exitGetter_keyword_clause?: (ctx: Getter_keyword_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.setter_keyword_clause`.
	 * @param ctx the parse tree
	 */
	enterSetter_keyword_clause?: (ctx: Setter_keyword_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.setter_keyword_clause`.
	 * @param ctx the parse tree
	 */
	exitSetter_keyword_clause?: (ctx: Setter_keyword_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.willSet_didSet_block`.
	 * @param ctx the parse tree
	 */
	enterWillSet_didSet_block?: (ctx: WillSet_didSet_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.willSet_didSet_block`.
	 * @param ctx the parse tree
	 */
	exitWillSet_didSet_block?: (ctx: WillSet_didSet_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.willSet_clause`.
	 * @param ctx the parse tree
	 */
	enterWillSet_clause?: (ctx: WillSet_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.willSet_clause`.
	 * @param ctx the parse tree
	 */
	exitWillSet_clause?: (ctx: WillSet_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.didSet_clause`.
	 * @param ctx the parse tree
	 */
	enterDidSet_clause?: (ctx: DidSet_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.didSet_clause`.
	 * @param ctx the parse tree
	 */
	exitDidSet_clause?: (ctx: DidSet_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.typealias_declaration`.
	 * @param ctx the parse tree
	 */
	enterTypealias_declaration?: (ctx: Typealias_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.typealias_declaration`.
	 * @param ctx the parse tree
	 */
	exitTypealias_declaration?: (ctx: Typealias_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.typealias_head`.
	 * @param ctx the parse tree
	 */
	enterTypealias_head?: (ctx: Typealias_headContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.typealias_head`.
	 * @param ctx the parse tree
	 */
	exitTypealias_head?: (ctx: Typealias_headContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.typealias_name`.
	 * @param ctx the parse tree
	 */
	enterTypealias_name?: (ctx: Typealias_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.typealias_name`.
	 * @param ctx the parse tree
	 */
	exitTypealias_name?: (ctx: Typealias_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.typealias_assignment`.
	 * @param ctx the parse tree
	 */
	enterTypealias_assignment?: (ctx: Typealias_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.typealias_assignment`.
	 * @param ctx the parse tree
	 */
	exitTypealias_assignment?: (ctx: Typealias_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.function_head`.
	 * @param ctx the parse tree
	 */
	enterFunction_head?: (ctx: Function_headContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.function_head`.
	 * @param ctx the parse tree
	 */
	exitFunction_head?: (ctx: Function_headContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.function_signature`.
	 * @param ctx the parse tree
	 */
	enterFunction_signature?: (ctx: Function_signatureContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.function_signature`.
	 * @param ctx the parse tree
	 */
	exitFunction_signature?: (ctx: Function_signatureContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.function_result`.
	 * @param ctx the parse tree
	 */
	enterFunction_result?: (ctx: Function_resultContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.function_result`.
	 * @param ctx the parse tree
	 */
	exitFunction_result?: (ctx: Function_resultContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.function_body`.
	 * @param ctx the parse tree
	 */
	enterFunction_body?: (ctx: Function_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.function_body`.
	 * @param ctx the parse tree
	 */
	exitFunction_body?: (ctx: Function_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.parameter_clauses`.
	 * @param ctx the parse tree
	 */
	enterParameter_clauses?: (ctx: Parameter_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.parameter_clauses`.
	 * @param ctx the parse tree
	 */
	exitParameter_clauses?: (ctx: Parameter_clausesContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.parameter_clause`.
	 * @param ctx the parse tree
	 */
	enterParameter_clause?: (ctx: Parameter_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.parameter_clause`.
	 * @param ctx the parse tree
	 */
	exitParameter_clause?: (ctx: Parameter_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.parameter_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_list?: (ctx: Parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.parameter_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_list?: (ctx: Parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.external_parameter_name`.
	 * @param ctx the parse tree
	 */
	enterExternal_parameter_name?: (ctx: External_parameter_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.external_parameter_name`.
	 * @param ctx the parse tree
	 */
	exitExternal_parameter_name?: (ctx: External_parameter_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.local_parameter_name`.
	 * @param ctx the parse tree
	 */
	enterLocal_parameter_name?: (ctx: Local_parameter_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.local_parameter_name`.
	 * @param ctx the parse tree
	 */
	exitLocal_parameter_name?: (ctx: Local_parameter_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.default_argument_clause`.
	 * @param ctx the parse tree
	 */
	enterDefault_argument_clause?: (ctx: Default_argument_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.default_argument_clause`.
	 * @param ctx the parse tree
	 */
	exitDefault_argument_clause?: (ctx: Default_argument_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.enum_declaration`.
	 * @param ctx the parse tree
	 */
	enterEnum_declaration?: (ctx: Enum_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.enum_declaration`.
	 * @param ctx the parse tree
	 */
	exitEnum_declaration?: (ctx: Enum_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.union_style_enum`.
	 * @param ctx the parse tree
	 */
	enterUnion_style_enum?: (ctx: Union_style_enumContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.union_style_enum`.
	 * @param ctx the parse tree
	 */
	exitUnion_style_enum?: (ctx: Union_style_enumContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.union_style_enum_members`.
	 * @param ctx the parse tree
	 */
	enterUnion_style_enum_members?: (ctx: Union_style_enum_membersContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.union_style_enum_members`.
	 * @param ctx the parse tree
	 */
	exitUnion_style_enum_members?: (ctx: Union_style_enum_membersContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.union_style_enum_member`.
	 * @param ctx the parse tree
	 */
	enterUnion_style_enum_member?: (ctx: Union_style_enum_memberContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.union_style_enum_member`.
	 * @param ctx the parse tree
	 */
	exitUnion_style_enum_member?: (ctx: Union_style_enum_memberContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.union_style_enum_case_clause`.
	 * @param ctx the parse tree
	 */
	enterUnion_style_enum_case_clause?: (ctx: Union_style_enum_case_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.union_style_enum_case_clause`.
	 * @param ctx the parse tree
	 */
	exitUnion_style_enum_case_clause?: (ctx: Union_style_enum_case_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.union_style_enum_case_list`.
	 * @param ctx the parse tree
	 */
	enterUnion_style_enum_case_list?: (ctx: Union_style_enum_case_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.union_style_enum_case_list`.
	 * @param ctx the parse tree
	 */
	exitUnion_style_enum_case_list?: (ctx: Union_style_enum_case_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.union_style_enum_case`.
	 * @param ctx the parse tree
	 */
	enterUnion_style_enum_case?: (ctx: Union_style_enum_caseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.union_style_enum_case`.
	 * @param ctx the parse tree
	 */
	exitUnion_style_enum_case?: (ctx: Union_style_enum_caseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.enum_name`.
	 * @param ctx the parse tree
	 */
	enterEnum_name?: (ctx: Enum_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.enum_name`.
	 * @param ctx the parse tree
	 */
	exitEnum_name?: (ctx: Enum_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.enum_case_name`.
	 * @param ctx the parse tree
	 */
	enterEnum_case_name?: (ctx: Enum_case_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.enum_case_name`.
	 * @param ctx the parse tree
	 */
	exitEnum_case_name?: (ctx: Enum_case_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.raw_value_style_enum`.
	 * @param ctx the parse tree
	 */
	enterRaw_value_style_enum?: (ctx: Raw_value_style_enumContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.raw_value_style_enum`.
	 * @param ctx the parse tree
	 */
	exitRaw_value_style_enum?: (ctx: Raw_value_style_enumContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.raw_value_style_enum_members`.
	 * @param ctx the parse tree
	 */
	enterRaw_value_style_enum_members?: (ctx: Raw_value_style_enum_membersContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.raw_value_style_enum_members`.
	 * @param ctx the parse tree
	 */
	exitRaw_value_style_enum_members?: (ctx: Raw_value_style_enum_membersContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.raw_value_style_enum_member`.
	 * @param ctx the parse tree
	 */
	enterRaw_value_style_enum_member?: (ctx: Raw_value_style_enum_memberContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.raw_value_style_enum_member`.
	 * @param ctx the parse tree
	 */
	exitRaw_value_style_enum_member?: (ctx: Raw_value_style_enum_memberContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.raw_value_style_enum_case_clause`.
	 * @param ctx the parse tree
	 */
	enterRaw_value_style_enum_case_clause?: (ctx: Raw_value_style_enum_case_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.raw_value_style_enum_case_clause`.
	 * @param ctx the parse tree
	 */
	exitRaw_value_style_enum_case_clause?: (ctx: Raw_value_style_enum_case_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.raw_value_style_enum_case_list`.
	 * @param ctx the parse tree
	 */
	enterRaw_value_style_enum_case_list?: (ctx: Raw_value_style_enum_case_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.raw_value_style_enum_case_list`.
	 * @param ctx the parse tree
	 */
	exitRaw_value_style_enum_case_list?: (ctx: Raw_value_style_enum_case_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.raw_value_style_enum_case`.
	 * @param ctx the parse tree
	 */
	enterRaw_value_style_enum_case?: (ctx: Raw_value_style_enum_caseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.raw_value_style_enum_case`.
	 * @param ctx the parse tree
	 */
	exitRaw_value_style_enum_case?: (ctx: Raw_value_style_enum_caseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.raw_value_assignment`.
	 * @param ctx the parse tree
	 */
	enterRaw_value_assignment?: (ctx: Raw_value_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.raw_value_assignment`.
	 * @param ctx the parse tree
	 */
	exitRaw_value_assignment?: (ctx: Raw_value_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.raw_value_literal`.
	 * @param ctx the parse tree
	 */
	enterRaw_value_literal?: (ctx: Raw_value_literalContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.raw_value_literal`.
	 * @param ctx the parse tree
	 */
	exitRaw_value_literal?: (ctx: Raw_value_literalContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.struct_declaration`.
	 * @param ctx the parse tree
	 */
	enterStruct_declaration?: (ctx: Struct_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.struct_declaration`.
	 * @param ctx the parse tree
	 */
	exitStruct_declaration?: (ctx: Struct_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.struct_name`.
	 * @param ctx the parse tree
	 */
	enterStruct_name?: (ctx: Struct_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.struct_name`.
	 * @param ctx the parse tree
	 */
	exitStruct_name?: (ctx: Struct_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.struct_body`.
	 * @param ctx the parse tree
	 */
	enterStruct_body?: (ctx: Struct_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.struct_body`.
	 * @param ctx the parse tree
	 */
	exitStruct_body?: (ctx: Struct_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.class_declaration`.
	 * @param ctx the parse tree
	 */
	enterClass_declaration?: (ctx: Class_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.class_declaration`.
	 * @param ctx the parse tree
	 */
	exitClass_declaration?: (ctx: Class_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.class_name`.
	 * @param ctx the parse tree
	 */
	enterClass_name?: (ctx: Class_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.class_name`.
	 * @param ctx the parse tree
	 */
	exitClass_name?: (ctx: Class_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.class_body`.
	 * @param ctx the parse tree
	 */
	enterClass_body?: (ctx: Class_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.class_body`.
	 * @param ctx the parse tree
	 */
	exitClass_body?: (ctx: Class_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_declaration`.
	 * @param ctx the parse tree
	 */
	enterProtocol_declaration?: (ctx: Protocol_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_declaration`.
	 * @param ctx the parse tree
	 */
	exitProtocol_declaration?: (ctx: Protocol_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_name`.
	 * @param ctx the parse tree
	 */
	enterProtocol_name?: (ctx: Protocol_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_name`.
	 * @param ctx the parse tree
	 */
	exitProtocol_name?: (ctx: Protocol_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_body`.
	 * @param ctx the parse tree
	 */
	enterProtocol_body?: (ctx: Protocol_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_body`.
	 * @param ctx the parse tree
	 */
	exitProtocol_body?: (ctx: Protocol_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterProtocol_member_declaration?: (ctx: Protocol_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitProtocol_member_declaration?: (ctx: Protocol_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_member_declarations`.
	 * @param ctx the parse tree
	 */
	enterProtocol_member_declarations?: (ctx: Protocol_member_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_member_declarations`.
	 * @param ctx the parse tree
	 */
	exitProtocol_member_declarations?: (ctx: Protocol_member_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_property_declaration`.
	 * @param ctx the parse tree
	 */
	enterProtocol_property_declaration?: (ctx: Protocol_property_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_property_declaration`.
	 * @param ctx the parse tree
	 */
	exitProtocol_property_declaration?: (ctx: Protocol_property_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_method_declaration`.
	 * @param ctx the parse tree
	 */
	enterProtocol_method_declaration?: (ctx: Protocol_method_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_method_declaration`.
	 * @param ctx the parse tree
	 */
	exitProtocol_method_declaration?: (ctx: Protocol_method_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_initializer_declaration`.
	 * @param ctx the parse tree
	 */
	enterProtocol_initializer_declaration?: (ctx: Protocol_initializer_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_initializer_declaration`.
	 * @param ctx the parse tree
	 */
	exitProtocol_initializer_declaration?: (ctx: Protocol_initializer_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_subscript_declaration`.
	 * @param ctx the parse tree
	 */
	enterProtocol_subscript_declaration?: (ctx: Protocol_subscript_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_subscript_declaration`.
	 * @param ctx the parse tree
	 */
	exitProtocol_subscript_declaration?: (ctx: Protocol_subscript_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_associated_type_declaration`.
	 * @param ctx the parse tree
	 */
	enterProtocol_associated_type_declaration?: (ctx: Protocol_associated_type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_associated_type_declaration`.
	 * @param ctx the parse tree
	 */
	exitProtocol_associated_type_declaration?: (ctx: Protocol_associated_type_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.initializer_declaration`.
	 * @param ctx the parse tree
	 */
	enterInitializer_declaration?: (ctx: Initializer_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.initializer_declaration`.
	 * @param ctx the parse tree
	 */
	exitInitializer_declaration?: (ctx: Initializer_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.initializer_head`.
	 * @param ctx the parse tree
	 */
	enterInitializer_head?: (ctx: Initializer_headContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.initializer_head`.
	 * @param ctx the parse tree
	 */
	exitInitializer_head?: (ctx: Initializer_headContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.initializer_body`.
	 * @param ctx the parse tree
	 */
	enterInitializer_body?: (ctx: Initializer_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.initializer_body`.
	 * @param ctx the parse tree
	 */
	exitInitializer_body?: (ctx: Initializer_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.deinitializer_declaration`.
	 * @param ctx the parse tree
	 */
	enterDeinitializer_declaration?: (ctx: Deinitializer_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.deinitializer_declaration`.
	 * @param ctx the parse tree
	 */
	exitDeinitializer_declaration?: (ctx: Deinitializer_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.extension_declaration`.
	 * @param ctx the parse tree
	 */
	enterExtension_declaration?: (ctx: Extension_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.extension_declaration`.
	 * @param ctx the parse tree
	 */
	exitExtension_declaration?: (ctx: Extension_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.extension_body`.
	 * @param ctx the parse tree
	 */
	enterExtension_body?: (ctx: Extension_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.extension_body`.
	 * @param ctx the parse tree
	 */
	exitExtension_body?: (ctx: Extension_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.subscript_declaration`.
	 * @param ctx the parse tree
	 */
	enterSubscript_declaration?: (ctx: Subscript_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.subscript_declaration`.
	 * @param ctx the parse tree
	 */
	exitSubscript_declaration?: (ctx: Subscript_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.subscript_head`.
	 * @param ctx the parse tree
	 */
	enterSubscript_head?: (ctx: Subscript_headContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.subscript_head`.
	 * @param ctx the parse tree
	 */
	exitSubscript_head?: (ctx: Subscript_headContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.subscript_result`.
	 * @param ctx the parse tree
	 */
	enterSubscript_result?: (ctx: Subscript_resultContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.subscript_result`.
	 * @param ctx the parse tree
	 */
	exitSubscript_result?: (ctx: Subscript_resultContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.operator_declaration`.
	 * @param ctx the parse tree
	 */
	enterOperator_declaration?: (ctx: Operator_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.operator_declaration`.
	 * @param ctx the parse tree
	 */
	exitOperator_declaration?: (ctx: Operator_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.prefix_operator_declaration`.
	 * @param ctx the parse tree
	 */
	enterPrefix_operator_declaration?: (ctx: Prefix_operator_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.prefix_operator_declaration`.
	 * @param ctx the parse tree
	 */
	exitPrefix_operator_declaration?: (ctx: Prefix_operator_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.postfix_operator_declaration`.
	 * @param ctx the parse tree
	 */
	enterPostfix_operator_declaration?: (ctx: Postfix_operator_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.postfix_operator_declaration`.
	 * @param ctx the parse tree
	 */
	exitPostfix_operator_declaration?: (ctx: Postfix_operator_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.infix_operator_declaration`.
	 * @param ctx the parse tree
	 */
	enterInfix_operator_declaration?: (ctx: Infix_operator_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.infix_operator_declaration`.
	 * @param ctx the parse tree
	 */
	exitInfix_operator_declaration?: (ctx: Infix_operator_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.infix_operator_attributes`.
	 * @param ctx the parse tree
	 */
	enterInfix_operator_attributes?: (ctx: Infix_operator_attributesContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.infix_operator_attributes`.
	 * @param ctx the parse tree
	 */
	exitInfix_operator_attributes?: (ctx: Infix_operator_attributesContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.precedence_clause`.
	 * @param ctx the parse tree
	 */
	enterPrecedence_clause?: (ctx: Precedence_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.precedence_clause`.
	 * @param ctx the parse tree
	 */
	exitPrecedence_clause?: (ctx: Precedence_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.precedence_level`.
	 * @param ctx the parse tree
	 */
	enterPrecedence_level?: (ctx: Precedence_levelContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.precedence_level`.
	 * @param ctx the parse tree
	 */
	exitPrecedence_level?: (ctx: Precedence_levelContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.associativity_clause`.
	 * @param ctx the parse tree
	 */
	enterAssociativity_clause?: (ctx: Associativity_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.associativity_clause`.
	 * @param ctx the parse tree
	 */
	exitAssociativity_clause?: (ctx: Associativity_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.associativity`.
	 * @param ctx the parse tree
	 */
	enterAssociativity?: (ctx: AssociativityContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.associativity`.
	 * @param ctx the parse tree
	 */
	exitAssociativity?: (ctx: AssociativityContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.declaration_modifier`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_modifier?: (ctx: Declaration_modifierContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.declaration_modifier`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_modifier?: (ctx: Declaration_modifierContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.declaration_modifiers`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_modifiers?: (ctx: Declaration_modifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.declaration_modifiers`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_modifiers?: (ctx: Declaration_modifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.access_level_modifier`.
	 * @param ctx the parse tree
	 */
	enterAccess_level_modifier?: (ctx: Access_level_modifierContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.access_level_modifier`.
	 * @param ctx the parse tree
	 */
	exitAccess_level_modifier?: (ctx: Access_level_modifierContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.wildcard_pattern`.
	 * @param ctx the parse tree
	 */
	enterWildcard_pattern?: (ctx: Wildcard_patternContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.wildcard_pattern`.
	 * @param ctx the parse tree
	 */
	exitWildcard_pattern?: (ctx: Wildcard_patternContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.identifier_pattern`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_pattern?: (ctx: Identifier_patternContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.identifier_pattern`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_pattern?: (ctx: Identifier_patternContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.value_binding_pattern`.
	 * @param ctx the parse tree
	 */
	enterValue_binding_pattern?: (ctx: Value_binding_patternContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.value_binding_pattern`.
	 * @param ctx the parse tree
	 */
	exitValue_binding_pattern?: (ctx: Value_binding_patternContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.tuple_pattern`.
	 * @param ctx the parse tree
	 */
	enterTuple_pattern?: (ctx: Tuple_patternContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.tuple_pattern`.
	 * @param ctx the parse tree
	 */
	exitTuple_pattern?: (ctx: Tuple_patternContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.tuple_pattern_element_list`.
	 * @param ctx the parse tree
	 */
	enterTuple_pattern_element_list?: (ctx: Tuple_pattern_element_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.tuple_pattern_element_list`.
	 * @param ctx the parse tree
	 */
	exitTuple_pattern_element_list?: (ctx: Tuple_pattern_element_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.tuple_pattern_element`.
	 * @param ctx the parse tree
	 */
	enterTuple_pattern_element?: (ctx: Tuple_pattern_elementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.tuple_pattern_element`.
	 * @param ctx the parse tree
	 */
	exitTuple_pattern_element?: (ctx: Tuple_pattern_elementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.enum_case_pattern`.
	 * @param ctx the parse tree
	 */
	enterEnum_case_pattern?: (ctx: Enum_case_patternContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.enum_case_pattern`.
	 * @param ctx the parse tree
	 */
	exitEnum_case_pattern?: (ctx: Enum_case_patternContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.optional_pattern`.
	 * @param ctx the parse tree
	 */
	enterOptional_pattern?: (ctx: Optional_patternContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.optional_pattern`.
	 * @param ctx the parse tree
	 */
	exitOptional_pattern?: (ctx: Optional_patternContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.expression_pattern`.
	 * @param ctx the parse tree
	 */
	enterExpression_pattern?: (ctx: Expression_patternContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.expression_pattern`.
	 * @param ctx the parse tree
	 */
	exitExpression_pattern?: (ctx: Expression_patternContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.attribute_name`.
	 * @param ctx the parse tree
	 */
	enterAttribute_name?: (ctx: Attribute_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.attribute_name`.
	 * @param ctx the parse tree
	 */
	exitAttribute_name?: (ctx: Attribute_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.attribute_argument_clause`.
	 * @param ctx the parse tree
	 */
	enterAttribute_argument_clause?: (ctx: Attribute_argument_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.attribute_argument_clause`.
	 * @param ctx the parse tree
	 */
	exitAttribute_argument_clause?: (ctx: Attribute_argument_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.balanced_tokens`.
	 * @param ctx the parse tree
	 */
	enterBalanced_tokens?: (ctx: Balanced_tokensContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.balanced_tokens`.
	 * @param ctx the parse tree
	 */
	exitBalanced_tokens?: (ctx: Balanced_tokensContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.balanced_token`.
	 * @param ctx the parse tree
	 */
	enterBalanced_token?: (ctx: Balanced_tokenContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.balanced_token`.
	 * @param ctx the parse tree
	 */
	exitBalanced_token?: (ctx: Balanced_tokenContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.prefix_expression`.
	 * @param ctx the parse tree
	 */
	enterPrefix_expression?: (ctx: Prefix_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.prefix_expression`.
	 * @param ctx the parse tree
	 */
	exitPrefix_expression?: (ctx: Prefix_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.in_out_expression`.
	 * @param ctx the parse tree
	 */
	enterIn_out_expression?: (ctx: In_out_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.in_out_expression`.
	 * @param ctx the parse tree
	 */
	exitIn_out_expression?: (ctx: In_out_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.try_operator`.
	 * @param ctx the parse tree
	 */
	enterTry_operator?: (ctx: Try_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.try_operator`.
	 * @param ctx the parse tree
	 */
	exitTry_operator?: (ctx: Try_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.binary_expression`.
	 * @param ctx the parse tree
	 */
	enterBinary_expression?: (ctx: Binary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.binary_expression`.
	 * @param ctx the parse tree
	 */
	exitBinary_expression?: (ctx: Binary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.binary_expressions`.
	 * @param ctx the parse tree
	 */
	enterBinary_expressions?: (ctx: Binary_expressionsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.binary_expressions`.
	 * @param ctx the parse tree
	 */
	exitBinary_expressions?: (ctx: Binary_expressionsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.conditional_operator`.
	 * @param ctx the parse tree
	 */
	enterConditional_operator?: (ctx: Conditional_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.conditional_operator`.
	 * @param ctx the parse tree
	 */
	exitConditional_operator?: (ctx: Conditional_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.type_casting_operator`.
	 * @param ctx the parse tree
	 */
	enterType_casting_operator?: (ctx: Type_casting_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.type_casting_operator`.
	 * @param ctx the parse tree
	 */
	exitType_casting_operator?: (ctx: Type_casting_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.implicit_member_expression`.
	 * @param ctx the parse tree
	 */
	enterImplicit_member_expression?: (ctx: Implicit_member_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.implicit_member_expression`.
	 * @param ctx the parse tree
	 */
	exitImplicit_member_expression?: (ctx: Implicit_member_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterLiteral_expression?: (ctx: Literal_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitLiteral_expression?: (ctx: Literal_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.array_literal`.
	 * @param ctx the parse tree
	 */
	enterArray_literal?: (ctx: Array_literalContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.array_literal`.
	 * @param ctx the parse tree
	 */
	exitArray_literal?: (ctx: Array_literalContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.array_literal_items`.
	 * @param ctx the parse tree
	 */
	enterArray_literal_items?: (ctx: Array_literal_itemsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.array_literal_items`.
	 * @param ctx the parse tree
	 */
	exitArray_literal_items?: (ctx: Array_literal_itemsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.array_literal_item`.
	 * @param ctx the parse tree
	 */
	enterArray_literal_item?: (ctx: Array_literal_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.array_literal_item`.
	 * @param ctx the parse tree
	 */
	exitArray_literal_item?: (ctx: Array_literal_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.dictionary_literal`.
	 * @param ctx the parse tree
	 */
	enterDictionary_literal?: (ctx: Dictionary_literalContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.dictionary_literal`.
	 * @param ctx the parse tree
	 */
	exitDictionary_literal?: (ctx: Dictionary_literalContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.dictionary_literal_items`.
	 * @param ctx the parse tree
	 */
	enterDictionary_literal_items?: (ctx: Dictionary_literal_itemsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.dictionary_literal_items`.
	 * @param ctx the parse tree
	 */
	exitDictionary_literal_items?: (ctx: Dictionary_literal_itemsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.dictionary_literal_item`.
	 * @param ctx the parse tree
	 */
	enterDictionary_literal_item?: (ctx: Dictionary_literal_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.dictionary_literal_item`.
	 * @param ctx the parse tree
	 */
	exitDictionary_literal_item?: (ctx: Dictionary_literal_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.self_expression`.
	 * @param ctx the parse tree
	 */
	enterSelf_expression?: (ctx: Self_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.self_expression`.
	 * @param ctx the parse tree
	 */
	exitSelf_expression?: (ctx: Self_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.superclass_expression`.
	 * @param ctx the parse tree
	 */
	enterSuperclass_expression?: (ctx: Superclass_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.superclass_expression`.
	 * @param ctx the parse tree
	 */
	exitSuperclass_expression?: (ctx: Superclass_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.superclass_method_expression`.
	 * @param ctx the parse tree
	 */
	enterSuperclass_method_expression?: (ctx: Superclass_method_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.superclass_method_expression`.
	 * @param ctx the parse tree
	 */
	exitSuperclass_method_expression?: (ctx: Superclass_method_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.superclass_subscript_expression`.
	 * @param ctx the parse tree
	 */
	enterSuperclass_subscript_expression?: (ctx: Superclass_subscript_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.superclass_subscript_expression`.
	 * @param ctx the parse tree
	 */
	exitSuperclass_subscript_expression?: (ctx: Superclass_subscript_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.superclass_initializer_expression`.
	 * @param ctx the parse tree
	 */
	enterSuperclass_initializer_expression?: (ctx: Superclass_initializer_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.superclass_initializer_expression`.
	 * @param ctx the parse tree
	 */
	exitSuperclass_initializer_expression?: (ctx: Superclass_initializer_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.closure_expression`.
	 * @param ctx the parse tree
	 */
	enterClosure_expression?: (ctx: Closure_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.closure_expression`.
	 * @param ctx the parse tree
	 */
	exitClosure_expression?: (ctx: Closure_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.closure_signature`.
	 * @param ctx the parse tree
	 */
	enterClosure_signature?: (ctx: Closure_signatureContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.closure_signature`.
	 * @param ctx the parse tree
	 */
	exitClosure_signature?: (ctx: Closure_signatureContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.capture_list`.
	 * @param ctx the parse tree
	 */
	enterCapture_list?: (ctx: Capture_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.capture_list`.
	 * @param ctx the parse tree
	 */
	exitCapture_list?: (ctx: Capture_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.capture_list_items`.
	 * @param ctx the parse tree
	 */
	enterCapture_list_items?: (ctx: Capture_list_itemsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.capture_list_items`.
	 * @param ctx the parse tree
	 */
	exitCapture_list_items?: (ctx: Capture_list_itemsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.capture_list_item`.
	 * @param ctx the parse tree
	 */
	enterCapture_list_item?: (ctx: Capture_list_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.capture_list_item`.
	 * @param ctx the parse tree
	 */
	exitCapture_list_item?: (ctx: Capture_list_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.capture_specifier`.
	 * @param ctx the parse tree
	 */
	enterCapture_specifier?: (ctx: Capture_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.capture_specifier`.
	 * @param ctx the parse tree
	 */
	exitCapture_specifier?: (ctx: Capture_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.parenthesized_expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesized_expression?: (ctx: Parenthesized_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.parenthesized_expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesized_expression?: (ctx: Parenthesized_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.expression_element_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_element_list?: (ctx: Expression_element_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.expression_element_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_element_list?: (ctx: Expression_element_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.expression_element`.
	 * @param ctx the parse tree
	 */
	enterExpression_element?: (ctx: Expression_elementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.expression_element`.
	 * @param ctx the parse tree
	 */
	exitExpression_element?: (ctx: Expression_elementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.wildcard_expression`.
	 * @param ctx the parse tree
	 */
	enterWildcard_expression?: (ctx: Wildcard_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.wildcard_expression`.
	 * @param ctx the parse tree
	 */
	exitWildcard_expression?: (ctx: Wildcard_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.selector_expression`.
	 * @param ctx the parse tree
	 */
	enterSelector_expression?: (ctx: Selector_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.selector_expression`.
	 * @param ctx the parse tree
	 */
	exitSelector_expression?: (ctx: Selector_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfix_expression?: (ctx: Postfix_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfix_expression?: (ctx: Postfix_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.argument_names`.
	 * @param ctx the parse tree
	 */
	enterArgument_names?: (ctx: Argument_namesContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.argument_names`.
	 * @param ctx the parse tree
	 */
	exitArgument_names?: (ctx: Argument_namesContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.argument_name`.
	 * @param ctx the parse tree
	 */
	enterArgument_name?: (ctx: Argument_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.argument_name`.
	 * @param ctx the parse tree
	 */
	exitArgument_name?: (ctx: Argument_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.trailing_closure`.
	 * @param ctx the parse tree
	 */
	enterTrailing_closure?: (ctx: Trailing_closureContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.trailing_closure`.
	 * @param ctx the parse tree
	 */
	exitTrailing_closure?: (ctx: Trailing_closureContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.type_annotation`.
	 * @param ctx the parse tree
	 */
	enterType_annotation?: (ctx: Type_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.type_annotation`.
	 * @param ctx the parse tree
	 */
	exitType_annotation?: (ctx: Type_annotationContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.type_identifier`.
	 * @param ctx the parse tree
	 */
	enterType_identifier?: (ctx: Type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.type_identifier`.
	 * @param ctx the parse tree
	 */
	exitType_identifier?: (ctx: Type_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.tuple_type`.
	 * @param ctx the parse tree
	 */
	enterTuple_type?: (ctx: Tuple_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.tuple_type`.
	 * @param ctx the parse tree
	 */
	exitTuple_type?: (ctx: Tuple_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.tuple_type_body`.
	 * @param ctx the parse tree
	 */
	enterTuple_type_body?: (ctx: Tuple_type_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.tuple_type_body`.
	 * @param ctx the parse tree
	 */
	exitTuple_type_body?: (ctx: Tuple_type_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.tuple_type_element_list`.
	 * @param ctx the parse tree
	 */
	enterTuple_type_element_list?: (ctx: Tuple_type_element_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.tuple_type_element_list`.
	 * @param ctx the parse tree
	 */
	exitTuple_type_element_list?: (ctx: Tuple_type_element_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.tuple_type_element`.
	 * @param ctx the parse tree
	 */
	enterTuple_type_element?: (ctx: Tuple_type_elementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.tuple_type_element`.
	 * @param ctx the parse tree
	 */
	exitTuple_type_element?: (ctx: Tuple_type_elementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.element_name`.
	 * @param ctx the parse tree
	 */
	enterElement_name?: (ctx: Element_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.element_name`.
	 * @param ctx the parse tree
	 */
	exitElement_name?: (ctx: Element_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_composition_type`.
	 * @param ctx the parse tree
	 */
	enterProtocol_composition_type?: (ctx: Protocol_composition_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_composition_type`.
	 * @param ctx the parse tree
	 */
	exitProtocol_composition_type?: (ctx: Protocol_composition_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_identifier_list`.
	 * @param ctx the parse tree
	 */
	enterProtocol_identifier_list?: (ctx: Protocol_identifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_identifier_list`.
	 * @param ctx the parse tree
	 */
	exitProtocol_identifier_list?: (ctx: Protocol_identifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.protocol_identifier`.
	 * @param ctx the parse tree
	 */
	enterProtocol_identifier?: (ctx: Protocol_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.protocol_identifier`.
	 * @param ctx the parse tree
	 */
	exitProtocol_identifier?: (ctx: Protocol_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.type_inheritance_clause`.
	 * @param ctx the parse tree
	 */
	enterType_inheritance_clause?: (ctx: Type_inheritance_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.type_inheritance_clause`.
	 * @param ctx the parse tree
	 */
	exitType_inheritance_clause?: (ctx: Type_inheritance_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.type_inheritance_list`.
	 * @param ctx the parse tree
	 */
	enterType_inheritance_list?: (ctx: Type_inheritance_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.type_inheritance_list`.
	 * @param ctx the parse tree
	 */
	exitType_inheritance_list?: (ctx: Type_inheritance_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.class_requirement`.
	 * @param ctx the parse tree
	 */
	enterClass_requirement?: (ctx: Class_requirementContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.class_requirement`.
	 * @param ctx the parse tree
	 */
	exitClass_requirement?: (ctx: Class_requirementContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.identifier_list`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_list?: (ctx: Identifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.identifier_list`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_list?: (ctx: Identifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.context_sensitive_keyword`.
	 * @param ctx the parse tree
	 */
	enterContext_sensitive_keyword?: (ctx: Context_sensitive_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.context_sensitive_keyword`.
	 * @param ctx the parse tree
	 */
	exitContext_sensitive_keyword?: (ctx: Context_sensitive_keywordContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.negate_prefix_operator`.
	 * @param ctx the parse tree
	 */
	enterNegate_prefix_operator?: (ctx: Negate_prefix_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.negate_prefix_operator`.
	 * @param ctx the parse tree
	 */
	exitNegate_prefix_operator?: (ctx: Negate_prefix_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.build_AND`.
	 * @param ctx the parse tree
	 */
	enterBuild_AND?: (ctx: Build_ANDContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.build_AND`.
	 * @param ctx the parse tree
	 */
	exitBuild_AND?: (ctx: Build_ANDContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.build_OR`.
	 * @param ctx the parse tree
	 */
	enterBuild_OR?: (ctx: Build_ORContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.build_OR`.
	 * @param ctx the parse tree
	 */
	exitBuild_OR?: (ctx: Build_ORContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.arrow_operator`.
	 * @param ctx the parse tree
	 */
	enterArrow_operator?: (ctx: Arrow_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.arrow_operator`.
	 * @param ctx the parse tree
	 */
	exitArrow_operator?: (ctx: Arrow_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.range_operator`.
	 * @param ctx the parse tree
	 */
	enterRange_operator?: (ctx: Range_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.range_operator`.
	 * @param ctx the parse tree
	 */
	exitRange_operator?: (ctx: Range_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.same_type_equals`.
	 * @param ctx the parse tree
	 */
	enterSame_type_equals?: (ctx: Same_type_equalsContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.same_type_equals`.
	 * @param ctx the parse tree
	 */
	exitSame_type_equals?: (ctx: Same_type_equalsContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.binary_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_operator?: (ctx: Binary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.binary_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_operator?: (ctx: Binary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.prefix_operator`.
	 * @param ctx the parse tree
	 */
	enterPrefix_operator?: (ctx: Prefix_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.prefix_operator`.
	 * @param ctx the parse tree
	 */
	exitPrefix_operator?: (ctx: Prefix_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.postfix_operator`.
	 * @param ctx the parse tree
	 */
	enterPostfix_operator?: (ctx: Postfix_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.postfix_operator`.
	 * @param ctx the parse tree
	 */
	exitPostfix_operator?: (ctx: Postfix_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.operator_character`.
	 * @param ctx the parse tree
	 */
	enterOperator_character?: (ctx: Operator_characterContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.operator_character`.
	 * @param ctx the parse tree
	 */
	exitOperator_character?: (ctx: Operator_characterContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.operator_head`.
	 * @param ctx the parse tree
	 */
	enterOperator_head?: (ctx: Operator_headContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.operator_head`.
	 * @param ctx the parse tree
	 */
	exitOperator_head?: (ctx: Operator_headContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.dot_operator_head`.
	 * @param ctx the parse tree
	 */
	enterDot_operator_head?: (ctx: Dot_operator_headContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.dot_operator_head`.
	 * @param ctx the parse tree
	 */
	exitDot_operator_head?: (ctx: Dot_operator_headContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.dot_operator_character`.
	 * @param ctx the parse tree
	 */
	enterDot_operator_character?: (ctx: Dot_operator_characterContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.dot_operator_character`.
	 * @param ctx the parse tree
	 */
	exitDot_operator_character?: (ctx: Dot_operator_characterContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	enterNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	exitNumeric_literal?: (ctx: Numeric_literalContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	enterBoolean_literal?: (ctx: Boolean_literalContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	exitBoolean_literal?: (ctx: Boolean_literalContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.nil_literal`.
	 * @param ctx the parse tree
	 */
	enterNil_literal?: (ctx: Nil_literalContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.nil_literal`.
	 * @param ctx the parse tree
	 */
	exitNil_literal?: (ctx: Nil_literalContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.integer_literal`.
	 * @param ctx the parse tree
	 */
	enterInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.integer_literal`.
	 * @param ctx the parse tree
	 */
	exitInteger_literal?: (ctx: Integer_literalContext) => void;

	/**
	 * Enter a parse tree produced by `Swift2Parser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `Swift2Parser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;
}

