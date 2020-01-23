// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lpc/LPC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `LPCParser`.
 */
export interface LPCListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LPCParser.lpc_program`.
	 * @param ctx the parse tree
	 */
	enterLpc_program?: (ctx: Lpc_programContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.lpc_program`.
	 * @param ctx the parse tree
	 */
	exitLpc_program?: (ctx: Lpc_programContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.possible_semi_colon`.
	 * @param ctx the parse tree
	 */
	enterPossible_semi_colon?: (ctx: Possible_semi_colonContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.possible_semi_colon`.
	 * @param ctx the parse tree
	 */
	exitPossible_semi_colon?: (ctx: Possible_semi_colonContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.defination`.
	 * @param ctx the parse tree
	 */
	enterDefination?: (ctx: DefinationContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.defination`.
	 * @param ctx the parse tree
	 */
	exitDefination?: (ctx: DefinationContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.function_defination`.
	 * @param ctx the parse tree
	 */
	enterFunction_defination?: (ctx: Function_definationContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.function_defination`.
	 * @param ctx the parse tree
	 */
	exitFunction_defination?: (ctx: Function_definationContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.modifier_change`.
	 * @param ctx the parse tree
	 */
	enterModifier_change?: (ctx: Modifier_changeContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.modifier_change`.
	 * @param ctx the parse tree
	 */
	exitModifier_change?: (ctx: Modifier_changeContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.type_modifier_list`.
	 * @param ctx the parse tree
	 */
	enterType_modifier_list?: (ctx: Type_modifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.type_modifier_list`.
	 * @param ctx the parse tree
	 */
	exitType_modifier_list?: (ctx: Type_modifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.type_decl`.
	 * @param ctx the parse tree
	 */
	enterType_decl?: (ctx: Type_declContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.type_decl`.
	 * @param ctx the parse tree
	 */
	exitType_decl?: (ctx: Type_declContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.member_list`.
	 * @param ctx the parse tree
	 */
	enterMember_list?: (ctx: Member_listContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.member_list`.
	 * @param ctx the parse tree
	 */
	exitMember_list?: (ctx: Member_listContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.member_name_list`.
	 * @param ctx the parse tree
	 */
	enterMember_name_list?: (ctx: Member_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.member_name_list`.
	 * @param ctx the parse tree
	 */
	exitMember_name_list?: (ctx: Member_name_listContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.member_name`.
	 * @param ctx the parse tree
	 */
	enterMember_name?: (ctx: Member_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.member_name`.
	 * @param ctx the parse tree
	 */
	exitMember_name?: (ctx: Member_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.name_list`.
	 * @param ctx the parse tree
	 */
	enterName_list?: (ctx: Name_listContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.name_list`.
	 * @param ctx the parse tree
	 */
	exitName_list?: (ctx: Name_listContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.new_name`.
	 * @param ctx the parse tree
	 */
	enterNew_name?: (ctx: New_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.new_name`.
	 * @param ctx the parse tree
	 */
	exitNew_name?: (ctx: New_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.expr0`.
	 * @param ctx the parse tree
	 */
	enterExpr0?: (ctx: Expr0Context) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.expr0`.
	 * @param ctx the parse tree
	 */
	exitExpr0?: (ctx: Expr0Context) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.time_expression`.
	 * @param ctx the parse tree
	 */
	enterTime_expression?: (ctx: Time_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.time_expression`.
	 * @param ctx the parse tree
	 */
	exitTime_expression?: (ctx: Time_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.expr_or_block`.
	 * @param ctx the parse tree
	 */
	enterExpr_or_block?: (ctx: Expr_or_blockContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.expr_or_block`.
	 * @param ctx the parse tree
	 */
	exitExpr_or_block?: (ctx: Expr_or_blockContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.comma_expr`.
	 * @param ctx the parse tree
	 */
	enterComma_expr?: (ctx: Comma_exprContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.comma_expr`.
	 * @param ctx the parse tree
	 */
	exitComma_expr?: (ctx: Comma_exprContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.parse_command`.
	 * @param ctx the parse tree
	 */
	enterParse_command?: (ctx: Parse_commandContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.parse_command`.
	 * @param ctx the parse tree
	 */
	exitParse_command?: (ctx: Parse_commandContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.sscanf`.
	 * @param ctx the parse tree
	 */
	enterSscanf?: (ctx: SscanfContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.sscanf`.
	 * @param ctx the parse tree
	 */
	exitSscanf?: (ctx: SscanfContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.lvalue_list`.
	 * @param ctx the parse tree
	 */
	enterLvalue_list?: (ctx: Lvalue_listContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.lvalue_list`.
	 * @param ctx the parse tree
	 */
	exitLvalue_list?: (ctx: Lvalue_listContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.cast`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.cast`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.basic_type`.
	 * @param ctx the parse tree
	 */
	enterBasic_type?: (ctx: Basic_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.basic_type`.
	 * @param ctx the parse tree
	 */
	exitBasic_type?: (ctx: Basic_typeContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.atomic_type`.
	 * @param ctx the parse tree
	 */
	enterAtomic_type?: (ctx: Atomic_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.atomic_type`.
	 * @param ctx the parse tree
	 */
	exitAtomic_type?: (ctx: Atomic_typeContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.expr4`.
	 * @param ctx the parse tree
	 */
	enterExpr4?: (ctx: Expr4Context) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.expr4`.
	 * @param ctx the parse tree
	 */
	exitExpr4?: (ctx: Expr4Context) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.catch_statement`.
	 * @param ctx the parse tree
	 */
	enterCatch_statement?: (ctx: Catch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.catch_statement`.
	 * @param ctx the parse tree
	 */
	exitCatch_statement?: (ctx: Catch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.expr_list`.
	 * @param ctx the parse tree
	 */
	enterExpr_list?: (ctx: Expr_listContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.expr_list`.
	 * @param ctx the parse tree
	 */
	exitExpr_list?: (ctx: Expr_listContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.expr_list3`.
	 * @param ctx the parse tree
	 */
	enterExpr_list3?: (ctx: Expr_list3Context) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.expr_list3`.
	 * @param ctx the parse tree
	 */
	exitExpr_list3?: (ctx: Expr_list3Context) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.expr_list4`.
	 * @param ctx the parse tree
	 */
	enterExpr_list4?: (ctx: Expr_list4Context) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.expr_list4`.
	 * @param ctx the parse tree
	 */
	exitExpr_list4?: (ctx: Expr_list4Context) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.assoc_pair`.
	 * @param ctx the parse tree
	 */
	enterAssoc_pair?: (ctx: Assoc_pairContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.assoc_pair`.
	 * @param ctx the parse tree
	 */
	exitAssoc_pair?: (ctx: Assoc_pairContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.expr_list2`.
	 * @param ctx the parse tree
	 */
	enterExpr_list2?: (ctx: Expr_list2Context) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.expr_list2`.
	 * @param ctx the parse tree
	 */
	exitExpr_list2?: (ctx: Expr_list2Context) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.expr_list_node`.
	 * @param ctx the parse tree
	 */
	enterExpr_list_node?: (ctx: Expr_list_nodeContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.expr_list_node`.
	 * @param ctx the parse tree
	 */
	exitExpr_list_node?: (ctx: Expr_list_nodeContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.string_con2`.
	 * @param ctx the parse tree
	 */
	enterString_con2?: (ctx: String_con2Context) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.string_con2`.
	 * @param ctx the parse tree
	 */
	exitString_con2?: (ctx: String_con2Context) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.string_con1`.
	 * @param ctx the parse tree
	 */
	enterString_con1?: (ctx: String_con1Context) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.string_con1`.
	 * @param ctx the parse tree
	 */
	exitString_con1?: (ctx: String_con1Context) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.function_name_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_name_call?: (ctx: Function_name_callContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.function_name_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_name_call?: (ctx: Function_name_callContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.function_arrow_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_arrow_call?: (ctx: Function_arrow_callContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.function_arrow_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_arrow_call?: (ctx: Function_arrow_callContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.opt_class_init`.
	 * @param ctx the parse tree
	 */
	enterOpt_class_init?: (ctx: Opt_class_initContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.opt_class_init`.
	 * @param ctx the parse tree
	 */
	exitOpt_class_init?: (ctx: Opt_class_initContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.class_init`.
	 * @param ctx the parse tree
	 */
	enterClass_init?: (ctx: Class_initContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.class_init`.
	 * @param ctx the parse tree
	 */
	exitClass_init?: (ctx: Class_initContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.efun_override`.
	 * @param ctx the parse tree
	 */
	enterEfun_override?: (ctx: Efun_overrideContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.efun_override`.
	 * @param ctx the parse tree
	 */
	exitEfun_override?: (ctx: Efun_overrideContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.block_or_semi`.
	 * @param ctx the parse tree
	 */
	enterBlock_or_semi?: (ctx: Block_or_semiContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.block_or_semi`.
	 * @param ctx the parse tree
	 */
	exitBlock_or_semi?: (ctx: Block_or_semiContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.local_declare_statement`.
	 * @param ctx the parse tree
	 */
	enterLocal_declare_statement?: (ctx: Local_declare_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.local_declare_statement`.
	 * @param ctx the parse tree
	 */
	exitLocal_declare_statement?: (ctx: Local_declare_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.local_name_list`.
	 * @param ctx the parse tree
	 */
	enterLocal_name_list?: (ctx: Local_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.local_name_list`.
	 * @param ctx the parse tree
	 */
	exitLocal_name_list?: (ctx: Local_name_listContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.new_local_def`.
	 * @param ctx the parse tree
	 */
	enterNew_local_def?: (ctx: New_local_defContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.new_local_def`.
	 * @param ctx the parse tree
	 */
	exitNew_local_def?: (ctx: New_local_defContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.new_local_name`.
	 * @param ctx the parse tree
	 */
	enterNew_local_name?: (ctx: New_local_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.new_local_name`.
	 * @param ctx the parse tree
	 */
	exitNew_local_name?: (ctx: New_local_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.do_statement`.
	 * @param ctx the parse tree
	 */
	enterDo_statement?: (ctx: Do_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.do_statement`.
	 * @param ctx the parse tree
	 */
	exitDo_statement?: (ctx: Do_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.switch_statement`.
	 * @param ctx the parse tree
	 */
	enterSwitch_statement?: (ctx: Switch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.switch_statement`.
	 * @param ctx the parse tree
	 */
	exitSwitch_statement?: (ctx: Switch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.local_declarations`.
	 * @param ctx the parse tree
	 */
	enterLocal_declarations?: (ctx: Local_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.local_declarations`.
	 * @param ctx the parse tree
	 */
	exitLocal_declarations?: (ctx: Local_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.case_statement`.
	 * @param ctx the parse tree
	 */
	enterCase_statement?: (ctx: Case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.case_statement`.
	 * @param ctx the parse tree
	 */
	exitCase_statement?: (ctx: Case_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.switch_block`.
	 * @param ctx the parse tree
	 */
	enterSwitch_block?: (ctx: Switch_blockContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.switch_block`.
	 * @param ctx the parse tree
	 */
	exitSwitch_block?: (ctx: Switch_blockContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.case_label`.
	 * @param ctx the parse tree
	 */
	enterCase_label?: (ctx: Case_labelContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.case_label`.
	 * @param ctx the parse tree
	 */
	exitCase_label?: (ctx: Case_labelContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.foreach_loop`.
	 * @param ctx the parse tree
	 */
	enterForeach_loop?: (ctx: Foreach_loopContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.foreach_loop`.
	 * @param ctx the parse tree
	 */
	exitForeach_loop?: (ctx: Foreach_loopContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.foreach_vars`.
	 * @param ctx the parse tree
	 */
	enterForeach_vars?: (ctx: Foreach_varsContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.foreach_vars`.
	 * @param ctx the parse tree
	 */
	exitForeach_vars?: (ctx: Foreach_varsContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.for_loop`.
	 * @param ctx the parse tree
	 */
	enterFor_loop?: (ctx: For_loopContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.for_loop`.
	 * @param ctx the parse tree
	 */
	exitFor_loop?: (ctx: For_loopContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.foreach_var`.
	 * @param ctx the parse tree
	 */
	enterForeach_var?: (ctx: Foreach_varContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.foreach_var`.
	 * @param ctx the parse tree
	 */
	exitForeach_var?: (ctx: Foreach_varContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.first_for_expr`.
	 * @param ctx the parse tree
	 */
	enterFirst_for_expr?: (ctx: First_for_exprContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.first_for_expr`.
	 * @param ctx the parse tree
	 */
	exitFirst_for_expr?: (ctx: First_for_exprContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.single_new_local_def_with_init`.
	 * @param ctx the parse tree
	 */
	enterSingle_new_local_def_with_init?: (ctx: Single_new_local_def_with_initContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.single_new_local_def_with_init`.
	 * @param ctx the parse tree
	 */
	exitSingle_new_local_def_with_init?: (ctx: Single_new_local_def_with_initContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.single_new_local_def`.
	 * @param ctx the parse tree
	 */
	enterSingle_new_local_def?: (ctx: Single_new_local_defContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.single_new_local_def`.
	 * @param ctx the parse tree
	 */
	exitSingle_new_local_def?: (ctx: Single_new_local_defContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.for_expr`.
	 * @param ctx the parse tree
	 */
	enterFor_expr?: (ctx: For_exprContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.for_expr`.
	 * @param ctx the parse tree
	 */
	exitFor_expr?: (ctx: For_exprContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.cond`.
	 * @param ctx the parse tree
	 */
	enterCond?: (ctx: CondContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.cond`.
	 * @param ctx the parse tree
	 */
	exitCond?: (ctx: CondContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.optional_else_part`.
	 * @param ctx the parse tree
	 */
	enterOptional_else_part?: (ctx: Optional_else_partContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.optional_else_part`.
	 * @param ctx the parse tree
	 */
	exitOptional_else_part?: (ctx: Optional_else_partContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.argument_list`.
	 * @param ctx the parse tree
	 */
	enterArgument_list?: (ctx: Argument_listContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.argument_list`.
	 * @param ctx the parse tree
	 */
	exitArgument_list?: (ctx: Argument_listContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.new_arg`.
	 * @param ctx the parse tree
	 */
	enterNew_arg?: (ctx: New_argContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.new_arg`.
	 * @param ctx the parse tree
	 */
	exitNew_arg?: (ctx: New_argContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.inheritance`.
	 * @param ctx the parse tree
	 */
	enterInheritance?: (ctx: InheritanceContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.inheritance`.
	 * @param ctx the parse tree
	 */
	exitInheritance?: (ctx: InheritanceContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.opt_basic_type`.
	 * @param ctx the parse tree
	 */
	enterOpt_basic_type?: (ctx: Opt_basic_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.opt_basic_type`.
	 * @param ctx the parse tree
	 */
	exitOpt_basic_type?: (ctx: Opt_basic_typeContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.optional_star`.
	 * @param ctx the parse tree
	 */
	enterOptional_star?: (ctx: Optional_starContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.optional_star`.
	 * @param ctx the parse tree
	 */
	exitOptional_star?: (ctx: Optional_starContext) => void;

	/**
	 * Enter a parse tree produced by `LPCParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `LPCParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

