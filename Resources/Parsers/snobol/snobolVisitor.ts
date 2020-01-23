// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/snobol/snobol.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `snobolParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface snobolVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `snobolParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.lin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLin?: (ctx: LinContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.subject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubject?: (ctx: SubjectContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.powExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowExpression?: (ctx: PowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.differ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiffer?: (ctx: DifferContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.eq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEq?: (ctx: EqContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.ne`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNe?: (ctx: NeContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.ge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGe?: (ctx: GeContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.gt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGt?: (ctx: GtContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.le`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLe?: (ctx: LeContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.lt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLt?: (ctx: LtContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.lgt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLgt?: (ctx: LgtContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.atan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtan?: (ctx: AtanContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.chop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChop?: (ctx: ChopContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.cos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCos?: (ctx: CosContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.ln`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLn?: (ctx: LnContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.remdr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemdr?: (ctx: RemdrContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.sin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSin?: (ctx: SinContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.tan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTan?: (ctx: TanContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.dupl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDupl?: (ctx: DuplContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.reverse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReverse?: (ctx: ReverseContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.replace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplace?: (ctx: ReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.size`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSize?: (ctx: SizeContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.trim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrim?: (ctx: TrimContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.convert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConvert?: (ctx: ConvertContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.sort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSort?: (ctx: SortContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.break_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_?: (ctx: Break_Context) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.transfer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransfer?: (ctx: TransferContext) => Result;

	/**
	 * Visit a parse tree produced by `snobolParser.transferpre`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransferpre?: (ctx: TransferpreContext) => Result;
}

