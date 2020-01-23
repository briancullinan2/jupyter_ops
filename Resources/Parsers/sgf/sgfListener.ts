// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sgf/sgf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `sgfParser`.
 */
export interface sgfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `sgfParser.collection`.
	 * @param ctx the parse tree
	 */
	enterCollection?: (ctx: CollectionContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.collection`.
	 * @param ctx the parse tree
	 */
	exitCollection?: (ctx: CollectionContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.gameTree`.
	 * @param ctx the parse tree
	 */
	enterGameTree?: (ctx: GameTreeContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.gameTree`.
	 * @param ctx the parse tree
	 */
	exitGameTree?: (ctx: GameTreeContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.node`.
	 * @param ctx the parse tree
	 */
	enterNode?: (ctx: NodeContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.node`.
	 * @param ctx the parse tree
	 */
	exitNode?: (ctx: NodeContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.move`.
	 * @param ctx the parse tree
	 */
	enterMove?: (ctx: MoveContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.move`.
	 * @param ctx the parse tree
	 */
	exitMove?: (ctx: MoveContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.setup`.
	 * @param ctx the parse tree
	 */
	enterSetup?: (ctx: SetupContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.setup`.
	 * @param ctx the parse tree
	 */
	exitSetup?: (ctx: SetupContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.nodeAnnotation`.
	 * @param ctx the parse tree
	 */
	enterNodeAnnotation?: (ctx: NodeAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.nodeAnnotation`.
	 * @param ctx the parse tree
	 */
	exitNodeAnnotation?: (ctx: NodeAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.moveAnnotation`.
	 * @param ctx the parse tree
	 */
	enterMoveAnnotation?: (ctx: MoveAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.moveAnnotation`.
	 * @param ctx the parse tree
	 */
	exitMoveAnnotation?: (ctx: MoveAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.markup`.
	 * @param ctx the parse tree
	 */
	enterMarkup?: (ctx: MarkupContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.markup`.
	 * @param ctx the parse tree
	 */
	exitMarkup?: (ctx: MarkupContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.gameInfo`.
	 * @param ctx the parse tree
	 */
	enterGameInfo?: (ctx: GameInfoContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.gameInfo`.
	 * @param ctx the parse tree
	 */
	exitGameInfo?: (ctx: GameInfoContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.timing`.
	 * @param ctx the parse tree
	 */
	enterTiming?: (ctx: TimingContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.timing`.
	 * @param ctx the parse tree
	 */
	exitTiming?: (ctx: TimingContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.misc`.
	 * @param ctx the parse tree
	 */
	enterMisc?: (ctx: MiscContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.misc`.
	 * @param ctx the parse tree
	 */
	exitMisc?: (ctx: MiscContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.loa`.
	 * @param ctx the parse tree
	 */
	enterLoa?: (ctx: LoaContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.loa`.
	 * @param ctx the parse tree
	 */
	exitLoa?: (ctx: LoaContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.go`.
	 * @param ctx the parse tree
	 */
	enterGo?: (ctx: GoContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.go`.
	 * @param ctx the parse tree
	 */
	exitGo?: (ctx: GoContext) => void;

	/**
	 * Enter a parse tree produced by `sgfParser.privateProp`.
	 * @param ctx the parse tree
	 */
	enterPrivateProp?: (ctx: PrivatePropContext) => void;
	/**
	 * Exit a parse tree produced by `sgfParser.privateProp`.
	 * @param ctx the parse tree
	 */
	exitPrivateProp?: (ctx: PrivatePropContext) => void;
}

