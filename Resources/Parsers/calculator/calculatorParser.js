"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/calculator/calculator.g4 by ANTLR 4.7.3-SNAPSHOT
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
var calculatorParser = /** @class */ (function (_super) {
    __extends(calculatorParser, _super);
    function calculatorParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(calculatorParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(calculatorParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return calculatorParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(calculatorParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "calculator.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(calculatorParser.prototype, "ruleNames", {
        // @Override
        get: function () { return calculatorParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(calculatorParser.prototype, "serializedATN", {
        // @Override
        get: function () { return calculatorParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    calculatorParser.prototype.equation = function () {
        var _localctx = new EquationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, calculatorParser.RULE_equation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                this.expression();
                this.state = 25;
                this.relop();
                this.state = 26;
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
    calculatorParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, calculatorParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this.multiplyingExpression();
                this.state = 33;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === calculatorParser.PLUS || _la === calculatorParser.MINUS) {
                    {
                        {
                            this.state = 29;
                            _la = this._input.LA(1);
                            if (!(_la === calculatorParser.PLUS || _la === calculatorParser.MINUS)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 30;
                            this.multiplyingExpression();
                        }
                    }
                    this.state = 35;
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
    calculatorParser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, calculatorParser.RULE_multiplyingExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 36;
                this.powExpression();
                this.state = 41;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === calculatorParser.TIMES || _la === calculatorParser.DIV) {
                    {
                        {
                            this.state = 37;
                            _la = this._input.LA(1);
                            if (!(_la === calculatorParser.TIMES || _la === calculatorParser.DIV)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 38;
                            this.powExpression();
                        }
                    }
                    this.state = 43;
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
    calculatorParser.prototype.powExpression = function () {
        var _localctx = new PowExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, calculatorParser.RULE_powExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this.signedAtom();
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === calculatorParser.POW) {
                    {
                        {
                            this.state = 45;
                            this.match(calculatorParser.POW);
                            this.state = 46;
                            this.signedAtom();
                        }
                    }
                    this.state = 51;
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
    calculatorParser.prototype.signedAtom = function () {
        var _localctx = new SignedAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, calculatorParser.RULE_signedAtom);
        try {
            this.state = 58;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case calculatorParser.PLUS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 52;
                        this.match(calculatorParser.PLUS);
                        this.state = 53;
                        this.signedAtom();
                    }
                    break;
                case calculatorParser.MINUS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 54;
                        this.match(calculatorParser.MINUS);
                        this.state = 55;
                        this.signedAtom();
                    }
                    break;
                case calculatorParser.COS:
                case calculatorParser.SIN:
                case calculatorParser.TAN:
                case calculatorParser.ACOS:
                case calculatorParser.ASIN:
                case calculatorParser.ATAN:
                case calculatorParser.LN:
                case calculatorParser.LOG:
                case calculatorParser.SQRT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 56;
                        this.func();
                    }
                    break;
                case calculatorParser.LPAREN:
                case calculatorParser.PI:
                case calculatorParser.EULER:
                case calculatorParser.I:
                case calculatorParser.VARIABLE:
                case calculatorParser.SCIENTIFIC_NUMBER:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 57;
                        this.atom();
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
    calculatorParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, calculatorParser.RULE_atom);
        try {
            this.state = 67;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case calculatorParser.SCIENTIFIC_NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 60;
                        this.scientific();
                    }
                    break;
                case calculatorParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 61;
                        this.variable();
                    }
                    break;
                case calculatorParser.PI:
                case calculatorParser.EULER:
                case calculatorParser.I:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 62;
                        this.constant();
                    }
                    break;
                case calculatorParser.LPAREN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 63;
                        this.match(calculatorParser.LPAREN);
                        this.state = 64;
                        this.expression();
                        this.state = 65;
                        this.match(calculatorParser.RPAREN);
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
    calculatorParser.prototype.scientific = function () {
        var _localctx = new ScientificContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, calculatorParser.RULE_scientific);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 69;
                this.match(calculatorParser.SCIENTIFIC_NUMBER);
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
    calculatorParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, calculatorParser.RULE_constant);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calculatorParser.PI) | (1 << calculatorParser.EULER) | (1 << calculatorParser.I))) !== 0))) {
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
    calculatorParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, calculatorParser.RULE_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this.match(calculatorParser.VARIABLE);
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
    calculatorParser.prototype.func = function () {
        var _localctx = new FuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, calculatorParser.RULE_func);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this.funcname();
                this.state = 76;
                this.match(calculatorParser.LPAREN);
                this.state = 77;
                this.expression();
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === calculatorParser.COMMA) {
                    {
                        {
                            this.state = 78;
                            this.match(calculatorParser.COMMA);
                            this.state = 79;
                            this.expression();
                        }
                    }
                    this.state = 84;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 85;
                this.match(calculatorParser.RPAREN);
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
    calculatorParser.prototype.funcname = function () {
        var _localctx = new FuncnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, calculatorParser.RULE_funcname);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calculatorParser.COS) | (1 << calculatorParser.SIN) | (1 << calculatorParser.TAN) | (1 << calculatorParser.ACOS) | (1 << calculatorParser.ASIN) | (1 << calculatorParser.ATAN) | (1 << calculatorParser.LN) | (1 << calculatorParser.LOG) | (1 << calculatorParser.SQRT))) !== 0))) {
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
    calculatorParser.prototype.relop = function () {
        var _localctx = new RelopContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, calculatorParser.RULE_relop);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calculatorParser.GT) | (1 << calculatorParser.LT) | (1 << calculatorParser.EQ))) !== 0))) {
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
    Object.defineProperty(calculatorParser, "_ATN", {
        get: function () {
            if (!calculatorParser.__ATN) {
                calculatorParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(calculatorParser._serializedATN));
            }
            return calculatorParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    calculatorParser.COS = 1;
    calculatorParser.SIN = 2;
    calculatorParser.TAN = 3;
    calculatorParser.ACOS = 4;
    calculatorParser.ASIN = 5;
    calculatorParser.ATAN = 6;
    calculatorParser.LN = 7;
    calculatorParser.LOG = 8;
    calculatorParser.SQRT = 9;
    calculatorParser.LPAREN = 10;
    calculatorParser.RPAREN = 11;
    calculatorParser.PLUS = 12;
    calculatorParser.MINUS = 13;
    calculatorParser.TIMES = 14;
    calculatorParser.DIV = 15;
    calculatorParser.GT = 16;
    calculatorParser.LT = 17;
    calculatorParser.EQ = 18;
    calculatorParser.COMMA = 19;
    calculatorParser.POINT = 20;
    calculatorParser.POW = 21;
    calculatorParser.PI = 22;
    calculatorParser.EULER = 23;
    calculatorParser.I = 24;
    calculatorParser.VARIABLE = 25;
    calculatorParser.SCIENTIFIC_NUMBER = 26;
    calculatorParser.WS = 27;
    calculatorParser.RULE_equation = 0;
    calculatorParser.RULE_expression = 1;
    calculatorParser.RULE_multiplyingExpression = 2;
    calculatorParser.RULE_powExpression = 3;
    calculatorParser.RULE_signedAtom = 4;
    calculatorParser.RULE_atom = 5;
    calculatorParser.RULE_scientific = 6;
    calculatorParser.RULE_constant = 7;
    calculatorParser.RULE_variable = 8;
    calculatorParser.RULE_func = 9;
    calculatorParser.RULE_funcname = 10;
    calculatorParser.RULE_relop = 11;
    // tslint:disable:no-trailing-whitespace
    calculatorParser.ruleNames = [
        "equation", "expression", "multiplyingExpression", "powExpression", "signedAtom",
        "atom", "scientific", "constant", "variable", "func", "funcname", "relop",
    ];
    calculatorParser._LITERAL_NAMES = [
        undefined, "'cos'", "'sin'", "'tan'", "'acos'", "'asin'", "'atan'", "'ln'",
        "'log'", "'sqrt'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'",
        "'='", "','", "'.'", "'^'", "'pi'", undefined, "'i'",
    ];
    calculatorParser._SYMBOLIC_NAMES = [
        undefined, "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "SQRT",
        "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "GT", "LT", "EQ",
        "COMMA", "POINT", "POW", "PI", "EULER", "I", "VARIABLE", "SCIENTIFIC_NUMBER",
        "WS",
    ];
    calculatorParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(calculatorParser._LITERAL_NAMES, calculatorParser._SYMBOLIC_NAMES, []);
    calculatorParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1D^\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\"\n\x03\f" +
        "\x03\x0E\x03%\v\x03\x03\x04\x03\x04\x03\x04\x07\x04*\n\x04\f\x04\x0E\x04" +
        "-\v\x04\x03\x05\x03\x05\x03\x05\x07\x052\n\x05\f\x05\x0E\x055\v\x05\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06=\n\x06\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07F\n\x07\x03\b\x03" +
        "\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\vS\n\v\f" +
        "\v\x0E\vV\v\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x02\x07\x03\x02\x0E\x0F\x03\x02\x10\x11\x03\x02\x18" +
        "\x1A\x03\x02\x03\v\x03\x02\x12\x14\x02[\x02\x1A\x03\x02\x02\x02\x04\x1E" +
        "\x03\x02\x02\x02\x06&\x03\x02\x02\x02\b.\x03\x02\x02\x02\n<\x03\x02\x02" +
        "\x02\fE\x03\x02\x02\x02\x0EG\x03\x02\x02\x02\x10I\x03\x02\x02\x02\x12" +
        "K\x03\x02\x02\x02\x14M\x03\x02\x02\x02\x16Y\x03\x02\x02\x02\x18[\x03\x02" +
        "\x02\x02\x1A\x1B\x05\x04\x03\x02\x1B\x1C\x05\x18\r\x02\x1C\x1D\x05\x04" +
        "\x03\x02\x1D\x03\x03\x02\x02\x02\x1E#\x05\x06\x04\x02\x1F \t\x02\x02\x02" +
        " \"\x05\x06\x04\x02!\x1F\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02" +
        "\x02\x02#$\x03\x02\x02\x02$\x05\x03\x02\x02\x02%#\x03\x02\x02\x02&+\x05" +
        "\b\x05\x02\'(\t\x03\x02\x02(*\x05\b\x05\x02)\'\x03\x02\x02\x02*-\x03\x02" +
        "\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x07\x03\x02\x02\x02-+\x03" +
        "\x02\x02\x02.3\x05\n\x06\x02/0\x07\x17\x02\x0202\x05\n\x06\x021/\x03\x02" +
        "\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\t\x03" +
        "\x02\x02\x0253\x03\x02\x02\x0267\x07\x0E\x02\x027=\x05\n\x06\x0289\x07" +
        "\x0F\x02\x029=\x05\n\x06\x02:=\x05\x14\v\x02;=\x05\f\x07\x02<6\x03\x02" +
        "\x02\x02<8\x03\x02\x02\x02<:\x03\x02\x02\x02<;\x03\x02\x02\x02=\v\x03" +
        "\x02\x02\x02>F\x05\x0E\b\x02?F\x05\x12\n\x02@F\x05\x10\t\x02AB\x07\f\x02" +
        "\x02BC\x05\x04\x03\x02CD\x07\r\x02\x02DF\x03\x02\x02\x02E>\x03\x02\x02" +
        "\x02E?\x03\x02\x02\x02E@\x03\x02\x02\x02EA\x03\x02\x02\x02F\r\x03\x02" +
        "\x02\x02GH\x07\x1C\x02\x02H\x0F\x03\x02\x02\x02IJ\t\x04\x02\x02J\x11\x03" +
        "\x02\x02\x02KL\x07\x1B\x02\x02L\x13\x03\x02\x02\x02MN\x05\x16\f\x02NO" +
        "\x07\f\x02\x02OT\x05\x04\x03\x02PQ\x07\x15\x02\x02QS\x05\x04\x03\x02R" +
        "P\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02" +
        "UW\x03\x02\x02\x02VT\x03\x02\x02\x02WX\x07\r\x02\x02X\x15\x03\x02\x02" +
        "\x02YZ\t\x05\x02\x02Z\x17\x03\x02\x02\x02[\\\t\x06\x02\x02\\\x19\x03\x02" +
        "\x02\x02\b#+3<ET";
    return calculatorParser;
}(Parser_1.Parser));
exports.calculatorParser = calculatorParser;
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
        get: function () { return calculatorParser.RULE_equation; },
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
    ExpressionContext.prototype.multiplyingExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplyingExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplyingExpressionContext);
        }
    };
    ExpressionContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(calculatorParser.PLUS);
        }
        else {
            return this.getToken(calculatorParser.PLUS, i);
        }
    };
    ExpressionContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(calculatorParser.MINUS);
        }
        else {
            return this.getToken(calculatorParser.MINUS, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_expression; },
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
var MultiplyingExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplyingExpressionContext, _super);
    function MultiplyingExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplyingExpressionContext.prototype.powExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PowExpressionContext);
        }
        else {
            return this.getRuleContext(i, PowExpressionContext);
        }
    };
    MultiplyingExpressionContext.prototype.TIMES = function (i) {
        if (i === undefined) {
            return this.getTokens(calculatorParser.TIMES);
        }
        else {
            return this.getToken(calculatorParser.TIMES, i);
        }
    };
    MultiplyingExpressionContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(calculatorParser.DIV);
        }
        else {
            return this.getToken(calculatorParser.DIV, i);
        }
    };
    Object.defineProperty(MultiplyingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_multiplyingExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplyingExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplyingExpression) {
            listener.enterMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplyingExpression) {
            listener.exitMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplyingExpression) {
            return visitor.visitMultiplyingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplyingExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplyingExpressionContext = MultiplyingExpressionContext;
var PowExpressionContext = /** @class */ (function (_super) {
    __extends(PowExpressionContext, _super);
    function PowExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PowExpressionContext.prototype.signedAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SignedAtomContext);
        }
        else {
            return this.getRuleContext(i, SignedAtomContext);
        }
    };
    PowExpressionContext.prototype.POW = function (i) {
        if (i === undefined) {
            return this.getTokens(calculatorParser.POW);
        }
        else {
            return this.getToken(calculatorParser.POW, i);
        }
    };
    Object.defineProperty(PowExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_powExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PowExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPowExpression) {
            listener.enterPowExpression(this);
        }
    };
    // @Override
    PowExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPowExpression) {
            listener.exitPowExpression(this);
        }
    };
    // @Override
    PowExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPowExpression) {
            return visitor.visitPowExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PowExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PowExpressionContext = PowExpressionContext;
var SignedAtomContext = /** @class */ (function (_super) {
    __extends(SignedAtomContext, _super);
    function SignedAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignedAtomContext.prototype.PLUS = function () { return this.tryGetToken(calculatorParser.PLUS, 0); };
    SignedAtomContext.prototype.signedAtom = function () {
        return this.tryGetRuleContext(0, SignedAtomContext);
    };
    SignedAtomContext.prototype.MINUS = function () { return this.tryGetToken(calculatorParser.MINUS, 0); };
    SignedAtomContext.prototype.func = function () {
        return this.tryGetRuleContext(0, FuncContext);
    };
    SignedAtomContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Object.defineProperty(SignedAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_signedAtom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignedAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterSignedAtom) {
            listener.enterSignedAtom(this);
        }
    };
    // @Override
    SignedAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitSignedAtom) {
            listener.exitSignedAtom(this);
        }
    };
    // @Override
    SignedAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitSignedAtom) {
            return visitor.visitSignedAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignedAtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignedAtomContext = SignedAtomContext;
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
    AtomContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    AtomContext.prototype.LPAREN = function () { return this.tryGetToken(calculatorParser.LPAREN, 0); };
    AtomContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    AtomContext.prototype.RPAREN = function () { return this.tryGetToken(calculatorParser.RPAREN, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_atom; },
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
    ScientificContext.prototype.SCIENTIFIC_NUMBER = function () { return this.getToken(calculatorParser.SCIENTIFIC_NUMBER, 0); };
    Object.defineProperty(ScientificContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_scientific; },
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
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.PI = function () { return this.tryGetToken(calculatorParser.PI, 0); };
    ConstantContext.prototype.EULER = function () { return this.tryGetToken(calculatorParser.EULER, 0); };
    ConstantContext.prototype.I = function () { return this.tryGetToken(calculatorParser.I, 0); };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantContext = ConstantContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.VARIABLE = function () { return this.getToken(calculatorParser.VARIABLE, 0); };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_variable; },
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
var FuncContext = /** @class */ (function (_super) {
    __extends(FuncContext, _super);
    function FuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncContext.prototype.funcname = function () {
        return this.getRuleContext(0, FuncnameContext);
    };
    FuncContext.prototype.LPAREN = function () { return this.getToken(calculatorParser.LPAREN, 0); };
    FuncContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    FuncContext.prototype.RPAREN = function () { return this.getToken(calculatorParser.RPAREN, 0); };
    FuncContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(calculatorParser.COMMA);
        }
        else {
            return this.getToken(calculatorParser.COMMA, i);
        }
    };
    Object.defineProperty(FuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_func; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncContext.prototype.enterRule = function (listener) {
        if (listener.enterFunc) {
            listener.enterFunc(this);
        }
    };
    // @Override
    FuncContext.prototype.exitRule = function (listener) {
        if (listener.exitFunc) {
            listener.exitFunc(this);
        }
    };
    // @Override
    FuncContext.prototype.accept = function (visitor) {
        if (visitor.visitFunc) {
            return visitor.visitFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncContext = FuncContext;
var FuncnameContext = /** @class */ (function (_super) {
    __extends(FuncnameContext, _super);
    function FuncnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FuncnameContext.prototype.COS = function () { return this.tryGetToken(calculatorParser.COS, 0); };
    FuncnameContext.prototype.TAN = function () { return this.tryGetToken(calculatorParser.TAN, 0); };
    FuncnameContext.prototype.SIN = function () { return this.tryGetToken(calculatorParser.SIN, 0); };
    FuncnameContext.prototype.ACOS = function () { return this.tryGetToken(calculatorParser.ACOS, 0); };
    FuncnameContext.prototype.ATAN = function () { return this.tryGetToken(calculatorParser.ATAN, 0); };
    FuncnameContext.prototype.ASIN = function () { return this.tryGetToken(calculatorParser.ASIN, 0); };
    FuncnameContext.prototype.LOG = function () { return this.tryGetToken(calculatorParser.LOG, 0); };
    FuncnameContext.prototype.LN = function () { return this.tryGetToken(calculatorParser.LN, 0); };
    FuncnameContext.prototype.SQRT = function () { return this.tryGetToken(calculatorParser.SQRT, 0); };
    Object.defineProperty(FuncnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_funcname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FuncnameContext.prototype.enterRule = function (listener) {
        if (listener.enterFuncname) {
            listener.enterFuncname(this);
        }
    };
    // @Override
    FuncnameContext.prototype.exitRule = function (listener) {
        if (listener.exitFuncname) {
            listener.exitFuncname(this);
        }
    };
    // @Override
    FuncnameContext.prototype.accept = function (visitor) {
        if (visitor.visitFuncname) {
            return visitor.visitFuncname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FuncnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FuncnameContext = FuncnameContext;
var RelopContext = /** @class */ (function (_super) {
    __extends(RelopContext, _super);
    function RelopContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelopContext.prototype.EQ = function () { return this.tryGetToken(calculatorParser.EQ, 0); };
    RelopContext.prototype.GT = function () { return this.tryGetToken(calculatorParser.GT, 0); };
    RelopContext.prototype.LT = function () { return this.tryGetToken(calculatorParser.LT, 0); };
    Object.defineProperty(RelopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return calculatorParser.RULE_relop; },
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
