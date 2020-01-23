"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/restructuredtext/ReStructuredText.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ReStructuredTextParser = /** @class */ (function (_super) {
    __extends(ReStructuredTextParser, _super);
    function ReStructuredTextParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ReStructuredTextParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ReStructuredTextParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ReStructuredTextParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "ReStructuredText.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ReStructuredTextParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ReStructuredTextParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ReStructuredTextParser.prototype.parse = function () {
        var _localctx = new ParseContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ReStructuredTextParser.RULE_parse);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 120;
                this._errHandler.sync(this);
                _alt = 1 + 1;
                do {
                    switch (_alt) {
                        case 1 + 1:
                            {
                                this.state = 120;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 118;
                                            this.element();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 119;
                                            this.empty_line();
                                        }
                                        break;
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 122;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                } while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 124;
                this.match(ReStructuredTextParser.EOF);
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
    ReStructuredTextParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ReStructuredTextParser.RULE_element);
        try {
            this.state = 128;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 126;
                        this.section();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 127;
                        this.sectionElement();
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
    ReStructuredTextParser.prototype.sectionElement = function () {
        var _localctx = new SectionElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ReStructuredTextParser.RULE_sectionElement);
        try {
            this.state = 135;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 130;
                        this.listItemBullet();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 131;
                        this.listItemEnumerated();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 132;
                        this.paragraph();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 133;
                        this.lineBlock();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 134;
                        this.comment();
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
    ReStructuredTextParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ReStructuredTextParser.RULE_comment);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ReStructuredTextParser.Space) {
                    {
                        {
                            this.state = 137;
                            this.match(ReStructuredTextParser.Space);
                        }
                    }
                    this.state = 142;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 143;
                this.match(ReStructuredTextParser.Comment);
                this.state = 147;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 144;
                                this.match(ReStructuredTextParser.Space);
                            }
                        }
                    }
                    this.state = 149;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                }
                this.state = 154;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 150;
                            this.commentLineNoBreak();
                            this.state = 152;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 151;
                                        this.commentParagraphs();
                                    }
                                    break;
                            }
                        }
                        break;
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
    ReStructuredTextParser.prototype.commentParagraphs = function () {
        var _localctx = new CommentParagraphsContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ReStructuredTextParser.RULE_commentParagraphs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                _localctx._main = this.commentParagraph();
                this.state = 157;
                this.commentRest();
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
    ReStructuredTextParser.prototype.commentRest = function () {
        var _localctx = new CommentRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ReStructuredTextParser.RULE_commentRest);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 159;
                                this.empty_line();
                                this.state = 160;
                                this.commentParagraph();
                            }
                        }
                    }
                    this.state = 166;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
    ReStructuredTextParser.prototype.commentParagraph = function () {
        var _localctx = new CommentParagraphContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ReStructuredTextParser.RULE_commentParagraph);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 167;
                                    this.commentLine();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 170;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
    ReStructuredTextParser.prototype.commentLineNoBreak = function () {
        var _localctx = new CommentLineNoBreakContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ReStructuredTextParser.RULE_commentLineNoBreak);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.commentLineAtoms();
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
    ReStructuredTextParser.prototype.commentLine = function () {
        var _localctx = new CommentLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ReStructuredTextParser.RULE_commentLine);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                this.match(ReStructuredTextParser.LineBreak);
                this.state = 175;
                this.match(ReStructuredTextParser.Space);
                this.state = 176;
                this.match(ReStructuredTextParser.Space);
                this.state = 177;
                this.match(ReStructuredTextParser.Space);
                this.state = 178;
                this.commentLineNoBreak();
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
    ReStructuredTextParser.prototype.commentLineAtoms = function () {
        var _localctx = new CommentLineAtomsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ReStructuredTextParser.RULE_commentLineAtoms);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 180;
                                    _la = this._input.LA(1);
                                    if (_la <= 0 || (_la === ReStructuredTextParser.LineBreak)) {
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
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 183;
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
    ReStructuredTextParser.prototype.paragraph = function () {
        var _localctx = new ParagraphContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ReStructuredTextParser.RULE_paragraph);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this.lines();
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
    ReStructuredTextParser.prototype.section = function () {
        var _localctx = new SectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ReStructuredTextParser.RULE_section);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 187;
                            this.match(ReStructuredTextParser.LineBreak);
                            this.state = 188;
                            _localctx._overline = this.match(ReStructuredTextParser.SectionSeparator);
                        }
                        break;
                }
                this.state = 191;
                this.title();
                this.state = 193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ReStructuredTextParser.LineBreak) {
                    {
                        this.state = 192;
                        this.match(ReStructuredTextParser.LineBreak);
                    }
                }
                this.state = 195;
                this.match(ReStructuredTextParser.SectionSeparator);
                this.state = 199;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 196;
                                this.match(ReStructuredTextParser.LineBreak);
                            }
                        }
                    }
                    this.state = 201;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                }
                this.state = 205;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 202;
                                this.sectionElement();
                            }
                        }
                    }
                    this.state = 207;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
    ReStructuredTextParser.prototype.title = function () {
        var _localctx = new TitleContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ReStructuredTextParser.RULE_title);
        var _la;
        try {
            var _alt = void 0;
            this.state = 222;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 208;
                        this.match(ReStructuredTextParser.LineBreak);
                        this.state = 209;
                        this.textStart();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 210;
                        this.match(ReStructuredTextParser.LineBreak);
                        this.state = 211;
                        this.lineSpecial();
                        this.state = 213;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 212;
                                            this.match(ReStructuredTextParser.Space);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 215;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 218;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.T__0) | (1 << ReStructuredTextParser.TimeStar) | (1 << ReStructuredTextParser.Alphabet) | (1 << ReStructuredTextParser.Numbers) | (1 << ReStructuredTextParser.SquareLeft) | (1 << ReStructuredTextParser.SquareRight) | (1 << ReStructuredTextParser.RoundLeft) | (1 << ReStructuredTextParser.RoundRight) | (1 << ReStructuredTextParser.AngleLeft) | (1 << ReStructuredTextParser.AngleRight) | (1 << ReStructuredTextParser.Hat) | (1 << ReStructuredTextParser.QuotationDouble) | (1 << ReStructuredTextParser.QuotationSingle) | (1 << ReStructuredTextParser.Dot) | (1 << ReStructuredTextParser.SemiColon) | (1 << ReStructuredTextParser.Colon) | (1 << ReStructuredTextParser.Equal) | (1 << ReStructuredTextParser.Plus) | (1 << ReStructuredTextParser.Minus) | (1 << ReStructuredTextParser.Block) | (1 << ReStructuredTextParser.UnderScore) | (1 << ReStructuredTextParser.BackTick) | (1 << ReStructuredTextParser.Space) | (1 << ReStructuredTextParser.Any))) !== 0)) {
                            {
                                this.state = 217;
                                this.paragraphNoBreak();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 220;
                        this.lineNormal();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 221;
                        this.lineStar();
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
    ReStructuredTextParser.prototype.lineBlock = function () {
        var _localctx = new LineBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ReStructuredTextParser.RULE_lineBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(ReStructuredTextParser.LineBreak);
                this.state = 225;
                this.lineBlockLine();
                this.state = 227;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 226;
                            this.match(ReStructuredTextParser.LineBreak);
                        }
                        break;
                }
                this.state = 232;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ReStructuredTextParser.Block) {
                    {
                        {
                            this.state = 229;
                            this.lineBlockLine();
                        }
                    }
                    this.state = 234;
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
    ReStructuredTextParser.prototype.lineBlockLine = function () {
        var _localctx = new LineBlockLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ReStructuredTextParser.RULE_lineBlockLine);
        try {
            var _alt = void 0;
            this.state = 257;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 235;
                        this.match(ReStructuredTextParser.Block);
                        this.state = 236;
                        this.match(ReStructuredTextParser.Space);
                        this.state = 238;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                            case 1:
                                {
                                    this.state = 237;
                                    this.indentation();
                                }
                                break;
                        }
                        this.state = 243;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 240;
                                        this.span();
                                    }
                                }
                            }
                            this.state = 245;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        }
                        this.state = 246;
                        this.starText();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 247;
                        this.match(ReStructuredTextParser.Block);
                        this.state = 248;
                        this.match(ReStructuredTextParser.Space);
                        this.state = 250;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                            case 1:
                                {
                                    this.state = 249;
                                    this.indentation();
                                }
                                break;
                        }
                        this.state = 253;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 252;
                                            this.span();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 255;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    ReStructuredTextParser.prototype.listItemBullet = function () {
        var _localctx = new ListItemBulletContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ReStructuredTextParser.RULE_listItemBullet);
        var _la;
        try {
            this.state = 269;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 259;
                        this.bulletCrossLine();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 260;
                        this.bulletSimple();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 261;
                        this.match(ReStructuredTextParser.LineBreak);
                        this.state = 265;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ReStructuredTextParser.Space) {
                            {
                                {
                                    this.state = 262;
                                    this.match(ReStructuredTextParser.Space);
                                }
                            }
                            this.state = 267;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 268;
                        _localctx._special = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === ReStructuredTextParser.Plus || _la === ReStructuredTextParser.Minus)) {
                            _localctx._special = this._errHandler.recoverInline(this);
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
    ReStructuredTextParser.prototype.bulletCrossLine = function () {
        var _localctx = new BulletCrossLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ReStructuredTextParser.RULE_bulletCrossLine);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this.match(ReStructuredTextParser.LineBreak);
                this.state = 275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ReStructuredTextParser.Space) {
                    {
                        {
                            this.state = 272;
                            this.match(ReStructuredTextParser.Space);
                        }
                    }
                    this.state = 277;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 278;
                this.bullet();
                this.state = 282;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 279;
                                this.match(ReStructuredTextParser.Space);
                            }
                        }
                    }
                    this.state = 284;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                }
                this.state = 290;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 286;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 285;
                                                this.paragraph();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 288;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
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
    ReStructuredTextParser.prototype.bulletSimple = function () {
        var _localctx = new BulletSimpleContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ReStructuredTextParser.RULE_bulletSimple);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 292;
                this.match(ReStructuredTextParser.LineBreak);
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ReStructuredTextParser.Space) {
                    {
                        {
                            this.state = 293;
                            this.match(ReStructuredTextParser.Space);
                        }
                    }
                    this.state = 298;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 299;
                this.bullet();
                this.state = 301;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 300;
                                    this.match(ReStructuredTextParser.Space);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 303;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 305;
                this.paragraphNoBreak();
                this.state = 309;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 306;
                                this.paragraph();
                            }
                        }
                    }
                    this.state = 311;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
    ReStructuredTextParser.prototype.bullet = function () {
        var _localctx = new BulletContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ReStructuredTextParser.RULE_bullet);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.Plus) | (1 << ReStructuredTextParser.Minus) | (1 << ReStructuredTextParser.Star))) !== 0))) {
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
    ReStructuredTextParser.prototype.listItemEnumerated = function () {
        var _localctx = new ListItemEnumeratedContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ReStructuredTextParser.RULE_listItemEnumerated);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 314;
                this.match(ReStructuredTextParser.LineBreak);
                this.state = 315;
                _localctx._enumerated = this.lineSpecial();
                this.state = 317;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 316;
                                    this.match(ReStructuredTextParser.Space);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 319;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 328;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 321;
                            this.paragraphNoBreak();
                            this.state = 325;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 322;
                                            this.paragraph();
                                        }
                                    }
                                }
                                this.state = 327;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                            }
                        }
                        break;
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
    ReStructuredTextParser.prototype.paragraphNoBreak = function () {
        var _localctx = new ParagraphNoBreakContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ReStructuredTextParser.RULE_paragraphNoBreak);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this.lineNoBreak();
                this.state = 334;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 331;
                                this.lines();
                            }
                        }
                    }
                    this.state = 336;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
    ReStructuredTextParser.prototype.lineNoBreak = function () {
        var _localctx = new LineNoBreakContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ReStructuredTextParser.RULE_lineNoBreak);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 338;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ReStructuredTextParser.Space) {
                    {
                        this.state = 337;
                        this.indentation();
                    }
                }
                this.state = 340;
                this.spanLineStartNoStar();
                this.state = 344;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1 + 1) {
                        {
                            {
                                this.state = 341;
                                this.span();
                            }
                        }
                    }
                    this.state = 346;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
    ReStructuredTextParser.prototype.lines = function () {
        var _localctx = new LinesContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ReStructuredTextParser.RULE_lines);
        try {
            this.state = 349;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 347;
                        this.linesStar();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 348;
                        this.linesNormal();
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
    ReStructuredTextParser.prototype.linesNormal = function () {
        var _localctx = new LinesNormalContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ReStructuredTextParser.RULE_linesNormal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this.lineNormal();
                this.state = 356;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                    case 1:
                        {
                            this.state = 352;
                            this.linesStar();
                        }
                        break;
                    case 2:
                        {
                            this.state = 354;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 353;
                                        this.linesNormal();
                                    }
                                    break;
                            }
                        }
                        break;
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
    ReStructuredTextParser.prototype.linesStar = function () {
        var _localctx = new LinesStarContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ReStructuredTextParser.RULE_linesStar);
        try {
            this.state = 368;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 358;
                        this.lineStar();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 359;
                        this.lineStar();
                        this.state = 360;
                        this.lineNoBreak();
                        this.state = 362;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                            case 1 + 1:
                                {
                                    this.state = 361;
                                    this.linesNormal();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 364;
                        this.lineStar();
                        this.state = 365;
                        this.lineNoBreak();
                        this.state = 366;
                        this.linesStar();
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
    ReStructuredTextParser.prototype.lineNormal = function () {
        var _localctx = new LineNormalContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ReStructuredTextParser.RULE_lineNormal);
        var _la;
        try {
            var _alt = void 0;
            this.state = 393;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 370;
                        this.match(ReStructuredTextParser.LineBreak);
                        this.state = 372;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ReStructuredTextParser.Space) {
                            {
                                this.state = 371;
                                this.indentation();
                            }
                        }
                        this.state = 375;
                        this._errHandler.sync(this);
                        _alt = 1 + 1;
                        do {
                            switch (_alt) {
                                case 1 + 1:
                                    {
                                        {
                                            this.state = 374;
                                            this.spanLineStartNoStar();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 377;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                        } while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 390;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                            case 1:
                                {
                                    this.state = 382;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                                    while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1 + 1) {
                                            {
                                                {
                                                    this.state = 379;
                                                    this.span();
                                                }
                                            }
                                        }
                                        this.state = 384;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                                    }
                                    this.state = 386;
                                    this._errHandler.sync(this);
                                    _alt = 1 + 1;
                                    do {
                                        switch (_alt) {
                                            case 1 + 1:
                                                {
                                                    {
                                                        this.state = 385;
                                                        this.spanNoStar();
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 388;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                                    } while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 392;
                        this.lineSpecial();
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
    ReStructuredTextParser.prototype.lineStar = function () {
        var _localctx = new LineStarContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ReStructuredTextParser.RULE_lineStar);
        var _la;
        try {
            var _alt = void 0;
            this.state = 417;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 395;
                        this.match(ReStructuredTextParser.LineBreak);
                        this.state = 397;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ReStructuredTextParser.Space) {
                            {
                                this.state = 396;
                                this.indentation();
                            }
                        }
                        this.state = 402;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 399;
                                        this.spanLineStartNoStar();
                                    }
                                }
                            }
                            this.state = 404;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                        }
                        this.state = 405;
                        this.starText();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 406;
                        this.match(ReStructuredTextParser.LineBreak);
                        this.state = 408;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                            case 1:
                                {
                                    this.state = 407;
                                    this.indentation();
                                }
                                break;
                        }
                        this.state = 411;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 410;
                                            this.text_fragment();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 413;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 415;
                        this.starText();
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
    ReStructuredTextParser.prototype.lineSpecial = function () {
        var _localctx = new LineSpecialContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ReStructuredTextParser.RULE_lineSpecial);
        var _la;
        try {
            var _alt = void 0;
            this.state = 444;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 419;
                        this.match(ReStructuredTextParser.Numbers);
                        this.state = 420;
                        this.match(ReStructuredTextParser.Dot);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 421;
                        this.match(ReStructuredTextParser.LineBreak);
                        this.state = 423;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ReStructuredTextParser.Space) {
                            {
                                this.state = 422;
                                this.indentation();
                            }
                        }
                        this.state = 425;
                        this.match(ReStructuredTextParser.Numbers);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 426;
                        this.match(ReStructuredTextParser.LineBreak);
                        this.state = 428;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ReStructuredTextParser.Space) {
                            {
                                this.state = 427;
                                this.indentation();
                            }
                        }
                        this.state = 430;
                        this.match(ReStructuredTextParser.SectionSeparator);
                        {
                            this.state = 432;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 431;
                                        this.match(ReStructuredTextParser.Space);
                                    }
                                }
                                this.state = 434;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === ReStructuredTextParser.Space);
                            this.state = 436;
                            this.match(ReStructuredTextParser.SectionSeparator);
                        }
                        this.state = 441;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 438;
                                        this.match(ReStructuredTextParser.Space);
                                    }
                                }
                            }
                            this.state = 443;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
    ReStructuredTextParser.prototype.empty_line = function () {
        var _localctx = new Empty_lineContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ReStructuredTextParser.RULE_empty_line);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this.match(ReStructuredTextParser.LineBreak);
                this.state = 450;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 447;
                                this.match(ReStructuredTextParser.Space);
                            }
                        }
                    }
                    this.state = 452;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
    ReStructuredTextParser.prototype.indentation = function () {
        var _localctx = new IndentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ReStructuredTextParser.RULE_indentation);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 453;
                                    this.match(ReStructuredTextParser.Space);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 456;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
    ReStructuredTextParser.prototype.spanLineStartNoStar = function () {
        var _localctx = new SpanLineStartNoStarContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ReStructuredTextParser.RULE_spanLineStartNoStar);
        try {
            this.state = 466;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 458;
                        this.reference();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 459;
                        this.referenceIn();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 460;
                        this.hyperlinkTarget();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 461;
                        this.hyperlink();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 462;
                        this.hyperlinkDoc();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 463;
                        this.backTickText();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 464;
                        this.quotedLiteral();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 465;
                        this.textLineStart();
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
    ReStructuredTextParser.prototype.textLineStart = function () {
        var _localctx = new TextLineStartContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ReStructuredTextParser.RULE_textLineStart);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 469;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 468;
                                    this.lineStart_fragment();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 471;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 476;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 473;
                                this.text_fragment();
                            }
                        }
                    }
                    this.state = 478;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
    ReStructuredTextParser.prototype.lineStart_fragment = function () {
        var _localctx = new LineStart_fragmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ReStructuredTextParser.RULE_lineStart_fragment);
        var _la;
        try {
            this.state = 514;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 479;
                            this.match(ReStructuredTextParser.Minus);
                            this.state = 480;
                            _la = this._input.LA(1);
                            if (_la <= 0 || ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.Star) | (1 << ReStructuredTextParser.Space) | (1 << ReStructuredTextParser.LineBreak))) !== 0))) {
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
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 481;
                            this.match(ReStructuredTextParser.Plus);
                            this.state = 482;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === ReStructuredTextParser.Star || _la === ReStructuredTextParser.Space)) {
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
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 483;
                            this.match(ReStructuredTextParser.Numbers);
                            this.state = 484;
                            this.match(ReStructuredTextParser.Dot);
                            this.state = 485;
                            _la = this._input.LA(1);
                            if (_la <= 0 || ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.Star) | (1 << ReStructuredTextParser.Space) | (1 << ReStructuredTextParser.LineBreak))) !== 0))) {
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
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        {
                            this.state = 486;
                            this.match(ReStructuredTextParser.Numbers);
                            this.state = 487;
                            _la = this._input.LA(1);
                            if (_la <= 0 || ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.Dot) | (1 << ReStructuredTextParser.Star) | (1 << ReStructuredTextParser.LineBreak))) !== 0))) {
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
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        {
                            this.state = 488;
                            this.match(ReStructuredTextParser.Alphabet);
                            this.state = 489;
                            this.match(ReStructuredTextParser.Dot);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        {
                            this.state = 490;
                            this.match(ReStructuredTextParser.Block);
                            this.state = 491;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === ReStructuredTextParser.Star || _la === ReStructuredTextParser.Space)) {
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
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        {
                            this.state = 492;
                            this.match(ReStructuredTextParser.UnderScore);
                            this.state = 493;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === ReStructuredTextParser.Star || _la === ReStructuredTextParser.Space)) {
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
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        {
                            this.state = 494;
                            this.match(ReStructuredTextParser.Alphabet);
                            this.state = 495;
                            _la = this._input.LA(1);
                            if (_la <= 0 || ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.Dot) | (1 << ReStructuredTextParser.Star) | (1 << ReStructuredTextParser.LineBreak))) !== 0))) {
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
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 496;
                        this.match(ReStructuredTextParser.Alphabet);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 497;
                        this.separator();
                        this.state = 498;
                        this.separator();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 500;
                        this.match(ReStructuredTextParser.TimeStar);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 501;
                        this.match(ReStructuredTextParser.SquareLeft);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 502;
                        this.match(ReStructuredTextParser.SquareRight);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 503;
                        this.match(ReStructuredTextParser.RoundLeft);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 504;
                        this.match(ReStructuredTextParser.RoundRight);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 505;
                        this.match(ReStructuredTextParser.SemiColon);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 506;
                        this.match(ReStructuredTextParser.Colon);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 507;
                        this.match(ReStructuredTextParser.QuotationDouble);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 508;
                        this.match(ReStructuredTextParser.QuotationSingle);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 509;
                        this.match(ReStructuredTextParser.Dot);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 510;
                        this.match(ReStructuredTextParser.UnderScore);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 511;
                        this.match(ReStructuredTextParser.AngleLeft);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 512;
                        this.match(ReStructuredTextParser.AngleRight);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 513;
                        this.match(ReStructuredTextParser.Any);
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
    ReStructuredTextParser.prototype.text = function () {
        var _localctx = new TextContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ReStructuredTextParser.RULE_text);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 516;
                                    this.textStart();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 519;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 524;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 521;
                                this.text_fragment();
                            }
                        }
                    }
                    this.state = 526;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
    ReStructuredTextParser.prototype.textStart = function () {
        var _localctx = new TextStartContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ReStructuredTextParser.RULE_textStart);
        try {
            var _alt = void 0;
            this.state = 536;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 527;
                        this.forcedText();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 528;
                        this.lineStart_fragment();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 529;
                        this.text_fragment_start();
                        this.state = 531;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 530;
                                            this.text_fragment_start();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 533;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 535;
                        this.match(ReStructuredTextParser.Space);
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
    ReStructuredTextParser.prototype.forcedText = function () {
        var _localctx = new ForcedTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ReStructuredTextParser.RULE_forcedText);
        try {
            this.state = 552;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 538;
                        this.match(ReStructuredTextParser.RoundLeft);
                        this.state = 539;
                        this.match(ReStructuredTextParser.Star);
                        this.state = 540;
                        this.match(ReStructuredTextParser.RoundRight);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 541;
                        this.match(ReStructuredTextParser.SquareLeft);
                        this.state = 542;
                        this.match(ReStructuredTextParser.Star);
                        this.state = 543;
                        this.match(ReStructuredTextParser.SquareRight);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 544;
                        this.match(ReStructuredTextParser.QuotationSingle);
                        this.state = 545;
                        this.match(ReStructuredTextParser.Star);
                        this.state = 546;
                        this.match(ReStructuredTextParser.QuotationSingle);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 547;
                        this.match(ReStructuredTextParser.QuotationSingle);
                        this.state = 548;
                        this.match(ReStructuredTextParser.QuotationDouble);
                        this.state = 549;
                        this.match(ReStructuredTextParser.Star);
                        this.state = 550;
                        this.match(ReStructuredTextParser.QuotationDouble);
                        this.state = 551;
                        this.match(ReStructuredTextParser.QuotationSingle);
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
    ReStructuredTextParser.prototype.spanNoStar = function () {
        var _localctx = new SpanNoStarContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ReStructuredTextParser.RULE_spanNoStar);
        try {
            this.state = 562;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 554;
                        this.reference();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 555;
                        this.referenceIn();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 556;
                        this.hyperlinkTarget();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 557;
                        this.hyperlink();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 558;
                        this.hyperlinkDoc();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 559;
                        this.backTickText();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 560;
                        this.quotedLiteral();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 561;
                        this.text();
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
    ReStructuredTextParser.prototype.span = function () {
        var _localctx = new SpanContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ReStructuredTextParser.RULE_span);
        try {
            this.state = 566;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 564;
                        this.starText();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 565;
                        this.spanNoStar();
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
    ReStructuredTextParser.prototype.quotedLiteral = function () {
        var _localctx = new QuotedLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ReStructuredTextParser.RULE_quotedLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 568;
                this.match(ReStructuredTextParser.AngleRight);
                this.state = 569;
                this.match(ReStructuredTextParser.Space);
                this.state = 570;
                this.lineNoBreak();
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
    ReStructuredTextParser.prototype.text_fragment_start = function () {
        var _localctx = new Text_fragment_startContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ReStructuredTextParser.RULE_text_fragment_start);
        try {
            this.state = 589;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ReStructuredTextParser.SemiColon:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 572;
                        this.match(ReStructuredTextParser.SemiColon);
                    }
                    break;
                case ReStructuredTextParser.Numbers:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 573;
                        this.match(ReStructuredTextParser.Numbers);
                    }
                    break;
                case ReStructuredTextParser.Alphabet:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 574;
                        this.match(ReStructuredTextParser.Alphabet);
                    }
                    break;
                case ReStructuredTextParser.Space:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 575;
                        this.match(ReStructuredTextParser.Space);
                    }
                    break;
                case ReStructuredTextParser.SquareLeft:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 576;
                        this.match(ReStructuredTextParser.SquareLeft);
                    }
                    break;
                case ReStructuredTextParser.SquareRight:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 577;
                        this.match(ReStructuredTextParser.SquareRight);
                    }
                    break;
                case ReStructuredTextParser.RoundLeft:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 578;
                        this.match(ReStructuredTextParser.RoundLeft);
                    }
                    break;
                case ReStructuredTextParser.RoundRight:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 579;
                        this.match(ReStructuredTextParser.RoundRight);
                    }
                    break;
                case ReStructuredTextParser.Colon:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 580;
                        this.match(ReStructuredTextParser.Colon);
                    }
                    break;
                case ReStructuredTextParser.Hat:
                case ReStructuredTextParser.Equal:
                case ReStructuredTextParser.Plus:
                case ReStructuredTextParser.Minus:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 581;
                        this.separator();
                    }
                    break;
                case ReStructuredTextParser.AngleLeft:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 582;
                        this.match(ReStructuredTextParser.AngleLeft);
                    }
                    break;
                case ReStructuredTextParser.AngleRight:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 583;
                        this.match(ReStructuredTextParser.AngleRight);
                    }
                    break;
                case ReStructuredTextParser.QuotationDouble:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 584;
                        this.match(ReStructuredTextParser.QuotationDouble);
                    }
                    break;
                case ReStructuredTextParser.Dot:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 585;
                        this.match(ReStructuredTextParser.Dot);
                    }
                    break;
                case ReStructuredTextParser.Star:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 586;
                        this.match(ReStructuredTextParser.Star);
                        this.state = 587;
                        this.match(ReStructuredTextParser.Space);
                    }
                    break;
                case ReStructuredTextParser.Any:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 588;
                        this.match(ReStructuredTextParser.Any);
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
    ReStructuredTextParser.prototype.text_fragment = function () {
        var _localctx = new Text_fragmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ReStructuredTextParser.RULE_text_fragment);
        try {
            this.state = 598;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 591;
                        this.text_fragment_start();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 592;
                        this.forcedText();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 593;
                        this.match(ReStructuredTextParser.Block);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 594;
                        this.match(ReStructuredTextParser.Literal);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 595;
                        this.match(ReStructuredTextParser.Comment);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 596;
                        this.match(ReStructuredTextParser.Dot);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 597;
                        this.match(ReStructuredTextParser.Quote);
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
    ReStructuredTextParser.prototype.starText = function () {
        var _localctx = new StarTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, ReStructuredTextParser.RULE_starText);
        var _la;
        try {
            var _alt = void 0;
            this.state = 669;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 601;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 600;
                                    this.match(ReStructuredTextParser.Star);
                                }
                            }
                            this.state = 603;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ReStructuredTextParser.Star);
                        this.state = 605;
                        this.match(ReStructuredTextParser.LineBreak);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 607;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 606;
                                    this.match(ReStructuredTextParser.Star);
                                }
                            }
                            this.state = 609;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ReStructuredTextParser.Star);
                        this.state = 611;
                        this.starNoSpace();
                        this.state = 612;
                        this.starAtoms();
                        this.state = 625;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 613;
                                        this.match(ReStructuredTextParser.LineBreak);
                                        this.state = 617;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === ReStructuredTextParser.Star) {
                                            {
                                                {
                                                    this.state = 614;
                                                    this.match(ReStructuredTextParser.Star);
                                                }
                                            }
                                            this.state = 619;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 620;
                                        this.starNoSpace();
                                        this.state = 621;
                                        this.starAtoms();
                                    }
                                }
                            }
                            this.state = 627;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                        }
                        this.state = 631;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ReStructuredTextParser.Star) {
                            {
                                {
                                    this.state = 628;
                                    this.match(ReStructuredTextParser.Star);
                                }
                            }
                            this.state = 633;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 634;
                        this.match(ReStructuredTextParser.LineBreak);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 637;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 636;
                                    this.match(ReStructuredTextParser.Star);
                                }
                            }
                            this.state = 639;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ReStructuredTextParser.Star);
                        this.state = 641;
                        this.starNoSpace();
                        this.state = 642;
                        this.starAtoms();
                        this.state = 646;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ReStructuredTextParser.Star) {
                            {
                                {
                                    this.state = 643;
                                    this.match(ReStructuredTextParser.Star);
                                }
                            }
                            this.state = 648;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 649;
                        this.match(ReStructuredTextParser.LineBreak);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 652;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 651;
                                    this.match(ReStructuredTextParser.Star);
                                }
                            }
                            this.state = 654;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ReStructuredTextParser.Star);
                        this.state = 657;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 656;
                                            this.match(ReStructuredTextParser.Space);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 659;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 661;
                        this.starAtoms();
                        this.state = 663;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 662;
                                    this.match(ReStructuredTextParser.Star);
                                }
                            }
                            this.state = 665;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === ReStructuredTextParser.Star);
                        this.state = 667;
                        this.match(ReStructuredTextParser.LineBreak);
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
    ReStructuredTextParser.prototype.starAtoms = function () {
        var _localctx = new StarAtomsContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, ReStructuredTextParser.RULE_starAtoms);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 674;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 671;
                                this.starAtom();
                            }
                        }
                    }
                    this.state = 676;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                }
                this.state = 686;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 680;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === ReStructuredTextParser.Star) {
                                    {
                                        {
                                            this.state = 677;
                                            this.match(ReStructuredTextParser.Star);
                                        }
                                    }
                                    this.state = 682;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 683;
                                this.starAtom();
                            }
                        }
                    }
                    this.state = 688;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
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
    ReStructuredTextParser.prototype.starNoSpace = function () {
        var _localctx = new StarNoSpaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, ReStructuredTextParser.RULE_starNoSpace);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 689;
                _la = this._input.LA(1);
                if (_la <= 0 || ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.SectionSeparator) | (1 << ReStructuredTextParser.Star) | (1 << ReStructuredTextParser.Space) | (1 << ReStructuredTextParser.LineBreak))) !== 0))) {
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
    ReStructuredTextParser.prototype.starAtom = function () {
        var _localctx = new StarAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, ReStructuredTextParser.RULE_starAtom);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 691;
                _la = this._input.LA(1);
                if (_la <= 0 || (_la === ReStructuredTextParser.Star || _la === ReStructuredTextParser.LineBreak)) {
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
    ReStructuredTextParser.prototype.backTickText = function () {
        var _localctx = new BackTickTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, ReStructuredTextParser.RULE_backTickText);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 696;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ReStructuredTextParser.Colon) {
                    {
                        this.state = 693;
                        this.match(ReStructuredTextParser.Colon);
                        this.state = 694;
                        _localctx._titled = this.match(ReStructuredTextParser.Alphabet);
                        this.state = 695;
                        this.match(ReStructuredTextParser.Colon);
                    }
                }
                this.state = 698;
                this.body();
                this.state = 700;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                    case 1:
                        {
                            this.state = 699;
                            this.match(ReStructuredTextParser.UnderScore);
                        }
                        break;
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
    ReStructuredTextParser.prototype.body = function () {
        var _localctx = new BodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, ReStructuredTextParser.RULE_body);
        try {
            var _alt = void 0;
            this.state = 725;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 702;
                        this.match(ReStructuredTextParser.BackTick);
                        this.state = 706;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 703;
                                        this.match(ReStructuredTextParser.BackTick);
                                    }
                                }
                            }
                            this.state = 708;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                        }
                        this.state = 709;
                        this.backTickAtoms();
                        this.state = 711;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 710;
                                            this.match(ReStructuredTextParser.BackTick);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 713;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 715;
                        this.match(ReStructuredTextParser.BackTick);
                        this.state = 716;
                        this.backTickNoSpace();
                        this.state = 717;
                        this.backTickAtoms();
                        this.state = 719;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 718;
                                            this.match(ReStructuredTextParser.BackTick);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 721;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 723;
                        this.match(ReStructuredTextParser.BackTick);
                        this.state = 724;
                        this.match(ReStructuredTextParser.BackTick);
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
    ReStructuredTextParser.prototype.backTickAtoms = function () {
        var _localctx = new BackTickAtomsContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, ReStructuredTextParser.RULE_backTickAtoms);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 728;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 727;
                                    this.backTickAtom();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 730;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
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
    ReStructuredTextParser.prototype.backTickNoSpace = function () {
        var _localctx = new BackTickNoSpaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, ReStructuredTextParser.RULE_backTickNoSpace);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 732;
                _la = this._input.LA(1);
                if (_la <= 0 || ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.BackTick) | (1 << ReStructuredTextParser.Space) | (1 << ReStructuredTextParser.LineBreak))) !== 0))) {
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
    ReStructuredTextParser.prototype.backTickAtom = function () {
        var _localctx = new BackTickAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, ReStructuredTextParser.RULE_backTickAtom);
        var _la;
        try {
            this.state = 737;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ReStructuredTextParser.T__0:
                case ReStructuredTextParser.SectionSeparator:
                case ReStructuredTextParser.Literal:
                case ReStructuredTextParser.TimeStar:
                case ReStructuredTextParser.Alphabet:
                case ReStructuredTextParser.Numbers:
                case ReStructuredTextParser.Quote:
                case ReStructuredTextParser.SquareLeft:
                case ReStructuredTextParser.SquareRight:
                case ReStructuredTextParser.RoundLeft:
                case ReStructuredTextParser.RoundRight:
                case ReStructuredTextParser.AngleLeft:
                case ReStructuredTextParser.AngleRight:
                case ReStructuredTextParser.Hat:
                case ReStructuredTextParser.QuotationDouble:
                case ReStructuredTextParser.QuotationSingle:
                case ReStructuredTextParser.Dot:
                case ReStructuredTextParser.SemiColon:
                case ReStructuredTextParser.Colon:
                case ReStructuredTextParser.Equal:
                case ReStructuredTextParser.Plus:
                case ReStructuredTextParser.Minus:
                case ReStructuredTextParser.Block:
                case ReStructuredTextParser.Comment:
                case ReStructuredTextParser.UnderScore:
                case ReStructuredTextParser.Star:
                case ReStructuredTextParser.Space:
                case ReStructuredTextParser.Any:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 734;
                        _la = this._input.LA(1);
                        if (_la <= 0 || (_la === ReStructuredTextParser.BackTick || _la === ReStructuredTextParser.LineBreak)) {
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
                case ReStructuredTextParser.BackTick:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 735;
                        this.match(ReStructuredTextParser.BackTick);
                        this.state = 736;
                        _la = this._input.LA(1);
                        if (_la <= 0 || (_la === ReStructuredTextParser.BackTick || _la === ReStructuredTextParser.LineBreak)) {
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
    ReStructuredTextParser.prototype.reference = function () {
        var _localctx = new ReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, ReStructuredTextParser.RULE_reference);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 740;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 739;
                            this.match(ReStructuredTextParser.Any);
                        }
                    }
                    this.state = 742;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ReStructuredTextParser.Any);
                this.state = 744;
                this.match(ReStructuredTextParser.UnderScore);
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
    ReStructuredTextParser.prototype.referenceIn = function () {
        var _localctx = new ReferenceInContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, ReStructuredTextParser.RULE_referenceIn);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 746;
                this.match(ReStructuredTextParser.UnderScore);
                this.state = 748;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 747;
                                    this.hyperlinkAtom();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 750;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 752;
                this.match(ReStructuredTextParser.Colon);
                this.state = 753;
                this.match(ReStructuredTextParser.Space);
                this.state = 754;
                this.url();
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
    ReStructuredTextParser.prototype.hyperlinkTarget = function () {
        var _localctx = new HyperlinkTargetContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, ReStructuredTextParser.RULE_hyperlinkTarget);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 756;
                this.match(ReStructuredTextParser.UnderScore);
                this.state = 758;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 757;
                                    this.match(ReStructuredTextParser.Any);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 760;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
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
    ReStructuredTextParser.prototype.hyperlink = function () {
        var _localctx = new HyperlinkContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, ReStructuredTextParser.RULE_hyperlink);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 762;
                this.match(ReStructuredTextParser.BackTick);
                this.state = 764;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 763;
                                    this.hyperlinkAtom();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 766;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 768;
                this.match(ReStructuredTextParser.Space);
                this.state = 769;
                this.match(ReStructuredTextParser.AngleLeft);
                this.state = 770;
                this.url();
                this.state = 771;
                this.match(ReStructuredTextParser.AngleRight);
                this.state = 772;
                this.match(ReStructuredTextParser.BackTick);
                this.state = 773;
                this.match(ReStructuredTextParser.UnderScore);
                this.state = 774;
                this.match(ReStructuredTextParser.Space);
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
    ReStructuredTextParser.prototype.hyperlinkDoc = function () {
        var _localctx = new HyperlinkDocContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, ReStructuredTextParser.RULE_hyperlinkDoc);
        try {
            var _alt = void 0;
            this.state = 794;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 776;
                        this.match(ReStructuredTextParser.T__0);
                        this.state = 777;
                        this.match(ReStructuredTextParser.BackTick);
                        this.state = 779;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 778;
                                            this.hyperlinkAtom();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 781;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 783;
                        this.match(ReStructuredTextParser.Space);
                        this.state = 784;
                        this.match(ReStructuredTextParser.AngleLeft);
                        this.state = 785;
                        this.url();
                        this.state = 786;
                        this.match(ReStructuredTextParser.AngleRight);
                        this.state = 787;
                        this.match(ReStructuredTextParser.BackTick);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 789;
                        this.match(ReStructuredTextParser.T__0);
                        this.state = 790;
                        this.match(ReStructuredTextParser.BackTick);
                        this.state = 791;
                        this.url();
                        this.state = 792;
                        this.match(ReStructuredTextParser.BackTick);
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
    ReStructuredTextParser.prototype.url = function () {
        var _localctx = new UrlContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, ReStructuredTextParser.RULE_url);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 797;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 796;
                                    this.urlAtom();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 799;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
    ReStructuredTextParser.prototype.urlAtom = function () {
        var _localctx = new UrlAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, ReStructuredTextParser.RULE_urlAtom);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 801;
                _la = this._input.LA(1);
                if (_la <= 0 || (_la === ReStructuredTextParser.BackTick || _la === ReStructuredTextParser.LineBreak)) {
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
    ReStructuredTextParser.prototype.hyperlinkAtom = function () {
        var _localctx = new HyperlinkAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, ReStructuredTextParser.RULE_hyperlinkAtom);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 803;
                _la = this._input.LA(1);
                if (_la <= 0 || ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.AngleLeft) | (1 << ReStructuredTextParser.AngleRight) | (1 << ReStructuredTextParser.BackTick) | (1 << ReStructuredTextParser.Star) | (1 << ReStructuredTextParser.LineBreak))) !== 0))) {
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
    ReStructuredTextParser.prototype.separator = function () {
        var _localctx = new SeparatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, ReStructuredTextParser.RULE_separator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 805;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ReStructuredTextParser.Hat) | (1 << ReStructuredTextParser.Equal) | (1 << ReStructuredTextParser.Plus) | (1 << ReStructuredTextParser.Minus))) !== 0))) {
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
    Object.defineProperty(ReStructuredTextParser, "_ATN", {
        get: function () {
            if (!ReStructuredTextParser.__ATN) {
                ReStructuredTextParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ReStructuredTextParser._serializedATN));
            }
            return ReStructuredTextParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ReStructuredTextParser.T__0 = 1;
    ReStructuredTextParser.SectionSeparator = 2;
    ReStructuredTextParser.Literal = 3;
    ReStructuredTextParser.TimeStar = 4;
    ReStructuredTextParser.Alphabet = 5;
    ReStructuredTextParser.Numbers = 6;
    ReStructuredTextParser.Quote = 7;
    ReStructuredTextParser.SquareLeft = 8;
    ReStructuredTextParser.SquareRight = 9;
    ReStructuredTextParser.RoundLeft = 10;
    ReStructuredTextParser.RoundRight = 11;
    ReStructuredTextParser.AngleLeft = 12;
    ReStructuredTextParser.AngleRight = 13;
    ReStructuredTextParser.Hat = 14;
    ReStructuredTextParser.QuotationDouble = 15;
    ReStructuredTextParser.QuotationSingle = 16;
    ReStructuredTextParser.Dot = 17;
    ReStructuredTextParser.SemiColon = 18;
    ReStructuredTextParser.Colon = 19;
    ReStructuredTextParser.Equal = 20;
    ReStructuredTextParser.Plus = 21;
    ReStructuredTextParser.Minus = 22;
    ReStructuredTextParser.Block = 23;
    ReStructuredTextParser.Comment = 24;
    ReStructuredTextParser.UnderScore = 25;
    ReStructuredTextParser.BackTick = 26;
    ReStructuredTextParser.Star = 27;
    ReStructuredTextParser.Space = 28;
    ReStructuredTextParser.LineBreak = 29;
    ReStructuredTextParser.Any = 30;
    ReStructuredTextParser.RULE_parse = 0;
    ReStructuredTextParser.RULE_element = 1;
    ReStructuredTextParser.RULE_sectionElement = 2;
    ReStructuredTextParser.RULE_comment = 3;
    ReStructuredTextParser.RULE_commentParagraphs = 4;
    ReStructuredTextParser.RULE_commentRest = 5;
    ReStructuredTextParser.RULE_commentParagraph = 6;
    ReStructuredTextParser.RULE_commentLineNoBreak = 7;
    ReStructuredTextParser.RULE_commentLine = 8;
    ReStructuredTextParser.RULE_commentLineAtoms = 9;
    ReStructuredTextParser.RULE_paragraph = 10;
    ReStructuredTextParser.RULE_section = 11;
    ReStructuredTextParser.RULE_title = 12;
    ReStructuredTextParser.RULE_lineBlock = 13;
    ReStructuredTextParser.RULE_lineBlockLine = 14;
    ReStructuredTextParser.RULE_listItemBullet = 15;
    ReStructuredTextParser.RULE_bulletCrossLine = 16;
    ReStructuredTextParser.RULE_bulletSimple = 17;
    ReStructuredTextParser.RULE_bullet = 18;
    ReStructuredTextParser.RULE_listItemEnumerated = 19;
    ReStructuredTextParser.RULE_paragraphNoBreak = 20;
    ReStructuredTextParser.RULE_lineNoBreak = 21;
    ReStructuredTextParser.RULE_lines = 22;
    ReStructuredTextParser.RULE_linesNormal = 23;
    ReStructuredTextParser.RULE_linesStar = 24;
    ReStructuredTextParser.RULE_lineNormal = 25;
    ReStructuredTextParser.RULE_lineStar = 26;
    ReStructuredTextParser.RULE_lineSpecial = 27;
    ReStructuredTextParser.RULE_empty_line = 28;
    ReStructuredTextParser.RULE_indentation = 29;
    ReStructuredTextParser.RULE_spanLineStartNoStar = 30;
    ReStructuredTextParser.RULE_textLineStart = 31;
    ReStructuredTextParser.RULE_lineStart_fragment = 32;
    ReStructuredTextParser.RULE_text = 33;
    ReStructuredTextParser.RULE_textStart = 34;
    ReStructuredTextParser.RULE_forcedText = 35;
    ReStructuredTextParser.RULE_spanNoStar = 36;
    ReStructuredTextParser.RULE_span = 37;
    ReStructuredTextParser.RULE_quotedLiteral = 38;
    ReStructuredTextParser.RULE_text_fragment_start = 39;
    ReStructuredTextParser.RULE_text_fragment = 40;
    ReStructuredTextParser.RULE_starText = 41;
    ReStructuredTextParser.RULE_starAtoms = 42;
    ReStructuredTextParser.RULE_starNoSpace = 43;
    ReStructuredTextParser.RULE_starAtom = 44;
    ReStructuredTextParser.RULE_backTickText = 45;
    ReStructuredTextParser.RULE_body = 46;
    ReStructuredTextParser.RULE_backTickAtoms = 47;
    ReStructuredTextParser.RULE_backTickNoSpace = 48;
    ReStructuredTextParser.RULE_backTickAtom = 49;
    ReStructuredTextParser.RULE_reference = 50;
    ReStructuredTextParser.RULE_referenceIn = 51;
    ReStructuredTextParser.RULE_hyperlinkTarget = 52;
    ReStructuredTextParser.RULE_hyperlink = 53;
    ReStructuredTextParser.RULE_hyperlinkDoc = 54;
    ReStructuredTextParser.RULE_url = 55;
    ReStructuredTextParser.RULE_urlAtom = 56;
    ReStructuredTextParser.RULE_hyperlinkAtom = 57;
    ReStructuredTextParser.RULE_separator = 58;
    // tslint:disable:no-trailing-whitespace
    ReStructuredTextParser.ruleNames = [
        "parse", "element", "sectionElement", "comment", "commentParagraphs",
        "commentRest", "commentParagraph", "commentLineNoBreak", "commentLine",
        "commentLineAtoms", "paragraph", "section", "title", "lineBlock", "lineBlockLine",
        "listItemBullet", "bulletCrossLine", "bulletSimple", "bullet", "listItemEnumerated",
        "paragraphNoBreak", "lineNoBreak", "lines", "linesNormal", "linesStar",
        "lineNormal", "lineStar", "lineSpecial", "empty_line", "indentation",
        "spanLineStartNoStar", "textLineStart", "lineStart_fragment", "text",
        "textStart", "forcedText", "spanNoStar", "span", "quotedLiteral", "text_fragment_start",
        "text_fragment", "starText", "starAtoms", "starNoSpace", "starAtom", "backTickText",
        "body", "backTickAtoms", "backTickNoSpace", "backTickAtom", "reference",
        "referenceIn", "hyperlinkTarget", "hyperlink", "hyperlinkDoc", "url",
        "urlAtom", "hyperlinkAtom", "separator",
    ];
    ReStructuredTextParser._LITERAL_NAMES = [
        undefined, "':doc:'", undefined, undefined, undefined, undefined, undefined,
        undefined, "'['", "']'", "'('", "')'", "'<'", "'>'", "'^'", "'\"'", "'''",
        "'.'", "';'", "':'", "'='", "'+'", "'-'", "'|'", undefined, "'_'", "'`'",
        "'*'",
    ];
    ReStructuredTextParser._SYMBOLIC_NAMES = [
        undefined, undefined, "SectionSeparator", "Literal", "TimeStar", "Alphabet",
        "Numbers", "Quote", "SquareLeft", "SquareRight", "RoundLeft", "RoundRight",
        "AngleLeft", "AngleRight", "Hat", "QuotationDouble", "QuotationSingle",
        "Dot", "SemiColon", "Colon", "Equal", "Plus", "Minus", "Block", "Comment",
        "UnderScore", "BackTick", "Star", "Space", "LineBreak", "Any",
    ];
    ReStructuredTextParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ReStructuredTextParser._LITERAL_NAMES, ReStructuredTextParser._SYMBOLIC_NAMES, []);
    ReStructuredTextParser._serializedATNSegments = 2;
    ReStructuredTextParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03 \u032A\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x03" +
        "\x02\x03\x02\x06\x02{\n\x02\r\x02\x0E\x02|\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x05\x03\x83\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
        "\x8A\n\x04\x03\x05\x07\x05\x8D\n\x05\f\x05\x0E\x05\x90\v\x05\x03\x05\x03" +
        "\x05\x07\x05\x94\n\x05\f\x05\x0E\x05\x97\v\x05\x03\x05\x03\x05\x05\x05" +
        "\x9B\n\x05\x05\x05\x9D\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
        "\x07\x07\x07\xA5\n\x07\f\x07\x0E\x07\xA8\v\x07\x03\b\x06\b\xAB\n\b\r\b" +
        "\x0E\b\xAC\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x06\v" +
        "\xB8\n\v\r\v\x0E\v\xB9\x03\f\x03\f\x03\r\x03\r\x05\r\xC0\n\r\x03\r\x03" +
        "\r\x05\r\xC4\n\r\x03\r\x03\r\x07\r\xC8\n\r\f\r\x0E\r\xCB\v\r\x03\r\x07" +
        "\r\xCE\n\r\f\r\x0E\r\xD1\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x06" +
        "\x0E\xD8\n\x0E\r\x0E\x0E\x0E\xD9\x03\x0E\x05\x0E\xDD\n\x0E\x03\x0E\x03" +
        "\x0E\x05\x0E\xE1\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE6\n\x0F\x03\x0F" +
        "\x07\x0F\xE9\n\x0F\f\x0F\x0E\x0F\xEC\v\x0F\x03\x10\x03\x10\x03\x10\x05" +
        "\x10\xF1\n\x10\x03\x10\x07\x10\xF4\n\x10\f\x10\x0E\x10\xF7\v\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x05\x10\xFD\n\x10\x03\x10\x06\x10\u0100\n\x10" +
        "\r\x10\x0E\x10\u0101\x05\x10\u0104\n\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
        "\x07\x11\u010A\n\x11\f\x11\x0E\x11\u010D\v\x11\x03\x11\x05\x11\u0110\n" +
        "\x11\x03\x12\x03\x12\x07\x12\u0114\n\x12\f\x12\x0E\x12\u0117\v\x12\x03" +
        "\x12\x03\x12\x07\x12\u011B\n\x12\f\x12\x0E\x12\u011E\v\x12\x03\x12\x06" +
        "\x12\u0121\n\x12\r\x12\x0E\x12\u0122\x05\x12\u0125\n\x12\x03\x13\x03\x13" +
        "\x07\x13\u0129\n\x13\f\x13\x0E\x13\u012C\v\x13\x03\x13\x03\x13\x06\x13" +
        "\u0130\n\x13\r\x13\x0E\x13\u0131\x03\x13\x03\x13\x07\x13\u0136\n\x13\f" +
        "\x13\x0E\x13\u0139\v\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x06\x15" +
        "\u0140\n\x15\r\x15\x0E\x15\u0141\x03\x15\x03\x15\x07\x15\u0146\n\x15\f" +
        "\x15\x0E\x15\u0149\v\x15\x05\x15\u014B\n\x15\x03\x16\x03\x16\x07\x16\u014F" +
        "\n\x16\f\x16\x0E\x16\u0152\v\x16\x03\x17\x05\x17\u0155\n\x17\x03\x17\x03" +
        "\x17\x07\x17\u0159\n\x17\f\x17\x0E\x17\u015C\v\x17\x03\x18\x03\x18\x05" +
        "\x18\u0160\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0165\n\x19\x05\x19\u0167" +
        "\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u016D\n\x1A\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1A\x05\x1A\u0173\n\x1A\x03\x1B\x03\x1B\x05\x1B\u0177" +
        "\n\x1B\x03\x1B\x06\x1B\u017A\n\x1B\r\x1B\x0E\x1B\u017B\x03\x1B\x07\x1B" +
        "\u017F\n\x1B\f\x1B\x0E\x1B\u0182\v\x1B\x03\x1B\x06\x1B\u0185\n\x1B\r\x1B" +
        "\x0E\x1B\u0186\x05\x1B\u0189\n\x1B\x03\x1B\x05\x1B\u018C\n\x1B\x03\x1C" +
        "\x03\x1C\x05\x1C\u0190\n\x1C\x03\x1C\x07\x1C\u0193\n\x1C\f\x1C\x0E\x1C" +
        "\u0196\v\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u019B\n\x1C\x03\x1C\x06\x1C" +
        "\u019E\n\x1C\r\x1C\x0E\x1C\u019F\x03\x1C\x03\x1C\x05\x1C\u01A4\n\x1C\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01AA\n\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x05\x1D\u01AF\n\x1D\x03\x1D\x03\x1D\x06\x1D\u01B3\n\x1D\r\x1D\x0E\x1D" +
        "\u01B4\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01BA\n\x1D\f\x1D\x0E\x1D\u01BD" +
        "\v\x1D\x05\x1D\u01BF\n\x1D\x03\x1E\x03\x1E\x07\x1E\u01C3\n\x1E\f\x1E\x0E" +
        "\x1E\u01C6\v\x1E\x03\x1F\x06\x1F\u01C9\n\x1F\r\x1F\x0E\x1F\u01CA\x03 " +
        "\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u01D5\n \x03!\x06!\u01D8\n!\r" +
        "!\x0E!\u01D9\x03!\x07!\u01DD\n!\f!\x0E!\u01E0\v!\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0205\n\"\x03#\x06" +
        "#\u0208\n#\r#\x0E#\u0209\x03#\x07#\u020D\n#\f#\x0E#\u0210\v#\x03$\x03" +
        "$\x03$\x03$\x06$\u0216\n$\r$\x0E$\u0217\x03$\x05$\u021B\n$\x03%\x03%\x03" +
        "%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u022B\n" +
        "%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0235\n&\x03\'\x03\'\x05" +
        "\'\u0239\n\'\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0250\n)\x03*\x03" +
        "*\x03*\x03*\x03*\x03*\x03*\x05*\u0259\n*\x03+\x06+\u025C\n+\r+\x0E+\u025D" +
        "\x03+\x03+\x06+\u0262\n+\r+\x0E+\u0263\x03+\x03+\x03+\x03+\x07+\u026A" +
        "\n+\f+\x0E+\u026D\v+\x03+\x03+\x03+\x07+\u0272\n+\f+\x0E+\u0275\v+\x03" +
        "+\x07+\u0278\n+\f+\x0E+\u027B\v+\x03+\x03+\x03+\x06+\u0280\n+\r+\x0E+" +
        "\u0281\x03+\x03+\x03+\x07+\u0287\n+\f+\x0E+\u028A\v+\x03+\x03+\x03+\x06" +
        "+\u028F\n+\r+\x0E+\u0290\x03+\x06+\u0294\n+\r+\x0E+\u0295\x03+\x03+\x06" +
        "+\u029A\n+\r+\x0E+\u029B\x03+\x03+\x05+\u02A0\n+\x03,\x07,\u02A3\n,\f" +
        ",\x0E,\u02A6\v,\x03,\x07,\u02A9\n,\f,\x0E,\u02AC\v,\x03,\x07,\u02AF\n" +
        ",\f,\x0E,\u02B2\v,\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x05/\u02BB\n/\x03" +
        "/\x03/\x05/\u02BF\n/\x030\x030\x070\u02C3\n0\f0\x0E0\u02C6\v0\x030\x03" +
        "0\x060\u02CA\n0\r0\x0E0\u02CB\x030\x030\x030\x030\x060\u02D2\n0\r0\x0E" +
        "0\u02D3\x030\x030\x050\u02D8\n0\x031\x061\u02DB\n1\r1\x0E1\u02DC\x032" +
        "\x032\x033\x033\x033\x053\u02E4\n3\x034\x064\u02E7\n4\r4\x0E4\u02E8\x03" +
        "4\x034\x035\x035\x065\u02EF\n5\r5\x0E5\u02F0\x035\x035\x035\x035\x036" +
        "\x036\x066\u02F9\n6\r6\x0E6\u02FA\x037\x037\x067\u02FF\n7\r7\x0E7\u0300" +
        "\x037\x037\x037\x037\x037\x037\x037\x037\x038\x038\x038\x068\u030E\n8" +
        "\r8\x0E8\u030F\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038" +
        "\x058\u031D\n8\x039\x069\u0320\n9\r9\x0E9\u0321\x03:\x03:\x03;\x03;\x03" +
        "<\x03<\x03<\n|\xF5\u015A\u016C\u017B\u0180\u0186\u0194\x02\x02=\x02\x02" +
        "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
        "\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
        ".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
        "J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
        "f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02\x02\x0E\x03\x02\x1F\x1F" +
        "\x03\x02\x17\x18\x04\x02\x17\x18\x1D\x1D\x03\x02\x1D\x1F\x03\x02\x1D\x1E" +
        "\x05\x02\x13\x13\x1D\x1D\x1F\x1F\x04\x02\x04\x04\x1D\x1F\x04\x02\x1D\x1D" +
        "\x1F\x1F\x04\x02\x1C\x1C\x1E\x1F\x04\x02\x1C\x1C\x1F\x1F\x05\x02\x0E\x0F" +
        "\x1C\x1D\x1F\x1F\x04\x02\x10\x10\x16\x18\x02\u039B\x02z\x03\x02\x02\x02" +
        "\x04\x82\x03\x02\x02\x02\x06\x89\x03\x02\x02\x02\b\x8E\x03\x02\x02\x02" +
        "\n\x9E\x03\x02\x02\x02\f\xA6\x03\x02\x02\x02\x0E\xAA\x03\x02\x02\x02\x10" +
        "\xAE\x03\x02\x02\x02\x12\xB0\x03\x02\x02\x02\x14\xB7\x03\x02\x02\x02\x16" +
        "\xBB\x03\x02\x02\x02\x18\xBF\x03\x02\x02\x02\x1A\xE0\x03\x02\x02\x02\x1C" +
        "\xE2\x03\x02\x02\x02\x1E\u0103\x03\x02\x02\x02 \u010F\x03\x02\x02\x02" +
        "\"\u0111\x03\x02\x02\x02$\u0126\x03\x02\x02\x02&\u013A\x03\x02\x02\x02" +
        "(\u013C\x03\x02\x02\x02*\u014C\x03\x02\x02\x02,\u0154\x03\x02\x02\x02" +
        ".\u015F\x03\x02\x02\x020\u0161\x03\x02\x02\x022\u0172\x03\x02\x02\x02" +
        "4\u018B\x03\x02\x02\x026\u01A3\x03\x02\x02\x028\u01BE\x03\x02\x02\x02" +
        ":\u01C0\x03\x02\x02\x02<\u01C8\x03\x02\x02\x02>\u01D4\x03\x02\x02\x02" +
        "@\u01D7\x03\x02\x02\x02B\u0204\x03\x02\x02\x02D\u0207\x03\x02\x02\x02" +
        "F\u021A\x03\x02\x02\x02H\u022A\x03\x02\x02\x02J\u0234\x03\x02\x02\x02" +
        "L\u0238\x03\x02\x02\x02N\u023A\x03\x02\x02\x02P\u024F\x03\x02\x02\x02" +
        "R\u0258\x03\x02\x02\x02T\u029F\x03\x02\x02\x02V\u02A4\x03\x02\x02\x02" +
        "X\u02B3\x03\x02\x02\x02Z\u02B5\x03\x02\x02\x02\\\u02BA\x03\x02\x02\x02" +
        "^\u02D7\x03\x02\x02\x02`\u02DA\x03\x02\x02\x02b\u02DE\x03\x02\x02\x02" +
        "d\u02E3\x03\x02\x02\x02f\u02E6\x03\x02\x02\x02h\u02EC\x03\x02\x02\x02" +
        "j\u02F6\x03\x02\x02\x02l\u02FC\x03\x02\x02\x02n\u031C\x03\x02\x02\x02" +
        "p\u031F\x03\x02\x02\x02r\u0323\x03\x02\x02\x02t\u0325\x03\x02\x02\x02" +
        "v\u0327\x03\x02\x02\x02x{\x05\x04\x03\x02y{\x05:\x1E\x02zx\x03\x02\x02" +
        "\x02zy\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02|z\x03\x02\x02" +
        "\x02}~\x03\x02\x02\x02~\x7F\x07\x02\x02\x03\x7F\x03\x03\x02\x02\x02\x80" +
        "\x83\x05\x18\r\x02\x81\x83\x05\x06\x04\x02\x82\x80\x03\x02\x02\x02\x82" +
        "\x81\x03\x02\x02\x02\x83\x05\x03\x02\x02\x02\x84\x8A\x05 \x11\x02\x85" +
        "\x8A\x05(\x15\x02\x86\x8A\x05\x16\f\x02\x87\x8A\x05\x1C\x0F\x02\x88\x8A" +
        "\x05\b\x05\x02\x89\x84\x03\x02\x02\x02\x89\x85\x03\x02\x02\x02\x89\x86" +
        "\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x07" +
        "\x03\x02\x02\x02\x8B\x8D\x07\x1E\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x90" +
        "\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91" +
        "\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x95\x07\x1A\x02\x02\x92\x94" +
        "\x07\x1E\x02\x02\x93\x92\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93" +
        "\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x9C\x03\x02\x02\x02\x97\x95" +
        "\x03\x02\x02\x02\x98\x9A\x05\x10\t\x02\x99\x9B\x05\n\x06\x02\x9A\x99\x03" +
        "\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x98\x03" +
        "\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\t\x03\x02\x02\x02\x9E\x9F\x05" +
        "\x0E\b\x02\x9F\xA0\x05\f\x07\x02\xA0\v\x03\x02\x02\x02\xA1\xA2\x05:\x1E" +
        "\x02\xA2\xA3\x05\x0E\b\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA1\x03\x02\x02" +
        "\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02" +
        "\x02\xA7\r\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAB\x05\x12\n\x02" +
        "\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02" +
        "\xAC\xAD\x03\x02\x02\x02\xAD\x0F\x03\x02\x02\x02\xAE\xAF\x05\x14\v\x02" +
        "\xAF\x11\x03\x02\x02\x02\xB0\xB1\x07\x1F\x02\x02\xB1\xB2\x07\x1E\x02\x02" +
        "\xB2\xB3\x07\x1E\x02\x02\xB3\xB4\x07\x1E\x02\x02\xB4\xB5\x05\x10\t\x02" +
        "\xB5\x13\x03\x02\x02\x02\xB6\xB8\n\x02\x02\x02\xB7\xB6\x03\x02\x02\x02" +
        "\xB8\xB9\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02" +
        "\xBA\x15\x03\x02\x02\x02\xBB\xBC\x05.\x18\x02\xBC\x17\x03\x02\x02\x02" +
        "\xBD\xBE\x07\x1F\x02\x02\xBE\xC0\x07\x04\x02\x02\xBF\xBD\x03\x02\x02\x02" +
        "\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x05\x1A\x0E\x02" +
        "\xC2\xC4\x07\x1F\x02\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02" +
        "\xC4\xC5\x03\x02\x02\x02\xC5\xC9\x07\x04\x02\x02\xC6\xC8\x07\x1F\x02\x02" +
        "\xC7\xC6\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02" +
        "\xC9\xCA\x03\x02\x02\x02\xCA\xCF\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02" +
        "\xCC\xCE\x05\x06\x04\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02" +
        "\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\x19\x03\x02\x02\x02" +
        "\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x07\x1F\x02\x02\xD3\xE1\x05F$\x02\xD4" +
        "\xD5\x07\x1F\x02\x02\xD5\xD7\x058\x1D\x02\xD6\xD8\x07\x1E\x02\x02\xD7" +
        "\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9" +
        "\xDA\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB\xDD\x05*\x16\x02\xDC" +
        "\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xE1\x03\x02\x02\x02\xDE" +
        "\xE1\x054\x1B\x02\xDF\xE1\x056\x1C\x02\xE0\xD2\x03\x02\x02\x02\xE0\xD4" +
        "\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\x1B" +
        "\x03\x02\x02\x02\xE2\xE3\x07\x1F\x02\x02\xE3\xE5\x05\x1E\x10\x02\xE4\xE6" +
        "\x07\x1F\x02\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xEA" +
        "\x03\x02\x02\x02\xE7\xE9\x05\x1E\x10\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC" +
        "\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\x1D" +
        "\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x07\x19\x02\x02\xEE\xF0" +
        "\x07\x1E\x02\x02\xEF\xF1\x05<\x1F\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1" +
        "\x03\x02\x02\x02\xF1\xF5\x03\x02\x02\x02\xF2\xF4\x05L\'\x02\xF3\xF2\x03" +
        "\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF5\xF3\x03" +
        "\x02\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\u0104" +
        "\x05T+\x02\xF9\xFA\x07\x19\x02\x02\xFA\xFC\x07\x1E\x02\x02\xFB\xFD\x05" +
        "<\x1F\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03" +
        "\x02\x02\x02\xFE\u0100\x05L\'\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0101" +
        "\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02" +
        "\u0102\u0104\x03\x02\x02\x02\u0103\xED\x03\x02\x02\x02\u0103\xF9\x03\x02" +
        "\x02\x02\u0104\x1F\x03\x02\x02\x02\u0105\u0110\x05\"\x12\x02\u0106\u0110" +
        "\x05$\x13\x02\u0107\u010B\x07\x1F\x02\x02\u0108\u010A\x07\x1E\x02\x02" +
        "\u0109\u0108\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03" +
        "\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03\x02\x02\x02\u010D" +
        "\u010B\x03\x02\x02\x02\u010E\u0110\t\x03\x02\x02\u010F\u0105\x03\x02\x02" +
        "\x02\u010F\u0106\x03\x02\x02\x02\u010F\u0107\x03\x02\x02\x02\u0110!\x03" +
        "\x02\x02\x02\u0111\u0115\x07\x1F\x02\x02\u0112\u0114\x07\x1E\x02\x02\u0113" +
        "\u0112\x03\x02\x02\x02\u0114\u0117\x03\x02\x02\x02\u0115\u0113\x03\x02" +
        "\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117" +
        "\u0115\x03\x02\x02\x02\u0118\u011C\x05&\x14\x02\u0119\u011B\x07\x1E\x02" +
        "\x02\u011A\u0119\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A" +
        "\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0124\x03\x02\x02\x02" +
        "\u011E\u011C\x03\x02\x02\x02\u011F\u0121\x05\x16\f\x02\u0120\u011F\x03" +
        "\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
        "\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0120\x03\x02" +
        "\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125#\x03\x02\x02\x02\u0126\u012A" +
        "\x07\x1F\x02\x02\u0127\u0129\x07\x1E\x02\x02\u0128\u0127\x03\x02\x02\x02" +
        "\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03" +
        "\x02\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
        "\u012F\x05&\x14\x02\u012E\u0130\x07\x1E\x02\x02\u012F\u012E\x03\x02\x02" +
        "\x02\u0130\u0131\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132" +
        "\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0137\x05*\x16\x02" +
        "\u0134\u0136\x05\x16\f\x02\u0135\u0134\x03\x02\x02\x02\u0136\u0139\x03" +
        "\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138" +
        "%\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013B\t\x04\x02\x02" +
        "\u013B\'\x03\x02\x02\x02\u013C\u013D\x07\x1F\x02\x02\u013D\u013F\x058" +
        "\x1D\x02\u013E\u0140\x07\x1E\x02\x02\u013F\u013E\x03\x02\x02\x02\u0140" +
        "\u0141\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02" +
        "\x02\x02\u0142\u014A\x03\x02\x02\x02\u0143\u0147\x05*\x16\x02\u0144\u0146" +
        "\x05\x16\f\x02\u0145\u0144\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02" +
        "\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014B\x03" +
        "\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u0143\x03\x02\x02\x02\u014A" +
        "\u014B\x03\x02\x02\x02\u014B)\x03\x02\x02\x02\u014C\u0150\x05,\x17\x02" +
        "\u014D\u014F\x05.\x18\x02\u014E\u014D\x03\x02\x02\x02\u014F\u0152\x03" +
        "\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
        "+\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0155\x05<\x1F\x02" +
        "\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03" +
        "\x02\x02\x02\u0156\u015A\x05> \x02\u0157\u0159\x05L\'\x02\u0158\u0157" +
        "\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02" +
        "\u015A\u0158\x03\x02\x02\x02\u015B-\x03\x02\x02\x02\u015C\u015A\x03\x02" +
        "\x02\x02\u015D\u0160\x052\x1A\x02\u015E\u0160\x050\x19\x02\u015F\u015D" +
        "\x03\x02\x02\x02\u015F\u015E\x03\x02\x02\x02\u0160/\x03\x02\x02\x02\u0161" +
        "\u0166\x054\x1B\x02\u0162\u0167\x052\x1A\x02\u0163\u0165\x050\x19\x02" +
        "\u0164\u0163\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x03" +
        "\x02\x02\x02\u0166\u0162\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0167" +
        "1\x03\x02\x02\x02\u0168\u0173\x056\x1C\x02\u0169\u016A\x056\x1C\x02\u016A" +
        "\u016C\x05,\x17\x02\u016B\u016D\x050\x19\x02\u016C\u016D\x03\x02\x02\x02" +
        "\u016C\u016B\x03\x02\x02\x02\u016D\u0173\x03\x02\x02\x02\u016E\u016F\x05" +
        "6\x1C\x02\u016F\u0170\x05,\x17\x02\u0170\u0171\x052\x1A\x02\u0171\u0173" +
        "\x03\x02\x02\x02\u0172\u0168\x03\x02\x02\x02\u0172\u0169\x03\x02\x02\x02" +
        "\u0172\u016E\x03\x02\x02\x02\u01733\x03\x02\x02\x02\u0174\u0176\x07\x1F" +
        "\x02\x02\u0175\u0177\x05<\x1F\x02\u0176\u0175\x03\x02\x02\x02\u0176\u0177" +
        "\x03\x02\x02\x02\u0177\u0179\x03\x02\x02\x02\u0178\u017A\x05> \x02\u0179" +
        "\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02" +
        "\x02\x02\u017B\u0179\x03\x02\x02\x02\u017C\u0188\x03\x02\x02\x02\u017D" +
        "\u017F\x05L\'\x02\u017E\u017D\x03\x02\x02\x02\u017F\u0182\x03\x02\x02" +
        "\x02\u0180\u0181\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0184" +
        "\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0185\x05J&\x02\u0184" +
        "\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02" +
        "\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187\u0189\x03\x02\x02\x02\u0188" +
        "\u0180\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018C\x03\x02" +
        "\x02\x02\u018A\u018C\x058\x1D\x02\u018B\u0174\x03\x02\x02\x02\u018B\u018A" +
        "\x03\x02\x02\x02\u018C5\x03\x02\x02\x02\u018D\u018F\x07\x1F\x02\x02\u018E" +
        "\u0190\x05<\x1F\x02\u018F\u018E\x03\x02\x02\x02\u018F\u0190\x03\x02\x02" +
        "\x02\u0190\u0194\x03\x02\x02\x02\u0191\u0193\x05> \x02\u0192\u0191\x03" +
        "\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0194" +
        "\u0192\x03\x02\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196\u0194\x03\x02" +
        "\x02\x02\u0197\u01A4\x05T+\x02\u0198\u019A\x07\x1F\x02\x02\u0199\u019B" +
        "\x05<\x1F\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02" +
        "\u019B\u019D\x03\x02\x02\x02\u019C\u019E\x05R*\x02\u019D\u019C\x03\x02" +
        "\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
        "\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x05T+\x02" +
        "\u01A2\u01A4\x03\x02\x02\x02\u01A3\u018D\x03\x02\x02\x02\u01A3\u0198\x03" +
        "\x02\x02\x02\u01A47\x03\x02\x02\x02\u01A5\u01A6\x07\b\x02\x02\u01A6\u01BF" +
        "\x07\x13\x02\x02\u01A7\u01A9\x07\x1F\x02\x02\u01A8\u01AA\x05<\x1F\x02" +
        "\u01A9\u01A8\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03" +
        "\x02\x02\x02\u01AB\u01BF\x07\b\x02\x02\u01AC\u01AE\x07\x1F\x02\x02\u01AD" +
        "\u01AF\x05<\x1F\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02" +
        "\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B2\x07\x04\x02\x02\u01B1\u01B3" +
        "\x07\x1E\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02" +
        "\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x03" +
        "\x02\x02\x02\u01B6\u01B7\x07\x04\x02\x02\u01B7\u01BB\x03\x02\x02\x02\u01B8" +
        "\u01BA\x07\x1E\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01BA\u01BD\x03\x02" +
        "\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC" +
        "\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01A5\x03\x02" +
        "\x02\x02\u01BE\u01A7\x03\x02\x02\x02\u01BE\u01AC\x03\x02\x02\x02\u01BF" +
        "9\x03\x02\x02\x02\u01C0\u01C4\x07\x1F\x02\x02\u01C1\u01C3\x07\x1E\x02" +
        "\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3\u01C6\x03\x02\x02\x02\u01C4\u01C2" +
        "\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5;\x03\x02\x02\x02\u01C6" +
        "\u01C4\x03\x02\x02\x02\u01C7\u01C9\x07\x1E\x02\x02\u01C8\u01C7\x03\x02" +
        "\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA" +
        "\u01CB\x03\x02\x02\x02\u01CB=\x03\x02\x02\x02\u01CC\u01D5\x05f4\x02\u01CD" +
        "\u01D5\x05h5\x02\u01CE\u01D5\x05j6\x02\u01CF\u01D5\x05l7\x02\u01D0\u01D5" +
        "\x05n8\x02\u01D1\u01D5\x05\\/\x02\u01D2\u01D5\x05N(\x02\u01D3\u01D5\x05" +
        "@!\x02\u01D4\u01CC\x03\x02\x02\x02\u01D4\u01CD\x03\x02\x02\x02\u01D4\u01CE" +
        "\x03\x02\x02\x02\u01D4\u01CF\x03\x02\x02\x02\u01D4\u01D0\x03\x02\x02\x02" +
        "\u01D4\u01D1\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D3\x03" +
        "\x02\x02\x02\u01D5?\x03\x02\x02\x02\u01D6\u01D8\x05B\"\x02\u01D7\u01D6" +
        "\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02" +
        "\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DE\x03\x02\x02\x02\u01DB\u01DD\x05" +
        "R*\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC" +
        "\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DFA\x03\x02\x02\x02\u01E0" +
        "\u01DE\x03\x02\x02\x02\u01E1\u01E2\x07\x18\x02\x02";
    ReStructuredTextParser._serializedATNSegment1 = "\u01E2\u0205\n\x05\x02\x02\u01E3\u01E4\x07\x17\x02\x02\u01E4\u0205\n\x06" +
        "\x02\x02\u01E5\u01E6\x07\b\x02\x02\u01E6\u01E7\x07\x13\x02\x02\u01E7\u0205" +
        "\n\x05\x02\x02\u01E8\u01E9\x07\b\x02\x02\u01E9\u0205\n\x07\x02\x02\u01EA" +
        "\u01EB\x07\x07\x02\x02\u01EB\u0205\x07\x13\x02\x02\u01EC\u01ED\x07\x19" +
        "\x02\x02\u01ED\u0205\n\x06\x02\x02\u01EE\u01EF\x07\x1B\x02\x02\u01EF\u0205" +
        "\n\x06\x02\x02\u01F0\u01F1\x07\x07\x02\x02\u01F1\u0205\n\x07\x02\x02\u01F2" +
        "\u0205\x07\x07\x02\x02\u01F3\u01F4\x05v<\x02\u01F4\u01F5\x05v<\x02\u01F5" +
        "\u0205\x03\x02\x02\x02\u01F6\u0205\x07\x06\x02\x02\u01F7\u0205\x07\n\x02" +
        "\x02\u01F8\u0205\x07\v\x02\x02\u01F9\u0205\x07\f\x02\x02\u01FA\u0205\x07" +
        "\r\x02\x02\u01FB\u0205\x07\x14\x02\x02\u01FC\u0205\x07\x15\x02\x02\u01FD" +
        "\u0205\x07\x11\x02\x02\u01FE\u0205\x07\x12\x02\x02\u01FF\u0205\x07\x13" +
        "\x02\x02\u0200\u0205\x07\x1B\x02\x02\u0201\u0205\x07\x0E\x02\x02\u0202" +
        "\u0205\x07\x0F\x02\x02\u0203\u0205\x07 \x02\x02\u0204\u01E1\x03\x02\x02" +
        "\x02\u0204\u01E3\x03\x02\x02\x02\u0204\u01E5\x03\x02\x02\x02\u0204\u01E8" +
        "\x03\x02\x02\x02\u0204\u01EA\x03\x02\x02\x02\u0204\u01EC\x03\x02\x02\x02" +
        "\u0204\u01EE\x03\x02\x02\x02\u0204\u01F0\x03\x02\x02\x02\u0204\u01F2\x03" +
        "\x02\x02\x02\u0204\u01F3\x03\x02\x02\x02\u0204\u01F6\x03\x02\x02\x02\u0204" +
        "\u01F7\x03\x02\x02\x02\u0204\u01F8\x03\x02\x02\x02\u0204\u01F9\x03\x02" +
        "\x02\x02\u0204\u01FA\x03\x02\x02\x02\u0204\u01FB\x03\x02\x02\x02\u0204" +
        "\u01FC\x03\x02\x02\x02\u0204\u01FD\x03\x02\x02\x02\u0204\u01FE\x03\x02" +
        "\x02\x02\u0204\u01FF\x03\x02\x02\x02\u0204\u0200\x03\x02\x02\x02\u0204" +
        "\u0201\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203\x03\x02" +
        "\x02\x02\u0205C\x03\x02\x02\x02\u0206\u0208\x05F$\x02\u0207\u0206\x03" +
        "\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209" +
        "\u020A\x03\x02\x02\x02\u020A\u020E\x03\x02\x02\x02\u020B\u020D\x05R*\x02" +
        "\u020C\u020B\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03" +
        "\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020FE\x03\x02\x02\x02\u0210" +
        "\u020E\x03\x02\x02\x02\u0211\u021B\x05H%\x02\u0212\u021B\x05B\"\x02\u0213" +
        "\u0215\x05P)\x02\u0214\u0216\x05P)\x02\u0215\u0214\x03\x02\x02\x02\u0216" +
        "\u0217\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02" +
        "\x02\x02\u0218\u021B\x03\x02\x02\x02\u0219\u021B\x07\x1E\x02\x02\u021A" +
        "\u0211\x03\x02\x02\x02\u021A\u0212\x03\x02\x02\x02\u021A\u0213\x03\x02" +
        "\x02\x02\u021A\u0219\x03\x02\x02\x02\u021BG\x03\x02\x02\x02\u021C\u021D" +
        "\x07\f\x02\x02\u021D\u021E\x07\x1D\x02\x02\u021E\u022B\x07\r\x02\x02\u021F" +
        "\u0220\x07\n\x02\x02\u0220\u0221\x07\x1D\x02\x02\u0221\u022B\x07\v\x02" +
        "\x02\u0222\u0223\x07\x12\x02\x02\u0223\u0224\x07\x1D\x02\x02\u0224\u022B" +
        "\x07\x12\x02\x02\u0225\u0226\x07\x12\x02\x02\u0226\u0227\x07\x11\x02\x02" +
        "\u0227\u0228\x07\x1D\x02\x02\u0228\u0229\x07\x11\x02\x02\u0229\u022B\x07" +
        "\x12\x02\x02\u022A\u021C\x03\x02\x02\x02\u022A\u021F\x03\x02\x02\x02\u022A" +
        "\u0222\x03\x02\x02\x02\u022A\u0225\x03\x02\x02\x02\u022BI\x03\x02\x02" +
        "\x02\u022C\u0235\x05f4\x02\u022D\u0235\x05h5\x02\u022E\u0235\x05j6\x02" +
        "\u022F\u0235\x05l7\x02\u0230\u0235\x05n8\x02\u0231\u0235\x05\\/\x02\u0232" +
        "\u0235\x05N(\x02\u0233\u0235\x05D#\x02\u0234\u022C\x03\x02\x02\x02\u0234" +
        "\u022D\x03\x02\x02\x02\u0234\u022E\x03\x02\x02\x02\u0234\u022F\x03\x02" +
        "\x02\x02\u0234\u0230\x03\x02\x02\x02\u0234\u0231\x03\x02\x02\x02\u0234" +
        "\u0232\x03\x02\x02\x02\u0234\u0233\x03\x02\x02\x02\u0235K\x03\x02\x02" +
        "\x02\u0236\u0239\x05T+\x02\u0237\u0239\x05J&\x02\u0238\u0236\x03\x02\x02" +
        "\x02\u0238\u0237\x03\x02\x02\x02\u0239M\x03\x02\x02\x02\u023A\u023B\x07" +
        "\x0F\x02\x02\u023B\u023C\x07\x1E\x02\x02\u023C\u023D\x05,\x17\x02\u023D" +
        "O\x03\x02\x02\x02\u023E\u0250\x07\x14\x02\x02\u023F\u0250\x07\b\x02\x02" +
        "\u0240\u0250\x07\x07\x02\x02\u0241\u0250\x07\x1E\x02\x02\u0242\u0250\x07" +
        "\n\x02\x02\u0243\u0250\x07\v\x02\x02\u0244\u0250\x07\f\x02\x02\u0245\u0250" +
        "\x07\r\x02\x02\u0246\u0250\x07\x15\x02\x02\u0247\u0250\x05v<\x02\u0248" +
        "\u0250\x07\x0E\x02\x02\u0249\u0250\x07\x0F\x02\x02\u024A\u0250\x07\x11" +
        "\x02\x02\u024B\u0250\x07\x13\x02\x02\u024C\u024D\x07\x1D\x02\x02\u024D" +
        "\u0250\x07\x1E\x02\x02\u024E\u0250\x07 \x02\x02\u024F\u023E\x03\x02\x02" +
        "\x02\u024F\u023F\x03\x02\x02\x02\u024F\u0240\x03\x02\x02\x02\u024F\u0241" +
        "\x03\x02\x02\x02\u024F\u0242\x03\x02\x02\x02\u024F\u0243\x03\x02\x02\x02" +
        "\u024F\u0244\x03\x02\x02\x02\u024F\u0245\x03\x02\x02\x02\u024F\u0246\x03" +
        "\x02\x02\x02\u024F\u0247\x03\x02\x02\x02\u024F\u0248\x03\x02\x02\x02\u024F" +
        "\u0249\x03\x02\x02\x02\u024F\u024A\x03\x02\x02\x02\u024F\u024B\x03\x02" +
        "\x02\x02\u024F\u024C\x03\x02\x02\x02\u024F\u024E\x03\x02\x02\x02\u0250" +
        "Q\x03\x02\x02\x02\u0251\u0259\x05P)\x02\u0252\u0259\x05H%\x02\u0253\u0259" +
        "\x07\x19\x02\x02\u0254\u0259\x07\x05\x02\x02\u0255\u0259\x07\x1A\x02\x02" +
        "\u0256\u0259\x07\x13\x02\x02\u0257\u0259\x07\t\x02\x02\u0258\u0251\x03" +
        "\x02\x02\x02\u0258\u0252\x03\x02\x02\x02\u0258\u0253\x03\x02\x02\x02\u0258" +
        "\u0254\x03\x02\x02\x02\u0258\u0255\x03\x02\x02\x02\u0258\u0256\x03\x02" +
        "\x02\x02\u0258\u0257\x03\x02\x02\x02\u0259S\x03\x02\x02\x02\u025A\u025C" +
        "\x07\x1D\x02\x02\u025B\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02" +
        "\u025D\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x03" +
        "\x02\x02\x02\u025F\u02A0\x07\x1F\x02\x02\u0260\u0262\x07\x1D\x02\x02\u0261" +
        "\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0261\x03\x02" +
        "\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265" +
        "\u0266\x05X-\x02\u0266\u0273\x05V,\x02\u0267\u026B\x07\x1F\x02\x02\u0268" +
        "\u026A\x07\x1D\x02\x02\u0269\u0268\x03\x02\x02\x02\u026A\u026D\x03\x02" +
        "\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C" +
        "\u026E\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E\u026F\x05X-\x02" +
        "\u026F\u0270\x05V,\x02\u0270\u0272\x03\x02\x02\x02\u0271\u0267\x03\x02" +
        "\x02\x02\u0272\u0275\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273" +
        "\u0274\x03\x02\x02\x02\u0274\u0279\x03\x02\x02\x02\u0275\u0273\x03\x02" +
        "\x02\x02\u0276\u0278\x07\x1D\x02\x02\u0277\u0276\x03\x02\x02\x02\u0278" +
        "\u027B\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02" +
        "\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C" +
        "\u027D\x07\x1F\x02\x02\u027D\u02A0\x03\x02\x02\x02\u027E\u0280\x07\x1D" +
        "\x02\x02\u027F\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281" +
        "\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x03\x02" +
        "\x02\x02\u0283\u0284\x05X-\x02\u0284\u0288\x05V,\x02\u0285\u0287\x07\x1D" +
        "\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288" +
        "\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028B\x03\x02" +
        "\x02\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028C\x07\x1F\x02\x02\u028C" +
        "\u02A0\x03\x02\x02\x02\u028D\u028F\x07\x1D\x02\x02\u028E\u028D\x03\x02" +
        "\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0290" +
        "\u0291\x03\x02\x02\x02\u0291\u0293\x03\x02\x02\x02\u0292\u0294\x07\x1E" +
        "\x02\x02\u0293\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295" +
        "\u0293\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0297\x03\x02" +
        "\x02\x02\u0297\u0299\x05V,\x02\u0298\u029A\x07\x1D\x02\x02\u0299\u0298" +
        "\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02" +
        "\u029B\u029C\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x07" +
        "\x1F\x02\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u025B\x03\x02\x02\x02\u029F" +
        "\u0261\x03\x02\x02\x02\u029F\u027F\x03\x02\x02\x02\u029F\u028E\x03\x02" +
        "\x02\x02\u02A0U\x03\x02\x02\x02\u02A1\u02A3\x05Z.\x02\u02A2\u02A1\x03" +
        "\x02\x02\x02\u02A3\u02A6\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4" +
        "\u02A5\x03\x02\x02\x02\u02A5\u02B0\x03\x02\x02\x02\u02A6\u02A4\x03\x02" +
        "\x02\x02\u02A7\u02A9\x07\x1D\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9" +
        "\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02" +
        "\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD" +
        "\u02AF\x05Z.\x02\u02AE\u02AA\x03\x02\x02\x02\u02AF\u02B2\x03\x02\x02\x02" +
        "\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1W\x03\x02" +
        "\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B4\n\b\x02\x02\u02B4Y\x03" +
        "\x02\x02\x02\u02B5\u02B6\n\t\x02\x02\u02B6[\x03\x02\x02\x02\u02B7\u02B8" +
        "\x07\x15\x02\x02\u02B8\u02B9\x07\x07\x02\x02\u02B9\u02BB\x07\x15\x02\x02" +
        "\u02BA\u02B7\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC\x03" +
        "\x02\x02\x02\u02BC\u02BE\x05^0\x02\u02BD\u02BF\x07\x1B\x02\x02\u02BE\u02BD" +
        "\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF]\x03\x02\x02\x02\u02C0" +
        "\u02C4\x07\x1C\x02\x02\u02C1\u02C3\x07\x1C\x02\x02\u02C2\u02C1\x03\x02" +
        "\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4" +
        "\u02C5\x03\x02\x02\x02\u02C5\u02C7\x03\x02\x02\x02\u02C6\u02C4\x03\x02" +
        "\x02\x02\u02C7\u02C9\x05`1\x02\u02C8\u02CA\x07\x1C\x02\x02\u02C9\u02C8" +
        "\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02" +
        "\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02D8\x03\x02\x02\x02\u02CD\u02CE\x07" +
        "\x1C\x02\x02\u02CE\u02CF\x05b2\x02\u02CF\u02D1\x05`1\x02\u02D0\u02D2\x07" +
        "\x1C\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3" +
        "\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D8\x03\x02" +
        "\x02\x02\u02D5\u02D6\x07\x1C\x02\x02\u02D6\u02D8\x07\x1C\x02\x02\u02D7" +
        "\u02C0\x03\x02\x02\x02\u02D7\u02CD\x03\x02\x02\x02\u02D7\u02D5\x03\x02" +
        "\x02\x02\u02D8_\x03\x02\x02\x02\u02D9\u02DB\x05d3\x02\u02DA\u02D9\x03" +
        "\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC" +
        "\u02DD\x03\x02\x02\x02\u02DDa\x03\x02\x02\x02\u02DE\u02DF\n\n\x02\x02" +
        "\u02DFc\x03\x02\x02\x02\u02E0\u02E4\n\v\x02\x02\u02E1\u02E2\x07\x1C\x02" +
        "\x02\u02E2\u02E4\n\v\x02\x02\u02E3\u02E0\x03\x02\x02\x02\u02E3\u02E1\x03" +
        "\x02\x02\x02\u02E4e\x03\x02\x02\x02\u02E5\u02E7\x07 \x02\x02\u02E6\u02E5" +
        "\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02" +
        "\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EB\x07" +
        "\x1B\x02\x02\u02EBg\x03\x02\x02\x02\u02EC\u02EE\x07\x1B\x02\x02\u02ED" +
        "\u02EF\x05t;\x02\u02EE\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02" +
        "\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03" +
        "\x02\x02\x02\u02F2\u02F3\x07\x15\x02\x02\u02F3\u02F4\x07\x1E\x02\x02\u02F4" +
        "\u02F5\x05p9\x02\u02F5i\x03\x02\x02\x02\u02F6\u02F8\x07\x1B\x02\x02\u02F7" +
        "\u02F9\x07 \x02\x02\u02F8\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02" +
        "\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FBk\x03" +
        "\x02\x02\x02\u02FC\u02FE\x07\x1C\x02\x02\u02FD\u02FF\x05t;\x02\u02FE\u02FD" +
        "\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02" +
        "\u0300\u0301\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x07" +
        "\x1E\x02\x02\u0303\u0304\x07\x0E\x02\x02\u0304\u0305\x05p9\x02\u0305\u0306" +
        "\x07\x0F\x02\x02\u0306\u0307\x07\x1C\x02\x02\u0307\u0308\x07\x1B\x02\x02" +
        "\u0308\u0309\x07\x1E\x02\x02\u0309m\x03\x02\x02\x02\u030A\u030B\x07\x03" +
        "\x02\x02\u030B\u030D\x07\x1C\x02\x02\u030C\u030E\x05t;\x02\u030D\u030C" +
        "\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02" +
        "\u030F\u0310\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x07" +
        "\x1E\x02\x02\u0312\u0313\x07\x0E\x02\x02\u0313\u0314\x05p9\x02\u0314\u0315" +
        "\x07\x0F\x02\x02\u0315\u0316\x07\x1C\x02\x02\u0316\u031D\x03\x02\x02\x02" +
        "\u0317\u0318\x07\x03\x02\x02\u0318\u0319\x07\x1C\x02\x02\u0319\u031A\x05" +
        "p9\x02\u031A\u031B\x07\x1C\x02\x02\u031B\u031D\x03\x02\x02\x02\u031C\u030A" +
        "\x03\x02\x02\x02\u031C\u0317\x03\x02\x02\x02\u031Do\x03\x02\x02\x02\u031E" +
        "\u0320\x05r:\x02\u031F\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02" +
        "\u0321\u031F\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322q\x03\x02" +
        "\x02\x02\u0323\u0324\n\v\x02\x02\u0324s\x03\x02\x02\x02\u0325\u0326\n" +
        "\f\x02\x02\u0326u\x03\x02\x02\x02\u0327\u0328\t\r\x02\x02\u0328w\x03\x02" +
        "\x02\x02kz|\x82\x89\x8E\x95\x9A\x9C\xA6\xAC\xB9\xBF\xC3\xC9\xCF\xD9\xDC" +
        "\xE0\xE5\xEA\xF0\xF5\xFC\u0101\u0103\u010B\u010F\u0115\u011C\u0122\u0124" +
        "\u012A\u0131\u0137\u0141\u0147\u014A\u0150\u0154\u015A\u015F\u0164\u0166" +
        "\u016C\u0172\u0176\u017B\u0180\u0186\u0188\u018B\u018F\u0194\u019A\u019F" +
        "\u01A3\u01A9\u01AE\u01B4\u01BB\u01BE\u01C4\u01CA\u01D4\u01D9\u01DE\u0204" +
        "\u0209\u020E\u0217\u021A\u022A\u0234\u0238\u024F\u0258\u025D\u0263\u026B" +
        "\u0273\u0279\u0281\u0288\u0290\u0295\u029B\u029F\u02A4\u02AA\u02B0\u02BA" +
        "\u02BE\u02C4\u02CB\u02D3\u02D7\u02DC\u02E3\u02E8\u02F0\u02FA\u0300\u030F" +
        "\u031C\u0321";
    ReStructuredTextParser._serializedATN = Utils.join([
        ReStructuredTextParser._serializedATNSegment0,
        ReStructuredTextParser._serializedATNSegment1,
    ], "");
    return ReStructuredTextParser;
}(Parser_1.Parser));
exports.ReStructuredTextParser = ReStructuredTextParser;
var ParseContext = /** @class */ (function (_super) {
    __extends(ParseContext, _super);
    function ParseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParseContext.prototype.EOF = function () { return this.getToken(ReStructuredTextParser.EOF, 0); };
    ParseContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    ParseContext.prototype.empty_line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Empty_lineContext);
        }
        else {
            return this.getRuleContext(i, Empty_lineContext);
        }
    };
    Object.defineProperty(ParseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_parse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParseContext.prototype.enterRule = function (listener) {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    };
    // @Override
    ParseContext.prototype.exitRule = function (listener) {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    };
    // @Override
    ParseContext.prototype.accept = function (visitor) {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParseContext = ParseContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.section = function () {
        return this.tryGetRuleContext(0, SectionContext);
    };
    ElementContext.prototype.sectionElement = function () {
        return this.tryGetRuleContext(0, SectionElementContext);
    };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementContext.prototype.enterRule = function (listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    };
    // @Override
    ElementContext.prototype.exitRule = function (listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    };
    // @Override
    ElementContext.prototype.accept = function (visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementContext = ElementContext;
var SectionElementContext = /** @class */ (function (_super) {
    __extends(SectionElementContext, _super);
    function SectionElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SectionElementContext.prototype.listItemBullet = function () {
        return this.tryGetRuleContext(0, ListItemBulletContext);
    };
    SectionElementContext.prototype.listItemEnumerated = function () {
        return this.tryGetRuleContext(0, ListItemEnumeratedContext);
    };
    SectionElementContext.prototype.paragraph = function () {
        return this.tryGetRuleContext(0, ParagraphContext);
    };
    SectionElementContext.prototype.lineBlock = function () {
        return this.tryGetRuleContext(0, LineBlockContext);
    };
    SectionElementContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(SectionElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_sectionElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SectionElementContext.prototype.enterRule = function (listener) {
        if (listener.enterSectionElement) {
            listener.enterSectionElement(this);
        }
    };
    // @Override
    SectionElementContext.prototype.exitRule = function (listener) {
        if (listener.exitSectionElement) {
            listener.exitSectionElement(this);
        }
    };
    // @Override
    SectionElementContext.prototype.accept = function (visitor) {
        if (visitor.visitSectionElement) {
            return visitor.visitSectionElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SectionElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SectionElementContext = SectionElementContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.Comment = function () { return this.getToken(ReStructuredTextParser.Comment, 0); };
    CommentContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    CommentContext.prototype.commentLineNoBreak = function () {
        return this.tryGetRuleContext(0, CommentLineNoBreakContext);
    };
    CommentContext.prototype.commentParagraphs = function () {
        return this.tryGetRuleContext(0, CommentParagraphsContext);
    };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_comment; },
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
var CommentParagraphsContext = /** @class */ (function (_super) {
    __extends(CommentParagraphsContext, _super);
    function CommentParagraphsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentParagraphsContext.prototype.commentRest = function () {
        return this.getRuleContext(0, CommentRestContext);
    };
    CommentParagraphsContext.prototype.commentParagraph = function () {
        return this.getRuleContext(0, CommentParagraphContext);
    };
    Object.defineProperty(CommentParagraphsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_commentParagraphs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentParagraphsContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentParagraphs) {
            listener.enterCommentParagraphs(this);
        }
    };
    // @Override
    CommentParagraphsContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentParagraphs) {
            listener.exitCommentParagraphs(this);
        }
    };
    // @Override
    CommentParagraphsContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentParagraphs) {
            return visitor.visitCommentParagraphs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentParagraphsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentParagraphsContext = CommentParagraphsContext;
var CommentRestContext = /** @class */ (function (_super) {
    __extends(CommentRestContext, _super);
    function CommentRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentRestContext.prototype.empty_line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Empty_lineContext);
        }
        else {
            return this.getRuleContext(i, Empty_lineContext);
        }
    };
    CommentRestContext.prototype.commentParagraph = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommentParagraphContext);
        }
        else {
            return this.getRuleContext(i, CommentParagraphContext);
        }
    };
    Object.defineProperty(CommentRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_commentRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentRestContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentRest) {
            listener.enterCommentRest(this);
        }
    };
    // @Override
    CommentRestContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentRest) {
            listener.exitCommentRest(this);
        }
    };
    // @Override
    CommentRestContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentRest) {
            return visitor.visitCommentRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentRestContext = CommentRestContext;
var CommentParagraphContext = /** @class */ (function (_super) {
    __extends(CommentParagraphContext, _super);
    function CommentParagraphContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentParagraphContext.prototype.commentLine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommentLineContext);
        }
        else {
            return this.getRuleContext(i, CommentLineContext);
        }
    };
    Object.defineProperty(CommentParagraphContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_commentParagraph; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentParagraphContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentParagraph) {
            listener.enterCommentParagraph(this);
        }
    };
    // @Override
    CommentParagraphContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentParagraph) {
            listener.exitCommentParagraph(this);
        }
    };
    // @Override
    CommentParagraphContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentParagraph) {
            return visitor.visitCommentParagraph(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentParagraphContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentParagraphContext = CommentParagraphContext;
var CommentLineNoBreakContext = /** @class */ (function (_super) {
    __extends(CommentLineNoBreakContext, _super);
    function CommentLineNoBreakContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentLineNoBreakContext.prototype.commentLineAtoms = function () {
        return this.getRuleContext(0, CommentLineAtomsContext);
    };
    Object.defineProperty(CommentLineNoBreakContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_commentLineNoBreak; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentLineNoBreakContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentLineNoBreak) {
            listener.enterCommentLineNoBreak(this);
        }
    };
    // @Override
    CommentLineNoBreakContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentLineNoBreak) {
            listener.exitCommentLineNoBreak(this);
        }
    };
    // @Override
    CommentLineNoBreakContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentLineNoBreak) {
            return visitor.visitCommentLineNoBreak(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentLineNoBreakContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentLineNoBreakContext = CommentLineNoBreakContext;
var CommentLineContext = /** @class */ (function (_super) {
    __extends(CommentLineContext, _super);
    function CommentLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentLineContext.prototype.LineBreak = function () { return this.getToken(ReStructuredTextParser.LineBreak, 0); };
    CommentLineContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    CommentLineContext.prototype.commentLineNoBreak = function () {
        return this.getRuleContext(0, CommentLineNoBreakContext);
    };
    Object.defineProperty(CommentLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_commentLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentLineContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentLine) {
            listener.enterCommentLine(this);
        }
    };
    // @Override
    CommentLineContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentLine) {
            listener.exitCommentLine(this);
        }
    };
    // @Override
    CommentLineContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentLine) {
            return visitor.visitCommentLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentLineContext = CommentLineContext;
var CommentLineAtomsContext = /** @class */ (function (_super) {
    __extends(CommentLineAtomsContext, _super);
    function CommentLineAtomsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentLineAtomsContext.prototype.LineBreak = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.LineBreak);
        }
        else {
            return this.getToken(ReStructuredTextParser.LineBreak, i);
        }
    };
    Object.defineProperty(CommentLineAtomsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_commentLineAtoms; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentLineAtomsContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentLineAtoms) {
            listener.enterCommentLineAtoms(this);
        }
    };
    // @Override
    CommentLineAtomsContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentLineAtoms) {
            listener.exitCommentLineAtoms(this);
        }
    };
    // @Override
    CommentLineAtomsContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentLineAtoms) {
            return visitor.visitCommentLineAtoms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentLineAtomsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentLineAtomsContext = CommentLineAtomsContext;
var ParagraphContext = /** @class */ (function (_super) {
    __extends(ParagraphContext, _super);
    function ParagraphContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParagraphContext.prototype.lines = function () {
        return this.getRuleContext(0, LinesContext);
    };
    Object.defineProperty(ParagraphContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_paragraph; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParagraphContext.prototype.enterRule = function (listener) {
        if (listener.enterParagraph) {
            listener.enterParagraph(this);
        }
    };
    // @Override
    ParagraphContext.prototype.exitRule = function (listener) {
        if (listener.exitParagraph) {
            listener.exitParagraph(this);
        }
    };
    // @Override
    ParagraphContext.prototype.accept = function (visitor) {
        if (visitor.visitParagraph) {
            return visitor.visitParagraph(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParagraphContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParagraphContext = ParagraphContext;
var SectionContext = /** @class */ (function (_super) {
    __extends(SectionContext, _super);
    function SectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SectionContext.prototype.title = function () {
        return this.getRuleContext(0, TitleContext);
    };
    SectionContext.prototype.SectionSeparator = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.SectionSeparator);
        }
        else {
            return this.getToken(ReStructuredTextParser.SectionSeparator, i);
        }
    };
    SectionContext.prototype.LineBreak = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.LineBreak);
        }
        else {
            return this.getToken(ReStructuredTextParser.LineBreak, i);
        }
    };
    SectionContext.prototype.sectionElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SectionElementContext);
        }
        else {
            return this.getRuleContext(i, SectionElementContext);
        }
    };
    Object.defineProperty(SectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_section; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SectionContext.prototype.enterRule = function (listener) {
        if (listener.enterSection) {
            listener.enterSection(this);
        }
    };
    // @Override
    SectionContext.prototype.exitRule = function (listener) {
        if (listener.exitSection) {
            listener.exitSection(this);
        }
    };
    // @Override
    SectionContext.prototype.accept = function (visitor) {
        if (visitor.visitSection) {
            return visitor.visitSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SectionContext = SectionContext;
var TitleContext = /** @class */ (function (_super) {
    __extends(TitleContext, _super);
    function TitleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TitleContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    TitleContext.prototype.textStart = function () {
        return this.tryGetRuleContext(0, TextStartContext);
    };
    TitleContext.prototype.lineSpecial = function () {
        return this.tryGetRuleContext(0, LineSpecialContext);
    };
    TitleContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    TitleContext.prototype.paragraphNoBreak = function () {
        return this.tryGetRuleContext(0, ParagraphNoBreakContext);
    };
    TitleContext.prototype.lineNormal = function () {
        return this.tryGetRuleContext(0, LineNormalContext);
    };
    TitleContext.prototype.lineStar = function () {
        return this.tryGetRuleContext(0, LineStarContext);
    };
    Object.defineProperty(TitleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_title; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TitleContext.prototype.enterRule = function (listener) {
        if (listener.enterTitle) {
            listener.enterTitle(this);
        }
    };
    // @Override
    TitleContext.prototype.exitRule = function (listener) {
        if (listener.exitTitle) {
            listener.exitTitle(this);
        }
    };
    // @Override
    TitleContext.prototype.accept = function (visitor) {
        if (visitor.visitTitle) {
            return visitor.visitTitle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TitleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TitleContext = TitleContext;
var LineBlockContext = /** @class */ (function (_super) {
    __extends(LineBlockContext, _super);
    function LineBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineBlockContext.prototype.LineBreak = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.LineBreak);
        }
        else {
            return this.getToken(ReStructuredTextParser.LineBreak, i);
        }
    };
    LineBlockContext.prototype.lineBlockLine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineBlockLineContext);
        }
        else {
            return this.getRuleContext(i, LineBlockLineContext);
        }
    };
    Object.defineProperty(LineBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_lineBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterLineBlock) {
            listener.enterLineBlock(this);
        }
    };
    // @Override
    LineBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitLineBlock) {
            listener.exitLineBlock(this);
        }
    };
    // @Override
    LineBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitLineBlock) {
            return visitor.visitLineBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineBlockContext = LineBlockContext;
var LineBlockLineContext = /** @class */ (function (_super) {
    __extends(LineBlockLineContext, _super);
    function LineBlockLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineBlockLineContext.prototype.Block = function () { return this.getToken(ReStructuredTextParser.Block, 0); };
    LineBlockLineContext.prototype.Space = function () { return this.getToken(ReStructuredTextParser.Space, 0); };
    LineBlockLineContext.prototype.starText = function () {
        return this.tryGetRuleContext(0, StarTextContext);
    };
    LineBlockLineContext.prototype.indentation = function () {
        return this.tryGetRuleContext(0, IndentationContext);
    };
    LineBlockLineContext.prototype.span = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SpanContext);
        }
        else {
            return this.getRuleContext(i, SpanContext);
        }
    };
    Object.defineProperty(LineBlockLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_lineBlockLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineBlockLineContext.prototype.enterRule = function (listener) {
        if (listener.enterLineBlockLine) {
            listener.enterLineBlockLine(this);
        }
    };
    // @Override
    LineBlockLineContext.prototype.exitRule = function (listener) {
        if (listener.exitLineBlockLine) {
            listener.exitLineBlockLine(this);
        }
    };
    // @Override
    LineBlockLineContext.prototype.accept = function (visitor) {
        if (visitor.visitLineBlockLine) {
            return visitor.visitLineBlockLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineBlockLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineBlockLineContext = LineBlockLineContext;
var ListItemBulletContext = /** @class */ (function (_super) {
    __extends(ListItemBulletContext, _super);
    function ListItemBulletContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListItemBulletContext.prototype.bulletCrossLine = function () {
        return this.tryGetRuleContext(0, BulletCrossLineContext);
    };
    ListItemBulletContext.prototype.bulletSimple = function () {
        return this.tryGetRuleContext(0, BulletSimpleContext);
    };
    ListItemBulletContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    ListItemBulletContext.prototype.Minus = function () { return this.tryGetToken(ReStructuredTextParser.Minus, 0); };
    ListItemBulletContext.prototype.Plus = function () { return this.tryGetToken(ReStructuredTextParser.Plus, 0); };
    ListItemBulletContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    Object.defineProperty(ListItemBulletContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_listItemBullet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListItemBulletContext.prototype.enterRule = function (listener) {
        if (listener.enterListItemBullet) {
            listener.enterListItemBullet(this);
        }
    };
    // @Override
    ListItemBulletContext.prototype.exitRule = function (listener) {
        if (listener.exitListItemBullet) {
            listener.exitListItemBullet(this);
        }
    };
    // @Override
    ListItemBulletContext.prototype.accept = function (visitor) {
        if (visitor.visitListItemBullet) {
            return visitor.visitListItemBullet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListItemBulletContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListItemBulletContext = ListItemBulletContext;
var BulletCrossLineContext = /** @class */ (function (_super) {
    __extends(BulletCrossLineContext, _super);
    function BulletCrossLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BulletCrossLineContext.prototype.LineBreak = function () { return this.getToken(ReStructuredTextParser.LineBreak, 0); };
    BulletCrossLineContext.prototype.bullet = function () {
        return this.getRuleContext(0, BulletContext);
    };
    BulletCrossLineContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    BulletCrossLineContext.prototype.paragraph = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParagraphContext);
        }
        else {
            return this.getRuleContext(i, ParagraphContext);
        }
    };
    Object.defineProperty(BulletCrossLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_bulletCrossLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BulletCrossLineContext.prototype.enterRule = function (listener) {
        if (listener.enterBulletCrossLine) {
            listener.enterBulletCrossLine(this);
        }
    };
    // @Override
    BulletCrossLineContext.prototype.exitRule = function (listener) {
        if (listener.exitBulletCrossLine) {
            listener.exitBulletCrossLine(this);
        }
    };
    // @Override
    BulletCrossLineContext.prototype.accept = function (visitor) {
        if (visitor.visitBulletCrossLine) {
            return visitor.visitBulletCrossLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BulletCrossLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BulletCrossLineContext = BulletCrossLineContext;
var BulletSimpleContext = /** @class */ (function (_super) {
    __extends(BulletSimpleContext, _super);
    function BulletSimpleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BulletSimpleContext.prototype.LineBreak = function () { return this.getToken(ReStructuredTextParser.LineBreak, 0); };
    BulletSimpleContext.prototype.bullet = function () {
        return this.getRuleContext(0, BulletContext);
    };
    BulletSimpleContext.prototype.paragraphNoBreak = function () {
        return this.getRuleContext(0, ParagraphNoBreakContext);
    };
    BulletSimpleContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    BulletSimpleContext.prototype.paragraph = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParagraphContext);
        }
        else {
            return this.getRuleContext(i, ParagraphContext);
        }
    };
    Object.defineProperty(BulletSimpleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_bulletSimple; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BulletSimpleContext.prototype.enterRule = function (listener) {
        if (listener.enterBulletSimple) {
            listener.enterBulletSimple(this);
        }
    };
    // @Override
    BulletSimpleContext.prototype.exitRule = function (listener) {
        if (listener.exitBulletSimple) {
            listener.exitBulletSimple(this);
        }
    };
    // @Override
    BulletSimpleContext.prototype.accept = function (visitor) {
        if (visitor.visitBulletSimple) {
            return visitor.visitBulletSimple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BulletSimpleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BulletSimpleContext = BulletSimpleContext;
var BulletContext = /** @class */ (function (_super) {
    __extends(BulletContext, _super);
    function BulletContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BulletContext.prototype.Star = function () { return this.tryGetToken(ReStructuredTextParser.Star, 0); };
    BulletContext.prototype.Minus = function () { return this.tryGetToken(ReStructuredTextParser.Minus, 0); };
    BulletContext.prototype.Plus = function () { return this.tryGetToken(ReStructuredTextParser.Plus, 0); };
    Object.defineProperty(BulletContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_bullet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BulletContext.prototype.enterRule = function (listener) {
        if (listener.enterBullet) {
            listener.enterBullet(this);
        }
    };
    // @Override
    BulletContext.prototype.exitRule = function (listener) {
        if (listener.exitBullet) {
            listener.exitBullet(this);
        }
    };
    // @Override
    BulletContext.prototype.accept = function (visitor) {
        if (visitor.visitBullet) {
            return visitor.visitBullet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BulletContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BulletContext = BulletContext;
var ListItemEnumeratedContext = /** @class */ (function (_super) {
    __extends(ListItemEnumeratedContext, _super);
    function ListItemEnumeratedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListItemEnumeratedContext.prototype.LineBreak = function () { return this.getToken(ReStructuredTextParser.LineBreak, 0); };
    ListItemEnumeratedContext.prototype.lineSpecial = function () {
        return this.getRuleContext(0, LineSpecialContext);
    };
    ListItemEnumeratedContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    ListItemEnumeratedContext.prototype.paragraphNoBreak = function () {
        return this.tryGetRuleContext(0, ParagraphNoBreakContext);
    };
    ListItemEnumeratedContext.prototype.paragraph = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParagraphContext);
        }
        else {
            return this.getRuleContext(i, ParagraphContext);
        }
    };
    Object.defineProperty(ListItemEnumeratedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_listItemEnumerated; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListItemEnumeratedContext.prototype.enterRule = function (listener) {
        if (listener.enterListItemEnumerated) {
            listener.enterListItemEnumerated(this);
        }
    };
    // @Override
    ListItemEnumeratedContext.prototype.exitRule = function (listener) {
        if (listener.exitListItemEnumerated) {
            listener.exitListItemEnumerated(this);
        }
    };
    // @Override
    ListItemEnumeratedContext.prototype.accept = function (visitor) {
        if (visitor.visitListItemEnumerated) {
            return visitor.visitListItemEnumerated(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListItemEnumeratedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListItemEnumeratedContext = ListItemEnumeratedContext;
var ParagraphNoBreakContext = /** @class */ (function (_super) {
    __extends(ParagraphNoBreakContext, _super);
    function ParagraphNoBreakContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParagraphNoBreakContext.prototype.lineNoBreak = function () {
        return this.getRuleContext(0, LineNoBreakContext);
    };
    ParagraphNoBreakContext.prototype.lines = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LinesContext);
        }
        else {
            return this.getRuleContext(i, LinesContext);
        }
    };
    Object.defineProperty(ParagraphNoBreakContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_paragraphNoBreak; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParagraphNoBreakContext.prototype.enterRule = function (listener) {
        if (listener.enterParagraphNoBreak) {
            listener.enterParagraphNoBreak(this);
        }
    };
    // @Override
    ParagraphNoBreakContext.prototype.exitRule = function (listener) {
        if (listener.exitParagraphNoBreak) {
            listener.exitParagraphNoBreak(this);
        }
    };
    // @Override
    ParagraphNoBreakContext.prototype.accept = function (visitor) {
        if (visitor.visitParagraphNoBreak) {
            return visitor.visitParagraphNoBreak(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParagraphNoBreakContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParagraphNoBreakContext = ParagraphNoBreakContext;
var LineNoBreakContext = /** @class */ (function (_super) {
    __extends(LineNoBreakContext, _super);
    function LineNoBreakContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineNoBreakContext.prototype.spanLineStartNoStar = function () {
        return this.getRuleContext(0, SpanLineStartNoStarContext);
    };
    LineNoBreakContext.prototype.indentation = function () {
        return this.tryGetRuleContext(0, IndentationContext);
    };
    LineNoBreakContext.prototype.span = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SpanContext);
        }
        else {
            return this.getRuleContext(i, SpanContext);
        }
    };
    Object.defineProperty(LineNoBreakContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_lineNoBreak; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineNoBreakContext.prototype.enterRule = function (listener) {
        if (listener.enterLineNoBreak) {
            listener.enterLineNoBreak(this);
        }
    };
    // @Override
    LineNoBreakContext.prototype.exitRule = function (listener) {
        if (listener.exitLineNoBreak) {
            listener.exitLineNoBreak(this);
        }
    };
    // @Override
    LineNoBreakContext.prototype.accept = function (visitor) {
        if (visitor.visitLineNoBreak) {
            return visitor.visitLineNoBreak(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineNoBreakContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineNoBreakContext = LineNoBreakContext;
var LinesContext = /** @class */ (function (_super) {
    __extends(LinesContext, _super);
    function LinesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LinesContext.prototype.linesStar = function () {
        return this.tryGetRuleContext(0, LinesStarContext);
    };
    LinesContext.prototype.linesNormal = function () {
        return this.tryGetRuleContext(0, LinesNormalContext);
    };
    Object.defineProperty(LinesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_lines; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LinesContext.prototype.enterRule = function (listener) {
        if (listener.enterLines) {
            listener.enterLines(this);
        }
    };
    // @Override
    LinesContext.prototype.exitRule = function (listener) {
        if (listener.exitLines) {
            listener.exitLines(this);
        }
    };
    // @Override
    LinesContext.prototype.accept = function (visitor) {
        if (visitor.visitLines) {
            return visitor.visitLines(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LinesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LinesContext = LinesContext;
var LinesNormalContext = /** @class */ (function (_super) {
    __extends(LinesNormalContext, _super);
    function LinesNormalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LinesNormalContext.prototype.lineNormal = function () {
        return this.getRuleContext(0, LineNormalContext);
    };
    LinesNormalContext.prototype.linesStar = function () {
        return this.tryGetRuleContext(0, LinesStarContext);
    };
    LinesNormalContext.prototype.linesNormal = function () {
        return this.tryGetRuleContext(0, LinesNormalContext);
    };
    Object.defineProperty(LinesNormalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_linesNormal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LinesNormalContext.prototype.enterRule = function (listener) {
        if (listener.enterLinesNormal) {
            listener.enterLinesNormal(this);
        }
    };
    // @Override
    LinesNormalContext.prototype.exitRule = function (listener) {
        if (listener.exitLinesNormal) {
            listener.exitLinesNormal(this);
        }
    };
    // @Override
    LinesNormalContext.prototype.accept = function (visitor) {
        if (visitor.visitLinesNormal) {
            return visitor.visitLinesNormal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LinesNormalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LinesNormalContext = LinesNormalContext;
var LinesStarContext = /** @class */ (function (_super) {
    __extends(LinesStarContext, _super);
    function LinesStarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LinesStarContext.prototype.lineStar = function () {
        return this.getRuleContext(0, LineStarContext);
    };
    LinesStarContext.prototype.lineNoBreak = function () {
        return this.tryGetRuleContext(0, LineNoBreakContext);
    };
    LinesStarContext.prototype.linesNormal = function () {
        return this.tryGetRuleContext(0, LinesNormalContext);
    };
    LinesStarContext.prototype.linesStar = function () {
        return this.tryGetRuleContext(0, LinesStarContext);
    };
    Object.defineProperty(LinesStarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_linesStar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LinesStarContext.prototype.enterRule = function (listener) {
        if (listener.enterLinesStar) {
            listener.enterLinesStar(this);
        }
    };
    // @Override
    LinesStarContext.prototype.exitRule = function (listener) {
        if (listener.exitLinesStar) {
            listener.exitLinesStar(this);
        }
    };
    // @Override
    LinesStarContext.prototype.accept = function (visitor) {
        if (visitor.visitLinesStar) {
            return visitor.visitLinesStar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LinesStarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LinesStarContext = LinesStarContext;
var LineNormalContext = /** @class */ (function (_super) {
    __extends(LineNormalContext, _super);
    function LineNormalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineNormalContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    LineNormalContext.prototype.indentation = function () {
        return this.tryGetRuleContext(0, IndentationContext);
    };
    LineNormalContext.prototype.spanLineStartNoStar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SpanLineStartNoStarContext);
        }
        else {
            return this.getRuleContext(i, SpanLineStartNoStarContext);
        }
    };
    LineNormalContext.prototype.span = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SpanContext);
        }
        else {
            return this.getRuleContext(i, SpanContext);
        }
    };
    LineNormalContext.prototype.spanNoStar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SpanNoStarContext);
        }
        else {
            return this.getRuleContext(i, SpanNoStarContext);
        }
    };
    LineNormalContext.prototype.lineSpecial = function () {
        return this.tryGetRuleContext(0, LineSpecialContext);
    };
    Object.defineProperty(LineNormalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_lineNormal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineNormalContext.prototype.enterRule = function (listener) {
        if (listener.enterLineNormal) {
            listener.enterLineNormal(this);
        }
    };
    // @Override
    LineNormalContext.prototype.exitRule = function (listener) {
        if (listener.exitLineNormal) {
            listener.exitLineNormal(this);
        }
    };
    // @Override
    LineNormalContext.prototype.accept = function (visitor) {
        if (visitor.visitLineNormal) {
            return visitor.visitLineNormal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineNormalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineNormalContext = LineNormalContext;
var LineStarContext = /** @class */ (function (_super) {
    __extends(LineStarContext, _super);
    function LineStarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineStarContext.prototype.LineBreak = function () { return this.getToken(ReStructuredTextParser.LineBreak, 0); };
    LineStarContext.prototype.starText = function () {
        return this.getRuleContext(0, StarTextContext);
    };
    LineStarContext.prototype.indentation = function () {
        return this.tryGetRuleContext(0, IndentationContext);
    };
    LineStarContext.prototype.spanLineStartNoStar = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SpanLineStartNoStarContext);
        }
        else {
            return this.getRuleContext(i, SpanLineStartNoStarContext);
        }
    };
    LineStarContext.prototype.text_fragment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Text_fragmentContext);
        }
        else {
            return this.getRuleContext(i, Text_fragmentContext);
        }
    };
    Object.defineProperty(LineStarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_lineStar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineStarContext.prototype.enterRule = function (listener) {
        if (listener.enterLineStar) {
            listener.enterLineStar(this);
        }
    };
    // @Override
    LineStarContext.prototype.exitRule = function (listener) {
        if (listener.exitLineStar) {
            listener.exitLineStar(this);
        }
    };
    // @Override
    LineStarContext.prototype.accept = function (visitor) {
        if (visitor.visitLineStar) {
            return visitor.visitLineStar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineStarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineStarContext = LineStarContext;
var LineSpecialContext = /** @class */ (function (_super) {
    __extends(LineSpecialContext, _super);
    function LineSpecialContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineSpecialContext.prototype.Numbers = function () { return this.tryGetToken(ReStructuredTextParser.Numbers, 0); };
    LineSpecialContext.prototype.Dot = function () { return this.tryGetToken(ReStructuredTextParser.Dot, 0); };
    LineSpecialContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    LineSpecialContext.prototype.indentation = function () {
        return this.tryGetRuleContext(0, IndentationContext);
    };
    LineSpecialContext.prototype.SectionSeparator = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.SectionSeparator);
        }
        else {
            return this.getToken(ReStructuredTextParser.SectionSeparator, i);
        }
    };
    LineSpecialContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    Object.defineProperty(LineSpecialContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_lineSpecial; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineSpecialContext.prototype.enterRule = function (listener) {
        if (listener.enterLineSpecial) {
            listener.enterLineSpecial(this);
        }
    };
    // @Override
    LineSpecialContext.prototype.exitRule = function (listener) {
        if (listener.exitLineSpecial) {
            listener.exitLineSpecial(this);
        }
    };
    // @Override
    LineSpecialContext.prototype.accept = function (visitor) {
        if (visitor.visitLineSpecial) {
            return visitor.visitLineSpecial(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineSpecialContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineSpecialContext = LineSpecialContext;
var Empty_lineContext = /** @class */ (function (_super) {
    __extends(Empty_lineContext, _super);
    function Empty_lineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Empty_lineContext.prototype.LineBreak = function () { return this.getToken(ReStructuredTextParser.LineBreak, 0); };
    Empty_lineContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    Object.defineProperty(Empty_lineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_empty_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Empty_lineContext.prototype.enterRule = function (listener) {
        if (listener.enterEmpty_line) {
            listener.enterEmpty_line(this);
        }
    };
    // @Override
    Empty_lineContext.prototype.exitRule = function (listener) {
        if (listener.exitEmpty_line) {
            listener.exitEmpty_line(this);
        }
    };
    // @Override
    Empty_lineContext.prototype.accept = function (visitor) {
        if (visitor.visitEmpty_line) {
            return visitor.visitEmpty_line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Empty_lineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Empty_lineContext = Empty_lineContext;
var IndentationContext = /** @class */ (function (_super) {
    __extends(IndentationContext, _super);
    function IndentationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndentationContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    Object.defineProperty(IndentationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_indentation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndentationContext.prototype.enterRule = function (listener) {
        if (listener.enterIndentation) {
            listener.enterIndentation(this);
        }
    };
    // @Override
    IndentationContext.prototype.exitRule = function (listener) {
        if (listener.exitIndentation) {
            listener.exitIndentation(this);
        }
    };
    // @Override
    IndentationContext.prototype.accept = function (visitor) {
        if (visitor.visitIndentation) {
            return visitor.visitIndentation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndentationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndentationContext = IndentationContext;
var SpanLineStartNoStarContext = /** @class */ (function (_super) {
    __extends(SpanLineStartNoStarContext, _super);
    function SpanLineStartNoStarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpanLineStartNoStarContext.prototype.reference = function () {
        return this.tryGetRuleContext(0, ReferenceContext);
    };
    SpanLineStartNoStarContext.prototype.referenceIn = function () {
        return this.tryGetRuleContext(0, ReferenceInContext);
    };
    SpanLineStartNoStarContext.prototype.hyperlinkTarget = function () {
        return this.tryGetRuleContext(0, HyperlinkTargetContext);
    };
    SpanLineStartNoStarContext.prototype.hyperlink = function () {
        return this.tryGetRuleContext(0, HyperlinkContext);
    };
    SpanLineStartNoStarContext.prototype.hyperlinkDoc = function () {
        return this.tryGetRuleContext(0, HyperlinkDocContext);
    };
    SpanLineStartNoStarContext.prototype.backTickText = function () {
        return this.tryGetRuleContext(0, BackTickTextContext);
    };
    SpanLineStartNoStarContext.prototype.quotedLiteral = function () {
        return this.tryGetRuleContext(0, QuotedLiteralContext);
    };
    SpanLineStartNoStarContext.prototype.textLineStart = function () {
        return this.tryGetRuleContext(0, TextLineStartContext);
    };
    Object.defineProperty(SpanLineStartNoStarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_spanLineStartNoStar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpanLineStartNoStarContext.prototype.enterRule = function (listener) {
        if (listener.enterSpanLineStartNoStar) {
            listener.enterSpanLineStartNoStar(this);
        }
    };
    // @Override
    SpanLineStartNoStarContext.prototype.exitRule = function (listener) {
        if (listener.exitSpanLineStartNoStar) {
            listener.exitSpanLineStartNoStar(this);
        }
    };
    // @Override
    SpanLineStartNoStarContext.prototype.accept = function (visitor) {
        if (visitor.visitSpanLineStartNoStar) {
            return visitor.visitSpanLineStartNoStar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpanLineStartNoStarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpanLineStartNoStarContext = SpanLineStartNoStarContext;
var TextLineStartContext = /** @class */ (function (_super) {
    __extends(TextLineStartContext, _super);
    function TextLineStartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextLineStartContext.prototype.lineStart_fragment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStart_fragmentContext);
        }
        else {
            return this.getRuleContext(i, LineStart_fragmentContext);
        }
    };
    TextLineStartContext.prototype.text_fragment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Text_fragmentContext);
        }
        else {
            return this.getRuleContext(i, Text_fragmentContext);
        }
    };
    Object.defineProperty(TextLineStartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_textLineStart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TextLineStartContext.prototype.enterRule = function (listener) {
        if (listener.enterTextLineStart) {
            listener.enterTextLineStart(this);
        }
    };
    // @Override
    TextLineStartContext.prototype.exitRule = function (listener) {
        if (listener.exitTextLineStart) {
            listener.exitTextLineStart(this);
        }
    };
    // @Override
    TextLineStartContext.prototype.accept = function (visitor) {
        if (visitor.visitTextLineStart) {
            return visitor.visitTextLineStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TextLineStartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TextLineStartContext = TextLineStartContext;
var LineStart_fragmentContext = /** @class */ (function (_super) {
    __extends(LineStart_fragmentContext, _super);
    function LineStart_fragmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineStart_fragmentContext.prototype.Minus = function () { return this.tryGetToken(ReStructuredTextParser.Minus, 0); };
    LineStart_fragmentContext.prototype.Space = function () { return this.tryGetToken(ReStructuredTextParser.Space, 0); };
    LineStart_fragmentContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    LineStart_fragmentContext.prototype.Star = function () { return this.tryGetToken(ReStructuredTextParser.Star, 0); };
    LineStart_fragmentContext.prototype.Plus = function () { return this.tryGetToken(ReStructuredTextParser.Plus, 0); };
    LineStart_fragmentContext.prototype.Numbers = function () { return this.tryGetToken(ReStructuredTextParser.Numbers, 0); };
    LineStart_fragmentContext.prototype.Dot = function () { return this.tryGetToken(ReStructuredTextParser.Dot, 0); };
    LineStart_fragmentContext.prototype.Alphabet = function () { return this.tryGetToken(ReStructuredTextParser.Alphabet, 0); };
    LineStart_fragmentContext.prototype.Block = function () { return this.tryGetToken(ReStructuredTextParser.Block, 0); };
    LineStart_fragmentContext.prototype.UnderScore = function () { return this.tryGetToken(ReStructuredTextParser.UnderScore, 0); };
    LineStart_fragmentContext.prototype.separator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SeparatorContext);
        }
        else {
            return this.getRuleContext(i, SeparatorContext);
        }
    };
    LineStart_fragmentContext.prototype.TimeStar = function () { return this.tryGetToken(ReStructuredTextParser.TimeStar, 0); };
    LineStart_fragmentContext.prototype.SquareLeft = function () { return this.tryGetToken(ReStructuredTextParser.SquareLeft, 0); };
    LineStart_fragmentContext.prototype.SquareRight = function () { return this.tryGetToken(ReStructuredTextParser.SquareRight, 0); };
    LineStart_fragmentContext.prototype.RoundLeft = function () { return this.tryGetToken(ReStructuredTextParser.RoundLeft, 0); };
    LineStart_fragmentContext.prototype.RoundRight = function () { return this.tryGetToken(ReStructuredTextParser.RoundRight, 0); };
    LineStart_fragmentContext.prototype.SemiColon = function () { return this.tryGetToken(ReStructuredTextParser.SemiColon, 0); };
    LineStart_fragmentContext.prototype.Colon = function () { return this.tryGetToken(ReStructuredTextParser.Colon, 0); };
    LineStart_fragmentContext.prototype.QuotationDouble = function () { return this.tryGetToken(ReStructuredTextParser.QuotationDouble, 0); };
    LineStart_fragmentContext.prototype.QuotationSingle = function () { return this.tryGetToken(ReStructuredTextParser.QuotationSingle, 0); };
    LineStart_fragmentContext.prototype.AngleLeft = function () { return this.tryGetToken(ReStructuredTextParser.AngleLeft, 0); };
    LineStart_fragmentContext.prototype.AngleRight = function () { return this.tryGetToken(ReStructuredTextParser.AngleRight, 0); };
    LineStart_fragmentContext.prototype.Any = function () { return this.tryGetToken(ReStructuredTextParser.Any, 0); };
    Object.defineProperty(LineStart_fragmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_lineStart_fragment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineStart_fragmentContext.prototype.enterRule = function (listener) {
        if (listener.enterLineStart_fragment) {
            listener.enterLineStart_fragment(this);
        }
    };
    // @Override
    LineStart_fragmentContext.prototype.exitRule = function (listener) {
        if (listener.exitLineStart_fragment) {
            listener.exitLineStart_fragment(this);
        }
    };
    // @Override
    LineStart_fragmentContext.prototype.accept = function (visitor) {
        if (visitor.visitLineStart_fragment) {
            return visitor.visitLineStart_fragment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineStart_fragmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineStart_fragmentContext = LineStart_fragmentContext;
var TextContext = /** @class */ (function (_super) {
    __extends(TextContext, _super);
    function TextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextContext.prototype.textStart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TextStartContext);
        }
        else {
            return this.getRuleContext(i, TextStartContext);
        }
    };
    TextContext.prototype.text_fragment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Text_fragmentContext);
        }
        else {
            return this.getRuleContext(i, Text_fragmentContext);
        }
    };
    Object.defineProperty(TextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_text; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TextContext.prototype.enterRule = function (listener) {
        if (listener.enterText) {
            listener.enterText(this);
        }
    };
    // @Override
    TextContext.prototype.exitRule = function (listener) {
        if (listener.exitText) {
            listener.exitText(this);
        }
    };
    // @Override
    TextContext.prototype.accept = function (visitor) {
        if (visitor.visitText) {
            return visitor.visitText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TextContext = TextContext;
var TextStartContext = /** @class */ (function (_super) {
    __extends(TextStartContext, _super);
    function TextStartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextStartContext.prototype.forcedText = function () {
        return this.tryGetRuleContext(0, ForcedTextContext);
    };
    TextStartContext.prototype.lineStart_fragment = function () {
        return this.tryGetRuleContext(0, LineStart_fragmentContext);
    };
    TextStartContext.prototype.text_fragment_start = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Text_fragment_startContext);
        }
        else {
            return this.getRuleContext(i, Text_fragment_startContext);
        }
    };
    TextStartContext.prototype.Space = function () { return this.tryGetToken(ReStructuredTextParser.Space, 0); };
    Object.defineProperty(TextStartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_textStart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TextStartContext.prototype.enterRule = function (listener) {
        if (listener.enterTextStart) {
            listener.enterTextStart(this);
        }
    };
    // @Override
    TextStartContext.prototype.exitRule = function (listener) {
        if (listener.exitTextStart) {
            listener.exitTextStart(this);
        }
    };
    // @Override
    TextStartContext.prototype.accept = function (visitor) {
        if (visitor.visitTextStart) {
            return visitor.visitTextStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TextStartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TextStartContext = TextStartContext;
var ForcedTextContext = /** @class */ (function (_super) {
    __extends(ForcedTextContext, _super);
    function ForcedTextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForcedTextContext.prototype.RoundLeft = function () { return this.tryGetToken(ReStructuredTextParser.RoundLeft, 0); };
    ForcedTextContext.prototype.Star = function () { return this.getToken(ReStructuredTextParser.Star, 0); };
    ForcedTextContext.prototype.RoundRight = function () { return this.tryGetToken(ReStructuredTextParser.RoundRight, 0); };
    ForcedTextContext.prototype.SquareLeft = function () { return this.tryGetToken(ReStructuredTextParser.SquareLeft, 0); };
    ForcedTextContext.prototype.SquareRight = function () { return this.tryGetToken(ReStructuredTextParser.SquareRight, 0); };
    ForcedTextContext.prototype.QuotationSingle = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.QuotationSingle);
        }
        else {
            return this.getToken(ReStructuredTextParser.QuotationSingle, i);
        }
    };
    ForcedTextContext.prototype.QuotationDouble = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.QuotationDouble);
        }
        else {
            return this.getToken(ReStructuredTextParser.QuotationDouble, i);
        }
    };
    Object.defineProperty(ForcedTextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_forcedText; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForcedTextContext.prototype.enterRule = function (listener) {
        if (listener.enterForcedText) {
            listener.enterForcedText(this);
        }
    };
    // @Override
    ForcedTextContext.prototype.exitRule = function (listener) {
        if (listener.exitForcedText) {
            listener.exitForcedText(this);
        }
    };
    // @Override
    ForcedTextContext.prototype.accept = function (visitor) {
        if (visitor.visitForcedText) {
            return visitor.visitForcedText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForcedTextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForcedTextContext = ForcedTextContext;
var SpanNoStarContext = /** @class */ (function (_super) {
    __extends(SpanNoStarContext, _super);
    function SpanNoStarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpanNoStarContext.prototype.reference = function () {
        return this.tryGetRuleContext(0, ReferenceContext);
    };
    SpanNoStarContext.prototype.referenceIn = function () {
        return this.tryGetRuleContext(0, ReferenceInContext);
    };
    SpanNoStarContext.prototype.hyperlinkTarget = function () {
        return this.tryGetRuleContext(0, HyperlinkTargetContext);
    };
    SpanNoStarContext.prototype.hyperlink = function () {
        return this.tryGetRuleContext(0, HyperlinkContext);
    };
    SpanNoStarContext.prototype.hyperlinkDoc = function () {
        return this.tryGetRuleContext(0, HyperlinkDocContext);
    };
    SpanNoStarContext.prototype.backTickText = function () {
        return this.tryGetRuleContext(0, BackTickTextContext);
    };
    SpanNoStarContext.prototype.quotedLiteral = function () {
        return this.tryGetRuleContext(0, QuotedLiteralContext);
    };
    SpanNoStarContext.prototype.text = function () {
        return this.tryGetRuleContext(0, TextContext);
    };
    Object.defineProperty(SpanNoStarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_spanNoStar; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpanNoStarContext.prototype.enterRule = function (listener) {
        if (listener.enterSpanNoStar) {
            listener.enterSpanNoStar(this);
        }
    };
    // @Override
    SpanNoStarContext.prototype.exitRule = function (listener) {
        if (listener.exitSpanNoStar) {
            listener.exitSpanNoStar(this);
        }
    };
    // @Override
    SpanNoStarContext.prototype.accept = function (visitor) {
        if (visitor.visitSpanNoStar) {
            return visitor.visitSpanNoStar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpanNoStarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpanNoStarContext = SpanNoStarContext;
var SpanContext = /** @class */ (function (_super) {
    __extends(SpanContext, _super);
    function SpanContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpanContext.prototype.starText = function () {
        return this.tryGetRuleContext(0, StarTextContext);
    };
    SpanContext.prototype.spanNoStar = function () {
        return this.tryGetRuleContext(0, SpanNoStarContext);
    };
    Object.defineProperty(SpanContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_span; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpanContext.prototype.enterRule = function (listener) {
        if (listener.enterSpan) {
            listener.enterSpan(this);
        }
    };
    // @Override
    SpanContext.prototype.exitRule = function (listener) {
        if (listener.exitSpan) {
            listener.exitSpan(this);
        }
    };
    // @Override
    SpanContext.prototype.accept = function (visitor) {
        if (visitor.visitSpan) {
            return visitor.visitSpan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpanContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpanContext = SpanContext;
var QuotedLiteralContext = /** @class */ (function (_super) {
    __extends(QuotedLiteralContext, _super);
    function QuotedLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QuotedLiteralContext.prototype.AngleRight = function () { return this.getToken(ReStructuredTextParser.AngleRight, 0); };
    QuotedLiteralContext.prototype.Space = function () { return this.getToken(ReStructuredTextParser.Space, 0); };
    QuotedLiteralContext.prototype.lineNoBreak = function () {
        return this.getRuleContext(0, LineNoBreakContext);
    };
    Object.defineProperty(QuotedLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_quotedLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QuotedLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterQuotedLiteral) {
            listener.enterQuotedLiteral(this);
        }
    };
    // @Override
    QuotedLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitQuotedLiteral) {
            listener.exitQuotedLiteral(this);
        }
    };
    // @Override
    QuotedLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitQuotedLiteral) {
            return visitor.visitQuotedLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuotedLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QuotedLiteralContext = QuotedLiteralContext;
var Text_fragment_startContext = /** @class */ (function (_super) {
    __extends(Text_fragment_startContext, _super);
    function Text_fragment_startContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Text_fragment_startContext.prototype.SemiColon = function () { return this.tryGetToken(ReStructuredTextParser.SemiColon, 0); };
    Text_fragment_startContext.prototype.Numbers = function () { return this.tryGetToken(ReStructuredTextParser.Numbers, 0); };
    Text_fragment_startContext.prototype.Alphabet = function () { return this.tryGetToken(ReStructuredTextParser.Alphabet, 0); };
    Text_fragment_startContext.prototype.Space = function () { return this.tryGetToken(ReStructuredTextParser.Space, 0); };
    Text_fragment_startContext.prototype.SquareLeft = function () { return this.tryGetToken(ReStructuredTextParser.SquareLeft, 0); };
    Text_fragment_startContext.prototype.SquareRight = function () { return this.tryGetToken(ReStructuredTextParser.SquareRight, 0); };
    Text_fragment_startContext.prototype.RoundLeft = function () { return this.tryGetToken(ReStructuredTextParser.RoundLeft, 0); };
    Text_fragment_startContext.prototype.RoundRight = function () { return this.tryGetToken(ReStructuredTextParser.RoundRight, 0); };
    Text_fragment_startContext.prototype.Colon = function () { return this.tryGetToken(ReStructuredTextParser.Colon, 0); };
    Text_fragment_startContext.prototype.separator = function () {
        return this.tryGetRuleContext(0, SeparatorContext);
    };
    Text_fragment_startContext.prototype.AngleLeft = function () { return this.tryGetToken(ReStructuredTextParser.AngleLeft, 0); };
    Text_fragment_startContext.prototype.AngleRight = function () { return this.tryGetToken(ReStructuredTextParser.AngleRight, 0); };
    Text_fragment_startContext.prototype.QuotationDouble = function () { return this.tryGetToken(ReStructuredTextParser.QuotationDouble, 0); };
    Text_fragment_startContext.prototype.Dot = function () { return this.tryGetToken(ReStructuredTextParser.Dot, 0); };
    Text_fragment_startContext.prototype.Star = function () { return this.tryGetToken(ReStructuredTextParser.Star, 0); };
    Text_fragment_startContext.prototype.Any = function () { return this.tryGetToken(ReStructuredTextParser.Any, 0); };
    Object.defineProperty(Text_fragment_startContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_text_fragment_start; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Text_fragment_startContext.prototype.enterRule = function (listener) {
        if (listener.enterText_fragment_start) {
            listener.enterText_fragment_start(this);
        }
    };
    // @Override
    Text_fragment_startContext.prototype.exitRule = function (listener) {
        if (listener.exitText_fragment_start) {
            listener.exitText_fragment_start(this);
        }
    };
    // @Override
    Text_fragment_startContext.prototype.accept = function (visitor) {
        if (visitor.visitText_fragment_start) {
            return visitor.visitText_fragment_start(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Text_fragment_startContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Text_fragment_startContext = Text_fragment_startContext;
var Text_fragmentContext = /** @class */ (function (_super) {
    __extends(Text_fragmentContext, _super);
    function Text_fragmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Text_fragmentContext.prototype.text_fragment_start = function () {
        return this.tryGetRuleContext(0, Text_fragment_startContext);
    };
    Text_fragmentContext.prototype.forcedText = function () {
        return this.tryGetRuleContext(0, ForcedTextContext);
    };
    Text_fragmentContext.prototype.Block = function () { return this.tryGetToken(ReStructuredTextParser.Block, 0); };
    Text_fragmentContext.prototype.Literal = function () { return this.tryGetToken(ReStructuredTextParser.Literal, 0); };
    Text_fragmentContext.prototype.Comment = function () { return this.tryGetToken(ReStructuredTextParser.Comment, 0); };
    Text_fragmentContext.prototype.Dot = function () { return this.tryGetToken(ReStructuredTextParser.Dot, 0); };
    Text_fragmentContext.prototype.Quote = function () { return this.tryGetToken(ReStructuredTextParser.Quote, 0); };
    Object.defineProperty(Text_fragmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_text_fragment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Text_fragmentContext.prototype.enterRule = function (listener) {
        if (listener.enterText_fragment) {
            listener.enterText_fragment(this);
        }
    };
    // @Override
    Text_fragmentContext.prototype.exitRule = function (listener) {
        if (listener.exitText_fragment) {
            listener.exitText_fragment(this);
        }
    };
    // @Override
    Text_fragmentContext.prototype.accept = function (visitor) {
        if (visitor.visitText_fragment) {
            return visitor.visitText_fragment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Text_fragmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Text_fragmentContext = Text_fragmentContext;
var StarTextContext = /** @class */ (function (_super) {
    __extends(StarTextContext, _super);
    function StarTextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StarTextContext.prototype.LineBreak = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.LineBreak);
        }
        else {
            return this.getToken(ReStructuredTextParser.LineBreak, i);
        }
    };
    StarTextContext.prototype.Star = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Star);
        }
        else {
            return this.getToken(ReStructuredTextParser.Star, i);
        }
    };
    StarTextContext.prototype.starNoSpace = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StarNoSpaceContext);
        }
        else {
            return this.getRuleContext(i, StarNoSpaceContext);
        }
    };
    StarTextContext.prototype.starAtoms = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StarAtomsContext);
        }
        else {
            return this.getRuleContext(i, StarAtomsContext);
        }
    };
    StarTextContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    Object.defineProperty(StarTextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_starText; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StarTextContext.prototype.enterRule = function (listener) {
        if (listener.enterStarText) {
            listener.enterStarText(this);
        }
    };
    // @Override
    StarTextContext.prototype.exitRule = function (listener) {
        if (listener.exitStarText) {
            listener.exitStarText(this);
        }
    };
    // @Override
    StarTextContext.prototype.accept = function (visitor) {
        if (visitor.visitStarText) {
            return visitor.visitStarText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StarTextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StarTextContext = StarTextContext;
var StarAtomsContext = /** @class */ (function (_super) {
    __extends(StarAtomsContext, _super);
    function StarAtomsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StarAtomsContext.prototype.starAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StarAtomContext);
        }
        else {
            return this.getRuleContext(i, StarAtomContext);
        }
    };
    StarAtomsContext.prototype.Star = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Star);
        }
        else {
            return this.getToken(ReStructuredTextParser.Star, i);
        }
    };
    Object.defineProperty(StarAtomsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_starAtoms; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StarAtomsContext.prototype.enterRule = function (listener) {
        if (listener.enterStarAtoms) {
            listener.enterStarAtoms(this);
        }
    };
    // @Override
    StarAtomsContext.prototype.exitRule = function (listener) {
        if (listener.exitStarAtoms) {
            listener.exitStarAtoms(this);
        }
    };
    // @Override
    StarAtomsContext.prototype.accept = function (visitor) {
        if (visitor.visitStarAtoms) {
            return visitor.visitStarAtoms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StarAtomsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StarAtomsContext = StarAtomsContext;
var StarNoSpaceContext = /** @class */ (function (_super) {
    __extends(StarNoSpaceContext, _super);
    function StarNoSpaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StarNoSpaceContext.prototype.Star = function () { return this.tryGetToken(ReStructuredTextParser.Star, 0); };
    StarNoSpaceContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    StarNoSpaceContext.prototype.Space = function () { return this.tryGetToken(ReStructuredTextParser.Space, 0); };
    StarNoSpaceContext.prototype.SectionSeparator = function () { return this.tryGetToken(ReStructuredTextParser.SectionSeparator, 0); };
    Object.defineProperty(StarNoSpaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_starNoSpace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StarNoSpaceContext.prototype.enterRule = function (listener) {
        if (listener.enterStarNoSpace) {
            listener.enterStarNoSpace(this);
        }
    };
    // @Override
    StarNoSpaceContext.prototype.exitRule = function (listener) {
        if (listener.exitStarNoSpace) {
            listener.exitStarNoSpace(this);
        }
    };
    // @Override
    StarNoSpaceContext.prototype.accept = function (visitor) {
        if (visitor.visitStarNoSpace) {
            return visitor.visitStarNoSpace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StarNoSpaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StarNoSpaceContext = StarNoSpaceContext;
var StarAtomContext = /** @class */ (function (_super) {
    __extends(StarAtomContext, _super);
    function StarAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StarAtomContext.prototype.Star = function () { return this.tryGetToken(ReStructuredTextParser.Star, 0); };
    StarAtomContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    Object.defineProperty(StarAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_starAtom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StarAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterStarAtom) {
            listener.enterStarAtom(this);
        }
    };
    // @Override
    StarAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitStarAtom) {
            listener.exitStarAtom(this);
        }
    };
    // @Override
    StarAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitStarAtom) {
            return visitor.visitStarAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StarAtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StarAtomContext = StarAtomContext;
var BackTickTextContext = /** @class */ (function (_super) {
    __extends(BackTickTextContext, _super);
    function BackTickTextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BackTickTextContext.prototype.body = function () {
        return this.getRuleContext(0, BodyContext);
    };
    BackTickTextContext.prototype.Colon = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Colon);
        }
        else {
            return this.getToken(ReStructuredTextParser.Colon, i);
        }
    };
    BackTickTextContext.prototype.UnderScore = function () { return this.tryGetToken(ReStructuredTextParser.UnderScore, 0); };
    BackTickTextContext.prototype.Alphabet = function () { return this.tryGetToken(ReStructuredTextParser.Alphabet, 0); };
    Object.defineProperty(BackTickTextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_backTickText; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BackTickTextContext.prototype.enterRule = function (listener) {
        if (listener.enterBackTickText) {
            listener.enterBackTickText(this);
        }
    };
    // @Override
    BackTickTextContext.prototype.exitRule = function (listener) {
        if (listener.exitBackTickText) {
            listener.exitBackTickText(this);
        }
    };
    // @Override
    BackTickTextContext.prototype.accept = function (visitor) {
        if (visitor.visitBackTickText) {
            return visitor.visitBackTickText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BackTickTextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BackTickTextContext = BackTickTextContext;
var BodyContext = /** @class */ (function (_super) {
    __extends(BodyContext, _super);
    function BodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BodyContext.prototype.BackTick = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.BackTick);
        }
        else {
            return this.getToken(ReStructuredTextParser.BackTick, i);
        }
    };
    BodyContext.prototype.backTickAtoms = function () {
        return this.tryGetRuleContext(0, BackTickAtomsContext);
    };
    BodyContext.prototype.backTickNoSpace = function () {
        return this.tryGetRuleContext(0, BackTickNoSpaceContext);
    };
    Object.defineProperty(BodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BodyContext.prototype.enterRule = function (listener) {
        if (listener.enterBody) {
            listener.enterBody(this);
        }
    };
    // @Override
    BodyContext.prototype.exitRule = function (listener) {
        if (listener.exitBody) {
            listener.exitBody(this);
        }
    };
    // @Override
    BodyContext.prototype.accept = function (visitor) {
        if (visitor.visitBody) {
            return visitor.visitBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BodyContext = BodyContext;
var BackTickAtomsContext = /** @class */ (function (_super) {
    __extends(BackTickAtomsContext, _super);
    function BackTickAtomsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BackTickAtomsContext.prototype.backTickAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BackTickAtomContext);
        }
        else {
            return this.getRuleContext(i, BackTickAtomContext);
        }
    };
    Object.defineProperty(BackTickAtomsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_backTickAtoms; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BackTickAtomsContext.prototype.enterRule = function (listener) {
        if (listener.enterBackTickAtoms) {
            listener.enterBackTickAtoms(this);
        }
    };
    // @Override
    BackTickAtomsContext.prototype.exitRule = function (listener) {
        if (listener.exitBackTickAtoms) {
            listener.exitBackTickAtoms(this);
        }
    };
    // @Override
    BackTickAtomsContext.prototype.accept = function (visitor) {
        if (visitor.visitBackTickAtoms) {
            return visitor.visitBackTickAtoms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BackTickAtomsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BackTickAtomsContext = BackTickAtomsContext;
var BackTickNoSpaceContext = /** @class */ (function (_super) {
    __extends(BackTickNoSpaceContext, _super);
    function BackTickNoSpaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BackTickNoSpaceContext.prototype.BackTick = function () { return this.tryGetToken(ReStructuredTextParser.BackTick, 0); };
    BackTickNoSpaceContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    BackTickNoSpaceContext.prototype.Space = function () { return this.tryGetToken(ReStructuredTextParser.Space, 0); };
    Object.defineProperty(BackTickNoSpaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_backTickNoSpace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BackTickNoSpaceContext.prototype.enterRule = function (listener) {
        if (listener.enterBackTickNoSpace) {
            listener.enterBackTickNoSpace(this);
        }
    };
    // @Override
    BackTickNoSpaceContext.prototype.exitRule = function (listener) {
        if (listener.exitBackTickNoSpace) {
            listener.exitBackTickNoSpace(this);
        }
    };
    // @Override
    BackTickNoSpaceContext.prototype.accept = function (visitor) {
        if (visitor.visitBackTickNoSpace) {
            return visitor.visitBackTickNoSpace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BackTickNoSpaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BackTickNoSpaceContext = BackTickNoSpaceContext;
var BackTickAtomContext = /** @class */ (function (_super) {
    __extends(BackTickAtomContext, _super);
    function BackTickAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BackTickAtomContext.prototype.BackTick = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.BackTick);
        }
        else {
            return this.getToken(ReStructuredTextParser.BackTick, i);
        }
    };
    BackTickAtomContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    Object.defineProperty(BackTickAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_backTickAtom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BackTickAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterBackTickAtom) {
            listener.enterBackTickAtom(this);
        }
    };
    // @Override
    BackTickAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitBackTickAtom) {
            listener.exitBackTickAtom(this);
        }
    };
    // @Override
    BackTickAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitBackTickAtom) {
            return visitor.visitBackTickAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BackTickAtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BackTickAtomContext = BackTickAtomContext;
var ReferenceContext = /** @class */ (function (_super) {
    __extends(ReferenceContext, _super);
    function ReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReferenceContext.prototype.UnderScore = function () { return this.getToken(ReStructuredTextParser.UnderScore, 0); };
    ReferenceContext.prototype.Any = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Any);
        }
        else {
            return this.getToken(ReStructuredTextParser.Any, i);
        }
    };
    Object.defineProperty(ReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_reference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterReference) {
            listener.enterReference(this);
        }
    };
    // @Override
    ReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitReference) {
            listener.exitReference(this);
        }
    };
    // @Override
    ReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitReference) {
            return visitor.visitReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReferenceContext = ReferenceContext;
var ReferenceInContext = /** @class */ (function (_super) {
    __extends(ReferenceInContext, _super);
    function ReferenceInContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReferenceInContext.prototype.UnderScore = function () { return this.getToken(ReStructuredTextParser.UnderScore, 0); };
    ReferenceInContext.prototype.Colon = function () { return this.getToken(ReStructuredTextParser.Colon, 0); };
    ReferenceInContext.prototype.Space = function () { return this.getToken(ReStructuredTextParser.Space, 0); };
    ReferenceInContext.prototype.url = function () {
        return this.getRuleContext(0, UrlContext);
    };
    ReferenceInContext.prototype.hyperlinkAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HyperlinkAtomContext);
        }
        else {
            return this.getRuleContext(i, HyperlinkAtomContext);
        }
    };
    Object.defineProperty(ReferenceInContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_referenceIn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReferenceInContext.prototype.enterRule = function (listener) {
        if (listener.enterReferenceIn) {
            listener.enterReferenceIn(this);
        }
    };
    // @Override
    ReferenceInContext.prototype.exitRule = function (listener) {
        if (listener.exitReferenceIn) {
            listener.exitReferenceIn(this);
        }
    };
    // @Override
    ReferenceInContext.prototype.accept = function (visitor) {
        if (visitor.visitReferenceIn) {
            return visitor.visitReferenceIn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenceInContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReferenceInContext = ReferenceInContext;
var HyperlinkTargetContext = /** @class */ (function (_super) {
    __extends(HyperlinkTargetContext, _super);
    function HyperlinkTargetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HyperlinkTargetContext.prototype.UnderScore = function () { return this.getToken(ReStructuredTextParser.UnderScore, 0); };
    HyperlinkTargetContext.prototype.Any = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Any);
        }
        else {
            return this.getToken(ReStructuredTextParser.Any, i);
        }
    };
    Object.defineProperty(HyperlinkTargetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_hyperlinkTarget; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HyperlinkTargetContext.prototype.enterRule = function (listener) {
        if (listener.enterHyperlinkTarget) {
            listener.enterHyperlinkTarget(this);
        }
    };
    // @Override
    HyperlinkTargetContext.prototype.exitRule = function (listener) {
        if (listener.exitHyperlinkTarget) {
            listener.exitHyperlinkTarget(this);
        }
    };
    // @Override
    HyperlinkTargetContext.prototype.accept = function (visitor) {
        if (visitor.visitHyperlinkTarget) {
            return visitor.visitHyperlinkTarget(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HyperlinkTargetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HyperlinkTargetContext = HyperlinkTargetContext;
var HyperlinkContext = /** @class */ (function (_super) {
    __extends(HyperlinkContext, _super);
    function HyperlinkContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HyperlinkContext.prototype.BackTick = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.BackTick);
        }
        else {
            return this.getToken(ReStructuredTextParser.BackTick, i);
        }
    };
    HyperlinkContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.Space);
        }
        else {
            return this.getToken(ReStructuredTextParser.Space, i);
        }
    };
    HyperlinkContext.prototype.AngleLeft = function () { return this.getToken(ReStructuredTextParser.AngleLeft, 0); };
    HyperlinkContext.prototype.url = function () {
        return this.getRuleContext(0, UrlContext);
    };
    HyperlinkContext.prototype.AngleRight = function () { return this.getToken(ReStructuredTextParser.AngleRight, 0); };
    HyperlinkContext.prototype.UnderScore = function () { return this.getToken(ReStructuredTextParser.UnderScore, 0); };
    HyperlinkContext.prototype.hyperlinkAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HyperlinkAtomContext);
        }
        else {
            return this.getRuleContext(i, HyperlinkAtomContext);
        }
    };
    Object.defineProperty(HyperlinkContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_hyperlink; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HyperlinkContext.prototype.enterRule = function (listener) {
        if (listener.enterHyperlink) {
            listener.enterHyperlink(this);
        }
    };
    // @Override
    HyperlinkContext.prototype.exitRule = function (listener) {
        if (listener.exitHyperlink) {
            listener.exitHyperlink(this);
        }
    };
    // @Override
    HyperlinkContext.prototype.accept = function (visitor) {
        if (visitor.visitHyperlink) {
            return visitor.visitHyperlink(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HyperlinkContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HyperlinkContext = HyperlinkContext;
var HyperlinkDocContext = /** @class */ (function (_super) {
    __extends(HyperlinkDocContext, _super);
    function HyperlinkDocContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HyperlinkDocContext.prototype.BackTick = function (i) {
        if (i === undefined) {
            return this.getTokens(ReStructuredTextParser.BackTick);
        }
        else {
            return this.getToken(ReStructuredTextParser.BackTick, i);
        }
    };
    HyperlinkDocContext.prototype.Space = function () { return this.tryGetToken(ReStructuredTextParser.Space, 0); };
    HyperlinkDocContext.prototype.AngleLeft = function () { return this.tryGetToken(ReStructuredTextParser.AngleLeft, 0); };
    HyperlinkDocContext.prototype.url = function () {
        return this.getRuleContext(0, UrlContext);
    };
    HyperlinkDocContext.prototype.AngleRight = function () { return this.tryGetToken(ReStructuredTextParser.AngleRight, 0); };
    HyperlinkDocContext.prototype.hyperlinkAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HyperlinkAtomContext);
        }
        else {
            return this.getRuleContext(i, HyperlinkAtomContext);
        }
    };
    Object.defineProperty(HyperlinkDocContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_hyperlinkDoc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HyperlinkDocContext.prototype.enterRule = function (listener) {
        if (listener.enterHyperlinkDoc) {
            listener.enterHyperlinkDoc(this);
        }
    };
    // @Override
    HyperlinkDocContext.prototype.exitRule = function (listener) {
        if (listener.exitHyperlinkDoc) {
            listener.exitHyperlinkDoc(this);
        }
    };
    // @Override
    HyperlinkDocContext.prototype.accept = function (visitor) {
        if (visitor.visitHyperlinkDoc) {
            return visitor.visitHyperlinkDoc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HyperlinkDocContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HyperlinkDocContext = HyperlinkDocContext;
var UrlContext = /** @class */ (function (_super) {
    __extends(UrlContext, _super);
    function UrlContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UrlContext.prototype.urlAtom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UrlAtomContext);
        }
        else {
            return this.getRuleContext(i, UrlAtomContext);
        }
    };
    Object.defineProperty(UrlContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_url; },
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
var UrlAtomContext = /** @class */ (function (_super) {
    __extends(UrlAtomContext, _super);
    function UrlAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UrlAtomContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    UrlAtomContext.prototype.BackTick = function () { return this.tryGetToken(ReStructuredTextParser.BackTick, 0); };
    Object.defineProperty(UrlAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_urlAtom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UrlAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterUrlAtom) {
            listener.enterUrlAtom(this);
        }
    };
    // @Override
    UrlAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitUrlAtom) {
            listener.exitUrlAtom(this);
        }
    };
    // @Override
    UrlAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitUrlAtom) {
            return visitor.visitUrlAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UrlAtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UrlAtomContext = UrlAtomContext;
var HyperlinkAtomContext = /** @class */ (function (_super) {
    __extends(HyperlinkAtomContext, _super);
    function HyperlinkAtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HyperlinkAtomContext.prototype.LineBreak = function () { return this.tryGetToken(ReStructuredTextParser.LineBreak, 0); };
    HyperlinkAtomContext.prototype.AngleLeft = function () { return this.tryGetToken(ReStructuredTextParser.AngleLeft, 0); };
    HyperlinkAtomContext.prototype.AngleRight = function () { return this.tryGetToken(ReStructuredTextParser.AngleRight, 0); };
    HyperlinkAtomContext.prototype.BackTick = function () { return this.tryGetToken(ReStructuredTextParser.BackTick, 0); };
    HyperlinkAtomContext.prototype.Star = function () { return this.tryGetToken(ReStructuredTextParser.Star, 0); };
    Object.defineProperty(HyperlinkAtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_hyperlinkAtom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HyperlinkAtomContext.prototype.enterRule = function (listener) {
        if (listener.enterHyperlinkAtom) {
            listener.enterHyperlinkAtom(this);
        }
    };
    // @Override
    HyperlinkAtomContext.prototype.exitRule = function (listener) {
        if (listener.exitHyperlinkAtom) {
            listener.exitHyperlinkAtom(this);
        }
    };
    // @Override
    HyperlinkAtomContext.prototype.accept = function (visitor) {
        if (visitor.visitHyperlinkAtom) {
            return visitor.visitHyperlinkAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HyperlinkAtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HyperlinkAtomContext = HyperlinkAtomContext;
var SeparatorContext = /** @class */ (function (_super) {
    __extends(SeparatorContext, _super);
    function SeparatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SeparatorContext.prototype.Minus = function () { return this.tryGetToken(ReStructuredTextParser.Minus, 0); };
    SeparatorContext.prototype.Equal = function () { return this.tryGetToken(ReStructuredTextParser.Equal, 0); };
    SeparatorContext.prototype.Plus = function () { return this.tryGetToken(ReStructuredTextParser.Plus, 0); };
    SeparatorContext.prototype.Hat = function () { return this.tryGetToken(ReStructuredTextParser.Hat, 0); };
    Object.defineProperty(SeparatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ReStructuredTextParser.RULE_separator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SeparatorContext.prototype.enterRule = function (listener) {
        if (listener.enterSeparator) {
            listener.enterSeparator(this);
        }
    };
    // @Override
    SeparatorContext.prototype.exitRule = function (listener) {
        if (listener.exitSeparator) {
            listener.exitSeparator(this);
        }
    };
    // @Override
    SeparatorContext.prototype.accept = function (visitor) {
        if (visitor.visitSeparator) {
            return visitor.visitSeparator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SeparatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SeparatorContext = SeparatorContext;
