"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/romannumerals/romannumerals.g4 by ANTLR 4.7.3-SNAPSHOT
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
var romannumeralsLexer = /** @class */ (function (_super) {
    __extends(romannumeralsLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function romannumeralsLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(romannumeralsLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(romannumeralsLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return romannumeralsLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "romannumerals.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return romannumeralsLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return romannumeralsLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsLexer.prototype, "channelNames", {
        // @Override
        get: function () { return romannumeralsLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsLexer.prototype, "modeNames", {
        // @Override
        get: function () { return romannumeralsLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(romannumeralsLexer, "_ATN", {
        get: function () {
            if (!romannumeralsLexer.__ATN) {
                romannumeralsLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(romannumeralsLexer._serializedATN));
            }
            return romannumeralsLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    romannumeralsLexer.M = 1;
    romannumeralsLexer.CD = 2;
    romannumeralsLexer.D = 3;
    romannumeralsLexer.CM = 4;
    romannumeralsLexer.C = 5;
    romannumeralsLexer.CC = 6;
    romannumeralsLexer.CCC = 7;
    romannumeralsLexer.XL = 8;
    romannumeralsLexer.L = 9;
    romannumeralsLexer.XC = 10;
    romannumeralsLexer.X = 11;
    romannumeralsLexer.XX = 12;
    romannumeralsLexer.XXX = 13;
    romannumeralsLexer.IV = 14;
    romannumeralsLexer.V = 15;
    romannumeralsLexer.IX = 16;
    romannumeralsLexer.I = 17;
    romannumeralsLexer.II = 18;
    romannumeralsLexer.III = 19;
    romannumeralsLexer.WS = 20;
    // tslint:disable:no-trailing-whitespace
    romannumeralsLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    romannumeralsLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    romannumeralsLexer.ruleNames = [
        "M", "CD", "D", "CM", "C", "CC", "CCC", "XL", "L", "XC", "X", "XX", "XXX",
        "IV", "V", "IX", "I", "II", "III", "WS",
    ];
    romannumeralsLexer._LITERAL_NAMES = [
        undefined, "'M'", "'CD'", "'D'", "'CM'", "'C'", "'CC'", "'CCC'", "'XL'",
        "'L'", "'XC'", "'X'", "'XX'", "'XXX'", "'IV'", "'V'", "'IX'", "'I'", "'II'",
        "'III'",
    ];
    romannumeralsLexer._SYMBOLIC_NAMES = [
        undefined, "M", "CD", "D", "CM", "C", "CC", "CCC", "XL", "L", "XC", "X",
        "XX", "XXX", "IV", "V", "IX", "I", "II", "III", "WS",
    ];
    romannumeralsLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(romannumeralsLexer._LITERAL_NAMES, romannumeralsLexer._SYMBOLIC_NAMES, []);
    romannumeralsLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x16g\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
        "\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03" +
        "\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
        "\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
        "\x14\x03\x15\x06\x15b\n\x15\r\x15\x0E\x15c\x03\x15\x03\x15\x02\x02\x02" +
        "\x16\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
        "\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
        "\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16" +
        "\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02g\x02\x03\x03\x02\x02\x02\x02" +
        "\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
        "\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
        "\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
        "\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D" +
        "\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03" +
        "\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02" +
        "\x02\x03+\x03\x02\x02\x02\x05-\x03\x02\x02\x02\x070\x03\x02\x02\x02\t" +
        "2\x03\x02\x02\x02\v5\x03\x02\x02\x02\r7\x03\x02\x02\x02\x0F:\x03\x02\x02" +
        "\x02\x11>\x03\x02\x02\x02\x13A\x03\x02\x02\x02\x15C\x03\x02\x02\x02\x17" +
        "F\x03\x02\x02\x02\x19H\x03\x02\x02\x02\x1BK\x03\x02\x02\x02\x1DO\x03\x02" +
        "\x02\x02\x1FR\x03\x02\x02\x02!T\x03\x02\x02\x02#W\x03\x02\x02\x02%Y\x03" +
        "\x02\x02\x02\'\\\x03\x02\x02\x02)a\x03\x02\x02\x02+,\x07O\x02\x02,\x04" +
        "\x03\x02\x02\x02-.\x07E\x02\x02./\x07F\x02\x02/\x06\x03\x02\x02\x0201" +
        "\x07F\x02\x021\b\x03\x02\x02\x0223\x07E\x02\x0234\x07O\x02\x024\n\x03" +
        "\x02\x02\x0256\x07E\x02\x026\f\x03\x02\x02\x0278\x07E\x02\x0289\x07E\x02" +
        "\x029\x0E\x03\x02\x02\x02:;\x07E\x02\x02;<\x07E\x02\x02<=\x07E\x02\x02" +
        "=\x10\x03\x02\x02\x02>?\x07Z\x02\x02?@\x07N\x02\x02@\x12\x03\x02\x02\x02" +
        "AB\x07N\x02\x02B\x14\x03\x02\x02\x02CD\x07Z\x02\x02DE\x07E\x02\x02E\x16" +
        "\x03\x02\x02\x02FG\x07Z\x02\x02G\x18\x03\x02\x02\x02HI\x07Z\x02\x02IJ" +
        "\x07Z\x02\x02J\x1A\x03\x02\x02\x02KL\x07Z\x02\x02LM\x07Z\x02\x02MN\x07" +
        "Z\x02\x02N\x1C\x03\x02\x02\x02OP\x07K\x02\x02PQ\x07X\x02\x02Q\x1E\x03" +
        "\x02\x02\x02RS\x07X\x02\x02S \x03\x02\x02\x02TU\x07K\x02\x02UV\x07Z\x02" +
        "\x02V\"\x03\x02\x02\x02WX\x07K\x02\x02X$\x03\x02\x02\x02YZ\x07K\x02\x02" +
        "Z[\x07K\x02\x02[&\x03\x02\x02\x02\\]\x07K\x02\x02]^\x07K\x02\x02^_\x07" +
        "K\x02\x02_(\x03\x02\x02\x02`b\t\x02\x02\x02a`\x03\x02\x02\x02bc\x03\x02" +
        "\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\b\x15" +
        "\x02\x02f*\x03\x02\x02\x02\x04\x02c\x03\b\x02\x02";
    return romannumeralsLexer;
}(Lexer_1.Lexer));
exports.romannumeralsLexer = romannumeralsLexer;
