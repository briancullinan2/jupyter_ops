// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clojure/Clojure.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ClojureListener } from "./ClojureListener";

export class ClojureParser extends Parser {
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
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly STRING = 21;
	public static readonly FLOAT = 22;
	public static readonly HEX = 23;
	public static readonly BIN = 24;
	public static readonly LONG = 25;
	public static readonly BIGN = 26;
	public static readonly CHAR_U = 27;
	public static readonly CHAR_NAMED = 28;
	public static readonly CHAR_ANY = 29;
	public static readonly NIL = 30;
	public static readonly BOOLEAN = 31;
	public static readonly SYMBOL = 32;
	public static readonly NS_SYMBOL = 33;
	public static readonly PARAM_NAME = 34;
	public static readonly TRASH = 35;
	public static readonly RULE_file = 0;
	public static readonly RULE_form = 1;
	public static readonly RULE_forms = 2;
	public static readonly RULE_list = 3;
	public static readonly RULE_vector = 4;
	public static readonly RULE_map = 5;
	public static readonly RULE_set = 6;
	public static readonly RULE_reader_macro = 7;
	public static readonly RULE_quote = 8;
	public static readonly RULE_backtick = 9;
	public static readonly RULE_unquote = 10;
	public static readonly RULE_unquote_splicing = 11;
	public static readonly RULE_tag = 12;
	public static readonly RULE_deref = 13;
	public static readonly RULE_gensym = 14;
	public static readonly RULE_lambda = 15;
	public static readonly RULE_meta_data = 16;
	public static readonly RULE_var_quote = 17;
	public static readonly RULE_host_expr = 18;
	public static readonly RULE_discard = 19;
	public static readonly RULE_dispatch = 20;
	public static readonly RULE_regex = 21;
	public static readonly RULE_literal = 22;
	public static readonly RULE_string = 23;
	public static readonly RULE_hex = 24;
	public static readonly RULE_bin = 25;
	public static readonly RULE_bign = 26;
	public static readonly RULE_number = 27;
	public static readonly RULE_character = 28;
	public static readonly RULE_named_char = 29;
	public static readonly RULE_any_char = 30;
	public static readonly RULE_u_hex_quad = 31;
	public static readonly RULE_nil = 32;
	public static readonly RULE_keyword = 33;
	public static readonly RULE_simple_keyword = 34;
	public static readonly RULE_macro_keyword = 35;
	public static readonly RULE_symbol = 36;
	public static readonly RULE_simple_sym = 37;
	public static readonly RULE_ns_symbol = 38;
	public static readonly RULE_param_name = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "form", "forms", "list", "vector", "map", "set", "reader_macro", 
		"quote", "backtick", "unquote", "unquote_splicing", "tag", "deref", "gensym", 
		"lambda", "meta_data", "var_quote", "host_expr", "discard", "dispatch", 
		"regex", "literal", "string", "hex", "bin", "bign", "number", "character", 
		"named_char", "any_char", "u_hex_quad", "nil", "keyword", "simple_keyword", 
		"macro_keyword", "symbol", "simple_sym", "ns_symbol", "param_name",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'['", "']'", "'{'", "'}'", "'#{'", "'''", "'`'", 
		"'~'", "'~@'", "'^'", "'@'", "'#'", "'#('", "'#^'", "'#''", "'#+'", "'#_'", 
		"':'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'nil'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"STRING", "FLOAT", "HEX", "BIN", "LONG", "BIGN", "CHAR_U", "CHAR_NAMED", 
		"CHAR_ANY", "NIL", "BOOLEAN", "SYMBOL", "NS_SYMBOL", "PARAM_NAME", "TRASH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ClojureParser._LITERAL_NAMES, ClojureParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ClojureParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Clojure.g4"; }

	// @Override
	public get ruleNames(): string[] { return ClojureParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ClojureParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ClojureParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ClojureParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
				{
				{
				this.state = 80;
				this.form();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
			this.match(ClojureParser.EOF);
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
	public form(): FormContext {
		let _localctx: FormContext = new FormContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ClojureParser.RULE_form);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.list();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 90;
				this.vector();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 91;
				this.map();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 92;
				this.reader_macro();
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
	public forms(): FormsContext {
		let _localctx: FormsContext = new FormsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ClojureParser.RULE_forms);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
				{
				{
				this.state = 95;
				this.form();
				}
				}
				this.state = 100;
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ClojureParser.RULE_list);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(ClojureParser.T__0);
			this.state = 102;
			this.forms();
			this.state = 103;
			this.match(ClojureParser.T__1);
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
	public vector(): VectorContext {
		let _localctx: VectorContext = new VectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ClojureParser.RULE_vector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(ClojureParser.T__2);
			this.state = 106;
			this.forms();
			this.state = 107;
			this.match(ClojureParser.T__3);
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
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ClojureParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(ClojureParser.T__4);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
				{
				{
				this.state = 110;
				this.form();
				this.state = 111;
				this.form();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
			this.match(ClojureParser.T__5);
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
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ClojureParser.RULE_set);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(ClojureParser.T__6);
			this.state = 121;
			this.forms();
			this.state = 122;
			this.match(ClojureParser.T__5);
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
	public reader_macro(): Reader_macroContext {
		let _localctx: Reader_macroContext = new Reader_macroContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ClojureParser.RULE_reader_macro);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.lambda();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.meta_data();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.regex();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 127;
				this.var_quote();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 128;
				this.host_expr();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 129;
				this.set();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 130;
				this.tag();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 131;
				this.discard();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 132;
				this.dispatch();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 133;
				this.deref();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 134;
				this.quote();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 135;
				this.backtick();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 136;
				this.unquote();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 137;
				this.unquote_splicing();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 138;
				this.gensym();
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
	public quote(): QuoteContext {
		let _localctx: QuoteContext = new QuoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ClojureParser.RULE_quote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(ClojureParser.T__7);
			this.state = 142;
			this.form();
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
	public backtick(): BacktickContext {
		let _localctx: BacktickContext = new BacktickContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ClojureParser.RULE_backtick);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(ClojureParser.T__8);
			this.state = 145;
			this.form();
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
	public unquote(): UnquoteContext {
		let _localctx: UnquoteContext = new UnquoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ClojureParser.RULE_unquote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(ClojureParser.T__9);
			this.state = 148;
			this.form();
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
	public unquote_splicing(): Unquote_splicingContext {
		let _localctx: Unquote_splicingContext = new Unquote_splicingContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ClojureParser.RULE_unquote_splicing);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(ClojureParser.T__10);
			this.state = 151;
			this.form();
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
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ClojureParser.RULE_tag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(ClojureParser.T__11);
			this.state = 154;
			this.form();
			this.state = 155;
			this.form();
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
	public deref(): DerefContext {
		let _localctx: DerefContext = new DerefContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ClojureParser.RULE_deref);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(ClojureParser.T__12);
			this.state = 158;
			this.form();
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
	public gensym(): GensymContext {
		let _localctx: GensymContext = new GensymContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ClojureParser.RULE_gensym);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(ClojureParser.SYMBOL);
			this.state = 161;
			this.match(ClojureParser.T__13);
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
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ClojureParser.RULE_lambda);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(ClojureParser.T__14);
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClojureParser.T__0) | (1 << ClojureParser.T__2) | (1 << ClojureParser.T__4) | (1 << ClojureParser.T__6) | (1 << ClojureParser.T__7) | (1 << ClojureParser.T__8) | (1 << ClojureParser.T__9) | (1 << ClojureParser.T__10) | (1 << ClojureParser.T__11) | (1 << ClojureParser.T__12) | (1 << ClojureParser.T__13) | (1 << ClojureParser.T__14) | (1 << ClojureParser.T__15) | (1 << ClojureParser.T__16) | (1 << ClojureParser.T__17) | (1 << ClojureParser.T__18) | (1 << ClojureParser.T__19) | (1 << ClojureParser.STRING) | (1 << ClojureParser.FLOAT) | (1 << ClojureParser.HEX) | (1 << ClojureParser.BIN) | (1 << ClojureParser.LONG) | (1 << ClojureParser.BIGN) | (1 << ClojureParser.CHAR_U) | (1 << ClojureParser.CHAR_NAMED) | (1 << ClojureParser.CHAR_ANY) | (1 << ClojureParser.NIL) | (1 << ClojureParser.BOOLEAN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ClojureParser.SYMBOL - 32)) | (1 << (ClojureParser.NS_SYMBOL - 32)) | (1 << (ClojureParser.PARAM_NAME - 32)))) !== 0)) {
				{
				{
				this.state = 164;
				this.form();
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 170;
			this.match(ClojureParser.T__1);
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
	public meta_data(): Meta_dataContext {
		let _localctx: Meta_dataContext = new Meta_dataContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ClojureParser.RULE_meta_data);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(ClojureParser.T__15);
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 173;
				this.map();
				this.state = 174;
				this.form();
				}
				break;

			case 2:
				{
				this.state = 176;
				this.form();
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
	public var_quote(): Var_quoteContext {
		let _localctx: Var_quoteContext = new Var_quoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ClojureParser.RULE_var_quote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(ClojureParser.T__16);
			this.state = 180;
			this.symbol();
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
	public host_expr(): Host_exprContext {
		let _localctx: Host_exprContext = new Host_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ClojureParser.RULE_host_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(ClojureParser.T__17);
			this.state = 183;
			this.form();
			this.state = 184;
			this.form();
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
	public discard(): DiscardContext {
		let _localctx: DiscardContext = new DiscardContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ClojureParser.RULE_discard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(ClojureParser.T__18);
			this.state = 187;
			this.form();
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
	public dispatch(): DispatchContext {
		let _localctx: DispatchContext = new DispatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ClojureParser.RULE_dispatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(ClojureParser.T__13);
			this.state = 190;
			this.symbol();
			this.state = 191;
			this.form();
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
	public regex(): RegexContext {
		let _localctx: RegexContext = new RegexContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ClojureParser.RULE_regex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(ClojureParser.T__13);
			this.state = 194;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ClojureParser.RULE_literal);
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClojureParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.string();
				}
				break;
			case ClojureParser.FLOAT:
			case ClojureParser.HEX:
			case ClojureParser.BIN:
			case ClojureParser.LONG:
			case ClojureParser.BIGN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 197;
				this.number();
				}
				break;
			case ClojureParser.CHAR_U:
			case ClojureParser.CHAR_NAMED:
			case ClojureParser.CHAR_ANY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 198;
				this.character();
				}
				break;
			case ClojureParser.NIL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 199;
				this.nil();
				}
				break;
			case ClojureParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 200;
				this.match(ClojureParser.BOOLEAN);
				}
				break;
			case ClojureParser.T__19:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 201;
				this.keyword();
				}
				break;
			case ClojureParser.SYMBOL:
			case ClojureParser.NS_SYMBOL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 202;
				this.symbol();
				}
				break;
			case ClojureParser.PARAM_NAME:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 203;
				this.param_name();
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
		this.enterRule(_localctx, 46, ClojureParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(ClojureParser.STRING);
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
	public hex(): HexContext {
		let _localctx: HexContext = new HexContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ClojureParser.RULE_hex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(ClojureParser.HEX);
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
	public bin(): BinContext {
		let _localctx: BinContext = new BinContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ClojureParser.RULE_bin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(ClojureParser.BIN);
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
	public bign(): BignContext {
		let _localctx: BignContext = new BignContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ClojureParser.RULE_bign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(ClojureParser.BIGN);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ClojureParser.RULE_number);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClojureParser.FLOAT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 214;
				this.match(ClojureParser.FLOAT);
				}
				break;
			case ClojureParser.HEX:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 215;
				this.hex();
				}
				break;
			case ClojureParser.BIN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 216;
				this.bin();
				}
				break;
			case ClojureParser.BIGN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 217;
				this.bign();
				}
				break;
			case ClojureParser.LONG:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 218;
				this.match(ClojureParser.LONG);
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
	public character(): CharacterContext {
		let _localctx: CharacterContext = new CharacterContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ClojureParser.RULE_character);
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClojureParser.CHAR_NAMED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.named_char();
				}
				break;
			case ClojureParser.CHAR_U:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.u_hex_quad();
				}
				break;
			case ClojureParser.CHAR_ANY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 223;
				this.any_char();
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
	public named_char(): Named_charContext {
		let _localctx: Named_charContext = new Named_charContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ClojureParser.RULE_named_char);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(ClojureParser.CHAR_NAMED);
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
	public any_char(): Any_charContext {
		let _localctx: Any_charContext = new Any_charContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ClojureParser.RULE_any_char);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.match(ClojureParser.CHAR_ANY);
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
	public u_hex_quad(): U_hex_quadContext {
		let _localctx: U_hex_quadContext = new U_hex_quadContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ClojureParser.RULE_u_hex_quad);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(ClojureParser.CHAR_U);
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
	public nil(): NilContext {
		let _localctx: NilContext = new NilContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ClojureParser.RULE_nil);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(ClojureParser.NIL);
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
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ClojureParser.RULE_keyword);
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 234;
				this.macro_keyword();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 235;
				this.simple_keyword();
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
	public simple_keyword(): Simple_keywordContext {
		let _localctx: Simple_keywordContext = new Simple_keywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ClojureParser.RULE_simple_keyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(ClojureParser.T__19);
			this.state = 239;
			this.symbol();
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
	public macro_keyword(): Macro_keywordContext {
		let _localctx: Macro_keywordContext = new Macro_keywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ClojureParser.RULE_macro_keyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(ClojureParser.T__19);
			this.state = 242;
			this.match(ClojureParser.T__19);
			this.state = 243;
			this.symbol();
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ClojureParser.RULE_symbol);
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClojureParser.NS_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.ns_symbol();
				}
				break;
			case ClojureParser.SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 246;
				this.simple_sym();
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
	public simple_sym(): Simple_symContext {
		let _localctx: Simple_symContext = new Simple_symContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ClojureParser.RULE_simple_sym);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(ClojureParser.SYMBOL);
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
	public ns_symbol(): Ns_symbolContext {
		let _localctx: Ns_symbolContext = new Ns_symbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ClojureParser.RULE_ns_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(ClojureParser.NS_SYMBOL);
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
	public param_name(): Param_nameContext {
		let _localctx: Param_nameContext = new Param_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ClojureParser.RULE_param_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(ClojureParser.PARAM_NAME);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\u0102\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x07\x02" +
		"T\n\x02\f\x02\x0E\x02W\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03`\n\x03\x03\x04\x07\x04c\n\x04\f\x04\x0E\x04f\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07t\n\x07\f\x07\x0E\x07w\v\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8E\n\t\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x07\x11\xA8\n\x11\f\x11\x0E\x11\xAB\v\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB4\n\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xCF\n\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\xDE\n\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\xE3\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03" +
		"#\x03#\x05#\xEF\n#\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x05&\xFA" +
		"\n&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x02\x02\x02*\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02\x02\x02\x02\xFF\x02U\x03\x02\x02\x02\x04_\x03\x02\x02" +
		"\x02\x06d\x03\x02\x02\x02\bg\x03\x02\x02\x02\nk\x03\x02\x02\x02\fo\x03" +
		"\x02\x02\x02\x0Ez\x03\x02\x02\x02\x10\x8D\x03\x02\x02\x02\x12\x8F\x03" +
		"\x02\x02\x02\x14\x92\x03\x02\x02\x02\x16\x95\x03\x02\x02\x02\x18\x98\x03" +
		"\x02\x02\x02\x1A\x9B\x03\x02\x02\x02\x1C\x9F\x03\x02\x02\x02\x1E\xA2\x03" +
		"\x02\x02\x02 \xA5\x03\x02\x02\x02\"\xAE\x03\x02\x02\x02$\xB5\x03\x02\x02" +
		"\x02&\xB8\x03\x02\x02\x02(\xBC\x03\x02\x02\x02*\xBF\x03\x02\x02\x02,\xC3" +
		"\x03\x02\x02\x02.\xCE\x03\x02\x02\x020\xD0\x03\x02\x02\x022\xD2\x03\x02" +
		"\x02\x024\xD4\x03\x02\x02\x026\xD6\x03\x02\x02\x028\xDD\x03\x02\x02\x02" +
		":\xE2\x03\x02\x02\x02<\xE4\x03\x02\x02\x02>\xE6\x03\x02\x02\x02@\xE8\x03" +
		"\x02\x02\x02B\xEA\x03\x02\x02\x02D\xEE\x03\x02\x02\x02F\xF0\x03\x02\x02" +
		"\x02H\xF3\x03\x02\x02\x02J\xF9\x03\x02\x02\x02L\xFB\x03\x02\x02\x02N\xFD" +
		"\x03\x02\x02\x02P\xFF\x03\x02\x02\x02RT\x05\x04\x03\x02SR\x03\x02\x02" +
		"\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02" +
		"\x02WU\x03\x02\x02\x02XY\x07\x02\x02\x03Y\x03\x03\x02\x02\x02Z`\x05.\x18" +
		"\x02[`\x05\b\x05\x02\\`\x05\n\x06\x02]`\x05\f\x07\x02^`\x05\x10\t\x02" +
		"_Z\x03\x02\x02\x02_[\x03\x02\x02\x02_\\\x03\x02\x02\x02_]\x03\x02\x02" +
		"\x02_^\x03\x02\x02\x02`\x05\x03\x02\x02\x02ac\x05\x04\x03\x02ba\x03\x02" +
		"\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\x07\x03" +
		"\x02\x02\x02fd\x03\x02\x02\x02gh\x07\x03\x02\x02hi\x05\x06\x04\x02ij\x07" +
		"\x04\x02\x02j\t\x03\x02\x02\x02kl\x07\x05\x02\x02lm\x05\x06\x04\x02mn" +
		"\x07\x06\x02\x02n\v\x03\x02\x02\x02ou\x07\x07\x02\x02pq\x05\x04\x03\x02" +
		"qr\x05\x04\x03\x02rt\x03\x02\x02\x02sp\x03\x02\x02\x02tw\x03\x02\x02\x02" +
		"us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wu\x03\x02\x02\x02" +
		"xy\x07\b\x02\x02y\r\x03\x02\x02\x02z{\x07\t\x02\x02{|\x05\x06\x04\x02" +
		"|}\x07\b\x02\x02}\x0F\x03\x02\x02\x02~\x8E\x05 \x11\x02\x7F\x8E\x05\"" +
		"\x12\x02\x80\x8E\x05,\x17\x02\x81\x8E\x05$\x13\x02\x82\x8E\x05&\x14\x02" +
		"\x83\x8E\x05\x0E\b\x02\x84\x8E\x05\x1A\x0E\x02\x85\x8E\x05(\x15\x02\x86" +
		"\x8E\x05*\x16\x02\x87\x8E\x05\x1C\x0F\x02\x88\x8E\x05\x12\n\x02\x89\x8E" +
		"\x05\x14\v\x02\x8A\x8E\x05\x16\f\x02\x8B\x8E\x05\x18\r\x02\x8C\x8E\x05" +
		"\x1E\x10\x02\x8D~\x03\x02\x02\x02\x8D\x7F\x03\x02\x02\x02\x8D\x80\x03" +
		"\x02\x02\x02\x8D\x81\x03\x02\x02\x02\x8D\x82\x03\x02\x02\x02\x8D\x83\x03" +
		"\x02\x02\x02\x8D\x84\x03\x02\x02\x02\x8D\x85\x03\x02\x02\x02\x8D\x86\x03" +
		"\x02\x02\x02\x8D\x87\x03\x02\x02\x02\x8D\x88\x03\x02\x02\x02\x8D\x89\x03" +
		"\x02\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8C\x03" +
		"\x02\x02\x02\x8E\x11\x03\x02\x02\x02\x8F\x90\x07\n\x02\x02\x90\x91\x05" +
		"\x04\x03\x02\x91\x13\x03\x02\x02\x02\x92\x93\x07\v\x02\x02\x93\x94\x05" +
		"\x04\x03\x02\x94\x15\x03\x02\x02\x02\x95\x96\x07\f\x02\x02\x96\x97\x05" +
		"\x04\x03\x02\x97\x17\x03\x02\x02\x02\x98\x99\x07\r\x02\x02\x99\x9A\x05" +
		"\x04\x03\x02\x9A\x19\x03\x02\x02\x02\x9B\x9C\x07\x0E\x02\x02\x9C\x9D\x05" +
		"\x04\x03\x02\x9D\x9E\x05\x04\x03\x02\x9E\x1B\x03\x02\x02\x02\x9F\xA0\x07" +
		"\x0F\x02\x02\xA0\xA1\x05\x04\x03\x02\xA1\x1D\x03\x02\x02\x02\xA2\xA3\x07" +
		"\"\x02\x02\xA3\xA4\x07\x10\x02\x02\xA4\x1F\x03\x02\x02\x02\xA5\xA9\x07" +
		"\x11\x02\x02\xA6\xA8\x05\x04\x03\x02\xA7\xA6\x03\x02\x02\x02\xA8\xAB\x03" +
		"\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03" +
		"\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD\x07\x04\x02\x02\xAD!\x03" +
		"\x02\x02\x02\xAE\xB3\x07\x12\x02\x02\xAF\xB0\x05\f\x07\x02\xB0\xB1\x05" +
		"\x04\x03\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB4\x05\x04\x03\x02\xB3\xAF\x03" +
		"\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4#\x03\x02\x02\x02\xB5\xB6\x07" +
		"\x13\x02\x02\xB6\xB7\x05J&\x02\xB7%\x03\x02\x02\x02\xB8\xB9\x07\x14\x02" +
		"\x02\xB9\xBA\x05\x04\x03\x02\xBA\xBB\x05\x04\x03\x02\xBB\'\x03\x02\x02" +
		"\x02\xBC\xBD\x07\x15\x02\x02\xBD\xBE\x05\x04\x03\x02\xBE)\x03\x02\x02" +
		"\x02\xBF\xC0\x07\x10\x02\x02\xC0\xC1\x05J&\x02\xC1\xC2\x05\x04\x03\x02" +
		"\xC2+\x03\x02\x02\x02\xC3\xC4\x07\x10\x02\x02\xC4\xC5\x050\x19\x02\xC5" +
		"-\x03\x02\x02\x02\xC6\xCF\x050\x19\x02\xC7\xCF\x058\x1D\x02\xC8\xCF\x05" +
		":\x1E\x02\xC9\xCF\x05B\"\x02\xCA\xCF\x07!\x02\x02\xCB\xCF\x05D#\x02\xCC" +
		"\xCF\x05J&\x02\xCD\xCF\x05P)\x02\xCE\xC6\x03\x02\x02\x02\xCE\xC7\x03\x02" +
		"\x02\x02\xCE\xC8\x03\x02\x02\x02\xCE\xC9\x03\x02\x02\x02\xCE\xCA\x03\x02" +
		"\x02\x02\xCE\xCB\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02" +
		"\x02\x02\xCF/\x03\x02\x02\x02\xD0\xD1\x07\x17\x02\x02\xD11\x03\x02\x02" +
		"\x02\xD2\xD3\x07\x19\x02\x02\xD33\x03\x02\x02\x02\xD4\xD5\x07\x1A\x02" +
		"\x02\xD55\x03\x02\x02\x02\xD6\xD7\x07\x1C\x02\x02\xD77\x03\x02\x02\x02" +
		"\xD8\xDE\x07\x18\x02\x02\xD9\xDE\x052\x1A\x02\xDA\xDE\x054\x1B\x02\xDB" +
		"\xDE\x056\x1C\x02\xDC\xDE\x07\x1B\x02\x02\xDD\xD8\x03\x02\x02\x02\xDD" +
		"\xD9\x03\x02\x02\x02\xDD\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD" +
		"\xDC\x03\x02\x02\x02\xDE9\x03\x02\x02\x02\xDF\xE3\x05<\x1F\x02\xE0\xE3" +
		"\x05@!\x02\xE1\xE3\x05> \x02\xE2\xDF\x03\x02\x02\x02\xE2\xE0\x03\x02\x02" +
		"\x02\xE2\xE1\x03\x02\x02\x02\xE3;\x03\x02\x02\x02\xE4\xE5\x07\x1E\x02" +
		"\x02\xE5=\x03\x02\x02\x02\xE6\xE7\x07\x1F\x02\x02\xE7?\x03\x02\x02\x02" +
		"\xE8\xE9\x07\x1D\x02\x02\xE9A\x03\x02\x02\x02\xEA\xEB\x07 \x02\x02\xEB" +
		"C\x03\x02\x02\x02\xEC\xEF\x05H%\x02\xED\xEF\x05F$\x02\xEE\xEC\x03\x02" +
		"\x02\x02\xEE\xED\x03\x02\x02\x02\xEFE\x03\x02\x02\x02\xF0\xF1\x07\x16" +
		"\x02\x02\xF1\xF2\x05J&\x02\xF2G\x03\x02\x02\x02\xF3\xF4\x07\x16\x02\x02" +
		"\xF4\xF5\x07\x16\x02\x02\xF5\xF6\x05J&\x02\xF6I\x03\x02\x02\x02\xF7\xFA" +
		"\x05N(\x02\xF8\xFA\x05L\'\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02" +
		"\x02\x02\xFAK\x03\x02\x02\x02\xFB\xFC\x07\"\x02\x02\xFCM\x03\x02\x02\x02" +
		"\xFD\xFE\x07#\x02\x02\xFEO\x03\x02\x02\x02\xFF\u0100\x07$\x02\x02\u0100" +
		"Q\x03\x02\x02\x02\x0EU_du\x8D\xA9\xB3\xCE\xDD\xE2\xEE\xF9";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ClojureParser.__ATN) {
			ClojureParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ClojureParser._serializedATN));
		}

		return ClojureParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ClojureParser.EOF, 0); }
	public form(): FormContext[];
	public form(i: number): FormContext;
	public form(i?: number): FormContext | FormContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormContext);
		} else {
			return this.getRuleContext(i, FormContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_file; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class FormContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public vector(): VectorContext | undefined {
		return this.tryGetRuleContext(0, VectorContext);
	}
	public map(): MapContext | undefined {
		return this.tryGetRuleContext(0, MapContext);
	}
	public reader_macro(): Reader_macroContext | undefined {
		return this.tryGetRuleContext(0, Reader_macroContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_form; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterForm) {
			listener.enterForm(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitForm) {
			listener.exitForm(this);
		}
	}
}


export class FormsContext extends ParserRuleContext {
	public form(): FormContext[];
	public form(i: number): FormContext;
	public form(i?: number): FormContext | FormContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormContext);
		} else {
			return this.getRuleContext(i, FormContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_forms; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterForms) {
			listener.enterForms(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitForms) {
			listener.exitForms(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public forms(): FormsContext {
		return this.getRuleContext(0, FormsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_list; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
}


export class VectorContext extends ParserRuleContext {
	public forms(): FormsContext {
		return this.getRuleContext(0, FormsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_vector; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterVector) {
			listener.enterVector(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitVector) {
			listener.exitVector(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	public form(): FormContext[];
	public form(i: number): FormContext;
	public form(i?: number): FormContext | FormContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormContext);
		} else {
			return this.getRuleContext(i, FormContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_map; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public forms(): FormsContext {
		return this.getRuleContext(0, FormsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_set; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
}


export class Reader_macroContext extends ParserRuleContext {
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	public meta_data(): Meta_dataContext | undefined {
		return this.tryGetRuleContext(0, Meta_dataContext);
	}
	public regex(): RegexContext | undefined {
		return this.tryGetRuleContext(0, RegexContext);
	}
	public var_quote(): Var_quoteContext | undefined {
		return this.tryGetRuleContext(0, Var_quoteContext);
	}
	public host_expr(): Host_exprContext | undefined {
		return this.tryGetRuleContext(0, Host_exprContext);
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	public discard(): DiscardContext | undefined {
		return this.tryGetRuleContext(0, DiscardContext);
	}
	public dispatch(): DispatchContext | undefined {
		return this.tryGetRuleContext(0, DispatchContext);
	}
	public deref(): DerefContext | undefined {
		return this.tryGetRuleContext(0, DerefContext);
	}
	public quote(): QuoteContext | undefined {
		return this.tryGetRuleContext(0, QuoteContext);
	}
	public backtick(): BacktickContext | undefined {
		return this.tryGetRuleContext(0, BacktickContext);
	}
	public unquote(): UnquoteContext | undefined {
		return this.tryGetRuleContext(0, UnquoteContext);
	}
	public unquote_splicing(): Unquote_splicingContext | undefined {
		return this.tryGetRuleContext(0, Unquote_splicingContext);
	}
	public gensym(): GensymContext | undefined {
		return this.tryGetRuleContext(0, GensymContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_reader_macro; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterReader_macro) {
			listener.enterReader_macro(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitReader_macro) {
			listener.exitReader_macro(this);
		}
	}
}


export class QuoteContext extends ParserRuleContext {
	public form(): FormContext {
		return this.getRuleContext(0, FormContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_quote; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterQuote) {
			listener.enterQuote(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitQuote) {
			listener.exitQuote(this);
		}
	}
}


export class BacktickContext extends ParserRuleContext {
	public form(): FormContext {
		return this.getRuleContext(0, FormContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_backtick; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterBacktick) {
			listener.enterBacktick(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitBacktick) {
			listener.exitBacktick(this);
		}
	}
}


export class UnquoteContext extends ParserRuleContext {
	public form(): FormContext {
		return this.getRuleContext(0, FormContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_unquote; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterUnquote) {
			listener.enterUnquote(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitUnquote) {
			listener.exitUnquote(this);
		}
	}
}


export class Unquote_splicingContext extends ParserRuleContext {
	public form(): FormContext {
		return this.getRuleContext(0, FormContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_unquote_splicing; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterUnquote_splicing) {
			listener.enterUnquote_splicing(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitUnquote_splicing) {
			listener.exitUnquote_splicing(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public form(): FormContext[];
	public form(i: number): FormContext;
	public form(i?: number): FormContext | FormContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormContext);
		} else {
			return this.getRuleContext(i, FormContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_tag; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterTag) {
			listener.enterTag(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitTag) {
			listener.exitTag(this);
		}
	}
}


export class DerefContext extends ParserRuleContext {
	public form(): FormContext {
		return this.getRuleContext(0, FormContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_deref; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterDeref) {
			listener.enterDeref(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitDeref) {
			listener.exitDeref(this);
		}
	}
}


export class GensymContext extends ParserRuleContext {
	public SYMBOL(): TerminalNode { return this.getToken(ClojureParser.SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_gensym; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterGensym) {
			listener.enterGensym(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitGensym) {
			listener.exitGensym(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	public form(): FormContext[];
	public form(i: number): FormContext;
	public form(i?: number): FormContext | FormContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormContext);
		} else {
			return this.getRuleContext(i, FormContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_lambda; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
}


export class Meta_dataContext extends ParserRuleContext {
	public map(): MapContext | undefined {
		return this.tryGetRuleContext(0, MapContext);
	}
	public form(): FormContext | undefined {
		return this.tryGetRuleContext(0, FormContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_meta_data; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterMeta_data) {
			listener.enterMeta_data(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitMeta_data) {
			listener.exitMeta_data(this);
		}
	}
}


export class Var_quoteContext extends ParserRuleContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_var_quote; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterVar_quote) {
			listener.enterVar_quote(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitVar_quote) {
			listener.exitVar_quote(this);
		}
	}
}


export class Host_exprContext extends ParserRuleContext {
	public form(): FormContext[];
	public form(i: number): FormContext;
	public form(i?: number): FormContext | FormContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormContext);
		} else {
			return this.getRuleContext(i, FormContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_host_expr; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterHost_expr) {
			listener.enterHost_expr(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitHost_expr) {
			listener.exitHost_expr(this);
		}
	}
}


export class DiscardContext extends ParserRuleContext {
	public form(): FormContext {
		return this.getRuleContext(0, FormContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_discard; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterDiscard) {
			listener.enterDiscard(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitDiscard) {
			listener.exitDiscard(this);
		}
	}
}


export class DispatchContext extends ParserRuleContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	public form(): FormContext {
		return this.getRuleContext(0, FormContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_dispatch; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterDispatch) {
			listener.enterDispatch(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitDispatch) {
			listener.exitDispatch(this);
		}
	}
}


export class RegexContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_regex; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterRegex) {
			listener.enterRegex(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitRegex) {
			listener.exitRegex(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public character(): CharacterContext | undefined {
		return this.tryGetRuleContext(0, CharacterContext);
	}
	public nil(): NilContext | undefined {
		return this.tryGetRuleContext(0, NilContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(ClojureParser.BOOLEAN, 0); }
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	public param_name(): Param_nameContext | undefined {
		return this.tryGetRuleContext(0, Param_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_literal; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ClojureParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_string; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class HexContext extends ParserRuleContext {
	public HEX(): TerminalNode { return this.getToken(ClojureParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_hex; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterHex) {
			listener.enterHex(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitHex) {
			listener.exitHex(this);
		}
	}
}


export class BinContext extends ParserRuleContext {
	public BIN(): TerminalNode { return this.getToken(ClojureParser.BIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_bin; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterBin) {
			listener.enterBin(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitBin) {
			listener.exitBin(this);
		}
	}
}


export class BignContext extends ParserRuleContext {
	public BIGN(): TerminalNode { return this.getToken(ClojureParser.BIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_bign; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterBign) {
			listener.enterBign(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitBign) {
			listener.exitBign(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(ClojureParser.FLOAT, 0); }
	public hex(): HexContext | undefined {
		return this.tryGetRuleContext(0, HexContext);
	}
	public bin(): BinContext | undefined {
		return this.tryGetRuleContext(0, BinContext);
	}
	public bign(): BignContext | undefined {
		return this.tryGetRuleContext(0, BignContext);
	}
	public LONG(): TerminalNode | undefined { return this.tryGetToken(ClojureParser.LONG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_number; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class CharacterContext extends ParserRuleContext {
	public named_char(): Named_charContext | undefined {
		return this.tryGetRuleContext(0, Named_charContext);
	}
	public u_hex_quad(): U_hex_quadContext | undefined {
		return this.tryGetRuleContext(0, U_hex_quadContext);
	}
	public any_char(): Any_charContext | undefined {
		return this.tryGetRuleContext(0, Any_charContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_character; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterCharacter) {
			listener.enterCharacter(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitCharacter) {
			listener.exitCharacter(this);
		}
	}
}


export class Named_charContext extends ParserRuleContext {
	public CHAR_NAMED(): TerminalNode { return this.getToken(ClojureParser.CHAR_NAMED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_named_char; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterNamed_char) {
			listener.enterNamed_char(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitNamed_char) {
			listener.exitNamed_char(this);
		}
	}
}


export class Any_charContext extends ParserRuleContext {
	public CHAR_ANY(): TerminalNode { return this.getToken(ClojureParser.CHAR_ANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_any_char; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterAny_char) {
			listener.enterAny_char(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitAny_char) {
			listener.exitAny_char(this);
		}
	}
}


export class U_hex_quadContext extends ParserRuleContext {
	public CHAR_U(): TerminalNode { return this.getToken(ClojureParser.CHAR_U, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_u_hex_quad; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterU_hex_quad) {
			listener.enterU_hex_quad(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitU_hex_quad) {
			listener.exitU_hex_quad(this);
		}
	}
}


export class NilContext extends ParserRuleContext {
	public NIL(): TerminalNode { return this.getToken(ClojureParser.NIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_nil; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterNil) {
			listener.enterNil(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitNil) {
			listener.exitNil(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public macro_keyword(): Macro_keywordContext | undefined {
		return this.tryGetRuleContext(0, Macro_keywordContext);
	}
	public simple_keyword(): Simple_keywordContext | undefined {
		return this.tryGetRuleContext(0, Simple_keywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_keyword; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
}


export class Simple_keywordContext extends ParserRuleContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_simple_keyword; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterSimple_keyword) {
			listener.enterSimple_keyword(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitSimple_keyword) {
			listener.exitSimple_keyword(this);
		}
	}
}


export class Macro_keywordContext extends ParserRuleContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_macro_keyword; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterMacro_keyword) {
			listener.enterMacro_keyword(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitMacro_keyword) {
			listener.exitMacro_keyword(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public ns_symbol(): Ns_symbolContext | undefined {
		return this.tryGetRuleContext(0, Ns_symbolContext);
	}
	public simple_sym(): Simple_symContext | undefined {
		return this.tryGetRuleContext(0, Simple_symContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_symbol; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
}


export class Simple_symContext extends ParserRuleContext {
	public SYMBOL(): TerminalNode { return this.getToken(ClojureParser.SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_simple_sym; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterSimple_sym) {
			listener.enterSimple_sym(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitSimple_sym) {
			listener.exitSimple_sym(this);
		}
	}
}


export class Ns_symbolContext extends ParserRuleContext {
	public NS_SYMBOL(): TerminalNode { return this.getToken(ClojureParser.NS_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_ns_symbol; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterNs_symbol) {
			listener.enterNs_symbol(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitNs_symbol) {
			listener.exitNs_symbol(this);
		}
	}
}


export class Param_nameContext extends ParserRuleContext {
	public PARAM_NAME(): TerminalNode { return this.getToken(ClojureParser.PARAM_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClojureParser.RULE_param_name; }
	// @Override
	public enterRule(listener: ClojureListener): void {
		if (listener.enterParam_name) {
			listener.enterParam_name(this);
		}
	}
	// @Override
	public exitRule(listener: ClojureListener): void {
		if (listener.exitParam_name) {
			listener.exitParam_name(this);
		}
	}
}


