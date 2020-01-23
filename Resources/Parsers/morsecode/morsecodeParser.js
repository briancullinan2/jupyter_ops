"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/morsecode/morsecode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var morsecodeParser = /** @class */ (function (_super) {
    __extends(morsecodeParser, _super);
    function morsecodeParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(morsecodeParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(morsecodeParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return morsecodeParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "morsecode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeParser.prototype, "ruleNames", {
        // @Override
        get: function () { return morsecodeParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeParser.prototype, "serializedATN", {
        // @Override
        get: function () { return morsecodeParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    morsecodeParser.prototype.morsecode = function () {
        var _localctx = new MorsecodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, morsecodeParser.RULE_morsecode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.letter();
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 77;
                            this.match(morsecodeParser.SPACE);
                            this.state = 78;
                            this.letter();
                        }
                    }
                    this.state = 81;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === morsecodeParser.SPACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.letter = function () {
        var _localctx = new LetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, morsecodeParser.RULE_letter);
        try {
            this.state = 119;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 83;
                        this.a();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 84;
                        this.b();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 85;
                        this.c();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 86;
                        this.d();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 87;
                        this.e();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 88;
                        this.f();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 89;
                        this.g();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 90;
                        this.h();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 91;
                        this.i();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 92;
                        this.j();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 93;
                        this.k();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 94;
                        this.l();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 95;
                        this.m();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 96;
                        this.n();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 97;
                        this.o();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 98;
                        this.p();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 99;
                        this.q();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 100;
                        this.r();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 101;
                        this.s();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 102;
                        this.t();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 103;
                        this.u();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 104;
                        this.v();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 105;
                        this.w();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 106;
                        this.x();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 107;
                        this.y();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 108;
                        this.z();
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 109;
                        this.one();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 110;
                        this.two();
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 111;
                        this.three();
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 112;
                        this.four();
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 113;
                        this.five();
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 114;
                        this.six();
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 115;
                        this.seven();
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 116;
                        this.eight();
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 117;
                        this.nine();
                    }
                    break;
                case 36:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 118;
                        this.zero();
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
    morsecodeParser.prototype.a = function () {
        var _localctx = new AContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, morsecodeParser.RULE_a);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this.match(morsecodeParser.DOT);
                this.state = 122;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.b = function () {
        var _localctx = new BContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, morsecodeParser.RULE_b);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                this.match(morsecodeParser.DASH);
                this.state = 125;
                this.match(morsecodeParser.DOT);
                this.state = 126;
                this.match(morsecodeParser.DOT);
                this.state = 127;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.c = function () {
        var _localctx = new CContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, morsecodeParser.RULE_c);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this.match(morsecodeParser.DASH);
                this.state = 130;
                this.match(morsecodeParser.DOT);
                this.state = 131;
                this.match(morsecodeParser.DASH);
                this.state = 132;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.d = function () {
        var _localctx = new DContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, morsecodeParser.RULE_d);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                this.match(morsecodeParser.DASH);
                this.state = 135;
                this.match(morsecodeParser.DOT);
                this.state = 136;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.e = function () {
        var _localctx = new EContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, morsecodeParser.RULE_e);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.f = function () {
        var _localctx = new FContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, morsecodeParser.RULE_f);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.match(morsecodeParser.DOT);
                this.state = 141;
                this.match(morsecodeParser.DOT);
                this.state = 142;
                this.match(morsecodeParser.DASH);
                this.state = 143;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.g = function () {
        var _localctx = new GContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, morsecodeParser.RULE_g);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.match(morsecodeParser.DASH);
                this.state = 146;
                this.match(morsecodeParser.DASH);
                this.state = 147;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.h = function () {
        var _localctx = new HContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, morsecodeParser.RULE_h);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.match(morsecodeParser.DOT);
                this.state = 150;
                this.match(morsecodeParser.DOT);
                this.state = 151;
                this.match(morsecodeParser.DOT);
                this.state = 152;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.i = function () {
        var _localctx = new IContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, morsecodeParser.RULE_i);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(morsecodeParser.DOT);
                this.state = 155;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.j = function () {
        var _localctx = new JContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, morsecodeParser.RULE_j);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(morsecodeParser.DOT);
                this.state = 158;
                this.match(morsecodeParser.DASH);
                this.state = 159;
                this.match(morsecodeParser.DASH);
                this.state = 160;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.k = function () {
        var _localctx = new KContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, morsecodeParser.RULE_k);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                this.match(morsecodeParser.DASH);
                this.state = 163;
                this.match(morsecodeParser.DOT);
                this.state = 164;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.l = function () {
        var _localctx = new LContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, morsecodeParser.RULE_l);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                this.match(morsecodeParser.DOT);
                this.state = 167;
                this.match(morsecodeParser.DASH);
                this.state = 168;
                this.match(morsecodeParser.DOT);
                this.state = 169;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.m = function () {
        var _localctx = new MContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, morsecodeParser.RULE_m);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.match(morsecodeParser.DASH);
                this.state = 172;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.n = function () {
        var _localctx = new NContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, morsecodeParser.RULE_n);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                this.match(morsecodeParser.DASH);
                this.state = 175;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.o = function () {
        var _localctx = new OContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, morsecodeParser.RULE_o);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 177;
                this.match(morsecodeParser.DASH);
                this.state = 178;
                this.match(morsecodeParser.DASH);
                this.state = 179;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.p = function () {
        var _localctx = new PContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, morsecodeParser.RULE_p);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this.match(morsecodeParser.DOT);
                this.state = 182;
                this.match(morsecodeParser.DASH);
                this.state = 183;
                this.match(morsecodeParser.DASH);
                this.state = 184;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.q = function () {
        var _localctx = new QContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, morsecodeParser.RULE_q);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.match(morsecodeParser.DASH);
                this.state = 187;
                this.match(morsecodeParser.DASH);
                this.state = 188;
                this.match(morsecodeParser.DOT);
                this.state = 189;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.r = function () {
        var _localctx = new RContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, morsecodeParser.RULE_r);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 191;
                this.match(morsecodeParser.DOT);
                this.state = 192;
                this.match(morsecodeParser.DASH);
                this.state = 193;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.s = function () {
        var _localctx = new SContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, morsecodeParser.RULE_s);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.match(morsecodeParser.DOT);
                this.state = 196;
                this.match(morsecodeParser.DOT);
                this.state = 197;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.t = function () {
        var _localctx = new TContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, morsecodeParser.RULE_t);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.u = function () {
        var _localctx = new UContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, morsecodeParser.RULE_u);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.match(morsecodeParser.DOT);
                this.state = 202;
                this.match(morsecodeParser.DOT);
                this.state = 203;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.v = function () {
        var _localctx = new VContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, morsecodeParser.RULE_v);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this.match(morsecodeParser.DOT);
                this.state = 206;
                this.match(morsecodeParser.DOT);
                this.state = 207;
                this.match(morsecodeParser.DOT);
                this.state = 208;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.w = function () {
        var _localctx = new WContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, morsecodeParser.RULE_w);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this.match(morsecodeParser.DOT);
                this.state = 211;
                this.match(morsecodeParser.DASH);
                this.state = 212;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.x = function () {
        var _localctx = new XContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, morsecodeParser.RULE_x);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.match(morsecodeParser.DASH);
                this.state = 215;
                this.match(morsecodeParser.DOT);
                this.state = 216;
                this.match(morsecodeParser.DOT);
                this.state = 217;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.y = function () {
        var _localctx = new YContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, morsecodeParser.RULE_y);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                this.match(morsecodeParser.DASH);
                this.state = 220;
                this.match(morsecodeParser.DOT);
                this.state = 221;
                this.match(morsecodeParser.DASH);
                this.state = 222;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.z = function () {
        var _localctx = new ZContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, morsecodeParser.RULE_z);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(morsecodeParser.DASH);
                this.state = 225;
                this.match(morsecodeParser.DASH);
                this.state = 226;
                this.match(morsecodeParser.DOT);
                this.state = 227;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.one = function () {
        var _localctx = new OneContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, morsecodeParser.RULE_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(morsecodeParser.DOT);
                this.state = 230;
                this.match(morsecodeParser.DASH);
                this.state = 231;
                this.match(morsecodeParser.DASH);
                this.state = 232;
                this.match(morsecodeParser.DASH);
                this.state = 233;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.two = function () {
        var _localctx = new TwoContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, morsecodeParser.RULE_two);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 235;
                this.match(morsecodeParser.DOT);
                this.state = 236;
                this.match(morsecodeParser.DOT);
                this.state = 237;
                this.match(morsecodeParser.DASH);
                this.state = 238;
                this.match(morsecodeParser.DASH);
                this.state = 239;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.three = function () {
        var _localctx = new ThreeContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, morsecodeParser.RULE_three);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this.match(morsecodeParser.DOT);
                this.state = 242;
                this.match(morsecodeParser.DOT);
                this.state = 243;
                this.match(morsecodeParser.DOT);
                this.state = 244;
                this.match(morsecodeParser.DASH);
                this.state = 245;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.four = function () {
        var _localctx = new FourContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, morsecodeParser.RULE_four);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 247;
                this.match(morsecodeParser.DOT);
                this.state = 248;
                this.match(morsecodeParser.DOT);
                this.state = 249;
                this.match(morsecodeParser.DOT);
                this.state = 250;
                this.match(morsecodeParser.DOT);
                this.state = 251;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.five = function () {
        var _localctx = new FiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, morsecodeParser.RULE_five);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                this.match(morsecodeParser.DOT);
                this.state = 254;
                this.match(morsecodeParser.DOT);
                this.state = 255;
                this.match(morsecodeParser.DOT);
                this.state = 256;
                this.match(morsecodeParser.DOT);
                this.state = 257;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.six = function () {
        var _localctx = new SixContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, morsecodeParser.RULE_six);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.match(morsecodeParser.DASH);
                this.state = 260;
                this.match(morsecodeParser.DOT);
                this.state = 261;
                this.match(morsecodeParser.DOT);
                this.state = 262;
                this.match(morsecodeParser.DOT);
                this.state = 263;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.seven = function () {
        var _localctx = new SevenContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, morsecodeParser.RULE_seven);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                this.match(morsecodeParser.DASH);
                this.state = 266;
                this.match(morsecodeParser.DASH);
                this.state = 267;
                this.match(morsecodeParser.DOT);
                this.state = 268;
                this.match(morsecodeParser.DOT);
                this.state = 269;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.eight = function () {
        var _localctx = new EightContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, morsecodeParser.RULE_eight);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this.match(morsecodeParser.DASH);
                this.state = 272;
                this.match(morsecodeParser.DASH);
                this.state = 273;
                this.match(morsecodeParser.DASH);
                this.state = 274;
                this.match(morsecodeParser.DOT);
                this.state = 275;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.nine = function () {
        var _localctx = new NineContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, morsecodeParser.RULE_nine);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 277;
                this.match(morsecodeParser.DASH);
                this.state = 278;
                this.match(morsecodeParser.DASH);
                this.state = 279;
                this.match(morsecodeParser.DASH);
                this.state = 280;
                this.match(morsecodeParser.DASH);
                this.state = 281;
                this.match(morsecodeParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    morsecodeParser.prototype.zero = function () {
        var _localctx = new ZeroContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, morsecodeParser.RULE_zero);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                this.match(morsecodeParser.DASH);
                this.state = 284;
                this.match(morsecodeParser.DASH);
                this.state = 285;
                this.match(morsecodeParser.DASH);
                this.state = 286;
                this.match(morsecodeParser.DASH);
                this.state = 287;
                this.match(morsecodeParser.DASH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(morsecodeParser, "_ATN", {
        get: function () {
            if (!morsecodeParser.__ATN) {
                morsecodeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(morsecodeParser._serializedATN));
            }
            return morsecodeParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    morsecodeParser.DOT = 1;
    morsecodeParser.DASH = 2;
    morsecodeParser.SPACE = 3;
    morsecodeParser.WS = 4;
    morsecodeParser.RULE_morsecode = 0;
    morsecodeParser.RULE_letter = 1;
    morsecodeParser.RULE_a = 2;
    morsecodeParser.RULE_b = 3;
    morsecodeParser.RULE_c = 4;
    morsecodeParser.RULE_d = 5;
    morsecodeParser.RULE_e = 6;
    morsecodeParser.RULE_f = 7;
    morsecodeParser.RULE_g = 8;
    morsecodeParser.RULE_h = 9;
    morsecodeParser.RULE_i = 10;
    morsecodeParser.RULE_j = 11;
    morsecodeParser.RULE_k = 12;
    morsecodeParser.RULE_l = 13;
    morsecodeParser.RULE_m = 14;
    morsecodeParser.RULE_n = 15;
    morsecodeParser.RULE_o = 16;
    morsecodeParser.RULE_p = 17;
    morsecodeParser.RULE_q = 18;
    morsecodeParser.RULE_r = 19;
    morsecodeParser.RULE_s = 20;
    morsecodeParser.RULE_t = 21;
    morsecodeParser.RULE_u = 22;
    morsecodeParser.RULE_v = 23;
    morsecodeParser.RULE_w = 24;
    morsecodeParser.RULE_x = 25;
    morsecodeParser.RULE_y = 26;
    morsecodeParser.RULE_z = 27;
    morsecodeParser.RULE_one = 28;
    morsecodeParser.RULE_two = 29;
    morsecodeParser.RULE_three = 30;
    morsecodeParser.RULE_four = 31;
    morsecodeParser.RULE_five = 32;
    morsecodeParser.RULE_six = 33;
    morsecodeParser.RULE_seven = 34;
    morsecodeParser.RULE_eight = 35;
    morsecodeParser.RULE_nine = 36;
    morsecodeParser.RULE_zero = 37;
    // tslint:disable:no-trailing-whitespace
    morsecodeParser.ruleNames = [
        "morsecode", "letter", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
        "y", "z", "one", "two", "three", "four", "five", "six", "seven", "eight",
        "nine", "zero",
    ];
    morsecodeParser._LITERAL_NAMES = [
        undefined, "'.'", "'-'", "' '",
    ];
    morsecodeParser._SYMBOLIC_NAMES = [
        undefined, "DOT", "DASH", "SPACE", "WS",
    ];
    morsecodeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(morsecodeParser._LITERAL_NAMES, morsecodeParser._SYMBOLIC_NAMES, []);
    morsecodeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06\u0124\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x03\x02\x03\x02\x03\x02\x06\x02" +
        "R\n\x02\r\x02\x0E\x02S\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x05\x03z\n\x03\x03\x04\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
        "\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18" +
        "\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
        "\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03" +
        "#\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03" +
        "&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x02\x02" +
        "\x02(\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
        "\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
        "(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
        "D\x02F\x02H\x02J\x02L\x02\x02\x02\x02\u0121\x02N\x03\x02\x02\x02\x04y" +
        "\x03\x02\x02\x02\x06{\x03\x02\x02\x02\b~\x03\x02\x02\x02\n\x83\x03\x02" +
        "\x02\x02\f\x88\x03\x02\x02\x02\x0E\x8C\x03\x02\x02\x02\x10\x8E\x03\x02" +
        "\x02\x02\x12\x93\x03\x02\x02\x02\x14\x97\x03\x02\x02\x02\x16\x9C\x03\x02" +
        "\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xA4\x03\x02\x02\x02\x1C\xA8\x03\x02" +
        "\x02\x02\x1E\xAD\x03\x02\x02\x02 \xB0\x03\x02\x02\x02\"\xB3\x03\x02\x02" +
        "\x02$\xB7\x03\x02\x02\x02&\xBC\x03\x02\x02\x02(\xC1\x03\x02\x02\x02*\xC5" +
        "\x03\x02\x02\x02,\xC9\x03\x02\x02\x02.\xCB\x03\x02\x02\x020\xCF\x03\x02" +
        "\x02\x022\xD4\x03\x02\x02\x024\xD8\x03\x02\x02\x026\xDD\x03\x02\x02\x02" +
        "8\xE2\x03\x02\x02\x02:\xE7\x03\x02\x02\x02<\xED\x03\x02\x02\x02>\xF3\x03" +
        "\x02\x02\x02@\xF9\x03\x02\x02\x02B\xFF\x03\x02\x02\x02D\u0105\x03\x02" +
        "\x02\x02F\u010B\x03\x02\x02\x02H\u0111\x03\x02\x02\x02J\u0117\x03\x02" +
        "\x02\x02L\u011D\x03\x02\x02\x02NQ\x05\x04\x03\x02OP\x07\x05\x02\x02PR" +
        "\x05\x04\x03\x02QO\x03\x02\x02\x02RS\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
        "ST\x03\x02\x02\x02T\x03\x03\x02\x02\x02Uz\x05\x06\x04\x02Vz\x05\b\x05" +
        "\x02Wz\x05\n\x06\x02Xz\x05\f\x07\x02Yz\x05\x0E\b\x02Zz\x05\x10\t\x02[" +
        "z\x05\x12\n\x02\\z\x05\x14\v\x02]z\x05\x16\f\x02^z\x05\x18\r\x02_z\x05" +
        "\x1A\x0E\x02`z\x05\x1C\x0F\x02az\x05\x1E\x10\x02bz\x05 \x11\x02cz\x05" +
        "\"\x12\x02dz\x05$\x13\x02ez\x05&\x14\x02fz\x05(\x15\x02gz\x05*\x16\x02" +
        "hz\x05,\x17\x02iz\x05.\x18\x02jz\x050\x19\x02kz\x052\x1A\x02lz\x054\x1B" +
        "\x02mz\x056\x1C\x02nz\x058\x1D\x02oz\x05:\x1E\x02pz\x05<\x1F\x02qz\x05" +
        "> \x02rz\x05@!\x02sz\x05B\"\x02tz\x05D#\x02uz\x05F$\x02vz\x05H%\x02wz" +
        "\x05J&\x02xz\x05L\'\x02yU\x03\x02\x02\x02yV\x03\x02\x02\x02yW\x03\x02" +
        "\x02\x02yX\x03\x02\x02\x02yY\x03\x02\x02\x02yZ\x03\x02\x02\x02y[\x03\x02" +
        "\x02\x02y\\\x03\x02\x02\x02y]\x03\x02\x02\x02y^\x03\x02\x02\x02y_\x03" +
        "\x02\x02\x02y`\x03\x02\x02\x02ya\x03\x02\x02\x02yb\x03\x02\x02\x02yc\x03" +
        "\x02\x02\x02yd\x03\x02\x02\x02ye\x03\x02\x02\x02yf\x03\x02\x02\x02yg\x03" +
        "\x02\x02\x02yh\x03\x02\x02\x02yi\x03\x02\x02\x02yj\x03\x02\x02\x02yk\x03" +
        "\x02\x02\x02yl\x03\x02\x02\x02ym\x03\x02\x02\x02yn\x03\x02\x02\x02yo\x03" +
        "\x02\x02\x02yp\x03\x02\x02\x02yq\x03\x02\x02\x02yr\x03\x02\x02\x02ys\x03" +
        "\x02\x02\x02yt\x03\x02\x02\x02yu\x03\x02\x02\x02yv\x03\x02\x02\x02yw\x03" +
        "\x02\x02\x02yx\x03\x02\x02\x02z\x05\x03\x02\x02\x02{|\x07\x03\x02\x02" +
        "|}\x07\x04\x02\x02}\x07\x03\x02\x02\x02~\x7F\x07\x04\x02\x02\x7F\x80\x07" +
        "\x03\x02\x02\x80\x81\x07\x03\x02\x02\x81\x82\x07\x03\x02\x02\x82\t\x03" +
        "\x02\x02\x02\x83\x84\x07\x04\x02\x02\x84\x85\x07\x03\x02\x02\x85\x86\x07" +
        "\x04\x02\x02\x86\x87\x07\x03\x02\x02\x87\v\x03\x02\x02\x02\x88\x89\x07" +
        "\x04\x02\x02\x89\x8A\x07\x03\x02\x02\x8A\x8B\x07\x03\x02\x02\x8B\r\x03" +
        "\x02\x02\x02\x8C\x8D\x07\x03\x02\x02\x8D\x0F\x03\x02\x02\x02\x8E\x8F\x07" +
        "\x03\x02\x02\x8F\x90\x07\x03\x02\x02\x90\x91\x07\x04\x02\x02\x91\x92\x07" +
        "\x03\x02\x02\x92\x11\x03\x02\x02\x02\x93\x94\x07\x04\x02\x02\x94\x95\x07" +
        "\x04\x02\x02\x95\x96\x07\x03\x02\x02\x96\x13\x03\x02\x02\x02\x97\x98\x07" +
        "\x03\x02\x02\x98\x99\x07\x03\x02\x02\x99\x9A\x07\x03\x02\x02\x9A\x9B\x07" +
        "\x03\x02\x02\x9B\x15\x03\x02\x02\x02\x9C\x9D\x07\x03\x02\x02\x9D\x9E\x07" +
        "\x03\x02\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07\x03\x02\x02\xA0\xA1\x07" +
        "\x04\x02\x02\xA1\xA2\x07\x04\x02\x02\xA2\xA3\x07\x04\x02\x02\xA3\x19\x03" +
        "\x02\x02\x02\xA4\xA5\x07\x04\x02\x02\xA5\xA6\x07\x03\x02\x02\xA6\xA7\x07" +
        "\x04\x02\x02\xA7\x1B\x03\x02\x02\x02\xA8\xA9\x07\x03\x02\x02\xA9\xAA\x07" +
        "\x04\x02\x02\xAA\xAB\x07\x03\x02\x02\xAB\xAC\x07\x03\x02\x02\xAC\x1D\x03" +
        "\x02\x02\x02\xAD\xAE\x07\x04\x02\x02\xAE\xAF\x07\x04\x02\x02\xAF\x1F\x03" +
        "\x02\x02\x02\xB0\xB1\x07\x04\x02\x02\xB1\xB2\x07\x03\x02\x02\xB2!\x03" +
        "\x02\x02\x02\xB3\xB4\x07\x04\x02\x02\xB4\xB5\x07\x04\x02\x02\xB5\xB6\x07" +
        "\x04\x02\x02\xB6#\x03\x02\x02\x02\xB7\xB8\x07\x03\x02\x02\xB8\xB9\x07" +
        "\x04\x02\x02\xB9\xBA\x07\x04\x02\x02\xBA\xBB\x07\x03\x02\x02\xBB%\x03" +
        "\x02\x02\x02\xBC\xBD\x07\x04\x02\x02\xBD\xBE\x07\x04\x02\x02\xBE\xBF\x07" +
        "\x03\x02\x02\xBF\xC0\x07\x04\x02\x02\xC0\'\x03\x02\x02\x02\xC1\xC2\x07" +
        "\x03\x02\x02\xC2\xC3\x07\x04\x02\x02\xC3\xC4\x07\x03\x02\x02\xC4)\x03" +
        "\x02\x02\x02\xC5\xC6\x07\x03\x02\x02\xC6\xC7\x07\x03\x02\x02\xC7\xC8\x07" +
        "\x03\x02\x02\xC8+\x03\x02\x02\x02\xC9\xCA\x07\x04\x02\x02\xCA-\x03\x02" +
        "\x02\x02\xCB\xCC\x07\x03\x02\x02\xCC\xCD\x07\x03\x02\x02\xCD\xCE\x07\x04" +
        "\x02\x02\xCE/\x03\x02\x02\x02\xCF\xD0\x07\x03\x02\x02\xD0\xD1\x07\x03" +
        "\x02\x02\xD1\xD2\x07\x03\x02\x02\xD2\xD3\x07\x04\x02\x02\xD31\x03\x02" +
        "\x02\x02\xD4\xD5\x07\x03\x02\x02\xD5\xD6\x07\x04\x02\x02\xD6\xD7\x07\x04" +
        "\x02\x02\xD73\x03\x02\x02\x02\xD8\xD9\x07\x04\x02\x02\xD9\xDA\x07\x03" +
        "\x02\x02\xDA\xDB\x07\x03\x02\x02\xDB\xDC\x07\x04\x02\x02\xDC5\x03\x02" +
        "\x02\x02\xDD\xDE\x07\x04\x02\x02\xDE\xDF\x07\x03\x02\x02\xDF\xE0\x07\x04" +
        "\x02\x02\xE0\xE1\x07\x04\x02\x02\xE17\x03\x02\x02\x02\xE2\xE3\x07\x04" +
        "\x02\x02\xE3\xE4\x07\x04\x02\x02\xE4\xE5\x07\x03\x02\x02\xE5\xE6\x07\x03" +
        "\x02\x02\xE69\x03\x02\x02\x02\xE7\xE8\x07\x03\x02\x02\xE8\xE9\x07\x04" +
        "\x02\x02\xE9\xEA\x07\x04\x02\x02\xEA\xEB\x07\x04\x02\x02\xEB\xEC\x07\x04" +
        "\x02\x02\xEC;\x03\x02\x02\x02\xED\xEE\x07\x03\x02\x02\xEE\xEF\x07\x03" +
        "\x02\x02\xEF\xF0\x07\x04\x02\x02\xF0\xF1\x07\x04\x02\x02\xF1\xF2\x07\x04" +
        "\x02\x02\xF2=\x03\x02\x02\x02\xF3\xF4\x07\x03\x02\x02\xF4\xF5\x07\x03" +
        "\x02\x02\xF5\xF6\x07\x03\x02\x02\xF6\xF7\x07\x04\x02\x02\xF7\xF8\x07\x04" +
        "\x02\x02\xF8?\x03\x02\x02\x02\xF9\xFA\x07\x03\x02\x02\xFA\xFB\x07\x03" +
        "\x02\x02\xFB\xFC\x07\x03\x02\x02\xFC\xFD\x07\x03\x02\x02\xFD\xFE\x07\x04" +
        "\x02\x02\xFEA\x03\x02\x02\x02\xFF\u0100\x07\x03\x02\x02\u0100\u0101\x07" +
        "\x03\x02\x02\u0101\u0102\x07\x03\x02\x02\u0102\u0103\x07\x03\x02\x02\u0103" +
        "\u0104\x07\x03\x02\x02\u0104C\x03\x02\x02\x02\u0105\u0106\x07\x04\x02" +
        "\x02\u0106\u0107\x07\x03\x02\x02\u0107\u0108\x07\x03\x02\x02\u0108\u0109" +
        "\x07\x03\x02\x02\u0109\u010A\x07\x03\x02\x02\u010AE\x03\x02\x02\x02\u010B" +
        "\u010C\x07\x04\x02\x02\u010C\u010D\x07\x04\x02\x02\u010D\u010E\x07\x03" +
        "\x02\x02\u010E\u010F\x07\x03\x02\x02\u010F\u0110\x07\x03\x02\x02\u0110" +
        "G\x03\x02\x02\x02\u0111\u0112\x07\x04\x02\x02\u0112\u0113\x07\x04\x02" +
        "\x02\u0113\u0114\x07\x04\x02\x02\u0114\u0115\x07\x03\x02\x02\u0115\u0116" +
        "\x07\x03\x02\x02\u0116I\x03\x02\x02\x02\u0117\u0118\x07\x04\x02\x02\u0118" +
        "\u0119\x07\x04\x02\x02\u0119\u011A\x07\x04\x02\x02\u011A\u011B\x07\x04" +
        "\x02\x02\u011B\u011C\x07\x03\x02\x02\u011CK\x03\x02\x02\x02\u011D\u011E" +
        "\x07\x04\x02\x02\u011E\u011F\x07\x04\x02\x02\u011F\u0120\x07\x04\x02\x02" +
        "\u0120\u0121\x07\x04\x02\x02\u0121\u0122\x07\x04\x02\x02\u0122M\x03\x02" +
        "\x02\x02\x04Sy";
    return morsecodeParser;
}(Parser_1.Parser));
exports.morsecodeParser = morsecodeParser;
var MorsecodeContext = /** @class */ (function (_super) {
    __extends(MorsecodeContext, _super);
    function MorsecodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MorsecodeContext.prototype.letter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LetterContext);
        }
        else {
            return this.getRuleContext(i, LetterContext);
        }
    };
    MorsecodeContext.prototype.SPACE = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.SPACE);
        }
        else {
            return this.getToken(morsecodeParser.SPACE, i);
        }
    };
    Object.defineProperty(MorsecodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_morsecode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MorsecodeContext.prototype.enterRule = function (listener) {
        if (listener.enterMorsecode) {
            listener.enterMorsecode(this);
        }
    };
    // @Override
    MorsecodeContext.prototype.exitRule = function (listener) {
        if (listener.exitMorsecode) {
            listener.exitMorsecode(this);
        }
    };
    // @Override
    MorsecodeContext.prototype.accept = function (visitor) {
        if (visitor.visitMorsecode) {
            return visitor.visitMorsecode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MorsecodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MorsecodeContext = MorsecodeContext;
var LetterContext = /** @class */ (function (_super) {
    __extends(LetterContext, _super);
    function LetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LetterContext.prototype.a = function () {
        return this.tryGetRuleContext(0, AContext);
    };
    LetterContext.prototype.b = function () {
        return this.tryGetRuleContext(0, BContext);
    };
    LetterContext.prototype.c = function () {
        return this.tryGetRuleContext(0, CContext);
    };
    LetterContext.prototype.d = function () {
        return this.tryGetRuleContext(0, DContext);
    };
    LetterContext.prototype.e = function () {
        return this.tryGetRuleContext(0, EContext);
    };
    LetterContext.prototype.f = function () {
        return this.tryGetRuleContext(0, FContext);
    };
    LetterContext.prototype.g = function () {
        return this.tryGetRuleContext(0, GContext);
    };
    LetterContext.prototype.h = function () {
        return this.tryGetRuleContext(0, HContext);
    };
    LetterContext.prototype.i = function () {
        return this.tryGetRuleContext(0, IContext);
    };
    LetterContext.prototype.j = function () {
        return this.tryGetRuleContext(0, JContext);
    };
    LetterContext.prototype.k = function () {
        return this.tryGetRuleContext(0, KContext);
    };
    LetterContext.prototype.l = function () {
        return this.tryGetRuleContext(0, LContext);
    };
    LetterContext.prototype.m = function () {
        return this.tryGetRuleContext(0, MContext);
    };
    LetterContext.prototype.n = function () {
        return this.tryGetRuleContext(0, NContext);
    };
    LetterContext.prototype.o = function () {
        return this.tryGetRuleContext(0, OContext);
    };
    LetterContext.prototype.p = function () {
        return this.tryGetRuleContext(0, PContext);
    };
    LetterContext.prototype.q = function () {
        return this.tryGetRuleContext(0, QContext);
    };
    LetterContext.prototype.r = function () {
        return this.tryGetRuleContext(0, RContext);
    };
    LetterContext.prototype.s = function () {
        return this.tryGetRuleContext(0, SContext);
    };
    LetterContext.prototype.t = function () {
        return this.tryGetRuleContext(0, TContext);
    };
    LetterContext.prototype.u = function () {
        return this.tryGetRuleContext(0, UContext);
    };
    LetterContext.prototype.v = function () {
        return this.tryGetRuleContext(0, VContext);
    };
    LetterContext.prototype.w = function () {
        return this.tryGetRuleContext(0, WContext);
    };
    LetterContext.prototype.x = function () {
        return this.tryGetRuleContext(0, XContext);
    };
    LetterContext.prototype.y = function () {
        return this.tryGetRuleContext(0, YContext);
    };
    LetterContext.prototype.z = function () {
        return this.tryGetRuleContext(0, ZContext);
    };
    LetterContext.prototype.one = function () {
        return this.tryGetRuleContext(0, OneContext);
    };
    LetterContext.prototype.two = function () {
        return this.tryGetRuleContext(0, TwoContext);
    };
    LetterContext.prototype.three = function () {
        return this.tryGetRuleContext(0, ThreeContext);
    };
    LetterContext.prototype.four = function () {
        return this.tryGetRuleContext(0, FourContext);
    };
    LetterContext.prototype.five = function () {
        return this.tryGetRuleContext(0, FiveContext);
    };
    LetterContext.prototype.six = function () {
        return this.tryGetRuleContext(0, SixContext);
    };
    LetterContext.prototype.seven = function () {
        return this.tryGetRuleContext(0, SevenContext);
    };
    LetterContext.prototype.eight = function () {
        return this.tryGetRuleContext(0, EightContext);
    };
    LetterContext.prototype.nine = function () {
        return this.tryGetRuleContext(0, NineContext);
    };
    LetterContext.prototype.zero = function () {
        return this.tryGetRuleContext(0, ZeroContext);
    };
    Object.defineProperty(LetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_letter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LetterContext.prototype.enterRule = function (listener) {
        if (listener.enterLetter) {
            listener.enterLetter(this);
        }
    };
    // @Override
    LetterContext.prototype.exitRule = function (listener) {
        if (listener.exitLetter) {
            listener.exitLetter(this);
        }
    };
    // @Override
    LetterContext.prototype.accept = function (visitor) {
        if (visitor.visitLetter) {
            return visitor.visitLetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LetterContext = LetterContext;
var AContext = /** @class */ (function (_super) {
    __extends(AContext, _super);
    function AContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    AContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    Object.defineProperty(AContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AContext.prototype.enterRule = function (listener) {
        if (listener.enterA) {
            listener.enterA(this);
        }
    };
    // @Override
    AContext.prototype.exitRule = function (listener) {
        if (listener.exitA) {
            listener.exitA(this);
        }
    };
    // @Override
    AContext.prototype.accept = function (visitor) {
        if (visitor.visitA) {
            return visitor.visitA(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AContext = AContext;
var BContext = /** @class */ (function (_super) {
    __extends(BContext, _super);
    function BContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    BContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(BContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_b; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BContext.prototype.enterRule = function (listener) {
        if (listener.enterB) {
            listener.enterB(this);
        }
    };
    // @Override
    BContext.prototype.exitRule = function (listener) {
        if (listener.exitB) {
            listener.exitB(this);
        }
    };
    // @Override
    BContext.prototype.accept = function (visitor) {
        if (visitor.visitB) {
            return visitor.visitB(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BContext = BContext;
var CContext = /** @class */ (function (_super) {
    __extends(CContext, _super);
    function CContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    CContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(CContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_c; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CContext.prototype.enterRule = function (listener) {
        if (listener.enterC) {
            listener.enterC(this);
        }
    };
    // @Override
    CContext.prototype.exitRule = function (listener) {
        if (listener.exitC) {
            listener.exitC(this);
        }
    };
    // @Override
    CContext.prototype.accept = function (visitor) {
        if (visitor.visitC) {
            return visitor.visitC(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CContext = CContext;
var DContext = /** @class */ (function (_super) {
    __extends(DContext, _super);
    function DContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    DContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(DContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_d; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DContext.prototype.enterRule = function (listener) {
        if (listener.enterD) {
            listener.enterD(this);
        }
    };
    // @Override
    DContext.prototype.exitRule = function (listener) {
        if (listener.exitD) {
            listener.exitD(this);
        }
    };
    // @Override
    DContext.prototype.accept = function (visitor) {
        if (visitor.visitD) {
            return visitor.visitD(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DContext = DContext;
var EContext = /** @class */ (function (_super) {
    __extends(EContext, _super);
    function EContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    Object.defineProperty(EContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_e; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EContext.prototype.enterRule = function (listener) {
        if (listener.enterE) {
            listener.enterE(this);
        }
    };
    // @Override
    EContext.prototype.exitRule = function (listener) {
        if (listener.exitE) {
            listener.exitE(this);
        }
    };
    // @Override
    EContext.prototype.accept = function (visitor) {
        if (visitor.visitE) {
            return visitor.visitE(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EContext = EContext;
var FContext = /** @class */ (function (_super) {
    __extends(FContext, _super);
    function FContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    FContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    Object.defineProperty(FContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_f; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FContext.prototype.enterRule = function (listener) {
        if (listener.enterF) {
            listener.enterF(this);
        }
    };
    // @Override
    FContext.prototype.exitRule = function (listener) {
        if (listener.exitF) {
            listener.exitF(this);
        }
    };
    // @Override
    FContext.prototype.accept = function (visitor) {
        if (visitor.visitF) {
            return visitor.visitF(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FContext = FContext;
var GContext = /** @class */ (function (_super) {
    __extends(GContext, _super);
    function GContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    GContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    Object.defineProperty(GContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_g; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GContext.prototype.enterRule = function (listener) {
        if (listener.enterG) {
            listener.enterG(this);
        }
    };
    // @Override
    GContext.prototype.exitRule = function (listener) {
        if (listener.exitG) {
            listener.exitG(this);
        }
    };
    // @Override
    GContext.prototype.accept = function (visitor) {
        if (visitor.visitG) {
            return visitor.visitG(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GContext = GContext;
var HContext = /** @class */ (function (_super) {
    __extends(HContext, _super);
    function HContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(HContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_h; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HContext.prototype.enterRule = function (listener) {
        if (listener.enterH) {
            listener.enterH(this);
        }
    };
    // @Override
    HContext.prototype.exitRule = function (listener) {
        if (listener.exitH) {
            listener.exitH(this);
        }
    };
    // @Override
    HContext.prototype.accept = function (visitor) {
        if (visitor.visitH) {
            return visitor.visitH(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HContext = HContext;
var IContext = /** @class */ (function (_super) {
    __extends(IContext, _super);
    function IContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(IContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_i; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IContext.prototype.enterRule = function (listener) {
        if (listener.enterI) {
            listener.enterI(this);
        }
    };
    // @Override
    IContext.prototype.exitRule = function (listener) {
        if (listener.exitI) {
            listener.exitI(this);
        }
    };
    // @Override
    IContext.prototype.accept = function (visitor) {
        if (visitor.visitI) {
            return visitor.visitI(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IContext = IContext;
var JContext = /** @class */ (function (_super) {
    __extends(JContext, _super);
    function JContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    JContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    JContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(JContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_j; },
        enumerable: true,
        configurable: true
    });
    // @Override
    JContext.prototype.enterRule = function (listener) {
        if (listener.enterJ) {
            listener.enterJ(this);
        }
    };
    // @Override
    JContext.prototype.exitRule = function (listener) {
        if (listener.exitJ) {
            listener.exitJ(this);
        }
    };
    // @Override
    JContext.prototype.accept = function (visitor) {
        if (visitor.visitJ) {
            return visitor.visitJ(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return JContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.JContext = JContext;
var KContext = /** @class */ (function (_super) {
    __extends(KContext, _super);
    function KContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    KContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    Object.defineProperty(KContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_k; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KContext.prototype.enterRule = function (listener) {
        if (listener.enterK) {
            listener.enterK(this);
        }
    };
    // @Override
    KContext.prototype.exitRule = function (listener) {
        if (listener.exitK) {
            listener.exitK(this);
        }
    };
    // @Override
    KContext.prototype.accept = function (visitor) {
        if (visitor.visitK) {
            return visitor.visitK(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KContext = KContext;
var LContext = /** @class */ (function (_super) {
    __extends(LContext, _super);
    function LContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    LContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    Object.defineProperty(LContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_l; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LContext.prototype.enterRule = function (listener) {
        if (listener.enterL) {
            listener.enterL(this);
        }
    };
    // @Override
    LContext.prototype.exitRule = function (listener) {
        if (listener.exitL) {
            listener.exitL(this);
        }
    };
    // @Override
    LContext.prototype.accept = function (visitor) {
        if (visitor.visitL) {
            return visitor.visitL(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LContext = LContext;
var MContext = /** @class */ (function (_super) {
    __extends(MContext, _super);
    function MContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(MContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_m; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MContext.prototype.enterRule = function (listener) {
        if (listener.enterM) {
            listener.enterM(this);
        }
    };
    // @Override
    MContext.prototype.exitRule = function (listener) {
        if (listener.exitM) {
            listener.exitM(this);
        }
    };
    // @Override
    MContext.prototype.accept = function (visitor) {
        if (visitor.visitM) {
            return visitor.visitM(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MContext = MContext;
var NContext = /** @class */ (function (_super) {
    __extends(NContext, _super);
    function NContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    NContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    Object.defineProperty(NContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_n; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NContext.prototype.enterRule = function (listener) {
        if (listener.enterN) {
            listener.enterN(this);
        }
    };
    // @Override
    NContext.prototype.exitRule = function (listener) {
        if (listener.exitN) {
            listener.exitN(this);
        }
    };
    // @Override
    NContext.prototype.accept = function (visitor) {
        if (visitor.visitN) {
            return visitor.visitN(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NContext = NContext;
var OContext = /** @class */ (function (_super) {
    __extends(OContext, _super);
    function OContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(OContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_o; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OContext.prototype.enterRule = function (listener) {
        if (listener.enterO) {
            listener.enterO(this);
        }
    };
    // @Override
    OContext.prototype.exitRule = function (listener) {
        if (listener.exitO) {
            listener.exitO(this);
        }
    };
    // @Override
    OContext.prototype.accept = function (visitor) {
        if (visitor.visitO) {
            return visitor.visitO(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OContext = OContext;
var PContext = /** @class */ (function (_super) {
    __extends(PContext, _super);
    function PContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    PContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(PContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_p; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PContext.prototype.enterRule = function (listener) {
        if (listener.enterP) {
            listener.enterP(this);
        }
    };
    // @Override
    PContext.prototype.exitRule = function (listener) {
        if (listener.exitP) {
            listener.exitP(this);
        }
    };
    // @Override
    PContext.prototype.accept = function (visitor) {
        if (visitor.visitP) {
            return visitor.visitP(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PContext = PContext;
var QContext = /** @class */ (function (_super) {
    __extends(QContext, _super);
    function QContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    QContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    Object.defineProperty(QContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_q; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QContext.prototype.enterRule = function (listener) {
        if (listener.enterQ) {
            listener.enterQ(this);
        }
    };
    // @Override
    QContext.prototype.exitRule = function (listener) {
        if (listener.exitQ) {
            listener.exitQ(this);
        }
    };
    // @Override
    QContext.prototype.accept = function (visitor) {
        if (visitor.visitQ) {
            return visitor.visitQ(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QContext = QContext;
var RContext = /** @class */ (function (_super) {
    __extends(RContext, _super);
    function RContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    RContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    Object.defineProperty(RContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_r; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RContext.prototype.enterRule = function (listener) {
        if (listener.enterR) {
            listener.enterR(this);
        }
    };
    // @Override
    RContext.prototype.exitRule = function (listener) {
        if (listener.exitR) {
            listener.exitR(this);
        }
    };
    // @Override
    RContext.prototype.accept = function (visitor) {
        if (visitor.visitR) {
            return visitor.visitR(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RContext = RContext;
var SContext = /** @class */ (function (_super) {
    __extends(SContext, _super);
    function SContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(SContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_s; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SContext.prototype.enterRule = function (listener) {
        if (listener.enterS) {
            listener.enterS(this);
        }
    };
    // @Override
    SContext.prototype.exitRule = function (listener) {
        if (listener.exitS) {
            listener.exitS(this);
        }
    };
    // @Override
    SContext.prototype.accept = function (visitor) {
        if (visitor.visitS) {
            return visitor.visitS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SContext = SContext;
var TContext = /** @class */ (function (_super) {
    __extends(TContext, _super);
    function TContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    Object.defineProperty(TContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_t; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TContext.prototype.enterRule = function (listener) {
        if (listener.enterT) {
            listener.enterT(this);
        }
    };
    // @Override
    TContext.prototype.exitRule = function (listener) {
        if (listener.exitT) {
            listener.exitT(this);
        }
    };
    // @Override
    TContext.prototype.accept = function (visitor) {
        if (visitor.visitT) {
            return visitor.visitT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TContext = TContext;
var UContext = /** @class */ (function (_super) {
    __extends(UContext, _super);
    function UContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    UContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    Object.defineProperty(UContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_u; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UContext.prototype.enterRule = function (listener) {
        if (listener.enterU) {
            listener.enterU(this);
        }
    };
    // @Override
    UContext.prototype.exitRule = function (listener) {
        if (listener.exitU) {
            listener.exitU(this);
        }
    };
    // @Override
    UContext.prototype.accept = function (visitor) {
        if (visitor.visitU) {
            return visitor.visitU(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UContext = UContext;
var VContext = /** @class */ (function (_super) {
    __extends(VContext, _super);
    function VContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    VContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    Object.defineProperty(VContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_v; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VContext.prototype.enterRule = function (listener) {
        if (listener.enterV) {
            listener.enterV(this);
        }
    };
    // @Override
    VContext.prototype.exitRule = function (listener) {
        if (listener.exitV) {
            listener.exitV(this);
        }
    };
    // @Override
    VContext.prototype.accept = function (visitor) {
        if (visitor.visitV) {
            return visitor.visitV(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VContext = VContext;
var WContext = /** @class */ (function (_super) {
    __extends(WContext, _super);
    function WContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    WContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(WContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_w; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WContext.prototype.enterRule = function (listener) {
        if (listener.enterW) {
            listener.enterW(this);
        }
    };
    // @Override
    WContext.prototype.exitRule = function (listener) {
        if (listener.exitW) {
            listener.exitW(this);
        }
    };
    // @Override
    WContext.prototype.accept = function (visitor) {
        if (visitor.visitW) {
            return visitor.visitW(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WContext = WContext;
var XContext = /** @class */ (function (_super) {
    __extends(XContext, _super);
    function XContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    XContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    XContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(XContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_x; },
        enumerable: true,
        configurable: true
    });
    // @Override
    XContext.prototype.enterRule = function (listener) {
        if (listener.enterX) {
            listener.enterX(this);
        }
    };
    // @Override
    XContext.prototype.exitRule = function (listener) {
        if (listener.exitX) {
            listener.exitX(this);
        }
    };
    // @Override
    XContext.prototype.accept = function (visitor) {
        if (visitor.visitX) {
            return visitor.visitX(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return XContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.XContext = XContext;
var YContext = /** @class */ (function (_super) {
    __extends(YContext, _super);
    function YContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    YContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    YContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    Object.defineProperty(YContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_y; },
        enumerable: true,
        configurable: true
    });
    // @Override
    YContext.prototype.enterRule = function (listener) {
        if (listener.enterY) {
            listener.enterY(this);
        }
    };
    // @Override
    YContext.prototype.exitRule = function (listener) {
        if (listener.exitY) {
            listener.exitY(this);
        }
    };
    // @Override
    YContext.prototype.accept = function (visitor) {
        if (visitor.visitY) {
            return visitor.visitY(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.YContext = YContext;
var ZContext = /** @class */ (function (_super) {
    __extends(ZContext, _super);
    function ZContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ZContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    ZContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(ZContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_z; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ZContext.prototype.enterRule = function (listener) {
        if (listener.enterZ) {
            listener.enterZ(this);
        }
    };
    // @Override
    ZContext.prototype.exitRule = function (listener) {
        if (listener.exitZ) {
            listener.exitZ(this);
        }
    };
    // @Override
    ZContext.prototype.accept = function (visitor) {
        if (visitor.visitZ) {
            return visitor.visitZ(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ZContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ZContext = ZContext;
var OneContext = /** @class */ (function (_super) {
    __extends(OneContext, _super);
    function OneContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OneContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    OneContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(OneContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_one; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OneContext.prototype.enterRule = function (listener) {
        if (listener.enterOne) {
            listener.enterOne(this);
        }
    };
    // @Override
    OneContext.prototype.exitRule = function (listener) {
        if (listener.exitOne) {
            listener.exitOne(this);
        }
    };
    // @Override
    OneContext.prototype.accept = function (visitor) {
        if (visitor.visitOne) {
            return visitor.visitOne(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OneContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OneContext = OneContext;
var TwoContext = /** @class */ (function (_super) {
    __extends(TwoContext, _super);
    function TwoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TwoContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    TwoContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(TwoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_two; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TwoContext.prototype.enterRule = function (listener) {
        if (listener.enterTwo) {
            listener.enterTwo(this);
        }
    };
    // @Override
    TwoContext.prototype.exitRule = function (listener) {
        if (listener.exitTwo) {
            listener.exitTwo(this);
        }
    };
    // @Override
    TwoContext.prototype.accept = function (visitor) {
        if (visitor.visitTwo) {
            return visitor.visitTwo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TwoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TwoContext = TwoContext;
var ThreeContext = /** @class */ (function (_super) {
    __extends(ThreeContext, _super);
    function ThreeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThreeContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    ThreeContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(ThreeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_three; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThreeContext.prototype.enterRule = function (listener) {
        if (listener.enterThree) {
            listener.enterThree(this);
        }
    };
    // @Override
    ThreeContext.prototype.exitRule = function (listener) {
        if (listener.exitThree) {
            listener.exitThree(this);
        }
    };
    // @Override
    ThreeContext.prototype.accept = function (visitor) {
        if (visitor.visitThree) {
            return visitor.visitThree(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThreeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThreeContext = ThreeContext;
var FourContext = /** @class */ (function (_super) {
    __extends(FourContext, _super);
    function FourContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FourContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    FourContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    Object.defineProperty(FourContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_four; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FourContext.prototype.enterRule = function (listener) {
        if (listener.enterFour) {
            listener.enterFour(this);
        }
    };
    // @Override
    FourContext.prototype.exitRule = function (listener) {
        if (listener.exitFour) {
            listener.exitFour(this);
        }
    };
    // @Override
    FourContext.prototype.accept = function (visitor) {
        if (visitor.visitFour) {
            return visitor.visitFour(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FourContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FourContext = FourContext;
var FiveContext = /** @class */ (function (_super) {
    __extends(FiveContext, _super);
    function FiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FiveContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(FiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_five; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FiveContext.prototype.enterRule = function (listener) {
        if (listener.enterFive) {
            listener.enterFive(this);
        }
    };
    // @Override
    FiveContext.prototype.exitRule = function (listener) {
        if (listener.exitFive) {
            listener.exitFive(this);
        }
    };
    // @Override
    FiveContext.prototype.accept = function (visitor) {
        if (visitor.visitFive) {
            return visitor.visitFive(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FiveContext = FiveContext;
var SixContext = /** @class */ (function (_super) {
    __extends(SixContext, _super);
    function SixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SixContext.prototype.DASH = function () { return this.getToken(morsecodeParser.DASH, 0); };
    SixContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(SixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_six; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SixContext.prototype.enterRule = function (listener) {
        if (listener.enterSix) {
            listener.enterSix(this);
        }
    };
    // @Override
    SixContext.prototype.exitRule = function (listener) {
        if (listener.exitSix) {
            listener.exitSix(this);
        }
    };
    // @Override
    SixContext.prototype.accept = function (visitor) {
        if (visitor.visitSix) {
            return visitor.visitSix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SixContext = SixContext;
var SevenContext = /** @class */ (function (_super) {
    __extends(SevenContext, _super);
    function SevenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SevenContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    SevenContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(SevenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_seven; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SevenContext.prototype.enterRule = function (listener) {
        if (listener.enterSeven) {
            listener.enterSeven(this);
        }
    };
    // @Override
    SevenContext.prototype.exitRule = function (listener) {
        if (listener.exitSeven) {
            listener.exitSeven(this);
        }
    };
    // @Override
    SevenContext.prototype.accept = function (visitor) {
        if (visitor.visitSeven) {
            return visitor.visitSeven(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SevenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SevenContext = SevenContext;
var EightContext = /** @class */ (function (_super) {
    __extends(EightContext, _super);
    function EightContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EightContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    EightContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DOT);
        }
        else {
            return this.getToken(morsecodeParser.DOT, i);
        }
    };
    Object.defineProperty(EightContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_eight; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EightContext.prototype.enterRule = function (listener) {
        if (listener.enterEight) {
            listener.enterEight(this);
        }
    };
    // @Override
    EightContext.prototype.exitRule = function (listener) {
        if (listener.exitEight) {
            listener.exitEight(this);
        }
    };
    // @Override
    EightContext.prototype.accept = function (visitor) {
        if (visitor.visitEight) {
            return visitor.visitEight(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EightContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EightContext = EightContext;
var NineContext = /** @class */ (function (_super) {
    __extends(NineContext, _super);
    function NineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NineContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    NineContext.prototype.DOT = function () { return this.getToken(morsecodeParser.DOT, 0); };
    Object.defineProperty(NineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_nine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NineContext.prototype.enterRule = function (listener) {
        if (listener.enterNine) {
            listener.enterNine(this);
        }
    };
    // @Override
    NineContext.prototype.exitRule = function (listener) {
        if (listener.exitNine) {
            listener.exitNine(this);
        }
    };
    // @Override
    NineContext.prototype.accept = function (visitor) {
        if (visitor.visitNine) {
            return visitor.visitNine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NineContext = NineContext;
var ZeroContext = /** @class */ (function (_super) {
    __extends(ZeroContext, _super);
    function ZeroContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ZeroContext.prototype.DASH = function (i) {
        if (i === undefined) {
            return this.getTokens(morsecodeParser.DASH);
        }
        else {
            return this.getToken(morsecodeParser.DASH, i);
        }
    };
    Object.defineProperty(ZeroContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return morsecodeParser.RULE_zero; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ZeroContext.prototype.enterRule = function (listener) {
        if (listener.enterZero) {
            listener.enterZero(this);
        }
    };
    // @Override
    ZeroContext.prototype.exitRule = function (listener) {
        if (listener.exitZero) {
            listener.exitZero(this);
        }
    };
    // @Override
    ZeroContext.prototype.accept = function (visitor) {
        if (visitor.visitZero) {
            return visitor.visitZero(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ZeroContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ZeroContext = ZeroContext;
