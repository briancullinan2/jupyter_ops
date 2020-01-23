// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ruby/Corundum.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CorundumParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CorundumVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CorundumParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.global_get`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_get?: (ctx: Global_getContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.global_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_set?: (ctx: Global_setContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.global_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_result?: (ctx: Global_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_inline_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_inline_call?: (ctx: Function_inline_callContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.require_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequire_block?: (ctx: Require_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.pir_inline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPir_inline?: (ctx: Pir_inlineContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.pir_expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPir_expression_list?: (ctx: Pir_expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition?: (ctx: Function_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_definition_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition_body?: (ctx: Function_definition_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_definition_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition_header?: (ctx: Function_definition_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name?: (ctx: Function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_definition_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition_params?: (ctx: Function_definition_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_definition_params_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition_params_list?: (ctx: Function_definition_params_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_definition_param_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition_param_id?: (ctx: Function_definition_param_idContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_call_param_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_param_list?: (ctx: Function_call_param_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_call_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_params?: (ctx: Function_call_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_param?: (ctx: Function_paramContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_unnamed_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_unnamed_param?: (ctx: Function_unnamed_paramContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_named_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_named_param?: (ctx: Function_named_paramContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.function_call_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_assignment?: (ctx: Function_call_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.all_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_result?: (ctx: All_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.elsif_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElsif_statement?: (ctx: Elsif_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.if_elsif_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_elsif_statement?: (ctx: If_elsif_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.unless_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnless_statement?: (ctx: Unless_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_statement?: (ctx: While_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.for_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_statement?: (ctx: For_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.init_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_expression?: (ctx: Init_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.all_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_assignment?: (ctx: All_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.for_init_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_init_list?: (ctx: For_init_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.cond_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCond_expression?: (ctx: Cond_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.loop_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop_expression?: (ctx: Loop_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.for_loop_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_loop_list?: (ctx: For_loop_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.statement_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_body?: (ctx: Statement_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.statement_expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_expression_list?: (ctx: Statement_expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.dynamic_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamic_assignment?: (ctx: Dynamic_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.int_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_assignment?: (ctx: Int_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.float_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat_assignment?: (ctx: Float_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.string_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_assignment?: (ctx: String_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.initial_array_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitial_array_assignment?: (ctx: Initial_array_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.array_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_assignment?: (ctx: Array_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.array_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_definition?: (ctx: Array_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.array_definition_elements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_definition_elements?: (ctx: Array_definition_elementsContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.array_selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_selector?: (ctx: Array_selectorContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.dynamic_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamic_result?: (ctx: Dynamic_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.dynamic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamic?: (ctx: DynamicContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.int_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_result?: (ctx: Int_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.float_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat_result?: (ctx: Float_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.string_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_result?: (ctx: String_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.comparison_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison_list?: (ctx: Comparison_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.comp_var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_var?: (ctx: Comp_varContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.rvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRvalue?: (ctx: RvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.break_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_expression?: (ctx: Break_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.literal_t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_t?: (ctx: Literal_tContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.float_t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat_t?: (ctx: Float_tContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.int_t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_t?: (ctx: Int_tContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.bool_t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_t?: (ctx: Bool_tContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.nil_t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNil_t?: (ctx: Nil_tContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.id_global`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_global?: (ctx: Id_globalContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.id_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_function?: (ctx: Id_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.terminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerminator?: (ctx: TerminatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.else_token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_token?: (ctx: Else_tokenContext) => Result;

	/**
	 * Visit a parse tree produced by `CorundumParser.crlf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCrlf?: (ctx: CrlfContext) => Result;
}

