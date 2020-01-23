// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clf/clf.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { clfListener } from "./clfListener";

export class clfParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly DATE = 4;
	public static readonly TIME = 5;
	public static readonly TZ = 6;
	public static readonly LITERAL = 7;
	public static readonly IP = 8;
	public static readonly STRING = 9;
	public static readonly EOL = 10;
	public static readonly WS = 11;
	public static readonly RULE_log = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_host = 2;
	public static readonly RULE_logname = 3;
	public static readonly RULE_username = 4;
	public static readonly RULE_datetimetz = 5;
	public static readonly RULE_referer = 6;
	public static readonly RULE_request = 7;
	public static readonly RULE_useragent = 8;
	public static readonly RULE_statuscode = 9;
	public static readonly RULE_bytes = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"log", "line", "host", "logname", "username", "datetimetz", "referer", 
		"request", "useragent", "statuscode", "bytes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "':'", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "DATE", "TIME", "TZ", "LITERAL", 
		"IP", "STRING", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(clfParser._LITERAL_NAMES, clfParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return clfParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "clf.g4"; }

	// @Override
	public get ruleNames(): string[] { return clfParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return clfParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(clfParser._ATN, this);
	}
	// @RuleVersion(0)
	public log(): LogContext {
		let _localctx: LogContext = new LogContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, clfParser.RULE_log);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 23;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === clfParser.IP || _la === clfParser.STRING) {
						{
						this.state = 22;
						this.line();
						}
					}

					this.state = 25;
					this.match(clfParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 28;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clfParser.IP || _la === clfParser.STRING) {
				{
				this.state = 30;
				this.line();
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, clfParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.host();
			this.state = 34;
			this.logname();
			this.state = 35;
			this.username();
			this.state = 36;
			this.datetimetz();
			this.state = 37;
			this.request();
			this.state = 38;
			this.statuscode();
			this.state = 39;
			this.bytes();
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === clfParser.LITERAL) {
				{
				this.state = 40;
				this.referer();
				this.state = 41;
				this.useragent();
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
	public host(): HostContext {
		let _localctx: HostContext = new HostContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, clfParser.RULE_host);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			_la = this._input.LA(1);
			if (!(_la === clfParser.IP || _la === clfParser.STRING)) {
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
	public logname(): LognameContext {
		let _localctx: LognameContext = new LognameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, clfParser.RULE_logname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(clfParser.STRING);
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
	public username(): UsernameContext {
		let _localctx: UsernameContext = new UsernameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, clfParser.RULE_username);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(clfParser.STRING);
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
	public datetimetz(): DatetimetzContext {
		let _localctx: DatetimetzContext = new DatetimetzContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, clfParser.RULE_datetimetz);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(clfParser.T__0);
			this.state = 52;
			this.match(clfParser.DATE);
			this.state = 53;
			this.match(clfParser.T__1);
			this.state = 54;
			this.match(clfParser.TIME);
			this.state = 55;
			this.match(clfParser.TZ);
			this.state = 56;
			this.match(clfParser.T__2);
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
	public referer(): RefererContext {
		let _localctx: RefererContext = new RefererContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, clfParser.RULE_referer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(clfParser.LITERAL);
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
	public request(): RequestContext {
		let _localctx: RequestContext = new RequestContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, clfParser.RULE_request);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(clfParser.LITERAL);
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
	public useragent(): UseragentContext {
		let _localctx: UseragentContext = new UseragentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, clfParser.RULE_useragent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(clfParser.LITERAL);
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
	public statuscode(): StatuscodeContext {
		let _localctx: StatuscodeContext = new StatuscodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, clfParser.RULE_statuscode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(clfParser.STRING);
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
	public bytes(): BytesContext {
		let _localctx: BytesContext = new BytesContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, clfParser.RULE_bytes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(clfParser.STRING);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\rG\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x05\x02" +
		"\x1A\n\x02\x03\x02\x06\x02\x1D\n\x02\r\x02\x0E\x02\x1E\x03\x02\x05\x02" +
		"\"\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03.\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02" +
		"\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x02\x03\x03\x02\n\v\x02?\x02\x1C\x03\x02\x02\x02\x04#\x03" +
		"\x02\x02\x02\x06/\x03\x02\x02\x02\b1\x03\x02\x02\x02\n3\x03\x02\x02\x02" +
		"\f5\x03\x02\x02\x02\x0E<\x03\x02\x02\x02\x10>\x03\x02\x02\x02\x12@\x03" +
		"\x02\x02\x02\x14B\x03\x02\x02\x02\x16D\x03\x02\x02\x02\x18\x1A\x05\x04" +
		"\x03\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1B\x03\x02" +
		"\x02\x02\x1B\x1D\x07\f\x02\x02\x1C\x19\x03\x02\x02\x02\x1D\x1E\x03\x02" +
		"\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F!\x03\x02" +
		"\x02\x02 \"\x05\x04\x03\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"\x03" +
		"\x03\x02\x02\x02#$\x05\x06\x04\x02$%\x05\b\x05\x02%&\x05\n\x06\x02&\'" +
		"\x05\f\x07\x02\'(\x05\x10\t\x02()\x05\x14\v\x02)-\x05\x16\f\x02*+\x05" +
		"\x0E\b\x02+,\x05\x12\n\x02,.\x03\x02\x02\x02-*\x03\x02\x02\x02-.\x03\x02" +
		"\x02\x02.\x05\x03\x02\x02\x02/0\t\x02\x02\x020\x07\x03\x02\x02\x0212\x07" +
		"\v\x02\x022\t\x03\x02\x02\x0234\x07\v\x02\x024\v\x03\x02\x02\x0256\x07" +
		"\x03\x02\x0267\x07\x06\x02\x0278\x07\x04\x02\x0289\x07\x07\x02\x029:\x07" +
		"\b\x02\x02:;\x07\x05\x02\x02;\r\x03\x02\x02\x02<=\x07\t\x02\x02=\x0F\x03" +
		"\x02\x02\x02>?\x07\t\x02\x02?\x11\x03\x02\x02\x02@A\x07\t\x02\x02A\x13" +
		"\x03\x02\x02\x02BC\x07\v\x02\x02C\x15\x03\x02\x02\x02DE\x07\v\x02\x02" +
		"E\x17\x03\x02\x02\x02\x06\x19\x1E!-";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!clfParser.__ATN) {
			clfParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(clfParser._serializedATN));
		}

		return clfParser.__ATN;
	}

}

export class LogContext extends ParserRuleContext {
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(clfParser.EOL);
		} else {
			return this.getToken(clfParser.EOL, i);
		}
	}
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_log; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterLog) {
			listener.enterLog(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitLog) {
			listener.exitLog(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public host(): HostContext {
		return this.getRuleContext(0, HostContext);
	}
	public logname(): LognameContext {
		return this.getRuleContext(0, LognameContext);
	}
	public username(): UsernameContext {
		return this.getRuleContext(0, UsernameContext);
	}
	public datetimetz(): DatetimetzContext {
		return this.getRuleContext(0, DatetimetzContext);
	}
	public request(): RequestContext {
		return this.getRuleContext(0, RequestContext);
	}
	public statuscode(): StatuscodeContext {
		return this.getRuleContext(0, StatuscodeContext);
	}
	public bytes(): BytesContext {
		return this.getRuleContext(0, BytesContext);
	}
	public referer(): RefererContext | undefined {
		return this.tryGetRuleContext(0, RefererContext);
	}
	public useragent(): UseragentContext | undefined {
		return this.tryGetRuleContext(0, UseragentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_line; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(clfParser.STRING, 0); }
	public IP(): TerminalNode | undefined { return this.tryGetToken(clfParser.IP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_host; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterHost) {
			listener.enterHost(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitHost) {
			listener.exitHost(this);
		}
	}
}


export class LognameContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(clfParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_logname; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterLogname) {
			listener.enterLogname(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitLogname) {
			listener.exitLogname(this);
		}
	}
}


export class UsernameContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(clfParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_username; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterUsername) {
			listener.enterUsername(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitUsername) {
			listener.exitUsername(this);
		}
	}
}


export class DatetimetzContext extends ParserRuleContext {
	public DATE(): TerminalNode { return this.getToken(clfParser.DATE, 0); }
	public TIME(): TerminalNode { return this.getToken(clfParser.TIME, 0); }
	public TZ(): TerminalNode { return this.getToken(clfParser.TZ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_datetimetz; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterDatetimetz) {
			listener.enterDatetimetz(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitDatetimetz) {
			listener.exitDatetimetz(this);
		}
	}
}


export class RefererContext extends ParserRuleContext {
	public LITERAL(): TerminalNode { return this.getToken(clfParser.LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_referer; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterReferer) {
			listener.enterReferer(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitReferer) {
			listener.exitReferer(this);
		}
	}
}


export class RequestContext extends ParserRuleContext {
	public LITERAL(): TerminalNode { return this.getToken(clfParser.LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_request; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterRequest) {
			listener.enterRequest(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitRequest) {
			listener.exitRequest(this);
		}
	}
}


export class UseragentContext extends ParserRuleContext {
	public LITERAL(): TerminalNode { return this.getToken(clfParser.LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_useragent; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterUseragent) {
			listener.enterUseragent(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitUseragent) {
			listener.exitUseragent(this);
		}
	}
}


export class StatuscodeContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(clfParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_statuscode; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterStatuscode) {
			listener.enterStatuscode(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitStatuscode) {
			listener.exitStatuscode(this);
		}
	}
}


export class BytesContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(clfParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return clfParser.RULE_bytes; }
	// @Override
	public enterRule(listener: clfListener): void {
		if (listener.enterBytes) {
			listener.enterBytes(this);
		}
	}
	// @Override
	public exitRule(listener: clfListener): void {
		if (listener.exitBytes) {
			listener.exitBytes(this);
		}
	}
}


