// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cookie/cookie.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { cookieListener } from "./cookieListener";
import { cookieVisitor } from "./cookieVisitor";


export class cookieParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly STRING = 3;
	public static readonly TOKEN = 4;
	public static readonly DIGIT = 5;
	public static readonly WS = 6;
	public static readonly RULE_cookie = 0;
	public static readonly RULE_name = 1;
	public static readonly RULE_av_pairs = 2;
	public static readonly RULE_av_pair = 3;
	public static readonly RULE_attr = 4;
	public static readonly RULE_value = 5;
	public static readonly RULE_word = 6;
	public static readonly RULE_token = 7;
	public static readonly RULE_quoted_string = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cookie", "name", "av_pairs", "av_pair", "attr", "value", "word", "token", 
		"quoted_string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "STRING", "TOKEN", "DIGIT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(cookieParser._LITERAL_NAMES, cookieParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return cookieParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "cookie.g4"; }

	// @Override
	public get ruleNames(): string[] { return cookieParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return cookieParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(cookieParser._ATN, this);
	}
	// @RuleVersion(0)
	public cookie(): CookieContext {
		let _localctx: CookieContext = new CookieContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, cookieParser.RULE_cookie);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cookieParser.TOKEN) {
				{
				{
				this.state = 18;
				this.av_pairs();
				}
				}
				this.state = 23;
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
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, cookieParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.attr();
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
	public av_pairs(): Av_pairsContext {
		let _localctx: Av_pairsContext = new Av_pairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, cookieParser.RULE_av_pairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.av_pair();
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cookieParser.T__0) {
				{
				{
				this.state = 27;
				this.match(cookieParser.T__0);
				this.state = 28;
				this.av_pair();
				}
				}
				this.state = 33;
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
	public av_pair(): Av_pairContext {
		let _localctx: Av_pairContext = new Av_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, cookieParser.RULE_av_pair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.attr();
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cookieParser.T__1) {
				{
				this.state = 35;
				this.match(cookieParser.T__1);
				this.state = 36;
				this.value();
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
	public attr(): AttrContext {
		let _localctx: AttrContext = new AttrContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, cookieParser.RULE_attr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, cookieParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.word();
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
		this.enterRule(_localctx, 12, cookieParser.RULE_word);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cookieParser.TOKEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.token();
				}
				break;
			case cookieParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.quoted_string();
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
	public token(): TokenContext {
		let _localctx: TokenContext = new TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, cookieParser.RULE_token);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(cookieParser.TOKEN);
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
	public quoted_string(): Quoted_stringContext {
		let _localctx: Quoted_stringContext = new Quoted_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, cookieParser.RULE_quoted_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(cookieParser.STRING);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b6\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
		"\x02\x19\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04 \n\x04" +
		"\f\x04\x0E\x04#\v\x04\x03\x05\x03\x05\x03\x05\x05\x05(\n\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x05\b0\n\b\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x02\x02\x020\x02\x17\x03\x02\x02\x02\x04\x1A\x03\x02\x02" +
		"\x02\x06\x1C\x03\x02\x02\x02\b$\x03\x02\x02\x02\n)\x03\x02\x02\x02\f+" +
		"\x03\x02\x02\x02\x0E/\x03\x02\x02\x02\x101\x03\x02\x02\x02\x123\x03\x02" +
		"\x02\x02\x14\x16\x05\x06\x04\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02" +
		"\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02" +
		"\x02\x02\x19\x17\x03\x02\x02\x02\x1A\x1B\x05\n\x06\x02\x1B\x05\x03\x02" +
		"\x02\x02\x1C!\x05\b\x05\x02\x1D\x1E\x07\x03\x02\x02\x1E \x05\b\x05\x02" +
		"\x1F\x1D\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03" +
		"\x02\x02\x02\"\x07\x03\x02\x02\x02#!\x03\x02\x02\x02$\'\x05\n\x06\x02" +
		"%&\x07\x04\x02\x02&(\x05\f\x07\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02" +
		"(\t\x03\x02\x02\x02)*\x05\x10\t\x02*\v\x03\x02\x02\x02+,\x05\x0E\b\x02" +
		",\r\x03\x02\x02\x02-0\x05\x10\t\x02.0\x05\x12\n\x02/-\x03\x02\x02\x02" +
		"/.\x03\x02\x02\x020\x0F\x03\x02\x02\x0212\x07\x06\x02\x022\x11\x03\x02" +
		"\x02\x0234\x07\x05\x02\x024\x13\x03\x02\x02\x02\x06\x17!\'/";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!cookieParser.__ATN) {
			cookieParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(cookieParser._serializedATN));
		}

		return cookieParser.__ATN;
	}

}

export class CookieContext extends ParserRuleContext {
	public av_pairs(): Av_pairsContext[];
	public av_pairs(i: number): Av_pairsContext;
	public av_pairs(i?: number): Av_pairsContext | Av_pairsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Av_pairsContext);
		} else {
			return this.getRuleContext(i, Av_pairsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_cookie; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterCookie) {
			listener.enterCookie(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitCookie) {
			listener.exitCookie(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitCookie) {
			return visitor.visitCookie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public attr(): AttrContext {
		return this.getRuleContext(0, AttrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_name; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Av_pairsContext extends ParserRuleContext {
	public av_pair(): Av_pairContext[];
	public av_pair(i: number): Av_pairContext;
	public av_pair(i?: number): Av_pairContext | Av_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Av_pairContext);
		} else {
			return this.getRuleContext(i, Av_pairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_av_pairs; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterAv_pairs) {
			listener.enterAv_pairs(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitAv_pairs) {
			listener.exitAv_pairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitAv_pairs) {
			return visitor.visitAv_pairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Av_pairContext extends ParserRuleContext {
	public attr(): AttrContext {
		return this.getRuleContext(0, AttrContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_av_pair; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterAv_pair) {
			listener.enterAv_pair(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitAv_pair) {
			listener.exitAv_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitAv_pair) {
			return visitor.visitAv_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrContext extends ParserRuleContext {
	public token(): TokenContext {
		return this.getRuleContext(0, TokenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_attr; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterAttr) {
			listener.enterAttr(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitAttr) {
			listener.exitAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitAttr) {
			return visitor.visitAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public word(): WordContext {
		return this.getRuleContext(0, WordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_value; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WordContext extends ParserRuleContext {
	public token(): TokenContext | undefined {
		return this.tryGetRuleContext(0, TokenContext);
	}
	public quoted_string(): Quoted_stringContext | undefined {
		return this.tryGetRuleContext(0, Quoted_stringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_word; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterWord) {
			listener.enterWord(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitWord) {
			listener.exitWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitWord) {
			return visitor.visitWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokenContext extends ParserRuleContext {
	public TOKEN(): TerminalNode { return this.getToken(cookieParser.TOKEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_token; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterToken) {
			listener.enterToken(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitToken) {
			listener.exitToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitToken) {
			return visitor.visitToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quoted_stringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(cookieParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cookieParser.RULE_quoted_string; }
	// @Override
	public enterRule(listener: cookieListener): void {
		if (listener.enterQuoted_string) {
			listener.enterQuoted_string(this);
		}
	}
	// @Override
	public exitRule(listener: cookieListener): void {
		if (listener.exitQuoted_string) {
			listener.exitQuoted_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cookieVisitor<Result>): Result {
		if (visitor.visitQuoted_string) {
			return visitor.visitQuoted_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


