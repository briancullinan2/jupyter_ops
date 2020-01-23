// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muparser/MuParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MuParserParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MuParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `powExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowExpr?: (ctx: PowExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryMinusExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `mulDivExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivExpr?: (ctx: MulDivExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `addSubExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubExpr?: (ctx: AddSubExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationalExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpr?: (ctx: RelationalExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpr?: (ctx: EqualityExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `iteExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIteExpr?: (ctx: IteExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpr?: (ctx: FunctionExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionMultiExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionMultiExpr?: (ctx: FunctionMultiExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `atomExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpr?: (ctx: AtomExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignExpr`
	 * labeled alternative in `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignExpr?: (ctx: AssignExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parExpr`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpr?: (ctx: ParExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberAtom?: (ctx: NumberAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanAtom?: (ctx: BooleanAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `predefinedConstantAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredefinedConstantAtom?: (ctx: PredefinedConstantAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `idAtom`
	 * labeled alternative in `MuParserParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdAtom?: (ctx: IdAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `progExpr`
	 * labeled alternative in `MuParserParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgExpr?: (ctx: ProgExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MuParserParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `MuParserParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MuParserParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
}

