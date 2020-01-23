// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gff3/gff3.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DocumentContext } from "./gff3Parser";
import { LineContext } from "./gff3Parser";
import { DatalineContext } from "./gff3Parser";
import { AttributesContext } from "./gff3Parser";
import { AttributeContext } from "./gff3Parser";
import { SeqidContext } from "./gff3Parser";
import { SourceContext } from "./gff3Parser";
import { TypeContext } from "./gff3Parser";
import { StartContext } from "./gff3Parser";
import { EndContext } from "./gff3Parser";
import { StrandContext } from "./gff3Parser";
import { ScoreContext } from "./gff3Parser";
import { PhaseContext } from "./gff3Parser";
import { CommentlineContext } from "./gff3Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `gff3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface gff3Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `gff3Parser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.dataline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataline?: (ctx: DatalineContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.seqid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeqid?: (ctx: SeqidContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSource?: (ctx: SourceContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd?: (ctx: EndContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.strand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrand?: (ctx: StrandContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.score`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScore?: (ctx: ScoreContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.phase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhase?: (ctx: PhaseContext) => Result;

	/**
	 * Visit a parse tree produced by `gff3Parser.commentline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentline?: (ctx: CommentlineContext) => Result;
}

