// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wat/WatParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `WatParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface WatParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `WatParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.value_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_type?: (ctx: Value_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.elem_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElem_type?: (ctx: Elem_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.global_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_type?: (ctx: Global_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.def_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDef_type?: (ctx: Def_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.func_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_type?: (ctx: Func_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.table_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_type?: (ctx: Table_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.memory_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemory_type?: (ctx: Memory_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.type_use`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_use?: (ctx: Type_useContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.bind_var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBind_var?: (ctx: Bind_varContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstr?: (ctx: InstrContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.plain_instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlain_instr?: (ctx: Plain_instrContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.call_instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_instr?: (ctx: Call_instrContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.call_instr_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_instr_params?: (ctx: Call_instr_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.call_instr_instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_instr_instr?: (ctx: Call_instr_instrContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.call_instr_params_instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_instr_params_instr?: (ctx: Call_instr_params_instrContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.call_instr_results_instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_instr_results_instr?: (ctx: Call_instr_results_instrContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.block_instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_instr?: (ctx: Block_instrContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.block_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_type?: (ctx: Block_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.expr1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr1?: (ctx: Expr1Context) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.call_expr_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_expr_type?: (ctx: Call_expr_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.call_expr_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_expr_params?: (ctx: Call_expr_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.call_expr_results`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_expr_results?: (ctx: Call_expr_resultsContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.if_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_block?: (ctx: If_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.instr_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstr_list?: (ctx: Instr_listContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.const_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_expr?: (ctx: Const_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.func_fields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_fields?: (ctx: Func_fieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.func_fields_import`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_fields_import?: (ctx: Func_fields_importContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.func_fields_import_result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_fields_import_result?: (ctx: Func_fields_import_resultContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.func_fields_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_fields_body?: (ctx: Func_fields_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.func_result_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_result_body?: (ctx: Func_result_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.func_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_body?: (ctx: Func_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset?: (ctx: OffsetContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElem?: (ctx: ElemContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.table_fields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_fields?: (ctx: Table_fieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData?: (ctx: DataContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.memory`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemory?: (ctx: MemoryContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.memory_fields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemory_fields?: (ctx: Memory_fieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.sglobal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSglobal?: (ctx: SglobalContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.global_fields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_fields?: (ctx: Global_fieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.import_desc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_desc?: (ctx: Import_descContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.simport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimport?: (ctx: SimportContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.inline_import`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline_import?: (ctx: Inline_importContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.export_desc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExport_desc?: (ctx: Export_descContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.export`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExport?: (ctx: ExportContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.inline_export`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline_export?: (ctx: Inline_exportContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.type_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_def?: (ctx: Type_defContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.module_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_field?: (ctx: Module_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.module_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule_?: (ctx: Module_Context) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.script_module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript_module?: (ctx: Script_moduleContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.assertion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertion?: (ctx: AssertionContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.cmd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd?: (ctx: CmdContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.meta`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeta?: (ctx: MetaContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.wconst`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWconst?: (ctx: WconstContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.const_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_list?: (ctx: Const_listContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `WatParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;
}

