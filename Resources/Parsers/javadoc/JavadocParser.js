"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/javadoc/JavadocParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var JavadocParser = /** @class */ (function (_super) {
    __extends(JavadocParser, _super);
    function JavadocParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(JavadocParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(JavadocParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return JavadocParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavadocParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "JavadocParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavadocParser.prototype, "ruleNames", {
        // @Override
        get: function () { return JavadocParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JavadocParser.prototype, "serializedATN", {
        // @Override
        get: function () { return JavadocParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    JavadocParser.prototype.documentation = function () {
        var _localctx = new DocumentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JavadocParser.RULE_documentation);
        try {
            var _alt = void 0;
            this.state = 65;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavadocParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 44;
                        this.match(JavadocParser.EOF);
                    }
                    break;
                case JavadocParser.JAVADOC_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 45;
                        this.match(JavadocParser.JAVADOC_START);
                        this.state = 49;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 46;
                                        this.skipWhitespace();
                                    }
                                }
                            }
                            this.state = 51;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                        }
                        this.state = 52;
                        this.documentationContent();
                        this.state = 53;
                        this.match(JavadocParser.JAVADOC_END);
                        this.state = 54;
                        this.match(JavadocParser.EOF);
                    }
                    break;
                case JavadocParser.NAME:
                case JavadocParser.NEWLINE:
                case JavadocParser.SPACE:
                case JavadocParser.TEXT_CONTENT:
                case JavadocParser.AT:
                case JavadocParser.STAR:
                case JavadocParser.SLASH:
                case JavadocParser.INLINE_TAG_START:
                case JavadocParser.BRACE_OPEN:
                case JavadocParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 59;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 56;
                                        this.skipWhitespace();
                                    }
                                }
                            }
                            this.state = 61;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                        }
                        this.state = 62;
                        this.documentationContent();
                        this.state = 63;
                        this.match(JavadocParser.EOF);
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
    JavadocParser.prototype.documentationContent = function () {
        var _localctx = new DocumentationContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JavadocParser.RULE_documentationContent);
        var _la;
        try {
            var _alt = void 0;
            this.state = 95;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 67;
                        this.description();
                        this.state = 71;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavadocParser.NEWLINE || _la === JavadocParser.SPACE) {
                            {
                                {
                                    this.state = 68;
                                    this.skipWhitespace();
                                }
                            }
                            this.state = 73;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 77;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 74;
                                        this.skipWhitespace();
                                    }
                                }
                            }
                            this.state = 79;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                        }
                        this.state = 80;
                        this.tagSection();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 81;
                        this.description();
                        this.state = 83;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 82;
                                            this.match(JavadocParser.NEWLINE);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 85;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 90;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 87;
                                        this.skipWhitespace();
                                    }
                                }
                            }
                            this.state = 92;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                        }
                        this.state = 93;
                        this.tagSection();
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
    JavadocParser.prototype.skipWhitespace = function () {
        var _localctx = new SkipWhitespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JavadocParser.RULE_skipWhitespace);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                _la = this._input.LA(1);
                if (!(_la === JavadocParser.NEWLINE || _la === JavadocParser.SPACE)) {
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
    JavadocParser.prototype.description = function () {
        var _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JavadocParser.RULE_description);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this.descriptionLine();
                this.state = 109;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 101;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 100;
                                            this.descriptionNewline();
                                        }
                                    }
                                    this.state = 103;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while (_la === JavadocParser.NEWLINE);
                                this.state = 105;
                                this.descriptionLine();
                            }
                        }
                    }
                    this.state = 111;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
    JavadocParser.prototype.descriptionLine = function () {
        var _localctx = new DescriptionLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JavadocParser.RULE_descriptionLine);
        try {
            var _alt = void 0;
            this.state = 126;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavadocParser.NAME:
                case JavadocParser.SPACE:
                case JavadocParser.TEXT_CONTENT:
                case JavadocParser.STAR:
                case JavadocParser.SLASH:
                case JavadocParser.BRACE_OPEN:
                case JavadocParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 112;
                        this.descriptionLineStart();
                        this.state = 116;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 113;
                                        this.descriptionLineElement();
                                    }
                                }
                            }
                            this.state = 118;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        }
                    }
                    break;
                case JavadocParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 119;
                        this.inlineTag();
                        this.state = 123;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 120;
                                        this.descriptionLineElement();
                                    }
                                }
                            }
                            this.state = 125;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
    JavadocParser.prototype.descriptionLineStart = function () {
        var _localctx = new DescriptionLineStartContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JavadocParser.RULE_descriptionLineStart);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavadocParser.SPACE) {
                    {
                        this.state = 128;
                        this.match(JavadocParser.SPACE);
                    }
                }
                this.state = 132;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 131;
                                    this.descriptionLineNoSpaceNoAt();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 134;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 141;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 139;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case JavadocParser.NAME:
                                case JavadocParser.TEXT_CONTENT:
                                case JavadocParser.STAR:
                                case JavadocParser.SLASH:
                                case JavadocParser.BRACE_OPEN:
                                case JavadocParser.BRACE_CLOSE:
                                    {
                                        this.state = 136;
                                        this.descriptionLineNoSpaceNoAt();
                                    }
                                    break;
                                case JavadocParser.SPACE:
                                    {
                                        this.state = 137;
                                        this.match(JavadocParser.SPACE);
                                    }
                                    break;
                                case JavadocParser.AT:
                                    {
                                        this.state = 138;
                                        this.match(JavadocParser.AT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 143;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
    JavadocParser.prototype.descriptionLineNoSpaceNoAt = function () {
        var _localctx = new DescriptionLineNoSpaceNoAtContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JavadocParser.RULE_descriptionLineNoSpaceNoAt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN) | (1 << JavadocParser.BRACE_CLOSE))) !== 0))) {
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
    JavadocParser.prototype.descriptionLineElement = function () {
        var _localctx = new DescriptionLineElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JavadocParser.RULE_descriptionLineElement);
        try {
            this.state = 148;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavadocParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 146;
                        this.inlineTag();
                    }
                    break;
                case JavadocParser.NAME:
                case JavadocParser.SPACE:
                case JavadocParser.TEXT_CONTENT:
                case JavadocParser.AT:
                case JavadocParser.STAR:
                case JavadocParser.SLASH:
                case JavadocParser.BRACE_OPEN:
                case JavadocParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 147;
                        this.descriptionLineText();
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
    JavadocParser.prototype.descriptionLineText = function () {
        var _localctx = new DescriptionLineTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JavadocParser.RULE_descriptionLineText);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 153;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case JavadocParser.NAME:
                                    case JavadocParser.TEXT_CONTENT:
                                    case JavadocParser.STAR:
                                    case JavadocParser.SLASH:
                                    case JavadocParser.BRACE_OPEN:
                                    case JavadocParser.BRACE_CLOSE:
                                        {
                                            this.state = 150;
                                            this.descriptionLineNoSpaceNoAt();
                                        }
                                        break;
                                    case JavadocParser.SPACE:
                                        {
                                            this.state = 151;
                                            this.match(JavadocParser.SPACE);
                                        }
                                        break;
                                    case JavadocParser.AT:
                                        {
                                            this.state = 152;
                                            this.match(JavadocParser.AT);
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
                    this.state = 155;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
    JavadocParser.prototype.descriptionNewline = function () {
        var _localctx = new DescriptionNewlineContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JavadocParser.RULE_descriptionNewline);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(JavadocParser.NEWLINE);
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
    JavadocParser.prototype.tagSection = function () {
        var _localctx = new TagSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JavadocParser.RULE_tagSection);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 159;
                            this.blockTag();
                        }
                    }
                    this.state = 162;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === JavadocParser.SPACE || _la === JavadocParser.AT);
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
    JavadocParser.prototype.blockTag = function () {
        var _localctx = new BlockTagContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, JavadocParser.RULE_blockTag);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavadocParser.SPACE) {
                    {
                        this.state = 164;
                        this.match(JavadocParser.SPACE);
                    }
                }
                this.state = 167;
                this.match(JavadocParser.AT);
                this.state = 168;
                this.blockTagName();
                this.state = 170;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 169;
                            this.match(JavadocParser.SPACE);
                        }
                        break;
                }
                this.state = 175;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 172;
                                this.blockTagContent();
                            }
                        }
                    }
                    this.state = 177;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
    JavadocParser.prototype.blockTagName = function () {
        var _localctx = new BlockTagNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, JavadocParser.RULE_blockTagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 178;
                this.match(JavadocParser.NAME);
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
    JavadocParser.prototype.blockTagContent = function () {
        var _localctx = new BlockTagContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, JavadocParser.RULE_blockTagContent);
        try {
            this.state = 183;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavadocParser.NAME:
                case JavadocParser.SPACE:
                case JavadocParser.TEXT_CONTENT:
                case JavadocParser.STAR:
                case JavadocParser.SLASH:
                case JavadocParser.BRACE_OPEN:
                case JavadocParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 180;
                        this.blockTagText();
                    }
                    break;
                case JavadocParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 181;
                        this.inlineTag();
                    }
                    break;
                case JavadocParser.NEWLINE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 182;
                        this.match(JavadocParser.NEWLINE);
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
    JavadocParser.prototype.blockTagText = function () {
        var _localctx = new BlockTagTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, JavadocParser.RULE_blockTagText);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 185;
                                    this.blockTagTextElement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 188;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
    JavadocParser.prototype.blockTagTextElement = function () {
        var _localctx = new BlockTagTextElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, JavadocParser.RULE_blockTagTextElement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 190;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN) | (1 << JavadocParser.BRACE_CLOSE))) !== 0))) {
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
    JavadocParser.prototype.inlineTag = function () {
        var _localctx = new InlineTagContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, JavadocParser.RULE_inlineTag);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.match(JavadocParser.INLINE_TAG_START);
                this.state = 193;
                this.inlineTagName();
                this.state = 197;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 194;
                                this.match(JavadocParser.SPACE);
                            }
                        }
                    }
                    this.state = 199;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                }
                this.state = 201;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 200;
                        this.inlineTagContent();
                    }
                }
                this.state = 203;
                this.match(JavadocParser.BRACE_CLOSE);
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
    JavadocParser.prototype.inlineTagName = function () {
        var _localctx = new InlineTagNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, JavadocParser.RULE_inlineTagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this.match(JavadocParser.NAME);
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
    JavadocParser.prototype.inlineTagContent = function () {
        var _localctx = new InlineTagContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, JavadocParser.RULE_inlineTagContent);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 207;
                            this.braceContent();
                        }
                    }
                    this.state = 210;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0));
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
    JavadocParser.prototype.braceExpression = function () {
        var _localctx = new BraceExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, JavadocParser.RULE_braceExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.match(JavadocParser.BRACE_OPEN);
                this.state = 216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 213;
                            this.braceContent();
                        }
                    }
                    this.state = 218;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 219;
                this.match(JavadocParser.BRACE_CLOSE);
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
    JavadocParser.prototype.braceContent = function () {
        var _localctx = new BraceContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JavadocParser.RULE_braceContent);
        try {
            var _alt = void 0;
            this.state = 235;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavadocParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 221;
                        this.braceExpression();
                    }
                    break;
                case JavadocParser.NAME:
                case JavadocParser.NEWLINE:
                case JavadocParser.SPACE:
                case JavadocParser.TEXT_CONTENT:
                case JavadocParser.STAR:
                case JavadocParser.SLASH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 222;
                        this.braceText();
                        this.state = 232;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 226;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 223;
                                                        this.match(JavadocParser.NEWLINE);
                                                    }
                                                }
                                            }
                                            this.state = 228;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                        }
                                        this.state = 229;
                                        this.braceText();
                                    }
                                }
                            }
                            this.state = 234;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
    JavadocParser.prototype.braceText = function () {
        var _localctx = new BraceTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, JavadocParser.RULE_braceText);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH))) !== 0))) {
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
    Object.defineProperty(JavadocParser, "_ATN", {
        get: function () {
            if (!JavadocParser.__ATN) {
                JavadocParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JavadocParser._serializedATN));
            }
            return JavadocParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    JavadocParser.NAME = 1;
    JavadocParser.NEWLINE = 2;
    JavadocParser.SPACE = 3;
    JavadocParser.TEXT_CONTENT = 4;
    JavadocParser.AT = 5;
    JavadocParser.STAR = 6;
    JavadocParser.SLASH = 7;
    JavadocParser.JAVADOC_START = 8;
    JavadocParser.JAVADOC_END = 9;
    JavadocParser.INLINE_TAG_START = 10;
    JavadocParser.BRACE_OPEN = 11;
    JavadocParser.BRACE_CLOSE = 12;
    JavadocParser.RULE_documentation = 0;
    JavadocParser.RULE_documentationContent = 1;
    JavadocParser.RULE_skipWhitespace = 2;
    JavadocParser.RULE_description = 3;
    JavadocParser.RULE_descriptionLine = 4;
    JavadocParser.RULE_descriptionLineStart = 5;
    JavadocParser.RULE_descriptionLineNoSpaceNoAt = 6;
    JavadocParser.RULE_descriptionLineElement = 7;
    JavadocParser.RULE_descriptionLineText = 8;
    JavadocParser.RULE_descriptionNewline = 9;
    JavadocParser.RULE_tagSection = 10;
    JavadocParser.RULE_blockTag = 11;
    JavadocParser.RULE_blockTagName = 12;
    JavadocParser.RULE_blockTagContent = 13;
    JavadocParser.RULE_blockTagText = 14;
    JavadocParser.RULE_blockTagTextElement = 15;
    JavadocParser.RULE_inlineTag = 16;
    JavadocParser.RULE_inlineTagName = 17;
    JavadocParser.RULE_inlineTagContent = 18;
    JavadocParser.RULE_braceExpression = 19;
    JavadocParser.RULE_braceContent = 20;
    JavadocParser.RULE_braceText = 21;
    // tslint:disable:no-trailing-whitespace
    JavadocParser.ruleNames = [
        "documentation", "documentationContent", "skipWhitespace", "description",
        "descriptionLine", "descriptionLineStart", "descriptionLineNoSpaceNoAt",
        "descriptionLineElement", "descriptionLineText", "descriptionNewline",
        "tagSection", "blockTag", "blockTagName", "blockTagContent", "blockTagText",
        "blockTagTextElement", "inlineTag", "inlineTagName", "inlineTagContent",
        "braceExpression", "braceContent", "braceText",
    ];
    JavadocParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "'@'", "'*'", "'/'",
        undefined, undefined, "'{@'", "'{'", "'}'",
    ];
    JavadocParser._SYMBOLIC_NAMES = [
        undefined, "NAME", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "STAR", "SLASH",
        "JAVADOC_START", "JAVADOC_END", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE",
    ];
    JavadocParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JavadocParser._LITERAL_NAMES, JavadocParser._SYMBOLIC_NAMES, []);
    JavadocParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E\xF2\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
        "\x02\x03\x02\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03" +
        "\x02\x03\x02\x05\x02D\n\x02\x03\x03\x03\x03\x07\x03H\n\x03\f\x03\x0E\x03" +
        "K\v\x03\x03\x03\x07\x03N\n\x03\f\x03\x0E\x03Q\v\x03\x03\x03\x03\x03\x03" +
        "\x03\x06\x03V\n\x03\r\x03\x0E\x03W\x03\x03\x07\x03[\n\x03\f\x03\x0E\x03" +
        "^\v\x03\x03\x03\x03\x03\x05\x03b\n\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
        "\x06\x05h\n\x05\r\x05\x0E\x05i\x03\x05\x03\x05\x07\x05n\n\x05\f\x05\x0E" +
        "\x05q\v\x05\x03\x06\x03\x06\x07\x06u\n\x06\f\x06\x0E\x06x\v\x06\x03\x06" +
        "\x03\x06\x07\x06|\n\x06\f\x06\x0E\x06\x7F\v\x06\x05\x06\x81\n\x06\x03" +
        "\x07\x05\x07\x84\n\x07\x03\x07\x06\x07\x87\n\x07\r\x07\x0E\x07\x88\x03" +
        "\x07\x03\x07\x03\x07\x07\x07\x8E\n\x07\f\x07\x0E\x07\x91\v\x07\x03\b\x03" +
        "\b\x03\t\x03\t\x05\t\x97\n\t\x03\n\x03\n\x03\n\x06\n\x9C\n\n\r\n\x0E\n" +
        "\x9D\x03\v\x03\v\x03\f\x06\f\xA3\n\f\r\f\x0E\f\xA4\x03\r\x05\r\xA8\n\r" +
        "\x03\r\x03\r\x03\r\x05\r\xAD\n\r\x03\r\x07\r\xB0\n\r\f\r\x0E\r\xB3\v\r" +
        "\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xBA\n\x0F\x03\x10\x06" +
        "\x10\xBD\n\x10\r\x10\x0E\x10\xBE\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
        "\x07\x12\xC6\n\x12\f\x12\x0E\x12\xC9\v\x12\x03\x12\x05\x12\xCC\n\x12\x03" +
        "\x12\x03\x12\x03\x13\x03\x13\x03\x14\x06\x14\xD3\n\x14\r\x14\x0E\x14\xD4" +
        "\x03\x15\x03\x15\x07\x15\xD9\n\x15\f\x15\x0E\x15\xDC\v\x15\x03\x15\x03" +
        "\x15\x03\x16\x03\x16\x03\x16\x07\x16\xE3\n\x16\f\x16\x0E\x16\xE6\v\x16" +
        "\x03\x16\x07\x16\xE9\n\x16\f\x16\x0E\x16\xEC\v\x16\x05\x16\xEE\n\x16\x03" +
        "\x17\x03\x17\x03\x17\x02\x02\x02\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
        "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
        "\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x06\x03\x02\x04\x05\x06" +
        "\x02\x03\x03\x06\x06\b\t\r\x0E\x06\x02\x03\x03\x05\x06\b\t\r\x0E\x04\x02" +
        "\x03\x06\b\t\x02\u0101\x02C\x03\x02\x02\x02\x04a\x03\x02\x02\x02\x06c" +
        "\x03\x02\x02\x02\be\x03\x02\x02\x02\n\x80\x03\x02\x02\x02\f\x83\x03\x02" +
        "\x02\x02\x0E\x92\x03\x02\x02\x02\x10\x96\x03\x02\x02\x02\x12\x9B\x03\x02" +
        "\x02\x02\x14\x9F\x03\x02\x02\x02\x16\xA2\x03\x02\x02\x02\x18\xA7\x03\x02" +
        "\x02\x02\x1A\xB4\x03\x02\x02\x02\x1C\xB9\x03\x02\x02\x02\x1E\xBC\x03\x02" +
        "\x02\x02 \xC0\x03\x02\x02\x02\"\xC2\x03\x02\x02\x02$\xCF\x03\x02\x02\x02" +
        "&\xD2\x03\x02\x02\x02(\xD6\x03\x02\x02\x02*\xED\x03\x02\x02\x02,\xEF\x03" +
        "\x02\x02\x02.D\x07\x02\x02\x03/3\x07\n\x02\x0202\x05\x06\x04\x0210\x03" +
        "\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0246\x03" +
        "\x02\x02\x0253\x03\x02\x02\x0267\x05\x04\x03\x0278\x07\v\x02\x0289\x07" +
        "\x02\x02\x039D\x03\x02\x02\x02:<\x05\x06\x04\x02;:\x03\x02\x02\x02<?\x03" +
        "\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03" +
        "\x02\x02\x02@A\x05\x04\x03\x02AB\x07\x02\x02\x03BD\x03\x02\x02\x02C.\x03" +
        "\x02\x02\x02C/\x03\x02\x02\x02C=\x03\x02\x02\x02D\x03\x03\x02\x02\x02" +
        "EI\x05\b\x05\x02FH\x05\x06\x04\x02GF\x03\x02\x02\x02HK\x03\x02\x02\x02" +
        "IG\x03\x02\x02\x02IJ\x03\x02\x02\x02Jb\x03\x02\x02\x02KI\x03\x02\x02\x02" +
        "LN\x05\x06\x04\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02" +
        "OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02\x02Rb\x05\x16\f\x02" +
        "SU\x05\b\x05\x02TV\x07\x04\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02" +
        "WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\\\x03\x02\x02\x02Y[\x05\x06\x04" +
        "\x02ZY\x03\x02\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02" +
        "\x02\x02]_\x03\x02\x02\x02^\\\x03\x02\x02\x02_`\x05\x16\f\x02`b\x03\x02" +
        "\x02\x02aE\x03\x02\x02\x02aO\x03\x02\x02\x02aS\x03\x02\x02\x02b\x05\x03" +
        "\x02\x02\x02cd\t\x02\x02\x02d\x07\x03\x02\x02\x02eo\x05\n\x06\x02fh\x05" +
        "\x14\v\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03" +
        "\x02\x02\x02jk\x03\x02\x02\x02kl\x05\n\x06\x02ln\x03\x02\x02\x02mg\x03" +
        "\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\t" +
        "\x03\x02\x02\x02qo\x03\x02\x02\x02rv\x05\f\x07\x02su\x05\x10\t\x02ts\x03" +
        "\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\x81" +
        "\x03\x02\x02\x02xv\x03\x02\x02\x02y}\x05\"\x12\x02z|\x05\x10\t\x02{z\x03" +
        "\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02" +
        "~\x81\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80r\x03\x02\x02\x02\x80y\x03" +
        "\x02\x02\x02\x81\v\x03\x02\x02\x02\x82\x84\x07\x05\x02\x02\x83\x82\x03" +
        "\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85\x87\x05" +
        "\x0E\b\x02\x86\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x86\x03" +
        "\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8F\x03\x02\x02\x02\x8A\x8E\x05" +
        "\x0E\b\x02\x8B\x8E\x07\x05\x02\x02\x8C\x8E\x07\x07\x02\x02\x8D\x8A\x03" +
        "\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03" +
        "\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\r\x03" +
        "\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x93\t\x03\x02\x02\x93\x0F\x03" +
        "\x02\x02\x02\x94\x97\x05\"\x12\x02\x95\x97\x05\x12\n\x02\x96\x94\x03\x02" +
        "\x02\x02\x96\x95\x03\x02\x02\x02\x97\x11\x03\x02\x02\x02\x98\x9C\x05\x0E" +
        "\b\x02\x99\x9C\x07\x05\x02\x02\x9A\x9C\x07\x07\x02\x02\x9B\x98\x03\x02" +
        "\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02" +
        "\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x13\x03\x02" +
        "\x02\x02\x9F\xA0\x07\x04\x02\x02\xA0\x15\x03\x02\x02\x02\xA1\xA3\x05\x18" +
        "\r\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA2\x03\x02" +
        "\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x17\x03\x02\x02\x02\xA6\xA8\x07\x05" +
        "\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02" +
        "\x02\x02\xA9\xAA\x07\x07\x02\x02\xAA\xAC\x05\x1A\x0E\x02\xAB\xAD\x07\x05" +
        "\x02\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xB1\x03\x02" +
        "\x02\x02\xAE\xB0\x05\x1C\x0F\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02" +
        "\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\x19\x03\x02" +
        "\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x07\x03\x02\x02\xB5\x1B\x03\x02" +
        "\x02\x02\xB6\xBA\x05\x1E\x10\x02\xB7\xBA\x05\"\x12\x02\xB8\xBA\x07\x04" +
        "\x02\x02\xB9\xB6\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03\x02" +
        "\x02\x02\xBA\x1D\x03\x02\x02\x02\xBB\xBD\x05 \x11\x02\xBC\xBB\x03\x02" +
        "\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02" +
        "\x02\x02\xBF\x1F\x03\x02\x02\x02\xC0\xC1\t\x04\x02\x02\xC1!\x03\x02\x02" +
        "\x02\xC2\xC3\x07\f\x02\x02\xC3\xC7\x05$\x13\x02\xC4\xC6\x07\x05\x02\x02" +
        "\xC5\xC4\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02" +
        "\xC7\xC8\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02" +
        "\xCA\xCC\x05&\x14\x02\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
        "\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x07\x0E\x02\x02\xCE#\x03\x02\x02\x02" +
        "\xCF\xD0\x07\x03\x02\x02\xD0%\x03\x02\x02\x02\xD1\xD3\x05*\x16\x02\xD2" +
        "\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4" +
        "\xD5\x03\x02\x02\x02\xD5\'\x03\x02\x02\x02\xD6\xDA\x07\r\x02\x02\xD7\xD9" +
        "\x05*\x16\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8" +
        "\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDA" +
        "\x03\x02\x02\x02\xDD\xDE\x07\x0E\x02\x02\xDE)\x03\x02\x02\x02\xDF\xEE" +
        "\x05(\x15\x02\xE0\xEA\x05,\x17\x02\xE1\xE3\x07\x04\x02\x02\xE2\xE1\x03" +
        "\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03" +
        "\x02\x02\x02\xE5\xE7\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE9\x05" +
        ",\x17\x02\xE8\xE4\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03" +
        "\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03" +
        "\x02\x02\x02\xED\xDF\x03\x02\x02\x02\xED\xE0\x03\x02\x02\x02\xEE+\x03" +
        "\x02\x02\x02\xEF\xF0\t\x05\x02\x02\xF0-\x03\x02\x02\x02#3=CIOW\\aiov}" +
        "\x80\x83\x88\x8D\x8F\x96\x9B\x9D\xA4\xA7\xAC\xB1\xB9\xBE\xC7\xCB\xD4\xDA" +
        "\xE4\xEA\xED";
    return JavadocParser;
}(Parser_1.Parser));
exports.JavadocParser = JavadocParser;
var DocumentationContext = /** @class */ (function (_super) {
    __extends(DocumentationContext, _super);
    function DocumentationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentationContext.prototype.EOF = function () { return this.getToken(JavadocParser.EOF, 0); };
    DocumentationContext.prototype.JAVADOC_START = function () { return this.tryGetToken(JavadocParser.JAVADOC_START, 0); };
    DocumentationContext.prototype.documentationContent = function () {
        return this.tryGetRuleContext(0, DocumentationContentContext);
    };
    DocumentationContext.prototype.JAVADOC_END = function () { return this.tryGetToken(JavadocParser.JAVADOC_END, 0); };
    DocumentationContext.prototype.skipWhitespace = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SkipWhitespaceContext);
        }
        else {
            return this.getRuleContext(i, SkipWhitespaceContext);
        }
    };
    Object.defineProperty(DocumentationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_documentation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DocumentationContext.prototype.enterRule = function (listener) {
        if (listener.enterDocumentation) {
            listener.enterDocumentation(this);
        }
    };
    // @Override
    DocumentationContext.prototype.exitRule = function (listener) {
        if (listener.exitDocumentation) {
            listener.exitDocumentation(this);
        }
    };
    // @Override
    DocumentationContext.prototype.accept = function (visitor) {
        if (visitor.visitDocumentation) {
            return visitor.visitDocumentation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DocumentationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DocumentationContext = DocumentationContext;
var DocumentationContentContext = /** @class */ (function (_super) {
    __extends(DocumentationContentContext, _super);
    function DocumentationContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentationContentContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    DocumentationContentContext.prototype.skipWhitespace = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SkipWhitespaceContext);
        }
        else {
            return this.getRuleContext(i, SkipWhitespaceContext);
        }
    };
    DocumentationContentContext.prototype.tagSection = function () {
        return this.tryGetRuleContext(0, TagSectionContext);
    };
    DocumentationContentContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(JavadocParser.NEWLINE);
        }
        else {
            return this.getToken(JavadocParser.NEWLINE, i);
        }
    };
    Object.defineProperty(DocumentationContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_documentationContent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DocumentationContentContext.prototype.enterRule = function (listener) {
        if (listener.enterDocumentationContent) {
            listener.enterDocumentationContent(this);
        }
    };
    // @Override
    DocumentationContentContext.prototype.exitRule = function (listener) {
        if (listener.exitDocumentationContent) {
            listener.exitDocumentationContent(this);
        }
    };
    // @Override
    DocumentationContentContext.prototype.accept = function (visitor) {
        if (visitor.visitDocumentationContent) {
            return visitor.visitDocumentationContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DocumentationContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DocumentationContentContext = DocumentationContentContext;
var SkipWhitespaceContext = /** @class */ (function (_super) {
    __extends(SkipWhitespaceContext, _super);
    function SkipWhitespaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SkipWhitespaceContext.prototype.SPACE = function () { return this.tryGetToken(JavadocParser.SPACE, 0); };
    SkipWhitespaceContext.prototype.NEWLINE = function () { return this.tryGetToken(JavadocParser.NEWLINE, 0); };
    Object.defineProperty(SkipWhitespaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_skipWhitespace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SkipWhitespaceContext.prototype.enterRule = function (listener) {
        if (listener.enterSkipWhitespace) {
            listener.enterSkipWhitespace(this);
        }
    };
    // @Override
    SkipWhitespaceContext.prototype.exitRule = function (listener) {
        if (listener.exitSkipWhitespace) {
            listener.exitSkipWhitespace(this);
        }
    };
    // @Override
    SkipWhitespaceContext.prototype.accept = function (visitor) {
        if (visitor.visitSkipWhitespace) {
            return visitor.visitSkipWhitespace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SkipWhitespaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SkipWhitespaceContext = SkipWhitespaceContext;
var DescriptionContext = /** @class */ (function (_super) {
    __extends(DescriptionContext, _super);
    function DescriptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionContext.prototype.descriptionLine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionLineContext);
        }
        else {
            return this.getRuleContext(i, DescriptionLineContext);
        }
    };
    DescriptionContext.prototype.descriptionNewline = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionNewlineContext);
        }
        else {
            return this.getRuleContext(i, DescriptionNewlineContext);
        }
    };
    Object.defineProperty(DescriptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_description; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionContext.prototype.enterRule = function (listener) {
        if (listener.enterDescription) {
            listener.enterDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.exitRule = function (listener) {
        if (listener.exitDescription) {
            listener.exitDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.accept = function (visitor) {
        if (visitor.visitDescription) {
            return visitor.visitDescription(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionContext = DescriptionContext;
var DescriptionLineContext = /** @class */ (function (_super) {
    __extends(DescriptionLineContext, _super);
    function DescriptionLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionLineContext.prototype.descriptionLineStart = function () {
        return this.tryGetRuleContext(0, DescriptionLineStartContext);
    };
    DescriptionLineContext.prototype.descriptionLineElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionLineElementContext);
        }
        else {
            return this.getRuleContext(i, DescriptionLineElementContext);
        }
    };
    DescriptionLineContext.prototype.inlineTag = function () {
        return this.tryGetRuleContext(0, InlineTagContext);
    };
    Object.defineProperty(DescriptionLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_descriptionLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionLineContext.prototype.enterRule = function (listener) {
        if (listener.enterDescriptionLine) {
            listener.enterDescriptionLine(this);
        }
    };
    // @Override
    DescriptionLineContext.prototype.exitRule = function (listener) {
        if (listener.exitDescriptionLine) {
            listener.exitDescriptionLine(this);
        }
    };
    // @Override
    DescriptionLineContext.prototype.accept = function (visitor) {
        if (visitor.visitDescriptionLine) {
            return visitor.visitDescriptionLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionLineContext = DescriptionLineContext;
var DescriptionLineStartContext = /** @class */ (function (_super) {
    __extends(DescriptionLineStartContext, _super);
    function DescriptionLineStartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionLineStartContext.prototype.SPACE = function (i) {
        if (i === undefined) {
            return this.getTokens(JavadocParser.SPACE);
        }
        else {
            return this.getToken(JavadocParser.SPACE, i);
        }
    };
    DescriptionLineStartContext.prototype.descriptionLineNoSpaceNoAt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionLineNoSpaceNoAtContext);
        }
        else {
            return this.getRuleContext(i, DescriptionLineNoSpaceNoAtContext);
        }
    };
    DescriptionLineStartContext.prototype.AT = function (i) {
        if (i === undefined) {
            return this.getTokens(JavadocParser.AT);
        }
        else {
            return this.getToken(JavadocParser.AT, i);
        }
    };
    Object.defineProperty(DescriptionLineStartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_descriptionLineStart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionLineStartContext.prototype.enterRule = function (listener) {
        if (listener.enterDescriptionLineStart) {
            listener.enterDescriptionLineStart(this);
        }
    };
    // @Override
    DescriptionLineStartContext.prototype.exitRule = function (listener) {
        if (listener.exitDescriptionLineStart) {
            listener.exitDescriptionLineStart(this);
        }
    };
    // @Override
    DescriptionLineStartContext.prototype.accept = function (visitor) {
        if (visitor.visitDescriptionLineStart) {
            return visitor.visitDescriptionLineStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionLineStartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionLineStartContext = DescriptionLineStartContext;
var DescriptionLineNoSpaceNoAtContext = /** @class */ (function (_super) {
    __extends(DescriptionLineNoSpaceNoAtContext, _super);
    function DescriptionLineNoSpaceNoAtContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionLineNoSpaceNoAtContext.prototype.TEXT_CONTENT = function () { return this.tryGetToken(JavadocParser.TEXT_CONTENT, 0); };
    DescriptionLineNoSpaceNoAtContext.prototype.NAME = function () { return this.tryGetToken(JavadocParser.NAME, 0); };
    DescriptionLineNoSpaceNoAtContext.prototype.STAR = function () { return this.tryGetToken(JavadocParser.STAR, 0); };
    DescriptionLineNoSpaceNoAtContext.prototype.SLASH = function () { return this.tryGetToken(JavadocParser.SLASH, 0); };
    DescriptionLineNoSpaceNoAtContext.prototype.BRACE_OPEN = function () { return this.tryGetToken(JavadocParser.BRACE_OPEN, 0); };
    DescriptionLineNoSpaceNoAtContext.prototype.BRACE_CLOSE = function () { return this.tryGetToken(JavadocParser.BRACE_CLOSE, 0); };
    Object.defineProperty(DescriptionLineNoSpaceNoAtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_descriptionLineNoSpaceNoAt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionLineNoSpaceNoAtContext.prototype.enterRule = function (listener) {
        if (listener.enterDescriptionLineNoSpaceNoAt) {
            listener.enterDescriptionLineNoSpaceNoAt(this);
        }
    };
    // @Override
    DescriptionLineNoSpaceNoAtContext.prototype.exitRule = function (listener) {
        if (listener.exitDescriptionLineNoSpaceNoAt) {
            listener.exitDescriptionLineNoSpaceNoAt(this);
        }
    };
    // @Override
    DescriptionLineNoSpaceNoAtContext.prototype.accept = function (visitor) {
        if (visitor.visitDescriptionLineNoSpaceNoAt) {
            return visitor.visitDescriptionLineNoSpaceNoAt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionLineNoSpaceNoAtContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionLineNoSpaceNoAtContext = DescriptionLineNoSpaceNoAtContext;
var DescriptionLineElementContext = /** @class */ (function (_super) {
    __extends(DescriptionLineElementContext, _super);
    function DescriptionLineElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionLineElementContext.prototype.inlineTag = function () {
        return this.tryGetRuleContext(0, InlineTagContext);
    };
    DescriptionLineElementContext.prototype.descriptionLineText = function () {
        return this.tryGetRuleContext(0, DescriptionLineTextContext);
    };
    Object.defineProperty(DescriptionLineElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_descriptionLineElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionLineElementContext.prototype.enterRule = function (listener) {
        if (listener.enterDescriptionLineElement) {
            listener.enterDescriptionLineElement(this);
        }
    };
    // @Override
    DescriptionLineElementContext.prototype.exitRule = function (listener) {
        if (listener.exitDescriptionLineElement) {
            listener.exitDescriptionLineElement(this);
        }
    };
    // @Override
    DescriptionLineElementContext.prototype.accept = function (visitor) {
        if (visitor.visitDescriptionLineElement) {
            return visitor.visitDescriptionLineElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionLineElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionLineElementContext = DescriptionLineElementContext;
var DescriptionLineTextContext = /** @class */ (function (_super) {
    __extends(DescriptionLineTextContext, _super);
    function DescriptionLineTextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionLineTextContext.prototype.descriptionLineNoSpaceNoAt = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionLineNoSpaceNoAtContext);
        }
        else {
            return this.getRuleContext(i, DescriptionLineNoSpaceNoAtContext);
        }
    };
    DescriptionLineTextContext.prototype.SPACE = function (i) {
        if (i === undefined) {
            return this.getTokens(JavadocParser.SPACE);
        }
        else {
            return this.getToken(JavadocParser.SPACE, i);
        }
    };
    DescriptionLineTextContext.prototype.AT = function (i) {
        if (i === undefined) {
            return this.getTokens(JavadocParser.AT);
        }
        else {
            return this.getToken(JavadocParser.AT, i);
        }
    };
    Object.defineProperty(DescriptionLineTextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_descriptionLineText; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionLineTextContext.prototype.enterRule = function (listener) {
        if (listener.enterDescriptionLineText) {
            listener.enterDescriptionLineText(this);
        }
    };
    // @Override
    DescriptionLineTextContext.prototype.exitRule = function (listener) {
        if (listener.exitDescriptionLineText) {
            listener.exitDescriptionLineText(this);
        }
    };
    // @Override
    DescriptionLineTextContext.prototype.accept = function (visitor) {
        if (visitor.visitDescriptionLineText) {
            return visitor.visitDescriptionLineText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionLineTextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionLineTextContext = DescriptionLineTextContext;
var DescriptionNewlineContext = /** @class */ (function (_super) {
    __extends(DescriptionNewlineContext, _super);
    function DescriptionNewlineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionNewlineContext.prototype.NEWLINE = function () { return this.getToken(JavadocParser.NEWLINE, 0); };
    Object.defineProperty(DescriptionNewlineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_descriptionNewline; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionNewlineContext.prototype.enterRule = function (listener) {
        if (listener.enterDescriptionNewline) {
            listener.enterDescriptionNewline(this);
        }
    };
    // @Override
    DescriptionNewlineContext.prototype.exitRule = function (listener) {
        if (listener.exitDescriptionNewline) {
            listener.exitDescriptionNewline(this);
        }
    };
    // @Override
    DescriptionNewlineContext.prototype.accept = function (visitor) {
        if (visitor.visitDescriptionNewline) {
            return visitor.visitDescriptionNewline(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionNewlineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionNewlineContext = DescriptionNewlineContext;
var TagSectionContext = /** @class */ (function (_super) {
    __extends(TagSectionContext, _super);
    function TagSectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagSectionContext.prototype.blockTag = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockTagContext);
        }
        else {
            return this.getRuleContext(i, BlockTagContext);
        }
    };
    Object.defineProperty(TagSectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_tagSection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagSectionContext.prototype.enterRule = function (listener) {
        if (listener.enterTagSection) {
            listener.enterTagSection(this);
        }
    };
    // @Override
    TagSectionContext.prototype.exitRule = function (listener) {
        if (listener.exitTagSection) {
            listener.exitTagSection(this);
        }
    };
    // @Override
    TagSectionContext.prototype.accept = function (visitor) {
        if (visitor.visitTagSection) {
            return visitor.visitTagSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagSectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagSectionContext = TagSectionContext;
var BlockTagContext = /** @class */ (function (_super) {
    __extends(BlockTagContext, _super);
    function BlockTagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockTagContext.prototype.AT = function () { return this.getToken(JavadocParser.AT, 0); };
    BlockTagContext.prototype.blockTagName = function () {
        return this.getRuleContext(0, BlockTagNameContext);
    };
    BlockTagContext.prototype.SPACE = function (i) {
        if (i === undefined) {
            return this.getTokens(JavadocParser.SPACE);
        }
        else {
            return this.getToken(JavadocParser.SPACE, i);
        }
    };
    BlockTagContext.prototype.blockTagContent = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockTagContentContext);
        }
        else {
            return this.getRuleContext(i, BlockTagContentContext);
        }
    };
    Object.defineProperty(BlockTagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_blockTag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockTagContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockTag) {
            listener.enterBlockTag(this);
        }
    };
    // @Override
    BlockTagContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockTag) {
            listener.exitBlockTag(this);
        }
    };
    // @Override
    BlockTagContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockTag) {
            return visitor.visitBlockTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockTagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockTagContext = BlockTagContext;
var BlockTagNameContext = /** @class */ (function (_super) {
    __extends(BlockTagNameContext, _super);
    function BlockTagNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockTagNameContext.prototype.NAME = function () { return this.getToken(JavadocParser.NAME, 0); };
    Object.defineProperty(BlockTagNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_blockTagName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockTagNameContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockTagName) {
            listener.enterBlockTagName(this);
        }
    };
    // @Override
    BlockTagNameContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockTagName) {
            listener.exitBlockTagName(this);
        }
    };
    // @Override
    BlockTagNameContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockTagName) {
            return visitor.visitBlockTagName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockTagNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockTagNameContext = BlockTagNameContext;
var BlockTagContentContext = /** @class */ (function (_super) {
    __extends(BlockTagContentContext, _super);
    function BlockTagContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockTagContentContext.prototype.blockTagText = function () {
        return this.tryGetRuleContext(0, BlockTagTextContext);
    };
    BlockTagContentContext.prototype.inlineTag = function () {
        return this.tryGetRuleContext(0, InlineTagContext);
    };
    BlockTagContentContext.prototype.NEWLINE = function () { return this.tryGetToken(JavadocParser.NEWLINE, 0); };
    Object.defineProperty(BlockTagContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_blockTagContent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockTagContentContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockTagContent) {
            listener.enterBlockTagContent(this);
        }
    };
    // @Override
    BlockTagContentContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockTagContent) {
            listener.exitBlockTagContent(this);
        }
    };
    // @Override
    BlockTagContentContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockTagContent) {
            return visitor.visitBlockTagContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockTagContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockTagContentContext = BlockTagContentContext;
var BlockTagTextContext = /** @class */ (function (_super) {
    __extends(BlockTagTextContext, _super);
    function BlockTagTextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockTagTextContext.prototype.blockTagTextElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockTagTextElementContext);
        }
        else {
            return this.getRuleContext(i, BlockTagTextElementContext);
        }
    };
    Object.defineProperty(BlockTagTextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_blockTagText; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockTagTextContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockTagText) {
            listener.enterBlockTagText(this);
        }
    };
    // @Override
    BlockTagTextContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockTagText) {
            listener.exitBlockTagText(this);
        }
    };
    // @Override
    BlockTagTextContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockTagText) {
            return visitor.visitBlockTagText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockTagTextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockTagTextContext = BlockTagTextContext;
var BlockTagTextElementContext = /** @class */ (function (_super) {
    __extends(BlockTagTextElementContext, _super);
    function BlockTagTextElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockTagTextElementContext.prototype.TEXT_CONTENT = function () { return this.tryGetToken(JavadocParser.TEXT_CONTENT, 0); };
    BlockTagTextElementContext.prototype.NAME = function () { return this.tryGetToken(JavadocParser.NAME, 0); };
    BlockTagTextElementContext.prototype.SPACE = function () { return this.tryGetToken(JavadocParser.SPACE, 0); };
    BlockTagTextElementContext.prototype.STAR = function () { return this.tryGetToken(JavadocParser.STAR, 0); };
    BlockTagTextElementContext.prototype.SLASH = function () { return this.tryGetToken(JavadocParser.SLASH, 0); };
    BlockTagTextElementContext.prototype.BRACE_OPEN = function () { return this.tryGetToken(JavadocParser.BRACE_OPEN, 0); };
    BlockTagTextElementContext.prototype.BRACE_CLOSE = function () { return this.tryGetToken(JavadocParser.BRACE_CLOSE, 0); };
    Object.defineProperty(BlockTagTextElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_blockTagTextElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockTagTextElementContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockTagTextElement) {
            listener.enterBlockTagTextElement(this);
        }
    };
    // @Override
    BlockTagTextElementContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockTagTextElement) {
            listener.exitBlockTagTextElement(this);
        }
    };
    // @Override
    BlockTagTextElementContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockTagTextElement) {
            return visitor.visitBlockTagTextElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockTagTextElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockTagTextElementContext = BlockTagTextElementContext;
var InlineTagContext = /** @class */ (function (_super) {
    __extends(InlineTagContext, _super);
    function InlineTagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InlineTagContext.prototype.INLINE_TAG_START = function () { return this.getToken(JavadocParser.INLINE_TAG_START, 0); };
    InlineTagContext.prototype.inlineTagName = function () {
        return this.getRuleContext(0, InlineTagNameContext);
    };
    InlineTagContext.prototype.BRACE_CLOSE = function () { return this.getToken(JavadocParser.BRACE_CLOSE, 0); };
    InlineTagContext.prototype.SPACE = function (i) {
        if (i === undefined) {
            return this.getTokens(JavadocParser.SPACE);
        }
        else {
            return this.getToken(JavadocParser.SPACE, i);
        }
    };
    InlineTagContext.prototype.inlineTagContent = function () {
        return this.tryGetRuleContext(0, InlineTagContentContext);
    };
    Object.defineProperty(InlineTagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_inlineTag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InlineTagContext.prototype.enterRule = function (listener) {
        if (listener.enterInlineTag) {
            listener.enterInlineTag(this);
        }
    };
    // @Override
    InlineTagContext.prototype.exitRule = function (listener) {
        if (listener.exitInlineTag) {
            listener.exitInlineTag(this);
        }
    };
    // @Override
    InlineTagContext.prototype.accept = function (visitor) {
        if (visitor.visitInlineTag) {
            return visitor.visitInlineTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InlineTagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InlineTagContext = InlineTagContext;
var InlineTagNameContext = /** @class */ (function (_super) {
    __extends(InlineTagNameContext, _super);
    function InlineTagNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InlineTagNameContext.prototype.NAME = function () { return this.getToken(JavadocParser.NAME, 0); };
    Object.defineProperty(InlineTagNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_inlineTagName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InlineTagNameContext.prototype.enterRule = function (listener) {
        if (listener.enterInlineTagName) {
            listener.enterInlineTagName(this);
        }
    };
    // @Override
    InlineTagNameContext.prototype.exitRule = function (listener) {
        if (listener.exitInlineTagName) {
            listener.exitInlineTagName(this);
        }
    };
    // @Override
    InlineTagNameContext.prototype.accept = function (visitor) {
        if (visitor.visitInlineTagName) {
            return visitor.visitInlineTagName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InlineTagNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InlineTagNameContext = InlineTagNameContext;
var InlineTagContentContext = /** @class */ (function (_super) {
    __extends(InlineTagContentContext, _super);
    function InlineTagContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InlineTagContentContext.prototype.braceContent = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceContentContext);
        }
        else {
            return this.getRuleContext(i, BraceContentContext);
        }
    };
    Object.defineProperty(InlineTagContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_inlineTagContent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InlineTagContentContext.prototype.enterRule = function (listener) {
        if (listener.enterInlineTagContent) {
            listener.enterInlineTagContent(this);
        }
    };
    // @Override
    InlineTagContentContext.prototype.exitRule = function (listener) {
        if (listener.exitInlineTagContent) {
            listener.exitInlineTagContent(this);
        }
    };
    // @Override
    InlineTagContentContext.prototype.accept = function (visitor) {
        if (visitor.visitInlineTagContent) {
            return visitor.visitInlineTagContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InlineTagContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InlineTagContentContext = InlineTagContentContext;
var BraceExpressionContext = /** @class */ (function (_super) {
    __extends(BraceExpressionContext, _super);
    function BraceExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BraceExpressionContext.prototype.BRACE_OPEN = function () { return this.getToken(JavadocParser.BRACE_OPEN, 0); };
    BraceExpressionContext.prototype.BRACE_CLOSE = function () { return this.getToken(JavadocParser.BRACE_CLOSE, 0); };
    BraceExpressionContext.prototype.braceContent = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceContentContext);
        }
        else {
            return this.getRuleContext(i, BraceContentContext);
        }
    };
    Object.defineProperty(BraceExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_braceExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BraceExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBraceExpression) {
            listener.enterBraceExpression(this);
        }
    };
    // @Override
    BraceExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBraceExpression) {
            listener.exitBraceExpression(this);
        }
    };
    // @Override
    BraceExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBraceExpression) {
            return visitor.visitBraceExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BraceExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BraceExpressionContext = BraceExpressionContext;
var BraceContentContext = /** @class */ (function (_super) {
    __extends(BraceContentContext, _super);
    function BraceContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BraceContentContext.prototype.braceExpression = function () {
        return this.tryGetRuleContext(0, BraceExpressionContext);
    };
    BraceContentContext.prototype.braceText = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceTextContext);
        }
        else {
            return this.getRuleContext(i, BraceTextContext);
        }
    };
    BraceContentContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(JavadocParser.NEWLINE);
        }
        else {
            return this.getToken(JavadocParser.NEWLINE, i);
        }
    };
    Object.defineProperty(BraceContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_braceContent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BraceContentContext.prototype.enterRule = function (listener) {
        if (listener.enterBraceContent) {
            listener.enterBraceContent(this);
        }
    };
    // @Override
    BraceContentContext.prototype.exitRule = function (listener) {
        if (listener.exitBraceContent) {
            listener.exitBraceContent(this);
        }
    };
    // @Override
    BraceContentContext.prototype.accept = function (visitor) {
        if (visitor.visitBraceContent) {
            return visitor.visitBraceContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BraceContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BraceContentContext = BraceContentContext;
var BraceTextContext = /** @class */ (function (_super) {
    __extends(BraceTextContext, _super);
    function BraceTextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BraceTextContext.prototype.TEXT_CONTENT = function () { return this.tryGetToken(JavadocParser.TEXT_CONTENT, 0); };
    BraceTextContext.prototype.NAME = function () { return this.tryGetToken(JavadocParser.NAME, 0); };
    BraceTextContext.prototype.SPACE = function () { return this.tryGetToken(JavadocParser.SPACE, 0); };
    BraceTextContext.prototype.STAR = function () { return this.tryGetToken(JavadocParser.STAR, 0); };
    BraceTextContext.prototype.SLASH = function () { return this.tryGetToken(JavadocParser.SLASH, 0); };
    BraceTextContext.prototype.NEWLINE = function () { return this.tryGetToken(JavadocParser.NEWLINE, 0); };
    Object.defineProperty(BraceTextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return JavadocParser.RULE_braceText; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BraceTextContext.prototype.enterRule = function (listener) {
        if (listener.enterBraceText) {
            listener.enterBraceText(this);
        }
    };
    // @Override
    BraceTextContext.prototype.exitRule = function (listener) {
        if (listener.exitBraceText) {
            listener.exitBraceText(this);
        }
    };
    // @Override
    BraceTextContext.prototype.accept = function (visitor) {
        if (visitor.visitBraceText) {
            return visitor.visitBraceText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BraceTextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BraceTextContext = BraceTextContext;
