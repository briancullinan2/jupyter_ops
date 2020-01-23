"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnt/tnt.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tntLexer = /** @class */ (function (_super) {
    __extends(tntLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function tntLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(tntLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(tntLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tntLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "tnt.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return tntLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return tntLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntLexer.prototype, "channelNames", {
        // @Override
        get: function () { return tntLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntLexer.prototype, "modeNames", {
        // @Override
        get: function () { return tntLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tntLexer, "_ATN", {
        get: function () {
            if (!tntLexer.__ATN) {
                tntLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tntLexer._serializedATN));
            }
            return tntLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tntLexer.T__0 = 1;
    tntLexer.T__1 = 2;
    tntLexer.T__2 = 3;
    tntLexer.T__3 = 4;
    tntLexer.T__4 = 5;
    tntLexer.T__5 = 6;
    tntLexer.T__6 = 7;
    tntLexer.ZERO = 8;
    tntLexer.SUCCESSOR = 9;
    tntLexer.A = 10;
    tntLexer.B = 11;
    tntLexer.C = 12;
    tntLexer.D = 13;
    tntLexer.E = 14;
    tntLexer.PRIME = 15;
    tntLexer.FOREVERY = 16;
    tntLexer.EXISTS = 17;
    tntLexer.WS = 18;
    // tslint:disable:no-trailing-whitespace
    tntLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    tntLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    tntLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "ZERO", "SUCCESSOR",
        "A", "B", "C", "D", "E", "PRIME", "FOREVERY", "EXISTS", "WS",
    ];
    tntLexer._LITERAL_NAMES = [
        undefined, "'='", "'+'", "'*'", "'('", "')'", "'~'", "':'", "'0'", "'S'",
        "'a'", "'b'", "'c'", "'d'", "'e'", "'''", "'A'", "'E'",
    ];
    tntLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "ZERO", "SUCCESSOR", "A", "B", "C", "D", "E", "PRIME", "FOREVERY",
        "EXISTS", "WS",
    ];
    tntLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tntLexer._LITERAL_NAMES, tntLexer._SYMBOLIC_NAMES, []);
    tntLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14M\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n" +
        "\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03" +
        "\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
        "\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
        "\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
        "\x02\x14\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02L\x02\x03\x03\x02\x02" +
        "\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
        "\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
        "\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
        "\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
        "\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
        "\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03\'\x03\x02\x02\x02\x05)" +
        "\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t-\x03\x02\x02\x02\v/\x03\x02\x02" +
        "\x02\r1\x03\x02\x02\x02\x0F3\x03\x02\x02\x02\x115\x03\x02\x02\x02\x13" +
        "7\x03\x02\x02\x02\x159\x03\x02\x02\x02\x17;\x03\x02\x02\x02\x19=\x03\x02" +
        "\x02\x02\x1B?\x03\x02\x02\x02\x1DA\x03\x02\x02\x02\x1FC\x03\x02\x02\x02" +
        "!E\x03\x02\x02\x02#G\x03\x02\x02\x02%I\x03\x02\x02\x02\'(\x07?\x02\x02" +
        "(\x04\x03\x02\x02\x02)*\x07-\x02\x02*\x06\x03\x02\x02\x02+,\x07,\x02\x02" +
        ",\b\x03\x02\x02\x02-.\x07*\x02\x02.\n\x03\x02\x02\x02/0\x07+\x02\x020" +
        "\f\x03\x02\x02\x0212\x07\x80\x02\x022\x0E\x03\x02\x02\x0234\x07<\x02\x02" +
        "4\x10\x03\x02\x02\x0256\x072\x02\x026\x12\x03\x02\x02\x0278\x07U\x02\x02" +
        "8\x14\x03\x02\x02\x029:\x07c\x02\x02:\x16\x03\x02\x02\x02;<\x07d\x02\x02" +
        "<\x18\x03\x02\x02\x02=>\x07e\x02\x02>\x1A\x03\x02\x02\x02?@\x07f\x02\x02" +
        "@\x1C\x03\x02\x02\x02AB\x07g\x02\x02B\x1E\x03\x02\x02\x02CD\x07)\x02\x02" +
        "D \x03\x02\x02\x02EF\x07C\x02\x02F\"\x03\x02\x02\x02GH\x07G\x02\x02H$" +
        "\x03\x02\x02\x02IJ\t\x02\x02\x02JK\x03\x02\x02\x02KL\b\x13\x02\x02L&\x03" +
        "\x02\x02\x02\x03\x02\x03\b\x02\x02";
    return tntLexer;
}(Lexer_1.Lexer));
exports.tntLexer = tntLexer;
