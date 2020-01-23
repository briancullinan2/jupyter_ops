// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/snobol/snobol.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./snobolParser";
import { LinContext } from "./snobolParser";
import { LineContext } from "./snobolParser";
import { LabelContext } from "./snobolParser";
import { SubjectContext } from "./snobolParser";
import { PatternContext } from "./snobolParser";
import { ExpressionContext } from "./snobolParser";
import { MultiplyingExpressionContext } from "./snobolParser";
import { PowExpressionContext } from "./snobolParser";
import { AtomContext } from "./snobolParser";
import { CommandContext } from "./snobolParser";
import { IdentContext } from "./snobolParser";
import { DifferContext } from "./snobolParser";
import { EqContext } from "./snobolParser";
import { NeContext } from "./snobolParser";
import { GeContext } from "./snobolParser";
import { GtContext } from "./snobolParser";
import { LeContext } from "./snobolParser";
import { LtContext } from "./snobolParser";
import { IntegerContext } from "./snobolParser";
import { LgtContext } from "./snobolParser";
import { AtanContext } from "./snobolParser";
import { ChopContext } from "./snobolParser";
import { CosContext } from "./snobolParser";
import { ExpContext } from "./snobolParser";
import { LnContext } from "./snobolParser";
import { RemdrContext } from "./snobolParser";
import { SinContext } from "./snobolParser";
import { TanContext } from "./snobolParser";
import { DuplContext } from "./snobolParser";
import { ReverseContext } from "./snobolParser";
import { DateContext } from "./snobolParser";
import { ReplaceContext } from "./snobolParser";
import { SizeContext } from "./snobolParser";
import { TrimContext } from "./snobolParser";
import { ArrayContext } from "./snobolParser";
import { ConvertContext } from "./snobolParser";
import { TableContext } from "./snobolParser";
import { SortContext } from "./snobolParser";
import { Break_Context } from "./snobolParser";
import { TransferContext } from "./snobolParser";
import { TransferpreContext } from "./snobolParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `snobolParser`.
 */
export interface snobolListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `snobolParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.lin`.
	 * @param ctx the parse tree
	 */
	enterLin?: (ctx: LinContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.lin`.
	 * @param ctx the parse tree
	 */
	exitLin?: (ctx: LinContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.subject`.
	 * @param ctx the parse tree
	 */
	enterSubject?: (ctx: SubjectContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.subject`.
	 * @param ctx the parse tree
	 */
	exitSubject?: (ctx: SubjectContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.powExpression`.
	 * @param ctx the parse tree
	 */
	enterPowExpression?: (ctx: PowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.powExpression`.
	 * @param ctx the parse tree
	 */
	exitPowExpression?: (ctx: PowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.differ`.
	 * @param ctx the parse tree
	 */
	enterDiffer?: (ctx: DifferContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.differ`.
	 * @param ctx the parse tree
	 */
	exitDiffer?: (ctx: DifferContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.eq`.
	 * @param ctx the parse tree
	 */
	enterEq?: (ctx: EqContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.eq`.
	 * @param ctx the parse tree
	 */
	exitEq?: (ctx: EqContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.ne`.
	 * @param ctx the parse tree
	 */
	enterNe?: (ctx: NeContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.ne`.
	 * @param ctx the parse tree
	 */
	exitNe?: (ctx: NeContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.ge`.
	 * @param ctx the parse tree
	 */
	enterGe?: (ctx: GeContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.ge`.
	 * @param ctx the parse tree
	 */
	exitGe?: (ctx: GeContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.gt`.
	 * @param ctx the parse tree
	 */
	enterGt?: (ctx: GtContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.gt`.
	 * @param ctx the parse tree
	 */
	exitGt?: (ctx: GtContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.le`.
	 * @param ctx the parse tree
	 */
	enterLe?: (ctx: LeContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.le`.
	 * @param ctx the parse tree
	 */
	exitLe?: (ctx: LeContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.lt`.
	 * @param ctx the parse tree
	 */
	enterLt?: (ctx: LtContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.lt`.
	 * @param ctx the parse tree
	 */
	exitLt?: (ctx: LtContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.lgt`.
	 * @param ctx the parse tree
	 */
	enterLgt?: (ctx: LgtContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.lgt`.
	 * @param ctx the parse tree
	 */
	exitLgt?: (ctx: LgtContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.atan`.
	 * @param ctx the parse tree
	 */
	enterAtan?: (ctx: AtanContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.atan`.
	 * @param ctx the parse tree
	 */
	exitAtan?: (ctx: AtanContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.chop`.
	 * @param ctx the parse tree
	 */
	enterChop?: (ctx: ChopContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.chop`.
	 * @param ctx the parse tree
	 */
	exitChop?: (ctx: ChopContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.cos`.
	 * @param ctx the parse tree
	 */
	enterCos?: (ctx: CosContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.cos`.
	 * @param ctx the parse tree
	 */
	exitCos?: (ctx: CosContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.ln`.
	 * @param ctx the parse tree
	 */
	enterLn?: (ctx: LnContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.ln`.
	 * @param ctx the parse tree
	 */
	exitLn?: (ctx: LnContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.remdr`.
	 * @param ctx the parse tree
	 */
	enterRemdr?: (ctx: RemdrContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.remdr`.
	 * @param ctx the parse tree
	 */
	exitRemdr?: (ctx: RemdrContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.sin`.
	 * @param ctx the parse tree
	 */
	enterSin?: (ctx: SinContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.sin`.
	 * @param ctx the parse tree
	 */
	exitSin?: (ctx: SinContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.tan`.
	 * @param ctx the parse tree
	 */
	enterTan?: (ctx: TanContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.tan`.
	 * @param ctx the parse tree
	 */
	exitTan?: (ctx: TanContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.dupl`.
	 * @param ctx the parse tree
	 */
	enterDupl?: (ctx: DuplContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.dupl`.
	 * @param ctx the parse tree
	 */
	exitDupl?: (ctx: DuplContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.reverse`.
	 * @param ctx the parse tree
	 */
	enterReverse?: (ctx: ReverseContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.reverse`.
	 * @param ctx the parse tree
	 */
	exitReverse?: (ctx: ReverseContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.replace`.
	 * @param ctx the parse tree
	 */
	enterReplace?: (ctx: ReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.replace`.
	 * @param ctx the parse tree
	 */
	exitReplace?: (ctx: ReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.size`.
	 * @param ctx the parse tree
	 */
	enterSize?: (ctx: SizeContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.size`.
	 * @param ctx the parse tree
	 */
	exitSize?: (ctx: SizeContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.trim`.
	 * @param ctx the parse tree
	 */
	enterTrim?: (ctx: TrimContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.trim`.
	 * @param ctx the parse tree
	 */
	exitTrim?: (ctx: TrimContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.convert`.
	 * @param ctx the parse tree
	 */
	enterConvert?: (ctx: ConvertContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.convert`.
	 * @param ctx the parse tree
	 */
	exitConvert?: (ctx: ConvertContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.table`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.table`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.sort`.
	 * @param ctx the parse tree
	 */
	enterSort?: (ctx: SortContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.sort`.
	 * @param ctx the parse tree
	 */
	exitSort?: (ctx: SortContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.break_`.
	 * @param ctx the parse tree
	 */
	enterBreak_?: (ctx: Break_Context) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.break_`.
	 * @param ctx the parse tree
	 */
	exitBreak_?: (ctx: Break_Context) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.transfer`.
	 * @param ctx the parse tree
	 */
	enterTransfer?: (ctx: TransferContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.transfer`.
	 * @param ctx the parse tree
	 */
	exitTransfer?: (ctx: TransferContext) => void;

	/**
	 * Enter a parse tree produced by `snobolParser.transferpre`.
	 * @param ctx the parse tree
	 */
	enterTransferpre?: (ctx: TransferpreContext) => void;
	/**
	 * Exit a parse tree produced by `snobolParser.transferpre`.
	 * @param ctx the parse tree
	 */
	exitTransferpre?: (ctx: TransferpreContext) => void;
}

