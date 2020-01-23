"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinybasic/tinybasic.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tinybasicParser = /** @class */ (function (_super) {
    __extends(tinybasicParser, _super);
    function tinybasicParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(tinybasicParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(tinybasicParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tinybasicParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "tinybasic.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicParser.prototype, "ruleNames", {
        // @Override
        get: function () { return tinybasicParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicParser.prototype, "serializedATN", {
        // @Override
        get: function () { return tinybasicParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    tinybasicParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tinybasicParser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tinybasicParser.T__0) | (1 << tinybasicParser.T__1) | (1 << tinybasicParser.T__3) | (1 << tinybasicParser.T__4) | (1 << tinybasicParser.T__5) | (1 << tinybasicParser.T__7) | (1 << tinybasicParser.T__8) | (1 << tinybasicParser.T__9) | (1 << tinybasicParser.T__10) | (1 << tinybasicParser.T__11) | (1 << tinybasicParser.T__12) | (1 << tinybasicParser.STRING) | (1 << tinybasicParser.DIGIT) | (1 << tinybasicParser.VAR))) !== 0)) {
                    {
                        {
                            this.state = 22;
                            this.line();
                        }
                    }
                    this.state = 27;
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
    tinybasicParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, tinybasicParser.RULE_line);
        try {
            this.state = 35;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinybasicParser.DIGIT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 28;
                        this.number();
                        this.state = 29;
                        this.statement();
                        this.state = 30;
                        this.match(tinybasicParser.CR);
                    }
                    break;
                case tinybasicParser.T__0:
                case tinybasicParser.T__1:
                case tinybasicParser.T__3:
                case tinybasicParser.T__4:
                case tinybasicParser.T__5:
                case tinybasicParser.T__7:
                case tinybasicParser.T__8:
                case tinybasicParser.T__9:
                case tinybasicParser.T__10:
                case tinybasicParser.T__11:
                case tinybasicParser.T__12:
                case tinybasicParser.STRING:
                case tinybasicParser.VAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 32;
                        this.statement();
                        this.state = 33;
                        this.match(tinybasicParser.CR);
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
    tinybasicParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tinybasicParser.RULE_statement);
        var _la;
        try {
            this.state = 66;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinybasicParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 37;
                        this.match(tinybasicParser.T__0);
                        this.state = 38;
                        this.exprlist();
                    }
                    break;
                case tinybasicParser.T__1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 39;
                        this.match(tinybasicParser.T__1);
                        this.state = 40;
                        this.expression();
                        this.state = 41;
                        this.relop();
                        this.state = 42;
                        this.expression();
                        this.state = 44;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === tinybasicParser.T__2) {
                            {
                                this.state = 43;
                                this.match(tinybasicParser.T__2);
                            }
                        }
                        this.state = 46;
                        this.statement();
                    }
                    break;
                case tinybasicParser.T__3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 48;
                        this.match(tinybasicParser.T__3);
                        this.state = 49;
                        this.number();
                    }
                    break;
                case tinybasicParser.T__4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 50;
                        this.match(tinybasicParser.T__4);
                        this.state = 51;
                        this.varlist();
                    }
                    break;
                case tinybasicParser.T__5:
                case tinybasicParser.STRING:
                case tinybasicParser.VAR:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 53;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === tinybasicParser.T__5) {
                            {
                                this.state = 52;
                                this.match(tinybasicParser.T__5);
                            }
                        }
                        this.state = 55;
                        this.vara();
                        this.state = 56;
                        this.match(tinybasicParser.T__6);
                        this.state = 57;
                        this.expression();
                    }
                    break;
                case tinybasicParser.T__7:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 59;
                        this.match(tinybasicParser.T__7);
                        this.state = 60;
                        this.expression();
                    }
                    break;
                case tinybasicParser.T__8:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 61;
                        this.match(tinybasicParser.T__8);
                    }
                    break;
                case tinybasicParser.T__9:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 62;
                        this.match(tinybasicParser.T__9);
                    }
                    break;
                case tinybasicParser.T__10:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 63;
                        this.match(tinybasicParser.T__10);
                    }
                    break;
                case tinybasicParser.T__11:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 64;
                        this.match(tinybasicParser.T__11);
                    }
                    break;
                case tinybasicParser.T__12:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 65;
                        this.match(tinybasicParser.T__12);
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
    tinybasicParser.prototype.exprlist = function () {
        var _localctx = new ExprlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tinybasicParser.RULE_exprlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 68;
                            this.match(tinybasicParser.STRING);
                        }
                        break;
                    case 2:
                        {
                            this.state = 69;
                            this.expression();
                        }
                        break;
                }
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tinybasicParser.T__13) {
                    {
                        {
                            this.state = 72;
                            this.match(tinybasicParser.T__13);
                            this.state = 75;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 73;
                                        this.match(tinybasicParser.STRING);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 74;
                                        this.expression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 81;
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
    tinybasicParser.prototype.varlist = function () {
        var _localctx = new VarlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, tinybasicParser.RULE_varlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.vara();
                this.state = 87;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tinybasicParser.T__13) {
                    {
                        {
                            this.state = 83;
                            this.match(tinybasicParser.T__13);
                            this.state = 84;
                            this.vara();
                        }
                    }
                    this.state = 89;
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
    tinybasicParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, tinybasicParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 91;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tinybasicParser.T__14 || _la === tinybasicParser.T__15) {
                    {
                        this.state = 90;
                        _la = this._input.LA(1);
                        if (!(_la === tinybasicParser.T__14 || _la === tinybasicParser.T__15)) {
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
                this.state = 93;
                this.term();
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tinybasicParser.T__14 || _la === tinybasicParser.T__15) {
                    {
                        {
                            this.state = 94;
                            _la = this._input.LA(1);
                            if (!(_la === tinybasicParser.T__14 || _la === tinybasicParser.T__15)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 95;
                            this.term();
                        }
                    }
                    this.state = 100;
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
    tinybasicParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, tinybasicParser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.factor();
                this.state = 106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tinybasicParser.T__16 || _la === tinybasicParser.T__17) {
                    {
                        {
                            this.state = 102;
                            _la = this._input.LA(1);
                            if (!(_la === tinybasicParser.T__16 || _la === tinybasicParser.T__17)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 103;
                            this.factor();
                        }
                    }
                    this.state = 108;
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
    tinybasicParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, tinybasicParser.RULE_factor);
        try {
            this.state = 111;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinybasicParser.STRING:
                case tinybasicParser.VAR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 109;
                        this.vara();
                    }
                    break;
                case tinybasicParser.DIGIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 110;
                        this.number();
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
    tinybasicParser.prototype.vara = function () {
        var _localctx = new VaraContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, tinybasicParser.RULE_vara);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                _la = this._input.LA(1);
                if (!(_la === tinybasicParser.STRING || _la === tinybasicParser.VAR)) {
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
    tinybasicParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, tinybasicParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 115;
                            this.match(tinybasicParser.DIGIT);
                        }
                    }
                    this.state = 118;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === tinybasicParser.DIGIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinybasicParser.prototype.relop = function () {
        var _localctx = new RelopContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, tinybasicParser.RULE_relop);
        var _la;
        try {
            this.state = 129;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinybasicParser.T__18:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 120;
                            this.match(tinybasicParser.T__18);
                            this.state = 122;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === tinybasicParser.T__6 || _la === tinybasicParser.T__19) {
                                {
                                    this.state = 121;
                                    _la = this._input.LA(1);
                                    if (!(_la === tinybasicParser.T__6 || _la === tinybasicParser.T__19)) {
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
                    break;
                case tinybasicParser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 124;
                            this.match(tinybasicParser.T__19);
                            this.state = 126;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === tinybasicParser.T__6 || _la === tinybasicParser.T__18) {
                                {
                                    this.state = 125;
                                    _la = this._input.LA(1);
                                    if (!(_la === tinybasicParser.T__6 || _la === tinybasicParser.T__18)) {
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
                    break;
                case tinybasicParser.T__6:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 128;
                        this.match(tinybasicParser.T__6);
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
    Object.defineProperty(tinybasicParser, "_ATN", {
        get: function () {
            if (!tinybasicParser.__ATN) {
                tinybasicParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tinybasicParser._serializedATN));
            }
            return tinybasicParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tinybasicParser.T__0 = 1;
    tinybasicParser.T__1 = 2;
    tinybasicParser.T__2 = 3;
    tinybasicParser.T__3 = 4;
    tinybasicParser.T__4 = 5;
    tinybasicParser.T__5 = 6;
    tinybasicParser.T__6 = 7;
    tinybasicParser.T__7 = 8;
    tinybasicParser.T__8 = 9;
    tinybasicParser.T__9 = 10;
    tinybasicParser.T__10 = 11;
    tinybasicParser.T__11 = 12;
    tinybasicParser.T__12 = 13;
    tinybasicParser.T__13 = 14;
    tinybasicParser.T__14 = 15;
    tinybasicParser.T__15 = 16;
    tinybasicParser.T__16 = 17;
    tinybasicParser.T__17 = 18;
    tinybasicParser.T__18 = 19;
    tinybasicParser.T__19 = 20;
    tinybasicParser.STRING = 21;
    tinybasicParser.DIGIT = 22;
    tinybasicParser.VAR = 23;
    tinybasicParser.CR = 24;
    tinybasicParser.WS = 25;
    tinybasicParser.RULE_program = 0;
    tinybasicParser.RULE_line = 1;
    tinybasicParser.RULE_statement = 2;
    tinybasicParser.RULE_exprlist = 3;
    tinybasicParser.RULE_varlist = 4;
    tinybasicParser.RULE_expression = 5;
    tinybasicParser.RULE_term = 6;
    tinybasicParser.RULE_factor = 7;
    tinybasicParser.RULE_vara = 8;
    tinybasicParser.RULE_number = 9;
    tinybasicParser.RULE_relop = 10;
    // tslint:disable:no-trailing-whitespace
    tinybasicParser.ruleNames = [
        "program", "line", "statement", "exprlist", "varlist", "expression", "term",
        "factor", "vara", "number", "relop",
    ];
    tinybasicParser._LITERAL_NAMES = [
        undefined, "'PRINT'", "'IF'", "'THEN'", "'GOTO'", "'INPUT'", "'LET'",
        "'='", "'GOSUB'", "'RETURN'", "'CLEAR'", "'LIST'", "'RUN'", "'END'", "','",
        "'+'", "'-'", "'*'", "'/'", "'<'", "'>'",
    ];
    tinybasicParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "STRING", "DIGIT", "VAR", "CR", "WS",
    ];
    tinybasicParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tinybasicParser._LITERAL_NAMES, tinybasicParser._SYMBOLIC_NAMES, []);
    tinybasicParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\x86\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02" +
        "\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x05\x03&\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x05\x04/\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x05\x048\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04E\n\x04\x03" +
        "\x05\x03\x05\x05\x05I\n\x05\x03\x05\x03\x05\x03\x05\x05\x05N\n\x05\x07" +
        "\x05P\n\x05\f\x05\x0E\x05S\v\x05\x03\x06\x03\x06\x03\x06\x07\x06X\n\x06" +
        "\f\x06\x0E\x06[\v\x06\x03\x07\x05\x07^\n\x07\x03\x07\x03\x07\x03\x07\x07" +
        "\x07c\n\x07\f\x07\x0E\x07f\v\x07\x03\b\x03\b\x03\b\x07\bk\n\b\f\b\x0E" +
        "\bn\v\b\x03\t\x03\t\x05\tr\n\t\x03\n\x03\n\x03\v\x06\vw\n\v\r\v\x0E\v" +
        "x\x03\f\x03\f\x05\f}\n\f\x03\f\x03\f\x05\f\x81\n\f\x03\f\x05\f\x84\n\f" +
        "\x03\f\x02\x02\x02\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x02\x07\x03\x02\x11\x12\x03\x02\x13\x14" +
        "\x04\x02\x17\x17\x19\x19\x04\x02\t\t\x16\x16\x04\x02\t\t\x15\x15\x02\x95" +
        "\x02\x1B\x03\x02\x02\x02\x04%\x03\x02\x02\x02\x06D\x03\x02\x02\x02\bH" +
        "\x03\x02\x02\x02\nT\x03\x02\x02\x02\f]\x03\x02\x02\x02\x0Eg\x03\x02\x02" +
        "\x02\x10q\x03\x02\x02\x02\x12s\x03\x02\x02\x02\x14v\x03\x02\x02\x02\x16" +
        "\x83\x03\x02\x02\x02\x18\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A" +
        "\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C" +
        "\x03\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x05\x14\v\x02\x1F" +
        " \x05\x06\x04\x02 !\x07\x1A\x02\x02!&\x03\x02\x02\x02\"#\x05\x06\x04\x02" +
        "#$\x07\x1A\x02\x02$&\x03\x02\x02\x02%\x1E\x03\x02\x02\x02%\"\x03\x02\x02" +
        "\x02&\x05\x03\x02\x02\x02\'(\x07\x03\x02\x02(E\x05\b\x05\x02)*\x07\x04" +
        "\x02\x02*+\x05\f\x07\x02+,\x05\x16\f\x02,.\x05\f\x07\x02-/\x07\x05\x02" +
        "\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/0\x03\x02\x02\x0201\x05\x06\x04" +
        "\x021E\x03\x02\x02\x0223\x07\x06\x02\x023E\x05\x14\v\x0245\x07\x07\x02" +
        "\x025E\x05\n\x06\x0268\x07\b\x02\x0276\x03\x02\x02\x0278\x03\x02\x02\x02" +
        "89\x03\x02\x02\x029:\x05\x12\n\x02:;\x07\t\x02\x02;<\x05\f\x07\x02<E\x03" +
        "\x02\x02\x02=>\x07\n\x02\x02>E\x05\f\x07\x02?E\x07\v\x02\x02@E\x07\f\x02" +
        "\x02AE\x07\r\x02\x02BE\x07\x0E\x02\x02CE\x07\x0F\x02\x02D\'\x03\x02\x02" +
        "\x02D)\x03\x02\x02\x02D2\x03\x02\x02\x02D4\x03\x02\x02\x02D7\x03\x02\x02" +
        "\x02D=\x03\x02\x02\x02D?\x03\x02\x02\x02D@\x03\x02\x02\x02DA\x03\x02\x02" +
        "\x02DB\x03\x02\x02\x02DC\x03\x02\x02\x02E\x07\x03\x02\x02\x02FI\x07\x17" +
        "\x02\x02GI\x05\f\x07\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02IQ\x03\x02" +
        "\x02\x02JM\x07\x10\x02\x02KN\x07\x17\x02\x02LN\x05\f\x07\x02MK\x03\x02" +
        "\x02\x02ML\x03\x02\x02\x02NP\x03\x02\x02\x02OJ\x03\x02\x02\x02PS\x03\x02" +
        "\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02R\t\x03\x02\x02\x02SQ\x03" +
        "\x02\x02\x02TY\x05\x12\n\x02UV\x07\x10\x02\x02VX\x05\x12\n\x02WU\x03\x02" +
        "\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\v\x03" +
        "\x02\x02\x02[Y\x03\x02\x02\x02\\^\t\x02\x02\x02]\\\x03\x02\x02\x02]^\x03" +
        "\x02\x02\x02^_\x03\x02\x02\x02_d\x05\x0E\b\x02`a\t\x02\x02\x02ac\x05\x0E" +
        "\b\x02b`\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02" +
        "\x02\x02e\r\x03\x02\x02\x02fd\x03\x02\x02\x02gl\x05\x10\t\x02hi\t\x03" +
        "\x02\x02ik\x05\x10\t\x02jh\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02" +
        "\x02\x02lm\x03\x02\x02\x02m\x0F\x03\x02\x02\x02nl\x03\x02\x02\x02or\x05" +
        "\x12\n\x02pr\x05\x14\v\x02qo\x03\x02\x02\x02qp\x03\x02\x02\x02r\x11\x03" +
        "\x02\x02\x02st\t\x04\x02\x02t\x13\x03\x02\x02\x02uw\x07\x18\x02\x02vu" +
        "\x03\x02\x02\x02wx\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02" +
        "y\x15\x03\x02\x02\x02z|\x07\x15\x02\x02{}\t\x05\x02\x02|{\x03\x02\x02" +
        "\x02|}\x03\x02\x02\x02}\x84\x03\x02\x02\x02~\x80\x07\x16\x02\x02\x7F\x81" +
        "\t\x06\x02\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x84" +
        "\x03\x02\x02\x02\x82\x84\x07\t\x02\x02\x83z\x03\x02\x02\x02\x83~\x03\x02" +
        "\x02\x02\x83\x82\x03\x02\x02\x02\x84\x17\x03\x02\x02\x02\x13\x1B%.7DH" +
        "MQY]dlqx|\x80\x83";
    return tinybasicParser;
}(Parser_1.Parser));
exports.tinybasicParser = tinybasicParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_program; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramContext.prototype.enterRule = function (listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.exitRule = function (listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.accept = function (visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramContext = ProgramContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    LineContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    LineContext.prototype.CR = function () { return this.getToken(tinybasicParser.CR, 0); };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineContext.prototype.enterRule = function (listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    };
    // @Override
    LineContext.prototype.exitRule = function (listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    };
    // @Override
    LineContext.prototype.accept = function (visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineContext = LineContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.exprlist = function () {
        return this.tryGetRuleContext(0, ExprlistContext);
    };
    StatementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    StatementContext.prototype.relop = function () {
        return this.tryGetRuleContext(0, RelopContext);
    };
    StatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    StatementContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    StatementContext.prototype.varlist = function () {
        return this.tryGetRuleContext(0, VarlistContext);
    };
    StatementContext.prototype.vara = function () {
        return this.tryGetRuleContext(0, VaraContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_statement; },
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
var ExprlistContext = /** @class */ (function (_super) {
    __extends(ExprlistContext, _super);
    function ExprlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprlistContext.prototype.STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(tinybasicParser.STRING);
        }
        else {
            return this.getToken(tinybasicParser.STRING, i);
        }
    };
    ExprlistContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExprlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_exprlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprlistContext.prototype.enterRule = function (listener) {
        if (listener.enterExprlist) {
            listener.enterExprlist(this);
        }
    };
    // @Override
    ExprlistContext.prototype.exitRule = function (listener) {
        if (listener.exitExprlist) {
            listener.exitExprlist(this);
        }
    };
    // @Override
    ExprlistContext.prototype.accept = function (visitor) {
        if (visitor.visitExprlist) {
            return visitor.visitExprlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprlistContext = ExprlistContext;
var VarlistContext = /** @class */ (function (_super) {
    __extends(VarlistContext, _super);
    function VarlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarlistContext.prototype.vara = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VaraContext);
        }
        else {
            return this.getRuleContext(i, VaraContext);
        }
    };
    Object.defineProperty(VarlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_varlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarlistContext.prototype.enterRule = function (listener) {
        if (listener.enterVarlist) {
            listener.enterVarlist(this);
        }
    };
    // @Override
    VarlistContext.prototype.exitRule = function (listener) {
        if (listener.exitVarlist) {
            listener.exitVarlist(this);
        }
    };
    // @Override
    VarlistContext.prototype.accept = function (visitor) {
        if (visitor.visitVarlist) {
            return visitor.visitVarlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarlistContext = VarlistContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_expression; },
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
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_term; },
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
    FactorContext.prototype.vara = function () {
        return this.tryGetRuleContext(0, VaraContext);
    };
    FactorContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_factor; },
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
var VaraContext = /** @class */ (function (_super) {
    __extends(VaraContext, _super);
    function VaraContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VaraContext.prototype.VAR = function () { return this.tryGetToken(tinybasicParser.VAR, 0); };
    VaraContext.prototype.STRING = function () { return this.tryGetToken(tinybasicParser.STRING, 0); };
    Object.defineProperty(VaraContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_vara; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VaraContext.prototype.enterRule = function (listener) {
        if (listener.enterVara) {
            listener.enterVara(this);
        }
    };
    // @Override
    VaraContext.prototype.exitRule = function (listener) {
        if (listener.exitVara) {
            listener.exitVara(this);
        }
    };
    // @Override
    VaraContext.prototype.accept = function (visitor) {
        if (visitor.visitVara) {
            return visitor.visitVara(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VaraContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VaraContext = VaraContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(tinybasicParser.DIGIT);
        }
        else {
            return this.getToken(tinybasicParser.DIGIT, i);
        }
    };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_number; },
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
var RelopContext = /** @class */ (function (_super) {
    __extends(RelopContext, _super);
    function RelopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RelopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinybasicParser.RULE_relop; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelopContext.prototype.enterRule = function (listener) {
        if (listener.enterRelop) {
            listener.enterRelop(this);
        }
    };
    // @Override
    RelopContext.prototype.exitRule = function (listener) {
        if (listener.exitRelop) {
            listener.exitRelop(this);
        }
    };
    // @Override
    RelopContext.prototype.accept = function (visitor) {
        if (visitor.visitRelop) {
            return visitor.visitRelop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelopContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelopContext = RelopContext;
