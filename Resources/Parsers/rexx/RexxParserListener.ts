// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rexx/RexxParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `RexxParser`.
 */
export interface RexxParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RexxParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.program_`.
	 * @param ctx the parse tree
	 */
	enterProgram_?: (ctx: Program_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.program_`.
	 * @param ctx the parse tree
	 */
	exitProgram_?: (ctx: Program_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.ncl`.
	 * @param ctx the parse tree
	 */
	enterNcl?: (ctx: NclContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.ncl`.
	 * @param ctx the parse tree
	 */
	exitNcl?: (ctx: NclContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.null_clause`.
	 * @param ctx the parse tree
	 */
	enterNull_clause?: (ctx: Null_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.null_clause`.
	 * @param ctx the parse tree
	 */
	exitNull_clause?: (ctx: Null_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.delim`.
	 * @param ctx the parse tree
	 */
	enterDelim?: (ctx: DelimContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.delim`.
	 * @param ctx the parse tree
	 */
	exitDelim?: (ctx: DelimContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.label_list`.
	 * @param ctx the parse tree
	 */
	enterLabel_list?: (ctx: Label_listContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.label_list`.
	 * @param ctx the parse tree
	 */
	exitLabel_list?: (ctx: Label_listContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.include_statement`.
	 * @param ctx the parse tree
	 */
	enterInclude_statement?: (ctx: Include_statementContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.include_statement`.
	 * @param ctx the parse tree
	 */
	exitInclude_statement?: (ctx: Include_statementContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.instruction_list`.
	 * @param ctx the parse tree
	 */
	enterInstruction_list?: (ctx: Instruction_listContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.instruction_list`.
	 * @param ctx the parse tree
	 */
	exitInstruction_list?: (ctx: Instruction_listContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.single_instruction`.
	 * @param ctx the parse tree
	 */
	enterSingle_instruction?: (ctx: Single_instructionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.single_instruction`.
	 * @param ctx the parse tree
	 */
	exitSingle_instruction?: (ctx: Single_instructionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.keyword_instruction`.
	 * @param ctx the parse tree
	 */
	enterKeyword_instruction?: (ctx: Keyword_instructionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.keyword_instruction`.
	 * @param ctx the parse tree
	 */
	exitKeyword_instruction?: (ctx: Keyword_instructionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.command_`.
	 * @param ctx the parse tree
	 */
	enterCommand_?: (ctx: Command_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.command_`.
	 * @param ctx the parse tree
	 */
	exitCommand_?: (ctx: Command_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.group_`.
	 * @param ctx the parse tree
	 */
	enterGroup_?: (ctx: Group_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.group_`.
	 * @param ctx the parse tree
	 */
	exitGroup_?: (ctx: Group_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.do_`.
	 * @param ctx the parse tree
	 */
	enterDo_?: (ctx: Do_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.do_`.
	 * @param ctx the parse tree
	 */
	exitDo_?: (ctx: Do_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.do_rep`.
	 * @param ctx the parse tree
	 */
	enterDo_rep?: (ctx: Do_repContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.do_rep`.
	 * @param ctx the parse tree
	 */
	exitDo_rep?: (ctx: Do_repContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.do_cnt`.
	 * @param ctx the parse tree
	 */
	enterDo_cnt?: (ctx: Do_cntContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.do_cnt`.
	 * @param ctx the parse tree
	 */
	exitDo_cnt?: (ctx: Do_cntContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.dot`.
	 * @param ctx the parse tree
	 */
	enterDot?: (ctx: DotContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.dot`.
	 * @param ctx the parse tree
	 */
	exitDot?: (ctx: DotContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.dob`.
	 * @param ctx the parse tree
	 */
	enterDob?: (ctx: DobContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.dob`.
	 * @param ctx the parse tree
	 */
	exitDob?: (ctx: DobContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.dof`.
	 * @param ctx the parse tree
	 */
	enterDof?: (ctx: DofContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.dof`.
	 * @param ctx the parse tree
	 */
	exitDof?: (ctx: DofContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.do_cond`.
	 * @param ctx the parse tree
	 */
	enterDo_cond?: (ctx: Do_condContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.do_cond`.
	 * @param ctx the parse tree
	 */
	exitDo_cond?: (ctx: Do_condContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.if_`.
	 * @param ctx the parse tree
	 */
	enterIf_?: (ctx: If_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.if_`.
	 * @param ctx the parse tree
	 */
	exitIf_?: (ctx: If_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.then_`.
	 * @param ctx the parse tree
	 */
	enterThen_?: (ctx: Then_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.then_`.
	 * @param ctx the parse tree
	 */
	exitThen_?: (ctx: Then_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.else_`.
	 * @param ctx the parse tree
	 */
	enterElse_?: (ctx: Else_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.else_`.
	 * @param ctx the parse tree
	 */
	exitElse_?: (ctx: Else_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.select_`.
	 * @param ctx the parse tree
	 */
	enterSelect_?: (ctx: Select_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.select_`.
	 * @param ctx the parse tree
	 */
	exitSelect_?: (ctx: Select_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.select_body`.
	 * @param ctx the parse tree
	 */
	enterSelect_body?: (ctx: Select_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.select_body`.
	 * @param ctx the parse tree
	 */
	exitSelect_body?: (ctx: Select_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.when_`.
	 * @param ctx the parse tree
	 */
	enterWhen_?: (ctx: When_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.when_`.
	 * @param ctx the parse tree
	 */
	exitWhen_?: (ctx: When_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.otherwise_`.
	 * @param ctx the parse tree
	 */
	enterOtherwise_?: (ctx: Otherwise_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.otherwise_`.
	 * @param ctx the parse tree
	 */
	exitOtherwise_?: (ctx: Otherwise_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.address_`.
	 * @param ctx the parse tree
	 */
	enterAddress_?: (ctx: Address_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.address_`.
	 * @param ctx the parse tree
	 */
	exitAddress_?: (ctx: Address_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.taken_constant`.
	 * @param ctx the parse tree
	 */
	enterTaken_constant?: (ctx: Taken_constantContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.taken_constant`.
	 * @param ctx the parse tree
	 */
	exitTaken_constant?: (ctx: Taken_constantContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.valueexp`.
	 * @param ctx the parse tree
	 */
	enterValueexp?: (ctx: ValueexpContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.valueexp`.
	 * @param ctx the parse tree
	 */
	exitValueexp?: (ctx: ValueexpContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.arg_`.
	 * @param ctx the parse tree
	 */
	enterArg_?: (ctx: Arg_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.arg_`.
	 * @param ctx the parse tree
	 */
	exitArg_?: (ctx: Arg_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.call_`.
	 * @param ctx the parse tree
	 */
	enterCall_?: (ctx: Call_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.call_`.
	 * @param ctx the parse tree
	 */
	exitCall_?: (ctx: Call_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.callon_spec`.
	 * @param ctx the parse tree
	 */
	enterCallon_spec?: (ctx: Callon_specContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.callon_spec`.
	 * @param ctx the parse tree
	 */
	exitCallon_spec?: (ctx: Callon_specContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.callable_condition`.
	 * @param ctx the parse tree
	 */
	enterCallable_condition?: (ctx: Callable_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.callable_condition`.
	 * @param ctx the parse tree
	 */
	exitCallable_condition?: (ctx: Callable_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.call_parms`.
	 * @param ctx the parse tree
	 */
	enterCall_parms?: (ctx: Call_parmsContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.call_parms`.
	 * @param ctx the parse tree
	 */
	exitCall_parms?: (ctx: Call_parmsContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.drop_`.
	 * @param ctx the parse tree
	 */
	enterDrop_?: (ctx: Drop_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.drop_`.
	 * @param ctx the parse tree
	 */
	exitDrop_?: (ctx: Drop_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.variable_list`.
	 * @param ctx the parse tree
	 */
	enterVariable_list?: (ctx: Variable_listContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.variable_list`.
	 * @param ctx the parse tree
	 */
	exitVariable_list?: (ctx: Variable_listContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.vref`.
	 * @param ctx the parse tree
	 */
	enterVref?: (ctx: VrefContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.vref`.
	 * @param ctx the parse tree
	 */
	exitVref?: (ctx: VrefContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.var_symbol`.
	 * @param ctx the parse tree
	 */
	enterVar_symbol?: (ctx: Var_symbolContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.var_symbol`.
	 * @param ctx the parse tree
	 */
	exitVar_symbol?: (ctx: Var_symbolContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.exit_`.
	 * @param ctx the parse tree
	 */
	enterExit_?: (ctx: Exit_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.exit_`.
	 * @param ctx the parse tree
	 */
	exitExit_?: (ctx: Exit_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.interpret_`.
	 * @param ctx the parse tree
	 */
	enterInterpret_?: (ctx: Interpret_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.interpret_`.
	 * @param ctx the parse tree
	 */
	exitInterpret_?: (ctx: Interpret_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.iterate_`.
	 * @param ctx the parse tree
	 */
	enterIterate_?: (ctx: Iterate_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.iterate_`.
	 * @param ctx the parse tree
	 */
	exitIterate_?: (ctx: Iterate_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.leave_`.
	 * @param ctx the parse tree
	 */
	enterLeave_?: (ctx: Leave_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.leave_`.
	 * @param ctx the parse tree
	 */
	exitLeave_?: (ctx: Leave_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.nop_`.
	 * @param ctx the parse tree
	 */
	enterNop_?: (ctx: Nop_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.nop_`.
	 * @param ctx the parse tree
	 */
	exitNop_?: (ctx: Nop_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.numeric_`.
	 * @param ctx the parse tree
	 */
	enterNumeric_?: (ctx: Numeric_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.numeric_`.
	 * @param ctx the parse tree
	 */
	exitNumeric_?: (ctx: Numeric_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.numeric_digits`.
	 * @param ctx the parse tree
	 */
	enterNumeric_digits?: (ctx: Numeric_digitsContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.numeric_digits`.
	 * @param ctx the parse tree
	 */
	exitNumeric_digits?: (ctx: Numeric_digitsContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.numeric_form`.
	 * @param ctx the parse tree
	 */
	enterNumeric_form?: (ctx: Numeric_formContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.numeric_form`.
	 * @param ctx the parse tree
	 */
	exitNumeric_form?: (ctx: Numeric_formContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.numeric_fuzz`.
	 * @param ctx the parse tree
	 */
	enterNumeric_fuzz?: (ctx: Numeric_fuzzContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.numeric_fuzz`.
	 * @param ctx the parse tree
	 */
	exitNumeric_fuzz?: (ctx: Numeric_fuzzContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.options_`.
	 * @param ctx the parse tree
	 */
	enterOptions_?: (ctx: Options_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.options_`.
	 * @param ctx the parse tree
	 */
	exitOptions_?: (ctx: Options_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.parse_`.
	 * @param ctx the parse tree
	 */
	enterParse_?: (ctx: Parse_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.parse_`.
	 * @param ctx the parse tree
	 */
	exitParse_?: (ctx: Parse_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.parse_type`.
	 * @param ctx the parse tree
	 */
	enterParse_type?: (ctx: Parse_typeContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.parse_type`.
	 * @param ctx the parse tree
	 */
	exitParse_type?: (ctx: Parse_typeContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.parse_key`.
	 * @param ctx the parse tree
	 */
	enterParse_key?: (ctx: Parse_keyContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.parse_key`.
	 * @param ctx the parse tree
	 */
	exitParse_key?: (ctx: Parse_keyContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.parse_value`.
	 * @param ctx the parse tree
	 */
	enterParse_value?: (ctx: Parse_valueContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.parse_value`.
	 * @param ctx the parse tree
	 */
	exitParse_value?: (ctx: Parse_valueContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.parse_var`.
	 * @param ctx the parse tree
	 */
	enterParse_var?: (ctx: Parse_varContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.parse_var`.
	 * @param ctx the parse tree
	 */
	exitParse_var?: (ctx: Parse_varContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.procedure_`.
	 * @param ctx the parse tree
	 */
	enterProcedure_?: (ctx: Procedure_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.procedure_`.
	 * @param ctx the parse tree
	 */
	exitProcedure_?: (ctx: Procedure_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.pull_`.
	 * @param ctx the parse tree
	 */
	enterPull_?: (ctx: Pull_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.pull_`.
	 * @param ctx the parse tree
	 */
	exitPull_?: (ctx: Pull_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.push_`.
	 * @param ctx the parse tree
	 */
	enterPush_?: (ctx: Push_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.push_`.
	 * @param ctx the parse tree
	 */
	exitPush_?: (ctx: Push_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.queue_`.
	 * @param ctx the parse tree
	 */
	enterQueue_?: (ctx: Queue_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.queue_`.
	 * @param ctx the parse tree
	 */
	exitQueue_?: (ctx: Queue_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.return_`.
	 * @param ctx the parse tree
	 */
	enterReturn_?: (ctx: Return_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.return_`.
	 * @param ctx the parse tree
	 */
	exitReturn_?: (ctx: Return_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.say_`.
	 * @param ctx the parse tree
	 */
	enterSay_?: (ctx: Say_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.say_`.
	 * @param ctx the parse tree
	 */
	exitSay_?: (ctx: Say_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.signal_`.
	 * @param ctx the parse tree
	 */
	enterSignal_?: (ctx: Signal_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.signal_`.
	 * @param ctx the parse tree
	 */
	exitSignal_?: (ctx: Signal_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.signal_spec`.
	 * @param ctx the parse tree
	 */
	enterSignal_spec?: (ctx: Signal_specContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.signal_spec`.
	 * @param ctx the parse tree
	 */
	exitSignal_spec?: (ctx: Signal_specContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.trace_`.
	 * @param ctx the parse tree
	 */
	enterTrace_?: (ctx: Trace_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.trace_`.
	 * @param ctx the parse tree
	 */
	exitTrace_?: (ctx: Trace_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.upper_`.
	 * @param ctx the parse tree
	 */
	enterUpper_?: (ctx: Upper_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.upper_`.
	 * @param ctx the parse tree
	 */
	exitUpper_?: (ctx: Upper_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.template_list`.
	 * @param ctx the parse tree
	 */
	enterTemplate_list?: (ctx: Template_listContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.template_list`.
	 * @param ctx the parse tree
	 */
	exitTemplate_list?: (ctx: Template_listContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.template_`.
	 * @param ctx the parse tree
	 */
	enterTemplate_?: (ctx: Template_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.template_`.
	 * @param ctx the parse tree
	 */
	exitTemplate_?: (ctx: Template_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.target_`.
	 * @param ctx the parse tree
	 */
	enterTarget_?: (ctx: Target_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.target_`.
	 * @param ctx the parse tree
	 */
	exitTarget_?: (ctx: Target_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.trigger_`.
	 * @param ctx the parse tree
	 */
	enterTrigger_?: (ctx: Trigger_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.trigger_`.
	 * @param ctx the parse tree
	 */
	exitTrigger_?: (ctx: Trigger_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.pattern_`.
	 * @param ctx the parse tree
	 */
	enterPattern_?: (ctx: Pattern_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.pattern_`.
	 * @param ctx the parse tree
	 */
	exitPattern_?: (ctx: Pattern_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.positional_`.
	 * @param ctx the parse tree
	 */
	enterPositional_?: (ctx: Positional_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.positional_`.
	 * @param ctx the parse tree
	 */
	exitPositional_?: (ctx: Positional_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.absolute_positional`.
	 * @param ctx the parse tree
	 */
	enterAbsolute_positional?: (ctx: Absolute_positionalContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.absolute_positional`.
	 * @param ctx the parse tree
	 */
	exitAbsolute_positional?: (ctx: Absolute_positionalContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.position_`.
	 * @param ctx the parse tree
	 */
	enterPosition_?: (ctx: Position_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.position_`.
	 * @param ctx the parse tree
	 */
	exitPosition_?: (ctx: Position_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.relative_positional`.
	 * @param ctx the parse tree
	 */
	enterRelative_positional?: (ctx: Relative_positionalContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.relative_positional`.
	 * @param ctx the parse tree
	 */
	exitRelative_positional?: (ctx: Relative_positionalContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.or_operator`.
	 * @param ctx the parse tree
	 */
	enterOr_operator?: (ctx: Or_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.or_operator`.
	 * @param ctx the parse tree
	 */
	exitOr_operator?: (ctx: Or_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.and_expression`.
	 * @param ctx the parse tree
	 */
	enterAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.and_expression`.
	 * @param ctx the parse tree
	 */
	exitAnd_expression?: (ctx: And_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	enterComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	exitComparison_operator?: (ctx: Comparison_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.normal_compare`.
	 * @param ctx the parse tree
	 */
	enterNormal_compare?: (ctx: Normal_compareContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.normal_compare`.
	 * @param ctx the parse tree
	 */
	exitNormal_compare?: (ctx: Normal_compareContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.strict_compare`.
	 * @param ctx the parse tree
	 */
	enterStrict_compare?: (ctx: Strict_compareContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.strict_compare`.
	 * @param ctx the parse tree
	 */
	exitStrict_compare?: (ctx: Strict_compareContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.concatenation`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.concatenation`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.addition`.
	 * @param ctx the parse tree
	 */
	enterAddition?: (ctx: AdditionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.addition`.
	 * @param ctx the parse tree
	 */
	exitAddition?: (ctx: AdditionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.additive_operator`.
	 * @param ctx the parse tree
	 */
	enterAdditive_operator?: (ctx: Additive_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.additive_operator`.
	 * @param ctx the parse tree
	 */
	exitAdditive_operator?: (ctx: Additive_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.multiplication`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.multiplication`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.multiplicative_operator`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_operator?: (ctx: Multiplicative_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.multiplicative_operator`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_operator?: (ctx: Multiplicative_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.power_expression`.
	 * @param ctx the parse tree
	 */
	enterPower_expression?: (ctx: Power_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.power_expression`.
	 * @param ctx the parse tree
	 */
	exitPower_expression?: (ctx: Power_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.prefix_expression`.
	 * @param ctx the parse tree
	 */
	enterPrefix_expression?: (ctx: Prefix_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.prefix_expression`.
	 * @param ctx the parse tree
	 */
	exitPrefix_expression?: (ctx: Prefix_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.function_`.
	 * @param ctx the parse tree
	 */
	enterFunction_?: (ctx: Function_Context) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.function_`.
	 * @param ctx the parse tree
	 */
	exitFunction_?: (ctx: Function_Context) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `RexxParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameters?: (ctx: Function_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `RexxParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameters?: (ctx: Function_parametersContext) => void;
}

