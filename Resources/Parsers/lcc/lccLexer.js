"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lcc/lcc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var lccLexer = /** @class */ (function (_super) {
    __extends(lccLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function lccLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(lccLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(lccLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return lccLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "lcc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return lccLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return lccLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccLexer.prototype, "channelNames", {
        // @Override
        get: function () { return lccLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccLexer.prototype, "modeNames", {
        // @Override
        get: function () { return lccLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lccLexer, "_ATN", {
        get: function () {
            if (!lccLexer.__ATN) {
                lccLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(lccLexer._serializedATN));
            }
            return lccLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    lccLexer.T__0 = 1;
    lccLexer.T__1 = 2;
    lccLexer.DIGIT = 3;
    lccLexer.LETTER = 4;
    lccLexer.WS = 5;
    // tslint:disable:no-trailing-whitespace
    lccLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    lccLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    lccLexer.ruleNames = [
        "T__0", "T__1", "DIGIT", "LETTER", "WS",
    ];
    lccLexer._LITERAL_NAMES = [
        undefined, "' '", "'.'",
    ];
    lccLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "DIGIT", "LETTER", "WS",
    ];
    lccLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(lccLexer._LITERAL_NAMES, lccLexer._SYMBOLIC_NAMES, []);
    lccLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07\x1C\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
        "\x06\x06\x17\n\x06\r\x06\x0E\x06\x18\x03\x06\x03\x06\x02\x02\x02\x07\x03" +
        "\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\x03\x02\x03\x04\x02" +
        "\v\f\x0F\x0F\x02\x1C\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
        "\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\r" +
        "\x03\x02\x02\x02\x05\x0F\x03\x02\x02\x02\x07\x11\x03\x02\x02\x02\t\x13" +
        "\x03\x02\x02\x02\v\x16\x03\x02\x02\x02\r\x0E\x07\"\x02\x02\x0E\x04\x03" +
        "\x02\x02\x02\x0F\x10\x070\x02\x02\x10\x06\x03\x02\x02\x02\x11\x12\x04" +
        "2;\x02\x12\b\x03\x02\x02\x02\x13\x14\x04C\\\x02\x14\n\x03\x02\x02\x02" +
        "\x15\x17\t\x02\x02\x02\x16\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02" +
        "\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02" +
        "\x1A\x1B\b\x06\x02\x02\x1B\f\x03\x02\x02\x02\x04\x02\x18\x03\b\x02\x02";
    return lccLexer;
}(Lexer_1.Lexer));
exports.lccLexer = lccLexer;
