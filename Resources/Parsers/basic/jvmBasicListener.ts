// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/basic/jvmBasic.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./jvmBasicParser";
import { LineContext } from "./jvmBasicParser";
import { AmperoperContext } from "./jvmBasicParser";
import { LinenumberContext } from "./jvmBasicParser";
import { AmprstmtContext } from "./jvmBasicParser";
import { StatementContext } from "./jvmBasicParser";
import { VardeclContext } from "./jvmBasicParser";
import { Printstmt1Context } from "./jvmBasicParser";
import { PrintlistContext } from "./jvmBasicParser";
import { GetstmtContext } from "./jvmBasicParser";
import { LetstmtContext } from "./jvmBasicParser";
import { VariableassignmentContext } from "./jvmBasicParser";
import { RelopContext } from "./jvmBasicParser";
import { NeqContext } from "./jvmBasicParser";
import { IfstmtContext } from "./jvmBasicParser";
import { Forstmt1Context } from "./jvmBasicParser";
import { Forstmt2Context } from "./jvmBasicParser";
import { NextstmtContext } from "./jvmBasicParser";
import { InputstmtContext } from "./jvmBasicParser";
import { ReadstmtContext } from "./jvmBasicParser";
import { DimstmtContext } from "./jvmBasicParser";
import { GotostmtContext } from "./jvmBasicParser";
import { GosubstmtContext } from "./jvmBasicParser";
import { PokestmtContext } from "./jvmBasicParser";
import { CallstmtContext } from "./jvmBasicParser";
import { HplotstmtContext } from "./jvmBasicParser";
import { VplotstmtContext } from "./jvmBasicParser";
import { PlotstmtContext } from "./jvmBasicParser";
import { OngotostmtContext } from "./jvmBasicParser";
import { OngosubstmtContext } from "./jvmBasicParser";
import { VtabstmntContext } from "./jvmBasicParser";
import { HtabstmntContext } from "./jvmBasicParser";
import { HimemstmtContext } from "./jvmBasicParser";
import { LomemstmtContext } from "./jvmBasicParser";
import { DatastmtContext } from "./jvmBasicParser";
import { DatumContext } from "./jvmBasicParser";
import { WaitstmtContext } from "./jvmBasicParser";
import { XdrawstmtContext } from "./jvmBasicParser";
import { DrawstmtContext } from "./jvmBasicParser";
import { DefstmtContext } from "./jvmBasicParser";
import { TabstmtContext } from "./jvmBasicParser";
import { SpeedstmtContext } from "./jvmBasicParser";
import { RotstmtContext } from "./jvmBasicParser";
import { ScalestmtContext } from "./jvmBasicParser";
import { ColorstmtContext } from "./jvmBasicParser";
import { HcolorstmtContext } from "./jvmBasicParser";
import { HlinstmtContext } from "./jvmBasicParser";
import { VlinstmtContext } from "./jvmBasicParser";
import { OnerrstmtContext } from "./jvmBasicParser";
import { PrstmtContext } from "./jvmBasicParser";
import { InstmtContext } from "./jvmBasicParser";
import { StorestmtContext } from "./jvmBasicParser";
import { RecallstmtContext } from "./jvmBasicParser";
import { ListstmtContext } from "./jvmBasicParser";
import { PopstmtContext } from "./jvmBasicParser";
import { AmptstmtContext } from "./jvmBasicParser";
import { IncludestmtContext } from "./jvmBasicParser";
import { EndstmtContext } from "./jvmBasicParser";
import { ReturnstmtContext } from "./jvmBasicParser";
import { RestorestmtContext } from "./jvmBasicParser";
import { NumberContext } from "./jvmBasicParser";
import { FuncContext } from "./jvmBasicParser";
import { SignExpressionContext } from "./jvmBasicParser";
import { ExponentExpressionContext } from "./jvmBasicParser";
import { MultiplyingExpressionContext } from "./jvmBasicParser";
import { AddingExpressionContext } from "./jvmBasicParser";
import { RelationalExpressionContext } from "./jvmBasicParser";
import { ExpressionContext } from "./jvmBasicParser";
import { VarContext } from "./jvmBasicParser";
import { VarnameContext } from "./jvmBasicParser";
import { VarsuffixContext } from "./jvmBasicParser";
import { VarlistContext } from "./jvmBasicParser";
import { ExprlistContext } from "./jvmBasicParser";
import { SqrfuncContext } from "./jvmBasicParser";
import { ChrfuncContext } from "./jvmBasicParser";
import { LenfuncContext } from "./jvmBasicParser";
import { AscfuncContext } from "./jvmBasicParser";
import { MidfuncContext } from "./jvmBasicParser";
import { PdlfuncContext } from "./jvmBasicParser";
import { PeekfuncContext } from "./jvmBasicParser";
import { IntfuncContext } from "./jvmBasicParser";
import { SpcfuncContext } from "./jvmBasicParser";
import { FrefuncContext } from "./jvmBasicParser";
import { PosfuncContext } from "./jvmBasicParser";
import { UsrfuncContext } from "./jvmBasicParser";
import { LeftfuncContext } from "./jvmBasicParser";
import { RightfuncContext } from "./jvmBasicParser";
import { StrfuncContext } from "./jvmBasicParser";
import { FnfuncContext } from "./jvmBasicParser";
import { ValfuncContext } from "./jvmBasicParser";
import { ScrnfuncContext } from "./jvmBasicParser";
import { SinfuncContext } from "./jvmBasicParser";
import { CosfuncContext } from "./jvmBasicParser";
import { TanfuncContext } from "./jvmBasicParser";
import { AtnfuncContext } from "./jvmBasicParser";
import { RndfuncContext } from "./jvmBasicParser";
import { SgnfuncContext } from "./jvmBasicParser";
import { ExpfuncContext } from "./jvmBasicParser";
import { LogfuncContext } from "./jvmBasicParser";
import { AbsfuncContext } from "./jvmBasicParser";
import { TabfuncContext } from "./jvmBasicParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `jvmBasicParser`.
 */
export interface jvmBasicListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `jvmBasicParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.amperoper`.
	 * @param ctx the parse tree
	 */
	enterAmperoper?: (ctx: AmperoperContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.amperoper`.
	 * @param ctx the parse tree
	 */
	exitAmperoper?: (ctx: AmperoperContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.linenumber`.
	 * @param ctx the parse tree
	 */
	enterLinenumber?: (ctx: LinenumberContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.linenumber`.
	 * @param ctx the parse tree
	 */
	exitLinenumber?: (ctx: LinenumberContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.amprstmt`.
	 * @param ctx the parse tree
	 */
	enterAmprstmt?: (ctx: AmprstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.amprstmt`.
	 * @param ctx the parse tree
	 */
	exitAmprstmt?: (ctx: AmprstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.vardecl`.
	 * @param ctx the parse tree
	 */
	enterVardecl?: (ctx: VardeclContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.vardecl`.
	 * @param ctx the parse tree
	 */
	exitVardecl?: (ctx: VardeclContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.printstmt1`.
	 * @param ctx the parse tree
	 */
	enterPrintstmt1?: (ctx: Printstmt1Context) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.printstmt1`.
	 * @param ctx the parse tree
	 */
	exitPrintstmt1?: (ctx: Printstmt1Context) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.printlist`.
	 * @param ctx the parse tree
	 */
	enterPrintlist?: (ctx: PrintlistContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.printlist`.
	 * @param ctx the parse tree
	 */
	exitPrintlist?: (ctx: PrintlistContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.getstmt`.
	 * @param ctx the parse tree
	 */
	enterGetstmt?: (ctx: GetstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.getstmt`.
	 * @param ctx the parse tree
	 */
	exitGetstmt?: (ctx: GetstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.letstmt`.
	 * @param ctx the parse tree
	 */
	enterLetstmt?: (ctx: LetstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.letstmt`.
	 * @param ctx the parse tree
	 */
	exitLetstmt?: (ctx: LetstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.variableassignment`.
	 * @param ctx the parse tree
	 */
	enterVariableassignment?: (ctx: VariableassignmentContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.variableassignment`.
	 * @param ctx the parse tree
	 */
	exitVariableassignment?: (ctx: VariableassignmentContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.relop`.
	 * @param ctx the parse tree
	 */
	enterRelop?: (ctx: RelopContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.relop`.
	 * @param ctx the parse tree
	 */
	exitRelop?: (ctx: RelopContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.neq`.
	 * @param ctx the parse tree
	 */
	enterNeq?: (ctx: NeqContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.neq`.
	 * @param ctx the parse tree
	 */
	exitNeq?: (ctx: NeqContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.ifstmt`.
	 * @param ctx the parse tree
	 */
	enterIfstmt?: (ctx: IfstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.ifstmt`.
	 * @param ctx the parse tree
	 */
	exitIfstmt?: (ctx: IfstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.forstmt1`.
	 * @param ctx the parse tree
	 */
	enterForstmt1?: (ctx: Forstmt1Context) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.forstmt1`.
	 * @param ctx the parse tree
	 */
	exitForstmt1?: (ctx: Forstmt1Context) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.forstmt2`.
	 * @param ctx the parse tree
	 */
	enterForstmt2?: (ctx: Forstmt2Context) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.forstmt2`.
	 * @param ctx the parse tree
	 */
	exitForstmt2?: (ctx: Forstmt2Context) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.nextstmt`.
	 * @param ctx the parse tree
	 */
	enterNextstmt?: (ctx: NextstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.nextstmt`.
	 * @param ctx the parse tree
	 */
	exitNextstmt?: (ctx: NextstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.inputstmt`.
	 * @param ctx the parse tree
	 */
	enterInputstmt?: (ctx: InputstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.inputstmt`.
	 * @param ctx the parse tree
	 */
	exitInputstmt?: (ctx: InputstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.readstmt`.
	 * @param ctx the parse tree
	 */
	enterReadstmt?: (ctx: ReadstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.readstmt`.
	 * @param ctx the parse tree
	 */
	exitReadstmt?: (ctx: ReadstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.dimstmt`.
	 * @param ctx the parse tree
	 */
	enterDimstmt?: (ctx: DimstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.dimstmt`.
	 * @param ctx the parse tree
	 */
	exitDimstmt?: (ctx: DimstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.gotostmt`.
	 * @param ctx the parse tree
	 */
	enterGotostmt?: (ctx: GotostmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.gotostmt`.
	 * @param ctx the parse tree
	 */
	exitGotostmt?: (ctx: GotostmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.gosubstmt`.
	 * @param ctx the parse tree
	 */
	enterGosubstmt?: (ctx: GosubstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.gosubstmt`.
	 * @param ctx the parse tree
	 */
	exitGosubstmt?: (ctx: GosubstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.pokestmt`.
	 * @param ctx the parse tree
	 */
	enterPokestmt?: (ctx: PokestmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.pokestmt`.
	 * @param ctx the parse tree
	 */
	exitPokestmt?: (ctx: PokestmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.callstmt`.
	 * @param ctx the parse tree
	 */
	enterCallstmt?: (ctx: CallstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.callstmt`.
	 * @param ctx the parse tree
	 */
	exitCallstmt?: (ctx: CallstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.hplotstmt`.
	 * @param ctx the parse tree
	 */
	enterHplotstmt?: (ctx: HplotstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.hplotstmt`.
	 * @param ctx the parse tree
	 */
	exitHplotstmt?: (ctx: HplotstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.vplotstmt`.
	 * @param ctx the parse tree
	 */
	enterVplotstmt?: (ctx: VplotstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.vplotstmt`.
	 * @param ctx the parse tree
	 */
	exitVplotstmt?: (ctx: VplotstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.plotstmt`.
	 * @param ctx the parse tree
	 */
	enterPlotstmt?: (ctx: PlotstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.plotstmt`.
	 * @param ctx the parse tree
	 */
	exitPlotstmt?: (ctx: PlotstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.ongotostmt`.
	 * @param ctx the parse tree
	 */
	enterOngotostmt?: (ctx: OngotostmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.ongotostmt`.
	 * @param ctx the parse tree
	 */
	exitOngotostmt?: (ctx: OngotostmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.ongosubstmt`.
	 * @param ctx the parse tree
	 */
	enterOngosubstmt?: (ctx: OngosubstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.ongosubstmt`.
	 * @param ctx the parse tree
	 */
	exitOngosubstmt?: (ctx: OngosubstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.vtabstmnt`.
	 * @param ctx the parse tree
	 */
	enterVtabstmnt?: (ctx: VtabstmntContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.vtabstmnt`.
	 * @param ctx the parse tree
	 */
	exitVtabstmnt?: (ctx: VtabstmntContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.htabstmnt`.
	 * @param ctx the parse tree
	 */
	enterHtabstmnt?: (ctx: HtabstmntContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.htabstmnt`.
	 * @param ctx the parse tree
	 */
	exitHtabstmnt?: (ctx: HtabstmntContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.himemstmt`.
	 * @param ctx the parse tree
	 */
	enterHimemstmt?: (ctx: HimemstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.himemstmt`.
	 * @param ctx the parse tree
	 */
	exitHimemstmt?: (ctx: HimemstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.lomemstmt`.
	 * @param ctx the parse tree
	 */
	enterLomemstmt?: (ctx: LomemstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.lomemstmt`.
	 * @param ctx the parse tree
	 */
	exitLomemstmt?: (ctx: LomemstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.datastmt`.
	 * @param ctx the parse tree
	 */
	enterDatastmt?: (ctx: DatastmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.datastmt`.
	 * @param ctx the parse tree
	 */
	exitDatastmt?: (ctx: DatastmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.datum`.
	 * @param ctx the parse tree
	 */
	enterDatum?: (ctx: DatumContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.datum`.
	 * @param ctx the parse tree
	 */
	exitDatum?: (ctx: DatumContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.waitstmt`.
	 * @param ctx the parse tree
	 */
	enterWaitstmt?: (ctx: WaitstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.waitstmt`.
	 * @param ctx the parse tree
	 */
	exitWaitstmt?: (ctx: WaitstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.xdrawstmt`.
	 * @param ctx the parse tree
	 */
	enterXdrawstmt?: (ctx: XdrawstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.xdrawstmt`.
	 * @param ctx the parse tree
	 */
	exitXdrawstmt?: (ctx: XdrawstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.drawstmt`.
	 * @param ctx the parse tree
	 */
	enterDrawstmt?: (ctx: DrawstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.drawstmt`.
	 * @param ctx the parse tree
	 */
	exitDrawstmt?: (ctx: DrawstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.defstmt`.
	 * @param ctx the parse tree
	 */
	enterDefstmt?: (ctx: DefstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.defstmt`.
	 * @param ctx the parse tree
	 */
	exitDefstmt?: (ctx: DefstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.tabstmt`.
	 * @param ctx the parse tree
	 */
	enterTabstmt?: (ctx: TabstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.tabstmt`.
	 * @param ctx the parse tree
	 */
	exitTabstmt?: (ctx: TabstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.speedstmt`.
	 * @param ctx the parse tree
	 */
	enterSpeedstmt?: (ctx: SpeedstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.speedstmt`.
	 * @param ctx the parse tree
	 */
	exitSpeedstmt?: (ctx: SpeedstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.rotstmt`.
	 * @param ctx the parse tree
	 */
	enterRotstmt?: (ctx: RotstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.rotstmt`.
	 * @param ctx the parse tree
	 */
	exitRotstmt?: (ctx: RotstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.scalestmt`.
	 * @param ctx the parse tree
	 */
	enterScalestmt?: (ctx: ScalestmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.scalestmt`.
	 * @param ctx the parse tree
	 */
	exitScalestmt?: (ctx: ScalestmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.colorstmt`.
	 * @param ctx the parse tree
	 */
	enterColorstmt?: (ctx: ColorstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.colorstmt`.
	 * @param ctx the parse tree
	 */
	exitColorstmt?: (ctx: ColorstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.hcolorstmt`.
	 * @param ctx the parse tree
	 */
	enterHcolorstmt?: (ctx: HcolorstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.hcolorstmt`.
	 * @param ctx the parse tree
	 */
	exitHcolorstmt?: (ctx: HcolorstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.hlinstmt`.
	 * @param ctx the parse tree
	 */
	enterHlinstmt?: (ctx: HlinstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.hlinstmt`.
	 * @param ctx the parse tree
	 */
	exitHlinstmt?: (ctx: HlinstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.vlinstmt`.
	 * @param ctx the parse tree
	 */
	enterVlinstmt?: (ctx: VlinstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.vlinstmt`.
	 * @param ctx the parse tree
	 */
	exitVlinstmt?: (ctx: VlinstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.onerrstmt`.
	 * @param ctx the parse tree
	 */
	enterOnerrstmt?: (ctx: OnerrstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.onerrstmt`.
	 * @param ctx the parse tree
	 */
	exitOnerrstmt?: (ctx: OnerrstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.prstmt`.
	 * @param ctx the parse tree
	 */
	enterPrstmt?: (ctx: PrstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.prstmt`.
	 * @param ctx the parse tree
	 */
	exitPrstmt?: (ctx: PrstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.instmt`.
	 * @param ctx the parse tree
	 */
	enterInstmt?: (ctx: InstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.instmt`.
	 * @param ctx the parse tree
	 */
	exitInstmt?: (ctx: InstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.storestmt`.
	 * @param ctx the parse tree
	 */
	enterStorestmt?: (ctx: StorestmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.storestmt`.
	 * @param ctx the parse tree
	 */
	exitStorestmt?: (ctx: StorestmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.recallstmt`.
	 * @param ctx the parse tree
	 */
	enterRecallstmt?: (ctx: RecallstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.recallstmt`.
	 * @param ctx the parse tree
	 */
	exitRecallstmt?: (ctx: RecallstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.liststmt`.
	 * @param ctx the parse tree
	 */
	enterListstmt?: (ctx: ListstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.liststmt`.
	 * @param ctx the parse tree
	 */
	exitListstmt?: (ctx: ListstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.popstmt`.
	 * @param ctx the parse tree
	 */
	enterPopstmt?: (ctx: PopstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.popstmt`.
	 * @param ctx the parse tree
	 */
	exitPopstmt?: (ctx: PopstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.amptstmt`.
	 * @param ctx the parse tree
	 */
	enterAmptstmt?: (ctx: AmptstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.amptstmt`.
	 * @param ctx the parse tree
	 */
	exitAmptstmt?: (ctx: AmptstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.includestmt`.
	 * @param ctx the parse tree
	 */
	enterIncludestmt?: (ctx: IncludestmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.includestmt`.
	 * @param ctx the parse tree
	 */
	exitIncludestmt?: (ctx: IncludestmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.endstmt`.
	 * @param ctx the parse tree
	 */
	enterEndstmt?: (ctx: EndstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.endstmt`.
	 * @param ctx the parse tree
	 */
	exitEndstmt?: (ctx: EndstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.returnstmt`.
	 * @param ctx the parse tree
	 */
	enterReturnstmt?: (ctx: ReturnstmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.returnstmt`.
	 * @param ctx the parse tree
	 */
	exitReturnstmt?: (ctx: ReturnstmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.restorestmt`.
	 * @param ctx the parse tree
	 */
	enterRestorestmt?: (ctx: RestorestmtContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.restorestmt`.
	 * @param ctx the parse tree
	 */
	exitRestorestmt?: (ctx: RestorestmtContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.signExpression`.
	 * @param ctx the parse tree
	 */
	enterSignExpression?: (ctx: SignExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.signExpression`.
	 * @param ctx the parse tree
	 */
	exitSignExpression?: (ctx: SignExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.exponentExpression`.
	 * @param ctx the parse tree
	 */
	enterExponentExpression?: (ctx: ExponentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.exponentExpression`.
	 * @param ctx the parse tree
	 */
	exitExponentExpression?: (ctx: ExponentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.addingExpression`.
	 * @param ctx the parse tree
	 */
	enterAddingExpression?: (ctx: AddingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.addingExpression`.
	 * @param ctx the parse tree
	 */
	exitAddingExpression?: (ctx: AddingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.varname`.
	 * @param ctx the parse tree
	 */
	enterVarname?: (ctx: VarnameContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.varname`.
	 * @param ctx the parse tree
	 */
	exitVarname?: (ctx: VarnameContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.varsuffix`.
	 * @param ctx the parse tree
	 */
	enterVarsuffix?: (ctx: VarsuffixContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.varsuffix`.
	 * @param ctx the parse tree
	 */
	exitVarsuffix?: (ctx: VarsuffixContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.varlist`.
	 * @param ctx the parse tree
	 */
	enterVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.varlist`.
	 * @param ctx the parse tree
	 */
	exitVarlist?: (ctx: VarlistContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.exprlist`.
	 * @param ctx the parse tree
	 */
	enterExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.exprlist`.
	 * @param ctx the parse tree
	 */
	exitExprlist?: (ctx: ExprlistContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.sqrfunc`.
	 * @param ctx the parse tree
	 */
	enterSqrfunc?: (ctx: SqrfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.sqrfunc`.
	 * @param ctx the parse tree
	 */
	exitSqrfunc?: (ctx: SqrfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.chrfunc`.
	 * @param ctx the parse tree
	 */
	enterChrfunc?: (ctx: ChrfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.chrfunc`.
	 * @param ctx the parse tree
	 */
	exitChrfunc?: (ctx: ChrfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.lenfunc`.
	 * @param ctx the parse tree
	 */
	enterLenfunc?: (ctx: LenfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.lenfunc`.
	 * @param ctx the parse tree
	 */
	exitLenfunc?: (ctx: LenfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.ascfunc`.
	 * @param ctx the parse tree
	 */
	enterAscfunc?: (ctx: AscfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.ascfunc`.
	 * @param ctx the parse tree
	 */
	exitAscfunc?: (ctx: AscfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.midfunc`.
	 * @param ctx the parse tree
	 */
	enterMidfunc?: (ctx: MidfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.midfunc`.
	 * @param ctx the parse tree
	 */
	exitMidfunc?: (ctx: MidfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.pdlfunc`.
	 * @param ctx the parse tree
	 */
	enterPdlfunc?: (ctx: PdlfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.pdlfunc`.
	 * @param ctx the parse tree
	 */
	exitPdlfunc?: (ctx: PdlfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.peekfunc`.
	 * @param ctx the parse tree
	 */
	enterPeekfunc?: (ctx: PeekfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.peekfunc`.
	 * @param ctx the parse tree
	 */
	exitPeekfunc?: (ctx: PeekfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.intfunc`.
	 * @param ctx the parse tree
	 */
	enterIntfunc?: (ctx: IntfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.intfunc`.
	 * @param ctx the parse tree
	 */
	exitIntfunc?: (ctx: IntfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.spcfunc`.
	 * @param ctx the parse tree
	 */
	enterSpcfunc?: (ctx: SpcfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.spcfunc`.
	 * @param ctx the parse tree
	 */
	exitSpcfunc?: (ctx: SpcfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.frefunc`.
	 * @param ctx the parse tree
	 */
	enterFrefunc?: (ctx: FrefuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.frefunc`.
	 * @param ctx the parse tree
	 */
	exitFrefunc?: (ctx: FrefuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.posfunc`.
	 * @param ctx the parse tree
	 */
	enterPosfunc?: (ctx: PosfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.posfunc`.
	 * @param ctx the parse tree
	 */
	exitPosfunc?: (ctx: PosfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.usrfunc`.
	 * @param ctx the parse tree
	 */
	enterUsrfunc?: (ctx: UsrfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.usrfunc`.
	 * @param ctx the parse tree
	 */
	exitUsrfunc?: (ctx: UsrfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.leftfunc`.
	 * @param ctx the parse tree
	 */
	enterLeftfunc?: (ctx: LeftfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.leftfunc`.
	 * @param ctx the parse tree
	 */
	exitLeftfunc?: (ctx: LeftfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.rightfunc`.
	 * @param ctx the parse tree
	 */
	enterRightfunc?: (ctx: RightfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.rightfunc`.
	 * @param ctx the parse tree
	 */
	exitRightfunc?: (ctx: RightfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.strfunc`.
	 * @param ctx the parse tree
	 */
	enterStrfunc?: (ctx: StrfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.strfunc`.
	 * @param ctx the parse tree
	 */
	exitStrfunc?: (ctx: StrfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.fnfunc`.
	 * @param ctx the parse tree
	 */
	enterFnfunc?: (ctx: FnfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.fnfunc`.
	 * @param ctx the parse tree
	 */
	exitFnfunc?: (ctx: FnfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.valfunc`.
	 * @param ctx the parse tree
	 */
	enterValfunc?: (ctx: ValfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.valfunc`.
	 * @param ctx the parse tree
	 */
	exitValfunc?: (ctx: ValfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.scrnfunc`.
	 * @param ctx the parse tree
	 */
	enterScrnfunc?: (ctx: ScrnfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.scrnfunc`.
	 * @param ctx the parse tree
	 */
	exitScrnfunc?: (ctx: ScrnfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.sinfunc`.
	 * @param ctx the parse tree
	 */
	enterSinfunc?: (ctx: SinfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.sinfunc`.
	 * @param ctx the parse tree
	 */
	exitSinfunc?: (ctx: SinfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.cosfunc`.
	 * @param ctx the parse tree
	 */
	enterCosfunc?: (ctx: CosfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.cosfunc`.
	 * @param ctx the parse tree
	 */
	exitCosfunc?: (ctx: CosfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.tanfunc`.
	 * @param ctx the parse tree
	 */
	enterTanfunc?: (ctx: TanfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.tanfunc`.
	 * @param ctx the parse tree
	 */
	exitTanfunc?: (ctx: TanfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.atnfunc`.
	 * @param ctx the parse tree
	 */
	enterAtnfunc?: (ctx: AtnfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.atnfunc`.
	 * @param ctx the parse tree
	 */
	exitAtnfunc?: (ctx: AtnfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.rndfunc`.
	 * @param ctx the parse tree
	 */
	enterRndfunc?: (ctx: RndfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.rndfunc`.
	 * @param ctx the parse tree
	 */
	exitRndfunc?: (ctx: RndfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.sgnfunc`.
	 * @param ctx the parse tree
	 */
	enterSgnfunc?: (ctx: SgnfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.sgnfunc`.
	 * @param ctx the parse tree
	 */
	exitSgnfunc?: (ctx: SgnfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.expfunc`.
	 * @param ctx the parse tree
	 */
	enterExpfunc?: (ctx: ExpfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.expfunc`.
	 * @param ctx the parse tree
	 */
	exitExpfunc?: (ctx: ExpfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.logfunc`.
	 * @param ctx the parse tree
	 */
	enterLogfunc?: (ctx: LogfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.logfunc`.
	 * @param ctx the parse tree
	 */
	exitLogfunc?: (ctx: LogfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.absfunc`.
	 * @param ctx the parse tree
	 */
	enterAbsfunc?: (ctx: AbsfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.absfunc`.
	 * @param ctx the parse tree
	 */
	exitAbsfunc?: (ctx: AbsfuncContext) => void;

	/**
	 * Enter a parse tree produced by `jvmBasicParser.tabfunc`.
	 * @param ctx the parse tree
	 */
	enterTabfunc?: (ctx: TabfuncContext) => void;
	/**
	 * Exit a parse tree produced by `jvmBasicParser.tabfunc`.
	 * @param ctx the parse tree
	 */
	exitTabfunc?: (ctx: TabfuncContext) => void;
}

