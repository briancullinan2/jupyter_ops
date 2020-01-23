"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/xsd-regex/regexParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var regexParser = /** @class */ (function (_super) {
    __extends(regexParser, _super);
    function regexParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(regexParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(regexParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return regexParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(regexParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "regexParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(regexParser.prototype, "ruleNames", {
        // @Override
        get: function () { return regexParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(regexParser.prototype, "serializedATN", {
        // @Override
        get: function () { return regexParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    regexParser.prototype.root = function () {
        var _localctx = new RootContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, regexParser.RULE_root);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.regExp();
                this.state = 41;
                this.match(regexParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    regexParser.prototype.regExp = function () {
        var _localctx = new RegExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, regexParser.RULE_regExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 43;
                this.branch();
                this.state = 48;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === regexParser.PIPE) {
                    {
                        {
                            this.state = 44;
                            this.match(regexParser.PIPE);
                            this.state = 45;
                            this.branch();
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
    regexParser.prototype.branch = function () {
        var _localctx = new BranchContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, regexParser.RULE_branch);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << regexParser.LPAREN) | (1 << regexParser.WildcardEsc) | (1 << regexParser.Char) | (1 << regexParser.SingleCharEsc) | (1 << regexParser.MultiCharEsc) | (1 << regexParser.CatEsc) | (1 << regexParser.ComplEsc) | (1 << regexParser.NegCharGroup) | (1 << regexParser.PosCharGroup) | (1 << regexParser.NestedSingleCharEsc) | (1 << regexParser.NestedMultiCharEsc) | (1 << regexParser.NestedCatEsc))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (regexParser.NestedComplEsc - 32)) | (1 << (regexParser.NestedNegCharGroup - 32)) | (1 << (regexParser.NestedPosCharGroup - 32)))) !== 0)) {
                    {
                        {
                            this.state = 51;
                            this.piece();
                        }
                    }
                    this.state = 56;
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
    regexParser.prototype.piece = function () {
        var _localctx = new PieceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, regexParser.RULE_piece);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.atom();
                this.state = 59;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << regexParser.PLUS) | (1 << regexParser.QUESTION) | (1 << regexParser.STAR) | (1 << regexParser.StartQuantity))) !== 0)) {
                    {
                        this.state = 58;
                        this.quantifier();
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
    regexParser.prototype.quantifier = function () {
        var _localctx = new QuantifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, regexParser.RULE_quantifier);
        try {
            this.state = 68;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case regexParser.QUESTION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 61;
                        this.match(regexParser.QUESTION);
                    }
                    break;
                case regexParser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 62;
                        this.match(regexParser.STAR);
                    }
                    break;
                case regexParser.PLUS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 63;
                        this.match(regexParser.PLUS);
                    }
                    break;
                case regexParser.StartQuantity:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 64;
                        this.match(regexParser.StartQuantity);
                        this.state = 65;
                        this.quantity();
                        this.state = 66;
                        this.match(regexParser.EndQuantity);
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
    regexParser.prototype.quantity = function () {
        var _localctx = new QuantityContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, regexParser.RULE_quantity);
        try {
            this.state = 73;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 70;
                        this.quantRange();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 71;
                        this.quantMin();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 72;
                        this.match(regexParser.QuantExact);
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
    regexParser.prototype.quantRange = function () {
        var _localctx = new QuantRangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, regexParser.RULE_quantRange);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this.match(regexParser.QuantExact);
                this.state = 76;
                this.match(regexParser.COMMA);
                this.state = 77;
                this.match(regexParser.QuantExact);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    regexParser.prototype.quantMin = function () {
        var _localctx = new QuantMinContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, regexParser.RULE_quantMin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this.match(regexParser.QuantExact);
                this.state = 80;
                this.match(regexParser.COMMA);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    regexParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, regexParser.RULE_atom);
        try {
            this.state = 88;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case regexParser.Char:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 82;
                        this.match(regexParser.Char);
                    }
                    break;
                case regexParser.WildcardEsc:
                case regexParser.SingleCharEsc:
                case regexParser.MultiCharEsc:
                case regexParser.CatEsc:
                case regexParser.ComplEsc:
                case regexParser.NegCharGroup:
                case regexParser.PosCharGroup:
                case regexParser.NestedSingleCharEsc:
                case regexParser.NestedMultiCharEsc:
                case regexParser.NestedCatEsc:
                case regexParser.NestedComplEsc:
                case regexParser.NestedNegCharGroup:
                case regexParser.NestedPosCharGroup:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 83;
                        this.charClass();
                    }
                    break;
                case regexParser.LPAREN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 84;
                            this.match(regexParser.LPAREN);
                            this.state = 85;
                            this.regExp();
                            this.state = 86;
                            this.match(regexParser.RPAREN);
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
    regexParser.prototype.charClass = function () {
        var _localctx = new CharClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, regexParser.RULE_charClass);
        try {
            this.state = 93;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case regexParser.SingleCharEsc:
                case regexParser.MultiCharEsc:
                case regexParser.CatEsc:
                case regexParser.ComplEsc:
                case regexParser.NestedSingleCharEsc:
                case regexParser.NestedMultiCharEsc:
                case regexParser.NestedCatEsc:
                case regexParser.NestedComplEsc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 90;
                        this.charClassEsc();
                    }
                    break;
                case regexParser.NegCharGroup:
                case regexParser.PosCharGroup:
                case regexParser.NestedNegCharGroup:
                case regexParser.NestedPosCharGroup:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 91;
                        this.charClassExpr();
                    }
                    break;
                case regexParser.WildcardEsc:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 92;
                        this.match(regexParser.WildcardEsc);
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
    regexParser.prototype.charClassExpr = function () {
        var _localctx = new CharClassExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, regexParser.RULE_charClassExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
                _la = this._input.LA(1);
                if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (regexParser.NegCharGroup - 14)) | (1 << (regexParser.PosCharGroup - 14)) | (1 << (regexParser.NestedNegCharGroup - 14)) | (1 << (regexParser.NestedPosCharGroup - 14)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 96;
                this.charGroup();
                this.state = 97;
                this.match(regexParser.EndCharGroup);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    regexParser.prototype.charGroup = function () {
        var _localctx = new CharGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, regexParser.RULE_charGroup);
        var _la;
        try {
            this.state = 114;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 100;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                            case 1:
                                {
                                    this.state = 99;
                                    this.posCharGroup();
                                }
                                break;
                        }
                        this.state = 102;
                        this.match(regexParser.DASH);
                        this.state = 103;
                        this.match(regexParser.DASH);
                        this.state = 104;
                        this.charClassExpr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 105;
                        this.posCharGroup();
                        this.state = 106;
                        this.match(regexParser.DASH);
                        this.state = 107;
                        this.charClassExpr();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 109;
                        this.posCharGroup();
                        this.state = 111;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === regexParser.DASH) {
                            {
                                this.state = 110;
                                this.match(regexParser.DASH);
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 113;
                        this.match(regexParser.DASH);
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
    regexParser.prototype.posCharGroup = function () {
        var _localctx = new PosCharGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, regexParser.RULE_posCharGroup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === regexParser.DASH) {
                    {
                        this.state = 116;
                        this.match(regexParser.DASH);
                    }
                }
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 121;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                            case 1:
                                {
                                    this.state = 119;
                                    this.charRange();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 120;
                                    this.charClassEsc();
                                }
                                break;
                        }
                    }
                    this.state = 123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (regexParser.SingleCharEsc - 10)) | (1 << (regexParser.MultiCharEsc - 10)) | (1 << (regexParser.CatEsc - 10)) | (1 << (regexParser.ComplEsc - 10)) | (1 << (regexParser.NestedSingleCharEsc - 10)) | (1 << (regexParser.NestedMultiCharEsc - 10)) | (1 << (regexParser.NestedCatEsc - 10)) | (1 << (regexParser.NestedComplEsc - 10)) | (1 << (regexParser.XmlChar - 10)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    regexParser.prototype.charRange = function () {
        var _localctx = new CharRangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, regexParser.RULE_charRange);
        try {
            this.state = 127;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 125;
                        this.seRange();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 126;
                        this.match(regexParser.XmlChar);
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
    regexParser.prototype.seRange = function () {
        var _localctx = new SeRangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, regexParser.RULE_seRange);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this.charOrEsc();
                this.state = 130;
                this.match(regexParser.DASH);
                this.state = 131;
                this.charOrEsc();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    regexParser.prototype.charOrEsc = function () {
        var _localctx = new CharOrEscContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, regexParser.RULE_charOrEsc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                _la = this._input.LA(1);
                if (!(_la === regexParser.SingleCharEsc || _la === regexParser.XmlChar)) {
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
    regexParser.prototype.charClassEsc = function () {
        var _localctx = new CharClassEscContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, regexParser.RULE_charClassEsc);
        try {
            this.state = 141;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case regexParser.SingleCharEsc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 135;
                        this.match(regexParser.SingleCharEsc);
                    }
                    break;
                case regexParser.NestedSingleCharEsc:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 136;
                        this.match(regexParser.NestedSingleCharEsc);
                    }
                    break;
                case regexParser.MultiCharEsc:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 137;
                        this.match(regexParser.MultiCharEsc);
                    }
                    break;
                case regexParser.NestedMultiCharEsc:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 138;
                        this.match(regexParser.NestedMultiCharEsc);
                    }
                    break;
                case regexParser.CatEsc:
                case regexParser.NestedCatEsc:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 139;
                        this.catEsc();
                    }
                    break;
                case regexParser.ComplEsc:
                case regexParser.NestedComplEsc:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 140;
                        this.complEsc();
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
    regexParser.prototype.catEsc = function () {
        var _localctx = new CatEscContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, regexParser.RULE_catEsc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                _la = this._input.LA(1);
                if (!(_la === regexParser.CatEsc || _la === regexParser.NestedCatEsc)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 144;
                this.charProp();
                this.state = 145;
                this.match(regexParser.EndCategory);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    regexParser.prototype.complEsc = function () {
        var _localctx = new ComplEscContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, regexParser.RULE_complEsc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                _la = this._input.LA(1);
                if (!(_la === regexParser.ComplEsc || _la === regexParser.NestedComplEsc)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 148;
                this.charProp();
                this.state = 149;
                this.match(regexParser.EndCategory);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    regexParser.prototype.charProp = function () {
        var _localctx = new CharPropContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, regexParser.RULE_charProp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                _la = this._input.LA(1);
                if (!(_la === regexParser.IsCategory || _la === regexParser.IsBlock)) {
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
    Object.defineProperty(regexParser, "_ATN", {
        get: function () {
            if (!regexParser.__ATN) {
                regexParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(regexParser._serializedATN));
            }
            return regexParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    regexParser.LPAREN = 1;
    regexParser.RPAREN = 2;
    regexParser.PIPE = 3;
    regexParser.PLUS = 4;
    regexParser.QUESTION = 5;
    regexParser.STAR = 6;
    regexParser.WildcardEsc = 7;
    regexParser.Char = 8;
    regexParser.StartQuantity = 9;
    regexParser.SingleCharEsc = 10;
    regexParser.MultiCharEsc = 11;
    regexParser.CatEsc = 12;
    regexParser.ComplEsc = 13;
    regexParser.NegCharGroup = 14;
    regexParser.PosCharGroup = 15;
    regexParser.EndQuantity = 16;
    regexParser.QuantExact = 17;
    regexParser.COMMA = 18;
    regexParser.EndCategory = 19;
    regexParser.IsCategory = 20;
    regexParser.Letters = 21;
    regexParser.Marks = 22;
    regexParser.Numbers = 23;
    regexParser.Punctuation = 24;
    regexParser.Separators = 25;
    regexParser.Symbols = 26;
    regexParser.Others = 27;
    regexParser.IsBlock = 28;
    regexParser.NestedSingleCharEsc = 29;
    regexParser.NestedMultiCharEsc = 30;
    regexParser.NestedCatEsc = 31;
    regexParser.NestedComplEsc = 32;
    regexParser.NestedNegCharGroup = 33;
    regexParser.NestedPosCharGroup = 34;
    regexParser.EndCharGroup = 35;
    regexParser.DASH = 36;
    regexParser.XmlChar = 37;
    regexParser.RULE_root = 0;
    regexParser.RULE_regExp = 1;
    regexParser.RULE_branch = 2;
    regexParser.RULE_piece = 3;
    regexParser.RULE_quantifier = 4;
    regexParser.RULE_quantity = 5;
    regexParser.RULE_quantRange = 6;
    regexParser.RULE_quantMin = 7;
    regexParser.RULE_atom = 8;
    regexParser.RULE_charClass = 9;
    regexParser.RULE_charClassExpr = 10;
    regexParser.RULE_charGroup = 11;
    regexParser.RULE_posCharGroup = 12;
    regexParser.RULE_charRange = 13;
    regexParser.RULE_seRange = 14;
    regexParser.RULE_charOrEsc = 15;
    regexParser.RULE_charClassEsc = 16;
    regexParser.RULE_catEsc = 17;
    regexParser.RULE_complEsc = 18;
    regexParser.RULE_charProp = 19;
    // tslint:disable:no-trailing-whitespace
    regexParser.ruleNames = [
        "root", "regExp", "branch", "piece", "quantifier", "quantity", "quantRange",
        "quantMin", "atom", "charClass", "charClassExpr", "charGroup", "posCharGroup",
        "charRange", "seRange", "charOrEsc", "charClassEsc", "catEsc", "complEsc",
        "charProp",
    ];
    regexParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'|'", "'+'", "'?'", "'*'", "'.'", undefined,
        "'{'", undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "','", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "']'", "'-'",
    ];
    regexParser._SYMBOLIC_NAMES = [
        undefined, "LPAREN", "RPAREN", "PIPE", "PLUS", "QUESTION", "STAR", "WildcardEsc",
        "Char", "StartQuantity", "SingleCharEsc", "MultiCharEsc", "CatEsc", "ComplEsc",
        "NegCharGroup", "PosCharGroup", "EndQuantity", "QuantExact", "COMMA",
        "EndCategory", "IsCategory", "Letters", "Marks", "Numbers", "Punctuation",
        "Separators", "Symbols", "Others", "IsBlock", "NestedSingleCharEsc", "NestedMultiCharEsc",
        "NestedCatEsc", "NestedComplEsc", "NestedNegCharGroup", "NestedPosCharGroup",
        "EndCharGroup", "DASH", "XmlChar",
    ];
    regexParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(regexParser._LITERAL_NAMES, regexParser._SYMBOLIC_NAMES, []);
    regexParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\x9C\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x03" +
        "\x03\x03\x03\x03\x07\x031\n\x03\f\x03\x0E\x034\v\x03\x03\x04\x07\x047" +
        "\n\x04\f\x04\x0E\x04:\v\x04\x03\x05\x03\x05\x05\x05>\n\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06G\n\x06\x03\x07\x03" +
        "\x07\x03\x07\x05\x07L\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
        "\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n[\n\n\x03\v\x03\v\x03\v\x05" +
        "\v`\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x05\rg\n\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\rr\n\r\x03\r\x05\ru\n\r\x03\x0E\x05" +
        "\x0Ex\n\x0E\x03\x0E\x03\x0E\x06\x0E|\n\x0E\r\x0E\x0E\x0E}\x03\x0F\x03" +
        "\x0F\x05\x0F\x82\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\x90\n\x12\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
        "\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02\x02\x07\x04\x02\x10\x11#$\x04\x02\f\f\'\'\x04" +
        "\x02\x0E\x0E!!\x04\x02\x0F\x0F\"\"\x04\x02\x16\x16\x1E\x1E\x02\xA1\x02" +
        "*\x03\x02\x02\x02\x04-\x03\x02\x02\x02\x068\x03\x02\x02\x02\b;\x03\x02" +
        "\x02\x02\nF\x03\x02\x02\x02\fK\x03\x02\x02\x02\x0EM\x03\x02\x02\x02\x10" +
        "Q\x03\x02\x02\x02\x12Z\x03\x02\x02\x02\x14_\x03\x02\x02\x02\x16a\x03\x02" +
        "\x02\x02\x18t\x03\x02\x02\x02\x1Aw\x03\x02\x02\x02\x1C\x81\x03\x02\x02" +
        "\x02\x1E\x83\x03\x02\x02\x02 \x87\x03\x02\x02\x02\"\x8F\x03\x02\x02\x02" +
        "$\x91\x03\x02\x02\x02&\x95\x03\x02\x02\x02(\x99\x03\x02\x02\x02*+\x05" +
        "\x04\x03\x02+,\x07\x02\x02\x03,\x03\x03\x02\x02\x02-2\x05\x06\x04\x02" +
        "./\x07\x05\x02\x02/1\x05\x06\x04\x020.\x03\x02\x02\x0214\x03\x02\x02\x02" +
        "20\x03\x02\x02\x0223\x03\x02\x02\x023\x05\x03\x02\x02\x0242\x03\x02\x02" +
        "\x0257\x05\b\x05\x0265\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02" +
        "\x0289\x03\x02\x02\x029\x07\x03\x02\x02\x02:8\x03\x02\x02\x02;=\x05\x12" +
        "\n\x02<>\x05\n\x06\x02=<\x03\x02\x02\x02=>\x03\x02\x02\x02>\t\x03\x02" +
        "\x02\x02?G\x07\x07\x02\x02@G\x07\b\x02\x02AG\x07\x06\x02\x02BC\x07\v\x02" +
        "\x02CD\x05\f\x07\x02DE\x07\x12\x02\x02EG\x03\x02\x02\x02F?\x03\x02\x02" +
        "\x02F@\x03\x02\x02\x02FA\x03\x02\x02\x02FB\x03\x02\x02\x02G\v\x03\x02" +
        "\x02\x02HL\x05\x0E\b\x02IL\x05\x10\t\x02JL\x07\x13\x02\x02KH\x03\x02\x02" +
        "\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02L\r\x03\x02\x02\x02MN\x07\x13" +
        "\x02\x02NO\x07\x14\x02\x02OP\x07\x13\x02\x02P\x0F\x03\x02\x02\x02QR\x07" +
        "\x13\x02\x02RS\x07\x14\x02\x02S\x11\x03\x02\x02\x02T[\x07\n\x02\x02U[" +
        "\x05\x14\v\x02VW\x07\x03\x02\x02WX\x05\x04\x03\x02XY\x07\x04\x02\x02Y" +
        "[\x03\x02\x02\x02ZT\x03\x02\x02\x02ZU\x03\x02\x02\x02ZV\x03\x02\x02\x02" +
        "[\x13\x03\x02\x02\x02\\`\x05\"\x12\x02]`\x05\x16\f\x02^`\x07\t\x02\x02" +
        "_\\\x03\x02\x02\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`\x15\x03\x02\x02" +
        "\x02ab\t\x02\x02\x02bc\x05\x18\r\x02cd\x07%\x02\x02d\x17\x03\x02\x02\x02" +
        "eg\x05\x1A\x0E\x02fe\x03\x02\x02\x02fg\x03\x02\x02\x02gh\x03\x02\x02\x02" +
        "hi\x07&\x02\x02ij\x07&\x02\x02ju\x05\x16\f\x02kl\x05\x1A\x0E\x02lm\x07" +
        "&\x02\x02mn\x05\x16\f\x02nu\x03\x02\x02\x02oq\x05\x1A\x0E\x02pr\x07&\x02" +
        "\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02ru\x03\x02\x02\x02su\x07&\x02" +
        "\x02tf\x03\x02\x02\x02tk\x03\x02\x02\x02to\x03\x02\x02\x02ts\x03\x02\x02" +
        "\x02u\x19\x03\x02\x02\x02vx\x07&\x02\x02wv\x03\x02\x02\x02wx\x03\x02\x02" +
        "\x02x{\x03\x02\x02\x02y|\x05\x1C\x0F\x02z|\x05\"\x12\x02{y\x03\x02\x02" +
        "\x02{z\x03\x02\x02\x02|}\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02" +
        "\x02~\x1B\x03\x02\x02\x02\x7F\x82\x05\x1E\x10\x02\x80\x82\x07\'\x02\x02" +
        "\x81\x7F\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82\x1D\x03\x02\x02\x02" +
        "\x83\x84\x05 \x11\x02\x84\x85\x07&\x02\x02\x85\x86\x05 \x11\x02\x86\x1F" +
        "\x03\x02\x02\x02\x87\x88\t\x03\x02\x02\x88!\x03\x02\x02\x02\x89\x90\x07" +
        "\f\x02\x02\x8A\x90\x07\x1F\x02\x02\x8B\x90\x07\r\x02\x02\x8C\x90\x07 " +
        "\x02\x02\x8D\x90\x05$\x13\x02\x8E\x90\x05&\x14\x02\x8F\x89\x03\x02\x02" +
        "\x02\x8F\x8A\x03\x02\x02\x02\x8F\x8B\x03\x02\x02\x02\x8F\x8C\x03\x02\x02" +
        "\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90#\x03\x02\x02" +
        "\x02\x91\x92\t\x04\x02\x02\x92\x93\x05(\x15\x02\x93\x94\x07\x15\x02\x02" +
        "\x94%\x03\x02\x02\x02\x95\x96\t\x05\x02\x02\x96\x97\x05(\x15\x02\x97\x98" +
        "\x07\x15\x02\x02\x98\'\x03\x02\x02\x02\x99\x9A\t\x06\x02\x02\x9A)\x03" +
        "\x02\x02\x02\x1128=FKZ_fqtw{}\x81\x8F";
    return regexParser;
}(Parser_1.Parser));
exports.regexParser = regexParser;
var RootContext = /** @class */ (function (_super) {
    __extends(RootContext, _super);
    function RootContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootContext.prototype.regExp = function () {
        return this.getRuleContext(0, RegExpContext);
    };
    RootContext.prototype.EOF = function () { return this.getToken(regexParser.EOF, 0); };
    Object.defineProperty(RootContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_root; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootContext.prototype.enterRule = function (listener) {
        if (listener.enterRoot) {
            listener.enterRoot(this);
        }
    };
    // @Override
    RootContext.prototype.exitRule = function (listener) {
        if (listener.exitRoot) {
            listener.exitRoot(this);
        }
    };
    // @Override
    RootContext.prototype.accept = function (visitor) {
        if (visitor.visitRoot) {
            return visitor.visitRoot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootContext = RootContext;
var RegExpContext = /** @class */ (function (_super) {
    __extends(RegExpContext, _super);
    function RegExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegExpContext.prototype.branch = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BranchContext);
        }
        else {
            return this.getRuleContext(i, BranchContext);
        }
    };
    RegExpContext.prototype.PIPE = function (i) {
        if (i === undefined) {
            return this.getTokens(regexParser.PIPE);
        }
        else {
            return this.getToken(regexParser.PIPE, i);
        }
    };
    Object.defineProperty(RegExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_regExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegExpContext.prototype.enterRule = function (listener) {
        if (listener.enterRegExp) {
            listener.enterRegExp(this);
        }
    };
    // @Override
    RegExpContext.prototype.exitRule = function (listener) {
        if (listener.exitRegExp) {
            listener.exitRegExp(this);
        }
    };
    // @Override
    RegExpContext.prototype.accept = function (visitor) {
        if (visitor.visitRegExp) {
            return visitor.visitRegExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegExpContext = RegExpContext;
var BranchContext = /** @class */ (function (_super) {
    __extends(BranchContext, _super);
    function BranchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BranchContext.prototype.piece = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PieceContext);
        }
        else {
            return this.getRuleContext(i, PieceContext);
        }
    };
    Object.defineProperty(BranchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_branch; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BranchContext.prototype.enterRule = function (listener) {
        if (listener.enterBranch) {
            listener.enterBranch(this);
        }
    };
    // @Override
    BranchContext.prototype.exitRule = function (listener) {
        if (listener.exitBranch) {
            listener.exitBranch(this);
        }
    };
    // @Override
    BranchContext.prototype.accept = function (visitor) {
        if (visitor.visitBranch) {
            return visitor.visitBranch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BranchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BranchContext = BranchContext;
var PieceContext = /** @class */ (function (_super) {
    __extends(PieceContext, _super);
    function PieceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PieceContext.prototype.atom = function () {
        return this.getRuleContext(0, AtomContext);
    };
    PieceContext.prototype.quantifier = function () {
        return this.tryGetRuleContext(0, QuantifierContext);
    };
    Object.defineProperty(PieceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_piece; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PieceContext.prototype.enterRule = function (listener) {
        if (listener.enterPiece) {
            listener.enterPiece(this);
        }
    };
    // @Override
    PieceContext.prototype.exitRule = function (listener) {
        if (listener.exitPiece) {
            listener.exitPiece(this);
        }
    };
    // @Override
    PieceContext.prototype.accept = function (visitor) {
        if (visitor.visitPiece) {
            return visitor.visitPiece(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PieceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PieceContext = PieceContext;
var QuantifierContext = /** @class */ (function (_super) {
    __extends(QuantifierContext, _super);
    function QuantifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuantifierContext.prototype.QUESTION = function () { return this.tryGetToken(regexParser.QUESTION, 0); };
    QuantifierContext.prototype.STAR = function () { return this.tryGetToken(regexParser.STAR, 0); };
    QuantifierContext.prototype.PLUS = function () { return this.tryGetToken(regexParser.PLUS, 0); };
    QuantifierContext.prototype.StartQuantity = function () { return this.tryGetToken(regexParser.StartQuantity, 0); };
    QuantifierContext.prototype.quantity = function () {
        return this.tryGetRuleContext(0, QuantityContext);
    };
    QuantifierContext.prototype.EndQuantity = function () { return this.tryGetToken(regexParser.EndQuantity, 0); };
    Object.defineProperty(QuantifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_quantifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuantifierContext.prototype.enterRule = function (listener) {
        if (listener.enterQuantifier) {
            listener.enterQuantifier(this);
        }
    };
    // @Override
    QuantifierContext.prototype.exitRule = function (listener) {
        if (listener.exitQuantifier) {
            listener.exitQuantifier(this);
        }
    };
    // @Override
    QuantifierContext.prototype.accept = function (visitor) {
        if (visitor.visitQuantifier) {
            return visitor.visitQuantifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuantifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuantifierContext = QuantifierContext;
var QuantityContext = /** @class */ (function (_super) {
    __extends(QuantityContext, _super);
    function QuantityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuantityContext.prototype.quantRange = function () {
        return this.tryGetRuleContext(0, QuantRangeContext);
    };
    QuantityContext.prototype.quantMin = function () {
        return this.tryGetRuleContext(0, QuantMinContext);
    };
    QuantityContext.prototype.QuantExact = function () { return this.tryGetToken(regexParser.QuantExact, 0); };
    Object.defineProperty(QuantityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_quantity; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuantityContext.prototype.enterRule = function (listener) {
        if (listener.enterQuantity) {
            listener.enterQuantity(this);
        }
    };
    // @Override
    QuantityContext.prototype.exitRule = function (listener) {
        if (listener.exitQuantity) {
            listener.exitQuantity(this);
        }
    };
    // @Override
    QuantityContext.prototype.accept = function (visitor) {
        if (visitor.visitQuantity) {
            return visitor.visitQuantity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuantityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuantityContext = QuantityContext;
var QuantRangeContext = /** @class */ (function (_super) {
    __extends(QuantRangeContext, _super);
    function QuantRangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuantRangeContext.prototype.QuantExact = function (i) {
        if (i === undefined) {
            return this.getTokens(regexParser.QuantExact);
        }
        else {
            return this.getToken(regexParser.QuantExact, i);
        }
    };
    QuantRangeContext.prototype.COMMA = function () { return this.getToken(regexParser.COMMA, 0); };
    Object.defineProperty(QuantRangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_quantRange; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuantRangeContext.prototype.enterRule = function (listener) {
        if (listener.enterQuantRange) {
            listener.enterQuantRange(this);
        }
    };
    // @Override
    QuantRangeContext.prototype.exitRule = function (listener) {
        if (listener.exitQuantRange) {
            listener.exitQuantRange(this);
        }
    };
    // @Override
    QuantRangeContext.prototype.accept = function (visitor) {
        if (visitor.visitQuantRange) {
            return visitor.visitQuantRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuantRangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuantRangeContext = QuantRangeContext;
var QuantMinContext = /** @class */ (function (_super) {
    __extends(QuantMinContext, _super);
    function QuantMinContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuantMinContext.prototype.QuantExact = function () { return this.getToken(regexParser.QuantExact, 0); };
    QuantMinContext.prototype.COMMA = function () { return this.getToken(regexParser.COMMA, 0); };
    Object.defineProperty(QuantMinContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_quantMin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuantMinContext.prototype.enterRule = function (listener) {
        if (listener.enterQuantMin) {
            listener.enterQuantMin(this);
        }
    };
    // @Override
    QuantMinContext.prototype.exitRule = function (listener) {
        if (listener.exitQuantMin) {
            listener.exitQuantMin(this);
        }
    };
    // @Override
    QuantMinContext.prototype.accept = function (visitor) {
        if (visitor.visitQuantMin) {
            return visitor.visitQuantMin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuantMinContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuantMinContext = QuantMinContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.Char = function () { return this.tryGetToken(regexParser.Char, 0); };
    AtomContext.prototype.charClass = function () {
        return this.tryGetRuleContext(0, CharClassContext);
    };
    AtomContext.prototype.LPAREN = function () { return this.tryGetToken(regexParser.LPAREN, 0); };
    AtomContext.prototype.regExp = function () {
        return this.tryGetRuleContext(0, RegExpContext);
    };
    AtomContext.prototype.RPAREN = function () { return this.tryGetToken(regexParser.RPAREN, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var CharClassContext = /** @class */ (function (_super) {
    __extends(CharClassContext, _super);
    function CharClassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharClassContext.prototype.charClassEsc = function () {
        return this.tryGetRuleContext(0, CharClassEscContext);
    };
    CharClassContext.prototype.charClassExpr = function () {
        return this.tryGetRuleContext(0, CharClassExprContext);
    };
    CharClassContext.prototype.WildcardEsc = function () { return this.tryGetToken(regexParser.WildcardEsc, 0); };
    Object.defineProperty(CharClassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_charClass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharClassContext.prototype.enterRule = function (listener) {
        if (listener.enterCharClass) {
            listener.enterCharClass(this);
        }
    };
    // @Override
    CharClassContext.prototype.exitRule = function (listener) {
        if (listener.exitCharClass) {
            listener.exitCharClass(this);
        }
    };
    // @Override
    CharClassContext.prototype.accept = function (visitor) {
        if (visitor.visitCharClass) {
            return visitor.visitCharClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharClassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharClassContext = CharClassContext;
var CharClassExprContext = /** @class */ (function (_super) {
    __extends(CharClassExprContext, _super);
    function CharClassExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharClassExprContext.prototype.charGroup = function () {
        return this.getRuleContext(0, CharGroupContext);
    };
    CharClassExprContext.prototype.EndCharGroup = function () { return this.getToken(regexParser.EndCharGroup, 0); };
    CharClassExprContext.prototype.NegCharGroup = function () { return this.tryGetToken(regexParser.NegCharGroup, 0); };
    CharClassExprContext.prototype.NestedNegCharGroup = function () { return this.tryGetToken(regexParser.NestedNegCharGroup, 0); };
    CharClassExprContext.prototype.PosCharGroup = function () { return this.tryGetToken(regexParser.PosCharGroup, 0); };
    CharClassExprContext.prototype.NestedPosCharGroup = function () { return this.tryGetToken(regexParser.NestedPosCharGroup, 0); };
    Object.defineProperty(CharClassExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_charClassExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharClassExprContext.prototype.enterRule = function (listener) {
        if (listener.enterCharClassExpr) {
            listener.enterCharClassExpr(this);
        }
    };
    // @Override
    CharClassExprContext.prototype.exitRule = function (listener) {
        if (listener.exitCharClassExpr) {
            listener.exitCharClassExpr(this);
        }
    };
    // @Override
    CharClassExprContext.prototype.accept = function (visitor) {
        if (visitor.visitCharClassExpr) {
            return visitor.visitCharClassExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharClassExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharClassExprContext = CharClassExprContext;
var CharGroupContext = /** @class */ (function (_super) {
    __extends(CharGroupContext, _super);
    function CharGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharGroupContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(regexParser.DASH);
        }
        else {
            return this.getToken(regexParser.DASH, i);
        }
    };
    CharGroupContext.prototype.charClassExpr = function () {
        return this.tryGetRuleContext(0, CharClassExprContext);
    };
    CharGroupContext.prototype.posCharGroup = function () {
        return this.tryGetRuleContext(0, PosCharGroupContext);
    };
    Object.defineProperty(CharGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_charGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterCharGroup) {
            listener.enterCharGroup(this);
        }
    };
    // @Override
    CharGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitCharGroup) {
            listener.exitCharGroup(this);
        }
    };
    // @Override
    CharGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitCharGroup) {
            return visitor.visitCharGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharGroupContext = CharGroupContext;
var PosCharGroupContext = /** @class */ (function (_super) {
    __extends(PosCharGroupContext, _super);
    function PosCharGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PosCharGroupContext.prototype.DASH = function () { return this.tryGetToken(regexParser.DASH, 0); };
    PosCharGroupContext.prototype.charRange = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CharRangeContext);
        }
        else {
            return this.getRuleContext(i, CharRangeContext);
        }
    };
    PosCharGroupContext.prototype.charClassEsc = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CharClassEscContext);
        }
        else {
            return this.getRuleContext(i, CharClassEscContext);
        }
    };
    Object.defineProperty(PosCharGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_posCharGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PosCharGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterPosCharGroup) {
            listener.enterPosCharGroup(this);
        }
    };
    // @Override
    PosCharGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitPosCharGroup) {
            listener.exitPosCharGroup(this);
        }
    };
    // @Override
    PosCharGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitPosCharGroup) {
            return visitor.visitPosCharGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PosCharGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PosCharGroupContext = PosCharGroupContext;
var CharRangeContext = /** @class */ (function (_super) {
    __extends(CharRangeContext, _super);
    function CharRangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharRangeContext.prototype.seRange = function () {
        return this.tryGetRuleContext(0, SeRangeContext);
    };
    CharRangeContext.prototype.XmlChar = function () { return this.tryGetToken(regexParser.XmlChar, 0); };
    Object.defineProperty(CharRangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_charRange; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharRangeContext.prototype.enterRule = function (listener) {
        if (listener.enterCharRange) {
            listener.enterCharRange(this);
        }
    };
    // @Override
    CharRangeContext.prototype.exitRule = function (listener) {
        if (listener.exitCharRange) {
            listener.exitCharRange(this);
        }
    };
    // @Override
    CharRangeContext.prototype.accept = function (visitor) {
        if (visitor.visitCharRange) {
            return visitor.visitCharRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharRangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharRangeContext = CharRangeContext;
var SeRangeContext = /** @class */ (function (_super) {
    __extends(SeRangeContext, _super);
    function SeRangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SeRangeContext.prototype.charOrEsc = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CharOrEscContext);
        }
        else {
            return this.getRuleContext(i, CharOrEscContext);
        }
    };
    SeRangeContext.prototype.DASH = function () { return this.getToken(regexParser.DASH, 0); };
    Object.defineProperty(SeRangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_seRange; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SeRangeContext.prototype.enterRule = function (listener) {
        if (listener.enterSeRange) {
            listener.enterSeRange(this);
        }
    };
    // @Override
    SeRangeContext.prototype.exitRule = function (listener) {
        if (listener.exitSeRange) {
            listener.exitSeRange(this);
        }
    };
    // @Override
    SeRangeContext.prototype.accept = function (visitor) {
        if (visitor.visitSeRange) {
            return visitor.visitSeRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SeRangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SeRangeContext = SeRangeContext;
var CharOrEscContext = /** @class */ (function (_super) {
    __extends(CharOrEscContext, _super);
    function CharOrEscContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharOrEscContext.prototype.XmlChar = function () { return this.tryGetToken(regexParser.XmlChar, 0); };
    CharOrEscContext.prototype.SingleCharEsc = function () { return this.tryGetToken(regexParser.SingleCharEsc, 0); };
    Object.defineProperty(CharOrEscContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_charOrEsc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharOrEscContext.prototype.enterRule = function (listener) {
        if (listener.enterCharOrEsc) {
            listener.enterCharOrEsc(this);
        }
    };
    // @Override
    CharOrEscContext.prototype.exitRule = function (listener) {
        if (listener.exitCharOrEsc) {
            listener.exitCharOrEsc(this);
        }
    };
    // @Override
    CharOrEscContext.prototype.accept = function (visitor) {
        if (visitor.visitCharOrEsc) {
            return visitor.visitCharOrEsc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharOrEscContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharOrEscContext = CharOrEscContext;
var CharClassEscContext = /** @class */ (function (_super) {
    __extends(CharClassEscContext, _super);
    function CharClassEscContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharClassEscContext.prototype.SingleCharEsc = function () { return this.tryGetToken(regexParser.SingleCharEsc, 0); };
    CharClassEscContext.prototype.NestedSingleCharEsc = function () { return this.tryGetToken(regexParser.NestedSingleCharEsc, 0); };
    CharClassEscContext.prototype.MultiCharEsc = function () { return this.tryGetToken(regexParser.MultiCharEsc, 0); };
    CharClassEscContext.prototype.NestedMultiCharEsc = function () { return this.tryGetToken(regexParser.NestedMultiCharEsc, 0); };
    CharClassEscContext.prototype.catEsc = function () {
        return this.tryGetRuleContext(0, CatEscContext);
    };
    CharClassEscContext.prototype.complEsc = function () {
        return this.tryGetRuleContext(0, ComplEscContext);
    };
    Object.defineProperty(CharClassEscContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_charClassEsc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharClassEscContext.prototype.enterRule = function (listener) {
        if (listener.enterCharClassEsc) {
            listener.enterCharClassEsc(this);
        }
    };
    // @Override
    CharClassEscContext.prototype.exitRule = function (listener) {
        if (listener.exitCharClassEsc) {
            listener.exitCharClassEsc(this);
        }
    };
    // @Override
    CharClassEscContext.prototype.accept = function (visitor) {
        if (visitor.visitCharClassEsc) {
            return visitor.visitCharClassEsc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharClassEscContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharClassEscContext = CharClassEscContext;
var CatEscContext = /** @class */ (function (_super) {
    __extends(CatEscContext, _super);
    function CatEscContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatEscContext.prototype.charProp = function () {
        return this.getRuleContext(0, CharPropContext);
    };
    CatEscContext.prototype.EndCategory = function () { return this.getToken(regexParser.EndCategory, 0); };
    CatEscContext.prototype.CatEsc = function () { return this.tryGetToken(regexParser.CatEsc, 0); };
    CatEscContext.prototype.NestedCatEsc = function () { return this.tryGetToken(regexParser.NestedCatEsc, 0); };
    Object.defineProperty(CatEscContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_catEsc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatEscContext.prototype.enterRule = function (listener) {
        if (listener.enterCatEsc) {
            listener.enterCatEsc(this);
        }
    };
    // @Override
    CatEscContext.prototype.exitRule = function (listener) {
        if (listener.exitCatEsc) {
            listener.exitCatEsc(this);
        }
    };
    // @Override
    CatEscContext.prototype.accept = function (visitor) {
        if (visitor.visitCatEsc) {
            return visitor.visitCatEsc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatEscContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatEscContext = CatEscContext;
var ComplEscContext = /** @class */ (function (_super) {
    __extends(ComplEscContext, _super);
    function ComplEscContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComplEscContext.prototype.charProp = function () {
        return this.getRuleContext(0, CharPropContext);
    };
    ComplEscContext.prototype.EndCategory = function () { return this.getToken(regexParser.EndCategory, 0); };
    ComplEscContext.prototype.ComplEsc = function () { return this.tryGetToken(regexParser.ComplEsc, 0); };
    ComplEscContext.prototype.NestedComplEsc = function () { return this.tryGetToken(regexParser.NestedComplEsc, 0); };
    Object.defineProperty(ComplEscContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_complEsc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComplEscContext.prototype.enterRule = function (listener) {
        if (listener.enterComplEsc) {
            listener.enterComplEsc(this);
        }
    };
    // @Override
    ComplEscContext.prototype.exitRule = function (listener) {
        if (listener.exitComplEsc) {
            listener.exitComplEsc(this);
        }
    };
    // @Override
    ComplEscContext.prototype.accept = function (visitor) {
        if (visitor.visitComplEsc) {
            return visitor.visitComplEsc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComplEscContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComplEscContext = ComplEscContext;
var CharPropContext = /** @class */ (function (_super) {
    __extends(CharPropContext, _super);
    function CharPropContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CharPropContext.prototype.IsCategory = function () { return this.tryGetToken(regexParser.IsCategory, 0); };
    CharPropContext.prototype.IsBlock = function () { return this.tryGetToken(regexParser.IsBlock, 0); };
    Object.defineProperty(CharPropContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return regexParser.RULE_charProp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharPropContext.prototype.enterRule = function (listener) {
        if (listener.enterCharProp) {
            listener.enterCharProp(this);
        }
    };
    // @Override
    CharPropContext.prototype.exitRule = function (listener) {
        if (listener.exitCharProp) {
            listener.exitCharProp(this);
        }
    };
    // @Override
    CharPropContext.prototype.accept = function (visitor) {
        if (visitor.visitCharProp) {
            return visitor.visitCharProp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharPropContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharPropContext = CharPropContext;
