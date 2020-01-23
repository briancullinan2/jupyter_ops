"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cookie/cookie.g4 by ANTLR 4.7.3-SNAPSHOT
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
var cookieLexer = /** @class */ (function (_super) {
    __extends(cookieLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function cookieLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(cookieLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(cookieLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return cookieLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "cookie.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return cookieLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return cookieLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieLexer.prototype, "channelNames", {
        // @Override
        get: function () { return cookieLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieLexer.prototype, "modeNames", {
        // @Override
        get: function () { return cookieLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cookieLexer, "_ATN", {
        get: function () {
            if (!cookieLexer.__ATN) {
                cookieLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(cookieLexer._serializedATN));
            }
            return cookieLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    cookieLexer.T__0 = 1;
    cookieLexer.T__1 = 2;
    cookieLexer.STRING = 3;
    cookieLexer.TOKEN = 4;
    cookieLexer.DIGIT = 5;
    cookieLexer.WS = 6;
    // tslint:disable:no-trailing-whitespace
    cookieLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    cookieLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    cookieLexer.ruleNames = [
        "T__0", "T__1", "STRING", "TOKEN", "DIGIT", "WS",
    ];
    cookieLexer._LITERAL_NAMES = [
        undefined, "';'", "'='",
    ];
    cookieLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "STRING", "TOKEN", "DIGIT", "WS",
    ];
    cookieLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(cookieLexer._LITERAL_NAMES, cookieLexer._SYMBOLIC_NAMES, []);
    cookieLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b\'\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04\x16" +
        "\n\x04\f\x04\x0E\x04\x19\v\x04\x03\x04\x03\x04\x03\x05\x06\x05\x1E\n\x05" +
        "\r\x05\x0E\x05\x1F\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x02" +
        "\x02\x02\b\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02" +
        "\b\x03\x02\x05\x04\x02\f\f$$\b\x02\"\"./1<C\\aac|\x04\x02\v\f\x0F\x0F" +
        "\x02(\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
        "\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
        "\x02\x03\x0F\x03\x02\x02\x02\x05\x11\x03\x02\x02\x02\x07\x13\x03\x02\x02" +
        "\x02\t\x1D\x03\x02\x02\x02\v!\x03\x02\x02\x02\r#\x03\x02\x02\x02\x0F\x10" +
        "\x07=\x02\x02\x10\x04\x03\x02\x02\x02\x11\x12\x07?\x02\x02\x12\x06\x03" +
        "\x02\x02\x02\x13\x17\x07$\x02\x02\x14\x16\n\x02\x02\x02\x15\x14\x03\x02" +
        "\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02" +
        "\x02\x02\x18\x1A\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x1A\x1B\x07$" +
        "\x02\x02\x1B\b\x03\x02\x02\x02\x1C\x1E\t\x03\x02\x02\x1D\x1C\x03\x02\x02" +
        "\x02\x1E\x1F\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02" +
        "\x02 \n\x03\x02\x02\x02!\"\x042;\x02\"\f\x03\x02\x02\x02#$\t\x04\x02\x02" +
        "$%\x03\x02\x02\x02%&\b\x07\x02\x02&\x0E\x03\x02\x02\x02\x05\x02\x17\x1F" +
        "\x03\b\x02\x02";
    return cookieLexer;
}(Lexer_1.Lexer));
exports.cookieLexer = cookieLexer;
