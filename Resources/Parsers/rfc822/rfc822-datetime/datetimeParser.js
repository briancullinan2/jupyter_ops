"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-datetime/datetime.g4 by ANTLR 4.7.3-SNAPSHOT
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
var datetimeParser = /** @class */ (function (_super) {
    __extends(datetimeParser, _super);
    function datetimeParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(datetimeParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(datetimeParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return datetimeParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(datetimeParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "datetime.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(datetimeParser.prototype, "ruleNames", {
        // @Override
        get: function () { return datetimeParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(datetimeParser.prototype, "serializedATN", {
        // @Override
        get: function () { return datetimeParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    datetimeParser.prototype.date_time = function () {
        var _localctx = new Date_timeContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, datetimeParser.RULE_date_time);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << datetimeParser.T__1) | (1 << datetimeParser.T__2) | (1 << datetimeParser.T__3) | (1 << datetimeParser.T__4) | (1 << datetimeParser.T__5) | (1 << datetimeParser.T__6) | (1 << datetimeParser.T__7))) !== 0)) {
                    {
                        this.state = 20;
                        this.day();
                        this.state = 21;
                        this.match(datetimeParser.T__0);
                    }
                }
                this.state = 25;
                this.date();
                this.state = 26;
                this.time();
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
    datetimeParser.prototype.day = function () {
        var _localctx = new DayContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, datetimeParser.RULE_day);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << datetimeParser.T__1) | (1 << datetimeParser.T__2) | (1 << datetimeParser.T__3) | (1 << datetimeParser.T__4) | (1 << datetimeParser.T__5) | (1 << datetimeParser.T__6) | (1 << datetimeParser.T__7))) !== 0))) {
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
    datetimeParser.prototype.date = function () {
        var _localctx = new DateContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, datetimeParser.RULE_date);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 30;
                            this.two_digit();
                        }
                    }
                    this.state = 33;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === datetimeParser.ALPHA || _la === datetimeParser.DIGIT);
                this.state = 35;
                this.month();
                this.state = 36;
                this.two_digit();
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
    datetimeParser.prototype.month = function () {
        var _localctx = new MonthContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, datetimeParser.RULE_month);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << datetimeParser.T__8) | (1 << datetimeParser.T__9) | (1 << datetimeParser.T__10) | (1 << datetimeParser.T__11) | (1 << datetimeParser.T__12) | (1 << datetimeParser.T__13) | (1 << datetimeParser.T__14) | (1 << datetimeParser.T__15) | (1 << datetimeParser.T__16) | (1 << datetimeParser.T__17) | (1 << datetimeParser.T__18) | (1 << datetimeParser.T__19))) !== 0))) {
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
    datetimeParser.prototype.time = function () {
        var _localctx = new TimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, datetimeParser.RULE_time);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.hour();
                this.state = 41;
                this.zone();
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
    datetimeParser.prototype.hour = function () {
        var _localctx = new HourContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, datetimeParser.RULE_hour);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 43;
                this.two_digit();
                this.state = 44;
                this.match(datetimeParser.T__20);
                this.state = 45;
                this.two_digit();
                this.state = 48;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === datetimeParser.T__20) {
                    {
                        this.state = 46;
                        this.match(datetimeParser.T__20);
                        this.state = 47;
                        this.two_digit();
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
    datetimeParser.prototype.zone = function () {
        var _localctx = new ZoneContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, datetimeParser.RULE_zone);
        var _la;
        try {
            this.state = 63;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case datetimeParser.T__21:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 50;
                        this.match(datetimeParser.T__21);
                    }
                    break;
                case datetimeParser.T__22:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 51;
                        this.match(datetimeParser.T__22);
                    }
                    break;
                case datetimeParser.T__23:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 52;
                        this.match(datetimeParser.T__23);
                    }
                    break;
                case datetimeParser.T__24:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 53;
                        this.match(datetimeParser.T__24);
                    }
                    break;
                case datetimeParser.T__25:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 54;
                        this.match(datetimeParser.T__25);
                    }
                    break;
                case datetimeParser.T__26:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 55;
                        this.match(datetimeParser.T__26);
                    }
                    break;
                case datetimeParser.T__27:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 56;
                        this.match(datetimeParser.T__27);
                    }
                    break;
                case datetimeParser.T__28:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 57;
                        this.match(datetimeParser.T__28);
                    }
                    break;
                case datetimeParser.T__29:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 58;
                        this.match(datetimeParser.T__29);
                    }
                    break;
                case datetimeParser.T__30:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 59;
                        this.match(datetimeParser.T__30);
                    }
                    break;
                case datetimeParser.ALPHA:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 60;
                        this.match(datetimeParser.ALPHA);
                    }
                    break;
                case datetimeParser.T__31:
                case datetimeParser.T__32:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        {
                            this.state = 61;
                            _la = this._input.LA(1);
                            if (!(_la === datetimeParser.T__31 || _la === datetimeParser.T__32)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 62;
                            this.four_digit();
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
    datetimeParser.prototype.two_digit = function () {
        var _localctx = new Two_digitContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, datetimeParser.RULE_two_digit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 65;
                this.alphanumeric();
                this.state = 66;
                this.alphanumeric();
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
    datetimeParser.prototype.four_digit = function () {
        var _localctx = new Four_digitContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, datetimeParser.RULE_four_digit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this.alphanumeric();
                this.state = 69;
                this.alphanumeric();
                this.state = 70;
                this.alphanumeric();
                this.state = 71;
                this.alphanumeric();
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
    datetimeParser.prototype.alphanumeric = function () {
        var _localctx = new AlphanumericContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, datetimeParser.RULE_alphanumeric);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                _la = this._input.LA(1);
                if (!(_la === datetimeParser.ALPHA || _la === datetimeParser.DIGIT)) {
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
    Object.defineProperty(datetimeParser, "_ATN", {
        get: function () {
            if (!datetimeParser.__ATN) {
                datetimeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(datetimeParser._serializedATN));
            }
            return datetimeParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    datetimeParser.T__0 = 1;
    datetimeParser.T__1 = 2;
    datetimeParser.T__2 = 3;
    datetimeParser.T__3 = 4;
    datetimeParser.T__4 = 5;
    datetimeParser.T__5 = 6;
    datetimeParser.T__6 = 7;
    datetimeParser.T__7 = 8;
    datetimeParser.T__8 = 9;
    datetimeParser.T__9 = 10;
    datetimeParser.T__10 = 11;
    datetimeParser.T__11 = 12;
    datetimeParser.T__12 = 13;
    datetimeParser.T__13 = 14;
    datetimeParser.T__14 = 15;
    datetimeParser.T__15 = 16;
    datetimeParser.T__16 = 17;
    datetimeParser.T__17 = 18;
    datetimeParser.T__18 = 19;
    datetimeParser.T__19 = 20;
    datetimeParser.T__20 = 21;
    datetimeParser.T__21 = 22;
    datetimeParser.T__22 = 23;
    datetimeParser.T__23 = 24;
    datetimeParser.T__24 = 25;
    datetimeParser.T__25 = 26;
    datetimeParser.T__26 = 27;
    datetimeParser.T__27 = 28;
    datetimeParser.T__28 = 29;
    datetimeParser.T__29 = 30;
    datetimeParser.T__30 = 31;
    datetimeParser.T__31 = 32;
    datetimeParser.T__32 = 33;
    datetimeParser.ALPHA = 34;
    datetimeParser.DIGIT = 35;
    datetimeParser.WS = 36;
    datetimeParser.RULE_date_time = 0;
    datetimeParser.RULE_day = 1;
    datetimeParser.RULE_date = 2;
    datetimeParser.RULE_month = 3;
    datetimeParser.RULE_time = 4;
    datetimeParser.RULE_hour = 5;
    datetimeParser.RULE_zone = 6;
    datetimeParser.RULE_two_digit = 7;
    datetimeParser.RULE_four_digit = 8;
    datetimeParser.RULE_alphanumeric = 9;
    // tslint:disable:no-trailing-whitespace
    datetimeParser.ruleNames = [
        "date_time", "day", "date", "month", "time", "hour", "zone", "two_digit",
        "four_digit", "alphanumeric",
    ];
    datetimeParser._LITERAL_NAMES = [
        undefined, "','", "'Mon'", "'Tue'", "'Wed'", "'Thu'", "'Fri'", "'Sat'",
        "'Sun'", "'Jan'", "'Feb'", "'Mar'", "'Apr'", "'May'", "'Jun'", "'Jul'",
        "'Aug'", "'Sep'", "'Oct'", "'Nov'", "'Dec'", "':'", "'UT'", "'GMT'", "'EST'",
        "'EDT'", "'CST'", "'CDT'", "'MST'", "'MDT'", "'PST'", "'PDT'", "'+'",
        "'-'",
    ];
    datetimeParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "ALPHA",
        "DIGIT", "WS",
    ];
    datetimeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(datetimeParser._LITERAL_NAMES, datetimeParser._SYMBOLIC_NAMES, []);
    datetimeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&N\x04\x02\t\x02" +
        "\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
        "\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02\x05\x02" +
        "\x1A\n\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x06\x04\"\n" +
        "\x04\r\x04\x0E\x04#\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x073\n\x07\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x05\bB\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
        "\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x02\x06\x03\x02\x04\n\x03\x02\v\x16\x03\x02\"" +
        "#\x03\x02$%\x02Q\x02\x19\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06!" +
        "\x03\x02\x02\x02\b(\x03\x02\x02\x02\n*\x03\x02\x02\x02\f-\x03\x02\x02" +
        "\x02\x0EA\x03\x02\x02\x02\x10C\x03\x02\x02\x02\x12F\x03\x02\x02\x02\x14" +
        "K\x03\x02\x02\x02\x16\x17\x05\x04\x03\x02\x17\x18\x07\x03\x02\x02\x18" +
        "\x1A\x03\x02\x02\x02\x19\x16\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A" +
        "\x1B\x03\x02\x02\x02\x1B\x1C\x05\x06\x04\x02\x1C\x1D\x05\n\x06\x02\x1D" +
        "\x03\x03\x02\x02\x02\x1E\x1F\t\x02\x02\x02\x1F\x05\x03\x02\x02\x02 \"" +
        "\x05\x10\t\x02! \x03\x02\x02\x02\"#\x03\x02\x02\x02#!\x03\x02\x02\x02" +
        "#$\x03\x02\x02\x02$%\x03\x02\x02\x02%&\x05\b\x05\x02&\'\x05\x10\t\x02" +
        "\'\x07\x03\x02\x02\x02()\t\x03\x02\x02)\t\x03\x02\x02\x02*+\x05\f\x07" +
        "\x02+,\x05\x0E\b\x02,\v\x03\x02\x02\x02-.\x05\x10\t\x02./\x07\x17\x02" +
        "\x02/2\x05\x10\t\x0201\x07\x17\x02\x0213\x05\x10\t\x0220\x03\x02\x02\x02" +
        "23\x03\x02\x02\x023\r\x03\x02\x02\x024B\x07\x18\x02\x025B\x07\x19\x02" +
        "\x026B\x07\x1A\x02\x027B\x07\x1B\x02\x028B\x07\x1C\x02\x029B\x07\x1D\x02" +
        "\x02:B\x07\x1E\x02\x02;B\x07\x1F\x02\x02<B\x07 \x02\x02=B\x07!\x02\x02" +
        ">B\x07$\x02\x02?@\t\x04\x02\x02@B\x05\x12\n\x02A4\x03\x02\x02\x02A5\x03" +
        "\x02\x02\x02A6\x03\x02\x02\x02A7\x03\x02\x02\x02A8\x03\x02\x02\x02A9\x03" +
        "\x02\x02\x02A:\x03\x02\x02\x02A;\x03\x02\x02\x02A<\x03\x02\x02\x02A=\x03" +
        "\x02\x02\x02A>\x03\x02\x02\x02A?\x03\x02\x02\x02B\x0F\x03\x02\x02\x02" +
        "CD\x05\x14\v\x02DE\x05\x14\v\x02E\x11\x03\x02\x02\x02FG\x05\x14\v\x02" +
        "GH\x05\x14\v\x02HI\x05\x14\v\x02IJ\x05\x14\v\x02J\x13\x03\x02\x02\x02" +
        "KL\t\x05\x02\x02L\x15\x03\x02\x02\x02\x06\x19#2A";
    return datetimeParser;
}(Parser_1.Parser));
exports.datetimeParser = datetimeParser;
var Date_timeContext = /** @class */ (function (_super) {
    __extends(Date_timeContext, _super);
    function Date_timeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Date_timeContext.prototype.date = function () {
        return this.getRuleContext(0, DateContext);
    };
    Date_timeContext.prototype.time = function () {
        return this.getRuleContext(0, TimeContext);
    };
    Date_timeContext.prototype.day = function () {
        return this.tryGetRuleContext(0, DayContext);
    };
    Object.defineProperty(Date_timeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_date_time; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Date_timeContext.prototype.enterRule = function (listener) {
        if (listener.enterDate_time) {
            listener.enterDate_time(this);
        }
    };
    // @Override
    Date_timeContext.prototype.exitRule = function (listener) {
        if (listener.exitDate_time) {
            listener.exitDate_time(this);
        }
    };
    // @Override
    Date_timeContext.prototype.accept = function (visitor) {
        if (visitor.visitDate_time) {
            return visitor.visitDate_time(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Date_timeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Date_timeContext = Date_timeContext;
var DayContext = /** @class */ (function (_super) {
    __extends(DayContext, _super);
    function DayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_day; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DayContext.prototype.enterRule = function (listener) {
        if (listener.enterDay) {
            listener.enterDay(this);
        }
    };
    // @Override
    DayContext.prototype.exitRule = function (listener) {
        if (listener.exitDay) {
            listener.exitDay(this);
        }
    };
    // @Override
    DayContext.prototype.accept = function (visitor) {
        if (visitor.visitDay) {
            return visitor.visitDay(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DayContext = DayContext;
var DateContext = /** @class */ (function (_super) {
    __extends(DateContext, _super);
    function DateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DateContext.prototype.month = function () {
        return this.getRuleContext(0, MonthContext);
    };
    DateContext.prototype.two_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Two_digitContext);
        }
        else {
            return this.getRuleContext(i, Two_digitContext);
        }
    };
    Object.defineProperty(DateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_date; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DateContext.prototype.enterRule = function (listener) {
        if (listener.enterDate) {
            listener.enterDate(this);
        }
    };
    // @Override
    DateContext.prototype.exitRule = function (listener) {
        if (listener.exitDate) {
            listener.exitDate(this);
        }
    };
    // @Override
    DateContext.prototype.accept = function (visitor) {
        if (visitor.visitDate) {
            return visitor.visitDate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DateContext = DateContext;
var MonthContext = /** @class */ (function (_super) {
    __extends(MonthContext, _super);
    function MonthContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MonthContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_month; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MonthContext.prototype.enterRule = function (listener) {
        if (listener.enterMonth) {
            listener.enterMonth(this);
        }
    };
    // @Override
    MonthContext.prototype.exitRule = function (listener) {
        if (listener.exitMonth) {
            listener.exitMonth(this);
        }
    };
    // @Override
    MonthContext.prototype.accept = function (visitor) {
        if (visitor.visitMonth) {
            return visitor.visitMonth(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MonthContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MonthContext = MonthContext;
var TimeContext = /** @class */ (function (_super) {
    __extends(TimeContext, _super);
    function TimeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimeContext.prototype.hour = function () {
        return this.getRuleContext(0, HourContext);
    };
    TimeContext.prototype.zone = function () {
        return this.getRuleContext(0, ZoneContext);
    };
    Object.defineProperty(TimeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_time; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimeContext.prototype.enterRule = function (listener) {
        if (listener.enterTime) {
            listener.enterTime(this);
        }
    };
    // @Override
    TimeContext.prototype.exitRule = function (listener) {
        if (listener.exitTime) {
            listener.exitTime(this);
        }
    };
    // @Override
    TimeContext.prototype.accept = function (visitor) {
        if (visitor.visitTime) {
            return visitor.visitTime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimeContext = TimeContext;
var HourContext = /** @class */ (function (_super) {
    __extends(HourContext, _super);
    function HourContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HourContext.prototype.two_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Two_digitContext);
        }
        else {
            return this.getRuleContext(i, Two_digitContext);
        }
    };
    Object.defineProperty(HourContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_hour; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HourContext.prototype.enterRule = function (listener) {
        if (listener.enterHour) {
            listener.enterHour(this);
        }
    };
    // @Override
    HourContext.prototype.exitRule = function (listener) {
        if (listener.exitHour) {
            listener.exitHour(this);
        }
    };
    // @Override
    HourContext.prototype.accept = function (visitor) {
        if (visitor.visitHour) {
            return visitor.visitHour(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HourContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HourContext = HourContext;
var ZoneContext = /** @class */ (function (_super) {
    __extends(ZoneContext, _super);
    function ZoneContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ZoneContext.prototype.ALPHA = function () { return this.tryGetToken(datetimeParser.ALPHA, 0); };
    ZoneContext.prototype.four_digit = function () {
        return this.tryGetRuleContext(0, Four_digitContext);
    };
    Object.defineProperty(ZoneContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_zone; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ZoneContext.prototype.enterRule = function (listener) {
        if (listener.enterZone) {
            listener.enterZone(this);
        }
    };
    // @Override
    ZoneContext.prototype.exitRule = function (listener) {
        if (listener.exitZone) {
            listener.exitZone(this);
        }
    };
    // @Override
    ZoneContext.prototype.accept = function (visitor) {
        if (visitor.visitZone) {
            return visitor.visitZone(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ZoneContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ZoneContext = ZoneContext;
var Two_digitContext = /** @class */ (function (_super) {
    __extends(Two_digitContext, _super);
    function Two_digitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Two_digitContext.prototype.alphanumeric = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AlphanumericContext);
        }
        else {
            return this.getRuleContext(i, AlphanumericContext);
        }
    };
    Object.defineProperty(Two_digitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_two_digit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Two_digitContext.prototype.enterRule = function (listener) {
        if (listener.enterTwo_digit) {
            listener.enterTwo_digit(this);
        }
    };
    // @Override
    Two_digitContext.prototype.exitRule = function (listener) {
        if (listener.exitTwo_digit) {
            listener.exitTwo_digit(this);
        }
    };
    // @Override
    Two_digitContext.prototype.accept = function (visitor) {
        if (visitor.visitTwo_digit) {
            return visitor.visitTwo_digit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Two_digitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Two_digitContext = Two_digitContext;
var Four_digitContext = /** @class */ (function (_super) {
    __extends(Four_digitContext, _super);
    function Four_digitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Four_digitContext.prototype.alphanumeric = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AlphanumericContext);
        }
        else {
            return this.getRuleContext(i, AlphanumericContext);
        }
    };
    Object.defineProperty(Four_digitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_four_digit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Four_digitContext.prototype.enterRule = function (listener) {
        if (listener.enterFour_digit) {
            listener.enterFour_digit(this);
        }
    };
    // @Override
    Four_digitContext.prototype.exitRule = function (listener) {
        if (listener.exitFour_digit) {
            listener.exitFour_digit(this);
        }
    };
    // @Override
    Four_digitContext.prototype.accept = function (visitor) {
        if (visitor.visitFour_digit) {
            return visitor.visitFour_digit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Four_digitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Four_digitContext = Four_digitContext;
var AlphanumericContext = /** @class */ (function (_super) {
    __extends(AlphanumericContext, _super);
    function AlphanumericContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlphanumericContext.prototype.ALPHA = function () { return this.tryGetToken(datetimeParser.ALPHA, 0); };
    AlphanumericContext.prototype.DIGIT = function () { return this.tryGetToken(datetimeParser.DIGIT, 0); };
    Object.defineProperty(AlphanumericContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return datetimeParser.RULE_alphanumeric; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlphanumericContext.prototype.enterRule = function (listener) {
        if (listener.enterAlphanumeric) {
            listener.enterAlphanumeric(this);
        }
    };
    // @Override
    AlphanumericContext.prototype.exitRule = function (listener) {
        if (listener.exitAlphanumeric) {
            listener.exitAlphanumeric(this);
        }
    };
    // @Override
    AlphanumericContext.prototype.accept = function (visitor) {
        if (visitor.visitAlphanumeric) {
            return visitor.visitAlphanumeric(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlphanumericContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlphanumericContext = AlphanumericContext;
