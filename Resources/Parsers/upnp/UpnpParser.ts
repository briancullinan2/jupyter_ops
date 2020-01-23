// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/upnp/Upnp.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { UpnpListener } from "./UpnpListener";

export class UpnpParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly NUMBER = 3;
	public static readonly WHITESPACE = 4;
	public static readonly LOGOP = 5;
	public static readonly BINOP = 6;
	public static readonly RELOP = 7;
	public static readonly STRINGOP = 8;
	public static readonly EXISTSOP = 9;
	public static readonly BOOLVAL = 10;
	public static readonly WCHAR = 11;
	public static readonly PROPERTY = 12;
	public static readonly HTAB = 13;
	public static readonly SPACE = 14;
	public static readonly DQUOTE = 15;
	public static readonly ASTERISK = 16;
	public static readonly STRING_LITERAL = 17;
	public static readonly RULE_searchCrit = 0;
	public static readonly RULE_searchExp = 1;
	public static readonly RULE_relExp = 2;
	public static readonly RULE_quotedVal = 3;
	public static readonly RULE_escapedQuote = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"searchCrit", "searchExp", "relExp", "quotedVal", "escapedQuote",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", undefined, undefined, undefined, undefined, undefined, 
		undefined, "'exists'", undefined, undefined, undefined, "'\t'", "' '", 
		"'\"'", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "NUMBER", "WHITESPACE", "LOGOP", "BINOP", 
		"RELOP", "STRINGOP", "EXISTSOP", "BOOLVAL", "WCHAR", "PROPERTY", "HTAB", 
		"SPACE", "DQUOTE", "ASTERISK", "STRING_LITERAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UpnpParser._LITERAL_NAMES, UpnpParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UpnpParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Upnp.g4"; }

	// @Override
	public get ruleNames(): string[] { return UpnpParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return UpnpParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(UpnpParser._ATN, this);
	}
	// @RuleVersion(0)
	public searchCrit(): SearchCritContext {
		let _localctx: SearchCritContext = new SearchCritContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, UpnpParser.RULE_searchCrit);
		try {
			this.state = 12;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UpnpParser.T__0:
			case UpnpParser.PROPERTY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 10;
				this.searchExp(0);
				}
				break;
			case UpnpParser.ASTERISK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.match(UpnpParser.ASTERISK);
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

	public searchExp(): SearchExpContext;
	public searchExp(_p: number): SearchExpContext;
	// @RuleVersion(0)
	public searchExp(_p?: number): SearchExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SearchExpContext = new SearchExpContext(this._ctx, _parentState);
		let _prevctx: SearchExpContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, UpnpParser.RULE_searchExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UpnpParser.PROPERTY:
				{
				this.state = 15;
				this.relExp();
				}
				break;
			case UpnpParser.T__0:
				{
				this.state = 16;
				this.match(UpnpParser.T__0);
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UpnpParser.WCHAR) {
					{
					{
					this.state = 17;
					this.match(UpnpParser.WCHAR);
					}
					}
					this.state = 22;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 23;
				this.searchExp(0);
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UpnpParser.WCHAR) {
					{
					{
					this.state = 24;
					this.match(UpnpParser.WCHAR);
					}
					}
					this.state = 29;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 30;
				this.match(UpnpParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new SearchExpContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, UpnpParser.RULE_searchExp);
					this.state = 34;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 36;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 35;
						this.match(UpnpParser.WCHAR);
						}
						}
						this.state = 38;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === UpnpParser.WCHAR);
					this.state = 40;
					this.match(UpnpParser.LOGOP);
					this.state = 42;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 41;
						this.match(UpnpParser.WCHAR);
						}
						}
						this.state = 44;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === UpnpParser.WCHAR);
					this.state = 46;
					this.searchExp(3);
					}
					}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
	public relExp(): RelExpContext {
		let _localctx: RelExpContext = new RelExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, UpnpParser.RULE_relExp);
		let _la: number;
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(UpnpParser.PROPERTY);
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 53;
					this.match(UpnpParser.WCHAR);
					}
					}
					this.state = 56;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UpnpParser.WCHAR);
				this.state = 58;
				this.match(UpnpParser.BINOP);
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 59;
					this.match(UpnpParser.WCHAR);
					}
					}
					this.state = 62;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UpnpParser.WCHAR);
				this.state = 64;
				this.quotedVal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.match(UpnpParser.PROPERTY);
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 66;
					this.match(UpnpParser.WCHAR);
					}
					}
					this.state = 69;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UpnpParser.WCHAR);
				this.state = 71;
				this.match(UpnpParser.EXISTSOP);
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 72;
					this.match(UpnpParser.WCHAR);
					}
					}
					this.state = 75;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UpnpParser.WCHAR);
				this.state = 77;
				this.match(UpnpParser.BOOLVAL);
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
	public quotedVal(): QuotedValContext {
		let _localctx: QuotedValContext = new QuotedValContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, UpnpParser.RULE_quotedVal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(UpnpParser.DQUOTE);
			this.state = 81;
			this.escapedQuote();
			this.state = 82;
			this.match(UpnpParser.DQUOTE);
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
	public escapedQuote(): EscapedQuoteContext {
		let _localctx: EscapedQuoteContext = new EscapedQuoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, UpnpParser.RULE_escapedQuote);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 84;
					this.match(UpnpParser.STRING_LITERAL);
					}
					}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UpnpParser.WCHAR) {
				{
				{
				this.state = 90;
				this.match(UpnpParser.WCHAR);
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UpnpParser.STRING_LITERAL) {
				{
				{
				this.state = 96;
				this.match(UpnpParser.STRING_LITERAL);
				}
				}
				this.state = 101;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.searchExp_sempred(_localctx as SearchExpContext, predIndex);
		}
		return true;
	}
	private searchExp_sempred(_localctx: SearchExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13i\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x15" +
		"\n\x03\f\x03\x0E\x03\x18\v\x03\x03\x03\x03\x03\x07\x03\x1C\n\x03\f\x03" +
		"\x0E\x03\x1F\v\x03\x03\x03\x03\x03\x05\x03#\n\x03\x03\x03\x03\x03\x06" +
		"\x03\'\n\x03\r\x03\x0E\x03(\x03\x03\x03\x03\x06\x03-\n\x03\r\x03\x0E\x03" +
		".\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03\x04\x03\x04\x06\x04" +
		"9\n\x04\r\x04\x0E\x04:\x03\x04\x03\x04\x06\x04?\n\x04\r\x04\x0E\x04@\x03" +
		"\x04\x03\x04\x03\x04\x06\x04F\n\x04\r\x04\x0E\x04G\x03\x04\x03\x04\x06" +
		"\x04L\n\x04\r\x04\x0E\x04M\x03\x04\x05\x04Q\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x07\x06X\n\x06\f\x06\x0E\x06[\v\x06\x03\x06\x07\x06" +
		"^\n\x06\f\x06\x0E\x06a\v\x06\x03\x06\x07\x06d\n\x06\f\x06\x0E\x06g\v\x06" +
		"\x03\x06\x02\x02\x03\x04\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02" +
		"\x02r\x02\x0E\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06P\x03\x02\x02\x02" +
		"\bR\x03\x02\x02\x02\nY\x03\x02\x02\x02\f\x0F\x05\x04\x03\x02\r\x0F\x07" +
		"\x12\x02\x02\x0E\f\x03\x02\x02\x02\x0E\r\x03\x02\x02\x02\x0F\x03\x03\x02" +
		"\x02\x02\x10\x11\b\x03\x01\x02\x11#\x05\x06\x04\x02\x12\x16\x07\x03\x02" +
		"\x02\x13\x15\x07\r\x02\x02\x14\x13\x03\x02\x02\x02\x15\x18\x03\x02\x02" +
		"\x02\x16\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x19\x03\x02\x02" +
		"\x02\x18\x16\x03\x02\x02\x02\x19\x1D\x05\x04\x03\x02\x1A\x1C\x07\r\x02" +
		"\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02" +
		"\x02\x1D\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02" +
		"\x02 !\x07\x04\x02\x02!#\x03\x02\x02\x02\"\x10\x03\x02\x02\x02\"\x12\x03" +
		"\x02\x02\x02#3\x03\x02\x02\x02$&\f\x04\x02\x02%\'\x07\r\x02\x02&%\x03" +
		"\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)*" +
		"\x03\x02\x02\x02*,\x07\x07\x02\x02+-\x07\r\x02\x02,+\x03\x02\x02\x02-" +
		".\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/0\x03\x02\x02\x02" +
		"02\x05\x04\x03\x051$\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x02" +
		"34\x03\x02\x02\x024\x05\x03\x02\x02\x0253\x03\x02\x02\x0268\x07\x0E\x02" +
		"\x0279\x07\r\x02\x0287\x03\x02\x02\x029:\x03\x02\x02\x02:8\x03\x02\x02" +
		"\x02:;\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x07\b\x02\x02=?\x07\r\x02\x02" +
		">=\x03\x02\x02\x02?@\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02" +
		"AB\x03\x02\x02\x02BQ\x05\b\x05\x02CE\x07\x0E\x02\x02DF\x07\r\x02\x02E" +
		"D\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02" +
		"HI\x03\x02\x02\x02IK\x07\v\x02\x02JL\x07\r\x02\x02KJ\x03\x02\x02\x02L" +
		"M\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x03\x02\x02\x02" +
		"OQ\x07\f\x02\x02P6\x03\x02\x02\x02PC\x03\x02\x02\x02Q\x07\x03\x02\x02" +
		"\x02RS\x07\x11\x02\x02ST\x05\n\x06\x02TU\x07\x11\x02\x02U\t\x03\x02\x02" +
		"\x02VX\x07\x13\x02\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02" +
		"\x02YZ\x03\x02\x02\x02Z_\x03\x02\x02\x02[Y\x03\x02\x02\x02\\^\x07\r\x02" +
		"\x02]\\\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02" +
		"\x02\x02`e\x03\x02\x02\x02a_\x03\x02\x02\x02bd\x07\x13\x02\x02cb\x03\x02" +
		"\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\v\x03" +
		"\x02\x02\x02ge\x03\x02\x02\x02\x11\x0E\x16\x1D\"(.3:@GMPY_e";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UpnpParser.__ATN) {
			UpnpParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UpnpParser._serializedATN));
		}

		return UpnpParser.__ATN;
	}

}

export class SearchCritContext extends ParserRuleContext {
	public searchExp(): SearchExpContext | undefined {
		return this.tryGetRuleContext(0, SearchExpContext);
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(UpnpParser.ASTERISK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UpnpParser.RULE_searchCrit; }
	// @Override
	public enterRule(listener: UpnpListener): void {
		if (listener.enterSearchCrit) {
			listener.enterSearchCrit(this);
		}
	}
	// @Override
	public exitRule(listener: UpnpListener): void {
		if (listener.exitSearchCrit) {
			listener.exitSearchCrit(this);
		}
	}
}


export class SearchExpContext extends ParserRuleContext {
	public relExp(): RelExpContext | undefined {
		return this.tryGetRuleContext(0, RelExpContext);
	}
	public searchExp(): SearchExpContext[];
	public searchExp(i: number): SearchExpContext;
	public searchExp(i?: number): SearchExpContext | SearchExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SearchExpContext);
		} else {
			return this.getRuleContext(i, SearchExpContext);
		}
	}
	public LOGOP(): TerminalNode | undefined { return this.tryGetToken(UpnpParser.LOGOP, 0); }
	public WCHAR(): TerminalNode[];
	public WCHAR(i: number): TerminalNode;
	public WCHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UpnpParser.WCHAR);
		} else {
			return this.getToken(UpnpParser.WCHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UpnpParser.RULE_searchExp; }
	// @Override
	public enterRule(listener: UpnpListener): void {
		if (listener.enterSearchExp) {
			listener.enterSearchExp(this);
		}
	}
	// @Override
	public exitRule(listener: UpnpListener): void {
		if (listener.exitSearchExp) {
			listener.exitSearchExp(this);
		}
	}
}


export class RelExpContext extends ParserRuleContext {
	public PROPERTY(): TerminalNode { return this.getToken(UpnpParser.PROPERTY, 0); }
	public BINOP(): TerminalNode | undefined { return this.tryGetToken(UpnpParser.BINOP, 0); }
	public quotedVal(): QuotedValContext | undefined {
		return this.tryGetRuleContext(0, QuotedValContext);
	}
	public WCHAR(): TerminalNode[];
	public WCHAR(i: number): TerminalNode;
	public WCHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UpnpParser.WCHAR);
		} else {
			return this.getToken(UpnpParser.WCHAR, i);
		}
	}
	public EXISTSOP(): TerminalNode | undefined { return this.tryGetToken(UpnpParser.EXISTSOP, 0); }
	public BOOLVAL(): TerminalNode | undefined { return this.tryGetToken(UpnpParser.BOOLVAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UpnpParser.RULE_relExp; }
	// @Override
	public enterRule(listener: UpnpListener): void {
		if (listener.enterRelExp) {
			listener.enterRelExp(this);
		}
	}
	// @Override
	public exitRule(listener: UpnpListener): void {
		if (listener.exitRelExp) {
			listener.exitRelExp(this);
		}
	}
}


export class QuotedValContext extends ParserRuleContext {
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UpnpParser.DQUOTE);
		} else {
			return this.getToken(UpnpParser.DQUOTE, i);
		}
	}
	public escapedQuote(): EscapedQuoteContext {
		return this.getRuleContext(0, EscapedQuoteContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UpnpParser.RULE_quotedVal; }
	// @Override
	public enterRule(listener: UpnpListener): void {
		if (listener.enterQuotedVal) {
			listener.enterQuotedVal(this);
		}
	}
	// @Override
	public exitRule(listener: UpnpListener): void {
		if (listener.exitQuotedVal) {
			listener.exitQuotedVal(this);
		}
	}
}


export class EscapedQuoteContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode[];
	public STRING_LITERAL(i: number): TerminalNode;
	public STRING_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UpnpParser.STRING_LITERAL);
		} else {
			return this.getToken(UpnpParser.STRING_LITERAL, i);
		}
	}
	public WCHAR(): TerminalNode[];
	public WCHAR(i: number): TerminalNode;
	public WCHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UpnpParser.WCHAR);
		} else {
			return this.getToken(UpnpParser.WCHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UpnpParser.RULE_escapedQuote; }
	// @Override
	public enterRule(listener: UpnpListener): void {
		if (listener.enterEscapedQuote) {
			listener.enterEscapedQuote(this);
		}
	}
	// @Override
	public exitRule(listener: UpnpListener): void {
		if (listener.exitEscapedQuote) {
			listener.exitEscapedQuote(this);
		}
	}
}


