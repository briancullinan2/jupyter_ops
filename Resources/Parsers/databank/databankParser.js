"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/databank/databank.g4 by ANTLR 4.7.3-SNAPSHOT
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
var databankParser = /** @class */ (function (_super) {
    __extends(databankParser, _super);
    function databankParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(databankParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(databankParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return databankParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(databankParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "databank.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(databankParser.prototype, "ruleNames", {
        // @Override
        get: function () { return databankParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(databankParser.prototype, "serializedATN", {
        // @Override
        get: function () { return databankParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    databankParser.prototype.databank = function () {
        var _localctx = new DatabankContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, databankParser.RULE_databank);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === databankParser.EOL) {
                    {
                        {
                            this.state = 14;
                            this.match(databankParser.EOL);
                        }
                    }
                    this.state = 19;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 22;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case databankParser.T__0:
                    case databankParser.T__1:
                    case databankParser.T__2:
                        {
                            this.state = 20;
                            this.datedseries();
                        }
                        break;
                    case databankParser.FLOATINGPOINT:
                        {
                            this.state = 21;
                            this.undatedseries();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 24;
                            this.sample();
                        }
                    }
                    this.state = 27;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === databankParser.T__3 || _la === databankParser.FLOATINGPOINT);
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
    databankParser.prototype.datedseries = function () {
        var _localctx = new DatedseriesContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, databankParser.RULE_datedseries);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 29;
                this.datatype();
                this.state = 30;
                this.dateline();
                this.state = 31;
                this.dateline();
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
    databankParser.prototype.undatedseries = function () {
        var _localctx = new UndatedseriesContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, databankParser.RULE_undatedseries);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 33;
                this.dateline();
                this.state = 34;
                this.dateline();
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
    databankParser.prototype.datatype = function () {
        var _localctx = new DatatypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, databankParser.RULE_datatype);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 36;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << databankParser.T__0) | (1 << databankParser.T__1) | (1 << databankParser.T__2))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 37;
                this.match(databankParser.EOL);
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
    databankParser.prototype.dateline = function () {
        var _localctx = new DatelineContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, databankParser.RULE_dateline);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this.number();
                this.state = 40;
                this.match(databankParser.EOL);
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
    databankParser.prototype.sample = function () {
        var _localctx = new SampleContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, databankParser.RULE_sample);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case databankParser.FLOATINGPOINT:
                        {
                            this.state = 42;
                            this.number();
                        }
                        break;
                    case databankParser.T__3:
                        {
                            this.state = 43;
                            this.match(databankParser.T__3);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === databankParser.EOL) {
                    {
                        this.state = 46;
                        this.match(databankParser.EOL);
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
    databankParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, databankParser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(databankParser.FLOATINGPOINT);
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
    Object.defineProperty(databankParser, "_ATN", {
        get: function () {
            if (!databankParser.__ATN) {
                databankParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(databankParser._serializedATN));
            }
            return databankParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    databankParser.T__0 = 1;
    databankParser.T__1 = 2;
    databankParser.T__2 = 3;
    databankParser.T__3 = 4;
    databankParser.FLOATINGPOINT = 5;
    databankParser.COMMENT = 6;
    databankParser.EOL = 7;
    databankParser.WS = 8;
    databankParser.RULE_databank = 0;
    databankParser.RULE_datedseries = 1;
    databankParser.RULE_undatedseries = 2;
    databankParser.RULE_datatype = 3;
    databankParser.RULE_dateline = 4;
    databankParser.RULE_sample = 5;
    databankParser.RULE_number = 6;
    // tslint:disable:no-trailing-whitespace
    databankParser.ruleNames = [
        "databank", "datedseries", "undatedseries", "datatype", "dateline", "sample",
        "number",
    ];
    databankParser._LITERAL_NAMES = [
        undefined, "'-1'", "'-4'", "'-12'", "'NA'",
    ];
    databankParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "FLOATINGPOINT",
        "COMMENT", "EOL", "WS",
    ];
    databankParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(databankParser._LITERAL_NAMES, databankParser._SYMBOLIC_NAMES, []);
    databankParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n6\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03\x02" +
        "\x03\x02\x05\x02\x19\n\x02\x03\x02\x06\x02\x1C\n\x02\r\x02\x0E\x02\x1D" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
        "\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07/\n\x07\x03\x07" +
        "\x05\x072\n\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\f\x02\x0E\x02\x02\x03\x03\x02\x03\x05\x023\x02\x13\x03\x02" +
        "\x02\x02\x04\x1F\x03\x02\x02\x02\x06#\x03\x02\x02\x02\b&\x03\x02\x02\x02" +
        "\n)\x03\x02\x02\x02\f.\x03\x02\x02\x02\x0E3\x03\x02\x02\x02\x10\x12\x07" +
        "\t\x02\x02\x11\x10\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03" +
        "\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x18\x03\x02\x02\x02\x15\x13\x03" +
        "\x02\x02\x02\x16\x19\x05\x04\x03\x02\x17\x19\x05\x06\x04\x02\x18\x16\x03" +
        "\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x1C\x05" +
        "\f\x07\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1B\x03" +
        "\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x03\x03\x02\x02\x02\x1F \x05" +
        "\b\x05\x02 !\x05\n\x06\x02!\"\x05\n\x06\x02\"\x05\x03\x02\x02\x02#$\x05" +
        "\n\x06\x02$%\x05\n\x06\x02%\x07\x03\x02\x02\x02&\'\t\x02\x02\x02\'(\x07" +
        "\t\x02\x02(\t\x03\x02\x02\x02)*\x05\x0E\b\x02*+\x07\t\x02\x02+\v\x03\x02" +
        "\x02\x02,/\x05\x0E\b\x02-/\x07\x06\x02\x02.,\x03\x02\x02\x02.-\x03\x02" +
        "\x02\x02/1\x03\x02\x02\x0202\x07\t\x02\x0210\x03\x02\x02\x0212\x03\x02" +
        "\x02\x022\r\x03\x02\x02\x0234\x07\x07\x02\x024\x0F\x03\x02\x02\x02\x07" +
        "\x13\x18\x1D.1";
    return databankParser;
}(Parser_1.Parser));
exports.databankParser = databankParser;
var DatabankContext = /** @class */ (function (_super) {
    __extends(DatabankContext, _super);
    function DatabankContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatabankContext.prototype.datedseries = function () {
        return this.tryGetRuleContext(0, DatedseriesContext);
    };
    DatabankContext.prototype.undatedseries = function () {
        return this.tryGetRuleContext(0, UndatedseriesContext);
    };
    DatabankContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(databankParser.EOL);
        }
        else {
            return this.getToken(databankParser.EOL, i);
        }
    };
    DatabankContext.prototype.sample = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SampleContext);
        }
        else {
            return this.getRuleContext(i, SampleContext);
        }
    };
    Object.defineProperty(DatabankContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return databankParser.RULE_databank; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatabankContext.prototype.enterRule = function (listener) {
        if (listener.enterDatabank) {
            listener.enterDatabank(this);
        }
    };
    // @Override
    DatabankContext.prototype.exitRule = function (listener) {
        if (listener.exitDatabank) {
            listener.exitDatabank(this);
        }
    };
    // @Override
    DatabankContext.prototype.accept = function (visitor) {
        if (visitor.visitDatabank) {
            return visitor.visitDatabank(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatabankContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatabankContext = DatabankContext;
var DatedseriesContext = /** @class */ (function (_super) {
    __extends(DatedseriesContext, _super);
    function DatedseriesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatedseriesContext.prototype.datatype = function () {
        return this.getRuleContext(0, DatatypeContext);
    };
    DatedseriesContext.prototype.dateline = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DatelineContext);
        }
        else {
            return this.getRuleContext(i, DatelineContext);
        }
    };
    Object.defineProperty(DatedseriesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return databankParser.RULE_datedseries; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatedseriesContext.prototype.enterRule = function (listener) {
        if (listener.enterDatedseries) {
            listener.enterDatedseries(this);
        }
    };
    // @Override
    DatedseriesContext.prototype.exitRule = function (listener) {
        if (listener.exitDatedseries) {
            listener.exitDatedseries(this);
        }
    };
    // @Override
    DatedseriesContext.prototype.accept = function (visitor) {
        if (visitor.visitDatedseries) {
            return visitor.visitDatedseries(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatedseriesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatedseriesContext = DatedseriesContext;
var UndatedseriesContext = /** @class */ (function (_super) {
    __extends(UndatedseriesContext, _super);
    function UndatedseriesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UndatedseriesContext.prototype.dateline = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DatelineContext);
        }
        else {
            return this.getRuleContext(i, DatelineContext);
        }
    };
    Object.defineProperty(UndatedseriesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return databankParser.RULE_undatedseries; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UndatedseriesContext.prototype.enterRule = function (listener) {
        if (listener.enterUndatedseries) {
            listener.enterUndatedseries(this);
        }
    };
    // @Override
    UndatedseriesContext.prototype.exitRule = function (listener) {
        if (listener.exitUndatedseries) {
            listener.exitUndatedseries(this);
        }
    };
    // @Override
    UndatedseriesContext.prototype.accept = function (visitor) {
        if (visitor.visitUndatedseries) {
            return visitor.visitUndatedseries(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UndatedseriesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UndatedseriesContext = UndatedseriesContext;
var DatatypeContext = /** @class */ (function (_super) {
    __extends(DatatypeContext, _super);
    function DatatypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatatypeContext.prototype.EOL = function () { return this.getToken(databankParser.EOL, 0); };
    Object.defineProperty(DatatypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return databankParser.RULE_datatype; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatatypeContext.prototype.enterRule = function (listener) {
        if (listener.enterDatatype) {
            listener.enterDatatype(this);
        }
    };
    // @Override
    DatatypeContext.prototype.exitRule = function (listener) {
        if (listener.exitDatatype) {
            listener.exitDatatype(this);
        }
    };
    // @Override
    DatatypeContext.prototype.accept = function (visitor) {
        if (visitor.visitDatatype) {
            return visitor.visitDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatatypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatatypeContext = DatatypeContext;
var DatelineContext = /** @class */ (function (_super) {
    __extends(DatelineContext, _super);
    function DatelineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatelineContext.prototype.number = function () {
        return this.getRuleContext(0, NumberContext);
    };
    DatelineContext.prototype.EOL = function () { return this.getToken(databankParser.EOL, 0); };
    Object.defineProperty(DatelineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return databankParser.RULE_dateline; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatelineContext.prototype.enterRule = function (listener) {
        if (listener.enterDateline) {
            listener.enterDateline(this);
        }
    };
    // @Override
    DatelineContext.prototype.exitRule = function (listener) {
        if (listener.exitDateline) {
            listener.exitDateline(this);
        }
    };
    // @Override
    DatelineContext.prototype.accept = function (visitor) {
        if (visitor.visitDateline) {
            return visitor.visitDateline(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatelineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatelineContext = DatelineContext;
var SampleContext = /** @class */ (function (_super) {
    __extends(SampleContext, _super);
    function SampleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SampleContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    SampleContext.prototype.EOL = function () { return this.tryGetToken(databankParser.EOL, 0); };
    Object.defineProperty(SampleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return databankParser.RULE_sample; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SampleContext.prototype.enterRule = function (listener) {
        if (listener.enterSample) {
            listener.enterSample(this);
        }
    };
    // @Override
    SampleContext.prototype.exitRule = function (listener) {
        if (listener.exitSample) {
            listener.exitSample(this);
        }
    };
    // @Override
    SampleContext.prototype.accept = function (visitor) {
        if (visitor.visitSample) {
            return visitor.visitSample(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SampleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SampleContext = SampleContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.FLOATINGPOINT = function () { return this.getToken(databankParser.FLOATINGPOINT, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return databankParser.RULE_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberContext = NumberContext;
