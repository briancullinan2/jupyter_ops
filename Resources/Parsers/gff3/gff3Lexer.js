"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gff3/gff3.g4 by ANTLR 4.7.3-SNAPSHOT
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
var gff3Lexer = /** @class */ (function (_super) {
    __extends(gff3Lexer, _super);
    // tslint:enable:no-trailing-whitespace
    function gff3Lexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(gff3Lexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(gff3Lexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return gff3Lexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Lexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "gff3.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Lexer.prototype, "ruleNames", {
        // @Override
        get: function () { return gff3Lexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Lexer.prototype, "serializedATN", {
        // @Override
        get: function () { return gff3Lexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Lexer.prototype, "channelNames", {
        // @Override
        get: function () { return gff3Lexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Lexer.prototype, "modeNames", {
        // @Override
        get: function () { return gff3Lexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Lexer, "_ATN", {
        get: function () {
            if (!gff3Lexer.__ATN) {
                gff3Lexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(gff3Lexer._serializedATN));
            }
            return gff3Lexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    gff3Lexer.T__0 = 1;
    gff3Lexer.T__1 = 2;
    gff3Lexer.T__2 = 3;
    gff3Lexer.HEADER = 4;
    gff3Lexer.COMMENTLINE = 5;
    gff3Lexer.EOL = 6;
    gff3Lexer.TEXT = 7;
    // tslint:disable:no-trailing-whitespace
    gff3Lexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    gff3Lexer.modeNames = [
        "DEFAULT_MODE",
    ];
    gff3Lexer.ruleNames = [
        "T__0", "T__1", "T__2", "HEADER", "COMMENTLINE", "EOL", "TEXT", "CHAR",
        "DIGIT", "SYMBOL",
    ];
    gff3Lexer._LITERAL_NAMES = [
        undefined, "'\t'", "';'", "'='",
    ];
    gff3Lexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, "HEADER", "COMMENTLINE", "EOL",
        "TEXT",
    ];
    gff3Lexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(gff3Lexer._LITERAL_NAMES, gff3Lexer._SYMBOLIC_NAMES, []);
    gff3Lexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\tJ\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x062\n\x06\f\x06\x0E" +
        "\x065\v\x06\x03\x06\x03\x06\x03\x07\x05\x07:\n\x07\x03\x07\x03\x07\x03" +
        "\b\x03\b\x03\b\x06\bA\n\b\r\b\x0E\bB\x03\t\x03\t\x03\n\x03\n\x03\v\x03" +
        "\v\x033\x02\x02\f\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
        "\x07\r\x02\b\x0F\x02\t\x11\x02\x02\x13\x02\x02\x15\x02\x02\x03\x02\x05" +
        "\x04\x02C\\c|\x03\x022;\t\x02\"#&\',0<<AB`a~~\x02K\x02\x03\x03\x02\x02" +
        "\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
        "\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
        "\x03\x17\x03\x02\x02\x02\x05\x19\x03\x02\x02\x02\x07\x1B\x03\x02\x02\x02" +
        "\t\x1D\x03\x02\x02\x02\v/\x03\x02\x02\x02\r9\x03\x02\x02\x02\x0F@\x03" +
        "\x02\x02\x02\x11D\x03\x02\x02\x02\x13F\x03\x02\x02\x02\x15H\x03\x02\x02" +
        "\x02\x17\x18\x07\v\x02\x02\x18\x04\x03\x02\x02\x02\x19\x1A\x07=\x02\x02" +
        "\x1A\x06\x03\x02\x02\x02\x1B\x1C\x07?\x02\x02\x1C\b\x03\x02\x02\x02\x1D" +
        "\x1E\x07%\x02\x02\x1E\x1F\x07%\x02\x02\x1F \x07i\x02\x02 !\x07h\x02\x02" +
        "!\"\x07h\x02\x02\"#\x07/\x02\x02#$\x07x\x02\x02$%\x07g\x02\x02%&\x07t" +
        "\x02\x02&\'\x07u\x02\x02\'(\x07k\x02\x02()\x07q\x02\x02)*\x07p\x02\x02" +
        "*+\x07\"\x02\x02+,\x075\x02\x02,-\x03\x02\x02\x02-.\x05\r\x07\x02.\n\x03" +
        "\x02\x02\x02/3\x07%\x02\x0202\v\x02\x02\x0210\x03\x02\x02\x0225\x03\x02" +
        "\x02\x0234\x03\x02\x02\x0231\x03\x02\x02\x0246\x03\x02\x02\x0253\x03\x02" +
        "\x02\x0267\x05\r\x07\x027\f\x03\x02\x02\x028:\x07\x0F\x02\x0298\x03\x02" +
        "\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x07\f\x02\x02<\x0E\x03" +
        "\x02\x02\x02=A\x05\x11\t\x02>A\x05\x15\v\x02?A\x05\x13\n\x02@=\x03\x02" +
        "\x02\x02@>\x03\x02\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02" +
        "\x02\x02BC\x03\x02\x02\x02C\x10\x03\x02\x02\x02DE\t\x02\x02\x02E\x12\x03" +
        "\x02\x02\x02FG\t\x03\x02\x02G\x14\x03\x02\x02\x02HI\t\x04\x02\x02I\x16" +
        "\x03\x02\x02\x02\x07\x0239@B\x02";
    return gff3Lexer;
}(Lexer_1.Lexer));
exports.gff3Lexer = gff3Lexer;
