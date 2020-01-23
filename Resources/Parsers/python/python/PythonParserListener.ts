// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/python/python/PythonParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PythonParser`.
 */
export interface PythonParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `if_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `if_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `while_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `while_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitWhile_stmt?: (ctx: While_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `for_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `for_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `try_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterTry_stmt?: (ctx: Try_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `try_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitTry_stmt?: (ctx: Try_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `with_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterWith_stmt?: (ctx: With_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `with_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitWith_stmt?: (ctx: With_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `class_or_func_def_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterClass_or_func_def_stmt?: (ctx: Class_or_func_def_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `class_or_func_def_stmt`
	 * labeled alternative in `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitClass_or_func_def_stmt?: (ctx: Class_or_func_def_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `expr_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterExpr_stmt?: (ctx: Expr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `expr_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitExpr_stmt?: (ctx: Expr_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `print_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterPrint_stmt?: (ctx: Print_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `print_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitPrint_stmt?: (ctx: Print_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `del_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterDel_stmt?: (ctx: Del_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `del_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitDel_stmt?: (ctx: Del_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `pass_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterPass_stmt?: (ctx: Pass_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `pass_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitPass_stmt?: (ctx: Pass_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `break_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterBreak_stmt?: (ctx: Break_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `break_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitBreak_stmt?: (ctx: Break_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `continue_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterContinue_stmt?: (ctx: Continue_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `continue_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitContinue_stmt?: (ctx: Continue_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `return_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `return_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `raise_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterRaise_stmt?: (ctx: Raise_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `raise_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitRaise_stmt?: (ctx: Raise_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `yield_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterYield_stmt?: (ctx: Yield_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `yield_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitYield_stmt?: (ctx: Yield_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `import_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `import_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitImport_stmt?: (ctx: Import_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `from_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterFrom_stmt?: (ctx: From_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `from_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitFrom_stmt?: (ctx: From_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `global_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterGlobal_stmt?: (ctx: Global_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `global_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitGlobal_stmt?: (ctx: Global_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `exec_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterExec_stmt?: (ctx: Exec_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `exec_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitExec_stmt?: (ctx: Exec_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `assert_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterAssert_stmt?: (ctx: Assert_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `assert_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitAssert_stmt?: (ctx: Assert_stmtContext) => void;

	/**
	 * Enter a parse tree produced by the `nonlocal_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterNonlocal_stmt?: (ctx: Nonlocal_stmtContext) => void;
	/**
	 * Exit a parse tree produced by the `nonlocal_stmt`
	 * labeled alternative in `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitNonlocal_stmt?: (ctx: Nonlocal_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.single_input`.
	 * @param ctx the parse tree
	 */
	enterSingle_input?: (ctx: Single_inputContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.single_input`.
	 * @param ctx the parse tree
	 */
	exitSingle_input?: (ctx: Single_inputContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.file_input`.
	 * @param ctx the parse tree
	 */
	enterFile_input?: (ctx: File_inputContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.file_input`.
	 * @param ctx the parse tree
	 */
	exitFile_input?: (ctx: File_inputContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.eval_input`.
	 * @param ctx the parse tree
	 */
	enterEval_input?: (ctx: Eval_inputContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.eval_input`.
	 * @param ctx the parse tree
	 */
	exitEval_input?: (ctx: Eval_inputContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterCompound_stmt?: (ctx: Compound_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitCompound_stmt?: (ctx: Compound_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.suite`.
	 * @param ctx the parse tree
	 */
	enterSuite?: (ctx: SuiteContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.suite`.
	 * @param ctx the parse tree
	 */
	exitSuite?: (ctx: SuiteContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.decorator`.
	 * @param ctx the parse tree
	 */
	enterDecorator?: (ctx: DecoratorContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.decorator`.
	 * @param ctx the parse tree
	 */
	exitDecorator?: (ctx: DecoratorContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.elif_clause`.
	 * @param ctx the parse tree
	 */
	enterElif_clause?: (ctx: Elif_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.elif_clause`.
	 * @param ctx the parse tree
	 */
	exitElif_clause?: (ctx: Elif_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.else_clause`.
	 * @param ctx the parse tree
	 */
	enterElse_clause?: (ctx: Else_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.else_clause`.
	 * @param ctx the parse tree
	 */
	exitElse_clause?: (ctx: Else_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.finally_clause`.
	 * @param ctx the parse tree
	 */
	enterFinally_clause?: (ctx: Finally_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.finally_clause`.
	 * @param ctx the parse tree
	 */
	exitFinally_clause?: (ctx: Finally_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.with_item`.
	 * @param ctx the parse tree
	 */
	enterWith_item?: (ctx: With_itemContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.with_item`.
	 * @param ctx the parse tree
	 */
	exitWith_item?: (ctx: With_itemContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.except_clause`.
	 * @param ctx the parse tree
	 */
	enterExcept_clause?: (ctx: Except_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.except_clause`.
	 * @param ctx the parse tree
	 */
	exitExcept_clause?: (ctx: Except_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.classdef`.
	 * @param ctx the parse tree
	 */
	enterClassdef?: (ctx: ClassdefContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.classdef`.
	 * @param ctx the parse tree
	 */
	exitClassdef?: (ctx: ClassdefContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.funcdef`.
	 * @param ctx the parse tree
	 */
	enterFuncdef?: (ctx: FuncdefContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.funcdef`.
	 * @param ctx the parse tree
	 */
	exitFuncdef?: (ctx: FuncdefContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.typedargslist`.
	 * @param ctx the parse tree
	 */
	enterTypedargslist?: (ctx: TypedargslistContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.typedargslist`.
	 * @param ctx the parse tree
	 */
	exitTypedargslist?: (ctx: TypedargslistContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.kwargs`.
	 * @param ctx the parse tree
	 */
	enterKwargs?: (ctx: KwargsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.kwargs`.
	 * @param ctx the parse tree
	 */
	exitKwargs?: (ctx: KwargsContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.def_parameters`.
	 * @param ctx the parse tree
	 */
	enterDef_parameters?: (ctx: Def_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.def_parameters`.
	 * @param ctx the parse tree
	 */
	exitDef_parameters?: (ctx: Def_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.def_parameter`.
	 * @param ctx the parse tree
	 */
	enterDef_parameter?: (ctx: Def_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.def_parameter`.
	 * @param ctx the parse tree
	 */
	exitDef_parameter?: (ctx: Def_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.named_parameter`.
	 * @param ctx the parse tree
	 */
	enterNamed_parameter?: (ctx: Named_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.named_parameter`.
	 * @param ctx the parse tree
	 */
	exitNamed_parameter?: (ctx: Named_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.simple_stmt`.
	 * @param ctx the parse tree
	 */
	enterSimple_stmt?: (ctx: Simple_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.simple_stmt`.
	 * @param ctx the parse tree
	 */
	exitSimple_stmt?: (ctx: Simple_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterSmall_stmt?: (ctx: Small_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitSmall_stmt?: (ctx: Small_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.testlist_star_expr`.
	 * @param ctx the parse tree
	 */
	enterTestlist_star_expr?: (ctx: Testlist_star_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.testlist_star_expr`.
	 * @param ctx the parse tree
	 */
	exitTestlist_star_expr?: (ctx: Testlist_star_exprContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.star_expr`.
	 * @param ctx the parse tree
	 */
	enterStar_expr?: (ctx: Star_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.star_expr`.
	 * @param ctx the parse tree
	 */
	exitStar_expr?: (ctx: Star_exprContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.assign_part`.
	 * @param ctx the parse tree
	 */
	enterAssign_part?: (ctx: Assign_partContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.assign_part`.
	 * @param ctx the parse tree
	 */
	exitAssign_part?: (ctx: Assign_partContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.exprlist`.
	 * @param ctx the parse tree
	 */
	enterExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.exprlist`.
	 * @param ctx the parse tree
	 */
	exitExprlist?: (ctx: ExprlistContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.import_as_names`.
	 * @param ctx the parse tree
	 */
	enterImport_as_names?: (ctx: Import_as_namesContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.import_as_names`.
	 * @param ctx the parse tree
	 */
	exitImport_as_names?: (ctx: Import_as_namesContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.import_as_name`.
	 * @param ctx the parse tree
	 */
	enterImport_as_name?: (ctx: Import_as_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.import_as_name`.
	 * @param ctx the parse tree
	 */
	exitImport_as_name?: (ctx: Import_as_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.dotted_as_names`.
	 * @param ctx the parse tree
	 */
	enterDotted_as_names?: (ctx: Dotted_as_namesContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dotted_as_names`.
	 * @param ctx the parse tree
	 */
	exitDotted_as_names?: (ctx: Dotted_as_namesContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.dotted_as_name`.
	 * @param ctx the parse tree
	 */
	enterDotted_as_name?: (ctx: Dotted_as_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dotted_as_name`.
	 * @param ctx the parse tree
	 */
	exitDotted_as_name?: (ctx: Dotted_as_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.test`.
	 * @param ctx the parse tree
	 */
	enterTest?: (ctx: TestContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.test`.
	 * @param ctx the parse tree
	 */
	exitTest?: (ctx: TestContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.varargslist`.
	 * @param ctx the parse tree
	 */
	enterVarargslist?: (ctx: VarargslistContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.varargslist`.
	 * @param ctx the parse tree
	 */
	exitVarargslist?: (ctx: VarargslistContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.vardef_parameters`.
	 * @param ctx the parse tree
	 */
	enterVardef_parameters?: (ctx: Vardef_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.vardef_parameters`.
	 * @param ctx the parse tree
	 */
	exitVardef_parameters?: (ctx: Vardef_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.vardef_parameter`.
	 * @param ctx the parse tree
	 */
	enterVardef_parameter?: (ctx: Vardef_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.vardef_parameter`.
	 * @param ctx the parse tree
	 */
	exitVardef_parameter?: (ctx: Vardef_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.varargs`.
	 * @param ctx the parse tree
	 */
	enterVarargs?: (ctx: VarargsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.varargs`.
	 * @param ctx the parse tree
	 */
	exitVarargs?: (ctx: VarargsContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.varkwargs`.
	 * @param ctx the parse tree
	 */
	enterVarkwargs?: (ctx: VarkwargsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.varkwargs`.
	 * @param ctx the parse tree
	 */
	exitVarkwargs?: (ctx: VarkwargsContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.logical_test`.
	 * @param ctx the parse tree
	 */
	enterLogical_test?: (ctx: Logical_testContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.logical_test`.
	 * @param ctx the parse tree
	 */
	exitLogical_test?: (ctx: Logical_testContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.dictorsetmaker`.
	 * @param ctx the parse tree
	 */
	enterDictorsetmaker?: (ctx: DictorsetmakerContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dictorsetmaker`.
	 * @param ctx the parse tree
	 */
	exitDictorsetmaker?: (ctx: DictorsetmakerContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.testlist_comp`.
	 * @param ctx the parse tree
	 */
	enterTestlist_comp?: (ctx: Testlist_compContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.testlist_comp`.
	 * @param ctx the parse tree
	 */
	exitTestlist_comp?: (ctx: Testlist_compContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.testlist`.
	 * @param ctx the parse tree
	 */
	enterTestlist?: (ctx: TestlistContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.testlist`.
	 * @param ctx the parse tree
	 */
	exitTestlist?: (ctx: TestlistContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.dotted_name`.
	 * @param ctx the parse tree
	 */
	enterDotted_name?: (ctx: Dotted_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.dotted_name`.
	 * @param ctx the parse tree
	 */
	exitDotted_name?: (ctx: Dotted_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.yield_expr`.
	 * @param ctx the parse tree
	 */
	enterYield_expr?: (ctx: Yield_exprContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.yield_expr`.
	 * @param ctx the parse tree
	 */
	exitYield_expr?: (ctx: Yield_exprContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.yield_arg`.
	 * @param ctx the parse tree
	 */
	enterYield_arg?: (ctx: Yield_argContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.yield_arg`.
	 * @param ctx the parse tree
	 */
	exitYield_arg?: (ctx: Yield_argContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.trailer`.
	 * @param ctx the parse tree
	 */
	enterTrailer?: (ctx: TrailerContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.trailer`.
	 * @param ctx the parse tree
	 */
	exitTrailer?: (ctx: TrailerContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglist?: (ctx: ArglistContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglist?: (ctx: ArglistContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.subscriptlist`.
	 * @param ctx the parse tree
	 */
	enterSubscriptlist?: (ctx: SubscriptlistContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.subscriptlist`.
	 * @param ctx the parse tree
	 */
	exitSubscriptlist?: (ctx: SubscriptlistContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.subscript`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.subscript`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.sliceop`.
	 * @param ctx the parse tree
	 */
	enterSliceop?: (ctx: SliceopContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.sliceop`.
	 * @param ctx the parse tree
	 */
	exitSliceop?: (ctx: SliceopContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.comp_for`.
	 * @param ctx the parse tree
	 */
	enterComp_for?: (ctx: Comp_forContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.comp_for`.
	 * @param ctx the parse tree
	 */
	exitComp_for?: (ctx: Comp_forContext) => void;

	/**
	 * Enter a parse tree produced by `PythonParser.comp_iter`.
	 * @param ctx the parse tree
	 */
	enterComp_iter?: (ctx: Comp_iterContext) => void;
	/**
	 * Exit a parse tree produced by `PythonParser.comp_iter`.
	 * @param ctx the parse tree
	 */
	exitComp_iter?: (ctx: Comp_iterContext) => void;
}

