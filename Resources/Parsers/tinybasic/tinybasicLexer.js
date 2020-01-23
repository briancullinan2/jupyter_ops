"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinybasic/tinybasic.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tinybasicLexer = /** @class */ (function (_super) {
    __extends(tinybasicLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function tinybasicLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(tinybasicLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(tinybasicLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tinybasicLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "tinybasic.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return tinybasicLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return tinybasicLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicLexer.prototype, "channelNames", {
        // @Override
        get: function () { return tinybasicLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicLexer.prototype, "modeNames", {
        // @Override
        get: function () { return tinybasicLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinybasicLexer, "_ATN", {
        get: function () {
            if (!tinybasicLexer.__ATN) {
                tinybasicLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tinybasicLexer._serializedATN));
            }
            return tinybasicLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tinybasicLexer.T__0 = 1;
    tinybasicLexer.T__1 = 2;
    tinybasicLexer.T__2 = 3;
    tinybasicLexer.T__3 = 4;
    tinybasicLexer.T__4 = 5;
    tinybasicLexer.T__5 = 6;
    tinybasicLexer.T__6 = 7;
    tinybasicLexer.T__7 = 8;
    tinybasicLexer.T__8 = 9;
    tinybasicLexer.T__9 = 10;
    tinybasicLexer.T__10 = 11;
    tinybasicLexer.T__11 = 12;
    tinybasicLexer.T__12 = 13;
    tinybasicLexer.T__13 = 14;
    tinybasicLexer.T__14 = 15;
    tinybasicLexer.T__15 = 16;
    tinybasicLexer.T__16 = 17;
    tinybasicLexer.T__17 = 18;
    tinybasicLexer.T__18 = 19;
    tinybasicLexer.T__19 = 20;
    tinybasicLexer.STRING = 21;
    tinybasicLexer.DIGIT = 22;
    tinybasicLexer.VAR = 23;
    tinybasicLexer.CR = 24;
    tinybasicLexer.WS = 25;
    // tslint:disable:no-trailing-whitespace
    tinybasicLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    tinybasicLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    tinybasicLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
        "T__17", "T__18", "T__19", "STRING", "DIGIT", "VAR", "CR", "WS",
    ];
    tinybasicLexer._LITERAL_NAMES = [
        undefined, "'PRINT'", "'IF'", "'THEN'", "'GOTO'", "'INPUT'", "'LET'",
        "'='", "'GOSUB'", "'RETURN'", "'CLEAR'", "'LIST'", "'RUN'", "'END'", "','",
        "'+'", "'-'", "'*'", "'/'", "'<'", "'>'",
    ];
    tinybasicLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "STRING", "DIGIT", "VAR", "CR", "WS",
    ];
    tinybasicLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tinybasicLexer._LITERAL_NAMES, tinybasicLexer._SYMBOLIC_NAMES, []);
    tinybasicLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1B\x98\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
        "\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
        "\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16\x85\n\x16\f\x16" +
        "\x0E\x16\x88\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
        "\x19\x06\x19\x91\n\x19\r\x19\x0E\x19\x92\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
        "\x02\x02\x02\x1B\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
        "\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E" +
        "\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02" +
        "\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B\x03\x02\x05" +
        "\x05\x02\f\f\x0F\x0F$$\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02\x99\x02" +
        "\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
        "\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
        "\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
        "\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
        "\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
        "\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
        "\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
        "\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x035\x03" +
        "\x02\x02\x02\x05;\x03\x02\x02\x02\x07>\x03\x02\x02\x02\tC\x03\x02\x02" +
        "\x02\vH\x03\x02\x02\x02\rN\x03\x02\x02\x02\x0FR\x03\x02\x02\x02\x11T\x03" +
        "\x02\x02\x02\x13Z\x03\x02\x02\x02\x15a\x03\x02\x02\x02\x17g\x03\x02\x02" +
        "\x02\x19l\x03\x02\x02\x02\x1Bp\x03\x02\x02\x02\x1Dt\x03\x02\x02\x02\x1F" +
        "v\x03\x02\x02\x02!x\x03\x02\x02\x02#z\x03\x02\x02\x02%|\x03\x02\x02\x02" +
        "\'~\x03\x02\x02\x02)\x80\x03\x02\x02\x02+\x82\x03\x02\x02\x02-\x8B\x03" +
        "\x02\x02\x02/\x8D\x03\x02\x02\x021\x90\x03\x02\x02\x023\x94\x03\x02\x02" +
        "\x0256\x07R\x02\x0267\x07T\x02\x0278\x07K\x02\x0289\x07P\x02\x029:\x07" +
        "V\x02\x02:\x04\x03\x02\x02\x02;<\x07K\x02\x02<=\x07H\x02\x02=\x06\x03" +
        "\x02\x02\x02>?\x07V\x02\x02?@\x07J\x02\x02@A\x07G\x02\x02AB\x07P\x02\x02" +
        "B\b\x03\x02\x02\x02CD\x07I\x02\x02DE\x07Q\x02\x02EF\x07V\x02\x02FG\x07" +
        "Q\x02\x02G\n\x03\x02\x02\x02HI\x07K\x02\x02IJ\x07P\x02\x02JK\x07R\x02" +
        "\x02KL\x07W\x02\x02LM\x07V\x02\x02M\f\x03\x02\x02\x02NO\x07N\x02\x02O" +
        "P\x07G\x02\x02PQ\x07V\x02\x02Q\x0E\x03\x02\x02\x02RS\x07?\x02\x02S\x10" +
        "\x03\x02\x02\x02TU\x07I\x02\x02UV\x07Q\x02\x02VW\x07U\x02\x02WX\x07W\x02" +
        "\x02XY\x07D\x02\x02Y\x12\x03\x02\x02\x02Z[\x07T\x02\x02[\\\x07G\x02\x02" +
        "\\]\x07V\x02\x02]^\x07W\x02\x02^_\x07T\x02\x02_`\x07P\x02\x02`\x14\x03" +
        "\x02\x02\x02ab\x07E\x02\x02bc\x07N\x02\x02cd\x07G\x02\x02de\x07C\x02\x02" +
        "ef\x07T\x02\x02f\x16\x03\x02\x02\x02gh\x07N\x02\x02hi\x07K\x02\x02ij\x07" +
        "U\x02\x02jk\x07V\x02\x02k\x18\x03\x02\x02\x02lm\x07T\x02\x02mn\x07W\x02" +
        "\x02no\x07P\x02\x02o\x1A\x03\x02\x02\x02pq\x07G\x02\x02qr\x07P\x02\x02" +
        "rs\x07F\x02\x02s\x1C\x03\x02\x02\x02tu\x07.\x02\x02u\x1E\x03\x02\x02\x02" +
        "vw\x07-\x02\x02w \x03\x02\x02\x02xy\x07/\x02\x02y\"\x03\x02\x02\x02z{" +
        "\x07,\x02\x02{$\x03\x02\x02\x02|}\x071\x02\x02}&\x03\x02\x02\x02~\x7F" +
        "\x07>\x02\x02\x7F(\x03\x02\x02\x02\x80\x81\x07@\x02\x02\x81*\x03\x02\x02" +
        "\x02\x82\x86\x07$\x02\x02\x83\x85\n\x02\x02\x02\x84\x83\x03\x02\x02\x02" +
        "\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02" +
        "\x87\x89\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07$\x02\x02" +
        "\x8A,\x03\x02\x02\x02\x8B\x8C\x042;\x02\x8C.\x03\x02\x02\x02\x8D\x8E\x04" +
        "C\\\x02\x8E0\x03\x02\x02\x02\x8F\x91\t\x03\x02\x02\x90\x8F\x03\x02\x02" +
        "\x02\x91\x92\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02" +
        "\x02\x932\x03\x02\x02\x02\x94\x95\t\x04\x02\x02\x95\x96\x03\x02\x02\x02" +
        "\x96\x97\b\x1A\x02\x02\x974\x03\x02\x02\x02\x05\x02\x86\x92\x03\b\x02" +
        "\x02";
    return tinybasicLexer;
}(Lexer_1.Lexer));
exports.tinybasicLexer = tinybasicLexer;
