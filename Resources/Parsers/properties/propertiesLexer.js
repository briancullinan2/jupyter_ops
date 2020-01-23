"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/properties/properties.g4 by ANTLR 4.7.3-SNAPSHOT
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
var propertiesLexer = /** @class */ (function (_super) {
    __extends(propertiesLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function propertiesLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(propertiesLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(propertiesLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return propertiesLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "properties.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return propertiesLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return propertiesLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesLexer.prototype, "channelNames", {
        // @Override
        get: function () { return propertiesLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesLexer.prototype, "modeNames", {
        // @Override
        get: function () { return propertiesLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesLexer, "_ATN", {
        get: function () {
            if (!propertiesLexer.__ATN) {
                propertiesLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(propertiesLexer._serializedATN));
            }
            return propertiesLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    propertiesLexer.T__0 = 1;
    propertiesLexer.TEXT = 2;
    propertiesLexer.STRING = 3;
    propertiesLexer.COMMENT = 4;
    propertiesLexer.TERMINATOR = 5;
    // tslint:disable:no-trailing-whitespace
    propertiesLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    propertiesLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    propertiesLexer.ruleNames = [
        "T__0", "TEXT", "STRING", "COMMENT", "TERMINATOR",
    ];
    propertiesLexer._LITERAL_NAMES = [
        undefined, "'='",
    ];
    propertiesLexer._SYMBOLIC_NAMES = [
        undefined, undefined, "TEXT", "STRING", "COMMENT", "TERMINATOR",
    ];
    propertiesLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(propertiesLexer._LITERAL_NAMES, propertiesLexer._SYMBOLIC_NAMES, []);
    propertiesLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07-\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03" +
        "\x02\x03\x02\x03\x03\x06\x03\x11\n\x03\r\x03\x0E\x03\x12\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x07\x04\x19\n\x04\f\x04\x0E\x04\x1C\v\x04\x03\x04\x03" +
        "\x04\x03\x05\x03\x05\x07\x05\"\n\x05\f\x05\x0E\x05%\v\x05\x03\x06\x06" +
        "\x06(\n\x06\r\x06\x0E\x06)\x03\x06\x03\x06\x02\x02\x02\x07\x03\x02\x03" +
        "\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\x03\x02\x05\t\x02\"\"\'\'" +
        ".<B\\aac}\x7F\x7F\x03\x02$$\x04\x02\f\f\x0F\x0F\x021\x02\x03\x03\x02\x02" +
        "\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
        "\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05\x10\x03\x02\x02\x02" +
        "\x07\x14\x03\x02\x02\x02\t\x1F\x03\x02\x02\x02\v\'\x03\x02\x02\x02\r\x0E" +
        "\x07?\x02\x02\x0E\x04\x03\x02\x02\x02\x0F\x11\t\x02\x02\x02\x10\x0F\x03" +
        "\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03" +
        "\x02\x02\x02\x13\x06\x03\x02\x02\x02\x14\x1A\x07$\x02\x02\x15\x16\x07" +
        "$\x02\x02\x16\x19\x07$\x02\x02\x17\x19\n\x03\x02\x02\x18\x15\x03\x02\x02" +
        "\x02\x18\x17\x03\x02\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02\x02" +
        "\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1D\x03\x02\x02\x02\x1C\x1A\x03\x02\x02" +
        "\x02\x1D\x1E\x07$\x02\x02\x1E\b\x03\x02\x02\x02\x1F#\x07%\x02\x02 \"\n" +
        "\x04\x02\x02! \x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$" +
        "\x03\x02\x02\x02$\n\x03\x02\x02\x02%#\x03\x02\x02\x02&(\t\x04\x02\x02" +
        "\'&\x03\x02\x02\x02()\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02" +
        "\x02*+\x03\x02\x02\x02+,\b\x06\x02\x02,\f\x03\x02\x02\x02\b\x02\x12\x18" +
        "\x1A#)\x03\x02\x03\x02";
    return propertiesLexer;
}(Lexer_1.Lexer));
exports.propertiesLexer = propertiesLexer;
