// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/python/python3alt/AltPython3.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Single_inputContext } from "./AltPython3Parser";
import { File_inputContext } from "./AltPython3Parser";
import { Eval_inputContext } from "./AltPython3Parser";
import { DecoratorContext } from "./AltPython3Parser";
import { DecoratorsContext } from "./AltPython3Parser";
import { DecoratedContext } from "./AltPython3Parser";
import { FuncdefContext } from "./AltPython3Parser";
import { ParametersContext } from "./AltPython3Parser";
import { TypedargslistContext } from "./AltPython3Parser";
import { TfpdefContext } from "./AltPython3Parser";
import { VarargslistContext } from "./AltPython3Parser";
import { VfpdefContext } from "./AltPython3Parser";
import { StmtContext } from "./AltPython3Parser";
import { Simple_stmtContext } from "./AltPython3Parser";
import { Small_stmtContext } from "./AltPython3Parser";
import { Print_stmtContext } from "./AltPython3Parser";
import { Expr_stmtContext } from "./AltPython3Parser";
import { Testlist_star_exprContext } from "./AltPython3Parser";
import { AugassignContext } from "./AltPython3Parser";
import { Del_stmtContext } from "./AltPython3Parser";
import { Pass_stmtContext } from "./AltPython3Parser";
import { Flow_stmtContext } from "./AltPython3Parser";
import { Break_stmtContext } from "./AltPython3Parser";
import { Continue_stmtContext } from "./AltPython3Parser";
import { Return_stmtContext } from "./AltPython3Parser";
import { Yield_stmtContext } from "./AltPython3Parser";
import { Raise_stmtContext } from "./AltPython3Parser";
import { Import_stmtContext } from "./AltPython3Parser";
import { Import_nameContext } from "./AltPython3Parser";
import { Import_fromContext } from "./AltPython3Parser";
import { Import_as_nameContext } from "./AltPython3Parser";
import { Dotted_as_nameContext } from "./AltPython3Parser";
import { Import_as_namesContext } from "./AltPython3Parser";
import { Dotted_as_namesContext } from "./AltPython3Parser";
import { Dotted_nameContext } from "./AltPython3Parser";
import { Global_stmtContext } from "./AltPython3Parser";
import { Nonlocal_stmtContext } from "./AltPython3Parser";
import { Assert_stmtContext } from "./AltPython3Parser";
import { Compound_stmtContext } from "./AltPython3Parser";
import { If_stmtContext } from "./AltPython3Parser";
import { While_stmtContext } from "./AltPython3Parser";
import { For_stmtContext } from "./AltPython3Parser";
import { Try_stmtContext } from "./AltPython3Parser";
import { With_stmtContext } from "./AltPython3Parser";
import { With_itemContext } from "./AltPython3Parser";
import { Except_clauseContext } from "./AltPython3Parser";
import { SuiteContext } from "./AltPython3Parser";
import { TestContext } from "./AltPython3Parser";
import { Test_nocondContext } from "./AltPython3Parser";
import { LambdefContext } from "./AltPython3Parser";
import { Lambdef_nocondContext } from "./AltPython3Parser";
import { Or_testContext } from "./AltPython3Parser";
import { And_testContext } from "./AltPython3Parser";
import { Not_testContext } from "./AltPython3Parser";
import { ComparisonContext } from "./AltPython3Parser";
import { Comp_opContext } from "./AltPython3Parser";
import { Star_exprContext } from "./AltPython3Parser";
import { ExprContext } from "./AltPython3Parser";
import { Xor_exprContext } from "./AltPython3Parser";
import { And_exprContext } from "./AltPython3Parser";
import { Shift_exprContext } from "./AltPython3Parser";
import { Arith_exprContext } from "./AltPython3Parser";
import { TermContext } from "./AltPython3Parser";
import { FactorContext } from "./AltPython3Parser";
import { PowerContext } from "./AltPython3Parser";
import { AtomContext } from "./AltPython3Parser";
import { Testlist_compContext } from "./AltPython3Parser";
import { TrailerContext } from "./AltPython3Parser";
import { SubscriptlistContext } from "./AltPython3Parser";
import { SubscriptContext } from "./AltPython3Parser";
import { SliceopContext } from "./AltPython3Parser";
import { ExprlistContext } from "./AltPython3Parser";
import { TestlistContext } from "./AltPython3Parser";
import { DictorsetmakerContext } from "./AltPython3Parser";
import { ClassdefContext } from "./AltPython3Parser";
import { ArglistContext } from "./AltPython3Parser";
import { ArgumentContext } from "./AltPython3Parser";
import { Comp_iterContext } from "./AltPython3Parser";
import { Comp_forContext } from "./AltPython3Parser";
import { Comp_ifContext } from "./AltPython3Parser";
import { Yield_exprContext } from "./AltPython3Parser";
import { Yield_argContext } from "./AltPython3Parser";
import { StrContext } from "./AltPython3Parser";
import { NumberContext } from "./AltPython3Parser";
import { IntegerContext } from "./AltPython3Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AltPython3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AltPython3Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AltPython3Parser.single_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_input?: (ctx: Single_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.file_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_input?: (ctx: File_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.eval_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEval_input?: (ctx: Eval_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.decorator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorator?: (ctx: DecoratorContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.decorators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorators?: (ctx: DecoratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.decorated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorated?: (ctx: DecoratedContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.funcdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncdef?: (ctx: FuncdefContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.typedargslist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedargslist?: (ctx: TypedargslistContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.tfpdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTfpdef?: (ctx: TfpdefContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.varargslist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarargslist?: (ctx: VarargslistContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.vfpdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVfpdef?: (ctx: VfpdefContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.simple_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_stmt?: (ctx: Simple_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSmall_stmt?: (ctx: Small_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.print_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint_stmt?: (ctx: Print_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.expr_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_stmt?: (ctx: Expr_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.testlist_star_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist_star_expr?: (ctx: Testlist_star_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.augassign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAugassign?: (ctx: AugassignContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.del_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDel_stmt?: (ctx: Del_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.pass_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPass_stmt?: (ctx: Pass_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.flow_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_stmt?: (ctx: Flow_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.break_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_stmt?: (ctx: Break_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.continue_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_stmt?: (ctx: Continue_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.return_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_stmt?: (ctx: Return_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.yield_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_stmt?: (ctx: Yield_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.raise_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaise_stmt?: (ctx: Raise_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.import_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_stmt?: (ctx: Import_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.import_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_name?: (ctx: Import_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.import_from`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_from?: (ctx: Import_fromContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.import_as_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_as_name?: (ctx: Import_as_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.dotted_as_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_as_name?: (ctx: Dotted_as_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.import_as_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_as_names?: (ctx: Import_as_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.dotted_as_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_as_names?: (ctx: Dotted_as_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.dotted_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_name?: (ctx: Dotted_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.global_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_stmt?: (ctx: Global_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.nonlocal_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonlocal_stmt?: (ctx: Nonlocal_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.assert_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert_stmt?: (ctx: Assert_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_stmt?: (ctx: Compound_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.while_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_stmt?: (ctx: While_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.for_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_stmt?: (ctx: For_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.try_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_stmt?: (ctx: Try_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.with_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_stmt?: (ctx: With_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.with_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_item?: (ctx: With_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.except_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcept_clause?: (ctx: Except_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.suite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuite?: (ctx: SuiteContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTest?: (ctx: TestContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.test_nocond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTest_nocond?: (ctx: Test_nocondContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.lambdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdef?: (ctx: LambdefContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.lambdef_nocond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdef_nocond?: (ctx: Lambdef_nocondContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.or_test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr_test?: (ctx: Or_testContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.and_test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_test?: (ctx: And_testContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.not_test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot_test?: (ctx: Not_testContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.comp_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_op?: (ctx: Comp_opContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.star_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar_expr?: (ctx: Star_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.xor_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXor_expr?: (ctx: Xor_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.and_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expr?: (ctx: And_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.shift_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expr?: (ctx: Shift_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.arith_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArith_expr?: (ctx: Arith_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.power`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.testlist_comp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist_comp?: (ctx: Testlist_compContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.trailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailer?: (ctx: TrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.subscriptlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptlist?: (ctx: SubscriptlistContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.sliceop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceop?: (ctx: SliceopContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.testlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist?: (ctx: TestlistContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.dictorsetmaker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictorsetmaker?: (ctx: DictorsetmakerContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.classdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassdef?: (ctx: ClassdefContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.arglist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArglist?: (ctx: ArglistContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.comp_iter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_iter?: (ctx: Comp_iterContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.comp_for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_for?: (ctx: Comp_forContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.comp_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_if?: (ctx: Comp_ifContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.yield_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_expr?: (ctx: Yield_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.yield_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_arg?: (ctx: Yield_argContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStr?: (ctx: StrContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `AltPython3Parser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;
}

