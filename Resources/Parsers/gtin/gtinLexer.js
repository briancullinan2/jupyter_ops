"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gtin/gtin.g4 by ANTLR 4.7.3-SNAPSHOT
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
var gtinLexer = /** @class */ (function (_super) {
    __extends(gtinLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function gtinLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(gtinLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(gtinLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return gtinLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "gtin.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return gtinLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return gtinLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinLexer.prototype, "channelNames", {
        // @Override
        get: function () { return gtinLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinLexer.prototype, "modeNames", {
        // @Override
        get: function () { return gtinLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinLexer, "_ATN", {
        get: function () {
            if (!gtinLexer.__ATN) {
                gtinLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(gtinLexer._serializedATN));
            }
            return gtinLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    gtinLexer.DIGIT_0 = 1;
    gtinLexer.DIGIT_1 = 2;
    gtinLexer.DIGIT_2 = 3;
    gtinLexer.DIGIT_3 = 4;
    gtinLexer.DIGIT_4 = 5;
    gtinLexer.DIGIT_5 = 6;
    gtinLexer.DIGIT_6 = 7;
    gtinLexer.DIGIT_7 = 8;
    gtinLexer.DIGIT_8 = 9;
    gtinLexer.DIGIT_9 = 10;
    gtinLexer.HYPHEN = 11;
    gtinLexer.WS = 12;
    // tslint:disable:no-trailing-whitespace
    gtinLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    gtinLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    gtinLexer.ruleNames = [
        "DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", "DIGIT_4", "DIGIT_5", "DIGIT_6",
        "DIGIT_7", "DIGIT_8", "DIGIT_9", "HYPHEN", "WS",
    ];
    gtinLexer._LITERAL_NAMES = [
        undefined, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", "'8'",
        "'9'", "'-'",
    ];
    gtinLexer._SYMBOLIC_NAMES = [
        undefined, "DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", "DIGIT_4", "DIGIT_5",
        "DIGIT_6", "DIGIT_7", "DIGIT_8", "DIGIT_9", "HYPHEN", "WS",
    ];
    gtinLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(gtinLexer._LITERAL_NAMES, gtinLexer._SYMBOLIC_NAMES, []);
    gtinLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E:\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03" +
        "\v\x03\f\x03\f\x03\f\x03\f\x03\r\x06\r5\n\r\r\r\x0E\r6\x03\r\x03\r\x02" +
        "\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r" +
        "\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x03" +
        "\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02:\x02\x03\x03\x02\x02\x02\x02\x05" +
        "\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
        "\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
        "\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
        "\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1D\x03" +
        "\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\v#\x03\x02\x02" +
        "\x02\r%\x03\x02\x02\x02\x0F\'\x03\x02\x02\x02\x11)\x03\x02\x02\x02\x13" +
        "+\x03\x02\x02\x02\x15-\x03\x02\x02\x02\x17/\x03\x02\x02\x02\x194\x03\x02" +
        "\x02\x02\x1B\x1C\x072\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x073\x02" +
        "\x02\x1E\x06\x03\x02\x02\x02\x1F \x074\x02\x02 \b\x03\x02\x02\x02!\"\x07" +
        "5\x02\x02\"\n\x03\x02\x02\x02#$\x076\x02\x02$\f\x03\x02\x02\x02%&\x07" +
        "7\x02\x02&\x0E\x03\x02\x02\x02\'(\x078\x02\x02(\x10\x03\x02\x02\x02)*" +
        "\x079\x02\x02*\x12\x03\x02\x02\x02+,\x07:\x02\x02,\x14\x03\x02\x02\x02" +
        "-.\x07;\x02\x02.\x16\x03\x02\x02\x02/0\x07/\x02\x0201\x03\x02\x02\x02" +
        "12\b\f\x02\x022\x18\x03\x02\x02\x0235\t\x02\x02\x0243\x03\x02\x02\x02" +
        "56\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x0278\x03\x02\x02\x02" +
        "89\b\r\x02\x029\x1A\x03\x02\x02\x02\x04\x026\x03\b\x02\x02";
    return gtinLexer;
}(Lexer_1.Lexer));
exports.gtinLexer = gtinLexer;
