"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/romannumerals/romannumerals.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var romannumeralsParser = /** @class */ (function (_super) {
    __extends(romannumeralsParser, _super);
    function romannumeralsParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(romannumeralsParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(romannumeralsParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return romannumeralsParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "romannumerals.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsParser.prototype, "ruleNames", {
        // @Override
        get: function () { return romannumeralsParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsParser.prototype, "serializedATN", {
        // @Override
        get: function () { return romannumeralsParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    romannumeralsParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, romannumeralsParser.RULE_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 22;
                this.thousands();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    romannumeralsParser.prototype.thousands = function () {
        var _localctx = new ThousandsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, romannumeralsParser.RULE_thousands);
        try {
            this.state = 29;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 24;
                        this.thous_part(0);
                        this.state = 25;
                        this.hundreds();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 27;
                        this.thous_part(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 28;
                        this.hundreds();
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
    romannumeralsParser.prototype.thous_part = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new Thous_partContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 4;
        this.enterRecursionRule(_localctx, 4, romannumeralsParser.RULE_thous_part, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 32;
                    this.match(romannumeralsParser.M);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 38;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new Thous_partContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, romannumeralsParser.RULE_thous_part);
                                this.state = 34;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 35;
                                this.match(romannumeralsParser.M);
                            }
                        }
                    }
                    this.state = 40;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
    romannumeralsParser.prototype.hundreds = function () {
        var _localctx = new HundredsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, romannumeralsParser.RULE_hundreds);
        try {
            this.state = 46;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 41;
                        this.hun_part();
                        this.state = 42;
                        this.tens();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 44;
                        this.hun_part();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 45;
                        this.tens();
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
    romannumeralsParser.prototype.hun_part = function () {
        var _localctx = new Hun_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, romannumeralsParser.RULE_hun_part);
        try {
            this.state = 54;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 48;
                        this.hun_rep();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 49;
                        this.match(romannumeralsParser.CD);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 50;
                        this.match(romannumeralsParser.D);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 51;
                        this.match(romannumeralsParser.D);
                        this.state = 52;
                        this.hun_rep();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 53;
                        this.match(romannumeralsParser.CM);
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
    romannumeralsParser.prototype.hun_rep = function () {
        var _localctx = new Hun_repContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, romannumeralsParser.RULE_hun_rep);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << romannumeralsParser.C) | (1 << romannumeralsParser.CC) | (1 << romannumeralsParser.CCC))) !== 0))) {
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
    romannumeralsParser.prototype.tens = function () {
        var _localctx = new TensContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, romannumeralsParser.RULE_tens);
        try {
            this.state = 63;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 58;
                        this.tens_part();
                        this.state = 59;
                        this.ones();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 61;
                        this.tens_part();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 62;
                        this.ones();
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
    romannumeralsParser.prototype.tens_part = function () {
        var _localctx = new Tens_partContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, romannumeralsParser.RULE_tens_part);
        try {
            this.state = 71;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 65;
                        this.tens_rep();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 66;
                        this.match(romannumeralsParser.XL);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 67;
                        this.match(romannumeralsParser.L);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 68;
                        this.match(romannumeralsParser.L);
                        this.state = 69;
                        this.tens_rep();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 70;
                        this.match(romannumeralsParser.XC);
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
    romannumeralsParser.prototype.tens_rep = function () {
        var _localctx = new Tens_repContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, romannumeralsParser.RULE_tens_rep);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << romannumeralsParser.X) | (1 << romannumeralsParser.XX) | (1 << romannumeralsParser.XXX))) !== 0))) {
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
    romannumeralsParser.prototype.ones = function () {
        var _localctx = new OnesContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, romannumeralsParser.RULE_ones);
        try {
            this.state = 81;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 75;
                        this.ones_rep();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 76;
                        this.match(romannumeralsParser.IV);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 77;
                        this.match(romannumeralsParser.V);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 78;
                        this.match(romannumeralsParser.V);
                        this.state = 79;
                        this.ones_rep();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 80;
                        this.match(romannumeralsParser.IX);
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
    romannumeralsParser.prototype.ones_rep = function () {
        var _localctx = new Ones_repContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, romannumeralsParser.RULE_ones_rep);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 83;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << romannumeralsParser.I) | (1 << romannumeralsParser.II) | (1 << romannumeralsParser.III))) !== 0))) {
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
    romannumeralsParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.thous_part_sempred(_localctx, predIndex);
        }
        return true;
    };
    romannumeralsParser.prototype.thous_part_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    Object.defineProperty(romannumeralsParser, "_ATN", {
        get: function () {
            if (!romannumeralsParser.__ATN) {
                romannumeralsParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(romannumeralsParser._serializedATN));
            }
            return romannumeralsParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    romannumeralsParser.M = 1;
    romannumeralsParser.CD = 2;
    romannumeralsParser.D = 3;
    romannumeralsParser.CM = 4;
    romannumeralsParser.C = 5;
    romannumeralsParser.CC = 6;
    romannumeralsParser.CCC = 7;
    romannumeralsParser.XL = 8;
    romannumeralsParser.L = 9;
    romannumeralsParser.XC = 10;
    romannumeralsParser.X = 11;
    romannumeralsParser.XX = 12;
    romannumeralsParser.XXX = 13;
    romannumeralsParser.IV = 14;
    romannumeralsParser.V = 15;
    romannumeralsParser.IX = 16;
    romannumeralsParser.I = 17;
    romannumeralsParser.II = 18;
    romannumeralsParser.III = 19;
    romannumeralsParser.WS = 20;
    romannumeralsParser.RULE_expression = 0;
    romannumeralsParser.RULE_thousands = 1;
    romannumeralsParser.RULE_thous_part = 2;
    romannumeralsParser.RULE_hundreds = 3;
    romannumeralsParser.RULE_hun_part = 4;
    romannumeralsParser.RULE_hun_rep = 5;
    romannumeralsParser.RULE_tens = 6;
    romannumeralsParser.RULE_tens_part = 7;
    romannumeralsParser.RULE_tens_rep = 8;
    romannumeralsParser.RULE_ones = 9;
    romannumeralsParser.RULE_ones_rep = 10;
    // tslint:disable:no-trailing-whitespace
    romannumeralsParser.ruleNames = [
        "expression", "thousands", "thous_part", "hundreds", "hun_part", "hun_rep",
        "tens", "tens_part", "tens_rep", "ones", "ones_rep",
    ];
    romannumeralsParser._LITERAL_NAMES = [
        undefined, "'M'", "'CD'", "'D'", "'CM'", "'C'", "'CC'", "'CCC'", "'XL'",
        "'L'", "'XC'", "'X'", "'XX'", "'XXX'", "'IV'", "'V'", "'IX'", "'I'", "'II'",
        "'III'",
    ];
    romannumeralsParser._SYMBOLIC_NAMES = [
        undefined, "M", "CD", "D", "CM", "C", "CC", "CCC", "XL", "L", "XC", "X",
        "XX", "XXX", "IV", "V", "IX", "I", "II", "III", "WS",
    ];
    romannumeralsParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(romannumeralsParser._LITERAL_NAMES, romannumeralsParser._SYMBOLIC_NAMES, []);
    romannumeralsParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16X\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03 \n\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x07\x04\'\n\x04\f\x04\x0E\x04*\v\x04\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x05\x051\n\x05\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x05\x069\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x05\bB\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tJ\n" +
        "\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vT\n\v\x03\f\x03" +
        "\f\x03\f\x02\x02\x03\x06\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
        "\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x05\x03\x02\x07\t\x03\x02\r\x0F" +
        "\x03\x02\x13\x15\x02_\x02\x18\x03\x02\x02\x02\x04\x1F\x03\x02\x02\x02" +
        "\x06!\x03\x02\x02\x02\b0\x03\x02\x02\x02\n8\x03\x02\x02\x02\f:\x03\x02" +
        "\x02\x02\x0EA\x03\x02\x02\x02\x10I\x03\x02\x02\x02\x12K\x03\x02\x02\x02" +
        "\x14S\x03\x02\x02\x02\x16U\x03\x02\x02\x02\x18\x19\x05\x04\x03\x02\x19" +
        "\x03\x03\x02\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x05\b\x05\x02\x1C" +
        " \x03\x02\x02\x02\x1D \x05\x06\x04\x02\x1E \x05\b\x05\x02\x1F\x1A\x03" +
        "\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F\x1E\x03\x02\x02\x02 \x05\x03" +
        "\x02\x02\x02!\"\b\x04\x01\x02\"#\x07\x03\x02\x02#(\x03\x02\x02\x02$%\f" +
        "\x04\x02\x02%\'\x07\x03\x02\x02&$\x03\x02\x02\x02\'*\x03\x02\x02\x02(" +
        "&\x03\x02\x02\x02()\x03\x02\x02\x02)\x07\x03\x02\x02\x02*(\x03\x02\x02" +
        "\x02+,\x05\n\x06\x02,-\x05\x0E\b\x02-1\x03\x02\x02\x02.1\x05\n\x06\x02" +
        "/1\x05\x0E\b\x020+\x03\x02\x02\x020.\x03\x02\x02\x020/\x03\x02\x02\x02" +
        "1\t\x03\x02\x02\x0229\x05\f\x07\x0239\x07\x04\x02\x0249\x07\x05\x02\x02" +
        "56\x07\x05\x02\x0269\x05\f\x07\x0279\x07\x06\x02\x0282\x03\x02\x02\x02" +
        "83\x03\x02\x02\x0284\x03\x02\x02\x0285\x03\x02\x02\x0287\x03\x02\x02\x02" +
        "9\v\x03\x02\x02\x02:;\t\x02\x02\x02;\r\x03\x02\x02\x02<=\x05\x10\t\x02" +
        "=>\x05\x14\v\x02>B\x03\x02\x02\x02?B\x05\x10\t\x02@B\x05\x14\v\x02A<\x03" +
        "\x02\x02\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02B\x0F\x03\x02\x02\x02" +
        "CJ\x05\x12\n\x02DJ\x07\n\x02\x02EJ\x07\v\x02\x02FG\x07\v\x02\x02GJ\x05" +
        "\x12\n\x02HJ\x07\f\x02\x02IC\x03\x02\x02\x02ID\x03\x02\x02\x02IE\x03\x02" +
        "\x02\x02IF\x03\x02\x02\x02IH\x03\x02\x02\x02J\x11\x03\x02\x02\x02KL\t" +
        "\x03\x02\x02L\x13\x03\x02\x02\x02MT\x05\x16\f\x02NT\x07\x10\x02\x02OT" +
        "\x07\x11\x02\x02PQ\x07\x11\x02\x02QT\x05\x16\f\x02RT\x07\x12\x02\x02S" +
        "M\x03\x02\x02\x02SN\x03\x02\x02\x02SO\x03\x02\x02\x02SP\x03\x02\x02\x02" +
        "SR\x03\x02\x02\x02T\x15\x03\x02\x02\x02UV\t\x04\x02\x02V\x17\x03\x02\x02" +
        "\x02\t\x1F(08AIS";
    return romannumeralsParser;
}(Parser_1.Parser));
exports.romannumeralsParser = romannumeralsParser;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.thousands = function () {
        return this.getRuleContext(0, ThousandsContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_expression; },
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
var ThousandsContext = /** @class */ (function (_super) {
    __extends(ThousandsContext, _super);
    function ThousandsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThousandsContext.prototype.thous_part = function () {
        return this.tryGetRuleContext(0, Thous_partContext);
    };
    ThousandsContext.prototype.hundreds = function () {
        return this.tryGetRuleContext(0, HundredsContext);
    };
    Object.defineProperty(ThousandsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_thousands; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThousandsContext.prototype.enterRule = function (listener) {
        if (listener.enterThousands) {
            listener.enterThousands(this);
        }
    };
    // @Override
    ThousandsContext.prototype.exitRule = function (listener) {
        if (listener.exitThousands) {
            listener.exitThousands(this);
        }
    };
    // @Override
    ThousandsContext.prototype.accept = function (visitor) {
        if (visitor.visitThousands) {
            return visitor.visitThousands(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThousandsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThousandsContext = ThousandsContext;
var Thous_partContext = /** @class */ (function (_super) {
    __extends(Thous_partContext, _super);
    function Thous_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Thous_partContext.prototype.thous_part = function () {
        return this.tryGetRuleContext(0, Thous_partContext);
    };
    Thous_partContext.prototype.M = function () { return this.getToken(romannumeralsParser.M, 0); };
    Object.defineProperty(Thous_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_thous_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Thous_partContext.prototype.enterRule = function (listener) {
        if (listener.enterThous_part) {
            listener.enterThous_part(this);
        }
    };
    // @Override
    Thous_partContext.prototype.exitRule = function (listener) {
        if (listener.exitThous_part) {
            listener.exitThous_part(this);
        }
    };
    // @Override
    Thous_partContext.prototype.accept = function (visitor) {
        if (visitor.visitThous_part) {
            return visitor.visitThous_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Thous_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Thous_partContext = Thous_partContext;
var HundredsContext = /** @class */ (function (_super) {
    __extends(HundredsContext, _super);
    function HundredsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HundredsContext.prototype.hun_part = function () {
        return this.tryGetRuleContext(0, Hun_partContext);
    };
    HundredsContext.prototype.tens = function () {
        return this.tryGetRuleContext(0, TensContext);
    };
    Object.defineProperty(HundredsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_hundreds; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HundredsContext.prototype.enterRule = function (listener) {
        if (listener.enterHundreds) {
            listener.enterHundreds(this);
        }
    };
    // @Override
    HundredsContext.prototype.exitRule = function (listener) {
        if (listener.exitHundreds) {
            listener.exitHundreds(this);
        }
    };
    // @Override
    HundredsContext.prototype.accept = function (visitor) {
        if (visitor.visitHundreds) {
            return visitor.visitHundreds(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HundredsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HundredsContext = HundredsContext;
var Hun_partContext = /** @class */ (function (_super) {
    __extends(Hun_partContext, _super);
    function Hun_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Hun_partContext.prototype.hun_rep = function () {
        return this.tryGetRuleContext(0, Hun_repContext);
    };
    Hun_partContext.prototype.CD = function () { return this.tryGetToken(romannumeralsParser.CD, 0); };
    Hun_partContext.prototype.D = function () { return this.tryGetToken(romannumeralsParser.D, 0); };
    Hun_partContext.prototype.CM = function () { return this.tryGetToken(romannumeralsParser.CM, 0); };
    Object.defineProperty(Hun_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_hun_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Hun_partContext.prototype.enterRule = function (listener) {
        if (listener.enterHun_part) {
            listener.enterHun_part(this);
        }
    };
    // @Override
    Hun_partContext.prototype.exitRule = function (listener) {
        if (listener.exitHun_part) {
            listener.exitHun_part(this);
        }
    };
    // @Override
    Hun_partContext.prototype.accept = function (visitor) {
        if (visitor.visitHun_part) {
            return visitor.visitHun_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Hun_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Hun_partContext = Hun_partContext;
var Hun_repContext = /** @class */ (function (_super) {
    __extends(Hun_repContext, _super);
    function Hun_repContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Hun_repContext.prototype.C = function () { return this.tryGetToken(romannumeralsParser.C, 0); };
    Hun_repContext.prototype.CC = function () { return this.tryGetToken(romannumeralsParser.CC, 0); };
    Hun_repContext.prototype.CCC = function () { return this.tryGetToken(romannumeralsParser.CCC, 0); };
    Object.defineProperty(Hun_repContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_hun_rep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Hun_repContext.prototype.enterRule = function (listener) {
        if (listener.enterHun_rep) {
            listener.enterHun_rep(this);
        }
    };
    // @Override
    Hun_repContext.prototype.exitRule = function (listener) {
        if (listener.exitHun_rep) {
            listener.exitHun_rep(this);
        }
    };
    // @Override
    Hun_repContext.prototype.accept = function (visitor) {
        if (visitor.visitHun_rep) {
            return visitor.visitHun_rep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Hun_repContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Hun_repContext = Hun_repContext;
var TensContext = /** @class */ (function (_super) {
    __extends(TensContext, _super);
    function TensContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TensContext.prototype.tens_part = function () {
        return this.tryGetRuleContext(0, Tens_partContext);
    };
    TensContext.prototype.ones = function () {
        return this.tryGetRuleContext(0, OnesContext);
    };
    Object.defineProperty(TensContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_tens; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TensContext.prototype.enterRule = function (listener) {
        if (listener.enterTens) {
            listener.enterTens(this);
        }
    };
    // @Override
    TensContext.prototype.exitRule = function (listener) {
        if (listener.exitTens) {
            listener.exitTens(this);
        }
    };
    // @Override
    TensContext.prototype.accept = function (visitor) {
        if (visitor.visitTens) {
            return visitor.visitTens(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TensContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TensContext = TensContext;
var Tens_partContext = /** @class */ (function (_super) {
    __extends(Tens_partContext, _super);
    function Tens_partContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tens_partContext.prototype.tens_rep = function () {
        return this.tryGetRuleContext(0, Tens_repContext);
    };
    Tens_partContext.prototype.XL = function () { return this.tryGetToken(romannumeralsParser.XL, 0); };
    Tens_partContext.prototype.L = function () { return this.tryGetToken(romannumeralsParser.L, 0); };
    Tens_partContext.prototype.XC = function () { return this.tryGetToken(romannumeralsParser.XC, 0); };
    Object.defineProperty(Tens_partContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_tens_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tens_partContext.prototype.enterRule = function (listener) {
        if (listener.enterTens_part) {
            listener.enterTens_part(this);
        }
    };
    // @Override
    Tens_partContext.prototype.exitRule = function (listener) {
        if (listener.exitTens_part) {
            listener.exitTens_part(this);
        }
    };
    // @Override
    Tens_partContext.prototype.accept = function (visitor) {
        if (visitor.visitTens_part) {
            return visitor.visitTens_part(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tens_partContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tens_partContext = Tens_partContext;
var Tens_repContext = /** @class */ (function (_super) {
    __extends(Tens_repContext, _super);
    function Tens_repContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tens_repContext.prototype.X = function () { return this.tryGetToken(romannumeralsParser.X, 0); };
    Tens_repContext.prototype.XX = function () { return this.tryGetToken(romannumeralsParser.XX, 0); };
    Tens_repContext.prototype.XXX = function () { return this.tryGetToken(romannumeralsParser.XXX, 0); };
    Object.defineProperty(Tens_repContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_tens_rep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tens_repContext.prototype.enterRule = function (listener) {
        if (listener.enterTens_rep) {
            listener.enterTens_rep(this);
        }
    };
    // @Override
    Tens_repContext.prototype.exitRule = function (listener) {
        if (listener.exitTens_rep) {
            listener.exitTens_rep(this);
        }
    };
    // @Override
    Tens_repContext.prototype.accept = function (visitor) {
        if (visitor.visitTens_rep) {
            return visitor.visitTens_rep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tens_repContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tens_repContext = Tens_repContext;
var OnesContext = /** @class */ (function (_super) {
    __extends(OnesContext, _super);
    function OnesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OnesContext.prototype.ones_rep = function () {
        return this.tryGetRuleContext(0, Ones_repContext);
    };
    OnesContext.prototype.IV = function () { return this.tryGetToken(romannumeralsParser.IV, 0); };
    OnesContext.prototype.V = function () { return this.tryGetToken(romannumeralsParser.V, 0); };
    OnesContext.prototype.IX = function () { return this.tryGetToken(romannumeralsParser.IX, 0); };
    Object.defineProperty(OnesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_ones; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OnesContext.prototype.enterRule = function (listener) {
        if (listener.enterOnes) {
            listener.enterOnes(this);
        }
    };
    // @Override
    OnesContext.prototype.exitRule = function (listener) {
        if (listener.exitOnes) {
            listener.exitOnes(this);
        }
    };
    // @Override
    OnesContext.prototype.accept = function (visitor) {
        if (visitor.visitOnes) {
            return visitor.visitOnes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OnesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OnesContext = OnesContext;
var Ones_repContext = /** @class */ (function (_super) {
    __extends(Ones_repContext, _super);
    function Ones_repContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ones_repContext.prototype.I = function () { return this.tryGetToken(romannumeralsParser.I, 0); };
    Ones_repContext.prototype.II = function () { return this.tryGetToken(romannumeralsParser.II, 0); };
    Ones_repContext.prototype.III = function () { return this.tryGetToken(romannumeralsParser.III, 0); };
    Object.defineProperty(Ones_repContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return romannumeralsParser.RULE_ones_rep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ones_repContext.prototype.enterRule = function (listener) {
        if (listener.enterOnes_rep) {
            listener.enterOnes_rep(this);
        }
    };
    // @Override
    Ones_repContext.prototype.exitRule = function (listener) {
        if (listener.exitOnes_rep) {
            listener.exitOnes_rep(this);
        }
    };
    // @Override
    Ones_repContext.prototype.accept = function (visitor) {
        if (visitor.visitOnes_rep) {
            return visitor.visitOnes_rep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ones_repContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ones_repContext = Ones_repContext;
