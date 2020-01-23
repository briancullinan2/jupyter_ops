// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/guido/guido.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./guidoParser";
import { SegmentContext } from "./guidoParser";
import { SequencelistContext } from "./guidoParser";
import { SequenceContext } from "./guidoParser";
import { TagContext } from "./guidoParser";
import { TagnameContext } from "./guidoParser";
import { ParametersContext } from "./guidoParser";
import { ParameterContext } from "./guidoParser";
import { KvpairContext } from "./guidoParser";
import { NotesContext } from "./guidoParser";
import { NoteContext } from "./guidoParser";
import { ChordContext } from "./guidoParser";
import { NotenameContext } from "./guidoParser";
import { AccidentalContext } from "./guidoParser";
import { NumberContext } from "./guidoParser";
import { OctaveContext } from "./guidoParser";
import { FractionContext } from "./guidoParser";
import { DurationContext } from "./guidoParser";
import { DottingContext } from "./guidoParser";
import { TitleContext } from "./guidoParser";
import { TempoContext } from "./guidoParser";
import { ClefContext } from "./guidoParser";
import { MeterContext } from "./guidoParser";
import { SlurContext } from "./guidoParser";
import { KeyContext } from "./guidoParser";
import { BarformatContext } from "./guidoParser";
import { StaffContext } from "./guidoParser";
import { RepeatEndContext } from "./guidoParser";
import { TContext } from "./guidoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `guidoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface guidoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `guidoParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.sequencelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequencelist?: (ctx: SequencelistContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence?: (ctx: SequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.tagname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagname?: (ctx: TagnameContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.kvpair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKvpair?: (ctx: KvpairContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.notes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotes?: (ctx: NotesContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.note`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNote?: (ctx: NoteContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.chord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChord?: (ctx: ChordContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.notename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotename?: (ctx: NotenameContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.accidental`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccidental?: (ctx: AccidentalContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.octave`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctave?: (ctx: OctaveContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.fraction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFraction?: (ctx: FractionContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.dotting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotting?: (ctx: DottingContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.title`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitle?: (ctx: TitleContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.tempo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTempo?: (ctx: TempoContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.clef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClef?: (ctx: ClefContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.meter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeter?: (ctx: MeterContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.slur`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlur?: (ctx: SlurContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.barformat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBarformat?: (ctx: BarformatContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.staff`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaff?: (ctx: StaffContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.repeatEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatEnd?: (ctx: RepeatEndContext) => Result;

	/**
	 * Visit a parse tree produced by `guidoParser.t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT?: (ctx: TContext) => Result;
}

