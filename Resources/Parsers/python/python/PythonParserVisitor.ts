// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/python/python/PythonParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { If_stmtContext } from "./PythonParser";
import { While_stmtContext } from "./PythonParser";
import { For_stmtContext } from "./PythonParser";
import { Try_stmtContext } from "./PythonParser";
import { With_stmtContext } from "./PythonParser";
import { Class_or_func_def_stmtContext } from "./PythonParser";
import { Expr_stmtContext } from "./PythonParser";
import { Print_stmtContext } from "./PythonParser";
import { Del_stmtContext } from "./PythonParser";
import { Pass_stmtContext } from "./PythonParser";
import { Break_stmtContext } from "./PythonParser";
import { Continue_stmtContext } from "./PythonParser";
import { Return_stmtContext } from "./PythonParser";
import { Raise_stmtContext } from "./PythonParser";
import { Yield_stmtContext } from "./PythonParser";
import { Import_stmtContext } from "./PythonParser";
import { From_stmtContext } from "./PythonParser";
import { Global_stmtContext } from "./PythonParser";
import { Exec_stmtContext } from "./PythonParser";
import { Assert_stmtContext } from "./PythonParser";
import { Nonlocal_stmtContext } from "./PythonParser";
import { RootContext } from "./PythonParser";
import { Single_inputContext } from "./PythonParser";
import { File_inputContext } from "./PythonParser";
import { Eval_inputContext } from "./PythonParser";
import { StmtContext } from "./PythonParser";
import { Compound_stmtContext } from "./PythonParser";
import { SuiteContext } from "./PythonParser";
import { DecoratorContext } from "./PythonParser";
import { Elif_clauseContext } from "./PythonParser";
import { Else_clauseContext } from "./PythonParser";
import { Finally_clauseContext } from "./PythonParser";
import { With_itemContext } from "./PythonParser";
import { Except_clauseContext } from "./PythonParser";
import { ClassdefContext } from "./PythonParser";
import { FuncdefContext } from "./PythonParser";
import { TypedargslistContext } from "./PythonParser";
import { ArgsContext } from "./PythonParser";
import { KwargsContext } from "./PythonParser";
import { Def_parametersContext } from "./PythonParser";
import { Def_parameterContext } from "./PythonParser";
import { Named_parameterContext } from "./PythonParser";
import { Simple_stmtContext } from "./PythonParser";
import { Small_stmtContext } from "./PythonParser";
import { Testlist_star_exprContext } from "./PythonParser";
import { Star_exprContext } from "./PythonParser";
import { Assign_partContext } from "./PythonParser";
import { ExprlistContext } from "./PythonParser";
import { Import_as_namesContext } from "./PythonParser";
import { Import_as_nameContext } from "./PythonParser";
import { Dotted_as_namesContext } from "./PythonParser";
import { Dotted_as_nameContext } from "./PythonParser";
import { TestContext } from "./PythonParser";
import { VarargslistContext } from "./PythonParser";
import { Vardef_parametersContext } from "./PythonParser";
import { Vardef_parameterContext } from "./PythonParser";
import { VarargsContext } from "./PythonParser";
import { VarkwargsContext } from "./PythonParser";
import { Logical_testContext } from "./PythonParser";
import { ComparisonContext } from "./PythonParser";
import { ExprContext } from "./PythonParser";
import { AtomContext } from "./PythonParser";
import { DictorsetmakerContext } from "./PythonParser";
import { Testlist_compContext } from "./PythonParser";
import { TestlistContext } from "./PythonParser";
import { Dotted_nameContext } from "./PythonParser";
import { NameContext } from "./PythonParser";
import { NumberContext } from "./PythonParser";
import { IntegerContext } from "./PythonParser";
import { Yield_exprContext } from "./PythonParser";
import { Yield_argContext } from "./PythonParser";
import { TrailerContext } from "./PythonParser";
import { ArgumentsContext } from "./PythonParser";
import { ArglistContext } from "./PythonParser";
import { ArgumentContext } from "./PythonParser";
import { SubscriptlistContext } from "./PythonParser";
import { SubscriptContext } from "./PythonParser";
import { SliceopContext } from "./PythonParser";
import { Comp_forContext } from "./PythonParser";
import { Comp_iterContext } from "./PythonParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PythonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PythonParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `if_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `while_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_stmt?: (ctx: While_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `for_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_stmt?: (ctx: For_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `try_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_stmt?: (ctx: Try_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `with_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_stmt?: (ctx: With_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `class_or_func_def_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_or_func_def_stmt?: (ctx: Class_or_func_def_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `expr_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_stmt?: (ctx: Expr_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `print_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint_stmt?: (ctx: Print_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `del_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDel_stmt?: (ctx: Del_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `pass_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPass_stmt?: (ctx: Pass_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `break_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_stmt?: (ctx: Break_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `continue_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_stmt?: (ctx: Continue_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `return_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_stmt?: (ctx: Return_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `raise_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaise_stmt?: (ctx: Raise_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `yield_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_stmt?: (ctx: Yield_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `import_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_stmt?: (ctx: Import_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `from_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_stmt?: (ctx: From_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `global_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_stmt?: (ctx: Global_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `exec_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_stmt?: (ctx: Exec_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `assert_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert_stmt?: (ctx: Assert_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonlocal_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonlocal_stmt?: (ctx: Nonlocal_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.single_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_input?: (ctx: Single_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.file_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_input?: (ctx: File_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.eval_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEval_input?: (ctx: Eval_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_stmt?: (ctx: Compound_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.suite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuite?: (ctx: SuiteContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.decorator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorator?: (ctx: DecoratorContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.elif_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElif_clause?: (ctx: Elif_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.else_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_clause?: (ctx: Else_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.finally_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinally_clause?: (ctx: Finally_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.with_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_item?: (ctx: With_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.except_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcept_clause?: (ctx: Except_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.classdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassdef?: (ctx: ClassdefContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.funcdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncdef?: (ctx: FuncdefContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.typedargslist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedargslist?: (ctx: TypedargslistContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.kwargs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwargs?: (ctx: KwargsContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.def_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDef_parameters?: (ctx: Def_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.def_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDef_parameter?: (ctx: Def_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.named_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamed_parameter?: (ctx: Named_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.simple_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_stmt?: (ctx: Simple_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSmall_stmt?: (ctx: Small_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.testlist_star_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist_star_expr?: (ctx: Testlist_star_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.star_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_expr?: (ctx: Star_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.assign_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_part?: (ctx: Assign_partContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.import_as_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_as_names?: (ctx: Import_as_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.import_as_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_as_name?: (ctx: Import_as_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.dotted_as_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_as_names?: (ctx: Dotted_as_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.dotted_as_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_as_name?: (ctx: Dotted_as_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTest?: (ctx: TestContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.varargslist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarargslist?: (ctx: VarargslistContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.vardef_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVardef_parameters?: (ctx: Vardef_parametersContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.vardef_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVardef_parameter?: (ctx: Vardef_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.varargs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarargs?: (ctx: VarargsContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.varkwargs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarkwargs?: (ctx: VarkwargsContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.logical_test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_test?: (ctx: Logical_testContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.dictorsetmaker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictorsetmaker?: (ctx: DictorsetmakerContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.testlist_comp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist_comp?: (ctx: Testlist_compContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.testlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist?: (ctx: TestlistContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.dotted_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_name?: (ctx: Dotted_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.yield_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_expr?: (ctx: Yield_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.yield_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_arg?: (ctx: Yield_argContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.trailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailer?: (ctx: TrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.arglist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArglist?: (ctx: ArglistContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.subscriptlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptlist?: (ctx: SubscriptlistContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.sliceop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceop?: (ctx: SliceopContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.comp_for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_for?: (ctx: Comp_forContext) => Result;

	/**
	 * Visit a parse tree produced by `PythonParser.comp_iter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_iter?: (ctx: Comp_iterContext) => Result;
}

