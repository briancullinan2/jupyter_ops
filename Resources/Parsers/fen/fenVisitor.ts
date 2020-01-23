// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fen/fen.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FenContext } from "./fenParser";
import { ColorContext } from "./fenParser";
import { CastlingContext } from "./fenParser";
import { EnpassantContext } from "./fenParser";
import { PositionContext } from "./fenParser";
import { HalfmoveclockContext } from "./fenParser";
import { FullmoveclockContext } from "./fenParser";
import { PlacementContext } from "./fenParser";
import { RankContext } from "./fenParser";
import { PieceContext } from "./fenParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `fenParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface fenVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `fenParser.fen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFen?: (ctx: FenContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.color`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColor?: (ctx: ColorContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.castling`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastling?: (ctx: CastlingContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.enpassant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnpassant?: (ctx: EnpassantContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.position`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.halfmoveclock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHalfmoveclock?: (ctx: HalfmoveclockContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.fullmoveclock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullmoveclock?: (ctx: FullmoveclockContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.placement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlacement?: (ctx: PlacementContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.rank`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRank?: (ctx: RankContext) => Result;

	/**
	 * Visit a parse tree produced by `fenParser.piece`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPiece?: (ctx: PieceContext) => Result;
}

