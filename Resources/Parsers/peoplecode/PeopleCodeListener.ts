// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/peoplecode/PeopleCode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExprParenthesizedContext } from "./PeopleCodeParser";
import { ExprDynamicReferenceContext } from "./PeopleCodeParser";
import { ExprLiteralContext } from "./PeopleCodeParser";
import { ExprIdContext } from "./PeopleCodeParser";
import { ExprCreateContext } from "./PeopleCodeParser";
import { ExprDotAccessContext } from "./PeopleCodeParser";
import { ExprArrayIndexContext } from "./PeopleCodeParser";
import { ExprFnOrIdxCallContext } from "./PeopleCodeParser";
import { ExprNegateContext } from "./PeopleCodeParser";
import { ExprNotContext } from "./PeopleCodeParser";
import { ExprMulDivContext } from "./PeopleCodeParser";
import { ExprAddSubContext } from "./PeopleCodeParser";
import { ExprComparisonContext } from "./PeopleCodeParser";
import { ExprEqualityContext } from "./PeopleCodeParser";
import { ExprBooleanContext } from "./PeopleCodeParser";
import { ExprConcatContext } from "./PeopleCodeParser";
import { StmtAppClassImportContext } from "./PeopleCodeParser";
import { StmtExternalFuncImportContext } from "./PeopleCodeParser";
import { StmtClassDeclarationContext } from "./PeopleCodeParser";
import { StmtMethodImplContext } from "./PeopleCodeParser";
import { StmtGetImplContext } from "./PeopleCodeParser";
import { StmtSetImplContext } from "./PeopleCodeParser";
import { StmtFuncImplContext } from "./PeopleCodeParser";
import { StmtVarDeclarationContext } from "./PeopleCodeParser";
import { StmtIfContext } from "./PeopleCodeParser";
import { StmtForContext } from "./PeopleCodeParser";
import { StmtWhileContext } from "./PeopleCodeParser";
import { StmtEvaluateContext } from "./PeopleCodeParser";
import { StmtTryCatchContext } from "./PeopleCodeParser";
import { StmtExitContext } from "./PeopleCodeParser";
import { StmtBreakContext } from "./PeopleCodeParser";
import { StmtErrorContext } from "./PeopleCodeParser";
import { StmtWarningContext } from "./PeopleCodeParser";
import { StmtReturnContext } from "./PeopleCodeParser";
import { StmtThrowContext } from "./PeopleCodeParser";
import { StmtAssignContext } from "./PeopleCodeParser";
import { StmtExprContext } from "./PeopleCodeParser";
import { ProgramContext } from "./PeopleCodeParser";
import { StmtListContext } from "./PeopleCodeParser";
import { StmtContext } from "./PeopleCodeParser";
import { ExprContext } from "./PeopleCodeParser";
import { ExprListContext } from "./PeopleCodeParser";
import { VarDeclarationContext } from "./PeopleCodeParser";
import { VarDeclaratorContext } from "./PeopleCodeParser";
import { VarTypeContext } from "./PeopleCodeParser";
import { AppClassImportContext } from "./PeopleCodeParser";
import { AppPkgPathContext } from "./PeopleCodeParser";
import { AppClassPathContext } from "./PeopleCodeParser";
import { ExtFuncImportContext } from "./PeopleCodeParser";
import { RecDefnPathContext } from "./PeopleCodeParser";
import { EventContext } from "./PeopleCodeParser";
import { ClassDeclarationContext } from "./PeopleCodeParser";
import { ClassBlockContext } from "./PeopleCodeParser";
import { ClassBlockStmtContext } from "./PeopleCodeParser";
import { MethodContext } from "./PeopleCodeParser";
import { ConstantContext } from "./PeopleCodeParser";
import { PropertyContext } from "./PeopleCodeParser";
import { InstanceContext } from "./PeopleCodeParser";
import { MethodImplContext } from "./PeopleCodeParser";
import { GetImplContext } from "./PeopleCodeParser";
import { SetImplContext } from "./PeopleCodeParser";
import { FuncImplContext } from "./PeopleCodeParser";
import { FuncSignatureContext } from "./PeopleCodeParser";
import { FormalParamListContext } from "./PeopleCodeParser";
import { ParamContext } from "./PeopleCodeParser";
import { ReturnTypeContext } from "./PeopleCodeParser";
import { IfStmtContext } from "./PeopleCodeParser";
import { ForStmtContext } from "./PeopleCodeParser";
import { WhileStmtContext } from "./PeopleCodeParser";
import { EvaluateStmtContext } from "./PeopleCodeParser";
import { WhenBranchContext } from "./PeopleCodeParser";
import { WhenOtherBranchContext } from "./PeopleCodeParser";
import { TryCatchStmtContext } from "./PeopleCodeParser";
import { CatchSignatureContext } from "./PeopleCodeParser";
import { CreateInvocationContext } from "./PeopleCodeParser";
import { LiteralContext } from "./PeopleCodeParser";
import { IdContext } from "./PeopleCodeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PeopleCodeParser`.
 */
export interface PeopleCodeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ExprParenthesized`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprParenthesized?: (ctx: ExprParenthesizedContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprParenthesized`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprParenthesized?: (ctx: ExprParenthesizedContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprDynamicReference`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprDynamicReference?: (ctx: ExprDynamicReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprDynamicReference`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprDynamicReference?: (ctx: ExprDynamicReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprLiteral`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprLiteral?: (ctx: ExprLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprLiteral`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprLiteral?: (ctx: ExprLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprId`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprId?: (ctx: ExprIdContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprId`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprId?: (ctx: ExprIdContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprCreate`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprCreate?: (ctx: ExprCreateContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprCreate`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprCreate?: (ctx: ExprCreateContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprDotAccess`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprDotAccess?: (ctx: ExprDotAccessContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprDotAccess`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprDotAccess?: (ctx: ExprDotAccessContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprArrayIndex`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprArrayIndex?: (ctx: ExprArrayIndexContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprArrayIndex`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprArrayIndex?: (ctx: ExprArrayIndexContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprFnOrIdxCall`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprFnOrIdxCall?: (ctx: ExprFnOrIdxCallContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprFnOrIdxCall`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprFnOrIdxCall?: (ctx: ExprFnOrIdxCallContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprNegate`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprNegate?: (ctx: ExprNegateContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprNegate`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprNegate?: (ctx: ExprNegateContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprNot`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprNot?: (ctx: ExprNotContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprNot`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprNot?: (ctx: ExprNotContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprMulDiv`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprMulDiv?: (ctx: ExprMulDivContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprMulDiv`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprMulDiv?: (ctx: ExprMulDivContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprAddSub`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprAddSub?: (ctx: ExprAddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprAddSub`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprAddSub?: (ctx: ExprAddSubContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprComparison`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprComparison?: (ctx: ExprComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprComparison`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprComparison?: (ctx: ExprComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprEquality`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprEquality?: (ctx: ExprEqualityContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprEquality`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprEquality?: (ctx: ExprEqualityContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprBoolean`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprBoolean?: (ctx: ExprBooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprBoolean`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprBoolean?: (ctx: ExprBooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprConcat`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprConcat?: (ctx: ExprConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprConcat`
	 * labeled alternative in `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprConcat?: (ctx: ExprConcatContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtAppClassImport`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtAppClassImport?: (ctx: StmtAppClassImportContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtAppClassImport`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtAppClassImport?: (ctx: StmtAppClassImportContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtExternalFuncImport`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtExternalFuncImport?: (ctx: StmtExternalFuncImportContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtExternalFuncImport`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtExternalFuncImport?: (ctx: StmtExternalFuncImportContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtClassDeclaration`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtClassDeclaration?: (ctx: StmtClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtClassDeclaration`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtClassDeclaration?: (ctx: StmtClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtMethodImpl`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtMethodImpl?: (ctx: StmtMethodImplContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtMethodImpl`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtMethodImpl?: (ctx: StmtMethodImplContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtGetImpl`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtGetImpl?: (ctx: StmtGetImplContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtGetImpl`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtGetImpl?: (ctx: StmtGetImplContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtSetImpl`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtSetImpl?: (ctx: StmtSetImplContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtSetImpl`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtSetImpl?: (ctx: StmtSetImplContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtFuncImpl`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtFuncImpl?: (ctx: StmtFuncImplContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtFuncImpl`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtFuncImpl?: (ctx: StmtFuncImplContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtVarDeclaration`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtVarDeclaration?: (ctx: StmtVarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtVarDeclaration`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtVarDeclaration?: (ctx: StmtVarDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtIf`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtIf?: (ctx: StmtIfContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtIf`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtIf?: (ctx: StmtIfContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtFor`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtFor?: (ctx: StmtForContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtFor`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtFor?: (ctx: StmtForContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtWhile`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtWhile?: (ctx: StmtWhileContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtWhile`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtWhile?: (ctx: StmtWhileContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtEvaluate`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtEvaluate?: (ctx: StmtEvaluateContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtEvaluate`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtEvaluate?: (ctx: StmtEvaluateContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtTryCatch`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtTryCatch?: (ctx: StmtTryCatchContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtTryCatch`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtTryCatch?: (ctx: StmtTryCatchContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtExit`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtExit?: (ctx: StmtExitContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtExit`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtExit?: (ctx: StmtExitContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtBreak`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtBreak?: (ctx: StmtBreakContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtBreak`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtBreak?: (ctx: StmtBreakContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtError`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtError?: (ctx: StmtErrorContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtError`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtError?: (ctx: StmtErrorContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtWarning`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtWarning?: (ctx: StmtWarningContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtWarning`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtWarning?: (ctx: StmtWarningContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtReturn`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtReturn?: (ctx: StmtReturnContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtReturn`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtReturn?: (ctx: StmtReturnContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtThrow`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtThrow?: (ctx: StmtThrowContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtThrow`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtThrow?: (ctx: StmtThrowContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtAssign`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtAssign?: (ctx: StmtAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtAssign`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtAssign?: (ctx: StmtAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `StmtExpr`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmtExpr?: (ctx: StmtExprContext) => void;
	/**
	 * Exit a parse tree produced by the `StmtExpr`
	 * labeled alternative in `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmtExpr?: (ctx: StmtExprContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.stmtList`.
	 * @param ctx the parse tree
	 */
	enterStmtList?: (ctx: StmtListContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.stmtList`.
	 * @param ctx the parse tree
	 */
	exitStmtList?: (ctx: StmtListContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.varDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVarDeclarator?: (ctx: VarDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.varDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVarDeclarator?: (ctx: VarDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.varType`.
	 * @param ctx the parse tree
	 */
	enterVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.varType`.
	 * @param ctx the parse tree
	 */
	exitVarType?: (ctx: VarTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.appClassImport`.
	 * @param ctx the parse tree
	 */
	enterAppClassImport?: (ctx: AppClassImportContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.appClassImport`.
	 * @param ctx the parse tree
	 */
	exitAppClassImport?: (ctx: AppClassImportContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.appPkgPath`.
	 * @param ctx the parse tree
	 */
	enterAppPkgPath?: (ctx: AppPkgPathContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.appPkgPath`.
	 * @param ctx the parse tree
	 */
	exitAppPkgPath?: (ctx: AppPkgPathContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.appClassPath`.
	 * @param ctx the parse tree
	 */
	enterAppClassPath?: (ctx: AppClassPathContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.appClassPath`.
	 * @param ctx the parse tree
	 */
	exitAppClassPath?: (ctx: AppClassPathContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.extFuncImport`.
	 * @param ctx the parse tree
	 */
	enterExtFuncImport?: (ctx: ExtFuncImportContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.extFuncImport`.
	 * @param ctx the parse tree
	 */
	exitExtFuncImport?: (ctx: ExtFuncImportContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.recDefnPath`.
	 * @param ctx the parse tree
	 */
	enterRecDefnPath?: (ctx: RecDefnPathContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.recDefnPath`.
	 * @param ctx the parse tree
	 */
	exitRecDefnPath?: (ctx: RecDefnPathContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.classBlock`.
	 * @param ctx the parse tree
	 */
	enterClassBlock?: (ctx: ClassBlockContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.classBlock`.
	 * @param ctx the parse tree
	 */
	exitClassBlock?: (ctx: ClassBlockContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.classBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterClassBlockStmt?: (ctx: ClassBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.classBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitClassBlockStmt?: (ctx: ClassBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.instance`.
	 * @param ctx the parse tree
	 */
	enterInstance?: (ctx: InstanceContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.instance`.
	 * @param ctx the parse tree
	 */
	exitInstance?: (ctx: InstanceContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.methodImpl`.
	 * @param ctx the parse tree
	 */
	enterMethodImpl?: (ctx: MethodImplContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.methodImpl`.
	 * @param ctx the parse tree
	 */
	exitMethodImpl?: (ctx: MethodImplContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.getImpl`.
	 * @param ctx the parse tree
	 */
	enterGetImpl?: (ctx: GetImplContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.getImpl`.
	 * @param ctx the parse tree
	 */
	exitGetImpl?: (ctx: GetImplContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.setImpl`.
	 * @param ctx the parse tree
	 */
	enterSetImpl?: (ctx: SetImplContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.setImpl`.
	 * @param ctx the parse tree
	 */
	exitSetImpl?: (ctx: SetImplContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.funcImpl`.
	 * @param ctx the parse tree
	 */
	enterFuncImpl?: (ctx: FuncImplContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.funcImpl`.
	 * @param ctx the parse tree
	 */
	exitFuncImpl?: (ctx: FuncImplContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.funcSignature`.
	 * @param ctx the parse tree
	 */
	enterFuncSignature?: (ctx: FuncSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.funcSignature`.
	 * @param ctx the parse tree
	 */
	exitFuncSignature?: (ctx: FuncSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.formalParamList`.
	 * @param ctx the parse tree
	 */
	enterFormalParamList?: (ctx: FormalParamListContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.formalParamList`.
	 * @param ctx the parse tree
	 */
	exitFormalParamList?: (ctx: FormalParamListContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.forStmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.forStmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileStmt?: (ctx: WhileStmtContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileStmt?: (ctx: WhileStmtContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.evaluateStmt`.
	 * @param ctx the parse tree
	 */
	enterEvaluateStmt?: (ctx: EvaluateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.evaluateStmt`.
	 * @param ctx the parse tree
	 */
	exitEvaluateStmt?: (ctx: EvaluateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.whenBranch`.
	 * @param ctx the parse tree
	 */
	enterWhenBranch?: (ctx: WhenBranchContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.whenBranch`.
	 * @param ctx the parse tree
	 */
	exitWhenBranch?: (ctx: WhenBranchContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.whenOtherBranch`.
	 * @param ctx the parse tree
	 */
	enterWhenOtherBranch?: (ctx: WhenOtherBranchContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.whenOtherBranch`.
	 * @param ctx the parse tree
	 */
	exitWhenOtherBranch?: (ctx: WhenOtherBranchContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.tryCatchStmt`.
	 * @param ctx the parse tree
	 */
	enterTryCatchStmt?: (ctx: TryCatchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.tryCatchStmt`.
	 * @param ctx the parse tree
	 */
	exitTryCatchStmt?: (ctx: TryCatchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.catchSignature`.
	 * @param ctx the parse tree
	 */
	enterCatchSignature?: (ctx: CatchSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.catchSignature`.
	 * @param ctx the parse tree
	 */
	exitCatchSignature?: (ctx: CatchSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.createInvocation`.
	 * @param ctx the parse tree
	 */
	enterCreateInvocation?: (ctx: CreateInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.createInvocation`.
	 * @param ctx the parse tree
	 */
	exitCreateInvocation?: (ctx: CreateInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `PeopleCodeParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `PeopleCodeParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
}

