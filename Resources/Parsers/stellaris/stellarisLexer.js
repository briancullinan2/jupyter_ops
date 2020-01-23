"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stellaris/stellaris.g4 by ANTLR 4.7.3-SNAPSHOT
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
var stellarisLexer = /** @class */ (function (_super) {
    __extends(stellarisLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function stellarisLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(stellarisLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(stellarisLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return stellarisLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "stellaris.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return stellarisLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return stellarisLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisLexer.prototype, "channelNames", {
        // @Override
        get: function () { return stellarisLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisLexer.prototype, "modeNames", {
        // @Override
        get: function () { return stellarisLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisLexer, "_ATN", {
        get: function () {
            if (!stellarisLexer.__ATN) {
                stellarisLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(stellarisLexer._serializedATN));
            }
            return stellarisLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    stellarisLexer.T__0 = 1;
    stellarisLexer.T__1 = 2;
    stellarisLexer.T__2 = 3;
    stellarisLexer.T__3 = 4;
    stellarisLexer.T__4 = 5;
    stellarisLexer.T__5 = 6;
    stellarisLexer.T__6 = 7;
    stellarisLexer.T__7 = 8;
    stellarisLexer.IDENTIFIER = 9;
    stellarisLexer.INTEGER = 10;
    stellarisLexer.STRING = 11;
    stellarisLexer.COMMENT = 12;
    stellarisLexer.SPACE = 13;
    stellarisLexer.NL = 14;
    // tslint:disable:no-trailing-whitespace
    stellarisLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    stellarisLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    stellarisLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "IDENTIFIER",
        "INTEGER", "INTEGERFRAG", "IDENITIFIERHEAD", "IDENITIFIERBODY", "STRING",
        "COMMENT", "SPACE", "NL",
    ];
    stellarisLexer._LITERAL_NAMES = [
        undefined, "'='", "'>'", "'<'", "'.'", "'@'", "':'", "'{'", "'}'",
    ];
    stellarisLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "IDENTIFIER", "INTEGER", "STRING", "COMMENT", "SPACE",
        "NL",
    ];
    stellarisLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(stellarisLexer._LITERAL_NAMES, stellarisLexer._SYMBOLIC_NAMES, []);
    stellarisLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10f\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x07\n8\n" +
        "\n\f\n\x0E\n;\v\n\x03\v\x05\v>\n\v\x03\v\x03\v\x03\f\x06\fC\n\f\r\f\x0E" +
        "\fD\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0EK\n\x0E\x03\x0F\x03\x0F\x07\x0F" +
        "O\n\x0F\f\x0F\x0E\x0FR\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x07\x10X" +
        "\n\x10\f\x10\x0E\x10[\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13\x03\x02\x03\x05\x02" +
        "\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
        "\v\x15\x02\f\x17\x02\x02\x19\x02\x02\x1B\x02\x02\x1D\x02\r\x1F\x02\x0E" +
        "!\x02\x0F#\x02\x10\x03\x02\t\x04\x02--//\x03\x022;\x04\x02C\\c|\x04\x02" +
        "2;aa\x05\x02\f\f\x0F\x0F$$\x04\x02\f\f\x0F\x0F\x05\x02\v\v\x0E\x0E\"\"" +
        "\x02h\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
        "\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
        "\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
        "\x02\x02\x15\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02" +
        "\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x03%\x03\x02\x02\x02\x05" +
        "\'\x03\x02\x02\x02\x07)\x03\x02\x02\x02\t+\x03\x02\x02\x02\v-\x03\x02" +
        "\x02\x02\r/\x03\x02\x02\x02\x0F1\x03\x02\x02\x02\x113\x03\x02\x02\x02" +
        "\x135\x03\x02\x02\x02\x15=\x03\x02\x02\x02\x17B\x03\x02\x02\x02\x19F\x03" +
        "\x02\x02\x02\x1BJ\x03\x02\x02\x02\x1DL\x03\x02\x02\x02\x1FU\x03\x02\x02" +
        "\x02!^\x03\x02\x02\x02#b\x03\x02\x02\x02%&\x07?\x02\x02&\x04\x03\x02\x02" +
        "\x02\'(\x07@\x02\x02(\x06\x03\x02\x02\x02)*\x07>\x02\x02*\b\x03\x02\x02" +
        "\x02+,\x070\x02\x02,\n\x03\x02\x02\x02-.\x07B\x02\x02.\f\x03\x02\x02\x02" +
        "/0\x07<\x02\x020\x0E\x03\x02\x02\x0212\x07}\x02\x022\x10\x03\x02\x02\x02" +
        "34\x07\x7F\x02\x024\x12\x03\x02\x02\x0259\x05\x19\r\x0268\x05\x1B\x0E" +
        "\x0276\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02" +
        "\x02:\x14\x03\x02\x02\x02;9\x03\x02\x02\x02<>\t\x02\x02\x02=<\x03\x02" +
        "\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x05\x17\f\x02@\x16\x03" +
        "\x02\x02\x02AC\t\x03\x02\x02BA\x03\x02\x02\x02CD\x03\x02\x02\x02DB\x03" +
        "\x02\x02\x02DE\x03\x02\x02\x02E\x18\x03\x02\x02\x02FG\t\x04\x02\x02G\x1A" +
        "\x03\x02\x02\x02HK\x05\x19\r\x02IK\t\x05\x02\x02JH\x03\x02\x02\x02JI\x03" +
        "\x02\x02\x02K\x1C\x03\x02\x02\x02LP\x07$\x02\x02MO\n\x06\x02\x02NM\x03" +
        "\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x03" +
        "\x02\x02\x02RP\x03\x02\x02\x02ST\x07$\x02\x02T\x1E\x03\x02\x02\x02UY\x07" +
        "%\x02\x02VX\n\x07\x02\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02" +
        "\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\b\x10" +
        "\x02\x02] \x03\x02\x02\x02^_\t\b\x02\x02_`\x03\x02\x02\x02`a\b\x11\x02" +
        "\x02a\"\x03\x02\x02\x02bc\t\x07\x02\x02cd\x03\x02\x02\x02de\b\x12\x02" +
        "\x02e$\x03\x02\x02\x02\t\x029=DJPY\x03\x02\x03\x02";
    return stellarisLexer;
}(Lexer_1.Lexer));
exports.stellarisLexer = stellarisLexer;
