// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clif/CLIF.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { CLIFListener } from "./CLIFListener";
import { CLIFVisitor } from "./CLIFVisitor";


export class CLIFParser extends Parser {
	public static readonly OPEN = 1;
	public static readonly CLOSE = 2;
	public static readonly STRINGQUOTE = 3;
	public static readonly NAMEQUOTE = 4;
	public static readonly BACKSLASH = 5;
	public static readonly NUMERAL = 6;
	public static readonly SEQMARK = 7;
	public static readonly QUOTEDSTRING = 8;
	public static readonly ENCLOSEDNAME = 9;
	public static readonly EQUAL = 10;
	public static readonly AND = 11;
	public static readonly OR = 12;
	public static readonly IFF = 13;
	public static readonly IF = 14;
	public static readonly FORALL = 15;
	public static readonly EXISTS = 16;
	public static readonly NOT = 17;
	public static readonly CL_ROLESET = 18;
	public static readonly CL_TEXT = 19;
	public static readonly CL_IMPORTS = 20;
	public static readonly CL_EXCLUDES = 21;
	public static readonly CL_MODULE = 22;
	public static readonly CL_COMMENT = 23;
	public static readonly CL_PREFIX = 24;
	public static readonly NAMECHARSEQUENCE = 25;
	public static readonly WHITE = 26;
	public static readonly BLOCKCOMMENT = 27;
	public static readonly LineComment = 28;
	public static readonly RULE_termseq = 0;
	public static readonly RULE_interpretedname = 1;
	public static readonly RULE_interpretablename = 2;
	public static readonly RULE_name = 3;
	public static readonly RULE_term = 4;
	public static readonly RULE_operator = 5;
	public static readonly RULE_equation = 6;
	public static readonly RULE_sentence = 7;
	public static readonly RULE_atomsent = 8;
	public static readonly RULE_atom = 9;
	public static readonly RULE_predicate = 10;
	public static readonly RULE_boolsent = 11;
	public static readonly RULE_quantsent = 12;
	public static readonly RULE_boundlist = 13;
	public static readonly RULE_commentsent = 14;
	public static readonly RULE_module = 15;
	public static readonly RULE_phrase = 16;
	public static readonly RULE_text = 17;
	public static readonly RULE_cltext = 18;
	public static readonly RULE_namedtext = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"termseq", "interpretedname", "interpretablename", "name", "term", "operator", 
		"equation", "sentence", "atomsent", "atom", "predicate", "boolsent", "quantsent", 
		"boundlist", "commentsent", "module", "phrase", "text", "cltext", "namedtext",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'''", "'\"'", "'\\'", undefined, undefined, 
		undefined, undefined, "'='", "'and'", "'or'", "'iff'", "'if'", "'forall'", 
		"'exists'", "'not'", "'cl-roleset'", "'cl-text'", "'cl-imports'", "'cl-excludes'", 
		"'cl-module'", "'cl-comment'", "'cl-prefix'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPEN", "CLOSE", "STRINGQUOTE", "NAMEQUOTE", "BACKSLASH", "NUMERAL", 
		"SEQMARK", "QUOTEDSTRING", "ENCLOSEDNAME", "EQUAL", "AND", "OR", "IFF", 
		"IF", "FORALL", "EXISTS", "NOT", "CL_ROLESET", "CL_TEXT", "CL_IMPORTS", 
		"CL_EXCLUDES", "CL_MODULE", "CL_COMMENT", "CL_PREFIX", "NAMECHARSEQUENCE", 
		"WHITE", "BLOCKCOMMENT", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CLIFParser._LITERAL_NAMES, CLIFParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CLIFParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CLIF.g4"; }

	// @Override
	public get ruleNames(): string[] { return CLIFParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CLIFParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CLIFParser._ATN, this);
	}
	// @RuleVersion(0)
	public termseq(): TermseqContext {
		let _localctx: TermseqContext = new TermseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CLIFParser.RULE_termseq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CLIFParser.OPEN) | (1 << CLIFParser.NUMERAL) | (1 << CLIFParser.SEQMARK) | (1 << CLIFParser.QUOTEDSTRING) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
				{
				this.state = 42;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CLIFParser.OPEN:
				case CLIFParser.NUMERAL:
				case CLIFParser.QUOTEDSTRING:
				case CLIFParser.ENCLOSEDNAME:
				case CLIFParser.NAMECHARSEQUENCE:
					{
					this.state = 40;
					this.term();
					}
					break;
				case CLIFParser.SEQMARK:
					{
					this.state = 41;
					this.match(CLIFParser.SEQMARK);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 46;
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
	public interpretedname(): InterpretednameContext {
		let _localctx: InterpretednameContext = new InterpretednameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CLIFParser.RULE_interpretedname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			_la = this._input.LA(1);
			if (!(_la === CLIFParser.NUMERAL || _la === CLIFParser.QUOTEDSTRING)) {
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
	public interpretablename(): InterpretablenameContext {
		let _localctx: InterpretablenameContext = new InterpretablenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CLIFParser.RULE_interpretablename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			_la = this._input.LA(1);
			if (!(_la === CLIFParser.ENCLOSEDNAME || _la === CLIFParser.NAMECHARSEQUENCE)) {
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
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CLIFParser.RULE_name);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CLIFParser.NUMERAL:
			case CLIFParser.QUOTEDSTRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.interpretedname();
				}
				break;
			case CLIFParser.ENCLOSEDNAME:
			case CLIFParser.NAMECHARSEQUENCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this.interpretablename();
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CLIFParser.RULE_term);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				this.name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.match(CLIFParser.OPEN);
				this.state = 57;
				this.operator();
				this.state = 58;
				this.termseq();
				this.state = 59;
				this.match(CLIFParser.CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 61;
				this.match(CLIFParser.OPEN);
				this.state = 62;
				this.match(CLIFParser.CL_COMMENT);
				this.state = 63;
				this.match(CLIFParser.QUOTEDSTRING);
				this.state = 64;
				this.term();
				this.state = 65;
				this.match(CLIFParser.CLOSE);
				}
				break;
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CLIFParser.RULE_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.term();
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
	public equation(): EquationContext {
		let _localctx: EquationContext = new EquationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CLIFParser.RULE_equation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(CLIFParser.OPEN);
			this.state = 72;
			this.match(CLIFParser.EQUAL);
			this.state = 73;
			this.term();
			this.state = 74;
			this.term();
			this.state = 75;
			this.match(CLIFParser.CLOSE);
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
	public sentence(): SentenceContext {
		let _localctx: SentenceContext = new SentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CLIFParser.RULE_sentence);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this.atomsent();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.boolsent();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 79;
				this.quantsent();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 80;
				this.commentsent();
				}
				break;
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
	public atomsent(): AtomsentContext {
		let _localctx: AtomsentContext = new AtomsentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CLIFParser.RULE_atomsent);
		try {
			this.state = 85;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				this.equation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.atom();
				}
				break;
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CLIFParser.RULE_atom);
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 87;
				this.match(CLIFParser.OPEN);
				this.state = 88;
				this.predicate();
				this.state = 89;
				this.termseq();
				this.state = 90;
				this.match(CLIFParser.CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.match(CLIFParser.OPEN);
				this.state = 93;
				this.term();
				this.state = 94;
				this.match(CLIFParser.OPEN);
				this.state = 95;
				this.match(CLIFParser.CL_ROLESET);
				{
				this.state = 96;
				this.match(CLIFParser.OPEN);
				this.state = 97;
				this.name();
				this.state = 98;
				this.term();
				this.state = 99;
				this.match(CLIFParser.CLOSE);
				}
				this.state = 101;
				this.match(CLIFParser.CLOSE);
				this.state = 102;
				this.match(CLIFParser.CLOSE);
				}
				break;
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
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CLIFParser.RULE_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.term();
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
	public boolsent(): BoolsentContext {
		let _localctx: BoolsentContext = new BoolsentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CLIFParser.RULE_boolsent);
		let _la: number;
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.match(CLIFParser.OPEN);
				this.state = 109;
				_la = this._input.LA(1);
				if (!(_la === CLIFParser.AND || _la === CLIFParser.OR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CLIFParser.OPEN) {
					{
					{
					this.state = 110;
					this.sentence();
					}
					}
					this.state = 115;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 116;
				this.match(CLIFParser.CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.match(CLIFParser.OPEN);
				this.state = 118;
				_la = this._input.LA(1);
				if (!(_la === CLIFParser.IFF || _la === CLIFParser.IF)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 119;
				this.sentence();
				this.state = 120;
				this.sentence();
				this.state = 121;
				this.match(CLIFParser.CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 123;
				this.match(CLIFParser.OPEN);
				this.state = 124;
				this.match(CLIFParser.NOT);
				this.state = 125;
				this.sentence();
				this.state = 126;
				this.match(CLIFParser.CLOSE);
				}
				break;
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
	public quantsent(): QuantsentContext {
		let _localctx: QuantsentContext = new QuantsentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CLIFParser.RULE_quantsent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(CLIFParser.OPEN);
			this.state = 131;
			_la = this._input.LA(1);
			if (!(_la === CLIFParser.FORALL || _la === CLIFParser.EXISTS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CLIFParser.ENCLOSEDNAME || _la === CLIFParser.NAMECHARSEQUENCE) {
				{
				this.state = 132;
				this.interpretablename();
				}
			}

			this.state = 135;
			this.boundlist();
			this.state = 136;
			this.sentence();
			this.state = 137;
			this.match(CLIFParser.CLOSE);
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
	public boundlist(): BoundlistContext {
		let _localctx: BoundlistContext = new BoundlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CLIFParser.RULE_boundlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(CLIFParser.OPEN);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CLIFParser.OPEN) | (1 << CLIFParser.SEQMARK) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
				{
				this.state = 150;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CLIFParser.ENCLOSEDNAME:
				case CLIFParser.NAMECHARSEQUENCE:
					{
					this.state = 140;
					this.interpretablename();
					}
					break;
				case CLIFParser.SEQMARK:
					{
					this.state = 141;
					this.match(CLIFParser.SEQMARK);
					}
					break;
				case CLIFParser.OPEN:
					{
					this.state = 142;
					this.match(CLIFParser.OPEN);
					this.state = 145;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CLIFParser.ENCLOSEDNAME:
					case CLIFParser.NAMECHARSEQUENCE:
						{
						this.state = 143;
						this.interpretablename();
						}
						break;
					case CLIFParser.SEQMARK:
						{
						this.state = 144;
						this.match(CLIFParser.SEQMARK);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 147;
					this.term();
					this.state = 148;
					this.match(CLIFParser.CLOSE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 155;
			this.match(CLIFParser.CLOSE);
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
	public commentsent(): CommentsentContext {
		let _localctx: CommentsentContext = new CommentsentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CLIFParser.RULE_commentsent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(CLIFParser.OPEN);
			this.state = 158;
			this.match(CLIFParser.CL_COMMENT);
			this.state = 159;
			this.match(CLIFParser.ENCLOSEDNAME);
			this.state = 160;
			this.sentence();
			this.state = 161;
			this.match(CLIFParser.CLOSE);
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
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CLIFParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(CLIFParser.OPEN);
			this.state = 164;
			this.match(CLIFParser.CL_MODULE);
			this.state = 165;
			this.interpretablename();
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 166;
				this.match(CLIFParser.OPEN);
				this.state = 167;
				this.match(CLIFParser.CL_EXCLUDES);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CLIFParser.NUMERAL) | (1 << CLIFParser.QUOTEDSTRING) | (1 << CLIFParser.ENCLOSEDNAME) | (1 << CLIFParser.NAMECHARSEQUENCE))) !== 0)) {
					{
					{
					this.state = 168;
					this.name();
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 174;
				this.match(CLIFParser.CLOSE);
				}
				break;
			}
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CLIFParser.OPEN) {
				{
				this.state = 177;
				this.cltext();
				}
			}

			this.state = 180;
			this.match(CLIFParser.CLOSE);
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
	public phrase(): PhraseContext {
		let _localctx: PhraseContext = new PhraseContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CLIFParser.RULE_phrase);
		let _la: number;
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				this.sentence();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this.module();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 184;
				this.match(CLIFParser.OPEN);
				this.state = 185;
				this.match(CLIFParser.CL_IMPORTS);
				this.state = 186;
				this.interpretablename();
				this.state = 187;
				this.match(CLIFParser.CLOSE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 189;
				this.match(CLIFParser.OPEN);
				this.state = 190;
				this.match(CLIFParser.CL_COMMENT);
				this.state = 191;
				this.match(CLIFParser.ENCLOSEDNAME);
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CLIFParser.OPEN) {
					{
					this.state = 192;
					this.cltext();
					}
				}

				this.state = 195;
				this.match(CLIFParser.CLOSE);
				}
				break;
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
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CLIFParser.RULE_text);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 198;
				this.phrase();
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CLIFParser.OPEN);
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
	public cltext(): CltextContext {
		let _localctx: CltextContext = new CltextContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CLIFParser.RULE_cltext);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.module();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.namedtext();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 205;
				this.text();
				}
				break;
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
	public namedtext(): NamedtextContext {
		let _localctx: NamedtextContext = new NamedtextContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CLIFParser.RULE_namedtext);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(CLIFParser.OPEN);
			this.state = 209;
			this.match(CLIFParser.CL_TEXT);
			this.state = 210;
			this.interpretablename();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CLIFParser.OPEN) {
				{
				this.state = 211;
				this.text();
				}
			}

			this.state = 214;
			this.match(CLIFParser.CLOSE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\xDB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x07\x02-\n\x02" +
		"\f\x02\x0E\x020\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x05\x058\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06F\n\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\tT\n" +
		"\t\x03\n\x03\n\x05\nX\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vk\n\v\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x07\rr\n\r\f\r\x0E\ru\v\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x83\n\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\x88\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x94\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\x99\n\x0F\f\x0F\x0E\x0F\x9C\v\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xAC\n\x11\f\x11\x0E\x11\xAF\v" +
		"\x11\x03\x11\x05\x11\xB2\n\x11\x03\x11\x05\x11\xB5\n\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\xC4\n\x12\x03\x12\x05\x12\xC7\n\x12\x03\x13\x06" +
		"\x13\xCA\n\x13\r\x13\x0E\x13\xCB\x03\x14\x03\x14\x03\x14\x05\x14\xD1\n" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xD7\n\x15\x03\x15\x03\x15" +
		"\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02\x02\x07\x04\x02\b\b\n\n\x04\x02\v\v\x1B\x1B" +
		"\x03\x02\r\x0E\x03\x02\x0F\x10\x03\x02\x11\x12\x02\xE3\x02.\x03\x02\x02" +
		"\x02\x041\x03\x02\x02\x02\x063\x03\x02\x02\x02\b7\x03\x02\x02\x02\nE\x03" +
		"\x02\x02\x02\fG\x03\x02\x02\x02\x0EI\x03\x02\x02\x02\x10S\x03\x02\x02" +
		"\x02\x12W\x03\x02\x02\x02\x14j\x03\x02\x02\x02\x16l\x03\x02\x02\x02\x18" +
		"\x82\x03\x02\x02\x02\x1A\x84\x03\x02\x02\x02\x1C\x8D\x03\x02\x02\x02\x1E" +
		"\x9F\x03\x02\x02\x02 \xA5\x03\x02\x02\x02\"\xC6\x03\x02\x02\x02$\xC9\x03" +
		"\x02\x02\x02&\xD0\x03\x02\x02\x02(\xD2\x03\x02\x02\x02*-\x05\n\x06\x02" +
		"+-\x07\t\x02\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02-0\x03\x02\x02\x02" +
		".,\x03\x02\x02\x02./\x03\x02\x02\x02/\x03\x03\x02\x02\x020.\x03\x02\x02" +
		"\x0212\t\x02\x02\x022\x05\x03\x02\x02\x0234\t\x03\x02\x024\x07\x03\x02" +
		"\x02\x0258\x05\x04\x03\x0268\x05\x06\x04\x0275\x03\x02\x02\x0276\x03\x02" +
		"\x02\x028\t\x03\x02\x02\x029F\x05\b\x05\x02:;\x07\x03\x02\x02;<\x05\f" +
		"\x07\x02<=\x05\x02\x02\x02=>\x07\x04\x02\x02>F\x03\x02\x02\x02?@\x07\x03" +
		"\x02\x02@A\x07\x19\x02\x02AB\x07\n\x02\x02BC\x05\n\x06\x02CD\x07\x04\x02" +
		"\x02DF\x03\x02\x02\x02E9\x03\x02\x02\x02E:\x03\x02\x02\x02E?\x03\x02\x02" +
		"\x02F\v\x03\x02\x02\x02GH\x05\n\x06\x02H\r\x03\x02\x02\x02IJ\x07\x03\x02" +
		"\x02JK\x07\f\x02\x02KL\x05\n\x06\x02LM\x05\n\x06\x02MN\x07\x04\x02\x02" +
		"N\x0F\x03\x02\x02\x02OT\x05\x12\n\x02PT\x05\x18\r\x02QT\x05\x1A\x0E\x02" +
		"RT\x05\x1E\x10\x02SO\x03\x02\x02\x02SP\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"SR\x03\x02\x02\x02T\x11\x03\x02\x02\x02UX\x05\x0E\b\x02VX\x05\x14\v\x02" +
		"WU\x03\x02\x02\x02WV\x03\x02\x02\x02X\x13\x03\x02\x02\x02YZ\x07\x03\x02" +
		"\x02Z[\x05\x16\f\x02[\\\x05\x02\x02\x02\\]\x07\x04\x02\x02]k\x03\x02\x02" +
		"\x02^_\x07\x03\x02\x02_`\x05\n\x06\x02`a\x07\x03\x02\x02ab\x07\x14\x02" +
		"\x02bc\x07\x03\x02\x02cd\x05\b\x05\x02de\x05\n\x06\x02ef\x07\x04\x02\x02" +
		"fg\x03\x02\x02\x02gh\x07\x04\x02\x02hi\x07\x04\x02\x02ik\x03\x02\x02\x02" +
		"jY\x03\x02\x02\x02j^\x03\x02\x02\x02k\x15\x03\x02\x02\x02lm\x05\n\x06" +
		"\x02m\x17\x03\x02\x02\x02no\x07\x03\x02\x02os\t\x04\x02\x02pr\x05\x10" +
		"\t\x02qp\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02" +
		"\x02\x02tv\x03\x02\x02\x02us\x03\x02\x02\x02v\x83\x07\x04\x02\x02wx\x07" +
		"\x03\x02\x02xy\t\x05\x02\x02yz\x05\x10\t\x02z{\x05\x10\t\x02{|\x07\x04" +
		"\x02\x02|\x83\x03\x02\x02\x02}~\x07\x03\x02\x02~\x7F\x07\x13\x02\x02\x7F" +
		"\x80\x05\x10\t\x02\x80\x81\x07\x04\x02\x02\x81\x83\x03\x02\x02\x02\x82" +
		"n\x03\x02\x02\x02\x82w\x03\x02\x02\x02\x82}\x03\x02\x02\x02\x83\x19\x03" +
		"\x02\x02\x02\x84\x85\x07\x03\x02\x02\x85\x87\t\x06\x02\x02\x86\x88\x05" +
		"\x06\x04\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03" +
		"\x02\x02\x02\x89\x8A\x05\x1C\x0F\x02\x8A\x8B\x05\x10\t\x02\x8B\x8C\x07" +
		"\x04\x02\x02\x8C\x1B\x03\x02\x02\x02\x8D\x9A\x07\x03\x02\x02\x8E\x99\x05" +
		"\x06\x04\x02\x8F\x99\x07\t\x02\x02\x90\x93\x07\x03\x02\x02\x91\x94\x05" +
		"\x06\x04\x02\x92\x94\x07\t\x02\x02\x93\x91\x03\x02\x02\x02\x93\x92\x03" +
		"\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x05\n\x06\x02\x96\x97\x07" +
		"\x04\x02\x02\x97\x99\x03\x02\x02\x02\x98\x8E\x03\x02\x02\x02\x98\x8F\x03" +
		"\x02\x02\x02\x98\x90\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03" +
		"\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9A\x03" +
		"\x02\x02\x02\x9D\x9E\x07\x04\x02\x02\x9E\x1D\x03\x02\x02\x02\x9F\xA0\x07" +
		"\x03\x02\x02\xA0\xA1\x07\x19\x02\x02\xA1\xA2\x07\v\x02\x02\xA2\xA3\x05" +
		"\x10\t\x02\xA3\xA4\x07\x04\x02\x02\xA4\x1F\x03\x02\x02\x02\xA5\xA6\x07" +
		"\x03\x02\x02\xA6\xA7\x07\x18\x02\x02\xA7\xB1\x05\x06\x04\x02\xA8\xA9\x07" +
		"\x03\x02\x02\xA9\xAD\x07\x17\x02\x02\xAA\xAC\x05\b\x05\x02\xAB\xAA\x03" +
		"\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03" +
		"\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB2\x07" +
		"\x04\x02\x02\xB1\xA8\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03" +
		"\x02\x02\x02\xB3\xB5\x05&\x14\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03" +
		"\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x07\x04\x02\x02\xB7!\x03" +
		"\x02\x02\x02\xB8\xC7\x05\x10\t\x02\xB9\xC7\x05 \x11\x02\xBA\xBB\x07\x03" +
		"\x02\x02\xBB\xBC\x07\x16\x02\x02\xBC\xBD\x05\x06\x04\x02\xBD\xBE\x07\x04" +
		"\x02\x02\xBE\xC7\x03\x02\x02\x02\xBF\xC0\x07\x03\x02\x02\xC0\xC1\x07\x19" +
		"\x02\x02\xC1\xC3\x07\v\x02\x02\xC2\xC4\x05&\x14\x02\xC3\xC2\x03\x02\x02" +
		"\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x07\x04\x02" +
		"\x02\xC6\xB8\x03\x02\x02\x02\xC6\xB9\x03\x02\x02\x02\xC6\xBA\x03\x02\x02" +
		"\x02\xC6\xBF\x03\x02\x02\x02\xC7#\x03\x02\x02\x02\xC8\xCA\x05\"\x12\x02" +
		"\xC9\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02" +
		"\xCB\xCC\x03\x02\x02\x02\xCC%\x03\x02\x02\x02\xCD\xD1\x05 \x11\x02\xCE" +
		"\xD1\x05(\x15\x02\xCF\xD1\x05$\x13\x02\xD0\xCD\x03\x02\x02\x02\xD0\xCE" +
		"\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\'\x03\x02\x02\x02\xD2\xD3" +
		"\x07\x03\x02\x02\xD3\xD4\x07\x15\x02\x02\xD4\xD6\x05\x06\x04\x02\xD5\xD7" +
		"\x05$\x13\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8\xD9\x07\x04\x02\x02\xD9)\x03\x02\x02\x02\x17,.7E" +
		"SWjs\x82\x87\x93\x98\x9A\xAD\xB1\xB4\xC3\xC6\xCB\xD0\xD6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CLIFParser.__ATN) {
			CLIFParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CLIFParser._serializedATN));
		}

		return CLIFParser.__ATN;
	}

}

export class TermseqContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public SEQMARK(): TerminalNode[];
	public SEQMARK(i: number): TerminalNode;
	public SEQMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CLIFParser.SEQMARK);
		} else {
			return this.getToken(CLIFParser.SEQMARK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_termseq; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterTermseq) {
			listener.enterTermseq(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitTermseq) {
			listener.exitTermseq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitTermseq) {
			return visitor.visitTermseq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpretednameContext extends ParserRuleContext {
	public NUMERAL(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.NUMERAL, 0); }
	public QUOTEDSTRING(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.QUOTEDSTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_interpretedname; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterInterpretedname) {
			listener.enterInterpretedname(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitInterpretedname) {
			listener.exitInterpretedname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitInterpretedname) {
			return visitor.visitInterpretedname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpretablenameContext extends ParserRuleContext {
	public NAMECHARSEQUENCE(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.NAMECHARSEQUENCE, 0); }
	public ENCLOSEDNAME(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.ENCLOSEDNAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_interpretablename; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterInterpretablename) {
			listener.enterInterpretablename(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitInterpretablename) {
			listener.exitInterpretablename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitInterpretablename) {
			return visitor.visitInterpretablename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public interpretedname(): InterpretednameContext | undefined {
		return this.tryGetRuleContext(0, InterpretednameContext);
	}
	public interpretablename(): InterpretablenameContext | undefined {
		return this.tryGetRuleContext(0, InterpretablenameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_name; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.OPEN, 0); }
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public termseq(): TermseqContext | undefined {
		return this.tryGetRuleContext(0, TermseqContext);
	}
	public CLOSE(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.CLOSE, 0); }
	public CL_COMMENT(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.CL_COMMENT, 0); }
	public QUOTEDSTRING(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.QUOTEDSTRING, 0); }
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_term; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_operator; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(CLIFParser.OPEN, 0); }
	public EQUAL(): TerminalNode { return this.getToken(CLIFParser.EQUAL, 0); }
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public CLOSE(): TerminalNode { return this.getToken(CLIFParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_equation; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterEquation) {
			listener.enterEquation(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitEquation) {
			listener.exitEquation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitEquation) {
			return visitor.visitEquation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	public atomsent(): AtomsentContext | undefined {
		return this.tryGetRuleContext(0, AtomsentContext);
	}
	public boolsent(): BoolsentContext | undefined {
		return this.tryGetRuleContext(0, BoolsentContext);
	}
	public quantsent(): QuantsentContext | undefined {
		return this.tryGetRuleContext(0, QuantsentContext);
	}
	public commentsent(): CommentsentContext | undefined {
		return this.tryGetRuleContext(0, CommentsentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_sentence; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterSentence) {
			listener.enterSentence(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitSentence) {
			listener.exitSentence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitSentence) {
			return visitor.visitSentence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomsentContext extends ParserRuleContext {
	public equation(): EquationContext | undefined {
		return this.tryGetRuleContext(0, EquationContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_atomsent; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterAtomsent) {
			listener.enterAtomsent(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitAtomsent) {
			listener.exitAtomsent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitAtomsent) {
			return visitor.visitAtomsent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CLIFParser.OPEN);
		} else {
			return this.getToken(CLIFParser.OPEN, i);
		}
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	public termseq(): TermseqContext | undefined {
		return this.tryGetRuleContext(0, TermseqContext);
	}
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CLIFParser.CLOSE);
		} else {
			return this.getToken(CLIFParser.CLOSE, i);
		}
	}
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public CL_ROLESET(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.CL_ROLESET, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_atom; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_predicate; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolsentContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(CLIFParser.OPEN, 0); }
	public CLOSE(): TerminalNode { return this.getToken(CLIFParser.CLOSE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.OR, 0); }
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.IF, 0); }
	public IFF(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.IFF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_boolsent; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterBoolsent) {
			listener.enterBoolsent(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitBoolsent) {
			listener.exitBoolsent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitBoolsent) {
			return visitor.visitBoolsent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantsentContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(CLIFParser.OPEN, 0); }
	public boundlist(): BoundlistContext {
		return this.getRuleContext(0, BoundlistContext);
	}
	public sentence(): SentenceContext {
		return this.getRuleContext(0, SentenceContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(CLIFParser.CLOSE, 0); }
	public FORALL(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.FORALL, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.EXISTS, 0); }
	public interpretablename(): InterpretablenameContext | undefined {
		return this.tryGetRuleContext(0, InterpretablenameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_quantsent; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterQuantsent) {
			listener.enterQuantsent(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitQuantsent) {
			listener.exitQuantsent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitQuantsent) {
			return visitor.visitQuantsent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoundlistContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CLIFParser.OPEN);
		} else {
			return this.getToken(CLIFParser.OPEN, i);
		}
	}
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CLIFParser.CLOSE);
		} else {
			return this.getToken(CLIFParser.CLOSE, i);
		}
	}
	public interpretablename(): InterpretablenameContext[];
	public interpretablename(i: number): InterpretablenameContext;
	public interpretablename(i?: number): InterpretablenameContext | InterpretablenameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterpretablenameContext);
		} else {
			return this.getRuleContext(i, InterpretablenameContext);
		}
	}
	public SEQMARK(): TerminalNode[];
	public SEQMARK(i: number): TerminalNode;
	public SEQMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CLIFParser.SEQMARK);
		} else {
			return this.getToken(CLIFParser.SEQMARK, i);
		}
	}
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_boundlist; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterBoundlist) {
			listener.enterBoundlist(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitBoundlist) {
			listener.exitBoundlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitBoundlist) {
			return visitor.visitBoundlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentsentContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(CLIFParser.OPEN, 0); }
	public CL_COMMENT(): TerminalNode { return this.getToken(CLIFParser.CL_COMMENT, 0); }
	public ENCLOSEDNAME(): TerminalNode { return this.getToken(CLIFParser.ENCLOSEDNAME, 0); }
	public sentence(): SentenceContext {
		return this.getRuleContext(0, SentenceContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(CLIFParser.CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_commentsent; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterCommentsent) {
			listener.enterCommentsent(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitCommentsent) {
			listener.exitCommentsent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitCommentsent) {
			return visitor.visitCommentsent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public OPEN(): TerminalNode[];
	public OPEN(i: number): TerminalNode;
	public OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CLIFParser.OPEN);
		} else {
			return this.getToken(CLIFParser.OPEN, i);
		}
	}
	public CL_MODULE(): TerminalNode { return this.getToken(CLIFParser.CL_MODULE, 0); }
	public interpretablename(): InterpretablenameContext {
		return this.getRuleContext(0, InterpretablenameContext);
	}
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CLIFParser.CLOSE);
		} else {
			return this.getToken(CLIFParser.CLOSE, i);
		}
	}
	public CL_EXCLUDES(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.CL_EXCLUDES, 0); }
	public cltext(): CltextContext | undefined {
		return this.tryGetRuleContext(0, CltextContext);
	}
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_module; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhraseContext extends ParserRuleContext {
	public sentence(): SentenceContext | undefined {
		return this.tryGetRuleContext(0, SentenceContext);
	}
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.OPEN, 0); }
	public CL_IMPORTS(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.CL_IMPORTS, 0); }
	public interpretablename(): InterpretablenameContext | undefined {
		return this.tryGetRuleContext(0, InterpretablenameContext);
	}
	public CLOSE(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.CLOSE, 0); }
	public CL_COMMENT(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.CL_COMMENT, 0); }
	public ENCLOSEDNAME(): TerminalNode | undefined { return this.tryGetToken(CLIFParser.ENCLOSEDNAME, 0); }
	public cltext(): CltextContext | undefined {
		return this.tryGetRuleContext(0, CltextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_phrase; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterPhrase) {
			listener.enterPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitPhrase) {
			listener.exitPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitPhrase) {
			return visitor.visitPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public phrase(): PhraseContext[];
	public phrase(i: number): PhraseContext;
	public phrase(i?: number): PhraseContext | PhraseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PhraseContext);
		} else {
			return this.getRuleContext(i, PhraseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_text; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CltextContext extends ParserRuleContext {
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	public namedtext(): NamedtextContext | undefined {
		return this.tryGetRuleContext(0, NamedtextContext);
	}
	public text(): TextContext | undefined {
		return this.tryGetRuleContext(0, TextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_cltext; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterCltext) {
			listener.enterCltext(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitCltext) {
			listener.exitCltext(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitCltext) {
			return visitor.visitCltext(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedtextContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(CLIFParser.OPEN, 0); }
	public CL_TEXT(): TerminalNode { return this.getToken(CLIFParser.CL_TEXT, 0); }
	public interpretablename(): InterpretablenameContext {
		return this.getRuleContext(0, InterpretablenameContext);
	}
	public CLOSE(): TerminalNode { return this.getToken(CLIFParser.CLOSE, 0); }
	public text(): TextContext | undefined {
		return this.tryGetRuleContext(0, TextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CLIFParser.RULE_namedtext; }
	// @Override
	public enterRule(listener: CLIFListener): void {
		if (listener.enterNamedtext) {
			listener.enterNamedtext(this);
		}
	}
	// @Override
	public exitRule(listener: CLIFListener): void {
		if (listener.exitNamedtext) {
			listener.exitNamedtext(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CLIFVisitor<Result>): Result {
		if (visitor.visitNamedtext) {
			return visitor.visitNamedtext(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


