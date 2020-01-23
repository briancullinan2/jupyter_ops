// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-emailaddress/emailaddress.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { emailaddressListener } from "./emailaddressListener";
import { emailaddressVisitor } from "./emailaddressVisitor";


export class emailaddressParser extends Parser {
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
	public static readonly CHAR = 13;
	public static readonly ALPHA = 14;
	public static readonly DIGIT = 15;
	public static readonly CTL = 16;
	public static readonly CR = 17;
	public static readonly LF = 18;
	public static readonly SPACE = 19;
	public static readonly HTAB = 20;
	public static readonly CRLF = 21;
	public static readonly SPECIALS = 22;
	public static readonly QUOTE = 23;
	public static readonly QTEXT = 24;
	public static readonly DTEXT = 25;
	public static readonly CTEXT = 26;
	public static readonly RULE_emailaddress = 0;
	public static readonly RULE_group = 1;
	public static readonly RULE_mailbox = 2;
	public static readonly RULE_routeaddr = 3;
	public static readonly RULE_route = 4;
	public static readonly RULE_addrspec = 5;
	public static readonly RULE_localpart = 6;
	public static readonly RULE_domain = 7;
	public static readonly RULE_subdomain = 8;
	public static readonly RULE_domainref = 9;
	public static readonly RULE_phrase = 10;
	public static readonly RULE_word = 11;
	public static readonly RULE_lwspchar = 12;
	public static readonly RULE_lwsp = 13;
	public static readonly RULE_delimeters = 14;
	public static readonly RULE_atom = 15;
	public static readonly RULE_quotedpair = 16;
	public static readonly RULE_domainliteral = 17;
	public static readonly RULE_quotedstring = 18;
	public static readonly RULE_comment = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"emailaddress", "group", "mailbox", "routeaddr", "route", "addrspec", 
		"localpart", "domain", "subdomain", "domainref", "phrase", "word", "lwspchar", 
		"lwsp", "delimeters", "atom", "quotedpair", "domainliteral", "quotedstring", 
		"comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "';'", "'<'", "'>'", "'@'", "'.'", "'\\'", "'['", "']'", 
		"'''", "'('", "')'", undefined, undefined, undefined, undefined, "'\n'", 
		"'\r'", "' '", "'\t'", "'\rn'", undefined, "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "CHAR", 
		"ALPHA", "DIGIT", "CTL", "CR", "LF", "SPACE", "HTAB", "CRLF", "SPECIALS", 
		"QUOTE", "QTEXT", "DTEXT", "CTEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(emailaddressParser._LITERAL_NAMES, emailaddressParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return emailaddressParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "emailaddress.g4"; }

	// @Override
	public get ruleNames(): string[] { return emailaddressParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return emailaddressParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(emailaddressParser._ATN, this);
	}
	// @RuleVersion(0)
	public emailaddress(): EmailaddressContext {
		let _localctx: EmailaddressContext = new EmailaddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, emailaddressParser.RULE_emailaddress);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this.mailbox();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.group();
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, emailaddressParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.phrase();
			this.state = 45;
			this.match(emailaddressParser.T__0);
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === emailaddressParser.T__9 || _la === emailaddressParser.CHAR) {
				{
				{
				this.state = 46;
				this.mailbox();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
			this.match(emailaddressParser.T__1);
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
	public mailbox(): MailboxContext {
		let _localctx: MailboxContext = new MailboxContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, emailaddressParser.RULE_mailbox);
		try {
			this.state = 58;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.addrspec();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 55;
				this.phrase();
				this.state = 56;
				this.routeaddr();
				}
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
	public routeaddr(): RouteaddrContext {
		let _localctx: RouteaddrContext = new RouteaddrContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, emailaddressParser.RULE_routeaddr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(emailaddressParser.T__2);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === emailaddressParser.T__4) {
				{
				{
				this.state = 61;
				this.route();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.addrspec();
			this.state = 68;
			this.match(emailaddressParser.T__3);
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
	public route(): RouteContext {
		let _localctx: RouteContext = new RouteContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, emailaddressParser.RULE_route);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(emailaddressParser.T__4);
			this.state = 71;
			this.domain();
			this.state = 72;
			this.match(emailaddressParser.T__0);
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
	public addrspec(): AddrspecContext {
		let _localctx: AddrspecContext = new AddrspecContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, emailaddressParser.RULE_addrspec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.localpart();
			this.state = 75;
			this.match(emailaddressParser.T__4);
			this.state = 76;
			this.domain();
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
	public localpart(): LocalpartContext {
		let _localctx: LocalpartContext = new LocalpartContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, emailaddressParser.RULE_localpart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.word();
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === emailaddressParser.T__5) {
				{
				{
				this.state = 79;
				this.match(emailaddressParser.T__5);
				this.state = 80;
				this.word();
				}
				}
				this.state = 85;
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
	public domain(): DomainContext {
		let _localctx: DomainContext = new DomainContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, emailaddressParser.RULE_domain);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.subdomain();
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === emailaddressParser.T__5) {
				{
				{
				this.state = 87;
				this.match(emailaddressParser.T__5);
				this.state = 88;
				this.subdomain();
				}
				}
				this.state = 93;
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
	public subdomain(): SubdomainContext {
		let _localctx: SubdomainContext = new SubdomainContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, emailaddressParser.RULE_subdomain);
		try {
			this.state = 96;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case emailaddressParser.CHAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.domainref();
				}
				break;
			case emailaddressParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.domainliteral();
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
	public domainref(): DomainrefContext {
		let _localctx: DomainrefContext = new DomainrefContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, emailaddressParser.RULE_domainref);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.atom();
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
	public phrase(): PhraseContext {
		let _localctx: PhraseContext = new PhraseContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, emailaddressParser.RULE_phrase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 100;
				this.word();
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === emailaddressParser.T__9 || _la === emailaddressParser.CHAR);
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
	public word(): WordContext {
		let _localctx: WordContext = new WordContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, emailaddressParser.RULE_word);
		try {
			this.state = 107;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case emailaddressParser.CHAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 105;
				this.atom();
				}
				break;
			case emailaddressParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 106;
				this.quotedstring();
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
	public lwspchar(): LwspcharContext {
		let _localctx: LwspcharContext = new LwspcharContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, emailaddressParser.RULE_lwspchar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			_la = this._input.LA(1);
			if (!(_la === emailaddressParser.SPACE || _la === emailaddressParser.HTAB)) {
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
	public lwsp(): LwspContext {
		let _localctx: LwspContext = new LwspContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, emailaddressParser.RULE_lwsp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === emailaddressParser.CRLF) {
					{
					this.state = 111;
					this.match(emailaddressParser.CRLF);
					}
				}

				this.state = 114;
				this.lwspchar();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << emailaddressParser.SPACE) | (1 << emailaddressParser.HTAB) | (1 << emailaddressParser.CRLF))) !== 0));
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
	public delimeters(): DelimetersContext {
		let _localctx: DelimetersContext = new DelimetersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, emailaddressParser.RULE_delimeters);
		try {
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case emailaddressParser.SPECIALS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.match(emailaddressParser.SPECIALS);
				}
				break;
			case emailaddressParser.SPACE:
			case emailaddressParser.HTAB:
			case emailaddressParser.CRLF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.lwsp();
				}
				break;
			case emailaddressParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 121;
				this.comment();
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, emailaddressParser.RULE_atom);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 124;
					this.match(emailaddressParser.CHAR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
	public quotedpair(): QuotedpairContext {
		let _localctx: QuotedpairContext = new QuotedpairContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, emailaddressParser.RULE_quotedpair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(emailaddressParser.T__6);
			this.state = 130;
			this.match(emailaddressParser.CHAR);
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
	public domainliteral(): DomainliteralContext {
		let _localctx: DomainliteralContext = new DomainliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, emailaddressParser.RULE_domainliteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(emailaddressParser.T__7);
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === emailaddressParser.T__6 || _la === emailaddressParser.DTEXT) {
				{
				this.state = 135;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case emailaddressParser.DTEXT:
					{
					this.state = 133;
					this.match(emailaddressParser.DTEXT);
					}
					break;
				case emailaddressParser.T__6:
					{
					this.state = 134;
					this.quotedpair();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 140;
			this.match(emailaddressParser.T__8);
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
	public quotedstring(): QuotedstringContext {
		let _localctx: QuotedstringContext = new QuotedstringContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, emailaddressParser.RULE_quotedstring);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(emailaddressParser.T__9);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === emailaddressParser.T__6 || _la === emailaddressParser.QTEXT) {
				{
				this.state = 145;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case emailaddressParser.QTEXT:
					{
					this.state = 143;
					this.match(emailaddressParser.QTEXT);
					}
					break;
				case emailaddressParser.T__6:
					{
					this.state = 144;
					this.quotedpair();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
			this.match(emailaddressParser.T__9);
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, emailaddressParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(emailaddressParser.T__10);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << emailaddressParser.T__6) | (1 << emailaddressParser.T__10) | (1 << emailaddressParser.CTEXT))) !== 0)) {
				{
				this.state = 156;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case emailaddressParser.CTEXT:
					{
					this.state = 153;
					this.match(emailaddressParser.CTEXT);
					}
					break;
				case emailaddressParser.T__6:
					{
					this.state = 154;
					this.quotedpair();
					}
					break;
				case emailaddressParser.T__10:
					{
					this.state = 155;
					this.comment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 161;
			this.match(emailaddressParser.T__11);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\xA6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x05\x02-\n\x02" +
		"\x03\x03\x03\x03\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x05\x03\x05\x07" +
		"\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07" +
		"\bT\n\b\f\b\x0E\bW\v\b\x03\t\x03\t\x03\t\x07\t\\\n\t\f\t\x0E\t_\v\t\x03" +
		"\n\x03\n\x05\nc\n\n\x03\v\x03\v\x03\f\x06\fh\n\f\r\f\x0E\fi\x03\r\x03" +
		"\r\x05\rn\n\r\x03\x0E\x03\x0E\x03\x0F\x05\x0Fs\n\x0F\x03\x0F\x06\x0Fv" +
		"\n\x0F\r\x0F\x0E\x0Fw\x03\x10\x03\x10\x03\x10\x05\x10}\n\x10\x03\x11\x06" +
		"\x11\x80\n\x11\r\x11\x0E\x11\x81\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x07\x13\x8A\n\x13\f\x13\x0E\x13\x8D\v\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\x94\n\x14\f\x14\x0E\x14\x97\v\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\x9F\n\x15\f\x15\x0E\x15" +
		"\xA2\v\x15\x03\x15\x03\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x03\x03\x02\x15" +
		"\x16\x02\xA6\x02,\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x06<\x03\x02\x02" +
		"\x02\b>\x03\x02\x02\x02\nH\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EP\x03" +
		"\x02\x02\x02\x10X\x03\x02\x02\x02\x12b\x03\x02\x02\x02\x14d\x03\x02\x02" +
		"\x02\x16g\x03\x02\x02\x02\x18m\x03\x02\x02\x02\x1Ao\x03\x02\x02\x02\x1C" +
		"u\x03\x02\x02\x02\x1E|\x03\x02\x02\x02 \x7F\x03\x02\x02\x02\"\x83\x03" +
		"\x02\x02\x02$\x86\x03\x02\x02\x02&\x90\x03\x02\x02\x02(\x9A\x03\x02\x02" +
		"\x02*-\x05\x06\x04\x02+-\x05\x04\x03\x02,*\x03\x02\x02\x02,+\x03\x02\x02" +
		"\x02-\x03\x03\x02\x02\x02./\x05\x16\f\x02/3\x07\x03\x02\x0202\x05\x06" +
		"\x04\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02" +
		"\x02\x0246\x03\x02\x02\x0253\x03\x02\x02\x0267\x07\x04\x02\x027\x05\x03" +
		"\x02\x02\x028=\x05\f\x07\x029:\x05\x16\f\x02:;\x05\b\x05\x02;=\x03\x02" +
		"\x02\x02<8\x03\x02\x02\x02<9\x03\x02\x02\x02=\x07\x03\x02\x02\x02>B\x07" +
		"\x05\x02\x02?A\x05\n\x06\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03" +
		"\x02\x02\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x05" +
		"\f\x07\x02FG\x07\x06\x02\x02G\t\x03\x02\x02\x02HI\x07\x07\x02\x02IJ\x05" +
		"\x10\t\x02JK\x07\x03\x02\x02K\v\x03\x02\x02\x02LM\x05\x0E\b\x02MN\x07" +
		"\x07\x02\x02NO\x05\x10\t\x02O\r\x03\x02\x02\x02PU\x05\x18\r\x02QR\x07" +
		"\b\x02\x02RT\x05\x18\r\x02SQ\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02" +
		"\x02\x02UV\x03\x02\x02\x02V\x0F\x03\x02\x02\x02WU\x03\x02\x02\x02X]\x05" +
		"\x12\n\x02YZ\x07\b\x02\x02Z\\\x05\x12\n\x02[Y\x03\x02\x02\x02\\_\x03\x02" +
		"\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\x11\x03\x02\x02\x02_]\x03" +
		"\x02\x02\x02`c\x05\x14\v\x02ac\x05$\x13\x02b`\x03\x02\x02\x02ba\x03\x02" +
		"\x02\x02c\x13\x03\x02\x02\x02de\x05 \x11\x02e\x15\x03\x02\x02\x02fh\x05" +
		"\x18\r\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03" +
		"\x02\x02\x02j\x17\x03\x02\x02\x02kn\x05 \x11\x02ln\x05&\x14\x02mk\x03" +
		"\x02\x02\x02ml\x03\x02\x02\x02n\x19\x03\x02\x02\x02op\t\x02\x02\x02p\x1B" +
		"\x03\x02\x02\x02qs\x07\x17\x02\x02rq\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"st\x03\x02\x02\x02tv\x05\x1A\x0E\x02ur\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\x1D\x03\x02\x02\x02y}\x07\x18\x02" +
		"\x02z}\x05\x1C\x0F\x02{}\x05(\x15\x02|y\x03\x02\x02\x02|z\x03\x02\x02" +
		"\x02|{\x03\x02\x02\x02}\x1F\x03\x02\x02\x02~\x80\x07\x0F\x02\x02\x7F~" +
		"\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82" +
		"\x03\x02\x02\x02\x82!\x03\x02\x02\x02\x83\x84\x07\t\x02\x02\x84\x85\x07" +
		"\x0F\x02\x02\x85#\x03\x02\x02\x02\x86\x8B\x07\n\x02\x02\x87\x8A\x07\x1B" +
		"\x02\x02\x88\x8A\x05\"\x12\x02\x89\x87\x03\x02\x02\x02\x89\x88\x03\x02" +
		"\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02" +
		"\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x8F\x07\v" +
		"\x02\x02\x8F%\x03\x02\x02\x02\x90\x95\x07\f\x02\x02\x91\x94\x07\x1A\x02" +
		"\x02\x92\x94\x05\"\x12\x02\x93\x91\x03\x02\x02\x02\x93\x92\x03\x02\x02" +
		"\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02" +
		"\x02\x96\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99\x07\f\x02" +
		"\x02\x99\'\x03\x02\x02\x02\x9A\xA0\x07\r\x02\x02\x9B\x9F\x07\x1C\x02\x02" +
		"\x9C\x9F\x05\"\x12\x02\x9D\x9F\x05(\x15\x02\x9E\x9B\x03\x02\x02\x02\x9E" +
		"\x9C\x03\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0" +
		"\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2" +
		"\xA0\x03\x02\x02\x02\xA3\xA4\x07\x0E\x02\x02\xA4)\x03\x02\x02\x02\x15" +
		",3<BU]bimrw|\x81\x89\x8B\x93\x95\x9E\xA0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!emailaddressParser.__ATN) {
			emailaddressParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(emailaddressParser._serializedATN));
		}

		return emailaddressParser.__ATN;
	}

}

export class EmailaddressContext extends ParserRuleContext {
	public mailbox(): MailboxContext | undefined {
		return this.tryGetRuleContext(0, MailboxContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_emailaddress; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterEmailaddress) {
			listener.enterEmailaddress(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitEmailaddress) {
			listener.exitEmailaddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitEmailaddress) {
			return visitor.visitEmailaddress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public phrase(): PhraseContext {
		return this.getRuleContext(0, PhraseContext);
	}
	public mailbox(): MailboxContext[];
	public mailbox(i: number): MailboxContext;
	public mailbox(i?: number): MailboxContext | MailboxContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MailboxContext);
		} else {
			return this.getRuleContext(i, MailboxContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_group; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MailboxContext extends ParserRuleContext {
	public addrspec(): AddrspecContext | undefined {
		return this.tryGetRuleContext(0, AddrspecContext);
	}
	public phrase(): PhraseContext | undefined {
		return this.tryGetRuleContext(0, PhraseContext);
	}
	public routeaddr(): RouteaddrContext | undefined {
		return this.tryGetRuleContext(0, RouteaddrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_mailbox; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterMailbox) {
			listener.enterMailbox(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitMailbox) {
			listener.exitMailbox(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitMailbox) {
			return visitor.visitMailbox(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RouteaddrContext extends ParserRuleContext {
	public addrspec(): AddrspecContext {
		return this.getRuleContext(0, AddrspecContext);
	}
	public route(): RouteContext[];
	public route(i: number): RouteContext;
	public route(i?: number): RouteContext | RouteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RouteContext);
		} else {
			return this.getRuleContext(i, RouteContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_routeaddr; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterRouteaddr) {
			listener.enterRouteaddr(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitRouteaddr) {
			listener.exitRouteaddr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitRouteaddr) {
			return visitor.visitRouteaddr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RouteContext extends ParserRuleContext {
	public domain(): DomainContext {
		return this.getRuleContext(0, DomainContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_route; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterRoute) {
			listener.enterRoute(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitRoute) {
			listener.exitRoute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitRoute) {
			return visitor.visitRoute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddrspecContext extends ParserRuleContext {
	public localpart(): LocalpartContext {
		return this.getRuleContext(0, LocalpartContext);
	}
	public domain(): DomainContext {
		return this.getRuleContext(0, DomainContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_addrspec; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterAddrspec) {
			listener.enterAddrspec(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitAddrspec) {
			listener.exitAddrspec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitAddrspec) {
			return visitor.visitAddrspec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalpartContext extends ParserRuleContext {
	public word(): WordContext[];
	public word(i: number): WordContext;
	public word(i?: number): WordContext | WordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordContext);
		} else {
			return this.getRuleContext(i, WordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_localpart; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterLocalpart) {
			listener.enterLocalpart(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitLocalpart) {
			listener.exitLocalpart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitLocalpart) {
			return visitor.visitLocalpart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DomainContext extends ParserRuleContext {
	public subdomain(): SubdomainContext[];
	public subdomain(i: number): SubdomainContext;
	public subdomain(i?: number): SubdomainContext | SubdomainContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubdomainContext);
		} else {
			return this.getRuleContext(i, SubdomainContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_domain; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterDomain) {
			listener.enterDomain(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitDomain) {
			listener.exitDomain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitDomain) {
			return visitor.visitDomain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubdomainContext extends ParserRuleContext {
	public domainref(): DomainrefContext | undefined {
		return this.tryGetRuleContext(0, DomainrefContext);
	}
	public domainliteral(): DomainliteralContext | undefined {
		return this.tryGetRuleContext(0, DomainliteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_subdomain; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterSubdomain) {
			listener.enterSubdomain(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitSubdomain) {
			listener.exitSubdomain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitSubdomain) {
			return visitor.visitSubdomain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DomainrefContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_domainref; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterDomainref) {
			listener.enterDomainref(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitDomainref) {
			listener.exitDomainref(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitDomainref) {
			return visitor.visitDomainref(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhraseContext extends ParserRuleContext {
	public word(): WordContext[];
	public word(i: number): WordContext;
	public word(i?: number): WordContext | WordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordContext);
		} else {
			return this.getRuleContext(i, WordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_phrase; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterPhrase) {
			listener.enterPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitPhrase) {
			listener.exitPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitPhrase) {
			return visitor.visitPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WordContext extends ParserRuleContext {
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public quotedstring(): QuotedstringContext | undefined {
		return this.tryGetRuleContext(0, QuotedstringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_word; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterWord) {
			listener.enterWord(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitWord) {
			listener.exitWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitWord) {
			return visitor.visitWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LwspcharContext extends ParserRuleContext {
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(emailaddressParser.SPACE, 0); }
	public HTAB(): TerminalNode | undefined { return this.tryGetToken(emailaddressParser.HTAB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_lwspchar; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterLwspchar) {
			listener.enterLwspchar(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitLwspchar) {
			listener.exitLwspchar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitLwspchar) {
			return visitor.visitLwspchar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LwspContext extends ParserRuleContext {
	public lwspchar(): LwspcharContext[];
	public lwspchar(i: number): LwspcharContext;
	public lwspchar(i?: number): LwspcharContext | LwspcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LwspcharContext);
		} else {
			return this.getRuleContext(i, LwspcharContext);
		}
	}
	public CRLF(): TerminalNode[];
	public CRLF(i: number): TerminalNode;
	public CRLF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(emailaddressParser.CRLF);
		} else {
			return this.getToken(emailaddressParser.CRLF, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_lwsp; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterLwsp) {
			listener.enterLwsp(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitLwsp) {
			listener.exitLwsp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitLwsp) {
			return visitor.visitLwsp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelimetersContext extends ParserRuleContext {
	public SPECIALS(): TerminalNode | undefined { return this.tryGetToken(emailaddressParser.SPECIALS, 0); }
	public lwsp(): LwspContext | undefined {
		return this.tryGetRuleContext(0, LwspContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_delimeters; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterDelimeters) {
			listener.enterDelimeters(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitDelimeters) {
			listener.exitDelimeters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitDelimeters) {
			return visitor.visitDelimeters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public CHAR(): TerminalNode[];
	public CHAR(i: number): TerminalNode;
	public CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(emailaddressParser.CHAR);
		} else {
			return this.getToken(emailaddressParser.CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_atom; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedpairContext extends ParserRuleContext {
	public CHAR(): TerminalNode { return this.getToken(emailaddressParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_quotedpair; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterQuotedpair) {
			listener.enterQuotedpair(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitQuotedpair) {
			listener.exitQuotedpair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitQuotedpair) {
			return visitor.visitQuotedpair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DomainliteralContext extends ParserRuleContext {
	public DTEXT(): TerminalNode[];
	public DTEXT(i: number): TerminalNode;
	public DTEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(emailaddressParser.DTEXT);
		} else {
			return this.getToken(emailaddressParser.DTEXT, i);
		}
	}
	public quotedpair(): QuotedpairContext[];
	public quotedpair(i: number): QuotedpairContext;
	public quotedpair(i?: number): QuotedpairContext | QuotedpairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuotedpairContext);
		} else {
			return this.getRuleContext(i, QuotedpairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_domainliteral; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterDomainliteral) {
			listener.enterDomainliteral(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitDomainliteral) {
			listener.exitDomainliteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitDomainliteral) {
			return visitor.visitDomainliteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedstringContext extends ParserRuleContext {
	public QTEXT(): TerminalNode[];
	public QTEXT(i: number): TerminalNode;
	public QTEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(emailaddressParser.QTEXT);
		} else {
			return this.getToken(emailaddressParser.QTEXT, i);
		}
	}
	public quotedpair(): QuotedpairContext[];
	public quotedpair(i: number): QuotedpairContext;
	public quotedpair(i?: number): QuotedpairContext | QuotedpairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuotedpairContext);
		} else {
			return this.getRuleContext(i, QuotedpairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_quotedstring; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterQuotedstring) {
			listener.enterQuotedstring(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitQuotedstring) {
			listener.exitQuotedstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitQuotedstring) {
			return visitor.visitQuotedstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public CTEXT(): TerminalNode[];
	public CTEXT(i: number): TerminalNode;
	public CTEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(emailaddressParser.CTEXT);
		} else {
			return this.getToken(emailaddressParser.CTEXT, i);
		}
	}
	public quotedpair(): QuotedpairContext[];
	public quotedpair(i: number): QuotedpairContext;
	public quotedpair(i?: number): QuotedpairContext | QuotedpairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuotedpairContext);
		} else {
			return this.getRuleContext(i, QuotedpairContext);
		}
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return emailaddressParser.RULE_comment; }
	// @Override
	public enterRule(listener: emailaddressListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: emailaddressListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: emailaddressVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


