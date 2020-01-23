"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/telephone/telephone.g4 by ANTLR 4.7.3-SNAPSHOT
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
var telephoneLexer = /** @class */ (function (_super) {
    __extends(telephoneLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function telephoneLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(telephoneLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(telephoneLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return telephoneLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "telephone.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return telephoneLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return telephoneLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneLexer.prototype, "channelNames", {
        // @Override
        get: function () { return telephoneLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneLexer.prototype, "modeNames", {
        // @Override
        get: function () { return telephoneLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(telephoneLexer, "_ATN", {
        get: function () {
            if (!telephoneLexer.__ATN) {
                telephoneLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(telephoneLexer._serializedATN));
            }
            return telephoneLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    telephoneLexer.T__0 = 1;
    telephoneLexer.T__1 = 2;
    telephoneLexer.T__2 = 3;
    telephoneLexer.T__3 = 4;
    telephoneLexer.DIGIT = 5;
    telephoneLexer.WS = 6;
    // tslint:disable:no-trailing-whitespace
    telephoneLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    telephoneLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    telephoneLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "DIGIT", "WS",
    ];
    telephoneLexer._LITERAL_NAMES = [
        undefined, "'+1'", "'+'", "'011'", "'010'",
    ];
    telephoneLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "DIGIT", "WS",
    ];
    telephoneLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(telephoneLexer._LITERAL_NAMES, telephoneLexer._SYMBOLIC_NAMES, []);
    telephoneLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b%\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x06" +
        "\x07 \n\x07\r\x07\x0E\x07!\x03\x07\x03\x07\x02\x02\x02\b\x03\x02\x03\x05" +
        "\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x04\x03\x022" +
        ";\x05\x02\f\f\x0F\x0F\"\"\x02%\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
        "\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
        "\x02\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05\x12\x03\x02\x02" +
        "\x02\x07\x14\x03\x02\x02\x02\t\x18\x03\x02\x02\x02\v\x1C\x03\x02\x02\x02" +
        "\r\x1F\x03\x02\x02\x02\x0F\x10\x07-\x02\x02\x10\x11\x073\x02\x02\x11\x04" +
        "\x03\x02\x02\x02\x12\x13\x07-\x02\x02\x13\x06\x03\x02\x02\x02\x14\x15" +
        "\x072\x02\x02\x15\x16\x073\x02\x02\x16\x17\x073\x02\x02\x17\b\x03\x02" +
        "\x02\x02\x18\x19\x072\x02\x02\x19\x1A\x073\x02\x02\x1A\x1B\x072\x02\x02" +
        "\x1B\n\x03\x02\x02\x02\x1C\x1D\t\x02\x02\x02\x1D\f\x03\x02\x02\x02\x1E" +
        " \t\x03\x02\x02\x1F\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x1F\x03\x02" +
        "\x02\x02!\"\x03\x02\x02\x02\"#\x03\x02\x02\x02#$\b\x07\x02\x02$\x0E\x03" +
        "\x02\x02\x02\x04\x02!\x03\b\x02\x02";
    return telephoneLexer;
}(Lexer_1.Lexer));
exports.telephoneLexer = telephoneLexer;
