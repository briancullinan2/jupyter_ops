// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gff3/gff3.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `gff3Parser`.
 */
export interface gff3Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `gff3Parser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.dataline`.
	 * @param ctx the parse tree
	 */
	enterDataline?: (ctx: DatalineContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.dataline`.
	 * @param ctx the parse tree
	 */
	exitDataline?: (ctx: DatalineContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.seqid`.
	 * @param ctx the parse tree
	 */
	enterSeqid?: (ctx: SeqidContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.seqid`.
	 * @param ctx the parse tree
	 */
	exitSeqid?: (ctx: SeqidContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.source`.
	 * @param ctx the parse tree
	 */
	enterSource?: (ctx: SourceContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.source`.
	 * @param ctx the parse tree
	 */
	exitSource?: (ctx: SourceContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.strand`.
	 * @param ctx the parse tree
	 */
	enterStrand?: (ctx: StrandContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.strand`.
	 * @param ctx the parse tree
	 */
	exitStrand?: (ctx: StrandContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.score`.
	 * @param ctx the parse tree
	 */
	enterScore?: (ctx: ScoreContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.score`.
	 * @param ctx the parse tree
	 */
	exitScore?: (ctx: ScoreContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.phase`.
	 * @param ctx the parse tree
	 */
	enterPhase?: (ctx: PhaseContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.phase`.
	 * @param ctx the parse tree
	 */
	exitPhase?: (ctx: PhaseContext) => void;

	/**
	 * Enter a parse tree produced by `gff3Parser.commentline`.
	 * @param ctx the parse tree
	 */
	enterCommentline?: (ctx: CommentlineContext) => void;
	/**
	 * Exit a parse tree produced by `gff3Parser.commentline`.
	 * @param ctx the parse tree
	 */
	exitCommentline?: (ctx: CommentlineContext) => void;
}

