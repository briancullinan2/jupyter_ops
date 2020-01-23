// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/suokif/SUOKIF.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { SUOKIFListener } from "./SUOKIFListener";

export class SUOKIFParser extends Parser {
	public static readonly NOT = 1;
	public static readonly AND = 2;
	public static readonly OR = 3;
	public static readonly FORALL = 4;
	public static readonly EXISTS = 5;
	public static readonly WORD = 6;
	public static readonly STRING = 7;
	public static readonly VARIABLE = 8;
	public static readonly NUMBER = 9;
	public static readonly WHITE = 10;
	public static readonly COMMENT = 11;
	public static readonly LPAREN = 12;
	public static readonly RPAREN = 13;
	public static readonly ASSIGN = 14;
	public static readonly GT = 15;
	public static readonly LT = 16;
	public static readonly QUESTION = 17;
	public static readonly RULE_top_level = 0;
	public static readonly RULE_term = 1;
	public static readonly RULE_argument = 2;
	public static readonly RULE_funterm = 3;
	public static readonly RULE_sentence = 4;
	public static readonly RULE_equation = 5;
	public static readonly RULE_relsent = 6;
	public static readonly RULE_logsent = 7;
	public static readonly RULE_quantsent = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"top_level", "term", "argument", "funterm", "sentence", "equation", "relsent", 
		"logsent", "quantsent",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'not'", "'and'", "'or'", "'forall'", "'exists'", undefined, 
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'='", 
		"'>'", "'<'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NOT", "AND", "OR", "FORALL", "EXISTS", "WORD", "STRING", "VARIABLE", 
		"NUMBER", "WHITE", "COMMENT", "LPAREN", "RPAREN", "ASSIGN", "GT", "LT", 
		"QUESTION",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SUOKIFParser._LITERAL_NAMES, SUOKIFParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SUOKIFParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SUOKIF.g4"; }

	// @Override
	public get ruleNames(): string[] { return SUOKIFParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SUOKIFParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SUOKIFParser._ATN, this);
	}
	// @RuleVersion(0)
	public top_level(): Top_levelContext {
		let _localctx: Top_levelContext = new Top_levelContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SUOKIFParser.RULE_top_level);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0)) {
				{
				{
				this.state = 18;
				this.sentence();
				}
				}
				this.state = 23;
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SUOKIFParser.RULE_term);
		try {
			this.state = 30;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 24;
				this.match(SUOKIFParser.VARIABLE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 25;
				this.match(SUOKIFParser.WORD);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 26;
				this.match(SUOKIFParser.STRING);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 27;
				this.funterm();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 28;
				this.match(SUOKIFParser.NUMBER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 29;
				this.sentence();
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SUOKIFParser.RULE_argument);
		try {
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				this.sentence();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				this.term();
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
	public funterm(): FuntermContext {
		let _localctx: FuntermContext = new FuntermContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SUOKIFParser.RULE_funterm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(SUOKIFParser.LPAREN);
			this.state = 37;
			this.match(SUOKIFParser.WORD);
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 38;
				this.argument();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.STRING) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.NUMBER) | (1 << SUOKIFParser.LPAREN))) !== 0));
			this.state = 43;
			this.match(SUOKIFParser.RPAREN);
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
		this.enterRule(_localctx, 8, SUOKIFParser.RULE_sentence);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 45;
				this.match(SUOKIFParser.WORD);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 46;
				this.equation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 47;
				this.relsent();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 48;
				this.logsent();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 49;
				this.quantsent();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 50;
				this.match(SUOKIFParser.VARIABLE);
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
	public equation(): EquationContext {
		let _localctx: EquationContext = new EquationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SUOKIFParser.RULE_equation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(SUOKIFParser.LPAREN);
			this.state = 54;
			this.match(SUOKIFParser.ASSIGN);
			this.state = 55;
			this.term();
			this.state = 56;
			this.term();
			this.state = 57;
			this.match(SUOKIFParser.RPAREN);
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
	public relsent(): RelsentContext {
		let _localctx: RelsentContext = new RelsentContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SUOKIFParser.RULE_relsent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(SUOKIFParser.LPAREN);
			this.state = 60;
			_la = this._input.LA(1);
			if (!(_la === SUOKIFParser.WORD || _la === SUOKIFParser.VARIABLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 61;
				this.argument();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.STRING) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.NUMBER) | (1 << SUOKIFParser.LPAREN))) !== 0));
			this.state = 66;
			this.match(SUOKIFParser.RPAREN);
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
	public logsent(): LogsentContext {
		let _localctx: LogsentContext = new LogsentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SUOKIFParser.RULE_logsent);
		let _la: number;
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.match(SUOKIFParser.LPAREN);
				this.state = 69;
				this.match(SUOKIFParser.NOT);
				this.state = 70;
				this.sentence();
				this.state = 71;
				this.match(SUOKIFParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.match(SUOKIFParser.LPAREN);
				this.state = 74;
				this.match(SUOKIFParser.AND);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 75;
					this.sentence();
					}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0));
				this.state = 80;
				this.match(SUOKIFParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 82;
				this.match(SUOKIFParser.LPAREN);
				this.state = 83;
				this.match(SUOKIFParser.OR);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 84;
					this.sentence();
					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SUOKIFParser.WORD) | (1 << SUOKIFParser.VARIABLE) | (1 << SUOKIFParser.LPAREN))) !== 0));
				this.state = 89;
				this.match(SUOKIFParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 91;
				this.match(SUOKIFParser.LPAREN);
				this.state = 92;
				this.match(SUOKIFParser.ASSIGN);
				this.state = 93;
				this.match(SUOKIFParser.GT);
				this.state = 94;
				this.sentence();
				this.state = 95;
				this.sentence();
				this.state = 96;
				this.match(SUOKIFParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 98;
				this.match(SUOKIFParser.LPAREN);
				this.state = 99;
				this.match(SUOKIFParser.LT);
				this.state = 100;
				this.match(SUOKIFParser.ASSIGN);
				this.state = 101;
				this.match(SUOKIFParser.GT);
				this.state = 102;
				this.sentence();
				this.state = 103;
				this.sentence();
				this.state = 104;
				this.match(SUOKIFParser.RPAREN);
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
		this.enterRule(_localctx, 16, SUOKIFParser.RULE_quantsent);
		let _la: number;
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.match(SUOKIFParser.LPAREN);
				this.state = 109;
				this.match(SUOKIFParser.FORALL);
				this.state = 110;
				this.match(SUOKIFParser.LPAREN);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 111;
					this.match(SUOKIFParser.VARIABLE);
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SUOKIFParser.VARIABLE);
				this.state = 116;
				this.match(SUOKIFParser.RPAREN);
				this.state = 117;
				this.sentence();
				this.state = 118;
				this.match(SUOKIFParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(SUOKIFParser.LPAREN);
				this.state = 121;
				this.match(SUOKIFParser.EXISTS);
				this.state = 122;
				this.match(SUOKIFParser.LPAREN);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 123;
					this.match(SUOKIFParser.VARIABLE);
					}
					}
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SUOKIFParser.VARIABLE);
				this.state = 128;
				this.match(SUOKIFParser.RPAREN);
				this.state = 129;
				this.sentence();
				this.state = 130;
				this.match(SUOKIFParser.RPAREN);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13\x89\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
		"\x02\x19\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"!\n\x03\x03\x04\x03\x04\x05\x04%\n\x04\x03\x05\x03\x05\x03\x05\x06\x05" +
		"*\n\x05\r\x05\x0E\x05+\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x066\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x06\bA\n\b\r\b\x0E\bB\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x06\tO\n\t\r\t\x0E\tP\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x06\tX\n\t\r\t\x0E\tY\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\tm\n\t\x03\n\x03\n\x03\n\x03\n\x06\ns\n\n\r\n\x0E\nt\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\x7F\n\n\r\n\x0E\n\x80\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\x87\n\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x03\x04\x02\b\b" +
		"\n\n\x02\x96\x02\x17\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06$\x03\x02" +
		"\x02\x02\b&\x03\x02\x02\x02\n5\x03\x02\x02\x02\f7\x03\x02\x02\x02\x0E" +
		"=\x03\x02\x02\x02\x10l\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\x16" +
		"\x05\n\x06\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15" +
		"\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02\x19\x17" +
		"\x03\x02\x02\x02\x1A!\x07\n\x02\x02\x1B!\x07\b\x02\x02\x1C!\x07\t\x02" +
		"\x02\x1D!\x05\b\x05\x02\x1E!\x07\v\x02\x02\x1F!\x05\n\x06\x02 \x1A\x03" +
		"\x02\x02\x02 \x1B\x03\x02\x02\x02 \x1C\x03\x02\x02\x02 \x1D\x03\x02\x02" +
		"\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02!\x05\x03\x02\x02\x02\"" +
		"%\x05\n\x06\x02#%\x05\x04\x03\x02$\"\x03\x02\x02\x02$#\x03\x02\x02\x02" +
		"%\x07\x03\x02\x02\x02&\'\x07\x0E\x02\x02\')\x07\b\x02\x02(*\x05\x06\x04" +
		"\x02)(\x03\x02\x02\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02" +
		"\x02,-\x03\x02\x02\x02-.\x07\x0F\x02\x02.\t\x03\x02\x02\x02/6\x07\b\x02" +
		"\x0206\x05\f\x07\x0216\x05\x0E\b\x0226\x05\x10\t\x0236\x05\x12\n\x024" +
		"6\x07\n\x02\x025/\x03\x02\x02\x0250\x03\x02\x02\x0251\x03\x02\x02\x02" +
		"52\x03\x02\x02\x0253\x03\x02\x02\x0254\x03\x02\x02\x026\v\x03\x02\x02" +
		"\x0278\x07\x0E\x02\x0289\x07\x10\x02\x029:\x05\x04\x03\x02:;\x05\x04\x03" +
		"\x02;<\x07\x0F\x02\x02<\r\x03\x02\x02\x02=>\x07\x0E\x02\x02>@\t\x02\x02" +
		"\x02?A\x05\x06\x04\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02" +
		"\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x07\x0F\x02\x02E\x0F\x03\x02" +
		"\x02\x02FG\x07\x0E\x02\x02GH\x07\x03\x02\x02HI\x05\n\x06\x02IJ\x07\x0F" +
		"\x02\x02Jm\x03\x02\x02\x02KL\x07\x0E\x02\x02LN\x07\x04\x02\x02MO\x05\n" +
		"\x06\x02NM\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02" +
		"\x02\x02QR\x03\x02\x02\x02RS\x07\x0F\x02\x02Sm\x03\x02\x02\x02TU\x07\x0E" +
		"\x02\x02UW\x07\x05\x02\x02VX\x05\n\x06\x02WV\x03\x02\x02\x02XY\x03\x02" +
		"\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x07" +
		"\x0F\x02\x02\\m\x03\x02\x02\x02]^\x07\x0E\x02\x02^_\x07\x10\x02\x02_`" +
		"\x07\x11\x02\x02`a\x05\n\x06\x02ab\x05\n\x06\x02bc\x07\x0F\x02\x02cm\x03" +
		"\x02\x02\x02de\x07\x0E\x02\x02ef\x07\x12\x02\x02fg\x07\x10\x02\x02gh\x07" +
		"\x11\x02\x02hi\x05\n\x06\x02ij\x05\n\x06\x02jk\x07\x0F\x02\x02km\x03\x02" +
		"\x02\x02lF\x03\x02\x02\x02lK\x03\x02\x02\x02lT\x03\x02\x02\x02l]\x03\x02" +
		"\x02\x02ld\x03\x02\x02\x02m\x11\x03\x02\x02\x02no\x07\x0E\x02\x02op\x07" +
		"\x06\x02\x02pr\x07\x0E\x02\x02qs\x07\n\x02\x02rq\x03\x02\x02\x02st\x03" +
		"\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x07" +
		"\x0F\x02\x02wx\x05\n\x06\x02xy\x07\x0F\x02\x02y\x87\x03\x02\x02\x02z{" +
		"\x07\x0E\x02\x02{|\x07\x07\x02\x02|~\x07\x0E\x02\x02}\x7F\x07\n\x02\x02" +
		"~}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81" +
		"\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x07\x0F\x02\x02\x83\x84" +
		"\x05\n\x06\x02\x84\x85\x07\x0F\x02\x02\x85\x87\x03\x02\x02\x02\x86n\x03" +
		"\x02\x02\x02\x86z\x03\x02\x02\x02\x87\x13\x03\x02\x02\x02\x0E\x17 $+5" +
		"BPYlt\x80\x86";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SUOKIFParser.__ATN) {
			SUOKIFParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SUOKIFParser._serializedATN));
		}

		return SUOKIFParser.__ATN;
	}

}

export class Top_levelContext extends ParserRuleContext {
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_top_level; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterTop_level) {
			listener.enterTop_level(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitTop_level) {
			listener.exitTop_level(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.VARIABLE, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.WORD, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.STRING, 0); }
	public funterm(): FuntermContext | undefined {
		return this.tryGetRuleContext(0, FuntermContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.NUMBER, 0); }
	public sentence(): SentenceContext | undefined {
		return this.tryGetRuleContext(0, SentenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_term; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public sentence(): SentenceContext | undefined {
		return this.tryGetRuleContext(0, SentenceContext);
	}
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_argument; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class FuntermContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SUOKIFParser.LPAREN, 0); }
	public WORD(): TerminalNode { return this.getToken(SUOKIFParser.WORD, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SUOKIFParser.RPAREN, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_funterm; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterFunterm) {
			listener.enterFunterm(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitFunterm) {
			listener.exitFunterm(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	public WORD(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.WORD, 0); }
	public equation(): EquationContext | undefined {
		return this.tryGetRuleContext(0, EquationContext);
	}
	public relsent(): RelsentContext | undefined {
		return this.tryGetRuleContext(0, RelsentContext);
	}
	public logsent(): LogsentContext | undefined {
		return this.tryGetRuleContext(0, LogsentContext);
	}
	public quantsent(): QuantsentContext | undefined {
		return this.tryGetRuleContext(0, QuantsentContext);
	}
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_sentence; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterSentence) {
			listener.enterSentence(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitSentence) {
			listener.exitSentence(this);
		}
	}
}


export class EquationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SUOKIFParser.LPAREN, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(SUOKIFParser.ASSIGN, 0); }
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(SUOKIFParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_equation; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterEquation) {
			listener.enterEquation(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitEquation) {
			listener.exitEquation(this);
		}
	}
}


export class RelsentContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SUOKIFParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SUOKIFParser.RPAREN, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.WORD, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.VARIABLE, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_relsent; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterRelsent) {
			listener.enterRelsent(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitRelsent) {
			listener.exitRelsent(this);
		}
	}
}


export class LogsentContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SUOKIFParser.LPAREN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.NOT, 0); }
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(SUOKIFParser.RPAREN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.OR, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.ASSIGN, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_logsent; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterLogsent) {
			listener.enterLogsent(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitLogsent) {
			listener.exitLogsent(this);
		}
	}
}


export class QuantsentContext extends ParserRuleContext {
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SUOKIFParser.LPAREN);
		} else {
			return this.getToken(SUOKIFParser.LPAREN, i);
		}
	}
	public FORALL(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.FORALL, 0); }
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SUOKIFParser.RPAREN);
		} else {
			return this.getToken(SUOKIFParser.RPAREN, i);
		}
	}
	public sentence(): SentenceContext {
		return this.getRuleContext(0, SentenceContext);
	}
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SUOKIFParser.VARIABLE);
		} else {
			return this.getToken(SUOKIFParser.VARIABLE, i);
		}
	}
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SUOKIFParser.EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SUOKIFParser.RULE_quantsent; }
	// @Override
	public enterRule(listener: SUOKIFListener): void {
		if (listener.enterQuantsent) {
			listener.enterQuantsent(this);
		}
	}
	// @Override
	public exitRule(listener: SUOKIFListener): void {
		if (listener.exitQuantsent) {
			listener.exitQuantsent(this);
		}
	}
}


