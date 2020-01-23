// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/algol60/algol60.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `algol60Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface algol60Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `algol60Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.block_head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_head?: (ctx: Block_headContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.compound_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_statement?: (ctx: Compound_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.compound_tail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_tail?: (ctx: Compound_tailContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.type_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_declaration?: (ctx: Type_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.local_or_own_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_or_own_type?: (ctx: Local_or_own_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.type_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_list?: (ctx: Type_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.array_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_declaration?: (ctx: Array_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.array_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_list?: (ctx: Array_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.array_segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_segment?: (ctx: Array_segmentContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.array_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_identifier?: (ctx: Array_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.bound_pair_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBound_pair_list?: (ctx: Bound_pair_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.bound_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBound_pair?: (ctx: Bound_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.upper_bound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpper_bound?: (ctx: Upper_boundContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.lower_bound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLower_bound?: (ctx: Lower_boundContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.switch_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_declaration?: (ctx: Switch_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.switch_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_identifier?: (ctx: Switch_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.switch_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_list?: (ctx: Switch_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.procedure_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_declaration?: (ctx: Procedure_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.procedure_heading`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_heading?: (ctx: Procedure_headingContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.procedure_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_identifier?: (ctx: Procedure_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.formal_parameter_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormal_parameter_part?: (ctx: Formal_parameter_partContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.formal_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormal_parameter_list?: (ctx: Formal_parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.formal_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormal_parameter?: (ctx: Formal_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.value_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_part?: (ctx: Value_partContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.specification_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecification_part?: (ctx: Specification_partContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifier?: (ctx: SpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.identifier_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier_list?: (ctx: Identifier_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.procedure_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_body?: (ctx: Procedure_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.unconditional_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnconditional_statement?: (ctx: Unconditional_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.basic_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasic_statement?: (ctx: Basic_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.unlabelled_basic_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlabelled_basic_statement?: (ctx: Unlabelled_basic_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.assignment_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_statement?: (ctx: Assignment_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.left_part_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeft_part_list?: (ctx: Left_part_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.left_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeft_part?: (ctx: Left_partContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.go_to_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGo_to_statement?: (ctx: Go_to_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.designational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignational_expression?: (ctx: Designational_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.switch_designator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_designator?: (ctx: Switch_designatorContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.procedure_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_statement?: (ctx: Procedure_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.actual_parameter_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActual_parameter_part?: (ctx: Actual_parameter_partContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.actual_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActual_parameter_list?: (ctx: Actual_parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.parameter_delimiter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_delimiter?: (ctx: Parameter_delimiterContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.actual_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActual_parameter?: (ctx: Actual_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.conditional_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_statement?: (ctx: Conditional_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.if_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_clause?: (ctx: If_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.for_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_statement?: (ctx: For_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.for_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_clause?: (ctx: For_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.for_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_list?: (ctx: For_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.for_list_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_list_element?: (ctx: For_list_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.arithmetic_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_expression?: (ctx: Arithmetic_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.arithmetic_expression2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_expression2?: (ctx: Arithmetic_expression2Context) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.simple_arithmetic_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_arithmetic_expression?: (ctx: Simple_arithmetic_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.adding_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdding_operator?: (ctx: Adding_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.multiplying_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplying_operator?: (ctx: Multiplying_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.unsigned_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsigned_number?: (ctx: Unsigned_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.decimal_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal_number?: (ctx: Decimal_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.unsigned_integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsigned_integer?: (ctx: Unsigned_integerContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.decimal_fraction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal_fraction?: (ctx: Decimal_fractionContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.exponential_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponential_part?: (ctx: Exponential_partContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.boolean_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_expression?: (ctx: Boolean_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.relational_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_operator?: (ctx: Relational_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.function_designator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_designator?: (ctx: Function_designatorContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.simple_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_variable?: (ctx: Simple_variableContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.variable_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_identifier?: (ctx: Variable_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.subscripted_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscripted_variable?: (ctx: Subscripted_variableContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.subscript_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript_list?: (ctx: Subscript_listContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.subscript_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript_expression?: (ctx: Subscript_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.open_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_string?: (ctx: Open_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.proper_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProper_string?: (ctx: Proper_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.letter_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetter_string?: (ctx: Letter_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.basic_symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasic_symbol?: (ctx: Basic_symbolContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.logical_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_value?: (ctx: Logical_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.delimiter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelimiter?: (ctx: DelimiterContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.bracket`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracket?: (ctx: BracketContext) => Result;

	/**
	 * Visit a parse tree produced by `algol60Parser.specificator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificator?: (ctx: SpecificatorContext) => Result;
}

