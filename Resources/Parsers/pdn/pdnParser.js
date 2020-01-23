"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdn/pdn.g4 by ANTLR 4.7.3-SNAPSHOT
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
var pdnParser = /** @class */ (function (_super) {
    __extends(pdnParser, _super);
    function pdnParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(pdnParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(pdnParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return pdnParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pdnParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "pdn.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pdnParser.prototype, "ruleNames", {
        // @Override
        get: function () { return pdnParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pdnParser.prototype, "serializedATN", {
        // @Override
        get: function () { return pdnParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    pdnParser.prototype.game = function () {
        var _localctx = new GameContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, pdnParser.RULE_game);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 22;
                this.tags();
                this.state = 23;
                this.moves();
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
    pdnParser.prototype.tags = function () {
        var _localctx = new TagsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, pdnParser.RULE_tags);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pdnParser.T__0) {
                    {
                        {
                            this.state = 25;
                            this.tag();
                        }
                    }
                    this.state = 30;
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
    pdnParser.prototype.tag = function () {
        var _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, pdnParser.RULE_tag);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 31;
                this.match(pdnParser.T__0);
                this.state = 32;
                this.text();
                this.state = 33;
                this.string();
                this.state = 34;
                this.match(pdnParser.T__1);
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
    pdnParser.prototype.moves = function () {
        var _localctx = new MovesContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, pdnParser.RULE_moves);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 37;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 36;
                            this.move();
                        }
                    }
                    this.state = 39;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === pdnParser.NUMBER);
                this.state = 43;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case pdnParser.T__4:
                    case pdnParser.T__5:
                    case pdnParser.T__6:
                        {
                            this.state = 41;
                            this.result();
                        }
                        break;
                    case pdnParser.T__2:
                        {
                            this.state = 42;
                            this.match(pdnParser.T__2);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
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
    pdnParser.prototype.move = function () {
        var _localctx = new MoveContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, pdnParser.RULE_move);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this.movenum();
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 46;
                            this.movespec();
                        }
                    }
                    this.state = 49;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === pdnParser.MOVE1 || _la === pdnParser.MOVE2);
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
    pdnParser.prototype.movespec = function () {
        var _localctx = new MovespecContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, pdnParser.RULE_movespec);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                _la = this._input.LA(1);
                if (!(_la === pdnParser.MOVE1 || _la === pdnParser.MOVE2)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 54;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                    case 1:
                        {
                            this.state = 52;
                            this.result();
                        }
                        break;
                    case 2:
                        {
                            this.state = 53;
                            this.match(pdnParser.T__2);
                        }
                        break;
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
    pdnParser.prototype.movenum = function () {
        var _localctx = new MovenumContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, pdnParser.RULE_movenum);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this.number();
                this.state = 57;
                this.match(pdnParser.T__3);
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
    pdnParser.prototype.result = function () {
        var _localctx = new ResultContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, pdnParser.RULE_result);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 59;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdnParser.T__4) | (1 << pdnParser.T__5) | (1 << pdnParser.T__6))) !== 0))) {
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
    pdnParser.prototype.text = function () {
        var _localctx = new TextContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, pdnParser.RULE_text);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 61;
                this.match(pdnParser.TEXT);
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
    pdnParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, pdnParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 63;
                this.match(pdnParser.STRING);
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
    pdnParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, pdnParser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 65;
                this.match(pdnParser.NUMBER);
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
    Object.defineProperty(pdnParser, "_ATN", {
        get: function () {
            if (!pdnParser.__ATN) {
                pdnParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(pdnParser._serializedATN));
            }
            return pdnParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    pdnParser.T__0 = 1;
    pdnParser.T__1 = 2;
    pdnParser.T__2 = 3;
    pdnParser.T__3 = 4;
    pdnParser.T__4 = 5;
    pdnParser.T__5 = 6;
    pdnParser.T__6 = 7;
    pdnParser.MOVE1 = 8;
    pdnParser.MOVE2 = 9;
    pdnParser.NUMBER = 10;
    pdnParser.TEXT = 11;
    pdnParser.STRING = 12;
    pdnParser.COMMENT = 13;
    pdnParser.WS = 14;
    pdnParser.RULE_game = 0;
    pdnParser.RULE_tags = 1;
    pdnParser.RULE_tag = 2;
    pdnParser.RULE_moves = 3;
    pdnParser.RULE_move = 4;
    pdnParser.RULE_movespec = 5;
    pdnParser.RULE_movenum = 6;
    pdnParser.RULE_result = 7;
    pdnParser.RULE_text = 8;
    pdnParser.RULE_string = 9;
    pdnParser.RULE_number = 10;
    // tslint:disable:no-trailing-whitespace
    pdnParser.ruleNames = [
        "game", "tags", "tag", "moves", "move", "movespec", "movenum", "result",
        "text", "string", "number",
    ];
    pdnParser._LITERAL_NAMES = [
        undefined, "'['", "']'", "'*'", "'.'", "'1/2-1/2'", "'1-0'", "'0-1'",
    ];
    pdnParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "MOVE1", "MOVE2", "NUMBER", "TEXT", "STRING", "COMMENT", "WS",
    ];
    pdnParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(pdnParser._LITERAL_NAMES, pdnParser._SYMBOLIC_NAMES, []);
    pdnParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10F\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
        "\x03\x02\x03\x03\x07\x03\x1D\n\x03\f\x03\x0E\x03 \v\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x05\x06\x05(\n\x05\r\x05\x0E\x05)\x03\x05" +
        "\x03\x05\x05\x05.\n\x05\x03\x06\x03\x06\x06\x062\n\x06\r\x06\x0E\x063" +
        "\x03\x07\x03\x07\x03\x07\x05\x079\n\x07\x03\b\x03\b\x03\b\x03\t\x03\t" +
        "\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02" +
        "\x04\x03\x02\n\v\x03\x02\x07\t\x02@\x02\x18\x03\x02\x02\x02\x04\x1E\x03" +
        "\x02\x02\x02\x06!\x03\x02\x02\x02\b\'\x03\x02\x02\x02\n/\x03\x02\x02\x02" +
        "\f5\x03\x02\x02\x02\x0E:\x03\x02\x02\x02\x10=\x03\x02\x02\x02\x12?\x03" +
        "\x02\x02\x02\x14A\x03\x02\x02\x02\x16C\x03\x02\x02\x02\x18\x19\x05\x04" +
        "\x03\x02\x19\x1A\x05\b\x05\x02\x1A\x03\x03\x02\x02\x02\x1B\x1D\x05\x06" +
        "\x04\x02\x1C\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02" +
        "\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x05\x03\x02\x02\x02 \x1E\x03\x02" +
        "\x02\x02!\"\x07\x03\x02\x02\"#\x05\x12\n\x02#$\x05\x14\v\x02$%\x07\x04" +
        "\x02\x02%\x07\x03\x02\x02\x02&(\x05\n\x06\x02\'&\x03\x02\x02\x02()\x03" +
        "\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*-\x03\x02\x02\x02+." +
        "\x05\x10\t\x02,.\x07\x05\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02." +
        "\t\x03\x02\x02\x02/1\x05\x0E\b\x0202\x05\f\x07\x0210\x03\x02\x02\x022" +
        "3\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\v\x03\x02\x02\x02" +
        "58\t\x02\x02\x0269\x05\x10\t\x0279\x07\x05\x02\x0286\x03\x02\x02\x028" +
        "7\x03\x02\x02\x0289\x03\x02\x02\x029\r\x03\x02\x02\x02:;\x05\x16\f\x02" +
        ";<\x07\x06\x02\x02<\x0F\x03\x02\x02\x02=>\t\x03\x02\x02>\x11\x03\x02\x02" +
        "\x02?@\x07\r\x02\x02@\x13\x03\x02\x02\x02AB\x07\x0E\x02\x02B\x15\x03\x02" +
        "\x02\x02CD\x07\f\x02\x02D\x17\x03\x02\x02\x02\x07\x1E)-38";
    return pdnParser;
}(Parser_1.Parser));
exports.pdnParser = pdnParser;
var GameContext = /** @class */ (function (_super) {
    __extends(GameContext, _super);
    function GameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GameContext.prototype.tags = function () {
        return this.getRuleContext(0, TagsContext);
    };
    GameContext.prototype.moves = function () {
        return this.getRuleContext(0, MovesContext);
    };
    Object.defineProperty(GameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_game; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GameContext.prototype.enterRule = function (listener) {
        if (listener.enterGame) {
            listener.enterGame(this);
        }
    };
    // @Override
    GameContext.prototype.exitRule = function (listener) {
        if (listener.exitGame) {
            listener.exitGame(this);
        }
    };
    // @Override
    GameContext.prototype.accept = function (visitor) {
        if (visitor.visitGame) {
            return visitor.visitGame(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GameContext = GameContext;
var TagsContext = /** @class */ (function (_super) {
    __extends(TagsContext, _super);
    function TagsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagsContext.prototype.tag = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    };
    Object.defineProperty(TagsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_tags; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagsContext.prototype.enterRule = function (listener) {
        if (listener.enterTags) {
            listener.enterTags(this);
        }
    };
    // @Override
    TagsContext.prototype.exitRule = function (listener) {
        if (listener.exitTags) {
            listener.exitTags(this);
        }
    };
    // @Override
    TagsContext.prototype.accept = function (visitor) {
        if (visitor.visitTags) {
            return visitor.visitTags(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagsContext = TagsContext;
var TagContext = /** @class */ (function (_super) {
    __extends(TagContext, _super);
    function TagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagContext.prototype.text = function () {
        return this.getRuleContext(0, TextContext);
    };
    TagContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(TagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_tag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagContext.prototype.enterRule = function (listener) {
        if (listener.enterTag) {
            listener.enterTag(this);
        }
    };
    // @Override
    TagContext.prototype.exitRule = function (listener) {
        if (listener.exitTag) {
            listener.exitTag(this);
        }
    };
    // @Override
    TagContext.prototype.accept = function (visitor) {
        if (visitor.visitTag) {
            return visitor.visitTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagContext = TagContext;
var MovesContext = /** @class */ (function (_super) {
    __extends(MovesContext, _super);
    function MovesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MovesContext.prototype.result = function () {
        return this.tryGetRuleContext(0, ResultContext);
    };
    MovesContext.prototype.move = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MoveContext);
        }
        else {
            return this.getRuleContext(i, MoveContext);
        }
    };
    Object.defineProperty(MovesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_moves; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MovesContext.prototype.enterRule = function (listener) {
        if (listener.enterMoves) {
            listener.enterMoves(this);
        }
    };
    // @Override
    MovesContext.prototype.exitRule = function (listener) {
        if (listener.exitMoves) {
            listener.exitMoves(this);
        }
    };
    // @Override
    MovesContext.prototype.accept = function (visitor) {
        if (visitor.visitMoves) {
            return visitor.visitMoves(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MovesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MovesContext = MovesContext;
var MoveContext = /** @class */ (function (_super) {
    __extends(MoveContext, _super);
    function MoveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MoveContext.prototype.movenum = function () {
        return this.getRuleContext(0, MovenumContext);
    };
    MoveContext.prototype.movespec = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MovespecContext);
        }
        else {
            return this.getRuleContext(i, MovespecContext);
        }
    };
    Object.defineProperty(MoveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_move; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MoveContext.prototype.enterRule = function (listener) {
        if (listener.enterMove) {
            listener.enterMove(this);
        }
    };
    // @Override
    MoveContext.prototype.exitRule = function (listener) {
        if (listener.exitMove) {
            listener.exitMove(this);
        }
    };
    // @Override
    MoveContext.prototype.accept = function (visitor) {
        if (visitor.visitMove) {
            return visitor.visitMove(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MoveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MoveContext = MoveContext;
var MovespecContext = /** @class */ (function (_super) {
    __extends(MovespecContext, _super);
    function MovespecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MovespecContext.prototype.MOVE1 = function () { return this.tryGetToken(pdnParser.MOVE1, 0); };
    MovespecContext.prototype.MOVE2 = function () { return this.tryGetToken(pdnParser.MOVE2, 0); };
    MovespecContext.prototype.result = function () {
        return this.tryGetRuleContext(0, ResultContext);
    };
    Object.defineProperty(MovespecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_movespec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MovespecContext.prototype.enterRule = function (listener) {
        if (listener.enterMovespec) {
            listener.enterMovespec(this);
        }
    };
    // @Override
    MovespecContext.prototype.exitRule = function (listener) {
        if (listener.exitMovespec) {
            listener.exitMovespec(this);
        }
    };
    // @Override
    MovespecContext.prototype.accept = function (visitor) {
        if (visitor.visitMovespec) {
            return visitor.visitMovespec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MovespecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MovespecContext = MovespecContext;
var MovenumContext = /** @class */ (function (_super) {
    __extends(MovenumContext, _super);
    function MovenumContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MovenumContext.prototype.number = function () {
        return this.getRuleContext(0, NumberContext);
    };
    Object.defineProperty(MovenumContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_movenum; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MovenumContext.prototype.enterRule = function (listener) {
        if (listener.enterMovenum) {
            listener.enterMovenum(this);
        }
    };
    // @Override
    MovenumContext.prototype.exitRule = function (listener) {
        if (listener.exitMovenum) {
            listener.exitMovenum(this);
        }
    };
    // @Override
    MovenumContext.prototype.accept = function (visitor) {
        if (visitor.visitMovenum) {
            return visitor.visitMovenum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MovenumContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MovenumContext = MovenumContext;
var ResultContext = /** @class */ (function (_super) {
    __extends(ResultContext, _super);
    function ResultContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ResultContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_result; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResultContext.prototype.enterRule = function (listener) {
        if (listener.enterResult) {
            listener.enterResult(this);
        }
    };
    // @Override
    ResultContext.prototype.exitRule = function (listener) {
        if (listener.exitResult) {
            listener.exitResult(this);
        }
    };
    // @Override
    ResultContext.prototype.accept = function (visitor) {
        if (visitor.visitResult) {
            return visitor.visitResult(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResultContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResultContext = ResultContext;
var TextContext = /** @class */ (function (_super) {
    __extends(TextContext, _super);
    function TextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextContext.prototype.TEXT = function () { return this.getToken(pdnParser.TEXT, 0); };
    Object.defineProperty(TextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_text; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TextContext.prototype.enterRule = function (listener) {
        if (listener.enterText) {
            listener.enterText(this);
        }
    };
    // @Override
    TextContext.prototype.exitRule = function (listener) {
        if (listener.exitText) {
            listener.exitText(this);
        }
    };
    // @Override
    TextContext.prototype.accept = function (visitor) {
        if (visitor.visitText) {
            return visitor.visitText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TextContext = TextContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(pdnParser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
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
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(pdnParser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdnParser.RULE_number; },
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
