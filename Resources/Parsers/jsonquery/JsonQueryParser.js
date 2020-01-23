"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/jsonquery/JsonQuery.g4 by ANTLR 4.7.3-SNAPSHOT
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
package;
ud.antlr.json;
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
var JsonQueryParser = /** @class */ (function (_super) {
    __extends(JsonQueryParser, _super);
    function JsonQueryParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(JsonQueryParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(JsonQueryParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return JsonQueryParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonQueryParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "JsonQuery.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonQueryParser.prototype, "ruleNames", {
        // @Override
        get: function () { return JsonQueryParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonQueryParser.prototype, "serializedATN", {
        // @Override
        get: function () { return JsonQueryParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    JsonQueryParser.prototype.query = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new QueryContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 0;
        this.enterRecursionRule(_localctx, 0, JsonQueryParser.RULE_query, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 29;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            _localctx = new ParenExpContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 10;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JsonQueryParser.NOT) {
                                {
                                    this.state = 9;
                                    this.match(JsonQueryParser.NOT);
                                }
                            }
                            this.state = 13;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JsonQueryParser.SP) {
                                {
                                    this.state = 12;
                                    this.match(JsonQueryParser.SP);
                                }
                            }
                            this.state = 15;
                            this.match(JsonQueryParser.T__0);
                            this.state = 16;
                            this.query(0);
                            this.state = 17;
                            this.match(JsonQueryParser.T__1);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new PresentExpContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 19;
                            this.attrPath();
                            this.state = 20;
                            this.match(JsonQueryParser.SP);
                            this.state = 21;
                            this.match(JsonQueryParser.T__2);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new CompareExpContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 23;
                            this.attrPath();
                            this.state = 24;
                            this.match(JsonQueryParser.SP);
                            this.state = 25;
                            _localctx._op = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JsonQueryParser.EQ) | (1 << JsonQueryParser.NE) | (1 << JsonQueryParser.GT) | (1 << JsonQueryParser.LT) | (1 << JsonQueryParser.GE) | (1 << JsonQueryParser.LE) | (1 << JsonQueryParser.CO) | (1 << JsonQueryParser.SW) | (1 << JsonQueryParser.EW))) !== 0))) {
                                _localctx._op = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 26;
                            this.match(JsonQueryParser.SP);
                            this.state = 27;
                            this.value();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 38;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new LogicalExpContext(new QueryContext(_parentctx, _parentState));
                                this.pushNewRecursionContext(_localctx, _startState, JsonQueryParser.RULE_query);
                                this.state = 31;
                                if (!(this.precpred(this._ctx, 3))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                }
                                this.state = 32;
                                this.match(JsonQueryParser.SP);
                                this.state = 33;
                                this.match(JsonQueryParser.LOGICAL_OPERATOR);
                                this.state = 34;
                                this.match(JsonQueryParser.SP);
                                this.state = 35;
                                this.query(4);
                            }
                        }
                    }
                    this.state = 40;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    JsonQueryParser.prototype.attrPath = function () {
        var _localctx = new AttrPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JsonQueryParser.RULE_attrPath);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                this.match(JsonQueryParser.ATTRNAME);
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JsonQueryParser.T__3) {
                    {
                        this.state = 42;
                        this.subAttr();
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
    JsonQueryParser.prototype.subAttr = function () {
        var _localctx = new SubAttrContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JsonQueryParser.RULE_subAttr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this.match(JsonQueryParser.T__3);
                this.state = 46;
                this.attrPath();
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
    JsonQueryParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JsonQueryParser.RULE_value);
        var _la;
        try {
            this.state = 59;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JsonQueryParser.BOOLEAN:
                    _localctx = new BooleanContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 48;
                        this.match(JsonQueryParser.BOOLEAN);
                    }
                    break;
                case JsonQueryParser.NULL:
                    _localctx = new NullContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 49;
                        this.match(JsonQueryParser.NULL);
                    }
                    break;
                case JsonQueryParser.STRING:
                    _localctx = new StringContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 50;
                        this.match(JsonQueryParser.STRING);
                    }
                    break;
                case JsonQueryParser.DOUBLE:
                    _localctx = new DoubleContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 51;
                        this.match(JsonQueryParser.DOUBLE);
                    }
                    break;
                case JsonQueryParser.T__4:
                case JsonQueryParser.INT:
                    _localctx = new LongContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 53;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JsonQueryParser.T__4) {
                            {
                                this.state = 52;
                                this.match(JsonQueryParser.T__4);
                            }
                        }
                        this.state = 55;
                        this.match(JsonQueryParser.INT);
                        this.state = 57;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                            case 1:
                                {
                                    this.state = 56;
                                    this.match(JsonQueryParser.EXP);
                                }
                                break;
                        }
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
    JsonQueryParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 0:
                return this.query_sempred(_localctx, predIndex);
        }
        return true;
    };
    JsonQueryParser.prototype.query_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 3);
        }
        return true;
    };
    Object.defineProperty(JsonQueryParser, "_ATN", {
        get: function () {
            if (!JsonQueryParser.__ATN) {
                JsonQueryParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JsonQueryParser._serializedATN));
            }
            return JsonQueryParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    JsonQueryParser.T__0 = 1;
    JsonQueryParser.T__1 = 2;
    JsonQueryParser.T__2 = 3;
    JsonQueryParser.T__3 = 4;
    JsonQueryParser.T__4 = 5;
    JsonQueryParser.NOT = 6;
    JsonQueryParser.LOGICAL_OPERATOR = 7;
    JsonQueryParser.BOOLEAN = 8;
    JsonQueryParser.NULL = 9;
    JsonQueryParser.EQ = 10;
    JsonQueryParser.NE = 11;
    JsonQueryParser.GT = 12;
    JsonQueryParser.LT = 13;
    JsonQueryParser.GE = 14;
    JsonQueryParser.LE = 15;
    JsonQueryParser.CO = 16;
    JsonQueryParser.SW = 17;
    JsonQueryParser.EW = 18;
    JsonQueryParser.ATTRNAME = 19;
    JsonQueryParser.STRING = 20;
    JsonQueryParser.DOUBLE = 21;
    JsonQueryParser.INT = 22;
    JsonQueryParser.EXP = 23;
    JsonQueryParser.SP = 24;
    JsonQueryParser.RULE_query = 0;
    JsonQueryParser.RULE_attrPath = 1;
    JsonQueryParser.RULE_subAttr = 2;
    JsonQueryParser.RULE_value = 3;
    // tslint:disable:no-trailing-whitespace
    JsonQueryParser.ruleNames = [
        "query", "attrPath", "subAttr", "value",
    ];
    JsonQueryParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'pr'", "'.'", "'-'", "'not'", undefined, undefined,
        "'null'", "'eq'", "'ne'", "'gt'", "'lt'", "'ge'", "'le'", "'co'", "'sw'",
        "'ew'", undefined, undefined, undefined, undefined, undefined, "' '",
    ];
    JsonQueryParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, "NOT",
        "LOGICAL_OPERATOR", "BOOLEAN", "NULL", "EQ", "NE", "GT", "LT", "GE", "LE",
        "CO", "SW", "EW", "ATTRNAME", "STRING", "DOUBLE", "INT", "EXP", "SP",
    ];
    JsonQueryParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JsonQueryParser._LITERAL_NAMES, JsonQueryParser._SYMBOLIC_NAMES, []);
    JsonQueryParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A@\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x05\x02" +
        "\r\n\x02\x03\x02\x05\x02\x10\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x05\x02 \n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\'" +
        "\n\x02\f\x02\x0E\x02*\v\x02\x03\x03\x03\x03\x05\x03.\n\x03\x03\x04\x03" +
        "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x058\n\x05\x03" +
        "\x05\x03\x05\x05\x05<\n\x05\x05\x05>\n\x05\x03\x05\x02\x02\x03\x02\x06" +
        "\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x03\x02\f\x14\x02G\x02\x1F\x03" +
        "\x02\x02\x02\x04+\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b=\x03\x02\x02" +
        "\x02\n\f\b\x02\x01\x02\v\r\x07\b\x02\x02\f\v\x03\x02\x02\x02\f\r\x03\x02" +
        "\x02\x02\r\x0F\x03\x02\x02\x02\x0E\x10\x07\x1A\x02\x02\x0F\x0E\x03\x02" +
        "\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\x12\x07\x03" +
        "\x02\x02\x12\x13\x05\x02\x02\x02\x13\x14\x07\x04\x02\x02\x14 \x03\x02" +
        "\x02\x02\x15\x16\x05\x04\x03\x02\x16\x17\x07\x1A\x02\x02\x17\x18\x07\x05" +
        "\x02\x02\x18 \x03\x02\x02\x02\x19\x1A\x05\x04\x03\x02\x1A\x1B\x07\x1A" +
        "\x02\x02\x1B\x1C\t\x02\x02\x02\x1C\x1D\x07\x1A\x02\x02\x1D\x1E\x05\b\x05" +
        "\x02\x1E \x03\x02\x02\x02\x1F\n\x03\x02\x02\x02\x1F\x15\x03\x02\x02\x02" +
        "\x1F\x19\x03\x02\x02\x02 (\x03\x02\x02\x02!\"\f\x05\x02\x02\"#\x07\x1A" +
        "\x02\x02#$\x07\t\x02\x02$%\x07\x1A\x02\x02%\'\x05\x02\x02\x06&!\x03\x02" +
        "\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x03\x03" +
        "\x02\x02\x02*(\x03\x02\x02\x02+-\x07\x15\x02\x02,.\x05\x06\x04\x02-,\x03" +
        "\x02\x02\x02-.\x03\x02\x02\x02.\x05\x03\x02\x02\x02/0\x07\x06\x02\x02" +
        "01\x05\x04\x03\x021\x07\x03\x02\x02\x022>\x07\n\x02\x023>\x07\v\x02\x02" +
        "4>\x07\x16\x02\x025>\x07\x17\x02\x0268\x07\x07\x02\x0276\x03\x02\x02\x02" +
        "78\x03\x02\x02\x0289\x03\x02\x02\x029;\x07\x18\x02\x02:<\x07\x19\x02\x02" +
        ";:\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02\x02=2\x03\x02\x02\x02" +
        "=3\x03\x02\x02\x02=4\x03\x02\x02\x02=5\x03\x02\x02\x02=7\x03\x02\x02\x02" +
        ">\t\x03\x02\x02\x02\n\f\x0F\x1F(-7;=";
    return JsonQueryParser;
}(Parser_1.Parser));
exports.JsonQueryParser = JsonQueryParser;
var QueryContext = /** @class */ (function (_super) {
    __extends(QueryContext, _super);
    function QueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(QueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JsonQueryParser.RULE_query; },
        enumerable: true,
        configurable: true
    });
    QueryContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return QueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QueryContext = QueryContext;
var ParenExpContext = /** @class */ (function (_super) {
    __extends(ParenExpContext, _super);
    function ParenExpContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenExpContext.prototype.query = function () {
        return this.getRuleContext(0, QueryContext);
    };
    ParenExpContext.prototype.NOT = function () { return this.tryGetToken(JsonQueryParser.NOT, 0); };
    ParenExpContext.prototype.SP = function () { return this.tryGetToken(JsonQueryParser.SP, 0); };
    // @Override
    ParenExpContext.prototype.enterRule = function (listener) {
        if (listener.enterParenExp) {
            listener.enterParenExp(this);
        }
    };
    // @Override
    ParenExpContext.prototype.exitRule = function (listener) {
        if (listener.exitParenExp) {
            listener.exitParenExp(this);
        }
    };
    // @Override
    ParenExpContext.prototype.accept = function (visitor) {
        if (visitor.visitParenExp) {
            return visitor.visitParenExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenExpContext;
}(QueryContext));
exports.ParenExpContext = ParenExpContext;
var LogicalExpContext = /** @class */ (function (_super) {
    __extends(LogicalExpContext, _super);
    function LogicalExpContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LogicalExpContext.prototype.query = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QueryContext);
        }
        else {
            return this.getRuleContext(i, QueryContext);
        }
    };
    LogicalExpContext.prototype.SP = function (i) {
        if (i === undefined) {
            return this.getTokens(JsonQueryParser.SP);
        }
        else {
            return this.getToken(JsonQueryParser.SP, i);
        }
    };
    LogicalExpContext.prototype.LOGICAL_OPERATOR = function () { return this.getToken(JsonQueryParser.LOGICAL_OPERATOR, 0); };
    // @Override
    LogicalExpContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalExp) {
            listener.enterLogicalExp(this);
        }
    };
    // @Override
    LogicalExpContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalExp) {
            listener.exitLogicalExp(this);
        }
    };
    // @Override
    LogicalExpContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalExp) {
            return visitor.visitLogicalExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalExpContext;
}(QueryContext));
exports.LogicalExpContext = LogicalExpContext;
var PresentExpContext = /** @class */ (function (_super) {
    __extends(PresentExpContext, _super);
    function PresentExpContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PresentExpContext.prototype.attrPath = function () {
        return this.getRuleContext(0, AttrPathContext);
    };
    PresentExpContext.prototype.SP = function () { return this.getToken(JsonQueryParser.SP, 0); };
    // @Override
    PresentExpContext.prototype.enterRule = function (listener) {
        if (listener.enterPresentExp) {
            listener.enterPresentExp(this);
        }
    };
    // @Override
    PresentExpContext.prototype.exitRule = function (listener) {
        if (listener.exitPresentExp) {
            listener.exitPresentExp(this);
        }
    };
    // @Override
    PresentExpContext.prototype.accept = function (visitor) {
        if (visitor.visitPresentExp) {
            return visitor.visitPresentExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PresentExpContext;
}(QueryContext));
exports.PresentExpContext = PresentExpContext;
var CompareExpContext = /** @class */ (function (_super) {
    __extends(CompareExpContext, _super);
    function CompareExpContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    CompareExpContext.prototype.attrPath = function () {
        return this.getRuleContext(0, AttrPathContext);
    };
    CompareExpContext.prototype.SP = function (i) {
        if (i === undefined) {
            return this.getTokens(JsonQueryParser.SP);
        }
        else {
            return this.getToken(JsonQueryParser.SP, i);
        }
    };
    CompareExpContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    CompareExpContext.prototype.EQ = function () { return this.tryGetToken(JsonQueryParser.EQ, 0); };
    CompareExpContext.prototype.NE = function () { return this.tryGetToken(JsonQueryParser.NE, 0); };
    CompareExpContext.prototype.GT = function () { return this.tryGetToken(JsonQueryParser.GT, 0); };
    CompareExpContext.prototype.LT = function () { return this.tryGetToken(JsonQueryParser.LT, 0); };
    CompareExpContext.prototype.GE = function () { return this.tryGetToken(JsonQueryParser.GE, 0); };
    CompareExpContext.prototype.LE = function () { return this.tryGetToken(JsonQueryParser.LE, 0); };
    CompareExpContext.prototype.CO = function () { return this.tryGetToken(JsonQueryParser.CO, 0); };
    CompareExpContext.prototype.SW = function () { return this.tryGetToken(JsonQueryParser.SW, 0); };
    CompareExpContext.prototype.EW = function () { return this.tryGetToken(JsonQueryParser.EW, 0); };
    // @Override
    CompareExpContext.prototype.enterRule = function (listener) {
        if (listener.enterCompareExp) {
            listener.enterCompareExp(this);
        }
    };
    // @Override
    CompareExpContext.prototype.exitRule = function (listener) {
        if (listener.exitCompareExp) {
            listener.exitCompareExp(this);
        }
    };
    // @Override
    CompareExpContext.prototype.accept = function (visitor) {
        if (visitor.visitCompareExp) {
            return visitor.visitCompareExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompareExpContext;
}(QueryContext));
exports.CompareExpContext = CompareExpContext;
var AttrPathContext = /** @class */ (function (_super) {
    __extends(AttrPathContext, _super);
    function AttrPathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttrPathContext.prototype.ATTRNAME = function () { return this.getToken(JsonQueryParser.ATTRNAME, 0); };
    AttrPathContext.prototype.subAttr = function () {
        return this.tryGetRuleContext(0, SubAttrContext);
    };
    Object.defineProperty(AttrPathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JsonQueryParser.RULE_attrPath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttrPathContext.prototype.enterRule = function (listener) {
        if (listener.enterAttrPath) {
            listener.enterAttrPath(this);
        }
    };
    // @Override
    AttrPathContext.prototype.exitRule = function (listener) {
        if (listener.exitAttrPath) {
            listener.exitAttrPath(this);
        }
    };
    // @Override
    AttrPathContext.prototype.accept = function (visitor) {
        if (visitor.visitAttrPath) {
            return visitor.visitAttrPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttrPathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttrPathContext = AttrPathContext;
var SubAttrContext = /** @class */ (function (_super) {
    __extends(SubAttrContext, _super);
    function SubAttrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubAttrContext.prototype.attrPath = function () {
        return this.getRuleContext(0, AttrPathContext);
    };
    Object.defineProperty(SubAttrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JsonQueryParser.RULE_subAttr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubAttrContext.prototype.enterRule = function (listener) {
        if (listener.enterSubAttr) {
            listener.enterSubAttr(this);
        }
    };
    // @Override
    SubAttrContext.prototype.exitRule = function (listener) {
        if (listener.exitSubAttr) {
            listener.exitSubAttr(this);
        }
    };
    // @Override
    SubAttrContext.prototype.accept = function (visitor) {
        if (visitor.visitSubAttr) {
            return visitor.visitSubAttr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubAttrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubAttrContext = SubAttrContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JsonQueryParser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    ValueContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var BooleanContext = /** @class */ (function (_super) {
    __extends(BooleanContext, _super);
    function BooleanContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BooleanContext.prototype.BOOLEAN = function () { return this.getToken(JsonQueryParser.BOOLEAN, 0); };
    // @Override
    BooleanContext.prototype.enterRule = function (listener) {
        if (listener.enterBoolean) {
            listener.enterBoolean(this);
        }
    };
    // @Override
    BooleanContext.prototype.exitRule = function (listener) {
        if (listener.exitBoolean) {
            listener.exitBoolean(this);
        }
    };
    // @Override
    BooleanContext.prototype.accept = function (visitor) {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanContext;
}(ValueContext));
exports.BooleanContext = BooleanContext;
var NullContext = /** @class */ (function (_super) {
    __extends(NullContext, _super);
    function NullContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NullContext.prototype.NULL = function () { return this.getToken(JsonQueryParser.NULL, 0); };
    // @Override
    NullContext.prototype.enterRule = function (listener) {
        if (listener.enterNull) {
            listener.enterNull(this);
        }
    };
    // @Override
    NullContext.prototype.exitRule = function (listener) {
        if (listener.exitNull) {
            listener.exitNull(this);
        }
    };
    // @Override
    NullContext.prototype.accept = function (visitor) {
        if (visitor.visitNull) {
            return visitor.visitNull(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NullContext;
}(ValueContext));
exports.NullContext = NullContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(JsonQueryParser.STRING, 0); };
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ValueContext));
exports.StringContext = StringContext;
var DoubleContext = /** @class */ (function (_super) {
    __extends(DoubleContext, _super);
    function DoubleContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DoubleContext.prototype.DOUBLE = function () { return this.getToken(JsonQueryParser.DOUBLE, 0); };
    // @Override
    DoubleContext.prototype.enterRule = function (listener) {
        if (listener.enterDouble) {
            listener.enterDouble(this);
        }
    };
    // @Override
    DoubleContext.prototype.exitRule = function (listener) {
        if (listener.exitDouble) {
            listener.exitDouble(this);
        }
    };
    // @Override
    DoubleContext.prototype.accept = function (visitor) {
        if (visitor.visitDouble) {
            return visitor.visitDouble(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoubleContext;
}(ValueContext));
exports.DoubleContext = DoubleContext;
var LongContext = /** @class */ (function (_super) {
    __extends(LongContext, _super);
    function LongContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LongContext.prototype.INT = function () { return this.getToken(JsonQueryParser.INT, 0); };
    LongContext.prototype.EXP = function () { return this.tryGetToken(JsonQueryParser.EXP, 0); };
    // @Override
    LongContext.prototype.enterRule = function (listener) {
        if (listener.enterLong) {
            listener.enterLong(this);
        }
    };
    // @Override
    LongContext.prototype.exitRule = function (listener) {
        if (listener.exitLong) {
            listener.exitLong(this);
        }
    };
    // @Override
    LongContext.prototype.accept = function (visitor) {
        if (visitor.visitLong) {
            return visitor.visitLong(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LongContext;
}(ValueContext));
exports.LongContext = LongContext;
