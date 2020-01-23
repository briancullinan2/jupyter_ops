"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/html/HTMLParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var HTMLParser = /** @class */ (function (_super) {
    __extends(HTMLParser, _super);
    function HTMLParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(HTMLParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(HTMLParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return HTMLParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTMLParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "HTMLParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTMLParser.prototype, "ruleNames", {
        // @Override
        get: function () { return HTMLParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTMLParser.prototype, "serializedATN", {
        // @Override
        get: function () { return HTMLParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    HTMLParser.prototype.htmlDocument = function () {
        var _localctx = new HtmlDocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, HTMLParser.RULE_htmlDocument);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 36;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case HTMLParser.SCRIPTLET:
                                    {
                                        this.state = 34;
                                        this.scriptlet();
                                    }
                                    break;
                                case HTMLParser.SEA_WS:
                                    {
                                        this.state = 35;
                                        this.match(HTMLParser.SEA_WS);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 40;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                }
                this.state = 42;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === HTMLParser.XML_DECLARATION) {
                    {
                        this.state = 41;
                        this.xml();
                    }
                }
                this.state = 48;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 46;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case HTMLParser.SCRIPTLET:
                                    {
                                        this.state = 44;
                                        this.scriptlet();
                                    }
                                    break;
                                case HTMLParser.SEA_WS:
                                    {
                                        this.state = 45;
                                        this.match(HTMLParser.SEA_WS);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 50;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === HTMLParser.DTD) {
                    {
                        this.state = 51;
                        this.dtd();
                    }
                }
                this.state = 58;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 56;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case HTMLParser.SCRIPTLET:
                                    {
                                        this.state = 54;
                                        this.scriptlet();
                                    }
                                    break;
                                case HTMLParser.SEA_WS:
                                    {
                                        this.state = 55;
                                        this.match(HTMLParser.SEA_WS);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 60;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                }
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HTMLParser.HTML_COMMENT) | (1 << HTMLParser.HTML_CONDITIONAL_COMMENT) | (1 << HTMLParser.SCRIPTLET) | (1 << HTMLParser.SEA_WS) | (1 << HTMLParser.SCRIPT_OPEN) | (1 << HTMLParser.STYLE_OPEN) | (1 << HTMLParser.TAG_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 61;
                            this.htmlElements();
                        }
                    }
                    this.state = 66;
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
    HTMLParser.prototype.htmlElements = function () {
        var _localctx = new HtmlElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, HTMLParser.RULE_htmlElements);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HTMLParser.HTML_COMMENT) | (1 << HTMLParser.HTML_CONDITIONAL_COMMENT) | (1 << HTMLParser.SEA_WS))) !== 0)) {
                    {
                        {
                            this.state = 67;
                            this.htmlMisc();
                        }
                    }
                    this.state = 72;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 73;
                this.htmlElement();
                this.state = 77;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 74;
                                this.htmlMisc();
                            }
                        }
                    }
                    this.state = 79;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
    HTMLParser.prototype.htmlElement = function () {
        var _localctx = new HtmlElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, HTMLParser.RULE_htmlElement);
        var _la;
        try {
            this.state = 118;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 80;
                        this.match(HTMLParser.TAG_OPEN);
                        this.state = 81;
                        this.htmlTagName();
                        this.state = 85;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === HTMLParser.TAG_NAME) {
                            {
                                {
                                    this.state = 82;
                                    this.htmlAttribute();
                                }
                            }
                            this.state = 87;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 88;
                        this.match(HTMLParser.TAG_CLOSE);
                        this.state = 89;
                        this.htmlContent();
                        this.state = 90;
                        this.match(HTMLParser.TAG_OPEN);
                        this.state = 91;
                        this.match(HTMLParser.TAG_SLASH);
                        this.state = 92;
                        this.htmlTagName();
                        this.state = 93;
                        this.match(HTMLParser.TAG_CLOSE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 95;
                        this.match(HTMLParser.TAG_OPEN);
                        this.state = 96;
                        this.htmlTagName();
                        this.state = 100;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === HTMLParser.TAG_NAME) {
                            {
                                {
                                    this.state = 97;
                                    this.htmlAttribute();
                                }
                            }
                            this.state = 102;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 103;
                        this.match(HTMLParser.TAG_SLASH_CLOSE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 105;
                        this.match(HTMLParser.TAG_OPEN);
                        this.state = 106;
                        this.htmlTagName();
                        this.state = 110;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === HTMLParser.TAG_NAME) {
                            {
                                {
                                    this.state = 107;
                                    this.htmlAttribute();
                                }
                            }
                            this.state = 112;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 113;
                        this.match(HTMLParser.TAG_CLOSE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 115;
                        this.scriptlet();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 116;
                        this.script();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 117;
                        this.style();
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
    HTMLParser.prototype.htmlContent = function () {
        var _localctx = new HtmlContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, HTMLParser.RULE_htmlContent);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === HTMLParser.SEA_WS || _la === HTMLParser.HTML_TEXT) {
                    {
                        this.state = 120;
                        this.htmlChardata();
                    }
                }
                this.state = 133;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 126;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case HTMLParser.SCRIPTLET:
                                    case HTMLParser.SCRIPT_OPEN:
                                    case HTMLParser.STYLE_OPEN:
                                    case HTMLParser.TAG_OPEN:
                                        {
                                            this.state = 123;
                                            this.htmlElement();
                                        }
                                        break;
                                    case HTMLParser.CDATA:
                                        {
                                            this.state = 124;
                                            this.xhtmlCDATA();
                                        }
                                        break;
                                    case HTMLParser.HTML_COMMENT:
                                    case HTMLParser.HTML_CONDITIONAL_COMMENT:
                                        {
                                            this.state = 125;
                                            this.htmlComment();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 129;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === HTMLParser.SEA_WS || _la === HTMLParser.HTML_TEXT) {
                                    {
                                        this.state = 128;
                                        this.htmlChardata();
                                    }
                                }
                            }
                        }
                    }
                    this.state = 135;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
    HTMLParser.prototype.htmlAttribute = function () {
        var _localctx = new HtmlAttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, HTMLParser.RULE_htmlAttribute);
        try {
            this.state = 141;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 136;
                        this.htmlAttributeName();
                        this.state = 137;
                        this.match(HTMLParser.TAG_EQUALS);
                        this.state = 138;
                        this.htmlAttributeValue();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 140;
                        this.htmlAttributeName();
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
    HTMLParser.prototype.htmlAttributeName = function () {
        var _localctx = new HtmlAttributeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, HTMLParser.RULE_htmlAttributeName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.match(HTMLParser.TAG_NAME);
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
    HTMLParser.prototype.htmlAttributeValue = function () {
        var _localctx = new HtmlAttributeValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, HTMLParser.RULE_htmlAttributeValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.match(HTMLParser.ATTVALUE_VALUE);
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
    HTMLParser.prototype.htmlTagName = function () {
        var _localctx = new HtmlTagNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, HTMLParser.RULE_htmlTagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(HTMLParser.TAG_NAME);
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
    HTMLParser.prototype.htmlChardata = function () {
        var _localctx = new HtmlChardataContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, HTMLParser.RULE_htmlChardata);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                _la = this._input.LA(1);
                if (!(_la === HTMLParser.SEA_WS || _la === HTMLParser.HTML_TEXT)) {
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
    HTMLParser.prototype.htmlMisc = function () {
        var _localctx = new HtmlMiscContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, HTMLParser.RULE_htmlMisc);
        try {
            this.state = 153;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HTMLParser.HTML_COMMENT:
                case HTMLParser.HTML_CONDITIONAL_COMMENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 151;
                        this.htmlComment();
                    }
                    break;
                case HTMLParser.SEA_WS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 152;
                        this.match(HTMLParser.SEA_WS);
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
    HTMLParser.prototype.htmlComment = function () {
        var _localctx = new HtmlCommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, HTMLParser.RULE_htmlComment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 155;
                _la = this._input.LA(1);
                if (!(_la === HTMLParser.HTML_COMMENT || _la === HTMLParser.HTML_CONDITIONAL_COMMENT)) {
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
    HTMLParser.prototype.xhtmlCDATA = function () {
        var _localctx = new XhtmlCDATAContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, HTMLParser.RULE_xhtmlCDATA);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(HTMLParser.CDATA);
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
    HTMLParser.prototype.dtd = function () {
        var _localctx = new DtdContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, HTMLParser.RULE_dtd);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 159;
                this.match(HTMLParser.DTD);
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
    HTMLParser.prototype.xml = function () {
        var _localctx = new XmlContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, HTMLParser.RULE_xml);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this.match(HTMLParser.XML_DECLARATION);
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
    HTMLParser.prototype.scriptlet = function () {
        var _localctx = new ScriptletContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, HTMLParser.RULE_scriptlet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.match(HTMLParser.SCRIPTLET);
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
    HTMLParser.prototype.script = function () {
        var _localctx = new ScriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, HTMLParser.RULE_script);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this.match(HTMLParser.SCRIPT_OPEN);
                this.state = 166;
                _la = this._input.LA(1);
                if (!(_la === HTMLParser.SCRIPT_BODY || _la === HTMLParser.SCRIPT_SHORT_BODY)) {
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
    HTMLParser.prototype.style = function () {
        var _localctx = new StyleContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, HTMLParser.RULE_style);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                this.match(HTMLParser.STYLE_OPEN);
                this.state = 169;
                _la = this._input.LA(1);
                if (!(_la === HTMLParser.STYLE_BODY || _la === HTMLParser.STYLE_SHORT_BODY)) {
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
    Object.defineProperty(HTMLParser, "_ATN", {
        get: function () {
            if (!HTMLParser.__ATN) {
                HTMLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(HTMLParser._serializedATN));
            }
            return HTMLParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    HTMLParser.HTML_COMMENT = 1;
    HTMLParser.HTML_CONDITIONAL_COMMENT = 2;
    HTMLParser.XML_DECLARATION = 3;
    HTMLParser.CDATA = 4;
    HTMLParser.DTD = 5;
    HTMLParser.SCRIPTLET = 6;
    HTMLParser.SEA_WS = 7;
    HTMLParser.SCRIPT_OPEN = 8;
    HTMLParser.STYLE_OPEN = 9;
    HTMLParser.TAG_OPEN = 10;
    HTMLParser.HTML_TEXT = 11;
    HTMLParser.TAG_CLOSE = 12;
    HTMLParser.TAG_SLASH_CLOSE = 13;
    HTMLParser.TAG_SLASH = 14;
    HTMLParser.TAG_EQUALS = 15;
    HTMLParser.TAG_NAME = 16;
    HTMLParser.TAG_WHITESPACE = 17;
    HTMLParser.SCRIPT_BODY = 18;
    HTMLParser.SCRIPT_SHORT_BODY = 19;
    HTMLParser.STYLE_BODY = 20;
    HTMLParser.STYLE_SHORT_BODY = 21;
    HTMLParser.ATTVALUE_VALUE = 22;
    HTMLParser.ATTRIBUTE = 23;
    HTMLParser.RULE_htmlDocument = 0;
    HTMLParser.RULE_htmlElements = 1;
    HTMLParser.RULE_htmlElement = 2;
    HTMLParser.RULE_htmlContent = 3;
    HTMLParser.RULE_htmlAttribute = 4;
    HTMLParser.RULE_htmlAttributeName = 5;
    HTMLParser.RULE_htmlAttributeValue = 6;
    HTMLParser.RULE_htmlTagName = 7;
    HTMLParser.RULE_htmlChardata = 8;
    HTMLParser.RULE_htmlMisc = 9;
    HTMLParser.RULE_htmlComment = 10;
    HTMLParser.RULE_xhtmlCDATA = 11;
    HTMLParser.RULE_dtd = 12;
    HTMLParser.RULE_xml = 13;
    HTMLParser.RULE_scriptlet = 14;
    HTMLParser.RULE_script = 15;
    HTMLParser.RULE_style = 16;
    // tslint:disable:no-trailing-whitespace
    HTMLParser.ruleNames = [
        "htmlDocument", "htmlElements", "htmlElement", "htmlContent", "htmlAttribute",
        "htmlAttributeName", "htmlAttributeValue", "htmlTagName", "htmlChardata",
        "htmlMisc", "htmlComment", "xhtmlCDATA", "dtd", "xml", "scriptlet", "script",
        "style",
    ];
    HTMLParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'<'", undefined, "'>'", "'/>'", "'/'",
        "'='",
    ];
    HTMLParser._SYMBOLIC_NAMES = [
        undefined, "HTML_COMMENT", "HTML_CONDITIONAL_COMMENT", "XML_DECLARATION",
        "CDATA", "DTD", "SCRIPTLET", "SEA_WS", "SCRIPT_OPEN", "STYLE_OPEN", "TAG_OPEN",
        "HTML_TEXT", "TAG_CLOSE", "TAG_SLASH_CLOSE", "TAG_SLASH", "TAG_EQUALS",
        "TAG_NAME", "TAG_WHITESPACE", "SCRIPT_BODY", "SCRIPT_SHORT_BODY", "STYLE_BODY",
        "STYLE_SHORT_BODY", "ATTVALUE_VALUE", "ATTRIBUTE",
    ];
    HTMLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(HTMLParser._LITERAL_NAMES, HTMLParser._SYMBOLIC_NAMES, []);
    HTMLParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\xAE\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
        "\x02\x03\x02\x07\x02\'\n\x02\f\x02\x0E\x02*\v\x02\x03\x02\x05\x02-\n\x02" +
        "\x03\x02\x03\x02\x07\x021\n\x02\f\x02\x0E\x024\v\x02\x03\x02\x05\x027" +
        "\n\x02\x03\x02\x03\x02\x07\x02;\n\x02\f\x02\x0E\x02>\v\x02\x03\x02\x07" +
        "\x02A\n\x02\f\x02\x0E\x02D\v\x02\x03\x03\x07\x03G\n\x03\f\x03\x0E\x03" +
        "J\v\x03\x03\x03\x03\x03\x07\x03N\n\x03\f\x03\x0E\x03Q\v\x03\x03\x04\x03" +
        "\x04\x03\x04\x07\x04V\n\x04\f\x04\x0E\x04Y\v\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04e\n\x04" +
        "\f\x04\x0E\x04h\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
        "o\n\x04\f\x04\x0E\x04r\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
        "\x04y\n\x04\x03\x05\x05\x05|\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\x81" +
        "\n\x05\x03\x05\x05\x05\x84\n\x05\x07\x05\x86\n\x05\f\x05\x0E\x05\x89\v" +
        "\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x90\n\x06\x03\x07" +
        "\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x05\v\x9C\n\v" +
        "\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10" +
        "\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x06\x04\x02" +
        "\t\t\r\r\x03\x02\x03\x04\x03\x02\x14\x15\x03\x02\x16\x17\x02\xB6\x02(" +
        "\x03\x02\x02\x02\x04H\x03\x02\x02\x02\x06x\x03\x02\x02\x02\b{\x03\x02" +
        "\x02\x02\n\x8F\x03\x02\x02\x02\f\x91\x03\x02\x02\x02\x0E\x93\x03\x02\x02" +
        "\x02\x10\x95\x03\x02\x02\x02\x12\x97\x03\x02\x02\x02\x14\x9B\x03\x02\x02" +
        "\x02\x16\x9D\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xA1\x03\x02\x02" +
        "\x02\x1C\xA3\x03\x02\x02\x02\x1E\xA5\x03\x02\x02\x02 \xA7\x03\x02\x02" +
        "\x02\"\xAA\x03\x02\x02\x02$\'\x05\x1E\x10\x02%\'\x07\t\x02\x02&$\x03\x02" +
        "\x02\x02&%\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03" +
        "\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02+-\x05\x1C\x0F\x02,+\x03" +
        "\x02\x02\x02,-\x03\x02\x02\x02-2\x03\x02\x02\x02.1\x05\x1E\x10\x02/1\x07" +
        "\t\x02\x020.\x03\x02\x02\x020/\x03\x02\x02\x0214\x03\x02\x02\x0220\x03" +
        "\x02\x02\x0223\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0257\x05" +
        "\x1A\x0E\x0265\x03\x02\x02\x0267\x03\x02\x02\x027<\x03\x02\x02\x028;\x05" +
        "\x1E\x10\x029;\x07\t\x02\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;>\x03" +
        "\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=B\x03\x02\x02\x02><\x03" +
        "\x02\x02\x02?A\x05\x04\x03\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03" +
        "\x02\x02\x02BC\x03\x02\x02\x02C\x03\x03\x02\x02\x02DB\x03\x02\x02\x02" +
        "EG\x05\x14\v\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02" +
        "HI\x03\x02\x02\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02KO\x05\x06\x04\x02" +
        "LN\x05\x14\v\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02" +
        "OP\x03\x02\x02\x02P\x05\x03\x02\x02\x02QO\x03\x02\x02\x02RS\x07\f\x02" +
        "\x02SW\x05\x10\t\x02TV\x05\n\x06\x02UT\x03\x02\x02\x02VY\x03\x02\x02\x02" +
        "WU\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02\x02" +
        "Z[\x07\x0E\x02\x02[\\\x05\b\x05\x02\\]\x07\f\x02\x02]^\x07\x10\x02\x02" +
        "^_\x05\x10\t\x02_`\x07\x0E\x02\x02`y\x03\x02\x02\x02ab\x07\f\x02\x02b" +
        "f\x05\x10\t\x02ce\x05\n\x06\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02fd" +
        "\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03\x02\x02\x02" +
        "ij\x07\x0F\x02\x02jy\x03\x02\x02\x02kl\x07\f\x02\x02lp\x05\x10\t\x02m" +
        "o\x05\n\x06\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02" +
        "pq\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02\x02st\x07\x0E\x02\x02" +
        "ty\x03\x02\x02\x02uy\x05\x1E\x10\x02vy\x05 \x11\x02wy\x05\"\x12\x02xR" +
        "\x03\x02\x02\x02xa\x03\x02\x02\x02xk\x03\x02\x02\x02xu\x03\x02\x02\x02" +
        "xv\x03\x02\x02\x02xw\x03\x02\x02\x02y\x07\x03\x02\x02\x02z|\x05\x12\n" +
        "\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|\x87\x03\x02\x02\x02}\x81\x05" +
        "\x06\x04\x02~\x81\x05\x18\r\x02\x7F\x81\x05\x16\f\x02\x80}\x03\x02\x02" +
        "\x02\x80~\x03\x02\x02\x02\x80\x7F\x03\x02\x02\x02\x81\x83\x03\x02\x02" +
        "\x02\x82\x84\x05\x12\n\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02" +
        "\x02\x84\x86\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x86\x89\x03\x02\x02" +
        "\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\t\x03\x02\x02" +
        "\x02\x89\x87\x03\x02\x02\x02\x8A\x8B\x05\f\x07\x02\x8B\x8C\x07\x11\x02" +
        "\x02\x8C\x8D\x05\x0E\b\x02\x8D\x90\x03\x02\x02\x02\x8E\x90\x05\f\x07\x02" +
        "\x8F\x8A\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\v\x03\x02\x02\x02" +
        "\x91\x92\x07\x12\x02\x02\x92\r\x03\x02\x02\x02\x93\x94\x07\x18\x02\x02" +
        "\x94\x0F\x03\x02\x02\x02\x95\x96\x07\x12\x02\x02\x96\x11\x03\x02\x02\x02" +
        "\x97\x98\t\x02\x02\x02\x98\x13\x03\x02\x02\x02\x99\x9C\x05\x16\f\x02\x9A" +
        "\x9C\x07\t\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C" +
        "\x15\x03\x02\x02\x02\x9D\x9E\t\x03\x02\x02\x9E\x17\x03\x02\x02\x02\x9F" +
        "\xA0\x07\x06\x02\x02\xA0\x19\x03\x02\x02\x02\xA1\xA2\x07\x07\x02\x02\xA2" +
        "\x1B\x03\x02\x02\x02\xA3\xA4\x07\x05\x02\x02\xA4\x1D\x03\x02\x02\x02\xA5" +
        "\xA6\x07\b\x02\x02\xA6\x1F\x03\x02\x02\x02\xA7\xA8\x07\n\x02\x02\xA8\xA9" +
        "\t\x04\x02\x02\xA9!\x03\x02\x02\x02\xAA\xAB\x07\v\x02\x02\xAB\xAC\t\x05" +
        "\x02\x02\xAC#\x03\x02\x02\x02\x17&(,026:<BHOWfpx{\x80\x83\x87\x8F\x9B";
    return HTMLParser;
}(Parser_1.Parser));
exports.HTMLParser = HTMLParser;
var HtmlDocumentContext = /** @class */ (function (_super) {
    __extends(HtmlDocumentContext, _super);
    function HtmlDocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlDocumentContext.prototype.scriptlet = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ScriptletContext);
        }
        else {
            return this.getRuleContext(i, ScriptletContext);
        }
    };
    HtmlDocumentContext.prototype.SEA_WS = function (i) {
        if (i === undefined) {
            return this.getTokens(HTMLParser.SEA_WS);
        }
        else {
            return this.getToken(HTMLParser.SEA_WS, i);
        }
    };
    HtmlDocumentContext.prototype.xml = function () {
        return this.tryGetRuleContext(0, XmlContext);
    };
    HtmlDocumentContext.prototype.dtd = function () {
        return this.tryGetRuleContext(0, DtdContext);
    };
    HtmlDocumentContext.prototype.htmlElements = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlElementsContext);
        }
        else {
            return this.getRuleContext(i, HtmlElementsContext);
        }
    };
    Object.defineProperty(HtmlDocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlDocument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlDocumentContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlDocument) {
            listener.enterHtmlDocument(this);
        }
    };
    // @Override
    HtmlDocumentContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlDocument) {
            listener.exitHtmlDocument(this);
        }
    };
    // @Override
    HtmlDocumentContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlDocument) {
            return visitor.visitHtmlDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlDocumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlDocumentContext = HtmlDocumentContext;
var HtmlElementsContext = /** @class */ (function (_super) {
    __extends(HtmlElementsContext, _super);
    function HtmlElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlElementsContext.prototype.htmlElement = function () {
        return this.getRuleContext(0, HtmlElementContext);
    };
    HtmlElementsContext.prototype.htmlMisc = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlMiscContext);
        }
        else {
            return this.getRuleContext(i, HtmlMiscContext);
        }
    };
    Object.defineProperty(HtmlElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlElements) {
            listener.enterHtmlElements(this);
        }
    };
    // @Override
    HtmlElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlElements) {
            listener.exitHtmlElements(this);
        }
    };
    // @Override
    HtmlElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlElements) {
            return visitor.visitHtmlElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlElementsContext = HtmlElementsContext;
var HtmlElementContext = /** @class */ (function (_super) {
    __extends(HtmlElementContext, _super);
    function HtmlElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlElementContext.prototype.TAG_OPEN = function (i) {
        if (i === undefined) {
            return this.getTokens(HTMLParser.TAG_OPEN);
        }
        else {
            return this.getToken(HTMLParser.TAG_OPEN, i);
        }
    };
    HtmlElementContext.prototype.htmlTagName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlTagNameContext);
        }
        else {
            return this.getRuleContext(i, HtmlTagNameContext);
        }
    };
    HtmlElementContext.prototype.TAG_CLOSE = function (i) {
        if (i === undefined) {
            return this.getTokens(HTMLParser.TAG_CLOSE);
        }
        else {
            return this.getToken(HTMLParser.TAG_CLOSE, i);
        }
    };
    HtmlElementContext.prototype.htmlContent = function () {
        return this.tryGetRuleContext(0, HtmlContentContext);
    };
    HtmlElementContext.prototype.TAG_SLASH = function () { return this.tryGetToken(HTMLParser.TAG_SLASH, 0); };
    HtmlElementContext.prototype.htmlAttribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlAttributeContext);
        }
        else {
            return this.getRuleContext(i, HtmlAttributeContext);
        }
    };
    HtmlElementContext.prototype.TAG_SLASH_CLOSE = function () { return this.tryGetToken(HTMLParser.TAG_SLASH_CLOSE, 0); };
    HtmlElementContext.prototype.scriptlet = function () {
        return this.tryGetRuleContext(0, ScriptletContext);
    };
    HtmlElementContext.prototype.script = function () {
        return this.tryGetRuleContext(0, ScriptContext);
    };
    HtmlElementContext.prototype.style = function () {
        return this.tryGetRuleContext(0, StyleContext);
    };
    Object.defineProperty(HtmlElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlElementContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlElement) {
            listener.enterHtmlElement(this);
        }
    };
    // @Override
    HtmlElementContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlElement) {
            listener.exitHtmlElement(this);
        }
    };
    // @Override
    HtmlElementContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlElement) {
            return visitor.visitHtmlElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlElementContext = HtmlElementContext;
var HtmlContentContext = /** @class */ (function (_super) {
    __extends(HtmlContentContext, _super);
    function HtmlContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlContentContext.prototype.htmlChardata = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlChardataContext);
        }
        else {
            return this.getRuleContext(i, HtmlChardataContext);
        }
    };
    HtmlContentContext.prototype.htmlElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlElementContext);
        }
        else {
            return this.getRuleContext(i, HtmlElementContext);
        }
    };
    HtmlContentContext.prototype.xhtmlCDATA = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(XhtmlCDATAContext);
        }
        else {
            return this.getRuleContext(i, XhtmlCDATAContext);
        }
    };
    HtmlContentContext.prototype.htmlComment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HtmlCommentContext);
        }
        else {
            return this.getRuleContext(i, HtmlCommentContext);
        }
    };
    Object.defineProperty(HtmlContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlContent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlContentContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlContent) {
            listener.enterHtmlContent(this);
        }
    };
    // @Override
    HtmlContentContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlContent) {
            listener.exitHtmlContent(this);
        }
    };
    // @Override
    HtmlContentContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlContent) {
            return visitor.visitHtmlContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlContentContext = HtmlContentContext;
var HtmlAttributeContext = /** @class */ (function (_super) {
    __extends(HtmlAttributeContext, _super);
    function HtmlAttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlAttributeContext.prototype.htmlAttributeName = function () {
        return this.getRuleContext(0, HtmlAttributeNameContext);
    };
    HtmlAttributeContext.prototype.TAG_EQUALS = function () { return this.tryGetToken(HTMLParser.TAG_EQUALS, 0); };
    HtmlAttributeContext.prototype.htmlAttributeValue = function () {
        return this.tryGetRuleContext(0, HtmlAttributeValueContext);
    };
    Object.defineProperty(HtmlAttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlAttribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlAttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlAttribute) {
            listener.enterHtmlAttribute(this);
        }
    };
    // @Override
    HtmlAttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlAttribute) {
            listener.exitHtmlAttribute(this);
        }
    };
    // @Override
    HtmlAttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlAttribute) {
            return visitor.visitHtmlAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlAttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlAttributeContext = HtmlAttributeContext;
var HtmlAttributeNameContext = /** @class */ (function (_super) {
    __extends(HtmlAttributeNameContext, _super);
    function HtmlAttributeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlAttributeNameContext.prototype.TAG_NAME = function () { return this.getToken(HTMLParser.TAG_NAME, 0); };
    Object.defineProperty(HtmlAttributeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlAttributeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlAttributeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlAttributeName) {
            listener.enterHtmlAttributeName(this);
        }
    };
    // @Override
    HtmlAttributeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlAttributeName) {
            listener.exitHtmlAttributeName(this);
        }
    };
    // @Override
    HtmlAttributeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlAttributeName) {
            return visitor.visitHtmlAttributeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlAttributeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlAttributeNameContext = HtmlAttributeNameContext;
var HtmlAttributeValueContext = /** @class */ (function (_super) {
    __extends(HtmlAttributeValueContext, _super);
    function HtmlAttributeValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlAttributeValueContext.prototype.ATTVALUE_VALUE = function () { return this.getToken(HTMLParser.ATTVALUE_VALUE, 0); };
    Object.defineProperty(HtmlAttributeValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlAttributeValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlAttributeValueContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlAttributeValue) {
            listener.enterHtmlAttributeValue(this);
        }
    };
    // @Override
    HtmlAttributeValueContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlAttributeValue) {
            listener.exitHtmlAttributeValue(this);
        }
    };
    // @Override
    HtmlAttributeValueContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlAttributeValue) {
            return visitor.visitHtmlAttributeValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlAttributeValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlAttributeValueContext = HtmlAttributeValueContext;
var HtmlTagNameContext = /** @class */ (function (_super) {
    __extends(HtmlTagNameContext, _super);
    function HtmlTagNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlTagNameContext.prototype.TAG_NAME = function () { return this.getToken(HTMLParser.TAG_NAME, 0); };
    Object.defineProperty(HtmlTagNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlTagName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlTagNameContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlTagName) {
            listener.enterHtmlTagName(this);
        }
    };
    // @Override
    HtmlTagNameContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlTagName) {
            listener.exitHtmlTagName(this);
        }
    };
    // @Override
    HtmlTagNameContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlTagName) {
            return visitor.visitHtmlTagName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlTagNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlTagNameContext = HtmlTagNameContext;
var HtmlChardataContext = /** @class */ (function (_super) {
    __extends(HtmlChardataContext, _super);
    function HtmlChardataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlChardataContext.prototype.HTML_TEXT = function () { return this.tryGetToken(HTMLParser.HTML_TEXT, 0); };
    HtmlChardataContext.prototype.SEA_WS = function () { return this.tryGetToken(HTMLParser.SEA_WS, 0); };
    Object.defineProperty(HtmlChardataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlChardata; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlChardataContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlChardata) {
            listener.enterHtmlChardata(this);
        }
    };
    // @Override
    HtmlChardataContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlChardata) {
            listener.exitHtmlChardata(this);
        }
    };
    // @Override
    HtmlChardataContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlChardata) {
            return visitor.visitHtmlChardata(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlChardataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlChardataContext = HtmlChardataContext;
var HtmlMiscContext = /** @class */ (function (_super) {
    __extends(HtmlMiscContext, _super);
    function HtmlMiscContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlMiscContext.prototype.htmlComment = function () {
        return this.tryGetRuleContext(0, HtmlCommentContext);
    };
    HtmlMiscContext.prototype.SEA_WS = function () { return this.tryGetToken(HTMLParser.SEA_WS, 0); };
    Object.defineProperty(HtmlMiscContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlMisc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlMiscContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlMisc) {
            listener.enterHtmlMisc(this);
        }
    };
    // @Override
    HtmlMiscContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlMisc) {
            listener.exitHtmlMisc(this);
        }
    };
    // @Override
    HtmlMiscContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlMisc) {
            return visitor.visitHtmlMisc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlMiscContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlMiscContext = HtmlMiscContext;
var HtmlCommentContext = /** @class */ (function (_super) {
    __extends(HtmlCommentContext, _super);
    function HtmlCommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HtmlCommentContext.prototype.HTML_COMMENT = function () { return this.tryGetToken(HTMLParser.HTML_COMMENT, 0); };
    HtmlCommentContext.prototype.HTML_CONDITIONAL_COMMENT = function () { return this.tryGetToken(HTMLParser.HTML_CONDITIONAL_COMMENT, 0); };
    Object.defineProperty(HtmlCommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_htmlComment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HtmlCommentContext.prototype.enterRule = function (listener) {
        if (listener.enterHtmlComment) {
            listener.enterHtmlComment(this);
        }
    };
    // @Override
    HtmlCommentContext.prototype.exitRule = function (listener) {
        if (listener.exitHtmlComment) {
            listener.exitHtmlComment(this);
        }
    };
    // @Override
    HtmlCommentContext.prototype.accept = function (visitor) {
        if (visitor.visitHtmlComment) {
            return visitor.visitHtmlComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HtmlCommentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HtmlCommentContext = HtmlCommentContext;
var XhtmlCDATAContext = /** @class */ (function (_super) {
    __extends(XhtmlCDATAContext, _super);
    function XhtmlCDATAContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    XhtmlCDATAContext.prototype.CDATA = function () { return this.getToken(HTMLParser.CDATA, 0); };
    Object.defineProperty(XhtmlCDATAContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_xhtmlCDATA; },
        enumerable: true,
        configurable: true
    });
    // @Override
    XhtmlCDATAContext.prototype.enterRule = function (listener) {
        if (listener.enterXhtmlCDATA) {
            listener.enterXhtmlCDATA(this);
        }
    };
    // @Override
    XhtmlCDATAContext.prototype.exitRule = function (listener) {
        if (listener.exitXhtmlCDATA) {
            listener.exitXhtmlCDATA(this);
        }
    };
    // @Override
    XhtmlCDATAContext.prototype.accept = function (visitor) {
        if (visitor.visitXhtmlCDATA) {
            return visitor.visitXhtmlCDATA(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return XhtmlCDATAContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.XhtmlCDATAContext = XhtmlCDATAContext;
var DtdContext = /** @class */ (function (_super) {
    __extends(DtdContext, _super);
    function DtdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DtdContext.prototype.DTD = function () { return this.getToken(HTMLParser.DTD, 0); };
    Object.defineProperty(DtdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_dtd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DtdContext.prototype.enterRule = function (listener) {
        if (listener.enterDtd) {
            listener.enterDtd(this);
        }
    };
    // @Override
    DtdContext.prototype.exitRule = function (listener) {
        if (listener.exitDtd) {
            listener.exitDtd(this);
        }
    };
    // @Override
    DtdContext.prototype.accept = function (visitor) {
        if (visitor.visitDtd) {
            return visitor.visitDtd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DtdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DtdContext = DtdContext;
var XmlContext = /** @class */ (function (_super) {
    __extends(XmlContext, _super);
    function XmlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    XmlContext.prototype.XML_DECLARATION = function () { return this.getToken(HTMLParser.XML_DECLARATION, 0); };
    Object.defineProperty(XmlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_xml; },
        enumerable: true,
        configurable: true
    });
    // @Override
    XmlContext.prototype.enterRule = function (listener) {
        if (listener.enterXml) {
            listener.enterXml(this);
        }
    };
    // @Override
    XmlContext.prototype.exitRule = function (listener) {
        if (listener.exitXml) {
            listener.exitXml(this);
        }
    };
    // @Override
    XmlContext.prototype.accept = function (visitor) {
        if (visitor.visitXml) {
            return visitor.visitXml(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return XmlContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.XmlContext = XmlContext;
var ScriptletContext = /** @class */ (function (_super) {
    __extends(ScriptletContext, _super);
    function ScriptletContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptletContext.prototype.SCRIPTLET = function () { return this.getToken(HTMLParser.SCRIPTLET, 0); };
    Object.defineProperty(ScriptletContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_scriptlet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScriptletContext.prototype.enterRule = function (listener) {
        if (listener.enterScriptlet) {
            listener.enterScriptlet(this);
        }
    };
    // @Override
    ScriptletContext.prototype.exitRule = function (listener) {
        if (listener.exitScriptlet) {
            listener.exitScriptlet(this);
        }
    };
    // @Override
    ScriptletContext.prototype.accept = function (visitor) {
        if (visitor.visitScriptlet) {
            return visitor.visitScriptlet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScriptletContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScriptletContext = ScriptletContext;
var ScriptContext = /** @class */ (function (_super) {
    __extends(ScriptContext, _super);
    function ScriptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptContext.prototype.SCRIPT_OPEN = function () { return this.getToken(HTMLParser.SCRIPT_OPEN, 0); };
    ScriptContext.prototype.SCRIPT_BODY = function () { return this.tryGetToken(HTMLParser.SCRIPT_BODY, 0); };
    ScriptContext.prototype.SCRIPT_SHORT_BODY = function () { return this.tryGetToken(HTMLParser.SCRIPT_SHORT_BODY, 0); };
    Object.defineProperty(ScriptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_script; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScriptContext.prototype.enterRule = function (listener) {
        if (listener.enterScript) {
            listener.enterScript(this);
        }
    };
    // @Override
    ScriptContext.prototype.exitRule = function (listener) {
        if (listener.exitScript) {
            listener.exitScript(this);
        }
    };
    // @Override
    ScriptContext.prototype.accept = function (visitor) {
        if (visitor.visitScript) {
            return visitor.visitScript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScriptContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScriptContext = ScriptContext;
var StyleContext = /** @class */ (function (_super) {
    __extends(StyleContext, _super);
    function StyleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StyleContext.prototype.STYLE_OPEN = function () { return this.getToken(HTMLParser.STYLE_OPEN, 0); };
    StyleContext.prototype.STYLE_BODY = function () { return this.tryGetToken(HTMLParser.STYLE_BODY, 0); };
    StyleContext.prototype.STYLE_SHORT_BODY = function () { return this.tryGetToken(HTMLParser.STYLE_SHORT_BODY, 0); };
    Object.defineProperty(StyleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HTMLParser.RULE_style; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StyleContext.prototype.enterRule = function (listener) {
        if (listener.enterStyle) {
            listener.enterStyle(this);
        }
    };
    // @Override
    StyleContext.prototype.exitRule = function (listener) {
        if (listener.exitStyle) {
            listener.exitStyle(this);
        }
    };
    // @Override
    StyleContext.prototype.accept = function (visitor) {
        if (visitor.visitStyle) {
            return visitor.visitStyle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StyleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StyleContext = StyleContext;
