// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/graphemes/Graphemes.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Emoji_sequenceContext } from "./GraphemesParser";
import { Grapheme_clusterContext } from "./GraphemesParser";
import { GraphemesContext } from "./GraphemesParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GraphemesParser`.
 */
export interface GraphemesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GraphemesParser.emoji_sequence`.
	 * @param ctx the parse tree
	 */
	enterEmoji_sequence?: (ctx: Emoji_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GraphemesParser.emoji_sequence`.
	 * @param ctx the parse tree
	 */
	exitEmoji_sequence?: (ctx: Emoji_sequenceContext) => void;

	/**
	 * Enter a parse tree produced by `GraphemesParser.grapheme_cluster`.
	 * @param ctx the parse tree
	 */
	enterGrapheme_cluster?: (ctx: Grapheme_clusterContext) => void;
	/**
	 * Exit a parse tree produced by `GraphemesParser.grapheme_cluster`.
	 * @param ctx the parse tree
	 */
	exitGrapheme_cluster?: (ctx: Grapheme_clusterContext) => void;

	/**
	 * Enter a parse tree produced by `GraphemesParser.graphemes`.
	 * @param ctx the parse tree
	 */
	enterGraphemes?: (ctx: GraphemesContext) => void;
	/**
	 * Exit a parse tree produced by `GraphemesParser.graphemes`.
	 * @param ctx the parse tree
	 */
	exitGraphemes?: (ctx: GraphemesContext) => void;
}

