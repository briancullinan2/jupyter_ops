// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fen/fen.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `fenParser`.
 */
export interface fenListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `fenParser.fen`.
	 * @param ctx the parse tree
	 */
	enterFen?: (ctx: FenContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.fen`.
	 * @param ctx the parse tree
	 */
	exitFen?: (ctx: FenContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.color`.
	 * @param ctx the parse tree
	 */
	enterColor?: (ctx: ColorContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.color`.
	 * @param ctx the parse tree
	 */
	exitColor?: (ctx: ColorContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.castling`.
	 * @param ctx the parse tree
	 */
	enterCastling?: (ctx: CastlingContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.castling`.
	 * @param ctx the parse tree
	 */
	exitCastling?: (ctx: CastlingContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.enpassant`.
	 * @param ctx the parse tree
	 */
	enterEnpassant?: (ctx: EnpassantContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.enpassant`.
	 * @param ctx the parse tree
	 */
	exitEnpassant?: (ctx: EnpassantContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.position`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.position`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.halfmoveclock`.
	 * @param ctx the parse tree
	 */
	enterHalfmoveclock?: (ctx: HalfmoveclockContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.halfmoveclock`.
	 * @param ctx the parse tree
	 */
	exitHalfmoveclock?: (ctx: HalfmoveclockContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.fullmoveclock`.
	 * @param ctx the parse tree
	 */
	enterFullmoveclock?: (ctx: FullmoveclockContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.fullmoveclock`.
	 * @param ctx the parse tree
	 */
	exitFullmoveclock?: (ctx: FullmoveclockContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.placement`.
	 * @param ctx the parse tree
	 */
	enterPlacement?: (ctx: PlacementContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.placement`.
	 * @param ctx the parse tree
	 */
	exitPlacement?: (ctx: PlacementContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.rank`.
	 * @param ctx the parse tree
	 */
	enterRank?: (ctx: RankContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.rank`.
	 * @param ctx the parse tree
	 */
	exitRank?: (ctx: RankContext) => void;

	/**
	 * Enter a parse tree produced by `fenParser.piece`.
	 * @param ctx the parse tree
	 */
	enterPiece?: (ctx: PieceContext) => void;
	/**
	 * Exit a parse tree produced by `fenParser.piece`.
	 * @param ctx the parse tree
	 */
	exitPiece?: (ctx: PieceContext) => void;
}

