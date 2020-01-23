"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clu/clu.g4 by ANTLR 4.7.3-SNAPSHOT
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
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var cluParser = /** @class */ (function (_super) {
    __extends(cluParser, _super);
    function cluParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(cluParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(cluParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return cluParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cluParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "clu.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cluParser.prototype, "ruleNames", {
        // @Override
        get: function () { return cluParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cluParser.prototype, "serializedATN", {
        // @Override
        get: function () { return cluParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    cluParser.prototype.module = function () {
        var _localctx = new ModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, cluParser.RULE_module);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 98;
                                this.equate();
                            }
                        }
                    }
                    this.state = 103;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                }
                this.state = 107;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 104;
                            this.procedure();
                        }
                        break;
                    case 2:
                        {
                            this.state = 105;
                            this.iterator();
                        }
                        break;
                    case 3:
                        {
                            this.state = 106;
                            this.cluster();
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
    cluParser.prototype.procedure = function () {
        var _localctx = new ProcedureContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, cluParser.RULE_procedure);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this.idn();
                this.state = 110;
                this.match(cluParser.T__0);
                this.state = 111;
                this.match(cluParser.T__1);
                this.state = 113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.STRING) {
                    {
                        this.state = 112;
                        this.parms();
                    }
                }
                this.state = 115;
                this.args();
                this.state = 117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__11) {
                    {
                        this.state = 116;
                        this.returnz();
                    }
                }
                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__13) {
                    {
                        this.state = 119;
                        this.signals();
                    }
                }
                this.state = 123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__14) {
                    {
                        this.state = 122;
                        this.where();
                    }
                }
                this.state = 125;
                this.routine_body();
                this.state = 126;
                this.match(cluParser.T__2);
                this.state = 127;
                this.idn();
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
    cluParser.prototype.iterator = function () {
        var _localctx = new IteratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, cluParser.RULE_iterator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this.idn();
                this.state = 130;
                this.match(cluParser.T__0);
                this.state = 131;
                this.match(cluParser.T__3);
                this.state = 133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.STRING) {
                    {
                        this.state = 132;
                        this.parms();
                    }
                }
                this.state = 135;
                this.args();
                this.state = 137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__12) {
                    {
                        this.state = 136;
                        this.yields();
                    }
                }
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__13) {
                    {
                        this.state = 139;
                        this.signals();
                    }
                }
                this.state = 143;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__14) {
                    {
                        this.state = 142;
                        this.where();
                    }
                }
                this.state = 145;
                this.routine_body();
                this.state = 146;
                this.match(cluParser.T__2);
                this.state = 147;
                this.idn();
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
    cluParser.prototype.cluster = function () {
        var _localctx = new ClusterContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, cluParser.RULE_cluster);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.idn();
                this.state = 150;
                this.match(cluParser.T__0);
                this.state = 151;
                this.match(cluParser.T__4);
                this.state = 153;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.STRING) {
                    {
                        this.state = 152;
                        this.parms();
                    }
                }
                this.state = 155;
                this.match(cluParser.T__5);
                this.state = 156;
                this.idn_list();
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__14) {
                    {
                        this.state = 157;
                        this.where();
                    }
                }
                this.state = 160;
                this.cluster_body();
                this.state = 161;
                this.match(cluParser.T__2);
                this.state = 162;
                this.idn();
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
    cluParser.prototype.parms = function () {
        var _localctx = new ParmsContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, cluParser.RULE_parms);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.param();
                this.state = 169;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.T__6) {
                    {
                        {
                            this.state = 165;
                            this.match(cluParser.T__6);
                            this.state = 166;
                            this.param();
                        }
                    }
                    this.state = 171;
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
    cluParser.prototype.param = function () {
        var _localctx = new ParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, cluParser.RULE_param);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.idn_list();
                this.state = 173;
                this.match(cluParser.T__7);
                this.state = 176;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cluParser.T__8:
                        {
                            this.state = 174;
                            this.match(cluParser.T__8);
                        }
                        break;
                    case cluParser.T__19:
                    case cluParser.T__23:
                    case cluParser.T__24:
                    case cluParser.T__25:
                    case cluParser.T__26:
                    case cluParser.T__27:
                    case cluParser.T__28:
                    case cluParser.T__29:
                    case cluParser.T__30:
                    case cluParser.T__31:
                    case cluParser.T__32:
                    case cluParser.T__33:
                    case cluParser.T__34:
                    case cluParser.T__35:
                    case cluParser.T__36:
                    case cluParser.T__37:
                    case cluParser.T__38:
                    case cluParser.STRING:
                        {
                            this.state = 175;
                            this.type_spec();
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
    cluParser.prototype.args = function () {
        var _localctx = new ArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, cluParser.RULE_args);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this.match(cluParser.T__9);
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.STRING) {
                    {
                        this.state = 179;
                        this.decl_list();
                    }
                }
                this.state = 182;
                this.match(cluParser.T__10);
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
    cluParser.prototype.decl_list = function () {
        var _localctx = new Decl_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, cluParser.RULE_decl_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.decl();
                this.state = 189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.T__6) {
                    {
                        {
                            this.state = 185;
                            this.match(cluParser.T__6);
                            this.state = 186;
                            this.decl();
                        }
                    }
                    this.state = 191;
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
    cluParser.prototype.decl = function () {
        var _localctx = new DeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, cluParser.RULE_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.idn_list();
                this.state = 193;
                this.match(cluParser.T__7);
                this.state = 194;
                this.type_spec();
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
    cluParser.prototype.returnz = function () {
        var _localctx = new ReturnzContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, cluParser.RULE_returnz);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.match(cluParser.T__11);
                this.state = 197;
                this.match(cluParser.T__9);
                this.state = 198;
                this.type_spec_list();
                this.state = 199;
                this.match(cluParser.T__10);
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
    cluParser.prototype.yields = function () {
        var _localctx = new YieldsContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, cluParser.RULE_yields);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.match(cluParser.T__12);
                this.state = 202;
                this.match(cluParser.T__9);
                this.state = 203;
                this.type_spec_list();
                this.state = 204;
                this.match(cluParser.T__10);
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
    cluParser.prototype.signals = function () {
        var _localctx = new SignalsContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, cluParser.RULE_signals);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.match(cluParser.T__13);
                this.state = 207;
                this.match(cluParser.T__9);
                this.state = 208;
                this.exception();
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.T__6) {
                    {
                        {
                            this.state = 209;
                            this.match(cluParser.T__6);
                            this.state = 210;
                            this.exception();
                        }
                    }
                    this.state = 215;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 216;
                this.match(cluParser.T__10);
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
    cluParser.prototype.exception = function () {
        var _localctx = new ExceptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, cluParser.RULE_exception);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.name();
                this.state = 220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (cluParser.T__19 - 20)) | (1 << (cluParser.T__23 - 20)) | (1 << (cluParser.T__24 - 20)) | (1 << (cluParser.T__25 - 20)) | (1 << (cluParser.T__26 - 20)) | (1 << (cluParser.T__27 - 20)) | (1 << (cluParser.T__28 - 20)) | (1 << (cluParser.T__29 - 20)) | (1 << (cluParser.T__30 - 20)) | (1 << (cluParser.T__31 - 20)) | (1 << (cluParser.T__32 - 20)) | (1 << (cluParser.T__33 - 20)) | (1 << (cluParser.T__34 - 20)) | (1 << (cluParser.T__35 - 20)) | (1 << (cluParser.T__36 - 20)) | (1 << (cluParser.T__37 - 20)) | (1 << (cluParser.T__38 - 20)))) !== 0) || _la === cluParser.STRING) {
                    {
                        this.state = 219;
                        this.type_spec_list();
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
    cluParser.prototype.type_spec_list = function () {
        var _localctx = new Type_spec_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, cluParser.RULE_type_spec_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.type_spec();
                this.state = 227;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 223;
                                this.match(cluParser.T__6);
                                this.state = 224;
                                this.type_spec();
                            }
                        }
                    }
                    this.state = 229;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
    cluParser.prototype.where = function () {
        var _localctx = new WhereContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, cluParser.RULE_where);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 230;
                this.match(cluParser.T__14);
                this.state = 231;
                this.restriction();
                this.state = 236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.T__6) {
                    {
                        {
                            this.state = 232;
                            this.match(cluParser.T__6);
                            this.state = 233;
                            this.restriction();
                        }
                    }
                    this.state = 238;
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
    cluParser.prototype.restriction = function () {
        var _localctx = new RestrictionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, cluParser.RULE_restriction);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 239;
                this.idn();
                this.state = 244;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cluParser.T__15:
                        {
                            this.state = 240;
                            this.match(cluParser.T__15);
                            this.state = 241;
                            this.oper_decl_list();
                        }
                        break;
                    case cluParser.T__16:
                        {
                            this.state = 242;
                            this.match(cluParser.T__16);
                            this.state = 243;
                            this.type_set();
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
    cluParser.prototype.type_set = function () {
        var _localctx = new Type_setContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, cluParser.RULE_type_set);
        try {
            var _alt = void 0;
            this.state = 262;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 258;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 256;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 246;
                                                this.idn();
                                            }
                                            break;
                                        case 2:
                                            {
                                                {
                                                    this.state = 247;
                                                    this.idn();
                                                    this.state = 248;
                                                    this.match(cluParser.T__15);
                                                    this.state = 249;
                                                    this.oper_decl_list();
                                                    this.state = 253;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 250;
                                                                    this.equate();
                                                                }
                                                            }
                                                        }
                                                        this.state = 255;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                                                    }
                                                }
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 260;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 261;
                        this.idn();
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
    cluParser.prototype.oper_decl_list = function () {
        var _localctx = new Oper_decl_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, cluParser.RULE_oper_decl_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this.oper_decl();
                this.state = 269;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 265;
                                this.match(cluParser.T__6);
                                this.state = 266;
                                this.oper_decl();
                            }
                        }
                    }
                    this.state = 271;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
    cluParser.prototype.oper_decl = function () {
        var _localctx = new Oper_declContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, cluParser.RULE_oper_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.op_name_list();
                this.state = 273;
                this.match(cluParser.T__7);
                this.state = 274;
                this.type_spec();
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
    cluParser.prototype.op_name_list = function () {
        var _localctx = new Op_name_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, cluParser.RULE_op_name_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 276;
                this.op_name();
                this.state = 281;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.T__6) {
                    {
                        {
                            this.state = 277;
                            this.match(cluParser.T__6);
                            this.state = 278;
                            this.op_name();
                        }
                    }
                    this.state = 283;
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
    cluParser.prototype.op_name = function () {
        var _localctx = new Op_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, cluParser.RULE_op_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                this.name();
                this.state = 285;
                this.match(cluParser.T__17);
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (cluParser.T__9 - 10)) | (1 << (cluParser.T__19 - 10)) | (1 << (cluParser.T__23 - 10)) | (1 << (cluParser.T__24 - 10)) | (1 << (cluParser.T__25 - 10)) | (1 << (cluParser.T__26 - 10)) | (1 << (cluParser.T__27 - 10)) | (1 << (cluParser.T__28 - 10)) | (1 << (cluParser.T__29 - 10)) | (1 << (cluParser.T__30 - 10)) | (1 << (cluParser.T__31 - 10)) | (1 << (cluParser.T__32 - 10)) | (1 << (cluParser.T__33 - 10)) | (1 << (cluParser.T__34 - 10)) | (1 << (cluParser.T__35 - 10)) | (1 << (cluParser.T__36 - 10)) | (1 << (cluParser.T__37 - 10)) | (1 << (cluParser.T__38 - 10)))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (cluParser.T__60 - 61)) | (1 << (cluParser.T__61 - 61)) | (1 << (cluParser.T__80 - 61)) | (1 << (cluParser.T__81 - 61)) | (1 << (cluParser.T__82 - 61)) | (1 << (cluParser.T__84 - 61)) | (1 << (cluParser.T__85 - 61)) | (1 << (cluParser.T__86 - 61)) | (1 << (cluParser.STRINGLITERAL - 61)) | (1 << (cluParser.STRING - 61)) | (1 << (cluParser.INT - 61)) | (1 << (cluParser.FLOAT - 61)))) !== 0)) {
                    {
                        this.state = 286;
                        this.constant_list();
                    }
                }
                this.state = 289;
                this.match(cluParser.T__18);
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
    cluParser.prototype.constant_list = function () {
        var _localctx = new Constant_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, cluParser.RULE_constant_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.constant();
                this.state = 296;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 292;
                                this.match(cluParser.T__6);
                                this.state = 293;
                                this.constant();
                            }
                        }
                    }
                    this.state = 298;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
    cluParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, cluParser.RULE_constant);
        try {
            this.state = 301;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 299;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 300;
                        this.type_spec();
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
    cluParser.prototype.routine_body = function () {
        var _localctx = new Routine_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, cluParser.RULE_routine_body);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 303;
                                this.equate();
                            }
                        }
                    }
                    this.state = 308;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                }
                this.state = 312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.T__21) {
                    {
                        {
                            this.state = 309;
                            this.own_var();
                        }
                    }
                    this.state = 314;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cluParser.T__19) | (1 << cluParser.T__23) | (1 << cluParser.T__24) | (1 << cluParser.T__25) | (1 << cluParser.T__26) | (1 << cluParser.T__27) | (1 << cluParser.T__28) | (1 << cluParser.T__29) | (1 << cluParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (cluParser.T__31 - 32)) | (1 << (cluParser.T__32 - 32)) | (1 << (cluParser.T__33 - 32)) | (1 << (cluParser.T__34 - 32)) | (1 << (cluParser.T__35 - 32)) | (1 << (cluParser.T__36 - 32)) | (1 << (cluParser.T__37 - 32)) | (1 << (cluParser.T__38 - 32)) | (1 << (cluParser.T__40 - 32)) | (1 << (cluParser.T__42 - 32)) | (1 << (cluParser.T__43 - 32)) | (1 << (cluParser.T__47 - 32)) | (1 << (cluParser.T__49 - 32)) | (1 << (cluParser.T__50 - 32)) | (1 << (cluParser.T__51 - 32)) | (1 << (cluParser.T__52 - 32)) | (1 << (cluParser.T__53 - 32)) | (1 << (cluParser.T__54 - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (cluParser.T__80 - 81)) | (1 << (cluParser.T__81 - 81)) | (1 << (cluParser.T__82 - 81)) | (1 << (cluParser.T__84 - 81)) | (1 << (cluParser.T__85 - 81)) | (1 << (cluParser.T__86 - 81)) | (1 << (cluParser.STRINGLITERAL - 81)) | (1 << (cluParser.STRING - 81)) | (1 << (cluParser.INT - 81)) | (1 << (cluParser.FLOAT - 81)))) !== 0)) {
                    {
                        {
                            this.state = 315;
                            this.statement(0);
                        }
                    }
                    this.state = 320;
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
    cluParser.prototype.cluster_body = function () {
        var _localctx = new Cluster_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, cluParser.RULE_cluster_body);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 324;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.STRING) {
                    {
                        {
                            this.state = 321;
                            this.equate();
                        }
                    }
                    this.state = 326;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 327;
                this.match(cluParser.T__19);
                this.state = 328;
                this.match(cluParser.T__0);
                this.state = 329;
                this.type_spec();
                this.state = 333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.STRING) {
                    {
                        {
                            this.state = 330;
                            this.equate();
                        }
                    }
                    this.state = 335;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 339;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.T__21) {
                    {
                        {
                            this.state = 336;
                            this.own_var();
                        }
                    }
                    this.state = 341;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 342;
                this.match(cluParser.T__20);
                this.state = 346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.STRING) {
                    {
                        {
                            this.state = 343;
                            this.routine();
                        }
                    }
                    this.state = 348;
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
    cluParser.prototype.routine = function () {
        var _localctx = new RoutineContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, cluParser.RULE_routine);
        try {
            this.state = 351;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 349;
                        this.procedure();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 350;
                        this.iterator();
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
    cluParser.prototype.equate = function () {
        var _localctx = new EquateContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, cluParser.RULE_equate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 353;
                this.idn();
                this.state = 354;
                this.match(cluParser.T__0);
                this.state = 357;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                    case 1:
                        {
                            this.state = 355;
                            this.constant();
                        }
                        break;
                    case 2:
                        {
                            this.state = 356;
                            this.type_set();
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
    cluParser.prototype.own_var = function () {
        var _localctx = new Own_varContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, cluParser.RULE_own_var);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 359;
                this.match(cluParser.T__21);
                this.state = 371;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                    case 1:
                        {
                            {
                                this.state = 360;
                                this.decl();
                            }
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 361;
                                this.idn();
                                this.state = 362;
                                this.match(cluParser.T__7);
                                this.state = 363;
                                this.type_spec();
                                this.state = 364;
                                this.match(cluParser.T__22);
                                this.state = 365;
                                this.expression(0);
                            }
                        }
                        break;
                    case 3:
                        {
                            {
                                this.state = 367;
                                this.decl_list();
                                this.state = 368;
                                this.match(cluParser.T__22);
                                this.state = 369;
                                this.invocation();
                            }
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
    cluParser.prototype.type_spec = function () {
        var _localctx = new Type_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, cluParser.RULE_type_spec);
        var _la;
        try {
            this.state = 407;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cluParser.T__23:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 373;
                        this.match(cluParser.T__23);
                    }
                    break;
                case cluParser.T__24:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 374;
                        this.match(cluParser.T__24);
                    }
                    break;
                case cluParser.T__25:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 375;
                        this.match(cluParser.T__25);
                    }
                    break;
                case cluParser.T__26:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 376;
                        this.match(cluParser.T__26);
                    }
                    break;
                case cluParser.T__27:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 377;
                        this.match(cluParser.T__27);
                    }
                    break;
                case cluParser.T__28:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 378;
                        this.match(cluParser.T__28);
                    }
                    break;
                case cluParser.T__29:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 379;
                        this.match(cluParser.T__29);
                    }
                    break;
                case cluParser.T__19:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 380;
                        this.match(cluParser.T__19);
                    }
                    break;
                case cluParser.T__30:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 381;
                        this.match(cluParser.T__30);
                    }
                    break;
                case cluParser.T__31:
                case cluParser.T__32:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 387;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case cluParser.T__31:
                                {
                                    this.state = 382;
                                    this.match(cluParser.T__31);
                                }
                                break;
                            case cluParser.T__32:
                                {
                                    this.state = 383;
                                    this.match(cluParser.T__32);
                                    this.state = 385;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 384;
                                                this.type_spec();
                                            }
                                            break;
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case cluParser.T__33:
                case cluParser.T__34:
                case cluParser.T__35:
                case cluParser.T__36:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 389;
                        _la = this._input.LA(1);
                        if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (cluParser.T__33 - 34)) | (1 << (cluParser.T__34 - 34)) | (1 << (cluParser.T__35 - 34)) | (1 << (cluParser.T__36 - 34)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 391;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                            case 1:
                                {
                                    this.state = 390;
                                    this.field_spec_list();
                                }
                                break;
                        }
                    }
                    break;
                case cluParser.T__37:
                case cluParser.T__38:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 393;
                        _la = this._input.LA(1);
                        if (!(_la === cluParser.T__37 || _la === cluParser.T__38)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 395;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                            case 1:
                                {
                                    this.state = 394;
                                    this.field_spec_list();
                                }
                                break;
                        }
                        this.state = 398;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                            case 1:
                                {
                                    this.state = 397;
                                    this.returnz();
                                }
                                break;
                        }
                        this.state = 401;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                            case 1:
                                {
                                    this.state = 400;
                                    this.signals();
                                }
                                break;
                        }
                    }
                    break;
                case cluParser.STRING:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        {
                            this.state = 403;
                            this.idn();
                            this.state = 405;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 404;
                                        this.constant_list();
                                    }
                                    break;
                            }
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
    cluParser.prototype.field_spec_list = function () {
        var _localctx = new Field_spec_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, cluParser.RULE_field_spec_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 409;
                    this.field_spec();
                    this.state = 414;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 410;
                                    this.match(cluParser.T__6);
                                    this.state = 411;
                                    this.field_spec();
                                }
                            }
                        }
                        this.state = 416;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
    cluParser.prototype.field_spec = function () {
        var _localctx = new Field_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, cluParser.RULE_field_spec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 417;
                this.name_list();
                this.state = 418;
                this.match(cluParser.T__7);
                this.state = 419;
                this.type_spec();
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
    cluParser.prototype.statement = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new StatementContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 62;
        this.enterRecursionRule(_localctx, 62, cluParser.RULE_statement, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                    case 1:
                        {
                            this.state = 422;
                            this.decl();
                        }
                        break;
                    case 2:
                        {
                            this.state = 423;
                            this.idn();
                            this.state = 424;
                            this.match(cluParser.T__7);
                            this.state = 425;
                            this.type_spec();
                            this.state = 426;
                            this.match(cluParser.T__22);
                            this.state = 427;
                            this.expression(0);
                        }
                        break;
                    case 3:
                        {
                            this.state = 429;
                            this.decl_list();
                            this.state = 430;
                            this.match(cluParser.T__22);
                            this.state = 431;
                            this.invocation();
                        }
                        break;
                    case 4:
                        {
                            this.state = 433;
                            this.idn_list();
                            this.state = 434;
                            this.match(cluParser.T__22);
                            this.state = 437;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 435;
                                        this.invocation();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 436;
                                        this.expression_list();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 5:
                        {
                            this.state = 439;
                            this.primary(0);
                            this.state = 440;
                            this.match(cluParser.T__39);
                            this.state = 441;
                            this.name();
                            this.state = 442;
                            this.match(cluParser.T__22);
                            this.state = 443;
                            this.expression(0);
                        }
                        break;
                    case 6:
                        {
                            this.state = 445;
                            this.invocation();
                        }
                        break;
                    case 7:
                        {
                            this.state = 446;
                            this.match(cluParser.T__40);
                            this.state = 447;
                            this.expression(0);
                            this.state = 448;
                            this.match(cluParser.T__41);
                            this.state = 449;
                            this.body();
                            this.state = 450;
                            this.match(cluParser.T__2);
                        }
                        break;
                    case 8:
                        {
                            this.state = 452;
                            this.match(cluParser.T__42);
                            this.state = 455;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 453;
                                        this.decl_list();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 454;
                                        this.idn_list();
                                    }
                                    break;
                            }
                            this.state = 457;
                            this.match(cluParser.T__16);
                            this.state = 458;
                            this.invocation();
                            this.state = 459;
                            this.match(cluParser.T__41);
                            this.state = 460;
                            this.body();
                            this.state = 461;
                            this.match(cluParser.T__2);
                        }
                        break;
                    case 9:
                        {
                            {
                                this.state = 463;
                                this.match(cluParser.T__43);
                                this.state = 464;
                                this.expression(0);
                                this.state = 465;
                                this.match(cluParser.T__44);
                                this.state = 466;
                                this.body();
                                this.state = 474;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === cluParser.T__45) {
                                    {
                                        {
                                            this.state = 467;
                                            this.match(cluParser.T__45);
                                            this.state = 468;
                                            this.expression(0);
                                            this.state = 469;
                                            this.match(cluParser.T__44);
                                            this.state = 470;
                                            this.body();
                                        }
                                    }
                                    this.state = 476;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 479;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === cluParser.T__46) {
                                    {
                                        this.state = 477;
                                        this.match(cluParser.T__46);
                                        this.state = 478;
                                        this.body();
                                    }
                                }
                                this.state = 481;
                                this.match(cluParser.T__2);
                            }
                        }
                        break;
                    case 10:
                        {
                            {
                                this.state = 483;
                                this.match(cluParser.T__47);
                                this.state = 484;
                                this.expression(0);
                                this.state = 488;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === cluParser.T__57) {
                                    {
                                        {
                                            this.state = 485;
                                            this.tag_arm();
                                        }
                                    }
                                    this.state = 490;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 494;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === cluParser.T__48) {
                                    {
                                        this.state = 491;
                                        this.match(cluParser.T__48);
                                        this.state = 492;
                                        this.match(cluParser.T__7);
                                        this.state = 493;
                                        this.body();
                                    }
                                }
                                this.state = 496;
                                this.match(cluParser.T__2);
                            }
                        }
                        break;
                    case 11:
                        {
                            {
                                this.state = 498;
                                _la = this._input.LA(1);
                                if (!(_la === cluParser.T__49 || _la === cluParser.T__50)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 500;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 499;
                                            this.expression_list();
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case 12:
                        {
                            {
                                this.state = 502;
                                this.match(cluParser.T__51);
                                this.state = 503;
                                this.name();
                                this.state = 505;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 504;
                                            this.expression_list();
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case 13:
                        {
                            {
                                this.state = 507;
                                this.match(cluParser.T__52);
                                this.state = 508;
                                this.name();
                                this.state = 510;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 509;
                                            this.expression_list();
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case 14:
                        {
                            this.state = 512;
                            this.match(cluParser.T__53);
                        }
                        break;
                    case 15:
                        {
                            {
                                this.state = 513;
                                this.match(cluParser.T__54);
                                this.state = 514;
                                this.body();
                                this.state = 515;
                                this.match(cluParser.T__2);
                            }
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 537;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new StatementContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_statement);
                                this.state = 519;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 533;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case cluParser.T__55:
                                        {
                                            {
                                                this.state = 520;
                                                this.match(cluParser.T__55);
                                                this.state = 521;
                                                this.name_list();
                                            }
                                        }
                                        break;
                                    case cluParser.T__56:
                                        {
                                            {
                                                this.state = 522;
                                                this.match(cluParser.T__56);
                                                this.state = 526;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === cluParser.T__58) {
                                                    {
                                                        {
                                                            this.state = 523;
                                                            this.when_handler();
                                                        }
                                                    }
                                                    this.state = 528;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 530;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                if (_la === cluParser.T__48) {
                                                    {
                                                        this.state = 529;
                                                        this.others_handler();
                                                    }
                                                }
                                                this.state = 532;
                                                this.match(cluParser.T__2);
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                    }
                    this.state = 539;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    cluParser.prototype.tag_arm = function () {
        var _localctx = new Tag_armContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, cluParser.RULE_tag_arm);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
                this.match(cluParser.T__57);
                this.state = 541;
                this.name_list();
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__9) {
                    {
                        this.state = 542;
                        this.match(cluParser.T__9);
                        this.state = 543;
                        this.idn();
                        this.state = 544;
                        this.match(cluParser.T__7);
                        this.state = 545;
                        this.type_spec();
                        this.state = 546;
                        this.match(cluParser.T__10);
                    }
                }
                this.state = 550;
                this.match(cluParser.T__7);
                this.state = 551;
                this.body();
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
    cluParser.prototype.when_handler = function () {
        var _localctx = new When_handlerContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, cluParser.RULE_when_handler);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this.match(cluParser.T__58);
                this.state = 554;
                this.name_list();
                this.state = 561;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cluParser.T__9:
                        {
                            this.state = 555;
                            this.match(cluParser.T__9);
                            this.state = 556;
                            this.match(cluParser.T__59);
                            this.state = 557;
                            this.match(cluParser.T__10);
                        }
                        break;
                    case cluParser.T__7:
                    case cluParser.STRING:
                        {
                            this.state = 559;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === cluParser.STRING) {
                                {
                                    this.state = 558;
                                    this.decl_list();
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 563;
                this.match(cluParser.T__7);
                this.state = 564;
                this.body();
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
    cluParser.prototype.others_handler = function () {
        var _localctx = new Others_handlerContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, cluParser.RULE_others_handler);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 566;
                this.match(cluParser.T__48);
                this.state = 573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cluParser.T__9) {
                    {
                        this.state = 567;
                        this.match(cluParser.T__9);
                        this.state = 568;
                        this.idn();
                        this.state = 569;
                        this.match(cluParser.T__7);
                        this.state = 570;
                        this.type_spec();
                        this.state = 571;
                        this.match(cluParser.T__10);
                    }
                }
                this.state = 575;
                this.match(cluParser.T__7);
                this.state = 576;
                this.body();
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
    cluParser.prototype.body = function () {
        var _localctx = new BodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, cluParser.RULE_body);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 581;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 578;
                                this.equate();
                            }
                        }
                    }
                    this.state = 583;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                }
                this.state = 587;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cluParser.T__19) | (1 << cluParser.T__23) | (1 << cluParser.T__24) | (1 << cluParser.T__25) | (1 << cluParser.T__26) | (1 << cluParser.T__27) | (1 << cluParser.T__28) | (1 << cluParser.T__29) | (1 << cluParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (cluParser.T__31 - 32)) | (1 << (cluParser.T__32 - 32)) | (1 << (cluParser.T__33 - 32)) | (1 << (cluParser.T__34 - 32)) | (1 << (cluParser.T__35 - 32)) | (1 << (cluParser.T__36 - 32)) | (1 << (cluParser.T__37 - 32)) | (1 << (cluParser.T__38 - 32)) | (1 << (cluParser.T__40 - 32)) | (1 << (cluParser.T__42 - 32)) | (1 << (cluParser.T__43 - 32)) | (1 << (cluParser.T__47 - 32)) | (1 << (cluParser.T__49 - 32)) | (1 << (cluParser.T__50 - 32)) | (1 << (cluParser.T__51 - 32)) | (1 << (cluParser.T__52 - 32)) | (1 << (cluParser.T__53 - 32)) | (1 << (cluParser.T__54 - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (cluParser.T__80 - 81)) | (1 << (cluParser.T__81 - 81)) | (1 << (cluParser.T__82 - 81)) | (1 << (cluParser.T__84 - 81)) | (1 << (cluParser.T__85 - 81)) | (1 << (cluParser.T__86 - 81)) | (1 << (cluParser.STRINGLITERAL - 81)) | (1 << (cluParser.STRING - 81)) | (1 << (cluParser.INT - 81)) | (1 << (cluParser.FLOAT - 81)))) !== 0)) {
                    {
                        {
                            this.state = 584;
                            this.statement(0);
                        }
                    }
                    this.state = 589;
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
    cluParser.prototype.expression_list = function () {
        var _localctx = new Expression_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, cluParser.RULE_expression_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 590;
                this.expression(0);
                this.state = 595;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 591;
                                this.match(cluParser.T__6);
                                this.state = 592;
                                this.expression(0);
                            }
                        }
                    }
                    this.state = 597;
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
    cluParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 74;
        this.enterRecursionRule(_localctx, 74, cluParser.RULE_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 608;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cluParser.T__19:
                    case cluParser.T__23:
                    case cluParser.T__24:
                    case cluParser.T__25:
                    case cluParser.T__26:
                    case cluParser.T__27:
                    case cluParser.T__28:
                    case cluParser.T__29:
                    case cluParser.T__30:
                    case cluParser.T__31:
                    case cluParser.T__32:
                    case cluParser.T__33:
                    case cluParser.T__34:
                    case cluParser.T__35:
                    case cluParser.T__36:
                    case cluParser.T__37:
                    case cluParser.T__38:
                    case cluParser.T__80:
                    case cluParser.T__81:
                    case cluParser.T__82:
                    case cluParser.T__84:
                    case cluParser.T__85:
                    case cluParser.T__86:
                    case cluParser.STRINGLITERAL:
                    case cluParser.STRING:
                    case cluParser.INT:
                    case cluParser.FLOAT:
                        {
                            this.state = 599;
                            this.primary(0);
                        }
                        break;
                    case cluParser.T__9:
                        {
                            this.state = 600;
                            this.match(cluParser.T__9);
                            this.state = 601;
                            this.expression(0);
                            this.state = 602;
                            this.match(cluParser.T__10);
                        }
                        break;
                    case cluParser.T__60:
                        {
                            this.state = 604;
                            this.match(cluParser.T__60);
                            this.state = 605;
                            this.expression(23);
                        }
                        break;
                    case cluParser.T__61:
                        {
                            this.state = 606;
                            this.match(cluParser.T__61);
                            this.state = 607;
                            this.expression(22);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 675;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 673;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 610;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 611;
                                        this.match(cluParser.T__62);
                                        this.state = 612;
                                        this.expression(22);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 613;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 614;
                                        this.match(cluParser.T__63);
                                        this.state = 615;
                                        this.expression(21);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 616;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 617;
                                        this.match(cluParser.T__64);
                                        this.state = 618;
                                        this.expression(20);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 619;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 620;
                                        this.match(cluParser.T__59);
                                        this.state = 621;
                                        this.expression(19);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 622;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 623;
                                        this.match(cluParser.T__65);
                                        this.state = 624;
                                        this.expression(18);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 625;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 626;
                                        this.match(cluParser.T__66);
                                        this.state = 627;
                                        this.expression(17);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 628;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 629;
                                        this.match(cluParser.T__61);
                                        this.state = 630;
                                        this.expression(16);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 631;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 632;
                                        this.match(cluParser.T__67);
                                        this.state = 633;
                                        this.expression(15);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 634;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 635;
                                        this.match(cluParser.T__68);
                                        this.state = 636;
                                        this.expression(14);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 637;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 638;
                                        this.match(cluParser.T__0);
                                        this.state = 639;
                                        this.expression(13);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 640;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 641;
                                        this.match(cluParser.T__69);
                                        this.state = 642;
                                        this.expression(12);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 643;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 644;
                                        this.match(cluParser.T__70);
                                        this.state = 645;
                                        this.expression(11);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 646;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 647;
                                        this.match(cluParser.T__71);
                                        this.state = 648;
                                        this.expression(10);
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 649;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 650;
                                        this.match(cluParser.T__72);
                                        this.state = 651;
                                        this.expression(9);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 652;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 653;
                                        this.match(cluParser.T__73);
                                        this.state = 654;
                                        this.expression(8);
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 655;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 656;
                                        this.match(cluParser.T__74);
                                        this.state = 657;
                                        this.expression(7);
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 658;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 659;
                                        this.match(cluParser.T__75);
                                        this.state = 660;
                                        this.expression(6);
                                    }
                                    break;
                                case 18:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 661;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 662;
                                        this.match(cluParser.T__76);
                                        this.state = 663;
                                        this.expression(5);
                                    }
                                    break;
                                case 19:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 664;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 665;
                                        this.match(cluParser.T__77);
                                        this.state = 666;
                                        this.expression(4);
                                    }
                                    break;
                                case 20:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 667;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 668;
                                        this.match(cluParser.T__78);
                                        this.state = 669;
                                        this.expression(3);
                                    }
                                    break;
                                case 21:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_expression);
                                        this.state = 670;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 671;
                                        this.match(cluParser.T__79);
                                        this.state = 672;
                                        this.expression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 677;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    cluParser.prototype.primary = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new PrimaryContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 76;
        this.enterRecursionRule(_localctx, 76, cluParser.RULE_primary, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 715;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                    case 1:
                        {
                            this.state = 679;
                            this.match(cluParser.T__80);
                        }
                        break;
                    case 2:
                        {
                            this.state = 680;
                            this.match(cluParser.T__81);
                        }
                        break;
                    case 3:
                        {
                            this.state = 681;
                            this.match(cluParser.T__82);
                        }
                        break;
                    case 4:
                        {
                            this.state = 682;
                            this.int_literal();
                        }
                        break;
                    case 5:
                        {
                            this.state = 683;
                            this.real_literal();
                        }
                        break;
                    case 6:
                        {
                            this.state = 684;
                            this.string_literal();
                        }
                        break;
                    case 7:
                        {
                            this.state = 685;
                            this.idn();
                            this.state = 687;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 686;
                                        this.constant_list();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 8:
                        {
                            this.state = 689;
                            this.type_spec();
                            this.state = 690;
                            this.match(cluParser.T__83);
                            this.state = 704;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case cluParser.STRING:
                                    {
                                        this.state = 691;
                                        this.field_list();
                                    }
                                    break;
                                case cluParser.T__17:
                                    {
                                        {
                                            this.state = 692;
                                            this.match(cluParser.T__17);
                                            this.state = 700;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                                                case 1:
                                                    {
                                                        {
                                                            this.state = 696;
                                                            this._errHandler.sync(this);
                                                            switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                                                                case 1:
                                                                    {
                                                                        this.state = 693;
                                                                        this.expression(0);
                                                                        this.state = 694;
                                                                        this.match(cluParser.T__7);
                                                                    }
                                                                    break;
                                                            }
                                                            this.state = 698;
                                                            this.expression_list();
                                                        }
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 699;
                                                        this.constant_list();
                                                    }
                                                    break;
                                            }
                                            this.state = 702;
                                            this.match(cluParser.T__18);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case 9:
                        {
                            {
                                this.state = 706;
                                this.match(cluParser.T__84);
                                this.state = 708;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 707;
                                            this.type_spec();
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case 10:
                        {
                            {
                                this.state = 710;
                                _la = this._input.LA(1);
                                if (!(_la === cluParser.T__85 || _la === cluParser.T__86)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 711;
                                this.match(cluParser.T__9);
                                this.state = 712;
                                this.expression(0);
                                this.state = 713;
                                this.match(cluParser.T__10);
                            }
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 729;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 727;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PrimaryContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_primary);
                                        this.state = 717;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 718;
                                        this.match(cluParser.T__39);
                                        this.state = 719;
                                        this.name();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new PrimaryContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_primary);
                                        this.state = 720;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 721;
                                        this.expression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new PrimaryContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, cluParser.RULE_primary);
                                        this.state = 722;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 723;
                                        this.match(cluParser.T__9);
                                        this.state = 724;
                                        this.expression_list();
                                        this.state = 725;
                                        this.match(cluParser.T__10);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 731;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    cluParser.prototype.invocation = function () {
        var _localctx = new InvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, cluParser.RULE_invocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 732;
                this.primary(0);
                this.state = 733;
                this.match(cluParser.T__9);
                this.state = 734;
                this.expression_list();
                this.state = 735;
                this.match(cluParser.T__10);
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
    cluParser.prototype.field_list = function () {
        var _localctx = new Field_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, cluParser.RULE_field_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 737;
                this.field();
                this.state = 742;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 738;
                                this.match(cluParser.T__6);
                                this.state = 739;
                                this.field();
                            }
                        }
                    }
                    this.state = 744;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
    cluParser.prototype.field = function () {
        var _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, cluParser.RULE_field);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 745;
                this.name_list();
                this.state = 746;
                this.match(cluParser.T__7);
                this.state = 747;
                this.expression(0);
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
    cluParser.prototype.idn_list = function () {
        var _localctx = new Idn_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, cluParser.RULE_idn_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 749;
                this.idn();
                this.state = 754;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cluParser.T__6) {
                    {
                        {
                            this.state = 750;
                            this.match(cluParser.T__6);
                            this.state = 751;
                            this.idn();
                        }
                    }
                    this.state = 756;
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
    cluParser.prototype.idn = function () {
        var _localctx = new IdnContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, cluParser.RULE_idn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 757;
                this.match(cluParser.STRING);
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
    cluParser.prototype.name_list = function () {
        var _localctx = new Name_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, cluParser.RULE_name_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 759;
                this.name();
                this.state = 764;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 760;
                                this.match(cluParser.T__6);
                                this.state = 761;
                                this.name();
                            }
                        }
                    }
                    this.state = 766;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
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
    cluParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, cluParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 767;
                this.match(cluParser.STRING);
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
    cluParser.prototype.int_literal = function () {
        var _localctx = new Int_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, cluParser.RULE_int_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 769;
                this.match(cluParser.INT);
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
    cluParser.prototype.real_literal = function () {
        var _localctx = new Real_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, cluParser.RULE_real_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 771;
                this.match(cluParser.FLOAT);
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
    cluParser.prototype.string_literal = function () {
        var _localctx = new String_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, cluParser.RULE_string_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 773;
                this.match(cluParser.STRINGLITERAL);
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
    cluParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 31:
                return this.statement_sempred(_localctx, predIndex);
            case 37:
                return this.expression_sempred(_localctx, predIndex);
            case 38:
                return this.primary_sempred(_localctx, predIndex);
        }
        return true;
    };
    cluParser.prototype.statement_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    cluParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 21);
            case 2:
                return this.precpred(this._ctx, 20);
            case 3:
                return this.precpred(this._ctx, 19);
            case 4:
                return this.precpred(this._ctx, 18);
            case 5:
                return this.precpred(this._ctx, 17);
            case 6:
                return this.precpred(this._ctx, 16);
            case 7:
                return this.precpred(this._ctx, 15);
            case 8:
                return this.precpred(this._ctx, 14);
            case 9:
                return this.precpred(this._ctx, 13);
            case 10:
                return this.precpred(this._ctx, 12);
            case 11:
                return this.precpred(this._ctx, 11);
            case 12:
                return this.precpred(this._ctx, 10);
            case 13:
                return this.precpred(this._ctx, 9);
            case 14:
                return this.precpred(this._ctx, 8);
            case 15:
                return this.precpred(this._ctx, 7);
            case 16:
                return this.precpred(this._ctx, 6);
            case 17:
                return this.precpred(this._ctx, 5);
            case 18:
                return this.precpred(this._ctx, 4);
            case 19:
                return this.precpred(this._ctx, 3);
            case 20:
                return this.precpred(this._ctx, 2);
            case 21:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    cluParser.prototype.primary_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 22:
                return this.precpred(this._ctx, 6);
            case 23:
                return this.precpred(this._ctx, 5);
            case 24:
                return this.precpred(this._ctx, 4);
        }
        return true;
    };
    Object.defineProperty(cluParser, "_ATN", {
        get: function () {
            if (!cluParser.__ATN) {
                cluParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(cluParser._serializedATN));
            }
            return cluParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    cluParser.T__0 = 1;
    cluParser.T__1 = 2;
    cluParser.T__2 = 3;
    cluParser.T__3 = 4;
    cluParser.T__4 = 5;
    cluParser.T__5 = 6;
    cluParser.T__6 = 7;
    cluParser.T__7 = 8;
    cluParser.T__8 = 9;
    cluParser.T__9 = 10;
    cluParser.T__10 = 11;
    cluParser.T__11 = 12;
    cluParser.T__12 = 13;
    cluParser.T__13 = 14;
    cluParser.T__14 = 15;
    cluParser.T__15 = 16;
    cluParser.T__16 = 17;
    cluParser.T__17 = 18;
    cluParser.T__18 = 19;
    cluParser.T__19 = 20;
    cluParser.T__20 = 21;
    cluParser.T__21 = 22;
    cluParser.T__22 = 23;
    cluParser.T__23 = 24;
    cluParser.T__24 = 25;
    cluParser.T__25 = 26;
    cluParser.T__26 = 27;
    cluParser.T__27 = 28;
    cluParser.T__28 = 29;
    cluParser.T__29 = 30;
    cluParser.T__30 = 31;
    cluParser.T__31 = 32;
    cluParser.T__32 = 33;
    cluParser.T__33 = 34;
    cluParser.T__34 = 35;
    cluParser.T__35 = 36;
    cluParser.T__36 = 37;
    cluParser.T__37 = 38;
    cluParser.T__38 = 39;
    cluParser.T__39 = 40;
    cluParser.T__40 = 41;
    cluParser.T__41 = 42;
    cluParser.T__42 = 43;
    cluParser.T__43 = 44;
    cluParser.T__44 = 45;
    cluParser.T__45 = 46;
    cluParser.T__46 = 47;
    cluParser.T__47 = 48;
    cluParser.T__48 = 49;
    cluParser.T__49 = 50;
    cluParser.T__50 = 51;
    cluParser.T__51 = 52;
    cluParser.T__52 = 53;
    cluParser.T__53 = 54;
    cluParser.T__54 = 55;
    cluParser.T__55 = 56;
    cluParser.T__56 = 57;
    cluParser.T__57 = 58;
    cluParser.T__58 = 59;
    cluParser.T__59 = 60;
    cluParser.T__60 = 61;
    cluParser.T__61 = 62;
    cluParser.T__62 = 63;
    cluParser.T__63 = 64;
    cluParser.T__64 = 65;
    cluParser.T__65 = 66;
    cluParser.T__66 = 67;
    cluParser.T__67 = 68;
    cluParser.T__68 = 69;
    cluParser.T__69 = 70;
    cluParser.T__70 = 71;
    cluParser.T__71 = 72;
    cluParser.T__72 = 73;
    cluParser.T__73 = 74;
    cluParser.T__74 = 75;
    cluParser.T__75 = 76;
    cluParser.T__76 = 77;
    cluParser.T__77 = 78;
    cluParser.T__78 = 79;
    cluParser.T__79 = 80;
    cluParser.T__80 = 81;
    cluParser.T__81 = 82;
    cluParser.T__82 = 83;
    cluParser.T__83 = 84;
    cluParser.T__84 = 85;
    cluParser.T__85 = 86;
    cluParser.T__86 = 87;
    cluParser.STRINGLITERAL = 88;
    cluParser.STRING = 89;
    cluParser.INT = 90;
    cluParser.FLOAT = 91;
    cluParser.COMMENT = 92;
    cluParser.WS = 93;
    cluParser.RULE_module = 0;
    cluParser.RULE_procedure = 1;
    cluParser.RULE_iterator = 2;
    cluParser.RULE_cluster = 3;
    cluParser.RULE_parms = 4;
    cluParser.RULE_param = 5;
    cluParser.RULE_args = 6;
    cluParser.RULE_decl_list = 7;
    cluParser.RULE_decl = 8;
    cluParser.RULE_returnz = 9;
    cluParser.RULE_yields = 10;
    cluParser.RULE_signals = 11;
    cluParser.RULE_exception = 12;
    cluParser.RULE_type_spec_list = 13;
    cluParser.RULE_where = 14;
    cluParser.RULE_restriction = 15;
    cluParser.RULE_type_set = 16;
    cluParser.RULE_oper_decl_list = 17;
    cluParser.RULE_oper_decl = 18;
    cluParser.RULE_op_name_list = 19;
    cluParser.RULE_op_name = 20;
    cluParser.RULE_constant_list = 21;
    cluParser.RULE_constant = 22;
    cluParser.RULE_routine_body = 23;
    cluParser.RULE_cluster_body = 24;
    cluParser.RULE_routine = 25;
    cluParser.RULE_equate = 26;
    cluParser.RULE_own_var = 27;
    cluParser.RULE_type_spec = 28;
    cluParser.RULE_field_spec_list = 29;
    cluParser.RULE_field_spec = 30;
    cluParser.RULE_statement = 31;
    cluParser.RULE_tag_arm = 32;
    cluParser.RULE_when_handler = 33;
    cluParser.RULE_others_handler = 34;
    cluParser.RULE_body = 35;
    cluParser.RULE_expression_list = 36;
    cluParser.RULE_expression = 37;
    cluParser.RULE_primary = 38;
    cluParser.RULE_invocation = 39;
    cluParser.RULE_field_list = 40;
    cluParser.RULE_field = 41;
    cluParser.RULE_idn_list = 42;
    cluParser.RULE_idn = 43;
    cluParser.RULE_name_list = 44;
    cluParser.RULE_name = 45;
    cluParser.RULE_int_literal = 46;
    cluParser.RULE_real_literal = 47;
    cluParser.RULE_string_literal = 48;
    // tslint:disable:no-trailing-whitespace
    cluParser.ruleNames = [
        "module", "procedure", "iterator", "cluster", "parms", "param", "args",
        "decl_list", "decl", "returnz", "yields", "signals", "exception", "type_spec_list",
        "where", "restriction", "type_set", "oper_decl_list", "oper_decl", "op_name_list",
        "op_name", "constant_list", "constant", "routine_body", "cluster_body",
        "routine", "equate", "own_var", "type_spec", "field_spec_list", "field_spec",
        "statement", "tag_arm", "when_handler", "others_handler", "body", "expression_list",
        "expression", "primary", "invocation", "field_list", "field", "idn_list",
        "idn", "name_list", "name", "int_literal", "real_literal", "string_literal",
    ];
    cluParser._LITERAL_NAMES = [
        undefined, "'='", "'proc'", "'end'", "'iter'", "'cluster'", "'is'", "','",
        "':'", "'type'", "'('", "')'", "'returns'", "'yields'", "'signals'", "'where'",
        "'has'", "'in'", "'['", "']'", "'rep'", "'routine'", "'own'", "':='",
        "'null'", "'bool'", "'int'", "'real'", "'char'", "'string'", "'any'",
        "'cvt'", "'array'", "'sequence'", "'record'", "'struct'", "'oneof'", "'variant'",
        "'proctype'", "'itertype'", "'.'", "'while'", "'do'", "'for'", "'if'",
        "'then'", "'elseif'", "'else'", "'tagcase'", "'others'", "'return'", "'yield'",
        "'signal'", "'exit'", "'break'", "'begin'", "'resignal'", "'except'",
        "'tag'", "'when'", "'*'", "'~'", "'-'", "'**'", "'//'", "'/'", "'||'",
        "'+'", "'<'", "'<='", "'>='", "'>'", "'~<'", "'~<='", "'~='", "'~>='",
        "'~>'", "'&'", "'cand'", "'|'", "'cor'", "'nil'", "'true'", "'false'",
        "'$'", "'force'", "'up'", "'down'",
    ];
    cluParser._SYMBOLIC_NAMES = [
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
        undefined, undefined, undefined, undefined, "STRINGLITERAL", "STRING",
        "INT", "FLOAT", "COMMENT", "WS",
    ];
    cluParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(cluParser._LITERAL_NAMES, cluParser._SYMBOLIC_NAMES, []);
    cluParser._serializedATNSegments = 2;
    cluParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03_\u030A\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x07\x02" +
        "f\n\x02\f\x02\x0E\x02i\v\x02\x03\x02\x03\x02\x03\x02\x05\x02n\n\x02\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x05\x03t\n\x03\x03\x03\x03\x03\x05\x03x\n" +
        "\x03\x03\x03\x05\x03{\n\x03\x03\x03\x05\x03~\n\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x88\n\x04\x03\x04" +
        "\x03\x04\x05\x04\x8C\n\x04\x03\x04\x05\x04\x8F\n\x04\x03\x04\x05\x04\x92" +
        "\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x05\x05\x9C\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\xA1\n\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06\xAA\n\x06\f\x06\x0E" +
        "\x06\xAD\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xB3\n\x07\x03\b" +
        "\x03\b\x05\b\xB7\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t\xBE\n\t\f\t\x0E" +
        "\t\xC1\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f" +
        "\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xD6\n\r\f" +
        "\r\x0E\r\xD9\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\xDF\n\x0E\x03\x0F" +
        "\x03\x0F\x03\x0F\x07\x0F\xE4\n\x0F\f\x0F\x0E\x0F\xE7\v\x0F\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x07\x10\xED\n\x10\f\x10\x0E\x10\xF0\v\x10\x03\x11" +
        "\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xF7\n\x11\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x07\x12\xFE\n\x12\f\x12\x0E\x12\u0101\v\x12\x07\x12" +
        "\u0103\n\x12\f\x12\x0E\x12\u0106\v\x12\x03\x12\x05\x12\u0109\n\x12\x03" +
        "\x13\x03\x13\x03\x13\x07\x13\u010E\n\x13\f\x13\x0E\x13\u0111\v\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\u011A\n\x15" +
        "\f\x15\x0E\x15\u011D\v\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0122\n\x16" +
        "\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0129\n\x17\f\x17\x0E" +
        "\x17\u012C\v\x17\x03\x18\x03\x18\x05\x18\u0130\n\x18\x03\x19\x07\x19\u0133" +
        "\n\x19\f\x19\x0E\x19\u0136\v\x19\x03\x19\x07\x19\u0139\n\x19\f\x19\x0E" +
        "\x19\u013C\v\x19\x03\x19\x07\x19\u013F\n\x19\f\x19\x0E\x19\u0142\v\x19" +
        "\x03\x1A\x07\x1A\u0145\n\x1A\f\x1A\x0E\x1A\u0148\v\x1A\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x07\x1A\u014E\n\x1A\f\x1A\x0E\x1A\u0151\v\x1A\x03\x1A" +
        "\x07\x1A\u0154\n\x1A\f\x1A\x0E\x1A\u0157\v\x1A\x03\x1A\x03\x1A\x07\x1A" +
        "\u015B\n\x1A\f\x1A\x0E\x1A\u015E\v\x1A\x03\x1B\x03\x1B\x05\x1B\u0162\n" +
        "\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0168\n\x1C\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x05\x1D\u0176\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0184\n\x1E" +
        "\x05\x1E\u0186\n\x1E\x03\x1E\x03\x1E\x05\x1E\u018A\n\x1E\x03\x1E\x03\x1E" +
        "\x05\x1E\u018E\n\x1E\x03\x1E\x05\x1E\u0191\n\x1E\x03\x1E\x05\x1E\u0194" +
        "\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0198\n\x1E\x05\x1E\u019A\n\x1E\x03\x1F" +
        "\x03\x1F\x03\x1F\x07\x1F\u019F\n\x1F\f\x1F\x0E\x1F\u01A2\v\x1F\x03 \x03" +
        " \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x03!\x03!\x03!\x05!\u01B8\n!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01CA\n!\x03!\x03" +
        "!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x07" +
        "!\u01DB\n!\f!\x0E!\u01DE\v!\x03!\x03!\x05!\u01E2\n!\x03!\x03!\x03!\x03" +
        "!\x03!\x07!\u01E9\n!\f!\x0E!\u01EC\v!\x03!\x03!\x03!\x05!\u01F1\n!\x03" +
        "!\x03!\x03!\x03!\x05!\u01F7\n!\x03!\x03!\x03!\x05!\u01FC\n!\x03!\x03!" +
        "\x03!\x05!\u0201\n!\x03!\x03!\x03!\x03!\x03!\x05!\u0208\n!\x03!\x03!\x03" +
        "!\x03!\x03!\x07!\u020F\n!\f!\x0E!\u0212\v!\x03!\x05!\u0215\n!\x03!\x05" +
        "!\u0218\n!\x07!\u021A\n!\f!\x0E!\u021D\v!\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x03\"\x03\"\x05\"\u0227\n\"\x03\"\x03\"\x03\"\x03#\x03#\x03#" +
        "\x03#\x03#\x03#\x05#\u0232\n#\x05#\u0234\n#\x03#\x03#\x03#\x03$\x03$\x03" +
        "$\x03$\x03$\x03$\x03$\x05$\u0240\n$\x03$\x03$\x03$\x03%\x07%\u0246\n%" +
        "\f%\x0E%\u0249\v%\x03%\x07%\u024C\n%\f%\x0E%\u024F\v%\x03&\x03&\x03&\x07" +
        "&\u0254\n&\f&\x0E&\u0257\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x05\'\u0263\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u02A4\n" +
        "\'\f\'\x0E\'\u02A7\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05" +
        "(\u02B2\n(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u02BB\n(\x03(\x03(" +
        "\x05(\u02BF\n(\x03(\x03(\x05(\u02C3\n(\x03(\x03(\x05(\u02C7\n(\x03(\x03" +
        "(\x03(\x03(\x03(\x05(\u02CE\n(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
        "(\x03(\x03(\x07(\u02DA\n(\f(\x0E(\u02DD\v(\x03)\x03)\x03)\x03)\x03)\x03" +
        "*\x03*\x03*\x07*\u02E7\n*\f*\x0E*\u02EA\v*\x03+\x03+\x03+\x03+\x03,\x03" +
        ",\x03,\x07,\u02F3\n,\f,\x0E,\u02F6\v,\x03-\x03-\x03.\x03.\x03.\x07.\u02FD" +
        "\n.\f.\x0E.\u0300\v.\x03/\x03/\x030\x030\x031\x031\x032\x032\x032\x02" +
        "\x02\x05@LN3\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
        "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02\x02\x06\x03\x02$\'\x03\x02()\x03\x0245\x03\x02XY\x02\u0365" +
        "\x02g\x03\x02\x02\x02\x04o\x03\x02\x02\x02\x06\x83\x03\x02\x02\x02\b\x97" +
        "\x03\x02\x02\x02\n\xA6\x03\x02\x02\x02\f\xAE\x03\x02\x02\x02\x0E\xB4\x03" +
        "\x02\x02\x02\x10\xBA\x03\x02\x02\x02\x12\xC2\x03\x02\x02\x02\x14\xC6\x03" +
        "\x02\x02\x02\x16\xCB\x03\x02\x02\x02\x18\xD0\x03\x02\x02\x02\x1A\xDC\x03" +
        "\x02\x02\x02\x1C\xE0\x03\x02\x02\x02\x1E\xE8\x03\x02\x02\x02 \xF1\x03" +
        "\x02\x02\x02\"\u0108\x03\x02\x02\x02$\u010A\x03\x02\x02\x02&\u0112\x03" +
        "\x02\x02\x02(\u0116\x03\x02\x02\x02*\u011E\x03\x02\x02\x02,\u0125\x03" +
        "\x02\x02\x02.\u012F\x03\x02\x02\x020\u0134\x03\x02\x02\x022\u0146\x03" +
        "\x02\x02\x024\u0161\x03\x02\x02\x026\u0163\x03\x02\x02\x028\u0169\x03" +
        "\x02\x02\x02:\u0199\x03\x02\x02\x02<\u019B\x03\x02\x02\x02>\u01A3\x03" +
        "\x02\x02\x02@\u0207\x03\x02\x02\x02B\u021E\x03\x02\x02\x02D\u022B\x03" +
        "\x02\x02\x02F\u0238\x03\x02\x02\x02H\u0247\x03\x02\x02\x02J\u0250\x03" +
        "\x02\x02\x02L\u0262\x03\x02\x02\x02N\u02CD\x03\x02\x02\x02P\u02DE\x03" +
        "\x02\x02\x02R\u02E3\x03\x02\x02\x02T\u02EB\x03\x02\x02\x02V\u02EF\x03" +
        "\x02\x02\x02X\u02F7\x03\x02\x02\x02Z\u02F9\x03\x02\x02\x02\\\u0301\x03" +
        "\x02\x02\x02^\u0303\x03\x02\x02\x02`\u0305\x03\x02\x02\x02b\u0307\x03" +
        "\x02\x02\x02df\x056\x1C\x02ed\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03" +
        "\x02\x02\x02gh\x03\x02\x02\x02hm\x03\x02\x02\x02ig\x03\x02\x02\x02jn\x05" +
        "\x04\x03\x02kn\x05\x06\x04\x02ln\x05\b\x05\x02mj\x03\x02\x02\x02mk\x03" +
        "\x02\x02\x02ml\x03\x02\x02\x02n\x03\x03\x02\x02\x02op\x05X-\x02pq\x07" +
        "\x03\x02\x02qs\x07\x04\x02\x02rt\x05\n\x06\x02sr\x03\x02\x02\x02st\x03" +
        "\x02\x02\x02tu\x03\x02\x02\x02uw\x05\x0E\b\x02vx\x05\x14\v\x02wv\x03\x02" +
        "\x02\x02wx\x03\x02\x02\x02xz\x03\x02\x02\x02y{\x05\x18\r\x02zy\x03\x02" +
        "\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|~\x05\x1E\x10\x02}|\x03\x02" +
        "\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x050\x19\x02\x80" +
        "\x81\x07\x05\x02\x02\x81\x82\x05X-\x02\x82\x05\x03\x02\x02\x02\x83\x84" +
        "\x05X-\x02\x84\x85\x07\x03\x02\x02\x85\x87\x07\x06\x02\x02\x86\x88\x05" +
        "\n\x06\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03" +
        "\x02\x02\x02\x89\x8B\x05\x0E\b\x02\x8A\x8C\x05\x16\f\x02\x8B\x8A\x03\x02" +
        "\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8F\x05\x18" +
        "\r\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x03\x02" +
        "\x02\x02\x90\x92\x05\x1E\x10\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02" +
        "\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x050\x19\x02\x94\x95\x07\x05" +
        "\x02\x02\x95\x96\x05X-\x02\x96\x07\x03\x02\x02\x02\x97\x98\x05X-\x02\x98" +
        "\x99\x07\x03\x02\x02\x99\x9B\x07\x07\x02\x02\x9A\x9C\x05\n\x06\x02\x9B" +
        "\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D" +
        "\x9E\x07\b\x02\x02\x9E\xA0\x05V,\x02\x9F\xA1\x05\x1E\x10\x02\xA0\x9F\x03" +
        "\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x05" +
        "2\x1A\x02\xA3\xA4\x07\x05\x02\x02\xA4\xA5\x05X-\x02\xA5\t\x03\x02\x02" +
        "\x02\xA6\xAB\x05\f\x07\x02\xA7\xA8\x07\t\x02\x02\xA8\xAA\x05\f\x07\x02" +
        "\xA9\xA7\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02" +
        "\xAB\xAC\x03\x02\x02\x02\xAC\v\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02" +
        "\xAE\xAF\x05V,\x02\xAF\xB2\x07\n\x02\x02\xB0\xB3\x07\v\x02\x02\xB1\xB3" +
        "\x05:\x1E\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\r\x03" +
        "\x02\x02\x02\xB4\xB6\x07\f\x02\x02\xB5\xB7\x05\x10\t\x02\xB6\xB5\x03\x02" +
        "\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x07\r" +
        "\x02\x02\xB9\x0F\x03\x02\x02\x02\xBA\xBF\x05\x12\n\x02\xBB\xBC\x07\t\x02" +
        "\x02\xBC\xBE\x05\x12\n\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC1\x03\x02\x02" +
        "\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\x11\x03\x02\x02" +
        "\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC3\x05V,\x02\xC3\xC4\x07\n\x02\x02\xC4" +
        "\xC5\x05:\x1E\x02\xC5\x13\x03\x02\x02\x02\xC6\xC7\x07\x0E\x02\x02\xC7" +
        "\xC8\x07\f\x02\x02\xC8\xC9\x05\x1C\x0F\x02\xC9\xCA\x07\r\x02\x02\xCA\x15" +
        "\x03\x02\x02\x02\xCB\xCC\x07\x0F\x02\x02\xCC\xCD\x07\f\x02\x02\xCD\xCE" +
        "\x05\x1C\x0F\x02\xCE\xCF\x07\r\x02\x02\xCF\x17\x03\x02\x02\x02\xD0\xD1" +
        "\x07\x10\x02\x02\xD1\xD2\x07\f\x02\x02\xD2\xD7\x05\x1A\x0E\x02\xD3\xD4" +
        "\x07\t\x02\x02\xD4\xD6\x05\x1A\x0E\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD9" +
        "\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDA" +
        "\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB\x07\r\x02\x02\xDB\x19" +
        "\x03\x02\x02\x02\xDC\xDE\x05\\/\x02\xDD\xDF\x05\x1C\x0F\x02\xDE\xDD\x03" +
        "\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\x1B\x03\x02\x02\x02\xE0\xE5\x05" +
        ":\x1E\x02\xE1\xE2\x07\t\x02\x02\xE2\xE4\x05:\x1E\x02\xE3\xE1\x03\x02\x02" +
        "\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02" +
        "\x02\xE6\x1D\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE9\x07\x11\x02" +
        "\x02\xE9\xEE\x05 \x11\x02\xEA\xEB\x07\t\x02\x02\xEB\xED\x05 \x11\x02\xEC" +
        "\xEA\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE" +
        "\xEF\x03\x02\x02\x02\xEF\x1F\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1" +
        "\xF6\x05X-\x02\xF2\xF3\x07\x12\x02\x02\xF3\xF7\x05$\x13\x02\xF4\xF5\x07" +
        "\x13\x02\x02\xF5\xF7\x05\"\x12\x02\xF6\xF2\x03\x02\x02\x02\xF6\xF4\x03" +
        "\x02\x02\x02\xF7!\x03\x02\x02\x02\xF8\u0103\x05X-\x02\xF9\xFA\x05X-\x02" +
        "\xFA\xFB\x07\x12\x02\x02\xFB\xFF\x05$\x13\x02\xFC\xFE\x056\x1C\x02\xFD" +
        "\xFC\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02" +
        "\xFF\u0100\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02" +
        "\x02\x02\u0102\xF8\x03\x02\x02\x02\u0102\xF9\x03\x02\x02\x02\u0103\u0106" +
        "\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
        "\u0105\u0109\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0109\x05" +
        "X-\x02\u0108\u0104\x03\x02\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109#" +
        "\x03\x02\x02\x02\u010A\u010F\x05&\x14\x02\u010B\u010C\x07\t\x02\x02\u010C" +
        "\u010E\x05&\x14\x02\u010D\u010B\x03\x02\x02\x02\u010E\u0111\x03\x02\x02" +
        "\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110%\x03" +
        "\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0113\x05(\x15\x02\u0113" +
        "\u0114\x07\n\x02\x02\u0114\u0115\x05:\x1E\x02\u0115\'\x03\x02\x02\x02" +
        "\u0116\u011B\x05*\x16\x02\u0117\u0118\x07\t\x02\x02\u0118\u011A\x05*\x16" +
        "\x02\u0119\u0117\x03\x02\x02\x02\u011A\u011D\x03\x02\x02\x02\u011B\u0119" +
        "\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C)\x03\x02\x02\x02\u011D" +
        "\u011B\x03\x02\x02\x02\u011E\u011F\x05\\/\x02\u011F\u0121\x07\x14\x02" +
        "\x02\u0120\u0122\x05,\x17\x02\u0121\u0120\x03\x02\x02\x02\u0121\u0122" +
        "\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x07\x15\x02\x02" +
        "\u0124+\x03\x02\x02\x02\u0125\u012A\x05.\x18\x02\u0126\u0127\x07\t\x02" +
        "\x02\u0127\u0129\x05.\x18\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012C" +
        "\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02" +
        "\u012B-\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u0130\x05L\'" +
        "\x02\u012E\u0130\x05:\x1E\x02\u012F\u012D\x03\x02\x02\x02\u012F\u012E" +
        "\x03\x02\x02\x02\u0130/\x03\x02\x02\x02\u0131\u0133\x056\x1C\x02\u0132" +
        "\u0131\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02" +
        "\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u013A\x03\x02\x02\x02\u0136" +
        "\u0134\x03\x02\x02\x02\u0137\u0139\x058\x1D\x02\u0138\u0137\x03\x02\x02" +
        "\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B" +
        "\x03\x02\x02\x02\u013B\u0140\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02" +
        "\u013D\u013F\x05@!\x02\u013E\u013D\x03\x02\x02\x02\u013F\u0142\x03\x02" +
        "\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141" +
        "1\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0145\x056\x1C\x02" +
        "\u0144\u0143\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144\x03" +
        "\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148" +
        "\u0146\x03\x02\x02\x02\u0149\u014A\x07\x16\x02\x02\u014A\u014B\x07\x03" +
        "\x02\x02\u014B\u014F\x05:\x1E\x02\u014C\u014E\x056\x1C\x02\u014D\u014C" +
        "\x03\x02\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02" +
        "\u014F\u0150\x03\x02\x02\x02\u0150\u0155\x03\x02\x02\x02\u0151\u014F\x03" +
        "\x02\x02\x02\u0152\u0154\x058\x1D\x02\u0153\u0152\x03\x02\x02\x02\u0154" +
        "\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02" +
        "\x02\x02\u0156\u0158\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158" +
        "\u015C\x07\x17\x02\x02\u0159\u015B\x054\x1B\x02\u015A\u0159\x03\x02\x02" +
        "\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D" +
        "\x03\x02\x02\x02\u015D3\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F" +
        "\u0162\x05\x04\x03\x02\u0160\u0162\x05\x06\x04\x02\u0161\u015F\x03\x02" +
        "\x02\x02\u0161\u0160\x03\x02\x02\x02\u01625\x03\x02\x02\x02\u0163\u0164" +
        "\x05X-\x02\u0164\u0167\x07\x03\x02\x02\u0165\u0168\x05.\x18\x02\u0166" +
        "\u0168\x05\"\x12\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02" +
        "\x02\u01687\x03\x02\x02\x02\u0169\u0175\x07\x18\x02\x02\u016A\u0176\x05" +
        "\x12\n\x02\u016B\u016C\x05X-\x02\u016C\u016D\x07\n\x02\x02\u016D\u016E" +
        "\x05:\x1E\x02\u016E\u016F\x07\x19\x02\x02\u016F\u0170\x05L\'\x02\u0170" +
        "\u0176\x03\x02\x02\x02\u0171\u0172\x05\x10\t\x02\u0172\u0173\x07\x19\x02" +
        "\x02\u0173\u0174\x05P)\x02\u0174\u0176\x03\x02\x02\x02\u0175\u016A\x03" +
        "\x02\x02\x02\u0175\u016B\x03\x02\x02\x02\u0175\u0171\x03\x02\x02\x02\u0176" +
        "9\x03\x02\x02\x02\u0177\u019A\x07\x1A\x02\x02\u0178\u019A\x07\x1B\x02" +
        "\x02\u0179\u019A\x07\x1C\x02\x02\u017A\u019A\x07\x1D\x02\x02\u017B\u019A" +
        "\x07\x1E\x02\x02\u017C\u019A\x07\x1F\x02\x02\u017D\u019A\x07 \x02\x02" +
        "\u017E\u019A\x07\x16\x02\x02\u017F\u019A\x07!\x02\x02\u0180\u0186\x07" +
        "\"\x02\x02\u0181\u0183\x07#\x02\x02\u0182\u0184\x05:\x1E\x02\u0183\u0182" +
        "\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0186\x03\x02\x02\x02" +
        "\u0185\u0180\x03\x02\x02\x02\u0185\u0181\x03\x02\x02\x02\u0186\u019A\x03" +
        "\x02\x02\x02\u0187\u0189\t\x02\x02\x02\u0188\u018A\x05<\x1F\x02\u0189" +
        "\u0188\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u019A\x03\x02" +
        "\x02\x02\u018B\u018D\t\x03\x02\x02\u018C\u018E\x05<\x1F\x02\u018D\u018C" +
        "\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0190\x03\x02\x02\x02" +
        "\u018F\u0191\x05\x14\v\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03" +
        "\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u0194\x05\x18\r\x02\u0193" +
        "\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u019A\x03\x02" +
        "\x02\x02\u0195\u0197\x05X-\x02\u0196\u0198\x05,\x17\x02\u0197\u0196\x03" +
        "\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199" +
        "\u0177\x03\x02\x02\x02\u0199\u0178\x03\x02\x02\x02\u0199\u0179\x03\x02" +
        "\x02\x02\u0199\u017A\x03\x02\x02\x02\u0199\u017B\x03\x02\x02\x02\u0199" +
        "\u017C\x03\x02\x02\x02\u0199\u017D\x03\x02\x02\x02\u0199\u017E\x03\x02" +
        "\x02\x02\u0199\u017F\x03\x02\x02\x02\u0199\u0185\x03\x02\x02\x02\u0199" +
        "\u0187\x03\x02\x02\x02\u0199\u018B\x03\x02\x02\x02\u0199\u0195\x03\x02" +
        "\x02\x02\u019A;\x03\x02\x02\x02\u019B\u01A0\x05> \x02\u019C\u019D\x07" +
        "\t\x02\x02\u019D\u019F\x05> \x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A2" +
        "\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02" +
        "\u01A1=\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3\u01A4\x05Z." +
        "\x02\u01A4\u01A5\x07\n\x02\x02\u01A5\u01A6\x05:\x1E\x02\u01A6?\x03\x02" +
        "\x02\x02\u01A7\u01A8\b!\x01\x02\u01A8\u0208\x05\x12\n\x02\u01A9\u01AA" +
        "\x05X-\x02\u01AA\u01AB\x07\n\x02\x02\u01AB\u01AC\x05:\x1E\x02\u01AC\u01AD" +
        "\x07\x19\x02\x02\u01AD\u01AE\x05L\'\x02\u01AE\u0208\x03\x02\x02\x02\u01AF" +
        "\u01B0\x05\x10\t\x02\u01B0\u01B1\x07\x19\x02\x02\u01B1\u01B2\x05P)\x02" +
        "\u01B2\u0208\x03\x02\x02\x02\u01B3\u01B4\x05V,\x02\u01B4\u01B7\x07\x19" +
        "\x02\x02\u01B5\u01B8\x05P)\x02\u01B6\u01B8\x05J&\x02\u01B7\u01B5\x03\x02" +
        "\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B8\u0208\x03\x02\x02\x02\u01B9" +
        "\u01BA\x05N(\x02\u01BA\u01BB\x07*\x02\x02\u01BB\u01BC\x05\\/\x02\u01BC" +
        "\u01BD\x07\x19\x02\x02\u01BD\u01BE\x05L\'\x02\u01BE\u0208\x03\x02\x02" +
        "\x02\u01BF\u0208\x05P)\x02\u01C0\u01C1\x07+\x02\x02\u01C1\u01C2\x05L\'" +
        "\x02\u01C2\u01C3\x07,\x02\x02\u01C3\u01C4\x05H%\x02\u01C4\u01C5\x07\x05" +
        "\x02\x02\u01C5\u0208\x03\x02\x02\x02\u01C6\u01C9\x07-\x02\x02\u01C7\u01CA" +
        "\x05\x10\t\x02\u01C8\u01CA\x05V,\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9" +
        "\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02" +
        "\x02\x02\u01CB\u01CC\x07\x13\x02\x02\u01CC\u01CD\x05P)\x02\u01CD\u01CE" +
        "\x07,\x02\x02\u01CE\u01CF\x05H%\x02\u01CF\u01D0\x07\x05\x02\x02\u01D0" +
        "\u0208\x03\x02\x02\x02\u01D1\u01D2\x07.\x02\x02\u01D2\u01D3\x05L\'\x02" +
        "\u01D3\u01D4\x07/\x02\x02\u01D4\u01DC\x05H%\x02\u01D5\u01D6\x070\x02\x02" +
        "\u01D6\u01D7\x05L\'\x02\u01D7\u01D8\x07/\x02\x02\u01D8\u01D9\x05H%\x02" +
        "\u01D9\u01DB\x03\x02\x02\x02\u01DA\u01D5\x03\x02\x02\x02\u01DB\u01DE\x03" +
        "\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD" +
        "\u01E1\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E0\x071\x02" +
        "\x02\u01E0\u01E2\x05H%\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03" +
        "\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x07\x05\x02\x02\u01E4" +
        "\u0208\x03\x02\x02\x02\u01E5\u01E6\x072\x02\x02\u01E6\u01EA\x05L\'\x02" +
        "\u01E7\u01E9\x05B\"\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EC\x03\x02" +
        "\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB" +
        "\u01F0\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01EE\x073\x02" +
        "\x02\u01EE\u01EF\x07\n\x02\x02\u01EF\u01F1\x05H%\x02\u01F0\u01ED\x03\x02" +
        "\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
        "\u01F3\x07\x05\x02\x02\u01F3\u0208\x03\x02\x02\x02\u01F4\u01F6\t\x04\x02" +
        "\x02\u01F5\u01F7\x05J&\x02\u01F6\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03" +
        "\x02\x02\x02\u01F7\u0208\x03\x02\x02\x02\u01F8\u01F9\x076\x02\x02\u01F9" +
        "\u01FB\x05\\/\x02\u01FA\u01FC\x05J&\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB" +
        "\u01FC\x03\x02\x02\x02\u01FC\u0208\x03\x02\x02\x02\u01FD\u01FE\x077\x02" +
        "\x02\u01FE\u0200\x05\\/\x02\u01FF\u0201\x05J&\x02\u0200\u01FF\x03\x02" +
        "\x02\x02\u0200";
    cluParser._serializedATNSegment1 = "\u0201\x03\x02\x02\x02\u0201\u0208\x03\x02\x02\x02\u0202\u0208\x078\x02" +
        "\x02\u0203\u0204\x079\x02\x02\u0204\u0205\x05H%\x02\u0205\u0206\x07\x05" +
        "\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u01A7\x03\x02\x02\x02\u0207" +
        "\u01A9\x03\x02\x02\x02\u0207\u01AF\x03\x02\x02\x02\u0207\u01B3\x03\x02" +
        "\x02\x02\u0207\u01B9\x03\x02\x02\x02\u0207\u01BF\x03\x02\x02\x02\u0207" +
        "\u01C0\x03\x02\x02\x02\u0207\u01C6\x03\x02\x02\x02\u0207\u01D1\x03\x02" +
        "\x02\x02\u0207\u01E5\x03\x02\x02\x02\u0207\u01F4\x03\x02\x02\x02\u0207" +
        "\u01F8\x03\x02\x02\x02\u0207\u01FD\x03\x02\x02\x02\u0207\u0202\x03\x02" +
        "\x02\x02\u0207\u0203\x03\x02\x02\x02\u0208\u021B\x03\x02\x02\x02\u0209" +
        "\u0217\f\x03\x02\x02\u020A\u020B\x07:\x02\x02\u020B\u0218\x05Z.\x02\u020C" +
        "\u0210\x07;\x02\x02\u020D\u020F\x05D#\x02\u020E\u020D\x03\x02\x02\x02" +
        "\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03" +
        "\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213" +
        "\u0215\x05F$\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02" +
        "\u0215\u0216\x03\x02\x02\x02\u0216\u0218\x07\x05\x02\x02\u0217\u020A\x03" +
        "\x02\x02\x02\u0217\u020C\x03\x02\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219" +
        "\u0209\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B\u0219\x03\x02" +
        "\x02\x02\u021B\u021C\x03\x02\x02\x02\u021CA\x03\x02\x02\x02\u021D\u021B" +
        "\x03\x02\x02\x02\u021E\u021F\x07<\x02\x02\u021F\u0226\x05Z.\x02\u0220" +
        "\u0221\x07\f\x02\x02\u0221\u0222\x05X-\x02\u0222\u0223\x07\n\x02\x02\u0223" +
        "\u0224\x05:\x1E\x02\u0224\u0225\x07\r\x02\x02\u0225\u0227\x03\x02\x02" +
        "\x02\u0226\u0220\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0228" +
        "\x03\x02\x02\x02\u0228\u0229\x07\n\x02\x02\u0229\u022A\x05H%\x02\u022A" +
        "C\x03\x02\x02\x02\u022B\u022C\x07=\x02\x02\u022C\u0233\x05Z.\x02\u022D" +
        "\u022E\x07\f\x02\x02\u022E\u022F\x07>\x02\x02\u022F\u0234\x07\r\x02\x02" +
        "\u0230\u0232\x05\x10\t\x02\u0231\u0230\x03\x02\x02\x02\u0231\u0232\x03" +
        "\x02\x02\x02\u0232\u0234\x03\x02\x02\x02\u0233\u022D\x03\x02\x02\x02\u0233" +
        "\u0231\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x07\n\x02" +
        "\x02\u0236\u0237\x05H%\x02\u0237E\x03\x02\x02\x02\u0238\u023F\x073\x02" +
        "\x02\u0239\u023A\x07\f\x02\x02\u023A\u023B\x05X-\x02\u023B\u023C\x07\n" +
        "\x02\x02\u023C\u023D\x05:\x1E\x02\u023D\u023E\x07\r\x02\x02\u023E\u0240" +
        "\x03\x02\x02\x02\u023F\u0239\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02" +
        "\u0240\u0241\x03\x02\x02\x02\u0241\u0242\x07\n\x02\x02\u0242\u0243\x05" +
        "H%\x02\u0243G\x03\x02\x02\x02\u0244\u0246\x056\x1C\x02\u0245\u0244\x03" +
        "\x02\x02\x02\u0246\u0249\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247" +
        "\u0248\x03\x02\x02\x02\u0248\u024D\x03\x02\x02\x02\u0249\u0247\x03\x02" +
        "\x02\x02\u024A\u024C\x05@!\x02\u024B\u024A\x03\x02\x02\x02\u024C\u024F" +
        "\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02" +
        "\u024EI\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u0250\u0255\x05L\'" +
        "\x02\u0251\u0252\x07\t\x02\x02\u0252\u0254\x05L\'\x02\u0253\u0251\x03" +
        "\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02\u0255" +
        "\u0256\x03\x02\x02\x02\u0256K\x03\x02\x02\x02\u0257\u0255\x03\x02\x02" +
        "\x02\u0258\u0259\b\'\x01\x02\u0259\u0263\x05N(\x02\u025A\u025B\x07\f\x02" +
        "\x02\u025B\u025C\x05L\'\x02\u025C\u025D\x07\r\x02\x02\u025D\u0263\x03" +
        "\x02\x02\x02\u025E\u025F\x07?\x02\x02\u025F\u0263\x05L\'\x19\u0260\u0261" +
        "\x07@\x02\x02\u0261\u0263\x05L\'\x18\u0262\u0258\x03\x02\x02\x02\u0262" +
        "\u025A\x03\x02\x02\x02\u0262\u025E\x03\x02\x02\x02\u0262\u0260\x03\x02" +
        "\x02\x02\u0263\u02A5\x03\x02\x02\x02\u0264\u0265\f\x17\x02\x02\u0265\u0266" +
        "\x07A\x02\x02\u0266\u02A4\x05L\'\x18\u0267\u0268\f\x16\x02\x02\u0268\u0269" +
        "\x07B\x02\x02\u0269\u02A4\x05L\'\x17\u026A\u026B\f\x15\x02\x02\u026B\u026C" +
        "\x07C\x02\x02\u026C\u02A4\x05L\'\x16\u026D\u026E\f\x14\x02\x02\u026E\u026F" +
        "\x07>\x02\x02\u026F\u02A4\x05L\'\x15\u0270\u0271\f\x13\x02\x02\u0271\u0272" +
        "\x07D\x02\x02\u0272\u02A4\x05L\'\x14\u0273\u0274\f\x12\x02\x02\u0274\u0275" +
        "\x07E\x02\x02\u0275\u02A4\x05L\'\x13\u0276\u0277\f\x11\x02\x02\u0277\u0278" +
        "\x07@\x02\x02\u0278\u02A4\x05L\'\x12\u0279\u027A\f\x10\x02\x02\u027A\u027B" +
        "\x07F\x02\x02\u027B\u02A4\x05L\'\x11\u027C\u027D\f\x0F\x02\x02\u027D\u027E" +
        "\x07G\x02\x02\u027E\u02A4\x05L\'\x10\u027F\u0280\f\x0E\x02\x02\u0280\u0281" +
        "\x07\x03\x02\x02\u0281\u02A4\x05L\'\x0F\u0282\u0283\f\r\x02\x02\u0283" +
        "\u0284\x07H\x02\x02\u0284\u02A4\x05L\'\x0E\u0285\u0286\f\f\x02\x02\u0286" +
        "\u0287\x07I\x02\x02\u0287\u02A4\x05L\'\r\u0288\u0289\f\v\x02\x02\u0289" +
        "\u028A\x07J\x02\x02\u028A\u02A4\x05L\'\f\u028B\u028C\f\n\x02\x02\u028C" +
        "\u028D\x07K\x02\x02\u028D\u02A4\x05L\'\v\u028E\u028F\f\t\x02\x02\u028F" +
        "\u0290\x07L\x02\x02\u0290\u02A4\x05L\'\n\u0291\u0292\f\b\x02\x02\u0292" +
        "\u0293\x07M\x02\x02\u0293\u02A4\x05L\'\t\u0294\u0295\f\x07\x02\x02\u0295" +
        "\u0296\x07N\x02\x02\u0296\u02A4\x05L\'\b\u0297\u0298\f\x06\x02\x02\u0298" +
        "\u0299\x07O\x02\x02\u0299\u02A4\x05L\'\x07\u029A\u029B\f\x05\x02\x02\u029B" +
        "\u029C\x07P\x02\x02\u029C\u02A4\x05L\'\x06\u029D\u029E\f\x04\x02\x02\u029E" +
        "\u029F\x07Q\x02\x02\u029F\u02A4\x05L\'\x05\u02A0\u02A1\f\x03\x02\x02\u02A1" +
        "\u02A2\x07R\x02\x02\u02A2\u02A4\x05L\'\x04\u02A3\u0264\x03\x02\x02\x02" +
        "\u02A3\u0267\x03\x02\x02\x02\u02A3\u026A\x03\x02\x02\x02\u02A3\u026D\x03" +
        "\x02\x02\x02\u02A3\u0270\x03\x02\x02\x02\u02A3\u0273\x03\x02\x02\x02\u02A3" +
        "\u0276\x03\x02\x02\x02\u02A3\u0279\x03\x02\x02\x02\u02A3\u027C\x03\x02" +
        "\x02\x02\u02A3\u027F\x03\x02\x02\x02\u02A3\u0282\x03\x02\x02\x02\u02A3" +
        "\u0285\x03\x02\x02\x02\u02A3\u0288\x03\x02\x02\x02\u02A3\u028B\x03\x02" +
        "\x02\x02\u02A3\u028E\x03\x02\x02\x02\u02A3\u0291\x03\x02\x02\x02\u02A3" +
        "\u0294\x03\x02\x02\x02\u02A3\u0297\x03\x02\x02\x02\u02A3\u029A\x03\x02" +
        "\x02\x02\u02A3\u029D\x03\x02\x02\x02\u02A3\u02A0\x03\x02\x02\x02\u02A4" +
        "\u02A7\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02" +
        "\x02\x02\u02A6M\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A8\u02A9" +
        "\b(\x01\x02\u02A9\u02CE\x07S\x02\x02\u02AA\u02CE\x07T\x02\x02\u02AB\u02CE" +
        "\x07U\x02\x02\u02AC\u02CE\x05^0\x02\u02AD\u02CE\x05`1\x02\u02AE\u02CE" +
        "\x05b2\x02\u02AF\u02B1\x05X-\x02\u02B0\u02B2\x05,\x17\x02\u02B1\u02B0" +
        "\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02CE\x03\x02\x02\x02" +
        "\u02B3\u02B4\x05:\x1E\x02\u02B4\u02C2\x07V\x02\x02\u02B5\u02C3\x05R*\x02" +
        "\u02B6\u02BE\x07\x14\x02\x02\u02B7\u02B8\x05L\'\x02\u02B8\u02B9\x07\n" +
        "\x02\x02\u02B9\u02BB\x03\x02\x02\x02\u02BA\u02B7\x03\x02\x02\x02\u02BA" +
        "\u02BB\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BF\x05J&\x02" +
        "\u02BD\u02BF\x05,\x17\x02\u02BE\u02BA\x03\x02\x02\x02\u02BE\u02BD\x03" +
        "\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C1\x07\x15\x02\x02\u02C1" +
        "\u02C3\x03\x02\x02\x02\u02C2\u02B5\x03\x02\x02\x02\u02C2\u02B6\x03\x02" +
        "\x02\x02\u02C3\u02CE\x03\x02\x02\x02\u02C4\u02C6\x07W\x02\x02\u02C5\u02C7" +
        "\x05:\x1E\x02\u02C6\u02C5\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02" +
        "\u02C7\u02CE\x03\x02\x02\x02\u02C8\u02C9\t\x05\x02\x02\u02C9\u02CA\x07" +
        "\f\x02\x02\u02CA\u02CB\x05L\'\x02\u02CB\u02CC\x07\r\x02\x02\u02CC\u02CE" +
        "\x03\x02\x02\x02\u02CD\u02A8\x03\x02\x02\x02\u02CD\u02AA\x03\x02\x02\x02" +
        "\u02CD\u02AB\x03\x02\x02\x02\u02CD\u02AC\x03\x02\x02\x02\u02CD\u02AD\x03" +
        "\x02\x02\x02\u02CD\u02AE\x03\x02\x02\x02\u02CD\u02AF\x03\x02\x02\x02\u02CD" +
        "\u02B3\x03\x02\x02\x02\u02CD\u02C4\x03\x02\x02\x02\u02CD\u02C8\x03\x02" +
        "\x02\x02\u02CE\u02DB\x03\x02\x02\x02\u02CF\u02D0\f\b\x02\x02\u02D0\u02D1" +
        "\x07*\x02\x02\u02D1\u02DA\x05\\/\x02\u02D2\u02D3\f\x07\x02\x02\u02D3\u02DA" +
        "\x05L\'\x02\u02D4\u02D5\f\x06\x02\x02\u02D5\u02D6\x07\f\x02\x02\u02D6" +
        "\u02D7\x05J&\x02\u02D7\u02D8\x07\r\x02\x02\u02D8\u02DA\x03\x02\x02\x02" +
        "\u02D9\u02CF\x03\x02\x02\x02\u02D9\u02D2\x03\x02\x02\x02\u02D9\u02D4\x03" +
        "\x02\x02\x02\u02DA\u02DD\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB" +
        "\u02DC\x03\x02\x02\x02\u02DCO\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02" +
        "\x02\u02DE\u02DF\x05N(\x02\u02DF\u02E0\x07\f\x02\x02\u02E0\u02E1\x05J" +
        "&\x02\u02E1\u02E2\x07\r\x02\x02\u02E2Q\x03\x02\x02\x02\u02E3\u02E8\x05" +
        "T+\x02\u02E4\u02E5\x07\t\x02\x02\u02E5\u02E7\x05T+\x02\u02E6\u02E4\x03" +
        "\x02\x02\x02\u02E7\u02EA\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8" +
        "\u02E9\x03\x02\x02\x02\u02E9S\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02" +
        "\x02\u02EB\u02EC\x05Z.\x02\u02EC\u02ED\x07\n\x02\x02\u02ED\u02EE\x05L" +
        "\'\x02\u02EEU\x03\x02\x02\x02\u02EF\u02F4\x05X-\x02\u02F0\u02F1\x07\t" +
        "\x02\x02\u02F1\u02F3\x05X-\x02\u02F2\u02F0\x03\x02\x02\x02\u02F3\u02F6" +
        "\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02" +
        "\u02F5W\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7\u02F8\x07[\x02" +
        "\x02\u02F8Y\x03\x02\x02\x02\u02F9\u02FE\x05\\/\x02\u02FA\u02FB\x07\t\x02" +
        "\x02\u02FB\u02FD\x05\\/\x02\u02FC\u02FA\x03\x02\x02\x02\u02FD\u0300\x03" +
        "\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF" +
        "[\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301\u0302\x07[\x02\x02" +
        "\u0302]\x03\x02\x02\x02\u0303\u0304\x07\\\x02\x02\u0304_\x03\x02\x02\x02" +
        "\u0305\u0306\x07]\x02\x02\u0306a\x03\x02\x02\x02\u0307\u0308\x07Z\x02" +
        "\x02\u0308c\x03\x02\x02\x02Vgmswz}\x87\x8B\x8E\x91\x9B\xA0\xAB\xB2\xB6" +
        "\xBF\xD7\xDE\xE5\xEE\xF6\xFF\u0102\u0104\u0108\u010F\u011B\u0121\u012A" +
        "\u012F\u0134\u013A\u0140\u0146\u014F\u0155\u015C\u0161\u0167\u0175\u0183" +
        "\u0185\u0189\u018D\u0190\u0193\u0197\u0199\u01A0\u01B7\u01C9\u01DC\u01E1" +
        "\u01EA\u01F0\u01F6\u01FB\u0200\u0207\u0210\u0214\u0217\u021B\u0226\u0231" +
        "\u0233\u023F\u0247\u024D\u0255\u0262\u02A3\u02A5\u02B1\u02BA\u02BE\u02C2" +
        "\u02C6\u02CD\u02D9\u02DB\u02E8\u02F4\u02FE";
    cluParser._serializedATN = Utils.join([
        cluParser._serializedATNSegment0,
        cluParser._serializedATNSegment1,
    ], "");
    return cluParser;
}(Parser_1.Parser));
exports.cluParser = cluParser;
var ModuleContext = /** @class */ (function (_super) {
    __extends(ModuleContext, _super);
    function ModuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleContext.prototype.procedure = function () {
        return this.tryGetRuleContext(0, ProcedureContext);
    };
    ModuleContext.prototype.iterator = function () {
        return this.tryGetRuleContext(0, IteratorContext);
    };
    ModuleContext.prototype.cluster = function () {
        return this.tryGetRuleContext(0, ClusterContext);
    };
    ModuleContext.prototype.equate = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquateContext);
        }
        else {
            return this.getRuleContext(i, EquateContext);
        }
    };
    Object.defineProperty(ModuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_module; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleContext.prototype.enterRule = function (listener) {
        if (listener.enterModule) {
            listener.enterModule(this);
        }
    };
    // @Override
    ModuleContext.prototype.exitRule = function (listener) {
        if (listener.exitModule) {
            listener.exitModule(this);
        }
    };
    // @Override
    ModuleContext.prototype.accept = function (visitor) {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleContext = ModuleContext;
var ProcedureContext = /** @class */ (function (_super) {
    __extends(ProcedureContext, _super);
    function ProcedureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureContext.prototype.idn = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdnContext);
        }
        else {
            return this.getRuleContext(i, IdnContext);
        }
    };
    ProcedureContext.prototype.args = function () {
        return this.getRuleContext(0, ArgsContext);
    };
    ProcedureContext.prototype.routine_body = function () {
        return this.getRuleContext(0, Routine_bodyContext);
    };
    ProcedureContext.prototype.parms = function () {
        return this.tryGetRuleContext(0, ParmsContext);
    };
    ProcedureContext.prototype.returnz = function () {
        return this.tryGetRuleContext(0, ReturnzContext);
    };
    ProcedureContext.prototype.signals = function () {
        return this.tryGetRuleContext(0, SignalsContext);
    };
    ProcedureContext.prototype.where = function () {
        return this.tryGetRuleContext(0, WhereContext);
    };
    Object.defineProperty(ProcedureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_procedure; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure) {
            listener.enterProcedure(this);
        }
    };
    // @Override
    ProcedureContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure) {
            listener.exitProcedure(this);
        }
    };
    // @Override
    ProcedureContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure) {
            return visitor.visitProcedure(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureContext = ProcedureContext;
var IteratorContext = /** @class */ (function (_super) {
    __extends(IteratorContext, _super);
    function IteratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IteratorContext.prototype.idn = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdnContext);
        }
        else {
            return this.getRuleContext(i, IdnContext);
        }
    };
    IteratorContext.prototype.args = function () {
        return this.getRuleContext(0, ArgsContext);
    };
    IteratorContext.prototype.routine_body = function () {
        return this.getRuleContext(0, Routine_bodyContext);
    };
    IteratorContext.prototype.parms = function () {
        return this.tryGetRuleContext(0, ParmsContext);
    };
    IteratorContext.prototype.yields = function () {
        return this.tryGetRuleContext(0, YieldsContext);
    };
    IteratorContext.prototype.signals = function () {
        return this.tryGetRuleContext(0, SignalsContext);
    };
    IteratorContext.prototype.where = function () {
        return this.tryGetRuleContext(0, WhereContext);
    };
    Object.defineProperty(IteratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_iterator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IteratorContext.prototype.enterRule = function (listener) {
        if (listener.enterIterator) {
            listener.enterIterator(this);
        }
    };
    // @Override
    IteratorContext.prototype.exitRule = function (listener) {
        if (listener.exitIterator) {
            listener.exitIterator(this);
        }
    };
    // @Override
    IteratorContext.prototype.accept = function (visitor) {
        if (visitor.visitIterator) {
            return visitor.visitIterator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IteratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IteratorContext = IteratorContext;
var ClusterContext = /** @class */ (function (_super) {
    __extends(ClusterContext, _super);
    function ClusterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClusterContext.prototype.idn = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdnContext);
        }
        else {
            return this.getRuleContext(i, IdnContext);
        }
    };
    ClusterContext.prototype.idn_list = function () {
        return this.getRuleContext(0, Idn_listContext);
    };
    ClusterContext.prototype.cluster_body = function () {
        return this.getRuleContext(0, Cluster_bodyContext);
    };
    ClusterContext.prototype.parms = function () {
        return this.tryGetRuleContext(0, ParmsContext);
    };
    ClusterContext.prototype.where = function () {
        return this.tryGetRuleContext(0, WhereContext);
    };
    Object.defineProperty(ClusterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_cluster; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClusterContext.prototype.enterRule = function (listener) {
        if (listener.enterCluster) {
            listener.enterCluster(this);
        }
    };
    // @Override
    ClusterContext.prototype.exitRule = function (listener) {
        if (listener.exitCluster) {
            listener.exitCluster(this);
        }
    };
    // @Override
    ClusterContext.prototype.accept = function (visitor) {
        if (visitor.visitCluster) {
            return visitor.visitCluster(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClusterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClusterContext = ClusterContext;
var ParmsContext = /** @class */ (function (_super) {
    __extends(ParmsContext, _super);
    function ParmsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParmsContext.prototype.param = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    };
    Object.defineProperty(ParmsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_parms; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParmsContext.prototype.enterRule = function (listener) {
        if (listener.enterParms) {
            listener.enterParms(this);
        }
    };
    // @Override
    ParmsContext.prototype.exitRule = function (listener) {
        if (listener.exitParms) {
            listener.exitParms(this);
        }
    };
    // @Override
    ParmsContext.prototype.accept = function (visitor) {
        if (visitor.visitParms) {
            return visitor.visitParms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParmsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParmsContext = ParmsContext;
var ParamContext = /** @class */ (function (_super) {
    __extends(ParamContext, _super);
    function ParamContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParamContext.prototype.idn_list = function () {
        return this.getRuleContext(0, Idn_listContext);
    };
    ParamContext.prototype.type_spec = function () {
        return this.tryGetRuleContext(0, Type_specContext);
    };
    Object.defineProperty(ParamContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_param; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParamContext.prototype.enterRule = function (listener) {
        if (listener.enterParam) {
            listener.enterParam(this);
        }
    };
    // @Override
    ParamContext.prototype.exitRule = function (listener) {
        if (listener.exitParam) {
            listener.exitParam(this);
        }
    };
    // @Override
    ParamContext.prototype.accept = function (visitor) {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParamContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParamContext = ParamContext;
var ArgsContext = /** @class */ (function (_super) {
    __extends(ArgsContext, _super);
    function ArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgsContext.prototype.decl_list = function () {
        return this.tryGetRuleContext(0, Decl_listContext);
    };
    Object.defineProperty(ArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_args; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterArgs) {
            listener.enterArgs(this);
        }
    };
    // @Override
    ArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitArgs) {
            listener.exitArgs(this);
        }
    };
    // @Override
    ArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitArgs) {
            return visitor.visitArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgsContext = ArgsContext;
var Decl_listContext = /** @class */ (function (_super) {
    __extends(Decl_listContext, _super);
    function Decl_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Decl_listContext.prototype.decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclContext);
        }
        else {
            return this.getRuleContext(i, DeclContext);
        }
    };
    Object.defineProperty(Decl_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_decl_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Decl_listContext.prototype.enterRule = function (listener) {
        if (listener.enterDecl_list) {
            listener.enterDecl_list(this);
        }
    };
    // @Override
    Decl_listContext.prototype.exitRule = function (listener) {
        if (listener.exitDecl_list) {
            listener.exitDecl_list(this);
        }
    };
    // @Override
    Decl_listContext.prototype.accept = function (visitor) {
        if (visitor.visitDecl_list) {
            return visitor.visitDecl_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Decl_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Decl_listContext = Decl_listContext;
var DeclContext = /** @class */ (function (_super) {
    __extends(DeclContext, _super);
    function DeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclContext.prototype.idn_list = function () {
        return this.getRuleContext(0, Idn_listContext);
    };
    DeclContext.prototype.type_spec = function () {
        return this.getRuleContext(0, Type_specContext);
    };
    Object.defineProperty(DeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclContext.prototype.enterRule = function (listener) {
        if (listener.enterDecl) {
            listener.enterDecl(this);
        }
    };
    // @Override
    DeclContext.prototype.exitRule = function (listener) {
        if (listener.exitDecl) {
            listener.exitDecl(this);
        }
    };
    // @Override
    DeclContext.prototype.accept = function (visitor) {
        if (visitor.visitDecl) {
            return visitor.visitDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclContext = DeclContext;
var ReturnzContext = /** @class */ (function (_super) {
    __extends(ReturnzContext, _super);
    function ReturnzContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnzContext.prototype.type_spec_list = function () {
        return this.getRuleContext(0, Type_spec_listContext);
    };
    Object.defineProperty(ReturnzContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_returnz; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnzContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnz) {
            listener.enterReturnz(this);
        }
    };
    // @Override
    ReturnzContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnz) {
            listener.exitReturnz(this);
        }
    };
    // @Override
    ReturnzContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnz) {
            return visitor.visitReturnz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnzContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnzContext = ReturnzContext;
var YieldsContext = /** @class */ (function (_super) {
    __extends(YieldsContext, _super);
    function YieldsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    YieldsContext.prototype.type_spec_list = function () {
        return this.getRuleContext(0, Type_spec_listContext);
    };
    Object.defineProperty(YieldsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_yields; },
        enumerable: true,
        configurable: true
    });
    // @Override
    YieldsContext.prototype.enterRule = function (listener) {
        if (listener.enterYields) {
            listener.enterYields(this);
        }
    };
    // @Override
    YieldsContext.prototype.exitRule = function (listener) {
        if (listener.exitYields) {
            listener.exitYields(this);
        }
    };
    // @Override
    YieldsContext.prototype.accept = function (visitor) {
        if (visitor.visitYields) {
            return visitor.visitYields(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YieldsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.YieldsContext = YieldsContext;
var SignalsContext = /** @class */ (function (_super) {
    __extends(SignalsContext, _super);
    function SignalsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignalsContext.prototype.exception = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExceptionContext);
        }
        else {
            return this.getRuleContext(i, ExceptionContext);
        }
    };
    Object.defineProperty(SignalsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_signals; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignalsContext.prototype.enterRule = function (listener) {
        if (listener.enterSignals) {
            listener.enterSignals(this);
        }
    };
    // @Override
    SignalsContext.prototype.exitRule = function (listener) {
        if (listener.exitSignals) {
            listener.exitSignals(this);
        }
    };
    // @Override
    SignalsContext.prototype.accept = function (visitor) {
        if (visitor.visitSignals) {
            return visitor.visitSignals(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignalsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignalsContext = SignalsContext;
var ExceptionContext = /** @class */ (function (_super) {
    __extends(ExceptionContext, _super);
    function ExceptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExceptionContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    ExceptionContext.prototype.type_spec_list = function () {
        return this.tryGetRuleContext(0, Type_spec_listContext);
    };
    Object.defineProperty(ExceptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_exception; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExceptionContext.prototype.enterRule = function (listener) {
        if (listener.enterException) {
            listener.enterException(this);
        }
    };
    // @Override
    ExceptionContext.prototype.exitRule = function (listener) {
        if (listener.exitException) {
            listener.exitException(this);
        }
    };
    // @Override
    ExceptionContext.prototype.accept = function (visitor) {
        if (visitor.visitException) {
            return visitor.visitException(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExceptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExceptionContext = ExceptionContext;
var Type_spec_listContext = /** @class */ (function (_super) {
    __extends(Type_spec_listContext, _super);
    function Type_spec_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_spec_listContext.prototype.type_spec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_specContext);
        }
        else {
            return this.getRuleContext(i, Type_specContext);
        }
    };
    Object.defineProperty(Type_spec_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_type_spec_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_spec_listContext.prototype.enterRule = function (listener) {
        if (listener.enterType_spec_list) {
            listener.enterType_spec_list(this);
        }
    };
    // @Override
    Type_spec_listContext.prototype.exitRule = function (listener) {
        if (listener.exitType_spec_list) {
            listener.exitType_spec_list(this);
        }
    };
    // @Override
    Type_spec_listContext.prototype.accept = function (visitor) {
        if (visitor.visitType_spec_list) {
            return visitor.visitType_spec_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_spec_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_spec_listContext = Type_spec_listContext;
var WhereContext = /** @class */ (function (_super) {
    __extends(WhereContext, _super);
    function WhereContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhereContext.prototype.restriction = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RestrictionContext);
        }
        else {
            return this.getRuleContext(i, RestrictionContext);
        }
    };
    Object.defineProperty(WhereContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_where; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhereContext.prototype.enterRule = function (listener) {
        if (listener.enterWhere) {
            listener.enterWhere(this);
        }
    };
    // @Override
    WhereContext.prototype.exitRule = function (listener) {
        if (listener.exitWhere) {
            listener.exitWhere(this);
        }
    };
    // @Override
    WhereContext.prototype.accept = function (visitor) {
        if (visitor.visitWhere) {
            return visitor.visitWhere(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhereContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhereContext = WhereContext;
var RestrictionContext = /** @class */ (function (_super) {
    __extends(RestrictionContext, _super);
    function RestrictionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RestrictionContext.prototype.idn = function () {
        return this.getRuleContext(0, IdnContext);
    };
    RestrictionContext.prototype.oper_decl_list = function () {
        return this.tryGetRuleContext(0, Oper_decl_listContext);
    };
    RestrictionContext.prototype.type_set = function () {
        return this.tryGetRuleContext(0, Type_setContext);
    };
    Object.defineProperty(RestrictionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_restriction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RestrictionContext.prototype.enterRule = function (listener) {
        if (listener.enterRestriction) {
            listener.enterRestriction(this);
        }
    };
    // @Override
    RestrictionContext.prototype.exitRule = function (listener) {
        if (listener.exitRestriction) {
            listener.exitRestriction(this);
        }
    };
    // @Override
    RestrictionContext.prototype.accept = function (visitor) {
        if (visitor.visitRestriction) {
            return visitor.visitRestriction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RestrictionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RestrictionContext = RestrictionContext;
var Type_setContext = /** @class */ (function (_super) {
    __extends(Type_setContext, _super);
    function Type_setContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_setContext.prototype.idn = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdnContext);
        }
        else {
            return this.getRuleContext(i, IdnContext);
        }
    };
    Type_setContext.prototype.oper_decl_list = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Oper_decl_listContext);
        }
        else {
            return this.getRuleContext(i, Oper_decl_listContext);
        }
    };
    Type_setContext.prototype.equate = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquateContext);
        }
        else {
            return this.getRuleContext(i, EquateContext);
        }
    };
    Object.defineProperty(Type_setContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_type_set; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_setContext.prototype.enterRule = function (listener) {
        if (listener.enterType_set) {
            listener.enterType_set(this);
        }
    };
    // @Override
    Type_setContext.prototype.exitRule = function (listener) {
        if (listener.exitType_set) {
            listener.exitType_set(this);
        }
    };
    // @Override
    Type_setContext.prototype.accept = function (visitor) {
        if (visitor.visitType_set) {
            return visitor.visitType_set(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_setContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_setContext = Type_setContext;
var Oper_decl_listContext = /** @class */ (function (_super) {
    __extends(Oper_decl_listContext, _super);
    function Oper_decl_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Oper_decl_listContext.prototype.oper_decl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Oper_declContext);
        }
        else {
            return this.getRuleContext(i, Oper_declContext);
        }
    };
    Object.defineProperty(Oper_decl_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_oper_decl_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Oper_decl_listContext.prototype.enterRule = function (listener) {
        if (listener.enterOper_decl_list) {
            listener.enterOper_decl_list(this);
        }
    };
    // @Override
    Oper_decl_listContext.prototype.exitRule = function (listener) {
        if (listener.exitOper_decl_list) {
            listener.exitOper_decl_list(this);
        }
    };
    // @Override
    Oper_decl_listContext.prototype.accept = function (visitor) {
        if (visitor.visitOper_decl_list) {
            return visitor.visitOper_decl_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Oper_decl_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Oper_decl_listContext = Oper_decl_listContext;
var Oper_declContext = /** @class */ (function (_super) {
    __extends(Oper_declContext, _super);
    function Oper_declContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Oper_declContext.prototype.op_name_list = function () {
        return this.getRuleContext(0, Op_name_listContext);
    };
    Oper_declContext.prototype.type_spec = function () {
        return this.getRuleContext(0, Type_specContext);
    };
    Object.defineProperty(Oper_declContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_oper_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Oper_declContext.prototype.enterRule = function (listener) {
        if (listener.enterOper_decl) {
            listener.enterOper_decl(this);
        }
    };
    // @Override
    Oper_declContext.prototype.exitRule = function (listener) {
        if (listener.exitOper_decl) {
            listener.exitOper_decl(this);
        }
    };
    // @Override
    Oper_declContext.prototype.accept = function (visitor) {
        if (visitor.visitOper_decl) {
            return visitor.visitOper_decl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Oper_declContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Oper_declContext = Oper_declContext;
var Op_name_listContext = /** @class */ (function (_super) {
    __extends(Op_name_listContext, _super);
    function Op_name_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Op_name_listContext.prototype.op_name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Op_nameContext);
        }
        else {
            return this.getRuleContext(i, Op_nameContext);
        }
    };
    Object.defineProperty(Op_name_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_op_name_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Op_name_listContext.prototype.enterRule = function (listener) {
        if (listener.enterOp_name_list) {
            listener.enterOp_name_list(this);
        }
    };
    // @Override
    Op_name_listContext.prototype.exitRule = function (listener) {
        if (listener.exitOp_name_list) {
            listener.exitOp_name_list(this);
        }
    };
    // @Override
    Op_name_listContext.prototype.accept = function (visitor) {
        if (visitor.visitOp_name_list) {
            return visitor.visitOp_name_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Op_name_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Op_name_listContext = Op_name_listContext;
var Op_nameContext = /** @class */ (function (_super) {
    __extends(Op_nameContext, _super);
    function Op_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Op_nameContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    Op_nameContext.prototype.constant_list = function () {
        return this.tryGetRuleContext(0, Constant_listContext);
    };
    Object.defineProperty(Op_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_op_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Op_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterOp_name) {
            listener.enterOp_name(this);
        }
    };
    // @Override
    Op_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitOp_name) {
            listener.exitOp_name(this);
        }
    };
    // @Override
    Op_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitOp_name) {
            return visitor.visitOp_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Op_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Op_nameContext = Op_nameContext;
var Constant_listContext = /** @class */ (function (_super) {
    __extends(Constant_listContext, _super);
    function Constant_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Constant_listContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    Object.defineProperty(Constant_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_constant_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Constant_listContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant_list) {
            listener.enterConstant_list(this);
        }
    };
    // @Override
    Constant_listContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant_list) {
            listener.exitConstant_list(this);
        }
    };
    // @Override
    Constant_listContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant_list) {
            return visitor.visitConstant_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Constant_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Constant_listContext = Constant_listContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ConstantContext.prototype.type_spec = function () {
        return this.tryGetRuleContext(0, Type_specContext);
    };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantContext = ConstantContext;
var Routine_bodyContext = /** @class */ (function (_super) {
    __extends(Routine_bodyContext, _super);
    function Routine_bodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Routine_bodyContext.prototype.equate = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquateContext);
        }
        else {
            return this.getRuleContext(i, EquateContext);
        }
    };
    Routine_bodyContext.prototype.own_var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Own_varContext);
        }
        else {
            return this.getRuleContext(i, Own_varContext);
        }
    };
    Routine_bodyContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(Routine_bodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_routine_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Routine_bodyContext.prototype.enterRule = function (listener) {
        if (listener.enterRoutine_body) {
            listener.enterRoutine_body(this);
        }
    };
    // @Override
    Routine_bodyContext.prototype.exitRule = function (listener) {
        if (listener.exitRoutine_body) {
            listener.exitRoutine_body(this);
        }
    };
    // @Override
    Routine_bodyContext.prototype.accept = function (visitor) {
        if (visitor.visitRoutine_body) {
            return visitor.visitRoutine_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Routine_bodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Routine_bodyContext = Routine_bodyContext;
var Cluster_bodyContext = /** @class */ (function (_super) {
    __extends(Cluster_bodyContext, _super);
    function Cluster_bodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cluster_bodyContext.prototype.type_spec = function () {
        return this.getRuleContext(0, Type_specContext);
    };
    Cluster_bodyContext.prototype.equate = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquateContext);
        }
        else {
            return this.getRuleContext(i, EquateContext);
        }
    };
    Cluster_bodyContext.prototype.own_var = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Own_varContext);
        }
        else {
            return this.getRuleContext(i, Own_varContext);
        }
    };
    Cluster_bodyContext.prototype.routine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RoutineContext);
        }
        else {
            return this.getRuleContext(i, RoutineContext);
        }
    };
    Object.defineProperty(Cluster_bodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_cluster_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cluster_bodyContext.prototype.enterRule = function (listener) {
        if (listener.enterCluster_body) {
            listener.enterCluster_body(this);
        }
    };
    // @Override
    Cluster_bodyContext.prototype.exitRule = function (listener) {
        if (listener.exitCluster_body) {
            listener.exitCluster_body(this);
        }
    };
    // @Override
    Cluster_bodyContext.prototype.accept = function (visitor) {
        if (visitor.visitCluster_body) {
            return visitor.visitCluster_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cluster_bodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cluster_bodyContext = Cluster_bodyContext;
var RoutineContext = /** @class */ (function (_super) {
    __extends(RoutineContext, _super);
    function RoutineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RoutineContext.prototype.procedure = function () {
        return this.tryGetRuleContext(0, ProcedureContext);
    };
    RoutineContext.prototype.iterator = function () {
        return this.tryGetRuleContext(0, IteratorContext);
    };
    Object.defineProperty(RoutineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_routine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RoutineContext.prototype.enterRule = function (listener) {
        if (listener.enterRoutine) {
            listener.enterRoutine(this);
        }
    };
    // @Override
    RoutineContext.prototype.exitRule = function (listener) {
        if (listener.exitRoutine) {
            listener.exitRoutine(this);
        }
    };
    // @Override
    RoutineContext.prototype.accept = function (visitor) {
        if (visitor.visitRoutine) {
            return visitor.visitRoutine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RoutineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RoutineContext = RoutineContext;
var EquateContext = /** @class */ (function (_super) {
    __extends(EquateContext, _super);
    function EquateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquateContext.prototype.idn = function () {
        return this.getRuleContext(0, IdnContext);
    };
    EquateContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    EquateContext.prototype.type_set = function () {
        return this.tryGetRuleContext(0, Type_setContext);
    };
    Object.defineProperty(EquateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_equate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquateContext.prototype.enterRule = function (listener) {
        if (listener.enterEquate) {
            listener.enterEquate(this);
        }
    };
    // @Override
    EquateContext.prototype.exitRule = function (listener) {
        if (listener.exitEquate) {
            listener.exitEquate(this);
        }
    };
    // @Override
    EquateContext.prototype.accept = function (visitor) {
        if (visitor.visitEquate) {
            return visitor.visitEquate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquateContext = EquateContext;
var Own_varContext = /** @class */ (function (_super) {
    __extends(Own_varContext, _super);
    function Own_varContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Own_varContext.prototype.decl = function () {
        return this.tryGetRuleContext(0, DeclContext);
    };
    Own_varContext.prototype.idn = function () {
        return this.tryGetRuleContext(0, IdnContext);
    };
    Own_varContext.prototype.type_spec = function () {
        return this.tryGetRuleContext(0, Type_specContext);
    };
    Own_varContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Own_varContext.prototype.decl_list = function () {
        return this.tryGetRuleContext(0, Decl_listContext);
    };
    Own_varContext.prototype.invocation = function () {
        return this.tryGetRuleContext(0, InvocationContext);
    };
    Object.defineProperty(Own_varContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_own_var; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Own_varContext.prototype.enterRule = function (listener) {
        if (listener.enterOwn_var) {
            listener.enterOwn_var(this);
        }
    };
    // @Override
    Own_varContext.prototype.exitRule = function (listener) {
        if (listener.exitOwn_var) {
            listener.exitOwn_var(this);
        }
    };
    // @Override
    Own_varContext.prototype.accept = function (visitor) {
        if (visitor.visitOwn_var) {
            return visitor.visitOwn_var(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Own_varContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Own_varContext = Own_varContext;
var Type_specContext = /** @class */ (function (_super) {
    __extends(Type_specContext, _super);
    function Type_specContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_specContext.prototype.type_spec = function () {
        return this.tryGetRuleContext(0, Type_specContext);
    };
    Type_specContext.prototype.field_spec_list = function () {
        return this.tryGetRuleContext(0, Field_spec_listContext);
    };
    Type_specContext.prototype.returnz = function () {
        return this.tryGetRuleContext(0, ReturnzContext);
    };
    Type_specContext.prototype.signals = function () {
        return this.tryGetRuleContext(0, SignalsContext);
    };
    Type_specContext.prototype.idn = function () {
        return this.tryGetRuleContext(0, IdnContext);
    };
    Type_specContext.prototype.constant_list = function () {
        return this.tryGetRuleContext(0, Constant_listContext);
    };
    Object.defineProperty(Type_specContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_type_spec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_specContext.prototype.enterRule = function (listener) {
        if (listener.enterType_spec) {
            listener.enterType_spec(this);
        }
    };
    // @Override
    Type_specContext.prototype.exitRule = function (listener) {
        if (listener.exitType_spec) {
            listener.exitType_spec(this);
        }
    };
    // @Override
    Type_specContext.prototype.accept = function (visitor) {
        if (visitor.visitType_spec) {
            return visitor.visitType_spec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_specContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_specContext = Type_specContext;
var Field_spec_listContext = /** @class */ (function (_super) {
    __extends(Field_spec_listContext, _super);
    function Field_spec_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_spec_listContext.prototype.field_spec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Field_specContext);
        }
        else {
            return this.getRuleContext(i, Field_specContext);
        }
    };
    Object.defineProperty(Field_spec_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_field_spec_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_spec_listContext.prototype.enterRule = function (listener) {
        if (listener.enterField_spec_list) {
            listener.enterField_spec_list(this);
        }
    };
    // @Override
    Field_spec_listContext.prototype.exitRule = function (listener) {
        if (listener.exitField_spec_list) {
            listener.exitField_spec_list(this);
        }
    };
    // @Override
    Field_spec_listContext.prototype.accept = function (visitor) {
        if (visitor.visitField_spec_list) {
            return visitor.visitField_spec_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_spec_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_spec_listContext = Field_spec_listContext;
var Field_specContext = /** @class */ (function (_super) {
    __extends(Field_specContext, _super);
    function Field_specContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_specContext.prototype.name_list = function () {
        return this.getRuleContext(0, Name_listContext);
    };
    Field_specContext.prototype.type_spec = function () {
        return this.getRuleContext(0, Type_specContext);
    };
    Object.defineProperty(Field_specContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_field_spec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_specContext.prototype.enterRule = function (listener) {
        if (listener.enterField_spec) {
            listener.enterField_spec(this);
        }
    };
    // @Override
    Field_specContext.prototype.exitRule = function (listener) {
        if (listener.exitField_spec) {
            listener.exitField_spec(this);
        }
    };
    // @Override
    Field_specContext.prototype.accept = function (visitor) {
        if (visitor.visitField_spec) {
            return visitor.visitField_spec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_specContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_specContext = Field_specContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.decl = function () {
        return this.tryGetRuleContext(0, DeclContext);
    };
    StatementContext.prototype.idn = function () {
        return this.tryGetRuleContext(0, IdnContext);
    };
    StatementContext.prototype.type_spec = function () {
        return this.tryGetRuleContext(0, Type_specContext);
    };
    StatementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    StatementContext.prototype.decl_list = function () {
        return this.tryGetRuleContext(0, Decl_listContext);
    };
    StatementContext.prototype.invocation = function () {
        return this.tryGetRuleContext(0, InvocationContext);
    };
    StatementContext.prototype.idn_list = function () {
        return this.tryGetRuleContext(0, Idn_listContext);
    };
    StatementContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    StatementContext.prototype.primary = function () {
        return this.tryGetRuleContext(0, PrimaryContext);
    };
    StatementContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    StatementContext.prototype.body = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BodyContext);
        }
        else {
            return this.getRuleContext(i, BodyContext);
        }
    };
    StatementContext.prototype.tag_arm = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Tag_armContext);
        }
        else {
            return this.getRuleContext(i, Tag_armContext);
        }
    };
    StatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    StatementContext.prototype.name_list = function () {
        return this.tryGetRuleContext(0, Name_listContext);
    };
    StatementContext.prototype.when_handler = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(When_handlerContext);
        }
        else {
            return this.getRuleContext(i, When_handlerContext);
        }
    };
    StatementContext.prototype.others_handler = function () {
        return this.tryGetRuleContext(0, Others_handlerContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_statement; },
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
var Tag_armContext = /** @class */ (function (_super) {
    __extends(Tag_armContext, _super);
    function Tag_armContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tag_armContext.prototype.name_list = function () {
        return this.getRuleContext(0, Name_listContext);
    };
    Tag_armContext.prototype.body = function () {
        return this.getRuleContext(0, BodyContext);
    };
    Tag_armContext.prototype.idn = function () {
        return this.tryGetRuleContext(0, IdnContext);
    };
    Tag_armContext.prototype.type_spec = function () {
        return this.tryGetRuleContext(0, Type_specContext);
    };
    Object.defineProperty(Tag_armContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_tag_arm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tag_armContext.prototype.enterRule = function (listener) {
        if (listener.enterTag_arm) {
            listener.enterTag_arm(this);
        }
    };
    // @Override
    Tag_armContext.prototype.exitRule = function (listener) {
        if (listener.exitTag_arm) {
            listener.exitTag_arm(this);
        }
    };
    // @Override
    Tag_armContext.prototype.accept = function (visitor) {
        if (visitor.visitTag_arm) {
            return visitor.visitTag_arm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tag_armContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tag_armContext = Tag_armContext;
var When_handlerContext = /** @class */ (function (_super) {
    __extends(When_handlerContext, _super);
    function When_handlerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    When_handlerContext.prototype.name_list = function () {
        return this.getRuleContext(0, Name_listContext);
    };
    When_handlerContext.prototype.body = function () {
        return this.getRuleContext(0, BodyContext);
    };
    When_handlerContext.prototype.decl_list = function () {
        return this.tryGetRuleContext(0, Decl_listContext);
    };
    Object.defineProperty(When_handlerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_when_handler; },
        enumerable: true,
        configurable: true
    });
    // @Override
    When_handlerContext.prototype.enterRule = function (listener) {
        if (listener.enterWhen_handler) {
            listener.enterWhen_handler(this);
        }
    };
    // @Override
    When_handlerContext.prototype.exitRule = function (listener) {
        if (listener.exitWhen_handler) {
            listener.exitWhen_handler(this);
        }
    };
    // @Override
    When_handlerContext.prototype.accept = function (visitor) {
        if (visitor.visitWhen_handler) {
            return visitor.visitWhen_handler(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return When_handlerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.When_handlerContext = When_handlerContext;
var Others_handlerContext = /** @class */ (function (_super) {
    __extends(Others_handlerContext, _super);
    function Others_handlerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Others_handlerContext.prototype.body = function () {
        return this.getRuleContext(0, BodyContext);
    };
    Others_handlerContext.prototype.idn = function () {
        return this.tryGetRuleContext(0, IdnContext);
    };
    Others_handlerContext.prototype.type_spec = function () {
        return this.tryGetRuleContext(0, Type_specContext);
    };
    Object.defineProperty(Others_handlerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_others_handler; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Others_handlerContext.prototype.enterRule = function (listener) {
        if (listener.enterOthers_handler) {
            listener.enterOthers_handler(this);
        }
    };
    // @Override
    Others_handlerContext.prototype.exitRule = function (listener) {
        if (listener.exitOthers_handler) {
            listener.exitOthers_handler(this);
        }
    };
    // @Override
    Others_handlerContext.prototype.accept = function (visitor) {
        if (visitor.visitOthers_handler) {
            return visitor.visitOthers_handler(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Others_handlerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Others_handlerContext = Others_handlerContext;
var BodyContext = /** @class */ (function (_super) {
    __extends(BodyContext, _super);
    function BodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BodyContext.prototype.equate = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquateContext);
        }
        else {
            return this.getRuleContext(i, EquateContext);
        }
    };
    BodyContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(BodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BodyContext.prototype.enterRule = function (listener) {
        if (listener.enterBody) {
            listener.enterBody(this);
        }
    };
    // @Override
    BodyContext.prototype.exitRule = function (listener) {
        if (listener.exitBody) {
            listener.exitBody(this);
        }
    };
    // @Override
    BodyContext.prototype.accept = function (visitor) {
        if (visitor.visitBody) {
            return visitor.visitBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BodyContext = BodyContext;
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
        get: function () { return cluParser.RULE_expression_list; },
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
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.primary = function () {
        return this.tryGetRuleContext(0, PrimaryContext);
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
        get: function () { return cluParser.RULE_expression; },
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
var PrimaryContext = /** @class */ (function (_super) {
    __extends(PrimaryContext, _super);
    function PrimaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryContext.prototype.int_literal = function () {
        return this.tryGetRuleContext(0, Int_literalContext);
    };
    PrimaryContext.prototype.real_literal = function () {
        return this.tryGetRuleContext(0, Real_literalContext);
    };
    PrimaryContext.prototype.string_literal = function () {
        return this.tryGetRuleContext(0, String_literalContext);
    };
    PrimaryContext.prototype.idn = function () {
        return this.tryGetRuleContext(0, IdnContext);
    };
    PrimaryContext.prototype.constant_list = function () {
        return this.tryGetRuleContext(0, Constant_listContext);
    };
    PrimaryContext.prototype.primary = function () {
        return this.tryGetRuleContext(0, PrimaryContext);
    };
    PrimaryContext.prototype.name = function () {
        return this.tryGetRuleContext(0, NameContext);
    };
    PrimaryContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    PrimaryContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    PrimaryContext.prototype.type_spec = function () {
        return this.tryGetRuleContext(0, Type_specContext);
    };
    PrimaryContext.prototype.field_list = function () {
        return this.tryGetRuleContext(0, Field_listContext);
    };
    Object.defineProperty(PrimaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_primary; },
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
var InvocationContext = /** @class */ (function (_super) {
    __extends(InvocationContext, _super);
    function InvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InvocationContext.prototype.primary = function () {
        return this.getRuleContext(0, PrimaryContext);
    };
    InvocationContext.prototype.expression_list = function () {
        return this.getRuleContext(0, Expression_listContext);
    };
    Object.defineProperty(InvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_invocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterInvocation) {
            listener.enterInvocation(this);
        }
    };
    // @Override
    InvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitInvocation) {
            listener.exitInvocation(this);
        }
    };
    // @Override
    InvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitInvocation) {
            return visitor.visitInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InvocationContext = InvocationContext;
var Field_listContext = /** @class */ (function (_super) {
    __extends(Field_listContext, _super);
    function Field_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_listContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    Object.defineProperty(Field_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_field_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_listContext.prototype.enterRule = function (listener) {
        if (listener.enterField_list) {
            listener.enterField_list(this);
        }
    };
    // @Override
    Field_listContext.prototype.exitRule = function (listener) {
        if (listener.exitField_list) {
            listener.exitField_list(this);
        }
    };
    // @Override
    Field_listContext.prototype.accept = function (visitor) {
        if (visitor.visitField_list) {
            return visitor.visitField_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_listContext = Field_listContext;
var FieldContext = /** @class */ (function (_super) {
    __extends(FieldContext, _super);
    function FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldContext.prototype.name_list = function () {
        return this.getRuleContext(0, Name_listContext);
    };
    FieldContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldContext.prototype.enterRule = function (listener) {
        if (listener.enterField) {
            listener.enterField(this);
        }
    };
    // @Override
    FieldContext.prototype.exitRule = function (listener) {
        if (listener.exitField) {
            listener.exitField(this);
        }
    };
    // @Override
    FieldContext.prototype.accept = function (visitor) {
        if (visitor.visitField) {
            return visitor.visitField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldContext = FieldContext;
var Idn_listContext = /** @class */ (function (_super) {
    __extends(Idn_listContext, _super);
    function Idn_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Idn_listContext.prototype.idn = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdnContext);
        }
        else {
            return this.getRuleContext(i, IdnContext);
        }
    };
    Object.defineProperty(Idn_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_idn_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Idn_listContext.prototype.enterRule = function (listener) {
        if (listener.enterIdn_list) {
            listener.enterIdn_list(this);
        }
    };
    // @Override
    Idn_listContext.prototype.exitRule = function (listener) {
        if (listener.exitIdn_list) {
            listener.exitIdn_list(this);
        }
    };
    // @Override
    Idn_listContext.prototype.accept = function (visitor) {
        if (visitor.visitIdn_list) {
            return visitor.visitIdn_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Idn_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Idn_listContext = Idn_listContext;
var IdnContext = /** @class */ (function (_super) {
    __extends(IdnContext, _super);
    function IdnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdnContext.prototype.STRING = function () { return this.getToken(cluParser.STRING, 0); };
    Object.defineProperty(IdnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_idn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdnContext.prototype.enterRule = function (listener) {
        if (listener.enterIdn) {
            listener.enterIdn(this);
        }
    };
    // @Override
    IdnContext.prototype.exitRule = function (listener) {
        if (listener.exitIdn) {
            listener.exitIdn(this);
        }
    };
    // @Override
    IdnContext.prototype.accept = function (visitor) {
        if (visitor.visitIdn) {
            return visitor.visitIdn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdnContext = IdnContext;
var Name_listContext = /** @class */ (function (_super) {
    __extends(Name_listContext, _super);
    function Name_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Name_listContext.prototype.name = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        else {
            return this.getRuleContext(i, NameContext);
        }
    };
    Object.defineProperty(Name_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_name_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Name_listContext.prototype.enterRule = function (listener) {
        if (listener.enterName_list) {
            listener.enterName_list(this);
        }
    };
    // @Override
    Name_listContext.prototype.exitRule = function (listener) {
        if (listener.exitName_list) {
            listener.exitName_list(this);
        }
    };
    // @Override
    Name_listContext.prototype.accept = function (visitor) {
        if (visitor.visitName_list) {
            return visitor.visitName_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Name_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Name_listContext = Name_listContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.STRING = function () { return this.getToken(cluParser.STRING, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_name; },
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
var Int_literalContext = /** @class */ (function (_super) {
    __extends(Int_literalContext, _super);
    function Int_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Int_literalContext.prototype.INT = function () { return this.getToken(cluParser.INT, 0); };
    Object.defineProperty(Int_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_int_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Int_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterInt_literal) {
            listener.enterInt_literal(this);
        }
    };
    // @Override
    Int_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitInt_literal) {
            listener.exitInt_literal(this);
        }
    };
    // @Override
    Int_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitInt_literal) {
            return visitor.visitInt_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Int_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Int_literalContext = Int_literalContext;
var Real_literalContext = /** @class */ (function (_super) {
    __extends(Real_literalContext, _super);
    function Real_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Real_literalContext.prototype.FLOAT = function () { return this.getToken(cluParser.FLOAT, 0); };
    Object.defineProperty(Real_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_real_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Real_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterReal_literal) {
            listener.enterReal_literal(this);
        }
    };
    // @Override
    Real_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitReal_literal) {
            listener.exitReal_literal(this);
        }
    };
    // @Override
    Real_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitReal_literal) {
            return visitor.visitReal_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Real_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Real_literalContext = Real_literalContext;
var String_literalContext = /** @class */ (function (_super) {
    __extends(String_literalContext, _super);
    function String_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    String_literalContext.prototype.STRINGLITERAL = function () { return this.getToken(cluParser.STRINGLITERAL, 0); };
    Object.defineProperty(String_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cluParser.RULE_string_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    String_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterString_literal) {
            listener.enterString_literal(this);
        }
    };
    // @Override
    String_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitString_literal) {
            listener.exitString_literal(this);
        }
    };
    // @Override
    String_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitString_literal) {
            return visitor.visitString_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return String_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.String_literalContext = String_literalContext;
