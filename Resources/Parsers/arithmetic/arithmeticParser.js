"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/arithmetic/arithmetic.g4 by ANTLR 4.7.3-SNAPSHOT
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
var arithmeticParser = /** @class */ (function (_super) {
    __extends(arithmeticParser, _super);
    function arithmeticParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(arithmeticParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(arithmeticParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return arithmeticParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "arithmetic.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticParser.prototype, "ruleNames", {
        // @Override
        get: function () { return arithmeticParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticParser.prototype, "serializedATN", {
        // @Override
        get: function () { return arithmeticParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    arithmeticParser.prototype.file = function () {
        var _localctx = new FileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, arithmeticParser.RULE_file);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << arithmeticParser.VARIABLE) | (1 << arithmeticParser.SCIENTIFIC_NUMBER) | (1 << arithmeticParser.LPAREN) | (1 << arithmeticParser.PLUS) | (1 << arithmeticParser.MINUS))) !== 0)) {
                    {
                        {
                            this.state = 14;
                            this.equation();
                        }
                    }
                    this.state = 19;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 20;
                this.match(arithmeticParser.EOF);
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
    arithmeticParser.prototype.equation = function () {
        var _localctx = new EquationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, arithmeticParser.RULE_equation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 22;
                this.expression(0);
                this.state = 23;
                this.relop();
                this.state = 24;
                this.expression(0);
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
    arithmeticParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 4;
        this.enterRecursionRule(_localctx, 4, arithmeticParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case arithmeticParser.LPAREN:
                        {
                            this.state = 27;
                            this.match(arithmeticParser.LPAREN);
                            this.state = 28;
                            this.expression(0);
                            this.state = 29;
                            this.match(arithmeticParser.RPAREN);
                        }
                        break;
                    case arithmeticParser.VARIABLE:
                    case arithmeticParser.SCIENTIFIC_NUMBER:
                    case arithmeticParser.PLUS:
                    case arithmeticParser.MINUS:
                        {
                            this.state = 34;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === arithmeticParser.PLUS || _la === arithmeticParser.MINUS) {
                                {
                                    {
                                        this.state = 31;
                                        _la = this._input.LA(1);
                                        if (!(_la === arithmeticParser.PLUS || _la === arithmeticParser.MINUS)) {
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
                                this.state = 36;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 37;
                            this.atom();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 51;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 49;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, arithmeticParser.RULE_expression);
                                        this.state = 40;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 41;
                                        this.match(arithmeticParser.POW);
                                        this.state = 42;
                                        this.expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, arithmeticParser.RULE_expression);
                                        this.state = 43;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 44;
                                        _la = this._input.LA(1);
                                        if (!(_la === arithmeticParser.TIMES || _la === arithmeticParser.DIV)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 45;
                                        this.expression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, arithmeticParser.RULE_expression);
                                        this.state = 46;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 47;
                                        _la = this._input.LA(1);
                                        if (!(_la === arithmeticParser.PLUS || _la === arithmeticParser.MINUS)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 48;
                                        this.expression(4);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 53;
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
    arithmeticParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, arithmeticParser.RULE_atom);
        try {
            this.state = 56;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case arithmeticParser.SCIENTIFIC_NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 54;
                        this.scientific();
                    }
                    break;
                case arithmeticParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 55;
                        this.variable();
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
    arithmeticParser.prototype.scientific = function () {
        var _localctx = new ScientificContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, arithmeticParser.RULE_scientific);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this.match(arithmeticParser.SCIENTIFIC_NUMBER);
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
    arithmeticParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, arithmeticParser.RULE_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.match(arithmeticParser.VARIABLE);
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
    arithmeticParser.prototype.relop = function () {
        var _localctx = new RelopContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, arithmeticParser.RULE_relop);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 62;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << arithmeticParser.GT) | (1 << arithmeticParser.LT) | (1 << arithmeticParser.EQ))) !== 0))) {
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
    arithmeticParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    arithmeticParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
            case 2:
                return this.precpred(this._ctx, 3);
        }
        return true;
    };
    Object.defineProperty(arithmeticParser, "_ATN", {
        get: function () {
            if (!arithmeticParser.__ATN) {
                arithmeticParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(arithmeticParser._serializedATN));
            }
            return arithmeticParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    arithmeticParser.VARIABLE = 1;
    arithmeticParser.SCIENTIFIC_NUMBER = 2;
    arithmeticParser.LPAREN = 3;
    arithmeticParser.RPAREN = 4;
    arithmeticParser.PLUS = 5;
    arithmeticParser.MINUS = 6;
    arithmeticParser.TIMES = 7;
    arithmeticParser.DIV = 8;
    arithmeticParser.GT = 9;
    arithmeticParser.LT = 10;
    arithmeticParser.EQ = 11;
    arithmeticParser.POINT = 12;
    arithmeticParser.POW = 13;
    arithmeticParser.WS = 14;
    arithmeticParser.RULE_file = 0;
    arithmeticParser.RULE_equation = 1;
    arithmeticParser.RULE_expression = 2;
    arithmeticParser.RULE_atom = 3;
    arithmeticParser.RULE_scientific = 4;
    arithmeticParser.RULE_variable = 5;
    arithmeticParser.RULE_relop = 6;
    // tslint:disable:no-trailing-whitespace
    arithmeticParser.ruleNames = [
        "file", "equation", "expression", "atom", "scientific", "variable", "relop",
    ];
    arithmeticParser._LITERAL_NAMES = [
        undefined, undefined, undefined, "'('", "')'", "'+'", "'-'", "'*'", "'/'",
        "'>'", "'<'", "'='", "'.'", "'^'",
    ];
    arithmeticParser._SYMBOLIC_NAMES = [
        undefined, "VARIABLE", "SCIENTIFIC_NUMBER", "LPAREN", "RPAREN", "PLUS",
        "MINUS", "TIMES", "DIV", "GT", "LT", "EQ", "POINT", "POW", "WS",
    ];
    arithmeticParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(arithmeticParser._LITERAL_NAMES, arithmeticParser._SYMBOLIC_NAMES, []);
    arithmeticParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10C\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x07\x04#\n\x04\f\x04\x0E\x04&\v\x04\x03\x04\x05\x04" +
        ")\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x07\x044\n\x04\f\x04\x0E\x047\v\x04\x03\x05\x03\x05\x05\x05;" +
        "\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x03\x06" +
        "\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x05\x03\x02\x07" +
        "\b\x03\x02\t\n\x03\x02\v\r\x02B\x02\x13\x03\x02\x02\x02\x04\x18\x03\x02" +
        "\x02\x02\x06(\x03\x02\x02\x02\b:\x03\x02\x02\x02\n<\x03\x02\x02\x02\f" +
        ">\x03\x02\x02\x02\x0E@\x03\x02\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10" +
        "\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14" +
        "\x03\x02\x02\x02\x14\x16\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x17" +
        "\x07\x02\x02\x03\x17\x03\x03\x02\x02\x02\x18\x19\x05\x06\x04\x02\x19\x1A" +
        "\x05\x0E\b\x02\x1A\x1B\x05\x06\x04\x02\x1B\x05\x03\x02\x02\x02\x1C\x1D" +
        "\b\x04\x01\x02\x1D\x1E\x07\x05\x02\x02\x1E\x1F\x05\x06\x04\x02\x1F \x07" +
        "\x06\x02\x02 )\x03\x02\x02\x02!#\t\x02\x02\x02\"!\x03\x02\x02\x02#&\x03" +
        "\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x03\x02\x02\x02&" +
        "$\x03\x02\x02\x02\')\x05\b\x05\x02(\x1C\x03\x02\x02\x02($\x03\x02\x02" +
        "\x02)5\x03\x02\x02\x02*+\f\x07\x02\x02+,\x07\x0F\x02\x02,4\x05\x06\x04" +
        "\b-.\f\x06\x02\x02./\t\x03\x02\x02/4\x05\x06\x04\x0701\f\x05\x02\x021" +
        "2\t\x02\x02\x0224\x05\x06\x04\x063*\x03\x02\x02\x023-\x03\x02\x02\x02" +
        "30\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x02" +
        "6\x07\x03\x02\x02\x0275\x03\x02\x02\x028;\x05\n\x06\x029;\x05\f\x07\x02" +
        ":8\x03\x02\x02\x02:9\x03\x02\x02\x02;\t\x03\x02\x02\x02<=\x07\x04\x02" +
        "\x02=\v\x03\x02\x02\x02>?\x07\x03\x02\x02?\r\x03\x02\x02\x02@A\t\x04\x02" +
        "\x02A\x0F\x03\x02\x02\x02\b\x13$(35:";
    return arithmeticParser;
}(Parser_1.Parser));
exports.arithmeticParser = arithmeticParser;
var FileContext = /** @class */ (function (_super) {
    __extends(FileContext, _super);
    function FileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileContext.prototype.EOF = function () { return this.getToken(arithmeticParser.EOF, 0); };
    FileContext.prototype.equation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EquationContext);
        }
        else {
            return this.getRuleContext(i, EquationContext);
        }
    };
    Object.defineProperty(FileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return arithmeticParser.RULE_file; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FileContext.prototype.enterRule = function (listener) {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    };
    // @Override
    FileContext.prototype.exitRule = function (listener) {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    };
    // @Override
    FileContext.prototype.accept = function (visitor) {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FileContext = FileContext;
var EquationContext = /** @class */ (function (_super) {
    __extends(EquationContext, _super);
    function EquationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EquationContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    EquationContext.prototype.relop = function () {
        return this.getRuleContext(0, RelopContext);
    };
    Object.defineProperty(EquationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return arithmeticParser.RULE_equation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EquationContext.prototype.enterRule = function (listener) {
        if (listener.enterEquation) {
            listener.enterEquation(this);
        }
    };
    // @Override
    EquationContext.prototype.exitRule = function (listener) {
        if (listener.exitEquation) {
            listener.exitEquation(this);
        }
    };
    // @Override
    EquationContext.prototype.accept = function (visitor) {
        if (visitor.visitEquation) {
            return visitor.visitEquation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EquationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EquationContext = EquationContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ExpressionContext.prototype.POW = function () { return this.tryGetToken(arithmeticParser.POW, 0); };
    ExpressionContext.prototype.TIMES = function () { return this.tryGetToken(arithmeticParser.TIMES, 0); };
    ExpressionContext.prototype.DIV = function () { return this.tryGetToken(arithmeticParser.DIV, 0); };
    ExpressionContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(arithmeticParser.PLUS);
        }
        else {
            return this.getToken(arithmeticParser.PLUS, i);
        }
    };
    ExpressionContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(arithmeticParser.MINUS);
        }
        else {
            return this.getToken(arithmeticParser.MINUS, i);
        }
    };
    ExpressionContext.prototype.LPAREN = function () { return this.tryGetToken(arithmeticParser.LPAREN, 0); };
    ExpressionContext.prototype.RPAREN = function () { return this.tryGetToken(arithmeticParser.RPAREN, 0); };
    ExpressionContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return arithmeticParser.RULE_expression; },
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
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.scientific = function () {
        return this.tryGetRuleContext(0, ScientificContext);
    };
    AtomContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return arithmeticParser.RULE_atom; },
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
var ScientificContext = /** @class */ (function (_super) {
    __extends(ScientificContext, _super);
    function ScientificContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScientificContext.prototype.SCIENTIFIC_NUMBER = function () { return this.getToken(arithmeticParser.SCIENTIFIC_NUMBER, 0); };
    Object.defineProperty(ScientificContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return arithmeticParser.RULE_scientific; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScientificContext.prototype.enterRule = function (listener) {
        if (listener.enterScientific) {
            listener.enterScientific(this);
        }
    };
    // @Override
    ScientificContext.prototype.exitRule = function (listener) {
        if (listener.exitScientific) {
            listener.exitScientific(this);
        }
    };
    // @Override
    ScientificContext.prototype.accept = function (visitor) {
        if (visitor.visitScientific) {
            return visitor.visitScientific(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScientificContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScientificContext = ScientificContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.VARIABLE = function () { return this.getToken(arithmeticParser.VARIABLE, 0); };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return arithmeticParser.RULE_variable; },
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
var RelopContext = /** @class */ (function (_super) {
    __extends(RelopContext, _super);
    function RelopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelopContext.prototype.EQ = function () { return this.tryGetToken(arithmeticParser.EQ, 0); };
    RelopContext.prototype.GT = function () { return this.tryGetToken(arithmeticParser.GT, 0); };
    RelopContext.prototype.LT = function () { return this.tryGetToken(arithmeticParser.LT, 0); };
    Object.defineProperty(RelopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return arithmeticParser.RULE_relop; },
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
