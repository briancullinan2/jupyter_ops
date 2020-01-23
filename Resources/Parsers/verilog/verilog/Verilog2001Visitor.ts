// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/verilog/verilog/Verilog2001.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Config_declarationContext } from "./Verilog2001Parser";
import { Design_statementContext } from "./Verilog2001Parser";
import { Config_rule_statementContext } from "./Verilog2001Parser";
import { Default_clauseContext } from "./Verilog2001Parser";
import { Inst_clauseContext } from "./Verilog2001Parser";
import { Inst_nameContext } from "./Verilog2001Parser";
import { Liblist_clauseContext } from "./Verilog2001Parser";
import { Cell_clauseContext } from "./Verilog2001Parser";
import { Use_clauseContext } from "./Verilog2001Parser";
import { Source_textContext } from "./Verilog2001Parser";
import { DescriptionContext } from "./Verilog2001Parser";
import { Module_declarationContext } from "./Verilog2001Parser";
import { Module_keywordContext } from "./Verilog2001Parser";
import { Module_parameter_port_listContext } from "./Verilog2001Parser";
import { List_of_portsContext } from "./Verilog2001Parser";
import { List_of_port_declarationsContext } from "./Verilog2001Parser";
import { PortContext } from "./Verilog2001Parser";
import { Port_expressionContext } from "./Verilog2001Parser";
import { Port_referenceContext } from "./Verilog2001Parser";
import { Port_declarationContext } from "./Verilog2001Parser";
import { Module_itemContext } from "./Verilog2001Parser";
import { Module_or_generate_itemContext } from "./Verilog2001Parser";
import { Non_port_module_itemContext } from "./Verilog2001Parser";
import { Module_or_generate_item_declarationContext } from "./Verilog2001Parser";
import { Parameter_overrideContext } from "./Verilog2001Parser";
import { Local_parameter_declarationContext } from "./Verilog2001Parser";
import { Parameter_declarationContext } from "./Verilog2001Parser";
import { Parameter_declaration_Context } from "./Verilog2001Parser";
import { Specparam_declarationContext } from "./Verilog2001Parser";
import { Inout_declarationContext } from "./Verilog2001Parser";
import { Input_declarationContext } from "./Verilog2001Parser";
import { Output_declarationContext } from "./Verilog2001Parser";
import { Event_declarationContext } from "./Verilog2001Parser";
import { Genvar_declarationContext } from "./Verilog2001Parser";
import { Integer_declarationContext } from "./Verilog2001Parser";
import { Time_declarationContext } from "./Verilog2001Parser";
import { Real_declarationContext } from "./Verilog2001Parser";
import { Realtime_declarationContext } from "./Verilog2001Parser";
import { Reg_declarationContext } from "./Verilog2001Parser";
import { Net_declarationContext } from "./Verilog2001Parser";
import { Net_typeContext } from "./Verilog2001Parser";
import { Output_variable_typeContext } from "./Verilog2001Parser";
import { Real_typeContext } from "./Verilog2001Parser";
import { Variable_typeContext } from "./Verilog2001Parser";
import { Drive_strengthContext } from "./Verilog2001Parser";
import { Strength0Context } from "./Verilog2001Parser";
import { Strength1Context } from "./Verilog2001Parser";
import { Charge_strengthContext } from "./Verilog2001Parser";
import { Delay3Context } from "./Verilog2001Parser";
import { Delay2Context } from "./Verilog2001Parser";
import { Delay_valueContext } from "./Verilog2001Parser";
import { List_of_event_identifiersContext } from "./Verilog2001Parser";
import { List_of_net_identifiersContext } from "./Verilog2001Parser";
import { List_of_genvar_identifiersContext } from "./Verilog2001Parser";
import { List_of_port_identifiersContext } from "./Verilog2001Parser";
import { List_of_net_decl_assignmentsContext } from "./Verilog2001Parser";
import { List_of_param_assignmentsContext } from "./Verilog2001Parser";
import { List_of_specparam_assignmentsContext } from "./Verilog2001Parser";
import { List_of_real_identifiersContext } from "./Verilog2001Parser";
import { List_of_variable_identifiersContext } from "./Verilog2001Parser";
import { List_of_variable_port_identifiersContext } from "./Verilog2001Parser";
import { Net_decl_assignmentContext } from "./Verilog2001Parser";
import { Param_assignmentContext } from "./Verilog2001Parser";
import { Specparam_assignmentContext } from "./Verilog2001Parser";
import { Pulse_control_specparamContext } from "./Verilog2001Parser";
import { Error_limit_valueContext } from "./Verilog2001Parser";
import { Reject_limit_valueContext } from "./Verilog2001Parser";
import { Limit_valueContext } from "./Verilog2001Parser";
import { DimensionContext } from "./Verilog2001Parser";
import { Range_Context } from "./Verilog2001Parser";
import { Function_declarationContext } from "./Verilog2001Parser";
import { Function_item_declarationContext } from "./Verilog2001Parser";
import { Function_port_listContext } from "./Verilog2001Parser";
import { Function_portContext } from "./Verilog2001Parser";
import { Range_or_typeContext } from "./Verilog2001Parser";
import { Task_declarationContext } from "./Verilog2001Parser";
import { Task_item_declarationContext } from "./Verilog2001Parser";
import { Task_port_listContext } from "./Verilog2001Parser";
import { Task_port_itemContext } from "./Verilog2001Parser";
import { Tf_decl_headerContext } from "./Verilog2001Parser";
import { Tf_declarationContext } from "./Verilog2001Parser";
import { Task_port_typeContext } from "./Verilog2001Parser";
import { Block_item_declarationContext } from "./Verilog2001Parser";
import { Block_reg_declarationContext } from "./Verilog2001Parser";
import { List_of_block_variable_identifiersContext } from "./Verilog2001Parser";
import { Block_variable_typeContext } from "./Verilog2001Parser";
import { Gate_instantiationContext } from "./Verilog2001Parser";
import { Cmos_switch_instanceContext } from "./Verilog2001Parser";
import { Enable_gate_instanceContext } from "./Verilog2001Parser";
import { Mos_switch_instanceContext } from "./Verilog2001Parser";
import { N_input_gate_instanceContext } from "./Verilog2001Parser";
import { N_output_gate_instanceContext } from "./Verilog2001Parser";
import { Pass_switch_instanceContext } from "./Verilog2001Parser";
import { Pass_enable_switch_instanceContext } from "./Verilog2001Parser";
import { Pull_gate_instanceContext } from "./Verilog2001Parser";
import { Name_of_gate_instanceContext } from "./Verilog2001Parser";
import { Pulldown_strengthContext } from "./Verilog2001Parser";
import { Pullup_strengthContext } from "./Verilog2001Parser";
import { Enable_terminalContext } from "./Verilog2001Parser";
import { Ncontrol_terminalContext } from "./Verilog2001Parser";
import { Pcontrol_terminalContext } from "./Verilog2001Parser";
import { Input_terminalContext } from "./Verilog2001Parser";
import { Inout_terminalContext } from "./Verilog2001Parser";
import { Output_terminalContext } from "./Verilog2001Parser";
import { Cmos_switchtypeContext } from "./Verilog2001Parser";
import { Enable_gatetypeContext } from "./Verilog2001Parser";
import { Mos_switchtypeContext } from "./Verilog2001Parser";
import { N_input_gatetypeContext } from "./Verilog2001Parser";
import { N_output_gatetypeContext } from "./Verilog2001Parser";
import { Pass_en_switchtypeContext } from "./Verilog2001Parser";
import { Pass_switchtypeContext } from "./Verilog2001Parser";
import { Module_instantiationContext } from "./Verilog2001Parser";
import { Parameter_value_assignmentContext } from "./Verilog2001Parser";
import { List_of_parameter_assignmentsContext } from "./Verilog2001Parser";
import { Ordered_parameter_assignmentContext } from "./Verilog2001Parser";
import { Named_parameter_assignmentContext } from "./Verilog2001Parser";
import { Module_instanceContext } from "./Verilog2001Parser";
import { Name_of_instanceContext } from "./Verilog2001Parser";
import { List_of_port_connectionsContext } from "./Verilog2001Parser";
import { Ordered_port_connectionContext } from "./Verilog2001Parser";
import { Named_port_connectionContext } from "./Verilog2001Parser";
import { Generated_instantiationContext } from "./Verilog2001Parser";
import { Generate_item_or_nullContext } from "./Verilog2001Parser";
import { Generate_itemContext } from "./Verilog2001Parser";
import { Generate_conditional_statementContext } from "./Verilog2001Parser";
import { Generate_case_statementContext } from "./Verilog2001Parser";
import { Genvar_case_itemContext } from "./Verilog2001Parser";
import { Generate_loop_statementContext } from "./Verilog2001Parser";
import { Genvar_assignmentContext } from "./Verilog2001Parser";
import { Generate_blockContext } from "./Verilog2001Parser";
import { Continuous_assignContext } from "./Verilog2001Parser";
import { List_of_net_assignmentsContext } from "./Verilog2001Parser";
import { Net_assignmentContext } from "./Verilog2001Parser";
import { Initial_constructContext } from "./Verilog2001Parser";
import { Always_constructContext } from "./Verilog2001Parser";
import { Blocking_assignmentContext } from "./Verilog2001Parser";
import { Nonblocking_assignmentContext } from "./Verilog2001Parser";
import { Procedural_continuous_assignmentsContext } from "./Verilog2001Parser";
import { Function_blocking_assignmentContext } from "./Verilog2001Parser";
import { Function_statement_or_nullContext } from "./Verilog2001Parser";
import { Function_seq_blockContext } from "./Verilog2001Parser";
import { Variable_assignmentContext } from "./Verilog2001Parser";
import { Par_blockContext } from "./Verilog2001Parser";
import { Seq_blockContext } from "./Verilog2001Parser";
import { StatementContext } from "./Verilog2001Parser";
import { Statement_or_nullContext } from "./Verilog2001Parser";
import { Function_statementContext } from "./Verilog2001Parser";
import { Delay_or_event_controlContext } from "./Verilog2001Parser";
import { Delay_controlContext } from "./Verilog2001Parser";
import { Disable_statementContext } from "./Verilog2001Parser";
import { Event_controlContext } from "./Verilog2001Parser";
import { Event_triggerContext } from "./Verilog2001Parser";
import { Event_expressionContext } from "./Verilog2001Parser";
import { Event_primaryContext } from "./Verilog2001Parser";
import { Procedural_timing_control_statementContext } from "./Verilog2001Parser";
import { Wait_statementContext } from "./Verilog2001Parser";
import { Conditional_statementContext } from "./Verilog2001Parser";
import { If_else_if_statementContext } from "./Verilog2001Parser";
import { Function_conditional_statementContext } from "./Verilog2001Parser";
import { Function_if_else_if_statementContext } from "./Verilog2001Parser";
import { Case_statementContext } from "./Verilog2001Parser";
import { Case_itemContext } from "./Verilog2001Parser";
import { Function_case_statementContext } from "./Verilog2001Parser";
import { Function_case_itemContext } from "./Verilog2001Parser";
import { Function_loop_statementContext } from "./Verilog2001Parser";
import { Loop_statementContext } from "./Verilog2001Parser";
import { System_task_enableContext } from "./Verilog2001Parser";
import { Task_enableContext } from "./Verilog2001Parser";
import { Specify_blockContext } from "./Verilog2001Parser";
import { Specify_itemContext } from "./Verilog2001Parser";
import { Pulsestyle_declarationContext } from "./Verilog2001Parser";
import { Showcancelled_declarationContext } from "./Verilog2001Parser";
import { Path_declarationContext } from "./Verilog2001Parser";
import { Simple_path_declarationContext } from "./Verilog2001Parser";
import { Parallel_path_descriptionContext } from "./Verilog2001Parser";
import { Full_path_descriptionContext } from "./Verilog2001Parser";
import { List_of_path_inputsContext } from "./Verilog2001Parser";
import { List_of_path_outputsContext } from "./Verilog2001Parser";
import { Specify_input_terminal_descriptorContext } from "./Verilog2001Parser";
import { Specify_output_terminal_descriptorContext } from "./Verilog2001Parser";
import { Input_identifierContext } from "./Verilog2001Parser";
import { Output_identifierContext } from "./Verilog2001Parser";
import { Path_delay_valueContext } from "./Verilog2001Parser";
import { List_of_path_delay_expressionsContext } from "./Verilog2001Parser";
import { T_path_delay_expressionContext } from "./Verilog2001Parser";
import { Trise_path_delay_expressionContext } from "./Verilog2001Parser";
import { Tfall_path_delay_expressionContext } from "./Verilog2001Parser";
import { Tz_path_delay_expressionContext } from "./Verilog2001Parser";
import { T01_path_delay_expressionContext } from "./Verilog2001Parser";
import { T10_path_delay_expressionContext } from "./Verilog2001Parser";
import { T0z_path_delay_expressionContext } from "./Verilog2001Parser";
import { Tz1_path_delay_expressionContext } from "./Verilog2001Parser";
import { T1z_path_delay_expressionContext } from "./Verilog2001Parser";
import { Tz0_path_delay_expressionContext } from "./Verilog2001Parser";
import { T0x_path_delay_expressionContext } from "./Verilog2001Parser";
import { Tx1_path_delay_expressionContext } from "./Verilog2001Parser";
import { T1x_path_delay_expressionContext } from "./Verilog2001Parser";
import { Tx0_path_delay_expressionContext } from "./Verilog2001Parser";
import { Txz_path_delay_expressionContext } from "./Verilog2001Parser";
import { Tzx_path_delay_expressionContext } from "./Verilog2001Parser";
import { Path_delay_expressionContext } from "./Verilog2001Parser";
import { Edge_sensitive_path_declarationContext } from "./Verilog2001Parser";
import { Parallel_edge_sensitive_path_descriptionContext } from "./Verilog2001Parser";
import { Full_edge_sensitive_path_descriptionContext } from "./Verilog2001Parser";
import { Data_source_expressionContext } from "./Verilog2001Parser";
import { Edge_identifierContext } from "./Verilog2001Parser";
import { State_dependent_path_declarationContext } from "./Verilog2001Parser";
import { Polarity_operatorContext } from "./Verilog2001Parser";
import { Checktime_conditionContext } from "./Verilog2001Parser";
import { Delayed_dataContext } from "./Verilog2001Parser";
import { Delayed_referenceContext } from "./Verilog2001Parser";
import { End_edge_offsetContext } from "./Verilog2001Parser";
import { Event_based_flagContext } from "./Verilog2001Parser";
import { Notify_regContext } from "./Verilog2001Parser";
import { Remain_active_flagContext } from "./Verilog2001Parser";
import { Stamptime_conditionContext } from "./Verilog2001Parser";
import { Start_edge_offsetContext } from "./Verilog2001Parser";
import { ThresholdContext } from "./Verilog2001Parser";
import { Timing_check_limitContext } from "./Verilog2001Parser";
import { ConcatenationContext } from "./Verilog2001Parser";
import { Constant_concatenationContext } from "./Verilog2001Parser";
import { Constant_multiple_concatenationContext } from "./Verilog2001Parser";
import { Module_path_concatenationContext } from "./Verilog2001Parser";
import { Module_path_multiple_concatenationContext } from "./Verilog2001Parser";
import { Multiple_concatenationContext } from "./Verilog2001Parser";
import { Net_concatenationContext } from "./Verilog2001Parser";
import { Net_concatenation_valueContext } from "./Verilog2001Parser";
import { Variable_concatenationContext } from "./Verilog2001Parser";
import { Variable_concatenation_valueContext } from "./Verilog2001Parser";
import { Constant_function_callContext } from "./Verilog2001Parser";
import { Function_callContext } from "./Verilog2001Parser";
import { System_function_callContext } from "./Verilog2001Parser";
import { Genvar_function_callContext } from "./Verilog2001Parser";
import { Base_expressionContext } from "./Verilog2001Parser";
import { Constant_base_expressionContext } from "./Verilog2001Parser";
import { Constant_expressionContext } from "./Verilog2001Parser";
import { Constant_mintypmax_expressionContext } from "./Verilog2001Parser";
import { Constant_range_expressionContext } from "./Verilog2001Parser";
import { Dimension_constant_expressionContext } from "./Verilog2001Parser";
import { ExpressionContext } from "./Verilog2001Parser";
import { TermContext } from "./Verilog2001Parser";
import { Lsb_constant_expressionContext } from "./Verilog2001Parser";
import { Mintypmax_expressionContext } from "./Verilog2001Parser";
import { Module_path_conditional_expressionContext } from "./Verilog2001Parser";
import { Module_path_expressionContext } from "./Verilog2001Parser";
import { Module_path_mintypmax_expressionContext } from "./Verilog2001Parser";
import { Msb_constant_expressionContext } from "./Verilog2001Parser";
import { Range_expressionContext } from "./Verilog2001Parser";
import { Width_constant_expressionContext } from "./Verilog2001Parser";
import { Constant_primaryContext } from "./Verilog2001Parser";
import { Module_path_primaryContext } from "./Verilog2001Parser";
import { PrimaryContext } from "./Verilog2001Parser";
import { Net_lvalueContext } from "./Verilog2001Parser";
import { Variable_lvalueContext } from "./Verilog2001Parser";
import { Unary_operatorContext } from "./Verilog2001Parser";
import { Binary_operatorContext } from "./Verilog2001Parser";
import { Unary_module_path_operatorContext } from "./Verilog2001Parser";
import { Binary_module_path_operatorContext } from "./Verilog2001Parser";
import { NumberContext } from "./Verilog2001Parser";
import { Timing_specContext } from "./Verilog2001Parser";
import { Attribute_instanceContext } from "./Verilog2001Parser";
import { Attr_specContext } from "./Verilog2001Parser";
import { Attr_nameContext } from "./Verilog2001Parser";
import { Arrayed_identifierContext } from "./Verilog2001Parser";
import { Block_identifierContext } from "./Verilog2001Parser";
import { Cell_identifierContext } from "./Verilog2001Parser";
import { Config_identifierContext } from "./Verilog2001Parser";
import { Escaped_arrayed_identifierContext } from "./Verilog2001Parser";
import { Escaped_hierarchical_identifierContext } from "./Verilog2001Parser";
import { Event_identifierContext } from "./Verilog2001Parser";
import { Function_identifierContext } from "./Verilog2001Parser";
import { Gate_instance_identifierContext } from "./Verilog2001Parser";
import { Generate_block_identifierContext } from "./Verilog2001Parser";
import { Genvar_function_identifierContext } from "./Verilog2001Parser";
import { Genvar_identifierContext } from "./Verilog2001Parser";
import { Hierarchical_block_identifierContext } from "./Verilog2001Parser";
import { Hierarchical_event_identifierContext } from "./Verilog2001Parser";
import { Hierarchical_function_identifierContext } from "./Verilog2001Parser";
import { Hierarchical_identifierContext } from "./Verilog2001Parser";
import { Hierarchical_net_identifierContext } from "./Verilog2001Parser";
import { Hierarchical_variable_identifierContext } from "./Verilog2001Parser";
import { Hierarchical_task_identifierContext } from "./Verilog2001Parser";
import { IdentifierContext } from "./Verilog2001Parser";
import { Inout_port_identifierContext } from "./Verilog2001Parser";
import { Input_port_identifierContext } from "./Verilog2001Parser";
import { Instance_identifierContext } from "./Verilog2001Parser";
import { Library_identifierContext } from "./Verilog2001Parser";
import { Memory_identifierContext } from "./Verilog2001Parser";
import { Module_identifierContext } from "./Verilog2001Parser";
import { Module_instance_identifierContext } from "./Verilog2001Parser";
import { Net_identifierContext } from "./Verilog2001Parser";
import { Output_port_identifierContext } from "./Verilog2001Parser";
import { Parameter_identifierContext } from "./Verilog2001Parser";
import { Port_identifierContext } from "./Verilog2001Parser";
import { Real_identifierContext } from "./Verilog2001Parser";
import { Simple_arrayed_identifierContext } from "./Verilog2001Parser";
import { Simple_hierarchical_identifierContext } from "./Verilog2001Parser";
import { Specparam_identifierContext } from "./Verilog2001Parser";
import { System_function_identifierContext } from "./Verilog2001Parser";
import { System_task_identifierContext } from "./Verilog2001Parser";
import { Task_identifierContext } from "./Verilog2001Parser";
import { Terminal_identifierContext } from "./Verilog2001Parser";
import { Text_macro_identifierContext } from "./Verilog2001Parser";
import { Topmodule_identifierContext } from "./Verilog2001Parser";
import { Udp_identifierContext } from "./Verilog2001Parser";
import { Udp_instance_identifierContext } from "./Verilog2001Parser";
import { Variable_identifierContext } from "./Verilog2001Parser";
import { Simple_hierarchical_branchContext } from "./Verilog2001Parser";
import { Escaped_hierarchical_branchContext } from "./Verilog2001Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Verilog2001Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Verilog2001Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Verilog2001Parser.config_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfig_declaration?: (ctx: Config_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.design_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesign_statement?: (ctx: Design_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.config_rule_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfig_rule_statement?: (ctx: Config_rule_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.default_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_clause?: (ctx: Default_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.inst_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInst_clause?: (ctx: Inst_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.inst_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInst_name?: (ctx: Inst_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.liblist_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiblist_clause?: (ctx: Liblist_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.cell_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_clause?: (ctx: Cell_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.use_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse_clause?: (ctx: Use_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.source_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSource_text?: (ctx: Source_textContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_declaration?: (ctx: Module_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_keyword?: (ctx: Module_keywordContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_parameter_port_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_parameter_port_list?: (ctx: Module_parameter_port_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_ports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_ports?: (ctx: List_of_portsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_port_declarations?: (ctx: List_of_port_declarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort?: (ctx: PortContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.port_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort_expression?: (ctx: Port_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.port_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort_reference?: (ctx: Port_referenceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.port_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort_declaration?: (ctx: Port_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_item?: (ctx: Module_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_or_generate_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_or_generate_item?: (ctx: Module_or_generate_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.non_port_module_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_port_module_item?: (ctx: Non_port_module_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_or_generate_item_declaration?: (ctx: Module_or_generate_item_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.parameter_override`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_override?: (ctx: Parameter_overrideContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_parameter_declaration?: (ctx: Local_parameter_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.parameter_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_declaration?: (ctx: Parameter_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.parameter_declaration_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_declaration_?: (ctx: Parameter_declaration_Context) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.specparam_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecparam_declaration?: (ctx: Specparam_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.inout_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInout_declaration?: (ctx: Inout_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.input_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_declaration?: (ctx: Input_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.output_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_declaration?: (ctx: Output_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.event_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_declaration?: (ctx: Event_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.genvar_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenvar_declaration?: (ctx: Genvar_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.integer_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_declaration?: (ctx: Integer_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.time_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime_declaration?: (ctx: Time_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.real_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal_declaration?: (ctx: Real_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.realtime_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealtime_declaration?: (ctx: Realtime_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.reg_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_declaration?: (ctx: Reg_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.net_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNet_declaration?: (ctx: Net_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.net_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNet_type?: (ctx: Net_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.output_variable_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_variable_type?: (ctx: Output_variable_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.real_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal_type?: (ctx: Real_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.variable_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_type?: (ctx: Variable_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.drive_strength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrive_strength?: (ctx: Drive_strengthContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.strength0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrength0?: (ctx: Strength0Context) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.strength1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrength1?: (ctx: Strength1Context) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.charge_strength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharge_strength?: (ctx: Charge_strengthContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.delay3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelay3?: (ctx: Delay3Context) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.delay2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelay2?: (ctx: Delay2Context) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.delay_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelay_value?: (ctx: Delay_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_event_identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_event_identifiers?: (ctx: List_of_event_identifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_net_identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_net_identifiers?: (ctx: List_of_net_identifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_genvar_identifiers?: (ctx: List_of_genvar_identifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_port_identifiers?: (ctx: List_of_port_identifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_net_decl_assignments?: (ctx: List_of_net_decl_assignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_param_assignments?: (ctx: List_of_param_assignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_specparam_assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_specparam_assignments?: (ctx: List_of_specparam_assignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_real_identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_real_identifiers?: (ctx: List_of_real_identifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_variable_identifiers?: (ctx: List_of_variable_identifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_variable_port_identifiers?: (ctx: List_of_variable_port_identifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.net_decl_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNet_decl_assignment?: (ctx: Net_decl_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.param_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_assignment?: (ctx: Param_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.specparam_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecparam_assignment?: (ctx: Specparam_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pulse_control_specparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPulse_control_specparam?: (ctx: Pulse_control_specparamContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.error_limit_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_limit_value?: (ctx: Error_limit_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.reject_limit_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReject_limit_value?: (ctx: Reject_limit_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.limit_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimit_value?: (ctx: Limit_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.dimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimension?: (ctx: DimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.range_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_?: (ctx: Range_Context) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declaration?: (ctx: Function_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_item_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_item_declaration?: (ctx: Function_item_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_port_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_port_list?: (ctx: Function_port_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_port?: (ctx: Function_portContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.range_or_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_or_type?: (ctx: Range_or_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.task_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_declaration?: (ctx: Task_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.task_item_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_item_declaration?: (ctx: Task_item_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.task_port_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_port_list?: (ctx: Task_port_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.task_port_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_port_item?: (ctx: Task_port_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tf_decl_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTf_decl_header?: (ctx: Tf_decl_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tf_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTf_declaration?: (ctx: Tf_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.task_port_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_port_type?: (ctx: Task_port_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.block_item_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_item_declaration?: (ctx: Block_item_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.block_reg_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_reg_declaration?: (ctx: Block_reg_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_block_variable_identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_block_variable_identifiers?: (ctx: List_of_block_variable_identifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.block_variable_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_variable_type?: (ctx: Block_variable_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.gate_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGate_instantiation?: (ctx: Gate_instantiationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.cmos_switch_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmos_switch_instance?: (ctx: Cmos_switch_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.enable_gate_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnable_gate_instance?: (ctx: Enable_gate_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.mos_switch_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMos_switch_instance?: (ctx: Mos_switch_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.n_input_gate_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitN_input_gate_instance?: (ctx: N_input_gate_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.n_output_gate_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitN_output_gate_instance?: (ctx: N_output_gate_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pass_switch_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPass_switch_instance?: (ctx: Pass_switch_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pass_enable_switch_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPass_enable_switch_instance?: (ctx: Pass_enable_switch_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pull_gate_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPull_gate_instance?: (ctx: Pull_gate_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.name_of_gate_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName_of_gate_instance?: (ctx: Name_of_gate_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pulldown_strength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPulldown_strength?: (ctx: Pulldown_strengthContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pullup_strength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPullup_strength?: (ctx: Pullup_strengthContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.enable_terminal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnable_terminal?: (ctx: Enable_terminalContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.ncontrol_terminal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNcontrol_terminal?: (ctx: Ncontrol_terminalContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pcontrol_terminal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPcontrol_terminal?: (ctx: Pcontrol_terminalContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.input_terminal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_terminal?: (ctx: Input_terminalContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.inout_terminal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInout_terminal?: (ctx: Inout_terminalContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.output_terminal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_terminal?: (ctx: Output_terminalContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.cmos_switchtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmos_switchtype?: (ctx: Cmos_switchtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.enable_gatetype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnable_gatetype?: (ctx: Enable_gatetypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.mos_switchtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMos_switchtype?: (ctx: Mos_switchtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.n_input_gatetype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitN_input_gatetype?: (ctx: N_input_gatetypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.n_output_gatetype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitN_output_gatetype?: (ctx: N_output_gatetypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pass_en_switchtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPass_en_switchtype?: (ctx: Pass_en_switchtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pass_switchtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPass_switchtype?: (ctx: Pass_switchtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_instantiation?: (ctx: Module_instantiationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_value_assignment?: (ctx: Parameter_value_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_parameter_assignments?: (ctx: List_of_parameter_assignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdered_parameter_assignment?: (ctx: Ordered_parameter_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_parameter_assignment?: (ctx: Named_parameter_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_instance?: (ctx: Module_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.name_of_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName_of_instance?: (ctx: Name_of_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_port_connections`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_port_connections?: (ctx: List_of_port_connectionsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.ordered_port_connection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdered_port_connection?: (ctx: Ordered_port_connectionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.named_port_connection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_port_connection?: (ctx: Named_port_connectionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.generated_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerated_instantiation?: (ctx: Generated_instantiationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.generate_item_or_null`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerate_item_or_null?: (ctx: Generate_item_or_nullContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.generate_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerate_item?: (ctx: Generate_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.generate_conditional_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerate_conditional_statement?: (ctx: Generate_conditional_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.generate_case_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerate_case_statement?: (ctx: Generate_case_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.genvar_case_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenvar_case_item?: (ctx: Genvar_case_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.generate_loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerate_loop_statement?: (ctx: Generate_loop_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.genvar_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenvar_assignment?: (ctx: Genvar_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.generate_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerate_block?: (ctx: Generate_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.continuous_assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinuous_assign?: (ctx: Continuous_assignContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_net_assignments?: (ctx: List_of_net_assignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.net_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNet_assignment?: (ctx: Net_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.initial_construct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitial_construct?: (ctx: Initial_constructContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.always_construct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlways_construct?: (ctx: Always_constructContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.blocking_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlocking_assignment?: (ctx: Blocking_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonblocking_assignment?: (ctx: Nonblocking_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.procedural_continuous_assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_continuous_assignments?: (ctx: Procedural_continuous_assignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_blocking_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_blocking_assignment?: (ctx: Function_blocking_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_statement_or_null`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_statement_or_null?: (ctx: Function_statement_or_nullContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_seq_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_seq_block?: (ctx: Function_seq_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.variable_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_assignment?: (ctx: Variable_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.par_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPar_block?: (ctx: Par_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.seq_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeq_block?: (ctx: Seq_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.statement_or_null`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_or_null?: (ctx: Statement_or_nullContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_statement?: (ctx: Function_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.delay_or_event_control`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelay_or_event_control?: (ctx: Delay_or_event_controlContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.delay_control`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelay_control?: (ctx: Delay_controlContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.disable_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisable_statement?: (ctx: Disable_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.event_control`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_control?: (ctx: Event_controlContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.event_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_trigger?: (ctx: Event_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.event_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_expression?: (ctx: Event_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.event_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_primary?: (ctx: Event_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_timing_control_statement?: (ctx: Procedural_timing_control_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.wait_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWait_statement?: (ctx: Wait_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.conditional_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_statement?: (ctx: Conditional_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.if_else_if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_else_if_statement?: (ctx: If_else_if_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_conditional_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_conditional_statement?: (ctx: Function_conditional_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_if_else_if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_if_else_if_statement?: (ctx: Function_if_else_if_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.case_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_statement?: (ctx: Case_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.case_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_item?: (ctx: Case_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_case_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_case_statement?: (ctx: Function_case_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_case_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_case_item?: (ctx: Function_case_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_loop_statement?: (ctx: Function_loop_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop_statement?: (ctx: Loop_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.system_task_enable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystem_task_enable?: (ctx: System_task_enableContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.task_enable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_enable?: (ctx: Task_enableContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.specify_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecify_block?: (ctx: Specify_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.specify_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecify_item?: (ctx: Specify_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.pulsestyle_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPulsestyle_declaration?: (ctx: Pulsestyle_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.showcancelled_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowcancelled_declaration?: (ctx: Showcancelled_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.path_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath_declaration?: (ctx: Path_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.simple_path_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_path_declaration?: (ctx: Simple_path_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.parallel_path_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParallel_path_description?: (ctx: Parallel_path_descriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.full_path_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFull_path_description?: (ctx: Full_path_descriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_path_inputs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_path_inputs?: (ctx: List_of_path_inputsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_path_outputs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_path_outputs?: (ctx: List_of_path_outputsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.specify_input_terminal_descriptor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecify_input_terminal_descriptor?: (ctx: Specify_input_terminal_descriptorContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.specify_output_terminal_descriptor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecify_output_terminal_descriptor?: (ctx: Specify_output_terminal_descriptorContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.input_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_identifier?: (ctx: Input_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.output_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_identifier?: (ctx: Output_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.path_delay_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath_delay_value?: (ctx: Path_delay_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.list_of_path_delay_expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_of_path_delay_expressions?: (ctx: List_of_path_delay_expressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.t_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT_path_delay_expression?: (ctx: T_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.trise_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrise_path_delay_expression?: (ctx: Trise_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tfall_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTfall_path_delay_expression?: (ctx: Tfall_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tz_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTz_path_delay_expression?: (ctx: Tz_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.t01_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT01_path_delay_expression?: (ctx: T01_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.t10_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT10_path_delay_expression?: (ctx: T10_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.t0z_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT0z_path_delay_expression?: (ctx: T0z_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tz1_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTz1_path_delay_expression?: (ctx: Tz1_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.t1z_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT1z_path_delay_expression?: (ctx: T1z_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tz0_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTz0_path_delay_expression?: (ctx: Tz0_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.t0x_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT0x_path_delay_expression?: (ctx: T0x_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tx1_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTx1_path_delay_expression?: (ctx: Tx1_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.t1x_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT1x_path_delay_expression?: (ctx: T1x_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tx0_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTx0_path_delay_expression?: (ctx: Tx0_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.txz_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTxz_path_delay_expression?: (ctx: Txz_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.tzx_path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTzx_path_delay_expression?: (ctx: Tzx_path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.path_delay_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath_delay_expression?: (ctx: Path_delay_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.edge_sensitive_path_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdge_sensitive_path_declaration?: (ctx: Edge_sensitive_path_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.parallel_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParallel_edge_sensitive_path_description?: (ctx: Parallel_edge_sensitive_path_descriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.full_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFull_edge_sensitive_path_description?: (ctx: Full_edge_sensitive_path_descriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.data_source_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_source_expression?: (ctx: Data_source_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.edge_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdge_identifier?: (ctx: Edge_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.state_dependent_path_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_dependent_path_declaration?: (ctx: State_dependent_path_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.polarity_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolarity_operator?: (ctx: Polarity_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.checktime_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChecktime_condition?: (ctx: Checktime_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.delayed_data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelayed_data?: (ctx: Delayed_dataContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.delayed_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelayed_reference?: (ctx: Delayed_referenceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.end_edge_offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd_edge_offset?: (ctx: End_edge_offsetContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.event_based_flag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_based_flag?: (ctx: Event_based_flagContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.notify_reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotify_reg?: (ctx: Notify_regContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.remain_active_flag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemain_active_flag?: (ctx: Remain_active_flagContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.stamptime_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStamptime_condition?: (ctx: Stamptime_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.start_edge_offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_edge_offset?: (ctx: Start_edge_offsetContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.threshold`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThreshold?: (ctx: ThresholdContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.timing_check_limit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTiming_check_limit?: (ctx: Timing_check_limitContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.constant_concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_concatenation?: (ctx: Constant_concatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_multiple_concatenation?: (ctx: Constant_multiple_concatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_path_concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_path_concatenation?: (ctx: Module_path_concatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_path_multiple_concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_path_multiple_concatenation?: (ctx: Module_path_multiple_concatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.multiple_concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiple_concatenation?: (ctx: Multiple_concatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.net_concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNet_concatenation?: (ctx: Net_concatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.net_concatenation_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNet_concatenation_value?: (ctx: Net_concatenation_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.variable_concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_concatenation?: (ctx: Variable_concatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.variable_concatenation_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_concatenation_value?: (ctx: Variable_concatenation_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.constant_function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_function_call?: (ctx: Constant_function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.system_function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystem_function_call?: (ctx: System_function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.genvar_function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenvar_function_call?: (ctx: Genvar_function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.base_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBase_expression?: (ctx: Base_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.constant_base_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_base_expression?: (ctx: Constant_base_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_expression?: (ctx: Constant_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_mintypmax_expression?: (ctx: Constant_mintypmax_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.constant_range_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_range_expression?: (ctx: Constant_range_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.dimension_constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimension_constant_expression?: (ctx: Dimension_constant_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.lsb_constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLsb_constant_expression?: (ctx: Lsb_constant_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.mintypmax_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMintypmax_expression?: (ctx: Mintypmax_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_path_conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_path_conditional_expression?: (ctx: Module_path_conditional_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_path_expression?: (ctx: Module_path_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_path_mintypmax_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_path_mintypmax_expression?: (ctx: Module_path_mintypmax_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.msb_constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMsb_constant_expression?: (ctx: Msb_constant_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.range_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_expression?: (ctx: Range_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.width_constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWidth_constant_expression?: (ctx: Width_constant_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.constant_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_primary?: (ctx: Constant_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_path_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_path_primary?: (ctx: Module_path_primaryContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.net_lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNet_lvalue?: (ctx: Net_lvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.variable_lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_lvalue?: (ctx: Variable_lvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.binary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_operator?: (ctx: Binary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_module_path_operator?: (ctx: Unary_module_path_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_module_path_operator?: (ctx: Binary_module_path_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.timing_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTiming_spec?: (ctx: Timing_specContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.attribute_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_instance?: (ctx: Attribute_instanceContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.attr_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_spec?: (ctx: Attr_specContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.attr_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_name?: (ctx: Attr_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.arrayed_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayed_identifier?: (ctx: Arrayed_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.block_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_identifier?: (ctx: Block_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.cell_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell_identifier?: (ctx: Cell_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.config_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfig_identifier?: (ctx: Config_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.escaped_arrayed_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEscaped_arrayed_identifier?: (ctx: Escaped_arrayed_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.escaped_hierarchical_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEscaped_hierarchical_identifier?: (ctx: Escaped_hierarchical_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.event_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_identifier?: (ctx: Event_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.function_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_identifier?: (ctx: Function_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.gate_instance_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGate_instance_identifier?: (ctx: Gate_instance_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.generate_block_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerate_block_identifier?: (ctx: Generate_block_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.genvar_function_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenvar_function_identifier?: (ctx: Genvar_function_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.genvar_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenvar_identifier?: (ctx: Genvar_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.hierarchical_block_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_block_identifier?: (ctx: Hierarchical_block_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.hierarchical_event_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_event_identifier?: (ctx: Hierarchical_event_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.hierarchical_function_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_function_identifier?: (ctx: Hierarchical_function_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.hierarchical_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_identifier?: (ctx: Hierarchical_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_net_identifier?: (ctx: Hierarchical_net_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.hierarchical_variable_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_variable_identifier?: (ctx: Hierarchical_variable_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.hierarchical_task_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_task_identifier?: (ctx: Hierarchical_task_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.inout_port_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInout_port_identifier?: (ctx: Inout_port_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.input_port_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_port_identifier?: (ctx: Input_port_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.instance_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstance_identifier?: (ctx: Instance_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.library_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibrary_identifier?: (ctx: Library_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.memory_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemory_identifier?: (ctx: Memory_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_identifier?: (ctx: Module_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.module_instance_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_instance_identifier?: (ctx: Module_instance_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.net_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNet_identifier?: (ctx: Net_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.output_port_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_port_identifier?: (ctx: Output_port_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.parameter_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_identifier?: (ctx: Parameter_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.port_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort_identifier?: (ctx: Port_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.real_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal_identifier?: (ctx: Real_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.simple_arrayed_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_arrayed_identifier?: (ctx: Simple_arrayed_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.simple_hierarchical_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_hierarchical_identifier?: (ctx: Simple_hierarchical_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.specparam_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecparam_identifier?: (ctx: Specparam_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.system_function_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystem_function_identifier?: (ctx: System_function_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.system_task_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystem_task_identifier?: (ctx: System_task_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.task_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_identifier?: (ctx: Task_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.terminal_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerminal_identifier?: (ctx: Terminal_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.text_macro_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText_macro_identifier?: (ctx: Text_macro_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.topmodule_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopmodule_identifier?: (ctx: Topmodule_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.udp_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUdp_identifier?: (ctx: Udp_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.udp_instance_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUdp_instance_identifier?: (ctx: Udp_instance_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.variable_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_identifier?: (ctx: Variable_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.simple_hierarchical_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_hierarchical_branch?: (ctx: Simple_hierarchical_branchContext) => Result;

	/**
	 * Visit a parse tree produced by `Verilog2001Parser.escaped_hierarchical_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEscaped_hierarchical_branch?: (ctx: Escaped_hierarchical_branchContext) => Result;
}

