// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ruby/Corundum.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./CorundumParser";
import { Expression_listContext } from "./CorundumParser";
import { ExpressionContext } from "./CorundumParser";
import { Global_getContext } from "./CorundumParser";
import { Global_setContext } from "./CorundumParser";
import { Global_resultContext } from "./CorundumParser";
import { Function_inline_callContext } from "./CorundumParser";
import { Require_blockContext } from "./CorundumParser";
import { Pir_inlineContext } from "./CorundumParser";
import { Pir_expression_listContext } from "./CorundumParser";
import { Function_definitionContext } from "./CorundumParser";
import { Function_definition_bodyContext } from "./CorundumParser";
import { Function_definition_headerContext } from "./CorundumParser";
import { Function_nameContext } from "./CorundumParser";
import { Function_definition_paramsContext } from "./CorundumParser";
import { Function_definition_params_listContext } from "./CorundumParser";
import { Function_definition_param_idContext } from "./CorundumParser";
import { Return_statementContext } from "./CorundumParser";
import { Function_callContext } from "./CorundumParser";
import { Function_call_param_listContext } from "./CorundumParser";
import { Function_call_paramsContext } from "./CorundumParser";
import { Function_paramContext } from "./CorundumParser";
import { Function_unnamed_paramContext } from "./CorundumParser";
import { Function_named_paramContext } from "./CorundumParser";
import { Function_call_assignmentContext } from "./CorundumParser";
import { All_resultContext } from "./CorundumParser";
import { Elsif_statementContext } from "./CorundumParser";
import { If_elsif_statementContext } from "./CorundumParser";
import { If_statementContext } from "./CorundumParser";
import { Unless_statementContext } from "./CorundumParser";
import { While_statementContext } from "./CorundumParser";
import { For_statementContext } from "./CorundumParser";
import { Init_expressionContext } from "./CorundumParser";
import { All_assignmentContext } from "./CorundumParser";
import { For_init_listContext } from "./CorundumParser";
import { Cond_expressionContext } from "./CorundumParser";
import { Loop_expressionContext } from "./CorundumParser";
import { For_loop_listContext } from "./CorundumParser";
import { Statement_bodyContext } from "./CorundumParser";
import { Statement_expression_listContext } from "./CorundumParser";
import { AssignmentContext } from "./CorundumParser";
import { Dynamic_assignmentContext } from "./CorundumParser";
import { Int_assignmentContext } from "./CorundumParser";
import { Float_assignmentContext } from "./CorundumParser";
import { String_assignmentContext } from "./CorundumParser";
import { Initial_array_assignmentContext } from "./CorundumParser";
import { Array_assignmentContext } from "./CorundumParser";
import { Array_definitionContext } from "./CorundumParser";
import { Array_definition_elementsContext } from "./CorundumParser";
import { Array_selectorContext } from "./CorundumParser";
import { Dynamic_resultContext } from "./CorundumParser";
import { DynamicContext } from "./CorundumParser";
import { Int_resultContext } from "./CorundumParser";
import { Float_resultContext } from "./CorundumParser";
import { String_resultContext } from "./CorundumParser";
import { Comparison_listContext } from "./CorundumParser";
import { ComparisonContext } from "./CorundumParser";
import { Comp_varContext } from "./CorundumParser";
import { LvalueContext } from "./CorundumParser";
import { RvalueContext } from "./CorundumParser";
import { Break_expressionContext } from "./CorundumParser";
import { Literal_tContext } from "./CorundumParser";
import { Float_tContext } from "./CorundumParser";
import { Int_tContext } from "./CorundumParser";
import { Bool_tContext } from "./CorundumParser";
import { Nil_tContext } from "./CorundumParser";
import { IdContext } from "./CorundumParser";
import { Id_globalContext } from "./CorundumParser";
import { Id_functionContext } from "./CorundumParser";
import { TerminatorContext } from "./CorundumParser";
import { Else_tokenContext } from "./CorundumParser";
import { CrlfContext } from "./CorundumParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CorundumParser`.
 */
export interface CorundumListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CorundumParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.global_get`.
	 * @param ctx the parse tree
	 */
	enterGlobal_get?: (ctx: Global_getContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.global_get`.
	 * @param ctx the parse tree
	 */
	exitGlobal_get?: (ctx: Global_getContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.global_set`.
	 * @param ctx the parse tree
	 */
	enterGlobal_set?: (ctx: Global_setContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.global_set`.
	 * @param ctx the parse tree
	 */
	exitGlobal_set?: (ctx: Global_setContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.global_result`.
	 * @param ctx the parse tree
	 */
	enterGlobal_result?: (ctx: Global_resultContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.global_result`.
	 * @param ctx the parse tree
	 */
	exitGlobal_result?: (ctx: Global_resultContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_inline_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_inline_call?: (ctx: Function_inline_callContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_inline_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_inline_call?: (ctx: Function_inline_callContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.require_block`.
	 * @param ctx the parse tree
	 */
	enterRequire_block?: (ctx: Require_blockContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.require_block`.
	 * @param ctx the parse tree
	 */
	exitRequire_block?: (ctx: Require_blockContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.pir_inline`.
	 * @param ctx the parse tree
	 */
	enterPir_inline?: (ctx: Pir_inlineContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.pir_inline`.
	 * @param ctx the parse tree
	 */
	exitPir_inline?: (ctx: Pir_inlineContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.pir_expression_list`.
	 * @param ctx the parse tree
	 */
	enterPir_expression_list?: (ctx: Pir_expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.pir_expression_list`.
	 * @param ctx the parse tree
	 */
	exitPir_expression_list?: (ctx: Pir_expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_definition`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition?: (ctx: Function_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_definition`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition?: (ctx: Function_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_definition_body`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition_body?: (ctx: Function_definition_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_definition_body`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition_body?: (ctx: Function_definition_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_definition_header`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition_header?: (ctx: Function_definition_headerContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_definition_header`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition_header?: (ctx: Function_definition_headerContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_definition_params`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition_params?: (ctx: Function_definition_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_definition_params`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition_params?: (ctx: Function_definition_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_definition_params_list`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition_params_list?: (ctx: Function_definition_params_listContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_definition_params_list`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition_params_list?: (ctx: Function_definition_params_listContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_definition_param_id`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition_param_id?: (ctx: Function_definition_param_idContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_definition_param_id`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition_param_id?: (ctx: Function_definition_param_idContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_call_param_list`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_param_list?: (ctx: Function_call_param_listContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_call_param_list`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_param_list?: (ctx: Function_call_param_listContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_call_params`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_params?: (ctx: Function_call_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_call_params`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_params?: (ctx: Function_call_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_param`.
	 * @param ctx the parse tree
	 */
	enterFunction_param?: (ctx: Function_paramContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_param`.
	 * @param ctx the parse tree
	 */
	exitFunction_param?: (ctx: Function_paramContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_unnamed_param`.
	 * @param ctx the parse tree
	 */
	enterFunction_unnamed_param?: (ctx: Function_unnamed_paramContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_unnamed_param`.
	 * @param ctx the parse tree
	 */
	exitFunction_unnamed_param?: (ctx: Function_unnamed_paramContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_named_param`.
	 * @param ctx the parse tree
	 */
	enterFunction_named_param?: (ctx: Function_named_paramContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_named_param`.
	 * @param ctx the parse tree
	 */
	exitFunction_named_param?: (ctx: Function_named_paramContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.function_call_assignment`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_assignment?: (ctx: Function_call_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.function_call_assignment`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_assignment?: (ctx: Function_call_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.all_result`.
	 * @param ctx the parse tree
	 */
	enterAll_result?: (ctx: All_resultContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.all_result`.
	 * @param ctx the parse tree
	 */
	exitAll_result?: (ctx: All_resultContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.elsif_statement`.
	 * @param ctx the parse tree
	 */
	enterElsif_statement?: (ctx: Elsif_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.elsif_statement`.
	 * @param ctx the parse tree
	 */
	exitElsif_statement?: (ctx: Elsif_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.if_elsif_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_elsif_statement?: (ctx: If_elsif_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.if_elsif_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_elsif_statement?: (ctx: If_elsif_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.unless_statement`.
	 * @param ctx the parse tree
	 */
	enterUnless_statement?: (ctx: Unless_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.unless_statement`.
	 * @param ctx the parse tree
	 */
	exitUnless_statement?: (ctx: Unless_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.for_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_statement?: (ctx: For_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.for_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_statement?: (ctx: For_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.init_expression`.
	 * @param ctx the parse tree
	 */
	enterInit_expression?: (ctx: Init_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.init_expression`.
	 * @param ctx the parse tree
	 */
	exitInit_expression?: (ctx: Init_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.all_assignment`.
	 * @param ctx the parse tree
	 */
	enterAll_assignment?: (ctx: All_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.all_assignment`.
	 * @param ctx the parse tree
	 */
	exitAll_assignment?: (ctx: All_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.for_init_list`.
	 * @param ctx the parse tree
	 */
	enterFor_init_list?: (ctx: For_init_listContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.for_init_list`.
	 * @param ctx the parse tree
	 */
	exitFor_init_list?: (ctx: For_init_listContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.cond_expression`.
	 * @param ctx the parse tree
	 */
	enterCond_expression?: (ctx: Cond_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.cond_expression`.
	 * @param ctx the parse tree
	 */
	exitCond_expression?: (ctx: Cond_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.loop_expression`.
	 * @param ctx the parse tree
	 */
	enterLoop_expression?: (ctx: Loop_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.loop_expression`.
	 * @param ctx the parse tree
	 */
	exitLoop_expression?: (ctx: Loop_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.for_loop_list`.
	 * @param ctx the parse tree
	 */
	enterFor_loop_list?: (ctx: For_loop_listContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.for_loop_list`.
	 * @param ctx the parse tree
	 */
	exitFor_loop_list?: (ctx: For_loop_listContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.statement_body`.
	 * @param ctx the parse tree
	 */
	enterStatement_body?: (ctx: Statement_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.statement_body`.
	 * @param ctx the parse tree
	 */
	exitStatement_body?: (ctx: Statement_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.statement_expression_list`.
	 * @param ctx the parse tree
	 */
	enterStatement_expression_list?: (ctx: Statement_expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.statement_expression_list`.
	 * @param ctx the parse tree
	 */
	exitStatement_expression_list?: (ctx: Statement_expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.dynamic_assignment`.
	 * @param ctx the parse tree
	 */
	enterDynamic_assignment?: (ctx: Dynamic_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.dynamic_assignment`.
	 * @param ctx the parse tree
	 */
	exitDynamic_assignment?: (ctx: Dynamic_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.int_assignment`.
	 * @param ctx the parse tree
	 */
	enterInt_assignment?: (ctx: Int_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.int_assignment`.
	 * @param ctx the parse tree
	 */
	exitInt_assignment?: (ctx: Int_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.float_assignment`.
	 * @param ctx the parse tree
	 */
	enterFloat_assignment?: (ctx: Float_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.float_assignment`.
	 * @param ctx the parse tree
	 */
	exitFloat_assignment?: (ctx: Float_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.string_assignment`.
	 * @param ctx the parse tree
	 */
	enterString_assignment?: (ctx: String_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.string_assignment`.
	 * @param ctx the parse tree
	 */
	exitString_assignment?: (ctx: String_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.initial_array_assignment`.
	 * @param ctx the parse tree
	 */
	enterInitial_array_assignment?: (ctx: Initial_array_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.initial_array_assignment`.
	 * @param ctx the parse tree
	 */
	exitInitial_array_assignment?: (ctx: Initial_array_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.array_assignment`.
	 * @param ctx the parse tree
	 */
	enterArray_assignment?: (ctx: Array_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.array_assignment`.
	 * @param ctx the parse tree
	 */
	exitArray_assignment?: (ctx: Array_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.array_definition`.
	 * @param ctx the parse tree
	 */
	enterArray_definition?: (ctx: Array_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.array_definition`.
	 * @param ctx the parse tree
	 */
	exitArray_definition?: (ctx: Array_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.array_definition_elements`.
	 * @param ctx the parse tree
	 */
	enterArray_definition_elements?: (ctx: Array_definition_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.array_definition_elements`.
	 * @param ctx the parse tree
	 */
	exitArray_definition_elements?: (ctx: Array_definition_elementsContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.array_selector`.
	 * @param ctx the parse tree
	 */
	enterArray_selector?: (ctx: Array_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.array_selector`.
	 * @param ctx the parse tree
	 */
	exitArray_selector?: (ctx: Array_selectorContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.dynamic_result`.
	 * @param ctx the parse tree
	 */
	enterDynamic_result?: (ctx: Dynamic_resultContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.dynamic_result`.
	 * @param ctx the parse tree
	 */
	exitDynamic_result?: (ctx: Dynamic_resultContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.dynamic`.
	 * @param ctx the parse tree
	 */
	enterDynamic?: (ctx: DynamicContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.dynamic`.
	 * @param ctx the parse tree
	 */
	exitDynamic?: (ctx: DynamicContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.int_result`.
	 * @param ctx the parse tree
	 */
	enterInt_result?: (ctx: Int_resultContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.int_result`.
	 * @param ctx the parse tree
	 */
	exitInt_result?: (ctx: Int_resultContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.float_result`.
	 * @param ctx the parse tree
	 */
	enterFloat_result?: (ctx: Float_resultContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.float_result`.
	 * @param ctx the parse tree
	 */
	exitFloat_result?: (ctx: Float_resultContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.string_result`.
	 * @param ctx the parse tree
	 */
	enterString_result?: (ctx: String_resultContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.string_result`.
	 * @param ctx the parse tree
	 */
	exitString_result?: (ctx: String_resultContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.comparison_list`.
	 * @param ctx the parse tree
	 */
	enterComparison_list?: (ctx: Comparison_listContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.comparison_list`.
	 * @param ctx the parse tree
	 */
	exitComparison_list?: (ctx: Comparison_listContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.comp_var`.
	 * @param ctx the parse tree
	 */
	enterComp_var?: (ctx: Comp_varContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.comp_var`.
	 * @param ctx the parse tree
	 */
	exitComp_var?: (ctx: Comp_varContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitLvalue?: (ctx: LvalueContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.rvalue`.
	 * @param ctx the parse tree
	 */
	enterRvalue?: (ctx: RvalueContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.rvalue`.
	 * @param ctx the parse tree
	 */
	exitRvalue?: (ctx: RvalueContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.break_expression`.
	 * @param ctx the parse tree
	 */
	enterBreak_expression?: (ctx: Break_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.break_expression`.
	 * @param ctx the parse tree
	 */
	exitBreak_expression?: (ctx: Break_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.literal_t`.
	 * @param ctx the parse tree
	 */
	enterLiteral_t?: (ctx: Literal_tContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.literal_t`.
	 * @param ctx the parse tree
	 */
	exitLiteral_t?: (ctx: Literal_tContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.float_t`.
	 * @param ctx the parse tree
	 */
	enterFloat_t?: (ctx: Float_tContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.float_t`.
	 * @param ctx the parse tree
	 */
	exitFloat_t?: (ctx: Float_tContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.int_t`.
	 * @param ctx the parse tree
	 */
	enterInt_t?: (ctx: Int_tContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.int_t`.
	 * @param ctx the parse tree
	 */
	exitInt_t?: (ctx: Int_tContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.bool_t`.
	 * @param ctx the parse tree
	 */
	enterBool_t?: (ctx: Bool_tContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.bool_t`.
	 * @param ctx the parse tree
	 */
	exitBool_t?: (ctx: Bool_tContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.nil_t`.
	 * @param ctx the parse tree
	 */
	enterNil_t?: (ctx: Nil_tContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.nil_t`.
	 * @param ctx the parse tree
	 */
	exitNil_t?: (ctx: Nil_tContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.id_global`.
	 * @param ctx the parse tree
	 */
	enterId_global?: (ctx: Id_globalContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.id_global`.
	 * @param ctx the parse tree
	 */
	exitId_global?: (ctx: Id_globalContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.id_function`.
	 * @param ctx the parse tree
	 */
	enterId_function?: (ctx: Id_functionContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.id_function`.
	 * @param ctx the parse tree
	 */
	exitId_function?: (ctx: Id_functionContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.terminator`.
	 * @param ctx the parse tree
	 */
	enterTerminator?: (ctx: TerminatorContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.terminator`.
	 * @param ctx the parse tree
	 */
	exitTerminator?: (ctx: TerminatorContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.else_token`.
	 * @param ctx the parse tree
	 */
	enterElse_token?: (ctx: Else_tokenContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.else_token`.
	 * @param ctx the parse tree
	 */
	exitElse_token?: (ctx: Else_tokenContext) => void;

	/**
	 * Enter a parse tree produced by `CorundumParser.crlf`.
	 * @param ctx the parse tree
	 */
	enterCrlf?: (ctx: CrlfContext) => void;
	/**
	 * Exit a parse tree produced by `CorundumParser.crlf`.
	 * @param ctx the parse tree
	 */
	exitCrlf?: (ctx: CrlfContext) => void;
}

