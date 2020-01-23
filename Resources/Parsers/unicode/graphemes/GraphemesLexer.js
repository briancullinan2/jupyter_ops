"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/graphemes/Graphemes.g4 by ANTLR 4.7.3-SNAPSHOT
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
var GraphemesLexer = /** @class */ (function (_super) {
    __extends(GraphemesLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function GraphemesLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(GraphemesLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(GraphemesLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return GraphemesLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "Graphemes.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return GraphemesLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return GraphemesLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesLexer.prototype, "channelNames", {
        // @Override
        get: function () { return GraphemesLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesLexer.prototype, "modeNames", {
        // @Override
        get: function () { return GraphemesLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphemesLexer, "_ATN", {
        get: function () {
            if (!GraphemesLexer.__ATN) {
                GraphemesLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(GraphemesLexer._serializedATN));
            }
            return GraphemesLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    GraphemesLexer.Extend = 1;
    GraphemesLexer.ZWJ = 2;
    GraphemesLexer.SpacingMark = 3;
    GraphemesLexer.EmojiCoreSequence = 4;
    GraphemesLexer.EmojiZWJSequence = 5;
    GraphemesLexer.Prepend = 6;
    GraphemesLexer.NonControl = 7;
    GraphemesLexer.CRLF = 8;
    GraphemesLexer.HangulSyllable = 9;
    // tslint:disable:no-trailing-whitespace
    GraphemesLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    GraphemesLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    GraphemesLexer.ruleNames = [
        "Extend", "ZWJ", "SpacingMark", "VS15", "VS16", "NonspacingMark", "TextPresentationCharacter",
        "EmojiPresentationCharacter", "TextPresentationSequence", "EmojiPresentationSequence",
        "EmojiCharacter", "EmojiModifierSequence", "EmojiFlagSequence", "ExtendedPictographic",
        "EnclosingMark", "EmojiCombiningSequence", "EmojiCoreSequence", "EmojiZWJElement",
        "EmojiZWJSequence", "TagBase", "TagSpec", "TagTerm", "EmojiTagSequence",
        "Prepend", "NonControl", "CRLF", "HangulSyllable",
    ];
    GraphemesLexer._LITERAL_NAMES = [
        undefined, undefined, "'\u200D'",
    ];
    GraphemesLexer._SYMBOLIC_NAMES = [
        undefined, "Extend", "ZWJ", "SpacingMark", "EmojiCoreSequence", "EmojiZWJSequence",
        "Prepend", "NonControl", "CRLF", "HangulSyllable",
    ];
    GraphemesLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(GraphemesLexer._LITERAL_NAMES, GraphemesLexer._SYMBOLIC_NAMES, []);
    GraphemesLexer._serializedATNSegments = 2;
    GraphemesLexer._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\v\xCC\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
        "\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11_\n\x11\x03" +
        "\x11\x07\x11b\n\x11\f\x11\x0E\x11e\v\x11\x03\x12\x03\x12\x03\x12\x05\x12" +
        "j\n\x12\x03\x13\x03\x13\x03\x13\x05\x13o\n\x13\x03\x14\x03\x14\x03\x14" +
        "\x03\x14\x06\x14u\n\x14\r\x14\x0E\x14v\x03\x15\x03\x15\x03\x15\x05\x15" +
        "|\n\x15\x03\x16\x06\x16\x7F\n\x16\r\x16\x0E\x16\x80\x03\x17\x03\x17\x03" +
        "\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1C\x07\x1C\x91\n\x1C\f\x1C\x0E\x1C\x94\v\x1C\x03\x1C" +
        "\x06\x1C\x97\n\x1C\r\x1C\x0E\x1C\x98\x03\x1C\x07\x1C\x9C\n\x1C\f\x1C\x0E" +
        "\x1C\x9F\v\x1C\x03\x1C\x07\x1C\xA2\n\x1C\f\x1C\x0E\x1C\xA5\v\x1C\x03\x1C" +
        "\x03\x1C\x07\x1C\xA9\n\x1C\f\x1C\x0E\x1C\xAC\v\x1C\x03\x1C\x07\x1C\xAF" +
        "\n\x1C\f\x1C\x0E\x1C\xB2\v\x1C\x03\x1C\x07\x1C\xB5\n\x1C\f\x1C\x0E\x1C" +
        "\xB8\v\x1C\x03\x1C\x03\x1C\x07\x1C\xBC\n\x1C\f\x1C\x0E\x1C\xBF\v\x1C\x03" +
        "\x1C\x06\x1C\xC2\n\x1C\r\x1C\x0E\x1C\xC3\x03\x1C\x06\x1C\xC7\n\x1C\r\x1C" +
        "\x0E\x1C\xC8\x05\x1C\xCB\n\x1C\x02\x02\x02\x1D\x03\x02\x03\x05\x02\x04" +
        "\x07\x02\x05\t\x02\x02\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13" +
        "\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02\x02\x1B\x02\x02\x1D\x02\x02\x1F" +
        "\x02\x02!\x02\x02#\x02\x06%\x02\x02\'\x02\x07)\x02\x02+\x02\x02-\x02\x02" +
        "/\x02\x021\x02\b3\x02\t5\x02\n7\x02\v\x03\x02\n\x07\x02\u048A\u048B\u1AC0" +
        "\u1AC0\u20DF\u20E2\u20E4\u20E6\uA672\uA674\x03\x02\x0F\x0F\x03\x02\f\f" +
        "\x04\x02\u1102\u1161\uA962\uA97E\x04\x02\u1162\u11A9\uD7B2\uD7C8\x04\x02" +
        "\u11AA\u1201\uD7CD\uD7FD\u0191\x02\uAC02\uAC02\uAC1E\uAC1E\uAC3A\uAC3A" +
        "\uAC56\uAC56\uAC72\uAC72\uAC8E\uAC8E\uACAA\uACAA\uACC6\uACC6\uACE2\uACE2" +
        "\uACFE\uACFE\uAD1A\uAD1A\uAD36\uAD36\uAD52\uAD52\uAD6E\uAD6E\uAD8A\uAD8A" +
        "\uADA6\uADA6\uADC2\uADC2\uADDE\uADDE\uADFA\uADFA\uAE16\uAE16\uAE32\uAE32" +
        "\uAE4E\uAE4E\uAE6A\uAE6A\uAE86\uAE86\uAEA2\uAEA2\uAEBE\uAEBE\uAEDA\uAEDA" +
        "\uAEF6\uAEF6\uAF12\uAF12\uAF2E\uAF2E\uAF4A\uAF4A\uAF66\uAF66\uAF82\uAF82" +
        "\uAF9E\uAF9E\uAFBA\uAFBA\uAFD6\uAFD6\uAFF2\uAFF2\uB00E\uB00E\uB02A\uB02A" +
        "\uB046\uB046\uB062\uB062\uB07E\uB07E\uB09A\uB09A\uB0B6\uB0B6\uB0D2\uB0D2" +
        "\uB0EE\uB0EE\uB10A\uB10A\uB126\uB126\uB142\uB142\uB15E\uB15E\uB17A\uB17A" +
        "\uB196\uB196\uB1B2\uB1B2\uB1CE\uB1CE\uB1EA\uB1EA\uB206\uB206\uB222\uB222" +
        "\uB23E\uB23E\uB25A\uB25A\uB276\uB276\uB292\uB292\uB2AE\uB2AE\uB2CA\uB2CA" +
        "\uB2E6\uB2E6\uB302\uB302\uB31E\uB31E\uB33A\uB33A\uB356\uB356\uB372\uB372" +
        "\uB38E\uB38E\uB3AA\uB3AA\uB3C6\uB3C6\uB3E2\uB3E2\uB3FE\uB3FE\uB41A\uB41A" +
        "\uB436\uB436\uB452\uB452\uB46E\uB46E\uB48A\uB48A\uB4A6\uB4A6\uB4C2\uB4C2" +
        "\uB4DE\uB4DE\uB4FA\uB4FA\uB516\uB516\uB532\uB532\uB54E\uB54E\uB56A\uB56A" +
        "\uB586\uB586\uB5A2\uB5A2\uB5BE\uB5BE\uB5DA\uB5DA\uB5F6\uB5F6\uB612\uB612" +
        "\uB62E\uB62E\uB64A\uB64A\uB666\uB666\uB682\uB682\uB69E\uB69E\uB6BA\uB6BA" +
        "\uB6D6\uB6D6\uB6F2\uB6F2\uB70E\uB70E\uB72A\uB72A\uB746\uB746\uB762\uB762" +
        "\uB77E\uB77E\uB79A\uB79A\uB7B6\uB7B6\uB7D2\uB7D2\uB7EE\uB7EE\uB80A\uB80A" +
        "\uB826\uB826\uB842\uB842\uB85E\uB85E\uB87A\uB87A\uB896\uB896\uB8B2\uB8B2" +
        "\uB8CE\uB8CE\uB8EA\uB8EA\uB906\uB906\uB922\uB922\uB93E\uB93E\uB95A\uB95A" +
        "\uB976\uB976\uB992\uB992\uB9AE\uB9AE\uB9CA\uB9CA\uB9E6\uB9E6\uBA02\uBA02" +
        "\uBA1E\uBA1E\uBA3A\uBA3A\uBA56\uBA56\uBA72\uBA72\uBA8E\uBA8E\uBAAA\uBAAA" +
        "\uBAC6\uBAC6\uBAE2\uBAE2\uBAFE\uBAFE\uBB1A\uBB1A\uBB36\uBB36\uBB52\uBB52" +
        "\uBB6E\uBB6E\uBB8A\uBB8A\uBBA6\uBBA6\uBBC2\uBBC2\uBBDE\uBBDE\uBBFA\uBBFA" +
        "\uBC16\uBC16\uBC32\uBC32\uBC4E\uBC4E\uBC6A\uBC6A\uBC86\uBC86\uBCA2\uBCA2" +
        "\uBCBE\uBCBE\uBCDA\uBCDA\uBCF6\uBCF6\uBD12\uBD12\uBD2E\uBD2E\uBD4A\uBD4A" +
        "\uBD66\uBD66\uBD82\uBD82\uBD9E\uBD9E\uBDBA\uBDBA\uBDD6\uBDD6\uBDF2\uBDF2" +
        "\uBE0E\uBE0E\uBE2A\uBE2A\uBE46\uBE46\uBE62\uBE62\uBE7E\uBE7E\uBE9A\uBE9A" +
        "\uBEB6\uBEB6\uBED2\uBED2\uBEEE\uBEEE\uBF0A\uBF0A\uBF26\uBF26\uBF42\uBF42" +
        "\uBF5E\uBF5E\uBF7A\uBF7A\uBF96\uBF96\uBFB2\uBFB2\uBFCE\uBFCE\uBFEA\uBFEA" +
        "\uC006\uC006\uC022\uC022\uC03E\uC03E\uC05A\uC05A\uC076\uC076\uC092\uC092" +
        "\uC0AE\uC0AE\uC0CA\uC0CA\uC0E6\uC0E6\uC102\uC102\uC11E\uC11E\uC13A\uC13A" +
        "\uC156\uC156\uC172\uC172\uC18E\uC18E\uC1AA\uC1AA\uC1C6\uC1C6\uC1E2\uC1E2" +
        "\uC1FE\uC1FE\uC21A\uC21A\uC236\uC236\uC252\uC252\uC26E\uC26E\uC28A\uC28A" +
        "\uC2A6\uC2A6\uC2C2\uC2C2\uC2DE\uC2DE\uC2FA\uC2FA\uC316\uC316\uC332\uC332" +
        "\uC34E\uC34E\uC36A\uC36A\uC386\uC386\uC3A2\uC3A2\uC3BE\uC3BE\uC3DA\uC3DA" +
        "\uC3F6\uC3F6\uC412\uC412\uC42E\uC42E\uC44A\uC44A\uC466\uC466\uC482\uC482" +
        "\uC49E\uC49E\uC4BA\uC4BA\uC4D6\uC4D6\uC4F2\uC4F2\uC50E\uC50E\uC52A\uC52A" +
        "\uC546\uC546\uC562\uC562\uC57E\uC57E\uC59A\uC59A\uC5B6\uC5B6\uC5D2\uC5D2" +
        "\uC5EE\uC5EE\uC60A\uC60A\uC626\uC626\uC642\uC642\uC65E\uC65E\uC67A\uC67A" +
        "\uC696\uC696\uC6B2\uC6B2\uC6CE\uC6CE\uC6EA\uC6EA\uC706\uC706\uC722\uC722" +
        "\uC73E\uC73E\uC75A\uC75A\uC776\uC776\uC792\uC792\uC7AE\uC7AE\uC7CA\uC7CA" +
        "\uC7E6\uC7E6\uC802\uC802\uC81E\uC81E\uC83A\uC83A\uC856\uC856\uC872\uC872" +
        "\uC88E\uC88E\uC8AA\uC8AA\uC8C6\uC8C6\uC8E2\uC8E2\uC8FE\uC8FE\uC91A\uC91A" +
        "\uC936\uC936\uC952\uC952\uC96E\uC96E\uC98A\uC98A\uC9A6\uC9A6\uC9C2\uC9C2" +
        "\uC9DE\uC9DE\uC9FA\uC9FA\uCA16\uCA16\uCA32\uCA32\uCA4E\uCA4E\uCA6A\uCA6A" +
        "\uCA86\uCA86\uCAA2\uCAA2\uCABE\uCABE\uCADA\uCADA\uCAF6\uCAF6\uCB12\uCB12" +
        "\uCB2E\uCB2E\uCB4A\uCB4A\uCB66\uCB66\uCB82\uCB82\uCB9E\uCB9E\uCBBA\uCBBA" +
        "\uCBD6\uCBD6\uCBF2\uCBF2\uCC0E\uCC0E\uCC2A\uCC2A\uCC46\uCC46\uCC62\uCC62" +
        "\uCC7E\uCC7E\uCC9A\uCC9A\uCCB6\uCCB6\uCCD2\uCCD2\uCCEE\uCCEE\uCD0A\uCD0A" +
        "\uCD26\uCD26\uCD42\uCD42\uCD5E\uCD5E\uCD7A\uCD7A\uCD96\uCD96\uCDB2\uCDB2" +
        "\uCDCE\uCDCE\uCDEA\uCDEA\uCE06\uCE06\uCE22\uCE22\uCE3E\uCE3E\uCE5A\uCE5A" +
        "\uCE76\uCE76\uCE92\uCE92\uCEAE\uCEAE\uCECA\uCECA\uCEE6\uCEE6\uCF02\uCF02" +
        "\uCF1E\uCF1E\uCF3A\uCF3A\uCF56\uCF56\uCF72\uCF72\uCF8E\uCF8E\uCFAA\uCFAA" +
        "\uCFC6\uCFC6\uCFE2\uCFE2\uCFFE\uCFFE\uD01A\uD01A\uD036\uD036\uD052\uD052" +
        "\uD06E\uD06E\uD08A\uD08A\uD0A6\uD0A6\uD0C2\uD0C2\uD0DE\uD0DE\uD0FA\uD0FA" +
        "\uD116\uD116\uD132\uD132\uD14E\uD14E\uD16A\uD16A\uD186\uD186\uD1A2\uD1A2" +
        "\uD1BE\uD1BE\uD1DA\uD1DA\uD1F6\uD1F6\uD212\uD212\uD22E\uD22E\uD24A\uD24A" +
        "\uD266\uD266\uD282\uD282\uD29E\uD29E\uD2BA\uD2BA\uD2D6\uD2D6\uD2F2\uD2F2" +
        "\uD30E\uD30E\uD32A\uD32A\uD346\uD346\uD362\uD362\uD37E\uD37E\uD39A\uD39A" +
        "\uD3B6\uD3B6\uD3D2\uD3D2\uD3EE\uD3EE\uD40A\uD40A\uD426\uD426\uD442\uD442" +
        "\uD45E\uD45E\uD47A\uD47A\uD496\uD496\uD4B2\uD4B2\uD4CE\uD4CE\uD4EA\uD4EA" +
        "\uD506\uD506\uD522\uD522\uD53E\uD53E\uD55A\uD55A\uD576\uD576\uD592\uD592" +
        "\uD5AE\uD5AE\uD5CA\uD5CA\uD5E6\uD5E6\uD602\uD602\uD61E\uD61E\uD63A\uD63A" +
        "\uD656\uD656\uD672\uD672\uD68E\uD68E\uD6AA\uD6AA\uD6C6\uD6C6\uD6E2\uD6E2" +
        "\uD6FE\uD6FE\uD71A\uD71A\uD736\uD736\uD752\uD752\uD76E\uD76E\uD78A\uD78A" +
        "\u0191\x02\uAC03\uAC1D\uAC1F\uAC39\uAC3B\uAC55\uAC57\uAC71\uAC73\uAC8D" +
        "\uAC8F\uACA9\uACAB\uACC5\uACC7\uACE1\uACE3\uACFD\uACFF\uAD19\uAD1B\uAD35" +
        "\uAD37\uAD51\uAD53\uAD6D\uAD6F\uAD89\uAD8B\uADA5\uADA7\uADC1\uADC3\uADDD" +
        "\uADDF\uADF9\uADFB\uAE15\uAE17\uAE31\uAE33\uAE4D\uAE4F\uAE69\uAE6B\uAE85" +
        "\uAE87\uAEA1\uAEA3\uAEBD\uAEBF\uAED9\uAEDB\uAEF5\uAEF7\uAF11\uAF13\uAF2D" +
        "\uAF2F\uAF49\uAF4B\uAF65\uAF67\uAF81\uAF83\uAF9D\uAF9F\uAFB9\uAFBB\uAFD5" +
        "\uAFD7\uAFF1\uAFF3\uB00D\uB00F\uB029\uB02B\uB045\uB047\uB061\uB063\uB07D" +
        "\uB07F\uB099\uB09B\uB0B5\uB0B7\uB0D1\uB0D3\uB0ED\uB0EF\uB109\uB10B\uB125" +
        "\uB127\uB141\uB143\uB15D\uB15F\uB179\uB17B\uB195\uB197\uB1B1\uB1B3\uB1CD" +
        "\uB1CF\uB1E9\uB1EB\uB205\uB207\uB221\uB223\uB23D\uB23F\uB259\uB25B\uB275" +
        "\uB277\uB291\uB293\uB2AD\uB2AF\uB2C9\uB2CB\uB2E5\uB2E7\uB301\uB303\uB31D" +
        "\uB31F\uB339\uB33B\uB355\uB357\uB371\uB373\uB38D\uB38F\uB3A9\uB3AB\uB3C5" +
        "\uB3C7\uB3E1\uB3E3\uB3FD\uB3FF\uB419\uB41B\uB435\uB437\uB451\uB453\uB46D" +
        "\uB46F\uB489\uB48B\uB4A5\uB4A7\uB4C1\uB4C3\uB4DD\uB4DF\uB4F9\uB4FB\uB515" +
        "\uB517\uB531\uB533\uB54D\uB54F\uB569\uB56B\uB585\uB587\uB5A1\uB5A3\uB5BD" +
        "\uB5BF\uB5D9\uB5DB\uB5F5\uB5F7\uB611\uB613\uB62D\uB62F\uB649\uB64B\uB665" +
        "\uB667\uB681\uB683\uB69D\uB69F\uB6B9\uB6BB\uB6D5\uB6D7\uB6F1\uB6F3\uB70D" +
        "\uB70F\uB729\uB72B\uB745\uB747\uB761\uB763\uB77D\uB77F\uB799\uB79B\uB7B5" +
        "\uB7B7\uB7D1\uB7D3\uB7ED\uB7EF\uB809\uB80B\uB825\uB827\uB841\uB843\uB85D" +
        "\uB85F\uB879\uB87B\uB895\uB897\uB8B1\uB8B3\uB8CD\uB8CF\uB8E9\uB8EB\uB905" +
        "\uB907\uB921\uB923\uB93D\uB93F\uB959\uB95B\uB975\uB977\uB991\uB993\uB9AD" +
        "\uB9AF\uB9C9\uB9CB\uB9E5\uB9E7\uBA01\uBA03\uBA1D\uBA1F\uBA39\uBA3B\uBA55" +
        "\uBA57\uBA71\uBA73\uBA8D\uBA8F\uBAA9\uBAAB\uBAC5\uBAC7\uBAE1\uBAE3\uBAFD" +
        "\uBAFF\uBB19\uBB1B\uBB35\uBB37\uBB51\uBB53\uBB6D\uBB6F\uBB89\uBB8B\uBBA5" +
        "\uBBA7\uBBC1\uBBC3\uBBDD\uBBDF\uBBF9\uBBFB\uBC15\uBC17\uBC31\uBC33\uBC4D" +
        "\uBC4F\uBC69\uBC6B\uBC85\uBC87\uBCA1\uBCA3\uBCBD\uBCBF\uBCD9\uBCDB\uBCF5" +
        "\uBCF7\uBD11\uBD13\uBD2D\uBD2F\uBD49\uBD4B\uBD65\uBD67\uBD81\uBD83\uBD9D" +
        "\uBD9F\uBDB9\uBDBB\uBDD5\uBDD7\uBDF1\uBDF3\uBE0D\uBE0F\uBE29\uBE2B\uBE45" +
        "\uBE47\uBE61\uBE63\uBE7D\uBE7F\uBE99\uBE9B\uBEB5\uBEB7\uBED1\uBED3\uBEED" +
        "\uBEEF\uBF09\uBF0B\uBF25\uBF27\uBF41\uBF43\uBF5D\uBF5F\uBF79\uBF7B\uBF95" +
        "\uBF97\uBFB1\uBFB3\uBFCD\uBFCF\uBFE9\uBFEB\uC005\uC007\uC021\uC023\uC03D" +
        "\uC03F\uC059\uC05B\uC075\uC077\uC091\uC093\uC0AD\uC0AF\uC0C9\uC0CB\uC0E5" +
        "\uC0E7\uC101\uC103\uC11D\uC11F\uC139\uC13B\uC155\uC157\uC171\uC173\uC18D" +
        "\uC18F\uC1A9\uC1AB\uC1C5\uC1C7\uC1E1\uC1E3\uC1FD\uC1FF\uC219\uC21B\uC235" +
        "\uC237\uC251\uC253\uC26D\uC26F\uC289\uC28B\uC2A5\uC2A7\uC2C1\uC2C3\uC2DD" +
        "\uC2DF\uC2F9\uC2FB\uC315\uC317\uC331\uC333\uC34D\uC34F\uC369\uC36B\uC385" +
        "\uC387\uC3A1\uC3A3\uC3BD\uC3BF\uC3D9\uC3DB\uC3F5\uC3F7\uC411\uC413\uC42D" +
        "\uC42F\uC449\uC44B\uC465\uC467\uC481\uC483\uC49D\uC49F\uC4B9\uC4BB\uC4D5" +
        "\uC4D7\uC4F1\uC4F3\uC50D\uC50F\uC529\uC52B\uC545\uC547\uC561\uC563\uC57D" +
        "\uC57F\uC599\uC59B\uC5B5\uC5B7\uC5D1\uC5D3\uC5ED\uC5EF\uC609\uC60B\uC625" +
        "\uC627\uC641\uC643\uC65D\uC65F\uC679\uC67B\uC695\uC697\uC6B1\uC6B3\uC6CD" +
        "\uC6CF\uC6E9\uC6EB\uC705\uC707\uC721\uC723\uC73D\uC73F\uC759\uC75B\uC775" +
        "\uC777\uC791\uC793\uC7AD\uC7AF\uC7C9\uC7CB\uC7E5\uC7E7\uC801\uC803\uC81D" +
        "\uC81F\uC839\uC83B\uC855\uC857\uC871\uC873\uC88D\uC88F\uC8A9\uC8AB\uC8C5" +
        "\uC8C7\uC8E1\uC8E3\uC8FD\uC8FF\uC919\uC91B\uC935\uC937\uC951\uC953\uC96D" +
        "\uC96F\uC989\uC98B\uC9A5\uC9A7\uC9C1\uC9C3\uC9DD\uC9DF\uC9F9\uC9FB\uCA15" +
        "\uCA17\uCA31\uCA33\uCA4D\uCA4F\uCA69\uCA6B\uCA85\uCA87\uCAA1\uCAA3\uCABD" +
        "\uCABF\uCAD9\uCADB\uCAF5\uCAF7\uCB11\uCB13\uCB2D\uCB2F\uCB49\uCB4B\uCB65" +
        "\uCB67\uCB81\uCB83\uCB9D\uCB9F\uCBB9\uCBBB\uCBD5\uCBD7\uCBF1\uCBF3\uCC0D" +
        "\uCC0F\uCC29\uCC2B\uCC45\uCC47\uCC61\uCC63\uCC7D\uCC7F\uCC99\uCC9B\uCCB5" +
        "\uCCB7\uCCD1\uCCD3\uCCED\uCCEF\uCD09\uCD0B\uCD25\uCD27\uCD41\uCD43\uCD5D" +
        "\uCD5F\uCD79\uCD7B\uCD95\uCD97\uCDB1\uCDB3\uCDCD\uCDCF\uCDE9\uCDEB\uCE05" +
        "\uCE07\uCE21\uCE23\uCE3D\uCE3F\uCE59\uCE5B\uCE75\uCE77\uCE91\uCE93\uCEAD" +
        "\uCEAF\uCEC9\uCECB\uCEE5\uCEE7\uCF01\uCF03\uCF1D\uCF1F\uCF39\uCF3B\uCF55" +
        "\uCF57\uCF71\uCF73\uCF8D\uCF8F\uCFA9\uCFAB\uCFC5\uCFC7\uCFE1\uCFE3\uCFFD" +
        "\uCFFF\uD019\uD01B\uD035\uD037\uD051\uD053\uD06D\uD06F\uD089\uD08B\uD0A5" +
        "\uD0A7\uD0C1\uD0C3\uD0DD\uD0DF\uD0F9\uD0FB\uD115\uD117\uD131\uD133\uD14D" +
        "\uD14F\uD169\uD16B\uD185\uD187\uD1A1\uD1A3\uD1BD\uD1BF\uD1D9\uD1DB\uD1F5" +
        "\uD1F7\uD211\uD213\uD22D\uD22F\uD249\uD24B\uD265\uD267\uD281\uD283\uD29D" +
        "\uD29F\uD2B9\uD2BB\uD2D5\uD2D7\uD2F1\uD2F3\uD30D\uD30F\uD329\uD32B\uD345" +
        "\uD347\uD361\uD363\uD37D\uD37F\uD399\uD39B\uD3B5\uD3B7\uD3D1\uD3D3\uD3ED" +
        "\uD3EF\uD409\uD40B\uD425\uD427\uD441\uD443\uD45D\uD45F\uD479\uD47B\uD495" +
        "\uD497\uD4B1\uD4B3\uD4CD\uD4CF\uD4E9\uD4EB\uD505\uD507\uD521\uD523\uD53D" +
        "\uD53F\uD559\uD55B\uD575\uD577\uD591\uD593\uD5AD\uD5AF\uD5C9\uD5CB\uD5E5" +
        "\uD5E7\uD601\uD603\uD61D\uD61F\uD639\uD63B\uD655\uD657\uD671\uD673\uD68D" +
        "\uD68F\uD6A9\uD6AB\uD6C5\uD6C7\uD6E1\uD6E3\uD6FD\uD6FF\uD719\uD71B\uD735" +
        "\uD737\uD751\uD753\uD76D\uD76F\uD789\uD78B\uD7A5\x10\u0131\x02\u0302\x02" +
        "\u0371\x02\u0485\x02\u048B\x02\u0593\x02\u05BF\x02\u05C1\x02\u05C1\x02" +
        "\u05C3\x02\u05C4\x02\u05C6\x02\u05C7\x02\u05C9\x02\u05C9\x02\u0612\x02" +
        "\u061C\x02\u064D\x02\u0661\x02\u0672\x02\u0672\x02\u06D8\x02\u06DE\x02" +
        "\u06E1\x02\u06E6\x02\u06E9\x02\u06EA\x02\u06EC\x02\u06EF\x02\u0713\x02" +
        "\u0713\x02\u0732\x02\u074C\x02\u07A8\x02\u07B2\x02\u07ED\x02\u07F5\x02" +
        "\u0818\x02\u081B\x02\u081D\x02\u0825\x02\u0827\x02\u0829\x02\u082B\x02" +
        "\u082F\x02\u085B\x02\u085D\x02\u08D6\x02\u08E3\x02\u08E5\x02\u0904\x02" +
        "\u093C\x02\u093C\x02\u093E\x02\u093E\x02\u0943\x02\u094A\x02\u094F\x02" +
        "\u094F\x02\u0953\x02\u0959\x02\u0964\x02\u0965\x02\u0983\x02\u0983\x02" +
        "\u09BE\x02\u09BE\x02\u09C0\x02\u09C0\x02\u09C3\x02\u09C6\x02\u09CF\x02" +
        "\u09CF\x02\u09D9\x02\u09D9\x02\u09E4\x02\u09E5\x02\u0A03\x02\u0A04\x02" +
        "\u0A3E\x02\u0A3E\x02\u0A43\x02\u0A44\x02\u0A49\x02\u0A4A\x02\u0A4D\x02" +
        "\u0A4F\x02\u0A53\x02\u0A53\x02\u0A72\x02\u0A73\x02\u0A77\x02\u0A77\x02" +
        "\u0A83\x02\u0A84\x02\u0ABE\x02\u0ABE\x02\u0AC3\x02\u0AC7\x02\u0AC9\x02" +
        "\u0ACA\x02\u0ACF\x02\u0ACF\x02\u0AE4\x02\u0AE5\x02\u0B03\x02\u0B03\x02" +
        "\u0B3E\x02\u0B3E\x02\u0B40\x02\u0B41\x02\u0B43\x02\u0B46\x02\u0B4F\x02" +
        "\u0B4F\x02\u0B58\x02\u0B59\x02\u0B64\x02\u0B65\x02\u0B84\x02\u0B84\x02" +
        "\u0BC0\x02\u0BC0\x02\u0BC2\x02\u0BC2\x02\u0BCF\x02\u0BCF\x02\u0BD9\x02" +
        "\u0BD9\x02\u0C02\x02\u0C02\x02\u0C40\x02\u0C42\x02\u0C48\x02\u0C4A\x02" +
        "\u0C4C\x02\u0C4F\x02\u0C57\x02\u0C58\x02\u0C64\x02\u0C65\x02\u0C83\x02" +
        "\u0C83\x02\u0CBE\x02\u0CBE\x02\u0CC1\x02\u0CC1\x02\u0CC4\x02\u0CC4\x02" +
        "\u0CC8\x02\u0CC8\x02\u0CCE\x02\u0CCF\x02\u0CD7\x02\u0CD8\x02\u0CE4\x02" +
        "\u0CE5\x02\u0D03\x02\u0D03\x02\u0D40\x02\u0D40\x02\u0D43\x02\u0D46\x02" +
        "\u0D4F\x02\u0D4F\x02\u0D59\x02\u0D59\x02\u0D64\x02\u0D65\x02\u0DCC\x02" +
        "\u0DCC\x02\u0DD1\x02\u0DD1\x02\u0DD4\x02\u0DD6\x02\u0DD8\x02\u0DD8\x02" +
        "\u0DE1\x02\u0DE1\x02\u0E33\x02\u0E33\x02\u0E36\x02\u0E3C\x02\u0E49\x02" +
        "\u0E50\x02\u0EB3\x02\u0EB3\x02\u0EB6\x02\u0EBB\x02\u0EBD\x02\u0EBE\x02" +
        "\u0ECA\x02\u0ECF\x02\u0F1A\x02\u0F1B\x02\u0F37\x02\u0F37\x02\u0F39\x02" +
        "\u0F39\x02\u0F3B\x02\u0F3B\x02\u0F73\x02\u0F80\x02\u0F82\x02\u0F86\x02" +
        "\u0F88\x02\u0F89\x02\u0F8F\x02\u0F99\x02\u0F9B\x02\u0FBE\x02\u0FC8\x02" +
        "\u0FC8\x02\u102F\x02\u1032\x02\u1034\x02\u1039\x02\u103B\x02\u103C\x02" +
        "\u103F\x02\u1040\x02\u105A\x02\u105B\x02\u1060\x02\u1062\x02\u1073\x02" +
        "\u1076\x02\u1084\x02\u1084\x02\u1087\x02\u1088\x02\u108F\x02\u108F\x02" +
        "\u109F\x02\u109F\x02\u135F\x02\u1361\x02\u1714\x02\u1716\x02\u1734\x02" +
        "\u1736\x02\u1754\x02\u1755\x02\u1774\x02\u1775\x02\u17B6\x02\u17B7\x02" +
        "\u17B9\x02\u17BF\x02\u17C8\x02\u17C8\x02\u17CB\x02\u17D5\x02\u17DF\x02" +
        "\u17DF\x02\u180D\x02\u180F\x02\u1887\x02\u1888\x02\u18AB\x02\u18AB\x02" +
        "\u1922\x02\u1924\x02\u1929\x02\u192A\x02\u1934\x02\u1934\x02\u193B\x02" +
        "\u193D\x02\u1A19\x02\u1A1A\x02\u1A1D\x02\u1A1D\x02\u1A58\x02\u1A58\x02" +
        "\u1A5A\x02\u1A60\x02\u1A62\x02\u1A62\x02\u1A64\x02\u1A64\x02\u1A67\x02" +
        "\u1A6E\x02\u1A75\x02\u1A7E\x02\u1A81\x02\u1A81\x02\u1AB2\x02\u1AC0\x02" +
        "\u1B02\x02\u1B05\x02\u1B36\x02\u1B36\x02\u1B38\x02\u1B3C\x02\u1B3E\x02" +
        "\u1B3E\x02\u1B44\x02\u1B44\x02\u1B6D\x02\u1B75\x02\u1B82\x02\u1B83\x02" +
        "\u1BA4\x02\u1BA7\x02\u1BAA\x02\u1BAB\x02\u1BAD\x02\u1BAF\x02\u1BE8\x02" +
        "\u1BE8\x02\u1BEA\x02\u1BEB\x02\u1BEF\x02\u1BEF\x02\u1BF1\x02\u1BF3\x02" +
        "\u1C2E\x02\u1C35\x02\u1C38\x02\u1C39\x02\u1CD2\x02\u1CD4\x02\u1CD6\x02" +
        "\u1CE2\x02\u1CE4\x02\u1CEA\x02\u1CEF\x02\u1CEF\x02\u1CF6\x02\u1CF6\x02" +
        "\u1CFA\x02\u1CFB\x02\u1DC2\x02\u1DF7\x02\u1DFD\x02\u1E01\x02\u200E\x02" +
        "\u200E\x02\u20D2\x02\u20F2\x02\u2CF1\x02\u2CF3\x02\u2D81\x02\u2D81\x02" +
        "\u2DE2\x02\u2E01\x02\u302C\x02\u3031\x02\u309B\x02\u309C\x02\uA671\x02" +
        "\uA674\x02\uA676\x02\uA67F\x02\uA6A0\x02\uA6A1\x02\uA6F2\x02\uA6F3\x02" +
        "\uA804\x02\uA804\x02\uA808\x02\uA808\x02\uA80D\x02\uA80D\x02\uA827\x02" +
        "\uA828\x02\uA8C6\x02\uA8C7\x02\uA8E2\x02\uA8F3\x02\uA928\x02\uA92F\x02" +
        "\uA949\x02\uA953\x02\uA982\x02\uA984\x02\uA9B5\x02\uA9B5\x02\uA9B8\x02" +
        "\uA9BB\x02\uA9BE\x02\uA9BE\x02\uA9E7\x02\uA9E7\x02\uAA2B\x02\uAA30\x02" +
        "\uAA33\x02\uAA34\x02\uAA37\x02\uAA38\x02\uAA45\x02\uAA45\x02\uAA4E\x02" +
        "\uAA4E\x02\uAA7E\x02\uAA7E\x02\uAAB2\x02\uAAB2\x02\uAAB4\x02\uAAB6\x02" +
        "\uAAB9\x02\uAABA\x02\uAAC0\x02\uAAC1\x02\uAAC3\x02\uAAC3\x02\uAAEE\x02" +
        "\uAAEF\x02\uAAF8\x02\uAAF8\x02\uABE7\x02\uABE7\x02\uABEA\x02\uABEA\x02" +
        "\uABEF\x02\uABEF\x02\uFB20\x02\uFB20\x02\uFE02\x02\uFE11\x02\uFE22\x02" +
        "\uFE31\x02\uFFA0\x02\uFFA1\x02\u01FF\x03\u01FF\x03\u02E2\x03\u02E2\x03" +
        "\u0378\x03\u037C\x03\u0A03\x03\u0A05\x03\u0A07\x03\u0A08\x03\u0A0E\x03" +
        "\u0A11\x03\u0A3A\x03\u0A3C\x03\u0A41\x03\u0A41\x03\u0AE7\x03\u0AE8\x03" +
        "\u1003\x03\u1003\x03\u103A\x03\u1048\x03\u1081\x03\u1083\x03\u10B5\x03" +
        "\u10B8\x03\u10BB\x03\u10BC\x03\u1102\x03\u1104\x03\u1129\x03\u112D\x03" +
        "\u112F\x03\u1136\x03\u1175\x03\u1175\x03\u1182\x03\u1183\x03\u11B8\x03" +
        "\u11C0\x03\u11CC\x03\u11CE\x03\u1231\x03\u1233\x03\u1236\x03\u1236\x03" +
        "\u1238\x03\u1239\x03\u1240\x03\u1240\x03\u12E1\x03\u12E1\x03\u12E5\x03" +
        "\u12EC\x03\u1302\x03\u1303\x03\u133E\x03\u133E\x03\u1340\x03\u1340\x03" +
        "\u1342\x03\u1342\x03\u1359\x03\u1359\x03\u1368\x03\u136E\x03\u1372\x03" +
        "\u1376\x03\u143A\x03\u1441\x03\u1444\x03\u1446\x03\u1448\x03\u1448\x03" +
        "\u14B2\x03\u14B2\x03\u14B5\x03\u14BA\x03\u14BC\x03\u14BC\x03\u14BF\x03" +
        "\u14BF\x03\u14C1\x03\u14C2\x03\u14C4\x03\u14C5\x03\u15B1\x03\u15B1\x03" +
        "\u15B4\x03\u15B7\x03\u15BE\x03\u15BF\x03\u15C1\x03\u15C2\x03\u15DE\x03" +
        "\u15DF\x03\u1635\x03\u163C\x03\u163F\x03\u163F\x03\u1641\x03\u1642\x03" +
        "\u16AD\x03\u16AD\x03\u16AF\x03\u16AF\x03\u16B2\x03\u16B7\x03\u16B9\x03" +
        "\u16B9\x03\u171F\x03\u1721\x03\u1724\x03\u1727\x03\u1729\x03\u172D\x03" +
        "\u1C32\x03\u1C38\x03\u1C3A\x03\u1C3F\x03\u1C41\x03\u1C41\x03\u1C94\x03" +
        "\u1CA9\x03\u1CAC\x03\u1CB2\x03\u1CB4\x03\u1CB5\x03\u1CB7\x03\u1CB8\x03" +
        "\u6AF2\x03\u6AF6\x03\u6B32\x03\u6B38\x03\u6F91\x03\u6F94\x03\uBC9F\x03" +
        "\uBCA0\x03\uD167\x03\uD167\x03\uD169\x03\uD16B\x03\uD170\x03\uD174\x03" +
        "\uD17D\x03\uD184\x03\uD187\x03\uD18D\x03\uD1AC\x03\uD1AF\x03\uD244\x03" +
        "\uD246\x03\uDA02\x03\uDA38\x03\uDA3D\x03\uDA6E\x03\uDA77\x03\uDA77\x03" +
        "\uDA86\x03\uDA86\x03\uDA9D\x03\uDAA1\x03\uDAA3\x03\uDAB1\x03\uE002\x03" +
        "\uE008\x03\uE00A\x03\uE01A\x03\uE01D\x03\uE023\x03\uE025\x03\uE026\x03" +
        "\uE028\x03\uE02C\x03\uE8D2\x03\uE8D8\x03\uE946\x03\uE94C\x03\"\x10\x81" +
        "\x10\u0102\x10\u01F1\x10\x8E\x02\u0905\x02\u0905\x02\u093D\x02\u093D\x02" +
        "\u0940\x02\u0942\x02\u094B\x02\u094E\x02\u0950\x02\u0951\x02\u0984\x02" +
        "\u0985\x02\u09C1\x02\u09C2\x02\u09C9\x02\u09CA\x02\u09CD\x02\u09CE\x02" +
        "\u0A05\x02\u0A05\x02\u0A40\x02\u0A42\x02\u0A85\x02\u0A85\x02\u0AC0\x02" +
        "\u0AC2\x02\u0ACB\x02\u0ACB\x02\u0ACD\x02\u0ACE\x02\u0B04\x02\u0B05\x02" +
        "\u0B42\x02\u0B42\x02\u0B49\x02\u0B4A\x02\u0B4D\x02\u0B4E\x02\u0BC1\x02" +
        "\u0BC1\x02\u0BC3\x02\u0BC4\x02\u0BC8\x02\u0BCA\x02\u0BCC\x02\u0BCE\x02" +
        "\u0C03\x02\u0C05\x02\u0C43\x02\u0C46\x02\u0C84\x02\u0C85\x02\u0CC0\x02" +
        "\u0CC0\x02\u0CC2\x02\u0CC3\x02\u0CC5\x02\u0CC6\x02\u0CC9\x02\u0CCA\x02" +
        "\u0CCC\x02\u0CCD\x02\u0D04\x02\u0D05\x02\u0D41\x02\u0D42\x02\u0D48\x02" +
        "\u0D4A\x02\u0D4C\x02\u0D4E\x02\u0D84\x02\u0D85\x02\u0DD2\x02\u0DD3\x02" +
        "\u0DDA\x02\u0DE0\x02\u0DF4\x02\u0DF5\x02\u0E35\x02\u0E35\x02\u0EB5\x02" +
        "\u0EB5\x02\u0F40\x02\u0F41\x02\u0F81\x02\u0F81\x02\u1033\x02\u1033\x02" +
        "\u103D\x02\u103E\x02\u1058\x02\u1059\x02\u1086\x02\u1086\x02\u17B8\x02" +
        "\u17B8\x02\u17C0\x02\u17C7\x02\u17C9\x02\u17CA\x02\u1925\x02\u1928\x02" +
        "\u192B\x02\u192D\x02\u1932\x02\u1933\x02\u1935\x02\u193A\x02\u1A1B\x02" +
        "\u1A1C\x02\u1A57\x02\u1A57\x02\u1A59\x02\u1A59\x02\u1A6F\x02\u1A74\x02" +
        "\u1B06\x02\u1B06\x02\u1B37\x02\u1B37\x02\u1B3D\x02\u1B3D\x02\u1B3F\x02" +
        "\u1B43\x02\u1B45\x02\u1B46\x02\u1B84\x02\u1B84\x02\u1BA3\x02\u1BA3\x02" +
        "\u1BA8\x02\u1BA9\x02\u1BAC\x02\u1BAC\x02\u1BE9\x02\u1BE9\x02\u1BEC\x02" +
        "\u1BEE\x02\u1BF0\x02\u1BF0\x02\u1BF4\x02\u1BF5\x02\u1C26\x02\u1C2D\x02" +
        "\u1C36\x02\u1C37\x02\u1CE3\x02\u1CE3\x02\u1CF4\x02\u1CF5\x02\uA825\x02" +
        "\uA826\x02\uA829\x02\uA829\x02\uA882\x02\uA883\x02\uA8B6\x02\uA8C5\x02" +
        "\uA954\x02\uA955\x02\uA985\x02\uA985\x02\uA9B6\x02\uA9B7\x02\uA9BC\x02" +
        "\uA9BD\x02\uA9BF\x02\uA9C2\x02\uAA31\x02\uAA32\x02\uAA35\x02\uAA36\x02" +
        "\uAA4F\x02\uAA4F\x02\uAAED\x02\uAAED\x02\uAAF0\x02\uAAF1\x02\uAAF7\x02" +
        "\uAAF7\x02\uABE5\x02\uABE6\x02\uABE8\x02\uABE9\x02\uABEB\x02\uABEC\x02" +
        "\uABEE\x02\uABEE\x02\u1002\x03\u1002\x03\u1004\x03\u1004\x03\u1084\x03" +
        "\u1084\x03\u10B2\x03\u10B4\x03\u10B9\x03\u10BA\x03\u112E\x03\u112E\x03" +
        "\u1184\x03\u1184\x03\u11B5\x03\u11B7\x03\u11C1\x03\u11C2\x03\u122E\x03" +
        "\u1230\x03\u1234\x03\u1235\x03\u1237\x03\u1237\x03\u12E2\x03\u12E4\x03" +
        "\u1304\x03\u1305\x03\u1341\x03\u1341\x03\u1343\x03\u1346\x03\u1349\x03" +
        "\u134A\x03\u134D\x03\u134F\x03\u1364\x03\u1365\x03\u1437\x03\u1439\x03" +
        "\u1442\x03\u1443\x03\u1447\x03\u1447\x03\u14B3\x03\u14B4\x03\u14BB\x03" +
        "\u14BB\x03\u14BD\x03\u14BE\x03\u14C0\x03\u14C0\x03\u14C3\x03\u14C3\x03" +
        "\u15B2\x03\u15B3\x03\u15BA\x03\u15BD\x03\u15C0\x03\u15C0\x03\u1632\x03" +
        "\u1634\x03\u163D\x03\u163E\x03\u1640\x03\u1640\x03\u16AE\x03\u16AE\x03" +
        "\u16B0\x03\u16B1\x03\u16B8\x03\u16B8\x03\u1722\x03\u1723\x03\u1728\x03" +
        "\u1728\x03\u1C31\x03\u1C31\x03\u1C40\x03\u1C40\x03\u1CAB\x03\u1CAB\x03" +
        "\u1CB3\x03\u1CB3\x03\u1CB6\x03\u1CB6\x03\u6F53\x03\u6F80\x03\uD168\x03" +
        "\uD168\x03\uD16F\x03\uD16F\x03\u011F\x02\u0302\x02\u0371\x02\u0485\x02" +
        "\u0489\x02\u0593\x02\u05BF\x02\u05C1\x02\u05C1\x02\u05C3\x02\u05C4\x02" +
        "\u05C6\x02\u05C7\x02\u05C9\x02\u05C9\x02\u0612\x02\u061C\x02\u064D\x02" +
        "\u0661\x02\u0672\x02\u0672\x02\u06D8\x02\u06DE\x02\u06E1\x02\u06E6\x02" +
        "\u06E9\x02\u06EA\x02\u06EC\x02\u06EF\x02\u0713\x02\u0713\x02\u0732\x02" +
        "\u074C\x02\u07A8\x02\u07B2\x02\u07ED\x02\u07F5\x02\u0818\x02\u081B\x02" +
        "\u081D\x02\u0825\x02\u0827\x02\u0829\x02\u082B\x02\u082F\x02\u085B\x02" +
        "\u085D\x02\u08D6\x02\u08E3\x02\u08E5\x02\u0904\x02\u093C\x02\u093C\x02" +
        "\u093E\x02\u093E\x02\u0943\x02\u094A\x02\u094F\x02\u094F\x02\u0953\x02" +
        "\u0959\x02\u0964\x02\u0965\x02\u0983\x02\u0983\x02\u09BE\x02\u09BE\x02" +
        "\u09C3\x02\u09C6\x02\u09CF\x02\u09CF\x02\u09E4\x02\u09E5\x02\u0A03\x02" +
        "\u0A04\x02\u0A3E\x02\u0A3E\x02\u0A43\x02\u0A44\x02\u0A49\x02\u0A4A\x02" +
        "\u0A4D\x02\u0A4F\x02\u0A53\x02\u0A53\x02\u0A72\x02\u0A73\x02\u0A77\x02" +
        "\u0A77\x02\u0A83\x02\u0A84\x02\u0ABE\x02\u0ABE\x02\u0AC3\x02\u0AC7\x02" +
        "\u0AC9\x02\u0ACA\x02\u0ACF\x02\u0ACF\x02\u0AE4\x02\u0AE5\x02\u0B03\x02" +
        "\u0B03\x02\u0B3E\x02\u0B3E\x02\u0B41\x02\u0B41\x02\u0B43\x02\u0B46\x02" +
        "\u0B4F\x02\u0B4F\x02\u0B58\x02\u0B58\x02\u0B64\x02\u0B65\x02\u0B84\x02" +
        "\u0B84\x02\u0BC2\x02\u0BC2\x02\u0BCF\x02\u0BCF\x02\u0C02\x02\u0C02\x02" +
        "\u0C40\x02\u0C42\x02\u0C48\x02\u0C4A\x02\u0C4C\x02\u0C4F\x02\u0C57\x02" +
        "\u0C58\x02\u0C64\x02\u0C65\x02\u0C83\x02\u0C83\x02\u0CBE\x02\u0CBE\x02" +
        "\u0CC1\x02\u0CC1\x02\u0CC8\x02\u0CC8\x02\u0CCE\x02\u0CCF\x02\u0CE4\x02" +
        "\u0CE5\x02\u0D03\x02\u0D03\x02\u0D43\x02\u0D46\x02\u0D4F\x02\u0D4F\x02" +
        "\u0D64\x02\u0D65\x02\u0DCC\x02\u0DCC\x02\u0DD4\x02\u0DD6\x02\u0DD8\x02" +
        "\u0DD8\x02\u0E33\x02\u0E33\x02\u0E36\x02\u0E3C\x02\u0E49\x02\u0E50\x02" +
        "\u0EB3\x02\u0EB3\x02\u0EB6\x02\u0EBB\x02\u0EBD\x02\u0EBE\x02\u0ECA\x02" +
        "\u0ECF\x02\u0F1A\x02\u0F1B\x02\u0F37\x02\u0F37\x02\u0F39\x02\u0F39\x02" +
        "\u0F3B\x02\u0F3B\x02\u0F73\x02\u0F80\x02\u0F82\x02\u0F86\x02\u0F88\x02" +
        "\u0F89\x02\u0F8F\x02\u0F99\x02\u0F9B\x02\u0FBE\x02\u0FC8\x02\u0FC8\x02" +
        "\u102F\x02\u1032\x02\u1034\x02\u1039\x02\u103B\x02\u103C\x02\u103F\x02" +
        "\u1040\x02\u105A\x02\u105B\x02\u1060\x02\u1062\x02\u1073\x02\u1076\x02" +
        "\u1084\x02\u1084\x02\u1087\x02\u1088\x02\u108F\x02\u108F\x02\u109F\x02" +
        "\u109F\x02\u135F\x02\u1361\x02\u1714\x02\u1716\x02\u1734\x02\u1736\x02" +
        "\u1754\x02\u1755\x02\u1774\x02\u1775\x02\u17B6\x02\u17B7\x02\u17B9\x02" +
        "\u17BF\x02\u17C8\x02\u17C8\x02\u17CB\x02\u17D5\x02\u17DF\x02\u17DF\x02" +
        "\u180D\x02\u180F\x02\u1887\x02\u1888\x02\u18AB\x02\u18AB\x02\u1922\x02" +
        "\u1924\x02\u1929\x02\u192A\x02\u1934\x02\u1934\x02\u193B\x02\u193D\x02" +
        "\u1A19\x02\u1A1A\x02\u1A1D\x02\u1A1D\x02\u1A58\x02\u1A58\x02\u1A5A\x02" +
        "\u1A60\x02\u1A62\x02\u1A62\x02\u1A64\x02\u1A64\x02\u1A67\x02\u1A6E\x02" +
        "\u1A75\x02\u1A7E\x02\u1A81\x02\u1A81\x02\u1AB2\x02\u1ABF\x02\u1B02\x02" +
        "\u1B05\x02\u1B36\x02\u1B36\x02\u1B38\x02\u1B3C\x02\u1B3E\x02\u1B3E\x02" +
        "\u1B44\x02\u1B44\x02\u1B6D\x02\u1B75\x02\u1B82\x02\u1B83\x02\u1BA4\x02" +
        "\u1BA7\x02\u1BAA\x02\u1BAB\x02\u1BAD\x02\u1BAF\x02\u1BE8\x02\u1BE8\x02" +
        "\u1BEA\x02\u1BEB\x02\u1BEF\x02\u1BEF\x02\u1BF1\x02\u1BF3\x02\u1C2E\x02" +
        "\u1C35\x02\u1C38\x02\u1C39\x02\u1CD2\x02\u1CD4\x02\u1CD6\x02\u1CE2\x02" +
        "\u1CE4\x02\u1CEA\x02\u1CEF\x02\u1CEF\x02\u1CF6\x02\u1CF6\x02\u1CFA\x02" +
        "\u1CFB\x02\u1DC2\x02\u1DF7\x02\u1DFD\x02\u1E01\x02\u20D2\x02\u20DE\x02" +
        "\u20E3\x02\u20E3\x02\u20E7\x02\u20F2\x02\u2CF1\x02\u2CF3\x02\u2D81\x02" +
        "\u2D81\x02\u2DE2\x02\u2E01\x02\u302C\x02\u302F\x02\u309B\x02\u309C\x02" +
        "\uA671\x02\uA671\x02\uA676\x02\uA67F\x02\uA6A0\x02\uA6A1\x02\uA6F2\x02" +
        "\uA6F3\x02\uA804\x02\uA804\x02\uA808\x02\uA808\x02\uA80D\x02\uA80D\x02" +
        "\uA827\x02\uA828\x02\uA8C6\x02\uA8C7\x02\uA8E2\x02\uA8F3\x02\uA928\x02" +
        "\uA92F\x02\uA949\x02\uA953\x02\uA982\x02\uA984\x02\uA9B5\x02\uA9B5\x02" +
        "\uA9B8\x02\uA9BB\x02\uA9BE\x02\uA9BE\x02\uA9E7\x02\uA9E7\x02\uAA2B\x02" +
        "\uAA30\x02\uAA33\x02\uAA34\x02\uAA37\x02\uAA38\x02\uAA45\x02\uAA45\x02" +
        "\uAA4E\x02\uAA4E\x02\uAA7E\x02\uAA7E\x02\uAAB2\x02\uAAB2\x02\uAAB4\x02" +
        "\uAAB6\x02\uAAB9\x02\uAABA\x02\uAAC0\x02\uAAC1\x02\uAAC3\x02\uAAC3\x02" +
        "\uAAEE\x02\uAAEF\x02\uAAF8\x02\uAAF8\x02\uABE7\x02\uABE7\x02\uABEA\x02" +
        "\uABEA\x02\uABEF\x02\uABEF\x02\uFB20\x02\uFB20\x02\uFE02\x02\uFE11\x02" +
        "\uFE22\x02\uFE31\x02\u01FF\x03\u01FF\x03\u02E2\x03\u02E2\x03\u0378\x03" +
        "\u037C\x03\u0A03\x03\u0A05\x03\u0A07\x03\u0A08\x03\u0A0E\x03\u0A11\x03" +
        "\u0A3A\x03\u0A3C\x03\u0A41\x03\u0A41\x03\u0AE7\x03\u0AE8\x03\u1003\x03" +
        "\u1003\x03\u103A\x03\u1048\x03\u1081\x03\u1083\x03\u10B5\x03\u10B8\x03" +
        "\u10BB\x03\u10BC\x03\u1102\x03\u1104\x03\u1129\x03\u112D\x03\u112F\x03" +
        "\u1136\x03\u1175\x03\u1175\x03\u1182\x03\u1183\x03\u11B8\x03\u11C0\x03" +
        "\u11CC\x03\u11CE\x03\u1231\x03\u1233\x03\u1236\x03\u1236\x03\u1238\x03" +
        "\u1239\x03\u1240\x03\u1240\x03\u12E1\x03\u12E1\x03\u12E5\x03\u12EC\x03" +
        "\u1302\x03\u1303\x03\u133E\x03\u133E\x03\u1342\x03\u1342\x03\u1368\x03" +
        "\u136E\x03\u1372\x03\u1376\x03\u143A\x03\u1441\x03\u1444\x03\u1446\x03" +
        "\u1448\x03\u1448\x03\u14B5\x03\u14BA\x03\u14BC\x03\u14BC\x03\u14C1\x03" +
        "\u14C2\x03\u14C4\x03\u14C5\x03\u15B4\x03\u15B7\x03\u15BE\x03\u15BF\x03" +
        "\u15C1\x03\u15C2\x03\u15DE\x03\u15DF\x03\u1635\x03\u163C\x03\u163F\x03" +
        "\u163F\x03\u1641\x03\u1642\x03\u16AD\x03\u16AD\x03\u16AF\x03\u16AF\x03" +
        "\u16B2\x03\u16B7\x03\u16B9\x03\u16B9\x03\u171F\x03\u1721\x03\u1724\x03" +
        "\u1727\x03\u1729\x03\u172D\x03\u1C32\x03\u1C38\x03\u1C3A\x03\u1C3F\x03" +
        "\u1C41\x03\u1C41\x03\u1C94\x03\u1CA9\x03\u1CAC\x03\u1CB2\x03\u1CB4\x03" +
        "\u1CB5\x03\u1CB7\x03\u1CB8\x03";
    GraphemesLexer._serializedATNSegment1 = "\u6AF2\x03\u6AF6\x03\u6B32\x03\u6B38\x03\u6F91\x03\u6F94\x03\uBC9F\x03" +
        "\uBCA0\x03\uD169\x03\uD16B\x03\uD17D\x03\uD184\x03\uD187\x03\uD18D\x03" +
        "\uD1AC\x03\uD1AF\x03\uD244\x03\uD246\x03\uDA02\x03\uDA38\x03\uDA3D\x03" +
        "\uDA6E\x03\uDA77\x03\uDA77\x03\uDA86\x03\uDA86\x03\uDA9D\x03\uDAA1\x03" +
        "\uDAA3\x03\uDAB1\x03\uE002\x03\uE008\x03\uE00A\x03\uE01A\x03\uE01D\x03" +
        "\uE023\x03\uE025\x03\uE026\x03\uE028\x03\uE02C\x03\uE8D2\x03\uE8D8\x03" +
        "\uE946\x03\uE94C\x03\u0102\x10\u01F1\x10w\x02%\x02%\x02,\x02,\x022\x02" +
        ";\x02\xAB\x02\xAB\x02\xB0\x02\xB0\x02\u203E\x02\u203E\x02\u204B\x02\u204B" +
        "\x02\u2124\x02\u2124\x02\u213B\x02\u213B\x02\u2196\x02\u219B\x02\u21AB" +
        "\x02\u21AC\x02\u232A\x02\u232A\x02\u23D1\x02\u23D1\x02\u23EF\x02\u23F1" +
        "\x02\u23F3\x02\u23F4\x02\u23FA\x02\u23FC\x02\u24C4\x02\u24C4\x02\u25AC" +
        "\x02\u25AD\x02\u25B8\x02\u25B8\x02\u25C2\x02\u25C2\x02\u25FD\x02\u25FE" +
        "\x02\u2602\x02\u2606\x02\u2610\x02\u2610\x02\u2613\x02\u2613\x02\u261A" +
        "\x02\u261A\x02\u261F\x02\u261F\x02\u2622\x02\u2622\x02\u2624\x02\u2625" +
        "\x02\u2628\x02\u2628\x02\u262C\x02\u262C\x02\u2630\x02\u2631\x02\u263A" +
        "\x02\u263C\x02\u2642\x02\u2642\x02\u2644\x02\u2644\x02\u2662\x02\u2662" +
        "\x02\u2665\x02\u2665\x02\u2667\x02\u2668\x02\u266A\x02\u266A\x02\u267D" +
        "\x02\u267D\x02\u2694\x02\u2694\x02\u2696\x02\u2699\x02\u269B\x02\u269B" +
        "\x02\u269D\x02\u269E\x02\u26A2\x02\u26A2\x02\u26B2\x02\u26B3\x02\u26CA" +
        "\x02\u26CA\x02\u26D1\x02\u26D1\x02\u26D3\x02\u26D3\x02\u26D5\x02\u26D5" +
        "\x02\u26EB\x02\u26EB\x02\u26F2\x02\u26F3\x02\u26F6\x02\u26F6\x02\u26F9" +
        "\x02\u26FB\x02\u2704\x02\u2704\x02\u270A\x02\u270B\x02\u270E\x02\u270F" +
        "\x02\u2711\x02\u2711\x02\u2714\x02\u2714\x02\u2716\x02\u2716\x02\u2718" +
        "\x02\u2718\x02\u271F\x02\u271F\x02\u2723\x02\u2723\x02\u2735\x02\u2736" +
        "\x02\u2746\x02\u2746\x02\u2749\x02\u2749\x02\u2765\x02\u2766\x02\u27A3" +
        "\x02\u27A3\x02\u2936\x02\u2937\x02\u2B07\x02\u2B09\x02\u3032\x02\u3032" +
        "\x02\u303F\x02\u303F\x02\u3299\x02\u3299\x02\u329B\x02\u329B\x02\uF172" +
        "\x03\uF173\x03\uF180\x03\uF181\x03\uF204\x03\uF204\x03\uF239\x03\uF239" +
        "\x03\uF323\x03\uF323\x03\uF326\x03\uF32E\x03\uF338\x03\uF338\x03\uF37F" +
        "\x03\uF37F\x03\uF398\x03\uF399\x03\uF39B\x03\uF39D\x03\uF3A0\x03\uF3A1" +
        "\x03\uF3CD\x03\uF3D0\x03\uF3D6\x03\uF3E1\x03\uF3F5\x03\uF3F5\x03\uF3F7" +
        "\x03\uF3F7\x03\uF3F9\x03\uF3F9\x03\uF441\x03\uF441\x03\uF443\x03\uF443" +
        "\x03\uF4FF\x03\uF4FF\x03\uF54B\x03\uF54C\x03\uF571\x03\uF572\x03\uF575" +
        "\x03\uF57B\x03\uF589\x03\uF589\x03\uF58C\x03\uF58F\x03\uF592\x03\uF592" +
        "\x03\uF5A7\x03\uF5A7\x03\uF5AA\x03\uF5AA\x03\uF5B3\x03\uF5B4\x03\uF5BE" +
        "\x03\uF5BE\x03\uF5C4\x03\uF5C6\x03\uF5D3\x03\uF5D5\x03\uF5DE\x03\uF5E0" +
        "\x03\uF5E3\x03\uF5E3\x03\uF5E5\x03\uF5E5\x03\uF5EA\x03\uF5EA\x03\uF5F1" +
        "\x03\uF5F1\x03\uF5F5\x03\uF5F5\x03\uF5FC\x03\uF5FC\x03\uF6CD\x03\uF6CD" +
        "\x03\uF6CF\x03\uF6D1\x03\uF6E2\x03\uF6E7\x03\uF6EB\x03\uF6EB\x03\uF6F2" +
        "\x03\uF6F2\x03\uF6F5\x03\uF6F5\x03O\x02\u231C\x02\u231D\x02\u23EB\x02" +
        "\u23EE\x02\u23F2\x02\u23F2\x02\u23F5\x02\u23F5\x02\u25FF\x02\u2600\x02" +
        "\u2616\x02\u2617\x02\u264A\x02\u2655\x02\u2681\x02\u2681\x02\u2695\x02" +
        "\u2695\x02\u26A3\x02\u26A3\x02\u26AC\x02\u26AD\x02\u26BF\x02\u26C0\x02" +
        "\u26C6\x02\u26C7\x02\u26D0\x02\u26D0\x02\u26D6\x02\u26D6\x02\u26EC\x02" +
        "\u26EC\x02\u26F4\x02\u26F5\x02\u26F7\x02\u26F7\x02\u26FC\x02\u26FC\x02" +
        "\u26FF\x02\u26FF\x02\u2707\x02\u2707\x02\u270C\x02\u270D\x02\u272A\x02" +
        "\u272A\x02\u274E\x02\u274E\x02\u2750\x02\u2750\x02\u2755\x02\u2757\x02" +
        "\u2759\x02\u2759\x02\u2797\x02\u2799\x02\u27B2\x02\u27B2\x02\u27C1\x02" +
        "\u27C1\x02\u2B1D\x02\u2B1E\x02\u2B52\x02\u2B52\x02\u2B57\x02\u2B57\x02" +
        "\uF006\x03\uF006\x03\uF0D1\x03\uF0D1\x03\uF190\x03\uF190\x03\uF193\x03" +
        "\uF19C\x03\uF1E8\x03\uF201\x03\uF203\x03\uF203\x03\uF21C\x03\uF21C\x03" +
        "\uF231\x03\uF231\x03\uF234\x03\uF238\x03\uF23A\x03\uF23C\x03\uF252\x03" +
        "\uF253\x03\uF302\x03\uF322\x03\uF32F\x03\uF337\x03\uF339\x03\uF37E\x03" +
        "\uF380\x03\uF395\x03\uF3A2\x03\uF3CC\x03\uF3D1\x03\uF3D5\x03\uF3E2\x03" +
        "\uF3F2\x03\uF3F6\x03\uF3F6\x03\uF3FA\x03\uF440\x03\uF442\x03\uF442\x03" +
        "\uF444\x03\uF4FE\x03\uF501\x03\uF53F\x03\uF54D\x03\uF550\x03\uF552\x03" +
        "\uF569\x03\uF57C\x03\uF57C\x03\uF597\x03\uF598\x03\uF5A6\x03\uF5A6\x03" +
        "\uF5FD\x03\uF651\x03\uF682\x03\uF6C7\x03\uF6CE\x03\uF6CE\x03\uF6D2\x03" +
        "\uF6D4\x03\uF6ED\x03\uF6EE\x03\uF6F6\x03\uF6F8\x03\uF912\x03\uF920\x03" +
        "\uF922\x03\uF929\x03\uF932\x03\uF932\x03\uF935\x03\uF93C\x03\uF93E\x03" +
        "\uF940\x03\uF942\x03\uF947\x03\uF949\x03\uF94D\x03\uF952\x03\uF960\x03" +
        "\uF982\x03\uF993\x03\uF9C2\x03\uF9C2\x03\x95\x02%\x02%\x02,\x02,\x022" +
        "\x02;\x02\xAB\x02\xAB\x02\xB0\x02\xB0\x02\u203E\x02\u203E\x02\u204B\x02" +
        "\u204B\x02\u2124\x02\u2124\x02\u213B\x02\u213B\x02\u2196\x02\u219B\x02" +
        "\u21AB\x02\u21AC\x02\u231C\x02\u231D\x02\u232A\x02\u232A\x02\u23D1\x02" +
        "\u23D1\x02\u23EB\x02\u23F5\x02\u23FA\x02\u23FC\x02\u24C4\x02\u24C4\x02" +
        "\u25AC\x02\u25AD\x02\u25B8\x02\u25B8\x02\u25C2\x02\u25C2\x02\u25FD\x02" +
        "\u2600\x02\u2602\x02\u2606\x02\u2610\x02\u2610\x02\u2613\x02\u2613\x02" +
        "\u2616\x02\u2617\x02\u261A\x02\u261A\x02\u261F\x02\u261F\x02\u2622\x02" +
        "\u2622\x02\u2624\x02\u2625\x02\u2628\x02\u2628\x02\u262C\x02\u262C\x02" +
        "\u2630\x02\u2631\x02\u263A\x02\u263C\x02\u2642\x02\u2642\x02\u2644\x02" +
        "\u2644\x02\u264A\x02\u2655\x02\u2662\x02\u2662\x02\u2665\x02\u2665\x02" +
        "\u2667\x02\u2668\x02\u266A\x02\u266A\x02\u267D\x02\u267D\x02\u2681\x02" +
        "\u2681\x02\u2694\x02\u2699\x02\u269B\x02\u269B\x02\u269D\x02\u269E\x02" +
        "\u26A2\x02\u26A3\x02\u26AC\x02\u26AD\x02\u26B2\x02\u26B3\x02\u26BF\x02" +
        "\u26C0\x02\u26C6\x02\u26C7\x02\u26CA\x02\u26CA\x02\u26D0\x02\u26D1\x02" +
        "\u26D3\x02\u26D3\x02\u26D5\x02\u26D6\x02\u26EB\x02\u26EC\x02\u26F2\x02" +
        "\u26F7\x02\u26F9\x02\u26FC\x02\u26FF\x02\u26FF\x02\u2704\x02\u2704\x02" +
        "\u2707\x02\u2707\x02\u270A\x02\u270F\x02\u2711\x02\u2711\x02\u2714\x02" +
        "\u2714\x02\u2716\x02\u2716\x02\u2718\x02\u2718\x02\u271F\x02\u271F\x02" +
        "\u2723\x02\u2723\x02\u272A\x02\u272A\x02\u2735\x02\u2736\x02\u2746\x02" +
        "\u2746\x02\u2749\x02\u2749\x02\u274E\x02\u274E\x02\u2750\x02\u2750\x02" +
        "\u2755\x02\u2757\x02\u2759\x02\u2759\x02\u2765\x02\u2766\x02\u2797\x02" +
        "\u2799\x02\u27A3\x02\u27A3\x02\u27B2\x02\u27B2\x02\u27C1\x02\u27C1\x02" +
        "\u2936\x02\u2937\x02\u2B07\x02\u2B09\x02\u2B1D\x02\u2B1E\x02\u2B52\x02" +
        "\u2B52\x02\u2B57\x02\u2B57\x02\u3032\x02\u3032\x02\u303F\x02\u303F\x02" +
        "\u3299\x02\u3299\x02\u329B\x02\u329B\x02\uF006\x03\uF006\x03\uF0D1\x03" +
        "\uF0D1\x03\uF172\x03\uF173\x03\uF180\x03\uF181\x03\uF190\x03\uF190\x03" +
        "\uF193\x03\uF19C\x03\uF1E8\x03\uF201\x03\uF203\x03\uF204\x03\uF21C\x03" +
        "\uF21C\x03\uF231\x03\uF231\x03\uF234\x03\uF23C\x03\uF252\x03\uF253\x03" +
        "\uF302\x03\uF323\x03\uF326\x03\uF395\x03\uF398\x03\uF399\x03\uF39B\x03" +
        "\uF39D\x03\uF3A0\x03\uF3F2\x03\uF3F5\x03\uF3F7\x03\uF3F9\x03\uF4FF\x03" +
        "\uF501\x03\uF53F\x03\uF54B\x03\uF550\x03\uF552\x03\uF569\x03\uF571\x03" +
        "\uF572\x03\uF575\x03\uF57C\x03\uF589\x03\uF589\x03\uF58C\x03\uF58F\x03" +
        "\uF592\x03\uF592\x03\uF597\x03\uF598\x03\uF5A6\x03\uF5A7\x03\uF5AA\x03" +
        "\uF5AA\x03\uF5B3\x03\uF5B4\x03\uF5BE\x03\uF5BE\x03\uF5C4\x03\uF5C6\x03" +
        "\uF5D3\x03\uF5D5\x03\uF5DE\x03\uF5E0\x03\uF5E3\x03\uF5E3\x03\uF5E5\x03" +
        "\uF5E5\x03\uF5EA\x03\uF5EA\x03\uF5F1\x03\uF5F1\x03\uF5F5\x03\uF5F5\x03" +
        "\uF5FC\x03\uF651\x03\uF682\x03\uF6C7\x03\uF6CD\x03\uF6D4\x03\uF6E2\x03" +
        "\uF6E7\x03\uF6EB\x03\uF6EB\x03\uF6ED\x03\uF6EE\x03\uF6F2\x03\uF6F2\x03" +
        "\uF6F5\x03\uF6F8\x03\uF912\x03\uF920\x03\uF922\x03\uF929\x03\uF932\x03" +
        "\uF932\x03\uF935\x03\uF93C\x03\uF93E\x03\uF940\x03\uF942\x03\uF947\x03" +
        "\uF949\x03\uF94D\x03\uF952\x03\uF960\x03\uF982\x03\uF993\x03\uF9C2\x03" +
        "\uF9C2\x03\x1F\x02\u261F\x02\u261F\x02\u26FB\x02\u26FB\x02\u270C\x02\u270F" +
        "\x02\uF387\x03\uF387\x03\uF3C5\x03\uF3C6\x03\uF3CC\x03\uF3CD\x03\uF444" +
        "\x03\uF445\x03\uF448\x03\uF452\x03\uF468\x03\uF46B\x03\uF470\x03\uF470" +
        "\x03\uF472\x03\uF47A\x03\uF47E\x03\uF47E\x03\uF483\x03\uF485\x03\uF487" +
        "\x03\uF489\x03\uF4AC\x03\uF4AC\x03\uF577\x03\uF577\x03\uF57C\x03\uF57C" +
        "\x03\uF592\x03\uF592\x03\uF597\x03\uF598\x03\uF647\x03\uF649\x03\uF64D" +
        "\x03\uF651\x03\uF6A5\x03\uF6A5\x03\uF6B6\x03\uF6B8\x03\uF6C2\x03\uF6C2" +
        "\x03\uF91A\x03\uF920\x03\uF928\x03\uF928\x03\uF932\x03\uF932\x03\uF935" +
        "\x03\uF93B\x03\uF93E\x03\uF940\x03\x03\x02\uF3FD\x03\uF401\x03\x03\x02" +
        "\uF1E8\x03\uF201\x03h\x02\u238A\x02\u238A\x02\u2607\x02\u2607\x02\u2609" +
        "\x02\u260F\x02\u2611\x02\u2612\x02\u2614\x02\u2614\x02\u2618\x02\u2619" +
        "\x02\u261B\x02\u261E\x02\u2620\x02\u2621\x02\u2623\x02\u2623\x02\u2626" +
        "\x02\u2627\x02\u2629\x02\u262B\x02\u262D\x02\u262F\x02\u2632\x02\u2639" +
        "\x02\u263D\x02\u2649\x02\u2656\x02\u2661\x02\u2663\x02\u2664\x02\u2666" +
        "\x02\u2666\x02\u2669\x02\u2669\x02\u266B\x02\u267C\x02\u267E\x02\u2680" +
        "\x02\u2682\x02\u2693\x02\u2697\x02\u2697\x02\u269A\x02\u269A\x02\u269C" +
        "\x02\u269C\x02\u269F\x02\u26A1\x02\u26A4\x02\u26AB\x02\u26AE\x02\u26B1" +
        "\x02\u26B4\x02\u26BE\x02\u26C1\x02\u26C5\x02\u26C8\x02\u26C9\x02\u26CB" +
        "\x02\u26CF\x02\u26D2\x02\u26D2\x02\u26D4\x02\u26D4\x02\u26D7\x02\u26EA" +
        "\x02\u26ED\x02\u26F1\x02\u26F8\x02\u26F8\x02\u26FD\x02\u26FE\x02\u2700" +
        "\x02\u2703\x02\u2705\x02\u2706\x02\u2710\x02\u2710\x02\u2712\x02\u2713" +
        "\x02\u2767\x02\u2769\x02\uF002\x03\uF005\x03\uF007\x03\uF101\x03\uF10F" +
        "\x03\uF111\x03\uF131\x03\uF131\x03\uF16E\x03\uF171\x03\uF1AF\x03\uF1E7" +
        "\x03\uF205\x03\uF211\x03\uF23E\x03\uF241\x03\uF24B\x03\uF251\x03\uF254" +
        "\x03\uF301\x03\uF324\x03\uF325\x03\uF396\x03\uF397\x03\uF39A\x03\uF39A" +
        "\x03\uF39E\x03\uF39F\x03\uF3F3\x03\uF3F4\x03\uF3F8\x03\uF3F8\x03\uF500" +
        "\x03\uF500\x03\uF540\x03\uF54A\x03\uF551\x03\uF551\x03\uF56A\x03\uF570" +
        "\x03\uF573\x03\uF574\x03\uF57D\x03\uF588\x03\uF58A\x03\uF58B\x03\uF590" +
        "\x03\uF591\x03\uF593\x03\uF596\x03\uF599\x03\uF5A5\x03\uF5A8\x03\uF5A9" +
        "\x03\uF5AB\x03\uF5B2\x03\uF5B5\x03\uF5BD\x03\uF5BF\x03\uF5C3\x03\uF5C7" +
        "\x03\uF5D2\x03\uF5D6\x03\uF5DD\x03\uF5E1\x03\uF5E2\x03\uF5E4\x03\uF5E4" +
        "\x03\uF5E6\x03\uF5E9\x03\uF5EB\x03\uF5F0\x03\uF5F2\x03\uF5F4\x03\uF5F6" +
        "\x03\uF5FB\x03\uF6C8\x03\uF6CC\x03\uF6D5\x03\uF6E1\x03\uF6E8\x03\uF6EA" +
        "\x03\uF6EC\x03\uF6EC\x03\uF6EF\x03\uF6F1\x03\uF6F3\x03\uF6F4\x03\uF6F9" +
        "\x03\uF701\x03\uF776\x03\uF781\x03\uF7D7\x03\uF801\x03\uF80E\x03\uF811" +
        "\x03\uF84A\x03\uF851\x03\uF85C\x03\uF861\x03\uF88A\x03\uF891\x03\uF8B0" +
        "\x03\uF911\x03\uF921\x03\uF921\x03\uF92A\x03\uF931\x03\uF933\x03\uF934" +
        "\x03\uF941\x03\uF941\x03\uF94E\x03\uF951\x03\uF961\x03\uF981\x03\uF994" +
        "\x03\uF9C1\x03\uF9C3\x03\uFFFF\x03\x03\x02\"\x10\x80\x10\x03\x02\x81\x10" +
        "\x81\x10\t\x02\u0602\x02\u0607\x02\u06DF\x02\u06DF\x02\u0711\x02\u0711" +
        "\x02\u08E4\x02\u08E4\x02\u0D50\x02\u0D50\x02\u10BF\x03\u10BF\x03\u11C4" +
        "\x03\u11C5\x03\x15\x02\f\x02\f\x02\x0F\x02\x0F\x02\"\x02\x80\x02\xA2\x02" +
        "\xAE\x02\xB0\x02\u061D\x02\u061F\x02\u180F\x02\u1811\x02\u200C\x02\u200E" +
        "\x02\u200F\x02\u2012\x02\u2029\x02\u2031\x02\u2061\x02\u2072\x02\uD801" +
        "\x02\uE002\x02\uFF00\x02\uFF02\x02\uFFF1\x02\uFFFE\x02\uBCA1\x03\uBCA6" +
        "\x03\uD174\x03\uD17D\x03\x01\x0F\"\x10\x81\x10\u0102\x10\u01F1\x10\u1002" +
        "\x10\x01\x12\xD2\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
        "\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x021\x03\x02" +
        "\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
        "\x039\x03\x02\x02\x02\x05;\x03\x02\x02\x02\x07=\x03\x02\x02\x02\t?\x03" +
        "\x02\x02\x02\vA\x03\x02\x02\x02\rC\x03\x02\x02\x02\x0FE\x03\x02\x02\x02" +
        "\x11G\x03\x02\x02\x02\x13I\x03\x02\x02\x02\x15L\x03\x02\x02\x02\x17O\x03" +
        "\x02\x02\x02\x19Q\x03\x02\x02\x02\x1BT\x03\x02\x02\x02\x1DW\x03\x02\x02" +
        "\x02\x1FY\x03\x02\x02\x02!^\x03\x02\x02\x02#i\x03\x02\x02\x02%n\x03\x02" +
        "\x02\x02\'p\x03\x02\x02\x02){\x03\x02\x02\x02+~\x03\x02\x02\x02-\x82\x03" +
        "\x02\x02\x02/\x84\x03\x02\x02\x021\x88\x03\x02\x02\x023\x8A\x03\x02\x02" +
        "\x025\x8C\x03\x02\x02\x027\xCA\x03\x02\x02\x029:\t\n\x02\x02:\x04\x03" +
        "\x02\x02\x02;<\x07\u200F\x02\x02<\x06\x03\x02\x02\x02=>\t\v\x02\x02>\b" +
        "\x03\x02\x02\x02?@\x07\uFE10\x02\x02@\n\x03\x02\x02\x02AB\x07\uFE11\x02" +
        "\x02B\f\x03\x02\x02\x02CD\t\f\x02\x02D\x0E\x03\x02\x02\x02EF\t\r\x02\x02" +
        "F\x10\x03\x02\x02\x02GH\t\x0E\x02\x02H\x12\x03\x02\x02\x02IJ\x05\x11\t" +
        "\x02JK\x05\t\x05\x02K\x14\x03\x02\x02\x02LM\x05\x0F\b\x02MN\x05\v\x06" +
        "\x02N\x16\x03\x02\x02\x02OP\t\x0F\x02\x02P\x18\x03\x02\x02\x02QR\t\x10" +
        "\x02\x02RS\t\x11\x02\x02S\x1A\x03\x02\x02\x02TU\t\x12\x02\x02UV\t\x12" +
        "\x02\x02V\x1C\x03\x02\x02\x02WX\t\x13\x02\x02X\x1E\x03\x02\x02\x02YZ\t" +
        "\x02\x02\x02Z \x03\x02\x02\x02[_\x05\x15\v\x02\\_\x05\x13\n\x02]_\x05" +
        "\x11\t\x02^[\x03\x02\x02\x02^\\\x03\x02\x02\x02^]\x03\x02\x02\x02_c\x03" +
        "\x02\x02\x02`b\x05\x1F\x10\x02a`\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03" +
        "\x02\x02\x02cd\x03\x02\x02\x02d\"\x03\x02\x02\x02ec\x03\x02\x02\x02fj" +
        "\x05\x19\r\x02gj\x05!\x11\x02hj\x05\x1B\x0E\x02if\x03\x02\x02\x02ig\x03" +
        "\x02\x02\x02ih\x03\x02\x02\x02j$\x03\x02\x02\x02ko\x05\x17\f\x02lo\x05" +
        "\x15\v\x02mo\x05\x19\r\x02nk\x03\x02\x02\x02nl\x03\x02\x02\x02nm\x03\x02" +
        "\x02\x02o&\x03\x02\x02\x02pt\x05%\x13\x02qr\x05\x05\x03\x02rs\x05%\x13" +
        "\x02su\x03\x02\x02\x02tq\x03\x02\x02\x02uv\x03\x02\x02\x02vt\x03\x02\x02" +
        "\x02vw\x03\x02\x02\x02w(\x03\x02\x02\x02x|\x05\x17\f\x02y|\x05\x19\r\x02" +
        "z|\x05\x15\v\x02{x\x03\x02\x02\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02" +
        "|*\x03\x02\x02\x02}\x7F\t\x14\x02\x02~}\x03\x02\x02\x02\x7F\x80\x03\x02" +
        "\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81,\x03\x02\x02" +
        "\x02\x82\x83\t\x15\x02\x02\x83.\x03\x02\x02\x02\x84\x85\x05)\x15\x02\x85" +
        "\x86\x05+\x16\x02\x86\x87\x05-\x17\x02\x870\x03\x02\x02\x02\x88\x89\t" +
        "\x16\x02\x02\x892\x03\x02\x02\x02\x8A\x8B\t\x17\x02\x02\x8B4\x03\x02\x02" +
        "\x02\x8C\x8D\t\x03\x02\x02\x8D\x8E\t\x04\x02\x02\x8E6\x03\x02\x02\x02" +
        "\x8F\x91\t\x05\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02" +
        "\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02" +
        "\x94\x92\x03\x02\x02\x02\x95\x97\t\x06\x02\x02\x96\x95\x03\x02\x02\x02" +
        "\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02" +
        "\x99\x9D\x03\x02\x02\x02\x9A\x9C\t\x07\x02\x02\x9B\x9A\x03\x02\x02\x02" +
        "\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02" +
        "\x9E\xCB\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA2\t\x05\x02\x02" +
        "\xA1\xA0\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02" +
        "\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02" +
        "\xA6\xAA\t\b\x02\x02\xA7\xA9\t\x06\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9" +
        "\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB" +
        "\xB0\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAF\t\x07\x02\x02\xAE" +
        "\xAD\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0" +
        "\xB1\x03\x02\x02\x02\xB1\xCB\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3" +
        "\xB5\t\x05\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6" +
        "\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8" +
        "\xB6\x03\x02\x02\x02\xB9\xBD\t\t\x02\x02\xBA\xBC\t\x07\x02\x02\xBB\xBA" +
        "\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE" +
        "\x03\x02\x02\x02\xBE\xCB\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC2" +
        "\t\x05\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC1" +
        "\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xCB\x03\x02\x02\x02\xC5\xC7" +
        "\t\x07\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC6" +
        "\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\x92" +
        "\x03\x02\x02\x02\xCA\xA3\x03\x02\x02\x02\xCA\xB6\x03\x02\x02\x02\xCA\xC1" +
        "\x03\x02\x02\x02\xCA\xC6\x03\x02\x02\x02\xCB8\x03\x02\x02\x02\x15\x02" +
        "^cinv{\x80\x92\x98\x9D\xA3\xAA\xB0\xB6\xBD\xC3\xC8\xCA\x02";
    GraphemesLexer._serializedATN = Utils.join([
        GraphemesLexer._serializedATNSegment0,
        GraphemesLexer._serializedATNSegment1,
    ], "");
    return GraphemesLexer;
}(Lexer_1.Lexer));
exports.GraphemesLexer = GraphemesLexer;
