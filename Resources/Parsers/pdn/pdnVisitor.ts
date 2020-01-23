// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdn/pdn.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `pdnParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface pdnVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `pdnParser.game`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGame?: (ctx: GameContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.tags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTags?: (ctx: TagsContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.moves`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoves?: (ctx: MovesContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.move`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMove?: (ctx: MoveContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.movespec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMovespec?: (ctx: MovespecContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.movenum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMovenum?: (ctx: MovenumContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `pdnParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

