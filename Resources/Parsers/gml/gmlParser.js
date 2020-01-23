"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gml/gml.g4 by ANTLR 4.7.3-SNAPSHOT
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
var gmlParser = /** @class */ (function (_super) {
    __extends(gmlParser, _super);
    function gmlParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(gmlParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(gmlParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return gmlParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "gml.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlParser.prototype, "ruleNames", {
        // @Override
        get: function () { return gmlParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlParser.prototype, "serializedATN", {
        // @Override
        get: function () { return gmlParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    gmlParser.prototype.graph = function () {
        var _localctx = new GraphContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, gmlParser.RULE_graph);
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
                            this.kv();
                        }
                    }
                    this.state = 21;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === gmlParser.VALUE);
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
    gmlParser.prototype.list = function () {
        var _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, gmlParser.RULE_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this.match(gmlParser.T__0);
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 24;
                            this.kv();
                        }
                    }
                    this.state = 27;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === gmlParser.VALUE);
                this.state = 29;
                this.match(gmlParser.T__1);
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
    gmlParser.prototype.kv = function () {
        var _localctx = new KvContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, gmlParser.RULE_kv);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 31;
                this.key();
                this.state = 32;
                this.value();
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
    gmlParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, gmlParser.RULE_value);
        try {
            this.state = 39;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case gmlParser.SIGN:
                case gmlParser.DIGIT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 34;
                        this.integer();
                    }
                    break;
                case gmlParser.REAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 35;
                        this.realnum();
                    }
                    break;
                case gmlParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 36;
                        this.stringliteral();
                    }
                    break;
                case gmlParser.VALUE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 37;
                        this.str();
                    }
                    break;
                case gmlParser.T__0:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 38;
                        this.list();
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
    gmlParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, gmlParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                this.match(gmlParser.VALUE);
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
    gmlParser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, gmlParser.RULE_integer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === gmlParser.SIGN) {
                    {
                        this.state = 43;
                        this.match(gmlParser.SIGN);
                    }
                }
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 46;
                            this.match(gmlParser.DIGIT);
                        }
                    }
                    this.state = 49;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === gmlParser.DIGIT);
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
    gmlParser.prototype.realnum = function () {
        var _localctx = new RealnumContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, gmlParser.RULE_realnum);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this.match(gmlParser.REAL);
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
    gmlParser.prototype.str = function () {
        var _localctx = new StrContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, gmlParser.RULE_str);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.match(gmlParser.VALUE);
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
    gmlParser.prototype.stringliteral = function () {
        var _localctx = new StringliteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, gmlParser.RULE_stringliteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 55;
                this.match(gmlParser.STRINGLITERAL);
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
    Object.defineProperty(gmlParser, "_ATN", {
        get: function () {
            if (!gmlParser.__ATN) {
                gmlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(gmlParser._serializedATN));
            }
            return gmlParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    gmlParser.T__0 = 1;
    gmlParser.T__1 = 2;
    gmlParser.STRINGLITERAL = 3;
    gmlParser.REAL = 4;
    gmlParser.SIGN = 5;
    gmlParser.DIGIT = 6;
    gmlParser.MANTISSA = 7;
    gmlParser.VALUE = 8;
    gmlParser.WS = 9;
    gmlParser.RULE_graph = 0;
    gmlParser.RULE_list = 1;
    gmlParser.RULE_kv = 2;
    gmlParser.RULE_value = 3;
    gmlParser.RULE_key = 4;
    gmlParser.RULE_integer = 5;
    gmlParser.RULE_realnum = 6;
    gmlParser.RULE_str = 7;
    gmlParser.RULE_stringliteral = 8;
    // tslint:disable:no-trailing-whitespace
    gmlParser.ruleNames = [
        "graph", "list", "kv", "value", "key", "integer", "realnum", "str", "stringliteral",
    ];
    gmlParser._LITERAL_NAMES = [
        undefined, "'['", "']'",
    ];
    gmlParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "STRINGLITERAL", "REAL", "SIGN", "DIGIT",
        "MANTISSA", "VALUE", "WS",
    ];
    gmlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(gmlParser._LITERAL_NAMES, gmlParser._SYMBOLIC_NAMES, []);
    gmlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v<\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x06\x02\x16\n\x02\r\x02\x0E" +
        "\x02\x17\x03\x03\x03\x03\x06\x03\x1C\n\x03\r\x03\x0E\x03\x1D\x03\x03\x03" +
        "\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
        "\x05*\n\x05\x03\x06\x03\x06\x03\x07\x05\x07/\n\x07\x03\x07\x06\x072\n" +
        "\x07\r\x07\x0E\x073\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x02\x02" +
        "\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
        "\x02\x02\x02:\x02\x15\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06!\x03" +
        "\x02\x02\x02\b)\x03\x02\x02\x02\n+\x03\x02\x02\x02\f.\x03\x02\x02\x02" +
        "\x0E5\x03\x02\x02\x02\x107\x03\x02\x02\x02\x129\x03\x02\x02\x02\x14\x16" +
        "\x05\x06\x04\x02\x15\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x15" +
        "\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02\x19\x1B" +
        "\x07\x03\x02\x02\x1A\x1C\x05\x06\x04\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1D" +
        "\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F" +
        "\x03\x02\x02\x02\x1F \x07\x04\x02\x02 \x05\x03\x02\x02\x02!\"\x05\n\x06" +
        "\x02\"#\x05\b\x05\x02#\x07\x03\x02\x02\x02$*\x05\f\x07\x02%*\x05\x0E\b" +
        "\x02&*\x05\x12\n\x02\'*\x05\x10\t\x02(*\x05\x04\x03\x02)$\x03\x02\x02" +
        "\x02)%\x03\x02\x02\x02)&\x03\x02\x02\x02)\'\x03\x02\x02\x02)(\x03\x02" +
        "\x02\x02*\t\x03\x02\x02\x02+,\x07\n\x02\x02,\v\x03\x02\x02\x02-/\x07\x07" +
        "\x02\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x0202\x07\b" +
        "\x02\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02" +
        "\x02\x024\r\x03\x02\x02\x0256\x07\x06\x02\x026\x0F\x03\x02\x02\x0278\x07" +
        "\n\x02\x028\x11\x03\x02\x02\x029:\x07\x05\x02\x02:\x13\x03\x02\x02\x02" +
        "\x07\x17\x1D).3";
    return gmlParser;
}(Parser_1.Parser));
exports.gmlParser = gmlParser;
var GraphContext = /** @class */ (function (_super) {
    __extends(GraphContext, _super);
    function GraphContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GraphContext.prototype.kv = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KvContext);
        }
        else {
            return this.getRuleContext(i, KvContext);
        }
    };
    Object.defineProperty(GraphContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_graph; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GraphContext.prototype.enterRule = function (listener) {
        if (listener.enterGraph) {
            listener.enterGraph(this);
        }
    };
    // @Override
    GraphContext.prototype.exitRule = function (listener) {
        if (listener.exitGraph) {
            listener.exitGraph(this);
        }
    };
    // @Override
    GraphContext.prototype.accept = function (visitor) {
        if (visitor.visitGraph) {
            return visitor.visitGraph(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GraphContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GraphContext = GraphContext;
var ListContext = /** @class */ (function (_super) {
    __extends(ListContext, _super);
    function ListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListContext.prototype.kv = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KvContext);
        }
        else {
            return this.getRuleContext(i, KvContext);
        }
    };
    Object.defineProperty(ListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListContext.prototype.enterRule = function (listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    };
    // @Override
    ListContext.prototype.exitRule = function (listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    };
    // @Override
    ListContext.prototype.accept = function (visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListContext = ListContext;
var KvContext = /** @class */ (function (_super) {
    __extends(KvContext, _super);
    function KvContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KvContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    KvContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Object.defineProperty(KvContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_kv; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KvContext.prototype.enterRule = function (listener) {
        if (listener.enterKv) {
            listener.enterKv(this);
        }
    };
    // @Override
    KvContext.prototype.exitRule = function (listener) {
        if (listener.exitKv) {
            listener.exitKv(this);
        }
    };
    // @Override
    KvContext.prototype.accept = function (visitor) {
        if (visitor.visitKv) {
            return visitor.visitKv(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KvContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KvContext = KvContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.integer = function () {
        return this.tryGetRuleContext(0, IntegerContext);
    };
    ValueContext.prototype.realnum = function () {
        return this.tryGetRuleContext(0, RealnumContext);
    };
    ValueContext.prototype.stringliteral = function () {
        return this.tryGetRuleContext(0, StringliteralContext);
    };
    ValueContext.prototype.str = function () {
        return this.tryGetRuleContext(0, StrContext);
    };
    ValueContext.prototype.list = function () {
        return this.tryGetRuleContext(0, ListContext);
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_value; },
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
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyContext.prototype.VALUE = function () { return this.getToken(gmlParser.VALUE, 0); };
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyContext.prototype.enterRule = function (listener) {
        if (listener.enterKey) {
            listener.enterKey(this);
        }
    };
    // @Override
    KeyContext.prototype.exitRule = function (listener) {
        if (listener.exitKey) {
            listener.exitKey(this);
        }
    };
    // @Override
    KeyContext.prototype.accept = function (visitor) {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyContext = KeyContext;
var IntegerContext = /** @class */ (function (_super) {
    __extends(IntegerContext, _super);
    function IntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerContext.prototype.SIGN = function () { return this.tryGetToken(gmlParser.SIGN, 0); };
    IntegerContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(gmlParser.DIGIT);
        }
        else {
            return this.getToken(gmlParser.DIGIT, i);
        }
    };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_integer; },
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
var RealnumContext = /** @class */ (function (_super) {
    __extends(RealnumContext, _super);
    function RealnumContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RealnumContext.prototype.REAL = function () { return this.getToken(gmlParser.REAL, 0); };
    Object.defineProperty(RealnumContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_realnum; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RealnumContext.prototype.enterRule = function (listener) {
        if (listener.enterRealnum) {
            listener.enterRealnum(this);
        }
    };
    // @Override
    RealnumContext.prototype.exitRule = function (listener) {
        if (listener.exitRealnum) {
            listener.exitRealnum(this);
        }
    };
    // @Override
    RealnumContext.prototype.accept = function (visitor) {
        if (visitor.visitRealnum) {
            return visitor.visitRealnum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RealnumContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RealnumContext = RealnumContext;
var StrContext = /** @class */ (function (_super) {
    __extends(StrContext, _super);
    function StrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StrContext.prototype.VALUE = function () { return this.getToken(gmlParser.VALUE, 0); };
    Object.defineProperty(StrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_str; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StrContext.prototype.enterRule = function (listener) {
        if (listener.enterStr) {
            listener.enterStr(this);
        }
    };
    // @Override
    StrContext.prototype.exitRule = function (listener) {
        if (listener.exitStr) {
            listener.exitStr(this);
        }
    };
    // @Override
    StrContext.prototype.accept = function (visitor) {
        if (visitor.visitStr) {
            return visitor.visitStr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StrContext = StrContext;
var StringliteralContext = /** @class */ (function (_super) {
    __extends(StringliteralContext, _super);
    function StringliteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringliteralContext.prototype.STRINGLITERAL = function () { return this.getToken(gmlParser.STRINGLITERAL, 0); };
    Object.defineProperty(StringliteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gmlParser.RULE_stringliteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringliteralContext.prototype.enterRule = function (listener) {
        if (listener.enterStringliteral) {
            listener.enterStringliteral(this);
        }
    };
    // @Override
    StringliteralContext.prototype.exitRule = function (listener) {
        if (listener.exitStringliteral) {
            listener.exitStringliteral(this);
        }
    };
    // @Override
    StringliteralContext.prototype.accept = function (visitor) {
        if (visitor.visitStringliteral) {
            return visitor.visitStringliteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringliteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringliteralContext = StringliteralContext;
