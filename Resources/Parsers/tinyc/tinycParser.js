"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinyc/tinyc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var tinycParser = /** @class */ (function (_super) {
    __extends(tinycParser, _super);
    function tinycParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(tinycParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(tinycParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tinycParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "tinyc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycParser.prototype, "ruleNames", {
        // @Override
        get: function () { return tinycParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycParser.prototype, "serializedATN", {
        // @Override
        get: function () { return tinycParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    tinycParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tinycParser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 19;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 18;
                            this.statement();
                        }
                    }
                    this.state = 21;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tinycParser.T__0) | (1 << tinycParser.T__2) | (1 << tinycParser.T__3) | (1 << tinycParser.T__4) | (1 << tinycParser.T__5) | (1 << tinycParser.T__7) | (1 << tinycParser.STRING) | (1 << tinycParser.INT))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinycParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, tinycParser.RULE_statement);
        var _la;
        try {
            this.state = 55;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 23;
                        this.match(tinycParser.T__0);
                        this.state = 24;
                        this.paren_expr();
                        this.state = 25;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 27;
                        this.match(tinycParser.T__0);
                        this.state = 28;
                        this.paren_expr();
                        this.state = 29;
                        this.statement();
                        this.state = 30;
                        this.match(tinycParser.T__1);
                        this.state = 31;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 33;
                        this.match(tinycParser.T__2);
                        this.state = 34;
                        this.paren_expr();
                        this.state = 35;
                        this.statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 37;
                        this.match(tinycParser.T__3);
                        this.state = 38;
                        this.statement();
                        this.state = 39;
                        this.match(tinycParser.T__2);
                        this.state = 40;
                        this.paren_expr();
                        this.state = 41;
                        this.match(tinycParser.T__4);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 43;
                        this.match(tinycParser.T__5);
                        this.state = 47;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tinycParser.T__0) | (1 << tinycParser.T__2) | (1 << tinycParser.T__3) | (1 << tinycParser.T__4) | (1 << tinycParser.T__5) | (1 << tinycParser.T__7) | (1 << tinycParser.STRING) | (1 << tinycParser.INT))) !== 0)) {
                            {
                                {
                                    this.state = 44;
                                    this.statement();
                                }
                            }
                            this.state = 49;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 50;
                        this.match(tinycParser.T__6);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 51;
                        this.expr();
                        this.state = 52;
                        this.match(tinycParser.T__4);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 54;
                        this.match(tinycParser.T__4);
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
    tinycParser.prototype.paren_expr = function () {
        var _localctx = new Paren_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tinycParser.RULE_paren_expr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.match(tinycParser.T__7);
                this.state = 58;
                this.expr();
                this.state = 59;
                this.match(tinycParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinycParser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tinycParser.RULE_expr);
        try {
            this.state = 66;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 61;
                        this.test();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 62;
                        this.id();
                        this.state = 63;
                        this.match(tinycParser.T__9);
                        this.state = 64;
                        this.expr();
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
    tinycParser.prototype.test = function () {
        var _localctx = new TestContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, tinycParser.RULE_test);
        try {
            this.state = 73;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 68;
                        this.sum(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 69;
                        this.sum(0);
                        this.state = 70;
                        this.match(tinycParser.T__10);
                        this.state = 71;
                        this.sum(0);
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
    tinycParser.prototype.sum = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new SumContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 10;
        this.enterRecursionRule(_localctx, 10, tinycParser.RULE_sum, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 76;
                    this.term();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 86;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 84;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new SumContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, tinycParser.RULE_sum);
                                        this.state = 78;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 79;
                                        this.match(tinycParser.T__11);
                                        this.state = 80;
                                        this.term();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new SumContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, tinycParser.RULE_sum);
                                        this.state = 81;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 82;
                                        this.match(tinycParser.T__12);
                                        this.state = 83;
                                        this.term();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 88;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
    tinycParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, tinycParser.RULE_term);
        try {
            this.state = 92;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tinycParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 89;
                        this.id();
                    }
                    break;
                case tinycParser.INT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 90;
                        this.integer();
                    }
                    break;
                case tinycParser.T__7:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 91;
                        this.paren_expr();
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
    tinycParser.prototype.id = function () {
        var _localctx = new IdContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, tinycParser.RULE_id);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this.match(tinycParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tinycParser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, tinycParser.RULE_integer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.match(tinycParser.INT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    tinycParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 5:
                return this.sum_sempred(_localctx, predIndex);
        }
        return true;
    };
    tinycParser.prototype.sum_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(tinycParser, "_ATN", {
        get: function () {
            if (!tinycParser.__ATN) {
                tinycParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tinycParser._serializedATN));
            }
            return tinycParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tinycParser.T__0 = 1;
    tinycParser.T__1 = 2;
    tinycParser.T__2 = 3;
    tinycParser.T__3 = 4;
    tinycParser.T__4 = 5;
    tinycParser.T__5 = 6;
    tinycParser.T__6 = 7;
    tinycParser.T__7 = 8;
    tinycParser.T__8 = 9;
    tinycParser.T__9 = 10;
    tinycParser.T__10 = 11;
    tinycParser.T__11 = 12;
    tinycParser.T__12 = 13;
    tinycParser.STRING = 14;
    tinycParser.INT = 15;
    tinycParser.WS = 16;
    tinycParser.RULE_program = 0;
    tinycParser.RULE_statement = 1;
    tinycParser.RULE_paren_expr = 2;
    tinycParser.RULE_expr = 3;
    tinycParser.RULE_test = 4;
    tinycParser.RULE_sum = 5;
    tinycParser.RULE_term = 6;
    tinycParser.RULE_id = 7;
    tinycParser.RULE_integer = 8;
    // tslint:disable:no-trailing-whitespace
    tinycParser.ruleNames = [
        "program", "statement", "paren_expr", "expr", "test", "sum", "term", "id",
        "integer",
    ];
    tinycParser._LITERAL_NAMES = [
        undefined, "'if'", "'else'", "'while'", "'do'", "';'", "'{'", "'}'", "'('",
        "')'", "'='", "'<'", "'+'", "'-'",
    ];
    tinycParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "STRING", "INT", "WS",
    ];
    tinycParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tinycParser._LITERAL_NAMES, tinycParser._SYMBOLIC_NAMES, []);
    tinycParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12e\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x06\x02\x16\n\x02\r\x02\x0E" +
        "\x02\x17\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x030\n\x03\f\x03\x0E\x03" +
        "3\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03:\n\x03\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
        "E\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06L\n\x06\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
        "W\n\x07\f\x07\x0E\x07Z\v\x07\x03\b\x03\b\x03\b\x05\b_\n\b\x03\t\x03\t" +
        "\x03\n\x03\n\x03\n\x02\x02\x03\f\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
        "\f\x02\x0E\x02\x10\x02\x12\x02\x02\x02\x02i\x02\x15\x03\x02\x02\x02\x04" +
        "9\x03\x02\x02\x02\x06;\x03\x02\x02\x02\bD\x03\x02\x02\x02\nK\x03\x02\x02" +
        "\x02\fM\x03\x02\x02\x02\x0E^\x03\x02\x02\x02\x10`\x03\x02\x02\x02\x12" +
        "b\x03\x02\x02\x02\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02\x02\x16" +
        "\x17\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18" +
        "\x03\x03\x02\x02\x02\x19\x1A\x07\x03\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B" +
        "\x1C\x05\x04\x03\x02\x1C:\x03\x02\x02\x02\x1D\x1E\x07\x03\x02\x02\x1E" +
        "\x1F\x05\x06\x04\x02\x1F \x05\x04\x03\x02 !\x07\x04\x02\x02!\"\x05\x04" +
        "\x03\x02\":\x03\x02\x02\x02#$\x07\x05\x02\x02$%\x05\x06\x04\x02%&\x05" +
        "\x04\x03\x02&:\x03\x02\x02\x02\'(\x07\x06\x02\x02()\x05\x04\x03\x02)*" +
        "\x07\x05\x02\x02*+\x05\x06\x04\x02+,\x07\x07\x02\x02,:\x03\x02\x02\x02" +
        "-1\x07\b\x02\x02.0\x05\x04\x03\x02/.\x03\x02\x02\x0203\x03\x02\x02\x02" +
        "1/\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x02" +
        "4:\x07\t\x02\x0256\x05\b\x05\x0267\x07\x07\x02\x027:\x03\x02\x02\x028" +
        ":\x07\x07\x02\x029\x19\x03\x02\x02\x029\x1D\x03\x02\x02\x029#\x03\x02" +
        "\x02\x029\'\x03\x02\x02\x029-\x03\x02\x02\x0295\x03\x02\x02\x0298\x03" +
        "\x02\x02\x02:\x05\x03\x02\x02\x02;<\x07\n\x02\x02<=\x05\b\x05\x02=>\x07" +
        "\v\x02\x02>\x07\x03\x02\x02\x02?E\x05\n\x06\x02@A\x05\x10\t\x02AB\x07" +
        "\f\x02\x02BC\x05\b\x05\x02CE\x03\x02\x02\x02D?\x03\x02\x02\x02D@\x03\x02" +
        "\x02\x02E\t\x03\x02\x02\x02FL\x05\f\x07\x02GH\x05\f\x07\x02HI\x07\r\x02" +
        "\x02IJ\x05\f\x07\x02JL\x03\x02\x02\x02KF\x03\x02\x02\x02KG\x03\x02\x02" +
        "\x02L\v\x03\x02\x02\x02MN\b\x07\x01\x02NO\x05\x0E\b\x02OX\x03\x02\x02" +
        "\x02PQ\f\x04\x02\x02QR\x07\x0E\x02\x02RW\x05\x0E\b\x02ST\f\x03\x02\x02" +
        "TU\x07\x0F\x02\x02UW\x05\x0E\b\x02VP\x03\x02\x02\x02VS\x03\x02\x02\x02" +
        "WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\r\x03\x02\x02" +
        "\x02ZX\x03\x02\x02\x02[_\x05\x10\t\x02\\_\x05\x12\n\x02]_\x05\x06\x04" +
        "\x02^[\x03\x02\x02\x02^\\\x03\x02\x02\x02^]\x03\x02\x02\x02_\x0F\x03\x02" +
        "\x02\x02`a\x07\x10\x02\x02a\x11\x03\x02\x02\x02bc\x07\x11\x02\x02c\x13" +
        "\x03\x02\x02\x02\n\x1719DKVX^";
    return tinycParser;
}(Parser_1.Parser));
exports.tinycParser = tinycParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_program; },
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
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.paren_expr = function () {
        return this.tryGetRuleContext(0, Paren_exprContext);
    };
    StatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    StatementContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_statement; },
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
var Paren_exprContext = /** @class */ (function (_super) {
    __extends(Paren_exprContext, _super);
    function Paren_exprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Paren_exprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Object.defineProperty(Paren_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_paren_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Paren_exprContext.prototype.enterRule = function (listener) {
        if (listener.enterParen_expr) {
            listener.enterParen_expr(this);
        }
    };
    // @Override
    Paren_exprContext.prototype.exitRule = function (listener) {
        if (listener.exitParen_expr) {
            listener.exitParen_expr(this);
        }
    };
    // @Override
    Paren_exprContext.prototype.accept = function (visitor) {
        if (visitor.visitParen_expr) {
            return visitor.visitParen_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Paren_exprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Paren_exprContext = Paren_exprContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    ExprContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    ExprContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var TestContext = /** @class */ (function (_super) {
    __extends(TestContext, _super);
    function TestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TestContext.prototype.sum = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SumContext);
        }
        else {
            return this.getRuleContext(i, SumContext);
        }
    };
    Object.defineProperty(TestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_test; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TestContext.prototype.enterRule = function (listener) {
        if (listener.enterTest) {
            listener.enterTest(this);
        }
    };
    // @Override
    TestContext.prototype.exitRule = function (listener) {
        if (listener.exitTest) {
            listener.exitTest(this);
        }
    };
    // @Override
    TestContext.prototype.accept = function (visitor) {
        if (visitor.visitTest) {
            return visitor.visitTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TestContext = TestContext;
var SumContext = /** @class */ (function (_super) {
    __extends(SumContext, _super);
    function SumContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SumContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    SumContext.prototype.sum = function () {
        return this.tryGetRuleContext(0, SumContext);
    };
    Object.defineProperty(SumContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_sum; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SumContext.prototype.enterRule = function (listener) {
        if (listener.enterSum) {
            listener.enterSum(this);
        }
    };
    // @Override
    SumContext.prototype.exitRule = function (listener) {
        if (listener.exitSum) {
            listener.exitSum(this);
        }
    };
    // @Override
    SumContext.prototype.accept = function (visitor) {
        if (visitor.visitSum) {
            return visitor.visitSum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SumContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SumContext = SumContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    TermContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    TermContext.prototype.paren_expr = function () {
        return this.tryGetRuleContext(0, Paren_exprContext);
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_term; },
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
var IdContext = /** @class */ (function (_super) {
    __extends(IdContext, _super);
    function IdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdContext.prototype.STRING = function () { return this.getToken(tinycParser.STRING, 0); };
    Object.defineProperty(IdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_id; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdContext.prototype.enterRule = function (listener) {
        if (listener.enterId) {
            listener.enterId(this);
        }
    };
    // @Override
    IdContext.prototype.exitRule = function (listener) {
        if (listener.exitId) {
            listener.exitId(this);
        }
    };
    // @Override
    IdContext.prototype.accept = function (visitor) {
        if (visitor.visitId) {
            return visitor.visitId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdContext = IdContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.INT = function () { return this.getToken(tinycParser.INT, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tinycParser.RULE_integer; },
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
