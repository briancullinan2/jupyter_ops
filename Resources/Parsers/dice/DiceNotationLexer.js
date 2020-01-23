"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dice/DiceNotationLexer.g4 by ANTLR 4.7.3-SNAPSHOT
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
var DiceNotationLexer = /** @class */ (function (_super) {
    __extends(DiceNotationLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function DiceNotationLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(DiceNotationLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(DiceNotationLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return DiceNotationLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "DiceNotationLexer.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return DiceNotationLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return DiceNotationLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationLexer.prototype, "channelNames", {
        // @Override
        get: function () { return DiceNotationLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationLexer.prototype, "modeNames", {
        // @Override
        get: function () { return DiceNotationLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationLexer, "_ATN", {
        get: function () {
            if (!DiceNotationLexer.__ATN) {
                DiceNotationLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(DiceNotationLexer._serializedATN));
            }
            return DiceNotationLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    DiceNotationLexer.DSEPARATOR = 1;
    DiceNotationLexer.DIGIT = 2;
    DiceNotationLexer.ADDOPERATOR = 3;
    DiceNotationLexer.MULTOPERATOR = 4;
    DiceNotationLexer.LPAREN = 5;
    DiceNotationLexer.RPAREN = 6;
    DiceNotationLexer.WS = 7;
    // tslint:disable:no-trailing-whitespace
    DiceNotationLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    DiceNotationLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    DiceNotationLexer.ruleNames = [
        "DSEPARATOR", "DIGIT", "ADDOPERATOR", "MULTOPERATOR", "ADD", "SUB", "MULT",
        "DIV", "LPAREN", "RPAREN", "WS",
    ];
    DiceNotationLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "'('", "')'",
    ];
    DiceNotationLexer._SYMBOLIC_NAMES = [
        undefined, "DSEPARATOR", "DIGIT", "ADDOPERATOR", "MULTOPERATOR", "LPAREN",
        "RPAREN", "WS",
    ];
    DiceNotationLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(DiceNotationLexer._LITERAL_NAMES, DiceNotationLexer._SYMBOLIC_NAMES, []);
    DiceNotationLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\t;\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
        "\x02\x03\x03\x06\x03\x1D\n\x03\r\x03\x0E\x03\x1E\x03\x04\x03\x04\x05\x04" +
        "#\n\x04\x03\x05\x03\x05\x05\x05\'\n\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
        "\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x06\f6\n\f\r\f" +
        "\x0E\f7\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
        "\t\x02\x06\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13\x02\x07\x15" +
        "\x02\b\x17\x02\t\x03\x02\x04\x04\x02FFff\x04\x02\v\f\x0F\x0F\x02:\x02" +
        "\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
        "\t\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
        "\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1C\x03\x02\x02\x02\x07" +
        "\"\x03\x02\x02\x02\t&\x03\x02\x02\x02\v(\x03\x02\x02\x02\r*\x03\x02\x02" +
        "\x02\x0F,\x03\x02\x02\x02\x11.\x03\x02\x02\x02\x130\x03\x02\x02\x02\x15" +
        "2\x03\x02\x02\x02\x175\x03\x02\x02\x02\x19\x1A\t\x02\x02\x02\x1A\x04\x03" +
        "\x02\x02\x02\x1B\x1D\x042;\x02\x1C\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02" +
        "\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x06\x03\x02" +
        "\x02\x02 #\x05\v\x06\x02!#\x05\r\x07\x02\" \x03\x02\x02\x02\"!\x03\x02" +
        "\x02\x02#\b\x03\x02\x02\x02$\'\x05\x0F\b\x02%\'\x05\x11\t\x02&$\x03\x02" +
        "\x02\x02&%\x03\x02\x02\x02\'\n\x03\x02\x02\x02()\x07-\x02\x02)\f\x03\x02" +
        "\x02\x02*+\x07/\x02\x02+\x0E\x03\x02\x02\x02,-\x07,\x02\x02-\x10\x03\x02" +
        "\x02\x02./\x071\x02\x02/\x12\x03\x02\x02\x0201\x07*\x02\x021\x14\x03\x02" +
        "\x02\x0223\x07+\x02\x023\x16\x03\x02\x02\x0246\t\x03\x02\x0254\x03\x02" +
        "\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x0289\x03\x02" +
        "\x02\x029:\b\f\x02\x02:\x18\x03\x02\x02\x02\x07\x02\x1E\"&7\x03\b\x02" +
        "\x02";
    return DiceNotationLexer;
}(Lexer_1.Lexer));
exports.DiceNotationLexer = DiceNotationLexer;
