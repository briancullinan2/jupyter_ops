"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnsnames/tnsnamesParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tnsnamesParser = /** @class */ (function (_super) {
    __extends(tnsnamesParser, _super);
    function tnsnamesParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(tnsnamesParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(tnsnamesParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tnsnamesParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tnsnamesParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "tnsnamesParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tnsnamesParser.prototype, "ruleNames", {
        // @Override
        get: function () { return tnsnamesParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tnsnamesParser.prototype, "serializedATN", {
        // @Override
        get: function () { return tnsnamesParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    tnsnamesParser.prototype.tnsnames = function () {
        var _localctx = new TnsnamesContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tnsnamesParser.RULE_tnsnames);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tnsnamesParser.IFILE || _la === tnsnamesParser.ID) {
                    {
                        this.state = 181;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                            case 1:
                                {
                                    this.state = 178;
                                    this.tns_entry();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 179;
                                    this.ifile();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 180;
                                    this.lsnr_entry();
                                }
                                break;
                        }
                    }
                    this.state = 185;
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
    tnsnamesParser.prototype.tns_entry = function () {
        var _localctx = new Tns_entryContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, tnsnamesParser.RULE_tns_entry);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.alias_list();
                this.state = 187;
                this.match(tnsnamesParser.EQUAL);
                this.state = 190;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            this.state = 188;
                            this.description_list();
                        }
                        break;
                    case 2:
                        {
                            this.state = 189;
                            this.description();
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
    tnsnamesParser.prototype.ifile = function () {
        var _localctx = new IfileContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tnsnamesParser.RULE_ifile);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.match(tnsnamesParser.IFILE);
                this.state = 193;
                this.match(tnsnamesParser.I_EQUAL);
                this.state = 194;
                this.match(tnsnamesParser.I_STRING);
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
    tnsnamesParser.prototype.lsnr_entry = function () {
        var _localctx = new Lsnr_entryContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tnsnamesParser.RULE_lsnr_entry);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.alias();
                this.state = 197;
                this.match(tnsnamesParser.EQUAL);
                this.state = 205;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                    case 1:
                        {
                            this.state = 198;
                            this.lsnr_description();
                        }
                        break;
                    case 2:
                        {
                            this.state = 199;
                            this.address_list();
                        }
                        break;
                    case 3:
                        {
                            this.state = 201;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 200;
                                        this.address();
                                    }
                                }
                                this.state = 203;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === tnsnamesParser.L_PAREN);
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
    tnsnamesParser.prototype.lsnr_description = function () {
        var _localctx = new Lsnr_descriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, tnsnamesParser.RULE_lsnr_description);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 208;
                this.match(tnsnamesParser.DESCRIPTION);
                this.state = 209;
                this.match(tnsnamesParser.EQUAL);
                this.state = 216;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 210;
                            this.address_list();
                        }
                        break;
                    case 2:
                        {
                            this.state = 212;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 211;
                                        this.address();
                                    }
                                }
                                this.state = 214;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === tnsnamesParser.L_PAREN);
                        }
                        break;
                }
                this.state = 218;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.alias_list = function () {
        var _localctx = new Alias_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, tnsnamesParser.RULE_alias_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.alias();
                this.state = 225;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tnsnamesParser.COMMA) {
                    {
                        {
                            this.state = 221;
                            this.match(tnsnamesParser.COMMA);
                            this.state = 222;
                            this.alias();
                        }
                    }
                    this.state = 227;
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
    tnsnamesParser.prototype.alias = function () {
        var _localctx = new AliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, tnsnamesParser.RULE_alias);
        var _la;
        try {
            this.state = 236;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 228;
                        this.match(tnsnamesParser.ID);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 229;
                        this.match(tnsnamesParser.ID);
                        this.state = 232;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 230;
                                    this.match(tnsnamesParser.DOT);
                                    this.state = 231;
                                    this.match(tnsnamesParser.ID);
                                }
                            }
                            this.state = 234;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === tnsnamesParser.DOT);
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
    tnsnamesParser.prototype.description_list = function () {
        var _localctx = new Description_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, tnsnamesParser.RULE_description_list);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 239;
                this.match(tnsnamesParser.DESCRIPTION_LIST);
                this.state = 240;
                this.match(tnsnamesParser.EQUAL);
                this.state = 242;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 241;
                            this.dl_params();
                        }
                        break;
                }
                this.state = 245;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 244;
                                    this.description();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 247;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tnsnamesParser.L_PAREN) {
                    {
                        this.state = 249;
                        this.dl_params();
                    }
                }
                this.state = 252;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.dl_params = function () {
        var _localctx = new Dl_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, tnsnamesParser.RULE_dl_params);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 254;
                                    this.dl_parameter();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 257;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    tnsnamesParser.prototype.dl_parameter = function () {
        var _localctx = new Dl_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, tnsnamesParser.RULE_dl_parameter);
        try {
            this.state = 262;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 259;
                        this.al_failover();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 260;
                        this.al_load_balance();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 261;
                        this.al_source_route();
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
    tnsnamesParser.prototype.description = function () {
        var _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, tnsnamesParser.RULE_description);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 265;
                this.match(tnsnamesParser.DESCRIPTION);
                this.state = 266;
                this.match(tnsnamesParser.EQUAL);
                this.state = 268;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 267;
                            this.d_params();
                        }
                        break;
                }
                this.state = 276;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 270;
                            this.address_list();
                        }
                        break;
                    case 2:
                        {
                            this.state = 272;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 271;
                                                this.address();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 274;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                }
                this.state = 279;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 278;
                            this.d_params();
                        }
                        break;
                }
                this.state = 281;
                this.connect_data();
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tnsnamesParser.L_PAREN) {
                    {
                        this.state = 282;
                        this.d_params();
                    }
                }
                this.state = 285;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_params = function () {
        var _localctx = new D_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, tnsnamesParser.RULE_d_params);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 287;
                                    this.d_parameter();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 290;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    tnsnamesParser.prototype.d_parameter = function () {
        var _localctx = new D_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, tnsnamesParser.RULE_d_parameter);
        try {
            this.state = 304;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 292;
                        this.d_enable();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 293;
                        this.al_failover();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 294;
                        this.al_load_balance();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 295;
                        this.d_sdu();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 296;
                        this.d_recv_buf();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 297;
                        this.d_send_buf();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 298;
                        this.al_source_route();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 299;
                        this.d_service_type();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 300;
                        this.d_security();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 301;
                        this.d_conn_timeout();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 302;
                        this.d_retry_count();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 303;
                        this.d_tct();
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
    tnsnamesParser.prototype.d_enable = function () {
        var _localctx = new D_enableContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, tnsnamesParser.RULE_d_enable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 307;
                this.match(tnsnamesParser.ENABLE);
                this.state = 308;
                this.match(tnsnamesParser.EQUAL);
                this.state = 309;
                this.match(tnsnamesParser.BROKEN);
                this.state = 310;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_sdu = function () {
        var _localctx = new D_sduContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, tnsnamesParser.RULE_d_sdu);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 313;
                this.match(tnsnamesParser.SDU);
                this.state = 314;
                this.match(tnsnamesParser.EQUAL);
                this.state = 315;
                this.match(tnsnamesParser.INT);
                this.state = 316;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_recv_buf = function () {
        var _localctx = new D_recv_bufContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, tnsnamesParser.RULE_d_recv_buf);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 319;
                this.match(tnsnamesParser.RECV_BUF);
                this.state = 320;
                this.match(tnsnamesParser.EQUAL);
                this.state = 321;
                this.match(tnsnamesParser.INT);
                this.state = 322;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_send_buf = function () {
        var _localctx = new D_send_bufContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, tnsnamesParser.RULE_d_send_buf);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 324;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 325;
                this.match(tnsnamesParser.SEND_BUF);
                this.state = 326;
                this.match(tnsnamesParser.EQUAL);
                this.state = 327;
                this.match(tnsnamesParser.INT);
                this.state = 328;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_service_type = function () {
        var _localctx = new D_service_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, tnsnamesParser.RULE_d_service_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 331;
                this.match(tnsnamesParser.SERVICE_TYPE);
                this.state = 332;
                this.match(tnsnamesParser.EQUAL);
                this.state = 333;
                this.match(tnsnamesParser.ID);
                this.state = 334;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_security = function () {
        var _localctx = new D_securityContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, tnsnamesParser.RULE_d_security);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 337;
                this.match(tnsnamesParser.SECURITY);
                this.state = 338;
                this.match(tnsnamesParser.EQUAL);
                this.state = 339;
                this.ds_parameter();
                this.state = 340;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_conn_timeout = function () {
        var _localctx = new D_conn_timeoutContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, tnsnamesParser.RULE_d_conn_timeout);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 343;
                this.match(tnsnamesParser.CONN_TIMEOUT);
                this.state = 344;
                this.match(tnsnamesParser.EQUAL);
                this.state = 345;
                this.match(tnsnamesParser.INT);
                this.state = 346;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_retry_count = function () {
        var _localctx = new D_retry_countContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, tnsnamesParser.RULE_d_retry_count);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 349;
                this.match(tnsnamesParser.RETRY_COUNT);
                this.state = 350;
                this.match(tnsnamesParser.EQUAL);
                this.state = 351;
                this.match(tnsnamesParser.INT);
                this.state = 352;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.d_tct = function () {
        var _localctx = new D_tctContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, tnsnamesParser.RULE_d_tct);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 354;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 355;
                this.match(tnsnamesParser.TCT);
                this.state = 356;
                this.match(tnsnamesParser.EQUAL);
                this.state = 357;
                this.match(tnsnamesParser.INT);
                this.state = 358;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.ds_parameter = function () {
        var _localctx = new Ds_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, tnsnamesParser.RULE_ds_parameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 361;
                this.match(tnsnamesParser.SSL_CERT);
                this.state = 362;
                this.match(tnsnamesParser.EQUAL);
                this.state = 363;
                this.match(tnsnamesParser.DQ_STRING);
                this.state = 364;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.address_list = function () {
        var _localctx = new Address_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, tnsnamesParser.RULE_address_list);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 367;
                this.match(tnsnamesParser.ADDRESS_LIST);
                this.state = 368;
                this.match(tnsnamesParser.EQUAL);
                this.state = 370;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 369;
                            this.al_params();
                        }
                        break;
                }
                this.state = 373;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 372;
                                    this.address();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 375;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tnsnamesParser.L_PAREN) {
                    {
                        this.state = 377;
                        this.al_params();
                    }
                }
                this.state = 380;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.al_params = function () {
        var _localctx = new Al_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, tnsnamesParser.RULE_al_params);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 383;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 382;
                                    this.al_parameter();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 385;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    tnsnamesParser.prototype.al_parameter = function () {
        var _localctx = new Al_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, tnsnamesParser.RULE_al_parameter);
        try {
            this.state = 390;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 387;
                        this.al_failover();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 388;
                        this.al_load_balance();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 389;
                        this.al_source_route();
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
    tnsnamesParser.prototype.al_failover = function () {
        var _localctx = new Al_failoverContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, tnsnamesParser.RULE_al_failover);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 392;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 393;
                this.match(tnsnamesParser.FAILOVER);
                this.state = 394;
                this.match(tnsnamesParser.EQUAL);
                this.state = 395;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tnsnamesParser.YES_NO) | (1 << tnsnamesParser.ON_OFF) | (1 << tnsnamesParser.TRUE_FALSE))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 396;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.al_load_balance = function () {
        var _localctx = new Al_load_balanceContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, tnsnamesParser.RULE_al_load_balance);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 399;
                this.match(tnsnamesParser.LOAD_BALANCE);
                this.state = 400;
                this.match(tnsnamesParser.EQUAL);
                this.state = 401;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tnsnamesParser.YES_NO) | (1 << tnsnamesParser.ON_OFF) | (1 << tnsnamesParser.TRUE_FALSE))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 402;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.al_source_route = function () {
        var _localctx = new Al_source_routeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, tnsnamesParser.RULE_al_source_route);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 405;
                this.match(tnsnamesParser.SOURCE_ROUTE);
                this.state = 406;
                this.match(tnsnamesParser.EQUAL);
                this.state = 407;
                _la = this._input.LA(1);
                if (!(_la === tnsnamesParser.YES_NO || _la === tnsnamesParser.ON_OFF)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 408;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.address = function () {
        var _localctx = new AddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, tnsnamesParser.RULE_address);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 411;
                this.match(tnsnamesParser.ADDRESS);
                this.state = 412;
                this.match(tnsnamesParser.EQUAL);
                this.state = 413;
                this.protocol_info();
                this.state = 415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tnsnamesParser.L_PAREN) {
                    {
                        this.state = 414;
                        this.a_params();
                    }
                }
                this.state = 417;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.a_params = function () {
        var _localctx = new A_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, tnsnamesParser.RULE_a_params);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 419;
                            this.a_parameter();
                        }
                    }
                    this.state = 422;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === tnsnamesParser.L_PAREN);
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
    tnsnamesParser.prototype.a_parameter = function () {
        var _localctx = new A_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, tnsnamesParser.RULE_a_parameter);
        try {
            this.state = 426;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 424;
                        this.d_send_buf();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 425;
                        this.d_recv_buf();
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
    tnsnamesParser.prototype.protocol_info = function () {
        var _localctx = new Protocol_infoContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, tnsnamesParser.RULE_protocol_info);
        try {
            this.state = 433;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 428;
                        this.tcp_protocol();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 429;
                        this.ipc_protocol();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 430;
                        this.spx_protocol();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 431;
                        this.nmp_protocol();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 432;
                        this.beq_protocol();
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
    tnsnamesParser.prototype.tcp_protocol = function () {
        var _localctx = new Tcp_protocolContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, tnsnamesParser.RULE_tcp_protocol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 435;
                this.tcp_params();
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
    tnsnamesParser.prototype.tcp_params = function () {
        var _localctx = new Tcp_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, tnsnamesParser.RULE_tcp_params);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 438;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 437;
                                    this.tcp_parameter();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 440;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    tnsnamesParser.prototype.tcp_parameter = function () {
        var _localctx = new Tcp_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, tnsnamesParser.RULE_tcp_parameter);
        try {
            this.state = 445;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 442;
                        this.tcp_host();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 443;
                        this.tcp_port();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 444;
                        this.tcp_tcp();
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
    tnsnamesParser.prototype.tcp_host = function () {
        var _localctx = new Tcp_hostContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, tnsnamesParser.RULE_tcp_host);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 447;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 448;
                this.match(tnsnamesParser.HOST);
                this.state = 449;
                this.match(tnsnamesParser.EQUAL);
                this.state = 450;
                this.host();
                this.state = 451;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.tcp_port = function () {
        var _localctx = new Tcp_portContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, tnsnamesParser.RULE_tcp_port);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 453;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 454;
                this.match(tnsnamesParser.PORT);
                this.state = 455;
                this.match(tnsnamesParser.EQUAL);
                this.state = 456;
                this.port();
                this.state = 457;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.tcp_tcp = function () {
        var _localctx = new Tcp_tcpContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, tnsnamesParser.RULE_tcp_tcp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 459;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 460;
                this.match(tnsnamesParser.PROTOCOL);
                this.state = 461;
                this.match(tnsnamesParser.EQUAL);
                this.state = 462;
                this.match(tnsnamesParser.TCP);
                this.state = 463;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.host = function () {
        var _localctx = new HostContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, tnsnamesParser.RULE_host);
        var _la;
        try {
            this.state = 474;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 465;
                        this.match(tnsnamesParser.ID);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 466;
                        this.match(tnsnamesParser.ID);
                        this.state = 469;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 467;
                                    this.match(tnsnamesParser.DOT);
                                    this.state = 468;
                                    this.match(tnsnamesParser.ID);
                                }
                            }
                            this.state = 471;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === tnsnamesParser.DOT);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 473;
                        this.match(tnsnamesParser.IP);
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
    tnsnamesParser.prototype.port = function () {
        var _localctx = new PortContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, tnsnamesParser.RULE_port);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 476;
                this.match(tnsnamesParser.INT);
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
    tnsnamesParser.prototype.ipc_protocol = function () {
        var _localctx = new Ipc_protocolContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, tnsnamesParser.RULE_ipc_protocol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 478;
                this.ipc_params();
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
    tnsnamesParser.prototype.ipc_params = function () {
        var _localctx = new Ipc_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, tnsnamesParser.RULE_ipc_params);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 481;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 480;
                                    this.ipc_parameter();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 483;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    tnsnamesParser.prototype.ipc_parameter = function () {
        var _localctx = new Ipc_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, tnsnamesParser.RULE_ipc_parameter);
        try {
            this.state = 487;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 485;
                        this.ipc_ipc();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 486;
                        this.ipc_key();
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
    tnsnamesParser.prototype.ipc_ipc = function () {
        var _localctx = new Ipc_ipcContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, tnsnamesParser.RULE_ipc_ipc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 489;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 490;
                this.match(tnsnamesParser.PROTOCOL);
                this.state = 491;
                this.match(tnsnamesParser.EQUAL);
                this.state = 492;
                this.match(tnsnamesParser.IPC);
                this.state = 493;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.ipc_key = function () {
        var _localctx = new Ipc_keyContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, tnsnamesParser.RULE_ipc_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 495;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 496;
                this.match(tnsnamesParser.KEY);
                this.state = 497;
                this.match(tnsnamesParser.EQUAL);
                this.state = 498;
                this.match(tnsnamesParser.ID);
                this.state = 499;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.spx_protocol = function () {
        var _localctx = new Spx_protocolContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, tnsnamesParser.RULE_spx_protocol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 501;
                this.spx_params();
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
    tnsnamesParser.prototype.spx_params = function () {
        var _localctx = new Spx_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, tnsnamesParser.RULE_spx_params);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 504;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 503;
                                    this.spx_parameter();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 506;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    tnsnamesParser.prototype.spx_parameter = function () {
        var _localctx = new Spx_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, tnsnamesParser.RULE_spx_parameter);
        try {
            this.state = 510;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 508;
                        this.spx_spx();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 509;
                        this.spx_service();
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
    tnsnamesParser.prototype.spx_spx = function () {
        var _localctx = new Spx_spxContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, tnsnamesParser.RULE_spx_spx);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 512;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 513;
                this.match(tnsnamesParser.PROTOCOL);
                this.state = 514;
                this.match(tnsnamesParser.EQUAL);
                this.state = 515;
                this.match(tnsnamesParser.SPX);
                this.state = 516;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.spx_service = function () {
        var _localctx = new Spx_serviceContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, tnsnamesParser.RULE_spx_service);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 519;
                this.match(tnsnamesParser.SERVICE);
                this.state = 520;
                this.match(tnsnamesParser.EQUAL);
                this.state = 521;
                this.match(tnsnamesParser.ID);
                this.state = 522;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.nmp_protocol = function () {
        var _localctx = new Nmp_protocolContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, tnsnamesParser.RULE_nmp_protocol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                this.nmp_params();
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
    tnsnamesParser.prototype.nmp_params = function () {
        var _localctx = new Nmp_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, tnsnamesParser.RULE_nmp_params);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 527;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 526;
                                    this.nmp_parameter();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 529;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    tnsnamesParser.prototype.nmp_parameter = function () {
        var _localctx = new Nmp_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, tnsnamesParser.RULE_nmp_parameter);
        try {
            this.state = 534;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 531;
                        this.nmp_nmp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 532;
                        this.nmp_server();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 533;
                        this.nmp_pipe();
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
    tnsnamesParser.prototype.nmp_nmp = function () {
        var _localctx = new Nmp_nmpContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, tnsnamesParser.RULE_nmp_nmp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 536;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 537;
                this.match(tnsnamesParser.PROTOCOL);
                this.state = 538;
                this.match(tnsnamesParser.EQUAL);
                this.state = 539;
                this.match(tnsnamesParser.NMP);
                this.state = 540;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.nmp_server = function () {
        var _localctx = new Nmp_serverContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, tnsnamesParser.RULE_nmp_server);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 542;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 543;
                this.match(tnsnamesParser.SERVER);
                this.state = 544;
                this.match(tnsnamesParser.EQUAL);
                this.state = 545;
                this.match(tnsnamesParser.ID);
                this.state = 546;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.nmp_pipe = function () {
        var _localctx = new Nmp_pipeContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, tnsnamesParser.RULE_nmp_pipe);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 548;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 549;
                this.match(tnsnamesParser.PIPE);
                this.state = 550;
                this.match(tnsnamesParser.EQUAL);
                this.state = 551;
                this.match(tnsnamesParser.ID);
                this.state = 552;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.beq_protocol = function () {
        var _localctx = new Beq_protocolContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, tnsnamesParser.RULE_beq_protocol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 554;
                this.beq_params();
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
    tnsnamesParser.prototype.beq_params = function () {
        var _localctx = new Beq_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, tnsnamesParser.RULE_beq_params);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 557;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 556;
                                    this.beq_parameter();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 559;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    tnsnamesParser.prototype.beq_parameter = function () {
        var _localctx = new Beq_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, tnsnamesParser.RULE_beq_parameter);
        try {
            this.state = 565;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 561;
                        this.beq_beq();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 562;
                        this.beq_program();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 563;
                        this.beq_argv0();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 564;
                        this.beq_args();
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
    tnsnamesParser.prototype.beq_beq = function () {
        var _localctx = new Beq_beqContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, tnsnamesParser.RULE_beq_beq);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 567;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 568;
                this.match(tnsnamesParser.PROTOCOL);
                this.state = 569;
                this.match(tnsnamesParser.EQUAL);
                this.state = 570;
                this.match(tnsnamesParser.BEQ);
                this.state = 571;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.beq_program = function () {
        var _localctx = new Beq_programContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, tnsnamesParser.RULE_beq_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 573;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 574;
                this.match(tnsnamesParser.PROGRAM);
                this.state = 575;
                this.match(tnsnamesParser.EQUAL);
                this.state = 576;
                this.match(tnsnamesParser.ID);
                this.state = 577;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.beq_argv0 = function () {
        var _localctx = new Beq_argv0Context(this._ctx, this.state);
        this.enterRule(_localctx, 124, tnsnamesParser.RULE_beq_argv0);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 579;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 580;
                this.match(tnsnamesParser.ARGV0);
                this.state = 581;
                this.match(tnsnamesParser.EQUAL);
                this.state = 582;
                this.match(tnsnamesParser.ID);
                this.state = 583;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.beq_args = function () {
        var _localctx = new Beq_argsContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, tnsnamesParser.RULE_beq_args);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 585;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 586;
                this.match(tnsnamesParser.ARGS);
                this.state = 587;
                this.match(tnsnamesParser.EQUAL);
                this.state = 588;
                this.ba_parameter();
                this.state = 589;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.ba_parameter = function () {
        var _localctx = new Ba_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, tnsnamesParser.RULE_ba_parameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this.match(tnsnamesParser.S_QUOTE);
                this.state = 592;
                this.ba_description();
                this.state = 593;
                this.match(tnsnamesParser.S_QUOTE);
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
    tnsnamesParser.prototype.ba_description = function () {
        var _localctx = new Ba_descriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, tnsnamesParser.RULE_ba_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 595;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 596;
                this.match(tnsnamesParser.DESCRIPTION);
                this.state = 597;
                this.match(tnsnamesParser.EQUAL);
                this.state = 598;
                this.bad_params();
                this.state = 599;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.bad_params = function () {
        var _localctx = new Bad_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, tnsnamesParser.RULE_bad_params);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 602;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 601;
                            this.bad_parameter();
                        }
                    }
                    this.state = 604;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === tnsnamesParser.L_PAREN);
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
    tnsnamesParser.prototype.bad_parameter = function () {
        var _localctx = new Bad_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, tnsnamesParser.RULE_bad_parameter);
        try {
            this.state = 608;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 606;
                        this.bad_local();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 607;
                        this.bad_address();
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
    tnsnamesParser.prototype.bad_local = function () {
        var _localctx = new Bad_localContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, tnsnamesParser.RULE_bad_local);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 610;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 611;
                this.match(tnsnamesParser.LOCAL);
                this.state = 612;
                this.match(tnsnamesParser.EQUAL);
                this.state = 613;
                this.match(tnsnamesParser.YES_NO);
                this.state = 614;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.bad_address = function () {
        var _localctx = new Bad_addressContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, tnsnamesParser.RULE_bad_address);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 616;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 617;
                this.match(tnsnamesParser.ADDRESS);
                this.state = 618;
                this.match(tnsnamesParser.EQUAL);
                this.state = 619;
                this.beq_beq();
                this.state = 620;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.connect_data = function () {
        var _localctx = new Connect_dataContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, tnsnamesParser.RULE_connect_data);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 622;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 623;
                this.match(tnsnamesParser.CONNECT_DATA);
                this.state = 624;
                this.match(tnsnamesParser.EQUAL);
                this.state = 625;
                this.cd_params();
                this.state = 626;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_params = function () {
        var _localctx = new Cd_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, tnsnamesParser.RULE_cd_params);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 629;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 628;
                            this.cd_parameter();
                        }
                    }
                    this.state = 631;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === tnsnamesParser.L_PAREN);
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
    tnsnamesParser.prototype.cd_parameter = function () {
        var _localctx = new Cd_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, tnsnamesParser.RULE_cd_parameter);
        try {
            this.state = 642;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 633;
                        this.cd_service_name();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 634;
                        this.cd_sid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 635;
                        this.cd_instance_name();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 636;
                        this.cd_failover_mode();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 637;
                        this.cd_global_name();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 638;
                        this.cd_hs();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 639;
                        this.cd_rdb_database();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 640;
                        this.cd_server();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 641;
                        this.cd_ur();
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
    tnsnamesParser.prototype.cd_service_name = function () {
        var _localctx = new Cd_service_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, tnsnamesParser.RULE_cd_service_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 645;
                this.match(tnsnamesParser.SERVICE_NAME);
                this.state = 646;
                this.match(tnsnamesParser.EQUAL);
                this.state = 647;
                this.match(tnsnamesParser.ID);
                this.state = 652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tnsnamesParser.DOT) {
                    {
                        {
                            this.state = 648;
                            this.match(tnsnamesParser.DOT);
                            this.state = 649;
                            this.match(tnsnamesParser.ID);
                        }
                    }
                    this.state = 654;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 655;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_sid = function () {
        var _localctx = new Cd_sidContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, tnsnamesParser.RULE_cd_sid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 657;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 658;
                this.match(tnsnamesParser.SID);
                this.state = 659;
                this.match(tnsnamesParser.EQUAL);
                this.state = 660;
                this.match(tnsnamesParser.ID);
                this.state = 661;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_instance_name = function () {
        var _localctx = new Cd_instance_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, tnsnamesParser.RULE_cd_instance_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 664;
                this.match(tnsnamesParser.INSTANCE_NAME);
                this.state = 665;
                this.match(tnsnamesParser.EQUAL);
                this.state = 666;
                this.match(tnsnamesParser.ID);
                this.state = 671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tnsnamesParser.DOT) {
                    {
                        {
                            this.state = 667;
                            this.match(tnsnamesParser.DOT);
                            this.state = 668;
                            this.match(tnsnamesParser.ID);
                        }
                    }
                    this.state = 673;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 674;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_failover_mode = function () {
        var _localctx = new Cd_failover_modeContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, tnsnamesParser.RULE_cd_failover_mode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 676;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 677;
                this.match(tnsnamesParser.FAILOVER_MODE);
                this.state = 678;
                this.match(tnsnamesParser.EQUAL);
                this.state = 679;
                this.fo_params();
                this.state = 680;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_global_name = function () {
        var _localctx = new Cd_global_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, tnsnamesParser.RULE_cd_global_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 682;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 683;
                this.match(tnsnamesParser.GLOBAL_NAME);
                this.state = 684;
                this.match(tnsnamesParser.EQUAL);
                this.state = 685;
                this.match(tnsnamesParser.ID);
                this.state = 690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tnsnamesParser.DOT) {
                    {
                        {
                            this.state = 686;
                            this.match(tnsnamesParser.DOT);
                            this.state = 687;
                            this.match(tnsnamesParser.ID);
                        }
                    }
                    this.state = 692;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 693;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_hs = function () {
        var _localctx = new Cd_hsContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, tnsnamesParser.RULE_cd_hs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 695;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 696;
                this.match(tnsnamesParser.HS);
                this.state = 697;
                this.match(tnsnamesParser.EQUAL);
                this.state = 698;
                this.match(tnsnamesParser.OK);
                this.state = 699;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_rdb_database = function () {
        var _localctx = new Cd_rdb_databaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, tnsnamesParser.RULE_cd_rdb_database);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 701;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 702;
                this.match(tnsnamesParser.RDB_DATABASE);
                this.state = 703;
                this.match(tnsnamesParser.EQUAL);
                this.state = 708;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tnsnamesParser.L_SQUARE) {
                    {
                        this.state = 704;
                        this.match(tnsnamesParser.L_SQUARE);
                        this.state = 705;
                        this.match(tnsnamesParser.DOT);
                        this.state = 706;
                        this.match(tnsnamesParser.ID);
                        this.state = 707;
                        this.match(tnsnamesParser.R_SQUARE);
                    }
                }
                this.state = 710;
                this.match(tnsnamesParser.ID);
                this.state = 715;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tnsnamesParser.DOT) {
                    {
                        {
                            this.state = 711;
                            this.match(tnsnamesParser.DOT);
                            this.state = 712;
                            this.match(tnsnamesParser.ID);
                        }
                    }
                    this.state = 717;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 718;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_server = function () {
        var _localctx = new Cd_serverContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, tnsnamesParser.RULE_cd_server);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 720;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 721;
                this.match(tnsnamesParser.SERVER);
                this.state = 722;
                this.match(tnsnamesParser.EQUAL);
                this.state = 723;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tnsnamesParser.DEDICATED) | (1 << tnsnamesParser.SHARED) | (1 << tnsnamesParser.POOLED))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 724;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.cd_ur = function () {
        var _localctx = new Cd_urContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, tnsnamesParser.RULE_cd_ur);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 726;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 727;
                this.match(tnsnamesParser.UR);
                this.state = 728;
                this.match(tnsnamesParser.EQUAL);
                this.state = 729;
                this.match(tnsnamesParser.UR_A);
                this.state = 730;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.fo_params = function () {
        var _localctx = new Fo_paramsContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, tnsnamesParser.RULE_fo_params);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 732;
                            this.fo_parameter();
                        }
                    }
                    this.state = 735;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === tnsnamesParser.L_PAREN);
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
    tnsnamesParser.prototype.fo_parameter = function () {
        var _localctx = new Fo_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, tnsnamesParser.RULE_fo_parameter);
        try {
            this.state = 742;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 737;
                        this.fo_type();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 738;
                        this.fo_backup();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 739;
                        this.fo_method();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 740;
                        this.fo_retries();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 741;
                        this.fo_delay();
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
    tnsnamesParser.prototype.fo_type = function () {
        var _localctx = new Fo_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, tnsnamesParser.RULE_fo_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 744;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 745;
                this.match(tnsnamesParser.TYPE);
                this.state = 746;
                this.match(tnsnamesParser.EQUAL);
                this.state = 747;
                _la = this._input.LA(1);
                if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (tnsnamesParser.SESSION - 68)) | (1 << (tnsnamesParser.SELECT - 68)) | (1 << (tnsnamesParser.NONE - 68)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 748;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.fo_backup = function () {
        var _localctx = new Fo_backupContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, tnsnamesParser.RULE_fo_backup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 750;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 751;
                this.match(tnsnamesParser.BACKUP);
                this.state = 752;
                this.match(tnsnamesParser.EQUAL);
                this.state = 753;
                this.match(tnsnamesParser.ID);
                this.state = 758;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tnsnamesParser.DOT) {
                    {
                        {
                            this.state = 754;
                            this.match(tnsnamesParser.DOT);
                            this.state = 755;
                            this.match(tnsnamesParser.ID);
                        }
                    }
                    this.state = 760;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 761;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.fo_method = function () {
        var _localctx = new Fo_methodContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, tnsnamesParser.RULE_fo_method);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 763;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 764;
                this.match(tnsnamesParser.METHOD);
                this.state = 765;
                this.match(tnsnamesParser.EQUAL);
                this.state = 766;
                _la = this._input.LA(1);
                if (!(_la === tnsnamesParser.BASIC || _la === tnsnamesParser.PRECONNECT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 767;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.fo_retries = function () {
        var _localctx = new Fo_retriesContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, tnsnamesParser.RULE_fo_retries);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 769;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 770;
                this.match(tnsnamesParser.RETRIES);
                this.state = 771;
                this.match(tnsnamesParser.EQUAL);
                this.state = 772;
                this.match(tnsnamesParser.INT);
                this.state = 773;
                this.match(tnsnamesParser.R_PAREN);
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
    tnsnamesParser.prototype.fo_delay = function () {
        var _localctx = new Fo_delayContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, tnsnamesParser.RULE_fo_delay);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 775;
                this.match(tnsnamesParser.L_PAREN);
                this.state = 776;
                this.match(tnsnamesParser.DELAY);
                this.state = 777;
                this.match(tnsnamesParser.EQUAL);
                this.state = 778;
                this.match(tnsnamesParser.INT);
                this.state = 779;
                this.match(tnsnamesParser.R_PAREN);
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
    Object.defineProperty(tnsnamesParser, "_ATN", {
        get: function () {
            if (!tnsnamesParser.__ATN) {
                tnsnamesParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tnsnamesParser._serializedATN));
            }
            return tnsnamesParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tnsnamesParser.L_PAREN = 1;
    tnsnamesParser.R_PAREN = 2;
    tnsnamesParser.L_SQUARE = 3;
    tnsnamesParser.R_SQUARE = 4;
    tnsnamesParser.EQUAL = 5;
    tnsnamesParser.DOT = 6;
    tnsnamesParser.COMMA = 7;
    tnsnamesParser.D_QUOTE = 8;
    tnsnamesParser.S_QUOTE = 9;
    tnsnamesParser.CONNECT_DATA = 10;
    tnsnamesParser.DESCRIPTION_LIST = 11;
    tnsnamesParser.DESCRIPTION = 12;
    tnsnamesParser.ADDRESS_LIST = 13;
    tnsnamesParser.ADDRESS = 14;
    tnsnamesParser.PROTOCOL = 15;
    tnsnamesParser.TCP = 16;
    tnsnamesParser.HOST = 17;
    tnsnamesParser.PORT = 18;
    tnsnamesParser.LOCAL = 19;
    tnsnamesParser.IP = 20;
    tnsnamesParser.YES_NO = 21;
    tnsnamesParser.ON_OFF = 22;
    tnsnamesParser.TRUE_FALSE = 23;
    tnsnamesParser.COMMENT = 24;
    tnsnamesParser.INT = 25;
    tnsnamesParser.OK = 26;
    tnsnamesParser.DEDICATED = 27;
    tnsnamesParser.SHARED = 28;
    tnsnamesParser.POOLED = 29;
    tnsnamesParser.LOAD_BALANCE = 30;
    tnsnamesParser.FAILOVER = 31;
    tnsnamesParser.UR = 32;
    tnsnamesParser.UR_A = 33;
    tnsnamesParser.ENABLE = 34;
    tnsnamesParser.BROKEN = 35;
    tnsnamesParser.SDU = 36;
    tnsnamesParser.RECV_BUF = 37;
    tnsnamesParser.SEND_BUF = 38;
    tnsnamesParser.SOURCE_ROUTE = 39;
    tnsnamesParser.SERVICE = 40;
    tnsnamesParser.SERVICE_TYPE = 41;
    tnsnamesParser.KEY = 42;
    tnsnamesParser.IPC = 43;
    tnsnamesParser.SPX = 44;
    tnsnamesParser.NMP = 45;
    tnsnamesParser.BEQ = 46;
    tnsnamesParser.PIPE = 47;
    tnsnamesParser.PROGRAM = 48;
    tnsnamesParser.ARGV0 = 49;
    tnsnamesParser.ARGS = 50;
    tnsnamesParser.SECURITY = 51;
    tnsnamesParser.SSL_CERT = 52;
    tnsnamesParser.CONN_TIMEOUT = 53;
    tnsnamesParser.RETRY_COUNT = 54;
    tnsnamesParser.TCT = 55;
    tnsnamesParser.IFILE = 56;
    tnsnamesParser.DQ_STRING = 57;
    tnsnamesParser.SERVICE_NAME = 58;
    tnsnamesParser.SID = 59;
    tnsnamesParser.INSTANCE_NAME = 60;
    tnsnamesParser.FAILOVER_MODE = 61;
    tnsnamesParser.GLOBAL_NAME = 62;
    tnsnamesParser.HS = 63;
    tnsnamesParser.RDB_DATABASE = 64;
    tnsnamesParser.SERVER = 65;
    tnsnamesParser.BACKUP = 66;
    tnsnamesParser.TYPE = 67;
    tnsnamesParser.SESSION = 68;
    tnsnamesParser.SELECT = 69;
    tnsnamesParser.NONE = 70;
    tnsnamesParser.METHOD = 71;
    tnsnamesParser.BASIC = 72;
    tnsnamesParser.PRECONNECT = 73;
    tnsnamesParser.RETRIES = 74;
    tnsnamesParser.DELAY = 75;
    tnsnamesParser.QUAD = 76;
    tnsnamesParser.ID = 77;
    tnsnamesParser.WS = 78;
    tnsnamesParser.I_EQUAL = 79;
    tnsnamesParser.I_STRING = 80;
    tnsnamesParser.ISQ_STRING = 81;
    tnsnamesParser.IUQ_STRING = 82;
    tnsnamesParser.I_WS = 83;
    tnsnamesParser.I_COMMENT = 84;
    tnsnamesParser.RULE_tnsnames = 0;
    tnsnamesParser.RULE_tns_entry = 1;
    tnsnamesParser.RULE_ifile = 2;
    tnsnamesParser.RULE_lsnr_entry = 3;
    tnsnamesParser.RULE_lsnr_description = 4;
    tnsnamesParser.RULE_alias_list = 5;
    tnsnamesParser.RULE_alias = 6;
    tnsnamesParser.RULE_description_list = 7;
    tnsnamesParser.RULE_dl_params = 8;
    tnsnamesParser.RULE_dl_parameter = 9;
    tnsnamesParser.RULE_description = 10;
    tnsnamesParser.RULE_d_params = 11;
    tnsnamesParser.RULE_d_parameter = 12;
    tnsnamesParser.RULE_d_enable = 13;
    tnsnamesParser.RULE_d_sdu = 14;
    tnsnamesParser.RULE_d_recv_buf = 15;
    tnsnamesParser.RULE_d_send_buf = 16;
    tnsnamesParser.RULE_d_service_type = 17;
    tnsnamesParser.RULE_d_security = 18;
    tnsnamesParser.RULE_d_conn_timeout = 19;
    tnsnamesParser.RULE_d_retry_count = 20;
    tnsnamesParser.RULE_d_tct = 21;
    tnsnamesParser.RULE_ds_parameter = 22;
    tnsnamesParser.RULE_address_list = 23;
    tnsnamesParser.RULE_al_params = 24;
    tnsnamesParser.RULE_al_parameter = 25;
    tnsnamesParser.RULE_al_failover = 26;
    tnsnamesParser.RULE_al_load_balance = 27;
    tnsnamesParser.RULE_al_source_route = 28;
    tnsnamesParser.RULE_address = 29;
    tnsnamesParser.RULE_a_params = 30;
    tnsnamesParser.RULE_a_parameter = 31;
    tnsnamesParser.RULE_protocol_info = 32;
    tnsnamesParser.RULE_tcp_protocol = 33;
    tnsnamesParser.RULE_tcp_params = 34;
    tnsnamesParser.RULE_tcp_parameter = 35;
    tnsnamesParser.RULE_tcp_host = 36;
    tnsnamesParser.RULE_tcp_port = 37;
    tnsnamesParser.RULE_tcp_tcp = 38;
    tnsnamesParser.RULE_host = 39;
    tnsnamesParser.RULE_port = 40;
    tnsnamesParser.RULE_ipc_protocol = 41;
    tnsnamesParser.RULE_ipc_params = 42;
    tnsnamesParser.RULE_ipc_parameter = 43;
    tnsnamesParser.RULE_ipc_ipc = 44;
    tnsnamesParser.RULE_ipc_key = 45;
    tnsnamesParser.RULE_spx_protocol = 46;
    tnsnamesParser.RULE_spx_params = 47;
    tnsnamesParser.RULE_spx_parameter = 48;
    tnsnamesParser.RULE_spx_spx = 49;
    tnsnamesParser.RULE_spx_service = 50;
    tnsnamesParser.RULE_nmp_protocol = 51;
    tnsnamesParser.RULE_nmp_params = 52;
    tnsnamesParser.RULE_nmp_parameter = 53;
    tnsnamesParser.RULE_nmp_nmp = 54;
    tnsnamesParser.RULE_nmp_server = 55;
    tnsnamesParser.RULE_nmp_pipe = 56;
    tnsnamesParser.RULE_beq_protocol = 57;
    tnsnamesParser.RULE_beq_params = 58;
    tnsnamesParser.RULE_beq_parameter = 59;
    tnsnamesParser.RULE_beq_beq = 60;
    tnsnamesParser.RULE_beq_program = 61;
    tnsnamesParser.RULE_beq_argv0 = 62;
    tnsnamesParser.RULE_beq_args = 63;
    tnsnamesParser.RULE_ba_parameter = 64;
    tnsnamesParser.RULE_ba_description = 65;
    tnsnamesParser.RULE_bad_params = 66;
    tnsnamesParser.RULE_bad_parameter = 67;
    tnsnamesParser.RULE_bad_local = 68;
    tnsnamesParser.RULE_bad_address = 69;
    tnsnamesParser.RULE_connect_data = 70;
    tnsnamesParser.RULE_cd_params = 71;
    tnsnamesParser.RULE_cd_parameter = 72;
    tnsnamesParser.RULE_cd_service_name = 73;
    tnsnamesParser.RULE_cd_sid = 74;
    tnsnamesParser.RULE_cd_instance_name = 75;
    tnsnamesParser.RULE_cd_failover_mode = 76;
    tnsnamesParser.RULE_cd_global_name = 77;
    tnsnamesParser.RULE_cd_hs = 78;
    tnsnamesParser.RULE_cd_rdb_database = 79;
    tnsnamesParser.RULE_cd_server = 80;
    tnsnamesParser.RULE_cd_ur = 81;
    tnsnamesParser.RULE_fo_params = 82;
    tnsnamesParser.RULE_fo_parameter = 83;
    tnsnamesParser.RULE_fo_type = 84;
    tnsnamesParser.RULE_fo_backup = 85;
    tnsnamesParser.RULE_fo_method = 86;
    tnsnamesParser.RULE_fo_retries = 87;
    tnsnamesParser.RULE_fo_delay = 88;
    // tslint:disable:no-trailing-whitespace
    tnsnamesParser.ruleNames = [
        "tnsnames", "tns_entry", "ifile", "lsnr_entry", "lsnr_description", "alias_list",
        "alias", "description_list", "dl_params", "dl_parameter", "description",
        "d_params", "d_parameter", "d_enable", "d_sdu", "d_recv_buf", "d_send_buf",
        "d_service_type", "d_security", "d_conn_timeout", "d_retry_count", "d_tct",
        "ds_parameter", "address_list", "al_params", "al_parameter", "al_failover",
        "al_load_balance", "al_source_route", "address", "a_params", "a_parameter",
        "protocol_info", "tcp_protocol", "tcp_params", "tcp_parameter", "tcp_host",
        "tcp_port", "tcp_tcp", "host", "port", "ipc_protocol", "ipc_params", "ipc_parameter",
        "ipc_ipc", "ipc_key", "spx_protocol", "spx_params", "spx_parameter", "spx_spx",
        "spx_service", "nmp_protocol", "nmp_params", "nmp_parameter", "nmp_nmp",
        "nmp_server", "nmp_pipe", "beq_protocol", "beq_params", "beq_parameter",
        "beq_beq", "beq_program", "beq_argv0", "beq_args", "ba_parameter", "ba_description",
        "bad_params", "bad_parameter", "bad_local", "bad_address", "connect_data",
        "cd_params", "cd_parameter", "cd_service_name", "cd_sid", "cd_instance_name",
        "cd_failover_mode", "cd_global_name", "cd_hs", "cd_rdb_database", "cd_server",
        "cd_ur", "fo_params", "fo_parameter", "fo_type", "fo_backup", "fo_method",
        "fo_retries", "fo_delay",
    ];
    tnsnamesParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'['", "']'", undefined, "'.'", "','", "'\"'",
        "'''",
    ];
    tnsnamesParser._SYMBOLIC_NAMES = [
        undefined, "L_PAREN", "R_PAREN", "L_SQUARE", "R_SQUARE", "EQUAL", "DOT",
        "COMMA", "D_QUOTE", "S_QUOTE", "CONNECT_DATA", "DESCRIPTION_LIST", "DESCRIPTION",
        "ADDRESS_LIST", "ADDRESS", "PROTOCOL", "TCP", "HOST", "PORT", "LOCAL",
        "IP", "YES_NO", "ON_OFF", "TRUE_FALSE", "COMMENT", "INT", "OK", "DEDICATED",
        "SHARED", "POOLED", "LOAD_BALANCE", "FAILOVER", "UR", "UR_A", "ENABLE",
        "BROKEN", "SDU", "RECV_BUF", "SEND_BUF", "SOURCE_ROUTE", "SERVICE", "SERVICE_TYPE",
        "KEY", "IPC", "SPX", "NMP", "BEQ", "PIPE", "PROGRAM", "ARGV0", "ARGS",
        "SECURITY", "SSL_CERT", "CONN_TIMEOUT", "RETRY_COUNT", "TCT", "IFILE",
        "DQ_STRING", "SERVICE_NAME", "SID", "INSTANCE_NAME", "FAILOVER_MODE",
        "GLOBAL_NAME", "HS", "RDB_DATABASE", "SERVER", "BACKUP", "TYPE", "SESSION",
        "SELECT", "NONE", "METHOD", "BASIC", "PRECONNECT", "RETRIES", "DELAY",
        "QUAD", "ID", "WS", "I_EQUAL", "I_STRING", "ISQ_STRING", "IUQ_STRING",
        "I_WS", "I_COMMENT",
    ];
    tnsnamesParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tnsnamesParser._LITERAL_NAMES, tnsnamesParser._SYMBOLIC_NAMES, []);
    tnsnamesParser._serializedATNSegments = 2;
    tnsnamesParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03V\u0310\x04\x02" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x03\x02\x03\x02\x03\x02\x07\x02\xB8\n\x02\f\x02\x0E" +
        "\x02\xBB\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xC1\n\x03\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05" +
        "\xCC\n\x05\r\x05\x0E\x05\xCD\x05\x05\xD0\n\x05\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x06\x06\xD7\n\x06\r\x06\x0E\x06\xD8\x05\x06\xDB\n\x06" +
        "\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07\xE2\n\x07\f\x07\x0E\x07" +
        "\xE5\v\x07\x03\b\x03\b\x03\b\x03\b\x06\b\xEB\n\b\r\b\x0E\b\xEC\x05\b\xEF" +
        "\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\xF5\n\t\x03\t\x06\t\xF8\n\t\r\t\x0E" +
        "\t\xF9\x03\t\x05\t\xFD\n\t\x03\t\x03\t\x03\n\x06\n\u0102\n\n\r\n\x0E\n" +
        "\u0103\x03\v\x03\v\x03\v\x05\v\u0109\n\v\x03\f\x03\f\x03\f\x03\f\x05\f" +
        "\u010F\n\f\x03\f\x03\f\x06\f\u0113\n\f\r\f\x0E\f\u0114\x05\f\u0117\n\f" +
        "\x03\f\x05\f\u011A\n\f\x03\f\x03\f\x05\f\u011E\n\f\x03\f\x03\f\x03\r\x06" +
        "\r\u0123\n\r\r\r\x0E\r\u0124\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0133\n\x0E" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
        "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
        "\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x05\x19\u0175\n\x19\x03\x19\x06\x19\u0178\n\x19\r\x19\x0E\x19" +
        "\u0179\x03\x19\x05\x19\u017D\n\x19\x03\x19\x03\x19\x03\x1A\x06\x1A\u0182" +
        "\n\x1A\r\x1A\x0E\x1A\u0183\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0189\n\x1B" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01A2\n\x1F\x03\x1F\x03" +
        "\x1F\x03 \x06 \u01A7\n \r \x0E \u01A8\x03!\x03!\x05!\u01AD\n!\x03\"\x03" +
        "\"\x03\"\x03\"\x03\"\x05\"\u01B4\n\"\x03#\x03#\x03$\x06$\u01B9\n$\r$\x0E" +
        "$\u01BA\x03%\x03%\x03%\x05%\u01C0\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03" +
        ")\x03)\x03)\x06)\u01D8\n)\r)\x0E)\u01D9\x03)\x05)\u01DD\n)\x03*\x03*\x03" +
        "+\x03+\x03,\x06,\u01E4\n,\r,\x0E,\u01E5\x03-\x03-\x05-\u01EA\n-\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x031\x06" +
        "1\u01FB\n1\r1\x0E1\u01FC\x032\x032\x052\u0201\n2\x033\x033\x033\x033\x03" +
        "3\x033\x034\x034\x034\x034\x034\x034\x035\x035\x036\x066\u0212\n6\r6\x0E" +
        "6\u0213\x037\x037\x037\x057\u0219\n7\x038\x038\x038\x038\x038\x038\x03" +
        "9\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03" +
        "<\x06<\u0230\n<\r<\x0E<\u0231\x03=\x03=\x03=\x03=\x05=\u0238\n=\x03>\x03" +
        ">\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03" +
        "@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03C\x03" +
        "C\x03C\x03C\x03C\x03C\x03D\x06D\u025D\nD\rD\x0ED\u025E\x03E\x03E\x05E" +
        "\u0263\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x03G" +
        "\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x06I\u0278\nI\rI\x0EI\u0279\x03J\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0285\nJ\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x07K\u028D\nK\fK\x0EK\u0290\vK\x03K\x03K\x03L\x03L\x03L\x03" +
        "L\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03M\x07M\u02A0\nM\fM\x0EM\u02A3" +
        "\vM\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03" +
        "O\x07O\u02B3\nO\fO\x0EO\u02B6\vO\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03" +
        "P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u02C7\nQ\x03Q\x03Q\x03Q\x07" +
        "Q\u02CC\nQ\fQ\x0EQ\u02CF\vQ\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
        "S\x03S\x03S\x03S\x03S\x03S\x03T\x06T\u02E0\nT\rT\x0ET\u02E1\x03U\x03U" +
        "\x03U\x03U\x03U\x05U\u02E9\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03W\x03W" +
        "\x03W\x03W\x03W\x03W\x07W\u02F7\nW\fW\x0EW\u02FA\vW\x03W\x03W\x03X\x03" +
        "X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03" +
        "Z\x03Z\x03Z\x03Z\x02\x02\x02[\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
        "\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
        "\xAE\x02\xB0\x02\xB2\x02\x02\x07\x03\x02\x17\x19\x03\x02\x17\x18\x03\x02" +
        "\x1D\x1F\x03\x02FH\x03\x02JK\x02\u030D\x02\xB9\x03\x02\x02\x02\x04\xBC" +
        "\x03\x02\x02\x02\x06\xC2\x03\x02\x02\x02\b\xC6\x03\x02\x02\x02\n\xD1\x03" +
        "\x02\x02\x02\f\xDE\x03\x02\x02\x02\x0E\xEE\x03\x02\x02\x02\x10\xF0\x03" +
        "\x02\x02\x02\x12\u0101\x03\x02\x02\x02\x14\u0108\x03\x02\x02\x02\x16\u010A" +
        "\x03\x02\x02\x02\x18\u0122\x03\x02\x02\x02\x1A\u0132\x03\x02\x02\x02\x1C" +
        "\u0134\x03\x02\x02\x02\x1E\u013A\x03\x02\x02\x02 \u0140\x03\x02\x02\x02" +
        "\"\u0146\x03\x02\x02\x02$\u014C\x03\x02\x02\x02&\u0152\x03\x02\x02\x02" +
        "(\u0158\x03\x02\x02\x02*\u015E\x03\x02\x02\x02,\u0164\x03\x02\x02\x02" +
        ".\u016A\x03\x02\x02\x020\u0170\x03\x02\x02\x022\u0181\x03\x02\x02\x02" +
        "4\u0188\x03\x02\x02\x026\u018A\x03\x02\x02\x028\u0190\x03\x02\x02\x02" +
        ":\u0196\x03\x02\x02\x02<\u019C\x03\x02\x02\x02>\u01A6\x03\x02\x02\x02" +
        "@\u01AC\x03\x02\x02\x02B\u01B3\x03\x02\x02\x02D\u01B5\x03\x02\x02\x02" +
        "F\u01B8\x03\x02\x02\x02H\u01BF\x03\x02\x02\x02J\u01C1\x03\x02\x02\x02" +
        "L\u01C7\x03\x02\x02\x02N\u01CD\x03\x02\x02\x02P\u01DC\x03\x02\x02\x02" +
        "R\u01DE\x03\x02\x02\x02T\u01E0\x03\x02\x02\x02V\u01E3\x03\x02\x02\x02" +
        "X\u01E9\x03\x02\x02\x02Z\u01EB\x03\x02\x02\x02\\\u01F1\x03\x02\x02\x02" +
        "^\u01F7\x03\x02\x02\x02`\u01FA\x03\x02\x02\x02b\u0200\x03\x02\x02\x02" +
        "d\u0202\x03\x02\x02\x02f\u0208\x03\x02\x02\x02h\u020E\x03\x02\x02\x02" +
        "j\u0211\x03\x02\x02\x02l\u0218\x03\x02\x02\x02n\u021A\x03\x02\x02\x02" +
        "p\u0220\x03\x02\x02\x02r\u0226\x03\x02\x02\x02t\u022C\x03\x02\x02\x02" +
        "v\u022F\x03\x02\x02\x02x\u0237\x03\x02\x02\x02z\u0239\x03\x02\x02\x02" +
        "|\u023F\x03\x02\x02\x02~\u0245\x03\x02\x02\x02\x80\u024B\x03\x02\x02\x02" +
        "\x82\u0251\x03\x02\x02\x02\x84\u0255\x03\x02\x02\x02\x86\u025C\x03\x02" +
        "\x02\x02\x88\u0262\x03\x02\x02\x02\x8A\u0264\x03\x02\x02\x02\x8C\u026A" +
        "\x03\x02\x02\x02\x8E\u0270\x03\x02\x02\x02\x90\u0277\x03\x02\x02\x02\x92" +
        "\u0284\x03\x02\x02\x02\x94\u0286\x03\x02\x02\x02\x96\u0293\x03\x02\x02" +
        "\x02\x98\u0299\x03\x02\x02\x02\x9A\u02A6\x03\x02\x02\x02\x9C\u02AC\x03" +
        "\x02\x02\x02\x9E\u02B9\x03\x02\x02\x02\xA0\u02BF\x03\x02\x02\x02\xA2\u02D2" +
        "\x03\x02\x02\x02\xA4\u02D8\x03\x02\x02\x02\xA6\u02DF\x03\x02\x02\x02\xA8" +
        "\u02E8\x03\x02\x02\x02\xAA\u02EA\x03\x02\x02\x02\xAC\u02F0\x03\x02\x02" +
        "\x02\xAE\u02FD\x03\x02\x02\x02\xB0\u0303\x03\x02\x02\x02\xB2\u0309\x03" +
        "\x02\x02\x02\xB4\xB8\x05\x04\x03\x02\xB5\xB8\x05\x06\x04\x02\xB6\xB8\x05" +
        "\b\x05\x02\xB7\xB4\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB6\x03" +
        "\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03" +
        "\x02\x02\x02\xBA\x03\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBD\x05" +
        "\f\x07\x02\xBD\xC0\x07\x07\x02\x02\xBE\xC1\x05\x10\t\x02\xBF\xC1\x05\x16" +
        "\f\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\x05\x03\x02" +
        "\x02\x02\xC2\xC3\x07:\x02\x02\xC3\xC4\x07Q\x02\x02\xC4\xC5\x07R\x02\x02" +
        "\xC5\x07\x03\x02\x02\x02\xC6\xC7\x05\x0E\b\x02\xC7\xCF\x07\x07\x02\x02" +
        "\xC8\xD0\x05\n\x06\x02\xC9\xD0\x050\x19\x02\xCA\xCC\x05<\x1F\x02\xCB\xCA" +
        "\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE" +
        "\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xC8\x03\x02\x02\x02\xCF\xC9" +
        "\x03\x02\x02\x02\xCF\xCB\x03\x02\x02\x02\xD0\t\x03\x02\x02\x02\xD1\xD2" +
        "\x07\x03\x02\x02\xD2\xD3\x07\x0E\x02\x02\xD3\xDA\x07\x07\x02\x02\xD4\xDB" +
        "\x050\x19\x02\xD5\xD7\x05<\x1F\x02\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03" +
        "\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03" +
        "\x02\x02\x02\xDA\xD4\x03\x02\x02\x02\xDA\xD6\x03\x02\x02\x02\xDB\xDC\x03" +
        "\x02\x02\x02\xDC\xDD\x07\x04\x02\x02\xDD\v\x03\x02\x02\x02\xDE\xE3\x05" +
        "\x0E\b\x02\xDF\xE0\x07\t\x02\x02\xE0\xE2\x05\x0E\b\x02\xE1\xDF\x03\x02" +
        "\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02" +
        "\x02\x02\xE4\r\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xEF\x07O\x02" +
        "\x02\xE7\xEA\x07O\x02\x02\xE8\xE9\x07\b\x02\x02\xE9\xEB\x07O\x02\x02\xEA" +
        "\xE8\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC" +
        "\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xE6\x03\x02\x02\x02\xEE" +
        "\xE7\x03\x02\x02\x02\xEF\x0F\x03\x02\x02\x02\xF0\xF1\x07\x03\x02\x02\xF1" +
        "\xF2\x07\r\x02\x02\xF2\xF4\x07\x07\x02\x02\xF3\xF5\x05\x12\n\x02\xF4\xF3" +
        "\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF8" +
        "\x05\x16\f\x02\xF7\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xF7" +
        "\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xFD" +
        "\x05\x12\n\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE" +
        "\x03\x02\x02\x02\xFE\xFF\x07\x04\x02\x02\xFF\x11\x03\x02\x02\x02\u0100" +
        "\u0102\x05\x14\v\x02\u0101\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02" +
        "\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\x13" +
        "\x03\x02\x02\x02\u0105\u0109\x056\x1C\x02\u0106\u0109\x058\x1D\x02\u0107" +
        "\u0109\x05:\x1E\x02\u0108\u0105\x03\x02\x02\x02\u0108\u0106\x03\x02\x02" +
        "\x02\u0108\u0107\x03\x02\x02\x02\u0109\x15\x03\x02\x02\x02\u010A\u010B" +
        "\x07\x03\x02\x02\u010B\u010C\x07\x0E\x02\x02\u010C\u010E\x07\x07\x02\x02" +
        "\u010D\u010F\x05\x18\r\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03" +
        "\x02\x02\x02\u010F\u0116\x03\x02\x02\x02\u0110\u0117\x050\x19\x02\u0111" +
        "\u0113\x05<\x1F\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02" +
        "\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0117" +
        "\x03\x02\x02\x02\u0116\u0110\x03\x02\x02\x02\u0116\u0112\x03\x02\x02\x02" +
        "\u0117\u0119\x03\x02\x02\x02\u0118\u011A\x05\x18\r\x02\u0119\u0118\x03" +
        "\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
        "\u011D\x05\x8EH\x02\u011C\u011E\x05\x18\r\x02\u011D\u011C\x03\x02\x02" +
        "\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120" +
        "\x07\x04\x02\x02\u0120\x17\x03\x02\x02\x02\u0121\u0123\x05\x1A\x0E\x02" +
        "\u0122\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0122\x03" +
        "\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\x19\x03\x02\x02\x02\u0126" +
        "\u0133\x05\x1C\x0F\x02\u0127\u0133\x056\x1C\x02\u0128\u0133\x058\x1D\x02" +
        "\u0129\u0133\x05\x1E\x10\x02\u012A\u0133\x05 \x11\x02\u012B\u0133\x05" +
        "\"\x12\x02\u012C\u0133\x05:\x1E\x02\u012D\u0133\x05$\x13\x02\u012E\u0133" +
        "\x05&\x14\x02\u012F\u0133\x05(\x15\x02\u0130\u0133\x05*\x16\x02\u0131" +
        "\u0133\x05,\x17\x02\u0132\u0126\x03\x02\x02\x02\u0132\u0127\x03\x02\x02" +
        "\x02\u0132\u0128\x03\x02\x02\x02\u0132\u0129\x03\x02\x02\x02\u0132\u012A" +
        "\x03\x02\x02\x02\u0132\u012B\x03\x02\x02\x02\u0132\u012C\x03\x02\x02\x02" +
        "\u0132\u012D\x03\x02\x02\x02\u0132\u012E\x03\x02\x02\x02\u0132\u012F\x03" +
        "\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0131\x03\x02\x02\x02\u0133" +
        "\x1B\x03\x02\x02\x02\u0134\u0135\x07\x03\x02\x02\u0135\u0136\x07$\x02" +
        "\x02\u0136\u0137\x07\x07\x02\x02\u0137\u0138\x07%\x02\x02\u0138\u0139" +
        "\x07\x04\x02\x02\u0139\x1D\x03\x02\x02\x02\u013A\u013B\x07\x03\x02\x02" +
        "\u013B\u013C\x07&\x02\x02\u013C\u013D\x07\x07\x02\x02\u013D\u013E\x07" +
        "\x1B\x02\x02\u013E\u013F\x07\x04\x02\x02\u013F\x1F\x03\x02\x02\x02\u0140" +
        "\u0141\x07\x03\x02\x02\u0141\u0142\x07\'\x02\x02\u0142\u0143\x07\x07\x02" +
        "\x02\u0143\u0144\x07\x1B\x02\x02\u0144\u0145\x07\x04\x02\x02\u0145!\x03" +
        "\x02\x02\x02\u0146\u0147\x07\x03\x02\x02\u0147\u0148\x07(\x02\x02\u0148" +
        "\u0149\x07\x07\x02\x02\u0149\u014A\x07\x1B\x02\x02\u014A\u014B\x07\x04" +
        "\x02\x02\u014B#\x03\x02\x02\x02\u014C\u014D\x07\x03\x02\x02\u014D\u014E" +
        "\x07+\x02\x02\u014E\u014F\x07\x07\x02\x02\u014F\u0150\x07O\x02\x02\u0150" +
        "\u0151\x07\x04\x02\x02\u0151%\x03\x02\x02\x02\u0152\u0153\x07\x03\x02" +
        "\x02\u0153\u0154\x075\x02\x02\u0154\u0155\x07\x07\x02\x02\u0155\u0156" +
        "\x05.\x18\x02\u0156\u0157\x07\x04\x02\x02\u0157\'\x03\x02\x02\x02\u0158" +
        "\u0159\x07\x03\x02\x02\u0159\u015A\x077\x02\x02\u015A\u015B\x07\x07\x02" +
        "\x02\u015B\u015C\x07\x1B\x02\x02\u015C\u015D\x07\x04\x02\x02\u015D)\x03" +
        "\x02\x02\x02\u015E\u015F\x07\x03\x02\x02\u015F\u0160\x078\x02\x02\u0160" +
        "\u0161\x07\x07\x02\x02\u0161\u0162\x07\x1B\x02\x02\u0162\u0163\x07\x04" +
        "\x02\x02\u0163+\x03\x02\x02\x02\u0164\u0165\x07\x03\x02\x02\u0165\u0166" +
        "\x079\x02\x02\u0166\u0167\x07\x07\x02\x02\u0167\u0168\x07\x1B\x02\x02" +
        "\u0168\u0169\x07\x04\x02\x02\u0169-\x03\x02\x02\x02\u016A\u016B\x07\x03" +
        "\x02\x02\u016B\u016C\x076\x02\x02\u016C\u016D\x07\x07\x02\x02\u016D\u016E" +
        "\x07;\x02\x02\u016E\u016F\x07\x04\x02\x02\u016F/\x03\x02\x02\x02\u0170" +
        "\u0171\x07\x03\x02\x02\u0171\u0172\x07\x0F\x02\x02\u0172\u0174\x07\x07" +
        "\x02\x02\u0173\u0175\x052\x1A\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175" +
        "\x03\x02\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u0178\x05<\x1F\x02" +
        "\u0177\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u0177\x03" +
        "\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B" +
        "\u017D\x052\x1A\x02\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02" +
        "\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x07\x04\x02\x02\u017F1\x03" +
        "\x02\x02\x02\u0180\u0182\x054\x1B\x02\u0181\u0180\x03\x02\x02\x02\u0182" +
        "\u0183\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02" +
        "\x02\x02\u01843\x03\x02\x02\x02\u0185\u0189\x056\x1C\x02\u0186\u0189\x05" +
        "8\x1D\x02\u0187\u0189\x05:\x1E\x02\u0188\u0185\x03\x02\x02\x02\u0188\u0186" +
        "\x03\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u01895\x03\x02\x02\x02\u018A" +
        "\u018B\x07\x03\x02\x02\u018B\u018C\x07!\x02\x02\u018C\u018D\x07\x07\x02" +
        "\x02\u018D\u018E\t\x02\x02\x02\u018E\u018F\x07\x04\x02\x02\u018F7\x03" +
        "\x02\x02\x02\u0190\u0191\x07\x03\x02\x02\u0191\u0192\x07 \x02\x02\u0192" +
        "\u0193\x07\x07\x02\x02\u0193\u0194\t\x02\x02\x02\u0194\u0195\x07\x04\x02" +
        "\x02\u01959\x03\x02\x02\x02\u0196\u0197\x07\x03\x02\x02\u0197\u0198\x07" +
        ")\x02\x02\u0198\u0199\x07\x07\x02\x02\u0199\u019A\t\x03\x02\x02\u019A" +
        "\u019B\x07\x04\x02\x02\u019B;\x03\x02\x02\x02\u019C\u019D\x07\x03\x02" +
        "\x02\u019D\u019E\x07\x10\x02\x02\u019E\u019F\x07\x07\x02\x02\u019F\u01A1" +
        "\x05B\"\x02\u01A0\u01A2\x05> \x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2" +
        "\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x07\x04\x02\x02" +
        "\u01A4=\x03\x02\x02\x02\u01A5\u01A7\x05@!\x02\u01A6\u01A5\x03\x02\x02" +
        "\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9" +
        "\x03\x02\x02\x02\u01A9?\x03\x02\x02\x02\u01AA\u01AD\x05\"\x12\x02\u01AB" +
        "\u01AD\x05 \x11\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AB\x03\x02\x02" +
        "\x02\u01ADA\x03\x02\x02\x02\u01AE\u01B4\x05D#\x02\u01AF\u01B4\x05T+\x02" +
        "\u01B0\u01B4\x05^0\x02\u01B1\u01B4\x05h5\x02\u01B2\u01B4\x05t;\x02\u01B3" +
        "\u01AE\x03\x02\x02\x02\u01B3\u01AF\x03\x02\x02\x02\u01B3\u01B0\x03\x02" +
        "\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4" +
        "C\x03\x02\x02\x02\u01B5\u01B6\x05F$\x02\u01B6E\x03\x02\x02\x02\u01B7\u01B9" +
        "\x05H%\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
        "\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BBG\x03\x02\x02" +
        "\x02\u01BC\u01C0\x05J&\x02\u01BD\u01C0\x05L\'\x02\u01BE\u01C0\x05N(\x02" +
        "\u01BF\u01BC\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03" +
        "\x02\x02\x02\u01C0I\x03\x02\x02\x02\u01C1\u01C2\x07\x03\x02\x02\u01C2" +
        "\u01C3\x07\x13\x02\x02\u01C3\u01C4\x07\x07\x02\x02\u01C4\u01C5\x05P)\x02" +
        "\u01C5\u01C6\x07\x04\x02\x02\u01C6K\x03\x02\x02\x02\u01C7\u01C8\x07\x03" +
        "\x02\x02\u01C8\u01C9\x07\x14\x02\x02\u01C9\u01CA\x07\x07\x02\x02\u01CA" +
        "\u01CB\x05R*\x02\u01CB\u01CC\x07\x04\x02\x02\u01CCM\x03\x02\x02\x02\u01CD" +
        "\u01CE\x07\x03\x02\x02\u01CE\u01CF\x07\x11\x02\x02\u01CF\u01D0\x07\x07" +
        "\x02\x02\u01D0\u01D1\x07\x12\x02\x02\u01D1\u01D2\x07\x04\x02\x02\u01D2" +
        "O\x03\x02\x02\x02\u01D3\u01DD\x07O\x02\x02\u01D4\u01D7\x07O\x02\x02\u01D5" +
        "\u01D6\x07\b\x02\x02\u01D6\u01D8\x07O\x02\x02\u01D7\u01D5\x03\x02\x02" +
        "\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA" +
        "\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01DD\x07\x16\x02\x02" +
        "\u01DC\u01D3\x03\x02\x02\x02\u01DC\u01D4\x03\x02\x02\x02\u01DC\u01DB\x03" +
        "\x02\x02\x02\u01DDQ\x03\x02\x02\x02\u01DE\u01DF\x07\x1B\x02\x02\u01DF" +
        "S\x03\x02\x02\x02\u01E0\u01E1\x05V,\x02\u01E1U\x03\x02\x02\x02\u01E2\u01E4" +
        "\x05X-\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5" +
        "\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6W\x03\x02\x02" +
        "\x02\u01E7\u01EA\x05Z.\x02\u01E8\u01EA\x05\\/\x02\u01E9\u01E7\x03\x02" +
        "\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EAY\x03\x02\x02\x02\u01EB\u01EC" +
        "\x07\x03\x02\x02\u01EC\u01ED\x07\x11\x02\x02\u01ED\u01EE\x07\x07\x02\x02" +
        "\u01EE\u01EF\x07-\x02\x02\u01EF\u01F0\x07\x04\x02\x02\u01F0[\x03\x02\x02" +
        "\x02\u01F1\u01F2\x07\x03\x02\x02\u01F2\u01F3\x07,\x02\x02\u01F3\u01F4" +
        "\x07\x07\x02\x02\u01F4\u01F5\x07O\x02\x02\u01F5\u01F6\x07\x04\x02\x02" +
        "\u01F6]\x03\x02\x02\x02\u01F7\u01F8\x05`1\x02\u01F8_\x03\x02\x02\x02\u01F9" +
        "\u01FB\x05b2\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02" +
        "\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FDa\x03\x02" +
        "\x02\x02\u01FE\u0201\x05d3\x02\u01FF\u0201\x05f4\x02\u0200\u01FE\x03\x02" +
        "\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201c\x03\x02\x02\x02\u0202\u0203" +
        "\x07\x03\x02\x02\u0203\u0204\x07\x11\x02\x02\u0204\u0205\x07\x07\x02\x02" +
        "\u0205\u0206\x07.\x02\x02\u0206\u0207\x07\x04\x02\x02\u0207e\x03\x02\x02" +
        "\x02\u0208\u0209\x07\x03\x02\x02\u0209\u020A\x07*\x02\x02\u020A\u020B" +
        "\x07\x07\x02\x02\u020B\u020C\x07O\x02\x02\u020C\u020D\x07\x04\x02\x02" +
        "\u020Dg\x03\x02\x02\x02\u020E\u020F\x05j6\x02\u020Fi\x03\x02\x02\x02\u0210" +
        "\u0212\x05l7\x02\u0211\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
        "\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214k\x03\x02" +
        "\x02\x02\u0215\u0219\x05n8\x02\u0216\u0219\x05p9\x02\u0217\u0219\x05r" +
        ":\x02\u0218\u0215\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217" +
        "\x03\x02\x02\x02\u0219m\x03\x02\x02\x02\u021A\u021B\x07\x03\x02\x02\u021B" +
        "\u021C\x07\x11\x02\x02\u021C\u021D\x07\x07\x02\x02\u021D\u021E\x07/\x02" +
        "\x02\u021E\u021F\x07\x04\x02\x02\u021Fo\x03\x02\x02\x02\u0220\u0221\x07" +
        "\x03\x02\x02\u0221\u0222\x07C\x02\x02\u0222\u0223\x07\x07\x02\x02\u0223" +
        "\u0224\x07O\x02\x02\u0224\u0225\x07\x04\x02\x02\u0225q\x03\x02\x02\x02" +
        "\u0226\u0227\x07\x03\x02\x02\u0227\u0228\x071\x02\x02\u0228\u0229\x07" +
        "\x07\x02\x02";
    tnsnamesParser._serializedATNSegment1 = "\u0229\u022A\x07O\x02\x02\u022A\u022B\x07\x04\x02\x02\u022Bs\x03\x02\x02" +
        "\x02\u022C\u022D\x05v<\x02\u022Du\x03\x02\x02\x02\u022E\u0230\x05x=\x02" +
        "\u022F\u022E\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u022F\x03" +
        "\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232w\x03\x02\x02\x02\u0233" +
        "\u0238\x05z>\x02\u0234\u0238\x05|?\x02\u0235\u0238\x05~@\x02\u0236\u0238" +
        "\x05\x80A\x02\u0237\u0233\x03\x02\x02\x02\u0237\u0234\x03\x02\x02\x02" +
        "\u0237\u0235\x03\x02\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238y\x03\x02" +
        "\x02\x02\u0239\u023A\x07\x03\x02\x02\u023A\u023B\x07\x11\x02\x02\u023B" +
        "\u023C\x07\x07\x02\x02\u023C\u023D\x070\x02\x02\u023D\u023E\x07\x04\x02" +
        "\x02\u023E{\x03\x02\x02\x02\u023F\u0240\x07\x03\x02\x02\u0240\u0241\x07" +
        "2\x02\x02\u0241\u0242\x07\x07\x02\x02\u0242\u0243\x07O\x02\x02\u0243\u0244" +
        "\x07\x04\x02\x02\u0244}\x03\x02\x02\x02\u0245\u0246\x07\x03\x02\x02\u0246" +
        "\u0247\x073\x02\x02\u0247\u0248\x07\x07\x02\x02\u0248\u0249\x07O\x02\x02" +
        "\u0249\u024A\x07\x04\x02\x02\u024A\x7F\x03\x02\x02\x02\u024B\u024C\x07" +
        "\x03\x02\x02\u024C\u024D\x074\x02\x02\u024D\u024E\x07\x07\x02\x02\u024E" +
        "\u024F\x05\x82B\x02\u024F\u0250\x07\x04\x02\x02\u0250\x81\x03\x02\x02" +
        "\x02\u0251\u0252\x07\v\x02\x02\u0252\u0253\x05\x84C\x02\u0253\u0254\x07" +
        "\v\x02\x02\u0254\x83\x03\x02\x02\x02\u0255\u0256\x07\x03\x02\x02\u0256" +
        "\u0257\x07\x0E\x02\x02\u0257\u0258\x07\x07\x02\x02\u0258\u0259\x05\x86" +
        "D\x02\u0259\u025A\x07\x04\x02\x02\u025A\x85\x03\x02\x02\x02\u025B\u025D" +
        "\x05\x88E\x02\u025C\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02" +
        "\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\x87\x03" +
        "\x02\x02\x02\u0260\u0263\x05\x8AF\x02\u0261\u0263\x05\x8CG\x02\u0262\u0260" +
        "\x03\x02\x02\x02\u0262\u0261\x03\x02\x02\x02\u0263\x89\x03\x02\x02\x02" +
        "\u0264\u0265\x07\x03\x02\x02\u0265\u0266\x07\x15\x02\x02\u0266\u0267\x07" +
        "\x07\x02\x02\u0267\u0268\x07\x17\x02\x02\u0268\u0269\x07\x04\x02\x02\u0269" +
        "\x8B\x03\x02\x02\x02\u026A\u026B\x07\x03\x02\x02\u026B\u026C\x07\x10\x02" +
        "\x02\u026C\u026D\x07\x07\x02\x02\u026D\u026E\x05z>\x02\u026E\u026F\x07" +
        "\x04\x02\x02\u026F\x8D\x03\x02\x02\x02\u0270\u0271\x07\x03\x02\x02\u0271" +
        "\u0272\x07\f\x02\x02\u0272\u0273\x07\x07\x02\x02\u0273\u0274\x05\x90I" +
        "\x02\u0274\u0275\x07\x04\x02\x02\u0275\x8F\x03\x02\x02\x02\u0276\u0278" +
        "\x05\x92J\x02\u0277\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02" +
        "\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\x91\x03" +
        "\x02\x02\x02\u027B\u0285\x05\x94K\x02\u027C\u0285\x05\x96L\x02\u027D\u0285" +
        "\x05\x98M\x02\u027E\u0285\x05\x9AN\x02\u027F\u0285\x05\x9CO\x02\u0280" +
        "\u0285\x05\x9EP\x02\u0281\u0285\x05\xA0Q\x02\u0282\u0285\x05\xA2R\x02" +
        "\u0283\u0285\x05\xA4S\x02\u0284\u027B\x03\x02\x02\x02\u0284\u027C\x03" +
        "\x02\x02\x02\u0284\u027D\x03\x02\x02\x02\u0284\u027E\x03\x02\x02\x02\u0284" +
        "\u027F\x03\x02\x02\x02\u0284\u0280\x03\x02\x02\x02\u0284\u0281\x03\x02" +
        "\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285" +
        "\x93\x03\x02\x02\x02\u0286\u0287\x07\x03\x02\x02\u0287\u0288\x07<\x02" +
        "\x02\u0288\u0289\x07\x07\x02\x02\u0289\u028E\x07O\x02\x02\u028A\u028B" +
        "\x07\b\x02\x02\u028B\u028D\x07O\x02\x02\u028C\u028A\x03\x02\x02\x02\u028D" +
        "\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02" +
        "\x02\x02\u028F\u0291\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291" +
        "\u0292\x07\x04\x02\x02\u0292\x95\x03\x02\x02\x02\u0293\u0294\x07\x03\x02" +
        "\x02\u0294\u0295\x07=\x02\x02\u0295\u0296\x07\x07\x02\x02\u0296\u0297" +
        "\x07O\x02\x02\u0297\u0298\x07\x04\x02\x02\u0298\x97\x03\x02\x02\x02\u0299" +
        "\u029A\x07\x03\x02\x02\u029A\u029B\x07>\x02\x02\u029B\u029C\x07\x07\x02" +
        "\x02\u029C\u02A1\x07O\x02\x02\u029D\u029E\x07\b\x02\x02\u029E\u02A0\x07" +
        "O\x02\x02\u029F\u029D\x03\x02\x02\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1" +
        "\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A4\x03\x02" +
        "\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4\u02A5\x07\x04\x02\x02\u02A5" +
        "\x99\x03\x02\x02\x02\u02A6\u02A7\x07\x03\x02\x02\u02A7\u02A8\x07?\x02" +
        "\x02\u02A8\u02A9\x07\x07\x02\x02\u02A9\u02AA\x05\xA6T\x02\u02AA\u02AB" +
        "\x07\x04\x02\x02\u02AB\x9B\x03\x02\x02\x02\u02AC\u02AD\x07\x03\x02\x02" +
        "\u02AD\u02AE\x07@\x02\x02\u02AE\u02AF\x07\x07\x02\x02\u02AF\u02B4\x07" +
        "O\x02\x02\u02B0\u02B1\x07\b\x02\x02\u02B1\u02B3\x07O\x02\x02\u02B2\u02B0" +
        "\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02" +
        "\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6\u02B4\x03" +
        "\x02\x02\x02\u02B7\u02B8\x07\x04\x02\x02\u02B8\x9D\x03\x02\x02\x02\u02B9" +
        "\u02BA\x07\x03\x02\x02\u02BA\u02BB\x07A\x02\x02\u02BB\u02BC\x07\x07\x02" +
        "\x02\u02BC\u02BD\x07\x1C\x02\x02\u02BD\u02BE\x07\x04\x02\x02\u02BE\x9F" +
        "\x03\x02\x02\x02\u02BF\u02C0\x07\x03\x02\x02\u02C0\u02C1\x07B\x02\x02" +
        "\u02C1\u02C6\x07\x07\x02\x02\u02C2\u02C3\x07\x05\x02\x02\u02C3\u02C4\x07" +
        "\b\x02\x02\u02C4\u02C5\x07O\x02\x02\u02C5\u02C7\x07\x06\x02\x02\u02C6" +
        "\u02C2\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02" +
        "\x02\x02\u02C8\u02CD\x07O\x02\x02\u02C9\u02CA\x07\b\x02\x02\u02CA\u02CC" +
        "\x07O\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02" +
        "\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x03" +
        "\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D1\x07\x04\x02\x02\u02D1" +
        "\xA1\x03\x02\x02\x02\u02D2\u02D3\x07\x03\x02\x02\u02D3\u02D4\x07C\x02" +
        "\x02\u02D4\u02D5\x07\x07\x02\x02\u02D5\u02D6\t\x04\x02\x02\u02D6\u02D7" +
        "\x07\x04\x02\x02\u02D7\xA3\x03\x02\x02\x02\u02D8\u02D9\x07\x03\x02\x02" +
        "\u02D9\u02DA\x07\"\x02\x02\u02DA\u02DB\x07\x07\x02\x02\u02DB\u02DC\x07" +
        "#\x02\x02\u02DC\u02DD\x07\x04\x02\x02\u02DD\xA5\x03\x02\x02\x02\u02DE" +
        "\u02E0\x05\xA8U\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02" +
        "\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\xA7" +
        "\x03\x02\x02\x02\u02E3\u02E9\x05\xAAV\x02\u02E4\u02E9\x05\xACW\x02\u02E5" +
        "\u02E9\x05\xAEX\x02\u02E6\u02E9\x05\xB0Y\x02\u02E7\u02E9\x05\xB2Z\x02" +
        "\u02E8\u02E3\x03\x02\x02\x02\u02E8\u02E4\x03\x02\x02\x02\u02E8\u02E5\x03" +
        "\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9" +
        "\xA9\x03\x02\x02\x02\u02EA\u02EB\x07\x03\x02\x02\u02EB\u02EC\x07E\x02" +
        "\x02\u02EC\u02ED\x07\x07\x02\x02\u02ED\u02EE\t\x05\x02\x02\u02EE\u02EF" +
        "\x07\x04\x02\x02\u02EF\xAB\x03\x02\x02\x02\u02F0\u02F1\x07\x03\x02\x02" +
        "\u02F1\u02F2\x07D\x02\x02\u02F2\u02F3\x07\x07\x02\x02\u02F3\u02F8\x07" +
        "O\x02\x02\u02F4\u02F5\x07\b\x02\x02\u02F5\u02F7\x07O\x02\x02\u02F6\u02F4" +
        "\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02" +
        "\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA\u02F8\x03" +
        "\x02\x02\x02\u02FB\u02FC\x07\x04\x02\x02\u02FC\xAD\x03\x02\x02\x02\u02FD" +
        "\u02FE\x07\x03\x02\x02\u02FE\u02FF\x07I\x02\x02\u02FF\u0300\x07\x07\x02" +
        "\x02\u0300\u0301\t\x06\x02\x02\u0301\u0302\x07\x04\x02\x02\u0302\xAF\x03" +
        "\x02\x02\x02\u0303\u0304\x07\x03\x02\x02\u0304\u0305\x07L\x02\x02\u0305" +
        "\u0306\x07\x07\x02\x02\u0306\u0307\x07\x1B\x02\x02\u0307\u0308\x07\x04" +
        "\x02\x02\u0308\xB1\x03\x02\x02\x02\u0309\u030A\x07\x03\x02\x02\u030A\u030B" +
        "\x07M\x02\x02\u030B\u030C\x07\x07\x02\x02\u030C\u030D\x07\x1B\x02\x02" +
        "\u030D\u030E\x07\x04\x02\x02\u030E\xB3\x03\x02\x02\x029\xB7\xB9\xC0\xCD" +
        "\xCF\xD8\xDA\xE3\xEC\xEE\xF4\xF9\xFC\u0103\u0108\u010E\u0114\u0116\u0119" +
        "\u011D\u0124\u0132\u0174\u0179\u017C\u0183\u0188\u01A1\u01A8\u01AC\u01B3" +
        "\u01BA\u01BF\u01D9\u01DC\u01E5\u01E9\u01FC\u0200\u0213\u0218\u0231\u0237" +
        "\u025E\u0262\u0279\u0284\u028E\u02A1\u02B4\u02C6\u02CD\u02E1\u02E8\u02F8";
    tnsnamesParser._serializedATN = Utils.join([
        tnsnamesParser._serializedATNSegment0,
        tnsnamesParser._serializedATNSegment1,
    ], "");
    return tnsnamesParser;
}(Parser_1.Parser));
exports.tnsnamesParser = tnsnamesParser;
var TnsnamesContext = /** @class */ (function (_super) {
    __extends(TnsnamesContext, _super);
    function TnsnamesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TnsnamesContext.prototype.tns_entry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Tns_entryContext);
        }
        else {
            return this.getRuleContext(i, Tns_entryContext);
        }
    };
    TnsnamesContext.prototype.ifile = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IfileContext);
        }
        else {
            return this.getRuleContext(i, IfileContext);
        }
    };
    TnsnamesContext.prototype.lsnr_entry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Lsnr_entryContext);
        }
        else {
            return this.getRuleContext(i, Lsnr_entryContext);
        }
    };
    Object.defineProperty(TnsnamesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_tnsnames; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TnsnamesContext.prototype.enterRule = function (listener) {
        if (listener.enterTnsnames) {
            listener.enterTnsnames(this);
        }
    };
    // @Override
    TnsnamesContext.prototype.exitRule = function (listener) {
        if (listener.exitTnsnames) {
            listener.exitTnsnames(this);
        }
    };
    // @Override
    TnsnamesContext.prototype.accept = function (visitor) {
        if (visitor.visitTnsnames) {
            return visitor.visitTnsnames(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TnsnamesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TnsnamesContext = TnsnamesContext;
var Tns_entryContext = /** @class */ (function (_super) {
    __extends(Tns_entryContext, _super);
    function Tns_entryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tns_entryContext.prototype.alias_list = function () {
        return this.getRuleContext(0, Alias_listContext);
    };
    Tns_entryContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Tns_entryContext.prototype.description_list = function () {
        return this.tryGetRuleContext(0, Description_listContext);
    };
    Tns_entryContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    Object.defineProperty(Tns_entryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_tns_entry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tns_entryContext.prototype.enterRule = function (listener) {
        if (listener.enterTns_entry) {
            listener.enterTns_entry(this);
        }
    };
    // @Override
    Tns_entryContext.prototype.exitRule = function (listener) {
        if (listener.exitTns_entry) {
            listener.exitTns_entry(this);
        }
    };
    // @Override
    Tns_entryContext.prototype.accept = function (visitor) {
        if (visitor.visitTns_entry) {
            return visitor.visitTns_entry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tns_entryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tns_entryContext = Tns_entryContext;
var IfileContext = /** @class */ (function (_super) {
    __extends(IfileContext, _super);
    function IfileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfileContext.prototype.IFILE = function () { return this.getToken(tnsnamesParser.IFILE, 0); };
    IfileContext.prototype.I_EQUAL = function () { return this.getToken(tnsnamesParser.I_EQUAL, 0); };
    IfileContext.prototype.I_STRING = function () { return this.getToken(tnsnamesParser.I_STRING, 0); };
    Object.defineProperty(IfileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ifile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfileContext.prototype.enterRule = function (listener) {
        if (listener.enterIfile) {
            listener.enterIfile(this);
        }
    };
    // @Override
    IfileContext.prototype.exitRule = function (listener) {
        if (listener.exitIfile) {
            listener.exitIfile(this);
        }
    };
    // @Override
    IfileContext.prototype.accept = function (visitor) {
        if (visitor.visitIfile) {
            return visitor.visitIfile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfileContext = IfileContext;
var Lsnr_entryContext = /** @class */ (function (_super) {
    __extends(Lsnr_entryContext, _super);
    function Lsnr_entryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lsnr_entryContext.prototype.alias = function () {
        return this.getRuleContext(0, AliasContext);
    };
    Lsnr_entryContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Lsnr_entryContext.prototype.lsnr_description = function () {
        return this.tryGetRuleContext(0, Lsnr_descriptionContext);
    };
    Lsnr_entryContext.prototype.address_list = function () {
        return this.tryGetRuleContext(0, Address_listContext);
    };
    Lsnr_entryContext.prototype.address = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddressContext);
        }
        else {
            return this.getRuleContext(i, AddressContext);
        }
    };
    Object.defineProperty(Lsnr_entryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_lsnr_entry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lsnr_entryContext.prototype.enterRule = function (listener) {
        if (listener.enterLsnr_entry) {
            listener.enterLsnr_entry(this);
        }
    };
    // @Override
    Lsnr_entryContext.prototype.exitRule = function (listener) {
        if (listener.exitLsnr_entry) {
            listener.exitLsnr_entry(this);
        }
    };
    // @Override
    Lsnr_entryContext.prototype.accept = function (visitor) {
        if (visitor.visitLsnr_entry) {
            return visitor.visitLsnr_entry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lsnr_entryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lsnr_entryContext = Lsnr_entryContext;
var Lsnr_descriptionContext = /** @class */ (function (_super) {
    __extends(Lsnr_descriptionContext, _super);
    function Lsnr_descriptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Lsnr_descriptionContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Lsnr_descriptionContext.prototype.DESCRIPTION = function () { return this.getToken(tnsnamesParser.DESCRIPTION, 0); };
    Lsnr_descriptionContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Lsnr_descriptionContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Lsnr_descriptionContext.prototype.address_list = function () {
        return this.tryGetRuleContext(0, Address_listContext);
    };
    Lsnr_descriptionContext.prototype.address = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddressContext);
        }
        else {
            return this.getRuleContext(i, AddressContext);
        }
    };
    Object.defineProperty(Lsnr_descriptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_lsnr_description; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Lsnr_descriptionContext.prototype.enterRule = function (listener) {
        if (listener.enterLsnr_description) {
            listener.enterLsnr_description(this);
        }
    };
    // @Override
    Lsnr_descriptionContext.prototype.exitRule = function (listener) {
        if (listener.exitLsnr_description) {
            listener.exitLsnr_description(this);
        }
    };
    // @Override
    Lsnr_descriptionContext.prototype.accept = function (visitor) {
        if (visitor.visitLsnr_description) {
            return visitor.visitLsnr_description(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Lsnr_descriptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Lsnr_descriptionContext = Lsnr_descriptionContext;
var Alias_listContext = /** @class */ (function (_super) {
    __extends(Alias_listContext, _super);
    function Alias_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Alias_listContext.prototype.alias = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AliasContext);
        }
        else {
            return this.getRuleContext(i, AliasContext);
        }
    };
    Alias_listContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.COMMA);
        }
        else {
            return this.getToken(tnsnamesParser.COMMA, i);
        }
    };
    Object.defineProperty(Alias_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_alias_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Alias_listContext.prototype.enterRule = function (listener) {
        if (listener.enterAlias_list) {
            listener.enterAlias_list(this);
        }
    };
    // @Override
    Alias_listContext.prototype.exitRule = function (listener) {
        if (listener.exitAlias_list) {
            listener.exitAlias_list(this);
        }
    };
    // @Override
    Alias_listContext.prototype.accept = function (visitor) {
        if (visitor.visitAlias_list) {
            return visitor.visitAlias_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Alias_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Alias_listContext = Alias_listContext;
var AliasContext = /** @class */ (function (_super) {
    __extends(AliasContext, _super);
    function AliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AliasContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.ID);
        }
        else {
            return this.getToken(tnsnamesParser.ID, i);
        }
    };
    AliasContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.DOT);
        }
        else {
            return this.getToken(tnsnamesParser.DOT, i);
        }
    };
    Object.defineProperty(AliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_alias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AliasContext.prototype.enterRule = function (listener) {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    };
    // @Override
    AliasContext.prototype.exitRule = function (listener) {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    };
    // @Override
    AliasContext.prototype.accept = function (visitor) {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AliasContext = AliasContext;
var Description_listContext = /** @class */ (function (_super) {
    __extends(Description_listContext, _super);
    function Description_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Description_listContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Description_listContext.prototype.DESCRIPTION_LIST = function () { return this.getToken(tnsnamesParser.DESCRIPTION_LIST, 0); };
    Description_listContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Description_listContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Description_listContext.prototype.dl_params = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Dl_paramsContext);
        }
        else {
            return this.getRuleContext(i, Dl_paramsContext);
        }
    };
    Description_listContext.prototype.description = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionContext);
        }
        else {
            return this.getRuleContext(i, DescriptionContext);
        }
    };
    Object.defineProperty(Description_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_description_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Description_listContext.prototype.enterRule = function (listener) {
        if (listener.enterDescription_list) {
            listener.enterDescription_list(this);
        }
    };
    // @Override
    Description_listContext.prototype.exitRule = function (listener) {
        if (listener.exitDescription_list) {
            listener.exitDescription_list(this);
        }
    };
    // @Override
    Description_listContext.prototype.accept = function (visitor) {
        if (visitor.visitDescription_list) {
            return visitor.visitDescription_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Description_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Description_listContext = Description_listContext;
var Dl_paramsContext = /** @class */ (function (_super) {
    __extends(Dl_paramsContext, _super);
    function Dl_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dl_paramsContext.prototype.dl_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Dl_parameterContext);
        }
        else {
            return this.getRuleContext(i, Dl_parameterContext);
        }
    };
    Object.defineProperty(Dl_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_dl_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dl_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterDl_params) {
            listener.enterDl_params(this);
        }
    };
    // @Override
    Dl_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitDl_params) {
            listener.exitDl_params(this);
        }
    };
    // @Override
    Dl_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitDl_params) {
            return visitor.visitDl_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dl_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dl_paramsContext = Dl_paramsContext;
var Dl_parameterContext = /** @class */ (function (_super) {
    __extends(Dl_parameterContext, _super);
    function Dl_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dl_parameterContext.prototype.al_failover = function () {
        return this.tryGetRuleContext(0, Al_failoverContext);
    };
    Dl_parameterContext.prototype.al_load_balance = function () {
        return this.tryGetRuleContext(0, Al_load_balanceContext);
    };
    Dl_parameterContext.prototype.al_source_route = function () {
        return this.tryGetRuleContext(0, Al_source_routeContext);
    };
    Object.defineProperty(Dl_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_dl_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dl_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterDl_parameter) {
            listener.enterDl_parameter(this);
        }
    };
    // @Override
    Dl_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitDl_parameter) {
            listener.exitDl_parameter(this);
        }
    };
    // @Override
    Dl_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitDl_parameter) {
            return visitor.visitDl_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dl_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dl_parameterContext = Dl_parameterContext;
var DescriptionContext = /** @class */ (function (_super) {
    __extends(DescriptionContext, _super);
    function DescriptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    DescriptionContext.prototype.DESCRIPTION = function () { return this.getToken(tnsnamesParser.DESCRIPTION, 0); };
    DescriptionContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    DescriptionContext.prototype.connect_data = function () {
        return this.getRuleContext(0, Connect_dataContext);
    };
    DescriptionContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    DescriptionContext.prototype.address_list = function () {
        return this.tryGetRuleContext(0, Address_listContext);
    };
    DescriptionContext.prototype.d_params = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(D_paramsContext);
        }
        else {
            return this.getRuleContext(i, D_paramsContext);
        }
    };
    DescriptionContext.prototype.address = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddressContext);
        }
        else {
            return this.getRuleContext(i, AddressContext);
        }
    };
    Object.defineProperty(DescriptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_description; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionContext.prototype.enterRule = function (listener) {
        if (listener.enterDescription) {
            listener.enterDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.exitRule = function (listener) {
        if (listener.exitDescription) {
            listener.exitDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.accept = function (visitor) {
        if (visitor.visitDescription) {
            return visitor.visitDescription(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionContext = DescriptionContext;
var D_paramsContext = /** @class */ (function (_super) {
    __extends(D_paramsContext, _super);
    function D_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_paramsContext.prototype.d_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(D_parameterContext);
        }
        else {
            return this.getRuleContext(i, D_parameterContext);
        }
    };
    Object.defineProperty(D_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterD_params) {
            listener.enterD_params(this);
        }
    };
    // @Override
    D_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitD_params) {
            listener.exitD_params(this);
        }
    };
    // @Override
    D_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitD_params) {
            return visitor.visitD_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_paramsContext = D_paramsContext;
var D_parameterContext = /** @class */ (function (_super) {
    __extends(D_parameterContext, _super);
    function D_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_parameterContext.prototype.d_enable = function () {
        return this.tryGetRuleContext(0, D_enableContext);
    };
    D_parameterContext.prototype.al_failover = function () {
        return this.tryGetRuleContext(0, Al_failoverContext);
    };
    D_parameterContext.prototype.al_load_balance = function () {
        return this.tryGetRuleContext(0, Al_load_balanceContext);
    };
    D_parameterContext.prototype.d_sdu = function () {
        return this.tryGetRuleContext(0, D_sduContext);
    };
    D_parameterContext.prototype.d_recv_buf = function () {
        return this.tryGetRuleContext(0, D_recv_bufContext);
    };
    D_parameterContext.prototype.d_send_buf = function () {
        return this.tryGetRuleContext(0, D_send_bufContext);
    };
    D_parameterContext.prototype.al_source_route = function () {
        return this.tryGetRuleContext(0, Al_source_routeContext);
    };
    D_parameterContext.prototype.d_service_type = function () {
        return this.tryGetRuleContext(0, D_service_typeContext);
    };
    D_parameterContext.prototype.d_security = function () {
        return this.tryGetRuleContext(0, D_securityContext);
    };
    D_parameterContext.prototype.d_conn_timeout = function () {
        return this.tryGetRuleContext(0, D_conn_timeoutContext);
    };
    D_parameterContext.prototype.d_retry_count = function () {
        return this.tryGetRuleContext(0, D_retry_countContext);
    };
    D_parameterContext.prototype.d_tct = function () {
        return this.tryGetRuleContext(0, D_tctContext);
    };
    Object.defineProperty(D_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterD_parameter) {
            listener.enterD_parameter(this);
        }
    };
    // @Override
    D_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitD_parameter) {
            listener.exitD_parameter(this);
        }
    };
    // @Override
    D_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitD_parameter) {
            return visitor.visitD_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_parameterContext = D_parameterContext;
var D_enableContext = /** @class */ (function (_super) {
    __extends(D_enableContext, _super);
    function D_enableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_enableContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_enableContext.prototype.ENABLE = function () { return this.getToken(tnsnamesParser.ENABLE, 0); };
    D_enableContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_enableContext.prototype.BROKEN = function () { return this.getToken(tnsnamesParser.BROKEN, 0); };
    D_enableContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_enableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_enable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_enableContext.prototype.enterRule = function (listener) {
        if (listener.enterD_enable) {
            listener.enterD_enable(this);
        }
    };
    // @Override
    D_enableContext.prototype.exitRule = function (listener) {
        if (listener.exitD_enable) {
            listener.exitD_enable(this);
        }
    };
    // @Override
    D_enableContext.prototype.accept = function (visitor) {
        if (visitor.visitD_enable) {
            return visitor.visitD_enable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_enableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_enableContext = D_enableContext;
var D_sduContext = /** @class */ (function (_super) {
    __extends(D_sduContext, _super);
    function D_sduContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_sduContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_sduContext.prototype.SDU = function () { return this.getToken(tnsnamesParser.SDU, 0); };
    D_sduContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_sduContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    D_sduContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_sduContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_sdu; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_sduContext.prototype.enterRule = function (listener) {
        if (listener.enterD_sdu) {
            listener.enterD_sdu(this);
        }
    };
    // @Override
    D_sduContext.prototype.exitRule = function (listener) {
        if (listener.exitD_sdu) {
            listener.exitD_sdu(this);
        }
    };
    // @Override
    D_sduContext.prototype.accept = function (visitor) {
        if (visitor.visitD_sdu) {
            return visitor.visitD_sdu(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_sduContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_sduContext = D_sduContext;
var D_recv_bufContext = /** @class */ (function (_super) {
    __extends(D_recv_bufContext, _super);
    function D_recv_bufContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_recv_bufContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_recv_bufContext.prototype.RECV_BUF = function () { return this.getToken(tnsnamesParser.RECV_BUF, 0); };
    D_recv_bufContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_recv_bufContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    D_recv_bufContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_recv_bufContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_recv_buf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_recv_bufContext.prototype.enterRule = function (listener) {
        if (listener.enterD_recv_buf) {
            listener.enterD_recv_buf(this);
        }
    };
    // @Override
    D_recv_bufContext.prototype.exitRule = function (listener) {
        if (listener.exitD_recv_buf) {
            listener.exitD_recv_buf(this);
        }
    };
    // @Override
    D_recv_bufContext.prototype.accept = function (visitor) {
        if (visitor.visitD_recv_buf) {
            return visitor.visitD_recv_buf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_recv_bufContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_recv_bufContext = D_recv_bufContext;
var D_send_bufContext = /** @class */ (function (_super) {
    __extends(D_send_bufContext, _super);
    function D_send_bufContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_send_bufContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_send_bufContext.prototype.SEND_BUF = function () { return this.getToken(tnsnamesParser.SEND_BUF, 0); };
    D_send_bufContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_send_bufContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    D_send_bufContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_send_bufContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_send_buf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_send_bufContext.prototype.enterRule = function (listener) {
        if (listener.enterD_send_buf) {
            listener.enterD_send_buf(this);
        }
    };
    // @Override
    D_send_bufContext.prototype.exitRule = function (listener) {
        if (listener.exitD_send_buf) {
            listener.exitD_send_buf(this);
        }
    };
    // @Override
    D_send_bufContext.prototype.accept = function (visitor) {
        if (visitor.visitD_send_buf) {
            return visitor.visitD_send_buf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_send_bufContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_send_bufContext = D_send_bufContext;
var D_service_typeContext = /** @class */ (function (_super) {
    __extends(D_service_typeContext, _super);
    function D_service_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_service_typeContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_service_typeContext.prototype.SERVICE_TYPE = function () { return this.getToken(tnsnamesParser.SERVICE_TYPE, 0); };
    D_service_typeContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_service_typeContext.prototype.ID = function () { return this.getToken(tnsnamesParser.ID, 0); };
    D_service_typeContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_service_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_service_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_service_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterD_service_type) {
            listener.enterD_service_type(this);
        }
    };
    // @Override
    D_service_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitD_service_type) {
            listener.exitD_service_type(this);
        }
    };
    // @Override
    D_service_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitD_service_type) {
            return visitor.visitD_service_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_service_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_service_typeContext = D_service_typeContext;
var D_securityContext = /** @class */ (function (_super) {
    __extends(D_securityContext, _super);
    function D_securityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_securityContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_securityContext.prototype.SECURITY = function () { return this.getToken(tnsnamesParser.SECURITY, 0); };
    D_securityContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_securityContext.prototype.ds_parameter = function () {
        return this.getRuleContext(0, Ds_parameterContext);
    };
    D_securityContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_securityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_security; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_securityContext.prototype.enterRule = function (listener) {
        if (listener.enterD_security) {
            listener.enterD_security(this);
        }
    };
    // @Override
    D_securityContext.prototype.exitRule = function (listener) {
        if (listener.exitD_security) {
            listener.exitD_security(this);
        }
    };
    // @Override
    D_securityContext.prototype.accept = function (visitor) {
        if (visitor.visitD_security) {
            return visitor.visitD_security(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_securityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_securityContext = D_securityContext;
var D_conn_timeoutContext = /** @class */ (function (_super) {
    __extends(D_conn_timeoutContext, _super);
    function D_conn_timeoutContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_conn_timeoutContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_conn_timeoutContext.prototype.CONN_TIMEOUT = function () { return this.getToken(tnsnamesParser.CONN_TIMEOUT, 0); };
    D_conn_timeoutContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_conn_timeoutContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    D_conn_timeoutContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_conn_timeoutContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_conn_timeout; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_conn_timeoutContext.prototype.enterRule = function (listener) {
        if (listener.enterD_conn_timeout) {
            listener.enterD_conn_timeout(this);
        }
    };
    // @Override
    D_conn_timeoutContext.prototype.exitRule = function (listener) {
        if (listener.exitD_conn_timeout) {
            listener.exitD_conn_timeout(this);
        }
    };
    // @Override
    D_conn_timeoutContext.prototype.accept = function (visitor) {
        if (visitor.visitD_conn_timeout) {
            return visitor.visitD_conn_timeout(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_conn_timeoutContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_conn_timeoutContext = D_conn_timeoutContext;
var D_retry_countContext = /** @class */ (function (_super) {
    __extends(D_retry_countContext, _super);
    function D_retry_countContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_retry_countContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_retry_countContext.prototype.RETRY_COUNT = function () { return this.getToken(tnsnamesParser.RETRY_COUNT, 0); };
    D_retry_countContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_retry_countContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    D_retry_countContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_retry_countContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_retry_count; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_retry_countContext.prototype.enterRule = function (listener) {
        if (listener.enterD_retry_count) {
            listener.enterD_retry_count(this);
        }
    };
    // @Override
    D_retry_countContext.prototype.exitRule = function (listener) {
        if (listener.exitD_retry_count) {
            listener.exitD_retry_count(this);
        }
    };
    // @Override
    D_retry_countContext.prototype.accept = function (visitor) {
        if (visitor.visitD_retry_count) {
            return visitor.visitD_retry_count(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_retry_countContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_retry_countContext = D_retry_countContext;
var D_tctContext = /** @class */ (function (_super) {
    __extends(D_tctContext, _super);
    function D_tctContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    D_tctContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    D_tctContext.prototype.TCT = function () { return this.getToken(tnsnamesParser.TCT, 0); };
    D_tctContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    D_tctContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    D_tctContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(D_tctContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_d_tct; },
        enumerable: true,
        configurable: true
    });
    // @Override
    D_tctContext.prototype.enterRule = function (listener) {
        if (listener.enterD_tct) {
            listener.enterD_tct(this);
        }
    };
    // @Override
    D_tctContext.prototype.exitRule = function (listener) {
        if (listener.exitD_tct) {
            listener.exitD_tct(this);
        }
    };
    // @Override
    D_tctContext.prototype.accept = function (visitor) {
        if (visitor.visitD_tct) {
            return visitor.visitD_tct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return D_tctContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.D_tctContext = D_tctContext;
var Ds_parameterContext = /** @class */ (function (_super) {
    __extends(Ds_parameterContext, _super);
    function Ds_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ds_parameterContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Ds_parameterContext.prototype.SSL_CERT = function () { return this.getToken(tnsnamesParser.SSL_CERT, 0); };
    Ds_parameterContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Ds_parameterContext.prototype.DQ_STRING = function () { return this.getToken(tnsnamesParser.DQ_STRING, 0); };
    Ds_parameterContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Ds_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ds_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ds_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterDs_parameter) {
            listener.enterDs_parameter(this);
        }
    };
    // @Override
    Ds_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitDs_parameter) {
            listener.exitDs_parameter(this);
        }
    };
    // @Override
    Ds_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitDs_parameter) {
            return visitor.visitDs_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ds_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ds_parameterContext = Ds_parameterContext;
var Address_listContext = /** @class */ (function (_super) {
    __extends(Address_listContext, _super);
    function Address_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Address_listContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Address_listContext.prototype.ADDRESS_LIST = function () { return this.getToken(tnsnamesParser.ADDRESS_LIST, 0); };
    Address_listContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Address_listContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Address_listContext.prototype.al_params = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Al_paramsContext);
        }
        else {
            return this.getRuleContext(i, Al_paramsContext);
        }
    };
    Address_listContext.prototype.address = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddressContext);
        }
        else {
            return this.getRuleContext(i, AddressContext);
        }
    };
    Object.defineProperty(Address_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_address_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Address_listContext.prototype.enterRule = function (listener) {
        if (listener.enterAddress_list) {
            listener.enterAddress_list(this);
        }
    };
    // @Override
    Address_listContext.prototype.exitRule = function (listener) {
        if (listener.exitAddress_list) {
            listener.exitAddress_list(this);
        }
    };
    // @Override
    Address_listContext.prototype.accept = function (visitor) {
        if (visitor.visitAddress_list) {
            return visitor.visitAddress_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Address_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Address_listContext = Address_listContext;
var Al_paramsContext = /** @class */ (function (_super) {
    __extends(Al_paramsContext, _super);
    function Al_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Al_paramsContext.prototype.al_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Al_parameterContext);
        }
        else {
            return this.getRuleContext(i, Al_parameterContext);
        }
    };
    Object.defineProperty(Al_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_al_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Al_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterAl_params) {
            listener.enterAl_params(this);
        }
    };
    // @Override
    Al_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitAl_params) {
            listener.exitAl_params(this);
        }
    };
    // @Override
    Al_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitAl_params) {
            return visitor.visitAl_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Al_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Al_paramsContext = Al_paramsContext;
var Al_parameterContext = /** @class */ (function (_super) {
    __extends(Al_parameterContext, _super);
    function Al_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Al_parameterContext.prototype.al_failover = function () {
        return this.tryGetRuleContext(0, Al_failoverContext);
    };
    Al_parameterContext.prototype.al_load_balance = function () {
        return this.tryGetRuleContext(0, Al_load_balanceContext);
    };
    Al_parameterContext.prototype.al_source_route = function () {
        return this.tryGetRuleContext(0, Al_source_routeContext);
    };
    Object.defineProperty(Al_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_al_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Al_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterAl_parameter) {
            listener.enterAl_parameter(this);
        }
    };
    // @Override
    Al_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitAl_parameter) {
            listener.exitAl_parameter(this);
        }
    };
    // @Override
    Al_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitAl_parameter) {
            return visitor.visitAl_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Al_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Al_parameterContext = Al_parameterContext;
var Al_failoverContext = /** @class */ (function (_super) {
    __extends(Al_failoverContext, _super);
    function Al_failoverContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Al_failoverContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Al_failoverContext.prototype.FAILOVER = function () { return this.getToken(tnsnamesParser.FAILOVER, 0); };
    Al_failoverContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Al_failoverContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Al_failoverContext.prototype.YES_NO = function () { return this.tryGetToken(tnsnamesParser.YES_NO, 0); };
    Al_failoverContext.prototype.ON_OFF = function () { return this.tryGetToken(tnsnamesParser.ON_OFF, 0); };
    Al_failoverContext.prototype.TRUE_FALSE = function () { return this.tryGetToken(tnsnamesParser.TRUE_FALSE, 0); };
    Object.defineProperty(Al_failoverContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_al_failover; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Al_failoverContext.prototype.enterRule = function (listener) {
        if (listener.enterAl_failover) {
            listener.enterAl_failover(this);
        }
    };
    // @Override
    Al_failoverContext.prototype.exitRule = function (listener) {
        if (listener.exitAl_failover) {
            listener.exitAl_failover(this);
        }
    };
    // @Override
    Al_failoverContext.prototype.accept = function (visitor) {
        if (visitor.visitAl_failover) {
            return visitor.visitAl_failover(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Al_failoverContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Al_failoverContext = Al_failoverContext;
var Al_load_balanceContext = /** @class */ (function (_super) {
    __extends(Al_load_balanceContext, _super);
    function Al_load_balanceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Al_load_balanceContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Al_load_balanceContext.prototype.LOAD_BALANCE = function () { return this.getToken(tnsnamesParser.LOAD_BALANCE, 0); };
    Al_load_balanceContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Al_load_balanceContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Al_load_balanceContext.prototype.YES_NO = function () { return this.tryGetToken(tnsnamesParser.YES_NO, 0); };
    Al_load_balanceContext.prototype.ON_OFF = function () { return this.tryGetToken(tnsnamesParser.ON_OFF, 0); };
    Al_load_balanceContext.prototype.TRUE_FALSE = function () { return this.tryGetToken(tnsnamesParser.TRUE_FALSE, 0); };
    Object.defineProperty(Al_load_balanceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_al_load_balance; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Al_load_balanceContext.prototype.enterRule = function (listener) {
        if (listener.enterAl_load_balance) {
            listener.enterAl_load_balance(this);
        }
    };
    // @Override
    Al_load_balanceContext.prototype.exitRule = function (listener) {
        if (listener.exitAl_load_balance) {
            listener.exitAl_load_balance(this);
        }
    };
    // @Override
    Al_load_balanceContext.prototype.accept = function (visitor) {
        if (visitor.visitAl_load_balance) {
            return visitor.visitAl_load_balance(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Al_load_balanceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Al_load_balanceContext = Al_load_balanceContext;
var Al_source_routeContext = /** @class */ (function (_super) {
    __extends(Al_source_routeContext, _super);
    function Al_source_routeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Al_source_routeContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Al_source_routeContext.prototype.SOURCE_ROUTE = function () { return this.getToken(tnsnamesParser.SOURCE_ROUTE, 0); };
    Al_source_routeContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Al_source_routeContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Al_source_routeContext.prototype.YES_NO = function () { return this.tryGetToken(tnsnamesParser.YES_NO, 0); };
    Al_source_routeContext.prototype.ON_OFF = function () { return this.tryGetToken(tnsnamesParser.ON_OFF, 0); };
    Object.defineProperty(Al_source_routeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_al_source_route; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Al_source_routeContext.prototype.enterRule = function (listener) {
        if (listener.enterAl_source_route) {
            listener.enterAl_source_route(this);
        }
    };
    // @Override
    Al_source_routeContext.prototype.exitRule = function (listener) {
        if (listener.exitAl_source_route) {
            listener.exitAl_source_route(this);
        }
    };
    // @Override
    Al_source_routeContext.prototype.accept = function (visitor) {
        if (visitor.visitAl_source_route) {
            return visitor.visitAl_source_route(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Al_source_routeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Al_source_routeContext = Al_source_routeContext;
var AddressContext = /** @class */ (function (_super) {
    __extends(AddressContext, _super);
    function AddressContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddressContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    AddressContext.prototype.ADDRESS = function () { return this.getToken(tnsnamesParser.ADDRESS, 0); };
    AddressContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    AddressContext.prototype.protocol_info = function () {
        return this.getRuleContext(0, Protocol_infoContext);
    };
    AddressContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    AddressContext.prototype.a_params = function () {
        return this.tryGetRuleContext(0, A_paramsContext);
    };
    Object.defineProperty(AddressContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_address; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddressContext.prototype.enterRule = function (listener) {
        if (listener.enterAddress) {
            listener.enterAddress(this);
        }
    };
    // @Override
    AddressContext.prototype.exitRule = function (listener) {
        if (listener.exitAddress) {
            listener.exitAddress(this);
        }
    };
    // @Override
    AddressContext.prototype.accept = function (visitor) {
        if (visitor.visitAddress) {
            return visitor.visitAddress(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddressContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddressContext = AddressContext;
var A_paramsContext = /** @class */ (function (_super) {
    __extends(A_paramsContext, _super);
    function A_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    A_paramsContext.prototype.a_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(A_parameterContext);
        }
        else {
            return this.getRuleContext(i, A_parameterContext);
        }
    };
    Object.defineProperty(A_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_a_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    A_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterA_params) {
            listener.enterA_params(this);
        }
    };
    // @Override
    A_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitA_params) {
            listener.exitA_params(this);
        }
    };
    // @Override
    A_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitA_params) {
            return visitor.visitA_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return A_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.A_paramsContext = A_paramsContext;
var A_parameterContext = /** @class */ (function (_super) {
    __extends(A_parameterContext, _super);
    function A_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    A_parameterContext.prototype.d_send_buf = function () {
        return this.tryGetRuleContext(0, D_send_bufContext);
    };
    A_parameterContext.prototype.d_recv_buf = function () {
        return this.tryGetRuleContext(0, D_recv_bufContext);
    };
    Object.defineProperty(A_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_a_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    A_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterA_parameter) {
            listener.enterA_parameter(this);
        }
    };
    // @Override
    A_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitA_parameter) {
            listener.exitA_parameter(this);
        }
    };
    // @Override
    A_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitA_parameter) {
            return visitor.visitA_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return A_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.A_parameterContext = A_parameterContext;
var Protocol_infoContext = /** @class */ (function (_super) {
    __extends(Protocol_infoContext, _super);
    function Protocol_infoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Protocol_infoContext.prototype.tcp_protocol = function () {
        return this.tryGetRuleContext(0, Tcp_protocolContext);
    };
    Protocol_infoContext.prototype.ipc_protocol = function () {
        return this.tryGetRuleContext(0, Ipc_protocolContext);
    };
    Protocol_infoContext.prototype.spx_protocol = function () {
        return this.tryGetRuleContext(0, Spx_protocolContext);
    };
    Protocol_infoContext.prototype.nmp_protocol = function () {
        return this.tryGetRuleContext(0, Nmp_protocolContext);
    };
    Protocol_infoContext.prototype.beq_protocol = function () {
        return this.tryGetRuleContext(0, Beq_protocolContext);
    };
    Object.defineProperty(Protocol_infoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_protocol_info; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Protocol_infoContext.prototype.enterRule = function (listener) {
        if (listener.enterProtocol_info) {
            listener.enterProtocol_info(this);
        }
    };
    // @Override
    Protocol_infoContext.prototype.exitRule = function (listener) {
        if (listener.exitProtocol_info) {
            listener.exitProtocol_info(this);
        }
    };
    // @Override
    Protocol_infoContext.prototype.accept = function (visitor) {
        if (visitor.visitProtocol_info) {
            return visitor.visitProtocol_info(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Protocol_infoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Protocol_infoContext = Protocol_infoContext;
var Tcp_protocolContext = /** @class */ (function (_super) {
    __extends(Tcp_protocolContext, _super);
    function Tcp_protocolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tcp_protocolContext.prototype.tcp_params = function () {
        return this.getRuleContext(0, Tcp_paramsContext);
    };
    Object.defineProperty(Tcp_protocolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_tcp_protocol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tcp_protocolContext.prototype.enterRule = function (listener) {
        if (listener.enterTcp_protocol) {
            listener.enterTcp_protocol(this);
        }
    };
    // @Override
    Tcp_protocolContext.prototype.exitRule = function (listener) {
        if (listener.exitTcp_protocol) {
            listener.exitTcp_protocol(this);
        }
    };
    // @Override
    Tcp_protocolContext.prototype.accept = function (visitor) {
        if (visitor.visitTcp_protocol) {
            return visitor.visitTcp_protocol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tcp_protocolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tcp_protocolContext = Tcp_protocolContext;
var Tcp_paramsContext = /** @class */ (function (_super) {
    __extends(Tcp_paramsContext, _super);
    function Tcp_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tcp_paramsContext.prototype.tcp_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Tcp_parameterContext);
        }
        else {
            return this.getRuleContext(i, Tcp_parameterContext);
        }
    };
    Object.defineProperty(Tcp_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_tcp_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tcp_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterTcp_params) {
            listener.enterTcp_params(this);
        }
    };
    // @Override
    Tcp_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitTcp_params) {
            listener.exitTcp_params(this);
        }
    };
    // @Override
    Tcp_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitTcp_params) {
            return visitor.visitTcp_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tcp_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tcp_paramsContext = Tcp_paramsContext;
var Tcp_parameterContext = /** @class */ (function (_super) {
    __extends(Tcp_parameterContext, _super);
    function Tcp_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tcp_parameterContext.prototype.tcp_host = function () {
        return this.tryGetRuleContext(0, Tcp_hostContext);
    };
    Tcp_parameterContext.prototype.tcp_port = function () {
        return this.tryGetRuleContext(0, Tcp_portContext);
    };
    Tcp_parameterContext.prototype.tcp_tcp = function () {
        return this.tryGetRuleContext(0, Tcp_tcpContext);
    };
    Object.defineProperty(Tcp_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_tcp_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tcp_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterTcp_parameter) {
            listener.enterTcp_parameter(this);
        }
    };
    // @Override
    Tcp_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitTcp_parameter) {
            listener.exitTcp_parameter(this);
        }
    };
    // @Override
    Tcp_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitTcp_parameter) {
            return visitor.visitTcp_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tcp_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tcp_parameterContext = Tcp_parameterContext;
var Tcp_hostContext = /** @class */ (function (_super) {
    __extends(Tcp_hostContext, _super);
    function Tcp_hostContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tcp_hostContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Tcp_hostContext.prototype.HOST = function () { return this.getToken(tnsnamesParser.HOST, 0); };
    Tcp_hostContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Tcp_hostContext.prototype.host = function () {
        return this.getRuleContext(0, HostContext);
    };
    Tcp_hostContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Tcp_hostContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_tcp_host; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tcp_hostContext.prototype.enterRule = function (listener) {
        if (listener.enterTcp_host) {
            listener.enterTcp_host(this);
        }
    };
    // @Override
    Tcp_hostContext.prototype.exitRule = function (listener) {
        if (listener.exitTcp_host) {
            listener.exitTcp_host(this);
        }
    };
    // @Override
    Tcp_hostContext.prototype.accept = function (visitor) {
        if (visitor.visitTcp_host) {
            return visitor.visitTcp_host(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tcp_hostContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tcp_hostContext = Tcp_hostContext;
var Tcp_portContext = /** @class */ (function (_super) {
    __extends(Tcp_portContext, _super);
    function Tcp_portContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tcp_portContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Tcp_portContext.prototype.PORT = function () { return this.getToken(tnsnamesParser.PORT, 0); };
    Tcp_portContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Tcp_portContext.prototype.port = function () {
        return this.getRuleContext(0, PortContext);
    };
    Tcp_portContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Tcp_portContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_tcp_port; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tcp_portContext.prototype.enterRule = function (listener) {
        if (listener.enterTcp_port) {
            listener.enterTcp_port(this);
        }
    };
    // @Override
    Tcp_portContext.prototype.exitRule = function (listener) {
        if (listener.exitTcp_port) {
            listener.exitTcp_port(this);
        }
    };
    // @Override
    Tcp_portContext.prototype.accept = function (visitor) {
        if (visitor.visitTcp_port) {
            return visitor.visitTcp_port(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tcp_portContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tcp_portContext = Tcp_portContext;
var Tcp_tcpContext = /** @class */ (function (_super) {
    __extends(Tcp_tcpContext, _super);
    function Tcp_tcpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tcp_tcpContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Tcp_tcpContext.prototype.PROTOCOL = function () { return this.getToken(tnsnamesParser.PROTOCOL, 0); };
    Tcp_tcpContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Tcp_tcpContext.prototype.TCP = function () { return this.getToken(tnsnamesParser.TCP, 0); };
    Tcp_tcpContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Tcp_tcpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_tcp_tcp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tcp_tcpContext.prototype.enterRule = function (listener) {
        if (listener.enterTcp_tcp) {
            listener.enterTcp_tcp(this);
        }
    };
    // @Override
    Tcp_tcpContext.prototype.exitRule = function (listener) {
        if (listener.exitTcp_tcp) {
            listener.exitTcp_tcp(this);
        }
    };
    // @Override
    Tcp_tcpContext.prototype.accept = function (visitor) {
        if (visitor.visitTcp_tcp) {
            return visitor.visitTcp_tcp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tcp_tcpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tcp_tcpContext = Tcp_tcpContext;
var HostContext = /** @class */ (function (_super) {
    __extends(HostContext, _super);
    function HostContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HostContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.ID);
        }
        else {
            return this.getToken(tnsnamesParser.ID, i);
        }
    };
    HostContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.DOT);
        }
        else {
            return this.getToken(tnsnamesParser.DOT, i);
        }
    };
    HostContext.prototype.IP = function () { return this.tryGetToken(tnsnamesParser.IP, 0); };
    Object.defineProperty(HostContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_host; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HostContext.prototype.enterRule = function (listener) {
        if (listener.enterHost) {
            listener.enterHost(this);
        }
    };
    // @Override
    HostContext.prototype.exitRule = function (listener) {
        if (listener.exitHost) {
            listener.exitHost(this);
        }
    };
    // @Override
    HostContext.prototype.accept = function (visitor) {
        if (visitor.visitHost) {
            return visitor.visitHost(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HostContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HostContext = HostContext;
var PortContext = /** @class */ (function (_super) {
    __extends(PortContext, _super);
    function PortContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PortContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    Object.defineProperty(PortContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_port; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PortContext.prototype.enterRule = function (listener) {
        if (listener.enterPort) {
            listener.enterPort(this);
        }
    };
    // @Override
    PortContext.prototype.exitRule = function (listener) {
        if (listener.exitPort) {
            listener.exitPort(this);
        }
    };
    // @Override
    PortContext.prototype.accept = function (visitor) {
        if (visitor.visitPort) {
            return visitor.visitPort(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PortContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PortContext = PortContext;
var Ipc_protocolContext = /** @class */ (function (_super) {
    __extends(Ipc_protocolContext, _super);
    function Ipc_protocolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipc_protocolContext.prototype.ipc_params = function () {
        return this.getRuleContext(0, Ipc_paramsContext);
    };
    Object.defineProperty(Ipc_protocolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ipc_protocol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipc_protocolContext.prototype.enterRule = function (listener) {
        if (listener.enterIpc_protocol) {
            listener.enterIpc_protocol(this);
        }
    };
    // @Override
    Ipc_protocolContext.prototype.exitRule = function (listener) {
        if (listener.exitIpc_protocol) {
            listener.exitIpc_protocol(this);
        }
    };
    // @Override
    Ipc_protocolContext.prototype.accept = function (visitor) {
        if (visitor.visitIpc_protocol) {
            return visitor.visitIpc_protocol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipc_protocolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipc_protocolContext = Ipc_protocolContext;
var Ipc_paramsContext = /** @class */ (function (_super) {
    __extends(Ipc_paramsContext, _super);
    function Ipc_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipc_paramsContext.prototype.ipc_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Ipc_parameterContext);
        }
        else {
            return this.getRuleContext(i, Ipc_parameterContext);
        }
    };
    Object.defineProperty(Ipc_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ipc_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipc_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterIpc_params) {
            listener.enterIpc_params(this);
        }
    };
    // @Override
    Ipc_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitIpc_params) {
            listener.exitIpc_params(this);
        }
    };
    // @Override
    Ipc_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitIpc_params) {
            return visitor.visitIpc_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipc_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipc_paramsContext = Ipc_paramsContext;
var Ipc_parameterContext = /** @class */ (function (_super) {
    __extends(Ipc_parameterContext, _super);
    function Ipc_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipc_parameterContext.prototype.ipc_ipc = function () {
        return this.tryGetRuleContext(0, Ipc_ipcContext);
    };
    Ipc_parameterContext.prototype.ipc_key = function () {
        return this.tryGetRuleContext(0, Ipc_keyContext);
    };
    Object.defineProperty(Ipc_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ipc_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipc_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterIpc_parameter) {
            listener.enterIpc_parameter(this);
        }
    };
    // @Override
    Ipc_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitIpc_parameter) {
            listener.exitIpc_parameter(this);
        }
    };
    // @Override
    Ipc_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitIpc_parameter) {
            return visitor.visitIpc_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipc_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipc_parameterContext = Ipc_parameterContext;
var Ipc_ipcContext = /** @class */ (function (_super) {
    __extends(Ipc_ipcContext, _super);
    function Ipc_ipcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipc_ipcContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Ipc_ipcContext.prototype.PROTOCOL = function () { return this.getToken(tnsnamesParser.PROTOCOL, 0); };
    Ipc_ipcContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Ipc_ipcContext.prototype.IPC = function () { return this.getToken(tnsnamesParser.IPC, 0); };
    Ipc_ipcContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Ipc_ipcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ipc_ipc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipc_ipcContext.prototype.enterRule = function (listener) {
        if (listener.enterIpc_ipc) {
            listener.enterIpc_ipc(this);
        }
    };
    // @Override
    Ipc_ipcContext.prototype.exitRule = function (listener) {
        if (listener.exitIpc_ipc) {
            listener.exitIpc_ipc(this);
        }
    };
    // @Override
    Ipc_ipcContext.prototype.accept = function (visitor) {
        if (visitor.visitIpc_ipc) {
            return visitor.visitIpc_ipc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipc_ipcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipc_ipcContext = Ipc_ipcContext;
var Ipc_keyContext = /** @class */ (function (_super) {
    __extends(Ipc_keyContext, _super);
    function Ipc_keyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipc_keyContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Ipc_keyContext.prototype.KEY = function () { return this.getToken(tnsnamesParser.KEY, 0); };
    Ipc_keyContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Ipc_keyContext.prototype.ID = function () { return this.getToken(tnsnamesParser.ID, 0); };
    Ipc_keyContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Ipc_keyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ipc_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipc_keyContext.prototype.enterRule = function (listener) {
        if (listener.enterIpc_key) {
            listener.enterIpc_key(this);
        }
    };
    // @Override
    Ipc_keyContext.prototype.exitRule = function (listener) {
        if (listener.exitIpc_key) {
            listener.exitIpc_key(this);
        }
    };
    // @Override
    Ipc_keyContext.prototype.accept = function (visitor) {
        if (visitor.visitIpc_key) {
            return visitor.visitIpc_key(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipc_keyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipc_keyContext = Ipc_keyContext;
var Spx_protocolContext = /** @class */ (function (_super) {
    __extends(Spx_protocolContext, _super);
    function Spx_protocolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Spx_protocolContext.prototype.spx_params = function () {
        return this.getRuleContext(0, Spx_paramsContext);
    };
    Object.defineProperty(Spx_protocolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_spx_protocol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Spx_protocolContext.prototype.enterRule = function (listener) {
        if (listener.enterSpx_protocol) {
            listener.enterSpx_protocol(this);
        }
    };
    // @Override
    Spx_protocolContext.prototype.exitRule = function (listener) {
        if (listener.exitSpx_protocol) {
            listener.exitSpx_protocol(this);
        }
    };
    // @Override
    Spx_protocolContext.prototype.accept = function (visitor) {
        if (visitor.visitSpx_protocol) {
            return visitor.visitSpx_protocol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Spx_protocolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Spx_protocolContext = Spx_protocolContext;
var Spx_paramsContext = /** @class */ (function (_super) {
    __extends(Spx_paramsContext, _super);
    function Spx_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Spx_paramsContext.prototype.spx_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Spx_parameterContext);
        }
        else {
            return this.getRuleContext(i, Spx_parameterContext);
        }
    };
    Object.defineProperty(Spx_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_spx_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Spx_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterSpx_params) {
            listener.enterSpx_params(this);
        }
    };
    // @Override
    Spx_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitSpx_params) {
            listener.exitSpx_params(this);
        }
    };
    // @Override
    Spx_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitSpx_params) {
            return visitor.visitSpx_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Spx_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Spx_paramsContext = Spx_paramsContext;
var Spx_parameterContext = /** @class */ (function (_super) {
    __extends(Spx_parameterContext, _super);
    function Spx_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Spx_parameterContext.prototype.spx_spx = function () {
        return this.tryGetRuleContext(0, Spx_spxContext);
    };
    Spx_parameterContext.prototype.spx_service = function () {
        return this.tryGetRuleContext(0, Spx_serviceContext);
    };
    Object.defineProperty(Spx_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_spx_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Spx_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterSpx_parameter) {
            listener.enterSpx_parameter(this);
        }
    };
    // @Override
    Spx_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitSpx_parameter) {
            listener.exitSpx_parameter(this);
        }
    };
    // @Override
    Spx_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitSpx_parameter) {
            return visitor.visitSpx_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Spx_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Spx_parameterContext = Spx_parameterContext;
var Spx_spxContext = /** @class */ (function (_super) {
    __extends(Spx_spxContext, _super);
    function Spx_spxContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Spx_spxContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Spx_spxContext.prototype.PROTOCOL = function () { return this.getToken(tnsnamesParser.PROTOCOL, 0); };
    Spx_spxContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Spx_spxContext.prototype.SPX = function () { return this.getToken(tnsnamesParser.SPX, 0); };
    Spx_spxContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Spx_spxContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_spx_spx; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Spx_spxContext.prototype.enterRule = function (listener) {
        if (listener.enterSpx_spx) {
            listener.enterSpx_spx(this);
        }
    };
    // @Override
    Spx_spxContext.prototype.exitRule = function (listener) {
        if (listener.exitSpx_spx) {
            listener.exitSpx_spx(this);
        }
    };
    // @Override
    Spx_spxContext.prototype.accept = function (visitor) {
        if (visitor.visitSpx_spx) {
            return visitor.visitSpx_spx(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Spx_spxContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Spx_spxContext = Spx_spxContext;
var Spx_serviceContext = /** @class */ (function (_super) {
    __extends(Spx_serviceContext, _super);
    function Spx_serviceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Spx_serviceContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Spx_serviceContext.prototype.SERVICE = function () { return this.getToken(tnsnamesParser.SERVICE, 0); };
    Spx_serviceContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Spx_serviceContext.prototype.ID = function () { return this.getToken(tnsnamesParser.ID, 0); };
    Spx_serviceContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Spx_serviceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_spx_service; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Spx_serviceContext.prototype.enterRule = function (listener) {
        if (listener.enterSpx_service) {
            listener.enterSpx_service(this);
        }
    };
    // @Override
    Spx_serviceContext.prototype.exitRule = function (listener) {
        if (listener.exitSpx_service) {
            listener.exitSpx_service(this);
        }
    };
    // @Override
    Spx_serviceContext.prototype.accept = function (visitor) {
        if (visitor.visitSpx_service) {
            return visitor.visitSpx_service(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Spx_serviceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Spx_serviceContext = Spx_serviceContext;
var Nmp_protocolContext = /** @class */ (function (_super) {
    __extends(Nmp_protocolContext, _super);
    function Nmp_protocolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Nmp_protocolContext.prototype.nmp_params = function () {
        return this.getRuleContext(0, Nmp_paramsContext);
    };
    Object.defineProperty(Nmp_protocolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_nmp_protocol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Nmp_protocolContext.prototype.enterRule = function (listener) {
        if (listener.enterNmp_protocol) {
            listener.enterNmp_protocol(this);
        }
    };
    // @Override
    Nmp_protocolContext.prototype.exitRule = function (listener) {
        if (listener.exitNmp_protocol) {
            listener.exitNmp_protocol(this);
        }
    };
    // @Override
    Nmp_protocolContext.prototype.accept = function (visitor) {
        if (visitor.visitNmp_protocol) {
            return visitor.visitNmp_protocol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Nmp_protocolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Nmp_protocolContext = Nmp_protocolContext;
var Nmp_paramsContext = /** @class */ (function (_super) {
    __extends(Nmp_paramsContext, _super);
    function Nmp_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Nmp_paramsContext.prototype.nmp_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Nmp_parameterContext);
        }
        else {
            return this.getRuleContext(i, Nmp_parameterContext);
        }
    };
    Object.defineProperty(Nmp_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_nmp_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Nmp_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterNmp_params) {
            listener.enterNmp_params(this);
        }
    };
    // @Override
    Nmp_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitNmp_params) {
            listener.exitNmp_params(this);
        }
    };
    // @Override
    Nmp_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitNmp_params) {
            return visitor.visitNmp_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Nmp_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Nmp_paramsContext = Nmp_paramsContext;
var Nmp_parameterContext = /** @class */ (function (_super) {
    __extends(Nmp_parameterContext, _super);
    function Nmp_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Nmp_parameterContext.prototype.nmp_nmp = function () {
        return this.tryGetRuleContext(0, Nmp_nmpContext);
    };
    Nmp_parameterContext.prototype.nmp_server = function () {
        return this.tryGetRuleContext(0, Nmp_serverContext);
    };
    Nmp_parameterContext.prototype.nmp_pipe = function () {
        return this.tryGetRuleContext(0, Nmp_pipeContext);
    };
    Object.defineProperty(Nmp_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_nmp_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Nmp_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterNmp_parameter) {
            listener.enterNmp_parameter(this);
        }
    };
    // @Override
    Nmp_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitNmp_parameter) {
            listener.exitNmp_parameter(this);
        }
    };
    // @Override
    Nmp_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitNmp_parameter) {
            return visitor.visitNmp_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Nmp_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Nmp_parameterContext = Nmp_parameterContext;
var Nmp_nmpContext = /** @class */ (function (_super) {
    __extends(Nmp_nmpContext, _super);
    function Nmp_nmpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Nmp_nmpContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Nmp_nmpContext.prototype.PROTOCOL = function () { return this.getToken(tnsnamesParser.PROTOCOL, 0); };
    Nmp_nmpContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Nmp_nmpContext.prototype.NMP = function () { return this.getToken(tnsnamesParser.NMP, 0); };
    Nmp_nmpContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Nmp_nmpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_nmp_nmp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Nmp_nmpContext.prototype.enterRule = function (listener) {
        if (listener.enterNmp_nmp) {
            listener.enterNmp_nmp(this);
        }
    };
    // @Override
    Nmp_nmpContext.prototype.exitRule = function (listener) {
        if (listener.exitNmp_nmp) {
            listener.exitNmp_nmp(this);
        }
    };
    // @Override
    Nmp_nmpContext.prototype.accept = function (visitor) {
        if (visitor.visitNmp_nmp) {
            return visitor.visitNmp_nmp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Nmp_nmpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Nmp_nmpContext = Nmp_nmpContext;
var Nmp_serverContext = /** @class */ (function (_super) {
    __extends(Nmp_serverContext, _super);
    function Nmp_serverContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Nmp_serverContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Nmp_serverContext.prototype.SERVER = function () { return this.getToken(tnsnamesParser.SERVER, 0); };
    Nmp_serverContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Nmp_serverContext.prototype.ID = function () { return this.getToken(tnsnamesParser.ID, 0); };
    Nmp_serverContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Nmp_serverContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_nmp_server; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Nmp_serverContext.prototype.enterRule = function (listener) {
        if (listener.enterNmp_server) {
            listener.enterNmp_server(this);
        }
    };
    // @Override
    Nmp_serverContext.prototype.exitRule = function (listener) {
        if (listener.exitNmp_server) {
            listener.exitNmp_server(this);
        }
    };
    // @Override
    Nmp_serverContext.prototype.accept = function (visitor) {
        if (visitor.visitNmp_server) {
            return visitor.visitNmp_server(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Nmp_serverContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Nmp_serverContext = Nmp_serverContext;
var Nmp_pipeContext = /** @class */ (function (_super) {
    __extends(Nmp_pipeContext, _super);
    function Nmp_pipeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Nmp_pipeContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Nmp_pipeContext.prototype.PIPE = function () { return this.getToken(tnsnamesParser.PIPE, 0); };
    Nmp_pipeContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Nmp_pipeContext.prototype.ID = function () { return this.getToken(tnsnamesParser.ID, 0); };
    Nmp_pipeContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Nmp_pipeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_nmp_pipe; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Nmp_pipeContext.prototype.enterRule = function (listener) {
        if (listener.enterNmp_pipe) {
            listener.enterNmp_pipe(this);
        }
    };
    // @Override
    Nmp_pipeContext.prototype.exitRule = function (listener) {
        if (listener.exitNmp_pipe) {
            listener.exitNmp_pipe(this);
        }
    };
    // @Override
    Nmp_pipeContext.prototype.accept = function (visitor) {
        if (visitor.visitNmp_pipe) {
            return visitor.visitNmp_pipe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Nmp_pipeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Nmp_pipeContext = Nmp_pipeContext;
var Beq_protocolContext = /** @class */ (function (_super) {
    __extends(Beq_protocolContext, _super);
    function Beq_protocolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Beq_protocolContext.prototype.beq_params = function () {
        return this.getRuleContext(0, Beq_paramsContext);
    };
    Object.defineProperty(Beq_protocolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_beq_protocol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Beq_protocolContext.prototype.enterRule = function (listener) {
        if (listener.enterBeq_protocol) {
            listener.enterBeq_protocol(this);
        }
    };
    // @Override
    Beq_protocolContext.prototype.exitRule = function (listener) {
        if (listener.exitBeq_protocol) {
            listener.exitBeq_protocol(this);
        }
    };
    // @Override
    Beq_protocolContext.prototype.accept = function (visitor) {
        if (visitor.visitBeq_protocol) {
            return visitor.visitBeq_protocol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Beq_protocolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Beq_protocolContext = Beq_protocolContext;
var Beq_paramsContext = /** @class */ (function (_super) {
    __extends(Beq_paramsContext, _super);
    function Beq_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Beq_paramsContext.prototype.beq_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Beq_parameterContext);
        }
        else {
            return this.getRuleContext(i, Beq_parameterContext);
        }
    };
    Object.defineProperty(Beq_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_beq_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Beq_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterBeq_params) {
            listener.enterBeq_params(this);
        }
    };
    // @Override
    Beq_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitBeq_params) {
            listener.exitBeq_params(this);
        }
    };
    // @Override
    Beq_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitBeq_params) {
            return visitor.visitBeq_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Beq_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Beq_paramsContext = Beq_paramsContext;
var Beq_parameterContext = /** @class */ (function (_super) {
    __extends(Beq_parameterContext, _super);
    function Beq_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Beq_parameterContext.prototype.beq_beq = function () {
        return this.tryGetRuleContext(0, Beq_beqContext);
    };
    Beq_parameterContext.prototype.beq_program = function () {
        return this.tryGetRuleContext(0, Beq_programContext);
    };
    Beq_parameterContext.prototype.beq_argv0 = function () {
        return this.tryGetRuleContext(0, Beq_argv0Context);
    };
    Beq_parameterContext.prototype.beq_args = function () {
        return this.tryGetRuleContext(0, Beq_argsContext);
    };
    Object.defineProperty(Beq_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_beq_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Beq_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterBeq_parameter) {
            listener.enterBeq_parameter(this);
        }
    };
    // @Override
    Beq_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitBeq_parameter) {
            listener.exitBeq_parameter(this);
        }
    };
    // @Override
    Beq_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitBeq_parameter) {
            return visitor.visitBeq_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Beq_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Beq_parameterContext = Beq_parameterContext;
var Beq_beqContext = /** @class */ (function (_super) {
    __extends(Beq_beqContext, _super);
    function Beq_beqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Beq_beqContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Beq_beqContext.prototype.PROTOCOL = function () { return this.getToken(tnsnamesParser.PROTOCOL, 0); };
    Beq_beqContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Beq_beqContext.prototype.BEQ = function () { return this.getToken(tnsnamesParser.BEQ, 0); };
    Beq_beqContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Beq_beqContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_beq_beq; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Beq_beqContext.prototype.enterRule = function (listener) {
        if (listener.enterBeq_beq) {
            listener.enterBeq_beq(this);
        }
    };
    // @Override
    Beq_beqContext.prototype.exitRule = function (listener) {
        if (listener.exitBeq_beq) {
            listener.exitBeq_beq(this);
        }
    };
    // @Override
    Beq_beqContext.prototype.accept = function (visitor) {
        if (visitor.visitBeq_beq) {
            return visitor.visitBeq_beq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Beq_beqContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Beq_beqContext = Beq_beqContext;
var Beq_programContext = /** @class */ (function (_super) {
    __extends(Beq_programContext, _super);
    function Beq_programContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Beq_programContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Beq_programContext.prototype.PROGRAM = function () { return this.getToken(tnsnamesParser.PROGRAM, 0); };
    Beq_programContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Beq_programContext.prototype.ID = function () { return this.getToken(tnsnamesParser.ID, 0); };
    Beq_programContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Beq_programContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_beq_program; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Beq_programContext.prototype.enterRule = function (listener) {
        if (listener.enterBeq_program) {
            listener.enterBeq_program(this);
        }
    };
    // @Override
    Beq_programContext.prototype.exitRule = function (listener) {
        if (listener.exitBeq_program) {
            listener.exitBeq_program(this);
        }
    };
    // @Override
    Beq_programContext.prototype.accept = function (visitor) {
        if (visitor.visitBeq_program) {
            return visitor.visitBeq_program(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Beq_programContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Beq_programContext = Beq_programContext;
var Beq_argv0Context = /** @class */ (function (_super) {
    __extends(Beq_argv0Context, _super);
    function Beq_argv0Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Beq_argv0Context.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Beq_argv0Context.prototype.ARGV0 = function () { return this.getToken(tnsnamesParser.ARGV0, 0); };
    Beq_argv0Context.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Beq_argv0Context.prototype.ID = function () { return this.getToken(tnsnamesParser.ID, 0); };
    Beq_argv0Context.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Beq_argv0Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_beq_argv0; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Beq_argv0Context.prototype.enterRule = function (listener) {
        if (listener.enterBeq_argv0) {
            listener.enterBeq_argv0(this);
        }
    };
    // @Override
    Beq_argv0Context.prototype.exitRule = function (listener) {
        if (listener.exitBeq_argv0) {
            listener.exitBeq_argv0(this);
        }
    };
    // @Override
    Beq_argv0Context.prototype.accept = function (visitor) {
        if (visitor.visitBeq_argv0) {
            return visitor.visitBeq_argv0(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Beq_argv0Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Beq_argv0Context = Beq_argv0Context;
var Beq_argsContext = /** @class */ (function (_super) {
    __extends(Beq_argsContext, _super);
    function Beq_argsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Beq_argsContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Beq_argsContext.prototype.ARGS = function () { return this.getToken(tnsnamesParser.ARGS, 0); };
    Beq_argsContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Beq_argsContext.prototype.ba_parameter = function () {
        return this.getRuleContext(0, Ba_parameterContext);
    };
    Beq_argsContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Beq_argsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_beq_args; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Beq_argsContext.prototype.enterRule = function (listener) {
        if (listener.enterBeq_args) {
            listener.enterBeq_args(this);
        }
    };
    // @Override
    Beq_argsContext.prototype.exitRule = function (listener) {
        if (listener.exitBeq_args) {
            listener.exitBeq_args(this);
        }
    };
    // @Override
    Beq_argsContext.prototype.accept = function (visitor) {
        if (visitor.visitBeq_args) {
            return visitor.visitBeq_args(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Beq_argsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Beq_argsContext = Beq_argsContext;
var Ba_parameterContext = /** @class */ (function (_super) {
    __extends(Ba_parameterContext, _super);
    function Ba_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ba_parameterContext.prototype.S_QUOTE = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.S_QUOTE);
        }
        else {
            return this.getToken(tnsnamesParser.S_QUOTE, i);
        }
    };
    Ba_parameterContext.prototype.ba_description = function () {
        return this.getRuleContext(0, Ba_descriptionContext);
    };
    Object.defineProperty(Ba_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ba_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ba_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterBa_parameter) {
            listener.enterBa_parameter(this);
        }
    };
    // @Override
    Ba_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitBa_parameter) {
            listener.exitBa_parameter(this);
        }
    };
    // @Override
    Ba_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitBa_parameter) {
            return visitor.visitBa_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ba_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ba_parameterContext = Ba_parameterContext;
var Ba_descriptionContext = /** @class */ (function (_super) {
    __extends(Ba_descriptionContext, _super);
    function Ba_descriptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ba_descriptionContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Ba_descriptionContext.prototype.DESCRIPTION = function () { return this.getToken(tnsnamesParser.DESCRIPTION, 0); };
    Ba_descriptionContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Ba_descriptionContext.prototype.bad_params = function () {
        return this.getRuleContext(0, Bad_paramsContext);
    };
    Ba_descriptionContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Ba_descriptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_ba_description; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ba_descriptionContext.prototype.enterRule = function (listener) {
        if (listener.enterBa_description) {
            listener.enterBa_description(this);
        }
    };
    // @Override
    Ba_descriptionContext.prototype.exitRule = function (listener) {
        if (listener.exitBa_description) {
            listener.exitBa_description(this);
        }
    };
    // @Override
    Ba_descriptionContext.prototype.accept = function (visitor) {
        if (visitor.visitBa_description) {
            return visitor.visitBa_description(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ba_descriptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ba_descriptionContext = Ba_descriptionContext;
var Bad_paramsContext = /** @class */ (function (_super) {
    __extends(Bad_paramsContext, _super);
    function Bad_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bad_paramsContext.prototype.bad_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Bad_parameterContext);
        }
        else {
            return this.getRuleContext(i, Bad_parameterContext);
        }
    };
    Object.defineProperty(Bad_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_bad_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bad_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterBad_params) {
            listener.enterBad_params(this);
        }
    };
    // @Override
    Bad_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitBad_params) {
            listener.exitBad_params(this);
        }
    };
    // @Override
    Bad_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitBad_params) {
            return visitor.visitBad_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bad_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bad_paramsContext = Bad_paramsContext;
var Bad_parameterContext = /** @class */ (function (_super) {
    __extends(Bad_parameterContext, _super);
    function Bad_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bad_parameterContext.prototype.bad_local = function () {
        return this.tryGetRuleContext(0, Bad_localContext);
    };
    Bad_parameterContext.prototype.bad_address = function () {
        return this.tryGetRuleContext(0, Bad_addressContext);
    };
    Object.defineProperty(Bad_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_bad_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bad_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterBad_parameter) {
            listener.enterBad_parameter(this);
        }
    };
    // @Override
    Bad_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitBad_parameter) {
            listener.exitBad_parameter(this);
        }
    };
    // @Override
    Bad_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitBad_parameter) {
            return visitor.visitBad_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bad_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bad_parameterContext = Bad_parameterContext;
var Bad_localContext = /** @class */ (function (_super) {
    __extends(Bad_localContext, _super);
    function Bad_localContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bad_localContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Bad_localContext.prototype.LOCAL = function () { return this.getToken(tnsnamesParser.LOCAL, 0); };
    Bad_localContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Bad_localContext.prototype.YES_NO = function () { return this.getToken(tnsnamesParser.YES_NO, 0); };
    Bad_localContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Bad_localContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_bad_local; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bad_localContext.prototype.enterRule = function (listener) {
        if (listener.enterBad_local) {
            listener.enterBad_local(this);
        }
    };
    // @Override
    Bad_localContext.prototype.exitRule = function (listener) {
        if (listener.exitBad_local) {
            listener.exitBad_local(this);
        }
    };
    // @Override
    Bad_localContext.prototype.accept = function (visitor) {
        if (visitor.visitBad_local) {
            return visitor.visitBad_local(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bad_localContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bad_localContext = Bad_localContext;
var Bad_addressContext = /** @class */ (function (_super) {
    __extends(Bad_addressContext, _super);
    function Bad_addressContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bad_addressContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Bad_addressContext.prototype.ADDRESS = function () { return this.getToken(tnsnamesParser.ADDRESS, 0); };
    Bad_addressContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Bad_addressContext.prototype.beq_beq = function () {
        return this.getRuleContext(0, Beq_beqContext);
    };
    Bad_addressContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Bad_addressContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_bad_address; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bad_addressContext.prototype.enterRule = function (listener) {
        if (listener.enterBad_address) {
            listener.enterBad_address(this);
        }
    };
    // @Override
    Bad_addressContext.prototype.exitRule = function (listener) {
        if (listener.exitBad_address) {
            listener.exitBad_address(this);
        }
    };
    // @Override
    Bad_addressContext.prototype.accept = function (visitor) {
        if (visitor.visitBad_address) {
            return visitor.visitBad_address(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bad_addressContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bad_addressContext = Bad_addressContext;
var Connect_dataContext = /** @class */ (function (_super) {
    __extends(Connect_dataContext, _super);
    function Connect_dataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Connect_dataContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Connect_dataContext.prototype.CONNECT_DATA = function () { return this.getToken(tnsnamesParser.CONNECT_DATA, 0); };
    Connect_dataContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Connect_dataContext.prototype.cd_params = function () {
        return this.getRuleContext(0, Cd_paramsContext);
    };
    Connect_dataContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Connect_dataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_connect_data; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Connect_dataContext.prototype.enterRule = function (listener) {
        if (listener.enterConnect_data) {
            listener.enterConnect_data(this);
        }
    };
    // @Override
    Connect_dataContext.prototype.exitRule = function (listener) {
        if (listener.exitConnect_data) {
            listener.exitConnect_data(this);
        }
    };
    // @Override
    Connect_dataContext.prototype.accept = function (visitor) {
        if (visitor.visitConnect_data) {
            return visitor.visitConnect_data(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Connect_dataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Connect_dataContext = Connect_dataContext;
var Cd_paramsContext = /** @class */ (function (_super) {
    __extends(Cd_paramsContext, _super);
    function Cd_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_paramsContext.prototype.cd_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Cd_parameterContext);
        }
        else {
            return this.getRuleContext(i, Cd_parameterContext);
        }
    };
    Object.defineProperty(Cd_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_params) {
            listener.enterCd_params(this);
        }
    };
    // @Override
    Cd_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_params) {
            listener.exitCd_params(this);
        }
    };
    // @Override
    Cd_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_params) {
            return visitor.visitCd_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_paramsContext = Cd_paramsContext;
var Cd_parameterContext = /** @class */ (function (_super) {
    __extends(Cd_parameterContext, _super);
    function Cd_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_parameterContext.prototype.cd_service_name = function () {
        return this.tryGetRuleContext(0, Cd_service_nameContext);
    };
    Cd_parameterContext.prototype.cd_sid = function () {
        return this.tryGetRuleContext(0, Cd_sidContext);
    };
    Cd_parameterContext.prototype.cd_instance_name = function () {
        return this.tryGetRuleContext(0, Cd_instance_nameContext);
    };
    Cd_parameterContext.prototype.cd_failover_mode = function () {
        return this.tryGetRuleContext(0, Cd_failover_modeContext);
    };
    Cd_parameterContext.prototype.cd_global_name = function () {
        return this.tryGetRuleContext(0, Cd_global_nameContext);
    };
    Cd_parameterContext.prototype.cd_hs = function () {
        return this.tryGetRuleContext(0, Cd_hsContext);
    };
    Cd_parameterContext.prototype.cd_rdb_database = function () {
        return this.tryGetRuleContext(0, Cd_rdb_databaseContext);
    };
    Cd_parameterContext.prototype.cd_server = function () {
        return this.tryGetRuleContext(0, Cd_serverContext);
    };
    Cd_parameterContext.prototype.cd_ur = function () {
        return this.tryGetRuleContext(0, Cd_urContext);
    };
    Object.defineProperty(Cd_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_parameter) {
            listener.enterCd_parameter(this);
        }
    };
    // @Override
    Cd_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_parameter) {
            listener.exitCd_parameter(this);
        }
    };
    // @Override
    Cd_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_parameter) {
            return visitor.visitCd_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_parameterContext = Cd_parameterContext;
var Cd_service_nameContext = /** @class */ (function (_super) {
    __extends(Cd_service_nameContext, _super);
    function Cd_service_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_service_nameContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_service_nameContext.prototype.SERVICE_NAME = function () { return this.getToken(tnsnamesParser.SERVICE_NAME, 0); };
    Cd_service_nameContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_service_nameContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.ID);
        }
        else {
            return this.getToken(tnsnamesParser.ID, i);
        }
    };
    Cd_service_nameContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Cd_service_nameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.DOT);
        }
        else {
            return this.getToken(tnsnamesParser.DOT, i);
        }
    };
    Object.defineProperty(Cd_service_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_service_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_service_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_service_name) {
            listener.enterCd_service_name(this);
        }
    };
    // @Override
    Cd_service_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_service_name) {
            listener.exitCd_service_name(this);
        }
    };
    // @Override
    Cd_service_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_service_name) {
            return visitor.visitCd_service_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_service_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_service_nameContext = Cd_service_nameContext;
var Cd_sidContext = /** @class */ (function (_super) {
    __extends(Cd_sidContext, _super);
    function Cd_sidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_sidContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_sidContext.prototype.SID = function () { return this.getToken(tnsnamesParser.SID, 0); };
    Cd_sidContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_sidContext.prototype.ID = function () { return this.getToken(tnsnamesParser.ID, 0); };
    Cd_sidContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Cd_sidContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_sid; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_sidContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_sid) {
            listener.enterCd_sid(this);
        }
    };
    // @Override
    Cd_sidContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_sid) {
            listener.exitCd_sid(this);
        }
    };
    // @Override
    Cd_sidContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_sid) {
            return visitor.visitCd_sid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_sidContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_sidContext = Cd_sidContext;
var Cd_instance_nameContext = /** @class */ (function (_super) {
    __extends(Cd_instance_nameContext, _super);
    function Cd_instance_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_instance_nameContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_instance_nameContext.prototype.INSTANCE_NAME = function () { return this.getToken(tnsnamesParser.INSTANCE_NAME, 0); };
    Cd_instance_nameContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_instance_nameContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.ID);
        }
        else {
            return this.getToken(tnsnamesParser.ID, i);
        }
    };
    Cd_instance_nameContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Cd_instance_nameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.DOT);
        }
        else {
            return this.getToken(tnsnamesParser.DOT, i);
        }
    };
    Object.defineProperty(Cd_instance_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_instance_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_instance_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_instance_name) {
            listener.enterCd_instance_name(this);
        }
    };
    // @Override
    Cd_instance_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_instance_name) {
            listener.exitCd_instance_name(this);
        }
    };
    // @Override
    Cd_instance_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_instance_name) {
            return visitor.visitCd_instance_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_instance_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_instance_nameContext = Cd_instance_nameContext;
var Cd_failover_modeContext = /** @class */ (function (_super) {
    __extends(Cd_failover_modeContext, _super);
    function Cd_failover_modeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_failover_modeContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_failover_modeContext.prototype.FAILOVER_MODE = function () { return this.getToken(tnsnamesParser.FAILOVER_MODE, 0); };
    Cd_failover_modeContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_failover_modeContext.prototype.fo_params = function () {
        return this.getRuleContext(0, Fo_paramsContext);
    };
    Cd_failover_modeContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Cd_failover_modeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_failover_mode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_failover_modeContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_failover_mode) {
            listener.enterCd_failover_mode(this);
        }
    };
    // @Override
    Cd_failover_modeContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_failover_mode) {
            listener.exitCd_failover_mode(this);
        }
    };
    // @Override
    Cd_failover_modeContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_failover_mode) {
            return visitor.visitCd_failover_mode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_failover_modeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_failover_modeContext = Cd_failover_modeContext;
var Cd_global_nameContext = /** @class */ (function (_super) {
    __extends(Cd_global_nameContext, _super);
    function Cd_global_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_global_nameContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_global_nameContext.prototype.GLOBAL_NAME = function () { return this.getToken(tnsnamesParser.GLOBAL_NAME, 0); };
    Cd_global_nameContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_global_nameContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.ID);
        }
        else {
            return this.getToken(tnsnamesParser.ID, i);
        }
    };
    Cd_global_nameContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Cd_global_nameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.DOT);
        }
        else {
            return this.getToken(tnsnamesParser.DOT, i);
        }
    };
    Object.defineProperty(Cd_global_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_global_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_global_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_global_name) {
            listener.enterCd_global_name(this);
        }
    };
    // @Override
    Cd_global_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_global_name) {
            listener.exitCd_global_name(this);
        }
    };
    // @Override
    Cd_global_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_global_name) {
            return visitor.visitCd_global_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_global_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_global_nameContext = Cd_global_nameContext;
var Cd_hsContext = /** @class */ (function (_super) {
    __extends(Cd_hsContext, _super);
    function Cd_hsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_hsContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_hsContext.prototype.HS = function () { return this.getToken(tnsnamesParser.HS, 0); };
    Cd_hsContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_hsContext.prototype.OK = function () { return this.getToken(tnsnamesParser.OK, 0); };
    Cd_hsContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Cd_hsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_hs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_hsContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_hs) {
            listener.enterCd_hs(this);
        }
    };
    // @Override
    Cd_hsContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_hs) {
            listener.exitCd_hs(this);
        }
    };
    // @Override
    Cd_hsContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_hs) {
            return visitor.visitCd_hs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_hsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_hsContext = Cd_hsContext;
var Cd_rdb_databaseContext = /** @class */ (function (_super) {
    __extends(Cd_rdb_databaseContext, _super);
    function Cd_rdb_databaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_rdb_databaseContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_rdb_databaseContext.prototype.RDB_DATABASE = function () { return this.getToken(tnsnamesParser.RDB_DATABASE, 0); };
    Cd_rdb_databaseContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_rdb_databaseContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.ID);
        }
        else {
            return this.getToken(tnsnamesParser.ID, i);
        }
    };
    Cd_rdb_databaseContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Cd_rdb_databaseContext.prototype.L_SQUARE = function () { return this.tryGetToken(tnsnamesParser.L_SQUARE, 0); };
    Cd_rdb_databaseContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.DOT);
        }
        else {
            return this.getToken(tnsnamesParser.DOT, i);
        }
    };
    Cd_rdb_databaseContext.prototype.R_SQUARE = function () { return this.tryGetToken(tnsnamesParser.R_SQUARE, 0); };
    Object.defineProperty(Cd_rdb_databaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_rdb_database; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_rdb_databaseContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_rdb_database) {
            listener.enterCd_rdb_database(this);
        }
    };
    // @Override
    Cd_rdb_databaseContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_rdb_database) {
            listener.exitCd_rdb_database(this);
        }
    };
    // @Override
    Cd_rdb_databaseContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_rdb_database) {
            return visitor.visitCd_rdb_database(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_rdb_databaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_rdb_databaseContext = Cd_rdb_databaseContext;
var Cd_serverContext = /** @class */ (function (_super) {
    __extends(Cd_serverContext, _super);
    function Cd_serverContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_serverContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_serverContext.prototype.SERVER = function () { return this.getToken(tnsnamesParser.SERVER, 0); };
    Cd_serverContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_serverContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Cd_serverContext.prototype.DEDICATED = function () { return this.tryGetToken(tnsnamesParser.DEDICATED, 0); };
    Cd_serverContext.prototype.SHARED = function () { return this.tryGetToken(tnsnamesParser.SHARED, 0); };
    Cd_serverContext.prototype.POOLED = function () { return this.tryGetToken(tnsnamesParser.POOLED, 0); };
    Object.defineProperty(Cd_serverContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_server; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_serverContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_server) {
            listener.enterCd_server(this);
        }
    };
    // @Override
    Cd_serverContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_server) {
            listener.exitCd_server(this);
        }
    };
    // @Override
    Cd_serverContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_server) {
            return visitor.visitCd_server(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_serverContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_serverContext = Cd_serverContext;
var Cd_urContext = /** @class */ (function (_super) {
    __extends(Cd_urContext, _super);
    function Cd_urContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cd_urContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Cd_urContext.prototype.UR = function () { return this.getToken(tnsnamesParser.UR, 0); };
    Cd_urContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Cd_urContext.prototype.UR_A = function () { return this.getToken(tnsnamesParser.UR_A, 0); };
    Cd_urContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Cd_urContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_cd_ur; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cd_urContext.prototype.enterRule = function (listener) {
        if (listener.enterCd_ur) {
            listener.enterCd_ur(this);
        }
    };
    // @Override
    Cd_urContext.prototype.exitRule = function (listener) {
        if (listener.exitCd_ur) {
            listener.exitCd_ur(this);
        }
    };
    // @Override
    Cd_urContext.prototype.accept = function (visitor) {
        if (visitor.visitCd_ur) {
            return visitor.visitCd_ur(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cd_urContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cd_urContext = Cd_urContext;
var Fo_paramsContext = /** @class */ (function (_super) {
    __extends(Fo_paramsContext, _super);
    function Fo_paramsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fo_paramsContext.prototype.fo_parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Fo_parameterContext);
        }
        else {
            return this.getRuleContext(i, Fo_parameterContext);
        }
    };
    Object.defineProperty(Fo_paramsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_fo_params; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fo_paramsContext.prototype.enterRule = function (listener) {
        if (listener.enterFo_params) {
            listener.enterFo_params(this);
        }
    };
    // @Override
    Fo_paramsContext.prototype.exitRule = function (listener) {
        if (listener.exitFo_params) {
            listener.exitFo_params(this);
        }
    };
    // @Override
    Fo_paramsContext.prototype.accept = function (visitor) {
        if (visitor.visitFo_params) {
            return visitor.visitFo_params(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fo_paramsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fo_paramsContext = Fo_paramsContext;
var Fo_parameterContext = /** @class */ (function (_super) {
    __extends(Fo_parameterContext, _super);
    function Fo_parameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fo_parameterContext.prototype.fo_type = function () {
        return this.tryGetRuleContext(0, Fo_typeContext);
    };
    Fo_parameterContext.prototype.fo_backup = function () {
        return this.tryGetRuleContext(0, Fo_backupContext);
    };
    Fo_parameterContext.prototype.fo_method = function () {
        return this.tryGetRuleContext(0, Fo_methodContext);
    };
    Fo_parameterContext.prototype.fo_retries = function () {
        return this.tryGetRuleContext(0, Fo_retriesContext);
    };
    Fo_parameterContext.prototype.fo_delay = function () {
        return this.tryGetRuleContext(0, Fo_delayContext);
    };
    Object.defineProperty(Fo_parameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_fo_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fo_parameterContext.prototype.enterRule = function (listener) {
        if (listener.enterFo_parameter) {
            listener.enterFo_parameter(this);
        }
    };
    // @Override
    Fo_parameterContext.prototype.exitRule = function (listener) {
        if (listener.exitFo_parameter) {
            listener.exitFo_parameter(this);
        }
    };
    // @Override
    Fo_parameterContext.prototype.accept = function (visitor) {
        if (visitor.visitFo_parameter) {
            return visitor.visitFo_parameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fo_parameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fo_parameterContext = Fo_parameterContext;
var Fo_typeContext = /** @class */ (function (_super) {
    __extends(Fo_typeContext, _super);
    function Fo_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fo_typeContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Fo_typeContext.prototype.TYPE = function () { return this.getToken(tnsnamesParser.TYPE, 0); };
    Fo_typeContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Fo_typeContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Fo_typeContext.prototype.SESSION = function () { return this.tryGetToken(tnsnamesParser.SESSION, 0); };
    Fo_typeContext.prototype.SELECT = function () { return this.tryGetToken(tnsnamesParser.SELECT, 0); };
    Fo_typeContext.prototype.NONE = function () { return this.tryGetToken(tnsnamesParser.NONE, 0); };
    Object.defineProperty(Fo_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_fo_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fo_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterFo_type) {
            listener.enterFo_type(this);
        }
    };
    // @Override
    Fo_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitFo_type) {
            listener.exitFo_type(this);
        }
    };
    // @Override
    Fo_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitFo_type) {
            return visitor.visitFo_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fo_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fo_typeContext = Fo_typeContext;
var Fo_backupContext = /** @class */ (function (_super) {
    __extends(Fo_backupContext, _super);
    function Fo_backupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fo_backupContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Fo_backupContext.prototype.BACKUP = function () { return this.getToken(tnsnamesParser.BACKUP, 0); };
    Fo_backupContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Fo_backupContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.ID);
        }
        else {
            return this.getToken(tnsnamesParser.ID, i);
        }
    };
    Fo_backupContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Fo_backupContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(tnsnamesParser.DOT);
        }
        else {
            return this.getToken(tnsnamesParser.DOT, i);
        }
    };
    Object.defineProperty(Fo_backupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_fo_backup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fo_backupContext.prototype.enterRule = function (listener) {
        if (listener.enterFo_backup) {
            listener.enterFo_backup(this);
        }
    };
    // @Override
    Fo_backupContext.prototype.exitRule = function (listener) {
        if (listener.exitFo_backup) {
            listener.exitFo_backup(this);
        }
    };
    // @Override
    Fo_backupContext.prototype.accept = function (visitor) {
        if (visitor.visitFo_backup) {
            return visitor.visitFo_backup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fo_backupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fo_backupContext = Fo_backupContext;
var Fo_methodContext = /** @class */ (function (_super) {
    __extends(Fo_methodContext, _super);
    function Fo_methodContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fo_methodContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Fo_methodContext.prototype.METHOD = function () { return this.getToken(tnsnamesParser.METHOD, 0); };
    Fo_methodContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Fo_methodContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Fo_methodContext.prototype.BASIC = function () { return this.tryGetToken(tnsnamesParser.BASIC, 0); };
    Fo_methodContext.prototype.PRECONNECT = function () { return this.tryGetToken(tnsnamesParser.PRECONNECT, 0); };
    Object.defineProperty(Fo_methodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_fo_method; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fo_methodContext.prototype.enterRule = function (listener) {
        if (listener.enterFo_method) {
            listener.enterFo_method(this);
        }
    };
    // @Override
    Fo_methodContext.prototype.exitRule = function (listener) {
        if (listener.exitFo_method) {
            listener.exitFo_method(this);
        }
    };
    // @Override
    Fo_methodContext.prototype.accept = function (visitor) {
        if (visitor.visitFo_method) {
            return visitor.visitFo_method(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fo_methodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fo_methodContext = Fo_methodContext;
var Fo_retriesContext = /** @class */ (function (_super) {
    __extends(Fo_retriesContext, _super);
    function Fo_retriesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fo_retriesContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Fo_retriesContext.prototype.RETRIES = function () { return this.getToken(tnsnamesParser.RETRIES, 0); };
    Fo_retriesContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Fo_retriesContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    Fo_retriesContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Fo_retriesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_fo_retries; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fo_retriesContext.prototype.enterRule = function (listener) {
        if (listener.enterFo_retries) {
            listener.enterFo_retries(this);
        }
    };
    // @Override
    Fo_retriesContext.prototype.exitRule = function (listener) {
        if (listener.exitFo_retries) {
            listener.exitFo_retries(this);
        }
    };
    // @Override
    Fo_retriesContext.prototype.accept = function (visitor) {
        if (visitor.visitFo_retries) {
            return visitor.visitFo_retries(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fo_retriesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fo_retriesContext = Fo_retriesContext;
var Fo_delayContext = /** @class */ (function (_super) {
    __extends(Fo_delayContext, _super);
    function Fo_delayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fo_delayContext.prototype.L_PAREN = function () { return this.getToken(tnsnamesParser.L_PAREN, 0); };
    Fo_delayContext.prototype.DELAY = function () { return this.getToken(tnsnamesParser.DELAY, 0); };
    Fo_delayContext.prototype.EQUAL = function () { return this.getToken(tnsnamesParser.EQUAL, 0); };
    Fo_delayContext.prototype.INT = function () { return this.getToken(tnsnamesParser.INT, 0); };
    Fo_delayContext.prototype.R_PAREN = function () { return this.getToken(tnsnamesParser.R_PAREN, 0); };
    Object.defineProperty(Fo_delayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tnsnamesParser.RULE_fo_delay; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fo_delayContext.prototype.enterRule = function (listener) {
        if (listener.enterFo_delay) {
            listener.enterFo_delay(this);
        }
    };
    // @Override
    Fo_delayContext.prototype.exitRule = function (listener) {
        if (listener.exitFo_delay) {
            listener.exitFo_delay(this);
        }
    };
    // @Override
    Fo_delayContext.prototype.accept = function (visitor) {
        if (visitor.visitFo_delay) {
            return visitor.visitFo_delay(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fo_delayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fo_delayContext = Fo_delayContext;
