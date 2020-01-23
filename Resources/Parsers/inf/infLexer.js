"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/inf/inf.g4 by ANTLR 4.7.3-SNAPSHOT
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
var infLexer = /** @class */ (function (_super) {
    __extends(infLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function infLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(infLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(infLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return infLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "inf.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return infLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return infLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infLexer.prototype, "channelNames", {
        // @Override
        get: function () { return infLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infLexer.prototype, "modeNames", {
        // @Override
        get: function () { return infLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infLexer, "_ATN", {
        get: function () {
            if (!infLexer.__ATN) {
                infLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(infLexer._serializedATN));
            }
            return infLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    infLexer.T__0 = 1;
    infLexer.T__1 = 2;
    infLexer.T__2 = 3;
    infLexer.T__3 = 4;
    infLexer.CHARS = 5;
    infLexer.STRING = 6;
    infLexer.COMMENT = 7;
    infLexer.EOL = 8;
    infLexer.WS = 9;
    // tslint:disable:no-trailing-whitespace
    infLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    infLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    infLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "CHARS", "STRING", "COMMENT", "EOL", "WS",
    ];
    infLexer._LITERAL_NAMES = [
        undefined, "'['", "']'", "'='", "','",
    ];
    infLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "CHARS", "STRING",
        "COMMENT", "EOL", "WS",
    ];
    infLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(infLexer._LITERAL_NAMES, infLexer._SYMBOLIC_NAMES, []);
    infLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\v?\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03" +
        "\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x06\x06\x1F\n\x06\r\x06\x0E\x06" +
        " \x03\x07\x03\x07\x07\x07%\n\x07\f\x07\x0E\x07(\v\x07\x03\x07\x03\x07" +
        "\x03\b\x03\b\x07\b.\n\b\f\b\x0E\b1\v\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
        "\t\x03\n\x06\n:\n\n\r\n\x0E\n;\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05" +
        "\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
        "\x02\v\x03\x02\x06\r\x02$$\'(,,/;>>@@B\\^^aac}\x7F\x7F\x04\x02\f\f$$\x04" +
        "\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02B\x02\x03\x03\x02\x02\x02\x02\x05" +
        "\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
        "\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
        "\x02\x02\x02\x02\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x17\x03" +
        "\x02\x02\x02\x07\x19\x03\x02\x02\x02\t\x1B\x03\x02\x02\x02\v\x1E\x03\x02" +
        "\x02\x02\r\"\x03\x02\x02\x02\x0F+\x03\x02\x02\x02\x116\x03\x02\x02\x02" +
        "\x139\x03\x02\x02\x02\x15\x16\x07]\x02\x02\x16\x04\x03\x02\x02\x02\x17" +
        "\x18\x07_\x02\x02\x18\x06\x03\x02\x02\x02\x19\x1A\x07?\x02\x02\x1A\b\x03" +
        "\x02\x02\x02\x1B\x1C\x07.\x02\x02\x1C\n\x03\x02\x02\x02\x1D\x1F\t\x02" +
        "\x02\x02\x1E\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x1E\x03\x02\x02" +
        "\x02 !\x03\x02\x02\x02!\f\x03\x02\x02\x02\"&\x07$\x02\x02#%\n\x03\x02" +
        "\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02" +
        "\x02\x02\')\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07$\x02\x02*\x0E\x03" +
        "\x02\x02\x02+/\x07=\x02\x02,.\n\x04\x02\x02-,\x03\x02\x02\x02.1\x03\x02" +
        "\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02\x02\x021/\x03\x02" +
        "\x02\x0223\x05\x11\t\x0234\x03\x02\x02\x0245\b\b\x02\x025\x10\x03\x02" +
        "\x02\x0267\t\x04\x02\x027\x12\x03\x02\x02\x028:\t\x05\x02\x0298\x03\x02" +
        "\x02\x02:;\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02" +
        "\x02\x02=>\b\n\x02\x02>\x14\x03\x02\x02\x02\x07\x02 &/;\x03\b\x02\x02";
    return infLexer;
}(Lexer_1.Lexer));
exports.infLexer = infLexer;
