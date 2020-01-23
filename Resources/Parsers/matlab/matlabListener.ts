// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/matlab/matlab.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Primary_expressionContext } from "./matlabParser";
import { Postfix_expressionContext } from "./matlabParser";
import { Index_expressionContext } from "./matlabParser";
import { Index_expression_listContext } from "./matlabParser";
import { Array_expressionContext } from "./matlabParser";
import { Unary_expressionContext } from "./matlabParser";
import { Unary_operatorContext } from "./matlabParser";
import { Multiplicative_expressionContext } from "./matlabParser";
import { Additive_expressionContext } from "./matlabParser";
import { Relational_expressionContext } from "./matlabParser";
import { Equality_expressionContext } from "./matlabParser";
import { And_expressionContext } from "./matlabParser";
import { Or_expressionContext } from "./matlabParser";
import { ExpressionContext } from "./matlabParser";
import { Assignment_expressionContext } from "./matlabParser";
import { EostmtContext } from "./matlabParser";
import { StatementContext } from "./matlabParser";
import { Statement_listContext } from "./matlabParser";
import { Identifier_listContext } from "./matlabParser";
import { Global_statementContext } from "./matlabParser";
import { Clear_statementContext } from "./matlabParser";
import { Expression_statementContext } from "./matlabParser";
import { Assignment_statementContext } from "./matlabParser";
import { Array_elementContext } from "./matlabParser";
import { Array_listContext } from "./matlabParser";
import { Selection_statementContext } from "./matlabParser";
import { Elseif_clauseContext } from "./matlabParser";
import { Iteration_statementContext } from "./matlabParser";
import { Jump_statementContext } from "./matlabParser";
import { Translation_unitContext } from "./matlabParser";
import { Func_ident_listContext } from "./matlabParser";
import { Func_return_listContext } from "./matlabParser";
import { Function_declare_lhsContext } from "./matlabParser";
import { Function_declareContext } from "./matlabParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `matlabParser`.
 */
export interface matlabListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `matlabParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfix_expression?: (ctx: Postfix_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfix_expression?: (ctx: Postfix_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.index_expression`.
	 * @param ctx the parse tree
	 */
	enterIndex_expression?: (ctx: Index_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.index_expression`.
	 * @param ctx the parse tree
	 */
	exitIndex_expression?: (ctx: Index_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.index_expression_list`.
	 * @param ctx the parse tree
	 */
	enterIndex_expression_list?: (ctx: Index_expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.index_expression_list`.
	 * @param ctx the parse tree
	 */
	exitIndex_expression_list?: (ctx: Index_expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.array_expression`.
	 * @param ctx the parse tree
	 */
	enterArray_expression?: (ctx: Array_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.array_expression`.
	 * @param ctx the parse tree
	 */
	exitArray_expression?: (ctx: Array_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditive_expression?: (ctx: Additive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	enterRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	exitRelational_expression?: (ctx: Relational_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression?: (ctx: Equality_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.and_expression`.
	 * @param ctx the parse tree
	 */
	enterAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.and_expression`.
	 * @param ctx the parse tree
	 */
	exitAnd_expression?: (ctx: And_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.or_expression`.
	 * @param ctx the parse tree
	 */
	enterOr_expression?: (ctx: Or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.or_expression`.
	 * @param ctx the parse tree
	 */
	exitOr_expression?: (ctx: Or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	enterAssignment_expression?: (ctx: Assignment_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	exitAssignment_expression?: (ctx: Assignment_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.eostmt`.
	 * @param ctx the parse tree
	 */
	enterEostmt?: (ctx: EostmtContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.eostmt`.
	 * @param ctx the parse tree
	 */
	exitEostmt?: (ctx: EostmtContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.statement_list`.
	 * @param ctx the parse tree
	 */
	enterStatement_list?: (ctx: Statement_listContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.statement_list`.
	 * @param ctx the parse tree
	 */
	exitStatement_list?: (ctx: Statement_listContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_list?: (ctx: Identifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_list?: (ctx: Identifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.global_statement`.
	 * @param ctx the parse tree
	 */
	enterGlobal_statement?: (ctx: Global_statementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.global_statement`.
	 * @param ctx the parse tree
	 */
	exitGlobal_statement?: (ctx: Global_statementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.clear_statement`.
	 * @param ctx the parse tree
	 */
	enterClear_statement?: (ctx: Clear_statementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.clear_statement`.
	 * @param ctx the parse tree
	 */
	exitClear_statement?: (ctx: Clear_statementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	enterExpression_statement?: (ctx: Expression_statementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	exitExpression_statement?: (ctx: Expression_statementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.assignment_statement`.
	 * @param ctx the parse tree
	 */
	enterAssignment_statement?: (ctx: Assignment_statementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.assignment_statement`.
	 * @param ctx the parse tree
	 */
	exitAssignment_statement?: (ctx: Assignment_statementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.array_element`.
	 * @param ctx the parse tree
	 */
	enterArray_element?: (ctx: Array_elementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.array_element`.
	 * @param ctx the parse tree
	 */
	exitArray_element?: (ctx: Array_elementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.array_list`.
	 * @param ctx the parse tree
	 */
	enterArray_list?: (ctx: Array_listContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.array_list`.
	 * @param ctx the parse tree
	 */
	exitArray_list?: (ctx: Array_listContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.selection_statement`.
	 * @param ctx the parse tree
	 */
	enterSelection_statement?: (ctx: Selection_statementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.selection_statement`.
	 * @param ctx the parse tree
	 */
	exitSelection_statement?: (ctx: Selection_statementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.elseif_clause`.
	 * @param ctx the parse tree
	 */
	enterElseif_clause?: (ctx: Elseif_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.elseif_clause`.
	 * @param ctx the parse tree
	 */
	exitElseif_clause?: (ctx: Elseif_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.iteration_statement`.
	 * @param ctx the parse tree
	 */
	enterIteration_statement?: (ctx: Iteration_statementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.iteration_statement`.
	 * @param ctx the parse tree
	 */
	exitIteration_statement?: (ctx: Iteration_statementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	enterJump_statement?: (ctx: Jump_statementContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	exitJump_statement?: (ctx: Jump_statementContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.translation_unit`.
	 * @param ctx the parse tree
	 */
	enterTranslation_unit?: (ctx: Translation_unitContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.translation_unit`.
	 * @param ctx the parse tree
	 */
	exitTranslation_unit?: (ctx: Translation_unitContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.func_ident_list`.
	 * @param ctx the parse tree
	 */
	enterFunc_ident_list?: (ctx: Func_ident_listContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.func_ident_list`.
	 * @param ctx the parse tree
	 */
	exitFunc_ident_list?: (ctx: Func_ident_listContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.func_return_list`.
	 * @param ctx the parse tree
	 */
	enterFunc_return_list?: (ctx: Func_return_listContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.func_return_list`.
	 * @param ctx the parse tree
	 */
	exitFunc_return_list?: (ctx: Func_return_listContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.function_declare_lhs`.
	 * @param ctx the parse tree
	 */
	enterFunction_declare_lhs?: (ctx: Function_declare_lhsContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.function_declare_lhs`.
	 * @param ctx the parse tree
	 */
	exitFunction_declare_lhs?: (ctx: Function_declare_lhsContext) => void;

	/**
	 * Enter a parse tree produced by `matlabParser.function_declare`.
	 * @param ctx the parse tree
	 */
	enterFunction_declare?: (ctx: Function_declareContext) => void;
	/**
	 * Exit a parse tree produced by `matlabParser.function_declare`.
	 * @param ctx the parse tree
	 */
	exitFunction_declare?: (ctx: Function_declareContext) => void;
}

