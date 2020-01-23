// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sgf/sgf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CollectionContext } from "./sgfParser";
import { GameTreeContext } from "./sgfParser";
import { SequenceContext } from "./sgfParser";
import { NodeContext } from "./sgfParser";
import { PropertyContext } from "./sgfParser";
import { MoveContext } from "./sgfParser";
import { SetupContext } from "./sgfParser";
import { NodeAnnotationContext } from "./sgfParser";
import { MoveAnnotationContext } from "./sgfParser";
import { MarkupContext } from "./sgfParser";
import { RootContext } from "./sgfParser";
import { GameInfoContext } from "./sgfParser";
import { TimingContext } from "./sgfParser";
import { MiscContext } from "./sgfParser";
import { LoaContext } from "./sgfParser";
import { GoContext } from "./sgfParser";
import { PrivatePropContext } from "./sgfParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `sgfParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface sgfVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `sgfParser.collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection?: (ctx: CollectionContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.gameTree`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGameTree?: (ctx: GameTreeContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence?: (ctx: SequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.node`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode?: (ctx: NodeContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.move`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMove?: (ctx: MoveContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.setup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetup?: (ctx: SetupContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.nodeAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodeAnnotation?: (ctx: NodeAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.moveAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoveAnnotation?: (ctx: MoveAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.markup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMarkup?: (ctx: MarkupContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.gameInfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGameInfo?: (ctx: GameInfoContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.timing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTiming?: (ctx: TimingContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.misc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMisc?: (ctx: MiscContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.loa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoa?: (ctx: LoaContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.go`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGo?: (ctx: GoContext) => Result;

	/**
	 * Visit a parse tree produced by `sgfParser.privateProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivateProp?: (ctx: PrivatePropContext) => Result;
}

