// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/matlab/matlab.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `matlabParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface matlabVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `matlabParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_expression?: (ctx: Postfix_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.index_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_expression?: (ctx: Index_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.index_expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_expression_list?: (ctx: Index_expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.array_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_expression?: (ctx: Array_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.relational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_expression?: (ctx: Relational_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expression?: (ctx: And_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr_expression?: (ctx: Or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.assignment_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_expression?: (ctx: Assignment_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.eostmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEostmt?: (ctx: EostmtContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.statement_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_list?: (ctx: Statement_listContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.identifier_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier_list?: (ctx: Identifier_listContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.global_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_statement?: (ctx: Global_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.clear_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClear_statement?: (ctx: Clear_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.expression_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_statement?: (ctx: Expression_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.assignment_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_statement?: (ctx: Assignment_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.array_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_element?: (ctx: Array_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.array_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_list?: (ctx: Array_listContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.selection_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelection_statement?: (ctx: Selection_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.elseif_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseif_clause?: (ctx: Elseif_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.iteration_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIteration_statement?: (ctx: Iteration_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.jump_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_statement?: (ctx: Jump_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.translation_unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranslation_unit?: (ctx: Translation_unitContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.func_ident_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_ident_list?: (ctx: Func_ident_listContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.func_return_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_return_list?: (ctx: Func_return_listContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.function_declare_lhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declare_lhs?: (ctx: Function_declare_lhsContext) => Result;

	/**
	 * Visit a parse tree produced by `matlabParser.function_declare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declare?: (ctx: Function_declareContext) => Result;
}

