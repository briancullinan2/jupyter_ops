// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/guido/guido.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { guidoListener } from "./guidoListener";
import { guidoVisitor } from "./guidoVisitor";


export class guidoParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly TAGSTART = 28;
	public static readonly REST = 29;
	public static readonly NUMBER = 30;
	public static readonly STRING = 31;
	public static readonly STRINGLITERAL = 32;
	public static readonly COMMENT = 33;
	public static readonly WS = 34;
	public static readonly RULE_prog = 0;
	public static readonly RULE_segment = 1;
	public static readonly RULE_sequencelist = 2;
	public static readonly RULE_sequence = 3;
	public static readonly RULE_tag = 4;
	public static readonly RULE_tagname = 5;
	public static readonly RULE_parameters = 6;
	public static readonly RULE_parameter = 7;
	public static readonly RULE_kvpair = 8;
	public static readonly RULE_notes = 9;
	public static readonly RULE_note = 10;
	public static readonly RULE_chord = 11;
	public static readonly RULE_notename = 12;
	public static readonly RULE_accidental = 13;
	public static readonly RULE_number = 14;
	public static readonly RULE_octave = 15;
	public static readonly RULE_fraction = 16;
	public static readonly RULE_duration = 17;
	public static readonly RULE_dotting = 18;
	public static readonly RULE_title = 19;
	public static readonly RULE_tempo = 20;
	public static readonly RULE_clef = 21;
	public static readonly RULE_meter = 22;
	public static readonly RULE_slur = 23;
	public static readonly RULE_key = 24;
	public static readonly RULE_barformat = 25;
	public static readonly RULE_staff = 26;
	public static readonly RULE_repeatEnd = 27;
	public static readonly RULE_t = 28;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "segment", "sequencelist", "sequence", "tag", "tagname", "parameters", 
		"parameter", "kvpair", "notes", "note", "chord", "notename", "accidental", 
		"number", "octave", "fraction", "duration", "dotting", "title", "tempo", 
		"clef", "meter", "slur", "key", "barformat", "staff", "repeatEnd", "t",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "','", "'['", "']'", "'<'", "'>'", "'='", "'('", 
		"')'", "'#'", "'&'", "'-'", "'+'", "'/'", "'*'", "'.'", "'title'", "'tempo'", 
		"'clef'", "'meter'", "'slur'", "'key'", "'barFormat'", "'staff'", "'repeatEnd'", 
		"'t'", "'\\'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"TAGSTART", "REST", "NUMBER", "STRING", "STRINGLITERAL", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(guidoParser._LITERAL_NAMES, guidoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return guidoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "guido.g4"; }

	// @Override
	public get ruleNames(): string[] { return guidoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return guidoParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(guidoParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, guidoParser.RULE_prog);
		let _la: number;
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case guidoParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 58;
					this.segment();
					}
					}
					this.state = 61;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === guidoParser.T__0);
				}
				}
				break;
			case guidoParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.sequencelist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, guidoParser.RULE_segment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(guidoParser.T__0);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 67;
				this.sequencelist();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === guidoParser.T__3);
			this.state = 72;
			this.match(guidoParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequencelist(): SequencelistContext {
		let _localctx: SequencelistContext = new SequencelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, guidoParser.RULE_sequencelist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.sequence();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === guidoParser.T__2) {
				{
				{
				this.state = 75;
				this.match(guidoParser.T__2);
				this.state = 76;
				this.sequence();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequence(): SequenceContext {
		let _localctx: SequenceContext = new SequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, guidoParser.RULE_sequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(guidoParser.T__3);
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 86;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case guidoParser.TAGSTART:
					{
					this.state = 83;
					this.tag();
					}
					break;
				case guidoParser.REST:
				case guidoParser.STRING:
					{
					this.state = 84;
					this.note();
					}
					break;
				case guidoParser.T__0:
					{
					this.state = 85;
					this.chord();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << guidoParser.T__0) | (1 << guidoParser.TAGSTART) | (1 << guidoParser.REST) | (1 << guidoParser.STRING))) !== 0));
			this.state = 90;
			this.match(guidoParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, guidoParser.RULE_tag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(guidoParser.TAGSTART);
			this.state = 93;
			this.tagname();
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === guidoParser.T__5) {
				{
				this.state = 94;
				this.parameters();
				}
			}

			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === guidoParser.T__8) {
				{
				this.state = 97;
				this.notes();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagname(): TagnameContext {
		let _localctx: TagnameContext = new TagnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, guidoParser.RULE_tagname);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case guidoParser.T__17:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.title();
				}
				break;
			case guidoParser.T__18:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 101;
				this.tempo();
				}
				break;
			case guidoParser.T__19:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 102;
				this.clef();
				}
				break;
			case guidoParser.T__20:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
				this.meter();
				}
				break;
			case guidoParser.T__21:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 104;
				this.slur();
				}
				break;
			case guidoParser.T__22:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 105;
				this.key();
				}
				break;
			case guidoParser.T__23:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 106;
				this.barformat();
				}
				break;
			case guidoParser.T__24:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 107;
				this.staff();
				}
				break;
			case guidoParser.T__26:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 108;
				this.t();
				}
				break;
			case guidoParser.T__25:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 109;
				this.repeatEnd();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, guidoParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(guidoParser.T__5);
			this.state = 113;
			this.parameter();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === guidoParser.T__2) {
				{
				{
				this.state = 114;
				this.match(guidoParser.T__2);
				this.state = 115;
				this.parameter();
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 121;
			this.match(guidoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, guidoParser.RULE_parameter);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case guidoParser.STRINGLITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 123;
				this.match(guidoParser.STRINGLITERAL);
				}
				break;
			case guidoParser.T__12:
			case guidoParser.T__13:
			case guidoParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 124;
				this.number();
				}
				break;
			case guidoParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 125;
				this.kvpair();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kvpair(): KvpairContext {
		let _localctx: KvpairContext = new KvpairContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, guidoParser.RULE_kvpair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(guidoParser.STRING);
			this.state = 129;
			this.match(guidoParser.T__7);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 130;
				_la = this._input.LA(1);
				if (!(_la === guidoParser.NUMBER || _la === guidoParser.STRING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === guidoParser.NUMBER || _la === guidoParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notes(): NotesContext {
		let _localctx: NotesContext = new NotesContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, guidoParser.RULE_notes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(guidoParser.T__8);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 138;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case guidoParser.REST:
				case guidoParser.STRING:
					{
					this.state = 136;
					this.note();
					}
					break;
				case guidoParser.T__0:
					{
					this.state = 137;
					this.chord();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << guidoParser.T__0) | (1 << guidoParser.REST) | (1 << guidoParser.STRING))) !== 0));
			this.state = 142;
			this.match(guidoParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public note(): NoteContext {
		let _localctx: NoteContext = new NoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, guidoParser.RULE_note);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.notename();
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === guidoParser.T__10 || _la === guidoParser.T__11) {
				{
				this.state = 145;
				this.accidental();
				}
			}

			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.octave();
				}
				break;
			}
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 151;
				this.duration();
				}
				break;
			}
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === guidoParser.T__16) {
				{
				this.state = 154;
				this.dotting();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chord(): ChordContext {
		let _localctx: ChordContext = new ChordContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, guidoParser.RULE_chord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(guidoParser.T__0);
			this.state = 158;
			this.note();
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === guidoParser.T__2) {
				{
				{
				this.state = 159;
				this.match(guidoParser.T__2);
				this.state = 160;
				this.note();
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 166;
			this.match(guidoParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notename(): NotenameContext {
		let _localctx: NotenameContext = new NotenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, guidoParser.RULE_notename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			_la = this._input.LA(1);
			if (!(_la === guidoParser.REST || _la === guidoParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accidental(): AccidentalContext {
		let _localctx: AccidentalContext = new AccidentalContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, guidoParser.RULE_accidental);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			_la = this._input.LA(1);
			if (!(_la === guidoParser.T__10 || _la === guidoParser.T__11)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, guidoParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === guidoParser.T__12 || _la === guidoParser.T__13) {
				{
				this.state = 172;
				_la = this._input.LA(1);
				if (!(_la === guidoParser.T__12 || _la === guidoParser.T__13)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 175;
			this.match(guidoParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public octave(): OctaveContext {
		let _localctx: OctaveContext = new OctaveContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, guidoParser.RULE_octave);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fraction(): FractionContext {
		let _localctx: FractionContext = new FractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, guidoParser.RULE_fraction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << guidoParser.T__12) | (1 << guidoParser.T__13) | (1 << guidoParser.NUMBER))) !== 0)) {
				{
				this.state = 179;
				this.number();
				}
			}

			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === guidoParser.T__14) {
				{
				this.state = 182;
				this.match(guidoParser.T__14);
				this.state = 183;
				this.number();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public duration(): DurationContext {
		let _localctx: DurationContext = new DurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, guidoParser.RULE_duration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === guidoParser.T__15) {
				{
				this.state = 186;
				this.match(guidoParser.T__15);
				}
			}

			this.state = 189;
			this.fraction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotting(): DottingContext {
		let _localctx: DottingContext = new DottingContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, guidoParser.RULE_dotting);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 191;
				this.match(guidoParser.T__16);
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === guidoParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public title(): TitleContext {
		let _localctx: TitleContext = new TitleContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, guidoParser.RULE_title);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(guidoParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tempo(): TempoContext {
		let _localctx: TempoContext = new TempoContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, guidoParser.RULE_tempo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(guidoParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clef(): ClefContext {
		let _localctx: ClefContext = new ClefContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, guidoParser.RULE_clef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(guidoParser.T__19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meter(): MeterContext {
		let _localctx: MeterContext = new MeterContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, guidoParser.RULE_meter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(guidoParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public slur(): SlurContext {
		let _localctx: SlurContext = new SlurContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, guidoParser.RULE_slur);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(guidoParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, guidoParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(guidoParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public barformat(): BarformatContext {
		let _localctx: BarformatContext = new BarformatContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, guidoParser.RULE_barformat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(guidoParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staff(): StaffContext {
		let _localctx: StaffContext = new StaffContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, guidoParser.RULE_staff);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(guidoParser.T__24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatEnd(): RepeatEndContext {
		let _localctx: RepeatEndContext = new RepeatEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, guidoParser.RULE_repeatEnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(guidoParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public t(): TContext {
		let _localctx: TContext = new TContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, guidoParser.RULE_t);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(guidoParser.T__26);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\xDB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x06\x02>\n\x02\r\x02\x0E\x02?\x03\x02" +
		"\x05\x02C\n\x02\x03\x03\x03\x03\x06\x03G\n\x03\r\x03\x0E\x03H\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04P\n\x04\f\x04\x0E\x04S\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x06\x05Y\n\x05\r\x05\x0E\x05Z\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x05\x06b\n\x06\x03\x06\x05\x06e\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07q\n\x07\x03\b\x03\b\x03\b\x03\b\x07\bw\n\b\f\b\x0E\bz\v\b" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\x81\n\t\x03\n\x03\n\x03\n\x06\n\x86" +
		"\n\n\r\n\x0E\n\x87\x03\v\x03\v\x03\v\x06\v\x8D\n\v\r\v\x0E\v\x8E\x03\v" +
		"\x03\v\x03\f\x03\f\x05\f\x95\n\f\x03\f\x05\f\x98\n\f\x03\f\x05\f\x9B\n" +
		"\f\x03\f\x05\f\x9E\n\f\x03\r\x03\r\x03\r\x03\r\x07\r\xA4\n\r\f\r\x0E\r" +
		"\xA7\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x05\x10\xB0" +
		"\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x05\x12\xB7\n\x12\x03\x12" +
		"\x03\x12\x05\x12\xBB\n\x12\x03\x13\x05\x13\xBE\n\x13\x03\x13\x03\x13\x03" +
		"\x14\x06\x14\xC3\n\x14\r\x14\x0E\x14\xC4\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x02\x02" +
		"\x02\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02\x02\x06\x03\x02" +
		" !\x04\x02\x1F\x1F!!\x03\x02\r\x0E\x03\x02\x0F\x10\x02\xDF\x02B\x03\x02" +
		"\x02\x02\x04D\x03\x02\x02\x02\x06L\x03\x02\x02\x02\bT\x03\x02\x02\x02" +
		"\n^\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0Er\x03\x02\x02\x02\x10\x80\x03" +
		"\x02\x02\x02\x12\x82\x03\x02\x02\x02\x14\x89\x03\x02\x02\x02\x16\x92\x03" +
		"\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xAA\x03\x02\x02\x02\x1C\xAC\x03" +
		"\x02\x02\x02\x1E\xAF\x03\x02\x02\x02 \xB3\x03\x02\x02\x02\"\xB6\x03\x02" +
		"\x02\x02$\xBD\x03\x02\x02\x02&\xC2\x03\x02\x02\x02(\xC6\x03\x02\x02\x02" +
		"*\xC8\x03\x02\x02\x02,\xCA\x03\x02\x02\x02.\xCC\x03\x02\x02\x020\xCE\x03" +
		"\x02\x02\x022\xD0\x03\x02\x02\x024\xD2\x03\x02\x02\x026\xD4\x03\x02\x02" +
		"\x028\xD6\x03\x02\x02\x02:\xD8\x03\x02\x02\x02<>\x05\x04\x03\x02=<\x03" +
		"\x02\x02\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@C\x03" +
		"\x02\x02\x02AC\x05\x06\x04\x02B=\x03\x02\x02\x02BA\x03\x02\x02\x02C\x03" +
		"\x03\x02\x02\x02DF\x07\x03\x02\x02EG\x05\x06\x04\x02FE\x03\x02\x02\x02" +
		"GH\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"JK\x07\x04\x02\x02K\x05\x03\x02\x02\x02LQ\x05\b\x05\x02MN\x07\x05\x02" +
		"\x02NP\x05\b\x05\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02" +
		"\x02QR\x03\x02\x02\x02R\x07\x03\x02\x02\x02SQ\x03\x02\x02\x02TX\x07\x06" +
		"\x02\x02UY\x05\n\x06\x02VY\x05\x16\f\x02WY\x05\x18\r\x02XU\x03\x02\x02" +
		"\x02XV\x03\x02\x02\x02XW\x03\x02\x02\x02YZ\x03\x02\x02\x02ZX\x03\x02\x02" +
		"\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07\x07\x02\x02]\t\x03\x02" +
		"\x02\x02^_\x07\x1E\x02\x02_a\x05\f\x07\x02`b\x05\x0E\b\x02a`\x03\x02\x02" +
		"\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ce\x05\x14\v\x02dc\x03\x02\x02" +
		"\x02de\x03\x02\x02\x02e\v\x03\x02\x02\x02fq\x05(\x15\x02gq\x05*\x16\x02" +
		"hq\x05,\x17\x02iq\x05.\x18\x02jq\x050\x19\x02kq\x052\x1A\x02lq\x054\x1B" +
		"\x02mq\x056\x1C\x02nq\x05:\x1E\x02oq\x058\x1D\x02pf\x03\x02\x02\x02pg" +
		"\x03\x02\x02\x02ph\x03\x02\x02\x02pi\x03\x02\x02\x02pj\x03\x02\x02\x02" +
		"pk\x03\x02\x02\x02pl\x03\x02\x02\x02pm\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"po\x03\x02\x02\x02q\r\x03\x02\x02\x02rs\x07\b\x02\x02sx\x05\x10\t\x02" +
		"tu\x07\x05\x02\x02uw\x05\x10\t\x02vt\x03\x02\x02\x02wz\x03\x02\x02\x02" +
		"xv\x03\x02\x02\x02xy\x03\x02\x02\x02y{\x03\x02\x02\x02zx\x03\x02\x02\x02" +
		"{|\x07\t\x02\x02|\x0F\x03\x02\x02\x02}\x81\x07\"\x02\x02~\x81\x05\x1E" +
		"\x10\x02\x7F\x81\x05\x12\n\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x80\x7F\x03\x02\x02\x02\x81\x11\x03\x02\x02\x02\x82\x83\x07!\x02\x02" +
		"\x83\x85\x07\n\x02\x02\x84\x86\t\x02\x02\x02\x85\x84\x03\x02\x02\x02\x86" +
		"\x87\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88" +
		"\x13\x03\x02\x02\x02\x89\x8C\x07\v\x02\x02\x8A\x8D\x05\x16\f\x02\x8B\x8D" +
		"\x05\x18\r\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90" +
		"\x03\x02\x02\x02\x90\x91\x07\f\x02\x02\x91\x15\x03\x02\x02\x02\x92\x94" +
		"\x05\x1A\x0E\x02\x93\x95\x05\x1C\x0F\x02\x94\x93\x03\x02\x02\x02\x94\x95" +
		"\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x98\x05 \x11\x02\x97\x96" +
		"\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x9B" +
		"\x05$\x13\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D" +
		"\x03\x02\x02\x02\x9C\x9E\x05&\x14\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E" +
		"\x03\x02\x02\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07\x03\x02\x02\xA0\xA5" +
		"\x05\x16\f\x02\xA1\xA2\x07\x05\x02\x02\xA2\xA4\x05\x16\f\x02\xA3\xA1\x03" +
		"\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03" +
		"\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA9\x07" +
		"\x04\x02\x02\xA9\x19\x03\x02\x02\x02\xAA\xAB\t\x03\x02\x02\xAB\x1B\x03" +
		"\x02\x02\x02\xAC\xAD\t\x04\x02\x02\xAD\x1D\x03\x02\x02\x02\xAE\xB0\t\x05" +
		"\x02\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03\x02" +
		"\x02\x02\xB1\xB2\x07 \x02\x02\xB2\x1F\x03\x02\x02\x02\xB3\xB4\x05\x1E" +
		"\x10\x02\xB4!\x03\x02\x02\x02\xB5\xB7\x05\x1E\x10\x02\xB6\xB5\x03\x02" +
		"\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB9\x07\x11" +
		"\x02\x02\xB9\xBB\x05\x1E\x10\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02" +
		"\x02\x02\xBB#\x03\x02\x02\x02\xBC\xBE\x07\x12\x02\x02\xBD\xBC\x03\x02" +
		"\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x05\"" +
		"\x12\x02\xC0%\x03\x02\x02\x02\xC1\xC3\x07\x13\x02\x02\xC2\xC1\x03\x02" +
		"\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02" +
		"\x02\x02\xC5\'\x03\x02\x02\x02\xC6\xC7\x07\x14\x02\x02\xC7)\x03\x02\x02" +
		"\x02\xC8\xC9\x07\x15\x02\x02\xC9+\x03\x02\x02\x02\xCA\xCB\x07\x16\x02" +
		"\x02\xCB-\x03\x02\x02\x02\xCC\xCD\x07\x17\x02\x02\xCD/\x03\x02\x02\x02" +
		"\xCE\xCF\x07\x18\x02\x02\xCF1\x03\x02\x02\x02\xD0\xD1\x07\x19\x02\x02" +
		"\xD13\x03\x02\x02\x02\xD2\xD3\x07\x1A\x02\x02\xD35\x03\x02\x02\x02\xD4" +
		"\xD5\x07\x1B\x02\x02\xD57\x03\x02\x02\x02\xD6\xD7\x07\x1C\x02\x02\xD7" +
		"9\x03\x02\x02\x02\xD8\xD9\x07\x1D\x02\x02\xD9;\x03\x02\x02\x02\x1A?BH" +
		"QXZadpx\x80\x87\x8C\x8E\x94\x97\x9A\x9D\xA5\xAF\xB6\xBA\xBD\xC4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!guidoParser.__ATN) {
			guidoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(guidoParser._serializedATN));
		}

		return guidoParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	public sequencelist(): SequencelistContext | undefined {
		return this.tryGetRuleContext(0, SequencelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_prog; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public sequencelist(): SequencelistContext[];
	public sequencelist(i: number): SequencelistContext;
	public sequencelist(i?: number): SequencelistContext | SequencelistContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SequencelistContext);
		} else {
			return this.getRuleContext(i, SequencelistContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_segment; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitSegment) {
			return visitor.visitSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequencelistContext extends ParserRuleContext {
	public sequence(): SequenceContext[];
	public sequence(i: number): SequenceContext;
	public sequence(i?: number): SequenceContext | SequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SequenceContext);
		} else {
			return this.getRuleContext(i, SequenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_sequencelist; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterSequencelist) {
			listener.enterSequencelist(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitSequencelist) {
			listener.exitSequencelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitSequencelist) {
			return visitor.visitSequencelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	public note(): NoteContext[];
	public note(i: number): NoteContext;
	public note(i?: number): NoteContext | NoteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NoteContext);
		} else {
			return this.getRuleContext(i, NoteContext);
		}
	}
	public chord(): ChordContext[];
	public chord(i: number): ChordContext;
	public chord(i?: number): ChordContext | ChordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChordContext);
		} else {
			return this.getRuleContext(i, ChordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_sequence; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterSequence) {
			listener.enterSequence(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitSequence) {
			listener.exitSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitSequence) {
			return visitor.visitSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public TAGSTART(): TerminalNode { return this.getToken(guidoParser.TAGSTART, 0); }
	public tagname(): TagnameContext {
		return this.getRuleContext(0, TagnameContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public notes(): NotesContext | undefined {
		return this.tryGetRuleContext(0, NotesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_tag; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterTag) {
			listener.enterTag(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitTag) {
			listener.exitTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitTag) {
			return visitor.visitTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagnameContext extends ParserRuleContext {
	public title(): TitleContext | undefined {
		return this.tryGetRuleContext(0, TitleContext);
	}
	public tempo(): TempoContext | undefined {
		return this.tryGetRuleContext(0, TempoContext);
	}
	public clef(): ClefContext | undefined {
		return this.tryGetRuleContext(0, ClefContext);
	}
	public meter(): MeterContext | undefined {
		return this.tryGetRuleContext(0, MeterContext);
	}
	public slur(): SlurContext | undefined {
		return this.tryGetRuleContext(0, SlurContext);
	}
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	public barformat(): BarformatContext | undefined {
		return this.tryGetRuleContext(0, BarformatContext);
	}
	public staff(): StaffContext | undefined {
		return this.tryGetRuleContext(0, StaffContext);
	}
	public t(): TContext | undefined {
		return this.tryGetRuleContext(0, TContext);
	}
	public repeatEnd(): RepeatEndContext | undefined {
		return this.tryGetRuleContext(0, RepeatEndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_tagname; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterTagname) {
			listener.enterTagname(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitTagname) {
			listener.exitTagname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitTagname) {
			return visitor.visitTagname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_parameters; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode | undefined { return this.tryGetToken(guidoParser.STRINGLITERAL, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public kvpair(): KvpairContext | undefined {
		return this.tryGetRuleContext(0, KvpairContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_parameter; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KvpairContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(guidoParser.STRING);
		} else {
			return this.getToken(guidoParser.STRING, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(guidoParser.NUMBER);
		} else {
			return this.getToken(guidoParser.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_kvpair; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterKvpair) {
			listener.enterKvpair(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitKvpair) {
			listener.exitKvpair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitKvpair) {
			return visitor.visitKvpair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotesContext extends ParserRuleContext {
	public note(): NoteContext[];
	public note(i: number): NoteContext;
	public note(i?: number): NoteContext | NoteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NoteContext);
		} else {
			return this.getRuleContext(i, NoteContext);
		}
	}
	public chord(): ChordContext[];
	public chord(i: number): ChordContext;
	public chord(i?: number): ChordContext | ChordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChordContext);
		} else {
			return this.getRuleContext(i, ChordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_notes; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterNotes) {
			listener.enterNotes(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitNotes) {
			listener.exitNotes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitNotes) {
			return visitor.visitNotes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoteContext extends ParserRuleContext {
	public notename(): NotenameContext {
		return this.getRuleContext(0, NotenameContext);
	}
	public accidental(): AccidentalContext | undefined {
		return this.tryGetRuleContext(0, AccidentalContext);
	}
	public octave(): OctaveContext | undefined {
		return this.tryGetRuleContext(0, OctaveContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public dotting(): DottingContext | undefined {
		return this.tryGetRuleContext(0, DottingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_note; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterNote) {
			listener.enterNote(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitNote) {
			listener.exitNote(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitNote) {
			return visitor.visitNote(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChordContext extends ParserRuleContext {
	public note(): NoteContext[];
	public note(i: number): NoteContext;
	public note(i?: number): NoteContext | NoteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NoteContext);
		} else {
			return this.getRuleContext(i, NoteContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_chord; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterChord) {
			listener.enterChord(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitChord) {
			listener.exitChord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitChord) {
			return visitor.visitChord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotenameContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(guidoParser.STRING, 0); }
	public REST(): TerminalNode | undefined { return this.tryGetToken(guidoParser.REST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_notename; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterNotename) {
			listener.enterNotename(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitNotename) {
			listener.exitNotename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitNotename) {
			return visitor.visitNotename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccidentalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_accidental; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterAccidental) {
			listener.enterAccidental(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitAccidental) {
			listener.exitAccidental(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitAccidental) {
			return visitor.visitAccidental(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(guidoParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_number; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OctaveContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_octave; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterOctave) {
			listener.enterOctave(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitOctave) {
			listener.exitOctave(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitOctave) {
			return visitor.visitOctave(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FractionContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_fraction; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterFraction) {
			listener.enterFraction(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitFraction) {
			listener.exitFraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitFraction) {
			return visitor.visitFraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DurationContext extends ParserRuleContext {
	public fraction(): FractionContext {
		return this.getRuleContext(0, FractionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_duration; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterDuration) {
			listener.enterDuration(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitDuration) {
			listener.exitDuration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitDuration) {
			return visitor.visitDuration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DottingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_dotting; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterDotting) {
			listener.enterDotting(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitDotting) {
			listener.exitDotting(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitDotting) {
			return visitor.visitDotting(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_title; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitTitle) {
			return visitor.visitTitle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TempoContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_tempo; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterTempo) {
			listener.enterTempo(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitTempo) {
			listener.exitTempo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitTempo) {
			return visitor.visitTempo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClefContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_clef; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterClef) {
			listener.enterClef(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitClef) {
			listener.exitClef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitClef) {
			return visitor.visitClef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeterContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_meter; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterMeter) {
			listener.enterMeter(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitMeter) {
			listener.exitMeter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitMeter) {
			return visitor.visitMeter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SlurContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_slur; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterSlur) {
			listener.enterSlur(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitSlur) {
			listener.exitSlur(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitSlur) {
			return visitor.visitSlur(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_key; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BarformatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_barformat; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterBarformat) {
			listener.enterBarformat(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitBarformat) {
			listener.exitBarformat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitBarformat) {
			return visitor.visitBarformat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaffContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_staff; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterStaff) {
			listener.enterStaff(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitStaff) {
			listener.exitStaff(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitStaff) {
			return visitor.visitStaff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatEndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_repeatEnd; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterRepeatEnd) {
			listener.enterRepeatEnd(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitRepeatEnd) {
			listener.exitRepeatEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitRepeatEnd) {
			return visitor.visitRepeatEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return guidoParser.RULE_t; }
	// @Override
	public enterRule(listener: guidoListener): void {
		if (listener.enterT) {
			listener.enterT(this);
		}
	}
	// @Override
	public exitRule(listener: guidoListener): void {
		if (listener.exitT) {
			listener.exitT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: guidoVisitor<Result>): Result {
		if (visitor.visitT) {
			return visitor.visitT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


