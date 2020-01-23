"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muddb/muddb.g4 by ANTLR 4.7.3-SNAPSHOT
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
var muddbLexer = /** @class */ (function (_super) {
    __extends(muddbLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function muddbLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(muddbLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(muddbLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return muddbLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "muddb.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return muddbLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return muddbLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbLexer.prototype, "channelNames", {
        // @Override
        get: function () { return muddbLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbLexer.prototype, "modeNames", {
        // @Override
        get: function () { return muddbLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(muddbLexer, "_ATN", {
        get: function () {
            if (!muddbLexer.__ATN) {
                muddbLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(muddbLexer._serializedATN));
            }
            return muddbLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    muddbLexer.END = 1;
    muddbLexer.NUM = 2;
    muddbLexer.STRING = 3;
    muddbLexer.EOL = 4;
    // tslint:disable:no-trailing-whitespace
    muddbLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    muddbLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    muddbLexer.ruleNames = [
        "END", "NUM", "STRING", "EOL",
    ];
    muddbLexer._LITERAL_NAMES = [
        undefined, "'***END OF DUMP***'",
    ];
    muddbLexer._SYMBOLIC_NAMES = [
        undefined, "END", "NUM", "STRING", "EOL",
    ];
    muddbLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(muddbLexer._LITERAL_NAMES, muddbLexer._SYMBOLIC_NAMES, []);
    muddbLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06/\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x05\x03\x1F" +
        "\n\x03\x03\x03\x06\x03\"\n\x03\r\x03\x0E\x03#\x03\x04\x06\x04\'\n\x04" +
        "\r\x04\x0E\x04(\x03\x05\x05\x05,\n\x05\x03\x05\x03\x05\x02\x02\x02\x06" +
        "\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\x03\x02\x04\x03\x022;\b" +
        "\x02\v\v\"%)]__a}\x7F\x7F\x022\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
        "\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x03\v\x03\x02\x02" +
        "\x02\x05\x1E\x03\x02\x02\x02\x07&\x03\x02\x02\x02\t+\x03\x02\x02\x02\v" +
        "\f\x07,\x02\x02\f\r\x07,\x02\x02\r\x0E\x07,\x02\x02\x0E\x0F\x07G\x02\x02" +
        "\x0F\x10\x07P\x02\x02\x10\x11\x07F\x02\x02\x11\x12\x07\"\x02\x02\x12\x13" +
        "\x07Q\x02\x02\x13\x14\x07H\x02\x02\x14\x15\x07\"\x02\x02\x15\x16\x07F" +
        "\x02\x02\x16\x17\x07W\x02\x02\x17\x18\x07O\x02\x02\x18\x19\x07R\x02\x02" +
        "\x19\x1A\x07,\x02\x02\x1A\x1B\x07,\x02\x02\x1B\x1C\x07,\x02\x02\x1C\x04" +
        "\x03\x02\x02\x02\x1D\x1F\x07/\x02\x02\x1E\x1D\x03\x02\x02\x02\x1E\x1F" +
        "\x03\x02\x02\x02\x1F!\x03\x02\x02\x02 \"\t\x02\x02\x02! \x03\x02\x02\x02" +
        "\"#\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\x06\x03\x02\x02" +
        "\x02%\'\t\x03\x02\x02&%\x03\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02" +
        "\x02()\x03\x02\x02\x02)\b\x03\x02\x02\x02*,\x07\x0F\x02\x02+*\x03\x02" +
        "\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x07\f\x02\x02.\n\x03\x02" +
        "\x02\x02\x07\x02\x1E#(+\x02";
    return muddbLexer;
}(Lexer_1.Lexer));
exports.muddbLexer = muddbLexer;
