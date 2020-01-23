// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/basic/jvmBasic.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `jvmBasicParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface jvmBasicVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `jvmBasicParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.amperoper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmperoper?: (ctx: AmperoperContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.linenumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinenumber?: (ctx: LinenumberContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.amprstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmprstmt?: (ctx: AmprstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.vardecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVardecl?: (ctx: VardeclContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.printstmt1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintstmt1?: (ctx: Printstmt1Context) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.printlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintlist?: (ctx: PrintlistContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.getstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetstmt?: (ctx: GetstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.letstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetstmt?: (ctx: LetstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.variableassignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableassignment?: (ctx: VariableassignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.relop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelop?: (ctx: RelopContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.neq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNeq?: (ctx: NeqContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.ifstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfstmt?: (ctx: IfstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.forstmt1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForstmt1?: (ctx: Forstmt1Context) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.forstmt2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForstmt2?: (ctx: Forstmt2Context) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.nextstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNextstmt?: (ctx: NextstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.inputstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputstmt?: (ctx: InputstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.readstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadstmt?: (ctx: ReadstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.dimstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimstmt?: (ctx: DimstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.gotostmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotostmt?: (ctx: GotostmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.gosubstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGosubstmt?: (ctx: GosubstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.pokestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPokestmt?: (ctx: PokestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.callstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallstmt?: (ctx: CallstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.hplotstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHplotstmt?: (ctx: HplotstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.vplotstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVplotstmt?: (ctx: VplotstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.plotstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlotstmt?: (ctx: PlotstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.ongotostmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOngotostmt?: (ctx: OngotostmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.ongosubstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOngosubstmt?: (ctx: OngosubstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.vtabstmnt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVtabstmnt?: (ctx: VtabstmntContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.htabstmnt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtabstmnt?: (ctx: HtabstmntContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.himemstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHimemstmt?: (ctx: HimemstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.lomemstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLomemstmt?: (ctx: LomemstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.datastmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatastmt?: (ctx: DatastmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.datum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatum?: (ctx: DatumContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.waitstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaitstmt?: (ctx: WaitstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.xdrawstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXdrawstmt?: (ctx: XdrawstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.drawstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawstmt?: (ctx: DrawstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.defstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefstmt?: (ctx: DefstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.tabstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabstmt?: (ctx: TabstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.speedstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpeedstmt?: (ctx: SpeedstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.rotstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRotstmt?: (ctx: RotstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.scalestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalestmt?: (ctx: ScalestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.colorstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColorstmt?: (ctx: ColorstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.hcolorstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHcolorstmt?: (ctx: HcolorstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.hlinstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHlinstmt?: (ctx: HlinstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.vlinstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVlinstmt?: (ctx: VlinstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.onerrstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnerrstmt?: (ctx: OnerrstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.prstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrstmt?: (ctx: PrstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.instmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstmt?: (ctx: InstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.storestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorestmt?: (ctx: StorestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.recallstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecallstmt?: (ctx: RecallstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.liststmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListstmt?: (ctx: ListstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.popstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPopstmt?: (ctx: PopstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.amptstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmptstmt?: (ctx: AmptstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.includestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludestmt?: (ctx: IncludestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.endstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndstmt?: (ctx: EndstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.returnstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnstmt?: (ctx: ReturnstmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.restorestmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRestorestmt?: (ctx: RestorestmtContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.signExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignExpression?: (ctx: SignExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.exponentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponentExpression?: (ctx: ExponentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.addingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddingExpression?: (ctx: AddingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.varname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarname?: (ctx: VarnameContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.varsuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarsuffix?: (ctx: VarsuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.varlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarlist?: (ctx: VarlistContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.sqrfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqrfunc?: (ctx: SqrfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.chrfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChrfunc?: (ctx: ChrfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.lenfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLenfunc?: (ctx: LenfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.ascfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAscfunc?: (ctx: AscfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.midfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMidfunc?: (ctx: MidfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.pdlfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPdlfunc?: (ctx: PdlfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.peekfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPeekfunc?: (ctx: PeekfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.intfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntfunc?: (ctx: IntfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.spcfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpcfunc?: (ctx: SpcfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.frefunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrefunc?: (ctx: FrefuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.posfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosfunc?: (ctx: PosfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.usrfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsrfunc?: (ctx: UsrfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.leftfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftfunc?: (ctx: LeftfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.rightfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightfunc?: (ctx: RightfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.strfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrfunc?: (ctx: StrfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.fnfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnfunc?: (ctx: FnfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.valfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValfunc?: (ctx: ValfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.scrnfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScrnfunc?: (ctx: ScrnfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.sinfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinfunc?: (ctx: SinfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.cosfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCosfunc?: (ctx: CosfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.tanfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTanfunc?: (ctx: TanfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.atnfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtnfunc?: (ctx: AtnfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.rndfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRndfunc?: (ctx: RndfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.sgnfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSgnfunc?: (ctx: SgnfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.expfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpfunc?: (ctx: ExpfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.logfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogfunc?: (ctx: LogfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.absfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsfunc?: (ctx: AbsfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `jvmBasicParser.tabfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabfunc?: (ctx: TabfuncContext) => Result;
}

