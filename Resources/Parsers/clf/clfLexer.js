"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clf/clf.g4 by ANTLR 4.7.3-SNAPSHOT
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
var clfLexer = /** @class */ (function (_super) {
    __extends(clfLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function clfLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(clfLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(clfLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return clfLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "clf.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return clfLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return clfLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfLexer.prototype, "channelNames", {
        // @Override
        get: function () { return clfLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfLexer.prototype, "modeNames", {
        // @Override
        get: function () { return clfLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfLexer, "_ATN", {
        get: function () {
            if (!clfLexer.__ATN) {
                clfLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(clfLexer._serializedATN));
            }
            return clfLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    clfLexer.T__0 = 1;
    clfLexer.T__1 = 2;
    clfLexer.T__2 = 3;
    clfLexer.DATE = 4;
    clfLexer.TIME = 5;
    clfLexer.TZ = 6;
    clfLexer.LITERAL = 7;
    clfLexer.IP = 8;
    clfLexer.STRING = 9;
    clfLexer.EOL = 10;
    clfLexer.WS = 11;
    // tslint:disable:no-trailing-whitespace
    clfLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    clfLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    clfLexer.ruleNames = [
        "T__0", "T__1", "T__2", "DATE", "TIME", "TZ", "LITERAL", "IP", "STRING",
        "EOL", "WS",
    ];
    clfLexer._LITERAL_NAMES = [
        undefined, "'['", "':'", "']'",
    ];
    clfLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, "DATE", "TIME", "TZ", "LITERAL",
        "IP", "STRING", "EOL", "WS",
    ];
    clfLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(clfLexer._LITERAL_NAMES, clfLexer._SYMBOLIC_NAMES, []);
    clfLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rq\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
        "\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x06\x05!\n\x05\r\x05\x0E" +
        "\x05\"\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05)\n\x05\r\x05\x0E\x05*\x03" +
        "\x06\x06\x06.\n\x06\r\x06\x0E\x06/\x03\x06\x03\x06\x06\x064\n\x06\r\x06" +
        "\x0E\x065\x03\x06\x03\x06\x06\x06:\n\x06\r\x06\x0E\x06;\x03\x07\x03\x07" +
        "\x06\x07@\n\x07\r\x07\x0E\x07A\x03\b\x03\b\x07\bF\n\b\f\b\x0E\bI\v\b\x03" +
        "\b\x03\b\x03\t\x06\tN\n\t\r\t\x0E\tO\x03\t\x03\t\x06\tT\n\t\r\t\x0E\t" +
        "U\x03\t\x03\t\x06\tZ\n\t\r\t\x0E\t[\x03\t\x03\t\x06\t`\n\t\r\t\x0E\ta" +
        "\x03\n\x06\ne\n\n\r\n\x0E\nf\x03\v\x05\vj\n\v\x03\v\x03\v\x03\f\x03\f" +
        "\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
        "\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x03" +
        "\x02\x06\x03\x022;\x03\x02$$\t\x02*+/02;==C\\aac|\x05\x02\v\f\x0F\x0F" +
        "\"\"\x02}\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
        "\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
        "\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
        "\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02" +
        "\x02\x02\x05\x1B\x03\x02\x02\x02\x07\x1D\x03\x02\x02\x02\t \x03\x02\x02" +
        "\x02\v-\x03\x02\x02\x02\r=\x03\x02\x02\x02\x0FC\x03\x02\x02\x02\x11M\x03" +
        "\x02\x02\x02\x13d\x03\x02\x02\x02\x15i\x03\x02\x02\x02\x17m\x03\x02\x02" +
        "\x02\x19\x1A\x07]\x02\x02\x1A\x04\x03\x02\x02\x02\x1B\x1C\x07<\x02\x02" +
        "\x1C\x06\x03\x02\x02\x02\x1D\x1E\x07_\x02\x02\x1E\b\x03\x02\x02\x02\x1F" +
        "!\t\x02\x02\x02 \x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\" \x03\x02\x02" +
        "\x02\"#\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x071\x02\x02%&\x05\x13\n\x02" +
        "&(\x071\x02\x02\')\t\x02\x02\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02" +
        "*(\x03\x02\x02\x02*+\x03\x02\x02\x02+\n\x03\x02\x02\x02,.\t\x02\x02\x02" +
        "-,\x03\x02\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x02" +
        "01\x03\x02\x02\x0213\x07<\x02\x0224\t\x02\x02\x0232\x03\x02\x02\x0245" +
        "\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x02" +
        "79\x07<\x02\x028:\t\x02\x02\x0298\x03\x02\x02\x02:;\x03\x02\x02\x02;9" +
        "\x03\x02\x02\x02;<\x03\x02\x02\x02<\f\x03\x02\x02\x02=?\x07/\x02\x02>" +
        "@\t\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A?\x03\x02\x02\x02" +
        "AB\x03\x02\x02\x02B\x0E\x03\x02\x02\x02CG\x07$\x02\x02DF\n\x03\x02\x02" +
        "ED\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02" +
        "HJ\x03\x02\x02\x02IG\x03\x02\x02\x02JK\x07$\x02\x02K\x10\x03\x02\x02\x02" +
        "LN\t\x02\x02\x02ML\x03\x02\x02\x02NO\x03\x02\x02\x02OM\x03\x02\x02\x02" +
        "OP\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x070\x02\x02RT\t\x02\x02\x02SR" +
        "\x03\x02\x02\x02TU\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02" +
        "VW\x03\x02\x02\x02WY\x070\x02\x02XZ\t\x02\x02\x02YX\x03\x02\x02\x02Z[" +
        "\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x03\x02\x02\x02" +
        "]_\x070\x02\x02^`\t\x02\x02\x02_^\x03\x02\x02\x02`a\x03\x02\x02\x02a_" +
        "\x03\x02\x02\x02ab\x03\x02\x02\x02b\x12\x03\x02\x02\x02ce\t\x04\x02\x02" +
        "dc\x03\x02\x02\x02ef\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02" +
        "g\x14\x03\x02\x02\x02hj\x07\x0F\x02\x02ih\x03\x02\x02\x02ij\x03\x02\x02" +
        "\x02jk\x03\x02\x02\x02kl\x07\f\x02\x02l\x16\x03\x02\x02\x02mn\t\x05\x02" +
        "\x02no\x03\x02\x02\x02op\b\f\x02\x02p\x18\x03\x02\x02\x02\x10\x02\"*/" +
        "5;AGOU[afi\x03\b\x02\x02";
    return clfLexer;
}(Lexer_1.Lexer));
exports.clfLexer = clfLexer;
