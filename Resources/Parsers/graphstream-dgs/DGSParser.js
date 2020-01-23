"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/graphstream-dgs/DGSParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var DGSParser = /** @class */ (function (_super) {
    __extends(DGSParser, _super);
    function DGSParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(DGSParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(DGSParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return DGSParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DGSParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "DGSParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DGSParser.prototype, "ruleNames", {
        // @Override
        get: function () { return DGSParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DGSParser.prototype, "serializedATN", {
        // @Override
        get: function () { return DGSParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    DGSParser.prototype.dgs = function () {
        var _localctx = new DgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, DGSParser.RULE_dgs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 42;
                this.header();
                this.state = 48;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DGSParser.AN) | (1 << DGSParser.CN) | (1 << DGSParser.DN) | (1 << DGSParser.AE) | (1 << DGSParser.CE) | (1 << DGSParser.DE) | (1 << DGSParser.CG) | (1 << DGSParser.ST) | (1 << DGSParser.CL) | (1 << DGSParser.EOL) | (1 << DGSParser.COMMENT))) !== 0)) {
                    {
                        this.state = 46;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case DGSParser.AN:
                            case DGSParser.CN:
                            case DGSParser.DN:
                            case DGSParser.AE:
                            case DGSParser.CE:
                            case DGSParser.DE:
                            case DGSParser.CG:
                            case DGSParser.ST:
                            case DGSParser.CL:
                                {
                                    this.state = 43;
                                    this.event();
                                }
                                break;
                            case DGSParser.COMMENT:
                                {
                                    this.state = 44;
                                    this.match(DGSParser.COMMENT);
                                }
                                break;
                            case DGSParser.EOL:
                                {
                                    this.state = 45;
                                    this.match(DGSParser.EOL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 50;
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
    DGSParser.prototype.header = function () {
        var _localctx = new HeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, DGSParser.RULE_header);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this.match(DGSParser.MAGIC);
                this.state = 52;
                this.match(DGSParser.EOL);
                this.state = 53;
                this.identifier();
                this.state = 54;
                this.match(DGSParser.INT);
                this.state = 55;
                this.match(DGSParser.INT);
                this.state = 56;
                this.match(DGSParser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.event = function () {
        var _localctx = new EventContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, DGSParser.RULE_event);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 67;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case DGSParser.AN:
                        {
                            this.state = 58;
                            this.an();
                        }
                        break;
                    case DGSParser.CN:
                        {
                            this.state = 59;
                            this.cn();
                        }
                        break;
                    case DGSParser.DN:
                        {
                            this.state = 60;
                            this.dn();
                        }
                        break;
                    case DGSParser.AE:
                        {
                            this.state = 61;
                            this.ae();
                        }
                        break;
                    case DGSParser.CE:
                        {
                            this.state = 62;
                            this.ce();
                        }
                        break;
                    case DGSParser.DE:
                        {
                            this.state = 63;
                            this.de();
                        }
                        break;
                    case DGSParser.CG:
                        {
                            this.state = 64;
                            this.cg();
                        }
                        break;
                    case DGSParser.ST:
                        {
                            this.state = 65;
                            this.st();
                        }
                        break;
                    case DGSParser.CL:
                        {
                            this.state = 66;
                            this.cl();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 69;
                _la = this._input.LA(1);
                if (!(_la === DGSParser.EOL || _la === DGSParser.COMMENT)) {
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
    DGSParser.prototype.an = function () {
        var _localctx = new AnContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, DGSParser.RULE_an);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this.match(DGSParser.AN);
                this.state = 72;
                this.identifier();
                this.state = 73;
                this.attributes();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.cn = function () {
        var _localctx = new CnContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, DGSParser.RULE_cn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this.match(DGSParser.CN);
                this.state = 76;
                this.identifier();
                this.state = 77;
                this.attributes();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.dn = function () {
        var _localctx = new DnContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, DGSParser.RULE_dn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this.match(DGSParser.DN);
                this.state = 80;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.ae = function () {
        var _localctx = new AeContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, DGSParser.RULE_ae);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.match(DGSParser.AE);
                this.state = 83;
                this.identifier();
                this.state = 84;
                this.identifier();
                this.state = 86;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DGSParser.LANGLE || _la === DGSParser.RANGLE) {
                    {
                        this.state = 85;
                        this.direction();
                    }
                }
                this.state = 88;
                this.identifier();
                this.state = 89;
                this.attributes();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.ce = function () {
        var _localctx = new CeContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, DGSParser.RULE_ce);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 91;
                this.match(DGSParser.CE);
                this.state = 92;
                this.identifier();
                this.state = 93;
                this.attributes();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.de = function () {
        var _localctx = new DeContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, DGSParser.RULE_de);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
                this.match(DGSParser.DE);
                this.state = 96;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.cg = function () {
        var _localctx = new CgContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, DGSParser.RULE_cg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.match(DGSParser.CG);
                this.state = 99;
                this.attributes();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.st = function () {
        var _localctx = new StContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, DGSParser.RULE_st);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(DGSParser.ST);
                this.state = 102;
                this.match(DGSParser.REAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.cl = function () {
        var _localctx = new ClContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, DGSParser.RULE_cl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.match(DGSParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.attributes = function () {
        var _localctx = new AttributesContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, DGSParser.RULE_attributes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.PLUS) | (1 << DGSParser.MINUS) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING))) !== 0)) {
                    {
                        {
                            this.state = 106;
                            this.attribute();
                        }
                    }
                    this.state = 111;
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
    DGSParser.prototype.attribute = function () {
        var _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, DGSParser.RULE_attribute);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DGSParser.PLUS || _la === DGSParser.MINUS) {
                    {
                        this.state = 112;
                        _la = this._input.LA(1);
                        if (!(_la === DGSParser.PLUS || _la === DGSParser.MINUS)) {
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
                this.state = 115;
                this.identifier();
                this.state = 125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DGSParser.EQUALS || _la === DGSParser.COLON) {
                    {
                        this.state = 116;
                        this.assign();
                        this.state = 117;
                        this.value();
                        this.state = 122;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === DGSParser.COMMA) {
                            {
                                {
                                    this.state = 118;
                                    this.match(DGSParser.COMMA);
                                    this.state = 119;
                                    this.value();
                                }
                            }
                            this.state = 124;
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
    DGSParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, DGSParser.RULE_value);
        try {
            this.state = 134;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 127;
                        this.match(DGSParser.STRING);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 128;
                        this.match(DGSParser.INT);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 129;
                        this.match(DGSParser.REAL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 130;
                        this.match(DGSParser.COLOR);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 131;
                        this.array();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 132;
                        this.a_map();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 133;
                        this.identifier();
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
    DGSParser.prototype.array = function () {
        var _localctx = new ArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, DGSParser.RULE_array);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                this.match(DGSParser.LBRACE);
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.REAL) | (1 << DGSParser.LBRACE) | (1 << DGSParser.LBRACK) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING) | (1 << DGSParser.COLOR))) !== 0)) {
                    {
                        this.state = 137;
                        this.value();
                        this.state = 142;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === DGSParser.COMMA) {
                            {
                                {
                                    this.state = 138;
                                    this.match(DGSParser.COMMA);
                                    this.state = 139;
                                    this.value();
                                }
                            }
                            this.state = 144;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 147;
                this.match(DGSParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.a_map = function () {
        var _localctx = new A_mapContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, DGSParser.RULE_a_map);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.match(DGSParser.LBRACK);
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING))) !== 0)) {
                    {
                        this.state = 150;
                        this.mapping();
                        this.state = 155;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === DGSParser.COMMA) {
                            {
                                {
                                    this.state = 151;
                                    this.match(DGSParser.COMMA);
                                    this.state = 152;
                                    this.mapping();
                                }
                            }
                            this.state = 157;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 160;
                this.match(DGSParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.mapping = function () {
        var _localctx = new MappingContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, DGSParser.RULE_mapping);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.identifier();
                this.state = 163;
                this.assign();
                this.state = 164;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    DGSParser.prototype.direction = function () {
        var _localctx = new DirectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, DGSParser.RULE_direction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                _la = this._input.LA(1);
                if (!(_la === DGSParser.LANGLE || _la === DGSParser.RANGLE)) {
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
    DGSParser.prototype.assign = function () {
        var _localctx = new AssignContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, DGSParser.RULE_assign);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                _la = this._input.LA(1);
                if (!(_la === DGSParser.EQUALS || _la === DGSParser.COLON)) {
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
    DGSParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, DGSParser.RULE_identifier);
        var _la;
        try {
            this.state = 180;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case DGSParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 170;
                        this.match(DGSParser.STRING);
                    }
                    break;
                case DGSParser.INT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 171;
                        this.match(DGSParser.INT);
                    }
                    break;
                case DGSParser.WORD:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 172;
                        this.match(DGSParser.WORD);
                        this.state = 177;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === DGSParser.DOT) {
                            {
                                {
                                    this.state = 173;
                                    this.match(DGSParser.DOT);
                                    this.state = 174;
                                    this.match(DGSParser.WORD);
                                }
                            }
                            this.state = 179;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
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
    Object.defineProperty(DGSParser, "_ATN", {
        get: function () {
            if (!DGSParser.__ATN) {
                DGSParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(DGSParser._serializedATN));
            }
            return DGSParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    DGSParser.MAGIC = 1;
    DGSParser.AN = 2;
    DGSParser.CN = 3;
    DGSParser.DN = 4;
    DGSParser.AE = 5;
    DGSParser.CE = 6;
    DGSParser.DE = 7;
    DGSParser.CG = 8;
    DGSParser.ST = 9;
    DGSParser.CL = 10;
    DGSParser.INT = 11;
    DGSParser.REAL = 12;
    DGSParser.PLUS = 13;
    DGSParser.MINUS = 14;
    DGSParser.COMMA = 15;
    DGSParser.LBRACE = 16;
    DGSParser.RBRACE = 17;
    DGSParser.LBRACK = 18;
    DGSParser.RBRACK = 19;
    DGSParser.DOT = 20;
    DGSParser.LANGLE = 21;
    DGSParser.RANGLE = 22;
    DGSParser.EQUALS = 23;
    DGSParser.COLON = 24;
    DGSParser.EOL = 25;
    DGSParser.WORD = 26;
    DGSParser.STRING = 27;
    DGSParser.COLOR = 28;
    DGSParser.START_COMMENT = 29;
    DGSParser.WS = 30;
    DGSParser.COMMENT = 31;
    DGSParser.RULE_dgs = 0;
    DGSParser.RULE_header = 1;
    DGSParser.RULE_event = 2;
    DGSParser.RULE_an = 3;
    DGSParser.RULE_cn = 4;
    DGSParser.RULE_dn = 5;
    DGSParser.RULE_ae = 6;
    DGSParser.RULE_ce = 7;
    DGSParser.RULE_de = 8;
    DGSParser.RULE_cg = 9;
    DGSParser.RULE_st = 10;
    DGSParser.RULE_cl = 11;
    DGSParser.RULE_attributes = 12;
    DGSParser.RULE_attribute = 13;
    DGSParser.RULE_value = 14;
    DGSParser.RULE_array = 15;
    DGSParser.RULE_a_map = 16;
    DGSParser.RULE_mapping = 17;
    DGSParser.RULE_direction = 18;
    DGSParser.RULE_assign = 19;
    DGSParser.RULE_identifier = 20;
    // tslint:disable:no-trailing-whitespace
    DGSParser.ruleNames = [
        "dgs", "header", "event", "an", "cn", "dn", "ae", "ce", "de", "cg", "st",
        "cl", "attributes", "attribute", "value", "array", "a_map", "mapping",
        "direction", "assign", "identifier",
    ];
    DGSParser._LITERAL_NAMES = [
        undefined, undefined, "'an'", "'cn'", "'dn'", "'ae'", "'ce'", "'de'",
        "'cg'", "'st'", "'cl'", undefined, undefined, "'+'", "'-'", "','", "'{'",
        "'}'", "'['", "']'", "'.'", "'<'", "'>'", "'='", "':'", undefined, undefined,
        undefined, undefined, "'#'",
    ];
    DGSParser._SYMBOLIC_NAMES = [
        undefined, "MAGIC", "AN", "CN", "DN", "AE", "CE", "DE", "CG", "ST", "CL",
        "INT", "REAL", "PLUS", "MINUS", "COMMA", "LBRACE", "RBRACE", "LBRACK",
        "RBRACK", "DOT", "LANGLE", "RANGLE", "EQUALS", "COLON", "EOL", "WORD",
        "STRING", "COLOR", "START_COMMENT", "WS", "COMMENT",
    ];
    DGSParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(DGSParser._LITERAL_NAMES, DGSParser._SYMBOLIC_NAMES, []);
    DGSParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\xB9\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x07\x021\n\x02\f\x02\x0E\x024\v\x02\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04F\n\x04\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\bY\n\b\x03\b\x03\b\x03\b\x03\t\x03" +
        "\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
        "\r\x03\r\x03\x0E\x07\x0En\n\x0E\f\x0E\x0E\x0Eq\v\x0E\x03\x0F\x05\x0Ft" +
        "\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F{\n\x0F\f\x0F\x0E" +
        "\x0F~\v\x0F\x05\x0F\x80\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x05\x10\x89\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
        "\x11\x8F\n\x11\f\x11\x0E\x11\x92\v\x11\x05\x11\x94\n\x11\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\x9C\n\x12\f\x12\x0E\x12\x9F\v" +
        "\x12\x05\x12\xA1\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
        "\x07\x16\xB2\n\x16\f\x16\x0E\x16\xB5\v\x16\x05\x16\xB7\n\x16\x03\x16\x02" +
        "\x02\x02\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
        "&\x02(\x02*\x02\x02\x06\x04\x02\x1B\x1B!!\x03\x02\x0F\x10\x03\x02\x17" +
        "\x18\x03\x02\x19\x1A\x02\xC0\x02,\x03\x02\x02\x02\x045\x03\x02\x02\x02" +
        "\x06E\x03\x02\x02\x02\bI\x03\x02\x02\x02\nM\x03\x02\x02\x02\fQ\x03\x02" +
        "\x02\x02\x0ET\x03\x02\x02\x02\x10]\x03\x02\x02\x02\x12a\x03\x02\x02\x02" +
        "\x14d\x03\x02\x02\x02\x16g\x03\x02\x02\x02\x18j\x03\x02\x02\x02\x1Ao\x03" +
        "\x02\x02\x02\x1Cs\x03\x02\x02\x02\x1E\x88\x03\x02\x02\x02 \x8A\x03\x02" +
        "\x02\x02\"\x97\x03\x02\x02\x02$\xA4\x03\x02\x02\x02&\xA8\x03\x02\x02\x02" +
        "(\xAA\x03\x02\x02\x02*\xB6\x03\x02\x02\x02,2\x05\x04\x03\x02-1\x05\x06" +
        "\x04\x02.1\x07!\x02\x02/1\x07\x1B\x02\x020-\x03\x02\x02\x020.\x03\x02" +
        "\x02\x020/\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02" +
        "\x02\x023\x03\x03\x02\x02\x0242\x03\x02\x02\x0256\x07\x03\x02\x0267\x07" +
        "\x1B\x02\x0278\x05*\x16\x0289\x07\r\x02\x029:\x07\r\x02\x02:;\x07\x1B" +
        "\x02\x02;\x05\x03\x02\x02\x02<F\x05\b\x05\x02=F\x05\n\x06\x02>F\x05\f" +
        "\x07\x02?F\x05\x0E\b\x02@F\x05\x10\t\x02AF\x05\x12\n\x02BF\x05\x14\v\x02" +
        "CF\x05\x16\f\x02DF\x05\x18\r\x02E<\x03\x02\x02\x02E=\x03\x02\x02\x02E" +
        ">\x03\x02\x02\x02E?\x03\x02\x02\x02E@\x03\x02\x02\x02EA\x03\x02\x02\x02" +
        "EB\x03\x02\x02\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02" +
        "GH\t\x02\x02\x02H\x07\x03\x02\x02\x02IJ\x07\x04\x02\x02JK\x05*\x16\x02" +
        "KL\x05\x1A\x0E\x02L\t\x03\x02\x02\x02MN\x07\x05\x02\x02NO\x05*\x16\x02" +
        "OP\x05\x1A\x0E\x02P\v\x03\x02\x02\x02QR\x07\x06\x02\x02RS\x05*\x16\x02" +
        "S\r\x03\x02\x02\x02TU\x07\x07\x02\x02UV\x05*\x16\x02VX\x05*\x16\x02WY" +
        "\x05&\x14\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[" +
        "\x05*\x16\x02[\\\x05\x1A\x0E\x02\\\x0F\x03\x02\x02\x02]^\x07\b\x02\x02" +
        "^_\x05*\x16\x02_`\x05\x1A\x0E\x02`\x11\x03\x02\x02\x02ab\x07\t\x02\x02" +
        "bc\x05*\x16\x02c\x13\x03\x02\x02\x02de\x07\n\x02\x02ef\x05\x1A\x0E\x02" +
        "f\x15\x03\x02\x02\x02gh\x07\v\x02\x02hi\x07\x0E\x02\x02i\x17\x03\x02\x02" +
        "\x02jk\x07\f\x02\x02k\x19\x03\x02\x02\x02ln\x05\x1C\x0F\x02ml\x03\x02" +
        "\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\x1B\x03" +
        "\x02\x02\x02qo\x03\x02\x02\x02rt\t\x03\x02\x02sr\x03\x02\x02\x02st\x03" +
        "\x02\x02\x02tu\x03\x02\x02\x02u\x7F\x05*\x16\x02vw\x05(\x15\x02w|\x05" +
        "\x1E\x10\x02xy\x07\x11\x02\x02y{\x05\x1E\x10\x02zx\x03\x02\x02\x02{~\x03" +
        "\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x80\x03\x02\x02\x02" +
        "~|\x03\x02\x02\x02\x7Fv\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x1D" +
        "\x03\x02\x02\x02\x81\x89\x07\x1D\x02\x02\x82\x89\x07\r\x02\x02\x83\x89" +
        "\x07\x0E\x02\x02\x84\x89\x07\x1E\x02\x02\x85\x89\x05 \x11\x02\x86\x89" +
        "\x05\"\x12\x02\x87\x89\x05*\x16\x02\x88\x81\x03\x02\x02\x02\x88\x82\x03" +
        "\x02\x02\x02\x88\x83\x03\x02\x02\x02\x88\x84\x03\x02\x02\x02\x88\x85\x03" +
        "\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x87\x03\x02\x02\x02\x89\x1F\x03" +
        "\x02\x02\x02\x8A\x93\x07\x12\x02\x02\x8B\x90\x05\x1E\x10\x02\x8C\x8D\x07" +
        "\x11\x02\x02\x8D\x8F\x05\x1E\x10\x02\x8E\x8C\x03\x02\x02\x02\x8F\x92\x03" +
        "\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x94\x03" +
        "\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x8B\x03\x02\x02\x02\x93\x94\x03" +
        "\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x07\x13\x02\x02\x96!\x03" +
        "\x02\x02\x02\x97\xA0\x07\x14\x02\x02\x98\x9D\x05$\x13\x02\x99\x9A\x07" +
        "\x11\x02\x02\x9A\x9C\x05$\x13\x02\x9B\x99\x03\x02\x02\x02\x9C\x9F\x03" +
        "\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA1\x03" +
        "\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\x98\x03\x02\x02\x02\xA0\xA1\x03" +
        "\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x07\x15\x02\x02\xA3#\x03" +
        "\x02\x02\x02\xA4\xA5\x05*\x16\x02\xA5\xA6\x05(\x15\x02\xA6\xA7\x05\x1E" +
        "\x10\x02\xA7%\x03\x02\x02\x02\xA8\xA9\t\x04\x02\x02\xA9\'\x03\x02\x02" +
        "\x02\xAA\xAB\t\x05\x02\x02\xAB)\x03\x02\x02\x02\xAC\xB7\x07\x1D\x02\x02" +
        "\xAD\xB7\x07\r\x02\x02\xAE\xB3\x07\x1C\x02\x02\xAF\xB0\x07\x16\x02\x02" +
        "\xB0\xB2\x07\x1C\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02" +
        "\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02" +
        "\xB5\xB3\x03\x02\x02\x02\xB6\xAC\x03\x02\x02\x02\xB6\xAD\x03\x02\x02\x02" +
        "\xB6\xAE\x03\x02\x02\x02\xB7+\x03\x02\x02\x02\x1102EXos|\x7F\x88\x90\x93" +
        "\x9D\xA0\xB3\xB6";
    return DGSParser;
}(Parser_1.Parser));
exports.DGSParser = DGSParser;
var DgsContext = /** @class */ (function (_super) {
    __extends(DgsContext, _super);
    function DgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DgsContext.prototype.header = function () {
        return this.getRuleContext(0, HeaderContext);
    };
    DgsContext.prototype.event = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EventContext);
        }
        else {
            return this.getRuleContext(i, EventContext);
        }
    };
    DgsContext.prototype.COMMENT = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.COMMENT);
        }
        else {
            return this.getToken(DGSParser.COMMENT, i);
        }
    };
    DgsContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.EOL);
        }
        else {
            return this.getToken(DGSParser.EOL, i);
        }
    };
    Object.defineProperty(DgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_dgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DgsContext.prototype.enterRule = function (listener) {
        if (listener.enterDgs) {
            listener.enterDgs(this);
        }
    };
    // @Override
    DgsContext.prototype.exitRule = function (listener) {
        if (listener.exitDgs) {
            listener.exitDgs(this);
        }
    };
    // @Override
    DgsContext.prototype.accept = function (visitor) {
        if (visitor.visitDgs) {
            return visitor.visitDgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DgsContext = DgsContext;
var HeaderContext = /** @class */ (function (_super) {
    __extends(HeaderContext, _super);
    function HeaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HeaderContext.prototype.MAGIC = function () { return this.getToken(DGSParser.MAGIC, 0); };
    HeaderContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.EOL);
        }
        else {
            return this.getToken(DGSParser.EOL, i);
        }
    };
    HeaderContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    HeaderContext.prototype.INT = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.INT);
        }
        else {
            return this.getToken(DGSParser.INT, i);
        }
    };
    Object.defineProperty(HeaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_header; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HeaderContext.prototype.enterRule = function (listener) {
        if (listener.enterHeader) {
            listener.enterHeader(this);
        }
    };
    // @Override
    HeaderContext.prototype.exitRule = function (listener) {
        if (listener.exitHeader) {
            listener.exitHeader(this);
        }
    };
    // @Override
    HeaderContext.prototype.accept = function (visitor) {
        if (visitor.visitHeader) {
            return visitor.visitHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HeaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HeaderContext = HeaderContext;
var EventContext = /** @class */ (function (_super) {
    __extends(EventContext, _super);
    function EventContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EventContext.prototype.COMMENT = function () { return this.tryGetToken(DGSParser.COMMENT, 0); };
    EventContext.prototype.EOL = function () { return this.tryGetToken(DGSParser.EOL, 0); };
    EventContext.prototype.an = function () {
        return this.tryGetRuleContext(0, AnContext);
    };
    EventContext.prototype.cn = function () {
        return this.tryGetRuleContext(0, CnContext);
    };
    EventContext.prototype.dn = function () {
        return this.tryGetRuleContext(0, DnContext);
    };
    EventContext.prototype.ae = function () {
        return this.tryGetRuleContext(0, AeContext);
    };
    EventContext.prototype.ce = function () {
        return this.tryGetRuleContext(0, CeContext);
    };
    EventContext.prototype.de = function () {
        return this.tryGetRuleContext(0, DeContext);
    };
    EventContext.prototype.cg = function () {
        return this.tryGetRuleContext(0, CgContext);
    };
    EventContext.prototype.st = function () {
        return this.tryGetRuleContext(0, StContext);
    };
    EventContext.prototype.cl = function () {
        return this.tryGetRuleContext(0, ClContext);
    };
    Object.defineProperty(EventContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_event; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EventContext.prototype.enterRule = function (listener) {
        if (listener.enterEvent) {
            listener.enterEvent(this);
        }
    };
    // @Override
    EventContext.prototype.exitRule = function (listener) {
        if (listener.exitEvent) {
            listener.exitEvent(this);
        }
    };
    // @Override
    EventContext.prototype.accept = function (visitor) {
        if (visitor.visitEvent) {
            return visitor.visitEvent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EventContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EventContext = EventContext;
var AnContext = /** @class */ (function (_super) {
    __extends(AnContext, _super);
    function AnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnContext.prototype.AN = function () { return this.getToken(DGSParser.AN, 0); };
    AnContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    AnContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    Object.defineProperty(AnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_an; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnContext.prototype.enterRule = function (listener) {
        if (listener.enterAn) {
            listener.enterAn(this);
        }
    };
    // @Override
    AnContext.prototype.exitRule = function (listener) {
        if (listener.exitAn) {
            listener.exitAn(this);
        }
    };
    // @Override
    AnContext.prototype.accept = function (visitor) {
        if (visitor.visitAn) {
            return visitor.visitAn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnContext = AnContext;
var CnContext = /** @class */ (function (_super) {
    __extends(CnContext, _super);
    function CnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CnContext.prototype.CN = function () { return this.getToken(DGSParser.CN, 0); };
    CnContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    CnContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    Object.defineProperty(CnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_cn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CnContext.prototype.enterRule = function (listener) {
        if (listener.enterCn) {
            listener.enterCn(this);
        }
    };
    // @Override
    CnContext.prototype.exitRule = function (listener) {
        if (listener.exitCn) {
            listener.exitCn(this);
        }
    };
    // @Override
    CnContext.prototype.accept = function (visitor) {
        if (visitor.visitCn) {
            return visitor.visitCn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CnContext = CnContext;
var DnContext = /** @class */ (function (_super) {
    __extends(DnContext, _super);
    function DnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DnContext.prototype.DN = function () { return this.getToken(DGSParser.DN, 0); };
    DnContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(DnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_dn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DnContext.prototype.enterRule = function (listener) {
        if (listener.enterDn) {
            listener.enterDn(this);
        }
    };
    // @Override
    DnContext.prototype.exitRule = function (listener) {
        if (listener.exitDn) {
            listener.exitDn(this);
        }
    };
    // @Override
    DnContext.prototype.accept = function (visitor) {
        if (visitor.visitDn) {
            return visitor.visitDn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DnContext = DnContext;
var AeContext = /** @class */ (function (_super) {
    __extends(AeContext, _super);
    function AeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AeContext.prototype.AE = function () { return this.getToken(DGSParser.AE, 0); };
    AeContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    AeContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    AeContext.prototype.direction = function () {
        return this.tryGetRuleContext(0, DirectionContext);
    };
    Object.defineProperty(AeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_ae; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AeContext.prototype.enterRule = function (listener) {
        if (listener.enterAe) {
            listener.enterAe(this);
        }
    };
    // @Override
    AeContext.prototype.exitRule = function (listener) {
        if (listener.exitAe) {
            listener.exitAe(this);
        }
    };
    // @Override
    AeContext.prototype.accept = function (visitor) {
        if (visitor.visitAe) {
            return visitor.visitAe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AeContext = AeContext;
var CeContext = /** @class */ (function (_super) {
    __extends(CeContext, _super);
    function CeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CeContext.prototype.CE = function () { return this.getToken(DGSParser.CE, 0); };
    CeContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    CeContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    Object.defineProperty(CeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_ce; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CeContext.prototype.enterRule = function (listener) {
        if (listener.enterCe) {
            listener.enterCe(this);
        }
    };
    // @Override
    CeContext.prototype.exitRule = function (listener) {
        if (listener.exitCe) {
            listener.exitCe(this);
        }
    };
    // @Override
    CeContext.prototype.accept = function (visitor) {
        if (visitor.visitCe) {
            return visitor.visitCe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CeContext = CeContext;
var DeContext = /** @class */ (function (_super) {
    __extends(DeContext, _super);
    function DeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeContext.prototype.DE = function () { return this.getToken(DGSParser.DE, 0); };
    DeContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(DeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_de; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeContext.prototype.enterRule = function (listener) {
        if (listener.enterDe) {
            listener.enterDe(this);
        }
    };
    // @Override
    DeContext.prototype.exitRule = function (listener) {
        if (listener.exitDe) {
            listener.exitDe(this);
        }
    };
    // @Override
    DeContext.prototype.accept = function (visitor) {
        if (visitor.visitDe) {
            return visitor.visitDe(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeContext = DeContext;
var CgContext = /** @class */ (function (_super) {
    __extends(CgContext, _super);
    function CgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CgContext.prototype.CG = function () { return this.getToken(DGSParser.CG, 0); };
    CgContext.prototype.attributes = function () {
        return this.getRuleContext(0, AttributesContext);
    };
    Object.defineProperty(CgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_cg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CgContext.prototype.enterRule = function (listener) {
        if (listener.enterCg) {
            listener.enterCg(this);
        }
    };
    // @Override
    CgContext.prototype.exitRule = function (listener) {
        if (listener.exitCg) {
            listener.exitCg(this);
        }
    };
    // @Override
    CgContext.prototype.accept = function (visitor) {
        if (visitor.visitCg) {
            return visitor.visitCg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CgContext = CgContext;
var StContext = /** @class */ (function (_super) {
    __extends(StContext, _super);
    function StContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StContext.prototype.ST = function () { return this.getToken(DGSParser.ST, 0); };
    StContext.prototype.REAL = function () { return this.getToken(DGSParser.REAL, 0); };
    Object.defineProperty(StContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_st; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StContext.prototype.enterRule = function (listener) {
        if (listener.enterSt) {
            listener.enterSt(this);
        }
    };
    // @Override
    StContext.prototype.exitRule = function (listener) {
        if (listener.exitSt) {
            listener.exitSt(this);
        }
    };
    // @Override
    StContext.prototype.accept = function (visitor) {
        if (visitor.visitSt) {
            return visitor.visitSt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StContext = StContext;
var ClContext = /** @class */ (function (_super) {
    __extends(ClContext, _super);
    function ClContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClContext.prototype.CL = function () { return this.getToken(DGSParser.CL, 0); };
    Object.defineProperty(ClContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_cl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClContext.prototype.enterRule = function (listener) {
        if (listener.enterCl) {
            listener.enterCl(this);
        }
    };
    // @Override
    ClContext.prototype.exitRule = function (listener) {
        if (listener.exitCl) {
            listener.exitCl(this);
        }
    };
    // @Override
    ClContext.prototype.accept = function (visitor) {
        if (visitor.visitCl) {
            return visitor.visitCl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClContext = ClContext;
var AttributesContext = /** @class */ (function (_super) {
    __extends(AttributesContext, _super);
    function AttributesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributesContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    Object.defineProperty(AttributesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_attributes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributesContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributes) {
            listener.enterAttributes(this);
        }
    };
    // @Override
    AttributesContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributes) {
            listener.exitAttributes(this);
        }
    };
    // @Override
    AttributesContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributes) {
            return visitor.visitAttributes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributesContext = AttributesContext;
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    AttributeContext.prototype.assign = function () {
        return this.tryGetRuleContext(0, AssignContext);
    };
    AttributeContext.prototype.value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    };
    AttributeContext.prototype.PLUS = function () { return this.tryGetToken(DGSParser.PLUS, 0); };
    AttributeContext.prototype.MINUS = function () { return this.tryGetToken(DGSParser.MINUS, 0); };
    AttributeContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.COMMA);
        }
        else {
            return this.getToken(DGSParser.COMMA, i);
        }
    };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeContext = AttributeContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.STRING = function () { return this.tryGetToken(DGSParser.STRING, 0); };
    ValueContext.prototype.INT = function () { return this.tryGetToken(DGSParser.INT, 0); };
    ValueContext.prototype.REAL = function () { return this.tryGetToken(DGSParser.REAL, 0); };
    ValueContext.prototype.COLOR = function () { return this.tryGetToken(DGSParser.COLOR, 0); };
    ValueContext.prototype.array = function () {
        return this.tryGetRuleContext(0, ArrayContext);
    };
    ValueContext.prototype.a_map = function () {
        return this.tryGetRuleContext(0, A_mapContext);
    };
    ValueContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueContext.prototype.enterRule = function (listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    };
    // @Override
    ValueContext.prototype.exitRule = function (listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    };
    // @Override
    ValueContext.prototype.accept = function (visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var ArrayContext = /** @class */ (function (_super) {
    __extends(ArrayContext, _super);
    function ArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayContext.prototype.LBRACE = function () { return this.getToken(DGSParser.LBRACE, 0); };
    ArrayContext.prototype.RBRACE = function () { return this.getToken(DGSParser.RBRACE, 0); };
    ArrayContext.prototype.value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    };
    ArrayContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.COMMA);
        }
        else {
            return this.getToken(DGSParser.COMMA, i);
        }
    };
    Object.defineProperty(ArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_array; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterArray) {
            listener.enterArray(this);
        }
    };
    // @Override
    ArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitArray) {
            listener.exitArray(this);
        }
    };
    // @Override
    ArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitArray) {
            return visitor.visitArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayContext = ArrayContext;
var A_mapContext = /** @class */ (function (_super) {
    __extends(A_mapContext, _super);
    function A_mapContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    A_mapContext.prototype.LBRACK = function () { return this.getToken(DGSParser.LBRACK, 0); };
    A_mapContext.prototype.RBRACK = function () { return this.getToken(DGSParser.RBRACK, 0); };
    A_mapContext.prototype.mapping = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MappingContext);
        }
        else {
            return this.getRuleContext(i, MappingContext);
        }
    };
    A_mapContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.COMMA);
        }
        else {
            return this.getToken(DGSParser.COMMA, i);
        }
    };
    Object.defineProperty(A_mapContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_a_map; },
        enumerable: true,
        configurable: true
    });
    // @Override
    A_mapContext.prototype.enterRule = function (listener) {
        if (listener.enterA_map) {
            listener.enterA_map(this);
        }
    };
    // @Override
    A_mapContext.prototype.exitRule = function (listener) {
        if (listener.exitA_map) {
            listener.exitA_map(this);
        }
    };
    // @Override
    A_mapContext.prototype.accept = function (visitor) {
        if (visitor.visitA_map) {
            return visitor.visitA_map(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return A_mapContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.A_mapContext = A_mapContext;
var MappingContext = /** @class */ (function (_super) {
    __extends(MappingContext, _super);
    function MappingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MappingContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    MappingContext.prototype.assign = function () {
        return this.getRuleContext(0, AssignContext);
    };
    MappingContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Object.defineProperty(MappingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_mapping; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MappingContext.prototype.enterRule = function (listener) {
        if (listener.enterMapping) {
            listener.enterMapping(this);
        }
    };
    // @Override
    MappingContext.prototype.exitRule = function (listener) {
        if (listener.exitMapping) {
            listener.exitMapping(this);
        }
    };
    // @Override
    MappingContext.prototype.accept = function (visitor) {
        if (visitor.visitMapping) {
            return visitor.visitMapping(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MappingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MappingContext = MappingContext;
var DirectionContext = /** @class */ (function (_super) {
    __extends(DirectionContext, _super);
    function DirectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectionContext.prototype.LANGLE = function () { return this.tryGetToken(DGSParser.LANGLE, 0); };
    DirectionContext.prototype.RANGLE = function () { return this.tryGetToken(DGSParser.RANGLE, 0); };
    Object.defineProperty(DirectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_direction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectionContext.prototype.enterRule = function (listener) {
        if (listener.enterDirection) {
            listener.enterDirection(this);
        }
    };
    // @Override
    DirectionContext.prototype.exitRule = function (listener) {
        if (listener.exitDirection) {
            listener.exitDirection(this);
        }
    };
    // @Override
    DirectionContext.prototype.accept = function (visitor) {
        if (visitor.visitDirection) {
            return visitor.visitDirection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectionContext = DirectionContext;
var AssignContext = /** @class */ (function (_super) {
    __extends(AssignContext, _super);
    function AssignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignContext.prototype.EQUALS = function () { return this.tryGetToken(DGSParser.EQUALS, 0); };
    AssignContext.prototype.COLON = function () { return this.tryGetToken(DGSParser.COLON, 0); };
    Object.defineProperty(AssignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_assign; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignContext.prototype.enterRule = function (listener) {
        if (listener.enterAssign) {
            listener.enterAssign(this);
        }
    };
    // @Override
    AssignContext.prototype.exitRule = function (listener) {
        if (listener.exitAssign) {
            listener.exitAssign(this);
        }
    };
    // @Override
    AssignContext.prototype.accept = function (visitor) {
        if (visitor.visitAssign) {
            return visitor.visitAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignContext = AssignContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.STRING = function () { return this.tryGetToken(DGSParser.STRING, 0); };
    IdentifierContext.prototype.INT = function () { return this.tryGetToken(DGSParser.INT, 0); };
    IdentifierContext.prototype.WORD = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.WORD);
        }
        else {
            return this.getToken(DGSParser.WORD, i);
        }
    };
    IdentifierContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(DGSParser.DOT);
        }
        else {
            return this.getToken(DGSParser.DOT, i);
        }
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DGSParser.RULE_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierContext = IdentifierContext;
