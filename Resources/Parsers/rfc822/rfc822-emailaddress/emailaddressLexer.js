"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-emailaddress/emailaddress.g4 by ANTLR 4.7.3-SNAPSHOT
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
var emailaddressLexer = /** @class */ (function (_super) {
    __extends(emailaddressLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function emailaddressLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(emailaddressLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(emailaddressLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return emailaddressLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "emailaddress.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return emailaddressLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return emailaddressLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressLexer.prototype, "channelNames", {
        // @Override
        get: function () { return emailaddressLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressLexer.prototype, "modeNames", {
        // @Override
        get: function () { return emailaddressLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressLexer, "_ATN", {
        get: function () {
            if (!emailaddressLexer.__ATN) {
                emailaddressLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(emailaddressLexer._serializedATN));
            }
            return emailaddressLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    emailaddressLexer.T__0 = 1;
    emailaddressLexer.T__1 = 2;
    emailaddressLexer.T__2 = 3;
    emailaddressLexer.T__3 = 4;
    emailaddressLexer.T__4 = 5;
    emailaddressLexer.T__5 = 6;
    emailaddressLexer.T__6 = 7;
    emailaddressLexer.T__7 = 8;
    emailaddressLexer.T__8 = 9;
    emailaddressLexer.T__9 = 10;
    emailaddressLexer.T__10 = 11;
    emailaddressLexer.T__11 = 12;
    emailaddressLexer.CHAR = 13;
    emailaddressLexer.ALPHA = 14;
    emailaddressLexer.DIGIT = 15;
    emailaddressLexer.CTL = 16;
    emailaddressLexer.CR = 17;
    emailaddressLexer.LF = 18;
    emailaddressLexer.SPACE = 19;
    emailaddressLexer.HTAB = 20;
    emailaddressLexer.CRLF = 21;
    emailaddressLexer.SPECIALS = 22;
    emailaddressLexer.QUOTE = 23;
    emailaddressLexer.QTEXT = 24;
    emailaddressLexer.DTEXT = 25;
    emailaddressLexer.CTEXT = 26;
    // tslint:disable:no-trailing-whitespace
    emailaddressLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    emailaddressLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    emailaddressLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "CHAR", "ALPHA", "DIGIT", "CTL", "CR", "LF",
        "SPACE", "HTAB", "CRLF", "SPECIALS", "QUOTE", "QTEXT", "DTEXT", "CTEXT",
    ];
    emailaddressLexer._LITERAL_NAMES = [
        undefined, "':'", "';'", "'<'", "'>'", "'@'", "'.'", "'\\'", "'['", "']'",
        "'''", "'('", "')'", undefined, undefined, undefined, undefined, "'\n'",
        "'\r'", "' '", "'\t'", "'\rn'", undefined, "'\"'",
    ];
    emailaddressLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "CHAR",
        "ALPHA", "DIGIT", "CTL", "CR", "LF", "SPACE", "HTAB", "CRLF", "SPECIALS",
        "QUOTE", "QTEXT", "DTEXT", "CTEXT",
    ];
    emailaddressLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(emailaddressLexer._LITERAL_NAMES, emailaddressLexer._SYMBOLIC_NAMES, []);
    emailaddressLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1Cl\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03" +
        "\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16" +
        "\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A" +
        "\x03\x1A\x03\x1B\x03\x1B\x02\x02\x02\x1C\x03\x02\x03\x05\x02\x04\x07\x02" +
        "\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
        "\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
        "#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
        "\x1A3\x02\x1B5\x02\x1C\x03\x02\n\x03\x02\x02\u0129\x03\x02g\x92\x03\x02" +
        "JY\x03\x02\x023\t\x02)+..00<>@@BB]_\x04\x02\f\f\x0F\x0F\x04\x02\f\f]_" +
        "\x05\x02\f\f*+^^\x02k\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
        "\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
        "\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
        "\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
        "\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
        "\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
        "\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
        "\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x02" +
        "3\x03\x02\x02\x02\x025\x03\x02\x02\x02\x037\x03\x02\x02\x02\x059\x03\x02" +
        "\x02\x02\x07;\x03\x02\x02\x02\t=\x03\x02\x02\x02\v?\x03\x02\x02\x02\r" +
        "A\x03\x02\x02\x02\x0FC\x03\x02\x02\x02\x11E\x03\x02\x02\x02\x13G\x03\x02" +
        "\x02\x02\x15I\x03\x02\x02\x02\x17K\x03\x02\x02\x02\x19M\x03\x02\x02\x02" +
        "\x1BO\x03\x02\x02\x02\x1DQ\x03\x02\x02\x02\x1FS\x03\x02\x02\x02!U\x03" +
        "\x02\x02\x02#W\x03\x02\x02\x02%Y\x03\x02\x02\x02\'[\x03\x02\x02\x02)]" +
        "\x03\x02\x02\x02+_\x03\x02\x02\x02-b\x03\x02\x02\x02/d\x03\x02\x02\x02" +
        "1f\x03\x02\x02\x023h\x03\x02\x02\x025j\x03\x02\x02\x0278\x07<\x02\x02" +
        "8\x04\x03\x02\x02\x029:\x07=\x02\x02:\x06\x03\x02\x02\x02;<\x07>\x02\x02" +
        "<\b\x03\x02\x02\x02=>\x07@\x02\x02>\n\x03\x02\x02\x02?@\x07B\x02\x02@" +
        "\f\x03\x02\x02\x02AB\x070\x02\x02B\x0E\x03\x02\x02\x02CD\x07^\x02\x02" +
        "D\x10\x03\x02\x02\x02EF\x07]\x02\x02F\x12\x03\x02\x02\x02GH\x07_\x02\x02" +
        "H\x14\x03\x02\x02\x02IJ\x07)\x02\x02J\x16\x03\x02\x02\x02KL\x07*\x02\x02" +
        "L\x18\x03\x02\x02\x02MN\x07+\x02\x02N\x1A\x03\x02\x02\x02OP\t\x02\x02" +
        "\x02P\x1C\x03\x02\x02\x02QR\t\x03\x02\x02R\x1E\x03\x02\x02\x02ST\t\x04" +
        "\x02\x02T \x03\x02\x02\x02UV\t\x05\x02\x02V\"\x03\x02\x02\x02WX\x07\f" +
        "\x02\x02X$\x03\x02\x02\x02YZ\x07\x0F\x02\x02Z&\x03\x02\x02\x02[\\\x07" +
        "\"\x02\x02\\(\x03\x02\x02\x02]^\x07\v\x02\x02^*\x03\x02\x02\x02_`\x07" +
        "\x0F\x02\x02`a\x07\f\x02\x02a,\x03\x02\x02\x02bc\t\x06\x02\x02c.\x03\x02" +
        "\x02\x02de\x07$\x02\x02e0\x03\x02\x02\x02fg\n\x07\x02\x02g2\x03\x02\x02" +
        "\x02hi\n\b\x02\x02i4\x03\x02\x02\x02jk\n\t\x02\x02k6\x03\x02\x02\x02\x03" +
        "\x02\x02";
    return emailaddressLexer;
}(Lexer_1.Lexer));
exports.emailaddressLexer = emailaddressLexer;
