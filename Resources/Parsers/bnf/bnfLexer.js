"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/bnf/bnf.g4 by ANTLR 4.7.3-SNAPSHOT
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
var bnfLexer = /** @class */ (function (_super) {
    __extends(bnfLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function bnfLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(bnfLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(bnfLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return bnfLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "bnf.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return bnfLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return bnfLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfLexer.prototype, "channelNames", {
        // @Override
        get: function () { return bnfLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfLexer.prototype, "modeNames", {
        // @Override
        get: function () { return bnfLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(bnfLexer, "_ATN", {
        get: function () {
            if (!bnfLexer.__ATN) {
                bnfLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(bnfLexer._serializedATN));
            }
            return bnfLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    bnfLexer.ASSIGN = 1;
    bnfLexer.LPAREN = 2;
    bnfLexer.RPAREN = 3;
    bnfLexer.LBRACE = 4;
    bnfLexer.RBRACE = 5;
    bnfLexer.LEND = 6;
    bnfLexer.REND = 7;
    bnfLexer.BAR = 8;
    bnfLexer.GT = 9;
    bnfLexer.LT = 10;
    bnfLexer.ID = 11;
    bnfLexer.WS = 12;
    // tslint:disable:no-trailing-whitespace
    bnfLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    bnfLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    bnfLexer.ruleNames = [
        "ASSIGN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LEND", "REND", "BAR",
        "GT", "LT", "ID", "WS",
    ];
    bnfLexer._LITERAL_NAMES = [
        undefined, "'::='", "')'", "'('", "'}'", "'{'", "']'", "'['", "'|'", "'>'",
        "'<'",
    ];
    bnfLexer._SYMBOLIC_NAMES = [
        undefined, "ASSIGN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LEND", "REND",
        "BAR", "GT", "LT", "ID", "WS",
    ];
    bnfLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(bnfLexer._LITERAL_NAMES, bnfLexer._SYMBOLIC_NAMES, []);
    bnfLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E;\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n" +
        "\x03\n\x03\v\x03\v\x03\f\x03\f\x06\f4\n\f\r\f\x0E\f5\x03\r\x03\r\x03\r" +
        "\x03\r\x02\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v" +
        "\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
        "\x02\x0E\x03\x02\x05\x04\x02C\\c|\x07\x02\"\"//2;C\\c|\x05\x02\v\f\x0F" +
        "\x0F\"\"\x02;\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
        "\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
        "\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
        "\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
        "\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1F\x03\x02\x02\x02\x07!\x03" +
        "\x02\x02\x02\t#\x03\x02\x02\x02\v%\x03\x02\x02\x02\r\'\x03\x02\x02\x02" +
        "\x0F)\x03\x02\x02\x02\x11+\x03\x02\x02\x02\x13-\x03\x02\x02\x02\x15/\x03" +
        "\x02\x02\x02\x171\x03\x02\x02\x02\x197\x03\x02\x02\x02\x1B\x1C\x07<\x02" +
        "\x02\x1C\x1D\x07<\x02\x02\x1D\x1E\x07?\x02\x02\x1E\x04\x03\x02\x02\x02" +
        "\x1F \x07+\x02\x02 \x06\x03\x02\x02\x02!\"\x07*\x02\x02\"\b\x03\x02\x02" +
        "\x02#$\x07\x7F\x02\x02$\n\x03\x02\x02\x02%&\x07}\x02\x02&\f\x03\x02\x02" +
        "\x02\'(\x07_\x02\x02(\x0E\x03\x02\x02\x02)*\x07]\x02\x02*\x10\x03\x02" +
        "\x02\x02+,\x07~\x02\x02,\x12\x03\x02\x02\x02-.\x07@\x02\x02.\x14\x03\x02" +
        "\x02\x02/0\x07>\x02\x020\x16\x03\x02\x02\x0213\t\x02\x02\x0224\t\x03\x02" +
        "\x0232\x03\x02\x02\x0245\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02" +
        "\x026\x18\x03\x02\x02\x0278\t\x04\x02\x0289\x03\x02\x02\x029:\b\r\x02" +
        "\x02:\x1A\x03\x02\x02\x02\x04\x025\x03\b\x02\x02";
    return bnfLexer;
}(Lexer_1.Lexer));
exports.bnfLexer = bnfLexer;
