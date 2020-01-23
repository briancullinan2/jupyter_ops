"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muparser/MuParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var MuParserParser = /** @class */ (function (_super) {
    __extends(MuParserParser, _super);
    function MuParserParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(MuParserParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(MuParserParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return MuParserParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MuParserParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "MuParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MuParserParser.prototype, "ruleNames", {
        // @Override
        get: function () { return MuParserParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MuParserParser.prototype, "serializedATN", {
        // @Override
        get: function () { return MuParserParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    MuParserParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, MuParserParser.RULE_prog);
        var _la;
        try {
            _localctx = new ProgExprContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 6;
                this.expr(0);
                this.state = 11;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === MuParserParser.T__0) {
                    {
                        {
                            this.state = 7;
                            this.match(MuParserParser.T__0);
                            this.state = 8;
                            this.expr(0);
                        }
                    }
                    this.state = 13;
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
    MuParserParser.prototype.expr = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExprContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 2;
        this.enterRecursionRule(_localctx, 2, MuParserParser.RULE_expr, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            _localctx = new UnaryMinusExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 15;
                            this.match(MuParserParser.SUB);
                            this.state = 16;
                            this.expr(12);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new FunctionExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 17;
                            _localctx._op = this.match(MuParserParser.FUNCTION);
                            this.state = 18;
                            this.match(MuParserParser.OPAR);
                            this.state = 19;
                            this.expr(0);
                            this.state = 20;
                            this.match(MuParserParser.CPAR);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new FunctionMultiExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 22;
                            _localctx._op = this.match(MuParserParser.FUNCTIONMULTI);
                            this.state = 23;
                            this.match(MuParserParser.OPAR);
                            this.state = 24;
                            this.expr(0);
                            this.state = 29;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === MuParserParser.T__1) {
                                {
                                    {
                                        this.state = 25;
                                        this.match(MuParserParser.T__1);
                                        this.state = 26;
                                        this.expr(0);
                                    }
                                }
                                this.state = 31;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 32;
                            this.match(MuParserParser.CPAR);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new AtomExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 34;
                            this.atom();
                        }
                        break;
                    case 5:
                        {
                            _localctx = new AssignExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 35;
                            this.match(MuParserParser.ID);
                            this.state = 36;
                            _localctx._op = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MuParserParser.ASSIGN) | (1 << MuParserParser.ASSIGNADD) | (1 << MuParserParser.ASSIGNSUB) | (1 << MuParserParser.ASSIGNMUL) | (1 << MuParserParser.ASSIGNDIV))) !== 0))) {
                                _localctx._op = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 37;
                            this.expr(1);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 69;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 67;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PowExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
                                        this.state = 40;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 41;
                                        this.match(MuParserParser.POW);
                                        this.state = 42;
                                        this.expr(13);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new MulDivExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
                                        this.state = 43;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 44;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === MuParserParser.MUL || _la === MuParserParser.DIV)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 45;
                                        this.expr(12);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new AddSubExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
                                        this.state = 46;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 47;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === MuParserParser.ADD || _la === MuParserParser.SUB)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 48;
                                        this.expr(11);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new RelationalExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
                                        this.state = 49;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 50;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MuParserParser.LTEQ) | (1 << MuParserParser.GTEQ) | (1 << MuParserParser.LT) | (1 << MuParserParser.GT))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 51;
                                        this.expr(10);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new EqualityExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
                                        this.state = 52;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 53;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === MuParserParser.NEQ || _la === MuParserParser.EQ)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 54;
                                        this.expr(9);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
                                        this.state = 55;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 56;
                                        this.match(MuParserParser.AND);
                                        this.state = 57;
                                        this.expr(8);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
                                        this.state = 58;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 59;
                                        this.match(MuParserParser.OR);
                                        this.state = 60;
                                        this.expr(7);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new IteExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
                                        this.state = 61;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 62;
                                        this.match(MuParserParser.QUESTION);
                                        this.state = 63;
                                        this.expr(0);
                                        this.state = 64;
                                        this.match(MuParserParser.COLON);
                                        this.state = 65;
                                        this.expr(6);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 71;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
    MuParserParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, MuParserParser.RULE_atom);
        var _la;
        try {
            this.state = 80;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case MuParserParser.OPAR:
                    _localctx = new ParExprContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 72;
                        this.match(MuParserParser.OPAR);
                        this.state = 73;
                        this.expr(0);
                        this.state = 74;
                        this.match(MuParserParser.CPAR);
                    }
                    break;
                case MuParserParser.INT:
                case MuParserParser.FLOAT:
                    _localctx = new NumberAtomContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 76;
                        _la = this._input.LA(1);
                        if (!(_la === MuParserParser.INT || _la === MuParserParser.FLOAT)) {
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
                case MuParserParser.TRUE:
                case MuParserParser.FALSE:
                    _localctx = new BooleanAtomContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 77;
                        _la = this._input.LA(1);
                        if (!(_la === MuParserParser.TRUE || _la === MuParserParser.FALSE)) {
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
                case MuParserParser.E:
                case MuParserParser.PI:
                    _localctx = new PredefinedConstantAtomContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 78;
                        _la = this._input.LA(1);
                        if (!(_la === MuParserParser.E || _la === MuParserParser.PI)) {
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
                case MuParserParser.ID:
                    _localctx = new IdAtomContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 79;
                        this.match(MuParserParser.ID);
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
    MuParserParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    };
    MuParserParser.prototype.expr_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 13);
            case 1:
                return this.precpred(this._ctx, 11);
            case 2:
                return this.precpred(this._ctx, 10);
            case 3:
                return this.precpred(this._ctx, 9);
            case 4:
                return this.precpred(this._ctx, 8);
            case 5:
                return this.precpred(this._ctx, 7);
            case 6:
                return this.precpred(this._ctx, 6);
            case 7:
                return this.precpred(this._ctx, 5);
        }
        return true;
    };
    Object.defineProperty(MuParserParser, "_ATN", {
        get: function () {
            if (!MuParserParser.__ATN) {
                MuParserParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(MuParserParser._serializedATN));
            }
            return MuParserParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    MuParserParser.T__0 = 1;
    MuParserParser.T__1 = 2;
    MuParserParser.FUNCTION = 3;
    MuParserParser.FUNCTIONMULTI = 4;
    MuParserParser.ASSIGN = 5;
    MuParserParser.ASSIGNADD = 6;
    MuParserParser.ASSIGNSUB = 7;
    MuParserParser.ASSIGNMUL = 8;
    MuParserParser.ASSIGNDIV = 9;
    MuParserParser.AND = 10;
    MuParserParser.OR = 11;
    MuParserParser.LTEQ = 12;
    MuParserParser.GTEQ = 13;
    MuParserParser.NEQ = 14;
    MuParserParser.EQ = 15;
    MuParserParser.LT = 16;
    MuParserParser.GT = 17;
    MuParserParser.ADD = 18;
    MuParserParser.SUB = 19;
    MuParserParser.MUL = 20;
    MuParserParser.DIV = 21;
    MuParserParser.POW = 22;
    MuParserParser.NOT = 23;
    MuParserParser.QUESTION = 24;
    MuParserParser.COLON = 25;
    MuParserParser.OPAR = 26;
    MuParserParser.CPAR = 27;
    MuParserParser.INT = 28;
    MuParserParser.FLOAT = 29;
    MuParserParser.TRUE = 30;
    MuParserParser.FALSE = 31;
    MuParserParser.E = 32;
    MuParserParser.PI = 33;
    MuParserParser.ID = 34;
    MuParserParser.SPACE = 35;
    MuParserParser.RULE_prog = 0;
    MuParserParser.RULE_expr = 1;
    MuParserParser.RULE_atom = 2;
    // tslint:disable:no-trailing-whitespace
    MuParserParser.ruleNames = [
        "prog", "expr", "atom",
    ];
    MuParserParser._LITERAL_NAMES = [
        undefined, "'\n'", "','", undefined, undefined, "'='", "'+='", "'-='",
        "'*='", "'/='", "'&&'", "'||'", "'<='", "'>='", "'!='", "'=='", "'<'",
        "'>'", "'+'", "'-'", "'*'", "'/'", "'^'", "'!'", "'?'", "':'", "'('",
        "')'", undefined, undefined, "'true'", "'false'", "'_e'", "'_pi'",
    ];
    MuParserParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "FUNCTION", "FUNCTIONMULTI", "ASSIGN",
        "ASSIGNADD", "ASSIGNSUB", "ASSIGNMUL", "ASSIGNDIV", "AND", "OR", "LTEQ",
        "GTEQ", "NEQ", "EQ", "LT", "GT", "ADD", "SUB", "MUL", "DIV", "POW", "NOT",
        "QUESTION", "COLON", "OPAR", "CPAR", "INT", "FLOAT", "TRUE", "FALSE",
        "E", "PI", "ID", "SPACE",
    ];
    MuParserParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(MuParserParser._LITERAL_NAMES, MuParserParser._SYMBOLIC_NAMES, []);
    MuParserParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%U\x04\x02\t\x02" +
        "\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x07\x02\f\n\x02\f" +
        "\x02\x0E\x02\x0F\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1E\n" +
        "\x03\f\x03\x0E\x03!\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x05\x03)\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x07\x03F\n\x03\f\x03\x0E\x03I\v\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04S\n\x04\x03\x04" +
        "\x02\x02\x03\x04\x05\x02\x02\x04\x02\x06\x02\x02\n\x03\x02\x07\v\x03\x02" +
        "\x16\x17\x03\x02\x14\x15\x04\x02\x0E\x0F\x12\x13\x03\x02\x10\x11\x03\x02" +
        "\x1E\x1F\x03\x02 !\x03\x02\"#\x02c\x02\b\x03\x02\x02\x02\x04(\x03\x02" +
        "\x02\x02\x06R\x03\x02\x02\x02\b\r\x05\x04\x03\x02\t\n\x07\x03\x02\x02" +
        "\n\f\x05\x04\x03\x02\v\t\x03\x02\x02\x02\f\x0F\x03\x02\x02\x02\r\v\x03" +
        "\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\x03\x03\x02\x02\x02\x0F\r\x03\x02" +
        "\x02\x02\x10\x11\b\x03\x01\x02\x11\x12\x07\x15\x02\x02\x12)\x05\x04\x03" +
        "\x0E\x13\x14\x07\x05\x02\x02\x14\x15\x07\x1C\x02\x02\x15\x16\x05\x04\x03" +
        "\x02\x16\x17\x07\x1D\x02\x02\x17)\x03\x02\x02\x02\x18\x19\x07\x06\x02" +
        "\x02\x19\x1A\x07\x1C\x02\x02\x1A\x1F\x05\x04\x03\x02\x1B\x1C\x07\x04\x02" +
        "\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1B\x03\x02\x02\x02\x1E!\x03\x02\x02" +
        "\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!" +
        "\x1F\x03\x02\x02\x02\"#\x07\x1D\x02\x02#)\x03\x02\x02\x02$)\x05\x06\x04" +
        "\x02%&\x07$\x02\x02&\'\t\x02\x02\x02\')\x05\x04\x03\x03(\x10\x03\x02\x02" +
        "\x02(\x13\x03\x02\x02\x02(\x18\x03\x02\x02\x02($\x03\x02\x02\x02(%\x03" +
        "\x02\x02\x02)G\x03\x02\x02\x02*+\f\x0F\x02\x02+,\x07\x18\x02\x02,F\x05" +
        "\x04\x03\x0F-.\f\r\x02\x02./\t\x03\x02\x02/F\x05\x04\x03\x0E01\f\f\x02" +
        "\x0212\t\x04\x02\x022F\x05\x04\x03\r34\f\v\x02\x0245\t\x05\x02\x025F\x05" +
        "\x04\x03\f67\f\n\x02\x0278\t\x06\x02\x028F\x05\x04\x03\v9:\f\t\x02\x02" +
        ":;\x07\f\x02\x02;F\x05\x04\x03\n<=\f\b\x02\x02=>\x07\r\x02\x02>F\x05\x04" +
        "\x03\t?@\f\x07\x02\x02@A\x07\x1A\x02\x02AB\x05\x04\x03\x02BC\x07\x1B\x02" +
        "\x02CD\x05\x04\x03\bDF\x03\x02\x02\x02E*\x03\x02\x02\x02E-\x03\x02\x02" +
        "\x02E0\x03\x02\x02\x02E3\x03\x02\x02\x02E6\x03\x02\x02\x02E9\x03\x02\x02" +
        "\x02E<\x03\x02\x02\x02E?\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02" +
        "\x02GH\x03\x02\x02\x02H\x05\x03\x02\x02\x02IG\x03\x02\x02\x02JK\x07\x1C" +
        "\x02\x02KL\x05\x04\x03\x02LM\x07\x1D\x02\x02MS\x03\x02\x02\x02NS\t\x07" +
        "\x02\x02OS\t\b\x02\x02PS\t\t\x02\x02QS\x07$\x02\x02RJ\x03\x02\x02\x02" +
        "RN\x03\x02\x02\x02RO\x03\x02\x02\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02" +
        "S\x07\x03\x02\x02\x02\b\r\x1F(EGR";
    return MuParserParser;
}(Parser_1.Parser));
exports.MuParserParser = MuParserParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MuParserParser.RULE_prog; },
        enumerable: true,
        configurable: true
    });
    ProgContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ProgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgContext = ProgContext;
var ProgExprContext = /** @class */ (function (_super) {
    __extends(ProgExprContext, _super);
    function ProgExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ProgExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    // @Override
    ProgExprContext.prototype.enterRule = function (listener) {
        if (listener.enterProgExpr) {
            listener.enterProgExpr(this);
        }
    };
    // @Override
    ProgExprContext.prototype.exitRule = function (listener) {
        if (listener.exitProgExpr) {
            listener.exitProgExpr(this);
        }
    };
    // @Override
    ProgExprContext.prototype.accept = function (visitor) {
        if (visitor.visitProgExpr) {
            return visitor.visitProgExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgExprContext;
}(ProgContext));
exports.ProgExprContext = ProgExprContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MuParserParser.RULE_expr; },
        enumerable: true,
        configurable: true
    });
    ExprContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var PowExprContext = /** @class */ (function (_super) {
    __extends(PowExprContext, _super);
    function PowExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PowExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    PowExprContext.prototype.POW = function () { return this.getToken(MuParserParser.POW, 0); };
    // @Override
    PowExprContext.prototype.enterRule = function (listener) {
        if (listener.enterPowExpr) {
            listener.enterPowExpr(this);
        }
    };
    // @Override
    PowExprContext.prototype.exitRule = function (listener) {
        if (listener.exitPowExpr) {
            listener.exitPowExpr(this);
        }
    };
    // @Override
    PowExprContext.prototype.accept = function (visitor) {
        if (visitor.visitPowExpr) {
            return visitor.visitPowExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PowExprContext;
}(ExprContext));
exports.PowExprContext = PowExprContext;
var UnaryMinusExprContext = /** @class */ (function (_super) {
    __extends(UnaryMinusExprContext, _super);
    function UnaryMinusExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryMinusExprContext.prototype.SUB = function () { return this.getToken(MuParserParser.SUB, 0); };
    UnaryMinusExprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    UnaryMinusExprContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryMinusExpr) {
            listener.enterUnaryMinusExpr(this);
        }
    };
    // @Override
    UnaryMinusExprContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryMinusExpr) {
            listener.exitUnaryMinusExpr(this);
        }
    };
    // @Override
    UnaryMinusExprContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryMinusExpr) {
            return visitor.visitUnaryMinusExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryMinusExprContext;
}(ExprContext));
exports.UnaryMinusExprContext = UnaryMinusExprContext;
var MulDivExprContext = /** @class */ (function (_super) {
    __extends(MulDivExprContext, _super);
    function MulDivExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MulDivExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    MulDivExprContext.prototype.MUL = function () { return this.tryGetToken(MuParserParser.MUL, 0); };
    MulDivExprContext.prototype.DIV = function () { return this.tryGetToken(MuParserParser.DIV, 0); };
    // @Override
    MulDivExprContext.prototype.enterRule = function (listener) {
        if (listener.enterMulDivExpr) {
            listener.enterMulDivExpr(this);
        }
    };
    // @Override
    MulDivExprContext.prototype.exitRule = function (listener) {
        if (listener.exitMulDivExpr) {
            listener.exitMulDivExpr(this);
        }
    };
    // @Override
    MulDivExprContext.prototype.accept = function (visitor) {
        if (visitor.visitMulDivExpr) {
            return visitor.visitMulDivExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MulDivExprContext;
}(ExprContext));
exports.MulDivExprContext = MulDivExprContext;
var AddSubExprContext = /** @class */ (function (_super) {
    __extends(AddSubExprContext, _super);
    function AddSubExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AddSubExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    AddSubExprContext.prototype.ADD = function () { return this.tryGetToken(MuParserParser.ADD, 0); };
    AddSubExprContext.prototype.SUB = function () { return this.tryGetToken(MuParserParser.SUB, 0); };
    // @Override
    AddSubExprContext.prototype.enterRule = function (listener) {
        if (listener.enterAddSubExpr) {
            listener.enterAddSubExpr(this);
        }
    };
    // @Override
    AddSubExprContext.prototype.exitRule = function (listener) {
        if (listener.exitAddSubExpr) {
            listener.exitAddSubExpr(this);
        }
    };
    // @Override
    AddSubExprContext.prototype.accept = function (visitor) {
        if (visitor.visitAddSubExpr) {
            return visitor.visitAddSubExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddSubExprContext;
}(ExprContext));
exports.AddSubExprContext = AddSubExprContext;
var RelationalExprContext = /** @class */ (function (_super) {
    __extends(RelationalExprContext, _super);
    function RelationalExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    RelationalExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    RelationalExprContext.prototype.LTEQ = function () { return this.tryGetToken(MuParserParser.LTEQ, 0); };
    RelationalExprContext.prototype.GTEQ = function () { return this.tryGetToken(MuParserParser.GTEQ, 0); };
    RelationalExprContext.prototype.LT = function () { return this.tryGetToken(MuParserParser.LT, 0); };
    RelationalExprContext.prototype.GT = function () { return this.tryGetToken(MuParserParser.GT, 0); };
    // @Override
    RelationalExprContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalExpr) {
            listener.enterRelationalExpr(this);
        }
    };
    // @Override
    RelationalExprContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalExpr) {
            listener.exitRelationalExpr(this);
        }
    };
    // @Override
    RelationalExprContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalExpr) {
            return visitor.visitRelationalExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalExprContext;
}(ExprContext));
exports.RelationalExprContext = RelationalExprContext;
var EqualityExprContext = /** @class */ (function (_super) {
    __extends(EqualityExprContext, _super);
    function EqualityExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    EqualityExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    EqualityExprContext.prototype.EQ = function () { return this.tryGetToken(MuParserParser.EQ, 0); };
    EqualityExprContext.prototype.NEQ = function () { return this.tryGetToken(MuParserParser.NEQ, 0); };
    // @Override
    EqualityExprContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityExpr) {
            listener.enterEqualityExpr(this);
        }
    };
    // @Override
    EqualityExprContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityExpr) {
            listener.exitEqualityExpr(this);
        }
    };
    // @Override
    EqualityExprContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityExpr) {
            return visitor.visitEqualityExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityExprContext;
}(ExprContext));
exports.EqualityExprContext = EqualityExprContext;
var AndExprContext = /** @class */ (function (_super) {
    __extends(AndExprContext, _super);
    function AndExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AndExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    AndExprContext.prototype.AND = function () { return this.getToken(MuParserParser.AND, 0); };
    // @Override
    AndExprContext.prototype.enterRule = function (listener) {
        if (listener.enterAndExpr) {
            listener.enterAndExpr(this);
        }
    };
    // @Override
    AndExprContext.prototype.exitRule = function (listener) {
        if (listener.exitAndExpr) {
            listener.exitAndExpr(this);
        }
    };
    // @Override
    AndExprContext.prototype.accept = function (visitor) {
        if (visitor.visitAndExpr) {
            return visitor.visitAndExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AndExprContext;
}(ExprContext));
exports.AndExprContext = AndExprContext;
var OrExprContext = /** @class */ (function (_super) {
    __extends(OrExprContext, _super);
    function OrExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    OrExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    OrExprContext.prototype.OR = function () { return this.getToken(MuParserParser.OR, 0); };
    // @Override
    OrExprContext.prototype.enterRule = function (listener) {
        if (listener.enterOrExpr) {
            listener.enterOrExpr(this);
        }
    };
    // @Override
    OrExprContext.prototype.exitRule = function (listener) {
        if (listener.exitOrExpr) {
            listener.exitOrExpr(this);
        }
    };
    // @Override
    OrExprContext.prototype.accept = function (visitor) {
        if (visitor.visitOrExpr) {
            return visitor.visitOrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrExprContext;
}(ExprContext));
exports.OrExprContext = OrExprContext;
var IteExprContext = /** @class */ (function (_super) {
    __extends(IteExprContext, _super);
    function IteExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IteExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    IteExprContext.prototype.QUESTION = function () { return this.getToken(MuParserParser.QUESTION, 0); };
    IteExprContext.prototype.COLON = function () { return this.getToken(MuParserParser.COLON, 0); };
    // @Override
    IteExprContext.prototype.enterRule = function (listener) {
        if (listener.enterIteExpr) {
            listener.enterIteExpr(this);
        }
    };
    // @Override
    IteExprContext.prototype.exitRule = function (listener) {
        if (listener.exitIteExpr) {
            listener.exitIteExpr(this);
        }
    };
    // @Override
    IteExprContext.prototype.accept = function (visitor) {
        if (visitor.visitIteExpr) {
            return visitor.visitIteExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IteExprContext;
}(ExprContext));
exports.IteExprContext = IteExprContext;
var FunctionExprContext = /** @class */ (function (_super) {
    __extends(FunctionExprContext, _super);
    function FunctionExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FunctionExprContext.prototype.OPAR = function () { return this.getToken(MuParserParser.OPAR, 0); };
    FunctionExprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    FunctionExprContext.prototype.CPAR = function () { return this.getToken(MuParserParser.CPAR, 0); };
    FunctionExprContext.prototype.FUNCTION = function () { return this.getToken(MuParserParser.FUNCTION, 0); };
    // @Override
    FunctionExprContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionExpr) {
            listener.enterFunctionExpr(this);
        }
    };
    // @Override
    FunctionExprContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionExpr) {
            listener.exitFunctionExpr(this);
        }
    };
    // @Override
    FunctionExprContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionExpr) {
            return visitor.visitFunctionExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionExprContext;
}(ExprContext));
exports.FunctionExprContext = FunctionExprContext;
var FunctionMultiExprContext = /** @class */ (function (_super) {
    __extends(FunctionMultiExprContext, _super);
    function FunctionMultiExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FunctionMultiExprContext.prototype.OPAR = function () { return this.getToken(MuParserParser.OPAR, 0); };
    FunctionMultiExprContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    FunctionMultiExprContext.prototype.CPAR = function () { return this.getToken(MuParserParser.CPAR, 0); };
    FunctionMultiExprContext.prototype.FUNCTIONMULTI = function () { return this.getToken(MuParserParser.FUNCTIONMULTI, 0); };
    // @Override
    FunctionMultiExprContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionMultiExpr) {
            listener.enterFunctionMultiExpr(this);
        }
    };
    // @Override
    FunctionMultiExprContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionMultiExpr) {
            listener.exitFunctionMultiExpr(this);
        }
    };
    // @Override
    FunctionMultiExprContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionMultiExpr) {
            return visitor.visitFunctionMultiExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionMultiExprContext;
}(ExprContext));
exports.FunctionMultiExprContext = FunctionMultiExprContext;
var AtomExprContext = /** @class */ (function (_super) {
    __extends(AtomExprContext, _super);
    function AtomExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AtomExprContext.prototype.atom = function () {
        return this.getRuleContext(0, AtomContext);
    };
    // @Override
    AtomExprContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomExpr) {
            listener.enterAtomExpr(this);
        }
    };
    // @Override
    AtomExprContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomExpr) {
            listener.exitAtomExpr(this);
        }
    };
    // @Override
    AtomExprContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomExpr) {
            return visitor.visitAtomExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomExprContext;
}(ExprContext));
exports.AtomExprContext = AtomExprContext;
var AssignExprContext = /** @class */ (function (_super) {
    __extends(AssignExprContext, _super);
    function AssignExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignExprContext.prototype.ID = function () { return this.getToken(MuParserParser.ID, 0); };
    AssignExprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    AssignExprContext.prototype.ASSIGN = function () { return this.tryGetToken(MuParserParser.ASSIGN, 0); };
    AssignExprContext.prototype.ASSIGNADD = function () { return this.tryGetToken(MuParserParser.ASSIGNADD, 0); };
    AssignExprContext.prototype.ASSIGNSUB = function () { return this.tryGetToken(MuParserParser.ASSIGNSUB, 0); };
    AssignExprContext.prototype.ASSIGNMUL = function () { return this.tryGetToken(MuParserParser.ASSIGNMUL, 0); };
    AssignExprContext.prototype.ASSIGNDIV = function () { return this.tryGetToken(MuParserParser.ASSIGNDIV, 0); };
    // @Override
    AssignExprContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignExpr) {
            listener.enterAssignExpr(this);
        }
    };
    // @Override
    AssignExprContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignExpr) {
            listener.exitAssignExpr(this);
        }
    };
    // @Override
    AssignExprContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignExpr) {
            return visitor.visitAssignExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignExprContext;
}(ExprContext));
exports.AssignExprContext = AssignExprContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return MuParserParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    AtomContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var ParExprContext = /** @class */ (function (_super) {
    __extends(ParExprContext, _super);
    function ParExprContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParExprContext.prototype.OPAR = function () { return this.getToken(MuParserParser.OPAR, 0); };
    ParExprContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    ParExprContext.prototype.CPAR = function () { return this.getToken(MuParserParser.CPAR, 0); };
    // @Override
    ParExprContext.prototype.enterRule = function (listener) {
        if (listener.enterParExpr) {
            listener.enterParExpr(this);
        }
    };
    // @Override
    ParExprContext.prototype.exitRule = function (listener) {
        if (listener.exitParExpr) {
            listener.exitParExpr(this);
        }
    };
    // @Override
    ParExprContext.prototype.accept = function (visitor) {
        if (visitor.visitParExpr) {
            return visitor.visitParExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParExprContext;
}(AtomContext));
exports.ParExprContext = ParExprContext;
var NumberAtomContext = /** @class */ (function (_super) {
    __extends(NumberAtomContext, _super);
    function NumberAtomContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NumberAtomContext.prototype.INT = function () { return this.tryGetToken(MuParserParser.INT, 0); };
    NumberAtomContext.prototype.FLOAT = function () { return this.tryGetToken(MuParserParser.FLOAT, 0); };
    // @Override
    NumberAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterNumberAtom) {
            listener.enterNumberAtom(this);
        }
    };
    // @Override
    NumberAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitNumberAtom) {
            listener.exitNumberAtom(this);
        }
    };
    // @Override
    NumberAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitNumberAtom) {
            return visitor.visitNumberAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberAtomContext;
}(AtomContext));
exports.NumberAtomContext = NumberAtomContext;
var BooleanAtomContext = /** @class */ (function (_super) {
    __extends(BooleanAtomContext, _super);
    function BooleanAtomContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BooleanAtomContext.prototype.TRUE = function () { return this.tryGetToken(MuParserParser.TRUE, 0); };
    BooleanAtomContext.prototype.FALSE = function () { return this.tryGetToken(MuParserParser.FALSE, 0); };
    // @Override
    BooleanAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanAtom) {
            listener.enterBooleanAtom(this);
        }
    };
    // @Override
    BooleanAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanAtom) {
            listener.exitBooleanAtom(this);
        }
    };
    // @Override
    BooleanAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanAtom) {
            return visitor.visitBooleanAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanAtomContext;
}(AtomContext));
exports.BooleanAtomContext = BooleanAtomContext;
var PredefinedConstantAtomContext = /** @class */ (function (_super) {
    __extends(PredefinedConstantAtomContext, _super);
    function PredefinedConstantAtomContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PredefinedConstantAtomContext.prototype.E = function () { return this.tryGetToken(MuParserParser.E, 0); };
    PredefinedConstantAtomContext.prototype.PI = function () { return this.tryGetToken(MuParserParser.PI, 0); };
    // @Override
    PredefinedConstantAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterPredefinedConstantAtom) {
            listener.enterPredefinedConstantAtom(this);
        }
    };
    // @Override
    PredefinedConstantAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitPredefinedConstantAtom) {
            listener.exitPredefinedConstantAtom(this);
        }
    };
    // @Override
    PredefinedConstantAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitPredefinedConstantAtom) {
            return visitor.visitPredefinedConstantAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredefinedConstantAtomContext;
}(AtomContext));
exports.PredefinedConstantAtomContext = PredefinedConstantAtomContext;
var IdAtomContext = /** @class */ (function (_super) {
    __extends(IdAtomContext, _super);
    function IdAtomContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IdAtomContext.prototype.ID = function () { return this.getToken(MuParserParser.ID, 0); };
    // @Override
    IdAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterIdAtom) {
            listener.enterIdAtom(this);
        }
    };
    // @Override
    IdAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitIdAtom) {
            listener.exitIdAtom(this);
        }
    };
    // @Override
    IdAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitIdAtom) {
            return visitor.visitIdAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdAtomContext;
}(AtomContext));
exports.IdAtomContext = IdAtomContext;
