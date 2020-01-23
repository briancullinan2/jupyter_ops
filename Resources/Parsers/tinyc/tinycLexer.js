"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinyc/tinyc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var tinycLexer = /** @class */ (function (_super) {
    __extends(tinycLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function tinycLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(tinycLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(tinycLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tinycLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "tinyc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return tinycLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return tinycLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycLexer.prototype, "channelNames", {
        // @Override
        get: function () { return tinycLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycLexer.prototype, "modeNames", {
        // @Override
        get: function () { return tinycLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tinycLexer, "_ATN", {
        get: function () {
            if (!tinycLexer.__ATN) {
                tinycLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tinycLexer._serializedATN));
            }
            return tinycLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tinycLexer.T__0 = 1;
    tinycLexer.T__1 = 2;
    tinycLexer.T__2 = 3;
    tinycLexer.T__3 = 4;
    tinycLexer.T__4 = 5;
    tinycLexer.T__5 = 6;
    tinycLexer.T__6 = 7;
    tinycLexer.T__7 = 8;
    tinycLexer.T__8 = 9;
    tinycLexer.T__9 = 10;
    tinycLexer.T__10 = 11;
    tinycLexer.T__11 = 12;
    tinycLexer.T__12 = 13;
    tinycLexer.STRING = 14;
    tinycLexer.INT = 15;
    tinycLexer.WS = 16;
    // tslint:disable:no-trailing-whitespace
    tinycLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    tinycLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    tinycLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "T__12", "STRING", "INT", "WS",
    ];
    tinycLexer._LITERAL_NAMES = [
        undefined, "'if'", "'else'", "'while'", "'do'", "';'", "'{'", "'}'", "'('",
        "')'", "'='", "'<'", "'+'", "'-'",
    ];
    tinycLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "STRING", "INT", "WS",
    ];
    tinycLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tinycLexer._LITERAL_NAMES, tinycLexer._SYMBOLIC_NAMES, []);
    tinycLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12T\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02" +
        "\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03" +
        "\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x06\x0FH\n\x0F\r\x0F\x0E\x0FI\x03\x10" +
        "\x06\x10M\n\x10\r\x10\x0E\x10N\x03\x11\x03\x11\x03\x11\x03\x11\x02\x02" +
        "\x02\x12\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02" +
        "\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
        "\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12\x03\x02\x05\x03\x02c|\x03\x022;" +
        "\x05\x02\v\f\x0F\x0F\"\"\x02U\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
        "\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
        "\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
        "\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
        "\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02" +
        "\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x03#\x03\x02\x02\x02" +
        "\x05&\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t1\x03\x02\x02\x02\v4\x03\x02" +
        "\x02\x02\r6\x03\x02\x02\x02\x0F8\x03\x02\x02\x02\x11:\x03\x02\x02\x02" +
        "\x13<\x03\x02\x02\x02\x15>\x03\x02\x02\x02\x17@\x03\x02\x02\x02\x19B\x03" +
        "\x02\x02\x02\x1BD\x03\x02\x02\x02\x1DG\x03\x02\x02\x02\x1FL\x03\x02\x02" +
        "\x02!P\x03\x02\x02\x02#$\x07k\x02\x02$%\x07h\x02\x02%\x04\x03\x02\x02" +
        "\x02&\'\x07g\x02\x02\'(\x07n\x02\x02()\x07u\x02\x02)*\x07g\x02\x02*\x06" +
        "\x03\x02\x02\x02+,\x07y\x02\x02,-\x07j\x02\x02-.\x07k\x02\x02./\x07n\x02" +
        "\x02/0\x07g\x02\x020\b\x03\x02\x02\x0212\x07f\x02\x0223\x07q\x02\x023" +
        "\n\x03\x02\x02\x0245\x07=\x02\x025\f\x03\x02\x02\x0267\x07}\x02\x027\x0E" +
        "\x03\x02\x02\x0289\x07\x7F\x02\x029\x10\x03\x02\x02\x02:;\x07*\x02\x02" +
        ";\x12\x03\x02\x02\x02<=\x07+\x02\x02=\x14\x03\x02\x02\x02>?\x07?\x02\x02" +
        "?\x16\x03\x02\x02\x02@A\x07>\x02\x02A\x18\x03\x02\x02\x02BC\x07-\x02\x02" +
        "C\x1A\x03\x02\x02\x02DE\x07/\x02\x02E\x1C\x03\x02\x02\x02FH\t\x02\x02" +
        "\x02GF\x03\x02\x02\x02HI\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02" +
        "\x02J\x1E\x03\x02\x02\x02KM\t\x03\x02\x02LK\x03\x02\x02\x02MN\x03\x02" +
        "\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02O \x03\x02\x02\x02PQ\t\x04" +
        "\x02\x02QR\x03\x02\x02\x02RS\b\x11\x02\x02S\"\x03\x02\x02\x02\x05\x02" +
        "IN\x03\b\x02\x02";
    return tinycLexer;
}(Lexer_1.Lexer));
exports.tinycLexer = tinycLexer;
