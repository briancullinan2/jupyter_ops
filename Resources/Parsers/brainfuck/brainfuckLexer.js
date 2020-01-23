"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/brainfuck/brainfuck.g4 by ANTLR 4.7.3-SNAPSHOT
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
var brainfuckLexer = /** @class */ (function (_super) {
    __extends(brainfuckLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function brainfuckLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(brainfuckLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(brainfuckLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return brainfuckLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "brainfuck.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return brainfuckLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return brainfuckLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckLexer.prototype, "channelNames", {
        // @Override
        get: function () { return brainfuckLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckLexer.prototype, "modeNames", {
        // @Override
        get: function () { return brainfuckLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckLexer, "_ATN", {
        get: function () {
            if (!brainfuckLexer.__ATN) {
                brainfuckLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(brainfuckLexer._serializedATN));
            }
            return brainfuckLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    brainfuckLexer.GT = 1;
    brainfuckLexer.LT = 2;
    brainfuckLexer.PLUS = 3;
    brainfuckLexer.MINUS = 4;
    brainfuckLexer.DOT = 5;
    brainfuckLexer.COMMA = 6;
    brainfuckLexer.LPAREN = 7;
    brainfuckLexer.RPAREN = 8;
    brainfuckLexer.WS = 9;
    // tslint:disable:no-trailing-whitespace
    brainfuckLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    brainfuckLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    brainfuckLexer.ruleNames = [
        "GT", "LT", "PLUS", "MINUS", "DOT", "COMMA", "LPAREN", "RPAREN", "WS",
    ];
    brainfuckLexer._LITERAL_NAMES = [
        undefined, "'>'", "'<'", "'+'", "'-'", "'.'", "','", "'['", "']'",
    ];
    brainfuckLexer._SYMBOLIC_NAMES = [
        undefined, "GT", "LT", "PLUS", "MINUS", "DOT", "COMMA", "LPAREN", "RPAREN",
        "WS",
    ];
    brainfuckLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(brainfuckLexer._LITERAL_NAMES, brainfuckLexer._SYMBOLIC_NAMES, []);
    brainfuckLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\v)\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03" +
        "\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b" +
        "\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05" +
        "\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
        "\x02\v\x03\x02\x02\x02(\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
        "\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
        "\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
        "\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x17\x03\x02\x02\x02\x07" +
        "\x19\x03\x02\x02\x02\t\x1B\x03\x02\x02\x02\v\x1D\x03\x02\x02\x02\r\x1F" +
        "\x03\x02\x02\x02\x0F!\x03\x02\x02\x02\x11#\x03\x02\x02\x02\x13%\x03\x02" +
        "\x02\x02\x15\x16\x07@\x02\x02\x16\x04\x03\x02\x02\x02\x17\x18\x07>\x02" +
        "\x02\x18\x06\x03\x02\x02\x02\x19\x1A\x07-\x02\x02\x1A\b\x03\x02\x02\x02" +
        "\x1B\x1C\x07/\x02\x02\x1C\n\x03\x02\x02\x02\x1D\x1E\x070\x02\x02\x1E\f" +
        "\x03\x02\x02\x02\x1F \x07.\x02\x02 \x0E\x03\x02\x02\x02!\"\x07]\x02\x02" +
        "\"\x10\x03\x02\x02\x02#$\x07_\x02\x02$\x12\x03\x02\x02\x02%&\v\x02\x02" +
        "\x02&\'\x03\x02\x02\x02\'(\b\n\x02\x02(\x14\x03\x02\x02\x02\x03\x02\x03" +
        "\b\x02\x02";
    return brainfuckLexer;
}(Lexer_1.Lexer));
exports.brainfuckLexer = brainfuckLexer;
