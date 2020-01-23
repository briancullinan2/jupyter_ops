"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/quakemap/quakemap.g4 by ANTLR 4.7.3-SNAPSHOT
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
var quakemapLexer = /** @class */ (function (_super) {
    __extends(quakemapLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function quakemapLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(quakemapLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(quakemapLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return quakemapLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "quakemap.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return quakemapLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return quakemapLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapLexer.prototype, "channelNames", {
        // @Override
        get: function () { return quakemapLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapLexer.prototype, "modeNames", {
        // @Override
        get: function () { return quakemapLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapLexer, "_ATN", {
        get: function () {
            if (!quakemapLexer.__ATN) {
                quakemapLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(quakemapLexer._serializedATN));
            }
            return quakemapLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    quakemapLexer.T__0 = 1;
    quakemapLexer.T__1 = 2;
    quakemapLexer.T__2 = 3;
    quakemapLexer.T__3 = 4;
    quakemapLexer.TEXT = 5;
    quakemapLexer.NUMBER = 6;
    quakemapLexer.STRING = 7;
    quakemapLexer.WS = 8;
    // tslint:disable:no-trailing-whitespace
    quakemapLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    quakemapLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    quakemapLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "TEXT", "NUMBER", "STRING", "WS",
    ];
    quakemapLexer._LITERAL_NAMES = [
        undefined, "'{'", "'}'", "'('", "')'",
    ];
    quakemapLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "TEXT", "NUMBER",
        "STRING", "WS",
    ];
    quakemapLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(quakemapLexer._LITERAL_NAMES, quakemapLexer._SYMBOLIC_NAMES, []);
    quakemapLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\nC\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04" +
        "\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x06\x06\x1E\n\x06\r\x06\x0E\x06" +
        "\x1F\x03\x07\x05\x07#\n\x07\x03\x07\x06\x07&\n\x07\r\x07\x0E\x07\'\x03" +
        "\x07\x03\x07\x06\x07,\n\x07\r\x07\x0E\x07-\x05\x070\n\x07\x03\b\x03\b" +
        "\x03\b\x03\b\x07\b6\n\b\f\b\x0E\b9\v\b\x03\b\x03\b\x03\t\x06\t>\n\t\r" +
        "\t\x0E\t?\x03\t\x03\t\x02\x02\x02\n\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
        "\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x03\x02\x07\x04\x02C" +
        "\\c|\x06\x022;C\\aac|\x04\x02--//\x03\x02$$\x05\x02\v\f\x0F\x0F\"\"\x02" +
        "J\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
        "\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
        "\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x03\x13\x03\x02\x02\x02" +
        "\x05\x15\x03\x02\x02\x02\x07\x17\x03\x02\x02\x02\t\x19\x03\x02\x02\x02" +
        "\v\x1B\x03\x02\x02\x02\r\"\x03\x02\x02\x02\x0F1\x03\x02\x02\x02\x11=\x03" +
        "\x02\x02\x02\x13\x14\x07}\x02\x02\x14\x04\x03\x02\x02\x02\x15\x16\x07" +
        "\x7F\x02\x02\x16\x06\x03\x02\x02\x02\x17\x18\x07*\x02\x02\x18\b\x03\x02" +
        "\x02\x02\x19\x1A\x07+\x02\x02\x1A\n\x03\x02\x02\x02\x1B\x1D\t\x02\x02" +
        "\x02\x1C\x1E\t\x03\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02" +
        "\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \f\x03\x02\x02\x02!" +
        "#\t\x04\x02\x02\"!\x03\x02\x02\x02\"#\x03\x02\x02\x02#%\x03\x02\x02\x02" +
        "$&\x042;\x02%$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'%\x03\x02\x02\x02\'" +
        "(\x03\x02\x02\x02(/\x03\x02\x02\x02)+\x070\x02\x02*,\x042;\x02+*\x03\x02" +
        "\x02\x02,-\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02" +
        "\x02\x02/)\x03\x02\x02\x02/0\x03\x02\x02\x020\x0E\x03\x02\x02\x0217\x07" +
        "$\x02\x0223\x07$\x02\x0236\x07$\x02\x0246\n\x05\x02\x0252\x03\x02\x02" +
        "\x0254\x03\x02\x02\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02" +
        "\x028:\x03\x02\x02\x0297\x03\x02\x02\x02:;\x07$\x02\x02;\x10\x03\x02\x02" +
        "\x02<>\t\x06\x02\x02=<\x03\x02\x02\x02>?\x03\x02\x02\x02?=\x03\x02\x02" +
        "\x02?@\x03\x02\x02\x02@A\x03\x02\x02\x02AB\b\t\x02\x02B\x12\x03\x02\x02" +
        "\x02\v\x02\x1F\"\'-/57?\x03\b\x02\x02";
    return quakemapLexer;
}(Lexer_1.Lexer));
exports.quakemapLexer = quakemapLexer;
