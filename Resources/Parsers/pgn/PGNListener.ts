// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pgn/PGN.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PGNParser`.
 */
export interface PGNListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PGNParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.pgn_database`.
	 * @param ctx the parse tree
	 */
	enterPgn_database?: (ctx: Pgn_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.pgn_database`.
	 * @param ctx the parse tree
	 */
	exitPgn_database?: (ctx: Pgn_databaseContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.pgn_game`.
	 * @param ctx the parse tree
	 */
	enterPgn_game?: (ctx: Pgn_gameContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.pgn_game`.
	 * @param ctx the parse tree
	 */
	exitPgn_game?: (ctx: Pgn_gameContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.tag_section`.
	 * @param ctx the parse tree
	 */
	enterTag_section?: (ctx: Tag_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.tag_section`.
	 * @param ctx the parse tree
	 */
	exitTag_section?: (ctx: Tag_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.tag_pair`.
	 * @param ctx the parse tree
	 */
	enterTag_pair?: (ctx: Tag_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.tag_pair`.
	 * @param ctx the parse tree
	 */
	exitTag_pair?: (ctx: Tag_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.tag_name`.
	 * @param ctx the parse tree
	 */
	enterTag_name?: (ctx: Tag_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.tag_name`.
	 * @param ctx the parse tree
	 */
	exitTag_name?: (ctx: Tag_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.tag_value`.
	 * @param ctx the parse tree
	 */
	enterTag_value?: (ctx: Tag_valueContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.tag_value`.
	 * @param ctx the parse tree
	 */
	exitTag_value?: (ctx: Tag_valueContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.movetext_section`.
	 * @param ctx the parse tree
	 */
	enterMovetext_section?: (ctx: Movetext_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.movetext_section`.
	 * @param ctx the parse tree
	 */
	exitMovetext_section?: (ctx: Movetext_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.element_sequence`.
	 * @param ctx the parse tree
	 */
	enterElement_sequence?: (ctx: Element_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.element_sequence`.
	 * @param ctx the parse tree
	 */
	exitElement_sequence?: (ctx: Element_sequenceContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.move_number_indication`.
	 * @param ctx the parse tree
	 */
	enterMove_number_indication?: (ctx: Move_number_indicationContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.move_number_indication`.
	 * @param ctx the parse tree
	 */
	exitMove_number_indication?: (ctx: Move_number_indicationContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.san_move`.
	 * @param ctx the parse tree
	 */
	enterSan_move?: (ctx: San_moveContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.san_move`.
	 * @param ctx the parse tree
	 */
	exitSan_move?: (ctx: San_moveContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.recursive_variation`.
	 * @param ctx the parse tree
	 */
	enterRecursive_variation?: (ctx: Recursive_variationContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.recursive_variation`.
	 * @param ctx the parse tree
	 */
	exitRecursive_variation?: (ctx: Recursive_variationContext) => void;

	/**
	 * Enter a parse tree produced by `PGNParser.game_termination`.
	 * @param ctx the parse tree
	 */
	enterGame_termination?: (ctx: Game_terminationContext) => void;
	/**
	 * Exit a parse tree produced by `PGNParser.game_termination`.
	 * @param ctx the parse tree
	 */
	exitGame_termination?: (ctx: Game_terminationContext) => void;
}

