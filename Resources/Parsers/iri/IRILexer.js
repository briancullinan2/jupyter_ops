"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/iri/IRI.g4 by ANTLR 4.7.3-SNAPSHOT
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
var IRILexer = /** @class */ (function (_super) {
    __extends(IRILexer, _super);
    // tslint:enable:no-trailing-whitespace
    function IRILexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(IRILexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(IRILexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return IRILexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRILexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "IRI.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRILexer.prototype, "ruleNames", {
        // @Override
        get: function () { return IRILexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRILexer.prototype, "serializedATN", {
        // @Override
        get: function () { return IRILexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRILexer.prototype, "channelNames", {
        // @Override
        get: function () { return IRILexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRILexer.prototype, "modeNames", {
        // @Override
        get: function () { return IRILexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IRILexer, "_ATN", {
        get: function () {
            if (!IRILexer.__ATN) {
                IRILexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(IRILexer._serializedATN));
            }
            return IRILexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    IRILexer.UCSCHAR = 1;
    IRILexer.IPRIVATE = 2;
    IRILexer.D0 = 3;
    IRILexer.D1 = 4;
    IRILexer.D2 = 5;
    IRILexer.D3 = 6;
    IRILexer.D4 = 7;
    IRILexer.D5 = 8;
    IRILexer.D6 = 9;
    IRILexer.D7 = 10;
    IRILexer.D8 = 11;
    IRILexer.D9 = 12;
    IRILexer.A = 13;
    IRILexer.B = 14;
    IRILexer.C = 15;
    IRILexer.D = 16;
    IRILexer.E = 17;
    IRILexer.F = 18;
    IRILexer.G = 19;
    IRILexer.H = 20;
    IRILexer.I = 21;
    IRILexer.J = 22;
    IRILexer.K = 23;
    IRILexer.L = 24;
    IRILexer.M = 25;
    IRILexer.N = 26;
    IRILexer.O = 27;
    IRILexer.P = 28;
    IRILexer.Q = 29;
    IRILexer.R = 30;
    IRILexer.S = 31;
    IRILexer.T = 32;
    IRILexer.U = 33;
    IRILexer.V = 34;
    IRILexer.W = 35;
    IRILexer.X = 36;
    IRILexer.Y = 37;
    IRILexer.Z = 38;
    IRILexer.COL2 = 39;
    IRILexer.COL = 40;
    IRILexer.DOT = 41;
    IRILexer.PERCENT = 42;
    IRILexer.HYPHEN = 43;
    IRILexer.TILDE = 44;
    IRILexer.USCORE = 45;
    IRILexer.EXCL = 46;
    IRILexer.DOLLAR = 47;
    IRILexer.AMP = 48;
    IRILexer.SQUOTE = 49;
    IRILexer.OPAREN = 50;
    IRILexer.CPAREN = 51;
    IRILexer.STAR = 52;
    IRILexer.PLUS = 53;
    IRILexer.COMMA = 54;
    IRILexer.SCOL = 55;
    IRILexer.EQUALS = 56;
    IRILexer.FSLASH2 = 57;
    IRILexer.FSLASH = 58;
    IRILexer.QMARK = 59;
    IRILexer.HASH = 60;
    IRILexer.OBRACK = 61;
    IRILexer.CBRACK = 62;
    IRILexer.AT = 63;
    // tslint:disable:no-trailing-whitespace
    IRILexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    IRILexer.modeNames = [
        "DEFAULT_MODE",
    ];
    IRILexer.ruleNames = [
        "UCSCHAR", "IPRIVATE", "D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7",
        "D8", "D9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "COL2", "COL", "DOT", "PERCENT", "HYPHEN", "TILDE", "USCORE", "EXCL",
        "DOLLAR", "AMP", "SQUOTE", "OPAREN", "CPAREN", "STAR", "PLUS", "COMMA",
        "SCOL", "EQUALS", "FSLASH2", "FSLASH", "QMARK", "HASH", "OBRACK", "CBRACK",
        "AT",
    ];
    IRILexer._LITERAL_NAMES = [
        undefined, undefined, undefined, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'",
        "'6'", "'7'", "'8'", "'9'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'::'", "':'", "'.'", "'%'", "'-'", "'~'", "'_'", "'!'", "'$'",
        "'&'", "'''", "'('", "')'", "'*'", "'+'", "','", "';'", "'='", "'//'",
        "'/'", "'?'", "'#'", "'['", "']'", "'@'",
    ];
    IRILexer._SYMBOLIC_NAMES = [
        undefined, "UCSCHAR", "IPRIVATE", "D0", "D1", "D2", "D3", "D4", "D5",
        "D6", "D7", "D8", "D9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
        "Y", "Z", "COL2", "COL", "DOT", "PERCENT", "HYPHEN", "TILDE", "USCORE",
        "EXCL", "DOLLAR", "AMP", "SQUOTE", "OPAREN", "CPAREN", "STAR", "PLUS",
        "COMMA", "SCOL", "EQUALS", "FSLASH2", "FSLASH", "QMARK", "HASH", "OBRACK",
        "CBRACK", "AT",
    ];
    IRILexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(IRILexer._LITERAL_NAMES, IRILexer._SYMBOLIC_NAMES, []);
    IRILexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02A\u0101\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
        "\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
        "\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13" +
        "\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17" +
        "\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
        "\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03" +
        "!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'" +
        "\x03(\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03" +
        ".\x03.\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x033\x034\x034\x03" +
        "5\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03:\x03;\x03" +
        ";\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x02\x02\x02A\x03\x02" +
        "\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
        "\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10" +
        "\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02" +
        "\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02" +
        " ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+" +
        "U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x02" +
        "7m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x03\x02" +
        "\x1C\x04\x02CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02" +
        "HHhh\x04\x02IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02" +
        "NNnn\x04\x02OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02" +
        "TTtt\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02" +
        "ZZzz\x04\x02[[{{\x04\x02\\\\||\x04\x13\x02\xA2\x02\uD801\x02\uF902\x02" +
        "\uFDD1\x02\uFDF2\x02\uFFF1\x02\x02\x03\uFFFF\x03\x02\x04\uFFFF\x04\x02" +
        "\x05\uFFFF\x05\x02\x06\uFFFF\x06\x02\x07\uFFFF\x07\x02\b\uFFFF\b\x02\t" +
        "\uFFFF\t\x02\n\uFFFF\n\x02\v\uFFFF\v\x02\f\uFFFF\f\x02\r\uFFFF\r\x02\x0E" +
        "\uFFFF\x0E\x02\x0F\uFFFF\x0F\u1002\x10\uFFFF\x10\x05\x02\uE002\x02\uF901" +
        "\x02\x02\x11\uFFFF\x11\x02\x12\uFFFF\x12\u0100\x02\x03\x03\x02\x02\x02" +
        "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
        "\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
        "\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
        "\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
        "\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
        "#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
        "\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
        "\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
        "7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
        "\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
        "\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
        "\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02" +
        "\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02" +
        "Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02" +
        "\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02" +
        "\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03" +
        "\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02" +
        "\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02" +
        "{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x03\x81" +
        "\x03\x02\x02\x02\x05\x83\x03\x02\x02\x02\x07\x85\x03\x02\x02\x02\t\x87" +
        "\x03\x02\x02\x02\v\x89\x03\x02\x02\x02\r\x8B\x03\x02\x02\x02\x0F\x8D\x03" +
        "\x02\x02\x02\x11\x8F\x03\x02\x02\x02\x13\x91\x03\x02\x02\x02\x15\x93\x03" +
        "\x02\x02\x02\x17\x95\x03\x02\x02\x02\x19\x97\x03\x02\x02\x02\x1B\x99\x03" +
        "\x02\x02\x02\x1D\x9B\x03\x02\x02\x02\x1F\x9D\x03\x02\x02\x02!\x9F\x03" +
        "\x02\x02\x02#\xA1\x03\x02\x02\x02%\xA3\x03\x02\x02\x02\'\xA5\x03\x02\x02" +
        "\x02)\xA7\x03\x02\x02\x02+\xA9\x03\x02\x02\x02-\xAB\x03\x02\x02\x02/\xAD" +
        "\x03\x02\x02\x021\xAF\x03\x02\x02\x023\xB1\x03\x02\x02\x025\xB3\x03\x02" +
        "\x02\x027\xB5\x03\x02\x02\x029\xB7\x03\x02\x02\x02;\xB9\x03\x02\x02\x02" +
        "=\xBB\x03\x02\x02\x02?\xBD\x03\x02\x02\x02A\xBF\x03\x02\x02\x02C\xC1\x03" +
        "\x02\x02\x02E\xC3\x03\x02\x02\x02G\xC5\x03\x02\x02\x02I\xC7\x03\x02\x02" +
        "\x02K\xC9\x03\x02\x02\x02M\xCB\x03\x02\x02\x02O\xCD\x03\x02\x02\x02Q\xD0" +
        "\x03\x02\x02\x02S\xD2\x03\x02\x02\x02U\xD4\x03\x02\x02\x02W\xD6\x03\x02" +
        "\x02\x02Y\xD8\x03\x02\x02\x02[\xDA\x03\x02\x02\x02]\xDC\x03\x02\x02\x02" +
        "_\xDE\x03\x02\x02\x02a\xE0\x03\x02\x02\x02c\xE2\x03\x02\x02\x02e\xE4\x03" +
        "\x02\x02\x02g\xE6\x03\x02\x02\x02i\xE8\x03\x02\x02\x02k\xEA\x03\x02\x02" +
        "\x02m\xEC\x03\x02\x02\x02o\xEE\x03\x02\x02\x02q\xF0\x03\x02\x02\x02s\xF2" +
        "\x03\x02\x02\x02u\xF5\x03\x02\x02\x02w\xF7\x03\x02\x02\x02y\xF9\x03\x02" +
        "\x02\x02{\xFB\x03\x02\x02\x02}\xFD\x03\x02\x02\x02\x7F\xFF\x03\x02\x02" +
        "\x02\x81\x82\t\x1C\x02\x02\x82\x04\x03\x02\x02\x02\x83\x84\t\x1D\x02\x02" +
        "\x84\x06\x03\x02\x02\x02\x85\x86\x072\x02\x02\x86\b\x03\x02\x02\x02\x87" +
        "\x88\x073\x02\x02\x88\n\x03\x02\x02\x02\x89\x8A\x074\x02\x02\x8A\f\x03" +
        "\x02\x02\x02\x8B\x8C\x075\x02\x02\x8C\x0E\x03\x02\x02\x02\x8D\x8E\x07" +
        "6\x02\x02\x8E\x10\x03\x02\x02\x02\x8F\x90\x077\x02\x02\x90\x12\x03\x02" +
        "\x02\x02\x91\x92\x078\x02\x02\x92\x14\x03\x02\x02\x02\x93\x94\x079\x02" +
        "\x02\x94\x16\x03\x02\x02\x02\x95\x96\x07:\x02\x02\x96\x18\x03\x02\x02" +
        "\x02\x97\x98\x07;\x02\x02\x98\x1A\x03\x02\x02\x02\x99\x9A\t\x02\x02\x02" +
        "\x9A\x1C\x03\x02\x02\x02\x9B\x9C\t\x03\x02\x02\x9C\x1E\x03\x02\x02\x02" +
        "\x9D\x9E\t\x04\x02\x02\x9E \x03\x02\x02\x02\x9F\xA0\t\x05\x02\x02\xA0" +
        "\"\x03\x02\x02\x02\xA1\xA2\t\x06\x02\x02\xA2$\x03\x02\x02\x02\xA3\xA4" +
        "\t\x07\x02\x02\xA4&\x03\x02\x02\x02\xA5\xA6\t\b\x02\x02\xA6(\x03\x02\x02" +
        "\x02\xA7\xA8\t\t\x02\x02\xA8*\x03\x02\x02\x02\xA9\xAA\t\n\x02\x02\xAA" +
        ",\x03\x02\x02\x02\xAB\xAC\t\v\x02\x02\xAC.\x03\x02\x02\x02\xAD\xAE\t\f" +
        "\x02\x02\xAE0\x03\x02\x02\x02\xAF\xB0\t\r\x02\x02\xB02\x03\x02\x02\x02" +
        "\xB1\xB2\t\x0E\x02\x02\xB24\x03\x02\x02\x02\xB3\xB4\t\x0F\x02\x02\xB4" +
        "6\x03\x02\x02\x02\xB5\xB6\t\x10\x02\x02\xB68\x03\x02\x02\x02\xB7\xB8\t" +
        "\x11\x02\x02\xB8:\x03\x02\x02\x02\xB9\xBA\t\x12\x02\x02\xBA<\x03\x02\x02" +
        "\x02\xBB\xBC\t\x13\x02\x02\xBC>\x03\x02\x02\x02\xBD\xBE\t\x14\x02\x02" +
        "\xBE@\x03\x02\x02\x02\xBF\xC0\t\x15\x02\x02\xC0B\x03\x02\x02\x02\xC1\xC2" +
        "\t\x16\x02\x02\xC2D\x03\x02\x02\x02\xC3\xC4\t\x17\x02\x02\xC4F\x03\x02" +
        "\x02\x02\xC5\xC6\t\x18\x02\x02\xC6H\x03\x02\x02\x02\xC7\xC8\t\x19\x02" +
        "\x02\xC8J\x03\x02\x02\x02\xC9\xCA\t\x1A\x02\x02\xCAL\x03\x02\x02\x02\xCB" +
        "\xCC\t\x1B\x02\x02\xCCN\x03\x02\x02\x02\xCD\xCE\x07<\x02\x02\xCE\xCF\x07" +
        "<\x02\x02\xCFP\x03\x02\x02\x02\xD0\xD1\x07<\x02\x02\xD1R\x03\x02\x02\x02" +
        "\xD2\xD3\x070\x02\x02\xD3T\x03\x02\x02\x02\xD4\xD5\x07\'\x02\x02\xD5V" +
        "\x03\x02\x02\x02\xD6\xD7\x07/\x02\x02\xD7X\x03\x02\x02\x02\xD8\xD9\x07" +
        "\x80\x02\x02\xD9Z\x03\x02\x02\x02\xDA\xDB\x07a\x02\x02\xDB\\\x03\x02\x02" +
        "\x02\xDC\xDD\x07#\x02\x02\xDD^\x03\x02\x02\x02\xDE\xDF\x07&\x02\x02\xDF" +
        "`\x03\x02\x02\x02\xE0\xE1\x07(\x02\x02\xE1b\x03\x02\x02\x02\xE2\xE3\x07" +
        ")\x02\x02\xE3d\x03\x02\x02\x02\xE4\xE5\x07*\x02\x02\xE5f\x03\x02\x02\x02" +
        "\xE6\xE7\x07+\x02\x02\xE7h\x03\x02\x02\x02\xE8\xE9\x07,\x02\x02\xE9j\x03" +
        "\x02\x02\x02\xEA\xEB\x07-\x02\x02\xEBl\x03\x02\x02\x02\xEC\xED\x07.\x02" +
        "\x02\xEDn\x03\x02\x02\x02\xEE\xEF\x07=\x02\x02\xEFp\x03\x02\x02\x02\xF0" +
        "\xF1\x07?\x02\x02\xF1r\x03\x02\x02\x02\xF2\xF3\x071\x02\x02\xF3\xF4\x07" +
        "1\x02\x02\xF4t\x03\x02\x02\x02\xF5\xF6\x071\x02\x02\xF6v\x03\x02\x02\x02" +
        "\xF7\xF8\x07A\x02\x02\xF8x\x03\x02\x02\x02\xF9\xFA\x07%\x02\x02\xFAz\x03" +
        "\x02\x02\x02\xFB\xFC\x07]\x02\x02\xFC|\x03\x02\x02\x02\xFD\xFE\x07_\x02" +
        "\x02\xFE~\x03\x02\x02\x02\xFF\u0100\x07B\x02\x02\u0100\x80\x03\x02\x02" +
        "\x02\x03\x02\x02";
    return IRILexer;
}(Lexer_1.Lexer));
exports.IRILexer = IRILexer;