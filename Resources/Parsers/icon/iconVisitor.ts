// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/icon/icon.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StartContext } from "./iconParser";
import { ProgContext } from "./iconParser";
import { EndOfExprContext } from "./iconParser";
import { DeclarationContext } from "./iconParser";
import { Link_declarationContext } from "./iconParser";
import { Link_listContext } from "./iconParser";
import { File_nameContext } from "./iconParser";
import { Global_declarationContext } from "./iconParser";
import { Identifier_listContext } from "./iconParser";
import { Record_declarationContext } from "./iconParser";
import { Field_list_optContext } from "./iconParser";
import { Field_listContext } from "./iconParser";
import { Field_nameContext } from "./iconParser";
import { Procedure_declarationContext } from "./iconParser";
import { Proc_headerContext } from "./iconParser";
import { Parameter_list_optContext } from "./iconParser";
import { Parameter_listContext } from "./iconParser";
import { Locals_optContext } from "./iconParser";
import { LocalzContext } from "./iconParser";
import { Local_specificationContext } from "./iconParser";
import { Initial_optContext } from "./iconParser";
import { Expression_sequenceContext } from "./iconParser";
import { Expression_optContext } from "./iconParser";
import { ExpressionContext } from "./iconParser";
import { Suspend_do_clause_optContext } from "./iconParser";
import { While_do_clause_optContext } from "./iconParser";
import { Until_do_clause_optContext } from "./iconParser";
import { Every_do_clause_optContext } from "./iconParser";
import { Else_clause_optContext } from "./iconParser";
import { Case_listContext } from "./iconParser";
import { Case_clauseContext } from "./iconParser";
import { Expr1Context } from "./iconParser";
import { Expr2Context } from "./iconParser";
import { Expr3Context } from "./iconParser";
import { Expr4Context } from "./iconParser";
import { Expr5Context } from "./iconParser";
import { Expr6Context } from "./iconParser";
import { Expr7Context } from "./iconParser";
import { Expr8Context } from "./iconParser";
import { Expr9Context } from "./iconParser";
import { Expr10Context } from "./iconParser";
import { Expr11Context } from "./iconParser";
import { Expr12Context } from "./iconParser";
import { Expr13Context } from "./iconParser";
import { Expression_listContext } from "./iconParser";
import { Subscript_listContext } from "./iconParser";
import { SubscriptContext } from "./iconParser";
import { KeywordContext } from "./iconParser";
import { IdentifierContext } from "./iconParser";
import { LiteralContext } from "./iconParser";
import { String_literalContext } from "./iconParser";
import { Real_literalContext } from "./iconParser";
import { Integer_literalContext } from "./iconParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `iconParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface iconVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `iconParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.endOfExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndOfExpr?: (ctx: EndOfExprContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.link_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLink_declaration?: (ctx: Link_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.link_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLink_list?: (ctx: Link_listContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.file_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_name?: (ctx: File_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.global_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_declaration?: (ctx: Global_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.identifier_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier_list?: (ctx: Identifier_listContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.record_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecord_declaration?: (ctx: Record_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.field_list_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_list_opt?: (ctx: Field_list_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.field_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_list?: (ctx: Field_listContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.field_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_name?: (ctx: Field_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.procedure_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_declaration?: (ctx: Procedure_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.proc_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProc_header?: (ctx: Proc_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.parameter_list_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_list_opt?: (ctx: Parameter_list_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_list?: (ctx: Parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.locals_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocals_opt?: (ctx: Locals_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.localz`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalz?: (ctx: LocalzContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.local_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_specification?: (ctx: Local_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.initial_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitial_opt?: (ctx: Initial_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expression_sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_sequence?: (ctx: Expression_sequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expression_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_opt?: (ctx: Expression_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.suspend_do_clause_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuspend_do_clause_opt?: (ctx: Suspend_do_clause_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.while_do_clause_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_do_clause_opt?: (ctx: While_do_clause_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.until_do_clause_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntil_do_clause_opt?: (ctx: Until_do_clause_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.every_do_clause_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvery_do_clause_opt?: (ctx: Every_do_clause_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.else_clause_opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_clause_opt?: (ctx: Else_clause_optContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.case_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_list?: (ctx: Case_listContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.case_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_clause?: (ctx: Case_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr1?: (ctx: Expr1Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr2?: (ctx: Expr2Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr3?: (ctx: Expr3Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr4?: (ctx: Expr4Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr5?: (ctx: Expr5Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr6`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr6?: (ctx: Expr6Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr7`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr7?: (ctx: Expr7Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr8?: (ctx: Expr8Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr9`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr9?: (ctx: Expr9Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr10`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr10?: (ctx: Expr10Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr11`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr11?: (ctx: Expr11Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr12`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr12?: (ctx: Expr12Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expr13`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr13?: (ctx: Expr13Context) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.subscript_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript_list?: (ctx: Subscript_listContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.real_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal_literal?: (ctx: Real_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `iconParser.integer_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_literal?: (ctx: Integer_literalContext) => Result;
}

