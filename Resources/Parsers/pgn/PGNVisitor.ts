// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pgn/PGN.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParseContext } from "./PGNParser";
import { Pgn_databaseContext } from "./PGNParser";
import { Pgn_gameContext } from "./PGNParser";
import { Tag_sectionContext } from "./PGNParser";
import { Tag_pairContext } from "./PGNParser";
import { Tag_nameContext } from "./PGNParser";
import { Tag_valueContext } from "./PGNParser";
import { Movetext_sectionContext } from "./PGNParser";
import { Element_sequenceContext } from "./PGNParser";
import { ElementContext } from "./PGNParser";
import { Move_number_indicationContext } from "./PGNParser";
import { San_moveContext } from "./PGNParser";
import { Recursive_variationContext } from "./PGNParser";
import { Game_terminationContext } from "./PGNParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PGNParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PGNVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PGNParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.pgn_database`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPgn_database?: (ctx: Pgn_databaseContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.pgn_game`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPgn_game?: (ctx: Pgn_gameContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.tag_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag_section?: (ctx: Tag_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.tag_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag_pair?: (ctx: Tag_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.tag_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag_name?: (ctx: Tag_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.tag_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag_value?: (ctx: Tag_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.movetext_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMovetext_section?: (ctx: Movetext_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.element_sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement_sequence?: (ctx: Element_sequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.move_number_indication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMove_number_indication?: (ctx: Move_number_indicationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.san_move`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSan_move?: (ctx: San_moveContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.recursive_variation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecursive_variation?: (ctx: Recursive_variationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGNParser.game_termination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGame_termination?: (ctx: Game_terminationContext) => Result;
}

