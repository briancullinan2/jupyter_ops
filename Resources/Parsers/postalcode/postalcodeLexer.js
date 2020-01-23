"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/postalcode/postalcode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var postalcodeLexer = /** @class */ (function (_super) {
    __extends(postalcodeLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function postalcodeLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(postalcodeLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(postalcodeLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return postalcodeLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "postalcode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return postalcodeLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return postalcodeLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeLexer.prototype, "channelNames", {
        // @Override
        get: function () { return postalcodeLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeLexer.prototype, "modeNames", {
        // @Override
        get: function () { return postalcodeLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeLexer, "_ATN", {
        get: function () {
            if (!postalcodeLexer.__ATN) {
                postalcodeLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(postalcodeLexer._serializedATN));
            }
            return postalcodeLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    postalcodeLexer.DIGIT = 1;
    postalcodeLexer.LETTER = 2;
    postalcodeLexer.WS = 3;
    // tslint:disable:no-trailing-whitespace
    postalcodeLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    postalcodeLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    postalcodeLexer.ruleNames = [
        "DIGIT", "LETTER", "WS",
    ];
    postalcodeLexer._LITERAL_NAMES = [];
    postalcodeLexer._SYMBOLIC_NAMES = [
        undefined, "DIGIT", "LETTER", "WS",
    ];
    postalcodeLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(postalcodeLexer._LITERAL_NAMES, postalcodeLexer._SYMBOLIC_NAMES, []);
    postalcodeLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x05\x11\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x03\x04\x03\x04\x03\x04\x03\x04\x02\x02\x02\x05\x03\x02\x03\x05\x02" +
        "\x04\x07\x02\x05\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02\x10\x02\x03\x03" +
        "\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x03\t\x03" +
        "\x02\x02\x02\x05\v\x03\x02\x02\x02\x07\r\x03\x02\x02\x02\t\n\x042;\x02" +
        "\n\x04\x03\x02\x02\x02\v\f\x04C\\\x02\f\x06\x03\x02\x02\x02\r\x0E\t\x02" +
        "\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x10\b\x04\x02\x02\x10\b\x03\x02\x02" +
        "\x02\x03\x02\x03\b\x02\x02";
    return postalcodeLexer;
}(Lexer_1.Lexer));
exports.postalcodeLexer = postalcodeLexer;
