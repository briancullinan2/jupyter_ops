// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dcm/DCM_2_0_grammar.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { DCM_2_0_grammarListener } from "./DCM_2_0_grammarListener";

export class DCM_2_0_grammarParser extends Parser {
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
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly NAME = 34;
	public static readonly TEXT = 35;
	public static readonly INT = 36;
	public static readonly FLOAT = 37;
	public static readonly MINUS = 38;
	public static readonly WS = 39;
	public static readonly COMMENT = 40;
	public static readonly RULE_konservierung = 0;
	public static readonly RULE_kons_kopf = 1;
	public static readonly RULE_modulkopf_info = 2;
	public static readonly RULE_mod_zeile = 3;
	public static readonly RULE_mod_anf_zeile = 4;
	public static readonly RULE_mod_fort_zeile = 5;
	public static readonly RULE_mod_ele_name = 6;
	public static readonly RULE_mod_ele_wert = 7;
	public static readonly RULE_funktionsdef = 8;
	public static readonly RULE_funktionszeile = 9;
	public static readonly RULE_fkt_version = 10;
	public static readonly RULE_fkt_langname = 11;
	public static readonly RULE_variantendef = 12;
	public static readonly RULE_variantenkrit = 13;
	public static readonly RULE_krit_name = 14;
	public static readonly RULE_krit_wert = 15;
	public static readonly RULE_kons_rumpf = 16;
	public static readonly RULE_kenngroesse = 17;
	public static readonly RULE_kennwert = 18;
	public static readonly RULE_kennwerteblock = 19;
	public static readonly RULE_kennlinie = 20;
	public static readonly RULE_kennfeld = 21;
	public static readonly RULE_gruppenstuetzstellen = 22;
	public static readonly RULE_kenntext = 23;
	public static readonly RULE_kgr_info = 24;
	public static readonly RULE_einheit_x = 25;
	public static readonly RULE_einheit_y = 26;
	public static readonly RULE_einheit_w = 27;
	public static readonly RULE_langname = 28;
	public static readonly RULE_displayname = 29;
	public static readonly RULE_var_abhangigkeiten = 30;
	public static readonly RULE_var_abh = 31;
	public static readonly RULE_funktionszugehorigkeit = 32;
	public static readonly RULE_anzahl_x = 33;
	public static readonly RULE_anzahl_y = 34;
	public static readonly RULE_werteliste = 35;
	public static readonly RULE_werteliste_kwb = 36;
	public static readonly RULE_sst_liste_x = 37;
	public static readonly RULE_kf_zeile_liste = 38;
	public static readonly RULE_kf_zeile_liste_r = 39;
	public static readonly RULE_kf_zeile_liste_tx = 40;
	public static readonly RULE_realzahl = 41;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"konservierung", "kons_kopf", "modulkopf_info", "mod_zeile", "mod_anf_zeile", 
		"mod_fort_zeile", "mod_ele_name", "mod_ele_wert", "funktionsdef", "funktionszeile", 
		"fkt_version", "fkt_langname", "variantendef", "variantenkrit", "krit_name", 
		"krit_wert", "kons_rumpf", "kenngroesse", "kennwert", "kennwerteblock", 
		"kennlinie", "kennfeld", "gruppenstuetzstellen", "kenntext", "kgr_info", 
		"einheit_x", "einheit_y", "einheit_w", "langname", "displayname", "var_abhangigkeiten", 
		"var_abh", "funktionszugehorigkeit", "anzahl_x", "anzahl_y", "werteliste", 
		"werteliste_kwb", "sst_liste_x", "kf_zeile_liste", "kf_zeile_liste_r", 
		"kf_zeile_liste_tx", "realzahl",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\n'", "'KONSERVIERUNG_FORMAT 2.0'", "'MODULKOPF'", "'FUNKTIONEN'", 
		"'END'", "'FKT'", "'VARIANTENKODIERUNG'", "'KRITERIUM'", "'FESTWERT'", 
		"'WERT'", "'TEXT'", "'FESTWERTEBLOCK'", "'KENNLINIE'", "'FESTKENNLINIE'", 
		"'GRUPPENKENNLINIE'", "'KENNFELD'", "'FESTKENNFELD'", "'GRUPPENKENNFELD'", 
		"'STUETZSTELLENVERTEILUNG'", "'TEXTSTRING'", "'EINHEIT_X'", "'EINHEIT_Y'", 
		"'EINHEIT_W'", "'LANGNAME'", "'DISPLAYNAME'", "'VAR'", "','", "'='", "'FUNKTION'", 
		"'ST/X'", "'ST_TX/X'", "'ST/Y'", "'ST_TX/Y'", undefined, undefined, undefined, 
		undefined, "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "NAME", 
		"TEXT", "INT", "FLOAT", "MINUS", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DCM_2_0_grammarParser._LITERAL_NAMES, DCM_2_0_grammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DCM_2_0_grammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DCM_2_0_grammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return DCM_2_0_grammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DCM_2_0_grammarParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DCM_2_0_grammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public konservierung(): KonservierungContext {
		let _localctx: KonservierungContext = new KonservierungContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DCM_2_0_grammarParser.RULE_konservierung);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DCM_2_0_grammarParser.T__0) {
				{
				{
				this.state = 84;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
			this.match(DCM_2_0_grammarParser.T__1);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 91;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
			this.state = 96;
			this.kons_kopf();
			this.state = 97;
			this.kons_rumpf();
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
	public kons_kopf(): Kons_kopfContext {
		let _localctx: Kons_kopfContext = new Kons_kopfContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DCM_2_0_grammarParser.RULE_kons_kopf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__2) {
				{
				this.state = 99;
				this.modulkopf_info();
				}
			}

			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__3) {
				{
				this.state = 102;
				this.funktionsdef();
				}
			}

			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__6) {
				{
				this.state = 105;
				this.variantendef();
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
	public modulkopf_info(): Modulkopf_infoContext {
		let _localctx: Modulkopf_infoContext = new Modulkopf_infoContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DCM_2_0_grammarParser.RULE_modulkopf_info);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 108;
				this.mod_zeile();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__2);
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
	public mod_zeile(): Mod_zeileContext {
		let _localctx: Mod_zeileContext = new Mod_zeileContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DCM_2_0_grammarParser.RULE_mod_zeile);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.mod_anf_zeile();
			this.state = 117;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 114;
					this.mod_fort_zeile();
					}
					}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
	public mod_anf_zeile(): Mod_anf_zeileContext {
		let _localctx: Mod_anf_zeileContext = new Mod_anf_zeileContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DCM_2_0_grammarParser.RULE_mod_anf_zeile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(DCM_2_0_grammarParser.T__2);
			this.state = 121;
			this.mod_ele_name();
			this.state = 122;
			this.mod_ele_wert();
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
	public mod_fort_zeile(): Mod_fort_zeileContext {
		let _localctx: Mod_fort_zeileContext = new Mod_fort_zeileContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DCM_2_0_grammarParser.RULE_mod_fort_zeile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(DCM_2_0_grammarParser.T__2);
			this.state = 125;
			this.mod_ele_wert();
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
	public mod_ele_name(): Mod_ele_nameContext {
		let _localctx: Mod_ele_nameContext = new Mod_ele_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DCM_2_0_grammarParser.RULE_mod_ele_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(DCM_2_0_grammarParser.NAME);
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
	public mod_ele_wert(): Mod_ele_wertContext {
		let _localctx: Mod_ele_wertContext = new Mod_ele_wertContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DCM_2_0_grammarParser.RULE_mod_ele_wert);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(DCM_2_0_grammarParser.TEXT);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 130;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
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
	public funktionsdef(): FunktionsdefContext {
		let _localctx: FunktionsdefContext = new FunktionsdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DCM_2_0_grammarParser.RULE_funktionsdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(DCM_2_0_grammarParser.T__3);
			this.state = 136;
			this.match(DCM_2_0_grammarParser.T__0);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 137;
				this.funktionszeile();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__5);
			this.state = 142;
			this.match(DCM_2_0_grammarParser.T__4);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 143;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
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
	public funktionszeile(): FunktionszeileContext {
		let _localctx: FunktionszeileContext = new FunktionszeileContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DCM_2_0_grammarParser.RULE_funktionszeile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(DCM_2_0_grammarParser.T__5);
			this.state = 149;
			this.match(DCM_2_0_grammarParser.NAME);
			this.state = 150;
			this.fkt_version();
			this.state = 151;
			this.fkt_langname();
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
	public fkt_version(): Fkt_versionContext {
		let _localctx: Fkt_versionContext = new Fkt_versionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DCM_2_0_grammarParser.RULE_fkt_version);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(DCM_2_0_grammarParser.TEXT);
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
	public fkt_langname(): Fkt_langnameContext {
		let _localctx: Fkt_langnameContext = new Fkt_langnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DCM_2_0_grammarParser.RULE_fkt_langname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(DCM_2_0_grammarParser.TEXT);
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 156;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
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
	public variantendef(): VariantendefContext {
		let _localctx: VariantendefContext = new VariantendefContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DCM_2_0_grammarParser.RULE_variantendef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(DCM_2_0_grammarParser.T__6);
			this.state = 162;
			this.match(DCM_2_0_grammarParser.T__0);
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 163;
				this.variantenkrit();
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__7);
			this.state = 168;
			this.match(DCM_2_0_grammarParser.T__4);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 169;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
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
	public variantenkrit(): VariantenkritContext {
		let _localctx: VariantenkritContext = new VariantenkritContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DCM_2_0_grammarParser.RULE_variantenkrit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(DCM_2_0_grammarParser.T__7);
			this.state = 175;
			this.krit_name();
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DCM_2_0_grammarParser.NAME) {
				{
				{
				this.state = 176;
				this.krit_wert();
				}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 182;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
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
	public krit_name(): Krit_nameContext {
		let _localctx: Krit_nameContext = new Krit_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, DCM_2_0_grammarParser.RULE_krit_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(DCM_2_0_grammarParser.NAME);
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
	public krit_wert(): Krit_wertContext {
		let _localctx: Krit_wertContext = new Krit_wertContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DCM_2_0_grammarParser.RULE_krit_wert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(DCM_2_0_grammarParser.NAME);
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
	public kons_rumpf(): Kons_rumpfContext {
		let _localctx: Kons_rumpfContext = new Kons_rumpfContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DCM_2_0_grammarParser.RULE_kons_rumpf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DCM_2_0_grammarParser.T__8) | (1 << DCM_2_0_grammarParser.T__11) | (1 << DCM_2_0_grammarParser.T__12) | (1 << DCM_2_0_grammarParser.T__13) | (1 << DCM_2_0_grammarParser.T__14) | (1 << DCM_2_0_grammarParser.T__15) | (1 << DCM_2_0_grammarParser.T__16) | (1 << DCM_2_0_grammarParser.T__17) | (1 << DCM_2_0_grammarParser.T__18) | (1 << DCM_2_0_grammarParser.T__19))) !== 0)) {
				{
				{
				this.state = 191;
				this.kenngroesse();
				}
				}
				this.state = 196;
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
	public kenngroesse(): KenngroesseContext {
		let _localctx: KenngroesseContext = new KenngroesseContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DCM_2_0_grammarParser.RULE_kenngroesse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DCM_2_0_grammarParser.T__8:
				{
				this.state = 197;
				this.kennwert();
				}
				break;
			case DCM_2_0_grammarParser.T__11:
				{
				this.state = 198;
				this.kennwerteblock();
				}
				break;
			case DCM_2_0_grammarParser.T__12:
			case DCM_2_0_grammarParser.T__13:
			case DCM_2_0_grammarParser.T__14:
				{
				this.state = 199;
				this.kennlinie();
				}
				break;
			case DCM_2_0_grammarParser.T__15:
			case DCM_2_0_grammarParser.T__16:
			case DCM_2_0_grammarParser.T__17:
				{
				this.state = 200;
				this.kennfeld();
				}
				break;
			case DCM_2_0_grammarParser.T__18:
				{
				this.state = 201;
				this.gruppenstuetzstellen();
				}
				break;
			case DCM_2_0_grammarParser.T__19:
				{
				this.state = 202;
				this.kenntext();
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
	public kennwert(): KennwertContext {
		let _localctx: KennwertContext = new KennwertContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, DCM_2_0_grammarParser.RULE_kennwert);
		let _la: number;
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 205;
				this.match(DCM_2_0_grammarParser.T__8);
				this.state = 206;
				this.match(DCM_2_0_grammarParser.NAME);
				this.state = 207;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 208;
				this.kgr_info();
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__22) {
					{
					this.state = 209;
					this.einheit_w();
					}
				}

				this.state = 212;
				this.match(DCM_2_0_grammarParser.T__9);
				this.state = 213;
				this.realzahl();
				this.state = 214;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 215;
				this.match(DCM_2_0_grammarParser.T__4);
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 216;
					this.match(DCM_2_0_grammarParser.T__0);
					}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this.match(DCM_2_0_grammarParser.T__8);
				this.state = 222;
				this.match(DCM_2_0_grammarParser.NAME);
				this.state = 223;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 224;
				this.kgr_info();
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__22) {
					{
					this.state = 225;
					this.einheit_w();
					}
				}

				this.state = 228;
				this.match(DCM_2_0_grammarParser.T__10);
				this.state = 229;
				this.match(DCM_2_0_grammarParser.TEXT);
				this.state = 230;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 231;
				this.match(DCM_2_0_grammarParser.T__4);
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 232;
					this.match(DCM_2_0_grammarParser.T__0);
					}
					}
					this.state = 235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__0);
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
	public kennwerteblock(): KennwerteblockContext {
		let _localctx: KennwerteblockContext = new KennwerteblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, DCM_2_0_grammarParser.RULE_kennwerteblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(DCM_2_0_grammarParser.T__11);
			this.state = 240;
			this.match(DCM_2_0_grammarParser.NAME);
			this.state = 241;
			this.anzahl_x();
			this.state = 242;
			this.match(DCM_2_0_grammarParser.T__0);
			this.state = 243;
			this.kgr_info();
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__22) {
				{
				this.state = 244;
				this.einheit_w();
				}
			}

			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 247;
				this.werteliste_kwb();
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__9 || _la === DCM_2_0_grammarParser.T__10);
			this.state = 252;
			this.match(DCM_2_0_grammarParser.T__4);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 253;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
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
	public kennlinie(): KennlinieContext {
		let _localctx: KennlinieContext = new KennlinieContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, DCM_2_0_grammarParser.RULE_kennlinie);
		let _la: number;
		try {
			this.state = 339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DCM_2_0_grammarParser.T__12:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 258;
				this.match(DCM_2_0_grammarParser.T__12);
				}
				this.state = 259;
				this.match(DCM_2_0_grammarParser.NAME);
				this.state = 260;
				this.anzahl_x();
				this.state = 261;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 262;
				this.kgr_info();
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__20) {
					{
					this.state = 263;
					this.einheit_x();
					}
				}

				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__22) {
					{
					this.state = 266;
					this.einheit_w();
					}
				}

				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 269;
					this.sst_liste_x();
					}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__29 || _la === DCM_2_0_grammarParser.T__30);
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 274;
					this.werteliste();
					}
					}
					this.state = 277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__9);
				this.state = 279;
				this.match(DCM_2_0_grammarParser.T__4);
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 280;
					this.match(DCM_2_0_grammarParser.T__0);
					}
					}
					this.state = 283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__0);
				}
				break;
			case DCM_2_0_grammarParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 285;
				this.match(DCM_2_0_grammarParser.T__13);
				}
				this.state = 286;
				this.match(DCM_2_0_grammarParser.NAME);
				this.state = 287;
				this.anzahl_x();
				this.state = 288;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 289;
				this.kgr_info();
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__20) {
					{
					this.state = 290;
					this.einheit_x();
					}
				}

				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__22) {
					{
					this.state = 293;
					this.einheit_w();
					}
				}

				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 296;
					this.sst_liste_x();
					}
					}
					this.state = 299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__29 || _la === DCM_2_0_grammarParser.T__30);
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 301;
					this.werteliste();
					}
					}
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__9);
				this.state = 306;
				this.match(DCM_2_0_grammarParser.T__4);
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 307;
					this.match(DCM_2_0_grammarParser.T__0);
					}
					}
					this.state = 310;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__0);
				}
				break;
			case DCM_2_0_grammarParser.T__14:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 312;
				this.match(DCM_2_0_grammarParser.T__14);
				}
				this.state = 313;
				this.match(DCM_2_0_grammarParser.NAME);
				this.state = 314;
				this.anzahl_x();
				this.state = 315;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 316;
				this.kgr_info();
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__20) {
					{
					this.state = 317;
					this.einheit_x();
					}
				}

				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__22) {
					{
					this.state = 320;
					this.einheit_w();
					}
				}

				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 323;
					this.sst_liste_x();
					}
					}
					this.state = 326;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__29 || _la === DCM_2_0_grammarParser.T__30);
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 328;
					this.werteliste();
					}
					}
					this.state = 331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__9);
				this.state = 333;
				this.match(DCM_2_0_grammarParser.T__4);
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 334;
					this.match(DCM_2_0_grammarParser.T__0);
					}
					}
					this.state = 337;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__0);
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
	public kennfeld(): KennfeldContext {
		let _localctx: KennfeldContext = new KennfeldContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, DCM_2_0_grammarParser.RULE_kennfeld);
		let _la: number;
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DCM_2_0_grammarParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 341;
				this.match(DCM_2_0_grammarParser.T__15);
				}
				this.state = 342;
				this.match(DCM_2_0_grammarParser.NAME);
				this.state = 343;
				this.anzahl_x();
				this.state = 344;
				this.anzahl_y();
				this.state = 345;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 346;
				this.kgr_info();
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__20) {
					{
					this.state = 347;
					this.einheit_x();
					}
				}

				this.state = 351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__21) {
					{
					this.state = 350;
					this.einheit_y();
					}
				}

				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__22) {
					{
					this.state = 353;
					this.einheit_w();
					}
				}

				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 356;
					this.sst_liste_x();
					}
					}
					this.state = 359;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__29 || _la === DCM_2_0_grammarParser.T__30);
				this.state = 361;
				this.kf_zeile_liste();
				this.state = 362;
				this.match(DCM_2_0_grammarParser.T__4);
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 363;
					this.match(DCM_2_0_grammarParser.T__0);
					}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__0);
				}
				break;
			case DCM_2_0_grammarParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 368;
				this.match(DCM_2_0_grammarParser.T__16);
				}
				this.state = 369;
				this.match(DCM_2_0_grammarParser.NAME);
				this.state = 370;
				this.anzahl_x();
				this.state = 371;
				this.anzahl_y();
				this.state = 372;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 373;
				this.kgr_info();
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__20) {
					{
					this.state = 374;
					this.einheit_x();
					}
				}

				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__21) {
					{
					this.state = 377;
					this.einheit_y();
					}
				}

				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__22) {
					{
					this.state = 380;
					this.einheit_w();
					}
				}

				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 383;
					this.sst_liste_x();
					}
					}
					this.state = 386;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__29 || _la === DCM_2_0_grammarParser.T__30);
				this.state = 388;
				this.kf_zeile_liste();
				this.state = 389;
				this.match(DCM_2_0_grammarParser.T__4);
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 390;
					this.match(DCM_2_0_grammarParser.T__0);
					}
					}
					this.state = 393;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__0);
				}
				break;
			case DCM_2_0_grammarParser.T__17:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 395;
				this.match(DCM_2_0_grammarParser.T__17);
				}
				this.state = 396;
				this.match(DCM_2_0_grammarParser.NAME);
				this.state = 397;
				this.anzahl_x();
				this.state = 398;
				this.anzahl_y();
				this.state = 399;
				this.match(DCM_2_0_grammarParser.T__0);
				this.state = 400;
				this.kgr_info();
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__20) {
					{
					this.state = 401;
					this.einheit_x();
					}
				}

				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__21) {
					{
					this.state = 404;
					this.einheit_y();
					}
				}

				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DCM_2_0_grammarParser.T__22) {
					{
					this.state = 407;
					this.einheit_w();
					}
				}

				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 410;
					this.sst_liste_x();
					}
					}
					this.state = 413;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__29 || _la === DCM_2_0_grammarParser.T__30);
				this.state = 415;
				this.kf_zeile_liste();
				this.state = 416;
				this.match(DCM_2_0_grammarParser.T__4);
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 417;
					this.match(DCM_2_0_grammarParser.T__0);
					}
					}
					this.state = 420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__0);
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
	public gruppenstuetzstellen(): GruppenstuetzstellenContext {
		let _localctx: GruppenstuetzstellenContext = new GruppenstuetzstellenContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, DCM_2_0_grammarParser.RULE_gruppenstuetzstellen);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(DCM_2_0_grammarParser.T__18);
			this.state = 425;
			this.match(DCM_2_0_grammarParser.NAME);
			this.state = 426;
			this.anzahl_x();
			this.state = 427;
			this.match(DCM_2_0_grammarParser.T__0);
			this.state = 428;
			this.kgr_info();
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__20) {
				{
				this.state = 429;
				this.einheit_x();
				}
			}

			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 432;
				this.sst_liste_x();
				}
				}
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__29 || _la === DCM_2_0_grammarParser.T__30);
			this.state = 437;
			this.match(DCM_2_0_grammarParser.T__4);
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 438;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
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
	public kenntext(): KenntextContext {
		let _localctx: KenntextContext = new KenntextContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, DCM_2_0_grammarParser.RULE_kenntext);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(DCM_2_0_grammarParser.T__19);
			this.state = 444;
			this.match(DCM_2_0_grammarParser.NAME);
			this.state = 445;
			this.match(DCM_2_0_grammarParser.T__0);
			this.state = 446;
			this.kgr_info();
			this.state = 447;
			this.match(DCM_2_0_grammarParser.T__10);
			this.state = 448;
			this.match(DCM_2_0_grammarParser.TEXT);
			this.state = 449;
			this.match(DCM_2_0_grammarParser.T__0);
			this.state = 450;
			this.match(DCM_2_0_grammarParser.T__4);
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 451;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				}
				this.state = 454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__0);
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
	public kgr_info(): Kgr_infoContext {
		let _localctx: Kgr_infoContext = new Kgr_infoContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, DCM_2_0_grammarParser.RULE_kgr_info);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__23) {
				{
				this.state = 456;
				this.langname();
				}
			}

			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__24) {
				{
				this.state = 459;
				this.displayname();
				}
			}

			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__25) {
				{
				this.state = 462;
				this.var_abhangigkeiten();
				}
			}

			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DCM_2_0_grammarParser.T__28) {
				{
				this.state = 465;
				this.funktionszugehorigkeit();
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
	public einheit_x(): Einheit_xContext {
		let _localctx: Einheit_xContext = new Einheit_xContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, DCM_2_0_grammarParser.RULE_einheit_x);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(DCM_2_0_grammarParser.T__20);
			this.state = 469;
			this.match(DCM_2_0_grammarParser.TEXT);
			this.state = 470;
			this.match(DCM_2_0_grammarParser.T__0);
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
	public einheit_y(): Einheit_yContext {
		let _localctx: Einheit_yContext = new Einheit_yContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, DCM_2_0_grammarParser.RULE_einheit_y);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(DCM_2_0_grammarParser.T__21);
			this.state = 473;
			this.match(DCM_2_0_grammarParser.TEXT);
			this.state = 474;
			this.match(DCM_2_0_grammarParser.T__0);
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
	public einheit_w(): Einheit_wContext {
		let _localctx: Einheit_wContext = new Einheit_wContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, DCM_2_0_grammarParser.RULE_einheit_w);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(DCM_2_0_grammarParser.T__22);
			this.state = 477;
			this.match(DCM_2_0_grammarParser.TEXT);
			this.state = 478;
			this.match(DCM_2_0_grammarParser.T__0);
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
	public langname(): LangnameContext {
		let _localctx: LangnameContext = new LangnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, DCM_2_0_grammarParser.RULE_langname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(DCM_2_0_grammarParser.T__23);
			this.state = 481;
			this.match(DCM_2_0_grammarParser.TEXT);
			this.state = 482;
			this.match(DCM_2_0_grammarParser.T__0);
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
	public displayname(): DisplaynameContext {
		let _localctx: DisplaynameContext = new DisplaynameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, DCM_2_0_grammarParser.RULE_displayname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.match(DCM_2_0_grammarParser.T__24);
			this.state = 485;
			_la = this._input.LA(1);
			if (!(_la === DCM_2_0_grammarParser.NAME || _la === DCM_2_0_grammarParser.TEXT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 486;
			this.match(DCM_2_0_grammarParser.T__0);
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
	public var_abhangigkeiten(): Var_abhangigkeitenContext {
		let _localctx: Var_abhangigkeitenContext = new Var_abhangigkeitenContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, DCM_2_0_grammarParser.RULE_var_abhangigkeiten);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.match(DCM_2_0_grammarParser.T__25);
			this.state = 489;
			this.var_abh();
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DCM_2_0_grammarParser.T__26) {
				{
				{
				this.state = 490;
				this.match(DCM_2_0_grammarParser.T__26);
				this.state = 491;
				this.var_abh();
				}
				}
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 497;
			this.match(DCM_2_0_grammarParser.T__0);
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
	public var_abh(): Var_abhContext {
		let _localctx: Var_abhContext = new Var_abhContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, DCM_2_0_grammarParser.RULE_var_abh);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.match(DCM_2_0_grammarParser.NAME);
			this.state = 500;
			this.match(DCM_2_0_grammarParser.T__27);
			this.state = 501;
			this.match(DCM_2_0_grammarParser.NAME);
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
	public funktionszugehorigkeit(): FunktionszugehorigkeitContext {
		let _localctx: FunktionszugehorigkeitContext = new FunktionszugehorigkeitContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, DCM_2_0_grammarParser.RULE_funktionszugehorigkeit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(DCM_2_0_grammarParser.T__28);
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 504;
				this.match(DCM_2_0_grammarParser.NAME);
				}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.NAME);
			this.state = 509;
			this.match(DCM_2_0_grammarParser.T__0);
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
	public anzahl_x(): Anzahl_xContext {
		let _localctx: Anzahl_xContext = new Anzahl_xContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, DCM_2_0_grammarParser.RULE_anzahl_x);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(DCM_2_0_grammarParser.INT);
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
	public anzahl_y(): Anzahl_yContext {
		let _localctx: Anzahl_yContext = new Anzahl_yContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, DCM_2_0_grammarParser.RULE_anzahl_y);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(DCM_2_0_grammarParser.INT);
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
	public werteliste(): WertelisteContext {
		let _localctx: WertelisteContext = new WertelisteContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, DCM_2_0_grammarParser.RULE_werteliste);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(DCM_2_0_grammarParser.T__9);
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 516;
				this.realzahl();
				}
				}
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.INT || _la === DCM_2_0_grammarParser.FLOAT);
			this.state = 521;
			this.match(DCM_2_0_grammarParser.T__0);
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
	public werteliste_kwb(): Werteliste_kwbContext {
		let _localctx: Werteliste_kwbContext = new Werteliste_kwbContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, DCM_2_0_grammarParser.RULE_werteliste_kwb);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DCM_2_0_grammarParser.T__9:
				{
				this.state = 523;
				this.match(DCM_2_0_grammarParser.T__9);
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 524;
					this.realzahl();
					}
					}
					this.state = 527;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.INT || _la === DCM_2_0_grammarParser.FLOAT);
				this.state = 529;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				break;
			case DCM_2_0_grammarParser.T__10:
				{
				this.state = 531;
				this.match(DCM_2_0_grammarParser.T__10);
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 532;
					this.match(DCM_2_0_grammarParser.TEXT);
					}
					}
					this.state = 535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.TEXT);
				this.state = 537;
				this.match(DCM_2_0_grammarParser.T__0);
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
	public sst_liste_x(): Sst_liste_xContext {
		let _localctx: Sst_liste_xContext = new Sst_liste_xContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, DCM_2_0_grammarParser.RULE_sst_liste_x);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DCM_2_0_grammarParser.T__29:
				{
				this.state = 540;
				this.match(DCM_2_0_grammarParser.T__29);
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 541;
					this.realzahl();
					}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.INT || _la === DCM_2_0_grammarParser.FLOAT);
				this.state = 546;
				this.match(DCM_2_0_grammarParser.T__0);
				}
				break;
			case DCM_2_0_grammarParser.T__30:
				{
				this.state = 548;
				this.match(DCM_2_0_grammarParser.T__30);
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 549;
					this.match(DCM_2_0_grammarParser.TEXT);
					}
					}
					this.state = 552;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.TEXT);
				this.state = 554;
				this.match(DCM_2_0_grammarParser.T__0);
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
	public kf_zeile_liste(): Kf_zeile_listeContext {
		let _localctx: Kf_zeile_listeContext = new Kf_zeile_listeContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, DCM_2_0_grammarParser.RULE_kf_zeile_liste);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DCM_2_0_grammarParser.T__31:
				{
				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 557;
					this.kf_zeile_liste_r();
					}
					}
					this.state = 560;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__31);
				}
				break;
			case DCM_2_0_grammarParser.T__32:
				{
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 562;
					this.kf_zeile_liste_tx();
					}
					}
					this.state = 565;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DCM_2_0_grammarParser.T__32);
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
	public kf_zeile_liste_r(): Kf_zeile_liste_rContext {
		let _localctx: Kf_zeile_liste_rContext = new Kf_zeile_liste_rContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, DCM_2_0_grammarParser.RULE_kf_zeile_liste_r);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 569;
			this.match(DCM_2_0_grammarParser.T__31);
			this.state = 570;
			this.realzahl();
			this.state = 571;
			this.match(DCM_2_0_grammarParser.T__0);
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 572;
				this.werteliste();
				}
				}
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__9);
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
	public kf_zeile_liste_tx(): Kf_zeile_liste_txContext {
		let _localctx: Kf_zeile_liste_txContext = new Kf_zeile_liste_txContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, DCM_2_0_grammarParser.RULE_kf_zeile_liste_tx);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 577;
			this.match(DCM_2_0_grammarParser.T__32);
			this.state = 578;
			this.match(DCM_2_0_grammarParser.TEXT);
			this.state = 579;
			this.match(DCM_2_0_grammarParser.T__0);
			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 580;
				this.werteliste();
				}
				}
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DCM_2_0_grammarParser.T__9);
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
	public realzahl(): RealzahlContext {
		let _localctx: RealzahlContext = new RealzahlContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, DCM_2_0_grammarParser.RULE_realzahl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			_la = this._input.LA(1);
			if (!(_la === DCM_2_0_grammarParser.INT || _la === DCM_2_0_grammarParser.FLOAT)) {
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*\u024E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x03\x02\x07\x02X\n\x02\f\x02\x0E\x02[\v\x02\x03\x02\x03\x02\x06\x02_" +
		"\n\x02\r\x02\x0E\x02`\x03\x02\x03\x02\x03\x02\x03\x03\x05\x03g\n\x03\x03" +
		"\x03\x05\x03j\n\x03\x03\x03\x05\x03m\n\x03\x03\x04\x06\x04p\n\x04\r\x04" +
		"\x0E\x04q\x03\x05\x03\x05\x07\x05v\n\x05\f\x05\x0E\x05y\v\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
		"\t\x06\t\x86\n\t\r\t\x0E\t\x87\x03\n\x03\n\x03\n\x06\n\x8D\n\n\r\n\x0E" +
		"\n\x8E\x03\n\x03\n\x06\n\x93\n\n\r\n\x0E\n\x94\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x06\r\xA0\n\r\r\r\x0E\r\xA1\x03\x0E\x03" +
		"\x0E\x03\x0E\x06\x0E\xA7\n\x0E\r\x0E\x0E\x0E\xA8\x03\x0E\x03\x0E\x06\x0E" +
		"\xAD\n\x0E\r\x0E\x0E\x0E\xAE\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xB4\n\x0F" +
		"\f\x0F\x0E\x0F\xB7\v\x0F\x03\x0F\x06\x0F\xBA\n\x0F\r\x0F\x0E\x0F\xBB\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x12\x07\x12\xC3\n\x12\f\x12\x0E\x12\xC6" +
		"\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xCE\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xD5\n\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x06\x14\xDC\n\x14\r\x14\x0E\x14\xDD\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xE5\n\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x06\x14\xEC\n\x14\r\x14\x0E\x14\xED\x05\x14\xF0\n" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xF8\n\x15" +
		"\x03\x15\x06\x15\xFB\n\x15\r\x15\x0E\x15\xFC\x03\x15\x03\x15\x06\x15\u0101" +
		"\n\x15\r\x15\x0E\x15\u0102\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\u010B\n\x16\x03\x16\x05\x16\u010E\n\x16\x03\x16\x06\x16\u0111" +
		"\n\x16\r\x16\x0E\x16\u0112\x03\x16\x06\x16\u0116\n\x16\r\x16\x0E\x16\u0117" +
		"\x03\x16\x03\x16\x06\x16\u011C\n\x16\r\x16\x0E\x16\u011D\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0126\n\x16\x03\x16\x05\x16\u0129" +
		"\n\x16\x03\x16\x06\x16\u012C\n\x16\r\x16\x0E\x16\u012D\x03\x16\x06\x16" +
		"\u0131\n\x16\r\x16\x0E\x16\u0132\x03\x16\x03\x16\x06\x16\u0137\n\x16\r" +
		"\x16\x0E\x16\u0138\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0141\n\x16\x03\x16\x05\x16\u0144\n\x16\x03\x16\x06\x16\u0147\n\x16" +
		"\r\x16\x0E\x16\u0148\x03\x16\x06\x16\u014C\n\x16\r\x16\x0E\x16\u014D\x03" +
		"\x16\x03\x16\x06\x16\u0152\n\x16\r\x16\x0E\x16\u0153\x05\x16\u0156\n\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u015F" +
		"\n\x17\x03\x17\x05\x17\u0162\n\x17\x03\x17\x05\x17\u0165\n\x17\x03\x17" +
		"\x06\x17\u0168\n\x17\r\x17\x0E\x17\u0169\x03\x17\x03\x17\x03\x17\x06\x17" +
		"\u016F\n\x17\r\x17\x0E\x17\u0170\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u017A\n\x17\x03\x17\x05\x17\u017D\n\x17\x03\x17" +
		"\x05\x17\u0180\n\x17\x03\x17\x06\x17\u0183\n\x17\r\x17\x0E\x17\u0184\x03" +
		"\x17\x03\x17\x03\x17\x06\x17\u018A\n\x17\r\x17\x0E\x17\u018B\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0195\n\x17\x03\x17" +
		"\x05\x17\u0198\n\x17\x03\x17\x05\x17\u019B\n\x17\x03\x17\x06\x17\u019E" +
		"\n\x17\r\x17\x0E\x17\u019F\x03\x17\x03\x17\x03\x17\x06\x17\u01A5\n\x17" +
		"\r\x17\x0E\x17\u01A6\x05\x17\u01A9\n\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u01B1\n\x18\x03\x18\x06\x18\u01B4\n\x18\r\x18" +
		"\x0E\x18\u01B5\x03\x18\x03\x18\x06\x18\u01BA\n\x18\r\x18\x0E\x18\u01BB" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x06\x19\u01C7\n\x19\r\x19\x0E\x19\u01C8\x03\x1A\x05\x1A\u01CC\n\x1A\x03" +
		"\x1A\x05\x1A\u01CF\n\x1A\x03\x1A\x05\x1A\u01D2\n\x1A\x03\x1A\x05\x1A\u01D5" +
		"\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x07 \u01EF\n \f \x0E \u01F2" +
		"\v \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x06\"\u01FC\n\"\r\"\x0E" +
		"\"\u01FD\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x06%\u0208\n%\r%\x0E" +
		"%\u0209\x03%\x03%\x03&\x03&\x06&\u0210\n&\r&\x0E&\u0211\x03&\x03&\x03" +
		"&\x03&\x06&\u0218\n&\r&\x0E&\u0219\x03&\x05&\u021D\n&\x03\'\x03\'\x06" +
		"\'\u0221\n\'\r\'\x0E\'\u0222\x03\'\x03\'\x03\'\x03\'\x06\'\u0229\n\'\r" +
		"\'\x0E\'\u022A\x03\'\x05\'\u022E\n\'\x03(\x06(\u0231\n(\r(\x0E(\u0232" +
		"\x03(\x06(\u0236\n(\r(\x0E(\u0237\x05(\u023A\n(\x03)\x03)\x03)\x03)\x06" +
		")\u0240\n)\r)\x0E)\u0241\x03*\x03*\x03*\x03*\x06*\u0248\n*\r*\x0E*\u0249" +
		"\x03+\x03+\x03+\x02\x02\x02,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02" +
		"\x04\x03\x02$%\x03\x02&\'\x02\u0278\x02Y\x03\x02\x02\x02\x04f\x03\x02" +
		"\x02\x02\x06o\x03\x02\x02\x02\bs\x03\x02\x02\x02\nz\x03\x02\x02\x02\f" +
		"~\x03\x02\x02\x02\x0E\x81\x03\x02\x02\x02\x10\x83\x03\x02\x02\x02\x12" +
		"\x89\x03\x02\x02\x02\x14\x96\x03\x02\x02\x02\x16\x9B\x03\x02\x02\x02\x18" +
		"\x9D\x03\x02\x02\x02\x1A\xA3\x03\x02\x02\x02\x1C\xB0\x03\x02\x02\x02\x1E" +
		"\xBD\x03\x02\x02\x02 \xBF\x03\x02\x02\x02\"\xC4\x03\x02\x02\x02$\xCD\x03" +
		"\x02\x02\x02&\xEF\x03\x02\x02\x02(\xF1\x03\x02\x02\x02*\u0155\x03\x02" +
		"\x02\x02,\u01A8\x03\x02\x02\x02.\u01AA\x03\x02\x02\x020\u01BD\x03\x02" +
		"\x02\x022\u01CB\x03\x02\x02\x024\u01D6\x03\x02\x02\x026\u01DA\x03\x02" +
		"\x02\x028\u01DE\x03\x02\x02\x02:\u01E2\x03\x02\x02\x02<\u01E6\x03\x02" +
		"\x02\x02>\u01EA\x03\x02\x02\x02@\u01F5\x03\x02\x02\x02B\u01F9\x03\x02" +
		"\x02\x02D\u0201\x03\x02\x02\x02F\u0203\x03\x02\x02\x02H\u0205\x03\x02" +
		"\x02\x02J\u021C\x03\x02\x02\x02L\u022D\x03\x02\x02\x02N\u0239\x03\x02" +
		"\x02\x02P\u023B\x03\x02\x02\x02R\u0243\x03\x02\x02\x02T\u024B\x03\x02" +
		"\x02\x02VX\x07\x03\x02\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02" +
		"\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\^\x07" +
		"\x04\x02\x02]_\x07\x03\x02\x02^]\x03\x02\x02\x02_`\x03\x02\x02\x02`^\x03" +
		"\x02\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x05\x04\x03\x02cd\x05" +
		"\"\x12\x02d\x03\x03\x02\x02\x02eg\x05\x06\x04\x02fe\x03\x02\x02\x02fg" +
		"\x03\x02\x02\x02gi\x03\x02\x02\x02hj\x05\x12\n\x02ih\x03\x02\x02\x02i" +
		"j\x03\x02\x02\x02jl\x03\x02\x02\x02km\x05\x1A\x0E\x02lk\x03\x02\x02\x02" +
		"lm\x03\x02\x02\x02m\x05\x03\x02\x02\x02np\x05\b\x05\x02on\x03\x02\x02" +
		"\x02pq\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02r\x07\x03\x02" +
		"\x02\x02sw\x05\n\x06\x02tv\x05\f\x07\x02ut\x03\x02\x02\x02vy\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\t\x03\x02\x02\x02yw\x03\x02" +
		"\x02\x02z{\x07\x05\x02\x02{|\x05\x0E\b\x02|}\x05\x10\t\x02}\v\x03\x02" +
		"\x02\x02~\x7F\x07\x05\x02\x02\x7F\x80\x05\x10\t\x02\x80\r\x03\x02\x02" +
		"\x02\x81\x82\x07$\x02\x02\x82\x0F\x03\x02\x02\x02\x83\x85\x07%\x02\x02" +
		"\x84\x86\x07\x03\x02\x02\x85\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02" +
		"\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x11\x03\x02\x02\x02" +
		"\x89\x8A\x07\x06\x02\x02\x8A\x8C\x07\x03\x02\x02\x8B\x8D\x05\x14\v\x02" +
		"\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02" +
		"\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x07\x07\x02\x02" +
		"\x91\x93\x07\x03\x02\x02\x92\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02" +
		"\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x13\x03\x02\x02\x02" +
		"\x96\x97\x07\b\x02\x02\x97\x98\x07$\x02\x02\x98\x99\x05\x16\f\x02\x99" +
		"\x9A\x05\x18\r\x02\x9A\x15\x03\x02\x02\x02\x9B\x9C\x07%\x02\x02\x9C\x17" +
		"\x03\x02\x02\x02\x9D\x9F\x07%\x02\x02\x9E\xA0\x07\x03\x02\x02\x9F\x9E" +
		"\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2" +
		"\x03\x02\x02\x02\xA2\x19\x03\x02\x02\x02\xA3\xA4\x07\t\x02\x02\xA4\xA6" +
		"\x07\x03\x02\x02\xA5\xA7\x05\x1C\x0F\x02\xA6\xA5\x03\x02\x02\x02\xA7\xA8" +
		"\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA" +
		"\x03\x02\x02\x02\xAA\xAC\x07\x07\x02\x02\xAB\xAD\x07\x03\x02\x02\xAC\xAB" +
		"\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF" +
		"\x03\x02\x02\x02\xAF\x1B\x03\x02\x02\x02\xB0\xB1\x07\n\x02\x02\xB1\xB5" +
		"\x05\x1E\x10\x02\xB2\xB4\x05 \x11\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB7" +
		"\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB9" +
		"\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xBA\x07\x03\x02\x02\xB9\xB8" +
		"\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC" +
		"\x03\x02\x02\x02\xBC\x1D\x03\x02\x02\x02\xBD\xBE\x07$\x02\x02\xBE\x1F" +
		"\x03\x02\x02\x02\xBF\xC0\x07$\x02\x02\xC0!\x03\x02\x02\x02\xC1\xC3\x05" +
		"$\x13\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03" +
		"\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5#\x03\x02\x02\x02\xC6\xC4\x03" +
		"\x02\x02\x02\xC7\xCE\x05&\x14\x02\xC8\xCE\x05(\x15\x02\xC9\xCE\x05*\x16" +
		"\x02\xCA\xCE\x05,\x17\x02\xCB\xCE\x05.\x18\x02\xCC\xCE\x050\x19\x02\xCD" +
		"\xC7\x03\x02\x02\x02\xCD\xC8\x03\x02\x02\x02\xCD\xC9\x03\x02\x02\x02\xCD" +
		"\xCA\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE" +
		"%\x03\x02\x02\x02\xCF\xD0\x07\v\x02\x02\xD0\xD1\x07$\x02\x02\xD1\xD2\x07" +
		"\x03\x02\x02\xD2\xD4\x052\x1A\x02\xD3\xD5\x058\x1D\x02\xD4\xD3\x03\x02" +
		"\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x07\f" +
		"\x02\x02\xD7\xD8\x05T+\x02\xD8\xD9\x07\x03\x02\x02\xD9\xDB\x07\x07\x02" +
		"\x02\xDA\xDC\x07\x03\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02" +
		"\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xF0\x03\x02\x02" +
		"\x02\xDF\xE0\x07\v\x02\x02\xE0\xE1\x07$\x02\x02\xE1\xE2\x07\x03\x02\x02" +
		"\xE2\xE4\x052\x1A\x02\xE3\xE5\x058\x1D\x02\xE4\xE3\x03\x02\x02\x02\xE4" +
		"\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x07\r\x02\x02\xE7" +
		"\xE8\x07%\x02\x02\xE8\xE9\x07\x03\x02\x02\xE9\xEB\x07\x07\x02\x02\xEA" +
		"\xEC\x07\x03\x02\x02\xEB\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED" +
		"\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF0\x03\x02\x02\x02\xEF" +
		"\xCF\x03\x02\x02\x02\xEF\xDF\x03\x02\x02\x02\xF0\'\x03\x02\x02\x02\xF1" +
		"\xF2\x07\x0E\x02\x02\xF2\xF3\x07$\x02\x02\xF3\xF4\x05D#\x02\xF4\xF5\x07" +
		"\x03\x02\x02\xF5\xF7\x052\x1A\x02\xF6\xF8\x058\x1D\x02\xF7\xF6\x03\x02" +
		"\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xFB\x05J" +
		"&\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFA\x03\x02" +
		"\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x07" +
		"\x07\x02\x02\xFF\u0101\x07\x03\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101" +
		"\u0102\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02" +
		"\x02\x02\u0103)\x03\x02\x02\x02\u0104\u0105\x07\x0F\x02\x02\u0105\u0106" +
		"\x07$\x02\x02\u0106\u0107\x05D#\x02\u0107\u0108\x07\x03\x02\x02\u0108" +
		"\u010A\x052\x1A\x02\u0109\u010B\x054\x1B\x02\u010A\u0109\x03\x02\x02\x02" +
		"\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C\u010E\x05" +
		"8\x1D\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u0110\x03\x02\x02\x02\u010F\u0111\x05L\'\x02\u0110\u010F\x03\x02\x02" +
		"\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113" +
		"\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0116\x05H%\x02\u0115" +
		"\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0115\x03\x02" +
		"\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119" +
		"\u011B\x07\x07\x02\x02\u011A\u011C\x07\x03\x02\x02\u011B\u011A\x03\x02" +
		"\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D" +
		"\u011E\x03\x02\x02\x02\u011E\u0156\x03\x02\x02\x02\u011F\u0120\x07\x10" +
		"\x02\x02\u0120\u0121\x07$\x02\x02\u0121\u0122\x05D#\x02\u0122\u0123\x07" +
		"\x03\x02\x02\u0123\u0125\x052\x1A\x02\u0124\u0126\x054\x1B\x02\u0125\u0124" +
		"\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02" +
		"\u0127\u0129\x058\x1D\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u012C\x05L\'\x02\u012B" +
		"\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012B\x03\x02" +
		"\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F" +
		"\u0131\x05H%\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02" +
		"\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03" +
		"\x02\x02\x02\u0134\u0136\x07\x07\x02\x02\u0135\u0137\x07\x03\x02\x02\u0136" +
		"\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0136\x03\x02" +
		"\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u0156\x03\x02\x02\x02\u013A" +
		"\u013B\x07\x11\x02\x02\u013B\u013C\x07$\x02\x02\u013C\u013D\x05D#\x02" +
		"\u013D\u013E\x07\x03\x02\x02\u013E\u0140\x052\x1A\x02\u013F\u0141\x05" +
		"4\x1B\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141" +
		"\u0143\x03\x02\x02\x02\u0142\u0144\x058\x1D\x02\u0143\u0142\x03\x02\x02" +
		"\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0146\x03\x02\x02\x02\u0145\u0147" +
		"\x05L\'\x02\u0146\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
		"\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02" +
		"\x02\x02\u014A\u014C\x05H%\x02\u014B\u014A\x03\x02\x02\x02\u014C\u014D" +
		"\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02" +
		"\u014E\u014F\x03\x02\x02\x02\u014F\u0151\x07\x07\x02\x02\u0150\u0152\x07" +
		"\x03\x02\x02\u0151\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02" +
		"\x02\x02\u0155\u0104\x03\x02\x02\x02\u0155\u011F\x03\x02\x02\x02\u0155" +
		"\u013A\x03\x02\x02\x02\u0156+\x03\x02\x02\x02\u0157\u0158\x07\x12\x02" +
		"\x02\u0158\u0159\x07$\x02\x02\u0159\u015A\x05D#\x02\u015A\u015B\x05F$" +
		"\x02\u015B\u015C\x07\x03\x02\x02\u015C\u015E\x052\x1A\x02\u015D\u015F" +
		"\x054\x1B\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02" +
		"\u015F\u0161\x03\x02\x02\x02\u0160\u0162\x056\x1C\x02\u0161\u0160\x03" +
		"\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163" +
		"\u0165\x058\x1D\x02\u0164\u0163\x03\x02\x02\x02\u0164\u0165\x03\x02\x02" +
		"\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0168\x05L\'\x02\u0167\u0166\x03" +
		"\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169" +
		"\u016A\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x05N(\x02" +
		"\u016C\u016E\x07\x07\x02\x02\u016D\u016F\x07\x03\x02\x02\u016E\u016D\x03" +
		"\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170" +
		"\u0171\x03\x02\x02\x02\u0171\u01A9\x03\x02\x02\x02\u0172\u0173\x07\x13" +
		"\x02\x02\u0173\u0174\x07$\x02\x02\u0174\u0175\x05D#\x02\u0175\u0176\x05" +
		"F$\x02\u0176\u0177\x07\x03\x02\x02\u0177\u0179\x052\x1A\x02\u0178\u017A" +
		"\x054\x1B\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02" +
		"\u017A\u017C\x03\x02\x02\x02\u017B\u017D\x056\x1C\x02\u017C\u017B\x03" +
		"\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E" +
		"\u0180\x058\x1D\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02" +
		"\x02\u0180\u0182\x03\x02\x02\x02\u0181\u0183\x05L\'\x02\u0182\u0181\x03" +
		"\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184" +
		"\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x05N(\x02" +
		"\u0187\u0189\x07\x07\x02\x02\u0188\u018A\x07\x03\x02\x02\u0189\u0188\x03" +
		"\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B" +
		"\u018C\x03\x02\x02\x02\u018C\u01A9\x03\x02\x02\x02\u018D\u018E\x07\x14" +
		"\x02\x02\u018E\u018F\x07$\x02\x02\u018F\u0190\x05D#\x02\u0190\u0191\x05" +
		"F$\x02\u0191\u0192\x07\x03\x02\x02\u0192\u0194\x052\x1A\x02\u0193\u0195" +
		"\x054\x1B\x02\u0194\u0193\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02" +
		"\u0195\u0197\x03\x02\x02\x02\u0196\u0198\x056\x1C\x02\u0197\u0196\x03" +
		"\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199" +
		"\u019B\x058\x1D\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02" +
		"\x02\u019B\u019D\x03\x02\x02\x02\u019C\u019E\x05L\'\x02\u019D\u019C\x03" +
		"\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
		"\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x05N(\x02" +
		"\u01A2\u01A4\x07\x07\x02\x02\u01A3\u01A5\x07\x03\x02\x02\u01A4\u01A3\x03" +
		"\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6" +
		"\u01A7\x03\x02\x02\x02\u01A7\u01A9\x03\x02\x02\x02\u01A8\u0157\x03\x02" +
		"\x02\x02\u01A8\u0172\x03\x02\x02\x02\u01A8\u018D\x03\x02\x02\x02\u01A9" +
		"-\x03\x02\x02\x02\u01AA\u01AB\x07\x15\x02\x02\u01AB\u01AC\x07$\x02\x02" +
		"\u01AC\u01AD\x05D#\x02\u01AD\u01AE\x07\x03\x02\x02\u01AE\u01B0\x052\x1A" +
		"\x02\u01AF\u01B1\x054\x1B\x02\u01B0\u01AF\x03\x02\x02\x02\u01B0\u01B1" +
		"\x03\x02\x02\x02\u01B1\u01B3\x03\x02\x02\x02\u01B2\u01B4\x05L\'\x02\u01B3" +
		"\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
		"\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\u01B9\x07\x07\x02\x02\u01B8\u01BA\x07\x03\x02\x02\u01B9\u01B8\x03\x02" +
		"\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB" +
		"\u01BC\x03\x02\x02\x02\u01BC/\x03\x02\x02\x02\u01BD\u01BE\x07\x16\x02" +
		"\x02\u01BE\u01BF\x07$\x02\x02\u01BF\u01C0\x07\x03\x02\x02\u01C0\u01C1" +
		"\x052\x1A\x02\u01C1\u01C2\x07\r\x02\x02\u01C2\u01C3\x07%\x02\x02\u01C3" +
		"\u01C4\x07\x03\x02\x02\u01C4\u01C6\x07\x07\x02\x02\u01C5\u01C7\x07\x03" +
		"\x02\x02\u01C6\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8" +
		"\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C91\x03\x02\x02" +
		"\x02\u01CA\u01CC\x05:\x1E\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC" +
		"\x03\x02\x02\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CF\x05<\x1F\x02" +
		"\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03" +
		"\x02\x02\x02\u01D0\u01D2\x05> \x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2" +
		"\x03\x02\x02\x02\u01D2\u01D4\x03\x02\x02\x02\u01D3\u01D5\x05B\"\x02\u01D4" +
		"\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D53\x03\x02\x02" +
		"\x02\u01D6\u01D7\x07\x17\x02\x02\u01D7\u01D8\x07%\x02\x02\u01D8\u01D9" +
		"\x07\x03\x02\x02\u01D95\x03\x02\x02\x02\u01DA\u01DB\x07\x18\x02\x02\u01DB" +
		"\u01DC\x07%\x02\x02\u01DC\u01DD\x07\x03\x02\x02\u01DD7\x03\x02\x02\x02" +
		"\u01DE\u01DF\x07\x19\x02\x02\u01DF\u01E0\x07%\x02\x02\u01E0\u01E1\x07" +
		"\x03\x02\x02\u01E19\x03\x02\x02\x02\u01E2\u01E3\x07\x1A\x02\x02\u01E3" +
		"\u01E4\x07%\x02\x02\u01E4\u01E5\x07\x03\x02\x02\u01E5;\x03\x02\x02\x02" +
		"\u01E6\u01E7\x07\x1B\x02\x02\u01E7\u01E8\t\x02\x02\x02\u01E8\u01E9\x07" +
		"\x03\x02\x02\u01E9=\x03\x02\x02\x02\u01EA\u01EB\x07\x1C\x02\x02\u01EB" +
		"\u01F0\x05@!\x02\u01EC\u01ED\x07\x1D\x02\x02\u01ED\u01EF\x05@!\x02\u01EE" +
		"\u01EC\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03\x02" +
		"\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2" +
		"\u01F0\x03\x02\x02\x02\u01F3\u01F4\x07\x03\x02\x02\u01F4?\x03\x02\x02" +
		"\x02\u01F5\u01F6\x07$\x02\x02\u01F6\u01F7\x07\x1E\x02\x02\u01F7\u01F8" +
		"\x07$\x02\x02\u01F8A\x03\x02\x02\x02\u01F9\u01FB\x07\x1F\x02\x02\u01FA" +
		"\u01FC\x07$\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02" +
		"\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF" +
		"\x03\x02\x02\x02\u01FF\u0200\x07\x03\x02\x02\u0200C\x03\x02\x02\x02\u0201" +
		"\u0202\x07&\x02\x02\u0202E\x03\x02\x02\x02\u0203\u0204\x07&\x02\x02\u0204" +
		"G\x03\x02\x02\x02\u0205\u0207\x07\f\x02\x02\u0206\u0208\x05T+\x02\u0207" +
		"\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u0207\x03\x02" +
		"\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B" +
		"\u020C\x07\x03\x02\x02\u020CI\x03\x02\x02\x02\u020D\u020F\x07\f\x02\x02" +
		"\u020E\u0210\x05T+\x02\u020F\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02" +
		"\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
		"\u0213\x03\x02\x02\x02\u0213\u0214\x07\x03\x02\x02\u0214\u021D\x03\x02" +
		"\x02\x02\u0215\u0217\x07\r\x02\x02\u0216\u0218\x07%\x02\x02\u0217\u0216" +
		"\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02" +
		"\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x07" +
		"\x03\x02\x02\u021C\u020D\x03\x02\x02\x02\u021C\u0215\x03\x02\x02\x02\u021D" +
		"K\x03\x02\x02\x02\u021E\u0220\x07 \x02\x02\u021F\u0221\x05T+\x02\u0220" +
		"\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0220\x03\x02" +
		"\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224" +
		"\u0225\x07\x03\x02\x02\u0225\u022E\x03\x02\x02\x02\u0226\u0228\x07!\x02" +
		"\x02\u0227\u0229\x07%\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229\u022A" +
		"\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02" +
		"\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x07\x03\x02\x02\u022D\u021E\x03" +
		"\x02\x02\x02\u022D\u0226\x03\x02\x02\x02\u022EM\x03\x02\x02\x02\u022F" +
		"\u0231\x05P)\x02\u0230\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u023A" +
		"\x03\x02\x02\x02\u0234\u0236\x05R*\x02\u0235\u0234\x03\x02\x02\x02\u0236" +
		"\u0237\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02" +
		"\x02\x02\u0238\u023A\x03\x02\x02\x02\u0239\u0230\x03\x02\x02\x02\u0239" +
		"\u0235\x03\x02\x02\x02\u023AO\x03\x02\x02\x02\u023B\u023C\x07\"\x02\x02" +
		"\u023C\u023D\x05T+\x02\u023D\u023F\x07\x03\x02\x02\u023E\u0240\x05H%\x02" +
		"\u023F\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u023F\x03" +
		"\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242Q\x03\x02\x02\x02\u0243" +
		"\u0244\x07#\x02\x02\u0244\u0245\x07%\x02\x02\u0245\u0247\x07\x03\x02\x02" +
		"\u0246\u0248\x05H%\x02\u0247\u0246\x03\x02\x02\x02\u0248\u0249\x03\x02" +
		"\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A" +
		"S\x03\x02\x02\x02\u024B\u024C\t\x03\x02\x02\u024CU\x03\x02\x02\x02QY`" +
		"filqw\x87\x8E\x94\xA1\xA8\xAE\xB5\xBB\xC4\xCD\xD4\xDD\xE4\xED\xEF\xF7" +
		"\xFC\u0102\u010A\u010D\u0112\u0117\u011D\u0125\u0128\u012D\u0132\u0138" +
		"\u0140\u0143\u0148\u014D\u0153\u0155\u015E\u0161\u0164\u0169\u0170\u0179" +
		"\u017C\u017F\u0184\u018B\u0194\u0197\u019A\u019F\u01A6\u01A8\u01B0\u01B5" +
		"\u01BB\u01C8\u01CB\u01CE\u01D1\u01D4\u01F0\u01FD\u0209\u0211\u0219\u021C" +
		"\u0222\u022A\u022D\u0232\u0237\u0239\u0241\u0249";
	public static readonly _serializedATN: string = Utils.join(
		[
			DCM_2_0_grammarParser._serializedATNSegment0,
			DCM_2_0_grammarParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DCM_2_0_grammarParser.__ATN) {
			DCM_2_0_grammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DCM_2_0_grammarParser._serializedATN));
		}

		return DCM_2_0_grammarParser.__ATN;
	}

}

export class KonservierungContext extends ParserRuleContext {
	public kons_kopf(): Kons_kopfContext {
		return this.getRuleContext(0, Kons_kopfContext);
	}
	public kons_rumpf(): Kons_rumpfContext {
		return this.getRuleContext(0, Kons_rumpfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_konservierung; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKonservierung) {
			listener.enterKonservierung(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKonservierung) {
			listener.exitKonservierung(this);
		}
	}
}


export class Kons_kopfContext extends ParserRuleContext {
	public modulkopf_info(): Modulkopf_infoContext | undefined {
		return this.tryGetRuleContext(0, Modulkopf_infoContext);
	}
	public funktionsdef(): FunktionsdefContext | undefined {
		return this.tryGetRuleContext(0, FunktionsdefContext);
	}
	public variantendef(): VariantendefContext | undefined {
		return this.tryGetRuleContext(0, VariantendefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kons_kopf; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKons_kopf) {
			listener.enterKons_kopf(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKons_kopf) {
			listener.exitKons_kopf(this);
		}
	}
}


export class Modulkopf_infoContext extends ParserRuleContext {
	public mod_zeile(): Mod_zeileContext[];
	public mod_zeile(i: number): Mod_zeileContext;
	public mod_zeile(i?: number): Mod_zeileContext | Mod_zeileContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Mod_zeileContext);
		} else {
			return this.getRuleContext(i, Mod_zeileContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_modulkopf_info; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterModulkopf_info) {
			listener.enterModulkopf_info(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitModulkopf_info) {
			listener.exitModulkopf_info(this);
		}
	}
}


export class Mod_zeileContext extends ParserRuleContext {
	public mod_anf_zeile(): Mod_anf_zeileContext {
		return this.getRuleContext(0, Mod_anf_zeileContext);
	}
	public mod_fort_zeile(): Mod_fort_zeileContext[];
	public mod_fort_zeile(i: number): Mod_fort_zeileContext;
	public mod_fort_zeile(i?: number): Mod_fort_zeileContext | Mod_fort_zeileContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Mod_fort_zeileContext);
		} else {
			return this.getRuleContext(i, Mod_fort_zeileContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_mod_zeile; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterMod_zeile) {
			listener.enterMod_zeile(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitMod_zeile) {
			listener.exitMod_zeile(this);
		}
	}
}


export class Mod_anf_zeileContext extends ParserRuleContext {
	public mod_ele_name(): Mod_ele_nameContext {
		return this.getRuleContext(0, Mod_ele_nameContext);
	}
	public mod_ele_wert(): Mod_ele_wertContext {
		return this.getRuleContext(0, Mod_ele_wertContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_mod_anf_zeile; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterMod_anf_zeile) {
			listener.enterMod_anf_zeile(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitMod_anf_zeile) {
			listener.exitMod_anf_zeile(this);
		}
	}
}


export class Mod_fort_zeileContext extends ParserRuleContext {
	public mod_ele_wert(): Mod_ele_wertContext {
		return this.getRuleContext(0, Mod_ele_wertContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_mod_fort_zeile; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterMod_fort_zeile) {
			listener.enterMod_fort_zeile(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitMod_fort_zeile) {
			listener.exitMod_fort_zeile(this);
		}
	}
}


export class Mod_ele_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_mod_ele_name; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterMod_ele_name) {
			listener.enterMod_ele_name(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitMod_ele_name) {
			listener.exitMod_ele_name(this);
		}
	}
}


export class Mod_ele_wertContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_mod_ele_wert; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterMod_ele_wert) {
			listener.enterMod_ele_wert(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitMod_ele_wert) {
			listener.exitMod_ele_wert(this);
		}
	}
}


export class FunktionsdefContext extends ParserRuleContext {
	public funktionszeile(): FunktionszeileContext[];
	public funktionszeile(i: number): FunktionszeileContext;
	public funktionszeile(i?: number): FunktionszeileContext | FunktionszeileContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunktionszeileContext);
		} else {
			return this.getRuleContext(i, FunktionszeileContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_funktionsdef; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterFunktionsdef) {
			listener.enterFunktionsdef(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitFunktionsdef) {
			listener.exitFunktionsdef(this);
		}
	}
}


export class FunktionszeileContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	public fkt_version(): Fkt_versionContext {
		return this.getRuleContext(0, Fkt_versionContext);
	}
	public fkt_langname(): Fkt_langnameContext {
		return this.getRuleContext(0, Fkt_langnameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_funktionszeile; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterFunktionszeile) {
			listener.enterFunktionszeile(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitFunktionszeile) {
			listener.exitFunktionszeile(this);
		}
	}
}


export class Fkt_versionContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_fkt_version; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterFkt_version) {
			listener.enterFkt_version(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitFkt_version) {
			listener.exitFkt_version(this);
		}
	}
}


export class Fkt_langnameContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_fkt_langname; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterFkt_langname) {
			listener.enterFkt_langname(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitFkt_langname) {
			listener.exitFkt_langname(this);
		}
	}
}


export class VariantendefContext extends ParserRuleContext {
	public variantenkrit(): VariantenkritContext[];
	public variantenkrit(i: number): VariantenkritContext;
	public variantenkrit(i?: number): VariantenkritContext | VariantenkritContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariantenkritContext);
		} else {
			return this.getRuleContext(i, VariantenkritContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_variantendef; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterVariantendef) {
			listener.enterVariantendef(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitVariantendef) {
			listener.exitVariantendef(this);
		}
	}
}


export class VariantenkritContext extends ParserRuleContext {
	public krit_name(): Krit_nameContext {
		return this.getRuleContext(0, Krit_nameContext);
	}
	public krit_wert(): Krit_wertContext[];
	public krit_wert(i: number): Krit_wertContext;
	public krit_wert(i?: number): Krit_wertContext | Krit_wertContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Krit_wertContext);
		} else {
			return this.getRuleContext(i, Krit_wertContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_variantenkrit; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterVariantenkrit) {
			listener.enterVariantenkrit(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitVariantenkrit) {
			listener.exitVariantenkrit(this);
		}
	}
}


export class Krit_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_krit_name; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKrit_name) {
			listener.enterKrit_name(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKrit_name) {
			listener.exitKrit_name(this);
		}
	}
}


export class Krit_wertContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_krit_wert; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKrit_wert) {
			listener.enterKrit_wert(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKrit_wert) {
			listener.exitKrit_wert(this);
		}
	}
}


export class Kons_rumpfContext extends ParserRuleContext {
	public kenngroesse(): KenngroesseContext[];
	public kenngroesse(i: number): KenngroesseContext;
	public kenngroesse(i?: number): KenngroesseContext | KenngroesseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KenngroesseContext);
		} else {
			return this.getRuleContext(i, KenngroesseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kons_rumpf; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKons_rumpf) {
			listener.enterKons_rumpf(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKons_rumpf) {
			listener.exitKons_rumpf(this);
		}
	}
}


export class KenngroesseContext extends ParserRuleContext {
	public kennwert(): KennwertContext | undefined {
		return this.tryGetRuleContext(0, KennwertContext);
	}
	public kennwerteblock(): KennwerteblockContext | undefined {
		return this.tryGetRuleContext(0, KennwerteblockContext);
	}
	public kennlinie(): KennlinieContext | undefined {
		return this.tryGetRuleContext(0, KennlinieContext);
	}
	public kennfeld(): KennfeldContext | undefined {
		return this.tryGetRuleContext(0, KennfeldContext);
	}
	public gruppenstuetzstellen(): GruppenstuetzstellenContext | undefined {
		return this.tryGetRuleContext(0, GruppenstuetzstellenContext);
	}
	public kenntext(): KenntextContext | undefined {
		return this.tryGetRuleContext(0, KenntextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kenngroesse; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKenngroesse) {
			listener.enterKenngroesse(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKenngroesse) {
			listener.exitKenngroesse(this);
		}
	}
}


export class KennwertContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	public kgr_info(): Kgr_infoContext {
		return this.getRuleContext(0, Kgr_infoContext);
	}
	public realzahl(): RealzahlContext | undefined {
		return this.tryGetRuleContext(0, RealzahlContext);
	}
	public einheit_w(): Einheit_wContext | undefined {
		return this.tryGetRuleContext(0, Einheit_wContext);
	}
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kennwert; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKennwert) {
			listener.enterKennwert(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKennwert) {
			listener.exitKennwert(this);
		}
	}
}


export class KennwerteblockContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	public anzahl_x(): Anzahl_xContext {
		return this.getRuleContext(0, Anzahl_xContext);
	}
	public kgr_info(): Kgr_infoContext {
		return this.getRuleContext(0, Kgr_infoContext);
	}
	public einheit_w(): Einheit_wContext | undefined {
		return this.tryGetRuleContext(0, Einheit_wContext);
	}
	public werteliste_kwb(): Werteliste_kwbContext[];
	public werteliste_kwb(i: number): Werteliste_kwbContext;
	public werteliste_kwb(i?: number): Werteliste_kwbContext | Werteliste_kwbContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Werteliste_kwbContext);
		} else {
			return this.getRuleContext(i, Werteliste_kwbContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kennwerteblock; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKennwerteblock) {
			listener.enterKennwerteblock(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKennwerteblock) {
			listener.exitKennwerteblock(this);
		}
	}
}


export class KennlinieContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	public anzahl_x(): Anzahl_xContext {
		return this.getRuleContext(0, Anzahl_xContext);
	}
	public kgr_info(): Kgr_infoContext {
		return this.getRuleContext(0, Kgr_infoContext);
	}
	public einheit_x(): Einheit_xContext | undefined {
		return this.tryGetRuleContext(0, Einheit_xContext);
	}
	public einheit_w(): Einheit_wContext | undefined {
		return this.tryGetRuleContext(0, Einheit_wContext);
	}
	public sst_liste_x(): Sst_liste_xContext[];
	public sst_liste_x(i: number): Sst_liste_xContext;
	public sst_liste_x(i?: number): Sst_liste_xContext | Sst_liste_xContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sst_liste_xContext);
		} else {
			return this.getRuleContext(i, Sst_liste_xContext);
		}
	}
	public werteliste(): WertelisteContext[];
	public werteliste(i: number): WertelisteContext;
	public werteliste(i?: number): WertelisteContext | WertelisteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WertelisteContext);
		} else {
			return this.getRuleContext(i, WertelisteContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kennlinie; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKennlinie) {
			listener.enterKennlinie(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKennlinie) {
			listener.exitKennlinie(this);
		}
	}
}


export class KennfeldContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	public anzahl_x(): Anzahl_xContext {
		return this.getRuleContext(0, Anzahl_xContext);
	}
	public anzahl_y(): Anzahl_yContext {
		return this.getRuleContext(0, Anzahl_yContext);
	}
	public kgr_info(): Kgr_infoContext {
		return this.getRuleContext(0, Kgr_infoContext);
	}
	public kf_zeile_liste(): Kf_zeile_listeContext {
		return this.getRuleContext(0, Kf_zeile_listeContext);
	}
	public einheit_x(): Einheit_xContext | undefined {
		return this.tryGetRuleContext(0, Einheit_xContext);
	}
	public einheit_y(): Einheit_yContext | undefined {
		return this.tryGetRuleContext(0, Einheit_yContext);
	}
	public einheit_w(): Einheit_wContext | undefined {
		return this.tryGetRuleContext(0, Einheit_wContext);
	}
	public sst_liste_x(): Sst_liste_xContext[];
	public sst_liste_x(i: number): Sst_liste_xContext;
	public sst_liste_x(i?: number): Sst_liste_xContext | Sst_liste_xContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sst_liste_xContext);
		} else {
			return this.getRuleContext(i, Sst_liste_xContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kennfeld; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKennfeld) {
			listener.enterKennfeld(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKennfeld) {
			listener.exitKennfeld(this);
		}
	}
}


export class GruppenstuetzstellenContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	public anzahl_x(): Anzahl_xContext {
		return this.getRuleContext(0, Anzahl_xContext);
	}
	public kgr_info(): Kgr_infoContext {
		return this.getRuleContext(0, Kgr_infoContext);
	}
	public einheit_x(): Einheit_xContext | undefined {
		return this.tryGetRuleContext(0, Einheit_xContext);
	}
	public sst_liste_x(): Sst_liste_xContext[];
	public sst_liste_x(i: number): Sst_liste_xContext;
	public sst_liste_x(i?: number): Sst_liste_xContext | Sst_liste_xContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sst_liste_xContext);
		} else {
			return this.getRuleContext(i, Sst_liste_xContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_gruppenstuetzstellen; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterGruppenstuetzstellen) {
			listener.enterGruppenstuetzstellen(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitGruppenstuetzstellen) {
			listener.exitGruppenstuetzstellen(this);
		}
	}
}


export class KenntextContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.NAME, 0); }
	public kgr_info(): Kgr_infoContext {
		return this.getRuleContext(0, Kgr_infoContext);
	}
	public TEXT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kenntext; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKenntext) {
			listener.enterKenntext(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKenntext) {
			listener.exitKenntext(this);
		}
	}
}


export class Kgr_infoContext extends ParserRuleContext {
	public langname(): LangnameContext | undefined {
		return this.tryGetRuleContext(0, LangnameContext);
	}
	public displayname(): DisplaynameContext | undefined {
		return this.tryGetRuleContext(0, DisplaynameContext);
	}
	public var_abhangigkeiten(): Var_abhangigkeitenContext | undefined {
		return this.tryGetRuleContext(0, Var_abhangigkeitenContext);
	}
	public funktionszugehorigkeit(): FunktionszugehorigkeitContext | undefined {
		return this.tryGetRuleContext(0, FunktionszugehorigkeitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kgr_info; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKgr_info) {
			listener.enterKgr_info(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKgr_info) {
			listener.exitKgr_info(this);
		}
	}
}


export class Einheit_xContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_einheit_x; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterEinheit_x) {
			listener.enterEinheit_x(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitEinheit_x) {
			listener.exitEinheit_x(this);
		}
	}
}


export class Einheit_yContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_einheit_y; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterEinheit_y) {
			listener.enterEinheit_y(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitEinheit_y) {
			listener.exitEinheit_y(this);
		}
	}
}


export class Einheit_wContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_einheit_w; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterEinheit_w) {
			listener.enterEinheit_w(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitEinheit_w) {
			listener.exitEinheit_w(this);
		}
	}
}


export class LangnameContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_langname; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterLangname) {
			listener.enterLangname(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitLangname) {
			listener.exitLangname(this);
		}
	}
}


export class DisplaynameContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(DCM_2_0_grammarParser.NAME, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(DCM_2_0_grammarParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_displayname; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterDisplayname) {
			listener.enterDisplayname(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitDisplayname) {
			listener.exitDisplayname(this);
		}
	}
}


export class Var_abhangigkeitenContext extends ParserRuleContext {
	public var_abh(): Var_abhContext[];
	public var_abh(i: number): Var_abhContext;
	public var_abh(i?: number): Var_abhContext | Var_abhContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Var_abhContext);
		} else {
			return this.getRuleContext(i, Var_abhContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_var_abhangigkeiten; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterVar_abhangigkeiten) {
			listener.enterVar_abhangigkeiten(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitVar_abhangigkeiten) {
			listener.exitVar_abhangigkeiten(this);
		}
	}
}


export class Var_abhContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DCM_2_0_grammarParser.NAME);
		} else {
			return this.getToken(DCM_2_0_grammarParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_var_abh; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterVar_abh) {
			listener.enterVar_abh(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitVar_abh) {
			listener.exitVar_abh(this);
		}
	}
}


export class FunktionszugehorigkeitContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DCM_2_0_grammarParser.NAME);
		} else {
			return this.getToken(DCM_2_0_grammarParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_funktionszugehorigkeit; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterFunktionszugehorigkeit) {
			listener.enterFunktionszugehorigkeit(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitFunktionszugehorigkeit) {
			listener.exitFunktionszugehorigkeit(this);
		}
	}
}


export class Anzahl_xContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_anzahl_x; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterAnzahl_x) {
			listener.enterAnzahl_x(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitAnzahl_x) {
			listener.exitAnzahl_x(this);
		}
	}
}


export class Anzahl_yContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(DCM_2_0_grammarParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_anzahl_y; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterAnzahl_y) {
			listener.enterAnzahl_y(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitAnzahl_y) {
			listener.exitAnzahl_y(this);
		}
	}
}


export class WertelisteContext extends ParserRuleContext {
	public realzahl(): RealzahlContext[];
	public realzahl(i: number): RealzahlContext;
	public realzahl(i?: number): RealzahlContext | RealzahlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RealzahlContext);
		} else {
			return this.getRuleContext(i, RealzahlContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_werteliste; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterWerteliste) {
			listener.enterWerteliste(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitWerteliste) {
			listener.exitWerteliste(this);
		}
	}
}


export class Werteliste_kwbContext extends ParserRuleContext {
	public realzahl(): RealzahlContext[];
	public realzahl(i: number): RealzahlContext;
	public realzahl(i?: number): RealzahlContext | RealzahlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RealzahlContext);
		} else {
			return this.getRuleContext(i, RealzahlContext);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DCM_2_0_grammarParser.TEXT);
		} else {
			return this.getToken(DCM_2_0_grammarParser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_werteliste_kwb; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterWerteliste_kwb) {
			listener.enterWerteliste_kwb(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitWerteliste_kwb) {
			listener.exitWerteliste_kwb(this);
		}
	}
}


export class Sst_liste_xContext extends ParserRuleContext {
	public realzahl(): RealzahlContext[];
	public realzahl(i: number): RealzahlContext;
	public realzahl(i?: number): RealzahlContext | RealzahlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RealzahlContext);
		} else {
			return this.getRuleContext(i, RealzahlContext);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DCM_2_0_grammarParser.TEXT);
		} else {
			return this.getToken(DCM_2_0_grammarParser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_sst_liste_x; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterSst_liste_x) {
			listener.enterSst_liste_x(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitSst_liste_x) {
			listener.exitSst_liste_x(this);
		}
	}
}


export class Kf_zeile_listeContext extends ParserRuleContext {
	public kf_zeile_liste_r(): Kf_zeile_liste_rContext[];
	public kf_zeile_liste_r(i: number): Kf_zeile_liste_rContext;
	public kf_zeile_liste_r(i?: number): Kf_zeile_liste_rContext | Kf_zeile_liste_rContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Kf_zeile_liste_rContext);
		} else {
			return this.getRuleContext(i, Kf_zeile_liste_rContext);
		}
	}
	public kf_zeile_liste_tx(): Kf_zeile_liste_txContext[];
	public kf_zeile_liste_tx(i: number): Kf_zeile_liste_txContext;
	public kf_zeile_liste_tx(i?: number): Kf_zeile_liste_txContext | Kf_zeile_liste_txContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Kf_zeile_liste_txContext);
		} else {
			return this.getRuleContext(i, Kf_zeile_liste_txContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kf_zeile_liste; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKf_zeile_liste) {
			listener.enterKf_zeile_liste(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKf_zeile_liste) {
			listener.exitKf_zeile_liste(this);
		}
	}
}


export class Kf_zeile_liste_rContext extends ParserRuleContext {
	public realzahl(): RealzahlContext | undefined {
		return this.tryGetRuleContext(0, RealzahlContext);
	}
	public werteliste(): WertelisteContext[];
	public werteliste(i: number): WertelisteContext;
	public werteliste(i?: number): WertelisteContext | WertelisteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WertelisteContext);
		} else {
			return this.getRuleContext(i, WertelisteContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kf_zeile_liste_r; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKf_zeile_liste_r) {
			listener.enterKf_zeile_liste_r(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKf_zeile_liste_r) {
			listener.exitKf_zeile_liste_r(this);
		}
	}
}


export class Kf_zeile_liste_txContext extends ParserRuleContext {
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(DCM_2_0_grammarParser.TEXT, 0); }
	public werteliste(): WertelisteContext[];
	public werteliste(i: number): WertelisteContext;
	public werteliste(i?: number): WertelisteContext | WertelisteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WertelisteContext);
		} else {
			return this.getRuleContext(i, WertelisteContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_kf_zeile_liste_tx; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterKf_zeile_liste_tx) {
			listener.enterKf_zeile_liste_tx(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitKf_zeile_liste_tx) {
			listener.exitKf_zeile_liste_tx(this);
		}
	}
}


export class RealzahlContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(DCM_2_0_grammarParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(DCM_2_0_grammarParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DCM_2_0_grammarParser.RULE_realzahl; }
	// @Override
	public enterRule(listener: DCM_2_0_grammarListener): void {
		if (listener.enterRealzahl) {
			listener.enterRealzahl(this);
		}
	}
	// @Override
	public exitRule(listener: DCM_2_0_grammarListener): void {
		if (listener.exitRealzahl) {
			listener.exitRealzahl(this);
		}
	}
}


