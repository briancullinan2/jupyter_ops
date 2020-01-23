"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/css3/css3.g4 by ANTLR 4.7.3-SNAPSHOT
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
var css3Parser = /** @class */ (function (_super) {
    __extends(css3Parser, _super);
    function css3Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(css3Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(css3Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return css3Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(css3Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "css3.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(css3Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return css3Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(css3Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return css3Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    css3Parser.prototype.stylesheet = function () {
        var _localctx = new StylesheetContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, css3Parser.RULE_stylesheet);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 158;
                this.ws();
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.Charset) {
                    {
                        {
                            this.state = 159;
                            this.charset();
                            this.state = 163;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0)) {
                                {
                                    {
                                        this.state = 160;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0))) {
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
                                this.state = 165;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 170;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.Import) {
                    {
                        {
                            this.state = 171;
                            this.imports();
                            this.state = 175;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0)) {
                                {
                                    {
                                        this.state = 172;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0))) {
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
                                this.state = 177;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 182;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.Namespace) {
                    {
                        {
                            this.state = 183;
                            this.namespace();
                            this.state = 187;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0)) {
                                {
                                    {
                                        this.state = 184;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0))) {
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
                                this.state = 189;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 204;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__6) | (1 << css3Parser.T__7) | (1 << css3Parser.T__8) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Page) | (1 << css3Parser.Media) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.PseudoNot - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.FontFace - 32)) | (1 << (css3Parser.Supports - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.Keyframes - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Viewport - 32)) | (1 << (css3Parser.CounterStyle - 32)) | (1 << (css3Parser.FontFeatureValues - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                    {
                        {
                            this.state = 195;
                            this.nestedStatement();
                            this.state = 199;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0)) {
                                {
                                    {
                                        this.state = 196;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.Comment) | (1 << css3Parser.Space) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc))) !== 0))) {
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
                                this.state = 201;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 206;
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
    css3Parser.prototype.charset = function () {
        var _localctx = new CharsetContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, css3Parser.RULE_charset);
        try {
            this.state = 219;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    _localctx = new GoodCharsetContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 207;
                        this.match(css3Parser.Charset);
                        this.state = 208;
                        this.ws();
                        this.state = 209;
                        this.match(css3Parser.String);
                        this.state = 210;
                        this.ws();
                        this.state = 211;
                        this.match(css3Parser.T__0);
                        this.state = 212;
                        this.ws();
                    }
                    break;
                case 2:
                    _localctx = new BadCharsetContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 214;
                        this.match(css3Parser.Charset);
                        this.state = 215;
                        this.ws();
                        this.state = 216;
                        this.match(css3Parser.String);
                        this.state = 217;
                        this.ws();
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
    css3Parser.prototype.imports = function () {
        var _localctx = new ImportsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, css3Parser.RULE_imports);
        var _la;
        try {
            this.state = 247;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    _localctx = new GoodImportContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 221;
                        this.match(css3Parser.Import);
                        this.state = 222;
                        this.ws();
                        this.state = 223;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Uri || _la === css3Parser.String)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 224;
                        this.ws();
                        this.state = 225;
                        this.mediaQueryList();
                        this.state = 226;
                        this.match(css3Parser.T__0);
                        this.state = 227;
                        this.ws();
                    }
                    break;
                case 2:
                    _localctx = new GoodImportContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 229;
                        this.match(css3Parser.Import);
                        this.state = 230;
                        this.ws();
                        this.state = 231;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Uri || _la === css3Parser.String)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 232;
                        this.ws();
                        this.state = 233;
                        this.match(css3Parser.T__0);
                        this.state = 234;
                        this.ws();
                    }
                    break;
                case 3:
                    _localctx = new BadImportContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 236;
                        this.match(css3Parser.Import);
                        this.state = 237;
                        this.ws();
                        this.state = 238;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Uri || _la === css3Parser.String)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 239;
                        this.ws();
                        this.state = 240;
                        this.mediaQueryList();
                    }
                    break;
                case 4:
                    _localctx = new BadImportContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 242;
                        this.match(css3Parser.Import);
                        this.state = 243;
                        this.ws();
                        this.state = 244;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Uri || _la === css3Parser.String)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 245;
                        this.ws();
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
    css3Parser.prototype.namespace = function () {
        var _localctx = new NamespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, css3Parser.RULE_namespace);
        var _la;
        try {
            this.state = 271;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    _localctx = new GoodNamespaceContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 249;
                        this.match(css3Parser.Namespace);
                        this.state = 250;
                        this.ws();
                        this.state = 254;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                            {
                                this.state = 251;
                                this.namespacePrefix();
                                this.state = 252;
                                this.ws();
                            }
                        }
                        this.state = 256;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Uri || _la === css3Parser.String)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 257;
                        this.ws();
                        this.state = 258;
                        this.match(css3Parser.T__0);
                        this.state = 259;
                        this.ws();
                    }
                    break;
                case 2:
                    _localctx = new BadNamespaceContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 261;
                        this.match(css3Parser.Namespace);
                        this.state = 262;
                        this.ws();
                        this.state = 266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                            {
                                this.state = 263;
                                this.namespacePrefix();
                                this.state = 264;
                                this.ws();
                            }
                        }
                        this.state = 268;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Uri || _la === css3Parser.String)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 269;
                        this.ws();
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
    css3Parser.prototype.namespacePrefix = function () {
        var _localctx = new NamespacePrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, css3Parser.RULE_namespacePrefix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 273;
                this.ident();
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
    css3Parser.prototype.media = function () {
        var _localctx = new MediaContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, css3Parser.RULE_media);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.match(css3Parser.Media);
                this.state = 276;
                this.ws();
                this.state = 277;
                this.mediaQueryList();
                this.state = 278;
                this.groupRuleBody();
                this.state = 279;
                this.ws();
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
    css3Parser.prototype.mediaQueryList = function () {
        var _localctx = new MediaQueryListContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, css3Parser.RULE_mediaQueryList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 281;
                            this.mediaQuery();
                            this.state = 288;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 282;
                                            this.match(css3Parser.Comma);
                                            this.state = 283;
                                            this.ws();
                                            this.state = 284;
                                            this.mediaQuery();
                                        }
                                    }
                                }
                                this.state = 290;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                            }
                        }
                        break;
                }
                this.state = 293;
                this.ws();
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
    css3Parser.prototype.mediaQuery = function () {
        var _localctx = new MediaQueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, css3Parser.RULE_mediaQuery);
        var _la;
        try {
            var _alt = void 0;
            this.state = 320;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 296;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                            case 1:
                                {
                                    this.state = 295;
                                    _la = this._input.LA(1);
                                    if (!(_la === css3Parser.MediaOnly || _la === css3Parser.Not)) {
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
                        }
                        this.state = 298;
                        this.ws();
                        this.state = 299;
                        this.mediaType();
                        this.state = 300;
                        this.ws();
                        this.state = 307;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 301;
                                        this.match(css3Parser.And);
                                        this.state = 302;
                                        this.ws();
                                        this.state = 303;
                                        this.mediaExpression();
                                    }
                                }
                            }
                            this.state = 309;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 310;
                        this.mediaExpression();
                        this.state = 317;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 311;
                                        this.match(css3Parser.And);
                                        this.state = 312;
                                        this.ws();
                                        this.state = 313;
                                        this.mediaExpression();
                                    }
                                }
                            }
                            this.state = 319;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
    css3Parser.prototype.mediaType = function () {
        var _localctx = new MediaTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, css3Parser.RULE_mediaType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 322;
                this.ident();
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
    css3Parser.prototype.mediaExpression = function () {
        var _localctx = new MediaExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, css3Parser.RULE_mediaExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 324;
                this.match(css3Parser.T__1);
                this.state = 325;
                this.ws();
                this.state = 326;
                this.mediaFeature();
                this.state = 331;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.T__2) {
                    {
                        this.state = 327;
                        this.match(css3Parser.T__2);
                        this.state = 328;
                        this.ws();
                        this.state = 329;
                        this.expr();
                    }
                }
                this.state = 333;
                this.match(css3Parser.T__3);
                this.state = 334;
                this.ws();
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
    css3Parser.prototype.mediaFeature = function () {
        var _localctx = new MediaFeatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, css3Parser.RULE_mediaFeature);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this.ident();
                this.state = 337;
                this.ws();
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
    css3Parser.prototype.page = function () {
        var _localctx = new PageContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, css3Parser.RULE_page);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this.match(css3Parser.Page);
                this.state = 340;
                this.ws();
                this.state = 342;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.T__2) {
                    {
                        this.state = 341;
                        this.pseudoPage();
                    }
                }
                this.state = 344;
                this.match(css3Parser.T__4);
                this.state = 345;
                this.ws();
                this.state = 347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.T__6 || _la === css3Parser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                    {
                        this.state = 346;
                        this.declaration();
                    }
                }
                this.state = 356;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.T__0) {
                    {
                        {
                            this.state = 349;
                            this.match(css3Parser.T__0);
                            this.state = 350;
                            this.ws();
                            this.state = 352;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === css3Parser.T__6 || _la === css3Parser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                                {
                                    this.state = 351;
                                    this.declaration();
                                }
                            }
                        }
                    }
                    this.state = 358;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 359;
                this.match(css3Parser.T__5);
                this.state = 360;
                this.ws();
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
    css3Parser.prototype.pseudoPage = function () {
        var _localctx = new PseudoPageContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, css3Parser.RULE_pseudoPage);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this.match(css3Parser.T__2);
                this.state = 363;
                this.ident();
                this.state = 364;
                this.ws();
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
    css3Parser.prototype.selectorGroup = function () {
        var _localctx = new SelectorGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, css3Parser.RULE_selectorGroup);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                this.selector();
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.Comma) {
                    {
                        {
                            this.state = 367;
                            this.match(css3Parser.Comma);
                            this.state = 368;
                            this.ws();
                            this.state = 369;
                            this.selector();
                        }
                    }
                    this.state = 375;
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
    css3Parser.prototype.selector = function () {
        var _localctx = new SelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, css3Parser.RULE_selector);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                this.simpleSelectorSequence();
                this.state = 377;
                this.ws();
                this.state = 384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (css3Parser.Space - 17)) | (1 << (css3Parser.Plus - 17)) | (1 << (css3Parser.Greater - 17)) | (1 << (css3Parser.Tilde - 17)))) !== 0)) {
                    {
                        {
                            this.state = 378;
                            this.combinator();
                            this.state = 379;
                            this.simpleSelectorSequence();
                            this.state = 380;
                            this.ws();
                        }
                    }
                    this.state = 386;
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
    css3Parser.prototype.combinator = function () {
        var _localctx = new CombinatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, css3Parser.RULE_combinator);
        try {
            this.state = 395;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case css3Parser.Plus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 387;
                        this.match(css3Parser.Plus);
                        this.state = 388;
                        this.ws();
                    }
                    break;
                case css3Parser.Greater:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 389;
                        this.match(css3Parser.Greater);
                        this.state = 390;
                        this.ws();
                    }
                    break;
                case css3Parser.Tilde:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 391;
                        this.match(css3Parser.Tilde);
                        this.state = 392;
                        this.ws();
                    }
                    break;
                case css3Parser.Space:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 393;
                        this.match(css3Parser.Space);
                        this.state = 394;
                        this.ws();
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
    css3Parser.prototype.simpleSelectorSequence = function () {
        var _localctx = new SimpleSelectorSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, css3Parser.RULE_simpleSelectorSequence);
        try {
            var _alt = void 0;
            this.state = 420;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case css3Parser.T__6:
                case css3Parser.T__7:
                case css3Parser.MediaOnly:
                case css3Parser.Not:
                case css3Parser.And:
                case css3Parser.Or:
                case css3Parser.From:
                case css3Parser.To:
                case css3Parser.Ident:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 399;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                            case 1:
                                {
                                    this.state = 397;
                                    this.typeSelector();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 398;
                                    this.universal();
                                }
                                break;
                        }
                        this.state = 408;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 406;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case css3Parser.Hash:
                                            {
                                                this.state = 401;
                                                this.match(css3Parser.Hash);
                                            }
                                            break;
                                        case css3Parser.T__8:
                                            {
                                                this.state = 402;
                                                this.className();
                                            }
                                            break;
                                        case css3Parser.T__9:
                                            {
                                                this.state = 403;
                                                this.attrib();
                                            }
                                            break;
                                        case css3Parser.T__2:
                                            {
                                                this.state = 404;
                                                this.pseudo();
                                            }
                                            break;
                                        case css3Parser.PseudoNot:
                                            {
                                                this.state = 405;
                                                this.negation();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                            }
                            this.state = 410;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                        }
                    }
                    break;
                case css3Parser.T__2:
                case css3Parser.T__8:
                case css3Parser.T__9:
                case css3Parser.Hash:
                case css3Parser.PseudoNot:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 416;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 416;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case css3Parser.Hash:
                                                {
                                                    this.state = 411;
                                                    this.match(css3Parser.Hash);
                                                }
                                                break;
                                            case css3Parser.T__8:
                                                {
                                                    this.state = 412;
                                                    this.className();
                                                }
                                                break;
                                            case css3Parser.T__9:
                                                {
                                                    this.state = 413;
                                                    this.attrib();
                                                }
                                                break;
                                            case css3Parser.T__2:
                                                {
                                                    this.state = 414;
                                                    this.pseudo();
                                                }
                                                break;
                                            case css3Parser.PseudoNot:
                                                {
                                                    this.state = 415;
                                                    this.negation();
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
                            this.state = 418;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    css3Parser.prototype.typeSelector = function () {
        var _localctx = new TypeSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, css3Parser.RULE_typeSelector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 423;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                    case 1:
                        {
                            this.state = 422;
                            this.typeNamespacePrefix();
                        }
                        break;
                }
                this.state = 425;
                this.elementName();
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
    css3Parser.prototype.typeNamespacePrefix = function () {
        var _localctx = new TypeNamespacePrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, css3Parser.RULE_typeNamespacePrefix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 429;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case css3Parser.MediaOnly:
                    case css3Parser.Not:
                    case css3Parser.And:
                    case css3Parser.Or:
                    case css3Parser.From:
                    case css3Parser.To:
                    case css3Parser.Ident:
                        {
                            this.state = 427;
                            this.ident();
                        }
                        break;
                    case css3Parser.T__6:
                        {
                            this.state = 428;
                            this.match(css3Parser.T__6);
                        }
                        break;
                    case css3Parser.T__7:
                        break;
                    default:
                        break;
                }
                this.state = 431;
                this.match(css3Parser.T__7);
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
    css3Parser.prototype.elementName = function () {
        var _localctx = new ElementNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, css3Parser.RULE_elementName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 433;
                this.ident();
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
    css3Parser.prototype.universal = function () {
        var _localctx = new UniversalContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, css3Parser.RULE_universal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 435;
                            this.typeNamespacePrefix();
                        }
                        break;
                }
                this.state = 438;
                this.match(css3Parser.T__6);
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
    css3Parser.prototype.className = function () {
        var _localctx = new ClassNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, css3Parser.RULE_className);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 440;
                this.match(css3Parser.T__8);
                this.state = 441;
                this.ident();
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
    css3Parser.prototype.attrib = function () {
        var _localctx = new AttribContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, css3Parser.RULE_attrib);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 443;
                this.match(css3Parser.T__9);
                this.state = 444;
                this.ws();
                this.state = 446;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
                            this.state = 445;
                            this.typeNamespacePrefix();
                        }
                        break;
                }
                this.state = 448;
                this.ident();
                this.state = 449;
                this.ws();
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__10) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (css3Parser.PrefixMatch - 45)) | (1 << (css3Parser.SuffixMatch - 45)) | (1 << (css3Parser.SubstringMatch - 45)))) !== 0)) {
                    {
                        this.state = 450;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__10) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (css3Parser.PrefixMatch - 45)) | (1 << (css3Parser.SuffixMatch - 45)) | (1 << (css3Parser.SubstringMatch - 45)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 451;
                        this.ws();
                        this.state = 454;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case css3Parser.MediaOnly:
                            case css3Parser.Not:
                            case css3Parser.And:
                            case css3Parser.Or:
                            case css3Parser.From:
                            case css3Parser.To:
                            case css3Parser.Ident:
                                {
                                    this.state = 452;
                                    this.ident();
                                }
                                break;
                            case css3Parser.String:
                                {
                                    this.state = 453;
                                    this.match(css3Parser.String);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 456;
                        this.ws();
                    }
                }
                this.state = 460;
                this.match(css3Parser.T__11);
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
    css3Parser.prototype.pseudo = function () {
        var _localctx = new PseudoContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, css3Parser.RULE_pseudo);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 462;
                this.match(css3Parser.T__2);
                this.state = 464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.T__2) {
                    {
                        this.state = 463;
                        this.match(css3Parser.T__2);
                    }
                }
                this.state = 468;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case css3Parser.MediaOnly:
                    case css3Parser.Not:
                    case css3Parser.And:
                    case css3Parser.Or:
                    case css3Parser.From:
                    case css3Parser.To:
                    case css3Parser.Ident:
                        {
                            this.state = 466;
                            this.ident();
                        }
                        break;
                    case css3Parser.Function:
                        {
                            this.state = 467;
                            this.functionalPseudo();
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
    css3Parser.prototype.functionalPseudo = function () {
        var _localctx = new FunctionalPseudoContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, css3Parser.RULE_functionalPseudo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 470;
                this.match(css3Parser.Function);
                this.state = 471;
                this.ws();
                this.state = 472;
                this.expression();
                this.state = 473;
                this.match(css3Parser.T__3);
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
    css3Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, css3Parser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 485;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 482;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case css3Parser.Plus:
                                    {
                                        this.state = 475;
                                        this.match(css3Parser.Plus);
                                    }
                                    break;
                                case css3Parser.Minus:
                                    {
                                        this.state = 476;
                                        this.match(css3Parser.Minus);
                                    }
                                    break;
                                case css3Parser.Dimension:
                                    {
                                        this.state = 477;
                                        this.match(css3Parser.Dimension);
                                    }
                                    break;
                                case css3Parser.UnknownDimension:
                                    {
                                        this.state = 478;
                                        this.match(css3Parser.UnknownDimension);
                                    }
                                    break;
                                case css3Parser.Number:
                                    {
                                        this.state = 479;
                                        this.match(css3Parser.Number);
                                    }
                                    break;
                                case css3Parser.String:
                                    {
                                        this.state = 480;
                                        this.match(css3Parser.String);
                                    }
                                    break;
                                case css3Parser.MediaOnly:
                                case css3Parser.Not:
                                case css3Parser.And:
                                case css3Parser.Or:
                                case css3Parser.From:
                                case css3Parser.To:
                                case css3Parser.Ident:
                                    {
                                        this.state = 481;
                                        this.ident();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 484;
                            this.ws();
                        }
                    }
                    this.state = 487;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0));
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
    css3Parser.prototype.negation = function () {
        var _localctx = new NegationContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, css3Parser.RULE_negation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 489;
                this.match(css3Parser.PseudoNot);
                this.state = 490;
                this.ws();
                this.state = 491;
                this.negationArg();
                this.state = 492;
                this.ws();
                this.state = 493;
                this.match(css3Parser.T__3);
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
    css3Parser.prototype.negationArg = function () {
        var _localctx = new NegationArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, css3Parser.RULE_negationArg);
        try {
            this.state = 501;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 495;
                        this.typeSelector();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 496;
                        this.universal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 497;
                        this.match(css3Parser.Hash);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 498;
                        this.className();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 499;
                        this.attrib();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 500;
                        this.pseudo();
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
    css3Parser.prototype.operator = function () {
        var _localctx = new OperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, css3Parser.RULE_operator);
        try {
            this.state = 511;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case css3Parser.T__12:
                    _localctx = new GoodOperatorContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 503;
                        this.match(css3Parser.T__12);
                        this.state = 504;
                        this.ws();
                    }
                    break;
                case css3Parser.Comma:
                    _localctx = new GoodOperatorContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 505;
                        this.match(css3Parser.Comma);
                        this.state = 506;
                        this.ws();
                    }
                    break;
                case css3Parser.Space:
                    _localctx = new GoodOperatorContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 507;
                        this.match(css3Parser.Space);
                        this.state = 508;
                        this.ws();
                    }
                    break;
                case css3Parser.T__10:
                    _localctx = new BadOperatorContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 509;
                        this.match(css3Parser.T__10);
                        this.state = 510;
                        this.ws();
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
    css3Parser.prototype.property = function () {
        var _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, css3Parser.RULE_property);
        try {
            this.state = 522;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case css3Parser.MediaOnly:
                case css3Parser.Not:
                case css3Parser.And:
                case css3Parser.Or:
                case css3Parser.From:
                case css3Parser.To:
                case css3Parser.Ident:
                    _localctx = new GoodPropertyContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 513;
                        this.ident();
                        this.state = 514;
                        this.ws();
                    }
                    break;
                case css3Parser.Variable:
                    _localctx = new GoodPropertyContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 516;
                        this.match(css3Parser.Variable);
                        this.state = 517;
                        this.ws();
                    }
                    break;
                case css3Parser.T__6:
                    _localctx = new BadPropertyContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 518;
                        this.match(css3Parser.T__6);
                        this.state = 519;
                        this.ident();
                    }
                    break;
                case css3Parser.T__13:
                    _localctx = new BadPropertyContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 520;
                        this.match(css3Parser.T__13);
                        this.state = 521;
                        this.ident();
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
    css3Parser.prototype.ruleset = function () {
        var _localctx = new RulesetContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, css3Parser.RULE_ruleset);
        var _la;
        try {
            this.state = 547;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                case 1:
                    _localctx = new KnownRulesetContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 524;
                        this.selectorGroup();
                        this.state = 525;
                        this.match(css3Parser.T__4);
                        this.state = 526;
                        this.ws();
                        this.state = 528;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                            {
                                this.state = 527;
                                this.declarationList();
                            }
                        }
                        this.state = 530;
                        this.match(css3Parser.T__5);
                        this.state = 531;
                        this.ws();
                    }
                    break;
                case 2:
                    _localctx = new UnknownRulesetContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 536;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__9) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                            {
                                {
                                    this.state = 533;
                                    this.any();
                                }
                            }
                            this.state = 538;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 539;
                        this.match(css3Parser.T__4);
                        this.state = 540;
                        this.ws();
                        this.state = 542;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                            {
                                this.state = 541;
                                this.declarationList();
                            }
                        }
                        this.state = 544;
                        this.match(css3Parser.T__5);
                        this.state = 545;
                        this.ws();
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
    css3Parser.prototype.declarationList = function () {
        var _localctx = new DeclarationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, css3Parser.RULE_declarationList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.T__0) {
                    {
                        {
                            this.state = 549;
                            this.match(css3Parser.T__0);
                            this.state = 550;
                            this.ws();
                        }
                    }
                    this.state = 555;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 556;
                this.declaration();
                this.state = 557;
                this.ws();
                this.state = 565;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 558;
                                this.match(css3Parser.T__0);
                                this.state = 559;
                                this.ws();
                                this.state = 561;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 560;
                                            this.declaration();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 567;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
    css3Parser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, css3Parser.RULE_declaration);
        try {
            this.state = 580;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                case 1:
                    _localctx = new KnownDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 568;
                        this.property();
                        this.state = 569;
                        this.match(css3Parser.T__2);
                        this.state = 570;
                        this.ws();
                        this.state = 571;
                        this.expr();
                        this.state = 573;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                            case 1:
                                {
                                    this.state = 572;
                                    this.prio();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    _localctx = new UnknownDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 575;
                        this.property();
                        this.state = 576;
                        this.match(css3Parser.T__2);
                        this.state = 577;
                        this.ws();
                        this.state = 578;
                        this.value();
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
    css3Parser.prototype.prio = function () {
        var _localctx = new PrioContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, css3Parser.RULE_prio);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 582;
                this.match(css3Parser.Important);
                this.state = 583;
                this.ws();
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
    css3Parser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, css3Parser.RULE_value);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 590;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 590;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case css3Parser.T__1:
                                    case css3Parser.T__2:
                                    case css3Parser.T__9:
                                    case css3Parser.Includes:
                                    case css3Parser.DashMatch:
                                    case css3Parser.Hash:
                                    case css3Parser.Percentage:
                                    case css3Parser.Uri:
                                    case css3Parser.UnicodeRange:
                                    case css3Parser.MediaOnly:
                                    case css3Parser.Not:
                                    case css3Parser.And:
                                    case css3Parser.Dimension:
                                    case css3Parser.UnknownDimension:
                                    case css3Parser.Plus:
                                    case css3Parser.Minus:
                                    case css3Parser.Number:
                                    case css3Parser.String:
                                    case css3Parser.Or:
                                    case css3Parser.From:
                                    case css3Parser.To:
                                    case css3Parser.Ident:
                                    case css3Parser.Function:
                                        {
                                            this.state = 585;
                                            this.any();
                                        }
                                        break;
                                    case css3Parser.T__4:
                                        {
                                            this.state = 586;
                                            this.block();
                                        }
                                        break;
                                    case css3Parser.T__14:
                                        {
                                            this.state = 587;
                                            this.atKeyword();
                                            this.state = 588;
                                            this.ws();
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
                    this.state = 592;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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
    css3Parser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, css3Parser.RULE_expr);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 594;
                this.term();
                this.state = 601;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 596;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (css3Parser.T__10 - 11)) | (1 << (css3Parser.T__12 - 11)) | (1 << (css3Parser.Space - 11)) | (1 << (css3Parser.Comma - 11)))) !== 0)) {
                                    {
                                        this.state = 595;
                                        this.operator();
                                    }
                                }
                                this.state = 598;
                                this.term();
                            }
                        }
                    }
                    this.state = 603;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
    css3Parser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, css3Parser.RULE_term);
        try {
            this.state = 630;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 604;
                        this.number();
                        this.state = 605;
                        this.ws();
                    }
                    break;
                case 2:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 607;
                        this.percentage();
                        this.state = 608;
                        this.ws();
                    }
                    break;
                case 3:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 610;
                        this.dimension();
                        this.state = 611;
                        this.ws();
                    }
                    break;
                case 4:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 613;
                        this.match(css3Parser.String);
                        this.state = 614;
                        this.ws();
                    }
                    break;
                case 5:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 615;
                        this.match(css3Parser.UnicodeRange);
                        this.state = 616;
                        this.ws();
                    }
                    break;
                case 6:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 617;
                        this.ident();
                        this.state = 618;
                        this.ws();
                    }
                    break;
                case 7:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 620;
                        this.var();
                    }
                    break;
                case 8:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 621;
                        this.match(css3Parser.Uri);
                        this.state = 622;
                        this.ws();
                    }
                    break;
                case 9:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 623;
                        this.hexcolor();
                    }
                    break;
                case 10:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 624;
                        this.calc();
                    }
                    break;
                case 11:
                    _localctx = new KnownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 625;
                        this.function();
                    }
                    break;
                case 12:
                    _localctx = new UnknownTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 626;
                        this.unknownDimension();
                        this.state = 627;
                        this.ws();
                    }
                    break;
                case 13:
                    _localctx = new BadTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 629;
                        this.dxImageTransform();
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
    css3Parser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, css3Parser.RULE_function);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 632;
                this.match(css3Parser.Function);
                this.state = 633;
                this.ws();
                this.state = 634;
                this.expr();
                this.state = 635;
                this.match(css3Parser.T__3);
                this.state = 636;
                this.ws();
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
    css3Parser.prototype.dxImageTransform = function () {
        var _localctx = new DxImageTransformContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, css3Parser.RULE_dxImageTransform);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 638;
                this.match(css3Parser.DxImageTransform);
                this.state = 639;
                this.ws();
                this.state = 640;
                this.expr();
                this.state = 641;
                this.match(css3Parser.T__3);
                this.state = 642;
                this.ws();
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
    css3Parser.prototype.hexcolor = function () {
        var _localctx = new HexcolorContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, css3Parser.RULE_hexcolor);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.match(css3Parser.Hash);
                this.state = 645;
                this.ws();
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
    css3Parser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, css3Parser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 648;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.Plus || _la === css3Parser.Minus) {
                    {
                        this.state = 647;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
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
                this.state = 650;
                this.match(css3Parser.Number);
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
    css3Parser.prototype.percentage = function () {
        var _localctx = new PercentageContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, css3Parser.RULE_percentage);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 653;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.Plus || _la === css3Parser.Minus) {
                    {
                        this.state = 652;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
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
                this.state = 655;
                this.match(css3Parser.Percentage);
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
    css3Parser.prototype.dimension = function () {
        var _localctx = new DimensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, css3Parser.RULE_dimension);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 658;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.Plus || _la === css3Parser.Minus) {
                    {
                        this.state = 657;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
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
                this.state = 660;
                this.match(css3Parser.Dimension);
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
    css3Parser.prototype.unknownDimension = function () {
        var _localctx = new UnknownDimensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, css3Parser.RULE_unknownDimension);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.Plus || _la === css3Parser.Minus) {
                    {
                        this.state = 662;
                        _la = this._input.LA(1);
                        if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
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
                this.state = 665;
                this.match(css3Parser.UnknownDimension);
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
    css3Parser.prototype.any = function () {
        var _localctx = new AnyContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, css3Parser.RULE_any);
        var _la;
        try {
            this.state = 732;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 667;
                        this.ident();
                        this.state = 668;
                        this.ws();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 670;
                        this.number();
                        this.state = 671;
                        this.ws();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 673;
                        this.percentage();
                        this.state = 674;
                        this.ws();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 676;
                        this.dimension();
                        this.state = 677;
                        this.ws();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 679;
                        this.unknownDimension();
                        this.state = 680;
                        this.ws();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 682;
                        this.match(css3Parser.String);
                        this.state = 683;
                        this.ws();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 684;
                        this.match(css3Parser.Uri);
                        this.state = 685;
                        this.ws();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 686;
                        this.match(css3Parser.Hash);
                        this.state = 687;
                        this.ws();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 688;
                        this.match(css3Parser.UnicodeRange);
                        this.state = 689;
                        this.ws();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 690;
                        this.match(css3Parser.Includes);
                        this.state = 691;
                        this.ws();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 692;
                        this.match(css3Parser.DashMatch);
                        this.state = 693;
                        this.ws();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 694;
                        this.match(css3Parser.T__2);
                        this.state = 695;
                        this.ws();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 696;
                        this.match(css3Parser.Function);
                        this.state = 697;
                        this.ws();
                        this.state = 702;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                            {
                                this.state = 700;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case css3Parser.T__1:
                                    case css3Parser.T__2:
                                    case css3Parser.T__9:
                                    case css3Parser.Includes:
                                    case css3Parser.DashMatch:
                                    case css3Parser.Hash:
                                    case css3Parser.Percentage:
                                    case css3Parser.Uri:
                                    case css3Parser.UnicodeRange:
                                    case css3Parser.MediaOnly:
                                    case css3Parser.Not:
                                    case css3Parser.And:
                                    case css3Parser.Dimension:
                                    case css3Parser.UnknownDimension:
                                    case css3Parser.Plus:
                                    case css3Parser.Minus:
                                    case css3Parser.Number:
                                    case css3Parser.String:
                                    case css3Parser.Or:
                                    case css3Parser.From:
                                    case css3Parser.To:
                                    case css3Parser.Ident:
                                    case css3Parser.Function:
                                        {
                                            this.state = 698;
                                            this.any();
                                        }
                                        break;
                                    case css3Parser.T__0:
                                    case css3Parser.T__4:
                                    case css3Parser.T__14:
                                    case css3Parser.Cdo:
                                    case css3Parser.Cdc:
                                        {
                                            this.state = 699;
                                            this.unused();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 704;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 705;
                        this.match(css3Parser.T__3);
                        this.state = 706;
                        this.ws();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 708;
                        this.match(css3Parser.T__1);
                        this.state = 709;
                        this.ws();
                        this.state = 714;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                            {
                                this.state = 712;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case css3Parser.T__1:
                                    case css3Parser.T__2:
                                    case css3Parser.T__9:
                                    case css3Parser.Includes:
                                    case css3Parser.DashMatch:
                                    case css3Parser.Hash:
                                    case css3Parser.Percentage:
                                    case css3Parser.Uri:
                                    case css3Parser.UnicodeRange:
                                    case css3Parser.MediaOnly:
                                    case css3Parser.Not:
                                    case css3Parser.And:
                                    case css3Parser.Dimension:
                                    case css3Parser.UnknownDimension:
                                    case css3Parser.Plus:
                                    case css3Parser.Minus:
                                    case css3Parser.Number:
                                    case css3Parser.String:
                                    case css3Parser.Or:
                                    case css3Parser.From:
                                    case css3Parser.To:
                                    case css3Parser.Ident:
                                    case css3Parser.Function:
                                        {
                                            this.state = 710;
                                            this.any();
                                        }
                                        break;
                                    case css3Parser.T__0:
                                    case css3Parser.T__4:
                                    case css3Parser.T__14:
                                    case css3Parser.Cdo:
                                    case css3Parser.Cdc:
                                        {
                                            this.state = 711;
                                            this.unused();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 716;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 717;
                        this.match(css3Parser.T__3);
                        this.state = 718;
                        this.ws();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 720;
                        this.match(css3Parser.T__9);
                        this.state = 721;
                        this.ws();
                        this.state = 726;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                            {
                                this.state = 724;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case css3Parser.T__1:
                                    case css3Parser.T__2:
                                    case css3Parser.T__9:
                                    case css3Parser.Includes:
                                    case css3Parser.DashMatch:
                                    case css3Parser.Hash:
                                    case css3Parser.Percentage:
                                    case css3Parser.Uri:
                                    case css3Parser.UnicodeRange:
                                    case css3Parser.MediaOnly:
                                    case css3Parser.Not:
                                    case css3Parser.And:
                                    case css3Parser.Dimension:
                                    case css3Parser.UnknownDimension:
                                    case css3Parser.Plus:
                                    case css3Parser.Minus:
                                    case css3Parser.Number:
                                    case css3Parser.String:
                                    case css3Parser.Or:
                                    case css3Parser.From:
                                    case css3Parser.To:
                                    case css3Parser.Ident:
                                    case css3Parser.Function:
                                        {
                                            this.state = 722;
                                            this.any();
                                        }
                                        break;
                                    case css3Parser.T__0:
                                    case css3Parser.T__4:
                                    case css3Parser.T__14:
                                    case css3Parser.Cdo:
                                    case css3Parser.Cdc:
                                        {
                                            this.state = 723;
                                            this.unused();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 728;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 729;
                        this.match(css3Parser.T__11);
                        this.state = 730;
                        this.ws();
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
    css3Parser.prototype.atRule = function () {
        var _localctx = new AtRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, css3Parser.RULE_atRule);
        var _la;
        try {
            _localctx = new UnknownAtRuleContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 734;
                this.atKeyword();
                this.state = 735;
                this.ws();
                this.state = 739;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__9) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                    {
                        {
                            this.state = 736;
                            this.any();
                        }
                    }
                    this.state = 741;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 745;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case css3Parser.T__4:
                        {
                            this.state = 742;
                            this.block();
                        }
                        break;
                    case css3Parser.T__0:
                        {
                            this.state = 743;
                            this.match(css3Parser.T__0);
                            this.state = 744;
                            this.ws();
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
    css3Parser.prototype.atKeyword = function () {
        var _localctx = new AtKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, css3Parser.RULE_atKeyword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 747;
                this.match(css3Parser.T__14);
                this.state = 748;
                this.ident();
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
    css3Parser.prototype.unused = function () {
        var _localctx = new UnusedContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, css3Parser.RULE_unused);
        try {
            this.state = 760;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case css3Parser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 750;
                        this.block();
                    }
                    break;
                case css3Parser.T__14:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 751;
                        this.atKeyword();
                        this.state = 752;
                        this.ws();
                    }
                    break;
                case css3Parser.T__0:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 754;
                        this.match(css3Parser.T__0);
                        this.state = 755;
                        this.ws();
                    }
                    break;
                case css3Parser.Cdo:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 756;
                        this.match(css3Parser.Cdo);
                        this.state = 757;
                        this.ws();
                    }
                    break;
                case css3Parser.Cdc:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 758;
                        this.match(css3Parser.Cdc);
                        this.state = 759;
                        this.ws();
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
    css3Parser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, css3Parser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 762;
                this.match(css3Parser.T__4);
                this.state = 763;
                this.ws();
                this.state = 775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__6) | (1 << css3Parser.T__7) | (1 << css3Parser.T__8) | (1 << css3Parser.T__9) | (1 << css3Parser.T__13) | (1 << css3Parser.T__14) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Page) | (1 << css3Parser.Media) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.PseudoNot - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.FontFace - 32)) | (1 << (css3Parser.Supports - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.Keyframes - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Viewport - 32)) | (1 << (css3Parser.CounterStyle - 32)) | (1 << (css3Parser.FontFeatureValues - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                    {
                        this.state = 773;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                            case 1:
                                {
                                    this.state = 764;
                                    this.declarationList();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 765;
                                    this.nestedStatement();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 766;
                                    this.any();
                                }
                                break;
                            case 4:
                                {
                                    this.state = 767;
                                    this.block();
                                }
                                break;
                            case 5:
                                {
                                    this.state = 768;
                                    this.atKeyword();
                                    this.state = 769;
                                    this.ws();
                                }
                                break;
                            case 6:
                                {
                                    this.state = 771;
                                    this.match(css3Parser.T__0);
                                    this.state = 772;
                                    this.ws();
                                }
                                break;
                        }
                    }
                    this.state = 777;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 778;
                this.match(css3Parser.T__5);
                this.state = 779;
                this.ws();
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
    css3Parser.prototype.nestedStatement = function () {
        var _localctx = new NestedStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, css3Parser.RULE_nestedStatement);
        try {
            this.state = 791;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case css3Parser.T__1:
                case css3Parser.T__2:
                case css3Parser.T__4:
                case css3Parser.T__6:
                case css3Parser.T__7:
                case css3Parser.T__8:
                case css3Parser.T__9:
                case css3Parser.Includes:
                case css3Parser.DashMatch:
                case css3Parser.Hash:
                case css3Parser.Percentage:
                case css3Parser.Uri:
                case css3Parser.UnicodeRange:
                case css3Parser.MediaOnly:
                case css3Parser.Not:
                case css3Parser.And:
                case css3Parser.Dimension:
                case css3Parser.UnknownDimension:
                case css3Parser.Plus:
                case css3Parser.Minus:
                case css3Parser.PseudoNot:
                case css3Parser.Number:
                case css3Parser.String:
                case css3Parser.Or:
                case css3Parser.From:
                case css3Parser.To:
                case css3Parser.Ident:
                case css3Parser.Function:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 781;
                        this.ruleset();
                    }
                    break;
                case css3Parser.Media:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 782;
                        this.media();
                    }
                    break;
                case css3Parser.Page:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 783;
                        this.page();
                    }
                    break;
                case css3Parser.FontFace:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 784;
                        this.fontFaceRule();
                    }
                    break;
                case css3Parser.Keyframes:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 785;
                        this.keyframesRule();
                    }
                    break;
                case css3Parser.Supports:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 786;
                        this.supportsRule();
                    }
                    break;
                case css3Parser.Viewport:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 787;
                        this.viewport();
                    }
                    break;
                case css3Parser.CounterStyle:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 788;
                        this.counterStyle();
                    }
                    break;
                case css3Parser.FontFeatureValues:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 789;
                        this.fontFeatureValuesRule();
                    }
                    break;
                case css3Parser.T__14:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 790;
                        this.atRule();
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
    css3Parser.prototype.groupRuleBody = function () {
        var _localctx = new GroupRuleBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, css3Parser.RULE_groupRuleBody);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 793;
                this.match(css3Parser.T__4);
                this.state = 794;
                this.ws();
                this.state = 798;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__6) | (1 << css3Parser.T__7) | (1 << css3Parser.T__8) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Page) | (1 << css3Parser.Media) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.PseudoNot - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.FontFace - 32)) | (1 << (css3Parser.Supports - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.Keyframes - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Viewport - 32)) | (1 << (css3Parser.CounterStyle - 32)) | (1 << (css3Parser.FontFeatureValues - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                    {
                        {
                            this.state = 795;
                            this.nestedStatement();
                        }
                    }
                    this.state = 800;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 801;
                this.match(css3Parser.T__5);
                this.state = 802;
                this.ws();
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
    css3Parser.prototype.supportsRule = function () {
        var _localctx = new SupportsRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, css3Parser.RULE_supportsRule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 804;
                this.match(css3Parser.Supports);
                this.state = 805;
                this.ws();
                this.state = 806;
                this.supportsCondition();
                this.state = 807;
                this.ws();
                this.state = 808;
                this.groupRuleBody();
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
    css3Parser.prototype.supportsCondition = function () {
        var _localctx = new SupportsConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, css3Parser.RULE_supportsCondition);
        try {
            this.state = 814;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 810;
                        this.supportsNegation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 811;
                        this.supportsConjunction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 812;
                        this.supportsDisjunction();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 813;
                        this.supportsConditionInParens();
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
    css3Parser.prototype.supportsConditionInParens = function () {
        var _localctx = new SupportsConditionInParensContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, css3Parser.RULE_supportsConditionInParens);
        try {
            this.state = 824;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 816;
                        this.match(css3Parser.T__1);
                        this.state = 817;
                        this.ws();
                        this.state = 818;
                        this.supportsCondition();
                        this.state = 819;
                        this.ws();
                        this.state = 820;
                        this.match(css3Parser.T__3);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 822;
                        this.supportsDeclarationCondition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 823;
                        this.generalEnclosed();
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
    css3Parser.prototype.supportsNegation = function () {
        var _localctx = new SupportsNegationContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, css3Parser.RULE_supportsNegation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 826;
                this.match(css3Parser.Not);
                this.state = 827;
                this.ws();
                this.state = 828;
                this.match(css3Parser.Space);
                this.state = 829;
                this.ws();
                this.state = 830;
                this.supportsConditionInParens();
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
    css3Parser.prototype.supportsConjunction = function () {
        var _localctx = new SupportsConjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, css3Parser.RULE_supportsConjunction);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 832;
                this.supportsConditionInParens();
                this.state = 842;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 833;
                                    this.ws();
                                    this.state = 834;
                                    this.match(css3Parser.Space);
                                    this.state = 835;
                                    this.ws();
                                    this.state = 836;
                                    this.match(css3Parser.And);
                                    this.state = 837;
                                    this.ws();
                                    this.state = 838;
                                    this.match(css3Parser.Space);
                                    this.state = 839;
                                    this.ws();
                                    this.state = 840;
                                    this.supportsConditionInParens();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 844;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
    css3Parser.prototype.supportsDisjunction = function () {
        var _localctx = new SupportsDisjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, css3Parser.RULE_supportsDisjunction);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 846;
                this.supportsConditionInParens();
                this.state = 856;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 847;
                                    this.ws();
                                    this.state = 848;
                                    this.match(css3Parser.Space);
                                    this.state = 849;
                                    this.ws();
                                    this.state = 850;
                                    this.match(css3Parser.Or);
                                    this.state = 851;
                                    this.ws();
                                    this.state = 852;
                                    this.match(css3Parser.Space);
                                    this.state = 853;
                                    this.ws();
                                    this.state = 854;
                                    this.supportsConditionInParens();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 858;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
    css3Parser.prototype.supportsDeclarationCondition = function () {
        var _localctx = new SupportsDeclarationConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, css3Parser.RULE_supportsDeclarationCondition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 860;
                this.match(css3Parser.T__1);
                this.state = 861;
                this.ws();
                this.state = 862;
                this.declaration();
                this.state = 863;
                this.match(css3Parser.T__3);
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
    css3Parser.prototype.generalEnclosed = function () {
        var _localctx = new GeneralEnclosedContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, css3Parser.RULE_generalEnclosed);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 865;
                _la = this._input.LA(1);
                if (!(_la === css3Parser.T__1 || _la === css3Parser.Function)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 870;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__1) | (1 << css3Parser.T__2) | (1 << css3Parser.T__4) | (1 << css3Parser.T__9) | (1 << css3Parser.T__14) | (1 << css3Parser.Cdo) | (1 << css3Parser.Cdc) | (1 << css3Parser.Includes) | (1 << css3Parser.DashMatch) | (1 << css3Parser.Hash) | (1 << css3Parser.Percentage) | (1 << css3Parser.Uri) | (1 << css3Parser.UnicodeRange))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Dimension - 32)) | (1 << (css3Parser.UnknownDimension - 32)) | (1 << (css3Parser.Plus - 32)) | (1 << (css3Parser.Minus - 32)) | (1 << (css3Parser.Number - 32)) | (1 << (css3Parser.String - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)) | (1 << (css3Parser.Function - 32)))) !== 0)) {
                    {
                        this.state = 868;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case css3Parser.T__1:
                            case css3Parser.T__2:
                            case css3Parser.T__9:
                            case css3Parser.Includes:
                            case css3Parser.DashMatch:
                            case css3Parser.Hash:
                            case css3Parser.Percentage:
                            case css3Parser.Uri:
                            case css3Parser.UnicodeRange:
                            case css3Parser.MediaOnly:
                            case css3Parser.Not:
                            case css3Parser.And:
                            case css3Parser.Dimension:
                            case css3Parser.UnknownDimension:
                            case css3Parser.Plus:
                            case css3Parser.Minus:
                            case css3Parser.Number:
                            case css3Parser.String:
                            case css3Parser.Or:
                            case css3Parser.From:
                            case css3Parser.To:
                            case css3Parser.Ident:
                            case css3Parser.Function:
                                {
                                    this.state = 866;
                                    this.any();
                                }
                                break;
                            case css3Parser.T__0:
                            case css3Parser.T__4:
                            case css3Parser.T__14:
                            case css3Parser.Cdo:
                            case css3Parser.Cdc:
                                {
                                    this.state = 867;
                                    this.unused();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 872;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 873;
                this.match(css3Parser.T__3);
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
    css3Parser.prototype.var = function () {
        var _localctx = new VarContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, css3Parser.RULE_var);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 875;
                this.match(css3Parser.Var);
                this.state = 876;
                this.ws();
                this.state = 877;
                this.match(css3Parser.Variable);
                this.state = 878;
                this.ws();
                this.state = 879;
                this.match(css3Parser.T__3);
                this.state = 880;
                this.ws();
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
    css3Parser.prototype.calc = function () {
        var _localctx = new CalcContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, css3Parser.RULE_calc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 882;
                this.match(css3Parser.Calc);
                this.state = 883;
                this.ws();
                this.state = 884;
                this.calcSum();
                this.state = 885;
                this.match(css3Parser.T__3);
                this.state = 886;
                this.ws();
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
    css3Parser.prototype.calcSum = function () {
        var _localctx = new CalcSumContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, css3Parser.RULE_calcSum);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 888;
                this.calcProduct();
                this.state = 899;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.Space) {
                    {
                        {
                            this.state = 889;
                            this.match(css3Parser.Space);
                            this.state = 890;
                            this.ws();
                            this.state = 891;
                            _la = this._input.LA(1);
                            if (!(_la === css3Parser.Plus || _la === css3Parser.Minus)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 892;
                            this.ws();
                            this.state = 893;
                            this.match(css3Parser.Space);
                            this.state = 894;
                            this.ws();
                            this.state = 895;
                            this.calcProduct();
                        }
                    }
                    this.state = 901;
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
    css3Parser.prototype.calcProduct = function () {
        var _localctx = new CalcProductContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, css3Parser.RULE_calcProduct);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 902;
                this.calcValue();
                this.state = 914;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.T__6 || _la === css3Parser.T__12) {
                    {
                        this.state = 912;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case css3Parser.T__6:
                                {
                                    this.state = 903;
                                    this.match(css3Parser.T__6);
                                    this.state = 904;
                                    this.ws();
                                    this.state = 905;
                                    this.calcValue();
                                }
                                break;
                            case css3Parser.T__12:
                                {
                                    this.state = 907;
                                    this.match(css3Parser.T__12);
                                    this.state = 908;
                                    this.ws();
                                    this.state = 909;
                                    this.number();
                                    this.state = 910;
                                    this.ws();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 916;
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
    css3Parser.prototype.calcValue = function () {
        var _localctx = new CalcValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, css3Parser.RULE_calcValue);
        try {
            this.state = 935;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 917;
                        this.number();
                        this.state = 918;
                        this.ws();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 920;
                        this.dimension();
                        this.state = 921;
                        this.ws();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 923;
                        this.unknownDimension();
                        this.state = 924;
                        this.ws();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 926;
                        this.percentage();
                        this.state = 927;
                        this.ws();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 929;
                        this.match(css3Parser.T__1);
                        this.state = 930;
                        this.ws();
                        this.state = 931;
                        this.calcSum();
                        this.state = 932;
                        this.match(css3Parser.T__3);
                        this.state = 933;
                        this.ws();
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
    css3Parser.prototype.fontFaceRule = function () {
        var _localctx = new FontFaceRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, css3Parser.RULE_fontFaceRule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 937;
                this.match(css3Parser.FontFace);
                this.state = 938;
                this.ws();
                this.state = 939;
                this.match(css3Parser.T__4);
                this.state = 940;
                this.ws();
                this.state = 942;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === css3Parser.T__6 || _la === css3Parser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                    {
                        this.state = 941;
                        this.fontFaceDeclaration();
                    }
                }
                this.state = 951;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.T__0) {
                    {
                        {
                            this.state = 944;
                            this.match(css3Parser.T__0);
                            this.state = 945;
                            this.ws();
                            this.state = 947;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === css3Parser.T__6 || _la === css3Parser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                                {
                                    this.state = 946;
                                    this.fontFaceDeclaration();
                                }
                            }
                        }
                    }
                    this.state = 953;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 954;
                this.match(css3Parser.T__5);
                this.state = 955;
                this.ws();
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
    css3Parser.prototype.fontFaceDeclaration = function () {
        var _localctx = new FontFaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, css3Parser.RULE_fontFaceDeclaration);
        try {
            this.state = 967;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    _localctx = new KnownFontFaceDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 957;
                        this.property();
                        this.state = 958;
                        this.match(css3Parser.T__2);
                        this.state = 959;
                        this.ws();
                        this.state = 960;
                        this.expr();
                    }
                    break;
                case 2:
                    _localctx = new UnknownFontFaceDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 962;
                        this.property();
                        this.state = 963;
                        this.match(css3Parser.T__2);
                        this.state = 964;
                        this.ws();
                        this.state = 965;
                        this.value();
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
    css3Parser.prototype.keyframesRule = function () {
        var _localctx = new KeyframesRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, css3Parser.RULE_keyframesRule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 969;
                this.match(css3Parser.Keyframes);
                this.state = 970;
                this.ws();
                this.state = 971;
                this.match(css3Parser.Space);
                this.state = 972;
                this.ws();
                this.state = 973;
                this.ident();
                this.state = 974;
                this.ws();
                this.state = 975;
                this.match(css3Parser.T__4);
                this.state = 976;
                this.ws();
                this.state = 977;
                this.keyframesBlocks();
                this.state = 978;
                this.match(css3Parser.T__5);
                this.state = 979;
                this.ws();
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
    css3Parser.prototype.keyframesBlocks = function () {
        var _localctx = new KeyframesBlocksContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, css3Parser.RULE_keyframesBlocks);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 992;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (css3Parser.Percentage - 29)) | (1 << (css3Parser.From - 29)) | (1 << (css3Parser.To - 29)))) !== 0)) {
                    {
                        {
                            this.state = 981;
                            this.keyframeSelector();
                            this.state = 982;
                            this.match(css3Parser.T__4);
                            this.state = 983;
                            this.ws();
                            this.state = 985;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                                {
                                    this.state = 984;
                                    this.declarationList();
                                }
                            }
                            this.state = 987;
                            this.match(css3Parser.T__5);
                            this.state = 988;
                            this.ws();
                        }
                    }
                    this.state = 994;
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
    css3Parser.prototype.keyframeSelector = function () {
        var _localctx = new KeyframeSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, css3Parser.RULE_keyframeSelector);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 995;
                _la = this._input.LA(1);
                if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (css3Parser.Percentage - 29)) | (1 << (css3Parser.From - 29)) | (1 << (css3Parser.To - 29)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 996;
                this.ws();
                this.state = 1004;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.Comma) {
                    {
                        {
                            this.state = 997;
                            this.match(css3Parser.Comma);
                            this.state = 998;
                            this.ws();
                            this.state = 999;
                            _la = this._input.LA(1);
                            if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (css3Parser.Percentage - 29)) | (1 << (css3Parser.From - 29)) | (1 << (css3Parser.To - 29)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1000;
                            this.ws();
                        }
                    }
                    this.state = 1006;
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
    css3Parser.prototype.viewport = function () {
        var _localctx = new ViewportContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, css3Parser.RULE_viewport);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1007;
                this.match(css3Parser.Viewport);
                this.state = 1008;
                this.ws();
                this.state = 1009;
                this.match(css3Parser.T__4);
                this.state = 1010;
                this.ws();
                this.state = 1012;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                    {
                        this.state = 1011;
                        this.declarationList();
                    }
                }
                this.state = 1014;
                this.match(css3Parser.T__5);
                this.state = 1015;
                this.ws();
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
    css3Parser.prototype.counterStyle = function () {
        var _localctx = new CounterStyleContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, css3Parser.RULE_counterStyle);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1017;
                this.match(css3Parser.CounterStyle);
                this.state = 1018;
                this.ws();
                this.state = 1019;
                this.ident();
                this.state = 1020;
                this.ws();
                this.state = 1021;
                this.match(css3Parser.T__4);
                this.state = 1022;
                this.ws();
                this.state = 1024;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << css3Parser.T__0) | (1 << css3Parser.T__6) | (1 << css3Parser.T__13))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Variable - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0)) {
                    {
                        this.state = 1023;
                        this.declarationList();
                    }
                }
                this.state = 1026;
                this.match(css3Parser.T__5);
                this.state = 1027;
                this.ws();
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
    css3Parser.prototype.fontFeatureValuesRule = function () {
        var _localctx = new FontFeatureValuesRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, css3Parser.RULE_fontFeatureValuesRule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1029;
                this.match(css3Parser.FontFeatureValues);
                this.state = 1030;
                this.ws();
                this.state = 1031;
                this.fontFamilyNameList();
                this.state = 1032;
                this.ws();
                this.state = 1033;
                this.match(css3Parser.T__4);
                this.state = 1034;
                this.ws();
                this.state = 1038;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === css3Parser.T__14) {
                    {
                        {
                            this.state = 1035;
                            this.featureValueBlock();
                        }
                    }
                    this.state = 1040;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1041;
                this.match(css3Parser.T__5);
                this.state = 1042;
                this.ws();
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
    css3Parser.prototype.fontFamilyNameList = function () {
        var _localctx = new FontFamilyNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, css3Parser.RULE_fontFamilyNameList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1044;
                this.fontFamilyName();
                this.state = 1052;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1045;
                                this.ws();
                                this.state = 1046;
                                this.match(css3Parser.Comma);
                                this.state = 1047;
                                this.ws();
                                this.state = 1048;
                                this.fontFamilyName();
                            }
                        }
                    }
                    this.state = 1054;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
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
    css3Parser.prototype.fontFamilyName = function () {
        var _localctx = new FontFamilyNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, css3Parser.RULE_fontFamilyName);
        try {
            var _alt = void 0;
            this.state = 1065;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case css3Parser.String:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1055;
                        this.match(css3Parser.String);
                    }
                    break;
                case css3Parser.MediaOnly:
                case css3Parser.Not:
                case css3Parser.And:
                case css3Parser.Or:
                case css3Parser.From:
                case css3Parser.To:
                case css3Parser.Ident:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1056;
                        this.ident();
                        this.state = 1062;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1057;
                                        this.ws();
                                        this.state = 1058;
                                        this.ident();
                                    }
                                }
                            }
                            this.state = 1064;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
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
    css3Parser.prototype.featureValueBlock = function () {
        var _localctx = new FeatureValueBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, css3Parser.RULE_featureValueBlock);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1067;
                this.featureType();
                this.state = 1068;
                this.ws();
                this.state = 1069;
                this.match(css3Parser.T__4);
                this.state = 1070;
                this.ws();
                this.state = 1072;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 1071;
                            this.featureValueDefinition();
                        }
                        break;
                }
                this.state = 1082;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1074;
                                this.ws();
                                this.state = 1075;
                                this.match(css3Parser.T__0);
                                this.state = 1076;
                                this.ws();
                                this.state = 1078;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1077;
                                            this.featureValueDefinition();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 1084;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                }
                this.state = 1085;
                this.match(css3Parser.T__5);
                this.state = 1086;
                this.ws();
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
    css3Parser.prototype.featureType = function () {
        var _localctx = new FeatureTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, css3Parser.RULE_featureType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1088;
                this.atKeyword();
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
    css3Parser.prototype.featureValueDefinition = function () {
        var _localctx = new FeatureValueDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, css3Parser.RULE_featureValueDefinition);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1090;
                this.ident();
                this.state = 1091;
                this.ws();
                this.state = 1092;
                this.match(css3Parser.T__2);
                this.state = 1093;
                this.ws();
                this.state = 1094;
                this.number();
                this.state = 1100;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1095;
                                this.ws();
                                this.state = 1096;
                                this.number();
                            }
                        }
                    }
                    this.state = 1102;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
    css3Parser.prototype.ident = function () {
        var _localctx = new IdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, css3Parser.RULE_ident);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1103;
                _la = this._input.LA(1);
                if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (css3Parser.MediaOnly - 32)) | (1 << (css3Parser.Not - 32)) | (1 << (css3Parser.And - 32)) | (1 << (css3Parser.Or - 32)) | (1 << (css3Parser.From - 32)) | (1 << (css3Parser.To - 32)) | (1 << (css3Parser.Ident - 32)))) !== 0))) {
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
    css3Parser.prototype.ws = function () {
        var _localctx = new WsContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, css3Parser.RULE_ws);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1108;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1105;
                                _la = this._input.LA(1);
                                if (!(_la === css3Parser.Comment || _la === css3Parser.Space)) {
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
                    }
                    this.state = 1110;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
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
    Object.defineProperty(css3Parser, "_ATN", {
        get: function () {
            if (!css3Parser.__ATN) {
                css3Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(css3Parser._serializedATN));
            }
            return css3Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    css3Parser.T__0 = 1;
    css3Parser.T__1 = 2;
    css3Parser.T__2 = 3;
    css3Parser.T__3 = 4;
    css3Parser.T__4 = 5;
    css3Parser.T__5 = 6;
    css3Parser.T__6 = 7;
    css3Parser.T__7 = 8;
    css3Parser.T__8 = 9;
    css3Parser.T__9 = 10;
    css3Parser.T__10 = 11;
    css3Parser.T__11 = 12;
    css3Parser.T__12 = 13;
    css3Parser.T__13 = 14;
    css3Parser.T__14 = 15;
    css3Parser.Comment = 16;
    css3Parser.Space = 17;
    css3Parser.Cdo = 18;
    css3Parser.Cdc = 19;
    css3Parser.Includes = 20;
    css3Parser.DashMatch = 21;
    css3Parser.Hash = 22;
    css3Parser.Import = 23;
    css3Parser.Page = 24;
    css3Parser.Media = 25;
    css3Parser.Namespace = 26;
    css3Parser.Charset = 27;
    css3Parser.Important = 28;
    css3Parser.Percentage = 29;
    css3Parser.Uri = 30;
    css3Parser.UnicodeRange = 31;
    css3Parser.MediaOnly = 32;
    css3Parser.Not = 33;
    css3Parser.And = 34;
    css3Parser.Dimension = 35;
    css3Parser.UnknownDimension = 36;
    css3Parser.Plus = 37;
    css3Parser.Minus = 38;
    css3Parser.Greater = 39;
    css3Parser.Comma = 40;
    css3Parser.Tilde = 41;
    css3Parser.PseudoNot = 42;
    css3Parser.Number = 43;
    css3Parser.String = 44;
    css3Parser.PrefixMatch = 45;
    css3Parser.SuffixMatch = 46;
    css3Parser.SubstringMatch = 47;
    css3Parser.FontFace = 48;
    css3Parser.Supports = 49;
    css3Parser.Or = 50;
    css3Parser.Keyframes = 51;
    css3Parser.From = 52;
    css3Parser.To = 53;
    css3Parser.Calc = 54;
    css3Parser.Viewport = 55;
    css3Parser.CounterStyle = 56;
    css3Parser.FontFeatureValues = 57;
    css3Parser.DxImageTransform = 58;
    css3Parser.Variable = 59;
    css3Parser.Var = 60;
    css3Parser.Ident = 61;
    css3Parser.Function = 62;
    css3Parser.RULE_stylesheet = 0;
    css3Parser.RULE_charset = 1;
    css3Parser.RULE_imports = 2;
    css3Parser.RULE_namespace = 3;
    css3Parser.RULE_namespacePrefix = 4;
    css3Parser.RULE_media = 5;
    css3Parser.RULE_mediaQueryList = 6;
    css3Parser.RULE_mediaQuery = 7;
    css3Parser.RULE_mediaType = 8;
    css3Parser.RULE_mediaExpression = 9;
    css3Parser.RULE_mediaFeature = 10;
    css3Parser.RULE_page = 11;
    css3Parser.RULE_pseudoPage = 12;
    css3Parser.RULE_selectorGroup = 13;
    css3Parser.RULE_selector = 14;
    css3Parser.RULE_combinator = 15;
    css3Parser.RULE_simpleSelectorSequence = 16;
    css3Parser.RULE_typeSelector = 17;
    css3Parser.RULE_typeNamespacePrefix = 18;
    css3Parser.RULE_elementName = 19;
    css3Parser.RULE_universal = 20;
    css3Parser.RULE_className = 21;
    css3Parser.RULE_attrib = 22;
    css3Parser.RULE_pseudo = 23;
    css3Parser.RULE_functionalPseudo = 24;
    css3Parser.RULE_expression = 25;
    css3Parser.RULE_negation = 26;
    css3Parser.RULE_negationArg = 27;
    css3Parser.RULE_operator = 28;
    css3Parser.RULE_property = 29;
    css3Parser.RULE_ruleset = 30;
    css3Parser.RULE_declarationList = 31;
    css3Parser.RULE_declaration = 32;
    css3Parser.RULE_prio = 33;
    css3Parser.RULE_value = 34;
    css3Parser.RULE_expr = 35;
    css3Parser.RULE_term = 36;
    css3Parser.RULE_function = 37;
    css3Parser.RULE_dxImageTransform = 38;
    css3Parser.RULE_hexcolor = 39;
    css3Parser.RULE_number = 40;
    css3Parser.RULE_percentage = 41;
    css3Parser.RULE_dimension = 42;
    css3Parser.RULE_unknownDimension = 43;
    css3Parser.RULE_any = 44;
    css3Parser.RULE_atRule = 45;
    css3Parser.RULE_atKeyword = 46;
    css3Parser.RULE_unused = 47;
    css3Parser.RULE_block = 48;
    css3Parser.RULE_nestedStatement = 49;
    css3Parser.RULE_groupRuleBody = 50;
    css3Parser.RULE_supportsRule = 51;
    css3Parser.RULE_supportsCondition = 52;
    css3Parser.RULE_supportsConditionInParens = 53;
    css3Parser.RULE_supportsNegation = 54;
    css3Parser.RULE_supportsConjunction = 55;
    css3Parser.RULE_supportsDisjunction = 56;
    css3Parser.RULE_supportsDeclarationCondition = 57;
    css3Parser.RULE_generalEnclosed = 58;
    css3Parser.RULE_var = 59;
    css3Parser.RULE_calc = 60;
    css3Parser.RULE_calcSum = 61;
    css3Parser.RULE_calcProduct = 62;
    css3Parser.RULE_calcValue = 63;
    css3Parser.RULE_fontFaceRule = 64;
    css3Parser.RULE_fontFaceDeclaration = 65;
    css3Parser.RULE_keyframesRule = 66;
    css3Parser.RULE_keyframesBlocks = 67;
    css3Parser.RULE_keyframeSelector = 68;
    css3Parser.RULE_viewport = 69;
    css3Parser.RULE_counterStyle = 70;
    css3Parser.RULE_fontFeatureValuesRule = 71;
    css3Parser.RULE_fontFamilyNameList = 72;
    css3Parser.RULE_fontFamilyName = 73;
    css3Parser.RULE_featureValueBlock = 74;
    css3Parser.RULE_featureType = 75;
    css3Parser.RULE_featureValueDefinition = 76;
    css3Parser.RULE_ident = 77;
    css3Parser.RULE_ws = 78;
    // tslint:disable:no-trailing-whitespace
    css3Parser.ruleNames = [
        "stylesheet", "charset", "imports", "namespace", "namespacePrefix", "media",
        "mediaQueryList", "mediaQuery", "mediaType", "mediaExpression", "mediaFeature",
        "page", "pseudoPage", "selectorGroup", "selector", "combinator", "simpleSelectorSequence",
        "typeSelector", "typeNamespacePrefix", "elementName", "universal", "className",
        "attrib", "pseudo", "functionalPseudo", "expression", "negation", "negationArg",
        "operator", "property", "ruleset", "declarationList", "declaration", "prio",
        "value", "expr", "term", "function", "dxImageTransform", "hexcolor", "number",
        "percentage", "dimension", "unknownDimension", "any", "atRule", "atKeyword",
        "unused", "block", "nestedStatement", "groupRuleBody", "supportsRule",
        "supportsCondition", "supportsConditionInParens", "supportsNegation",
        "supportsConjunction", "supportsDisjunction", "supportsDeclarationCondition",
        "generalEnclosed", "var", "calc", "calcSum", "calcProduct", "calcValue",
        "fontFaceRule", "fontFaceDeclaration", "keyframesRule", "keyframesBlocks",
        "keyframeSelector", "viewport", "counterStyle", "fontFeatureValuesRule",
        "fontFamilyNameList", "fontFamilyName", "featureValueBlock", "featureType",
        "featureValueDefinition", "ident", "ws",
    ];
    css3Parser._LITERAL_NAMES = [
        undefined, "';'", "'('", "':'", "')'", "'{'", "'}'", "'*'", "'|'", "'.'",
        "'['", "'='", "']'", "'/'", "'_'", "'@'", undefined, undefined, "'<!--'",
        "'-->'", "'~='", "'|='", undefined, undefined, undefined, undefined, undefined,
        "'@charset '", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'+'", "'-'", "'>'", "','",
        "'~'", undefined, undefined, undefined, "'^='", "'$='", "'*='", undefined,
        undefined, undefined, undefined, undefined, undefined, "'calc('", undefined,
        undefined, undefined, undefined, undefined, "'var('",
    ];
    css3Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "Comment", "Space", "Cdo", "Cdc", "Includes", "DashMatch",
        "Hash", "Import", "Page", "Media", "Namespace", "Charset", "Important",
        "Percentage", "Uri", "UnicodeRange", "MediaOnly", "Not", "And", "Dimension",
        "UnknownDimension", "Plus", "Minus", "Greater", "Comma", "Tilde", "PseudoNot",
        "Number", "String", "PrefixMatch", "SuffixMatch", "SubstringMatch", "FontFace",
        "Supports", "Or", "Keyframes", "From", "To", "Calc", "Viewport", "CounterStyle",
        "FontFeatureValues", "DxImageTransform", "Variable", "Var", "Ident", "Function",
    ];
    css3Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(css3Parser._LITERAL_NAMES, css3Parser._SYMBOLIC_NAMES, []);
    css3Parser._serializedATNSegments = 2;
    css3Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u045A\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x03\x02\x03\x02\x03\x02\x07\x02\xA4\n\x02\f\x02\x0E\x02\xA7" +
        "\v\x02\x07\x02\xA9\n\x02\f\x02\x0E\x02\xAC\v\x02\x03\x02\x03\x02\x07\x02" +
        "\xB0\n\x02\f\x02\x0E\x02\xB3\v\x02\x07\x02\xB5\n\x02\f\x02\x0E\x02\xB8" +
        "\v\x02\x03\x02\x03\x02\x07\x02\xBC\n\x02\f\x02\x0E\x02\xBF\v\x02\x07\x02" +
        "\xC1\n\x02\f\x02\x0E\x02\xC4\v\x02\x03\x02\x03\x02\x07\x02\xC8\n\x02\f" +
        "\x02\x0E\x02\xCB\v\x02\x07\x02\xCD\n\x02\f\x02\x0E\x02\xD0\v\x02\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x05\x03\xDE\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x05\x04\xFA\n\x04\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x05\x05\u0101\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u010D\n\x05\x03\x05" +
        "\x03\x05\x03\x05\x05\x05\u0112\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u0121" +
        "\n\b\f\b\x0E\b\u0124\v\b\x05\b\u0126\n\b\x03\b\x03\b\x03\t\x05\t\u012B" +
        "\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0134\n\t\f\t\x0E" +
        "\t\u0137\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u013E\n\t\f\t\x0E\t\u0141" +
        "\v\t\x05\t\u0143\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x05\v\u014E\n\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
        "\r\x05\r\u0159\n\r\x03\r\x03\r\x03\r\x05\r\u015E\n\r\x03\r\x03\r\x03\r" +
        "\x05\r\u0163\n\r\x07\r\u0165\n\r\f\r\x0E\r\u0168\v\r\x03\r\x03\r\x03\r" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x07\x0F\u0176\n\x0F\f\x0F\x0E\x0F\u0179\v\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x07\x10\u0181\n\x10\f\x10\x0E\x10\u0184\v\x10" +
        "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
        "\u018E\n\x11\x03\x12\x03\x12\x05\x12\u0192\n\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x07\x12\u0199\n\x12\f\x12\x0E\x12\u019C\v\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x06\x12\u01A3\n\x12\r\x12\x0E\x12\u01A4" +
        "\x05\x12\u01A7\n\x12\x03\x13\x05\x13\u01AA\n\x13\x03\x13\x03\x13\x03\x14" +
        "\x03\x14\x05\x14\u01B0\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x05" +
        "\x16\u01B7\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
        "\x03\x18\x05\x18\u01C1\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
        "\x18\x05\x18\u01C9\n\x18\x03\x18\x03\x18\x05\x18\u01CD\n\x18\x03\x18\x03" +
        "\x18\x03\x19\x03\x19\x05\x19\u01D3\n\x19\x03\x19\x03\x19\x05\x19\u01D7" +
        "\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01E5\n\x1B\x03\x1B\x06\x1B\u01E8" +
        "\n\x1B\r\x1B\x0E\x1B\u01E9\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01F8\n\x1D" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
        "\u0202\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x05\x1F\u020D\n\x1F\x03 \x03 \x03 \x03 \x05 \u0213\n \x03" +
        " \x03 \x03 \x03 \x07 \u0219\n \f \x0E \u021C\v \x03 \x03 \x03 \x05 \u0221" +
        "\n \x03 \x03 \x03 \x05 \u0226\n \x03!\x03!\x07!\u022A\n!\f!\x0E!\u022D" +
        "\v!\x03!\x03!\x03!\x03!\x03!\x05!\u0234\n!\x07!\u0236\n!\f!\x0E!\u0239" +
        "\v!\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0240\n\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x05\"\u0247\n\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x06$" +
        "\u0251\n$\r$\x0E$\u0252\x03%\x03%\x05%\u0257\n%\x03%\x07%\u025A\n%\f%" +
        "\x0E%\u025D\v%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&" +
        "\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
        "&\x03&\x05&\u0279\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
        "(\x03(\x03(\x03(\x03)\x03)\x03)\x03*\x05*\u028B\n*\x03*\x03*\x03+\x05" +
        "+\u0290\n+\x03+\x03+\x03,\x05,\u0295\n,\x03,\x03,\x03-\x05-\u029A\n-\x03" +
        "-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u02BF\n.\f.\x0E.\u02C2\v.\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x03.\x07.\u02CB\n.\f.\x0E.\u02CE\v.\x03.\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x07.\u02D7\n.\f.\x0E.\u02DA\v.\x03.\x03.\x03.\x05" +
        ".\u02DF\n.\x03/\x03/\x03/\x07/\u02E4\n/\f/\x0E/\u02E7\v/\x03/\x03/\x03" +
        "/\x05/\u02EC\n/\x030\x030\x030\x031\x031\x031\x031\x031\x031\x031\x03" +
        "1\x031\x031\x051\u02FB\n1\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
        "2\x032\x032\x072\u0308\n2\f2\x0E2\u030B\v2\x032\x032\x032\x033\x033\x03" +
        "3\x033\x033\x033\x033\x033\x033\x033\x053\u031A\n3\x034\x034\x034\x07" +
        "4\u031F\n4\f4\x0E4\u0322\v4\x034\x034\x034\x035\x035\x035\x035\x035\x03" +
        "5\x036\x036\x036\x036\x056\u0331\n6\x037\x037\x037\x037\x037\x037\x03" +
        "7\x037\x057\u033B\n7\x038\x038\x038\x038\x038\x038\x039\x039\x039\x03" +
        "9\x039\x039\x039\x039\x039\x039\x069\u034D\n9\r9\x0E9\u034E\x03:\x03:" +
        "\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x06:\u035B\n:\r:\x0E:\u035C\x03" +
        ";\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x07<\u0367\n<\f<\x0E<\u036A\v<\x03" +
        "<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03" +
        ">\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u0384\n?\f?\x0E?\u0387" +
        "\v?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u0393\n@\f" +
        "@\x0E@\u0396\v@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
        "A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u03AA\nA\x03B\x03B\x03B\x03" +
        "B\x03B\x05B\u03B1\nB\x03B\x03B\x03B\x05B\u03B6\nB\x07B\u03B8\nB\fB\x0E" +
        "B\u03BB\vB\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
        "C\x03C\x05C\u03CA\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
        "D\x03D\x03D\x03E\x03E\x03E\x03E\x05E\u03DC\nE\x03E\x03E\x03E\x07E\u03E1" +
        "\nE\fE\x0EE\u03E4\vE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u03ED\nF" +
        "\fF\x0EF\u03F0\vF\x03G\x03G\x03G\x03G\x03G\x05G\u03F7\nG\x03G\x03G\x03" +
        "G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0403\nH\x03H\x03H\x03H\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x07I\u040F\nI\fI\x0EI\u0412\vI\x03I\x03" +
        "I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x07J\u041D\nJ\fJ\x0EJ\u0420\vJ\x03" +
        "K\x03K\x03K\x03K\x03K\x07K\u0427\nK\fK\x0EK\u042A\vK\x05K\u042C\nK\x03" +
        "L\x03L\x03L\x03L\x03L\x05L\u0433\nL\x03L\x03L\x03L\x03L\x05L\u0439\nL" +
        "\x07L\u043B\nL\fL\x0EL\u043E\vL\x03L\x03L\x03L\x03M\x03M\x03N\x03N\x03" +
        "N\x03N\x03N\x03N\x03N\x03N\x07N\u044D\nN\fN\x0EN\u0450\vN\x03O\x03O\x03" +
        "P\x07P\u0455\nP\fP\x0EP\u0458\vP\x03P\x02\x02\x02Q\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
        "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
        "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
        "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
        "\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
        "\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\x02\v\x03\x02\x12\x15\x04\x02" +
        "  ..\x03\x02\"#\x05\x02\r\r\x16\x17/1\x03\x02\'(\x04\x02\x04\x04@@\x04" +
        "\x02\x1F\x1F67\x06\x02\"$4467??\x03\x02\x12\x13\x02\u04BA\x02\xA0\x03" +
        "\x02\x02\x02\x04\xDD\x03\x02\x02\x02\x06\xF9\x03\x02\x02\x02\b\u0111\x03" +
        "\x02\x02\x02\n\u0113\x03\x02\x02\x02\f\u0115\x03\x02\x02\x02\x0E\u0125" +
        "\x03\x02\x02\x02\x10\u0142\x03\x02\x02\x02\x12\u0144\x03\x02\x02\x02\x14" +
        "\u0146\x03\x02\x02\x02\x16\u0152\x03\x02\x02\x02\x18\u0155\x03\x02\x02" +
        "\x02\x1A\u016C\x03\x02\x02\x02\x1C\u0170\x03\x02\x02\x02\x1E\u017A\x03" +
        "\x02\x02\x02 \u018D\x03\x02\x02\x02\"\u01A6\x03\x02\x02\x02$\u01A9\x03" +
        "\x02\x02\x02&\u01AF\x03\x02\x02\x02(\u01B3\x03\x02\x02\x02*\u01B6\x03" +
        "\x02\x02\x02,\u01BA\x03\x02\x02\x02.\u01BD\x03\x02\x02\x020\u01D0\x03" +
        "\x02\x02\x022\u01D8\x03\x02\x02\x024\u01E7\x03\x02\x02\x026\u01EB\x03" +
        "\x02\x02\x028\u01F7\x03\x02\x02\x02:\u0201\x03\x02\x02\x02<\u020C\x03" +
        "\x02\x02\x02>\u0225\x03\x02\x02\x02@\u022B\x03\x02\x02\x02B\u0246\x03" +
        "\x02\x02\x02D\u0248\x03\x02\x02\x02F\u0250\x03\x02\x02\x02H\u0254\x03" +
        "\x02\x02\x02J\u0278\x03\x02\x02\x02L\u027A\x03\x02\x02\x02N\u0280\x03" +
        "\x02\x02\x02P\u0286\x03\x02\x02\x02R\u028A\x03\x02\x02\x02T\u028F\x03" +
        "\x02\x02\x02V\u0294\x03\x02\x02\x02X\u0299\x03\x02\x02\x02Z\u02DE\x03" +
        "\x02\x02\x02\\\u02E0\x03\x02\x02\x02^\u02ED\x03\x02\x02\x02`\u02FA\x03" +
        "\x02\x02\x02b\u02FC\x03\x02\x02\x02d\u0319\x03\x02\x02\x02f\u031B\x03" +
        "\x02\x02\x02h\u0326\x03\x02\x02\x02j\u0330\x03\x02\x02\x02l\u033A\x03" +
        "\x02\x02\x02n\u033C\x03\x02\x02\x02p\u0342\x03\x02\x02\x02r\u0350\x03" +
        "\x02\x02\x02t\u035E\x03\x02\x02\x02v\u0363\x03\x02\x02\x02x\u036D\x03" +
        "\x02\x02\x02z\u0374\x03\x02\x02\x02|\u037A\x03\x02\x02\x02~\u0388\x03" +
        "\x02\x02\x02\x80\u03A9\x03\x02\x02\x02\x82\u03AB\x03\x02\x02\x02\x84\u03C9" +
        "\x03\x02\x02\x02\x86\u03CB\x03\x02\x02\x02\x88\u03E2\x03\x02\x02\x02\x8A" +
        "\u03E5\x03\x02\x02\x02\x8C\u03F1\x03\x02\x02\x02\x8E\u03FB\x03\x02\x02" +
        "\x02\x90\u0407\x03\x02\x02\x02\x92\u0416\x03\x02\x02\x02\x94\u042B\x03" +
        "\x02\x02\x02\x96\u042D\x03\x02\x02\x02\x98\u0442\x03\x02\x02\x02\x9A\u0444" +
        "\x03\x02\x02\x02\x9C\u0451\x03\x02\x02\x02\x9E\u0456\x03\x02\x02\x02\xA0" +
        "\xAA\x05\x9EP\x02\xA1\xA5\x05\x04\x03\x02\xA2\xA4\t\x02\x02\x02\xA3\xA2" +
        "\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6" +
        "\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA1" +
        "\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB" +
        "\x03\x02\x02\x02\xAB\xB6\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB1" +
        "\x05\x06\x04\x02\xAE\xB0\t\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3" +
        "\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB5" +
        "\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xAD\x03\x02\x02\x02\xB5\xB8" +
        "\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xC2" +
        "\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBD\x05\b\x05\x02\xBA\xBC" +
        "\t\x02\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB" +
        "\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD" +
        "\x03\x02\x02\x02\xC0\xB9\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0" +
        "\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xCE\x03\x02\x02\x02\xC4\xC2" +
        "\x03\x02\x02\x02\xC5\xC9\x05d3\x02\xC6\xC8\t\x02\x02\x02\xC7\xC6\x03\x02" +
        "\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02" +
        "\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xC5\x03\x02" +
        "\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02" +
        "\x02\x02\xCF\x03\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x07\x1D" +
        "\x02\x02\xD2\xD3\x05\x9EP\x02\xD3\xD4\x07.\x02\x02\xD4\xD5\x05\x9EP\x02" +
        "\xD5\xD6\x07\x03\x02\x02\xD6\xD7\x05\x9EP\x02\xD7\xDE\x03\x02\x02\x02" +
        "\xD8\xD9\x07\x1D\x02\x02\xD9\xDA\x05\x9EP\x02\xDA\xDB\x07.\x02\x02\xDB" +
        "\xDC\x05\x9EP\x02\xDC\xDE\x03\x02\x02\x02\xDD\xD1\x03\x02\x02\x02\xDD" +
        "\xD8\x03\x02\x02\x02\xDE\x05\x03\x02\x02\x02\xDF\xE0\x07\x19\x02\x02\xE0" +
        "\xE1\x05\x9EP\x02\xE1\xE2\t\x03\x02\x02\xE2\xE3\x05\x9EP\x02\xE3\xE4\x05" +
        "\x0E\b\x02\xE4\xE5\x07\x03\x02\x02\xE5\xE6\x05\x9EP\x02\xE6\xFA\x03\x02" +
        "\x02\x02\xE7\xE8\x07\x19\x02\x02\xE8\xE9\x05\x9EP\x02\xE9\xEA\t\x03\x02" +
        "\x02\xEA\xEB\x05\x9EP\x02\xEB\xEC\x07\x03\x02\x02\xEC\xED\x05\x9EP\x02" +
        "\xED\xFA\x03\x02\x02\x02\xEE\xEF\x07\x19\x02\x02\xEF\xF0\x05\x9EP\x02" +
        "\xF0\xF1\t\x03\x02\x02\xF1\xF2\x05\x9EP\x02\xF2\xF3\x05\x0E\b\x02\xF3" +
        "\xFA\x03\x02\x02\x02\xF4\xF5\x07\x19\x02\x02\xF5\xF6\x05\x9EP\x02\xF6" +
        "\xF7\t\x03\x02\x02\xF7\xF8\x05\x9EP\x02\xF8\xFA\x03\x02\x02\x02\xF9\xDF" +
        "\x03\x02\x02\x02\xF9\xE7\x03\x02\x02\x02\xF9\xEE\x03\x02\x02\x02\xF9\xF4" +
        "\x03\x02\x02\x02\xFA\x07\x03\x02\x02\x02\xFB\xFC\x07\x1C\x02\x02\xFC\u0100" +
        "\x05\x9EP\x02\xFD\xFE\x05\n\x06\x02\xFE\xFF\x05\x9EP\x02\xFF\u0101\x03" +
        "\x02\x02\x02\u0100\xFD\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
        "\u0102\x03\x02\x02\x02\u0102\u0103\t\x03\x02\x02\u0103\u0104\x05\x9EP" +
        "\x02\u0104\u0105\x07\x03\x02\x02\u0105\u0106\x05\x9EP\x02\u0106\u0112" +
        "\x03\x02\x02\x02\u0107\u0108\x07\x1C\x02\x02\u0108\u010C\x05\x9EP\x02" +
        "\u0109\u010A\x05\n\x06\x02\u010A\u010B\x05\x9EP\x02\u010B\u010D\x03\x02" +
        "\x02\x02\u010C\u0109\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
        "\u010E\x03\x02\x02\x02\u010E\u010F\t\x03\x02\x02\u010F\u0110\x05\x9EP" +
        "\x02\u0110\u0112\x03\x02\x02\x02\u0111\xFB\x03\x02\x02\x02\u0111\u0107" +
        "\x03\x02\x02\x02\u0112\t\x03\x02\x02\x02\u0113\u0114\x05\x9CO\x02\u0114" +
        "\v\x03\x02\x02\x02\u0115\u0116\x07\x1B\x02\x02\u0116\u0117\x05\x9EP\x02" +
        "\u0117\u0118\x05\x0E\b\x02\u0118\u0119\x05f4\x02\u0119\u011A\x05\x9EP" +
        "\x02\u011A\r\x03\x02\x02\x02\u011B\u0122\x05\x10\t\x02\u011C\u011D\x07" +
        "*\x02\x02\u011D\u011E\x05\x9EP\x02\u011E\u011F\x05\x10\t\x02\u011F\u0121" +
        "\x03\x02\x02\x02\u0120\u011C\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02" +
        "\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0126\x03" +
        "\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u011B\x03\x02\x02\x02\u0125" +
        "\u0126\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x05\x9E" +
        "P\x02\u0128\x0F\x03\x02\x02\x02\u0129\u012B\t\x04\x02\x02\u012A\u0129" +
        "\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
        "\u012C\u012D\x05\x9EP\x02\u012D\u012E\x05\x12\n\x02\u012E\u0135\x05\x9E" +
        "P\x02\u012F\u0130\x07$\x02\x02\u0130\u0131\x05\x9EP\x02\u0131\u0132\x05" +
        "\x14\v\x02\u0132\u0134\x03\x02\x02\x02\u0133\u012F\x03\x02\x02\x02\u0134" +
        "\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02" +
        "\x02\x02\u0136\u0143\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
        "\u013F\x05\x14\v\x02\u0139\u013A\x07$\x02\x02\u013A\u013B\x05\x9EP\x02" +
        "\u013B\u013C\x05\x14\v\x02\u013C\u013E\x03\x02\x02\x02\u013D\u0139\x03" +
        "\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
        "\u0140\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02" +
        "\x02\x02\u0142\u012A\x03\x02\x02\x02\u0142\u0138\x03\x02\x02\x02\u0143" +
        "\x11\x03\x02\x02\x02\u0144\u0145\x05\x9CO\x02\u0145\x13\x03\x02\x02\x02" +
        "\u0146\u0147\x07\x04\x02\x02\u0147\u0148\x05\x9EP\x02\u0148\u014D\x05" +
        "\x16\f\x02\u0149\u014A\x07\x05\x02\x02\u014A\u014B\x05\x9EP\x02\u014B" +
        "\u014C\x05H%\x02\u014C\u014E\x03\x02\x02\x02\u014D\u0149\x03\x02\x02\x02" +
        "\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x07" +
        "\x06\x02\x02\u0150\u0151\x05\x9EP\x02\u0151\x15\x03\x02\x02\x02\u0152" +
        "\u0153\x05\x9CO\x02\u0153\u0154\x05\x9EP\x02\u0154\x17\x03\x02\x02\x02" +
        "\u0155\u0156\x07\x1A\x02\x02\u0156\u0158\x05\x9EP\x02\u0157\u0159\x05" +
        "\x1A\x0E\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
        "\u015A\x03\x02\x02\x02\u015A\u015B\x07\x07\x02\x02\u015B\u015D\x05\x9E" +
        "P\x02\u015C\u015E\x05B\"\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E\x03" +
        "\x02\x02\x02\u015E\u0166\x03\x02\x02\x02\u015F\u0160\x07\x03\x02\x02\u0160" +
        "\u0162\x05\x9EP\x02\u0161\u0163\x05B\"\x02\u0162\u0161\x03\x02\x02\x02" +
        "\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u015F\x03" +
        "\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166" +
        "\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u0166\x03\x02" +
        "\x02\x02\u0169\u016A\x07\b\x02\x02\u016A\u016B\x05\x9EP\x02\u016B\x19" +
        "\x03\x02\x02\x02\u016C\u016D\x07\x05\x02\x02\u016D\u016E\x05\x9CO\x02" +
        "\u016E\u016F\x05\x9EP\x02\u016F\x1B\x03\x02\x02\x02\u0170\u0177\x05\x1E" +
        "\x10\x02\u0171\u0172\x07*\x02\x02\u0172\u0173\x05\x9EP\x02\u0173\u0174" +
        "\x05\x1E\x10\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0171\x03\x02\x02\x02" +
        "\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03" +
        "\x02\x02\x02\u0178\x1D\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A" +
        "\u017B\x05\"\x12\x02\u017B\u0182\x05\x9EP\x02\u017C\u017D\x05 \x11\x02" +
        "\u017D\u017E\x05\"\x12\x02\u017E\u017F\x05\x9EP\x02\u017F\u0181\x03\x02" +
        "\x02\x02\u0180\u017C\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182" +
        "\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\x1F\x03\x02\x02" +
        "\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0186\x07\'\x02\x02\u0186\u018E" +
        "\x05\x9EP\x02\u0187\u0188\x07)\x02\x02\u0188\u018E\x05\x9EP\x02\u0189" +
        "\u018A\x07+\x02\x02\u018A\u018E\x05\x9EP\x02\u018B\u018C\x07\x13\x02\x02" +
        "\u018C\u018E\x05\x9EP\x02\u018D\u0185\x03\x02\x02\x02\u018D\u0187\x03" +
        "\x02\x02\x02\u018D\u0189\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E" +
        "!\x03\x02\x02\x02\u018F\u0192\x05$\x13\x02\u0190\u0192\x05*\x16\x02\u0191" +
        "\u018F\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192\u019A\x03\x02" +
        "\x02\x02\u0193\u0199\x07\x18\x02\x02\u0194\u0199\x05,\x17\x02\u0195\u0199" +
        "\x05.\x18\x02\u0196\u0199\x050\x19\x02\u0197\u0199\x056\x1C\x02\u0198" +
        "\u0193\x03\x02\x02\x02\u0198\u0194\x03\x02\x02\x02\u0198\u0195\x03\x02" +
        "\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199" +
        "\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02" +
        "\x02\x02\u019B\u01A7\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D" +
        "\u01A3\x07\x18\x02\x02\u019E\u01A3\x05,\x17\x02\u019F\u01A3\x05.\x18\x02" +
        "\u01A0\u01A3\x050\x19\x02\u01A1\u01A3\x056\x1C\x02\u01A2\u019D\x03\x02" +
        "\x02\x02\u01A2\u019E\x03\x02\x02\x02\u01A2\u019F\x03\x02\x02\x02\u01A2" +
        "\u01A0\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
        "\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
        "\u01A7\x03\x02\x02\x02\u01A6\u0191\x03\x02\x02\x02\u01A6\u01A2\x03\x02" +
        "\x02\x02\u01A7#\x03\x02\x02\x02\u01A8\u01AA\x05&\x14\x02\u01A9\u01A8\x03" +
        "\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB" +
        "\u01AC\x05(\x15\x02\u01AC%\x03\x02\x02\x02\u01AD\u01B0\x05\x9CO\x02\u01AE" +
        "\u01B0\x07\t\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02" +
        "\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2" +
        "\x07\n\x02\x02\u01B2\'\x03\x02\x02\x02\u01B3\u01B4\x05\x9CO\x02\u01B4";
    css3Parser._serializedATNSegment1 = ")\x03\x02\x02\x02\u01B5\u01B7\x05&\x14\x02\u01B6\u01B5\x03\x02\x02\x02" +
        "\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x07" +
        "\t\x02\x02\u01B9+\x03\x02\x02\x02\u01BA\u01BB\x07\v\x02\x02\u01BB\u01BC" +
        "\x05\x9CO\x02\u01BC-\x03\x02\x02\x02\u01BD\u01BE\x07\f\x02\x02\u01BE\u01C0" +
        "\x05\x9EP\x02\u01BF\u01C1\x05&\x14\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0" +
        "\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x05\x9C" +
        "O\x02\u01C3\u01CC\x05\x9EP\x02\u01C4\u01C5\t\x05\x02\x02\u01C5\u01C8\x05" +
        "\x9EP\x02\u01C6\u01C9\x05\x9CO\x02\u01C7\u01C9\x07.\x02\x02\u01C8\u01C6" +
        "\x03\x02\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
        "\u01CA\u01CB\x05\x9EP\x02\u01CB\u01CD\x03\x02\x02\x02\u01CC\u01C4\x03" +
        "\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
        "\u01CF\x07\x0E\x02\x02\u01CF/\x03\x02\x02\x02\u01D0\u01D2\x07\x05\x02" +
        "\x02\u01D1\u01D3\x07\x05\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3" +
        "\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D7\x05\x9CO\x02" +
        "\u01D5\u01D7\x052\x1A\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03" +
        "\x02\x02\x02\u01D71\x03\x02\x02\x02\u01D8\u01D9\x07@\x02\x02\u01D9\u01DA" +
        "\x05\x9EP\x02\u01DA\u01DB\x054\x1B\x02\u01DB\u01DC\x07\x06\x02\x02\u01DC" +
        "3\x03\x02\x02\x02\u01DD\u01E5\x07\'\x02\x02\u01DE\u01E5\x07(\x02\x02\u01DF" +
        "\u01E5\x07%\x02\x02\u01E0\u01E5\x07&\x02\x02\u01E1\u01E5\x07-\x02\x02" +
        "\u01E2\u01E5\x07.\x02\x02\u01E3\u01E5\x05\x9CO\x02\u01E4\u01DD\x03\x02" +
        "\x02\x02\u01E4\u01DE\x03\x02\x02\x02\u01E4\u01DF\x03\x02\x02\x02\u01E4" +
        "\u01E0\x03\x02\x02\x02\u01E4\u01E1\x03\x02\x02\x02\u01E4\u01E2\x03\x02" +
        "\x02\x02\u01E4\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6" +
        "\u01E8\x05\x9EP\x02\u01E7\u01E4\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02" +
        "\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA5\x03" +
        "\x02\x02\x02\u01EB\u01EC\x07,\x02\x02\u01EC\u01ED\x05\x9EP\x02\u01ED\u01EE" +
        "\x058\x1D\x02\u01EE\u01EF\x05\x9EP\x02\u01EF\u01F0\x07\x06\x02\x02\u01F0" +
        "7\x03\x02\x02\x02\u01F1\u01F8\x05$\x13\x02\u01F2\u01F8\x05*\x16\x02\u01F3" +
        "\u01F8\x07\x18\x02\x02\u01F4\u01F8\x05,\x17\x02\u01F5\u01F8\x05.\x18\x02" +
        "\u01F6\u01F8\x050\x19\x02\u01F7\u01F1\x03\x02\x02\x02\u01F7\u01F2\x03" +
        "\x02\x02\x02\u01F7\u01F3\x03\x02\x02\x02\u01F7\u01F4\x03\x02\x02\x02\u01F7" +
        "\u01F5\x03\x02\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F89\x03\x02\x02" +
        "\x02\u01F9\u01FA\x07\x0F\x02\x02\u01FA\u0202\x05\x9EP\x02\u01FB\u01FC" +
        "\x07*\x02\x02\u01FC\u0202\x05\x9EP\x02\u01FD\u01FE\x07\x13\x02\x02\u01FE" +
        "\u0202\x05\x9EP\x02\u01FF\u0200\x07\r\x02\x02\u0200\u0202\x05\x9EP\x02" +
        "\u0201\u01F9\x03\x02\x02\x02\u0201\u01FB\x03\x02\x02\x02\u0201\u01FD\x03" +
        "\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0202;\x03\x02\x02\x02\u0203" +
        "\u0204\x05\x9CO\x02\u0204\u0205\x05\x9EP\x02\u0205\u020D\x03\x02\x02\x02" +
        "\u0206\u0207\x07=\x02\x02\u0207\u020D\x05\x9EP\x02\u0208\u0209\x07\t\x02" +
        "\x02\u0209\u020D\x05\x9CO\x02\u020A\u020B\x07\x10\x02\x02\u020B\u020D" +
        "\x05\x9CO\x02\u020C\u0203\x03\x02\x02\x02\u020C\u0206\x03\x02\x02\x02" +
        "\u020C\u0208\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D=\x03\x02" +
        "\x02\x02\u020E\u020F\x05\x1C\x0F\x02\u020F\u0210\x07\x07\x02\x02\u0210" +
        "\u0212\x05\x9EP\x02\u0211\u0213\x05@!\x02\u0212\u0211\x03\x02\x02\x02" +
        "\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x07" +
        "\b\x02\x02\u0215\u0216\x05\x9EP\x02\u0216\u0226\x03\x02\x02\x02\u0217" +
        "\u0219\x05Z.\x02\u0218\u0217\x03\x02\x02\x02\u0219\u021C\x03\x02\x02\x02" +
        "\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x03" +
        "\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021E\x07\x07\x02\x02\u021E" +
        "\u0220\x05\x9EP\x02\u021F\u0221\x05@!\x02\u0220\u021F\x03\x02\x02\x02" +
        "\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07" +
        "\b\x02\x02\u0223\u0224\x05\x9EP\x02\u0224\u0226\x03\x02\x02\x02\u0225" +
        "\u020E\x03\x02\x02\x02\u0225\u021A\x03\x02\x02\x02\u0226?\x03\x02\x02" +
        "\x02\u0227\u0228\x07\x03\x02\x02\u0228\u022A\x05\x9EP\x02\u0229\u0227" +
        "\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02" +
        "\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03\x02\x02\x02\u022D\u022B\x03" +
        "\x02\x02\x02\u022E\u022F\x05B\"\x02\u022F\u0237\x05\x9EP\x02\u0230\u0231" +
        "\x07\x03\x02\x02\u0231\u0233\x05\x9EP\x02\u0232\u0234\x05B\"\x02\u0233" +
        "\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03\x02" +
        "\x02\x02\u0235\u0230\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237" +
        "\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238A\x03\x02\x02" +
        "\x02\u0239\u0237\x03\x02\x02\x02\u023A\u023B\x05<\x1F\x02\u023B\u023C" +
        "\x07\x05\x02\x02\u023C\u023D\x05\x9EP\x02\u023D\u023F\x05H%\x02\u023E" +
        "\u0240\x05D#\x02\u023F\u023E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02" +
        "\u0240\u0247\x03\x02\x02\x02\u0241\u0242\x05<\x1F\x02\u0242\u0243\x07" +
        "\x05\x02\x02\u0243\u0244\x05\x9EP\x02\u0244\u0245\x05F$\x02\u0245\u0247" +
        "\x03\x02\x02\x02\u0246\u023A\x03\x02\x02\x02\u0246\u0241\x03\x02\x02\x02" +
        "\u0247C\x03\x02\x02\x02\u0248\u0249\x07\x1E\x02\x02\u0249\u024A\x05\x9E" +
        "P\x02\u024AE\x03\x02\x02\x02\u024B\u0251\x05Z.\x02\u024C\u0251\x05b2\x02" +
        "\u024D\u024E\x05^0\x02\u024E\u024F\x05\x9EP\x02\u024F\u0251\x03\x02\x02" +
        "\x02\u0250\u024B\x03\x02\x02\x02\u0250\u024C\x03\x02\x02\x02\u0250\u024D" +
        "\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02" +
        "\u0252\u0253\x03\x02\x02\x02\u0253G\x03\x02\x02\x02\u0254\u025B\x05J&" +
        "\x02\u0255\u0257\x05:\x1E\x02\u0256\u0255\x03\x02\x02\x02\u0256\u0257" +
        "\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025A\x05J&\x02\u0259" +
        "\u0256\x03\x02\x02\x02\u025A\u025D\x03\x02\x02\x02\u025B\u0259\x03\x02" +
        "\x02\x02\u025B\u025C\x03\x02\x02\x02\u025CI\x03\x02\x02\x02\u025D\u025B" +
        "\x03\x02\x02\x02\u025E\u025F\x05R*\x02\u025F\u0260\x05\x9EP\x02\u0260" +
        "\u0279\x03\x02\x02\x02\u0261\u0262\x05T+\x02\u0262\u0263\x05\x9EP\x02" +
        "\u0263\u0279\x03\x02\x02\x02\u0264\u0265\x05V,\x02\u0265\u0266\x05\x9E" +
        "P\x02\u0266\u0279\x03\x02\x02\x02\u0267\u0268\x07.\x02\x02\u0268\u0279" +
        "\x05\x9EP\x02\u0269\u026A\x07!\x02\x02\u026A\u0279\x05\x9EP\x02\u026B" +
        "\u026C\x05\x9CO\x02\u026C\u026D\x05\x9EP\x02\u026D\u0279\x03\x02\x02\x02" +
        "\u026E\u0279\x05x=\x02\u026F\u0270\x07 \x02\x02\u0270\u0279\x05\x9EP\x02" +
        "\u0271\u0279\x05P)\x02\u0272\u0279\x05z>\x02\u0273\u0279\x05L\'\x02\u0274" +
        "\u0275\x05X-\x02\u0275\u0276\x05\x9EP\x02\u0276\u0279\x03\x02\x02\x02" +
        "\u0277\u0279\x05N(\x02\u0278\u025E\x03\x02\x02\x02\u0278\u0261\x03\x02" +
        "\x02\x02\u0278\u0264\x03\x02\x02\x02\u0278\u0267\x03\x02\x02\x02\u0278" +
        "\u0269\x03\x02\x02\x02\u0278\u026B\x03\x02\x02\x02\u0278\u026E\x03\x02" +
        "\x02\x02\u0278\u026F\x03\x02\x02\x02\u0278\u0271\x03\x02\x02\x02\u0278" +
        "\u0272\x03\x02\x02\x02\u0278\u0273\x03\x02\x02\x02\u0278\u0274\x03\x02" +
        "\x02\x02\u0278\u0277\x03\x02\x02\x02\u0279K\x03\x02\x02\x02\u027A\u027B" +
        "\x07@\x02\x02\u027B\u027C\x05\x9EP\x02\u027C\u027D\x05H%\x02\u027D\u027E" +
        "\x07\x06\x02\x02\u027E\u027F\x05\x9EP\x02\u027FM\x03\x02\x02\x02\u0280" +
        "\u0281\x07<\x02\x02\u0281\u0282\x05\x9EP\x02\u0282\u0283\x05H%\x02\u0283" +
        "\u0284\x07\x06\x02\x02\u0284\u0285\x05\x9EP\x02\u0285O\x03\x02\x02\x02" +
        "\u0286\u0287\x07\x18\x02\x02\u0287\u0288\x05\x9EP\x02\u0288Q\x03\x02\x02" +
        "\x02\u0289\u028B\t\x06\x02\x02\u028A\u0289\x03\x02\x02\x02\u028A\u028B" +
        "\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028D\x07-\x02\x02" +
        "\u028DS\x03\x02\x02\x02\u028E\u0290\t\x06\x02\x02\u028F\u028E\x03\x02" +
        "\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291" +
        "\u0292\x07\x1F\x02\x02\u0292U\x03\x02\x02\x02\u0293\u0295\t\x06\x02\x02" +
        "\u0294\u0293\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0296\x03" +
        "\x02\x02\x02\u0296\u0297\x07%\x02\x02\u0297W\x03\x02\x02\x02\u0298\u029A" +
        "\t\x06\x02\x02\u0299\u0298\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02" +
        "\u029A\u029B\x03\x02\x02\x02\u029B\u029C\x07&\x02\x02\u029CY\x03\x02\x02" +
        "\x02\u029D\u029E\x05\x9CO\x02\u029E\u029F\x05\x9EP\x02\u029F\u02DF\x03" +
        "\x02\x02\x02\u02A0\u02A1\x05R*\x02\u02A1\u02A2\x05\x9EP\x02\u02A2\u02DF" +
        "\x03\x02\x02\x02\u02A3\u02A4\x05T+\x02\u02A4\u02A5\x05\x9EP\x02\u02A5" +
        "\u02DF\x03\x02\x02\x02\u02A6\u02A7\x05V,\x02\u02A7\u02A8\x05\x9EP\x02" +
        "\u02A8\u02DF\x03\x02\x02\x02\u02A9\u02AA\x05X-\x02\u02AA\u02AB\x05\x9E" +
        "P\x02\u02AB\u02DF\x03\x02\x02\x02\u02AC\u02AD\x07.\x02\x02\u02AD\u02DF" +
        "\x05\x9EP\x02\u02AE\u02AF\x07 \x02\x02\u02AF\u02DF\x05\x9EP\x02\u02B0" +
        "\u02B1\x07\x18\x02\x02\u02B1\u02DF\x05\x9EP\x02\u02B2\u02B3\x07!\x02\x02" +
        "\u02B3\u02DF\x05\x9EP\x02\u02B4\u02B5\x07\x16\x02\x02\u02B5\u02DF\x05" +
        "\x9EP\x02\u02B6\u02B7\x07\x17\x02\x02\u02B7\u02DF\x05\x9EP\x02\u02B8\u02B9" +
        "\x07\x05\x02\x02\u02B9\u02DF\x05\x9EP\x02\u02BA\u02BB\x07@\x02\x02\u02BB" +
        "\u02C0\x05\x9EP\x02\u02BC\u02BF\x05Z.\x02\u02BD\u02BF\x05`1\x02\u02BE" +
        "\u02BC\x03\x02\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\u02C2\x03\x02" +
        "\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1" +
        "\u02C3\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C4\x07\x06" +
        "\x02\x02\u02C4\u02C5\x05\x9EP\x02\u02C5\u02DF\x03\x02\x02\x02\u02C6\u02C7" +
        "\x07\x04\x02\x02\u02C7\u02CC\x05\x9EP\x02\u02C8\u02CB\x05Z.\x02\u02C9" +
        "\u02CB\x05`1\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02C9\x03\x02\x02\x02" +
        "\u02CB\u02CE\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03" +
        "\x02\x02\x02\u02CD\u02CF\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF" +
        "\u02D0\x07\x06\x02\x02\u02D0\u02D1\x05\x9EP\x02\u02D1\u02DF\x03\x02\x02" +
        "\x02\u02D2\u02D3\x07\f\x02\x02\u02D3\u02D8\x05\x9EP\x02\u02D4\u02D7\x05" +
        "Z.\x02\u02D5\u02D7\x05`1\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D5\x03" +
        "\x02\x02\x02\u02D7\u02DA\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D8" +
        "\u02D9\x03\x02\x02\x02\u02D9\u02DB\x03\x02\x02\x02\u02DA\u02D8\x03\x02" +
        "\x02\x02\u02DB\u02DC\x07\x0E\x02\x02\u02DC\u02DD\x05\x9EP\x02\u02DD\u02DF" +
        "\x03\x02\x02\x02\u02DE\u029D\x03\x02\x02\x02\u02DE\u02A0\x03\x02\x02\x02" +
        "\u02DE\u02A3\x03\x02\x02\x02\u02DE\u02A6\x03\x02\x02\x02\u02DE\u02A9\x03" +
        "\x02\x02\x02\u02DE\u02AC\x03\x02\x02\x02\u02DE\u02AE\x03\x02\x02\x02\u02DE" +
        "\u02B0\x03\x02\x02\x02\u02DE\u02B2\x03\x02\x02\x02\u02DE\u02B4\x03\x02" +
        "\x02\x02\u02DE\u02B6\x03\x02\x02\x02\u02DE\u02B8\x03\x02\x02\x02\u02DE" +
        "\u02BA\x03\x02\x02\x02\u02DE\u02C6\x03\x02\x02\x02\u02DE\u02D2\x03\x02" +
        "\x02\x02\u02DF[\x03\x02\x02\x02\u02E0\u02E1\x05^0\x02\u02E1\u02E5\x05" +
        "\x9EP\x02\u02E2\u02E4\x05Z.\x02\u02E3\u02E2\x03\x02\x02\x02\u02E4\u02E7" +
        "\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02" +
        "\u02E6\u02EB\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8\u02EC\x05" +
        "b2\x02\u02E9\u02EA\x07\x03\x02\x02\u02EA\u02EC\x05\x9EP\x02\u02EB\u02E8" +
        "\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC]\x03\x02\x02\x02\u02ED" +
        "\u02EE\x07\x11\x02\x02\u02EE\u02EF\x05\x9CO\x02\u02EF_\x03\x02\x02\x02" +
        "\u02F0\u02FB\x05b2\x02\u02F1\u02F2\x05^0\x02\u02F2\u02F3\x05\x9EP\x02" +
        "\u02F3\u02FB\x03\x02\x02\x02\u02F4\u02F5\x07\x03\x02\x02\u02F5\u02FB\x05" +
        "\x9EP\x02\u02F6\u02F7\x07\x14\x02\x02\u02F7\u02FB\x05\x9EP\x02\u02F8\u02F9" +
        "\x07\x15\x02\x02\u02F9\u02FB\x05\x9EP\x02\u02FA\u02F0\x03\x02\x02\x02" +
        "\u02FA\u02F1\x03\x02\x02\x02\u02FA\u02F4\x03\x02\x02\x02\u02FA\u02F6\x03" +
        "\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FBa\x03\x02\x02\x02\u02FC" +
        "\u02FD\x07\x07\x02\x02\u02FD\u0309\x05\x9EP\x02\u02FE\u0308\x05@!\x02" +
        "\u02FF\u0308\x05d3\x02\u0300\u0308\x05Z.\x02\u0301\u0308\x05b2\x02\u0302" +
        "\u0303\x05^0\x02\u0303\u0304\x05\x9EP\x02\u0304\u0308\x03\x02\x02\x02" +
        "\u0305\u0306\x07\x03\x02\x02\u0306\u0308\x05\x9EP\x02\u0307\u02FE\x03" +
        "\x02\x02\x02\u0307\u02FF\x03\x02\x02\x02\u0307\u0300\x03\x02\x02\x02\u0307" +
        "\u0301\x03\x02\x02\x02\u0307\u0302\x03\x02\x02\x02\u0307\u0305\x03\x02" +
        "\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309" +
        "\u030A\x03\x02\x02\x02\u030A\u030C\x03\x02\x02\x02\u030B\u0309\x03\x02" +
        "\x02\x02\u030C\u030D\x07\b\x02\x02\u030D\u030E\x05\x9EP\x02\u030Ec\x03" +
        "\x02\x02\x02\u030F\u031A\x05> \x02\u0310\u031A\x05\f\x07\x02\u0311\u031A" +
        "\x05\x18\r\x02\u0312\u031A\x05\x82B\x02\u0313\u031A\x05\x86D\x02\u0314" +
        "\u031A\x05h5\x02\u0315\u031A\x05\x8CG\x02\u0316\u031A\x05\x8EH\x02\u0317" +
        "\u031A\x05\x90I\x02\u0318\u031A\x05\\/\x02\u0319\u030F\x03\x02\x02\x02" +
        "\u0319\u0310\x03\x02\x02\x02\u0319\u0311\x03\x02\x02\x02\u0319\u0312\x03" +
        "\x02\x02\x02\u0319\u0313\x03\x02\x02\x02\u0319\u0314\x03\x02\x02\x02\u0319" +
        "\u0315\x03\x02\x02\x02\u0319\u0316\x03\x02\x02\x02\u0319\u0317\x03\x02" +
        "\x02\x02\u0319\u0318\x03\x02\x02\x02\u031Ae\x03\x02\x02\x02\u031B\u031C" +
        "\x07\x07\x02\x02\u031C\u0320\x05\x9EP\x02\u031D\u031F\x05d3\x02\u031E" +
        "\u031D\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02" +
        "\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322" +
        "\u0320\x03\x02\x02\x02\u0323\u0324\x07\b\x02\x02\u0324\u0325\x05\x9EP" +
        "\x02\u0325g\x03\x02\x02\x02\u0326\u0327\x073\x02\x02\u0327\u0328\x05\x9E" +
        "P\x02\u0328\u0329\x05j6\x02\u0329\u032A\x05\x9EP\x02\u032A\u032B\x05f" +
        "4\x02\u032Bi\x03\x02\x02\x02\u032C\u0331\x05n8\x02\u032D\u0331\x05p9\x02" +
        "\u032E\u0331\x05r:\x02\u032F\u0331\x05l7\x02\u0330\u032C\x03\x02\x02\x02" +
        "\u0330\u032D\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u032F\x03" +
        "\x02\x02\x02\u0331k\x03\x02\x02\x02\u0332\u0333\x07\x04\x02\x02\u0333" +
        "\u0334\x05\x9EP\x02\u0334\u0335\x05j6\x02\u0335\u0336\x05\x9EP\x02\u0336" +
        "\u0337\x07\x06\x02\x02\u0337\u033B\x03\x02\x02\x02\u0338\u033B\x05t;\x02" +
        "\u0339\u033B\x05v<\x02\u033A\u0332\x03\x02\x02\x02\u033A\u0338\x03\x02" +
        "\x02\x02\u033A\u0339\x03\x02\x02\x02\u033Bm\x03\x02\x02\x02\u033C\u033D" +
        "\x07#\x02\x02\u033D\u033E\x05\x9EP\x02\u033E\u033F\x07\x13\x02\x02\u033F" +
        "\u0340\x05\x9EP\x02\u0340\u0341\x05l7\x02\u0341o\x03\x02\x02\x02\u0342" +
        "\u034C\x05l7\x02\u0343\u0344\x05\x9EP\x02\u0344\u0345\x07\x13\x02\x02" +
        "\u0345\u0346\x05\x9EP\x02\u0346\u0347\x07$\x02\x02\u0347\u0348\x05\x9E" +
        "P\x02\u0348\u0349\x07\x13\x02\x02\u0349\u034A\x05\x9EP\x02\u034A\u034B" +
        "\x05l7\x02\u034B\u034D\x03\x02\x02\x02\u034C\u0343\x03\x02\x02\x02\u034D" +
        "\u034E\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034E\u034F\x03\x02" +
        "\x02\x02\u034Fq\x03\x02\x02\x02\u0350\u035A\x05l7\x02\u0351\u0352\x05" +
        "\x9EP\x02\u0352\u0353\x07\x13\x02\x02\u0353\u0354\x05\x9EP\x02\u0354\u0355" +
        "\x074\x02\x02\u0355\u0356\x05\x9EP\x02\u0356\u0357\x07\x13\x02\x02\u0357" +
        "\u0358\x05\x9EP\x02\u0358\u0359\x05l7\x02\u0359\u035B\x03\x02\x02\x02" +
        "\u035A\u0351\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035A\x03" +
        "\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035Ds\x03\x02\x02\x02\u035E" +
        "\u035F\x07\x04\x02\x02\u035F\u0360\x05\x9EP\x02\u0360\u0361\x05B\"\x02" +
        "\u0361\u0362\x07\x06\x02\x02\u0362u\x03\x02\x02\x02\u0363\u0368\t\x07" +
        "\x02\x02\u0364\u0367\x05Z.\x02\u0365\u0367\x05`1\x02\u0366\u0364\x03\x02" +
        "\x02\x02\u0366\u0365\x03\x02\x02\x02\u0367\u036A\x03\x02\x02\x02\u0368" +
        "\u0366\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036B\x03\x02" +
        "\x02\x02\u036A\u0368\x03\x02\x02\x02\u036B\u036C\x07\x06\x02\x02\u036C" +
        "w\x03\x02\x02\x02\u036D\u036E\x07>\x02\x02\u036E\u036F\x05\x9EP\x02\u036F" +
        "\u0370\x07=\x02\x02\u0370\u0371\x05\x9EP\x02\u0371\u0372\x07\x06\x02\x02" +
        "\u0372\u0373\x05\x9EP\x02\u0373y\x03\x02\x02\x02\u0374\u0375\x078\x02" +
        "\x02\u0375\u0376\x05\x9EP\x02\u0376\u0377\x05|?\x02\u0377\u0378\x07\x06" +
        "\x02\x02\u0378\u0379\x05\x9EP\x02\u0379{\x03\x02\x02\x02\u037A\u0385\x05" +
        "~@\x02\u037B\u037C\x07\x13\x02\x02\u037C\u037D\x05\x9EP\x02\u037D\u037E" +
        "\t\x06\x02\x02\u037E\u037F\x05\x9EP\x02\u037F\u0380\x07\x13\x02\x02\u0380" +
        "\u0381\x05\x9EP\x02\u0381\u0382\x05~@\x02\u0382\u0384\x03\x02\x02\x02" +
        "\u0383\u037B\x03\x02\x02\x02\u0384\u0387\x03\x02\x02\x02\u0385\u0383\x03" +
        "\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386}\x03\x02\x02\x02\u0387" +
        "\u0385\x03\x02\x02\x02\u0388\u0394\x05\x80A\x02\u0389\u038A\x07\t\x02" +
        "\x02\u038A\u038B\x05\x9EP\x02\u038B\u038C\x05\x80A\x02\u038C\u0393\x03" +
        "\x02\x02\x02\u038D\u038E\x07\x0F\x02\x02\u038E\u038F\x05\x9EP\x02\u038F" +
        "\u0390\x05R*\x02\u0390\u0391\x05\x9EP\x02\u0391\u0393\x03\x02\x02\x02" +
        "\u0392\u0389\x03\x02\x02\x02\u0392\u038D\x03\x02\x02\x02\u0393\u0396\x03" +
        "\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395" +
        "\x7F\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0397\u0398\x05R*\x02" +
        "\u0398\u0399\x05\x9EP\x02\u0399\u03AA\x03\x02\x02\x02\u039A\u039B\x05" +
        "V,\x02\u039B\u039C\x05\x9EP\x02\u039C\u03AA\x03\x02\x02\x02\u039D\u039E" +
        "\x05X-\x02\u039E\u039F\x05\x9EP\x02\u039F\u03AA\x03\x02\x02\x02\u03A0" +
        "\u03A1\x05T+\x02\u03A1\u03A2\x05\x9EP\x02\u03A2\u03AA\x03\x02\x02\x02" +
        "\u03A3\u03A4\x07\x04\x02\x02\u03A4\u03A5\x05\x9EP\x02\u03A5\u03A6\x05" +
        "|?\x02\u03A6\u03A7\x07\x06\x02\x02\u03A7\u03A8\x05\x9EP\x02\u03A8\u03AA" +
        "\x03\x02\x02\x02\u03A9\u0397\x03\x02\x02\x02\u03A9\u039A\x03\x02\x02\x02" +
        "\u03A9\u039D\x03\x02\x02\x02\u03A9\u03A0\x03\x02\x02\x02\u03A9\u03A3\x03" +
        "\x02\x02\x02\u03AA\x81\x03\x02\x02\x02\u03AB\u03AC\x072\x02\x02\u03AC" +
        "\u03AD\x05\x9EP\x02\u03AD\u03AE\x07\x07\x02\x02\u03AE\u03B0\x05\x9EP\x02" +
        "\u03AF\u03B1\x05\x84C\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03" +
        "\x02\x02\x02\u03B1\u03B9\x03\x02\x02\x02\u03B2\u03B3\x07\x03\x02\x02\u03B3" +
        "\u03B5\x05\x9EP\x02\u03B4\u03B6\x05\x84C\x02\u03B5\u03B4\x03\x02\x02\x02" +
        "\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B8\x03\x02\x02\x02\u03B7\u03B2\x03" +
        "\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9" +
        "\u03BA\x03\x02\x02\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03B9\x03\x02" +
        "\x02\x02\u03BC\u03BD\x07\b\x02\x02\u03BD\u03BE\x05\x9EP\x02\u03BE\x83" +
        "\x03\x02\x02\x02\u03BF\u03C0\x05<\x1F\x02\u03C0\u03C1\x07\x05\x02\x02" +
        "\u03C1\u03C2\x05\x9EP\x02\u03C2\u03C3\x05H%\x02\u03C3\u03CA\x03\x02\x02" +
        "\x02\u03C4\u03C5\x05<\x1F\x02\u03C5\u03C6\x07\x05\x02\x02\u03C6\u03C7" +
        "\x05\x9EP\x02\u03C7\u03C8\x05F$\x02\u03C8\u03CA\x03\x02\x02\x02\u03C9" +
        "\u03BF\x03\x02\x02\x02\u03C9\u03C4\x03\x02\x02\x02\u03CA\x85\x03\x02\x02" +
        "\x02\u03CB\u03CC\x075\x02\x02\u03CC\u03CD\x05\x9EP\x02\u03CD\u03CE\x07" +
        "\x13\x02\x02\u03CE\u03CF\x05\x9EP\x02\u03CF\u03D0\x05\x9CO\x02\u03D0\u03D1" +
        "\x05\x9EP\x02\u03D1\u03D2\x07\x07\x02\x02\u03D2\u03D3\x05\x9EP\x02\u03D3" +
        "\u03D4\x05\x88E\x02\u03D4\u03D5\x07\b\x02\x02\u03D5\u03D6\x05\x9EP\x02" +
        "\u03D6\x87\x03\x02\x02\x02\u03D7\u03D8\x05\x8AF\x02\u03D8\u03D9\x07\x07" +
        "\x02\x02\u03D9\u03DB\x05\x9EP\x02\u03DA\u03DC\x05@!\x02\u03DB\u03DA\x03" +
        "\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD" +
        "\u03DE\x07\b\x02\x02\u03DE\u03DF\x05\x9EP\x02\u03DF\u03E1\x03\x02\x02" +
        "\x02\u03E0\u03D7\x03\x02\x02\x02\u03E1\u03E4\x03\x02\x02\x02\u03E2\u03E0" +
        "\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\x89\x03\x02\x02\x02" +
        "\u03E4\u03E2\x03\x02\x02\x02\u03E5\u03E6\t\b\x02\x02\u03E6\u03EE\x05\x9E" +
        "P\x02\u03E7\u03E8\x07*\x02\x02\u03E8\u03E9\x05\x9EP\x02\u03E9\u03EA\t" +
        "\b\x02\x02\u03EA\u03EB\x05\x9EP\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC" +
        "\u03E7\x03\x02\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE\u03EC\x03\x02" +
        "\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\x8B\x03\x02\x02\x02\u03F0\u03EE" +
        "\x03\x02\x02\x02\u03F1\u03F2\x079\x02\x02\u03F2\u03F3\x05\x9EP\x02\u03F3" +
        "\u03F4\x07\x07\x02\x02\u03F4\u03F6\x05\x9EP\x02\u03F5\u03F7\x05@!\x02" +
        "\u03F6\u03F5\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03" +
        "\x02\x02\x02\u03F8\u03F9\x07\b\x02\x02\u03F9\u03FA\x05\x9EP\x02\u03FA" +
        "\x8D\x03\x02\x02\x02\u03FB\u03FC\x07:\x02\x02\u03FC\u03FD\x05\x9EP\x02" +
        "\u03FD\u03FE\x05\x9CO\x02\u03FE\u03FF\x05\x9EP\x02\u03FF\u0400\x07\x07" +
        "\x02\x02\u0400\u0402\x05\x9EP\x02\u0401\u0403\x05@!\x02\u0402\u0401\x03" +
        "\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404" +
        "\u0405\x07\b\x02\x02\u0405\u0406\x05\x9EP\x02\u0406\x8F\x03\x02\x02\x02" +
        "\u0407\u0408\x07;\x02\x02\u0408\u0409\x05\x9EP\x02\u0409\u040A\x05\x92" +
        "J\x02\u040A\u040B\x05\x9EP\x02\u040B\u040C\x07\x07\x02\x02\u040C\u0410" +
        "\x05\x9EP\x02\u040D\u040F\x05\x96L\x02\u040E\u040D\x03\x02\x02\x02\u040F" +
        "\u0412\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410\u0411\x03\x02" +
        "\x02\x02\u0411\u0413\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0413" +
        "\u0414\x07\b\x02\x02\u0414\u0415\x05\x9EP\x02\u0415\x91\x03\x02\x02\x02" +
        "\u0416\u041E\x05\x94K\x02\u0417\u0418\x05\x9EP\x02\u0418\u0419\x07*\x02" +
        "\x02\u0419\u041A\x05\x9EP\x02\u041A\u041B\x05\x94K\x02\u041B\u041D\x03" +
        "\x02\x02\x02\u041C\u0417\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E" +
        "\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\x93\x03\x02\x02" +
        "\x02\u0420\u041E\x03\x02\x02\x02\u0421\u042C\x07.\x02\x02\u0422\u0428" +
        "\x05\x9CO\x02\u0423\u0424\x05\x9EP\x02\u0424\u0425\x05\x9CO\x02\u0425" +
        "\u0427\x03\x02\x02\x02\u0426\u0423\x03\x02\x02\x02\u0427\u042A\x03\x02" +
        "\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429" +
        "\u042C\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042B\u0421\x03\x02" +
        "\x02\x02\u042B\u0422\x03\x02\x02\x02\u042C\x95\x03\x02\x02\x02\u042D\u042E" +
        "\x05\x98M\x02\u042E\u042F\x05\x9EP\x02\u042F\u0430\x07\x07\x02\x02\u0430" +
        "\u0432\x05\x9EP\x02\u0431\u0433\x05\x9AN\x02\u0432\u0431\x03\x02\x02\x02" +
        "\u0432\u0433\x03\x02\x02\x02\u0433\u043C\x03\x02\x02\x02\u0434\u0435\x05" +
        "\x9EP\x02\u0435\u0436\x07\x03\x02\x02\u0436\u0438\x05\x9EP\x02\u0437\u0439" +
        "\x05\x9AN\x02\u0438\u0437\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02" +
        "\u0439\u043B\x03\x02\x02\x02\u043A\u0434\x03\x02\x02\x02\u043B\u043E\x03" +
        "\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D" +
        "\u043F\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F\u0440\x07\b\x02" +
        "\x02\u0440\u0441\x05\x9EP\x02\u0441\x97\x03\x02\x02\x02\u0442\u0443\x05" +
        "^0\x02\u0443\x99\x03\x02\x02\x02\u0444\u0445\x05\x9CO\x02\u0445\u0446" +
        "\x05\x9EP\x02\u0446\u0447\x07\x05\x02\x02\u0447\u0448\x05\x9EP\x02\u0448" +
        "\u044E\x05R*\x02\u0449\u044A\x05\x9EP\x02\u044A\u044B\x05R*\x02\u044B" +
        "\u044D\x03\x02\x02\x02\u044C\u0449\x03\x02\x02\x02\u044D\u0450\x03\x02" +
        "\x02\x02\u044E\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F" +
        "\x9B\x03\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0452\t\t\x02\x02" +
        "\u0452\x9D\x03\x02\x02\x02\u0453\u0455\t\n\x02\x02\u0454\u0453\x03\x02" +
        "\x02\x02\u0455\u0458\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456" +
        "\u0457\x03\x02\x02\x02\u0457\x9F\x03\x02\x02\x02\u0458\u0456\x03\x02\x02" +
        "\x02l\xA5\xAA\xB1\xB6\xBD\xC2\xC9\xCE\xDD\xF9\u0100\u010C\u0111\u0122" +
        "\u0125\u012A\u0135\u013F\u0142\u014D\u0158\u015D\u0162\u0166\u0177\u0182" +
        "\u018D\u0191\u0198\u019A\u01A2\u01A4\u01A6\u01A9\u01AF\u01B6\u01C0\u01C8" +
        "\u01CC\u01D2\u01D6\u01E4\u01E9\u01F7\u0201\u020C\u0212\u021A\u0220\u0225" +
        "\u022B\u0233\u0237\u023F\u0246\u0250\u0252\u0256\u025B\u0278\u028A\u028F" +
        "\u0294\u0299\u02BE\u02C0\u02CA\u02CC\u02D6\u02D8\u02DE\u02E5\u02EB\u02FA" +
        "\u0307\u0309\u0319\u0320\u0330\u033A\u034E\u035C\u0366\u0368\u0385\u0392" +
        "\u0394\u03A9\u03B0\u03B5\u03B9\u03C9\u03DB\u03E2\u03EE\u03F6\u0402\u0410" +
        "\u041E\u0428\u042B\u0432\u0438\u043C\u044E\u0456";
    css3Parser._serializedATN = Utils.join([
        css3Parser._serializedATNSegment0,
        css3Parser._serializedATNSegment1,
    ], "");
    return css3Parser;
}(Parser_1.Parser));
exports.css3Parser = css3Parser;
var StylesheetContext = /** @class */ (function (_super) {
    __extends(StylesheetContext, _super);
    function StylesheetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StylesheetContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    StylesheetContext.prototype.charset = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CharsetContext);
        }
        else {
            return this.getRuleContext(i, CharsetContext);
        }
    };
    StylesheetContext.prototype.imports = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportsContext);
        }
        else {
            return this.getRuleContext(i, ImportsContext);
        }
    };
    StylesheetContext.prototype.namespace = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceContext);
        }
        else {
            return this.getRuleContext(i, NamespaceContext);
        }
    };
    StylesheetContext.prototype.nestedStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NestedStatementContext);
        }
        else {
            return this.getRuleContext(i, NestedStatementContext);
        }
    };
    StylesheetContext.prototype.Comment = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Comment);
        }
        else {
            return this.getToken(css3Parser.Comment, i);
        }
    };
    StylesheetContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Space);
        }
        else {
            return this.getToken(css3Parser.Space, i);
        }
    };
    StylesheetContext.prototype.Cdo = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Cdo);
        }
        else {
            return this.getToken(css3Parser.Cdo, i);
        }
    };
    StylesheetContext.prototype.Cdc = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Cdc);
        }
        else {
            return this.getToken(css3Parser.Cdc, i);
        }
    };
    Object.defineProperty(StylesheetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_stylesheet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StylesheetContext.prototype.enterRule = function (listener) {
        if (listener.enterStylesheet) {
            listener.enterStylesheet(this);
        }
    };
    // @Override
    StylesheetContext.prototype.exitRule = function (listener) {
        if (listener.exitStylesheet) {
            listener.exitStylesheet(this);
        }
    };
    // @Override
    StylesheetContext.prototype.accept = function (visitor) {
        if (visitor.visitStylesheet) {
            return visitor.visitStylesheet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StylesheetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StylesheetContext = StylesheetContext;
var CharsetContext = /** @class */ (function (_super) {
    __extends(CharsetContext, _super);
    function CharsetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CharsetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_charset; },
        enumerable: true,
        configurable: true
    });
    CharsetContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return CharsetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharsetContext = CharsetContext;
var GoodCharsetContext = /** @class */ (function (_super) {
    __extends(GoodCharsetContext, _super);
    function GoodCharsetContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GoodCharsetContext.prototype.Charset = function () { return this.getToken(css3Parser.Charset, 0); };
    GoodCharsetContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    GoodCharsetContext.prototype.String = function () { return this.getToken(css3Parser.String, 0); };
    // @Override
    GoodCharsetContext.prototype.enterRule = function (listener) {
        if (listener.enterGoodCharset) {
            listener.enterGoodCharset(this);
        }
    };
    // @Override
    GoodCharsetContext.prototype.exitRule = function (listener) {
        if (listener.exitGoodCharset) {
            listener.exitGoodCharset(this);
        }
    };
    // @Override
    GoodCharsetContext.prototype.accept = function (visitor) {
        if (visitor.visitGoodCharset) {
            return visitor.visitGoodCharset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GoodCharsetContext;
}(CharsetContext));
exports.GoodCharsetContext = GoodCharsetContext;
var BadCharsetContext = /** @class */ (function (_super) {
    __extends(BadCharsetContext, _super);
    function BadCharsetContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BadCharsetContext.prototype.Charset = function () { return this.getToken(css3Parser.Charset, 0); };
    BadCharsetContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    BadCharsetContext.prototype.String = function () { return this.getToken(css3Parser.String, 0); };
    // @Override
    BadCharsetContext.prototype.enterRule = function (listener) {
        if (listener.enterBadCharset) {
            listener.enterBadCharset(this);
        }
    };
    // @Override
    BadCharsetContext.prototype.exitRule = function (listener) {
        if (listener.exitBadCharset) {
            listener.exitBadCharset(this);
        }
    };
    // @Override
    BadCharsetContext.prototype.accept = function (visitor) {
        if (visitor.visitBadCharset) {
            return visitor.visitBadCharset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BadCharsetContext;
}(CharsetContext));
exports.BadCharsetContext = BadCharsetContext;
var ImportsContext = /** @class */ (function (_super) {
    __extends(ImportsContext, _super);
    function ImportsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ImportsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_imports; },
        enumerable: true,
        configurable: true
    });
    ImportsContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ImportsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportsContext = ImportsContext;
var GoodImportContext = /** @class */ (function (_super) {
    __extends(GoodImportContext, _super);
    function GoodImportContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GoodImportContext.prototype.Import = function () { return this.getToken(css3Parser.Import, 0); };
    GoodImportContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    GoodImportContext.prototype.mediaQueryList = function () {
        return this.tryGetRuleContext(0, MediaQueryListContext);
    };
    GoodImportContext.prototype.String = function () { return this.tryGetToken(css3Parser.String, 0); };
    GoodImportContext.prototype.Uri = function () { return this.tryGetToken(css3Parser.Uri, 0); };
    // @Override
    GoodImportContext.prototype.enterRule = function (listener) {
        if (listener.enterGoodImport) {
            listener.enterGoodImport(this);
        }
    };
    // @Override
    GoodImportContext.prototype.exitRule = function (listener) {
        if (listener.exitGoodImport) {
            listener.exitGoodImport(this);
        }
    };
    // @Override
    GoodImportContext.prototype.accept = function (visitor) {
        if (visitor.visitGoodImport) {
            return visitor.visitGoodImport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GoodImportContext;
}(ImportsContext));
exports.GoodImportContext = GoodImportContext;
var BadImportContext = /** @class */ (function (_super) {
    __extends(BadImportContext, _super);
    function BadImportContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BadImportContext.prototype.Import = function () { return this.getToken(css3Parser.Import, 0); };
    BadImportContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    BadImportContext.prototype.mediaQueryList = function () {
        return this.tryGetRuleContext(0, MediaQueryListContext);
    };
    BadImportContext.prototype.String = function () { return this.tryGetToken(css3Parser.String, 0); };
    BadImportContext.prototype.Uri = function () { return this.tryGetToken(css3Parser.Uri, 0); };
    // @Override
    BadImportContext.prototype.enterRule = function (listener) {
        if (listener.enterBadImport) {
            listener.enterBadImport(this);
        }
    };
    // @Override
    BadImportContext.prototype.exitRule = function (listener) {
        if (listener.exitBadImport) {
            listener.exitBadImport(this);
        }
    };
    // @Override
    BadImportContext.prototype.accept = function (visitor) {
        if (visitor.visitBadImport) {
            return visitor.visitBadImport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BadImportContext;
}(ImportsContext));
exports.BadImportContext = BadImportContext;
var NamespaceContext = /** @class */ (function (_super) {
    __extends(NamespaceContext, _super);
    function NamespaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(NamespaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_namespace; },
        enumerable: true,
        configurable: true
    });
    NamespaceContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return NamespaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceContext = NamespaceContext;
var GoodNamespaceContext = /** @class */ (function (_super) {
    __extends(GoodNamespaceContext, _super);
    function GoodNamespaceContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GoodNamespaceContext.prototype.Namespace = function () { return this.getToken(css3Parser.Namespace, 0); };
    GoodNamespaceContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    GoodNamespaceContext.prototype.String = function () { return this.tryGetToken(css3Parser.String, 0); };
    GoodNamespaceContext.prototype.Uri = function () { return this.tryGetToken(css3Parser.Uri, 0); };
    GoodNamespaceContext.prototype.namespacePrefix = function () {
        return this.tryGetRuleContext(0, NamespacePrefixContext);
    };
    // @Override
    GoodNamespaceContext.prototype.enterRule = function (listener) {
        if (listener.enterGoodNamespace) {
            listener.enterGoodNamespace(this);
        }
    };
    // @Override
    GoodNamespaceContext.prototype.exitRule = function (listener) {
        if (listener.exitGoodNamespace) {
            listener.exitGoodNamespace(this);
        }
    };
    // @Override
    GoodNamespaceContext.prototype.accept = function (visitor) {
        if (visitor.visitGoodNamespace) {
            return visitor.visitGoodNamespace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GoodNamespaceContext;
}(NamespaceContext));
exports.GoodNamespaceContext = GoodNamespaceContext;
var BadNamespaceContext = /** @class */ (function (_super) {
    __extends(BadNamespaceContext, _super);
    function BadNamespaceContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BadNamespaceContext.prototype.Namespace = function () { return this.getToken(css3Parser.Namespace, 0); };
    BadNamespaceContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    BadNamespaceContext.prototype.String = function () { return this.tryGetToken(css3Parser.String, 0); };
    BadNamespaceContext.prototype.Uri = function () { return this.tryGetToken(css3Parser.Uri, 0); };
    BadNamespaceContext.prototype.namespacePrefix = function () {
        return this.tryGetRuleContext(0, NamespacePrefixContext);
    };
    // @Override
    BadNamespaceContext.prototype.enterRule = function (listener) {
        if (listener.enterBadNamespace) {
            listener.enterBadNamespace(this);
        }
    };
    // @Override
    BadNamespaceContext.prototype.exitRule = function (listener) {
        if (listener.exitBadNamespace) {
            listener.exitBadNamespace(this);
        }
    };
    // @Override
    BadNamespaceContext.prototype.accept = function (visitor) {
        if (visitor.visitBadNamespace) {
            return visitor.visitBadNamespace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BadNamespaceContext;
}(NamespaceContext));
exports.BadNamespaceContext = BadNamespaceContext;
var NamespacePrefixContext = /** @class */ (function (_super) {
    __extends(NamespacePrefixContext, _super);
    function NamespacePrefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespacePrefixContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(NamespacePrefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_namespacePrefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespacePrefixContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespacePrefix) {
            listener.enterNamespacePrefix(this);
        }
    };
    // @Override
    NamespacePrefixContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespacePrefix) {
            listener.exitNamespacePrefix(this);
        }
    };
    // @Override
    NamespacePrefixContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespacePrefix) {
            return visitor.visitNamespacePrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespacePrefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespacePrefixContext = NamespacePrefixContext;
var MediaContext = /** @class */ (function (_super) {
    __extends(MediaContext, _super);
    function MediaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MediaContext.prototype.Media = function () { return this.getToken(css3Parser.Media, 0); };
    MediaContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    MediaContext.prototype.mediaQueryList = function () {
        return this.getRuleContext(0, MediaQueryListContext);
    };
    MediaContext.prototype.groupRuleBody = function () {
        return this.getRuleContext(0, GroupRuleBodyContext);
    };
    Object.defineProperty(MediaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_media; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MediaContext.prototype.enterRule = function (listener) {
        if (listener.enterMedia) {
            listener.enterMedia(this);
        }
    };
    // @Override
    MediaContext.prototype.exitRule = function (listener) {
        if (listener.exitMedia) {
            listener.exitMedia(this);
        }
    };
    // @Override
    MediaContext.prototype.accept = function (visitor) {
        if (visitor.visitMedia) {
            return visitor.visitMedia(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MediaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MediaContext = MediaContext;
var MediaQueryListContext = /** @class */ (function (_super) {
    __extends(MediaQueryListContext, _super);
    function MediaQueryListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MediaQueryListContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    MediaQueryListContext.prototype.mediaQuery = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MediaQueryContext);
        }
        else {
            return this.getRuleContext(i, MediaQueryContext);
        }
    };
    MediaQueryListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Comma);
        }
        else {
            return this.getToken(css3Parser.Comma, i);
        }
    };
    Object.defineProperty(MediaQueryListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_mediaQueryList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MediaQueryListContext.prototype.enterRule = function (listener) {
        if (listener.enterMediaQueryList) {
            listener.enterMediaQueryList(this);
        }
    };
    // @Override
    MediaQueryListContext.prototype.exitRule = function (listener) {
        if (listener.exitMediaQueryList) {
            listener.exitMediaQueryList(this);
        }
    };
    // @Override
    MediaQueryListContext.prototype.accept = function (visitor) {
        if (visitor.visitMediaQueryList) {
            return visitor.visitMediaQueryList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MediaQueryListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MediaQueryListContext = MediaQueryListContext;
var MediaQueryContext = /** @class */ (function (_super) {
    __extends(MediaQueryContext, _super);
    function MediaQueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MediaQueryContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    MediaQueryContext.prototype.mediaType = function () {
        return this.tryGetRuleContext(0, MediaTypeContext);
    };
    MediaQueryContext.prototype.And = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.And);
        }
        else {
            return this.getToken(css3Parser.And, i);
        }
    };
    MediaQueryContext.prototype.mediaExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MediaExpressionContext);
        }
        else {
            return this.getRuleContext(i, MediaExpressionContext);
        }
    };
    MediaQueryContext.prototype.MediaOnly = function () { return this.tryGetToken(css3Parser.MediaOnly, 0); };
    MediaQueryContext.prototype.Not = function () { return this.tryGetToken(css3Parser.Not, 0); };
    Object.defineProperty(MediaQueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_mediaQuery; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MediaQueryContext.prototype.enterRule = function (listener) {
        if (listener.enterMediaQuery) {
            listener.enterMediaQuery(this);
        }
    };
    // @Override
    MediaQueryContext.prototype.exitRule = function (listener) {
        if (listener.exitMediaQuery) {
            listener.exitMediaQuery(this);
        }
    };
    // @Override
    MediaQueryContext.prototype.accept = function (visitor) {
        if (visitor.visitMediaQuery) {
            return visitor.visitMediaQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MediaQueryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MediaQueryContext = MediaQueryContext;
var MediaTypeContext = /** @class */ (function (_super) {
    __extends(MediaTypeContext, _super);
    function MediaTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MediaTypeContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(MediaTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_mediaType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MediaTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterMediaType) {
            listener.enterMediaType(this);
        }
    };
    // @Override
    MediaTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitMediaType) {
            listener.exitMediaType(this);
        }
    };
    // @Override
    MediaTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitMediaType) {
            return visitor.visitMediaType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MediaTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MediaTypeContext = MediaTypeContext;
var MediaExpressionContext = /** @class */ (function (_super) {
    __extends(MediaExpressionContext, _super);
    function MediaExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MediaExpressionContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    MediaExpressionContext.prototype.mediaFeature = function () {
        return this.getRuleContext(0, MediaFeatureContext);
    };
    MediaExpressionContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(MediaExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_mediaExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MediaExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMediaExpression) {
            listener.enterMediaExpression(this);
        }
    };
    // @Override
    MediaExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMediaExpression) {
            listener.exitMediaExpression(this);
        }
    };
    // @Override
    MediaExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMediaExpression) {
            return visitor.visitMediaExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MediaExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MediaExpressionContext = MediaExpressionContext;
var MediaFeatureContext = /** @class */ (function (_super) {
    __extends(MediaFeatureContext, _super);
    function MediaFeatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MediaFeatureContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    MediaFeatureContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    Object.defineProperty(MediaFeatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_mediaFeature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MediaFeatureContext.prototype.enterRule = function (listener) {
        if (listener.enterMediaFeature) {
            listener.enterMediaFeature(this);
        }
    };
    // @Override
    MediaFeatureContext.prototype.exitRule = function (listener) {
        if (listener.exitMediaFeature) {
            listener.exitMediaFeature(this);
        }
    };
    // @Override
    MediaFeatureContext.prototype.accept = function (visitor) {
        if (visitor.visitMediaFeature) {
            return visitor.visitMediaFeature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MediaFeatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MediaFeatureContext = MediaFeatureContext;
var PageContext = /** @class */ (function (_super) {
    __extends(PageContext, _super);
    function PageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PageContext.prototype.Page = function () { return this.getToken(css3Parser.Page, 0); };
    PageContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    PageContext.prototype.pseudoPage = function () {
        return this.tryGetRuleContext(0, PseudoPageContext);
    };
    PageContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    Object.defineProperty(PageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_page; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PageContext.prototype.enterRule = function (listener) {
        if (listener.enterPage) {
            listener.enterPage(this);
        }
    };
    // @Override
    PageContext.prototype.exitRule = function (listener) {
        if (listener.exitPage) {
            listener.exitPage(this);
        }
    };
    // @Override
    PageContext.prototype.accept = function (visitor) {
        if (visitor.visitPage) {
            return visitor.visitPage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PageContext = PageContext;
var PseudoPageContext = /** @class */ (function (_super) {
    __extends(PseudoPageContext, _super);
    function PseudoPageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PseudoPageContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    PseudoPageContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    Object.defineProperty(PseudoPageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_pseudoPage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PseudoPageContext.prototype.enterRule = function (listener) {
        if (listener.enterPseudoPage) {
            listener.enterPseudoPage(this);
        }
    };
    // @Override
    PseudoPageContext.prototype.exitRule = function (listener) {
        if (listener.exitPseudoPage) {
            listener.exitPseudoPage(this);
        }
    };
    // @Override
    PseudoPageContext.prototype.accept = function (visitor) {
        if (visitor.visitPseudoPage) {
            return visitor.visitPseudoPage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PseudoPageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PseudoPageContext = PseudoPageContext;
var SelectorGroupContext = /** @class */ (function (_super) {
    __extends(SelectorGroupContext, _super);
    function SelectorGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectorGroupContext.prototype.selector = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SelectorContext);
        }
        else {
            return this.getRuleContext(i, SelectorContext);
        }
    };
    SelectorGroupContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Comma);
        }
        else {
            return this.getToken(css3Parser.Comma, i);
        }
    };
    SelectorGroupContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(SelectorGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_selectorGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectorGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterSelectorGroup) {
            listener.enterSelectorGroup(this);
        }
    };
    // @Override
    SelectorGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitSelectorGroup) {
            listener.exitSelectorGroup(this);
        }
    };
    // @Override
    SelectorGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitSelectorGroup) {
            return visitor.visitSelectorGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectorGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectorGroupContext = SelectorGroupContext;
var SelectorContext = /** @class */ (function (_super) {
    __extends(SelectorContext, _super);
    function SelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectorContext.prototype.simpleSelectorSequence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleSelectorSequenceContext);
        }
        else {
            return this.getRuleContext(i, SimpleSelectorSequenceContext);
        }
    };
    SelectorContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    SelectorContext.prototype.combinator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CombinatorContext);
        }
        else {
            return this.getRuleContext(i, CombinatorContext);
        }
    };
    Object.defineProperty(SelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_selector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterSelector) {
            listener.enterSelector(this);
        }
    };
    // @Override
    SelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitSelector) {
            listener.exitSelector(this);
        }
    };
    // @Override
    SelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitSelector) {
            return visitor.visitSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectorContext = SelectorContext;
var CombinatorContext = /** @class */ (function (_super) {
    __extends(CombinatorContext, _super);
    function CombinatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CombinatorContext.prototype.Plus = function () { return this.tryGetToken(css3Parser.Plus, 0); };
    CombinatorContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    CombinatorContext.prototype.Greater = function () { return this.tryGetToken(css3Parser.Greater, 0); };
    CombinatorContext.prototype.Tilde = function () { return this.tryGetToken(css3Parser.Tilde, 0); };
    CombinatorContext.prototype.Space = function () { return this.tryGetToken(css3Parser.Space, 0); };
    Object.defineProperty(CombinatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_combinator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CombinatorContext.prototype.enterRule = function (listener) {
        if (listener.enterCombinator) {
            listener.enterCombinator(this);
        }
    };
    // @Override
    CombinatorContext.prototype.exitRule = function (listener) {
        if (listener.exitCombinator) {
            listener.exitCombinator(this);
        }
    };
    // @Override
    CombinatorContext.prototype.accept = function (visitor) {
        if (visitor.visitCombinator) {
            return visitor.visitCombinator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CombinatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CombinatorContext = CombinatorContext;
var SimpleSelectorSequenceContext = /** @class */ (function (_super) {
    __extends(SimpleSelectorSequenceContext, _super);
    function SimpleSelectorSequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleSelectorSequenceContext.prototype.typeSelector = function () {
        return this.tryGetRuleContext(0, TypeSelectorContext);
    };
    SimpleSelectorSequenceContext.prototype.universal = function () {
        return this.tryGetRuleContext(0, UniversalContext);
    };
    SimpleSelectorSequenceContext.prototype.Hash = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Hash);
        }
        else {
            return this.getToken(css3Parser.Hash, i);
        }
    };
    SimpleSelectorSequenceContext.prototype.className = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassNameContext);
        }
        else {
            return this.getRuleContext(i, ClassNameContext);
        }
    };
    SimpleSelectorSequenceContext.prototype.attrib = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttribContext);
        }
        else {
            return this.getRuleContext(i, AttribContext);
        }
    };
    SimpleSelectorSequenceContext.prototype.pseudo = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PseudoContext);
        }
        else {
            return this.getRuleContext(i, PseudoContext);
        }
    };
    SimpleSelectorSequenceContext.prototype.negation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NegationContext);
        }
        else {
            return this.getRuleContext(i, NegationContext);
        }
    };
    Object.defineProperty(SimpleSelectorSequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_simpleSelectorSequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleSelectorSequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleSelectorSequence) {
            listener.enterSimpleSelectorSequence(this);
        }
    };
    // @Override
    SimpleSelectorSequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleSelectorSequence) {
            listener.exitSimpleSelectorSequence(this);
        }
    };
    // @Override
    SimpleSelectorSequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleSelectorSequence) {
            return visitor.visitSimpleSelectorSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleSelectorSequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleSelectorSequenceContext = SimpleSelectorSequenceContext;
var TypeSelectorContext = /** @class */ (function (_super) {
    __extends(TypeSelectorContext, _super);
    function TypeSelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSelectorContext.prototype.elementName = function () {
        return this.getRuleContext(0, ElementNameContext);
    };
    TypeSelectorContext.prototype.typeNamespacePrefix = function () {
        return this.tryGetRuleContext(0, TypeNamespacePrefixContext);
    };
    Object.defineProperty(TypeSelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_typeSelector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSelector) {
            listener.enterTypeSelector(this);
        }
    };
    // @Override
    TypeSelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSelector) {
            listener.exitTypeSelector(this);
        }
    };
    // @Override
    TypeSelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSelector) {
            return visitor.visitTypeSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSelectorContext = TypeSelectorContext;
var TypeNamespacePrefixContext = /** @class */ (function (_super) {
    __extends(TypeNamespacePrefixContext, _super);
    function TypeNamespacePrefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNamespacePrefixContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    Object.defineProperty(TypeNamespacePrefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_typeNamespacePrefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeNamespacePrefixContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeNamespacePrefix) {
            listener.enterTypeNamespacePrefix(this);
        }
    };
    // @Override
    TypeNamespacePrefixContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeNamespacePrefix) {
            listener.exitTypeNamespacePrefix(this);
        }
    };
    // @Override
    TypeNamespacePrefixContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeNamespacePrefix) {
            return visitor.visitTypeNamespacePrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeNamespacePrefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeNamespacePrefixContext = TypeNamespacePrefixContext;
var ElementNameContext = /** @class */ (function (_super) {
    __extends(ElementNameContext, _super);
    function ElementNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementNameContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(ElementNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_elementName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementNameContext.prototype.enterRule = function (listener) {
        if (listener.enterElementName) {
            listener.enterElementName(this);
        }
    };
    // @Override
    ElementNameContext.prototype.exitRule = function (listener) {
        if (listener.exitElementName) {
            listener.exitElementName(this);
        }
    };
    // @Override
    ElementNameContext.prototype.accept = function (visitor) {
        if (visitor.visitElementName) {
            return visitor.visitElementName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementNameContext = ElementNameContext;
var UniversalContext = /** @class */ (function (_super) {
    __extends(UniversalContext, _super);
    function UniversalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UniversalContext.prototype.typeNamespacePrefix = function () {
        return this.tryGetRuleContext(0, TypeNamespacePrefixContext);
    };
    Object.defineProperty(UniversalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_universal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UniversalContext.prototype.enterRule = function (listener) {
        if (listener.enterUniversal) {
            listener.enterUniversal(this);
        }
    };
    // @Override
    UniversalContext.prototype.exitRule = function (listener) {
        if (listener.exitUniversal) {
            listener.exitUniversal(this);
        }
    };
    // @Override
    UniversalContext.prototype.accept = function (visitor) {
        if (visitor.visitUniversal) {
            return visitor.visitUniversal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UniversalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UniversalContext = UniversalContext;
var ClassNameContext = /** @class */ (function (_super) {
    __extends(ClassNameContext, _super);
    function ClassNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassNameContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(ClassNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_className; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassNameContext.prototype.enterRule = function (listener) {
        if (listener.enterClassName) {
            listener.enterClassName(this);
        }
    };
    // @Override
    ClassNameContext.prototype.exitRule = function (listener) {
        if (listener.exitClassName) {
            listener.exitClassName(this);
        }
    };
    // @Override
    ClassNameContext.prototype.accept = function (visitor) {
        if (visitor.visitClassName) {
            return visitor.visitClassName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassNameContext = ClassNameContext;
var AttribContext = /** @class */ (function (_super) {
    __extends(AttribContext, _super);
    function AttribContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttribContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    AttribContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    AttribContext.prototype.typeNamespacePrefix = function () {
        return this.tryGetRuleContext(0, TypeNamespacePrefixContext);
    };
    AttribContext.prototype.PrefixMatch = function () { return this.tryGetToken(css3Parser.PrefixMatch, 0); };
    AttribContext.prototype.SuffixMatch = function () { return this.tryGetToken(css3Parser.SuffixMatch, 0); };
    AttribContext.prototype.SubstringMatch = function () { return this.tryGetToken(css3Parser.SubstringMatch, 0); };
    AttribContext.prototype.Includes = function () { return this.tryGetToken(css3Parser.Includes, 0); };
    AttribContext.prototype.DashMatch = function () { return this.tryGetToken(css3Parser.DashMatch, 0); };
    AttribContext.prototype.String = function () { return this.tryGetToken(css3Parser.String, 0); };
    Object.defineProperty(AttribContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_attrib; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttribContext.prototype.enterRule = function (listener) {
        if (listener.enterAttrib) {
            listener.enterAttrib(this);
        }
    };
    // @Override
    AttribContext.prototype.exitRule = function (listener) {
        if (listener.exitAttrib) {
            listener.exitAttrib(this);
        }
    };
    // @Override
    AttribContext.prototype.accept = function (visitor) {
        if (visitor.visitAttrib) {
            return visitor.visitAttrib(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttribContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttribContext = AttribContext;
var PseudoContext = /** @class */ (function (_super) {
    __extends(PseudoContext, _super);
    function PseudoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PseudoContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    PseudoContext.prototype.functionalPseudo = function () {
        return this.tryGetRuleContext(0, FunctionalPseudoContext);
    };
    Object.defineProperty(PseudoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_pseudo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PseudoContext.prototype.enterRule = function (listener) {
        if (listener.enterPseudo) {
            listener.enterPseudo(this);
        }
    };
    // @Override
    PseudoContext.prototype.exitRule = function (listener) {
        if (listener.exitPseudo) {
            listener.exitPseudo(this);
        }
    };
    // @Override
    PseudoContext.prototype.accept = function (visitor) {
        if (visitor.visitPseudo) {
            return visitor.visitPseudo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PseudoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PseudoContext = PseudoContext;
var FunctionalPseudoContext = /** @class */ (function (_super) {
    __extends(FunctionalPseudoContext, _super);
    function FunctionalPseudoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionalPseudoContext.prototype.Function = function () { return this.getToken(css3Parser.Function, 0); };
    FunctionalPseudoContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    FunctionalPseudoContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(FunctionalPseudoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_functionalPseudo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionalPseudoContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionalPseudo) {
            listener.enterFunctionalPseudo(this);
        }
    };
    // @Override
    FunctionalPseudoContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionalPseudo) {
            listener.exitFunctionalPseudo(this);
        }
    };
    // @Override
    FunctionalPseudoContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionalPseudo) {
            return visitor.visitFunctionalPseudo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionalPseudoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionalPseudoContext = FunctionalPseudoContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    ExpressionContext.prototype.Plus = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Plus);
        }
        else {
            return this.getToken(css3Parser.Plus, i);
        }
    };
    ExpressionContext.prototype.Minus = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Minus);
        }
        else {
            return this.getToken(css3Parser.Minus, i);
        }
    };
    ExpressionContext.prototype.Dimension = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Dimension);
        }
        else {
            return this.getToken(css3Parser.Dimension, i);
        }
    };
    ExpressionContext.prototype.UnknownDimension = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.UnknownDimension);
        }
        else {
            return this.getToken(css3Parser.UnknownDimension, i);
        }
    };
    ExpressionContext.prototype.Number = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Number);
        }
        else {
            return this.getToken(css3Parser.Number, i);
        }
    };
    ExpressionContext.prototype.String = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.String);
        }
        else {
            return this.getToken(css3Parser.String, i);
        }
    };
    ExpressionContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var NegationContext = /** @class */ (function (_super) {
    __extends(NegationContext, _super);
    function NegationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NegationContext.prototype.PseudoNot = function () { return this.getToken(css3Parser.PseudoNot, 0); };
    NegationContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    NegationContext.prototype.negationArg = function () {
        return this.getRuleContext(0, NegationArgContext);
    };
    Object.defineProperty(NegationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_negation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NegationContext.prototype.enterRule = function (listener) {
        if (listener.enterNegation) {
            listener.enterNegation(this);
        }
    };
    // @Override
    NegationContext.prototype.exitRule = function (listener) {
        if (listener.exitNegation) {
            listener.exitNegation(this);
        }
    };
    // @Override
    NegationContext.prototype.accept = function (visitor) {
        if (visitor.visitNegation) {
            return visitor.visitNegation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NegationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NegationContext = NegationContext;
var NegationArgContext = /** @class */ (function (_super) {
    __extends(NegationArgContext, _super);
    function NegationArgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NegationArgContext.prototype.typeSelector = function () {
        return this.tryGetRuleContext(0, TypeSelectorContext);
    };
    NegationArgContext.prototype.universal = function () {
        return this.tryGetRuleContext(0, UniversalContext);
    };
    NegationArgContext.prototype.Hash = function () { return this.tryGetToken(css3Parser.Hash, 0); };
    NegationArgContext.prototype.className = function () {
        return this.tryGetRuleContext(0, ClassNameContext);
    };
    NegationArgContext.prototype.attrib = function () {
        return this.tryGetRuleContext(0, AttribContext);
    };
    NegationArgContext.prototype.pseudo = function () {
        return this.tryGetRuleContext(0, PseudoContext);
    };
    Object.defineProperty(NegationArgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_negationArg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NegationArgContext.prototype.enterRule = function (listener) {
        if (listener.enterNegationArg) {
            listener.enterNegationArg(this);
        }
    };
    // @Override
    NegationArgContext.prototype.exitRule = function (listener) {
        if (listener.exitNegationArg) {
            listener.exitNegationArg(this);
        }
    };
    // @Override
    NegationArgContext.prototype.accept = function (visitor) {
        if (visitor.visitNegationArg) {
            return visitor.visitNegationArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NegationArgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NegationArgContext = NegationArgContext;
var OperatorContext = /** @class */ (function (_super) {
    __extends(OperatorContext, _super);
    function OperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_operator; },
        enumerable: true,
        configurable: true
    });
    OperatorContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return OperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperatorContext = OperatorContext;
var GoodOperatorContext = /** @class */ (function (_super) {
    __extends(GoodOperatorContext, _super);
    function GoodOperatorContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GoodOperatorContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    GoodOperatorContext.prototype.Comma = function () { return this.tryGetToken(css3Parser.Comma, 0); };
    GoodOperatorContext.prototype.Space = function () { return this.tryGetToken(css3Parser.Space, 0); };
    // @Override
    GoodOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterGoodOperator) {
            listener.enterGoodOperator(this);
        }
    };
    // @Override
    GoodOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitGoodOperator) {
            listener.exitGoodOperator(this);
        }
    };
    // @Override
    GoodOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitGoodOperator) {
            return visitor.visitGoodOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GoodOperatorContext;
}(OperatorContext));
exports.GoodOperatorContext = GoodOperatorContext;
var BadOperatorContext = /** @class */ (function (_super) {
    __extends(BadOperatorContext, _super);
    function BadOperatorContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BadOperatorContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    // @Override
    BadOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterBadOperator) {
            listener.enterBadOperator(this);
        }
    };
    // @Override
    BadOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitBadOperator) {
            listener.exitBadOperator(this);
        }
    };
    // @Override
    BadOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitBadOperator) {
            return visitor.visitBadOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BadOperatorContext;
}(OperatorContext));
exports.BadOperatorContext = BadOperatorContext;
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_property; },
        enumerable: true,
        configurable: true
    });
    PropertyContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return PropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyContext = PropertyContext;
var GoodPropertyContext = /** @class */ (function (_super) {
    __extends(GoodPropertyContext, _super);
    function GoodPropertyContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GoodPropertyContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    GoodPropertyContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    GoodPropertyContext.prototype.Variable = function () { return this.tryGetToken(css3Parser.Variable, 0); };
    // @Override
    GoodPropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterGoodProperty) {
            listener.enterGoodProperty(this);
        }
    };
    // @Override
    GoodPropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitGoodProperty) {
            listener.exitGoodProperty(this);
        }
    };
    // @Override
    GoodPropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitGoodProperty) {
            return visitor.visitGoodProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GoodPropertyContext;
}(PropertyContext));
exports.GoodPropertyContext = GoodPropertyContext;
var BadPropertyContext = /** @class */ (function (_super) {
    __extends(BadPropertyContext, _super);
    function BadPropertyContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BadPropertyContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    // @Override
    BadPropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterBadProperty) {
            listener.enterBadProperty(this);
        }
    };
    // @Override
    BadPropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitBadProperty) {
            listener.exitBadProperty(this);
        }
    };
    // @Override
    BadPropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitBadProperty) {
            return visitor.visitBadProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BadPropertyContext;
}(PropertyContext));
exports.BadPropertyContext = BadPropertyContext;
var RulesetContext = /** @class */ (function (_super) {
    __extends(RulesetContext, _super);
    function RulesetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RulesetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_ruleset; },
        enumerable: true,
        configurable: true
    });
    RulesetContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return RulesetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RulesetContext = RulesetContext;
var KnownRulesetContext = /** @class */ (function (_super) {
    __extends(KnownRulesetContext, _super);
    function KnownRulesetContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    KnownRulesetContext.prototype.selectorGroup = function () {
        return this.getRuleContext(0, SelectorGroupContext);
    };
    KnownRulesetContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    KnownRulesetContext.prototype.declarationList = function () {
        return this.tryGetRuleContext(0, DeclarationListContext);
    };
    // @Override
    KnownRulesetContext.prototype.enterRule = function (listener) {
        if (listener.enterKnownRuleset) {
            listener.enterKnownRuleset(this);
        }
    };
    // @Override
    KnownRulesetContext.prototype.exitRule = function (listener) {
        if (listener.exitKnownRuleset) {
            listener.exitKnownRuleset(this);
        }
    };
    // @Override
    KnownRulesetContext.prototype.accept = function (visitor) {
        if (visitor.visitKnownRuleset) {
            return visitor.visitKnownRuleset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KnownRulesetContext;
}(RulesetContext));
exports.KnownRulesetContext = KnownRulesetContext;
var UnknownRulesetContext = /** @class */ (function (_super) {
    __extends(UnknownRulesetContext, _super);
    function UnknownRulesetContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnknownRulesetContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    UnknownRulesetContext.prototype.any = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnyContext);
        }
        else {
            return this.getRuleContext(i, AnyContext);
        }
    };
    UnknownRulesetContext.prototype.declarationList = function () {
        return this.tryGetRuleContext(0, DeclarationListContext);
    };
    // @Override
    UnknownRulesetContext.prototype.enterRule = function (listener) {
        if (listener.enterUnknownRuleset) {
            listener.enterUnknownRuleset(this);
        }
    };
    // @Override
    UnknownRulesetContext.prototype.exitRule = function (listener) {
        if (listener.exitUnknownRuleset) {
            listener.exitUnknownRuleset(this);
        }
    };
    // @Override
    UnknownRulesetContext.prototype.accept = function (visitor) {
        if (visitor.visitUnknownRuleset) {
            return visitor.visitUnknownRuleset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnknownRulesetContext;
}(RulesetContext));
exports.UnknownRulesetContext = UnknownRulesetContext;
var DeclarationListContext = /** @class */ (function (_super) {
    __extends(DeclarationListContext, _super);
    function DeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationListContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    DeclarationListContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(DeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_declarationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationListContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclarationList) {
            listener.enterDeclarationList(this);
        }
    };
    // @Override
    DeclarationListContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclarationList) {
            listener.exitDeclarationList(this);
        }
    };
    // @Override
    DeclarationListContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclarationList) {
            return visitor.visitDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationListContext = DeclarationListContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_declaration; },
        enumerable: true,
        configurable: true
    });
    DeclarationContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return DeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationContext = DeclarationContext;
var KnownDeclarationContext = /** @class */ (function (_super) {
    __extends(KnownDeclarationContext, _super);
    function KnownDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    KnownDeclarationContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    KnownDeclarationContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    KnownDeclarationContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    KnownDeclarationContext.prototype.prio = function () {
        return this.tryGetRuleContext(0, PrioContext);
    };
    // @Override
    KnownDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterKnownDeclaration) {
            listener.enterKnownDeclaration(this);
        }
    };
    // @Override
    KnownDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitKnownDeclaration) {
            listener.exitKnownDeclaration(this);
        }
    };
    // @Override
    KnownDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitKnownDeclaration) {
            return visitor.visitKnownDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KnownDeclarationContext;
}(DeclarationContext));
exports.KnownDeclarationContext = KnownDeclarationContext;
var UnknownDeclarationContext = /** @class */ (function (_super) {
    __extends(UnknownDeclarationContext, _super);
    function UnknownDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnknownDeclarationContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    UnknownDeclarationContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    UnknownDeclarationContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    // @Override
    UnknownDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterUnknownDeclaration) {
            listener.enterUnknownDeclaration(this);
        }
    };
    // @Override
    UnknownDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitUnknownDeclaration) {
            listener.exitUnknownDeclaration(this);
        }
    };
    // @Override
    UnknownDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitUnknownDeclaration) {
            return visitor.visitUnknownDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnknownDeclarationContext;
}(DeclarationContext));
exports.UnknownDeclarationContext = UnknownDeclarationContext;
var PrioContext = /** @class */ (function (_super) {
    __extends(PrioContext, _super);
    function PrioContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrioContext.prototype.Important = function () { return this.getToken(css3Parser.Important, 0); };
    PrioContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    Object.defineProperty(PrioContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_prio; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrioContext.prototype.enterRule = function (listener) {
        if (listener.enterPrio) {
            listener.enterPrio(this);
        }
    };
    // @Override
    PrioContext.prototype.exitRule = function (listener) {
        if (listener.exitPrio) {
            listener.exitPrio(this);
        }
    };
    // @Override
    PrioContext.prototype.accept = function (visitor) {
        if (visitor.visitPrio) {
            return visitor.visitPrio(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrioContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrioContext = PrioContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.any = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnyContext);
        }
        else {
            return this.getRuleContext(i, AnyContext);
        }
    };
    ValueContext.prototype.block = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        else {
            return this.getRuleContext(i, BlockContext);
        }
    };
    ValueContext.prototype.atKeyword = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtKeywordContext);
        }
        else {
            return this.getRuleContext(i, AtKeywordContext);
        }
    };
    ValueContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueContext.prototype.enterRule = function (listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    };
    // @Override
    ValueContext.prototype.exitRule = function (listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    };
    // @Override
    ValueContext.prototype.accept = function (visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    ExprContext.prototype.operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OperatorContext);
        }
        else {
            return this.getRuleContext(i, OperatorContext);
        }
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_term; },
        enumerable: true,
        configurable: true
    });
    TermContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return TermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermContext = TermContext;
var KnownTermContext = /** @class */ (function (_super) {
    __extends(KnownTermContext, _super);
    function KnownTermContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    KnownTermContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    KnownTermContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    KnownTermContext.prototype.percentage = function () {
        return this.tryGetRuleContext(0, PercentageContext);
    };
    KnownTermContext.prototype.dimension = function () {
        return this.tryGetRuleContext(0, DimensionContext);
    };
    KnownTermContext.prototype.String = function () { return this.tryGetToken(css3Parser.String, 0); };
    KnownTermContext.prototype.UnicodeRange = function () { return this.tryGetToken(css3Parser.UnicodeRange, 0); };
    KnownTermContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    KnownTermContext.prototype.var = function () {
        return this.tryGetRuleContext(0, VarContext);
    };
    KnownTermContext.prototype.Uri = function () { return this.tryGetToken(css3Parser.Uri, 0); };
    KnownTermContext.prototype.hexcolor = function () {
        return this.tryGetRuleContext(0, HexcolorContext);
    };
    KnownTermContext.prototype.calc = function () {
        return this.tryGetRuleContext(0, CalcContext);
    };
    KnownTermContext.prototype.function = function () {
        return this.tryGetRuleContext(0, FunctionContext);
    };
    // @Override
    KnownTermContext.prototype.enterRule = function (listener) {
        if (listener.enterKnownTerm) {
            listener.enterKnownTerm(this);
        }
    };
    // @Override
    KnownTermContext.prototype.exitRule = function (listener) {
        if (listener.exitKnownTerm) {
            listener.exitKnownTerm(this);
        }
    };
    // @Override
    KnownTermContext.prototype.accept = function (visitor) {
        if (visitor.visitKnownTerm) {
            return visitor.visitKnownTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KnownTermContext;
}(TermContext));
exports.KnownTermContext = KnownTermContext;
var UnknownTermContext = /** @class */ (function (_super) {
    __extends(UnknownTermContext, _super);
    function UnknownTermContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnknownTermContext.prototype.unknownDimension = function () {
        return this.getRuleContext(0, UnknownDimensionContext);
    };
    UnknownTermContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    // @Override
    UnknownTermContext.prototype.enterRule = function (listener) {
        if (listener.enterUnknownTerm) {
            listener.enterUnknownTerm(this);
        }
    };
    // @Override
    UnknownTermContext.prototype.exitRule = function (listener) {
        if (listener.exitUnknownTerm) {
            listener.exitUnknownTerm(this);
        }
    };
    // @Override
    UnknownTermContext.prototype.accept = function (visitor) {
        if (visitor.visitUnknownTerm) {
            return visitor.visitUnknownTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnknownTermContext;
}(TermContext));
exports.UnknownTermContext = UnknownTermContext;
var BadTermContext = /** @class */ (function (_super) {
    __extends(BadTermContext, _super);
    function BadTermContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BadTermContext.prototype.dxImageTransform = function () {
        return this.getRuleContext(0, DxImageTransformContext);
    };
    // @Override
    BadTermContext.prototype.enterRule = function (listener) {
        if (listener.enterBadTerm) {
            listener.enterBadTerm(this);
        }
    };
    // @Override
    BadTermContext.prototype.exitRule = function (listener) {
        if (listener.exitBadTerm) {
            listener.exitBadTerm(this);
        }
    };
    // @Override
    BadTermContext.prototype.accept = function (visitor) {
        if (visitor.visitBadTerm) {
            return visitor.visitBadTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BadTermContext;
}(TermContext));
exports.BadTermContext = BadTermContext;
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.Function = function () { return this.getToken(css3Parser.Function, 0); };
    FunctionContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    FunctionContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_function; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionContext = FunctionContext;
var DxImageTransformContext = /** @class */ (function (_super) {
    __extends(DxImageTransformContext, _super);
    function DxImageTransformContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DxImageTransformContext.prototype.DxImageTransform = function () { return this.getToken(css3Parser.DxImageTransform, 0); };
    DxImageTransformContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    DxImageTransformContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Object.defineProperty(DxImageTransformContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_dxImageTransform; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DxImageTransformContext.prototype.enterRule = function (listener) {
        if (listener.enterDxImageTransform) {
            listener.enterDxImageTransform(this);
        }
    };
    // @Override
    DxImageTransformContext.prototype.exitRule = function (listener) {
        if (listener.exitDxImageTransform) {
            listener.exitDxImageTransform(this);
        }
    };
    // @Override
    DxImageTransformContext.prototype.accept = function (visitor) {
        if (visitor.visitDxImageTransform) {
            return visitor.visitDxImageTransform(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DxImageTransformContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DxImageTransformContext = DxImageTransformContext;
var HexcolorContext = /** @class */ (function (_super) {
    __extends(HexcolorContext, _super);
    function HexcolorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HexcolorContext.prototype.Hash = function () { return this.getToken(css3Parser.Hash, 0); };
    HexcolorContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    Object.defineProperty(HexcolorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_hexcolor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HexcolorContext.prototype.enterRule = function (listener) {
        if (listener.enterHexcolor) {
            listener.enterHexcolor(this);
        }
    };
    // @Override
    HexcolorContext.prototype.exitRule = function (listener) {
        if (listener.exitHexcolor) {
            listener.exitHexcolor(this);
        }
    };
    // @Override
    HexcolorContext.prototype.accept = function (visitor) {
        if (visitor.visitHexcolor) {
            return visitor.visitHexcolor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HexcolorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HexcolorContext = HexcolorContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.Number = function () { return this.getToken(css3Parser.Number, 0); };
    NumberContext.prototype.Plus = function () { return this.tryGetToken(css3Parser.Plus, 0); };
    NumberContext.prototype.Minus = function () { return this.tryGetToken(css3Parser.Minus, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberContext = NumberContext;
var PercentageContext = /** @class */ (function (_super) {
    __extends(PercentageContext, _super);
    function PercentageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PercentageContext.prototype.Percentage = function () { return this.getToken(css3Parser.Percentage, 0); };
    PercentageContext.prototype.Plus = function () { return this.tryGetToken(css3Parser.Plus, 0); };
    PercentageContext.prototype.Minus = function () { return this.tryGetToken(css3Parser.Minus, 0); };
    Object.defineProperty(PercentageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_percentage; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PercentageContext.prototype.enterRule = function (listener) {
        if (listener.enterPercentage) {
            listener.enterPercentage(this);
        }
    };
    // @Override
    PercentageContext.prototype.exitRule = function (listener) {
        if (listener.exitPercentage) {
            listener.exitPercentage(this);
        }
    };
    // @Override
    PercentageContext.prototype.accept = function (visitor) {
        if (visitor.visitPercentage) {
            return visitor.visitPercentage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PercentageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PercentageContext = PercentageContext;
var DimensionContext = /** @class */ (function (_super) {
    __extends(DimensionContext, _super);
    function DimensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DimensionContext.prototype.Dimension = function () { return this.getToken(css3Parser.Dimension, 0); };
    DimensionContext.prototype.Plus = function () { return this.tryGetToken(css3Parser.Plus, 0); };
    DimensionContext.prototype.Minus = function () { return this.tryGetToken(css3Parser.Minus, 0); };
    Object.defineProperty(DimensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_dimension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DimensionContext.prototype.enterRule = function (listener) {
        if (listener.enterDimension) {
            listener.enterDimension(this);
        }
    };
    // @Override
    DimensionContext.prototype.exitRule = function (listener) {
        if (listener.exitDimension) {
            listener.exitDimension(this);
        }
    };
    // @Override
    DimensionContext.prototype.accept = function (visitor) {
        if (visitor.visitDimension) {
            return visitor.visitDimension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DimensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DimensionContext = DimensionContext;
var UnknownDimensionContext = /** @class */ (function (_super) {
    __extends(UnknownDimensionContext, _super);
    function UnknownDimensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnknownDimensionContext.prototype.UnknownDimension = function () { return this.getToken(css3Parser.UnknownDimension, 0); };
    UnknownDimensionContext.prototype.Plus = function () { return this.tryGetToken(css3Parser.Plus, 0); };
    UnknownDimensionContext.prototype.Minus = function () { return this.tryGetToken(css3Parser.Minus, 0); };
    Object.defineProperty(UnknownDimensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_unknownDimension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnknownDimensionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnknownDimension) {
            listener.enterUnknownDimension(this);
        }
    };
    // @Override
    UnknownDimensionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnknownDimension) {
            listener.exitUnknownDimension(this);
        }
    };
    // @Override
    UnknownDimensionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnknownDimension) {
            return visitor.visitUnknownDimension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnknownDimensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnknownDimensionContext = UnknownDimensionContext;
var AnyContext = /** @class */ (function (_super) {
    __extends(AnyContext, _super);
    function AnyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnyContext.prototype.ident = function () {
        return this.tryGetRuleContext(0, IdentContext);
    };
    AnyContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    AnyContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    AnyContext.prototype.percentage = function () {
        return this.tryGetRuleContext(0, PercentageContext);
    };
    AnyContext.prototype.dimension = function () {
        return this.tryGetRuleContext(0, DimensionContext);
    };
    AnyContext.prototype.unknownDimension = function () {
        return this.tryGetRuleContext(0, UnknownDimensionContext);
    };
    AnyContext.prototype.String = function () { return this.tryGetToken(css3Parser.String, 0); };
    AnyContext.prototype.Uri = function () { return this.tryGetToken(css3Parser.Uri, 0); };
    AnyContext.prototype.Hash = function () { return this.tryGetToken(css3Parser.Hash, 0); };
    AnyContext.prototype.UnicodeRange = function () { return this.tryGetToken(css3Parser.UnicodeRange, 0); };
    AnyContext.prototype.Includes = function () { return this.tryGetToken(css3Parser.Includes, 0); };
    AnyContext.prototype.DashMatch = function () { return this.tryGetToken(css3Parser.DashMatch, 0); };
    AnyContext.prototype.Function = function () { return this.tryGetToken(css3Parser.Function, 0); };
    AnyContext.prototype.any = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnyContext);
        }
        else {
            return this.getRuleContext(i, AnyContext);
        }
    };
    AnyContext.prototype.unused = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnusedContext);
        }
        else {
            return this.getRuleContext(i, UnusedContext);
        }
    };
    Object.defineProperty(AnyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_any; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnyContext.prototype.enterRule = function (listener) {
        if (listener.enterAny) {
            listener.enterAny(this);
        }
    };
    // @Override
    AnyContext.prototype.exitRule = function (listener) {
        if (listener.exitAny) {
            listener.exitAny(this);
        }
    };
    // @Override
    AnyContext.prototype.accept = function (visitor) {
        if (visitor.visitAny) {
            return visitor.visitAny(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnyContext = AnyContext;
var AtRuleContext = /** @class */ (function (_super) {
    __extends(AtRuleContext, _super);
    function AtRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AtRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_atRule; },
        enumerable: true,
        configurable: true
    });
    AtRuleContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return AtRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtRuleContext = AtRuleContext;
var UnknownAtRuleContext = /** @class */ (function (_super) {
    __extends(UnknownAtRuleContext, _super);
    function UnknownAtRuleContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnknownAtRuleContext.prototype.atKeyword = function () {
        return this.getRuleContext(0, AtKeywordContext);
    };
    UnknownAtRuleContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    UnknownAtRuleContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    UnknownAtRuleContext.prototype.any = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnyContext);
        }
        else {
            return this.getRuleContext(i, AnyContext);
        }
    };
    // @Override
    UnknownAtRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterUnknownAtRule) {
            listener.enterUnknownAtRule(this);
        }
    };
    // @Override
    UnknownAtRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitUnknownAtRule) {
            listener.exitUnknownAtRule(this);
        }
    };
    // @Override
    UnknownAtRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitUnknownAtRule) {
            return visitor.visitUnknownAtRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnknownAtRuleContext;
}(AtRuleContext));
exports.UnknownAtRuleContext = UnknownAtRuleContext;
var AtKeywordContext = /** @class */ (function (_super) {
    __extends(AtKeywordContext, _super);
    function AtKeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtKeywordContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    Object.defineProperty(AtKeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_atKeyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtKeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterAtKeyword) {
            listener.enterAtKeyword(this);
        }
    };
    // @Override
    AtKeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitAtKeyword) {
            listener.exitAtKeyword(this);
        }
    };
    // @Override
    AtKeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitAtKeyword) {
            return visitor.visitAtKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtKeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtKeywordContext = AtKeywordContext;
var UnusedContext = /** @class */ (function (_super) {
    __extends(UnusedContext, _super);
    function UnusedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnusedContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    UnusedContext.prototype.atKeyword = function () {
        return this.tryGetRuleContext(0, AtKeywordContext);
    };
    UnusedContext.prototype.ws = function () {
        return this.tryGetRuleContext(0, WsContext);
    };
    UnusedContext.prototype.Cdo = function () { return this.tryGetToken(css3Parser.Cdo, 0); };
    UnusedContext.prototype.Cdc = function () { return this.tryGetToken(css3Parser.Cdc, 0); };
    Object.defineProperty(UnusedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_unused; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnusedContext.prototype.enterRule = function (listener) {
        if (listener.enterUnused) {
            listener.enterUnused(this);
        }
    };
    // @Override
    UnusedContext.prototype.exitRule = function (listener) {
        if (listener.exitUnused) {
            listener.exitUnused(this);
        }
    };
    // @Override
    UnusedContext.prototype.accept = function (visitor) {
        if (visitor.visitUnused) {
            return visitor.visitUnused(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnusedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnusedContext = UnusedContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    BlockContext.prototype.declarationList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationListContext);
        }
        else {
            return this.getRuleContext(i, DeclarationListContext);
        }
    };
    BlockContext.prototype.nestedStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NestedStatementContext);
        }
        else {
            return this.getRuleContext(i, NestedStatementContext);
        }
    };
    BlockContext.prototype.any = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnyContext);
        }
        else {
            return this.getRuleContext(i, AnyContext);
        }
    };
    BlockContext.prototype.block = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        else {
            return this.getRuleContext(i, BlockContext);
        }
    };
    BlockContext.prototype.atKeyword = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtKeywordContext);
        }
        else {
            return this.getRuleContext(i, AtKeywordContext);
        }
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var NestedStatementContext = /** @class */ (function (_super) {
    __extends(NestedStatementContext, _super);
    function NestedStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NestedStatementContext.prototype.ruleset = function () {
        return this.tryGetRuleContext(0, RulesetContext);
    };
    NestedStatementContext.prototype.media = function () {
        return this.tryGetRuleContext(0, MediaContext);
    };
    NestedStatementContext.prototype.page = function () {
        return this.tryGetRuleContext(0, PageContext);
    };
    NestedStatementContext.prototype.fontFaceRule = function () {
        return this.tryGetRuleContext(0, FontFaceRuleContext);
    };
    NestedStatementContext.prototype.keyframesRule = function () {
        return this.tryGetRuleContext(0, KeyframesRuleContext);
    };
    NestedStatementContext.prototype.supportsRule = function () {
        return this.tryGetRuleContext(0, SupportsRuleContext);
    };
    NestedStatementContext.prototype.viewport = function () {
        return this.tryGetRuleContext(0, ViewportContext);
    };
    NestedStatementContext.prototype.counterStyle = function () {
        return this.tryGetRuleContext(0, CounterStyleContext);
    };
    NestedStatementContext.prototype.fontFeatureValuesRule = function () {
        return this.tryGetRuleContext(0, FontFeatureValuesRuleContext);
    };
    NestedStatementContext.prototype.atRule = function () {
        return this.tryGetRuleContext(0, AtRuleContext);
    };
    Object.defineProperty(NestedStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_nestedStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NestedStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterNestedStatement) {
            listener.enterNestedStatement(this);
        }
    };
    // @Override
    NestedStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitNestedStatement) {
            listener.exitNestedStatement(this);
        }
    };
    // @Override
    NestedStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitNestedStatement) {
            return visitor.visitNestedStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NestedStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NestedStatementContext = NestedStatementContext;
var GroupRuleBodyContext = /** @class */ (function (_super) {
    __extends(GroupRuleBodyContext, _super);
    function GroupRuleBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupRuleBodyContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    GroupRuleBodyContext.prototype.nestedStatement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NestedStatementContext);
        }
        else {
            return this.getRuleContext(i, NestedStatementContext);
        }
    };
    Object.defineProperty(GroupRuleBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_groupRuleBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GroupRuleBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterGroupRuleBody) {
            listener.enterGroupRuleBody(this);
        }
    };
    // @Override
    GroupRuleBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitGroupRuleBody) {
            listener.exitGroupRuleBody(this);
        }
    };
    // @Override
    GroupRuleBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitGroupRuleBody) {
            return visitor.visitGroupRuleBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GroupRuleBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GroupRuleBodyContext = GroupRuleBodyContext;
var SupportsRuleContext = /** @class */ (function (_super) {
    __extends(SupportsRuleContext, _super);
    function SupportsRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SupportsRuleContext.prototype.Supports = function () { return this.getToken(css3Parser.Supports, 0); };
    SupportsRuleContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    SupportsRuleContext.prototype.supportsCondition = function () {
        return this.getRuleContext(0, SupportsConditionContext);
    };
    SupportsRuleContext.prototype.groupRuleBody = function () {
        return this.getRuleContext(0, GroupRuleBodyContext);
    };
    Object.defineProperty(SupportsRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_supportsRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SupportsRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterSupportsRule) {
            listener.enterSupportsRule(this);
        }
    };
    // @Override
    SupportsRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitSupportsRule) {
            listener.exitSupportsRule(this);
        }
    };
    // @Override
    SupportsRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitSupportsRule) {
            return visitor.visitSupportsRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SupportsRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SupportsRuleContext = SupportsRuleContext;
var SupportsConditionContext = /** @class */ (function (_super) {
    __extends(SupportsConditionContext, _super);
    function SupportsConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SupportsConditionContext.prototype.supportsNegation = function () {
        return this.tryGetRuleContext(0, SupportsNegationContext);
    };
    SupportsConditionContext.prototype.supportsConjunction = function () {
        return this.tryGetRuleContext(0, SupportsConjunctionContext);
    };
    SupportsConditionContext.prototype.supportsDisjunction = function () {
        return this.tryGetRuleContext(0, SupportsDisjunctionContext);
    };
    SupportsConditionContext.prototype.supportsConditionInParens = function () {
        return this.tryGetRuleContext(0, SupportsConditionInParensContext);
    };
    Object.defineProperty(SupportsConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_supportsCondition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SupportsConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterSupportsCondition) {
            listener.enterSupportsCondition(this);
        }
    };
    // @Override
    SupportsConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitSupportsCondition) {
            listener.exitSupportsCondition(this);
        }
    };
    // @Override
    SupportsConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitSupportsCondition) {
            return visitor.visitSupportsCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SupportsConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SupportsConditionContext = SupportsConditionContext;
var SupportsConditionInParensContext = /** @class */ (function (_super) {
    __extends(SupportsConditionInParensContext, _super);
    function SupportsConditionInParensContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SupportsConditionInParensContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    SupportsConditionInParensContext.prototype.supportsCondition = function () {
        return this.tryGetRuleContext(0, SupportsConditionContext);
    };
    SupportsConditionInParensContext.prototype.supportsDeclarationCondition = function () {
        return this.tryGetRuleContext(0, SupportsDeclarationConditionContext);
    };
    SupportsConditionInParensContext.prototype.generalEnclosed = function () {
        return this.tryGetRuleContext(0, GeneralEnclosedContext);
    };
    Object.defineProperty(SupportsConditionInParensContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_supportsConditionInParens; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SupportsConditionInParensContext.prototype.enterRule = function (listener) {
        if (listener.enterSupportsConditionInParens) {
            listener.enterSupportsConditionInParens(this);
        }
    };
    // @Override
    SupportsConditionInParensContext.prototype.exitRule = function (listener) {
        if (listener.exitSupportsConditionInParens) {
            listener.exitSupportsConditionInParens(this);
        }
    };
    // @Override
    SupportsConditionInParensContext.prototype.accept = function (visitor) {
        if (visitor.visitSupportsConditionInParens) {
            return visitor.visitSupportsConditionInParens(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SupportsConditionInParensContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SupportsConditionInParensContext = SupportsConditionInParensContext;
var SupportsNegationContext = /** @class */ (function (_super) {
    __extends(SupportsNegationContext, _super);
    function SupportsNegationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SupportsNegationContext.prototype.Not = function () { return this.getToken(css3Parser.Not, 0); };
    SupportsNegationContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    SupportsNegationContext.prototype.Space = function () { return this.getToken(css3Parser.Space, 0); };
    SupportsNegationContext.prototype.supportsConditionInParens = function () {
        return this.getRuleContext(0, SupportsConditionInParensContext);
    };
    Object.defineProperty(SupportsNegationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_supportsNegation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SupportsNegationContext.prototype.enterRule = function (listener) {
        if (listener.enterSupportsNegation) {
            listener.enterSupportsNegation(this);
        }
    };
    // @Override
    SupportsNegationContext.prototype.exitRule = function (listener) {
        if (listener.exitSupportsNegation) {
            listener.exitSupportsNegation(this);
        }
    };
    // @Override
    SupportsNegationContext.prototype.accept = function (visitor) {
        if (visitor.visitSupportsNegation) {
            return visitor.visitSupportsNegation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SupportsNegationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SupportsNegationContext = SupportsNegationContext;
var SupportsConjunctionContext = /** @class */ (function (_super) {
    __extends(SupportsConjunctionContext, _super);
    function SupportsConjunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SupportsConjunctionContext.prototype.supportsConditionInParens = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SupportsConditionInParensContext);
        }
        else {
            return this.getRuleContext(i, SupportsConditionInParensContext);
        }
    };
    SupportsConjunctionContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    SupportsConjunctionContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Space);
        }
        else {
            return this.getToken(css3Parser.Space, i);
        }
    };
    SupportsConjunctionContext.prototype.And = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.And);
        }
        else {
            return this.getToken(css3Parser.And, i);
        }
    };
    Object.defineProperty(SupportsConjunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_supportsConjunction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SupportsConjunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterSupportsConjunction) {
            listener.enterSupportsConjunction(this);
        }
    };
    // @Override
    SupportsConjunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitSupportsConjunction) {
            listener.exitSupportsConjunction(this);
        }
    };
    // @Override
    SupportsConjunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitSupportsConjunction) {
            return visitor.visitSupportsConjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SupportsConjunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SupportsConjunctionContext = SupportsConjunctionContext;
var SupportsDisjunctionContext = /** @class */ (function (_super) {
    __extends(SupportsDisjunctionContext, _super);
    function SupportsDisjunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SupportsDisjunctionContext.prototype.supportsConditionInParens = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SupportsConditionInParensContext);
        }
        else {
            return this.getRuleContext(i, SupportsConditionInParensContext);
        }
    };
    SupportsDisjunctionContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    SupportsDisjunctionContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Space);
        }
        else {
            return this.getToken(css3Parser.Space, i);
        }
    };
    SupportsDisjunctionContext.prototype.Or = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Or);
        }
        else {
            return this.getToken(css3Parser.Or, i);
        }
    };
    Object.defineProperty(SupportsDisjunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_supportsDisjunction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SupportsDisjunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterSupportsDisjunction) {
            listener.enterSupportsDisjunction(this);
        }
    };
    // @Override
    SupportsDisjunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitSupportsDisjunction) {
            listener.exitSupportsDisjunction(this);
        }
    };
    // @Override
    SupportsDisjunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitSupportsDisjunction) {
            return visitor.visitSupportsDisjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SupportsDisjunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SupportsDisjunctionContext = SupportsDisjunctionContext;
var SupportsDeclarationConditionContext = /** @class */ (function (_super) {
    __extends(SupportsDeclarationConditionContext, _super);
    function SupportsDeclarationConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SupportsDeclarationConditionContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    SupportsDeclarationConditionContext.prototype.declaration = function () {
        return this.getRuleContext(0, DeclarationContext);
    };
    Object.defineProperty(SupportsDeclarationConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_supportsDeclarationCondition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SupportsDeclarationConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterSupportsDeclarationCondition) {
            listener.enterSupportsDeclarationCondition(this);
        }
    };
    // @Override
    SupportsDeclarationConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitSupportsDeclarationCondition) {
            listener.exitSupportsDeclarationCondition(this);
        }
    };
    // @Override
    SupportsDeclarationConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitSupportsDeclarationCondition) {
            return visitor.visitSupportsDeclarationCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SupportsDeclarationConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SupportsDeclarationConditionContext = SupportsDeclarationConditionContext;
var GeneralEnclosedContext = /** @class */ (function (_super) {
    __extends(GeneralEnclosedContext, _super);
    function GeneralEnclosedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GeneralEnclosedContext.prototype.Function = function () { return this.getToken(css3Parser.Function, 0); };
    GeneralEnclosedContext.prototype.any = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnyContext);
        }
        else {
            return this.getRuleContext(i, AnyContext);
        }
    };
    GeneralEnclosedContext.prototype.unused = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnusedContext);
        }
        else {
            return this.getRuleContext(i, UnusedContext);
        }
    };
    Object.defineProperty(GeneralEnclosedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_generalEnclosed; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GeneralEnclosedContext.prototype.enterRule = function (listener) {
        if (listener.enterGeneralEnclosed) {
            listener.enterGeneralEnclosed(this);
        }
    };
    // @Override
    GeneralEnclosedContext.prototype.exitRule = function (listener) {
        if (listener.exitGeneralEnclosed) {
            listener.exitGeneralEnclosed(this);
        }
    };
    // @Override
    GeneralEnclosedContext.prototype.accept = function (visitor) {
        if (visitor.visitGeneralEnclosed) {
            return visitor.visitGeneralEnclosed(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GeneralEnclosedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GeneralEnclosedContext = GeneralEnclosedContext;
var VarContext = /** @class */ (function (_super) {
    __extends(VarContext, _super);
    function VarContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarContext.prototype.Var = function () { return this.getToken(css3Parser.Var, 0); };
    VarContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    VarContext.prototype.Variable = function () { return this.getToken(css3Parser.Variable, 0); };
    Object.defineProperty(VarContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_var; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarContext.prototype.enterRule = function (listener) {
        if (listener.enterVar) {
            listener.enterVar(this);
        }
    };
    // @Override
    VarContext.prototype.exitRule = function (listener) {
        if (listener.exitVar) {
            listener.exitVar(this);
        }
    };
    // @Override
    VarContext.prototype.accept = function (visitor) {
        if (visitor.visitVar) {
            return visitor.visitVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarContext = VarContext;
var CalcContext = /** @class */ (function (_super) {
    __extends(CalcContext, _super);
    function CalcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CalcContext.prototype.Calc = function () { return this.getToken(css3Parser.Calc, 0); };
    CalcContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    CalcContext.prototype.calcSum = function () {
        return this.getRuleContext(0, CalcSumContext);
    };
    Object.defineProperty(CalcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_calc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CalcContext.prototype.enterRule = function (listener) {
        if (listener.enterCalc) {
            listener.enterCalc(this);
        }
    };
    // @Override
    CalcContext.prototype.exitRule = function (listener) {
        if (listener.exitCalc) {
            listener.exitCalc(this);
        }
    };
    // @Override
    CalcContext.prototype.accept = function (visitor) {
        if (visitor.visitCalc) {
            return visitor.visitCalc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CalcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CalcContext = CalcContext;
var CalcSumContext = /** @class */ (function (_super) {
    __extends(CalcSumContext, _super);
    function CalcSumContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CalcSumContext.prototype.calcProduct = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CalcProductContext);
        }
        else {
            return this.getRuleContext(i, CalcProductContext);
        }
    };
    CalcSumContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Space);
        }
        else {
            return this.getToken(css3Parser.Space, i);
        }
    };
    CalcSumContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    CalcSumContext.prototype.Plus = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Plus);
        }
        else {
            return this.getToken(css3Parser.Plus, i);
        }
    };
    CalcSumContext.prototype.Minus = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Minus);
        }
        else {
            return this.getToken(css3Parser.Minus, i);
        }
    };
    Object.defineProperty(CalcSumContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_calcSum; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CalcSumContext.prototype.enterRule = function (listener) {
        if (listener.enterCalcSum) {
            listener.enterCalcSum(this);
        }
    };
    // @Override
    CalcSumContext.prototype.exitRule = function (listener) {
        if (listener.exitCalcSum) {
            listener.exitCalcSum(this);
        }
    };
    // @Override
    CalcSumContext.prototype.accept = function (visitor) {
        if (visitor.visitCalcSum) {
            return visitor.visitCalcSum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CalcSumContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CalcSumContext = CalcSumContext;
var CalcProductContext = /** @class */ (function (_super) {
    __extends(CalcProductContext, _super);
    function CalcProductContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CalcProductContext.prototype.calcValue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CalcValueContext);
        }
        else {
            return this.getRuleContext(i, CalcValueContext);
        }
    };
    CalcProductContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    CalcProductContext.prototype.number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    };
    Object.defineProperty(CalcProductContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_calcProduct; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CalcProductContext.prototype.enterRule = function (listener) {
        if (listener.enterCalcProduct) {
            listener.enterCalcProduct(this);
        }
    };
    // @Override
    CalcProductContext.prototype.exitRule = function (listener) {
        if (listener.exitCalcProduct) {
            listener.exitCalcProduct(this);
        }
    };
    // @Override
    CalcProductContext.prototype.accept = function (visitor) {
        if (visitor.visitCalcProduct) {
            return visitor.visitCalcProduct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CalcProductContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CalcProductContext = CalcProductContext;
var CalcValueContext = /** @class */ (function (_super) {
    __extends(CalcValueContext, _super);
    function CalcValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CalcValueContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    CalcValueContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    CalcValueContext.prototype.dimension = function () {
        return this.tryGetRuleContext(0, DimensionContext);
    };
    CalcValueContext.prototype.unknownDimension = function () {
        return this.tryGetRuleContext(0, UnknownDimensionContext);
    };
    CalcValueContext.prototype.percentage = function () {
        return this.tryGetRuleContext(0, PercentageContext);
    };
    CalcValueContext.prototype.calcSum = function () {
        return this.tryGetRuleContext(0, CalcSumContext);
    };
    Object.defineProperty(CalcValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_calcValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CalcValueContext.prototype.enterRule = function (listener) {
        if (listener.enterCalcValue) {
            listener.enterCalcValue(this);
        }
    };
    // @Override
    CalcValueContext.prototype.exitRule = function (listener) {
        if (listener.exitCalcValue) {
            listener.exitCalcValue(this);
        }
    };
    // @Override
    CalcValueContext.prototype.accept = function (visitor) {
        if (visitor.visitCalcValue) {
            return visitor.visitCalcValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CalcValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CalcValueContext = CalcValueContext;
var FontFaceRuleContext = /** @class */ (function (_super) {
    __extends(FontFaceRuleContext, _super);
    function FontFaceRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FontFaceRuleContext.prototype.FontFace = function () { return this.getToken(css3Parser.FontFace, 0); };
    FontFaceRuleContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    FontFaceRuleContext.prototype.fontFaceDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FontFaceDeclarationContext);
        }
        else {
            return this.getRuleContext(i, FontFaceDeclarationContext);
        }
    };
    Object.defineProperty(FontFaceRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_fontFaceRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FontFaceRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterFontFaceRule) {
            listener.enterFontFaceRule(this);
        }
    };
    // @Override
    FontFaceRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitFontFaceRule) {
            listener.exitFontFaceRule(this);
        }
    };
    // @Override
    FontFaceRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitFontFaceRule) {
            return visitor.visitFontFaceRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FontFaceRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FontFaceRuleContext = FontFaceRuleContext;
var FontFaceDeclarationContext = /** @class */ (function (_super) {
    __extends(FontFaceDeclarationContext, _super);
    function FontFaceDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(FontFaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_fontFaceDeclaration; },
        enumerable: true,
        configurable: true
    });
    FontFaceDeclarationContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return FontFaceDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FontFaceDeclarationContext = FontFaceDeclarationContext;
var KnownFontFaceDeclarationContext = /** @class */ (function (_super) {
    __extends(KnownFontFaceDeclarationContext, _super);
    function KnownFontFaceDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    KnownFontFaceDeclarationContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    KnownFontFaceDeclarationContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    KnownFontFaceDeclarationContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    // @Override
    KnownFontFaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterKnownFontFaceDeclaration) {
            listener.enterKnownFontFaceDeclaration(this);
        }
    };
    // @Override
    KnownFontFaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitKnownFontFaceDeclaration) {
            listener.exitKnownFontFaceDeclaration(this);
        }
    };
    // @Override
    KnownFontFaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitKnownFontFaceDeclaration) {
            return visitor.visitKnownFontFaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KnownFontFaceDeclarationContext;
}(FontFaceDeclarationContext));
exports.KnownFontFaceDeclarationContext = KnownFontFaceDeclarationContext;
var UnknownFontFaceDeclarationContext = /** @class */ (function (_super) {
    __extends(UnknownFontFaceDeclarationContext, _super);
    function UnknownFontFaceDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnknownFontFaceDeclarationContext.prototype.property = function () {
        return this.getRuleContext(0, PropertyContext);
    };
    UnknownFontFaceDeclarationContext.prototype.ws = function () {
        return this.getRuleContext(0, WsContext);
    };
    UnknownFontFaceDeclarationContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    // @Override
    UnknownFontFaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterUnknownFontFaceDeclaration) {
            listener.enterUnknownFontFaceDeclaration(this);
        }
    };
    // @Override
    UnknownFontFaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitUnknownFontFaceDeclaration) {
            listener.exitUnknownFontFaceDeclaration(this);
        }
    };
    // @Override
    UnknownFontFaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitUnknownFontFaceDeclaration) {
            return visitor.visitUnknownFontFaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnknownFontFaceDeclarationContext;
}(FontFaceDeclarationContext));
exports.UnknownFontFaceDeclarationContext = UnknownFontFaceDeclarationContext;
var KeyframesRuleContext = /** @class */ (function (_super) {
    __extends(KeyframesRuleContext, _super);
    function KeyframesRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyframesRuleContext.prototype.Keyframes = function () { return this.getToken(css3Parser.Keyframes, 0); };
    KeyframesRuleContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    KeyframesRuleContext.prototype.Space = function () { return this.getToken(css3Parser.Space, 0); };
    KeyframesRuleContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    KeyframesRuleContext.prototype.keyframesBlocks = function () {
        return this.getRuleContext(0, KeyframesBlocksContext);
    };
    Object.defineProperty(KeyframesRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_keyframesRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyframesRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyframesRule) {
            listener.enterKeyframesRule(this);
        }
    };
    // @Override
    KeyframesRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyframesRule) {
            listener.exitKeyframesRule(this);
        }
    };
    // @Override
    KeyframesRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyframesRule) {
            return visitor.visitKeyframesRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyframesRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyframesRuleContext = KeyframesRuleContext;
var KeyframesBlocksContext = /** @class */ (function (_super) {
    __extends(KeyframesBlocksContext, _super);
    function KeyframesBlocksContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyframesBlocksContext.prototype.keyframeSelector = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyframeSelectorContext);
        }
        else {
            return this.getRuleContext(i, KeyframeSelectorContext);
        }
    };
    KeyframesBlocksContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    KeyframesBlocksContext.prototype.declarationList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationListContext);
        }
        else {
            return this.getRuleContext(i, DeclarationListContext);
        }
    };
    Object.defineProperty(KeyframesBlocksContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_keyframesBlocks; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyframesBlocksContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyframesBlocks) {
            listener.enterKeyframesBlocks(this);
        }
    };
    // @Override
    KeyframesBlocksContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyframesBlocks) {
            listener.exitKeyframesBlocks(this);
        }
    };
    // @Override
    KeyframesBlocksContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyframesBlocks) {
            return visitor.visitKeyframesBlocks(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyframesBlocksContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyframesBlocksContext = KeyframesBlocksContext;
var KeyframeSelectorContext = /** @class */ (function (_super) {
    __extends(KeyframeSelectorContext, _super);
    function KeyframeSelectorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyframeSelectorContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    KeyframeSelectorContext.prototype.From = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.From);
        }
        else {
            return this.getToken(css3Parser.From, i);
        }
    };
    KeyframeSelectorContext.prototype.To = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.To);
        }
        else {
            return this.getToken(css3Parser.To, i);
        }
    };
    KeyframeSelectorContext.prototype.Percentage = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Percentage);
        }
        else {
            return this.getToken(css3Parser.Percentage, i);
        }
    };
    KeyframeSelectorContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Comma);
        }
        else {
            return this.getToken(css3Parser.Comma, i);
        }
    };
    Object.defineProperty(KeyframeSelectorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_keyframeSelector; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyframeSelectorContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyframeSelector) {
            listener.enterKeyframeSelector(this);
        }
    };
    // @Override
    KeyframeSelectorContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyframeSelector) {
            listener.exitKeyframeSelector(this);
        }
    };
    // @Override
    KeyframeSelectorContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyframeSelector) {
            return visitor.visitKeyframeSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyframeSelectorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyframeSelectorContext = KeyframeSelectorContext;
var ViewportContext = /** @class */ (function (_super) {
    __extends(ViewportContext, _super);
    function ViewportContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ViewportContext.prototype.Viewport = function () { return this.getToken(css3Parser.Viewport, 0); };
    ViewportContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    ViewportContext.prototype.declarationList = function () {
        return this.tryGetRuleContext(0, DeclarationListContext);
    };
    Object.defineProperty(ViewportContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_viewport; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ViewportContext.prototype.enterRule = function (listener) {
        if (listener.enterViewport) {
            listener.enterViewport(this);
        }
    };
    // @Override
    ViewportContext.prototype.exitRule = function (listener) {
        if (listener.exitViewport) {
            listener.exitViewport(this);
        }
    };
    // @Override
    ViewportContext.prototype.accept = function (visitor) {
        if (visitor.visitViewport) {
            return visitor.visitViewport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ViewportContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ViewportContext = ViewportContext;
var CounterStyleContext = /** @class */ (function (_super) {
    __extends(CounterStyleContext, _super);
    function CounterStyleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CounterStyleContext.prototype.CounterStyle = function () { return this.getToken(css3Parser.CounterStyle, 0); };
    CounterStyleContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    CounterStyleContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    CounterStyleContext.prototype.declarationList = function () {
        return this.tryGetRuleContext(0, DeclarationListContext);
    };
    Object.defineProperty(CounterStyleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_counterStyle; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CounterStyleContext.prototype.enterRule = function (listener) {
        if (listener.enterCounterStyle) {
            listener.enterCounterStyle(this);
        }
    };
    // @Override
    CounterStyleContext.prototype.exitRule = function (listener) {
        if (listener.exitCounterStyle) {
            listener.exitCounterStyle(this);
        }
    };
    // @Override
    CounterStyleContext.prototype.accept = function (visitor) {
        if (visitor.visitCounterStyle) {
            return visitor.visitCounterStyle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CounterStyleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CounterStyleContext = CounterStyleContext;
var FontFeatureValuesRuleContext = /** @class */ (function (_super) {
    __extends(FontFeatureValuesRuleContext, _super);
    function FontFeatureValuesRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FontFeatureValuesRuleContext.prototype.FontFeatureValues = function () { return this.getToken(css3Parser.FontFeatureValues, 0); };
    FontFeatureValuesRuleContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    FontFeatureValuesRuleContext.prototype.fontFamilyNameList = function () {
        return this.getRuleContext(0, FontFamilyNameListContext);
    };
    FontFeatureValuesRuleContext.prototype.featureValueBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FeatureValueBlockContext);
        }
        else {
            return this.getRuleContext(i, FeatureValueBlockContext);
        }
    };
    Object.defineProperty(FontFeatureValuesRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_fontFeatureValuesRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FontFeatureValuesRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterFontFeatureValuesRule) {
            listener.enterFontFeatureValuesRule(this);
        }
    };
    // @Override
    FontFeatureValuesRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitFontFeatureValuesRule) {
            listener.exitFontFeatureValuesRule(this);
        }
    };
    // @Override
    FontFeatureValuesRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitFontFeatureValuesRule) {
            return visitor.visitFontFeatureValuesRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FontFeatureValuesRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FontFeatureValuesRuleContext = FontFeatureValuesRuleContext;
var FontFamilyNameListContext = /** @class */ (function (_super) {
    __extends(FontFamilyNameListContext, _super);
    function FontFamilyNameListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FontFamilyNameListContext.prototype.fontFamilyName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FontFamilyNameContext);
        }
        else {
            return this.getRuleContext(i, FontFamilyNameContext);
        }
    };
    FontFamilyNameListContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    FontFamilyNameListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Comma);
        }
        else {
            return this.getToken(css3Parser.Comma, i);
        }
    };
    Object.defineProperty(FontFamilyNameListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_fontFamilyNameList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FontFamilyNameListContext.prototype.enterRule = function (listener) {
        if (listener.enterFontFamilyNameList) {
            listener.enterFontFamilyNameList(this);
        }
    };
    // @Override
    FontFamilyNameListContext.prototype.exitRule = function (listener) {
        if (listener.exitFontFamilyNameList) {
            listener.exitFontFamilyNameList(this);
        }
    };
    // @Override
    FontFamilyNameListContext.prototype.accept = function (visitor) {
        if (visitor.visitFontFamilyNameList) {
            return visitor.visitFontFamilyNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FontFamilyNameListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FontFamilyNameListContext = FontFamilyNameListContext;
var FontFamilyNameContext = /** @class */ (function (_super) {
    __extends(FontFamilyNameContext, _super);
    function FontFamilyNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FontFamilyNameContext.prototype.String = function () { return this.tryGetToken(css3Parser.String, 0); };
    FontFamilyNameContext.prototype.ident = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    };
    FontFamilyNameContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    Object.defineProperty(FontFamilyNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_fontFamilyName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FontFamilyNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFontFamilyName) {
            listener.enterFontFamilyName(this);
        }
    };
    // @Override
    FontFamilyNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFontFamilyName) {
            listener.exitFontFamilyName(this);
        }
    };
    // @Override
    FontFamilyNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFontFamilyName) {
            return visitor.visitFontFamilyName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FontFamilyNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FontFamilyNameContext = FontFamilyNameContext;
var FeatureValueBlockContext = /** @class */ (function (_super) {
    __extends(FeatureValueBlockContext, _super);
    function FeatureValueBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FeatureValueBlockContext.prototype.featureType = function () {
        return this.getRuleContext(0, FeatureTypeContext);
    };
    FeatureValueBlockContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    FeatureValueBlockContext.prototype.featureValueDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FeatureValueDefinitionContext);
        }
        else {
            return this.getRuleContext(i, FeatureValueDefinitionContext);
        }
    };
    Object.defineProperty(FeatureValueBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_featureValueBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FeatureValueBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterFeatureValueBlock) {
            listener.enterFeatureValueBlock(this);
        }
    };
    // @Override
    FeatureValueBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitFeatureValueBlock) {
            listener.exitFeatureValueBlock(this);
        }
    };
    // @Override
    FeatureValueBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitFeatureValueBlock) {
            return visitor.visitFeatureValueBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FeatureValueBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FeatureValueBlockContext = FeatureValueBlockContext;
var FeatureTypeContext = /** @class */ (function (_super) {
    __extends(FeatureTypeContext, _super);
    function FeatureTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FeatureTypeContext.prototype.atKeyword = function () {
        return this.getRuleContext(0, AtKeywordContext);
    };
    Object.defineProperty(FeatureTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_featureType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FeatureTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFeatureType) {
            listener.enterFeatureType(this);
        }
    };
    // @Override
    FeatureTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFeatureType) {
            listener.exitFeatureType(this);
        }
    };
    // @Override
    FeatureTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFeatureType) {
            return visitor.visitFeatureType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FeatureTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FeatureTypeContext = FeatureTypeContext;
var FeatureValueDefinitionContext = /** @class */ (function (_super) {
    __extends(FeatureValueDefinitionContext, _super);
    function FeatureValueDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FeatureValueDefinitionContext.prototype.ident = function () {
        return this.getRuleContext(0, IdentContext);
    };
    FeatureValueDefinitionContext.prototype.ws = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WsContext);
        }
        else {
            return this.getRuleContext(i, WsContext);
        }
    };
    FeatureValueDefinitionContext.prototype.number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    };
    Object.defineProperty(FeatureValueDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_featureValueDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FeatureValueDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterFeatureValueDefinition) {
            listener.enterFeatureValueDefinition(this);
        }
    };
    // @Override
    FeatureValueDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitFeatureValueDefinition) {
            listener.exitFeatureValueDefinition(this);
        }
    };
    // @Override
    FeatureValueDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitFeatureValueDefinition) {
            return visitor.visitFeatureValueDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FeatureValueDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FeatureValueDefinitionContext = FeatureValueDefinitionContext;
var IdentContext = /** @class */ (function (_super) {
    __extends(IdentContext, _super);
    function IdentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentContext.prototype.Ident = function () { return this.tryGetToken(css3Parser.Ident, 0); };
    IdentContext.prototype.MediaOnly = function () { return this.tryGetToken(css3Parser.MediaOnly, 0); };
    IdentContext.prototype.Not = function () { return this.tryGetToken(css3Parser.Not, 0); };
    IdentContext.prototype.And = function () { return this.tryGetToken(css3Parser.And, 0); };
    IdentContext.prototype.Or = function () { return this.tryGetToken(css3Parser.Or, 0); };
    IdentContext.prototype.From = function () { return this.tryGetToken(css3Parser.From, 0); };
    IdentContext.prototype.To = function () { return this.tryGetToken(css3Parser.To, 0); };
    Object.defineProperty(IdentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_ident; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentContext.prototype.enterRule = function (listener) {
        if (listener.enterIdent) {
            listener.enterIdent(this);
        }
    };
    // @Override
    IdentContext.prototype.exitRule = function (listener) {
        if (listener.exitIdent) {
            listener.exitIdent(this);
        }
    };
    // @Override
    IdentContext.prototype.accept = function (visitor) {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentContext = IdentContext;
var WsContext = /** @class */ (function (_super) {
    __extends(WsContext, _super);
    function WsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WsContext.prototype.Comment = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Comment);
        }
        else {
            return this.getToken(css3Parser.Comment, i);
        }
    };
    WsContext.prototype.Space = function (i) {
        if (i === undefined) {
            return this.getTokens(css3Parser.Space);
        }
        else {
            return this.getToken(css3Parser.Space, i);
        }
    };
    Object.defineProperty(WsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return css3Parser.RULE_ws; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WsContext.prototype.enterRule = function (listener) {
        if (listener.enterWs) {
            listener.enterWs(this);
        }
    };
    // @Override
    WsContext.prototype.exitRule = function (listener) {
        if (listener.exitWs) {
            listener.exitWs(this);
        }
    };
    // @Override
    WsContext.prototype.accept = function (visitor) {
        if (visitor.visitWs) {
            return visitor.visitWs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WsContext = WsContext;
