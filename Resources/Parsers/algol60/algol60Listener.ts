// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/algol60/algol60.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./algol60Parser";
import { BlockContext } from "./algol60Parser";
import { Block_headContext } from "./algol60Parser";
import { Compound_statementContext } from "./algol60Parser";
import { Compound_tailContext } from "./algol60Parser";
import { DeclarationContext } from "./algol60Parser";
import { Type_declarationContext } from "./algol60Parser";
import { Local_or_own_typeContext } from "./algol60Parser";
import { TypeContext } from "./algol60Parser";
import { Type_listContext } from "./algol60Parser";
import { Array_declarationContext } from "./algol60Parser";
import { Array_listContext } from "./algol60Parser";
import { Array_segmentContext } from "./algol60Parser";
import { Array_identifierContext } from "./algol60Parser";
import { Bound_pair_listContext } from "./algol60Parser";
import { Bound_pairContext } from "./algol60Parser";
import { Upper_boundContext } from "./algol60Parser";
import { Lower_boundContext } from "./algol60Parser";
import { Switch_declarationContext } from "./algol60Parser";
import { Switch_identifierContext } from "./algol60Parser";
import { Switch_listContext } from "./algol60Parser";
import { Procedure_declarationContext } from "./algol60Parser";
import { Procedure_headingContext } from "./algol60Parser";
import { Procedure_identifierContext } from "./algol60Parser";
import { Formal_parameter_partContext } from "./algol60Parser";
import { Formal_parameter_listContext } from "./algol60Parser";
import { Formal_parameterContext } from "./algol60Parser";
import { Value_partContext } from "./algol60Parser";
import { Specification_partContext } from "./algol60Parser";
import { SpecifierContext } from "./algol60Parser";
import { Identifier_listContext } from "./algol60Parser";
import { Procedure_bodyContext } from "./algol60Parser";
import { StatementContext } from "./algol60Parser";
import { Unconditional_statementContext } from "./algol60Parser";
import { Basic_statementContext } from "./algol60Parser";
import { LabelContext } from "./algol60Parser";
import { Unlabelled_basic_statementContext } from "./algol60Parser";
import { Assignment_statementContext } from "./algol60Parser";
import { Left_part_listContext } from "./algol60Parser";
import { Left_partContext } from "./algol60Parser";
import { Go_to_statementContext } from "./algol60Parser";
import { Designational_expressionContext } from "./algol60Parser";
import { Switch_designatorContext } from "./algol60Parser";
import { Procedure_statementContext } from "./algol60Parser";
import { Actual_parameter_partContext } from "./algol60Parser";
import { Actual_parameter_listContext } from "./algol60Parser";
import { Parameter_delimiterContext } from "./algol60Parser";
import { Actual_parameterContext } from "./algol60Parser";
import { Conditional_statementContext } from "./algol60Parser";
import { If_statementContext } from "./algol60Parser";
import { If_clauseContext } from "./algol60Parser";
import { For_statementContext } from "./algol60Parser";
import { For_clauseContext } from "./algol60Parser";
import { For_listContext } from "./algol60Parser";
import { For_list_elementContext } from "./algol60Parser";
import { Arithmetic_expressionContext } from "./algol60Parser";
import { ExpressionContext } from "./algol60Parser";
import { Arithmetic_expression2Context } from "./algol60Parser";
import { Simple_arithmetic_expressionContext } from "./algol60Parser";
import { Adding_operatorContext } from "./algol60Parser";
import { TermContext } from "./algol60Parser";
import { Multiplying_operatorContext } from "./algol60Parser";
import { FactorContext } from "./algol60Parser";
import { PrimaryContext } from "./algol60Parser";
import { Unsigned_numberContext } from "./algol60Parser";
import { Decimal_numberContext } from "./algol60Parser";
import { Unsigned_integerContext } from "./algol60Parser";
import { Decimal_fractionContext } from "./algol60Parser";
import { Exponential_partContext } from "./algol60Parser";
import { IntegerContext } from "./algol60Parser";
import { Boolean_expressionContext } from "./algol60Parser";
import { RelationContext } from "./algol60Parser";
import { Relational_operatorContext } from "./algol60Parser";
import { Function_designatorContext } from "./algol60Parser";
import { VariableContext } from "./algol60Parser";
import { Simple_variableContext } from "./algol60Parser";
import { Variable_identifierContext } from "./algol60Parser";
import { Subscripted_variableContext } from "./algol60Parser";
import { Subscript_listContext } from "./algol60Parser";
import { Subscript_expressionContext } from "./algol60Parser";
import { Open_stringContext } from "./algol60Parser";
import { Proper_stringContext } from "./algol60Parser";
import { Letter_stringContext } from "./algol60Parser";
import { IdentifierContext } from "./algol60Parser";
import { Basic_symbolContext } from "./algol60Parser";
import { Logical_valueContext } from "./algol60Parser";
import { DelimiterContext } from "./algol60Parser";
import { OperatorContext } from "./algol60Parser";
import { BracketContext } from "./algol60Parser";
import { SpecificatorContext } from "./algol60Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `algol60Parser`.
 */
export interface algol60Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `algol60Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.block_head`.
	 * @param ctx the parse tree
	 */
	enterBlock_head?: (ctx: Block_headContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.block_head`.
	 * @param ctx the parse tree
	 */
	exitBlock_head?: (ctx: Block_headContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.compound_statement`.
	 * @param ctx the parse tree
	 */
	enterCompound_statement?: (ctx: Compound_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.compound_statement`.
	 * @param ctx the parse tree
	 */
	exitCompound_statement?: (ctx: Compound_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.compound_tail`.
	 * @param ctx the parse tree
	 */
	enterCompound_tail?: (ctx: Compound_tailContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.compound_tail`.
	 * @param ctx the parse tree
	 */
	exitCompound_tail?: (ctx: Compound_tailContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration?: (ctx: Type_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.local_or_own_type`.
	 * @param ctx the parse tree
	 */
	enterLocal_or_own_type?: (ctx: Local_or_own_typeContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.local_or_own_type`.
	 * @param ctx the parse tree
	 */
	exitLocal_or_own_type?: (ctx: Local_or_own_typeContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.type_list`.
	 * @param ctx the parse tree
	 */
	enterType_list?: (ctx: Type_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.type_list`.
	 * @param ctx the parse tree
	 */
	exitType_list?: (ctx: Type_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.array_declaration`.
	 * @param ctx the parse tree
	 */
	enterArray_declaration?: (ctx: Array_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.array_declaration`.
	 * @param ctx the parse tree
	 */
	exitArray_declaration?: (ctx: Array_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.array_list`.
	 * @param ctx the parse tree
	 */
	enterArray_list?: (ctx: Array_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.array_list`.
	 * @param ctx the parse tree
	 */
	exitArray_list?: (ctx: Array_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.array_segment`.
	 * @param ctx the parse tree
	 */
	enterArray_segment?: (ctx: Array_segmentContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.array_segment`.
	 * @param ctx the parse tree
	 */
	exitArray_segment?: (ctx: Array_segmentContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.array_identifier`.
	 * @param ctx the parse tree
	 */
	enterArray_identifier?: (ctx: Array_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.array_identifier`.
	 * @param ctx the parse tree
	 */
	exitArray_identifier?: (ctx: Array_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.bound_pair_list`.
	 * @param ctx the parse tree
	 */
	enterBound_pair_list?: (ctx: Bound_pair_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.bound_pair_list`.
	 * @param ctx the parse tree
	 */
	exitBound_pair_list?: (ctx: Bound_pair_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.bound_pair`.
	 * @param ctx the parse tree
	 */
	enterBound_pair?: (ctx: Bound_pairContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.bound_pair`.
	 * @param ctx the parse tree
	 */
	exitBound_pair?: (ctx: Bound_pairContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.upper_bound`.
	 * @param ctx the parse tree
	 */
	enterUpper_bound?: (ctx: Upper_boundContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.upper_bound`.
	 * @param ctx the parse tree
	 */
	exitUpper_bound?: (ctx: Upper_boundContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.lower_bound`.
	 * @param ctx the parse tree
	 */
	enterLower_bound?: (ctx: Lower_boundContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.lower_bound`.
	 * @param ctx the parse tree
	 */
	exitLower_bound?: (ctx: Lower_boundContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.switch_declaration`.
	 * @param ctx the parse tree
	 */
	enterSwitch_declaration?: (ctx: Switch_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.switch_declaration`.
	 * @param ctx the parse tree
	 */
	exitSwitch_declaration?: (ctx: Switch_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.switch_identifier`.
	 * @param ctx the parse tree
	 */
	enterSwitch_identifier?: (ctx: Switch_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.switch_identifier`.
	 * @param ctx the parse tree
	 */
	exitSwitch_identifier?: (ctx: Switch_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.switch_list`.
	 * @param ctx the parse tree
	 */
	enterSwitch_list?: (ctx: Switch_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.switch_list`.
	 * @param ctx the parse tree
	 */
	exitSwitch_list?: (ctx: Switch_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.procedure_declaration`.
	 * @param ctx the parse tree
	 */
	enterProcedure_declaration?: (ctx: Procedure_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.procedure_declaration`.
	 * @param ctx the parse tree
	 */
	exitProcedure_declaration?: (ctx: Procedure_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.procedure_heading`.
	 * @param ctx the parse tree
	 */
	enterProcedure_heading?: (ctx: Procedure_headingContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.procedure_heading`.
	 * @param ctx the parse tree
	 */
	exitProcedure_heading?: (ctx: Procedure_headingContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.procedure_identifier`.
	 * @param ctx the parse tree
	 */
	enterProcedure_identifier?: (ctx: Procedure_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.procedure_identifier`.
	 * @param ctx the parse tree
	 */
	exitProcedure_identifier?: (ctx: Procedure_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.formal_parameter_part`.
	 * @param ctx the parse tree
	 */
	enterFormal_parameter_part?: (ctx: Formal_parameter_partContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.formal_parameter_part`.
	 * @param ctx the parse tree
	 */
	exitFormal_parameter_part?: (ctx: Formal_parameter_partContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.formal_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterFormal_parameter_list?: (ctx: Formal_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.formal_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitFormal_parameter_list?: (ctx: Formal_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.formal_parameter`.
	 * @param ctx the parse tree
	 */
	enterFormal_parameter?: (ctx: Formal_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.formal_parameter`.
	 * @param ctx the parse tree
	 */
	exitFormal_parameter?: (ctx: Formal_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.value_part`.
	 * @param ctx the parse tree
	 */
	enterValue_part?: (ctx: Value_partContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.value_part`.
	 * @param ctx the parse tree
	 */
	exitValue_part?: (ctx: Value_partContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.specification_part`.
	 * @param ctx the parse tree
	 */
	enterSpecification_part?: (ctx: Specification_partContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.specification_part`.
	 * @param ctx the parse tree
	 */
	exitSpecification_part?: (ctx: Specification_partContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.specifier`.
	 * @param ctx the parse tree
	 */
	enterSpecifier?: (ctx: SpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.specifier`.
	 * @param ctx the parse tree
	 */
	exitSpecifier?: (ctx: SpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.identifier_list`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_list?: (ctx: Identifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.identifier_list`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_list?: (ctx: Identifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.procedure_body`.
	 * @param ctx the parse tree
	 */
	enterProcedure_body?: (ctx: Procedure_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.procedure_body`.
	 * @param ctx the parse tree
	 */
	exitProcedure_body?: (ctx: Procedure_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.unconditional_statement`.
	 * @param ctx the parse tree
	 */
	enterUnconditional_statement?: (ctx: Unconditional_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.unconditional_statement`.
	 * @param ctx the parse tree
	 */
	exitUnconditional_statement?: (ctx: Unconditional_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.basic_statement`.
	 * @param ctx the parse tree
	 */
	enterBasic_statement?: (ctx: Basic_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.basic_statement`.
	 * @param ctx the parse tree
	 */
	exitBasic_statement?: (ctx: Basic_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.unlabelled_basic_statement`.
	 * @param ctx the parse tree
	 */
	enterUnlabelled_basic_statement?: (ctx: Unlabelled_basic_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.unlabelled_basic_statement`.
	 * @param ctx the parse tree
	 */
	exitUnlabelled_basic_statement?: (ctx: Unlabelled_basic_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.assignment_statement`.
	 * @param ctx the parse tree
	 */
	enterAssignment_statement?: (ctx: Assignment_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.assignment_statement`.
	 * @param ctx the parse tree
	 */
	exitAssignment_statement?: (ctx: Assignment_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.left_part_list`.
	 * @param ctx the parse tree
	 */
	enterLeft_part_list?: (ctx: Left_part_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.left_part_list`.
	 * @param ctx the parse tree
	 */
	exitLeft_part_list?: (ctx: Left_part_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.left_part`.
	 * @param ctx the parse tree
	 */
	enterLeft_part?: (ctx: Left_partContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.left_part`.
	 * @param ctx the parse tree
	 */
	exitLeft_part?: (ctx: Left_partContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.go_to_statement`.
	 * @param ctx the parse tree
	 */
	enterGo_to_statement?: (ctx: Go_to_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.go_to_statement`.
	 * @param ctx the parse tree
	 */
	exitGo_to_statement?: (ctx: Go_to_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.designational_expression`.
	 * @param ctx the parse tree
	 */
	enterDesignational_expression?: (ctx: Designational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.designational_expression`.
	 * @param ctx the parse tree
	 */
	exitDesignational_expression?: (ctx: Designational_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.switch_designator`.
	 * @param ctx the parse tree
	 */
	enterSwitch_designator?: (ctx: Switch_designatorContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.switch_designator`.
	 * @param ctx the parse tree
	 */
	exitSwitch_designator?: (ctx: Switch_designatorContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.procedure_statement`.
	 * @param ctx the parse tree
	 */
	enterProcedure_statement?: (ctx: Procedure_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.procedure_statement`.
	 * @param ctx the parse tree
	 */
	exitProcedure_statement?: (ctx: Procedure_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.actual_parameter_part`.
	 * @param ctx the parse tree
	 */
	enterActual_parameter_part?: (ctx: Actual_parameter_partContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.actual_parameter_part`.
	 * @param ctx the parse tree
	 */
	exitActual_parameter_part?: (ctx: Actual_parameter_partContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.actual_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterActual_parameter_list?: (ctx: Actual_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.actual_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitActual_parameter_list?: (ctx: Actual_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.parameter_delimiter`.
	 * @param ctx the parse tree
	 */
	enterParameter_delimiter?: (ctx: Parameter_delimiterContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.parameter_delimiter`.
	 * @param ctx the parse tree
	 */
	exitParameter_delimiter?: (ctx: Parameter_delimiterContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.actual_parameter`.
	 * @param ctx the parse tree
	 */
	enterActual_parameter?: (ctx: Actual_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.actual_parameter`.
	 * @param ctx the parse tree
	 */
	exitActual_parameter?: (ctx: Actual_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	enterConditional_statement?: (ctx: Conditional_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	exitConditional_statement?: (ctx: Conditional_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.if_clause`.
	 * @param ctx the parse tree
	 */
	enterIf_clause?: (ctx: If_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.if_clause`.
	 * @param ctx the parse tree
	 */
	exitIf_clause?: (ctx: If_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.for_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_statement?: (ctx: For_statementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.for_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_statement?: (ctx: For_statementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.for_clause`.
	 * @param ctx the parse tree
	 */
	enterFor_clause?: (ctx: For_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.for_clause`.
	 * @param ctx the parse tree
	 */
	exitFor_clause?: (ctx: For_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.for_list`.
	 * @param ctx the parse tree
	 */
	enterFor_list?: (ctx: For_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.for_list`.
	 * @param ctx the parse tree
	 */
	exitFor_list?: (ctx: For_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.for_list_element`.
	 * @param ctx the parse tree
	 */
	enterFor_list_element?: (ctx: For_list_elementContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.for_list_element`.
	 * @param ctx the parse tree
	 */
	exitFor_list_element?: (ctx: For_list_elementContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_expression?: (ctx: Arithmetic_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_expression?: (ctx: Arithmetic_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.arithmetic_expression2`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_expression2?: (ctx: Arithmetic_expression2Context) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.arithmetic_expression2`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_expression2?: (ctx: Arithmetic_expression2Context) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.simple_arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_arithmetic_expression?: (ctx: Simple_arithmetic_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.simple_arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_arithmetic_expression?: (ctx: Simple_arithmetic_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.adding_operator`.
	 * @param ctx the parse tree
	 */
	enterAdding_operator?: (ctx: Adding_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.adding_operator`.
	 * @param ctx the parse tree
	 */
	exitAdding_operator?: (ctx: Adding_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.multiplying_operator`.
	 * @param ctx the parse tree
	 */
	enterMultiplying_operator?: (ctx: Multiplying_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.multiplying_operator`.
	 * @param ctx the parse tree
	 */
	exitMultiplying_operator?: (ctx: Multiplying_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.unsigned_number`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_number?: (ctx: Unsigned_numberContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.unsigned_number`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_number?: (ctx: Unsigned_numberContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.decimal_number`.
	 * @param ctx the parse tree
	 */
	enterDecimal_number?: (ctx: Decimal_numberContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.decimal_number`.
	 * @param ctx the parse tree
	 */
	exitDecimal_number?: (ctx: Decimal_numberContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.unsigned_integer`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_integer?: (ctx: Unsigned_integerContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.unsigned_integer`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_integer?: (ctx: Unsigned_integerContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.decimal_fraction`.
	 * @param ctx the parse tree
	 */
	enterDecimal_fraction?: (ctx: Decimal_fractionContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.decimal_fraction`.
	 * @param ctx the parse tree
	 */
	exitDecimal_fraction?: (ctx: Decimal_fractionContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.exponential_part`.
	 * @param ctx the parse tree
	 */
	enterExponential_part?: (ctx: Exponential_partContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.exponential_part`.
	 * @param ctx the parse tree
	 */
	exitExponential_part?: (ctx: Exponential_partContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.boolean_expression`.
	 * @param ctx the parse tree
	 */
	enterBoolean_expression?: (ctx: Boolean_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.boolean_expression`.
	 * @param ctx the parse tree
	 */
	exitBoolean_expression?: (ctx: Boolean_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.relational_operator`.
	 * @param ctx the parse tree
	 */
	enterRelational_operator?: (ctx: Relational_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.relational_operator`.
	 * @param ctx the parse tree
	 */
	exitRelational_operator?: (ctx: Relational_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.function_designator`.
	 * @param ctx the parse tree
	 */
	enterFunction_designator?: (ctx: Function_designatorContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.function_designator`.
	 * @param ctx the parse tree
	 */
	exitFunction_designator?: (ctx: Function_designatorContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.simple_variable`.
	 * @param ctx the parse tree
	 */
	enterSimple_variable?: (ctx: Simple_variableContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.simple_variable`.
	 * @param ctx the parse tree
	 */
	exitSimple_variable?: (ctx: Simple_variableContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterVariable_identifier?: (ctx: Variable_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitVariable_identifier?: (ctx: Variable_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.subscripted_variable`.
	 * @param ctx the parse tree
	 */
	enterSubscripted_variable?: (ctx: Subscripted_variableContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.subscripted_variable`.
	 * @param ctx the parse tree
	 */
	exitSubscripted_variable?: (ctx: Subscripted_variableContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.subscript_list`.
	 * @param ctx the parse tree
	 */
	enterSubscript_list?: (ctx: Subscript_listContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.subscript_list`.
	 * @param ctx the parse tree
	 */
	exitSubscript_list?: (ctx: Subscript_listContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.subscript_expression`.
	 * @param ctx the parse tree
	 */
	enterSubscript_expression?: (ctx: Subscript_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.subscript_expression`.
	 * @param ctx the parse tree
	 */
	exitSubscript_expression?: (ctx: Subscript_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.open_string`.
	 * @param ctx the parse tree
	 */
	enterOpen_string?: (ctx: Open_stringContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.open_string`.
	 * @param ctx the parse tree
	 */
	exitOpen_string?: (ctx: Open_stringContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.proper_string`.
	 * @param ctx the parse tree
	 */
	enterProper_string?: (ctx: Proper_stringContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.proper_string`.
	 * @param ctx the parse tree
	 */
	exitProper_string?: (ctx: Proper_stringContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.letter_string`.
	 * @param ctx the parse tree
	 */
	enterLetter_string?: (ctx: Letter_stringContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.letter_string`.
	 * @param ctx the parse tree
	 */
	exitLetter_string?: (ctx: Letter_stringContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.basic_symbol`.
	 * @param ctx the parse tree
	 */
	enterBasic_symbol?: (ctx: Basic_symbolContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.basic_symbol`.
	 * @param ctx the parse tree
	 */
	exitBasic_symbol?: (ctx: Basic_symbolContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.logical_value`.
	 * @param ctx the parse tree
	 */
	enterLogical_value?: (ctx: Logical_valueContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.logical_value`.
	 * @param ctx the parse tree
	 */
	exitLogical_value?: (ctx: Logical_valueContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.delimiter`.
	 * @param ctx the parse tree
	 */
	enterDelimiter?: (ctx: DelimiterContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.delimiter`.
	 * @param ctx the parse tree
	 */
	exitDelimiter?: (ctx: DelimiterContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.bracket`.
	 * @param ctx the parse tree
	 */
	enterBracket?: (ctx: BracketContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.bracket`.
	 * @param ctx the parse tree
	 */
	exitBracket?: (ctx: BracketContext) => void;

	/**
	 * Enter a parse tree produced by `algol60Parser.specificator`.
	 * @param ctx the parse tree
	 */
	enterSpecificator?: (ctx: SpecificatorContext) => void;
	/**
	 * Exit a parse tree produced by `algol60Parser.specificator`.
	 * @param ctx the parse tree
	 */
	exitSpecificator?: (ctx: SpecificatorContext) => void;
}

