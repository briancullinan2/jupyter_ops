// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/morsecode/morsecode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `morsecodeParser`.
 */
export interface morsecodeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `morsecodeParser.morsecode`.
	 * @param ctx the parse tree
	 */
	enterMorsecode?: (ctx: MorsecodeContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.morsecode`.
	 * @param ctx the parse tree
	 */
	exitMorsecode?: (ctx: MorsecodeContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.letter`.
	 * @param ctx the parse tree
	 */
	enterLetter?: (ctx: LetterContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.letter`.
	 * @param ctx the parse tree
	 */
	exitLetter?: (ctx: LetterContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.a`.
	 * @param ctx the parse tree
	 */
	enterA?: (ctx: AContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.a`.
	 * @param ctx the parse tree
	 */
	exitA?: (ctx: AContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.b`.
	 * @param ctx the parse tree
	 */
	enterB?: (ctx: BContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.b`.
	 * @param ctx the parse tree
	 */
	exitB?: (ctx: BContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.c`.
	 * @param ctx the parse tree
	 */
	enterC?: (ctx: CContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.c`.
	 * @param ctx the parse tree
	 */
	exitC?: (ctx: CContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.d`.
	 * @param ctx the parse tree
	 */
	enterD?: (ctx: DContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.d`.
	 * @param ctx the parse tree
	 */
	exitD?: (ctx: DContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.e`.
	 * @param ctx the parse tree
	 */
	enterE?: (ctx: EContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.e`.
	 * @param ctx the parse tree
	 */
	exitE?: (ctx: EContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.f`.
	 * @param ctx the parse tree
	 */
	enterF?: (ctx: FContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.f`.
	 * @param ctx the parse tree
	 */
	exitF?: (ctx: FContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.g`.
	 * @param ctx the parse tree
	 */
	enterG?: (ctx: GContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.g`.
	 * @param ctx the parse tree
	 */
	exitG?: (ctx: GContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.h`.
	 * @param ctx the parse tree
	 */
	enterH?: (ctx: HContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.h`.
	 * @param ctx the parse tree
	 */
	exitH?: (ctx: HContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.i`.
	 * @param ctx the parse tree
	 */
	enterI?: (ctx: IContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.i`.
	 * @param ctx the parse tree
	 */
	exitI?: (ctx: IContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.j`.
	 * @param ctx the parse tree
	 */
	enterJ?: (ctx: JContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.j`.
	 * @param ctx the parse tree
	 */
	exitJ?: (ctx: JContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.k`.
	 * @param ctx the parse tree
	 */
	enterK?: (ctx: KContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.k`.
	 * @param ctx the parse tree
	 */
	exitK?: (ctx: KContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.l`.
	 * @param ctx the parse tree
	 */
	enterL?: (ctx: LContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.l`.
	 * @param ctx the parse tree
	 */
	exitL?: (ctx: LContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.m`.
	 * @param ctx the parse tree
	 */
	enterM?: (ctx: MContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.m`.
	 * @param ctx the parse tree
	 */
	exitM?: (ctx: MContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.n`.
	 * @param ctx the parse tree
	 */
	enterN?: (ctx: NContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.n`.
	 * @param ctx the parse tree
	 */
	exitN?: (ctx: NContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.o`.
	 * @param ctx the parse tree
	 */
	enterO?: (ctx: OContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.o`.
	 * @param ctx the parse tree
	 */
	exitO?: (ctx: OContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.p`.
	 * @param ctx the parse tree
	 */
	enterP?: (ctx: PContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.p`.
	 * @param ctx the parse tree
	 */
	exitP?: (ctx: PContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.q`.
	 * @param ctx the parse tree
	 */
	enterQ?: (ctx: QContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.q`.
	 * @param ctx the parse tree
	 */
	exitQ?: (ctx: QContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.r`.
	 * @param ctx the parse tree
	 */
	enterR?: (ctx: RContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.r`.
	 * @param ctx the parse tree
	 */
	exitR?: (ctx: RContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.s`.
	 * @param ctx the parse tree
	 */
	enterS?: (ctx: SContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.s`.
	 * @param ctx the parse tree
	 */
	exitS?: (ctx: SContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.t`.
	 * @param ctx the parse tree
	 */
	enterT?: (ctx: TContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.t`.
	 * @param ctx the parse tree
	 */
	exitT?: (ctx: TContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.u`.
	 * @param ctx the parse tree
	 */
	enterU?: (ctx: UContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.u`.
	 * @param ctx the parse tree
	 */
	exitU?: (ctx: UContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.v`.
	 * @param ctx the parse tree
	 */
	enterV?: (ctx: VContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.v`.
	 * @param ctx the parse tree
	 */
	exitV?: (ctx: VContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.w`.
	 * @param ctx the parse tree
	 */
	enterW?: (ctx: WContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.w`.
	 * @param ctx the parse tree
	 */
	exitW?: (ctx: WContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.x`.
	 * @param ctx the parse tree
	 */
	enterX?: (ctx: XContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.x`.
	 * @param ctx the parse tree
	 */
	exitX?: (ctx: XContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.y`.
	 * @param ctx the parse tree
	 */
	enterY?: (ctx: YContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.y`.
	 * @param ctx the parse tree
	 */
	exitY?: (ctx: YContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.z`.
	 * @param ctx the parse tree
	 */
	enterZ?: (ctx: ZContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.z`.
	 * @param ctx the parse tree
	 */
	exitZ?: (ctx: ZContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.one`.
	 * @param ctx the parse tree
	 */
	enterOne?: (ctx: OneContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.one`.
	 * @param ctx the parse tree
	 */
	exitOne?: (ctx: OneContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.two`.
	 * @param ctx the parse tree
	 */
	enterTwo?: (ctx: TwoContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.two`.
	 * @param ctx the parse tree
	 */
	exitTwo?: (ctx: TwoContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.three`.
	 * @param ctx the parse tree
	 */
	enterThree?: (ctx: ThreeContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.three`.
	 * @param ctx the parse tree
	 */
	exitThree?: (ctx: ThreeContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.four`.
	 * @param ctx the parse tree
	 */
	enterFour?: (ctx: FourContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.four`.
	 * @param ctx the parse tree
	 */
	exitFour?: (ctx: FourContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.five`.
	 * @param ctx the parse tree
	 */
	enterFive?: (ctx: FiveContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.five`.
	 * @param ctx the parse tree
	 */
	exitFive?: (ctx: FiveContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.six`.
	 * @param ctx the parse tree
	 */
	enterSix?: (ctx: SixContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.six`.
	 * @param ctx the parse tree
	 */
	exitSix?: (ctx: SixContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.seven`.
	 * @param ctx the parse tree
	 */
	enterSeven?: (ctx: SevenContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.seven`.
	 * @param ctx the parse tree
	 */
	exitSeven?: (ctx: SevenContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.eight`.
	 * @param ctx the parse tree
	 */
	enterEight?: (ctx: EightContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.eight`.
	 * @param ctx the parse tree
	 */
	exitEight?: (ctx: EightContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.nine`.
	 * @param ctx the parse tree
	 */
	enterNine?: (ctx: NineContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.nine`.
	 * @param ctx the parse tree
	 */
	exitNine?: (ctx: NineContext) => void;

	/**
	 * Enter a parse tree produced by `morsecodeParser.zero`.
	 * @param ctx the parse tree
	 */
	enterZero?: (ctx: ZeroContext) => void;
	/**
	 * Exit a parse tree produced by `morsecodeParser.zero`.
	 * @param ctx the parse tree
	 */
	exitZero?: (ctx: ZeroContext) => void;
}

