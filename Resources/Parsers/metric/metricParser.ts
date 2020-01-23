// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/metric/metric.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { metricListener } from "./metricListener";

export class metricParser extends Parser {
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
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly INTE = 47;
	public static readonly WS = 48;
	public static readonly RULE_uom = 0;
	public static readonly RULE_measure = 1;
	public static readonly RULE_exponent = 2;
	public static readonly RULE_prefix = 3;
	public static readonly RULE_unit = 4;
	public static readonly RULE_baseunit = 5;
	public static readonly RULE_derivedunit = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"uom", "measure", "exponent", "prefix", "unit", "baseunit", "derivedunit",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'/'", "'^'", "'E'", "'P'", "'T'", "'G'", "'M'", "'k'", 
		"'h'", "'da'", "'d'", "'c'", "'m'", "'\u00B5'", "'n'", "'p'", "'f'", "'a'", 
		"'g'", "'s'", "'A'", "'K'", "'mol'", "'cd'", "'rad'", "'Hz'", "'sr'", 
		"'N'", "'Pa'", "'J'", "'W'", "'C'", "'V'", "'F'", "'\u03A9'", "'S'", "'Wb'", 
		"'H'", "'\u02DAC'", "'lm'", "'lx'", "'Bq'", "'Gy'", "'Sv'", "'kat'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "INTE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(metricParser._LITERAL_NAMES, metricParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return metricParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "metric.g4"; }

	// @Override
	public get ruleNames(): string[] { return metricParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return metricParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(metricParser._ATN, this);
	}
	// @RuleVersion(0)
	public uom(): UomContext {
		let _localctx: UomContext = new UomContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, metricParser.RULE_uom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.measure();
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === metricParser.T__0 || _la === metricParser.T__1) {
				{
				{
				this.state = 15;
				_la = this._input.LA(1);
				if (!(_la === metricParser.T__0 || _la === metricParser.T__1)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 16;
				this.measure();
				}
				}
				this.state = 21;
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
	public measure(): MeasureContext {
		let _localctx: MeasureContext = new MeasureContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, metricParser.RULE_measure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 22;
				this.prefix();
				}
				break;
			}
			this.state = 25;
			this.unit();
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === metricParser.T__2) {
				{
				this.state = 26;
				this.exponent();
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
	public exponent(): ExponentContext {
		let _localctx: ExponentContext = new ExponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, metricParser.RULE_exponent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 29;
			this.match(metricParser.T__2);
			this.state = 30;
			this.match(metricParser.INTE);
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
	public prefix(): PrefixContext {
		let _localctx: PrefixContext = new PrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, metricParser.RULE_prefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << metricParser.T__3) | (1 << metricParser.T__4) | (1 << metricParser.T__5) | (1 << metricParser.T__6) | (1 << metricParser.T__7) | (1 << metricParser.T__8) | (1 << metricParser.T__9) | (1 << metricParser.T__10) | (1 << metricParser.T__11) | (1 << metricParser.T__12) | (1 << metricParser.T__13) | (1 << metricParser.T__14) | (1 << metricParser.T__15) | (1 << metricParser.T__16) | (1 << metricParser.T__17) | (1 << metricParser.T__18))) !== 0))) {
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
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, metricParser.RULE_unit);
		try {
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case metricParser.T__13:
			case metricParser.T__19:
			case metricParser.T__20:
			case metricParser.T__21:
			case metricParser.T__22:
			case metricParser.T__23:
			case metricParser.T__24:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.baseunit();
				}
				break;
			case metricParser.T__5:
			case metricParser.T__25:
			case metricParser.T__26:
			case metricParser.T__27:
			case metricParser.T__28:
			case metricParser.T__29:
			case metricParser.T__30:
			case metricParser.T__31:
			case metricParser.T__32:
			case metricParser.T__33:
			case metricParser.T__34:
			case metricParser.T__35:
			case metricParser.T__36:
			case metricParser.T__37:
			case metricParser.T__38:
			case metricParser.T__39:
			case metricParser.T__40:
			case metricParser.T__41:
			case metricParser.T__42:
			case metricParser.T__43:
			case metricParser.T__44:
			case metricParser.T__45:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.derivedunit();
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
	public baseunit(): BaseunitContext {
		let _localctx: BaseunitContext = new BaseunitContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, metricParser.RULE_baseunit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << metricParser.T__13) | (1 << metricParser.T__19) | (1 << metricParser.T__20) | (1 << metricParser.T__21) | (1 << metricParser.T__22) | (1 << metricParser.T__23) | (1 << metricParser.T__24))) !== 0))) {
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
	public derivedunit(): DerivedunitContext {
		let _localctx: DerivedunitContext = new DerivedunitContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, metricParser.RULE_derivedunit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << metricParser.T__5) | (1 << metricParser.T__25) | (1 << metricParser.T__26) | (1 << metricParser.T__27) | (1 << metricParser.T__28) | (1 << metricParser.T__29) | (1 << metricParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (metricParser.T__31 - 32)) | (1 << (metricParser.T__32 - 32)) | (1 << (metricParser.T__33 - 32)) | (1 << (metricParser.T__34 - 32)) | (1 << (metricParser.T__35 - 32)) | (1 << (metricParser.T__36 - 32)) | (1 << (metricParser.T__37 - 32)) | (1 << (metricParser.T__38 - 32)) | (1 << (metricParser.T__39 - 32)) | (1 << (metricParser.T__40 - 32)) | (1 << (metricParser.T__41 - 32)) | (1 << (metricParser.T__42 - 32)) | (1 << (metricParser.T__43 - 32)) | (1 << (metricParser.T__44 - 32)) | (1 << (metricParser.T__45 - 32)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032-\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x03\x02\x03\x02\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02\x17" +
		"\v\x02\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x05\x03\x1E\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\'\n\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x02\x06\x03\x02\x03\x04\x03\x02\x06\x15\x04\x02" +
		"\x10\x10\x16\x1B\x04\x02\b\b\x1C0\x02)\x02\x10\x03\x02\x02\x02\x04\x19" +
		"\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\"\x03\x02\x02\x02\n&\x03\x02" +
		"\x02\x02\f(\x03\x02\x02\x02\x0E*\x03\x02\x02\x02\x10\x15\x05\x04\x03\x02" +
		"\x11\x12\t\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x11\x03\x02\x02\x02" +
		"\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02" +
		"\x16\x03\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x1A\x05\b\x05\x02" +
		"\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02" +
		"\x1B\x1D\x05\n\x06\x02\x1C\x1E\x05\x06\x04\x02\x1D\x1C\x03\x02\x02\x02" +
		"\x1D\x1E\x03\x02\x02\x02\x1E\x05\x03\x02\x02\x02\x1F \x07\x05\x02\x02" +
		" !\x071\x02\x02!\x07\x03\x02\x02\x02\"#\t\x03\x02\x02#\t\x03\x02\x02\x02" +
		"$\'\x05\f\x07\x02%\'\x05\x0E\b\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02" +
		"\'\v\x03\x02\x02\x02()\t\x04\x02\x02)\r\x03\x02\x02\x02*+\t\x05\x02\x02" +
		"+\x0F\x03\x02\x02\x02\x06\x15\x19\x1D&";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!metricParser.__ATN) {
			metricParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(metricParser._serializedATN));
		}

		return metricParser.__ATN;
	}

}

export class UomContext extends ParserRuleContext {
	public measure(): MeasureContext[];
	public measure(i: number): MeasureContext;
	public measure(i?: number): MeasureContext | MeasureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MeasureContext);
		} else {
			return this.getRuleContext(i, MeasureContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return metricParser.RULE_uom; }
	// @Override
	public enterRule(listener: metricListener): void {
		if (listener.enterUom) {
			listener.enterUom(this);
		}
	}
	// @Override
	public exitRule(listener: metricListener): void {
		if (listener.exitUom) {
			listener.exitUom(this);
		}
	}
}


export class MeasureContext extends ParserRuleContext {
	public unit(): UnitContext {
		return this.getRuleContext(0, UnitContext);
	}
	public prefix(): PrefixContext | undefined {
		return this.tryGetRuleContext(0, PrefixContext);
	}
	public exponent(): ExponentContext | undefined {
		return this.tryGetRuleContext(0, ExponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return metricParser.RULE_measure; }
	// @Override
	public enterRule(listener: metricListener): void {
		if (listener.enterMeasure) {
			listener.enterMeasure(this);
		}
	}
	// @Override
	public exitRule(listener: metricListener): void {
		if (listener.exitMeasure) {
			listener.exitMeasure(this);
		}
	}
}


export class ExponentContext extends ParserRuleContext {
	public INTE(): TerminalNode | undefined { return this.tryGetToken(metricParser.INTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return metricParser.RULE_exponent; }
	// @Override
	public enterRule(listener: metricListener): void {
		if (listener.enterExponent) {
			listener.enterExponent(this);
		}
	}
	// @Override
	public exitRule(listener: metricListener): void {
		if (listener.exitExponent) {
			listener.exitExponent(this);
		}
	}
}


export class PrefixContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return metricParser.RULE_prefix; }
	// @Override
	public enterRule(listener: metricListener): void {
		if (listener.enterPrefix) {
			listener.enterPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: metricListener): void {
		if (listener.exitPrefix) {
			listener.exitPrefix(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	public baseunit(): BaseunitContext | undefined {
		return this.tryGetRuleContext(0, BaseunitContext);
	}
	public derivedunit(): DerivedunitContext | undefined {
		return this.tryGetRuleContext(0, DerivedunitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return metricParser.RULE_unit; }
	// @Override
	public enterRule(listener: metricListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: metricListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
}


export class BaseunitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return metricParser.RULE_baseunit; }
	// @Override
	public enterRule(listener: metricListener): void {
		if (listener.enterBaseunit) {
			listener.enterBaseunit(this);
		}
	}
	// @Override
	public exitRule(listener: metricListener): void {
		if (listener.exitBaseunit) {
			listener.exitBaseunit(this);
		}
	}
}


export class DerivedunitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return metricParser.RULE_derivedunit; }
	// @Override
	public enterRule(listener: metricListener): void {
		if (listener.enterDerivedunit) {
			listener.enterDerivedunit(this);
		}
	}
	// @Override
	public exitRule(listener: metricListener): void {
		if (listener.exitDerivedunit) {
			listener.exitDerivedunit(this);
		}
	}
}


