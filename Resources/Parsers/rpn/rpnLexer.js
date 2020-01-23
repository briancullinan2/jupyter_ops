"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rpn/rpn.g4 by ANTLR 4.7.3-SNAPSHOT
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
var rpnLexer = /** @class */ (function (_super) {
    __extends(rpnLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function rpnLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(rpnLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(rpnLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return rpnLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "rpn.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return rpnLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return rpnLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnLexer.prototype, "channelNames", {
        // @Override
        get: function () { return rpnLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnLexer.prototype, "modeNames", {
        // @Override
        get: function () { return rpnLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rpnLexer, "_ATN", {
        get: function () {
            if (!rpnLexer.__ATN) {
                rpnLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(rpnLexer._serializedATN));
            }
            return rpnLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    rpnLexer.SCIENTIFIC_NUMBER = 1;
    rpnLexer.VARIABLE = 2;
    rpnLexer.POW = 3;
    rpnLexer.PLUS = 4;
    rpnLexer.MINUS = 5;
    rpnLexer.TIMES = 6;
    rpnLexer.DIV = 7;
    rpnLexer.COS = 8;
    rpnLexer.SIN = 9;
    rpnLexer.TAN = 10;
    rpnLexer.ACOS = 11;
    rpnLexer.ASIN = 12;
    rpnLexer.ATAN = 13;
    rpnLexer.LN = 14;
    rpnLexer.LOG = 15;
    rpnLexer.POINT = 16;
    rpnLexer.WS = 17;
    // tslint:disable:no-trailing-whitespace
    rpnLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    rpnLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    rpnLexer.ruleNames = [
        "SCIENTIFIC_NUMBER", "NUMBER", "E", "SIGN", "VARIABLE", "VALID_ID_START",
        "VALID_ID_CHAR", "POW", "PLUS", "MINUS", "TIMES", "DIV", "COS", "SIN",
        "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "POINT", "WS",
    ];
    rpnLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, "'^'", "'+'", "'-'", "'*'", "'/'", "'cos'",
        "'sin'", "'tan'", "'acos'", "'asin'", "'atan'", "'ln'", "'log'", "'.'",
    ];
    rpnLexer._SYMBOLIC_NAMES = [
        undefined, "SCIENTIFIC_NUMBER", "VARIABLE", "POW", "PLUS", "MINUS", "TIMES",
        "DIV", "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "POINT",
        "WS",
    ];
    rpnLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(rpnLexer._LITERAL_NAMES, rpnLexer._SYMBOLIC_NAMES, []);
    rpnLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x13\x8C\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x03\x02\x03\x02\x03\x02\x05\x023\n\x02\x03\x02\x03\x02\x05\x027\n" +
        "\x02\x03\x03\x06\x03:\n\x03\r\x03\x0E\x03;\x03\x03\x03\x03\x06\x03@\n" +
        "\x03\r\x03\x0E\x03A\x05\x03D\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x06\x03\x06\x07\x06L\n\x06\f\x06\x0E\x06O\v\x06\x03\x07\x05\x07R\n\x07" +
        "\x03\b\x03\b\x05\bV\n\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
        "\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
        "\x03\x16\x03\x16\x03\x17\x06\x17\x87\n\x17\r\x17\x0E\x17\x88\x03\x17\x03" +
        "\x17\x02\x02\x02\x18\x03\x02\x03\x05\x02\x02\x07\x02\x02\t\x02\x02\v\x02" +
        "\x04\r\x02\x02\x0F\x02\x02\x11\x02\x05\x13\x02\x06\x15\x02\x07\x17\x02" +
        "\b\x19\x02\t\x1B\x02\n\x1D\x02\v\x1F\x02\f!\x02\r#\x02\x0E%\x02\x0F\'" +
        "\x02\x10)\x02\x11+\x02\x12-\x02\x13\x03\x02\x06\x04\x02GGgg\x04\x02--" +
        "//\x05\x02C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02\x8E\x02\x03\x03\x02\x02" +
        "\x02\x02\v\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
        "\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
        "\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02" +
        "\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02" +
        "\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03" +
        "\x02\x02\x02\x03/\x03\x02\x02\x02\x059\x03\x02\x02\x02\x07E\x03\x02\x02" +
        "\x02\tG\x03\x02\x02\x02\vI\x03\x02\x02\x02\rQ\x03\x02\x02\x02\x0FU\x03" +
        "\x02\x02\x02\x11W\x03\x02\x02\x02\x13Y\x03\x02\x02\x02\x15[\x03\x02\x02" +
        "\x02\x17]\x03\x02\x02\x02\x19_\x03\x02\x02\x02\x1Ba\x03\x02\x02\x02\x1D" +
        "e\x03\x02\x02\x02\x1Fi\x03\x02\x02\x02!m\x03\x02\x02\x02#r\x03\x02\x02" +
        "\x02%w\x03\x02\x02\x02\'|\x03\x02\x02\x02)\x7F\x03\x02\x02\x02+\x83\x03" +
        "\x02\x02\x02-\x86\x03\x02\x02\x02/6\x05\x05\x03\x0202\x05\x07\x04\x02" +
        "13\x05\t\x05\x0221\x03\x02\x02\x0223\x03\x02\x02\x0234\x03\x02\x02\x02" +
        "45\x05\x05\x03\x0257\x03\x02\x02\x0260\x03\x02\x02\x0267\x03\x02\x02\x02" +
        "7\x04\x03\x02\x02\x028:\x042;\x0298\x03\x02\x02\x02:;\x03\x02\x02\x02" +
        ";9\x03\x02\x02\x02;<\x03\x02\x02\x02<C\x03\x02\x02\x02=?\x070\x02\x02" +
        ">@\x042;\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03" +
        "\x02\x02\x02BD\x03\x02\x02\x02C=\x03\x02\x02\x02CD\x03\x02\x02\x02D\x06" +
        "\x03\x02\x02\x02EF\t\x02\x02\x02F\b\x03\x02\x02\x02GH\t\x03\x02\x02H\n" +
        "\x03\x02\x02\x02IM\x05\r\x07\x02JL\x05\x0F\b\x02KJ\x03\x02\x02\x02LO\x03" +
        "\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02N\f\x03\x02\x02\x02OM" +
        "\x03\x02\x02\x02PR\t\x04\x02\x02QP\x03\x02\x02\x02R\x0E\x03\x02\x02\x02" +
        "SV\x05\r\x07\x02TV\x042;\x02US\x03\x02\x02\x02UT\x03\x02\x02\x02V\x10" +
        "\x03\x02\x02\x02WX\x07`\x02\x02X\x12\x03\x02\x02\x02YZ\x07-\x02\x02Z\x14" +
        "\x03\x02\x02\x02[\\\x07/\x02\x02\\\x16\x03\x02\x02\x02]^\x07,\x02\x02" +
        "^\x18\x03\x02\x02\x02_`\x071\x02\x02`\x1A\x03\x02\x02\x02ab\x07e\x02\x02" +
        "bc\x07q\x02\x02cd\x07u\x02\x02d\x1C\x03\x02\x02\x02ef\x07u\x02\x02fg\x07" +
        "k\x02\x02gh\x07p\x02\x02h\x1E\x03\x02\x02\x02ij\x07v\x02\x02jk\x07c\x02" +
        "\x02kl\x07p\x02\x02l \x03\x02\x02\x02mn\x07c\x02\x02no\x07e\x02\x02op" +
        "\x07q\x02\x02pq\x07u\x02\x02q\"\x03\x02\x02\x02rs\x07c\x02\x02st\x07u" +
        "\x02\x02tu\x07k\x02\x02uv\x07p\x02\x02v$\x03\x02\x02\x02wx\x07c\x02\x02" +
        "xy\x07v\x02\x02yz\x07c\x02\x02z{\x07p\x02\x02{&\x03\x02\x02\x02|}\x07" +
        "n\x02\x02}~\x07p\x02\x02~(\x03\x02\x02\x02\x7F\x80\x07n\x02\x02\x80\x81" +
        "\x07q\x02\x02\x81\x82\x07i\x02\x02\x82*\x03\x02\x02\x02\x83\x84\x070\x02" +
        "\x02\x84,\x03\x02\x02\x02\x85\x87\t\x05\x02\x02\x86\x85\x03\x02\x02\x02" +
        "\x87\x88\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02" +
        "\x89\x8A\x03\x02\x02\x02\x8A\x8B\b\x17\x02\x02\x8B.\x03\x02\x02\x02\f" +
        "\x0226;ACMQU\x88\x03\b\x02\x02";
    return rpnLexer;
}(Lexer_1.Lexer));
exports.rpnLexer = rpnLexer;
