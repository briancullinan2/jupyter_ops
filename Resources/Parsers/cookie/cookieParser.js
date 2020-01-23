"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cookie/cookie.g4 by ANTLR 4.7.3-SNAPSHOT
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
var cookieParser = /** @class */ (function (_super) {
    __extends(cookieParser, _super);
    function cookieParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(cookieParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(cookieParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return cookieParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "cookie.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieParser.prototype, "ruleNames", {
        // @Override
        get: function () { return cookieParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieParser.prototype, "serializedATN", {
        // @Override
        get: function () { return cookieParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    cookieParser.prototype.cookie = function () {
        var _localctx = new CookieContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, cookieParser.RULE_cookie);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 21;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cookieParser.TOKEN) {
                    {
                        {
                            this.state = 18;
                            this.av_pairs();
                        }
                    }
                    this.state = 23;
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
    cookieParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, cookieParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                this.attr();
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
    cookieParser.prototype.av_pairs = function () {
        var _localctx = new Av_pairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, cookieParser.RULE_av_pairs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this.av_pair();
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cookieParser.T__0) {
                    {
                        {
                            this.state = 27;
                            this.match(cookieParser.T__0);
                            this.state = 28;
                            this.av_pair();
                        }
                    }
                    this.state = 33;
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
    cookieParser.prototype.av_pair = function () {
        var _localctx = new Av_pairContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, cookieParser.RULE_av_pair);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this.attr();
                this.state = 37;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cookieParser.T__1) {
                    {
                        this.state = 35;
                        this.match(cookieParser.T__1);
                        this.state = 36;
                        this.value();
                    }
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
    cookieParser.prototype.attr = function () {
        var _localctx = new AttrContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, cookieParser.RULE_attr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this.token();
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
    cookieParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, cookieParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                this.word();
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
    cookieParser.prototype.word = function () {
        var _localctx = new WordContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, cookieParser.RULE_word);
        try {
            this.state = 45;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cookieParser.TOKEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 43;
                        this.token();
                    }
                    break;
                case cookieParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 44;
                        this.quoted_string();
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
    cookieParser.prototype.token = function () {
        var _localctx = new TokenContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, cookieParser.RULE_token);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 47;
                this.match(cookieParser.TOKEN);
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
    cookieParser.prototype.quoted_string = function () {
        var _localctx = new Quoted_stringContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, cookieParser.RULE_quoted_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(cookieParser.STRING);
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
    Object.defineProperty(cookieParser, "_ATN", {
        get: function () {
            if (!cookieParser.__ATN) {
                cookieParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(cookieParser._serializedATN));
            }
            return cookieParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    cookieParser.T__0 = 1;
    cookieParser.T__1 = 2;
    cookieParser.STRING = 3;
    cookieParser.TOKEN = 4;
    cookieParser.DIGIT = 5;
    cookieParser.WS = 6;
    cookieParser.RULE_cookie = 0;
    cookieParser.RULE_name = 1;
    cookieParser.RULE_av_pairs = 2;
    cookieParser.RULE_av_pair = 3;
    cookieParser.RULE_attr = 4;
    cookieParser.RULE_value = 5;
    cookieParser.RULE_word = 6;
    cookieParser.RULE_token = 7;
    cookieParser.RULE_quoted_string = 8;
    // tslint:disable:no-trailing-whitespace
    cookieParser.ruleNames = [
        "cookie", "name", "av_pairs", "av_pair", "attr", "value", "word", "token",
        "quoted_string",
    ];
    cookieParser._LITERAL_NAMES = [
        undefined, "';'", "'='",
    ];
    cookieParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "STRING", "TOKEN", "DIGIT", "WS",
    ];
    cookieParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(cookieParser._LITERAL_NAMES, cookieParser._SYMBOLIC_NAMES, []);
    cookieParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b6\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
        "\x02\x19\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04 \n\x04" +
        "\f\x04\x0E\x04#\v\x04\x03\x05\x03\x05\x03\x05\x05\x05(\n\x05\x03\x06\x03" +
        "\x06\x03\x07\x03\x07\x03\b\x03\b\x05\b0\n\b\x03\t\x03\t\x03\n\x03\n\x03" +
        "\n\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
        "\x02\x12\x02\x02\x02\x020\x02\x17\x03\x02\x02\x02\x04\x1A\x03\x02\x02" +
        "\x02\x06\x1C\x03\x02\x02\x02\b$\x03\x02\x02\x02\n)\x03\x02\x02\x02\f+" +
        "\x03\x02\x02\x02\x0E/\x03\x02\x02\x02\x101\x03\x02\x02\x02\x123\x03\x02" +
        "\x02\x02\x14\x16\x05\x06\x04\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02" +
        "\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02" +
        "\x02\x02\x19\x17\x03\x02\x02\x02\x1A\x1B\x05\n\x06\x02\x1B\x05\x03\x02" +
        "\x02\x02\x1C!\x05\b\x05\x02\x1D\x1E\x07\x03\x02\x02\x1E \x05\b\x05\x02" +
        "\x1F\x1D\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03" +
        "\x02\x02\x02\"\x07\x03\x02\x02\x02#!\x03\x02\x02\x02$\'\x05\n\x06\x02" +
        "%&\x07\x04\x02\x02&(\x05\f\x07\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02" +
        "(\t\x03\x02\x02\x02)*\x05\x10\t\x02*\v\x03\x02\x02\x02+,\x05\x0E\b\x02" +
        ",\r\x03\x02\x02\x02-0\x05\x10\t\x02.0\x05\x12\n\x02/-\x03\x02\x02\x02" +
        "/.\x03\x02\x02\x020\x0F\x03\x02\x02\x0212\x07\x06\x02\x022\x11\x03\x02" +
        "\x02\x0234\x07\x05\x02\x024\x13\x03\x02\x02\x02\x06\x17!\'/";
    return cookieParser;
}(Parser_1.Parser));
exports.cookieParser = cookieParser;
var CookieContext = /** @class */ (function (_super) {
    __extends(CookieContext, _super);
    function CookieContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CookieContext.prototype.av_pairs = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Av_pairsContext);
        }
        else {
            return this.getRuleContext(i, Av_pairsContext);
        }
    };
    Object.defineProperty(CookieContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_cookie; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CookieContext.prototype.enterRule = function (listener) {
        if (listener.enterCookie) {
            listener.enterCookie(this);
        }
    };
    // @Override
    CookieContext.prototype.exitRule = function (listener) {
        if (listener.exitCookie) {
            listener.exitCookie(this);
        }
    };
    // @Override
    CookieContext.prototype.accept = function (visitor) {
        if (visitor.visitCookie) {
            return visitor.visitCookie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CookieContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CookieContext = CookieContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.attr = function () {
        return this.getRuleContext(0, AttrContext);
    };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameContext.prototype.enterRule = function (listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    };
    // @Override
    NameContext.prototype.exitRule = function (listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    };
    // @Override
    NameContext.prototype.accept = function (visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameContext = NameContext;
var Av_pairsContext = /** @class */ (function (_super) {
    __extends(Av_pairsContext, _super);
    function Av_pairsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Av_pairsContext.prototype.av_pair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Av_pairContext);
        }
        else {
            return this.getRuleContext(i, Av_pairContext);
        }
    };
    Object.defineProperty(Av_pairsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_av_pairs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Av_pairsContext.prototype.enterRule = function (listener) {
        if (listener.enterAv_pairs) {
            listener.enterAv_pairs(this);
        }
    };
    // @Override
    Av_pairsContext.prototype.exitRule = function (listener) {
        if (listener.exitAv_pairs) {
            listener.exitAv_pairs(this);
        }
    };
    // @Override
    Av_pairsContext.prototype.accept = function (visitor) {
        if (visitor.visitAv_pairs) {
            return visitor.visitAv_pairs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Av_pairsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Av_pairsContext = Av_pairsContext;
var Av_pairContext = /** @class */ (function (_super) {
    __extends(Av_pairContext, _super);
    function Av_pairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Av_pairContext.prototype.attr = function () {
        return this.getRuleContext(0, AttrContext);
    };
    Av_pairContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Object.defineProperty(Av_pairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_av_pair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Av_pairContext.prototype.enterRule = function (listener) {
        if (listener.enterAv_pair) {
            listener.enterAv_pair(this);
        }
    };
    // @Override
    Av_pairContext.prototype.exitRule = function (listener) {
        if (listener.exitAv_pair) {
            listener.exitAv_pair(this);
        }
    };
    // @Override
    Av_pairContext.prototype.accept = function (visitor) {
        if (visitor.visitAv_pair) {
            return visitor.visitAv_pair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Av_pairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Av_pairContext = Av_pairContext;
var AttrContext = /** @class */ (function (_super) {
    __extends(AttrContext, _super);
    function AttrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttrContext.prototype.token = function () {
        return this.getRuleContext(0, TokenContext);
    };
    Object.defineProperty(AttrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_attr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttrContext.prototype.enterRule = function (listener) {
        if (listener.enterAttr) {
            listener.enterAttr(this);
        }
    };
    // @Override
    AttrContext.prototype.exitRule = function (listener) {
        if (listener.exitAttr) {
            listener.exitAttr(this);
        }
    };
    // @Override
    AttrContext.prototype.accept = function (visitor) {
        if (visitor.visitAttr) {
            return visitor.visitAttr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttrContext = AttrContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.word = function () {
        return this.getRuleContext(0, WordContext);
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueContext.prototype.enterRule = function (listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    };
    // @Override
    ValueContext.prototype.exitRule = function (listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    };
    // @Override
    ValueContext.prototype.accept = function (visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var WordContext = /** @class */ (function (_super) {
    __extends(WordContext, _super);
    function WordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WordContext.prototype.token = function () {
        return this.tryGetRuleContext(0, TokenContext);
    };
    WordContext.prototype.quoted_string = function () {
        return this.tryGetRuleContext(0, Quoted_stringContext);
    };
    Object.defineProperty(WordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_word; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WordContext.prototype.enterRule = function (listener) {
        if (listener.enterWord) {
            listener.enterWord(this);
        }
    };
    // @Override
    WordContext.prototype.exitRule = function (listener) {
        if (listener.exitWord) {
            listener.exitWord(this);
        }
    };
    // @Override
    WordContext.prototype.accept = function (visitor) {
        if (visitor.visitWord) {
            return visitor.visitWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WordContext = WordContext;
var TokenContext = /** @class */ (function (_super) {
    __extends(TokenContext, _super);
    function TokenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokenContext.prototype.TOKEN = function () { return this.getToken(cookieParser.TOKEN, 0); };
    Object.defineProperty(TokenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_token; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokenContext.prototype.enterRule = function (listener) {
        if (listener.enterToken) {
            listener.enterToken(this);
        }
    };
    // @Override
    TokenContext.prototype.exitRule = function (listener) {
        if (listener.exitToken) {
            listener.exitToken(this);
        }
    };
    // @Override
    TokenContext.prototype.accept = function (visitor) {
        if (visitor.visitToken) {
            return visitor.visitToken(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokenContext = TokenContext;
var Quoted_stringContext = /** @class */ (function (_super) {
    __extends(Quoted_stringContext, _super);
    function Quoted_stringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Quoted_stringContext.prototype.STRING = function () { return this.getToken(cookieParser.STRING, 0); };
    Object.defineProperty(Quoted_stringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return cookieParser.RULE_quoted_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Quoted_stringContext.prototype.enterRule = function (listener) {
        if (listener.enterQuoted_string) {
            listener.enterQuoted_string(this);
        }
    };
    // @Override
    Quoted_stringContext.prototype.exitRule = function (listener) {
        if (listener.exitQuoted_string) {
            listener.exitQuoted_string(this);
        }
    };
    // @Override
    Quoted_stringContext.prototype.accept = function (visitor) {
        if (visitor.visitQuoted_string) {
            return visitor.visitQuoted_string(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Quoted_stringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Quoted_stringContext = Quoted_stringContext;
