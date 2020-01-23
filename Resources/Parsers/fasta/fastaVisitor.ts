// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fasta/fasta.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SequenceContext } from "./fastaParser";
import { SectionContext } from "./fastaParser";
import { SequencelinesContext } from "./fastaParser";
import { DescriptionlineContext } from "./fastaParser";
import { CommentlineContext } from "./fastaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `fastaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface fastaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `fastaParser.sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence?: (ctx: SequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `fastaParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `fastaParser.sequencelines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequencelines?: (ctx: SequencelinesContext) => Result;

	/**
	 * Visit a parse tree produced by `fastaParser.descriptionline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionline?: (ctx: DescriptionlineContext) => Result;

	/**
	 * Visit a parse tree produced by `fastaParser.commentline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentline?: (ctx: CommentlineContext) => Result;
}

