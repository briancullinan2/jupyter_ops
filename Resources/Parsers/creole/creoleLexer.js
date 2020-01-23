"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/creole/creole.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var creoleLexer = /** @class */ (function (_super) {
    __extends(creoleLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function creoleLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(creoleLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(creoleLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return creoleLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "creole.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return creoleLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return creoleLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleLexer.prototype, "channelNames", {
        // @Override
        get: function () { return creoleLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleLexer.prototype, "modeNames", {
        // @Override
        get: function () { return creoleLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleLexer, "_ATN", {
        get: function () {
            if (!creoleLexer.__ATN) {
                creoleLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(creoleLexer._serializedATN));
            }
            return creoleLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    creoleLexer.T__0 = 1;
    creoleLexer.T__1 = 2;
    creoleLexer.T__2 = 3;
    creoleLexer.T__3 = 4;
    creoleLexer.T__4 = 5;
    creoleLexer.T__5 = 6;
    creoleLexer.T__6 = 7;
    creoleLexer.HASH = 8;
    creoleLexer.LBRACKET = 9;
    creoleLexer.RBRACKET = 10;
    creoleLexer.LBRACE = 11;
    creoleLexer.RBRACE = 12;
    creoleLexer.TEXT = 13;
    creoleLexer.WS = 14;
    creoleLexer.CR = 15;
    creoleLexer.NOWIKI = 16;
    creoleLexer.RSLASH = 17;
    // tslint:disable:no-trailing-whitespace
    creoleLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    creoleLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    creoleLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "HASH", "LBRACKET",
        "RBRACKET", "LBRACE", "RBRACE", "TEXT", "WS", "CR", "NOWIKI", "RSLASH",
        "LETTERS", "DIGITS", "SYMBOL",
    ];
    creoleLexer._LITERAL_NAMES = [
        undefined, "'\\''", "'**'", "'|'", "'----'", "'*'", "'|='", "'='", "'#'",
        "'[['", "']]'", "'{{'", "'}}'", undefined, undefined, undefined, undefined,
        "'/'",
    ];
    creoleLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "HASH", "LBRACKET", "RBRACKET", "LBRACE", "RBRACE", "TEXT",
        "WS", "CR", "NOWIKI", "RSLASH",
    ];
    creoleLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(creoleLexer._LITERAL_NAMES, creoleLexer._SYMBOLIC_NAMES, []);
    creoleLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x13t\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03" +
        "\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0ER\n\x0E\r\x0E\x0E\x0ES\x03\x0F\x03" +
        "\x0F\x03\x10\x05\x10Y\n\x10\x03\x10\x03\x10\x05\x10]\n\x10\x03\x11\x03" +
        "\x11\x03\x11\x03\x11\x03\x11\x07\x11d\n\x11\f\x11\x0E\x11g\v\x11\x03\x11" +
        "\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14" +
        "\x03\x15\x03\x15\x03e\x02\x02\x16\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
        "\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
        "\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
        "%\x02\x02\'\x02\x02)\x02\x02\x03\x02\x06\x04\x02\v\v\"\"\x04\x02C\\c|" +
        "\x03\x022;\b\x02$$)+-0<=^^\x80\x80\x02w\x02\x03\x03\x02\x02\x02\x02\x05" +
        "\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
        "\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
        "\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
        "\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
        "\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02" +
        "\x02\x02\x03+\x03\x02\x02\x02\x05.\x03\x02\x02\x02\x071\x03\x02\x02\x02" +
        "\t3\x03\x02\x02\x02\v8\x03\x02\x02\x02\r:\x03\x02\x02\x02\x0F=\x03\x02" +
        "\x02\x02\x11?\x03\x02\x02\x02\x13A\x03\x02\x02\x02\x15D\x03\x02\x02\x02" +
        "\x17G\x03\x02\x02\x02\x19J\x03\x02\x02\x02\x1BQ\x03\x02\x02\x02\x1DU\x03" +
        "\x02\x02\x02\x1F\\\x03\x02\x02\x02!^\x03\x02\x02\x02#l\x03\x02\x02\x02" +
        "%n\x03\x02\x02\x02\'p\x03\x02\x02\x02)r\x03\x02\x02\x02+,\x07^\x02\x02" +
        ",-\x07^\x02\x02-\x04\x03\x02\x02\x02./\x07,\x02\x02/0\x07,\x02\x020\x06" +
        "\x03\x02\x02\x0212\x07~\x02\x022\b\x03\x02\x02\x0234\x07/\x02\x0245\x07" +
        "/\x02\x0256\x07/\x02\x0267\x07/\x02\x027\n\x03\x02\x02\x0289\x07,\x02" +
        "\x029\f\x03\x02\x02\x02:;\x07~\x02\x02;<\x07?\x02\x02<\x0E\x03\x02\x02" +
        "\x02=>\x07?\x02\x02>\x10\x03\x02\x02\x02?@\x07%\x02\x02@\x12\x03\x02\x02" +
        "\x02AB\x07]\x02\x02BC\x07]\x02\x02C\x14\x03\x02\x02\x02DE\x07_\x02\x02" +
        "EF\x07_\x02\x02F\x16\x03\x02\x02\x02GH\x07}\x02\x02HI\x07}\x02\x02I\x18" +
        "\x03\x02\x02\x02JK\x07\x7F\x02\x02KL\x07\x7F\x02\x02L\x1A\x03\x02\x02" +
        "\x02MR\x05%\x13\x02NR\x05\'\x14\x02OR\x05)\x15\x02PR\x05\x1D\x0F\x02Q" +
        "M\x03\x02\x02\x02QN\x03\x02\x02\x02QO\x03\x02\x02\x02QP\x03\x02\x02\x02" +
        "RS\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\x1C\x03\x02\x02" +
        "\x02UV\t\x02\x02\x02V\x1E\x03\x02\x02\x02WY\x07\x0F\x02\x02XW\x03\x02" +
        "\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02\x02Z]\x07\f\x02\x02[]\x07\x02" +
        "\x02\x03\\X\x03\x02\x02\x02\\[\x03\x02\x02\x02] \x03\x02\x02\x02^_\x07" +
        "}\x02\x02_`\x07}\x02\x02`a\x07}\x02\x02ae\x03\x02\x02\x02bd\v\x02\x02" +
        "\x02cb\x03\x02\x02\x02dg\x03\x02\x02\x02ef\x03\x02\x02\x02ec\x03\x02\x02" +
        "\x02fh\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x07\x7F\x02\x02ij\x07\x7F\x02" +
        "\x02jk\x07\x7F\x02\x02k\"\x03\x02\x02\x02lm\x071\x02\x02m$\x03\x02\x02" +
        "\x02no\t\x03\x02\x02o&\x03\x02\x02\x02pq\t\x04\x02\x02q(\x03\x02\x02\x02" +
        "rs\t\x05\x02\x02s*\x03\x02\x02\x02\b\x02QSX\\e\x02";
    return creoleLexer;
}(Lexer_1.Lexer));
exports.creoleLexer = creoleLexer;
