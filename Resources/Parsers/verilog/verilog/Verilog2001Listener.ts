// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/verilog/verilog/Verilog2001.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `Verilog2001Parser`.
 */
export interface Verilog2001Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Verilog2001Parser.config_declaration`.
	 * @param ctx the parse tree
	 */
	enterConfig_declaration?: (ctx: Config_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.config_declaration`.
	 * @param ctx the parse tree
	 */
	exitConfig_declaration?: (ctx: Config_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.design_statement`.
	 * @param ctx the parse tree
	 */
	enterDesign_statement?: (ctx: Design_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.design_statement`.
	 * @param ctx the parse tree
	 */
	exitDesign_statement?: (ctx: Design_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.config_rule_statement`.
	 * @param ctx the parse tree
	 */
	enterConfig_rule_statement?: (ctx: Config_rule_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.config_rule_statement`.
	 * @param ctx the parse tree
	 */
	exitConfig_rule_statement?: (ctx: Config_rule_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.default_clause`.
	 * @param ctx the parse tree
	 */
	enterDefault_clause?: (ctx: Default_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.default_clause`.
	 * @param ctx the parse tree
	 */
	exitDefault_clause?: (ctx: Default_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.inst_clause`.
	 * @param ctx the parse tree
	 */
	enterInst_clause?: (ctx: Inst_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.inst_clause`.
	 * @param ctx the parse tree
	 */
	exitInst_clause?: (ctx: Inst_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.inst_name`.
	 * @param ctx the parse tree
	 */
	enterInst_name?: (ctx: Inst_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.inst_name`.
	 * @param ctx the parse tree
	 */
	exitInst_name?: (ctx: Inst_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.liblist_clause`.
	 * @param ctx the parse tree
	 */
	enterLiblist_clause?: (ctx: Liblist_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.liblist_clause`.
	 * @param ctx the parse tree
	 */
	exitLiblist_clause?: (ctx: Liblist_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.cell_clause`.
	 * @param ctx the parse tree
	 */
	enterCell_clause?: (ctx: Cell_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.cell_clause`.
	 * @param ctx the parse tree
	 */
	exitCell_clause?: (ctx: Cell_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.use_clause`.
	 * @param ctx the parse tree
	 */
	enterUse_clause?: (ctx: Use_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.use_clause`.
	 * @param ctx the parse tree
	 */
	exitUse_clause?: (ctx: Use_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.source_text`.
	 * @param ctx the parse tree
	 */
	enterSource_text?: (ctx: Source_textContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.source_text`.
	 * @param ctx the parse tree
	 */
	exitSource_text?: (ctx: Source_textContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_declaration`.
	 * @param ctx the parse tree
	 */
	enterModule_declaration?: (ctx: Module_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_declaration`.
	 * @param ctx the parse tree
	 */
	exitModule_declaration?: (ctx: Module_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_keyword`.
	 * @param ctx the parse tree
	 */
	enterModule_keyword?: (ctx: Module_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_keyword`.
	 * @param ctx the parse tree
	 */
	exitModule_keyword?: (ctx: Module_keywordContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_parameter_port_list`.
	 * @param ctx the parse tree
	 */
	enterModule_parameter_port_list?: (ctx: Module_parameter_port_listContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_parameter_port_list`.
	 * @param ctx the parse tree
	 */
	exitModule_parameter_port_list?: (ctx: Module_parameter_port_listContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_ports`.
	 * @param ctx the parse tree
	 */
	enterList_of_ports?: (ctx: List_of_portsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_ports`.
	 * @param ctx the parse tree
	 */
	exitList_of_ports?: (ctx: List_of_portsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_declarations?: (ctx: List_of_port_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_declarations?: (ctx: List_of_port_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?: (ctx: PortContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?: (ctx: PortContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.port_expression`.
	 * @param ctx the parse tree
	 */
	enterPort_expression?: (ctx: Port_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.port_expression`.
	 * @param ctx the parse tree
	 */
	exitPort_expression?: (ctx: Port_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.port_reference`.
	 * @param ctx the parse tree
	 */
	enterPort_reference?: (ctx: Port_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.port_reference`.
	 * @param ctx the parse tree
	 */
	exitPort_reference?: (ctx: Port_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.port_declaration`.
	 * @param ctx the parse tree
	 */
	enterPort_declaration?: (ctx: Port_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.port_declaration`.
	 * @param ctx the parse tree
	 */
	exitPort_declaration?: (ctx: Port_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_item`.
	 * @param ctx the parse tree
	 */
	enterModule_item?: (ctx: Module_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_item`.
	 * @param ctx the parse tree
	 */
	exitModule_item?: (ctx: Module_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_or_generate_item`.
	 * @param ctx the parse tree
	 */
	enterModule_or_generate_item?: (ctx: Module_or_generate_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_or_generate_item`.
	 * @param ctx the parse tree
	 */
	exitModule_or_generate_item?: (ctx: Module_or_generate_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.non_port_module_item`.
	 * @param ctx the parse tree
	 */
	enterNon_port_module_item?: (ctx: Non_port_module_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.non_port_module_item`.
	 * @param ctx the parse tree
	 */
	exitNon_port_module_item?: (ctx: Non_port_module_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterModule_or_generate_item_declaration?: (ctx: Module_or_generate_item_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitModule_or_generate_item_declaration?: (ctx: Module_or_generate_item_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.parameter_override`.
	 * @param ctx the parse tree
	 */
	enterParameter_override?: (ctx: Parameter_overrideContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.parameter_override`.
	 * @param ctx the parse tree
	 */
	exitParameter_override?: (ctx: Parameter_overrideContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterLocal_parameter_declaration?: (ctx: Local_parameter_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitLocal_parameter_declaration?: (ctx: Local_parameter_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration?: (ctx: Parameter_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration?: (ctx: Parameter_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.parameter_declaration_`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration_?: (ctx: Parameter_declaration_Context) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.parameter_declaration_`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration_?: (ctx: Parameter_declaration_Context) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.specparam_declaration`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_declaration?: (ctx: Specparam_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.specparam_declaration`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_declaration?: (ctx: Specparam_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.inout_declaration`.
	 * @param ctx the parse tree
	 */
	enterInout_declaration?: (ctx: Inout_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.inout_declaration`.
	 * @param ctx the parse tree
	 */
	exitInout_declaration?: (ctx: Inout_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.input_declaration`.
	 * @param ctx the parse tree
	 */
	enterInput_declaration?: (ctx: Input_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.input_declaration`.
	 * @param ctx the parse tree
	 */
	exitInput_declaration?: (ctx: Input_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.output_declaration`.
	 * @param ctx the parse tree
	 */
	enterOutput_declaration?: (ctx: Output_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.output_declaration`.
	 * @param ctx the parse tree
	 */
	exitOutput_declaration?: (ctx: Output_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.event_declaration`.
	 * @param ctx the parse tree
	 */
	enterEvent_declaration?: (ctx: Event_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.event_declaration`.
	 * @param ctx the parse tree
	 */
	exitEvent_declaration?: (ctx: Event_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.genvar_declaration`.
	 * @param ctx the parse tree
	 */
	enterGenvar_declaration?: (ctx: Genvar_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.genvar_declaration`.
	 * @param ctx the parse tree
	 */
	exitGenvar_declaration?: (ctx: Genvar_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.integer_declaration`.
	 * @param ctx the parse tree
	 */
	enterInteger_declaration?: (ctx: Integer_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.integer_declaration`.
	 * @param ctx the parse tree
	 */
	exitInteger_declaration?: (ctx: Integer_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.time_declaration`.
	 * @param ctx the parse tree
	 */
	enterTime_declaration?: (ctx: Time_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.time_declaration`.
	 * @param ctx the parse tree
	 */
	exitTime_declaration?: (ctx: Time_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.real_declaration`.
	 * @param ctx the parse tree
	 */
	enterReal_declaration?: (ctx: Real_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.real_declaration`.
	 * @param ctx the parse tree
	 */
	exitReal_declaration?: (ctx: Real_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.realtime_declaration`.
	 * @param ctx the parse tree
	 */
	enterRealtime_declaration?: (ctx: Realtime_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.realtime_declaration`.
	 * @param ctx the parse tree
	 */
	exitRealtime_declaration?: (ctx: Realtime_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.reg_declaration`.
	 * @param ctx the parse tree
	 */
	enterReg_declaration?: (ctx: Reg_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.reg_declaration`.
	 * @param ctx the parse tree
	 */
	exitReg_declaration?: (ctx: Reg_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.net_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_declaration?: (ctx: Net_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.net_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_declaration?: (ctx: Net_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.net_type`.
	 * @param ctx the parse tree
	 */
	enterNet_type?: (ctx: Net_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.net_type`.
	 * @param ctx the parse tree
	 */
	exitNet_type?: (ctx: Net_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.output_variable_type`.
	 * @param ctx the parse tree
	 */
	enterOutput_variable_type?: (ctx: Output_variable_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.output_variable_type`.
	 * @param ctx the parse tree
	 */
	exitOutput_variable_type?: (ctx: Output_variable_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.real_type`.
	 * @param ctx the parse tree
	 */
	enterReal_type?: (ctx: Real_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.real_type`.
	 * @param ctx the parse tree
	 */
	exitReal_type?: (ctx: Real_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.variable_type`.
	 * @param ctx the parse tree
	 */
	enterVariable_type?: (ctx: Variable_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.variable_type`.
	 * @param ctx the parse tree
	 */
	exitVariable_type?: (ctx: Variable_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.drive_strength`.
	 * @param ctx the parse tree
	 */
	enterDrive_strength?: (ctx: Drive_strengthContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.drive_strength`.
	 * @param ctx the parse tree
	 */
	exitDrive_strength?: (ctx: Drive_strengthContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.strength0`.
	 * @param ctx the parse tree
	 */
	enterStrength0?: (ctx: Strength0Context) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.strength0`.
	 * @param ctx the parse tree
	 */
	exitStrength0?: (ctx: Strength0Context) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.strength1`.
	 * @param ctx the parse tree
	 */
	enterStrength1?: (ctx: Strength1Context) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.strength1`.
	 * @param ctx the parse tree
	 */
	exitStrength1?: (ctx: Strength1Context) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.charge_strength`.
	 * @param ctx the parse tree
	 */
	enterCharge_strength?: (ctx: Charge_strengthContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.charge_strength`.
	 * @param ctx the parse tree
	 */
	exitCharge_strength?: (ctx: Charge_strengthContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.delay3`.
	 * @param ctx the parse tree
	 */
	enterDelay3?: (ctx: Delay3Context) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.delay3`.
	 * @param ctx the parse tree
	 */
	exitDelay3?: (ctx: Delay3Context) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.delay2`.
	 * @param ctx the parse tree
	 */
	enterDelay2?: (ctx: Delay2Context) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.delay2`.
	 * @param ctx the parse tree
	 */
	exitDelay2?: (ctx: Delay2Context) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.delay_value`.
	 * @param ctx the parse tree
	 */
	enterDelay_value?: (ctx: Delay_valueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.delay_value`.
	 * @param ctx the parse tree
	 */
	exitDelay_value?: (ctx: Delay_valueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_event_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_event_identifiers?: (ctx: List_of_event_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_event_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_event_identifiers?: (ctx: List_of_event_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_net_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_identifiers?: (ctx: List_of_net_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_net_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_identifiers?: (ctx: List_of_net_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_genvar_identifiers?: (ctx: List_of_genvar_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_genvar_identifiers?: (ctx: List_of_genvar_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_identifiers?: (ctx: List_of_port_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_identifiers?: (ctx: List_of_port_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_decl_assignments?: (ctx: List_of_net_decl_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_decl_assignments?: (ctx: List_of_net_decl_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_param_assignments?: (ctx: List_of_param_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_param_assignments?: (ctx: List_of_param_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_specparam_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_specparam_assignments?: (ctx: List_of_specparam_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_specparam_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_specparam_assignments?: (ctx: List_of_specparam_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_real_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_real_identifiers?: (ctx: List_of_real_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_real_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_real_identifiers?: (ctx: List_of_real_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_identifiers?: (ctx: List_of_variable_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_identifiers?: (ctx: List_of_variable_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_port_identifiers?: (ctx: List_of_variable_port_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_port_identifiers?: (ctx: List_of_variable_port_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.net_decl_assignment`.
	 * @param ctx the parse tree
	 */
	enterNet_decl_assignment?: (ctx: Net_decl_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.net_decl_assignment`.
	 * @param ctx the parse tree
	 */
	exitNet_decl_assignment?: (ctx: Net_decl_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.param_assignment`.
	 * @param ctx the parse tree
	 */
	enterParam_assignment?: (ctx: Param_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.param_assignment`.
	 * @param ctx the parse tree
	 */
	exitParam_assignment?: (ctx: Param_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.specparam_assignment`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_assignment?: (ctx: Specparam_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.specparam_assignment`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_assignment?: (ctx: Specparam_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pulse_control_specparam`.
	 * @param ctx the parse tree
	 */
	enterPulse_control_specparam?: (ctx: Pulse_control_specparamContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pulse_control_specparam`.
	 * @param ctx the parse tree
	 */
	exitPulse_control_specparam?: (ctx: Pulse_control_specparamContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.error_limit_value`.
	 * @param ctx the parse tree
	 */
	enterError_limit_value?: (ctx: Error_limit_valueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.error_limit_value`.
	 * @param ctx the parse tree
	 */
	exitError_limit_value?: (ctx: Error_limit_valueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.reject_limit_value`.
	 * @param ctx the parse tree
	 */
	enterReject_limit_value?: (ctx: Reject_limit_valueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.reject_limit_value`.
	 * @param ctx the parse tree
	 */
	exitReject_limit_value?: (ctx: Reject_limit_valueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.limit_value`.
	 * @param ctx the parse tree
	 */
	enterLimit_value?: (ctx: Limit_valueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.limit_value`.
	 * @param ctx the parse tree
	 */
	exitLimit_value?: (ctx: Limit_valueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.dimension`.
	 * @param ctx the parse tree
	 */
	enterDimension?: (ctx: DimensionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.dimension`.
	 * @param ctx the parse tree
	 */
	exitDimension?: (ctx: DimensionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.range_`.
	 * @param ctx the parse tree
	 */
	enterRange_?: (ctx: Range_Context) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.range_`.
	 * @param ctx the parse tree
	 */
	exitRange_?: (ctx: Range_Context) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_item_declaration?: (ctx: Function_item_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_item_declaration?: (ctx: Function_item_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_port_list`.
	 * @param ctx the parse tree
	 */
	enterFunction_port_list?: (ctx: Function_port_listContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_port_list`.
	 * @param ctx the parse tree
	 */
	exitFunction_port_list?: (ctx: Function_port_listContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_port`.
	 * @param ctx the parse tree
	 */
	enterFunction_port?: (ctx: Function_portContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_port`.
	 * @param ctx the parse tree
	 */
	exitFunction_port?: (ctx: Function_portContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.range_or_type`.
	 * @param ctx the parse tree
	 */
	enterRange_or_type?: (ctx: Range_or_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.range_or_type`.
	 * @param ctx the parse tree
	 */
	exitRange_or_type?: (ctx: Range_or_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.task_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_declaration?: (ctx: Task_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.task_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_declaration?: (ctx: Task_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.task_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_item_declaration?: (ctx: Task_item_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.task_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_item_declaration?: (ctx: Task_item_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.task_port_list`.
	 * @param ctx the parse tree
	 */
	enterTask_port_list?: (ctx: Task_port_listContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.task_port_list`.
	 * @param ctx the parse tree
	 */
	exitTask_port_list?: (ctx: Task_port_listContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.task_port_item`.
	 * @param ctx the parse tree
	 */
	enterTask_port_item?: (ctx: Task_port_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.task_port_item`.
	 * @param ctx the parse tree
	 */
	exitTask_port_item?: (ctx: Task_port_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tf_decl_header`.
	 * @param ctx the parse tree
	 */
	enterTf_decl_header?: (ctx: Tf_decl_headerContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tf_decl_header`.
	 * @param ctx the parse tree
	 */
	exitTf_decl_header?: (ctx: Tf_decl_headerContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tf_declaration`.
	 * @param ctx the parse tree
	 */
	enterTf_declaration?: (ctx: Tf_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tf_declaration`.
	 * @param ctx the parse tree
	 */
	exitTf_declaration?: (ctx: Tf_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.task_port_type`.
	 * @param ctx the parse tree
	 */
	enterTask_port_type?: (ctx: Task_port_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.task_port_type`.
	 * @param ctx the parse tree
	 */
	exitTask_port_type?: (ctx: Task_port_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.block_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterBlock_item_declaration?: (ctx: Block_item_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.block_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitBlock_item_declaration?: (ctx: Block_item_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.block_reg_declaration`.
	 * @param ctx the parse tree
	 */
	enterBlock_reg_declaration?: (ctx: Block_reg_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.block_reg_declaration`.
	 * @param ctx the parse tree
	 */
	exitBlock_reg_declaration?: (ctx: Block_reg_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_block_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_block_variable_identifiers?: (ctx: List_of_block_variable_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_block_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_block_variable_identifiers?: (ctx: List_of_block_variable_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.block_variable_type`.
	 * @param ctx the parse tree
	 */
	enterBlock_variable_type?: (ctx: Block_variable_typeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.block_variable_type`.
	 * @param ctx the parse tree
	 */
	exitBlock_variable_type?: (ctx: Block_variable_typeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.gate_instantiation`.
	 * @param ctx the parse tree
	 */
	enterGate_instantiation?: (ctx: Gate_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.gate_instantiation`.
	 * @param ctx the parse tree
	 */
	exitGate_instantiation?: (ctx: Gate_instantiationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.cmos_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterCmos_switch_instance?: (ctx: Cmos_switch_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.cmos_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitCmos_switch_instance?: (ctx: Cmos_switch_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.enable_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterEnable_gate_instance?: (ctx: Enable_gate_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.enable_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitEnable_gate_instance?: (ctx: Enable_gate_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.mos_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterMos_switch_instance?: (ctx: Mos_switch_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.mos_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitMos_switch_instance?: (ctx: Mos_switch_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.n_input_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterN_input_gate_instance?: (ctx: N_input_gate_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.n_input_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitN_input_gate_instance?: (ctx: N_input_gate_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.n_output_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterN_output_gate_instance?: (ctx: N_output_gate_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.n_output_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitN_output_gate_instance?: (ctx: N_output_gate_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pass_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterPass_switch_instance?: (ctx: Pass_switch_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pass_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitPass_switch_instance?: (ctx: Pass_switch_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pass_enable_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterPass_enable_switch_instance?: (ctx: Pass_enable_switch_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pass_enable_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitPass_enable_switch_instance?: (ctx: Pass_enable_switch_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pull_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterPull_gate_instance?: (ctx: Pull_gate_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pull_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitPull_gate_instance?: (ctx: Pull_gate_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.name_of_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterName_of_gate_instance?: (ctx: Name_of_gate_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.name_of_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitName_of_gate_instance?: (ctx: Name_of_gate_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pulldown_strength`.
	 * @param ctx the parse tree
	 */
	enterPulldown_strength?: (ctx: Pulldown_strengthContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pulldown_strength`.
	 * @param ctx the parse tree
	 */
	exitPulldown_strength?: (ctx: Pulldown_strengthContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pullup_strength`.
	 * @param ctx the parse tree
	 */
	enterPullup_strength?: (ctx: Pullup_strengthContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pullup_strength`.
	 * @param ctx the parse tree
	 */
	exitPullup_strength?: (ctx: Pullup_strengthContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.enable_terminal`.
	 * @param ctx the parse tree
	 */
	enterEnable_terminal?: (ctx: Enable_terminalContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.enable_terminal`.
	 * @param ctx the parse tree
	 */
	exitEnable_terminal?: (ctx: Enable_terminalContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.ncontrol_terminal`.
	 * @param ctx the parse tree
	 */
	enterNcontrol_terminal?: (ctx: Ncontrol_terminalContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.ncontrol_terminal`.
	 * @param ctx the parse tree
	 */
	exitNcontrol_terminal?: (ctx: Ncontrol_terminalContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pcontrol_terminal`.
	 * @param ctx the parse tree
	 */
	enterPcontrol_terminal?: (ctx: Pcontrol_terminalContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pcontrol_terminal`.
	 * @param ctx the parse tree
	 */
	exitPcontrol_terminal?: (ctx: Pcontrol_terminalContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.input_terminal`.
	 * @param ctx the parse tree
	 */
	enterInput_terminal?: (ctx: Input_terminalContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.input_terminal`.
	 * @param ctx the parse tree
	 */
	exitInput_terminal?: (ctx: Input_terminalContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.inout_terminal`.
	 * @param ctx the parse tree
	 */
	enterInout_terminal?: (ctx: Inout_terminalContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.inout_terminal`.
	 * @param ctx the parse tree
	 */
	exitInout_terminal?: (ctx: Inout_terminalContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.output_terminal`.
	 * @param ctx the parse tree
	 */
	enterOutput_terminal?: (ctx: Output_terminalContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.output_terminal`.
	 * @param ctx the parse tree
	 */
	exitOutput_terminal?: (ctx: Output_terminalContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.cmos_switchtype`.
	 * @param ctx the parse tree
	 */
	enterCmos_switchtype?: (ctx: Cmos_switchtypeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.cmos_switchtype`.
	 * @param ctx the parse tree
	 */
	exitCmos_switchtype?: (ctx: Cmos_switchtypeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.enable_gatetype`.
	 * @param ctx the parse tree
	 */
	enterEnable_gatetype?: (ctx: Enable_gatetypeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.enable_gatetype`.
	 * @param ctx the parse tree
	 */
	exitEnable_gatetype?: (ctx: Enable_gatetypeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.mos_switchtype`.
	 * @param ctx the parse tree
	 */
	enterMos_switchtype?: (ctx: Mos_switchtypeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.mos_switchtype`.
	 * @param ctx the parse tree
	 */
	exitMos_switchtype?: (ctx: Mos_switchtypeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.n_input_gatetype`.
	 * @param ctx the parse tree
	 */
	enterN_input_gatetype?: (ctx: N_input_gatetypeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.n_input_gatetype`.
	 * @param ctx the parse tree
	 */
	exitN_input_gatetype?: (ctx: N_input_gatetypeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.n_output_gatetype`.
	 * @param ctx the parse tree
	 */
	enterN_output_gatetype?: (ctx: N_output_gatetypeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.n_output_gatetype`.
	 * @param ctx the parse tree
	 */
	exitN_output_gatetype?: (ctx: N_output_gatetypeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pass_en_switchtype`.
	 * @param ctx the parse tree
	 */
	enterPass_en_switchtype?: (ctx: Pass_en_switchtypeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pass_en_switchtype`.
	 * @param ctx the parse tree
	 */
	exitPass_en_switchtype?: (ctx: Pass_en_switchtypeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pass_switchtype`.
	 * @param ctx the parse tree
	 */
	enterPass_switchtype?: (ctx: Pass_switchtypeContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pass_switchtype`.
	 * @param ctx the parse tree
	 */
	exitPass_switchtype?: (ctx: Pass_switchtypeContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_instantiation`.
	 * @param ctx the parse tree
	 */
	enterModule_instantiation?: (ctx: Module_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_instantiation`.
	 * @param ctx the parse tree
	 */
	exitModule_instantiation?: (ctx: Module_instantiationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 */
	enterParameter_value_assignment?: (ctx: Parameter_value_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 */
	exitParameter_value_assignment?: (ctx: Parameter_value_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_parameter_assignments?: (ctx: List_of_parameter_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_parameter_assignments?: (ctx: List_of_parameter_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	enterOrdered_parameter_assignment?: (ctx: Ordered_parameter_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	exitOrdered_parameter_assignment?: (ctx: Ordered_parameter_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	enterNamed_parameter_assignment?: (ctx: Named_parameter_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	exitNamed_parameter_assignment?: (ctx: Named_parameter_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_instance`.
	 * @param ctx the parse tree
	 */
	enterModule_instance?: (ctx: Module_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_instance`.
	 * @param ctx the parse tree
	 */
	exitModule_instance?: (ctx: Module_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.name_of_instance`.
	 * @param ctx the parse tree
	 */
	enterName_of_instance?: (ctx: Name_of_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.name_of_instance`.
	 * @param ctx the parse tree
	 */
	exitName_of_instance?: (ctx: Name_of_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_port_connections`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_connections?: (ctx: List_of_port_connectionsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_port_connections`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_connections?: (ctx: List_of_port_connectionsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.ordered_port_connection`.
	 * @param ctx the parse tree
	 */
	enterOrdered_port_connection?: (ctx: Ordered_port_connectionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.ordered_port_connection`.
	 * @param ctx the parse tree
	 */
	exitOrdered_port_connection?: (ctx: Ordered_port_connectionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.named_port_connection`.
	 * @param ctx the parse tree
	 */
	enterNamed_port_connection?: (ctx: Named_port_connectionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.named_port_connection`.
	 * @param ctx the parse tree
	 */
	exitNamed_port_connection?: (ctx: Named_port_connectionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.generated_instantiation`.
	 * @param ctx the parse tree
	 */
	enterGenerated_instantiation?: (ctx: Generated_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.generated_instantiation`.
	 * @param ctx the parse tree
	 */
	exitGenerated_instantiation?: (ctx: Generated_instantiationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.generate_item_or_null`.
	 * @param ctx the parse tree
	 */
	enterGenerate_item_or_null?: (ctx: Generate_item_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.generate_item_or_null`.
	 * @param ctx the parse tree
	 */
	exitGenerate_item_or_null?: (ctx: Generate_item_or_nullContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.generate_item`.
	 * @param ctx the parse tree
	 */
	enterGenerate_item?: (ctx: Generate_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.generate_item`.
	 * @param ctx the parse tree
	 */
	exitGenerate_item?: (ctx: Generate_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.generate_conditional_statement`.
	 * @param ctx the parse tree
	 */
	enterGenerate_conditional_statement?: (ctx: Generate_conditional_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.generate_conditional_statement`.
	 * @param ctx the parse tree
	 */
	exitGenerate_conditional_statement?: (ctx: Generate_conditional_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.generate_case_statement`.
	 * @param ctx the parse tree
	 */
	enterGenerate_case_statement?: (ctx: Generate_case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.generate_case_statement`.
	 * @param ctx the parse tree
	 */
	exitGenerate_case_statement?: (ctx: Generate_case_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.genvar_case_item`.
	 * @param ctx the parse tree
	 */
	enterGenvar_case_item?: (ctx: Genvar_case_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.genvar_case_item`.
	 * @param ctx the parse tree
	 */
	exitGenvar_case_item?: (ctx: Genvar_case_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.generate_loop_statement`.
	 * @param ctx the parse tree
	 */
	enterGenerate_loop_statement?: (ctx: Generate_loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.generate_loop_statement`.
	 * @param ctx the parse tree
	 */
	exitGenerate_loop_statement?: (ctx: Generate_loop_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.genvar_assignment`.
	 * @param ctx the parse tree
	 */
	enterGenvar_assignment?: (ctx: Genvar_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.genvar_assignment`.
	 * @param ctx the parse tree
	 */
	exitGenvar_assignment?: (ctx: Genvar_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.generate_block`.
	 * @param ctx the parse tree
	 */
	enterGenerate_block?: (ctx: Generate_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.generate_block`.
	 * @param ctx the parse tree
	 */
	exitGenerate_block?: (ctx: Generate_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.continuous_assign`.
	 * @param ctx the parse tree
	 */
	enterContinuous_assign?: (ctx: Continuous_assignContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.continuous_assign`.
	 * @param ctx the parse tree
	 */
	exitContinuous_assign?: (ctx: Continuous_assignContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_assignments?: (ctx: List_of_net_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_assignments?: (ctx: List_of_net_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.net_assignment`.
	 * @param ctx the parse tree
	 */
	enterNet_assignment?: (ctx: Net_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.net_assignment`.
	 * @param ctx the parse tree
	 */
	exitNet_assignment?: (ctx: Net_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.initial_construct`.
	 * @param ctx the parse tree
	 */
	enterInitial_construct?: (ctx: Initial_constructContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.initial_construct`.
	 * @param ctx the parse tree
	 */
	exitInitial_construct?: (ctx: Initial_constructContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.always_construct`.
	 * @param ctx the parse tree
	 */
	enterAlways_construct?: (ctx: Always_constructContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.always_construct`.
	 * @param ctx the parse tree
	 */
	exitAlways_construct?: (ctx: Always_constructContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.blocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterBlocking_assignment?: (ctx: Blocking_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.blocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitBlocking_assignment?: (ctx: Blocking_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterNonblocking_assignment?: (ctx: Nonblocking_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitNonblocking_assignment?: (ctx: Nonblocking_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.procedural_continuous_assignments`.
	 * @param ctx the parse tree
	 */
	enterProcedural_continuous_assignments?: (ctx: Procedural_continuous_assignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.procedural_continuous_assignments`.
	 * @param ctx the parse tree
	 */
	exitProcedural_continuous_assignments?: (ctx: Procedural_continuous_assignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_blocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterFunction_blocking_assignment?: (ctx: Function_blocking_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_blocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitFunction_blocking_assignment?: (ctx: Function_blocking_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_statement_or_null`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement_or_null?: (ctx: Function_statement_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_statement_or_null`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement_or_null?: (ctx: Function_statement_or_nullContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_seq_block`.
	 * @param ctx the parse tree
	 */
	enterFunction_seq_block?: (ctx: Function_seq_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_seq_block`.
	 * @param ctx the parse tree
	 */
	exitFunction_seq_block?: (ctx: Function_seq_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.variable_assignment`.
	 * @param ctx the parse tree
	 */
	enterVariable_assignment?: (ctx: Variable_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.variable_assignment`.
	 * @param ctx the parse tree
	 */
	exitVariable_assignment?: (ctx: Variable_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.par_block`.
	 * @param ctx the parse tree
	 */
	enterPar_block?: (ctx: Par_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.par_block`.
	 * @param ctx the parse tree
	 */
	exitPar_block?: (ctx: Par_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.seq_block`.
	 * @param ctx the parse tree
	 */
	enterSeq_block?: (ctx: Seq_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.seq_block`.
	 * @param ctx the parse tree
	 */
	exitSeq_block?: (ctx: Seq_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.statement_or_null`.
	 * @param ctx the parse tree
	 */
	enterStatement_or_null?: (ctx: Statement_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.statement_or_null`.
	 * @param ctx the parse tree
	 */
	exitStatement_or_null?: (ctx: Statement_or_nullContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement?: (ctx: Function_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement?: (ctx: Function_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.delay_or_event_control`.
	 * @param ctx the parse tree
	 */
	enterDelay_or_event_control?: (ctx: Delay_or_event_controlContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.delay_or_event_control`.
	 * @param ctx the parse tree
	 */
	exitDelay_or_event_control?: (ctx: Delay_or_event_controlContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.delay_control`.
	 * @param ctx the parse tree
	 */
	enterDelay_control?: (ctx: Delay_controlContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.delay_control`.
	 * @param ctx the parse tree
	 */
	exitDelay_control?: (ctx: Delay_controlContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.disable_statement`.
	 * @param ctx the parse tree
	 */
	enterDisable_statement?: (ctx: Disable_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.disable_statement`.
	 * @param ctx the parse tree
	 */
	exitDisable_statement?: (ctx: Disable_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.event_control`.
	 * @param ctx the parse tree
	 */
	enterEvent_control?: (ctx: Event_controlContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.event_control`.
	 * @param ctx the parse tree
	 */
	exitEvent_control?: (ctx: Event_controlContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.event_trigger`.
	 * @param ctx the parse tree
	 */
	enterEvent_trigger?: (ctx: Event_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.event_trigger`.
	 * @param ctx the parse tree
	 */
	exitEvent_trigger?: (ctx: Event_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.event_expression`.
	 * @param ctx the parse tree
	 */
	enterEvent_expression?: (ctx: Event_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.event_expression`.
	 * @param ctx the parse tree
	 */
	exitEvent_expression?: (ctx: Event_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.event_primary`.
	 * @param ctx the parse tree
	 */
	enterEvent_primary?: (ctx: Event_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.event_primary`.
	 * @param ctx the parse tree
	 */
	exitEvent_primary?: (ctx: Event_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 */
	enterProcedural_timing_control_statement?: (ctx: Procedural_timing_control_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 */
	exitProcedural_timing_control_statement?: (ctx: Procedural_timing_control_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.wait_statement`.
	 * @param ctx the parse tree
	 */
	enterWait_statement?: (ctx: Wait_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.wait_statement`.
	 * @param ctx the parse tree
	 */
	exitWait_statement?: (ctx: Wait_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	enterConditional_statement?: (ctx: Conditional_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	exitConditional_statement?: (ctx: Conditional_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.if_else_if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_else_if_statement?: (ctx: If_else_if_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.if_else_if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_else_if_statement?: (ctx: If_else_if_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_conditional_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_conditional_statement?: (ctx: Function_conditional_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_conditional_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_conditional_statement?: (ctx: Function_conditional_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_if_else_if_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_if_else_if_statement?: (ctx: Function_if_else_if_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_if_else_if_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_if_else_if_statement?: (ctx: Function_if_else_if_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.case_statement`.
	 * @param ctx the parse tree
	 */
	enterCase_statement?: (ctx: Case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.case_statement`.
	 * @param ctx the parse tree
	 */
	exitCase_statement?: (ctx: Case_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.case_item`.
	 * @param ctx the parse tree
	 */
	enterCase_item?: (ctx: Case_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.case_item`.
	 * @param ctx the parse tree
	 */
	exitCase_item?: (ctx: Case_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_case_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_case_statement?: (ctx: Function_case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_case_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_case_statement?: (ctx: Function_case_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_case_item`.
	 * @param ctx the parse tree
	 */
	enterFunction_case_item?: (ctx: Function_case_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_case_item`.
	 * @param ctx the parse tree
	 */
	exitFunction_case_item?: (ctx: Function_case_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_loop_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_loop_statement?: (ctx: Function_loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_loop_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_loop_statement?: (ctx: Function_loop_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.loop_statement`.
	 * @param ctx the parse tree
	 */
	enterLoop_statement?: (ctx: Loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.loop_statement`.
	 * @param ctx the parse tree
	 */
	exitLoop_statement?: (ctx: Loop_statementContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.system_task_enable`.
	 * @param ctx the parse tree
	 */
	enterSystem_task_enable?: (ctx: System_task_enableContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.system_task_enable`.
	 * @param ctx the parse tree
	 */
	exitSystem_task_enable?: (ctx: System_task_enableContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.task_enable`.
	 * @param ctx the parse tree
	 */
	enterTask_enable?: (ctx: Task_enableContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.task_enable`.
	 * @param ctx the parse tree
	 */
	exitTask_enable?: (ctx: Task_enableContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.specify_block`.
	 * @param ctx the parse tree
	 */
	enterSpecify_block?: (ctx: Specify_blockContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.specify_block`.
	 * @param ctx the parse tree
	 */
	exitSpecify_block?: (ctx: Specify_blockContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.specify_item`.
	 * @param ctx the parse tree
	 */
	enterSpecify_item?: (ctx: Specify_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.specify_item`.
	 * @param ctx the parse tree
	 */
	exitSpecify_item?: (ctx: Specify_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.pulsestyle_declaration`.
	 * @param ctx the parse tree
	 */
	enterPulsestyle_declaration?: (ctx: Pulsestyle_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.pulsestyle_declaration`.
	 * @param ctx the parse tree
	 */
	exitPulsestyle_declaration?: (ctx: Pulsestyle_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.showcancelled_declaration`.
	 * @param ctx the parse tree
	 */
	enterShowcancelled_declaration?: (ctx: Showcancelled_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.showcancelled_declaration`.
	 * @param ctx the parse tree
	 */
	exitShowcancelled_declaration?: (ctx: Showcancelled_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.path_declaration`.
	 * @param ctx the parse tree
	 */
	enterPath_declaration?: (ctx: Path_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.path_declaration`.
	 * @param ctx the parse tree
	 */
	exitPath_declaration?: (ctx: Path_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.simple_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterSimple_path_declaration?: (ctx: Simple_path_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.simple_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitSimple_path_declaration?: (ctx: Simple_path_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.parallel_path_description`.
	 * @param ctx the parse tree
	 */
	enterParallel_path_description?: (ctx: Parallel_path_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.parallel_path_description`.
	 * @param ctx the parse tree
	 */
	exitParallel_path_description?: (ctx: Parallel_path_descriptionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.full_path_description`.
	 * @param ctx the parse tree
	 */
	enterFull_path_description?: (ctx: Full_path_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.full_path_description`.
	 * @param ctx the parse tree
	 */
	exitFull_path_description?: (ctx: Full_path_descriptionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_path_inputs`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_inputs?: (ctx: List_of_path_inputsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_path_inputs`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_inputs?: (ctx: List_of_path_inputsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_path_outputs`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_outputs?: (ctx: List_of_path_outputsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_path_outputs`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_outputs?: (ctx: List_of_path_outputsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.specify_input_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	enterSpecify_input_terminal_descriptor?: (ctx: Specify_input_terminal_descriptorContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.specify_input_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	exitSpecify_input_terminal_descriptor?: (ctx: Specify_input_terminal_descriptorContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.specify_output_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	enterSpecify_output_terminal_descriptor?: (ctx: Specify_output_terminal_descriptorContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.specify_output_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	exitSpecify_output_terminal_descriptor?: (ctx: Specify_output_terminal_descriptorContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.input_identifier`.
	 * @param ctx the parse tree
	 */
	enterInput_identifier?: (ctx: Input_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.input_identifier`.
	 * @param ctx the parse tree
	 */
	exitInput_identifier?: (ctx: Input_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.output_identifier`.
	 * @param ctx the parse tree
	 */
	enterOutput_identifier?: (ctx: Output_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.output_identifier`.
	 * @param ctx the parse tree
	 */
	exitOutput_identifier?: (ctx: Output_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.path_delay_value`.
	 * @param ctx the parse tree
	 */
	enterPath_delay_value?: (ctx: Path_delay_valueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.path_delay_value`.
	 * @param ctx the parse tree
	 */
	exitPath_delay_value?: (ctx: Path_delay_valueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.list_of_path_delay_expressions`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_delay_expressions?: (ctx: List_of_path_delay_expressionsContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.list_of_path_delay_expressions`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_delay_expressions?: (ctx: List_of_path_delay_expressionsContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.t_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT_path_delay_expression?: (ctx: T_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.t_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT_path_delay_expression?: (ctx: T_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.trise_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTrise_path_delay_expression?: (ctx: Trise_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.trise_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTrise_path_delay_expression?: (ctx: Trise_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tfall_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTfall_path_delay_expression?: (ctx: Tfall_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tfall_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTfall_path_delay_expression?: (ctx: Tfall_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz_path_delay_expression?: (ctx: Tz_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz_path_delay_expression?: (ctx: Tz_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.t01_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT01_path_delay_expression?: (ctx: T01_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.t01_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT01_path_delay_expression?: (ctx: T01_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.t10_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT10_path_delay_expression?: (ctx: T10_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.t10_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT10_path_delay_expression?: (ctx: T10_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.t0z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT0z_path_delay_expression?: (ctx: T0z_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.t0z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT0z_path_delay_expression?: (ctx: T0z_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tz1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz1_path_delay_expression?: (ctx: Tz1_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tz1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz1_path_delay_expression?: (ctx: Tz1_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.t1z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT1z_path_delay_expression?: (ctx: T1z_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.t1z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT1z_path_delay_expression?: (ctx: T1z_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tz0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz0_path_delay_expression?: (ctx: Tz0_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tz0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz0_path_delay_expression?: (ctx: Tz0_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.t0x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT0x_path_delay_expression?: (ctx: T0x_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.t0x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT0x_path_delay_expression?: (ctx: T0x_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tx1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTx1_path_delay_expression?: (ctx: Tx1_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tx1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTx1_path_delay_expression?: (ctx: Tx1_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.t1x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT1x_path_delay_expression?: (ctx: T1x_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.t1x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT1x_path_delay_expression?: (ctx: T1x_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tx0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTx0_path_delay_expression?: (ctx: Tx0_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tx0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTx0_path_delay_expression?: (ctx: Tx0_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.txz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTxz_path_delay_expression?: (ctx: Txz_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.txz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTxz_path_delay_expression?: (ctx: Txz_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.tzx_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTzx_path_delay_expression?: (ctx: Tzx_path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.tzx_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTzx_path_delay_expression?: (ctx: Tzx_path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterPath_delay_expression?: (ctx: Path_delay_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitPath_delay_expression?: (ctx: Path_delay_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.edge_sensitive_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterEdge_sensitive_path_declaration?: (ctx: Edge_sensitive_path_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.edge_sensitive_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitEdge_sensitive_path_declaration?: (ctx: Edge_sensitive_path_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.parallel_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	enterParallel_edge_sensitive_path_description?: (ctx: Parallel_edge_sensitive_path_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.parallel_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	exitParallel_edge_sensitive_path_description?: (ctx: Parallel_edge_sensitive_path_descriptionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.full_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	enterFull_edge_sensitive_path_description?: (ctx: Full_edge_sensitive_path_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.full_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	exitFull_edge_sensitive_path_description?: (ctx: Full_edge_sensitive_path_descriptionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.data_source_expression`.
	 * @param ctx the parse tree
	 */
	enterData_source_expression?: (ctx: Data_source_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.data_source_expression`.
	 * @param ctx the parse tree
	 */
	exitData_source_expression?: (ctx: Data_source_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.edge_identifier`.
	 * @param ctx the parse tree
	 */
	enterEdge_identifier?: (ctx: Edge_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.edge_identifier`.
	 * @param ctx the parse tree
	 */
	exitEdge_identifier?: (ctx: Edge_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.state_dependent_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterState_dependent_path_declaration?: (ctx: State_dependent_path_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.state_dependent_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitState_dependent_path_declaration?: (ctx: State_dependent_path_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.polarity_operator`.
	 * @param ctx the parse tree
	 */
	enterPolarity_operator?: (ctx: Polarity_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.polarity_operator`.
	 * @param ctx the parse tree
	 */
	exitPolarity_operator?: (ctx: Polarity_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.checktime_condition`.
	 * @param ctx the parse tree
	 */
	enterChecktime_condition?: (ctx: Checktime_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.checktime_condition`.
	 * @param ctx the parse tree
	 */
	exitChecktime_condition?: (ctx: Checktime_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.delayed_data`.
	 * @param ctx the parse tree
	 */
	enterDelayed_data?: (ctx: Delayed_dataContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.delayed_data`.
	 * @param ctx the parse tree
	 */
	exitDelayed_data?: (ctx: Delayed_dataContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.delayed_reference`.
	 * @param ctx the parse tree
	 */
	enterDelayed_reference?: (ctx: Delayed_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.delayed_reference`.
	 * @param ctx the parse tree
	 */
	exitDelayed_reference?: (ctx: Delayed_referenceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.end_edge_offset`.
	 * @param ctx the parse tree
	 */
	enterEnd_edge_offset?: (ctx: End_edge_offsetContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.end_edge_offset`.
	 * @param ctx the parse tree
	 */
	exitEnd_edge_offset?: (ctx: End_edge_offsetContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.event_based_flag`.
	 * @param ctx the parse tree
	 */
	enterEvent_based_flag?: (ctx: Event_based_flagContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.event_based_flag`.
	 * @param ctx the parse tree
	 */
	exitEvent_based_flag?: (ctx: Event_based_flagContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.notify_reg`.
	 * @param ctx the parse tree
	 */
	enterNotify_reg?: (ctx: Notify_regContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.notify_reg`.
	 * @param ctx the parse tree
	 */
	exitNotify_reg?: (ctx: Notify_regContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.remain_active_flag`.
	 * @param ctx the parse tree
	 */
	enterRemain_active_flag?: (ctx: Remain_active_flagContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.remain_active_flag`.
	 * @param ctx the parse tree
	 */
	exitRemain_active_flag?: (ctx: Remain_active_flagContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.stamptime_condition`.
	 * @param ctx the parse tree
	 */
	enterStamptime_condition?: (ctx: Stamptime_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.stamptime_condition`.
	 * @param ctx the parse tree
	 */
	exitStamptime_condition?: (ctx: Stamptime_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.start_edge_offset`.
	 * @param ctx the parse tree
	 */
	enterStart_edge_offset?: (ctx: Start_edge_offsetContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.start_edge_offset`.
	 * @param ctx the parse tree
	 */
	exitStart_edge_offset?: (ctx: Start_edge_offsetContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.threshold`.
	 * @param ctx the parse tree
	 */
	enterThreshold?: (ctx: ThresholdContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.threshold`.
	 * @param ctx the parse tree
	 */
	exitThreshold?: (ctx: ThresholdContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.timing_check_limit`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_limit?: (ctx: Timing_check_limitContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.timing_check_limit`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_limit?: (ctx: Timing_check_limitContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.concatenation`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.concatenation`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.constant_concatenation`.
	 * @param ctx the parse tree
	 */
	enterConstant_concatenation?: (ctx: Constant_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.constant_concatenation`.
	 * @param ctx the parse tree
	 */
	exitConstant_concatenation?: (ctx: Constant_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterConstant_multiple_concatenation?: (ctx: Constant_multiple_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitConstant_multiple_concatenation?: (ctx: Constant_multiple_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_path_concatenation`.
	 * @param ctx the parse tree
	 */
	enterModule_path_concatenation?: (ctx: Module_path_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_path_concatenation`.
	 * @param ctx the parse tree
	 */
	exitModule_path_concatenation?: (ctx: Module_path_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_path_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterModule_path_multiple_concatenation?: (ctx: Module_path_multiple_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_path_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitModule_path_multiple_concatenation?: (ctx: Module_path_multiple_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterMultiple_concatenation?: (ctx: Multiple_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitMultiple_concatenation?: (ctx: Multiple_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.net_concatenation`.
	 * @param ctx the parse tree
	 */
	enterNet_concatenation?: (ctx: Net_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.net_concatenation`.
	 * @param ctx the parse tree
	 */
	exitNet_concatenation?: (ctx: Net_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.net_concatenation_value`.
	 * @param ctx the parse tree
	 */
	enterNet_concatenation_value?: (ctx: Net_concatenation_valueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.net_concatenation_value`.
	 * @param ctx the parse tree
	 */
	exitNet_concatenation_value?: (ctx: Net_concatenation_valueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.variable_concatenation`.
	 * @param ctx the parse tree
	 */
	enterVariable_concatenation?: (ctx: Variable_concatenationContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.variable_concatenation`.
	 * @param ctx the parse tree
	 */
	exitVariable_concatenation?: (ctx: Variable_concatenationContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.variable_concatenation_value`.
	 * @param ctx the parse tree
	 */
	enterVariable_concatenation_value?: (ctx: Variable_concatenation_valueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.variable_concatenation_value`.
	 * @param ctx the parse tree
	 */
	exitVariable_concatenation_value?: (ctx: Variable_concatenation_valueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.constant_function_call`.
	 * @param ctx the parse tree
	 */
	enterConstant_function_call?: (ctx: Constant_function_callContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.constant_function_call`.
	 * @param ctx the parse tree
	 */
	exitConstant_function_call?: (ctx: Constant_function_callContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.system_function_call`.
	 * @param ctx the parse tree
	 */
	enterSystem_function_call?: (ctx: System_function_callContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.system_function_call`.
	 * @param ctx the parse tree
	 */
	exitSystem_function_call?: (ctx: System_function_callContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.genvar_function_call`.
	 * @param ctx the parse tree
	 */
	enterGenvar_function_call?: (ctx: Genvar_function_callContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.genvar_function_call`.
	 * @param ctx the parse tree
	 */
	exitGenvar_function_call?: (ctx: Genvar_function_callContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.base_expression`.
	 * @param ctx the parse tree
	 */
	enterBase_expression?: (ctx: Base_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.base_expression`.
	 * @param ctx the parse tree
	 */
	exitBase_expression?: (ctx: Base_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.constant_base_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_base_expression?: (ctx: Constant_base_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.constant_base_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_base_expression?: (ctx: Constant_base_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_mintypmax_expression?: (ctx: Constant_mintypmax_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_mintypmax_expression?: (ctx: Constant_mintypmax_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.constant_range_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_range_expression?: (ctx: Constant_range_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.constant_range_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_range_expression?: (ctx: Constant_range_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.dimension_constant_expression`.
	 * @param ctx the parse tree
	 */
	enterDimension_constant_expression?: (ctx: Dimension_constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.dimension_constant_expression`.
	 * @param ctx the parse tree
	 */
	exitDimension_constant_expression?: (ctx: Dimension_constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.lsb_constant_expression`.
	 * @param ctx the parse tree
	 */
	enterLsb_constant_expression?: (ctx: Lsb_constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.lsb_constant_expression`.
	 * @param ctx the parse tree
	 */
	exitLsb_constant_expression?: (ctx: Lsb_constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterMintypmax_expression?: (ctx: Mintypmax_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitMintypmax_expression?: (ctx: Mintypmax_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_path_conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterModule_path_conditional_expression?: (ctx: Module_path_conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_path_conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitModule_path_conditional_expression?: (ctx: Module_path_conditional_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_path_expression`.
	 * @param ctx the parse tree
	 */
	enterModule_path_expression?: (ctx: Module_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_path_expression`.
	 * @param ctx the parse tree
	 */
	exitModule_path_expression?: (ctx: Module_path_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_path_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterModule_path_mintypmax_expression?: (ctx: Module_path_mintypmax_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_path_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitModule_path_mintypmax_expression?: (ctx: Module_path_mintypmax_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.msb_constant_expression`.
	 * @param ctx the parse tree
	 */
	enterMsb_constant_expression?: (ctx: Msb_constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.msb_constant_expression`.
	 * @param ctx the parse tree
	 */
	exitMsb_constant_expression?: (ctx: Msb_constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.range_expression`.
	 * @param ctx the parse tree
	 */
	enterRange_expression?: (ctx: Range_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.range_expression`.
	 * @param ctx the parse tree
	 */
	exitRange_expression?: (ctx: Range_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.width_constant_expression`.
	 * @param ctx the parse tree
	 */
	enterWidth_constant_expression?: (ctx: Width_constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.width_constant_expression`.
	 * @param ctx the parse tree
	 */
	exitWidth_constant_expression?: (ctx: Width_constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.constant_primary`.
	 * @param ctx the parse tree
	 */
	enterConstant_primary?: (ctx: Constant_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.constant_primary`.
	 * @param ctx the parse tree
	 */
	exitConstant_primary?: (ctx: Constant_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_path_primary`.
	 * @param ctx the parse tree
	 */
	enterModule_path_primary?: (ctx: Module_path_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_path_primary`.
	 * @param ctx the parse tree
	 */
	exitModule_path_primary?: (ctx: Module_path_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.net_lvalue`.
	 * @param ctx the parse tree
	 */
	enterNet_lvalue?: (ctx: Net_lvalueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.net_lvalue`.
	 * @param ctx the parse tree
	 */
	exitNet_lvalue?: (ctx: Net_lvalueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.variable_lvalue`.
	 * @param ctx the parse tree
	 */
	enterVariable_lvalue?: (ctx: Variable_lvalueContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.variable_lvalue`.
	 * @param ctx the parse tree
	 */
	exitVariable_lvalue?: (ctx: Variable_lvalueContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.binary_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_operator?: (ctx: Binary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.binary_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_operator?: (ctx: Binary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_module_path_operator?: (ctx: Unary_module_path_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_module_path_operator?: (ctx: Unary_module_path_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_module_path_operator?: (ctx: Binary_module_path_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_module_path_operator?: (ctx: Binary_module_path_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.timing_spec`.
	 * @param ctx the parse tree
	 */
	enterTiming_spec?: (ctx: Timing_specContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.timing_spec`.
	 * @param ctx the parse tree
	 */
	exitTiming_spec?: (ctx: Timing_specContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.attribute_instance`.
	 * @param ctx the parse tree
	 */
	enterAttribute_instance?: (ctx: Attribute_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.attribute_instance`.
	 * @param ctx the parse tree
	 */
	exitAttribute_instance?: (ctx: Attribute_instanceContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.attr_spec`.
	 * @param ctx the parse tree
	 */
	enterAttr_spec?: (ctx: Attr_specContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.attr_spec`.
	 * @param ctx the parse tree
	 */
	exitAttr_spec?: (ctx: Attr_specContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.attr_name`.
	 * @param ctx the parse tree
	 */
	enterAttr_name?: (ctx: Attr_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.attr_name`.
	 * @param ctx the parse tree
	 */
	exitAttr_name?: (ctx: Attr_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.arrayed_identifier`.
	 * @param ctx the parse tree
	 */
	enterArrayed_identifier?: (ctx: Arrayed_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.arrayed_identifier`.
	 * @param ctx the parse tree
	 */
	exitArrayed_identifier?: (ctx: Arrayed_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.block_identifier`.
	 * @param ctx the parse tree
	 */
	enterBlock_identifier?: (ctx: Block_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.block_identifier`.
	 * @param ctx the parse tree
	 */
	exitBlock_identifier?: (ctx: Block_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.cell_identifier`.
	 * @param ctx the parse tree
	 */
	enterCell_identifier?: (ctx: Cell_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.cell_identifier`.
	 * @param ctx the parse tree
	 */
	exitCell_identifier?: (ctx: Cell_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.config_identifier`.
	 * @param ctx the parse tree
	 */
	enterConfig_identifier?: (ctx: Config_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.config_identifier`.
	 * @param ctx the parse tree
	 */
	exitConfig_identifier?: (ctx: Config_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.escaped_arrayed_identifier`.
	 * @param ctx the parse tree
	 */
	enterEscaped_arrayed_identifier?: (ctx: Escaped_arrayed_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.escaped_arrayed_identifier`.
	 * @param ctx the parse tree
	 */
	exitEscaped_arrayed_identifier?: (ctx: Escaped_arrayed_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.escaped_hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	enterEscaped_hierarchical_identifier?: (ctx: Escaped_hierarchical_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.escaped_hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	exitEscaped_hierarchical_identifier?: (ctx: Escaped_hierarchical_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.event_identifier`.
	 * @param ctx the parse tree
	 */
	enterEvent_identifier?: (ctx: Event_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.event_identifier`.
	 * @param ctx the parse tree
	 */
	exitEvent_identifier?: (ctx: Event_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.function_identifier`.
	 * @param ctx the parse tree
	 */
	enterFunction_identifier?: (ctx: Function_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.function_identifier`.
	 * @param ctx the parse tree
	 */
	exitFunction_identifier?: (ctx: Function_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.gate_instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterGate_instance_identifier?: (ctx: Gate_instance_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.gate_instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitGate_instance_identifier?: (ctx: Gate_instance_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.generate_block_identifier`.
	 * @param ctx the parse tree
	 */
	enterGenerate_block_identifier?: (ctx: Generate_block_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.generate_block_identifier`.
	 * @param ctx the parse tree
	 */
	exitGenerate_block_identifier?: (ctx: Generate_block_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.genvar_function_identifier`.
	 * @param ctx the parse tree
	 */
	enterGenvar_function_identifier?: (ctx: Genvar_function_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.genvar_function_identifier`.
	 * @param ctx the parse tree
	 */
	exitGenvar_function_identifier?: (ctx: Genvar_function_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.genvar_identifier`.
	 * @param ctx the parse tree
	 */
	enterGenvar_identifier?: (ctx: Genvar_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.genvar_identifier`.
	 * @param ctx the parse tree
	 */
	exitGenvar_identifier?: (ctx: Genvar_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.hierarchical_block_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_block_identifier?: (ctx: Hierarchical_block_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.hierarchical_block_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_block_identifier?: (ctx: Hierarchical_block_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.hierarchical_event_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_event_identifier?: (ctx: Hierarchical_event_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.hierarchical_event_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_event_identifier?: (ctx: Hierarchical_event_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.hierarchical_function_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_function_identifier?: (ctx: Hierarchical_function_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.hierarchical_function_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_function_identifier?: (ctx: Hierarchical_function_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_identifier?: (ctx: Hierarchical_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_identifier?: (ctx: Hierarchical_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_net_identifier?: (ctx: Hierarchical_net_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_net_identifier?: (ctx: Hierarchical_net_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.hierarchical_variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_variable_identifier?: (ctx: Hierarchical_variable_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.hierarchical_variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_variable_identifier?: (ctx: Hierarchical_variable_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.hierarchical_task_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_task_identifier?: (ctx: Hierarchical_task_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.hierarchical_task_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_task_identifier?: (ctx: Hierarchical_task_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.inout_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterInout_port_identifier?: (ctx: Inout_port_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.inout_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitInout_port_identifier?: (ctx: Inout_port_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.input_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterInput_port_identifier?: (ctx: Input_port_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.input_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitInput_port_identifier?: (ctx: Input_port_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterInstance_identifier?: (ctx: Instance_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitInstance_identifier?: (ctx: Instance_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.library_identifier`.
	 * @param ctx the parse tree
	 */
	enterLibrary_identifier?: (ctx: Library_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.library_identifier`.
	 * @param ctx the parse tree
	 */
	exitLibrary_identifier?: (ctx: Library_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.memory_identifier`.
	 * @param ctx the parse tree
	 */
	enterMemory_identifier?: (ctx: Memory_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.memory_identifier`.
	 * @param ctx the parse tree
	 */
	exitMemory_identifier?: (ctx: Memory_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_identifier`.
	 * @param ctx the parse tree
	 */
	enterModule_identifier?: (ctx: Module_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_identifier`.
	 * @param ctx the parse tree
	 */
	exitModule_identifier?: (ctx: Module_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.module_instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterModule_instance_identifier?: (ctx: Module_instance_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.module_instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitModule_instance_identifier?: (ctx: Module_instance_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.net_identifier`.
	 * @param ctx the parse tree
	 */
	enterNet_identifier?: (ctx: Net_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.net_identifier`.
	 * @param ctx the parse tree
	 */
	exitNet_identifier?: (ctx: Net_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.output_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterOutput_port_identifier?: (ctx: Output_port_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.output_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitOutput_port_identifier?: (ctx: Output_port_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.parameter_identifier`.
	 * @param ctx the parse tree
	 */
	enterParameter_identifier?: (ctx: Parameter_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.parameter_identifier`.
	 * @param ctx the parse tree
	 */
	exitParameter_identifier?: (ctx: Parameter_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.port_identifier`.
	 * @param ctx the parse tree
	 */
	enterPort_identifier?: (ctx: Port_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.port_identifier`.
	 * @param ctx the parse tree
	 */
	exitPort_identifier?: (ctx: Port_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.real_identifier`.
	 * @param ctx the parse tree
	 */
	enterReal_identifier?: (ctx: Real_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.real_identifier`.
	 * @param ctx the parse tree
	 */
	exitReal_identifier?: (ctx: Real_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.simple_arrayed_identifier`.
	 * @param ctx the parse tree
	 */
	enterSimple_arrayed_identifier?: (ctx: Simple_arrayed_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.simple_arrayed_identifier`.
	 * @param ctx the parse tree
	 */
	exitSimple_arrayed_identifier?: (ctx: Simple_arrayed_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.simple_hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	enterSimple_hierarchical_identifier?: (ctx: Simple_hierarchical_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.simple_hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	exitSimple_hierarchical_identifier?: (ctx: Simple_hierarchical_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.specparam_identifier`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_identifier?: (ctx: Specparam_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.specparam_identifier`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_identifier?: (ctx: Specparam_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.system_function_identifier`.
	 * @param ctx the parse tree
	 */
	enterSystem_function_identifier?: (ctx: System_function_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.system_function_identifier`.
	 * @param ctx the parse tree
	 */
	exitSystem_function_identifier?: (ctx: System_function_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.system_task_identifier`.
	 * @param ctx the parse tree
	 */
	enterSystem_task_identifier?: (ctx: System_task_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.system_task_identifier`.
	 * @param ctx the parse tree
	 */
	exitSystem_task_identifier?: (ctx: System_task_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.task_identifier`.
	 * @param ctx the parse tree
	 */
	enterTask_identifier?: (ctx: Task_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.task_identifier`.
	 * @param ctx the parse tree
	 */
	exitTask_identifier?: (ctx: Task_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.terminal_identifier`.
	 * @param ctx the parse tree
	 */
	enterTerminal_identifier?: (ctx: Terminal_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.terminal_identifier`.
	 * @param ctx the parse tree
	 */
	exitTerminal_identifier?: (ctx: Terminal_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.text_macro_identifier`.
	 * @param ctx the parse tree
	 */
	enterText_macro_identifier?: (ctx: Text_macro_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.text_macro_identifier`.
	 * @param ctx the parse tree
	 */
	exitText_macro_identifier?: (ctx: Text_macro_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.topmodule_identifier`.
	 * @param ctx the parse tree
	 */
	enterTopmodule_identifier?: (ctx: Topmodule_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.topmodule_identifier`.
	 * @param ctx the parse tree
	 */
	exitTopmodule_identifier?: (ctx: Topmodule_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.udp_identifier`.
	 * @param ctx the parse tree
	 */
	enterUdp_identifier?: (ctx: Udp_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.udp_identifier`.
	 * @param ctx the parse tree
	 */
	exitUdp_identifier?: (ctx: Udp_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.udp_instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterUdp_instance_identifier?: (ctx: Udp_instance_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.udp_instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitUdp_instance_identifier?: (ctx: Udp_instance_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterVariable_identifier?: (ctx: Variable_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitVariable_identifier?: (ctx: Variable_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.simple_hierarchical_branch`.
	 * @param ctx the parse tree
	 */
	enterSimple_hierarchical_branch?: (ctx: Simple_hierarchical_branchContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.simple_hierarchical_branch`.
	 * @param ctx the parse tree
	 */
	exitSimple_hierarchical_branch?: (ctx: Simple_hierarchical_branchContext) => void;

	/**
	 * Enter a parse tree produced by `Verilog2001Parser.escaped_hierarchical_branch`.
	 * @param ctx the parse tree
	 */
	enterEscaped_hierarchical_branch?: (ctx: Escaped_hierarchical_branchContext) => void;
	/**
	 * Exit a parse tree produced by `Verilog2001Parser.escaped_hierarchical_branch`.
	 * @param ctx the parse tree
	 */
	exitEscaped_hierarchical_branch?: (ctx: Escaped_hierarchical_branchContext) => void;
}

