"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lambda/lambda.g4 by ANTLR 4.7.3-SNAPSHOT
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
var lambdaLexer = /** @class */ (function (_super) {
    __extends(lambdaLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function lambdaLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(lambdaLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(lambdaLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return lambdaLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "lambda.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return lambdaLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return lambdaLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaLexer.prototype, "channelNames", {
        // @Override
        get: function () { return lambdaLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaLexer.prototype, "modeNames", {
        // @Override
        get: function () { return lambdaLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaLexer, "_ATN", {
        get: function () {
            if (!lambdaLexer.__ATN) {
                lambdaLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(lambdaLexer._serializedATN));
            }
            return lambdaLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    lambdaLexer.T__0 = 1;
    lambdaLexer.T__1 = 2;
    lambdaLexer.T__2 = 3;
    lambdaLexer.T__3 = 4;
    lambdaLexer.VARIABLE = 5;
    lambdaLexer.WS = 6;
    // tslint:disable:no-trailing-whitespace
    lambdaLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    lambdaLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    lambdaLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "VARIABLE", "WS",
    ];
    lambdaLexer._LITERAL_NAMES = [
        undefined, "'\u03BB'", "'.'", "'('", "')'",
    ];
    lambdaLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "VARIABLE", "WS",
    ];
    lambdaLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(lambdaLexer._LITERAL_NAMES, lambdaLexer._SYMBOLIC_NAMES, []);
    lambdaLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b\"\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03" +
        "\x05\x03\x06\x03\x06\x07\x06\x1A\n\x06\f\x06\x0E\x06\x1D\v\x06\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x03\x02\x03\x05\x02\x04\x07\x02" +
        "\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x05\x03\x02c|\x05\x022;C\\c|" +
        "\x05\x02\v\f\x0F\x0F\"\"\x02\"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
        "\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
        "\x02\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05\x11\x03\x02\x02" +
        "\x02\x07\x13\x03\x02\x02\x02\t\x15\x03\x02\x02\x02\v\x17\x03\x02\x02\x02" +
        "\r\x1E\x03\x02\x02\x02\x0F\x10\x07\u03BD\x02\x02\x10\x04\x03\x02\x02\x02" +
        "\x11\x12\x070\x02\x02\x12\x06\x03\x02\x02\x02\x13\x14\x07*\x02\x02\x14" +
        "\b\x03\x02\x02\x02\x15\x16\x07+\x02\x02\x16\n\x03\x02\x02\x02\x17\x1B" +
        "\t\x02\x02\x02\x18\x1A\t\x03\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1D\x03" +
        "\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\f\x03" +
        "\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\t\x04\x02\x02\x1F \x03\x02" +
        "\x02\x02 !\b\x07\x02\x02!\x0E\x03\x02\x02\x02\x04\x02\x1B\x03\b\x02\x02";
    return lambdaLexer;
}(Lexer_1.Lexer));
exports.lambdaLexer = lambdaLexer;
