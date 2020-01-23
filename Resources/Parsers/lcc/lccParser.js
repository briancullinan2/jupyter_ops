"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lcc/lcc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var lccParser = /** @class */ (function (_super) {
    __extends(lccParser, _super);
    function lccParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(lccParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(lccParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return lccParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "lcc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccParser.prototype, "ruleNames", {
        // @Override
        get: function () { return lccParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccParser.prototype, "serializedATN", {
        // @Override
        get: function () { return lccParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    lccParser.prototype.lcc = function () {
        var _localctx = new LccContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, lccParser.RULE_lcc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 16;
                this.topic();
                this.state = 18;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 17;
                            this.match(lccParser.T__0);
                        }
                        break;
                }
                this.state = 21;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === lccParser.LETTER) {
                    {
                        this.state = 20;
                        this.subtopic();
                    }
                }
                this.state = 24;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === lccParser.T__0) {
                    {
                        this.state = 23;
                        this.match(lccParser.T__0);
                    }
                }
                this.state = 26;
                this.subclasses();
                this.state = 28;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 27;
                            this.match(lccParser.T__0);
                        }
                        break;
                }
                this.state = 32;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === lccParser.T__1) {
                    {
                        this.state = 30;
                        this.match(lccParser.T__1);
                        this.state = 31;
                        this.cutters();
                    }
                }
                this.state = 36;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === lccParser.T__0) {
                    {
                        this.state = 34;
                        this.match(lccParser.T__0);
                        this.state = 35;
                        this.date();
                    }
                }
                this.state = 38;
                this.match(lccParser.EOF);
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
    lccParser.prototype.topic = function () {
        var _localctx = new TopicContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, lccParser.RULE_topic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.match(lccParser.LETTER);
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
    lccParser.prototype.subtopic = function () {
        var _localctx = new SubtopicContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, lccParser.RULE_subtopic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 42;
                this.match(lccParser.LETTER);
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
    lccParser.prototype.subclasses = function () {
        var _localctx = new SubclassesContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, lccParser.RULE_subclasses);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this.subclass();
                this.state = 49;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 45;
                                this.match(lccParser.T__1);
                                this.state = 46;
                                this.subclass();
                            }
                        }
                    }
                    this.state = 51;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lccParser.prototype.subclass = function () {
        var _localctx = new SubclassContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, lccParser.RULE_subclass);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 52;
                            this.match(lccParser.DIGIT);
                        }
                    }
                    this.state = 55;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === lccParser.DIGIT);
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
    lccParser.prototype.cutters = function () {
        var _localctx = new CuttersContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, lccParser.RULE_cutters);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.cutter();
                this.state = 62;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 58;
                                this.match(lccParser.T__0);
                                this.state = 59;
                                this.cutter();
                            }
                        }
                    }
                    this.state = 64;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
    lccParser.prototype.cutter = function () {
        var _localctx = new CutterContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, lccParser.RULE_cutter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 65;
                this.match(lccParser.LETTER);
                this.state = 67;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 66;
                            this.match(lccParser.DIGIT);
                        }
                    }
                    this.state = 69;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === lccParser.DIGIT);
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
    lccParser.prototype.date = function () {
        var _localctx = new DateContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, lccParser.RULE_date);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this.match(lccParser.DIGIT);
                this.state = 72;
                this.match(lccParser.DIGIT);
                this.state = 73;
                this.match(lccParser.DIGIT);
                this.state = 74;
                this.match(lccParser.DIGIT);
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
    Object.defineProperty(lccParser, "_ATN", {
        get: function () {
            if (!lccParser.__ATN) {
                lccParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(lccParser._serializedATN));
            }
            return lccParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    lccParser.T__0 = 1;
    lccParser.T__1 = 2;
    lccParser.DIGIT = 3;
    lccParser.LETTER = 4;
    lccParser.WS = 5;
    lccParser.RULE_lcc = 0;
    lccParser.RULE_topic = 1;
    lccParser.RULE_subtopic = 2;
    lccParser.RULE_subclasses = 3;
    lccParser.RULE_subclass = 4;
    lccParser.RULE_cutters = 5;
    lccParser.RULE_cutter = 6;
    lccParser.RULE_date = 7;
    // tslint:disable:no-trailing-whitespace
    lccParser.ruleNames = [
        "lcc", "topic", "subtopic", "subclasses", "subclass", "cutters", "cutter",
        "date",
    ];
    lccParser._LITERAL_NAMES = [
        undefined, "' '", "'.'",
    ];
    lccParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "DIGIT", "LETTER", "WS",
    ];
    lccParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(lccParser._LITERAL_NAMES, lccParser._SYMBOLIC_NAMES, []);
    lccParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07O\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x05\x02\x15\n\x02\x03\x02\x05" +
        "\x02\x18\n\x02\x03\x02\x05\x02\x1B\n\x02\x03\x02\x03\x02\x05\x02\x1F\n" +
        "\x02\x03\x02\x03\x02\x05\x02#\n\x02\x03\x02\x03\x02\x05\x02\'\n\x02\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07" +
        "\x052\n\x05\f\x05\x0E\x055\v\x05\x03\x06\x06\x068\n\x06\r\x06\x0E\x06" +
        "9\x03\x07\x03\x07\x03\x07\x07\x07?\n\x07\f\x07\x0E\x07B\v\x07\x03\b\x03" +
        "\b\x06\bF\n\b\r\b\x0E\bG\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x02\x02\x02" +
        "\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x02\x02" +
        "P\x02\x12\x03\x02\x02\x02\x04*\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b" +
        ".\x03\x02\x02\x02\n7\x03\x02\x02\x02\f;\x03\x02\x02\x02\x0EC\x03\x02\x02" +
        "\x02\x10I\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x15\x07\x03\x02" +
        "\x02\x14\x13\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x17\x03\x02\x02" +
        "\x02\x16\x18\x05\x06\x04\x02\x17\x16\x03\x02\x02\x02\x17\x18\x03\x02\x02" +
        "\x02\x18\x1A\x03\x02\x02\x02\x19\x1B\x07\x03\x02\x02\x1A\x19\x03\x02\x02" +
        "\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x05\b\x05" +
        "\x02\x1D\x1F\x07\x03\x02\x02\x1E\x1D\x03\x02\x02\x02\x1E\x1F\x03\x02\x02" +
        "\x02\x1F\"\x03\x02\x02\x02 !\x07\x04\x02\x02!#\x05\f\x07\x02\" \x03\x02" +
        "\x02\x02\"#\x03\x02\x02\x02#&\x03\x02\x02\x02$%\x07\x03\x02\x02%\'\x05" +
        "\x10\t\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02\x02()\x07" +
        "\x02\x02\x03)\x03\x03\x02\x02\x02*+\x07\x06\x02\x02+\x05\x03\x02\x02\x02" +
        ",-\x07\x06\x02\x02-\x07\x03\x02\x02\x02.3\x05\n\x06\x02/0\x07\x04\x02" +
        "\x0202\x05\n\x06\x021/\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02" +
        "\x0234\x03\x02\x02\x024\t\x03\x02\x02\x0253\x03\x02\x02\x0268\x07\x05" +
        "\x02\x0276\x03\x02\x02\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02" +
        "\x02\x02:\v\x03\x02\x02\x02;@\x05\x0E\b\x02<=\x07\x03\x02\x02=?\x05\x0E" +
        "\b\x02><\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02" +
        "\x02\x02A\r\x03\x02\x02\x02B@\x03\x02\x02\x02CE\x07\x06\x02\x02DF\x07" +
        "\x05\x02\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03" +
        "\x02\x02\x02H\x0F\x03\x02\x02\x02IJ\x07\x05\x02\x02JK\x07\x05\x02\x02" +
        "KL\x07\x05\x02\x02LM\x07\x05\x02\x02M\x11\x03\x02\x02\x02\f\x14\x17\x1A" +
        "\x1E\"&39@G";
    return lccParser;
}(Parser_1.Parser));
exports.lccParser = lccParser;
var LccContext = /** @class */ (function (_super) {
    __extends(LccContext, _super);
    function LccContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LccContext.prototype.topic = function () {
        return this.getRuleContext(0, TopicContext);
    };
    LccContext.prototype.subclasses = function () {
        return this.getRuleContext(0, SubclassesContext);
    };
    LccContext.prototype.EOF = function () { return this.getToken(lccParser.EOF, 0); };
    LccContext.prototype.subtopic = function () {
        return this.tryGetRuleContext(0, SubtopicContext);
    };
    LccContext.prototype.cutters = function () {
        return this.tryGetRuleContext(0, CuttersContext);
    };
    LccContext.prototype.date = function () {
        return this.tryGetRuleContext(0, DateContext);
    };
    Object.defineProperty(LccContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lccParser.RULE_lcc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LccContext.prototype.enterRule = function (listener) {
        if (listener.enterLcc) {
            listener.enterLcc(this);
        }
    };
    // @Override
    LccContext.prototype.exitRule = function (listener) {
        if (listener.exitLcc) {
            listener.exitLcc(this);
        }
    };
    // @Override
    LccContext.prototype.accept = function (visitor) {
        if (visitor.visitLcc) {
            return visitor.visitLcc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LccContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LccContext = LccContext;
var TopicContext = /** @class */ (function (_super) {
    __extends(TopicContext, _super);
    function TopicContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopicContext.prototype.LETTER = function () { return this.getToken(lccParser.LETTER, 0); };
    Object.defineProperty(TopicContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lccParser.RULE_topic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopicContext.prototype.enterRule = function (listener) {
        if (listener.enterTopic) {
            listener.enterTopic(this);
        }
    };
    // @Override
    TopicContext.prototype.exitRule = function (listener) {
        if (listener.exitTopic) {
            listener.exitTopic(this);
        }
    };
    // @Override
    TopicContext.prototype.accept = function (visitor) {
        if (visitor.visitTopic) {
            return visitor.visitTopic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopicContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopicContext = TopicContext;
var SubtopicContext = /** @class */ (function (_super) {
    __extends(SubtopicContext, _super);
    function SubtopicContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubtopicContext.prototype.LETTER = function () { return this.getToken(lccParser.LETTER, 0); };
    Object.defineProperty(SubtopicContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lccParser.RULE_subtopic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubtopicContext.prototype.enterRule = function (listener) {
        if (listener.enterSubtopic) {
            listener.enterSubtopic(this);
        }
    };
    // @Override
    SubtopicContext.prototype.exitRule = function (listener) {
        if (listener.exitSubtopic) {
            listener.exitSubtopic(this);
        }
    };
    // @Override
    SubtopicContext.prototype.accept = function (visitor) {
        if (visitor.visitSubtopic) {
            return visitor.visitSubtopic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubtopicContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubtopicContext = SubtopicContext;
var SubclassesContext = /** @class */ (function (_super) {
    __extends(SubclassesContext, _super);
    function SubclassesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubclassesContext.prototype.subclass = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SubclassContext);
        }
        else {
            return this.getRuleContext(i, SubclassContext);
        }
    };
    Object.defineProperty(SubclassesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lccParser.RULE_subclasses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubclassesContext.prototype.enterRule = function (listener) {
        if (listener.enterSubclasses) {
            listener.enterSubclasses(this);
        }
    };
    // @Override
    SubclassesContext.prototype.exitRule = function (listener) {
        if (listener.exitSubclasses) {
            listener.exitSubclasses(this);
        }
    };
    // @Override
    SubclassesContext.prototype.accept = function (visitor) {
        if (visitor.visitSubclasses) {
            return visitor.visitSubclasses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubclassesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubclassesContext = SubclassesContext;
var SubclassContext = /** @class */ (function (_super) {
    __extends(SubclassContext, _super);
    function SubclassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubclassContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(lccParser.DIGIT);
        }
        else {
            return this.getToken(lccParser.DIGIT, i);
        }
    };
    Object.defineProperty(SubclassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lccParser.RULE_subclass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubclassContext.prototype.enterRule = function (listener) {
        if (listener.enterSubclass) {
            listener.enterSubclass(this);
        }
    };
    // @Override
    SubclassContext.prototype.exitRule = function (listener) {
        if (listener.exitSubclass) {
            listener.exitSubclass(this);
        }
    };
    // @Override
    SubclassContext.prototype.accept = function (visitor) {
        if (visitor.visitSubclass) {
            return visitor.visitSubclass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubclassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubclassContext = SubclassContext;
var CuttersContext = /** @class */ (function (_super) {
    __extends(CuttersContext, _super);
    function CuttersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CuttersContext.prototype.cutter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CutterContext);
        }
        else {
            return this.getRuleContext(i, CutterContext);
        }
    };
    Object.defineProperty(CuttersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lccParser.RULE_cutters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CuttersContext.prototype.enterRule = function (listener) {
        if (listener.enterCutters) {
            listener.enterCutters(this);
        }
    };
    // @Override
    CuttersContext.prototype.exitRule = function (listener) {
        if (listener.exitCutters) {
            listener.exitCutters(this);
        }
    };
    // @Override
    CuttersContext.prototype.accept = function (visitor) {
        if (visitor.visitCutters) {
            return visitor.visitCutters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CuttersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CuttersContext = CuttersContext;
var CutterContext = /** @class */ (function (_super) {
    __extends(CutterContext, _super);
    function CutterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CutterContext.prototype.LETTER = function () { return this.getToken(lccParser.LETTER, 0); };
    CutterContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(lccParser.DIGIT);
        }
        else {
            return this.getToken(lccParser.DIGIT, i);
        }
    };
    Object.defineProperty(CutterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lccParser.RULE_cutter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CutterContext.prototype.enterRule = function (listener) {
        if (listener.enterCutter) {
            listener.enterCutter(this);
        }
    };
    // @Override
    CutterContext.prototype.exitRule = function (listener) {
        if (listener.exitCutter) {
            listener.exitCutter(this);
        }
    };
    // @Override
    CutterContext.prototype.accept = function (visitor) {
        if (visitor.visitCutter) {
            return visitor.visitCutter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CutterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CutterContext = CutterContext;
var DateContext = /** @class */ (function (_super) {
    __extends(DateContext, _super);
    function DateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DateContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(lccParser.DIGIT);
        }
        else {
            return this.getToken(lccParser.DIGIT, i);
        }
    };
    Object.defineProperty(DateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lccParser.RULE_date; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DateContext.prototype.enterRule = function (listener) {
        if (listener.enterDate) {
            listener.enterDate(this);
        }
    };
    // @Override
    DateContext.prototype.exitRule = function (listener) {
        if (listener.exitDate) {
            listener.exitDate(this);
        }
    };
    // @Override
    DateContext.prototype.accept = function (visitor) {
        if (visitor.visitDate) {
            return visitor.visitDate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DateContext = DateContext;
