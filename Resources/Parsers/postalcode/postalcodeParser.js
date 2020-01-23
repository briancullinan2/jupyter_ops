"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/postalcode/postalcode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var postalcodeParser = /** @class */ (function (_super) {
    __extends(postalcodeParser, _super);
    function postalcodeParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(postalcodeParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(postalcodeParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return postalcodeParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "postalcode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeParser.prototype, "ruleNames", {
        // @Override
        get: function () { return postalcodeParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(postalcodeParser.prototype, "serializedATN", {
        // @Override
        get: function () { return postalcodeParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    postalcodeParser.prototype.postalcode = function () {
        var _localctx = new PostalcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, postalcodeParser.RULE_postalcode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2;
                this.match(postalcodeParser.LETTER);
                this.state = 3;
                this.match(postalcodeParser.DIGIT);
                this.state = 4;
                this.match(postalcodeParser.LETTER);
                this.state = 5;
                this.match(postalcodeParser.DIGIT);
                this.state = 6;
                this.match(postalcodeParser.LETTER);
                this.state = 7;
                this.match(postalcodeParser.DIGIT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(postalcodeParser, "_ATN", {
        get: function () {
            if (!postalcodeParser.__ATN) {
                postalcodeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(postalcodeParser._serializedATN));
            }
            return postalcodeParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    postalcodeParser.DIGIT = 1;
    postalcodeParser.LETTER = 2;
    postalcodeParser.WS = 3;
    postalcodeParser.RULE_postalcode = 0;
    // tslint:disable:no-trailing-whitespace
    postalcodeParser.ruleNames = [
        "postalcode",
    ];
    postalcodeParser._LITERAL_NAMES = [];
    postalcodeParser._SYMBOLIC_NAMES = [
        undefined, "DIGIT", "LETTER", "WS",
    ];
    postalcodeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(postalcodeParser._LITERAL_NAMES, postalcodeParser._SYMBOLIC_NAMES, []);
    postalcodeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x05\f\x04\x02" +
        "\t\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x02\x02\x02\x03\x02\x02\x02\x02\x02\n\x02\x04\x03\x02\x02\x02\x04\x05" +
        "\x07\x04\x02\x02\x05\x06\x07\x03\x02\x02\x06\x07\x07\x04\x02\x02\x07\b" +
        "\x07\x03\x02\x02\b\t\x07\x04\x02\x02\t\n\x07\x03\x02\x02\n\x03\x03\x02" +
        "\x02\x02\x02";
    return postalcodeParser;
}(Parser_1.Parser));
exports.postalcodeParser = postalcodeParser;
var PostalcodeContext = /** @class */ (function (_super) {
    __extends(PostalcodeContext, _super);
    function PostalcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostalcodeContext.prototype.LETTER = function (i) {
        if (i === undefined) {
            return this.getTokens(postalcodeParser.LETTER);
        }
        else {
            return this.getToken(postalcodeParser.LETTER, i);
        }
    };
    PostalcodeContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(postalcodeParser.DIGIT);
        }
        else {
            return this.getToken(postalcodeParser.DIGIT, i);
        }
    };
    Object.defineProperty(PostalcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return postalcodeParser.RULE_postalcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PostalcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterPostalcode) {
            listener.enterPostalcode(this);
        }
    };
    // @Override
    PostalcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitPostalcode) {
            listener.exitPostalcode(this);
        }
    };
    // @Override
    PostalcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitPostalcode) {
            return visitor.visitPostalcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostalcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PostalcodeContext = PostalcodeContext;
