"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnt/tnt.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tntParser = /** @class */ (function (_super) {
    __extends(tntParser, _super);
    function tntParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(tntParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(tntParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tntParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "tnt.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntParser.prototype, "ruleNames", {
        // @Override
        get: function () { return tntParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntParser.prototype, "serializedATN", {
        // @Override
        get: function () { return tntParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    tntParser.prototype.equation = function () {
        var _localctx = new EquationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tntParser.RULE_equation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 14;
                this.expression(0);
                this.state = 15;
                this.match(tntParser.T__0);
                this.state = 16;
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
    tntParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, tntParser.RULE_atom);
        try {
            this.state = 20;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 18;
                        this.number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 19;
                        this.variable();
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
    tntParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tntParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tntParser.SUCCESSOR) {
                    {
                        {
                            this.state = 22;
                            this.match(tntParser.SUCCESSOR);
                        }
                    }
                    this.state = 27;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 28;
                this.match(tntParser.ZERO);
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
    tntParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tntParser.RULE_variable);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 33;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tntParser.SUCCESSOR) {
                    {
                        {
                            this.state = 30;
                            this.match(tntParser.SUCCESSOR);
                        }
                    }
                    this.state = 35;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 36;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tntParser.A) | (1 << tntParser.B) | (1 << tntParser.C) | (1 << tntParser.D) | (1 << tntParser.E))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 40;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 37;
                                this.match(tntParser.PRIME);
                            }
                        }
                    }
                    this.state = 42;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
    tntParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 8;
        this.enterRecursionRule(_localctx, 8, tntParser.RULE_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case tntParser.ZERO:
                    case tntParser.SUCCESSOR:
                    case tntParser.A:
                    case tntParser.B:
                    case tntParser.C:
                    case tntParser.D:
                    case tntParser.E:
                        {
                            this.state = 44;
                            this.atom();
                        }
                        break;
                    case tntParser.T__3:
                        {
                            this.state = 45;
                            this.match(tntParser.T__3);
                            this.state = 46;
                            this.expression(0);
                            this.state = 47;
                            this.match(tntParser.T__4);
                        }
                        break;
                    case tntParser.T__5:
                        {
                            this.state = 49;
                            this.match(tntParser.T__5);
                            this.state = 50;
                            this.expression(3);
                        }
                        break;
                    case tntParser.FOREVERY:
                        {
                            this.state = 51;
                            this.forevery();
                            this.state = 52;
                            this.expression(2);
                        }
                        break;
                    case tntParser.EXISTS:
                        {
                            this.state = 54;
                            this.exists();
                            this.state = 55;
                            this.expression(1);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 67;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 65;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, tntParser.RULE_expression);
                                        this.state = 59;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 60;
                                        this.match(tntParser.T__1);
                                        this.state = 61;
                                        this.expression(7);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, tntParser.RULE_expression);
                                        this.state = 62;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 63;
                                        this.match(tntParser.T__2);
                                        this.state = 64;
                                        this.expression(6);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 69;
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
    tntParser.prototype.forevery = function () {
        var _localctx = new ForeveryContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, tntParser.RULE_forevery);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.match(tntParser.FOREVERY);
                this.state = 71;
                this.variable();
                this.state = 72;
                this.match(tntParser.T__6);
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
    tntParser.prototype.exists = function () {
        var _localctx = new ExistsContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, tntParser.RULE_exists);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.match(tntParser.EXISTS);
                this.state = 75;
                this.variable();
                this.state = 76;
                this.match(tntParser.T__6);
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
    tntParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 4:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    tntParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 6);
            case 1:
                return this.precpred(this._ctx, 5);
        }
        return true;
    };
    Object.defineProperty(tntParser, "_ATN", {
        get: function () {
            if (!tntParser.__ATN) {
                tntParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tntParser._serializedATN));
            }
            return tntParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tntParser.T__0 = 1;
    tntParser.T__1 = 2;
    tntParser.T__2 = 3;
    tntParser.T__3 = 4;
    tntParser.T__4 = 5;
    tntParser.T__5 = 6;
    tntParser.T__6 = 7;
    tntParser.ZERO = 8;
    tntParser.SUCCESSOR = 9;
    tntParser.A = 10;
    tntParser.B = 11;
    tntParser.C = 12;
    tntParser.D = 13;
    tntParser.E = 14;
    tntParser.PRIME = 15;
    tntParser.FOREVERY = 16;
    tntParser.EXISTS = 17;
    tntParser.WS = 18;
    tntParser.RULE_equation = 0;
    tntParser.RULE_atom = 1;
    tntParser.RULE_number = 2;
    tntParser.RULE_variable = 3;
    tntParser.RULE_expression = 4;
    tntParser.RULE_forevery = 5;
    tntParser.RULE_exists = 6;
    // tslint:disable:no-trailing-whitespace
    tntParser.ruleNames = [
        "equation", "atom", "number", "variable", "expression", "forevery", "exists",
    ];
    tntParser._LITERAL_NAMES = [
        undefined, "'='", "'+'", "'*'", "'('", "')'", "'~'", "':'", "'0'", "'S'",
        "'a'", "'b'", "'c'", "'d'", "'e'", "'''", "'A'", "'E'",
    ];
    tntParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "ZERO", "SUCCESSOR", "A", "B", "C", "D", "E", "PRIME", "FOREVERY",
        "EXISTS", "WS",
    ];
    tntParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tntParser._LITERAL_NAMES, tntParser._SYMBOLIC_NAMES, []);
    tntParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14Q\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03" +
        "\x17\n\x03\x03\x04\x07\x04\x1A\n\x04\f\x04\x0E\x04\x1D\v\x04\x03\x04\x03" +
        "\x04\x03\x05\x07\x05\"\n\x05\f\x05\x0E\x05%\v\x05\x03\x05\x03\x05\x07" +
        "\x05)\n\x05\f\x05\x0E\x05,\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x05\x06<\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
        "D\n\x06\f\x06\x0E\x06G\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x02\x02\x03\n\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
        "\f\x02\x0E\x02\x02\x03\x03\x02\f\x10\x02S\x02\x10\x03\x02\x02\x02\x04" +
        "\x16\x03\x02\x02\x02\x06\x1B\x03\x02\x02\x02\b#\x03\x02\x02\x02\n;\x03" +
        "\x02\x02\x02\fH\x03\x02\x02\x02\x0EL\x03\x02\x02\x02\x10\x11\x05\n\x06" +
        "\x02\x11\x12\x07\x03\x02\x02\x12\x13\x05\n\x06\x02\x13\x03\x03\x02\x02" +
        "\x02\x14\x17\x05\x06\x04\x02\x15\x17\x05\b\x05\x02\x16\x14\x03\x02\x02" +
        "\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x1A\x07\v\x02" +
        "\x02\x19\x18\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02" +
        "\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x03\x02\x02\x02\x1D\x1B\x03\x02\x02" +
        "\x02\x1E\x1F\x07\n\x02\x02\x1F\x07\x03\x02\x02\x02 \"\x07\v\x02\x02! " +
        "\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02" +
        "$&\x03\x02\x02\x02%#\x03\x02\x02\x02&*\t\x02\x02\x02\')\x07\x11\x02\x02" +
        "(\'\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02*+\x03\x02\x02" +
        "\x02+\t\x03\x02\x02\x02,*\x03\x02\x02\x02-.\b\x06\x01\x02.<\x05\x04\x03" +
        "\x02/0\x07\x06\x02\x0201\x05\n\x06\x0212\x07\x07\x02\x022<\x03\x02\x02" +
        "\x0234\x07\b\x02\x024<\x05\n\x06\x0556\x05\f\x07\x0267\x05\n\x06\x047" +
        "<\x03\x02\x02\x0289\x05\x0E\b\x029:\x05\n\x06\x03:<\x03\x02\x02\x02;-" +
        "\x03\x02\x02\x02;/\x03\x02\x02\x02;3\x03\x02\x02\x02;5\x03\x02\x02\x02" +
        ";8\x03\x02\x02\x02<E\x03\x02\x02\x02=>\f\b\x02\x02>?\x07\x04\x02\x02?" +
        "D\x05\n\x06\t@A\f\x07\x02\x02AB\x07\x05\x02\x02BD\x05\n\x06\bC=\x03\x02" +
        "\x02\x02C@\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02" +
        "\x02\x02F\v\x03\x02\x02\x02GE\x03\x02\x02\x02HI\x07\x12\x02\x02IJ\x05" +
        "\b\x05\x02JK\x07\t\x02\x02K\r\x03\x02\x02\x02LM\x07\x13\x02\x02MN\x05" +
        "\b\x05\x02NO\x07\t\x02\x02O\x0F\x03\x02\x02\x02\t\x16\x1B#*;CE";
    return tntParser;
}(Parser_1.Parser));
exports.tntParser = tntParser;
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
    Object.defineProperty(EquationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tntParser.RULE_equation; },
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
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    AtomContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tntParser.RULE_atom; },
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
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.ZERO = function () { return this.getToken(tntParser.ZERO, 0); };
    NumberContext.prototype.SUCCESSOR = function (i) {
        if (i === undefined) {
            return this.getTokens(tntParser.SUCCESSOR);
        }
        else {
            return this.getToken(tntParser.SUCCESSOR, i);
        }
    };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tntParser.RULE_number; },
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
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.A = function () { return this.tryGetToken(tntParser.A, 0); };
    VariableContext.prototype.B = function () { return this.tryGetToken(tntParser.B, 0); };
    VariableContext.prototype.C = function () { return this.tryGetToken(tntParser.C, 0); };
    VariableContext.prototype.D = function () { return this.tryGetToken(tntParser.D, 0); };
    VariableContext.prototype.E = function () { return this.tryGetToken(tntParser.E, 0); };
    VariableContext.prototype.SUCCESSOR = function (i) {
        if (i === undefined) {
            return this.getTokens(tntParser.SUCCESSOR);
        }
        else {
            return this.getToken(tntParser.SUCCESSOR, i);
        }
    };
    VariableContext.prototype.PRIME = function (i) {
        if (i === undefined) {
            return this.getTokens(tntParser.PRIME);
        }
        else {
            return this.getToken(tntParser.PRIME, i);
        }
    };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tntParser.RULE_variable; },
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
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    ExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ExpressionContext.prototype.forevery = function () {
        return this.tryGetRuleContext(0, ForeveryContext);
    };
    ExpressionContext.prototype.exists = function () {
        return this.tryGetRuleContext(0, ExistsContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tntParser.RULE_expression; },
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
var ForeveryContext = /** @class */ (function (_super) {
    __extends(ForeveryContext, _super);
    function ForeveryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForeveryContext.prototype.FOREVERY = function () { return this.getToken(tntParser.FOREVERY, 0); };
    ForeveryContext.prototype.variable = function () {
        return this.getRuleContext(0, VariableContext);
    };
    Object.defineProperty(ForeveryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tntParser.RULE_forevery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForeveryContext.prototype.enterRule = function (listener) {
        if (listener.enterForevery) {
            listener.enterForevery(this);
        }
    };
    // @Override
    ForeveryContext.prototype.exitRule = function (listener) {
        if (listener.exitForevery) {
            listener.exitForevery(this);
        }
    };
    // @Override
    ForeveryContext.prototype.accept = function (visitor) {
        if (visitor.visitForevery) {
            return visitor.visitForevery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForeveryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForeveryContext = ForeveryContext;
var ExistsContext = /** @class */ (function (_super) {
    __extends(ExistsContext, _super);
    function ExistsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExistsContext.prototype.EXISTS = function () { return this.getToken(tntParser.EXISTS, 0); };
    ExistsContext.prototype.variable = function () {
        return this.getRuleContext(0, VariableContext);
    };
    Object.defineProperty(ExistsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tntParser.RULE_exists; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExistsContext.prototype.enterRule = function (listener) {
        if (listener.enterExists) {
            listener.enterExists(this);
        }
    };
    // @Override
    ExistsContext.prototype.exitRule = function (listener) {
        if (listener.exitExists) {
            listener.exitExists(this);
        }
    };
    // @Override
    ExistsContext.prototype.accept = function (visitor) {
        if (visitor.visitExists) {
            return visitor.visitExists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExistsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExistsContext = ExistsContext;
