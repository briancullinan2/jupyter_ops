"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift-fin/src/main/antlr4/SwiftFinLexer.g4 by ANTLR 4.7.3-SNAPSHOT
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
var SwiftFinLexer = /** @class */ (function (_super) {
    __extends(SwiftFinLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function SwiftFinLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(SwiftFinLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(SwiftFinLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SwiftFinLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "SwiftFinLexer.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return SwiftFinLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return SwiftFinLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinLexer.prototype, "channelNames", {
        // @Override
        get: function () { return SwiftFinLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinLexer.prototype, "modeNames", {
        // @Override
        get: function () { return SwiftFinLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinLexer, "_ATN", {
        get: function () {
            if (!SwiftFinLexer.__ATN) {
                SwiftFinLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SwiftFinLexer._serializedATN));
            }
            return SwiftFinLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SwiftFinLexer.BLOCK1 = 1;
    SwiftFinLexer.BLOCK2 = 2;
    SwiftFinLexer.BLOCK3 = 3;
    SwiftFinLexer.BLOCK4_A = 4;
    SwiftFinLexer.BLOCK4_B = 5;
    SwiftFinLexer.BLOCK5 = 6;
    SwiftFinLexer.LBRACE = 7;
    SwiftFinLexer.RBRACE = 8;
    SwiftFinLexer.COLON = 9;
    SwiftFinLexer.CRLF = 10;
    SwiftFinLexer.M_COLON = 11;
    SwiftFinLexer.M_VALUE = 12;
    SwiftFinLexer.B4_END = 13;
    SwiftFinLexer.B4_COLON = 14;
    SwiftFinLexer.B4_CRLF = 15;
    SwiftFinLexer.B4_VALUE = 16;
    SwiftFinLexer.V_END = 17;
    SwiftFinLexer.V_VALUE = 18;
    SwiftFinLexer.InsideMaps = 1;
    SwiftFinLexer.InsideB4 = 2;
    SwiftFinLexer.InsideValue = 3;
    // tslint:disable:no-trailing-whitespace
    SwiftFinLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    SwiftFinLexer.modeNames = [
        "DEFAULT_MODE", "InsideMaps", "InsideB4", "InsideValue",
    ];
    SwiftFinLexer.ruleNames = [
        "BLOCK1", "BLOCK2", "BLOCK3", "Block4", "BLOCK4_A", "BLOCK4_B", "BLOCK5",
        "LBRACE", "RBRACE", "COLON", "CRLF", "Crlf", "LBrace", "RBrace", "Colon",
        "Minus", "Any", "M_LBRACE", "M_RBRACE", "M_COLON", "M_VALUE", "B4_END",
        "B4_COLON", "B4_CRLF", "B4_VALUE", "V_END", "V_VALUE",
    ];
    SwiftFinLexer._LITERAL_NAMES = [];
    SwiftFinLexer._SYMBOLIC_NAMES = [
        undefined, "BLOCK1", "BLOCK2", "BLOCK3", "BLOCK4_A", "BLOCK4_B", "BLOCK5",
        "LBRACE", "RBRACE", "COLON", "CRLF", "M_COLON", "M_VALUE", "B4_END", "B4_COLON",
        "B4_CRLF", "B4_VALUE", "V_END", "V_VALUE",
    ];
    SwiftFinLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SwiftFinLexer._LITERAL_NAMES, SwiftFinLexer._SYMBOLIC_NAMES, []);
    SwiftFinLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14\x97\b\x01" +
        "\b\x01\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t" +
        "\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t" +
        "\v\x04\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11" +
        "\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16" +
        "\t\x16\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B" +
        "\t\x1B\x04\x1C\t\x1C\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
        "\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03" +
        "\r\x05\rk\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
        "\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
        "\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03" +
        "\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03" +
        "\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x02" +
        "\x02\x02\x1D\x06\x02\x03\b\x02\x04\n\x02\x05\f\x02\x02\x0E\x02\x06\x10" +
        "\x02\x07\x12\x02\b\x14\x02\t\x16\x02\n\x18\x02\v\x1A\x02\f\x1C\x02\x02" +
        "\x1E\x02\x02 \x02\x02\"\x02\x02$\x02\x02&\x02\x02(\x02\x02*\x02\x02,\x02" +
        "\r.\x02\x0E0\x02\x0F2\x02\x104\x02\x116\x02\x128\x02\x13:\x02\x14\x06" +
        "\x02\x03\x04\x05\x03\x03\x02<<\x02\x8D\x02\x06\x03\x02\x02\x02\x02\b\x03" +
        "\x02\x02\x02\x02\n\x03\x02\x02\x02\x02\x0E\x03\x02\x02\x02\x02\x10\x03" +
        "\x02\x02\x02\x02\x12\x03\x02\x02\x02\x02\x14\x03\x02\x02\x02\x02\x16\x03" +
        "\x02\x02\x02\x02\x18\x03\x02\x02\x02\x02\x1A\x03\x02\x02\x02\x03(\x03" +
        "\x02\x02\x02\x03*\x03\x02\x02\x02\x03,\x03\x02\x02\x02\x03.\x03\x02\x02" +
        "\x02\x040\x03\x02\x02\x02\x042\x03\x02\x02\x02\x044\x03\x02\x02\x02\x04" +
        "6\x03\x02\x02\x02\x058\x03\x02\x02\x02\x05:\x03\x02\x02\x02\x06<\x03\x02" +
        "\x02\x02\bB\x03\x02\x02\x02\nH\x03\x02\x02\x02\fN\x03\x02\x02\x02\x0E" +
        "R\x03\x02\x02\x02\x10W\x03\x02\x02\x02\x12[\x03\x02\x02\x02\x14a\x03\x02" +
        "\x02\x02\x16c\x03\x02\x02\x02\x18e\x03\x02\x02\x02\x1Ag\x03\x02\x02\x02" +
        "\x1Cj\x03\x02\x02\x02\x1En\x03\x02\x02\x02 p\x03\x02\x02\x02\"r\x03\x02" +
        "\x02\x02$t\x03\x02\x02\x02&v\x03\x02\x02\x02(x\x03\x02\x02\x02*}\x03\x02" +
        "\x02\x02,\x82\x03\x02\x02\x02.\x84\x03\x02\x02\x020\x86\x03\x02\x02\x02" +
        "2\x8B\x03\x02\x02\x024\x8D\x03\x02\x02\x026\x8F\x03\x02\x02\x028\x91\x03" +
        "\x02\x02\x02:\x95\x03\x02\x02\x02<=\x05\x1E\x0E\x02=>\x073\x02\x02>?\x05" +
        "\"\x10\x02?@\x03\x02\x02\x02@A\b\x02\x02\x02A\x07\x03\x02\x02\x02BC\x05" +
        "\x1E\x0E\x02CD\x074\x02\x02DE\x05\"\x10\x02EF\x03\x02\x02\x02FG\b\x03" +
        "\x02\x02G\t\x03\x02\x02\x02HI\x05\x1E\x0E\x02IJ\x075\x02\x02JK\x05\"\x10" +
        "\x02KL\x03\x02\x02\x02LM\b\x04\x03\x02M\v\x03\x02\x02\x02NO\x05\x1E\x0E" +
        "\x02OP\x076\x02\x02PQ\x05\"\x10\x02Q\r\x03\x02\x02\x02RS\x05\f\x05\x02" +
        "ST\x05\x1C\r\x02TU\x03\x02\x02\x02UV\b\x06\x04\x02V\x0F\x03\x02\x02\x02" +
        "WX\x05\f\x05\x02XY\x03\x02\x02\x02YZ\b\x07\x03\x02Z\x11\x03\x02\x02\x02" +
        "[\\\x05\x1E\x0E\x02\\]\x077\x02\x02]^\x05\"\x10\x02^_\x03\x02\x02\x02" +
        "_`\b\b\x03\x02`\x13\x03\x02\x02\x02ab\x05\x1E\x0E\x02b\x15\x03\x02\x02" +
        "\x02cd\x05 \x0F\x02d\x17\x03\x02\x02\x02ef\x05\"\x10\x02f\x19\x03\x02" +
        "\x02\x02gh\x05\x1C\r\x02h\x1B\x03\x02\x02\x02ik\x07\x0F\x02\x02ji\x03" +
        "\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x07\f\x02\x02m\x1D" +
        "\x03\x02\x02\x02no\x07}\x02\x02o\x1F\x03\x02\x02\x02pq\x07\x7F\x02\x02" +
        "q!\x03\x02\x02\x02rs\x07<\x02\x02s#\x03\x02\x02\x02tu\x07/\x02\x02u%\x03" +
        "\x02\x02\x02vw\v\x02\x02\x02w\'\x03\x02\x02\x02xy\x05\x1E\x0E\x02yz\x03" +
        "\x02\x02\x02z{\b\x13\x05\x02{|\b\x13\x03\x02|)\x03\x02\x02\x02}~\x05 " +
        "\x0F\x02~\x7F\x03\x02\x02\x02\x7F\x80\b\x14\x06\x02\x80\x81\b\x14\x07" +
        "\x02\x81+\x03\x02\x02\x02\x82\x83\x05\"\x10\x02\x83-\x03\x02\x02\x02\x84" +
        "\x85\n\x02\x02\x02\x85/\x03\x02\x02\x02\x86\x87\x05$\x11\x02\x87\x88\x05" +
        " \x0F\x02\x88\x89\x03\x02\x02\x02\x89\x8A\b\x17\x07\x02\x8A1\x03\x02\x02" +
        "\x02\x8B\x8C\x05\"\x10\x02\x8C3\x03\x02\x02\x02\x8D\x8E\x05\x1C\r\x02" +
        "\x8E5\x03\x02\x02\x02\x8F\x90\n\x02\x02\x02\x907\x03\x02\x02\x02\x91\x92" +
        "\x05 \x0F\x02\x92\x93\x03\x02\x02\x02\x93\x94\b\x1B\x07\x02\x949\x03\x02" +
        "\x02\x02\x95\x96\x05&\x12\x02\x96;\x03\x02\x02\x02\x07\x02\x03\x04\x05" +
        "j\b\x07\x05\x02\x07\x03\x02\x07\x04\x02\t\t\x02\t\n\x02\x06\x02\x02";
    return SwiftFinLexer;
}(Lexer_1.Lexer));
exports.SwiftFinLexer = SwiftFinLexer;
