"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/istc/istc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var istcLexer = /** @class */ (function (_super) {
    __extends(istcLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function istcLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(istcLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(istcLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return istcLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "istc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return istcLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return istcLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcLexer.prototype, "channelNames", {
        // @Override
        get: function () { return istcLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcLexer.prototype, "modeNames", {
        // @Override
        get: function () { return istcLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcLexer, "_ATN", {
        get: function () {
            if (!istcLexer.__ATN) {
                istcLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(istcLexer._serializedATN));
            }
            return istcLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    istcLexer.T__0 = 1;
    istcLexer.T__1 = 2;
    istcLexer.SEP = 3;
    istcLexer.CHAR = 4;
    istcLexer.WS = 5;
    // tslint:disable:no-trailing-whitespace
    istcLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    istcLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    istcLexer.ruleNames = [
        "T__0", "T__1", "SEP", "CHAR", "WS",
    ];
    istcLexer._LITERAL_NAMES = [
        undefined, "'ISTC'", "' '",
    ];
    istcLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "SEP", "CHAR", "WS",
    ];
    istcLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(istcLexer._LITERAL_NAMES, istcLexer._SYMBOLIC_NAMES, []);
    istcLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07\x1F\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
        "\x03\x05\x03\x05\x03\x06\x06\x06\x1A\n\x06\r\x06\x0E\x06\x1B\x03\x06\x03" +
        "\x06\x02\x02\x02\x07\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
        "\x07\x03\x02\x05\x04\x02\"\"//\x04\x022;CH\x04\x02\v\f\x0F\x0F\x02\x1F" +
        "\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
        "\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05" +
        "\x12\x03\x02\x02\x02\x07\x14\x03\x02\x02\x02\t\x16\x03\x02\x02\x02\v\x19" +
        "\x03\x02\x02\x02\r\x0E\x07K\x02\x02\x0E\x0F\x07U\x02\x02\x0F\x10\x07V" +
        "\x02\x02\x10\x11\x07E\x02\x02\x11\x04\x03\x02\x02\x02\x12\x13\x07\"\x02" +
        "\x02\x13\x06\x03\x02\x02\x02\x14\x15\t\x02\x02\x02\x15\b\x03\x02\x02\x02" +
        "\x16\x17\t\x03\x02\x02\x17\n\x03\x02\x02\x02\x18\x1A\t\x04\x02\x02\x19" +
        "\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B" +
        "\x1C\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1E\b\x06\x02\x02\x1E" +
        "\f\x03\x02\x02\x02\x04\x02\x1B\x03\b\x02\x02";
    return istcLexer;
}(Lexer_1.Lexer));
exports.istcLexer = istcLexer;
