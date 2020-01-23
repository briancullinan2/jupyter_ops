"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/morsecode/morsecode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var morsecodeLexer = /** @class */ (function (_super) {
    __extends(morsecodeLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function morsecodeLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(morsecodeLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(morsecodeLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return morsecodeLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "morsecode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return morsecodeLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return morsecodeLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeLexer.prototype, "channelNames", {
        // @Override
        get: function () { return morsecodeLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeLexer.prototype, "modeNames", {
        // @Override
        get: function () { return morsecodeLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(morsecodeLexer, "_ATN", {
        get: function () {
            if (!morsecodeLexer.__ATN) {
                morsecodeLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(morsecodeLexer._serializedATN));
            }
            return morsecodeLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    morsecodeLexer.DOT = 1;
    morsecodeLexer.DASH = 2;
    morsecodeLexer.SPACE = 3;
    morsecodeLexer.WS = 4;
    // tslint:disable:no-trailing-whitespace
    morsecodeLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    morsecodeLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    morsecodeLexer.ruleNames = [
        "DOT", "DASH", "SPACE", "WS",
    ];
    morsecodeLexer._LITERAL_NAMES = [
        undefined, "'.'", "'-'", "' '",
    ];
    morsecodeLexer._SYMBOLIC_NAMES = [
        undefined, "DOT", "DASH", "SPACE", "WS",
    ];
    morsecodeLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(morsecodeLexer._LITERAL_NAMES, morsecodeLexer._SYMBOLIC_NAMES, []);
    morsecodeLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06\x15\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x02\x02" +
        "\x02\x06\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\x03\x02\x03\x04" +
        "\x02\v\f\x0F\x0F\x02\x14\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
        "\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x03\v\x03\x02\x02\x02\x05" +
        "\r\x03\x02\x02\x02\x07\x0F\x03\x02\x02\x02\t\x11\x03\x02\x02\x02\v\f\x07" +
        "0\x02\x02\f\x04\x03\x02\x02\x02\r\x0E\x07/\x02\x02\x0E\x06\x03\x02\x02" +
        "\x02\x0F\x10\x07\"\x02\x02\x10\b\x03\x02\x02\x02\x11\x12\t\x02\x02\x02" +
        "\x12\x13\x03\x02\x02\x02\x13\x14\b\x05\x02\x02\x14\n\x03\x02\x02\x02\x03" +
        "\x02\x03\b\x02\x02";
    return morsecodeLexer;
}(Lexer_1.Lexer));
exports.morsecodeLexer = morsecodeLexer;
