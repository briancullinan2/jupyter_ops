// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-datetime/datetime.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { datetimeListener } from "./datetimeListener";
import { datetimeVisitor } from "./datetimeVisitor";


export class datetimeParser extends Parser {
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
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly ALPHA = 34;
	public static readonly DIGIT = 35;
	public static readonly WS = 36;
	public static readonly RULE_date_time = 0;
	public static readonly RULE_day = 1;
	public static readonly RULE_date = 2;
	public static readonly RULE_month = 3;
	public static readonly RULE_time = 4;
	public static readonly RULE_hour = 5;
	public static readonly RULE_zone = 6;
	public static readonly RULE_two_digit = 7;
	public static readonly RULE_four_digit = 8;
	public static readonly RULE_alphanumeric = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"date_time", "day", "date", "month", "time", "hour", "zone", "two_digit", 
		"four_digit", "alphanumeric",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'Mon'", "'Tue'", "'Wed'", "'Thu'", "'Fri'", "'Sat'", 
		"'Sun'", "'Jan'", "'Feb'", "'Mar'", "'Apr'", "'May'", "'Jun'", "'Jul'", 
		"'Aug'", "'Sep'", "'Oct'", "'Nov'", "'Dec'", "':'", "'UT'", "'GMT'", "'EST'", 
		"'EDT'", "'CST'", "'CDT'", "'MST'", "'MDT'", "'PST'", "'PDT'", "'+'", 
		"'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "ALPHA", 
		"DIGIT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(datetimeParser._LITERAL_NAMES, datetimeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return datetimeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "datetime.g4"; }

	// @Override
	public get ruleNames(): string[] { return datetimeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return datetimeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(datetimeParser._ATN, this);
	}
	// @RuleVersion(0)
	public date_time(): Date_timeContext {
		let _localctx: Date_timeContext = new Date_timeContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, datetimeParser.RULE_date_time);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << datetimeParser.T__1) | (1 << datetimeParser.T__2) | (1 << datetimeParser.T__3) | (1 << datetimeParser.T__4) | (1 << datetimeParser.T__5) | (1 << datetimeParser.T__6) | (1 << datetimeParser.T__7))) !== 0)) {
				{
				this.state = 20;
				this.day();
				this.state = 21;
				this.match(datetimeParser.T__0);
				}
			}

			this.state = 25;
			this.date();
			this.state = 26;
			this.time();
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
	public day(): DayContext {
		let _localctx: DayContext = new DayContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, datetimeParser.RULE_day);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << datetimeParser.T__1) | (1 << datetimeParser.T__2) | (1 << datetimeParser.T__3) | (1 << datetimeParser.T__4) | (1 << datetimeParser.T__5) | (1 << datetimeParser.T__6) | (1 << datetimeParser.T__7))) !== 0))) {
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
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, datetimeParser.RULE_date);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 30;
				this.two_digit();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === datetimeParser.ALPHA || _la === datetimeParser.DIGIT);
			this.state = 35;
			this.month();
			this.state = 36;
			this.two_digit();
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
	public month(): MonthContext {
		let _localctx: MonthContext = new MonthContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, datetimeParser.RULE_month);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << datetimeParser.T__8) | (1 << datetimeParser.T__9) | (1 << datetimeParser.T__10) | (1 << datetimeParser.T__11) | (1 << datetimeParser.T__12) | (1 << datetimeParser.T__13) | (1 << datetimeParser.T__14) | (1 << datetimeParser.T__15) | (1 << datetimeParser.T__16) | (1 << datetimeParser.T__17) | (1 << datetimeParser.T__18) | (1 << datetimeParser.T__19))) !== 0))) {
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
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, datetimeParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.hour();
			this.state = 41;
			this.zone();
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
	public hour(): HourContext {
		let _localctx: HourContext = new HourContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, datetimeParser.RULE_hour);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.two_digit();
			this.state = 44;
			this.match(datetimeParser.T__20);
			this.state = 45;
			this.two_digit();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === datetimeParser.T__20) {
				{
				this.state = 46;
				this.match(datetimeParser.T__20);
				this.state = 47;
				this.two_digit();
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
	public zone(): ZoneContext {
		let _localctx: ZoneContext = new ZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, datetimeParser.RULE_zone);
		let _la: number;
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case datetimeParser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				this.match(datetimeParser.T__21);
				}
				break;
			case datetimeParser.T__22:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.match(datetimeParser.T__22);
				}
				break;
			case datetimeParser.T__23:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 52;
				this.match(datetimeParser.T__23);
				}
				break;
			case datetimeParser.T__24:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 53;
				this.match(datetimeParser.T__24);
				}
				break;
			case datetimeParser.T__25:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 54;
				this.match(datetimeParser.T__25);
				}
				break;
			case datetimeParser.T__26:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 55;
				this.match(datetimeParser.T__26);
				}
				break;
			case datetimeParser.T__27:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 56;
				this.match(datetimeParser.T__27);
				}
				break;
			case datetimeParser.T__28:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 57;
				this.match(datetimeParser.T__28);
				}
				break;
			case datetimeParser.T__29:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 58;
				this.match(datetimeParser.T__29);
				}
				break;
			case datetimeParser.T__30:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 59;
				this.match(datetimeParser.T__30);
				}
				break;
			case datetimeParser.ALPHA:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 60;
				this.match(datetimeParser.ALPHA);
				}
				break;
			case datetimeParser.T__31:
			case datetimeParser.T__32:
				this.enterOuterAlt(_localctx, 12);
				{
				{
				this.state = 61;
				_la = this._input.LA(1);
				if (!(_la === datetimeParser.T__31 || _la === datetimeParser.T__32)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 62;
				this.four_digit();
				}
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
	public two_digit(): Two_digitContext {
		let _localctx: Two_digitContext = new Two_digitContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, datetimeParser.RULE_two_digit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.alphanumeric();
			this.state = 66;
			this.alphanumeric();
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
	public four_digit(): Four_digitContext {
		let _localctx: Four_digitContext = new Four_digitContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, datetimeParser.RULE_four_digit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.alphanumeric();
			this.state = 69;
			this.alphanumeric();
			this.state = 70;
			this.alphanumeric();
			this.state = 71;
			this.alphanumeric();
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
	public alphanumeric(): AlphanumericContext {
		let _localctx: AlphanumericContext = new AlphanumericContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, datetimeParser.RULE_alphanumeric);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			_la = this._input.LA(1);
			if (!(_la === datetimeParser.ALPHA || _la === datetimeParser.DIGIT)) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&N\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02\x05\x02" +
		"\x1A\n\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x06\x04\"\n" +
		"\x04\r\x04\x0E\x04#\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x073\n\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\bB\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x02\x06\x03\x02\x04\n\x03\x02\v\x16\x03\x02\"" +
		"#\x03\x02$%\x02Q\x02\x19\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06!" +
		"\x03\x02\x02\x02\b(\x03\x02\x02\x02\n*\x03\x02\x02\x02\f-\x03\x02\x02" +
		"\x02\x0EA\x03\x02\x02\x02\x10C\x03\x02\x02\x02\x12F\x03\x02\x02\x02\x14" +
		"K\x03\x02\x02\x02\x16\x17\x05\x04\x03\x02\x17\x18\x07\x03\x02\x02\x18" +
		"\x1A\x03\x02\x02\x02\x19\x16\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A" +
		"\x1B\x03\x02\x02\x02\x1B\x1C\x05\x06\x04\x02\x1C\x1D\x05\n\x06\x02\x1D" +
		"\x03\x03\x02\x02\x02\x1E\x1F\t\x02\x02\x02\x1F\x05\x03\x02\x02\x02 \"" +
		"\x05\x10\t\x02! \x03\x02\x02\x02\"#\x03\x02\x02\x02#!\x03\x02\x02\x02" +
		"#$\x03\x02\x02\x02$%\x03\x02\x02\x02%&\x05\b\x05\x02&\'\x05\x10\t\x02" +
		"\'\x07\x03\x02\x02\x02()\t\x03\x02\x02)\t\x03\x02\x02\x02*+\x05\f\x07" +
		"\x02+,\x05\x0E\b\x02,\v\x03\x02\x02\x02-.\x05\x10\t\x02./\x07\x17\x02" +
		"\x02/2\x05\x10\t\x0201\x07\x17\x02\x0213\x05\x10\t\x0220\x03\x02\x02\x02" +
		"23\x03\x02\x02\x023\r\x03\x02\x02\x024B\x07\x18\x02\x025B\x07\x19\x02" +
		"\x026B\x07\x1A\x02\x027B\x07\x1B\x02\x028B\x07\x1C\x02\x029B\x07\x1D\x02" +
		"\x02:B\x07\x1E\x02\x02;B\x07\x1F\x02\x02<B\x07 \x02\x02=B\x07!\x02\x02" +
		">B\x07$\x02\x02?@\t\x04\x02\x02@B\x05\x12\n\x02A4\x03\x02\x02\x02A5\x03" +
		"\x02\x02\x02A6\x03\x02\x02\x02A7\x03\x02\x02\x02A8\x03\x02\x02\x02A9\x03" +
		"\x02\x02\x02A:\x03\x02\x02\x02A;\x03\x02\x02\x02A<\x03\x02\x02\x02A=\x03" +
		"\x02\x02\x02A>\x03\x02\x02\x02A?\x03\x02\x02\x02B\x0F\x03\x02\x02\x02" +
		"CD\x05\x14\v\x02DE\x05\x14\v\x02E\x11\x03\x02\x02\x02FG\x05\x14\v\x02" +
		"GH\x05\x14\v\x02HI\x05\x14\v\x02IJ\x05\x14\v\x02J\x13\x03\x02\x02\x02" +
		"KL\t\x05\x02\x02L\x15\x03\x02\x02\x02\x06\x19#2A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!datetimeParser.__ATN) {
			datetimeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(datetimeParser._serializedATN));
		}

		return datetimeParser.__ATN;
	}

}

export class Date_timeContext extends ParserRuleContext {
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	public time(): TimeContext {
		return this.getRuleContext(0, TimeContext);
	}
	public day(): DayContext | undefined {
		return this.tryGetRuleContext(0, DayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_date_time; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterDate_time) {
			listener.enterDate_time(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitDate_time) {
			listener.exitDate_time(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitDate_time) {
			return visitor.visitDate_time(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DayContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_day; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterDay) {
			listener.enterDay(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitDay) {
			listener.exitDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitDay) {
			return visitor.visitDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public month(): MonthContext {
		return this.getRuleContext(0, MonthContext);
	}
	public two_digit(): Two_digitContext[];
	public two_digit(i: number): Two_digitContext;
	public two_digit(i?: number): Two_digitContext | Two_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Two_digitContext);
		} else {
			return this.getRuleContext(i, Two_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_date; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitDate) {
			return visitor.visitDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MonthContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_month; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterMonth) {
			listener.enterMonth(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitMonth) {
			listener.exitMonth(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitMonth) {
			return visitor.visitMonth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public hour(): HourContext {
		return this.getRuleContext(0, HourContext);
	}
	public zone(): ZoneContext {
		return this.getRuleContext(0, ZoneContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_time; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitTime) {
			return visitor.visitTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HourContext extends ParserRuleContext {
	public two_digit(): Two_digitContext[];
	public two_digit(i: number): Two_digitContext;
	public two_digit(i?: number): Two_digitContext | Two_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Two_digitContext);
		} else {
			return this.getRuleContext(i, Two_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_hour; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterHour) {
			listener.enterHour(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitHour) {
			listener.exitHour(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitHour) {
			return visitor.visitHour(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZoneContext extends ParserRuleContext {
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(datetimeParser.ALPHA, 0); }
	public four_digit(): Four_digitContext | undefined {
		return this.tryGetRuleContext(0, Four_digitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_zone; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterZone) {
			listener.enterZone(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitZone) {
			listener.exitZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitZone) {
			return visitor.visitZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Two_digitContext extends ParserRuleContext {
	public alphanumeric(): AlphanumericContext[];
	public alphanumeric(i: number): AlphanumericContext;
	public alphanumeric(i?: number): AlphanumericContext | AlphanumericContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlphanumericContext);
		} else {
			return this.getRuleContext(i, AlphanumericContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_two_digit; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterTwo_digit) {
			listener.enterTwo_digit(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitTwo_digit) {
			listener.exitTwo_digit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitTwo_digit) {
			return visitor.visitTwo_digit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Four_digitContext extends ParserRuleContext {
	public alphanumeric(): AlphanumericContext[];
	public alphanumeric(i: number): AlphanumericContext;
	public alphanumeric(i?: number): AlphanumericContext | AlphanumericContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlphanumericContext);
		} else {
			return this.getRuleContext(i, AlphanumericContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_four_digit; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterFour_digit) {
			listener.enterFour_digit(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitFour_digit) {
			listener.exitFour_digit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitFour_digit) {
			return visitor.visitFour_digit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlphanumericContext extends ParserRuleContext {
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(datetimeParser.ALPHA, 0); }
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(datetimeParser.DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return datetimeParser.RULE_alphanumeric; }
	// @Override
	public enterRule(listener: datetimeListener): void {
		if (listener.enterAlphanumeric) {
			listener.enterAlphanumeric(this);
		}
	}
	// @Override
	public exitRule(listener: datetimeListener): void {
		if (listener.exitAlphanumeric) {
			listener.exitAlphanumeric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: datetimeVisitor<Result>): Result {
		if (visitor.visitAlphanumeric) {
			return visitor.visitAlphanumeric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


