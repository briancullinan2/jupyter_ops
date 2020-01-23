"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/iri/IRI.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var IRIParser = /** @class */ (function (_super) {
    __extends(IRIParser, _super);
    function IRIParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(IRIParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(IRIParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return IRIParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRIParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "IRI.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRIParser.prototype, "ruleNames", {
        // @Override
        get: function () { return IRIParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRIParser.prototype, "serializedATN", {
        // @Override
        get: function () { return IRIParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    IRIParser.prototype.parse = function () {
        var _localctx = new ParseContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, IRIParser.RULE_parse);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this.iri();
                this.state = 85;
                this.match(IRIParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    IRIParser.prototype.iri = function () {
        var _localctx = new IriContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, IRIParser.RULE_iri);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this.scheme();
                this.state = 88;
                this.match(IRIParser.COL);
                this.state = 89;
                this.ihier_part();
                this.state = 92;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === IRIParser.QMARK) {
                    {
                        this.state = 90;
                        this.match(IRIParser.QMARK);
                        this.state = 91;
                        this.iquery();
                    }
                }
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === IRIParser.HASH) {
                    {
                        this.state = 94;
                        this.match(IRIParser.HASH);
                        this.state = 95;
                        this.ifragment();
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
    IRIParser.prototype.ihier_part = function () {
        var _localctx = new Ihier_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, IRIParser.RULE_ihier_part);
        try {
            this.state = 105;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case IRIParser.FSLASH2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 98;
                        this.match(IRIParser.FSLASH2);
                        this.state = 99;
                        this.iauthority();
                        this.state = 100;
                        this.ipath_abempty();
                    }
                    break;
                case IRIParser.FSLASH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 102;
                        this.ipath_absolute();
                    }
                    break;
                case IRIParser.UCSCHAR:
                case IRIParser.D0:
                case IRIParser.D1:
                case IRIParser.D2:
                case IRIParser.D3:
                case IRIParser.D4:
                case IRIParser.D5:
                case IRIParser.D6:
                case IRIParser.D7:
                case IRIParser.D8:
                case IRIParser.D9:
                case IRIParser.A:
                case IRIParser.B:
                case IRIParser.C:
                case IRIParser.D:
                case IRIParser.E:
                case IRIParser.F:
                case IRIParser.G:
                case IRIParser.H:
                case IRIParser.I:
                case IRIParser.J:
                case IRIParser.K:
                case IRIParser.L:
                case IRIParser.M:
                case IRIParser.N:
                case IRIParser.O:
                case IRIParser.P:
                case IRIParser.Q:
                case IRIParser.R:
                case IRIParser.S:
                case IRIParser.T:
                case IRIParser.U:
                case IRIParser.V:
                case IRIParser.W:
                case IRIParser.X:
                case IRIParser.Y:
                case IRIParser.Z:
                case IRIParser.COL:
                case IRIParser.DOT:
                case IRIParser.PERCENT:
                case IRIParser.HYPHEN:
                case IRIParser.TILDE:
                case IRIParser.USCORE:
                case IRIParser.EXCL:
                case IRIParser.DOLLAR:
                case IRIParser.AMP:
                case IRIParser.SQUOTE:
                case IRIParser.OPAREN:
                case IRIParser.CPAREN:
                case IRIParser.STAR:
                case IRIParser.PLUS:
                case IRIParser.COMMA:
                case IRIParser.SCOL:
                case IRIParser.EQUALS:
                case IRIParser.AT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 103;
                        this.ipath_rootless();
                    }
                    break;
                case IRIParser.EOF:
                case IRIParser.QMARK:
                case IRIParser.HASH:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 104;
                        this.ipath_empty();
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
    IRIParser.prototype.iri_reference = function () {
        var _localctx = new Iri_referenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, IRIParser.RULE_iri_reference);
        try {
            this.state = 109;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 107;
                        this.iri();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 108;
                        this.irelative_ref();
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
    IRIParser.prototype.absolute_iri = function () {
        var _localctx = new Absolute_iriContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, IRIParser.RULE_absolute_iri);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
                this.scheme();
                this.state = 112;
                this.match(IRIParser.COL);
                this.state = 113;
                this.ihier_part();
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === IRIParser.QMARK) {
                    {
                        this.state = 114;
                        this.match(IRIParser.QMARK);
                        this.state = 115;
                        this.iquery();
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
    IRIParser.prototype.irelative_ref = function () {
        var _localctx = new Irelative_refContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, IRIParser.RULE_irelative_ref);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.irelative_part();
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === IRIParser.QMARK) {
                    {
                        this.state = 119;
                        this.match(IRIParser.QMARK);
                        this.state = 120;
                        this.iquery();
                    }
                }
                this.state = 125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === IRIParser.HASH) {
                    {
                        this.state = 123;
                        this.match(IRIParser.HASH);
                        this.state = 124;
                        this.ifragment();
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
    IRIParser.prototype.irelative_part = function () {
        var _localctx = new Irelative_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, IRIParser.RULE_irelative_part);
        try {
            this.state = 134;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case IRIParser.FSLASH2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 127;
                        this.match(IRIParser.FSLASH2);
                        this.state = 128;
                        this.iauthority();
                        this.state = 129;
                        this.ipath_abempty();
                    }
                    break;
                case IRIParser.FSLASH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 131;
                        this.ipath_absolute();
                    }
                    break;
                case IRIParser.UCSCHAR:
                case IRIParser.D0:
                case IRIParser.D1:
                case IRIParser.D2:
                case IRIParser.D3:
                case IRIParser.D4:
                case IRIParser.D5:
                case IRIParser.D6:
                case IRIParser.D7:
                case IRIParser.D8:
                case IRIParser.D9:
                case IRIParser.A:
                case IRIParser.B:
                case IRIParser.C:
                case IRIParser.D:
                case IRIParser.E:
                case IRIParser.F:
                case IRIParser.G:
                case IRIParser.H:
                case IRIParser.I:
                case IRIParser.J:
                case IRIParser.K:
                case IRIParser.L:
                case IRIParser.M:
                case IRIParser.N:
                case IRIParser.O:
                case IRIParser.P:
                case IRIParser.Q:
                case IRIParser.R:
                case IRIParser.S:
                case IRIParser.T:
                case IRIParser.U:
                case IRIParser.V:
                case IRIParser.W:
                case IRIParser.X:
                case IRIParser.Y:
                case IRIParser.Z:
                case IRIParser.DOT:
                case IRIParser.PERCENT:
                case IRIParser.HYPHEN:
                case IRIParser.TILDE:
                case IRIParser.USCORE:
                case IRIParser.EXCL:
                case IRIParser.DOLLAR:
                case IRIParser.AMP:
                case IRIParser.SQUOTE:
                case IRIParser.OPAREN:
                case IRIParser.CPAREN:
                case IRIParser.STAR:
                case IRIParser.PLUS:
                case IRIParser.COMMA:
                case IRIParser.SCOL:
                case IRIParser.EQUALS:
                case IRIParser.AT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 132;
                        this.ipath_noscheme();
                    }
                    break;
                case IRIParser.EOF:
                case IRIParser.QMARK:
                case IRIParser.HASH:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 133;
                        this.ipath_empty();
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
    IRIParser.prototype.iauthority = function () {
        var _localctx = new IauthorityContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, IRIParser.RULE_iauthority);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 139;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 136;
                            this.iuserinfo();
                            this.state = 137;
                            this.match(IRIParser.AT);
                        }
                        break;
                }
                this.state = 141;
                this.ihost();
                this.state = 144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === IRIParser.COL) {
                    {
                        this.state = 142;
                        this.match(IRIParser.COL);
                        this.state = 143;
                        this.port();
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
    IRIParser.prototype.iuserinfo = function () {
        var _localctx = new IuserinfoContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, IRIParser.RULE_iuserinfo);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0)) {
                    {
                        this.state = 150;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case IRIParser.UCSCHAR:
                            case IRIParser.D0:
                            case IRIParser.D1:
                            case IRIParser.D2:
                            case IRIParser.D3:
                            case IRIParser.D4:
                            case IRIParser.D5:
                            case IRIParser.D6:
                            case IRIParser.D7:
                            case IRIParser.D8:
                            case IRIParser.D9:
                            case IRIParser.A:
                            case IRIParser.B:
                            case IRIParser.C:
                            case IRIParser.D:
                            case IRIParser.E:
                            case IRIParser.F:
                            case IRIParser.G:
                            case IRIParser.H:
                            case IRIParser.I:
                            case IRIParser.J:
                            case IRIParser.K:
                            case IRIParser.L:
                            case IRIParser.M:
                            case IRIParser.N:
                            case IRIParser.O:
                            case IRIParser.P:
                            case IRIParser.Q:
                            case IRIParser.R:
                            case IRIParser.S:
                            case IRIParser.T:
                            case IRIParser.U:
                            case IRIParser.V:
                            case IRIParser.W:
                            case IRIParser.X:
                            case IRIParser.Y:
                            case IRIParser.Z:
                            case IRIParser.DOT:
                            case IRIParser.HYPHEN:
                            case IRIParser.TILDE:
                            case IRIParser.USCORE:
                                {
                                    this.state = 146;
                                    this.iunreserved();
                                }
                                break;
                            case IRIParser.PERCENT:
                                {
                                    this.state = 147;
                                    this.pct_encoded();
                                }
                                break;
                            case IRIParser.EXCL:
                            case IRIParser.DOLLAR:
                            case IRIParser.AMP:
                            case IRIParser.SQUOTE:
                            case IRIParser.OPAREN:
                            case IRIParser.CPAREN:
                            case IRIParser.STAR:
                            case IRIParser.PLUS:
                            case IRIParser.COMMA:
                            case IRIParser.SCOL:
                            case IRIParser.EQUALS:
                                {
                                    this.state = 148;
                                    this.sub_delims();
                                }
                                break;
                            case IRIParser.COL:
                                {
                                    this.state = 149;
                                    this.match(IRIParser.COL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 154;
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
    IRIParser.prototype.ihost = function () {
        var _localctx = new IhostContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, IRIParser.RULE_ihost);
        try {
            this.state = 158;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 155;
                        this.ip_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 156;
                        this.ip_v4_address();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 157;
                        this.ireg_name();
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
    IRIParser.prototype.ireg_name = function () {
        var _localctx = new Ireg_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, IRIParser.RULE_ireg_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0)) {
                    {
                        this.state = 163;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case IRIParser.UCSCHAR:
                            case IRIParser.D0:
                            case IRIParser.D1:
                            case IRIParser.D2:
                            case IRIParser.D3:
                            case IRIParser.D4:
                            case IRIParser.D5:
                            case IRIParser.D6:
                            case IRIParser.D7:
                            case IRIParser.D8:
                            case IRIParser.D9:
                            case IRIParser.A:
                            case IRIParser.B:
                            case IRIParser.C:
                            case IRIParser.D:
                            case IRIParser.E:
                            case IRIParser.F:
                            case IRIParser.G:
                            case IRIParser.H:
                            case IRIParser.I:
                            case IRIParser.J:
                            case IRIParser.K:
                            case IRIParser.L:
                            case IRIParser.M:
                            case IRIParser.N:
                            case IRIParser.O:
                            case IRIParser.P:
                            case IRIParser.Q:
                            case IRIParser.R:
                            case IRIParser.S:
                            case IRIParser.T:
                            case IRIParser.U:
                            case IRIParser.V:
                            case IRIParser.W:
                            case IRIParser.X:
                            case IRIParser.Y:
                            case IRIParser.Z:
                            case IRIParser.DOT:
                            case IRIParser.HYPHEN:
                            case IRIParser.TILDE:
                            case IRIParser.USCORE:
                                {
                                    this.state = 160;
                                    this.iunreserved();
                                }
                                break;
                            case IRIParser.PERCENT:
                                {
                                    this.state = 161;
                                    this.pct_encoded();
                                }
                                break;
                            case IRIParser.EXCL:
                            case IRIParser.DOLLAR:
                            case IRIParser.AMP:
                            case IRIParser.SQUOTE:
                            case IRIParser.OPAREN:
                            case IRIParser.CPAREN:
                            case IRIParser.STAR:
                            case IRIParser.PLUS:
                            case IRIParser.COMMA:
                            case IRIParser.SCOL:
                            case IRIParser.EQUALS:
                                {
                                    this.state = 162;
                                    this.sub_delims();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 167;
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
    IRIParser.prototype.ipath = function () {
        var _localctx = new IpathContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, IRIParser.RULE_ipath);
        try {
            this.state = 173;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 168;
                        this.ipath_abempty();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 169;
                        this.ipath_absolute();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 170;
                        this.ipath_noscheme();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 171;
                        this.ipath_rootless();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 172;
                        this.ipath_empty();
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
    IRIParser.prototype.ipath_abempty = function () {
        var _localctx = new Ipath_abemptyContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, IRIParser.RULE_ipath_abempty);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === IRIParser.FSLASH) {
                    {
                        {
                            this.state = 175;
                            this.match(IRIParser.FSLASH);
                            this.state = 176;
                            this.isegment();
                        }
                    }
                    this.state = 181;
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
    IRIParser.prototype.ipath_absolute = function () {
        var _localctx = new Ipath_absoluteContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, IRIParser.RULE_ipath_absolute);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this.match(IRIParser.FSLASH);
                this.state = 191;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
                    {
                        this.state = 183;
                        this.isegment_nz();
                        this.state = 188;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === IRIParser.FSLASH) {
                            {
                                {
                                    this.state = 184;
                                    this.match(IRIParser.FSLASH);
                                    this.state = 185;
                                    this.isegment();
                                }
                            }
                            this.state = 190;
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
    IRIParser.prototype.ipath_noscheme = function () {
        var _localctx = new Ipath_noschemeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, IRIParser.RULE_ipath_noscheme);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.isegment_nz_nc();
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === IRIParser.FSLASH) {
                    {
                        {
                            this.state = 194;
                            this.match(IRIParser.FSLASH);
                            this.state = 195;
                            this.isegment();
                        }
                    }
                    this.state = 200;
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
    IRIParser.prototype.ipath_rootless = function () {
        var _localctx = new Ipath_rootlessContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, IRIParser.RULE_ipath_rootless);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.isegment_nz();
                this.state = 206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === IRIParser.FSLASH) {
                    {
                        {
                            this.state = 202;
                            this.match(IRIParser.FSLASH);
                            this.state = 203;
                            this.isegment();
                        }
                    }
                    this.state = 208;
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
    IRIParser.prototype.ipath_empty = function () {
        var _localctx = new Ipath_emptyContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, IRIParser.RULE_ipath_empty);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    IRIParser.prototype.isegment = function () {
        var _localctx = new IsegmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, IRIParser.RULE_isegment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
                    {
                        {
                            this.state = 211;
                            this.ipchar();
                        }
                    }
                    this.state = 216;
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
    IRIParser.prototype.isegment_nz = function () {
        var _localctx = new Isegment_nzContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, IRIParser.RULE_isegment_nz);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 217;
                            this.ipchar();
                        }
                    }
                    this.state = 220;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    IRIParser.prototype.isegment_nz_nc = function () {
        var _localctx = new Isegment_nz_ncContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, IRIParser.RULE_isegment_nz_nc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 226;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case IRIParser.UCSCHAR:
                            case IRIParser.D0:
                            case IRIParser.D1:
                            case IRIParser.D2:
                            case IRIParser.D3:
                            case IRIParser.D4:
                            case IRIParser.D5:
                            case IRIParser.D6:
                            case IRIParser.D7:
                            case IRIParser.D8:
                            case IRIParser.D9:
                            case IRIParser.A:
                            case IRIParser.B:
                            case IRIParser.C:
                            case IRIParser.D:
                            case IRIParser.E:
                            case IRIParser.F:
                            case IRIParser.G:
                            case IRIParser.H:
                            case IRIParser.I:
                            case IRIParser.J:
                            case IRIParser.K:
                            case IRIParser.L:
                            case IRIParser.M:
                            case IRIParser.N:
                            case IRIParser.O:
                            case IRIParser.P:
                            case IRIParser.Q:
                            case IRIParser.R:
                            case IRIParser.S:
                            case IRIParser.T:
                            case IRIParser.U:
                            case IRIParser.V:
                            case IRIParser.W:
                            case IRIParser.X:
                            case IRIParser.Y:
                            case IRIParser.Z:
                            case IRIParser.DOT:
                            case IRIParser.HYPHEN:
                            case IRIParser.TILDE:
                            case IRIParser.USCORE:
                                {
                                    this.state = 222;
                                    this.iunreserved();
                                }
                                break;
                            case IRIParser.PERCENT:
                                {
                                    this.state = 223;
                                    this.pct_encoded();
                                }
                                break;
                            case IRIParser.EXCL:
                            case IRIParser.DOLLAR:
                            case IRIParser.AMP:
                            case IRIParser.SQUOTE:
                            case IRIParser.OPAREN:
                            case IRIParser.CPAREN:
                            case IRIParser.STAR:
                            case IRIParser.PLUS:
                            case IRIParser.COMMA:
                            case IRIParser.SCOL:
                            case IRIParser.EQUALS:
                                {
                                    this.state = 224;
                                    this.sub_delims();
                                }
                                break;
                            case IRIParser.AT:
                                {
                                    this.state = 225;
                                    this.match(IRIParser.AT);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 228;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    IRIParser.prototype.ipchar = function () {
        var _localctx = new IpcharContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, IRIParser.RULE_ipchar);
        var _la;
        try {
            this.state = 234;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case IRIParser.UCSCHAR:
                case IRIParser.D0:
                case IRIParser.D1:
                case IRIParser.D2:
                case IRIParser.D3:
                case IRIParser.D4:
                case IRIParser.D5:
                case IRIParser.D6:
                case IRIParser.D7:
                case IRIParser.D8:
                case IRIParser.D9:
                case IRIParser.A:
                case IRIParser.B:
                case IRIParser.C:
                case IRIParser.D:
                case IRIParser.E:
                case IRIParser.F:
                case IRIParser.G:
                case IRIParser.H:
                case IRIParser.I:
                case IRIParser.J:
                case IRIParser.K:
                case IRIParser.L:
                case IRIParser.M:
                case IRIParser.N:
                case IRIParser.O:
                case IRIParser.P:
                case IRIParser.Q:
                case IRIParser.R:
                case IRIParser.S:
                case IRIParser.T:
                case IRIParser.U:
                case IRIParser.V:
                case IRIParser.W:
                case IRIParser.X:
                case IRIParser.Y:
                case IRIParser.Z:
                case IRIParser.DOT:
                case IRIParser.HYPHEN:
                case IRIParser.TILDE:
                case IRIParser.USCORE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 230;
                        this.iunreserved();
                    }
                    break;
                case IRIParser.PERCENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 231;
                        this.pct_encoded();
                    }
                    break;
                case IRIParser.EXCL:
                case IRIParser.DOLLAR:
                case IRIParser.AMP:
                case IRIParser.SQUOTE:
                case IRIParser.OPAREN:
                case IRIParser.CPAREN:
                case IRIParser.STAR:
                case IRIParser.PLUS:
                case IRIParser.COMMA:
                case IRIParser.SCOL:
                case IRIParser.EQUALS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 232;
                        this.sub_delims();
                    }
                    break;
                case IRIParser.COL:
                case IRIParser.AT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 233;
                        _la = this._input.LA(1);
                        if (!(_la === IRIParser.COL || _la === IRIParser.AT)) {
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
    IRIParser.prototype.iquery = function () {
        var _localctx = new IqueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, IRIParser.RULE_iquery);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.IPRIVATE) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.FSLASH - 32)) | (1 << (IRIParser.QMARK - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
                    {
                        this.state = 238;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case IRIParser.UCSCHAR:
                            case IRIParser.D0:
                            case IRIParser.D1:
                            case IRIParser.D2:
                            case IRIParser.D3:
                            case IRIParser.D4:
                            case IRIParser.D5:
                            case IRIParser.D6:
                            case IRIParser.D7:
                            case IRIParser.D8:
                            case IRIParser.D9:
                            case IRIParser.A:
                            case IRIParser.B:
                            case IRIParser.C:
                            case IRIParser.D:
                            case IRIParser.E:
                            case IRIParser.F:
                            case IRIParser.G:
                            case IRIParser.H:
                            case IRIParser.I:
                            case IRIParser.J:
                            case IRIParser.K:
                            case IRIParser.L:
                            case IRIParser.M:
                            case IRIParser.N:
                            case IRIParser.O:
                            case IRIParser.P:
                            case IRIParser.Q:
                            case IRIParser.R:
                            case IRIParser.S:
                            case IRIParser.T:
                            case IRIParser.U:
                            case IRIParser.V:
                            case IRIParser.W:
                            case IRIParser.X:
                            case IRIParser.Y:
                            case IRIParser.Z:
                            case IRIParser.COL:
                            case IRIParser.DOT:
                            case IRIParser.PERCENT:
                            case IRIParser.HYPHEN:
                            case IRIParser.TILDE:
                            case IRIParser.USCORE:
                            case IRIParser.EXCL:
                            case IRIParser.DOLLAR:
                            case IRIParser.AMP:
                            case IRIParser.SQUOTE:
                            case IRIParser.OPAREN:
                            case IRIParser.CPAREN:
                            case IRIParser.STAR:
                            case IRIParser.PLUS:
                            case IRIParser.COMMA:
                            case IRIParser.SCOL:
                            case IRIParser.EQUALS:
                            case IRIParser.AT:
                                {
                                    this.state = 236;
                                    this.ipchar();
                                }
                                break;
                            case IRIParser.IPRIVATE:
                            case IRIParser.FSLASH:
                            case IRIParser.QMARK:
                                {
                                    this.state = 237;
                                    _la = this._input.LA(1);
                                    if (!(_la === IRIParser.IPRIVATE || _la === IRIParser.FSLASH || _la === IRIParser.QMARK)) {
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
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 242;
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
    IRIParser.prototype.ifragment = function () {
        var _localctx = new IfragmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, IRIParser.RULE_ifragment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.FSLASH - 32)) | (1 << (IRIParser.QMARK - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
                    {
                        this.state = 245;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case IRIParser.UCSCHAR:
                            case IRIParser.D0:
                            case IRIParser.D1:
                            case IRIParser.D2:
                            case IRIParser.D3:
                            case IRIParser.D4:
                            case IRIParser.D5:
                            case IRIParser.D6:
                            case IRIParser.D7:
                            case IRIParser.D8:
                            case IRIParser.D9:
                            case IRIParser.A:
                            case IRIParser.B:
                            case IRIParser.C:
                            case IRIParser.D:
                            case IRIParser.E:
                            case IRIParser.F:
                            case IRIParser.G:
                            case IRIParser.H:
                            case IRIParser.I:
                            case IRIParser.J:
                            case IRIParser.K:
                            case IRIParser.L:
                            case IRIParser.M:
                            case IRIParser.N:
                            case IRIParser.O:
                            case IRIParser.P:
                            case IRIParser.Q:
                            case IRIParser.R:
                            case IRIParser.S:
                            case IRIParser.T:
                            case IRIParser.U:
                            case IRIParser.V:
                            case IRIParser.W:
                            case IRIParser.X:
                            case IRIParser.Y:
                            case IRIParser.Z:
                            case IRIParser.COL:
                            case IRIParser.DOT:
                            case IRIParser.PERCENT:
                            case IRIParser.HYPHEN:
                            case IRIParser.TILDE:
                            case IRIParser.USCORE:
                            case IRIParser.EXCL:
                            case IRIParser.DOLLAR:
                            case IRIParser.AMP:
                            case IRIParser.SQUOTE:
                            case IRIParser.OPAREN:
                            case IRIParser.CPAREN:
                            case IRIParser.STAR:
                            case IRIParser.PLUS:
                            case IRIParser.COMMA:
                            case IRIParser.SCOL:
                            case IRIParser.EQUALS:
                            case IRIParser.AT:
                                {
                                    this.state = 243;
                                    this.ipchar();
                                }
                                break;
                            case IRIParser.FSLASH:
                            case IRIParser.QMARK:
                                {
                                    this.state = 244;
                                    _la = this._input.LA(1);
                                    if (!(_la === IRIParser.FSLASH || _la === IRIParser.QMARK)) {
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
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 249;
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
    IRIParser.prototype.iunreserved = function () {
        var _localctx = new IunreservedContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, IRIParser.RULE_iunreserved);
        var _la;
        try {
            this.state = 253;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case IRIParser.A:
                case IRIParser.B:
                case IRIParser.C:
                case IRIParser.D:
                case IRIParser.E:
                case IRIParser.F:
                case IRIParser.G:
                case IRIParser.H:
                case IRIParser.I:
                case IRIParser.J:
                case IRIParser.K:
                case IRIParser.L:
                case IRIParser.M:
                case IRIParser.N:
                case IRIParser.O:
                case IRIParser.P:
                case IRIParser.Q:
                case IRIParser.R:
                case IRIParser.S:
                case IRIParser.T:
                case IRIParser.U:
                case IRIParser.V:
                case IRIParser.W:
                case IRIParser.X:
                case IRIParser.Y:
                case IRIParser.Z:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 250;
                        this.alpha();
                    }
                    break;
                case IRIParser.D0:
                case IRIParser.D1:
                case IRIParser.D2:
                case IRIParser.D3:
                case IRIParser.D4:
                case IRIParser.D5:
                case IRIParser.D6:
                case IRIParser.D7:
                case IRIParser.D8:
                case IRIParser.D9:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 251;
                        this.digit();
                    }
                    break;
                case IRIParser.UCSCHAR:
                case IRIParser.DOT:
                case IRIParser.HYPHEN:
                case IRIParser.TILDE:
                case IRIParser.USCORE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 252;
                        _la = this._input.LA(1);
                        if (!(_la === IRIParser.UCSCHAR || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.TILDE - 41)) | (1 << (IRIParser.USCORE - 41)))) !== 0))) {
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
    IRIParser.prototype.scheme = function () {
        var _localctx = new SchemeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, IRIParser.RULE_scheme);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.alpha();
                this.state = 261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.PLUS - 32)))) !== 0)) {
                    {
                        this.state = 259;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case IRIParser.A:
                            case IRIParser.B:
                            case IRIParser.C:
                            case IRIParser.D:
                            case IRIParser.E:
                            case IRIParser.F:
                            case IRIParser.G:
                            case IRIParser.H:
                            case IRIParser.I:
                            case IRIParser.J:
                            case IRIParser.K:
                            case IRIParser.L:
                            case IRIParser.M:
                            case IRIParser.N:
                            case IRIParser.O:
                            case IRIParser.P:
                            case IRIParser.Q:
                            case IRIParser.R:
                            case IRIParser.S:
                            case IRIParser.T:
                            case IRIParser.U:
                            case IRIParser.V:
                            case IRIParser.W:
                            case IRIParser.X:
                            case IRIParser.Y:
                            case IRIParser.Z:
                                {
                                    this.state = 256;
                                    this.alpha();
                                }
                                break;
                            case IRIParser.D0:
                            case IRIParser.D1:
                            case IRIParser.D2:
                            case IRIParser.D3:
                            case IRIParser.D4:
                            case IRIParser.D5:
                            case IRIParser.D6:
                            case IRIParser.D7:
                            case IRIParser.D8:
                            case IRIParser.D9:
                                {
                                    this.state = 257;
                                    this.digit();
                                }
                                break;
                            case IRIParser.DOT:
                            case IRIParser.HYPHEN:
                            case IRIParser.PLUS:
                                {
                                    this.state = 258;
                                    _la = this._input.LA(1);
                                    if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.PLUS - 41)))) !== 0))) {
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
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 263;
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
    IRIParser.prototype.port = function () {
        var _localctx = new PortContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, IRIParser.RULE_port);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 267;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9))) !== 0)) {
                    {
                        {
                            this.state = 264;
                            this.digit();
                        }
                    }
                    this.state = 269;
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
    IRIParser.prototype.ip_literal = function () {
        var _localctx = new Ip_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, IRIParser.RULE_ip_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this.match(IRIParser.OBRACK);
                this.state = 273;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case IRIParser.D0:
                    case IRIParser.D1:
                    case IRIParser.D2:
                    case IRIParser.D3:
                    case IRIParser.D4:
                    case IRIParser.D5:
                    case IRIParser.D6:
                    case IRIParser.D7:
                    case IRIParser.D8:
                    case IRIParser.D9:
                    case IRIParser.A:
                    case IRIParser.B:
                    case IRIParser.C:
                    case IRIParser.D:
                    case IRIParser.E:
                    case IRIParser.F:
                    case IRIParser.COL2:
                        {
                            this.state = 271;
                            this.ip_v6_address();
                        }
                        break;
                    case IRIParser.V:
                        {
                            this.state = 272;
                            this.ip_v_future();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 275;
                this.match(IRIParser.CBRACK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    IRIParser.prototype.ip_v_future = function () {
        var _localctx = new Ip_v_futureContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, IRIParser.RULE_ip_v_future);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 277;
                this.match(IRIParser.V);
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 278;
                            this.hexdig();
                        }
                    }
                    this.state = 281;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0));
                this.state = 283;
                this.match(IRIParser.DOT);
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 287;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case IRIParser.D0:
                            case IRIParser.D1:
                            case IRIParser.D2:
                            case IRIParser.D3:
                            case IRIParser.D4:
                            case IRIParser.D5:
                            case IRIParser.D6:
                            case IRIParser.D7:
                            case IRIParser.D8:
                            case IRIParser.D9:
                            case IRIParser.A:
                            case IRIParser.B:
                            case IRIParser.C:
                            case IRIParser.D:
                            case IRIParser.E:
                            case IRIParser.F:
                            case IRIParser.G:
                            case IRIParser.H:
                            case IRIParser.I:
                            case IRIParser.J:
                            case IRIParser.K:
                            case IRIParser.L:
                            case IRIParser.M:
                            case IRIParser.N:
                            case IRIParser.O:
                            case IRIParser.P:
                            case IRIParser.Q:
                            case IRIParser.R:
                            case IRIParser.S:
                            case IRIParser.T:
                            case IRIParser.U:
                            case IRIParser.V:
                            case IRIParser.W:
                            case IRIParser.X:
                            case IRIParser.Y:
                            case IRIParser.Z:
                            case IRIParser.DOT:
                            case IRIParser.HYPHEN:
                            case IRIParser.TILDE:
                            case IRIParser.USCORE:
                                {
                                    this.state = 284;
                                    this.unreserved();
                                }
                                break;
                            case IRIParser.EXCL:
                            case IRIParser.DOLLAR:
                            case IRIParser.AMP:
                            case IRIParser.SQUOTE:
                            case IRIParser.OPAREN:
                            case IRIParser.CPAREN:
                            case IRIParser.STAR:
                            case IRIParser.PLUS:
                            case IRIParser.COMMA:
                            case IRIParser.SCOL:
                            case IRIParser.EQUALS:
                                {
                                    this.state = 285;
                                    this.sub_delims();
                                }
                                break;
                            case IRIParser.COL:
                                {
                                    this.state = 286;
                                    this.match(IRIParser.COL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 289;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    IRIParser.prototype.ip_v6_address = function () {
        var _localctx = new Ip_v6_addressContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, IRIParser.RULE_ip_v6_address);
        var _la;
        try {
            this.state = 481;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 291;
                        this.h16();
                        this.state = 292;
                        this.match(IRIParser.COL);
                        this.state = 293;
                        this.h16();
                        this.state = 294;
                        this.match(IRIParser.COL);
                        this.state = 295;
                        this.h16();
                        this.state = 296;
                        this.match(IRIParser.COL);
                        this.state = 297;
                        this.h16();
                        this.state = 298;
                        this.match(IRIParser.COL);
                        this.state = 299;
                        this.h16();
                        this.state = 300;
                        this.match(IRIParser.COL);
                        this.state = 301;
                        this.h16();
                        this.state = 302;
                        this.match(IRIParser.COL);
                        this.state = 303;
                        this.ls32();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 305;
                        this.match(IRIParser.COL2);
                        this.state = 306;
                        this.h16();
                        this.state = 307;
                        this.match(IRIParser.COL);
                        this.state = 308;
                        this.h16();
                        this.state = 309;
                        this.match(IRIParser.COL);
                        this.state = 310;
                        this.h16();
                        this.state = 311;
                        this.match(IRIParser.COL);
                        this.state = 312;
                        this.h16();
                        this.state = 313;
                        this.match(IRIParser.COL);
                        this.state = 314;
                        this.h16();
                        this.state = 315;
                        this.match(IRIParser.COL);
                        this.state = 316;
                        this.ls32();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 319;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
                            {
                                this.state = 318;
                                this.h16();
                            }
                        }
                        this.state = 321;
                        this.match(IRIParser.COL2);
                        this.state = 322;
                        this.h16();
                        this.state = 323;
                        this.match(IRIParser.COL);
                        this.state = 324;
                        this.h16();
                        this.state = 325;
                        this.match(IRIParser.COL);
                        this.state = 326;
                        this.h16();
                        this.state = 327;
                        this.match(IRIParser.COL);
                        this.state = 328;
                        this.h16();
                        this.state = 329;
                        this.match(IRIParser.COL);
                        this.state = 330;
                        this.ls32();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 338;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
                            {
                                this.state = 335;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 332;
                                            this.h16();
                                            this.state = 333;
                                            this.match(IRIParser.COL);
                                        }
                                        break;
                                }
                                this.state = 337;
                                this.h16();
                            }
                        }
                        this.state = 340;
                        this.match(IRIParser.COL2);
                        this.state = 341;
                        this.h16();
                        this.state = 342;
                        this.match(IRIParser.COL);
                        this.state = 343;
                        this.h16();
                        this.state = 344;
                        this.match(IRIParser.COL);
                        this.state = 345;
                        this.h16();
                        this.state = 346;
                        this.match(IRIParser.COL);
                        this.state = 347;
                        this.ls32();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 360;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
                            {
                                this.state = 357;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 352;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 349;
                                                        this.h16();
                                                        this.state = 350;
                                                        this.match(IRIParser.COL);
                                                    }
                                                    break;
                                            }
                                            this.state = 354;
                                            this.h16();
                                            this.state = 355;
                                            this.match(IRIParser.COL);
                                        }
                                        break;
                                }
                                this.state = 359;
                                this.h16();
                            }
                        }
                        this.state = 362;
                        this.match(IRIParser.COL2);
                        this.state = 363;
                        this.h16();
                        this.state = 364;
                        this.match(IRIParser.COL);
                        this.state = 365;
                        this.h16();
                        this.state = 366;
                        this.match(IRIParser.COL);
                        this.state = 367;
                        this.ls32();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 385;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
                            {
                                this.state = 382;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 377;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 372;
                                                        this._errHandler.sync(this);
                                                        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                                                            case 1:
                                                                {
                                                                    this.state = 369;
                                                                    this.h16();
                                                                    this.state = 370;
                                                                    this.match(IRIParser.COL);
                                                                }
                                                                break;
                                                        }
                                                        this.state = 374;
                                                        this.h16();
                                                        this.state = 375;
                                                        this.match(IRIParser.COL);
                                                    }
                                                    break;
                                            }
                                            this.state = 379;
                                            this.h16();
                                            this.state = 380;
                                            this.match(IRIParser.COL);
                                        }
                                        break;
                                }
                                this.state = 384;
                                this.h16();
                            }
                        }
                        this.state = 387;
                        this.match(IRIParser.COL2);
                        this.state = 388;
                        this.h16();
                        this.state = 389;
                        this.match(IRIParser.COL);
                        this.state = 390;
                        this.ls32();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 413;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
                            {
                                this.state = 410;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 405;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 400;
                                                        this._errHandler.sync(this);
                                                        switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                                                            case 1:
                                                                {
                                                                    this.state = 395;
                                                                    this._errHandler.sync(this);
                                                                    switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                                                                        case 1:
                                                                            {
                                                                                this.state = 392;
                                                                                this.h16();
                                                                                this.state = 393;
                                                                                this.match(IRIParser.COL);
                                                                            }
                                                                            break;
                                                                    }
                                                                    this.state = 397;
                                                                    this.h16();
                                                                    this.state = 398;
                                                                    this.match(IRIParser.COL);
                                                                }
                                                                break;
                                                        }
                                                        this.state = 402;
                                                        this.h16();
                                                        this.state = 403;
                                                        this.match(IRIParser.COL);
                                                    }
                                                    break;
                                            }
                                            this.state = 407;
                                            this.h16();
                                            this.state = 408;
                                            this.match(IRIParser.COL);
                                        }
                                        break;
                                }
                                this.state = 412;
                                this.h16();
                            }
                        }
                        this.state = 415;
                        this.match(IRIParser.COL2);
                        this.state = 416;
                        this.ls32();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 443;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
                            {
                                this.state = 440;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 435;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 430;
                                                        this._errHandler.sync(this);
                                                        switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                                            case 1:
                                                                {
                                                                    this.state = 425;
                                                                    this._errHandler.sync(this);
                                                                    switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                                                                        case 1:
                                                                            {
                                                                                this.state = 420;
                                                                                this._errHandler.sync(this);
                                                                                switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                                                                                    case 1:
                                                                                        {
                                                                                            this.state = 417;
                                                                                            this.h16();
                                                                                            this.state = 418;
                                                                                            this.match(IRIParser.COL);
                                                                                        }
                                                                                        break;
                                                                                }
                                                                                this.state = 422;
                                                                                this.h16();
                                                                                this.state = 423;
                                                                                this.match(IRIParser.COL);
                                                                            }
                                                                            break;
                                                                    }
                                                                    this.state = 427;
                                                                    this.h16();
                                                                    this.state = 428;
                                                                    this.match(IRIParser.COL);
                                                                }
                                                                break;
                                                        }
                                                        this.state = 432;
                                                        this.h16();
                                                        this.state = 433;
                                                        this.match(IRIParser.COL);
                                                    }
                                                    break;
                                            }
                                            this.state = 437;
                                            this.h16();
                                            this.state = 438;
                                            this.match(IRIParser.COL);
                                        }
                                        break;
                                }
                                this.state = 442;
                                this.h16();
                            }
                        }
                        this.state = 445;
                        this.match(IRIParser.COL2);
                        this.state = 446;
                        this.h16();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 478;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
                            {
                                this.state = 475;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 470;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 465;
                                                        this._errHandler.sync(this);
                                                        switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                                                            case 1:
                                                                {
                                                                    this.state = 460;
                                                                    this._errHandler.sync(this);
                                                                    switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                                                                        case 1:
                                                                            {
                                                                                this.state = 455;
                                                                                this._errHandler.sync(this);
                                                                                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                                                                                    case 1:
                                                                                        {
                                                                                            this.state = 450;
                                                                                            this._errHandler.sync(this);
                                                                                            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                                                                                                case 1:
                                                                                                    {
                                                                                                        this.state = 447;
                                                                                                        this.h16();
                                                                                                        this.state = 448;
                                                                                                        this.match(IRIParser.COL);
                                                                                                    }
                                                                                                    break;
                                                                                            }
                                                                                            this.state = 452;
                                                                                            this.h16();
                                                                                            this.state = 453;
                                                                                            this.match(IRIParser.COL);
                                                                                        }
                                                                                        break;
                                                                                }
                                                                                this.state = 457;
                                                                                this.h16();
                                                                                this.state = 458;
                                                                                this.match(IRIParser.COL);
                                                                            }
                                                                            break;
                                                                    }
                                                                    this.state = 462;
                                                                    this.h16();
                                                                    this.state = 463;
                                                                    this.match(IRIParser.COL);
                                                                }
                                                                break;
                                                        }
                                                        this.state = 467;
                                                        this.h16();
                                                        this.state = 468;
                                                        this.match(IRIParser.COL);
                                                    }
                                                    break;
                                            }
                                            this.state = 472;
                                            this.h16();
                                            this.state = 473;
                                            this.match(IRIParser.COL);
                                        }
                                        break;
                                }
                                this.state = 477;
                                this.h16();
                            }
                        }
                        this.state = 480;
                        this.match(IRIParser.COL2);
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
    IRIParser.prototype.h16 = function () {
        var _localctx = new H16Context(this._ctx, this.state);
        this.enterRule(_localctx, 58, IRIParser.RULE_h16);
        try {
            this.state = 496;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 483;
                        this.hexdig();
                        this.state = 484;
                        this.hexdig();
                        this.state = 485;
                        this.hexdig();
                        this.state = 486;
                        this.hexdig();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 488;
                        this.hexdig();
                        this.state = 489;
                        this.hexdig();
                        this.state = 490;
                        this.hexdig();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 492;
                        this.hexdig();
                        this.state = 493;
                        this.hexdig();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 495;
                        this.hexdig();
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
    IRIParser.prototype.ls32 = function () {
        var _localctx = new Ls32Context(this._ctx, this.state);
        this.enterRule(_localctx, 60, IRIParser.RULE_ls32);
        try {
            this.state = 503;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 498;
                        this.h16();
                        this.state = 499;
                        this.match(IRIParser.COL);
                        this.state = 500;
                        this.h16();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 502;
                        this.ip_v4_address();
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
    IRIParser.prototype.ip_v4_address = function () {
        var _localctx = new Ip_v4_addressContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, IRIParser.RULE_ip_v4_address);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
                this.dec_octet();
                this.state = 506;
                this.match(IRIParser.DOT);
                this.state = 507;
                this.dec_octet();
                this.state = 508;
                this.match(IRIParser.DOT);
                this.state = 509;
                this.dec_octet();
                this.state = 510;
                this.match(IRIParser.DOT);
                this.state = 511;
                this.dec_octet();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    IRIParser.prototype.dec_octet = function () {
        var _localctx = new Dec_octetContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, IRIParser.RULE_dec_octet);
        var _la;
        try {
            this.state = 527;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 513;
                        this.digit();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 514;
                        this.non_zero_digit();
                        this.state = 515;
                        this.digit();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 517;
                        this.match(IRIParser.D1);
                        this.state = 518;
                        this.digit();
                        this.state = 519;
                        this.digit();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 521;
                        this.match(IRIParser.D2);
                        this.state = 522;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 523;
                        this.digit();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 524;
                        this.match(IRIParser.D2);
                        this.state = 525;
                        this.match(IRIParser.D5);
                        this.state = 526;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5))) !== 0))) {
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
    IRIParser.prototype.pct_encoded = function () {
        var _localctx = new Pct_encodedContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, IRIParser.RULE_pct_encoded);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 529;
                this.match(IRIParser.PERCENT);
                this.state = 530;
                this.hexdig();
                this.state = 531;
                this.hexdig();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
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
    IRIParser.prototype.unreserved = function () {
        var _localctx = new UnreservedContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, IRIParser.RULE_unreserved);
        var _la;
        try {
            this.state = 536;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case IRIParser.A:
                case IRIParser.B:
                case IRIParser.C:
                case IRIParser.D:
                case IRIParser.E:
                case IRIParser.F:
                case IRIParser.G:
                case IRIParser.H:
                case IRIParser.I:
                case IRIParser.J:
                case IRIParser.K:
                case IRIParser.L:
                case IRIParser.M:
                case IRIParser.N:
                case IRIParser.O:
                case IRIParser.P:
                case IRIParser.Q:
                case IRIParser.R:
                case IRIParser.S:
                case IRIParser.T:
                case IRIParser.U:
                case IRIParser.V:
                case IRIParser.W:
                case IRIParser.X:
                case IRIParser.Y:
                case IRIParser.Z:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 533;
                        this.alpha();
                    }
                    break;
                case IRIParser.D0:
                case IRIParser.D1:
                case IRIParser.D2:
                case IRIParser.D3:
                case IRIParser.D4:
                case IRIParser.D5:
                case IRIParser.D6:
                case IRIParser.D7:
                case IRIParser.D8:
                case IRIParser.D9:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 534;
                        this.digit();
                    }
                    break;
                case IRIParser.DOT:
                case IRIParser.HYPHEN:
                case IRIParser.TILDE:
                case IRIParser.USCORE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 535;
                        _la = this._input.LA(1);
                        if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.TILDE - 41)) | (1 << (IRIParser.USCORE - 41)))) !== 0))) {
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
    IRIParser.prototype.reserved = function () {
        var _localctx = new ReservedContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, IRIParser.RULE_reserved);
        try {
            this.state = 540;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case IRIParser.COL:
                case IRIParser.FSLASH:
                case IRIParser.QMARK:
                case IRIParser.HASH:
                case IRIParser.OBRACK:
                case IRIParser.CBRACK:
                case IRIParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 538;
                        this.gen_delims();
                    }
                    break;
                case IRIParser.EXCL:
                case IRIParser.DOLLAR:
                case IRIParser.AMP:
                case IRIParser.SQUOTE:
                case IRIParser.OPAREN:
                case IRIParser.CPAREN:
                case IRIParser.STAR:
                case IRIParser.PLUS:
                case IRIParser.COMMA:
                case IRIParser.SCOL:
                case IRIParser.EQUALS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 539;
                        this.sub_delims();
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
    IRIParser.prototype.gen_delims = function () {
        var _localctx = new Gen_delimsContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, IRIParser.RULE_gen_delims);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 542;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (IRIParser.COL - 40)) | (1 << (IRIParser.FSLASH - 40)) | (1 << (IRIParser.QMARK - 40)) | (1 << (IRIParser.HASH - 40)) | (1 << (IRIParser.OBRACK - 40)) | (1 << (IRIParser.CBRACK - 40)) | (1 << (IRIParser.AT - 40)))) !== 0))) {
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
    IRIParser.prototype.sub_delims = function () {
        var _localctx = new Sub_delimsContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, IRIParser.RULE_sub_delims);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 544;
                _la = this._input.LA(1);
                if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (IRIParser.EXCL - 46)) | (1 << (IRIParser.DOLLAR - 46)) | (1 << (IRIParser.AMP - 46)) | (1 << (IRIParser.SQUOTE - 46)) | (1 << (IRIParser.OPAREN - 46)) | (1 << (IRIParser.CPAREN - 46)) | (1 << (IRIParser.STAR - 46)) | (1 << (IRIParser.PLUS - 46)) | (1 << (IRIParser.COMMA - 46)) | (1 << (IRIParser.SCOL - 46)) | (1 << (IRIParser.EQUALS - 46)))) !== 0))) {
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
    IRIParser.prototype.alpha = function () {
        var _localctx = new AlphaContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, IRIParser.RULE_alpha);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 546;
                _la = this._input.LA(1);
                if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (IRIParser.A - 13)) | (1 << (IRIParser.B - 13)) | (1 << (IRIParser.C - 13)) | (1 << (IRIParser.D - 13)) | (1 << (IRIParser.E - 13)) | (1 << (IRIParser.F - 13)) | (1 << (IRIParser.G - 13)) | (1 << (IRIParser.H - 13)) | (1 << (IRIParser.I - 13)) | (1 << (IRIParser.J - 13)) | (1 << (IRIParser.K - 13)) | (1 << (IRIParser.L - 13)) | (1 << (IRIParser.M - 13)) | (1 << (IRIParser.N - 13)) | (1 << (IRIParser.O - 13)) | (1 << (IRIParser.P - 13)) | (1 << (IRIParser.Q - 13)) | (1 << (IRIParser.R - 13)) | (1 << (IRIParser.S - 13)) | (1 << (IRIParser.T - 13)) | (1 << (IRIParser.U - 13)) | (1 << (IRIParser.V - 13)) | (1 << (IRIParser.W - 13)) | (1 << (IRIParser.X - 13)) | (1 << (IRIParser.Y - 13)) | (1 << (IRIParser.Z - 13)))) !== 0))) {
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
    IRIParser.prototype.hexdig = function () {
        var _localctx = new HexdigContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, IRIParser.RULE_hexdig);
        var _la;
        try {
            this.state = 550;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case IRIParser.D0:
                case IRIParser.D1:
                case IRIParser.D2:
                case IRIParser.D3:
                case IRIParser.D4:
                case IRIParser.D5:
                case IRIParser.D6:
                case IRIParser.D7:
                case IRIParser.D8:
                case IRIParser.D9:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 548;
                        this.digit();
                    }
                    break;
                case IRIParser.A:
                case IRIParser.B:
                case IRIParser.C:
                case IRIParser.D:
                case IRIParser.E:
                case IRIParser.F:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 549;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0))) {
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
    IRIParser.prototype.digit = function () {
        var _localctx = new DigitContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, IRIParser.RULE_digit);
        try {
            this.state = 554;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case IRIParser.D0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 552;
                        this.match(IRIParser.D0);
                    }
                    break;
                case IRIParser.D1:
                case IRIParser.D2:
                case IRIParser.D3:
                case IRIParser.D4:
                case IRIParser.D5:
                case IRIParser.D6:
                case IRIParser.D7:
                case IRIParser.D8:
                case IRIParser.D9:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 553;
                        this.non_zero_digit();
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
    IRIParser.prototype.non_zero_digit = function () {
        var _localctx = new Non_zero_digitContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, IRIParser.RULE_non_zero_digit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 556;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9))) !== 0))) {
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
    Object.defineProperty(IRIParser, "_ATN", {
        get: function () {
            if (!IRIParser.__ATN) {
                IRIParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(IRIParser._serializedATN));
            }
            return IRIParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    IRIParser.UCSCHAR = 1;
    IRIParser.IPRIVATE = 2;
    IRIParser.D0 = 3;
    IRIParser.D1 = 4;
    IRIParser.D2 = 5;
    IRIParser.D3 = 6;
    IRIParser.D4 = 7;
    IRIParser.D5 = 8;
    IRIParser.D6 = 9;
    IRIParser.D7 = 10;
    IRIParser.D8 = 11;
    IRIParser.D9 = 12;
    IRIParser.A = 13;
    IRIParser.B = 14;
    IRIParser.C = 15;
    IRIParser.D = 16;
    IRIParser.E = 17;
    IRIParser.F = 18;
    IRIParser.G = 19;
    IRIParser.H = 20;
    IRIParser.I = 21;
    IRIParser.J = 22;
    IRIParser.K = 23;
    IRIParser.L = 24;
    IRIParser.M = 25;
    IRIParser.N = 26;
    IRIParser.O = 27;
    IRIParser.P = 28;
    IRIParser.Q = 29;
    IRIParser.R = 30;
    IRIParser.S = 31;
    IRIParser.T = 32;
    IRIParser.U = 33;
    IRIParser.V = 34;
    IRIParser.W = 35;
    IRIParser.X = 36;
    IRIParser.Y = 37;
    IRIParser.Z = 38;
    IRIParser.COL2 = 39;
    IRIParser.COL = 40;
    IRIParser.DOT = 41;
    IRIParser.PERCENT = 42;
    IRIParser.HYPHEN = 43;
    IRIParser.TILDE = 44;
    IRIParser.USCORE = 45;
    IRIParser.EXCL = 46;
    IRIParser.DOLLAR = 47;
    IRIParser.AMP = 48;
    IRIParser.SQUOTE = 49;
    IRIParser.OPAREN = 50;
    IRIParser.CPAREN = 51;
    IRIParser.STAR = 52;
    IRIParser.PLUS = 53;
    IRIParser.COMMA = 54;
    IRIParser.SCOL = 55;
    IRIParser.EQUALS = 56;
    IRIParser.FSLASH2 = 57;
    IRIParser.FSLASH = 58;
    IRIParser.QMARK = 59;
    IRIParser.HASH = 60;
    IRIParser.OBRACK = 61;
    IRIParser.CBRACK = 62;
    IRIParser.AT = 63;
    IRIParser.RULE_parse = 0;
    IRIParser.RULE_iri = 1;
    IRIParser.RULE_ihier_part = 2;
    IRIParser.RULE_iri_reference = 3;
    IRIParser.RULE_absolute_iri = 4;
    IRIParser.RULE_irelative_ref = 5;
    IRIParser.RULE_irelative_part = 6;
    IRIParser.RULE_iauthority = 7;
    IRIParser.RULE_iuserinfo = 8;
    IRIParser.RULE_ihost = 9;
    IRIParser.RULE_ireg_name = 10;
    IRIParser.RULE_ipath = 11;
    IRIParser.RULE_ipath_abempty = 12;
    IRIParser.RULE_ipath_absolute = 13;
    IRIParser.RULE_ipath_noscheme = 14;
    IRIParser.RULE_ipath_rootless = 15;
    IRIParser.RULE_ipath_empty = 16;
    IRIParser.RULE_isegment = 17;
    IRIParser.RULE_isegment_nz = 18;
    IRIParser.RULE_isegment_nz_nc = 19;
    IRIParser.RULE_ipchar = 20;
    IRIParser.RULE_iquery = 21;
    IRIParser.RULE_ifragment = 22;
    IRIParser.RULE_iunreserved = 23;
    IRIParser.RULE_scheme = 24;
    IRIParser.RULE_port = 25;
    IRIParser.RULE_ip_literal = 26;
    IRIParser.RULE_ip_v_future = 27;
    IRIParser.RULE_ip_v6_address = 28;
    IRIParser.RULE_h16 = 29;
    IRIParser.RULE_ls32 = 30;
    IRIParser.RULE_ip_v4_address = 31;
    IRIParser.RULE_dec_octet = 32;
    IRIParser.RULE_pct_encoded = 33;
    IRIParser.RULE_unreserved = 34;
    IRIParser.RULE_reserved = 35;
    IRIParser.RULE_gen_delims = 36;
    IRIParser.RULE_sub_delims = 37;
    IRIParser.RULE_alpha = 38;
    IRIParser.RULE_hexdig = 39;
    IRIParser.RULE_digit = 40;
    IRIParser.RULE_non_zero_digit = 41;
    // tslint:disable:no-trailing-whitespace
    IRIParser.ruleNames = [
        "parse", "iri", "ihier_part", "iri_reference", "absolute_iri", "irelative_ref",
        "irelative_part", "iauthority", "iuserinfo", "ihost", "ireg_name", "ipath",
        "ipath_abempty", "ipath_absolute", "ipath_noscheme", "ipath_rootless",
        "ipath_empty", "isegment", "isegment_nz", "isegment_nz_nc", "ipchar",
        "iquery", "ifragment", "iunreserved", "scheme", "port", "ip_literal",
        "ip_v_future", "ip_v6_address", "h16", "ls32", "ip_v4_address", "dec_octet",
        "pct_encoded", "unreserved", "reserved", "gen_delims", "sub_delims", "alpha",
        "hexdig", "digit", "non_zero_digit",
    ];
    IRIParser._LITERAL_NAMES = [
        undefined, undefined, undefined, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'",
        "'6'", "'7'", "'8'", "'9'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'::'", "':'", "'.'", "'%'", "'-'", "'~'", "'_'", "'!'", "'$'",
        "'&'", "'''", "'('", "')'", "'*'", "'+'", "','", "';'", "'='", "'//'",
        "'/'", "'?'", "'#'", "'['", "']'", "'@'",
    ];
    IRIParser._SYMBOLIC_NAMES = [
        undefined, "UCSCHAR", "IPRIVATE", "D0", "D1", "D2", "D3", "D4", "D5",
        "D6", "D7", "D8", "D9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
        "Y", "Z", "COL2", "COL", "DOT", "PERCENT", "HYPHEN", "TILDE", "USCORE",
        "EXCL", "DOLLAR", "AMP", "SQUOTE", "OPAREN", "CPAREN", "STAR", "PLUS",
        "COMMA", "SCOL", "EQUALS", "FSLASH2", "FSLASH", "QMARK", "HASH", "OBRACK",
        "CBRACK", "AT",
    ];
    IRIParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(IRIParser._LITERAL_NAMES, IRIParser._SYMBOLIC_NAMES, []);
    IRIParser._serializedATNSegments = 2;
    IRIParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u0231\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
        "_\n\x03\x03\x03\x03\x03\x05\x03c\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x05\x04l\n\x04\x03\x05\x03\x05\x05\x05p\n\x05" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06w\n\x06\x03\x07\x03\x07" +
        "\x03\x07\x05\x07|\n\x07\x03\x07\x03\x07\x05\x07\x80\n\x07\x03\b\x03\b" +
        "\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x89\n\b\x03\t\x03\t\x03\t\x05\t\x8E" +
        "\n\t\x03\t\x03\t\x03\t\x05\t\x93\n\t\x03\n\x03\n\x03\n\x03\n\x07\n\x99" +
        "\n\n\f\n\x0E\n\x9C\v\n\x03\v\x03\v\x03\v\x05\v\xA1\n\v\x03\f\x03\f\x03" +
        "\f\x07\f\xA6\n\f\f\f\x0E\f\xA9\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
        "\xB0\n\r\x03\x0E\x03\x0E\x07\x0E\xB4\n\x0E\f\x0E\x0E\x0E\xB7\v\x0E\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xBD\n\x0F\f\x0F\x0E\x0F\xC0\v\x0F" +
        "\x05\x0F\xC2\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xC7\n\x10\f\x10\x0E" +
        "\x10\xCA\v\x10\x03\x11\x03\x11\x03\x11\x07\x11\xCF\n\x11\f\x11\x0E\x11" +
        "\xD2\v\x11\x03\x12\x03\x12\x03\x13\x07\x13\xD7\n\x13\f\x13\x0E\x13\xDA" +
        "\v\x13\x03\x14\x06\x14\xDD\n\x14\r\x14\x0E\x14\xDE\x03\x15\x03\x15\x03" +
        "\x15\x03\x15\x06\x15\xE5\n\x15\r\x15\x0E\x15\xE6\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x05\x16\xED\n\x16\x03\x17\x03\x17\x07\x17\xF1\n\x17\f\x17\x0E" +
        "\x17\xF4\v\x17\x03\x18\x03\x18\x07\x18\xF8\n\x18\f\x18\x0E\x18\xFB\v\x18" +
        "\x03\x19\x03\x19\x03\x19\x05\x19\u0100\n\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
        "\x1A\x07\x1A\u0106\n\x1A\f\x1A\x0E\x1A\u0109\v\x1A\x03\x1B\x07\x1B\u010C" +
        "\n\x1B\f\x1B\x0E\x1B\u010F\v\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0114" +
        "\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x06\x1D\u011A\n\x1D\r\x1D\x0E\x1D" +
        "\u011B\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u0122\n\x1D\r\x1D\x0E\x1D" +
        "\u0123\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x05\x1E\u0142\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u0152\n\x1E\x03\x1E\x05\x1E\u0155\n\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u0163\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0168\n\x1E\x03" +
        "\x1E\x05\x1E\u016B\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0177\n\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u017C\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0181\n\x1E\x03" +
        "\x1E\x05\x1E\u0184\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x05\x1E\u018E\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0193" +
        "\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0198\n\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u019D\n\x1E\x03\x1E\x05\x1E\u01A0\n\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x05\x1E\u01A7\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
        "\u01AC\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01B1\n\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x05\x1E\u01B6\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01BB\n\x1E" +
        "\x03\x1E\x05\x1E\u01BE\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
        "\x1E\u01C5\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01CA\n\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x05\x1E\u01CF\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01D4" +
        "\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01D9\n\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u01DE\n\x1E\x03\x1E\x05\x1E\u01E1\n\x1E\x03\x1E\x05\x1E\u01E4" +
        "\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
        "\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01F3\n\x1F\x03 \x03" +
        " \x03 \x03 \x03 \x05 \u01FA\n \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x03\"\x05\"\u0212\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x05" +
        "$\u021B\n$\x03%\x03%\x05%\u021F\n%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03" +
        ")\x03)\x05)\u0229\n)\x03*\x03*\x05*\u022D\n*\x03+\x03+\x03+\x02\x02\x02" +
        ",\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
        "F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02\x0F\x04\x02**AA\x04\x02\x04" +
        "\x04<=\x03\x02<=\x05\x02\x03\x03++-/\x05\x02++--77\x03\x02\x05\t\x03\x02" +
        "\x05\n\x04\x02++-/\x04\x02**<A\x03\x020:\x03\x02\x0F(\x03\x02\x0F\x14" +
        "\x03\x02\x06\x0E\x02\u026F\x02V\x03\x02\x02\x02\x04Y\x03\x02\x02\x02\x06" +
        "k\x03\x02\x02\x02\bo\x03\x02\x02\x02\nq\x03\x02\x02\x02\fx\x03\x02\x02" +
        "\x02\x0E\x88\x03\x02\x02\x02\x10\x8D\x03\x02\x02\x02\x12\x9A\x03\x02\x02" +
        "\x02\x14\xA0\x03\x02\x02\x02\x16\xA7\x03\x02\x02\x02\x18\xAF\x03\x02\x02" +
        "\x02\x1A\xB5\x03\x02\x02\x02\x1C\xB8\x03\x02\x02\x02\x1E\xC3\x03\x02\x02" +
        "\x02 \xCB\x03\x02\x02\x02\"\xD3\x03\x02\x02\x02$\xD8\x03\x02\x02\x02&" +
        "\xDC\x03\x02\x02\x02(\xE4\x03\x02\x02\x02*\xEC\x03\x02\x02\x02,\xF2\x03" +
        "\x02\x02\x02.\xF9\x03\x02\x02\x020\xFF\x03\x02\x02\x022\u0101\x03\x02" +
        "\x02\x024\u010D\x03\x02\x02\x026\u0110\x03\x02\x02\x028\u0117\x03\x02" +
        "\x02\x02:\u01E3\x03\x02\x02\x02<\u01F2\x03\x02\x02\x02>\u01F9\x03\x02" +
        "\x02\x02@\u01FB\x03\x02\x02\x02B\u0211\x03\x02\x02\x02D\u0213\x03\x02" +
        "\x02\x02F\u021A\x03\x02\x02\x02H\u021E\x03\x02\x02\x02J\u0220\x03\x02" +
        "\x02\x02L\u0222\x03\x02\x02\x02N\u0224\x03\x02\x02\x02P\u0228\x03\x02" +
        "\x02\x02R\u022C\x03\x02\x02\x02T\u022E\x03\x02\x02\x02VW\x05\x04\x03\x02" +
        "WX\x07\x02\x02\x03X\x03\x03\x02\x02\x02YZ\x052\x1A\x02Z[\x07*\x02\x02" +
        "[^\x05\x06\x04\x02\\]\x07=\x02\x02]_\x05,\x17\x02^\\\x03\x02\x02\x02^" +
        "_\x03\x02\x02\x02_b\x03\x02\x02\x02`a\x07>\x02\x02ac\x05.\x18\x02b`\x03" +
        "\x02\x02\x02bc\x03\x02\x02\x02c\x05\x03\x02\x02\x02de\x07;\x02\x02ef\x05" +
        "\x10\t\x02fg\x05\x1A\x0E\x02gl\x03\x02\x02\x02hl\x05\x1C\x0F\x02il\x05" +
        " \x11\x02jl\x05\"\x12\x02kd\x03\x02\x02\x02kh\x03\x02\x02\x02ki\x03\x02" +
        "\x02\x02kj\x03\x02\x02\x02l\x07\x03\x02\x02\x02mp\x05\x04\x03\x02np\x05" +
        "\f\x07\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\t\x03\x02\x02\x02qr\x05" +
        "2\x1A\x02rs\x07*\x02\x02sv\x05\x06\x04\x02tu\x07=\x02\x02uw\x05,\x17\x02" +
        "vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\v\x03\x02\x02\x02x{\x05\x0E\b\x02" +
        "yz\x07=\x02\x02z|\x05,\x17\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x7F" +
        "\x03\x02\x02\x02}~\x07>\x02\x02~\x80\x05.\x18\x02\x7F}\x03\x02\x02\x02" +
        "\x7F\x80\x03\x02\x02\x02\x80\r\x03\x02\x02\x02\x81\x82\x07;\x02\x02\x82" +
        "\x83\x05\x10\t\x02\x83\x84\x05\x1A\x0E\x02\x84\x89\x03\x02\x02\x02\x85" +
        "\x89\x05\x1C\x0F\x02\x86\x89\x05\x1E\x10\x02\x87\x89\x05\"\x12\x02\x88" +
        "\x81\x03\x02\x02\x02\x88\x85\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88" +
        "\x87\x03\x02\x02\x02\x89\x0F\x03\x02\x02\x02\x8A\x8B\x05\x12\n\x02\x8B" +
        "\x8C\x07A\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D" +
        "\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x92\x05\x14\v\x02\x90" +
        "\x91\x07*\x02\x02\x91\x93\x054\x1B\x02\x92\x90\x03\x02\x02\x02\x92\x93" +
        "\x03\x02\x02\x02\x93\x11\x03\x02\x02\x02\x94\x99\x050\x19\x02\x95\x99" +
        "\x05D#\x02\x96\x99\x05L\'\x02\x97\x99\x07*\x02\x02\x98\x94\x03\x02\x02" +
        "\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x97\x03\x02\x02" +
        "\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02" +
        "\x02\x9B\x13\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\xA1\x056\x1C" +
        "\x02\x9E\xA1\x05@!\x02\x9F\xA1\x05\x16\f\x02\xA0\x9D\x03\x02\x02\x02\xA0" +
        "\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\x15\x03\x02\x02\x02\xA2" +
        "\xA6\x050\x19\x02\xA3\xA6\x05D#\x02\xA4\xA6\x05L\'\x02\xA5\xA2\x03\x02" +
        "\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03\x02" +
        "\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x17\x03\x02" +
        "\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xB0\x05\x1A\x0E\x02\xAB\xB0\x05\x1C" +
        "\x0F\x02\xAC\xB0\x05\x1E\x10\x02\xAD\xB0\x05 \x11\x02\xAE\xB0\x05\"\x12" +
        "\x02\xAF\xAA\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xAC\x03\x02\x02" +
        "\x02\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\x19\x03\x02\x02" +
        "\x02\xB1\xB2\x07<\x02\x02\xB2\xB4\x05$\x13\x02\xB3\xB1\x03\x02\x02\x02" +
        "\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02" +
        "\xB6\x1B\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xC1\x07<\x02\x02" +
        "\xB9\xBE\x05&\x14\x02\xBA\xBB\x07<\x02\x02\xBB\xBD\x05$\x13\x02\xBC\xBA" +
        "\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF" +
        "\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xB9" +
        "\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\x1D\x03\x02\x02\x02\xC3\xC8" +
        "\x05(\x15\x02\xC4\xC5\x07<\x02\x02\xC5\xC7\x05$\x13\x02\xC6\xC4\x03\x02" +
        "\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02" +
        "\x02\x02\xC9\x1F\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xD0\x05&" +
        "\x14\x02\xCC\xCD\x07<\x02\x02\xCD\xCF\x05$\x13\x02\xCE\xCC\x03\x02\x02" +
        "\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02" +
        "\x02\xD1!\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
        "\x02\xD4#\x03\x02\x02\x02\xD5\xD7\x05*\x16\x02\xD6\xD5\x03\x02\x02\x02" +
        "\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02" +
        "\xD9%\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDD\x05*\x16\x02\xDC" +
        "\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE" +
        "\xDF\x03\x02\x02\x02\xDF\'\x03\x02\x02\x02\xE0\xE5\x050\x19\x02\xE1\xE5" +
        "\x05D#\x02\xE2\xE5\x05L\'\x02\xE3\xE5\x07A\x02\x02\xE4\xE0\x03\x02\x02" +
        "\x02\xE4\xE1\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02\x02" +
        "\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02" +
        "\x02\xE7)\x03\x02\x02\x02\xE8\xED\x050\x19\x02\xE9\xED\x05D#\x02\xEA\xED" +
        "\x05L\'\x02\xEB\xED\t\x02\x02\x02\xEC\xE8\x03\x02\x02\x02\xEC\xE9\x03" +
        "\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED+\x03" +
        "\x02\x02\x02\xEE\xF1\x05*\x16\x02\xEF\xF1\t\x03\x02\x02\xF0\xEE\x03\x02" +
        "\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02" +
        "\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3-\x03\x02\x02\x02\xF4\xF2\x03\x02" +
        "\x02\x02\xF5\xF8\x05*\x16\x02\xF6\xF8\t\x04\x02\x02\xF7\xF5\x03\x02\x02" +
        "\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02" +
        "\x02\xF9\xFA\x03\x02\x02\x02\xFA/\x03\x02\x02\x02\xFB\xF9\x03\x02\x02" +
        "\x02\xFC\u0100\x05N(\x02\xFD\u0100\x05R*\x02\xFE\u0100\t\x05\x02\x02\xFF" +
        "\xFC\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100" +
        "1\x03\x02\x02\x02\u0101\u0107\x05N(\x02\u0102\u0106\x05N(\x02\u0103\u0106" +
        "\x05R*\x02\u0104\u0106\t\x06\x02\x02\u0105\u0102\x03\x02\x02\x02\u0105" +
        "\u0103\x03\x02\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02" +
        "\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108" +
        "3\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010C\x05R*\x02\u010B" +
        "\u010A\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02" +
        "\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E5\x03\x02\x02\x02\u010F\u010D" +
        "\x03\x02\x02\x02\u0110\u0113\x07?\x02\x02\u0111\u0114\x05:\x1E\x02\u0112" +
        "\u0114\x058\x1D\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02\x02" +
        "\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x07@\x02\x02\u01167\x03\x02" +
        "\x02\x02\u0117\u0119\x07$\x02\x02\u0118\u011A\x05P)\x02\u0119\u0118\x03" +
        "\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B" +
        "\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0121\x07+\x02" +
        "\x02\u011E\u0122\x05F$\x02\u011F\u0122\x05L\'\x02\u0120\u0122\x07*\x02" +
        "\x02\u0121\u011E\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0120" +
        "\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02" +
        "\u0123\u0124\x03\x02\x02\x02\u01249\x03\x02\x02\x02\u0125\u0126\x05<\x1F" +
        "\x02\u0126\u0127\x07*\x02\x02\u0127\u0128\x05<\x1F\x02\u0128\u0129\x07" +
        "*\x02\x02\u0129\u012A\x05<\x1F\x02\u012A\u012B\x07*\x02\x02\u012B\u012C" +
        "\x05<\x1F\x02\u012C\u012D\x07*\x02\x02\u012D\u012E\x05<\x1F\x02\u012E" +
        "\u012F\x07*\x02\x02\u012F\u0130\x05<\x1F\x02\u0130\u0131\x07*\x02\x02" +
        "\u0131\u0132\x05> \x02\u0132\u01E4\x03\x02\x02\x02\u0133\u0134\x07)\x02" +
        "\x02\u0134\u0135\x05<\x1F\x02\u0135\u0136\x07*\x02\x02\u0136\u0137\x05" +
        "<\x1F\x02\u0137\u0138\x07*\x02\x02\u0138\u0139\x05<\x1F\x02\u0139\u013A" +
        "\x07*\x02\x02\u013A\u013B\x05<\x1F\x02\u013B\u013C\x07*\x02\x02\u013C" +
        "\u013D\x05<\x1F\x02\u013D\u013E\x07*\x02\x02\u013E\u013F\x05> \x02\u013F" +
        "\u01E4\x03\x02\x02\x02\u0140\u0142\x05<\x1F\x02\u0141\u0140\x03\x02\x02" +
        "\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144" +
        "\x07)\x02\x02\u0144\u0145\x05<\x1F\x02\u0145\u0146\x07*\x02\x02\u0146" +
        "\u0147\x05<\x1F\x02\u0147\u0148\x07*\x02\x02\u0148\u0149\x05<\x1F\x02" +
        "\u0149\u014A\x07*\x02\x02\u014A\u014B\x05<\x1F\x02\u014B\u014C\x07*\x02" +
        "\x02\u014C\u014D\x05> \x02\u014D\u01E4\x03\x02\x02\x02\u014E\u014F\x05" +
        "<\x1F\x02\u014F\u0150\x07*\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014E" +
        "\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
        "\u0153\u0155\x05<\x1F\x02\u0154\u0151\x03\x02\x02\x02\u0154\u0155\x03" +
        "\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x07)\x02\x02\u0157" +
        "\u0158\x05<\x1F\x02\u0158\u0159\x07*\x02\x02\u0159\u015A\x05<\x1F\x02" +
        "\u015A\u015B\x07*\x02\x02\u015B\u015C\x05<\x1F\x02\u015C\u015D\x07*\x02" +
        "\x02\u015D\u015E\x05> \x02\u015E\u01E4\x03\x02\x02\x02\u015F\u0160\x05" +
        "<\x1F\x02\u0160\u0161\x07*\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u015F" +
        "\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02" +
        "\u0164\u0165\x05<\x1F\x02\u0165\u0166\x07*\x02\x02\u0166\u0168\x03\x02" +
        "\x02\x02\u0167\u0162\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
        "\u0169\x03\x02\x02\x02\u0169\u016B\x05<\x1F\x02\u016A\u0167\x03\x02\x02" +
        "\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D" +
        "\x07)\x02\x02\u016D\u016E\x05<\x1F\x02\u016E\u016F\x07*\x02\x02\u016F" +
        "\u0170\x05<\x1F\x02\u0170\u0171\x07*\x02\x02\u0171\u0172\x05> \x02\u0172" +
        "\u01E4\x03\x02\x02\x02\u0173\u0174\x05<\x1F\x02\u0174\u0175\x07*\x02\x02" +
        "\u0175\u0177\x03\x02\x02\x02\u0176\u0173\x03\x02\x02\x02\u0176\u0177\x03" +
        "\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x05<\x1F\x02\u0179" +
        "\u017A\x07*\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0176\x03\x02\x02" +
        "\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E" +
        "\x05<\x1F\x02\u017E\u017F\x07*\x02\x02\u017F\u0181\x03\x02\x02\x02\u0180" +
        "\u017B\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x03\x02" +
        "\x02\x02\u0182\u0184\x05<\x1F\x02\u0183\u0180\x03\x02\x02\x02\u0183\u0184" +
        "\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x07)\x02\x02" +
        "\u0186\u0187\x05<\x1F\x02\u0187\u0188\x07*\x02\x02\u0188\u0189\x05> \x02" +
        "\u0189\u01E4\x03\x02\x02\x02\u018A\u018B\x05<\x1F\x02\u018B\u018C\x07" +
        "*\x02\x02\u018C\u018E\x03\x02\x02\x02\u018D\u018A\x03\x02\x02\x02\u018D" +
        "\u018E\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x05<\x1F" +
        "\x02\u0190\u0191\x07*\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u018D" +
        "\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
        "\u0194\u0195\x05<\x1F\x02\u0195\u0196\x07*\x02\x02\u0196\u0198\x03\x02" +
        "\x02\x02\u0197\u0192\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
        "\u0199\x03\x02\x02\x02\u0199\u019A\x05<\x1F\x02\u019A\u019B\x07*\x02\x02" +
        "\u019B\u019D\x03\x02\x02\x02\u019C\u0197\x03\x02\x02\x02\u019C\u019D\x03" +
        "\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A0\x05<\x1F\x02\u019F" +
        "\u019C\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02" +
        "\x02\x02\u01A1\u01A2\x07)\x02\x02\u01A2\u01E4\x05> \x02\u01A3\u01A4\x05" +
        "<\x1F\x02\u01A4\u01A5\x07*\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u01A3" +
        "\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02" +
        "\u01A8\u01A9\x05<\x1F\x02\u01A9\u01AA\x07*\x02\x02\u01AA\u01AC\x03\x02" +
        "\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
        "\u01AD\x03\x02\x02\x02\u01AD\u01AE\x05<\x1F\x02\u01AE\u01AF\x07*\x02\x02" +
        "\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01AB\x03\x02\x02\x02\u01B0\u01B1\x03" +
        "\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x05<\x1F\x02\u01B3" +
        "\u01B4\x07*\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B0\x03\x02\x02" +
        "\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8" +
        "\x05<\x1F\x02\u01B8\u01B9\x07*\x02\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA" +
        "\u01B5\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02" +
        "\x02\x02\u01BC\u01BE\x05<\x1F\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD\u01BE" +
        "\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x07)\x02\x02" +
        "\u01C0\u01E4\x05<\x1F\x02\u01C1\u01C2\x05<\x1F\x02\u01C2\u01C3\x07*\x02" +
        "\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C1\x03\x02\x02\x02\u01C4\u01C5" +
        "\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x05<\x1F\x02" +
        "\u01C7\u01C8\x07*\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01C4\x03" +
        "\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
        "\u01CC\x05<\x1F\x02\u01CC\u01CD\x07*\x02\x02\u01CD\u01CF\x03\x02\x02\x02" +
        "\u01CE\u01C9\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D0\x03" +
        "\x02\x02\x02\u01D0\u01D1\x05<\x1F\x02\u01D1\u01D2\x07*\x02\x02\u01D2\u01D4" +
        "\x03\x02\x02\x02\u01D3\u01CE\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02" +
        "\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x05<\x1F\x02\u01D6\u01D7\x07" +
        "*\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D3\x03\x02\x02\x02\u01D8" +
        "\u01D9\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x05<\x1F" +
        "\x02\u01DB\u01DC\x07*\x02\x02\u01DC\u01DE\x03\x02\x02\x02\u01DD\u01D8" +
        "\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
        "\u01DF\u01E1\x05<\x1F\x02\u01E0\u01DD\x03\x02\x02\x02\u01E0\u01E1\x03" +
        "\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E4\x07)\x02\x02\u01E3" +
        "\u0125\x03\x02\x02\x02\u01E3\u0133\x03\x02\x02\x02\u01E3\u0141\x03\x02" +
        "\x02\x02\u01E3\u0154\x03\x02\x02\x02\u01E3\u016A\x03\x02\x02\x02\u01E3" +
        "\u0183\x03\x02\x02\x02\u01E3\u019F\x03\x02\x02\x02\u01E3\u01BD\x03\x02" +
        "\x02\x02\u01E3\u01E0\x03\x02\x02\x02\u01E4;\x03\x02\x02\x02\u01E5\u01E6" +
        "\x05P)\x02\u01E6\u01E7\x05P)\x02\u01E7\u01E8\x05P)\x02\u01E8\u01E9\x05" +
        "P)\x02\u01E9\u01F3\x03\x02\x02\x02\u01EA\u01EB\x05P)\x02\u01EB\u01EC\x05" +
        "P)\x02\u01EC\u01ED\x05P)\x02\u01ED\u01F3\x03\x02\x02\x02\u01EE\u01EF\x05" +
        "P)\x02\u01EF\u01F0\x05P)\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01F3\x05" +
        "P)\x02\u01F2\u01E5\x03\x02\x02\x02\u01F2\u01EA\x03\x02\x02\x02\u01F2\u01EE" +
        "\x03\x02\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3=\x03\x02\x02\x02\u01F4" +
        "\u01F5\x05<\x1F\x02\u01F5\u01F6\x07*\x02\x02\u01F6\u01F7\x05<\x1F\x02" +
        "\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01FA\x05@!\x02\u01F9\u01F4\x03\x02" +
        "\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA?\x03\x02\x02\x02\u01FB\u01FC" +
        "\x05B\"\x02\u01FC\u01FD\x07+\x02\x02\u01FD\u01FE\x05B\"\x02\u01FE\u01FF" +
        "\x07+\x02\x02\u01FF\u0200\x05B\"\x02\u0200\u0201\x07+\x02\x02\u0201\u0202" +
        "\x05B\"\x02\u0202A\x03\x02\x02\x02\u0203\u0212\x05R*\x02\u0204\u0205\x05" +
        "T+\x02\u0205\u0206\x05R*\x02\u0206\u0212\x03\x02\x02\x02\u0207\u0208\x07" +
        "\x06\x02\x02\u0208\u0209\x05R*\x02\u0209\u020A\x05R*\x02\u020A\u0212\x03" +
        "\x02\x02\x02\u020B\u020C\x07\x07\x02\x02\u020C\u020D\t\x07\x02\x02\u020D" +
        "\u0212\x05R*\x02\u020E\u020F\x07\x07\x02\x02\u020F\u0210\x07\n\x02\x02" +
        "\u0210\u0212\t\b\x02\x02\u0211\u0203\x03\x02\x02\x02\u0211\u0204\x03\x02" +
        "\x02\x02\u0211\u0207\x03\x02\x02\x02\u0211\u020B\x03\x02\x02\x02\u0211" +
        "\u020E\x03\x02\x02\x02\u0212C\x03\x02\x02\x02\u0213\u0214\x07,\x02\x02" +
        "\u0214\u0215\x05P)\x02\u0215\u0216\x05P)\x02\u0216E\x03\x02\x02\x02\u0217" +
        "\u021B\x05N(\x02\u0218\u021B\x05R*\x02\u0219\u021B\t\t\x02\x02\u021A\u0217" +
        "\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u0219\x03\x02\x02\x02" +
        "\u021BG\x03\x02\x02\x02\u021C\u021F\x05J&\x02\u021D\u021F\x05L\'\x02\u021E" +
        "\u021C\x03\x02\x02\x02\u021E\u021D\x03\x02\x02\x02\u021FI\x03\x02\x02" +
        "\x02\u0220\u0221\t\n\x02\x02\u0221K\x03\x02";
    IRIParser._serializedATNSegment1 = "\x02\x02\u0222\u0223\t\v\x02\x02\u0223M\x03\x02\x02\x02\u0224\u0225\t" +
        "\f\x02\x02\u0225O\x03\x02\x02\x02\u0226\u0229\x05R*\x02\u0227\u0229\t" +
        "\r\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229" +
        "Q\x03\x02\x02\x02\u022A\u022D\x07\x05\x02\x02\u022B\u022D\x05T+\x02\u022C" +
        "\u022A\x03\x02\x02\x02\u022C\u022B\x03\x02\x02\x02\u022DS\x03\x02\x02" +
        "\x02\u022E\u022F\t\x0E\x02\x02\u022FU\x03\x02\x02\x02L^bkov{\x7F\x88\x8D" +
        "\x92\x98\x9A\xA0\xA5\xA7\xAF\xB5\xBE\xC1\xC8\xD0\xD8\xDE\xE4\xE6\xEC\xF0" +
        "\xF2\xF7\xF9\xFF\u0105\u0107\u010D\u0113\u011B\u0121\u0123\u0141\u0151" +
        "\u0154\u0162\u0167\u016A\u0176\u017B\u0180\u0183\u018D\u0192\u0197\u019C" +
        "\u019F\u01A6\u01AB\u01B0\u01B5\u01BA\u01BD\u01C4\u01C9\u01CE\u01D3\u01D8" +
        "\u01DD\u01E0\u01E3\u01F2\u01F9\u0211\u021A\u021E\u0228\u022C";
    IRIParser._serializedATN = Utils.join([
        IRIParser._serializedATNSegment0,
        IRIParser._serializedATNSegment1,
    ], "");
    return IRIParser;
}(Parser_1.Parser));
exports.IRIParser = IRIParser;
var ParseContext = /** @class */ (function (_super) {
    __extends(ParseContext, _super);
    function ParseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParseContext.prototype.iri = function () {
        return this.getRuleContext(0, IriContext);
    };
    ParseContext.prototype.EOF = function () { return this.getToken(IRIParser.EOF, 0); };
    Object.defineProperty(ParseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_parse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParseContext.prototype.enterRule = function (listener) {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    };
    // @Override
    ParseContext.prototype.exitRule = function (listener) {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    };
    // @Override
    ParseContext.prototype.accept = function (visitor) {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParseContext = ParseContext;
var IriContext = /** @class */ (function (_super) {
    __extends(IriContext, _super);
    function IriContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IriContext.prototype.scheme = function () {
        return this.getRuleContext(0, SchemeContext);
    };
    IriContext.prototype.COL = function () { return this.getToken(IRIParser.COL, 0); };
    IriContext.prototype.ihier_part = function () {
        return this.getRuleContext(0, Ihier_partContext);
    };
    IriContext.prototype.QMARK = function () { return this.tryGetToken(IRIParser.QMARK, 0); };
    IriContext.prototype.iquery = function () {
        return this.tryGetRuleContext(0, IqueryContext);
    };
    IriContext.prototype.HASH = function () { return this.tryGetToken(IRIParser.HASH, 0); };
    IriContext.prototype.ifragment = function () {
        return this.tryGetRuleContext(0, IfragmentContext);
    };
    Object.defineProperty(IriContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_iri; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IriContext.prototype.enterRule = function (listener) {
        if (listener.enterIri) {
            listener.enterIri(this);
        }
    };
    // @Override
    IriContext.prototype.exitRule = function (listener) {
        if (listener.exitIri) {
            listener.exitIri(this);
        }
    };
    // @Override
    IriContext.prototype.accept = function (visitor) {
        if (visitor.visitIri) {
            return visitor.visitIri(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IriContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IriContext = IriContext;
var Ihier_partContext = /** @class */ (function (_super) {
    __extends(Ihier_partContext, _super);
    function Ihier_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ihier_partContext.prototype.FSLASH2 = function () { return this.tryGetToken(IRIParser.FSLASH2, 0); };
    Ihier_partContext.prototype.iauthority = function () {
        return this.tryGetRuleContext(0, IauthorityContext);
    };
    Ihier_partContext.prototype.ipath_abempty = function () {
        return this.tryGetRuleContext(0, Ipath_abemptyContext);
    };
    Ihier_partContext.prototype.ipath_absolute = function () {
        return this.tryGetRuleContext(0, Ipath_absoluteContext);
    };
    Ihier_partContext.prototype.ipath_rootless = function () {
        return this.tryGetRuleContext(0, Ipath_rootlessContext);
    };
    Ihier_partContext.prototype.ipath_empty = function () {
        return this.tryGetRuleContext(0, Ipath_emptyContext);
    };
    Object.defineProperty(Ihier_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ihier_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ihier_partContext.prototype.enterRule = function (listener) {
        if (listener.enterIhier_part) {
            listener.enterIhier_part(this);
        }
    };
    // @Override
    Ihier_partContext.prototype.exitRule = function (listener) {
        if (listener.exitIhier_part) {
            listener.exitIhier_part(this);
        }
    };
    // @Override
    Ihier_partContext.prototype.accept = function (visitor) {
        if (visitor.visitIhier_part) {
            return visitor.visitIhier_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ihier_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ihier_partContext = Ihier_partContext;
var Iri_referenceContext = /** @class */ (function (_super) {
    __extends(Iri_referenceContext, _super);
    function Iri_referenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Iri_referenceContext.prototype.iri = function () {
        return this.tryGetRuleContext(0, IriContext);
    };
    Iri_referenceContext.prototype.irelative_ref = function () {
        return this.tryGetRuleContext(0, Irelative_refContext);
    };
    Object.defineProperty(Iri_referenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_iri_reference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Iri_referenceContext.prototype.enterRule = function (listener) {
        if (listener.enterIri_reference) {
            listener.enterIri_reference(this);
        }
    };
    // @Override
    Iri_referenceContext.prototype.exitRule = function (listener) {
        if (listener.exitIri_reference) {
            listener.exitIri_reference(this);
        }
    };
    // @Override
    Iri_referenceContext.prototype.accept = function (visitor) {
        if (visitor.visitIri_reference) {
            return visitor.visitIri_reference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Iri_referenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Iri_referenceContext = Iri_referenceContext;
var Absolute_iriContext = /** @class */ (function (_super) {
    __extends(Absolute_iriContext, _super);
    function Absolute_iriContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Absolute_iriContext.prototype.scheme = function () {
        return this.getRuleContext(0, SchemeContext);
    };
    Absolute_iriContext.prototype.COL = function () { return this.getToken(IRIParser.COL, 0); };
    Absolute_iriContext.prototype.ihier_part = function () {
        return this.getRuleContext(0, Ihier_partContext);
    };
    Absolute_iriContext.prototype.QMARK = function () { return this.tryGetToken(IRIParser.QMARK, 0); };
    Absolute_iriContext.prototype.iquery = function () {
        return this.tryGetRuleContext(0, IqueryContext);
    };
    Object.defineProperty(Absolute_iriContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_absolute_iri; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Absolute_iriContext.prototype.enterRule = function (listener) {
        if (listener.enterAbsolute_iri) {
            listener.enterAbsolute_iri(this);
        }
    };
    // @Override
    Absolute_iriContext.prototype.exitRule = function (listener) {
        if (listener.exitAbsolute_iri) {
            listener.exitAbsolute_iri(this);
        }
    };
    // @Override
    Absolute_iriContext.prototype.accept = function (visitor) {
        if (visitor.visitAbsolute_iri) {
            return visitor.visitAbsolute_iri(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Absolute_iriContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Absolute_iriContext = Absolute_iriContext;
var Irelative_refContext = /** @class */ (function (_super) {
    __extends(Irelative_refContext, _super);
    function Irelative_refContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Irelative_refContext.prototype.irelative_part = function () {
        return this.getRuleContext(0, Irelative_partContext);
    };
    Irelative_refContext.prototype.QMARK = function () { return this.tryGetToken(IRIParser.QMARK, 0); };
    Irelative_refContext.prototype.iquery = function () {
        return this.tryGetRuleContext(0, IqueryContext);
    };
    Irelative_refContext.prototype.HASH = function () { return this.tryGetToken(IRIParser.HASH, 0); };
    Irelative_refContext.prototype.ifragment = function () {
        return this.tryGetRuleContext(0, IfragmentContext);
    };
    Object.defineProperty(Irelative_refContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_irelative_ref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Irelative_refContext.prototype.enterRule = function (listener) {
        if (listener.enterIrelative_ref) {
            listener.enterIrelative_ref(this);
        }
    };
    // @Override
    Irelative_refContext.prototype.exitRule = function (listener) {
        if (listener.exitIrelative_ref) {
            listener.exitIrelative_ref(this);
        }
    };
    // @Override
    Irelative_refContext.prototype.accept = function (visitor) {
        if (visitor.visitIrelative_ref) {
            return visitor.visitIrelative_ref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Irelative_refContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Irelative_refContext = Irelative_refContext;
var Irelative_partContext = /** @class */ (function (_super) {
    __extends(Irelative_partContext, _super);
    function Irelative_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Irelative_partContext.prototype.FSLASH2 = function () { return this.tryGetToken(IRIParser.FSLASH2, 0); };
    Irelative_partContext.prototype.iauthority = function () {
        return this.tryGetRuleContext(0, IauthorityContext);
    };
    Irelative_partContext.prototype.ipath_abempty = function () {
        return this.tryGetRuleContext(0, Ipath_abemptyContext);
    };
    Irelative_partContext.prototype.ipath_absolute = function () {
        return this.tryGetRuleContext(0, Ipath_absoluteContext);
    };
    Irelative_partContext.prototype.ipath_noscheme = function () {
        return this.tryGetRuleContext(0, Ipath_noschemeContext);
    };
    Irelative_partContext.prototype.ipath_empty = function () {
        return this.tryGetRuleContext(0, Ipath_emptyContext);
    };
    Object.defineProperty(Irelative_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_irelative_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Irelative_partContext.prototype.enterRule = function (listener) {
        if (listener.enterIrelative_part) {
            listener.enterIrelative_part(this);
        }
    };
    // @Override
    Irelative_partContext.prototype.exitRule = function (listener) {
        if (listener.exitIrelative_part) {
            listener.exitIrelative_part(this);
        }
    };
    // @Override
    Irelative_partContext.prototype.accept = function (visitor) {
        if (visitor.visitIrelative_part) {
            return visitor.visitIrelative_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Irelative_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Irelative_partContext = Irelative_partContext;
var IauthorityContext = /** @class */ (function (_super) {
    __extends(IauthorityContext, _super);
    function IauthorityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IauthorityContext.prototype.ihost = function () {
        return this.getRuleContext(0, IhostContext);
    };
    IauthorityContext.prototype.iuserinfo = function () {
        return this.tryGetRuleContext(0, IuserinfoContext);
    };
    IauthorityContext.prototype.AT = function () { return this.tryGetToken(IRIParser.AT, 0); };
    IauthorityContext.prototype.COL = function () { return this.tryGetToken(IRIParser.COL, 0); };
    IauthorityContext.prototype.port = function () {
        return this.tryGetRuleContext(0, PortContext);
    };
    Object.defineProperty(IauthorityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_iauthority; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IauthorityContext.prototype.enterRule = function (listener) {
        if (listener.enterIauthority) {
            listener.enterIauthority(this);
        }
    };
    // @Override
    IauthorityContext.prototype.exitRule = function (listener) {
        if (listener.exitIauthority) {
            listener.exitIauthority(this);
        }
    };
    // @Override
    IauthorityContext.prototype.accept = function (visitor) {
        if (visitor.visitIauthority) {
            return visitor.visitIauthority(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IauthorityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IauthorityContext = IauthorityContext;
var IuserinfoContext = /** @class */ (function (_super) {
    __extends(IuserinfoContext, _super);
    function IuserinfoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IuserinfoContext.prototype.iunreserved = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IunreservedContext);
        }
        else {
            return this.getRuleContext(i, IunreservedContext);
        }
    };
    IuserinfoContext.prototype.pct_encoded = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Pct_encodedContext);
        }
        else {
            return this.getRuleContext(i, Pct_encodedContext);
        }
    };
    IuserinfoContext.prototype.sub_delims = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sub_delimsContext);
        }
        else {
            return this.getRuleContext(i, Sub_delimsContext);
        }
    };
    IuserinfoContext.prototype.COL = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.COL);
        }
        else {
            return this.getToken(IRIParser.COL, i);
        }
    };
    Object.defineProperty(IuserinfoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_iuserinfo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IuserinfoContext.prototype.enterRule = function (listener) {
        if (listener.enterIuserinfo) {
            listener.enterIuserinfo(this);
        }
    };
    // @Override
    IuserinfoContext.prototype.exitRule = function (listener) {
        if (listener.exitIuserinfo) {
            listener.exitIuserinfo(this);
        }
    };
    // @Override
    IuserinfoContext.prototype.accept = function (visitor) {
        if (visitor.visitIuserinfo) {
            return visitor.visitIuserinfo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IuserinfoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IuserinfoContext = IuserinfoContext;
var IhostContext = /** @class */ (function (_super) {
    __extends(IhostContext, _super);
    function IhostContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IhostContext.prototype.ip_literal = function () {
        return this.tryGetRuleContext(0, Ip_literalContext);
    };
    IhostContext.prototype.ip_v4_address = function () {
        return this.tryGetRuleContext(0, Ip_v4_addressContext);
    };
    IhostContext.prototype.ireg_name = function () {
        return this.tryGetRuleContext(0, Ireg_nameContext);
    };
    Object.defineProperty(IhostContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ihost; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IhostContext.prototype.enterRule = function (listener) {
        if (listener.enterIhost) {
            listener.enterIhost(this);
        }
    };
    // @Override
    IhostContext.prototype.exitRule = function (listener) {
        if (listener.exitIhost) {
            listener.exitIhost(this);
        }
    };
    // @Override
    IhostContext.prototype.accept = function (visitor) {
        if (visitor.visitIhost) {
            return visitor.visitIhost(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IhostContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IhostContext = IhostContext;
var Ireg_nameContext = /** @class */ (function (_super) {
    __extends(Ireg_nameContext, _super);
    function Ireg_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ireg_nameContext.prototype.iunreserved = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IunreservedContext);
        }
        else {
            return this.getRuleContext(i, IunreservedContext);
        }
    };
    Ireg_nameContext.prototype.pct_encoded = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Pct_encodedContext);
        }
        else {
            return this.getRuleContext(i, Pct_encodedContext);
        }
    };
    Ireg_nameContext.prototype.sub_delims = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sub_delimsContext);
        }
        else {
            return this.getRuleContext(i, Sub_delimsContext);
        }
    };
    Object.defineProperty(Ireg_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ireg_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ireg_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterIreg_name) {
            listener.enterIreg_name(this);
        }
    };
    // @Override
    Ireg_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitIreg_name) {
            listener.exitIreg_name(this);
        }
    };
    // @Override
    Ireg_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitIreg_name) {
            return visitor.visitIreg_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ireg_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ireg_nameContext = Ireg_nameContext;
var IpathContext = /** @class */ (function (_super) {
    __extends(IpathContext, _super);
    function IpathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IpathContext.prototype.ipath_abempty = function () {
        return this.tryGetRuleContext(0, Ipath_abemptyContext);
    };
    IpathContext.prototype.ipath_absolute = function () {
        return this.tryGetRuleContext(0, Ipath_absoluteContext);
    };
    IpathContext.prototype.ipath_noscheme = function () {
        return this.tryGetRuleContext(0, Ipath_noschemeContext);
    };
    IpathContext.prototype.ipath_rootless = function () {
        return this.tryGetRuleContext(0, Ipath_rootlessContext);
    };
    IpathContext.prototype.ipath_empty = function () {
        return this.tryGetRuleContext(0, Ipath_emptyContext);
    };
    Object.defineProperty(IpathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ipath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IpathContext.prototype.enterRule = function (listener) {
        if (listener.enterIpath) {
            listener.enterIpath(this);
        }
    };
    // @Override
    IpathContext.prototype.exitRule = function (listener) {
        if (listener.exitIpath) {
            listener.exitIpath(this);
        }
    };
    // @Override
    IpathContext.prototype.accept = function (visitor) {
        if (visitor.visitIpath) {
            return visitor.visitIpath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IpathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IpathContext = IpathContext;
var Ipath_abemptyContext = /** @class */ (function (_super) {
    __extends(Ipath_abemptyContext, _super);
    function Ipath_abemptyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipath_abemptyContext.prototype.FSLASH = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.FSLASH);
        }
        else {
            return this.getToken(IRIParser.FSLASH, i);
        }
    };
    Ipath_abemptyContext.prototype.isegment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IsegmentContext);
        }
        else {
            return this.getRuleContext(i, IsegmentContext);
        }
    };
    Object.defineProperty(Ipath_abemptyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ipath_abempty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipath_abemptyContext.prototype.enterRule = function (listener) {
        if (listener.enterIpath_abempty) {
            listener.enterIpath_abempty(this);
        }
    };
    // @Override
    Ipath_abemptyContext.prototype.exitRule = function (listener) {
        if (listener.exitIpath_abempty) {
            listener.exitIpath_abempty(this);
        }
    };
    // @Override
    Ipath_abemptyContext.prototype.accept = function (visitor) {
        if (visitor.visitIpath_abempty) {
            return visitor.visitIpath_abempty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipath_abemptyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipath_abemptyContext = Ipath_abemptyContext;
var Ipath_absoluteContext = /** @class */ (function (_super) {
    __extends(Ipath_absoluteContext, _super);
    function Ipath_absoluteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipath_absoluteContext.prototype.FSLASH = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.FSLASH);
        }
        else {
            return this.getToken(IRIParser.FSLASH, i);
        }
    };
    Ipath_absoluteContext.prototype.isegment_nz = function () {
        return this.tryGetRuleContext(0, Isegment_nzContext);
    };
    Ipath_absoluteContext.prototype.isegment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IsegmentContext);
        }
        else {
            return this.getRuleContext(i, IsegmentContext);
        }
    };
    Object.defineProperty(Ipath_absoluteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ipath_absolute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipath_absoluteContext.prototype.enterRule = function (listener) {
        if (listener.enterIpath_absolute) {
            listener.enterIpath_absolute(this);
        }
    };
    // @Override
    Ipath_absoluteContext.prototype.exitRule = function (listener) {
        if (listener.exitIpath_absolute) {
            listener.exitIpath_absolute(this);
        }
    };
    // @Override
    Ipath_absoluteContext.prototype.accept = function (visitor) {
        if (visitor.visitIpath_absolute) {
            return visitor.visitIpath_absolute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipath_absoluteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipath_absoluteContext = Ipath_absoluteContext;
var Ipath_noschemeContext = /** @class */ (function (_super) {
    __extends(Ipath_noschemeContext, _super);
    function Ipath_noschemeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipath_noschemeContext.prototype.isegment_nz_nc = function () {
        return this.getRuleContext(0, Isegment_nz_ncContext);
    };
    Ipath_noschemeContext.prototype.FSLASH = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.FSLASH);
        }
        else {
            return this.getToken(IRIParser.FSLASH, i);
        }
    };
    Ipath_noschemeContext.prototype.isegment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IsegmentContext);
        }
        else {
            return this.getRuleContext(i, IsegmentContext);
        }
    };
    Object.defineProperty(Ipath_noschemeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ipath_noscheme; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipath_noschemeContext.prototype.enterRule = function (listener) {
        if (listener.enterIpath_noscheme) {
            listener.enterIpath_noscheme(this);
        }
    };
    // @Override
    Ipath_noschemeContext.prototype.exitRule = function (listener) {
        if (listener.exitIpath_noscheme) {
            listener.exitIpath_noscheme(this);
        }
    };
    // @Override
    Ipath_noschemeContext.prototype.accept = function (visitor) {
        if (visitor.visitIpath_noscheme) {
            return visitor.visitIpath_noscheme(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipath_noschemeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipath_noschemeContext = Ipath_noschemeContext;
var Ipath_rootlessContext = /** @class */ (function (_super) {
    __extends(Ipath_rootlessContext, _super);
    function Ipath_rootlessContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ipath_rootlessContext.prototype.isegment_nz = function () {
        return this.getRuleContext(0, Isegment_nzContext);
    };
    Ipath_rootlessContext.prototype.FSLASH = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.FSLASH);
        }
        else {
            return this.getToken(IRIParser.FSLASH, i);
        }
    };
    Ipath_rootlessContext.prototype.isegment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IsegmentContext);
        }
        else {
            return this.getRuleContext(i, IsegmentContext);
        }
    };
    Object.defineProperty(Ipath_rootlessContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ipath_rootless; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipath_rootlessContext.prototype.enterRule = function (listener) {
        if (listener.enterIpath_rootless) {
            listener.enterIpath_rootless(this);
        }
    };
    // @Override
    Ipath_rootlessContext.prototype.exitRule = function (listener) {
        if (listener.exitIpath_rootless) {
            listener.exitIpath_rootless(this);
        }
    };
    // @Override
    Ipath_rootlessContext.prototype.accept = function (visitor) {
        if (visitor.visitIpath_rootless) {
            return visitor.visitIpath_rootless(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipath_rootlessContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipath_rootlessContext = Ipath_rootlessContext;
var Ipath_emptyContext = /** @class */ (function (_super) {
    __extends(Ipath_emptyContext, _super);
    function Ipath_emptyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Ipath_emptyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ipath_empty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ipath_emptyContext.prototype.enterRule = function (listener) {
        if (listener.enterIpath_empty) {
            listener.enterIpath_empty(this);
        }
    };
    // @Override
    Ipath_emptyContext.prototype.exitRule = function (listener) {
        if (listener.exitIpath_empty) {
            listener.exitIpath_empty(this);
        }
    };
    // @Override
    Ipath_emptyContext.prototype.accept = function (visitor) {
        if (visitor.visitIpath_empty) {
            return visitor.visitIpath_empty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ipath_emptyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ipath_emptyContext = Ipath_emptyContext;
var IsegmentContext = /** @class */ (function (_super) {
    __extends(IsegmentContext, _super);
    function IsegmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IsegmentContext.prototype.ipchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IpcharContext);
        }
        else {
            return this.getRuleContext(i, IpcharContext);
        }
    };
    Object.defineProperty(IsegmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_isegment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IsegmentContext.prototype.enterRule = function (listener) {
        if (listener.enterIsegment) {
            listener.enterIsegment(this);
        }
    };
    // @Override
    IsegmentContext.prototype.exitRule = function (listener) {
        if (listener.exitIsegment) {
            listener.exitIsegment(this);
        }
    };
    // @Override
    IsegmentContext.prototype.accept = function (visitor) {
        if (visitor.visitIsegment) {
            return visitor.visitIsegment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IsegmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IsegmentContext = IsegmentContext;
var Isegment_nzContext = /** @class */ (function (_super) {
    __extends(Isegment_nzContext, _super);
    function Isegment_nzContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Isegment_nzContext.prototype.ipchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IpcharContext);
        }
        else {
            return this.getRuleContext(i, IpcharContext);
        }
    };
    Object.defineProperty(Isegment_nzContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_isegment_nz; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Isegment_nzContext.prototype.enterRule = function (listener) {
        if (listener.enterIsegment_nz) {
            listener.enterIsegment_nz(this);
        }
    };
    // @Override
    Isegment_nzContext.prototype.exitRule = function (listener) {
        if (listener.exitIsegment_nz) {
            listener.exitIsegment_nz(this);
        }
    };
    // @Override
    Isegment_nzContext.prototype.accept = function (visitor) {
        if (visitor.visitIsegment_nz) {
            return visitor.visitIsegment_nz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Isegment_nzContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Isegment_nzContext = Isegment_nzContext;
var Isegment_nz_ncContext = /** @class */ (function (_super) {
    __extends(Isegment_nz_ncContext, _super);
    function Isegment_nz_ncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Isegment_nz_ncContext.prototype.iunreserved = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IunreservedContext);
        }
        else {
            return this.getRuleContext(i, IunreservedContext);
        }
    };
    Isegment_nz_ncContext.prototype.pct_encoded = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Pct_encodedContext);
        }
        else {
            return this.getRuleContext(i, Pct_encodedContext);
        }
    };
    Isegment_nz_ncContext.prototype.sub_delims = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sub_delimsContext);
        }
        else {
            return this.getRuleContext(i, Sub_delimsContext);
        }
    };
    Isegment_nz_ncContext.prototype.AT = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.AT);
        }
        else {
            return this.getToken(IRIParser.AT, i);
        }
    };
    Object.defineProperty(Isegment_nz_ncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_isegment_nz_nc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Isegment_nz_ncContext.prototype.enterRule = function (listener) {
        if (listener.enterIsegment_nz_nc) {
            listener.enterIsegment_nz_nc(this);
        }
    };
    // @Override
    Isegment_nz_ncContext.prototype.exitRule = function (listener) {
        if (listener.exitIsegment_nz_nc) {
            listener.exitIsegment_nz_nc(this);
        }
    };
    // @Override
    Isegment_nz_ncContext.prototype.accept = function (visitor) {
        if (visitor.visitIsegment_nz_nc) {
            return visitor.visitIsegment_nz_nc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Isegment_nz_ncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Isegment_nz_ncContext = Isegment_nz_ncContext;
var IpcharContext = /** @class */ (function (_super) {
    __extends(IpcharContext, _super);
    function IpcharContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IpcharContext.prototype.iunreserved = function () {
        return this.tryGetRuleContext(0, IunreservedContext);
    };
    IpcharContext.prototype.pct_encoded = function () {
        return this.tryGetRuleContext(0, Pct_encodedContext);
    };
    IpcharContext.prototype.sub_delims = function () {
        return this.tryGetRuleContext(0, Sub_delimsContext);
    };
    IpcharContext.prototype.COL = function () { return this.tryGetToken(IRIParser.COL, 0); };
    IpcharContext.prototype.AT = function () { return this.tryGetToken(IRIParser.AT, 0); };
    Object.defineProperty(IpcharContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ipchar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IpcharContext.prototype.enterRule = function (listener) {
        if (listener.enterIpchar) {
            listener.enterIpchar(this);
        }
    };
    // @Override
    IpcharContext.prototype.exitRule = function (listener) {
        if (listener.exitIpchar) {
            listener.exitIpchar(this);
        }
    };
    // @Override
    IpcharContext.prototype.accept = function (visitor) {
        if (visitor.visitIpchar) {
            return visitor.visitIpchar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IpcharContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IpcharContext = IpcharContext;
var IqueryContext = /** @class */ (function (_super) {
    __extends(IqueryContext, _super);
    function IqueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IqueryContext.prototype.ipchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IpcharContext);
        }
        else {
            return this.getRuleContext(i, IpcharContext);
        }
    };
    IqueryContext.prototype.IPRIVATE = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.IPRIVATE);
        }
        else {
            return this.getToken(IRIParser.IPRIVATE, i);
        }
    };
    IqueryContext.prototype.FSLASH = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.FSLASH);
        }
        else {
            return this.getToken(IRIParser.FSLASH, i);
        }
    };
    IqueryContext.prototype.QMARK = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.QMARK);
        }
        else {
            return this.getToken(IRIParser.QMARK, i);
        }
    };
    Object.defineProperty(IqueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_iquery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IqueryContext.prototype.enterRule = function (listener) {
        if (listener.enterIquery) {
            listener.enterIquery(this);
        }
    };
    // @Override
    IqueryContext.prototype.exitRule = function (listener) {
        if (listener.exitIquery) {
            listener.exitIquery(this);
        }
    };
    // @Override
    IqueryContext.prototype.accept = function (visitor) {
        if (visitor.visitIquery) {
            return visitor.visitIquery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IqueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IqueryContext = IqueryContext;
var IfragmentContext = /** @class */ (function (_super) {
    __extends(IfragmentContext, _super);
    function IfragmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfragmentContext.prototype.ipchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IpcharContext);
        }
        else {
            return this.getRuleContext(i, IpcharContext);
        }
    };
    IfragmentContext.prototype.FSLASH = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.FSLASH);
        }
        else {
            return this.getToken(IRIParser.FSLASH, i);
        }
    };
    IfragmentContext.prototype.QMARK = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.QMARK);
        }
        else {
            return this.getToken(IRIParser.QMARK, i);
        }
    };
    Object.defineProperty(IfragmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ifragment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfragmentContext.prototype.enterRule = function (listener) {
        if (listener.enterIfragment) {
            listener.enterIfragment(this);
        }
    };
    // @Override
    IfragmentContext.prototype.exitRule = function (listener) {
        if (listener.exitIfragment) {
            listener.exitIfragment(this);
        }
    };
    // @Override
    IfragmentContext.prototype.accept = function (visitor) {
        if (visitor.visitIfragment) {
            return visitor.visitIfragment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfragmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfragmentContext = IfragmentContext;
var IunreservedContext = /** @class */ (function (_super) {
    __extends(IunreservedContext, _super);
    function IunreservedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IunreservedContext.prototype.alpha = function () {
        return this.tryGetRuleContext(0, AlphaContext);
    };
    IunreservedContext.prototype.digit = function () {
        return this.tryGetRuleContext(0, DigitContext);
    };
    IunreservedContext.prototype.HYPHEN = function () { return this.tryGetToken(IRIParser.HYPHEN, 0); };
    IunreservedContext.prototype.DOT = function () { return this.tryGetToken(IRIParser.DOT, 0); };
    IunreservedContext.prototype.USCORE = function () { return this.tryGetToken(IRIParser.USCORE, 0); };
    IunreservedContext.prototype.TILDE = function () { return this.tryGetToken(IRIParser.TILDE, 0); };
    IunreservedContext.prototype.UCSCHAR = function () { return this.tryGetToken(IRIParser.UCSCHAR, 0); };
    Object.defineProperty(IunreservedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_iunreserved; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IunreservedContext.prototype.enterRule = function (listener) {
        if (listener.enterIunreserved) {
            listener.enterIunreserved(this);
        }
    };
    // @Override
    IunreservedContext.prototype.exitRule = function (listener) {
        if (listener.exitIunreserved) {
            listener.exitIunreserved(this);
        }
    };
    // @Override
    IunreservedContext.prototype.accept = function (visitor) {
        if (visitor.visitIunreserved) {
            return visitor.visitIunreserved(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IunreservedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IunreservedContext = IunreservedContext;
var SchemeContext = /** @class */ (function (_super) {
    __extends(SchemeContext, _super);
    function SchemeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SchemeContext.prototype.alpha = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AlphaContext);
        }
        else {
            return this.getRuleContext(i, AlphaContext);
        }
    };
    SchemeContext.prototype.digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DigitContext);
        }
        else {
            return this.getRuleContext(i, DigitContext);
        }
    };
    SchemeContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.PLUS);
        }
        else {
            return this.getToken(IRIParser.PLUS, i);
        }
    };
    SchemeContext.prototype.HYPHEN = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.HYPHEN);
        }
        else {
            return this.getToken(IRIParser.HYPHEN, i);
        }
    };
    SchemeContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.DOT);
        }
        else {
            return this.getToken(IRIParser.DOT, i);
        }
    };
    Object.defineProperty(SchemeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_scheme; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SchemeContext.prototype.enterRule = function (listener) {
        if (listener.enterScheme) {
            listener.enterScheme(this);
        }
    };
    // @Override
    SchemeContext.prototype.exitRule = function (listener) {
        if (listener.exitScheme) {
            listener.exitScheme(this);
        }
    };
    // @Override
    SchemeContext.prototype.accept = function (visitor) {
        if (visitor.visitScheme) {
            return visitor.visitScheme(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SchemeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SchemeContext = SchemeContext;
var PortContext = /** @class */ (function (_super) {
    __extends(PortContext, _super);
    function PortContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PortContext.prototype.digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DigitContext);
        }
        else {
            return this.getRuleContext(i, DigitContext);
        }
    };
    Object.defineProperty(PortContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_port; },
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
var Ip_literalContext = /** @class */ (function (_super) {
    __extends(Ip_literalContext, _super);
    function Ip_literalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ip_literalContext.prototype.OBRACK = function () { return this.getToken(IRIParser.OBRACK, 0); };
    Ip_literalContext.prototype.CBRACK = function () { return this.getToken(IRIParser.CBRACK, 0); };
    Ip_literalContext.prototype.ip_v6_address = function () {
        return this.tryGetRuleContext(0, Ip_v6_addressContext);
    };
    Ip_literalContext.prototype.ip_v_future = function () {
        return this.tryGetRuleContext(0, Ip_v_futureContext);
    };
    Object.defineProperty(Ip_literalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ip_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ip_literalContext.prototype.enterRule = function (listener) {
        if (listener.enterIp_literal) {
            listener.enterIp_literal(this);
        }
    };
    // @Override
    Ip_literalContext.prototype.exitRule = function (listener) {
        if (listener.exitIp_literal) {
            listener.exitIp_literal(this);
        }
    };
    // @Override
    Ip_literalContext.prototype.accept = function (visitor) {
        if (visitor.visitIp_literal) {
            return visitor.visitIp_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ip_literalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ip_literalContext = Ip_literalContext;
var Ip_v_futureContext = /** @class */ (function (_super) {
    __extends(Ip_v_futureContext, _super);
    function Ip_v_futureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ip_v_futureContext.prototype.V = function () { return this.getToken(IRIParser.V, 0); };
    Ip_v_futureContext.prototype.DOT = function () { return this.getToken(IRIParser.DOT, 0); };
    Ip_v_futureContext.prototype.hexdig = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HexdigContext);
        }
        else {
            return this.getRuleContext(i, HexdigContext);
        }
    };
    Ip_v_futureContext.prototype.unreserved = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnreservedContext);
        }
        else {
            return this.getRuleContext(i, UnreservedContext);
        }
    };
    Ip_v_futureContext.prototype.sub_delims = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Sub_delimsContext);
        }
        else {
            return this.getRuleContext(i, Sub_delimsContext);
        }
    };
    Ip_v_futureContext.prototype.COL = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.COL);
        }
        else {
            return this.getToken(IRIParser.COL, i);
        }
    };
    Object.defineProperty(Ip_v_futureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ip_v_future; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ip_v_futureContext.prototype.enterRule = function (listener) {
        if (listener.enterIp_v_future) {
            listener.enterIp_v_future(this);
        }
    };
    // @Override
    Ip_v_futureContext.prototype.exitRule = function (listener) {
        if (listener.exitIp_v_future) {
            listener.exitIp_v_future(this);
        }
    };
    // @Override
    Ip_v_futureContext.prototype.accept = function (visitor) {
        if (visitor.visitIp_v_future) {
            return visitor.visitIp_v_future(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ip_v_futureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ip_v_futureContext = Ip_v_futureContext;
var Ip_v6_addressContext = /** @class */ (function (_super) {
    __extends(Ip_v6_addressContext, _super);
    function Ip_v6_addressContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ip_v6_addressContext.prototype.h16 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(H16Context);
        }
        else {
            return this.getRuleContext(i, H16Context);
        }
    };
    Ip_v6_addressContext.prototype.COL = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.COL);
        }
        else {
            return this.getToken(IRIParser.COL, i);
        }
    };
    Ip_v6_addressContext.prototype.ls32 = function () {
        return this.tryGetRuleContext(0, Ls32Context);
    };
    Ip_v6_addressContext.prototype.COL2 = function () { return this.tryGetToken(IRIParser.COL2, 0); };
    Object.defineProperty(Ip_v6_addressContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ip_v6_address; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ip_v6_addressContext.prototype.enterRule = function (listener) {
        if (listener.enterIp_v6_address) {
            listener.enterIp_v6_address(this);
        }
    };
    // @Override
    Ip_v6_addressContext.prototype.exitRule = function (listener) {
        if (listener.exitIp_v6_address) {
            listener.exitIp_v6_address(this);
        }
    };
    // @Override
    Ip_v6_addressContext.prototype.accept = function (visitor) {
        if (visitor.visitIp_v6_address) {
            return visitor.visitIp_v6_address(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ip_v6_addressContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ip_v6_addressContext = Ip_v6_addressContext;
var H16Context = /** @class */ (function (_super) {
    __extends(H16Context, _super);
    function H16Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    H16Context.prototype.hexdig = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HexdigContext);
        }
        else {
            return this.getRuleContext(i, HexdigContext);
        }
    };
    Object.defineProperty(H16Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_h16; },
        enumerable: true,
        configurable: true
    });
    // @Override
    H16Context.prototype.enterRule = function (listener) {
        if (listener.enterH16) {
            listener.enterH16(this);
        }
    };
    // @Override
    H16Context.prototype.exitRule = function (listener) {
        if (listener.exitH16) {
            listener.exitH16(this);
        }
    };
    // @Override
    H16Context.prototype.accept = function (visitor) {
        if (visitor.visitH16) {
            return visitor.visitH16(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return H16Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.H16Context = H16Context;
var Ls32Context = /** @class */ (function (_super) {
    __extends(Ls32Context, _super);
    function Ls32Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ls32Context.prototype.h16 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(H16Context);
        }
        else {
            return this.getRuleContext(i, H16Context);
        }
    };
    Ls32Context.prototype.COL = function () { return this.tryGetToken(IRIParser.COL, 0); };
    Ls32Context.prototype.ip_v4_address = function () {
        return this.tryGetRuleContext(0, Ip_v4_addressContext);
    };
    Object.defineProperty(Ls32Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ls32; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ls32Context.prototype.enterRule = function (listener) {
        if (listener.enterLs32) {
            listener.enterLs32(this);
        }
    };
    // @Override
    Ls32Context.prototype.exitRule = function (listener) {
        if (listener.exitLs32) {
            listener.exitLs32(this);
        }
    };
    // @Override
    Ls32Context.prototype.accept = function (visitor) {
        if (visitor.visitLs32) {
            return visitor.visitLs32(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ls32Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ls32Context = Ls32Context;
var Ip_v4_addressContext = /** @class */ (function (_super) {
    __extends(Ip_v4_addressContext, _super);
    function Ip_v4_addressContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ip_v4_addressContext.prototype.dec_octet = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Dec_octetContext);
        }
        else {
            return this.getRuleContext(i, Dec_octetContext);
        }
    };
    Ip_v4_addressContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.DOT);
        }
        else {
            return this.getToken(IRIParser.DOT, i);
        }
    };
    Object.defineProperty(Ip_v4_addressContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_ip_v4_address; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ip_v4_addressContext.prototype.enterRule = function (listener) {
        if (listener.enterIp_v4_address) {
            listener.enterIp_v4_address(this);
        }
    };
    // @Override
    Ip_v4_addressContext.prototype.exitRule = function (listener) {
        if (listener.exitIp_v4_address) {
            listener.exitIp_v4_address(this);
        }
    };
    // @Override
    Ip_v4_addressContext.prototype.accept = function (visitor) {
        if (visitor.visitIp_v4_address) {
            return visitor.visitIp_v4_address(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ip_v4_addressContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ip_v4_addressContext = Ip_v4_addressContext;
var Dec_octetContext = /** @class */ (function (_super) {
    __extends(Dec_octetContext, _super);
    function Dec_octetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dec_octetContext.prototype.digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DigitContext);
        }
        else {
            return this.getRuleContext(i, DigitContext);
        }
    };
    Dec_octetContext.prototype.non_zero_digit = function () {
        return this.tryGetRuleContext(0, Non_zero_digitContext);
    };
    Dec_octetContext.prototype.D1 = function () { return this.tryGetToken(IRIParser.D1, 0); };
    Dec_octetContext.prototype.D2 = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.D2);
        }
        else {
            return this.getToken(IRIParser.D2, i);
        }
    };
    Dec_octetContext.prototype.D0 = function () { return this.tryGetToken(IRIParser.D0, 0); };
    Dec_octetContext.prototype.D3 = function () { return this.tryGetToken(IRIParser.D3, 0); };
    Dec_octetContext.prototype.D4 = function () { return this.tryGetToken(IRIParser.D4, 0); };
    Dec_octetContext.prototype.D5 = function (i) {
        if (i === undefined) {
            return this.getTokens(IRIParser.D5);
        }
        else {
            return this.getToken(IRIParser.D5, i);
        }
    };
    Object.defineProperty(Dec_octetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_dec_octet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dec_octetContext.prototype.enterRule = function (listener) {
        if (listener.enterDec_octet) {
            listener.enterDec_octet(this);
        }
    };
    // @Override
    Dec_octetContext.prototype.exitRule = function (listener) {
        if (listener.exitDec_octet) {
            listener.exitDec_octet(this);
        }
    };
    // @Override
    Dec_octetContext.prototype.accept = function (visitor) {
        if (visitor.visitDec_octet) {
            return visitor.visitDec_octet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dec_octetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dec_octetContext = Dec_octetContext;
var Pct_encodedContext = /** @class */ (function (_super) {
    __extends(Pct_encodedContext, _super);
    function Pct_encodedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pct_encodedContext.prototype.PERCENT = function () { return this.getToken(IRIParser.PERCENT, 0); };
    Pct_encodedContext.prototype.hexdig = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HexdigContext);
        }
        else {
            return this.getRuleContext(i, HexdigContext);
        }
    };
    Object.defineProperty(Pct_encodedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_pct_encoded; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pct_encodedContext.prototype.enterRule = function (listener) {
        if (listener.enterPct_encoded) {
            listener.enterPct_encoded(this);
        }
    };
    // @Override
    Pct_encodedContext.prototype.exitRule = function (listener) {
        if (listener.exitPct_encoded) {
            listener.exitPct_encoded(this);
        }
    };
    // @Override
    Pct_encodedContext.prototype.accept = function (visitor) {
        if (visitor.visitPct_encoded) {
            return visitor.visitPct_encoded(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pct_encodedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pct_encodedContext = Pct_encodedContext;
var UnreservedContext = /** @class */ (function (_super) {
    __extends(UnreservedContext, _super);
    function UnreservedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnreservedContext.prototype.alpha = function () {
        return this.tryGetRuleContext(0, AlphaContext);
    };
    UnreservedContext.prototype.digit = function () {
        return this.tryGetRuleContext(0, DigitContext);
    };
    UnreservedContext.prototype.HYPHEN = function () { return this.tryGetToken(IRIParser.HYPHEN, 0); };
    UnreservedContext.prototype.DOT = function () { return this.tryGetToken(IRIParser.DOT, 0); };
    UnreservedContext.prototype.USCORE = function () { return this.tryGetToken(IRIParser.USCORE, 0); };
    UnreservedContext.prototype.TILDE = function () { return this.tryGetToken(IRIParser.TILDE, 0); };
    Object.defineProperty(UnreservedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_unreserved; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnreservedContext.prototype.enterRule = function (listener) {
        if (listener.enterUnreserved) {
            listener.enterUnreserved(this);
        }
    };
    // @Override
    UnreservedContext.prototype.exitRule = function (listener) {
        if (listener.exitUnreserved) {
            listener.exitUnreserved(this);
        }
    };
    // @Override
    UnreservedContext.prototype.accept = function (visitor) {
        if (visitor.visitUnreserved) {
            return visitor.visitUnreserved(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnreservedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnreservedContext = UnreservedContext;
var ReservedContext = /** @class */ (function (_super) {
    __extends(ReservedContext, _super);
    function ReservedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReservedContext.prototype.gen_delims = function () {
        return this.tryGetRuleContext(0, Gen_delimsContext);
    };
    ReservedContext.prototype.sub_delims = function () {
        return this.tryGetRuleContext(0, Sub_delimsContext);
    };
    Object.defineProperty(ReservedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_reserved; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReservedContext.prototype.enterRule = function (listener) {
        if (listener.enterReserved) {
            listener.enterReserved(this);
        }
    };
    // @Override
    ReservedContext.prototype.exitRule = function (listener) {
        if (listener.exitReserved) {
            listener.exitReserved(this);
        }
    };
    // @Override
    ReservedContext.prototype.accept = function (visitor) {
        if (visitor.visitReserved) {
            return visitor.visitReserved(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReservedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReservedContext = ReservedContext;
var Gen_delimsContext = /** @class */ (function (_super) {
    __extends(Gen_delimsContext, _super);
    function Gen_delimsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gen_delimsContext.prototype.COL = function () { return this.tryGetToken(IRIParser.COL, 0); };
    Gen_delimsContext.prototype.FSLASH = function () { return this.tryGetToken(IRIParser.FSLASH, 0); };
    Gen_delimsContext.prototype.QMARK = function () { return this.tryGetToken(IRIParser.QMARK, 0); };
    Gen_delimsContext.prototype.HASH = function () { return this.tryGetToken(IRIParser.HASH, 0); };
    Gen_delimsContext.prototype.OBRACK = function () { return this.tryGetToken(IRIParser.OBRACK, 0); };
    Gen_delimsContext.prototype.CBRACK = function () { return this.tryGetToken(IRIParser.CBRACK, 0); };
    Gen_delimsContext.prototype.AT = function () { return this.tryGetToken(IRIParser.AT, 0); };
    Object.defineProperty(Gen_delimsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_gen_delims; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gen_delimsContext.prototype.enterRule = function (listener) {
        if (listener.enterGen_delims) {
            listener.enterGen_delims(this);
        }
    };
    // @Override
    Gen_delimsContext.prototype.exitRule = function (listener) {
        if (listener.exitGen_delims) {
            listener.exitGen_delims(this);
        }
    };
    // @Override
    Gen_delimsContext.prototype.accept = function (visitor) {
        if (visitor.visitGen_delims) {
            return visitor.visitGen_delims(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gen_delimsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gen_delimsContext = Gen_delimsContext;
var Sub_delimsContext = /** @class */ (function (_super) {
    __extends(Sub_delimsContext, _super);
    function Sub_delimsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sub_delimsContext.prototype.EXCL = function () { return this.tryGetToken(IRIParser.EXCL, 0); };
    Sub_delimsContext.prototype.DOLLAR = function () { return this.tryGetToken(IRIParser.DOLLAR, 0); };
    Sub_delimsContext.prototype.AMP = function () { return this.tryGetToken(IRIParser.AMP, 0); };
    Sub_delimsContext.prototype.SQUOTE = function () { return this.tryGetToken(IRIParser.SQUOTE, 0); };
    Sub_delimsContext.prototype.OPAREN = function () { return this.tryGetToken(IRIParser.OPAREN, 0); };
    Sub_delimsContext.prototype.CPAREN = function () { return this.tryGetToken(IRIParser.CPAREN, 0); };
    Sub_delimsContext.prototype.STAR = function () { return this.tryGetToken(IRIParser.STAR, 0); };
    Sub_delimsContext.prototype.PLUS = function () { return this.tryGetToken(IRIParser.PLUS, 0); };
    Sub_delimsContext.prototype.COMMA = function () { return this.tryGetToken(IRIParser.COMMA, 0); };
    Sub_delimsContext.prototype.SCOL = function () { return this.tryGetToken(IRIParser.SCOL, 0); };
    Sub_delimsContext.prototype.EQUALS = function () { return this.tryGetToken(IRIParser.EQUALS, 0); };
    Object.defineProperty(Sub_delimsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_sub_delims; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sub_delimsContext.prototype.enterRule = function (listener) {
        if (listener.enterSub_delims) {
            listener.enterSub_delims(this);
        }
    };
    // @Override
    Sub_delimsContext.prototype.exitRule = function (listener) {
        if (listener.exitSub_delims) {
            listener.exitSub_delims(this);
        }
    };
    // @Override
    Sub_delimsContext.prototype.accept = function (visitor) {
        if (visitor.visitSub_delims) {
            return visitor.visitSub_delims(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sub_delimsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sub_delimsContext = Sub_delimsContext;
var AlphaContext = /** @class */ (function (_super) {
    __extends(AlphaContext, _super);
    function AlphaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlphaContext.prototype.A = function () { return this.tryGetToken(IRIParser.A, 0); };
    AlphaContext.prototype.B = function () { return this.tryGetToken(IRIParser.B, 0); };
    AlphaContext.prototype.C = function () { return this.tryGetToken(IRIParser.C, 0); };
    AlphaContext.prototype.D = function () { return this.tryGetToken(IRIParser.D, 0); };
    AlphaContext.prototype.E = function () { return this.tryGetToken(IRIParser.E, 0); };
    AlphaContext.prototype.F = function () { return this.tryGetToken(IRIParser.F, 0); };
    AlphaContext.prototype.G = function () { return this.tryGetToken(IRIParser.G, 0); };
    AlphaContext.prototype.H = function () { return this.tryGetToken(IRIParser.H, 0); };
    AlphaContext.prototype.I = function () { return this.tryGetToken(IRIParser.I, 0); };
    AlphaContext.prototype.J = function () { return this.tryGetToken(IRIParser.J, 0); };
    AlphaContext.prototype.K = function () { return this.tryGetToken(IRIParser.K, 0); };
    AlphaContext.prototype.L = function () { return this.tryGetToken(IRIParser.L, 0); };
    AlphaContext.prototype.M = function () { return this.tryGetToken(IRIParser.M, 0); };
    AlphaContext.prototype.N = function () { return this.tryGetToken(IRIParser.N, 0); };
    AlphaContext.prototype.O = function () { return this.tryGetToken(IRIParser.O, 0); };
    AlphaContext.prototype.P = function () { return this.tryGetToken(IRIParser.P, 0); };
    AlphaContext.prototype.Q = function () { return this.tryGetToken(IRIParser.Q, 0); };
    AlphaContext.prototype.R = function () { return this.tryGetToken(IRIParser.R, 0); };
    AlphaContext.prototype.S = function () { return this.tryGetToken(IRIParser.S, 0); };
    AlphaContext.prototype.T = function () { return this.tryGetToken(IRIParser.T, 0); };
    AlphaContext.prototype.U = function () { return this.tryGetToken(IRIParser.U, 0); };
    AlphaContext.prototype.V = function () { return this.tryGetToken(IRIParser.V, 0); };
    AlphaContext.prototype.W = function () { return this.tryGetToken(IRIParser.W, 0); };
    AlphaContext.prototype.X = function () { return this.tryGetToken(IRIParser.X, 0); };
    AlphaContext.prototype.Y = function () { return this.tryGetToken(IRIParser.Y, 0); };
    AlphaContext.prototype.Z = function () { return this.tryGetToken(IRIParser.Z, 0); };
    Object.defineProperty(AlphaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_alpha; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlphaContext.prototype.enterRule = function (listener) {
        if (listener.enterAlpha) {
            listener.enterAlpha(this);
        }
    };
    // @Override
    AlphaContext.prototype.exitRule = function (listener) {
        if (listener.exitAlpha) {
            listener.exitAlpha(this);
        }
    };
    // @Override
    AlphaContext.prototype.accept = function (visitor) {
        if (visitor.visitAlpha) {
            return visitor.visitAlpha(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlphaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlphaContext = AlphaContext;
var HexdigContext = /** @class */ (function (_super) {
    __extends(HexdigContext, _super);
    function HexdigContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HexdigContext.prototype.digit = function () {
        return this.tryGetRuleContext(0, DigitContext);
    };
    HexdigContext.prototype.A = function () { return this.tryGetToken(IRIParser.A, 0); };
    HexdigContext.prototype.B = function () { return this.tryGetToken(IRIParser.B, 0); };
    HexdigContext.prototype.C = function () { return this.tryGetToken(IRIParser.C, 0); };
    HexdigContext.prototype.D = function () { return this.tryGetToken(IRIParser.D, 0); };
    HexdigContext.prototype.E = function () { return this.tryGetToken(IRIParser.E, 0); };
    HexdigContext.prototype.F = function () { return this.tryGetToken(IRIParser.F, 0); };
    Object.defineProperty(HexdigContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_hexdig; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HexdigContext.prototype.enterRule = function (listener) {
        if (listener.enterHexdig) {
            listener.enterHexdig(this);
        }
    };
    // @Override
    HexdigContext.prototype.exitRule = function (listener) {
        if (listener.exitHexdig) {
            listener.exitHexdig(this);
        }
    };
    // @Override
    HexdigContext.prototype.accept = function (visitor) {
        if (visitor.visitHexdig) {
            return visitor.visitHexdig(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HexdigContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HexdigContext = HexdigContext;
var DigitContext = /** @class */ (function (_super) {
    __extends(DigitContext, _super);
    function DigitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DigitContext.prototype.D0 = function () { return this.tryGetToken(IRIParser.D0, 0); };
    DigitContext.prototype.non_zero_digit = function () {
        return this.tryGetRuleContext(0, Non_zero_digitContext);
    };
    Object.defineProperty(DigitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_digit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DigitContext.prototype.enterRule = function (listener) {
        if (listener.enterDigit) {
            listener.enterDigit(this);
        }
    };
    // @Override
    DigitContext.prototype.exitRule = function (listener) {
        if (listener.exitDigit) {
            listener.exitDigit(this);
        }
    };
    // @Override
    DigitContext.prototype.accept = function (visitor) {
        if (visitor.visitDigit) {
            return visitor.visitDigit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DigitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DigitContext = DigitContext;
var Non_zero_digitContext = /** @class */ (function (_super) {
    __extends(Non_zero_digitContext, _super);
    function Non_zero_digitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Non_zero_digitContext.prototype.D1 = function () { return this.tryGetToken(IRIParser.D1, 0); };
    Non_zero_digitContext.prototype.D2 = function () { return this.tryGetToken(IRIParser.D2, 0); };
    Non_zero_digitContext.prototype.D3 = function () { return this.tryGetToken(IRIParser.D3, 0); };
    Non_zero_digitContext.prototype.D4 = function () { return this.tryGetToken(IRIParser.D4, 0); };
    Non_zero_digitContext.prototype.D5 = function () { return this.tryGetToken(IRIParser.D5, 0); };
    Non_zero_digitContext.prototype.D6 = function () { return this.tryGetToken(IRIParser.D6, 0); };
    Non_zero_digitContext.prototype.D7 = function () { return this.tryGetToken(IRIParser.D7, 0); };
    Non_zero_digitContext.prototype.D8 = function () { return this.tryGetToken(IRIParser.D8, 0); };
    Non_zero_digitContext.prototype.D9 = function () { return this.tryGetToken(IRIParser.D9, 0); };
    Object.defineProperty(Non_zero_digitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return IRIParser.RULE_non_zero_digit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Non_zero_digitContext.prototype.enterRule = function (listener) {
        if (listener.enterNon_zero_digit) {
            listener.enterNon_zero_digit(this);
        }
    };
    // @Override
    Non_zero_digitContext.prototype.exitRule = function (listener) {
        if (listener.exitNon_zero_digit) {
            listener.exitNon_zero_digit(this);
        }
    };
    // @Override
    Non_zero_digitContext.prototype.accept = function (visitor) {
        if (visitor.visitNon_zero_digit) {
            return visitor.visitNon_zero_digit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Non_zero_digitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Non_zero_digitContext = Non_zero_digitContext;
