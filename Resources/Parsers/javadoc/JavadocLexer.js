"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/javadoc/JavadocLexer.g4 by ANTLR 4.7.3-SNAPSHOT
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
var JavadocLexer = /** @class */ (function (_super) {
    __extends(JavadocLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function JavadocLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(JavadocLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(JavadocLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return JavadocLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavadocLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "JavadocLexer.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavadocLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return JavadocLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavadocLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return JavadocLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavadocLexer.prototype, "channelNames", {
        // @Override
        get: function () { return JavadocLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavadocLexer.prototype, "modeNames", {
        // @Override
        get: function () { return JavadocLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    // @Override
    JavadocLexer.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.NEWLINE_sempred(_localctx, predIndex);
        }
        return true;
    };
    JavadocLexer.prototype.NEWLINE_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return _input.LA(1) != '/';
            case 1:
                return _input.LA(1) != '/';
            case 2:
                return _input.LA(1) != '/';
        }
        return true;
    };
    Object.defineProperty(JavadocLexer, "_ATN", {
        get: function () {
            if (!JavadocLexer.__ATN) {
                JavadocLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JavadocLexer._serializedATN));
            }
            return JavadocLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    JavadocLexer.NAME = 1;
    JavadocLexer.NEWLINE = 2;
    JavadocLexer.SPACE = 3;
    JavadocLexer.TEXT_CONTENT = 4;
    JavadocLexer.AT = 5;
    JavadocLexer.STAR = 6;
    JavadocLexer.SLASH = 7;
    JavadocLexer.JAVADOC_START = 8;
    JavadocLexer.JAVADOC_END = 9;
    JavadocLexer.INLINE_TAG_START = 10;
    JavadocLexer.BRACE_OPEN = 11;
    JavadocLexer.BRACE_CLOSE = 12;
    // tslint:disable:no-trailing-whitespace
    JavadocLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    JavadocLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    JavadocLexer.ruleNames = [
        "NAME", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "STAR", "SLASH", "JAVADOC_START",
        "JAVADOC_END", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE",
    ];
    JavadocLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "'@'", "'*'", "'/'",
        undefined, undefined, "'{@'", "'{'", "'}'",
    ];
    JavadocLexer._SYMBOLIC_NAMES = [
        undefined, "NAME", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "STAR", "SLASH",
        "JAVADOC_START", "JAVADOC_END", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE",
    ];
    JavadocLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JavadocLexer._LITERAL_NAMES, JavadocLexer._SYMBOLIC_NAMES, []);
    JavadocLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0Ex\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x03\x02\x06\x02\x1D\n\x02\r\x02\x0E\x02\x1E\x03\x03\x03\x03\x05\x03#" +
        "\n\x03\x03\x03\x03\x03\x03\x03\x06\x03(\n\x03\r\x03\x0E\x03)\x05\x03," +
        "\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x032\n\x03\x03\x03\x03\x03" +
        "\x03\x03\x06\x037\n\x03\r\x03\x0E\x038\x05\x03;\n\x03\x03\x03\x03\x03" +
        "\x05\x03?\n\x03\x03\x03\x03\x03\x03\x03\x06\x03D\n\x03\r\x03\x0E\x03E" +
        "\x05\x03H\n\x03\x05\x03J\n\x03\x03\x04\x06\x04M\n\x04\r\x04\x0E\x04N\x03" +
        "\x05\x06\x05R\n\x05\r\x05\x0E\x05S\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
        "\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\ta\n\t\f\t\x0E\td\v\t\x03\n" +
        "\x05\ng\n\n\x03\n\x07\nj\n\n\f\n\x0E\nm\v\n\x03\n\x03\n\x03\n\x03\v\x03" +
        "\v\x03\v\x03\f\x03\f\x03\r\x03\r\x02\x02\x02\x0E\x03\x02\x03\x05\x02\x04" +
        "\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
        "\x15\x02\f\x17\x02\r\x19\x02\x0E\x03\x02\x05\x04\x02C\\c|\x04\x02\v\v" +
        "\"\"\n\x02\v\f\x0F\x0F\"\",,11B\\c}\x7F\x7F\x02\x88\x02\x03\x03\x02\x02" +
        "\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
        "\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
        "\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
        "\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1C\x03\x02\x02\x02" +
        "\x05I\x03\x02\x02\x02\x07L\x03\x02\x02\x02\tQ\x03\x02\x02\x02\vU\x03\x02" +
        "\x02\x02\rW\x03\x02\x02\x02\x0FY\x03\x02\x02\x02\x11[\x03\x02\x02\x02" +
        "\x13f\x03\x02\x02\x02\x15q\x03\x02\x02\x02\x17t\x03\x02\x02\x02\x19v\x03" +
        "\x02\x02\x02\x1B\x1D\t\x02\x02\x02\x1C\x1B\x03\x02\x02\x02\x1D\x1E\x03" +
        "\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x04\x03" +
        "\x02\x02\x02 +\x07\f\x02\x02!#\x05\x07\x04\x02\"!\x03\x02\x02\x02\"#\x03" +
        "\x02\x02\x02#\'\x03\x02\x02\x02$%\x05\r\x07\x02%&\x06\x03\x02\x02&(\x03" +
        "\x02\x02\x02\'$\x03\x02\x02\x02()\x03\x02\x02\x02)\'\x03\x02\x02\x02)" +
        "*\x03\x02\x02\x02*,\x03\x02\x02\x02+\"\x03\x02\x02\x02+,\x03\x02\x02\x02" +
        ",J\x03\x02\x02\x02-.\x07\x0F\x02\x02./\x07\f\x02\x02/:\x03\x02\x02\x02" +
        "02\x05\x07\x04\x0210\x03\x02\x02\x0212\x03\x02\x02\x0226\x03\x02\x02\x02" +
        "34\x05\r\x07\x0245\x06\x03\x03\x0257\x03\x02\x02\x0263\x03\x02\x02\x02" +
        "78\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029;\x03\x02\x02\x02" +
        ":1\x03\x02\x02\x02:;\x03\x02\x02\x02;J\x03\x02\x02\x02<G\x07\x0F\x02\x02" +
        "=?\x05\x07\x04\x02>=\x03\x02\x02\x02>?\x03\x02\x02\x02?C\x03\x02\x02\x02" +
        "@A\x05\r\x07\x02AB\x06\x03\x04\x02BD\x03\x02\x02\x02C@\x03\x02\x02\x02" +
        "DE\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02" +
        "G>\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02I \x03\x02\x02\x02" +
        "I-\x03\x02\x02\x02I<\x03\x02\x02\x02J\x06\x03\x02\x02\x02KM\t\x03\x02" +
        "\x02LK\x03\x02\x02\x02MN\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02" +
        "\x02O\b\x03\x02\x02\x02PR\n\x04\x02\x02QP\x03\x02\x02\x02RS\x03\x02\x02" +
        "\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\n\x03\x02\x02\x02UV\x07B\x02" +
        "\x02V\f\x03\x02\x02\x02WX\x07,\x02\x02X\x0E\x03\x02\x02\x02YZ\x071\x02" +
        "\x02Z\x10\x03\x02\x02\x02[\\\x071\x02\x02\\]\x07,\x02\x02]^\x07,\x02\x02" +
        "^b\x03\x02\x02\x02_a\x05\r\x07\x02`_\x03\x02\x02\x02ad\x03\x02\x02\x02" +
        "b`\x03\x02\x02\x02bc\x03\x02\x02\x02c\x12\x03\x02\x02\x02db\x03\x02\x02" +
        "\x02eg\x05\x07\x04\x02fe\x03\x02\x02\x02fg\x03\x02\x02\x02gk\x03\x02\x02" +
        "\x02hj\x05\r\x07\x02ih\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02" +
        "\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mk\x03\x02\x02\x02no\x07,\x02" +
        "\x02op\x071\x02\x02p\x14\x03\x02\x02\x02qr\x07}\x02\x02rs\x07B\x02\x02" +
        "s\x16\x03\x02\x02\x02tu\x07}\x02\x02u\x18\x03\x02\x02\x02vw\x07\x7F\x02" +
        "\x02w\x1A\x03\x02\x02\x02\x13\x02\x1E\")+18:>EGINSbfk\x02";
    return JavadocLexer;
}(Lexer_1.Lexer));
exports.JavadocLexer = JavadocLexer;
