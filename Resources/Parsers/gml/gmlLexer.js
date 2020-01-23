"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gml/gml.g4 by ANTLR 4.7.3-SNAPSHOT
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
var gmlLexer = /** @class */ (function (_super) {
    __extends(gmlLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function gmlLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(gmlLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(gmlLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return gmlLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "gml.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return gmlLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return gmlLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlLexer.prototype, "channelNames", {
        // @Override
        get: function () { return gmlLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlLexer.prototype, "modeNames", {
        // @Override
        get: function () { return gmlLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gmlLexer, "_ATN", {
        get: function () {
            if (!gmlLexer.__ATN) {
                gmlLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(gmlLexer._serializedATN));
            }
            return gmlLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    gmlLexer.T__0 = 1;
    gmlLexer.T__1 = 2;
    gmlLexer.STRINGLITERAL = 3;
    gmlLexer.REAL = 4;
    gmlLexer.SIGN = 5;
    gmlLexer.DIGIT = 6;
    gmlLexer.MANTISSA = 7;
    gmlLexer.VALUE = 8;
    gmlLexer.WS = 9;
    // tslint:disable:no-trailing-whitespace
    gmlLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    gmlLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    gmlLexer.ruleNames = [
        "T__0", "T__1", "STRINGLITERAL", "REAL", "SIGN", "DIGIT", "MANTISSA",
        "VALUE", "WS",
    ];
    gmlLexer._LITERAL_NAMES = [
        undefined, "'['", "']'",
    ];
    gmlLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "STRINGLITERAL", "REAL", "SIGN", "DIGIT",
        "MANTISSA", "VALUE", "WS",
    ];
    gmlLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(gmlLexer._LITERAL_NAMES, gmlLexer._SYMBOLIC_NAMES, []);
    gmlLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\vE\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03" +
        "\x03\x04\x03\x04\x07\x04\x1C\n\x04\f\x04\x0E\x04\x1F\v\x04\x03\x04\x03" +
        "\x04\x03\x05\x05\x05$\n\x05\x03\x05\x07\x05\'\n\x05\f\x05\x0E\x05*\v\x05" +
        "\x03\x05\x03\x05\x06\x05.\n\x05\r\x05\x0E\x05/\x03\x05\x05\x053\n\x05" +
        "\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x06\t>" +
        "\n\t\r\t\x0E\t?\x03\n\x03\n\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05" +
        "\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
        "\x02\v\x03\x02\x07\x03\x02$$\x04\x02--//\x03\x022;\x05\x022;C\\c|\x05" +
        "\x02\v\f\x0F\x0F\"\"\x02J\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
        "\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
        "\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
        "\x02\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x17\x03\x02\x02\x02" +
        "\x07\x19\x03\x02\x02\x02\t#\x03\x02\x02\x02\v4\x03\x02\x02\x02\r6\x03" +
        "\x02\x02\x02\x0F8\x03\x02\x02\x02\x11=\x03\x02\x02\x02\x13A\x03\x02\x02" +
        "\x02\x15\x16\x07]\x02\x02\x16\x04\x03\x02\x02\x02\x17\x18\x07_\x02\x02" +
        "\x18\x06\x03\x02\x02\x02\x19\x1D\x07$\x02\x02\x1A\x1C\n\x02\x02\x02\x1B" +
        "\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D" +
        "\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07" +
        "$\x02\x02!\b\x03\x02\x02\x02\"$\x05\v\x06\x02#\"\x03\x02\x02\x02#$\x03" +
        "\x02\x02\x02$(\x03\x02\x02\x02%\'\x05\r\x07\x02&%\x03\x02\x02\x02\'*\x03" +
        "\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02\x02\x02*(\x03" +
        "\x02\x02\x02+-\x070\x02\x02,.\x05\r\x07\x02-,\x03\x02\x02\x02./\x03\x02" +
        "\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02\x02\x0213\x05\x0F" +
        "\b\x0221\x03\x02\x02\x0223\x03\x02\x02\x023\n\x03\x02\x02\x0245\t\x03" +
        "\x02\x025\f\x03\x02\x02\x0267\t\x04\x02\x027\x0E\x03\x02\x02\x0289\x07" +
        "G\x02\x029:\x05\v\x06\x02:;\x05\r\x07\x02;\x10\x03\x02\x02\x02<>\t\x05" +
        "\x02\x02=<\x03\x02\x02\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02" +
        "\x02\x02@\x12\x03\x02\x02\x02AB\t\x06\x02\x02BC\x03\x02\x02\x02CD\b\n" +
        "\x02\x02D\x14\x03\x02\x02\x02\t\x02\x1D#(/2?\x03\b\x02\x02";
    return gmlLexer;
}(Lexer_1.Lexer));
exports.gmlLexer = gmlLexer;
