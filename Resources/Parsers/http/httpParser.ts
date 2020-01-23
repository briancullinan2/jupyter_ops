// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/http/http.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { httpListener } from "./httpListener";

export class httpParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly SP = 10;
	public static readonly ALPHA = 11;
	public static readonly DIGIT = 12;
	public static readonly Pct_encoded = 13;
	public static readonly HEXDIG = 14;
	public static readonly LColumn = 15;
	public static readonly RColumn = 16;
	public static readonly SemiColon = 17;
	public static readonly Equals = 18;
	public static readonly Period = 19;
	public static readonly CRLF = 20;
	public static readonly Minus = 21;
	public static readonly Dot = 22;
	public static readonly Underscore = 23;
	public static readonly Tilde = 24;
	public static readonly QuestionMark = 25;
	public static readonly Slash = 26;
	public static readonly ExclamationMark = 27;
	public static readonly Colon = 28;
	public static readonly At = 29;
	public static readonly DollarSign = 30;
	public static readonly Hashtag = 31;
	public static readonly Ampersand = 32;
	public static readonly Percent = 33;
	public static readonly SQuote = 34;
	public static readonly Star = 35;
	public static readonly Plus = 36;
	public static readonly Caret = 37;
	public static readonly BackQuote = 38;
	public static readonly VBar = 39;
	public static readonly OWS = 40;
	public static readonly HTAB = 41;
	public static readonly VCHAR = 42;
	public static readonly OBS_TEXT = 43;
	public static readonly RULE_http_message = 0;
	public static readonly RULE_start_line = 1;
	public static readonly RULE_request_line = 2;
	public static readonly RULE_method = 3;
	public static readonly RULE_request_target = 4;
	public static readonly RULE_origin_form = 5;
	public static readonly RULE_absolute_path = 6;
	public static readonly RULE_segment = 7;
	public static readonly RULE_query = 8;
	public static readonly RULE_http_version = 9;
	public static readonly RULE_http_name = 10;
	public static readonly RULE_header_field = 11;
	public static readonly RULE_field_name = 12;
	public static readonly RULE_token = 13;
	public static readonly RULE_field_value = 14;
	public static readonly RULE_field_content = 15;
	public static readonly RULE_field_vchar = 16;
	public static readonly RULE_obs_text = 17;
	public static readonly RULE_obs_fold = 18;
	public static readonly RULE_pchar = 19;
	public static readonly RULE_unreserved = 20;
	public static readonly RULE_sub_delims = 21;
	public static readonly RULE_tchar = 22;
	public static readonly RULE_vCHAR = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"http_message", "start_line", "request_line", "method", "request_target", 
		"origin_form", "absolute_path", "segment", "query", "http_version", "http_name", 
		"header_field", "field_name", "token", "field_value", "field_content", 
		"field_vchar", "obs_text", "obs_fold", "pchar", "unreserved", "sub_delims", 
		"tchar", "vCHAR",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'GET'", "'HEAD'", "'POST'", "'PUT'", "'DELETE'", "'CONNECT'", 
		"'OPTIONS'", "'TRACE'", "'HTTP/'", "' '", undefined, undefined, undefined, 
		undefined, "'('", "')'", "';'", "'='", "','", "'\n'", "'-'", "'.'", "'_'", 
		"'~'", "'?'", "'/'", "'!'", "':'", "'@'", "'$'", "'#'", "'&'", "'%'", 
		"'''", "'*'", "'+'", "'^'", "'`'", "'|'", undefined, "'\t'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "SP", "ALPHA", "DIGIT", "Pct_encoded", 
		"HEXDIG", "LColumn", "RColumn", "SemiColon", "Equals", "Period", "CRLF", 
		"Minus", "Dot", "Underscore", "Tilde", "QuestionMark", "Slash", "ExclamationMark", 
		"Colon", "At", "DollarSign", "Hashtag", "Ampersand", "Percent", "SQuote", 
		"Star", "Plus", "Caret", "BackQuote", "VBar", "OWS", "HTAB", "VCHAR", 
		"OBS_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(httpParser._LITERAL_NAMES, httpParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return httpParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "http.g4"; }

	// @Override
	public get ruleNames(): string[] { return httpParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return httpParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(httpParser._ATN, this);
	}
	// @RuleVersion(0)
	public http_message(): Http_messageContext {
		let _localctx: Http_messageContext = new Http_messageContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, httpParser.RULE_http_message);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.start_line();
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0)) {
				{
				{
				this.state = 49;
				this.header_field();
				this.state = 50;
				this.match(httpParser.CRLF);
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 57;
			this.match(httpParser.CRLF);
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
	public start_line(): Start_lineContext {
		let _localctx: Start_lineContext = new Start_lineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, httpParser.RULE_start_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.request_line();
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
	public request_line(): Request_lineContext {
		let _localctx: Request_lineContext = new Request_lineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, httpParser.RULE_request_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.method();
			this.state = 62;
			this.match(httpParser.SP);
			this.state = 63;
			this.request_target();
			this.state = 64;
			this.match(httpParser.SP);
			this.state = 65;
			this.http_version();
			this.state = 66;
			this.match(httpParser.CRLF);
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
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, httpParser.RULE_method);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << httpParser.T__0) | (1 << httpParser.T__1) | (1 << httpParser.T__2) | (1 << httpParser.T__3) | (1 << httpParser.T__4) | (1 << httpParser.T__5) | (1 << httpParser.T__6) | (1 << httpParser.T__7))) !== 0))) {
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
	public request_target(): Request_targetContext {
		let _localctx: Request_targetContext = new Request_targetContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, httpParser.RULE_request_target);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.origin_form();
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
	public origin_form(): Origin_formContext {
		let _localctx: Origin_formContext = new Origin_formContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, httpParser.RULE_origin_form);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.absolute_path();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === httpParser.QuestionMark) {
				{
				this.state = 73;
				this.match(httpParser.QuestionMark);
				this.state = 74;
				this.query();
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
	public absolute_path(): Absolute_pathContext {
		let _localctx: Absolute_pathContext = new Absolute_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, httpParser.RULE_absolute_path);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 77;
				this.match(httpParser.Slash);
				this.state = 78;
				this.segment();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === httpParser.Slash);
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
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, httpParser.RULE_segment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Pct_encoded - 11)) | (1 << (httpParser.LColumn - 11)) | (1 << (httpParser.RColumn - 11)) | (1 << (httpParser.SemiColon - 11)) | (1 << (httpParser.Equals - 11)) | (1 << (httpParser.Period - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.Colon - 11)) | (1 << (httpParser.At - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)))) !== 0)) {
				{
				{
				this.state = 83;
				this.pchar();
				}
				}
				this.state = 88;
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
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, httpParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Pct_encoded - 11)) | (1 << (httpParser.LColumn - 11)) | (1 << (httpParser.RColumn - 11)) | (1 << (httpParser.SemiColon - 11)) | (1 << (httpParser.Equals - 11)) | (1 << (httpParser.Period - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.QuestionMark - 11)) | (1 << (httpParser.Slash - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.Colon - 11)) | (1 << (httpParser.At - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)))) !== 0)) {
				{
				this.state = 92;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case httpParser.ALPHA:
				case httpParser.DIGIT:
				case httpParser.Pct_encoded:
				case httpParser.LColumn:
				case httpParser.RColumn:
				case httpParser.SemiColon:
				case httpParser.Equals:
				case httpParser.Period:
				case httpParser.Minus:
				case httpParser.Dot:
				case httpParser.Underscore:
				case httpParser.Tilde:
				case httpParser.ExclamationMark:
				case httpParser.Colon:
				case httpParser.At:
				case httpParser.DollarSign:
				case httpParser.Ampersand:
				case httpParser.SQuote:
				case httpParser.Star:
				case httpParser.Plus:
					{
					this.state = 89;
					this.pchar();
					}
					break;
				case httpParser.Slash:
					{
					this.state = 90;
					this.match(httpParser.Slash);
					}
					break;
				case httpParser.QuestionMark:
					{
					this.state = 91;
					this.match(httpParser.QuestionMark);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 96;
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
	public http_version(): Http_versionContext {
		let _localctx: Http_versionContext = new Http_versionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, httpParser.RULE_http_version);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.http_name();
			this.state = 98;
			this.match(httpParser.DIGIT);
			this.state = 99;
			this.match(httpParser.Dot);
			this.state = 100;
			this.match(httpParser.DIGIT);
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
	public http_name(): Http_nameContext {
		let _localctx: Http_nameContext = new Http_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, httpParser.RULE_http_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(httpParser.T__8);
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
	public header_field(): Header_fieldContext {
		let _localctx: Header_fieldContext = new Header_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, httpParser.RULE_header_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.field_name();
			this.state = 105;
			this.match(httpParser.Colon);
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === httpParser.OWS) {
				{
				{
				this.state = 106;
				this.match(httpParser.OWS);
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 112;
			this.field_value();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === httpParser.OWS) {
				{
				{
				this.state = 113;
				this.match(httpParser.OWS);
				}
				}
				this.state = 118;
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
	public field_name(): Field_nameContext {
		let _localctx: Field_nameContext = new Field_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, httpParser.RULE_field_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.token();
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
	public token(): TokenContext {
		let _localctx: TokenContext = new TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, httpParser.RULE_token);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 121;
				this.tchar();
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0));
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
	public field_value(): Field_valueContext {
		let _localctx: Field_valueContext = new Field_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, httpParser.RULE_field_value);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 128;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case httpParser.ALPHA:
					case httpParser.DIGIT:
					case httpParser.VCHAR:
					case httpParser.OBS_TEXT:
						{
						this.state = 126;
						this.field_content();
						}
						break;
					case httpParser.CRLF:
						{
						this.state = 127;
						this.obs_fold();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 130;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public field_content(): Field_contentContext {
		let _localctx: Field_contentContext = new Field_contentContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, httpParser.RULE_field_content);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.field_vchar();
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === httpParser.SP || _la === httpParser.HTAB) {
				{
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 133;
					_la = this._input.LA(1);
					if (!(_la === httpParser.SP || _la === httpParser.HTAB)) {
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
					this.state = 136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === httpParser.SP || _la === httpParser.HTAB);
				this.state = 138;
				this.field_vchar();
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
	public field_vchar(): Field_vcharContext {
		let _localctx: Field_vcharContext = new Field_vcharContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, httpParser.RULE_field_vchar);
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.ALPHA:
			case httpParser.DIGIT:
			case httpParser.VCHAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this.vCHAR();
				}
				break;
			case httpParser.OBS_TEXT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 142;
				this.obs_text();
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
	public obs_text(): Obs_textContext {
		let _localctx: Obs_textContext = new Obs_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, httpParser.RULE_obs_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(httpParser.OBS_TEXT);
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
	public obs_fold(): Obs_foldContext {
		let _localctx: Obs_foldContext = new Obs_foldContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, httpParser.RULE_obs_fold);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(httpParser.CRLF);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 148;
				_la = this._input.LA(1);
				if (!(_la === httpParser.SP || _la === httpParser.HTAB)) {
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
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === httpParser.SP || _la === httpParser.HTAB);
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
	public pchar(): PcharContext {
		let _localctx: PcharContext = new PcharContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, httpParser.RULE_pchar);
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case httpParser.ALPHA:
			case httpParser.DIGIT:
			case httpParser.Minus:
			case httpParser.Dot:
			case httpParser.Underscore:
			case httpParser.Tilde:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
				this.unreserved();
				}
				break;
			case httpParser.Pct_encoded:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 154;
				this.match(httpParser.Pct_encoded);
				}
				break;
			case httpParser.LColumn:
			case httpParser.RColumn:
			case httpParser.SemiColon:
			case httpParser.Equals:
			case httpParser.Period:
			case httpParser.ExclamationMark:
			case httpParser.DollarSign:
			case httpParser.Ampersand:
			case httpParser.SQuote:
			case httpParser.Star:
			case httpParser.Plus:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 155;
				this.sub_delims();
				}
				break;
			case httpParser.Colon:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 156;
				this.match(httpParser.Colon);
				}
				break;
			case httpParser.At:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 157;
				this.match(httpParser.At);
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
	public unreserved(): UnreservedContext {
		let _localctx: UnreservedContext = new UnreservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, httpParser.RULE_unreserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << httpParser.ALPHA) | (1 << httpParser.DIGIT) | (1 << httpParser.Minus) | (1 << httpParser.Dot) | (1 << httpParser.Underscore) | (1 << httpParser.Tilde))) !== 0))) {
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
	public sub_delims(): Sub_delimsContext {
		let _localctx: Sub_delimsContext = new Sub_delimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, httpParser.RULE_sub_delims);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			_la = this._input.LA(1);
			if (!(((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (httpParser.LColumn - 15)) | (1 << (httpParser.RColumn - 15)) | (1 << (httpParser.SemiColon - 15)) | (1 << (httpParser.Equals - 15)) | (1 << (httpParser.Period - 15)) | (1 << (httpParser.ExclamationMark - 15)) | (1 << (httpParser.DollarSign - 15)) | (1 << (httpParser.Ampersand - 15)) | (1 << (httpParser.SQuote - 15)) | (1 << (httpParser.Star - 15)) | (1 << (httpParser.Plus - 15)))) !== 0))) {
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
	public tchar(): TcharContext {
		let _localctx: TcharContext = new TcharContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, httpParser.RULE_tchar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			_la = this._input.LA(1);
			if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0))) {
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
	public vCHAR(): VCHARContext {
		let _localctx: VCHARContext = new VCHARContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, httpParser.RULE_vCHAR);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.VCHAR - 11)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\xAB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x03\x02\x07\x027\n\x02" +
		"\f\x02\x0E\x02:\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x05\x07N\n\x07\x03\b\x03\b\x06\bR\n\b\r\b\x0E" +
		"\bS\x03\t\x07\tW\n\t\f\t\x0E\tZ\v\t\x03\n\x03\n\x03\n\x07\n_\n\n\f\n\x0E" +
		"\nb\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x07" +
		"\rn\n\r\f\r\x0E\rq\v\r\x03\r\x03\r\x07\ru\n\r\f\r\x0E\rx\v\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x06\x0F}\n\x0F\r\x0F\x0E\x0F~\x03\x10\x03\x10\x06\x10\x83" +
		"\n\x10\r\x10\x0E\x10\x84\x03\x11\x03\x11\x06\x11\x89\n\x11\r\x11\x0E\x11" +
		"\x8A\x03\x11\x05\x11\x8E\n\x11\x03\x12\x03\x12\x05\x12\x92\n\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x06\x14\x98\n\x14\r\x14\x0E\x14\x99\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\xA1\n\x15\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x02\x02\x02\x1A\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x02\x02\b\x03\x02\x03\n\x04\x02\f\f++\x04\x02\r\x0E\x17\x1A\x07" +
		"\x02\x11\x15\x1D\x1D  \"\"$&\x06\x02\r\x0E\x17\x1A\x1D\x1D )\x04\x02\r" +
		"\x0E,,\x02\xA6\x022\x03\x02\x02\x02\x04=\x03\x02\x02\x02\x06?\x03\x02" +
		"\x02\x02\bF\x03\x02\x02\x02\nH\x03\x02\x02\x02\fJ\x03\x02\x02\x02\x0E" +
		"Q\x03\x02\x02\x02\x10X\x03\x02\x02\x02\x12`\x03\x02\x02\x02\x14c\x03\x02" +
		"\x02\x02\x16h\x03\x02\x02\x02\x18j\x03\x02\x02\x02\x1Ay\x03\x02\x02\x02" +
		"\x1C|\x03\x02\x02\x02\x1E\x82\x03\x02\x02\x02 \x86\x03\x02\x02\x02\"\x91" +
		"\x03\x02\x02\x02$\x93\x03\x02\x02\x02&\x95\x03\x02\x02\x02(\xA0\x03\x02" +
		"\x02\x02*\xA2\x03\x02\x02\x02,\xA4\x03\x02\x02\x02.\xA6\x03\x02\x02\x02" +
		"0\xA8\x03\x02\x02\x0228\x05\x04\x03\x0234\x05\x18\r\x0245\x07\x16\x02" +
		"\x0257\x03\x02\x02\x0263\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02" +
		"\x0289\x03\x02\x02\x029;\x03\x02\x02\x02:8\x03\x02\x02\x02;<\x07\x16\x02" +
		"\x02<\x03\x03\x02\x02\x02=>\x05\x06\x04\x02>\x05\x03\x02\x02\x02?@\x05" +
		"\b\x05\x02@A\x07\f\x02\x02AB\x05\n\x06\x02BC\x07\f\x02\x02CD\x05\x14\v" +
		"\x02DE\x07\x16\x02\x02E\x07\x03\x02\x02\x02FG\t\x02\x02\x02G\t\x03\x02" +
		"\x02\x02HI\x05\f\x07\x02I\v\x03\x02\x02\x02JM\x05\x0E\b\x02KL\x07\x1B" +
		"\x02\x02LN\x05\x12\n\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02N\r\x03\x02" +
		"\x02\x02OP\x07\x1C\x02\x02PR\x05\x10\t\x02QO\x03\x02\x02\x02RS\x03\x02" +
		"\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\x0F\x03\x02\x02\x02UW\x05" +
		"(\x15\x02VU\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03" +
		"\x02\x02\x02Y\x11\x03\x02\x02\x02ZX\x03\x02\x02\x02[_\x05(\x15\x02\\_" +
		"\x07\x1C\x02\x02]_\x07\x1B\x02\x02^[\x03\x02\x02\x02^\\\x03\x02\x02\x02" +
		"^]\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02" +
		"a\x13\x03\x02\x02\x02b`\x03\x02\x02\x02cd\x05\x16\f\x02de\x07\x0E\x02" +
		"\x02ef\x07\x18\x02\x02fg\x07\x0E\x02\x02g\x15\x03\x02\x02\x02hi\x07\v" +
		"\x02\x02i\x17\x03\x02\x02\x02jk\x05\x1A\x0E\x02ko\x07\x1E\x02\x02ln\x07" +
		"*\x02\x02ml\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03" +
		"\x02\x02\x02pr\x03\x02\x02\x02qo\x03\x02\x02\x02rv\x05\x1E\x10\x02su\x07" +
		"*\x02\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03" +
		"\x02\x02\x02w\x19\x03\x02\x02\x02xv\x03\x02\x02\x02yz\x05\x1C\x0F\x02" +
		"z\x1B\x03\x02\x02\x02{}\x05.\x18\x02|{\x03\x02\x02\x02}~\x03\x02\x02\x02" +
		"~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x1D\x03\x02\x02\x02\x80\x83" +
		"\x05 \x11\x02\x81\x83\x05&\x14\x02\x82\x80\x03\x02\x02\x02\x82\x81\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03" +
		"\x02\x02\x02\x85\x1F\x03\x02\x02\x02\x86\x8D\x05\"\x12\x02\x87\x89\t\x03" +
		"\x02\x02\x88\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x88\x03\x02" +
		"\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x05\"" +
		"\x12\x02\x8D\x88\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E!\x03\x02" +
		"\x02\x02\x8F\x92\x050\x19\x02\x90\x92\x05$\x13\x02\x91\x8F\x03\x02\x02" +
		"\x02\x91\x90\x03\x02\x02\x02\x92#\x03\x02\x02\x02\x93\x94\x07-\x02\x02" +
		"\x94%\x03\x02\x02\x02\x95\x97\x07\x16\x02\x02\x96\x98\t\x03\x02\x02\x97" +
		"\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99" +
		"\x9A\x03\x02\x02\x02\x9A\'\x03\x02\x02\x02\x9B\xA1\x05*\x16\x02\x9C\xA1" +
		"\x07\x0F\x02\x02\x9D\xA1\x05,\x17\x02\x9E\xA1\x07\x1E\x02\x02\x9F\xA1" +
		"\x07\x1F\x02\x02\xA0\x9B\x03\x02\x02\x02\xA0\x9C\x03\x02\x02\x02\xA0\x9D" +
		"\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1)" +
		"\x03\x02\x02\x02\xA2\xA3\t\x04\x02\x02\xA3+\x03\x02\x02\x02\xA4\xA5\t" +
		"\x05\x02\x02\xA5-\x03\x02\x02\x02\xA6\xA7\t\x06\x02\x02\xA7/\x03\x02\x02" +
		"\x02\xA8\xA9\t\x07\x02\x02\xA91\x03\x02\x02\x02\x128MSX^`ov~\x82\x84\x8A" +
		"\x8D\x91\x99\xA0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!httpParser.__ATN) {
			httpParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(httpParser._serializedATN));
		}

		return httpParser.__ATN;
	}

}

export class Http_messageContext extends ParserRuleContext {
	public start_line(): Start_lineContext {
		return this.getRuleContext(0, Start_lineContext);
	}
	public CRLF(): TerminalNode[];
	public CRLF(i: number): TerminalNode;
	public CRLF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.CRLF);
		} else {
			return this.getToken(httpParser.CRLF, i);
		}
	}
	public header_field(): Header_fieldContext[];
	public header_field(i: number): Header_fieldContext;
	public header_field(i?: number): Header_fieldContext | Header_fieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Header_fieldContext);
		} else {
			return this.getRuleContext(i, Header_fieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_http_message; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterHttp_message) {
			listener.enterHttp_message(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitHttp_message) {
			listener.exitHttp_message(this);
		}
	}
}


export class Start_lineContext extends ParserRuleContext {
	public request_line(): Request_lineContext {
		return this.getRuleContext(0, Request_lineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_start_line; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterStart_line) {
			listener.enterStart_line(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitStart_line) {
			listener.exitStart_line(this);
		}
	}
}


export class Request_lineContext extends ParserRuleContext {
	public method(): MethodContext {
		return this.getRuleContext(0, MethodContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.SP);
		} else {
			return this.getToken(httpParser.SP, i);
		}
	}
	public request_target(): Request_targetContext {
		return this.getRuleContext(0, Request_targetContext);
	}
	public http_version(): Http_versionContext {
		return this.getRuleContext(0, Http_versionContext);
	}
	public CRLF(): TerminalNode { return this.getToken(httpParser.CRLF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_request_line; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterRequest_line) {
			listener.enterRequest_line(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitRequest_line) {
			listener.exitRequest_line(this);
		}
	}
}


export class MethodContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_method; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterMethod) {
			listener.enterMethod(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitMethod) {
			listener.exitMethod(this);
		}
	}
}


export class Request_targetContext extends ParserRuleContext {
	public origin_form(): Origin_formContext {
		return this.getRuleContext(0, Origin_formContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_request_target; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterRequest_target) {
			listener.enterRequest_target(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitRequest_target) {
			listener.exitRequest_target(this);
		}
	}
}


export class Origin_formContext extends ParserRuleContext {
	public absolute_path(): Absolute_pathContext {
		return this.getRuleContext(0, Absolute_pathContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(httpParser.QuestionMark, 0); }
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_origin_form; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterOrigin_form) {
			listener.enterOrigin_form(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitOrigin_form) {
			listener.exitOrigin_form(this);
		}
	}
}


export class Absolute_pathContext extends ParserRuleContext {
	public Slash(): TerminalNode[];
	public Slash(i: number): TerminalNode;
	public Slash(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.Slash);
		} else {
			return this.getToken(httpParser.Slash, i);
		}
	}
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_absolute_path; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterAbsolute_path) {
			listener.enterAbsolute_path(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitAbsolute_path) {
			listener.exitAbsolute_path(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public pchar(): PcharContext[];
	public pchar(i: number): PcharContext;
	public pchar(i?: number): PcharContext | PcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PcharContext);
		} else {
			return this.getRuleContext(i, PcharContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_segment; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public pchar(): PcharContext[];
	public pchar(i: number): PcharContext;
	public pchar(i?: number): PcharContext | PcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PcharContext);
		} else {
			return this.getRuleContext(i, PcharContext);
		}
	}
	public Slash(): TerminalNode[];
	public Slash(i: number): TerminalNode;
	public Slash(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.Slash);
		} else {
			return this.getToken(httpParser.Slash, i);
		}
	}
	public QuestionMark(): TerminalNode[];
	public QuestionMark(i: number): TerminalNode;
	public QuestionMark(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.QuestionMark);
		} else {
			return this.getToken(httpParser.QuestionMark, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_query; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
}


export class Http_versionContext extends ParserRuleContext {
	public http_name(): Http_nameContext {
		return this.getRuleContext(0, Http_nameContext);
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.DIGIT);
		} else {
			return this.getToken(httpParser.DIGIT, i);
		}
	}
	public Dot(): TerminalNode { return this.getToken(httpParser.Dot, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_http_version; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterHttp_version) {
			listener.enterHttp_version(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitHttp_version) {
			listener.exitHttp_version(this);
		}
	}
}


export class Http_nameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_http_name; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterHttp_name) {
			listener.enterHttp_name(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitHttp_name) {
			listener.exitHttp_name(this);
		}
	}
}


export class Header_fieldContext extends ParserRuleContext {
	public field_name(): Field_nameContext {
		return this.getRuleContext(0, Field_nameContext);
	}
	public Colon(): TerminalNode { return this.getToken(httpParser.Colon, 0); }
	public field_value(): Field_valueContext {
		return this.getRuleContext(0, Field_valueContext);
	}
	public OWS(): TerminalNode[];
	public OWS(i: number): TerminalNode;
	public OWS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.OWS);
		} else {
			return this.getToken(httpParser.OWS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_header_field; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterHeader_field) {
			listener.enterHeader_field(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitHeader_field) {
			listener.exitHeader_field(this);
		}
	}
}


export class Field_nameContext extends ParserRuleContext {
	public token(): TokenContext {
		return this.getRuleContext(0, TokenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_field_name; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterField_name) {
			listener.enterField_name(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitField_name) {
			listener.exitField_name(this);
		}
	}
}


export class TokenContext extends ParserRuleContext {
	public tchar(): TcharContext[];
	public tchar(i: number): TcharContext;
	public tchar(i?: number): TcharContext | TcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TcharContext);
		} else {
			return this.getRuleContext(i, TcharContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_token; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterToken) {
			listener.enterToken(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitToken) {
			listener.exitToken(this);
		}
	}
}


export class Field_valueContext extends ParserRuleContext {
	public field_content(): Field_contentContext[];
	public field_content(i: number): Field_contentContext;
	public field_content(i?: number): Field_contentContext | Field_contentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Field_contentContext);
		} else {
			return this.getRuleContext(i, Field_contentContext);
		}
	}
	public obs_fold(): Obs_foldContext[];
	public obs_fold(i: number): Obs_foldContext;
	public obs_fold(i?: number): Obs_foldContext | Obs_foldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Obs_foldContext);
		} else {
			return this.getRuleContext(i, Obs_foldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_field_value; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterField_value) {
			listener.enterField_value(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitField_value) {
			listener.exitField_value(this);
		}
	}
}


export class Field_contentContext extends ParserRuleContext {
	public field_vchar(): Field_vcharContext[];
	public field_vchar(i: number): Field_vcharContext;
	public field_vchar(i?: number): Field_vcharContext | Field_vcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Field_vcharContext);
		} else {
			return this.getRuleContext(i, Field_vcharContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.SP);
		} else {
			return this.getToken(httpParser.SP, i);
		}
	}
	public HTAB(): TerminalNode[];
	public HTAB(i: number): TerminalNode;
	public HTAB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.HTAB);
		} else {
			return this.getToken(httpParser.HTAB, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_field_content; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterField_content) {
			listener.enterField_content(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitField_content) {
			listener.exitField_content(this);
		}
	}
}


export class Field_vcharContext extends ParserRuleContext {
	public vCHAR(): VCHARContext | undefined {
		return this.tryGetRuleContext(0, VCHARContext);
	}
	public obs_text(): Obs_textContext | undefined {
		return this.tryGetRuleContext(0, Obs_textContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_field_vchar; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterField_vchar) {
			listener.enterField_vchar(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitField_vchar) {
			listener.exitField_vchar(this);
		}
	}
}


export class Obs_textContext extends ParserRuleContext {
	public OBS_TEXT(): TerminalNode { return this.getToken(httpParser.OBS_TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_obs_text; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterObs_text) {
			listener.enterObs_text(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitObs_text) {
			listener.exitObs_text(this);
		}
	}
}


export class Obs_foldContext extends ParserRuleContext {
	public CRLF(): TerminalNode { return this.getToken(httpParser.CRLF, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.SP);
		} else {
			return this.getToken(httpParser.SP, i);
		}
	}
	public HTAB(): TerminalNode[];
	public HTAB(i: number): TerminalNode;
	public HTAB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(httpParser.HTAB);
		} else {
			return this.getToken(httpParser.HTAB, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_obs_fold; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterObs_fold) {
			listener.enterObs_fold(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitObs_fold) {
			listener.exitObs_fold(this);
		}
	}
}


export class PcharContext extends ParserRuleContext {
	public unreserved(): UnreservedContext | undefined {
		return this.tryGetRuleContext(0, UnreservedContext);
	}
	public Pct_encoded(): TerminalNode | undefined { return this.tryGetToken(httpParser.Pct_encoded, 0); }
	public sub_delims(): Sub_delimsContext | undefined {
		return this.tryGetRuleContext(0, Sub_delimsContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(httpParser.Colon, 0); }
	public At(): TerminalNode | undefined { return this.tryGetToken(httpParser.At, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_pchar; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterPchar) {
			listener.enterPchar(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitPchar) {
			listener.exitPchar(this);
		}
	}
}


export class UnreservedContext extends ParserRuleContext {
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(httpParser.ALPHA, 0); }
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(httpParser.DIGIT, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(httpParser.Minus, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(httpParser.Dot, 0); }
	public Underscore(): TerminalNode | undefined { return this.tryGetToken(httpParser.Underscore, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(httpParser.Tilde, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_unreserved; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterUnreserved) {
			listener.enterUnreserved(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitUnreserved) {
			listener.exitUnreserved(this);
		}
	}
}


export class Sub_delimsContext extends ParserRuleContext {
	public ExclamationMark(): TerminalNode | undefined { return this.tryGetToken(httpParser.ExclamationMark, 0); }
	public DollarSign(): TerminalNode | undefined { return this.tryGetToken(httpParser.DollarSign, 0); }
	public Ampersand(): TerminalNode | undefined { return this.tryGetToken(httpParser.Ampersand, 0); }
	public SQuote(): TerminalNode | undefined { return this.tryGetToken(httpParser.SQuote, 0); }
	public LColumn(): TerminalNode | undefined { return this.tryGetToken(httpParser.LColumn, 0); }
	public RColumn(): TerminalNode | undefined { return this.tryGetToken(httpParser.RColumn, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(httpParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(httpParser.Plus, 0); }
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(httpParser.SemiColon, 0); }
	public Period(): TerminalNode | undefined { return this.tryGetToken(httpParser.Period, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(httpParser.Equals, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_sub_delims; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterSub_delims) {
			listener.enterSub_delims(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitSub_delims) {
			listener.exitSub_delims(this);
		}
	}
}


export class TcharContext extends ParserRuleContext {
	public ExclamationMark(): TerminalNode | undefined { return this.tryGetToken(httpParser.ExclamationMark, 0); }
	public DollarSign(): TerminalNode | undefined { return this.tryGetToken(httpParser.DollarSign, 0); }
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(httpParser.Hashtag, 0); }
	public Percent(): TerminalNode | undefined { return this.tryGetToken(httpParser.Percent, 0); }
	public Ampersand(): TerminalNode | undefined { return this.tryGetToken(httpParser.Ampersand, 0); }
	public SQuote(): TerminalNode | undefined { return this.tryGetToken(httpParser.SQuote, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(httpParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(httpParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(httpParser.Minus, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(httpParser.Dot, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(httpParser.Caret, 0); }
	public Underscore(): TerminalNode | undefined { return this.tryGetToken(httpParser.Underscore, 0); }
	public BackQuote(): TerminalNode | undefined { return this.tryGetToken(httpParser.BackQuote, 0); }
	public VBar(): TerminalNode | undefined { return this.tryGetToken(httpParser.VBar, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(httpParser.Tilde, 0); }
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(httpParser.DIGIT, 0); }
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(httpParser.ALPHA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_tchar; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterTchar) {
			listener.enterTchar(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitTchar) {
			listener.exitTchar(this);
		}
	}
}


export class VCHARContext extends ParserRuleContext {
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(httpParser.ALPHA, 0); }
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(httpParser.DIGIT, 0); }
	public VCHAR(): TerminalNode | undefined { return this.tryGetToken(httpParser.VCHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return httpParser.RULE_vCHAR; }
	// @Override
	public enterRule(listener: httpListener): void {
		if (listener.enterVCHAR) {
			listener.enterVCHAR(this);
		}
	}
	// @Override
	public exitRule(listener: httpListener): void {
		if (listener.exitVCHAR) {
			listener.exitVCHAR(this);
		}
	}
}


