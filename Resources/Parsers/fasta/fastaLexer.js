"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fasta/fasta.g4 by ANTLR 4.7.3-SNAPSHOT
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
var fastaLexer = /** @class */ (function (_super) {
    __extends(fastaLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function fastaLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(fastaLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(fastaLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return fastaLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "fasta.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return fastaLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return fastaLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaLexer.prototype, "channelNames", {
        // @Override
        get: function () { return fastaLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaLexer.prototype, "modeNames", {
        // @Override
        get: function () { return fastaLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaLexer, "_ATN", {
        get: function () {
            if (!fastaLexer.__ATN) {
                fastaLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(fastaLexer._serializedATN));
            }
            return fastaLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    fastaLexer.COMMENTLINE = 1;
    fastaLexer.DESCRIPTIONLINE = 2;
    fastaLexer.TEXT = 3;
    fastaLexer.EOL = 4;
    fastaLexer.SEQUENCELINE = 5;
    // tslint:disable:no-trailing-whitespace
    fastaLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    fastaLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    fastaLexer.ruleNames = [
        "COMMENTLINE", "DESCRIPTIONLINE", "TEXT", "EOL", "DIGIT", "LETTER", "SYMBOL",
        "SEQUENCELINE",
    ];
    fastaLexer._LITERAL_NAMES = [];
    fastaLexer._SYMBOLIC_NAMES = [
        undefined, "COMMENTLINE", "DESCRIPTIONLINE", "TEXT", "EOL", "SEQUENCELINE",
    ];
    fastaLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(fastaLexer._LITERAL_NAMES, fastaLexer._SYMBOLIC_NAMES, []);
    fastaLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07@\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x07\x02\x16\n\x02\f\x02" +
        "\x0E\x02\x19\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
        "\x03!\n\x03\f\x03\x0E\x03$\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
        "\x06\x04+\n\x04\r\x04\x0E\x04,\x03\x05\x05\x050\n\x05\x03\x05\x03\x05" +
        "\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x06\t;\n\t\r\t\x0E" +
        "\t<\x03\t\x03\t\x03\x17\x02\x02\n\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
        "\t\x02\x06\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x07\x03\x02\x05\x03" +
        "\x022;\x04\x02C\\c|\t\x02\"\"(+-1<<]]__aa\x02C\x02\x03\x03\x02\x02\x02" +
        "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
        "\x02\x11\x03\x02\x02\x02\x03\x13\x03\x02\x02\x02\x05\x1C\x03\x02\x02\x02" +
        "\x07*\x03\x02\x02\x02\t/\x03\x02\x02\x02\v3\x03\x02\x02\x02\r5\x03\x02" +
        "\x02\x02\x0F7\x03\x02\x02\x02\x11:\x03\x02\x02\x02\x13\x17\x07=\x02\x02" +
        "\x14\x16\v\x02\x02\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02" +
        "\x17\x18\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x1A\x03\x02\x02\x02" +
        "\x19\x17\x03\x02\x02\x02\x1A\x1B\x05\t\x05\x02\x1B\x04\x03\x02\x02\x02" +
        "\x1C\x1D\x07@\x02\x02\x1D\"\x05\x07\x04\x02\x1E\x1F\x07~\x02\x02\x1F!" +
        "\x05\x07\x04\x02 \x1E\x03\x02\x02\x02!$\x03\x02\x02\x02\" \x03\x02\x02" +
        "\x02\"#\x03\x02\x02\x02#%\x03\x02\x02\x02$\"\x03\x02\x02\x02%&\x05\t\x05" +
        "\x02&\x06\x03\x02\x02\x02\'+\x05\v\x06\x02(+\x05\r\x07\x02)+\x05\x0F\b" +
        "\x02*\'\x03\x02\x02\x02*(\x03\x02\x02\x02*)\x03\x02\x02\x02+,\x03\x02" +
        "\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\b\x03\x02\x02\x02.0\x07" +
        "\x0F\x02\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0212\x07" +
        "\f\x02\x022\n\x03\x02\x02\x0234\t\x02\x02\x024\f\x03\x02\x02\x0256\t\x03" +
        "\x02\x026\x0E\x03\x02\x02\x0278\t\x04\x02\x028\x10\x03\x02\x02\x029;\x05" +
        "\r\x07\x02:9\x03\x02\x02\x02;<\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03" +
        "\x02\x02\x02=>\x03\x02\x02\x02>?\x05\t\x05\x02?\x12\x03\x02\x02\x02\t" +
        "\x02\x17\"*,/<\x02";
    return fastaLexer;
}(Lexer_1.Lexer));
exports.fastaLexer = fastaLexer;
