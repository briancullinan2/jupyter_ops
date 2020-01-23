// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/guido/guido.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `guidoParser`.
 */
export interface guidoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `guidoParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.sequencelist`.
	 * @param ctx the parse tree
	 */
	enterSequencelist?: (ctx: SequencelistContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.sequencelist`.
	 * @param ctx the parse tree
	 */
	exitSequencelist?: (ctx: SequencelistContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.tagname`.
	 * @param ctx the parse tree
	 */
	enterTagname?: (ctx: TagnameContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.tagname`.
	 * @param ctx the parse tree
	 */
	exitTagname?: (ctx: TagnameContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.kvpair`.
	 * @param ctx the parse tree
	 */
	enterKvpair?: (ctx: KvpairContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.kvpair`.
	 * @param ctx the parse tree
	 */
	exitKvpair?: (ctx: KvpairContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.notes`.
	 * @param ctx the parse tree
	 */
	enterNotes?: (ctx: NotesContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.notes`.
	 * @param ctx the parse tree
	 */
	exitNotes?: (ctx: NotesContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.note`.
	 * @param ctx the parse tree
	 */
	enterNote?: (ctx: NoteContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.note`.
	 * @param ctx the parse tree
	 */
	exitNote?: (ctx: NoteContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.chord`.
	 * @param ctx the parse tree
	 */
	enterChord?: (ctx: ChordContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.chord`.
	 * @param ctx the parse tree
	 */
	exitChord?: (ctx: ChordContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.notename`.
	 * @param ctx the parse tree
	 */
	enterNotename?: (ctx: NotenameContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.notename`.
	 * @param ctx the parse tree
	 */
	exitNotename?: (ctx: NotenameContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.accidental`.
	 * @param ctx the parse tree
	 */
	enterAccidental?: (ctx: AccidentalContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.accidental`.
	 * @param ctx the parse tree
	 */
	exitAccidental?: (ctx: AccidentalContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.octave`.
	 * @param ctx the parse tree
	 */
	enterOctave?: (ctx: OctaveContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.octave`.
	 * @param ctx the parse tree
	 */
	exitOctave?: (ctx: OctaveContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.fraction`.
	 * @param ctx the parse tree
	 */
	enterFraction?: (ctx: FractionContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.fraction`.
	 * @param ctx the parse tree
	 */
	exitFraction?: (ctx: FractionContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.dotting`.
	 * @param ctx the parse tree
	 */
	enterDotting?: (ctx: DottingContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.dotting`.
	 * @param ctx the parse tree
	 */
	exitDotting?: (ctx: DottingContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.tempo`.
	 * @param ctx the parse tree
	 */
	enterTempo?: (ctx: TempoContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.tempo`.
	 * @param ctx the parse tree
	 */
	exitTempo?: (ctx: TempoContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.clef`.
	 * @param ctx the parse tree
	 */
	enterClef?: (ctx: ClefContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.clef`.
	 * @param ctx the parse tree
	 */
	exitClef?: (ctx: ClefContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.meter`.
	 * @param ctx the parse tree
	 */
	enterMeter?: (ctx: MeterContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.meter`.
	 * @param ctx the parse tree
	 */
	exitMeter?: (ctx: MeterContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.slur`.
	 * @param ctx the parse tree
	 */
	enterSlur?: (ctx: SlurContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.slur`.
	 * @param ctx the parse tree
	 */
	exitSlur?: (ctx: SlurContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.barformat`.
	 * @param ctx the parse tree
	 */
	enterBarformat?: (ctx: BarformatContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.barformat`.
	 * @param ctx the parse tree
	 */
	exitBarformat?: (ctx: BarformatContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.staff`.
	 * @param ctx the parse tree
	 */
	enterStaff?: (ctx: StaffContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.staff`.
	 * @param ctx the parse tree
	 */
	exitStaff?: (ctx: StaffContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.repeatEnd`.
	 * @param ctx the parse tree
	 */
	enterRepeatEnd?: (ctx: RepeatEndContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.repeatEnd`.
	 * @param ctx the parse tree
	 */
	exitRepeatEnd?: (ctx: RepeatEndContext) => void;

	/**
	 * Enter a parse tree produced by `guidoParser.t`.
	 * @param ctx the parse tree
	 */
	enterT?: (ctx: TContext) => void;
	/**
	 * Exit a parse tree produced by `guidoParser.t`.
	 * @param ctx the parse tree
	 */
	exitT?: (ctx: TContext) => void;
}

