"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sexpression/sexpression.g4 by ANTLR 4.7.3-SNAPSHOT
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
var sexpressionLexer = /** @class */ (function (_super) {
    __extends(sexpressionLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function sexpressionLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(sexpressionLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(sexpressionLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return sexpressionLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "sexpression.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return sexpressionLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return sexpressionLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionLexer.prototype, "channelNames", {
        // @Override
        get: function () { return sexpressionLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionLexer.prototype, "modeNames", {
        // @Override
        get: function () { return sexpressionLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionLexer, "_ATN", {
        get: function () {
            if (!sexpressionLexer.__ATN) {
                sexpressionLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(sexpressionLexer._serializedATN));
            }
            return sexpressionLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    sexpressionLexer.STRING = 1;
    sexpressionLexer.WHITESPACE = 2;
    sexpressionLexer.NUMBER = 3;
    sexpressionLexer.SYMBOL = 4;
    sexpressionLexer.LPAREN = 5;
    sexpressionLexer.RPAREN = 6;
    sexpressionLexer.DOT = 7;
    // tslint:disable:no-trailing-whitespace
    sexpressionLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    sexpressionLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    sexpressionLexer.ruleNames = [
        "STRING", "WHITESPACE", "NUMBER", "SYMBOL", "LPAREN", "RPAREN", "DOT",
        "SYMBOL_START", "DIGIT",
    ];
    sexpressionLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'.'",
    ];
    sexpressionLexer._SYMBOLIC_NAMES = [
        undefined, "STRING", "WHITESPACE", "NUMBER", "SYMBOL", "LPAREN", "RPAREN",
        "DOT",
    ];
    sexpressionLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(sexpressionLexer._LITERAL_NAMES, sexpressionLexer._SYMBOLIC_NAMES, []);
    sexpressionLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\tJ\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x07\x02\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x03\x02\x03\x03\x06" +
        "\x03\"\n\x03\r\x03\x0E\x03#\x03\x03\x03\x03\x03\x04\x05\x04)\n\x04\x03" +
        "\x04\x06\x04,\n\x04\r\x04\x0E\x04-\x03\x04\x03\x04\x06\x042\n\x04\r\x04" +
        "\x0E\x043\x05\x046\n\x04\x03\x05\x03\x05\x03\x05\x07\x05;\n\x05\f\x05" +
        "\x0E\x05>\v\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x05" +
        "\tG\n\t\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
        "\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\x02\x13\x02\x02\x03\x02" +
        "\x06\x04\x02$$^^\x05\x02\v\f\x0F\x0F\"\"\x04\x02--//\x06\x02,-/1C\\c|" +
        "\x02P\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
        "\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
        "\x02\x02\x0F\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05!\x03\x02\x02" +
        "\x02\x07(\x03\x02\x02\x02\t7\x03\x02\x02\x02\v?\x03\x02\x02\x02\rA\x03" +
        "\x02\x02\x02\x0FC\x03\x02\x02\x02\x11F\x03\x02\x02\x02\x13H\x03\x02\x02" +
        "\x02\x15\x1B\x07$\x02\x02\x16\x17\x07^\x02\x02\x17\x1A\v\x02\x02\x02\x18" +
        "\x1A\n\x02\x02\x02\x19\x16\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A" +
        "\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C" +
        "\x1E\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x07$\x02\x02\x1F" +
        "\x04\x03\x02\x02\x02 \"\t\x03\x02\x02! \x03\x02\x02\x02\"#\x03\x02\x02" +
        "\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%&\b\x03\x02" +
        "\x02&\x06\x03\x02\x02\x02\')\t\x04\x02\x02(\'\x03\x02\x02\x02()\x03\x02" +
        "\x02\x02)+\x03\x02\x02\x02*,\x05\x13\n\x02+*\x03\x02\x02\x02,-\x03\x02" +
        "\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.5\x03\x02\x02\x02/1\x070" +
        "\x02\x0202\x05\x13\n\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02" +
        "\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x025/\x03\x02\x02\x0256\x03\x02" +
        "\x02\x026\b\x03\x02\x02\x027<\x05\x11\t\x028;\x05\x11\t\x029;\x05\x13" +
        "\n\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02" +
        "\x02\x02<=\x03\x02\x02\x02=\n\x03\x02\x02\x02><\x03\x02\x02\x02?@\x07" +
        "*\x02\x02@\f\x03\x02\x02\x02AB\x07+\x02\x02B\x0E\x03\x02\x02\x02CD\x07" +
        "0\x02\x02D\x10\x03\x02\x02\x02EG\t\x05\x02\x02FE\x03\x02\x02\x02G\x12" +
        "\x03\x02\x02\x02HI\x042;\x02I\x14\x03\x02\x02\x02\r\x02\x19\x1B#(-35:" +
        "<F\x03\b\x02\x02";
    return sexpressionLexer;
}(Lexer_1.Lexer));
exports.sexpressionLexer = sexpressionLexer;
