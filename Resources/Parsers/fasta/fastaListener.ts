// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fasta/fasta.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SequenceContext } from "./fastaParser";
import { SectionContext } from "./fastaParser";
import { SequencelinesContext } from "./fastaParser";
import { DescriptionlineContext } from "./fastaParser";
import { CommentlineContext } from "./fastaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `fastaParser`.
 */
export interface fastaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `fastaParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `fastaParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;

	/**
	 * Enter a parse tree produced by `fastaParser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `fastaParser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `fastaParser.sequencelines`.
	 * @param ctx the parse tree
	 */
	enterSequencelines?: (ctx: SequencelinesContext) => void;
	/**
	 * Exit a parse tree produced by `fastaParser.sequencelines`.
	 * @param ctx the parse tree
	 */
	exitSequencelines?: (ctx: SequencelinesContext) => void;

	/**
	 * Enter a parse tree produced by `fastaParser.descriptionline`.
	 * @param ctx the parse tree
	 */
	enterDescriptionline?: (ctx: DescriptionlineContext) => void;
	/**
	 * Exit a parse tree produced by `fastaParser.descriptionline`.
	 * @param ctx the parse tree
	 */
	exitDescriptionline?: (ctx: DescriptionlineContext) => void;

	/**
	 * Enter a parse tree produced by `fastaParser.commentline`.
	 * @param ctx the parse tree
	 */
	enterCommentline?: (ctx: CommentlineContext) => void;
	/**
	 * Exit a parse tree produced by `fastaParser.commentline`.
	 * @param ctx the parse tree
	 */
	exitCommentline?: (ctx: CommentlineContext) => void;
}

