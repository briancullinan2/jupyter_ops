// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/logo/logo/logo.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./logoParser";
import { LineContext } from "./logoParser";
import { CmdContext } from "./logoParser";
import { ProcedureInvocationContext } from "./logoParser";
import { ProcedureDeclarationContext } from "./logoParser";
import { ParameterDeclarationsContext } from "./logoParser";
import { FuncContext } from "./logoParser";
import { RepeatContext } from "./logoParser";
import { BlockContext } from "./logoParser";
import { IfeContext } from "./logoParser";
import { ComparisonContext } from "./logoParser";
import { ComparisonOperatorContext } from "./logoParser";
import { MakeContext } from "./logoParser";
import { PrintContext } from "./logoParser";
import { QuotedstringContext } from "./logoParser";
import { NameContext } from "./logoParser";
import { ValueContext } from "./logoParser";
import { SignExpressionContext } from "./logoParser";
import { MultiplyingExpressionContext } from "./logoParser";
import { ExpressionContext } from "./logoParser";
import { DerefContext } from "./logoParser";
import { FdContext } from "./logoParser";
import { BkContext } from "./logoParser";
import { RtContext } from "./logoParser";
import { LtContext } from "./logoParser";
import { CsContext } from "./logoParser";
import { PuContext } from "./logoParser";
import { PdContext } from "./logoParser";
import { HtContext } from "./logoParser";
import { StContext } from "./logoParser";
import { HomeContext } from "./logoParser";
import { StopContext } from "./logoParser";
import { LabelContext } from "./logoParser";
import { SetxyContext } from "./logoParser";
import { RandomContext } from "./logoParser";
import { ForeContext } from "./logoParser";
import { NumberContext } from "./logoParser";
import { CommentContext } from "./logoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `logoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface logoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `logoParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.cmd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmd?: (ctx: CmdContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.procedureInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureInvocation?: (ctx: ProcedureInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.procedureDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureDeclaration?: (ctx: ProcedureDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.parameterDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclarations?: (ctx: ParameterDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat?: (ctx: RepeatContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.ife`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfe?: (ctx: IfeContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.make`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMake?: (ctx: MakeContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint?: (ctx: PrintContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.quotedstring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedstring?: (ctx: QuotedstringContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.signExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignExpression?: (ctx: SignExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.deref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeref?: (ctx: DerefContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.fd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFd?: (ctx: FdContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.bk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBk?: (ctx: BkContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.rt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRt?: (ctx: RtContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.lt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLt?: (ctx: LtContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.cs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCs?: (ctx: CsContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.pu`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPu?: (ctx: PuContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.pd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPd?: (ctx: PdContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.ht`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHt?: (ctx: HtContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.st`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSt?: (ctx: StContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.home`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHome?: (ctx: HomeContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.stop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStop?: (ctx: StopContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.setxy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetxy?: (ctx: SetxyContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.random`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandom?: (ctx: RandomContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.fore`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFore?: (ctx: ForeContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `logoParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

