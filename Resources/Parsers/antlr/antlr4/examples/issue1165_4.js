"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr4/examples/issue1165_4.g4 by ANTLR 4.7.3-SNAPSHOT
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
var issue1165_4 = /** @class */ (function (_super) {
    __extends(issue1165_4, _super);
    // tslint:enable:no-trailing-whitespace
    function issue1165_4(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(issue1165_4._ATN, _this);
        return _this;
    }
    Object.defineProperty(issue1165_4.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return issue1165_4.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(issue1165_4.prototype, "grammarFileName", {
        // @Override
        get: function () { return "issue1165_4.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(issue1165_4.prototype, "ruleNames", {
        // @Override
        get: function () { return issue1165_4.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(issue1165_4.prototype, "serializedATN", {
        // @Override
        get: function () { return issue1165_4._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(issue1165_4.prototype, "channelNames", {
        // @Override
        get: function () { return issue1165_4.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(issue1165_4.prototype, "modeNames", {
        // @Override
        get: function () { return issue1165_4.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(issue1165_4, "_ATN", {
        get: function () {
            if (!issue1165_4.__ATN) {
                issue1165_4.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(issue1165_4._serializedATN));
            }
            return issue1165_4.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    issue1165_4.WS = 1;
    issue1165_4.foo = 2;
    issue1165_4.bar = 3;
    // tslint:disable:no-trailing-whitespace
    issue1165_4.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "foo", "bar",
    ];
    // tslint:disable:no-trailing-whitespace
    issue1165_4.modeNames = [
        "DEFAULT_MODE",
    ];
    issue1165_4.ruleNames = [
        "WS",
    ];
    issue1165_4._LITERAL_NAMES = [];
    issue1165_4._SYMBOLIC_NAMES = [
        undefined, "WS",
    ];
    issue1165_4.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(issue1165_4._LITERAL_NAMES, issue1165_4._SYMBOLIC_NAMES, []);
    issue1165_4._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x03\f\b\x01\x04" +
        "\x02\t\x02\x03\x02\x06\x02\x07\n\x02\r\x02\x0E\x02\b\x03\x02\x03\x02\x02" +
        "\x02\x02\x03\x03\x02\x03\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02\f\x02" +
        "\x03\x03\x02\x02\x02\x03\x06\x03\x02\x02\x02\x05\x07\t\x02\x02\x02\x06" +
        "\x05\x03\x02\x02\x02\x07\b\x03\x02\x02\x02\b\x06\x03\x02\x02\x02\b\t\x03" +
        "\x02\x02\x02\t\n\x03\x02\x02\x02\n\v\b\x02\x02\x02\v\x04\x03\x02\x02\x02" +
        "\x04\x02\b\x03\b\x02\x02";
    return issue1165_4;
}(Lexer_1.Lexer));
exports.issue1165_4 = issue1165_4;
