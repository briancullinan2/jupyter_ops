"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/graphemes/Graphemes.g4 by ANTLR 4.7.3-SNAPSHOT
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
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var GraphemesParser = /** @class */ (function (_super) {
    __extends(GraphemesParser, _super);
    function GraphemesParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(GraphemesParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(GraphemesParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return GraphemesParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Graphemes.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesParser.prototype, "ruleNames", {
        // @Override
        get: function () { return GraphemesParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesParser.prototype, "serializedATN", {
        // @Override
        get: function () { return GraphemesParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    GraphemesParser.prototype.emoji_sequence = function () {
        var _localctx = new Emoji_sequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, GraphemesParser.RULE_emoji_sequence);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 6;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.EmojiCoreSequence) | (1 << GraphemesParser.EmojiZWJSequence) | (1 << GraphemesParser.EmojiTagSequence))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 10;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 7;
                                _la = this._input.LA(1);
                                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.Extend) | (1 << GraphemesParser.ZWJ) | (1 << GraphemesParser.SpacingMark))) !== 0))) {
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
                    }
                    this.state = 12;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
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
    GraphemesParser.prototype.grapheme_cluster = function () {
        var _localctx = new Grapheme_clusterContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, GraphemesParser.RULE_grapheme_cluster);
        var _la;
        try {
            this.state = 31;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GraphemesParser.CRLF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 13;
                        this.match(GraphemesParser.CRLF);
                    }
                    break;
                case GraphemesParser.EmojiCoreSequence:
                case GraphemesParser.EmojiZWJSequence:
                case GraphemesParser.Prepend:
                case GraphemesParser.NonControl:
                case GraphemesParser.HangulSyllable:
                case GraphemesParser.EmojiTagSequence:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 17;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === GraphemesParser.Prepend) {
                            {
                                {
                                    this.state = 14;
                                    this.match(GraphemesParser.Prepend);
                                }
                            }
                            this.state = 19;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 23;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case GraphemesParser.EmojiCoreSequence:
                            case GraphemesParser.EmojiZWJSequence:
                            case GraphemesParser.EmojiTagSequence:
                                {
                                    this.state = 20;
                                    this.emoji_sequence();
                                }
                                break;
                            case GraphemesParser.HangulSyllable:
                                {
                                    this.state = 21;
                                    this.match(GraphemesParser.HangulSyllable);
                                }
                                break;
                            case GraphemesParser.NonControl:
                                {
                                    this.state = 22;
                                    this.match(GraphemesParser.NonControl);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 28;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.Extend) | (1 << GraphemesParser.ZWJ) | (1 << GraphemesParser.SpacingMark))) !== 0)) {
                            {
                                {
                                    this.state = 25;
                                    _la = this._input.LA(1);
                                    if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.Extend) | (1 << GraphemesParser.ZWJ) | (1 << GraphemesParser.SpacingMark))) !== 0))) {
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
                            this.state = 30;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
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
    // @RuleVersion(0)
    GraphemesParser.prototype.graphemes = function () {
        var _localctx = new GraphemesContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, GraphemesParser.RULE_graphemes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 36;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphemesParser.EmojiCoreSequence) | (1 << GraphemesParser.EmojiZWJSequence) | (1 << GraphemesParser.Prepend) | (1 << GraphemesParser.NonControl) | (1 << GraphemesParser.CRLF) | (1 << GraphemesParser.HangulSyllable) | (1 << GraphemesParser.EmojiTagSequence))) !== 0)) {
                    {
                        {
                            this.state = 33;
                            this.grapheme_cluster();
                        }
                    }
                    this.state = 38;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 39;
                this.match(GraphemesParser.EOF);
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
    Object.defineProperty(GraphemesParser, "_ATN", {
        get: function () {
            if (!GraphemesParser.__ATN) {
                GraphemesParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(GraphemesParser._serializedATN));
            }
            return GraphemesParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    GraphemesParser.Extend = 1;
    GraphemesParser.ZWJ = 2;
    GraphemesParser.SpacingMark = 3;
    GraphemesParser.EmojiCoreSequence = 4;
    GraphemesParser.EmojiZWJSequence = 5;
    GraphemesParser.Prepend = 6;
    GraphemesParser.NonControl = 7;
    GraphemesParser.CRLF = 8;
    GraphemesParser.HangulSyllable = 9;
    GraphemesParser.EmojiTagSequence = 10;
    GraphemesParser.RULE_emoji_sequence = 0;
    GraphemesParser.RULE_grapheme_cluster = 1;
    GraphemesParser.RULE_graphemes = 2;
    // tslint:disable:no-trailing-whitespace
    GraphemesParser.ruleNames = [
        "emoji_sequence", "grapheme_cluster", "graphemes",
    ];
    GraphemesParser._LITERAL_NAMES = [
        undefined, undefined, "'\u200D'",
    ];
    GraphemesParser._SYMBOLIC_NAMES = [
        undefined, "Extend", "ZWJ", "SpacingMark", "EmojiCoreSequence", "EmojiZWJSequence",
        "Prepend", "NonControl", "CRLF", "HangulSyllable", "EmojiTagSequence",
    ];
    GraphemesParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(GraphemesParser._LITERAL_NAMES, GraphemesParser._SYMBOLIC_NAMES, []);
    GraphemesParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f,\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x07\x02\v\n\x02\f\x02" +
        "\x0E\x02\x0E\v\x02\x03\x03\x03\x03\x07\x03\x12\n\x03\f\x03\x0E\x03\x15" +
        "\v\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x03\x07\x03\x1D\n" +
        "\x03\f\x03\x0E\x03 \v\x03\x05\x03\"\n\x03\x03\x04\x07\x04%\n\x04\f\x04" +
        "\x0E\x04(\v\x04\x03\x04\x03\x04\x03\x04\x02\x02\x02\x05\x02\x02\x04\x02" +
        "\x06\x02\x02\x04\x04\x02\x06\x07\f\f\x03\x02\x03\x05\x02/\x02\b\x03\x02" +
        "\x02\x02\x04!\x03\x02\x02\x02\x06&\x03\x02\x02\x02\b\f\t\x02\x02\x02\t" +
        "\v\t\x03\x02\x02\n\t\x03\x02\x02\x02\v\x0E\x03\x02\x02\x02\f\n\x03\x02" +
        "\x02\x02\f\r\x03\x02\x02\x02\r\x03\x03\x02\x02\x02\x0E\f\x03\x02\x02\x02" +
        "\x0F\"\x07\n\x02\x02\x10\x12\x07\b\x02\x02\x11\x10\x03\x02\x02\x02\x12" +
        "\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14" +
        "\x19\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x1A\x05\x02\x02\x02\x17" +
        "\x1A\x07\v\x02\x02\x18\x1A\x07\t\x02\x02\x19\x16\x03\x02\x02\x02\x19\x17" +
        "\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1E\x03\x02\x02\x02\x1B\x1D" +
        "\t\x03\x02\x02\x1C\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03" +
        "\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02" +
        "\x02\x02!\x0F\x03\x02\x02\x02!\x13\x03\x02\x02\x02\"\x05\x03\x02\x02\x02" +
        "#%\x05\x04\x03\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02" +
        "&\'\x03\x02\x02\x02\')\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07\x02\x02" +
        "\x03*\x07\x03\x02\x02\x02\b\f\x13\x19\x1E!&";
    return GraphemesParser;
}(Parser_1.Parser));
exports.GraphemesParser = GraphemesParser;
var Emoji_sequenceContext = /** @class */ (function (_super) {
    __extends(Emoji_sequenceContext, _super);
    function Emoji_sequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Emoji_sequenceContext.prototype.EmojiZWJSequence = function () { return this.tryGetToken(GraphemesParser.EmojiZWJSequence, 0); };
    Emoji_sequenceContext.prototype.EmojiCoreSequence = function () { return this.tryGetToken(GraphemesParser.EmojiCoreSequence, 0); };
    Emoji_sequenceContext.prototype.EmojiTagSequence = function () { return this.tryGetToken(GraphemesParser.EmojiTagSequence, 0); };
    Emoji_sequenceContext.prototype.Extend = function (i) {
        if (i === undefined) {
            return this.getTokens(GraphemesParser.Extend);
        }
        else {
            return this.getToken(GraphemesParser.Extend, i);
        }
    };
    Emoji_sequenceContext.prototype.ZWJ = function (i) {
        if (i === undefined) {
            return this.getTokens(GraphemesParser.ZWJ);
        }
        else {
            return this.getToken(GraphemesParser.ZWJ, i);
        }
    };
    Emoji_sequenceContext.prototype.SpacingMark = function (i) {
        if (i === undefined) {
            return this.getTokens(GraphemesParser.SpacingMark);
        }
        else {
            return this.getToken(GraphemesParser.SpacingMark, i);
        }
    };
    Object.defineProperty(Emoji_sequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphemesParser.RULE_emoji_sequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Emoji_sequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterEmoji_sequence) {
            listener.enterEmoji_sequence(this);
        }
    };
    // @Override
    Emoji_sequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitEmoji_sequence) {
            listener.exitEmoji_sequence(this);
        }
    };
    // @Override
    Emoji_sequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitEmoji_sequence) {
            return visitor.visitEmoji_sequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Emoji_sequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Emoji_sequenceContext = Emoji_sequenceContext;
var Grapheme_clusterContext = /** @class */ (function (_super) {
    __extends(Grapheme_clusterContext, _super);
    function Grapheme_clusterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Grapheme_clusterContext.prototype.CRLF = function () { return this.tryGetToken(GraphemesParser.CRLF, 0); };
    Grapheme_clusterContext.prototype.emoji_sequence = function () {
        return this.tryGetRuleContext(0, Emoji_sequenceContext);
    };
    Grapheme_clusterContext.prototype.HangulSyllable = function () { return this.tryGetToken(GraphemesParser.HangulSyllable, 0); };
    Grapheme_clusterContext.prototype.NonControl = function () { return this.tryGetToken(GraphemesParser.NonControl, 0); };
    Grapheme_clusterContext.prototype.Prepend = function (i) {
        if (i === undefined) {
            return this.getTokens(GraphemesParser.Prepend);
        }
        else {
            return this.getToken(GraphemesParser.Prepend, i);
        }
    };
    Grapheme_clusterContext.prototype.Extend = function (i) {
        if (i === undefined) {
            return this.getTokens(GraphemesParser.Extend);
        }
        else {
            return this.getToken(GraphemesParser.Extend, i);
        }
    };
    Grapheme_clusterContext.prototype.ZWJ = function (i) {
        if (i === undefined) {
            return this.getTokens(GraphemesParser.ZWJ);
        }
        else {
            return this.getToken(GraphemesParser.ZWJ, i);
        }
    };
    Grapheme_clusterContext.prototype.SpacingMark = function (i) {
        if (i === undefined) {
            return this.getTokens(GraphemesParser.SpacingMark);
        }
        else {
            return this.getToken(GraphemesParser.SpacingMark, i);
        }
    };
    Object.defineProperty(Grapheme_clusterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphemesParser.RULE_grapheme_cluster; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Grapheme_clusterContext.prototype.enterRule = function (listener) {
        if (listener.enterGrapheme_cluster) {
            listener.enterGrapheme_cluster(this);
        }
    };
    // @Override
    Grapheme_clusterContext.prototype.exitRule = function (listener) {
        if (listener.exitGrapheme_cluster) {
            listener.exitGrapheme_cluster(this);
        }
    };
    // @Override
    Grapheme_clusterContext.prototype.accept = function (visitor) {
        if (visitor.visitGrapheme_cluster) {
            return visitor.visitGrapheme_cluster(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Grapheme_clusterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Grapheme_clusterContext = Grapheme_clusterContext;
var GraphemesContext = /** @class */ (function (_super) {
    __extends(GraphemesContext, _super);
    function GraphemesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GraphemesContext.prototype.EOF = function () { return this.getToken(GraphemesParser.EOF, 0); };
    GraphemesContext.prototype.grapheme_cluster = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Grapheme_clusterContext);
        }
        else {
            return this.getRuleContext(i, Grapheme_clusterContext);
        }
    };
    Object.defineProperty(GraphemesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphemesParser.RULE_graphemes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GraphemesContext.prototype.enterRule = function (listener) {
        if (listener.enterGraphemes) {
            listener.enterGraphemes(this);
        }
    };
    // @Override
    GraphemesContext.prototype.exitRule = function (listener) {
        if (listener.exitGraphemes) {
            listener.exitGraphemes(this);
        }
    };
    // @Override
    GraphemesContext.prototype.accept = function (visitor) {
        if (visitor.visitGraphemes) {
            return visitor.visitGraphemes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GraphemesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GraphemesContext = GraphemesContext;
