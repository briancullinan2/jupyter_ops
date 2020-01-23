"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/upnp/Upnp.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var UpnpParser = /** @class */ (function (_super) {
    __extends(UpnpParser, _super);
    function UpnpParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(UpnpParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(UpnpParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return UpnpParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpnpParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Upnp.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpnpParser.prototype, "ruleNames", {
        // @Override
        get: function () { return UpnpParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpnpParser.prototype, "serializedATN", {
        // @Override
        get: function () { return UpnpParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    UpnpParser.prototype.searchCrit = function () {
        var _localctx = new SearchCritContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, UpnpParser.RULE_searchCrit);
        try {
            this.state = 12;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case UpnpParser.T__0:
                case UpnpParser.PROPERTY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 10;
                        this.searchExp(0);
                    }
                    break;
                case UpnpParser.ASTERISK:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 11;
                        this.match(UpnpParser.ASTERISK);
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
    UpnpParser.prototype.searchExp = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new SearchExpContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 2;
        this.enterRecursionRule(_localctx, 2, UpnpParser.RULE_searchExp, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case UpnpParser.PROPERTY:
                        {
                            this.state = 15;
                            this.relExp();
                        }
                        break;
                    case UpnpParser.T__0:
                        {
                            this.state = 16;
                            this.match(UpnpParser.T__0);
                            this.state = 20;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === UpnpParser.WCHAR) {
                                {
                                    {
                                        this.state = 17;
                                        this.match(UpnpParser.WCHAR);
                                    }
                                }
                                this.state = 22;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 23;
                            this.searchExp(0);
                            this.state = 27;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === UpnpParser.WCHAR) {
                                {
                                    {
                                        this.state = 24;
                                        this.match(UpnpParser.WCHAR);
                                    }
                                }
                                this.state = 29;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 30;
                            this.match(UpnpParser.T__1);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 49;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new SearchExpContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, UpnpParser.RULE_searchExp);
                                this.state = 34;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 36;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 35;
                                            this.match(UpnpParser.WCHAR);
                                        }
                                    }
                                    this.state = 38;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === UpnpParser.WCHAR);
                                this.state = 40;
                                this.match(UpnpParser.LOGOP);
                                this.state = 42;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 41;
                                            this.match(UpnpParser.WCHAR);
                                        }
                                    }
                                    this.state = 44;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === UpnpParser.WCHAR);
                                this.state = 46;
                                this.searchExp(3);
                            }
                        }
                    }
                    this.state = 51;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    UpnpParser.prototype.relExp = function () {
        var _localctx = new RelExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, UpnpParser.RULE_relExp);
        var _la;
        try {
            this.state = 78;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 52;
                        this.match(UpnpParser.PROPERTY);
                        this.state = 54;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 53;
                                    this.match(UpnpParser.WCHAR);
                                }
                            }
                            this.state = 56;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === UpnpParser.WCHAR);
                        this.state = 58;
                        this.match(UpnpParser.BINOP);
                        this.state = 60;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 59;
                                    this.match(UpnpParser.WCHAR);
                                }
                            }
                            this.state = 62;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === UpnpParser.WCHAR);
                        this.state = 64;
                        this.quotedVal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 65;
                        this.match(UpnpParser.PROPERTY);
                        this.state = 67;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 66;
                                    this.match(UpnpParser.WCHAR);
                                }
                            }
                            this.state = 69;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === UpnpParser.WCHAR);
                        this.state = 71;
                        this.match(UpnpParser.EXISTSOP);
                        this.state = 73;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 72;
                                    this.match(UpnpParser.WCHAR);
                                }
                            }
                            this.state = 75;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === UpnpParser.WCHAR);
                        this.state = 77;
                        this.match(UpnpParser.BOOLVAL);
                    }
                    break;
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
    UpnpParser.prototype.quotedVal = function () {
        var _localctx = new QuotedValContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, UpnpParser.RULE_quotedVal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 80;
                this.match(UpnpParser.DQUOTE);
                this.state = 81;
                this.escapedQuote();
                this.state = 82;
                this.match(UpnpParser.DQUOTE);
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
    UpnpParser.prototype.escapedQuote = function () {
        var _localctx = new EscapedQuoteContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, UpnpParser.RULE_escapedQuote);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 84;
                                this.match(UpnpParser.STRING_LITERAL);
                            }
                        }
                    }
                    this.state = 89;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                }
                this.state = 93;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === UpnpParser.WCHAR) {
                    {
                        {
                            this.state = 90;
                            this.match(UpnpParser.WCHAR);
                        }
                    }
                    this.state = 95;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 99;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === UpnpParser.STRING_LITERAL) {
                    {
                        {
                            this.state = 96;
                            this.match(UpnpParser.STRING_LITERAL);
                        }
                    }
                    this.state = 101;
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
    UpnpParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.searchExp_sempred(_localctx, predIndex);
        }
        return true;
    };
    UpnpParser.prototype.searchExp_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    Object.defineProperty(UpnpParser, "_ATN", {
        get: function () {
            if (!UpnpParser.__ATN) {
                UpnpParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(UpnpParser._serializedATN));
            }
            return UpnpParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    UpnpParser.T__0 = 1;
    UpnpParser.T__1 = 2;
    UpnpParser.NUMBER = 3;
    UpnpParser.WHITESPACE = 4;
    UpnpParser.LOGOP = 5;
    UpnpParser.BINOP = 6;
    UpnpParser.RELOP = 7;
    UpnpParser.STRINGOP = 8;
    UpnpParser.EXISTSOP = 9;
    UpnpParser.BOOLVAL = 10;
    UpnpParser.WCHAR = 11;
    UpnpParser.PROPERTY = 12;
    UpnpParser.HTAB = 13;
    UpnpParser.SPACE = 14;
    UpnpParser.DQUOTE = 15;
    UpnpParser.ASTERISK = 16;
    UpnpParser.STRING_LITERAL = 17;
    UpnpParser.RULE_searchCrit = 0;
    UpnpParser.RULE_searchExp = 1;
    UpnpParser.RULE_relExp = 2;
    UpnpParser.RULE_quotedVal = 3;
    UpnpParser.RULE_escapedQuote = 4;
    // tslint:disable:no-trailing-whitespace
    UpnpParser.ruleNames = [
        "searchCrit", "searchExp", "relExp", "quotedVal", "escapedQuote",
    ];
    UpnpParser._LITERAL_NAMES = [
        undefined, "'('", "')'", undefined, undefined, undefined, undefined, undefined,
        undefined, "'exists'", undefined, undefined, undefined, "'\t'", "' '",
        "'\"'", "'*'",
    ];
    UpnpParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "NUMBER", "WHITESPACE", "LOGOP", "BINOP",
        "RELOP", "STRINGOP", "EXISTSOP", "BOOLVAL", "WCHAR", "PROPERTY", "HTAB",
        "SPACE", "DQUOTE", "ASTERISK", "STRING_LITERAL",
    ];
    UpnpParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(UpnpParser._LITERAL_NAMES, UpnpParser._SYMBOLIC_NAMES, []);
    UpnpParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13i\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
        "\x03\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x15" +
        "\n\x03\f\x03\x0E\x03\x18\v\x03\x03\x03\x03\x03\x07\x03\x1C\n\x03\f\x03" +
        "\x0E\x03\x1F\v\x03\x03\x03\x03\x03\x05\x03#\n\x03\x03\x03\x03\x03\x06" +
        "\x03\'\n\x03\r\x03\x0E\x03(\x03\x03\x03\x03\x06\x03-\n\x03\r\x03\x0E\x03" +
        ".\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03\x04\x03\x04\x06\x04" +
        "9\n\x04\r\x04\x0E\x04:\x03\x04\x03\x04\x06\x04?\n\x04\r\x04\x0E\x04@\x03" +
        "\x04\x03\x04\x03\x04\x06\x04F\n\x04\r\x04\x0E\x04G\x03\x04\x03\x04\x06" +
        "\x04L\n\x04\r\x04\x0E\x04M\x03\x04\x05\x04Q\n\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x06\x07\x06X\n\x06\f\x06\x0E\x06[\v\x06\x03\x06\x07\x06" +
        "^\n\x06\f\x06\x0E\x06a\v\x06\x03\x06\x07\x06d\n\x06\f\x06\x0E\x06g\v\x06" +
        "\x03\x06\x02\x02\x03\x04\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02" +
        "\x02r\x02\x0E\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06P\x03\x02\x02\x02" +
        "\bR\x03\x02\x02\x02\nY\x03\x02\x02\x02\f\x0F\x05\x04\x03\x02\r\x0F\x07" +
        "\x12\x02\x02\x0E\f\x03\x02\x02\x02\x0E\r\x03\x02\x02\x02\x0F\x03\x03\x02" +
        "\x02\x02\x10\x11\b\x03\x01\x02\x11#\x05\x06\x04\x02\x12\x16\x07\x03\x02" +
        "\x02\x13\x15\x07\r\x02\x02\x14\x13\x03\x02\x02\x02\x15\x18\x03\x02\x02" +
        "\x02\x16\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x19\x03\x02\x02" +
        "\x02\x18\x16\x03\x02\x02\x02\x19\x1D\x05\x04\x03\x02\x1A\x1C\x07\r\x02" +
        "\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02" +
        "\x02\x1D\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02" +
        "\x02 !\x07\x04\x02\x02!#\x03\x02\x02\x02\"\x10\x03\x02\x02\x02\"\x12\x03" +
        "\x02\x02\x02#3\x03\x02\x02\x02$&\f\x04\x02\x02%\'\x07\r\x02\x02&%\x03" +
        "\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)*" +
        "\x03\x02\x02\x02*,\x07\x07\x02\x02+-\x07\r\x02\x02,+\x03\x02\x02\x02-" +
        ".\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/0\x03\x02\x02\x02" +
        "02\x05\x04\x03\x051$\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x02" +
        "34\x03\x02\x02\x024\x05\x03\x02\x02\x0253\x03\x02\x02\x0268\x07\x0E\x02" +
        "\x0279\x07\r\x02\x0287\x03\x02\x02\x029:\x03\x02\x02\x02:8\x03\x02\x02" +
        "\x02:;\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x07\b\x02\x02=?\x07\r\x02\x02" +
        ">=\x03\x02\x02\x02?@\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02" +
        "AB\x03\x02\x02\x02BQ\x05\b\x05\x02CE\x07\x0E\x02\x02DF\x07\r\x02\x02E" +
        "D\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02" +
        "HI\x03\x02\x02\x02IK\x07\v\x02\x02JL\x07\r\x02\x02KJ\x03\x02\x02\x02L" +
        "M\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x03\x02\x02\x02" +
        "OQ\x07\f\x02\x02P6\x03\x02\x02\x02PC\x03\x02\x02\x02Q\x07\x03\x02\x02" +
        "\x02RS\x07\x11\x02\x02ST\x05\n\x06\x02TU\x07\x11\x02\x02U\t\x03\x02\x02" +
        "\x02VX\x07\x13\x02\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02" +
        "\x02YZ\x03\x02\x02\x02Z_\x03\x02\x02\x02[Y\x03\x02\x02\x02\\^\x07\r\x02" +
        "\x02]\\\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02" +
        "\x02\x02`e\x03\x02\x02\x02a_\x03\x02\x02\x02bd\x07\x13\x02\x02cb\x03\x02" +
        "\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\v\x03" +
        "\x02\x02\x02ge\x03\x02\x02\x02\x11\x0E\x16\x1D\"(.3:@GMPY_e";
    return UpnpParser;
}(Parser_1.Parser));
exports.UpnpParser = UpnpParser;
var SearchCritContext = /** @class */ (function (_super) {
    __extends(SearchCritContext, _super);
    function SearchCritContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SearchCritContext.prototype.searchExp = function () {
        return this.tryGetRuleContext(0, SearchExpContext);
    };
    SearchCritContext.prototype.ASTERISK = function () { return this.tryGetToken(UpnpParser.ASTERISK, 0); };
    Object.defineProperty(SearchCritContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UpnpParser.RULE_searchCrit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SearchCritContext.prototype.enterRule = function (listener) {
        if (listener.enterSearchCrit) {
            listener.enterSearchCrit(this);
        }
    };
    // @Override
    SearchCritContext.prototype.exitRule = function (listener) {
        if (listener.exitSearchCrit) {
            listener.exitSearchCrit(this);
        }
    };
    // @Override
    SearchCritContext.prototype.accept = function (visitor) {
        if (visitor.visitSearchCrit) {
            return visitor.visitSearchCrit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SearchCritContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SearchCritContext = SearchCritContext;
var SearchExpContext = /** @class */ (function (_super) {
    __extends(SearchExpContext, _super);
    function SearchExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SearchExpContext.prototype.relExp = function () {
        return this.tryGetRuleContext(0, RelExpContext);
    };
    SearchExpContext.prototype.searchExp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SearchExpContext);
        }
        else {
            return this.getRuleContext(i, SearchExpContext);
        }
    };
    SearchExpContext.prototype.LOGOP = function () { return this.tryGetToken(UpnpParser.LOGOP, 0); };
    SearchExpContext.prototype.WCHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(UpnpParser.WCHAR);
        }
        else {
            return this.getToken(UpnpParser.WCHAR, i);
        }
    };
    Object.defineProperty(SearchExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UpnpParser.RULE_searchExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SearchExpContext.prototype.enterRule = function (listener) {
        if (listener.enterSearchExp) {
            listener.enterSearchExp(this);
        }
    };
    // @Override
    SearchExpContext.prototype.exitRule = function (listener) {
        if (listener.exitSearchExp) {
            listener.exitSearchExp(this);
        }
    };
    // @Override
    SearchExpContext.prototype.accept = function (visitor) {
        if (visitor.visitSearchExp) {
            return visitor.visitSearchExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SearchExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SearchExpContext = SearchExpContext;
var RelExpContext = /** @class */ (function (_super) {
    __extends(RelExpContext, _super);
    function RelExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelExpContext.prototype.PROPERTY = function () { return this.getToken(UpnpParser.PROPERTY, 0); };
    RelExpContext.prototype.BINOP = function () { return this.tryGetToken(UpnpParser.BINOP, 0); };
    RelExpContext.prototype.quotedVal = function () {
        return this.tryGetRuleContext(0, QuotedValContext);
    };
    RelExpContext.prototype.WCHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(UpnpParser.WCHAR);
        }
        else {
            return this.getToken(UpnpParser.WCHAR, i);
        }
    };
    RelExpContext.prototype.EXISTSOP = function () { return this.tryGetToken(UpnpParser.EXISTSOP, 0); };
    RelExpContext.prototype.BOOLVAL = function () { return this.tryGetToken(UpnpParser.BOOLVAL, 0); };
    Object.defineProperty(RelExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UpnpParser.RULE_relExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelExpContext.prototype.enterRule = function (listener) {
        if (listener.enterRelExp) {
            listener.enterRelExp(this);
        }
    };
    // @Override
    RelExpContext.prototype.exitRule = function (listener) {
        if (listener.exitRelExp) {
            listener.exitRelExp(this);
        }
    };
    // @Override
    RelExpContext.prototype.accept = function (visitor) {
        if (visitor.visitRelExp) {
            return visitor.visitRelExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelExpContext = RelExpContext;
var QuotedValContext = /** @class */ (function (_super) {
    __extends(QuotedValContext, _super);
    function QuotedValContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuotedValContext.prototype.DQUOTE = function (i) {
        if (i === undefined) {
            return this.getTokens(UpnpParser.DQUOTE);
        }
        else {
            return this.getToken(UpnpParser.DQUOTE, i);
        }
    };
    QuotedValContext.prototype.escapedQuote = function () {
        return this.getRuleContext(0, EscapedQuoteContext);
    };
    Object.defineProperty(QuotedValContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UpnpParser.RULE_quotedVal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuotedValContext.prototype.enterRule = function (listener) {
        if (listener.enterQuotedVal) {
            listener.enterQuotedVal(this);
        }
    };
    // @Override
    QuotedValContext.prototype.exitRule = function (listener) {
        if (listener.exitQuotedVal) {
            listener.exitQuotedVal(this);
        }
    };
    // @Override
    QuotedValContext.prototype.accept = function (visitor) {
        if (visitor.visitQuotedVal) {
            return visitor.visitQuotedVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuotedValContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuotedValContext = QuotedValContext;
var EscapedQuoteContext = /** @class */ (function (_super) {
    __extends(EscapedQuoteContext, _super);
    function EscapedQuoteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EscapedQuoteContext.prototype.STRING_LITERAL = function (i) {
        if (i === undefined) {
            return this.getTokens(UpnpParser.STRING_LITERAL);
        }
        else {
            return this.getToken(UpnpParser.STRING_LITERAL, i);
        }
    };
    EscapedQuoteContext.prototype.WCHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(UpnpParser.WCHAR);
        }
        else {
            return this.getToken(UpnpParser.WCHAR, i);
        }
    };
    Object.defineProperty(EscapedQuoteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UpnpParser.RULE_escapedQuote; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EscapedQuoteContext.prototype.enterRule = function (listener) {
        if (listener.enterEscapedQuote) {
            listener.enterEscapedQuote(this);
        }
    };
    // @Override
    EscapedQuoteContext.prototype.exitRule = function (listener) {
        if (listener.exitEscapedQuote) {
            listener.exitEscapedQuote(this);
        }
    };
    // @Override
    EscapedQuoteContext.prototype.accept = function (visitor) {
        if (visitor.visitEscapedQuote) {
            return visitor.visitEscapedQuote(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EscapedQuoteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EscapedQuoteContext = EscapedQuoteContext;
