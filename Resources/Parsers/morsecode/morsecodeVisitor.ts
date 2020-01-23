// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/morsecode/morsecode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MorsecodeContext } from "./morsecodeParser";
import { LetterContext } from "./morsecodeParser";
import { AContext } from "./morsecodeParser";
import { BContext } from "./morsecodeParser";
import { CContext } from "./morsecodeParser";
import { DContext } from "./morsecodeParser";
import { EContext } from "./morsecodeParser";
import { FContext } from "./morsecodeParser";
import { GContext } from "./morsecodeParser";
import { HContext } from "./morsecodeParser";
import { IContext } from "./morsecodeParser";
import { JContext } from "./morsecodeParser";
import { KContext } from "./morsecodeParser";
import { LContext } from "./morsecodeParser";
import { MContext } from "./morsecodeParser";
import { NContext } from "./morsecodeParser";
import { OContext } from "./morsecodeParser";
import { PContext } from "./morsecodeParser";
import { QContext } from "./morsecodeParser";
import { RContext } from "./morsecodeParser";
import { SContext } from "./morsecodeParser";
import { TContext } from "./morsecodeParser";
import { UContext } from "./morsecodeParser";
import { VContext } from "./morsecodeParser";
import { WContext } from "./morsecodeParser";
import { XContext } from "./morsecodeParser";
import { YContext } from "./morsecodeParser";
import { ZContext } from "./morsecodeParser";
import { OneContext } from "./morsecodeParser";
import { TwoContext } from "./morsecodeParser";
import { ThreeContext } from "./morsecodeParser";
import { FourContext } from "./morsecodeParser";
import { FiveContext } from "./morsecodeParser";
import { SixContext } from "./morsecodeParser";
import { SevenContext } from "./morsecodeParser";
import { EightContext } from "./morsecodeParser";
import { NineContext } from "./morsecodeParser";
import { ZeroContext } from "./morsecodeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `morsecodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface morsecodeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `morsecodeParser.morsecode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMorsecode?: (ctx: MorsecodeContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.letter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetter?: (ctx: LetterContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitA?: (ctx: AContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitB?: (ctx: BContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.c`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitC?: (ctx: CContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.d`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD?: (ctx: DContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.e`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitE?: (ctx: EContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.f`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF?: (ctx: FContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.g`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitG?: (ctx: GContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.h`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitH?: (ctx: HContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.i`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitI?: (ctx: IContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.j`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJ?: (ctx: JContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.k`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK?: (ctx: KContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.l`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitL?: (ctx: LContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.m`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitM?: (ctx: MContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.n`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitN?: (ctx: NContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.o`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitO?: (ctx: OContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.p`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitP?: (ctx: PContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.q`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ?: (ctx: QContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.r`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitR?: (ctx: RContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.s`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitS?: (ctx: SContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT?: (ctx: TContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.u`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU?: (ctx: UContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.v`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitV?: (ctx: VContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.w`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitW?: (ctx: WContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.x`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitX?: (ctx: XContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.y`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitY?: (ctx: YContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.z`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZ?: (ctx: ZContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.one`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOne?: (ctx: OneContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.two`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTwo?: (ctx: TwoContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.three`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThree?: (ctx: ThreeContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.four`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFour?: (ctx: FourContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.five`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFive?: (ctx: FiveContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.six`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSix?: (ctx: SixContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.seven`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeven?: (ctx: SevenContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.eight`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEight?: (ctx: EightContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.nine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNine?: (ctx: NineContext) => Result;

	/**
	 * Visit a parse tree produced by `morsecodeParser.zero`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZero?: (ctx: ZeroContext) => Result;
}

