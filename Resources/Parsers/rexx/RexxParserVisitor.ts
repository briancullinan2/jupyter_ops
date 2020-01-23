// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rexx/RexxParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./RexxParser";
import { Program_Context } from "./RexxParser";
import { NclContext } from "./RexxParser";
import { Null_clauseContext } from "./RexxParser";
import { DelimContext } from "./RexxParser";
import { Label_listContext } from "./RexxParser";
import { LabelContext } from "./RexxParser";
import { Include_statementContext } from "./RexxParser";
import { Instruction_listContext } from "./RexxParser";
import { InstructionContext } from "./RexxParser";
import { Single_instructionContext } from "./RexxParser";
import { AssignmentContext } from "./RexxParser";
import { Keyword_instructionContext } from "./RexxParser";
import { Command_Context } from "./RexxParser";
import { Group_Context } from "./RexxParser";
import { Do_Context } from "./RexxParser";
import { Do_repContext } from "./RexxParser";
import { Do_cntContext } from "./RexxParser";
import { DotContext } from "./RexxParser";
import { DobContext } from "./RexxParser";
import { DofContext } from "./RexxParser";
import { Do_condContext } from "./RexxParser";
import { If_Context } from "./RexxParser";
import { Then_Context } from "./RexxParser";
import { Else_Context } from "./RexxParser";
import { Select_Context } from "./RexxParser";
import { Select_bodyContext } from "./RexxParser";
import { When_Context } from "./RexxParser";
import { Otherwise_Context } from "./RexxParser";
import { Address_Context } from "./RexxParser";
import { Taken_constantContext } from "./RexxParser";
import { ValueexpContext } from "./RexxParser";
import { Arg_Context } from "./RexxParser";
import { Call_Context } from "./RexxParser";
import { Callon_specContext } from "./RexxParser";
import { Callable_conditionContext } from "./RexxParser";
import { Call_parmsContext } from "./RexxParser";
import { Expression_listContext } from "./RexxParser";
import { Drop_Context } from "./RexxParser";
import { Variable_listContext } from "./RexxParser";
import { VrefContext } from "./RexxParser";
import { Var_symbolContext } from "./RexxParser";
import { Exit_Context } from "./RexxParser";
import { Interpret_Context } from "./RexxParser";
import { Iterate_Context } from "./RexxParser";
import { Leave_Context } from "./RexxParser";
import { Nop_Context } from "./RexxParser";
import { Numeric_Context } from "./RexxParser";
import { Numeric_digitsContext } from "./RexxParser";
import { Numeric_formContext } from "./RexxParser";
import { Numeric_fuzzContext } from "./RexxParser";
import { Options_Context } from "./RexxParser";
import { Parse_Context } from "./RexxParser";
import { Parse_typeContext } from "./RexxParser";
import { Parse_keyContext } from "./RexxParser";
import { Parse_valueContext } from "./RexxParser";
import { Parse_varContext } from "./RexxParser";
import { Procedure_Context } from "./RexxParser";
import { Pull_Context } from "./RexxParser";
import { Push_Context } from "./RexxParser";
import { Queue_Context } from "./RexxParser";
import { Return_Context } from "./RexxParser";
import { Say_Context } from "./RexxParser";
import { Signal_Context } from "./RexxParser";
import { Signal_specContext } from "./RexxParser";
import { ConditionContext } from "./RexxParser";
import { Trace_Context } from "./RexxParser";
import { Upper_Context } from "./RexxParser";
import { Template_listContext } from "./RexxParser";
import { Template_Context } from "./RexxParser";
import { Target_Context } from "./RexxParser";
import { Trigger_Context } from "./RexxParser";
import { Pattern_Context } from "./RexxParser";
import { Positional_Context } from "./RexxParser";
import { Absolute_positionalContext } from "./RexxParser";
import { Position_Context } from "./RexxParser";
import { Relative_positionalContext } from "./RexxParser";
import { SymbolContext } from "./RexxParser";
import { ExpressionContext } from "./RexxParser";
import { Or_operatorContext } from "./RexxParser";
import { And_expressionContext } from "./RexxParser";
import { ComparisonContext } from "./RexxParser";
import { Comparison_operatorContext } from "./RexxParser";
import { Normal_compareContext } from "./RexxParser";
import { Strict_compareContext } from "./RexxParser";
import { ConcatenationContext } from "./RexxParser";
import { AdditionContext } from "./RexxParser";
import { Additive_operatorContext } from "./RexxParser";
import { MultiplicationContext } from "./RexxParser";
import { Multiplicative_operatorContext } from "./RexxParser";
import { Power_expressionContext } from "./RexxParser";
import { Prefix_expressionContext } from "./RexxParser";
import { TermContext } from "./RexxParser";
import { Function_Context } from "./RexxParser";
import { Function_nameContext } from "./RexxParser";
import { Function_parametersContext } from "./RexxParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RexxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RexxParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RexxParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.program_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram_?: (ctx: Program_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.ncl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNcl?: (ctx: NclContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.null_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_clause?: (ctx: Null_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.delim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelim?: (ctx: DelimContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.label_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel_list?: (ctx: Label_listContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.include_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude_statement?: (ctx: Include_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.instruction_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_list?: (ctx: Instruction_listContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.single_instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_instruction?: (ctx: Single_instructionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.keyword_instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword_instruction?: (ctx: Keyword_instructionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.command_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_?: (ctx: Command_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.group_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup_?: (ctx: Group_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.do_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_?: (ctx: Do_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.do_rep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_rep?: (ctx: Do_repContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.do_cnt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_cnt?: (ctx: Do_cntContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.dot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDot?: (ctx: DotContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.dob`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDob?: (ctx: DobContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.dof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDof?: (ctx: DofContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.do_cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_cond?: (ctx: Do_condContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.if_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_?: (ctx: If_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.then_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThen_?: (ctx: Then_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.else_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_?: (ctx: Else_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.select_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_?: (ctx: Select_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.select_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_body?: (ctx: Select_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.when_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_?: (ctx: When_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.otherwise_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherwise_?: (ctx: Otherwise_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.address_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddress_?: (ctx: Address_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.taken_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaken_constant?: (ctx: Taken_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.valueexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueexp?: (ctx: ValueexpContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.arg_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg_?: (ctx: Arg_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.call_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_?: (ctx: Call_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.callon_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallon_spec?: (ctx: Callon_specContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.callable_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallable_condition?: (ctx: Callable_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.call_parms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_parms?: (ctx: Call_parmsContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.drop_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_?: (ctx: Drop_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.variable_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_list?: (ctx: Variable_listContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.vref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVref?: (ctx: VrefContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.var_symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_symbol?: (ctx: Var_symbolContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.exit_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExit_?: (ctx: Exit_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.interpret_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpret_?: (ctx: Interpret_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.iterate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterate_?: (ctx: Iterate_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.leave_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeave_?: (ctx: Leave_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.nop_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNop_?: (ctx: Nop_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.numeric_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_?: (ctx: Numeric_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.numeric_digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_digits?: (ctx: Numeric_digitsContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.numeric_form`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_form?: (ctx: Numeric_formContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.numeric_fuzz`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_fuzz?: (ctx: Numeric_fuzzContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.options_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptions_?: (ctx: Options_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.parse_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse_?: (ctx: Parse_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.parse_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse_type?: (ctx: Parse_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.parse_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse_key?: (ctx: Parse_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.parse_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse_value?: (ctx: Parse_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.parse_var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse_var?: (ctx: Parse_varContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.procedure_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_?: (ctx: Procedure_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.pull_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPull_?: (ctx: Pull_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.push_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPush_?: (ctx: Push_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.queue_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueue_?: (ctx: Queue_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.return_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_?: (ctx: Return_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.say_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSay_?: (ctx: Say_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.signal_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignal_?: (ctx: Signal_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.signal_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignal_spec?: (ctx: Signal_specContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.trace_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrace_?: (ctx: Trace_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.upper_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpper_?: (ctx: Upper_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.template_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_list?: (ctx: Template_listContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.template_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_?: (ctx: Template_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.target_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget_?: (ctx: Target_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.trigger_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrigger_?: (ctx: Trigger_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.pattern_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_?: (ctx: Pattern_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.positional_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositional_?: (ctx: Positional_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.absolute_positional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsolute_positional?: (ctx: Absolute_positionalContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.position_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition_?: (ctx: Position_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.relative_positional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelative_positional?: (ctx: Relative_positionalContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.or_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr_operator?: (ctx: Or_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expression?: (ctx: And_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.comparison_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison_operator?: (ctx: Comparison_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.normal_compare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormal_compare?: (ctx: Normal_compareContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.strict_compare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrict_compare?: (ctx: Strict_compareContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.addition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.additive_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_operator?: (ctx: Additive_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.multiplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.multiplicative_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_operator?: (ctx: Multiplicative_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.power_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower_expression?: (ctx: Power_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.prefix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix_expression?: (ctx: Prefix_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.function_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_?: (ctx: Function_Context) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name?: (ctx: Function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `RexxParser.function_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_parameters?: (ctx: Function_parametersContext) => Result;
}

