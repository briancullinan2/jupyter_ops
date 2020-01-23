// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muparser/MuParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PowExprContext } from "./MuParserParser";
import { UnaryMinusExprContext } from "./MuParserParser";
import { MulDivExprContext } from "./MuParserParser";
import { AddSubExprContext } from "./MuParserParser";
import { RelationalExprContext } from "./MuParserParser";
import { EqualityExprContext } from "./MuParserParser";
import { AndExprContext } from "./MuParserParser";
import { OrExprContext } from "./MuParserParser";
import { IteExprContext } from "./MuParserParser";
import { FunctionExprContext } from "./MuParserParser";
import { FunctionMultiExprContext } from "./MuParserParser";
import { AtomExprContext } from "./MuParserParser";
import { AssignExprContext } from "./MuParserParser";
import { ParExprContext } from "./MuParserParser";
import { NumberAtomContext } from "./MuParserParser";
import { BooleanAtomContext } from "./MuParserParser";
import { PredefinedConstantAtomContext } from "./MuParserParser";
import { IdAtomContext } from "./MuParserParser";
import { ProgExprContext } from "./MuParserParser";
import { ProgContext } from "./MuParserParser";
import { ExprContext } from "./MuParserParser";
import { AtomContext } from "./MuParserParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MuParserParser`.
 */
export interface MuParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `powExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterPowExpr?: (ctx: PowExprContext) => void;
	/**
	 * Exit a parse tree produced by the `powExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitPowExpr?: (ctx: PowExprContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryMinusExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryMinusExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;

	/**
	 * Enter a parse tree produced by the `mulDivExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulDivExpr?: (ctx: MulDivExprContext) => void;
	/**
	 * Exit a parse tree produced by the `mulDivExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulDivExpr?: (ctx: MulDivExprContext) => void;

	/**
	 * Enter a parse tree produced by the `addSubExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddSubExpr?: (ctx: AddSubExprContext) => void;
	/**
	 * Exit a parse tree produced by the `addSubExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddSubExpr?: (ctx: AddSubExprContext) => void;

	/**
	 * Enter a parse tree produced by the `relationalExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpr?: (ctx: RelationalExprContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpr?: (ctx: RelationalExprContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpr?: (ctx: EqualityExprContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpr?: (ctx: EqualityExprContext) => void;

	/**
	 * Enter a parse tree produced by the `andExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `andExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `orExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `orExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `iteExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIteExpr?: (ctx: IteExprContext) => void;
	/**
	 * Exit a parse tree produced by the `iteExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIteExpr?: (ctx: IteExprContext) => void;

	/**
	 * Enter a parse tree produced by the `functionExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpr?: (ctx: FunctionExprContext) => void;
	/**
	 * Exit a parse tree produced by the `functionExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpr?: (ctx: FunctionExprContext) => void;

	/**
	 * Enter a parse tree produced by the `functionMultiExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionMultiExpr?: (ctx: FunctionMultiExprContext) => void;
	/**
	 * Exit a parse tree produced by the `functionMultiExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionMultiExpr?: (ctx: FunctionMultiExprContext) => void;

	/**
	 * Enter a parse tree produced by the `atomExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAtomExpr?: (ctx: AtomExprContext) => void;
	/**
	 * Exit a parse tree produced by the `atomExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAtomExpr?: (ctx: AtomExprContext) => void;

	/**
	 * Enter a parse tree produced by the `assignExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAssignExpr?: (ctx: AssignExprContext) => void;
	/**
	 * Exit a parse tree produced by the `assignExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAssignExpr?: (ctx: AssignExprContext) => void;

	/**
	 * Enter a parse tree produced by the `parExpr`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	enterParExpr?: (ctx: ParExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parExpr`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	exitParExpr?: (ctx: ParExprContext) => void;

	/**
	 * Enter a parse tree produced by the `numberAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	enterNumberAtom?: (ctx: NumberAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `numberAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	exitNumberAtom?: (ctx: NumberAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	enterBooleanAtom?: (ctx: BooleanAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	exitBooleanAtom?: (ctx: BooleanAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `predefinedConstantAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	enterPredefinedConstantAtom?: (ctx: PredefinedConstantAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `predefinedConstantAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	exitPredefinedConstantAtom?: (ctx: PredefinedConstantAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `idAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	enterIdAtom?: (ctx: IdAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `idAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	exitIdAtom?: (ctx: IdAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `progExpr`
	 * labeled alternative in `MuParserParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProgExpr?: (ctx: ProgExprContext) => void;
	/**
	 * Exit a parse tree produced by the `progExpr`
	 * labeled alternative in `MuParserParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProgExpr?: (ctx: ProgExprContext) => void;

	/**
	 * Enter a parse tree produced by `MuParserParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `MuParserParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `MuParserParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `MuParserParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
}

