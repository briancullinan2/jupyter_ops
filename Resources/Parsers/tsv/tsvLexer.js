"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tsv/tsv.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tsvLexer = /** @class */ (function (_super) {
    __extends(tsvLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function tsvLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(tsvLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(tsvLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tsvLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "tsv.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return tsvLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return tsvLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvLexer.prototype, "channelNames", {
        // @Override
        get: function () { return tsvLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvLexer.prototype, "modeNames", {
        // @Override
        get: function () { return tsvLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvLexer, "_ATN", {
        get: function () {
            if (!tsvLexer.__ATN) {
                tsvLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tsvLexer._serializedATN));
            }
            return tsvLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tsvLexer.TAB = 1;
    tsvLexer.EOL = 2;
    tsvLexer.TEXT = 3;
    tsvLexer.STRING = 4;
    // tslint:disable:no-trailing-whitespace
    tsvLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    tsvLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    tsvLexer.ruleNames = [
        "TAB", "EOL", "TEXT", "STRING",
    ];
    tsvLexer._LITERAL_NAMES = [
        undefined, "'\t'",
    ];
    tsvLexer._SYMBOLIC_NAMES = [
        undefined, "TAB", "EOL", "TEXT", "STRING",
    ];
    tsvLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tsvLexer._LITERAL_NAMES, tsvLexer._SYMBOLIC_NAMES, []);
    tsvLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06\"\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03" +
        "\x03\x06\x03\x0F\n\x03\r\x03\x0E\x03\x10\x03\x04\x06\x04\x14\n\x04\r\x04" +
        "\x0E\x04\x15\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\x1C\n\x05\f\x05\x0E" +
        "\x05\x1F\v\x05\x03\x05\x03\x05\x02\x02\x02\x06\x03\x02\x03\x05\x02\x04" +
        "\x07\x02\x05\t\x02\x06\x03\x02\x05\x04\x02\f\f\x0F\x0F\x06\x02\f\f\x0F" +
        "\x0F$$..\x03\x02$$\x02%\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
        "\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x03\v\x03\x02\x02\x02\x05" +
        "\x0E\x03\x02\x02\x02\x07\x13\x03\x02\x02\x02\t\x17\x03\x02\x02\x02\v\f" +
        "\x07\v\x02\x02\f\x04\x03\x02\x02\x02\r\x0F\t\x02\x02\x02\x0E\r\x03\x02" +
        "\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x11\x03\x02" +
        "\x02\x02\x11\x06\x03\x02\x02\x02\x12\x14\n\x03\x02\x02\x13\x12\x03\x02" +
        "\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02" +
        "\x02\x02\x16\b\x03\x02\x02\x02\x17\x1D\x07$\x02\x02\x18\x19\x07$\x02\x02" +
        "\x19\x1C\x07$\x02\x02\x1A\x1C\n\x04\x02\x02\x1B\x18\x03\x02\x02\x02\x1B" +
        "\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D" +
        "\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07" +
        "$\x02\x02!\n\x03\x02\x02\x02\x07\x02\x10\x15\x1B\x1D\x02";
    return tsvLexer;
}(Lexer_1.Lexer));
exports.tsvLexer = tsvLexer;
