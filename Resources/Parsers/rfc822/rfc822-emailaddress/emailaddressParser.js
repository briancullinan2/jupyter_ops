"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-emailaddress/emailaddress.g4 by ANTLR 4.7.3-SNAPSHOT
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
var emailaddressParser = /** @class */ (function (_super) {
    __extends(emailaddressParser, _super);
    function emailaddressParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(emailaddressParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(emailaddressParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return emailaddressParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "emailaddress.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressParser.prototype, "ruleNames", {
        // @Override
        get: function () { return emailaddressParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(emailaddressParser.prototype, "serializedATN", {
        // @Override
        get: function () { return emailaddressParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    emailaddressParser.prototype.emailaddress = function () {
        var _localctx = new EmailaddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, emailaddressParser.RULE_emailaddress);
        try {
            this.state = 42;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 40;
                        this.mailbox();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 41;
                        this.group();
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
    emailaddressParser.prototype.group = function () {
        var _localctx = new GroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, emailaddressParser.RULE_group);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this.phrase();
                this.state = 45;
                this.match(emailaddressParser.T__0);
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === emailaddressParser.T__9 || _la === emailaddressParser.CHAR) {
                    {
                        {
                            this.state = 46;
                            this.mailbox();
                        }
                    }
                    this.state = 51;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 52;
                this.match(emailaddressParser.T__1);
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
    emailaddressParser.prototype.mailbox = function () {
        var _localctx = new MailboxContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, emailaddressParser.RULE_mailbox);
        try {
            this.state = 58;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 54;
                        this.addrspec();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 55;
                            this.phrase();
                            this.state = 56;
                            this.routeaddr();
                        }
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
    emailaddressParser.prototype.routeaddr = function () {
        var _localctx = new RouteaddrContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, emailaddressParser.RULE_routeaddr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.match(emailaddressParser.T__2);
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === emailaddressParser.T__4) {
                    {
                        {
                            this.state = 61;
                            this.route();
                        }
                    }
                    this.state = 66;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 67;
                this.addrspec();
                this.state = 68;
                this.match(emailaddressParser.T__3);
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
    emailaddressParser.prototype.route = function () {
        var _localctx = new RouteContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, emailaddressParser.RULE_route);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.match(emailaddressParser.T__4);
                this.state = 71;
                this.domain();
                this.state = 72;
                this.match(emailaddressParser.T__0);
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
    emailaddressParser.prototype.addrspec = function () {
        var _localctx = new AddrspecContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, emailaddressParser.RULE_addrspec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.localpart();
                this.state = 75;
                this.match(emailaddressParser.T__4);
                this.state = 76;
                this.domain();
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
    emailaddressParser.prototype.localpart = function () {
        var _localctx = new LocalpartContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, emailaddressParser.RULE_localpart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this.word();
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === emailaddressParser.T__5) {
                    {
                        {
                            this.state = 79;
                            this.match(emailaddressParser.T__5);
                            this.state = 80;
                            this.word();
                        }
                    }
                    this.state = 85;
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
    emailaddressParser.prototype.domain = function () {
        var _localctx = new DomainContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, emailaddressParser.RULE_domain);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 86;
                this.subdomain();
                this.state = 91;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === emailaddressParser.T__5) {
                    {
                        {
                            this.state = 87;
                            this.match(emailaddressParser.T__5);
                            this.state = 88;
                            this.subdomain();
                        }
                    }
                    this.state = 93;
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
    emailaddressParser.prototype.subdomain = function () {
        var _localctx = new SubdomainContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, emailaddressParser.RULE_subdomain);
        try {
            this.state = 96;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case emailaddressParser.CHAR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 94;
                        this.domainref();
                    }
                    break;
                case emailaddressParser.T__7:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 95;
                        this.domainliteral();
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
    emailaddressParser.prototype.domainref = function () {
        var _localctx = new DomainrefContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, emailaddressParser.RULE_domainref);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.atom();
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
    emailaddressParser.prototype.phrase = function () {
        var _localctx = new PhraseContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, emailaddressParser.RULE_phrase);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 100;
                            this.word();
                        }
                    }
                    this.state = 103;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === emailaddressParser.T__9 || _la === emailaddressParser.CHAR);
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
    emailaddressParser.prototype.word = function () {
        var _localctx = new WordContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, emailaddressParser.RULE_word);
        try {
            this.state = 107;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case emailaddressParser.CHAR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 105;
                        this.atom();
                    }
                    break;
                case emailaddressParser.T__9:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 106;
                        this.quotedstring();
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
    emailaddressParser.prototype.lwspchar = function () {
        var _localctx = new LwspcharContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, emailaddressParser.RULE_lwspchar);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                _la = this._input.LA(1);
                if (!(_la === emailaddressParser.SPACE || _la === emailaddressParser.HTAB)) {
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
    emailaddressParser.prototype.lwsp = function () {
        var _localctx = new LwspContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, emailaddressParser.RULE_lwsp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 112;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === emailaddressParser.CRLF) {
                                {
                                    this.state = 111;
                                    this.match(emailaddressParser.CRLF);
                                }
                            }
                            this.state = 114;
                            this.lwspchar();
                        }
                    }
                    this.state = 117;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << emailaddressParser.SPACE) | (1 << emailaddressParser.HTAB) | (1 << emailaddressParser.CRLF))) !== 0));
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
    emailaddressParser.prototype.delimeters = function () {
        var _localctx = new DelimetersContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, emailaddressParser.RULE_delimeters);
        try {
            this.state = 122;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case emailaddressParser.SPECIALS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 119;
                        this.match(emailaddressParser.SPECIALS);
                    }
                    break;
                case emailaddressParser.SPACE:
                case emailaddressParser.HTAB:
                case emailaddressParser.CRLF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 120;
                        this.lwsp();
                    }
                    break;
                case emailaddressParser.T__10:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 121;
                        this.comment();
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
    emailaddressParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, emailaddressParser.RULE_atom);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 124;
                                    this.match(emailaddressParser.CHAR);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 127;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    emailaddressParser.prototype.quotedpair = function () {
        var _localctx = new QuotedpairContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, emailaddressParser.RULE_quotedpair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this.match(emailaddressParser.T__6);
                this.state = 130;
                this.match(emailaddressParser.CHAR);
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
    emailaddressParser.prototype.domainliteral = function () {
        var _localctx = new DomainliteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, emailaddressParser.RULE_domainliteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.match(emailaddressParser.T__7);
                this.state = 137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === emailaddressParser.T__6 || _la === emailaddressParser.DTEXT) {
                    {
                        this.state = 135;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case emailaddressParser.DTEXT:
                                {
                                    this.state = 133;
                                    this.match(emailaddressParser.DTEXT);
                                }
                                break;
                            case emailaddressParser.T__6:
                                {
                                    this.state = 134;
                                    this.quotedpair();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 139;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 140;
                this.match(emailaddressParser.T__8);
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
    emailaddressParser.prototype.quotedstring = function () {
        var _localctx = new QuotedstringContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, emailaddressParser.RULE_quotedstring);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 142;
                this.match(emailaddressParser.T__9);
                this.state = 147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === emailaddressParser.T__6 || _la === emailaddressParser.QTEXT) {
                    {
                        this.state = 145;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case emailaddressParser.QTEXT:
                                {
                                    this.state = 143;
                                    this.match(emailaddressParser.QTEXT);
                                }
                                break;
                            case emailaddressParser.T__6:
                                {
                                    this.state = 144;
                                    this.quotedpair();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 149;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 150;
                this.match(emailaddressParser.T__9);
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
    emailaddressParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, emailaddressParser.RULE_comment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.match(emailaddressParser.T__10);
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << emailaddressParser.T__6) | (1 << emailaddressParser.T__10) | (1 << emailaddressParser.CTEXT))) !== 0)) {
                    {
                        this.state = 156;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case emailaddressParser.CTEXT:
                                {
                                    this.state = 153;
                                    this.match(emailaddressParser.CTEXT);
                                }
                                break;
                            case emailaddressParser.T__6:
                                {
                                    this.state = 154;
                                    this.quotedpair();
                                }
                                break;
                            case emailaddressParser.T__10:
                                {
                                    this.state = 155;
                                    this.comment();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 160;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 161;
                this.match(emailaddressParser.T__11);
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
    Object.defineProperty(emailaddressParser, "_ATN", {
        get: function () {
            if (!emailaddressParser.__ATN) {
                emailaddressParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(emailaddressParser._serializedATN));
            }
            return emailaddressParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    emailaddressParser.T__0 = 1;
    emailaddressParser.T__1 = 2;
    emailaddressParser.T__2 = 3;
    emailaddressParser.T__3 = 4;
    emailaddressParser.T__4 = 5;
    emailaddressParser.T__5 = 6;
    emailaddressParser.T__6 = 7;
    emailaddressParser.T__7 = 8;
    emailaddressParser.T__8 = 9;
    emailaddressParser.T__9 = 10;
    emailaddressParser.T__10 = 11;
    emailaddressParser.T__11 = 12;
    emailaddressParser.CHAR = 13;
    emailaddressParser.ALPHA = 14;
    emailaddressParser.DIGIT = 15;
    emailaddressParser.CTL = 16;
    emailaddressParser.CR = 17;
    emailaddressParser.LF = 18;
    emailaddressParser.SPACE = 19;
    emailaddressParser.HTAB = 20;
    emailaddressParser.CRLF = 21;
    emailaddressParser.SPECIALS = 22;
    emailaddressParser.QUOTE = 23;
    emailaddressParser.QTEXT = 24;
    emailaddressParser.DTEXT = 25;
    emailaddressParser.CTEXT = 26;
    emailaddressParser.RULE_emailaddress = 0;
    emailaddressParser.RULE_group = 1;
    emailaddressParser.RULE_mailbox = 2;
    emailaddressParser.RULE_routeaddr = 3;
    emailaddressParser.RULE_route = 4;
    emailaddressParser.RULE_addrspec = 5;
    emailaddressParser.RULE_localpart = 6;
    emailaddressParser.RULE_domain = 7;
    emailaddressParser.RULE_subdomain = 8;
    emailaddressParser.RULE_domainref = 9;
    emailaddressParser.RULE_phrase = 10;
    emailaddressParser.RULE_word = 11;
    emailaddressParser.RULE_lwspchar = 12;
    emailaddressParser.RULE_lwsp = 13;
    emailaddressParser.RULE_delimeters = 14;
    emailaddressParser.RULE_atom = 15;
    emailaddressParser.RULE_quotedpair = 16;
    emailaddressParser.RULE_domainliteral = 17;
    emailaddressParser.RULE_quotedstring = 18;
    emailaddressParser.RULE_comment = 19;
    // tslint:disable:no-trailing-whitespace
    emailaddressParser.ruleNames = [
        "emailaddress", "group", "mailbox", "routeaddr", "route", "addrspec",
        "localpart", "domain", "subdomain", "domainref", "phrase", "word", "lwspchar",
        "lwsp", "delimeters", "atom", "quotedpair", "domainliteral", "quotedstring",
        "comment",
    ];
    emailaddressParser._LITERAL_NAMES = [
        undefined, "':'", "';'", "'<'", "'>'", "'@'", "'.'", "'\\'", "'['", "']'",
        "'''", "'('", "')'", undefined, undefined, undefined, undefined, "'\n'",
        "'\r'", "' '", "'\t'", "'\rn'", undefined, "'\"'",
    ];
    emailaddressParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "CHAR",
        "ALPHA", "DIGIT", "CTL", "CR", "LF", "SPACE", "HTAB", "CRLF", "SPECIALS",
        "QUOTE", "QTEXT", "DTEXT", "CTEXT",
    ];
    emailaddressParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(emailaddressParser._LITERAL_NAMES, emailaddressParser._SYMBOLIC_NAMES, []);
    emailaddressParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\xA6\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x05\x02-\n\x02" +
        "\x03\x03\x03\x03\x03\x03\x07\x032\n\x03\f\x03\x0E\x035\v\x03\x03\x03\x03" +
        "\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x05\x03\x05\x07" +
        "\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07" +
        "\bT\n\b\f\b\x0E\bW\v\b\x03\t\x03\t\x03\t\x07\t\\\n\t\f\t\x0E\t_\v\t\x03" +
        "\n\x03\n\x05\nc\n\n\x03\v\x03\v\x03\f\x06\fh\n\f\r\f\x0E\fi\x03\r\x03" +
        "\r\x05\rn\n\r\x03\x0E\x03\x0E\x03\x0F\x05\x0Fs\n\x0F\x03\x0F\x06\x0Fv" +
        "\n\x0F\r\x0F\x0E\x0Fw\x03\x10\x03\x10\x03\x10\x05\x10}\n\x10\x03\x11\x06" +
        "\x11\x80\n\x11\r\x11\x0E\x11\x81\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
        "\x03\x13\x07\x13\x8A\n\x13\f\x13\x0E\x13\x8D\v\x13\x03\x13\x03\x13\x03" +
        "\x14\x03\x14\x03\x14\x07\x14\x94\n\x14\f\x14\x0E\x14\x97\v\x14\x03\x14" +
        "\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\x9F\n\x15\f\x15\x0E\x15" +
        "\xA2\v\x15\x03\x15\x03\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x03\x03\x02\x15" +
        "\x16\x02\xA6\x02,\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x06<\x03\x02\x02" +
        "\x02\b>\x03\x02\x02\x02\nH\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EP\x03" +
        "\x02\x02\x02\x10X\x03\x02\x02\x02\x12b\x03\x02\x02\x02\x14d\x03\x02\x02" +
        "\x02\x16g\x03\x02\x02\x02\x18m\x03\x02\x02\x02\x1Ao\x03\x02\x02\x02\x1C" +
        "u\x03\x02\x02\x02\x1E|\x03\x02\x02\x02 \x7F\x03\x02\x02\x02\"\x83\x03" +
        "\x02\x02\x02$\x86\x03\x02\x02\x02&\x90\x03\x02\x02\x02(\x9A\x03\x02\x02" +
        "\x02*-\x05\x06\x04\x02+-\x05\x04\x03\x02,*\x03\x02\x02\x02,+\x03\x02\x02" +
        "\x02-\x03\x03\x02\x02\x02./\x05\x16\f\x02/3\x07\x03\x02\x0202\x05\x06" +
        "\x04\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02" +
        "\x02\x0246\x03\x02\x02\x0253\x03\x02\x02\x0267\x07\x04\x02\x027\x05\x03" +
        "\x02\x02\x028=\x05\f\x07\x029:\x05\x16\f\x02:;\x05\b\x05\x02;=\x03\x02" +
        "\x02\x02<8\x03\x02\x02\x02<9\x03\x02\x02\x02=\x07\x03\x02\x02\x02>B\x07" +
        "\x05\x02\x02?A\x05\n\x06\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03" +
        "\x02\x02\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x05" +
        "\f\x07\x02FG\x07\x06\x02\x02G\t\x03\x02\x02\x02HI\x07\x07\x02\x02IJ\x05" +
        "\x10\t\x02JK\x07\x03\x02\x02K\v\x03\x02\x02\x02LM\x05\x0E\b\x02MN\x07" +
        "\x07\x02\x02NO\x05\x10\t\x02O\r\x03\x02\x02\x02PU\x05\x18\r\x02QR\x07" +
        "\b\x02\x02RT\x05\x18\r\x02SQ\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02" +
        "\x02\x02UV\x03\x02\x02\x02V\x0F\x03\x02\x02\x02WU\x03\x02\x02\x02X]\x05" +
        "\x12\n\x02YZ\x07\b\x02\x02Z\\\x05\x12\n\x02[Y\x03\x02\x02\x02\\_\x03\x02" +
        "\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\x11\x03\x02\x02\x02_]\x03" +
        "\x02\x02\x02`c\x05\x14\v\x02ac\x05$\x13\x02b`\x03\x02\x02\x02ba\x03\x02" +
        "\x02\x02c\x13\x03\x02\x02\x02de\x05 \x11\x02e\x15\x03\x02\x02\x02fh\x05" +
        "\x18\r\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03" +
        "\x02\x02\x02j\x17\x03\x02\x02\x02kn\x05 \x11\x02ln\x05&\x14\x02mk\x03" +
        "\x02\x02\x02ml\x03\x02\x02\x02n\x19\x03\x02\x02\x02op\t\x02\x02\x02p\x1B" +
        "\x03\x02\x02\x02qs\x07\x17\x02\x02rq\x03\x02\x02\x02rs\x03\x02\x02\x02" +
        "st\x03\x02\x02\x02tv\x05\x1A\x0E\x02ur\x03\x02\x02\x02vw\x03\x02\x02\x02" +
        "wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\x1D\x03\x02\x02\x02y}\x07\x18\x02" +
        "\x02z}\x05\x1C\x0F\x02{}\x05(\x15\x02|y\x03\x02\x02\x02|z\x03\x02\x02" +
        "\x02|{\x03\x02\x02\x02}\x1F\x03\x02\x02\x02~\x80\x07\x0F\x02\x02\x7F~" +
        "\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82" +
        "\x03\x02\x02\x02\x82!\x03\x02\x02\x02\x83\x84\x07\t\x02\x02\x84\x85\x07" +
        "\x0F\x02\x02\x85#\x03\x02\x02\x02\x86\x8B\x07\n\x02\x02\x87\x8A\x07\x1B" +
        "\x02\x02\x88\x8A\x05\"\x12\x02\x89\x87\x03\x02\x02\x02\x89\x88\x03\x02" +
        "\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02" +
        "\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x8F\x07\v" +
        "\x02\x02\x8F%\x03\x02\x02\x02\x90\x95\x07\f\x02\x02\x91\x94\x07\x1A\x02" +
        "\x02\x92\x94\x05\"\x12\x02\x93\x91\x03\x02\x02\x02\x93\x92\x03\x02\x02" +
        "\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02" +
        "\x02\x96\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99\x07\f\x02" +
        "\x02\x99\'\x03\x02\x02\x02\x9A\xA0\x07\r\x02\x02\x9B\x9F\x07\x1C\x02\x02" +
        "\x9C\x9F\x05\"\x12\x02\x9D\x9F\x05(\x15\x02\x9E\x9B\x03\x02\x02\x02\x9E" +
        "\x9C\x03\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0" +
        "\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2" +
        "\xA0\x03\x02\x02\x02\xA3\xA4\x07\x0E\x02\x02\xA4)\x03\x02\x02\x02\x15" +
        ",3<BU]bimrw|\x81\x89\x8B\x93\x95\x9E\xA0";
    return emailaddressParser;
}(Parser_1.Parser));
exports.emailaddressParser = emailaddressParser;
var EmailaddressContext = /** @class */ (function (_super) {
    __extends(EmailaddressContext, _super);
    function EmailaddressContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmailaddressContext.prototype.mailbox = function () {
        return this.tryGetRuleContext(0, MailboxContext);
    };
    EmailaddressContext.prototype.group = function () {
        return this.tryGetRuleContext(0, GroupContext);
    };
    Object.defineProperty(EmailaddressContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_emailaddress; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmailaddressContext.prototype.enterRule = function (listener) {
        if (listener.enterEmailaddress) {
            listener.enterEmailaddress(this);
        }
    };
    // @Override
    EmailaddressContext.prototype.exitRule = function (listener) {
        if (listener.exitEmailaddress) {
            listener.exitEmailaddress(this);
        }
    };
    // @Override
    EmailaddressContext.prototype.accept = function (visitor) {
        if (visitor.visitEmailaddress) {
            return visitor.visitEmailaddress(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmailaddressContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmailaddressContext = EmailaddressContext;
var GroupContext = /** @class */ (function (_super) {
    __extends(GroupContext, _super);
    function GroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupContext.prototype.phrase = function () {
        return this.getRuleContext(0, PhraseContext);
    };
    GroupContext.prototype.mailbox = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MailboxContext);
        }
        else {
            return this.getRuleContext(i, MailboxContext);
        }
    };
    Object.defineProperty(GroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_group; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GroupContext.prototype.enterRule = function (listener) {
        if (listener.enterGroup) {
            listener.enterGroup(this);
        }
    };
    // @Override
    GroupContext.prototype.exitRule = function (listener) {
        if (listener.exitGroup) {
            listener.exitGroup(this);
        }
    };
    // @Override
    GroupContext.prototype.accept = function (visitor) {
        if (visitor.visitGroup) {
            return visitor.visitGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GroupContext = GroupContext;
var MailboxContext = /** @class */ (function (_super) {
    __extends(MailboxContext, _super);
    function MailboxContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MailboxContext.prototype.addrspec = function () {
        return this.tryGetRuleContext(0, AddrspecContext);
    };
    MailboxContext.prototype.phrase = function () {
        return this.tryGetRuleContext(0, PhraseContext);
    };
    MailboxContext.prototype.routeaddr = function () {
        return this.tryGetRuleContext(0, RouteaddrContext);
    };
    Object.defineProperty(MailboxContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_mailbox; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MailboxContext.prototype.enterRule = function (listener) {
        if (listener.enterMailbox) {
            listener.enterMailbox(this);
        }
    };
    // @Override
    MailboxContext.prototype.exitRule = function (listener) {
        if (listener.exitMailbox) {
            listener.exitMailbox(this);
        }
    };
    // @Override
    MailboxContext.prototype.accept = function (visitor) {
        if (visitor.visitMailbox) {
            return visitor.visitMailbox(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MailboxContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MailboxContext = MailboxContext;
var RouteaddrContext = /** @class */ (function (_super) {
    __extends(RouteaddrContext, _super);
    function RouteaddrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RouteaddrContext.prototype.addrspec = function () {
        return this.getRuleContext(0, AddrspecContext);
    };
    RouteaddrContext.prototype.route = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RouteContext);
        }
        else {
            return this.getRuleContext(i, RouteContext);
        }
    };
    Object.defineProperty(RouteaddrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_routeaddr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RouteaddrContext.prototype.enterRule = function (listener) {
        if (listener.enterRouteaddr) {
            listener.enterRouteaddr(this);
        }
    };
    // @Override
    RouteaddrContext.prototype.exitRule = function (listener) {
        if (listener.exitRouteaddr) {
            listener.exitRouteaddr(this);
        }
    };
    // @Override
    RouteaddrContext.prototype.accept = function (visitor) {
        if (visitor.visitRouteaddr) {
            return visitor.visitRouteaddr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RouteaddrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RouteaddrContext = RouteaddrContext;
var RouteContext = /** @class */ (function (_super) {
    __extends(RouteContext, _super);
    function RouteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RouteContext.prototype.domain = function () {
        return this.getRuleContext(0, DomainContext);
    };
    Object.defineProperty(RouteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_route; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RouteContext.prototype.enterRule = function (listener) {
        if (listener.enterRoute) {
            listener.enterRoute(this);
        }
    };
    // @Override
    RouteContext.prototype.exitRule = function (listener) {
        if (listener.exitRoute) {
            listener.exitRoute(this);
        }
    };
    // @Override
    RouteContext.prototype.accept = function (visitor) {
        if (visitor.visitRoute) {
            return visitor.visitRoute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RouteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RouteContext = RouteContext;
var AddrspecContext = /** @class */ (function (_super) {
    __extends(AddrspecContext, _super);
    function AddrspecContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddrspecContext.prototype.localpart = function () {
        return this.getRuleContext(0, LocalpartContext);
    };
    AddrspecContext.prototype.domain = function () {
        return this.getRuleContext(0, DomainContext);
    };
    Object.defineProperty(AddrspecContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_addrspec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddrspecContext.prototype.enterRule = function (listener) {
        if (listener.enterAddrspec) {
            listener.enterAddrspec(this);
        }
    };
    // @Override
    AddrspecContext.prototype.exitRule = function (listener) {
        if (listener.exitAddrspec) {
            listener.exitAddrspec(this);
        }
    };
    // @Override
    AddrspecContext.prototype.accept = function (visitor) {
        if (visitor.visitAddrspec) {
            return visitor.visitAddrspec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddrspecContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddrspecContext = AddrspecContext;
var LocalpartContext = /** @class */ (function (_super) {
    __extends(LocalpartContext, _super);
    function LocalpartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocalpartContext.prototype.word = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WordContext);
        }
        else {
            return this.getRuleContext(i, WordContext);
        }
    };
    Object.defineProperty(LocalpartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_localpart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocalpartContext.prototype.enterRule = function (listener) {
        if (listener.enterLocalpart) {
            listener.enterLocalpart(this);
        }
    };
    // @Override
    LocalpartContext.prototype.exitRule = function (listener) {
        if (listener.exitLocalpart) {
            listener.exitLocalpart(this);
        }
    };
    // @Override
    LocalpartContext.prototype.accept = function (visitor) {
        if (visitor.visitLocalpart) {
            return visitor.visitLocalpart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocalpartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocalpartContext = LocalpartContext;
var DomainContext = /** @class */ (function (_super) {
    __extends(DomainContext, _super);
    function DomainContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DomainContext.prototype.subdomain = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SubdomainContext);
        }
        else {
            return this.getRuleContext(i, SubdomainContext);
        }
    };
    Object.defineProperty(DomainContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_domain; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DomainContext.prototype.enterRule = function (listener) {
        if (listener.enterDomain) {
            listener.enterDomain(this);
        }
    };
    // @Override
    DomainContext.prototype.exitRule = function (listener) {
        if (listener.exitDomain) {
            listener.exitDomain(this);
        }
    };
    // @Override
    DomainContext.prototype.accept = function (visitor) {
        if (visitor.visitDomain) {
            return visitor.visitDomain(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DomainContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DomainContext = DomainContext;
var SubdomainContext = /** @class */ (function (_super) {
    __extends(SubdomainContext, _super);
    function SubdomainContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubdomainContext.prototype.domainref = function () {
        return this.tryGetRuleContext(0, DomainrefContext);
    };
    SubdomainContext.prototype.domainliteral = function () {
        return this.tryGetRuleContext(0, DomainliteralContext);
    };
    Object.defineProperty(SubdomainContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_subdomain; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubdomainContext.prototype.enterRule = function (listener) {
        if (listener.enterSubdomain) {
            listener.enterSubdomain(this);
        }
    };
    // @Override
    SubdomainContext.prototype.exitRule = function (listener) {
        if (listener.exitSubdomain) {
            listener.exitSubdomain(this);
        }
    };
    // @Override
    SubdomainContext.prototype.accept = function (visitor) {
        if (visitor.visitSubdomain) {
            return visitor.visitSubdomain(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubdomainContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubdomainContext = SubdomainContext;
var DomainrefContext = /** @class */ (function (_super) {
    __extends(DomainrefContext, _super);
    function DomainrefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DomainrefContext.prototype.atom = function () {
        return this.getRuleContext(0, AtomContext);
    };
    Object.defineProperty(DomainrefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_domainref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DomainrefContext.prototype.enterRule = function (listener) {
        if (listener.enterDomainref) {
            listener.enterDomainref(this);
        }
    };
    // @Override
    DomainrefContext.prototype.exitRule = function (listener) {
        if (listener.exitDomainref) {
            listener.exitDomainref(this);
        }
    };
    // @Override
    DomainrefContext.prototype.accept = function (visitor) {
        if (visitor.visitDomainref) {
            return visitor.visitDomainref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DomainrefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DomainrefContext = DomainrefContext;
var PhraseContext = /** @class */ (function (_super) {
    __extends(PhraseContext, _super);
    function PhraseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PhraseContext.prototype.word = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WordContext);
        }
        else {
            return this.getRuleContext(i, WordContext);
        }
    };
    Object.defineProperty(PhraseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_phrase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PhraseContext.prototype.enterRule = function (listener) {
        if (listener.enterPhrase) {
            listener.enterPhrase(this);
        }
    };
    // @Override
    PhraseContext.prototype.exitRule = function (listener) {
        if (listener.exitPhrase) {
            listener.exitPhrase(this);
        }
    };
    // @Override
    PhraseContext.prototype.accept = function (visitor) {
        if (visitor.visitPhrase) {
            return visitor.visitPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PhraseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PhraseContext = PhraseContext;
var WordContext = /** @class */ (function (_super) {
    __extends(WordContext, _super);
    function WordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WordContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    WordContext.prototype.quotedstring = function () {
        return this.tryGetRuleContext(0, QuotedstringContext);
    };
    Object.defineProperty(WordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_word; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WordContext.prototype.enterRule = function (listener) {
        if (listener.enterWord) {
            listener.enterWord(this);
        }
    };
    // @Override
    WordContext.prototype.exitRule = function (listener) {
        if (listener.exitWord) {
            listener.exitWord(this);
        }
    };
    // @Override
    WordContext.prototype.accept = function (visitor) {
        if (visitor.visitWord) {
            return visitor.visitWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WordContext = WordContext;
var LwspcharContext = /** @class */ (function (_super) {
    __extends(LwspcharContext, _super);
    function LwspcharContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LwspcharContext.prototype.SPACE = function () { return this.tryGetToken(emailaddressParser.SPACE, 0); };
    LwspcharContext.prototype.HTAB = function () { return this.tryGetToken(emailaddressParser.HTAB, 0); };
    Object.defineProperty(LwspcharContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_lwspchar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LwspcharContext.prototype.enterRule = function (listener) {
        if (listener.enterLwspchar) {
            listener.enterLwspchar(this);
        }
    };
    // @Override
    LwspcharContext.prototype.exitRule = function (listener) {
        if (listener.exitLwspchar) {
            listener.exitLwspchar(this);
        }
    };
    // @Override
    LwspcharContext.prototype.accept = function (visitor) {
        if (visitor.visitLwspchar) {
            return visitor.visitLwspchar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LwspcharContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LwspcharContext = LwspcharContext;
var LwspContext = /** @class */ (function (_super) {
    __extends(LwspContext, _super);
    function LwspContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LwspContext.prototype.lwspchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LwspcharContext);
        }
        else {
            return this.getRuleContext(i, LwspcharContext);
        }
    };
    LwspContext.prototype.CRLF = function (i) {
        if (i === undefined) {
            return this.getTokens(emailaddressParser.CRLF);
        }
        else {
            return this.getToken(emailaddressParser.CRLF, i);
        }
    };
    Object.defineProperty(LwspContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_lwsp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LwspContext.prototype.enterRule = function (listener) {
        if (listener.enterLwsp) {
            listener.enterLwsp(this);
        }
    };
    // @Override
    LwspContext.prototype.exitRule = function (listener) {
        if (listener.exitLwsp) {
            listener.exitLwsp(this);
        }
    };
    // @Override
    LwspContext.prototype.accept = function (visitor) {
        if (visitor.visitLwsp) {
            return visitor.visitLwsp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LwspContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LwspContext = LwspContext;
var DelimetersContext = /** @class */ (function (_super) {
    __extends(DelimetersContext, _super);
    function DelimetersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelimetersContext.prototype.SPECIALS = function () { return this.tryGetToken(emailaddressParser.SPECIALS, 0); };
    DelimetersContext.prototype.lwsp = function () {
        return this.tryGetRuleContext(0, LwspContext);
    };
    DelimetersContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(DelimetersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_delimeters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelimetersContext.prototype.enterRule = function (listener) {
        if (listener.enterDelimeters) {
            listener.enterDelimeters(this);
        }
    };
    // @Override
    DelimetersContext.prototype.exitRule = function (listener) {
        if (listener.exitDelimeters) {
            listener.exitDelimeters(this);
        }
    };
    // @Override
    DelimetersContext.prototype.accept = function (visitor) {
        if (visitor.visitDelimeters) {
            return visitor.visitDelimeters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelimetersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelimetersContext = DelimetersContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(emailaddressParser.CHAR);
        }
        else {
            return this.getToken(emailaddressParser.CHAR, i);
        }
    };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var QuotedpairContext = /** @class */ (function (_super) {
    __extends(QuotedpairContext, _super);
    function QuotedpairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuotedpairContext.prototype.CHAR = function () { return this.getToken(emailaddressParser.CHAR, 0); };
    Object.defineProperty(QuotedpairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_quotedpair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuotedpairContext.prototype.enterRule = function (listener) {
        if (listener.enterQuotedpair) {
            listener.enterQuotedpair(this);
        }
    };
    // @Override
    QuotedpairContext.prototype.exitRule = function (listener) {
        if (listener.exitQuotedpair) {
            listener.exitQuotedpair(this);
        }
    };
    // @Override
    QuotedpairContext.prototype.accept = function (visitor) {
        if (visitor.visitQuotedpair) {
            return visitor.visitQuotedpair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuotedpairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuotedpairContext = QuotedpairContext;
var DomainliteralContext = /** @class */ (function (_super) {
    __extends(DomainliteralContext, _super);
    function DomainliteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DomainliteralContext.prototype.DTEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(emailaddressParser.DTEXT);
        }
        else {
            return this.getToken(emailaddressParser.DTEXT, i);
        }
    };
    DomainliteralContext.prototype.quotedpair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QuotedpairContext);
        }
        else {
            return this.getRuleContext(i, QuotedpairContext);
        }
    };
    Object.defineProperty(DomainliteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_domainliteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DomainliteralContext.prototype.enterRule = function (listener) {
        if (listener.enterDomainliteral) {
            listener.enterDomainliteral(this);
        }
    };
    // @Override
    DomainliteralContext.prototype.exitRule = function (listener) {
        if (listener.exitDomainliteral) {
            listener.exitDomainliteral(this);
        }
    };
    // @Override
    DomainliteralContext.prototype.accept = function (visitor) {
        if (visitor.visitDomainliteral) {
            return visitor.visitDomainliteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DomainliteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DomainliteralContext = DomainliteralContext;
var QuotedstringContext = /** @class */ (function (_super) {
    __extends(QuotedstringContext, _super);
    function QuotedstringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuotedstringContext.prototype.QTEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(emailaddressParser.QTEXT);
        }
        else {
            return this.getToken(emailaddressParser.QTEXT, i);
        }
    };
    QuotedstringContext.prototype.quotedpair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QuotedpairContext);
        }
        else {
            return this.getRuleContext(i, QuotedpairContext);
        }
    };
    Object.defineProperty(QuotedstringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_quotedstring; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuotedstringContext.prototype.enterRule = function (listener) {
        if (listener.enterQuotedstring) {
            listener.enterQuotedstring(this);
        }
    };
    // @Override
    QuotedstringContext.prototype.exitRule = function (listener) {
        if (listener.exitQuotedstring) {
            listener.exitQuotedstring(this);
        }
    };
    // @Override
    QuotedstringContext.prototype.accept = function (visitor) {
        if (visitor.visitQuotedstring) {
            return visitor.visitQuotedstring(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuotedstringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuotedstringContext = QuotedstringContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.CTEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(emailaddressParser.CTEXT);
        }
        else {
            return this.getToken(emailaddressParser.CTEXT, i);
        }
    };
    CommentContext.prototype.quotedpair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(QuotedpairContext);
        }
        else {
            return this.getRuleContext(i, QuotedpairContext);
        }
    };
    CommentContext.prototype.comment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }
        else {
            return this.getRuleContext(i, CommentContext);
        }
    };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return emailaddressParser.RULE_comment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentContext.prototype.enterRule = function (listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    };
    // @Override
    CommentContext.prototype.exitRule = function (listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    };
    // @Override
    CommentContext.prototype.accept = function (visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentContext = CommentContext;
