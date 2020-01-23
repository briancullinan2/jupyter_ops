// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lpc/LPC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Lpc_programContext } from "./LPCParser";
import { ProgramContext } from "./LPCParser";
import { Possible_semi_colonContext } from "./LPCParser";
import { DefinationContext } from "./LPCParser";
import { Function_definationContext } from "./LPCParser";
import { Modifier_changeContext } from "./LPCParser";
import { Type_modifier_listContext } from "./LPCParser";
import { Type_declContext } from "./LPCParser";
import { Member_listContext } from "./LPCParser";
import { Member_name_listContext } from "./LPCParser";
import { Member_nameContext } from "./LPCParser";
import { Name_listContext } from "./LPCParser";
import { New_nameContext } from "./LPCParser";
import { Expr0Context } from "./LPCParser";
import { Time_expressionContext } from "./LPCParser";
import { Expr_or_blockContext } from "./LPCParser";
import { Comma_exprContext } from "./LPCParser";
import { Parse_commandContext } from "./LPCParser";
import { SscanfContext } from "./LPCParser";
import { Lvalue_listContext } from "./LPCParser";
import { CastContext } from "./LPCParser";
import { Basic_typeContext } from "./LPCParser";
import { Atomic_typeContext } from "./LPCParser";
import { Expr4Context } from "./LPCParser";
import { Catch_statementContext } from "./LPCParser";
import { Expr_listContext } from "./LPCParser";
import { Expr_list3Context } from "./LPCParser";
import { Expr_list4Context } from "./LPCParser";
import { Assoc_pairContext } from "./LPCParser";
import { Expr_list2Context } from "./LPCParser";
import { Expr_list_nodeContext } from "./LPCParser";
import { StringContext } from "./LPCParser";
import { String_con2Context } from "./LPCParser";
import { String_con1Context } from "./LPCParser";
import { Function_callContext } from "./LPCParser";
import { Function_name_callContext } from "./LPCParser";
import { Function_arrow_callContext } from "./LPCParser";
import { Function_nameContext } from "./LPCParser";
import { Opt_class_initContext } from "./LPCParser";
import { Class_initContext } from "./LPCParser";
import { Efun_overrideContext } from "./LPCParser";
import { Block_or_semiContext } from "./LPCParser";
import { BlockContext } from "./LPCParser";
import { StatementsContext } from "./LPCParser";
import { Local_declare_statementContext } from "./LPCParser";
import { Local_name_listContext } from "./LPCParser";
import { New_local_defContext } from "./LPCParser";
import { New_local_nameContext } from "./LPCParser";
import { StatementContext } from "./LPCParser";
import { While_statementContext } from "./LPCParser";
import { Do_statementContext } from "./LPCParser";
import { Switch_statementContext } from "./LPCParser";
import { Local_declarationsContext } from "./LPCParser";
import { Case_statementContext } from "./LPCParser";
import { Switch_blockContext } from "./LPCParser";
import { Case_labelContext } from "./LPCParser";
import { ConstantContext } from "./LPCParser";
import { Foreach_loopContext } from "./LPCParser";
import { Foreach_varsContext } from "./LPCParser";
import { For_loopContext } from "./LPCParser";
import { Foreach_varContext } from "./LPCParser";
import { First_for_exprContext } from "./LPCParser";
import { Single_new_local_def_with_initContext } from "./LPCParser";
import { Single_new_local_defContext } from "./LPCParser";
import { For_exprContext } from "./LPCParser";
import { ReturnStatementContext } from "./LPCParser";
import { CondContext } from "./LPCParser";
import { Optional_else_partContext } from "./LPCParser";
import { ArgumentContext } from "./LPCParser";
import { Argument_listContext } from "./LPCParser";
import { New_argContext } from "./LPCParser";
import { InheritanceContext } from "./LPCParser";
import { Data_typeContext } from "./LPCParser";
import { Opt_basic_typeContext } from "./LPCParser";
import { Optional_starContext } from "./LPCParser";
import { IdentifierContext } from "./LPCParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LPCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LPCVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LPCParser.lpc_program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLpc_program?: (ctx: Lpc_programContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.possible_semi_colon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPossible_semi_colon?: (ctx: Possible_semi_colonContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.defination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefination?: (ctx: DefinationContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.function_defination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_defination?: (ctx: Function_definationContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.modifier_change`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier_change?: (ctx: Modifier_changeContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.type_modifier_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_modifier_list?: (ctx: Type_modifier_listContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.type_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_decl?: (ctx: Type_declContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.member_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_list?: (ctx: Member_listContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.member_name_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_name_list?: (ctx: Member_name_listContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.member_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_name?: (ctx: Member_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.name_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName_list?: (ctx: Name_listContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.new_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_name?: (ctx: New_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.expr0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr0?: (ctx: Expr0Context) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.time_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime_expression?: (ctx: Time_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.expr_or_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_or_block?: (ctx: Expr_or_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.comma_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComma_expr?: (ctx: Comma_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.parse_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse_command?: (ctx: Parse_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.sscanf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSscanf?: (ctx: SscanfContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.lvalue_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue_list?: (ctx: Lvalue_listContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.cast`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.basic_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasic_type?: (ctx: Basic_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.atomic_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomic_type?: (ctx: Atomic_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.expr4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr4?: (ctx: Expr4Context) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.catch_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatch_statement?: (ctx: Catch_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.expr_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_list?: (ctx: Expr_listContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.expr_list3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_list3?: (ctx: Expr_list3Context) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.expr_list4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_list4?: (ctx: Expr_list4Context) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.assoc_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssoc_pair?: (ctx: Assoc_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.expr_list2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_list2?: (ctx: Expr_list2Context) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.expr_list_node`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_list_node?: (ctx: Expr_list_nodeContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.string_con2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_con2?: (ctx: String_con2Context) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.string_con1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_con1?: (ctx: String_con1Context) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.function_name_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name_call?: (ctx: Function_name_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.function_arrow_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_arrow_call?: (ctx: Function_arrow_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name?: (ctx: Function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.opt_class_init`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpt_class_init?: (ctx: Opt_class_initContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.class_init`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_init?: (ctx: Class_initContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.efun_override`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEfun_override?: (ctx: Efun_overrideContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.block_or_semi`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_or_semi?: (ctx: Block_or_semiContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.local_declare_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_declare_statement?: (ctx: Local_declare_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.local_name_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_name_list?: (ctx: Local_name_listContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.new_local_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_local_def?: (ctx: New_local_defContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.new_local_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_local_name?: (ctx: New_local_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_statement?: (ctx: While_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.do_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_statement?: (ctx: Do_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.switch_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_statement?: (ctx: Switch_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.local_declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_declarations?: (ctx: Local_declarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.case_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_statement?: (ctx: Case_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.switch_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_block?: (ctx: Switch_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.case_label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_label?: (ctx: Case_labelContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.foreach_loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeach_loop?: (ctx: Foreach_loopContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.foreach_vars`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeach_vars?: (ctx: Foreach_varsContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.for_loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_loop?: (ctx: For_loopContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.foreach_var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeach_var?: (ctx: Foreach_varContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.first_for_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirst_for_expr?: (ctx: First_for_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.single_new_local_def_with_init`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_new_local_def_with_init?: (ctx: Single_new_local_def_with_initContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.single_new_local_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_new_local_def?: (ctx: Single_new_local_defContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.for_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_expr?: (ctx: For_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCond?: (ctx: CondContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.optional_else_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional_else_part?: (ctx: Optional_else_partContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.argument_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_list?: (ctx: Argument_listContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.new_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_arg?: (ctx: New_argContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.inheritance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInheritance?: (ctx: InheritanceContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.data_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_type?: (ctx: Data_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.opt_basic_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpt_basic_type?: (ctx: Opt_basic_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.optional_star`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional_star?: (ctx: Optional_starContext) => Result;

	/**
	 * Visit a parse tree produced by `LPCParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

