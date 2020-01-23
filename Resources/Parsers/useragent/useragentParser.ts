// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/useragent/useragent.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { useragentListener } from "./useragentListener";

export class useragentParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly COMMENT = 3;
	public static readonly STRING = 4;
	public static readonly WS = 5;
	public static readonly RULE_prog = 0;
	public static readonly RULE_product = 1;
	public static readonly RULE_name = 2;
	public static readonly RULE_version = 3;
	public static readonly RULE_comment = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "product", "name", "version", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'/'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "COMMENT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(useragentParser._LITERAL_NAMES, useragentParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return useragentParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "useragent.g4"; }

	// @Override
	public get ruleNames(): string[] { return useragentParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return useragentParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(useragentParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, useragentParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 10;
				this.product();
				this.state = 12;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === useragentParser.COMMENT) {
					{
					this.state = 11;
					this.comment();
					}
				}

				}
				}
				this.state = 16;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === useragentParser.STRING);
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
	public product(): ProductContext {
		let _localctx: ProductContext = new ProductContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, useragentParser.RULE_product);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.name();
			this.state = 19;
			this.match(useragentParser.T__0);
			this.state = 20;
			this.version();
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
		this.enterRule(_localctx, 4, useragentParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(useragentParser.STRING);
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
	public version(): VersionContext {
		let _localctx: VersionContext = new VersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, useragentParser.RULE_version);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.match(useragentParser.STRING);
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === useragentParser.T__1) {
				{
				{
				this.state = 25;
				this.match(useragentParser.T__1);
				this.state = 26;
				this.match(useragentParser.STRING);
				}
				}
				this.state = 31;
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, useragentParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.match(useragentParser.COMMENT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07%\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x05\x02\x0F\n\x02\x06\x02\x11\n\x02\r\x02\x0E\x02\x12\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\x1E\n\x05\f\x05\x0E\x05!\v\x05\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02\"\x02\x10\x03\x02\x02" +
		"\x02\x04\x14\x03\x02\x02\x02\x06\x18\x03\x02\x02\x02\b\x1A\x03\x02\x02" +
		"\x02\n\"\x03\x02\x02\x02\f\x0E\x05\x04\x03\x02\r\x0F\x05\n\x06\x02\x0E" +
		"\r\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x11\x03\x02\x02\x02\x10" +
		"\f\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12" +
		"\x13\x03\x02\x02\x02\x13\x03\x03\x02\x02\x02\x14\x15\x05\x06\x04\x02\x15" +
		"\x16\x07\x03\x02\x02\x16\x17\x05\b\x05\x02\x17\x05\x03\x02\x02\x02\x18" +
		"\x19\x07\x06\x02\x02\x19\x07\x03\x02\x02\x02\x1A\x1F\x07\x06\x02\x02\x1B" +
		"\x1C\x07\x04\x02\x02\x1C\x1E\x07\x06\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E" +
		"!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \t\x03" +
		"\x02\x02\x02!\x1F\x03\x02\x02\x02\"#\x07\x05\x02\x02#\v\x03\x02\x02\x02" +
		"\x05\x0E\x12\x1F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!useragentParser.__ATN) {
			useragentParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(useragentParser._serializedATN));
		}

		return useragentParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public product(): ProductContext[];
	public product(i: number): ProductContext;
	public product(i?: number): ProductContext | ProductContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProductContext);
		} else {
			return this.getRuleContext(i, ProductContext);
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
	public get ruleIndex(): number { return useragentParser.RULE_prog; }
	// @Override
	public enterRule(listener: useragentListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: useragentListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class ProductContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public version(): VersionContext {
		return this.getRuleContext(0, VersionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return useragentParser.RULE_product; }
	// @Override
	public enterRule(listener: useragentListener): void {
		if (listener.enterProduct) {
			listener.enterProduct(this);
		}
	}
	// @Override
	public exitRule(listener: useragentListener): void {
		if (listener.exitProduct) {
			listener.exitProduct(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(useragentParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return useragentParser.RULE_name; }
	// @Override
	public enterRule(listener: useragentListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: useragentListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(useragentParser.STRING);
		} else {
			return this.getToken(useragentParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return useragentParser.RULE_version; }
	// @Override
	public enterRule(listener: useragentListener): void {
		if (listener.enterVersion) {
			listener.enterVersion(this);
		}
	}
	// @Override
	public exitRule(listener: useragentListener): void {
		if (listener.exitVersion) {
			listener.exitVersion(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(useragentParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return useragentParser.RULE_comment; }
	// @Override
	public enterRule(listener: useragentListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: useragentListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


