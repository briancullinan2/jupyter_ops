"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rpn/rpn.g4 by ANTLR 4.7.3-SNAPSHOT
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
var rpnParser = /** @class */ (function (_super) {
    __extends(rpnParser, _super);
    function rpnParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(rpnParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(rpnParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return rpnParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "rpn.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnParser.prototype, "ruleNames", {
        // @Override
        get: function () { return rpnParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnParser.prototype, "serializedATN", {
        // @Override
        get: function () { return rpnParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    rpnParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, rpnParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 12;
                this.signedAtom();
                this.state = 16;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << rpnParser.SCIENTIFIC_NUMBER) | (1 << rpnParser.VARIABLE) | (1 << rpnParser.POW) | (1 << rpnParser.PLUS) | (1 << rpnParser.MINUS) | (1 << rpnParser.TIMES) | (1 << rpnParser.DIV) | (1 << rpnParser.COS) | (1 << rpnParser.SIN) | (1 << rpnParser.TAN) | (1 << rpnParser.ACOS) | (1 << rpnParser.ASIN) | (1 << rpnParser.ATAN) | (1 << rpnParser.LN) | (1 << rpnParser.LOG))) !== 0)) {
                    {
                        {
                            this.state = 13;
                            this.term();
                        }
                    }
                    this.state = 18;
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
    rpnParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, rpnParser.RULE_term);
        try {
            this.state = 21;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 19;
                        this.signedAtom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 20;
                        this.oper();
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
    rpnParser.prototype.oper = function () {
        var _localctx = new OperContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, rpnParser.RULE_oper);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << rpnParser.POW) | (1 << rpnParser.PLUS) | (1 << rpnParser.MINUS) | (1 << rpnParser.TIMES) | (1 << rpnParser.DIV) | (1 << rpnParser.COS) | (1 << rpnParser.SIN) | (1 << rpnParser.TAN) | (1 << rpnParser.ACOS) | (1 << rpnParser.ASIN) | (1 << rpnParser.ATAN) | (1 << rpnParser.LN) | (1 << rpnParser.LOG))) !== 0))) {
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
    rpnParser.prototype.signedAtom = function () {
        var _localctx = new SignedAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, rpnParser.RULE_signedAtom);
        try {
            this.state = 31;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case rpnParser.PLUS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 25;
                        this.match(rpnParser.PLUS);
                        this.state = 26;
                        this.signedAtom();
                    }
                    break;
                case rpnParser.MINUS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 27;
                        this.match(rpnParser.MINUS);
                        this.state = 28;
                        this.signedAtom();
                    }
                    break;
                case rpnParser.SCIENTIFIC_NUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 29;
                        this.scientific();
                    }
                    break;
                case rpnParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 30;
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
    rpnParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, rpnParser.RULE_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 33;
                this.match(rpnParser.VARIABLE);
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
    rpnParser.prototype.scientific = function () {
        var _localctx = new ScientificContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, rpnParser.RULE_scientific);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                this.match(rpnParser.SCIENTIFIC_NUMBER);
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
    Object.defineProperty(rpnParser, "_ATN", {
        get: function () {
            if (!rpnParser.__ATN) {
                rpnParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(rpnParser._serializedATN));
            }
            return rpnParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    rpnParser.SCIENTIFIC_NUMBER = 1;
    rpnParser.VARIABLE = 2;
    rpnParser.POW = 3;
    rpnParser.PLUS = 4;
    rpnParser.MINUS = 5;
    rpnParser.TIMES = 6;
    rpnParser.DIV = 7;
    rpnParser.COS = 8;
    rpnParser.SIN = 9;
    rpnParser.TAN = 10;
    rpnParser.ACOS = 11;
    rpnParser.ASIN = 12;
    rpnParser.ATAN = 13;
    rpnParser.LN = 14;
    rpnParser.LOG = 15;
    rpnParser.POINT = 16;
    rpnParser.WS = 17;
    rpnParser.RULE_expression = 0;
    rpnParser.RULE_term = 1;
    rpnParser.RULE_oper = 2;
    rpnParser.RULE_signedAtom = 3;
    rpnParser.RULE_variable = 4;
    rpnParser.RULE_scientific = 5;
    // tslint:disable:no-trailing-whitespace
    rpnParser.ruleNames = [
        "expression", "term", "oper", "signedAtom", "variable", "scientific",
    ];
    rpnParser._LITERAL_NAMES = [
        undefined, undefined, undefined, "'^'", "'+'", "'-'", "'*'", "'/'", "'cos'",
        "'sin'", "'tan'", "'acos'", "'asin'", "'atan'", "'ln'", "'log'", "'.'",
    ];
    rpnParser._SYMBOLIC_NAMES = [
        undefined, "SCIENTIFIC_NUMBER", "VARIABLE", "POW", "PLUS", "MINUS", "TIMES",
        "DIV", "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "POINT",
        "WS",
    ];
    rpnParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(rpnParser._LITERAL_NAMES, rpnParser._SYMBOLIC_NAMES, []);
    rpnParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13(\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x03" +
        "\x03\x03\x05\x03\x18\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x05\x05\"\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
        "\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x03\x03" +
        "\x02\x05\x11\x02&\x02\x0E\x03\x02\x02\x02\x04\x17\x03\x02\x02\x02\x06" +
        "\x19\x03\x02\x02\x02\b!\x03\x02\x02\x02\n#\x03\x02\x02\x02\f%\x03\x02" +
        "\x02\x02\x0E\x12\x05\b\x05\x02\x0F\x11\x05\x04\x03\x02\x10\x0F\x03\x02" +
        "\x02\x02\x11\x14\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02" +
        "\x02\x02\x13\x03\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x18\x05\b" +
        "\x05\x02\x16\x18\x05\x06\x04\x02\x17\x15\x03\x02\x02\x02\x17\x16\x03\x02" +
        "\x02\x02\x18\x05\x03\x02\x02\x02\x19\x1A\t\x02\x02\x02\x1A\x07\x03\x02" +
        "\x02\x02\x1B\x1C\x07\x06\x02\x02\x1C\"\x05\b\x05\x02\x1D\x1E\x07\x07\x02" +
        "\x02\x1E\"\x05\b\x05\x02\x1F\"\x05\f\x07\x02 \"\x05\n\x06\x02!\x1B\x03" +
        "\x02\x02\x02!\x1D\x03\x02\x02\x02!\x1F\x03\x02\x02\x02! \x03\x02\x02\x02" +
        "\"\t\x03\x02\x02\x02#$\x07\x04\x02\x02$\v\x03\x02\x02\x02%&\x07\x03\x02" +
        "\x02&\r\x03\x02\x02\x02\x05\x12\x17!";
    return rpnParser;
}(Parser_1.Parser));
exports.rpnParser = rpnParser;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.signedAtom = function () {
        return this.getRuleContext(0, SignedAtomContext);
    };
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
        get: function () { return rpnParser.RULE_expression; },
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
    TermContext.prototype.signedAtom = function () {
        return this.tryGetRuleContext(0, SignedAtomContext);
    };
    TermContext.prototype.oper = function () {
        return this.tryGetRuleContext(0, OperContext);
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return rpnParser.RULE_term; },
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
var OperContext = /** @class */ (function (_super) {
    __extends(OperContext, _super);
    function OperContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperContext.prototype.POW = function () { return this.tryGetToken(rpnParser.POW, 0); };
    OperContext.prototype.PLUS = function () { return this.tryGetToken(rpnParser.PLUS, 0); };
    OperContext.prototype.MINUS = function () { return this.tryGetToken(rpnParser.MINUS, 0); };
    OperContext.prototype.TIMES = function () { return this.tryGetToken(rpnParser.TIMES, 0); };
    OperContext.prototype.DIV = function () { return this.tryGetToken(rpnParser.DIV, 0); };
    OperContext.prototype.COS = function () { return this.tryGetToken(rpnParser.COS, 0); };
    OperContext.prototype.TAN = function () { return this.tryGetToken(rpnParser.TAN, 0); };
    OperContext.prototype.SIN = function () { return this.tryGetToken(rpnParser.SIN, 0); };
    OperContext.prototype.ACOS = function () { return this.tryGetToken(rpnParser.ACOS, 0); };
    OperContext.prototype.ATAN = function () { return this.tryGetToken(rpnParser.ATAN, 0); };
    OperContext.prototype.ASIN = function () { return this.tryGetToken(rpnParser.ASIN, 0); };
    OperContext.prototype.LOG = function () { return this.tryGetToken(rpnParser.LOG, 0); };
    OperContext.prototype.LN = function () { return this.tryGetToken(rpnParser.LN, 0); };
    Object.defineProperty(OperContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return rpnParser.RULE_oper; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperContext.prototype.enterRule = function (listener) {
        if (listener.enterOper) {
            listener.enterOper(this);
        }
    };
    // @Override
    OperContext.prototype.exitRule = function (listener) {
        if (listener.exitOper) {
            listener.exitOper(this);
        }
    };
    // @Override
    OperContext.prototype.accept = function (visitor) {
        if (visitor.visitOper) {
            return visitor.visitOper(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperContext = OperContext;
var SignedAtomContext = /** @class */ (function (_super) {
    __extends(SignedAtomContext, _super);
    function SignedAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignedAtomContext.prototype.PLUS = function () { return this.tryGetToken(rpnParser.PLUS, 0); };
    SignedAtomContext.prototype.signedAtom = function () {
        return this.tryGetRuleContext(0, SignedAtomContext);
    };
    SignedAtomContext.prototype.MINUS = function () { return this.tryGetToken(rpnParser.MINUS, 0); };
    SignedAtomContext.prototype.scientific = function () {
        return this.tryGetRuleContext(0, ScientificContext);
    };
    SignedAtomContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    Object.defineProperty(SignedAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return rpnParser.RULE_signedAtom; },
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
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.VARIABLE = function () { return this.getToken(rpnParser.VARIABLE, 0); };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return rpnParser.RULE_variable; },
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
var ScientificContext = /** @class */ (function (_super) {
    __extends(ScientificContext, _super);
    function ScientificContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScientificContext.prototype.SCIENTIFIC_NUMBER = function () { return this.getToken(rpnParser.SCIENTIFIC_NUMBER, 0); };
    Object.defineProperty(ScientificContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return rpnParser.RULE_scientific; },
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
