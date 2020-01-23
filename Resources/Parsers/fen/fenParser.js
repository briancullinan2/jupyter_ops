"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fen/fen.g4 by ANTLR 4.7.3-SNAPSHOT
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
var fenParser = /** @class */ (function (_super) {
    __extends(fenParser, _super);
    function fenParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(fenParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(fenParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return fenParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fenParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "fen.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fenParser.prototype, "ruleNames", {
        // @Override
        get: function () { return fenParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fenParser.prototype, "serializedATN", {
        // @Override
        get: function () { return fenParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    fenParser.prototype.fen = function () {
        var _localctx = new FenContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, fenParser.RULE_fen);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 20;
                this.placement();
                this.state = 21;
                this.match(fenParser.T__0);
                this.state = 22;
                this.color();
                this.state = 23;
                this.match(fenParser.T__0);
                this.state = 24;
                this.castling();
                this.state = 25;
                this.match(fenParser.T__0);
                this.state = 26;
                this.enpassant();
                this.state = 27;
                this.match(fenParser.T__0);
                this.state = 28;
                this.halfmoveclock();
                this.state = 29;
                this.match(fenParser.T__0);
                this.state = 30;
                this.fullmoveclock();
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
    fenParser.prototype.color = function () {
        var _localctx = new ColorContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, fenParser.RULE_color);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                _la = this._input.LA(1);
                if (!(_la === fenParser.T__1 || _la === fenParser.T__2)) {
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
    fenParser.prototype.castling = function () {
        var _localctx = new CastlingContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, fenParser.RULE_castling);
        var _la;
        try {
            this.state = 40;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case fenParser.T__3:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 34;
                        this.match(fenParser.T__3);
                    }
                    break;
                case fenParser.T__4:
                case fenParser.T__5:
                case fenParser.T__6:
                case fenParser.T__7:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 36;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 35;
                                    _la = this._input.LA(1);
                                    if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__4) | (1 << fenParser.T__5) | (1 << fenParser.T__6) | (1 << fenParser.T__7))) !== 0))) {
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
                            this.state = 38;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__4) | (1 << fenParser.T__5) | (1 << fenParser.T__6) | (1 << fenParser.T__7))) !== 0));
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
    fenParser.prototype.enpassant = function () {
        var _localctx = new EnpassantContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, fenParser.RULE_enpassant);
        try {
            this.state = 44;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case fenParser.T__3:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 42;
                        this.match(fenParser.T__3);
                    }
                    break;
                case fenParser.T__2:
                case fenParser.T__8:
                case fenParser.T__9:
                case fenParser.T__10:
                case fenParser.T__11:
                case fenParser.T__12:
                case fenParser.T__13:
                case fenParser.T__14:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 43;
                        this.position();
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
    fenParser.prototype.position = function () {
        var _localctx = new PositionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, fenParser.RULE_position);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__2) | (1 << fenParser.T__8) | (1 << fenParser.T__9) | (1 << fenParser.T__10) | (1 << fenParser.T__11) | (1 << fenParser.T__12) | (1 << fenParser.T__13) | (1 << fenParser.T__14))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 47;
                this.match(fenParser.NUMBER);
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
    fenParser.prototype.halfmoveclock = function () {
        var _localctx = new HalfmoveclockContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, fenParser.RULE_halfmoveclock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(fenParser.NUMBER);
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
    fenParser.prototype.fullmoveclock = function () {
        var _localctx = new FullmoveclockContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, fenParser.RULE_fullmoveclock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this.match(fenParser.NUMBER);
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
    fenParser.prototype.placement = function () {
        var _localctx = new PlacementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, fenParser.RULE_placement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.rank();
                this.state = 56;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 54;
                            this.match(fenParser.T__15);
                            this.state = 55;
                            this.rank();
                        }
                    }
                    this.state = 58;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === fenParser.T__15);
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
    fenParser.prototype.rank = function () {
        var _localctx = new RankContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, fenParser.RULE_rank);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 62;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case fenParser.T__2:
                            case fenParser.T__4:
                            case fenParser.T__5:
                            case fenParser.T__6:
                            case fenParser.T__7:
                            case fenParser.T__16:
                            case fenParser.T__17:
                            case fenParser.T__18:
                            case fenParser.T__19:
                            case fenParser.T__20:
                            case fenParser.T__21:
                            case fenParser.T__22:
                                {
                                    this.state = 60;
                                    this.piece();
                                }
                                break;
                            case fenParser.NUMBER:
                                {
                                    this.state = 61;
                                    this.match(fenParser.NUMBER);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 64;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__2) | (1 << fenParser.T__4) | (1 << fenParser.T__5) | (1 << fenParser.T__6) | (1 << fenParser.T__7) | (1 << fenParser.T__16) | (1 << fenParser.T__17) | (1 << fenParser.T__18) | (1 << fenParser.T__19) | (1 << fenParser.T__20) | (1 << fenParser.T__21) | (1 << fenParser.T__22) | (1 << fenParser.NUMBER))) !== 0));
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
    fenParser.prototype.piece = function () {
        var _localctx = new PieceContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, fenParser.RULE_piece);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fenParser.T__2) | (1 << fenParser.T__4) | (1 << fenParser.T__5) | (1 << fenParser.T__6) | (1 << fenParser.T__7) | (1 << fenParser.T__16) | (1 << fenParser.T__17) | (1 << fenParser.T__18) | (1 << fenParser.T__19) | (1 << fenParser.T__20) | (1 << fenParser.T__21) | (1 << fenParser.T__22))) !== 0))) {
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
    Object.defineProperty(fenParser, "_ATN", {
        get: function () {
            if (!fenParser.__ATN) {
                fenParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(fenParser._serializedATN));
            }
            return fenParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    fenParser.T__0 = 1;
    fenParser.T__1 = 2;
    fenParser.T__2 = 3;
    fenParser.T__3 = 4;
    fenParser.T__4 = 5;
    fenParser.T__5 = 6;
    fenParser.T__6 = 7;
    fenParser.T__7 = 8;
    fenParser.T__8 = 9;
    fenParser.T__9 = 10;
    fenParser.T__10 = 11;
    fenParser.T__11 = 12;
    fenParser.T__12 = 13;
    fenParser.T__13 = 14;
    fenParser.T__14 = 15;
    fenParser.T__15 = 16;
    fenParser.T__16 = 17;
    fenParser.T__17 = 18;
    fenParser.T__18 = 19;
    fenParser.T__19 = 20;
    fenParser.T__20 = 21;
    fenParser.T__21 = 22;
    fenParser.T__22 = 23;
    fenParser.NUMBER = 24;
    fenParser.WS = 25;
    fenParser.RULE_fen = 0;
    fenParser.RULE_color = 1;
    fenParser.RULE_castling = 2;
    fenParser.RULE_enpassant = 3;
    fenParser.RULE_position = 4;
    fenParser.RULE_halfmoveclock = 5;
    fenParser.RULE_fullmoveclock = 6;
    fenParser.RULE_placement = 7;
    fenParser.RULE_rank = 8;
    fenParser.RULE_piece = 9;
    // tslint:disable:no-trailing-whitespace
    fenParser.ruleNames = [
        "fen", "color", "castling", "enpassant", "position", "halfmoveclock",
        "fullmoveclock", "placement", "rank", "piece",
    ];
    fenParser._LITERAL_NAMES = [
        undefined, "' '", "'w'", "'b'", "'-'", "'Q'", "'K'", "'k'", "'q'", "'a'",
        "'c'", "'d'", "'e'", "'f'", "'g'", "'h'", "'/'", "'p'", "'r'", "'n'",
        "'P'", "'R'", "'N'", "'B'",
    ];
    fenParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "NUMBER", "WS",
    ];
    fenParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(fenParser._LITERAL_NAMES, fenParser._SYMBOLIC_NAMES, []);
    fenParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1BG\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x03\x04\x03\x04\x06\x04\'\n\x04\r\x04\x0E\x04(\x05\x04" +
        "+\n\x04\x03\x05\x03\x05\x05\x05/\n\x05\x03\x06\x03\x06\x03\x06\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x06\t;\n\t\r\t\x0E\t<\x03\n\x03" +
        "\n\x06\nA\n\n\r\n\x0E\nB\x03\v\x03\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x06\x03" +
        "\x02\x04\x05\x03\x02\x07\n\x04\x02\x05\x05\v\x11\x05\x02\x05\x05\x07\n" +
        "\x13\x19\x02B\x02\x16\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06*\x03\x02" +
        "\x02\x02\b.\x03\x02\x02\x02\n0\x03\x02\x02\x02\f3\x03\x02\x02\x02\x0E" +
        "5\x03\x02\x02\x02\x107\x03\x02\x02\x02\x12@\x03\x02\x02\x02\x14D\x03\x02" +
        "\x02\x02\x16\x17\x05\x10\t\x02\x17\x18\x07\x03\x02\x02\x18\x19\x05\x04" +
        "\x03\x02\x19\x1A\x07\x03\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x07\x03" +
        "\x02\x02\x1C\x1D\x05\b\x05\x02\x1D\x1E\x07\x03\x02\x02\x1E\x1F\x05\f\x07" +
        "\x02\x1F \x07\x03\x02\x02 !\x05\x0E\b\x02!\x03\x03\x02\x02\x02\"#\t\x02" +
        "\x02\x02#\x05\x03\x02\x02\x02$+\x07\x06\x02\x02%\'\t\x03\x02\x02&%\x03" +
        "\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)+" +
        "\x03\x02\x02\x02*$\x03\x02\x02\x02*&\x03\x02\x02\x02+\x07\x03\x02\x02" +
        "\x02,/\x07\x06\x02\x02-/\x05\n\x06\x02.,\x03\x02\x02\x02.-\x03\x02\x02" +
        "\x02/\t\x03\x02\x02\x0201\t\x04\x02\x0212\x07\x1A\x02\x022\v\x03\x02\x02" +
        "\x0234\x07\x1A\x02\x024\r\x03\x02\x02\x0256\x07\x1A\x02\x026\x0F\x03\x02" +
        "\x02\x027:\x05\x12\n\x0289\x07\x12\x02\x029;\x05\x12\n\x02:8\x03\x02\x02" +
        "\x02;<\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=\x11\x03\x02" +
        "\x02\x02>A\x05\x14\v\x02?A\x07\x1A\x02\x02@>\x03\x02\x02\x02@?\x03\x02" +
        "\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\x13\x03" +
        "\x02\x02\x02DE\t\x05\x02\x02E\x15\x03\x02\x02\x02\b(*.<@B";
    return fenParser;
}(Parser_1.Parser));
exports.fenParser = fenParser;
var FenContext = /** @class */ (function (_super) {
    __extends(FenContext, _super);
    function FenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FenContext.prototype.placement = function () {
        return this.getRuleContext(0, PlacementContext);
    };
    FenContext.prototype.color = function () {
        return this.getRuleContext(0, ColorContext);
    };
    FenContext.prototype.castling = function () {
        return this.getRuleContext(0, CastlingContext);
    };
    FenContext.prototype.enpassant = function () {
        return this.getRuleContext(0, EnpassantContext);
    };
    FenContext.prototype.halfmoveclock = function () {
        return this.getRuleContext(0, HalfmoveclockContext);
    };
    FenContext.prototype.fullmoveclock = function () {
        return this.getRuleContext(0, FullmoveclockContext);
    };
    Object.defineProperty(FenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_fen; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FenContext.prototype.enterRule = function (listener) {
        if (listener.enterFen) {
            listener.enterFen(this);
        }
    };
    // @Override
    FenContext.prototype.exitRule = function (listener) {
        if (listener.exitFen) {
            listener.exitFen(this);
        }
    };
    // @Override
    FenContext.prototype.accept = function (visitor) {
        if (visitor.visitFen) {
            return visitor.visitFen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FenContext = FenContext;
var ColorContext = /** @class */ (function (_super) {
    __extends(ColorContext, _super);
    function ColorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ColorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_color; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColorContext.prototype.enterRule = function (listener) {
        if (listener.enterColor) {
            listener.enterColor(this);
        }
    };
    // @Override
    ColorContext.prototype.exitRule = function (listener) {
        if (listener.exitColor) {
            listener.exitColor(this);
        }
    };
    // @Override
    ColorContext.prototype.accept = function (visitor) {
        if (visitor.visitColor) {
            return visitor.visitColor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColorContext = ColorContext;
var CastlingContext = /** @class */ (function (_super) {
    __extends(CastlingContext, _super);
    function CastlingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CastlingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_castling; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CastlingContext.prototype.enterRule = function (listener) {
        if (listener.enterCastling) {
            listener.enterCastling(this);
        }
    };
    // @Override
    CastlingContext.prototype.exitRule = function (listener) {
        if (listener.exitCastling) {
            listener.exitCastling(this);
        }
    };
    // @Override
    CastlingContext.prototype.accept = function (visitor) {
        if (visitor.visitCastling) {
            return visitor.visitCastling(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CastlingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CastlingContext = CastlingContext;
var EnpassantContext = /** @class */ (function (_super) {
    __extends(EnpassantContext, _super);
    function EnpassantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnpassantContext.prototype.position = function () {
        return this.tryGetRuleContext(0, PositionContext);
    };
    Object.defineProperty(EnpassantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_enpassant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnpassantContext.prototype.enterRule = function (listener) {
        if (listener.enterEnpassant) {
            listener.enterEnpassant(this);
        }
    };
    // @Override
    EnpassantContext.prototype.exitRule = function (listener) {
        if (listener.exitEnpassant) {
            listener.exitEnpassant(this);
        }
    };
    // @Override
    EnpassantContext.prototype.accept = function (visitor) {
        if (visitor.visitEnpassant) {
            return visitor.visitEnpassant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnpassantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnpassantContext = EnpassantContext;
var PositionContext = /** @class */ (function (_super) {
    __extends(PositionContext, _super);
    function PositionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PositionContext.prototype.NUMBER = function () { return this.getToken(fenParser.NUMBER, 0); };
    Object.defineProperty(PositionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_position; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PositionContext.prototype.enterRule = function (listener) {
        if (listener.enterPosition) {
            listener.enterPosition(this);
        }
    };
    // @Override
    PositionContext.prototype.exitRule = function (listener) {
        if (listener.exitPosition) {
            listener.exitPosition(this);
        }
    };
    // @Override
    PositionContext.prototype.accept = function (visitor) {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PositionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PositionContext = PositionContext;
var HalfmoveclockContext = /** @class */ (function (_super) {
    __extends(HalfmoveclockContext, _super);
    function HalfmoveclockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HalfmoveclockContext.prototype.NUMBER = function () { return this.getToken(fenParser.NUMBER, 0); };
    Object.defineProperty(HalfmoveclockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_halfmoveclock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HalfmoveclockContext.prototype.enterRule = function (listener) {
        if (listener.enterHalfmoveclock) {
            listener.enterHalfmoveclock(this);
        }
    };
    // @Override
    HalfmoveclockContext.prototype.exitRule = function (listener) {
        if (listener.exitHalfmoveclock) {
            listener.exitHalfmoveclock(this);
        }
    };
    // @Override
    HalfmoveclockContext.prototype.accept = function (visitor) {
        if (visitor.visitHalfmoveclock) {
            return visitor.visitHalfmoveclock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HalfmoveclockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HalfmoveclockContext = HalfmoveclockContext;
var FullmoveclockContext = /** @class */ (function (_super) {
    __extends(FullmoveclockContext, _super);
    function FullmoveclockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FullmoveclockContext.prototype.NUMBER = function () { return this.getToken(fenParser.NUMBER, 0); };
    Object.defineProperty(FullmoveclockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_fullmoveclock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FullmoveclockContext.prototype.enterRule = function (listener) {
        if (listener.enterFullmoveclock) {
            listener.enterFullmoveclock(this);
        }
    };
    // @Override
    FullmoveclockContext.prototype.exitRule = function (listener) {
        if (listener.exitFullmoveclock) {
            listener.exitFullmoveclock(this);
        }
    };
    // @Override
    FullmoveclockContext.prototype.accept = function (visitor) {
        if (visitor.visitFullmoveclock) {
            return visitor.visitFullmoveclock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FullmoveclockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FullmoveclockContext = FullmoveclockContext;
var PlacementContext = /** @class */ (function (_super) {
    __extends(PlacementContext, _super);
    function PlacementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PlacementContext.prototype.rank = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RankContext);
        }
        else {
            return this.getRuleContext(i, RankContext);
        }
    };
    Object.defineProperty(PlacementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_placement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PlacementContext.prototype.enterRule = function (listener) {
        if (listener.enterPlacement) {
            listener.enterPlacement(this);
        }
    };
    // @Override
    PlacementContext.prototype.exitRule = function (listener) {
        if (listener.exitPlacement) {
            listener.exitPlacement(this);
        }
    };
    // @Override
    PlacementContext.prototype.accept = function (visitor) {
        if (visitor.visitPlacement) {
            return visitor.visitPlacement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PlacementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PlacementContext = PlacementContext;
var RankContext = /** @class */ (function (_super) {
    __extends(RankContext, _super);
    function RankContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RankContext.prototype.piece = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PieceContext);
        }
        else {
            return this.getRuleContext(i, PieceContext);
        }
    };
    RankContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(fenParser.NUMBER);
        }
        else {
            return this.getToken(fenParser.NUMBER, i);
        }
    };
    Object.defineProperty(RankContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_rank; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RankContext.prototype.enterRule = function (listener) {
        if (listener.enterRank) {
            listener.enterRank(this);
        }
    };
    // @Override
    RankContext.prototype.exitRule = function (listener) {
        if (listener.exitRank) {
            listener.exitRank(this);
        }
    };
    // @Override
    RankContext.prototype.accept = function (visitor) {
        if (visitor.visitRank) {
            return visitor.visitRank(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RankContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RankContext = RankContext;
var PieceContext = /** @class */ (function (_super) {
    __extends(PieceContext, _super);
    function PieceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PieceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fenParser.RULE_piece; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PieceContext.prototype.enterRule = function (listener) {
        if (listener.enterPiece) {
            listener.enterPiece(this);
        }
    };
    // @Override
    PieceContext.prototype.exitRule = function (listener) {
        if (listener.exitPiece) {
            listener.exitPiece(this);
        }
    };
    // @Override
    PieceContext.prototype.accept = function (visitor) {
        if (visitor.visitPiece) {
            return visitor.visitPiece(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PieceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PieceContext = PieceContext;
