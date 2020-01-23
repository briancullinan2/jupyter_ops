// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/properties/properties.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { propertiesListener } from "./propertiesListener";

export class propertiesParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly TEXT = 2;
	public static readonly STRING = 3;
	public static readonly COMMENT = 4;
	public static readonly TERMINATOR = 5;
	public static readonly RULE_propertiesFile = 0;
	public static readonly RULE_row = 1;
	public static readonly RULE_decl = 2;
	public static readonly RULE_key = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_comment = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"propertiesFile", "row", "decl", "key", "value", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "TEXT", "STRING", "COMMENT", "TERMINATOR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(propertiesParser._LITERAL_NAMES, propertiesParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return propertiesParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "properties.g4"; }

	// @Override
	public get ruleNames(): string[] { return propertiesParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return propertiesParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(propertiesParser._ATN, this);
	}
	// @RuleVersion(0)
	public propertiesFile(): PropertiesFileContext {
		let _localctx: PropertiesFileContext = new PropertiesFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, propertiesParser.RULE_propertiesFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.row();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === propertiesParser.TEXT || _la === propertiesParser.COMMENT);
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
	public row(): RowContext {
		let _localctx: RowContext = new RowContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, propertiesParser.RULE_row);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case propertiesParser.COMMENT:
				{
				this.state = 17;
				this.comment();
				}
				break;
			case propertiesParser.TEXT:
				{
				this.state = 18;
				this.decl();
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
	public decl(): DeclContext {
		let _localctx: DeclContext = new DeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, propertiesParser.RULE_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this.key();
			this.state = 22;
			this.match(propertiesParser.T__0);
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 23;
				this.value();
				}
				break;
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
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, propertiesParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(propertiesParser.TEXT);
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
		this.enterRule(_localctx, 8, propertiesParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			_la = this._input.LA(1);
			if (!(_la === propertiesParser.TEXT || _la === propertiesParser.STRING)) {
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, propertiesParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this.match(propertiesParser.COMMENT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07#\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x03\x03\x03\x05" +
		"\x03\x16\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\x1B\n\x04\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x02\x03\x03\x02\x04\x05\x02\x1F\x02\x0F\x03" +
		"\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06\x17\x03\x02\x02\x02\b\x1C\x03" +
		"\x02\x02\x02\n\x1E\x03\x02\x02\x02\f \x03\x02\x02\x02\x0E\x10\x05\x04" +
		"\x03\x02\x0F\x0E\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\x0F\x03\x02" +
		"\x02\x02\x11\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02\x02\x13\x16\x05\f" +
		"\x07\x02\x14\x16\x05\x06\x04\x02\x15\x13\x03\x02\x02\x02\x15\x14\x03\x02" +
		"\x02\x02\x16\x05\x03\x02\x02\x02\x17\x18\x05\b\x05\x02\x18\x1A\x07\x03" +
		"\x02\x02\x19\x1B\x05\n\x06\x02\x1A\x19\x03\x02\x02\x02\x1A\x1B\x03\x02" +
		"\x02\x02\x1B\x07\x03\x02\x02\x02\x1C\x1D\x07\x04\x02\x02\x1D\t\x03\x02" +
		"\x02\x02\x1E\x1F\t\x02\x02\x02\x1F\v\x03\x02\x02\x02 !\x07\x06\x02\x02" +
		"!\r\x03\x02\x02\x02\x05\x11\x15\x1A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!propertiesParser.__ATN) {
			propertiesParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(propertiesParser._serializedATN));
		}

		return propertiesParser.__ATN;
	}

}

export class PropertiesFileContext extends ParserRuleContext {
	public row(): RowContext[];
	public row(i: number): RowContext;
	public row(i?: number): RowContext | RowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowContext);
		} else {
			return this.getRuleContext(i, RowContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propertiesParser.RULE_propertiesFile; }
	// @Override
	public enterRule(listener: propertiesListener): void {
		if (listener.enterPropertiesFile) {
			listener.enterPropertiesFile(this);
		}
	}
	// @Override
	public exitRule(listener: propertiesListener): void {
		if (listener.exitPropertiesFile) {
			listener.exitPropertiesFile(this);
		}
	}
}


export class RowContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public decl(): DeclContext | undefined {
		return this.tryGetRuleContext(0, DeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propertiesParser.RULE_row; }
	// @Override
	public enterRule(listener: propertiesListener): void {
		if (listener.enterRow) {
			listener.enterRow(this);
		}
	}
	// @Override
	public exitRule(listener: propertiesListener): void {
		if (listener.exitRow) {
			listener.exitRow(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propertiesParser.RULE_decl; }
	// @Override
	public enterRule(listener: propertiesListener): void {
		if (listener.enterDecl) {
			listener.enterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: propertiesListener): void {
		if (listener.exitDecl) {
			listener.exitDecl(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(propertiesParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propertiesParser.RULE_key; }
	// @Override
	public enterRule(listener: propertiesListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: propertiesListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(propertiesParser.TEXT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(propertiesParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propertiesParser.RULE_value; }
	// @Override
	public enterRule(listener: propertiesListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: propertiesListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(propertiesParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propertiesParser.RULE_comment; }
	// @Override
	public enterRule(listener: propertiesListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: propertiesListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


