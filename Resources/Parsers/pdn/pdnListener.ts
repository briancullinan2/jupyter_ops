// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdn/pdn.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { GameContext } from "./pdnParser";
import { TagsContext } from "./pdnParser";
import { TagContext } from "./pdnParser";
import { MovesContext } from "./pdnParser";
import { MoveContext } from "./pdnParser";
import { MovespecContext } from "./pdnParser";
import { MovenumContext } from "./pdnParser";
import { ResultContext } from "./pdnParser";
import { TextContext } from "./pdnParser";
import { StringContext } from "./pdnParser";
import { NumberContext } from "./pdnParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `pdnParser`.
 */
export interface pdnListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `pdnParser.game`.
	 * @param ctx the parse tree
	 */
	enterGame?: (ctx: GameContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.game`.
	 * @param ctx the parse tree
	 */
	exitGame?: (ctx: GameContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.tags`.
	 * @param ctx the parse tree
	 */
	enterTags?: (ctx: TagsContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.tags`.
	 * @param ctx the parse tree
	 */
	exitTags?: (ctx: TagsContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.moves`.
	 * @param ctx the parse tree
	 */
	enterMoves?: (ctx: MovesContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.moves`.
	 * @param ctx the parse tree
	 */
	exitMoves?: (ctx: MovesContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.move`.
	 * @param ctx the parse tree
	 */
	enterMove?: (ctx: MoveContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.move`.
	 * @param ctx the parse tree
	 */
	exitMove?: (ctx: MoveContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.movespec`.
	 * @param ctx the parse tree
	 */
	enterMovespec?: (ctx: MovespecContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.movespec`.
	 * @param ctx the parse tree
	 */
	exitMovespec?: (ctx: MovespecContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.movenum`.
	 * @param ctx the parse tree
	 */
	enterMovenum?: (ctx: MovenumContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.movenum`.
	 * @param ctx the parse tree
	 */
	exitMovenum?: (ctx: MovenumContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.result`.
	 * @param ctx the parse tree
	 */
	enterResult?: (ctx: ResultContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.result`.
	 * @param ctx the parse tree
	 */
	exitResult?: (ctx: ResultContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `pdnParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `pdnParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

