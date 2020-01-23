"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/creole/creole.g4 by ANTLR 4.7.3-SNAPSHOT
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
var creoleParser = /** @class */ (function (_super) {
    __extends(creoleParser, _super);
    function creoleParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(creoleParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(creoleParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return creoleParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "creole.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleParser.prototype, "ruleNames", {
        // @Override
        get: function () { return creoleParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(creoleParser.prototype, "serializedATN", {
        // @Override
        get: function () { return creoleParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    creoleParser.prototype.document = function () {
        var _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, creoleParser.RULE_document);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.CR) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0)) {
                    {
                        {
                            this.state = 29;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0)) {
                                {
                                    this.state = 28;
                                    this.line();
                                }
                            }
                            this.state = 31;
                            this.match(creoleParser.CR);
                        }
                    }
                    this.state = 36;
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
    creoleParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, creoleParser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 37;
                            this.markup();
                        }
                    }
                    this.state = 40;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
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
    creoleParser.prototype.markup = function () {
        var _localctx = new MarkupContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, creoleParser.RULE_markup);
        try {
            this.state = 53;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 42;
                        this.bold();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 43;
                        this.italics();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 44;
                        this.href();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 45;
                        this.title();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 46;
                        this.hline();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 47;
                        this.text();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 48;
                        this.listitem();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 49;
                        this.image();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 50;
                        this.tablerow();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 51;
                        this.tableheader();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 52;
                        this.nowiki();
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
    creoleParser.prototype.text = function () {
        var _localctx = new TextContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, creoleParser.RULE_text);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 55;
                                    _la = this._input.LA(1);
                                    if (!(_la === creoleParser.TEXT || _la === creoleParser.RSLASH)) {
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
                    this.state = 58;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 64;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 60;
                                this.match(creoleParser.T__0);
                                this.state = 61;
                                this.text();
                            }
                        }
                    }
                    this.state = 66;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
    creoleParser.prototype.bold = function () {
        var _localctx = new BoldContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, creoleParser.RULE_bold);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 67;
                this.match(creoleParser.T__1);
                this.state = 69;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 68;
                                    this.markup();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 71;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 74;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 73;
                            this.match(creoleParser.T__1);
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
    creoleParser.prototype.italics = function () {
        var _localctx = new ItalicsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, creoleParser.RULE_italics);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.match(creoleParser.RSLASH);
                this.state = 77;
                this.match(creoleParser.RSLASH);
                this.state = 79;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 78;
                                    this.markup();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 81;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 83;
                this.match(creoleParser.RSLASH);
                this.state = 84;
                this.match(creoleParser.RSLASH);
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
    creoleParser.prototype.href = function () {
        var _localctx = new HrefContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, creoleParser.RULE_href);
        var _la;
        try {
            this.state = 108;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case creoleParser.LBRACKET:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 86;
                        this.match(creoleParser.LBRACKET);
                        this.state = 87;
                        this.text();
                        this.state = 94;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === creoleParser.T__2) {
                            {
                                this.state = 88;
                                this.match(creoleParser.T__2);
                                this.state = 90;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 89;
                                            this.markup();
                                        }
                                    }
                                    this.state = 92;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
                            }
                        }
                        this.state = 96;
                        this.match(creoleParser.RBRACKET);
                    }
                    break;
                case creoleParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 98;
                        this.match(creoleParser.LBRACE);
                        this.state = 99;
                        this.text();
                        this.state = 100;
                        this.match(creoleParser.T__2);
                        this.state = 102;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 101;
                                    this.markup();
                                }
                            }
                            this.state = 104;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
                        this.state = 106;
                        this.match(creoleParser.RBRACE);
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
    creoleParser.prototype.image = function () {
        var _localctx = new ImageContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, creoleParser.RULE_image);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this.match(creoleParser.LBRACE);
                this.state = 111;
                this.text();
                this.state = 112;
                this.match(creoleParser.RBRACE);
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
    creoleParser.prototype.hline = function () {
        var _localctx = new HlineContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, creoleParser.RULE_hline);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 114;
                this.match(creoleParser.T__3);
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
    creoleParser.prototype.listitem = function () {
        var _localctx = new ListitemContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, creoleParser.RULE_listitem);
        try {
            var _alt = void 0;
            this.state = 128;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case creoleParser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 117;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 116;
                                                this.match(creoleParser.T__4);
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 119;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 121;
                            this.markup();
                        }
                    }
                    break;
                case creoleParser.HASH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 123;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 122;
                                                this.match(creoleParser.HASH);
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 125;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 127;
                            this.markup();
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
    creoleParser.prototype.tableheader = function () {
        var _localctx = new TableheaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, creoleParser.RULE_tableheader);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 130;
                            this.match(creoleParser.T__5);
                            this.state = 132;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 131;
                                                this.markup();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 134;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        }
                    }
                    this.state = 138;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === creoleParser.T__5);
                this.state = 140;
                this.match(creoleParser.T__2);
                this.state = 144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === creoleParser.WS) {
                    {
                        {
                            this.state = 141;
                            this.match(creoleParser.WS);
                        }
                    }
                    this.state = 146;
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
    creoleParser.prototype.tablerow = function () {
        var _localctx = new TablerowContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, creoleParser.RULE_tablerow);
        var _la;
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
                                {
                                    this.state = 147;
                                    this.match(creoleParser.T__2);
                                    this.state = 149;
                                    this._errHandler.sync(this);
                                    _alt = 1;
                                    do {
                                        switch (_alt) {
                                            case 1:
                                                {
                                                    {
                                                        this.state = 148;
                                                        this.markup();
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 151;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 155;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 157;
                this.match(creoleParser.T__2);
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === creoleParser.WS) {
                    {
                        {
                            this.state = 158;
                            this.match(creoleParser.WS);
                        }
                    }
                    this.state = 163;
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
    creoleParser.prototype.title = function () {
        var _localctx = new TitleContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, creoleParser.RULE_title);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 164;
                                    this.match(creoleParser.T__6);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 167;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 169;
                this.markup();
                this.state = 173;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 170;
                                this.match(creoleParser.T__6);
                            }
                        }
                    }
                    this.state = 175;
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
    creoleParser.prototype.nowiki = function () {
        var _localctx = new NowikiContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, creoleParser.RULE_nowiki);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 176;
                this.match(creoleParser.NOWIKI);
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
    Object.defineProperty(creoleParser, "_ATN", {
        get: function () {
            if (!creoleParser.__ATN) {
                creoleParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(creoleParser._serializedATN));
            }
            return creoleParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    creoleParser.T__0 = 1;
    creoleParser.T__1 = 2;
    creoleParser.T__2 = 3;
    creoleParser.T__3 = 4;
    creoleParser.T__4 = 5;
    creoleParser.T__5 = 6;
    creoleParser.T__6 = 7;
    creoleParser.HASH = 8;
    creoleParser.LBRACKET = 9;
    creoleParser.RBRACKET = 10;
    creoleParser.LBRACE = 11;
    creoleParser.RBRACE = 12;
    creoleParser.TEXT = 13;
    creoleParser.WS = 14;
    creoleParser.CR = 15;
    creoleParser.NOWIKI = 16;
    creoleParser.RSLASH = 17;
    creoleParser.RULE_document = 0;
    creoleParser.RULE_line = 1;
    creoleParser.RULE_markup = 2;
    creoleParser.RULE_text = 3;
    creoleParser.RULE_bold = 4;
    creoleParser.RULE_italics = 5;
    creoleParser.RULE_href = 6;
    creoleParser.RULE_image = 7;
    creoleParser.RULE_hline = 8;
    creoleParser.RULE_listitem = 9;
    creoleParser.RULE_tableheader = 10;
    creoleParser.RULE_tablerow = 11;
    creoleParser.RULE_title = 12;
    creoleParser.RULE_nowiki = 13;
    // tslint:disable:no-trailing-whitespace
    creoleParser.ruleNames = [
        "document", "line", "markup", "text", "bold", "italics", "href", "image",
        "hline", "listitem", "tableheader", "tablerow", "title", "nowiki",
    ];
    creoleParser._LITERAL_NAMES = [
        undefined, "'\\''", "'**'", "'|'", "'----'", "'*'", "'|='", "'='", "'#'",
        "'[['", "']]'", "'{{'", "'}}'", undefined, undefined, undefined, undefined,
        "'/'",
    ];
    creoleParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "HASH", "LBRACKET", "RBRACKET", "LBRACE", "RBRACE", "TEXT",
        "WS", "CR", "NOWIKI", "RSLASH",
    ];
    creoleParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(creoleParser._LITERAL_NAMES, creoleParser._SYMBOLIC_NAMES, []);
    creoleParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13\xB5\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x05\x02 \n\x02\x03\x02\x07\x02#\n\x02" +
        "\f\x02\x0E\x02&\v\x02\x03\x03\x06\x03)\n\x03\r\x03\x0E\x03*\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x05\x048\n\x04\x03\x05\x06\x05;\n\x05\r\x05\x0E\x05<\x03\x05\x03" +
        "\x05\x07\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03\x06\x03\x06\x06\x06H\n\x06" +
        "\r\x06\x0E\x06I\x03\x06\x05\x06M\n\x06\x03\x07\x03\x07\x03\x07\x06\x07" +
        "R\n\x07\r\x07\x0E\x07S\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b" +
        "\x06\b]\n\b\r\b\x0E\b^\x05\ba\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
        "\x06\bi\n\b\r\b\x0E\bj\x03\b\x03\b\x05\bo\n\b\x03\t\x03\t\x03\t\x03\t" +
        "\x03\n\x03\n\x03\v\x06\vx\n\v\r\v\x0E\vy\x03\v\x03\v\x06\v~\n\v\r\v\x0E" +
        "\v\x7F\x03\v\x05\v\x83\n\v\x03\f\x03\f\x06\f\x87\n\f\r\f\x0E\f\x88\x06" +
        "\f\x8B\n\f\r\f\x0E\f\x8C\x03\f\x03\f\x07\f\x91\n\f\f\f\x0E\f\x94\v\f\x03" +
        "\r\x03\r\x06\r\x98\n\r\r\r\x0E\r\x99\x06\r\x9C\n\r\r\r\x0E\r\x9D\x03\r" +
        "\x03\r\x07\r\xA2\n\r\f\r\x0E\r\xA5\v\r\x03\x0E\x06\x0E\xA8\n\x0E\r\x0E" +
        "\x0E\x0E\xA9\x03\x0E\x03\x0E\x07\x0E\xAE\n\x0E\f\x0E\x0E\x0E\xB1\v\x0E" +
        "\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02\b\x02" +
        "\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
        "\x02\x02\x03\x04\x02\x0F\x0F\x13\x13\x02\xC7\x02$\x03\x02\x02\x02\x04" +
        "(\x03\x02\x02\x02\x067\x03\x02\x02\x02\b:\x03\x02\x02\x02\nE\x03\x02\x02" +
        "\x02\fN\x03\x02\x02\x02\x0En\x03\x02\x02\x02\x10p\x03\x02\x02\x02\x12" +
        "t\x03\x02\x02\x02\x14\x82\x03\x02\x02\x02\x16\x8A\x03\x02\x02\x02\x18" +
        "\x9B\x03\x02\x02\x02\x1A\xA7\x03\x02\x02\x02\x1C\xB2\x03\x02\x02\x02\x1E" +
        " \x05\x04\x03\x02\x1F\x1E\x03\x02\x02\x02\x1F \x03\x02\x02\x02 !\x03\x02" +
        "\x02\x02!#\x07\x11\x02\x02\"\x1F\x03\x02\x02\x02#&\x03\x02\x02\x02$\"" +
        "\x03\x02\x02\x02$%\x03\x02\x02\x02%\x03\x03\x02\x02\x02&$\x03\x02\x02" +
        "\x02\')\x05\x06\x04\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02" +
        "\x02\x02*+\x03\x02\x02\x02+\x05\x03\x02\x02\x02,8\x05\n\x06\x02-8\x05" +
        "\f\x07\x02.8\x05\x0E\b\x02/8\x05\x1A\x0E\x0208\x05\x12\n\x0218\x05\b\x05" +
        "\x0228\x05\x14\v\x0238\x05\x10\t\x0248\x05\x18\r\x0258\x05\x16\f\x026" +
        "8\x05\x1C\x0F\x027,\x03\x02\x02\x027-\x03\x02\x02\x027.\x03\x02\x02\x02" +
        "7/\x03\x02\x02\x0270\x03\x02\x02\x0271\x03\x02\x02\x0272\x03\x02\x02\x02" +
        "73\x03\x02\x02\x0274\x03\x02\x02\x0275\x03\x02\x02\x0276\x03\x02\x02\x02" +
        "8\x07\x03\x02\x02\x029;\t\x02\x02\x02:9\x03\x02\x02\x02;<\x03\x02\x02" +
        "\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=B\x03\x02\x02\x02>?\x07\x03\x02" +
        "\x02?A\x05\b\x05\x02@>\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02" +
        "\x02BC\x03\x02\x02\x02C\t\x03\x02\x02\x02DB\x03\x02\x02\x02EG\x07\x04" +
        "\x02\x02FH\x05\x06\x04\x02GF\x03\x02\x02\x02HI\x03\x02\x02\x02IG\x03\x02" +
        "\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KM\x07\x04\x02\x02LK\x03\x02" +
        "\x02\x02LM\x03\x02\x02\x02M\v\x03\x02\x02\x02NO\x07\x13\x02\x02OQ\x07" +
        "\x13\x02\x02PR\x05\x06\x04\x02QP\x03\x02\x02\x02RS\x03\x02\x02\x02SQ\x03" +
        "\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x07\x13\x02\x02VW\x07" +
        "\x13\x02\x02W\r\x03\x02\x02\x02XY\x07\v\x02\x02Y`\x05\b\x05\x02Z\\\x07" +
        "\x05\x02\x02[]\x05\x06\x04\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\" +
        "\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`Z\x03\x02\x02\x02" +
        "`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x07\f\x02\x02co\x03\x02\x02\x02" +
        "de\x07\r\x02\x02ef\x05\b\x05\x02fh\x07\x05\x02\x02gi\x05\x06\x04\x02h" +
        "g\x03\x02\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02" +
        "kl\x03\x02\x02\x02lm\x07\x0E\x02\x02mo\x03\x02\x02\x02nX\x03\x02\x02\x02" +
        "nd\x03\x02\x02\x02o\x0F\x03\x02\x02\x02pq\x07\r\x02\x02qr\x05\b\x05\x02" +
        "rs\x07\x0E\x02\x02s\x11\x03\x02\x02\x02tu\x07\x06\x02\x02u\x13\x03\x02" +
        "\x02\x02vx\x07\x07\x02\x02wv\x03\x02\x02\x02xy\x03\x02\x02\x02yw\x03\x02" +
        "\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{\x83\x05\x06\x04\x02|~\x07" +
        "\n\x02\x02}|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F}\x03\x02\x02\x02" +
        "\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83\x05\x06\x04\x02" +
        "\x82w\x03\x02\x02\x02\x82}\x03\x02\x02\x02\x83\x15\x03\x02\x02\x02\x84" +
        "\x86\x07\b\x02\x02\x85\x87\x05\x06\x04\x02\x86\x85\x03\x02\x02\x02\x87" +
        "\x88\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89" +
        "\x8B\x03\x02\x02\x02\x8A\x84\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C" +
        "\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E" +
        "\x92\x07\x05\x02\x02\x8F\x91\x07\x10\x02\x02\x90\x8F\x03\x02\x02\x02\x91" +
        "\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93" +
        "\x17\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x97\x07\x05\x02\x02\x96" +
        "\x98\x05\x06\x04\x02\x97\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
        "\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B" +
        "\x95\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D" +
        "\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA3\x07\x05\x02\x02\xA0" +
        "\xA2\x07\x10\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3" +
        "\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\x19\x03\x02\x02\x02\xA5" +
        "\xA3\x03\x02\x02\x02\xA6\xA8\x07\t\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8" +
        "\xA9\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA" +
        "\xAB\x03\x02\x02\x02\xAB\xAF\x05\x06\x04\x02\xAC\xAE\x07\t\x02\x02\xAD" +
        "\xAC\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF" +
        "\xB0\x03\x02\x02\x02\xB0\x1B\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2" +
        "\xB3\x07\x12\x02\x02\xB3\x1D\x03\x02\x02\x02\x1A\x1F$*7<BILS^`jny\x7F" +
        "\x82\x88\x8C\x92\x99\x9D\xA3\xA9\xAF";
    return creoleParser;
}(Parser_1.Parser));
exports.creoleParser = creoleParser;
var DocumentContext = /** @class */ (function (_super) {
    __extends(DocumentContext, _super);
    function DocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentContext.prototype.CR = function (i) {
        if (i === undefined) {
            return this.getTokens(creoleParser.CR);
        }
        else {
            return this.getToken(creoleParser.CR, i);
        }
    };
    DocumentContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(DocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_document; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DocumentContext.prototype.enterRule = function (listener) {
        if (listener.enterDocument) {
            listener.enterDocument(this);
        }
    };
    // @Override
    DocumentContext.prototype.exitRule = function (listener) {
        if (listener.exitDocument) {
            listener.exitDocument(this);
        }
    };
    // @Override
    DocumentContext.prototype.accept = function (visitor) {
        if (visitor.visitDocument) {
            return visitor.visitDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DocumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DocumentContext = DocumentContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.markup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MarkupContext);
        }
        else {
            return this.getRuleContext(i, MarkupContext);
        }
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_line; },
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
var MarkupContext = /** @class */ (function (_super) {
    __extends(MarkupContext, _super);
    function MarkupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MarkupContext.prototype.bold = function () {
        return this.tryGetRuleContext(0, BoldContext);
    };
    MarkupContext.prototype.italics = function () {
        return this.tryGetRuleContext(0, ItalicsContext);
    };
    MarkupContext.prototype.href = function () {
        return this.tryGetRuleContext(0, HrefContext);
    };
    MarkupContext.prototype.title = function () {
        return this.tryGetRuleContext(0, TitleContext);
    };
    MarkupContext.prototype.hline = function () {
        return this.tryGetRuleContext(0, HlineContext);
    };
    MarkupContext.prototype.text = function () {
        return this.tryGetRuleContext(0, TextContext);
    };
    MarkupContext.prototype.listitem = function () {
        return this.tryGetRuleContext(0, ListitemContext);
    };
    MarkupContext.prototype.image = function () {
        return this.tryGetRuleContext(0, ImageContext);
    };
    MarkupContext.prototype.tablerow = function () {
        return this.tryGetRuleContext(0, TablerowContext);
    };
    MarkupContext.prototype.tableheader = function () {
        return this.tryGetRuleContext(0, TableheaderContext);
    };
    MarkupContext.prototype.nowiki = function () {
        return this.tryGetRuleContext(0, NowikiContext);
    };
    Object.defineProperty(MarkupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_markup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MarkupContext.prototype.enterRule = function (listener) {
        if (listener.enterMarkup) {
            listener.enterMarkup(this);
        }
    };
    // @Override
    MarkupContext.prototype.exitRule = function (listener) {
        if (listener.exitMarkup) {
            listener.exitMarkup(this);
        }
    };
    // @Override
    MarkupContext.prototype.accept = function (visitor) {
        if (visitor.visitMarkup) {
            return visitor.visitMarkup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MarkupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MarkupContext = MarkupContext;
var TextContext = /** @class */ (function (_super) {
    __extends(TextContext, _super);
    function TextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextContext.prototype.text = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TextContext);
        }
        else {
            return this.getRuleContext(i, TextContext);
        }
    };
    TextContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(creoleParser.TEXT);
        }
        else {
            return this.getToken(creoleParser.TEXT, i);
        }
    };
    TextContext.prototype.RSLASH = function (i) {
        if (i === undefined) {
            return this.getTokens(creoleParser.RSLASH);
        }
        else {
            return this.getToken(creoleParser.RSLASH, i);
        }
    };
    Object.defineProperty(TextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_text; },
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
var BoldContext = /** @class */ (function (_super) {
    __extends(BoldContext, _super);
    function BoldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoldContext.prototype.markup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MarkupContext);
        }
        else {
            return this.getRuleContext(i, MarkupContext);
        }
    };
    Object.defineProperty(BoldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_bold; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoldContext.prototype.enterRule = function (listener) {
        if (listener.enterBold) {
            listener.enterBold(this);
        }
    };
    // @Override
    BoldContext.prototype.exitRule = function (listener) {
        if (listener.exitBold) {
            listener.exitBold(this);
        }
    };
    // @Override
    BoldContext.prototype.accept = function (visitor) {
        if (visitor.visitBold) {
            return visitor.visitBold(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoldContext = BoldContext;
var ItalicsContext = /** @class */ (function (_super) {
    __extends(ItalicsContext, _super);
    function ItalicsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ItalicsContext.prototype.RSLASH = function (i) {
        if (i === undefined) {
            return this.getTokens(creoleParser.RSLASH);
        }
        else {
            return this.getToken(creoleParser.RSLASH, i);
        }
    };
    ItalicsContext.prototype.markup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MarkupContext);
        }
        else {
            return this.getRuleContext(i, MarkupContext);
        }
    };
    Object.defineProperty(ItalicsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_italics; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ItalicsContext.prototype.enterRule = function (listener) {
        if (listener.enterItalics) {
            listener.enterItalics(this);
        }
    };
    // @Override
    ItalicsContext.prototype.exitRule = function (listener) {
        if (listener.exitItalics) {
            listener.exitItalics(this);
        }
    };
    // @Override
    ItalicsContext.prototype.accept = function (visitor) {
        if (visitor.visitItalics) {
            return visitor.visitItalics(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ItalicsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ItalicsContext = ItalicsContext;
var HrefContext = /** @class */ (function (_super) {
    __extends(HrefContext, _super);
    function HrefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HrefContext.prototype.LBRACKET = function () { return this.tryGetToken(creoleParser.LBRACKET, 0); };
    HrefContext.prototype.text = function () {
        return this.getRuleContext(0, TextContext);
    };
    HrefContext.prototype.RBRACKET = function () { return this.tryGetToken(creoleParser.RBRACKET, 0); };
    HrefContext.prototype.markup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MarkupContext);
        }
        else {
            return this.getRuleContext(i, MarkupContext);
        }
    };
    HrefContext.prototype.LBRACE = function () { return this.tryGetToken(creoleParser.LBRACE, 0); };
    HrefContext.prototype.RBRACE = function () { return this.tryGetToken(creoleParser.RBRACE, 0); };
    Object.defineProperty(HrefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_href; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HrefContext.prototype.enterRule = function (listener) {
        if (listener.enterHref) {
            listener.enterHref(this);
        }
    };
    // @Override
    HrefContext.prototype.exitRule = function (listener) {
        if (listener.exitHref) {
            listener.exitHref(this);
        }
    };
    // @Override
    HrefContext.prototype.accept = function (visitor) {
        if (visitor.visitHref) {
            return visitor.visitHref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HrefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HrefContext = HrefContext;
var ImageContext = /** @class */ (function (_super) {
    __extends(ImageContext, _super);
    function ImageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImageContext.prototype.LBRACE = function () { return this.getToken(creoleParser.LBRACE, 0); };
    ImageContext.prototype.text = function () {
        return this.getRuleContext(0, TextContext);
    };
    ImageContext.prototype.RBRACE = function () { return this.getToken(creoleParser.RBRACE, 0); };
    Object.defineProperty(ImageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_image; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImageContext.prototype.enterRule = function (listener) {
        if (listener.enterImage) {
            listener.enterImage(this);
        }
    };
    // @Override
    ImageContext.prototype.exitRule = function (listener) {
        if (listener.exitImage) {
            listener.exitImage(this);
        }
    };
    // @Override
    ImageContext.prototype.accept = function (visitor) {
        if (visitor.visitImage) {
            return visitor.visitImage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImageContext = ImageContext;
var HlineContext = /** @class */ (function (_super) {
    __extends(HlineContext, _super);
    function HlineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(HlineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_hline; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HlineContext.prototype.enterRule = function (listener) {
        if (listener.enterHline) {
            listener.enterHline(this);
        }
    };
    // @Override
    HlineContext.prototype.exitRule = function (listener) {
        if (listener.exitHline) {
            listener.exitHline(this);
        }
    };
    // @Override
    HlineContext.prototype.accept = function (visitor) {
        if (visitor.visitHline) {
            return visitor.visitHline(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HlineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HlineContext = HlineContext;
var ListitemContext = /** @class */ (function (_super) {
    __extends(ListitemContext, _super);
    function ListitemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListitemContext.prototype.markup = function () {
        return this.tryGetRuleContext(0, MarkupContext);
    };
    ListitemContext.prototype.HASH = function (i) {
        if (i === undefined) {
            return this.getTokens(creoleParser.HASH);
        }
        else {
            return this.getToken(creoleParser.HASH, i);
        }
    };
    Object.defineProperty(ListitemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_listitem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListitemContext.prototype.enterRule = function (listener) {
        if (listener.enterListitem) {
            listener.enterListitem(this);
        }
    };
    // @Override
    ListitemContext.prototype.exitRule = function (listener) {
        if (listener.exitListitem) {
            listener.exitListitem(this);
        }
    };
    // @Override
    ListitemContext.prototype.accept = function (visitor) {
        if (visitor.visitListitem) {
            return visitor.visitListitem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListitemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListitemContext = ListitemContext;
var TableheaderContext = /** @class */ (function (_super) {
    __extends(TableheaderContext, _super);
    function TableheaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TableheaderContext.prototype.WS = function (i) {
        if (i === undefined) {
            return this.getTokens(creoleParser.WS);
        }
        else {
            return this.getToken(creoleParser.WS, i);
        }
    };
    TableheaderContext.prototype.markup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MarkupContext);
        }
        else {
            return this.getRuleContext(i, MarkupContext);
        }
    };
    Object.defineProperty(TableheaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_tableheader; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TableheaderContext.prototype.enterRule = function (listener) {
        if (listener.enterTableheader) {
            listener.enterTableheader(this);
        }
    };
    // @Override
    TableheaderContext.prototype.exitRule = function (listener) {
        if (listener.exitTableheader) {
            listener.exitTableheader(this);
        }
    };
    // @Override
    TableheaderContext.prototype.accept = function (visitor) {
        if (visitor.visitTableheader) {
            return visitor.visitTableheader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TableheaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TableheaderContext = TableheaderContext;
var TablerowContext = /** @class */ (function (_super) {
    __extends(TablerowContext, _super);
    function TablerowContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TablerowContext.prototype.WS = function (i) {
        if (i === undefined) {
            return this.getTokens(creoleParser.WS);
        }
        else {
            return this.getToken(creoleParser.WS, i);
        }
    };
    TablerowContext.prototype.markup = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MarkupContext);
        }
        else {
            return this.getRuleContext(i, MarkupContext);
        }
    };
    Object.defineProperty(TablerowContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_tablerow; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TablerowContext.prototype.enterRule = function (listener) {
        if (listener.enterTablerow) {
            listener.enterTablerow(this);
        }
    };
    // @Override
    TablerowContext.prototype.exitRule = function (listener) {
        if (listener.exitTablerow) {
            listener.exitTablerow(this);
        }
    };
    // @Override
    TablerowContext.prototype.accept = function (visitor) {
        if (visitor.visitTablerow) {
            return visitor.visitTablerow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TablerowContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TablerowContext = TablerowContext;
var TitleContext = /** @class */ (function (_super) {
    __extends(TitleContext, _super);
    function TitleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TitleContext.prototype.markup = function () {
        return this.getRuleContext(0, MarkupContext);
    };
    Object.defineProperty(TitleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_title; },
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
var NowikiContext = /** @class */ (function (_super) {
    __extends(NowikiContext, _super);
    function NowikiContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NowikiContext.prototype.NOWIKI = function () { return this.getToken(creoleParser.NOWIKI, 0); };
    Object.defineProperty(NowikiContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return creoleParser.RULE_nowiki; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NowikiContext.prototype.enterRule = function (listener) {
        if (listener.enterNowiki) {
            listener.enterNowiki(this);
        }
    };
    // @Override
    NowikiContext.prototype.exitRule = function (listener) {
        if (listener.exitNowiki) {
            listener.exitNowiki(this);
        }
    };
    // @Override
    NowikiContext.prototype.accept = function (visitor) {
        if (visitor.visitNowiki) {
            return visitor.visitNowiki(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NowikiContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NowikiContext = NowikiContext;
