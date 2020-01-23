"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/arithmetic/arithmetic.g4 by ANTLR 4.7.3-SNAPSHOT
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
var arithmeticLexer = /** @class */ (function (_super) {
    __extends(arithmeticLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function arithmeticLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(arithmeticLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(arithmeticLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return arithmeticLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "arithmetic.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return arithmeticLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return arithmeticLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticLexer.prototype, "channelNames", {
        // @Override
        get: function () { return arithmeticLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticLexer.prototype, "modeNames", {
        // @Override
        get: function () { return arithmeticLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(arithmeticLexer, "_ATN", {
        get: function () {
            if (!arithmeticLexer.__ATN) {
                arithmeticLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(arithmeticLexer._serializedATN));
            }
            return arithmeticLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    arithmeticLexer.VARIABLE = 1;
    arithmeticLexer.SCIENTIFIC_NUMBER = 2;
    arithmeticLexer.LPAREN = 3;
    arithmeticLexer.RPAREN = 4;
    arithmeticLexer.PLUS = 5;
    arithmeticLexer.MINUS = 6;
    arithmeticLexer.TIMES = 7;
    arithmeticLexer.DIV = 8;
    arithmeticLexer.GT = 9;
    arithmeticLexer.LT = 10;
    arithmeticLexer.EQ = 11;
    arithmeticLexer.POINT = 12;
    arithmeticLexer.POW = 13;
    arithmeticLexer.WS = 14;
    // tslint:disable:no-trailing-whitespace
    arithmeticLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    arithmeticLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    arithmeticLexer.ruleNames = [
        "VARIABLE", "VALID_ID_START", "VALID_ID_CHAR", "SCIENTIFIC_NUMBER", "NUMBER",
        "UNSIGNED_INTEGER", "E", "SIGN", "LPAREN", "RPAREN", "PLUS", "MINUS",
        "TIMES", "DIV", "GT", "LT", "EQ", "POINT", "POW", "WS",
    ];
    arithmeticLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, "'('", "')'", "'+'", "'-'", "'*'", "'/'",
        "'>'", "'<'", "'='", "'.'", "'^'",
    ];
    arithmeticLexer._SYMBOLIC_NAMES = [
        undefined, "VARIABLE", "SCIENTIFIC_NUMBER", "LPAREN", "RPAREN", "PLUS",
        "MINUS", "TIMES", "DIV", "GT", "LT", "EQ", "POINT", "POW", "WS",
    ];
    arithmeticLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(arithmeticLexer._LITERAL_NAMES, arithmeticLexer._SYMBOLIC_NAMES, []);
    arithmeticLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10u\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x07\x02.\n" +
        "\x02\f\x02\x0E\x021\v\x02\x03\x03\x05\x034\n\x03\x03\x04\x03\x04\x05\x04" +
        "8\n\x04\x03\x05\x03\x05\x03\x05\x05\x05=\n\x05\x03\x05\x03\x05\x05\x05" +
        "A\n\x05\x03\x06\x06\x06D\n\x06\r\x06\x0E\x06E\x03\x06\x03\x06\x06\x06" +
        "J\n\x06\r\x06\x0E\x06K\x05\x06N\n\x06\x03\x07\x06\x07Q\n\x07\r\x07\x0E" +
        "\x07R\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03" +
        "\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x06\x15p\n\x15" +
        "\r\x15\x0E\x15q\x03\x15\x03\x15\x02\x02\x02\x16\x03\x02\x03\x05\x02\x02" +
        "\x07\x02\x02\t\x02\x04\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13" +
        "\x02\x05\x15\x02\x06\x17\x02\x07\x19\x02\b\x1B\x02\t\x1D\x02\n\x1F\x02" +
        "\v!\x02\f#\x02\r%\x02\x0E\'\x02\x0F)\x02\x10\x03\x02\x06\x05\x02C\\aa" +
        "c|\x04\x02GGgg\x04\x02--//\x05\x02\v\f\x0F\x0F\"\"\x02w\x02\x03\x03\x02" +
        "\x02\x02\x02\t\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
        "\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
        "\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
        "\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
        "\x02)\x03\x02\x02\x02\x03+\x03\x02\x02\x02\x053\x03\x02\x02\x02\x077\x03" +
        "\x02\x02\x02\t9\x03\x02\x02\x02\vC\x03\x02\x02\x02\rP\x03\x02\x02\x02" +
        "\x0FT\x03\x02\x02\x02\x11V\x03\x02\x02\x02\x13X\x03\x02\x02\x02\x15Z\x03" +
        "\x02\x02\x02\x17\\\x03\x02\x02\x02\x19^\x03\x02\x02\x02\x1B`\x03\x02\x02" +
        "\x02\x1Db\x03\x02\x02\x02\x1Fd\x03\x02\x02\x02!f\x03\x02\x02\x02#h\x03" +
        "\x02\x02\x02%j\x03\x02\x02\x02\'l\x03\x02\x02\x02)o\x03\x02\x02\x02+/" +
        "\x05\x05\x03\x02,.\x05\x07\x04\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02" +
        "/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x04\x03\x02\x02\x021/\x03\x02\x02" +
        "\x0224\t\x02\x02\x0232\x03\x02\x02\x024\x06\x03\x02\x02\x0258\x05\x05" +
        "\x03\x0268\x042;\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\b\x03\x02\x02" +
        "\x029@\x05\v\x06\x02:<\x05\x0F\b\x02;=\x05\x11\t\x02<;\x03\x02\x02\x02" +
        "<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x05\r\x07\x02?A\x03\x02\x02\x02" +
        "@:\x03\x02\x02\x02@A\x03\x02\x02\x02A\n\x03\x02\x02\x02BD\x042;\x02CB" +
        "\x03\x02\x02\x02DE\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02" +
        "FM\x03\x02\x02\x02GI\x070\x02\x02HJ\x042;\x02IH\x03\x02\x02\x02JK\x03" +
        "\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02LN\x03\x02\x02\x02MG\x03" +
        "\x02\x02\x02MN\x03\x02\x02\x02N\f\x03\x02\x02\x02OQ\x042;\x02PO\x03\x02" +
        "\x02\x02QR\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\x0E\x03" +
        "\x02\x02\x02TU\t\x03\x02\x02U\x10\x03\x02\x02\x02VW\t\x04\x02\x02W\x12" +
        "\x03\x02\x02\x02XY\x07*\x02\x02Y\x14\x03\x02\x02\x02Z[\x07+\x02\x02[\x16" +
        "\x03\x02\x02\x02\\]\x07-\x02\x02]\x18\x03\x02\x02\x02^_\x07/\x02\x02_" +
        "\x1A\x03\x02\x02\x02`a\x07,\x02\x02a\x1C\x03\x02\x02\x02bc\x071\x02\x02" +
        "c\x1E\x03\x02\x02\x02de\x07@\x02\x02e \x03\x02\x02\x02fg\x07>\x02\x02" +
        "g\"\x03\x02\x02\x02hi\x07?\x02\x02i$\x03\x02\x02\x02jk\x070\x02\x02k&" +
        "\x03\x02\x02\x02lm\x07`\x02\x02m(\x03\x02\x02\x02np\t\x05\x02\x02on\x03" +
        "\x02\x02\x02pq\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03" +
        "\x02\x02\x02st\b\x15\x02\x02t*\x03\x02\x02\x02\r\x02/37<@EKMRq\x03\b\x02" +
        "\x02";
    return arithmeticLexer;
}(Lexer_1.Lexer));
exports.arithmeticLexer = arithmeticLexer;
