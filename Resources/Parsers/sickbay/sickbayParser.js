"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sickbay/sickbay.g4 by ANTLR 4.7.3-SNAPSHOT
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
var sickbayParser = /** @class */ (function (_super) {
    __extends(sickbayParser, _super);
    function sickbayParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(sickbayParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(sickbayParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return sickbayParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "sickbay.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayParser.prototype, "ruleNames", {
        // @Override
        get: function () { return sickbayParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayParser.prototype, "serializedATN", {
        // @Override
        get: function () { return sickbayParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    sickbayParser.prototype.sickbay = function () {
        var _localctx = new SickbayContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, sickbayParser.RULE_sickbay);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 13;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sickbayParser.T__12) | (1 << sickbayParser.T__16) | (1 << sickbayParser.IINTID) | (1 << sickbayParser.INTCONST))) !== 0)) {
                    {
                        {
                            this.state = 10;
                            this.line();
                        }
                    }
                    this.state = 15;
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
    sickbayParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, sickbayParser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 16;
                this.intExpr();
                this.state = 17;
                this.stmt();
                this.state = 22;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sickbayParser.T__0) {
                    {
                        {
                            this.state = 18;
                            this.match(sickbayParser.T__0);
                            this.state = 19;
                            this.stmt();
                        }
                    }
                    this.state = 24;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 25;
                this.match(sickbayParser.NL);
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
    sickbayParser.prototype.stmt = function () {
        var _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, sickbayParser.RULE_stmt);
        var _la;
        try {
            this.state = 54;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sickbayParser.T__1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 27;
                            this.match(sickbayParser.T__1);
                            this.state = 28;
                            this.match(sickbayParser.ARBTEXT);
                        }
                    }
                    break;
                case sickbayParser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 29;
                            this.match(sickbayParser.T__2);
                            this.state = 30;
                            this.intVar();
                            this.state = 31;
                            this.match(sickbayParser.T__3);
                            this.state = 32;
                            this.intExpr();
                        }
                    }
                    break;
                case sickbayParser.T__4:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 34;
                            this.match(sickbayParser.T__4);
                            this.state = 35;
                            this.match(sickbayParser.INTCONST);
                        }
                    }
                    break;
                case sickbayParser.T__5:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        {
                            this.state = 36;
                            this.match(sickbayParser.T__5);
                            this.state = 37;
                            this.match(sickbayParser.INTCONST);
                        }
                    }
                    break;
                case sickbayParser.T__6:
                case sickbayParser.T__7:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 38;
                        _la = this._input.LA(1);
                        if (!(_la === sickbayParser.T__6 || _la === sickbayParser.T__7)) {
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
                    break;
                case sickbayParser.T__8:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        {
                            this.state = 39;
                            this.match(sickbayParser.T__8);
                            this.state = 40;
                            this.match(sickbayParser.INTCONST);
                        }
                    }
                    break;
                case sickbayParser.T__9:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        {
                            this.state = 41;
                            this.match(sickbayParser.T__9);
                        }
                    }
                    break;
                case sickbayParser.T__10:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        {
                            this.state = 42;
                            this.match(sickbayParser.T__10);
                            this.state = 43;
                            this.match(sickbayParser.T__11);
                            this.state = 44;
                            this.match(sickbayParser.T__12);
                            this.state = 45;
                            this.intExpr();
                            this.state = 46;
                            this.match(sickbayParser.T__13);
                        }
                    }
                    break;
                case sickbayParser.T__14:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        {
                            this.state = 48;
                            this.match(sickbayParser.T__14);
                            this.state = 52;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case sickbayParser.IINTID:
                                    {
                                        this.state = 49;
                                        this.intVar();
                                    }
                                    break;
                                case sickbayParser.T__15:
                                    {
                                        this.state = 50;
                                        this.match(sickbayParser.T__15);
                                        this.state = 51;
                                        this.intVar();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
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
    sickbayParser.prototype.intExpr = function () {
        var _localctx = new IntExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, sickbayParser.RULE_intExpr);
        try {
            this.state = 69;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sickbayParser.IINTID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 56;
                        this.intVar();
                    }
                    break;
                case sickbayParser.INTCONST:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 57;
                        this.match(sickbayParser.INTCONST);
                    }
                    break;
                case sickbayParser.T__16:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 58;
                        this.match(sickbayParser.T__16);
                        this.state = 59;
                        this.match(sickbayParser.T__12);
                        this.state = 60;
                        this.intExpr();
                        this.state = 61;
                        this.match(sickbayParser.T__13);
                    }
                    break;
                case sickbayParser.T__12:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 63;
                        this.match(sickbayParser.T__12);
                        this.state = 64;
                        this.intExpr();
                        this.state = 65;
                        this.match(sickbayParser.INTOP);
                        this.state = 66;
                        this.intExpr();
                        this.state = 67;
                        this.match(sickbayParser.T__13);
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
    sickbayParser.prototype.intVar = function () {
        var _localctx = new IntVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, sickbayParser.RULE_intVar);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this.match(sickbayParser.IINTID);
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sickbayParser.T__12) {
                    {
                        this.state = 72;
                        this.match(sickbayParser.T__12);
                        this.state = 73;
                        this.intExpr();
                        this.state = 74;
                        this.match(sickbayParser.T__13);
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
    Object.defineProperty(sickbayParser, "_ATN", {
        get: function () {
            if (!sickbayParser.__ATN) {
                sickbayParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(sickbayParser._serializedATN));
            }
            return sickbayParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    sickbayParser.T__0 = 1;
    sickbayParser.T__1 = 2;
    sickbayParser.T__2 = 3;
    sickbayParser.T__3 = 4;
    sickbayParser.T__4 = 5;
    sickbayParser.T__5 = 6;
    sickbayParser.T__6 = 7;
    sickbayParser.T__7 = 8;
    sickbayParser.T__8 = 9;
    sickbayParser.T__9 = 10;
    sickbayParser.T__10 = 11;
    sickbayParser.T__11 = 12;
    sickbayParser.T__12 = 13;
    sickbayParser.T__13 = 14;
    sickbayParser.T__14 = 15;
    sickbayParser.T__15 = 16;
    sickbayParser.T__16 = 17;
    sickbayParser.INTOP = 18;
    sickbayParser.IINTID = 19;
    sickbayParser.INTCONST = 20;
    sickbayParser.STRCONST = 21;
    sickbayParser.ARBTEXT = 22;
    sickbayParser.NL = 23;
    sickbayParser.WS = 24;
    sickbayParser.RULE_sickbay = 0;
    sickbayParser.RULE_line = 1;
    sickbayParser.RULE_stmt = 2;
    sickbayParser.RULE_intExpr = 3;
    sickbayParser.RULE_intVar = 4;
    // tslint:disable:no-trailing-whitespace
    sickbayParser.ruleNames = [
        "sickbay", "line", "stmt", "intExpr", "intVar",
    ];
    sickbayParser._LITERAL_NAMES = [
        undefined, "':'", "'REM'", "'LET'", "'='", "'GOTO'", "'GOSUB'", "'RETURN'",
        "'END'", "'PROLONG'", "'CUTSHORT'", "'DIM'", "'RING'", "'('", "')'", "'INPUT'",
        "'CHR$'", "'RND%'",
    ];
    sickbayParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "INTOP", "IINTID", "INTCONST",
        "STRCONST", "ARBTEXT", "NL", "WS",
    ];
    sickbayParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(sickbayParser._LITERAL_NAMES, sickbayParser._SYMBOLIC_NAMES, []);
    sickbayParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1AQ\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
        "\x07\x02\x0E\n\x02\f\x02\x0E\x02\x11\v\x02\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x07\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x03\x03\x03\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x047\n\x04\x05\x04" +
        "9\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05H\n\x05\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x05\x06O\n\x06\x03\x06\x02\x02\x02\x07\x02\x02" +
        "\x04\x02\x06\x02\b\x02\n\x02\x02\x03\x03\x02\t\n\x02Z\x02\x0F\x03\x02" +
        "\x02\x02\x04\x12\x03\x02\x02\x02\x068\x03\x02\x02\x02\bG\x03\x02\x02\x02" +
        "\nI\x03\x02\x02\x02\f\x0E\x05\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x11" +
        "\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x03" +
        "\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x12\x13\x05\b\x05\x02\x13\x18" +
        "\x05\x06\x04\x02\x14\x15\x07\x03\x02\x02\x15\x17\x05\x06\x04\x02\x16\x14" +
        "\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19" +
        "\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1C" +
        "\x07\x19\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\x07\x04\x02\x02\x1E9" +
        "\x07\x18\x02\x02\x1F \x07\x05\x02\x02 !\x05\n\x06\x02!\"\x07\x06\x02\x02" +
        "\"#\x05\b\x05\x02#9\x03\x02\x02\x02$%\x07\x07\x02\x02%9\x07\x16\x02\x02" +
        "&\'\x07\b\x02\x02\'9\x07\x16\x02\x02(9\t\x02\x02\x02)*\x07\v\x02\x02*" +
        "9\x07\x16\x02\x02+9\x07\f\x02\x02,-\x07\r\x02\x02-.\x07\x0E\x02\x02./" +
        "\x07\x0F\x02\x02/0\x05\b\x05\x0201\x07\x10\x02\x0219\x03\x02\x02\x022" +
        "6\x07\x11\x02\x0237\x05\n\x06\x0245\x07\x12\x02\x0257\x05\n\x06\x0263" +
        "\x03\x02\x02\x0264\x03\x02\x02\x0279\x03\x02\x02\x028\x1D\x03\x02\x02" +
        "\x028\x1F\x03\x02\x02\x028$\x03\x02\x02\x028&\x03\x02\x02\x028(\x03\x02" +
        "\x02\x028)\x03\x02\x02\x028+\x03\x02\x02\x028,\x03\x02\x02\x0282\x03\x02" +
        "\x02\x029\x07\x03\x02\x02\x02:H\x05\n\x06\x02;H\x07\x16\x02\x02<=\x07" +
        "\x13\x02\x02=>\x07\x0F\x02\x02>?\x05\b\x05\x02?@\x07\x10\x02\x02@H\x03" +
        "\x02\x02\x02AB\x07\x0F\x02\x02BC\x05\b\x05\x02CD\x07\x14\x02\x02DE\x05" +
        "\b\x05\x02EF\x07\x10\x02\x02FH\x03\x02\x02\x02G:\x03\x02\x02\x02G;\x03" +
        "\x02\x02\x02G<\x03\x02\x02\x02GA\x03\x02\x02\x02H\t\x03\x02\x02\x02IN" +
        "\x07\x15\x02\x02JK\x07\x0F\x02\x02KL\x05\b\x05\x02LM\x07\x10\x02\x02M" +
        "O\x03\x02\x02\x02NJ\x03\x02\x02\x02NO\x03\x02\x02\x02O\v\x03\x02\x02\x02" +
        "\b\x0F\x1868GN";
    return sickbayParser;
}(Parser_1.Parser));
exports.sickbayParser = sickbayParser;
var SickbayContext = /** @class */ (function (_super) {
    __extends(SickbayContext, _super);
    function SickbayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SickbayContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(SickbayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sickbayParser.RULE_sickbay; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SickbayContext.prototype.enterRule = function (listener) {
        if (listener.enterSickbay) {
            listener.enterSickbay(this);
        }
    };
    // @Override
    SickbayContext.prototype.exitRule = function (listener) {
        if (listener.exitSickbay) {
            listener.exitSickbay(this);
        }
    };
    // @Override
    SickbayContext.prototype.accept = function (visitor) {
        if (visitor.visitSickbay) {
            return visitor.visitSickbay(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SickbayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SickbayContext = SickbayContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.intExpr = function () {
        return this.getRuleContext(0, IntExprContext);
    };
    LineContext.prototype.stmt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    };
    LineContext.prototype.NL = function () { return this.getToken(sickbayParser.NL, 0); };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sickbayParser.RULE_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineContext.prototype.enterRule = function (listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    };
    // @Override
    LineContext.prototype.exitRule = function (listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    };
    // @Override
    LineContext.prototype.accept = function (visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineContext = LineContext;
var StmtContext = /** @class */ (function (_super) {
    __extends(StmtContext, _super);
    function StmtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StmtContext.prototype.ARBTEXT = function () { return this.tryGetToken(sickbayParser.ARBTEXT, 0); };
    StmtContext.prototype.intVar = function () {
        return this.tryGetRuleContext(0, IntVarContext);
    };
    StmtContext.prototype.intExpr = function () {
        return this.tryGetRuleContext(0, IntExprContext);
    };
    StmtContext.prototype.INTCONST = function () { return this.tryGetToken(sickbayParser.INTCONST, 0); };
    Object.defineProperty(StmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sickbayParser.RULE_stmt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StmtContext.prototype.enterRule = function (listener) {
        if (listener.enterStmt) {
            listener.enterStmt(this);
        }
    };
    // @Override
    StmtContext.prototype.exitRule = function (listener) {
        if (listener.exitStmt) {
            listener.exitStmt(this);
        }
    };
    // @Override
    StmtContext.prototype.accept = function (visitor) {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StmtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StmtContext = StmtContext;
var IntExprContext = /** @class */ (function (_super) {
    __extends(IntExprContext, _super);
    function IntExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntExprContext.prototype.intVar = function () {
        return this.tryGetRuleContext(0, IntVarContext);
    };
    IntExprContext.prototype.INTCONST = function () { return this.tryGetToken(sickbayParser.INTCONST, 0); };
    IntExprContext.prototype.intExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntExprContext);
        }
        else {
            return this.getRuleContext(i, IntExprContext);
        }
    };
    IntExprContext.prototype.INTOP = function () { return this.tryGetToken(sickbayParser.INTOP, 0); };
    Object.defineProperty(IntExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sickbayParser.RULE_intExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntExprContext.prototype.enterRule = function (listener) {
        if (listener.enterIntExpr) {
            listener.enterIntExpr(this);
        }
    };
    // @Override
    IntExprContext.prototype.exitRule = function (listener) {
        if (listener.exitIntExpr) {
            listener.exitIntExpr(this);
        }
    };
    // @Override
    IntExprContext.prototype.accept = function (visitor) {
        if (visitor.visitIntExpr) {
            return visitor.visitIntExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntExprContext = IntExprContext;
var IntVarContext = /** @class */ (function (_super) {
    __extends(IntVarContext, _super);
    function IntVarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntVarContext.prototype.IINTID = function () { return this.getToken(sickbayParser.IINTID, 0); };
    IntVarContext.prototype.intExpr = function () {
        return this.tryGetRuleContext(0, IntExprContext);
    };
    Object.defineProperty(IntVarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sickbayParser.RULE_intVar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntVarContext.prototype.enterRule = function (listener) {
        if (listener.enterIntVar) {
            listener.enterIntVar(this);
        }
    };
    // @Override
    IntVarContext.prototype.exitRule = function (listener) {
        if (listener.exitIntVar) {
            listener.exitIntVar(this);
        }
    };
    // @Override
    IntVarContext.prototype.accept = function (visitor) {
        if (visitor.visitIntVar) {
            return visitor.visitIntVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntVarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntVarContext = IntVarContext;
