// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/toml/toml.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { tomlListener } from "./tomlListener";

export class tomlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly WS = 10;
	public static readonly NL = 11;
	public static readonly COMMENT = 12;
	public static readonly BOOLEAN = 13;
	public static readonly BASIC_STRING = 14;
	public static readonly ML_BASIC_STRING = 15;
	public static readonly LITERAL_STRING = 16;
	public static readonly ML_LITERAL_STRING = 17;
	public static readonly FLOAT = 18;
	public static readonly INF = 19;
	public static readonly NAN = 20;
	public static readonly DEC_INT = 21;
	public static readonly HEX_INT = 22;
	public static readonly OCT_INT = 23;
	public static readonly BIN_INT = 24;
	public static readonly OFFSET_DATE_TIME = 25;
	public static readonly LOCAL_DATE_TIME = 26;
	public static readonly LOCAL_DATE = 27;
	public static readonly LOCAL_TIME = 28;
	public static readonly UNQUOTED_KEY = 29;
	public static readonly RULE_document = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_comment = 2;
	public static readonly RULE_key_value = 3;
	public static readonly RULE_key = 4;
	public static readonly RULE_simple_key = 5;
	public static readonly RULE_unquoted_key = 6;
	public static readonly RULE_quoted_key = 7;
	public static readonly RULE_dotted_key = 8;
	public static readonly RULE_value = 9;
	public static readonly RULE_string = 10;
	public static readonly RULE_integer = 11;
	public static readonly RULE_floating_point = 12;
	public static readonly RULE_bool = 13;
	public static readonly RULE_date_time = 14;
	public static readonly RULE_array = 15;
	public static readonly RULE_array_values = 16;
	public static readonly RULE_comment_or_nl = 17;
	public static readonly RULE_table = 18;
	public static readonly RULE_standard_table = 19;
	public static readonly RULE_inline_table = 20;
	public static readonly RULE_inline_table_keyvals = 21;
	public static readonly RULE_inline_table_keyvals_non_empty = 22;
	public static readonly RULE_array_table = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "expression", "comment", "key_value", "key", "simple_key", 
		"unquoted_key", "quoted_key", "dotted_key", "value", "string", "integer", 
		"floating_point", "bool", "date_time", "array", "array_values", "comment_or_nl", 
		"table", "standard_table", "inline_table", "inline_table_keyvals", "inline_table_keyvals_non_empty", 
		"array_table",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'.'", "'['", "']'", "','", "'{'", "'}'", "'[['", "']]'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "WS", "NL", "COMMENT", "BOOLEAN", "BASIC_STRING", 
		"ML_BASIC_STRING", "LITERAL_STRING", "ML_LITERAL_STRING", "FLOAT", "INF", 
		"NAN", "DEC_INT", "HEX_INT", "OCT_INT", "BIN_INT", "OFFSET_DATE_TIME", 
		"LOCAL_DATE_TIME", "LOCAL_DATE", "LOCAL_TIME", "UNQUOTED_KEY",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tomlParser._LITERAL_NAMES, tomlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tomlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "toml.g4"; }

	// @Override
	public get ruleNames(): string[] { return tomlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tomlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tomlParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, tomlParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.expression();
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tomlParser.NL) {
				{
				{
				this.state = 49;
				this.match(tomlParser.NL);
				this.state = 50;
				this.expression();
				}
				}
				this.state = 55;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, tomlParser.RULE_expression);
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tomlParser.BASIC_STRING:
			case tomlParser.LITERAL_STRING:
			case tomlParser.UNQUOTED_KEY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.key_value();
				this.state = 57;
				this.comment();
				}
				break;
			case tomlParser.T__2:
			case tomlParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 59;
				this.table();
				this.state = 60;
				this.comment();
				}
				break;
			case tomlParser.EOF:
			case tomlParser.NL:
			case tomlParser.COMMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 62;
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, tomlParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tomlParser.COMMENT) {
				{
				this.state = 65;
				this.match(tomlParser.COMMENT);
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
	public key_value(): Key_valueContext {
		let _localctx: Key_valueContext = new Key_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, tomlParser.RULE_key_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.key();
			this.state = 69;
			this.match(tomlParser.T__0);
			this.state = 70;
			this.value();
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
		this.enterRule(_localctx, 8, tomlParser.RULE_key);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.simple_key();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.dotted_key();
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
	public simple_key(): Simple_keyContext {
		let _localctx: Simple_keyContext = new Simple_keyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, tomlParser.RULE_simple_key);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tomlParser.BASIC_STRING:
			case tomlParser.LITERAL_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				this.quoted_key();
				}
				break;
			case tomlParser.UNQUOTED_KEY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				this.unquoted_key();
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
	public unquoted_key(): Unquoted_keyContext {
		let _localctx: Unquoted_keyContext = new Unquoted_keyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, tomlParser.RULE_unquoted_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(tomlParser.UNQUOTED_KEY);
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
	public quoted_key(): Quoted_keyContext {
		let _localctx: Quoted_keyContext = new Quoted_keyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, tomlParser.RULE_quoted_key);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			_la = this._input.LA(1);
			if (!(_la === tomlParser.BASIC_STRING || _la === tomlParser.LITERAL_STRING)) {
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
	public dotted_key(): Dotted_keyContext {
		let _localctx: Dotted_keyContext = new Dotted_keyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, tomlParser.RULE_dotted_key);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.simple_key();
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 85;
				this.match(tomlParser.T__1);
				this.state = 86;
				this.simple_key();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === tomlParser.T__1);
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
		this.enterRule(_localctx, 18, tomlParser.RULE_value);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tomlParser.BASIC_STRING:
			case tomlParser.ML_BASIC_STRING:
			case tomlParser.LITERAL_STRING:
			case tomlParser.ML_LITERAL_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.string();
				}
				break;
			case tomlParser.DEC_INT:
			case tomlParser.HEX_INT:
			case tomlParser.OCT_INT:
			case tomlParser.BIN_INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.integer();
				}
				break;
			case tomlParser.FLOAT:
			case tomlParser.INF:
			case tomlParser.NAN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 93;
				this.floating_point();
				}
				break;
			case tomlParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 94;
				this.bool();
				}
				break;
			case tomlParser.OFFSET_DATE_TIME:
			case tomlParser.LOCAL_DATE_TIME:
			case tomlParser.LOCAL_DATE:
			case tomlParser.LOCAL_TIME:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 95;
				this.date_time();
				}
				break;
			case tomlParser.T__2:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 96;
				this.array();
				}
				break;
			case tomlParser.T__5:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 97;
				this.inline_table();
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, tomlParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.BASIC_STRING) | (1 << tomlParser.ML_BASIC_STRING) | (1 << tomlParser.LITERAL_STRING) | (1 << tomlParser.ML_LITERAL_STRING))) !== 0))) {
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, tomlParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.DEC_INT) | (1 << tomlParser.HEX_INT) | (1 << tomlParser.OCT_INT) | (1 << tomlParser.BIN_INT))) !== 0))) {
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
	public floating_point(): Floating_pointContext {
		let _localctx: Floating_pointContext = new Floating_pointContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, tomlParser.RULE_floating_point);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.FLOAT) | (1 << tomlParser.INF) | (1 << tomlParser.NAN))) !== 0))) {
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
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, tomlParser.RULE_bool);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(tomlParser.BOOLEAN);
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
	public date_time(): Date_timeContext {
		let _localctx: Date_timeContext = new Date_timeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, tomlParser.RULE_date_time);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.OFFSET_DATE_TIME) | (1 << tomlParser.LOCAL_DATE_TIME) | (1 << tomlParser.LOCAL_DATE) | (1 << tomlParser.LOCAL_TIME))) !== 0))) {
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
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, tomlParser.RULE_array);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(tomlParser.T__2);
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 111;
				this.array_values();
				}
				break;
			}
			this.state = 114;
			this.comment_or_nl();
			this.state = 115;
			this.match(tomlParser.T__3);
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
	public array_values(): Array_valuesContext {
		let _localctx: Array_valuesContext = new Array_valuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, tomlParser.RULE_array_values);
		let _la: number;
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 117;
				this.comment_or_nl();
				this.state = 118;
				this.value();
				this.state = 119;
				this.match(tomlParser.T__4);
				this.state = 120;
				this.array_values();
				this.state = 121;
				this.comment_or_nl();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 123;
				this.comment_or_nl();
				this.state = 124;
				this.value();
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === tomlParser.T__4) {
					{
					this.state = 125;
					this.match(tomlParser.T__4);
					}
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
	public comment_or_nl(): Comment_or_nlContext {
		let _localctx: Comment_or_nlContext = new Comment_or_nlContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, tomlParser.RULE_comment_or_nl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === tomlParser.COMMENT) {
						{
						this.state = 130;
						this.match(tomlParser.COMMENT);
						}
					}

					this.state = 133;
					this.match(tomlParser.NL);
					}
					}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, tomlParser.RULE_table);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tomlParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 139;
				this.standard_table();
				}
				break;
			case tomlParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this.array_table();
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
	public standard_table(): Standard_tableContext {
		let _localctx: Standard_tableContext = new Standard_tableContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, tomlParser.RULE_standard_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(tomlParser.T__2);
			this.state = 144;
			this.key();
			this.state = 145;
			this.match(tomlParser.T__3);
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
	public inline_table(): Inline_tableContext {
		let _localctx: Inline_tableContext = new Inline_tableContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, tomlParser.RULE_inline_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(tomlParser.T__5);
			this.state = 148;
			this.inline_table_keyvals();
			this.state = 149;
			this.match(tomlParser.T__6);
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
	public inline_table_keyvals(): Inline_table_keyvalsContext {
		let _localctx: Inline_table_keyvalsContext = new Inline_table_keyvalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, tomlParser.RULE_inline_table_keyvals);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tomlParser.BASIC_STRING) | (1 << tomlParser.LITERAL_STRING) | (1 << tomlParser.UNQUOTED_KEY))) !== 0)) {
				{
				this.state = 151;
				this.inline_table_keyvals_non_empty();
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
	public inline_table_keyvals_non_empty(): Inline_table_keyvals_non_emptyContext {
		let _localctx: Inline_table_keyvals_non_emptyContext = new Inline_table_keyvals_non_emptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, tomlParser.RULE_inline_table_keyvals_non_empty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.key();
			this.state = 155;
			this.match(tomlParser.T__0);
			this.state = 156;
			this.value();
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tomlParser.T__4) {
				{
				this.state = 157;
				this.match(tomlParser.T__4);
				this.state = 158;
				this.inline_table_keyvals_non_empty();
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
	public array_table(): Array_tableContext {
		let _localctx: Array_tableContext = new Array_tableContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, tomlParser.RULE_array_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(tomlParser.T__7);
			this.state = 162;
			this.key();
			this.state = 163;
			this.match(tomlParser.T__8);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\xA8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x07\x026\n\x02\f\x02" +
		"\x0E\x029\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03B\n\x03\x03\x04\x05\x04E\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x05\x06M\n\x06\x03\x07\x03\x07\x05\x07Q\n\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x03\n\x03\n\x03\n\x06\nZ\n\n\r\n\x0E\n[\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\ve\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11s\n\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x05\x12\x81\n\x12\x05\x12\x83\n\x12\x03\x13\x05" +
		"\x13\x86\n\x13\x03\x13\x07\x13\x89\n\x13\f\x13\x0E\x13\x8C\v\x13\x03\x14" +
		"\x03\x14\x05\x14\x90\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x05\x17\x9B\n\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\xA2\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x02\x02\x02\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\x07\x04\x02\x10\x10\x12" +
		"\x12\x03\x02\x10\x13\x03\x02\x17\x1A\x03\x02\x14\x16\x03\x02\x1B\x1E\x02" +
		"\xA4\x022\x03\x02\x02\x02\x04A\x03\x02\x02\x02\x06D\x03\x02\x02\x02\b" +
		"F\x03\x02\x02\x02\nL\x03\x02\x02\x02\fP\x03\x02\x02\x02\x0ER\x03\x02\x02" +
		"\x02\x10T\x03\x02\x02\x02\x12V\x03\x02\x02\x02\x14d\x03\x02\x02\x02\x16" +
		"f\x03\x02\x02\x02\x18h\x03\x02\x02\x02\x1Aj\x03\x02\x02\x02\x1Cl\x03\x02" +
		"\x02\x02\x1En\x03\x02\x02\x02 p\x03\x02\x02\x02\"\x82\x03\x02\x02\x02" +
		"$\x8A\x03\x02\x02\x02&\x8F\x03\x02\x02\x02(\x91\x03\x02\x02\x02*\x95\x03" +
		"\x02\x02\x02,\x9A\x03\x02\x02\x02.\x9C\x03\x02\x02\x020\xA3\x03\x02\x02" +
		"\x0227\x05\x04\x03\x0234\x07\r\x02\x0246\x05\x04\x03\x0253\x03\x02\x02" +
		"\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\x03\x03\x02" +
		"\x02\x0297\x03\x02\x02\x02:;\x05\b\x05\x02;<\x05\x06\x04\x02<B\x03\x02" +
		"\x02\x02=>\x05&\x14\x02>?\x05\x06\x04\x02?B\x03\x02\x02\x02@B\x05\x06" +
		"\x04\x02A:\x03\x02\x02\x02A=\x03\x02\x02\x02A@\x03\x02\x02\x02B\x05\x03" +
		"\x02\x02\x02CE\x07\x0E\x02\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02E\x07" +
		"\x03\x02\x02\x02FG\x05\n\x06\x02GH\x07\x03\x02\x02HI\x05\x14\v\x02I\t" +
		"\x03\x02\x02\x02JM\x05\f\x07\x02KM\x05\x12\n\x02LJ\x03\x02\x02\x02LK\x03" +
		"\x02\x02\x02M\v\x03\x02\x02\x02NQ\x05\x10\t\x02OQ\x05\x0E\b\x02PN\x03" +
		"\x02\x02\x02PO\x03\x02\x02\x02Q\r\x03\x02\x02\x02RS\x07\x1F\x02\x02S\x0F" +
		"\x03\x02\x02\x02TU\t\x02\x02\x02U\x11\x03\x02\x02\x02VY\x05\f\x07\x02" +
		"WX\x07\x04\x02\x02XZ\x05\f\x07\x02YW\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\\x13\x03\x02\x02\x02]e\x05\x16" +
		"\f\x02^e\x05\x18\r\x02_e\x05\x1A\x0E\x02`e\x05\x1C\x0F\x02ae\x05\x1E\x10" +
		"\x02be\x05 \x11\x02ce\x05*\x16\x02d]\x03\x02\x02\x02d^\x03\x02\x02\x02" +
		"d_\x03\x02\x02\x02d`\x03\x02\x02\x02da\x03\x02\x02\x02db\x03\x02\x02\x02" +
		"dc\x03\x02\x02\x02e\x15\x03\x02\x02\x02fg\t\x03\x02\x02g\x17\x03\x02\x02" +
		"\x02hi\t\x04\x02\x02i\x19\x03\x02\x02\x02jk\t\x05\x02\x02k\x1B\x03\x02" +
		"\x02\x02lm\x07\x0F\x02\x02m\x1D\x03\x02\x02\x02no\t\x06\x02\x02o\x1F\x03" +
		"\x02\x02\x02pr\x07\x05\x02\x02qs\x05\"\x12\x02rq\x03\x02\x02\x02rs\x03" +
		"\x02\x02\x02st\x03\x02\x02\x02tu\x05$\x13\x02uv\x07\x06\x02\x02v!\x03" +
		"\x02\x02\x02wx\x05$\x13\x02xy\x05\x14\v\x02yz\x07\x07\x02\x02z{\x05\"" +
		"\x12\x02{|\x05$\x13\x02|\x83\x03\x02\x02\x02}~\x05$\x13\x02~\x80\x05\x14" +
		"\v\x02\x7F\x81\x07\x07\x02\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02" +
		"\x02\x02\x81\x83\x03\x02\x02\x02\x82w\x03\x02\x02\x02\x82}\x03\x02\x02" +
		"\x02\x83#\x03\x02\x02\x02\x84\x86\x07\x0E\x02\x02\x85\x84\x03\x02\x02" +
		"\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x07\r\x02" +
		"\x02\x88\x85\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02" +
		"\x02\x8A\x8B\x03\x02\x02\x02\x8B%\x03\x02\x02\x02\x8C\x8A\x03\x02\x02" +
		"\x02\x8D\x90\x05(\x15\x02\x8E\x90\x050\x19\x02\x8F\x8D\x03\x02\x02\x02" +
		"\x8F\x8E\x03\x02\x02\x02\x90\'\x03\x02\x02\x02\x91\x92\x07\x05\x02\x02" +
		"\x92\x93\x05\n\x06\x02\x93\x94\x07\x06\x02\x02\x94)\x03\x02\x02\x02\x95" +
		"\x96\x07\b\x02\x02\x96\x97\x05,\x17\x02\x97\x98\x07\t\x02\x02\x98+\x03" +
		"\x02\x02\x02\x99\x9B\x05.\x18\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03" +
		"\x02\x02\x02\x9B-\x03\x02\x02\x02\x9C\x9D\x05\n\x06\x02\x9D\x9E\x07\x03" +
		"\x02\x02\x9E\xA1\x05\x14\v\x02\x9F\xA0\x07\x07\x02\x02\xA0\xA2\x05.\x18" +
		"\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2/\x03\x02\x02" +
		"\x02\xA3\xA4\x07\n\x02\x02\xA4\xA5\x05\n\x06\x02\xA5\xA6\x07\v\x02\x02" +
		"\xA61\x03\x02\x02\x02\x117ADLP[dr\x80\x82\x85\x8A\x8F\x9A\xA1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tomlParser.__ATN) {
			tomlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tomlParser._serializedATN));
		}

		return tomlParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tomlParser.NL);
		} else {
			return this.getToken(tomlParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_document; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public key_value(): Key_valueContext | undefined {
		return this.tryGetRuleContext(0, Key_valueContext);
	}
	public comment(): CommentContext {
		return this.getRuleContext(0, CommentContext);
	}
	public table(): TableContext | undefined {
		return this.tryGetRuleContext(0, TableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_expression; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(tomlParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_comment; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


export class Key_valueContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_key_value; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterKey_value) {
			listener.enterKey_value(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitKey_value) {
			listener.exitKey_value(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public simple_key(): Simple_keyContext | undefined {
		return this.tryGetRuleContext(0, Simple_keyContext);
	}
	public dotted_key(): Dotted_keyContext | undefined {
		return this.tryGetRuleContext(0, Dotted_keyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_key; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
}


export class Simple_keyContext extends ParserRuleContext {
	public quoted_key(): Quoted_keyContext | undefined {
		return this.tryGetRuleContext(0, Quoted_keyContext);
	}
	public unquoted_key(): Unquoted_keyContext | undefined {
		return this.tryGetRuleContext(0, Unquoted_keyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_simple_key; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterSimple_key) {
			listener.enterSimple_key(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitSimple_key) {
			listener.exitSimple_key(this);
		}
	}
}


export class Unquoted_keyContext extends ParserRuleContext {
	public UNQUOTED_KEY(): TerminalNode { return this.getToken(tomlParser.UNQUOTED_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_unquoted_key; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterUnquoted_key) {
			listener.enterUnquoted_key(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitUnquoted_key) {
			listener.exitUnquoted_key(this);
		}
	}
}


export class Quoted_keyContext extends ParserRuleContext {
	public BASIC_STRING(): TerminalNode | undefined { return this.tryGetToken(tomlParser.BASIC_STRING, 0); }
	public LITERAL_STRING(): TerminalNode | undefined { return this.tryGetToken(tomlParser.LITERAL_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_quoted_key; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterQuoted_key) {
			listener.enterQuoted_key(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitQuoted_key) {
			listener.exitQuoted_key(this);
		}
	}
}


export class Dotted_keyContext extends ParserRuleContext {
	public simple_key(): Simple_keyContext[];
	public simple_key(i: number): Simple_keyContext;
	public simple_key(i?: number): Simple_keyContext | Simple_keyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Simple_keyContext);
		} else {
			return this.getRuleContext(i, Simple_keyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_dotted_key; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterDotted_key) {
			listener.enterDotted_key(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitDotted_key) {
			listener.exitDotted_key(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public floating_point(): Floating_pointContext | undefined {
		return this.tryGetRuleContext(0, Floating_pointContext);
	}
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
	}
	public date_time(): Date_timeContext | undefined {
		return this.tryGetRuleContext(0, Date_timeContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public inline_table(): Inline_tableContext | undefined {
		return this.tryGetRuleContext(0, Inline_tableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_value; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public BASIC_STRING(): TerminalNode | undefined { return this.tryGetToken(tomlParser.BASIC_STRING, 0); }
	public ML_BASIC_STRING(): TerminalNode | undefined { return this.tryGetToken(tomlParser.ML_BASIC_STRING, 0); }
	public LITERAL_STRING(): TerminalNode | undefined { return this.tryGetToken(tomlParser.LITERAL_STRING, 0); }
	public ML_LITERAL_STRING(): TerminalNode | undefined { return this.tryGetToken(tomlParser.ML_LITERAL_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_string; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DEC_INT(): TerminalNode | undefined { return this.tryGetToken(tomlParser.DEC_INT, 0); }
	public HEX_INT(): TerminalNode | undefined { return this.tryGetToken(tomlParser.HEX_INT, 0); }
	public OCT_INT(): TerminalNode | undefined { return this.tryGetToken(tomlParser.OCT_INT, 0); }
	public BIN_INT(): TerminalNode | undefined { return this.tryGetToken(tomlParser.BIN_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_integer; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


export class Floating_pointContext extends ParserRuleContext {
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(tomlParser.FLOAT, 0); }
	public INF(): TerminalNode | undefined { return this.tryGetToken(tomlParser.INF, 0); }
	public NAN(): TerminalNode | undefined { return this.tryGetToken(tomlParser.NAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_floating_point; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterFloating_point) {
			listener.enterFloating_point(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitFloating_point) {
			listener.exitFloating_point(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode { return this.getToken(tomlParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_bool; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
}


export class Date_timeContext extends ParserRuleContext {
	public OFFSET_DATE_TIME(): TerminalNode | undefined { return this.tryGetToken(tomlParser.OFFSET_DATE_TIME, 0); }
	public LOCAL_DATE_TIME(): TerminalNode | undefined { return this.tryGetToken(tomlParser.LOCAL_DATE_TIME, 0); }
	public LOCAL_DATE(): TerminalNode | undefined { return this.tryGetToken(tomlParser.LOCAL_DATE, 0); }
	public LOCAL_TIME(): TerminalNode | undefined { return this.tryGetToken(tomlParser.LOCAL_TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_date_time; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterDate_time) {
			listener.enterDate_time(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitDate_time) {
			listener.exitDate_time(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public comment_or_nl(): Comment_or_nlContext {
		return this.getRuleContext(0, Comment_or_nlContext);
	}
	public array_values(): Array_valuesContext | undefined {
		return this.tryGetRuleContext(0, Array_valuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_array; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
}


export class Array_valuesContext extends ParserRuleContext {
	public comment_or_nl(): Comment_or_nlContext[];
	public comment_or_nl(i: number): Comment_or_nlContext;
	public comment_or_nl(i?: number): Comment_or_nlContext | Comment_or_nlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comment_or_nlContext);
		} else {
			return this.getRuleContext(i, Comment_or_nlContext);
		}
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public array_values(): Array_valuesContext | undefined {
		return this.tryGetRuleContext(0, Array_valuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_array_values; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterArray_values) {
			listener.enterArray_values(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitArray_values) {
			listener.exitArray_values(this);
		}
	}
}


export class Comment_or_nlContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tomlParser.NL);
		} else {
			return this.getToken(tomlParser.NL, i);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tomlParser.COMMENT);
		} else {
			return this.getToken(tomlParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_comment_or_nl; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterComment_or_nl) {
			listener.enterComment_or_nl(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitComment_or_nl) {
			listener.exitComment_or_nl(this);
		}
	}
}


export class TableContext extends ParserRuleContext {
	public standard_table(): Standard_tableContext | undefined {
		return this.tryGetRuleContext(0, Standard_tableContext);
	}
	public array_table(): Array_tableContext | undefined {
		return this.tryGetRuleContext(0, Array_tableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_table; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitTable) {
			listener.exitTable(this);
		}
	}
}


export class Standard_tableContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_standard_table; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterStandard_table) {
			listener.enterStandard_table(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitStandard_table) {
			listener.exitStandard_table(this);
		}
	}
}


export class Inline_tableContext extends ParserRuleContext {
	public inline_table_keyvals(): Inline_table_keyvalsContext {
		return this.getRuleContext(0, Inline_table_keyvalsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_inline_table; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterInline_table) {
			listener.enterInline_table(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitInline_table) {
			listener.exitInline_table(this);
		}
	}
}


export class Inline_table_keyvalsContext extends ParserRuleContext {
	public inline_table_keyvals_non_empty(): Inline_table_keyvals_non_emptyContext | undefined {
		return this.tryGetRuleContext(0, Inline_table_keyvals_non_emptyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_inline_table_keyvals; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterInline_table_keyvals) {
			listener.enterInline_table_keyvals(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitInline_table_keyvals) {
			listener.exitInline_table_keyvals(this);
		}
	}
}


export class Inline_table_keyvals_non_emptyContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public inline_table_keyvals_non_empty(): Inline_table_keyvals_non_emptyContext | undefined {
		return this.tryGetRuleContext(0, Inline_table_keyvals_non_emptyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_inline_table_keyvals_non_empty; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterInline_table_keyvals_non_empty) {
			listener.enterInline_table_keyvals_non_empty(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitInline_table_keyvals_non_empty) {
			listener.exitInline_table_keyvals_non_empty(this);
		}
	}
}


export class Array_tableContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tomlParser.RULE_array_table; }
	// @Override
	public enterRule(listener: tomlListener): void {
		if (listener.enterArray_table) {
			listener.enterArray_table(this);
		}
	}
	// @Override
	public exitRule(listener: tomlListener): void {
		if (listener.exitArray_table) {
			listener.exitArray_table(this);
		}
	}
}


