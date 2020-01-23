"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/metric/metric.g4 by ANTLR 4.7.3-SNAPSHOT
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
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var metricParser = /** @class */ (function (_super) {
    __extends(metricParser, _super);
    function metricParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(metricParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(metricParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return metricParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "metric.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricParser.prototype, "ruleNames", {
        // @Override
        get: function () { return metricParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricParser.prototype, "serializedATN", {
        // @Override
        get: function () { return metricParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    metricParser.prototype.uom = function () {
        var _localctx = new UomContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, metricParser.RULE_uom);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 14;
                this.measure();
                this.state = 19;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === metricParser.T__0 || _la === metricParser.T__1) {
                    {
                        {
                            this.state = 15;
                            _la = this._input.LA(1);
                            if (!(_la === metricParser.T__0 || _la === metricParser.T__1)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 16;
                            this.measure();
                        }
                    }
                    this.state = 21;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    // @RuleVersion(0)
    metricParser.prototype.measure = function () {
        var _localctx = new MeasureContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, metricParser.RULE_measure);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 22;
                            this.prefix();
                        }
                        break;
                }
                this.state = 25;
                this.unit();
                this.state = 27;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === metricParser.T__2) {
                    {
                        this.state = 26;
                        this.exponent();
                    }
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
    // @RuleVersion(0)
    metricParser.prototype.exponent = function () {
        var _localctx = new ExponentContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, metricParser.RULE_exponent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 29;
                    this.match(metricParser.T__2);
                    this.state = 30;
                    this.match(metricParser.INTE);
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
    // @RuleVersion(0)
    metricParser.prototype.prefix = function () {
        var _localctx = new PrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, metricParser.RULE_prefix);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << metricParser.T__3) | (1 << metricParser.T__4) | (1 << metricParser.T__5) | (1 << metricParser.T__6) | (1 << metricParser.T__7) | (1 << metricParser.T__8) | (1 << metricParser.T__9) | (1 << metricParser.T__10) | (1 << metricParser.T__11) | (1 << metricParser.T__12) | (1 << metricParser.T__13) | (1 << metricParser.T__14) | (1 << metricParser.T__15) | (1 << metricParser.T__16) | (1 << metricParser.T__17) | (1 << metricParser.T__18))) !== 0))) {
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
    // @RuleVersion(0)
    metricParser.prototype.unit = function () {
        var _localctx = new UnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, metricParser.RULE_unit);
        try {
            this.state = 36;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case metricParser.T__13:
                case metricParser.T__19:
                case metricParser.T__20:
                case metricParser.T__21:
                case metricParser.T__22:
                case metricParser.T__23:
                case metricParser.T__24:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 34;
                        this.baseunit();
                    }
                    break;
                case metricParser.T__5:
                case metricParser.T__25:
                case metricParser.T__26:
                case metricParser.T__27:
                case metricParser.T__28:
                case metricParser.T__29:
                case metricParser.T__30:
                case metricParser.T__31:
                case metricParser.T__32:
                case metricParser.T__33:
                case metricParser.T__34:
                case metricParser.T__35:
                case metricParser.T__36:
                case metricParser.T__37:
                case metricParser.T__38:
                case metricParser.T__39:
                case metricParser.T__40:
                case metricParser.T__41:
                case metricParser.T__42:
                case metricParser.T__43:
                case metricParser.T__44:
                case metricParser.T__45:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 35;
                        this.derivedunit();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
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
    // @RuleVersion(0)
    metricParser.prototype.baseunit = function () {
        var _localctx = new BaseunitContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, metricParser.RULE_baseunit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << metricParser.T__13) | (1 << metricParser.T__19) | (1 << metricParser.T__20) | (1 << metricParser.T__21) | (1 << metricParser.T__22) | (1 << metricParser.T__23) | (1 << metricParser.T__24))) !== 0))) {
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
    // @RuleVersion(0)
    metricParser.prototype.derivedunit = function () {
        var _localctx = new DerivedunitContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, metricParser.RULE_derivedunit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << metricParser.T__5) | (1 << metricParser.T__25) | (1 << metricParser.T__26) | (1 << metricParser.T__27) | (1 << metricParser.T__28) | (1 << metricParser.T__29) | (1 << metricParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (metricParser.T__31 - 32)) | (1 << (metricParser.T__32 - 32)) | (1 << (metricParser.T__33 - 32)) | (1 << (metricParser.T__34 - 32)) | (1 << (metricParser.T__35 - 32)) | (1 << (metricParser.T__36 - 32)) | (1 << (metricParser.T__37 - 32)) | (1 << (metricParser.T__38 - 32)) | (1 << (metricParser.T__39 - 32)) | (1 << (metricParser.T__40 - 32)) | (1 << (metricParser.T__41 - 32)) | (1 << (metricParser.T__42 - 32)) | (1 << (metricParser.T__43 - 32)) | (1 << (metricParser.T__44 - 32)) | (1 << (metricParser.T__45 - 32)))) !== 0))) {
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
    Object.defineProperty(metricParser, "_ATN", {
        get: function () {
            if (!metricParser.__ATN) {
                metricParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(metricParser._serializedATN));
            }
            return metricParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    metricParser.T__0 = 1;
    metricParser.T__1 = 2;
    metricParser.T__2 = 3;
    metricParser.T__3 = 4;
    metricParser.T__4 = 5;
    metricParser.T__5 = 6;
    metricParser.T__6 = 7;
    metricParser.T__7 = 8;
    metricParser.T__8 = 9;
    metricParser.T__9 = 10;
    metricParser.T__10 = 11;
    metricParser.T__11 = 12;
    metricParser.T__12 = 13;
    metricParser.T__13 = 14;
    metricParser.T__14 = 15;
    metricParser.T__15 = 16;
    metricParser.T__16 = 17;
    metricParser.T__17 = 18;
    metricParser.T__18 = 19;
    metricParser.T__19 = 20;
    metricParser.T__20 = 21;
    metricParser.T__21 = 22;
    metricParser.T__22 = 23;
    metricParser.T__23 = 24;
    metricParser.T__24 = 25;
    metricParser.T__25 = 26;
    metricParser.T__26 = 27;
    metricParser.T__27 = 28;
    metricParser.T__28 = 29;
    metricParser.T__29 = 30;
    metricParser.T__30 = 31;
    metricParser.T__31 = 32;
    metricParser.T__32 = 33;
    metricParser.T__33 = 34;
    metricParser.T__34 = 35;
    metricParser.T__35 = 36;
    metricParser.T__36 = 37;
    metricParser.T__37 = 38;
    metricParser.T__38 = 39;
    metricParser.T__39 = 40;
    metricParser.T__40 = 41;
    metricParser.T__41 = 42;
    metricParser.T__42 = 43;
    metricParser.T__43 = 44;
    metricParser.T__44 = 45;
    metricParser.T__45 = 46;
    metricParser.INTE = 47;
    metricParser.WS = 48;
    metricParser.RULE_uom = 0;
    metricParser.RULE_measure = 1;
    metricParser.RULE_exponent = 2;
    metricParser.RULE_prefix = 3;
    metricParser.RULE_unit = 4;
    metricParser.RULE_baseunit = 5;
    metricParser.RULE_derivedunit = 6;
    // tslint:disable:no-trailing-whitespace
    metricParser.ruleNames = [
        "uom", "measure", "exponent", "prefix", "unit", "baseunit", "derivedunit",
    ];
    metricParser._LITERAL_NAMES = [
        undefined, "'*'", "'/'", "'^'", "'E'", "'P'", "'T'", "'G'", "'M'", "'k'",
        "'h'", "'da'", "'d'", "'c'", "'m'", "'\u00B5'", "'n'", "'p'", "'f'", "'a'",
        "'g'", "'s'", "'A'", "'K'", "'mol'", "'cd'", "'rad'", "'Hz'", "'sr'",
        "'N'", "'Pa'", "'J'", "'W'", "'C'", "'V'", "'F'", "'\u03A9'", "'S'", "'Wb'",
        "'H'", "'\u02DAC'", "'lm'", "'lx'", "'Bq'", "'Gy'", "'Sv'", "'kat'",
    ];
    metricParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "INTE", "WS",
    ];
    metricParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(metricParser._LITERAL_NAMES, metricParser._SYMBOLIC_NAMES, []);
    metricParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032-\x04\x02\t\x02" +
        "\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
        "\x04\b\t\b\x03\x02\x03\x02\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02\x17" +
        "\v\x02\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x05\x03\x1E\n\x03\x03" +
        "\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\'\n\x06\x03" +
        "\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b" +
        "\x02\n\x02\f\x02\x0E\x02\x02\x06\x03\x02\x03\x04\x03\x02\x06\x15\x04\x02" +
        "\x10\x10\x16\x1B\x04\x02\b\b\x1C0\x02)\x02\x10\x03\x02\x02\x02\x04\x19" +
        "\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\"\x03\x02\x02\x02\n&\x03\x02" +
        "\x02\x02\f(\x03\x02\x02\x02\x0E*\x03\x02\x02\x02\x10\x15\x05\x04\x03\x02" +
        "\x11\x12\t\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x11\x03\x02\x02\x02" +
        "\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02" +
        "\x16\x03\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x1A\x05\b\x05\x02" +
        "\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02" +
        "\x1B\x1D\x05\n\x06\x02\x1C\x1E\x05\x06\x04\x02\x1D\x1C\x03\x02\x02\x02" +
        "\x1D\x1E\x03\x02\x02\x02\x1E\x05\x03\x02\x02\x02\x1F \x07\x05\x02\x02" +
        " !\x071\x02\x02!\x07\x03\x02\x02\x02\"#\t\x03\x02\x02#\t\x03\x02\x02\x02" +
        "$\'\x05\f\x07\x02%\'\x05\x0E\b\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02" +
        "\'\v\x03\x02\x02\x02()\t\x04\x02\x02)\r\x03\x02\x02\x02*+\t\x05\x02\x02" +
        "+\x0F\x03\x02\x02\x02\x06\x15\x19\x1D&";
    return metricParser;
}(Parser_1.Parser));
exports.metricParser = metricParser;
var UomContext = /** @class */ (function (_super) {
    __extends(UomContext, _super);
    function UomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UomContext.prototype.measure = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MeasureContext);
        }
        else {
            return this.getRuleContext(i, MeasureContext);
        }
    };
    Object.defineProperty(UomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return metricParser.RULE_uom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UomContext.prototype.enterRule = function (listener) {
        if (listener.enterUom) {
            listener.enterUom(this);
        }
    };
    // @Override
    UomContext.prototype.exitRule = function (listener) {
        if (listener.exitUom) {
            listener.exitUom(this);
        }
    };
    // @Override
    UomContext.prototype.accept = function (visitor) {
        if (visitor.visitUom) {
            return visitor.visitUom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UomContext = UomContext;
var MeasureContext = /** @class */ (function (_super) {
    __extends(MeasureContext, _super);
    function MeasureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MeasureContext.prototype.unit = function () {
        return this.getRuleContext(0, UnitContext);
    };
    MeasureContext.prototype.prefix = function () {
        return this.tryGetRuleContext(0, PrefixContext);
    };
    MeasureContext.prototype.exponent = function () {
        return this.tryGetRuleContext(0, ExponentContext);
    };
    Object.defineProperty(MeasureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return metricParser.RULE_measure; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MeasureContext.prototype.enterRule = function (listener) {
        if (listener.enterMeasure) {
            listener.enterMeasure(this);
        }
    };
    // @Override
    MeasureContext.prototype.exitRule = function (listener) {
        if (listener.exitMeasure) {
            listener.exitMeasure(this);
        }
    };
    // @Override
    MeasureContext.prototype.accept = function (visitor) {
        if (visitor.visitMeasure) {
            return visitor.visitMeasure(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MeasureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MeasureContext = MeasureContext;
var ExponentContext = /** @class */ (function (_super) {
    __extends(ExponentContext, _super);
    function ExponentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExponentContext.prototype.INTE = function () { return this.tryGetToken(metricParser.INTE, 0); };
    Object.defineProperty(ExponentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return metricParser.RULE_exponent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExponentContext.prototype.enterRule = function (listener) {
        if (listener.enterExponent) {
            listener.enterExponent(this);
        }
    };
    // @Override
    ExponentContext.prototype.exitRule = function (listener) {
        if (listener.exitExponent) {
            listener.exitExponent(this);
        }
    };
    // @Override
    ExponentContext.prototype.accept = function (visitor) {
        if (visitor.visitExponent) {
            return visitor.visitExponent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExponentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExponentContext = ExponentContext;
var PrefixContext = /** @class */ (function (_super) {
    __extends(PrefixContext, _super);
    function PrefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PrefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return metricParser.RULE_prefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefix) {
            listener.enterPrefix(this);
        }
    };
    // @Override
    PrefixContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefix) {
            listener.exitPrefix(this);
        }
    };
    // @Override
    PrefixContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefix) {
            return visitor.visitPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixContext = PrefixContext;
var UnitContext = /** @class */ (function (_super) {
    __extends(UnitContext, _super);
    function UnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnitContext.prototype.baseunit = function () {
        return this.tryGetRuleContext(0, BaseunitContext);
    };
    UnitContext.prototype.derivedunit = function () {
        return this.tryGetRuleContext(0, DerivedunitContext);
    };
    Object.defineProperty(UnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return metricParser.RULE_unit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnitContext.prototype.enterRule = function (listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    };
    // @Override
    UnitContext.prototype.exitRule = function (listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    };
    // @Override
    UnitContext.prototype.accept = function (visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnitContext = UnitContext;
var BaseunitContext = /** @class */ (function (_super) {
    __extends(BaseunitContext, _super);
    function BaseunitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BaseunitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return metricParser.RULE_baseunit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BaseunitContext.prototype.enterRule = function (listener) {
        if (listener.enterBaseunit) {
            listener.enterBaseunit(this);
        }
    };
    // @Override
    BaseunitContext.prototype.exitRule = function (listener) {
        if (listener.exitBaseunit) {
            listener.exitBaseunit(this);
        }
    };
    // @Override
    BaseunitContext.prototype.accept = function (visitor) {
        if (visitor.visitBaseunit) {
            return visitor.visitBaseunit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BaseunitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BaseunitContext = BaseunitContext;
var DerivedunitContext = /** @class */ (function (_super) {
    __extends(DerivedunitContext, _super);
    function DerivedunitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DerivedunitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return metricParser.RULE_derivedunit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DerivedunitContext.prototype.enterRule = function (listener) {
        if (listener.enterDerivedunit) {
            listener.enterDerivedunit(this);
        }
    };
    // @Override
    DerivedunitContext.prototype.exitRule = function (listener) {
        if (listener.exitDerivedunit) {
            listener.exitDerivedunit(this);
        }
    };
    // @Override
    DerivedunitContext.prototype.accept = function (visitor) {
        if (visitor.visitDerivedunit) {
            return visitor.visitDerivedunit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DerivedunitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DerivedunitContext = DerivedunitContext;
