"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/propcalc/propcalc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var propcalcLexer = /** @class */ (function (_super) {
    __extends(propcalcLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function propcalcLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(propcalcLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(propcalcLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return propcalcLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "propcalc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return propcalcLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return propcalcLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcLexer.prototype, "channelNames", {
        // @Override
        get: function () { return propcalcLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcLexer.prototype, "modeNames", {
        // @Override
        get: function () { return propcalcLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propcalcLexer, "_ATN", {
        get: function () {
            if (!propcalcLexer.__ATN) {
                propcalcLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(propcalcLexer._serializedATN));
            }
            return propcalcLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    propcalcLexer.T__0 = 1;
    propcalcLexer.AND = 2;
    propcalcLexer.OR = 3;
    propcalcLexer.NOT = 4;
    propcalcLexer.EQ = 5;
    propcalcLexer.IMPLIES = 6;
    propcalcLexer.THEREFORE = 7;
    propcalcLexer.EQUIV = 8;
    propcalcLexer.LPAREN = 9;
    propcalcLexer.RPAREN = 10;
    propcalcLexer.LETTER = 11;
    propcalcLexer.WS = 12;
    // tslint:disable:no-trailing-whitespace
    propcalcLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    propcalcLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    propcalcLexer.ruleNames = [
        "T__0", "AND", "OR", "NOT", "EQ", "IMPLIES", "THEREFORE", "EQUIV", "LPAREN",
        "RPAREN", "LETTER", "WS",
    ];
    propcalcLexer._LITERAL_NAMES = [
        undefined, "','", "'^'", "'v'", "'!'", "'='", "'->'", "'|-'", "'<->'",
        "'('", "')'",
    ];
    propcalcLexer._SYMBOLIC_NAMES = [
        undefined, undefined, "AND", "OR", "NOT", "EQ", "IMPLIES", "THEREFORE",
        "EQUIV", "LPAREN", "RPAREN", "LETTER", "WS",
    ];
    propcalcLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(propcalcLexer._LITERAL_NAMES, propcalcLexer._SYMBOLIC_NAMES, []);
    propcalcLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E=\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
        "\t\x03\n\x03\n\x03\v\x03\v\x03\f\x05\f5\n\f\x03\r\x06\r8\n\r\r\r\x0E\r" +
        "9\x03\r\x03\r\x02\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
        "\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
        "\r\x19\x02\x0E\x03\x02\x04\x04\x02C\\c|\x05\x02\v\f\x0F\x0F\"\"\x02=\x02" +
        "\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
        "\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
        "\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
        "\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B" +
        "\x03\x02\x02\x02\x05\x1D\x03\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03" +
        "\x02\x02\x02\v#\x03\x02\x02\x02\r%\x03\x02\x02\x02\x0F(\x03\x02\x02\x02" +
        "\x11+\x03\x02\x02\x02\x13/\x03\x02\x02\x02\x151\x03\x02\x02\x02\x174\x03" +
        "\x02\x02\x02\x197\x03\x02\x02\x02\x1B\x1C\x07.\x02\x02\x1C\x04\x03\x02" +
        "\x02\x02\x1D\x1E\x07`\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \x07x\x02\x02" +
        " \b\x03\x02\x02\x02!\"\x07#\x02\x02\"\n\x03\x02\x02\x02#$\x07?\x02\x02" +
        "$\f\x03\x02\x02\x02%&\x07/\x02\x02&\'\x07@\x02\x02\'\x0E\x03\x02\x02\x02" +
        "()\x07~\x02\x02)*\x07/\x02\x02*\x10\x03\x02\x02\x02+,\x07>\x02\x02,-\x07" +
        "/\x02\x02-.\x07@\x02\x02.\x12\x03\x02\x02\x02/0\x07*\x02\x020\x14\x03" +
        "\x02\x02\x0212\x07+\x02\x022\x16\x03\x02\x02\x0235\t\x02\x02\x0243\x03" +
        "\x02\x02\x025\x18\x03\x02\x02\x0268\t\x03\x02\x0276\x03\x02\x02\x0289" +
        "\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02" +
        ";<\b\r\x02\x02<\x1A\x03\x02\x02\x02\x05\x0249\x03\x02\x03\x02";
    return propcalcLexer;
}(Lexer_1.Lexer));
exports.propcalcLexer = propcalcLexer;
