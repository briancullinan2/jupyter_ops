"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/unicode/unicode16/classify.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var classifyParser = /** @class */ (function (_super) {
    __extends(classifyParser, _super);
    function classifyParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(classifyParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(classifyParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return classifyParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(classifyParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "classify.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(classifyParser.prototype, "ruleNames", {
        // @Override
        get: function () { return classifyParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(classifyParser.prototype, "serializedATN", {
        // @Override
        get: function () { return classifyParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    classifyParser.prototype.codepoint = function () {
        var _localctx = new CodepointContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, classifyParser.RULE_codepoint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << classifyParser.CLASSIFY___) | (1 << classifyParser.CLASSIFY_Cc) | (1 << classifyParser.CLASSIFY_Cf) | (1 << classifyParser.CLASSIFY_Cn) | (1 << classifyParser.CLASSIFY_Co) | (1 << classifyParser.CLASSIFY_Cs) | (1 << classifyParser.CLASSIFY_Ll) | (1 << classifyParser.CLASSIFY_Lm) | (1 << classifyParser.CLASSIFY_Lo) | (1 << classifyParser.CLASSIFY_Lt) | (1 << classifyParser.CLASSIFY_Lu) | (1 << classifyParser.CLASSIFY_Mc) | (1 << classifyParser.CLASSIFY_Me) | (1 << classifyParser.CLASSIFY_Mn) | (1 << classifyParser.CLASSIFY_Nd) | (1 << classifyParser.CLASSIFY_Nl) | (1 << classifyParser.CLASSIFY_No) | (1 << classifyParser.CLASSIFY_Pc) | (1 << classifyParser.CLASSIFY_Pd) | (1 << classifyParser.CLASSIFY_Pe) | (1 << classifyParser.CLASSIFY_Pf) | (1 << classifyParser.CLASSIFY_Pi) | (1 << classifyParser.CLASSIFY_Po) | (1 << classifyParser.CLASSIFY_Ps) | (1 << classifyParser.CLASSIFY_Sc) | (1 << classifyParser.CLASSIFY_Sk) | (1 << classifyParser.CLASSIFY_Sm) | (1 << classifyParser.CLASSIFY_So) | (1 << classifyParser.CLASSIFY_Zl) | (1 << classifyParser.CLASSIFY_Zp) | (1 << classifyParser.CLASSIFY_Zs))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
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
    Object.defineProperty(classifyParser, "_ATN", {
        get: function () {
            if (!classifyParser.__ATN) {
                classifyParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(classifyParser._serializedATN));
            }
            return classifyParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    classifyParser.CLASSIFY___ = 1;
    classifyParser.CLASSIFY_Cc = 2;
    classifyParser.CLASSIFY_Cf = 3;
    classifyParser.CLASSIFY_Cn = 4;
    classifyParser.CLASSIFY_Co = 5;
    classifyParser.CLASSIFY_Cs = 6;
    classifyParser.CLASSIFY_Ll = 7;
    classifyParser.CLASSIFY_Lm = 8;
    classifyParser.CLASSIFY_Lo = 9;
    classifyParser.CLASSIFY_Lt = 10;
    classifyParser.CLASSIFY_Lu = 11;
    classifyParser.CLASSIFY_Mc = 12;
    classifyParser.CLASSIFY_Me = 13;
    classifyParser.CLASSIFY_Mn = 14;
    classifyParser.CLASSIFY_Nd = 15;
    classifyParser.CLASSIFY_Nl = 16;
    classifyParser.CLASSIFY_No = 17;
    classifyParser.CLASSIFY_Pc = 18;
    classifyParser.CLASSIFY_Pd = 19;
    classifyParser.CLASSIFY_Pe = 20;
    classifyParser.CLASSIFY_Pf = 21;
    classifyParser.CLASSIFY_Pi = 22;
    classifyParser.CLASSIFY_Po = 23;
    classifyParser.CLASSIFY_Ps = 24;
    classifyParser.CLASSIFY_Sc = 25;
    classifyParser.CLASSIFY_Sk = 26;
    classifyParser.CLASSIFY_Sm = 27;
    classifyParser.CLASSIFY_So = 28;
    classifyParser.CLASSIFY_Zl = 29;
    classifyParser.CLASSIFY_Zp = 30;
    classifyParser.CLASSIFY_Zs = 31;
    classifyParser.CLASSIFY_C = 32;
    classifyParser.CLASSIFY_LC = 33;
    classifyParser.CLASSIFY_M = 34;
    classifyParser.CLASSIFY_L = 35;
    classifyParser.CLASSIFY_N = 36;
    classifyParser.CLASSIFY_P = 37;
    classifyParser.CLASSIFY_S = 38;
    classifyParser.CLASSIFY_Z = 39;
    classifyParser.CLASSIFY_WS = 40;
    classifyParser.CLASSIFY_ID0 = 41;
    classifyParser.CLASSIFY_ID1 = 42;
    classifyParser.ID = 43;
    classifyParser.RULE_codepoint = 0;
    // tslint:disable:no-trailing-whitespace
    classifyParser.ruleNames = [
        "codepoint",
    ];
    classifyParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'\u2028'", "'\u2029'",
    ];
    classifyParser._SYMBOLIC_NAMES = [
        undefined, "CLASSIFY___", "CLASSIFY_Cc", "CLASSIFY_Cf", "CLASSIFY_Cn",
        "CLASSIFY_Co", "CLASSIFY_Cs", "CLASSIFY_Ll", "CLASSIFY_Lm", "CLASSIFY_Lo",
        "CLASSIFY_Lt", "CLASSIFY_Lu", "CLASSIFY_Mc", "CLASSIFY_Me", "CLASSIFY_Mn",
        "CLASSIFY_Nd", "CLASSIFY_Nl", "CLASSIFY_No", "CLASSIFY_Pc", "CLASSIFY_Pd",
        "CLASSIFY_Pe", "CLASSIFY_Pf", "CLASSIFY_Pi", "CLASSIFY_Po", "CLASSIFY_Ps",
        "CLASSIFY_Sc", "CLASSIFY_Sk", "CLASSIFY_Sm", "CLASSIFY_So", "CLASSIFY_Zl",
        "CLASSIFY_Zp", "CLASSIFY_Zs", "CLASSIFY_C", "CLASSIFY_LC", "CLASSIFY_M",
        "CLASSIFY_L", "CLASSIFY_N", "CLASSIFY_P", "CLASSIFY_S", "CLASSIFY_Z",
        "CLASSIFY_WS", "CLASSIFY_ID0", "CLASSIFY_ID1", "ID",
    ];
    classifyParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(classifyParser._LITERAL_NAMES, classifyParser._SYMBOLIC_NAMES, []);
    classifyParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\x07\x04\x02" +
        "\t\x02\x03\x02\x03\x02\x03\x02\x02\x02\x02\x03\x02\x02\x02\x03\x03\x02" +
        "\x03!\x02\x05\x02\x04\x03\x02\x02\x02\x04\x05\t\x02\x02\x02\x05\x03\x03" +
        "\x02\x02\x02\x02";
    return classifyParser;
}(Parser_1.Parser));
exports.classifyParser = classifyParser;
var CodepointContext = /** @class */ (function (_super) {
    __extends(CodepointContext, _super);
    function CodepointContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CodepointContext.prototype.CLASSIFY___ = function () { return this.tryGetToken(classifyParser.CLASSIFY___, 0); };
    CodepointContext.prototype.CLASSIFY_Cc = function () { return this.tryGetToken(classifyParser.CLASSIFY_Cc, 0); };
    CodepointContext.prototype.CLASSIFY_Cf = function () { return this.tryGetToken(classifyParser.CLASSIFY_Cf, 0); };
    CodepointContext.prototype.CLASSIFY_Cn = function () { return this.tryGetToken(classifyParser.CLASSIFY_Cn, 0); };
    CodepointContext.prototype.CLASSIFY_Co = function () { return this.tryGetToken(classifyParser.CLASSIFY_Co, 0); };
    CodepointContext.prototype.CLASSIFY_Cs = function () { return this.tryGetToken(classifyParser.CLASSIFY_Cs, 0); };
    CodepointContext.prototype.CLASSIFY_Ll = function () { return this.tryGetToken(classifyParser.CLASSIFY_Ll, 0); };
    CodepointContext.prototype.CLASSIFY_Lm = function () { return this.tryGetToken(classifyParser.CLASSIFY_Lm, 0); };
    CodepointContext.prototype.CLASSIFY_Lo = function () { return this.tryGetToken(classifyParser.CLASSIFY_Lo, 0); };
    CodepointContext.prototype.CLASSIFY_Lt = function () { return this.tryGetToken(classifyParser.CLASSIFY_Lt, 0); };
    CodepointContext.prototype.CLASSIFY_Lu = function () { return this.tryGetToken(classifyParser.CLASSIFY_Lu, 0); };
    CodepointContext.prototype.CLASSIFY_Mc = function () { return this.tryGetToken(classifyParser.CLASSIFY_Mc, 0); };
    CodepointContext.prototype.CLASSIFY_Me = function () { return this.tryGetToken(classifyParser.CLASSIFY_Me, 0); };
    CodepointContext.prototype.CLASSIFY_Mn = function () { return this.tryGetToken(classifyParser.CLASSIFY_Mn, 0); };
    CodepointContext.prototype.CLASSIFY_Nd = function () { return this.tryGetToken(classifyParser.CLASSIFY_Nd, 0); };
    CodepointContext.prototype.CLASSIFY_Nl = function () { return this.tryGetToken(classifyParser.CLASSIFY_Nl, 0); };
    CodepointContext.prototype.CLASSIFY_No = function () { return this.tryGetToken(classifyParser.CLASSIFY_No, 0); };
    CodepointContext.prototype.CLASSIFY_Pc = function () { return this.tryGetToken(classifyParser.CLASSIFY_Pc, 0); };
    CodepointContext.prototype.CLASSIFY_Pd = function () { return this.tryGetToken(classifyParser.CLASSIFY_Pd, 0); };
    CodepointContext.prototype.CLASSIFY_Pe = function () { return this.tryGetToken(classifyParser.CLASSIFY_Pe, 0); };
    CodepointContext.prototype.CLASSIFY_Pf = function () { return this.tryGetToken(classifyParser.CLASSIFY_Pf, 0); };
    CodepointContext.prototype.CLASSIFY_Pi = function () { return this.tryGetToken(classifyParser.CLASSIFY_Pi, 0); };
    CodepointContext.prototype.CLASSIFY_Po = function () { return this.tryGetToken(classifyParser.CLASSIFY_Po, 0); };
    CodepointContext.prototype.CLASSIFY_Ps = function () { return this.tryGetToken(classifyParser.CLASSIFY_Ps, 0); };
    CodepointContext.prototype.CLASSIFY_Sc = function () { return this.tryGetToken(classifyParser.CLASSIFY_Sc, 0); };
    CodepointContext.prototype.CLASSIFY_Sk = function () { return this.tryGetToken(classifyParser.CLASSIFY_Sk, 0); };
    CodepointContext.prototype.CLASSIFY_Sm = function () { return this.tryGetToken(classifyParser.CLASSIFY_Sm, 0); };
    CodepointContext.prototype.CLASSIFY_So = function () { return this.tryGetToken(classifyParser.CLASSIFY_So, 0); };
    CodepointContext.prototype.CLASSIFY_Zl = function () { return this.tryGetToken(classifyParser.CLASSIFY_Zl, 0); };
    CodepointContext.prototype.CLASSIFY_Zp = function () { return this.tryGetToken(classifyParser.CLASSIFY_Zp, 0); };
    CodepointContext.prototype.CLASSIFY_Zs = function () { return this.tryGetToken(classifyParser.CLASSIFY_Zs, 0); };
    Object.defineProperty(CodepointContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return classifyParser.RULE_codepoint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CodepointContext.prototype.enterRule = function (listener) {
        if (listener.enterCodepoint) {
            listener.enterCodepoint(this);
        }
    };
    // @Override
    CodepointContext.prototype.exitRule = function (listener) {
        if (listener.exitCodepoint) {
            listener.exitCodepoint(this);
        }
    };
    // @Override
    CodepointContext.prototype.accept = function (visitor) {
        if (visitor.visitCodepoint) {
            return visitor.visitCodepoint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CodepointContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CodepointContext = CodepointContext;
