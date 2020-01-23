"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/modelica/modelica.g4 by ANTLR 4.7.3-SNAPSHOT
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
var modelicaParser = /** @class */ (function (_super) {
    __extends(modelicaParser, _super);
    function modelicaParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(modelicaParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(modelicaParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return modelicaParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(modelicaParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "modelica.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(modelicaParser.prototype, "ruleNames", {
        // @Override
        get: function () { return modelicaParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(modelicaParser.prototype, "serializedATN", {
        // @Override
        get: function () { return modelicaParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    modelicaParser.prototype.stored_definition = function () {
        var _localctx = new Stored_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, modelicaParser.RULE_stored_definition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__0) {
                    {
                        {
                            this.state = 156;
                            this.match(modelicaParser.T__0);
                            this.state = 158;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                                {
                                    this.state = 157;
                                    this.name();
                                }
                            }
                            this.state = 160;
                            this.match(modelicaParser.T__1);
                        }
                    }
                    this.state = 165;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << modelicaParser.T__2) | (1 << modelicaParser.T__3) | (1 << modelicaParser.T__4) | (1 << modelicaParser.T__5) | (1 << modelicaParser.T__6) | (1 << modelicaParser.T__7) | (1 << modelicaParser.T__8) | (1 << modelicaParser.T__9) | (1 << modelicaParser.T__10) | (1 << modelicaParser.T__11) | (1 << modelicaParser.T__12) | (1 << modelicaParser.T__13) | (1 << modelicaParser.T__14) | (1 << modelicaParser.T__15) | (1 << modelicaParser.T__16))) !== 0)) {
                    {
                        {
                            this.state = 167;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === modelicaParser.T__2) {
                                {
                                    this.state = 166;
                                    this.match(modelicaParser.T__2);
                                }
                            }
                            this.state = 169;
                            this.class_definition();
                            this.state = 170;
                            this.match(modelicaParser.T__1);
                        }
                    }
                    this.state = 176;
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
    modelicaParser.prototype.class_definition = function () {
        var _localctx = new Class_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, modelicaParser.RULE_class_definition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__3) {
                    {
                        this.state = 177;
                        this.match(modelicaParser.T__3);
                    }
                }
                this.state = 180;
                this.class_prefixes();
                this.state = 181;
                this.class_specifier();
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
    modelicaParser.prototype.class_specifier = function () {
        var _localctx = new Class_specifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, modelicaParser.RULE_class_specifier);
        try {
            this.state = 186;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 183;
                        this.long_class_specifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 184;
                        this.short_class_specifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 185;
                        this.der_class_specifier();
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
    modelicaParser.prototype.class_prefixes = function () {
        var _localctx = new Class_prefixesContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, modelicaParser.RULE_class_prefixes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__4) {
                    {
                        this.state = 188;
                        this.match(modelicaParser.T__4);
                    }
                }
                this.state = 212;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 191;
                            this.match(modelicaParser.T__5);
                        }
                        break;
                    case 2:
                        {
                            this.state = 192;
                            this.match(modelicaParser.T__6);
                        }
                        break;
                    case 3:
                        {
                            this.state = 194;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === modelicaParser.T__7) {
                                {
                                    this.state = 193;
                                    this.match(modelicaParser.T__7);
                                }
                            }
                            this.state = 196;
                            this.match(modelicaParser.T__8);
                        }
                        break;
                    case 4:
                        {
                            this.state = 197;
                            this.match(modelicaParser.T__9);
                        }
                        break;
                    case 5:
                        {
                            this.state = 199;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === modelicaParser.T__10) {
                                {
                                    this.state = 198;
                                    this.match(modelicaParser.T__10);
                                }
                            }
                            this.state = 201;
                            this.match(modelicaParser.T__11);
                        }
                        break;
                    case 6:
                        {
                            this.state = 202;
                            this.match(modelicaParser.T__12);
                        }
                        break;
                    case 7:
                        {
                            this.state = 203;
                            this.match(modelicaParser.T__13);
                        }
                        break;
                    case 8:
                        {
                            this.state = 205;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === modelicaParser.T__14 || _la === modelicaParser.T__15) {
                                {
                                    this.state = 204;
                                    _la = this._input.LA(1);
                                    if (!(_la === modelicaParser.T__14 || _la === modelicaParser.T__15)) {
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
                            this.state = 208;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === modelicaParser.T__7) {
                                {
                                    this.state = 207;
                                    this.match(modelicaParser.T__7);
                                }
                            }
                            this.state = 210;
                            this.match(modelicaParser.T__16);
                        }
                        break;
                    case 9:
                        {
                            this.state = 211;
                            this.match(modelicaParser.T__7);
                        }
                        break;
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
    modelicaParser.prototype.long_class_specifier = function () {
        var _localctx = new Long_class_specifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, modelicaParser.RULE_long_class_specifier);
        var _la;
        try {
            this.state = 230;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case modelicaParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 214;
                        this.match(modelicaParser.IDENT);
                        this.state = 215;
                        this.string_comment();
                        this.state = 216;
                        this.composition();
                        this.state = 217;
                        this.match(modelicaParser.T__17);
                        this.state = 218;
                        this.match(modelicaParser.IDENT);
                    }
                    break;
                case modelicaParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 220;
                        this.match(modelicaParser.T__18);
                        this.state = 221;
                        this.match(modelicaParser.IDENT);
                        this.state = 223;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__21) {
                            {
                                this.state = 222;
                                this.class_modification();
                            }
                        }
                        this.state = 225;
                        this.string_comment();
                        this.state = 226;
                        this.composition();
                        this.state = 227;
                        this.match(modelicaParser.T__17);
                        this.state = 228;
                        this.match(modelicaParser.IDENT);
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
    modelicaParser.prototype.short_class_specifier = function () {
        var _localctx = new Short_class_specifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, modelicaParser.RULE_short_class_specifier);
        var _la;
        try {
            this.state = 256;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 232;
                        this.match(modelicaParser.IDENT);
                        this.state = 233;
                        this.match(modelicaParser.T__19);
                        this.state = 234;
                        this.base_prefix();
                        this.state = 235;
                        this.name();
                        this.state = 237;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__83) {
                            {
                                this.state = 236;
                                this.array_subscripts();
                            }
                        }
                        this.state = 240;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__21) {
                            {
                                this.state = 239;
                                this.class_modification();
                            }
                        }
                        this.state = 242;
                        this.comment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 244;
                        this.match(modelicaParser.IDENT);
                        this.state = 245;
                        this.match(modelicaParser.T__19);
                        this.state = 246;
                        this.match(modelicaParser.T__20);
                        this.state = 247;
                        this.match(modelicaParser.T__21);
                        this.state = 252;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case modelicaParser.T__23:
                            case modelicaParser.IDENT:
                                {
                                    this.state = 249;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === modelicaParser.IDENT) {
                                        {
                                            this.state = 248;
                                            this.enum_list();
                                        }
                                    }
                                }
                                break;
                            case modelicaParser.T__22:
                                {
                                    this.state = 251;
                                    this.match(modelicaParser.T__22);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 254;
                        this.match(modelicaParser.T__23);
                        this.state = 255;
                        this.comment();
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
    modelicaParser.prototype.der_class_specifier = function () {
        var _localctx = new Der_class_specifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, modelicaParser.RULE_der_class_specifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.match(modelicaParser.IDENT);
                this.state = 259;
                this.match(modelicaParser.T__19);
                this.state = 260;
                this.match(modelicaParser.T__24);
                this.state = 261;
                this.match(modelicaParser.T__21);
                this.state = 262;
                this.name();
                this.state = 263;
                this.match(modelicaParser.T__25);
                this.state = 264;
                this.match(modelicaParser.IDENT);
                this.state = 269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 265;
                            this.match(modelicaParser.T__25);
                            this.state = 266;
                            this.match(modelicaParser.IDENT);
                        }
                    }
                    this.state = 271;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 272;
                this.match(modelicaParser.T__23);
                this.state = 273;
                this.comment();
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
    modelicaParser.prototype.base_prefix = function () {
        var _localctx = new Base_prefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, modelicaParser.RULE_base_prefix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.type_prefix();
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
    modelicaParser.prototype.enum_list = function () {
        var _localctx = new Enum_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, modelicaParser.RULE_enum_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 277;
                this.enumeration_literal();
                this.state = 282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 278;
                            this.match(modelicaParser.T__25);
                            this.state = 279;
                            this.enumeration_literal();
                        }
                    }
                    this.state = 284;
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
    modelicaParser.prototype.enumeration_literal = function () {
        var _localctx = new Enumeration_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, modelicaParser.RULE_enumeration_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
                this.match(modelicaParser.IDENT);
                this.state = 286;
                this.comment();
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
    modelicaParser.prototype.composition = function () {
        var _localctx = new CompositionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, modelicaParser.RULE_composition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this.element_list();
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (modelicaParser.T__26 - 27)) | (1 << (modelicaParser.T__27 - 27)) | (1 << (modelicaParser.T__48 - 27)) | (1 << (modelicaParser.T__49 - 27)) | (1 << (modelicaParser.T__50 - 27)))) !== 0)) {
                    {
                        this.state = 295;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                            case 1:
                                {
                                    this.state = 289;
                                    this.match(modelicaParser.T__26);
                                    this.state = 290;
                                    this.element_list();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 291;
                                    this.match(modelicaParser.T__27);
                                    this.state = 292;
                                    this.element_list();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 293;
                                    this.equation_section();
                                }
                                break;
                            case 4:
                                {
                                    this.state = 294;
                                    this.algorithm_section();
                                }
                                break;
                        }
                    }
                    this.state = 299;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__28) {
                    {
                        this.state = 300;
                        this.match(modelicaParser.T__28);
                        this.state = 302;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.STRING) {
                            {
                                this.state = 301;
                                this.language_specification();
                            }
                        }
                        this.state = 305;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                            {
                                this.state = 304;
                                this.external_function_call();
                            }
                        }
                        this.state = 308;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__87) {
                            {
                                this.state = 307;
                                this.annotation();
                            }
                        }
                        this.state = 310;
                        this.match(modelicaParser.T__1);
                    }
                }
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__87) {
                    {
                        this.state = 313;
                        this.annotation();
                        this.state = 314;
                        this.match(modelicaParser.T__1);
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
    modelicaParser.prototype.language_specification = function () {
        var _localctx = new Language_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, modelicaParser.RULE_language_specification);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this.match(modelicaParser.STRING);
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
    modelicaParser.prototype.external_function_call = function () {
        var _localctx = new External_function_callContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, modelicaParser.RULE_external_function_call);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 320;
                            this.component_reference();
                            this.state = 321;
                            this.match(modelicaParser.T__19);
                        }
                        break;
                }
                this.state = 325;
                this.match(modelicaParser.IDENT);
                this.state = 326;
                this.match(modelicaParser.T__21);
                this.state = 328;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (modelicaParser.T__17 - 18)) | (1 << (modelicaParser.T__21 - 18)) | (1 << (modelicaParser.T__24 - 18)) | (1 << (modelicaParser.T__45 - 18)) | (1 << (modelicaParser.T__48 - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (modelicaParser.T__65 - 66)) | (1 << (modelicaParser.T__72 - 66)) | (1 << (modelicaParser.T__73 - 66)) | (1 << (modelicaParser.T__74 - 66)) | (1 << (modelicaParser.T__75 - 66)) | (1 << (modelicaParser.T__81 - 66)) | (1 << (modelicaParser.T__82 - 66)) | (1 << (modelicaParser.T__83 - 66)) | (1 << (modelicaParser.T__85 - 66)) | (1 << (modelicaParser.T__86 - 66)) | (1 << (modelicaParser.IDENT - 66)) | (1 << (modelicaParser.STRING - 66)) | (1 << (modelicaParser.UNSIGNED_NUMBER - 66)))) !== 0)) {
                    {
                        this.state = 327;
                        this.expression_list();
                    }
                }
                this.state = 330;
                this.match(modelicaParser.T__23);
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
    modelicaParser.prototype.element_list = function () {
        var _localctx = new Element_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, modelicaParser.RULE_element_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << modelicaParser.T__2) | (1 << modelicaParser.T__3) | (1 << modelicaParser.T__4) | (1 << modelicaParser.T__5) | (1 << modelicaParser.T__6) | (1 << modelicaParser.T__7) | (1 << modelicaParser.T__8) | (1 << modelicaParser.T__9) | (1 << modelicaParser.T__10) | (1 << modelicaParser.T__11) | (1 << modelicaParser.T__12) | (1 << modelicaParser.T__13) | (1 << modelicaParser.T__14) | (1 << modelicaParser.T__15) | (1 << modelicaParser.T__16) | (1 << modelicaParser.T__18) | (1 << modelicaParser.T__29) | (1 << modelicaParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (modelicaParser.T__31 - 32)) | (1 << (modelicaParser.T__32 - 32)) | (1 << (modelicaParser.T__33 - 32)) | (1 << (modelicaParser.T__38 - 32)) | (1 << (modelicaParser.T__39 - 32)) | (1 << (modelicaParser.T__40 - 32)) | (1 << (modelicaParser.T__41 - 32)) | (1 << (modelicaParser.T__42 - 32)) | (1 << (modelicaParser.T__43 - 32)) | (1 << (modelicaParser.T__44 - 32)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                    {
                        {
                            this.state = 332;
                            this.element();
                            this.state = 333;
                            this.match(modelicaParser.T__1);
                        }
                    }
                    this.state = 339;
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
    modelicaParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, modelicaParser.RULE_element);
        var _la;
        try {
            this.state = 370;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case modelicaParser.T__33:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 340;
                        this.import_clause();
                    }
                    break;
                case modelicaParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 341;
                        this.extends_clause();
                    }
                    break;
                case modelicaParser.T__2:
                case modelicaParser.T__3:
                case modelicaParser.T__4:
                case modelicaParser.T__5:
                case modelicaParser.T__6:
                case modelicaParser.T__7:
                case modelicaParser.T__8:
                case modelicaParser.T__9:
                case modelicaParser.T__10:
                case modelicaParser.T__11:
                case modelicaParser.T__12:
                case modelicaParser.T__13:
                case modelicaParser.T__14:
                case modelicaParser.T__15:
                case modelicaParser.T__16:
                case modelicaParser.T__29:
                case modelicaParser.T__30:
                case modelicaParser.T__31:
                case modelicaParser.T__32:
                case modelicaParser.T__38:
                case modelicaParser.T__39:
                case modelicaParser.T__40:
                case modelicaParser.T__41:
                case modelicaParser.T__42:
                case modelicaParser.T__43:
                case modelicaParser.T__44:
                case modelicaParser.T__86:
                case modelicaParser.IDENT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 343;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__29) {
                            {
                                this.state = 342;
                                this.match(modelicaParser.T__29);
                            }
                        }
                        this.state = 346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__2) {
                            {
                                this.state = 345;
                                this.match(modelicaParser.T__2);
                            }
                        }
                        this.state = 349;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__30) {
                            {
                                this.state = 348;
                                this.match(modelicaParser.T__30);
                            }
                        }
                        this.state = 352;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__31) {
                            {
                                this.state = 351;
                                this.match(modelicaParser.T__31);
                            }
                        }
                        this.state = 368;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case modelicaParser.T__3:
                            case modelicaParser.T__4:
                            case modelicaParser.T__5:
                            case modelicaParser.T__6:
                            case modelicaParser.T__7:
                            case modelicaParser.T__8:
                            case modelicaParser.T__9:
                            case modelicaParser.T__10:
                            case modelicaParser.T__11:
                            case modelicaParser.T__12:
                            case modelicaParser.T__13:
                            case modelicaParser.T__14:
                            case modelicaParser.T__15:
                            case modelicaParser.T__16:
                            case modelicaParser.T__38:
                            case modelicaParser.T__39:
                            case modelicaParser.T__40:
                            case modelicaParser.T__41:
                            case modelicaParser.T__42:
                            case modelicaParser.T__43:
                            case modelicaParser.T__44:
                            case modelicaParser.T__86:
                            case modelicaParser.IDENT:
                                {
                                    this.state = 356;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case modelicaParser.T__3:
                                        case modelicaParser.T__4:
                                        case modelicaParser.T__5:
                                        case modelicaParser.T__6:
                                        case modelicaParser.T__7:
                                        case modelicaParser.T__8:
                                        case modelicaParser.T__9:
                                        case modelicaParser.T__10:
                                        case modelicaParser.T__11:
                                        case modelicaParser.T__12:
                                        case modelicaParser.T__13:
                                        case modelicaParser.T__14:
                                        case modelicaParser.T__15:
                                        case modelicaParser.T__16:
                                            {
                                                this.state = 354;
                                                this.class_definition();
                                            }
                                            break;
                                        case modelicaParser.T__38:
                                        case modelicaParser.T__39:
                                        case modelicaParser.T__40:
                                        case modelicaParser.T__41:
                                        case modelicaParser.T__42:
                                        case modelicaParser.T__43:
                                        case modelicaParser.T__44:
                                        case modelicaParser.T__86:
                                        case modelicaParser.IDENT:
                                            {
                                                this.state = 355;
                                                this.component_clause();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                break;
                            case modelicaParser.T__32:
                                {
                                    this.state = 358;
                                    this.match(modelicaParser.T__32);
                                    this.state = 361;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case modelicaParser.T__3:
                                        case modelicaParser.T__4:
                                        case modelicaParser.T__5:
                                        case modelicaParser.T__6:
                                        case modelicaParser.T__7:
                                        case modelicaParser.T__8:
                                        case modelicaParser.T__9:
                                        case modelicaParser.T__10:
                                        case modelicaParser.T__11:
                                        case modelicaParser.T__12:
                                        case modelicaParser.T__13:
                                        case modelicaParser.T__14:
                                        case modelicaParser.T__15:
                                        case modelicaParser.T__16:
                                            {
                                                this.state = 359;
                                                this.class_definition();
                                            }
                                            break;
                                        case modelicaParser.T__38:
                                        case modelicaParser.T__39:
                                        case modelicaParser.T__40:
                                        case modelicaParser.T__41:
                                        case modelicaParser.T__42:
                                        case modelicaParser.T__43:
                                        case modelicaParser.T__44:
                                        case modelicaParser.T__86:
                                        case modelicaParser.IDENT:
                                            {
                                                this.state = 360;
                                                this.component_clause();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 366;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === modelicaParser.T__37) {
                                        {
                                            this.state = 363;
                                            this.constraining_clause();
                                            this.state = 364;
                                            this.comment();
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
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
    modelicaParser.prototype.import_clause = function () {
        var _localctx = new Import_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, modelicaParser.RULE_import_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                this.match(modelicaParser.T__33);
                this.state = 385;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        {
                            this.state = 373;
                            this.match(modelicaParser.IDENT);
                            this.state = 374;
                            this.match(modelicaParser.T__19);
                            this.state = 375;
                            this.name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 376;
                            this.name();
                            this.state = 377;
                            this.match(modelicaParser.T__34);
                        }
                        break;
                    case 3:
                        {
                            this.state = 379;
                            this.name();
                            this.state = 380;
                            this.match(modelicaParser.T__35);
                            this.state = 381;
                            this.import_list();
                            this.state = 382;
                            this.match(modelicaParser.T__36);
                        }
                        break;
                    case 4:
                        {
                            this.state = 384;
                            this.name();
                        }
                        break;
                }
                this.state = 387;
                this.comment();
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
    modelicaParser.prototype.import_list = function () {
        var _localctx = new Import_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, modelicaParser.RULE_import_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 389;
                this.match(modelicaParser.IDENT);
                this.state = 394;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 390;
                            this.match(modelicaParser.T__25);
                            this.state = 391;
                            this.match(modelicaParser.IDENT);
                        }
                    }
                    this.state = 396;
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
    modelicaParser.prototype.extends_clause = function () {
        var _localctx = new Extends_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, modelicaParser.RULE_extends_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this.match(modelicaParser.T__18);
                this.state = 398;
                this.name();
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__21) {
                    {
                        this.state = 399;
                        this.class_modification();
                    }
                }
                this.state = 403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__87) {
                    {
                        this.state = 402;
                        this.annotation();
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
    modelicaParser.prototype.constraining_clause = function () {
        var _localctx = new Constraining_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, modelicaParser.RULE_constraining_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 405;
                this.match(modelicaParser.T__37);
                this.state = 406;
                this.name();
                this.state = 408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__21) {
                    {
                        this.state = 407;
                        this.class_modification();
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
    modelicaParser.prototype.component_clause = function () {
        var _localctx = new Component_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, modelicaParser.RULE_component_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.type_prefix();
                this.state = 411;
                this.type_specifier();
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__83) {
                    {
                        this.state = 412;
                        this.array_subscripts();
                    }
                }
                this.state = 415;
                this.component_list();
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
    modelicaParser.prototype.type_prefix = function () {
        var _localctx = new Type_prefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, modelicaParser.RULE_type_prefix);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 418;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__38 || _la === modelicaParser.T__39) {
                    {
                        this.state = 417;
                        _la = this._input.LA(1);
                        if (!(_la === modelicaParser.T__38 || _la === modelicaParser.T__39)) {
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
                this.state = 421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (modelicaParser.T__40 - 41)) | (1 << (modelicaParser.T__41 - 41)) | (1 << (modelicaParser.T__42 - 41)))) !== 0)) {
                    {
                        this.state = 420;
                        _la = this._input.LA(1);
                        if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (modelicaParser.T__40 - 41)) | (1 << (modelicaParser.T__41 - 41)) | (1 << (modelicaParser.T__42 - 41)))) !== 0))) {
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
                this.state = 424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__43 || _la === modelicaParser.T__44) {
                    {
                        this.state = 423;
                        _la = this._input.LA(1);
                        if (!(_la === modelicaParser.T__43 || _la === modelicaParser.T__44)) {
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
    modelicaParser.prototype.type_specifier = function () {
        var _localctx = new Type_specifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, modelicaParser.RULE_type_specifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 426;
                this.name();
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
    modelicaParser.prototype.component_list = function () {
        var _localctx = new Component_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, modelicaParser.RULE_component_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.component_declaration();
                this.state = 433;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 429;
                            this.match(modelicaParser.T__25);
                            this.state = 430;
                            this.component_declaration();
                        }
                    }
                    this.state = 435;
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
    modelicaParser.prototype.component_declaration = function () {
        var _localctx = new Component_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, modelicaParser.RULE_component_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this.declaration();
                this.state = 438;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__45) {
                    {
                        this.state = 437;
                        this.condition_attribute();
                    }
                }
                this.state = 440;
                this.comment();
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
    modelicaParser.prototype.condition_attribute = function () {
        var _localctx = new Condition_attributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, modelicaParser.RULE_condition_attribute);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 442;
                this.match(modelicaParser.T__45);
                this.state = 443;
                this.expression();
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
    modelicaParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, modelicaParser.RULE_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 445;
                this.match(modelicaParser.IDENT);
                this.state = 447;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__83) {
                    {
                        this.state = 446;
                        this.array_subscripts();
                    }
                }
                this.state = 450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (modelicaParser.T__19 - 20)) | (1 << (modelicaParser.T__21 - 20)) | (1 << (modelicaParser.T__46 - 20)))) !== 0)) {
                    {
                        this.state = 449;
                        this.modification();
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
    modelicaParser.prototype.modification = function () {
        var _localctx = new ModificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, modelicaParser.RULE_modification);
        var _la;
        try {
            this.state = 461;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case modelicaParser.T__21:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 452;
                        this.class_modification();
                        this.state = 455;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__19) {
                            {
                                this.state = 453;
                                this.match(modelicaParser.T__19);
                                this.state = 454;
                                this.expression();
                            }
                        }
                    }
                    break;
                case modelicaParser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 457;
                        this.match(modelicaParser.T__19);
                        this.state = 458;
                        this.expression();
                    }
                    break;
                case modelicaParser.T__46:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 459;
                        this.match(modelicaParser.T__46);
                        this.state = 460;
                        this.expression();
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
    modelicaParser.prototype.class_modification = function () {
        var _localctx = new Class_modificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, modelicaParser.RULE_class_modification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 463;
                this.match(modelicaParser.T__21);
                this.state = 465;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__2 || _la === modelicaParser.T__29 || _la === modelicaParser.T__32 || _la === modelicaParser.T__47 || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                    {
                        this.state = 464;
                        this.argument_list();
                    }
                }
                this.state = 467;
                this.match(modelicaParser.T__23);
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
    modelicaParser.prototype.argument_list = function () {
        var _localctx = new Argument_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, modelicaParser.RULE_argument_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 469;
                this.argument();
                this.state = 474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 470;
                            this.match(modelicaParser.T__25);
                            this.state = 471;
                            this.argument();
                        }
                    }
                    this.state = 476;
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
    modelicaParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, modelicaParser.RULE_argument);
        try {
            this.state = 479;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case modelicaParser.T__2:
                case modelicaParser.T__32:
                case modelicaParser.T__47:
                case modelicaParser.T__86:
                case modelicaParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 477;
                        this.element_modification_or_replaceable();
                    }
                    break;
                case modelicaParser.T__29:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 478;
                        this.element_redeclaration();
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
    modelicaParser.prototype.element_modification_or_replaceable = function () {
        var _localctx = new Element_modification_or_replaceableContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, modelicaParser.RULE_element_modification_or_replaceable);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 482;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__47) {
                    {
                        this.state = 481;
                        this.match(modelicaParser.T__47);
                    }
                }
                this.state = 485;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__2) {
                    {
                        this.state = 484;
                        this.match(modelicaParser.T__2);
                    }
                }
                this.state = 489;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case modelicaParser.T__86:
                    case modelicaParser.IDENT:
                        {
                            this.state = 487;
                            this.element_modification();
                        }
                        break;
                    case modelicaParser.T__32:
                        {
                            this.state = 488;
                            this.element_replaceable();
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
    modelicaParser.prototype.element_modification = function () {
        var _localctx = new Element_modificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, modelicaParser.RULE_element_modification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 491;
                this.name();
                this.state = 493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (modelicaParser.T__19 - 20)) | (1 << (modelicaParser.T__21 - 20)) | (1 << (modelicaParser.T__46 - 20)))) !== 0)) {
                    {
                        this.state = 492;
                        this.modification();
                    }
                }
                this.state = 495;
                this.string_comment();
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
    modelicaParser.prototype.element_redeclaration = function () {
        var _localctx = new Element_redeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, modelicaParser.RULE_element_redeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 497;
                this.match(modelicaParser.T__29);
                this.state = 499;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__47) {
                    {
                        this.state = 498;
                        this.match(modelicaParser.T__47);
                    }
                }
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__2) {
                    {
                        this.state = 501;
                        this.match(modelicaParser.T__2);
                    }
                }
                this.state = 509;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case modelicaParser.T__4:
                    case modelicaParser.T__5:
                    case modelicaParser.T__6:
                    case modelicaParser.T__7:
                    case modelicaParser.T__8:
                    case modelicaParser.T__9:
                    case modelicaParser.T__10:
                    case modelicaParser.T__11:
                    case modelicaParser.T__12:
                    case modelicaParser.T__13:
                    case modelicaParser.T__14:
                    case modelicaParser.T__15:
                    case modelicaParser.T__16:
                    case modelicaParser.T__38:
                    case modelicaParser.T__39:
                    case modelicaParser.T__40:
                    case modelicaParser.T__41:
                    case modelicaParser.T__42:
                    case modelicaParser.T__43:
                    case modelicaParser.T__44:
                    case modelicaParser.T__86:
                    case modelicaParser.IDENT:
                        {
                            this.state = 506;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case modelicaParser.T__4:
                                case modelicaParser.T__5:
                                case modelicaParser.T__6:
                                case modelicaParser.T__7:
                                case modelicaParser.T__8:
                                case modelicaParser.T__9:
                                case modelicaParser.T__10:
                                case modelicaParser.T__11:
                                case modelicaParser.T__12:
                                case modelicaParser.T__13:
                                case modelicaParser.T__14:
                                case modelicaParser.T__15:
                                case modelicaParser.T__16:
                                    {
                                        this.state = 504;
                                        this.short_class_definition();
                                    }
                                    break;
                                case modelicaParser.T__38:
                                case modelicaParser.T__39:
                                case modelicaParser.T__40:
                                case modelicaParser.T__41:
                                case modelicaParser.T__42:
                                case modelicaParser.T__43:
                                case modelicaParser.T__44:
                                case modelicaParser.T__86:
                                case modelicaParser.IDENT:
                                    {
                                        this.state = 505;
                                        this.component_clause1();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case modelicaParser.T__32:
                        {
                            this.state = 508;
                            this.element_replaceable();
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
    modelicaParser.prototype.element_replaceable = function () {
        var _localctx = new Element_replaceableContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, modelicaParser.RULE_element_replaceable);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 511;
                this.match(modelicaParser.T__32);
                this.state = 514;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case modelicaParser.T__4:
                    case modelicaParser.T__5:
                    case modelicaParser.T__6:
                    case modelicaParser.T__7:
                    case modelicaParser.T__8:
                    case modelicaParser.T__9:
                    case modelicaParser.T__10:
                    case modelicaParser.T__11:
                    case modelicaParser.T__12:
                    case modelicaParser.T__13:
                    case modelicaParser.T__14:
                    case modelicaParser.T__15:
                    case modelicaParser.T__16:
                        {
                            this.state = 512;
                            this.short_class_definition();
                        }
                        break;
                    case modelicaParser.T__38:
                    case modelicaParser.T__39:
                    case modelicaParser.T__40:
                    case modelicaParser.T__41:
                    case modelicaParser.T__42:
                    case modelicaParser.T__43:
                    case modelicaParser.T__44:
                    case modelicaParser.T__86:
                    case modelicaParser.IDENT:
                        {
                            this.state = 513;
                            this.component_clause1();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__37) {
                    {
                        this.state = 516;
                        this.constraining_clause();
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
    modelicaParser.prototype.component_clause1 = function () {
        var _localctx = new Component_clause1Context(this._ctx, this.state);
        this.enterRule(_localctx, 68, modelicaParser.RULE_component_clause1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 519;
                this.type_prefix();
                this.state = 520;
                this.type_specifier();
                this.state = 521;
                this.component_declaration1();
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
    modelicaParser.prototype.component_declaration1 = function () {
        var _localctx = new Component_declaration1Context(this._ctx, this.state);
        this.enterRule(_localctx, 70, modelicaParser.RULE_component_declaration1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 523;
                this.declaration();
                this.state = 524;
                this.comment();
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
    modelicaParser.prototype.short_class_definition = function () {
        var _localctx = new Short_class_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, modelicaParser.RULE_short_class_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 526;
                this.class_prefixes();
                this.state = 527;
                this.short_class_specifier();
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
    modelicaParser.prototype.equation_section = function () {
        var _localctx = new Equation_sectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, modelicaParser.RULE_equation_section);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__48) {
                    {
                        this.state = 529;
                        this.match(modelicaParser.T__48);
                    }
                }
                this.state = 532;
                this.match(modelicaParser.T__49);
                this.state = 538;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 533;
                                this.equation();
                                this.state = 534;
                                this.match(modelicaParser.T__1);
                            }
                        }
                    }
                    this.state = 540;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
    modelicaParser.prototype.algorithm_section = function () {
        var _localctx = new Algorithm_sectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, modelicaParser.RULE_algorithm_section);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__48) {
                    {
                        this.state = 541;
                        this.match(modelicaParser.T__48);
                    }
                }
                this.state = 544;
                this.match(modelicaParser.T__50);
                this.state = 550;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__21 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__51 - 46)) | (1 << (modelicaParser.T__52 - 46)) | (1 << (modelicaParser.T__56 - 46)) | (1 << (modelicaParser.T__59 - 46)) | (1 << (modelicaParser.T__60 - 46)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                    {
                        {
                            this.state = 545;
                            this.statement();
                            this.state = 546;
                            this.match(modelicaParser.T__1);
                        }
                    }
                    this.state = 552;
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
    modelicaParser.prototype.equation = function () {
        var _localctx = new EquationContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, modelicaParser.RULE_equation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 564;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 553;
                            this.simple_expression();
                            this.state = 554;
                            this.match(modelicaParser.T__19);
                            this.state = 555;
                            this.expression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 557;
                            this.if_equation();
                        }
                        break;
                    case 3:
                        {
                            this.state = 558;
                            this.for_equation();
                        }
                        break;
                    case 4:
                        {
                            this.state = 559;
                            this.connect_clause();
                        }
                        break;
                    case 5:
                        {
                            this.state = 560;
                            this.when_equation();
                        }
                        break;
                    case 6:
                        {
                            this.state = 561;
                            this.name();
                            this.state = 562;
                            this.function_call_args();
                        }
                        break;
                }
                this.state = 566;
                this.comment();
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
    modelicaParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, modelicaParser.RULE_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 587;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case modelicaParser.T__86:
                    case modelicaParser.IDENT:
                        {
                            this.state = 568;
                            this.component_reference();
                            this.state = 572;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case modelicaParser.T__46:
                                    {
                                        this.state = 569;
                                        this.match(modelicaParser.T__46);
                                        this.state = 570;
                                        this.expression();
                                    }
                                    break;
                                case modelicaParser.T__21:
                                    {
                                        this.state = 571;
                                        this.function_call_args();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case modelicaParser.T__21:
                        {
                            this.state = 574;
                            this.match(modelicaParser.T__21);
                            this.state = 575;
                            this.output_expression_list();
                            this.state = 576;
                            this.match(modelicaParser.T__23);
                            this.state = 577;
                            this.match(modelicaParser.T__46);
                            this.state = 578;
                            this.component_reference();
                            this.state = 579;
                            this.function_call_args();
                        }
                        break;
                    case modelicaParser.T__51:
                        {
                            this.state = 581;
                            this.match(modelicaParser.T__51);
                        }
                        break;
                    case modelicaParser.T__52:
                        {
                            this.state = 582;
                            this.match(modelicaParser.T__52);
                        }
                        break;
                    case modelicaParser.T__45:
                        {
                            this.state = 583;
                            this.if_statement();
                        }
                        break;
                    case modelicaParser.T__56:
                        {
                            this.state = 584;
                            this.for_statement();
                        }
                        break;
                    case modelicaParser.T__59:
                        {
                            this.state = 585;
                            this.while_statement();
                        }
                        break;
                    case modelicaParser.T__60:
                        {
                            this.state = 586;
                            this.when_statement();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 589;
                this.comment();
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
    modelicaParser.prototype.if_equation = function () {
        var _localctx = new If_equationContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, modelicaParser.RULE_if_equation);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this.match(modelicaParser.T__45);
                this.state = 592;
                this.expression();
                this.state = 593;
                this.match(modelicaParser.T__53);
                this.state = 599;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 594;
                                this.equation();
                                this.state = 595;
                                this.match(modelicaParser.T__1);
                            }
                        }
                    }
                    this.state = 601;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                }
                this.state = 615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__54) {
                    {
                        {
                            this.state = 602;
                            this.match(modelicaParser.T__54);
                            this.state = 603;
                            this.expression();
                            this.state = 604;
                            this.match(modelicaParser.T__53);
                            this.state = 610;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 605;
                                            this.equation();
                                            this.state = 606;
                                            this.match(modelicaParser.T__1);
                                        }
                                    }
                                }
                                this.state = 612;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                            }
                        }
                    }
                    this.state = 617;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 627;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__55) {
                    {
                        this.state = 618;
                        this.match(modelicaParser.T__55);
                        this.state = 624;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 619;
                                        this.equation();
                                        this.state = 620;
                                        this.match(modelicaParser.T__1);
                                    }
                                }
                            }
                            this.state = 626;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                        }
                    }
                }
                this.state = 629;
                this.match(modelicaParser.T__17);
                this.state = 630;
                this.match(modelicaParser.T__45);
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
    modelicaParser.prototype.if_statement = function () {
        var _localctx = new If_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, modelicaParser.RULE_if_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 632;
                this.match(modelicaParser.T__45);
                this.state = 633;
                this.expression();
                this.state = 634;
                this.match(modelicaParser.T__53);
                this.state = 640;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__21 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__51 - 46)) | (1 << (modelicaParser.T__52 - 46)) | (1 << (modelicaParser.T__56 - 46)) | (1 << (modelicaParser.T__59 - 46)) | (1 << (modelicaParser.T__60 - 46)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                    {
                        {
                            this.state = 635;
                            this.statement();
                            this.state = 636;
                            this.match(modelicaParser.T__1);
                        }
                    }
                    this.state = 642;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__54) {
                    {
                        {
                            this.state = 643;
                            this.match(modelicaParser.T__54);
                            this.state = 644;
                            this.expression();
                            this.state = 645;
                            this.match(modelicaParser.T__53);
                            this.state = 651;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === modelicaParser.T__21 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__51 - 46)) | (1 << (modelicaParser.T__52 - 46)) | (1 << (modelicaParser.T__56 - 46)) | (1 << (modelicaParser.T__59 - 46)) | (1 << (modelicaParser.T__60 - 46)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                                {
                                    {
                                        this.state = 646;
                                        this.statement();
                                        this.state = 647;
                                        this.match(modelicaParser.T__1);
                                    }
                                }
                                this.state = 653;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 658;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 668;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__55) {
                    {
                        this.state = 659;
                        this.match(modelicaParser.T__55);
                        this.state = 665;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === modelicaParser.T__21 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__51 - 46)) | (1 << (modelicaParser.T__52 - 46)) | (1 << (modelicaParser.T__56 - 46)) | (1 << (modelicaParser.T__59 - 46)) | (1 << (modelicaParser.T__60 - 46)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                            {
                                {
                                    this.state = 660;
                                    this.statement();
                                    this.state = 661;
                                    this.match(modelicaParser.T__1);
                                }
                            }
                            this.state = 667;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 670;
                this.match(modelicaParser.T__17);
                this.state = 671;
                this.match(modelicaParser.T__45);
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
    modelicaParser.prototype.for_equation = function () {
        var _localctx = new For_equationContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, modelicaParser.RULE_for_equation);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 673;
                this.match(modelicaParser.T__56);
                this.state = 674;
                this.for_indices();
                this.state = 675;
                this.match(modelicaParser.T__57);
                this.state = 681;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 676;
                                this.equation();
                                this.state = 677;
                                this.match(modelicaParser.T__1);
                            }
                        }
                    }
                    this.state = 683;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                }
                this.state = 684;
                this.match(modelicaParser.T__17);
                this.state = 685;
                this.match(modelicaParser.T__56);
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
    modelicaParser.prototype.for_statement = function () {
        var _localctx = new For_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, modelicaParser.RULE_for_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 687;
                this.match(modelicaParser.T__56);
                this.state = 688;
                this.for_indices();
                this.state = 689;
                this.match(modelicaParser.T__57);
                this.state = 695;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__21 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__51 - 46)) | (1 << (modelicaParser.T__52 - 46)) | (1 << (modelicaParser.T__56 - 46)) | (1 << (modelicaParser.T__59 - 46)) | (1 << (modelicaParser.T__60 - 46)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                    {
                        {
                            this.state = 690;
                            this.statement();
                            this.state = 691;
                            this.match(modelicaParser.T__1);
                        }
                    }
                    this.state = 697;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 698;
                this.match(modelicaParser.T__17);
                this.state = 699;
                this.match(modelicaParser.T__56);
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
    modelicaParser.prototype.for_indices = function () {
        var _localctx = new For_indicesContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, modelicaParser.RULE_for_indices);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 701;
                this.for_index();
                this.state = 706;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 702;
                            this.match(modelicaParser.T__25);
                            this.state = 703;
                            this.for_index();
                        }
                    }
                    this.state = 708;
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
    modelicaParser.prototype.for_index = function () {
        var _localctx = new For_indexContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, modelicaParser.RULE_for_index);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this.match(modelicaParser.IDENT);
                this.state = 712;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__58) {
                    {
                        this.state = 710;
                        this.match(modelicaParser.T__58);
                        this.state = 711;
                        this.expression();
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
    modelicaParser.prototype.while_statement = function () {
        var _localctx = new While_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, modelicaParser.RULE_while_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 714;
                this.match(modelicaParser.T__59);
                this.state = 715;
                this.expression();
                this.state = 716;
                this.match(modelicaParser.T__57);
                this.state = 722;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__21 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__51 - 46)) | (1 << (modelicaParser.T__52 - 46)) | (1 << (modelicaParser.T__56 - 46)) | (1 << (modelicaParser.T__59 - 46)) | (1 << (modelicaParser.T__60 - 46)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                    {
                        {
                            this.state = 717;
                            this.statement();
                            this.state = 718;
                            this.match(modelicaParser.T__1);
                        }
                    }
                    this.state = 724;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 725;
                this.match(modelicaParser.T__17);
                this.state = 726;
                this.match(modelicaParser.T__59);
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
    modelicaParser.prototype.when_equation = function () {
        var _localctx = new When_equationContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, modelicaParser.RULE_when_equation);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 728;
                this.match(modelicaParser.T__60);
                this.state = 729;
                this.expression();
                this.state = 730;
                this.match(modelicaParser.T__53);
                this.state = 736;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 731;
                                this.equation();
                                this.state = 732;
                                this.match(modelicaParser.T__1);
                            }
                        }
                    }
                    this.state = 738;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                }
                this.state = 752;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__61) {
                    {
                        {
                            this.state = 739;
                            this.match(modelicaParser.T__61);
                            this.state = 740;
                            this.expression();
                            this.state = 741;
                            this.match(modelicaParser.T__53);
                            this.state = 747;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 742;
                                            this.equation();
                                            this.state = 743;
                                            this.match(modelicaParser.T__1);
                                        }
                                    }
                                }
                                this.state = 749;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                            }
                        }
                    }
                    this.state = 754;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 755;
                this.match(modelicaParser.T__17);
                this.state = 756;
                this.match(modelicaParser.T__60);
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
    modelicaParser.prototype.when_statement = function () {
        var _localctx = new When_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, modelicaParser.RULE_when_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 758;
                this.match(modelicaParser.T__60);
                this.state = 759;
                this.expression();
                this.state = 760;
                this.match(modelicaParser.T__53);
                this.state = 766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__21 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__51 - 46)) | (1 << (modelicaParser.T__52 - 46)) | (1 << (modelicaParser.T__56 - 46)) | (1 << (modelicaParser.T__59 - 46)) | (1 << (modelicaParser.T__60 - 46)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                    {
                        {
                            this.state = 761;
                            this.statement();
                            this.state = 762;
                            this.match(modelicaParser.T__1);
                        }
                    }
                    this.state = 768;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 782;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__61) {
                    {
                        {
                            this.state = 769;
                            this.match(modelicaParser.T__61);
                            this.state = 770;
                            this.expression();
                            this.state = 771;
                            this.match(modelicaParser.T__53);
                            this.state = 777;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === modelicaParser.T__21 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__51 - 46)) | (1 << (modelicaParser.T__52 - 46)) | (1 << (modelicaParser.T__56 - 46)) | (1 << (modelicaParser.T__59 - 46)) | (1 << (modelicaParser.T__60 - 46)))) !== 0) || _la === modelicaParser.T__86 || _la === modelicaParser.IDENT) {
                                {
                                    {
                                        this.state = 772;
                                        this.statement();
                                        this.state = 773;
                                        this.match(modelicaParser.T__1);
                                    }
                                }
                                this.state = 779;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 784;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 785;
                this.match(modelicaParser.T__17);
                this.state = 786;
                this.match(modelicaParser.T__60);
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
    modelicaParser.prototype.connect_clause = function () {
        var _localctx = new Connect_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, modelicaParser.RULE_connect_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 788;
                this.match(modelicaParser.T__62);
                this.state = 789;
                this.match(modelicaParser.T__21);
                this.state = 790;
                this.component_reference();
                this.state = 791;
                this.match(modelicaParser.T__25);
                this.state = 792;
                this.component_reference();
                this.state = 793;
                this.match(modelicaParser.T__23);
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
    modelicaParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, modelicaParser.RULE_expression);
        var _la;
        try {
            this.state = 813;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case modelicaParser.T__17:
                case modelicaParser.T__21:
                case modelicaParser.T__24:
                case modelicaParser.T__48:
                case modelicaParser.T__65:
                case modelicaParser.T__72:
                case modelicaParser.T__73:
                case modelicaParser.T__74:
                case modelicaParser.T__75:
                case modelicaParser.T__81:
                case modelicaParser.T__82:
                case modelicaParser.T__83:
                case modelicaParser.T__85:
                case modelicaParser.T__86:
                case modelicaParser.IDENT:
                case modelicaParser.STRING:
                case modelicaParser.UNSIGNED_NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 795;
                        this.simple_expression();
                    }
                    break;
                case modelicaParser.T__45:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 796;
                        this.match(modelicaParser.T__45);
                        this.state = 797;
                        this.expression();
                        this.state = 798;
                        this.match(modelicaParser.T__53);
                        this.state = 799;
                        this.expression();
                        this.state = 807;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === modelicaParser.T__54) {
                            {
                                {
                                    this.state = 800;
                                    this.match(modelicaParser.T__54);
                                    this.state = 801;
                                    this.expression();
                                    this.state = 802;
                                    this.match(modelicaParser.T__53);
                                    this.state = 803;
                                    this.expression();
                                }
                            }
                            this.state = 809;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 810;
                        this.match(modelicaParser.T__55);
                        this.state = 811;
                        this.expression();
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
    modelicaParser.prototype.simple_expression = function () {
        var _localctx = new Simple_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, modelicaParser.RULE_simple_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 815;
                this.logical_expression();
                this.state = 822;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__22) {
                    {
                        this.state = 816;
                        this.match(modelicaParser.T__22);
                        this.state = 817;
                        this.logical_expression();
                        this.state = 820;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.T__22) {
                            {
                                this.state = 818;
                                this.match(modelicaParser.T__22);
                                this.state = 819;
                                this.logical_expression();
                            }
                        }
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
    modelicaParser.prototype.logical_expression = function () {
        var _localctx = new Logical_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, modelicaParser.RULE_logical_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 824;
                this.logical_term();
                this.state = 829;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__63) {
                    {
                        {
                            this.state = 825;
                            this.match(modelicaParser.T__63);
                            this.state = 826;
                            this.logical_term();
                        }
                    }
                    this.state = 831;
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
    modelicaParser.prototype.logical_term = function () {
        var _localctx = new Logical_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, modelicaParser.RULE_logical_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 832;
                this.logical_factor();
                this.state = 837;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__64) {
                    {
                        {
                            this.state = 833;
                            this.match(modelicaParser.T__64);
                            this.state = 834;
                            this.logical_factor();
                        }
                    }
                    this.state = 839;
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
    modelicaParser.prototype.logical_factor = function () {
        var _localctx = new Logical_factorContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, modelicaParser.RULE_logical_factor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 841;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__65) {
                    {
                        this.state = 840;
                        this.match(modelicaParser.T__65);
                    }
                }
                this.state = 843;
                this.relation();
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
    modelicaParser.prototype.relation = function () {
        var _localctx = new RelationContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, modelicaParser.RULE_relation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 845;
                this.arithmetic_expression();
                this.state = 849;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (modelicaParser.T__66 - 67)) | (1 << (modelicaParser.T__67 - 67)) | (1 << (modelicaParser.T__68 - 67)) | (1 << (modelicaParser.T__69 - 67)) | (1 << (modelicaParser.T__70 - 67)) | (1 << (modelicaParser.T__71 - 67)))) !== 0)) {
                    {
                        this.state = 846;
                        this.rel_op();
                        this.state = 847;
                        this.arithmetic_expression();
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
    modelicaParser.prototype.rel_op = function () {
        var _localctx = new Rel_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, modelicaParser.RULE_rel_op);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 851;
                _la = this._input.LA(1);
                if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (modelicaParser.T__66 - 67)) | (1 << (modelicaParser.T__67 - 67)) | (1 << (modelicaParser.T__68 - 67)) | (1 << (modelicaParser.T__69 - 67)) | (1 << (modelicaParser.T__70 - 67)) | (1 << (modelicaParser.T__71 - 67)))) !== 0))) {
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
    // @RuleVersion(0)
    modelicaParser.prototype.arithmetic_expression = function () {
        var _localctx = new Arithmetic_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, modelicaParser.RULE_arithmetic_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 854;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (modelicaParser.T__72 - 73)) | (1 << (modelicaParser.T__73 - 73)) | (1 << (modelicaParser.T__74 - 73)) | (1 << (modelicaParser.T__75 - 73)))) !== 0)) {
                    {
                        this.state = 853;
                        this.add_op();
                    }
                }
                this.state = 856;
                this.term();
                this.state = 862;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (modelicaParser.T__72 - 73)) | (1 << (modelicaParser.T__73 - 73)) | (1 << (modelicaParser.T__74 - 73)) | (1 << (modelicaParser.T__75 - 73)))) !== 0)) {
                    {
                        {
                            this.state = 857;
                            this.add_op();
                            this.state = 858;
                            this.term();
                        }
                    }
                    this.state = 864;
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
    modelicaParser.prototype.add_op = function () {
        var _localctx = new Add_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, modelicaParser.RULE_add_op);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 865;
                _la = this._input.LA(1);
                if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (modelicaParser.T__72 - 73)) | (1 << (modelicaParser.T__73 - 73)) | (1 << (modelicaParser.T__74 - 73)) | (1 << (modelicaParser.T__75 - 73)))) !== 0))) {
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
    // @RuleVersion(0)
    modelicaParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, modelicaParser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 867;
                this.factor();
                this.state = 873;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__34 || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (modelicaParser.T__76 - 77)) | (1 << (modelicaParser.T__77 - 77)) | (1 << (modelicaParser.T__78 - 77)))) !== 0)) {
                    {
                        {
                            this.state = 868;
                            this.mul_op();
                            this.state = 869;
                            this.factor();
                        }
                    }
                    this.state = 875;
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
    modelicaParser.prototype.mul_op = function () {
        var _localctx = new Mul_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, modelicaParser.RULE_mul_op);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 876;
                _la = this._input.LA(1);
                if (!(_la === modelicaParser.T__34 || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (modelicaParser.T__76 - 77)) | (1 << (modelicaParser.T__77 - 77)) | (1 << (modelicaParser.T__78 - 77)))) !== 0))) {
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
    // @RuleVersion(0)
    modelicaParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, modelicaParser.RULE_factor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 878;
                this.primary();
                this.state = 881;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__79 || _la === modelicaParser.T__80) {
                    {
                        this.state = 879;
                        _la = this._input.LA(1);
                        if (!(_la === modelicaParser.T__79 || _la === modelicaParser.T__80)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 880;
                        this.primary();
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
    modelicaParser.prototype.primary = function () {
        var _localctx = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, modelicaParser.RULE_primary);
        var _la;
        try {
            this.state = 914;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 883;
                        this.match(modelicaParser.UNSIGNED_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 884;
                        this.match(modelicaParser.STRING);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 885;
                        this.match(modelicaParser.T__81);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 886;
                        this.match(modelicaParser.T__82);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 890;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case modelicaParser.T__86:
                            case modelicaParser.IDENT:
                                {
                                    this.state = 887;
                                    this.name();
                                }
                                break;
                            case modelicaParser.T__24:
                                {
                                    this.state = 888;
                                    this.match(modelicaParser.T__24);
                                }
                                break;
                            case modelicaParser.T__48:
                                {
                                    this.state = 889;
                                    this.match(modelicaParser.T__48);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 892;
                        this.function_call_args();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 893;
                        this.component_reference();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 894;
                        this.match(modelicaParser.T__21);
                        this.state = 895;
                        this.output_expression_list();
                        this.state = 896;
                        this.match(modelicaParser.T__23);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 898;
                        this.match(modelicaParser.T__83);
                        this.state = 899;
                        this.expression_list();
                        this.state = 904;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === modelicaParser.T__1) {
                            {
                                {
                                    this.state = 900;
                                    this.match(modelicaParser.T__1);
                                    this.state = 901;
                                    this.expression_list();
                                }
                            }
                            this.state = 906;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 907;
                        this.match(modelicaParser.T__84);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 909;
                        this.match(modelicaParser.T__85);
                        this.state = 910;
                        this.function_arguments();
                        this.state = 911;
                        this.match(modelicaParser.T__36);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 913;
                        this.match(modelicaParser.T__17);
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
    modelicaParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, modelicaParser.RULE_name);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 917;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__86) {
                    {
                        this.state = 916;
                        this.match(modelicaParser.T__86);
                    }
                }
                this.state = 919;
                this.match(modelicaParser.IDENT);
                this.state = 924;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 920;
                                this.match(modelicaParser.T__86);
                                this.state = 921;
                                this.match(modelicaParser.IDENT);
                            }
                        }
                    }
                    this.state = 926;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
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
    modelicaParser.prototype.component_reference = function () {
        var _localctx = new Component_referenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, modelicaParser.RULE_component_reference);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 928;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__86) {
                    {
                        this.state = 927;
                        this.match(modelicaParser.T__86);
                    }
                }
                this.state = 930;
                this.match(modelicaParser.IDENT);
                this.state = 932;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__83) {
                    {
                        this.state = 931;
                        this.array_subscripts();
                    }
                }
                this.state = 941;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 934;
                                this.match(modelicaParser.T__86);
                                this.state = 935;
                                this.match(modelicaParser.IDENT);
                                this.state = 937;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === modelicaParser.T__83) {
                                    {
                                        this.state = 936;
                                        this.array_subscripts();
                                    }
                                }
                            }
                        }
                    }
                    this.state = 943;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
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
    modelicaParser.prototype.function_call_args = function () {
        var _localctx = new Function_call_argsContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, modelicaParser.RULE_function_call_args);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 944;
                this.match(modelicaParser.T__21);
                this.state = 946;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << modelicaParser.T__16) | (1 << modelicaParser.T__17) | (1 << modelicaParser.T__21) | (1 << modelicaParser.T__24))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (modelicaParser.T__45 - 46)) | (1 << (modelicaParser.T__48 - 46)) | (1 << (modelicaParser.T__65 - 46)) | (1 << (modelicaParser.T__72 - 46)) | (1 << (modelicaParser.T__73 - 46)) | (1 << (modelicaParser.T__74 - 46)) | (1 << (modelicaParser.T__75 - 46)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (modelicaParser.T__81 - 82)) | (1 << (modelicaParser.T__82 - 82)) | (1 << (modelicaParser.T__83 - 82)) | (1 << (modelicaParser.T__85 - 82)) | (1 << (modelicaParser.T__86 - 82)) | (1 << (modelicaParser.IDENT - 82)) | (1 << (modelicaParser.STRING - 82)) | (1 << (modelicaParser.UNSIGNED_NUMBER - 82)))) !== 0)) {
                    {
                        this.state = 945;
                        this.function_arguments();
                    }
                }
                this.state = 948;
                this.match(modelicaParser.T__23);
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
    modelicaParser.prototype.function_arguments = function () {
        var _localctx = new Function_argumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, modelicaParser.RULE_function_arguments);
        try {
            this.state = 958;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 950;
                        this.function_argument();
                        this.state = 955;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case modelicaParser.T__25:
                                {
                                    this.state = 951;
                                    this.match(modelicaParser.T__25);
                                    this.state = 952;
                                    this.function_arguments();
                                }
                                break;
                            case modelicaParser.T__56:
                                {
                                    this.state = 953;
                                    this.match(modelicaParser.T__56);
                                    this.state = 954;
                                    this.for_indices();
                                }
                                break;
                            case modelicaParser.T__23:
                            case modelicaParser.T__36:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 957;
                        this.named_arguments();
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
    modelicaParser.prototype.named_arguments = function () {
        var _localctx = new Named_argumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, modelicaParser.RULE_named_arguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 960;
                this.named_argument();
                this.state = 963;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__25) {
                    {
                        this.state = 961;
                        this.match(modelicaParser.T__25);
                        this.state = 962;
                        this.named_arguments();
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
    modelicaParser.prototype.named_argument = function () {
        var _localctx = new Named_argumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, modelicaParser.RULE_named_argument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 965;
                this.match(modelicaParser.IDENT);
                this.state = 966;
                this.match(modelicaParser.T__19);
                this.state = 967;
                this.function_argument();
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
    modelicaParser.prototype.function_argument = function () {
        var _localctx = new Function_argumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, modelicaParser.RULE_function_argument);
        var _la;
        try {
            this.state = 978;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case modelicaParser.T__16:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 969;
                        this.match(modelicaParser.T__16);
                        this.state = 970;
                        this.name();
                        this.state = 971;
                        this.match(modelicaParser.T__21);
                        this.state = 973;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === modelicaParser.IDENT) {
                            {
                                this.state = 972;
                                this.named_arguments();
                            }
                        }
                        this.state = 975;
                        this.match(modelicaParser.T__23);
                    }
                    break;
                case modelicaParser.T__17:
                case modelicaParser.T__21:
                case modelicaParser.T__24:
                case modelicaParser.T__45:
                case modelicaParser.T__48:
                case modelicaParser.T__65:
                case modelicaParser.T__72:
                case modelicaParser.T__73:
                case modelicaParser.T__74:
                case modelicaParser.T__75:
                case modelicaParser.T__81:
                case modelicaParser.T__82:
                case modelicaParser.T__83:
                case modelicaParser.T__85:
                case modelicaParser.T__86:
                case modelicaParser.IDENT:
                case modelicaParser.STRING:
                case modelicaParser.UNSIGNED_NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 977;
                        this.expression();
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
    modelicaParser.prototype.output_expression_list = function () {
        var _localctx = new Output_expression_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, modelicaParser.RULE_output_expression_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 981;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (modelicaParser.T__17 - 18)) | (1 << (modelicaParser.T__21 - 18)) | (1 << (modelicaParser.T__24 - 18)) | (1 << (modelicaParser.T__45 - 18)) | (1 << (modelicaParser.T__48 - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (modelicaParser.T__65 - 66)) | (1 << (modelicaParser.T__72 - 66)) | (1 << (modelicaParser.T__73 - 66)) | (1 << (modelicaParser.T__74 - 66)) | (1 << (modelicaParser.T__75 - 66)) | (1 << (modelicaParser.T__81 - 66)) | (1 << (modelicaParser.T__82 - 66)) | (1 << (modelicaParser.T__83 - 66)) | (1 << (modelicaParser.T__85 - 66)) | (1 << (modelicaParser.T__86 - 66)) | (1 << (modelicaParser.IDENT - 66)) | (1 << (modelicaParser.STRING - 66)) | (1 << (modelicaParser.UNSIGNED_NUMBER - 66)))) !== 0)) {
                    {
                        this.state = 980;
                        this.expression();
                    }
                }
                this.state = 989;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 983;
                            this.match(modelicaParser.T__25);
                            this.state = 985;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (modelicaParser.T__17 - 18)) | (1 << (modelicaParser.T__21 - 18)) | (1 << (modelicaParser.T__24 - 18)) | (1 << (modelicaParser.T__45 - 18)) | (1 << (modelicaParser.T__48 - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (modelicaParser.T__65 - 66)) | (1 << (modelicaParser.T__72 - 66)) | (1 << (modelicaParser.T__73 - 66)) | (1 << (modelicaParser.T__74 - 66)) | (1 << (modelicaParser.T__75 - 66)) | (1 << (modelicaParser.T__81 - 66)) | (1 << (modelicaParser.T__82 - 66)) | (1 << (modelicaParser.T__83 - 66)) | (1 << (modelicaParser.T__85 - 66)) | (1 << (modelicaParser.T__86 - 66)) | (1 << (modelicaParser.IDENT - 66)) | (1 << (modelicaParser.STRING - 66)) | (1 << (modelicaParser.UNSIGNED_NUMBER - 66)))) !== 0)) {
                                {
                                    this.state = 984;
                                    this.expression();
                                }
                            }
                        }
                    }
                    this.state = 991;
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
    modelicaParser.prototype.expression_list = function () {
        var _localctx = new Expression_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, modelicaParser.RULE_expression_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 992;
                this.expression();
                this.state = 997;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 993;
                            this.match(modelicaParser.T__25);
                            this.state = 994;
                            this.expression();
                        }
                    }
                    this.state = 999;
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
    modelicaParser.prototype.array_subscripts = function () {
        var _localctx = new Array_subscriptsContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, modelicaParser.RULE_array_subscripts);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1000;
                this.match(modelicaParser.T__83);
                this.state = 1001;
                this.subscript();
                this.state = 1006;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === modelicaParser.T__25) {
                    {
                        {
                            this.state = 1002;
                            this.match(modelicaParser.T__25);
                            this.state = 1003;
                            this.subscript();
                        }
                    }
                    this.state = 1008;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1009;
                this.match(modelicaParser.T__84);
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
    modelicaParser.prototype.subscript = function () {
        var _localctx = new SubscriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, modelicaParser.RULE_subscript);
        try {
            this.state = 1013;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case modelicaParser.T__22:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1011;
                        this.match(modelicaParser.T__22);
                    }
                    break;
                case modelicaParser.T__17:
                case modelicaParser.T__21:
                case modelicaParser.T__24:
                case modelicaParser.T__45:
                case modelicaParser.T__48:
                case modelicaParser.T__65:
                case modelicaParser.T__72:
                case modelicaParser.T__73:
                case modelicaParser.T__74:
                case modelicaParser.T__75:
                case modelicaParser.T__81:
                case modelicaParser.T__82:
                case modelicaParser.T__83:
                case modelicaParser.T__85:
                case modelicaParser.T__86:
                case modelicaParser.IDENT:
                case modelicaParser.STRING:
                case modelicaParser.UNSIGNED_NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1012;
                        this.expression();
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
    modelicaParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, modelicaParser.RULE_comment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1015;
                this.string_comment();
                this.state = 1017;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.T__87) {
                    {
                        this.state = 1016;
                        this.annotation();
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
    modelicaParser.prototype.string_comment = function () {
        var _localctx = new String_commentContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, modelicaParser.RULE_string_comment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1027;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === modelicaParser.STRING) {
                    {
                        this.state = 1019;
                        this.match(modelicaParser.STRING);
                        this.state = 1024;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === modelicaParser.T__72) {
                            {
                                {
                                    this.state = 1020;
                                    this.match(modelicaParser.T__72);
                                    this.state = 1021;
                                    this.match(modelicaParser.STRING);
                                }
                            }
                            this.state = 1026;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
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
    modelicaParser.prototype.annotation = function () {
        var _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, modelicaParser.RULE_annotation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1029;
                this.match(modelicaParser.T__87);
                this.state = 1030;
                this.class_modification();
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
    Object.defineProperty(modelicaParser, "_ATN", {
        get: function () {
            if (!modelicaParser.__ATN) {
                modelicaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(modelicaParser._serializedATN));
            }
            return modelicaParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    modelicaParser.T__0 = 1;
    modelicaParser.T__1 = 2;
    modelicaParser.T__2 = 3;
    modelicaParser.T__3 = 4;
    modelicaParser.T__4 = 5;
    modelicaParser.T__5 = 6;
    modelicaParser.T__6 = 7;
    modelicaParser.T__7 = 8;
    modelicaParser.T__8 = 9;
    modelicaParser.T__9 = 10;
    modelicaParser.T__10 = 11;
    modelicaParser.T__11 = 12;
    modelicaParser.T__12 = 13;
    modelicaParser.T__13 = 14;
    modelicaParser.T__14 = 15;
    modelicaParser.T__15 = 16;
    modelicaParser.T__16 = 17;
    modelicaParser.T__17 = 18;
    modelicaParser.T__18 = 19;
    modelicaParser.T__19 = 20;
    modelicaParser.T__20 = 21;
    modelicaParser.T__21 = 22;
    modelicaParser.T__22 = 23;
    modelicaParser.T__23 = 24;
    modelicaParser.T__24 = 25;
    modelicaParser.T__25 = 26;
    modelicaParser.T__26 = 27;
    modelicaParser.T__27 = 28;
    modelicaParser.T__28 = 29;
    modelicaParser.T__29 = 30;
    modelicaParser.T__30 = 31;
    modelicaParser.T__31 = 32;
    modelicaParser.T__32 = 33;
    modelicaParser.T__33 = 34;
    modelicaParser.T__34 = 35;
    modelicaParser.T__35 = 36;
    modelicaParser.T__36 = 37;
    modelicaParser.T__37 = 38;
    modelicaParser.T__38 = 39;
    modelicaParser.T__39 = 40;
    modelicaParser.T__40 = 41;
    modelicaParser.T__41 = 42;
    modelicaParser.T__42 = 43;
    modelicaParser.T__43 = 44;
    modelicaParser.T__44 = 45;
    modelicaParser.T__45 = 46;
    modelicaParser.T__46 = 47;
    modelicaParser.T__47 = 48;
    modelicaParser.T__48 = 49;
    modelicaParser.T__49 = 50;
    modelicaParser.T__50 = 51;
    modelicaParser.T__51 = 52;
    modelicaParser.T__52 = 53;
    modelicaParser.T__53 = 54;
    modelicaParser.T__54 = 55;
    modelicaParser.T__55 = 56;
    modelicaParser.T__56 = 57;
    modelicaParser.T__57 = 58;
    modelicaParser.T__58 = 59;
    modelicaParser.T__59 = 60;
    modelicaParser.T__60 = 61;
    modelicaParser.T__61 = 62;
    modelicaParser.T__62 = 63;
    modelicaParser.T__63 = 64;
    modelicaParser.T__64 = 65;
    modelicaParser.T__65 = 66;
    modelicaParser.T__66 = 67;
    modelicaParser.T__67 = 68;
    modelicaParser.T__68 = 69;
    modelicaParser.T__69 = 70;
    modelicaParser.T__70 = 71;
    modelicaParser.T__71 = 72;
    modelicaParser.T__72 = 73;
    modelicaParser.T__73 = 74;
    modelicaParser.T__74 = 75;
    modelicaParser.T__75 = 76;
    modelicaParser.T__76 = 77;
    modelicaParser.T__77 = 78;
    modelicaParser.T__78 = 79;
    modelicaParser.T__79 = 80;
    modelicaParser.T__80 = 81;
    modelicaParser.T__81 = 82;
    modelicaParser.T__82 = 83;
    modelicaParser.T__83 = 84;
    modelicaParser.T__84 = 85;
    modelicaParser.T__85 = 86;
    modelicaParser.T__86 = 87;
    modelicaParser.T__87 = 88;
    modelicaParser.IDENT = 89;
    modelicaParser.STRING = 90;
    modelicaParser.UNSIGNED_NUMBER = 91;
    modelicaParser.WS = 92;
    modelicaParser.COMMENT = 93;
    modelicaParser.LINE_COMMENT = 94;
    modelicaParser.RULE_stored_definition = 0;
    modelicaParser.RULE_class_definition = 1;
    modelicaParser.RULE_class_specifier = 2;
    modelicaParser.RULE_class_prefixes = 3;
    modelicaParser.RULE_long_class_specifier = 4;
    modelicaParser.RULE_short_class_specifier = 5;
    modelicaParser.RULE_der_class_specifier = 6;
    modelicaParser.RULE_base_prefix = 7;
    modelicaParser.RULE_enum_list = 8;
    modelicaParser.RULE_enumeration_literal = 9;
    modelicaParser.RULE_composition = 10;
    modelicaParser.RULE_language_specification = 11;
    modelicaParser.RULE_external_function_call = 12;
    modelicaParser.RULE_element_list = 13;
    modelicaParser.RULE_element = 14;
    modelicaParser.RULE_import_clause = 15;
    modelicaParser.RULE_import_list = 16;
    modelicaParser.RULE_extends_clause = 17;
    modelicaParser.RULE_constraining_clause = 18;
    modelicaParser.RULE_component_clause = 19;
    modelicaParser.RULE_type_prefix = 20;
    modelicaParser.RULE_type_specifier = 21;
    modelicaParser.RULE_component_list = 22;
    modelicaParser.RULE_component_declaration = 23;
    modelicaParser.RULE_condition_attribute = 24;
    modelicaParser.RULE_declaration = 25;
    modelicaParser.RULE_modification = 26;
    modelicaParser.RULE_class_modification = 27;
    modelicaParser.RULE_argument_list = 28;
    modelicaParser.RULE_argument = 29;
    modelicaParser.RULE_element_modification_or_replaceable = 30;
    modelicaParser.RULE_element_modification = 31;
    modelicaParser.RULE_element_redeclaration = 32;
    modelicaParser.RULE_element_replaceable = 33;
    modelicaParser.RULE_component_clause1 = 34;
    modelicaParser.RULE_component_declaration1 = 35;
    modelicaParser.RULE_short_class_definition = 36;
    modelicaParser.RULE_equation_section = 37;
    modelicaParser.RULE_algorithm_section = 38;
    modelicaParser.RULE_equation = 39;
    modelicaParser.RULE_statement = 40;
    modelicaParser.RULE_if_equation = 41;
    modelicaParser.RULE_if_statement = 42;
    modelicaParser.RULE_for_equation = 43;
    modelicaParser.RULE_for_statement = 44;
    modelicaParser.RULE_for_indices = 45;
    modelicaParser.RULE_for_index = 46;
    modelicaParser.RULE_while_statement = 47;
    modelicaParser.RULE_when_equation = 48;
    modelicaParser.RULE_when_statement = 49;
    modelicaParser.RULE_connect_clause = 50;
    modelicaParser.RULE_expression = 51;
    modelicaParser.RULE_simple_expression = 52;
    modelicaParser.RULE_logical_expression = 53;
    modelicaParser.RULE_logical_term = 54;
    modelicaParser.RULE_logical_factor = 55;
    modelicaParser.RULE_relation = 56;
    modelicaParser.RULE_rel_op = 57;
    modelicaParser.RULE_arithmetic_expression = 58;
    modelicaParser.RULE_add_op = 59;
    modelicaParser.RULE_term = 60;
    modelicaParser.RULE_mul_op = 61;
    modelicaParser.RULE_factor = 62;
    modelicaParser.RULE_primary = 63;
    modelicaParser.RULE_name = 64;
    modelicaParser.RULE_component_reference = 65;
    modelicaParser.RULE_function_call_args = 66;
    modelicaParser.RULE_function_arguments = 67;
    modelicaParser.RULE_named_arguments = 68;
    modelicaParser.RULE_named_argument = 69;
    modelicaParser.RULE_function_argument = 70;
    modelicaParser.RULE_output_expression_list = 71;
    modelicaParser.RULE_expression_list = 72;
    modelicaParser.RULE_array_subscripts = 73;
    modelicaParser.RULE_subscript = 74;
    modelicaParser.RULE_comment = 75;
    modelicaParser.RULE_string_comment = 76;
    modelicaParser.RULE_annotation = 77;
    // tslint:disable:no-trailing-whitespace
    modelicaParser.ruleNames = [
        "stored_definition", "class_definition", "class_specifier", "class_prefixes",
        "long_class_specifier", "short_class_specifier", "der_class_specifier",
        "base_prefix", "enum_list", "enumeration_literal", "composition", "language_specification",
        "external_function_call", "element_list", "element", "import_clause",
        "import_list", "extends_clause", "constraining_clause", "component_clause",
        "type_prefix", "type_specifier", "component_list", "component_declaration",
        "condition_attribute", "declaration", "modification", "class_modification",
        "argument_list", "argument", "element_modification_or_replaceable", "element_modification",
        "element_redeclaration", "element_replaceable", "component_clause1", "component_declaration1",
        "short_class_definition", "equation_section", "algorithm_section", "equation",
        "statement", "if_equation", "if_statement", "for_equation", "for_statement",
        "for_indices", "for_index", "while_statement", "when_equation", "when_statement",
        "connect_clause", "expression", "simple_expression", "logical_expression",
        "logical_term", "logical_factor", "relation", "rel_op", "arithmetic_expression",
        "add_op", "term", "mul_op", "factor", "primary", "name", "component_reference",
        "function_call_args", "function_arguments", "named_arguments", "named_argument",
        "function_argument", "output_expression_list", "expression_list", "array_subscripts",
        "subscript", "comment", "string_comment", "annotation",
    ];
    modelicaParser._LITERAL_NAMES = [
        undefined, "'within'", "';'", "'final'", "'encapsulated'", "'partial'",
        "'class'", "'model'", "'operator'", "'record'", "'block'", "'expandable'",
        "'connector'", "'type'", "'package'", "'pure'", "'impure'", "'function'",
        "'end'", "'extends'", "'='", "'enumeration'", "'('", "':'", "')'", "'der'",
        "','", "'public'", "'protected'", "'external'", "'redeclare'", "'inner'",
        "'outer'", "'replaceable'", "'import'", "'.*'", "'.{'", "'}'", "'constrainedby'",
        "'flow'", "'stream'", "'discrete'", "'parameter'", "'constant'", "'input'",
        "'output'", "'if'", "':='", "'each'", "'initial'", "'equation'", "'algorithm'",
        "'break'", "'return'", "'then'", "'elseif'", "'else'", "'for'", "'loop'",
        "'in'", "'while'", "'when'", "'elsewhen'", "'connect'", "'or'", "'and'",
        "'not'", "'<'", "'<='", "'>'", "'>='", "'=='", "'<>'", "'+'", "'-'", "'.+'",
        "'.-'", "'*'", "'/'", "'./'", "'^'", "'.^'", "'false'", "'true'", "'['",
        "']'", "'{'", "'.'", "'annotation'",
    ];
    modelicaParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "IDENT", "STRING",
        "UNSIGNED_NUMBER", "WS", "COMMENT", "LINE_COMMENT",
    ];
    modelicaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(modelicaParser._LITERAL_NAMES, modelicaParser._SYMBOLIC_NAMES, []);
    modelicaParser._serializedATNSegments = 2;
    modelicaParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03`\u040B\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x03\x02\x03\x02\x05\x02\xA1\n\x02\x03\x02\x07\x02\xA4\n\x02\f\x02" +
        "\x0E\x02\xA7\v\x02\x03\x02\x05\x02\xAA\n\x02\x03\x02\x03\x02\x03\x02\x07" +
        "\x02\xAF\n\x02\f\x02\x0E\x02\xB2\v\x02\x03\x03\x05\x03\xB5\n\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04\xBD\n\x04\x03\x05\x05" +
        "\x05\xC0\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\xC5\n\x05\x03\x05\x03\x05" +
        "\x03\x05\x05\x05\xCA\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xD0" +
        "\n\x05\x03\x05\x05\x05\xD3\n\x05\x03\x05\x03\x05\x05\x05\xD7\n\x05\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
        "\x06\xE2\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xE9\n\x06" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xF0\n\x07\x03\x07\x05" +
        "\x07\xF3\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x05\x07\xFC\n\x07\x03\x07\x05\x07\xFF\n\x07\x03\x07\x03\x07\x05\x07\u0103" +
        "\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u010E" +
        "\n\b\f\b\x0E\b\u0111\v\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03" +
        "\n\x07\n\u011B\n\n\f\n\x0E\n\u011E\v\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x07\f\u012A\n\f\f\f\x0E\f\u012D\v\f\x03\f\x03" +
        "\f\x05\f\u0131\n\f\x03\f\x05\f\u0134\n\f\x03\f\x05\f\u0137\n\f\x03\f\x05" +
        "\f\u013A\n\f\x03\f\x03\f\x03\f\x05\f\u013F\n\f\x03\r\x03\r\x03\x0E\x03" +
        "\x0E\x03\x0E\x05\x0E\u0146\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u014B" +
        "\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0152\n\x0F\f\x0F" +
        "\x0E\x0F\u0155\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u015A\n\x10\x03\x10" +
        "\x05\x10\u015D\n\x10\x03\x10\x05\x10\u0160\n\x10\x03\x10\x05\x10\u0163" +
        "\n\x10\x03\x10\x03\x10\x05\x10\u0167\n\x10\x03\x10\x03\x10\x03\x10\x05" +
        "\x10\u016C\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0171\n\x10\x05\x10\u0173" +
        "\n\x10\x05\x10\u0175\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0184" +
        "\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\u018B\n\x12\f\x12" +
        "\x0E\x12\u018E\v\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0193\n\x13\x03\x13" +
        "\x05\x13\u0196\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\u019B\n\x14\x03\x15" +
        "\x03\x15\x03\x15\x05\x15\u01A0\n\x15\x03\x15\x03\x15\x03\x16\x05\x16\u01A5" +
        "\n\x16\x03\x16\x05\x16\u01A8\n\x16\x03\x16\x05\x16\u01AB\n\x16\x03\x17" +
        "\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18\u01B2\n\x18\f\x18\x0E\x18\u01B5" +
        "\v\x18\x03\x19\x03\x19\x05\x19\u01B9\n\x19\x03\x19\x03\x19\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u01C2\n\x1B\x03\x1B\x05\x1B\u01C5" +
        "\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01CA\n\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x05\x1C\u01D0\n\x1C\x03\x1D\x03\x1D\x05\x1D\u01D4\n\x1D\x03" +
        "\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01DB\n\x1E\f\x1E\x0E\x1E" +
        "\u01DE\v\x1E\x03\x1F\x03\x1F\x05\x1F\u01E2\n\x1F\x03 \x05 \u01E5\n \x03" +
        " \x05 \u01E8\n \x03 \x03 \x05 \u01EC\n \x03!\x03!\x05!\u01F0\n!\x03!\x03" +
        "!\x03\"\x03\"\x05\"\u01F6\n\"\x03\"\x05\"\u01F9\n\"\x03\"\x03\"\x05\"" +
        "\u01FD\n\"\x03\"\x05\"\u0200\n\"\x03#\x03#\x03#\x05#\u0205\n#\x03#\x05" +
        "#\u0208\n#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x03\'\x05" +
        "\'\u0215\n\'\x03\'\x03\'\x03\'\x03\'\x07\'\u021B\n\'\f\'\x0E\'\u021E\v" +
        "\'\x03(\x05(\u0221\n(\x03(\x03(\x03(\x03(\x07(\u0227\n(\f(\x0E(\u022A" +
        "\v(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0237" +
        "\n)\x03)\x03)\x03*\x03*\x03*\x03*\x05*\u023F\n*\x03*\x03*\x03*\x03*\x03" +
        "*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u024E\n*\x03*\x03*\x03" +
        "+\x03+\x03+\x03+\x03+\x03+\x07+\u0258\n+\f+\x0E+\u025B\v+\x03+\x03+\x03" +
        "+\x03+\x03+\x03+\x07+\u0263\n+\f+\x0E+\u0266\v+\x07+\u0268\n+\f+\x0E+" +
        "\u026B\v+\x03+\x03+\x03+\x03+\x07+\u0271\n+\f+\x0E+\u0274\v+\x05+\u0276" +
        "\n+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x07,\u0281\n,\f,\x0E" +
        ",\u0284\v,\x03,\x03,\x03,\x03,\x03,\x03,\x07,\u028C\n,\f,\x0E,\u028F\v" +
        ",\x07,\u0291\n,\f,\x0E,\u0294\v,\x03,\x03,\x03,\x03,\x07,\u029A\n,\f," +
        "\x0E,\u029D\v,\x05,\u029F\n,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x07-\u02AA\n-\f-\x0E-\u02AD\v-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03" +
        ".\x03.\x07.\u02B8\n.\f.\x0E.\u02BB\v.\x03.\x03.\x03.\x03/\x03/\x03/\x07" +
        "/\u02C3\n/\f/\x0E/\u02C6\v/\x030\x030\x030\x050\u02CB\n0\x031\x031\x03" +
        "1\x031\x031\x031\x071\u02D3\n1\f1\x0E1\u02D6\v1\x031\x031\x031\x032\x03" +
        "2\x032\x032\x032\x032\x072\u02E1\n2\f2\x0E2\u02E4\v2\x032\x032\x032\x03" +
        "2\x032\x032\x072\u02EC\n2\f2\x0E2\u02EF\v2\x072\u02F1\n2\f2\x0E2\u02F4" +
        "\v2\x032\x032\x032\x033\x033\x033\x033\x033\x033\x073\u02FF\n3\f3\x0E" +
        "3\u0302\v3\x033\x033\x033\x033\x033\x033\x073\u030A\n3\f3\x0E3\u030D\v" +
        "3\x073\u030F\n3\f3\x0E3\u0312\v3\x033\x033\x033\x034\x034\x034\x034\x03" +
        "4\x034\x034\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u0328" +
        "\n5\f5\x0E5\u032B\v5\x035\x035\x035\x055\u0330\n5\x036\x036\x036\x036" +
        "\x036\x056\u0337\n6\x056\u0339\n6\x037\x037\x037\x077\u033E\n7\f7\x0E" +
        "7\u0341\v7\x038\x038\x038\x078\u0346\n8\f8\x0E8\u0349\v8\x039\x059\u034C" +
        "\n9\x039\x039\x03:\x03:\x03:\x03:\x05:\u0354\n:\x03;\x03;\x03<\x05<\u0359" +
        "\n<\x03<\x03<\x03<\x03<\x07<\u035F\n<\f<\x0E<\u0362\v<\x03=\x03=\x03>" +
        "\x03>\x03>\x03>\x07>\u036A\n>\f>\x0E>\u036D\v>\x03?\x03?\x03@\x03@\x03" +
        "@\x05@\u0374\n@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u037D\nA\x03A" +
        "\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u0389\nA\fA\x0EA\u038C" +
        "\vA\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0395\nA\x03B\x05B\u0398\n" +
        "B\x03B\x03B\x03B\x07B\u039D\nB\fB\x0EB\u03A0\vB\x03C\x05C\u03A3\nC\x03" +
        "C\x03C\x05C\u03A7\nC\x03C\x03C\x03C\x05C\u03AC\nC\x07C\u03AE\nC\fC\x0E" +
        "C\u03B1\vC\x03D\x03D\x05D\u03B5\nD\x03D\x03D\x03E\x03E\x03E\x03E\x03E" +
        "\x05E\u03BE\nE\x03E\x05E\u03C1\nE\x03F\x03F\x03F\x05F\u03C6\nF\x03G\x03" +
        "G\x03G\x03G\x03H\x03H\x03H\x03H\x05H\u03D0\nH\x03H\x03H\x03H\x05H\u03D5" +
        "\nH\x03I\x05I\u03D8\nI\x03I\x03I\x05I\u03DC\nI\x07I\u03DE\nI\fI\x0EI\u03E1" +
        "\vI\x03J\x03J\x03J\x07J\u03E6\nJ\fJ\x0EJ\u03E9\vJ\x03K\x03K\x03K\x03K" +
        "\x07K\u03EF\nK\fK\x0EK\u03F2\vK\x03K\x03K\x03L\x03L\x05L\u03F8\nL\x03" +
        "M\x03M\x05M\u03FC\nM\x03N\x03N\x03N\x07N\u0401\nN\fN\x0EN\u0404\vN\x05" +
        "N\u0406\nN\x03O\x03O\x03O\x03O\x02\x02\x02P\x02\x02\x04\x02\x06\x02\b" +
        "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
        "\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
        "6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
        "R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
        "n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
        "\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
        "\x98\x02\x9A\x02\x9C\x02\x02\n\x03\x02\x11\x12\x03\x02)*\x03\x02+-\x03" +
        "\x02./\x03\x02EJ\x03\x02KN\x04\x02%%OQ\x03\x02RS\x02\u0462\x02\xA5\x03" +
        "\x02\x02\x02\x04\xB4\x03\x02\x02\x02\x06\xBC\x03\x02\x02\x02\b\xBF\x03" +
        "\x02\x02\x02\n\xE8\x03\x02\x02\x02\f\u0102\x03\x02\x02\x02\x0E\u0104\x03" +
        "\x02\x02\x02\x10\u0115\x03\x02\x02\x02\x12\u0117\x03\x02\x02\x02\x14\u011F" +
        "\x03\x02\x02\x02\x16\u0122\x03\x02\x02\x02\x18\u0140\x03\x02\x02\x02\x1A" +
        "\u0145\x03\x02\x02\x02\x1C\u0153\x03\x02\x02\x02\x1E\u0174\x03\x02\x02" +
        "\x02 \u0176\x03\x02\x02\x02\"\u0187\x03\x02\x02\x02$\u018F\x03\x02\x02" +
        "\x02&\u0197\x03\x02\x02\x02(\u019C\x03\x02\x02\x02*\u01A4\x03\x02\x02" +
        "\x02,\u01AC\x03\x02\x02\x02.\u01AE\x03\x02\x02\x020\u01B6\x03\x02\x02" +
        "\x022\u01BC\x03\x02\x02\x024\u01BF\x03\x02\x02\x026\u01CF\x03\x02\x02" +
        "\x028\u01D1\x03\x02\x02\x02:\u01D7\x03\x02\x02\x02<\u01E1\x03\x02\x02" +
        "\x02>\u01E4\x03\x02\x02\x02@\u01ED\x03\x02\x02\x02B\u01F3\x03\x02\x02" +
        "\x02D\u0201\x03\x02\x02\x02F\u0209\x03\x02\x02\x02H\u020D\x03\x02\x02" +
        "\x02J\u0210\x03\x02\x02\x02L\u0214\x03\x02\x02\x02N\u0220\x03\x02\x02" +
        "\x02P\u0236\x03\x02\x02\x02R\u024D\x03\x02\x02\x02T\u0251\x03\x02\x02" +
        "\x02V\u027A\x03\x02\x02\x02X\u02A3\x03\x02\x02\x02Z\u02B1\x03\x02\x02" +
        "\x02\\\u02BF\x03\x02\x02\x02^\u02C7\x03\x02\x02\x02`\u02CC\x03\x02\x02" +
        "\x02b\u02DA\x03\x02\x02\x02d\u02F8\x03\x02\x02\x02f\u0316\x03\x02\x02" +
        "\x02h\u032F\x03\x02\x02\x02j\u0331\x03\x02\x02\x02l\u033A\x03\x02\x02" +
        "\x02n\u0342\x03\x02\x02\x02p\u034B\x03\x02\x02\x02r\u034F\x03\x02\x02" +
        "\x02t\u0355\x03\x02\x02\x02v\u0358\x03\x02\x02\x02x\u0363\x03\x02\x02" +
        "\x02z\u0365\x03\x02\x02\x02|\u036E\x03\x02\x02\x02~\u0370\x03\x02\x02" +
        "\x02\x80\u0394\x03\x02\x02\x02\x82\u0397\x03\x02\x02\x02\x84\u03A2\x03" +
        "\x02\x02\x02\x86\u03B2\x03\x02\x02\x02\x88\u03C0\x03\x02\x02\x02\x8A\u03C2" +
        "\x03\x02\x02\x02\x8C\u03C7\x03\x02\x02\x02\x8E\u03D4\x03\x02\x02\x02\x90" +
        "\u03D7\x03\x02\x02\x02\x92\u03E2\x03\x02\x02\x02\x94\u03EA\x03\x02\x02" +
        "\x02\x96\u03F7\x03\x02\x02\x02\x98\u03F9\x03\x02\x02\x02\x9A\u0405\x03" +
        "\x02\x02\x02\x9C\u0407\x03\x02\x02\x02\x9E\xA0\x07\x03\x02\x02\x9F\xA1" +
        "\x05\x82B\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2" +
        "\x03\x02\x02\x02\xA2\xA4\x07\x04\x02\x02\xA3\x9E\x03\x02\x02\x02\xA4\xA7" +
        "\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xB0" +
        "\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAA\x07\x05\x02\x02\xA9\xA8" +
        "\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC" +
        "\x05\x04\x03\x02\xAC\xAD\x07\x04\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\xA9" +
        "\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1" +
        "\x03\x02\x02\x02\xB1\x03\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB5" +
        "\x07\x06\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6" +
        "\x03\x02\x02\x02\xB6\xB7\x05\b\x05\x02\xB7\xB8\x05\x06\x04\x02\xB8\x05" +
        "\x03\x02\x02\x02\xB9\xBD\x05\n\x06\x02\xBA\xBD\x05\f\x07\x02\xBB\xBD\x05" +
        "\x0E\b\x02\xBC\xB9\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBB\x03" +
        "\x02\x02\x02\xBD\x07\x03\x02\x02\x02\xBE\xC0\x07\x07\x02\x02\xBF\xBE\x03" +
        "\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xD6\x03\x02\x02\x02\xC1\xD7\x07" +
        "\b\x02\x02\xC2\xD7\x07\t\x02\x02\xC3\xC5\x07\n\x02\x02\xC4\xC3\x03\x02" +
        "\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xD7\x07\v" +
        "\x02\x02\xC7\xD7\x07\f\x02\x02\xC8\xCA\x07\r\x02\x02\xC9\xC8\x03\x02\x02" +
        "\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xD7\x07\x0E\x02" +
        "\x02\xCC\xD7\x07\x0F\x02\x02\xCD\xD7\x07\x10\x02\x02\xCE\xD0\t\x02\x02" +
        "\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02\x02" +
        "\x02\xD1\xD3\x07\n\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02" +
        "\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD7\x07\x13\x02\x02\xD5\xD7\x07\n\x02" +
        "\x02\xD6\xC1\x03\x02\x02\x02\xD6\xC2\x03\x02\x02\x02\xD6\xC4\x03\x02\x02" +
        "\x02\xD6\xC7\x03\x02\x02\x02\xD6\xC9\x03\x02\x02\x02\xD6\xCC\x03\x02\x02" +
        "\x02\xD6\xCD\x03\x02\x02\x02\xD6\xCF\x03\x02\x02\x02\xD6\xD5\x03\x02\x02" +
        "\x02\xD7\t\x03\x02\x02\x02\xD8\xD9\x07[\x02\x02\xD9\xDA\x05\x9AN\x02\xDA" +
        "\xDB\x05\x16\f\x02\xDB\xDC\x07\x14\x02\x02\xDC\xDD\x07[\x02\x02\xDD\xE9" +
        "\x03\x02\x02\x02\xDE\xDF\x07\x15\x02\x02\xDF\xE1\x07[\x02\x02\xE0\xE2" +
        "\x058\x1D\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3" +
        "\x03\x02\x02\x02\xE3\xE4\x05\x9AN\x02\xE4\xE5\x05\x16\f\x02\xE5\xE6\x07" +
        "\x14\x02\x02\xE6\xE7\x07[\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xD8\x03" +
        "\x02\x02\x02\xE8\xDE\x03\x02\x02\x02\xE9\v\x03\x02\x02\x02\xEA\xEB\x07" +
        "[\x02\x02\xEB\xEC\x07\x16\x02\x02\xEC\xED\x05\x10\t\x02\xED\xEF\x05\x82" +
        "B\x02\xEE\xF0\x05\x94K\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02" +
        "\x02\xF0\xF2\x03\x02\x02\x02\xF1\xF3\x058\x1D\x02\xF2\xF1\x03\x02\x02" +
        "\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x05\x98M" +
        "\x02\xF5\u0103\x03\x02\x02\x02\xF6\xF7\x07[\x02\x02\xF7\xF8\x07\x16\x02" +
        "\x02\xF8\xF9\x07\x17\x02\x02\xF9\xFE\x07\x18\x02\x02\xFA\xFC\x05\x12\n" +
        "\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFF\x03\x02\x02" +
        "\x02\xFD\xFF\x07\x19\x02\x02\xFE\xFB\x03\x02\x02\x02\xFE\xFD\x03\x02\x02" +
        "\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x07\x1A\x02\x02\u0101\u0103" +
        "\x05\x98M\x02\u0102\xEA\x03\x02\x02\x02\u0102\xF6\x03\x02\x02\x02\u0103" +
        "\r\x03\x02\x02\x02\u0104\u0105\x07[\x02\x02\u0105\u0106\x07\x16\x02\x02" +
        "\u0106\u0107\x07\x1B\x02\x02\u0107\u0108\x07\x18\x02\x02\u0108\u0109\x05" +
        "\x82B\x02\u0109\u010A\x07\x1C\x02\x02\u010A\u010F\x07[\x02\x02\u010B\u010C" +
        "\x07\x1C\x02\x02\u010C\u010E\x07[\x02\x02\u010D\u010B\x03\x02\x02\x02" +
        "\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03" +
        "\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112" +
        "\u0113\x07\x1A\x02\x02\u0113\u0114\x05\x98M\x02\u0114\x0F\x03\x02\x02" +
        "\x02\u0115\u0116\x05*\x16\x02\u0116\x11\x03\x02\x02\x02\u0117\u011C\x05" +
        "\x14\v\x02\u0118\u0119\x07\x1C\x02\x02\u0119\u011B\x05\x14\v\x02\u011A" +
        "\u0118\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02" +
        "\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\x13\x03\x02\x02\x02\u011E\u011C" +
        "\x03\x02\x02\x02\u011F\u0120\x07[\x02\x02\u0120\u0121\x05\x98M\x02\u0121" +
        "\x15\x03\x02\x02\x02\u0122\u012B\x05\x1C\x0F\x02\u0123\u0124\x07\x1D\x02" +
        "\x02\u0124\u012A\x05\x1C\x0F\x02\u0125\u0126\x07\x1E\x02\x02\u0126\u012A" +
        "\x05\x1C\x0F\x02\u0127\u012A\x05L\'\x02\u0128\u012A\x05N(\x02\u0129\u0123" +
        "\x03\x02\x02\x02\u0129\u0125\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02" +
        "\u0129\u0128\x03\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B\u0129\x03" +
        "\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u0139\x03\x02\x02\x02\u012D" +
        "\u012B\x03\x02\x02\x02\u012E\u0130\x07\x1F\x02\x02\u012F\u0131\x05\x18" +
        "\r\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133" +
        "\x03\x02\x02\x02\u0132\u0134\x05\x1A\x0E\x02\u0133\u0132\x03\x02\x02\x02" +
        "\u0133\u0134\x03\x02\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0137\x05" +
        "\x9CO\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137" +
        "\u0138\x03\x02\x02\x02\u0138\u013A\x07\x04\x02\x02\u0139\u012E\x03\x02" +
        "\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013E\x03\x02\x02\x02\u013B" +
        "\u013C\x05\x9CO\x02\u013C\u013D\x07\x04\x02\x02\u013D\u013F\x03\x02\x02" +
        "\x02\u013E\u013B\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\x17" +
        "\x03\x02\x02\x02\u0140\u0141\x07\\\x02\x02\u0141\x19\x03\x02\x02\x02\u0142" +
        "\u0143\x05\x84C\x02\u0143\u0144\x07\x16\x02\x02\u0144\u0146\x03\x02\x02" +
        "\x02\u0145\u0142\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147" +
        "\x03\x02\x02\x02\u0147\u0148\x07[\x02\x02\u0148\u014A\x07\x18\x02\x02" +
        "\u0149\u014B\x05\x92J\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03" +
        "\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x07\x1A\x02\x02\u014D" +
        "\x1B\x03\x02\x02\x02\u014E\u014F\x05\x1E\x10\x02\u014F\u0150\x07\x04\x02" +
        "\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014E\x03\x02\x02\x02\u0152\u0155" +
        "\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02" +
        "\u0154\x1D\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156\u0175\x05" +
        " \x11\x02\u0157\u0175\x05$\x13\x02\u0158\u015A\x07 \x02\x02\u0159\u0158" +
        "\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015C\x03\x02\x02\x02" +
        "\u015B\u015D\x07\x05\x02\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03" +
        "\x02\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E\u0160\x07!\x02\x02\u015F" +
        "\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x03\x02" +
        "\x02\x02\u0161\u0163\x07\"\x02\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163" +
        "\x03\x02\x02\x02\u0163\u0172\x03\x02\x02\x02\u0164\u0167\x05\x04\x03\x02" +
        "\u0165\u0167\x05(\x15\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0165\x03" +
        "\x02\x02\x02\u0167\u0173\x03\x02\x02\x02\u0168\u016B\x07#\x02\x02\u0169" +
        "\u016C\x05\x04\x03\x02\u016A\u016C\x05(\x15\x02\u016B\u0169\x03\x02\x02" +
        "\x02\u016B\u016A\x03\x02\x02\x02\u016C\u0170\x03\x02\x02\x02\u016D\u016E" +
        "\x05&\x14\x02\u016E\u016F\x05\x98M\x02\u016F\u0171\x03\x02\x02\x02\u0170" +
        "\u016D\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x03\x02" +
        "\x02\x02\u0172\u0166\x03\x02\x02\x02\u0172\u0168\x03\x02\x02\x02\u0173" +
        "\u0175\x03\x02\x02\x02\u0174\u0156\x03\x02\x02\x02\u0174\u0157\x03\x02" +
        "\x02\x02\u0174\u0159\x03\x02\x02\x02\u0175\x1F\x03\x02\x02\x02\u0176\u0183" +
        "\x07$\x02\x02\u0177\u0178\x07[\x02\x02\u0178\u0179\x07\x16\x02\x02\u0179" +
        "\u0184\x05\x82B\x02\u017A\u017B\x05\x82B\x02\u017B\u017C\x07%\x02\x02" +
        "\u017C\u0184\x03\x02\x02\x02\u017D\u017E\x05\x82B\x02\u017E\u017F\x07" +
        "&\x02\x02\u017F\u0180\x05\"\x12\x02\u0180\u0181\x07\'\x02\x02\u0181\u0184" +
        "\x03\x02\x02\x02\u0182\u0184\x05\x82B\x02\u0183\u0177\x03\x02\x02\x02" +
        "\u0183\u017A\x03\x02\x02\x02\u0183\u017D\x03\x02\x02\x02\u0183\u0182\x03" +
        "\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x05\x98M\x02\u0186" +
        "!\x03\x02\x02\x02\u0187\u018C\x07[\x02\x02\u0188\u0189\x07\x1C\x02\x02" +
        "\u0189\u018B\x07[\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B\u018E\x03" +
        "\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D" +
        "#\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0190\x07\x15\x02" +
        "\x02\u0190\u0192\x05\x82B\x02\u0191\u0193\x058\x1D\x02\u0192\u0191\x03" +
        "\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194" +
        "\u0196\x05\x9CO\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02" +
        "\x02\u0196%\x03\x02\x02\x02\u0197\u0198\x07(\x02\x02\u0198\u019A\x05\x82" +
        "B\x02\u0199\u019B\x058\x1D\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B" +
        "\x03\x02\x02\x02\u019B\'\x03\x02\x02\x02\u019C\u019D\x05*\x16\x02\u019D" +
        "\u019F\x05,\x17\x02\u019E\u01A0\x05\x94K\x02\u019F\u019E\x03\x02\x02\x02" +
        "\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x05" +
        ".\x18\x02\u01A2)\x03\x02\x02\x02\u01A3\u01A5\t\x03\x02\x02\u01A4\u01A3" +
        "\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A7\x03\x02\x02\x02" +
        "\u01A6\u01A8\t\x04\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03" +
        "\x02\x02\x02\u01A8\u01AA\x03\x02\x02\x02\u01A9\u01AB\t\x05\x02\x02\u01AA" +
        "\u01A9\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB+\x03\x02\x02" +
        "\x02\u01AC\u01AD\x05\x82B\x02\u01AD-\x03\x02\x02\x02\u01AE\u01B3\x050" +
        "\x19\x02\u01AF\u01B0\x07\x1C\x02\x02\u01B0\u01B2\x050\x19\x02\u01B1\u01AF" +
        "\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02" +
        "\u01B3\u01B4\x03\x02\x02\x02\u01B4/\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
        "\x02\x02\u01B6\u01B8\x054\x1B\x02\u01B7\u01B9\x052\x1A\x02\u01B8\u01B7" +
        "\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA";
    modelicaParser._serializedATNSegment1 = "\x03\x02\x02\x02\u01BA\u01BB\x05\x98M\x02\u01BB1\x03\x02\x02\x02\u01BC" +
        "\u01BD\x070\x02\x02\u01BD\u01BE\x05h5\x02\u01BE3\x03\x02\x02\x02\u01BF" +
        "\u01C1\x07[\x02\x02\u01C0\u01C2\x05\x94K\x02\u01C1\u01C0\x03\x02\x02\x02" +
        "\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01C5\x05" +
        "6\x1C\x02\u01C4\u01C3\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5" +
        "5\x03\x02\x02\x02\u01C6\u01C9\x058\x1D\x02\u01C7\u01C8\x07\x16\x02\x02" +
        "\u01C8\u01CA\x05h5\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02" +
        "\x02\x02\u01CA\u01D0\x03\x02\x02\x02\u01CB\u01CC\x07\x16\x02\x02\u01CC" +
        "\u01D0\x05h5\x02\u01CD\u01CE\x071\x02\x02\u01CE\u01D0\x05h5\x02\u01CF" +
        "\u01C6\x03\x02\x02\x02\u01CF\u01CB\x03\x02\x02\x02\u01CF\u01CD\x03\x02" +
        "\x02\x02\u01D07\x03\x02\x02\x02\u01D1\u01D3\x07\x18\x02\x02\u01D2\u01D4" +
        "\x05:\x1E\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02" +
        "\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x07\x1A\x02\x02\u01D69\x03\x02" +
        "\x02\x02\u01D7\u01DC\x05<\x1F\x02\u01D8\u01D9\x07\x1C\x02\x02\u01D9\u01DB" +
        "\x05<\x1F\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02" +
        "\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD;\x03\x02" +
        "\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E2\x05> \x02\u01E0\u01E2" +
        "\x05B\"\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2" +
        "=\x03\x02\x02\x02\u01E3\u01E5\x072\x02\x02\u01E4\u01E3\x03\x02\x02\x02" +
        "\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E8\x07" +
        "\x05\x02\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8" +
        "\u01EB\x03\x02\x02\x02\u01E9\u01EC\x05@!\x02\u01EA\u01EC\x05D#\x02\u01EB" +
        "\u01E9\x03\x02\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC?\x03\x02\x02" +
        "\x02\u01ED\u01EF\x05\x82B\x02\u01EE\u01F0\x056\x1C\x02\u01EF\u01EE\x03" +
        "\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1" +
        "\u01F2\x05\x9AN\x02\u01F2A\x03\x02\x02\x02\u01F3\u01F5\x07 \x02\x02\u01F4" +
        "\u01F6\x072\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02" +
        "\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7\u01F9\x07\x05\x02\x02\u01F8\u01F7" +
        "\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FF\x03\x02\x02\x02" +
        "\u01FA\u01FD\x05J&\x02\u01FB\u01FD\x05F$\x02\u01FC\u01FA\x03\x02\x02\x02" +
        "\u01FC\u01FB\x03\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02\u01FE\u0200\x05" +
        "D#\x02\u01FF\u01FC\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200C" +
        "\x03\x02\x02\x02\u0201\u0204\x07#\x02\x02\u0202\u0205\x05J&\x02\u0203" +
        "\u0205\x05F$\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203\x03\x02\x02\x02" +
        "\u0205\u0207\x03\x02\x02\x02\u0206\u0208\x05&\x14\x02\u0207\u0206\x03" +
        "\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208E\x03\x02\x02\x02\u0209" +
        "\u020A\x05*\x16\x02\u020A\u020B\x05,\x17\x02\u020B\u020C\x05H%\x02\u020C" +
        "G\x03\x02\x02\x02\u020D\u020E\x054\x1B\x02\u020E\u020F\x05\x98M\x02\u020F" +
        "I\x03\x02\x02\x02\u0210\u0211\x05\b\x05\x02\u0211\u0212\x05\f\x07\x02" +
        "\u0212K\x03\x02\x02\x02\u0213\u0215\x073\x02\x02\u0214\u0213\x03\x02\x02" +
        "\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u021C" +
        "\x074\x02\x02\u0217\u0218\x05P)\x02\u0218\u0219\x07\x04\x02\x02\u0219" +
        "\u021B\x03\x02\x02\x02\u021A\u0217\x03\x02\x02\x02\u021B\u021E\x03\x02" +
        "\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
        "M\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F\u0221\x073\x02\x02" +
        "\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x03" +
        "\x02\x02\x02\u0222\u0228\x075\x02\x02\u0223\u0224\x05R*\x02\u0224\u0225" +
        "\x07\x04\x02\x02\u0225\u0227\x03\x02\x02\x02\u0226\u0223\x03\x02\x02\x02" +
        "\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03" +
        "\x02\x02\x02\u0229O\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B" +
        "\u022C\x05j6\x02\u022C\u022D\x07\x16\x02\x02\u022D\u022E\x05h5\x02\u022E" +
        "\u0237\x03\x02\x02\x02\u022F\u0237\x05T+\x02\u0230\u0237\x05X-\x02\u0231" +
        "\u0237\x05f4\x02\u0232\u0237\x05b2\x02\u0233\u0234\x05\x82B\x02\u0234" +
        "\u0235\x05\x86D\x02\u0235\u0237\x03\x02\x02\x02\u0236\u022B\x03\x02\x02" +
        "\x02\u0236\u022F\x03\x02\x02\x02\u0236\u0230\x03\x02\x02\x02\u0236\u0231" +
        "\x03\x02\x02\x02\u0236\u0232\x03\x02\x02\x02\u0236\u0233\x03\x02\x02\x02" +
        "\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x05\x98M\x02\u0239Q\x03\x02\x02" +
        "\x02\u023A\u023E\x05\x84C\x02\u023B\u023C\x071\x02\x02\u023C\u023F\x05" +
        "h5\x02\u023D\u023F\x05\x86D\x02\u023E\u023B\x03\x02\x02\x02\u023E\u023D" +
        "\x03\x02\x02\x02\u023F\u024E\x03\x02\x02\x02\u0240\u0241\x07\x18\x02\x02" +
        "\u0241\u0242\x05\x90I\x02\u0242\u0243\x07\x1A\x02\x02\u0243\u0244\x07" +
        "1\x02\x02\u0244\u0245\x05\x84C\x02\u0245\u0246\x05\x86D\x02\u0246\u024E" +
        "\x03\x02\x02\x02\u0247\u024E\x076\x02\x02\u0248\u024E\x077\x02\x02\u0249" +
        "\u024E\x05V,\x02\u024A\u024E\x05Z.\x02\u024B\u024E\x05`1\x02\u024C\u024E" +
        "\x05d3\x02\u024D\u023A\x03\x02\x02\x02\u024D\u0240\x03\x02\x02\x02\u024D" +
        "\u0247\x03\x02\x02\x02\u024D\u0248\x03\x02\x02\x02\u024D\u0249\x03\x02" +
        "\x02\x02\u024D\u024A\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D" +
        "\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0250\x05\x98" +
        "M\x02\u0250S\x03\x02\x02\x02\u0251\u0252\x070\x02\x02\u0252\u0253\x05" +
        "h5\x02\u0253\u0259\x078\x02\x02\u0254\u0255\x05P)\x02\u0255\u0256\x07" +
        "\x04\x02\x02\u0256\u0258\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0258" +
        "\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02" +
        "\x02\x02\u025A\u0269\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C" +
        "\u025D\x079\x02\x02\u025D\u025E\x05h5\x02\u025E\u0264\x078\x02\x02\u025F" +
        "\u0260\x05P)\x02\u0260\u0261\x07\x04\x02\x02\u0261\u0263\x03\x02\x02\x02" +
        "\u0262\u025F\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03" +
        "\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266" +
        "\u0264\x03\x02\x02\x02\u0267\u025C\x03\x02\x02\x02\u0268\u026B\x03\x02" +
        "\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A" +
        "\u0275\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026C\u0272\x07:\x02" +
        "\x02\u026D\u026E\x05P)\x02\u026E\u026F\x07\x04\x02\x02\u026F\u0271\x03" +
        "\x02\x02\x02\u0270\u026D\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272" +
        "\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0276\x03\x02" +
        "\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u026C\x03\x02\x02\x02\u0275" +
        "\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x07\x14" +
        "\x02\x02\u0278\u0279\x070\x02\x02\u0279U\x03\x02\x02\x02\u027A\u027B\x07" +
        "0\x02\x02\u027B\u027C\x05h5\x02\u027C\u0282\x078\x02\x02\u027D\u027E\x05" +
        "R*\x02\u027E\u027F\x07\x04\x02\x02\u027F\u0281\x03\x02\x02\x02\u0280\u027D" +
        "\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02" +
        "\u0282\u0283\x03\x02\x02\x02\u0283\u0292\x03\x02\x02\x02\u0284\u0282\x03" +
        "\x02\x02\x02\u0285\u0286\x079\x02\x02\u0286\u0287\x05h5\x02\u0287\u028D" +
        "\x078\x02\x02\u0288\u0289\x05R*\x02\u0289\u028A\x07\x04\x02\x02\u028A" +
        "\u028C\x03\x02\x02\x02\u028B\u0288\x03\x02\x02\x02\u028C\u028F\x03\x02" +
        "\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E" +
        "\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290\u0285\x03\x02" +
        "\x02\x02\u0291\u0294\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0292" +
        "\u0293\x03\x02\x02\x02\u0293\u029E\x03\x02\x02\x02\u0294\u0292\x03\x02" +
        "\x02\x02\u0295\u029B\x07:\x02\x02\u0296\u0297\x05R*\x02\u0297\u0298\x07" +
        "\x04\x02\x02\u0298\u029A\x03\x02\x02\x02\u0299\u0296\x03\x02\x02\x02\u029A" +
        "\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C\x03\x02" +
        "\x02\x02\u029C\u029F\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029E" +
        "\u0295\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A0\x03\x02" +
        "\x02\x02\u02A0\u02A1\x07\x14\x02\x02\u02A1\u02A2\x070\x02\x02\u02A2W\x03" +
        "\x02\x02\x02\u02A3\u02A4\x07;\x02\x02\u02A4\u02A5\x05\\/\x02\u02A5\u02AB" +
        "\x07<\x02\x02\u02A6\u02A7\x05P)\x02\u02A7\u02A8\x07\x04\x02\x02\u02A8" +
        "\u02AA\x03\x02\x02\x02\u02A9\u02A6\x03\x02\x02\x02\u02AA\u02AD\x03\x02" +
        "\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC" +
        "\u02AE\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AE\u02AF\x07\x14" +
        "\x02\x02\u02AF\u02B0\x07;\x02\x02\u02B0Y\x03\x02\x02\x02\u02B1\u02B2\x07" +
        ";\x02\x02\u02B2\u02B3\x05\\/\x02\u02B3\u02B9\x07<\x02\x02\u02B4\u02B5" +
        "\x05R*\x02\u02B5\u02B6\x07\x04\x02\x02\u02B6\u02B8\x03\x02\x02\x02\u02B7" +
        "\u02B4\x03\x02\x02\x02\u02B8\u02BB\x03\x02\x02\x02\u02B9\u02B7\x03\x02" +
        "\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BC\x03\x02\x02\x02\u02BB" +
        "\u02B9\x03\x02\x02\x02\u02BC\u02BD\x07\x14\x02\x02\u02BD\u02BE\x07;\x02" +
        "\x02\u02BE[\x03\x02\x02\x02\u02BF\u02C4\x05^0\x02\u02C0\u02C1\x07\x1C" +
        "\x02\x02\u02C1\u02C3\x05^0\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C6" +
        "\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02" +
        "\u02C5]\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C7\u02CA\x07[\x02" +
        "\x02\u02C8\u02C9\x07=\x02\x02\u02C9\u02CB\x05h5\x02\u02CA\u02C8\x03\x02" +
        "\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB_\x03\x02\x02\x02\u02CC\u02CD" +
        "\x07>\x02\x02\u02CD\u02CE\x05h5\x02\u02CE\u02D4\x07<\x02\x02\u02CF\u02D0" +
        "\x05R*\x02\u02D0\u02D1\x07\x04\x02\x02\u02D1\u02D3\x03\x02\x02\x02\u02D2" +
        "\u02CF\x03\x02\x02\x02\u02D3\u02D6\x03\x02\x02\x02\u02D4\u02D2\x03\x02" +
        "\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D7\x03\x02\x02\x02\u02D6" +
        "\u02D4\x03\x02\x02\x02\u02D7\u02D8\x07\x14\x02\x02\u02D8\u02D9\x07>\x02" +
        "\x02\u02D9a\x03\x02\x02\x02\u02DA\u02DB\x07?\x02\x02\u02DB\u02DC\x05h" +
        "5\x02\u02DC\u02E2\x078\x02\x02\u02DD\u02DE\x05P)\x02\u02DE\u02DF\x07\x04" +
        "\x02\x02\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02DD\x03\x02\x02\x02\u02E1" +
        "\u02E4\x03\x02\x02\x02\u02E2\u02E0\x03\x02\x02\x02\u02E2\u02E3\x03\x02" +
        "\x02\x02\u02E3\u02F2\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E5" +
        "\u02E6\x07@\x02\x02\u02E6\u02E7\x05h5\x02\u02E7\u02ED\x078\x02\x02\u02E8" +
        "\u02E9\x05P)\x02\u02E9\u02EA\x07\x04\x02\x02\u02EA\u02EC\x03\x02\x02\x02" +
        "\u02EB\u02E8\x03\x02\x02\x02\u02EC\u02EF\x03\x02\x02\x02\u02ED\u02EB\x03" +
        "\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F1\x03\x02\x02\x02\u02EF" +
        "\u02ED\x03\x02\x02\x02\u02F0\u02E5\x03\x02\x02\x02\u02F1\u02F4\x03\x02" +
        "\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3" +
        "\u02F5\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\u02F6\x07\x14" +
        "\x02\x02\u02F6\u02F7\x07?\x02\x02\u02F7c\x03\x02\x02\x02\u02F8\u02F9\x07" +
        "?\x02\x02\u02F9\u02FA\x05h5\x02\u02FA\u0300\x078\x02\x02\u02FB\u02FC\x05" +
        "R*\x02\u02FC\u02FD\x07\x04\x02\x02\u02FD\u02FF\x03\x02\x02\x02\u02FE\u02FB" +
        "\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02" +
        "\u0300\u0301\x03\x02\x02\x02\u0301\u0310\x03\x02\x02\x02\u0302\u0300\x03" +
        "\x02\x02\x02\u0303\u0304\x07@\x02\x02\u0304\u0305\x05h5\x02\u0305\u030B" +
        "\x078\x02\x02\u0306\u0307\x05R*\x02\u0307\u0308\x07\x04\x02\x02\u0308" +
        "\u030A\x03\x02\x02\x02\u0309\u0306\x03\x02\x02\x02\u030A\u030D\x03\x02" +
        "\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C" +
        "\u030F\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030E\u0303\x03\x02" +
        "\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310" +
        "\u0311\x03\x02\x02\x02\u0311\u0313\x03\x02\x02\x02\u0312\u0310\x03\x02" +
        "\x02\x02\u0313\u0314\x07\x14\x02\x02\u0314\u0315\x07?\x02\x02\u0315e\x03" +
        "\x02\x02\x02\u0316\u0317\x07A\x02\x02\u0317\u0318\x07\x18\x02\x02\u0318" +
        "\u0319\x05\x84C\x02\u0319\u031A\x07\x1C\x02\x02\u031A\u031B\x05\x84C\x02" +
        "\u031B\u031C\x07\x1A\x02\x02\u031Cg\x03\x02\x02\x02\u031D\u0330\x05j6" +
        "\x02\u031E\u031F\x070\x02\x02\u031F\u0320\x05h5\x02\u0320\u0321\x078\x02" +
        "\x02\u0321\u0329\x05h5\x02\u0322\u0323\x079\x02\x02\u0323\u0324\x05h5" +
        "\x02\u0324\u0325\x078\x02\x02\u0325\u0326\x05h5\x02\u0326\u0328\x03\x02" +
        "\x02\x02\u0327\u0322\x03\x02\x02\x02\u0328\u032B\x03\x02\x02\x02\u0329" +
        "\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032C\x03\x02" +
        "\x02\x02\u032B\u0329\x03\x02\x02\x02\u032C\u032D\x07:\x02\x02\u032D\u032E" +
        "\x05h5\x02\u032E\u0330\x03\x02\x02\x02\u032F\u031D\x03\x02\x02\x02\u032F" +
        "\u031E\x03\x02\x02\x02\u0330i\x03\x02\x02\x02\u0331\u0338\x05l7\x02\u0332" +
        "\u0333\x07\x19\x02\x02\u0333\u0336\x05l7\x02\u0334\u0335\x07\x19\x02\x02" +
        "\u0335\u0337\x05l7\x02\u0336\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02" +
        "\x02\x02\u0337\u0339\x03\x02\x02\x02\u0338\u0332\x03\x02\x02\x02\u0338" +
        "\u0339\x03\x02\x02\x02\u0339k\x03\x02\x02\x02\u033A\u033F\x05n8\x02\u033B" +
        "\u033C\x07B\x02\x02\u033C\u033E\x05n8\x02\u033D\u033B\x03\x02\x02\x02" +
        "\u033E\u0341\x03\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u033F\u0340\x03" +
        "\x02\x02\x02\u0340m\x03\x02\x02\x02\u0341\u033F\x03\x02\x02\x02\u0342" +
        "\u0347\x05p9\x02\u0343\u0344\x07C\x02\x02\u0344\u0346\x05p9\x02\u0345" +
        "\u0343\x03\x02\x02\x02\u0346\u0349\x03\x02\x02\x02\u0347\u0345\x03\x02" +
        "\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348o\x03\x02\x02\x02\u0349\u0347" +
        "\x03\x02\x02\x02\u034A\u034C\x07D\x02\x02\u034B\u034A\x03\x02\x02\x02" +
        "\u034B\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034E\x05" +
        "r:\x02\u034Eq\x03\x02\x02\x02\u034F\u0353\x05v<\x02\u0350\u0351\x05t;" +
        "\x02\u0351\u0352\x05v<\x02\u0352\u0354\x03\x02\x02\x02\u0353\u0350\x03" +
        "\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354s\x03\x02\x02\x02\u0355" +
        "\u0356\t\x06\x02\x02\u0356u\x03\x02\x02\x02\u0357\u0359\x05x=\x02\u0358" +
        "\u0357\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02" +
        "\x02\x02\u035A\u0360\x05z>\x02\u035B\u035C\x05x=\x02\u035C\u035D\x05z" +
        ">\x02\u035D\u035F\x03\x02\x02\x02\u035E\u035B\x03\x02\x02\x02\u035F\u0362" +
        "\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02" +
        "\u0361w\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363\u0364\t\x07" +
        "\x02\x02\u0364y\x03\x02\x02\x02\u0365\u036B\x05~@\x02\u0366\u0367\x05" +
        "|?\x02\u0367\u0368\x05~@\x02\u0368\u036A\x03\x02\x02\x02\u0369\u0366\x03" +
        "\x02\x02\x02\u036A\u036D\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036B" +
        "\u036C\x03\x02\x02\x02\u036C{\x03\x02\x02\x02\u036D\u036B\x03\x02\x02" +
        "\x02\u036E\u036F\t\b\x02\x02\u036F}\x03\x02\x02\x02\u0370\u0373\x05\x80" +
        "A\x02\u0371\u0372\t\t\x02\x02\u0372\u0374\x05\x80A\x02\u0373\u0371\x03" +
        "\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\x7F\x03\x02\x02\x02\u0375" +
        "\u0395\x07]\x02\x02\u0376\u0395\x07\\\x02\x02\u0377\u0395\x07T\x02\x02" +
        "\u0378\u0395\x07U\x02\x02\u0379\u037D\x05\x82B\x02\u037A\u037D\x07\x1B" +
        "\x02\x02\u037B\u037D\x073\x02\x02\u037C\u0379\x03\x02\x02\x02\u037C\u037A" +
        "\x03\x02\x02\x02\u037C\u037B\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02" +
        "\u037E\u0395\x05\x86D\x02\u037F\u0395\x05\x84C\x02\u0380\u0381\x07\x18" +
        "\x02\x02\u0381\u0382\x05\x90I\x02\u0382\u0383\x07\x1A\x02\x02\u0383\u0395" +
        "\x03\x02\x02\x02\u0384\u0385\x07V\x02\x02\u0385\u038A\x05\x92J\x02\u0386" +
        "\u0387\x07\x04\x02\x02\u0387\u0389\x05\x92J\x02\u0388\u0386\x03\x02\x02" +
        "\x02\u0389\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A\u038B" +
        "\x03\x02\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02" +
        "\u038D\u038E\x07W\x02\x02\u038E\u0395\x03\x02\x02\x02\u038F\u0390\x07" +
        "X\x02\x02\u0390\u0391\x05\x88E\x02\u0391\u0392\x07\'\x02\x02\u0392\u0395" +
        "\x03\x02\x02\x02\u0393\u0395\x07\x14\x02\x02\u0394\u0375\x03\x02\x02\x02" +
        "\u0394\u0376\x03\x02\x02\x02\u0394\u0377\x03\x02\x02\x02\u0394\u0378\x03" +
        "\x02\x02\x02\u0394\u037C\x03\x02\x02\x02\u0394\u037F\x03\x02\x02\x02\u0394" +
        "\u0380\x03\x02\x02\x02\u0394\u0384\x03\x02\x02\x02\u0394\u038F\x03\x02" +
        "\x02\x02\u0394\u0393\x03\x02\x02\x02\u0395\x81\x03\x02\x02\x02\u0396\u0398" +
        "\x07Y\x02\x02\u0397\u0396\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02" +
        "\u0398\u0399\x03\x02\x02\x02\u0399\u039E\x07[\x02\x02\u039A\u039B\x07" +
        "Y\x02\x02\u039B\u039D\x07[\x02\x02\u039C\u039A\x03\x02\x02\x02\u039D\u03A0" +
        "\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02" +
        "\u039F\x83\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u03A3\x07" +
        "Y\x02\x02\u03A2\u03A1\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3" +
        "\u03A4\x03\x02\x02\x02\u03A4\u03A6\x07[\x02\x02\u03A5\u03A7\x05\x94K\x02" +
        "\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03AF\x03" +
        "\x02\x02\x02\u03A8\u03A9\x07Y\x02\x02\u03A9\u03AB\x07[\x02\x02\u03AA\u03AC" +
        "\x05\x94K\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02" +
        "\u03AC\u03AE\x03\x02\x02\x02\u03AD\u03A8\x03\x02\x02\x02\u03AE\u03B1\x03" +
        "\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0" +
        "\x85\x03\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B2\u03B4\x07\x18\x02" +
        "\x02\u03B3\u03B5\x05\x88E\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5" +
        "\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B7\x07\x1A\x02\x02" +
        "\u03B7\x87\x03\x02\x02\x02\u03B8\u03BD\x05\x8EH\x02\u03B9\u03BA\x07\x1C" +
        "\x02\x02\u03BA\u03BE\x05\x88E\x02\u03BB\u03BC\x07;\x02\x02\u03BC\u03BE" +
        "\x05\\/\x02\u03BD\u03B9\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD" +
        "\u03BE\x03\x02\x02\x02\u03BE\u03C1\x03\x02\x02\x02\u03BF\u03C1\x05\x8A" +
        "F\x02\u03C0\u03B8\x03\x02\x02\x02\u03C0\u03BF\x03\x02\x02\x02\u03C1\x89" +
        "\x03\x02\x02\x02\u03C2\u03C5\x05\x8CG\x02\u03C3\u03C4\x07\x1C\x02\x02" +
        "\u03C4\u03C6\x05\x8AF\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5\u03C6\x03" +
        "\x02\x02\x02\u03C6\x8B\x03\x02\x02\x02\u03C7\u03C8\x07[\x02\x02\u03C8" +
        "\u03C9\x07\x16\x02\x02\u03C9\u03CA\x05\x8EH\x02\u03CA\x8D\x03\x02\x02" +
        "\x02\u03CB\u03CC\x07\x13\x02\x02\u03CC\u03CD\x05\x82B\x02\u03CD\u03CF" +
        "\x07\x18\x02\x02\u03CE\u03D0\x05\x8AF\x02\u03CF\u03CE\x03\x02\x02\x02" +
        "\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D2\x07" +
        "\x1A\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D5\x05h5\x02\u03D4\u03CB" +
        "\x03\x02\x02\x02\u03D4\u03D3\x03\x02\x02\x02\u03D5\x8F\x03\x02\x02\x02" +
        "\u03D6\u03D8\x05h5\x02\u03D7\u03D6\x03\x02\x02\x02\u03D7\u03D8\x03\x02" +
        "\x02\x02\u03D8\u03DF\x03\x02\x02\x02\u03D9\u03DB\x07\x1C\x02\x02\u03DA" +
        "\u03DC\x05h5\x02\u03DB\u03DA\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02" +
        "\u03DC\u03DE\x03\x02\x02\x02\u03DD\u03D9\x03\x02\x02\x02\u03DE\u03E1\x03" +
        "\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0" +
        "\x91\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2\u03E7\x05h5\x02" +
        "\u03E3\u03E4\x07\x1C\x02\x02\u03E4\u03E6\x05h5\x02\u03E5\u03E3\x03\x02" +
        "\x02\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7" +
        "\u03E8\x03\x02\x02\x02\u03E8\x93\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02" +
        "\x02\u03EA\u03EB\x07V\x02\x02\u03EB\u03F0\x05\x96L\x02\u03EC\u03ED\x07" +
        "\x1C\x02\x02\u03ED\u03EF\x05\x96L\x02\u03EE\u03EC\x03\x02\x02\x02\u03EF" +
        "\u03F2\x03\x02\x02\x02\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03F1\x03\x02" +
        "\x02\x02\u03F1\u03F3\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F3" +
        "\u03F4\x07W\x02\x02\u03F4\x95\x03\x02\x02\x02\u03F5\u03F8\x07\x19\x02" +
        "\x02\u03F6\u03F8\x05h5\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7\u03F6\x03" +
        "\x02\x02\x02\u03F8\x97\x03\x02\x02\x02\u03F9\u03FB\x05\x9AN\x02\u03FA" +
        "\u03FC\x05\x9CO\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02" +
        "\x02\u03FC\x99\x03\x02\x02\x02\u03FD\u0402\x07\\\x02\x02\u03FE\u03FF\x07" +
        "K\x02\x02\u03FF\u0401\x07\\\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401" +
        "\u0404\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402\u0403\x03\x02" +
        "\x02\x02\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0405" +
        "\u03FD\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\x9B\x03\x02\x02" +
        "\x02\u0407\u0408\x07Z\x02\x02\u0408\u0409\x058\x1D\x02\u0409\x9D\x03\x02" +
        "\x02\x02\x86\xA0\xA5\xA9\xB0\xB4\xBC\xBF\xC4\xC9\xCF\xD2\xD6\xE1\xE8\xEF" +
        "\xF2\xFB\xFE\u0102\u010F\u011C\u0129\u012B\u0130\u0133\u0136\u0139\u013E" +
        "\u0145\u014A\u0153\u0159\u015C\u015F\u0162\u0166\u016B\u0170\u0172\u0174" +
        "\u0183\u018C\u0192\u0195\u019A\u019F\u01A4\u01A7\u01AA\u01B3\u01B8\u01C1" +
        "\u01C4\u01C9\u01CF\u01D3\u01DC\u01E1\u01E4\u01E7\u01EB\u01EF\u01F5\u01F8" +
        "\u01FC\u01FF\u0204\u0207\u0214\u021C\u0220\u0228\u0236\u023E\u024D\u0259" +
        "\u0264\u0269\u0272\u0275\u0282\u028D\u0292\u029B\u029E\u02AB\u02B9\u02C4" +
        "\u02CA\u02D4\u02E2\u02ED\u02F2\u0300\u030B\u0310\u0329\u032F\u0336\u0338" +
        "\u033F\u0347\u034B\u0353\u0358\u0360\u036B\u0373\u037C\u038A\u0394\u0397" +
        "\u039E\u03A2\u03A6\u03AB\u03AF\u03B4\u03BD\u03C0\u03C5\u03CF\u03D4\u03D7" +
        "\u03DB\u03DF\u03E7\u03F0\u03F7\u03FB\u0402\u0405";
    modelicaParser._serializedATN = Utils.join([
        modelicaParser._serializedATNSegment0,
        modelicaParser._serializedATNSegment1,
    ], "");
    return modelicaParser;
}(Parser_1.Parser));
exports.modelicaParser = modelicaParser;
var Stored_definitionContext = /** @class */ (function (_super) {
    __extends(Stored_definitionContext, _super);
    function Stored_definitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Stored_definitionContext.prototype.class_definition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Class_definitionContext);
        }
        else {
            return this.getRuleContext(i, Class_definitionContext);
        }
    };
    Stored_definitionContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    Object.defineProperty(Stored_definitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_stored_definition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Stored_definitionContext.prototype.enterRule = function (listener) {
        if (listener.enterStored_definition) {
            listener.enterStored_definition(this);
        }
    };
    // @Override
    Stored_definitionContext.prototype.exitRule = function (listener) {
        if (listener.exitStored_definition) {
            listener.exitStored_definition(this);
        }
    };
    // @Override
    Stored_definitionContext.prototype.accept = function (visitor) {
        if (visitor.visitStored_definition) {
            return visitor.visitStored_definition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Stored_definitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Stored_definitionContext = Stored_definitionContext;
var Class_definitionContext = /** @class */ (function (_super) {
    __extends(Class_definitionContext, _super);
    function Class_definitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Class_definitionContext.prototype.class_prefixes = function () {
        return this.getRuleContext(0, Class_prefixesContext);
    };
    Class_definitionContext.prototype.class_specifier = function () {
        return this.getRuleContext(0, Class_specifierContext);
    };
    Object.defineProperty(Class_definitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_class_definition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Class_definitionContext.prototype.enterRule = function (listener) {
        if (listener.enterClass_definition) {
            listener.enterClass_definition(this);
        }
    };
    // @Override
    Class_definitionContext.prototype.exitRule = function (listener) {
        if (listener.exitClass_definition) {
            listener.exitClass_definition(this);
        }
    };
    // @Override
    Class_definitionContext.prototype.accept = function (visitor) {
        if (visitor.visitClass_definition) {
            return visitor.visitClass_definition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Class_definitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Class_definitionContext = Class_definitionContext;
var Class_specifierContext = /** @class */ (function (_super) {
    __extends(Class_specifierContext, _super);
    function Class_specifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Class_specifierContext.prototype.long_class_specifier = function () {
        return this.tryGetRuleContext(0, Long_class_specifierContext);
    };
    Class_specifierContext.prototype.short_class_specifier = function () {
        return this.tryGetRuleContext(0, Short_class_specifierContext);
    };
    Class_specifierContext.prototype.der_class_specifier = function () {
        return this.tryGetRuleContext(0, Der_class_specifierContext);
    };
    Object.defineProperty(Class_specifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_class_specifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Class_specifierContext.prototype.enterRule = function (listener) {
        if (listener.enterClass_specifier) {
            listener.enterClass_specifier(this);
        }
    };
    // @Override
    Class_specifierContext.prototype.exitRule = function (listener) {
        if (listener.exitClass_specifier) {
            listener.exitClass_specifier(this);
        }
    };
    // @Override
    Class_specifierContext.prototype.accept = function (visitor) {
        if (visitor.visitClass_specifier) {
            return visitor.visitClass_specifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Class_specifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Class_specifierContext = Class_specifierContext;
var Class_prefixesContext = /** @class */ (function (_super) {
    __extends(Class_prefixesContext, _super);
    function Class_prefixesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Class_prefixesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_class_prefixes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Class_prefixesContext.prototype.enterRule = function (listener) {
        if (listener.enterClass_prefixes) {
            listener.enterClass_prefixes(this);
        }
    };
    // @Override
    Class_prefixesContext.prototype.exitRule = function (listener) {
        if (listener.exitClass_prefixes) {
            listener.exitClass_prefixes(this);
        }
    };
    // @Override
    Class_prefixesContext.prototype.accept = function (visitor) {
        if (visitor.visitClass_prefixes) {
            return visitor.visitClass_prefixes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Class_prefixesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Class_prefixesContext = Class_prefixesContext;
var Long_class_specifierContext = /** @class */ (function (_super) {
    __extends(Long_class_specifierContext, _super);
    function Long_class_specifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Long_class_specifierContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(modelicaParser.IDENT);
        }
        else {
            return this.getToken(modelicaParser.IDENT, i);
        }
    };
    Long_class_specifierContext.prototype.string_comment = function () {
        return this.getRuleContext(0, String_commentContext);
    };
    Long_class_specifierContext.prototype.composition = function () {
        return this.getRuleContext(0, CompositionContext);
    };
    Long_class_specifierContext.prototype.class_modification = function () {
        return this.tryGetRuleContext(0, Class_modificationContext);
    };
    Object.defineProperty(Long_class_specifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_long_class_specifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Long_class_specifierContext.prototype.enterRule = function (listener) {
        if (listener.enterLong_class_specifier) {
            listener.enterLong_class_specifier(this);
        }
    };
    // @Override
    Long_class_specifierContext.prototype.exitRule = function (listener) {
        if (listener.exitLong_class_specifier) {
            listener.exitLong_class_specifier(this);
        }
    };
    // @Override
    Long_class_specifierContext.prototype.accept = function (visitor) {
        if (visitor.visitLong_class_specifier) {
            return visitor.visitLong_class_specifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Long_class_specifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Long_class_specifierContext = Long_class_specifierContext;
var Short_class_specifierContext = /** @class */ (function (_super) {
    __extends(Short_class_specifierContext, _super);
    function Short_class_specifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Short_class_specifierContext.prototype.IDENT = function () { return this.getToken(modelicaParser.IDENT, 0); };
    Short_class_specifierContext.prototype.base_prefix = function () {
        return this.tryGetRuleContext(0, Base_prefixContext);
    };
    Short_class_specifierContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Short_class_specifierContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    Short_class_specifierContext.prototype.array_subscripts = function () {
        return this.tryGetRuleContext(0, Array_subscriptsContext);
    };
    Short_class_specifierContext.prototype.class_modification = function () {
        return this.tryGetRuleContext(0, Class_modificationContext);
    };
    Short_class_specifierContext.prototype.enum_list = function () {
        return this.tryGetRuleContext(0, Enum_listContext);
    };
    Object.defineProperty(Short_class_specifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_short_class_specifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Short_class_specifierContext.prototype.enterRule = function (listener) {
        if (listener.enterShort_class_specifier) {
            listener.enterShort_class_specifier(this);
        }
    };
    // @Override
    Short_class_specifierContext.prototype.exitRule = function (listener) {
        if (listener.exitShort_class_specifier) {
            listener.exitShort_class_specifier(this);
        }
    };
    // @Override
    Short_class_specifierContext.prototype.accept = function (visitor) {
        if (visitor.visitShort_class_specifier) {
            return visitor.visitShort_class_specifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Short_class_specifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Short_class_specifierContext = Short_class_specifierContext;
var Der_class_specifierContext = /** @class */ (function (_super) {
    __extends(Der_class_specifierContext, _super);
    function Der_class_specifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Der_class_specifierContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(modelicaParser.IDENT);
        }
        else {
            return this.getToken(modelicaParser.IDENT, i);
        }
    };
    Der_class_specifierContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Der_class_specifierContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    Object.defineProperty(Der_class_specifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_der_class_specifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Der_class_specifierContext.prototype.enterRule = function (listener) {
        if (listener.enterDer_class_specifier) {
            listener.enterDer_class_specifier(this);
        }
    };
    // @Override
    Der_class_specifierContext.prototype.exitRule = function (listener) {
        if (listener.exitDer_class_specifier) {
            listener.exitDer_class_specifier(this);
        }
    };
    // @Override
    Der_class_specifierContext.prototype.accept = function (visitor) {
        if (visitor.visitDer_class_specifier) {
            return visitor.visitDer_class_specifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Der_class_specifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Der_class_specifierContext = Der_class_specifierContext;
var Base_prefixContext = /** @class */ (function (_super) {
    __extends(Base_prefixContext, _super);
    function Base_prefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Base_prefixContext.prototype.type_prefix = function () {
        return this.getRuleContext(0, Type_prefixContext);
    };
    Object.defineProperty(Base_prefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_base_prefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Base_prefixContext.prototype.enterRule = function (listener) {
        if (listener.enterBase_prefix) {
            listener.enterBase_prefix(this);
        }
    };
    // @Override
    Base_prefixContext.prototype.exitRule = function (listener) {
        if (listener.exitBase_prefix) {
            listener.exitBase_prefix(this);
        }
    };
    // @Override
    Base_prefixContext.prototype.accept = function (visitor) {
        if (visitor.visitBase_prefix) {
            return visitor.visitBase_prefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Base_prefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Base_prefixContext = Base_prefixContext;
var Enum_listContext = /** @class */ (function (_super) {
    __extends(Enum_listContext, _super);
    function Enum_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_listContext.prototype.enumeration_literal = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Enumeration_literalContext);
        }
        else {
            return this.getRuleContext(i, Enumeration_literalContext);
        }
    };
    Object.defineProperty(Enum_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_enum_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_listContext.prototype.enterRule = function (listener) {
        if (listener.enterEnum_list) {
            listener.enterEnum_list(this);
        }
    };
    // @Override
    Enum_listContext.prototype.exitRule = function (listener) {
        if (listener.exitEnum_list) {
            listener.exitEnum_list(this);
        }
    };
    // @Override
    Enum_listContext.prototype.accept = function (visitor) {
        if (visitor.visitEnum_list) {
            return visitor.visitEnum_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_listContext = Enum_listContext;
var Enumeration_literalContext = /** @class */ (function (_super) {
    __extends(Enumeration_literalContext, _super);
    function Enumeration_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enumeration_literalContext.prototype.IDENT = function () { return this.getToken(modelicaParser.IDENT, 0); };
    Enumeration_literalContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    Object.defineProperty(Enumeration_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_enumeration_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enumeration_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumeration_literal) {
            listener.enterEnumeration_literal(this);
        }
    };
    // @Override
    Enumeration_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumeration_literal) {
            listener.exitEnumeration_literal(this);
        }
    };
    // @Override
    Enumeration_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumeration_literal) {
            return visitor.visitEnumeration_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enumeration_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enumeration_literalContext = Enumeration_literalContext;
var CompositionContext = /** @class */ (function (_super) {
    __extends(CompositionContext, _super);
    function CompositionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompositionContext.prototype.element_list = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Element_listContext);
        }
        else {
            return this.getRuleContext(i, Element_listContext);
        }
    };
    CompositionContext.prototype.equation_section = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Equation_sectionContext);
        }
        else {
            return this.getRuleContext(i, Equation_sectionContext);
        }
    };
    CompositionContext.prototype.algorithm_section = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Algorithm_sectionContext);
        }
        else {
            return this.getRuleContext(i, Algorithm_sectionContext);
        }
    };
    CompositionContext.prototype.annotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    };
    CompositionContext.prototype.language_specification = function () {
        return this.tryGetRuleContext(0, Language_specificationContext);
    };
    CompositionContext.prototype.external_function_call = function () {
        return this.tryGetRuleContext(0, External_function_callContext);
    };
    Object.defineProperty(CompositionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_composition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompositionContext.prototype.enterRule = function (listener) {
        if (listener.enterComposition) {
            listener.enterComposition(this);
        }
    };
    // @Override
    CompositionContext.prototype.exitRule = function (listener) {
        if (listener.exitComposition) {
            listener.exitComposition(this);
        }
    };
    // @Override
    CompositionContext.prototype.accept = function (visitor) {
        if (visitor.visitComposition) {
            return visitor.visitComposition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompositionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompositionContext = CompositionContext;
var Language_specificationContext = /** @class */ (function (_super) {
    __extends(Language_specificationContext, _super);
    function Language_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Language_specificationContext.prototype.STRING = function () { return this.getToken(modelicaParser.STRING, 0); };
    Object.defineProperty(Language_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_language_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Language_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterLanguage_specification) {
            listener.enterLanguage_specification(this);
        }
    };
    // @Override
    Language_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitLanguage_specification) {
            listener.exitLanguage_specification(this);
        }
    };
    // @Override
    Language_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitLanguage_specification) {
            return visitor.visitLanguage_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Language_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Language_specificationContext = Language_specificationContext;
var External_function_callContext = /** @class */ (function (_super) {
    __extends(External_function_callContext, _super);
    function External_function_callContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    External_function_callContext.prototype.IDENT = function () { return this.getToken(modelicaParser.IDENT, 0); };
    External_function_callContext.prototype.component_reference = function () {
        return this.tryGetRuleContext(0, Component_referenceContext);
    };
    External_function_callContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    Object.defineProperty(External_function_callContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_external_function_call; },
        enumerable: true,
        configurable: true
    });
    // @Override
    External_function_callContext.prototype.enterRule = function (listener) {
        if (listener.enterExternal_function_call) {
            listener.enterExternal_function_call(this);
        }
    };
    // @Override
    External_function_callContext.prototype.exitRule = function (listener) {
        if (listener.exitExternal_function_call) {
            listener.exitExternal_function_call(this);
        }
    };
    // @Override
    External_function_callContext.prototype.accept = function (visitor) {
        if (visitor.visitExternal_function_call) {
            return visitor.visitExternal_function_call(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return External_function_callContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.External_function_callContext = External_function_callContext;
var Element_listContext = /** @class */ (function (_super) {
    __extends(Element_listContext, _super);
    function Element_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Element_listContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    Object.defineProperty(Element_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_element_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Element_listContext.prototype.enterRule = function (listener) {
        if (listener.enterElement_list) {
            listener.enterElement_list(this);
        }
    };
    // @Override
    Element_listContext.prototype.exitRule = function (listener) {
        if (listener.exitElement_list) {
            listener.exitElement_list(this);
        }
    };
    // @Override
    Element_listContext.prototype.accept = function (visitor) {
        if (visitor.visitElement_list) {
            return visitor.visitElement_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Element_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Element_listContext = Element_listContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.import_clause = function () {
        return this.tryGetRuleContext(0, Import_clauseContext);
    };
    ElementContext.prototype.extends_clause = function () {
        return this.tryGetRuleContext(0, Extends_clauseContext);
    };
    ElementContext.prototype.class_definition = function () {
        return this.tryGetRuleContext(0, Class_definitionContext);
    };
    ElementContext.prototype.component_clause = function () {
        return this.tryGetRuleContext(0, Component_clauseContext);
    };
    ElementContext.prototype.constraining_clause = function () {
        return this.tryGetRuleContext(0, Constraining_clauseContext);
    };
    ElementContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementContext.prototype.enterRule = function (listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    };
    // @Override
    ElementContext.prototype.exitRule = function (listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    };
    // @Override
    ElementContext.prototype.accept = function (visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementContext = ElementContext;
var Import_clauseContext = /** @class */ (function (_super) {
    __extends(Import_clauseContext, _super);
    function Import_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Import_clauseContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    Import_clauseContext.prototype.IDENT = function () { return this.tryGetToken(modelicaParser.IDENT, 0); };
    Import_clauseContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Import_clauseContext.prototype.import_list = function () {
        return this.tryGetRuleContext(0, Import_listContext);
    };
    Object.defineProperty(Import_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_import_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Import_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterImport_clause) {
            listener.enterImport_clause(this);
        }
    };
    // @Override
    Import_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitImport_clause) {
            listener.exitImport_clause(this);
        }
    };
    // @Override
    Import_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitImport_clause) {
            return visitor.visitImport_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Import_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Import_clauseContext = Import_clauseContext;
var Import_listContext = /** @class */ (function (_super) {
    __extends(Import_listContext, _super);
    function Import_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Import_listContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(modelicaParser.IDENT);
        }
        else {
            return this.getToken(modelicaParser.IDENT, i);
        }
    };
    Object.defineProperty(Import_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_import_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Import_listContext.prototype.enterRule = function (listener) {
        if (listener.enterImport_list) {
            listener.enterImport_list(this);
        }
    };
    // @Override
    Import_listContext.prototype.exitRule = function (listener) {
        if (listener.exitImport_list) {
            listener.exitImport_list(this);
        }
    };
    // @Override
    Import_listContext.prototype.accept = function (visitor) {
        if (visitor.visitImport_list) {
            return visitor.visitImport_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Import_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Import_listContext = Import_listContext;
var Extends_clauseContext = /** @class */ (function (_super) {
    __extends(Extends_clauseContext, _super);
    function Extends_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Extends_clauseContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Extends_clauseContext.prototype.class_modification = function () {
        return this.tryGetRuleContext(0, Class_modificationContext);
    };
    Extends_clauseContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    Object.defineProperty(Extends_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_extends_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Extends_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterExtends_clause) {
            listener.enterExtends_clause(this);
        }
    };
    // @Override
    Extends_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitExtends_clause) {
            listener.exitExtends_clause(this);
        }
    };
    // @Override
    Extends_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitExtends_clause) {
            return visitor.visitExtends_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Extends_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Extends_clauseContext = Extends_clauseContext;
var Constraining_clauseContext = /** @class */ (function (_super) {
    __extends(Constraining_clauseContext, _super);
    function Constraining_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Constraining_clauseContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Constraining_clauseContext.prototype.class_modification = function () {
        return this.tryGetRuleContext(0, Class_modificationContext);
    };
    Object.defineProperty(Constraining_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_constraining_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Constraining_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterConstraining_clause) {
            listener.enterConstraining_clause(this);
        }
    };
    // @Override
    Constraining_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitConstraining_clause) {
            listener.exitConstraining_clause(this);
        }
    };
    // @Override
    Constraining_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitConstraining_clause) {
            return visitor.visitConstraining_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Constraining_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Constraining_clauseContext = Constraining_clauseContext;
var Component_clauseContext = /** @class */ (function (_super) {
    __extends(Component_clauseContext, _super);
    function Component_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Component_clauseContext.prototype.type_prefix = function () {
        return this.getRuleContext(0, Type_prefixContext);
    };
    Component_clauseContext.prototype.type_specifier = function () {
        return this.getRuleContext(0, Type_specifierContext);
    };
    Component_clauseContext.prototype.component_list = function () {
        return this.getRuleContext(0, Component_listContext);
    };
    Component_clauseContext.prototype.array_subscripts = function () {
        return this.tryGetRuleContext(0, Array_subscriptsContext);
    };
    Object.defineProperty(Component_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_component_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Component_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterComponent_clause) {
            listener.enterComponent_clause(this);
        }
    };
    // @Override
    Component_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitComponent_clause) {
            listener.exitComponent_clause(this);
        }
    };
    // @Override
    Component_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitComponent_clause) {
            return visitor.visitComponent_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Component_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Component_clauseContext = Component_clauseContext;
var Type_prefixContext = /** @class */ (function (_super) {
    __extends(Type_prefixContext, _super);
    function Type_prefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Type_prefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_type_prefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_prefixContext.prototype.enterRule = function (listener) {
        if (listener.enterType_prefix) {
            listener.enterType_prefix(this);
        }
    };
    // @Override
    Type_prefixContext.prototype.exitRule = function (listener) {
        if (listener.exitType_prefix) {
            listener.exitType_prefix(this);
        }
    };
    // @Override
    Type_prefixContext.prototype.accept = function (visitor) {
        if (visitor.visitType_prefix) {
            return visitor.visitType_prefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_prefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_prefixContext = Type_prefixContext;
var Type_specifierContext = /** @class */ (function (_super) {
    __extends(Type_specifierContext, _super);
    function Type_specifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_specifierContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Object.defineProperty(Type_specifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_type_specifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_specifierContext.prototype.enterRule = function (listener) {
        if (listener.enterType_specifier) {
            listener.enterType_specifier(this);
        }
    };
    // @Override
    Type_specifierContext.prototype.exitRule = function (listener) {
        if (listener.exitType_specifier) {
            listener.exitType_specifier(this);
        }
    };
    // @Override
    Type_specifierContext.prototype.accept = function (visitor) {
        if (visitor.visitType_specifier) {
            return visitor.visitType_specifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_specifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_specifierContext = Type_specifierContext;
var Component_listContext = /** @class */ (function (_super) {
    __extends(Component_listContext, _super);
    function Component_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Component_listContext.prototype.component_declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Component_declarationContext);
        }
        else {
            return this.getRuleContext(i, Component_declarationContext);
        }
    };
    Object.defineProperty(Component_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_component_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Component_listContext.prototype.enterRule = function (listener) {
        if (listener.enterComponent_list) {
            listener.enterComponent_list(this);
        }
    };
    // @Override
    Component_listContext.prototype.exitRule = function (listener) {
        if (listener.exitComponent_list) {
            listener.exitComponent_list(this);
        }
    };
    // @Override
    Component_listContext.prototype.accept = function (visitor) {
        if (visitor.visitComponent_list) {
            return visitor.visitComponent_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Component_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Component_listContext = Component_listContext;
var Component_declarationContext = /** @class */ (function (_super) {
    __extends(Component_declarationContext, _super);
    function Component_declarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Component_declarationContext.prototype.declaration = function () {
        return this.getRuleContext(0, DeclarationContext);
    };
    Component_declarationContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    Component_declarationContext.prototype.condition_attribute = function () {
        return this.tryGetRuleContext(0, Condition_attributeContext);
    };
    Object.defineProperty(Component_declarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_component_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Component_declarationContext.prototype.enterRule = function (listener) {
        if (listener.enterComponent_declaration) {
            listener.enterComponent_declaration(this);
        }
    };
    // @Override
    Component_declarationContext.prototype.exitRule = function (listener) {
        if (listener.exitComponent_declaration) {
            listener.exitComponent_declaration(this);
        }
    };
    // @Override
    Component_declarationContext.prototype.accept = function (visitor) {
        if (visitor.visitComponent_declaration) {
            return visitor.visitComponent_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Component_declarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Component_declarationContext = Component_declarationContext;
var Condition_attributeContext = /** @class */ (function (_super) {
    __extends(Condition_attributeContext, _super);
    function Condition_attributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Condition_attributeContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Condition_attributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_condition_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Condition_attributeContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition_attribute) {
            listener.enterCondition_attribute(this);
        }
    };
    // @Override
    Condition_attributeContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition_attribute) {
            listener.exitCondition_attribute(this);
        }
    };
    // @Override
    Condition_attributeContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition_attribute) {
            return visitor.visitCondition_attribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Condition_attributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Condition_attributeContext = Condition_attributeContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.IDENT = function () { return this.getToken(modelicaParser.IDENT, 0); };
    DeclarationContext.prototype.array_subscripts = function () {
        return this.tryGetRuleContext(0, Array_subscriptsContext);
    };
    DeclarationContext.prototype.modification = function () {
        return this.tryGetRuleContext(0, ModificationContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationContext = DeclarationContext;
var ModificationContext = /** @class */ (function (_super) {
    __extends(ModificationContext, _super);
    function ModificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModificationContext.prototype.class_modification = function () {
        return this.tryGetRuleContext(0, Class_modificationContext);
    };
    ModificationContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ModificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_modification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModificationContext.prototype.enterRule = function (listener) {
        if (listener.enterModification) {
            listener.enterModification(this);
        }
    };
    // @Override
    ModificationContext.prototype.exitRule = function (listener) {
        if (listener.exitModification) {
            listener.exitModification(this);
        }
    };
    // @Override
    ModificationContext.prototype.accept = function (visitor) {
        if (visitor.visitModification) {
            return visitor.visitModification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModificationContext = ModificationContext;
var Class_modificationContext = /** @class */ (function (_super) {
    __extends(Class_modificationContext, _super);
    function Class_modificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Class_modificationContext.prototype.argument_list = function () {
        return this.tryGetRuleContext(0, Argument_listContext);
    };
    Object.defineProperty(Class_modificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_class_modification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Class_modificationContext.prototype.enterRule = function (listener) {
        if (listener.enterClass_modification) {
            listener.enterClass_modification(this);
        }
    };
    // @Override
    Class_modificationContext.prototype.exitRule = function (listener) {
        if (listener.exitClass_modification) {
            listener.exitClass_modification(this);
        }
    };
    // @Override
    Class_modificationContext.prototype.accept = function (visitor) {
        if (visitor.visitClass_modification) {
            return visitor.visitClass_modification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Class_modificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Class_modificationContext = Class_modificationContext;
var Argument_listContext = /** @class */ (function (_super) {
    __extends(Argument_listContext, _super);
    function Argument_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Argument_listContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    Object.defineProperty(Argument_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_argument_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Argument_listContext.prototype.enterRule = function (listener) {
        if (listener.enterArgument_list) {
            listener.enterArgument_list(this);
        }
    };
    // @Override
    Argument_listContext.prototype.exitRule = function (listener) {
        if (listener.exitArgument_list) {
            listener.exitArgument_list(this);
        }
    };
    // @Override
    Argument_listContext.prototype.accept = function (visitor) {
        if (visitor.visitArgument_list) {
            return visitor.visitArgument_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Argument_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Argument_listContext = Argument_listContext;
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.element_modification_or_replaceable = function () {
        return this.tryGetRuleContext(0, Element_modification_or_replaceableContext);
    };
    ArgumentContext.prototype.element_redeclaration = function () {
        return this.tryGetRuleContext(0, Element_redeclarationContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentContext = ArgumentContext;
var Element_modification_or_replaceableContext = /** @class */ (function (_super) {
    __extends(Element_modification_or_replaceableContext, _super);
    function Element_modification_or_replaceableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Element_modification_or_replaceableContext.prototype.element_modification = function () {
        return this.tryGetRuleContext(0, Element_modificationContext);
    };
    Element_modification_or_replaceableContext.prototype.element_replaceable = function () {
        return this.tryGetRuleContext(0, Element_replaceableContext);
    };
    Object.defineProperty(Element_modification_or_replaceableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_element_modification_or_replaceable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Element_modification_or_replaceableContext.prototype.enterRule = function (listener) {
        if (listener.enterElement_modification_or_replaceable) {
            listener.enterElement_modification_or_replaceable(this);
        }
    };
    // @Override
    Element_modification_or_replaceableContext.prototype.exitRule = function (listener) {
        if (listener.exitElement_modification_or_replaceable) {
            listener.exitElement_modification_or_replaceable(this);
        }
    };
    // @Override
    Element_modification_or_replaceableContext.prototype.accept = function (visitor) {
        if (visitor.visitElement_modification_or_replaceable) {
            return visitor.visitElement_modification_or_replaceable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Element_modification_or_replaceableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Element_modification_or_replaceableContext = Element_modification_or_replaceableContext;
var Element_modificationContext = /** @class */ (function (_super) {
    __extends(Element_modificationContext, _super);
    function Element_modificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Element_modificationContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Element_modificationContext.prototype.string_comment = function () {
        return this.getRuleContext(0, String_commentContext);
    };
    Element_modificationContext.prototype.modification = function () {
        return this.tryGetRuleContext(0, ModificationContext);
    };
    Object.defineProperty(Element_modificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_element_modification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Element_modificationContext.prototype.enterRule = function (listener) {
        if (listener.enterElement_modification) {
            listener.enterElement_modification(this);
        }
    };
    // @Override
    Element_modificationContext.prototype.exitRule = function (listener) {
        if (listener.exitElement_modification) {
            listener.exitElement_modification(this);
        }
    };
    // @Override
    Element_modificationContext.prototype.accept = function (visitor) {
        if (visitor.visitElement_modification) {
            return visitor.visitElement_modification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Element_modificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Element_modificationContext = Element_modificationContext;
var Element_redeclarationContext = /** @class */ (function (_super) {
    __extends(Element_redeclarationContext, _super);
    function Element_redeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Element_redeclarationContext.prototype.element_replaceable = function () {
        return this.tryGetRuleContext(0, Element_replaceableContext);
    };
    Element_redeclarationContext.prototype.short_class_definition = function () {
        return this.tryGetRuleContext(0, Short_class_definitionContext);
    };
    Element_redeclarationContext.prototype.component_clause1 = function () {
        return this.tryGetRuleContext(0, Component_clause1Context);
    };
    Object.defineProperty(Element_redeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_element_redeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Element_redeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterElement_redeclaration) {
            listener.enterElement_redeclaration(this);
        }
    };
    // @Override
    Element_redeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitElement_redeclaration) {
            listener.exitElement_redeclaration(this);
        }
    };
    // @Override
    Element_redeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitElement_redeclaration) {
            return visitor.visitElement_redeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Element_redeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Element_redeclarationContext = Element_redeclarationContext;
var Element_replaceableContext = /** @class */ (function (_super) {
    __extends(Element_replaceableContext, _super);
    function Element_replaceableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Element_replaceableContext.prototype.short_class_definition = function () {
        return this.tryGetRuleContext(0, Short_class_definitionContext);
    };
    Element_replaceableContext.prototype.component_clause1 = function () {
        return this.tryGetRuleContext(0, Component_clause1Context);
    };
    Element_replaceableContext.prototype.constraining_clause = function () {
        return this.tryGetRuleContext(0, Constraining_clauseContext);
    };
    Object.defineProperty(Element_replaceableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_element_replaceable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Element_replaceableContext.prototype.enterRule = function (listener) {
        if (listener.enterElement_replaceable) {
            listener.enterElement_replaceable(this);
        }
    };
    // @Override
    Element_replaceableContext.prototype.exitRule = function (listener) {
        if (listener.exitElement_replaceable) {
            listener.exitElement_replaceable(this);
        }
    };
    // @Override
    Element_replaceableContext.prototype.accept = function (visitor) {
        if (visitor.visitElement_replaceable) {
            return visitor.visitElement_replaceable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Element_replaceableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Element_replaceableContext = Element_replaceableContext;
var Component_clause1Context = /** @class */ (function (_super) {
    __extends(Component_clause1Context, _super);
    function Component_clause1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Component_clause1Context.prototype.type_prefix = function () {
        return this.getRuleContext(0, Type_prefixContext);
    };
    Component_clause1Context.prototype.type_specifier = function () {
        return this.getRuleContext(0, Type_specifierContext);
    };
    Component_clause1Context.prototype.component_declaration1 = function () {
        return this.getRuleContext(0, Component_declaration1Context);
    };
    Object.defineProperty(Component_clause1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_component_clause1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Component_clause1Context.prototype.enterRule = function (listener) {
        if (listener.enterComponent_clause1) {
            listener.enterComponent_clause1(this);
        }
    };
    // @Override
    Component_clause1Context.prototype.exitRule = function (listener) {
        if (listener.exitComponent_clause1) {
            listener.exitComponent_clause1(this);
        }
    };
    // @Override
    Component_clause1Context.prototype.accept = function (visitor) {
        if (visitor.visitComponent_clause1) {
            return visitor.visitComponent_clause1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Component_clause1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Component_clause1Context = Component_clause1Context;
var Component_declaration1Context = /** @class */ (function (_super) {
    __extends(Component_declaration1Context, _super);
    function Component_declaration1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Component_declaration1Context.prototype.declaration = function () {
        return this.getRuleContext(0, DeclarationContext);
    };
    Component_declaration1Context.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    Object.defineProperty(Component_declaration1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_component_declaration1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Component_declaration1Context.prototype.enterRule = function (listener) {
        if (listener.enterComponent_declaration1) {
            listener.enterComponent_declaration1(this);
        }
    };
    // @Override
    Component_declaration1Context.prototype.exitRule = function (listener) {
        if (listener.exitComponent_declaration1) {
            listener.exitComponent_declaration1(this);
        }
    };
    // @Override
    Component_declaration1Context.prototype.accept = function (visitor) {
        if (visitor.visitComponent_declaration1) {
            return visitor.visitComponent_declaration1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Component_declaration1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Component_declaration1Context = Component_declaration1Context;
var Short_class_definitionContext = /** @class */ (function (_super) {
    __extends(Short_class_definitionContext, _super);
    function Short_class_definitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Short_class_definitionContext.prototype.class_prefixes = function () {
        return this.getRuleContext(0, Class_prefixesContext);
    };
    Short_class_definitionContext.prototype.short_class_specifier = function () {
        return this.getRuleContext(0, Short_class_specifierContext);
    };
    Object.defineProperty(Short_class_definitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_short_class_definition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Short_class_definitionContext.prototype.enterRule = function (listener) {
        if (listener.enterShort_class_definition) {
            listener.enterShort_class_definition(this);
        }
    };
    // @Override
    Short_class_definitionContext.prototype.exitRule = function (listener) {
        if (listener.exitShort_class_definition) {
            listener.exitShort_class_definition(this);
        }
    };
    // @Override
    Short_class_definitionContext.prototype.accept = function (visitor) {
        if (visitor.visitShort_class_definition) {
            return visitor.visitShort_class_definition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Short_class_definitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Short_class_definitionContext = Short_class_definitionContext;
var Equation_sectionContext = /** @class */ (function (_super) {
    __extends(Equation_sectionContext, _super);
    function Equation_sectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Equation_sectionContext.prototype.equation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquationContext);
        }
        else {
            return this.getRuleContext(i, EquationContext);
        }
    };
    Object.defineProperty(Equation_sectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_equation_section; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Equation_sectionContext.prototype.enterRule = function (listener) {
        if (listener.enterEquation_section) {
            listener.enterEquation_section(this);
        }
    };
    // @Override
    Equation_sectionContext.prototype.exitRule = function (listener) {
        if (listener.exitEquation_section) {
            listener.exitEquation_section(this);
        }
    };
    // @Override
    Equation_sectionContext.prototype.accept = function (visitor) {
        if (visitor.visitEquation_section) {
            return visitor.visitEquation_section(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Equation_sectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Equation_sectionContext = Equation_sectionContext;
var Algorithm_sectionContext = /** @class */ (function (_super) {
    __extends(Algorithm_sectionContext, _super);
    function Algorithm_sectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Algorithm_sectionContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Algorithm_sectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_algorithm_section; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Algorithm_sectionContext.prototype.enterRule = function (listener) {
        if (listener.enterAlgorithm_section) {
            listener.enterAlgorithm_section(this);
        }
    };
    // @Override
    Algorithm_sectionContext.prototype.exitRule = function (listener) {
        if (listener.exitAlgorithm_section) {
            listener.exitAlgorithm_section(this);
        }
    };
    // @Override
    Algorithm_sectionContext.prototype.accept = function (visitor) {
        if (visitor.visitAlgorithm_section) {
            return visitor.visitAlgorithm_section(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Algorithm_sectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Algorithm_sectionContext = Algorithm_sectionContext;
var EquationContext = /** @class */ (function (_super) {
    __extends(EquationContext, _super);
    function EquationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquationContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    EquationContext.prototype.simple_expression = function () {
        return this.tryGetRuleContext(0, Simple_expressionContext);
    };
    EquationContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    EquationContext.prototype.if_equation = function () {
        return this.tryGetRuleContext(0, If_equationContext);
    };
    EquationContext.prototype.for_equation = function () {
        return this.tryGetRuleContext(0, For_equationContext);
    };
    EquationContext.prototype.connect_clause = function () {
        return this.tryGetRuleContext(0, Connect_clauseContext);
    };
    EquationContext.prototype.when_equation = function () {
        return this.tryGetRuleContext(0, When_equationContext);
    };
    EquationContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    EquationContext.prototype.function_call_args = function () {
        return this.tryGetRuleContext(0, Function_call_argsContext);
    };
    Object.defineProperty(EquationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_equation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquationContext.prototype.enterRule = function (listener) {
        if (listener.enterEquation) {
            listener.enterEquation(this);
        }
    };
    // @Override
    EquationContext.prototype.exitRule = function (listener) {
        if (listener.exitEquation) {
            listener.exitEquation(this);
        }
    };
    // @Override
    EquationContext.prototype.accept = function (visitor) {
        if (visitor.visitEquation) {
            return visitor.visitEquation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquationContext = EquationContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.comment = function () {
        return this.getRuleContext(0, CommentContext);
    };
    StatementContext.prototype.component_reference = function () {
        return this.tryGetRuleContext(0, Component_referenceContext);
    };
    StatementContext.prototype.output_expression_list = function () {
        return this.tryGetRuleContext(0, Output_expression_listContext);
    };
    StatementContext.prototype.function_call_args = function () {
        return this.tryGetRuleContext(0, Function_call_argsContext);
    };
    StatementContext.prototype.if_statement = function () {
        return this.tryGetRuleContext(0, If_statementContext);
    };
    StatementContext.prototype.for_statement = function () {
        return this.tryGetRuleContext(0, For_statementContext);
    };
    StatementContext.prototype.while_statement = function () {
        return this.tryGetRuleContext(0, While_statementContext);
    };
    StatementContext.prototype.when_statement = function () {
        return this.tryGetRuleContext(0, When_statementContext);
    };
    StatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementContext = StatementContext;
var If_equationContext = /** @class */ (function (_super) {
    __extends(If_equationContext, _super);
    function If_equationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_equationContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    If_equationContext.prototype.equation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquationContext);
        }
        else {
            return this.getRuleContext(i, EquationContext);
        }
    };
    Object.defineProperty(If_equationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_if_equation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_equationContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_equation) {
            listener.enterIf_equation(this);
        }
    };
    // @Override
    If_equationContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_equation) {
            listener.exitIf_equation(this);
        }
    };
    // @Override
    If_equationContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_equation) {
            return visitor.visitIf_equation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_equationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_equationContext = If_equationContext;
var If_statementContext = /** @class */ (function (_super) {
    __extends(If_statementContext, _super);
    function If_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_statementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    If_statementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(If_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_if_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterIf_statement) {
            listener.enterIf_statement(this);
        }
    };
    // @Override
    If_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitIf_statement) {
            listener.exitIf_statement(this);
        }
    };
    // @Override
    If_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitIf_statement) {
            return visitor.visitIf_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_statementContext = If_statementContext;
var For_equationContext = /** @class */ (function (_super) {
    __extends(For_equationContext, _super);
    function For_equationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_equationContext.prototype.for_indices = function () {
        return this.getRuleContext(0, For_indicesContext);
    };
    For_equationContext.prototype.equation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquationContext);
        }
        else {
            return this.getRuleContext(i, EquationContext);
        }
    };
    Object.defineProperty(For_equationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_for_equation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_equationContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_equation) {
            listener.enterFor_equation(this);
        }
    };
    // @Override
    For_equationContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_equation) {
            listener.exitFor_equation(this);
        }
    };
    // @Override
    For_equationContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_equation) {
            return visitor.visitFor_equation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_equationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_equationContext = For_equationContext;
var For_statementContext = /** @class */ (function (_super) {
    __extends(For_statementContext, _super);
    function For_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_statementContext.prototype.for_indices = function () {
        return this.getRuleContext(0, For_indicesContext);
    };
    For_statementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(For_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_for_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_statement) {
            listener.enterFor_statement(this);
        }
    };
    // @Override
    For_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_statement) {
            listener.exitFor_statement(this);
        }
    };
    // @Override
    For_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_statement) {
            return visitor.visitFor_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_statementContext = For_statementContext;
var For_indicesContext = /** @class */ (function (_super) {
    __extends(For_indicesContext, _super);
    function For_indicesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_indicesContext.prototype.for_index = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(For_indexContext);
        }
        else {
            return this.getRuleContext(i, For_indexContext);
        }
    };
    Object.defineProperty(For_indicesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_for_indices; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_indicesContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_indices) {
            listener.enterFor_indices(this);
        }
    };
    // @Override
    For_indicesContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_indices) {
            listener.exitFor_indices(this);
        }
    };
    // @Override
    For_indicesContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_indices) {
            return visitor.visitFor_indices(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_indicesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_indicesContext = For_indicesContext;
var For_indexContext = /** @class */ (function (_super) {
    __extends(For_indexContext, _super);
    function For_indexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    For_indexContext.prototype.IDENT = function () { return this.getToken(modelicaParser.IDENT, 0); };
    For_indexContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(For_indexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_for_index; },
        enumerable: true,
        configurable: true
    });
    // @Override
    For_indexContext.prototype.enterRule = function (listener) {
        if (listener.enterFor_index) {
            listener.enterFor_index(this);
        }
    };
    // @Override
    For_indexContext.prototype.exitRule = function (listener) {
        if (listener.exitFor_index) {
            listener.exitFor_index(this);
        }
    };
    // @Override
    For_indexContext.prototype.accept = function (visitor) {
        if (visitor.visitFor_index) {
            return visitor.visitFor_index(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return For_indexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.For_indexContext = For_indexContext;
var While_statementContext = /** @class */ (function (_super) {
    __extends(While_statementContext, _super);
    function While_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    While_statementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    While_statementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(While_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_while_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    While_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhile_statement) {
            listener.enterWhile_statement(this);
        }
    };
    // @Override
    While_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhile_statement) {
            listener.exitWhile_statement(this);
        }
    };
    // @Override
    While_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhile_statement) {
            return visitor.visitWhile_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return While_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.While_statementContext = While_statementContext;
var When_equationContext = /** @class */ (function (_super) {
    __extends(When_equationContext, _super);
    function When_equationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    When_equationContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    When_equationContext.prototype.equation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquationContext);
        }
        else {
            return this.getRuleContext(i, EquationContext);
        }
    };
    Object.defineProperty(When_equationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_when_equation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    When_equationContext.prototype.enterRule = function (listener) {
        if (listener.enterWhen_equation) {
            listener.enterWhen_equation(this);
        }
    };
    // @Override
    When_equationContext.prototype.exitRule = function (listener) {
        if (listener.exitWhen_equation) {
            listener.exitWhen_equation(this);
        }
    };
    // @Override
    When_equationContext.prototype.accept = function (visitor) {
        if (visitor.visitWhen_equation) {
            return visitor.visitWhen_equation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return When_equationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.When_equationContext = When_equationContext;
var When_statementContext = /** @class */ (function (_super) {
    __extends(When_statementContext, _super);
    function When_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    When_statementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    When_statementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(When_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_when_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    When_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhen_statement) {
            listener.enterWhen_statement(this);
        }
    };
    // @Override
    When_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhen_statement) {
            listener.exitWhen_statement(this);
        }
    };
    // @Override
    When_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhen_statement) {
            return visitor.visitWhen_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return When_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.When_statementContext = When_statementContext;
var Connect_clauseContext = /** @class */ (function (_super) {
    __extends(Connect_clauseContext, _super);
    function Connect_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Connect_clauseContext.prototype.component_reference = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Component_referenceContext);
        }
        else {
            return this.getRuleContext(i, Component_referenceContext);
        }
    };
    Object.defineProperty(Connect_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_connect_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Connect_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterConnect_clause) {
            listener.enterConnect_clause(this);
        }
    };
    // @Override
    Connect_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitConnect_clause) {
            listener.exitConnect_clause(this);
        }
    };
    // @Override
    Connect_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitConnect_clause) {
            return visitor.visitConnect_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Connect_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Connect_clauseContext = Connect_clauseContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.simple_expression = function () {
        return this.tryGetRuleContext(0, Simple_expressionContext);
    };
    ExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var Simple_expressionContext = /** @class */ (function (_super) {
    __extends(Simple_expressionContext, _super);
    function Simple_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Simple_expressionContext.prototype.logical_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Logical_expressionContext);
        }
        else {
            return this.getRuleContext(i, Logical_expressionContext);
        }
    };
    Object.defineProperty(Simple_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_simple_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Simple_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSimple_expression) {
            listener.enterSimple_expression(this);
        }
    };
    // @Override
    Simple_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSimple_expression) {
            listener.exitSimple_expression(this);
        }
    };
    // @Override
    Simple_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSimple_expression) {
            return visitor.visitSimple_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Simple_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Simple_expressionContext = Simple_expressionContext;
var Logical_expressionContext = /** @class */ (function (_super) {
    __extends(Logical_expressionContext, _super);
    function Logical_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Logical_expressionContext.prototype.logical_term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Logical_termContext);
        }
        else {
            return this.getRuleContext(i, Logical_termContext);
        }
    };
    Object.defineProperty(Logical_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_logical_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Logical_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogical_expression) {
            listener.enterLogical_expression(this);
        }
    };
    // @Override
    Logical_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogical_expression) {
            listener.exitLogical_expression(this);
        }
    };
    // @Override
    Logical_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogical_expression) {
            return visitor.visitLogical_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Logical_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Logical_expressionContext = Logical_expressionContext;
var Logical_termContext = /** @class */ (function (_super) {
    __extends(Logical_termContext, _super);
    function Logical_termContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Logical_termContext.prototype.logical_factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Logical_factorContext);
        }
        else {
            return this.getRuleContext(i, Logical_factorContext);
        }
    };
    Object.defineProperty(Logical_termContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_logical_term; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Logical_termContext.prototype.enterRule = function (listener) {
        if (listener.enterLogical_term) {
            listener.enterLogical_term(this);
        }
    };
    // @Override
    Logical_termContext.prototype.exitRule = function (listener) {
        if (listener.exitLogical_term) {
            listener.exitLogical_term(this);
        }
    };
    // @Override
    Logical_termContext.prototype.accept = function (visitor) {
        if (visitor.visitLogical_term) {
            return visitor.visitLogical_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Logical_termContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Logical_termContext = Logical_termContext;
var Logical_factorContext = /** @class */ (function (_super) {
    __extends(Logical_factorContext, _super);
    function Logical_factorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Logical_factorContext.prototype.relation = function () {
        return this.getRuleContext(0, RelationContext);
    };
    Object.defineProperty(Logical_factorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_logical_factor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Logical_factorContext.prototype.enterRule = function (listener) {
        if (listener.enterLogical_factor) {
            listener.enterLogical_factor(this);
        }
    };
    // @Override
    Logical_factorContext.prototype.exitRule = function (listener) {
        if (listener.exitLogical_factor) {
            listener.exitLogical_factor(this);
        }
    };
    // @Override
    Logical_factorContext.prototype.accept = function (visitor) {
        if (visitor.visitLogical_factor) {
            return visitor.visitLogical_factor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Logical_factorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Logical_factorContext = Logical_factorContext;
var RelationContext = /** @class */ (function (_super) {
    __extends(RelationContext, _super);
    function RelationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationContext.prototype.arithmetic_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Arithmetic_expressionContext);
        }
        else {
            return this.getRuleContext(i, Arithmetic_expressionContext);
        }
    };
    RelationContext.prototype.rel_op = function () {
        return this.tryGetRuleContext(0, Rel_opContext);
    };
    Object.defineProperty(RelationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_relation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationContext.prototype.enterRule = function (listener) {
        if (listener.enterRelation) {
            listener.enterRelation(this);
        }
    };
    // @Override
    RelationContext.prototype.exitRule = function (listener) {
        if (listener.exitRelation) {
            listener.exitRelation(this);
        }
    };
    // @Override
    RelationContext.prototype.accept = function (visitor) {
        if (visitor.visitRelation) {
            return visitor.visitRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationContext = RelationContext;
var Rel_opContext = /** @class */ (function (_super) {
    __extends(Rel_opContext, _super);
    function Rel_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Rel_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_rel_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rel_opContext.prototype.enterRule = function (listener) {
        if (listener.enterRel_op) {
            listener.enterRel_op(this);
        }
    };
    // @Override
    Rel_opContext.prototype.exitRule = function (listener) {
        if (listener.exitRel_op) {
            listener.exitRel_op(this);
        }
    };
    // @Override
    Rel_opContext.prototype.accept = function (visitor) {
        if (visitor.visitRel_op) {
            return visitor.visitRel_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rel_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rel_opContext = Rel_opContext;
var Arithmetic_expressionContext = /** @class */ (function (_super) {
    __extends(Arithmetic_expressionContext, _super);
    function Arithmetic_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arithmetic_expressionContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Arithmetic_expressionContext.prototype.add_op = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Add_opContext);
        }
        else {
            return this.getRuleContext(i, Add_opContext);
        }
    };
    Object.defineProperty(Arithmetic_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_arithmetic_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Arithmetic_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArithmetic_expression) {
            listener.enterArithmetic_expression(this);
        }
    };
    // @Override
    Arithmetic_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArithmetic_expression) {
            listener.exitArithmetic_expression(this);
        }
    };
    // @Override
    Arithmetic_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArithmetic_expression) {
            return visitor.visitArithmetic_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Arithmetic_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Arithmetic_expressionContext = Arithmetic_expressionContext;
var Add_opContext = /** @class */ (function (_super) {
    __extends(Add_opContext, _super);
    function Add_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Add_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_add_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Add_opContext.prototype.enterRule = function (listener) {
        if (listener.enterAdd_op) {
            listener.enterAdd_op(this);
        }
    };
    // @Override
    Add_opContext.prototype.exitRule = function (listener) {
        if (listener.exitAdd_op) {
            listener.exitAdd_op(this);
        }
    };
    // @Override
    Add_opContext.prototype.accept = function (visitor) {
        if (visitor.visitAdd_op) {
            return visitor.visitAdd_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Add_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Add_opContext = Add_opContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }
        else {
            return this.getRuleContext(i, FactorContext);
        }
    };
    TermContext.prototype.mul_op = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Mul_opContext);
        }
        else {
            return this.getRuleContext(i, Mul_opContext);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_term; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TermContext.prototype.enterRule = function (listener) {
        if (listener.enterTerm) {
            listener.enterTerm(this);
        }
    };
    // @Override
    TermContext.prototype.exitRule = function (listener) {
        if (listener.exitTerm) {
            listener.exitTerm(this);
        }
    };
    // @Override
    TermContext.prototype.accept = function (visitor) {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermContext = TermContext;
var Mul_opContext = /** @class */ (function (_super) {
    __extends(Mul_opContext, _super);
    function Mul_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Mul_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_mul_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mul_opContext.prototype.enterRule = function (listener) {
        if (listener.enterMul_op) {
            listener.enterMul_op(this);
        }
    };
    // @Override
    Mul_opContext.prototype.exitRule = function (listener) {
        if (listener.exitMul_op) {
            listener.exitMul_op(this);
        }
    };
    // @Override
    Mul_opContext.prototype.accept = function (visitor) {
        if (visitor.visitMul_op) {
            return visitor.visitMul_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mul_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mul_opContext = Mul_opContext;
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.primary = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryContext);
        }
        else {
            return this.getRuleContext(i, PrimaryContext);
        }
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_factor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FactorContext.prototype.enterRule = function (listener) {
        if (listener.enterFactor) {
            listener.enterFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.exitRule = function (listener) {
        if (listener.exitFactor) {
            listener.exitFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.accept = function (visitor) {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FactorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FactorContext = FactorContext;
var PrimaryContext = /** @class */ (function (_super) {
    __extends(PrimaryContext, _super);
    function PrimaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryContext.prototype.UNSIGNED_NUMBER = function () { return this.tryGetToken(modelicaParser.UNSIGNED_NUMBER, 0); };
    PrimaryContext.prototype.STRING = function () { return this.tryGetToken(modelicaParser.STRING, 0); };
    PrimaryContext.prototype.function_call_args = function () {
        return this.tryGetRuleContext(0, Function_call_argsContext);
    };
    PrimaryContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    PrimaryContext.prototype.component_reference = function () {
        return this.tryGetRuleContext(0, Component_referenceContext);
    };
    PrimaryContext.prototype.output_expression_list = function () {
        return this.tryGetRuleContext(0, Output_expression_listContext);
    };
    PrimaryContext.prototype.expression_list = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Expression_listContext);
        }
        else {
            return this.getRuleContext(i, Expression_listContext);
        }
    };
    PrimaryContext.prototype.function_arguments = function () {
        return this.tryGetRuleContext(0, Function_argumentsContext);
    };
    Object.defineProperty(PrimaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimary) {
            listener.exitPrimary(this);
        }
    };
    // @Override
    PrimaryContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryContext = PrimaryContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(modelicaParser.IDENT);
        }
        else {
            return this.getToken(modelicaParser.IDENT, i);
        }
    };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameContext.prototype.enterRule = function (listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    };
    // @Override
    NameContext.prototype.exitRule = function (listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    };
    // @Override
    NameContext.prototype.accept = function (visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameContext = NameContext;
var Component_referenceContext = /** @class */ (function (_super) {
    __extends(Component_referenceContext, _super);
    function Component_referenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Component_referenceContext.prototype.IDENT = function (i) {
        if (i === undefined) {
            return this.getTokens(modelicaParser.IDENT);
        }
        else {
            return this.getToken(modelicaParser.IDENT, i);
        }
    };
    Component_referenceContext.prototype.array_subscripts = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Array_subscriptsContext);
        }
        else {
            return this.getRuleContext(i, Array_subscriptsContext);
        }
    };
    Object.defineProperty(Component_referenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_component_reference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Component_referenceContext.prototype.enterRule = function (listener) {
        if (listener.enterComponent_reference) {
            listener.enterComponent_reference(this);
        }
    };
    // @Override
    Component_referenceContext.prototype.exitRule = function (listener) {
        if (listener.exitComponent_reference) {
            listener.exitComponent_reference(this);
        }
    };
    // @Override
    Component_referenceContext.prototype.accept = function (visitor) {
        if (visitor.visitComponent_reference) {
            return visitor.visitComponent_reference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Component_referenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Component_referenceContext = Component_referenceContext;
var Function_call_argsContext = /** @class */ (function (_super) {
    __extends(Function_call_argsContext, _super);
    function Function_call_argsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_call_argsContext.prototype.function_arguments = function () {
        return this.tryGetRuleContext(0, Function_argumentsContext);
    };
    Object.defineProperty(Function_call_argsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_function_call_args; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_call_argsContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_call_args) {
            listener.enterFunction_call_args(this);
        }
    };
    // @Override
    Function_call_argsContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_call_args) {
            listener.exitFunction_call_args(this);
        }
    };
    // @Override
    Function_call_argsContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_call_args) {
            return visitor.visitFunction_call_args(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_call_argsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_call_argsContext = Function_call_argsContext;
var Function_argumentsContext = /** @class */ (function (_super) {
    __extends(Function_argumentsContext, _super);
    function Function_argumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_argumentsContext.prototype.function_argument = function () {
        return this.tryGetRuleContext(0, Function_argumentContext);
    };
    Function_argumentsContext.prototype.function_arguments = function () {
        return this.tryGetRuleContext(0, Function_argumentsContext);
    };
    Function_argumentsContext.prototype.for_indices = function () {
        return this.tryGetRuleContext(0, For_indicesContext);
    };
    Function_argumentsContext.prototype.named_arguments = function () {
        return this.tryGetRuleContext(0, Named_argumentsContext);
    };
    Object.defineProperty(Function_argumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_function_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_argumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_arguments) {
            listener.enterFunction_arguments(this);
        }
    };
    // @Override
    Function_argumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_arguments) {
            listener.exitFunction_arguments(this);
        }
    };
    // @Override
    Function_argumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_arguments) {
            return visitor.visitFunction_arguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_argumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_argumentsContext = Function_argumentsContext;
var Named_argumentsContext = /** @class */ (function (_super) {
    __extends(Named_argumentsContext, _super);
    function Named_argumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Named_argumentsContext.prototype.named_argument = function () {
        return this.getRuleContext(0, Named_argumentContext);
    };
    Named_argumentsContext.prototype.named_arguments = function () {
        return this.tryGetRuleContext(0, Named_argumentsContext);
    };
    Object.defineProperty(Named_argumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_named_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Named_argumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterNamed_arguments) {
            listener.enterNamed_arguments(this);
        }
    };
    // @Override
    Named_argumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitNamed_arguments) {
            listener.exitNamed_arguments(this);
        }
    };
    // @Override
    Named_argumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitNamed_arguments) {
            return visitor.visitNamed_arguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Named_argumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Named_argumentsContext = Named_argumentsContext;
var Named_argumentContext = /** @class */ (function (_super) {
    __extends(Named_argumentContext, _super);
    function Named_argumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Named_argumentContext.prototype.IDENT = function () { return this.getToken(modelicaParser.IDENT, 0); };
    Named_argumentContext.prototype.function_argument = function () {
        return this.getRuleContext(0, Function_argumentContext);
    };
    Object.defineProperty(Named_argumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_named_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Named_argumentContext.prototype.enterRule = function (listener) {
        if (listener.enterNamed_argument) {
            listener.enterNamed_argument(this);
        }
    };
    // @Override
    Named_argumentContext.prototype.exitRule = function (listener) {
        if (listener.exitNamed_argument) {
            listener.exitNamed_argument(this);
        }
    };
    // @Override
    Named_argumentContext.prototype.accept = function (visitor) {
        if (visitor.visitNamed_argument) {
            return visitor.visitNamed_argument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Named_argumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Named_argumentContext = Named_argumentContext;
var Function_argumentContext = /** @class */ (function (_super) {
    __extends(Function_argumentContext, _super);
    function Function_argumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_argumentContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    Function_argumentContext.prototype.named_arguments = function () {
        return this.tryGetRuleContext(0, Named_argumentsContext);
    };
    Function_argumentContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Function_argumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_function_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_argumentContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_argument) {
            listener.enterFunction_argument(this);
        }
    };
    // @Override
    Function_argumentContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_argument) {
            listener.exitFunction_argument(this);
        }
    };
    // @Override
    Function_argumentContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_argument) {
            return visitor.visitFunction_argument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_argumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_argumentContext = Function_argumentContext;
var Output_expression_listContext = /** @class */ (function (_super) {
    __extends(Output_expression_listContext, _super);
    function Output_expression_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Output_expression_listContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(Output_expression_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_output_expression_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Output_expression_listContext.prototype.enterRule = function (listener) {
        if (listener.enterOutput_expression_list) {
            listener.enterOutput_expression_list(this);
        }
    };
    // @Override
    Output_expression_listContext.prototype.exitRule = function (listener) {
        if (listener.exitOutput_expression_list) {
            listener.exitOutput_expression_list(this);
        }
    };
    // @Override
    Output_expression_listContext.prototype.accept = function (visitor) {
        if (visitor.visitOutput_expression_list) {
            return visitor.visitOutput_expression_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Output_expression_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Output_expression_listContext = Output_expression_listContext;
var Expression_listContext = /** @class */ (function (_super) {
    __extends(Expression_listContext, _super);
    function Expression_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expression_listContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(Expression_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_expression_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expression_listContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression_list) {
            listener.enterExpression_list(this);
        }
    };
    // @Override
    Expression_listContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression_list) {
            listener.exitExpression_list(this);
        }
    };
    // @Override
    Expression_listContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression_list) {
            return visitor.visitExpression_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expression_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expression_listContext = Expression_listContext;
var Array_subscriptsContext = /** @class */ (function (_super) {
    __extends(Array_subscriptsContext, _super);
    function Array_subscriptsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Array_subscriptsContext.prototype.subscript = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SubscriptContext);
        }
        else {
            return this.getRuleContext(i, SubscriptContext);
        }
    };
    Object.defineProperty(Array_subscriptsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_array_subscripts; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Array_subscriptsContext.prototype.enterRule = function (listener) {
        if (listener.enterArray_subscripts) {
            listener.enterArray_subscripts(this);
        }
    };
    // @Override
    Array_subscriptsContext.prototype.exitRule = function (listener) {
        if (listener.exitArray_subscripts) {
            listener.exitArray_subscripts(this);
        }
    };
    // @Override
    Array_subscriptsContext.prototype.accept = function (visitor) {
        if (visitor.visitArray_subscripts) {
            return visitor.visitArray_subscripts(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Array_subscriptsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Array_subscriptsContext = Array_subscriptsContext;
var SubscriptContext = /** @class */ (function (_super) {
    __extends(SubscriptContext, _super);
    function SubscriptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubscriptContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(SubscriptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_subscript; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubscriptContext.prototype.enterRule = function (listener) {
        if (listener.enterSubscript) {
            listener.enterSubscript(this);
        }
    };
    // @Override
    SubscriptContext.prototype.exitRule = function (listener) {
        if (listener.exitSubscript) {
            listener.exitSubscript(this);
        }
    };
    // @Override
    SubscriptContext.prototype.accept = function (visitor) {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubscriptContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubscriptContext = SubscriptContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.string_comment = function () {
        return this.getRuleContext(0, String_commentContext);
    };
    CommentContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_comment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentContext.prototype.enterRule = function (listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    };
    // @Override
    CommentContext.prototype.exitRule = function (listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    };
    // @Override
    CommentContext.prototype.accept = function (visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentContext = CommentContext;
var String_commentContext = /** @class */ (function (_super) {
    __extends(String_commentContext, _super);
    function String_commentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    String_commentContext.prototype.STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(modelicaParser.STRING);
        }
        else {
            return this.getToken(modelicaParser.STRING, i);
        }
    };
    Object.defineProperty(String_commentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_string_comment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    String_commentContext.prototype.enterRule = function (listener) {
        if (listener.enterString_comment) {
            listener.enterString_comment(this);
        }
    };
    // @Override
    String_commentContext.prototype.exitRule = function (listener) {
        if (listener.exitString_comment) {
            listener.exitString_comment(this);
        }
    };
    // @Override
    String_commentContext.prototype.accept = function (visitor) {
        if (visitor.visitString_comment) {
            return visitor.visitString_comment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return String_commentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.String_commentContext = String_commentContext;
var AnnotationContext = /** @class */ (function (_super) {
    __extends(AnnotationContext, _super);
    function AnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationContext.prototype.class_modification = function () {
        return this.getRuleContext(0, Class_modificationContext);
    };
    Object.defineProperty(AnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return modelicaParser.RULE_annotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    };
    // @Override
    AnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    };
    // @Override
    AnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationContext = AnnotationContext;
