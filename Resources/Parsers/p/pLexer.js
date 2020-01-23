"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/p/p.g4 by ANTLR 4.7.3-SNAPSHOT
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
var pLexer = /** @class */ (function (_super) {
    __extends(pLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function pLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(pLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(pLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return pLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "p.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return pLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return pLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pLexer.prototype, "channelNames", {
        // @Override
        get: function () { return pLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pLexer.prototype, "modeNames", {
        // @Override
        get: function () { return pLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pLexer, "_ATN", {
        get: function () {
            if (!pLexer.__ATN) {
                pLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(pLexer._serializedATN));
            }
            return pLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    pLexer.T__0 = 1;
    pLexer.T__1 = 2;
    pLexer.R = 3;
    pLexer.L = 4;
    pLexer.WS = 5;
    // tslint:disable:no-trailing-whitespace
    pLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    pLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    pLexer.ruleNames = [
        "T__0", "T__1", "R", "L", "WS",
    ];
    pLexer._LITERAL_NAMES = [
        undefined, "'('", "')'", "'R'", "'\u03BB'",
    ];
    pLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "R", "L", "WS",
    ];
    pLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(pLexer._LITERAL_NAMES, pLexer._SYMBOLIC_NAMES, []);
    pLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07\x19\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07\x03\x02\x03\x05\x02\x04\x07\x02" +
        "\x05\t\x02\x06\v\x02\x07\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02\x18\x02" +
        "\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
        "\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05\x0F" +
        "\x03\x02\x02\x02\x07\x11\x03\x02\x02\x02\t\x13\x03\x02\x02\x02\v\x15\x03" +
        "\x02\x02\x02\r\x0E\x07*\x02\x02\x0E\x04\x03\x02\x02\x02\x0F\x10\x07+\x02" +
        "\x02\x10\x06\x03\x02\x02\x02\x11\x12\x07T\x02\x02\x12\b\x03\x02\x02\x02" +
        "\x13\x14\x07\u03BD\x02\x02\x14\n\x03\x02\x02\x02\x15\x16\t\x02\x02\x02" +
        "\x16\x17\x03\x02\x02\x02\x17\x18\b\x06\x02\x02\x18\f\x03\x02\x02\x02\x03" +
        "\x02\x03\b\x02\x02";
    return pLexer;
}(Lexer_1.Lexer));
exports.pLexer = pLexer;
