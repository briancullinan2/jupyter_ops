"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pgn/PGN.g4 by ANTLR 4.7.3-SNAPSHOT
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
var PGNParser = /** @class */ (function (_super) {
    __extends(PGNParser, _super);
    function PGNParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(PGNParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(PGNParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PGNParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PGNParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "PGN.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PGNParser.prototype, "ruleNames", {
        // @Override
        get: function () { return PGNParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PGNParser.prototype, "serializedATN", {
        // @Override
        get: function () { return PGNParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    PGNParser.prototype.parse = function () {
        var _localctx = new ParseContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PGNParser.RULE_parse);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this.pgn_database();
                this.state = 29;
                this.match(PGNParser.EOF);
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
    PGNParser.prototype.pgn_database = function () {
        var _localctx = new Pgn_databaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PGNParser.RULE_pgn_database);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGNParser.WHITE_WINS) | (1 << PGNParser.BLACK_WINS) | (1 << PGNParser.DRAWN_GAME) | (1 << PGNParser.INTEGER) | (1 << PGNParser.ASTERISK) | (1 << PGNParser.LEFT_BRACKET) | (1 << PGNParser.LEFT_PARENTHESIS) | (1 << PGNParser.RIGHT_PARENTHESIS) | (1 << PGNParser.NUMERIC_ANNOTATION_GLYPH) | (1 << PGNParser.SYMBOL))) !== 0)) {
                    {
                        {
                            this.state = 31;
                            this.pgn_game();
                        }
                    }
                    this.state = 36;
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
    PGNParser.prototype.pgn_game = function () {
        var _localctx = new Pgn_gameContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PGNParser.RULE_pgn_game);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 37;
                this.tag_section();
                this.state = 38;
                this.movetext_section();
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
    PGNParser.prototype.tag_section = function () {
        var _localctx = new Tag_sectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, PGNParser.RULE_tag_section);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PGNParser.LEFT_BRACKET) {
                    {
                        {
                            this.state = 40;
                            this.tag_pair();
                        }
                    }
                    this.state = 45;
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
    PGNParser.prototype.tag_pair = function () {
        var _localctx = new Tag_pairContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PGNParser.RULE_tag_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                this.match(PGNParser.LEFT_BRACKET);
                this.state = 47;
                this.tag_name();
                this.state = 48;
                this.tag_value();
                this.state = 49;
                this.match(PGNParser.RIGHT_BRACKET);
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
    PGNParser.prototype.tag_name = function () {
        var _localctx = new Tag_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PGNParser.RULE_tag_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this.match(PGNParser.SYMBOL);
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
    PGNParser.prototype.tag_value = function () {
        var _localctx = new Tag_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PGNParser.RULE_tag_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.match(PGNParser.STRING);
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
    PGNParser.prototype.movetext_section = function () {
        var _localctx = new Movetext_sectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PGNParser.RULE_movetext_section);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 55;
                this.element_sequence();
                this.state = 56;
                this.game_termination();
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
    PGNParser.prototype.element_sequence = function () {
        var _localctx = new Element_sequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PGNParser.RULE_element_sequence);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGNParser.INTEGER) | (1 << PGNParser.LEFT_PARENTHESIS) | (1 << PGNParser.NUMERIC_ANNOTATION_GLYPH) | (1 << PGNParser.SYMBOL))) !== 0)) {
                    {
                        this.state = 60;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case PGNParser.INTEGER:
                            case PGNParser.NUMERIC_ANNOTATION_GLYPH:
                            case PGNParser.SYMBOL:
                                {
                                    this.state = 58;
                                    this.element();
                                }
                                break;
                            case PGNParser.LEFT_PARENTHESIS:
                                {
                                    this.state = 59;
                                    this.recursive_variation();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 64;
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
    PGNParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PGNParser.RULE_element);
        try {
            this.state = 68;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PGNParser.INTEGER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 65;
                        this.move_number_indication();
                    }
                    break;
                case PGNParser.SYMBOL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 66;
                        this.san_move();
                    }
                    break;
                case PGNParser.NUMERIC_ANNOTATION_GLYPH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 67;
                        this.match(PGNParser.NUMERIC_ANNOTATION_GLYPH);
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
    PGNParser.prototype.move_number_indication = function () {
        var _localctx = new Move_number_indicationContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PGNParser.RULE_move_number_indication);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.match(PGNParser.INTEGER);
                this.state = 72;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PGNParser.PERIOD) {
                    {
                        this.state = 71;
                        this.match(PGNParser.PERIOD);
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
    PGNParser.prototype.san_move = function () {
        var _localctx = new San_moveContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PGNParser.RULE_san_move);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.match(PGNParser.SYMBOL);
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
    PGNParser.prototype.recursive_variation = function () {
        var _localctx = new Recursive_variationContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, PGNParser.RULE_recursive_variation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.match(PGNParser.LEFT_PARENTHESIS);
                this.state = 77;
                this.element_sequence();
                this.state = 78;
                this.match(PGNParser.RIGHT_PARENTHESIS);
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
    PGNParser.prototype.game_termination = function () {
        var _localctx = new Game_terminationContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, PGNParser.RULE_game_termination);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 80;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGNParser.WHITE_WINS) | (1 << PGNParser.BLACK_WINS) | (1 << PGNParser.DRAWN_GAME) | (1 << PGNParser.ASTERISK))) !== 0))) {
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
    Object.defineProperty(PGNParser, "_ATN", {
        get: function () {
            if (!PGNParser.__ATN) {
                PGNParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PGNParser._serializedATN));
            }
            return PGNParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    PGNParser.WHITE_WINS = 1;
    PGNParser.BLACK_WINS = 2;
    PGNParser.DRAWN_GAME = 3;
    PGNParser.REST_OF_LINE_COMMENT = 4;
    PGNParser.BRACE_COMMENT = 5;
    PGNParser.ESCAPE = 6;
    PGNParser.SPACES = 7;
    PGNParser.STRING = 8;
    PGNParser.INTEGER = 9;
    PGNParser.PERIOD = 10;
    PGNParser.ASTERISK = 11;
    PGNParser.LEFT_BRACKET = 12;
    PGNParser.RIGHT_BRACKET = 13;
    PGNParser.LEFT_PARENTHESIS = 14;
    PGNParser.RIGHT_PARENTHESIS = 15;
    PGNParser.LEFT_ANGLE_BRACKET = 16;
    PGNParser.RIGHT_ANGLE_BRACKET = 17;
    PGNParser.NUMERIC_ANNOTATION_GLYPH = 18;
    PGNParser.SYMBOL = 19;
    PGNParser.SUFFIX_ANNOTATION = 20;
    PGNParser.UNEXPECTED_CHAR = 21;
    PGNParser.RULE_parse = 0;
    PGNParser.RULE_pgn_database = 1;
    PGNParser.RULE_pgn_game = 2;
    PGNParser.RULE_tag_section = 3;
    PGNParser.RULE_tag_pair = 4;
    PGNParser.RULE_tag_name = 5;
    PGNParser.RULE_tag_value = 6;
    PGNParser.RULE_movetext_section = 7;
    PGNParser.RULE_element_sequence = 8;
    PGNParser.RULE_element = 9;
    PGNParser.RULE_move_number_indication = 10;
    PGNParser.RULE_san_move = 11;
    PGNParser.RULE_recursive_variation = 12;
    PGNParser.RULE_game_termination = 13;
    // tslint:disable:no-trailing-whitespace
    PGNParser.ruleNames = [
        "parse", "pgn_database", "pgn_game", "tag_section", "tag_pair", "tag_name",
        "tag_value", "movetext_section", "element_sequence", "element", "move_number_indication",
        "san_move", "recursive_variation", "game_termination",
    ];
    PGNParser._LITERAL_NAMES = [
        undefined, "'1-0'", "'0-1'", "'1/2-1/2'", undefined, undefined, undefined,
        undefined, undefined, undefined, "'.'", "'*'", "'['", "']'", "'('", "')'",
        "'<'", "'>'",
    ];
    PGNParser._SYMBOLIC_NAMES = [
        undefined, "WHITE_WINS", "BLACK_WINS", "DRAWN_GAME", "REST_OF_LINE_COMMENT",
        "BRACE_COMMENT", "ESCAPE", "SPACES", "STRING", "INTEGER", "PERIOD", "ASTERISK",
        "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS",
        "LEFT_ANGLE_BRACKET", "RIGHT_ANGLE_BRACKET", "NUMERIC_ANNOTATION_GLYPH",
        "SYMBOL", "SUFFIX_ANNOTATION", "UNEXPECTED_CHAR",
    ];
    PGNParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PGNParser._LITERAL_NAMES, PGNParser._SYMBOLIC_NAMES, []);
    PGNParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17U\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03#\n\x03" +
        "\f\x03\x0E\x03&\v\x03\x03\x04\x03\x04\x03\x04\x03\x05\x07\x05,\n\x05\f" +
        "\x05\x0E\x05/\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
        "\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x07\n?\n\n\f\n\x0E\nB\v" +
        "\n\x03\v\x03\v\x03\v\x05\vG\n\v\x03\f\x03\f\x05\fK\n\f\x03\r\x03\r\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03\x04\x02\x03\x05\r\r\x02M\x02" +
        "\x1E\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06\'\x03\x02\x02\x02\b-\x03" +
        "\x02\x02\x02\n0\x03\x02\x02\x02\f5\x03\x02\x02\x02\x0E7\x03\x02\x02\x02" +
        "\x109\x03\x02\x02\x02\x12@\x03\x02\x02\x02\x14F\x03\x02\x02\x02\x16H\x03" +
        "\x02\x02\x02\x18L\x03\x02\x02\x02\x1AN\x03\x02\x02\x02\x1CR\x03\x02\x02" +
        "\x02\x1E\x1F\x05\x04\x03\x02\x1F \x07\x02\x02\x03 \x03\x03\x02\x02\x02" +
        "!#\x05\x06\x04\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02" +
        "\x02$%\x03\x02\x02\x02%\x05\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x05\b" +
        "\x05\x02()\x05\x10\t\x02)\x07\x03\x02\x02\x02*,\x05\n\x06\x02+*\x03\x02" +
        "\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.\t\x03" +
        "\x02\x02\x02/-\x03\x02\x02\x0201\x07\x0E\x02\x0212\x05\f\x07\x0223\x05" +
        "\x0E\b\x0234\x07\x0F\x02\x024\v\x03\x02\x02\x0256\x07\x15\x02\x026\r\x03" +
        "\x02\x02\x0278\x07\n\x02\x028\x0F\x03\x02\x02\x029:\x05\x12\n\x02:;\x05" +
        "\x1C\x0F\x02;\x11\x03\x02\x02\x02<?\x05\x14\v\x02=?\x05\x1A\x0E\x02><" +
        "\x03\x02\x02\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02" +
        "@A\x03\x02\x02\x02A\x13\x03\x02\x02\x02B@\x03\x02\x02\x02CG\x05\x16\f" +
        "\x02DG\x05\x18\r\x02EG\x07\x14\x02\x02FC\x03\x02\x02\x02FD\x03\x02\x02" +
        "\x02FE\x03\x02\x02\x02G\x15\x03\x02\x02\x02HJ\x07\v\x02\x02IK\x07\f\x02" +
        "\x02JI\x03\x02\x02\x02JK\x03\x02\x02\x02K\x17\x03\x02\x02\x02LM\x07\x15" +
        "\x02\x02M\x19\x03\x02\x02\x02NO\x07\x10\x02\x02OP\x05\x12\n\x02PQ\x07" +
        "\x11\x02\x02Q\x1B\x03\x02\x02\x02RS\t\x02\x02\x02S\x1D\x03\x02\x02\x02" +
        "\b$->@FJ";
    return PGNParser;
}(Parser_1.Parser));
exports.PGNParser = PGNParser;
var ParseContext = /** @class */ (function (_super) {
    __extends(ParseContext, _super);
    function ParseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParseContext.prototype.pgn_database = function () {
        return this.getRuleContext(0, Pgn_databaseContext);
    };
    ParseContext.prototype.EOF = function () { return this.getToken(PGNParser.EOF, 0); };
    Object.defineProperty(ParseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_parse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParseContext.prototype.enterRule = function (listener) {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    };
    // @Override
    ParseContext.prototype.exitRule = function (listener) {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    };
    // @Override
    ParseContext.prototype.accept = function (visitor) {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParseContext = ParseContext;
var Pgn_databaseContext = /** @class */ (function (_super) {
    __extends(Pgn_databaseContext, _super);
    function Pgn_databaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pgn_databaseContext.prototype.pgn_game = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Pgn_gameContext);
        }
        else {
            return this.getRuleContext(i, Pgn_gameContext);
        }
    };
    Object.defineProperty(Pgn_databaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_pgn_database; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pgn_databaseContext.prototype.enterRule = function (listener) {
        if (listener.enterPgn_database) {
            listener.enterPgn_database(this);
        }
    };
    // @Override
    Pgn_databaseContext.prototype.exitRule = function (listener) {
        if (listener.exitPgn_database) {
            listener.exitPgn_database(this);
        }
    };
    // @Override
    Pgn_databaseContext.prototype.accept = function (visitor) {
        if (visitor.visitPgn_database) {
            return visitor.visitPgn_database(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pgn_databaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pgn_databaseContext = Pgn_databaseContext;
var Pgn_gameContext = /** @class */ (function (_super) {
    __extends(Pgn_gameContext, _super);
    function Pgn_gameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pgn_gameContext.prototype.tag_section = function () {
        return this.getRuleContext(0, Tag_sectionContext);
    };
    Pgn_gameContext.prototype.movetext_section = function () {
        return this.getRuleContext(0, Movetext_sectionContext);
    };
    Object.defineProperty(Pgn_gameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_pgn_game; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pgn_gameContext.prototype.enterRule = function (listener) {
        if (listener.enterPgn_game) {
            listener.enterPgn_game(this);
        }
    };
    // @Override
    Pgn_gameContext.prototype.exitRule = function (listener) {
        if (listener.exitPgn_game) {
            listener.exitPgn_game(this);
        }
    };
    // @Override
    Pgn_gameContext.prototype.accept = function (visitor) {
        if (visitor.visitPgn_game) {
            return visitor.visitPgn_game(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pgn_gameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pgn_gameContext = Pgn_gameContext;
var Tag_sectionContext = /** @class */ (function (_super) {
    __extends(Tag_sectionContext, _super);
    function Tag_sectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tag_sectionContext.prototype.tag_pair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Tag_pairContext);
        }
        else {
            return this.getRuleContext(i, Tag_pairContext);
        }
    };
    Object.defineProperty(Tag_sectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_tag_section; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tag_sectionContext.prototype.enterRule = function (listener) {
        if (listener.enterTag_section) {
            listener.enterTag_section(this);
        }
    };
    // @Override
    Tag_sectionContext.prototype.exitRule = function (listener) {
        if (listener.exitTag_section) {
            listener.exitTag_section(this);
        }
    };
    // @Override
    Tag_sectionContext.prototype.accept = function (visitor) {
        if (visitor.visitTag_section) {
            return visitor.visitTag_section(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tag_sectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tag_sectionContext = Tag_sectionContext;
var Tag_pairContext = /** @class */ (function (_super) {
    __extends(Tag_pairContext, _super);
    function Tag_pairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tag_pairContext.prototype.LEFT_BRACKET = function () { return this.getToken(PGNParser.LEFT_BRACKET, 0); };
    Tag_pairContext.prototype.tag_name = function () {
        return this.getRuleContext(0, Tag_nameContext);
    };
    Tag_pairContext.prototype.tag_value = function () {
        return this.getRuleContext(0, Tag_valueContext);
    };
    Tag_pairContext.prototype.RIGHT_BRACKET = function () { return this.getToken(PGNParser.RIGHT_BRACKET, 0); };
    Object.defineProperty(Tag_pairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_tag_pair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tag_pairContext.prototype.enterRule = function (listener) {
        if (listener.enterTag_pair) {
            listener.enterTag_pair(this);
        }
    };
    // @Override
    Tag_pairContext.prototype.exitRule = function (listener) {
        if (listener.exitTag_pair) {
            listener.exitTag_pair(this);
        }
    };
    // @Override
    Tag_pairContext.prototype.accept = function (visitor) {
        if (visitor.visitTag_pair) {
            return visitor.visitTag_pair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tag_pairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tag_pairContext = Tag_pairContext;
var Tag_nameContext = /** @class */ (function (_super) {
    __extends(Tag_nameContext, _super);
    function Tag_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tag_nameContext.prototype.SYMBOL = function () { return this.getToken(PGNParser.SYMBOL, 0); };
    Object.defineProperty(Tag_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_tag_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tag_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterTag_name) {
            listener.enterTag_name(this);
        }
    };
    // @Override
    Tag_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitTag_name) {
            listener.exitTag_name(this);
        }
    };
    // @Override
    Tag_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitTag_name) {
            return visitor.visitTag_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tag_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tag_nameContext = Tag_nameContext;
var Tag_valueContext = /** @class */ (function (_super) {
    __extends(Tag_valueContext, _super);
    function Tag_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Tag_valueContext.prototype.STRING = function () { return this.getToken(PGNParser.STRING, 0); };
    Object.defineProperty(Tag_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_tag_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Tag_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterTag_value) {
            listener.enterTag_value(this);
        }
    };
    // @Override
    Tag_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitTag_value) {
            listener.exitTag_value(this);
        }
    };
    // @Override
    Tag_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitTag_value) {
            return visitor.visitTag_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Tag_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Tag_valueContext = Tag_valueContext;
var Movetext_sectionContext = /** @class */ (function (_super) {
    __extends(Movetext_sectionContext, _super);
    function Movetext_sectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Movetext_sectionContext.prototype.element_sequence = function () {
        return this.getRuleContext(0, Element_sequenceContext);
    };
    Movetext_sectionContext.prototype.game_termination = function () {
        return this.getRuleContext(0, Game_terminationContext);
    };
    Object.defineProperty(Movetext_sectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_movetext_section; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Movetext_sectionContext.prototype.enterRule = function (listener) {
        if (listener.enterMovetext_section) {
            listener.enterMovetext_section(this);
        }
    };
    // @Override
    Movetext_sectionContext.prototype.exitRule = function (listener) {
        if (listener.exitMovetext_section) {
            listener.exitMovetext_section(this);
        }
    };
    // @Override
    Movetext_sectionContext.prototype.accept = function (visitor) {
        if (visitor.visitMovetext_section) {
            return visitor.visitMovetext_section(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Movetext_sectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Movetext_sectionContext = Movetext_sectionContext;
var Element_sequenceContext = /** @class */ (function (_super) {
    __extends(Element_sequenceContext, _super);
    function Element_sequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Element_sequenceContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    Element_sequenceContext.prototype.recursive_variation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Recursive_variationContext);
        }
        else {
            return this.getRuleContext(i, Recursive_variationContext);
        }
    };
    Object.defineProperty(Element_sequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_element_sequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Element_sequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterElement_sequence) {
            listener.enterElement_sequence(this);
        }
    };
    // @Override
    Element_sequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitElement_sequence) {
            listener.exitElement_sequence(this);
        }
    };
    // @Override
    Element_sequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitElement_sequence) {
            return visitor.visitElement_sequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Element_sequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Element_sequenceContext = Element_sequenceContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.move_number_indication = function () {
        return this.tryGetRuleContext(0, Move_number_indicationContext);
    };
    ElementContext.prototype.san_move = function () {
        return this.tryGetRuleContext(0, San_moveContext);
    };
    ElementContext.prototype.NUMERIC_ANNOTATION_GLYPH = function () { return this.tryGetToken(PGNParser.NUMERIC_ANNOTATION_GLYPH, 0); };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementContext.prototype.enterRule = function (listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    };
    // @Override
    ElementContext.prototype.exitRule = function (listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    };
    // @Override
    ElementContext.prototype.accept = function (visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementContext = ElementContext;
var Move_number_indicationContext = /** @class */ (function (_super) {
    __extends(Move_number_indicationContext, _super);
    function Move_number_indicationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Move_number_indicationContext.prototype.INTEGER = function () { return this.getToken(PGNParser.INTEGER, 0); };
    Move_number_indicationContext.prototype.PERIOD = function () { return this.tryGetToken(PGNParser.PERIOD, 0); };
    Object.defineProperty(Move_number_indicationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_move_number_indication; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Move_number_indicationContext.prototype.enterRule = function (listener) {
        if (listener.enterMove_number_indication) {
            listener.enterMove_number_indication(this);
        }
    };
    // @Override
    Move_number_indicationContext.prototype.exitRule = function (listener) {
        if (listener.exitMove_number_indication) {
            listener.exitMove_number_indication(this);
        }
    };
    // @Override
    Move_number_indicationContext.prototype.accept = function (visitor) {
        if (visitor.visitMove_number_indication) {
            return visitor.visitMove_number_indication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Move_number_indicationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Move_number_indicationContext = Move_number_indicationContext;
var San_moveContext = /** @class */ (function (_super) {
    __extends(San_moveContext, _super);
    function San_moveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    San_moveContext.prototype.SYMBOL = function () { return this.getToken(PGNParser.SYMBOL, 0); };
    Object.defineProperty(San_moveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_san_move; },
        enumerable: true,
        configurable: true
    });
    // @Override
    San_moveContext.prototype.enterRule = function (listener) {
        if (listener.enterSan_move) {
            listener.enterSan_move(this);
        }
    };
    // @Override
    San_moveContext.prototype.exitRule = function (listener) {
        if (listener.exitSan_move) {
            listener.exitSan_move(this);
        }
    };
    // @Override
    San_moveContext.prototype.accept = function (visitor) {
        if (visitor.visitSan_move) {
            return visitor.visitSan_move(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return San_moveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.San_moveContext = San_moveContext;
var Recursive_variationContext = /** @class */ (function (_super) {
    __extends(Recursive_variationContext, _super);
    function Recursive_variationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Recursive_variationContext.prototype.LEFT_PARENTHESIS = function () { return this.getToken(PGNParser.LEFT_PARENTHESIS, 0); };
    Recursive_variationContext.prototype.element_sequence = function () {
        return this.getRuleContext(0, Element_sequenceContext);
    };
    Recursive_variationContext.prototype.RIGHT_PARENTHESIS = function () { return this.getToken(PGNParser.RIGHT_PARENTHESIS, 0); };
    Object.defineProperty(Recursive_variationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_recursive_variation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Recursive_variationContext.prototype.enterRule = function (listener) {
        if (listener.enterRecursive_variation) {
            listener.enterRecursive_variation(this);
        }
    };
    // @Override
    Recursive_variationContext.prototype.exitRule = function (listener) {
        if (listener.exitRecursive_variation) {
            listener.exitRecursive_variation(this);
        }
    };
    // @Override
    Recursive_variationContext.prototype.accept = function (visitor) {
        if (visitor.visitRecursive_variation) {
            return visitor.visitRecursive_variation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Recursive_variationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Recursive_variationContext = Recursive_variationContext;
var Game_terminationContext = /** @class */ (function (_super) {
    __extends(Game_terminationContext, _super);
    function Game_terminationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Game_terminationContext.prototype.WHITE_WINS = function () { return this.tryGetToken(PGNParser.WHITE_WINS, 0); };
    Game_terminationContext.prototype.BLACK_WINS = function () { return this.tryGetToken(PGNParser.BLACK_WINS, 0); };
    Game_terminationContext.prototype.DRAWN_GAME = function () { return this.tryGetToken(PGNParser.DRAWN_GAME, 0); };
    Game_terminationContext.prototype.ASTERISK = function () { return this.tryGetToken(PGNParser.ASTERISK, 0); };
    Object.defineProperty(Game_terminationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PGNParser.RULE_game_termination; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Game_terminationContext.prototype.enterRule = function (listener) {
        if (listener.enterGame_termination) {
            listener.enterGame_termination(this);
        }
    };
    // @Override
    Game_terminationContext.prototype.exitRule = function (listener) {
        if (listener.exitGame_termination) {
            listener.exitGame_termination(this);
        }
    };
    // @Override
    Game_terminationContext.prototype.accept = function (visitor) {
        if (visitor.visitGame_termination) {
            return visitor.visitGame_termination(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Game_terminationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Game_terminationContext = Game_terminationContext;
