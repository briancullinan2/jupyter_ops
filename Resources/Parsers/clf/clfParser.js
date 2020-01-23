"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clf/clf.g4 by ANTLR 4.7.3-SNAPSHOT
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
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var clfParser = /** @class */ (function (_super) {
    __extends(clfParser, _super);
    function clfParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(clfParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(clfParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return clfParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "clf.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfParser.prototype, "ruleNames", {
        // @Override
        get: function () { return clfParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clfParser.prototype, "serializedATN", {
        // @Override
        get: function () { return clfParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    clfParser.prototype.log = function () {
        var _localctx = new LogContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, clfParser.RULE_log);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 23;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === clfParser.IP || _la === clfParser.STRING) {
                                        {
                                            this.state = 22;
                                            this.line();
                                        }
                                    }
                                    this.state = 25;
                                    this.match(clfParser.EOL);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 28;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clfParser.IP || _la === clfParser.STRING) {
                    {
                        this.state = 30;
                        this.line();
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
    clfParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, clfParser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 33;
                this.host();
                this.state = 34;
                this.logname();
                this.state = 35;
                this.username();
                this.state = 36;
                this.datetimetz();
                this.state = 37;
                this.request();
                this.state = 38;
                this.statuscode();
                this.state = 39;
                this.bytes();
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === clfParser.LITERAL) {
                    {
                        this.state = 40;
                        this.referer();
                        this.state = 41;
                        this.useragent();
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
    clfParser.prototype.host = function () {
        var _localctx = new HostContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, clfParser.RULE_host);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                _la = this._input.LA(1);
                if (!(_la === clfParser.IP || _la === clfParser.STRING)) {
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
    clfParser.prototype.logname = function () {
        var _localctx = new LognameContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, clfParser.RULE_logname);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 47;
                this.match(clfParser.STRING);
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
    clfParser.prototype.username = function () {
        var _localctx = new UsernameContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, clfParser.RULE_username);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(clfParser.STRING);
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
    clfParser.prototype.datetimetz = function () {
        var _localctx = new DatetimetzContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, clfParser.RULE_datetimetz);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this.match(clfParser.T__0);
                this.state = 52;
                this.match(clfParser.DATE);
                this.state = 53;
                this.match(clfParser.T__1);
                this.state = 54;
                this.match(clfParser.TIME);
                this.state = 55;
                this.match(clfParser.TZ);
                this.state = 56;
                this.match(clfParser.T__2);
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
    clfParser.prototype.referer = function () {
        var _localctx = new RefererContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, clfParser.RULE_referer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this.match(clfParser.LITERAL);
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
    clfParser.prototype.request = function () {
        var _localctx = new RequestContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, clfParser.RULE_request);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.match(clfParser.LITERAL);
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
    clfParser.prototype.useragent = function () {
        var _localctx = new UseragentContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, clfParser.RULE_useragent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 62;
                this.match(clfParser.LITERAL);
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
    clfParser.prototype.statuscode = function () {
        var _localctx = new StatuscodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, clfParser.RULE_statuscode);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this.match(clfParser.STRING);
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
    clfParser.prototype.bytes = function () {
        var _localctx = new BytesContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, clfParser.RULE_bytes);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.match(clfParser.STRING);
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
    Object.defineProperty(clfParser, "_ATN", {
        get: function () {
            if (!clfParser.__ATN) {
                clfParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(clfParser._serializedATN));
            }
            return clfParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    clfParser.T__0 = 1;
    clfParser.T__1 = 2;
    clfParser.T__2 = 3;
    clfParser.DATE = 4;
    clfParser.TIME = 5;
    clfParser.TZ = 6;
    clfParser.LITERAL = 7;
    clfParser.IP = 8;
    clfParser.STRING = 9;
    clfParser.EOL = 10;
    clfParser.WS = 11;
    clfParser.RULE_log = 0;
    clfParser.RULE_line = 1;
    clfParser.RULE_host = 2;
    clfParser.RULE_logname = 3;
    clfParser.RULE_username = 4;
    clfParser.RULE_datetimetz = 5;
    clfParser.RULE_referer = 6;
    clfParser.RULE_request = 7;
    clfParser.RULE_useragent = 8;
    clfParser.RULE_statuscode = 9;
    clfParser.RULE_bytes = 10;
    // tslint:disable:no-trailing-whitespace
    clfParser.ruleNames = [
        "log", "line", "host", "logname", "username", "datetimetz", "referer",
        "request", "useragent", "statuscode", "bytes",
    ];
    clfParser._LITERAL_NAMES = [
        undefined, "'['", "':'", "']'",
    ];
    clfParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, "DATE", "TIME", "TZ", "LITERAL",
        "IP", "STRING", "EOL", "WS",
    ];
    clfParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(clfParser._LITERAL_NAMES, clfParser._SYMBOLIC_NAMES, []);
    clfParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\rG\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x05\x02" +
        "\x1A\n\x02\x03\x02\x06\x02\x1D\n\x02\r\x02\x0E\x02\x1E\x03\x02\x05\x02" +
        "\"\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x05\x03.\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
        "\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02" +
        "\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x02\x03\x03\x02\n\v\x02?\x02\x1C\x03\x02\x02\x02\x04#\x03" +
        "\x02\x02\x02\x06/\x03\x02\x02\x02\b1\x03\x02\x02\x02\n3\x03\x02\x02\x02" +
        "\f5\x03\x02\x02\x02\x0E<\x03\x02\x02\x02\x10>\x03\x02\x02\x02\x12@\x03" +
        "\x02\x02\x02\x14B\x03\x02\x02\x02\x16D\x03\x02\x02\x02\x18\x1A\x05\x04" +
        "\x03\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1B\x03\x02" +
        "\x02\x02\x1B\x1D\x07\f\x02\x02\x1C\x19\x03\x02\x02\x02\x1D\x1E\x03\x02" +
        "\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F!\x03\x02" +
        "\x02\x02 \"\x05\x04\x03\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"\x03" +
        "\x03\x02\x02\x02#$\x05\x06\x04\x02$%\x05\b\x05\x02%&\x05\n\x06\x02&\'" +
        "\x05\f\x07\x02\'(\x05\x10\t\x02()\x05\x14\v\x02)-\x05\x16\f\x02*+\x05" +
        "\x0E\b\x02+,\x05\x12\n\x02,.\x03\x02\x02\x02-*\x03\x02\x02\x02-.\x03\x02" +
        "\x02\x02.\x05\x03\x02\x02\x02/0\t\x02\x02\x020\x07\x03\x02\x02\x0212\x07" +
        "\v\x02\x022\t\x03\x02\x02\x0234\x07\v\x02\x024\v\x03\x02\x02\x0256\x07" +
        "\x03\x02\x0267\x07\x06\x02\x0278\x07\x04\x02\x0289\x07\x07\x02\x029:\x07" +
        "\b\x02\x02:;\x07\x05\x02\x02;\r\x03\x02\x02\x02<=\x07\t\x02\x02=\x0F\x03" +
        "\x02\x02\x02>?\x07\t\x02\x02?\x11\x03\x02\x02\x02@A\x07\t\x02\x02A\x13" +
        "\x03\x02\x02\x02BC\x07\v\x02\x02C\x15\x03\x02\x02\x02DE\x07\v\x02\x02" +
        "E\x17\x03\x02\x02\x02\x06\x19\x1E!-";
    return clfParser;
}(Parser_1.Parser));
exports.clfParser = clfParser;
var LogContext = /** @class */ (function (_super) {
    __extends(LogContext, _super);
    function LogContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(clfParser.EOL);
        }
        else {
            return this.getToken(clfParser.EOL, i);
        }
    };
    LogContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(LogContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_log; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogContext.prototype.enterRule = function (listener) {
        if (listener.enterLog) {
            listener.enterLog(this);
        }
    };
    // @Override
    LogContext.prototype.exitRule = function (listener) {
        if (listener.exitLog) {
            listener.exitLog(this);
        }
    };
    // @Override
    LogContext.prototype.accept = function (visitor) {
        if (visitor.visitLog) {
            return visitor.visitLog(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogContext = LogContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.host = function () {
        return this.getRuleContext(0, HostContext);
    };
    LineContext.prototype.logname = function () {
        return this.getRuleContext(0, LognameContext);
    };
    LineContext.prototype.username = function () {
        return this.getRuleContext(0, UsernameContext);
    };
    LineContext.prototype.datetimetz = function () {
        return this.getRuleContext(0, DatetimetzContext);
    };
    LineContext.prototype.request = function () {
        return this.getRuleContext(0, RequestContext);
    };
    LineContext.prototype.statuscode = function () {
        return this.getRuleContext(0, StatuscodeContext);
    };
    LineContext.prototype.bytes = function () {
        return this.getRuleContext(0, BytesContext);
    };
    LineContext.prototype.referer = function () {
        return this.tryGetRuleContext(0, RefererContext);
    };
    LineContext.prototype.useragent = function () {
        return this.tryGetRuleContext(0, UseragentContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_line; },
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
var HostContext = /** @class */ (function (_super) {
    __extends(HostContext, _super);
    function HostContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HostContext.prototype.STRING = function () { return this.tryGetToken(clfParser.STRING, 0); };
    HostContext.prototype.IP = function () { return this.tryGetToken(clfParser.IP, 0); };
    Object.defineProperty(HostContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_host; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HostContext.prototype.enterRule = function (listener) {
        if (listener.enterHost) {
            listener.enterHost(this);
        }
    };
    // @Override
    HostContext.prototype.exitRule = function (listener) {
        if (listener.exitHost) {
            listener.exitHost(this);
        }
    };
    // @Override
    HostContext.prototype.accept = function (visitor) {
        if (visitor.visitHost) {
            return visitor.visitHost(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HostContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HostContext = HostContext;
var LognameContext = /** @class */ (function (_super) {
    __extends(LognameContext, _super);
    function LognameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LognameContext.prototype.STRING = function () { return this.getToken(clfParser.STRING, 0); };
    Object.defineProperty(LognameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_logname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LognameContext.prototype.enterRule = function (listener) {
        if (listener.enterLogname) {
            listener.enterLogname(this);
        }
    };
    // @Override
    LognameContext.prototype.exitRule = function (listener) {
        if (listener.exitLogname) {
            listener.exitLogname(this);
        }
    };
    // @Override
    LognameContext.prototype.accept = function (visitor) {
        if (visitor.visitLogname) {
            return visitor.visitLogname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LognameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LognameContext = LognameContext;
var UsernameContext = /** @class */ (function (_super) {
    __extends(UsernameContext, _super);
    function UsernameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsernameContext.prototype.STRING = function () { return this.getToken(clfParser.STRING, 0); };
    Object.defineProperty(UsernameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_username; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsernameContext.prototype.enterRule = function (listener) {
        if (listener.enterUsername) {
            listener.enterUsername(this);
        }
    };
    // @Override
    UsernameContext.prototype.exitRule = function (listener) {
        if (listener.exitUsername) {
            listener.exitUsername(this);
        }
    };
    // @Override
    UsernameContext.prototype.accept = function (visitor) {
        if (visitor.visitUsername) {
            return visitor.visitUsername(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsernameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsernameContext = UsernameContext;
var DatetimetzContext = /** @class */ (function (_super) {
    __extends(DatetimetzContext, _super);
    function DatetimetzContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatetimetzContext.prototype.DATE = function () { return this.getToken(clfParser.DATE, 0); };
    DatetimetzContext.prototype.TIME = function () { return this.getToken(clfParser.TIME, 0); };
    DatetimetzContext.prototype.TZ = function () { return this.getToken(clfParser.TZ, 0); };
    Object.defineProperty(DatetimetzContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_datetimetz; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatetimetzContext.prototype.enterRule = function (listener) {
        if (listener.enterDatetimetz) {
            listener.enterDatetimetz(this);
        }
    };
    // @Override
    DatetimetzContext.prototype.exitRule = function (listener) {
        if (listener.exitDatetimetz) {
            listener.exitDatetimetz(this);
        }
    };
    // @Override
    DatetimetzContext.prototype.accept = function (visitor) {
        if (visitor.visitDatetimetz) {
            return visitor.visitDatetimetz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatetimetzContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatetimetzContext = DatetimetzContext;
var RefererContext = /** @class */ (function (_super) {
    __extends(RefererContext, _super);
    function RefererContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefererContext.prototype.LITERAL = function () { return this.getToken(clfParser.LITERAL, 0); };
    Object.defineProperty(RefererContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_referer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RefererContext.prototype.enterRule = function (listener) {
        if (listener.enterReferer) {
            listener.enterReferer(this);
        }
    };
    // @Override
    RefererContext.prototype.exitRule = function (listener) {
        if (listener.exitReferer) {
            listener.exitReferer(this);
        }
    };
    // @Override
    RefererContext.prototype.accept = function (visitor) {
        if (visitor.visitReferer) {
            return visitor.visitReferer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RefererContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RefererContext = RefererContext;
var RequestContext = /** @class */ (function (_super) {
    __extends(RequestContext, _super);
    function RequestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RequestContext.prototype.LITERAL = function () { return this.getToken(clfParser.LITERAL, 0); };
    Object.defineProperty(RequestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_request; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RequestContext.prototype.enterRule = function (listener) {
        if (listener.enterRequest) {
            listener.enterRequest(this);
        }
    };
    // @Override
    RequestContext.prototype.exitRule = function (listener) {
        if (listener.exitRequest) {
            listener.exitRequest(this);
        }
    };
    // @Override
    RequestContext.prototype.accept = function (visitor) {
        if (visitor.visitRequest) {
            return visitor.visitRequest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RequestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RequestContext = RequestContext;
var UseragentContext = /** @class */ (function (_super) {
    __extends(UseragentContext, _super);
    function UseragentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UseragentContext.prototype.LITERAL = function () { return this.getToken(clfParser.LITERAL, 0); };
    Object.defineProperty(UseragentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_useragent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UseragentContext.prototype.enterRule = function (listener) {
        if (listener.enterUseragent) {
            listener.enterUseragent(this);
        }
    };
    // @Override
    UseragentContext.prototype.exitRule = function (listener) {
        if (listener.exitUseragent) {
            listener.exitUseragent(this);
        }
    };
    // @Override
    UseragentContext.prototype.accept = function (visitor) {
        if (visitor.visitUseragent) {
            return visitor.visitUseragent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UseragentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UseragentContext = UseragentContext;
var StatuscodeContext = /** @class */ (function (_super) {
    __extends(StatuscodeContext, _super);
    function StatuscodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatuscodeContext.prototype.STRING = function () { return this.getToken(clfParser.STRING, 0); };
    Object.defineProperty(StatuscodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_statuscode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatuscodeContext.prototype.enterRule = function (listener) {
        if (listener.enterStatuscode) {
            listener.enterStatuscode(this);
        }
    };
    // @Override
    StatuscodeContext.prototype.exitRule = function (listener) {
        if (listener.exitStatuscode) {
            listener.exitStatuscode(this);
        }
    };
    // @Override
    StatuscodeContext.prototype.accept = function (visitor) {
        if (visitor.visitStatuscode) {
            return visitor.visitStatuscode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatuscodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatuscodeContext = StatuscodeContext;
var BytesContext = /** @class */ (function (_super) {
    __extends(BytesContext, _super);
    function BytesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BytesContext.prototype.STRING = function () { return this.getToken(clfParser.STRING, 0); };
    Object.defineProperty(BytesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return clfParser.RULE_bytes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BytesContext.prototype.enterRule = function (listener) {
        if (listener.enterBytes) {
            listener.enterBytes(this);
        }
    };
    // @Override
    BytesContext.prototype.exitRule = function (listener) {
        if (listener.exitBytes) {
            listener.exitBytes(this);
        }
    };
    // @Override
    BytesContext.prototype.accept = function (visitor) {
        if (visitor.visitBytes) {
            return visitor.visitBytes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BytesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BytesContext = BytesContext;
