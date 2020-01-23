"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/scotty/scotty.g4 by ANTLR 4.7.3-SNAPSHOT
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
var scottyLexer = /** @class */ (function (_super) {
    __extends(scottyLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function scottyLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(scottyLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(scottyLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return scottyLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "scotty.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return scottyLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return scottyLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyLexer.prototype, "channelNames", {
        // @Override
        get: function () { return scottyLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyLexer.prototype, "modeNames", {
        // @Override
        get: function () { return scottyLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyLexer, "_ATN", {
        get: function () {
            if (!scottyLexer.__ATN) {
                scottyLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(scottyLexer._serializedATN));
            }
            return scottyLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    scottyLexer.T__0 = 1;
    scottyLexer.T__1 = 2;
    scottyLexer.T__2 = 3;
    scottyLexer.T__3 = 4;
    scottyLexer.T__4 = 5;
    scottyLexer.T__5 = 6;
    scottyLexer.T__6 = 7;
    scottyLexer.T__7 = 8;
    scottyLexer.T__8 = 9;
    scottyLexer.DIGIT = 10;
    scottyLexer.LETTER = 11;
    scottyLexer.WS = 12;
    // tslint:disable:no-trailing-whitespace
    scottyLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    scottyLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    scottyLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "DIGIT", "LETTER", "WS",
    ];
    scottyLexer._LITERAL_NAMES = [
        undefined, "'='", "'fun'", "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'.'",
    ];
    scottyLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "DIGIT", "LETTER", "WS",
    ];
    scottyLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(scottyLexer._LITERAL_NAMES, scottyLexer._SYMBOLIC_NAMES, []);
    scottyLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E7\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n" +
        "\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x02\x02\x02\x0E" +
        "\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
        "\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x03\x02\x05\x03" +
        "\x022;\x04\x02C\\c|\x05\x02\v\f\x0F\x0F\"\"\x026\x02\x03\x03\x02\x02\x02" +
        "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
        "\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
        "\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
        "\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05" +
        "\x1D\x03\x02\x02\x02\x07!\x03\x02\x02\x02\t#\x03\x02\x02\x02\v%\x03\x02" +
        "\x02\x02\r\'\x03\x02\x02\x02\x0F)\x03\x02\x02\x02\x11+\x03\x02\x02\x02" +
        "\x13-\x03\x02\x02\x02\x15/\x03\x02\x02\x02\x171\x03\x02\x02\x02\x193\x03" +
        "\x02\x02\x02\x1B\x1C\x07?\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x07" +
        "h\x02\x02\x1E\x1F\x07w\x02\x02\x1F \x07p\x02\x02 \x06\x03\x02\x02\x02" +
        "!\"\x07-\x02\x02\"\b\x03\x02\x02\x02#$\x07/\x02\x02$\n\x03\x02\x02\x02" +
        "%&\x07,\x02\x02&\f\x03\x02\x02\x02\'(\x071\x02\x02(\x0E\x03\x02\x02\x02" +
        ")*\x07*\x02\x02*\x10\x03\x02\x02\x02+,\x07+\x02\x02,\x12\x03\x02\x02\x02" +
        "-.\x070\x02\x02.\x14\x03\x02\x02\x02/0\t\x02\x02\x020\x16\x03\x02\x02" +
        "\x0212\t\x03\x02\x022\x18\x03\x02\x02\x0234\t\x04\x02\x0245\x03\x02\x02" +
        "\x0256\b\r\x02\x026\x1A\x03\x02\x02\x02\x03\x02\x03\b\x02\x02";
    return scottyLexer;
}(Lexer_1.Lexer));
exports.scottyLexer = scottyLexer;
