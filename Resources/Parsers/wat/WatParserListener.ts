// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wat/WatParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ValueContext } from "./WatParser";
import { NameContext } from "./WatParser";
import { Value_typeContext } from "./WatParser";
import { Elem_typeContext } from "./WatParser";
import { Global_typeContext } from "./WatParser";
import { Def_typeContext } from "./WatParser";
import { Func_typeContext } from "./WatParser";
import { Table_typeContext } from "./WatParser";
import { Memory_typeContext } from "./WatParser";
import { Type_useContext } from "./WatParser";
import { LiteralContext } from "./WatParser";
import { VarContext } from "./WatParser";
import { Bind_varContext } from "./WatParser";
import { InstrContext } from "./WatParser";
import { Plain_instrContext } from "./WatParser";
import { Call_instrContext } from "./WatParser";
import { Call_instr_paramsContext } from "./WatParser";
import { Call_instr_instrContext } from "./WatParser";
import { Call_instr_params_instrContext } from "./WatParser";
import { Call_instr_results_instrContext } from "./WatParser";
import { Block_instrContext } from "./WatParser";
import { Block_typeContext } from "./WatParser";
import { BlockContext } from "./WatParser";
import { ExprContext } from "./WatParser";
import { Expr1Context } from "./WatParser";
import { Call_expr_typeContext } from "./WatParser";
import { Call_expr_paramsContext } from "./WatParser";
import { Call_expr_resultsContext } from "./WatParser";
import { If_blockContext } from "./WatParser";
import { Instr_listContext } from "./WatParser";
import { Const_exprContext } from "./WatParser";
import { FuncContext } from "./WatParser";
import { Func_fieldsContext } from "./WatParser";
import { Func_fields_importContext } from "./WatParser";
import { Func_fields_import_resultContext } from "./WatParser";
import { Func_fields_bodyContext } from "./WatParser";
import { Func_result_bodyContext } from "./WatParser";
import { Func_bodyContext } from "./WatParser";
import { OffsetContext } from "./WatParser";
import { ElemContext } from "./WatParser";
import { TableContext } from "./WatParser";
import { Table_fieldsContext } from "./WatParser";
import { DataContext } from "./WatParser";
import { MemoryContext } from "./WatParser";
import { Memory_fieldsContext } from "./WatParser";
import { SglobalContext } from "./WatParser";
import { Global_fieldsContext } from "./WatParser";
import { Import_descContext } from "./WatParser";
import { SimportContext } from "./WatParser";
import { Inline_importContext } from "./WatParser";
import { Export_descContext } from "./WatParser";
import { ExportContext } from "./WatParser";
import { Inline_exportContext } from "./WatParser";
import { Type_Context } from "./WatParser";
import { Type_defContext } from "./WatParser";
import { StartContext } from "./WatParser";
import { Module_fieldContext } from "./WatParser";
import { Module_Context } from "./WatParser";
import { Script_moduleContext } from "./WatParser";
import { ActionContext } from "./WatParser";
import { AssertionContext } from "./WatParser";
import { CmdContext } from "./WatParser";
import { MetaContext } from "./WatParser";
import { WconstContext } from "./WatParser";
import { Const_listContext } from "./WatParser";
import { ScriptContext } from "./WatParser";
import { ModuleContext } from "./WatParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WatParser`.
 */
export interface WatParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `WatParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.value_type`.
	 * @param ctx the parse tree
	 */
	enterValue_type?: (ctx: Value_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.value_type`.
	 * @param ctx the parse tree
	 */
	exitValue_type?: (ctx: Value_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.elem_type`.
	 * @param ctx the parse tree
	 */
	enterElem_type?: (ctx: Elem_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.elem_type`.
	 * @param ctx the parse tree
	 */
	exitElem_type?: (ctx: Elem_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.global_type`.
	 * @param ctx the parse tree
	 */
	enterGlobal_type?: (ctx: Global_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.global_type`.
	 * @param ctx the parse tree
	 */
	exitGlobal_type?: (ctx: Global_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.def_type`.
	 * @param ctx the parse tree
	 */
	enterDef_type?: (ctx: Def_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.def_type`.
	 * @param ctx the parse tree
	 */
	exitDef_type?: (ctx: Def_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.func_type`.
	 * @param ctx the parse tree
	 */
	enterFunc_type?: (ctx: Func_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.func_type`.
	 * @param ctx the parse tree
	 */
	exitFunc_type?: (ctx: Func_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.table_type`.
	 * @param ctx the parse tree
	 */
	enterTable_type?: (ctx: Table_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.table_type`.
	 * @param ctx the parse tree
	 */
	exitTable_type?: (ctx: Table_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.memory_type`.
	 * @param ctx the parse tree
	 */
	enterMemory_type?: (ctx: Memory_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.memory_type`.
	 * @param ctx the parse tree
	 */
	exitMemory_type?: (ctx: Memory_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.type_use`.
	 * @param ctx the parse tree
	 */
	enterType_use?: (ctx: Type_useContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.type_use`.
	 * @param ctx the parse tree
	 */
	exitType_use?: (ctx: Type_useContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.bind_var`.
	 * @param ctx the parse tree
	 */
	enterBind_var?: (ctx: Bind_varContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.bind_var`.
	 * @param ctx the parse tree
	 */
	exitBind_var?: (ctx: Bind_varContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.instr`.
	 * @param ctx the parse tree
	 */
	enterInstr?: (ctx: InstrContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.instr`.
	 * @param ctx the parse tree
	 */
	exitInstr?: (ctx: InstrContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.plain_instr`.
	 * @param ctx the parse tree
	 */
	enterPlain_instr?: (ctx: Plain_instrContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.plain_instr`.
	 * @param ctx the parse tree
	 */
	exitPlain_instr?: (ctx: Plain_instrContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.call_instr`.
	 * @param ctx the parse tree
	 */
	enterCall_instr?: (ctx: Call_instrContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.call_instr`.
	 * @param ctx the parse tree
	 */
	exitCall_instr?: (ctx: Call_instrContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.call_instr_params`.
	 * @param ctx the parse tree
	 */
	enterCall_instr_params?: (ctx: Call_instr_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.call_instr_params`.
	 * @param ctx the parse tree
	 */
	exitCall_instr_params?: (ctx: Call_instr_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.call_instr_instr`.
	 * @param ctx the parse tree
	 */
	enterCall_instr_instr?: (ctx: Call_instr_instrContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.call_instr_instr`.
	 * @param ctx the parse tree
	 */
	exitCall_instr_instr?: (ctx: Call_instr_instrContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.call_instr_params_instr`.
	 * @param ctx the parse tree
	 */
	enterCall_instr_params_instr?: (ctx: Call_instr_params_instrContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.call_instr_params_instr`.
	 * @param ctx the parse tree
	 */
	exitCall_instr_params_instr?: (ctx: Call_instr_params_instrContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.call_instr_results_instr`.
	 * @param ctx the parse tree
	 */
	enterCall_instr_results_instr?: (ctx: Call_instr_results_instrContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.call_instr_results_instr`.
	 * @param ctx the parse tree
	 */
	exitCall_instr_results_instr?: (ctx: Call_instr_results_instrContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.block_instr`.
	 * @param ctx the parse tree
	 */
	enterBlock_instr?: (ctx: Block_instrContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.block_instr`.
	 * @param ctx the parse tree
	 */
	exitBlock_instr?: (ctx: Block_instrContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.block_type`.
	 * @param ctx the parse tree
	 */
	enterBlock_type?: (ctx: Block_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.block_type`.
	 * @param ctx the parse tree
	 */
	exitBlock_type?: (ctx: Block_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.expr1`.
	 * @param ctx the parse tree
	 */
	enterExpr1?: (ctx: Expr1Context) => void;
	/**
	 * Exit a parse tree produced by `WatParser.expr1`.
	 * @param ctx the parse tree
	 */
	exitExpr1?: (ctx: Expr1Context) => void;

	/**
	 * Enter a parse tree produced by `WatParser.call_expr_type`.
	 * @param ctx the parse tree
	 */
	enterCall_expr_type?: (ctx: Call_expr_typeContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.call_expr_type`.
	 * @param ctx the parse tree
	 */
	exitCall_expr_type?: (ctx: Call_expr_typeContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.call_expr_params`.
	 * @param ctx the parse tree
	 */
	enterCall_expr_params?: (ctx: Call_expr_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.call_expr_params`.
	 * @param ctx the parse tree
	 */
	exitCall_expr_params?: (ctx: Call_expr_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.call_expr_results`.
	 * @param ctx the parse tree
	 */
	enterCall_expr_results?: (ctx: Call_expr_resultsContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.call_expr_results`.
	 * @param ctx the parse tree
	 */
	exitCall_expr_results?: (ctx: Call_expr_resultsContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.if_block`.
	 * @param ctx the parse tree
	 */
	enterIf_block?: (ctx: If_blockContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.if_block`.
	 * @param ctx the parse tree
	 */
	exitIf_block?: (ctx: If_blockContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.instr_list`.
	 * @param ctx the parse tree
	 */
	enterInstr_list?: (ctx: Instr_listContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.instr_list`.
	 * @param ctx the parse tree
	 */
	exitInstr_list?: (ctx: Instr_listContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.const_expr`.
	 * @param ctx the parse tree
	 */
	enterConst_expr?: (ctx: Const_exprContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.const_expr`.
	 * @param ctx the parse tree
	 */
	exitConst_expr?: (ctx: Const_exprContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.func_fields`.
	 * @param ctx the parse tree
	 */
	enterFunc_fields?: (ctx: Func_fieldsContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.func_fields`.
	 * @param ctx the parse tree
	 */
	exitFunc_fields?: (ctx: Func_fieldsContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.func_fields_import`.
	 * @param ctx the parse tree
	 */
	enterFunc_fields_import?: (ctx: Func_fields_importContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.func_fields_import`.
	 * @param ctx the parse tree
	 */
	exitFunc_fields_import?: (ctx: Func_fields_importContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.func_fields_import_result`.
	 * @param ctx the parse tree
	 */
	enterFunc_fields_import_result?: (ctx: Func_fields_import_resultContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.func_fields_import_result`.
	 * @param ctx the parse tree
	 */
	exitFunc_fields_import_result?: (ctx: Func_fields_import_resultContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.func_fields_body`.
	 * @param ctx the parse tree
	 */
	enterFunc_fields_body?: (ctx: Func_fields_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.func_fields_body`.
	 * @param ctx the parse tree
	 */
	exitFunc_fields_body?: (ctx: Func_fields_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.func_result_body`.
	 * @param ctx the parse tree
	 */
	enterFunc_result_body?: (ctx: Func_result_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.func_result_body`.
	 * @param ctx the parse tree
	 */
	exitFunc_result_body?: (ctx: Func_result_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.func_body`.
	 * @param ctx the parse tree
	 */
	enterFunc_body?: (ctx: Func_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.func_body`.
	 * @param ctx the parse tree
	 */
	exitFunc_body?: (ctx: Func_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.offset`.
	 * @param ctx the parse tree
	 */
	enterOffset?: (ctx: OffsetContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.offset`.
	 * @param ctx the parse tree
	 */
	exitOffset?: (ctx: OffsetContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.elem`.
	 * @param ctx the parse tree
	 */
	enterElem?: (ctx: ElemContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.elem`.
	 * @param ctx the parse tree
	 */
	exitElem?: (ctx: ElemContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.table`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.table`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.table_fields`.
	 * @param ctx the parse tree
	 */
	enterTable_fields?: (ctx: Table_fieldsContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.table_fields`.
	 * @param ctx the parse tree
	 */
	exitTable_fields?: (ctx: Table_fieldsContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.data`.
	 * @param ctx the parse tree
	 */
	enterData?: (ctx: DataContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.data`.
	 * @param ctx the parse tree
	 */
	exitData?: (ctx: DataContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.memory`.
	 * @param ctx the parse tree
	 */
	enterMemory?: (ctx: MemoryContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.memory`.
	 * @param ctx the parse tree
	 */
	exitMemory?: (ctx: MemoryContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.memory_fields`.
	 * @param ctx the parse tree
	 */
	enterMemory_fields?: (ctx: Memory_fieldsContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.memory_fields`.
	 * @param ctx the parse tree
	 */
	exitMemory_fields?: (ctx: Memory_fieldsContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.sglobal`.
	 * @param ctx the parse tree
	 */
	enterSglobal?: (ctx: SglobalContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.sglobal`.
	 * @param ctx the parse tree
	 */
	exitSglobal?: (ctx: SglobalContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.global_fields`.
	 * @param ctx the parse tree
	 */
	enterGlobal_fields?: (ctx: Global_fieldsContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.global_fields`.
	 * @param ctx the parse tree
	 */
	exitGlobal_fields?: (ctx: Global_fieldsContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.import_desc`.
	 * @param ctx the parse tree
	 */
	enterImport_desc?: (ctx: Import_descContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.import_desc`.
	 * @param ctx the parse tree
	 */
	exitImport_desc?: (ctx: Import_descContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.simport`.
	 * @param ctx the parse tree
	 */
	enterSimport?: (ctx: SimportContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.simport`.
	 * @param ctx the parse tree
	 */
	exitSimport?: (ctx: SimportContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.inline_import`.
	 * @param ctx the parse tree
	 */
	enterInline_import?: (ctx: Inline_importContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.inline_import`.
	 * @param ctx the parse tree
	 */
	exitInline_import?: (ctx: Inline_importContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.export_desc`.
	 * @param ctx the parse tree
	 */
	enterExport_desc?: (ctx: Export_descContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.export_desc`.
	 * @param ctx the parse tree
	 */
	exitExport_desc?: (ctx: Export_descContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.export`.
	 * @param ctx the parse tree
	 */
	enterExport?: (ctx: ExportContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.export`.
	 * @param ctx the parse tree
	 */
	exitExport?: (ctx: ExportContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.inline_export`.
	 * @param ctx the parse tree
	 */
	enterInline_export?: (ctx: Inline_exportContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.inline_export`.
	 * @param ctx the parse tree
	 */
	exitInline_export?: (ctx: Inline_exportContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `WatParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `WatParser.type_def`.
	 * @param ctx the parse tree
	 */
	enterType_def?: (ctx: Type_defContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.type_def`.
	 * @param ctx the parse tree
	 */
	exitType_def?: (ctx: Type_defContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.module_field`.
	 * @param ctx the parse tree
	 */
	enterModule_field?: (ctx: Module_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.module_field`.
	 * @param ctx the parse tree
	 */
	exitModule_field?: (ctx: Module_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.module_`.
	 * @param ctx the parse tree
	 */
	enterModule_?: (ctx: Module_Context) => void;
	/**
	 * Exit a parse tree produced by `WatParser.module_`.
	 * @param ctx the parse tree
	 */
	exitModule_?: (ctx: Module_Context) => void;

	/**
	 * Enter a parse tree produced by `WatParser.script_module`.
	 * @param ctx the parse tree
	 */
	enterScript_module?: (ctx: Script_moduleContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.script_module`.
	 * @param ctx the parse tree
	 */
	exitScript_module?: (ctx: Script_moduleContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.assertion`.
	 * @param ctx the parse tree
	 */
	enterAssertion?: (ctx: AssertionContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.assertion`.
	 * @param ctx the parse tree
	 */
	exitAssertion?: (ctx: AssertionContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.cmd`.
	 * @param ctx the parse tree
	 */
	enterCmd?: (ctx: CmdContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.cmd`.
	 * @param ctx the parse tree
	 */
	exitCmd?: (ctx: CmdContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.meta`.
	 * @param ctx the parse tree
	 */
	enterMeta?: (ctx: MetaContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.meta`.
	 * @param ctx the parse tree
	 */
	exitMeta?: (ctx: MetaContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.wconst`.
	 * @param ctx the parse tree
	 */
	enterWconst?: (ctx: WconstContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.wconst`.
	 * @param ctx the parse tree
	 */
	exitWconst?: (ctx: WconstContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.const_list`.
	 * @param ctx the parse tree
	 */
	enterConst_list?: (ctx: Const_listContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.const_list`.
	 * @param ctx the parse tree
	 */
	exitConst_list?: (ctx: Const_listContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.script`.
	 * @param ctx the parse tree
	 */
	enterScript?: (ctx: ScriptContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.script`.
	 * @param ctx the parse tree
	 */
	exitScript?: (ctx: ScriptContext) => void;

	/**
	 * Enter a parse tree produced by `WatParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `WatParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;
}

