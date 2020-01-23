// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/databank/databank.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { databankListener } from "./databankListener";
import { databankVisitor } from "./databankVisitor";


export class databankParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly FLOATINGPOINT = 5;
	public static readonly COMMENT = 6;
	public static readonly EOL = 7;
	public static readonly WS = 8;
	public static readonly RULE_databank = 0;
	public static readonly RULE_datedseries = 1;
	public static readonly RULE_undatedseries = 2;
	public static readonly RULE_datatype = 3;
	public static readonly RULE_dateline = 4;
	public static readonly RULE_sample = 5;
	public static readonly RULE_number = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"databank", "datedseries", "undatedseries", "datatype", "dateline", "sample", 
		"number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'-1'", "'-4'", "'-12'", "'NA'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "FLOATINGPOINT", 
		"COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(databankParser._LITERAL_NAMES, databankParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return databankParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "databank.g4"; }

	// @Override
	public get ruleNames(): string[] { return databankParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return databankParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(databankParser._ATN, this);
	}
	// @RuleVersion(0)
	public databank(): DatabankContext {
		let _localctx: DatabankContext = new DatabankContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, databankParser.RULE_databank);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === databankParser.EOL) {
				{
				{
				this.state = 14;
				this.match(databankParser.EOL);
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case databankParser.T__0:
			case databankParser.T__1:
			case databankParser.T__2:
				{
				this.state = 20;
				this.datedseries();
				}
				break;
			case databankParser.FLOATINGPOINT:
				{
				this.state = 21;
				this.undatedseries();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 24;
				this.sample();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === databankParser.T__3 || _la === databankParser.FLOATINGPOINT);
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
	public datedseries(): DatedseriesContext {
		let _localctx: DatedseriesContext = new DatedseriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, databankParser.RULE_datedseries);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.datatype();
			this.state = 30;
			this.dateline();
			this.state = 31;
			this.dateline();
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
	public undatedseries(): UndatedseriesContext {
		let _localctx: UndatedseriesContext = new UndatedseriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, databankParser.RULE_undatedseries);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.dateline();
			this.state = 34;
			this.dateline();
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
	public datatype(): DatatypeContext {
		let _localctx: DatatypeContext = new DatatypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, databankParser.RULE_datatype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << databankParser.T__0) | (1 << databankParser.T__1) | (1 << databankParser.T__2))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 37;
			this.match(databankParser.EOL);
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
	public dateline(): DatelineContext {
		let _localctx: DatelineContext = new DatelineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, databankParser.RULE_dateline);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.number();
			this.state = 40;
			this.match(databankParser.EOL);
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
	public sample(): SampleContext {
		let _localctx: SampleContext = new SampleContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, databankParser.RULE_sample);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case databankParser.FLOATINGPOINT:
				{
				this.state = 42;
				this.number();
				}
				break;
			case databankParser.T__3:
				{
				this.state = 43;
				this.match(databankParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === databankParser.EOL) {
				{
				this.state = 46;
				this.match(databankParser.EOL);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, databankParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(databankParser.FLOATINGPOINT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n6\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03\x02" +
		"\x03\x02\x05\x02\x19\n\x02\x03\x02\x06\x02\x1C\n\x02\r\x02\x0E\x02\x1D" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07/\n\x07\x03\x07" +
		"\x05\x072\n\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x02\x03\x03\x02\x03\x05\x023\x02\x13\x03\x02" +
		"\x02\x02\x04\x1F\x03\x02\x02\x02\x06#\x03\x02\x02\x02\b&\x03\x02\x02\x02" +
		"\n)\x03\x02\x02\x02\f.\x03\x02\x02\x02\x0E3\x03\x02\x02\x02\x10\x12\x07" +
		"\t\x02\x02\x11\x10\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03" +
		"\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x18\x03\x02\x02\x02\x15\x13\x03" +
		"\x02\x02\x02\x16\x19\x05\x04\x03\x02\x17\x19\x05\x06\x04\x02\x18\x16\x03" +
		"\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x1C\x05" +
		"\f\x07\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1B\x03" +
		"\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x03\x03\x02\x02\x02\x1F \x05" +
		"\b\x05\x02 !\x05\n\x06\x02!\"\x05\n\x06\x02\"\x05\x03\x02\x02\x02#$\x05" +
		"\n\x06\x02$%\x05\n\x06\x02%\x07\x03\x02\x02\x02&\'\t\x02\x02\x02\'(\x07" +
		"\t\x02\x02(\t\x03\x02\x02\x02)*\x05\x0E\b\x02*+\x07\t\x02\x02+\v\x03\x02" +
		"\x02\x02,/\x05\x0E\b\x02-/\x07\x06\x02\x02.,\x03\x02\x02\x02.-\x03\x02" +
		"\x02\x02/1\x03\x02\x02\x0202\x07\t\x02\x0210\x03\x02\x02\x0212\x03\x02" +
		"\x02\x022\r\x03\x02\x02\x0234\x07\x07\x02\x024\x0F\x03\x02\x02\x02\x07" +
		"\x13\x18\x1D.1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!databankParser.__ATN) {
			databankParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(databankParser._serializedATN));
		}

		return databankParser.__ATN;
	}

}

export class DatabankContext extends ParserRuleContext {
	public datedseries(): DatedseriesContext | undefined {
		return this.tryGetRuleContext(0, DatedseriesContext);
	}
	public undatedseries(): UndatedseriesContext | undefined {
		return this.tryGetRuleContext(0, UndatedseriesContext);
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(databankParser.EOL);
		} else {
			return this.getToken(databankParser.EOL, i);
		}
	}
	public sample(): SampleContext[];
	public sample(i: number): SampleContext;
	public sample(i?: number): SampleContext | SampleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SampleContext);
		} else {
			return this.getRuleContext(i, SampleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return databankParser.RULE_databank; }
	// @Override
	public enterRule(listener: databankListener): void {
		if (listener.enterDatabank) {
			listener.enterDatabank(this);
		}
	}
	// @Override
	public exitRule(listener: databankListener): void {
		if (listener.exitDatabank) {
			listener.exitDatabank(this);
		}
	}
	// @Override
	public accept<Result>(visitor: databankVisitor<Result>): Result {
		if (visitor.visitDatabank) {
			return visitor.visitDatabank(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatedseriesContext extends ParserRuleContext {
	public datatype(): DatatypeContext {
		return this.getRuleContext(0, DatatypeContext);
	}
	public dateline(): DatelineContext[];
	public dateline(i: number): DatelineContext;
	public dateline(i?: number): DatelineContext | DatelineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DatelineContext);
		} else {
			return this.getRuleContext(i, DatelineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return databankParser.RULE_datedseries; }
	// @Override
	public enterRule(listener: databankListener): void {
		if (listener.enterDatedseries) {
			listener.enterDatedseries(this);
		}
	}
	// @Override
	public exitRule(listener: databankListener): void {
		if (listener.exitDatedseries) {
			listener.exitDatedseries(this);
		}
	}
	// @Override
	public accept<Result>(visitor: databankVisitor<Result>): Result {
		if (visitor.visitDatedseries) {
			return visitor.visitDatedseries(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UndatedseriesContext extends ParserRuleContext {
	public dateline(): DatelineContext[];
	public dateline(i: number): DatelineContext;
	public dateline(i?: number): DatelineContext | DatelineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DatelineContext);
		} else {
			return this.getRuleContext(i, DatelineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return databankParser.RULE_undatedseries; }
	// @Override
	public enterRule(listener: databankListener): void {
		if (listener.enterUndatedseries) {
			listener.enterUndatedseries(this);
		}
	}
	// @Override
	public exitRule(listener: databankListener): void {
		if (listener.exitUndatedseries) {
			listener.exitUndatedseries(this);
		}
	}
	// @Override
	public accept<Result>(visitor: databankVisitor<Result>): Result {
		if (visitor.visitUndatedseries) {
			return visitor.visitUndatedseries(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatatypeContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(databankParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return databankParser.RULE_datatype; }
	// @Override
	public enterRule(listener: databankListener): void {
		if (listener.enterDatatype) {
			listener.enterDatatype(this);
		}
	}
	// @Override
	public exitRule(listener: databankListener): void {
		if (listener.exitDatatype) {
			listener.exitDatatype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: databankVisitor<Result>): Result {
		if (visitor.visitDatatype) {
			return visitor.visitDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatelineContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public EOL(): TerminalNode { return this.getToken(databankParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return databankParser.RULE_dateline; }
	// @Override
	public enterRule(listener: databankListener): void {
		if (listener.enterDateline) {
			listener.enterDateline(this);
		}
	}
	// @Override
	public exitRule(listener: databankListener): void {
		if (listener.exitDateline) {
			listener.exitDateline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: databankVisitor<Result>): Result {
		if (visitor.visitDateline) {
			return visitor.visitDateline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public EOL(): TerminalNode | undefined { return this.tryGetToken(databankParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return databankParser.RULE_sample; }
	// @Override
	public enterRule(listener: databankListener): void {
		if (listener.enterSample) {
			listener.enterSample(this);
		}
	}
	// @Override
	public exitRule(listener: databankListener): void {
		if (listener.exitSample) {
			listener.exitSample(this);
		}
	}
	// @Override
	public accept<Result>(visitor: databankVisitor<Result>): Result {
		if (visitor.visitSample) {
			return visitor.visitSample(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public FLOATINGPOINT(): TerminalNode { return this.getToken(databankParser.FLOATINGPOINT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return databankParser.RULE_number; }
	// @Override
	public enterRule(listener: databankListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: databankListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: databankVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


