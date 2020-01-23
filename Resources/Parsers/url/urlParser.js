"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/url/url.g4 by ANTLR 4.7.3-SNAPSHOT
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
var urlParser = /** @class */ (function (_super) {
    __extends(urlParser, _super);
    function urlParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(urlParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(urlParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return urlParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "url.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlParser.prototype, "ruleNames", {
        // @Override
        get: function () { return urlParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(urlParser.prototype, "serializedATN", {
        // @Override
        get: function () { return urlParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    urlParser.prototype.url = function () {
        var _localctx = new UrlContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, urlParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this.uri();
                this.state = 33;
                this.match(urlParser.EOF);
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
    urlParser.prototype.uri = function () {
        var _localctx = new UriContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, urlParser.RULE_uri);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                this.scheme();
                this.state = 36;
                this.match(urlParser.T__0);
                this.state = 38;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 37;
                            this.login();
                        }
                        break;
                }
                this.state = 40;
                this.host();
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__1) {
                    {
                        this.state = 41;
                        this.match(urlParser.T__1);
                        this.state = 42;
                        this.port();
                    }
                }
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__2) {
                    {
                        this.state = 45;
                        this.match(urlParser.T__2);
                        this.state = 47;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === urlParser.STRING) {
                            {
                                this.state = 46;
                                this.path();
                            }
                        }
                    }
                }
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__9) {
                    {
                        this.state = 51;
                        this.query();
                    }
                }
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__8) {
                    {
                        this.state = 54;
                        this.frag();
                    }
                }
                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.WS) {
                    {
                        this.state = 57;
                        this.match(urlParser.WS);
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
    urlParser.prototype.scheme = function () {
        var _localctx = new SchemeContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, urlParser.RULE_scheme);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.string();
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
    urlParser.prototype.host = function () {
        var _localctx = new HostContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, urlParser.RULE_host);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 63;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__2) {
                    {
                        this.state = 62;
                        this.match(urlParser.T__2);
                    }
                }
                this.state = 65;
                this.hostname();
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
    urlParser.prototype.hostname = function () {
        var _localctx = new HostnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, urlParser.RULE_hostname);
        var _la;
        try {
            this.state = 79;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case urlParser.STRING:
                    _localctx = new DomainNameOrIPv4HostContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 67;
                        this.string();
                        this.state = 72;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === urlParser.T__3) {
                            {
                                {
                                    this.state = 68;
                                    this.match(urlParser.T__3);
                                    this.state = 69;
                                    this.string();
                                }
                            }
                            this.state = 74;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case urlParser.T__4:
                    _localctx = new IPv6HostContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 75;
                        this.match(urlParser.T__4);
                        this.state = 76;
                        this.v6host();
                        this.state = 77;
                        this.match(urlParser.T__5);
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
    urlParser.prototype.v6host = function () {
        var _localctx = new V6hostContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, urlParser.RULE_v6host);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__6) {
                    {
                        this.state = 81;
                        this.match(urlParser.T__6);
                    }
                }
                this.state = 86;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case urlParser.STRING:
                        {
                            this.state = 84;
                            this.string();
                        }
                        break;
                    case urlParser.DIGITS:
                        {
                            this.state = 85;
                            this.match(urlParser.DIGITS);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === urlParser.T__1 || _la === urlParser.T__6) {
                    {
                        {
                            this.state = 88;
                            _la = this._input.LA(1);
                            if (!(_la === urlParser.T__1 || _la === urlParser.T__6)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 91;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case urlParser.STRING:
                                    {
                                        this.state = 89;
                                        this.string();
                                    }
                                    break;
                                case urlParser.DIGITS:
                                    {
                                        this.state = 90;
                                        this.match(urlParser.DIGITS);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 97;
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
    urlParser.prototype.port = function () {
        var _localctx = new PortContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, urlParser.RULE_port);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.match(urlParser.DIGITS);
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
    urlParser.prototype.path = function () {
        var _localctx = new PathContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, urlParser.RULE_path);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this.string();
                this.state = 105;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 101;
                                this.match(urlParser.T__2);
                                this.state = 102;
                                this.string();
                            }
                        }
                    }
                    this.state = 107;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__2) {
                    {
                        this.state = 108;
                        this.match(urlParser.T__2);
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
    urlParser.prototype.user = function () {
        var _localctx = new UserContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, urlParser.RULE_user);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
                this.string();
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
    urlParser.prototype.login = function () {
        var _localctx = new LoginContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, urlParser.RULE_login);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.user();
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__1) {
                    {
                        this.state = 114;
                        this.match(urlParser.T__1);
                        this.state = 115;
                        this.password();
                    }
                }
                this.state = 118;
                this.match(urlParser.T__7);
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
    urlParser.prototype.password = function () {
        var _localctx = new PasswordContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, urlParser.RULE_password);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 120;
                this.string();
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
    urlParser.prototype.frag = function () {
        var _localctx = new FragContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, urlParser.RULE_frag);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                this.match(urlParser.T__8);
                this.state = 125;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case urlParser.STRING:
                        {
                            this.state = 123;
                            this.string();
                        }
                        break;
                    case urlParser.DIGITS:
                        {
                            this.state = 124;
                            this.match(urlParser.DIGITS);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
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
    urlParser.prototype.query = function () {
        var _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, urlParser.RULE_query);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.match(urlParser.T__9);
                this.state = 128;
                this.search();
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
    urlParser.prototype.search = function () {
        var _localctx = new SearchContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, urlParser.RULE_search);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 130;
                this.searchparameter();
                this.state = 135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === urlParser.T__10) {
                    {
                        {
                            this.state = 131;
                            this.match(urlParser.T__10);
                            this.state = 132;
                            this.searchparameter();
                        }
                    }
                    this.state = 137;
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
    urlParser.prototype.searchparameter = function () {
        var _localctx = new SearchparameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, urlParser.RULE_searchparameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.string();
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === urlParser.T__11) {
                    {
                        this.state = 139;
                        this.match(urlParser.T__11);
                        this.state = 143;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case urlParser.STRING:
                                {
                                    this.state = 140;
                                    this.string();
                                }
                                break;
                            case urlParser.DIGITS:
                                {
                                    this.state = 141;
                                    this.match(urlParser.DIGITS);
                                }
                                break;
                            case urlParser.HEX:
                                {
                                    this.state = 142;
                                    this.match(urlParser.HEX);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
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
    urlParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, urlParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(urlParser.STRING);
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
    Object.defineProperty(urlParser, "_ATN", {
        get: function () {
            if (!urlParser.__ATN) {
                urlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(urlParser._serializedATN));
            }
            return urlParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    urlParser.T__0 = 1;
    urlParser.T__1 = 2;
    urlParser.T__2 = 3;
    urlParser.T__3 = 4;
    urlParser.T__4 = 5;
    urlParser.T__5 = 6;
    urlParser.T__6 = 7;
    urlParser.T__7 = 8;
    urlParser.T__8 = 9;
    urlParser.T__9 = 10;
    urlParser.T__10 = 11;
    urlParser.T__11 = 12;
    urlParser.DIGITS = 13;
    urlParser.HEX = 14;
    urlParser.STRING = 15;
    urlParser.WS = 16;
    urlParser.RULE_url = 0;
    urlParser.RULE_uri = 1;
    urlParser.RULE_scheme = 2;
    urlParser.RULE_host = 3;
    urlParser.RULE_hostname = 4;
    urlParser.RULE_v6host = 5;
    urlParser.RULE_port = 6;
    urlParser.RULE_path = 7;
    urlParser.RULE_user = 8;
    urlParser.RULE_login = 9;
    urlParser.RULE_password = 10;
    urlParser.RULE_frag = 11;
    urlParser.RULE_query = 12;
    urlParser.RULE_search = 13;
    urlParser.RULE_searchparameter = 14;
    urlParser.RULE_string = 15;
    // tslint:disable:no-trailing-whitespace
    urlParser.ruleNames = [
        "url", "uri", "scheme", "host", "hostname", "v6host", "port", "path",
        "user", "login", "password", "frag", "query", "search", "searchparameter",
        "string",
    ];
    urlParser._LITERAL_NAMES = [
        undefined, "'://'", "':'", "'/'", "'.'", "'['", "']'", "'::'", "'@'",
        "'#'", "'?'", "'&'", "'='",
    ];
    urlParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "DIGITS",
        "HEX", "STRING", "WS",
    ];
    urlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(urlParser._LITERAL_NAMES, urlParser._SYMBOLIC_NAMES, []);
    urlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12\x98\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
        "\x02\x03\x03\x03\x03\x03\x03\x05\x03)\n\x03\x03\x03\x03\x03\x03\x03\x05" +
        "\x03.\n\x03\x03\x03\x03\x03\x05\x032\n\x03\x05\x034\n\x03\x03\x03\x05" +
        "\x037\n\x03\x03\x03\x05\x03:\n\x03\x03\x03\x05\x03=\n\x03\x03\x04\x03" +
        "\x04\x03\x05\x05\x05B\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
        "\x06I\n\x06\f\x06\x0E\x06L\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
        "R\n\x06\x03\x07\x05\x07U\n\x07\x03\x07\x03\x07\x05\x07Y\n\x07\x03\x07" +
        "\x03\x07\x03\x07\x05\x07^\n\x07\x07\x07`\n\x07\f\x07\x0E\x07c\v\x07\x03" +
        "\b\x03\b\x03\t\x03\t\x03\t\x07\tj\n\t\f\t\x0E\tm\v\t\x03\t\x05\tp\n\t" +
        "\x03\n\x03\n\x03\v\x03\v\x03\v\x05\vw\n\v\x03\v\x03\v\x03\f\x03\f\x03" +
        "\r\x03\r\x03\r\x05\r\x80\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
        "\x0F\x07\x0F\x88\n\x0F\f\x0F\x0E\x0F\x8B\v\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x05\x10\x92\n\x10\x05\x10\x94\n\x10\x03\x11\x03\x11\x03" +
        "\x11\x02\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\x02\x03\x04\x02\x04\x04\t\t\x02\x9D\x02\"\x03\x02\x02\x02\x04%\x03\x02" +
        "\x02\x02\x06>\x03\x02\x02\x02\bA\x03\x02\x02\x02\nQ\x03\x02\x02\x02\f" +
        "T\x03\x02\x02\x02\x0Ed\x03\x02\x02\x02\x10f\x03\x02\x02\x02\x12q\x03\x02" +
        "\x02\x02\x14s\x03\x02\x02\x02\x16z\x03\x02\x02\x02\x18|\x03\x02\x02\x02" +
        "\x1A\x81\x03\x02\x02\x02\x1C\x84\x03\x02\x02\x02\x1E\x8C\x03\x02\x02\x02" +
        " \x95\x03\x02\x02\x02\"#\x05\x04\x03\x02#$\x07\x02\x02\x03$\x03\x03\x02" +
        "\x02\x02%&\x05\x06\x04\x02&(\x07\x03\x02\x02\')\x05\x14\v\x02(\'\x03\x02" +
        "\x02\x02()\x03\x02\x02\x02)*\x03\x02\x02\x02*-\x05\b\x05\x02+,\x07\x04" +
        "\x02\x02,.\x05\x0E\b\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.3\x03\x02" +
        "\x02\x02/1\x07\x05\x02\x0202\x05\x10\t\x0210\x03\x02\x02\x0212\x03\x02" +
        "\x02\x0224\x03\x02\x02\x023/\x03\x02\x02\x0234\x03\x02\x02\x0246\x03\x02" +
        "\x02\x0257\x05\x1A\x0E\x0265\x03\x02\x02\x0267\x03\x02\x02\x0279\x03\x02" +
        "\x02\x028:\x05\x18\r\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:<\x03\x02" +
        "\x02\x02;=\x07\x12\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02=\x05\x03" +
        "\x02\x02\x02>?\x05 \x11\x02?\x07\x03\x02\x02\x02@B\x07\x05\x02\x02A@\x03" +
        "\x02\x02\x02AB\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x05\n\x06\x02D\t\x03" +
        "\x02\x02\x02EJ\x05 \x11\x02FG\x07\x06\x02\x02GI\x05 \x11\x02HF\x03\x02" +
        "\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KR\x03\x02" +
        "\x02\x02LJ\x03\x02\x02\x02MN\x07\x07\x02\x02NO\x05\f\x07\x02OP\x07\b\x02" +
        "\x02PR\x03\x02\x02\x02QE\x03\x02\x02\x02QM\x03\x02\x02\x02R\v\x03\x02" +
        "\x02\x02SU\x07\t\x02\x02TS\x03\x02\x02\x02TU\x03\x02\x02\x02UX\x03\x02" +
        "\x02\x02VY\x05 \x11\x02WY\x07\x0F\x02\x02XV\x03\x02\x02\x02XW\x03\x02" +
        "\x02\x02Ya\x03\x02\x02\x02Z]\t\x02\x02\x02[^\x05 \x11\x02\\^\x07\x0F\x02" +
        "\x02][\x03\x02\x02\x02]\\\x03\x02\x02\x02^`\x03\x02\x02\x02_Z\x03\x02" +
        "\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\r\x03" +
        "\x02\x02\x02ca\x03\x02\x02\x02de\x07\x0F\x02\x02e\x0F\x03\x02\x02\x02" +
        "fk\x05 \x11\x02gh\x07\x05\x02\x02hj\x05 \x11\x02ig\x03\x02\x02\x02jm\x03" +
        "\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03" +
        "\x02\x02\x02np\x07\x05\x02\x02on\x03\x02\x02\x02op\x03\x02\x02\x02p\x11" +
        "\x03\x02\x02\x02qr\x05 \x11\x02r\x13\x03\x02\x02\x02sv\x05\x12\n\x02t" +
        "u\x07\x04\x02\x02uw\x05\x16\f\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02" +
        "wx\x03\x02\x02\x02xy\x07\n\x02\x02y\x15\x03\x02\x02\x02z{\x05 \x11\x02" +
        "{\x17\x03\x02\x02\x02|\x7F\x07\v\x02\x02}\x80\x05 \x11\x02~\x80\x07\x0F" +
        "\x02\x02\x7F}\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\x19\x03\x02\x02" +
        "\x02\x81\x82\x07\f\x02\x02\x82\x83\x05\x1C\x0F\x02\x83\x1B\x03\x02\x02" +
        "\x02\x84\x89\x05\x1E\x10\x02\x85\x86\x07\r\x02\x02\x86\x88\x05\x1E\x10" +
        "\x02\x87\x85\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02" +
        "\x02\x89\x8A\x03\x02\x02\x02\x8A\x1D\x03\x02\x02\x02\x8B\x89\x03\x02\x02" +
        "\x02\x8C\x93\x05 \x11\x02\x8D\x91\x07\x0E\x02\x02\x8E\x92\x05 \x11\x02" +
        "\x8F\x92\x07\x0F\x02\x02\x90\x92\x07\x10\x02\x02\x91\x8E\x03\x02\x02\x02" +
        "\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92\x94\x03\x02\x02\x02" +
        "\x93\x8D\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x1F\x03\x02\x02\x02" +
        "\x95\x96\x07\x11\x02\x02\x96!\x03\x02\x02\x02\x17(-1369<AJQTX]akov\x7F" +
        "\x89\x91\x93";
    return urlParser;
}(Parser_1.Parser));
exports.urlParser = urlParser;
var UrlContext = /** @class */ (function (_super) {
    __extends(UrlContext, _super);
    function UrlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UrlContext.prototype.uri = function () {
        return this.getRuleContext(0, UriContext);
    };
    UrlContext.prototype.EOF = function () { return this.getToken(urlParser.EOF, 0); };
    Object.defineProperty(UrlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_url; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UrlContext.prototype.enterRule = function (listener) {
        if (listener.enterUrl) {
            listener.enterUrl(this);
        }
    };
    // @Override
    UrlContext.prototype.exitRule = function (listener) {
        if (listener.exitUrl) {
            listener.exitUrl(this);
        }
    };
    // @Override
    UrlContext.prototype.accept = function (visitor) {
        if (visitor.visitUrl) {
            return visitor.visitUrl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UrlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UrlContext = UrlContext;
var UriContext = /** @class */ (function (_super) {
    __extends(UriContext, _super);
    function UriContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UriContext.prototype.scheme = function () {
        return this.getRuleContext(0, SchemeContext);
    };
    UriContext.prototype.host = function () {
        return this.getRuleContext(0, HostContext);
    };
    UriContext.prototype.login = function () {
        return this.tryGetRuleContext(0, LoginContext);
    };
    UriContext.prototype.port = function () {
        return this.tryGetRuleContext(0, PortContext);
    };
    UriContext.prototype.query = function () {
        return this.tryGetRuleContext(0, QueryContext);
    };
    UriContext.prototype.frag = function () {
        return this.tryGetRuleContext(0, FragContext);
    };
    UriContext.prototype.WS = function () { return this.tryGetToken(urlParser.WS, 0); };
    UriContext.prototype.path = function () {
        return this.tryGetRuleContext(0, PathContext);
    };
    Object.defineProperty(UriContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_uri; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UriContext.prototype.enterRule = function (listener) {
        if (listener.enterUri) {
            listener.enterUri(this);
        }
    };
    // @Override
    UriContext.prototype.exitRule = function (listener) {
        if (listener.exitUri) {
            listener.exitUri(this);
        }
    };
    // @Override
    UriContext.prototype.accept = function (visitor) {
        if (visitor.visitUri) {
            return visitor.visitUri(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UriContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UriContext = UriContext;
var SchemeContext = /** @class */ (function (_super) {
    __extends(SchemeContext, _super);
    function SchemeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SchemeContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(SchemeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_scheme; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SchemeContext.prototype.enterRule = function (listener) {
        if (listener.enterScheme) {
            listener.enterScheme(this);
        }
    };
    // @Override
    SchemeContext.prototype.exitRule = function (listener) {
        if (listener.exitScheme) {
            listener.exitScheme(this);
        }
    };
    // @Override
    SchemeContext.prototype.accept = function (visitor) {
        if (visitor.visitScheme) {
            return visitor.visitScheme(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SchemeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SchemeContext = SchemeContext;
var HostContext = /** @class */ (function (_super) {
    __extends(HostContext, _super);
    function HostContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HostContext.prototype.hostname = function () {
        return this.getRuleContext(0, HostnameContext);
    };
    Object.defineProperty(HostContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_host; },
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
var HostnameContext = /** @class */ (function (_super) {
    __extends(HostnameContext, _super);
    function HostnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(HostnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_hostname; },
        enumerable: true,
        configurable: true
    });
    HostnameContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return HostnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HostnameContext = HostnameContext;
var DomainNameOrIPv4HostContext = /** @class */ (function (_super) {
    __extends(DomainNameOrIPv4HostContext, _super);
    function DomainNameOrIPv4HostContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DomainNameOrIPv4HostContext.prototype.string = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }
        else {
            return this.getRuleContext(i, StringContext);
        }
    };
    // @Override
    DomainNameOrIPv4HostContext.prototype.enterRule = function (listener) {
        if (listener.enterDomainNameOrIPv4Host) {
            listener.enterDomainNameOrIPv4Host(this);
        }
    };
    // @Override
    DomainNameOrIPv4HostContext.prototype.exitRule = function (listener) {
        if (listener.exitDomainNameOrIPv4Host) {
            listener.exitDomainNameOrIPv4Host(this);
        }
    };
    // @Override
    DomainNameOrIPv4HostContext.prototype.accept = function (visitor) {
        if (visitor.visitDomainNameOrIPv4Host) {
            return visitor.visitDomainNameOrIPv4Host(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DomainNameOrIPv4HostContext;
}(HostnameContext));
exports.DomainNameOrIPv4HostContext = DomainNameOrIPv4HostContext;
var IPv6HostContext = /** @class */ (function (_super) {
    __extends(IPv6HostContext, _super);
    function IPv6HostContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IPv6HostContext.prototype.v6host = function () {
        return this.getRuleContext(0, V6hostContext);
    };
    // @Override
    IPv6HostContext.prototype.enterRule = function (listener) {
        if (listener.enterIPv6Host) {
            listener.enterIPv6Host(this);
        }
    };
    // @Override
    IPv6HostContext.prototype.exitRule = function (listener) {
        if (listener.exitIPv6Host) {
            listener.exitIPv6Host(this);
        }
    };
    // @Override
    IPv6HostContext.prototype.accept = function (visitor) {
        if (visitor.visitIPv6Host) {
            return visitor.visitIPv6Host(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IPv6HostContext;
}(HostnameContext));
exports.IPv6HostContext = IPv6HostContext;
var V6hostContext = /** @class */ (function (_super) {
    __extends(V6hostContext, _super);
    function V6hostContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    V6hostContext.prototype.string = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }
        else {
            return this.getRuleContext(i, StringContext);
        }
    };
    V6hostContext.prototype.DIGITS = function (i) {
        if (i === undefined) {
            return this.getTokens(urlParser.DIGITS);
        }
        else {
            return this.getToken(urlParser.DIGITS, i);
        }
    };
    Object.defineProperty(V6hostContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_v6host; },
        enumerable: true,
        configurable: true
    });
    // @Override
    V6hostContext.prototype.enterRule = function (listener) {
        if (listener.enterV6host) {
            listener.enterV6host(this);
        }
    };
    // @Override
    V6hostContext.prototype.exitRule = function (listener) {
        if (listener.exitV6host) {
            listener.exitV6host(this);
        }
    };
    // @Override
    V6hostContext.prototype.accept = function (visitor) {
        if (visitor.visitV6host) {
            return visitor.visitV6host(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return V6hostContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.V6hostContext = V6hostContext;
var PortContext = /** @class */ (function (_super) {
    __extends(PortContext, _super);
    function PortContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PortContext.prototype.DIGITS = function () { return this.getToken(urlParser.DIGITS, 0); };
    Object.defineProperty(PortContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_port; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PortContext.prototype.enterRule = function (listener) {
        if (listener.enterPort) {
            listener.enterPort(this);
        }
    };
    // @Override
    PortContext.prototype.exitRule = function (listener) {
        if (listener.exitPort) {
            listener.exitPort(this);
        }
    };
    // @Override
    PortContext.prototype.accept = function (visitor) {
        if (visitor.visitPort) {
            return visitor.visitPort(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PortContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PortContext = PortContext;
var PathContext = /** @class */ (function (_super) {
    __extends(PathContext, _super);
    function PathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PathContext.prototype.string = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }
        else {
            return this.getRuleContext(i, StringContext);
        }
    };
    Object.defineProperty(PathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_path; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PathContext.prototype.enterRule = function (listener) {
        if (listener.enterPath) {
            listener.enterPath(this);
        }
    };
    // @Override
    PathContext.prototype.exitRule = function (listener) {
        if (listener.exitPath) {
            listener.exitPath(this);
        }
    };
    // @Override
    PathContext.prototype.accept = function (visitor) {
        if (visitor.visitPath) {
            return visitor.visitPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PathContext = PathContext;
var UserContext = /** @class */ (function (_super) {
    __extends(UserContext, _super);
    function UserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(UserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_user; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UserContext.prototype.enterRule = function (listener) {
        if (listener.enterUser) {
            listener.enterUser(this);
        }
    };
    // @Override
    UserContext.prototype.exitRule = function (listener) {
        if (listener.exitUser) {
            listener.exitUser(this);
        }
    };
    // @Override
    UserContext.prototype.accept = function (visitor) {
        if (visitor.visitUser) {
            return visitor.visitUser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UserContext = UserContext;
var LoginContext = /** @class */ (function (_super) {
    __extends(LoginContext, _super);
    function LoginContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LoginContext.prototype.user = function () {
        return this.getRuleContext(0, UserContext);
    };
    LoginContext.prototype.password = function () {
        return this.tryGetRuleContext(0, PasswordContext);
    };
    Object.defineProperty(LoginContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_login; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LoginContext.prototype.enterRule = function (listener) {
        if (listener.enterLogin) {
            listener.enterLogin(this);
        }
    };
    // @Override
    LoginContext.prototype.exitRule = function (listener) {
        if (listener.exitLogin) {
            listener.exitLogin(this);
        }
    };
    // @Override
    LoginContext.prototype.accept = function (visitor) {
        if (visitor.visitLogin) {
            return visitor.visitLogin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LoginContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LoginContext = LoginContext;
var PasswordContext = /** @class */ (function (_super) {
    __extends(PasswordContext, _super);
    function PasswordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PasswordContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    Object.defineProperty(PasswordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_password; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PasswordContext.prototype.enterRule = function (listener) {
        if (listener.enterPassword) {
            listener.enterPassword(this);
        }
    };
    // @Override
    PasswordContext.prototype.exitRule = function (listener) {
        if (listener.exitPassword) {
            listener.exitPassword(this);
        }
    };
    // @Override
    PasswordContext.prototype.accept = function (visitor) {
        if (visitor.visitPassword) {
            return visitor.visitPassword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PasswordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PasswordContext = PasswordContext;
var FragContext = /** @class */ (function (_super) {
    __extends(FragContext, _super);
    function FragContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FragContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    FragContext.prototype.DIGITS = function () { return this.tryGetToken(urlParser.DIGITS, 0); };
    Object.defineProperty(FragContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_frag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FragContext.prototype.enterRule = function (listener) {
        if (listener.enterFrag) {
            listener.enterFrag(this);
        }
    };
    // @Override
    FragContext.prototype.exitRule = function (listener) {
        if (listener.exitFrag) {
            listener.exitFrag(this);
        }
    };
    // @Override
    FragContext.prototype.accept = function (visitor) {
        if (visitor.visitFrag) {
            return visitor.visitFrag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FragContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FragContext = FragContext;
var QueryContext = /** @class */ (function (_super) {
    __extends(QueryContext, _super);
    function QueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QueryContext.prototype.search = function () {
        return this.getRuleContext(0, SearchContext);
    };
    Object.defineProperty(QueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_query; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QueryContext.prototype.enterRule = function (listener) {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    };
    // @Override
    QueryContext.prototype.exitRule = function (listener) {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    };
    // @Override
    QueryContext.prototype.accept = function (visitor) {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QueryContext = QueryContext;
var SearchContext = /** @class */ (function (_super) {
    __extends(SearchContext, _super);
    function SearchContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SearchContext.prototype.searchparameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SearchparameterContext);
        }
        else {
            return this.getRuleContext(i, SearchparameterContext);
        }
    };
    Object.defineProperty(SearchContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_search; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SearchContext.prototype.enterRule = function (listener) {
        if (listener.enterSearch) {
            listener.enterSearch(this);
        }
    };
    // @Override
    SearchContext.prototype.exitRule = function (listener) {
        if (listener.exitSearch) {
            listener.exitSearch(this);
        }
    };
    // @Override
    SearchContext.prototype.accept = function (visitor) {
        if (visitor.visitSearch) {
            return visitor.visitSearch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SearchContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SearchContext = SearchContext;
var SearchparameterContext = /** @class */ (function (_super) {
    __extends(SearchparameterContext, _super);
    function SearchparameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SearchparameterContext.prototype.string = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }
        else {
            return this.getRuleContext(i, StringContext);
        }
    };
    SearchparameterContext.prototype.DIGITS = function () { return this.tryGetToken(urlParser.DIGITS, 0); };
    SearchparameterContext.prototype.HEX = function () { return this.tryGetToken(urlParser.HEX, 0); };
    Object.defineProperty(SearchparameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_searchparameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SearchparameterContext.prototype.enterRule = function (listener) {
        if (listener.enterSearchparameter) {
            listener.enterSearchparameter(this);
        }
    };
    // @Override
    SearchparameterContext.prototype.exitRule = function (listener) {
        if (listener.exitSearchparameter) {
            listener.exitSearchparameter(this);
        }
    };
    // @Override
    SearchparameterContext.prototype.accept = function (visitor) {
        if (visitor.visitSearchparameter) {
            return visitor.visitSearchparameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SearchparameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SearchparameterContext = SearchparameterContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(urlParser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return urlParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
