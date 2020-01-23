// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/url/url.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { urlListener } from "./urlListener";
import { urlVisitor } from "./urlVisitor";


export class urlParser extends Parser {
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
	public static readonly DIGITS = 13;
	public static readonly HEX = 14;
	public static readonly STRING = 15;
	public static readonly WS = 16;
	public static readonly RULE_url = 0;
	public static readonly RULE_uri = 1;
	public static readonly RULE_scheme = 2;
	public static readonly RULE_host = 3;
	public static readonly RULE_hostname = 4;
	public static readonly RULE_v6host = 5;
	public static readonly RULE_port = 6;
	public static readonly RULE_path = 7;
	public static readonly RULE_user = 8;
	public static readonly RULE_login = 9;
	public static readonly RULE_password = 10;
	public static readonly RULE_frag = 11;
	public static readonly RULE_query = 12;
	public static readonly RULE_search = 13;
	public static readonly RULE_searchparameter = 14;
	public static readonly RULE_string = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"url", "uri", "scheme", "host", "hostname", "v6host", "port", "path", 
		"user", "login", "password", "frag", "query", "search", "searchparameter", 
		"string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'://'", "':'", "'/'", "'.'", "'['", "']'", "'::'", "'@'", 
		"'#'", "'?'", "'&'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "DIGITS", 
		"HEX", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(urlParser._LITERAL_NAMES, urlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return urlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "url.g4"; }

	// @Override
	public get ruleNames(): string[] { return urlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return urlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(urlParser._ATN, this);
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let _localctx: UrlContext = new UrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, urlParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.uri();
			this.state = 33;
			this.match(urlParser.EOF);
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
	public uri(): UriContext {
		let _localctx: UriContext = new UriContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, urlParser.RULE_uri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.scheme();
			this.state = 36;
			this.match(urlParser.T__0);
			this.state = 38;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 37;
				this.login();
				}
				break;
			}
			this.state = 40;
			this.host();
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__1) {
				{
				this.state = 41;
				this.match(urlParser.T__1);
				this.state = 42;
				this.port();
				}
			}

			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__2) {
				{
				this.state = 45;
				this.match(urlParser.T__2);
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === urlParser.STRING) {
					{
					this.state = 46;
					this.path();
					}
				}

				}
			}

			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__9) {
				{
				this.state = 51;
				this.query();
				}
			}

			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__8) {
				{
				this.state = 54;
				this.frag();
				}
			}

			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.WS) {
				{
				this.state = 57;
				this.match(urlParser.WS);
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
	public scheme(): SchemeContext {
		let _localctx: SchemeContext = new SchemeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, urlParser.RULE_scheme);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.string();
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
		this.enterRule(_localctx, 6, urlParser.RULE_host);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__2) {
				{
				this.state = 62;
				this.match(urlParser.T__2);
				}
			}

			this.state = 65;
			this.hostname();
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
	public hostname(): HostnameContext {
		let _localctx: HostnameContext = new HostnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, urlParser.RULE_hostname);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case urlParser.STRING:
				_localctx = new DomainNameOrIPv4HostContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.string();
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === urlParser.T__3) {
					{
					{
					this.state = 68;
					this.match(urlParser.T__3);
					this.state = 69;
					this.string();
					}
					}
					this.state = 74;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case urlParser.T__4:
				_localctx = new IPv6HostContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.match(urlParser.T__4);
				this.state = 76;
				this.v6host();
				this.state = 77;
				this.match(urlParser.T__5);
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
	public v6host(): V6hostContext {
		let _localctx: V6hostContext = new V6hostContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, urlParser.RULE_v6host);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__6) {
				{
				this.state = 81;
				this.match(urlParser.T__6);
				}
			}

			this.state = 86;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case urlParser.STRING:
				{
				this.state = 84;
				this.string();
				}
				break;
			case urlParser.DIGITS:
				{
				this.state = 85;
				this.match(urlParser.DIGITS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === urlParser.T__1 || _la === urlParser.T__6) {
				{
				{
				this.state = 88;
				_la = this._input.LA(1);
				if (!(_la === urlParser.T__1 || _la === urlParser.T__6)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 91;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case urlParser.STRING:
					{
					this.state = 89;
					this.string();
					}
					break;
				case urlParser.DIGITS:
					{
					this.state = 90;
					this.match(urlParser.DIGITS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 97;
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
	public port(): PortContext {
		let _localctx: PortContext = new PortContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, urlParser.RULE_port);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(urlParser.DIGITS);
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
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, urlParser.RULE_path);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.string();
			this.state = 105;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 101;
					this.match(urlParser.T__2);
					this.state = 102;
					this.string();
					}
					}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__2) {
				{
				this.state = 108;
				this.match(urlParser.T__2);
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
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, urlParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.string();
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
	public login(): LoginContext {
		let _localctx: LoginContext = new LoginContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, urlParser.RULE_login);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.user();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__1) {
				{
				this.state = 114;
				this.match(urlParser.T__1);
				this.state = 115;
				this.password();
				}
			}

			this.state = 118;
			this.match(urlParser.T__7);
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
	public password(): PasswordContext {
		let _localctx: PasswordContext = new PasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, urlParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.string();
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
	public frag(): FragContext {
		let _localctx: FragContext = new FragContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, urlParser.RULE_frag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(urlParser.T__8);
			this.state = 125;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case urlParser.STRING:
				{
				this.state = 123;
				this.string();
				}
				break;
			case urlParser.DIGITS:
				{
				this.state = 124;
				this.match(urlParser.DIGITS);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, urlParser.RULE_query);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(urlParser.T__9);
			this.state = 128;
			this.search();
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
	public search(): SearchContext {
		let _localctx: SearchContext = new SearchContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, urlParser.RULE_search);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.searchparameter();
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === urlParser.T__10) {
				{
				{
				this.state = 131;
				this.match(urlParser.T__10);
				this.state = 132;
				this.searchparameter();
				}
				}
				this.state = 137;
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
	public searchparameter(): SearchparameterContext {
		let _localctx: SearchparameterContext = new SearchparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, urlParser.RULE_searchparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.string();
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === urlParser.T__11) {
				{
				this.state = 139;
				this.match(urlParser.T__11);
				this.state = 143;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case urlParser.STRING:
					{
					this.state = 140;
					this.string();
					}
					break;
				case urlParser.DIGITS:
					{
					this.state = 141;
					this.match(urlParser.DIGITS);
					}
					break;
				case urlParser.HEX:
					{
					this.state = 142;
					this.match(urlParser.HEX);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, urlParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(urlParser.STRING);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12\x98\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x05\x03)\n\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03.\n\x03\x03\x03\x03\x03\x05\x032\n\x03\x05\x034\n\x03\x03\x03\x05" +
		"\x037\n\x03\x03\x03\x05\x03:\n\x03\x03\x03\x05\x03=\n\x03\x03\x04\x03" +
		"\x04\x03\x05\x05\x05B\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
		"\x06I\n\x06\f\x06\x0E\x06L\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"R\n\x06\x03\x07\x05\x07U\n\x07\x03\x07\x03\x07\x05\x07Y\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07^\n\x07\x07\x07`\n\x07\f\x07\x0E\x07c\v\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x07\tj\n\t\f\t\x0E\tm\v\t\x03\t\x05\tp\n\t" +
		"\x03\n\x03\n\x03\v\x03\v\x03\v\x05\vw\n\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x05\r\x80\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x07\x0F\x88\n\x0F\f\x0F\x0E\x0F\x8B\v\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\x92\n\x10\x05\x10\x94\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x02\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\x02\x03\x04\x02\x04\x04\t\t\x02\x9D\x02\"\x03\x02\x02\x02\x04%\x03\x02" +
		"\x02\x02\x06>\x03\x02\x02\x02\bA\x03\x02\x02\x02\nQ\x03\x02\x02\x02\f" +
		"T\x03\x02\x02\x02\x0Ed\x03\x02\x02\x02\x10f\x03\x02\x02\x02\x12q\x03\x02" +
		"\x02\x02\x14s\x03\x02\x02\x02\x16z\x03\x02\x02\x02\x18|\x03\x02\x02\x02" +
		"\x1A\x81\x03\x02\x02\x02\x1C\x84\x03\x02\x02\x02\x1E\x8C\x03\x02\x02\x02" +
		" \x95\x03\x02\x02\x02\"#\x05\x04\x03\x02#$\x07\x02\x02\x03$\x03\x03\x02" +
		"\x02\x02%&\x05\x06\x04\x02&(\x07\x03\x02\x02\')\x05\x14\v\x02(\'\x03\x02" +
		"\x02\x02()\x03\x02\x02\x02)*\x03\x02\x02\x02*-\x05\b\x05\x02+,\x07\x04" +
		"\x02\x02,.\x05\x0E\b\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.3\x03\x02" +
		"\x02\x02/1\x07\x05\x02\x0202\x05\x10\t\x0210\x03\x02\x02\x0212\x03\x02" +
		"\x02\x0224\x03\x02\x02\x023/\x03\x02\x02\x0234\x03\x02\x02\x0246\x03\x02" +
		"\x02\x0257\x05\x1A\x0E\x0265\x03\x02\x02\x0267\x03\x02\x02\x0279\x03\x02" +
		"\x02\x028:\x05\x18\r\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:<\x03\x02" +
		"\x02\x02;=\x07\x12\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02=\x05\x03" +
		"\x02\x02\x02>?\x05 \x11\x02?\x07\x03\x02\x02\x02@B\x07\x05\x02\x02A@\x03" +
		"\x02\x02\x02AB\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x05\n\x06\x02D\t\x03" +
		"\x02\x02\x02EJ\x05 \x11\x02FG\x07\x06\x02\x02GI\x05 \x11\x02HF\x03\x02" +
		"\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KR\x03\x02" +
		"\x02\x02LJ\x03\x02\x02\x02MN\x07\x07\x02\x02NO\x05\f\x07\x02OP\x07\b\x02" +
		"\x02PR\x03\x02\x02\x02QE\x03\x02\x02\x02QM\x03\x02\x02\x02R\v\x03\x02" +
		"\x02\x02SU\x07\t\x02\x02TS\x03\x02\x02\x02TU\x03\x02\x02\x02UX\x03\x02" +
		"\x02\x02VY\x05 \x11\x02WY\x07\x0F\x02\x02XV\x03\x02\x02\x02XW\x03\x02" +
		"\x02\x02Ya\x03\x02\x02\x02Z]\t\x02\x02\x02[^\x05 \x11\x02\\^\x07\x0F\x02" +
		"\x02][\x03\x02\x02\x02]\\\x03\x02\x02\x02^`\x03\x02\x02\x02_Z\x03\x02" +
		"\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\r\x03" +
		"\x02\x02\x02ca\x03\x02\x02\x02de\x07\x0F\x02\x02e\x0F\x03\x02\x02\x02" +
		"fk\x05 \x11\x02gh\x07\x05\x02\x02hj\x05 \x11\x02ig\x03\x02\x02\x02jm\x03" +
		"\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03" +
		"\x02\x02\x02np\x07\x05\x02\x02on\x03\x02\x02\x02op\x03\x02\x02\x02p\x11" +
		"\x03\x02\x02\x02qr\x05 \x11\x02r\x13\x03\x02\x02\x02sv\x05\x12\n\x02t" +
		"u\x07\x04\x02\x02uw\x05\x16\f\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wx\x03\x02\x02\x02xy\x07\n\x02\x02y\x15\x03\x02\x02\x02z{\x05 \x11\x02" +
		"{\x17\x03\x02\x02\x02|\x7F\x07\v\x02\x02}\x80\x05 \x11\x02~\x80\x07\x0F" +
		"\x02\x02\x7F}\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\x19\x03\x02\x02" +
		"\x02\x81\x82\x07\f\x02\x02\x82\x83\x05\x1C\x0F\x02\x83\x1B\x03\x02\x02" +
		"\x02\x84\x89\x05\x1E\x10\x02\x85\x86\x07\r\x02\x02\x86\x88\x05\x1E\x10" +
		"\x02\x87\x85\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02" +
		"\x02\x89\x8A\x03\x02\x02\x02\x8A\x1D\x03\x02\x02\x02\x8B\x89\x03\x02\x02" +
		"\x02\x8C\x93\x05 \x11\x02\x8D\x91\x07\x0E\x02\x02\x8E\x92\x05 \x11\x02" +
		"\x8F\x92\x07\x0F\x02\x02\x90\x92\x07\x10\x02\x02\x91\x8E\x03\x02\x02\x02" +
		"\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92\x94\x03\x02\x02\x02" +
		"\x93\x8D\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x1F\x03\x02\x02\x02" +
		"\x95\x96\x07\x11\x02\x02\x96!\x03\x02\x02\x02\x17(-1369<AJQTX]akov\x7F" +
		"\x89\x91\x93";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!urlParser.__ATN) {
			urlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(urlParser._serializedATN));
		}

		return urlParser.__ATN;
	}

}

export class UrlContext extends ParserRuleContext {
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	public EOF(): TerminalNode { return this.getToken(urlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_url; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitUrl) {
			return visitor.visitUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UriContext extends ParserRuleContext {
	public scheme(): SchemeContext {
		return this.getRuleContext(0, SchemeContext);
	}
	public host(): HostContext {
		return this.getRuleContext(0, HostContext);
	}
	public login(): LoginContext | undefined {
		return this.tryGetRuleContext(0, LoginContext);
	}
	public port(): PortContext | undefined {
		return this.tryGetRuleContext(0, PortContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public frag(): FragContext | undefined {
		return this.tryGetRuleContext(0, FragContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(urlParser.WS, 0); }
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_uri; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterUri) {
			listener.enterUri(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitUri) {
			listener.exitUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitUri) {
			return visitor.visitUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemeContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_scheme; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterScheme) {
			listener.enterScheme(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitScheme) {
			listener.exitScheme(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitScheme) {
			return visitor.visitScheme(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	public hostname(): HostnameContext {
		return this.getRuleContext(0, HostnameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_host; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterHost) {
			listener.enterHost(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitHost) {
			listener.exitHost(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitHost) {
			return visitor.visitHost(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HostnameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_hostname; }
	public copyFrom(ctx: HostnameContext): void {
		super.copyFrom(ctx);
	}
}
export class DomainNameOrIPv4HostContext extends HostnameContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(ctx: HostnameContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterDomainNameOrIPv4Host) {
			listener.enterDomainNameOrIPv4Host(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitDomainNameOrIPv4Host) {
			listener.exitDomainNameOrIPv4Host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitDomainNameOrIPv4Host) {
			return visitor.visitDomainNameOrIPv4Host(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IPv6HostContext extends HostnameContext {
	public v6host(): V6hostContext {
		return this.getRuleContext(0, V6hostContext);
	}
	constructor(ctx: HostnameContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterIPv6Host) {
			listener.enterIPv6Host(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitIPv6Host) {
			listener.exitIPv6Host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitIPv6Host) {
			return visitor.visitIPv6Host(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class V6hostContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public DIGITS(): TerminalNode[];
	public DIGITS(i: number): TerminalNode;
	public DIGITS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(urlParser.DIGITS);
		} else {
			return this.getToken(urlParser.DIGITS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_v6host; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterV6host) {
			listener.enterV6host(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitV6host) {
			listener.exitV6host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitV6host) {
			return visitor.visitV6host(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	public DIGITS(): TerminalNode { return this.getToken(urlParser.DIGITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_port; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterPort) {
			listener.enterPort(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitPort) {
			listener.exitPort(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitPort) {
			return visitor.visitPort(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_path; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_user; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterUser) {
			listener.enterUser(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitUser) {
			listener.exitUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitUser) {
			return visitor.visitUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoginContext extends ParserRuleContext {
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public password(): PasswordContext | undefined {
		return this.tryGetRuleContext(0, PasswordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_login; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterLogin) {
			listener.enterLogin(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitLogin) {
			listener.exitLogin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitLogin) {
			return visitor.visitLogin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PasswordContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_password; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterPassword) {
			listener.enterPassword(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitPassword) {
			listener.exitPassword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitPassword) {
			return visitor.visitPassword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FragContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public DIGITS(): TerminalNode | undefined { return this.tryGetToken(urlParser.DIGITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_frag; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterFrag) {
			listener.enterFrag(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitFrag) {
			listener.exitFrag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitFrag) {
			return visitor.visitFrag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public search(): SearchContext {
		return this.getRuleContext(0, SearchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_query; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchContext extends ParserRuleContext {
	public searchparameter(): SearchparameterContext[];
	public searchparameter(i: number): SearchparameterContext;
	public searchparameter(i?: number): SearchparameterContext | SearchparameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SearchparameterContext);
		} else {
			return this.getRuleContext(i, SearchparameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_search; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterSearch) {
			listener.enterSearch(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitSearch) {
			listener.exitSearch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitSearch) {
			return visitor.visitSearch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchparameterContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public DIGITS(): TerminalNode | undefined { return this.tryGetToken(urlParser.DIGITS, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(urlParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_searchparameter; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterSearchparameter) {
			listener.enterSearchparameter(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitSearchparameter) {
			listener.exitSearchparameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitSearchparameter) {
			return visitor.visitSearchparameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(urlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return urlParser.RULE_string; }
	// @Override
	public enterRule(listener: urlListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: urlListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: urlVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


