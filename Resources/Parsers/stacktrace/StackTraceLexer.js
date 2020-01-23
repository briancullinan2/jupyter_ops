"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stacktrace/StackTrace.g4 by ANTLR 4.7.3-SNAPSHOT
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
var StackTraceLexer = /** @class */ (function (_super) {
    __extends(StackTraceLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function StackTraceLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(StackTraceLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(StackTraceLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return StackTraceLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "StackTrace.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return StackTraceLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return StackTraceLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceLexer.prototype, "channelNames", {
        // @Override
        get: function () { return StackTraceLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceLexer.prototype, "modeNames", {
        // @Override
        get: function () { return StackTraceLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceLexer, "_ATN", {
        get: function () {
            if (!StackTraceLexer.__ATN) {
                StackTraceLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(StackTraceLexer._serializedATN));
            }
            return StackTraceLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    StackTraceLexer.T__0 = 1;
    StackTraceLexer.T__1 = 2;
    StackTraceLexer.T__2 = 3;
    StackTraceLexer.T__3 = 4;
    StackTraceLexer.Number = 5;
    StackTraceLexer.JavaWord = 6;
    StackTraceLexer.DOT = 7;
    StackTraceLexer.AT = 8;
    StackTraceLexer.CAUSED_BY = 9;
    StackTraceLexer.MORE_ = 10;
    StackTraceLexer.ELLIPSIS = 11;
    StackTraceLexer.COLON = 12;
    StackTraceLexer.NATIVE_METHOD = 13;
    StackTraceLexer.UNKNOWN_SOURCE = 14;
    StackTraceLexer.INIT = 15;
    StackTraceLexer.NonCapitalLetter = 16;
    StackTraceLexer.CapitalLetter = 17;
    StackTraceLexer.Symbol = 18;
    StackTraceLexer.Digit = 19;
    StackTraceLexer.WS = 20;
    // tslint:disable:no-trailing-whitespace
    StackTraceLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    StackTraceLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    StackTraceLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "Number", "JavaWord", "JavaCharacter",
        "DOT", "AT", "CAUSED_BY", "MORE_", "ELLIPSIS", "COLON", "NATIVE_METHOD",
        "UNKNOWN_SOURCE", "INIT", "NonCapitalLetter", "CapitalLetter", "Symbol",
        "Digit", "WS",
    ];
    StackTraceLexer._LITERAL_NAMES = [
        undefined, "'('", "')'", "'$'", "'.java'", undefined, undefined, "'.'",
        "'at'", "'Caused by:'", "'more'", "'...'", "':'", "'Native Method'", "'Unknown Source'",
        "'<init>'", undefined, undefined, "'_'",
    ];
    StackTraceLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "Number", "JavaWord",
        "DOT", "AT", "CAUSED_BY", "MORE_", "ELLIPSIS", "COLON", "NATIVE_METHOD",
        "UNKNOWN_SOURCE", "INIT", "NonCapitalLetter", "CapitalLetter", "Symbol",
        "Digit", "WS",
    ];
    StackTraceLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(StackTraceLexer._LITERAL_NAMES, StackTraceLexer._SYMBOLIC_NAMES, []);
    StackTraceLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x16\x94\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03" +
        "\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x06\x06\x06;\n\x06\r\x06\x0E\x06<\x03\x07\x06\x07@\n" +
        "\x07\r\x07\x0E\x07A\x03\b\x03\b\x03\b\x03\b\x05\bH\n\b\x03\t\x03\t\x03" +
        "\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E" +
        "\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x02\x02\x02\x17\x03\x02\x03\x05\x02\x04" +
        "\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\x02\x11\x02\t\x13\x02" +
        "\n\x15\x02\v\x17\x02\f\x19\x02\r\x1B\x02\x0E\x1D\x02\x0F\x1F\x02\x10!" +
        "\x02\x11#\x02\x12%\x02\x13\'\x02\x14)\x02\x15+\x02\x16\x03\x02\x03\x05" +
        "\x02\v\f\x0E\x0F\"\"\x02\x97\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
        "\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
        "\x02\r\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
        "\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
        "\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02" +
        "\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'" +
        "\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x03-\x03\x02" +
        "\x02\x02\x05/\x03\x02\x02\x02\x071\x03\x02\x02\x02\t3\x03\x02\x02\x02" +
        "\v:\x03\x02\x02\x02\r?\x03\x02\x02\x02\x0FG\x03\x02\x02\x02\x11I\x03\x02" +
        "\x02\x02\x13K\x03\x02\x02\x02\x15N\x03\x02\x02\x02\x17Y\x03\x02\x02\x02" +
        "\x19^\x03\x02\x02\x02\x1Bb\x03\x02\x02\x02\x1Dd\x03\x02\x02\x02\x1Fr\x03" +
        "\x02\x02\x02!\x81\x03\x02\x02\x02#\x88\x03\x02\x02\x02%\x8A\x03\x02\x02" +
        "\x02\'\x8C\x03\x02\x02\x02)\x8E\x03\x02\x02\x02+\x90\x03\x02\x02\x02-" +
        ".\x07*\x02\x02.\x04\x03\x02\x02\x02/0\x07+\x02\x020\x06\x03\x02\x02\x02" +
        "12\x07&\x02\x022\b\x03\x02\x02\x0234\x070\x02\x0245\x07l\x02\x0256\x07" +
        "c\x02\x0267\x07x\x02\x0278\x07c\x02\x028\n\x03\x02\x02\x029;\x05)\x15" +
        "\x02:9\x03\x02\x02\x02;<\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02" +
        "\x02=\f\x03\x02\x02\x02>@\x05\x0F\b\x02?>\x03\x02\x02\x02@A\x03\x02\x02" +
        "\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02B\x0E\x03\x02\x02\x02CH\x05%\x13" +
        "\x02DH\x05#\x12\x02EH\x05\'\x14\x02FH\x05)\x15\x02GC\x03\x02\x02\x02G" +
        "D\x03\x02\x02\x02GE\x03\x02\x02\x02GF\x03\x02\x02\x02H\x10\x03\x02\x02" +
        "\x02IJ\x070\x02\x02J\x12\x03\x02\x02\x02KL\x07c\x02\x02LM\x07v\x02\x02" +
        "M\x14\x03\x02\x02\x02NO\x07E\x02\x02OP\x07c\x02\x02PQ\x07w\x02\x02QR\x07" +
        "u\x02\x02RS\x07g\x02\x02ST\x07f\x02\x02TU\x07\"\x02\x02UV\x07d\x02\x02" +
        "VW\x07{\x02\x02WX\x07<\x02\x02X\x16\x03\x02\x02\x02YZ\x07o\x02\x02Z[\x07" +
        "q\x02\x02[\\\x07t\x02\x02\\]\x07g\x02\x02]\x18\x03\x02\x02\x02^_\x070" +
        "\x02\x02_`\x070\x02\x02`a\x070\x02\x02a\x1A\x03\x02\x02\x02bc\x07<\x02" +
        "\x02c\x1C\x03\x02\x02\x02de\x07P\x02\x02ef\x07c\x02\x02fg\x07v\x02\x02" +
        "gh\x07k\x02\x02hi\x07x\x02\x02ij\x07g\x02\x02jk\x07\"\x02\x02kl\x07O\x02" +
        "\x02lm\x07g\x02\x02mn\x07v\x02\x02no\x07j\x02\x02op\x07q\x02\x02pq\x07" +
        "f\x02\x02q\x1E\x03\x02\x02\x02rs\x07W\x02\x02st\x07p\x02\x02tu\x07m\x02" +
        "\x02uv\x07p\x02\x02vw\x07q\x02\x02wx\x07y\x02\x02xy\x07p\x02\x02yz\x07" +
        "\"\x02\x02z{\x07U\x02\x02{|\x07q\x02\x02|}\x07w\x02\x02}~\x07t\x02\x02" +
        "~\x7F\x07e\x02\x02\x7F\x80\x07g\x02\x02\x80 \x03\x02\x02\x02\x81\x82\x07" +
        ">\x02\x02\x82\x83\x07k\x02\x02\x83\x84\x07p\x02\x02\x84\x85\x07k\x02\x02" +
        "\x85\x86\x07v\x02\x02\x86\x87\x07@\x02\x02\x87\"\x03\x02\x02\x02\x88\x89" +
        "\x04c|\x02\x89$\x03\x02\x02\x02\x8A\x8B\x04C\\\x02\x8B&\x03\x02\x02\x02" +
        "\x8C\x8D\x07a\x02\x02\x8D(\x03\x02\x02\x02\x8E\x8F\x042;\x02\x8F*\x03" +
        "\x02\x02\x02\x90\x91\t\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\b\x16" +
        "\x02\x02\x93,\x03\x02\x02\x02\x06\x02<AG\x03\b\x02\x02";
    return StackTraceLexer;
}(Lexer_1.Lexer));
exports.StackTraceLexer = StackTraceLexer;
