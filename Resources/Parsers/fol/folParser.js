"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fol/fol.g4 by ANTLR 4.7.3-SNAPSHOT
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
var folParser = /** @class */ (function (_super) {
    __extends(folParser, _super);
    function folParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(folParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(folParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return folParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "fol.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folParser.prototype, "ruleNames", {
        // @Override
        get: function () { return folParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folParser.prototype, "serializedATN", {
        // @Override
        get: function () { return folParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    folParser.prototype.condition = function () {
        var _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, folParser.RULE_condition);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 18;
                this.formula(0);
                this.state = 23;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 19;
                                this.match(folParser.ENDLINE);
                                this.state = 20;
                                this.formula(0);
                            }
                        }
                    }
                    this.state = 25;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                }
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === folParser.ENDLINE) {
                    {
                        {
                            this.state = 26;
                            this.match(folParser.ENDLINE);
                        }
                    }
                    this.state = 31;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 32;
                this.match(folParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    folParser.prototype.formula = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new FormulaContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 2;
        this.enterRecursionRule(_localctx, 2, folParser.RULE_formula, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 35;
                            this.match(folParser.NOT);
                            this.state = 36;
                            this.formula(0);
                            this.state = 37;
                            this.bin_connective();
                            this.state = 38;
                            this.formula(6);
                        }
                        break;
                    case 2:
                        {
                            this.state = 40;
                            this.match(folParser.NOT);
                            this.state = 41;
                            this.formula(5);
                        }
                        break;
                    case 3:
                        {
                            this.state = 42;
                            this.match(folParser.FORALL);
                            this.state = 43;
                            this.match(folParser.LPAREN);
                            this.state = 44;
                            this.variable();
                            this.state = 45;
                            this.match(folParser.RPAREN);
                            this.state = 46;
                            this.formula(4);
                        }
                        break;
                    case 4:
                        {
                            this.state = 48;
                            this.match(folParser.EXISTS);
                            this.state = 49;
                            this.match(folParser.LPAREN);
                            this.state = 50;
                            this.variable();
                            this.state = 51;
                            this.match(folParser.RPAREN);
                            this.state = 52;
                            this.formula(3);
                        }
                        break;
                    case 5:
                        {
                            this.state = 54;
                            this.pred_constant();
                            this.state = 55;
                            this.match(folParser.LPAREN);
                            this.state = 56;
                            this.term();
                            this.state = 62;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === folParser.T__4) {
                                {
                                    {
                                        this.state = 57;
                                        this.separator();
                                        this.state = 58;
                                        this.term();
                                    }
                                }
                                this.state = 64;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 65;
                            this.match(folParser.RPAREN);
                        }
                        break;
                    case 6:
                        {
                            this.state = 67;
                            this.term();
                            this.state = 68;
                            this.match(folParser.EQUAL);
                            this.state = 69;
                            this.term();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 79;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new FormulaContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, folParser.RULE_formula);
                                this.state = 73;
                                if (!(this.precpred(this._ctx, 7))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                }
                                this.state = 74;
                                this.bin_connective();
                                this.state = 75;
                                this.formula(8);
                            }
                        }
                    }
                    this.state = 81;
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
    folParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, folParser.RULE_term);
        var _la;
        try {
            this.state = 97;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case folParser.T__2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 82;
                        this.ind_constant();
                    }
                    break;
                case folParser.T__0:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 83;
                        this.variable();
                    }
                    break;
                case folParser.T__3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 84;
                        this.func_constant();
                        this.state = 85;
                        this.match(folParser.LPAREN);
                        this.state = 86;
                        this.term();
                        this.state = 92;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === folParser.T__4) {
                            {
                                {
                                    this.state = 87;
                                    this.separator();
                                    this.state = 88;
                                    this.term();
                                }
                            }
                            this.state = 94;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 95;
                        this.match(folParser.RPAREN);
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
    folParser.prototype.bin_connective = function () {
        var _localctx = new Bin_connectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, folParser.RULE_bin_connective);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << folParser.CONJ) | (1 << folParser.DISJ) | (1 << folParser.IMPL) | (1 << folParser.BICOND))) !== 0))) {
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
    folParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, folParser.RULE_variable);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(folParser.T__0);
                this.state = 105;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 102;
                                this.match(folParser.CHARACTER);
                            }
                        }
                    }
                    this.state = 107;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
    folParser.prototype.pred_constant = function () {
        var _localctx = new Pred_constantContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, folParser.RULE_pred_constant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this.match(folParser.T__1);
                this.state = 112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === folParser.CHARACTER) {
                    {
                        {
                            this.state = 109;
                            this.match(folParser.CHARACTER);
                        }
                    }
                    this.state = 114;
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
    folParser.prototype.ind_constant = function () {
        var _localctx = new Ind_constantContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, folParser.RULE_ind_constant);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.match(folParser.T__2);
                this.state = 119;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 116;
                                this.match(folParser.CHARACTER);
                            }
                        }
                    }
                    this.state = 121;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
    folParser.prototype.func_constant = function () {
        var _localctx = new Func_constantContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, folParser.RULE_func_constant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                this.match(folParser.T__3);
                this.state = 126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === folParser.CHARACTER) {
                    {
                        {
                            this.state = 123;
                            this.match(folParser.CHARACTER);
                        }
                    }
                    this.state = 128;
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
    folParser.prototype.separator = function () {
        var _localctx = new SeparatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, folParser.RULE_separator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this.match(folParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    folParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.formula_sempred(_localctx, predIndex);
        }
        return true;
    };
    folParser.prototype.formula_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 7);
        }
        return true;
    };
    Object.defineProperty(folParser, "_ATN", {
        get: function () {
            if (!folParser.__ATN) {
                folParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(folParser._serializedATN));
            }
            return folParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    folParser.T__0 = 1;
    folParser.T__1 = 2;
    folParser.T__2 = 3;
    folParser.T__3 = 4;
    folParser.T__4 = 5;
    folParser.LPAREN = 6;
    folParser.RPAREN = 7;
    folParser.EQUAL = 8;
    folParser.NOT = 9;
    folParser.FORALL = 10;
    folParser.EXISTS = 11;
    folParser.CHARACTER = 12;
    folParser.CONJ = 13;
    folParser.DISJ = 14;
    folParser.IMPL = 15;
    folParser.BICOND = 16;
    folParser.ENDLINE = 17;
    folParser.WHITESPACE = 18;
    folParser.RULE_condition = 0;
    folParser.RULE_formula = 1;
    folParser.RULE_term = 2;
    folParser.RULE_bin_connective = 3;
    folParser.RULE_variable = 4;
    folParser.RULE_pred_constant = 5;
    folParser.RULE_ind_constant = 6;
    folParser.RULE_func_constant = 7;
    folParser.RULE_separator = 8;
    // tslint:disable:no-trailing-whitespace
    folParser.ruleNames = [
        "condition", "formula", "term", "bin_connective", "variable", "pred_constant",
        "ind_constant", "func_constant", "separator",
    ];
    folParser._LITERAL_NAMES = [
        undefined, "'?'", "'_'", "'#'", "'.'", "','", "'('", "')'", "'='", "'!'",
        "'Forall'", "'Exists'", undefined, "'\\'", "'^'", "'->'", "'<->'",
    ];
    folParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, "LPAREN",
        "RPAREN", "EQUAL", "NOT", "FORALL", "EXISTS", "CHARACTER", "CONJ", "DISJ",
        "IMPL", "BICOND", "ENDLINE", "WHITESPACE",
    ];
    folParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(folParser._LITERAL_NAMES, folParser._SYMBOLIC_NAMES, []);
    folParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\x86\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x07\x02\x18" +
        "\n\x02\f\x02\x0E\x02\x1B\v\x02\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02" +
        "!\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x07\x03?\n\x03\f\x03\x0E\x03B\v\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x07\x03P\n\x03\f\x03\x0E\x03S\v\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04]\n\x04\f\x04\x0E\x04`\v\x04\x03" +
        "\x04\x03\x04\x05\x04d\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06j\n" +
        "\x06\f\x06\x0E\x06m\v\x06\x03\x07\x03\x07\x07\x07q\n\x07\f\x07\x0E\x07" +
        "t\v\x07\x03\b\x03\b\x07\bx\n\b\f\b\x0E\b{\v\b\x03\t\x03\t\x07\t\x7F\n" +
        "\t\f\t\x0E\t\x82\v\t\x03\n\x03\n\x03\n\x02\x02\x03\x04\v\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x03\x03\x02\x0F" +
        "\x12\x02\x8C\x02\x14\x03\x02\x02\x02\x04I\x03\x02\x02\x02\x06c\x03\x02" +
        "\x02\x02\be\x03\x02\x02\x02\ng\x03\x02\x02\x02\fn\x03\x02\x02\x02\x0E" +
        "u\x03\x02\x02\x02\x10|\x03\x02\x02\x02\x12\x83\x03\x02\x02\x02\x14\x19" +
        "\x05\x04\x03\x02\x15\x16\x07\x13\x02\x02\x16\x18\x05\x04\x03\x02\x17\x15" +
        "\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A" +
        "\x03\x02\x02\x02\x1A\x1F\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x1E" +
        "\x07\x13\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D" +
        "\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!\x1F\x03\x02" +
        "\x02\x02\"#\x07\x02\x02\x03#\x03\x03\x02\x02\x02$%\b\x03\x01\x02%&\x07" +
        "\v\x02\x02&\'\x05\x04\x03\x02\'(\x05\b\x05\x02()\x05\x04\x03\b)J\x03\x02" +
        "\x02\x02*+\x07\v\x02\x02+J\x05\x04\x03\x07,-\x07\f\x02\x02-.\x07\b\x02" +
        "\x02./\x05\n\x06\x02/0\x07\t\x02\x0201\x05\x04\x03\x061J\x03\x02\x02\x02" +
        "23\x07\r\x02\x0234\x07\b\x02\x0245\x05\n\x06\x0256\x07\t\x02\x0267\x05" +
        "\x04\x03\x057J\x03\x02\x02\x0289\x05\f\x07\x029:\x07\b\x02\x02:@\x05\x06" +
        "\x04\x02;<\x05\x12\n\x02<=\x05\x06\x04\x02=?\x03\x02\x02\x02>;\x03\x02" +
        "\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02" +
        "\x02\x02B@\x03\x02\x02\x02CD\x07\t\x02\x02DJ\x03\x02\x02\x02EF\x05\x06" +
        "\x04\x02FG\x07\n\x02\x02GH\x05\x06\x04\x02HJ\x03\x02\x02\x02I$\x03\x02" +
        "\x02\x02I*\x03\x02\x02\x02I,\x03\x02\x02\x02I2\x03\x02\x02\x02I8\x03\x02" +
        "\x02\x02IE\x03\x02\x02\x02JQ\x03\x02\x02\x02KL\f\t\x02\x02LM\x05\b\x05" +
        "\x02MN\x05\x04\x03\nNP\x03\x02\x02\x02OK\x03\x02\x02\x02PS\x03\x02\x02" +
        "\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02R\x05\x03\x02\x02\x02SQ\x03\x02" +
        "\x02\x02Td\x05\x0E\b\x02Ud\x05\n\x06\x02VW\x05\x10\t\x02WX\x07\b\x02\x02" +
        "X^\x05\x06\x04\x02YZ\x05\x12\n\x02Z[\x05\x06\x04\x02[]\x03\x02\x02\x02" +
        "\\Y\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02" +
        "\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07\t\x02\x02bd\x03\x02\x02" +
        "\x02cT\x03\x02\x02\x02cU\x03\x02\x02\x02cV\x03\x02\x02\x02d\x07\x03\x02" +
        "\x02\x02ef\t\x02\x02\x02f\t\x03\x02\x02\x02gk\x07\x03\x02\x02hj\x07\x0E" +
        "\x02\x02ih\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02" +
        "\x02\x02l\v\x03\x02\x02\x02mk\x03\x02\x02\x02nr\x07\x04\x02\x02oq\x07" +
        "\x0E\x02\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03" +
        "\x02\x02\x02s\r\x03\x02\x02\x02tr\x03\x02\x02\x02uy\x07\x05\x02\x02vx" +
        "\x07\x0E\x02\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02" +
        "yz\x03\x02\x02\x02z\x0F\x03\x02\x02\x02{y\x03\x02\x02\x02|\x80\x07\x06" +
        "\x02\x02}\x7F\x07\x0E\x02\x02~}\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02" +
        "\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x11\x03\x02\x02\x02" +
        "\x82\x80\x03\x02\x02\x02\x83\x84\x07\x07\x02\x02\x84\x13\x03\x02\x02\x02" +
        "\r\x19\x1F@IQ^ckry\x80";
    return folParser;
}(Parser_1.Parser));
exports.folParser = folParser;
var ConditionContext = /** @class */ (function (_super) {
    __extends(ConditionContext, _super);
    function ConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionContext.prototype.formula = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormulaContext);
        }
        else {
            return this.getRuleContext(i, FormulaContext);
        }
    };
    ConditionContext.prototype.EOF = function () { return this.getToken(folParser.EOF, 0); };
    ConditionContext.prototype.ENDLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(folParser.ENDLINE);
        }
        else {
            return this.getToken(folParser.ENDLINE, i);
        }
    };
    Object.defineProperty(ConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_condition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionContext = ConditionContext;
var FormulaContext = /** @class */ (function (_super) {
    __extends(FormulaContext, _super);
    function FormulaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormulaContext.prototype.formula = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormulaContext);
        }
        else {
            return this.getRuleContext(i, FormulaContext);
        }
    };
    FormulaContext.prototype.bin_connective = function () {
        return this.tryGetRuleContext(0, Bin_connectiveContext);
    };
    FormulaContext.prototype.NOT = function () { return this.tryGetToken(folParser.NOT, 0); };
    FormulaContext.prototype.FORALL = function () { return this.tryGetToken(folParser.FORALL, 0); };
    FormulaContext.prototype.LPAREN = function () { return this.tryGetToken(folParser.LPAREN, 0); };
    FormulaContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    FormulaContext.prototype.RPAREN = function () { return this.tryGetToken(folParser.RPAREN, 0); };
    FormulaContext.prototype.EXISTS = function () { return this.tryGetToken(folParser.EXISTS, 0); };
    FormulaContext.prototype.pred_constant = function () {
        return this.tryGetRuleContext(0, Pred_constantContext);
    };
    FormulaContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    FormulaContext.prototype.separator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SeparatorContext);
        }
        else {
            return this.getRuleContext(i, SeparatorContext);
        }
    };
    FormulaContext.prototype.EQUAL = function () { return this.tryGetToken(folParser.EQUAL, 0); };
    Object.defineProperty(FormulaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_formula; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormulaContext.prototype.enterRule = function (listener) {
        if (listener.enterFormula) {
            listener.enterFormula(this);
        }
    };
    // @Override
    FormulaContext.prototype.exitRule = function (listener) {
        if (listener.exitFormula) {
            listener.exitFormula(this);
        }
    };
    // @Override
    FormulaContext.prototype.accept = function (visitor) {
        if (visitor.visitFormula) {
            return visitor.visitFormula(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormulaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormulaContext = FormulaContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.ind_constant = function () {
        return this.tryGetRuleContext(0, Ind_constantContext);
    };
    TermContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    TermContext.prototype.func_constant = function () {
        return this.tryGetRuleContext(0, Func_constantContext);
    };
    TermContext.prototype.LPAREN = function () { return this.tryGetToken(folParser.LPAREN, 0); };
    TermContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    TermContext.prototype.RPAREN = function () { return this.tryGetToken(folParser.RPAREN, 0); };
    TermContext.prototype.separator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SeparatorContext);
        }
        else {
            return this.getRuleContext(i, SeparatorContext);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_term; },
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
var Bin_connectiveContext = /** @class */ (function (_super) {
    __extends(Bin_connectiveContext, _super);
    function Bin_connectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bin_connectiveContext.prototype.CONJ = function () { return this.tryGetToken(folParser.CONJ, 0); };
    Bin_connectiveContext.prototype.DISJ = function () { return this.tryGetToken(folParser.DISJ, 0); };
    Bin_connectiveContext.prototype.IMPL = function () { return this.tryGetToken(folParser.IMPL, 0); };
    Bin_connectiveContext.prototype.BICOND = function () { return this.tryGetToken(folParser.BICOND, 0); };
    Object.defineProperty(Bin_connectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_bin_connective; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bin_connectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterBin_connective) {
            listener.enterBin_connective(this);
        }
    };
    // @Override
    Bin_connectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitBin_connective) {
            listener.exitBin_connective(this);
        }
    };
    // @Override
    Bin_connectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitBin_connective) {
            return visitor.visitBin_connective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bin_connectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bin_connectiveContext = Bin_connectiveContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.CHARACTER = function (i) {
        if (i === undefined) {
            return this.getTokens(folParser.CHARACTER);
        }
        else {
            return this.getToken(folParser.CHARACTER, i);
        }
    };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_variable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableContext.prototype.enterRule = function (listener) {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    };
    // @Override
    VariableContext.prototype.exitRule = function (listener) {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    };
    // @Override
    VariableContext.prototype.accept = function (visitor) {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableContext = VariableContext;
var Pred_constantContext = /** @class */ (function (_super) {
    __extends(Pred_constantContext, _super);
    function Pred_constantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pred_constantContext.prototype.CHARACTER = function (i) {
        if (i === undefined) {
            return this.getTokens(folParser.CHARACTER);
        }
        else {
            return this.getToken(folParser.CHARACTER, i);
        }
    };
    Object.defineProperty(Pred_constantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_pred_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pred_constantContext.prototype.enterRule = function (listener) {
        if (listener.enterPred_constant) {
            listener.enterPred_constant(this);
        }
    };
    // @Override
    Pred_constantContext.prototype.exitRule = function (listener) {
        if (listener.exitPred_constant) {
            listener.exitPred_constant(this);
        }
    };
    // @Override
    Pred_constantContext.prototype.accept = function (visitor) {
        if (visitor.visitPred_constant) {
            return visitor.visitPred_constant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pred_constantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pred_constantContext = Pred_constantContext;
var Ind_constantContext = /** @class */ (function (_super) {
    __extends(Ind_constantContext, _super);
    function Ind_constantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ind_constantContext.prototype.CHARACTER = function (i) {
        if (i === undefined) {
            return this.getTokens(folParser.CHARACTER);
        }
        else {
            return this.getToken(folParser.CHARACTER, i);
        }
    };
    Object.defineProperty(Ind_constantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_ind_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ind_constantContext.prototype.enterRule = function (listener) {
        if (listener.enterInd_constant) {
            listener.enterInd_constant(this);
        }
    };
    // @Override
    Ind_constantContext.prototype.exitRule = function (listener) {
        if (listener.exitInd_constant) {
            listener.exitInd_constant(this);
        }
    };
    // @Override
    Ind_constantContext.prototype.accept = function (visitor) {
        if (visitor.visitInd_constant) {
            return visitor.visitInd_constant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ind_constantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ind_constantContext = Ind_constantContext;
var Func_constantContext = /** @class */ (function (_super) {
    __extends(Func_constantContext, _super);
    function Func_constantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Func_constantContext.prototype.CHARACTER = function (i) {
        if (i === undefined) {
            return this.getTokens(folParser.CHARACTER);
        }
        else {
            return this.getToken(folParser.CHARACTER, i);
        }
    };
    Object.defineProperty(Func_constantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_func_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Func_constantContext.prototype.enterRule = function (listener) {
        if (listener.enterFunc_constant) {
            listener.enterFunc_constant(this);
        }
    };
    // @Override
    Func_constantContext.prototype.exitRule = function (listener) {
        if (listener.exitFunc_constant) {
            listener.exitFunc_constant(this);
        }
    };
    // @Override
    Func_constantContext.prototype.accept = function (visitor) {
        if (visitor.visitFunc_constant) {
            return visitor.visitFunc_constant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Func_constantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Func_constantContext = Func_constantContext;
var SeparatorContext = /** @class */ (function (_super) {
    __extends(SeparatorContext, _super);
    function SeparatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SeparatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return folParser.RULE_separator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SeparatorContext.prototype.enterRule = function (listener) {
        if (listener.enterSeparator) {
            listener.enterSeparator(this);
        }
    };
    // @Override
    SeparatorContext.prototype.exitRule = function (listener) {
        if (listener.exitSeparator) {
            listener.exitSeparator(this);
        }
    };
    // @Override
    SeparatorContext.prototype.accept = function (visitor) {
        if (visitor.visitSeparator) {
            return visitor.visitSeparator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SeparatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SeparatorContext = SeparatorContext;
