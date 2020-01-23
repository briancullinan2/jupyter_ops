// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/icon/icon.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `iconParser`.
 */
export interface iconListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `iconParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.endOfExpr`.
	 * @param ctx the parse tree
	 */
	enterEndOfExpr?: (ctx: EndOfExprContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.endOfExpr`.
	 * @param ctx the parse tree
	 */
	exitEndOfExpr?: (ctx: EndOfExprContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.link_declaration`.
	 * @param ctx the parse tree
	 */
	enterLink_declaration?: (ctx: Link_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.link_declaration`.
	 * @param ctx the parse tree
	 */
	exitLink_declaration?: (ctx: Link_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.link_list`.
	 * @param ctx the parse tree
	 */
	enterLink_list?: (ctx: Link_listContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.link_list`.
	 * @param ctx the parse tree
	 */
	exitLink_list?: (ctx: Link_listContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.file_name`.
	 * @param ctx the parse tree
	 */
	enterFile_name?: (ctx: File_nameContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.file_name`.
	 * @param ctx the parse tree
	 */
	exitFile_name?: (ctx: File_nameContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.global_declaration`.
	 * @param ctx the parse tree
	 */
	enterGlobal_declaration?: (ctx: Global_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.global_declaration`.
	 * @param ctx the parse tree
	 */
	exitGlobal_declaration?: (ctx: Global_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_list?: (ctx: Identifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_list?: (ctx: Identifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.record_declaration`.
	 * @param ctx the parse tree
	 */
	enterRecord_declaration?: (ctx: Record_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.record_declaration`.
	 * @param ctx the parse tree
	 */
	exitRecord_declaration?: (ctx: Record_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.field_list_opt`.
	 * @param ctx the parse tree
	 */
	enterField_list_opt?: (ctx: Field_list_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.field_list_opt`.
	 * @param ctx the parse tree
	 */
	exitField_list_opt?: (ctx: Field_list_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.field_list`.
	 * @param ctx the parse tree
	 */
	enterField_list?: (ctx: Field_listContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.field_list`.
	 * @param ctx the parse tree
	 */
	exitField_list?: (ctx: Field_listContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.field_name`.
	 * @param ctx the parse tree
	 */
	enterField_name?: (ctx: Field_nameContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.field_name`.
	 * @param ctx the parse tree
	 */
	exitField_name?: (ctx: Field_nameContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.procedure_declaration`.
	 * @param ctx the parse tree
	 */
	enterProcedure_declaration?: (ctx: Procedure_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.procedure_declaration`.
	 * @param ctx the parse tree
	 */
	exitProcedure_declaration?: (ctx: Procedure_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.proc_header`.
	 * @param ctx the parse tree
	 */
	enterProc_header?: (ctx: Proc_headerContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.proc_header`.
	 * @param ctx the parse tree
	 */
	exitProc_header?: (ctx: Proc_headerContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.parameter_list_opt`.
	 * @param ctx the parse tree
	 */
	enterParameter_list_opt?: (ctx: Parameter_list_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.parameter_list_opt`.
	 * @param ctx the parse tree
	 */
	exitParameter_list_opt?: (ctx: Parameter_list_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_list?: (ctx: Parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_list?: (ctx: Parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.locals_opt`.
	 * @param ctx the parse tree
	 */
	enterLocals_opt?: (ctx: Locals_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.locals_opt`.
	 * @param ctx the parse tree
	 */
	exitLocals_opt?: (ctx: Locals_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.localz`.
	 * @param ctx the parse tree
	 */
	enterLocalz?: (ctx: LocalzContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.localz`.
	 * @param ctx the parse tree
	 */
	exitLocalz?: (ctx: LocalzContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.local_specification`.
	 * @param ctx the parse tree
	 */
	enterLocal_specification?: (ctx: Local_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.local_specification`.
	 * @param ctx the parse tree
	 */
	exitLocal_specification?: (ctx: Local_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.initial_opt`.
	 * @param ctx the parse tree
	 */
	enterInitial_opt?: (ctx: Initial_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.initial_opt`.
	 * @param ctx the parse tree
	 */
	exitInitial_opt?: (ctx: Initial_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expression_sequence`.
	 * @param ctx the parse tree
	 */
	enterExpression_sequence?: (ctx: Expression_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expression_sequence`.
	 * @param ctx the parse tree
	 */
	exitExpression_sequence?: (ctx: Expression_sequenceContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expression_opt`.
	 * @param ctx the parse tree
	 */
	enterExpression_opt?: (ctx: Expression_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expression_opt`.
	 * @param ctx the parse tree
	 */
	exitExpression_opt?: (ctx: Expression_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.suspend_do_clause_opt`.
	 * @param ctx the parse tree
	 */
	enterSuspend_do_clause_opt?: (ctx: Suspend_do_clause_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.suspend_do_clause_opt`.
	 * @param ctx the parse tree
	 */
	exitSuspend_do_clause_opt?: (ctx: Suspend_do_clause_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.while_do_clause_opt`.
	 * @param ctx the parse tree
	 */
	enterWhile_do_clause_opt?: (ctx: While_do_clause_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.while_do_clause_opt`.
	 * @param ctx the parse tree
	 */
	exitWhile_do_clause_opt?: (ctx: While_do_clause_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.until_do_clause_opt`.
	 * @param ctx the parse tree
	 */
	enterUntil_do_clause_opt?: (ctx: Until_do_clause_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.until_do_clause_opt`.
	 * @param ctx the parse tree
	 */
	exitUntil_do_clause_opt?: (ctx: Until_do_clause_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.every_do_clause_opt`.
	 * @param ctx the parse tree
	 */
	enterEvery_do_clause_opt?: (ctx: Every_do_clause_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.every_do_clause_opt`.
	 * @param ctx the parse tree
	 */
	exitEvery_do_clause_opt?: (ctx: Every_do_clause_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.else_clause_opt`.
	 * @param ctx the parse tree
	 */
	enterElse_clause_opt?: (ctx: Else_clause_optContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.else_clause_opt`.
	 * @param ctx the parse tree
	 */
	exitElse_clause_opt?: (ctx: Else_clause_optContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.case_list`.
	 * @param ctx the parse tree
	 */
	enterCase_list?: (ctx: Case_listContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.case_list`.
	 * @param ctx the parse tree
	 */
	exitCase_list?: (ctx: Case_listContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.case_clause`.
	 * @param ctx the parse tree
	 */
	enterCase_clause?: (ctx: Case_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.case_clause`.
	 * @param ctx the parse tree
	 */
	exitCase_clause?: (ctx: Case_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr1`.
	 * @param ctx the parse tree
	 */
	enterExpr1?: (ctx: Expr1Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr1`.
	 * @param ctx the parse tree
	 */
	exitExpr1?: (ctx: Expr1Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr2`.
	 * @param ctx the parse tree
	 */
	enterExpr2?: (ctx: Expr2Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr2`.
	 * @param ctx the parse tree
	 */
	exitExpr2?: (ctx: Expr2Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr3`.
	 * @param ctx the parse tree
	 */
	enterExpr3?: (ctx: Expr3Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr3`.
	 * @param ctx the parse tree
	 */
	exitExpr3?: (ctx: Expr3Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr4`.
	 * @param ctx the parse tree
	 */
	enterExpr4?: (ctx: Expr4Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr4`.
	 * @param ctx the parse tree
	 */
	exitExpr4?: (ctx: Expr4Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr5`.
	 * @param ctx the parse tree
	 */
	enterExpr5?: (ctx: Expr5Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr5`.
	 * @param ctx the parse tree
	 */
	exitExpr5?: (ctx: Expr5Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr6`.
	 * @param ctx the parse tree
	 */
	enterExpr6?: (ctx: Expr6Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr6`.
	 * @param ctx the parse tree
	 */
	exitExpr6?: (ctx: Expr6Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr7`.
	 * @param ctx the parse tree
	 */
	enterExpr7?: (ctx: Expr7Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr7`.
	 * @param ctx the parse tree
	 */
	exitExpr7?: (ctx: Expr7Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr8`.
	 * @param ctx the parse tree
	 */
	enterExpr8?: (ctx: Expr8Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr8`.
	 * @param ctx the parse tree
	 */
	exitExpr8?: (ctx: Expr8Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr9`.
	 * @param ctx the parse tree
	 */
	enterExpr9?: (ctx: Expr9Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr9`.
	 * @param ctx the parse tree
	 */
	exitExpr9?: (ctx: Expr9Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr10`.
	 * @param ctx the parse tree
	 */
	enterExpr10?: (ctx: Expr10Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr10`.
	 * @param ctx the parse tree
	 */
	exitExpr10?: (ctx: Expr10Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr11`.
	 * @param ctx the parse tree
	 */
	enterExpr11?: (ctx: Expr11Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr11`.
	 * @param ctx the parse tree
	 */
	exitExpr11?: (ctx: Expr11Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr12`.
	 * @param ctx the parse tree
	 */
	enterExpr12?: (ctx: Expr12Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr12`.
	 * @param ctx the parse tree
	 */
	exitExpr12?: (ctx: Expr12Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expr13`.
	 * @param ctx the parse tree
	 */
	enterExpr13?: (ctx: Expr13Context) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expr13`.
	 * @param ctx the parse tree
	 */
	exitExpr13?: (ctx: Expr13Context) => void;

	/**
	 * Enter a parse tree produced by `iconParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.subscript_list`.
	 * @param ctx the parse tree
	 */
	enterSubscript_list?: (ctx: Subscript_listContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.subscript_list`.
	 * @param ctx the parse tree
	 */
	exitSubscript_list?: (ctx: Subscript_listContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.subscript`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.subscript`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.real_literal`.
	 * @param ctx the parse tree
	 */
	enterReal_literal?: (ctx: Real_literalContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.real_literal`.
	 * @param ctx the parse tree
	 */
	exitReal_literal?: (ctx: Real_literalContext) => void;

	/**
	 * Enter a parse tree produced by `iconParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	enterInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Exit a parse tree produced by `iconParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	exitInteger_literal?: (ctx: Integer_literalContext) => void;
}

