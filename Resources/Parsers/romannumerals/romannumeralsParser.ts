// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/romannumerals/romannumerals.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { romannumeralsListener } from "./romannumeralsListener";
import { romannumeralsVisitor } from "./romannumeralsVisitor";


export class romannumeralsParser extends Parser {
	public static readonly M = 1;
	public static readonly CD = 2;
	public static readonly D = 3;
	public static readonly CM = 4;
	public static readonly C = 5;
	public static readonly CC = 6;
	public static readonly CCC = 7;
	public static readonly XL = 8;
	public static readonly L = 9;
	public static readonly XC = 10;
	public static readonly X = 11;
	public static readonly XX = 12;
	public static readonly XXX = 13;
	public static readonly IV = 14;
	public static readonly V = 15;
	public static readonly IX = 16;
	public static readonly I = 17;
	public static readonly II = 18;
	public static readonly III = 19;
	public static readonly WS = 20;
	public static readonly RULE_expression = 0;
	public static readonly RULE_thousands = 1;
	public static readonly RULE_thous_part = 2;
	public static readonly RULE_hundreds = 3;
	public static readonly RULE_hun_part = 4;
	public static readonly RULE_hun_rep = 5;
	public static readonly RULE_tens = 6;
	public static readonly RULE_tens_part = 7;
	public static readonly RULE_tens_rep = 8;
	public static readonly RULE_ones = 9;
	public static readonly RULE_ones_rep = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "thousands", "thous_part", "hundreds", "hun_part", "hun_rep", 
		"tens", "tens_part", "tens_rep", "ones", "ones_rep",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'M'", "'CD'", "'D'", "'CM'", "'C'", "'CC'", "'CCC'", "'XL'", 
		"'L'", "'XC'", "'X'", "'XX'", "'XXX'", "'IV'", "'V'", "'IX'", "'I'", "'II'", 
		"'III'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "M", "CD", "D", "CM", "C", "CC", "CCC", "XL", "L", "XC", "X", 
		"XX", "XXX", "IV", "V", "IX", "I", "II", "III", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(romannumeralsParser._LITERAL_NAMES, romannumeralsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return romannumeralsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "romannumerals.g4"; }

	// @Override
	public get ruleNames(): string[] { return romannumeralsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return romannumeralsParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(romannumeralsParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, romannumeralsParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.thousands();
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
	public thousands(): ThousandsContext {
		let _localctx: ThousandsContext = new ThousandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, romannumeralsParser.RULE_thousands);
		try {
			this.state = 29;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 24;
				this.thous_part(0);
				this.state = 25;
				this.hundreds();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 27;
				this.thous_part(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 28;
				this.hundreds();
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

	public thous_part(): Thous_partContext;
	public thous_part(_p: number): Thous_partContext;
	// @RuleVersion(0)
	public thous_part(_p?: number): Thous_partContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Thous_partContext = new Thous_partContext(this._ctx, _parentState);
		let _prevctx: Thous_partContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, romannumeralsParser.RULE_thous_part, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 32;
			this.match(romannumeralsParser.M);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Thous_partContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, romannumeralsParser.RULE_thous_part);
					this.state = 34;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 35;
					this.match(romannumeralsParser.M);
					}
					}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hundreds(): HundredsContext {
		let _localctx: HundredsContext = new HundredsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, romannumeralsParser.RULE_hundreds);
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				this.hun_part();
				this.state = 42;
				this.tens();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.hun_part();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 45;
				this.tens();
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
	public hun_part(): Hun_partContext {
		let _localctx: Hun_partContext = new Hun_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, romannumeralsParser.RULE_hun_part);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.hun_rep();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.match(romannumeralsParser.CD);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.match(romannumeralsParser.D);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 51;
				this.match(romannumeralsParser.D);
				this.state = 52;
				this.hun_rep();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 53;
				this.match(romannumeralsParser.CM);
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
	public hun_rep(): Hun_repContext {
		let _localctx: Hun_repContext = new Hun_repContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, romannumeralsParser.RULE_hun_rep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << romannumeralsParser.C) | (1 << romannumeralsParser.CC) | (1 << romannumeralsParser.CCC))) !== 0))) {
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
	public tens(): TensContext {
		let _localctx: TensContext = new TensContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, romannumeralsParser.RULE_tens);
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 58;
				this.tens_part();
				this.state = 59;
				this.ones();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 61;
				this.tens_part();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 62;
				this.ones();
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
	public tens_part(): Tens_partContext {
		let _localctx: Tens_partContext = new Tens_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, romannumeralsParser.RULE_tens_part);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.tens_rep();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.match(romannumeralsParser.XL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 67;
				this.match(romannumeralsParser.L);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 68;
				this.match(romannumeralsParser.L);
				this.state = 69;
				this.tens_rep();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 70;
				this.match(romannumeralsParser.XC);
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
	public tens_rep(): Tens_repContext {
		let _localctx: Tens_repContext = new Tens_repContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, romannumeralsParser.RULE_tens_rep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << romannumeralsParser.X) | (1 << romannumeralsParser.XX) | (1 << romannumeralsParser.XXX))) !== 0))) {
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
	public ones(): OnesContext {
		let _localctx: OnesContext = new OnesContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, romannumeralsParser.RULE_ones);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.ones_rep();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.match(romannumeralsParser.IV);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 77;
				this.match(romannumeralsParser.V);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 78;
				this.match(romannumeralsParser.V);
				this.state = 79;
				this.ones_rep();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 80;
				this.match(romannumeralsParser.IX);
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
	public ones_rep(): Ones_repContext {
		let _localctx: Ones_repContext = new Ones_repContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, romannumeralsParser.RULE_ones_rep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << romannumeralsParser.I) | (1 << romannumeralsParser.II) | (1 << romannumeralsParser.III))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.thous_part_sempred(_localctx as Thous_partContext, predIndex);
		}
		return true;
	}
	private thous_part_sempred(_localctx: Thous_partContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16X\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03 \n\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\'\n\x04\f\x04\x0E\x04*\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x051\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x069\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\bB\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tJ\n" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vT\n\v\x03\f\x03" +
		"\f\x03\f\x02\x02\x03\x06\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x05\x03\x02\x07\t\x03\x02\r\x0F" +
		"\x03\x02\x13\x15\x02_\x02\x18\x03\x02\x02\x02\x04\x1F\x03\x02\x02\x02" +
		"\x06!\x03\x02\x02\x02\b0\x03\x02\x02\x02\n8\x03\x02\x02\x02\f:\x03\x02" +
		"\x02\x02\x0EA\x03\x02\x02\x02\x10I\x03\x02\x02\x02\x12K\x03\x02\x02\x02" +
		"\x14S\x03\x02\x02\x02\x16U\x03\x02\x02\x02\x18\x19\x05\x04\x03\x02\x19" +
		"\x03\x03\x02\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x05\b\x05\x02\x1C" +
		" \x03\x02\x02\x02\x1D \x05\x06\x04\x02\x1E \x05\b\x05\x02\x1F\x1A\x03" +
		"\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F\x1E\x03\x02\x02\x02 \x05\x03" +
		"\x02\x02\x02!\"\b\x04\x01\x02\"#\x07\x03\x02\x02#(\x03\x02\x02\x02$%\f" +
		"\x04\x02\x02%\'\x07\x03\x02\x02&$\x03\x02\x02\x02\'*\x03\x02\x02\x02(" +
		"&\x03\x02\x02\x02()\x03\x02\x02\x02)\x07\x03\x02\x02\x02*(\x03\x02\x02" +
		"\x02+,\x05\n\x06\x02,-\x05\x0E\b\x02-1\x03\x02\x02\x02.1\x05\n\x06\x02" +
		"/1\x05\x0E\b\x020+\x03\x02\x02\x020.\x03\x02\x02\x020/\x03\x02\x02\x02" +
		"1\t\x03\x02\x02\x0229\x05\f\x07\x0239\x07\x04\x02\x0249\x07\x05\x02\x02" +
		"56\x07\x05\x02\x0269\x05\f\x07\x0279\x07\x06\x02\x0282\x03\x02\x02\x02" +
		"83\x03\x02\x02\x0284\x03\x02\x02\x0285\x03\x02\x02\x0287\x03\x02\x02\x02" +
		"9\v\x03\x02\x02\x02:;\t\x02\x02\x02;\r\x03\x02\x02\x02<=\x05\x10\t\x02" +
		"=>\x05\x14\v\x02>B\x03\x02\x02\x02?B\x05\x10\t\x02@B\x05\x14\v\x02A<\x03" +
		"\x02\x02\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02B\x0F\x03\x02\x02\x02" +
		"CJ\x05\x12\n\x02DJ\x07\n\x02\x02EJ\x07\v\x02\x02FG\x07\v\x02\x02GJ\x05" +
		"\x12\n\x02HJ\x07\f\x02\x02IC\x03\x02\x02\x02ID\x03\x02\x02\x02IE\x03\x02" +
		"\x02\x02IF\x03\x02\x02\x02IH\x03\x02\x02\x02J\x11\x03\x02\x02\x02KL\t" +
		"\x03\x02\x02L\x13\x03\x02\x02\x02MT\x05\x16\f\x02NT\x07\x10\x02\x02OT" +
		"\x07\x11\x02\x02PQ\x07\x11\x02\x02QT\x05\x16\f\x02RT\x07\x12\x02\x02S" +
		"M\x03\x02\x02\x02SN\x03\x02\x02\x02SO\x03\x02\x02\x02SP\x03\x02\x02\x02" +
		"SR\x03\x02\x02\x02T\x15\x03\x02\x02\x02UV\t\x04\x02\x02V\x17\x03\x02\x02" +
		"\x02\t\x1F(08AIS";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!romannumeralsParser.__ATN) {
			romannumeralsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(romannumeralsParser._serializedATN));
		}

		return romannumeralsParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public thousands(): ThousandsContext {
		return this.getRuleContext(0, ThousandsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_expression; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThousandsContext extends ParserRuleContext {
	public thous_part(): Thous_partContext | undefined {
		return this.tryGetRuleContext(0, Thous_partContext);
	}
	public hundreds(): HundredsContext | undefined {
		return this.tryGetRuleContext(0, HundredsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_thousands; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterThousands) {
			listener.enterThousands(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitThousands) {
			listener.exitThousands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitThousands) {
			return visitor.visitThousands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Thous_partContext extends ParserRuleContext {
	public thous_part(): Thous_partContext | undefined {
		return this.tryGetRuleContext(0, Thous_partContext);
	}
	public M(): TerminalNode { return this.getToken(romannumeralsParser.M, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_thous_part; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterThous_part) {
			listener.enterThous_part(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitThous_part) {
			listener.exitThous_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitThous_part) {
			return visitor.visitThous_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HundredsContext extends ParserRuleContext {
	public hun_part(): Hun_partContext | undefined {
		return this.tryGetRuleContext(0, Hun_partContext);
	}
	public tens(): TensContext | undefined {
		return this.tryGetRuleContext(0, TensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_hundreds; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterHundreds) {
			listener.enterHundreds(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitHundreds) {
			listener.exitHundreds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitHundreds) {
			return visitor.visitHundreds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hun_partContext extends ParserRuleContext {
	public hun_rep(): Hun_repContext | undefined {
		return this.tryGetRuleContext(0, Hun_repContext);
	}
	public CD(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.CD, 0); }
	public D(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.D, 0); }
	public CM(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.CM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_hun_part; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterHun_part) {
			listener.enterHun_part(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitHun_part) {
			listener.exitHun_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitHun_part) {
			return visitor.visitHun_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hun_repContext extends ParserRuleContext {
	public C(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.C, 0); }
	public CC(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.CC, 0); }
	public CCC(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.CCC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_hun_rep; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterHun_rep) {
			listener.enterHun_rep(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitHun_rep) {
			listener.exitHun_rep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitHun_rep) {
			return visitor.visitHun_rep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TensContext extends ParserRuleContext {
	public tens_part(): Tens_partContext | undefined {
		return this.tryGetRuleContext(0, Tens_partContext);
	}
	public ones(): OnesContext | undefined {
		return this.tryGetRuleContext(0, OnesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_tens; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterTens) {
			listener.enterTens(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitTens) {
			listener.exitTens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitTens) {
			return visitor.visitTens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tens_partContext extends ParserRuleContext {
	public tens_rep(): Tens_repContext | undefined {
		return this.tryGetRuleContext(0, Tens_repContext);
	}
	public XL(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.XL, 0); }
	public L(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.L, 0); }
	public XC(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.XC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_tens_part; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterTens_part) {
			listener.enterTens_part(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitTens_part) {
			listener.exitTens_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitTens_part) {
			return visitor.visitTens_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tens_repContext extends ParserRuleContext {
	public X(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.X, 0); }
	public XX(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.XX, 0); }
	public XXX(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.XXX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_tens_rep; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterTens_rep) {
			listener.enterTens_rep(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitTens_rep) {
			listener.exitTens_rep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitTens_rep) {
			return visitor.visitTens_rep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnesContext extends ParserRuleContext {
	public ones_rep(): Ones_repContext | undefined {
		return this.tryGetRuleContext(0, Ones_repContext);
	}
	public IV(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.IV, 0); }
	public V(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.V, 0); }
	public IX(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.IX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_ones; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterOnes) {
			listener.enterOnes(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitOnes) {
			listener.exitOnes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitOnes) {
			return visitor.visitOnes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ones_repContext extends ParserRuleContext {
	public I(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.I, 0); }
	public II(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.II, 0); }
	public III(): TerminalNode | undefined { return this.tryGetToken(romannumeralsParser.III, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return romannumeralsParser.RULE_ones_rep; }
	// @Override
	public enterRule(listener: romannumeralsListener): void {
		if (listener.enterOnes_rep) {
			listener.enterOnes_rep(this);
		}
	}
	// @Override
	public exitRule(listener: romannumeralsListener): void {
		if (listener.exitOnes_rep) {
			listener.exitOnes_rep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: romannumeralsVisitor<Result>): Result {
		if (visitor.visitOnes_rep) {
			return visitor.visitOnes_rep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


