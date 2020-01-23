"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dcm/DCM_2_0_grammar.g4 by ANTLR 4.7.3-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var DCM_2_0_grammarParser = /** @class */ (function (_super) {
    __extends(DCM_2_0_grammarParser, _super);
    function DCM_2_0_grammarParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(DCM_2_0_grammarParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(DCM_2_0_grammarParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return DCM_2_0_grammarParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DCM_2_0_grammarParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "DCM_2_0_grammar.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DCM_2_0_grammarParser.prototype, "ruleNames", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DCM_2_0_grammarParser.prototype, "serializedATN", {
        // @Override
        get: function () { return DCM_2_0_grammarParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.konservierung = function () {
        var _localctx = new KonservierungContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, DCM_2_0_grammarParser.RULE_konservierung);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kons_kopf = function () {
        var _localctx = new Kons_kopfContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, DCM_2_0_grammarParser.RULE_kons_kopf);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.modulkopf_info = function () {
        var _localctx = new Modulkopf_infoContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, DCM_2_0_grammarParser.RULE_modulkopf_info);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.mod_zeile = function () {
        var _localctx = new Mod_zeileContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, DCM_2_0_grammarParser.RULE_mod_zeile);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.mod_anf_zeile();
                this.state = 117;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.mod_anf_zeile = function () {
        var _localctx = new Mod_anf_zeileContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.mod_fort_zeile = function () {
        var _localctx = new Mod_fort_zeileContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.mod_ele_name = function () {
        var _localctx = new Mod_ele_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, DCM_2_0_grammarParser.RULE_mod_ele_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.match(DCM_2_0_grammarParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.mod_ele_wert = function () {
        var _localctx = new Mod_ele_wertContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, DCM_2_0_grammarParser.RULE_mod_ele_wert);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.funktionsdef = function () {
        var _localctx = new FunktionsdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, DCM_2_0_grammarParser.RULE_funktionsdef);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.funktionszeile = function () {
        var _localctx = new FunktionszeileContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.fkt_version = function () {
        var _localctx = new Fkt_versionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, DCM_2_0_grammarParser.RULE_fkt_version);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.match(DCM_2_0_grammarParser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.fkt_langname = function () {
        var _localctx = new Fkt_langnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, DCM_2_0_grammarParser.RULE_fkt_langname);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.variantendef = function () {
        var _localctx = new VariantendefContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, DCM_2_0_grammarParser.RULE_variantendef);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.variantenkrit = function () {
        var _localctx = new VariantenkritContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, DCM_2_0_grammarParser.RULE_variantenkrit);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.krit_name = function () {
        var _localctx = new Krit_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, DCM_2_0_grammarParser.RULE_krit_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this.match(DCM_2_0_grammarParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.krit_wert = function () {
        var _localctx = new Krit_wertContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, DCM_2_0_grammarParser.RULE_krit_wert);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this.match(DCM_2_0_grammarParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kons_rumpf = function () {
        var _localctx = new Kons_rumpfContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, DCM_2_0_grammarParser.RULE_kons_rumpf);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kenngroesse = function () {
        var _localctx = new KenngroesseContext(this._ctx, this.state);
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kennwert = function () {
        var _localctx = new KennwertContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, DCM_2_0_grammarParser.RULE_kennwert);
        var _la;
        try {
            this.state = 237;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kennwerteblock = function () {
        var _localctx = new KennwerteblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, DCM_2_0_grammarParser.RULE_kennwerteblock);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kennlinie = function () {
        var _localctx = new KennlinieContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, DCM_2_0_grammarParser.RULE_kennlinie);
        var _la;
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kennfeld = function () {
        var _localctx = new KennfeldContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, DCM_2_0_grammarParser.RULE_kennfeld);
        var _la;
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.gruppenstuetzstellen = function () {
        var _localctx = new GruppenstuetzstellenContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, DCM_2_0_grammarParser.RULE_gruppenstuetzstellen);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kenntext = function () {
        var _localctx = new KenntextContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, DCM_2_0_grammarParser.RULE_kenntext);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kgr_info = function () {
        var _localctx = new Kgr_infoContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, DCM_2_0_grammarParser.RULE_kgr_info);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.einheit_x = function () {
        var _localctx = new Einheit_xContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.einheit_y = function () {
        var _localctx = new Einheit_yContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.einheit_w = function () {
        var _localctx = new Einheit_wContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.langname = function () {
        var _localctx = new LangnameContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.displayname = function () {
        var _localctx = new DisplaynameContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, DCM_2_0_grammarParser.RULE_displayname);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 484;
                this.match(DCM_2_0_grammarParser.T__24);
                this.state = 485;
                _la = this._input.LA(1);
                if (!(_la === DCM_2_0_grammarParser.NAME || _la === DCM_2_0_grammarParser.TEXT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.var_abhangigkeiten = function () {
        var _localctx = new Var_abhangigkeitenContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, DCM_2_0_grammarParser.RULE_var_abhangigkeiten);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.var_abh = function () {
        var _localctx = new Var_abhContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.funktionszugehorigkeit = function () {
        var _localctx = new FunktionszugehorigkeitContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, DCM_2_0_grammarParser.RULE_funktionszugehorigkeit);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.anzahl_x = function () {
        var _localctx = new Anzahl_xContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, DCM_2_0_grammarParser.RULE_anzahl_x);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 511;
                this.match(DCM_2_0_grammarParser.INT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.anzahl_y = function () {
        var _localctx = new Anzahl_yContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, DCM_2_0_grammarParser.RULE_anzahl_y);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this.match(DCM_2_0_grammarParser.INT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.werteliste = function () {
        var _localctx = new WertelisteContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, DCM_2_0_grammarParser.RULE_werteliste);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.werteliste_kwb = function () {
        var _localctx = new Werteliste_kwbContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, DCM_2_0_grammarParser.RULE_werteliste_kwb);
        var _la;
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.sst_liste_x = function () {
        var _localctx = new Sst_liste_xContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, DCM_2_0_grammarParser.RULE_sst_liste_x);
        var _la;
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kf_zeile_liste = function () {
        var _localctx = new Kf_zeile_listeContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, DCM_2_0_grammarParser.RULE_kf_zeile_liste);
        var _la;
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kf_zeile_liste_r = function () {
        var _localctx = new Kf_zeile_liste_rContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, DCM_2_0_grammarParser.RULE_kf_zeile_liste_r);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.kf_zeile_liste_tx = function () {
        var _localctx = new Kf_zeile_liste_txContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, DCM_2_0_grammarParser.RULE_kf_zeile_liste_tx);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DCM_2_0_grammarParser.prototype.realzahl = function () {
        var _localctx = new RealzahlContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, DCM_2_0_grammarParser.RULE_realzahl);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 585;
                _la = this._input.LA(1);
                if (!(_la === DCM_2_0_grammarParser.INT || _la === DCM_2_0_grammarParser.FLOAT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(DCM_2_0_grammarParser, "_ATN", {
        get: function () {
            if (!DCM_2_0_grammarParser.__ATN) {
                DCM_2_0_grammarParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(DCM_2_0_grammarParser._serializedATN));
            }
            return DCM_2_0_grammarParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    DCM_2_0_grammarParser.T__0 = 1;
    DCM_2_0_grammarParser.T__1 = 2;
    DCM_2_0_grammarParser.T__2 = 3;
    DCM_2_0_grammarParser.T__3 = 4;
    DCM_2_0_grammarParser.T__4 = 5;
    DCM_2_0_grammarParser.T__5 = 6;
    DCM_2_0_grammarParser.T__6 = 7;
    DCM_2_0_grammarParser.T__7 = 8;
    DCM_2_0_grammarParser.T__8 = 9;
    DCM_2_0_grammarParser.T__9 = 10;
    DCM_2_0_grammarParser.T__10 = 11;
    DCM_2_0_grammarParser.T__11 = 12;
    DCM_2_0_grammarParser.T__12 = 13;
    DCM_2_0_grammarParser.T__13 = 14;
    DCM_2_0_grammarParser.T__14 = 15;
    DCM_2_0_grammarParser.T__15 = 16;
    DCM_2_0_grammarParser.T__16 = 17;
    DCM_2_0_grammarParser.T__17 = 18;
    DCM_2_0_grammarParser.T__18 = 19;
    DCM_2_0_grammarParser.T__19 = 20;
    DCM_2_0_grammarParser.T__20 = 21;
    DCM_2_0_grammarParser.T__21 = 22;
    DCM_2_0_grammarParser.T__22 = 23;
    DCM_2_0_grammarParser.T__23 = 24;
    DCM_2_0_grammarParser.T__24 = 25;
    DCM_2_0_grammarParser.T__25 = 26;
    DCM_2_0_grammarParser.T__26 = 27;
    DCM_2_0_grammarParser.T__27 = 28;
    DCM_2_0_grammarParser.T__28 = 29;
    DCM_2_0_grammarParser.T__29 = 30;
    DCM_2_0_grammarParser.T__30 = 31;
    DCM_2_0_grammarParser.T__31 = 32;
    DCM_2_0_grammarParser.T__32 = 33;
    DCM_2_0_grammarParser.NAME = 34;
    DCM_2_0_grammarParser.TEXT = 35;
    DCM_2_0_grammarParser.INT = 36;
    DCM_2_0_grammarParser.FLOAT = 37;
    DCM_2_0_grammarParser.MINUS = 38;
    DCM_2_0_grammarParser.WS = 39;
    DCM_2_0_grammarParser.COMMENT = 40;
    DCM_2_0_grammarParser.RULE_konservierung = 0;
    DCM_2_0_grammarParser.RULE_kons_kopf = 1;
    DCM_2_0_grammarParser.RULE_modulkopf_info = 2;
    DCM_2_0_grammarParser.RULE_mod_zeile = 3;
    DCM_2_0_grammarParser.RULE_mod_anf_zeile = 4;
    DCM_2_0_grammarParser.RULE_mod_fort_zeile = 5;
    DCM_2_0_grammarParser.RULE_mod_ele_name = 6;
    DCM_2_0_grammarParser.RULE_mod_ele_wert = 7;
    DCM_2_0_grammarParser.RULE_funktionsdef = 8;
    DCM_2_0_grammarParser.RULE_funktionszeile = 9;
    DCM_2_0_grammarParser.RULE_fkt_version = 10;
    DCM_2_0_grammarParser.RULE_fkt_langname = 11;
    DCM_2_0_grammarParser.RULE_variantendef = 12;
    DCM_2_0_grammarParser.RULE_variantenkrit = 13;
    DCM_2_0_grammarParser.RULE_krit_name = 14;
    DCM_2_0_grammarParser.RULE_krit_wert = 15;
    DCM_2_0_grammarParser.RULE_kons_rumpf = 16;
    DCM_2_0_grammarParser.RULE_kenngroesse = 17;
    DCM_2_0_grammarParser.RULE_kennwert = 18;
    DCM_2_0_grammarParser.RULE_kennwerteblock = 19;
    DCM_2_0_grammarParser.RULE_kennlinie = 20;
    DCM_2_0_grammarParser.RULE_kennfeld = 21;
    DCM_2_0_grammarParser.RULE_gruppenstuetzstellen = 22;
    DCM_2_0_grammarParser.RULE_kenntext = 23;
    DCM_2_0_grammarParser.RULE_kgr_info = 24;
    DCM_2_0_grammarParser.RULE_einheit_x = 25;
    DCM_2_0_grammarParser.RULE_einheit_y = 26;
    DCM_2_0_grammarParser.RULE_einheit_w = 27;
    DCM_2_0_grammarParser.RULE_langname = 28;
    DCM_2_0_grammarParser.RULE_displayname = 29;
    DCM_2_0_grammarParser.RULE_var_abhangigkeiten = 30;
    DCM_2_0_grammarParser.RULE_var_abh = 31;
    DCM_2_0_grammarParser.RULE_funktionszugehorigkeit = 32;
    DCM_2_0_grammarParser.RULE_anzahl_x = 33;
    DCM_2_0_grammarParser.RULE_anzahl_y = 34;
    DCM_2_0_grammarParser.RULE_werteliste = 35;
    DCM_2_0_grammarParser.RULE_werteliste_kwb = 36;
    DCM_2_0_grammarParser.RULE_sst_liste_x = 37;
    DCM_2_0_grammarParser.RULE_kf_zeile_liste = 38;
    DCM_2_0_grammarParser.RULE_kf_zeile_liste_r = 39;
    DCM_2_0_grammarParser.RULE_kf_zeile_liste_tx = 40;
    DCM_2_0_grammarParser.RULE_realzahl = 41;
    // tslint:disable:no-trailing-whitespace
    DCM_2_0_grammarParser.ruleNames = [
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
    DCM_2_0_grammarParser._LITERAL_NAMES = [
        undefined, "'\n'", "'KONSERVIERUNG_FORMAT 2.0'", "'MODULKOPF'", "'FUNKTIONEN'",
        "'END'", "'FKT'", "'VARIANTENKODIERUNG'", "'KRITERIUM'", "'FESTWERT'",
        "'WERT'", "'TEXT'", "'FESTWERTEBLOCK'", "'KENNLINIE'", "'FESTKENNLINIE'",
        "'GRUPPENKENNLINIE'", "'KENNFELD'", "'FESTKENNFELD'", "'GRUPPENKENNFELD'",
        "'STUETZSTELLENVERTEILUNG'", "'TEXTSTRING'", "'EINHEIT_X'", "'EINHEIT_Y'",
        "'EINHEIT_W'", "'LANGNAME'", "'DISPLAYNAME'", "'VAR'", "','", "'='", "'FUNKTION'",
        "'ST/X'", "'ST_TX/X'", "'ST/Y'", "'ST_TX/Y'", undefined, undefined, undefined,
        undefined, "'-'",
    ];
    DCM_2_0_grammarParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "NAME",
        "TEXT", "INT", "FLOAT", "MINUS", "WS", "COMMENT",
    ];
    DCM_2_0_grammarParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(DCM_2_0_grammarParser._LITERAL_NAMES, DCM_2_0_grammarParser._SYMBOLIC_NAMES, []);
    DCM_2_0_grammarParser._serializedATNSegments = 2;
    DCM_2_0_grammarParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*\u024E\x04\x02" +
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
    DCM_2_0_grammarParser._serializedATNSegment1 = "\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u023A" +
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
    DCM_2_0_grammarParser._serializedATN = Utils.join([
        DCM_2_0_grammarParser._serializedATNSegment0,
        DCM_2_0_grammarParser._serializedATNSegment1,
    ], "");
    return DCM_2_0_grammarParser;
}(Parser_1.Parser));
exports.DCM_2_0_grammarParser = DCM_2_0_grammarParser;
var KonservierungContext = /** @class */ (function (_super) {
    __extends(KonservierungContext, _super);
    function KonservierungContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KonservierungContext.prototype.kons_kopf = function () {
        return this.getRuleContext(0, Kons_kopfContext);
    };
    KonservierungContext.prototype.kons_rumpf = function () {
        return this.getRuleContext(0, Kons_rumpfContext);
    };
    Object.defineProperty(KonservierungContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_konservierung; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KonservierungContext.prototype.enterRule = function (listener) {
        if (listener.enterKonservierung) {
            listener.enterKonservierung(this);
        }
    };
    // @Override
    KonservierungContext.prototype.exitRule = function (listener) {
        if (listener.exitKonservierung) {
            listener.exitKonservierung(this);
        }
    };
    // @Override
    KonservierungContext.prototype.accept = function (visitor) {
        if (visitor.visitKonservierung) {
            return visitor.visitKonservierung(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KonservierungContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KonservierungContext = KonservierungContext;
var Kons_kopfContext = /** @class */ (function (_super) {
    __extends(Kons_kopfContext, _super);
    function Kons_kopfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Kons_kopfContext.prototype.modulkopf_info = function () {
        return this.tryGetRuleContext(0, Modulkopf_infoContext);
    };
    Kons_kopfContext.prototype.funktionsdef = function () {
        return this.tryGetRuleContext(0, FunktionsdefContext);
    };
    Kons_kopfContext.prototype.variantendef = function () {
        return this.tryGetRuleContext(0, VariantendefContext);
    };
    Object.defineProperty(Kons_kopfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kons_kopf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Kons_kopfContext.prototype.enterRule = function (listener) {
        if (listener.enterKons_kopf) {
            listener.enterKons_kopf(this);
        }
    };
    // @Override
    Kons_kopfContext.prototype.exitRule = function (listener) {
        if (listener.exitKons_kopf) {
            listener.exitKons_kopf(this);
        }
    };
    // @Override
    Kons_kopfContext.prototype.accept = function (visitor) {
        if (visitor.visitKons_kopf) {
            return visitor.visitKons_kopf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Kons_kopfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Kons_kopfContext = Kons_kopfContext;
var Modulkopf_infoContext = /** @class */ (function (_super) {
    __extends(Modulkopf_infoContext, _super);
    function Modulkopf_infoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Modulkopf_infoContext.prototype.mod_zeile = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Mod_zeileContext);
        }
        else {
            return this.getRuleContext(i, Mod_zeileContext);
        }
    };
    Object.defineProperty(Modulkopf_infoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_modulkopf_info; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Modulkopf_infoContext.prototype.enterRule = function (listener) {
        if (listener.enterModulkopf_info) {
            listener.enterModulkopf_info(this);
        }
    };
    // @Override
    Modulkopf_infoContext.prototype.exitRule = function (listener) {
        if (listener.exitModulkopf_info) {
            listener.exitModulkopf_info(this);
        }
    };
    // @Override
    Modulkopf_infoContext.prototype.accept = function (visitor) {
        if (visitor.visitModulkopf_info) {
            return visitor.visitModulkopf_info(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Modulkopf_infoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Modulkopf_infoContext = Modulkopf_infoContext;
var Mod_zeileContext = /** @class */ (function (_super) {
    __extends(Mod_zeileContext, _super);
    function Mod_zeileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mod_zeileContext.prototype.mod_anf_zeile = function () {
        return this.getRuleContext(0, Mod_anf_zeileContext);
    };
    Mod_zeileContext.prototype.mod_fort_zeile = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Mod_fort_zeileContext);
        }
        else {
            return this.getRuleContext(i, Mod_fort_zeileContext);
        }
    };
    Object.defineProperty(Mod_zeileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_mod_zeile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mod_zeileContext.prototype.enterRule = function (listener) {
        if (listener.enterMod_zeile) {
            listener.enterMod_zeile(this);
        }
    };
    // @Override
    Mod_zeileContext.prototype.exitRule = function (listener) {
        if (listener.exitMod_zeile) {
            listener.exitMod_zeile(this);
        }
    };
    // @Override
    Mod_zeileContext.prototype.accept = function (visitor) {
        if (visitor.visitMod_zeile) {
            return visitor.visitMod_zeile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mod_zeileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mod_zeileContext = Mod_zeileContext;
var Mod_anf_zeileContext = /** @class */ (function (_super) {
    __extends(Mod_anf_zeileContext, _super);
    function Mod_anf_zeileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mod_anf_zeileContext.prototype.mod_ele_name = function () {
        return this.getRuleContext(0, Mod_ele_nameContext);
    };
    Mod_anf_zeileContext.prototype.mod_ele_wert = function () {
        return this.getRuleContext(0, Mod_ele_wertContext);
    };
    Object.defineProperty(Mod_anf_zeileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_mod_anf_zeile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mod_anf_zeileContext.prototype.enterRule = function (listener) {
        if (listener.enterMod_anf_zeile) {
            listener.enterMod_anf_zeile(this);
        }
    };
    // @Override
    Mod_anf_zeileContext.prototype.exitRule = function (listener) {
        if (listener.exitMod_anf_zeile) {
            listener.exitMod_anf_zeile(this);
        }
    };
    // @Override
    Mod_anf_zeileContext.prototype.accept = function (visitor) {
        if (visitor.visitMod_anf_zeile) {
            return visitor.visitMod_anf_zeile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mod_anf_zeileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mod_anf_zeileContext = Mod_anf_zeileContext;
var Mod_fort_zeileContext = /** @class */ (function (_super) {
    __extends(Mod_fort_zeileContext, _super);
    function Mod_fort_zeileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mod_fort_zeileContext.prototype.mod_ele_wert = function () {
        return this.getRuleContext(0, Mod_ele_wertContext);
    };
    Object.defineProperty(Mod_fort_zeileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_mod_fort_zeile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mod_fort_zeileContext.prototype.enterRule = function (listener) {
        if (listener.enterMod_fort_zeile) {
            listener.enterMod_fort_zeile(this);
        }
    };
    // @Override
    Mod_fort_zeileContext.prototype.exitRule = function (listener) {
        if (listener.exitMod_fort_zeile) {
            listener.exitMod_fort_zeile(this);
        }
    };
    // @Override
    Mod_fort_zeileContext.prototype.accept = function (visitor) {
        if (visitor.visitMod_fort_zeile) {
            return visitor.visitMod_fort_zeile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mod_fort_zeileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mod_fort_zeileContext = Mod_fort_zeileContext;
var Mod_ele_nameContext = /** @class */ (function (_super) {
    __extends(Mod_ele_nameContext, _super);
    function Mod_ele_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mod_ele_nameContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    Object.defineProperty(Mod_ele_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_mod_ele_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mod_ele_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterMod_ele_name) {
            listener.enterMod_ele_name(this);
        }
    };
    // @Override
    Mod_ele_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitMod_ele_name) {
            listener.exitMod_ele_name(this);
        }
    };
    // @Override
    Mod_ele_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitMod_ele_name) {
            return visitor.visitMod_ele_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mod_ele_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mod_ele_nameContext = Mod_ele_nameContext;
var Mod_ele_wertContext = /** @class */ (function (_super) {
    __extends(Mod_ele_wertContext, _super);
    function Mod_ele_wertContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mod_ele_wertContext.prototype.TEXT = function () { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(Mod_ele_wertContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_mod_ele_wert; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mod_ele_wertContext.prototype.enterRule = function (listener) {
        if (listener.enterMod_ele_wert) {
            listener.enterMod_ele_wert(this);
        }
    };
    // @Override
    Mod_ele_wertContext.prototype.exitRule = function (listener) {
        if (listener.exitMod_ele_wert) {
            listener.exitMod_ele_wert(this);
        }
    };
    // @Override
    Mod_ele_wertContext.prototype.accept = function (visitor) {
        if (visitor.visitMod_ele_wert) {
            return visitor.visitMod_ele_wert(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mod_ele_wertContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mod_ele_wertContext = Mod_ele_wertContext;
var FunktionsdefContext = /** @class */ (function (_super) {
    __extends(FunktionsdefContext, _super);
    function FunktionsdefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunktionsdefContext.prototype.funktionszeile = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunktionszeileContext);
        }
        else {
            return this.getRuleContext(i, FunktionszeileContext);
        }
    };
    Object.defineProperty(FunktionsdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_funktionsdef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunktionsdefContext.prototype.enterRule = function (listener) {
        if (listener.enterFunktionsdef) {
            listener.enterFunktionsdef(this);
        }
    };
    // @Override
    FunktionsdefContext.prototype.exitRule = function (listener) {
        if (listener.exitFunktionsdef) {
            listener.exitFunktionsdef(this);
        }
    };
    // @Override
    FunktionsdefContext.prototype.accept = function (visitor) {
        if (visitor.visitFunktionsdef) {
            return visitor.visitFunktionsdef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunktionsdefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunktionsdefContext = FunktionsdefContext;
var FunktionszeileContext = /** @class */ (function (_super) {
    __extends(FunktionszeileContext, _super);
    function FunktionszeileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunktionszeileContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    FunktionszeileContext.prototype.fkt_version = function () {
        return this.getRuleContext(0, Fkt_versionContext);
    };
    FunktionszeileContext.prototype.fkt_langname = function () {
        return this.getRuleContext(0, Fkt_langnameContext);
    };
    Object.defineProperty(FunktionszeileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_funktionszeile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunktionszeileContext.prototype.enterRule = function (listener) {
        if (listener.enterFunktionszeile) {
            listener.enterFunktionszeile(this);
        }
    };
    // @Override
    FunktionszeileContext.prototype.exitRule = function (listener) {
        if (listener.exitFunktionszeile) {
            listener.exitFunktionszeile(this);
        }
    };
    // @Override
    FunktionszeileContext.prototype.accept = function (visitor) {
        if (visitor.visitFunktionszeile) {
            return visitor.visitFunktionszeile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunktionszeileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunktionszeileContext = FunktionszeileContext;
var Fkt_versionContext = /** @class */ (function (_super) {
    __extends(Fkt_versionContext, _super);
    function Fkt_versionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fkt_versionContext.prototype.TEXT = function () { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(Fkt_versionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_fkt_version; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fkt_versionContext.prototype.enterRule = function (listener) {
        if (listener.enterFkt_version) {
            listener.enterFkt_version(this);
        }
    };
    // @Override
    Fkt_versionContext.prototype.exitRule = function (listener) {
        if (listener.exitFkt_version) {
            listener.exitFkt_version(this);
        }
    };
    // @Override
    Fkt_versionContext.prototype.accept = function (visitor) {
        if (visitor.visitFkt_version) {
            return visitor.visitFkt_version(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fkt_versionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fkt_versionContext = Fkt_versionContext;
var Fkt_langnameContext = /** @class */ (function (_super) {
    __extends(Fkt_langnameContext, _super);
    function Fkt_langnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fkt_langnameContext.prototype.TEXT = function () { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(Fkt_langnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_fkt_langname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fkt_langnameContext.prototype.enterRule = function (listener) {
        if (listener.enterFkt_langname) {
            listener.enterFkt_langname(this);
        }
    };
    // @Override
    Fkt_langnameContext.prototype.exitRule = function (listener) {
        if (listener.exitFkt_langname) {
            listener.exitFkt_langname(this);
        }
    };
    // @Override
    Fkt_langnameContext.prototype.accept = function (visitor) {
        if (visitor.visitFkt_langname) {
            return visitor.visitFkt_langname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fkt_langnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fkt_langnameContext = Fkt_langnameContext;
var VariantendefContext = /** @class */ (function (_super) {
    __extends(VariantendefContext, _super);
    function VariantendefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariantendefContext.prototype.variantenkrit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariantenkritContext);
        }
        else {
            return this.getRuleContext(i, VariantenkritContext);
        }
    };
    Object.defineProperty(VariantendefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_variantendef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariantendefContext.prototype.enterRule = function (listener) {
        if (listener.enterVariantendef) {
            listener.enterVariantendef(this);
        }
    };
    // @Override
    VariantendefContext.prototype.exitRule = function (listener) {
        if (listener.exitVariantendef) {
            listener.exitVariantendef(this);
        }
    };
    // @Override
    VariantendefContext.prototype.accept = function (visitor) {
        if (visitor.visitVariantendef) {
            return visitor.visitVariantendef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariantendefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariantendefContext = VariantendefContext;
var VariantenkritContext = /** @class */ (function (_super) {
    __extends(VariantenkritContext, _super);
    function VariantenkritContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariantenkritContext.prototype.krit_name = function () {
        return this.getRuleContext(0, Krit_nameContext);
    };
    VariantenkritContext.prototype.krit_wert = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Krit_wertContext);
        }
        else {
            return this.getRuleContext(i, Krit_wertContext);
        }
    };
    Object.defineProperty(VariantenkritContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_variantenkrit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariantenkritContext.prototype.enterRule = function (listener) {
        if (listener.enterVariantenkrit) {
            listener.enterVariantenkrit(this);
        }
    };
    // @Override
    VariantenkritContext.prototype.exitRule = function (listener) {
        if (listener.exitVariantenkrit) {
            listener.exitVariantenkrit(this);
        }
    };
    // @Override
    VariantenkritContext.prototype.accept = function (visitor) {
        if (visitor.visitVariantenkrit) {
            return visitor.visitVariantenkrit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariantenkritContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariantenkritContext = VariantenkritContext;
var Krit_nameContext = /** @class */ (function (_super) {
    __extends(Krit_nameContext, _super);
    function Krit_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Krit_nameContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    Object.defineProperty(Krit_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_krit_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Krit_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterKrit_name) {
            listener.enterKrit_name(this);
        }
    };
    // @Override
    Krit_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitKrit_name) {
            listener.exitKrit_name(this);
        }
    };
    // @Override
    Krit_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitKrit_name) {
            return visitor.visitKrit_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Krit_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Krit_nameContext = Krit_nameContext;
var Krit_wertContext = /** @class */ (function (_super) {
    __extends(Krit_wertContext, _super);
    function Krit_wertContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Krit_wertContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    Object.defineProperty(Krit_wertContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_krit_wert; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Krit_wertContext.prototype.enterRule = function (listener) {
        if (listener.enterKrit_wert) {
            listener.enterKrit_wert(this);
        }
    };
    // @Override
    Krit_wertContext.prototype.exitRule = function (listener) {
        if (listener.exitKrit_wert) {
            listener.exitKrit_wert(this);
        }
    };
    // @Override
    Krit_wertContext.prototype.accept = function (visitor) {
        if (visitor.visitKrit_wert) {
            return visitor.visitKrit_wert(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Krit_wertContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Krit_wertContext = Krit_wertContext;
var Kons_rumpfContext = /** @class */ (function (_super) {
    __extends(Kons_rumpfContext, _super);
    function Kons_rumpfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Kons_rumpfContext.prototype.kenngroesse = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KenngroesseContext);
        }
        else {
            return this.getRuleContext(i, KenngroesseContext);
        }
    };
    Object.defineProperty(Kons_rumpfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kons_rumpf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Kons_rumpfContext.prototype.enterRule = function (listener) {
        if (listener.enterKons_rumpf) {
            listener.enterKons_rumpf(this);
        }
    };
    // @Override
    Kons_rumpfContext.prototype.exitRule = function (listener) {
        if (listener.exitKons_rumpf) {
            listener.exitKons_rumpf(this);
        }
    };
    // @Override
    Kons_rumpfContext.prototype.accept = function (visitor) {
        if (visitor.visitKons_rumpf) {
            return visitor.visitKons_rumpf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Kons_rumpfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Kons_rumpfContext = Kons_rumpfContext;
var KenngroesseContext = /** @class */ (function (_super) {
    __extends(KenngroesseContext, _super);
    function KenngroesseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KenngroesseContext.prototype.kennwert = function () {
        return this.tryGetRuleContext(0, KennwertContext);
    };
    KenngroesseContext.prototype.kennwerteblock = function () {
        return this.tryGetRuleContext(0, KennwerteblockContext);
    };
    KenngroesseContext.prototype.kennlinie = function () {
        return this.tryGetRuleContext(0, KennlinieContext);
    };
    KenngroesseContext.prototype.kennfeld = function () {
        return this.tryGetRuleContext(0, KennfeldContext);
    };
    KenngroesseContext.prototype.gruppenstuetzstellen = function () {
        return this.tryGetRuleContext(0, GruppenstuetzstellenContext);
    };
    KenngroesseContext.prototype.kenntext = function () {
        return this.tryGetRuleContext(0, KenntextContext);
    };
    Object.defineProperty(KenngroesseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kenngroesse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KenngroesseContext.prototype.enterRule = function (listener) {
        if (listener.enterKenngroesse) {
            listener.enterKenngroesse(this);
        }
    };
    // @Override
    KenngroesseContext.prototype.exitRule = function (listener) {
        if (listener.exitKenngroesse) {
            listener.exitKenngroesse(this);
        }
    };
    // @Override
    KenngroesseContext.prototype.accept = function (visitor) {
        if (visitor.visitKenngroesse) {
            return visitor.visitKenngroesse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KenngroesseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KenngroesseContext = KenngroesseContext;
var KennwertContext = /** @class */ (function (_super) {
    __extends(KennwertContext, _super);
    function KennwertContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KennwertContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    KennwertContext.prototype.kgr_info = function () {
        return this.getRuleContext(0, Kgr_infoContext);
    };
    KennwertContext.prototype.realzahl = function () {
        return this.tryGetRuleContext(0, RealzahlContext);
    };
    KennwertContext.prototype.einheit_w = function () {
        return this.tryGetRuleContext(0, Einheit_wContext);
    };
    KennwertContext.prototype.TEXT = function () { return this.tryGetToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(KennwertContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kennwert; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KennwertContext.prototype.enterRule = function (listener) {
        if (listener.enterKennwert) {
            listener.enterKennwert(this);
        }
    };
    // @Override
    KennwertContext.prototype.exitRule = function (listener) {
        if (listener.exitKennwert) {
            listener.exitKennwert(this);
        }
    };
    // @Override
    KennwertContext.prototype.accept = function (visitor) {
        if (visitor.visitKennwert) {
            return visitor.visitKennwert(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KennwertContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KennwertContext = KennwertContext;
var KennwerteblockContext = /** @class */ (function (_super) {
    __extends(KennwerteblockContext, _super);
    function KennwerteblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KennwerteblockContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    KennwerteblockContext.prototype.anzahl_x = function () {
        return this.getRuleContext(0, Anzahl_xContext);
    };
    KennwerteblockContext.prototype.kgr_info = function () {
        return this.getRuleContext(0, Kgr_infoContext);
    };
    KennwerteblockContext.prototype.einheit_w = function () {
        return this.tryGetRuleContext(0, Einheit_wContext);
    };
    KennwerteblockContext.prototype.werteliste_kwb = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Werteliste_kwbContext);
        }
        else {
            return this.getRuleContext(i, Werteliste_kwbContext);
        }
    };
    Object.defineProperty(KennwerteblockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kennwerteblock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KennwerteblockContext.prototype.enterRule = function (listener) {
        if (listener.enterKennwerteblock) {
            listener.enterKennwerteblock(this);
        }
    };
    // @Override
    KennwerteblockContext.prototype.exitRule = function (listener) {
        if (listener.exitKennwerteblock) {
            listener.exitKennwerteblock(this);
        }
    };
    // @Override
    KennwerteblockContext.prototype.accept = function (visitor) {
        if (visitor.visitKennwerteblock) {
            return visitor.visitKennwerteblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KennwerteblockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KennwerteblockContext = KennwerteblockContext;
var KennlinieContext = /** @class */ (function (_super) {
    __extends(KennlinieContext, _super);
    function KennlinieContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KennlinieContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    KennlinieContext.prototype.anzahl_x = function () {
        return this.getRuleContext(0, Anzahl_xContext);
    };
    KennlinieContext.prototype.kgr_info = function () {
        return this.getRuleContext(0, Kgr_infoContext);
    };
    KennlinieContext.prototype.einheit_x = function () {
        return this.tryGetRuleContext(0, Einheit_xContext);
    };
    KennlinieContext.prototype.einheit_w = function () {
        return this.tryGetRuleContext(0, Einheit_wContext);
    };
    KennlinieContext.prototype.sst_liste_x = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sst_liste_xContext);
        }
        else {
            return this.getRuleContext(i, Sst_liste_xContext);
        }
    };
    KennlinieContext.prototype.werteliste = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WertelisteContext);
        }
        else {
            return this.getRuleContext(i, WertelisteContext);
        }
    };
    Object.defineProperty(KennlinieContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kennlinie; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KennlinieContext.prototype.enterRule = function (listener) {
        if (listener.enterKennlinie) {
            listener.enterKennlinie(this);
        }
    };
    // @Override
    KennlinieContext.prototype.exitRule = function (listener) {
        if (listener.exitKennlinie) {
            listener.exitKennlinie(this);
        }
    };
    // @Override
    KennlinieContext.prototype.accept = function (visitor) {
        if (visitor.visitKennlinie) {
            return visitor.visitKennlinie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KennlinieContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KennlinieContext = KennlinieContext;
var KennfeldContext = /** @class */ (function (_super) {
    __extends(KennfeldContext, _super);
    function KennfeldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KennfeldContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    KennfeldContext.prototype.anzahl_x = function () {
        return this.getRuleContext(0, Anzahl_xContext);
    };
    KennfeldContext.prototype.anzahl_y = function () {
        return this.getRuleContext(0, Anzahl_yContext);
    };
    KennfeldContext.prototype.kgr_info = function () {
        return this.getRuleContext(0, Kgr_infoContext);
    };
    KennfeldContext.prototype.kf_zeile_liste = function () {
        return this.getRuleContext(0, Kf_zeile_listeContext);
    };
    KennfeldContext.prototype.einheit_x = function () {
        return this.tryGetRuleContext(0, Einheit_xContext);
    };
    KennfeldContext.prototype.einheit_y = function () {
        return this.tryGetRuleContext(0, Einheit_yContext);
    };
    KennfeldContext.prototype.einheit_w = function () {
        return this.tryGetRuleContext(0, Einheit_wContext);
    };
    KennfeldContext.prototype.sst_liste_x = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sst_liste_xContext);
        }
        else {
            return this.getRuleContext(i, Sst_liste_xContext);
        }
    };
    Object.defineProperty(KennfeldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kennfeld; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KennfeldContext.prototype.enterRule = function (listener) {
        if (listener.enterKennfeld) {
            listener.enterKennfeld(this);
        }
    };
    // @Override
    KennfeldContext.prototype.exitRule = function (listener) {
        if (listener.exitKennfeld) {
            listener.exitKennfeld(this);
        }
    };
    // @Override
    KennfeldContext.prototype.accept = function (visitor) {
        if (visitor.visitKennfeld) {
            return visitor.visitKennfeld(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KennfeldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KennfeldContext = KennfeldContext;
var GruppenstuetzstellenContext = /** @class */ (function (_super) {
    __extends(GruppenstuetzstellenContext, _super);
    function GruppenstuetzstellenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GruppenstuetzstellenContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    GruppenstuetzstellenContext.prototype.anzahl_x = function () {
        return this.getRuleContext(0, Anzahl_xContext);
    };
    GruppenstuetzstellenContext.prototype.kgr_info = function () {
        return this.getRuleContext(0, Kgr_infoContext);
    };
    GruppenstuetzstellenContext.prototype.einheit_x = function () {
        return this.tryGetRuleContext(0, Einheit_xContext);
    };
    GruppenstuetzstellenContext.prototype.sst_liste_x = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sst_liste_xContext);
        }
        else {
            return this.getRuleContext(i, Sst_liste_xContext);
        }
    };
    Object.defineProperty(GruppenstuetzstellenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_gruppenstuetzstellen; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GruppenstuetzstellenContext.prototype.enterRule = function (listener) {
        if (listener.enterGruppenstuetzstellen) {
            listener.enterGruppenstuetzstellen(this);
        }
    };
    // @Override
    GruppenstuetzstellenContext.prototype.exitRule = function (listener) {
        if (listener.exitGruppenstuetzstellen) {
            listener.exitGruppenstuetzstellen(this);
        }
    };
    // @Override
    GruppenstuetzstellenContext.prototype.accept = function (visitor) {
        if (visitor.visitGruppenstuetzstellen) {
            return visitor.visitGruppenstuetzstellen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GruppenstuetzstellenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GruppenstuetzstellenContext = GruppenstuetzstellenContext;
var KenntextContext = /** @class */ (function (_super) {
    __extends(KenntextContext, _super);
    function KenntextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KenntextContext.prototype.NAME = function () { return this.getToken(DCM_2_0_grammarParser.NAME, 0); };
    KenntextContext.prototype.kgr_info = function () {
        return this.getRuleContext(0, Kgr_infoContext);
    };
    KenntextContext.prototype.TEXT = function () { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(KenntextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kenntext; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KenntextContext.prototype.enterRule = function (listener) {
        if (listener.enterKenntext) {
            listener.enterKenntext(this);
        }
    };
    // @Override
    KenntextContext.prototype.exitRule = function (listener) {
        if (listener.exitKenntext) {
            listener.exitKenntext(this);
        }
    };
    // @Override
    KenntextContext.prototype.accept = function (visitor) {
        if (visitor.visitKenntext) {
            return visitor.visitKenntext(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KenntextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KenntextContext = KenntextContext;
var Kgr_infoContext = /** @class */ (function (_super) {
    __extends(Kgr_infoContext, _super);
    function Kgr_infoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Kgr_infoContext.prototype.langname = function () {
        return this.tryGetRuleContext(0, LangnameContext);
    };
    Kgr_infoContext.prototype.displayname = function () {
        return this.tryGetRuleContext(0, DisplaynameContext);
    };
    Kgr_infoContext.prototype.var_abhangigkeiten = function () {
        return this.tryGetRuleContext(0, Var_abhangigkeitenContext);
    };
    Kgr_infoContext.prototype.funktionszugehorigkeit = function () {
        return this.tryGetRuleContext(0, FunktionszugehorigkeitContext);
    };
    Object.defineProperty(Kgr_infoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kgr_info; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Kgr_infoContext.prototype.enterRule = function (listener) {
        if (listener.enterKgr_info) {
            listener.enterKgr_info(this);
        }
    };
    // @Override
    Kgr_infoContext.prototype.exitRule = function (listener) {
        if (listener.exitKgr_info) {
            listener.exitKgr_info(this);
        }
    };
    // @Override
    Kgr_infoContext.prototype.accept = function (visitor) {
        if (visitor.visitKgr_info) {
            return visitor.visitKgr_info(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Kgr_infoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Kgr_infoContext = Kgr_infoContext;
var Einheit_xContext = /** @class */ (function (_super) {
    __extends(Einheit_xContext, _super);
    function Einheit_xContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Einheit_xContext.prototype.TEXT = function () { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(Einheit_xContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_einheit_x; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Einheit_xContext.prototype.enterRule = function (listener) {
        if (listener.enterEinheit_x) {
            listener.enterEinheit_x(this);
        }
    };
    // @Override
    Einheit_xContext.prototype.exitRule = function (listener) {
        if (listener.exitEinheit_x) {
            listener.exitEinheit_x(this);
        }
    };
    // @Override
    Einheit_xContext.prototype.accept = function (visitor) {
        if (visitor.visitEinheit_x) {
            return visitor.visitEinheit_x(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Einheit_xContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Einheit_xContext = Einheit_xContext;
var Einheit_yContext = /** @class */ (function (_super) {
    __extends(Einheit_yContext, _super);
    function Einheit_yContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Einheit_yContext.prototype.TEXT = function () { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(Einheit_yContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_einheit_y; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Einheit_yContext.prototype.enterRule = function (listener) {
        if (listener.enterEinheit_y) {
            listener.enterEinheit_y(this);
        }
    };
    // @Override
    Einheit_yContext.prototype.exitRule = function (listener) {
        if (listener.exitEinheit_y) {
            listener.exitEinheit_y(this);
        }
    };
    // @Override
    Einheit_yContext.prototype.accept = function (visitor) {
        if (visitor.visitEinheit_y) {
            return visitor.visitEinheit_y(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Einheit_yContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Einheit_yContext = Einheit_yContext;
var Einheit_wContext = /** @class */ (function (_super) {
    __extends(Einheit_wContext, _super);
    function Einheit_wContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Einheit_wContext.prototype.TEXT = function () { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(Einheit_wContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_einheit_w; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Einheit_wContext.prototype.enterRule = function (listener) {
        if (listener.enterEinheit_w) {
            listener.enterEinheit_w(this);
        }
    };
    // @Override
    Einheit_wContext.prototype.exitRule = function (listener) {
        if (listener.exitEinheit_w) {
            listener.exitEinheit_w(this);
        }
    };
    // @Override
    Einheit_wContext.prototype.accept = function (visitor) {
        if (visitor.visitEinheit_w) {
            return visitor.visitEinheit_w(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Einheit_wContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Einheit_wContext = Einheit_wContext;
var LangnameContext = /** @class */ (function (_super) {
    __extends(LangnameContext, _super);
    function LangnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LangnameContext.prototype.TEXT = function () { return this.getToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(LangnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_langname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LangnameContext.prototype.enterRule = function (listener) {
        if (listener.enterLangname) {
            listener.enterLangname(this);
        }
    };
    // @Override
    LangnameContext.prototype.exitRule = function (listener) {
        if (listener.exitLangname) {
            listener.exitLangname(this);
        }
    };
    // @Override
    LangnameContext.prototype.accept = function (visitor) {
        if (visitor.visitLangname) {
            return visitor.visitLangname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LangnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LangnameContext = LangnameContext;
var DisplaynameContext = /** @class */ (function (_super) {
    __extends(DisplaynameContext, _super);
    function DisplaynameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DisplaynameContext.prototype.NAME = function () { return this.tryGetToken(DCM_2_0_grammarParser.NAME, 0); };
    DisplaynameContext.prototype.TEXT = function () { return this.tryGetToken(DCM_2_0_grammarParser.TEXT, 0); };
    Object.defineProperty(DisplaynameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_displayname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DisplaynameContext.prototype.enterRule = function (listener) {
        if (listener.enterDisplayname) {
            listener.enterDisplayname(this);
        }
    };
    // @Override
    DisplaynameContext.prototype.exitRule = function (listener) {
        if (listener.exitDisplayname) {
            listener.exitDisplayname(this);
        }
    };
    // @Override
    DisplaynameContext.prototype.accept = function (visitor) {
        if (visitor.visitDisplayname) {
            return visitor.visitDisplayname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DisplaynameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DisplaynameContext = DisplaynameContext;
var Var_abhangigkeitenContext = /** @class */ (function (_super) {
    __extends(Var_abhangigkeitenContext, _super);
    function Var_abhangigkeitenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Var_abhangigkeitenContext.prototype.var_abh = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Var_abhContext);
        }
        else {
            return this.getRuleContext(i, Var_abhContext);
        }
    };
    Object.defineProperty(Var_abhangigkeitenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_var_abhangigkeiten; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Var_abhangigkeitenContext.prototype.enterRule = function (listener) {
        if (listener.enterVar_abhangigkeiten) {
            listener.enterVar_abhangigkeiten(this);
        }
    };
    // @Override
    Var_abhangigkeitenContext.prototype.exitRule = function (listener) {
        if (listener.exitVar_abhangigkeiten) {
            listener.exitVar_abhangigkeiten(this);
        }
    };
    // @Override
    Var_abhangigkeitenContext.prototype.accept = function (visitor) {
        if (visitor.visitVar_abhangigkeiten) {
            return visitor.visitVar_abhangigkeiten(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Var_abhangigkeitenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Var_abhangigkeitenContext = Var_abhangigkeitenContext;
var Var_abhContext = /** @class */ (function (_super) {
    __extends(Var_abhContext, _super);
    function Var_abhContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Var_abhContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(DCM_2_0_grammarParser.NAME);
        }
        else {
            return this.getToken(DCM_2_0_grammarParser.NAME, i);
        }
    };
    Object.defineProperty(Var_abhContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_var_abh; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Var_abhContext.prototype.enterRule = function (listener) {
        if (listener.enterVar_abh) {
            listener.enterVar_abh(this);
        }
    };
    // @Override
    Var_abhContext.prototype.exitRule = function (listener) {
        if (listener.exitVar_abh) {
            listener.exitVar_abh(this);
        }
    };
    // @Override
    Var_abhContext.prototype.accept = function (visitor) {
        if (visitor.visitVar_abh) {
            return visitor.visitVar_abh(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Var_abhContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Var_abhContext = Var_abhContext;
var FunktionszugehorigkeitContext = /** @class */ (function (_super) {
    __extends(FunktionszugehorigkeitContext, _super);
    function FunktionszugehorigkeitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunktionszugehorigkeitContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(DCM_2_0_grammarParser.NAME);
        }
        else {
            return this.getToken(DCM_2_0_grammarParser.NAME, i);
        }
    };
    Object.defineProperty(FunktionszugehorigkeitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_funktionszugehorigkeit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunktionszugehorigkeitContext.prototype.enterRule = function (listener) {
        if (listener.enterFunktionszugehorigkeit) {
            listener.enterFunktionszugehorigkeit(this);
        }
    };
    // @Override
    FunktionszugehorigkeitContext.prototype.exitRule = function (listener) {
        if (listener.exitFunktionszugehorigkeit) {
            listener.exitFunktionszugehorigkeit(this);
        }
    };
    // @Override
    FunktionszugehorigkeitContext.prototype.accept = function (visitor) {
        if (visitor.visitFunktionszugehorigkeit) {
            return visitor.visitFunktionszugehorigkeit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunktionszugehorigkeitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunktionszugehorigkeitContext = FunktionszugehorigkeitContext;
var Anzahl_xContext = /** @class */ (function (_super) {
    __extends(Anzahl_xContext, _super);
    function Anzahl_xContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Anzahl_xContext.prototype.INT = function () { return this.getToken(DCM_2_0_grammarParser.INT, 0); };
    Object.defineProperty(Anzahl_xContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_anzahl_x; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Anzahl_xContext.prototype.enterRule = function (listener) {
        if (listener.enterAnzahl_x) {
            listener.enterAnzahl_x(this);
        }
    };
    // @Override
    Anzahl_xContext.prototype.exitRule = function (listener) {
        if (listener.exitAnzahl_x) {
            listener.exitAnzahl_x(this);
        }
    };
    // @Override
    Anzahl_xContext.prototype.accept = function (visitor) {
        if (visitor.visitAnzahl_x) {
            return visitor.visitAnzahl_x(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Anzahl_xContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Anzahl_xContext = Anzahl_xContext;
var Anzahl_yContext = /** @class */ (function (_super) {
    __extends(Anzahl_yContext, _super);
    function Anzahl_yContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Anzahl_yContext.prototype.INT = function () { return this.getToken(DCM_2_0_grammarParser.INT, 0); };
    Object.defineProperty(Anzahl_yContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_anzahl_y; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Anzahl_yContext.prototype.enterRule = function (listener) {
        if (listener.enterAnzahl_y) {
            listener.enterAnzahl_y(this);
        }
    };
    // @Override
    Anzahl_yContext.prototype.exitRule = function (listener) {
        if (listener.exitAnzahl_y) {
            listener.exitAnzahl_y(this);
        }
    };
    // @Override
    Anzahl_yContext.prototype.accept = function (visitor) {
        if (visitor.visitAnzahl_y) {
            return visitor.visitAnzahl_y(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Anzahl_yContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Anzahl_yContext = Anzahl_yContext;
var WertelisteContext = /** @class */ (function (_super) {
    __extends(WertelisteContext, _super);
    function WertelisteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WertelisteContext.prototype.realzahl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RealzahlContext);
        }
        else {
            return this.getRuleContext(i, RealzahlContext);
        }
    };
    Object.defineProperty(WertelisteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_werteliste; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WertelisteContext.prototype.enterRule = function (listener) {
        if (listener.enterWerteliste) {
            listener.enterWerteliste(this);
        }
    };
    // @Override
    WertelisteContext.prototype.exitRule = function (listener) {
        if (listener.exitWerteliste) {
            listener.exitWerteliste(this);
        }
    };
    // @Override
    WertelisteContext.prototype.accept = function (visitor) {
        if (visitor.visitWerteliste) {
            return visitor.visitWerteliste(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WertelisteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WertelisteContext = WertelisteContext;
var Werteliste_kwbContext = /** @class */ (function (_super) {
    __extends(Werteliste_kwbContext, _super);
    function Werteliste_kwbContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Werteliste_kwbContext.prototype.realzahl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RealzahlContext);
        }
        else {
            return this.getRuleContext(i, RealzahlContext);
        }
    };
    Werteliste_kwbContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(DCM_2_0_grammarParser.TEXT);
        }
        else {
            return this.getToken(DCM_2_0_grammarParser.TEXT, i);
        }
    };
    Object.defineProperty(Werteliste_kwbContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_werteliste_kwb; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Werteliste_kwbContext.prototype.enterRule = function (listener) {
        if (listener.enterWerteliste_kwb) {
            listener.enterWerteliste_kwb(this);
        }
    };
    // @Override
    Werteliste_kwbContext.prototype.exitRule = function (listener) {
        if (listener.exitWerteliste_kwb) {
            listener.exitWerteliste_kwb(this);
        }
    };
    // @Override
    Werteliste_kwbContext.prototype.accept = function (visitor) {
        if (visitor.visitWerteliste_kwb) {
            return visitor.visitWerteliste_kwb(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Werteliste_kwbContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Werteliste_kwbContext = Werteliste_kwbContext;
var Sst_liste_xContext = /** @class */ (function (_super) {
    __extends(Sst_liste_xContext, _super);
    function Sst_liste_xContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sst_liste_xContext.prototype.realzahl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RealzahlContext);
        }
        else {
            return this.getRuleContext(i, RealzahlContext);
        }
    };
    Sst_liste_xContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(DCM_2_0_grammarParser.TEXT);
        }
        else {
            return this.getToken(DCM_2_0_grammarParser.TEXT, i);
        }
    };
    Object.defineProperty(Sst_liste_xContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_sst_liste_x; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sst_liste_xContext.prototype.enterRule = function (listener) {
        if (listener.enterSst_liste_x) {
            listener.enterSst_liste_x(this);
        }
    };
    // @Override
    Sst_liste_xContext.prototype.exitRule = function (listener) {
        if (listener.exitSst_liste_x) {
            listener.exitSst_liste_x(this);
        }
    };
    // @Override
    Sst_liste_xContext.prototype.accept = function (visitor) {
        if (visitor.visitSst_liste_x) {
            return visitor.visitSst_liste_x(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sst_liste_xContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sst_liste_xContext = Sst_liste_xContext;
var Kf_zeile_listeContext = /** @class */ (function (_super) {
    __extends(Kf_zeile_listeContext, _super);
    function Kf_zeile_listeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Kf_zeile_listeContext.prototype.kf_zeile_liste_r = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Kf_zeile_liste_rContext);
        }
        else {
            return this.getRuleContext(i, Kf_zeile_liste_rContext);
        }
    };
    Kf_zeile_listeContext.prototype.kf_zeile_liste_tx = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Kf_zeile_liste_txContext);
        }
        else {
            return this.getRuleContext(i, Kf_zeile_liste_txContext);
        }
    };
    Object.defineProperty(Kf_zeile_listeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kf_zeile_liste; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Kf_zeile_listeContext.prototype.enterRule = function (listener) {
        if (listener.enterKf_zeile_liste) {
            listener.enterKf_zeile_liste(this);
        }
    };
    // @Override
    Kf_zeile_listeContext.prototype.exitRule = function (listener) {
        if (listener.exitKf_zeile_liste) {
            listener.exitKf_zeile_liste(this);
        }
    };
    // @Override
    Kf_zeile_listeContext.prototype.accept = function (visitor) {
        if (visitor.visitKf_zeile_liste) {
            return visitor.visitKf_zeile_liste(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Kf_zeile_listeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Kf_zeile_listeContext = Kf_zeile_listeContext;
var Kf_zeile_liste_rContext = /** @class */ (function (_super) {
    __extends(Kf_zeile_liste_rContext, _super);
    function Kf_zeile_liste_rContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Kf_zeile_liste_rContext.prototype.realzahl = function () {
        return this.tryGetRuleContext(0, RealzahlContext);
    };
    Kf_zeile_liste_rContext.prototype.werteliste = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WertelisteContext);
        }
        else {
            return this.getRuleContext(i, WertelisteContext);
        }
    };
    Object.defineProperty(Kf_zeile_liste_rContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kf_zeile_liste_r; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Kf_zeile_liste_rContext.prototype.enterRule = function (listener) {
        if (listener.enterKf_zeile_liste_r) {
            listener.enterKf_zeile_liste_r(this);
        }
    };
    // @Override
    Kf_zeile_liste_rContext.prototype.exitRule = function (listener) {
        if (listener.exitKf_zeile_liste_r) {
            listener.exitKf_zeile_liste_r(this);
        }
    };
    // @Override
    Kf_zeile_liste_rContext.prototype.accept = function (visitor) {
        if (visitor.visitKf_zeile_liste_r) {
            return visitor.visitKf_zeile_liste_r(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Kf_zeile_liste_rContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Kf_zeile_liste_rContext = Kf_zeile_liste_rContext;
var Kf_zeile_liste_txContext = /** @class */ (function (_super) {
    __extends(Kf_zeile_liste_txContext, _super);
    function Kf_zeile_liste_txContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Kf_zeile_liste_txContext.prototype.TEXT = function () { return this.tryGetToken(DCM_2_0_grammarParser.TEXT, 0); };
    Kf_zeile_liste_txContext.prototype.werteliste = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WertelisteContext);
        }
        else {
            return this.getRuleContext(i, WertelisteContext);
        }
    };
    Object.defineProperty(Kf_zeile_liste_txContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_kf_zeile_liste_tx; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Kf_zeile_liste_txContext.prototype.enterRule = function (listener) {
        if (listener.enterKf_zeile_liste_tx) {
            listener.enterKf_zeile_liste_tx(this);
        }
    };
    // @Override
    Kf_zeile_liste_txContext.prototype.exitRule = function (listener) {
        if (listener.exitKf_zeile_liste_tx) {
            listener.exitKf_zeile_liste_tx(this);
        }
    };
    // @Override
    Kf_zeile_liste_txContext.prototype.accept = function (visitor) {
        if (visitor.visitKf_zeile_liste_tx) {
            return visitor.visitKf_zeile_liste_tx(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Kf_zeile_liste_txContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Kf_zeile_liste_txContext = Kf_zeile_liste_txContext;
var RealzahlContext = /** @class */ (function (_super) {
    __extends(RealzahlContext, _super);
    function RealzahlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RealzahlContext.prototype.INT = function () { return this.tryGetToken(DCM_2_0_grammarParser.INT, 0); };
    RealzahlContext.prototype.FLOAT = function () { return this.tryGetToken(DCM_2_0_grammarParser.FLOAT, 0); };
    Object.defineProperty(RealzahlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DCM_2_0_grammarParser.RULE_realzahl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RealzahlContext.prototype.enterRule = function (listener) {
        if (listener.enterRealzahl) {
            listener.enterRealzahl(this);
        }
    };
    // @Override
    RealzahlContext.prototype.exitRule = function (listener) {
        if (listener.exitRealzahl) {
            listener.exitRealzahl(this);
        }
    };
    // @Override
    RealzahlContext.prototype.accept = function (visitor) {
        if (visitor.visitRealzahl) {
            return visitor.visitRealzahl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RealzahlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RealzahlContext = RealzahlContext;
