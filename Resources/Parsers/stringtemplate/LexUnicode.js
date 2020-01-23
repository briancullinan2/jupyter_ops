"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/LexUnicode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var LexUnicode = /** @class */ (function (_super) {
    __extends(LexUnicode, _super);
    // tslint:enable:no-trailing-whitespace
    function LexUnicode(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(LexUnicode._ATN, _this);
        return _this;
    }
    Object.defineProperty(LexUnicode.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return LexUnicode.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexUnicode.prototype, "grammarFileName", {
        // @Override
        get: function () { return "LexUnicode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexUnicode.prototype, "ruleNames", {
        // @Override
        get: function () { return LexUnicode.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexUnicode.prototype, "serializedATN", {
        // @Override
        get: function () { return LexUnicode._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexUnicode.prototype, "channelNames", {
        // @Override
        get: function () { return LexUnicode.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexUnicode.prototype, "modeNames", {
        // @Override
        get: function () { return LexUnicode.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LexUnicode, "_ATN", {
        get: function () {
            if (!LexUnicode.__ATN) {
                LexUnicode.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(LexUnicode._serializedATN));
            }
            return LexUnicode.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable:no-trailing-whitespace
    LexUnicode.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    LexUnicode.modeNames = [
        "DEFAULT_MODE",
    ];
    LexUnicode.ruleNames = [
        "UnicodeLetter", "UnicodeClass_LU", "UnicodeClass_LL", "UnicodeClass_LT",
        "UnicodeClass_LM", "UnicodeClass_LO", "UnicodeDigit",
    ];
    LexUnicode._LITERAL_NAMES = [];
    LexUnicode._SYMBOLIC_NAMES = [];
    LexUnicode.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(LexUnicode._LITERAL_NAMES, LexUnicode._SYMBOLIC_NAMES, []);
    LexUnicode._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x02$\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x17" +
        "\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\b\x03\b\x02\x02\x02\t\x03\x02\x02\x05\x02\x02\x07" +
        "\x02\x02\t\x02\x02\v\x02\x02\r\x02\x02\x0F\x02\x02\x03\x02\bT\x02C\\\xC2" +
        "\xD8\xDA\xE0\u0102\u0138\u013B\u0149\u014C\u017F\u0183\u0184\u0186\u018D" +
        "\u0190\u0193\u0195\u0196\u0198\u019A\u019E\u019F\u01A1\u01A2\u01A4\u01AB" +
        "\u01AE\u01B5\u01B7\u01BE\u01C6\u01CF\u01D1\u01DD\u01E0\u01F0\u01F3\u01F6" +
        "\u01F8\u01FA\u01FC\u0234\u023C\u023D\u023F\u0240\u0243\u0248\u024A\u0250" +
        "\u0372\u0374\u0378\u0381\u0388\u038C\u038E\u03A3\u03A5\u03AD\u03D1\u03D6" +
        "\u03DA\u03F0\u03F6\u03F9\u03FB\u03FC\u03FF\u0431\u0462\u0482\u048C\u04CF" +
        "\u04D2\u0530\u0533\u0558\u10A2\u10C7\u10C9\u10CF\u1E02\u1E96\u1EA0\u1F00" +
        "\u1F0A\u1F11\u1F1A\u1F1F\u1F2A\u1F31\u1F3A\u1F41\u1F4A\u1F4F\u1F5B\u1F61" +
        "\u1F6A\u1F71\u1FBA\u1FBD\u1FCA\u1FCD\u1FDA\u1FDD\u1FEA\u1FEE\u1FFA\u1FFD" +
        "\u2104\u2109\u210D\u210F\u2112\u2114\u2117\u211F\u2126\u212F\u2132\u2135" +
        "\u2140\u2141\u2147\u2185\u2C02\u2C30\u2C62\u2C66\u2C69\u2C72\u2C74\u2C77" +
        "\u2C80\u2C82\u2C84\u2CE4\u2CED\u2CEF\u2CF4\uA642\uA644\uA66E\uA682\uA69C" +
        "\uA724\uA730\uA734\uA770\uA77B\uA788\uA78D\uA78F\uA792\uA794\uA798\uA7AF" +
        "\uA7B2\uA7B3\uFF23\uFF3CS\x02c|\xB7\xF8\xFA\u0101\u0103\u0179\u017C\u0182" +
        "\u0185\u0187\u018A\u0194\u0197\u019D\u01A0\u01A3\u01A5\u01A7\u01AA\u01AF" +
        "\u01B2\u01B6\u01B8\u01C1\u01C8\u01CE\u01D0\u01F5\u01F7\u01FB\u01FD\u023B" +
        "\u023E\u0244\u0249\u0295\u0297\u02B1\u0373\u0375\u0379\u037F\u0392\u03D0" +
        "\u03D2\u03D3\u03D7\u03D9\u03DB\u03F5\u03F7\u0461\u0463\u0483\u048D\u04C1" +
        "\u04C4\u0531\u0563\u0589\u1D02\u1D2D\u1D6D\u1D79\u1D7B\u1D9C\u1E03\u1E9F" +
        "\u1EA1\u1F09\u1F12\u1F17\u1F22\u1F29\u1F32\u1F39\u1F42\u1F47\u1F52\u1F59" +
        "\u1F62\u1F69\u1F72\u1F7F\u1F82\u1F89\u1F92\u1F99\u1FA2\u1FA9\u1FB2\u1FB6" +
        "\u1FB8\u1FB9\u1FC0\u1FC6\u1FC8\u1FC9\u1FD2\u1FD5\u1FD8\u1FD9\u1FE2\u1FE9" +
        "\u1FF4\u1FF6\u1FF8\u1FF9\u210C\u2115\u2131\u213B\u213E\u213F\u2148\u214B" +
        "\u2150\u2186\u2C32\u2C60\u2C63\u2C6E\u2C73\u2C7D\u2C83\u2CEE\u2CF0\u2CF5" +
        "\u2D02\u2D27\u2D29\u2D2F\uA643\uA66F\uA683\uA69D\uA725\uA733\uA735\uA77A" +
        "\uA77C\uA77E\uA781\uA789\uA78E\uA790\uA793\uA797\uA799\uA7AB\uA7FC\uAB5C" +
        "\uAB66\uAB67\uFB02\uFB08\uFB15\uFB19\uFF43\uFF5C\b\x02\u01C7\u01CD\u01F4" +
        "\u1F91\u1F9A\u1FA1\u1FAA\u1FB1\u1FBE\u1FCE\u1FFE\u1FFE#\x02\u02B2\u02C3" +
        "\u02C8\u02D3\u02E2\u02E6\u02EE\u02F0\u0376\u037C\u055B\u0642\u06E7\u06E8" +
        "\u07F6\u07F7\u07FC\u081C\u0826\u082A\u0973\u0E48\u0EC8\u10FE\u17D9\u1845" +
        "\u1AA9\u1C7F\u1D2E\u1D6C\u1D7A\u1DC1\u2073\u2081\u2092\u209E\u2C7E\u2C7F" +
        "\u2D71\u2E31\u3007\u3037\u303D\u3100\uA017\uA4FF\uA60E\uA681\uA69E\uA69F" +
        "\uA719\uA721\uA772\uA78A\uA7FA\uA7FB\uA9D1\uA9E8\uAA72\uAADF\uAAF5\uAAF6" +
        "\uAB5E\uAB61\uFF72\uFFA1\xEC\x02\xAC\xBC\u01BD\u01C5\u0296\u05EC\u05F2" +
        "\u05F4\u0622\u0641\u0643\u064C\u0670\u0671\u0673\u06D5\u06D7\u06FE\u0701" +
        "\u0712\u0714\u0731\u074F\u07A7\u07B3\u07EC\u0802\u0817\u0842\u085A\u08A2" +
        "\u08B4\u0906\u093B\u093F\u0952\u095A\u0963\u0974\u0982\u0987\u098E\u0991" +
        "\u0992\u0995\u09AA\u09AC\u09B2\u09B4\u09BB\u09BF\u09D0\u09DE\u09DF\u09E1" +
        "\u09E3\u09F2\u09F3\u0A07\u0A0C\u0A11\u0A12\u0A15\u0A2A\u0A2C\u0A32\u0A34" +
        "\u0A35\u0A37\u0A38\u0A3A\u0A3B\u0A5B\u0A5E\u0A60\u0A76\u0A87\u0A8F\u0A91" +
        "\u0A93\u0A95\u0AAA\u0AAC\u0AB2\u0AB4\u0AB5\u0AB7\u0ABB\u0ABF\u0AD2\u0AE2" +
        "\u0AE3\u0B07\u0B0E\u0B11\u0B12\u0B15\u0B2A\u0B2C\u0B32\u0B34\u0B35\u0B37" +
        "\u0B3B\u0B3F\u0B63\u0B73\u0B85\u0B87\u0B8C\u0B90\u0B92\u0B94\u0B97\u0B9B" +
        "\u0B9C\u0B9E\u0BAC\u0BB0\u0BBB\u0BD2\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C" +
        "\u0C3B\u0C3F\u0C8E\u0C90\u0C92\u0C94\u0CAA\u0CAC\u0CB5\u0CB7\u0CBB\u0CBF" +
        "\u0CE0\u0CE2\u0CE3\u0CF3\u0CF4\u0D07\u0D0E\u0D10\u0D12\u0D14\u0D3C\u0D3F" +
        "\u0D50\u0D62\u0D63\u0D7C\u0D81\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF" +
        "\u0DC8\u0E03\u0E32\u0E34\u0E35\u0E42\u0E47\u0E83\u0E84\u0E86\u0E8C\u0E8F" +
        "\u0E99\u0E9B\u0EA1\u0EA3\u0EA5\u0EA7\u0EA9\u0EAC\u0EAD\u0EAF\u0EB2\u0EB4" +
        "\u0EB5\u0EBF\u0EC6\u0EDE\u0EE1\u0F02\u0F49\u0F4B\u0F6E\u0F8A\u0F8E\u1002" +
        "\u102C\u1041\u1057\u105C\u105F\u1063\u1072\u1077\u1083\u1090\u10FC\u10FF" +
        "\u124A\u124C\u124F\u1252\u1258\u125A\u125F\u1262\u128A\u128C\u128F\u1292" +
        "\u12B2\u12B4\u12B7\u12BA\u12C0\u12C2\u12C7\u12CA\u12D8\u12DA\u1312\u1314" +
        "\u1317\u131A\u135C\u1382\u1391\u13A2\u13F6\u1403\u166E\u1671\u1681\u1683" +
        "\u169C\u16A2\u16EC\u16F3\u16FA\u1702\u170E\u1710\u1713\u1722\u1733\u1742" +
        "\u1753\u1762\u176E\u1770\u1772\u1782\u17B5\u17DE\u1844\u1846\u1879\u1882" +
        "\u18AA\u18AC\u18F7\u1902\u1920\u1952\u196F\u1972\u1976\u1982\u19AD\u19C3" +
        "\u19C9\u1A02\u1A18\u1A22\u1A56\u1B07\u1B35\u1B47\u1B4D\u1B85\u1BA2\u1BB0" +
        "\u1BB1\u1BBC\u1BE7\u1C02\u1C25\u1C4F\u1C51\u1C5C\u1C79\u1CEB\u1CEE\u1CF0" +
        "\u1CF3\u1CF7\u1CF8\u2137\u213A\u2D32\u2D69\u2D82\u2D98\u2DA2\u2DA8\u2DAA" +
        "\u2DB0\u2DB2\u2DB8\u2DBA\u2DC0\u2DC2\u2DC8\u2DCA\u2DD0\u2DD2\u2DD8\u2DDA" +
        "\u2DE0\u3008\u303E\u3043\u3098\u30A1\u30FC\u3101\u312F\u3133\u3190\u31A2" +
        "\u31BC\u31F2\u3201\u3402\u4DB7\u4E02\u9FCE\uA002\uA016\uA018\uA48E\uA4D2" +
        "\uA4F9\uA502\uA60D\uA612\uA621\uA62C\uA62D\uA670\uA6E7\uA7F9\uA803\uA805" +
        "\uA807\uA809\uA80C\uA80E\uA824\uA842\uA875\uA884\uA8B5\uA8F4\uA8F9\uA8FD" +
        "\uA927\uA932\uA948\uA962\uA97E\uA986\uA9B4\uA9E2\uA9E6\uA9E9\uA9F1\uA9FC" +
        "\uAA00\uAA02\uAA2A\uAA42\uAA44\uAA46\uAA4D\uAA62\uAA71\uAA73\uAA78\uAA7C" +
        "\uAAB1\uAAB3\uAABF\uAAC2\uAAC4\uAADD\uAADE\uAAE2\uAAEC\uAAF4\uAB08\uAB0B" +
        "\uAB10\uAB13\uAB18\uAB22\uAB28\uAB2A\uAB30\uABC2\uABE4\uAC02\uD7A5\uD7B2" +
        "\uD7C8\uD7CD\uD7FD\uF902\uFA6F\uFA72\uFADB\uFB1F\uFB2A\uFB2C\uFB38\uFB3A" +
        "\uFB3E\uFB40\uFBB3\uFBD5\uFD3F\uFD52\uFD91\uFD94\uFDC9\uFDF2\uFDFD\uFE72" +
        "\uFE76\uFE78\uFEFE\uFF68\uFF71\uFF73\uFF9F\uFFA2\uFFC0\uFFC4\uFFC9\uFFCC" +
        "\uFFD1\uFFD4\uFFD9\uFFDC\uFFDE\'\x022;\u0662\u066B\u06F2\u06FB\u07C2\u07CB" +
        "\u0968\u0971\u09E8\u09F1\u0A68\u0A71\u0AE8\u0AF1\u0B68\u0B71\u0BE8\u0BF1" +
        "\u0C68\u0C71\u0CE8\u0CF1\u0D68\u0D71\u0DE8\u0DF1\u0E52\u0E5B\u0ED2\u0EDB" +
        "\u0F22\u0F2B\u1042\u104B\u1092\u109B\u17E2\u17EB\u1812\u181B\u1948\u1951" +
        "\u19D2\u19DB\u1A82\u1A8B\u1A92\u1A9B\u1B52\u1B5B\u1BB2\u1BBB\u1C42\u1C4B" +
        "\u1C52\u1C5B\uA622\uA62B\uA8D2\uA8DB\uA902\uA90B\uA9D2\uA9DB\uA9F2\uA9FB" +
        "\uAA52\uAA5B\uABF2\uABFB\uFF12\uFF1B\x02 \x03\x16\x03\x02\x02\x02\x05" +
        "\x18\x03\x02\x02\x02\x07\x1A\x03\x02\x02\x02\t\x1C\x03\x02\x02\x02\v\x1E" +
        "\x03\x02\x02\x02\r \x03\x02\x02\x02\x0F\"\x03\x02\x02\x02\x11\x17\x05" +
        "\x05\x03\x02\x12\x17\x05\x07\x04\x02\x13\x17\x05\t\x05\x02\x14\x17\x05" +
        "\v\x06\x02\x15\x17\x05\r\x07\x02\x16\x11\x03\x02\x02\x02\x16\x12\x03\x02" +
        "\x02\x02\x16\x13\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x16\x15\x03\x02" +
        "\x02\x02\x17\x04\x03\x02\x02\x02\x18\x19\t\x02\x02\x02\x19\x06\x03\x02" +
        "\x02\x02\x1A\x1B\t\x03\x02\x02\x1B\b\x03\x02\x02\x02\x1C\x1D\t\x04\x02" +
        "\x02\x1D\n\x03\x02\x02\x02\x1E\x1F\t\x05\x02\x02\x1F\f\x03\x02\x02\x02" +
        " !\t\x06\x02\x02!\x0E\x03\x02\x02\x02\"#\t\x07\x02\x02#\x10\x03\x02\x02" +
        "\x02\x04\x02\x16\x02";
    return LexUnicode;
}(Lexer_1.Lexer));
exports.LexUnicode = LexUnicode;
