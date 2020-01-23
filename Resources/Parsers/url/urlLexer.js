"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/url/url.g4 by ANTLR 4.7.3-SNAPSHOT
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
var urlLexer = /** @class */ (function (_super) {
    __extends(urlLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function urlLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(urlLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(urlLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return urlLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "url.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return urlLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return urlLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlLexer.prototype, "channelNames", {
        // @Override
        get: function () { return urlLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlLexer.prototype, "modeNames", {
        // @Override
        get: function () { return urlLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlLexer, "_ATN", {
        get: function () {
            if (!urlLexer.__ATN) {
                urlLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(urlLexer._serializedATN));
            }
            return urlLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    urlLexer.T__0 = 1;
    urlLexer.T__1 = 2;
    urlLexer.T__2 = 3;
    urlLexer.T__3 = 4;
    urlLexer.T__4 = 5;
    urlLexer.T__5 = 6;
    urlLexer.T__6 = 7;
    urlLexer.T__7 = 8;
    urlLexer.T__8 = 9;
    urlLexer.T__9 = 10;
    urlLexer.T__10 = 11;
    urlLexer.T__11 = 12;
    urlLexer.DIGITS = 13;
    urlLexer.HEX = 14;
    urlLexer.STRING = 15;
    urlLexer.WS = 16;
    // tslint:disable:no-trailing-whitespace
    urlLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    urlLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    urlLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "DIGITS", "HEX", "STRING", "WS",
    ];
    urlLexer._LITERAL_NAMES = [
        undefined, "'://'", "':'", "'/'", "'.'", "'['", "']'", "'::'", "'@'",
        "'#'", "'?'", "'&'", "'='",
    ];
    urlLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "DIGITS",
        "HEX", "STRING", "WS",
    ];
    urlLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(urlLexer._LITERAL_NAMES, urlLexer._SYMBOLIC_NAMES, []);
    urlLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12Z\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03" +
        "\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x06\x0E@\n\x0E\r\x0E\x0E\x0E" +
        "A\x03\x0F\x03\x0F\x03\x0F\x06\x0FG\n\x0F\r\x0F\x0E\x0FH\x03\x10\x03\x10" +
        "\x05\x10M\n\x10\x03\x10\x03\x10\x07\x10Q\n\x10\f\x10\x0E\x10T\v\x10\x03" +
        "\x11\x06\x11W\n\x11\r\x11\x0E\x11X\x02\x02\x02\x12\x03\x02\x03\x05\x02" +
        "\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
        "\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
        "!\x02\x12\x03\x02\x07\x03\x022;\x05\x022;CHch\x06\x022;C\\c|\x80\x80\x07" +
        "\x02--/02;C\\c|\x04\x02\f\f\x0F\x0F\x02_\x02\x03\x03\x02\x02\x02\x02\x05" +
        "\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
        "\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
        "\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
        "\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
        "\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x03#\x03\x02" +
        "\x02\x02\x05\'\x03\x02\x02\x02\x07)\x03\x02\x02\x02\t+\x03\x02\x02\x02" +
        "\v-\x03\x02\x02\x02\r/\x03\x02\x02\x02\x0F1\x03\x02\x02\x02\x114\x03\x02" +
        "\x02\x02\x136\x03\x02\x02\x02\x158\x03\x02\x02\x02\x17:\x03\x02\x02\x02" +
        "\x19<\x03\x02\x02\x02\x1B?\x03\x02\x02\x02\x1DF\x03\x02\x02\x02\x1FL\x03" +
        "\x02\x02\x02!V\x03\x02\x02\x02#$\x07<\x02\x02$%\x071\x02\x02%&\x071\x02" +
        "\x02&\x04\x03\x02\x02\x02\'(\x07<\x02\x02(\x06\x03\x02\x02\x02)*\x071" +
        "\x02\x02*\b\x03\x02\x02\x02+,\x070\x02\x02,\n\x03\x02\x02\x02-.\x07]\x02" +
        "\x02.\f\x03\x02\x02\x02/0\x07_\x02\x020\x0E\x03\x02\x02\x0212\x07<\x02" +
        "\x0223\x07<\x02\x023\x10\x03\x02\x02\x0245\x07B\x02\x025\x12\x03\x02\x02" +
        "\x0267\x07%\x02\x027\x14\x03\x02\x02\x0289\x07A\x02\x029\x16\x03\x02\x02" +
        "\x02:;\x07(\x02\x02;\x18\x03\x02\x02\x02<=\x07?\x02\x02=\x1A\x03\x02\x02" +
        "\x02>@\t\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A?\x03\x02\x02" +
        "\x02AB\x03\x02\x02\x02B\x1C\x03\x02\x02\x02CD\x07\'\x02\x02DE\t\x03\x02" +
        "\x02EG\t\x03\x02\x02FC\x03\x02\x02\x02GH\x03\x02\x02\x02HF\x03\x02\x02" +
        "\x02HI\x03\x02\x02\x02I\x1E\x03\x02\x02\x02JM\t\x04\x02\x02KM\x05\x1D" +
        "\x0F\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02MR\x03\x02\x02\x02NQ\t\x05" +
        "\x02\x02OQ\x05\x1D\x0F\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02QT\x03\x02" +
        "\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S \x03\x02\x02\x02TR\x03\x02" +
        "\x02\x02UW\t\x06\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02" +
        "\x02\x02XY\x03\x02\x02\x02Y\"\x03\x02\x02\x02\t\x02AHLPRX\x02";
    return urlLexer;
}(Lexer_1.Lexer));
exports.urlLexer = urlLexer;
