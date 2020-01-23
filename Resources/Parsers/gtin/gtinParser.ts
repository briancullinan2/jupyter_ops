// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gtin/gtin.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { gtinListener } from "./gtinListener";

export class gtinParser extends Parser {
	public static readonly DIGIT_0 = 1;
	public static readonly DIGIT_1 = 2;
	public static readonly DIGIT_2 = 3;
	public static readonly DIGIT_3 = 4;
	public static readonly DIGIT_4 = 5;
	public static readonly DIGIT_5 = 6;
	public static readonly DIGIT_6 = 7;
	public static readonly DIGIT_7 = 8;
	public static readonly DIGIT_8 = 9;
	public static readonly DIGIT_9 = 10;
	public static readonly HYPHEN = 11;
	public static readonly WS = 12;
	public static readonly RULE_gtin = 0;
	public static readonly RULE_gtin8 = 1;
	public static readonly RULE_ean8 = 2;
	public static readonly RULE_gtin12 = 3;
	public static readonly RULE_gtin13 = 4;
	public static readonly RULE_gtin14 = 5;
	public static readonly RULE_upc = 6;
	public static readonly RULE_upc_a = 7;
	public static readonly RULE_upc_a_manufacturer = 8;
	public static readonly RULE_upc_a_product = 9;
	public static readonly RULE_upc_a_5 = 10;
	public static readonly RULE_upc_e = 11;
	public static readonly RULE_num_system = 12;
	public static readonly RULE_check_code = 13;
	public static readonly RULE_supplemental_code = 14;
	public static readonly RULE_supplemental_code_5 = 15;
	public static readonly RULE_supplemental_code_2 = 16;
	public static readonly RULE_ean13 = 17;
	public static readonly RULE_ean13_generic = 18;
	public static readonly RULE_ean13_ismn = 19;
	public static readonly RULE_gs1_prefix_ismn = 20;
	public static readonly RULE_ismn_publisher_number = 21;
	public static readonly RULE_ismn_item_number = 22;
	public static readonly RULE_ean13_bookland = 23;
	public static readonly RULE_bookland_isbn = 24;
	public static readonly RULE_gs1_prefix_bookland_1 = 25;
	public static readonly RULE_gs1_prefix_bookland_2 = 26;
	public static readonly RULE_gs1_prefix_issn = 27;
	public static readonly RULE_ean13_issn = 28;
	public static readonly RULE_issn = 29;
	public static readonly RULE_ean_13_manprod = 30;
	public static readonly RULE_gs1_prefix = 31;
	public static readonly RULE_ean14 = 32;
	public static readonly RULE_ean14_appid = 33;
	public static readonly RULE_ean14_packaging = 34;
	public static readonly RULE_ean14_product = 35;
	public static readonly RULE_any_digit = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"gtin", "gtin8", "ean8", "gtin12", "gtin13", "gtin14", "upc", "upc_a", 
		"upc_a_manufacturer", "upc_a_product", "upc_a_5", "upc_e", "num_system", 
		"check_code", "supplemental_code", "supplemental_code_5", "supplemental_code_2", 
		"ean13", "ean13_generic", "ean13_ismn", "gs1_prefix_ismn", "ismn_publisher_number", 
		"ismn_item_number", "ean13_bookland", "bookland_isbn", "gs1_prefix_bookland_1", 
		"gs1_prefix_bookland_2", "gs1_prefix_issn", "ean13_issn", "issn", "ean_13_manprod", 
		"gs1_prefix", "ean14", "ean14_appid", "ean14_packaging", "ean14_product", 
		"any_digit",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", "'8'", 
		"'9'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", "DIGIT_4", "DIGIT_5", 
		"DIGIT_6", "DIGIT_7", "DIGIT_8", "DIGIT_9", "HYPHEN", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gtinParser._LITERAL_NAMES, gtinParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gtinParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "gtin.g4"; }

	// @Override
	public get ruleNames(): string[] { return gtinParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return gtinParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(gtinParser._ATN, this);
	}
	// @RuleVersion(0)
	public gtin(): GtinContext {
		let _localctx: GtinContext = new GtinContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, gtinParser.RULE_gtin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 74;
				this.gtin8();
				}
				break;

			case 2:
				{
				this.state = 75;
				this.gtin12();
				}
				break;

			case 3:
				{
				this.state = 76;
				this.gtin13();
				}
				break;

			case 4:
				{
				this.state = 77;
				this.gtin14();
				}
				break;

			case 5:
				{
				this.state = 78;
				this.supplemental_code();
				}
				break;
			}
			this.state = 81;
			this.match(gtinParser.EOF);
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
	public gtin8(): Gtin8Context {
		let _localctx: Gtin8Context = new Gtin8Context(this._ctx, this.state);
		this.enterRule(_localctx, 2, gtinParser.RULE_gtin8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.ean8();
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
	public ean8(): Ean8Context {
		let _localctx: Ean8Context = new Ean8Context(this._ctx, this.state);
		this.enterRule(_localctx, 4, gtinParser.RULE_ean8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.any_digit();
			this.state = 86;
			this.any_digit();
			this.state = 87;
			this.any_digit();
			this.state = 88;
			this.any_digit();
			this.state = 89;
			this.any_digit();
			this.state = 90;
			this.any_digit();
			this.state = 91;
			this.any_digit();
			this.state = 92;
			this.any_digit();
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
	public gtin12(): Gtin12Context {
		let _localctx: Gtin12Context = new Gtin12Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, gtinParser.RULE_gtin12);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.upc();
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
	public gtin13(): Gtin13Context {
		let _localctx: Gtin13Context = new Gtin13Context(this._ctx, this.state);
		this.enterRule(_localctx, 8, gtinParser.RULE_gtin13);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.ean13();
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
	public gtin14(): Gtin14Context {
		let _localctx: Gtin14Context = new Gtin14Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, gtinParser.RULE_gtin14);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.ean14();
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
	public upc(): UpcContext {
		let _localctx: UpcContext = new UpcContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, gtinParser.RULE_upc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 100;
				this.upc_a();
				}
				break;

			case 2:
				{
				this.state = 101;
				this.upc_e();
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
	public upc_a(): Upc_aContext {
		let _localctx: Upc_aContext = new Upc_aContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, gtinParser.RULE_upc_a);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.num_system();
			this.state = 105;
			this.upc_a_manufacturer();
			this.state = 106;
			this.upc_a_product();
			this.state = 107;
			this.check_code();
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
	public upc_a_manufacturer(): Upc_a_manufacturerContext {
		let _localctx: Upc_a_manufacturerContext = new Upc_a_manufacturerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, gtinParser.RULE_upc_a_manufacturer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.upc_a_5();
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
	public upc_a_product(): Upc_a_productContext {
		let _localctx: Upc_a_productContext = new Upc_a_productContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, gtinParser.RULE_upc_a_product);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.upc_a_5();
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
	public upc_a_5(): Upc_a_5Context {
		let _localctx: Upc_a_5Context = new Upc_a_5Context(this._ctx, this.state);
		this.enterRule(_localctx, 20, gtinParser.RULE_upc_a_5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.any_digit();
			this.state = 114;
			this.any_digit();
			this.state = 115;
			this.any_digit();
			this.state = 116;
			this.any_digit();
			this.state = 117;
			this.any_digit();
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
	public upc_e(): Upc_eContext {
		let _localctx: Upc_eContext = new Upc_eContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, gtinParser.RULE_upc_e);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.any_digit();
			this.state = 120;
			this.any_digit();
			this.state = 121;
			this.any_digit();
			this.state = 122;
			this.any_digit();
			this.state = 123;
			this.any_digit();
			this.state = 124;
			this.any_digit();
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
	public num_system(): Num_systemContext {
		let _localctx: Num_systemContext = new Num_systemContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, gtinParser.RULE_num_system);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.any_digit();
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
	public check_code(): Check_codeContext {
		let _localctx: Check_codeContext = new Check_codeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, gtinParser.RULE_check_code);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.any_digit();
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
	public supplemental_code(): Supplemental_codeContext {
		let _localctx: Supplemental_codeContext = new Supplemental_codeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, gtinParser.RULE_supplemental_code);
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 130;
				this.supplemental_code_5();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
				this.supplemental_code_2();
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
	public supplemental_code_5(): Supplemental_code_5Context {
		let _localctx: Supplemental_code_5Context = new Supplemental_code_5Context(this._ctx, this.state);
		this.enterRule(_localctx, 30, gtinParser.RULE_supplemental_code_5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.any_digit();
			this.state = 135;
			this.any_digit();
			this.state = 136;
			this.any_digit();
			this.state = 137;
			this.any_digit();
			this.state = 138;
			this.any_digit();
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
	public supplemental_code_2(): Supplemental_code_2Context {
		let _localctx: Supplemental_code_2Context = new Supplemental_code_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, gtinParser.RULE_supplemental_code_2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.any_digit();
			this.state = 141;
			this.any_digit();
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
	public ean13(): Ean13Context {
		let _localctx: Ean13Context = new Ean13Context(this._ctx, this.state);
		this.enterRule(_localctx, 34, gtinParser.RULE_ean13);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 143;
				this.ean13_ismn();
				}
				break;

			case 2:
				{
				this.state = 144;
				this.ean13_issn();
				}
				break;

			case 3:
				{
				this.state = 145;
				this.ean13_bookland();
				}
				break;

			case 4:
				{
				this.state = 146;
				this.ean13_generic();
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
	public ean13_generic(): Ean13_genericContext {
		let _localctx: Ean13_genericContext = new Ean13_genericContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, gtinParser.RULE_ean13_generic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.gs1_prefix();
			this.state = 150;
			this.ean_13_manprod();
			this.state = 151;
			this.check_code();
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
	public ean13_ismn(): Ean13_ismnContext {
		let _localctx: Ean13_ismnContext = new Ean13_ismnContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, gtinParser.RULE_ean13_ismn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.gs1_prefix_ismn();
			this.state = 154;
			this.ismn_publisher_number();
			this.state = 155;
			this.ismn_item_number();
			this.state = 156;
			this.check_code();
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
	public gs1_prefix_ismn(): Gs1_prefix_ismnContext {
		let _localctx: Gs1_prefix_ismnContext = new Gs1_prefix_ismnContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, gtinParser.RULE_gs1_prefix_ismn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(gtinParser.DIGIT_9);
			this.state = 159;
			this.match(gtinParser.DIGIT_7);
			this.state = 160;
			this.match(gtinParser.DIGIT_9);
			this.state = 161;
			this.match(gtinParser.DIGIT_0);
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
	public ismn_publisher_number(): Ismn_publisher_numberContext {
		let _localctx: Ismn_publisher_numberContext = new Ismn_publisher_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, gtinParser.RULE_ismn_publisher_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.any_digit();
			this.state = 164;
			this.any_digit();
			this.state = 165;
			this.any_digit();
			this.state = 166;
			this.any_digit();
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
	public ismn_item_number(): Ismn_item_numberContext {
		let _localctx: Ismn_item_numberContext = new Ismn_item_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, gtinParser.RULE_ismn_item_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.any_digit();
			this.state = 169;
			this.any_digit();
			this.state = 170;
			this.any_digit();
			this.state = 171;
			this.any_digit();
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
	public ean13_bookland(): Ean13_booklandContext {
		let _localctx: Ean13_booklandContext = new Ean13_booklandContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, gtinParser.RULE_ean13_bookland);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 173;
				this.gs1_prefix_bookland_1();
				}
				break;

			case 2:
				{
				this.state = 174;
				this.gs1_prefix_bookland_2();
				}
				break;
			}
			this.state = 177;
			this.bookland_isbn();
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
	public bookland_isbn(): Bookland_isbnContext {
		let _localctx: Bookland_isbnContext = new Bookland_isbnContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, gtinParser.RULE_bookland_isbn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.any_digit();
			this.state = 180;
			this.any_digit();
			this.state = 181;
			this.any_digit();
			this.state = 182;
			this.any_digit();
			this.state = 183;
			this.any_digit();
			this.state = 184;
			this.any_digit();
			this.state = 185;
			this.any_digit();
			this.state = 186;
			this.any_digit();
			this.state = 187;
			this.any_digit();
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
	public gs1_prefix_bookland_1(): Gs1_prefix_bookland_1Context {
		let _localctx: Gs1_prefix_bookland_1Context = new Gs1_prefix_bookland_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 50, gtinParser.RULE_gs1_prefix_bookland_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(gtinParser.DIGIT_9);
			this.state = 190;
			this.match(gtinParser.DIGIT_7);
			this.state = 191;
			this.match(gtinParser.DIGIT_9);
			this.state = 192;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8) | (1 << gtinParser.DIGIT_9))) !== 0))) {
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
	public gs1_prefix_bookland_2(): Gs1_prefix_bookland_2Context {
		let _localctx: Gs1_prefix_bookland_2Context = new Gs1_prefix_bookland_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, gtinParser.RULE_gs1_prefix_bookland_2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(gtinParser.DIGIT_9);
			this.state = 195;
			this.match(gtinParser.DIGIT_7);
			this.state = 196;
			this.match(gtinParser.DIGIT_8);
			this.state = 197;
			this.any_digit();
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
	public gs1_prefix_issn(): Gs1_prefix_issnContext {
		let _localctx: Gs1_prefix_issnContext = new Gs1_prefix_issnContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, gtinParser.RULE_gs1_prefix_issn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(gtinParser.DIGIT_9);
			this.state = 200;
			this.match(gtinParser.DIGIT_7);
			this.state = 201;
			this.match(gtinParser.DIGIT_7);
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
	public ean13_issn(): Ean13_issnContext {
		let _localctx: Ean13_issnContext = new Ean13_issnContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, gtinParser.RULE_ean13_issn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.gs1_prefix_issn();
			this.state = 204;
			this.issn();
			this.state = 205;
			this.check_code();
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
	public issn(): IssnContext {
		let _localctx: IssnContext = new IssnContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, gtinParser.RULE_issn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.any_digit();
			this.state = 208;
			this.any_digit();
			this.state = 209;
			this.any_digit();
			this.state = 210;
			this.any_digit();
			this.state = 211;
			this.any_digit();
			this.state = 212;
			this.any_digit();
			this.state = 213;
			this.any_digit();
			this.state = 214;
			this.any_digit();
			this.state = 215;
			this.any_digit();
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
	public ean_13_manprod(): Ean_13_manprodContext {
		let _localctx: Ean_13_manprodContext = new Ean_13_manprodContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, gtinParser.RULE_ean_13_manprod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.any_digit();
			this.state = 218;
			this.any_digit();
			this.state = 219;
			this.any_digit();
			this.state = 220;
			this.any_digit();
			this.state = 221;
			this.any_digit();
			this.state = 222;
			this.any_digit();
			this.state = 223;
			this.any_digit();
			this.state = 224;
			this.any_digit();
			this.state = 225;
			this.any_digit();
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
	public gs1_prefix(): Gs1_prefixContext {
		let _localctx: Gs1_prefixContext = new Gs1_prefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, gtinParser.RULE_gs1_prefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.any_digit();
			this.state = 228;
			this.any_digit();
			this.state = 229;
			this.any_digit();
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
	public ean14(): Ean14Context {
		let _localctx: Ean14Context = new Ean14Context(this._ctx, this.state);
		this.enterRule(_localctx, 64, gtinParser.RULE_ean14);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.ean14_packaging();
			this.state = 232;
			this.ean14_product();
			this.state = 233;
			this.check_code();
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
	public ean14_appid(): Ean14_appidContext {
		let _localctx: Ean14_appidContext = new Ean14_appidContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, gtinParser.RULE_ean14_appid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.any_digit();
			this.state = 236;
			this.any_digit();
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
	public ean14_packaging(): Ean14_packagingContext {
		let _localctx: Ean14_packagingContext = new Ean14_packagingContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, gtinParser.RULE_ean14_packaging);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_0) | (1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8))) !== 0))) {
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
	public ean14_product(): Ean14_productContext {
		let _localctx: Ean14_productContext = new Ean14_productContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, gtinParser.RULE_ean14_product);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.any_digit();
			this.state = 241;
			this.any_digit();
			this.state = 242;
			this.any_digit();
			this.state = 243;
			this.any_digit();
			this.state = 244;
			this.any_digit();
			this.state = 245;
			this.any_digit();
			this.state = 246;
			this.any_digit();
			this.state = 247;
			this.any_digit();
			this.state = 248;
			this.any_digit();
			this.state = 249;
			this.any_digit();
			this.state = 250;
			this.any_digit();
			this.state = 251;
			this.any_digit();
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
	public any_digit(): Any_digitContext {
		let _localctx: Any_digitContext = new Any_digitContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, gtinParser.RULE_any_digit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_0) | (1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8) | (1 << gtinParser.DIGIT_9))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E\u0102\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05" +
		"\x02R\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x05\bi\n\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x05\x10\x87\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x96" +
		"\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x05\x19\xB2\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"" +
		"\x03\"\x03#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x02\x02\x02\'\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"\x02\x05\x03\x02\x04\f\x03\x02\x03\v\x03\x02\x03\f\x02\xE6\x02Q\x03\x02" +
		"\x02\x02\x04U\x03\x02\x02\x02\x06W\x03\x02\x02\x02\b`\x03\x02\x02\x02" +
		"\nb\x03\x02\x02\x02\fd\x03\x02\x02\x02\x0Eh\x03\x02\x02\x02\x10j\x03\x02" +
		"\x02\x02\x12o\x03\x02\x02\x02\x14q\x03\x02\x02\x02\x16s\x03\x02\x02\x02" +
		"\x18y\x03\x02\x02\x02\x1A\x80\x03\x02\x02\x02\x1C\x82\x03\x02\x02\x02" +
		"\x1E\x86\x03\x02\x02\x02 \x88\x03\x02\x02\x02\"\x8E\x03\x02\x02\x02$\x95" +
		"\x03\x02\x02\x02&\x97\x03\x02\x02\x02(\x9B\x03\x02\x02\x02*\xA0\x03\x02" +
		"\x02\x02,\xA5\x03\x02\x02\x02.\xAA\x03\x02\x02\x020\xB1\x03\x02\x02\x02" +
		"2\xB5\x03\x02\x02\x024\xBF\x03\x02\x02\x026\xC4\x03\x02\x02\x028\xC9\x03" +
		"\x02\x02\x02:\xCD\x03\x02\x02\x02<\xD1\x03\x02\x02\x02>\xDB\x03\x02\x02" +
		"\x02@\xE5\x03\x02\x02\x02B\xE9\x03\x02\x02\x02D\xED\x03\x02\x02\x02F\xF0" +
		"\x03\x02\x02\x02H\xF2\x03\x02\x02\x02J\xFF\x03\x02\x02\x02LR\x05\x04\x03" +
		"\x02MR\x05\b\x05\x02NR\x05\n\x06\x02OR\x05\f\x07\x02PR\x05\x1E\x10\x02" +
		"QL\x03\x02\x02\x02QM\x03\x02\x02\x02QN\x03\x02\x02\x02QO\x03\x02\x02\x02" +
		"QP\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\x02\x02\x03T\x03\x03\x02\x02" +
		"\x02UV\x05\x06\x04\x02V\x05\x03\x02\x02\x02WX\x05J&\x02XY\x05J&\x02YZ" +
		"\x05J&\x02Z[\x05J&\x02[\\\x05J&\x02\\]\x05J&\x02]^\x05J&\x02^_\x05J&\x02" +
		"_\x07\x03\x02\x02\x02`a\x05\x0E\b\x02a\t\x03\x02\x02\x02bc\x05$\x13\x02" +
		"c\v\x03\x02\x02\x02de\x05B\"\x02e\r\x03\x02\x02\x02fi\x05\x10\t\x02gi" +
		"\x05\x18\r\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02i\x0F\x03\x02\x02\x02" +
		"jk\x05\x1A\x0E\x02kl\x05\x12\n\x02lm\x05\x14\v\x02mn\x05\x1C\x0F\x02n" +
		"\x11\x03\x02\x02\x02op\x05\x16\f\x02p\x13\x03\x02\x02\x02qr\x05\x16\f" +
		"\x02r\x15\x03\x02\x02\x02st\x05J&\x02tu\x05J&\x02uv\x05J&\x02vw\x05J&" +
		"\x02wx\x05J&\x02x\x17\x03\x02\x02\x02yz\x05J&\x02z{\x05J&\x02{|\x05J&" +
		"\x02|}\x05J&\x02}~\x05J&\x02~\x7F\x05J&\x02\x7F\x19\x03\x02\x02\x02\x80" +
		"\x81\x05J&\x02\x81\x1B\x03\x02\x02\x02\x82\x83\x05J&\x02\x83\x1D\x03\x02" +
		"\x02\x02\x84\x87\x05 \x11\x02\x85\x87\x05\"\x12\x02\x86\x84\x03\x02\x02" +
		"\x02\x86\x85\x03\x02\x02\x02\x87\x1F\x03\x02\x02\x02\x88\x89\x05J&\x02" +
		"\x89\x8A\x05J&\x02\x8A\x8B\x05J&\x02\x8B\x8C\x05J&\x02\x8C\x8D\x05J&\x02" +
		"\x8D!\x03\x02\x02\x02\x8E\x8F\x05J&\x02\x8F\x90\x05J&\x02\x90#\x03\x02" +
		"\x02\x02\x91\x96\x05(\x15\x02\x92\x96\x05:\x1E\x02\x93\x96\x050\x19\x02" +
		"\x94\x96\x05&\x14\x02\x95\x91\x03\x02\x02\x02\x95\x92\x03\x02\x02\x02" +
		"\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96%\x03\x02\x02\x02" +
		"\x97\x98\x05@!\x02\x98\x99\x05> \x02\x99\x9A\x05\x1C\x0F\x02\x9A\'\x03" +
		"\x02\x02\x02\x9B\x9C\x05*\x16\x02\x9C\x9D\x05,\x17\x02\x9D\x9E\x05.\x18" +
		"\x02\x9E\x9F\x05\x1C\x0F\x02\x9F)\x03\x02\x02\x02\xA0\xA1\x07\f\x02\x02" +
		"\xA1\xA2\x07\n\x02\x02\xA2\xA3\x07\f\x02\x02\xA3\xA4\x07\x03\x02\x02\xA4" +
		"+\x03\x02\x02\x02\xA5\xA6\x05J&\x02\xA6\xA7\x05J&\x02\xA7\xA8\x05J&\x02" +
		"\xA8\xA9\x05J&\x02\xA9-\x03\x02\x02\x02\xAA\xAB\x05J&\x02\xAB\xAC\x05" +
		"J&\x02\xAC\xAD\x05J&\x02\xAD\xAE\x05J&\x02\xAE/\x03\x02\x02\x02\xAF\xB2" +
		"\x054\x1B\x02\xB0\xB2\x056\x1C\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB0\x03" +
		"\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x052\x1A\x02\xB41\x03\x02" +
		"\x02\x02\xB5\xB6\x05J&\x02\xB6\xB7\x05J&\x02\xB7\xB8\x05J&\x02\xB8\xB9" +
		"\x05J&\x02\xB9\xBA\x05J&\x02\xBA\xBB\x05J&\x02\xBB\xBC\x05J&\x02\xBC\xBD" +
		"\x05J&\x02\xBD\xBE\x05J&\x02\xBE3\x03\x02\x02\x02\xBF\xC0\x07\f\x02\x02" +
		"\xC0\xC1\x07\n\x02\x02\xC1\xC2\x07\f\x02\x02\xC2\xC3\t\x02\x02\x02\xC3" +
		"5\x03\x02\x02\x02\xC4\xC5\x07\f\x02\x02\xC5\xC6\x07\n\x02\x02\xC6\xC7" +
		"\x07\v\x02\x02\xC7\xC8\x05J&\x02\xC87\x03\x02\x02\x02\xC9\xCA\x07\f\x02" +
		"\x02\xCA\xCB\x07\n\x02\x02\xCB\xCC\x07\n\x02\x02\xCC9\x03\x02\x02\x02" +
		"\xCD\xCE\x058\x1D\x02\xCE\xCF\x05<\x1F\x02\xCF\xD0\x05\x1C\x0F\x02\xD0" +
		";\x03\x02\x02\x02\xD1\xD2\x05J&\x02\xD2\xD3\x05J&\x02\xD3\xD4\x05J&\x02" +
		"\xD4\xD5\x05J&\x02\xD5\xD6\x05J&\x02\xD6\xD7\x05J&\x02\xD7\xD8\x05J&\x02" +
		"\xD8\xD9\x05J&\x02\xD9\xDA\x05J&\x02\xDA=\x03\x02\x02\x02\xDB\xDC\x05" +
		"J&\x02\xDC\xDD\x05J&\x02\xDD\xDE\x05J&\x02\xDE\xDF\x05J&\x02\xDF\xE0\x05" +
		"J&\x02\xE0\xE1\x05J&\x02\xE1\xE2\x05J&\x02\xE2\xE3\x05J&\x02\xE3\xE4\x05" +
		"J&\x02\xE4?\x03\x02\x02\x02\xE5\xE6\x05J&\x02\xE6\xE7\x05J&\x02\xE7\xE8" +
		"\x05J&\x02\xE8A\x03\x02\x02\x02\xE9\xEA\x05F$\x02\xEA\xEB\x05H%\x02\xEB" +
		"\xEC\x05\x1C\x0F\x02\xECC\x03\x02\x02\x02\xED\xEE\x05J&\x02\xEE\xEF\x05" +
		"J&\x02\xEFE\x03\x02\x02\x02\xF0\xF1\t\x03\x02\x02\xF1G\x03\x02\x02\x02" +
		"\xF2\xF3\x05J&\x02\xF3\xF4\x05J&\x02\xF4\xF5\x05J&\x02\xF5\xF6\x05J&\x02" +
		"\xF6\xF7\x05J&\x02\xF7\xF8\x05J&\x02\xF8\xF9\x05J&\x02\xF9\xFA\x05J&\x02" +
		"\xFA\xFB\x05J&\x02\xFB\xFC\x05J&\x02\xFC\xFD\x05J&\x02\xFD\xFE\x05J&\x02" +
		"\xFEI\x03\x02\x02\x02\xFF\u0100\t\x04\x02\x02\u0100K\x03\x02\x02\x02\x07" +
		"Qh\x86\x95\xB1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gtinParser.__ATN) {
			gtinParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gtinParser._serializedATN));
		}

		return gtinParser.__ATN;
	}

}

export class GtinContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(gtinParser.EOF, 0); }
	public gtin8(): Gtin8Context | undefined {
		return this.tryGetRuleContext(0, Gtin8Context);
	}
	public gtin12(): Gtin12Context | undefined {
		return this.tryGetRuleContext(0, Gtin12Context);
	}
	public gtin13(): Gtin13Context | undefined {
		return this.tryGetRuleContext(0, Gtin13Context);
	}
	public gtin14(): Gtin14Context | undefined {
		return this.tryGetRuleContext(0, Gtin14Context);
	}
	public supplemental_code(): Supplemental_codeContext | undefined {
		return this.tryGetRuleContext(0, Supplemental_codeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gtin; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGtin) {
			listener.enterGtin(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGtin) {
			listener.exitGtin(this);
		}
	}
}


export class Gtin8Context extends ParserRuleContext {
	public ean8(): Ean8Context {
		return this.getRuleContext(0, Ean8Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gtin8; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGtin8) {
			listener.enterGtin8(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGtin8) {
			listener.exitGtin8(this);
		}
	}
}


export class Ean8Context extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean8; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan8) {
			listener.enterEan8(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan8) {
			listener.exitEan8(this);
		}
	}
}


export class Gtin12Context extends ParserRuleContext {
	public upc(): UpcContext {
		return this.getRuleContext(0, UpcContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gtin12; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGtin12) {
			listener.enterGtin12(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGtin12) {
			listener.exitGtin12(this);
		}
	}
}


export class Gtin13Context extends ParserRuleContext {
	public ean13(): Ean13Context {
		return this.getRuleContext(0, Ean13Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gtin13; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGtin13) {
			listener.enterGtin13(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGtin13) {
			listener.exitGtin13(this);
		}
	}
}


export class Gtin14Context extends ParserRuleContext {
	public ean14(): Ean14Context {
		return this.getRuleContext(0, Ean14Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gtin14; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGtin14) {
			listener.enterGtin14(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGtin14) {
			listener.exitGtin14(this);
		}
	}
}


export class UpcContext extends ParserRuleContext {
	public upc_a(): Upc_aContext | undefined {
		return this.tryGetRuleContext(0, Upc_aContext);
	}
	public upc_e(): Upc_eContext | undefined {
		return this.tryGetRuleContext(0, Upc_eContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_upc; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterUpc) {
			listener.enterUpc(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitUpc) {
			listener.exitUpc(this);
		}
	}
}


export class Upc_aContext extends ParserRuleContext {
	public num_system(): Num_systemContext {
		return this.getRuleContext(0, Num_systemContext);
	}
	public upc_a_manufacturer(): Upc_a_manufacturerContext {
		return this.getRuleContext(0, Upc_a_manufacturerContext);
	}
	public upc_a_product(): Upc_a_productContext {
		return this.getRuleContext(0, Upc_a_productContext);
	}
	public check_code(): Check_codeContext {
		return this.getRuleContext(0, Check_codeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_upc_a; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterUpc_a) {
			listener.enterUpc_a(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitUpc_a) {
			listener.exitUpc_a(this);
		}
	}
}


export class Upc_a_manufacturerContext extends ParserRuleContext {
	public upc_a_5(): Upc_a_5Context {
		return this.getRuleContext(0, Upc_a_5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_upc_a_manufacturer; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterUpc_a_manufacturer) {
			listener.enterUpc_a_manufacturer(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitUpc_a_manufacturer) {
			listener.exitUpc_a_manufacturer(this);
		}
	}
}


export class Upc_a_productContext extends ParserRuleContext {
	public upc_a_5(): Upc_a_5Context {
		return this.getRuleContext(0, Upc_a_5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_upc_a_product; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterUpc_a_product) {
			listener.enterUpc_a_product(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitUpc_a_product) {
			listener.exitUpc_a_product(this);
		}
	}
}


export class Upc_a_5Context extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_upc_a_5; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterUpc_a_5) {
			listener.enterUpc_a_5(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitUpc_a_5) {
			listener.exitUpc_a_5(this);
		}
	}
}


export class Upc_eContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_upc_e; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterUpc_e) {
			listener.enterUpc_e(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitUpc_e) {
			listener.exitUpc_e(this);
		}
	}
}


export class Num_systemContext extends ParserRuleContext {
	public any_digit(): Any_digitContext {
		return this.getRuleContext(0, Any_digitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_num_system; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterNum_system) {
			listener.enterNum_system(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitNum_system) {
			listener.exitNum_system(this);
		}
	}
}


export class Check_codeContext extends ParserRuleContext {
	public any_digit(): Any_digitContext {
		return this.getRuleContext(0, Any_digitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_check_code; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterCheck_code) {
			listener.enterCheck_code(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitCheck_code) {
			listener.exitCheck_code(this);
		}
	}
}


export class Supplemental_codeContext extends ParserRuleContext {
	public supplemental_code_5(): Supplemental_code_5Context | undefined {
		return this.tryGetRuleContext(0, Supplemental_code_5Context);
	}
	public supplemental_code_2(): Supplemental_code_2Context | undefined {
		return this.tryGetRuleContext(0, Supplemental_code_2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_supplemental_code; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterSupplemental_code) {
			listener.enterSupplemental_code(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitSupplemental_code) {
			listener.exitSupplemental_code(this);
		}
	}
}


export class Supplemental_code_5Context extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_supplemental_code_5; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterSupplemental_code_5) {
			listener.enterSupplemental_code_5(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitSupplemental_code_5) {
			listener.exitSupplemental_code_5(this);
		}
	}
}


export class Supplemental_code_2Context extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_supplemental_code_2; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterSupplemental_code_2) {
			listener.enterSupplemental_code_2(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitSupplemental_code_2) {
			listener.exitSupplemental_code_2(this);
		}
	}
}


export class Ean13Context extends ParserRuleContext {
	public ean13_ismn(): Ean13_ismnContext | undefined {
		return this.tryGetRuleContext(0, Ean13_ismnContext);
	}
	public ean13_issn(): Ean13_issnContext | undefined {
		return this.tryGetRuleContext(0, Ean13_issnContext);
	}
	public ean13_bookland(): Ean13_booklandContext | undefined {
		return this.tryGetRuleContext(0, Ean13_booklandContext);
	}
	public ean13_generic(): Ean13_genericContext | undefined {
		return this.tryGetRuleContext(0, Ean13_genericContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean13; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan13) {
			listener.enterEan13(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan13) {
			listener.exitEan13(this);
		}
	}
}


export class Ean13_genericContext extends ParserRuleContext {
	public gs1_prefix(): Gs1_prefixContext {
		return this.getRuleContext(0, Gs1_prefixContext);
	}
	public ean_13_manprod(): Ean_13_manprodContext {
		return this.getRuleContext(0, Ean_13_manprodContext);
	}
	public check_code(): Check_codeContext {
		return this.getRuleContext(0, Check_codeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean13_generic; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan13_generic) {
			listener.enterEan13_generic(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan13_generic) {
			listener.exitEan13_generic(this);
		}
	}
}


export class Ean13_ismnContext extends ParserRuleContext {
	public gs1_prefix_ismn(): Gs1_prefix_ismnContext {
		return this.getRuleContext(0, Gs1_prefix_ismnContext);
	}
	public ismn_publisher_number(): Ismn_publisher_numberContext {
		return this.getRuleContext(0, Ismn_publisher_numberContext);
	}
	public ismn_item_number(): Ismn_item_numberContext {
		return this.getRuleContext(0, Ismn_item_numberContext);
	}
	public check_code(): Check_codeContext {
		return this.getRuleContext(0, Check_codeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean13_ismn; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan13_ismn) {
			listener.enterEan13_ismn(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan13_ismn) {
			listener.exitEan13_ismn(this);
		}
	}
}


export class Gs1_prefix_ismnContext extends ParserRuleContext {
	public DIGIT_9(): TerminalNode[];
	public DIGIT_9(i: number): TerminalNode;
	public DIGIT_9(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gtinParser.DIGIT_9);
		} else {
			return this.getToken(gtinParser.DIGIT_9, i);
		}
	}
	public DIGIT_7(): TerminalNode { return this.getToken(gtinParser.DIGIT_7, 0); }
	public DIGIT_0(): TerminalNode { return this.getToken(gtinParser.DIGIT_0, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gs1_prefix_ismn; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGs1_prefix_ismn) {
			listener.enterGs1_prefix_ismn(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGs1_prefix_ismn) {
			listener.exitGs1_prefix_ismn(this);
		}
	}
}


export class Ismn_publisher_numberContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ismn_publisher_number; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterIsmn_publisher_number) {
			listener.enterIsmn_publisher_number(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitIsmn_publisher_number) {
			listener.exitIsmn_publisher_number(this);
		}
	}
}


export class Ismn_item_numberContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ismn_item_number; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterIsmn_item_number) {
			listener.enterIsmn_item_number(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitIsmn_item_number) {
			listener.exitIsmn_item_number(this);
		}
	}
}


export class Ean13_booklandContext extends ParserRuleContext {
	public bookland_isbn(): Bookland_isbnContext {
		return this.getRuleContext(0, Bookland_isbnContext);
	}
	public gs1_prefix_bookland_1(): Gs1_prefix_bookland_1Context | undefined {
		return this.tryGetRuleContext(0, Gs1_prefix_bookland_1Context);
	}
	public gs1_prefix_bookland_2(): Gs1_prefix_bookland_2Context | undefined {
		return this.tryGetRuleContext(0, Gs1_prefix_bookland_2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean13_bookland; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan13_bookland) {
			listener.enterEan13_bookland(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan13_bookland) {
			listener.exitEan13_bookland(this);
		}
	}
}


export class Bookland_isbnContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_bookland_isbn; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterBookland_isbn) {
			listener.enterBookland_isbn(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitBookland_isbn) {
			listener.exitBookland_isbn(this);
		}
	}
}


export class Gs1_prefix_bookland_1Context extends ParserRuleContext {
	public DIGIT_9(): TerminalNode[];
	public DIGIT_9(i: number): TerminalNode;
	public DIGIT_9(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gtinParser.DIGIT_9);
		} else {
			return this.getToken(gtinParser.DIGIT_9, i);
		}
	}
	public DIGIT_7(): TerminalNode[];
	public DIGIT_7(i: number): TerminalNode;
	public DIGIT_7(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gtinParser.DIGIT_7);
		} else {
			return this.getToken(gtinParser.DIGIT_7, i);
		}
	}
	public DIGIT_1(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_1, 0); }
	public DIGIT_2(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_2, 0); }
	public DIGIT_3(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_3, 0); }
	public DIGIT_4(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_4, 0); }
	public DIGIT_5(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_5, 0); }
	public DIGIT_6(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_6, 0); }
	public DIGIT_8(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_8, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gs1_prefix_bookland_1; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGs1_prefix_bookland_1) {
			listener.enterGs1_prefix_bookland_1(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGs1_prefix_bookland_1) {
			listener.exitGs1_prefix_bookland_1(this);
		}
	}
}


export class Gs1_prefix_bookland_2Context extends ParserRuleContext {
	public DIGIT_9(): TerminalNode { return this.getToken(gtinParser.DIGIT_9, 0); }
	public DIGIT_7(): TerminalNode { return this.getToken(gtinParser.DIGIT_7, 0); }
	public DIGIT_8(): TerminalNode { return this.getToken(gtinParser.DIGIT_8, 0); }
	public any_digit(): Any_digitContext {
		return this.getRuleContext(0, Any_digitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gs1_prefix_bookland_2; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGs1_prefix_bookland_2) {
			listener.enterGs1_prefix_bookland_2(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGs1_prefix_bookland_2) {
			listener.exitGs1_prefix_bookland_2(this);
		}
	}
}


export class Gs1_prefix_issnContext extends ParserRuleContext {
	public DIGIT_9(): TerminalNode { return this.getToken(gtinParser.DIGIT_9, 0); }
	public DIGIT_7(): TerminalNode[];
	public DIGIT_7(i: number): TerminalNode;
	public DIGIT_7(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gtinParser.DIGIT_7);
		} else {
			return this.getToken(gtinParser.DIGIT_7, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gs1_prefix_issn; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGs1_prefix_issn) {
			listener.enterGs1_prefix_issn(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGs1_prefix_issn) {
			listener.exitGs1_prefix_issn(this);
		}
	}
}


export class Ean13_issnContext extends ParserRuleContext {
	public gs1_prefix_issn(): Gs1_prefix_issnContext {
		return this.getRuleContext(0, Gs1_prefix_issnContext);
	}
	public issn(): IssnContext {
		return this.getRuleContext(0, IssnContext);
	}
	public check_code(): Check_codeContext {
		return this.getRuleContext(0, Check_codeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean13_issn; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan13_issn) {
			listener.enterEan13_issn(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan13_issn) {
			listener.exitEan13_issn(this);
		}
	}
}


export class IssnContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_issn; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterIssn) {
			listener.enterIssn(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitIssn) {
			listener.exitIssn(this);
		}
	}
}


export class Ean_13_manprodContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean_13_manprod; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan_13_manprod) {
			listener.enterEan_13_manprod(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan_13_manprod) {
			listener.exitEan_13_manprod(this);
		}
	}
}


export class Gs1_prefixContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_gs1_prefix; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterGs1_prefix) {
			listener.enterGs1_prefix(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitGs1_prefix) {
			listener.exitGs1_prefix(this);
		}
	}
}


export class Ean14Context extends ParserRuleContext {
	public ean14_packaging(): Ean14_packagingContext {
		return this.getRuleContext(0, Ean14_packagingContext);
	}
	public ean14_product(): Ean14_productContext {
		return this.getRuleContext(0, Ean14_productContext);
	}
	public check_code(): Check_codeContext {
		return this.getRuleContext(0, Check_codeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean14; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan14) {
			listener.enterEan14(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan14) {
			listener.exitEan14(this);
		}
	}
}


export class Ean14_appidContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean14_appid; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan14_appid) {
			listener.enterEan14_appid(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan14_appid) {
			listener.exitEan14_appid(this);
		}
	}
}


export class Ean14_packagingContext extends ParserRuleContext {
	public DIGIT_0(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_0, 0); }
	public DIGIT_1(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_1, 0); }
	public DIGIT_2(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_2, 0); }
	public DIGIT_3(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_3, 0); }
	public DIGIT_4(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_4, 0); }
	public DIGIT_5(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_5, 0); }
	public DIGIT_6(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_6, 0); }
	public DIGIT_7(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_7, 0); }
	public DIGIT_8(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_8, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean14_packaging; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan14_packaging) {
			listener.enterEan14_packaging(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan14_packaging) {
			listener.exitEan14_packaging(this);
		}
	}
}


export class Ean14_productContext extends ParserRuleContext {
	public any_digit(): Any_digitContext[];
	public any_digit(i: number): Any_digitContext;
	public any_digit(i?: number): Any_digitContext | Any_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Any_digitContext);
		} else {
			return this.getRuleContext(i, Any_digitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_ean14_product; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterEan14_product) {
			listener.enterEan14_product(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitEan14_product) {
			listener.exitEan14_product(this);
		}
	}
}


export class Any_digitContext extends ParserRuleContext {
	public DIGIT_0(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_0, 0); }
	public DIGIT_1(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_1, 0); }
	public DIGIT_2(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_2, 0); }
	public DIGIT_3(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_3, 0); }
	public DIGIT_4(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_4, 0); }
	public DIGIT_5(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_5, 0); }
	public DIGIT_6(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_6, 0); }
	public DIGIT_7(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_7, 0); }
	public DIGIT_8(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_8, 0); }
	public DIGIT_9(): TerminalNode | undefined { return this.tryGetToken(gtinParser.DIGIT_9, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gtinParser.RULE_any_digit; }
	// @Override
	public enterRule(listener: gtinListener): void {
		if (listener.enterAny_digit) {
			listener.enterAny_digit(this);
		}
	}
	// @Override
	public exitRule(listener: gtinListener): void {
		if (listener.exitAny_digit) {
			listener.exitAny_digit(this);
		}
	}
}


