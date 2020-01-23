// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/logo/logo/logo.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `logoParser`.
 */
export interface logoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `logoParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.cmd`.
	 * @param ctx the parse tree
	 */
	enterCmd?: (ctx: CmdContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.cmd`.
	 * @param ctx the parse tree
	 */
	exitCmd?: (ctx: CmdContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.procedureInvocation`.
	 * @param ctx the parse tree
	 */
	enterProcedureInvocation?: (ctx: ProcedureInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.procedureInvocation`.
	 * @param ctx the parse tree
	 */
	exitProcedureInvocation?: (ctx: ProcedureInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.procedureDeclaration`.
	 * @param ctx the parse tree
	 */
	enterProcedureDeclaration?: (ctx: ProcedureDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.procedureDeclaration`.
	 * @param ctx the parse tree
	 */
	exitProcedureDeclaration?: (ctx: ProcedureDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.parameterDeclarations`.
	 * @param ctx the parse tree
	 */
	enterParameterDeclarations?: (ctx: ParameterDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.parameterDeclarations`.
	 * @param ctx the parse tree
	 */
	exitParameterDeclarations?: (ctx: ParameterDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.repeat`.
	 * @param ctx the parse tree
	 */
	enterRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.repeat`.
	 * @param ctx the parse tree
	 */
	exitRepeat?: (ctx: RepeatContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.ife`.
	 * @param ctx the parse tree
	 */
	enterIfe?: (ctx: IfeContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.ife`.
	 * @param ctx the parse tree
	 */
	exitIfe?: (ctx: IfeContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.make`.
	 * @param ctx the parse tree
	 */
	enterMake?: (ctx: MakeContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.make`.
	 * @param ctx the parse tree
	 */
	exitMake?: (ctx: MakeContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.print`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.print`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.quotedstring`.
	 * @param ctx the parse tree
	 */
	enterQuotedstring?: (ctx: QuotedstringContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.quotedstring`.
	 * @param ctx the parse tree
	 */
	exitQuotedstring?: (ctx: QuotedstringContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.signExpression`.
	 * @param ctx the parse tree
	 */
	enterSignExpression?: (ctx: SignExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.signExpression`.
	 * @param ctx the parse tree
	 */
	exitSignExpression?: (ctx: SignExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.deref`.
	 * @param ctx the parse tree
	 */
	enterDeref?: (ctx: DerefContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.deref`.
	 * @param ctx the parse tree
	 */
	exitDeref?: (ctx: DerefContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.fd`.
	 * @param ctx the parse tree
	 */
	enterFd?: (ctx: FdContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.fd`.
	 * @param ctx the parse tree
	 */
	exitFd?: (ctx: FdContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.bk`.
	 * @param ctx the parse tree
	 */
	enterBk?: (ctx: BkContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.bk`.
	 * @param ctx the parse tree
	 */
	exitBk?: (ctx: BkContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.rt`.
	 * @param ctx the parse tree
	 */
	enterRt?: (ctx: RtContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.rt`.
	 * @param ctx the parse tree
	 */
	exitRt?: (ctx: RtContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.lt`.
	 * @param ctx the parse tree
	 */
	enterLt?: (ctx: LtContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.lt`.
	 * @param ctx the parse tree
	 */
	exitLt?: (ctx: LtContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.cs`.
	 * @param ctx the parse tree
	 */
	enterCs?: (ctx: CsContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.cs`.
	 * @param ctx the parse tree
	 */
	exitCs?: (ctx: CsContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.pu`.
	 * @param ctx the parse tree
	 */
	enterPu?: (ctx: PuContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.pu`.
	 * @param ctx the parse tree
	 */
	exitPu?: (ctx: PuContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.pd`.
	 * @param ctx the parse tree
	 */
	enterPd?: (ctx: PdContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.pd`.
	 * @param ctx the parse tree
	 */
	exitPd?: (ctx: PdContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.ht`.
	 * @param ctx the parse tree
	 */
	enterHt?: (ctx: HtContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.ht`.
	 * @param ctx the parse tree
	 */
	exitHt?: (ctx: HtContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.st`.
	 * @param ctx the parse tree
	 */
	enterSt?: (ctx: StContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.st`.
	 * @param ctx the parse tree
	 */
	exitSt?: (ctx: StContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.home`.
	 * @param ctx the parse tree
	 */
	enterHome?: (ctx: HomeContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.home`.
	 * @param ctx the parse tree
	 */
	exitHome?: (ctx: HomeContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.stop`.
	 * @param ctx the parse tree
	 */
	enterStop?: (ctx: StopContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.stop`.
	 * @param ctx the parse tree
	 */
	exitStop?: (ctx: StopContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.setxy`.
	 * @param ctx the parse tree
	 */
	enterSetxy?: (ctx: SetxyContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.setxy`.
	 * @param ctx the parse tree
	 */
	exitSetxy?: (ctx: SetxyContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.random`.
	 * @param ctx the parse tree
	 */
	enterRandom?: (ctx: RandomContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.random`.
	 * @param ctx the parse tree
	 */
	exitRandom?: (ctx: RandomContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.fore`.
	 * @param ctx the parse tree
	 */
	enterFore?: (ctx: ForeContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.fore`.
	 * @param ctx the parse tree
	 */
	exitFore?: (ctx: ForeContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `logoParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `logoParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

