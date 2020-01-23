// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/telephone/telephone.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { telephoneListener } from "./telephoneListener";

export class telephoneParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly DIGIT = 5;
	public static readonly WS = 6;
	public static readonly RULE_number = 0;
	public static readonly RULE_variation = 1;
	public static readonly RULE_nanp = 2;
	public static readonly RULE_areacode = 3;
	public static readonly RULE_exchange = 4;
	public static readonly RULE_subscriber = 5;
	public static readonly RULE_japan = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"number", "variation", "nanp", "areacode", "exchange", "subscriber", "japan",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+1'", "'+'", "'011'", "'010'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "DIGIT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(telephoneParser._LITERAL_NAMES, telephoneParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return telephoneParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "telephone.g4"; }

	// @Override
	public get ruleNames(): string[] { return telephoneParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return telephoneParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(telephoneParser._ATN, this);
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, telephoneParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === telephoneParser.T__0) {
				{
				this.state = 14;
				this.match(telephoneParser.T__0);
				}
			}

			this.state = 18;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === telephoneParser.T__1) {
				{
				this.state = 17;
				this.match(telephoneParser.T__1);
				}
			}

			this.state = 20;
			this.variation();
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
	public variation(): VariationContext {
		let _localctx: VariationContext = new VariationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, telephoneParser.RULE_variation);
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case telephoneParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 22;
				this.nanp();
				}
				break;
			case telephoneParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 23;
				this.japan();
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
	public nanp(): NanpContext {
		let _localctx: NanpContext = new NanpContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, telephoneParser.RULE_nanp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(telephoneParser.T__2);
			this.state = 27;
			this.areacode();
			this.state = 28;
			this.exchange();
			this.state = 29;
			this.subscriber();
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
	public areacode(): AreacodeContext {
		let _localctx: AreacodeContext = new AreacodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, telephoneParser.RULE_areacode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.match(telephoneParser.DIGIT);
			this.state = 32;
			this.match(telephoneParser.DIGIT);
			this.state = 33;
			this.match(telephoneParser.DIGIT);
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
	public exchange(): ExchangeContext {
		let _localctx: ExchangeContext = new ExchangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, telephoneParser.RULE_exchange);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(telephoneParser.DIGIT);
			this.state = 36;
			this.match(telephoneParser.DIGIT);
			this.state = 37;
			this.match(telephoneParser.DIGIT);
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
	public subscriber(): SubscriberContext {
		let _localctx: SubscriberContext = new SubscriberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, telephoneParser.RULE_subscriber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(telephoneParser.DIGIT);
			this.state = 40;
			this.match(telephoneParser.DIGIT);
			this.state = 41;
			this.match(telephoneParser.DIGIT);
			this.state = 42;
			this.match(telephoneParser.DIGIT);
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
	public japan(): JapanContext {
		let _localctx: JapanContext = new JapanContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, telephoneParser.RULE_japan);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(telephoneParser.T__3);
			this.state = 45;
			this.areacode();
			this.state = 46;
			this.exchange();
			this.state = 47;
			this.subscriber();
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b4\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x03\x02\x05\x02\x12\n\x02\x03\x02\x05\x02\x15\n\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x02\x02\x02/\x02\x11\x03\x02\x02\x02\x04\x1A\x03\x02\x02\x02" +
		"\x06\x1C\x03\x02\x02\x02\b!\x03\x02\x02\x02\n%\x03\x02\x02\x02\f)\x03" +
		"\x02\x02\x02\x0E.\x03\x02\x02\x02\x10\x12\x07\x03\x02\x02\x11\x10\x03" +
		"\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x14\x03\x02\x02\x02\x13\x15\x07" +
		"\x04\x02\x02\x14\x13\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x16\x03" +
		"\x02\x02\x02\x16\x17\x05\x04\x03\x02\x17\x03\x03\x02\x02\x02\x18\x1B\x05" +
		"\x06\x04\x02\x19\x1B\x05\x0E\b\x02\x1A\x18\x03\x02\x02\x02\x1A\x19\x03" +
		"\x02\x02\x02\x1B\x05\x03\x02\x02\x02\x1C\x1D\x07\x05\x02\x02\x1D\x1E\x05" +
		"\b\x05\x02\x1E\x1F\x05\n\x06\x02\x1F \x05\f\x07\x02 \x07\x03\x02\x02\x02" +
		"!\"\x07\x07\x02\x02\"#\x07\x07\x02\x02#$\x07\x07\x02\x02$\t\x03\x02\x02" +
		"\x02%&\x07\x07\x02\x02&\'\x07\x07\x02\x02\'(\x07\x07\x02\x02(\v\x03\x02" +
		"\x02\x02)*\x07\x07\x02\x02*+\x07\x07\x02\x02+,\x07\x07\x02\x02,-\x07\x07" +
		"\x02\x02-\r\x03\x02\x02\x02./\x07\x06\x02\x02/0\x05\b\x05\x0201\x05\n" +
		"\x06\x0212\x05\f\x07\x022\x0F\x03\x02\x02\x02\x05\x11\x14\x1A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!telephoneParser.__ATN) {
			telephoneParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(telephoneParser._serializedATN));
		}

		return telephoneParser.__ATN;
	}

}

export class NumberContext extends ParserRuleContext {
	public variation(): VariationContext {
		return this.getRuleContext(0, VariationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return telephoneParser.RULE_number; }
	// @Override
	public enterRule(listener: telephoneListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: telephoneListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class VariationContext extends ParserRuleContext {
	public nanp(): NanpContext | undefined {
		return this.tryGetRuleContext(0, NanpContext);
	}
	public japan(): JapanContext | undefined {
		return this.tryGetRuleContext(0, JapanContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return telephoneParser.RULE_variation; }
	// @Override
	public enterRule(listener: telephoneListener): void {
		if (listener.enterVariation) {
			listener.enterVariation(this);
		}
	}
	// @Override
	public exitRule(listener: telephoneListener): void {
		if (listener.exitVariation) {
			listener.exitVariation(this);
		}
	}
}


export class NanpContext extends ParserRuleContext {
	public areacode(): AreacodeContext {
		return this.getRuleContext(0, AreacodeContext);
	}
	public exchange(): ExchangeContext {
		return this.getRuleContext(0, ExchangeContext);
	}
	public subscriber(): SubscriberContext {
		return this.getRuleContext(0, SubscriberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return telephoneParser.RULE_nanp; }
	// @Override
	public enterRule(listener: telephoneListener): void {
		if (listener.enterNanp) {
			listener.enterNanp(this);
		}
	}
	// @Override
	public exitRule(listener: telephoneListener): void {
		if (listener.exitNanp) {
			listener.exitNanp(this);
		}
	}
}


export class AreacodeContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(telephoneParser.DIGIT);
		} else {
			return this.getToken(telephoneParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return telephoneParser.RULE_areacode; }
	// @Override
	public enterRule(listener: telephoneListener): void {
		if (listener.enterAreacode) {
			listener.enterAreacode(this);
		}
	}
	// @Override
	public exitRule(listener: telephoneListener): void {
		if (listener.exitAreacode) {
			listener.exitAreacode(this);
		}
	}
}


export class ExchangeContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(telephoneParser.DIGIT);
		} else {
			return this.getToken(telephoneParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return telephoneParser.RULE_exchange; }
	// @Override
	public enterRule(listener: telephoneListener): void {
		if (listener.enterExchange) {
			listener.enterExchange(this);
		}
	}
	// @Override
	public exitRule(listener: telephoneListener): void {
		if (listener.exitExchange) {
			listener.exitExchange(this);
		}
	}
}


export class SubscriberContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(telephoneParser.DIGIT);
		} else {
			return this.getToken(telephoneParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return telephoneParser.RULE_subscriber; }
	// @Override
	public enterRule(listener: telephoneListener): void {
		if (listener.enterSubscriber) {
			listener.enterSubscriber(this);
		}
	}
	// @Override
	public exitRule(listener: telephoneListener): void {
		if (listener.exitSubscriber) {
			listener.exitSubscriber(this);
		}
	}
}


export class JapanContext extends ParserRuleContext {
	public areacode(): AreacodeContext {
		return this.getRuleContext(0, AreacodeContext);
	}
	public exchange(): ExchangeContext {
		return this.getRuleContext(0, ExchangeContext);
	}
	public subscriber(): SubscriberContext {
		return this.getRuleContext(0, SubscriberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return telephoneParser.RULE_japan; }
	// @Override
	public enterRule(listener: telephoneListener): void {
		if (listener.enterJapan) {
			listener.enterJapan(this);
		}
	}
	// @Override
	public exitRule(listener: telephoneListener): void {
		if (listener.exitJapan) {
			listener.exitJapan(this);
		}
	}
}


