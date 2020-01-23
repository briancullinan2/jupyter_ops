"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/http/http.g4 by ANTLR 4.7.3-SNAPSHOT
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
var httpParser = /** @class */ (function (_super) {
    __extends(httpParser, _super);
    function httpParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(httpParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(httpParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return httpParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(httpParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "http.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(httpParser.prototype, "ruleNames", {
        // @Override
        get: function () { return httpParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(httpParser.prototype, "serializedATN", {
        // @Override
        get: function () { return httpParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    httpParser.prototype.http_message = function () {
        var _localctx = new Http_messageContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, httpParser.RULE_http_message);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 48;
                this.start_line();
                this.state = 54;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0)) {
                    {
                        {
                            this.state = 49;
                            this.header_field();
                            this.state = 50;
                            this.match(httpParser.CRLF);
                        }
                    }
                    this.state = 56;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 57;
                this.match(httpParser.CRLF);
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
    httpParser.prototype.start_line = function () {
        var _localctx = new Start_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, httpParser.RULE_start_line);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 59;
                this.request_line();
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
    httpParser.prototype.request_line = function () {
        var _localctx = new Request_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, httpParser.RULE_request_line);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 61;
                this.method();
                this.state = 62;
                this.match(httpParser.SP);
                this.state = 63;
                this.request_target();
                this.state = 64;
                this.match(httpParser.SP);
                this.state = 65;
                this.http_version();
                this.state = 66;
                this.match(httpParser.CRLF);
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
    httpParser.prototype.method = function () {
        var _localctx = new MethodContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, httpParser.RULE_method);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << httpParser.T__0) | (1 << httpParser.T__1) | (1 << httpParser.T__2) | (1 << httpParser.T__3) | (1 << httpParser.T__4) | (1 << httpParser.T__5) | (1 << httpParser.T__6) | (1 << httpParser.T__7))) !== 0))) {
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
    httpParser.prototype.request_target = function () {
        var _localctx = new Request_targetContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, httpParser.RULE_request_target);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.origin_form();
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
    httpParser.prototype.origin_form = function () {
        var _localctx = new Origin_formContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, httpParser.RULE_origin_form);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.absolute_path();
                this.state = 75;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === httpParser.QuestionMark) {
                    {
                        this.state = 73;
                        this.match(httpParser.QuestionMark);
                        this.state = 74;
                        this.query();
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
    httpParser.prototype.absolute_path = function () {
        var _localctx = new Absolute_pathContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, httpParser.RULE_absolute_path);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 77;
                            this.match(httpParser.Slash);
                            this.state = 78;
                            this.segment();
                        }
                    }
                    this.state = 81;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === httpParser.Slash);
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
    httpParser.prototype.segment = function () {
        var _localctx = new SegmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, httpParser.RULE_segment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 86;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Pct_encoded - 11)) | (1 << (httpParser.LColumn - 11)) | (1 << (httpParser.RColumn - 11)) | (1 << (httpParser.SemiColon - 11)) | (1 << (httpParser.Equals - 11)) | (1 << (httpParser.Period - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.Colon - 11)) | (1 << (httpParser.At - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)))) !== 0)) {
                    {
                        {
                            this.state = 83;
                            this.pchar();
                        }
                    }
                    this.state = 88;
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
    httpParser.prototype.query = function () {
        var _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, httpParser.RULE_query);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Pct_encoded - 11)) | (1 << (httpParser.LColumn - 11)) | (1 << (httpParser.RColumn - 11)) | (1 << (httpParser.SemiColon - 11)) | (1 << (httpParser.Equals - 11)) | (1 << (httpParser.Period - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.QuestionMark - 11)) | (1 << (httpParser.Slash - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.Colon - 11)) | (1 << (httpParser.At - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)))) !== 0)) {
                    {
                        this.state = 92;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case httpParser.ALPHA:
                            case httpParser.DIGIT:
                            case httpParser.Pct_encoded:
                            case httpParser.LColumn:
                            case httpParser.RColumn:
                            case httpParser.SemiColon:
                            case httpParser.Equals:
                            case httpParser.Period:
                            case httpParser.Minus:
                            case httpParser.Dot:
                            case httpParser.Underscore:
                            case httpParser.Tilde:
                            case httpParser.ExclamationMark:
                            case httpParser.Colon:
                            case httpParser.At:
                            case httpParser.DollarSign:
                            case httpParser.Ampersand:
                            case httpParser.SQuote:
                            case httpParser.Star:
                            case httpParser.Plus:
                                {
                                    this.state = 89;
                                    this.pchar();
                                }
                                break;
                            case httpParser.Slash:
                                {
                                    this.state = 90;
                                    this.match(httpParser.Slash);
                                }
                                break;
                            case httpParser.QuestionMark:
                                {
                                    this.state = 91;
                                    this.match(httpParser.QuestionMark);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 96;
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
    httpParser.prototype.http_version = function () {
        var _localctx = new Http_versionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, httpParser.RULE_http_version);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.http_name();
                this.state = 98;
                this.match(httpParser.DIGIT);
                this.state = 99;
                this.match(httpParser.Dot);
                this.state = 100;
                this.match(httpParser.DIGIT);
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
    httpParser.prototype.http_name = function () {
        var _localctx = new Http_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, httpParser.RULE_http_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this.match(httpParser.T__8);
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
    httpParser.prototype.header_field = function () {
        var _localctx = new Header_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, httpParser.RULE_header_field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.field_name();
                this.state = 105;
                this.match(httpParser.Colon);
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === httpParser.OWS) {
                    {
                        {
                            this.state = 106;
                            this.match(httpParser.OWS);
                        }
                    }
                    this.state = 111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 112;
                this.field_value();
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === httpParser.OWS) {
                    {
                        {
                            this.state = 113;
                            this.match(httpParser.OWS);
                        }
                    }
                    this.state = 118;
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
    httpParser.prototype.field_name = function () {
        var _localctx = new Field_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, httpParser.RULE_field_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                this.token();
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
    httpParser.prototype.token = function () {
        var _localctx = new TokenContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, httpParser.RULE_token);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 121;
                            this.tchar();
                        }
                    }
                    this.state = 124;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0));
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
    httpParser.prototype.field_value = function () {
        var _localctx = new Field_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, httpParser.RULE_field_value);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 128;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case httpParser.ALPHA:
                                    case httpParser.DIGIT:
                                    case httpParser.VCHAR:
                                    case httpParser.OBS_TEXT:
                                        {
                                            this.state = 126;
                                            this.field_content();
                                        }
                                        break;
                                    case httpParser.CRLF:
                                        {
                                            this.state = 127;
                                            this.obs_fold();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 130;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
    httpParser.prototype.field_content = function () {
        var _localctx = new Field_contentContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, httpParser.RULE_field_content);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.field_vchar();
                this.state = 139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === httpParser.SP || _la === httpParser.HTAB) {
                    {
                        this.state = 134;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 133;
                                    _la = this._input.LA(1);
                                    if (!(_la === httpParser.SP || _la === httpParser.HTAB)) {
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
                            this.state = 136;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === httpParser.SP || _la === httpParser.HTAB);
                        this.state = 138;
                        this.field_vchar();
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
    httpParser.prototype.field_vchar = function () {
        var _localctx = new Field_vcharContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, httpParser.RULE_field_vchar);
        try {
            this.state = 143;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case httpParser.ALPHA:
                case httpParser.DIGIT:
                case httpParser.VCHAR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 141;
                        this.vCHAR();
                    }
                    break;
                case httpParser.OBS_TEXT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 142;
                        this.obs_text();
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
    httpParser.prototype.obs_text = function () {
        var _localctx = new Obs_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, httpParser.RULE_obs_text);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.match(httpParser.OBS_TEXT);
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
    httpParser.prototype.obs_fold = function () {
        var _localctx = new Obs_foldContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, httpParser.RULE_obs_fold);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(httpParser.CRLF);
                this.state = 149;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 148;
                            _la = this._input.LA(1);
                            if (!(_la === httpParser.SP || _la === httpParser.HTAB)) {
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
                    this.state = 151;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === httpParser.SP || _la === httpParser.HTAB);
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
    httpParser.prototype.pchar = function () {
        var _localctx = new PcharContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, httpParser.RULE_pchar);
        try {
            this.state = 158;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case httpParser.ALPHA:
                case httpParser.DIGIT:
                case httpParser.Minus:
                case httpParser.Dot:
                case httpParser.Underscore:
                case httpParser.Tilde:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 153;
                        this.unreserved();
                    }
                    break;
                case httpParser.Pct_encoded:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 154;
                        this.match(httpParser.Pct_encoded);
                    }
                    break;
                case httpParser.LColumn:
                case httpParser.RColumn:
                case httpParser.SemiColon:
                case httpParser.Equals:
                case httpParser.Period:
                case httpParser.ExclamationMark:
                case httpParser.DollarSign:
                case httpParser.Ampersand:
                case httpParser.SQuote:
                case httpParser.Star:
                case httpParser.Plus:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 155;
                        this.sub_delims();
                    }
                    break;
                case httpParser.Colon:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 156;
                        this.match(httpParser.Colon);
                    }
                    break;
                case httpParser.At:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 157;
                        this.match(httpParser.At);
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
    httpParser.prototype.unreserved = function () {
        var _localctx = new UnreservedContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, httpParser.RULE_unreserved);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << httpParser.ALPHA) | (1 << httpParser.DIGIT) | (1 << httpParser.Minus) | (1 << httpParser.Dot) | (1 << httpParser.Underscore) | (1 << httpParser.Tilde))) !== 0))) {
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
    httpParser.prototype.sub_delims = function () {
        var _localctx = new Sub_delimsContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, httpParser.RULE_sub_delims);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 162;
                _la = this._input.LA(1);
                if (!(((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (httpParser.LColumn - 15)) | (1 << (httpParser.RColumn - 15)) | (1 << (httpParser.SemiColon - 15)) | (1 << (httpParser.Equals - 15)) | (1 << (httpParser.Period - 15)) | (1 << (httpParser.ExclamationMark - 15)) | (1 << (httpParser.DollarSign - 15)) | (1 << (httpParser.Ampersand - 15)) | (1 << (httpParser.SQuote - 15)) | (1 << (httpParser.Star - 15)) | (1 << (httpParser.Plus - 15)))) !== 0))) {
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
    httpParser.prototype.tchar = function () {
        var _localctx = new TcharContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, httpParser.RULE_tchar);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                _la = this._input.LA(1);
                if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.Minus - 11)) | (1 << (httpParser.Dot - 11)) | (1 << (httpParser.Underscore - 11)) | (1 << (httpParser.Tilde - 11)) | (1 << (httpParser.ExclamationMark - 11)) | (1 << (httpParser.DollarSign - 11)) | (1 << (httpParser.Hashtag - 11)) | (1 << (httpParser.Ampersand - 11)) | (1 << (httpParser.Percent - 11)) | (1 << (httpParser.SQuote - 11)) | (1 << (httpParser.Star - 11)) | (1 << (httpParser.Plus - 11)) | (1 << (httpParser.Caret - 11)) | (1 << (httpParser.BackQuote - 11)) | (1 << (httpParser.VBar - 11)))) !== 0))) {
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
    httpParser.prototype.vCHAR = function () {
        var _localctx = new VCHARContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, httpParser.RULE_vCHAR);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                _la = this._input.LA(1);
                if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (httpParser.ALPHA - 11)) | (1 << (httpParser.DIGIT - 11)) | (1 << (httpParser.VCHAR - 11)))) !== 0))) {
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
    Object.defineProperty(httpParser, "_ATN", {
        get: function () {
            if (!httpParser.__ATN) {
                httpParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(httpParser._serializedATN));
            }
            return httpParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    httpParser.T__0 = 1;
    httpParser.T__1 = 2;
    httpParser.T__2 = 3;
    httpParser.T__3 = 4;
    httpParser.T__4 = 5;
    httpParser.T__5 = 6;
    httpParser.T__6 = 7;
    httpParser.T__7 = 8;
    httpParser.T__8 = 9;
    httpParser.SP = 10;
    httpParser.ALPHA = 11;
    httpParser.DIGIT = 12;
    httpParser.Pct_encoded = 13;
    httpParser.HEXDIG = 14;
    httpParser.LColumn = 15;
    httpParser.RColumn = 16;
    httpParser.SemiColon = 17;
    httpParser.Equals = 18;
    httpParser.Period = 19;
    httpParser.CRLF = 20;
    httpParser.Minus = 21;
    httpParser.Dot = 22;
    httpParser.Underscore = 23;
    httpParser.Tilde = 24;
    httpParser.QuestionMark = 25;
    httpParser.Slash = 26;
    httpParser.ExclamationMark = 27;
    httpParser.Colon = 28;
    httpParser.At = 29;
    httpParser.DollarSign = 30;
    httpParser.Hashtag = 31;
    httpParser.Ampersand = 32;
    httpParser.Percent = 33;
    httpParser.SQuote = 34;
    httpParser.Star = 35;
    httpParser.Plus = 36;
    httpParser.Caret = 37;
    httpParser.BackQuote = 38;
    httpParser.VBar = 39;
    httpParser.OWS = 40;
    httpParser.HTAB = 41;
    httpParser.VCHAR = 42;
    httpParser.OBS_TEXT = 43;
    httpParser.RULE_http_message = 0;
    httpParser.RULE_start_line = 1;
    httpParser.RULE_request_line = 2;
    httpParser.RULE_method = 3;
    httpParser.RULE_request_target = 4;
    httpParser.RULE_origin_form = 5;
    httpParser.RULE_absolute_path = 6;
    httpParser.RULE_segment = 7;
    httpParser.RULE_query = 8;
    httpParser.RULE_http_version = 9;
    httpParser.RULE_http_name = 10;
    httpParser.RULE_header_field = 11;
    httpParser.RULE_field_name = 12;
    httpParser.RULE_token = 13;
    httpParser.RULE_field_value = 14;
    httpParser.RULE_field_content = 15;
    httpParser.RULE_field_vchar = 16;
    httpParser.RULE_obs_text = 17;
    httpParser.RULE_obs_fold = 18;
    httpParser.RULE_pchar = 19;
    httpParser.RULE_unreserved = 20;
    httpParser.RULE_sub_delims = 21;
    httpParser.RULE_tchar = 22;
    httpParser.RULE_vCHAR = 23;
    // tslint:disable:no-trailing-whitespace
    httpParser.ruleNames = [
        "http_message", "start_line", "request_line", "method", "request_target",
        "origin_form", "absolute_path", "segment", "query", "http_version", "http_name",
        "header_field", "field_name", "token", "field_value", "field_content",
        "field_vchar", "obs_text", "obs_fold", "pchar", "unreserved", "sub_delims",
        "tchar", "vCHAR",
    ];
    httpParser._LITERAL_NAMES = [
        undefined, "'GET'", "'HEAD'", "'POST'", "'PUT'", "'DELETE'", "'CONNECT'",
        "'OPTIONS'", "'TRACE'", "'HTTP/'", "' '", undefined, undefined, undefined,
        undefined, "'('", "')'", "';'", "'='", "','", "'\n'", "'-'", "'.'", "'_'",
        "'~'", "'?'", "'/'", "'!'", "':'", "'@'", "'$'", "'#'", "'&'", "'%'",
        "'''", "'*'", "'+'", "'^'", "'`'", "'|'", undefined, "'\t'",
    ];
    httpParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "SP", "ALPHA", "DIGIT", "Pct_encoded",
        "HEXDIG", "LColumn", "RColumn", "SemiColon", "Equals", "Period", "CRLF",
        "Minus", "Dot", "Underscore", "Tilde", "QuestionMark", "Slash", "ExclamationMark",
        "Colon", "At", "DollarSign", "Hashtag", "Ampersand", "Percent", "SQuote",
        "Star", "Plus", "Caret", "BackQuote", "VBar", "OWS", "HTAB", "VCHAR",
        "OBS_TEXT",
    ];
    httpParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(httpParser._LITERAL_NAMES, httpParser._SYMBOLIC_NAMES, []);
    httpParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\xAB\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x03\x02\x07\x027\n\x02" +
        "\f\x02\x0E\x02:\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\x07\x05\x07N\n\x07\x03\b\x03\b\x06\bR\n\b\r\b\x0E" +
        "\bS\x03\t\x07\tW\n\t\f\t\x0E\tZ\v\t\x03\n\x03\n\x03\n\x07\n_\n\n\f\n\x0E" +
        "\nb\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x07" +
        "\rn\n\r\f\r\x0E\rq\v\r\x03\r\x03\r\x07\ru\n\r\f\r\x0E\rx\v\r\x03\x0E\x03" +
        "\x0E\x03\x0F\x06\x0F}\n\x0F\r\x0F\x0E\x0F~\x03\x10\x03\x10\x06\x10\x83" +
        "\n\x10\r\x10\x0E\x10\x84\x03\x11\x03\x11\x06\x11\x89\n\x11\r\x11\x0E\x11" +
        "\x8A\x03\x11\x05\x11\x8E\n\x11\x03\x12\x03\x12\x05\x12\x92\n\x12\x03\x13" +
        "\x03\x13\x03\x14\x03\x14\x06\x14\x98\n\x14\r\x14\x0E\x14\x99\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x15\x05\x15\xA1\n\x15\x03\x16\x03\x16\x03\x17" +
        "\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x02\x02\x02\x1A\x02\x02" +
        "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
        "\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
        ".\x020\x02\x02\b\x03\x02\x03\n\x04\x02\f\f++\x04\x02\r\x0E\x17\x1A\x07" +
        "\x02\x11\x15\x1D\x1D  \"\"$&\x06\x02\r\x0E\x17\x1A\x1D\x1D )\x04\x02\r" +
        "\x0E,,\x02\xA6\x022\x03\x02\x02\x02\x04=\x03\x02\x02\x02\x06?\x03\x02" +
        "\x02\x02\bF\x03\x02\x02\x02\nH\x03\x02\x02\x02\fJ\x03\x02\x02\x02\x0E" +
        "Q\x03\x02\x02\x02\x10X\x03\x02\x02\x02\x12`\x03\x02\x02\x02\x14c\x03\x02" +
        "\x02\x02\x16h\x03\x02\x02\x02\x18j\x03\x02\x02\x02\x1Ay\x03\x02\x02\x02" +
        "\x1C|\x03\x02\x02\x02\x1E\x82\x03\x02\x02\x02 \x86\x03\x02\x02\x02\"\x91" +
        "\x03\x02\x02\x02$\x93\x03\x02\x02\x02&\x95\x03\x02\x02\x02(\xA0\x03\x02" +
        "\x02\x02*\xA2\x03\x02\x02\x02,\xA4\x03\x02\x02\x02.\xA6\x03\x02\x02\x02" +
        "0\xA8\x03\x02\x02\x0228\x05\x04\x03\x0234\x05\x18\r\x0245\x07\x16\x02" +
        "\x0257\x03\x02\x02\x0263\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02" +
        "\x0289\x03\x02\x02\x029;\x03\x02\x02\x02:8\x03\x02\x02\x02;<\x07\x16\x02" +
        "\x02<\x03\x03\x02\x02\x02=>\x05\x06\x04\x02>\x05\x03\x02\x02\x02?@\x05" +
        "\b\x05\x02@A\x07\f\x02\x02AB\x05\n\x06\x02BC\x07\f\x02\x02CD\x05\x14\v" +
        "\x02DE\x07\x16\x02\x02E\x07\x03\x02\x02\x02FG\t\x02\x02\x02G\t\x03\x02" +
        "\x02\x02HI\x05\f\x07\x02I\v\x03\x02\x02\x02JM\x05\x0E\b\x02KL\x07\x1B" +
        "\x02\x02LN\x05\x12\n\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02N\r\x03\x02" +
        "\x02\x02OP\x07\x1C\x02\x02PR\x05\x10\t\x02QO\x03\x02\x02\x02RS\x03\x02" +
        "\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\x0F\x03\x02\x02\x02UW\x05" +
        "(\x15\x02VU\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03" +
        "\x02\x02\x02Y\x11\x03\x02\x02\x02ZX\x03\x02\x02\x02[_\x05(\x15\x02\\_" +
        "\x07\x1C\x02\x02]_\x07\x1B\x02\x02^[\x03\x02\x02\x02^\\\x03\x02\x02\x02" +
        "^]\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02" +
        "a\x13\x03\x02\x02\x02b`\x03\x02\x02\x02cd\x05\x16\f\x02de\x07\x0E\x02" +
        "\x02ef\x07\x18\x02\x02fg\x07\x0E\x02\x02g\x15\x03\x02\x02\x02hi\x07\v" +
        "\x02\x02i\x17\x03\x02\x02\x02jk\x05\x1A\x0E\x02ko\x07\x1E\x02\x02ln\x07" +
        "*\x02\x02ml\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03" +
        "\x02\x02\x02pr\x03\x02\x02\x02qo\x03\x02\x02\x02rv\x05\x1E\x10\x02su\x07" +
        "*\x02\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03" +
        "\x02\x02\x02w\x19\x03\x02\x02\x02xv\x03\x02\x02\x02yz\x05\x1C\x0F\x02" +
        "z\x1B\x03\x02\x02\x02{}\x05.\x18\x02|{\x03\x02\x02\x02}~\x03\x02\x02\x02" +
        "~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x1D\x03\x02\x02\x02\x80\x83" +
        "\x05 \x11\x02\x81\x83\x05&\x14\x02\x82\x80\x03\x02\x02\x02\x82\x81\x03" +
        "\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03" +
        "\x02\x02\x02\x85\x1F\x03\x02\x02\x02\x86\x8D\x05\"\x12\x02\x87\x89\t\x03" +
        "\x02\x02\x88\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x88\x03\x02" +
        "\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x05\"" +
        "\x12\x02\x8D\x88\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E!\x03\x02" +
        "\x02\x02\x8F\x92\x050\x19\x02\x90\x92\x05$\x13\x02\x91\x8F\x03\x02\x02" +
        "\x02\x91\x90\x03\x02\x02\x02\x92#\x03\x02\x02\x02\x93\x94\x07-\x02\x02" +
        "\x94%\x03\x02\x02\x02\x95\x97\x07\x16\x02\x02\x96\x98\t\x03\x02\x02\x97" +
        "\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99" +
        "\x9A\x03\x02\x02\x02\x9A\'\x03\x02\x02\x02\x9B\xA1\x05*\x16\x02\x9C\xA1" +
        "\x07\x0F\x02\x02\x9D\xA1\x05,\x17\x02\x9E\xA1\x07\x1E\x02\x02\x9F\xA1" +
        "\x07\x1F\x02\x02\xA0\x9B\x03\x02\x02\x02\xA0\x9C\x03\x02\x02\x02\xA0\x9D" +
        "\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1)" +
        "\x03\x02\x02\x02\xA2\xA3\t\x04\x02\x02\xA3+\x03\x02\x02\x02\xA4\xA5\t" +
        "\x05\x02\x02\xA5-\x03\x02\x02\x02\xA6\xA7\t\x06\x02\x02\xA7/\x03\x02\x02" +
        "\x02\xA8\xA9\t\x07\x02\x02\xA91\x03\x02\x02\x02\x128MSX^`ov~\x82\x84\x8A" +
        "\x8D\x91\x99\xA0";
    return httpParser;
}(Parser_1.Parser));
exports.httpParser = httpParser;
var Http_messageContext = /** @class */ (function (_super) {
    __extends(Http_messageContext, _super);
    function Http_messageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Http_messageContext.prototype.start_line = function () {
        return this.getRuleContext(0, Start_lineContext);
    };
    Http_messageContext.prototype.CRLF = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.CRLF);
        }
        else {
            return this.getToken(httpParser.CRLF, i);
        }
    };
    Http_messageContext.prototype.header_field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Header_fieldContext);
        }
        else {
            return this.getRuleContext(i, Header_fieldContext);
        }
    };
    Object.defineProperty(Http_messageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_http_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Http_messageContext.prototype.enterRule = function (listener) {
        if (listener.enterHttp_message) {
            listener.enterHttp_message(this);
        }
    };
    // @Override
    Http_messageContext.prototype.exitRule = function (listener) {
        if (listener.exitHttp_message) {
            listener.exitHttp_message(this);
        }
    };
    // @Override
    Http_messageContext.prototype.accept = function (visitor) {
        if (visitor.visitHttp_message) {
            return visitor.visitHttp_message(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Http_messageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Http_messageContext = Http_messageContext;
var Start_lineContext = /** @class */ (function (_super) {
    __extends(Start_lineContext, _super);
    function Start_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Start_lineContext.prototype.request_line = function () {
        return this.getRuleContext(0, Request_lineContext);
    };
    Object.defineProperty(Start_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_start_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Start_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterStart_line) {
            listener.enterStart_line(this);
        }
    };
    // @Override
    Start_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitStart_line) {
            listener.exitStart_line(this);
        }
    };
    // @Override
    Start_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitStart_line) {
            return visitor.visitStart_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Start_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Start_lineContext = Start_lineContext;
var Request_lineContext = /** @class */ (function (_super) {
    __extends(Request_lineContext, _super);
    function Request_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Request_lineContext.prototype.method = function () {
        return this.getRuleContext(0, MethodContext);
    };
    Request_lineContext.prototype.SP = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.SP);
        }
        else {
            return this.getToken(httpParser.SP, i);
        }
    };
    Request_lineContext.prototype.request_target = function () {
        return this.getRuleContext(0, Request_targetContext);
    };
    Request_lineContext.prototype.http_version = function () {
        return this.getRuleContext(0, Http_versionContext);
    };
    Request_lineContext.prototype.CRLF = function () { return this.getToken(httpParser.CRLF, 0); };
    Object.defineProperty(Request_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_request_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Request_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterRequest_line) {
            listener.enterRequest_line(this);
        }
    };
    // @Override
    Request_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitRequest_line) {
            listener.exitRequest_line(this);
        }
    };
    // @Override
    Request_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitRequest_line) {
            return visitor.visitRequest_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Request_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Request_lineContext = Request_lineContext;
var MethodContext = /** @class */ (function (_super) {
    __extends(MethodContext, _super);
    function MethodContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MethodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_method; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodContext.prototype.enterRule = function (listener) {
        if (listener.enterMethod) {
            listener.enterMethod(this);
        }
    };
    // @Override
    MethodContext.prototype.exitRule = function (listener) {
        if (listener.exitMethod) {
            listener.exitMethod(this);
        }
    };
    // @Override
    MethodContext.prototype.accept = function (visitor) {
        if (visitor.visitMethod) {
            return visitor.visitMethod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodContext = MethodContext;
var Request_targetContext = /** @class */ (function (_super) {
    __extends(Request_targetContext, _super);
    function Request_targetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Request_targetContext.prototype.origin_form = function () {
        return this.getRuleContext(0, Origin_formContext);
    };
    Object.defineProperty(Request_targetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_request_target; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Request_targetContext.prototype.enterRule = function (listener) {
        if (listener.enterRequest_target) {
            listener.enterRequest_target(this);
        }
    };
    // @Override
    Request_targetContext.prototype.exitRule = function (listener) {
        if (listener.exitRequest_target) {
            listener.exitRequest_target(this);
        }
    };
    // @Override
    Request_targetContext.prototype.accept = function (visitor) {
        if (visitor.visitRequest_target) {
            return visitor.visitRequest_target(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Request_targetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Request_targetContext = Request_targetContext;
var Origin_formContext = /** @class */ (function (_super) {
    __extends(Origin_formContext, _super);
    function Origin_formContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Origin_formContext.prototype.absolute_path = function () {
        return this.getRuleContext(0, Absolute_pathContext);
    };
    Origin_formContext.prototype.QuestionMark = function () { return this.tryGetToken(httpParser.QuestionMark, 0); };
    Origin_formContext.prototype.query = function () {
        return this.tryGetRuleContext(0, QueryContext);
    };
    Object.defineProperty(Origin_formContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_origin_form; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Origin_formContext.prototype.enterRule = function (listener) {
        if (listener.enterOrigin_form) {
            listener.enterOrigin_form(this);
        }
    };
    // @Override
    Origin_formContext.prototype.exitRule = function (listener) {
        if (listener.exitOrigin_form) {
            listener.exitOrigin_form(this);
        }
    };
    // @Override
    Origin_formContext.prototype.accept = function (visitor) {
        if (visitor.visitOrigin_form) {
            return visitor.visitOrigin_form(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Origin_formContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Origin_formContext = Origin_formContext;
var Absolute_pathContext = /** @class */ (function (_super) {
    __extends(Absolute_pathContext, _super);
    function Absolute_pathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Absolute_pathContext.prototype.Slash = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.Slash);
        }
        else {
            return this.getToken(httpParser.Slash, i);
        }
    };
    Absolute_pathContext.prototype.segment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SegmentContext);
        }
        else {
            return this.getRuleContext(i, SegmentContext);
        }
    };
    Object.defineProperty(Absolute_pathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_absolute_path; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Absolute_pathContext.prototype.enterRule = function (listener) {
        if (listener.enterAbsolute_path) {
            listener.enterAbsolute_path(this);
        }
    };
    // @Override
    Absolute_pathContext.prototype.exitRule = function (listener) {
        if (listener.exitAbsolute_path) {
            listener.exitAbsolute_path(this);
        }
    };
    // @Override
    Absolute_pathContext.prototype.accept = function (visitor) {
        if (visitor.visitAbsolute_path) {
            return visitor.visitAbsolute_path(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Absolute_pathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Absolute_pathContext = Absolute_pathContext;
var SegmentContext = /** @class */ (function (_super) {
    __extends(SegmentContext, _super);
    function SegmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SegmentContext.prototype.pchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PcharContext);
        }
        else {
            return this.getRuleContext(i, PcharContext);
        }
    };
    Object.defineProperty(SegmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_segment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SegmentContext.prototype.enterRule = function (listener) {
        if (listener.enterSegment) {
            listener.enterSegment(this);
        }
    };
    // @Override
    SegmentContext.prototype.exitRule = function (listener) {
        if (listener.exitSegment) {
            listener.exitSegment(this);
        }
    };
    // @Override
    SegmentContext.prototype.accept = function (visitor) {
        if (visitor.visitSegment) {
            return visitor.visitSegment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SegmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SegmentContext = SegmentContext;
var QueryContext = /** @class */ (function (_super) {
    __extends(QueryContext, _super);
    function QueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QueryContext.prototype.pchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PcharContext);
        }
        else {
            return this.getRuleContext(i, PcharContext);
        }
    };
    QueryContext.prototype.Slash = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.Slash);
        }
        else {
            return this.getToken(httpParser.Slash, i);
        }
    };
    QueryContext.prototype.QuestionMark = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.QuestionMark);
        }
        else {
            return this.getToken(httpParser.QuestionMark, i);
        }
    };
    Object.defineProperty(QueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_query; },
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
var Http_versionContext = /** @class */ (function (_super) {
    __extends(Http_versionContext, _super);
    function Http_versionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Http_versionContext.prototype.http_name = function () {
        return this.getRuleContext(0, Http_nameContext);
    };
    Http_versionContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.DIGIT);
        }
        else {
            return this.getToken(httpParser.DIGIT, i);
        }
    };
    Http_versionContext.prototype.Dot = function () { return this.getToken(httpParser.Dot, 0); };
    Object.defineProperty(Http_versionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_http_version; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Http_versionContext.prototype.enterRule = function (listener) {
        if (listener.enterHttp_version) {
            listener.enterHttp_version(this);
        }
    };
    // @Override
    Http_versionContext.prototype.exitRule = function (listener) {
        if (listener.exitHttp_version) {
            listener.exitHttp_version(this);
        }
    };
    // @Override
    Http_versionContext.prototype.accept = function (visitor) {
        if (visitor.visitHttp_version) {
            return visitor.visitHttp_version(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Http_versionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Http_versionContext = Http_versionContext;
var Http_nameContext = /** @class */ (function (_super) {
    __extends(Http_nameContext, _super);
    function Http_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Http_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_http_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Http_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterHttp_name) {
            listener.enterHttp_name(this);
        }
    };
    // @Override
    Http_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitHttp_name) {
            listener.exitHttp_name(this);
        }
    };
    // @Override
    Http_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitHttp_name) {
            return visitor.visitHttp_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Http_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Http_nameContext = Http_nameContext;
var Header_fieldContext = /** @class */ (function (_super) {
    __extends(Header_fieldContext, _super);
    function Header_fieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Header_fieldContext.prototype.field_name = function () {
        return this.getRuleContext(0, Field_nameContext);
    };
    Header_fieldContext.prototype.Colon = function () { return this.getToken(httpParser.Colon, 0); };
    Header_fieldContext.prototype.field_value = function () {
        return this.getRuleContext(0, Field_valueContext);
    };
    Header_fieldContext.prototype.OWS = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.OWS);
        }
        else {
            return this.getToken(httpParser.OWS, i);
        }
    };
    Object.defineProperty(Header_fieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_header_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Header_fieldContext.prototype.enterRule = function (listener) {
        if (listener.enterHeader_field) {
            listener.enterHeader_field(this);
        }
    };
    // @Override
    Header_fieldContext.prototype.exitRule = function (listener) {
        if (listener.exitHeader_field) {
            listener.exitHeader_field(this);
        }
    };
    // @Override
    Header_fieldContext.prototype.accept = function (visitor) {
        if (visitor.visitHeader_field) {
            return visitor.visitHeader_field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Header_fieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Header_fieldContext = Header_fieldContext;
var Field_nameContext = /** @class */ (function (_super) {
    __extends(Field_nameContext, _super);
    function Field_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_nameContext.prototype.token = function () {
        return this.getRuleContext(0, TokenContext);
    };
    Object.defineProperty(Field_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_field_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterField_name) {
            listener.enterField_name(this);
        }
    };
    // @Override
    Field_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitField_name) {
            listener.exitField_name(this);
        }
    };
    // @Override
    Field_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitField_name) {
            return visitor.visitField_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_nameContext = Field_nameContext;
var TokenContext = /** @class */ (function (_super) {
    __extends(TokenContext, _super);
    function TokenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TokenContext.prototype.tchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TcharContext);
        }
        else {
            return this.getRuleContext(i, TcharContext);
        }
    };
    Object.defineProperty(TokenContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_token; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TokenContext.prototype.enterRule = function (listener) {
        if (listener.enterToken) {
            listener.enterToken(this);
        }
    };
    // @Override
    TokenContext.prototype.exitRule = function (listener) {
        if (listener.exitToken) {
            listener.exitToken(this);
        }
    };
    // @Override
    TokenContext.prototype.accept = function (visitor) {
        if (visitor.visitToken) {
            return visitor.visitToken(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TokenContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TokenContext = TokenContext;
var Field_valueContext = /** @class */ (function (_super) {
    __extends(Field_valueContext, _super);
    function Field_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_valueContext.prototype.field_content = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Field_contentContext);
        }
        else {
            return this.getRuleContext(i, Field_contentContext);
        }
    };
    Field_valueContext.prototype.obs_fold = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Obs_foldContext);
        }
        else {
            return this.getRuleContext(i, Obs_foldContext);
        }
    };
    Object.defineProperty(Field_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_field_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterField_value) {
            listener.enterField_value(this);
        }
    };
    // @Override
    Field_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitField_value) {
            listener.exitField_value(this);
        }
    };
    // @Override
    Field_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitField_value) {
            return visitor.visitField_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_valueContext = Field_valueContext;
var Field_contentContext = /** @class */ (function (_super) {
    __extends(Field_contentContext, _super);
    function Field_contentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_contentContext.prototype.field_vchar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Field_vcharContext);
        }
        else {
            return this.getRuleContext(i, Field_vcharContext);
        }
    };
    Field_contentContext.prototype.SP = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.SP);
        }
        else {
            return this.getToken(httpParser.SP, i);
        }
    };
    Field_contentContext.prototype.HTAB = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.HTAB);
        }
        else {
            return this.getToken(httpParser.HTAB, i);
        }
    };
    Object.defineProperty(Field_contentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_field_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_contentContext.prototype.enterRule = function (listener) {
        if (listener.enterField_content) {
            listener.enterField_content(this);
        }
    };
    // @Override
    Field_contentContext.prototype.exitRule = function (listener) {
        if (listener.exitField_content) {
            listener.exitField_content(this);
        }
    };
    // @Override
    Field_contentContext.prototype.accept = function (visitor) {
        if (visitor.visitField_content) {
            return visitor.visitField_content(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_contentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_contentContext = Field_contentContext;
var Field_vcharContext = /** @class */ (function (_super) {
    __extends(Field_vcharContext, _super);
    function Field_vcharContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Field_vcharContext.prototype.vCHAR = function () {
        return this.tryGetRuleContext(0, VCHARContext);
    };
    Field_vcharContext.prototype.obs_text = function () {
        return this.tryGetRuleContext(0, Obs_textContext);
    };
    Object.defineProperty(Field_vcharContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_field_vchar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Field_vcharContext.prototype.enterRule = function (listener) {
        if (listener.enterField_vchar) {
            listener.enterField_vchar(this);
        }
    };
    // @Override
    Field_vcharContext.prototype.exitRule = function (listener) {
        if (listener.exitField_vchar) {
            listener.exitField_vchar(this);
        }
    };
    // @Override
    Field_vcharContext.prototype.accept = function (visitor) {
        if (visitor.visitField_vchar) {
            return visitor.visitField_vchar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Field_vcharContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Field_vcharContext = Field_vcharContext;
var Obs_textContext = /** @class */ (function (_super) {
    __extends(Obs_textContext, _super);
    function Obs_textContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Obs_textContext.prototype.OBS_TEXT = function () { return this.getToken(httpParser.OBS_TEXT, 0); };
    Object.defineProperty(Obs_textContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_obs_text; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Obs_textContext.prototype.enterRule = function (listener) {
        if (listener.enterObs_text) {
            listener.enterObs_text(this);
        }
    };
    // @Override
    Obs_textContext.prototype.exitRule = function (listener) {
        if (listener.exitObs_text) {
            listener.exitObs_text(this);
        }
    };
    // @Override
    Obs_textContext.prototype.accept = function (visitor) {
        if (visitor.visitObs_text) {
            return visitor.visitObs_text(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Obs_textContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Obs_textContext = Obs_textContext;
var Obs_foldContext = /** @class */ (function (_super) {
    __extends(Obs_foldContext, _super);
    function Obs_foldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Obs_foldContext.prototype.CRLF = function () { return this.getToken(httpParser.CRLF, 0); };
    Obs_foldContext.prototype.SP = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.SP);
        }
        else {
            return this.getToken(httpParser.SP, i);
        }
    };
    Obs_foldContext.prototype.HTAB = function (i) {
        if (i === undefined) {
            return this.getTokens(httpParser.HTAB);
        }
        else {
            return this.getToken(httpParser.HTAB, i);
        }
    };
    Object.defineProperty(Obs_foldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_obs_fold; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Obs_foldContext.prototype.enterRule = function (listener) {
        if (listener.enterObs_fold) {
            listener.enterObs_fold(this);
        }
    };
    // @Override
    Obs_foldContext.prototype.exitRule = function (listener) {
        if (listener.exitObs_fold) {
            listener.exitObs_fold(this);
        }
    };
    // @Override
    Obs_foldContext.prototype.accept = function (visitor) {
        if (visitor.visitObs_fold) {
            return visitor.visitObs_fold(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Obs_foldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Obs_foldContext = Obs_foldContext;
var PcharContext = /** @class */ (function (_super) {
    __extends(PcharContext, _super);
    function PcharContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PcharContext.prototype.unreserved = function () {
        return this.tryGetRuleContext(0, UnreservedContext);
    };
    PcharContext.prototype.Pct_encoded = function () { return this.tryGetToken(httpParser.Pct_encoded, 0); };
    PcharContext.prototype.sub_delims = function () {
        return this.tryGetRuleContext(0, Sub_delimsContext);
    };
    PcharContext.prototype.Colon = function () { return this.tryGetToken(httpParser.Colon, 0); };
    PcharContext.prototype.At = function () { return this.tryGetToken(httpParser.At, 0); };
    Object.defineProperty(PcharContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_pchar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PcharContext.prototype.enterRule = function (listener) {
        if (listener.enterPchar) {
            listener.enterPchar(this);
        }
    };
    // @Override
    PcharContext.prototype.exitRule = function (listener) {
        if (listener.exitPchar) {
            listener.exitPchar(this);
        }
    };
    // @Override
    PcharContext.prototype.accept = function (visitor) {
        if (visitor.visitPchar) {
            return visitor.visitPchar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PcharContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PcharContext = PcharContext;
var UnreservedContext = /** @class */ (function (_super) {
    __extends(UnreservedContext, _super);
    function UnreservedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnreservedContext.prototype.ALPHA = function () { return this.tryGetToken(httpParser.ALPHA, 0); };
    UnreservedContext.prototype.DIGIT = function () { return this.tryGetToken(httpParser.DIGIT, 0); };
    UnreservedContext.prototype.Minus = function () { return this.tryGetToken(httpParser.Minus, 0); };
    UnreservedContext.prototype.Dot = function () { return this.tryGetToken(httpParser.Dot, 0); };
    UnreservedContext.prototype.Underscore = function () { return this.tryGetToken(httpParser.Underscore, 0); };
    UnreservedContext.prototype.Tilde = function () { return this.tryGetToken(httpParser.Tilde, 0); };
    Object.defineProperty(UnreservedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_unreserved; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnreservedContext.prototype.enterRule = function (listener) {
        if (listener.enterUnreserved) {
            listener.enterUnreserved(this);
        }
    };
    // @Override
    UnreservedContext.prototype.exitRule = function (listener) {
        if (listener.exitUnreserved) {
            listener.exitUnreserved(this);
        }
    };
    // @Override
    UnreservedContext.prototype.accept = function (visitor) {
        if (visitor.visitUnreserved) {
            return visitor.visitUnreserved(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnreservedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnreservedContext = UnreservedContext;
var Sub_delimsContext = /** @class */ (function (_super) {
    __extends(Sub_delimsContext, _super);
    function Sub_delimsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Sub_delimsContext.prototype.ExclamationMark = function () { return this.tryGetToken(httpParser.ExclamationMark, 0); };
    Sub_delimsContext.prototype.DollarSign = function () { return this.tryGetToken(httpParser.DollarSign, 0); };
    Sub_delimsContext.prototype.Ampersand = function () { return this.tryGetToken(httpParser.Ampersand, 0); };
    Sub_delimsContext.prototype.SQuote = function () { return this.tryGetToken(httpParser.SQuote, 0); };
    Sub_delimsContext.prototype.LColumn = function () { return this.tryGetToken(httpParser.LColumn, 0); };
    Sub_delimsContext.prototype.RColumn = function () { return this.tryGetToken(httpParser.RColumn, 0); };
    Sub_delimsContext.prototype.Star = function () { return this.tryGetToken(httpParser.Star, 0); };
    Sub_delimsContext.prototype.Plus = function () { return this.tryGetToken(httpParser.Plus, 0); };
    Sub_delimsContext.prototype.SemiColon = function () { return this.tryGetToken(httpParser.SemiColon, 0); };
    Sub_delimsContext.prototype.Period = function () { return this.tryGetToken(httpParser.Period, 0); };
    Sub_delimsContext.prototype.Equals = function () { return this.tryGetToken(httpParser.Equals, 0); };
    Object.defineProperty(Sub_delimsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_sub_delims; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Sub_delimsContext.prototype.enterRule = function (listener) {
        if (listener.enterSub_delims) {
            listener.enterSub_delims(this);
        }
    };
    // @Override
    Sub_delimsContext.prototype.exitRule = function (listener) {
        if (listener.exitSub_delims) {
            listener.exitSub_delims(this);
        }
    };
    // @Override
    Sub_delimsContext.prototype.accept = function (visitor) {
        if (visitor.visitSub_delims) {
            return visitor.visitSub_delims(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Sub_delimsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Sub_delimsContext = Sub_delimsContext;
var TcharContext = /** @class */ (function (_super) {
    __extends(TcharContext, _super);
    function TcharContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TcharContext.prototype.ExclamationMark = function () { return this.tryGetToken(httpParser.ExclamationMark, 0); };
    TcharContext.prototype.DollarSign = function () { return this.tryGetToken(httpParser.DollarSign, 0); };
    TcharContext.prototype.Hashtag = function () { return this.tryGetToken(httpParser.Hashtag, 0); };
    TcharContext.prototype.Percent = function () { return this.tryGetToken(httpParser.Percent, 0); };
    TcharContext.prototype.Ampersand = function () { return this.tryGetToken(httpParser.Ampersand, 0); };
    TcharContext.prototype.SQuote = function () { return this.tryGetToken(httpParser.SQuote, 0); };
    TcharContext.prototype.Star = function () { return this.tryGetToken(httpParser.Star, 0); };
    TcharContext.prototype.Plus = function () { return this.tryGetToken(httpParser.Plus, 0); };
    TcharContext.prototype.Minus = function () { return this.tryGetToken(httpParser.Minus, 0); };
    TcharContext.prototype.Dot = function () { return this.tryGetToken(httpParser.Dot, 0); };
    TcharContext.prototype.Caret = function () { return this.tryGetToken(httpParser.Caret, 0); };
    TcharContext.prototype.Underscore = function () { return this.tryGetToken(httpParser.Underscore, 0); };
    TcharContext.prototype.BackQuote = function () { return this.tryGetToken(httpParser.BackQuote, 0); };
    TcharContext.prototype.VBar = function () { return this.tryGetToken(httpParser.VBar, 0); };
    TcharContext.prototype.Tilde = function () { return this.tryGetToken(httpParser.Tilde, 0); };
    TcharContext.prototype.DIGIT = function () { return this.tryGetToken(httpParser.DIGIT, 0); };
    TcharContext.prototype.ALPHA = function () { return this.tryGetToken(httpParser.ALPHA, 0); };
    Object.defineProperty(TcharContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_tchar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TcharContext.prototype.enterRule = function (listener) {
        if (listener.enterTchar) {
            listener.enterTchar(this);
        }
    };
    // @Override
    TcharContext.prototype.exitRule = function (listener) {
        if (listener.exitTchar) {
            listener.exitTchar(this);
        }
    };
    // @Override
    TcharContext.prototype.accept = function (visitor) {
        if (visitor.visitTchar) {
            return visitor.visitTchar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TcharContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TcharContext = TcharContext;
var VCHARContext = /** @class */ (function (_super) {
    __extends(VCHARContext, _super);
    function VCHARContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VCHARContext.prototype.ALPHA = function () { return this.tryGetToken(httpParser.ALPHA, 0); };
    VCHARContext.prototype.DIGIT = function () { return this.tryGetToken(httpParser.DIGIT, 0); };
    VCHARContext.prototype.VCHAR = function () { return this.tryGetToken(httpParser.VCHAR, 0); };
    Object.defineProperty(VCHARContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return httpParser.RULE_vCHAR; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VCHARContext.prototype.enterRule = function (listener) {
        if (listener.enterVCHAR) {
            listener.enterVCHAR(this);
        }
    };
    // @Override
    VCHARContext.prototype.exitRule = function (listener) {
        if (listener.exitVCHAR) {
            listener.exitVCHAR(this);
        }
    };
    // @Override
    VCHARContext.prototype.accept = function (visitor) {
        if (visitor.visitVCHAR) {
            return visitor.visitVCHAR(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VCHARContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VCHARContext = VCHARContext;
