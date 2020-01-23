// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sharc/SHARCParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./SHARCParser";
import { StatementContext } from "./SHARCParser";
import { Stmt_atomContext } from "./SHARCParser";
import { SecContext } from "./SHARCParser";
import { SegContext } from "./SHARCParser";
import { End_segContext } from "./SHARCParser";
import { Seg_qualifierContext } from "./SHARCParser";
import { Seg_qualifier1Context } from "./SHARCParser";
import { Seg_qualifier2Context } from "./SHARCParser";
import { Seg_qualifier3Context } from "./SHARCParser";
import { Seg_qualifier_1Context } from "./SHARCParser";
import { Seg_qualifier_2Context } from "./SHARCParser";
import { Seg_qualifier_3Context } from "./SHARCParser";
import { StmtContext } from "./SHARCParser";
import { DeclarationContext } from "./SHARCParser";
import { Declaration_exp1Context } from "./SHARCParser";
import { Declaration_exp2Context } from "./SHARCParser";
import { Declaration_exp3Context } from "./SHARCParser";
import { Declaration_exp4Context } from "./SHARCParser";
import { Declaration_exp5Context } from "./SHARCParser";
import { Declaration_exp_f1Context } from "./SHARCParser";
import { Declaration_exp_f2Context } from "./SHARCParser";
import { InitExpressionContext } from "./SHARCParser";
import { Var_addrContext } from "./SHARCParser";
import { Value_expContext } from "./SHARCParser";
import { Value_exp2Context } from "./SHARCParser";
import { TermContext } from "./SHARCParser";
import { FactorContext } from "./SHARCParser";
import { AtomContext } from "./SHARCParser";
import { ComputeContext } from "./SHARCParser";
import { If_compute_movContext } from "./SHARCParser";
import { If_compute_mov_expContext } from "./SHARCParser";
import { Compute_mov_expContext } from "./SHARCParser";
import { Mov_exp_1Context } from "./SHARCParser";
import { Mov_exp_1_1Context } from "./SHARCParser";
import { Mov_exp_1_2Context } from "./SHARCParser";
import { Mov_exp_3aContext } from "./SHARCParser";
import { Mov_exp_3bContext } from "./SHARCParser";
import { Mov_exp_3cContext } from "./SHARCParser";
import { Mov_exp_3dContext } from "./SHARCParser";
import { Mov_exp_4aContext } from "./SHARCParser";
import { Mov_exp_4bContext } from "./SHARCParser";
import { Mov_exp_4cContext } from "./SHARCParser";
import { Mov_exp_4dContext } from "./SHARCParser";
import { Mov_exp_5Context } from "./SHARCParser";
import { Mov_exp_6aContext } from "./SHARCParser";
import { Mov_exp_6bContext } from "./SHARCParser";
import { Mov_exp_7Context } from "./SHARCParser";
import { Mem_addr_ia_mbContext } from "./SHARCParser";
import { Mem_addr_ic_mdContext } from "./SHARCParser";
import { Mem_addr_md_icContext } from "./SHARCParser";
import { Mem_addr_mb_iaContext } from "./SHARCParser";
import { Mem_addr_ia_intContext } from "./SHARCParser";
import { Mem_addr_ic_intContext } from "./SHARCParser";
import { Mem_addr_int_iaContext } from "./SHARCParser";
import { Mem_addr_int_icContext } from "./SHARCParser";
import { Mem_addr_intContext } from "./SHARCParser";
import { Mem_addr_int_Context } from "./SHARCParser";
import { Mem_addr_dm_ia_mbContext } from "./SHARCParser";
import { Mem_addr_pm_ic_mdContext } from "./SHARCParser";
import { Mem_addr_dm_mb_iaContext } from "./SHARCParser";
import { Mem_addr_pm_md_icContext } from "./SHARCParser";
import { Mem_addr_dm_ia_intContext } from "./SHARCParser";
import { Mem_addr_pm_ic_intContext } from "./SHARCParser";
import { Mem_addr_dm_int_iaContext } from "./SHARCParser";
import { Mem_addr_pm_int_icContext } from "./SHARCParser";
import { Mem_addr_dm_intContext } from "./SHARCParser";
import { Mem_addr_pm_intContext } from "./SHARCParser";
import { Fixpoint_alu_opContext } from "./SHARCParser";
import { R_expContext } from "./SHARCParser";
import { Floating_point_alu_opContext } from "./SHARCParser";
import { F_expContext } from "./SHARCParser";
import { Multi_opContext } from "./SHARCParser";
import { Multi_rContext } from "./SHARCParser";
import { Multi_exp_rContext } from "./SHARCParser";
import { Multi_exp_mrfContext } from "./SHARCParser";
import { Multi_exp_mrbContext } from "./SHARCParser";
import { MrContext } from "./SHARCParser";
import { Shifter_opContext } from "./SHARCParser";
import { Shifter_expContext } from "./SHARCParser";
import { Sec_opContext } from "./SHARCParser";
import { Sec_op2Context } from "./SHARCParser";
import { Bit_dataContext } from "./SHARCParser";
import { Add_or_subContext } from "./SHARCParser";
import { Dual_opContext } from "./SHARCParser";
import { Dual_add_rContext } from "./SHARCParser";
import { Parallel_multiContext } from "./SHARCParser";
import { Flow_control_expContext } from "./SHARCParser";
import { Flow_contorl_8Context } from "./SHARCParser";
import { Flow_contorl_8_expContext } from "./SHARCParser";
import { Flow_control_9_and_11Context } from "./SHARCParser";
import { Flow_control_9_and_11_expContext } from "./SHARCParser";
import { Flow_control_10Context } from "./SHARCParser";
import { Flow_control_10_fragContext } from "./SHARCParser";
import { Flow_control_12Context } from "./SHARCParser";
import { Lcntr_vContext } from "./SHARCParser";
import { Flow_control_13Context } from "./SHARCParser";
import { Flow_control_8aContext } from "./SHARCParser";
import { Flow_control_8bContext } from "./SHARCParser";
import { Flow_control_9aContext } from "./SHARCParser";
import { Flow_control_9bContext } from "./SHARCParser";
import { Flow_control_11aContext } from "./SHARCParser";
import { Flow_control_11bContext } from "./SHARCParser";
import { Jump_addr_int_or_pcContext } from "./SHARCParser";
import { Jump_addr_md_or_pcContext } from "./SHARCParser";
import { Jump_addr_pcContext } from "./SHARCParser";
import { Jump_addr_intContext } from "./SHARCParser";
import { Jump_modifierContext } from "./SHARCParser";
import { Jump_modifier_Context } from "./SHARCParser";
import { Jump_modifier_1Context } from "./SHARCParser";
import { Jump_modifier2Context } from "./SHARCParser";
import { Jump_modifier3Context } from "./SHARCParser";
import { Jump_modifier3_Context } from "./SHARCParser";
import { Jump_modifier3_1Context } from "./SHARCParser";
import { Imm_mov_expContext } from "./SHARCParser";
import { Imm_mov_14aContext } from "./SHARCParser";
import { Imm_mov_15aContext } from "./SHARCParser";
import { Imm_mov_14bContext } from "./SHARCParser";
import { Imm_mov_15bContext } from "./SHARCParser";
import { Imm_mov_16Context } from "./SHARCParser";
import { Imm_mov_17Context } from "./SHARCParser";
import { U_reg2Context } from "./SHARCParser";
import { Misc_expContext } from "./SHARCParser";
import { Misc_20Context } from "./SHARCParser";
import { Directive_expContext } from "./SHARCParser";
import { B_regContext } from "./SHARCParser";
import { L_regContext } from "./SHARCParser";
import { R_regContext } from "./SHARCParser";
import { F_regContext } from "./SHARCParser";
import { S_regContext } from "./SHARCParser";
import { IaContext } from "./SHARCParser";
import { MbContext } from "./SHARCParser";
import { IcContext } from "./SHARCParser";
import { MdContext } from "./SHARCParser";
import { I_regContext } from "./SHARCParser";
import { M_regContext } from "./SHARCParser";
import { Dag_regContext } from "./SHARCParser";
import { D_regContext } from "./SHARCParser";
import { U_regContext } from "./SHARCParser";
import { ConditionContext } from "./SHARCParser";
import { CconditionContext } from "./SHARCParser";
import { Multi_mod1Context } from "./SHARCParser";
import { Multi_mod1_Context } from "./SHARCParser";
import { Multi_mod2Context } from "./SHARCParser";
import { Multi_mod2_Context } from "./SHARCParser";
import { R3_0Context } from "./SHARCParser";
import { R7_4Context } from "./SHARCParser";
import { R11_8Context } from "./SHARCParser";
import { R15_12Context } from "./SHARCParser";
import { F3_0Context } from "./SHARCParser";
import { F7_4Context } from "./SHARCParser";
import { F11_8Context } from "./SHARCParser";
import { F15_12Context } from "./SHARCParser";
import { AddrContext } from "./SHARCParser";
import { MrfContext } from "./SHARCParser";
import { MrbContext } from "./SHARCParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SHARCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SHARCParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SHARCParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.stmt_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt_atom?: (ctx: Stmt_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.sec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSec?: (ctx: SecContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.seg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeg?: (ctx: SegContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.end_seg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd_seg?: (ctx: End_segContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.seg_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeg_qualifier?: (ctx: Seg_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.seg_qualifier1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeg_qualifier1?: (ctx: Seg_qualifier1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.seg_qualifier2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeg_qualifier2?: (ctx: Seg_qualifier2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.seg_qualifier3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeg_qualifier3?: (ctx: Seg_qualifier3Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.seg_qualifier_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeg_qualifier_1?: (ctx: Seg_qualifier_1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.seg_qualifier_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeg_qualifier_2?: (ctx: Seg_qualifier_2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.seg_qualifier_3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeg_qualifier_3?: (ctx: Seg_qualifier_3Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.declaration_exp1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_exp1?: (ctx: Declaration_exp1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.declaration_exp2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_exp2?: (ctx: Declaration_exp2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.declaration_exp3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_exp3?: (ctx: Declaration_exp3Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.declaration_exp4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_exp4?: (ctx: Declaration_exp4Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.declaration_exp5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_exp5?: (ctx: Declaration_exp5Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.declaration_exp_f1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_exp_f1?: (ctx: Declaration_exp_f1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.declaration_exp_f2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_exp_f2?: (ctx: Declaration_exp_f2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.initExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitExpression?: (ctx: InitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.var_addr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_addr?: (ctx: Var_addrContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.value_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_exp?: (ctx: Value_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.value_exp2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_exp2?: (ctx: Value_exp2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.compute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompute?: (ctx: ComputeContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.if_compute_mov`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_compute_mov?: (ctx: If_compute_movContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.if_compute_mov_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_compute_mov_exp?: (ctx: If_compute_mov_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.compute_mov_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompute_mov_exp?: (ctx: Compute_mov_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_1?: (ctx: Mov_exp_1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_1_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_1_1?: (ctx: Mov_exp_1_1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_1_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_1_2?: (ctx: Mov_exp_1_2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_3a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_3a?: (ctx: Mov_exp_3aContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_3b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_3b?: (ctx: Mov_exp_3bContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_3c`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_3c?: (ctx: Mov_exp_3cContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_3d`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_3d?: (ctx: Mov_exp_3dContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_4a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_4a?: (ctx: Mov_exp_4aContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_4b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_4b?: (ctx: Mov_exp_4bContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_4c`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_4c?: (ctx: Mov_exp_4cContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_4d`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_4d?: (ctx: Mov_exp_4dContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_5?: (ctx: Mov_exp_5Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_6a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_6a?: (ctx: Mov_exp_6aContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_6b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_6b?: (ctx: Mov_exp_6bContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mov_exp_7`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMov_exp_7?: (ctx: Mov_exp_7Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_ia_mb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_ia_mb?: (ctx: Mem_addr_ia_mbContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_ic_md`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_ic_md?: (ctx: Mem_addr_ic_mdContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_md_ic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_md_ic?: (ctx: Mem_addr_md_icContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_mb_ia`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_mb_ia?: (ctx: Mem_addr_mb_iaContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_ia_int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_ia_int?: (ctx: Mem_addr_ia_intContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_ic_int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_ic_int?: (ctx: Mem_addr_ic_intContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_int_ia`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_int_ia?: (ctx: Mem_addr_int_iaContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_int_ic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_int_ic?: (ctx: Mem_addr_int_icContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_int?: (ctx: Mem_addr_intContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_int_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_int_?: (ctx: Mem_addr_int_Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_dm_ia_mb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_dm_ia_mb?: (ctx: Mem_addr_dm_ia_mbContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_pm_ic_md`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_pm_ic_md?: (ctx: Mem_addr_pm_ic_mdContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_dm_mb_ia`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_dm_mb_ia?: (ctx: Mem_addr_dm_mb_iaContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_pm_md_ic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_pm_md_ic?: (ctx: Mem_addr_pm_md_icContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_dm_ia_int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_dm_ia_int?: (ctx: Mem_addr_dm_ia_intContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_pm_ic_int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_pm_ic_int?: (ctx: Mem_addr_pm_ic_intContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_dm_int_ia`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_dm_int_ia?: (ctx: Mem_addr_dm_int_iaContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_pm_int_ic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_pm_int_ic?: (ctx: Mem_addr_pm_int_icContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_dm_int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_dm_int?: (ctx: Mem_addr_dm_intContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mem_addr_pm_int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_addr_pm_int?: (ctx: Mem_addr_pm_intContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.fixpoint_alu_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixpoint_alu_op?: (ctx: Fixpoint_alu_opContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.r_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitR_exp?: (ctx: R_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.floating_point_alu_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloating_point_alu_op?: (ctx: Floating_point_alu_opContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.f_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF_exp?: (ctx: F_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_op?: (ctx: Multi_opContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_r`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_r?: (ctx: Multi_rContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_exp_r`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_exp_r?: (ctx: Multi_exp_rContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_exp_mrf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_exp_mrf?: (ctx: Multi_exp_mrfContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_exp_mrb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_exp_mrb?: (ctx: Multi_exp_mrbContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMr?: (ctx: MrContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.shifter_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShifter_op?: (ctx: Shifter_opContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.shifter_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShifter_exp?: (ctx: Shifter_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.sec_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSec_op?: (ctx: Sec_opContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.sec_op2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSec_op2?: (ctx: Sec_op2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.bit_data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBit_data?: (ctx: Bit_dataContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.add_or_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_or_sub?: (ctx: Add_or_subContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.dual_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDual_op?: (ctx: Dual_opContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.dual_add_r`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDual_add_r?: (ctx: Dual_add_rContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.parallel_multi`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParallel_multi?: (ctx: Parallel_multiContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_exp?: (ctx: Flow_control_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_contorl_8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_contorl_8?: (ctx: Flow_contorl_8Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_contorl_8_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_contorl_8_exp?: (ctx: Flow_contorl_8_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_9_and_11`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_9_and_11?: (ctx: Flow_control_9_and_11Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_9_and_11_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_9_and_11_exp?: (ctx: Flow_control_9_and_11_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_10`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_10?: (ctx: Flow_control_10Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_10_frag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_10_frag?: (ctx: Flow_control_10_fragContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_12`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_12?: (ctx: Flow_control_12Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.lcntr_v`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLcntr_v?: (ctx: Lcntr_vContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_13`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_13?: (ctx: Flow_control_13Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_8a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_8a?: (ctx: Flow_control_8aContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_8b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_8b?: (ctx: Flow_control_8bContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_9a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_9a?: (ctx: Flow_control_9aContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_9b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_9b?: (ctx: Flow_control_9bContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_11a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_11a?: (ctx: Flow_control_11aContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.flow_control_11b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_control_11b?: (ctx: Flow_control_11bContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_addr_int_or_pc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_addr_int_or_pc?: (ctx: Jump_addr_int_or_pcContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_addr_md_or_pc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_addr_md_or_pc?: (ctx: Jump_addr_md_or_pcContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_addr_pc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_addr_pc?: (ctx: Jump_addr_pcContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_addr_int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_addr_int?: (ctx: Jump_addr_intContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_modifier?: (ctx: Jump_modifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_modifier_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_modifier_?: (ctx: Jump_modifier_Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_modifier_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_modifier_1?: (ctx: Jump_modifier_1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_modifier2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_modifier2?: (ctx: Jump_modifier2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_modifier3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_modifier3?: (ctx: Jump_modifier3Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_modifier3_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_modifier3_?: (ctx: Jump_modifier3_Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.jump_modifier3_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJump_modifier3_1?: (ctx: Jump_modifier3_1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.imm_mov_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImm_mov_exp?: (ctx: Imm_mov_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.imm_mov_14a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImm_mov_14a?: (ctx: Imm_mov_14aContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.imm_mov_15a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImm_mov_15a?: (ctx: Imm_mov_15aContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.imm_mov_14b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImm_mov_14b?: (ctx: Imm_mov_14bContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.imm_mov_15b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImm_mov_15b?: (ctx: Imm_mov_15bContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.imm_mov_16`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImm_mov_16?: (ctx: Imm_mov_16Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.imm_mov_17`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImm_mov_17?: (ctx: Imm_mov_17Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.u_reg2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU_reg2?: (ctx: U_reg2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.misc_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMisc_exp?: (ctx: Misc_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.misc_20`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMisc_20?: (ctx: Misc_20Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.directive_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective_exp?: (ctx: Directive_expContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.b_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitB_reg?: (ctx: B_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.l_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitL_reg?: (ctx: L_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.r_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitR_reg?: (ctx: R_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.f_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF_reg?: (ctx: F_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.s_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitS_reg?: (ctx: S_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.ia`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIa?: (ctx: IaContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMb?: (ctx: MbContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.ic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIc?: (ctx: IcContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.md`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMd?: (ctx: MdContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.i_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitI_reg?: (ctx: I_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.m_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitM_reg?: (ctx: M_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.dag_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDag_reg?: (ctx: Dag_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.d_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_reg?: (ctx: D_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.u_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU_reg?: (ctx: U_regContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.ccondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCcondition?: (ctx: CconditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_mod1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_mod1?: (ctx: Multi_mod1Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_mod1_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_mod1_?: (ctx: Multi_mod1_Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_mod2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_mod2?: (ctx: Multi_mod2Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.multi_mod2_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_mod2_?: (ctx: Multi_mod2_Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.r3_0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitR3_0?: (ctx: R3_0Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.r7_4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitR7_4?: (ctx: R7_4Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.r11_8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitR11_8?: (ctx: R11_8Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.r15_12`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitR15_12?: (ctx: R15_12Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.f3_0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF3_0?: (ctx: F3_0Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.f7_4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF7_4?: (ctx: F7_4Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.f11_8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF11_8?: (ctx: F11_8Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.f15_12`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF15_12?: (ctx: F15_12Context) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.addr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr?: (ctx: AddrContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mrf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMrf?: (ctx: MrfContext) => Result;

	/**
	 * Visit a parse tree produced by `SHARCParser.mrb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMrb?: (ctx: MrbContext) => Result;
}

