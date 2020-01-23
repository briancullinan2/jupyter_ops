"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tiny/tiny.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tinyLexer = /** @class */ (function (_super) {
    __extends(tinyLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function tinyLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(tinyLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(tinyLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tinyLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "tiny.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return tinyLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return tinyLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyLexer.prototype, "channelNames", {
        // @Override
        get: function () { return tinyLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyLexer.prototype, "modeNames", {
        // @Override
        get: function () { return tinyLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinyLexer, "_ATN", {
        get: function () {
            if (!tinyLexer.__ATN) {
                tinyLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tinyLexer._serializedATN));
            }
            return tinyLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tinyLexer.T__0 = 1;
    tinyLexer.T__1 = 2;
    tinyLexer.T__2 = 3;
    tinyLexer.T__3 = 4;
    tinyLexer.T__4 = 5;
    tinyLexer.T__5 = 6;
    tinyLexer.T__6 = 7;
    tinyLexer.T__7 = 8;
    tinyLexer.ID = 9;
    tinyLexer.NUMBER = 10;
    tinyLexer.WS = 11;
    // tslint:disable:no-trailing-whitespace
    tinyLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    tinyLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    tinyLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "ID",
        "NUMBER", "WS",
    ];
    tinyLexer._LITERAL_NAMES = [
        undefined, "'BEGIN'", "'END'", "':='", "'READ'", "'WRITE'", "','", "'-'",
        "'+'",
    ];
    tinyLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "ID", "NUMBER", "WS",
    ];
    tinyLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tinyLexer._LITERAL_NAMES, tinyLexer._SYMBOLIC_NAMES, []);
    tinyLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rE\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
        "\x03\t\x03\n\x06\n9\n\n\r\n\x0E\n:\x03\v\x06\v>\n\v\r\v\x0E\v?\x03\f\x03" +
        "\f\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
        "\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
        "\r\x03\x02\x04\x04\x02C\\c|\x05\x02\f\f\x0F\x0F\"\"\x02F\x02\x03\x03\x02" +
        "\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
        "\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
        "\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
        "\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1F\x03\x02\x02" +
        "\x02\x07#\x03\x02\x02\x02\t&\x03\x02\x02\x02\v+\x03\x02\x02\x02\r1\x03" +
        "\x02\x02\x02\x0F3\x03\x02\x02\x02\x115\x03\x02\x02\x02\x138\x03\x02\x02" +
        "\x02\x15=\x03\x02\x02\x02\x17A\x03\x02\x02\x02\x19\x1A\x07D\x02\x02\x1A" +
        "\x1B\x07G\x02\x02\x1B\x1C\x07I\x02\x02\x1C\x1D\x07K\x02\x02\x1D\x1E\x07" +
        "P\x02\x02\x1E\x04\x03\x02\x02\x02\x1F \x07G\x02\x02 !\x07P\x02\x02!\"" +
        "\x07F\x02\x02\"\x06\x03\x02\x02\x02#$\x07<\x02\x02$%\x07?\x02\x02%\b\x03" +
        "\x02\x02\x02&\'\x07T\x02\x02\'(\x07G\x02\x02()\x07C\x02\x02)*\x07F\x02" +
        "\x02*\n\x03\x02\x02\x02+,\x07Y\x02\x02,-\x07T\x02\x02-.\x07K\x02\x02." +
        "/\x07V\x02\x02/0\x07G\x02\x020\f\x03\x02\x02\x0212\x07.\x02\x022\x0E\x03" +
        "\x02\x02\x0234\x07/\x02\x024\x10\x03\x02\x02\x0256\x07-\x02\x026\x12\x03" +
        "\x02\x02\x0279\t\x02\x02\x0287\x03\x02\x02\x029:\x03\x02\x02\x02:8\x03" +
        "\x02\x02\x02:;\x03\x02\x02\x02;\x14\x03\x02\x02\x02<>\x042;\x02=<\x03" +
        "\x02\x02\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x16" +
        "\x03\x02\x02\x02AB\t\x03\x02\x02BC\x03\x02\x02\x02CD\b\f\x02\x02D\x18" +
        "\x03\x02\x02\x02\x05\x02:?\x03\b\x02\x02";
    return tinyLexer;
}(Lexer_1.Lexer));
exports.tinyLexer = tinyLexer;
