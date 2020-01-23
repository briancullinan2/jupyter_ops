"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/modula2pim4/m2pim4.g4 by ANTLR 4.7.3-SNAPSHOT
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
var m2pim4Parser = /** @class */ (function (_super) {
    __extends(m2pim4Parser, _super);
    function m2pim4Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(m2pim4Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(m2pim4Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return m2pim4Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(m2pim4Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "m2pim4.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(m2pim4Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return m2pim4Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(m2pim4Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return m2pim4Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    m2pim4Parser.prototype.ident = function () {
        var _localctx = new IdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, m2pim4Parser.RULE_ident);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 148;
                this.match(m2pim4Parser.IDENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, m2pim4Parser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 150;
                _la = this._input.LA(1);
                if (!(_la === m2pim4Parser.INTEGER || _la === m2pim4Parser.REAL)) {
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
    m2pim4Parser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, m2pim4Parser.RULE_integer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.match(m2pim4Parser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.real = function () {
        var _localctx = new RealContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, m2pim4Parser.RULE_real);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(m2pim4Parser.REAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.scaleFactor = function () {
        var _localctx = new ScaleFactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, m2pim4Parser.RULE_scaleFactor);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this.match(m2pim4Parser.SCALE_FACTOR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.hexDigit = function () {
        var _localctx = new HexDigitContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, m2pim4Parser.RULE_hexDigit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 158;
                this.match(m2pim4Parser.HEX_DIGIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.digit = function () {
        var _localctx = new DigitContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, m2pim4Parser.RULE_digit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.match(m2pim4Parser.DIGIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.octalDigit = function () {
        var _localctx = new OctalDigitContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, m2pim4Parser.RULE_octalDigit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.match(m2pim4Parser.OCTAL_DIGIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, m2pim4Parser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.match(m2pim4Parser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.qualident = function () {
        var _localctx = new QualidentContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, m2pim4Parser.RULE_qualident);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                this.ident();
                this.state = 171;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__0) {
                    {
                        {
                            this.state = 167;
                            this.match(m2pim4Parser.T__0);
                            this.state = 168;
                            this.ident();
                        }
                    }
                    this.state = 173;
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
    m2pim4Parser.prototype.constantDeclaration = function () {
        var _localctx = new ConstantDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, m2pim4Parser.RULE_constantDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                this.ident();
                this.state = 175;
                this.match(m2pim4Parser.T__1);
                this.state = 176;
                this.constExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.constExpression = function () {
        var _localctx = new ConstExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, m2pim4Parser.RULE_constExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this.simpleConstExpr();
                this.state = 182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__1) | (1 << m2pim4Parser.T__2) | (1 << m2pim4Parser.T__3) | (1 << m2pim4Parser.T__4) | (1 << m2pim4Parser.T__5) | (1 << m2pim4Parser.T__6) | (1 << m2pim4Parser.T__7))) !== 0) || _la === m2pim4Parser.IN) {
                    {
                        this.state = 179;
                        this.relation();
                        this.state = 180;
                        this.simpleConstExpr();
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
    m2pim4Parser.prototype.relation = function () {
        var _localctx = new RelationContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, m2pim4Parser.RULE_relation);
        try {
            this.state = 193;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.T__1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 184;
                        this.match(m2pim4Parser.T__1);
                    }
                    break;
                case m2pim4Parser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 185;
                        this.match(m2pim4Parser.T__2);
                    }
                    break;
                case m2pim4Parser.T__3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 186;
                        this.match(m2pim4Parser.T__3);
                    }
                    break;
                case m2pim4Parser.T__4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 187;
                        this.match(m2pim4Parser.T__4);
                    }
                    break;
                case m2pim4Parser.T__5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 188;
                        this.match(m2pim4Parser.T__5);
                    }
                    break;
                case m2pim4Parser.T__6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 189;
                        this.match(m2pim4Parser.T__6);
                    }
                    break;
                case m2pim4Parser.T__7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 190;
                        this.match(m2pim4Parser.T__7);
                    }
                    break;
                case m2pim4Parser.IN:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 191;
                        this.match(m2pim4Parser.IN);
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
    m2pim4Parser.prototype.simpleConstExpr = function () {
        var _localctx = new SimpleConstExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, m2pim4Parser.RULE_simpleConstExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case m2pim4Parser.T__8:
                        {
                            this.state = 195;
                            this.match(m2pim4Parser.T__8);
                        }
                        break;
                    case m2pim4Parser.T__9:
                        {
                            this.state = 196;
                            this.match(m2pim4Parser.T__9);
                        }
                        break;
                    case m2pim4Parser.T__13:
                    case m2pim4Parser.T__15:
                    case m2pim4Parser.T__16:
                    case m2pim4Parser.NOT:
                    case m2pim4Parser.IDENT:
                    case m2pim4Parser.INTEGER:
                    case m2pim4Parser.REAL:
                    case m2pim4Parser.STRING:
                        break;
                    default:
                        break;
                }
                this.state = 200;
                this.constTerm();
                this.state = 206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__8 || _la === m2pim4Parser.T__9 || _la === m2pim4Parser.OR) {
                    {
                        {
                            this.state = 201;
                            this.addOperator();
                            this.state = 202;
                            this.constTerm();
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
    m2pim4Parser.prototype.addOperator = function () {
        var _localctx = new AddOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, m2pim4Parser.RULE_addOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                _la = this._input.LA(1);
                if (!(_la === m2pim4Parser.T__8 || _la === m2pim4Parser.T__9 || _la === m2pim4Parser.OR)) {
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
    m2pim4Parser.prototype.constTerm = function () {
        var _localctx = new ConstTermContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, m2pim4Parser.RULE_constTerm);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.constFactor();
                this.state = 217;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la === m2pim4Parser.DIV || _la === m2pim4Parser.MOD) {
                    {
                        {
                            this.state = 212;
                            this.mulOperator();
                            this.state = 213;
                            this.constFactor();
                        }
                    }
                    this.state = 219;
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
    m2pim4Parser.prototype.mulOperator = function () {
        var _localctx = new MulOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, m2pim4Parser.RULE_mulOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la === m2pim4Parser.DIV || _la === m2pim4Parser.MOD)) {
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
    m2pim4Parser.prototype.constFactor = function () {
        var _localctx = new ConstFactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, m2pim4Parser.RULE_constFactor);
        try {
            this.state = 235;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.INTEGER:
                case m2pim4Parser.REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 222;
                        this.number();
                    }
                    break;
                case m2pim4Parser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 223;
                        this.string();
                    }
                    break;
                case m2pim4Parser.T__16:
                case m2pim4Parser.IDENT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 224;
                        this.setOrQualident();
                    }
                    break;
                case m2pim4Parser.T__13:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 225;
                        this.match(m2pim4Parser.T__13);
                        this.state = 226;
                        this.constExpression();
                        this.state = 227;
                        this.match(m2pim4Parser.T__14);
                    }
                    break;
                case m2pim4Parser.T__15:
                case m2pim4Parser.NOT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 232;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case m2pim4Parser.NOT:
                                {
                                    this.state = 229;
                                    this.match(m2pim4Parser.NOT);
                                }
                                break;
                            case m2pim4Parser.T__15:
                                {
                                    this.state = 230;
                                    this.match(m2pim4Parser.T__15);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 234;
                        this.constFactor();
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
    m2pim4Parser.prototype.setOrQualident = function () {
        var _localctx = new SetOrQualidentContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, m2pim4Parser.RULE_setOrQualident);
        var _la;
        try {
            this.state = 242;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.T__16:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 237;
                        this.set();
                    }
                    break;
                case m2pim4Parser.IDENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 238;
                        this.qualident();
                        this.state = 240;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === m2pim4Parser.T__16) {
                            {
                                this.state = 239;
                                this.set();
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
    m2pim4Parser.prototype.set = function () {
        var _localctx = new SetContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, m2pim4Parser.RULE_set);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.match(m2pim4Parser.T__16);
                this.state = 253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
                    {
                        this.state = 245;
                        this.element();
                        this.state = 250;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.T__17) {
                            {
                                {
                                    this.state = 246;
                                    this.match(m2pim4Parser.T__17);
                                    this.state = 247;
                                    this.element();
                                }
                            }
                            this.state = 252;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 255;
                this.match(m2pim4Parser.T__18);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, m2pim4Parser.RULE_element);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.constExpression();
                this.state = 260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__19) {
                    {
                        this.state = 258;
                        this.match(m2pim4Parser.T__19);
                        this.state = 259;
                        this.constExpression();
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
    m2pim4Parser.prototype.typeDeclaration = function () {
        var _localctx = new TypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, m2pim4Parser.RULE_typeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this.ident();
                this.state = 263;
                this.match(m2pim4Parser.T__1);
                this.state = 264;
                this.type();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, m2pim4Parser.RULE_type);
        try {
            this.state = 272;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.T__13:
                case m2pim4Parser.T__20:
                case m2pim4Parser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 266;
                        this.simpleType();
                    }
                    break;
                case m2pim4Parser.ARRAY:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 267;
                        this.arrayType();
                    }
                    break;
                case m2pim4Parser.RECORD:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 268;
                        this.recordType();
                    }
                    break;
                case m2pim4Parser.SET:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 269;
                        this.setType();
                    }
                    break;
                case m2pim4Parser.POINTER:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 270;
                        this.pointerType();
                    }
                    break;
                case m2pim4Parser.PROCEDURE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 271;
                        this.procedureType();
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
    m2pim4Parser.prototype.simpleType = function () {
        var _localctx = new SimpleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, m2pim4Parser.RULE_simpleType);
        try {
            this.state = 277;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 274;
                        this.qualident();
                    }
                    break;
                case m2pim4Parser.T__13:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 275;
                        this.enumeration();
                    }
                    break;
                case m2pim4Parser.T__20:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 276;
                        this.subrangeType();
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
    m2pim4Parser.prototype.enumeration = function () {
        var _localctx = new EnumerationContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, m2pim4Parser.RULE_enumeration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
                this.match(m2pim4Parser.T__13);
                this.state = 280;
                this.identList();
                this.state = 281;
                this.match(m2pim4Parser.T__14);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.identList = function () {
        var _localctx = new IdentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, m2pim4Parser.RULE_identList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                this.ident();
                this.state = 288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__17) {
                    {
                        {
                            this.state = 284;
                            this.match(m2pim4Parser.T__17);
                            this.state = 285;
                            this.ident();
                        }
                    }
                    this.state = 290;
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
    m2pim4Parser.prototype.subrangeType = function () {
        var _localctx = new SubrangeTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, m2pim4Parser.RULE_subrangeType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.match(m2pim4Parser.T__20);
                this.state = 292;
                this.constExpression();
                this.state = 293;
                this.match(m2pim4Parser.T__19);
                this.state = 294;
                this.constExpression();
                this.state = 295;
                this.match(m2pim4Parser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.arrayType = function () {
        var _localctx = new ArrayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, m2pim4Parser.RULE_arrayType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this.match(m2pim4Parser.ARRAY);
                this.state = 298;
                this.simpleType();
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__17) {
                    {
                        {
                            this.state = 299;
                            this.match(m2pim4Parser.T__17);
                            this.state = 300;
                            this.simpleType();
                        }
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 306;
                this.match(m2pim4Parser.OF);
                this.state = 307;
                this.type();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.recordType = function () {
        var _localctx = new RecordTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, m2pim4Parser.RULE_recordType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.match(m2pim4Parser.RECORD);
                this.state = 310;
                this.fieldListSequence();
                this.state = 311;
                this.match(m2pim4Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.fieldListSequence = function () {
        var _localctx = new FieldListSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, m2pim4Parser.RULE_fieldListSequence);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this.fieldList();
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__22) {
                    {
                        {
                            this.state = 314;
                            this.match(m2pim4Parser.T__22);
                            this.state = 315;
                            this.fieldList();
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
    m2pim4Parser.prototype.fieldList = function () {
        var _localctx = new FieldListContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, m2pim4Parser.RULE_fieldList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case m2pim4Parser.IDENT:
                        {
                            this.state = 321;
                            this.identList();
                            this.state = 322;
                            this.match(m2pim4Parser.T__23);
                            this.state = 323;
                            this.type();
                        }
                        break;
                    case m2pim4Parser.CASE:
                        {
                            this.state = 325;
                            this.match(m2pim4Parser.CASE);
                            this.state = 326;
                            this.ident();
                            this.state = 333;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === m2pim4Parser.T__0 || _la === m2pim4Parser.T__23) {
                                {
                                    this.state = 330;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case m2pim4Parser.T__23:
                                            {
                                                this.state = 327;
                                                this.match(m2pim4Parser.T__23);
                                            }
                                            break;
                                        case m2pim4Parser.T__0:
                                            {
                                                this.state = 328;
                                                this.match(m2pim4Parser.T__0);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 332;
                                    this.qualident();
                                }
                            }
                            this.state = 335;
                            this.match(m2pim4Parser.OF);
                            this.state = 336;
                            this.variant();
                            this.state = 341;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === m2pim4Parser.T__24) {
                                {
                                    {
                                        this.state = 337;
                                        this.match(m2pim4Parser.T__24);
                                        this.state = 338;
                                        this.variant();
                                    }
                                }
                                this.state = 343;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 346;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === m2pim4Parser.ELSE) {
                                {
                                    this.state = 344;
                                    this.match(m2pim4Parser.ELSE);
                                    this.state = 345;
                                    this.fieldListSequence();
                                }
                            }
                            this.state = 348;
                            this.match(m2pim4Parser.END);
                        }
                        break;
                    case m2pim4Parser.T__22:
                    case m2pim4Parser.T__24:
                    case m2pim4Parser.ELSE:
                    case m2pim4Parser.END:
                        break;
                    default:
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
    m2pim4Parser.prototype.variant = function () {
        var _localctx = new VariantContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, m2pim4Parser.RULE_variant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                this.caseLabelList();
                this.state = 353;
                this.match(m2pim4Parser.T__23);
                this.state = 354;
                this.fieldListSequence();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.caseLabelList = function () {
        var _localctx = new CaseLabelListContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, m2pim4Parser.RULE_caseLabelList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this.caseLabels();
                this.state = 361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__17) {
                    {
                        {
                            this.state = 357;
                            this.match(m2pim4Parser.T__17);
                            this.state = 358;
                            this.caseLabels();
                        }
                    }
                    this.state = 363;
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
    m2pim4Parser.prototype.caseLabels = function () {
        var _localctx = new CaseLabelsContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, m2pim4Parser.RULE_caseLabels);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 364;
                this.constExpression();
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__19) {
                    {
                        this.state = 365;
                        this.match(m2pim4Parser.T__19);
                        this.state = 366;
                        this.constExpression();
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
    m2pim4Parser.prototype.setType = function () {
        var _localctx = new SetTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, m2pim4Parser.RULE_setType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.match(m2pim4Parser.SET);
                this.state = 370;
                this.match(m2pim4Parser.OF);
                this.state = 371;
                this.simpleType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.pointerType = function () {
        var _localctx = new PointerTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, m2pim4Parser.RULE_pointerType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this.match(m2pim4Parser.POINTER);
                this.state = 374;
                this.match(m2pim4Parser.TO);
                this.state = 375;
                this.type();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.procedureType = function () {
        var _localctx = new ProcedureTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, m2pim4Parser.RULE_procedureType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.match(m2pim4Parser.PROCEDURE);
                this.state = 379;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__13) {
                    {
                        this.state = 378;
                        this.formalTypeList();
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
    m2pim4Parser.prototype.formalTypeList = function () {
        var _localctx = new FormalTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, m2pim4Parser.RULE_formalTypeList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 381;
                this.match(m2pim4Parser.T__13);
                this.state = 396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.ARRAY || _la === m2pim4Parser.VAR || _la === m2pim4Parser.IDENT) {
                    {
                        this.state = 383;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === m2pim4Parser.VAR) {
                            {
                                this.state = 382;
                                this.match(m2pim4Parser.VAR);
                            }
                        }
                        this.state = 385;
                        this.formalType();
                        this.state = 393;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.T__17) {
                            {
                                {
                                    this.state = 386;
                                    this.match(m2pim4Parser.T__17);
                                    this.state = 388;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === m2pim4Parser.VAR) {
                                        {
                                            this.state = 387;
                                            this.match(m2pim4Parser.VAR);
                                        }
                                    }
                                    this.state = 390;
                                    this.formalType();
                                }
                            }
                            this.state = 395;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 398;
                this.match(m2pim4Parser.T__14);
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__23) {
                    {
                        this.state = 399;
                        this.match(m2pim4Parser.T__23);
                        this.state = 400;
                        this.qualident();
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
    m2pim4Parser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, m2pim4Parser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this.identList();
                this.state = 404;
                this.match(m2pim4Parser.T__23);
                this.state = 405;
                this.type();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.designator = function () {
        var _localctx = new DesignatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, m2pim4Parser.RULE_designator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 407;
                this.qualident();
                this.state = 409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__20 || _la === m2pim4Parser.T__25) {
                    {
                        this.state = 408;
                        this.designatorTail();
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
    m2pim4Parser.prototype.designatorTail = function () {
        var _localctx = new DesignatorTailContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, m2pim4Parser.RULE_designatorTail);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 416;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case m2pim4Parser.T__20:
                                    {
                                        this.state = 411;
                                        this.match(m2pim4Parser.T__20);
                                        this.state = 412;
                                        this.expList();
                                        this.state = 413;
                                        this.match(m2pim4Parser.T__21);
                                    }
                                    break;
                                case m2pim4Parser.T__25:
                                    {
                                        this.state = 415;
                                        this.match(m2pim4Parser.T__25);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 422;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === m2pim4Parser.T__0) {
                                {
                                    {
                                        this.state = 418;
                                        this.match(m2pim4Parser.T__0);
                                        this.state = 419;
                                        this.ident();
                                    }
                                }
                                this.state = 424;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 427;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === m2pim4Parser.T__20 || _la === m2pim4Parser.T__25);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.expList = function () {
        var _localctx = new ExpListContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, m2pim4Parser.RULE_expList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 429;
                this.expression();
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__17) {
                    {
                        {
                            this.state = 430;
                            this.match(m2pim4Parser.T__17);
                            this.state = 431;
                            this.expression();
                        }
                    }
                    this.state = 436;
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
    m2pim4Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, m2pim4Parser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 437;
                this.simpleExpression();
                this.state = 441;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__1) | (1 << m2pim4Parser.T__2) | (1 << m2pim4Parser.T__3) | (1 << m2pim4Parser.T__4) | (1 << m2pim4Parser.T__5) | (1 << m2pim4Parser.T__6) | (1 << m2pim4Parser.T__7))) !== 0) || _la === m2pim4Parser.IN) {
                    {
                        this.state = 438;
                        this.relation();
                        this.state = 439;
                        this.simpleExpression();
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
    m2pim4Parser.prototype.simpleExpression = function () {
        var _localctx = new SimpleExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, m2pim4Parser.RULE_simpleExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case m2pim4Parser.T__8:
                        {
                            this.state = 443;
                            this.match(m2pim4Parser.T__8);
                        }
                        break;
                    case m2pim4Parser.T__9:
                        {
                            this.state = 444;
                            this.match(m2pim4Parser.T__9);
                        }
                        break;
                    case m2pim4Parser.T__13:
                    case m2pim4Parser.T__15:
                    case m2pim4Parser.T__16:
                    case m2pim4Parser.NOT:
                    case m2pim4Parser.IDENT:
                    case m2pim4Parser.INTEGER:
                    case m2pim4Parser.REAL:
                    case m2pim4Parser.STRING:
                        break;
                    default:
                        break;
                }
                this.state = 448;
                this.term();
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__8 || _la === m2pim4Parser.T__9 || _la === m2pim4Parser.OR) {
                    {
                        {
                            this.state = 449;
                            this.addOperator();
                            this.state = 450;
                            this.term();
                        }
                    }
                    this.state = 456;
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
    m2pim4Parser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, m2pim4Parser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 457;
                this.factor();
                this.state = 463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la === m2pim4Parser.DIV || _la === m2pim4Parser.MOD) {
                    {
                        {
                            this.state = 458;
                            this.mulOperator();
                            this.state = 459;
                            this.factor();
                        }
                    }
                    this.state = 465;
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
    m2pim4Parser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, m2pim4Parser.RULE_factor);
        try {
            this.state = 479;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.INTEGER:
                case m2pim4Parser.REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 466;
                        this.number();
                    }
                    break;
                case m2pim4Parser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 467;
                        this.string();
                    }
                    break;
                case m2pim4Parser.T__16:
                case m2pim4Parser.IDENT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 468;
                        this.setOrDesignatorOrProcCall();
                    }
                    break;
                case m2pim4Parser.T__13:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 469;
                        this.match(m2pim4Parser.T__13);
                        this.state = 470;
                        this.expression();
                        this.state = 471;
                        this.match(m2pim4Parser.T__14);
                    }
                    break;
                case m2pim4Parser.T__15:
                case m2pim4Parser.NOT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 476;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case m2pim4Parser.NOT:
                                {
                                    this.state = 473;
                                    this.match(m2pim4Parser.NOT);
                                }
                                break;
                            case m2pim4Parser.T__15:
                                {
                                    this.state = 474;
                                    this.match(m2pim4Parser.T__15);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 478;
                        this.factor();
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
    m2pim4Parser.prototype.setOrDesignatorOrProcCall = function () {
        var _localctx = new SetOrDesignatorOrProcCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, m2pim4Parser.RULE_setOrDesignatorOrProcCall);
        var _la;
        try {
            this.state = 492;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.T__16:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 481;
                        this.set();
                    }
                    break;
                case m2pim4Parser.IDENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 482;
                        this.qualident();
                        this.state = 490;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case m2pim4Parser.T__16:
                                {
                                    this.state = 483;
                                    this.set();
                                }
                                break;
                            case m2pim4Parser.T__1:
                            case m2pim4Parser.T__2:
                            case m2pim4Parser.T__3:
                            case m2pim4Parser.T__4:
                            case m2pim4Parser.T__5:
                            case m2pim4Parser.T__6:
                            case m2pim4Parser.T__7:
                            case m2pim4Parser.T__8:
                            case m2pim4Parser.T__9:
                            case m2pim4Parser.T__10:
                            case m2pim4Parser.T__11:
                            case m2pim4Parser.T__12:
                            case m2pim4Parser.T__13:
                            case m2pim4Parser.T__14:
                            case m2pim4Parser.T__17:
                            case m2pim4Parser.T__20:
                            case m2pim4Parser.T__21:
                            case m2pim4Parser.T__22:
                            case m2pim4Parser.T__24:
                            case m2pim4Parser.T__25:
                            case m2pim4Parser.AND:
                            case m2pim4Parser.BY:
                            case m2pim4Parser.DIV:
                            case m2pim4Parser.DO:
                            case m2pim4Parser.ELSE:
                            case m2pim4Parser.ELSIF:
                            case m2pim4Parser.END:
                            case m2pim4Parser.IN:
                            case m2pim4Parser.MOD:
                            case m2pim4Parser.OF:
                            case m2pim4Parser.OR:
                            case m2pim4Parser.THEN:
                            case m2pim4Parser.TO:
                            case m2pim4Parser.UNTIL:
                                {
                                    this.state = 485;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === m2pim4Parser.T__20 || _la === m2pim4Parser.T__25) {
                                        {
                                            this.state = 484;
                                            this.designatorTail();
                                        }
                                    }
                                    this.state = 488;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === m2pim4Parser.T__13) {
                                        {
                                            this.state = 487;
                                            this.actualParameters();
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
    m2pim4Parser.prototype.actualParameters = function () {
        var _localctx = new ActualParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, m2pim4Parser.RULE_actualParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 494;
                this.match(m2pim4Parser.T__13);
                this.state = 496;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
                    {
                        this.state = 495;
                        this.expList();
                    }
                }
                this.state = 498;
                this.match(m2pim4Parser.T__14);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, m2pim4Parser.RULE_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case m2pim4Parser.IDENT:
                        {
                            this.state = 500;
                            this.assignmentOrProcCall();
                        }
                        break;
                    case m2pim4Parser.IF:
                        {
                            this.state = 501;
                            this.ifStatement();
                        }
                        break;
                    case m2pim4Parser.CASE:
                        {
                            this.state = 502;
                            this.caseStatement();
                        }
                        break;
                    case m2pim4Parser.WHILE:
                        {
                            this.state = 503;
                            this.whileStatement();
                        }
                        break;
                    case m2pim4Parser.REPEAT:
                        {
                            this.state = 504;
                            this.repeatStatement();
                        }
                        break;
                    case m2pim4Parser.LOOP:
                        {
                            this.state = 505;
                            this.loopStatement();
                        }
                        break;
                    case m2pim4Parser.FOR:
                        {
                            this.state = 506;
                            this.forStatement();
                        }
                        break;
                    case m2pim4Parser.WITH:
                        {
                            this.state = 507;
                            this.withStatement();
                        }
                        break;
                    case m2pim4Parser.EXIT:
                        {
                            this.state = 508;
                            this.match(m2pim4Parser.EXIT);
                        }
                        break;
                    case m2pim4Parser.RETURN:
                        {
                            this.state = 509;
                            this.match(m2pim4Parser.RETURN);
                            this.state = 511;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
                                {
                                    this.state = 510;
                                    this.expression();
                                }
                            }
                        }
                        break;
                    case m2pim4Parser.T__22:
                    case m2pim4Parser.T__24:
                    case m2pim4Parser.ELSE:
                    case m2pim4Parser.ELSIF:
                    case m2pim4Parser.END:
                    case m2pim4Parser.UNTIL:
                        break;
                    default:
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
    m2pim4Parser.prototype.assignmentOrProcCall = function () {
        var _localctx = new AssignmentOrProcCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, m2pim4Parser.RULE_assignmentOrProcCall);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                this.designator();
                this.state = 521;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case m2pim4Parser.T__26:
                        {
                            this.state = 516;
                            this.match(m2pim4Parser.T__26);
                            this.state = 517;
                            this.expression();
                        }
                        break;
                    case m2pim4Parser.T__13:
                    case m2pim4Parser.T__22:
                    case m2pim4Parser.T__24:
                    case m2pim4Parser.ELSE:
                    case m2pim4Parser.ELSIF:
                    case m2pim4Parser.END:
                    case m2pim4Parser.UNTIL:
                        {
                            this.state = 519;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === m2pim4Parser.T__13) {
                                {
                                    this.state = 518;
                                    this.actualParameters();
                                }
                            }
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
    m2pim4Parser.prototype.statementSequence = function () {
        var _localctx = new StatementSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, m2pim4Parser.RULE_statementSequence);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 523;
                this.statement();
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__22) {
                    {
                        {
                            this.state = 524;
                            this.match(m2pim4Parser.T__22);
                            this.state = 525;
                            this.statement();
                        }
                    }
                    this.state = 530;
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
    m2pim4Parser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, m2pim4Parser.RULE_ifStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 531;
                this.match(m2pim4Parser.IF);
                this.state = 532;
                this.expression();
                this.state = 533;
                this.match(m2pim4Parser.THEN);
                this.state = 534;
                this.statementSequence();
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.ELSIF) {
                    {
                        {
                            this.state = 535;
                            this.match(m2pim4Parser.ELSIF);
                            this.state = 536;
                            this.expression();
                            this.state = 537;
                            this.match(m2pim4Parser.THEN);
                            this.state = 538;
                            this.statementSequence();
                        }
                    }
                    this.state = 544;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 547;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.ELSE) {
                    {
                        this.state = 545;
                        this.match(m2pim4Parser.ELSE);
                        this.state = 546;
                        this.statementSequence();
                    }
                }
                this.state = 549;
                this.match(m2pim4Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.caseStatement = function () {
        var _localctx = new CaseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, m2pim4Parser.RULE_caseStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 551;
                this.match(m2pim4Parser.CASE);
                this.state = 552;
                this.expression();
                this.state = 553;
                this.match(m2pim4Parser.OF);
                this.state = 554;
                this.ccase();
                this.state = 559;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.T__24) {
                    {
                        {
                            this.state = 555;
                            this.match(m2pim4Parser.T__24);
                            this.state = 556;
                            this.ccase();
                        }
                    }
                    this.state = 561;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 564;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.ELSE) {
                    {
                        this.state = 562;
                        this.match(m2pim4Parser.ELSE);
                        this.state = 563;
                        this.statementSequence();
                    }
                }
                this.state = 566;
                this.match(m2pim4Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.ccase = function () {
        var _localctx = new CcaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, m2pim4Parser.RULE_ccase);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 568;
                this.caseLabelList();
                this.state = 569;
                this.match(m2pim4Parser.T__23);
                this.state = 570;
                this.statementSequence();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.whileStatement = function () {
        var _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, m2pim4Parser.RULE_whileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 572;
                this.match(m2pim4Parser.WHILE);
                this.state = 573;
                this.expression();
                this.state = 574;
                this.match(m2pim4Parser.DO);
                this.state = 575;
                this.statementSequence();
                this.state = 576;
                this.match(m2pim4Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.repeatStatement = function () {
        var _localctx = new RepeatStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, m2pim4Parser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 578;
                this.match(m2pim4Parser.REPEAT);
                this.state = 579;
                this.statementSequence();
                this.state = 580;
                this.match(m2pim4Parser.UNTIL);
                this.state = 581;
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
    m2pim4Parser.prototype.forStatement = function () {
        var _localctx = new ForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, m2pim4Parser.RULE_forStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 583;
                this.match(m2pim4Parser.FOR);
                this.state = 584;
                this.ident();
                this.state = 585;
                this.match(m2pim4Parser.T__26);
                this.state = 586;
                this.expression();
                this.state = 587;
                this.match(m2pim4Parser.TO);
                this.state = 588;
                this.expression();
                this.state = 591;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.BY) {
                    {
                        this.state = 589;
                        this.match(m2pim4Parser.BY);
                        this.state = 590;
                        this.constExpression();
                    }
                }
                this.state = 593;
                this.match(m2pim4Parser.DO);
                this.state = 594;
                this.statementSequence();
                this.state = 595;
                this.match(m2pim4Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.loopStatement = function () {
        var _localctx = new LoopStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, m2pim4Parser.RULE_loopStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 597;
                this.match(m2pim4Parser.LOOP);
                this.state = 598;
                this.statementSequence();
                this.state = 599;
                this.match(m2pim4Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.withStatement = function () {
        var _localctx = new WithStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, m2pim4Parser.RULE_withStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                this.match(m2pim4Parser.WITH);
                this.state = 602;
                this.designator();
                this.state = 603;
                this.match(m2pim4Parser.DO);
                this.state = 604;
                this.statementSequence();
                this.state = 605;
                this.match(m2pim4Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.procedureDeclaration = function () {
        var _localctx = new ProcedureDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, m2pim4Parser.RULE_procedureDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this.procedureHeading();
                this.state = 608;
                this.match(m2pim4Parser.T__22);
                this.state = 609;
                this.block();
                this.state = 610;
                this.ident();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.procedureHeading = function () {
        var _localctx = new ProcedureHeadingContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, m2pim4Parser.RULE_procedureHeading);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 612;
                this.match(m2pim4Parser.PROCEDURE);
                this.state = 613;
                this.ident();
                this.state = 615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__13) {
                    {
                        this.state = 614;
                        this.formalParameters();
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
    m2pim4Parser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, m2pim4Parser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 620;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (m2pim4Parser.CONST - 33)) | (1 << (m2pim4Parser.MODULE - 33)) | (1 << (m2pim4Parser.PROCEDURE - 33)) | (1 << (m2pim4Parser.TYPE - 33)))) !== 0) || _la === m2pim4Parser.VAR) {
                    {
                        {
                            this.state = 617;
                            this.declaration();
                        }
                    }
                    this.state = 622;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 625;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.BEGIN) {
                    {
                        this.state = 623;
                        this.match(m2pim4Parser.BEGIN);
                        this.state = 624;
                        this.statementSequence();
                    }
                }
                this.state = 627;
                this.match(m2pim4Parser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, m2pim4Parser.RULE_declaration);
        var _la;
        try {
            this.state = 662;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.CONST:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 629;
                        this.match(m2pim4Parser.CONST);
                        this.state = 635;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.IDENT) {
                            {
                                {
                                    this.state = 630;
                                    this.constantDeclaration();
                                    this.state = 631;
                                    this.match(m2pim4Parser.T__22);
                                }
                            }
                            this.state = 637;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case m2pim4Parser.TYPE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 638;
                        this.match(m2pim4Parser.TYPE);
                        this.state = 644;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.IDENT) {
                            {
                                {
                                    this.state = 639;
                                    this.typeDeclaration();
                                    this.state = 640;
                                    this.match(m2pim4Parser.T__22);
                                }
                            }
                            this.state = 646;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case m2pim4Parser.VAR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 647;
                        this.match(m2pim4Parser.VAR);
                        this.state = 653;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.IDENT) {
                            {
                                {
                                    this.state = 648;
                                    this.variableDeclaration();
                                    this.state = 649;
                                    this.match(m2pim4Parser.T__22);
                                }
                            }
                            this.state = 655;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case m2pim4Parser.PROCEDURE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 656;
                        this.procedureDeclaration();
                        this.state = 657;
                        this.match(m2pim4Parser.T__22);
                    }
                    break;
                case m2pim4Parser.MODULE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 659;
                        this.moduleDeclaration();
                        this.state = 660;
                        this.match(m2pim4Parser.T__22);
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
    m2pim4Parser.prototype.formalParameters = function () {
        var _localctx = new FormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, m2pim4Parser.RULE_formalParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 664;
                this.match(m2pim4Parser.T__13);
                this.state = 673;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.VAR || _la === m2pim4Parser.IDENT) {
                    {
                        this.state = 665;
                        this.fpSection();
                        this.state = 670;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.T__22) {
                            {
                                {
                                    this.state = 666;
                                    this.match(m2pim4Parser.T__22);
                                    this.state = 667;
                                    this.fpSection();
                                }
                            }
                            this.state = 672;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 675;
                this.match(m2pim4Parser.T__14);
                this.state = 678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__23) {
                    {
                        this.state = 676;
                        this.match(m2pim4Parser.T__23);
                        this.state = 677;
                        this.qualident();
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
    m2pim4Parser.prototype.fpSection = function () {
        var _localctx = new FpSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, m2pim4Parser.RULE_fpSection);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 681;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.VAR) {
                    {
                        this.state = 680;
                        this.match(m2pim4Parser.VAR);
                    }
                }
                this.state = 683;
                this.identList();
                this.state = 684;
                this.match(m2pim4Parser.T__23);
                this.state = 685;
                this.formalType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.formalType = function () {
        var _localctx = new FormalTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, m2pim4Parser.RULE_formalType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 689;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.ARRAY) {
                    {
                        this.state = 687;
                        this.match(m2pim4Parser.ARRAY);
                        this.state = 688;
                        this.match(m2pim4Parser.OF);
                    }
                }
                this.state = 691;
                this.qualident();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.moduleDeclaration = function () {
        var _localctx = new ModuleDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, m2pim4Parser.RULE_moduleDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this.match(m2pim4Parser.MODULE);
                this.state = 694;
                this.ident();
                this.state = 696;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__20) {
                    {
                        this.state = 695;
                        this.priority();
                    }
                }
                this.state = 698;
                this.match(m2pim4Parser.T__22);
                this.state = 702;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.FROM || _la === m2pim4Parser.IMPORT) {
                    {
                        {
                            this.state = 699;
                            this.importList();
                        }
                    }
                    this.state = 704;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 706;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.EXPORT) {
                    {
                        this.state = 705;
                        this.exportList();
                    }
                }
                this.state = 708;
                this.block();
                this.state = 709;
                this.ident();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.priority = function () {
        var _localctx = new PriorityContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, m2pim4Parser.RULE_priority);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 711;
                this.match(m2pim4Parser.T__20);
                this.state = 712;
                this.constExpression();
                this.state = 713;
                this.match(m2pim4Parser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.exportList = function () {
        var _localctx = new ExportListContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, m2pim4Parser.RULE_exportList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 715;
                this.match(m2pim4Parser.EXPORT);
                this.state = 717;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.QUALIFIED) {
                    {
                        this.state = 716;
                        this.match(m2pim4Parser.QUALIFIED);
                    }
                }
                this.state = 719;
                this.identList();
                this.state = 720;
                this.match(m2pim4Parser.T__22);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.importList = function () {
        var _localctx = new ImportListContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, m2pim4Parser.RULE_importList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 724;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.FROM) {
                    {
                        this.state = 722;
                        this.match(m2pim4Parser.FROM);
                        this.state = 723;
                        this.ident();
                    }
                }
                this.state = 726;
                this.match(m2pim4Parser.IMPORT);
                this.state = 727;
                this.identList();
                this.state = 728;
                this.match(m2pim4Parser.T__22);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.definitionModule = function () {
        var _localctx = new DefinitionModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, m2pim4Parser.RULE_definitionModule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 730;
                this.match(m2pim4Parser.DEFINITION);
                this.state = 731;
                this.match(m2pim4Parser.MODULE);
                this.state = 732;
                this.ident();
                this.state = 733;
                this.match(m2pim4Parser.T__22);
                this.state = 737;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.FROM || _la === m2pim4Parser.IMPORT) {
                    {
                        {
                            this.state = 734;
                            this.importList();
                        }
                    }
                    this.state = 739;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 741;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.EXPORT) {
                    {
                        this.state = 740;
                        this.exportList();
                    }
                }
                this.state = 746;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (m2pim4Parser.CONST - 33)) | (1 << (m2pim4Parser.PROCEDURE - 33)) | (1 << (m2pim4Parser.TYPE - 33)))) !== 0) || _la === m2pim4Parser.VAR) {
                    {
                        {
                            this.state = 743;
                            this.definition();
                        }
                    }
                    this.state = 748;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 749;
                this.match(m2pim4Parser.END);
                this.state = 750;
                this.ident();
                this.state = 751;
                this.match(m2pim4Parser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.definition = function () {
        var _localctx = new DefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, m2pim4Parser.RULE_definition);
        var _la;
        try {
            this.state = 787;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.CONST:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 753;
                        this.match(m2pim4Parser.CONST);
                        this.state = 759;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.IDENT) {
                            {
                                {
                                    this.state = 754;
                                    this.constantDeclaration();
                                    this.state = 755;
                                    this.match(m2pim4Parser.T__22);
                                }
                            }
                            this.state = 761;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case m2pim4Parser.TYPE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 762;
                        this.match(m2pim4Parser.TYPE);
                        this.state = 772;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.IDENT) {
                            {
                                {
                                    this.state = 763;
                                    this.ident();
                                    this.state = 766;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === m2pim4Parser.T__1) {
                                        {
                                            this.state = 764;
                                            this.match(m2pim4Parser.T__1);
                                            this.state = 765;
                                            this.type();
                                        }
                                    }
                                    this.state = 768;
                                    this.match(m2pim4Parser.T__22);
                                }
                            }
                            this.state = 774;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case m2pim4Parser.VAR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 775;
                        this.match(m2pim4Parser.VAR);
                        this.state = 781;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === m2pim4Parser.IDENT) {
                            {
                                {
                                    this.state = 776;
                                    this.variableDeclaration();
                                    this.state = 777;
                                    this.match(m2pim4Parser.T__22);
                                }
                            }
                            this.state = 783;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case m2pim4Parser.PROCEDURE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 784;
                        this.procedureHeading();
                        this.state = 785;
                        this.match(m2pim4Parser.T__22);
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
    m2pim4Parser.prototype.programModule = function () {
        var _localctx = new ProgramModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, m2pim4Parser.RULE_programModule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 789;
                this.match(m2pim4Parser.MODULE);
                this.state = 790;
                this.ident();
                this.state = 792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === m2pim4Parser.T__20) {
                    {
                        this.state = 791;
                        this.priority();
                    }
                }
                this.state = 794;
                this.match(m2pim4Parser.T__22);
                this.state = 798;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === m2pim4Parser.FROM || _la === m2pim4Parser.IMPORT) {
                    {
                        {
                            this.state = 795;
                            this.importList();
                        }
                    }
                    this.state = 800;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 801;
                this.block();
                this.state = 802;
                this.ident();
                this.state = 803;
                this.match(m2pim4Parser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    m2pim4Parser.prototype.compilationUnit = function () {
        var _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, m2pim4Parser.RULE_compilationUnit);
        var _la;
        try {
            this.state = 810;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case m2pim4Parser.DEFINITION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 805;
                        this.definitionModule();
                    }
                    break;
                case m2pim4Parser.IMPLEMENTATION:
                case m2pim4Parser.MODULE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 807;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === m2pim4Parser.IMPLEMENTATION) {
                            {
                                this.state = 806;
                                this.match(m2pim4Parser.IMPLEMENTATION);
                            }
                        }
                        this.state = 809;
                        this.programModule();
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
    Object.defineProperty(m2pim4Parser, "_ATN", {
        get: function () {
            if (!m2pim4Parser.__ATN) {
                m2pim4Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(m2pim4Parser._serializedATN));
            }
            return m2pim4Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    m2pim4Parser.T__0 = 1;
    m2pim4Parser.T__1 = 2;
    m2pim4Parser.T__2 = 3;
    m2pim4Parser.T__3 = 4;
    m2pim4Parser.T__4 = 5;
    m2pim4Parser.T__5 = 6;
    m2pim4Parser.T__6 = 7;
    m2pim4Parser.T__7 = 8;
    m2pim4Parser.T__8 = 9;
    m2pim4Parser.T__9 = 10;
    m2pim4Parser.T__10 = 11;
    m2pim4Parser.T__11 = 12;
    m2pim4Parser.T__12 = 13;
    m2pim4Parser.T__13 = 14;
    m2pim4Parser.T__14 = 15;
    m2pim4Parser.T__15 = 16;
    m2pim4Parser.T__16 = 17;
    m2pim4Parser.T__17 = 18;
    m2pim4Parser.T__18 = 19;
    m2pim4Parser.T__19 = 20;
    m2pim4Parser.T__20 = 21;
    m2pim4Parser.T__21 = 22;
    m2pim4Parser.T__22 = 23;
    m2pim4Parser.T__23 = 24;
    m2pim4Parser.T__24 = 25;
    m2pim4Parser.T__25 = 26;
    m2pim4Parser.T__26 = 27;
    m2pim4Parser.AND = 28;
    m2pim4Parser.ARRAY = 29;
    m2pim4Parser.BEGIN = 30;
    m2pim4Parser.BY = 31;
    m2pim4Parser.CASE = 32;
    m2pim4Parser.CONST = 33;
    m2pim4Parser.DEFINITION = 34;
    m2pim4Parser.DIV = 35;
    m2pim4Parser.DO = 36;
    m2pim4Parser.ELSE = 37;
    m2pim4Parser.ELSIF = 38;
    m2pim4Parser.END = 39;
    m2pim4Parser.EXIT = 40;
    m2pim4Parser.EXPORT = 41;
    m2pim4Parser.FOR = 42;
    m2pim4Parser.FROM = 43;
    m2pim4Parser.IF = 44;
    m2pim4Parser.IMPLEMENTATION = 45;
    m2pim4Parser.IMPORT = 46;
    m2pim4Parser.IN = 47;
    m2pim4Parser.LOOP = 48;
    m2pim4Parser.MOD = 49;
    m2pim4Parser.MODULE = 50;
    m2pim4Parser.NOT = 51;
    m2pim4Parser.OF = 52;
    m2pim4Parser.OR = 53;
    m2pim4Parser.POINTER = 54;
    m2pim4Parser.PROCEDURE = 55;
    m2pim4Parser.QUALIFIED = 56;
    m2pim4Parser.RECORD = 57;
    m2pim4Parser.REPEAT = 58;
    m2pim4Parser.RETURN = 59;
    m2pim4Parser.SET = 60;
    m2pim4Parser.THEN = 61;
    m2pim4Parser.TO = 62;
    m2pim4Parser.TYPE = 63;
    m2pim4Parser.UNTIL = 64;
    m2pim4Parser.VAR = 65;
    m2pim4Parser.WHILE = 66;
    m2pim4Parser.WITH = 67;
    m2pim4Parser.IDENT = 68;
    m2pim4Parser.INTEGER = 69;
    m2pim4Parser.REAL = 70;
    m2pim4Parser.STRING = 71;
    m2pim4Parser.DIGIT = 72;
    m2pim4Parser.OCTAL_DIGIT = 73;
    m2pim4Parser.HEX_DIGIT = 74;
    m2pim4Parser.SCALE_FACTOR = 75;
    m2pim4Parser.COMMENT = 76;
    m2pim4Parser.WS = 77;
    m2pim4Parser.RULE_ident = 0;
    m2pim4Parser.RULE_number = 1;
    m2pim4Parser.RULE_integer = 2;
    m2pim4Parser.RULE_real = 3;
    m2pim4Parser.RULE_scaleFactor = 4;
    m2pim4Parser.RULE_hexDigit = 5;
    m2pim4Parser.RULE_digit = 6;
    m2pim4Parser.RULE_octalDigit = 7;
    m2pim4Parser.RULE_string = 8;
    m2pim4Parser.RULE_qualident = 9;
    m2pim4Parser.RULE_constantDeclaration = 10;
    m2pim4Parser.RULE_constExpression = 11;
    m2pim4Parser.RULE_relation = 12;
    m2pim4Parser.RULE_simpleConstExpr = 13;
    m2pim4Parser.RULE_addOperator = 14;
    m2pim4Parser.RULE_constTerm = 15;
    m2pim4Parser.RULE_mulOperator = 16;
    m2pim4Parser.RULE_constFactor = 17;
    m2pim4Parser.RULE_setOrQualident = 18;
    m2pim4Parser.RULE_set = 19;
    m2pim4Parser.RULE_element = 20;
    m2pim4Parser.RULE_typeDeclaration = 21;
    m2pim4Parser.RULE_type = 22;
    m2pim4Parser.RULE_simpleType = 23;
    m2pim4Parser.RULE_enumeration = 24;
    m2pim4Parser.RULE_identList = 25;
    m2pim4Parser.RULE_subrangeType = 26;
    m2pim4Parser.RULE_arrayType = 27;
    m2pim4Parser.RULE_recordType = 28;
    m2pim4Parser.RULE_fieldListSequence = 29;
    m2pim4Parser.RULE_fieldList = 30;
    m2pim4Parser.RULE_variant = 31;
    m2pim4Parser.RULE_caseLabelList = 32;
    m2pim4Parser.RULE_caseLabels = 33;
    m2pim4Parser.RULE_setType = 34;
    m2pim4Parser.RULE_pointerType = 35;
    m2pim4Parser.RULE_procedureType = 36;
    m2pim4Parser.RULE_formalTypeList = 37;
    m2pim4Parser.RULE_variableDeclaration = 38;
    m2pim4Parser.RULE_designator = 39;
    m2pim4Parser.RULE_designatorTail = 40;
    m2pim4Parser.RULE_expList = 41;
    m2pim4Parser.RULE_expression = 42;
    m2pim4Parser.RULE_simpleExpression = 43;
    m2pim4Parser.RULE_term = 44;
    m2pim4Parser.RULE_factor = 45;
    m2pim4Parser.RULE_setOrDesignatorOrProcCall = 46;
    m2pim4Parser.RULE_actualParameters = 47;
    m2pim4Parser.RULE_statement = 48;
    m2pim4Parser.RULE_assignmentOrProcCall = 49;
    m2pim4Parser.RULE_statementSequence = 50;
    m2pim4Parser.RULE_ifStatement = 51;
    m2pim4Parser.RULE_caseStatement = 52;
    m2pim4Parser.RULE_ccase = 53;
    m2pim4Parser.RULE_whileStatement = 54;
    m2pim4Parser.RULE_repeatStatement = 55;
    m2pim4Parser.RULE_forStatement = 56;
    m2pim4Parser.RULE_loopStatement = 57;
    m2pim4Parser.RULE_withStatement = 58;
    m2pim4Parser.RULE_procedureDeclaration = 59;
    m2pim4Parser.RULE_procedureHeading = 60;
    m2pim4Parser.RULE_block = 61;
    m2pim4Parser.RULE_declaration = 62;
    m2pim4Parser.RULE_formalParameters = 63;
    m2pim4Parser.RULE_fpSection = 64;
    m2pim4Parser.RULE_formalType = 65;
    m2pim4Parser.RULE_moduleDeclaration = 66;
    m2pim4Parser.RULE_priority = 67;
    m2pim4Parser.RULE_exportList = 68;
    m2pim4Parser.RULE_importList = 69;
    m2pim4Parser.RULE_definitionModule = 70;
    m2pim4Parser.RULE_definition = 71;
    m2pim4Parser.RULE_programModule = 72;
    m2pim4Parser.RULE_compilationUnit = 73;
    // tslint:disable:no-trailing-whitespace
    m2pim4Parser.ruleNames = [
        "ident", "number", "integer", "real", "scaleFactor", "hexDigit", "digit",
        "octalDigit", "string", "qualident", "constantDeclaration", "constExpression",
        "relation", "simpleConstExpr", "addOperator", "constTerm", "mulOperator",
        "constFactor", "setOrQualident", "set", "element", "typeDeclaration",
        "type", "simpleType", "enumeration", "identList", "subrangeType", "arrayType",
        "recordType", "fieldListSequence", "fieldList", "variant", "caseLabelList",
        "caseLabels", "setType", "pointerType", "procedureType", "formalTypeList",
        "variableDeclaration", "designator", "designatorTail", "expList", "expression",
        "simpleExpression", "term", "factor", "setOrDesignatorOrProcCall", "actualParameters",
        "statement", "assignmentOrProcCall", "statementSequence", "ifStatement",
        "caseStatement", "ccase", "whileStatement", "repeatStatement", "forStatement",
        "loopStatement", "withStatement", "procedureDeclaration", "procedureHeading",
        "block", "declaration", "formalParameters", "fpSection", "formalType",
        "moduleDeclaration", "priority", "exportList", "importList", "definitionModule",
        "definition", "programModule", "compilationUnit",
    ];
    m2pim4Parser._LITERAL_NAMES = [
        undefined, "'.'", "'='", "'#'", "'<>'", "'<'", "'<='", "'>'", "'>='",
        "'+'", "'-'", "'*'", "'/'", "'&'", "'('", "')'", "'~'", "'{'", "','",
        "'}'", "'..'", "'['", "']'", "';'", "':'", "'|'", "'^'", "':='", "'AND'",
        "'ARRAY'", "'BEGIN'", "'BY'", "'CASE'", "'CONST'", "'DEFINITION'", "'DIV'",
        "'DO'", "'ELSE'", "'ELSIF'", "'END'", "'EXIT'", "'EXPORT'", "'FOR'", "'FROM'",
        "'IF'", "'IMPLEMENTATION'", "'IMPORT'", "'IN'", "'LOOP'", "'MOD'", "'MODULE'",
        "'NOT'", "'OF'", "'OR'", "'POINTER'", "'PROCEDURE'", "'QUALIFIED'", "'RECORD'",
        "'REPEAT'", "'RETURN'", "'SET'", "'THEN'", "'TO'", "'TYPE'", "'UNTIL'",
        "'VAR'", "'WHILE'", "'WITH'",
    ];
    m2pim4Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "AND", "ARRAY", "BEGIN", "BY", "CASE", "CONST", "DEFINITION", "DIV", "DO",
        "ELSE", "ELSIF", "END", "EXIT", "EXPORT", "FOR", "FROM", "IF", "IMPLEMENTATION",
        "IMPORT", "IN", "LOOP", "MOD", "MODULE", "NOT", "OF", "OR", "POINTER",
        "PROCEDURE", "QUALIFIED", "RECORD", "REPEAT", "RETURN", "SET", "THEN",
        "TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH", "IDENT", "INTEGER", "REAL",
        "STRING", "DIGIT", "OCTAL_DIGIT", "HEX_DIGIT", "SCALE_FACTOR", "COMMENT",
        "WS",
    ];
    m2pim4Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(m2pim4Parser._LITERAL_NAMES, m2pim4Parser._SYMBOLIC_NAMES, []);
    m2pim4Parser._serializedATNSegments = 2;
    m2pim4Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u032F\x04\x02" +
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
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
        "\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\xAC\n\v\f\v\x0E" +
        "\v\xAF\v\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\xB9\n" +
        "\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x05\x0E\xC4\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xC9\n\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xCF\n\x0F\f\x0F\x0E\x0F\xD2\v\x0F\x03" +
        "\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xDA\n\x11\f\x11\x0E" +
        "\x11\xDD\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xEB\n\x13\x03\x13\x05" +
        "\x13\xEE\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\xF3\n\x14\x05\x14\xF5\n" +
        "\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\xFB\n\x15\f\x15\x0E\x15\xFE" +
        "\v\x15\x05\x15\u0100\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05" +
        "\x16\u0107\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x03\x18\x05\x18\u0113\n\x18\x03\x19\x03\x19\x03\x19\x05" +
        "\x19\u0118\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
        "\x07\x1B\u0121\n\x1B\f\x1B\x0E\x1B\u0124\v\x1B\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0130" +
        "\n\x1D\f\x1D\x0E\x1D\u0133\v\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u013F\n\x1F\f\x1F\x0E" +
        "\x1F\u0142\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u014D" +
        "\n \x03 \x05 \u0150\n \x03 \x03 \x03 \x03 \x07 \u0156\n \f \x0E \u0159" +
        "\v \x03 \x03 \x05 \u015D\n \x03 \x03 \x05 \u0161\n \x03!\x03!\x03!\x03" +
        "!\x03\"\x03\"\x03\"\x07\"\u016A\n\"\f\"\x0E\"\u016D\v\"\x03#\x03#\x03" +
        "#\x05#\u0172\n#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x05" +
        "&\u017E\n&\x03\'\x03\'\x05\'\u0182\n\'\x03\'\x03\'\x03\'\x05\'\u0187\n" +
        "\'\x03\'\x07\'\u018A\n\'\f\'\x0E\'\u018D\v\'\x05\'\u018F\n\'\x03\'\x03" +
        "\'\x03\'\x05\'\u0194\n\'\x03(\x03(\x03(\x03(\x03)\x03)\x05)\u019C\n)\x03" +
        "*\x03*\x03*\x03*\x03*\x05*\u01A3\n*\x03*\x03*\x07*\u01A7\n*\f*\x0E*\u01AA" +
        "\v*\x06*\u01AC\n*\r*\x0E*\u01AD\x03+\x03+\x03+\x07+\u01B3\n+\f+\x0E+\u01B6" +
        "\v+\x03,\x03,\x03,\x03,\x05,\u01BC\n,\x03-\x03-\x03-\x05-\u01C1\n-\x03" +
        "-\x03-\x03-\x03-\x07-\u01C7\n-\f-\x0E-\u01CA\v-\x03.\x03.\x03.\x03.\x07" +
        ".\u01D0\n.\f.\x0E.\u01D3\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
        "/\x03/\x05/\u01DF\n/\x03/\x05/\u01E2\n/\x030\x030\x030\x030\x050\u01E8" +
        "\n0\x030\x050\u01EB\n0\x050\u01ED\n0\x050\u01EF\n0\x031\x031\x051\u01F3" +
        "\n1\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x05" +
        "2\u0202\n2\x052\u0204\n2\x033\x033\x033\x033\x053\u020A\n3\x053\u020C" +
        "\n3\x034\x034\x034\x074\u0211\n4\f4\x0E4\u0214\v4\x035\x035\x035\x035" +
        "\x035\x035\x035\x035\x035\x075\u021F\n5\f5\x0E5\u0222\v5\x035\x035\x05" +
        "5\u0226\n5\x035\x035\x036\x036\x036\x036\x036\x036\x076\u0230\n6\f6\x0E" +
        "6\u0233\v6\x036\x036\x056\u0237\n6\x036\x036\x037\x037\x037\x037\x038" +
        "\x038\x038\x038\x038\x038\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x05:\u0252\n:\x03:\x03:\x03:\x03:\x03;\x03;\x03" +
        ";\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03>\x03" +
        ">\x03>\x05>\u026A\n>\x03?\x07?\u026D\n?\f?\x0E?\u0270\v?\x03?\x03?\x05" +
        "?\u0274\n?\x03?\x03?\x03@\x03@\x03@\x03@\x07@\u027C\n@\f@\x0E@\u027F\v" +
        "@\x03@\x03@\x03@\x03@\x07@\u0285\n@\f@\x0E@\u0288\v@\x03@\x03@\x03@\x03" +
        "@\x07@\u028E\n@\f@\x0E@\u0291\v@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u0299" +
        "\n@\x03A\x03A\x03A\x03A\x07A\u029F\nA\fA\x0EA\u02A2\vA\x05A\u02A4\nA\x03" +
        "A\x03A\x03A\x05A\u02A9\nA\x03B\x05B\u02AC\nB\x03B\x03B\x03B\x03B\x03C" +
        "\x03C\x05C\u02B4\nC\x03C\x03C\x03D\x03D\x03D\x05D\u02BB\nD\x03D\x03D\x07" +
        "D\u02BF\nD\fD\x0ED\u02C2\vD\x03D\x05D\u02C5\nD\x03D\x03D\x03D\x03E\x03" +
        "E\x03E\x03E\x03F\x03F\x05F\u02D0\nF\x03F\x03F\x03F\x03G\x03G\x05G\u02D7" +
        "\nG\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x07H\u02E2\nH\fH\x0E" +
        "H\u02E5\vH\x03H\x05H\u02E8\nH\x03H\x07H\u02EB\nH\fH\x0EH\u02EE\vH\x03" +
        "H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x07I\u02F8\nI\fI\x0EI\u02FB\vI\x03" +
        "I\x03I\x03I\x03I\x05I\u0301\nI\x03I\x03I\x07I\u0305\nI\fI\x0EI\u0308\v" +
        "I\x03I\x03I\x03I\x03I\x07I\u030E\nI\fI\x0EI\u0311\vI\x03I\x03I\x03I\x05" +
        "I\u0316\nI\x03J\x03J\x03J\x05J\u031B\nJ\x03J\x03J\x07J\u031F\nJ\fJ\x0E" +
        "J\u0322\vJ\x03J\x03J\x03J\x03J\x03K\x03K\x05K\u032A\nK\x03K\x05K\u032D" +
        "\nK\x03K\x02\x02\x02L\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
        ">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
        "Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
        "v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
        "\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x02\x05\x03\x02GH\x04\x02" +
        "\v\f77\x06\x02\r\x0F\x1E\x1E%%33\x02\u035C\x02\x96\x03\x02\x02\x02\x04" +
        "\x98\x03\x02\x02\x02\x06\x9A\x03\x02\x02\x02\b\x9C\x03\x02\x02\x02\n\x9E" +
        "\x03\x02\x02\x02\f\xA0\x03\x02\x02\x02\x0E\xA2\x03\x02\x02\x02\x10\xA4" +
        "\x03\x02\x02\x02\x12\xA6\x03\x02\x02\x02\x14\xA8\x03\x02\x02\x02\x16\xB0" +
        "\x03\x02\x02\x02\x18\xB4\x03\x02\x02\x02\x1A\xC3\x03\x02\x02\x02\x1C\xC8" +
        "\x03\x02\x02\x02\x1E\xD3\x03\x02\x02\x02 \xD5\x03\x02\x02\x02\"\xDE\x03" +
        "\x02\x02\x02$\xED\x03\x02\x02\x02&\xF4\x03\x02\x02\x02(\xF6\x03\x02\x02" +
        "\x02*\u0103\x03\x02\x02\x02,\u0108\x03\x02\x02\x02.\u0112\x03\x02\x02" +
        "\x020\u0117\x03\x02\x02\x022\u0119\x03\x02\x02\x024\u011D\x03\x02\x02" +
        "\x026\u0125\x03\x02\x02\x028\u012B\x03\x02\x02\x02:\u0137\x03\x02\x02" +
        "\x02<\u013B\x03\x02\x02\x02>\u0160\x03\x02\x02\x02@\u0162\x03\x02\x02" +
        "\x02B\u0166\x03\x02\x02\x02D\u016E\x03\x02\x02\x02F\u0173\x03\x02\x02" +
        "\x02H\u0177\x03\x02\x02\x02J\u017B\x03\x02\x02\x02L\u017F\x03\x02\x02" +
        "\x02N\u0195\x03\x02\x02\x02P\u0199\x03\x02\x02\x02R\u01AB\x03\x02\x02" +
        "\x02T\u01AF\x03\x02\x02\x02V\u01B7\x03\x02\x02\x02X\u01C0\x03\x02\x02" +
        "\x02Z\u01CB\x03\x02\x02\x02\\\u01E1\x03\x02\x02\x02^\u01EE\x03\x02\x02" +
        "\x02`\u01F0\x03\x02\x02\x02b\u0203\x03\x02\x02\x02d\u0205\x03\x02\x02" +
        "\x02f\u020D\x03\x02\x02\x02h\u0215\x03\x02\x02\x02j\u0229\x03\x02\x02" +
        "\x02l\u023A\x03\x02\x02\x02n\u023E\x03\x02\x02\x02p\u0244\x03\x02\x02" +
        "\x02r\u0249\x03\x02\x02\x02t\u0257\x03\x02\x02\x02v\u025B\x03\x02\x02" +
        "\x02x\u0261\x03\x02\x02\x02z\u0266\x03\x02\x02\x02|\u026E\x03\x02\x02" +
        "\x02~\u0298\x03\x02\x02\x02\x80\u029A\x03\x02\x02\x02\x82\u02AB\x03\x02" +
        "\x02\x02\x84\u02B3\x03\x02\x02\x02\x86\u02B7\x03\x02\x02\x02\x88\u02C9" +
        "\x03\x02\x02\x02\x8A\u02CD\x03\x02\x02\x02\x8C\u02D6\x03\x02\x02\x02\x8E" +
        "\u02DC\x03\x02\x02\x02\x90\u0315\x03\x02\x02\x02\x92\u0317\x03\x02\x02" +
        "\x02\x94\u032C\x03\x02\x02\x02\x96\x97\x07F\x02\x02\x97\x03\x03\x02\x02" +
        "\x02\x98\x99\t\x02\x02\x02\x99\x05\x03\x02\x02\x02\x9A\x9B\x07G\x02\x02" +
        "\x9B\x07\x03\x02\x02\x02\x9C\x9D\x07H\x02\x02\x9D\t\x03\x02\x02\x02\x9E" +
        "\x9F\x07M\x02\x02\x9F\v\x03\x02\x02\x02\xA0\xA1\x07L\x02\x02\xA1\r\x03" +
        "\x02\x02\x02\xA2\xA3\x07J\x02\x02\xA3\x0F\x03\x02\x02\x02\xA4\xA5\x07" +
        "K\x02\x02\xA5\x11\x03\x02\x02\x02\xA6\xA7\x07I\x02\x02\xA7\x13\x03\x02" +
        "\x02\x02\xA8\xAD\x05\x02\x02\x02\xA9\xAA\x07\x03\x02\x02\xAA\xAC\x05\x02" +
        "\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02" +
        "\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\x15\x03\x02\x02\x02\xAF\xAD\x03\x02" +
        "\x02\x02\xB0\xB1\x05\x02\x02\x02\xB1\xB2\x07\x04\x02\x02\xB2\xB3\x05\x18" +
        "\r\x02\xB3\x17\x03\x02\x02\x02\xB4\xB8\x05\x1C\x0F\x02\xB5\xB6\x05\x1A" +
        "\x0E\x02\xB6\xB7\x05\x1C\x0F\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB5\x03\x02" +
        "\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x19\x03\x02\x02\x02\xBA\xC4\x07\x04" +
        "\x02\x02\xBB\xC4\x07\x05\x02\x02\xBC\xC4\x07\x06\x02\x02\xBD\xC4\x07\x07" +
        "\x02\x02\xBE\xC4\x07\b\x02\x02\xBF\xC4\x07\t\x02\x02\xC0\xC4\x07\n\x02" +
        "\x02\xC1\xC2\x071\x02\x02\xC2\xC4\b\x0E\x01\x02\xC3\xBA\x03\x02\x02\x02" +
        "\xC3\xBB\x03\x02\x02\x02\xC3\xBC\x03\x02\x02\x02\xC3\xBD\x03\x02\x02\x02" +
        "\xC3\xBE\x03\x02\x02\x02\xC3\xBF\x03\x02\x02\x02\xC3\xC0\x03\x02\x02\x02" +
        "\xC3\xC1\x03\x02\x02\x02\xC4\x1B\x03\x02\x02\x02\xC5\xC9\x07\v\x02\x02" +
        "\xC6\xC7\x07\f\x02\x02\xC7\xC9\b\x0F\x01\x02\xC8\xC5\x03\x02\x02\x02\xC8" +
        "\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA" +
        "\xD0\x05 \x11\x02\xCB\xCC\x05\x1E\x10\x02\xCC\xCD\x05 \x11\x02\xCD\xCF" +
        "\x03\x02\x02\x02\xCE\xCB\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE" +
        "\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\x1D\x03\x02\x02\x02\xD2\xD0" +
        "\x03\x02\x02\x02\xD3\xD4\t\x03\x02\x02\xD4\x1F\x03\x02\x02\x02\xD5\xDB" +
        "\x05$\x13\x02\xD6\xD7\x05\"\x12\x02\xD7\xD8\x05$\x13\x02\xD8\xDA\x03\x02" +
        "\x02\x02\xD9\xD6\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02" +
        "\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC!\x03\x02\x02\x02\xDD\xDB\x03\x02" +
        "\x02\x02\xDE\xDF\t\x04\x02\x02\xDF#\x03\x02\x02\x02\xE0\xEE\x05\x04\x03" +
        "\x02\xE1\xEE\x05\x12\n\x02\xE2\xEE\x05&\x14\x02\xE3\xE4\x07\x10\x02\x02" +
        "\xE4\xE5\x05\x18\r\x02\xE5\xE6\x07\x11\x02\x02\xE6\xEE\x03\x02\x02\x02" +
        "\xE7\xEB\x075\x02\x02\xE8\xE9\x07\x12\x02\x02\xE9\xEB\b\x13\x01\x02\xEA" +
        "\xE7\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC" +
        "\xEE\x05$\x13\x02\xED\xE0\x03\x02\x02\x02\xED\xE1\x03\x02\x02\x02\xED" +
        "\xE2\x03\x02\x02\x02\xED\xE3\x03\x02\x02\x02\xED\xEA\x03\x02\x02\x02\xEE" +
        "%\x03\x02\x02\x02\xEF\xF5\x05(\x15\x02\xF0\xF2\x05\x14\v\x02\xF1\xF3\x05" +
        "(\x15\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x03" +
        "\x02\x02\x02\xF4\xEF\x03\x02\x02\x02\xF4\xF0\x03\x02\x02\x02\xF5\'\x03" +
        "\x02\x02\x02\xF6\xFF\x07\x13\x02\x02\xF7\xFC\x05*\x16\x02\xF8\xF9\x07" +
        "\x14\x02\x02\xF9\xFB\x05*\x16\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03" +
        "\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u0100" +
        "\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\xF7\x03\x02\x02\x02\xFF\u0100" +
        "\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x07\x15\x02\x02" +
        "\u0102)\x03\x02\x02\x02\u0103\u0106\x05\x18\r\x02\u0104\u0105\x07\x16" +
        "\x02\x02\u0105\u0107\x05\x18\r\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107" +
        "\x03\x02\x02\x02\u0107+\x03\x02\x02\x02\u0108\u0109\x05\x02\x02\x02\u0109" +
        "\u010A\x07\x04\x02\x02\u010A\u010B\x05.\x18\x02\u010B-\x03\x02\x02\x02" +
        "\u010C\u0113\x050\x19\x02\u010D\u0113\x058\x1D\x02\u010E\u0113\x05:\x1E" +
        "\x02\u010F\u0113\x05F$\x02\u0110\u0113\x05H%\x02\u0111\u0113\x05J&\x02" +
        "\u0112\u010C\x03\x02\x02\x02\u0112\u010D\x03\x02\x02\x02\u0112\u010E\x03" +
        "\x02\x02\x02\u0112\u010F\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112" +
        "\u0111\x03\x02\x02\x02\u0113/\x03\x02\x02\x02\u0114\u0118\x05\x14\v\x02" +
        "\u0115\u0118\x052\x1A\x02\u0116\u0118\x056\x1C\x02\u0117\u0114\x03\x02" +
        "\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118" +
        "1\x03\x02\x02\x02\u0119\u011A\x07\x10\x02\x02\u011A\u011B\x054\x1B\x02" +
        "\u011B\u011C\x07\x11\x02\x02\u011C3\x03\x02\x02\x02\u011D\u0122\x05\x02" +
        "\x02\x02\u011E\u011F\x07\x14\x02\x02\u011F\u0121\x05\x02\x02\x02\u0120" +
        "\u011E\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02" +
        "\x02\x02\u0122\u0123\x03\x02\x02\x02\u01235\x03\x02\x02\x02\u0124\u0122" +
        "\x03\x02\x02\x02\u0125\u0126\x07\x17\x02\x02\u0126\u0127\x05\x18\r\x02" +
        "\u0127\u0128\x07\x16\x02\x02\u0128\u0129\x05\x18\r\x02\u0129\u012A\x07" +
        "\x18\x02\x02\u012A7\x03\x02\x02\x02\u012B\u012C\x07\x1F\x02\x02\u012C" +
        "\u0131\x050\x19\x02\u012D\u012E\x07\x14\x02\x02\u012E\u0130\x050\x19\x02" +
        "\u012F\u012D\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03" +
        "\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133" +
        "\u0131\x03\x02\x02\x02\u0134\u0135\x076\x02\x02\u0135\u0136\x05.\x18\x02" +
        "\u01369\x03\x02\x02\x02\u0137\u0138\x07;\x02\x02\u0138\u0139\x05<\x1F" +
        "\x02\u0139\u013A\x07)\x02\x02\u013A;\x03\x02\x02\x02\u013B\u0140\x05>" +
        " \x02\u013C\u013D\x07\x19\x02\x02\u013D\u013F\x05> \x02\u013E\u013C\x03" +
        "\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
        "\u0141\x03\x02\x02\x02\u0141=\x03\x02\x02\x02\u0142\u0140\x03\x02\x02" +
        "\x02\u0143\u0144\x054\x1B\x02\u0144\u0145\x07\x1A\x02\x02\u0145\u0146" +
        "\x05.\x18\x02\u0146\u0161\x03\x02\x02\x02\u0147\u0148\x07\"\x02\x02\u0148" +
        "\u014F\x05\x02\x02\x02\u0149\u014D\x07\x1A\x02\x02\u014A\u014B\x07\x03" +
        "\x02\x02\u014B\u014D\b \x01\x02\u014C\u0149\x03\x02\x02\x02\u014C\u014A" +
        "\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0150\x05\x14\v\x02" +
        "\u014F\u014C\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03" +
        "\x02\x02\x02\u0151\u0152\x076\x02\x02\u0152\u0157\x05@!\x02\u0153\u0154" +
        "\x07\x1B\x02\x02\u0154\u0156\x05@!\x02\u0155\u0153\x03\x02\x02\x02\u0156" +
        "\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02" +
        "\x02\x02\u0158\u015C\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A" +
        "\u015B\x07\'\x02\x02\u015B\u015D\x05<\x1F\x02\u015C\u015A\x03\x02\x02" +
        "\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F" +
        "\x07)\x02\x02\u015F\u0161\x03\x02\x02\x02\u0160\u0143\x03\x02\x02\x02" +
        "\u0160\u0147\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161?\x03\x02" +
        "\x02\x02\u0162\u0163\x05B\"\x02\u0163\u0164\x07\x1A\x02\x02\u0164\u0165" +
        "\x05<\x1F\x02\u0165A\x03\x02\x02\x02\u0166\u016B\x05D#\x02\u0167\u0168" +
        "\x07\x14\x02\x02\u0168\u016A\x05D#\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
        "\u016D\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02" +
        "\x02\x02\u016CC\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0171" +
        "\x05\x18\r\x02\u016F\u0170\x07\x16\x02\x02\u0170\u0172\x05\x18\r\x02\u0171" +
        "\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172E\x03\x02\x02" +
        "\x02\u0173\u0174\x07>\x02\x02\u0174\u0175\x076\x02\x02\u0175\u0176\x05" +
        "0\x19\x02\u0176G\x03\x02\x02\x02\u0177\u0178\x078\x02\x02\u0178\u0179" +
        "\x07@\x02\x02\u0179\u017A\x05.\x18\x02\u017AI\x03\x02\x02\x02\u017B\u017D" +
        "\x079\x02\x02\u017C\u017E\x05L\'\x02\u017D\u017C\x03\x02\x02\x02\u017D" +
        "\u017E\x03\x02\x02\x02\u017EK\x03\x02\x02\x02\u017F\u018E\x07\x10\x02" +
        "\x02\u0180\u0182\x07C\x02\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182" +
        "\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u018B\x05\x84C\x02" +
        "\u0184\u0186\x07\x14\x02\x02\u0185\u0187\x07C\x02\x02\u0186\u0185\x03" +
        "\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" +
        "\u018A\x05\x84C\x02\u0189\u0184\x03\x02\x02\x02\u018A\u018D\x03\x02\x02" +
        "\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018F" +
        "\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u0181\x03\x02\x02\x02" +
        "\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0193\x07" +
        "\x11\x02\x02\u0191\u0192\x07\x1A\x02\x02\u0192\u0194\x05\x14\v\x02\u0193" +
        "\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194M\x03\x02\x02" +
        "\x02\u0195\u0196\x054\x1B\x02\u0196\u0197\x07\x1A\x02\x02\u0197\u0198" +
        "\x05.\x18\x02\u0198O\x03\x02\x02\x02\u0199\u019B\x05\x14\v\x02\u019A\u019C" +
        "\x05R*\x02\u019B\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C" +
        "Q\x03\x02\x02\x02\u019D\u019E\x07\x17\x02\x02\u019E\u019F\x05T+\x02\u019F" +
        "\u01A0\x07\x18\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u01A3\x07\x1C" +
        "\x02\x02\u01A2\u019D\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3" +
        "\u01A8\x03\x02\x02\x02\u01A4\u01A5\x07\x03\x02\x02\u01A5\u01A7\x05\x02" +
        "\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8" +
        "\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AC\x03\x02" +
        "\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01A2\x03\x02\x02\x02\u01AC" +
        "\u01AD\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02" +
        "\x02\x02\u01AES\x03\x02\x02\x02\u01AF\u01B4\x05V,\x02\u01B0\u01B1\x07" +
        "\x14\x02\x02\u01B1\u01B3\x05V,\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B6" +
        "\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02" +
        "\u01B5U\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01BB\x05X-" +
        "\x02\u01B8\u01B9\x05\x1A\x0E\x02\u01B9\u01BA\x05X-\x02\u01BA\u01BC\x03" +
        "\x02\x02\x02\u01BB\u01B8\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC" +
        "W\x03\x02\x02\x02\u01BD\u01C1\x07\v\x02\x02\u01BE\u01BF\x07\f\x02\x02" +
        "\u01BF\u01C1\b-\x01\x02\u01C0\u01BD\x03\x02\x02\x02\u01C0\u01BE\x03\x02" +
        "\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
        "\u01C8\x05Z.\x02\u01C3\u01C4\x05\x1E\x10\x02\u01C4\u01C5\x05Z.\x02\u01C5" +
        "\u01C7\x03\x02\x02\x02\u01C6\u01C3\x03\x02\x02\x02\u01C7\u01CA\x03\x02" +
        "\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
        "Y\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB\u01D1\x05\\/\x02\u01CC" +
        "\u01CD\x05\"\x12\x02\u01CD\u01CE\x05\\/\x02\u01CE\u01D0\x03\x02\x02\x02" +
        "\u01CF\u01CC\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03" +
        "\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2[\x03\x02\x02\x02\u01D3" +
        "\u01D1\x03\x02\x02\x02\u01D4\u01E2\x05\x04\x03\x02\u01D5\u01E2\x05\x12" +
        "\n\x02\u01D6\u01E2\x05^0\x02\u01D7\u01D8\x07\x10\x02\x02\u01D8\u01D9\x05" +
        "V,\x02\u01D9\u01DA\x07\x11\x02\x02\u01DA\u01E2\x03\x02\x02\x02\u01DB\u01DF" +
        "\x075\x02\x02\u01DC\u01DD\x07\x12\x02\x02\u01DD\u01DF\b/\x01\x02\u01DE" +
        "\u01DB\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E0\x03\x02" +
        "\x02\x02\u01E0\u01E2\x05\\/\x02\u01E1\u01D4\x03\x02\x02\x02\u01E1\u01D5" +
        "\x03\x02\x02\x02\u01E1\u01D6\x03\x02\x02\x02\u01E1\u01D7\x03\x02\x02\x02" +
        "\u01E1\u01DE\x03\x02\x02\x02\u01E2]\x03\x02\x02\x02\u01E3\u01EF\x05(\x15" +
        "\x02\u01E4\u01EC\x05\x14\v\x02\u01E5\u01ED\x05(\x15\x02\u01E6\u01E8\x05" +
        "R*\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA" +
        "\x03\x02\x02\x02\u01E9\u01EB\x05`1\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA" +
        "\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01E5\x03\x02" +
        "\x02\x02\u01EC\u01E7\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE" +
        "\u01E3\x03\x02\x02\x02\u01EE\u01E4\x03\x02\x02\x02\u01EF_\x03\x02\x02" +
        "\x02\u01F0\u01F2\x07\x10\x02\x02\u01F1\u01F3\x05T+\x02\u01F2\u01F1\x03" +
        "\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
        "\u01F5\x07\x11\x02\x02\u01F5a\x03\x02\x02\x02\u01F6\u0204\x05d3\x02\u01F7" +
        "\u0204\x05h5\x02\u01F8\u0204\x05j6\x02\u01F9\u0204\x05n8\x02\u01FA\u0204" +
        "\x05p9\x02\u01FB\u0204\x05t;\x02\u01FC\u0204\x05r:\x02\u01FD\u0204\x05" +
        "v<\x02\u01FE\u0204\x07*\x02\x02\u01FF\u0201\x07=\x02\x02\u0200\u0202\x05" +
        "V,\x02\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0204" +
        "\x03\x02\x02\x02\u0203\u01F6\x03\x02\x02\x02\u0203\u01F7\x03\x02\x02\x02" +
        "\u0203\u01F8\x03\x02\x02\x02\u0203\u01F9\x03\x02\x02\x02\u0203\u01FA\x03" +
        "\x02";
    m2pim4Parser._serializedATNSegment1 = "\x02\x02\u0203\u01FB\x03\x02\x02\x02\u0203\u01FC\x03\x02\x02\x02\u0203" +
        "\u01FD\x03\x02\x02\x02\u0203\u01FE\x03\x02\x02\x02\u0203\u01FF\x03\x02" +
        "\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204c\x03\x02\x02\x02\u0205\u020B" +
        "\x05P)\x02\u0206\u0207\x07\x1D\x02\x02\u0207\u020C\x05V,\x02\u0208\u020A" +
        "\x05`1\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
        "\u020C\x03\x02\x02\x02\u020B\u0206\x03\x02\x02\x02\u020B\u0209\x03\x02" +
        "\x02\x02\u020Ce\x03\x02\x02\x02\u020D\u0212\x05b2\x02\u020E\u020F\x07" +
        "\x19\x02\x02\u020F\u0211\x05b2\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214" +
        "\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
        "\u0213g\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0216\x07.\x02" +
        "\x02\u0216\u0217\x05V,\x02\u0217\u0218\x07?\x02\x02\u0218\u0220\x05f4" +
        "\x02\u0219\u021A\x07(\x02\x02\u021A\u021B\x05V,\x02\u021B\u021C\x07?\x02" +
        "\x02\u021C\u021D\x05f4\x02\u021D\u021F\x03\x02\x02\x02\u021E\u0219\x03" +
        "\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220" +
        "\u0221\x03\x02\x02\x02\u0221\u0225\x03\x02\x02\x02\u0222\u0220\x03\x02" +
        "\x02\x02\u0223\u0224\x07\'\x02\x02\u0224\u0226\x05f4\x02\u0225\u0223\x03" +
        "\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227" +
        "\u0228\x07)\x02\x02\u0228i\x03\x02\x02\x02\u0229\u022A\x07\"\x02\x02\u022A" +
        "\u022B\x05V,\x02\u022B\u022C\x076\x02\x02\u022C\u0231\x05l7\x02\u022D" +
        "\u022E\x07\x1B\x02\x02\u022E\u0230\x05l7\x02\u022F\u022D\x03\x02\x02\x02" +
        "\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03" +
        "\x02\x02\x02\u0232\u0236\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
        "\u0235\x07\'\x02\x02\u0235\u0237\x05f4\x02\u0236\u0234\x03\x02\x02\x02" +
        "\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x07" +
        ")\x02\x02\u0239k\x03\x02\x02\x02\u023A\u023B\x05B\"\x02\u023B\u023C\x07" +
        "\x1A\x02\x02\u023C\u023D\x05f4\x02\u023Dm\x03\x02\x02\x02\u023E\u023F" +
        "\x07D\x02\x02\u023F\u0240\x05V,\x02\u0240\u0241\x07&\x02\x02\u0241\u0242" +
        "\x05f4\x02\u0242\u0243\x07)\x02\x02\u0243o\x03\x02\x02\x02\u0244\u0245" +
        "\x07<\x02\x02\u0245\u0246\x05f4\x02\u0246\u0247\x07B\x02\x02\u0247\u0248" +
        "\x05V,\x02\u0248q\x03\x02\x02\x02\u0249\u024A\x07,\x02\x02\u024A\u024B" +
        "\x05\x02\x02\x02\u024B\u024C\x07\x1D\x02\x02\u024C\u024D\x05V,\x02\u024D" +
        "\u024E\x07@\x02\x02\u024E\u0251\x05V,\x02\u024F\u0250\x07!\x02\x02\u0250" +
        "\u0252\x05\x18\r\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02" +
        "\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x07&\x02\x02\u0254\u0255" +
        "\x05f4\x02\u0255\u0256\x07)\x02\x02\u0256s\x03\x02\x02\x02\u0257\u0258" +
        "\x072\x02\x02\u0258\u0259\x05f4\x02\u0259\u025A\x07)\x02\x02\u025Au\x03" +
        "\x02\x02\x02\u025B\u025C\x07E\x02\x02\u025C\u025D\x05P)\x02\u025D\u025E" +
        "\x07&\x02\x02\u025E\u025F\x05f4\x02\u025F\u0260\x07)\x02\x02\u0260w\x03" +
        "\x02\x02\x02\u0261\u0262\x05z>\x02\u0262\u0263\x07\x19\x02\x02\u0263\u0264" +
        "\x05|?\x02\u0264\u0265\x05\x02\x02\x02\u0265y\x03\x02\x02\x02\u0266\u0267" +
        "\x079\x02\x02\u0267\u0269\x05\x02\x02\x02\u0268\u026A\x05\x80A\x02\u0269" +
        "\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A{\x03\x02\x02" +
        "\x02\u026B\u026D\x05~@\x02\u026C\u026B\x03\x02\x02\x02\u026D\u0270\x03" +
        "\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F" +
        "\u0273\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0272\x07 \x02" +
        "\x02\u0272\u0274\x05f4\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03" +
        "\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x07)\x02\x02\u0276" +
        "}\x03\x02\x02\x02\u0277\u027D\x07#\x02\x02\u0278\u0279\x05\x16\f\x02\u0279" +
        "\u027A\x07\x19\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u0278\x03\x02" +
        "\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027D" +
        "\u027E\x03\x02\x02\x02\u027E\u0299\x03\x02\x02\x02\u027F\u027D\x03\x02" +
        "\x02\x02\u0280\u0286\x07A\x02\x02\u0281\u0282\x05,\x17\x02\u0282\u0283" +
        "\x07\x19\x02\x02\u0283\u0285\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02" +
        "\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286\u0287\x03" +
        "\x02\x02\x02\u0287\u0299\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0289" +
        "\u028F\x07C\x02\x02\u028A\u028B\x05N(\x02\u028B\u028C\x07\x19\x02\x02" +
        "\u028C\u028E\x03\x02\x02\x02\u028D\u028A\x03\x02\x02\x02\u028E\u0291\x03" +
        "\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290" +
        "\u0299\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0293\x05x=\x02" +
        "\u0293\u0294\x07\x19\x02\x02\u0294\u0299\x03\x02\x02\x02\u0295\u0296\x05" +
        "\x86D\x02\u0296\u0297\x07\x19\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298" +
        "\u0277\x03\x02\x02\x02\u0298\u0280\x03\x02\x02\x02\u0298\u0289\x03\x02" +
        "\x02\x02\u0298\u0292\x03\x02\x02\x02\u0298\u0295\x03\x02\x02\x02\u0299" +
        "\x7F\x03\x02\x02\x02\u029A\u02A3\x07\x10\x02\x02\u029B\u02A0\x05\x82B" +
        "\x02\u029C\u029D\x07\x19\x02\x02\u029D\u029F\x05\x82B\x02\u029E\u029C" +
        "\x03\x02\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02" +
        "\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03" +
        "\x02\x02\x02\u02A3\u029B\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4" +
        "\u02A5\x03\x02\x02\x02\u02A5\u02A8\x07\x11\x02\x02\u02A6\u02A7\x07\x1A" +
        "\x02\x02\u02A7\u02A9\x05\x14\v\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9" +
        "\x03\x02\x02\x02\u02A9\x81\x03\x02\x02\x02\u02AA\u02AC\x07C\x02\x02\u02AB" +
        "\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x03\x02" +
        "\x02\x02\u02AD\u02AE\x054\x1B\x02\u02AE\u02AF\x07\x1A\x02\x02\u02AF\u02B0" +
        "\x05\x84C\x02\u02B0\x83\x03\x02\x02\x02\u02B1\u02B2\x07\x1F\x02\x02\u02B2" +
        "\u02B4\x076\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02" +
        "\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x05\x14\v\x02\u02B6\x85\x03" +
        "\x02\x02\x02\u02B7\u02B8\x074\x02\x02\u02B8\u02BA\x05\x02\x02\x02\u02B9" +
        "\u02BB\x05\x88E\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02" +
        "\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02C0\x07\x19\x02\x02\u02BD\u02BF" +
        "\x05\x8CG\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02" +
        "\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C4\x03" +
        "\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C5\x05\x8AF\x02\u02C4" +
        "\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C6\x03\x02" +
        "\x02\x02\u02C6\u02C7\x05|?\x02\u02C7\u02C8\x05\x02\x02\x02\u02C8\x87\x03" +
        "\x02\x02\x02\u02C9\u02CA\x07\x17\x02\x02\u02CA\u02CB\x05\x18\r\x02\u02CB" +
        "\u02CC\x07\x18\x02\x02\u02CC\x89\x03\x02\x02\x02\u02CD\u02CF\x07+\x02" +
        "\x02\u02CE\u02D0\x07:\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02CF\u02D0" +
        "\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x054\x1B\x02" +
        "\u02D2\u02D3\x07\x19\x02\x02\u02D3\x8B\x03\x02\x02\x02\u02D4\u02D5\x07" +
        "-\x02\x02\u02D5\u02D7\x05\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6" +
        "\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x070\x02" +
        "\x02\u02D9\u02DA\x054\x1B\x02\u02DA\u02DB\x07\x19\x02\x02\u02DB\x8D\x03" +
        "\x02\x02\x02\u02DC\u02DD\x07$\x02\x02\u02DD\u02DE\x074\x02\x02\u02DE\u02DF" +
        "\x05\x02\x02\x02\u02DF\u02E3\x07\x19\x02\x02\u02E0\u02E2\x05\x8CG\x02" +
        "\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03" +
        "\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5" +
        "\u02E3\x03\x02\x02\x02\u02E6\u02E8\x05\x8AF\x02\u02E7\u02E6\x03\x02\x02" +
        "\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02EC\x03\x02\x02\x02\u02E9\u02EB" +
        "\x05\x90I\x02\u02EA\u02E9\x03\x02\x02\x02\u02EB\u02EE\x03\x02\x02\x02" +
        "\u02EC\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03" +
        "\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F0\x07)\x02\x02\u02F0" +
        "\u02F1\x05\x02\x02\x02\u02F1\u02F2\x07\x03\x02\x02\u02F2\x8F\x03\x02\x02" +
        "\x02\u02F3\u02F9\x07#\x02\x02\u02F4\u02F5\x05\x16\f\x02\u02F5\u02F6\x07" +
        "\x19\x02\x02\u02F6\u02F8\x03\x02\x02\x02\u02F7\u02F4\x03\x02\x02\x02\u02F8" +
        "\u02FB\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03\x02" +
        "\x02\x02\u02FA\u0316\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FC" +
        "\u0306\x07A\x02\x02\u02FD\u0300\x05\x02\x02\x02\u02FE\u02FF\x07\x04\x02" +
        "\x02\u02FF\u0301\x05.\x18\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u0301" +
        "\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x07\x19\x02\x02" +
        "\u0303\u0305\x03\x02\x02\x02\u0304\u02FD\x03\x02\x02\x02\u0305\u0308\x03" +
        "\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307" +
        "\u0316\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0309\u030F\x07C\x02" +
        "\x02\u030A\u030B\x05N(\x02\u030B\u030C\x07\x19\x02\x02\u030C\u030E\x03" +
        "\x02\x02\x02\u030D\u030A\x03\x02\x02\x02\u030E\u0311\x03\x02\x02\x02\u030F" +
        "\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0316\x03\x02" +
        "\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0313\x05z>\x02\u0313\u0314" +
        "\x07\x19\x02\x02\u0314\u0316\x03\x02\x02\x02\u0315\u02F3\x03\x02\x02\x02" +
        "\u0315\u02FC\x03\x02\x02\x02\u0315\u0309\x03\x02\x02\x02\u0315\u0312\x03" +
        "\x02\x02\x02\u0316\x91\x03\x02\x02\x02\u0317\u0318\x074\x02\x02\u0318" +
        "\u031A\x05\x02\x02\x02\u0319\u031B\x05\x88E\x02\u031A\u0319\x03\x02\x02" +
        "\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u0320" +
        "\x07\x19\x02\x02\u031D\u031F\x05\x8CG\x02\u031E\u031D\x03\x02\x02\x02" +
        "\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321\x03" +
        "\x02\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323" +
        "\u0324\x05|?\x02\u0324\u0325\x05\x02\x02\x02\u0325\u0326\x07\x03\x02\x02" +
        "\u0326\x93\x03\x02\x02\x02\u0327\u032D\x05\x8EH\x02\u0328\u032A\x07/\x02" +
        "\x02\u0329\u0328\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032B" +
        "\x03\x02\x02\x02\u032B\u032D\x05\x92J\x02\u032C\u0327\x03\x02\x02\x02" +
        "\u032C\u0329\x03\x02\x02\x02\u032D\x95\x03\x02\x02\x02X\xAD\xB8\xC3\xC8" +
        "\xD0\xDB\xEA\xED\xF2\xF4\xFC\xFF\u0106\u0112\u0117\u0122\u0131\u0140\u014C" +
        "\u014F\u0157\u015C\u0160\u016B\u0171\u017D\u0181\u0186\u018B\u018E\u0193" +
        "\u019B\u01A2\u01A8\u01AD\u01B4\u01BB\u01C0\u01C8\u01D1\u01DE\u01E1\u01E7" +
        "\u01EA\u01EC\u01EE\u01F2\u0201\u0203\u0209\u020B\u0212\u0220\u0225\u0231" +
        "\u0236\u0251\u0269\u026E\u0273\u027D\u0286\u028F\u0298\u02A0\u02A3\u02A8" +
        "\u02AB\u02B3\u02BA\u02C0\u02C4\u02CF\u02D6\u02E3\u02E7\u02EC\u02F9\u0300" +
        "\u0306\u030F\u0315\u031A\u0320\u0329\u032C";
    m2pim4Parser._serializedATN = Utils.join([
        m2pim4Parser._serializedATNSegment0,
        m2pim4Parser._serializedATNSegment1,
    ], "");
    return m2pim4Parser;
}(Parser_1.Parser));
exports.m2pim4Parser = m2pim4Parser;
var IdentContext = /** @class */ (function (_super) {
    __extends(IdentContext, _super);
    function IdentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentContext.prototype.IDENT = function () { return this.getToken(m2pim4Parser.IDENT, 0); };
    Object.defineProperty(IdentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_ident; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentContext.prototype.enterRule = function (listener) {
        if (listener.enterIdent) {
            listener.enterIdent(this);
        }
    };
    // @Override
    IdentContext.prototype.exitRule = function (listener) {
        if (listener.exitIdent) {
            listener.exitIdent(this);
        }
    };
    // @Override
    IdentContext.prototype.accept = function (visitor) {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentContext = IdentContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.INTEGER = function () { return this.tryGetToken(m2pim4Parser.INTEGER, 0); };
    NumberContext.prototype.REAL = function () { return this.tryGetToken(m2pim4Parser.REAL, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberContext = NumberContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.INTEGER = function () { return this.getToken(m2pim4Parser.INTEGER, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_integer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerContext.prototype.enterRule = function (listener) {
        if (listener.enterInteger) {
            listener.enterInteger(this);
        }
    };
    // @Override
    IntegerContext.prototype.exitRule = function (listener) {
        if (listener.exitInteger) {
            listener.exitInteger(this);
        }
    };
    // @Override
    IntegerContext.prototype.accept = function (visitor) {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerContext = IntegerContext;
var RealContext = /** @class */ (function (_super) {
    __extends(RealContext, _super);
    function RealContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RealContext.prototype.REAL = function () { return this.getToken(m2pim4Parser.REAL, 0); };
    Object.defineProperty(RealContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_real; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RealContext.prototype.enterRule = function (listener) {
        if (listener.enterReal) {
            listener.enterReal(this);
        }
    };
    // @Override
    RealContext.prototype.exitRule = function (listener) {
        if (listener.exitReal) {
            listener.exitReal(this);
        }
    };
    // @Override
    RealContext.prototype.accept = function (visitor) {
        if (visitor.visitReal) {
            return visitor.visitReal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RealContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RealContext = RealContext;
var ScaleFactorContext = /** @class */ (function (_super) {
    __extends(ScaleFactorContext, _super);
    function ScaleFactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScaleFactorContext.prototype.SCALE_FACTOR = function () { return this.getToken(m2pim4Parser.SCALE_FACTOR, 0); };
    Object.defineProperty(ScaleFactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_scaleFactor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScaleFactorContext.prototype.enterRule = function (listener) {
        if (listener.enterScaleFactor) {
            listener.enterScaleFactor(this);
        }
    };
    // @Override
    ScaleFactorContext.prototype.exitRule = function (listener) {
        if (listener.exitScaleFactor) {
            listener.exitScaleFactor(this);
        }
    };
    // @Override
    ScaleFactorContext.prototype.accept = function (visitor) {
        if (visitor.visitScaleFactor) {
            return visitor.visitScaleFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScaleFactorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScaleFactorContext = ScaleFactorContext;
var HexDigitContext = /** @class */ (function (_super) {
    __extends(HexDigitContext, _super);
    function HexDigitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HexDigitContext.prototype.HEX_DIGIT = function () { return this.getToken(m2pim4Parser.HEX_DIGIT, 0); };
    Object.defineProperty(HexDigitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_hexDigit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HexDigitContext.prototype.enterRule = function (listener) {
        if (listener.enterHexDigit) {
            listener.enterHexDigit(this);
        }
    };
    // @Override
    HexDigitContext.prototype.exitRule = function (listener) {
        if (listener.exitHexDigit) {
            listener.exitHexDigit(this);
        }
    };
    // @Override
    HexDigitContext.prototype.accept = function (visitor) {
        if (visitor.visitHexDigit) {
            return visitor.visitHexDigit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HexDigitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HexDigitContext = HexDigitContext;
var DigitContext = /** @class */ (function (_super) {
    __extends(DigitContext, _super);
    function DigitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DigitContext.prototype.DIGIT = function () { return this.getToken(m2pim4Parser.DIGIT, 0); };
    Object.defineProperty(DigitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_digit; },
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
var OctalDigitContext = /** @class */ (function (_super) {
    __extends(OctalDigitContext, _super);
    function OctalDigitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OctalDigitContext.prototype.OCTAL_DIGIT = function () { return this.getToken(m2pim4Parser.OCTAL_DIGIT, 0); };
    Object.defineProperty(OctalDigitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_octalDigit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OctalDigitContext.prototype.enterRule = function (listener) {
        if (listener.enterOctalDigit) {
            listener.enterOctalDigit(this);
        }
    };
    // @Override
    OctalDigitContext.prototype.exitRule = function (listener) {
        if (listener.exitOctalDigit) {
            listener.exitOctalDigit(this);
        }
    };
    // @Override
    OctalDigitContext.prototype.accept = function (visitor) {
        if (visitor.visitOctalDigit) {
            return visitor.visitOctalDigit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OctalDigitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OctalDigitContext = OctalDigitContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(m2pim4Parser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
var QualidentContext = /** @class */ (function (_super) {
    __extends(QualidentContext, _super);
    function QualidentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualidentContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    Object.defineProperty(QualidentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_qualident; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualidentContext.prototype.enterRule = function (listener) {
        if (listener.enterQualident) {
            listener.enterQualident(this);
        }
    };
    // @Override
    QualidentContext.prototype.exitRule = function (listener) {
        if (listener.exitQualident) {
            listener.exitQualident(this);
        }
    };
    // @Override
    QualidentContext.prototype.accept = function (visitor) {
        if (visitor.visitQualident) {
            return visitor.visitQualident(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualidentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualidentContext = QualidentContext;
var ConstantDeclarationContext = /** @class */ (function (_super) {
    __extends(ConstantDeclarationContext, _super);
    function ConstantDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantDeclarationContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    ConstantDeclarationContext.prototype.constExpression = function () {
        return this.getRuleContext(0, ConstExpressionContext);
    };
    Object.defineProperty(ConstantDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_constantDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantDeclaration) {
            listener.enterConstantDeclaration(this);
        }
    };
    // @Override
    ConstantDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantDeclaration) {
            listener.exitConstantDeclaration(this);
        }
    };
    // @Override
    ConstantDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantDeclaration) {
            return visitor.visitConstantDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantDeclarationContext = ConstantDeclarationContext;
var ConstExpressionContext = /** @class */ (function (_super) {
    __extends(ConstExpressionContext, _super);
    function ConstExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstExpressionContext.prototype.simpleConstExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleConstExprContext);
        }
        else {
            return this.getRuleContext(i, SimpleConstExprContext);
        }
    };
    ConstExpressionContext.prototype.relation = function () {
        return this.tryGetRuleContext(0, RelationContext);
    };
    Object.defineProperty(ConstExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_constExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConstExpression) {
            listener.enterConstExpression(this);
        }
    };
    // @Override
    ConstExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConstExpression) {
            listener.exitConstExpression(this);
        }
    };
    // @Override
    ConstExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConstExpression) {
            return visitor.visitConstExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstExpressionContext = ConstExpressionContext;
var RelationContext = /** @class */ (function (_super) {
    __extends(RelationContext, _super);
    function RelationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationContext.prototype.IN = function () { return this.tryGetToken(m2pim4Parser.IN, 0); };
    Object.defineProperty(RelationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_relation; },
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
var SimpleConstExprContext = /** @class */ (function (_super) {
    __extends(SimpleConstExprContext, _super);
    function SimpleConstExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleConstExprContext.prototype.constTerm = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstTermContext);
        }
        else {
            return this.getRuleContext(i, ConstTermContext);
        }
    };
    SimpleConstExprContext.prototype.addOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddOperatorContext);
        }
        else {
            return this.getRuleContext(i, AddOperatorContext);
        }
    };
    Object.defineProperty(SimpleConstExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_simpleConstExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleConstExprContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleConstExpr) {
            listener.enterSimpleConstExpr(this);
        }
    };
    // @Override
    SimpleConstExprContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleConstExpr) {
            listener.exitSimpleConstExpr(this);
        }
    };
    // @Override
    SimpleConstExprContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleConstExpr) {
            return visitor.visitSimpleConstExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleConstExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleConstExprContext = SimpleConstExprContext;
var AddOperatorContext = /** @class */ (function (_super) {
    __extends(AddOperatorContext, _super);
    function AddOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddOperatorContext.prototype.OR = function () { return this.getToken(m2pim4Parser.OR, 0); };
    Object.defineProperty(AddOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_addOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAddOperator) {
            listener.enterAddOperator(this);
        }
    };
    // @Override
    AddOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAddOperator) {
            listener.exitAddOperator(this);
        }
    };
    // @Override
    AddOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAddOperator) {
            return visitor.visitAddOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddOperatorContext = AddOperatorContext;
var ConstTermContext = /** @class */ (function (_super) {
    __extends(ConstTermContext, _super);
    function ConstTermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstTermContext.prototype.constFactor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstFactorContext);
        }
        else {
            return this.getRuleContext(i, ConstFactorContext);
        }
    };
    ConstTermContext.prototype.mulOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MulOperatorContext);
        }
        else {
            return this.getRuleContext(i, MulOperatorContext);
        }
    };
    Object.defineProperty(ConstTermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_constTerm; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstTermContext.prototype.enterRule = function (listener) {
        if (listener.enterConstTerm) {
            listener.enterConstTerm(this);
        }
    };
    // @Override
    ConstTermContext.prototype.exitRule = function (listener) {
        if (listener.exitConstTerm) {
            listener.exitConstTerm(this);
        }
    };
    // @Override
    ConstTermContext.prototype.accept = function (visitor) {
        if (visitor.visitConstTerm) {
            return visitor.visitConstTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstTermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstTermContext = ConstTermContext;
var MulOperatorContext = /** @class */ (function (_super) {
    __extends(MulOperatorContext, _super);
    function MulOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MulOperatorContext.prototype.DIV = function () { return this.tryGetToken(m2pim4Parser.DIV, 0); };
    MulOperatorContext.prototype.MOD = function () { return this.tryGetToken(m2pim4Parser.MOD, 0); };
    MulOperatorContext.prototype.AND = function () { return this.tryGetToken(m2pim4Parser.AND, 0); };
    Object.defineProperty(MulOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_mulOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MulOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterMulOperator) {
            listener.enterMulOperator(this);
        }
    };
    // @Override
    MulOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitMulOperator) {
            listener.exitMulOperator(this);
        }
    };
    // @Override
    MulOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitMulOperator) {
            return visitor.visitMulOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MulOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MulOperatorContext = MulOperatorContext;
var ConstFactorContext = /** @class */ (function (_super) {
    __extends(ConstFactorContext, _super);
    function ConstFactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstFactorContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    ConstFactorContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ConstFactorContext.prototype.setOrQualident = function () {
        return this.tryGetRuleContext(0, SetOrQualidentContext);
    };
    ConstFactorContext.prototype.constExpression = function () {
        return this.tryGetRuleContext(0, ConstExpressionContext);
    };
    ConstFactorContext.prototype.constFactor = function () {
        return this.tryGetRuleContext(0, ConstFactorContext);
    };
    ConstFactorContext.prototype.NOT = function () { return this.tryGetToken(m2pim4Parser.NOT, 0); };
    Object.defineProperty(ConstFactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_constFactor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstFactorContext.prototype.enterRule = function (listener) {
        if (listener.enterConstFactor) {
            listener.enterConstFactor(this);
        }
    };
    // @Override
    ConstFactorContext.prototype.exitRule = function (listener) {
        if (listener.exitConstFactor) {
            listener.exitConstFactor(this);
        }
    };
    // @Override
    ConstFactorContext.prototype.accept = function (visitor) {
        if (visitor.visitConstFactor) {
            return visitor.visitConstFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstFactorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstFactorContext = ConstFactorContext;
var SetOrQualidentContext = /** @class */ (function (_super) {
    __extends(SetOrQualidentContext, _super);
    function SetOrQualidentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetOrQualidentContext.prototype.set = function () {
        return this.tryGetRuleContext(0, SetContext);
    };
    SetOrQualidentContext.prototype.qualident = function () {
        return this.tryGetRuleContext(0, QualidentContext);
    };
    Object.defineProperty(SetOrQualidentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_setOrQualident; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetOrQualidentContext.prototype.enterRule = function (listener) {
        if (listener.enterSetOrQualident) {
            listener.enterSetOrQualident(this);
        }
    };
    // @Override
    SetOrQualidentContext.prototype.exitRule = function (listener) {
        if (listener.exitSetOrQualident) {
            listener.exitSetOrQualident(this);
        }
    };
    // @Override
    SetOrQualidentContext.prototype.accept = function (visitor) {
        if (visitor.visitSetOrQualident) {
            return visitor.visitSetOrQualident(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetOrQualidentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetOrQualidentContext = SetOrQualidentContext;
var SetContext = /** @class */ (function (_super) {
    __extends(SetContext, _super);
    function SetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    Object.defineProperty(SetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_set; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetContext.prototype.enterRule = function (listener) {
        if (listener.enterSet) {
            listener.enterSet(this);
        }
    };
    // @Override
    SetContext.prototype.exitRule = function (listener) {
        if (listener.exitSet) {
            listener.exitSet(this);
        }
    };
    // @Override
    SetContext.prototype.accept = function (visitor) {
        if (visitor.visitSet) {
            return visitor.visitSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetContext = SetContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.constExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstExpressionContext);
        }
        else {
            return this.getRuleContext(i, ConstExpressionContext);
        }
    };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_element; },
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
var TypeDeclarationContext = /** @class */ (function (_super) {
    __extends(TypeDeclarationContext, _super);
    function TypeDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDeclarationContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    TypeDeclarationContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(TypeDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_typeDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeDeclaration) {
            listener.enterTypeDeclaration(this);
        }
    };
    // @Override
    TypeDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeDeclaration) {
            listener.exitTypeDeclaration(this);
        }
    };
    // @Override
    TypeDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeDeclaration) {
            return visitor.visitTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeDeclarationContext = TypeDeclarationContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.simpleType = function () {
        return this.tryGetRuleContext(0, SimpleTypeContext);
    };
    TypeContext.prototype.arrayType = function () {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    };
    TypeContext.prototype.recordType = function () {
        return this.tryGetRuleContext(0, RecordTypeContext);
    };
    TypeContext.prototype.setType = function () {
        return this.tryGetRuleContext(0, SetTypeContext);
    };
    TypeContext.prototype.pointerType = function () {
        return this.tryGetRuleContext(0, PointerTypeContext);
    };
    TypeContext.prototype.procedureType = function () {
        return this.tryGetRuleContext(0, ProcedureTypeContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeContext.prototype.enterRule = function (listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    };
    // @Override
    TypeContext.prototype.exitRule = function (listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    };
    // @Override
    TypeContext.prototype.accept = function (visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeContext = TypeContext;
var SimpleTypeContext = /** @class */ (function (_super) {
    __extends(SimpleTypeContext, _super);
    function SimpleTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleTypeContext.prototype.qualident = function () {
        return this.tryGetRuleContext(0, QualidentContext);
    };
    SimpleTypeContext.prototype.enumeration = function () {
        return this.tryGetRuleContext(0, EnumerationContext);
    };
    SimpleTypeContext.prototype.subrangeType = function () {
        return this.tryGetRuleContext(0, SubrangeTypeContext);
    };
    Object.defineProperty(SimpleTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_simpleType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleType) {
            listener.enterSimpleType(this);
        }
    };
    // @Override
    SimpleTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleType) {
            listener.exitSimpleType(this);
        }
    };
    // @Override
    SimpleTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleType) {
            return visitor.visitSimpleType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleTypeContext = SimpleTypeContext;
var EnumerationContext = /** @class */ (function (_super) {
    __extends(EnumerationContext, _super);
    function EnumerationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumerationContext.prototype.identList = function () {
        return this.getRuleContext(0, IdentListContext);
    };
    Object.defineProperty(EnumerationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_enumeration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumerationContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumeration) {
            listener.enterEnumeration(this);
        }
    };
    // @Override
    EnumerationContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumeration) {
            listener.exitEnumeration(this);
        }
    };
    // @Override
    EnumerationContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumeration) {
            return visitor.visitEnumeration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumerationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumerationContext = EnumerationContext;
var IdentListContext = /** @class */ (function (_super) {
    __extends(IdentListContext, _super);
    function IdentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentListContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    Object.defineProperty(IdentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_identList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentListContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentList) {
            listener.enterIdentList(this);
        }
    };
    // @Override
    IdentListContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentList) {
            listener.exitIdentList(this);
        }
    };
    // @Override
    IdentListContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentList) {
            return visitor.visitIdentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentListContext = IdentListContext;
var SubrangeTypeContext = /** @class */ (function (_super) {
    __extends(SubrangeTypeContext, _super);
    function SubrangeTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubrangeTypeContext.prototype.constExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstExpressionContext);
        }
        else {
            return this.getRuleContext(i, ConstExpressionContext);
        }
    };
    Object.defineProperty(SubrangeTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_subrangeType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubrangeTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSubrangeType) {
            listener.enterSubrangeType(this);
        }
    };
    // @Override
    SubrangeTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSubrangeType) {
            listener.exitSubrangeType(this);
        }
    };
    // @Override
    SubrangeTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSubrangeType) {
            return visitor.visitSubrangeType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubrangeTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubrangeTypeContext = SubrangeTypeContext;
var ArrayTypeContext = /** @class */ (function (_super) {
    __extends(ArrayTypeContext, _super);
    function ArrayTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayTypeContext.prototype.ARRAY = function () { return this.getToken(m2pim4Parser.ARRAY, 0); };
    ArrayTypeContext.prototype.simpleType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleTypeContext);
        }
        else {
            return this.getRuleContext(i, SimpleTypeContext);
        }
    };
    ArrayTypeContext.prototype.OF = function () { return this.getToken(m2pim4Parser.OF, 0); };
    ArrayTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(ArrayTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_arrayType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayType) {
            listener.enterArrayType(this);
        }
    };
    // @Override
    ArrayTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayType) {
            listener.exitArrayType(this);
        }
    };
    // @Override
    ArrayTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayTypeContext = ArrayTypeContext;
var RecordTypeContext = /** @class */ (function (_super) {
    __extends(RecordTypeContext, _super);
    function RecordTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecordTypeContext.prototype.RECORD = function () { return this.getToken(m2pim4Parser.RECORD, 0); };
    RecordTypeContext.prototype.fieldListSequence = function () {
        return this.getRuleContext(0, FieldListSequenceContext);
    };
    RecordTypeContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    Object.defineProperty(RecordTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_recordType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecordTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterRecordType) {
            listener.enterRecordType(this);
        }
    };
    // @Override
    RecordTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitRecordType) {
            listener.exitRecordType(this);
        }
    };
    // @Override
    RecordTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitRecordType) {
            return visitor.visitRecordType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecordTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecordTypeContext = RecordTypeContext;
var FieldListSequenceContext = /** @class */ (function (_super) {
    __extends(FieldListSequenceContext, _super);
    function FieldListSequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldListSequenceContext.prototype.fieldList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldListContext);
        }
        else {
            return this.getRuleContext(i, FieldListContext);
        }
    };
    Object.defineProperty(FieldListSequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_fieldListSequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldListSequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldListSequence) {
            listener.enterFieldListSequence(this);
        }
    };
    // @Override
    FieldListSequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldListSequence) {
            listener.exitFieldListSequence(this);
        }
    };
    // @Override
    FieldListSequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldListSequence) {
            return visitor.visitFieldListSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldListSequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldListSequenceContext = FieldListSequenceContext;
var FieldListContext = /** @class */ (function (_super) {
    __extends(FieldListContext, _super);
    function FieldListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldListContext.prototype.identList = function () {
        return this.tryGetRuleContext(0, IdentListContext);
    };
    FieldListContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    FieldListContext.prototype.CASE = function () { return this.tryGetToken(m2pim4Parser.CASE, 0); };
    FieldListContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    FieldListContext.prototype.OF = function () { return this.tryGetToken(m2pim4Parser.OF, 0); };
    FieldListContext.prototype.variant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariantContext);
        }
        else {
            return this.getRuleContext(i, VariantContext);
        }
    };
    FieldListContext.prototype.END = function () { return this.tryGetToken(m2pim4Parser.END, 0); };
    FieldListContext.prototype.qualident = function () {
        return this.tryGetRuleContext(0, QualidentContext);
    };
    FieldListContext.prototype.ELSE = function () { return this.tryGetToken(m2pim4Parser.ELSE, 0); };
    FieldListContext.prototype.fieldListSequence = function () {
        return this.tryGetRuleContext(0, FieldListSequenceContext);
    };
    Object.defineProperty(FieldListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_fieldList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldListContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldList) {
            listener.enterFieldList(this);
        }
    };
    // @Override
    FieldListContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldList) {
            listener.exitFieldList(this);
        }
    };
    // @Override
    FieldListContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldList) {
            return visitor.visitFieldList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldListContext = FieldListContext;
var VariantContext = /** @class */ (function (_super) {
    __extends(VariantContext, _super);
    function VariantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariantContext.prototype.caseLabelList = function () {
        return this.getRuleContext(0, CaseLabelListContext);
    };
    VariantContext.prototype.fieldListSequence = function () {
        return this.getRuleContext(0, FieldListSequenceContext);
    };
    Object.defineProperty(VariantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_variant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariantContext.prototype.enterRule = function (listener) {
        if (listener.enterVariant) {
            listener.enterVariant(this);
        }
    };
    // @Override
    VariantContext.prototype.exitRule = function (listener) {
        if (listener.exitVariant) {
            listener.exitVariant(this);
        }
    };
    // @Override
    VariantContext.prototype.accept = function (visitor) {
        if (visitor.visitVariant) {
            return visitor.visitVariant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariantContext = VariantContext;
var CaseLabelListContext = /** @class */ (function (_super) {
    __extends(CaseLabelListContext, _super);
    function CaseLabelListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseLabelListContext.prototype.caseLabels = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseLabelsContext);
        }
        else {
            return this.getRuleContext(i, CaseLabelsContext);
        }
    };
    Object.defineProperty(CaseLabelListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_caseLabelList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseLabelListContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseLabelList) {
            listener.enterCaseLabelList(this);
        }
    };
    // @Override
    CaseLabelListContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseLabelList) {
            listener.exitCaseLabelList(this);
        }
    };
    // @Override
    CaseLabelListContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseLabelList) {
            return visitor.visitCaseLabelList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseLabelListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseLabelListContext = CaseLabelListContext;
var CaseLabelsContext = /** @class */ (function (_super) {
    __extends(CaseLabelsContext, _super);
    function CaseLabelsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseLabelsContext.prototype.constExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstExpressionContext);
        }
        else {
            return this.getRuleContext(i, ConstExpressionContext);
        }
    };
    Object.defineProperty(CaseLabelsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_caseLabels; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseLabelsContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseLabels) {
            listener.enterCaseLabels(this);
        }
    };
    // @Override
    CaseLabelsContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseLabels) {
            listener.exitCaseLabels(this);
        }
    };
    // @Override
    CaseLabelsContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseLabels) {
            return visitor.visitCaseLabels(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseLabelsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseLabelsContext = CaseLabelsContext;
var SetTypeContext = /** @class */ (function (_super) {
    __extends(SetTypeContext, _super);
    function SetTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetTypeContext.prototype.SET = function () { return this.getToken(m2pim4Parser.SET, 0); };
    SetTypeContext.prototype.OF = function () { return this.getToken(m2pim4Parser.OF, 0); };
    SetTypeContext.prototype.simpleType = function () {
        return this.getRuleContext(0, SimpleTypeContext);
    };
    Object.defineProperty(SetTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_setType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSetType) {
            listener.enterSetType(this);
        }
    };
    // @Override
    SetTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSetType) {
            listener.exitSetType(this);
        }
    };
    // @Override
    SetTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSetType) {
            return visitor.visitSetType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetTypeContext = SetTypeContext;
var PointerTypeContext = /** @class */ (function (_super) {
    __extends(PointerTypeContext, _super);
    function PointerTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointerTypeContext.prototype.POINTER = function () { return this.getToken(m2pim4Parser.POINTER, 0); };
    PointerTypeContext.prototype.TO = function () { return this.getToken(m2pim4Parser.TO, 0); };
    PointerTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(PointerTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_pointerType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PointerTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPointerType) {
            listener.enterPointerType(this);
        }
    };
    // @Override
    PointerTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPointerType) {
            listener.exitPointerType(this);
        }
    };
    // @Override
    PointerTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPointerType) {
            return visitor.visitPointerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointerTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointerTypeContext = PointerTypeContext;
var ProcedureTypeContext = /** @class */ (function (_super) {
    __extends(ProcedureTypeContext, _super);
    function ProcedureTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureTypeContext.prototype.PROCEDURE = function () { return this.getToken(m2pim4Parser.PROCEDURE, 0); };
    ProcedureTypeContext.prototype.formalTypeList = function () {
        return this.tryGetRuleContext(0, FormalTypeListContext);
    };
    Object.defineProperty(ProcedureTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_procedureType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureType) {
            listener.enterProcedureType(this);
        }
    };
    // @Override
    ProcedureTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureType) {
            listener.exitProcedureType(this);
        }
    };
    // @Override
    ProcedureTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureType) {
            return visitor.visitProcedureType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureTypeContext = ProcedureTypeContext;
var FormalTypeListContext = /** @class */ (function (_super) {
    __extends(FormalTypeListContext, _super);
    function FormalTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalTypeListContext.prototype.formalType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalTypeContext);
        }
        else {
            return this.getRuleContext(i, FormalTypeContext);
        }
    };
    FormalTypeListContext.prototype.qualident = function () {
        return this.tryGetRuleContext(0, QualidentContext);
    };
    FormalTypeListContext.prototype.VAR = function (i) {
        if (i === undefined) {
            return this.getTokens(m2pim4Parser.VAR);
        }
        else {
            return this.getToken(m2pim4Parser.VAR, i);
        }
    };
    Object.defineProperty(FormalTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_formalTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalTypeList) {
            listener.enterFormalTypeList(this);
        }
    };
    // @Override
    FormalTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalTypeList) {
            listener.exitFormalTypeList(this);
        }
    };
    // @Override
    FormalTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalTypeList) {
            return visitor.visitFormalTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalTypeListContext = FormalTypeListContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.identList = function () {
        return this.getRuleContext(0, IdentListContext);
    };
    VariableDeclarationContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_variableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationContext = VariableDeclarationContext;
var DesignatorContext = /** @class */ (function (_super) {
    __extends(DesignatorContext, _super);
    function DesignatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesignatorContext.prototype.qualident = function () {
        return this.getRuleContext(0, QualidentContext);
    };
    DesignatorContext.prototype.designatorTail = function () {
        return this.tryGetRuleContext(0, DesignatorTailContext);
    };
    Object.defineProperty(DesignatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_designator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DesignatorContext.prototype.enterRule = function (listener) {
        if (listener.enterDesignator) {
            listener.enterDesignator(this);
        }
    };
    // @Override
    DesignatorContext.prototype.exitRule = function (listener) {
        if (listener.exitDesignator) {
            listener.exitDesignator(this);
        }
    };
    // @Override
    DesignatorContext.prototype.accept = function (visitor) {
        if (visitor.visitDesignator) {
            return visitor.visitDesignator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesignatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DesignatorContext = DesignatorContext;
var DesignatorTailContext = /** @class */ (function (_super) {
    __extends(DesignatorTailContext, _super);
    function DesignatorTailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesignatorTailContext.prototype.expList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpListContext);
        }
        else {
            return this.getRuleContext(i, ExpListContext);
        }
    };
    DesignatorTailContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    Object.defineProperty(DesignatorTailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_designatorTail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DesignatorTailContext.prototype.enterRule = function (listener) {
        if (listener.enterDesignatorTail) {
            listener.enterDesignatorTail(this);
        }
    };
    // @Override
    DesignatorTailContext.prototype.exitRule = function (listener) {
        if (listener.exitDesignatorTail) {
            listener.exitDesignatorTail(this);
        }
    };
    // @Override
    DesignatorTailContext.prototype.accept = function (visitor) {
        if (visitor.visitDesignatorTail) {
            return visitor.visitDesignatorTail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesignatorTailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DesignatorTailContext = DesignatorTailContext;
var ExpListContext = /** @class */ (function (_super) {
    __extends(ExpListContext, _super);
    function ExpListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpListContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExpListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_expList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpListContext.prototype.enterRule = function (listener) {
        if (listener.enterExpList) {
            listener.enterExpList(this);
        }
    };
    // @Override
    ExpListContext.prototype.exitRule = function (listener) {
        if (listener.exitExpList) {
            listener.exitExpList(this);
        }
    };
    // @Override
    ExpListContext.prototype.accept = function (visitor) {
        if (visitor.visitExpList) {
            return visitor.visitExpList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpListContext = ExpListContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.simpleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SimpleExpressionContext);
        }
    };
    ExpressionContext.prototype.relation = function () {
        return this.tryGetRuleContext(0, RelationContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_expression; },
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
var SimpleExpressionContext = /** @class */ (function (_super) {
    __extends(SimpleExpressionContext, _super);
    function SimpleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleExpressionContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    SimpleExpressionContext.prototype.addOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AddOperatorContext);
        }
        else {
            return this.getRuleContext(i, AddOperatorContext);
        }
    };
    Object.defineProperty(SimpleExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_simpleExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleExpression) {
            listener.enterSimpleExpression(this);
        }
    };
    // @Override
    SimpleExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleExpression) {
            listener.exitSimpleExpression(this);
        }
    };
    // @Override
    SimpleExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleExpression) {
            return visitor.visitSimpleExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleExpressionContext = SimpleExpressionContext;
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
    TermContext.prototype.mulOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MulOperatorContext);
        }
        else {
            return this.getRuleContext(i, MulOperatorContext);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_term; },
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
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    FactorContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    FactorContext.prototype.setOrDesignatorOrProcCall = function () {
        return this.tryGetRuleContext(0, SetOrDesignatorOrProcCallContext);
    };
    FactorContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    FactorContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    FactorContext.prototype.NOT = function () { return this.tryGetToken(m2pim4Parser.NOT, 0); };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_factor; },
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
var SetOrDesignatorOrProcCallContext = /** @class */ (function (_super) {
    __extends(SetOrDesignatorOrProcCallContext, _super);
    function SetOrDesignatorOrProcCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetOrDesignatorOrProcCallContext.prototype.set = function () {
        return this.tryGetRuleContext(0, SetContext);
    };
    SetOrDesignatorOrProcCallContext.prototype.qualident = function () {
        return this.tryGetRuleContext(0, QualidentContext);
    };
    SetOrDesignatorOrProcCallContext.prototype.designatorTail = function () {
        return this.tryGetRuleContext(0, DesignatorTailContext);
    };
    SetOrDesignatorOrProcCallContext.prototype.actualParameters = function () {
        return this.tryGetRuleContext(0, ActualParametersContext);
    };
    Object.defineProperty(SetOrDesignatorOrProcCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_setOrDesignatorOrProcCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetOrDesignatorOrProcCallContext.prototype.enterRule = function (listener) {
        if (listener.enterSetOrDesignatorOrProcCall) {
            listener.enterSetOrDesignatorOrProcCall(this);
        }
    };
    // @Override
    SetOrDesignatorOrProcCallContext.prototype.exitRule = function (listener) {
        if (listener.exitSetOrDesignatorOrProcCall) {
            listener.exitSetOrDesignatorOrProcCall(this);
        }
    };
    // @Override
    SetOrDesignatorOrProcCallContext.prototype.accept = function (visitor) {
        if (visitor.visitSetOrDesignatorOrProcCall) {
            return visitor.visitSetOrDesignatorOrProcCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetOrDesignatorOrProcCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetOrDesignatorOrProcCallContext = SetOrDesignatorOrProcCallContext;
var ActualParametersContext = /** @class */ (function (_super) {
    __extends(ActualParametersContext, _super);
    function ActualParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActualParametersContext.prototype.expList = function () {
        return this.tryGetRuleContext(0, ExpListContext);
    };
    Object.defineProperty(ActualParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_actualParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActualParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterActualParameters) {
            listener.enterActualParameters(this);
        }
    };
    // @Override
    ActualParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitActualParameters) {
            listener.exitActualParameters(this);
        }
    };
    // @Override
    ActualParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitActualParameters) {
            return visitor.visitActualParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActualParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActualParametersContext = ActualParametersContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.assignmentOrProcCall = function () {
        return this.tryGetRuleContext(0, AssignmentOrProcCallContext);
    };
    StatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    StatementContext.prototype.caseStatement = function () {
        return this.tryGetRuleContext(0, CaseStatementContext);
    };
    StatementContext.prototype.whileStatement = function () {
        return this.tryGetRuleContext(0, WhileStatementContext);
    };
    StatementContext.prototype.repeatStatement = function () {
        return this.tryGetRuleContext(0, RepeatStatementContext);
    };
    StatementContext.prototype.loopStatement = function () {
        return this.tryGetRuleContext(0, LoopStatementContext);
    };
    StatementContext.prototype.forStatement = function () {
        return this.tryGetRuleContext(0, ForStatementContext);
    };
    StatementContext.prototype.withStatement = function () {
        return this.tryGetRuleContext(0, WithStatementContext);
    };
    StatementContext.prototype.EXIT = function () { return this.tryGetToken(m2pim4Parser.EXIT, 0); };
    StatementContext.prototype.RETURN = function () { return this.tryGetToken(m2pim4Parser.RETURN, 0); };
    StatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_statement; },
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
var AssignmentOrProcCallContext = /** @class */ (function (_super) {
    __extends(AssignmentOrProcCallContext, _super);
    function AssignmentOrProcCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOrProcCallContext.prototype.designator = function () {
        return this.getRuleContext(0, DesignatorContext);
    };
    AssignmentOrProcCallContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    AssignmentOrProcCallContext.prototype.actualParameters = function () {
        return this.tryGetRuleContext(0, ActualParametersContext);
    };
    Object.defineProperty(AssignmentOrProcCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_assignmentOrProcCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentOrProcCallContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOrProcCall) {
            listener.enterAssignmentOrProcCall(this);
        }
    };
    // @Override
    AssignmentOrProcCallContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOrProcCall) {
            listener.exitAssignmentOrProcCall(this);
        }
    };
    // @Override
    AssignmentOrProcCallContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOrProcCall) {
            return visitor.visitAssignmentOrProcCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOrProcCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentOrProcCallContext = AssignmentOrProcCallContext;
var StatementSequenceContext = /** @class */ (function (_super) {
    __extends(StatementSequenceContext, _super);
    function StatementSequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementSequenceContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(StatementSequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_statementSequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementSequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementSequence) {
            listener.enterStatementSequence(this);
        }
    };
    // @Override
    StatementSequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementSequence) {
            listener.exitStatementSequence(this);
        }
    };
    // @Override
    StatementSequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementSequence) {
            return visitor.visitStatementSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementSequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementSequenceContext = StatementSequenceContext;
var IfStatementContext = /** @class */ (function (_super) {
    __extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.IF = function () { return this.getToken(m2pim4Parser.IF, 0); };
    IfStatementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    IfStatementContext.prototype.THEN = function (i) {
        if (i === undefined) {
            return this.getTokens(m2pim4Parser.THEN);
        }
        else {
            return this.getToken(m2pim4Parser.THEN, i);
        }
    };
    IfStatementContext.prototype.statementSequence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementSequenceContext);
        }
        else {
            return this.getRuleContext(i, StatementSequenceContext);
        }
    };
    IfStatementContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    IfStatementContext.prototype.ELSIF = function (i) {
        if (i === undefined) {
            return this.getTokens(m2pim4Parser.ELSIF);
        }
        else {
            return this.getToken(m2pim4Parser.ELSIF, i);
        }
    };
    IfStatementContext.prototype.ELSE = function () { return this.tryGetToken(m2pim4Parser.ELSE, 0); };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_ifStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStatementContext = IfStatementContext;
var CaseStatementContext = /** @class */ (function (_super) {
    __extends(CaseStatementContext, _super);
    function CaseStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseStatementContext.prototype.CASE = function () { return this.getToken(m2pim4Parser.CASE, 0); };
    CaseStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    CaseStatementContext.prototype.OF = function () { return this.getToken(m2pim4Parser.OF, 0); };
    CaseStatementContext.prototype.ccase = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CcaseContext);
        }
        else {
            return this.getRuleContext(i, CcaseContext);
        }
    };
    CaseStatementContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    CaseStatementContext.prototype.ELSE = function () { return this.tryGetToken(m2pim4Parser.ELSE, 0); };
    CaseStatementContext.prototype.statementSequence = function () {
        return this.tryGetRuleContext(0, StatementSequenceContext);
    };
    Object.defineProperty(CaseStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_caseStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseStatement) {
            listener.enterCaseStatement(this);
        }
    };
    // @Override
    CaseStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseStatement) {
            listener.exitCaseStatement(this);
        }
    };
    // @Override
    CaseStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseStatement) {
            return visitor.visitCaseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseStatementContext = CaseStatementContext;
var CcaseContext = /** @class */ (function (_super) {
    __extends(CcaseContext, _super);
    function CcaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CcaseContext.prototype.caseLabelList = function () {
        return this.getRuleContext(0, CaseLabelListContext);
    };
    CcaseContext.prototype.statementSequence = function () {
        return this.getRuleContext(0, StatementSequenceContext);
    };
    Object.defineProperty(CcaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_ccase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CcaseContext.prototype.enterRule = function (listener) {
        if (listener.enterCcase) {
            listener.enterCcase(this);
        }
    };
    // @Override
    CcaseContext.prototype.exitRule = function (listener) {
        if (listener.exitCcase) {
            listener.exitCcase(this);
        }
    };
    // @Override
    CcaseContext.prototype.accept = function (visitor) {
        if (visitor.visitCcase) {
            return visitor.visitCcase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CcaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CcaseContext = CcaseContext;
var WhileStatementContext = /** @class */ (function (_super) {
    __extends(WhileStatementContext, _super);
    function WhileStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhileStatementContext.prototype.WHILE = function () { return this.getToken(m2pim4Parser.WHILE, 0); };
    WhileStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    WhileStatementContext.prototype.DO = function () { return this.getToken(m2pim4Parser.DO, 0); };
    WhileStatementContext.prototype.statementSequence = function () {
        return this.getRuleContext(0, StatementSequenceContext);
    };
    WhileStatementContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    Object.defineProperty(WhileStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_whileStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhileStatementContext = WhileStatementContext;
var RepeatStatementContext = /** @class */ (function (_super) {
    __extends(RepeatStatementContext, _super);
    function RepeatStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepeatStatementContext.prototype.REPEAT = function () { return this.getToken(m2pim4Parser.REPEAT, 0); };
    RepeatStatementContext.prototype.statementSequence = function () {
        return this.getRuleContext(0, StatementSequenceContext);
    };
    RepeatStatementContext.prototype.UNTIL = function () { return this.getToken(m2pim4Parser.UNTIL, 0); };
    RepeatStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(RepeatStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_repeatStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepeatStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterRepeatStatement) {
            listener.enterRepeatStatement(this);
        }
    };
    // @Override
    RepeatStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitRepeatStatement) {
            listener.exitRepeatStatement(this);
        }
    };
    // @Override
    RepeatStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitRepeatStatement) {
            return visitor.visitRepeatStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepeatStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepeatStatementContext = RepeatStatementContext;
var ForStatementContext = /** @class */ (function (_super) {
    __extends(ForStatementContext, _super);
    function ForStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForStatementContext.prototype.FOR = function () { return this.getToken(m2pim4Parser.FOR, 0); };
    ForStatementContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    ForStatementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ForStatementContext.prototype.TO = function () { return this.getToken(m2pim4Parser.TO, 0); };
    ForStatementContext.prototype.DO = function () { return this.getToken(m2pim4Parser.DO, 0); };
    ForStatementContext.prototype.statementSequence = function () {
        return this.getRuleContext(0, StatementSequenceContext);
    };
    ForStatementContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    ForStatementContext.prototype.BY = function () { return this.tryGetToken(m2pim4Parser.BY, 0); };
    ForStatementContext.prototype.constExpression = function () {
        return this.tryGetRuleContext(0, ConstExpressionContext);
    };
    Object.defineProperty(ForStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_forStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForStatementContext = ForStatementContext;
var LoopStatementContext = /** @class */ (function (_super) {
    __extends(LoopStatementContext, _super);
    function LoopStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LoopStatementContext.prototype.LOOP = function () { return this.getToken(m2pim4Parser.LOOP, 0); };
    LoopStatementContext.prototype.statementSequence = function () {
        return this.getRuleContext(0, StatementSequenceContext);
    };
    LoopStatementContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    Object.defineProperty(LoopStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_loopStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LoopStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterLoopStatement) {
            listener.enterLoopStatement(this);
        }
    };
    // @Override
    LoopStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitLoopStatement) {
            listener.exitLoopStatement(this);
        }
    };
    // @Override
    LoopStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitLoopStatement) {
            return visitor.visitLoopStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LoopStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LoopStatementContext = LoopStatementContext;
var WithStatementContext = /** @class */ (function (_super) {
    __extends(WithStatementContext, _super);
    function WithStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WithStatementContext.prototype.WITH = function () { return this.getToken(m2pim4Parser.WITH, 0); };
    WithStatementContext.prototype.designator = function () {
        return this.getRuleContext(0, DesignatorContext);
    };
    WithStatementContext.prototype.DO = function () { return this.getToken(m2pim4Parser.DO, 0); };
    WithStatementContext.prototype.statementSequence = function () {
        return this.getRuleContext(0, StatementSequenceContext);
    };
    WithStatementContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    Object.defineProperty(WithStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_withStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WithStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWithStatement) {
            listener.enterWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWithStatement) {
            listener.exitWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWithStatement) {
            return visitor.visitWithStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WithStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WithStatementContext = WithStatementContext;
var ProcedureDeclarationContext = /** @class */ (function (_super) {
    __extends(ProcedureDeclarationContext, _super);
    function ProcedureDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureDeclarationContext.prototype.procedureHeading = function () {
        return this.getRuleContext(0, ProcedureHeadingContext);
    };
    ProcedureDeclarationContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ProcedureDeclarationContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(ProcedureDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_procedureDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureDeclaration) {
            listener.enterProcedureDeclaration(this);
        }
    };
    // @Override
    ProcedureDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureDeclaration) {
            listener.exitProcedureDeclaration(this);
        }
    };
    // @Override
    ProcedureDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureDeclaration) {
            return visitor.visitProcedureDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureDeclarationContext = ProcedureDeclarationContext;
var ProcedureHeadingContext = /** @class */ (function (_super) {
    __extends(ProcedureHeadingContext, _super);
    function ProcedureHeadingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureHeadingContext.prototype.PROCEDURE = function () { return this.getToken(m2pim4Parser.PROCEDURE, 0); };
    ProcedureHeadingContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    ProcedureHeadingContext.prototype.formalParameters = function () {
        return this.tryGetRuleContext(0, FormalParametersContext);
    };
    Object.defineProperty(ProcedureHeadingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_procedureHeading; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureHeadingContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureHeading) {
            listener.enterProcedureHeading(this);
        }
    };
    // @Override
    ProcedureHeadingContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureHeading) {
            listener.exitProcedureHeading(this);
        }
    };
    // @Override
    ProcedureHeadingContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureHeading) {
            return visitor.visitProcedureHeading(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureHeadingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureHeadingContext = ProcedureHeadingContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    BlockContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    BlockContext.prototype.BEGIN = function () { return this.tryGetToken(m2pim4Parser.BEGIN, 0); };
    BlockContext.prototype.statementSequence = function () {
        return this.tryGetRuleContext(0, StatementSequenceContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.CONST = function () { return this.tryGetToken(m2pim4Parser.CONST, 0); };
    DeclarationContext.prototype.constantDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ConstantDeclarationContext);
        }
    };
    DeclarationContext.prototype.TYPE = function () { return this.tryGetToken(m2pim4Parser.TYPE, 0); };
    DeclarationContext.prototype.typeDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }
        else {
            return this.getRuleContext(i, TypeDeclarationContext);
        }
    };
    DeclarationContext.prototype.VAR = function () { return this.tryGetToken(m2pim4Parser.VAR, 0); };
    DeclarationContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    DeclarationContext.prototype.procedureDeclaration = function () {
        return this.tryGetRuleContext(0, ProcedureDeclarationContext);
    };
    DeclarationContext.prototype.moduleDeclaration = function () {
        return this.tryGetRuleContext(0, ModuleDeclarationContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_declaration; },
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
var FormalParametersContext = /** @class */ (function (_super) {
    __extends(FormalParametersContext, _super);
    function FormalParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParametersContext.prototype.fpSection = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FpSectionContext);
        }
        else {
            return this.getRuleContext(i, FpSectionContext);
        }
    };
    FormalParametersContext.prototype.qualident = function () {
        return this.tryGetRuleContext(0, QualidentContext);
    };
    Object.defineProperty(FormalParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_formalParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameters) {
            listener.enterFormalParameters(this);
        }
    };
    // @Override
    FormalParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameters) {
            listener.exitFormalParameters(this);
        }
    };
    // @Override
    FormalParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameters) {
            return visitor.visitFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParametersContext = FormalParametersContext;
var FpSectionContext = /** @class */ (function (_super) {
    __extends(FpSectionContext, _super);
    function FpSectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FpSectionContext.prototype.identList = function () {
        return this.getRuleContext(0, IdentListContext);
    };
    FpSectionContext.prototype.formalType = function () {
        return this.getRuleContext(0, FormalTypeContext);
    };
    FpSectionContext.prototype.VAR = function () { return this.tryGetToken(m2pim4Parser.VAR, 0); };
    Object.defineProperty(FpSectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_fpSection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FpSectionContext.prototype.enterRule = function (listener) {
        if (listener.enterFpSection) {
            listener.enterFpSection(this);
        }
    };
    // @Override
    FpSectionContext.prototype.exitRule = function (listener) {
        if (listener.exitFpSection) {
            listener.exitFpSection(this);
        }
    };
    // @Override
    FpSectionContext.prototype.accept = function (visitor) {
        if (visitor.visitFpSection) {
            return visitor.visitFpSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FpSectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FpSectionContext = FpSectionContext;
var FormalTypeContext = /** @class */ (function (_super) {
    __extends(FormalTypeContext, _super);
    function FormalTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalTypeContext.prototype.qualident = function () {
        return this.getRuleContext(0, QualidentContext);
    };
    FormalTypeContext.prototype.ARRAY = function () { return this.tryGetToken(m2pim4Parser.ARRAY, 0); };
    FormalTypeContext.prototype.OF = function () { return this.tryGetToken(m2pim4Parser.OF, 0); };
    Object.defineProperty(FormalTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_formalType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalType) {
            listener.enterFormalType(this);
        }
    };
    // @Override
    FormalTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalType) {
            listener.exitFormalType(this);
        }
    };
    // @Override
    FormalTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalType) {
            return visitor.visitFormalType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalTypeContext = FormalTypeContext;
var ModuleDeclarationContext = /** @class */ (function (_super) {
    __extends(ModuleDeclarationContext, _super);
    function ModuleDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleDeclarationContext.prototype.MODULE = function () { return this.getToken(m2pim4Parser.MODULE, 0); };
    ModuleDeclarationContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    ModuleDeclarationContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ModuleDeclarationContext.prototype.priority = function () {
        return this.tryGetRuleContext(0, PriorityContext);
    };
    ModuleDeclarationContext.prototype.importList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportListContext);
        }
        else {
            return this.getRuleContext(i, ImportListContext);
        }
    };
    ModuleDeclarationContext.prototype.exportList = function () {
        return this.tryGetRuleContext(0, ExportListContext);
    };
    Object.defineProperty(ModuleDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_moduleDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleDeclaration) {
            listener.enterModuleDeclaration(this);
        }
    };
    // @Override
    ModuleDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleDeclaration) {
            listener.exitModuleDeclaration(this);
        }
    };
    // @Override
    ModuleDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleDeclaration) {
            return visitor.visitModuleDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleDeclarationContext = ModuleDeclarationContext;
var PriorityContext = /** @class */ (function (_super) {
    __extends(PriorityContext, _super);
    function PriorityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PriorityContext.prototype.constExpression = function () {
        return this.getRuleContext(0, ConstExpressionContext);
    };
    Object.defineProperty(PriorityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_priority; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PriorityContext.prototype.enterRule = function (listener) {
        if (listener.enterPriority) {
            listener.enterPriority(this);
        }
    };
    // @Override
    PriorityContext.prototype.exitRule = function (listener) {
        if (listener.exitPriority) {
            listener.exitPriority(this);
        }
    };
    // @Override
    PriorityContext.prototype.accept = function (visitor) {
        if (visitor.visitPriority) {
            return visitor.visitPriority(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PriorityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PriorityContext = PriorityContext;
var ExportListContext = /** @class */ (function (_super) {
    __extends(ExportListContext, _super);
    function ExportListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExportListContext.prototype.EXPORT = function () { return this.getToken(m2pim4Parser.EXPORT, 0); };
    ExportListContext.prototype.identList = function () {
        return this.getRuleContext(0, IdentListContext);
    };
    ExportListContext.prototype.QUALIFIED = function () { return this.tryGetToken(m2pim4Parser.QUALIFIED, 0); };
    Object.defineProperty(ExportListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_exportList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExportListContext.prototype.enterRule = function (listener) {
        if (listener.enterExportList) {
            listener.enterExportList(this);
        }
    };
    // @Override
    ExportListContext.prototype.exitRule = function (listener) {
        if (listener.exitExportList) {
            listener.exitExportList(this);
        }
    };
    // @Override
    ExportListContext.prototype.accept = function (visitor) {
        if (visitor.visitExportList) {
            return visitor.visitExportList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExportListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExportListContext = ExportListContext;
var ImportListContext = /** @class */ (function (_super) {
    __extends(ImportListContext, _super);
    function ImportListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportListContext.prototype.IMPORT = function () { return this.getToken(m2pim4Parser.IMPORT, 0); };
    ImportListContext.prototype.identList = function () {
        return this.getRuleContext(0, IdentListContext);
    };
    ImportListContext.prototype.FROM = function () { return this.tryGetToken(m2pim4Parser.FROM, 0); };
    ImportListContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    Object.defineProperty(ImportListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_importList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportListContext.prototype.enterRule = function (listener) {
        if (listener.enterImportList) {
            listener.enterImportList(this);
        }
    };
    // @Override
    ImportListContext.prototype.exitRule = function (listener) {
        if (listener.exitImportList) {
            listener.exitImportList(this);
        }
    };
    // @Override
    ImportListContext.prototype.accept = function (visitor) {
        if (visitor.visitImportList) {
            return visitor.visitImportList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportListContext = ImportListContext;
var DefinitionModuleContext = /** @class */ (function (_super) {
    __extends(DefinitionModuleContext, _super);
    function DefinitionModuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinitionModuleContext.prototype.DEFINITION = function () { return this.getToken(m2pim4Parser.DEFINITION, 0); };
    DefinitionModuleContext.prototype.MODULE = function () { return this.getToken(m2pim4Parser.MODULE, 0); };
    DefinitionModuleContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    DefinitionModuleContext.prototype.END = function () { return this.getToken(m2pim4Parser.END, 0); };
    DefinitionModuleContext.prototype.importList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportListContext);
        }
        else {
            return this.getRuleContext(i, ImportListContext);
        }
    };
    DefinitionModuleContext.prototype.exportList = function () {
        return this.tryGetRuleContext(0, ExportListContext);
    };
    DefinitionModuleContext.prototype.definition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DefinitionContext);
        }
        else {
            return this.getRuleContext(i, DefinitionContext);
        }
    };
    Object.defineProperty(DefinitionModuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_definitionModule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinitionModuleContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinitionModule) {
            listener.enterDefinitionModule(this);
        }
    };
    // @Override
    DefinitionModuleContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinitionModule) {
            listener.exitDefinitionModule(this);
        }
    };
    // @Override
    DefinitionModuleContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinitionModule) {
            return visitor.visitDefinitionModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinitionModuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinitionModuleContext = DefinitionModuleContext;
var DefinitionContext = /** @class */ (function (_super) {
    __extends(DefinitionContext, _super);
    function DefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinitionContext.prototype.CONST = function () { return this.tryGetToken(m2pim4Parser.CONST, 0); };
    DefinitionContext.prototype.constantDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ConstantDeclarationContext);
        }
    };
    DefinitionContext.prototype.TYPE = function () { return this.tryGetToken(m2pim4Parser.TYPE, 0); };
    DefinitionContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    DefinitionContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    DefinitionContext.prototype.VAR = function () { return this.tryGetToken(m2pim4Parser.VAR, 0); };
    DefinitionContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    DefinitionContext.prototype.procedureHeading = function () {
        return this.tryGetRuleContext(0, ProcedureHeadingContext);
    };
    Object.defineProperty(DefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_definition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinition) {
            listener.enterDefinition(this);
        }
    };
    // @Override
    DefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinition) {
            listener.exitDefinition(this);
        }
    };
    // @Override
    DefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinition) {
            return visitor.visitDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinitionContext = DefinitionContext;
var ProgramModuleContext = /** @class */ (function (_super) {
    __extends(ProgramModuleContext, _super);
    function ProgramModuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramModuleContext.prototype.MODULE = function () { return this.getToken(m2pim4Parser.MODULE, 0); };
    ProgramModuleContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    ProgramModuleContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ProgramModuleContext.prototype.priority = function () {
        return this.tryGetRuleContext(0, PriorityContext);
    };
    ProgramModuleContext.prototype.importList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportListContext);
        }
        else {
            return this.getRuleContext(i, ImportListContext);
        }
    };
    Object.defineProperty(ProgramModuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_programModule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramModuleContext.prototype.enterRule = function (listener) {
        if (listener.enterProgramModule) {
            listener.enterProgramModule(this);
        }
    };
    // @Override
    ProgramModuleContext.prototype.exitRule = function (listener) {
        if (listener.exitProgramModule) {
            listener.exitProgramModule(this);
        }
    };
    // @Override
    ProgramModuleContext.prototype.accept = function (visitor) {
        if (visitor.visitProgramModule) {
            return visitor.visitProgramModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramModuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramModuleContext = ProgramModuleContext;
var CompilationUnitContext = /** @class */ (function (_super) {
    __extends(CompilationUnitContext, _super);
    function CompilationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilationUnitContext.prototype.definitionModule = function () {
        return this.tryGetRuleContext(0, DefinitionModuleContext);
    };
    CompilationUnitContext.prototype.programModule = function () {
        return this.tryGetRuleContext(0, ProgramModuleContext);
    };
    CompilationUnitContext.prototype.IMPLEMENTATION = function () { return this.tryGetToken(m2pim4Parser.IMPLEMENTATION, 0); };
    Object.defineProperty(CompilationUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return m2pim4Parser.RULE_compilationUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompilationUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterCompilationUnit) {
            listener.enterCompilationUnit(this);
        }
    };
    // @Override
    CompilationUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitCompilationUnit) {
            listener.exitCompilationUnit(this);
        }
    };
    // @Override
    CompilationUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompilationUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompilationUnitContext = CompilationUnitContext;
