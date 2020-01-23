// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stellaris/stellaris.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { stellarisListener } from "./stellarisListener";

export class stellarisParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly IDENTIFIER = 9;
	public static readonly INTEGER = 10;
	public static readonly STRING = 11;
	public static readonly COMMENT = 12;
	public static readonly SPACE = 13;
	public static readonly NL = 14;
	public static readonly RULE_content = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_keyval = 2;
	public static readonly RULE_key = 3;
	public static readonly RULE_val = 4;
	public static readonly RULE_attrib = 5;
	public static readonly RULE_accessor = 6;
	public static readonly RULE_group = 7;
	public static readonly RULE_id = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"content", "expr", "keyval", "key", "val", "attrib", "accessor", "group", 
		"id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'>'", "'<'", "'.'", "'@'", "':'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "IDENTIFIER", "INTEGER", "STRING", "COMMENT", "SPACE", 
		"NL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(stellarisParser._LITERAL_NAMES, stellarisParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return stellarisParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "stellaris.g4"; }

	// @Override
	public get ruleNames(): string[] { return stellarisParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return stellarisParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(stellarisParser._ATN, this);
	}
	// @RuleVersion(0)
	public content(): ContentContext {
		let _localctx: ContentContext = new ContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, stellarisParser.RULE_content);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 18;
				this.expr();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.IDENTIFIER) | (1 << stellarisParser.INTEGER) | (1 << stellarisParser.STRING))) !== 0));
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
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, stellarisParser.RULE_expr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 23;
					this.keyval();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 26;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
	public keyval(): KeyvalContext {
		let _localctx: KeyvalContext = new KeyvalContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, stellarisParser.RULE_keyval);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.key();
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 29;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.T__0) | (1 << stellarisParser.T__1) | (1 << stellarisParser.T__2))) !== 0))) {
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
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.T__0) | (1 << stellarisParser.T__1) | (1 << stellarisParser.T__2))) !== 0));
			this.state = 34;
			this.val();
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
		this.enterRule(_localctx, 6, stellarisParser.RULE_key);
		try {
			this.state = 38;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.attrib();
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
	public val(): ValContext {
		let _localctx: ValContext = new ValContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, stellarisParser.RULE_val);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.attrib();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 42;
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
	public attrib(): AttribContext {
		let _localctx: AttribContext = new AttribContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, stellarisParser.RULE_attrib);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.id();
			this.state = 46;
			this.accessor();
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 47;
				this.attrib();
				}
				break;

			case 2:
				{
				this.state = 48;
				this.id();
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
	public accessor(): AccessorContext {
		let _localctx: AccessorContext = new AccessorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, stellarisParser.RULE_accessor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.T__3) | (1 << stellarisParser.T__4) | (1 << stellarisParser.T__5))) !== 0))) {
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, stellarisParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(stellarisParser.T__6);
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.IDENTIFIER) | (1 << stellarisParser.INTEGER) | (1 << stellarisParser.STRING))) !== 0)) {
					{
					{
					this.state = 54;
					this.expr();
					}
					}
					this.state = 59;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 60;
				this.id();
				}
				break;
			}
			this.state = 63;
			this.match(stellarisParser.T__7);
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, stellarisParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.IDENTIFIER) | (1 << stellarisParser.INTEGER) | (1 << stellarisParser.STRING))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x06\x02\x16\n\x02\r\x02\x0E" +
		"\x02\x17\x03\x03\x06\x03\x1B\n\x03\r\x03\x0E\x03\x1C\x03\x04\x03\x04\x06" +
		"\x04!\n\x04\r\x04\x0E\x04\"\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05)\n" +
		"\x05\x03\x06\x03\x06\x03\x06\x05\x06.\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x074\n\x07\x03\b\x03\b\x03\t\x03\t\x07\t:\n\t\f\t\x0E\t=\v\t" +
		"\x03\t\x05\t@\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x05\x03" +
		"\x02\x03\x05\x03\x02\x06\b\x03\x02\v\r\x02E\x02\x15\x03\x02\x02\x02\x04" +
		"\x1A\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b(\x03\x02\x02\x02\n-\x03" +
		"\x02\x02\x02\f/\x03\x02\x02\x02\x0E5\x03\x02\x02\x02\x107\x03\x02\x02" +
		"\x02\x12C\x03\x02\x02\x02\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02" +
		"\x02\x16\x17\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02" +
		"\x02\x18\x03\x03\x02\x02\x02\x19\x1B\x05\x06\x04\x02\x1A\x19\x03\x02\x02" +
		"\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1D\x03\x02\x02" +
		"\x02\x1D\x05\x03\x02\x02\x02\x1E \x05\b\x05\x02\x1F!\t\x02\x02\x02 \x1F" +
		"\x03\x02\x02\x02!\"\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02" +
		"\x02#$\x03\x02\x02\x02$%\x05\n\x06\x02%\x07\x03\x02\x02\x02&)\x05\x12" +
		"\n\x02\')\x05\f\x07\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02)\t\x03\x02" +
		"\x02\x02*.\x05\x12\n\x02+.\x05\f\x07\x02,.\x05\x10\t\x02-*\x03\x02\x02" +
		"\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.\v\x03\x02\x02\x02/0\x05\x12" +
		"\n\x0203\x05\x0E\b\x0214\x05\f\x07\x0224\x05\x12\n\x0231\x03\x02\x02\x02" +
		"32\x03\x02\x02\x024\r\x03\x02\x02\x0256\t\x03\x02\x026\x0F\x03\x02\x02" +
		"\x027?\x07\t\x02\x028:\x05\x04\x03\x0298\x03\x02\x02\x02:=\x03\x02\x02" +
		"\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<@\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02>@\x05\x12\n\x02?;\x03\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02" +
		"\x02AB\x07\n\x02\x02B\x11\x03\x02\x02\x02CD\t\x04\x02\x02D\x13\x03\x02" +
		"\x02\x02\n\x17\x1C\"(-3;?";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!stellarisParser.__ATN) {
			stellarisParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(stellarisParser._serializedATN));
		}

		return stellarisParser.__ATN;
	}

}

export class ContentContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_content; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterContent) {
			listener.enterContent(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitContent) {
			listener.exitContent(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public keyval(): KeyvalContext[];
	public keyval(i: number): KeyvalContext;
	public keyval(i?: number): KeyvalContext | KeyvalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyvalContext);
		} else {
			return this.getRuleContext(i, KeyvalContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_expr; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class KeyvalContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public val(): ValContext {
		return this.getRuleContext(0, ValContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_keyval; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterKeyval) {
			listener.enterKeyval(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitKeyval) {
			listener.exitKeyval(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public attrib(): AttribContext | undefined {
		return this.tryGetRuleContext(0, AttribContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_key; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
}


export class ValContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public attrib(): AttribContext | undefined {
		return this.tryGetRuleContext(0, AttribContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_val; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterVal) {
			listener.enterVal(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitVal) {
			listener.exitVal(this);
		}
	}
}


export class AttribContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public accessor(): AccessorContext {
		return this.getRuleContext(0, AccessorContext);
	}
	public attrib(): AttribContext | undefined {
		return this.tryGetRuleContext(0, AttribContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_attrib; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterAttrib) {
			listener.enterAttrib(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitAttrib) {
			listener.exitAttrib(this);
		}
	}
}


export class AccessorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_accessor; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterAccessor) {
			listener.enterAccessor(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitAccessor) {
			listener.exitAccessor(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_group; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(stellarisParser.IDENTIFIER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(stellarisParser.STRING, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(stellarisParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stellarisParser.RULE_id; }
	// @Override
	public enterRule(listener: stellarisListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: stellarisListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


