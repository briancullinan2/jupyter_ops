"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/telephone/telephone.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var telephoneParser = /** @class */ (function (_super) {
    __extends(telephoneParser, _super);
    function telephoneParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(telephoneParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(telephoneParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return telephoneParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "telephone.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneParser.prototype, "ruleNames", {
        // @Override
        get: function () { return telephoneParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneParser.prototype, "serializedATN", {
        // @Override
        get: function () { return telephoneParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    telephoneParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, telephoneParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 15;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === telephoneParser.T__0) {
                    {
                        this.state = 14;
                        this.match(telephoneParser.T__0);
                    }
                }
                this.state = 18;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === telephoneParser.T__1) {
                    {
                        this.state = 17;
                        this.match(telephoneParser.T__1);
                    }
                }
                this.state = 20;
                this.variation();
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
    telephoneParser.prototype.variation = function () {
        var _localctx = new VariationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, telephoneParser.RULE_variation);
        try {
            this.state = 24;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case telephoneParser.T__2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 22;
                        this.nanp();
                    }
                    break;
                case telephoneParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 23;
                        this.japan();
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
    telephoneParser.prototype.nanp = function () {
        var _localctx = new NanpContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, telephoneParser.RULE_nanp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this.match(telephoneParser.T__2);
                this.state = 27;
                this.areacode();
                this.state = 28;
                this.exchange();
                this.state = 29;
                this.subscriber();
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
    telephoneParser.prototype.areacode = function () {
        var _localctx = new AreacodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, telephoneParser.RULE_areacode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 31;
                this.match(telephoneParser.DIGIT);
                this.state = 32;
                this.match(telephoneParser.DIGIT);
                this.state = 33;
                this.match(telephoneParser.DIGIT);
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
    telephoneParser.prototype.exchange = function () {
        var _localctx = new ExchangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, telephoneParser.RULE_exchange);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                this.match(telephoneParser.DIGIT);
                this.state = 36;
                this.match(telephoneParser.DIGIT);
                this.state = 37;
                this.match(telephoneParser.DIGIT);
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
    telephoneParser.prototype.subscriber = function () {
        var _localctx = new SubscriberContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, telephoneParser.RULE_subscriber);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this.match(telephoneParser.DIGIT);
                this.state = 40;
                this.match(telephoneParser.DIGIT);
                this.state = 41;
                this.match(telephoneParser.DIGIT);
                this.state = 42;
                this.match(telephoneParser.DIGIT);
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
    telephoneParser.prototype.japan = function () {
        var _localctx = new JapanContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, telephoneParser.RULE_japan);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this.match(telephoneParser.T__3);
                this.state = 45;
                this.areacode();
                this.state = 46;
                this.exchange();
                this.state = 47;
                this.subscriber();
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
    Object.defineProperty(telephoneParser, "_ATN", {
        get: function () {
            if (!telephoneParser.__ATN) {
                telephoneParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(telephoneParser._serializedATN));
            }
            return telephoneParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    telephoneParser.T__0 = 1;
    telephoneParser.T__1 = 2;
    telephoneParser.T__2 = 3;
    telephoneParser.T__3 = 4;
    telephoneParser.DIGIT = 5;
    telephoneParser.WS = 6;
    telephoneParser.RULE_number = 0;
    telephoneParser.RULE_variation = 1;
    telephoneParser.RULE_nanp = 2;
    telephoneParser.RULE_areacode = 3;
    telephoneParser.RULE_exchange = 4;
    telephoneParser.RULE_subscriber = 5;
    telephoneParser.RULE_japan = 6;
    // tslint:disable:no-trailing-whitespace
    telephoneParser.ruleNames = [
        "number", "variation", "nanp", "areacode", "exchange", "subscriber", "japan",
    ];
    telephoneParser._LITERAL_NAMES = [
        undefined, "'+1'", "'+'", "'011'", "'010'",
    ];
    telephoneParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "DIGIT", "WS",
    ];
    telephoneParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(telephoneParser._LITERAL_NAMES, telephoneParser._SYMBOLIC_NAMES, []);
    telephoneParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b4\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x03\x02\x05\x02\x12\n\x02\x03\x02\x05\x02\x15\n\x02\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x02\x02\x02/\x02\x11\x03\x02\x02\x02\x04\x1A\x03\x02\x02\x02" +
        "\x06\x1C\x03\x02\x02\x02\b!\x03\x02\x02\x02\n%\x03\x02\x02\x02\f)\x03" +
        "\x02\x02\x02\x0E.\x03\x02\x02\x02\x10\x12\x07\x03\x02\x02\x11\x10\x03" +
        "\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x14\x03\x02\x02\x02\x13\x15\x07" +
        "\x04\x02\x02\x14\x13\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x16\x03" +
        "\x02\x02\x02\x16\x17\x05\x04\x03\x02\x17\x03\x03\x02\x02\x02\x18\x1B\x05" +
        "\x06\x04\x02\x19\x1B\x05\x0E\b\x02\x1A\x18\x03\x02\x02\x02\x1A\x19\x03" +
        "\x02\x02\x02\x1B\x05\x03\x02\x02\x02\x1C\x1D\x07\x05\x02\x02\x1D\x1E\x05" +
        "\b\x05\x02\x1E\x1F\x05\n\x06\x02\x1F \x05\f\x07\x02 \x07\x03\x02\x02\x02" +
        "!\"\x07\x07\x02\x02\"#\x07\x07\x02\x02#$\x07\x07\x02\x02$\t\x03\x02\x02" +
        "\x02%&\x07\x07\x02\x02&\'\x07\x07\x02\x02\'(\x07\x07\x02\x02(\v\x03\x02" +
        "\x02\x02)*\x07\x07\x02\x02*+\x07\x07\x02\x02+,\x07\x07\x02\x02,-\x07\x07" +
        "\x02\x02-\r\x03\x02\x02\x02./\x07\x06\x02\x02/0\x05\b\x05\x0201\x05\n" +
        "\x06\x0212\x05\f\x07\x022\x0F\x03\x02\x02\x02\x05\x11\x14\x1A";
    return telephoneParser;
}(Parser_1.Parser));
exports.telephoneParser = telephoneParser;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.variation = function () {
        return this.getRuleContext(0, VariationContext);
    };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return telephoneParser.RULE_number; },
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
var VariationContext = /** @class */ (function (_super) {
    __extends(VariationContext, _super);
    function VariationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariationContext.prototype.nanp = function () {
        return this.tryGetRuleContext(0, NanpContext);
    };
    VariationContext.prototype.japan = function () {
        return this.tryGetRuleContext(0, JapanContext);
    };
    Object.defineProperty(VariationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return telephoneParser.RULE_variation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariation) {
            listener.enterVariation(this);
        }
    };
    // @Override
    VariationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariation) {
            listener.exitVariation(this);
        }
    };
    // @Override
    VariationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariation) {
            return visitor.visitVariation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariationContext = VariationContext;
var NanpContext = /** @class */ (function (_super) {
    __extends(NanpContext, _super);
    function NanpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NanpContext.prototype.areacode = function () {
        return this.getRuleContext(0, AreacodeContext);
    };
    NanpContext.prototype.exchange = function () {
        return this.getRuleContext(0, ExchangeContext);
    };
    NanpContext.prototype.subscriber = function () {
        return this.getRuleContext(0, SubscriberContext);
    };
    Object.defineProperty(NanpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return telephoneParser.RULE_nanp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NanpContext.prototype.enterRule = function (listener) {
        if (listener.enterNanp) {
            listener.enterNanp(this);
        }
    };
    // @Override
    NanpContext.prototype.exitRule = function (listener) {
        if (listener.exitNanp) {
            listener.exitNanp(this);
        }
    };
    // @Override
    NanpContext.prototype.accept = function (visitor) {
        if (visitor.visitNanp) {
            return visitor.visitNanp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NanpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NanpContext = NanpContext;
var AreacodeContext = /** @class */ (function (_super) {
    __extends(AreacodeContext, _super);
    function AreacodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AreacodeContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(telephoneParser.DIGIT);
        }
        else {
            return this.getToken(telephoneParser.DIGIT, i);
        }
    };
    Object.defineProperty(AreacodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return telephoneParser.RULE_areacode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AreacodeContext.prototype.enterRule = function (listener) {
        if (listener.enterAreacode) {
            listener.enterAreacode(this);
        }
    };
    // @Override
    AreacodeContext.prototype.exitRule = function (listener) {
        if (listener.exitAreacode) {
            listener.exitAreacode(this);
        }
    };
    // @Override
    AreacodeContext.prototype.accept = function (visitor) {
        if (visitor.visitAreacode) {
            return visitor.visitAreacode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AreacodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AreacodeContext = AreacodeContext;
var ExchangeContext = /** @class */ (function (_super) {
    __extends(ExchangeContext, _super);
    function ExchangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExchangeContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(telephoneParser.DIGIT);
        }
        else {
            return this.getToken(telephoneParser.DIGIT, i);
        }
    };
    Object.defineProperty(ExchangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return telephoneParser.RULE_exchange; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExchangeContext.prototype.enterRule = function (listener) {
        if (listener.enterExchange) {
            listener.enterExchange(this);
        }
    };
    // @Override
    ExchangeContext.prototype.exitRule = function (listener) {
        if (listener.exitExchange) {
            listener.exitExchange(this);
        }
    };
    // @Override
    ExchangeContext.prototype.accept = function (visitor) {
        if (visitor.visitExchange) {
            return visitor.visitExchange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExchangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExchangeContext = ExchangeContext;
var SubscriberContext = /** @class */ (function (_super) {
    __extends(SubscriberContext, _super);
    function SubscriberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubscriberContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(telephoneParser.DIGIT);
        }
        else {
            return this.getToken(telephoneParser.DIGIT, i);
        }
    };
    Object.defineProperty(SubscriberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return telephoneParser.RULE_subscriber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubscriberContext.prototype.enterRule = function (listener) {
        if (listener.enterSubscriber) {
            listener.enterSubscriber(this);
        }
    };
    // @Override
    SubscriberContext.prototype.exitRule = function (listener) {
        if (listener.exitSubscriber) {
            listener.exitSubscriber(this);
        }
    };
    // @Override
    SubscriberContext.prototype.accept = function (visitor) {
        if (visitor.visitSubscriber) {
            return visitor.visitSubscriber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubscriberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubscriberContext = SubscriberContext;
var JapanContext = /** @class */ (function (_super) {
    __extends(JapanContext, _super);
    function JapanContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    JapanContext.prototype.areacode = function () {
        return this.getRuleContext(0, AreacodeContext);
    };
    JapanContext.prototype.exchange = function () {
        return this.getRuleContext(0, ExchangeContext);
    };
    JapanContext.prototype.subscriber = function () {
        return this.getRuleContext(0, SubscriberContext);
    };
    Object.defineProperty(JapanContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return telephoneParser.RULE_japan; },
        enumerable: true,
        configurable: true
    });
    // @Override
    JapanContext.prototype.enterRule = function (listener) {
        if (listener.enterJapan) {
            listener.enterJapan(this);
        }
    };
    // @Override
    JapanContext.prototype.exitRule = function (listener) {
        if (listener.exitJapan) {
            listener.exitJapan(this);
        }
    };
    // @Override
    JapanContext.prototype.accept = function (visitor) {
        if (visitor.visitJapan) {
            return visitor.visitJapan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return JapanContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.JapanContext = JapanContext;
