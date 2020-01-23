"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fol/fol.g4 by ANTLR 4.7.3-SNAPSHOT
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
var folLexer = /** @class */ (function (_super) {
    __extends(folLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function folLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(folLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(folLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return folLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "fol.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return folLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return folLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folLexer.prototype, "channelNames", {
        // @Override
        get: function () { return folLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folLexer.prototype, "modeNames", {
        // @Override
        get: function () { return folLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(folLexer, "_ATN", {
        get: function () {
            if (!folLexer.__ATN) {
                folLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(folLexer._serializedATN));
            }
            return folLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    folLexer.T__0 = 1;
    folLexer.T__1 = 2;
    folLexer.T__2 = 3;
    folLexer.T__3 = 4;
    folLexer.T__4 = 5;
    folLexer.LPAREN = 6;
    folLexer.RPAREN = 7;
    folLexer.EQUAL = 8;
    folLexer.NOT = 9;
    folLexer.FORALL = 10;
    folLexer.EXISTS = 11;
    folLexer.CHARACTER = 12;
    folLexer.CONJ = 13;
    folLexer.DISJ = 14;
    folLexer.IMPL = 15;
    folLexer.BICOND = 16;
    folLexer.ENDLINE = 17;
    folLexer.WHITESPACE = 18;
    // tslint:disable:no-trailing-whitespace
    folLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    folLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    folLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "LPAREN", "RPAREN", "EQUAL", "NOT",
        "FORALL", "EXISTS", "CHARACTER", "CONJ", "DISJ", "IMPL", "BICOND", "ENDLINE",
        "WHITESPACE",
    ];
    folLexer._LITERAL_NAMES = [
        undefined, "'?'", "'_'", "'#'", "'.'", "','", "'('", "')'", "'='", "'!'",
        "'Forall'", "'Exists'", undefined, "'\\'", "'^'", "'->'", "'<->'",
    ];
    folLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, "LPAREN",
        "RPAREN", "EQUAL", "NOT", "FORALL", "EXISTS", "CHARACTER", "CONJ", "DISJ",
        "IMPL", "BICOND", "ENDLINE", "WHITESPACE",
    ];
    folLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(folLexer._LITERAL_NAMES, folLexer._SYMBOLIC_NAMES, []);
    folLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14a\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
        "\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n" +
        "\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
        "\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x06\x12" +
        "W\n\x12\r\x12\x0E\x12X\x03\x13\x06\x13\\\n\x13\r\x13\x0E\x13]\x03\x13" +
        "\x03\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
        "\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
        "\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
        "\x03\x02\x05\x05\x022;C\\c|\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02b\x02" +
        "\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
        "\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
        "\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
        "\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
        "\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
        "\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03\'\x03\x02" +
        "\x02\x02\x05)\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t-\x03\x02\x02\x02" +
        "\v/\x03\x02\x02\x02\r1\x03\x02\x02\x02\x0F3\x03\x02\x02\x02\x115\x03\x02" +
        "\x02\x02\x137\x03\x02\x02\x02\x159\x03\x02\x02\x02\x17@\x03\x02\x02\x02" +
        "\x19G\x03\x02\x02\x02\x1BI\x03\x02\x02\x02\x1DL\x03\x02\x02\x02\x1FN\x03" +
        "\x02\x02\x02!Q\x03\x02\x02\x02#V\x03\x02\x02\x02%[\x03\x02\x02\x02\'(" +
        "\x07A\x02\x02(\x04\x03\x02\x02\x02)*\x07a\x02\x02*\x06\x03\x02\x02\x02" +
        "+,\x07%\x02\x02,\b\x03\x02\x02\x02-.\x070\x02\x02.\n\x03\x02\x02\x02/" +
        "0\x07.\x02\x020\f\x03\x02\x02\x0212\x07*\x02\x022\x0E\x03\x02\x02\x02" +
        "34\x07+\x02\x024\x10\x03\x02\x02\x0256\x07?\x02\x026\x12\x03\x02\x02\x02" +
        "78\x07#\x02\x028\x14\x03\x02\x02\x029:\x07H\x02\x02:;\x07q\x02\x02;<\x07" +
        "t\x02\x02<=\x07c\x02\x02=>\x07n\x02\x02>?\x07n\x02\x02?\x16\x03\x02\x02" +
        "\x02@A\x07G\x02\x02AB\x07z\x02\x02BC\x07k\x02\x02CD\x07u\x02\x02DE\x07" +
        "v\x02\x02EF\x07u\x02\x02F\x18\x03\x02\x02\x02GH\t\x02\x02\x02H\x1A\x03" +
        "\x02\x02\x02IJ\x07^\x02\x02JK\x071\x02\x02K\x1C\x03\x02\x02\x02LM\x07" +
        "`\x02\x02M\x1E\x03\x02\x02\x02NO\x07/\x02\x02OP\x07@\x02\x02P \x03\x02" +
        "\x02\x02QR\x07>\x02\x02RS\x07/\x02\x02ST\x07@\x02\x02T\"\x03\x02\x02\x02" +
        "UW\t\x03\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02" +
        "XY\x03\x02\x02\x02Y$\x03\x02\x02\x02Z\\\t\x04\x02\x02[Z\x03\x02\x02\x02" +
        "\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x03\x02\x02" +
        "\x02_`\b\x13\x02\x02`&\x03\x02\x02\x02\x05\x02X]\x03\b\x02\x02";
    return folLexer;
}(Lexer_1.Lexer));
exports.folLexer = folLexer;
