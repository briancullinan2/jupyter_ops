// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/graphemes/Graphemes.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Emoji_sequenceContext } from "./GraphemesParser";
import { Grapheme_clusterContext } from "./GraphemesParser";
import { GraphemesContext } from "./GraphemesParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GraphemesParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GraphemesVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GraphemesParser.emoji_sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmoji_sequence?: (ctx: Emoji_sequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphemesParser.grapheme_cluster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrapheme_cluster?: (ctx: Grapheme_clusterContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphemesParser.graphemes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraphemes?: (ctx: GraphemesContext) => Result;
}

