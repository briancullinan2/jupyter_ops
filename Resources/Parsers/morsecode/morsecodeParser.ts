// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/morsecode/morsecode.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { morsecodeListener } from "./morsecodeListener";

export class morsecodeParser extends Parser {
	public static readonly DOT = 1;
	public static readonly DASH = 2;
	public static readonly SPACE = 3;
	public static readonly WS = 4;
	public static readonly RULE_morsecode = 0;
	public static readonly RULE_letter = 1;
	public static readonly RULE_a = 2;
	public static readonly RULE_b = 3;
	public static readonly RULE_c = 4;
	public static readonly RULE_d = 5;
	public static readonly RULE_e = 6;
	public static readonly RULE_f = 7;
	public static readonly RULE_g = 8;
	public static readonly RULE_h = 9;
	public static readonly RULE_i = 10;
	public static readonly RULE_j = 11;
	public static readonly RULE_k = 12;
	public static readonly RULE_l = 13;
	public static readonly RULE_m = 14;
	public static readonly RULE_n = 15;
	public static readonly RULE_o = 16;
	public static readonly RULE_p = 17;
	public static readonly RULE_q = 18;
	public static readonly RULE_r = 19;
	public static readonly RULE_s = 20;
	public static readonly RULE_t = 21;
	public static readonly RULE_u = 22;
	public static readonly RULE_v = 23;
	public static readonly RULE_w = 24;
	public static readonly RULE_x = 25;
	public static readonly RULE_y = 26;
	public static readonly RULE_z = 27;
	public static readonly RULE_one = 28;
	public static readonly RULE_two = 29;
	public static readonly RULE_three = 30;
	public static readonly RULE_four = 31;
	public static readonly RULE_five = 32;
	public static readonly RULE_six = 33;
	public static readonly RULE_seven = 34;
	public static readonly RULE_eight = 35;
	public static readonly RULE_nine = 36;
	public static readonly RULE_zero = 37;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"morsecode", "letter", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
		"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
		"y", "z", "one", "two", "three", "four", "five", "six", "seven", "eight", 
		"nine", "zero",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'-'", "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DOT", "DASH", "SPACE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(morsecodeParser._LITERAL_NAMES, morsecodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return morsecodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "morsecode.g4"; }

	// @Override
	public get ruleNames(): string[] { return morsecodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return morsecodeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(morsecodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public morsecode(): MorsecodeContext {
		let _localctx: MorsecodeContext = new MorsecodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, morsecodeParser.RULE_morsecode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.letter();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 77;
				this.match(morsecodeParser.SPACE);
				this.state = 78;
				this.letter();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === morsecodeParser.SPACE);
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
	public letter(): LetterContext {
		let _localctx: LetterContext = new LetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, morsecodeParser.RULE_letter);
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				this.a();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.b();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 85;
				this.c();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 86;
				this.d();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 87;
				this.e();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 88;
				this.f();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 89;
				this.g();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 90;
				this.h();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 91;
				this.i();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 92;
				this.j();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 93;
				this.k();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 94;
				this.l();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 95;
				this.m();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 96;
				this.n();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 97;
				this.o();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 98;
				this.p();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 99;
				this.q();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 100;
				this.r();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 101;
				this.s();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 102;
				this.t();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 103;
				this.u();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 104;
				this.v();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 105;
				this.w();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 106;
				this.x();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 107;
				this.y();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 108;
				this.z();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 109;
				this.one();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 110;
				this.two();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 111;
				this.three();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 112;
				this.four();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 113;
				this.five();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 114;
				this.six();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 115;
				this.seven();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 116;
				this.eight();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 117;
				this.nine();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 118;
				this.zero();
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
	public a(): AContext {
		let _localctx: AContext = new AContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, morsecodeParser.RULE_a);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(morsecodeParser.DOT);
			this.state = 122;
			this.match(morsecodeParser.DASH);
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
	public b(): BContext {
		let _localctx: BContext = new BContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, morsecodeParser.RULE_b);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(morsecodeParser.DASH);
			this.state = 125;
			this.match(morsecodeParser.DOT);
			this.state = 126;
			this.match(morsecodeParser.DOT);
			this.state = 127;
			this.match(morsecodeParser.DOT);
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
	public c(): CContext {
		let _localctx: CContext = new CContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, morsecodeParser.RULE_c);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(morsecodeParser.DASH);
			this.state = 130;
			this.match(morsecodeParser.DOT);
			this.state = 131;
			this.match(morsecodeParser.DASH);
			this.state = 132;
			this.match(morsecodeParser.DOT);
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
	public d(): DContext {
		let _localctx: DContext = new DContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, morsecodeParser.RULE_d);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(morsecodeParser.DASH);
			this.state = 135;
			this.match(morsecodeParser.DOT);
			this.state = 136;
			this.match(morsecodeParser.DOT);
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
	public e(): EContext {
		let _localctx: EContext = new EContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, morsecodeParser.RULE_e);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(morsecodeParser.DOT);
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
	public f(): FContext {
		let _localctx: FContext = new FContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, morsecodeParser.RULE_f);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(morsecodeParser.DOT);
			this.state = 141;
			this.match(morsecodeParser.DOT);
			this.state = 142;
			this.match(morsecodeParser.DASH);
			this.state = 143;
			this.match(morsecodeParser.DOT);
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
	public g(): GContext {
		let _localctx: GContext = new GContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, morsecodeParser.RULE_g);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(morsecodeParser.DASH);
			this.state = 146;
			this.match(morsecodeParser.DASH);
			this.state = 147;
			this.match(morsecodeParser.DOT);
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
	public h(): HContext {
		let _localctx: HContext = new HContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, morsecodeParser.RULE_h);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(morsecodeParser.DOT);
			this.state = 150;
			this.match(morsecodeParser.DOT);
			this.state = 151;
			this.match(morsecodeParser.DOT);
			this.state = 152;
			this.match(morsecodeParser.DOT);
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
	public i(): IContext {
		let _localctx: IContext = new IContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, morsecodeParser.RULE_i);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(morsecodeParser.DOT);
			this.state = 155;
			this.match(morsecodeParser.DOT);
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
	public j(): JContext {
		let _localctx: JContext = new JContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, morsecodeParser.RULE_j);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(morsecodeParser.DOT);
			this.state = 158;
			this.match(morsecodeParser.DASH);
			this.state = 159;
			this.match(morsecodeParser.DASH);
			this.state = 160;
			this.match(morsecodeParser.DASH);
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
	public k(): KContext {
		let _localctx: KContext = new KContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, morsecodeParser.RULE_k);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(morsecodeParser.DASH);
			this.state = 163;
			this.match(morsecodeParser.DOT);
			this.state = 164;
			this.match(morsecodeParser.DASH);
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
	public l(): LContext {
		let _localctx: LContext = new LContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, morsecodeParser.RULE_l);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(morsecodeParser.DOT);
			this.state = 167;
			this.match(morsecodeParser.DASH);
			this.state = 168;
			this.match(morsecodeParser.DOT);
			this.state = 169;
			this.match(morsecodeParser.DOT);
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
	public m(): MContext {
		let _localctx: MContext = new MContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, morsecodeParser.RULE_m);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(morsecodeParser.DASH);
			this.state = 172;
			this.match(morsecodeParser.DASH);
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
	public n(): NContext {
		let _localctx: NContext = new NContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, morsecodeParser.RULE_n);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(morsecodeParser.DASH);
			this.state = 175;
			this.match(morsecodeParser.DOT);
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
	public o(): OContext {
		let _localctx: OContext = new OContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, morsecodeParser.RULE_o);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(morsecodeParser.DASH);
			this.state = 178;
			this.match(morsecodeParser.DASH);
			this.state = 179;
			this.match(morsecodeParser.DASH);
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
	public p(): PContext {
		let _localctx: PContext = new PContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, morsecodeParser.RULE_p);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(morsecodeParser.DOT);
			this.state = 182;
			this.match(morsecodeParser.DASH);
			this.state = 183;
			this.match(morsecodeParser.DASH);
			this.state = 184;
			this.match(morsecodeParser.DOT);
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
	public q(): QContext {
		let _localctx: QContext = new QContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, morsecodeParser.RULE_q);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(morsecodeParser.DASH);
			this.state = 187;
			this.match(morsecodeParser.DASH);
			this.state = 188;
			this.match(morsecodeParser.DOT);
			this.state = 189;
			this.match(morsecodeParser.DASH);
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
	public r(): RContext {
		let _localctx: RContext = new RContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, morsecodeParser.RULE_r);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(morsecodeParser.DOT);
			this.state = 192;
			this.match(morsecodeParser.DASH);
			this.state = 193;
			this.match(morsecodeParser.DOT);
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
	public s(): SContext {
		let _localctx: SContext = new SContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, morsecodeParser.RULE_s);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(morsecodeParser.DOT);
			this.state = 196;
			this.match(morsecodeParser.DOT);
			this.state = 197;
			this.match(morsecodeParser.DOT);
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
		this.enterRule(_localctx, 42, morsecodeParser.RULE_t);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(morsecodeParser.DASH);
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
	public u(): UContext {
		let _localctx: UContext = new UContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, morsecodeParser.RULE_u);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(morsecodeParser.DOT);
			this.state = 202;
			this.match(morsecodeParser.DOT);
			this.state = 203;
			this.match(morsecodeParser.DASH);
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
	public v(): VContext {
		let _localctx: VContext = new VContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, morsecodeParser.RULE_v);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(morsecodeParser.DOT);
			this.state = 206;
			this.match(morsecodeParser.DOT);
			this.state = 207;
			this.match(morsecodeParser.DOT);
			this.state = 208;
			this.match(morsecodeParser.DASH);
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
	public w(): WContext {
		let _localctx: WContext = new WContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, morsecodeParser.RULE_w);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(morsecodeParser.DOT);
			this.state = 211;
			this.match(morsecodeParser.DASH);
			this.state = 212;
			this.match(morsecodeParser.DASH);
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
	public x(): XContext {
		let _localctx: XContext = new XContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, morsecodeParser.RULE_x);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(morsecodeParser.DASH);
			this.state = 215;
			this.match(morsecodeParser.DOT);
			this.state = 216;
			this.match(morsecodeParser.DOT);
			this.state = 217;
			this.match(morsecodeParser.DASH);
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
	public y(): YContext {
		let _localctx: YContext = new YContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, morsecodeParser.RULE_y);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(morsecodeParser.DASH);
			this.state = 220;
			this.match(morsecodeParser.DOT);
			this.state = 221;
			this.match(morsecodeParser.DASH);
			this.state = 222;
			this.match(morsecodeParser.DASH);
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
	public z(): ZContext {
		let _localctx: ZContext = new ZContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, morsecodeParser.RULE_z);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(morsecodeParser.DASH);
			this.state = 225;
			this.match(morsecodeParser.DASH);
			this.state = 226;
			this.match(morsecodeParser.DOT);
			this.state = 227;
			this.match(morsecodeParser.DOT);
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
	public one(): OneContext {
		let _localctx: OneContext = new OneContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, morsecodeParser.RULE_one);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(morsecodeParser.DOT);
			this.state = 230;
			this.match(morsecodeParser.DASH);
			this.state = 231;
			this.match(morsecodeParser.DASH);
			this.state = 232;
			this.match(morsecodeParser.DASH);
			this.state = 233;
			this.match(morsecodeParser.DASH);
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
	public two(): TwoContext {
		let _localctx: TwoContext = new TwoContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, morsecodeParser.RULE_two);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(morsecodeParser.DOT);
			this.state = 236;
			this.match(morsecodeParser.DOT);
			this.state = 237;
			this.match(morsecodeParser.DASH);
			this.state = 238;
			this.match(morsecodeParser.DASH);
			this.state = 239;
			this.match(morsecodeParser.DASH);
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
	public three(): ThreeContext {
		let _localctx: ThreeContext = new ThreeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, morsecodeParser.RULE_three);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(morsecodeParser.DOT);
			this.state = 242;
			this.match(morsecodeParser.DOT);
			this.state = 243;
			this.match(morsecodeParser.DOT);
			this.state = 244;
			this.match(morsecodeParser.DASH);
			this.state = 245;
			this.match(morsecodeParser.DASH);
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
	public four(): FourContext {
		let _localctx: FourContext = new FourContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, morsecodeParser.RULE_four);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(morsecodeParser.DOT);
			this.state = 248;
			this.match(morsecodeParser.DOT);
			this.state = 249;
			this.match(morsecodeParser.DOT);
			this.state = 250;
			this.match(morsecodeParser.DOT);
			this.state = 251;
			this.match(morsecodeParser.DASH);
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
	public five(): FiveContext {
		let _localctx: FiveContext = new FiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, morsecodeParser.RULE_five);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(morsecodeParser.DOT);
			this.state = 254;
			this.match(morsecodeParser.DOT);
			this.state = 255;
			this.match(morsecodeParser.DOT);
			this.state = 256;
			this.match(morsecodeParser.DOT);
			this.state = 257;
			this.match(morsecodeParser.DOT);
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
	public six(): SixContext {
		let _localctx: SixContext = new SixContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, morsecodeParser.RULE_six);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(morsecodeParser.DASH);
			this.state = 260;
			this.match(morsecodeParser.DOT);
			this.state = 261;
			this.match(morsecodeParser.DOT);
			this.state = 262;
			this.match(morsecodeParser.DOT);
			this.state = 263;
			this.match(morsecodeParser.DOT);
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
	public seven(): SevenContext {
		let _localctx: SevenContext = new SevenContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, morsecodeParser.RULE_seven);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(morsecodeParser.DASH);
			this.state = 266;
			this.match(morsecodeParser.DASH);
			this.state = 267;
			this.match(morsecodeParser.DOT);
			this.state = 268;
			this.match(morsecodeParser.DOT);
			this.state = 269;
			this.match(morsecodeParser.DOT);
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
	public eight(): EightContext {
		let _localctx: EightContext = new EightContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, morsecodeParser.RULE_eight);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(morsecodeParser.DASH);
			this.state = 272;
			this.match(morsecodeParser.DASH);
			this.state = 273;
			this.match(morsecodeParser.DASH);
			this.state = 274;
			this.match(morsecodeParser.DOT);
			this.state = 275;
			this.match(morsecodeParser.DOT);
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
	public nine(): NineContext {
		let _localctx: NineContext = new NineContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, morsecodeParser.RULE_nine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(morsecodeParser.DASH);
			this.state = 278;
			this.match(morsecodeParser.DASH);
			this.state = 279;
			this.match(morsecodeParser.DASH);
			this.state = 280;
			this.match(morsecodeParser.DASH);
			this.state = 281;
			this.match(morsecodeParser.DOT);
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
	public zero(): ZeroContext {
		let _localctx: ZeroContext = new ZeroContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, morsecodeParser.RULE_zero);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(morsecodeParser.DASH);
			this.state = 284;
			this.match(morsecodeParser.DASH);
			this.state = 285;
			this.match(morsecodeParser.DASH);
			this.state = 286;
			this.match(morsecodeParser.DASH);
			this.state = 287;
			this.match(morsecodeParser.DASH);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06\u0124\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x03\x02\x03\x02\x03\x02\x06\x02" +
		"R\n\x02\r\x02\x0E\x02S\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03z\n\x03\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x02\x02" +
		"\x02(\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02\x02\x02\x02\u0121\x02N\x03\x02\x02\x02\x04y" +
		"\x03\x02\x02\x02\x06{\x03\x02\x02\x02\b~\x03\x02\x02\x02\n\x83\x03\x02" +
		"\x02\x02\f\x88\x03\x02\x02\x02\x0E\x8C\x03\x02\x02\x02\x10\x8E\x03\x02" +
		"\x02\x02\x12\x93\x03\x02\x02\x02\x14\x97\x03\x02\x02\x02\x16\x9C\x03\x02" +
		"\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xA4\x03\x02\x02\x02\x1C\xA8\x03\x02" +
		"\x02\x02\x1E\xAD\x03\x02\x02\x02 \xB0\x03\x02\x02\x02\"\xB3\x03\x02\x02" +
		"\x02$\xB7\x03\x02\x02\x02&\xBC\x03\x02\x02\x02(\xC1\x03\x02\x02\x02*\xC5" +
		"\x03\x02\x02\x02,\xC9\x03\x02\x02\x02.\xCB\x03\x02\x02\x020\xCF\x03\x02" +
		"\x02\x022\xD4\x03\x02\x02\x024\xD8\x03\x02\x02\x026\xDD\x03\x02\x02\x02" +
		"8\xE2\x03\x02\x02\x02:\xE7\x03\x02\x02\x02<\xED\x03\x02\x02\x02>\xF3\x03" +
		"\x02\x02\x02@\xF9\x03\x02\x02\x02B\xFF\x03\x02\x02\x02D\u0105\x03\x02" +
		"\x02\x02F\u010B\x03\x02\x02\x02H\u0111\x03\x02\x02\x02J\u0117\x03\x02" +
		"\x02\x02L\u011D\x03\x02\x02\x02NQ\x05\x04\x03\x02OP\x07\x05\x02\x02PR" +
		"\x05\x04\x03\x02QO\x03\x02\x02\x02RS\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02T\x03\x03\x02\x02\x02Uz\x05\x06\x04\x02Vz\x05\b\x05" +
		"\x02Wz\x05\n\x06\x02Xz\x05\f\x07\x02Yz\x05\x0E\b\x02Zz\x05\x10\t\x02[" +
		"z\x05\x12\n\x02\\z\x05\x14\v\x02]z\x05\x16\f\x02^z\x05\x18\r\x02_z\x05" +
		"\x1A\x0E\x02`z\x05\x1C\x0F\x02az\x05\x1E\x10\x02bz\x05 \x11\x02cz\x05" +
		"\"\x12\x02dz\x05$\x13\x02ez\x05&\x14\x02fz\x05(\x15\x02gz\x05*\x16\x02" +
		"hz\x05,\x17\x02iz\x05.\x18\x02jz\x050\x19\x02kz\x052\x1A\x02lz\x054\x1B" +
		"\x02mz\x056\x1C\x02nz\x058\x1D\x02oz\x05:\x1E\x02pz\x05<\x1F\x02qz\x05" +
		"> \x02rz\x05@!\x02sz\x05B\"\x02tz\x05D#\x02uz\x05F$\x02vz\x05H%\x02wz" +
		"\x05J&\x02xz\x05L\'\x02yU\x03\x02\x02\x02yV\x03\x02\x02\x02yW\x03\x02" +
		"\x02\x02yX\x03\x02\x02\x02yY\x03\x02\x02\x02yZ\x03\x02\x02\x02y[\x03\x02" +
		"\x02\x02y\\\x03\x02\x02\x02y]\x03\x02\x02\x02y^\x03\x02\x02\x02y_\x03" +
		"\x02\x02\x02y`\x03\x02\x02\x02ya\x03\x02\x02\x02yb\x03\x02\x02\x02yc\x03" +
		"\x02\x02\x02yd\x03\x02\x02\x02ye\x03\x02\x02\x02yf\x03\x02\x02\x02yg\x03" +
		"\x02\x02\x02yh\x03\x02\x02\x02yi\x03\x02\x02\x02yj\x03\x02\x02\x02yk\x03" +
		"\x02\x02\x02yl\x03\x02\x02\x02ym\x03\x02\x02\x02yn\x03\x02\x02\x02yo\x03" +
		"\x02\x02\x02yp\x03\x02\x02\x02yq\x03\x02\x02\x02yr\x03\x02\x02\x02ys\x03" +
		"\x02\x02\x02yt\x03\x02\x02\x02yu\x03\x02\x02\x02yv\x03\x02\x02\x02yw\x03" +
		"\x02\x02\x02yx\x03\x02\x02\x02z\x05\x03\x02\x02\x02{|\x07\x03\x02\x02" +
		"|}\x07\x04\x02\x02}\x07\x03\x02\x02\x02~\x7F\x07\x04\x02\x02\x7F\x80\x07" +
		"\x03\x02\x02\x80\x81\x07\x03\x02\x02\x81\x82\x07\x03\x02\x02\x82\t\x03" +
		"\x02\x02\x02\x83\x84\x07\x04\x02\x02\x84\x85\x07\x03\x02\x02\x85\x86\x07" +
		"\x04\x02\x02\x86\x87\x07\x03\x02\x02\x87\v\x03\x02\x02\x02\x88\x89\x07" +
		"\x04\x02\x02\x89\x8A\x07\x03\x02\x02\x8A\x8B\x07\x03\x02\x02\x8B\r\x03" +
		"\x02\x02\x02\x8C\x8D\x07\x03\x02\x02\x8D\x0F\x03\x02\x02\x02\x8E\x8F\x07" +
		"\x03\x02\x02\x8F\x90\x07\x03\x02\x02\x90\x91\x07\x04\x02\x02\x91\x92\x07" +
		"\x03\x02\x02\x92\x11\x03\x02\x02\x02\x93\x94\x07\x04\x02\x02\x94\x95\x07" +
		"\x04\x02\x02\x95\x96\x07\x03\x02\x02\x96\x13\x03\x02\x02\x02\x97\x98\x07" +
		"\x03\x02\x02\x98\x99\x07\x03\x02\x02\x99\x9A\x07\x03\x02\x02\x9A\x9B\x07" +
		"\x03\x02\x02\x9B\x15\x03\x02\x02\x02\x9C\x9D\x07\x03\x02\x02\x9D\x9E\x07" +
		"\x03\x02\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07\x03\x02\x02\xA0\xA1\x07" +
		"\x04\x02\x02\xA1\xA2\x07\x04\x02\x02\xA2\xA3\x07\x04\x02\x02\xA3\x19\x03" +
		"\x02\x02\x02\xA4\xA5\x07\x04\x02\x02\xA5\xA6\x07\x03\x02\x02\xA6\xA7\x07" +
		"\x04\x02\x02\xA7\x1B\x03\x02\x02\x02\xA8\xA9\x07\x03\x02\x02\xA9\xAA\x07" +
		"\x04\x02\x02\xAA\xAB\x07\x03\x02\x02\xAB\xAC\x07\x03\x02\x02\xAC\x1D\x03" +
		"\x02\x02\x02\xAD\xAE\x07\x04\x02\x02\xAE\xAF\x07\x04\x02\x02\xAF\x1F\x03" +
		"\x02\x02\x02\xB0\xB1\x07\x04\x02\x02\xB1\xB2\x07\x03\x02\x02\xB2!\x03" +
		"\x02\x02\x02\xB3\xB4\x07\x04\x02\x02\xB4\xB5\x07\x04\x02\x02\xB5\xB6\x07" +
		"\x04\x02\x02\xB6#\x03\x02\x02\x02\xB7\xB8\x07\x03\x02\x02\xB8\xB9\x07" +
		"\x04\x02\x02\xB9\xBA\x07\x04\x02\x02\xBA\xBB\x07\x03\x02\x02\xBB%\x03" +
		"\x02\x02\x02\xBC\xBD\x07\x04\x02\x02\xBD\xBE\x07\x04\x02\x02\xBE\xBF\x07" +
		"\x03\x02\x02\xBF\xC0\x07\x04\x02\x02\xC0\'\x03\x02\x02\x02\xC1\xC2\x07" +
		"\x03\x02\x02\xC2\xC3\x07\x04\x02\x02\xC3\xC4\x07\x03\x02\x02\xC4)\x03" +
		"\x02\x02\x02\xC5\xC6\x07\x03\x02\x02\xC6\xC7\x07\x03\x02\x02\xC7\xC8\x07" +
		"\x03\x02\x02\xC8+\x03\x02\x02\x02\xC9\xCA\x07\x04\x02\x02\xCA-\x03\x02" +
		"\x02\x02\xCB\xCC\x07\x03\x02\x02\xCC\xCD\x07\x03\x02\x02\xCD\xCE\x07\x04" +
		"\x02\x02\xCE/\x03\x02\x02\x02\xCF\xD0\x07\x03\x02\x02\xD0\xD1\x07\x03" +
		"\x02\x02\xD1\xD2\x07\x03\x02\x02\xD2\xD3\x07\x04\x02\x02\xD31\x03\x02" +
		"\x02\x02\xD4\xD5\x07\x03\x02\x02\xD5\xD6\x07\x04\x02\x02\xD6\xD7\x07\x04" +
		"\x02\x02\xD73\x03\x02\x02\x02\xD8\xD9\x07\x04\x02\x02\xD9\xDA\x07\x03" +
		"\x02\x02\xDA\xDB\x07\x03\x02\x02\xDB\xDC\x07\x04\x02\x02\xDC5\x03\x02" +
		"\x02\x02\xDD\xDE\x07\x04\x02\x02\xDE\xDF\x07\x03\x02\x02\xDF\xE0\x07\x04" +
		"\x02\x02\xE0\xE1\x07\x04\x02\x02\xE17\x03\x02\x02\x02\xE2\xE3\x07\x04" +
		"\x02\x02\xE3\xE4\x07\x04\x02\x02\xE4\xE5\x07\x03\x02\x02\xE5\xE6\x07\x03" +
		"\x02\x02\xE69\x03\x02\x02\x02\xE7\xE8\x07\x03\x02\x02\xE8\xE9\x07\x04" +
		"\x02\x02\xE9\xEA\x07\x04\x02\x02\xEA\xEB\x07\x04\x02\x02\xEB\xEC\x07\x04" +
		"\x02\x02\xEC;\x03\x02\x02\x02\xED\xEE\x07\x03\x02\x02\xEE\xEF\x07\x03" +
		"\x02\x02\xEF\xF0\x07\x04\x02\x02\xF0\xF1\x07\x04\x02\x02\xF1\xF2\x07\x04" +
		"\x02\x02\xF2=\x03\x02\x02\x02\xF3\xF4\x07\x03\x02\x02\xF4\xF5\x07\x03" +
		"\x02\x02\xF5\xF6\x07\x03\x02\x02\xF6\xF7\x07\x04\x02\x02\xF7\xF8\x07\x04" +
		"\x02\x02\xF8?\x03\x02\x02\x02\xF9\xFA\x07\x03\x02\x02\xFA\xFB\x07\x03" +
		"\x02\x02\xFB\xFC\x07\x03\x02\x02\xFC\xFD\x07\x03\x02\x02\xFD\xFE\x07\x04" +
		"\x02\x02\xFEA\x03\x02\x02\x02\xFF\u0100\x07\x03\x02\x02\u0100\u0101\x07" +
		"\x03\x02\x02\u0101\u0102\x07\x03\x02\x02\u0102\u0103\x07\x03\x02\x02\u0103" +
		"\u0104\x07\x03\x02\x02\u0104C\x03\x02\x02\x02\u0105\u0106\x07\x04\x02" +
		"\x02\u0106\u0107\x07\x03\x02\x02\u0107\u0108\x07\x03\x02\x02\u0108\u0109" +
		"\x07\x03\x02\x02\u0109\u010A\x07\x03\x02\x02\u010AE\x03\x02\x02\x02\u010B" +
		"\u010C\x07\x04\x02\x02\u010C\u010D\x07\x04\x02\x02\u010D\u010E\x07\x03" +
		"\x02\x02\u010E\u010F\x07\x03\x02\x02\u010F\u0110\x07\x03\x02\x02\u0110" +
		"G\x03\x02\x02\x02\u0111\u0112\x07\x04\x02\x02\u0112\u0113\x07\x04\x02" +
		"\x02\u0113\u0114\x07\x04\x02\x02\u0114\u0115\x07\x03\x02\x02\u0115\u0116" +
		"\x07\x03\x02\x02\u0116I\x03\x02\x02\x02\u0117\u0118\x07\x04\x02\x02\u0118" +
		"\u0119\x07\x04\x02\x02\u0119\u011A\x07\x04\x02\x02\u011A\u011B\x07\x04" +
		"\x02\x02\u011B\u011C\x07\x03\x02\x02\u011CK\x03\x02\x02\x02\u011D\u011E" +
		"\x07\x04\x02\x02\u011E\u011F\x07\x04\x02\x02\u011F\u0120\x07\x04\x02\x02" +
		"\u0120\u0121\x07\x04\x02\x02\u0121\u0122\x07\x04\x02\x02\u0122M\x03\x02" +
		"\x02\x02\x04Sy";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!morsecodeParser.__ATN) {
			morsecodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(morsecodeParser._serializedATN));
		}

		return morsecodeParser.__ATN;
	}

}

export class MorsecodeContext extends ParserRuleContext {
	public letter(): LetterContext[];
	public letter(i: number): LetterContext;
	public letter(i?: number): LetterContext | LetterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LetterContext);
		} else {
			return this.getRuleContext(i, LetterContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.SPACE);
		} else {
			return this.getToken(morsecodeParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_morsecode; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterMorsecode) {
			listener.enterMorsecode(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitMorsecode) {
			listener.exitMorsecode(this);
		}
	}
}


export class LetterContext extends ParserRuleContext {
	public a(): AContext | undefined {
		return this.tryGetRuleContext(0, AContext);
	}
	public b(): BContext | undefined {
		return this.tryGetRuleContext(0, BContext);
	}
	public c(): CContext | undefined {
		return this.tryGetRuleContext(0, CContext);
	}
	public d(): DContext | undefined {
		return this.tryGetRuleContext(0, DContext);
	}
	public e(): EContext | undefined {
		return this.tryGetRuleContext(0, EContext);
	}
	public f(): FContext | undefined {
		return this.tryGetRuleContext(0, FContext);
	}
	public g(): GContext | undefined {
		return this.tryGetRuleContext(0, GContext);
	}
	public h(): HContext | undefined {
		return this.tryGetRuleContext(0, HContext);
	}
	public i(): IContext | undefined {
		return this.tryGetRuleContext(0, IContext);
	}
	public j(): JContext | undefined {
		return this.tryGetRuleContext(0, JContext);
	}
	public k(): KContext | undefined {
		return this.tryGetRuleContext(0, KContext);
	}
	public l(): LContext | undefined {
		return this.tryGetRuleContext(0, LContext);
	}
	public m(): MContext | undefined {
		return this.tryGetRuleContext(0, MContext);
	}
	public n(): NContext | undefined {
		return this.tryGetRuleContext(0, NContext);
	}
	public o(): OContext | undefined {
		return this.tryGetRuleContext(0, OContext);
	}
	public p(): PContext | undefined {
		return this.tryGetRuleContext(0, PContext);
	}
	public q(): QContext | undefined {
		return this.tryGetRuleContext(0, QContext);
	}
	public r(): RContext | undefined {
		return this.tryGetRuleContext(0, RContext);
	}
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	public t(): TContext | undefined {
		return this.tryGetRuleContext(0, TContext);
	}
	public u(): UContext | undefined {
		return this.tryGetRuleContext(0, UContext);
	}
	public v(): VContext | undefined {
		return this.tryGetRuleContext(0, VContext);
	}
	public w(): WContext | undefined {
		return this.tryGetRuleContext(0, WContext);
	}
	public x(): XContext | undefined {
		return this.tryGetRuleContext(0, XContext);
	}
	public y(): YContext | undefined {
		return this.tryGetRuleContext(0, YContext);
	}
	public z(): ZContext | undefined {
		return this.tryGetRuleContext(0, ZContext);
	}
	public one(): OneContext | undefined {
		return this.tryGetRuleContext(0, OneContext);
	}
	public two(): TwoContext | undefined {
		return this.tryGetRuleContext(0, TwoContext);
	}
	public three(): ThreeContext | undefined {
		return this.tryGetRuleContext(0, ThreeContext);
	}
	public four(): FourContext | undefined {
		return this.tryGetRuleContext(0, FourContext);
	}
	public five(): FiveContext | undefined {
		return this.tryGetRuleContext(0, FiveContext);
	}
	public six(): SixContext | undefined {
		return this.tryGetRuleContext(0, SixContext);
	}
	public seven(): SevenContext | undefined {
		return this.tryGetRuleContext(0, SevenContext);
	}
	public eight(): EightContext | undefined {
		return this.tryGetRuleContext(0, EightContext);
	}
	public nine(): NineContext | undefined {
		return this.tryGetRuleContext(0, NineContext);
	}
	public zero(): ZeroContext | undefined {
		return this.tryGetRuleContext(0, ZeroContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_letter; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterLetter) {
			listener.enterLetter(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitLetter) {
			listener.exitLetter(this);
		}
	}
}


export class AContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_a; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterA) {
			listener.enterA(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitA) {
			listener.exitA(this);
		}
	}
}


export class BContext extends ParserRuleContext {
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_b; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterB) {
			listener.enterB(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitB) {
			listener.exitB(this);
		}
	}
}


export class CContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_c; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterC) {
			listener.enterC(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitC) {
			listener.exitC(this);
		}
	}
}


export class DContext extends ParserRuleContext {
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_d; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterD) {
			listener.enterD(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitD) {
			listener.exitD(this);
		}
	}
}


export class EContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_e; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterE) {
			listener.enterE(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitE) {
			listener.exitE(this);
		}
	}
}


export class FContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_f; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterF) {
			listener.enterF(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitF) {
			listener.exitF(this);
		}
	}
}


export class GContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_g; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterG) {
			listener.enterG(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitG) {
			listener.exitG(this);
		}
	}
}


export class HContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_h; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterH) {
			listener.enterH(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitH) {
			listener.exitH(this);
		}
	}
}


export class IContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_i; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterI) {
			listener.enterI(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitI) {
			listener.exitI(this);
		}
	}
}


export class JContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_j; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterJ) {
			listener.enterJ(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitJ) {
			listener.exitJ(this);
		}
	}
}


export class KContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_k; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterK) {
			listener.enterK(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitK) {
			listener.exitK(this);
		}
	}
}


export class LContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_l; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterL) {
			listener.enterL(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitL) {
			listener.exitL(this);
		}
	}
}


export class MContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_m; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterM) {
			listener.enterM(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitM) {
			listener.exitM(this);
		}
	}
}


export class NContext extends ParserRuleContext {
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_n; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterN) {
			listener.enterN(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitN) {
			listener.exitN(this);
		}
	}
}


export class OContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_o; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterO) {
			listener.enterO(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitO) {
			listener.exitO(this);
		}
	}
}


export class PContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_p; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterP) {
			listener.enterP(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitP) {
			listener.exitP(this);
		}
	}
}


export class QContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_q; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterQ) {
			listener.enterQ(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitQ) {
			listener.exitQ(this);
		}
	}
}


export class RContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_r; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterR) {
			listener.enterR(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitR) {
			listener.exitR(this);
		}
	}
}


export class SContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_s; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterS) {
			listener.enterS(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitS) {
			listener.exitS(this);
		}
	}
}


export class TContext extends ParserRuleContext {
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_t; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterT) {
			listener.enterT(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitT) {
			listener.exitT(this);
		}
	}
}


export class UContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_u; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterU) {
			listener.enterU(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitU) {
			listener.exitU(this);
		}
	}
}


export class VContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_v; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterV) {
			listener.enterV(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitV) {
			listener.exitV(this);
		}
	}
}


export class WContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_w; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterW) {
			listener.enterW(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitW) {
			listener.exitW(this);
		}
	}
}


export class XContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_x; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterX) {
			listener.enterX(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitX) {
			listener.exitX(this);
		}
	}
}


export class YContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_y; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterY) {
			listener.enterY(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitY) {
			listener.exitY(this);
		}
	}
}


export class ZContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_z; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterZ) {
			listener.enterZ(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitZ) {
			listener.exitZ(this);
		}
	}
}


export class OneContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_one; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterOne) {
			listener.enterOne(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitOne) {
			listener.exitOne(this);
		}
	}
}


export class TwoContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_two; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterTwo) {
			listener.enterTwo(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitTwo) {
			listener.exitTwo(this);
		}
	}
}


export class ThreeContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_three; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterThree) {
			listener.enterThree(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitThree) {
			listener.exitThree(this);
		}
	}
}


export class FourContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_four; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterFour) {
			listener.enterFour(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitFour) {
			listener.exitFour(this);
		}
	}
}


export class FiveContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_five; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterFive) {
			listener.enterFive(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitFive) {
			listener.exitFive(this);
		}
	}
}


export class SixContext extends ParserRuleContext {
	public DASH(): TerminalNode { return this.getToken(morsecodeParser.DASH, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_six; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterSix) {
			listener.enterSix(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitSix) {
			listener.exitSix(this);
		}
	}
}


export class SevenContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_seven; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterSeven) {
			listener.enterSeven(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitSeven) {
			listener.exitSeven(this);
		}
	}
}


export class EightContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DOT);
		} else {
			return this.getToken(morsecodeParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_eight; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterEight) {
			listener.enterEight(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitEight) {
			listener.exitEight(this);
		}
	}
}


export class NineContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(morsecodeParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_nine; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterNine) {
			listener.enterNine(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitNine) {
			listener.exitNine(this);
		}
	}
}


export class ZeroContext extends ParserRuleContext {
	public DASH(): TerminalNode[];
	public DASH(i: number): TerminalNode;
	public DASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(morsecodeParser.DASH);
		} else {
			return this.getToken(morsecodeParser.DASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return morsecodeParser.RULE_zero; }
	// @Override
	public enterRule(listener: morsecodeListener): void {
		if (listener.enterZero) {
			listener.enterZero(this);
		}
	}
	// @Override
	public exitRule(listener: morsecodeListener): void {
		if (listener.exitZero) {
			listener.exitZero(this);
		}
	}
}


