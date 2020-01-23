"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/useragent/useragent.g4 by ANTLR 4.7.3-SNAPSHOT
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
var useragentLexer = /** @class */ (function (_super) {
    __extends(useragentLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function useragentLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(useragentLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(useragentLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return useragentLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "useragent.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return useragentLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return useragentLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentLexer.prototype, "channelNames", {
        // @Override
        get: function () { return useragentLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentLexer.prototype, "modeNames", {
        // @Override
        get: function () { return useragentLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentLexer, "_ATN", {
        get: function () {
            if (!useragentLexer.__ATN) {
                useragentLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(useragentLexer._serializedATN));
            }
            return useragentLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    useragentLexer.T__0 = 1;
    useragentLexer.T__1 = 2;
    useragentLexer.COMMENT = 3;
    useragentLexer.STRING = 4;
    useragentLexer.WS = 5;
    // tslint:disable:no-trailing-whitespace
    useragentLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    useragentLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    useragentLexer.ruleNames = [
        "T__0", "T__1", "COMMENT", "STRING", "WS",
    ];
    useragentLexer._LITERAL_NAMES = [
        undefined, "'/'", "'.'",
    ];
    useragentLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "COMMENT", "STRING", "WS",
    ];
    useragentLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(useragentLexer._LITERAL_NAMES, useragentLexer._SYMBOLIC_NAMES, []);
    useragentLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07&\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04\x14\n\x04\f\x04\x0E" +
        "\x04\x17\v\x04\x03\x04\x03\x04\x03\x05\x06\x05\x1C\n\x05\r\x05\x0E\x05" +
        "\x1D\x03\x06\x06\x06!\n\x06\r\x06\x0E\x06\"\x03\x06\x03\x06\x02\x02\x02" +
        "\x07\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\x03\x02\x05" +
        "\x03\x02++\x05\x022;C\\c|\x05\x02\f\f\x0F\x0F\"\"\x02(\x02\x03\x03\x02" +
        "\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
        "\x02\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05\x0F\x03\x02\x02" +
        "\x02\x07\x11\x03\x02\x02\x02\t\x1B\x03\x02\x02\x02\v \x03\x02\x02\x02" +
        "\r\x0E\x071\x02\x02\x0E\x04\x03\x02\x02\x02\x0F\x10\x070\x02\x02\x10\x06" +
        "\x03\x02\x02\x02\x11\x15\x07*\x02\x02\x12\x14\n\x02\x02\x02\x13\x12\x03" +
        "\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03" +
        "\x02\x02\x02\x16\x18\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x19\x07" +
        "+\x02\x02\x19\b\x03\x02\x02\x02\x1A\x1C\t\x03\x02\x02\x1B\x1A\x03\x02" +
        "\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02" +
        "\x02\x02\x1E\n\x03\x02\x02\x02\x1F!\t\x04\x02\x02 \x1F\x03\x02\x02\x02" +
        "!\"\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02#$\x03\x02\x02" +
        "\x02$%\b\x06\x02\x02%\f\x03\x02\x02\x02\x06\x02\x15\x1D\"\x03\b\x02\x02";
    return useragentLexer;
}(Lexer_1.Lexer));
exports.useragentLexer = useragentLexer;
