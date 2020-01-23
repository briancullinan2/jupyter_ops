"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/atl/ATL.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ATLParser = /** @class */ (function (_super) {
    __extends(ATLParser, _super);
    function ATLParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ATLParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ATLParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ATLParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATLParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "ATL.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATLParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ATLParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ATLParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ATLParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    ATLParser.prototype.unit = function () {
        var _localctx = new UnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ATLParser.RULE_unit);
        try {
            this.state = 189;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 186;
                        this.module();
                    }
                    break;
                case ATLParser.T__6:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 187;
                        this.library();
                    }
                    break;
                case ATLParser.T__7:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 188;
                        this.query();
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
    ATLParser.prototype.module = function () {
        var _localctx = new ModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ATLParser.RULE_module);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 191;
                this.match(ATLParser.T__0);
                this.state = 192;
                _la = this._input.LA(1);
                if (!(_la === ATLParser.STRING || _la === ATLParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 193;
                this.match(ATLParser.T__1);
                this.state = 194;
                this.match(ATLParser.T__2);
                this.state = 195;
                this.targetModelPattern();
                this.state = 196;
                this.transformationMode();
                this.state = 197;
                this.sourceModelPattern();
                this.state = 198;
                this.match(ATLParser.T__1);
                this.state = 202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__9) {
                    {
                        {
                            this.state = 199;
                            this.libraryRef();
                        }
                    }
                    this.state = 204;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ATLParser.T__4) | (1 << ATLParser.T__10) | (1 << ATLParser.T__16) | (1 << ATLParser.T__17) | (1 << ATLParser.T__18) | (1 << ATLParser.T__19) | (1 << ATLParser.T__24) | (1 << ATLParser.T__25))) !== 0) || _la === ATLParser.T__76) {
                    {
                        {
                            this.state = 205;
                            this.moduleElement();
                        }
                    }
                    this.state = 210;
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
    ATLParser.prototype.targetModelPattern = function () {
        var _localctx = new TargetModelPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ATLParser.RULE_targetModelPattern);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.oclModel();
                this.state = 216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__3) {
                    {
                        {
                            this.state = 212;
                            this.match(ATLParser.T__3);
                            this.state = 213;
                            this.oclModel();
                        }
                    }
                    this.state = 218;
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
    ATLParser.prototype.sourceModelPattern = function () {
        var _localctx = new SourceModelPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ATLParser.RULE_sourceModelPattern);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                this.oclModel();
                this.state = 224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__3) {
                    {
                        {
                            this.state = 220;
                            this.match(ATLParser.T__3);
                            this.state = 221;
                            this.oclModel();
                        }
                    }
                    this.state = 226;
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
    ATLParser.prototype.transformationMode = function () {
        var _localctx = new TransformationModeContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ATLParser.RULE_transformationMode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                _la = this._input.LA(1);
                if (!(_la === ATLParser.T__4 || _la === ATLParser.T__5)) {
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
    ATLParser.prototype.library = function () {
        var _localctx = new LibraryContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ATLParser.RULE_library);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(ATLParser.T__6);
                this.state = 230;
                _la = this._input.LA(1);
                if (!(_la === ATLParser.STRING || _la === ATLParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 231;
                this.match(ATLParser.T__1);
                this.state = 235;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__9) {
                    {
                        {
                            this.state = 232;
                            this.libraryRef();
                        }
                    }
                    this.state = 237;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__10) {
                    {
                        {
                            this.state = 238;
                            this.helper();
                        }
                    }
                    this.state = 243;
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
    ATLParser.prototype.query = function () {
        var _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ATLParser.RULE_query);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.match(ATLParser.T__7);
                this.state = 245;
                _la = this._input.LA(1);
                if (!(_la === ATLParser.STRING || _la === ATLParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 246;
                this.match(ATLParser.T__8);
                this.state = 247;
                this.oclExpression();
                this.state = 248;
                this.match(ATLParser.T__1);
                this.state = 252;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__9) {
                    {
                        {
                            this.state = 249;
                            this.libraryRef();
                        }
                    }
                    this.state = 254;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__10) {
                    {
                        {
                            this.state = 255;
                            this.helper();
                        }
                    }
                    this.state = 260;
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
    ATLParser.prototype.libraryRef = function () {
        var _localctx = new LibraryRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ATLParser.RULE_libraryRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this.match(ATLParser.T__9);
                this.state = 262;
                this.match(ATLParser.STRING);
                this.state = 263;
                this.match(ATLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.moduleElement = function () {
        var _localctx = new ModuleElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ATLParser.RULE_moduleElement);
        try {
            this.state = 267;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__10:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 265;
                        this.helper();
                    }
                    break;
                case ATLParser.T__4:
                case ATLParser.T__16:
                case ATLParser.T__17:
                case ATLParser.T__18:
                case ATLParser.T__19:
                case ATLParser.T__24:
                case ATLParser.T__25:
                case ATLParser.T__76:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 266;
                        this.arule();
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
    ATLParser.prototype.helper = function () {
        var _localctx = new HelperContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ATLParser.RULE_helper);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 269;
                this.match(ATLParser.T__10);
                this.state = 270;
                this.oclFeatureDefinition();
                this.state = 271;
                this.match(ATLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclFeatureDefinition = function () {
        var _localctx = new OclFeatureDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ATLParser.RULE_oclFeatureDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__13) {
                    {
                        this.state = 273;
                        this.oclContextDefinition();
                    }
                }
                this.state = 276;
                this.match(ATLParser.T__11);
                this.state = 277;
                this.match(ATLParser.T__12);
                this.state = 278;
                this.oclFeature();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclContextDefinition = function () {
        var _localctx = new OclContextDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ATLParser.RULE_oclContextDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 280;
                this.match(ATLParser.T__13);
                this.state = 281;
                this.oclType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclFeature = function () {
        var _localctx = new OclFeatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ATLParser.RULE_oclFeature);
        try {
            this.state = 285;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 283;
                        this.operation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 284;
                        this.attribute();
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
    ATLParser.prototype.operation = function () {
        var _localctx = new OperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ATLParser.RULE_operation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.match(ATLParser.IDENTIFIER);
                this.state = 288;
                this.match(ATLParser.T__14);
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.IDENTIFIER) {
                    {
                        this.state = 289;
                        this.parameter();
                        this.state = 294;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 290;
                                    this.match(ATLParser.T__3);
                                    this.state = 291;
                                    this.parameter();
                                }
                            }
                            this.state = 296;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 299;
                this.match(ATLParser.T__15);
                this.state = 300;
                this.match(ATLParser.T__12);
                this.state = 301;
                this.oclType();
                this.state = 302;
                this.match(ATLParser.T__8);
                this.state = 303;
                this.oclExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.parameter = function () {
        var _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ATLParser.RULE_parameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.match(ATLParser.IDENTIFIER);
                this.state = 306;
                this.match(ATLParser.T__12);
                this.state = 307;
                this.oclType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.attribute = function () {
        var _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ATLParser.RULE_attribute);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.match(ATLParser.IDENTIFIER);
                this.state = 310;
                this.match(ATLParser.T__12);
                this.state = 311;
                this.oclType();
                this.state = 312;
                this.match(ATLParser.T__8);
                this.state = 313;
                this.oclExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.arule = function () {
        var _localctx = new AruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ATLParser.RULE_arule);
        try {
            this.state = 317;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 315;
                        this.calledRule();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 316;
                        this.matchedRule();
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
    ATLParser.prototype.matchedRule = function () {
        var _localctx = new MatchedRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ATLParser.RULE_matchedRule);
        try {
            this.state = 321;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__16:
                case ATLParser.T__17:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 319;
                        this.lazyMatchedRule();
                    }
                    break;
                case ATLParser.T__4:
                case ATLParser.T__18:
                case ATLParser.T__19:
                case ATLParser.T__76:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 320;
                        this.matchedRule_abstractContents();
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
    ATLParser.prototype.lazyMatchedRule = function () {
        var _localctx = new LazyMatchedRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ATLParser.RULE_lazyMatchedRule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 324;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__16) {
                    {
                        this.state = 323;
                        this.match(ATLParser.T__16);
                    }
                }
                this.state = 326;
                this.match(ATLParser.T__17);
                this.state = 328;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__18) {
                    {
                        this.state = 327;
                        this.match(ATLParser.T__18);
                    }
                }
                this.state = 331;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__4) {
                    {
                        this.state = 330;
                        this.match(ATLParser.T__4);
                    }
                }
                this.state = 333;
                this.match(ATLParser.T__19);
                this.state = 334;
                this.match(ATLParser.IDENTIFIER);
                this.state = 337;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__20) {
                    {
                        this.state = 335;
                        this.match(ATLParser.T__20);
                        this.state = 336;
                        this.match(ATLParser.IDENTIFIER);
                    }
                }
                this.state = 339;
                this.match(ATLParser.T__21);
                this.state = 340;
                this.inPattern();
                this.state = 350;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__22) {
                    {
                        this.state = 341;
                        this.match(ATLParser.T__22);
                        this.state = 342;
                        this.match(ATLParser.T__21);
                        this.state = 346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 343;
                                    this.ruleVariableDeclaration();
                                }
                            }
                            this.state = 348;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 349;
                        this.match(ATLParser.T__23);
                    }
                }
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__27) {
                    {
                        this.state = 352;
                        this.outPattern();
                    }
                }
                this.state = 356;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__32) {
                    {
                        this.state = 355;
                        this.actionBlock();
                    }
                }
                this.state = 358;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.ruleVariableDeclaration = function () {
        var _localctx = new RuleVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ATLParser.RULE_ruleVariableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this.match(ATLParser.IDENTIFIER);
                this.state = 361;
                this.match(ATLParser.T__12);
                this.state = 362;
                this.oclType();
                this.state = 363;
                this.match(ATLParser.T__8);
                this.state = 364;
                this.oclExpression();
                this.state = 365;
                this.match(ATLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.calledRule = function () {
        var _localctx = new CalledRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ATLParser.RULE_calledRule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__24) {
                    {
                        this.state = 367;
                        this.match(ATLParser.T__24);
                    }
                }
                this.state = 371;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__25) {
                    {
                        this.state = 370;
                        this.match(ATLParser.T__25);
                    }
                }
                this.state = 373;
                this.match(ATLParser.T__19);
                this.state = 374;
                this.match(ATLParser.IDENTIFIER);
                this.state = 375;
                this.match(ATLParser.T__14);
                this.state = 384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.IDENTIFIER) {
                    {
                        this.state = 376;
                        this.parameter();
                        this.state = 381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 377;
                                    this.match(ATLParser.T__3);
                                    this.state = 378;
                                    this.parameter();
                                }
                            }
                            this.state = 383;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 386;
                this.match(ATLParser.T__15);
                this.state = 387;
                this.match(ATLParser.T__21);
                this.state = 397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__22) {
                    {
                        this.state = 388;
                        this.match(ATLParser.T__22);
                        this.state = 389;
                        this.match(ATLParser.T__21);
                        this.state = 393;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 390;
                                    this.ruleVariableDeclaration();
                                }
                            }
                            this.state = 395;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 396;
                        this.match(ATLParser.T__23);
                    }
                }
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__27) {
                    {
                        this.state = 399;
                        this.outPattern();
                    }
                }
                this.state = 403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__32) {
                    {
                        this.state = 402;
                        this.actionBlock();
                    }
                }
                this.state = 405;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.inPattern = function () {
        var _localctx = new InPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ATLParser.RULE_inPattern);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 407;
                this.match(ATLParser.T__5);
                this.state = 408;
                this.inPatternElement();
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__3) {
                    {
                        {
                            this.state = 409;
                            this.match(ATLParser.T__3);
                            this.state = 410;
                            this.inPatternElement();
                        }
                    }
                    this.state = 415;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14) {
                    {
                        this.state = 416;
                        this.match(ATLParser.T__14);
                        this.state = 417;
                        this.oclExpression();
                        this.state = 418;
                        this.match(ATLParser.T__15);
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
    ATLParser.prototype.inPatternElement = function () {
        var _localctx = new InPatternElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ATLParser.RULE_inPatternElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 422;
                this.simpleInPatternElement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.simpleInPatternElement = function () {
        var _localctx = new SimpleInPatternElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ATLParser.RULE_simpleInPatternElement);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 424;
                this.match(ATLParser.IDENTIFIER);
                this.state = 425;
                this.match(ATLParser.T__12);
                this.state = 426;
                this.oclType();
                this.state = 436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__26) {
                    {
                        this.state = 427;
                        this.match(ATLParser.T__26);
                        this.state = 428;
                        this.match(ATLParser.IDENTIFIER);
                        this.state = 433;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 429;
                                        this.match(ATLParser.T__3);
                                        this.state = 430;
                                        this.match(ATLParser.IDENTIFIER);
                                    }
                                }
                            }
                            this.state = 435;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
    ATLParser.prototype.outPattern = function () {
        var _localctx = new OutPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ATLParser.RULE_outPattern);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 438;
                this.match(ATLParser.T__27);
                this.state = 439;
                this.outPatternElement();
                this.state = 444;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__3) {
                    {
                        {
                            this.state = 440;
                            this.match(ATLParser.T__3);
                            this.state = 441;
                            this.outPatternElement();
                        }
                    }
                    this.state = 446;
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
    ATLParser.prototype.outPatternElement = function () {
        var _localctx = new OutPatternElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ATLParser.RULE_outPatternElement);
        try {
            this.state = 449;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 447;
                        this.simpleOutPatternElement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 448;
                        this.forEachOutPatternElement();
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
    ATLParser.prototype.simpleOutPatternElement = function () {
        var _localctx = new SimpleOutPatternElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ATLParser.RULE_simpleOutPatternElement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 451;
                this.match(ATLParser.IDENTIFIER);
                this.state = 452;
                this.match(ATLParser.T__12);
                this.state = 453;
                this.oclType();
                this.state = 456;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__26) {
                    {
                        this.state = 454;
                        this.match(ATLParser.T__26);
                        this.state = 455;
                        this.match(ATLParser.IDENTIFIER);
                    }
                }
                this.state = 460;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__28) {
                    {
                        this.state = 458;
                        this.match(ATLParser.T__28);
                        this.state = 459;
                        this.match(ATLParser.IDENTIFIER);
                    }
                }
                this.state = 474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14) {
                    {
                        this.state = 462;
                        this.match(ATLParser.T__14);
                        this.state = 471;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ATLParser.IDENTIFIER) {
                            {
                                this.state = 463;
                                this.binding();
                                this.state = 468;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === ATLParser.T__3) {
                                    {
                                        {
                                            this.state = 464;
                                            this.match(ATLParser.T__3);
                                            this.state = 465;
                                            this.binding();
                                        }
                                    }
                                    this.state = 470;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 473;
                        this.match(ATLParser.T__15);
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
    ATLParser.prototype.forEachOutPatternElement = function () {
        var _localctx = new ForEachOutPatternElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ATLParser.RULE_forEachOutPatternElement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 476;
                this.match(ATLParser.IDENTIFIER);
                this.state = 477;
                this.match(ATLParser.T__12);
                this.state = 478;
                this.match(ATLParser.T__29);
                this.state = 479;
                this.oclType();
                this.state = 480;
                this.match(ATLParser.T__30);
                this.state = 481;
                this.match(ATLParser.T__14);
                this.state = 482;
                this.iterator();
                this.state = 483;
                this.match(ATLParser.T__26);
                this.state = 484;
                this.oclExpression();
                this.state = 485;
                this.match(ATLParser.T__15);
                this.state = 488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__28) {
                    {
                        this.state = 486;
                        this.match(ATLParser.T__28);
                        this.state = 487;
                        this.match(ATLParser.IDENTIFIER);
                    }
                }
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14) {
                    {
                        this.state = 490;
                        this.match(ATLParser.T__14);
                        this.state = 499;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ATLParser.IDENTIFIER) {
                            {
                                this.state = 491;
                                this.binding();
                                this.state = 496;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === ATLParser.T__3) {
                                    {
                                        {
                                            this.state = 492;
                                            this.match(ATLParser.T__3);
                                            this.state = 493;
                                            this.binding();
                                        }
                                    }
                                    this.state = 498;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 501;
                        this.match(ATLParser.T__15);
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
    ATLParser.prototype.binding = function () {
        var _localctx = new BindingContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ATLParser.RULE_binding);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 504;
                this.match(ATLParser.IDENTIFIER);
                this.state = 505;
                this.match(ATLParser.T__31);
                this.state = 506;
                this.oclExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.actionBlock = function () {
        var _localctx = new ActionBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ATLParser.RULE_actionBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 508;
                this.match(ATLParser.T__32);
                this.state = 509;
                this.match(ATLParser.T__21);
                this.state = 513;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__35 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                    {
                        {
                            this.state = 510;
                            this.statement();
                        }
                    }
                    this.state = 515;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 516;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ATLParser.RULE_statement);
        try {
            this.state = 522;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 518;
                        this.ifStat();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 519;
                        this.expressionStat();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 520;
                        this.bindingStat();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 521;
                        this.forStat();
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
    ATLParser.prototype.bindingStat = function () {
        var _localctx = new BindingStatContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ATLParser.RULE_bindingStat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                this.oclExpression();
                this.state = 525;
                this.match(ATLParser.T__31);
                this.state = 526;
                this.oclExpression();
                this.state = 527;
                this.match(ATLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.expressionStat = function () {
        var _localctx = new ExpressionStatContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ATLParser.RULE_expressionStat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 529;
                this.oclExpression();
                this.state = 530;
                this.match(ATLParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.ifStat = function () {
        var _localctx = new IfStatContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ATLParser.RULE_ifStat);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
                this.match(ATLParser.T__33);
                this.state = 533;
                this.match(ATLParser.T__14);
                this.state = 534;
                this.oclExpression();
                this.state = 535;
                this.match(ATLParser.T__15);
                this.state = 545;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ATLParser.T__14:
                    case ATLParser.T__33:
                    case ATLParser.T__35:
                    case ATLParser.T__39:
                    case ATLParser.T__40:
                    case ATLParser.T__41:
                    case ATLParser.T__44:
                    case ATLParser.T__45:
                    case ATLParser.T__46:
                    case ATLParser.T__47:
                    case ATLParser.T__48:
                    case ATLParser.T__49:
                    case ATLParser.T__50:
                    case ATLParser.T__51:
                    case ATLParser.T__52:
                    case ATLParser.T__53:
                    case ATLParser.T__54:
                    case ATLParser.T__55:
                    case ATLParser.T__56:
                    case ATLParser.T__57:
                    case ATLParser.T__60:
                    case ATLParser.T__61:
                    case ATLParser.T__77:
                    case ATLParser.T__78:
                    case ATLParser.T__79:
                    case ATLParser.STRING:
                    case ATLParser.INTEGER:
                    case ATLParser.FLOAT:
                    case ATLParser.IDENTIFIER:
                        {
                            this.state = 536;
                            this.statement();
                        }
                        break;
                    case ATLParser.T__21:
                        {
                            this.state = 537;
                            this.match(ATLParser.T__21);
                            this.state = 541;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__35 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                                {
                                    {
                                        this.state = 538;
                                        this.statement();
                                    }
                                }
                                this.state = 543;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 544;
                            this.match(ATLParser.T__23);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 559;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                    case 1:
                        {
                            this.state = 547;
                            this.match(ATLParser.T__34);
                            this.state = 557;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ATLParser.T__14:
                                case ATLParser.T__33:
                                case ATLParser.T__35:
                                case ATLParser.T__39:
                                case ATLParser.T__40:
                                case ATLParser.T__41:
                                case ATLParser.T__44:
                                case ATLParser.T__45:
                                case ATLParser.T__46:
                                case ATLParser.T__47:
                                case ATLParser.T__48:
                                case ATLParser.T__49:
                                case ATLParser.T__50:
                                case ATLParser.T__51:
                                case ATLParser.T__52:
                                case ATLParser.T__53:
                                case ATLParser.T__54:
                                case ATLParser.T__55:
                                case ATLParser.T__56:
                                case ATLParser.T__57:
                                case ATLParser.T__60:
                                case ATLParser.T__61:
                                case ATLParser.T__77:
                                case ATLParser.T__78:
                                case ATLParser.T__79:
                                case ATLParser.STRING:
                                case ATLParser.INTEGER:
                                case ATLParser.FLOAT:
                                case ATLParser.IDENTIFIER:
                                    {
                                        this.state = 548;
                                        this.statement();
                                    }
                                    break;
                                case ATLParser.T__21:
                                    {
                                        this.state = 549;
                                        this.match(ATLParser.T__21);
                                        this.state = 553;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__35 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                                            {
                                                {
                                                    this.state = 550;
                                                    this.statement();
                                                }
                                            }
                                            this.state = 555;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 556;
                                        this.match(ATLParser.T__23);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
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
    ATLParser.prototype.forStat = function () {
        var _localctx = new ForStatContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ATLParser.RULE_forStat);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 561;
                this.match(ATLParser.T__35);
                this.state = 562;
                this.match(ATLParser.T__14);
                this.state = 563;
                this.iterator();
                this.state = 564;
                this.match(ATLParser.T__26);
                this.state = 565;
                this.oclExpression();
                this.state = 566;
                this.match(ATLParser.T__15);
                this.state = 567;
                this.match(ATLParser.T__21);
                this.state = 571;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__35 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                    {
                        {
                            this.state = 568;
                            this.statement();
                        }
                    }
                    this.state = 573;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 574;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclModel = function () {
        var _localctx = new OclModelContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ATLParser.RULE_oclModel);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 576;
                this.match(ATLParser.IDENTIFIER);
                this.state = 577;
                this.match(ATLParser.T__12);
                this.state = 578;
                this.match(ATLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclModelElement = function () {
        var _localctx = new OclModelElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ATLParser.RULE_oclModelElement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                this.match(ATLParser.IDENTIFIER);
                this.state = 581;
                this.match(ATLParser.T__36);
                this.state = 582;
                _la = this._input.LA(1);
                if (!(_la === ATLParser.STRING || _la === ATLParser.IDENTIFIER)) {
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
    ATLParser.prototype.oclExpression = function () {
        var _localctx = new OclExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ATLParser.RULE_oclExpression);
        try {
            this.state = 586;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__14:
                case ATLParser.T__33:
                case ATLParser.T__39:
                case ATLParser.T__40:
                case ATLParser.T__41:
                case ATLParser.T__44:
                case ATLParser.T__46:
                case ATLParser.T__47:
                case ATLParser.T__48:
                case ATLParser.T__49:
                case ATLParser.T__50:
                case ATLParser.T__51:
                case ATLParser.T__52:
                case ATLParser.T__53:
                case ATLParser.T__54:
                case ATLParser.T__55:
                case ATLParser.T__56:
                case ATLParser.T__57:
                case ATLParser.T__60:
                case ATLParser.T__61:
                case ATLParser.T__77:
                case ATLParser.T__78:
                case ATLParser.T__79:
                case ATLParser.STRING:
                case ATLParser.INTEGER:
                case ATLParser.FLOAT:
                case ATLParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 584;
                        this.priority_5();
                    }
                    break;
                case ATLParser.T__45:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 585;
                        this.letExp();
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
    ATLParser.prototype.iteratorExp = function () {
        var _localctx = new IteratorExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ATLParser.RULE_iteratorExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.match(ATLParser.IDENTIFIER);
                this.state = 589;
                this.match(ATLParser.T__14);
                this.state = 590;
                this.iterator();
                this.state = 595;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__3) {
                    {
                        {
                            this.state = 591;
                            this.match(ATLParser.T__3);
                            this.state = 592;
                            this.iterator();
                        }
                    }
                    this.state = 597;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 598;
                this.match(ATLParser.T__37);
                this.state = 599;
                this.oclExpression();
                this.state = 600;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.iterateExp = function () {
        var _localctx = new IterateExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ATLParser.RULE_iterateExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 602;
                this.match(ATLParser.T__38);
                this.state = 603;
                this.match(ATLParser.T__14);
                this.state = 604;
                this.iterator();
                this.state = 609;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__3) {
                    {
                        {
                            this.state = 605;
                            this.match(ATLParser.T__3);
                            this.state = 606;
                            this.iterator();
                        }
                    }
                    this.state = 611;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 612;
                this.match(ATLParser.T__1);
                this.state = 613;
                this.variableDeclaration();
                this.state = 614;
                this.match(ATLParser.T__37);
                this.state = 615;
                this.oclExpression();
                this.state = 616;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.collectionOperationCallExp = function () {
        var _localctx = new CollectionOperationCallExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ATLParser.RULE_collectionOperationCallExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 618;
                this.match(ATLParser.IDENTIFIER);
                this.state = 619;
                this.match(ATLParser.T__14);
                this.state = 628;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                    {
                        this.state = 620;
                        this.oclExpression();
                        this.state = 625;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 621;
                                    this.match(ATLParser.T__3);
                                    this.state = 622;
                                    this.oclExpression();
                                }
                            }
                            this.state = 627;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 630;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.operationCallExp = function () {
        var _localctx = new OperationCallExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, ATLParser.RULE_operationCallExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 632;
                this.match(ATLParser.IDENTIFIER);
                this.state = 633;
                this.match(ATLParser.T__14);
                this.state = 642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                    {
                        this.state = 634;
                        this.oclExpression();
                        this.state = 639;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 635;
                                    this.match(ATLParser.T__3);
                                    this.state = 636;
                                    this.oclExpression();
                                }
                            }
                            this.state = 641;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 644;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.navigationOrAttributeCallExp = function () {
        var _localctx = new NavigationOrAttributeCallExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, ATLParser.RULE_navigationOrAttributeCallExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 646;
                this.match(ATLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.iterator = function () {
        var _localctx = new IteratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, ATLParser.RULE_iterator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 648;
                this.match(ATLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclUndefinedExp = function () {
        var _localctx = new OclUndefinedExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, ATLParser.RULE_oclUndefinedExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 650;
                this.match(ATLParser.T__39);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.primitiveExp = function () {
        var _localctx = new PrimitiveExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, ATLParser.RULE_primitiveExp);
        try {
            this.state = 655;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.INTEGER:
                case ATLParser.FLOAT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 652;
                        this.numericExp();
                    }
                    break;
                case ATLParser.T__40:
                case ATLParser.T__41:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 653;
                        this.booleanExp();
                    }
                    break;
                case ATLParser.STRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 654;
                        this.stringExp();
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
    ATLParser.prototype.numericExp = function () {
        var _localctx = new NumericExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, ATLParser.RULE_numericExp);
        try {
            this.state = 659;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.INTEGER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 657;
                        this.integerExp();
                    }
                    break;
                case ATLParser.FLOAT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 658;
                        this.realExp();
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
    ATLParser.prototype.booleanExp = function () {
        var _localctx = new BooleanExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, ATLParser.RULE_booleanExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 661;
                _la = this._input.LA(1);
                if (!(_la === ATLParser.T__40 || _la === ATLParser.T__41)) {
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
    ATLParser.prototype.integerExp = function () {
        var _localctx = new IntegerExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, ATLParser.RULE_integerExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 663;
                this.match(ATLParser.INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.realExp = function () {
        var _localctx = new RealExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, ATLParser.RULE_realExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 665;
                this.match(ATLParser.FLOAT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.stringExp = function () {
        var _localctx = new StringExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, ATLParser.RULE_stringExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 667;
                this.match(ATLParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.ifExp = function () {
        var _localctx = new IfExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, ATLParser.RULE_ifExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 669;
                this.match(ATLParser.T__33);
                this.state = 670;
                this.oclExpression();
                this.state = 671;
                this.match(ATLParser.T__42);
                this.state = 672;
                this.oclExpression();
                this.state = 673;
                this.match(ATLParser.T__34);
                this.state = 674;
                this.oclExpression();
                this.state = 675;
                this.match(ATLParser.T__43);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.variableExp = function () {
        var _localctx = new VariableExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, ATLParser.RULE_variableExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 677;
                this.match(ATLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.superExp = function () {
        var _localctx = new SuperExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, ATLParser.RULE_superExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 679;
                this.match(ATLParser.T__44);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.letExp = function () {
        var _localctx = new LetExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, ATLParser.RULE_letExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 681;
                this.match(ATLParser.T__45);
                this.state = 682;
                this.variableDeclaration();
                this.state = 683;
                this.match(ATLParser.T__26);
                this.state = 684;
                this.oclExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, ATLParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 686;
                this.match(ATLParser.IDENTIFIER);
                this.state = 687;
                this.match(ATLParser.T__12);
                this.state = 688;
                this.oclType();
                this.state = 689;
                this.match(ATLParser.T__8);
                this.state = 690;
                this.oclExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.enumLiteralExp = function () {
        var _localctx = new EnumLiteralExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, ATLParser.RULE_enumLiteralExp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 692;
                this.match(ATLParser.T__46);
                this.state = 693;
                this.match(ATLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.collectionExp = function () {
        var _localctx = new CollectionExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, ATLParser.RULE_collectionExp);
        try {
            this.state = 699;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__47:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 695;
                        this.bagExp();
                    }
                    break;
                case ATLParser.T__48:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 696;
                        this.setExp();
                    }
                    break;
                case ATLParser.T__49:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 697;
                        this.orderedSetExp();
                    }
                    break;
                case ATLParser.T__50:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 698;
                        this.sequenceExp();
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
    ATLParser.prototype.bagExp = function () {
        var _localctx = new BagExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, ATLParser.RULE_bagExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 701;
                this.match(ATLParser.T__47);
                this.state = 702;
                this.match(ATLParser.T__21);
                this.state = 711;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                    {
                        this.state = 703;
                        this.oclExpression();
                        this.state = 708;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 704;
                                    this.match(ATLParser.T__3);
                                    this.state = 705;
                                    this.oclExpression();
                                }
                            }
                            this.state = 710;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 713;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.setExp = function () {
        var _localctx = new SetExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, ATLParser.RULE_setExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 715;
                this.match(ATLParser.T__48);
                this.state = 716;
                this.match(ATLParser.T__21);
                this.state = 725;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                    {
                        this.state = 717;
                        this.oclExpression();
                        this.state = 722;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 718;
                                    this.match(ATLParser.T__3);
                                    this.state = 719;
                                    this.oclExpression();
                                }
                            }
                            this.state = 724;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 727;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.orderedSetExp = function () {
        var _localctx = new OrderedSetExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, ATLParser.RULE_orderedSetExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 729;
                this.match(ATLParser.T__49);
                this.state = 730;
                this.match(ATLParser.T__21);
                this.state = 739;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                    {
                        this.state = 731;
                        this.oclExpression();
                        this.state = 736;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 732;
                                    this.match(ATLParser.T__3);
                                    this.state = 733;
                                    this.oclExpression();
                                }
                            }
                            this.state = 738;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 741;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.sequenceExp = function () {
        var _localctx = new SequenceExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, ATLParser.RULE_sequenceExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                this.match(ATLParser.T__50);
                this.state = 744;
                this.match(ATLParser.T__21);
                this.state = 753;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ATLParser.T__33 - 34)) | (1 << (ATLParser.T__39 - 34)) | (1 << (ATLParser.T__40 - 34)) | (1 << (ATLParser.T__41 - 34)) | (1 << (ATLParser.T__44 - 34)) | (1 << (ATLParser.T__45 - 34)) | (1 << (ATLParser.T__46 - 34)) | (1 << (ATLParser.T__47 - 34)) | (1 << (ATLParser.T__48 - 34)) | (1 << (ATLParser.T__49 - 34)) | (1 << (ATLParser.T__50 - 34)) | (1 << (ATLParser.T__51 - 34)) | (1 << (ATLParser.T__52 - 34)) | (1 << (ATLParser.T__53 - 34)) | (1 << (ATLParser.T__54 - 34)) | (1 << (ATLParser.T__55 - 34)) | (1 << (ATLParser.T__56 - 34)) | (1 << (ATLParser.T__57 - 34)) | (1 << (ATLParser.T__60 - 34)) | (1 << (ATLParser.T__61 - 34)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ATLParser.T__77 - 78)) | (1 << (ATLParser.T__78 - 78)) | (1 << (ATLParser.T__79 - 78)) | (1 << (ATLParser.STRING - 78)) | (1 << (ATLParser.INTEGER - 78)) | (1 << (ATLParser.FLOAT - 78)) | (1 << (ATLParser.IDENTIFIER - 78)))) !== 0)) {
                    {
                        this.state = 745;
                        this.oclExpression();
                        this.state = 750;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 746;
                                    this.match(ATLParser.T__3);
                                    this.state = 747;
                                    this.oclExpression();
                                }
                            }
                            this.state = 752;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 755;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.mapExp = function () {
        var _localctx = new MapExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, ATLParser.RULE_mapExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 757;
                this.match(ATLParser.T__51);
                this.state = 758;
                this.match(ATLParser.T__21);
                this.state = 767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__14) {
                    {
                        this.state = 759;
                        this.mapElement();
                        this.state = 764;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 760;
                                    this.match(ATLParser.T__3);
                                    this.state = 761;
                                    this.mapElement();
                                }
                            }
                            this.state = 766;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 769;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.mapElement = function () {
        var _localctx = new MapElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, ATLParser.RULE_mapElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 771;
                this.match(ATLParser.T__14);
                this.state = 772;
                this.oclExpression();
                this.state = 773;
                this.match(ATLParser.T__3);
                this.state = 774;
                this.oclExpression();
                this.state = 775;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.tupleExp = function () {
        var _localctx = new TupleExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, ATLParser.RULE_tupleExp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 777;
                this.match(ATLParser.T__52);
                this.state = 778;
                this.match(ATLParser.T__21);
                this.state = 787;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.IDENTIFIER) {
                    {
                        this.state = 779;
                        this.tuplePart();
                        this.state = 784;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 780;
                                    this.match(ATLParser.T__3);
                                    this.state = 781;
                                    this.tuplePart();
                                }
                            }
                            this.state = 786;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 789;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.tuplePart = function () {
        var _localctx = new TuplePartContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, ATLParser.RULE_tuplePart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 791;
                this.match(ATLParser.IDENTIFIER);
                this.state = 794;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__12) {
                    {
                        this.state = 792;
                        this.match(ATLParser.T__12);
                        this.state = 793;
                        this.oclType();
                    }
                }
                this.state = 796;
                this.match(ATLParser.T__8);
                this.state = 797;
                this.oclExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclType = function () {
        var _localctx = new OclTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, ATLParser.RULE_oclType);
        try {
            this.state = 806;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 799;
                        this.oclModelElement();
                    }
                    break;
                case ATLParser.T__78:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 800;
                        this.oclAnyType();
                    }
                    break;
                case ATLParser.T__53:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 801;
                        this.tupleType();
                    }
                    break;
                case ATLParser.T__51:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 802;
                        this.mapType();
                    }
                    break;
                case ATLParser.T__54:
                case ATLParser.T__55:
                case ATLParser.T__56:
                case ATLParser.T__57:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 803;
                        this.primitive();
                    }
                    break;
                case ATLParser.T__47:
                case ATLParser.T__48:
                case ATLParser.T__49:
                case ATLParser.T__50:
                case ATLParser.T__79:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 804;
                        this.collectionType();
                    }
                    break;
                case ATLParser.T__77:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 805;
                        this.oclType_abstractContents();
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
    ATLParser.prototype.oclAnyType = function () {
        var _localctx = new OclAnyTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, ATLParser.RULE_oclAnyType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 808;
                this.oclAnyType_abstractContents();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.tupleType = function () {
        var _localctx = new TupleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, ATLParser.RULE_tupleType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                this.match(ATLParser.T__53);
                this.state = 811;
                this.match(ATLParser.T__14);
                this.state = 820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.IDENTIFIER) {
                    {
                        this.state = 812;
                        this.tupleTypeAttribute();
                        this.state = 817;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.T__3) {
                            {
                                {
                                    this.state = 813;
                                    this.match(ATLParser.T__3);
                                    this.state = 814;
                                    this.tupleTypeAttribute();
                                }
                            }
                            this.state = 819;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 822;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.tupleTypeAttribute = function () {
        var _localctx = new TupleTypeAttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, ATLParser.RULE_tupleTypeAttribute);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 824;
                this.match(ATLParser.IDENTIFIER);
                this.state = 825;
                this.match(ATLParser.T__12);
                this.state = 826;
                this.oclType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.mapType = function () {
        var _localctx = new MapTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, ATLParser.RULE_mapType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 828;
                this.match(ATLParser.T__51);
                this.state = 829;
                this.match(ATLParser.T__14);
                this.state = 830;
                this.oclType();
                this.state = 831;
                this.match(ATLParser.T__3);
                this.state = 832;
                this.oclType();
                this.state = 833;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.primitive = function () {
        var _localctx = new PrimitiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, ATLParser.RULE_primitive);
        try {
            this.state = 838;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__54:
                case ATLParser.T__55:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 835;
                        this.numericType();
                    }
                    break;
                case ATLParser.T__56:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 836;
                        this.booleanType();
                    }
                    break;
                case ATLParser.T__57:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 837;
                        this.stringType();
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
    ATLParser.prototype.numericType = function () {
        var _localctx = new NumericTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, ATLParser.RULE_numericType);
        try {
            this.state = 842;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__54:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 840;
                        this.integerType();
                    }
                    break;
                case ATLParser.T__55:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 841;
                        this.realType();
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
    ATLParser.prototype.integerType = function () {
        var _localctx = new IntegerTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, ATLParser.RULE_integerType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 844;
                this.match(ATLParser.T__54);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.realType = function () {
        var _localctx = new RealTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, ATLParser.RULE_realType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 846;
                this.match(ATLParser.T__55);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.booleanType = function () {
        var _localctx = new BooleanTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, ATLParser.RULE_booleanType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 848;
                this.match(ATLParser.T__56);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.stringType = function () {
        var _localctx = new StringTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, ATLParser.RULE_stringType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 850;
                this.match(ATLParser.T__57);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.collectionType = function () {
        var _localctx = new CollectionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, ATLParser.RULE_collectionType);
        try {
            this.state = 857;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__47:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 852;
                        this.bagType();
                    }
                    break;
                case ATLParser.T__48:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 853;
                        this.setType();
                    }
                    break;
                case ATLParser.T__49:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 854;
                        this.orderedSetType();
                    }
                    break;
                case ATLParser.T__50:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 855;
                        this.sequenceType();
                    }
                    break;
                case ATLParser.T__79:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 856;
                        this.collectionType_abstractContents();
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
    ATLParser.prototype.bagType = function () {
        var _localctx = new BagTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, ATLParser.RULE_bagType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 859;
                this.match(ATLParser.T__47);
                this.state = 860;
                this.match(ATLParser.T__14);
                this.state = 861;
                this.oclType();
                this.state = 862;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.setType = function () {
        var _localctx = new SetTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, ATLParser.RULE_setType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 864;
                this.match(ATLParser.T__48);
                this.state = 865;
                this.match(ATLParser.T__14);
                this.state = 866;
                this.oclType();
                this.state = 867;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.orderedSetType = function () {
        var _localctx = new OrderedSetTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, ATLParser.RULE_orderedSetType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 869;
                this.match(ATLParser.T__49);
                this.state = 870;
                this.match(ATLParser.T__14);
                this.state = 871;
                this.oclType();
                this.state = 872;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.sequenceType = function () {
        var _localctx = new SequenceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, ATLParser.RULE_sequenceType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 874;
                this.match(ATLParser.T__50);
                this.state = 875;
                this.match(ATLParser.T__14);
                this.state = 876;
                this.oclType();
                this.state = 877;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.priority_0 = function () {
        var _localctx = new Priority_0Context(this._ctx, this.state);
        this.enterRule(_localctx, 164, ATLParser.RULE_priority_0);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 879;
                this.primary_oclExpression();
                this.state = 893;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__58 || _la === ATLParser.T__59) {
                    {
                        this.state = 891;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ATLParser.T__58:
                                {
                                    this.state = 880;
                                    this.match(ATLParser.T__58);
                                    this.state = 883;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 881;
                                                this.operationCallExp();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 882;
                                                this.navigationOrAttributeCallExp();
                                            }
                                            break;
                                    }
                                }
                                break;
                            case ATLParser.T__59:
                                {
                                    this.state = 885;
                                    this.match(ATLParser.T__59);
                                    this.state = 889;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 886;
                                                this.iteratorExp();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 887;
                                                this.iterateExp();
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 888;
                                                this.collectionOperationCallExp();
                                            }
                                            break;
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 895;
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
    ATLParser.prototype.priority_1 = function () {
        var _localctx = new Priority_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 166, ATLParser.RULE_priority_1);
        try {
            this.state = 901;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ATLParser.T__60:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 896;
                        this.match(ATLParser.T__60);
                        this.state = 897;
                        this.priority_0();
                    }
                    break;
                case ATLParser.T__61:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 898;
                        this.match(ATLParser.T__61);
                        this.state = 899;
                        this.priority_0();
                    }
                    break;
                case ATLParser.T__14:
                case ATLParser.T__33:
                case ATLParser.T__39:
                case ATLParser.T__40:
                case ATLParser.T__41:
                case ATLParser.T__44:
                case ATLParser.T__46:
                case ATLParser.T__47:
                case ATLParser.T__48:
                case ATLParser.T__49:
                case ATLParser.T__50:
                case ATLParser.T__51:
                case ATLParser.T__52:
                case ATLParser.T__53:
                case ATLParser.T__54:
                case ATLParser.T__55:
                case ATLParser.T__56:
                case ATLParser.T__57:
                case ATLParser.T__77:
                case ATLParser.T__78:
                case ATLParser.T__79:
                case ATLParser.STRING:
                case ATLParser.INTEGER:
                case ATLParser.FLOAT:
                case ATLParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 900;
                        this.priority_0();
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
    ATLParser.prototype.priority_2 = function () {
        var _localctx = new Priority_2Context(this._ctx, this.state);
        this.enterRule(_localctx, 168, ATLParser.RULE_priority_2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 903;
                this.priority_1();
                this.state = 914;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (ATLParser.T__62 - 63)) | (1 << (ATLParser.T__63 - 63)) | (1 << (ATLParser.T__64 - 63)) | (1 << (ATLParser.T__65 - 63)))) !== 0)) {
                    {
                        this.state = 912;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ATLParser.T__62:
                                {
                                    this.state = 904;
                                    this.match(ATLParser.T__62);
                                    this.state = 905;
                                    this.priority_1();
                                }
                                break;
                            case ATLParser.T__63:
                                {
                                    this.state = 906;
                                    this.match(ATLParser.T__63);
                                    this.state = 907;
                                    this.priority_1();
                                }
                                break;
                            case ATLParser.T__64:
                                {
                                    this.state = 908;
                                    this.match(ATLParser.T__64);
                                    this.state = 909;
                                    this.priority_1();
                                }
                                break;
                            case ATLParser.T__65:
                                {
                                    this.state = 910;
                                    this.match(ATLParser.T__65);
                                    this.state = 911;
                                    this.priority_1();
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
    ATLParser.prototype.priority_3 = function () {
        var _localctx = new Priority_3Context(this._ctx, this.state);
        this.enterRule(_localctx, 170, ATLParser.RULE_priority_3);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 917;
                this.priority_2();
                this.state = 924;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__61 || _la === ATLParser.T__66) {
                    {
                        this.state = 922;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ATLParser.T__66:
                                {
                                    this.state = 918;
                                    this.match(ATLParser.T__66);
                                    this.state = 919;
                                    this.priority_2();
                                }
                                break;
                            case ATLParser.T__61:
                                {
                                    this.state = 920;
                                    this.match(ATLParser.T__61);
                                    this.state = 921;
                                    this.priority_2();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 926;
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
    ATLParser.prototype.priority_4 = function () {
        var _localctx = new Priority_4Context(this._ctx, this.state);
        this.enterRule(_localctx, 172, ATLParser.RULE_priority_4);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 927;
                this.priority_3();
                this.state = 942;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ATLParser.T__8 || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (ATLParser.T__67 - 68)) | (1 << (ATLParser.T__68 - 68)) | (1 << (ATLParser.T__69 - 68)) | (1 << (ATLParser.T__70 - 68)) | (1 << (ATLParser.T__71 - 68)))) !== 0)) {
                    {
                        this.state = 940;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ATLParser.T__8:
                                {
                                    this.state = 928;
                                    this.match(ATLParser.T__8);
                                    this.state = 929;
                                    this.priority_3();
                                }
                                break;
                            case ATLParser.T__67:
                                {
                                    this.state = 930;
                                    this.match(ATLParser.T__67);
                                    this.state = 931;
                                    this.priority_3();
                                }
                                break;
                            case ATLParser.T__68:
                                {
                                    this.state = 932;
                                    this.match(ATLParser.T__68);
                                    this.state = 933;
                                    this.priority_3();
                                }
                                break;
                            case ATLParser.T__69:
                                {
                                    this.state = 934;
                                    this.match(ATLParser.T__69);
                                    this.state = 935;
                                    this.priority_3();
                                }
                                break;
                            case ATLParser.T__70:
                                {
                                    this.state = 936;
                                    this.match(ATLParser.T__70);
                                    this.state = 937;
                                    this.priority_3();
                                }
                                break;
                            case ATLParser.T__71:
                                {
                                    this.state = 938;
                                    this.match(ATLParser.T__71);
                                    this.state = 939;
                                    this.priority_3();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 944;
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
    ATLParser.prototype.priority_5 = function () {
        var _localctx = new Priority_5Context(this._ctx, this.state);
        this.enterRule(_localctx, 174, ATLParser.RULE_priority_5);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 945;
                this.priority_4();
                this.state = 956;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (ATLParser.T__72 - 73)) | (1 << (ATLParser.T__73 - 73)) | (1 << (ATLParser.T__74 - 73)) | (1 << (ATLParser.T__75 - 73)))) !== 0)) {
                    {
                        this.state = 954;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ATLParser.T__72:
                                {
                                    this.state = 946;
                                    this.match(ATLParser.T__72);
                                    this.state = 947;
                                    this.priority_4();
                                }
                                break;
                            case ATLParser.T__73:
                                {
                                    this.state = 948;
                                    this.match(ATLParser.T__73);
                                    this.state = 949;
                                    this.priority_4();
                                }
                                break;
                            case ATLParser.T__74:
                                {
                                    this.state = 950;
                                    this.match(ATLParser.T__74);
                                    this.state = 951;
                                    this.priority_4();
                                }
                                break;
                            case ATLParser.T__75:
                                {
                                    this.state = 952;
                                    this.match(ATLParser.T__75);
                                    this.state = 953;
                                    this.priority_4();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 958;
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
    ATLParser.prototype.matchedRule_abstractContents = function () {
        var _localctx = new MatchedRule_abstractContentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, ATLParser.RULE_matchedRule_abstractContents);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 960;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__76) {
                    {
                        this.state = 959;
                        this.match(ATLParser.T__76);
                    }
                }
                this.state = 963;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__18) {
                    {
                        this.state = 962;
                        this.match(ATLParser.T__18);
                    }
                }
                this.state = 966;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__4) {
                    {
                        this.state = 965;
                        this.match(ATLParser.T__4);
                    }
                }
                this.state = 968;
                this.match(ATLParser.T__19);
                this.state = 969;
                this.match(ATLParser.IDENTIFIER);
                this.state = 972;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__20) {
                    {
                        this.state = 970;
                        this.match(ATLParser.T__20);
                        this.state = 971;
                        this.match(ATLParser.IDENTIFIER);
                    }
                }
                this.state = 974;
                this.match(ATLParser.T__21);
                this.state = 975;
                this.inPattern();
                this.state = 985;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__22) {
                    {
                        this.state = 976;
                        this.match(ATLParser.T__22);
                        this.state = 977;
                        this.match(ATLParser.T__21);
                        this.state = 981;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ATLParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 978;
                                    this.ruleVariableDeclaration();
                                }
                            }
                            this.state = 983;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 984;
                        this.match(ATLParser.T__23);
                    }
                }
                this.state = 988;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__27) {
                    {
                        this.state = 987;
                        this.outPattern();
                    }
                }
                this.state = 991;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ATLParser.T__32) {
                    {
                        this.state = 990;
                        this.actionBlock();
                    }
                }
                this.state = 993;
                this.match(ATLParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclType_abstractContents = function () {
        var _localctx = new OclType_abstractContentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, ATLParser.RULE_oclType_abstractContents);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 995;
                this.match(ATLParser.T__77);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.oclAnyType_abstractContents = function () {
        var _localctx = new OclAnyType_abstractContentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, ATLParser.RULE_oclAnyType_abstractContents);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 997;
                this.match(ATLParser.T__78);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.collectionType_abstractContents = function () {
        var _localctx = new CollectionType_abstractContentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, ATLParser.RULE_collectionType_abstractContents);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 999;
                this.match(ATLParser.T__79);
                this.state = 1000;
                this.match(ATLParser.T__14);
                this.state = 1001;
                this.oclType();
                this.state = 1002;
                this.match(ATLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
    ATLParser.prototype.primary_oclExpression = function () {
        var _localctx = new Primary_oclExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, ATLParser.RULE_primary_oclExpression);
        try {
            this.state = 1018;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1004;
                        this.variableExp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1005;
                        this.oclUndefinedExp();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1006;
                        this.primitiveExp();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1007;
                        this.ifExp();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1008;
                        this.superExp();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1009;
                        this.enumLiteralExp();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1010;
                        this.collectionExp();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1011;
                        this.mapExp();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1012;
                        this.tupleExp();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1013;
                        this.oclType();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1014;
                        this.match(ATLParser.T__14);
                        this.state = 1015;
                        this.oclExpression();
                        this.state = 1016;
                        this.match(ATLParser.T__15);
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
    Object.defineProperty(ATLParser, "_ATN", {
        get: function () {
            if (!ATLParser.__ATN) {
                ATLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ATLParser._serializedATN));
            }
            return ATLParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ATLParser.T__0 = 1;
    ATLParser.T__1 = 2;
    ATLParser.T__2 = 3;
    ATLParser.T__3 = 4;
    ATLParser.T__4 = 5;
    ATLParser.T__5 = 6;
    ATLParser.T__6 = 7;
    ATLParser.T__7 = 8;
    ATLParser.T__8 = 9;
    ATLParser.T__9 = 10;
    ATLParser.T__10 = 11;
    ATLParser.T__11 = 12;
    ATLParser.T__12 = 13;
    ATLParser.T__13 = 14;
    ATLParser.T__14 = 15;
    ATLParser.T__15 = 16;
    ATLParser.T__16 = 17;
    ATLParser.T__17 = 18;
    ATLParser.T__18 = 19;
    ATLParser.T__19 = 20;
    ATLParser.T__20 = 21;
    ATLParser.T__21 = 22;
    ATLParser.T__22 = 23;
    ATLParser.T__23 = 24;
    ATLParser.T__24 = 25;
    ATLParser.T__25 = 26;
    ATLParser.T__26 = 27;
    ATLParser.T__27 = 28;
    ATLParser.T__28 = 29;
    ATLParser.T__29 = 30;
    ATLParser.T__30 = 31;
    ATLParser.T__31 = 32;
    ATLParser.T__32 = 33;
    ATLParser.T__33 = 34;
    ATLParser.T__34 = 35;
    ATLParser.T__35 = 36;
    ATLParser.T__36 = 37;
    ATLParser.T__37 = 38;
    ATLParser.T__38 = 39;
    ATLParser.T__39 = 40;
    ATLParser.T__40 = 41;
    ATLParser.T__41 = 42;
    ATLParser.T__42 = 43;
    ATLParser.T__43 = 44;
    ATLParser.T__44 = 45;
    ATLParser.T__45 = 46;
    ATLParser.T__46 = 47;
    ATLParser.T__47 = 48;
    ATLParser.T__48 = 49;
    ATLParser.T__49 = 50;
    ATLParser.T__50 = 51;
    ATLParser.T__51 = 52;
    ATLParser.T__52 = 53;
    ATLParser.T__53 = 54;
    ATLParser.T__54 = 55;
    ATLParser.T__55 = 56;
    ATLParser.T__56 = 57;
    ATLParser.T__57 = 58;
    ATLParser.T__58 = 59;
    ATLParser.T__59 = 60;
    ATLParser.T__60 = 61;
    ATLParser.T__61 = 62;
    ATLParser.T__62 = 63;
    ATLParser.T__63 = 64;
    ATLParser.T__64 = 65;
    ATLParser.T__65 = 66;
    ATLParser.T__66 = 67;
    ATLParser.T__67 = 68;
    ATLParser.T__68 = 69;
    ATLParser.T__69 = 70;
    ATLParser.T__70 = 71;
    ATLParser.T__71 = 72;
    ATLParser.T__72 = 73;
    ATLParser.T__73 = 74;
    ATLParser.T__74 = 75;
    ATLParser.T__75 = 76;
    ATLParser.T__76 = 77;
    ATLParser.T__77 = 78;
    ATLParser.T__78 = 79;
    ATLParser.T__79 = 80;
    ATLParser.STRING = 81;
    ATLParser.INTEGER = 82;
    ATLParser.FLOAT = 83;
    ATLParser.IDENTIFIER = 84;
    ATLParser.WS = 85;
    ATLParser.COMMENT = 86;
    ATLParser.LINE_COMMENT = 87;
    ATLParser.RULE_unit = 0;
    ATLParser.RULE_module = 1;
    ATLParser.RULE_targetModelPattern = 2;
    ATLParser.RULE_sourceModelPattern = 3;
    ATLParser.RULE_transformationMode = 4;
    ATLParser.RULE_library = 5;
    ATLParser.RULE_query = 6;
    ATLParser.RULE_libraryRef = 7;
    ATLParser.RULE_moduleElement = 8;
    ATLParser.RULE_helper = 9;
    ATLParser.RULE_oclFeatureDefinition = 10;
    ATLParser.RULE_oclContextDefinition = 11;
    ATLParser.RULE_oclFeature = 12;
    ATLParser.RULE_operation = 13;
    ATLParser.RULE_parameter = 14;
    ATLParser.RULE_attribute = 15;
    ATLParser.RULE_arule = 16;
    ATLParser.RULE_matchedRule = 17;
    ATLParser.RULE_lazyMatchedRule = 18;
    ATLParser.RULE_ruleVariableDeclaration = 19;
    ATLParser.RULE_calledRule = 20;
    ATLParser.RULE_inPattern = 21;
    ATLParser.RULE_inPatternElement = 22;
    ATLParser.RULE_simpleInPatternElement = 23;
    ATLParser.RULE_outPattern = 24;
    ATLParser.RULE_outPatternElement = 25;
    ATLParser.RULE_simpleOutPatternElement = 26;
    ATLParser.RULE_forEachOutPatternElement = 27;
    ATLParser.RULE_binding = 28;
    ATLParser.RULE_actionBlock = 29;
    ATLParser.RULE_statement = 30;
    ATLParser.RULE_bindingStat = 31;
    ATLParser.RULE_expressionStat = 32;
    ATLParser.RULE_ifStat = 33;
    ATLParser.RULE_forStat = 34;
    ATLParser.RULE_oclModel = 35;
    ATLParser.RULE_oclModelElement = 36;
    ATLParser.RULE_oclExpression = 37;
    ATLParser.RULE_iteratorExp = 38;
    ATLParser.RULE_iterateExp = 39;
    ATLParser.RULE_collectionOperationCallExp = 40;
    ATLParser.RULE_operationCallExp = 41;
    ATLParser.RULE_navigationOrAttributeCallExp = 42;
    ATLParser.RULE_iterator = 43;
    ATLParser.RULE_oclUndefinedExp = 44;
    ATLParser.RULE_primitiveExp = 45;
    ATLParser.RULE_numericExp = 46;
    ATLParser.RULE_booleanExp = 47;
    ATLParser.RULE_integerExp = 48;
    ATLParser.RULE_realExp = 49;
    ATLParser.RULE_stringExp = 50;
    ATLParser.RULE_ifExp = 51;
    ATLParser.RULE_variableExp = 52;
    ATLParser.RULE_superExp = 53;
    ATLParser.RULE_letExp = 54;
    ATLParser.RULE_variableDeclaration = 55;
    ATLParser.RULE_enumLiteralExp = 56;
    ATLParser.RULE_collectionExp = 57;
    ATLParser.RULE_bagExp = 58;
    ATLParser.RULE_setExp = 59;
    ATLParser.RULE_orderedSetExp = 60;
    ATLParser.RULE_sequenceExp = 61;
    ATLParser.RULE_mapExp = 62;
    ATLParser.RULE_mapElement = 63;
    ATLParser.RULE_tupleExp = 64;
    ATLParser.RULE_tuplePart = 65;
    ATLParser.RULE_oclType = 66;
    ATLParser.RULE_oclAnyType = 67;
    ATLParser.RULE_tupleType = 68;
    ATLParser.RULE_tupleTypeAttribute = 69;
    ATLParser.RULE_mapType = 70;
    ATLParser.RULE_primitive = 71;
    ATLParser.RULE_numericType = 72;
    ATLParser.RULE_integerType = 73;
    ATLParser.RULE_realType = 74;
    ATLParser.RULE_booleanType = 75;
    ATLParser.RULE_stringType = 76;
    ATLParser.RULE_collectionType = 77;
    ATLParser.RULE_bagType = 78;
    ATLParser.RULE_setType = 79;
    ATLParser.RULE_orderedSetType = 80;
    ATLParser.RULE_sequenceType = 81;
    ATLParser.RULE_priority_0 = 82;
    ATLParser.RULE_priority_1 = 83;
    ATLParser.RULE_priority_2 = 84;
    ATLParser.RULE_priority_3 = 85;
    ATLParser.RULE_priority_4 = 86;
    ATLParser.RULE_priority_5 = 87;
    ATLParser.RULE_matchedRule_abstractContents = 88;
    ATLParser.RULE_oclType_abstractContents = 89;
    ATLParser.RULE_oclAnyType_abstractContents = 90;
    ATLParser.RULE_collectionType_abstractContents = 91;
    ATLParser.RULE_primary_oclExpression = 92;
    // tslint:disable:no-trailing-whitespace
    ATLParser.ruleNames = [
        "unit", "module", "targetModelPattern", "sourceModelPattern", "transformationMode",
        "library", "query", "libraryRef", "moduleElement", "helper", "oclFeatureDefinition",
        "oclContextDefinition", "oclFeature", "operation", "parameter", "attribute",
        "arule", "matchedRule", "lazyMatchedRule", "ruleVariableDeclaration",
        "calledRule", "inPattern", "inPatternElement", "simpleInPatternElement",
        "outPattern", "outPatternElement", "simpleOutPatternElement", "forEachOutPatternElement",
        "binding", "actionBlock", "statement", "bindingStat", "expressionStat",
        "ifStat", "forStat", "oclModel", "oclModelElement", "oclExpression", "iteratorExp",
        "iterateExp", "collectionOperationCallExp", "operationCallExp", "navigationOrAttributeCallExp",
        "iterator", "oclUndefinedExp", "primitiveExp", "numericExp", "booleanExp",
        "integerExp", "realExp", "stringExp", "ifExp", "variableExp", "superExp",
        "letExp", "variableDeclaration", "enumLiteralExp", "collectionExp", "bagExp",
        "setExp", "orderedSetExp", "sequenceExp", "mapExp", "mapElement", "tupleExp",
        "tuplePart", "oclType", "oclAnyType", "tupleType", "tupleTypeAttribute",
        "mapType", "primitive", "numericType", "integerType", "realType", "booleanType",
        "stringType", "collectionType", "bagType", "setType", "orderedSetType",
        "sequenceType", "priority_0", "priority_1", "priority_2", "priority_3",
        "priority_4", "priority_5", "matchedRule_abstractContents", "oclType_abstractContents",
        "oclAnyType_abstractContents", "collectionType_abstractContents", "primary_oclExpression",
    ];
    ATLParser._LITERAL_NAMES = [
        undefined, "'module'", "';'", "'create'", "','", "'refining'", "'from'",
        "'library'", "'query'", "'='", "'uses'", "'helper'", "'def'", "':'", "'context'",
        "'('", "')'", "'unique'", "'lazy'", "'abstract'", "'rule'", "'extends'",
        "'{'", "'using'", "'}'", "'entrypoint'", "'endpoint'", "'in'", "'to'",
        "'mapsTo'", "'distinct'", "'foreach'", "'<-'", "'do'", "'if'", "'else'",
        "'for'", "'!'", "'|'", "'iterate'", "'OclUndefined'", "'true'", "'false'",
        "'then'", "'endif'", "'super'", "'let'", "'#'", "'Bag'", "'Set'", "'OrderedSet'",
        "'Sequence'", "'Map'", "'Tuple'", "'TupleType'", "'Integer'", "'Real'",
        "'Boolean'", "'String'", "'.'", "'->'", "'not'", "'-'", "'*'", "'/'",
        "'div'", "'mod'", "'+'", "'>'", "'<'", "'>='", "'<='", "'<>'", "'and'",
        "'or'", "'xor'", "'implies'", "'nodefault'", "'OclType'", "'OclAny'",
        "'Collection'",
    ];
    ATLParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "STRING", "INTEGER", "FLOAT",
        "IDENTIFIER", "WS", "COMMENT", "LINE_COMMENT",
    ];
    ATLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ATLParser._LITERAL_NAMES, ATLParser._SYMBOLIC_NAMES, []);
    ATLParser._serializedATNSegments = 2;
    ATLParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Y\u03FF\x04\x02" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x03\x02\x03\x02" +
        "\x03\x02\x05\x02\xC0\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x07\x03\xCB\n\x03\f\x03\x0E\x03\xCE\v\x03" +
        "\x03\x03\x07\x03\xD1\n\x03\f\x03\x0E\x03\xD4\v\x03\x03\x04\x03\x04\x03" +
        "\x04\x07\x04\xD9\n\x04\f\x04\x0E\x04\xDC\v\x04\x03\x05\x03\x05\x03\x05" +
        "\x07\x05\xE1\n\x05\f\x05\x0E\x05\xE4\v\x05\x03\x06\x03\x06\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x07\x07\xEC\n\x07\f\x07\x0E\x07\xEF\v\x07\x03\x07" +
        "\x07\x07\xF2\n\x07\f\x07\x0E\x07\xF5\v\x07\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x07\b\xFD\n\b\f\b\x0E\b\u0100\v\b\x03\b\x07\b\u0103\n\b\f\b\x0E" +
        "\b\u0106\v\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x05\n\u010E\n\n\x03\v" +
        "\x03\v\x03\v\x03\v\x03\f\x05\f\u0115\n\f\x03\f\x03\f\x03\f\x03\f\x03\r" +
        "\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u0120\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x07\x0F\u0127\n\x0F\f\x0F\x0E\x0F\u012A\v\x0F\x05\x0F" +
        "\u012C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x12\x03\x12\x05\x12\u0140\n\x12\x03\x13\x03\x13\x05\x13\u0144\n\x13\x03" +
        "\x14\x05\x14\u0147\n\x14\x03\x14\x03\x14\x05\x14\u014B\n\x14\x03\x14\x05" +
        "\x14\u014E\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0154\n\x14\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u015B\n\x14\f\x14\x0E\x14" +
        "\u015E\v\x14\x03\x14\x05\x14\u0161\n\x14\x03\x14\x05\x14\u0164\n\x14\x03" +
        "\x14\x05\x14\u0167\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x03\x15\x03\x15\x03\x16\x05\x16\u0173\n\x16\x03\x16\x05\x16\u0176" +
        "\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u017E\n" +
        "\x16\f\x16\x0E\x16\u0181\v\x16\x05\x16\u0183\n\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x16\x03\x16\x07\x16\u018A\n\x16\f\x16\x0E\x16\u018D\v\x16\x03" +
        "\x16\x05\x16\u0190\n\x16\x03\x16\x05\x16\u0193\n\x16\x03\x16\x05\x16\u0196" +
        "\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u019E\n" +
        "\x17\f\x17\x0E\x17\u01A1\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17" +
        "\u01A7\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x07\x19\u01B2\n\x19\f\x19\x0E\x19\u01B5\v\x19\x05\x19\u01B7" +
        "\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u01BD\n\x1A\f\x1A\x0E\x1A" +
        "\u01C0\v\x1A\x03\x1B\x03\x1B\x05\x1B\u01C4\n\x1B\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x05\x1C\u01CB\n\x1C\x03\x1C\x03\x1C\x05\x1C\u01CF\n\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u01D5\n\x1C\f\x1C\x0E\x1C\u01D8" +
        "\v\x1C\x05\x1C\u01DA\n\x1C\x03\x1C\x05\x1C\u01DD\n\x1C\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
        "\x03\x1D\x05\x1D\u01EB\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01F1" +
        "\n\x1D\f\x1D\x0E\x1D\u01F4\v\x1D\x05\x1D\u01F6\n\x1D\x03\x1D\x05\x1D\u01F9" +
        "\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
        "\u0202\n\x1F\f\x1F\x0E\x1F\u0205\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 " +
        "\x03 \x05 \u020D\n \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03#\x03" +
        "#\x03#\x03#\x03#\x03#\x03#\x07#\u021E\n#\f#\x0E#\u0221\v#\x03#\x05#\u0224" +
        "\n#\x03#\x03#\x03#\x03#\x07#\u022A\n#\f#\x0E#\u022D\v#\x03#\x05#\u0230" +
        "\n#\x05#\u0232\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u023C\n" +
        "$\f$\x0E$\u023F\v$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03" +
        "\'\x03\'\x05\'\u024D\n\'\x03(\x03(\x03(\x03(\x03(\x07(\u0254\n(\f(\x0E" +
        "(\u0257\v(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x07)\u0262\n)" +
        "\f)\x0E)\u0265\v)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03" +
        "*\x07*\u0272\n*\f*\x0E*\u0275\v*\x05*\u0277\n*\x03*\x03*\x03+\x03+\x03" +
        "+\x03+\x03+\x07+\u0280\n+\f+\x0E+\u0283\v+\x05+\u0285\n+\x03+\x03+\x03" +
        ",\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x05/\u0292\n/\x030\x030\x05" +
        "0\u0296\n0\x031\x031\x032\x032\x033\x033\x034\x034\x035\x035\x035\x03" +
        "5\x035\x035\x035\x035\x036\x036\x037\x037\x038\x038\x038\x038\x038\x03" +
        "9\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x05;\u02BE" +
        "\n;\x03<\x03<\x03<\x03<\x03<\x07<\u02C5\n<\f<\x0E<\u02C8\v<\x05<\u02CA" +
        "\n<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x07=\u02D3\n=\f=\x0E=\u02D6\v=" +
        "\x05=\u02D8\n=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x07>\u02E1\n>\f>\x0E" +
        ">\u02E4\v>\x05>\u02E6\n>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x07?\u02EF" +
        "\n?\f?\x0E?\u02F2\v?\x05?\u02F4\n?\x03?\x03?\x03@\x03@\x03@\x03@\x03@" +
        "\x07@\u02FD\n@\f@\x0E@\u0300\v@\x05@\u0302\n@\x03@\x03@\x03A\x03A\x03" +
        "A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x07B\u0311\nB\fB\x0EB\u0314" +
        "\vB\x05B\u0316\nB\x03B\x03B\x03C\x03C\x03C\x05C\u031D\nC\x03C\x03C\x03" +
        "C\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0329\nD\x03E\x03E\x03F\x03" +
        "F\x03F\x03F\x03F\x07F\u0332\nF\fF\x0EF\u0335\vF\x05F\u0337\nF\x03F\x03" +
        "F\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03" +
        "I\x05I\u0349\nI\x03J\x03J\x05J\u034D\nJ\x03K\x03K\x03L\x03L\x03M\x03M" +
        "\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x05O\u035C\nO\x03P\x03P\x03P\x03P" +
        "\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x03" +
        "S\x03S\x03S\x03T\x03T\x03T\x03T\x05T\u0376\nT\x03T\x03T\x03T\x03T\x05" +
        "T\u037C\nT\x07T\u037E\nT\fT\x0ET\u0381\vT\x03U\x03U\x03U\x03U\x03U\x05" +
        "U\u0388\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x07V\u0393\nV" +
        "\fV\x0EV\u0396\vV\x03W\x03W\x03W\x03W\x03W\x07W\u039D\nW\fW\x0EW\u03A0" +
        "\vW\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x07" +
        "X\u03AF\nX\fX\x0EX\u03B2\vX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
        "Y\x07Y\u03BD\nY\fY\x0EY\u03C0\vY\x03Z\x05Z\u03C3\nZ\x03Z\x05Z\u03C6\n" +
        "Z\x03Z\x05Z\u03C9\nZ\x03Z\x03Z\x03Z\x03Z\x05Z\u03CF\nZ\x03Z\x03Z\x03Z" +
        "\x03Z\x03Z\x07Z\u03D6\nZ\fZ\x0EZ\u03D9\vZ\x03Z\x05Z\u03DC\nZ\x03Z\x05" +
        "Z\u03DF\nZ\x03Z\x05Z\u03E2\nZ\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03]\x03" +
        "]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
        "^\x03^\x03^\x03^\x05^\u03FD\n^\x03^\x02\x02\x02_\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
        "\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
        "4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
        "P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
        "l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84" +
        "\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96" +
        "\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8" +
        "\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA" +
        "\x02\x02\x05\x04\x02SSVV\x03\x02\x07\b\x03\x02+,\x02\u042D\x02\xBF\x03" +
        "\x02\x02\x02\x04\xC1\x03\x02\x02\x02\x06\xD5\x03\x02\x02\x02\b\xDD\x03" +
        "\x02\x02\x02\n\xE5\x03\x02\x02\x02\f\xE7\x03\x02\x02\x02\x0E\xF6\x03\x02" +
        "\x02\x02\x10\u0107\x03\x02\x02\x02\x12\u010D\x03\x02\x02\x02\x14\u010F" +
        "\x03\x02\x02\x02\x16\u0114\x03\x02\x02\x02\x18\u011A\x03\x02\x02\x02\x1A" +
        "\u011F\x03\x02\x02\x02\x1C\u0121\x03\x02\x02\x02\x1E\u0133\x03\x02\x02" +
        "\x02 \u0137\x03\x02\x02\x02\"\u013F\x03\x02\x02\x02$\u0143\x03\x02\x02" +
        "\x02&\u0146\x03\x02\x02\x02(\u016A\x03\x02\x02\x02*\u0172\x03\x02\x02" +
        "\x02,\u0199\x03\x02\x02\x02.\u01A8\x03\x02\x02\x020\u01AA\x03\x02\x02" +
        "\x022\u01B8\x03\x02\x02\x024\u01C3\x03\x02\x02\x026\u01C5\x03\x02\x02" +
        "\x028\u01DE\x03\x02\x02\x02:\u01FA\x03\x02\x02\x02<\u01FE\x03\x02\x02" +
        "\x02>\u020C\x03\x02\x02\x02@\u020E\x03\x02\x02\x02B\u0213\x03\x02\x02" +
        "\x02D\u0216\x03\x02\x02\x02F\u0233\x03\x02\x02\x02H\u0242\x03\x02\x02" +
        "\x02J\u0246\x03\x02\x02\x02L\u024C\x03\x02\x02\x02N\u024E\x03\x02\x02" +
        "\x02P\u025C\x03\x02\x02\x02R\u026C\x03\x02\x02\x02T\u027A\x03\x02\x02" +
        "\x02V\u0288\x03\x02\x02\x02X\u028A\x03\x02\x02\x02Z\u028C\x03\x02\x02" +
        "\x02\\\u0291\x03\x02\x02\x02^\u0295\x03\x02\x02\x02`\u0297\x03\x02\x02" +
        "\x02b\u0299\x03\x02\x02\x02d\u029B\x03\x02\x02\x02f\u029D\x03\x02\x02" +
        "\x02h\u029F\x03\x02\x02\x02j\u02A7\x03\x02\x02\x02l\u02A9\x03\x02\x02" +
        "\x02n\u02AB\x03\x02\x02\x02p\u02B0\x03\x02\x02\x02r\u02B6\x03\x02\x02" +
        "\x02t\u02BD\x03\x02\x02\x02v\u02BF\x03\x02\x02\x02x\u02CD\x03\x02\x02" +
        "\x02z\u02DB\x03\x02\x02\x02|\u02E9\x03\x02\x02\x02~\u02F7\x03\x02\x02" +
        "\x02\x80\u0305\x03\x02\x02\x02\x82\u030B\x03\x02\x02\x02\x84\u0319\x03" +
        "\x02\x02\x02\x86\u0328\x03\x02\x02\x02\x88\u032A\x03\x02\x02\x02\x8A\u032C" +
        "\x03\x02\x02\x02\x8C\u033A\x03\x02\x02\x02\x8E\u033E\x03\x02\x02\x02\x90" +
        "\u0348\x03\x02\x02\x02\x92\u034C\x03\x02\x02\x02\x94\u034E\x03\x02\x02" +
        "\x02\x96\u0350\x03\x02\x02\x02\x98\u0352\x03\x02\x02\x02\x9A\u0354\x03" +
        "\x02\x02\x02\x9C\u035B\x03\x02\x02\x02\x9E\u035D\x03\x02\x02\x02\xA0\u0362" +
        "\x03\x02\x02\x02\xA2\u0367\x03\x02\x02\x02\xA4\u036C\x03\x02\x02\x02\xA6" +
        "\u0371\x03\x02\x02\x02\xA8\u0387\x03\x02\x02\x02\xAA\u0389\x03\x02\x02" +
        "\x02\xAC\u0397\x03\x02\x02\x02\xAE\u03A1\x03\x02\x02\x02\xB0\u03B3\x03" +
        "\x02\x02\x02\xB2\u03C2\x03\x02\x02\x02\xB4\u03E5\x03\x02\x02\x02\xB6\u03E7" +
        "\x03\x02\x02\x02\xB8\u03E9\x03\x02\x02\x02\xBA\u03FC\x03\x02\x02\x02\xBC" +
        "\xC0\x05\x04\x03\x02\xBD\xC0\x05\f\x07\x02\xBE\xC0\x05\x0E\b\x02\xBF\xBC" +
        "\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0\x03" +
        "\x03\x02\x02\x02\xC1\xC2\x07\x03\x02\x02\xC2\xC3\t\x02\x02\x02\xC3\xC4" +
        "\x07\x04\x02\x02\xC4\xC5\x07\x05\x02\x02\xC5\xC6\x05\x06\x04\x02\xC6\xC7" +
        "\x05\n\x06\x02\xC7\xC8\x05\b\x05\x02\xC8\xCC\x07\x04\x02\x02\xC9\xCB\x05" +
        "\x10\t\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03" +
        "\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD2\x03\x02\x02\x02\xCE\xCC\x03" +
        "\x02\x02\x02\xCF\xD1\x05\x12\n\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD4\x03" +
        "\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\x05\x03" +
        "\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xDA\x05H%\x02\xD6\xD7\x07\x06" +
        "\x02\x02\xD7\xD9\x05H%\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDC\x03\x02\x02" +
        "\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\x07\x03\x02\x02" +
        "\x02\xDC\xDA\x03\x02\x02\x02\xDD\xE2\x05H%\x02\xDE\xDF\x07\x06\x02\x02" +
        "\xDF\xE1\x05H%\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2" +
        "\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\t\x03\x02\x02\x02\xE4" +
        "\xE2\x03\x02\x02\x02\xE5\xE6\t\x03\x02\x02\xE6\v\x03\x02\x02\x02\xE7\xE8" +
        "\x07\t\x02\x02\xE8\xE9\t\x02\x02\x02\xE9\xED\x07\x04\x02\x02\xEA\xEC\x05" +
        "\x10\t\x02\xEB\xEA\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03" +
        "\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF3\x03\x02\x02\x02\xEF\xED\x03" +
        "\x02\x02\x02\xF0\xF2\x05\x14\v\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03" +
        "\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\r\x03" +
        "\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF7\x07\n\x02\x02\xF7\xF8\t\x02" +
        "\x02\x02\xF8\xF9\x07\v\x02\x02\xF9\xFA\x05L\'\x02\xFA\xFE\x07\x04\x02" +
        "\x02\xFB\xFD\x05\x10\t\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02\x02" +
        "\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0104\x03\x02" +
        "\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0103\x05\x14\v\x02\u0102\u0101" +
        "\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02" +
        "\u0104\u0105\x03\x02\x02\x02\u0105\x0F\x03\x02\x02\x02\u0106\u0104\x03" +
        "\x02\x02\x02\u0107\u0108\x07\f\x02\x02\u0108\u0109\x07S\x02\x02\u0109" +
        "\u010A\x07\x04\x02\x02\u010A\x11\x03\x02\x02\x02\u010B\u010E\x05\x14\v" +
        "\x02\u010C\u010E\x05\"\x12\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010C" +
        "\x03\x02\x02\x02\u010E\x13\x03\x02\x02\x02\u010F\u0110\x07\r\x02\x02\u0110" +
        "\u0111\x05\x16\f\x02\u0111\u0112\x07\x04\x02\x02\u0112\x15\x03\x02\x02" +
        "\x02\u0113\u0115\x05\x18\r\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115" +
        "\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x07\x0E\x02\x02" +
        "\u0117\u0118\x07\x0F\x02\x02\u0118\u0119\x05\x1A\x0E\x02\u0119\x17\x03" +
        "\x02\x02\x02\u011A\u011B\x07\x10\x02\x02\u011B\u011C\x05\x86D\x02\u011C" +
        "\x19\x03\x02\x02\x02\u011D\u0120\x05\x1C\x0F\x02\u011E\u0120\x05 \x11" +
        "\x02\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\x1B" +
        "\x03\x02\x02\x02\u0121\u0122\x07V\x02\x02\u0122\u012B\x07\x11\x02\x02" +
        "\u0123\u0128\x05\x1E\x10\x02\u0124\u0125\x07\x06\x02\x02\u0125\u0127\x05" +
        "\x1E\x10\x02\u0126\u0124\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128" +
        "\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012C\x03\x02" +
        "\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u0123\x03\x02\x02\x02\u012B" +
        "\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07\x12" +
        "\x02\x02\u012E\u012F\x07\x0F\x02\x02\u012F\u0130\x05\x86D\x02\u0130\u0131" +
        "\x07\v\x02\x02\u0131\u0132\x05L\'\x02\u0132\x1D\x03\x02\x02\x02\u0133" +
        "\u0134\x07V\x02\x02\u0134\u0135\x07\x0F\x02\x02\u0135\u0136\x05\x86D\x02" +
        "\u0136\x1F\x03\x02\x02\x02\u0137\u0138\x07V\x02\x02\u0138\u0139\x07\x0F" +
        "\x02\x02\u0139\u013A\x05\x86D\x02\u013A\u013B\x07\v\x02\x02\u013B\u013C" +
        "\x05L\'\x02\u013C!\x03\x02\x02\x02\u013D\u0140\x05*\x16\x02\u013E\u0140" +
        "\x05$\x13\x02\u013F\u013D\x03\x02\x02\x02\u013F\u013E\x03\x02\x02\x02" +
        "\u0140#\x03\x02\x02\x02\u0141\u0144\x05&\x14\x02\u0142\u0144\x05\xB2Z" +
        "\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144%\x03" +
        "\x02\x02\x02\u0145\u0147\x07\x13\x02\x02\u0146\u0145\x03\x02\x02\x02\u0146" +
        "\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x07\x14" +
        "\x02\x02\u0149\u014B\x07\x15\x02\x02\u014A\u0149\x03\x02\x02\x02\u014A" +
        "\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014E\x07\x07" +
        "\x02\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E" +
        "\u014F\x03\x02\x02\x02\u014F\u0150\x07\x16\x02\x02\u0150\u0153\x07V\x02" +
        "\x02\u0151\u0152\x07\x17\x02\x02\u0152\u0154\x07V\x02\x02\u0153\u0151" +
        "\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02" +
        "\u0155\u0156\x07\x18\x02\x02\u0156\u0160\x05,\x17\x02\u0157\u0158\x07" +
        "\x19\x02\x02\u0158\u015C\x07\x18\x02\x02\u0159\u015B\x05(\x15\x02\u015A" +
        "\u0159\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02" +
        "\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E" +
        "\u015C\x03\x02\x02\x02\u015F\u0161\x07\x1A\x02\x02\u0160\u0157\x03\x02" +
        "\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162" +
        "\u0164\x052\x1A\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02" +
        "\x02\u0164\u0166\x03\x02\x02\x02\u0165\u0167\x05<\x1F\x02\u0166\u0165" +
        "\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02" +
        "\u0168\u0169\x07\x1A\x02\x02\u0169\'\x03\x02\x02\x02\u016A\u016B\x07V" +
        "\x02\x02\u016B\u016C\x07\x0F\x02\x02\u016C\u016D\x05\x86D\x02\u016D\u016E" +
        "\x07\v\x02\x02\u016E\u016F\x05L\'\x02\u016F\u0170\x07\x04\x02\x02\u0170" +
        ")\x03\x02\x02\x02\u0171\u0173\x07\x1B\x02\x02\u0172\u0171\x03\x02\x02" +
        "\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x03\x02\x02\x02\u0174\u0176" +
        "\x07\x1C\x02\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02" +
        "\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x07\x16\x02\x02\u0178\u0179\x07" +
        "V\x02\x02\u0179\u0182\x07\x11\x02\x02\u017A\u017F\x05\x1E\x10\x02\u017B" +
        "\u017C\x07\x06\x02\x02\u017C\u017E\x05\x1E\x10\x02\u017D\u017B\x03\x02" +
        "\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F" +
        "\u0180\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02" +
        "\x02\x02\u0182\u017A\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183" +
        "\u0184\x03\x02\x02\x02\u0184\u0185\x07\x12\x02\x02\u0185\u018F\x07\x18" +
        "\x02\x02\u0186\u0187\x07\x19\x02\x02\u0187\u018B\x07\x18\x02\x02\u0188" +
        "\u018A\x05(\x15\x02\u0189\u0188\x03\x02\x02\x02\u018A\u018D\x03\x02\x02" +
        "\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018E" +
        "\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u0190\x07\x1A\x02\x02" +
        "\u018F\u0186\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03" +
        "\x02\x02\x02\u0191\u0193\x052\x1A\x02\u0192\u0191\x03\x02\x02\x02\u0192" +
        "\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0196\x05<\x1F" +
        "\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197" +
        "\x03\x02\x02\x02\u0197\u0198\x07\x1A\x02\x02\u0198+\x03\x02\x02\x02\u0199" +
        "\u019A\x07\b\x02\x02\u019A\u019F\x05.\x18\x02\u019B\u019C\x07\x06\x02" +
        "\x02\u019C\u019E\x05.\x18\x02\u019D\u019B\x03\x02\x02\x02\u019E\u01A1" +
        "\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
        "\u01A0\u01A6\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x07" +
        "\x11\x02\x02\u01A3\u01A4\x05L\'\x02\u01A4\u01A5\x07\x12\x02\x02\u01A5" +
        "\u01A7\x03\x02\x02\x02\u01A6\u01A2\x03\x02\x02\x02\u01A6\u01A7\x03\x02" +
        "\x02\x02\u01A7-\x03\x02\x02\x02\u01A8\u01A9\x050\x19\x02\u01A9/\x03\x02" +
        "\x02\x02\u01AA\u01AB\x07V\x02\x02\u01AB\u01AC\x07\x0F\x02\x02\u01AC\u01B6" +
        "\x05\x86D\x02\u01AD\u01AE\x07\x1D\x02\x02\u01AE\u01B3\x07V\x02\x02\u01AF" +
        "\u01B0\x07\x06\x02\x02\u01B0\u01B2\x07V\x02\x02\u01B1\u01AF\x03\x02\x02" +
        "\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4" +
        "\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02" +
        "\u01B6\u01AD\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B71\x03\x02" +
        "\x02\x02\u01B8\u01B9\x07\x1E\x02\x02\u01B9\u01BE\x054\x1B\x02\u01BA\u01BB" +
        "\x07\x06\x02\x02\u01BB\u01BD\x054\x1B\x02\u01BC\u01BA\x03\x02\x02\x02" +
        "\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03" +
        "\x02\x02\x02\u01BF3\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1" +
        "\u01C4\x056\x1C\x02\u01C2\u01C4\x058\x1D\x02\u01C3\u01C1\x03\x02\x02\x02" +
        "\u01C3\u01C2\x03\x02\x02\x02\u01C45\x03\x02\x02\x02\u01C5\u01C6\x07V\x02" +
        "\x02\u01C6\u01C7\x07\x0F\x02\x02\u01C7\u01CA\x05\x86D\x02\u01C8\u01C9" +
        "\x07\x1D\x02\x02\u01C9\u01CB\x07V\x02\x02\u01CA\u01C8\x03\x02\x02\x02" +
        "\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC\u01CD\x07" +
        "\x1F\x02\x02\u01CD\u01CF\x07V\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE" +
        "\u01CF\x03\x02\x02\x02\u01CF\u01DC\x03\x02\x02\x02\u01D0\u01D9\x07\x11" +
        "\x02\x02\u01D1\u01D6\x05:\x1E\x02\u01D2\u01D3\x07\x06\x02\x02\u01D3\u01D5" +
        "\x05:\x1E\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02" +
        "\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01DA\x03" +
        "\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01D1\x03\x02\x02\x02\u01D9" +
        "\u01DA\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x07\x12" +
        "\x02\x02\u01DC\u01D0\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD" +
        "7\x03\x02\x02\x02\u01DE\u01DF\x07V\x02\x02\u01DF\u01E0\x07\x0F\x02\x02" +
        "\u01E0\u01E1\x07 \x02\x02\u01E1\u01E2\x05\x86D\x02\u01E2\u01E3\x07!\x02" +
        "\x02\u01E3\u01E4\x07\x11\x02\x02\u01E4";
    ATLParser._serializedATNSegment1 = "\u01E5\x05X-\x02\u01E5\u01E6\x07\x1D\x02\x02\u01E6\u01E7\x05L\'\x02\u01E7" +
        "\u01EA\x07\x12\x02\x02\u01E8\u01E9\x07\x1F\x02\x02\u01E9\u01EB\x07V\x02" +
        "\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01F8" +
        "\x03\x02\x02\x02\u01EC\u01F5\x07\x11\x02\x02\u01ED\u01F2\x05:\x1E\x02" +
        "\u01EE\u01EF\x07\x06\x02\x02\u01EF\u01F1\x05:\x1E\x02\u01F0\u01EE\x03" +
        "\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2" +
        "\u01F3\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02" +
        "\x02\x02\u01F5\u01ED\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6" +
        "\u01F7\x03\x02\x02\x02\u01F7\u01F9\x07\x12\x02\x02\u01F8\u01EC\x03\x02" +
        "\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F99\x03\x02\x02\x02\u01FA\u01FB" +
        "\x07V\x02\x02\u01FB\u01FC\x07\"\x02\x02\u01FC\u01FD\x05L\'\x02\u01FD;" +
        "\x03\x02\x02\x02\u01FE\u01FF\x07#\x02\x02\u01FF\u0203\x07\x18\x02\x02" +
        "\u0200\u0202\x05> \x02\u0201\u0200\x03\x02\x02\x02\u0202\u0205\x03\x02" +
        "\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204" +
        "\u0206\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u0207\x07\x1A" +
        "\x02\x02\u0207=\x03\x02\x02\x02\u0208\u020D\x05D#\x02\u0209\u020D\x05" +
        "B\"\x02\u020A\u020D\x05@!\x02\u020B\u020D\x05F$\x02\u020C\u0208\x03\x02" +
        "\x02\x02\u020C\u0209\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C" +
        "\u020B\x03\x02\x02\x02\u020D?\x03\x02\x02\x02\u020E\u020F\x05L\'\x02\u020F" +
        "\u0210\x07\"\x02\x02\u0210\u0211\x05L\'\x02\u0211\u0212\x07\x04\x02\x02" +
        "\u0212A\x03\x02\x02\x02\u0213\u0214\x05L\'\x02\u0214\u0215\x07\x04\x02" +
        "\x02\u0215C\x03\x02\x02\x02\u0216\u0217\x07$\x02\x02\u0217\u0218\x07\x11" +
        "\x02\x02\u0218\u0219\x05L\'\x02\u0219\u0223\x07\x12\x02\x02\u021A\u0224" +
        "\x05> \x02\u021B\u021F\x07\x18\x02\x02\u021C\u021E\x05> \x02\u021D\u021C" +
        "\x03\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02" +
        "\u021F\u0220\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221\u021F\x03" +
        "\x02\x02\x02\u0222\u0224\x07\x1A\x02\x02\u0223\u021A\x03\x02\x02\x02\u0223" +
        "\u021B\x03\x02\x02\x02\u0224\u0231\x03\x02\x02\x02\u0225\u022F\x07%\x02" +
        "\x02\u0226\u0230\x05> \x02\u0227\u022B\x07\x18\x02\x02\u0228\u022A\x05" +
        "> \x02\u0229\u0228\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02\u022B\u0229" +
        "\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03\x02\x02\x02" +
        "\u022D\u022B\x03\x02\x02\x02\u022E\u0230\x07\x1A\x02\x02\u022F\u0226\x03" +
        "\x02\x02\x02\u022F\u0227\x03\x02\x02\x02\u0230\u0232\x03\x02\x02\x02\u0231" +
        "\u0225\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232E\x03\x02\x02" +
        "\x02\u0233\u0234\x07&\x02\x02\u0234\u0235\x07\x11\x02\x02\u0235\u0236" +
        "\x05X-\x02\u0236\u0237\x07\x1D\x02\x02\u0237\u0238\x05L\'\x02\u0238\u0239" +
        "\x07\x12\x02\x02\u0239\u023D\x07\x18\x02\x02\u023A\u023C\x05> \x02\u023B" +
        "\u023A\x03\x02\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02" +
        "\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0240\x03\x02\x02\x02\u023F" +
        "\u023D\x03\x02\x02\x02\u0240\u0241\x07\x1A\x02\x02\u0241G\x03\x02\x02" +
        "\x02\u0242\u0243\x07V\x02\x02\u0243\u0244\x07\x0F\x02\x02\u0244\u0245" +
        "\x07V\x02\x02\u0245I\x03\x02\x02\x02\u0246\u0247\x07V\x02\x02\u0247\u0248" +
        "\x07\'\x02\x02\u0248\u0249\t\x02\x02\x02\u0249K\x03\x02\x02\x02\u024A" +
        "\u024D\x05\xB0Y\x02\u024B\u024D\x05n8\x02\u024C\u024A\x03\x02\x02\x02" +
        "\u024C\u024B\x03\x02\x02\x02\u024DM\x03\x02\x02\x02\u024E\u024F\x07V\x02" +
        "\x02\u024F\u0250\x07\x11\x02\x02\u0250\u0255\x05X-\x02\u0251\u0252\x07" +
        "\x06\x02\x02\u0252\u0254\x05X-\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0257" +
        "\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02" +
        "\u0256\u0258\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0258\u0259\x07" +
        "(\x02\x02\u0259\u025A\x05L\'\x02\u025A\u025B\x07\x12\x02\x02\u025BO\x03" +
        "\x02\x02\x02\u025C\u025D\x07)\x02\x02\u025D\u025E\x07\x11\x02\x02\u025E" +
        "\u0263\x05X-\x02\u025F\u0260\x07\x06\x02\x02\u0260\u0262\x05X-\x02\u0261" +
        "\u025F\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263\u0261\x03\x02" +
        "\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0266\x03\x02\x02\x02\u0265" +
        "\u0263\x03\x02\x02\x02\u0266\u0267\x07\x04\x02\x02\u0267\u0268\x05p9\x02" +
        "\u0268\u0269\x07(\x02\x02\u0269\u026A\x05L\'\x02\u026A\u026B\x07\x12\x02" +
        "\x02\u026BQ\x03\x02\x02\x02\u026C\u026D\x07V\x02\x02\u026D\u0276\x07\x11" +
        "\x02\x02\u026E\u0273\x05L\'\x02\u026F\u0270\x07\x06\x02\x02\u0270\u0272" +
        "\x05L\'\x02\u0271\u026F\x03\x02\x02\x02\u0272\u0275\x03\x02\x02\x02\u0273" +
        "\u0271\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0277\x03\x02" +
        "\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276\u026E\x03\x02\x02\x02\u0276" +
        "\u0277\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u0279\x07\x12" +
        "\x02\x02\u0279S\x03\x02\x02\x02\u027A\u027B\x07V\x02\x02\u027B\u0284\x07" +
        "\x11\x02\x02\u027C\u0281\x05L\'\x02\u027D\u027E\x07\x06\x02\x02\u027E" +
        "\u0280\x05L\'\x02\u027F\u027D\x03\x02\x02\x02\u0280\u0283\x03\x02\x02" +
        "\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0285" +
        "\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0284\u027C\x03\x02\x02\x02" +
        "\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x07" +
        "\x12\x02\x02\u0287U\x03\x02\x02\x02\u0288\u0289\x07V\x02\x02\u0289W\x03" +
        "\x02\x02\x02\u028A\u028B\x07V\x02\x02\u028BY\x03\x02\x02\x02\u028C\u028D" +
        "\x07*\x02\x02\u028D[\x03\x02\x02\x02\u028E\u0292\x05^0\x02\u028F\u0292" +
        "\x05`1\x02\u0290\u0292\x05f4\x02\u0291\u028E\x03\x02\x02\x02\u0291\u028F" +
        "\x03\x02\x02\x02\u0291\u0290\x03\x02\x02\x02\u0292]\x03\x02\x02\x02\u0293" +
        "\u0296\x05b2\x02\u0294\u0296\x05d3\x02\u0295\u0293\x03\x02\x02\x02\u0295" +
        "\u0294\x03\x02\x02\x02\u0296_\x03\x02\x02\x02\u0297\u0298\t\x04\x02\x02" +
        "\u0298a\x03\x02\x02\x02\u0299\u029A\x07T\x02\x02\u029Ac\x03\x02\x02\x02" +
        "\u029B\u029C\x07U\x02\x02\u029Ce\x03\x02\x02\x02\u029D\u029E\x07S\x02" +
        "\x02\u029Eg\x03\x02\x02\x02\u029F\u02A0\x07$\x02\x02\u02A0\u02A1\x05L" +
        "\'\x02\u02A1\u02A2\x07-\x02\x02\u02A2\u02A3\x05L\'\x02\u02A3\u02A4\x07" +
        "%\x02\x02\u02A4\u02A5\x05L\'\x02\u02A5\u02A6\x07.\x02\x02\u02A6i\x03\x02" +
        "\x02\x02\u02A7\u02A8\x07V\x02\x02\u02A8k\x03\x02\x02\x02\u02A9\u02AA\x07" +
        "/\x02\x02\u02AAm\x03\x02\x02\x02\u02AB\u02AC\x070\x02\x02\u02AC\u02AD" +
        "\x05p9\x02\u02AD\u02AE\x07\x1D\x02\x02\u02AE\u02AF\x05L\'\x02\u02AFo\x03" +
        "\x02\x02\x02\u02B0\u02B1\x07V\x02\x02\u02B1\u02B2\x07\x0F\x02\x02\u02B2" +
        "\u02B3\x05\x86D\x02\u02B3\u02B4\x07\v\x02\x02\u02B4\u02B5\x05L\'\x02\u02B5" +
        "q\x03\x02\x02\x02\u02B6\u02B7\x071\x02\x02\u02B7\u02B8\x07V\x02\x02\u02B8" +
        "s\x03\x02\x02\x02\u02B9\u02BE\x05v<\x02\u02BA\u02BE\x05x=\x02\u02BB\u02BE" +
        "\x05z>\x02\u02BC\u02BE\x05|?\x02\u02BD\u02B9\x03\x02\x02\x02\u02BD\u02BA" +
        "\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BC\x03\x02\x02\x02" +
        "\u02BEu\x03\x02\x02\x02\u02BF\u02C0\x072\x02\x02\u02C0\u02C9\x07\x18\x02" +
        "\x02\u02C1\u02C6\x05L\'\x02\u02C2\u02C3\x07\x06\x02\x02\u02C3\u02C5\x05" +
        "L\'\x02\u02C4\u02C2\x03\x02\x02\x02\u02C5\u02C8\x03\x02\x02\x02\u02C6" +
        "\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02CA\x03\x02" +
        "\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C9\u02C1\x03\x02\x02\x02\u02C9" +
        "\u02CA\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x07\x1A" +
        "\x02\x02\u02CCw\x03\x02\x02\x02\u02CD\u02CE\x073\x02\x02\u02CE\u02D7\x07" +
        "\x18\x02\x02\u02CF\u02D4\x05L\'\x02\u02D0\u02D1\x07\x06\x02\x02\u02D1" +
        "\u02D3\x05L\'\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D6\x03\x02\x02" +
        "\x02\u02D4\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D8" +
        "\x03\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D7\u02CF\x03\x02\x02\x02" +
        "\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x07" +
        "\x1A\x02\x02\u02DAy\x03\x02\x02\x02\u02DB\u02DC\x074\x02\x02\u02DC\u02E5" +
        "\x07\x18\x02\x02\u02DD\u02E2\x05L\'\x02\u02DE\u02DF\x07\x06\x02\x02\u02DF" +
        "\u02E1\x05L\'\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02E4\x03\x02\x02" +
        "\x02\u02E2\u02E0\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E6" +
        "\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E5\u02DD\x03\x02\x02\x02" +
        "\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E8\x07" +
        "\x1A\x02\x02\u02E8{\x03\x02\x02\x02\u02E9\u02EA\x075\x02\x02\u02EA\u02F3" +
        "\x07\x18\x02\x02\u02EB\u02F0\x05L\'\x02\u02EC\u02ED\x07\x06\x02\x02\u02ED" +
        "\u02EF\x05L\'\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F2\x03\x02\x02" +
        "\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F4" +
        "\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F3\u02EB\x03\x02\x02\x02" +
        "\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F6\x07" +
        "\x1A\x02\x02\u02F6}\x03\x02\x02\x02\u02F7\u02F8\x076\x02\x02\u02F8\u0301" +
        "\x07\x18\x02\x02\u02F9\u02FE\x05\x80A\x02\u02FA\u02FB\x07\x06\x02\x02" +
        "\u02FB\u02FD\x05\x80A\x02\u02FC\u02FA\x03\x02\x02\x02\u02FD\u0300\x03" +
        "\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF" +
        "\u0302\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301\u02F9\x03\x02" +
        "\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303" +
        "\u0304\x07\x1A\x02\x02\u0304\x7F\x03\x02\x02\x02\u0305\u0306\x07\x11\x02" +
        "\x02\u0306\u0307\x05L\'\x02\u0307\u0308\x07\x06\x02\x02\u0308\u0309\x05" +
        "L\'\x02\u0309\u030A\x07\x12\x02\x02\u030A\x81\x03\x02\x02\x02\u030B\u030C" +
        "\x077\x02\x02\u030C\u0315\x07\x18\x02\x02\u030D\u0312\x05\x84C\x02\u030E" +
        "\u030F\x07\x06\x02\x02\u030F\u0311\x05\x84C\x02\u0310\u030E\x03\x02\x02" +
        "\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313" +
        "\x03\x02\x02\x02\u0313\u0316\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02" +
        "\u0315\u030D\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0317\x03" +
        "\x02\x02\x02\u0317\u0318\x07\x1A\x02\x02\u0318\x83\x03\x02\x02\x02\u0319" +
        "\u031C\x07V\x02\x02\u031A\u031B\x07\x0F\x02\x02\u031B\u031D\x05\x86D\x02" +
        "\u031C\u031A\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031E\x03" +
        "\x02\x02\x02\u031E\u031F\x07\v\x02\x02\u031F\u0320\x05L\'\x02\u0320\x85" +
        "\x03\x02\x02\x02\u0321\u0329\x05J&\x02\u0322\u0329\x05\x88E\x02\u0323" +
        "\u0329\x05\x8AF\x02\u0324\u0329\x05\x8EH\x02\u0325\u0329\x05\x90I\x02" +
        "\u0326\u0329\x05\x9CO\x02\u0327\u0329\x05\xB4[\x02\u0328\u0321\x03\x02" +
        "\x02\x02\u0328\u0322\x03\x02\x02\x02\u0328\u0323\x03\x02\x02\x02\u0328" +
        "\u0324\x03\x02\x02\x02\u0328\u0325\x03\x02\x02\x02\u0328\u0326\x03\x02" +
        "\x02\x02\u0328\u0327\x03\x02\x02\x02\u0329\x87\x03\x02\x02\x02\u032A\u032B" +
        "\x05\xB6\\\x02\u032B\x89\x03\x02\x02\x02\u032C\u032D\x078\x02\x02\u032D" +
        "\u0336\x07\x11\x02\x02\u032E\u0333\x05\x8CG\x02\u032F\u0330\x07\x06\x02" +
        "\x02\u0330\u0332\x05\x8CG\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0335" +
        "\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02" +
        "\u0334\u0337\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0336\u032E\x03" +
        "\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338" +
        "\u0339\x07\x12\x02\x02\u0339\x8B\x03\x02\x02\x02\u033A\u033B\x07V\x02" +
        "\x02\u033B\u033C\x07\x0F\x02\x02\u033C\u033D\x05\x86D\x02\u033D\x8D\x03" +
        "\x02\x02\x02\u033E\u033F\x076\x02\x02\u033F\u0340\x07\x11\x02\x02\u0340" +
        "\u0341\x05\x86D\x02\u0341\u0342\x07\x06\x02\x02\u0342\u0343\x05\x86D\x02" +
        "\u0343\u0344\x07\x12\x02\x02\u0344\x8F\x03\x02\x02\x02\u0345\u0349\x05" +
        "\x92J\x02\u0346\u0349\x05\x98M\x02\u0347\u0349\x05\x9AN\x02\u0348\u0345" +
        "\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0348\u0347\x03\x02\x02\x02" +
        "\u0349\x91\x03\x02\x02\x02\u034A\u034D\x05\x94K\x02\u034B\u034D\x05\x96" +
        "L\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034B\x03\x02\x02\x02\u034D\x93" +
        "\x03\x02\x02\x02\u034E\u034F\x079\x02\x02\u034F\x95\x03\x02\x02\x02\u0350" +
        "\u0351\x07:\x02\x02\u0351\x97\x03\x02\x02\x02\u0352\u0353\x07;\x02\x02" +
        "\u0353\x99\x03\x02\x02\x02\u0354\u0355\x07<\x02\x02\u0355\x9B\x03\x02" +
        "\x02\x02\u0356\u035C\x05\x9EP\x02\u0357\u035C\x05\xA0Q\x02\u0358\u035C" +
        "\x05\xA2R\x02\u0359\u035C\x05\xA4S\x02\u035A\u035C\x05\xB8]\x02\u035B" +
        "\u0356\x03\x02\x02\x02\u035B\u0357\x03\x02\x02\x02\u035B\u0358\x03\x02" +
        "\x02\x02\u035B\u0359\x03\x02\x02\x02\u035B\u035A\x03\x02\x02\x02\u035C" +
        "\x9D\x03\x02\x02\x02\u035D\u035E\x072\x02\x02\u035E\u035F\x07\x11\x02" +
        "\x02\u035F\u0360\x05\x86D\x02\u0360\u0361\x07\x12\x02\x02\u0361\x9F\x03" +
        "\x02\x02\x02\u0362\u0363\x073\x02\x02\u0363\u0364\x07\x11\x02\x02\u0364" +
        "\u0365\x05\x86D\x02\u0365\u0366\x07\x12\x02\x02\u0366\xA1\x03\x02\x02" +
        "\x02\u0367\u0368\x074\x02\x02\u0368\u0369\x07\x11\x02\x02\u0369\u036A" +
        "\x05\x86D\x02\u036A\u036B\x07\x12\x02\x02\u036B\xA3\x03\x02\x02\x02\u036C" +
        "\u036D\x075\x02\x02\u036D\u036E\x07\x11\x02\x02\u036E\u036F\x05\x86D\x02" +
        "\u036F\u0370\x07\x12\x02\x02\u0370\xA5\x03\x02\x02\x02\u0371\u037F\x05" +
        "\xBA^\x02\u0372\u0375\x07=\x02\x02\u0373\u0376\x05T+\x02\u0374\u0376\x05" +
        "V,\x02\u0375\u0373\x03\x02\x02\x02\u0375\u0374\x03\x02\x02\x02\u0376\u037E" +
        "\x03\x02\x02\x02\u0377\u037B\x07>\x02\x02\u0378\u037C\x05N(\x02\u0379" +
        "\u037C\x05P)\x02\u037A\u037C\x05R*\x02\u037B\u0378\x03\x02\x02\x02\u037B" +
        "\u0379\x03\x02\x02\x02\u037B\u037A\x03\x02\x02\x02\u037C\u037E\x03\x02" +
        "\x02\x02\u037D\u0372\x03\x02\x02\x02\u037D\u0377\x03\x02\x02\x02\u037E" +
        "\u0381\x03\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u0380\x03\x02" +
        "\x02\x02\u0380\xA7\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0382\u0383" +
        "\x07?\x02\x02\u0383\u0388\x05\xA6T\x02\u0384\u0385\x07@\x02\x02\u0385" +
        "\u0388\x05\xA6T\x02\u0386\u0388\x05\xA6T\x02\u0387\u0382\x03\x02\x02\x02" +
        "\u0387\u0384\x03\x02\x02\x02\u0387\u0386\x03\x02\x02\x02\u0388\xA9\x03" +
        "\x02\x02\x02\u0389\u0394\x05\xA8U\x02\u038A\u038B\x07A\x02\x02\u038B\u0393" +
        "\x05\xA8U\x02\u038C\u038D\x07B\x02\x02\u038D\u0393\x05\xA8U\x02\u038E" +
        "\u038F\x07C\x02\x02\u038F\u0393\x05\xA8U\x02\u0390\u0391\x07D\x02\x02" +
        "\u0391\u0393\x05\xA8U\x02\u0392\u038A\x03\x02\x02\x02\u0392\u038C\x03" +
        "\x02\x02\x02\u0392\u038E\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0393" +
        "\u0396\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0395\x03\x02" +
        "\x02\x02\u0395\xAB\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0397\u039E" +
        "\x05\xAAV\x02\u0398\u0399\x07E\x02\x02\u0399\u039D\x05\xAAV\x02\u039A" +
        "\u039B\x07@\x02\x02\u039B\u039D\x05\xAAV\x02\u039C\u0398\x03\x02\x02\x02" +
        "\u039C\u039A\x03\x02\x02\x02\u039D\u03A0\x03\x02\x02\x02\u039E\u039C\x03" +
        "\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\xAD\x03\x02\x02\x02\u03A0" +
        "\u039E\x03\x02\x02\x02\u03A1\u03B0\x05\xACW\x02\u03A2\u03A3\x07\v\x02" +
        "\x02\u03A3\u03AF\x05\xACW\x02\u03A4\u03A5\x07F\x02\x02\u03A5\u03AF\x05" +
        "\xACW\x02\u03A6\u03A7\x07G\x02\x02\u03A7\u03AF\x05\xACW\x02\u03A8\u03A9" +
        "\x07H\x02\x02\u03A9\u03AF\x05\xACW\x02\u03AA\u03AB\x07I\x02\x02\u03AB" +
        "\u03AF\x05\xACW\x02\u03AC\u03AD\x07J\x02\x02\u03AD\u03AF\x05\xACW\x02" +
        "\u03AE\u03A2\x03\x02\x02\x02\u03AE\u03A4\x03\x02\x02\x02\u03AE\u03A6\x03" +
        "\x02\x02\x02\u03AE\u03A8\x03\x02\x02\x02\u03AE\u03AA\x03\x02\x02\x02\u03AE" +
        "\u03AC\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0\u03AE\x03\x02" +
        "\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\xAF\x03\x02\x02\x02\u03B2\u03B0" +
        "\x03\x02\x02\x02\u03B3\u03BE\x05\xAEX\x02\u03B4\u03B5\x07K\x02\x02\u03B5" +
        "\u03BD\x05\xAEX\x02\u03B6\u03B7\x07L\x02\x02\u03B7\u03BD\x05\xAEX\x02" +
        "\u03B8\u03B9\x07M\x02\x02\u03B9\u03BD\x05\xAEX\x02\u03BA\u03BB\x07N\x02" +
        "\x02\u03BB\u03BD\x05\xAEX\x02\u03BC\u03B4\x03\x02\x02\x02\u03BC\u03B6" +
        "\x03\x02\x02\x02\u03BC\u03B8\x03\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02" +
        "\u03BD\u03C0\x03\x02\x02\x02\u03BE\u03BC\x03\x02\x02\x02\u03BE\u03BF\x03" +
        "\x02\x02\x02\u03BF\xB1\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C1" +
        "\u03C3\x07O\x02\x02\u03C2\u03C1\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02" +
        "\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4\u03C6\x07\x15\x02\x02\u03C5\u03C4" +
        "\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C8\x03\x02\x02\x02" +
        "\u03C7\u03C9\x07\x07\x02\x02\u03C8\u03C7\x03\x02\x02\x02\u03C8\u03C9\x03" +
        "\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x07\x16\x02\x02\u03CB" +
        "\u03CE\x07V\x02\x02\u03CC\u03CD\x07\x17\x02\x02\u03CD\u03CF\x07V\x02\x02" +
        "\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D0\x03" +
        "\x02\x02\x02\u03D0\u03D1\x07\x18\x02\x02\u03D1\u03DB\x05,\x17\x02\u03D2" +
        "\u03D3\x07\x19\x02\x02\u03D3\u03D7\x07\x18\x02\x02\u03D4\u03D6\x05(\x15" +
        "\x02\u03D5\u03D4\x03\x02\x02\x02\u03D6\u03D9\x03\x02\x02\x02\u03D7\u03D5" +
        "\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03DA\x03\x02\x02\x02" +
        "\u03D9\u03D7\x03\x02\x02\x02\u03DA\u03DC\x07\x1A\x02\x02\u03DB\u03D2\x03" +
        "\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DE\x03\x02\x02\x02\u03DD" +
        "\u03DF\x052\x1A\x02\u03DE\u03DD\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02" +
        "\x02\u03DF\u03E1\x03\x02\x02\x02\u03E0\u03E2\x05<\x1F\x02\u03E1\u03E0" +
        "\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02" +
        "\u03E3\u03E4\x07\x1A\x02\x02\u03E4\xB3\x03\x02\x02\x02\u03E5\u03E6\x07" +
        "P\x02\x02\u03E6\xB5\x03\x02\x02\x02\u03E7\u03E8\x07Q\x02\x02\u03E8\xB7" +
        "\x03\x02\x02\x02\u03E9\u03EA\x07R\x02\x02\u03EA\u03EB\x07\x11\x02\x02" +
        "\u03EB\u03EC\x05\x86D\x02\u03EC\u03ED\x07\x12\x02\x02\u03ED\xB9\x03\x02" +
        "\x02\x02\u03EE\u03FD\x05j6\x02\u03EF\u03FD\x05Z.\x02\u03F0\u03FD\x05\\" +
        "/\x02\u03F1\u03FD\x05h5\x02\u03F2\u03FD\x05l7\x02\u03F3\u03FD\x05r:\x02" +
        "\u03F4\u03FD\x05t;\x02\u03F5\u03FD\x05~@\x02\u03F6\u03FD\x05\x82B\x02" +
        "\u03F7\u03FD\x05\x86D\x02\u03F8\u03F9\x07\x11\x02\x02\u03F9\u03FA\x05" +
        "L\'\x02\u03FA\u03FB\x07\x12\x02\x02\u03FB\u03FD\x03\x02\x02\x02\u03FC" +
        "\u03EE\x03\x02\x02\x02\u03FC\u03EF\x03\x02\x02\x02\u03FC\u03F0\x03\x02" +
        "\x02\x02\u03FC\u03F1\x03\x02\x02\x02\u03FC\u03F2\x03\x02\x02\x02\u03FC" +
        "\u03F3\x03\x02\x02\x02\u03FC\u03F4\x03\x02\x02\x02\u03FC\u03F5\x03\x02" +
        "\x02\x02\u03FC\u03F6\x03\x02\x02\x02\u03FC\u03F7\x03\x02\x02\x02\u03FC" +
        "\u03F8\x03\x02\x02\x02\u03FD\xBB\x03\x02\x02\x02l\xBF\xCC\xD2\xDA\xE2" +
        "\xED\xF3\xFE\u0104\u010D\u0114\u011F\u0128\u012B\u013F\u0143\u0146\u014A" +
        "\u014D\u0153\u015C\u0160\u0163\u0166\u0172\u0175\u017F\u0182\u018B\u018F" +
        "\u0192\u0195\u019F\u01A6\u01B3\u01B6\u01BE\u01C3\u01CA\u01CE\u01D6\u01D9" +
        "\u01DC\u01EA\u01F2\u01F5\u01F8\u0203\u020C\u021F\u0223\u022B\u022F\u0231" +
        "\u023D\u024C\u0255\u0263\u0273\u0276\u0281\u0284\u0291\u0295\u02BD\u02C6" +
        "\u02C9\u02D4\u02D7\u02E2\u02E5\u02F0\u02F3\u02FE\u0301\u0312\u0315\u031C" +
        "\u0328\u0333\u0336\u0348\u034C\u035B\u0375\u037B\u037D\u037F\u0387\u0392" +
        "\u0394\u039C\u039E\u03AE\u03B0\u03BC\u03BE\u03C2\u03C5\u03C8\u03CE\u03D7" +
        "\u03DB\u03DE\u03E1\u03FC";
    ATLParser._serializedATN = Utils.join([
        ATLParser._serializedATNSegment0,
        ATLParser._serializedATNSegment1,
    ], "");
    return ATLParser;
}(Parser_1.Parser));
exports.ATLParser = ATLParser;
var UnitContext = /** @class */ (function (_super) {
    __extends(UnitContext, _super);
    function UnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnitContext.prototype.module = function () {
        return this.tryGetRuleContext(0, ModuleContext);
    };
    UnitContext.prototype.library = function () {
        return this.tryGetRuleContext(0, LibraryContext);
    };
    UnitContext.prototype.query = function () {
        return this.tryGetRuleContext(0, QueryContext);
    };
    Object.defineProperty(UnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_unit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnitContext.prototype.enterRule = function (listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    };
    // @Override
    UnitContext.prototype.exitRule = function (listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    };
    // @Override
    UnitContext.prototype.accept = function (visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnitContext = UnitContext;
var ModuleContext = /** @class */ (function (_super) {
    __extends(ModuleContext, _super);
    function ModuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleContext.prototype.targetModelPattern = function () {
        return this.getRuleContext(0, TargetModelPatternContext);
    };
    ModuleContext.prototype.transformationMode = function () {
        return this.getRuleContext(0, TransformationModeContext);
    };
    ModuleContext.prototype.sourceModelPattern = function () {
        return this.getRuleContext(0, SourceModelPatternContext);
    };
    ModuleContext.prototype.STRING = function () { return this.tryGetToken(ATLParser.STRING, 0); };
    ModuleContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ATLParser.IDENTIFIER, 0); };
    ModuleContext.prototype.libraryRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LibraryRefContext);
        }
        else {
            return this.getRuleContext(i, LibraryRefContext);
        }
    };
    ModuleContext.prototype.moduleElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModuleElementContext);
        }
        else {
            return this.getRuleContext(i, ModuleElementContext);
        }
    };
    Object.defineProperty(ModuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_module; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleContext.prototype.enterRule = function (listener) {
        if (listener.enterModule) {
            listener.enterModule(this);
        }
    };
    // @Override
    ModuleContext.prototype.exitRule = function (listener) {
        if (listener.exitModule) {
            listener.exitModule(this);
        }
    };
    // @Override
    ModuleContext.prototype.accept = function (visitor) {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleContext = ModuleContext;
var TargetModelPatternContext = /** @class */ (function (_super) {
    __extends(TargetModelPatternContext, _super);
    function TargetModelPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TargetModelPatternContext.prototype.oclModel = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclModelContext);
        }
        else {
            return this.getRuleContext(i, OclModelContext);
        }
    };
    Object.defineProperty(TargetModelPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_targetModelPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TargetModelPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterTargetModelPattern) {
            listener.enterTargetModelPattern(this);
        }
    };
    // @Override
    TargetModelPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitTargetModelPattern) {
            listener.exitTargetModelPattern(this);
        }
    };
    // @Override
    TargetModelPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitTargetModelPattern) {
            return visitor.visitTargetModelPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TargetModelPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TargetModelPatternContext = TargetModelPatternContext;
var SourceModelPatternContext = /** @class */ (function (_super) {
    __extends(SourceModelPatternContext, _super);
    function SourceModelPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceModelPatternContext.prototype.oclModel = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclModelContext);
        }
        else {
            return this.getRuleContext(i, OclModelContext);
        }
    };
    Object.defineProperty(SourceModelPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_sourceModelPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceModelPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceModelPattern) {
            listener.enterSourceModelPattern(this);
        }
    };
    // @Override
    SourceModelPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceModelPattern) {
            listener.exitSourceModelPattern(this);
        }
    };
    // @Override
    SourceModelPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceModelPattern) {
            return visitor.visitSourceModelPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceModelPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceModelPatternContext = SourceModelPatternContext;
var TransformationModeContext = /** @class */ (function (_super) {
    __extends(TransformationModeContext, _super);
    function TransformationModeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TransformationModeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_transformationMode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TransformationModeContext.prototype.enterRule = function (listener) {
        if (listener.enterTransformationMode) {
            listener.enterTransformationMode(this);
        }
    };
    // @Override
    TransformationModeContext.prototype.exitRule = function (listener) {
        if (listener.exitTransformationMode) {
            listener.exitTransformationMode(this);
        }
    };
    // @Override
    TransformationModeContext.prototype.accept = function (visitor) {
        if (visitor.visitTransformationMode) {
            return visitor.visitTransformationMode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TransformationModeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TransformationModeContext = TransformationModeContext;
var LibraryContext = /** @class */ (function (_super) {
    __extends(LibraryContext, _super);
    function LibraryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LibraryContext.prototype.STRING = function () { return this.tryGetToken(ATLParser.STRING, 0); };
    LibraryContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ATLParser.IDENTIFIER, 0); };
    LibraryContext.prototype.libraryRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LibraryRefContext);
        }
        else {
            return this.getRuleContext(i, LibraryRefContext);
        }
    };
    LibraryContext.prototype.helper = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HelperContext);
        }
        else {
            return this.getRuleContext(i, HelperContext);
        }
    };
    Object.defineProperty(LibraryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_library; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LibraryContext.prototype.enterRule = function (listener) {
        if (listener.enterLibrary) {
            listener.enterLibrary(this);
        }
    };
    // @Override
    LibraryContext.prototype.exitRule = function (listener) {
        if (listener.exitLibrary) {
            listener.exitLibrary(this);
        }
    };
    // @Override
    LibraryContext.prototype.accept = function (visitor) {
        if (visitor.visitLibrary) {
            return visitor.visitLibrary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LibraryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LibraryContext = LibraryContext;
var QueryContext = /** @class */ (function (_super) {
    __extends(QueryContext, _super);
    function QueryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QueryContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    QueryContext.prototype.STRING = function () { return this.tryGetToken(ATLParser.STRING, 0); };
    QueryContext.prototype.IDENTIFIER = function () { return this.tryGetToken(ATLParser.IDENTIFIER, 0); };
    QueryContext.prototype.libraryRef = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LibraryRefContext);
        }
        else {
            return this.getRuleContext(i, LibraryRefContext);
        }
    };
    QueryContext.prototype.helper = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HelperContext);
        }
        else {
            return this.getRuleContext(i, HelperContext);
        }
    };
    Object.defineProperty(QueryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_query; },
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
var LibraryRefContext = /** @class */ (function (_super) {
    __extends(LibraryRefContext, _super);
    function LibraryRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LibraryRefContext.prototype.STRING = function () { return this.getToken(ATLParser.STRING, 0); };
    Object.defineProperty(LibraryRefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_libraryRef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LibraryRefContext.prototype.enterRule = function (listener) {
        if (listener.enterLibraryRef) {
            listener.enterLibraryRef(this);
        }
    };
    // @Override
    LibraryRefContext.prototype.exitRule = function (listener) {
        if (listener.exitLibraryRef) {
            listener.exitLibraryRef(this);
        }
    };
    // @Override
    LibraryRefContext.prototype.accept = function (visitor) {
        if (visitor.visitLibraryRef) {
            return visitor.visitLibraryRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LibraryRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LibraryRefContext = LibraryRefContext;
var ModuleElementContext = /** @class */ (function (_super) {
    __extends(ModuleElementContext, _super);
    function ModuleElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModuleElementContext.prototype.helper = function () {
        return this.tryGetRuleContext(0, HelperContext);
    };
    ModuleElementContext.prototype.arule = function () {
        return this.tryGetRuleContext(0, AruleContext);
    };
    Object.defineProperty(ModuleElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_moduleElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModuleElementContext.prototype.enterRule = function (listener) {
        if (listener.enterModuleElement) {
            listener.enterModuleElement(this);
        }
    };
    // @Override
    ModuleElementContext.prototype.exitRule = function (listener) {
        if (listener.exitModuleElement) {
            listener.exitModuleElement(this);
        }
    };
    // @Override
    ModuleElementContext.prototype.accept = function (visitor) {
        if (visitor.visitModuleElement) {
            return visitor.visitModuleElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModuleElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModuleElementContext = ModuleElementContext;
var HelperContext = /** @class */ (function (_super) {
    __extends(HelperContext, _super);
    function HelperContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HelperContext.prototype.oclFeatureDefinition = function () {
        return this.getRuleContext(0, OclFeatureDefinitionContext);
    };
    Object.defineProperty(HelperContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_helper; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HelperContext.prototype.enterRule = function (listener) {
        if (listener.enterHelper) {
            listener.enterHelper(this);
        }
    };
    // @Override
    HelperContext.prototype.exitRule = function (listener) {
        if (listener.exitHelper) {
            listener.exitHelper(this);
        }
    };
    // @Override
    HelperContext.prototype.accept = function (visitor) {
        if (visitor.visitHelper) {
            return visitor.visitHelper(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HelperContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HelperContext = HelperContext;
var OclFeatureDefinitionContext = /** @class */ (function (_super) {
    __extends(OclFeatureDefinitionContext, _super);
    function OclFeatureDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OclFeatureDefinitionContext.prototype.oclFeature = function () {
        return this.getRuleContext(0, OclFeatureContext);
    };
    OclFeatureDefinitionContext.prototype.oclContextDefinition = function () {
        return this.tryGetRuleContext(0, OclContextDefinitionContext);
    };
    Object.defineProperty(OclFeatureDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclFeatureDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclFeatureDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterOclFeatureDefinition) {
            listener.enterOclFeatureDefinition(this);
        }
    };
    // @Override
    OclFeatureDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitOclFeatureDefinition) {
            listener.exitOclFeatureDefinition(this);
        }
    };
    // @Override
    OclFeatureDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitOclFeatureDefinition) {
            return visitor.visitOclFeatureDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclFeatureDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclFeatureDefinitionContext = OclFeatureDefinitionContext;
var OclContextDefinitionContext = /** @class */ (function (_super) {
    __extends(OclContextDefinitionContext, _super);
    function OclContextDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OclContextDefinitionContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(OclContextDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclContextDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclContextDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterOclContextDefinition) {
            listener.enterOclContextDefinition(this);
        }
    };
    // @Override
    OclContextDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitOclContextDefinition) {
            listener.exitOclContextDefinition(this);
        }
    };
    // @Override
    OclContextDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitOclContextDefinition) {
            return visitor.visitOclContextDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclContextDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclContextDefinitionContext = OclContextDefinitionContext;
var OclFeatureContext = /** @class */ (function (_super) {
    __extends(OclFeatureContext, _super);
    function OclFeatureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OclFeatureContext.prototype.operation = function () {
        return this.tryGetRuleContext(0, OperationContext);
    };
    OclFeatureContext.prototype.attribute = function () {
        return this.tryGetRuleContext(0, AttributeContext);
    };
    Object.defineProperty(OclFeatureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclFeature; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclFeatureContext.prototype.enterRule = function (listener) {
        if (listener.enterOclFeature) {
            listener.enterOclFeature(this);
        }
    };
    // @Override
    OclFeatureContext.prototype.exitRule = function (listener) {
        if (listener.exitOclFeature) {
            listener.exitOclFeature(this);
        }
    };
    // @Override
    OclFeatureContext.prototype.accept = function (visitor) {
        if (visitor.visitOclFeature) {
            return visitor.visitOclFeature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclFeatureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclFeatureContext = OclFeatureContext;
var OperationContext = /** @class */ (function (_super) {
    __extends(OperationContext, _super);
    function OperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperationContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    OperationContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    OperationContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    OperationContext.prototype.parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    };
    Object.defineProperty(OperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_operation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperationContext.prototype.enterRule = function (listener) {
        if (listener.enterOperation) {
            listener.enterOperation(this);
        }
    };
    // @Override
    OperationContext.prototype.exitRule = function (listener) {
        if (listener.exitOperation) {
            listener.exitOperation(this);
        }
    };
    // @Override
    OperationContext.prototype.accept = function (visitor) {
        if (visitor.visitOperation) {
            return visitor.visitOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperationContext = OperationContext;
var ParameterContext = /** @class */ (function (_super) {
    __extends(ParameterContext, _super);
    function ParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    ParameterContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(ParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterContext = ParameterContext;
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    AttributeContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    AttributeContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeContext = AttributeContext;
var AruleContext = /** @class */ (function (_super) {
    __extends(AruleContext, _super);
    function AruleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AruleContext.prototype.calledRule = function () {
        return this.tryGetRuleContext(0, CalledRuleContext);
    };
    AruleContext.prototype.matchedRule = function () {
        return this.tryGetRuleContext(0, MatchedRuleContext);
    };
    Object.defineProperty(AruleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_arule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AruleContext.prototype.enterRule = function (listener) {
        if (listener.enterArule) {
            listener.enterArule(this);
        }
    };
    // @Override
    AruleContext.prototype.exitRule = function (listener) {
        if (listener.exitArule) {
            listener.exitArule(this);
        }
    };
    // @Override
    AruleContext.prototype.accept = function (visitor) {
        if (visitor.visitArule) {
            return visitor.visitArule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AruleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AruleContext = AruleContext;
var MatchedRuleContext = /** @class */ (function (_super) {
    __extends(MatchedRuleContext, _super);
    function MatchedRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MatchedRuleContext.prototype.lazyMatchedRule = function () {
        return this.tryGetRuleContext(0, LazyMatchedRuleContext);
    };
    MatchedRuleContext.prototype.matchedRule_abstractContents = function () {
        return this.tryGetRuleContext(0, MatchedRule_abstractContentsContext);
    };
    Object.defineProperty(MatchedRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_matchedRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MatchedRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterMatchedRule) {
            listener.enterMatchedRule(this);
        }
    };
    // @Override
    MatchedRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitMatchedRule) {
            listener.exitMatchedRule(this);
        }
    };
    // @Override
    MatchedRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitMatchedRule) {
            return visitor.visitMatchedRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MatchedRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MatchedRuleContext = MatchedRuleContext;
var LazyMatchedRuleContext = /** @class */ (function (_super) {
    __extends(LazyMatchedRuleContext, _super);
    function LazyMatchedRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LazyMatchedRuleContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ATLParser.IDENTIFIER);
        }
        else {
            return this.getToken(ATLParser.IDENTIFIER, i);
        }
    };
    LazyMatchedRuleContext.prototype.inPattern = function () {
        return this.getRuleContext(0, InPatternContext);
    };
    LazyMatchedRuleContext.prototype.outPattern = function () {
        return this.tryGetRuleContext(0, OutPatternContext);
    };
    LazyMatchedRuleContext.prototype.actionBlock = function () {
        return this.tryGetRuleContext(0, ActionBlockContext);
    };
    LazyMatchedRuleContext.prototype.ruleVariableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleVariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, RuleVariableDeclarationContext);
        }
    };
    Object.defineProperty(LazyMatchedRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_lazyMatchedRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LazyMatchedRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterLazyMatchedRule) {
            listener.enterLazyMatchedRule(this);
        }
    };
    // @Override
    LazyMatchedRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitLazyMatchedRule) {
            listener.exitLazyMatchedRule(this);
        }
    };
    // @Override
    LazyMatchedRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitLazyMatchedRule) {
            return visitor.visitLazyMatchedRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LazyMatchedRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LazyMatchedRuleContext = LazyMatchedRuleContext;
var RuleVariableDeclarationContext = /** @class */ (function (_super) {
    __extends(RuleVariableDeclarationContext, _super);
    function RuleVariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RuleVariableDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    RuleVariableDeclarationContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    RuleVariableDeclarationContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(RuleVariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_ruleVariableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RuleVariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterRuleVariableDeclaration) {
            listener.enterRuleVariableDeclaration(this);
        }
    };
    // @Override
    RuleVariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitRuleVariableDeclaration) {
            listener.exitRuleVariableDeclaration(this);
        }
    };
    // @Override
    RuleVariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitRuleVariableDeclaration) {
            return visitor.visitRuleVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RuleVariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RuleVariableDeclarationContext = RuleVariableDeclarationContext;
var CalledRuleContext = /** @class */ (function (_super) {
    __extends(CalledRuleContext, _super);
    function CalledRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CalledRuleContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    CalledRuleContext.prototype.parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    };
    CalledRuleContext.prototype.outPattern = function () {
        return this.tryGetRuleContext(0, OutPatternContext);
    };
    CalledRuleContext.prototype.actionBlock = function () {
        return this.tryGetRuleContext(0, ActionBlockContext);
    };
    CalledRuleContext.prototype.ruleVariableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleVariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, RuleVariableDeclarationContext);
        }
    };
    Object.defineProperty(CalledRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_calledRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CalledRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterCalledRule) {
            listener.enterCalledRule(this);
        }
    };
    // @Override
    CalledRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitCalledRule) {
            listener.exitCalledRule(this);
        }
    };
    // @Override
    CalledRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitCalledRule) {
            return visitor.visitCalledRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CalledRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CalledRuleContext = CalledRuleContext;
var InPatternContext = /** @class */ (function (_super) {
    __extends(InPatternContext, _super);
    function InPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InPatternContext.prototype.inPatternElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InPatternElementContext);
        }
        else {
            return this.getRuleContext(i, InPatternElementContext);
        }
    };
    InPatternContext.prototype.oclExpression = function () {
        return this.tryGetRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(InPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_inPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterInPattern) {
            listener.enterInPattern(this);
        }
    };
    // @Override
    InPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitInPattern) {
            listener.exitInPattern(this);
        }
    };
    // @Override
    InPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitInPattern) {
            return visitor.visitInPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InPatternContext = InPatternContext;
var InPatternElementContext = /** @class */ (function (_super) {
    __extends(InPatternElementContext, _super);
    function InPatternElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InPatternElementContext.prototype.simpleInPatternElement = function () {
        return this.getRuleContext(0, SimpleInPatternElementContext);
    };
    Object.defineProperty(InPatternElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_inPatternElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InPatternElementContext.prototype.enterRule = function (listener) {
        if (listener.enterInPatternElement) {
            listener.enterInPatternElement(this);
        }
    };
    // @Override
    InPatternElementContext.prototype.exitRule = function (listener) {
        if (listener.exitInPatternElement) {
            listener.exitInPatternElement(this);
        }
    };
    // @Override
    InPatternElementContext.prototype.accept = function (visitor) {
        if (visitor.visitInPatternElement) {
            return visitor.visitInPatternElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InPatternElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InPatternElementContext = InPatternElementContext;
var SimpleInPatternElementContext = /** @class */ (function (_super) {
    __extends(SimpleInPatternElementContext, _super);
    function SimpleInPatternElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleInPatternElementContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ATLParser.IDENTIFIER);
        }
        else {
            return this.getToken(ATLParser.IDENTIFIER, i);
        }
    };
    SimpleInPatternElementContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(SimpleInPatternElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_simpleInPatternElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleInPatternElementContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleInPatternElement) {
            listener.enterSimpleInPatternElement(this);
        }
    };
    // @Override
    SimpleInPatternElementContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleInPatternElement) {
            listener.exitSimpleInPatternElement(this);
        }
    };
    // @Override
    SimpleInPatternElementContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleInPatternElement) {
            return visitor.visitSimpleInPatternElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleInPatternElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleInPatternElementContext = SimpleInPatternElementContext;
var OutPatternContext = /** @class */ (function (_super) {
    __extends(OutPatternContext, _super);
    function OutPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OutPatternContext.prototype.outPatternElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OutPatternElementContext);
        }
        else {
            return this.getRuleContext(i, OutPatternElementContext);
        }
    };
    Object.defineProperty(OutPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_outPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OutPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterOutPattern) {
            listener.enterOutPattern(this);
        }
    };
    // @Override
    OutPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitOutPattern) {
            listener.exitOutPattern(this);
        }
    };
    // @Override
    OutPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitOutPattern) {
            return visitor.visitOutPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OutPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OutPatternContext = OutPatternContext;
var OutPatternElementContext = /** @class */ (function (_super) {
    __extends(OutPatternElementContext, _super);
    function OutPatternElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OutPatternElementContext.prototype.simpleOutPatternElement = function () {
        return this.tryGetRuleContext(0, SimpleOutPatternElementContext);
    };
    OutPatternElementContext.prototype.forEachOutPatternElement = function () {
        return this.tryGetRuleContext(0, ForEachOutPatternElementContext);
    };
    Object.defineProperty(OutPatternElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_outPatternElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OutPatternElementContext.prototype.enterRule = function (listener) {
        if (listener.enterOutPatternElement) {
            listener.enterOutPatternElement(this);
        }
    };
    // @Override
    OutPatternElementContext.prototype.exitRule = function (listener) {
        if (listener.exitOutPatternElement) {
            listener.exitOutPatternElement(this);
        }
    };
    // @Override
    OutPatternElementContext.prototype.accept = function (visitor) {
        if (visitor.visitOutPatternElement) {
            return visitor.visitOutPatternElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OutPatternElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OutPatternElementContext = OutPatternElementContext;
var SimpleOutPatternElementContext = /** @class */ (function (_super) {
    __extends(SimpleOutPatternElementContext, _super);
    function SimpleOutPatternElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleOutPatternElementContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ATLParser.IDENTIFIER);
        }
        else {
            return this.getToken(ATLParser.IDENTIFIER, i);
        }
    };
    SimpleOutPatternElementContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    SimpleOutPatternElementContext.prototype.binding = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BindingContext);
        }
        else {
            return this.getRuleContext(i, BindingContext);
        }
    };
    Object.defineProperty(SimpleOutPatternElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_simpleOutPatternElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleOutPatternElementContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleOutPatternElement) {
            listener.enterSimpleOutPatternElement(this);
        }
    };
    // @Override
    SimpleOutPatternElementContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleOutPatternElement) {
            listener.exitSimpleOutPatternElement(this);
        }
    };
    // @Override
    SimpleOutPatternElementContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleOutPatternElement) {
            return visitor.visitSimpleOutPatternElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleOutPatternElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleOutPatternElementContext = SimpleOutPatternElementContext;
var ForEachOutPatternElementContext = /** @class */ (function (_super) {
    __extends(ForEachOutPatternElementContext, _super);
    function ForEachOutPatternElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForEachOutPatternElementContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ATLParser.IDENTIFIER);
        }
        else {
            return this.getToken(ATLParser.IDENTIFIER, i);
        }
    };
    ForEachOutPatternElementContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    ForEachOutPatternElementContext.prototype.iterator = function () {
        return this.getRuleContext(0, IteratorContext);
    };
    ForEachOutPatternElementContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    ForEachOutPatternElementContext.prototype.binding = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BindingContext);
        }
        else {
            return this.getRuleContext(i, BindingContext);
        }
    };
    Object.defineProperty(ForEachOutPatternElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_forEachOutPatternElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForEachOutPatternElementContext.prototype.enterRule = function (listener) {
        if (listener.enterForEachOutPatternElement) {
            listener.enterForEachOutPatternElement(this);
        }
    };
    // @Override
    ForEachOutPatternElementContext.prototype.exitRule = function (listener) {
        if (listener.exitForEachOutPatternElement) {
            listener.exitForEachOutPatternElement(this);
        }
    };
    // @Override
    ForEachOutPatternElementContext.prototype.accept = function (visitor) {
        if (visitor.visitForEachOutPatternElement) {
            return visitor.visitForEachOutPatternElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForEachOutPatternElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForEachOutPatternElementContext = ForEachOutPatternElementContext;
var BindingContext = /** @class */ (function (_super) {
    __extends(BindingContext, _super);
    function BindingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BindingContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    BindingContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(BindingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_binding; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BindingContext.prototype.enterRule = function (listener) {
        if (listener.enterBinding) {
            listener.enterBinding(this);
        }
    };
    // @Override
    BindingContext.prototype.exitRule = function (listener) {
        if (listener.exitBinding) {
            listener.exitBinding(this);
        }
    };
    // @Override
    BindingContext.prototype.accept = function (visitor) {
        if (visitor.visitBinding) {
            return visitor.visitBinding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BindingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BindingContext = BindingContext;
var ActionBlockContext = /** @class */ (function (_super) {
    __extends(ActionBlockContext, _super);
    function ActionBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActionBlockContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(ActionBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_actionBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActionBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterActionBlock) {
            listener.enterActionBlock(this);
        }
    };
    // @Override
    ActionBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitActionBlock) {
            listener.exitActionBlock(this);
        }
    };
    // @Override
    ActionBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitActionBlock) {
            return visitor.visitActionBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActionBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActionBlockContext = ActionBlockContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.ifStat = function () {
        return this.tryGetRuleContext(0, IfStatContext);
    };
    StatementContext.prototype.expressionStat = function () {
        return this.tryGetRuleContext(0, ExpressionStatContext);
    };
    StatementContext.prototype.bindingStat = function () {
        return this.tryGetRuleContext(0, BindingStatContext);
    };
    StatementContext.prototype.forStat = function () {
        return this.tryGetRuleContext(0, ForStatContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementContext = StatementContext;
var BindingStatContext = /** @class */ (function (_super) {
    __extends(BindingStatContext, _super);
    function BindingStatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BindingStatContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(BindingStatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_bindingStat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BindingStatContext.prototype.enterRule = function (listener) {
        if (listener.enterBindingStat) {
            listener.enterBindingStat(this);
        }
    };
    // @Override
    BindingStatContext.prototype.exitRule = function (listener) {
        if (listener.exitBindingStat) {
            listener.exitBindingStat(this);
        }
    };
    // @Override
    BindingStatContext.prototype.accept = function (visitor) {
        if (visitor.visitBindingStat) {
            return visitor.visitBindingStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BindingStatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BindingStatContext = BindingStatContext;
var ExpressionStatContext = /** @class */ (function (_super) {
    __extends(ExpressionStatContext, _super);
    function ExpressionStatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(ExpressionStatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_expressionStat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionStatContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionStat) {
            listener.enterExpressionStat(this);
        }
    };
    // @Override
    ExpressionStatContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionStat) {
            listener.exitExpressionStat(this);
        }
    };
    // @Override
    ExpressionStatContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionStat) {
            return visitor.visitExpressionStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionStatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionStatContext = ExpressionStatContext;
var IfStatContext = /** @class */ (function (_super) {
    __extends(IfStatContext, _super);
    function IfStatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    IfStatContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(IfStatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_ifStat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStatContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStat) {
            listener.enterIfStat(this);
        }
    };
    // @Override
    IfStatContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStat) {
            listener.exitIfStat(this);
        }
    };
    // @Override
    IfStatContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStat) {
            return visitor.visitIfStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStatContext = IfStatContext;
var ForStatContext = /** @class */ (function (_super) {
    __extends(ForStatContext, _super);
    function ForStatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForStatContext.prototype.iterator = function () {
        return this.getRuleContext(0, IteratorContext);
    };
    ForStatContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    ForStatContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(ForStatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_forStat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForStatContext.prototype.enterRule = function (listener) {
        if (listener.enterForStat) {
            listener.enterForStat(this);
        }
    };
    // @Override
    ForStatContext.prototype.exitRule = function (listener) {
        if (listener.exitForStat) {
            listener.exitForStat(this);
        }
    };
    // @Override
    ForStatContext.prototype.accept = function (visitor) {
        if (visitor.visitForStat) {
            return visitor.visitForStat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForStatContext = ForStatContext;
var OclModelContext = /** @class */ (function (_super) {
    __extends(OclModelContext, _super);
    function OclModelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OclModelContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ATLParser.IDENTIFIER);
        }
        else {
            return this.getToken(ATLParser.IDENTIFIER, i);
        }
    };
    Object.defineProperty(OclModelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclModel; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclModelContext.prototype.enterRule = function (listener) {
        if (listener.enterOclModel) {
            listener.enterOclModel(this);
        }
    };
    // @Override
    OclModelContext.prototype.exitRule = function (listener) {
        if (listener.exitOclModel) {
            listener.exitOclModel(this);
        }
    };
    // @Override
    OclModelContext.prototype.accept = function (visitor) {
        if (visitor.visitOclModel) {
            return visitor.visitOclModel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclModelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclModelContext = OclModelContext;
var OclModelElementContext = /** @class */ (function (_super) {
    __extends(OclModelElementContext, _super);
    function OclModelElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OclModelElementContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ATLParser.IDENTIFIER);
        }
        else {
            return this.getToken(ATLParser.IDENTIFIER, i);
        }
    };
    OclModelElementContext.prototype.STRING = function () { return this.tryGetToken(ATLParser.STRING, 0); };
    Object.defineProperty(OclModelElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclModelElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclModelElementContext.prototype.enterRule = function (listener) {
        if (listener.enterOclModelElement) {
            listener.enterOclModelElement(this);
        }
    };
    // @Override
    OclModelElementContext.prototype.exitRule = function (listener) {
        if (listener.exitOclModelElement) {
            listener.exitOclModelElement(this);
        }
    };
    // @Override
    OclModelElementContext.prototype.accept = function (visitor) {
        if (visitor.visitOclModelElement) {
            return visitor.visitOclModelElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclModelElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclModelElementContext = OclModelElementContext;
var OclExpressionContext = /** @class */ (function (_super) {
    __extends(OclExpressionContext, _super);
    function OclExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OclExpressionContext.prototype.priority_5 = function () {
        return this.tryGetRuleContext(0, Priority_5Context);
    };
    OclExpressionContext.prototype.letExp = function () {
        return this.tryGetRuleContext(0, LetExpContext);
    };
    Object.defineProperty(OclExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterOclExpression) {
            listener.enterOclExpression(this);
        }
    };
    // @Override
    OclExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitOclExpression) {
            listener.exitOclExpression(this);
        }
    };
    // @Override
    OclExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitOclExpression) {
            return visitor.visitOclExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclExpressionContext = OclExpressionContext;
var IteratorExpContext = /** @class */ (function (_super) {
    __extends(IteratorExpContext, _super);
    function IteratorExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IteratorExpContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    IteratorExpContext.prototype.iterator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IteratorContext);
        }
        else {
            return this.getRuleContext(i, IteratorContext);
        }
    };
    IteratorExpContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(IteratorExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_iteratorExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IteratorExpContext.prototype.enterRule = function (listener) {
        if (listener.enterIteratorExp) {
            listener.enterIteratorExp(this);
        }
    };
    // @Override
    IteratorExpContext.prototype.exitRule = function (listener) {
        if (listener.exitIteratorExp) {
            listener.exitIteratorExp(this);
        }
    };
    // @Override
    IteratorExpContext.prototype.accept = function (visitor) {
        if (visitor.visitIteratorExp) {
            return visitor.visitIteratorExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IteratorExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IteratorExpContext = IteratorExpContext;
var IterateExpContext = /** @class */ (function (_super) {
    __extends(IterateExpContext, _super);
    function IterateExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IterateExpContext.prototype.iterator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IteratorContext);
        }
        else {
            return this.getRuleContext(i, IteratorContext);
        }
    };
    IterateExpContext.prototype.variableDeclaration = function () {
        return this.getRuleContext(0, VariableDeclarationContext);
    };
    IterateExpContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(IterateExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_iterateExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IterateExpContext.prototype.enterRule = function (listener) {
        if (listener.enterIterateExp) {
            listener.enterIterateExp(this);
        }
    };
    // @Override
    IterateExpContext.prototype.exitRule = function (listener) {
        if (listener.exitIterateExp) {
            listener.exitIterateExp(this);
        }
    };
    // @Override
    IterateExpContext.prototype.accept = function (visitor) {
        if (visitor.visitIterateExp) {
            return visitor.visitIterateExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IterateExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IterateExpContext = IterateExpContext;
var CollectionOperationCallExpContext = /** @class */ (function (_super) {
    __extends(CollectionOperationCallExpContext, _super);
    function CollectionOperationCallExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CollectionOperationCallExpContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    CollectionOperationCallExpContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(CollectionOperationCallExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_collectionOperationCallExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CollectionOperationCallExpContext.prototype.enterRule = function (listener) {
        if (listener.enterCollectionOperationCallExp) {
            listener.enterCollectionOperationCallExp(this);
        }
    };
    // @Override
    CollectionOperationCallExpContext.prototype.exitRule = function (listener) {
        if (listener.exitCollectionOperationCallExp) {
            listener.exitCollectionOperationCallExp(this);
        }
    };
    // @Override
    CollectionOperationCallExpContext.prototype.accept = function (visitor) {
        if (visitor.visitCollectionOperationCallExp) {
            return visitor.visitCollectionOperationCallExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CollectionOperationCallExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CollectionOperationCallExpContext = CollectionOperationCallExpContext;
var OperationCallExpContext = /** @class */ (function (_super) {
    __extends(OperationCallExpContext, _super);
    function OperationCallExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperationCallExpContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    OperationCallExpContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(OperationCallExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_operationCallExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperationCallExpContext.prototype.enterRule = function (listener) {
        if (listener.enterOperationCallExp) {
            listener.enterOperationCallExp(this);
        }
    };
    // @Override
    OperationCallExpContext.prototype.exitRule = function (listener) {
        if (listener.exitOperationCallExp) {
            listener.exitOperationCallExp(this);
        }
    };
    // @Override
    OperationCallExpContext.prototype.accept = function (visitor) {
        if (visitor.visitOperationCallExp) {
            return visitor.visitOperationCallExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperationCallExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperationCallExpContext = OperationCallExpContext;
var NavigationOrAttributeCallExpContext = /** @class */ (function (_super) {
    __extends(NavigationOrAttributeCallExpContext, _super);
    function NavigationOrAttributeCallExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NavigationOrAttributeCallExpContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    Object.defineProperty(NavigationOrAttributeCallExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_navigationOrAttributeCallExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NavigationOrAttributeCallExpContext.prototype.enterRule = function (listener) {
        if (listener.enterNavigationOrAttributeCallExp) {
            listener.enterNavigationOrAttributeCallExp(this);
        }
    };
    // @Override
    NavigationOrAttributeCallExpContext.prototype.exitRule = function (listener) {
        if (listener.exitNavigationOrAttributeCallExp) {
            listener.exitNavigationOrAttributeCallExp(this);
        }
    };
    // @Override
    NavigationOrAttributeCallExpContext.prototype.accept = function (visitor) {
        if (visitor.visitNavigationOrAttributeCallExp) {
            return visitor.visitNavigationOrAttributeCallExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NavigationOrAttributeCallExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NavigationOrAttributeCallExpContext = NavigationOrAttributeCallExpContext;
var IteratorContext = /** @class */ (function (_super) {
    __extends(IteratorContext, _super);
    function IteratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IteratorContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    Object.defineProperty(IteratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_iterator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IteratorContext.prototype.enterRule = function (listener) {
        if (listener.enterIterator) {
            listener.enterIterator(this);
        }
    };
    // @Override
    IteratorContext.prototype.exitRule = function (listener) {
        if (listener.exitIterator) {
            listener.exitIterator(this);
        }
    };
    // @Override
    IteratorContext.prototype.accept = function (visitor) {
        if (visitor.visitIterator) {
            return visitor.visitIterator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IteratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IteratorContext = IteratorContext;
var OclUndefinedExpContext = /** @class */ (function (_super) {
    __extends(OclUndefinedExpContext, _super);
    function OclUndefinedExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OclUndefinedExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclUndefinedExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclUndefinedExpContext.prototype.enterRule = function (listener) {
        if (listener.enterOclUndefinedExp) {
            listener.enterOclUndefinedExp(this);
        }
    };
    // @Override
    OclUndefinedExpContext.prototype.exitRule = function (listener) {
        if (listener.exitOclUndefinedExp) {
            listener.exitOclUndefinedExp(this);
        }
    };
    // @Override
    OclUndefinedExpContext.prototype.accept = function (visitor) {
        if (visitor.visitOclUndefinedExp) {
            return visitor.visitOclUndefinedExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclUndefinedExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclUndefinedExpContext = OclUndefinedExpContext;
var PrimitiveExpContext = /** @class */ (function (_super) {
    __extends(PrimitiveExpContext, _super);
    function PrimitiveExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveExpContext.prototype.numericExp = function () {
        return this.tryGetRuleContext(0, NumericExpContext);
    };
    PrimitiveExpContext.prototype.booleanExp = function () {
        return this.tryGetRuleContext(0, BooleanExpContext);
    };
    PrimitiveExpContext.prototype.stringExp = function () {
        return this.tryGetRuleContext(0, StringExpContext);
    };
    Object.defineProperty(PrimitiveExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_primitiveExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimitiveExpContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimitiveExp) {
            listener.enterPrimitiveExp(this);
        }
    };
    // @Override
    PrimitiveExpContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimitiveExp) {
            listener.exitPrimitiveExp(this);
        }
    };
    // @Override
    PrimitiveExpContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimitiveExp) {
            return visitor.visitPrimitiveExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimitiveExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimitiveExpContext = PrimitiveExpContext;
var NumericExpContext = /** @class */ (function (_super) {
    __extends(NumericExpContext, _super);
    function NumericExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericExpContext.prototype.integerExp = function () {
        return this.tryGetRuleContext(0, IntegerExpContext);
    };
    NumericExpContext.prototype.realExp = function () {
        return this.tryGetRuleContext(0, RealExpContext);
    };
    Object.defineProperty(NumericExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_numericExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericExpContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericExp) {
            listener.enterNumericExp(this);
        }
    };
    // @Override
    NumericExpContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericExp) {
            listener.exitNumericExp(this);
        }
    };
    // @Override
    NumericExpContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericExp) {
            return visitor.visitNumericExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericExpContext = NumericExpContext;
var BooleanExpContext = /** @class */ (function (_super) {
    __extends(BooleanExpContext, _super);
    function BooleanExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BooleanExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_booleanExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BooleanExpContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanExp) {
            listener.enterBooleanExp(this);
        }
    };
    // @Override
    BooleanExpContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanExp) {
            listener.exitBooleanExp(this);
        }
    };
    // @Override
    BooleanExpContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanExp) {
            return visitor.visitBooleanExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BooleanExpContext = BooleanExpContext;
var IntegerExpContext = /** @class */ (function (_super) {
    __extends(IntegerExpContext, _super);
    function IntegerExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerExpContext.prototype.INTEGER = function () { return this.getToken(ATLParser.INTEGER, 0); };
    Object.defineProperty(IntegerExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_integerExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerExpContext.prototype.enterRule = function (listener) {
        if (listener.enterIntegerExp) {
            listener.enterIntegerExp(this);
        }
    };
    // @Override
    IntegerExpContext.prototype.exitRule = function (listener) {
        if (listener.exitIntegerExp) {
            listener.exitIntegerExp(this);
        }
    };
    // @Override
    IntegerExpContext.prototype.accept = function (visitor) {
        if (visitor.visitIntegerExp) {
            return visitor.visitIntegerExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerExpContext = IntegerExpContext;
var RealExpContext = /** @class */ (function (_super) {
    __extends(RealExpContext, _super);
    function RealExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RealExpContext.prototype.FLOAT = function () { return this.getToken(ATLParser.FLOAT, 0); };
    Object.defineProperty(RealExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_realExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RealExpContext.prototype.enterRule = function (listener) {
        if (listener.enterRealExp) {
            listener.enterRealExp(this);
        }
    };
    // @Override
    RealExpContext.prototype.exitRule = function (listener) {
        if (listener.exitRealExp) {
            listener.exitRealExp(this);
        }
    };
    // @Override
    RealExpContext.prototype.accept = function (visitor) {
        if (visitor.visitRealExp) {
            return visitor.visitRealExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RealExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RealExpContext = RealExpContext;
var StringExpContext = /** @class */ (function (_super) {
    __extends(StringExpContext, _super);
    function StringExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringExpContext.prototype.STRING = function () { return this.getToken(ATLParser.STRING, 0); };
    Object.defineProperty(StringExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_stringExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringExpContext.prototype.enterRule = function (listener) {
        if (listener.enterStringExp) {
            listener.enterStringExp(this);
        }
    };
    // @Override
    StringExpContext.prototype.exitRule = function (listener) {
        if (listener.exitStringExp) {
            listener.exitStringExp(this);
        }
    };
    // @Override
    StringExpContext.prototype.accept = function (visitor) {
        if (visitor.visitStringExp) {
            return visitor.visitStringExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringExpContext = StringExpContext;
var IfExpContext = /** @class */ (function (_super) {
    __extends(IfExpContext, _super);
    function IfExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfExpContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(IfExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_ifExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfExpContext.prototype.enterRule = function (listener) {
        if (listener.enterIfExp) {
            listener.enterIfExp(this);
        }
    };
    // @Override
    IfExpContext.prototype.exitRule = function (listener) {
        if (listener.exitIfExp) {
            listener.exitIfExp(this);
        }
    };
    // @Override
    IfExpContext.prototype.accept = function (visitor) {
        if (visitor.visitIfExp) {
            return visitor.visitIfExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfExpContext = IfExpContext;
var VariableExpContext = /** @class */ (function (_super) {
    __extends(VariableExpContext, _super);
    function VariableExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableExpContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    Object.defineProperty(VariableExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_variableExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableExpContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableExp) {
            listener.enterVariableExp(this);
        }
    };
    // @Override
    VariableExpContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableExp) {
            listener.exitVariableExp(this);
        }
    };
    // @Override
    VariableExpContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableExp) {
            return visitor.visitVariableExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableExpContext = VariableExpContext;
var SuperExpContext = /** @class */ (function (_super) {
    __extends(SuperExpContext, _super);
    function SuperExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SuperExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_superExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SuperExpContext.prototype.enterRule = function (listener) {
        if (listener.enterSuperExp) {
            listener.enterSuperExp(this);
        }
    };
    // @Override
    SuperExpContext.prototype.exitRule = function (listener) {
        if (listener.exitSuperExp) {
            listener.exitSuperExp(this);
        }
    };
    // @Override
    SuperExpContext.prototype.accept = function (visitor) {
        if (visitor.visitSuperExp) {
            return visitor.visitSuperExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SuperExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SuperExpContext = SuperExpContext;
var LetExpContext = /** @class */ (function (_super) {
    __extends(LetExpContext, _super);
    function LetExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LetExpContext.prototype.variableDeclaration = function () {
        return this.getRuleContext(0, VariableDeclarationContext);
    };
    LetExpContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(LetExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_letExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LetExpContext.prototype.enterRule = function (listener) {
        if (listener.enterLetExp) {
            listener.enterLetExp(this);
        }
    };
    // @Override
    LetExpContext.prototype.exitRule = function (listener) {
        if (listener.exitLetExp) {
            listener.exitLetExp(this);
        }
    };
    // @Override
    LetExpContext.prototype.accept = function (visitor) {
        if (visitor.visitLetExp) {
            return visitor.visitLetExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LetExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LetExpContext = LetExpContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    VariableDeclarationContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    VariableDeclarationContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_variableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationContext = VariableDeclarationContext;
var EnumLiteralExpContext = /** @class */ (function (_super) {
    __extends(EnumLiteralExpContext, _super);
    function EnumLiteralExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumLiteralExpContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    Object.defineProperty(EnumLiteralExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_enumLiteralExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumLiteralExpContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumLiteralExp) {
            listener.enterEnumLiteralExp(this);
        }
    };
    // @Override
    EnumLiteralExpContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumLiteralExp) {
            listener.exitEnumLiteralExp(this);
        }
    };
    // @Override
    EnumLiteralExpContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumLiteralExp) {
            return visitor.visitEnumLiteralExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumLiteralExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumLiteralExpContext = EnumLiteralExpContext;
var CollectionExpContext = /** @class */ (function (_super) {
    __extends(CollectionExpContext, _super);
    function CollectionExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CollectionExpContext.prototype.bagExp = function () {
        return this.tryGetRuleContext(0, BagExpContext);
    };
    CollectionExpContext.prototype.setExp = function () {
        return this.tryGetRuleContext(0, SetExpContext);
    };
    CollectionExpContext.prototype.orderedSetExp = function () {
        return this.tryGetRuleContext(0, OrderedSetExpContext);
    };
    CollectionExpContext.prototype.sequenceExp = function () {
        return this.tryGetRuleContext(0, SequenceExpContext);
    };
    Object.defineProperty(CollectionExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_collectionExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CollectionExpContext.prototype.enterRule = function (listener) {
        if (listener.enterCollectionExp) {
            listener.enterCollectionExp(this);
        }
    };
    // @Override
    CollectionExpContext.prototype.exitRule = function (listener) {
        if (listener.exitCollectionExp) {
            listener.exitCollectionExp(this);
        }
    };
    // @Override
    CollectionExpContext.prototype.accept = function (visitor) {
        if (visitor.visitCollectionExp) {
            return visitor.visitCollectionExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CollectionExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CollectionExpContext = CollectionExpContext;
var BagExpContext = /** @class */ (function (_super) {
    __extends(BagExpContext, _super);
    function BagExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BagExpContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(BagExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_bagExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BagExpContext.prototype.enterRule = function (listener) {
        if (listener.enterBagExp) {
            listener.enterBagExp(this);
        }
    };
    // @Override
    BagExpContext.prototype.exitRule = function (listener) {
        if (listener.exitBagExp) {
            listener.exitBagExp(this);
        }
    };
    // @Override
    BagExpContext.prototype.accept = function (visitor) {
        if (visitor.visitBagExp) {
            return visitor.visitBagExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BagExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BagExpContext = BagExpContext;
var SetExpContext = /** @class */ (function (_super) {
    __extends(SetExpContext, _super);
    function SetExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetExpContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(SetExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_setExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetExpContext.prototype.enterRule = function (listener) {
        if (listener.enterSetExp) {
            listener.enterSetExp(this);
        }
    };
    // @Override
    SetExpContext.prototype.exitRule = function (listener) {
        if (listener.exitSetExp) {
            listener.exitSetExp(this);
        }
    };
    // @Override
    SetExpContext.prototype.accept = function (visitor) {
        if (visitor.visitSetExp) {
            return visitor.visitSetExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetExpContext = SetExpContext;
var OrderedSetExpContext = /** @class */ (function (_super) {
    __extends(OrderedSetExpContext, _super);
    function OrderedSetExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrderedSetExpContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(OrderedSetExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_orderedSetExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrderedSetExpContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderedSetExp) {
            listener.enterOrderedSetExp(this);
        }
    };
    // @Override
    OrderedSetExpContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderedSetExp) {
            listener.exitOrderedSetExp(this);
        }
    };
    // @Override
    OrderedSetExpContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderedSetExp) {
            return visitor.visitOrderedSetExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrderedSetExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrderedSetExpContext = OrderedSetExpContext;
var SequenceExpContext = /** @class */ (function (_super) {
    __extends(SequenceExpContext, _super);
    function SequenceExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequenceExpContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(SequenceExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_sequenceExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequenceExpContext.prototype.enterRule = function (listener) {
        if (listener.enterSequenceExp) {
            listener.enterSequenceExp(this);
        }
    };
    // @Override
    SequenceExpContext.prototype.exitRule = function (listener) {
        if (listener.exitSequenceExp) {
            listener.exitSequenceExp(this);
        }
    };
    // @Override
    SequenceExpContext.prototype.accept = function (visitor) {
        if (visitor.visitSequenceExp) {
            return visitor.visitSequenceExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequenceExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequenceExpContext = SequenceExpContext;
var MapExpContext = /** @class */ (function (_super) {
    __extends(MapExpContext, _super);
    function MapExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapExpContext.prototype.mapElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MapElementContext);
        }
        else {
            return this.getRuleContext(i, MapElementContext);
        }
    };
    Object.defineProperty(MapExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_mapExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapExpContext.prototype.enterRule = function (listener) {
        if (listener.enterMapExp) {
            listener.enterMapExp(this);
        }
    };
    // @Override
    MapExpContext.prototype.exitRule = function (listener) {
        if (listener.exitMapExp) {
            listener.exitMapExp(this);
        }
    };
    // @Override
    MapExpContext.prototype.accept = function (visitor) {
        if (visitor.visitMapExp) {
            return visitor.visitMapExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapExpContext = MapExpContext;
var MapElementContext = /** @class */ (function (_super) {
    __extends(MapElementContext, _super);
    function MapElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapElementContext.prototype.oclExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclExpressionContext);
        }
        else {
            return this.getRuleContext(i, OclExpressionContext);
        }
    };
    Object.defineProperty(MapElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_mapElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapElementContext.prototype.enterRule = function (listener) {
        if (listener.enterMapElement) {
            listener.enterMapElement(this);
        }
    };
    // @Override
    MapElementContext.prototype.exitRule = function (listener) {
        if (listener.exitMapElement) {
            listener.exitMapElement(this);
        }
    };
    // @Override
    MapElementContext.prototype.accept = function (visitor) {
        if (visitor.visitMapElement) {
            return visitor.visitMapElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapElementContext = MapElementContext;
var TupleExpContext = /** @class */ (function (_super) {
    __extends(TupleExpContext, _super);
    function TupleExpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TupleExpContext.prototype.tuplePart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TuplePartContext);
        }
        else {
            return this.getRuleContext(i, TuplePartContext);
        }
    };
    Object.defineProperty(TupleExpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_tupleExp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TupleExpContext.prototype.enterRule = function (listener) {
        if (listener.enterTupleExp) {
            listener.enterTupleExp(this);
        }
    };
    // @Override
    TupleExpContext.prototype.exitRule = function (listener) {
        if (listener.exitTupleExp) {
            listener.exitTupleExp(this);
        }
    };
    // @Override
    TupleExpContext.prototype.accept = function (visitor) {
        if (visitor.visitTupleExp) {
            return visitor.visitTupleExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TupleExpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TupleExpContext = TupleExpContext;
var TuplePartContext = /** @class */ (function (_super) {
    __extends(TuplePartContext, _super);
    function TuplePartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TuplePartContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    TuplePartContext.prototype.oclExpression = function () {
        return this.getRuleContext(0, OclExpressionContext);
    };
    TuplePartContext.prototype.oclType = function () {
        return this.tryGetRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(TuplePartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_tuplePart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TuplePartContext.prototype.enterRule = function (listener) {
        if (listener.enterTuplePart) {
            listener.enterTuplePart(this);
        }
    };
    // @Override
    TuplePartContext.prototype.exitRule = function (listener) {
        if (listener.exitTuplePart) {
            listener.exitTuplePart(this);
        }
    };
    // @Override
    TuplePartContext.prototype.accept = function (visitor) {
        if (visitor.visitTuplePart) {
            return visitor.visitTuplePart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TuplePartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TuplePartContext = TuplePartContext;
var OclTypeContext = /** @class */ (function (_super) {
    __extends(OclTypeContext, _super);
    function OclTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OclTypeContext.prototype.oclModelElement = function () {
        return this.tryGetRuleContext(0, OclModelElementContext);
    };
    OclTypeContext.prototype.oclAnyType = function () {
        return this.tryGetRuleContext(0, OclAnyTypeContext);
    };
    OclTypeContext.prototype.tupleType = function () {
        return this.tryGetRuleContext(0, TupleTypeContext);
    };
    OclTypeContext.prototype.mapType = function () {
        return this.tryGetRuleContext(0, MapTypeContext);
    };
    OclTypeContext.prototype.primitive = function () {
        return this.tryGetRuleContext(0, PrimitiveContext);
    };
    OclTypeContext.prototype.collectionType = function () {
        return this.tryGetRuleContext(0, CollectionTypeContext);
    };
    OclTypeContext.prototype.oclType_abstractContents = function () {
        return this.tryGetRuleContext(0, OclType_abstractContentsContext);
    };
    Object.defineProperty(OclTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterOclType) {
            listener.enterOclType(this);
        }
    };
    // @Override
    OclTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitOclType) {
            listener.exitOclType(this);
        }
    };
    // @Override
    OclTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitOclType) {
            return visitor.visitOclType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclTypeContext = OclTypeContext;
var OclAnyTypeContext = /** @class */ (function (_super) {
    __extends(OclAnyTypeContext, _super);
    function OclAnyTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OclAnyTypeContext.prototype.oclAnyType_abstractContents = function () {
        return this.getRuleContext(0, OclAnyType_abstractContentsContext);
    };
    Object.defineProperty(OclAnyTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclAnyType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclAnyTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterOclAnyType) {
            listener.enterOclAnyType(this);
        }
    };
    // @Override
    OclAnyTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitOclAnyType) {
            listener.exitOclAnyType(this);
        }
    };
    // @Override
    OclAnyTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitOclAnyType) {
            return visitor.visitOclAnyType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclAnyTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclAnyTypeContext = OclAnyTypeContext;
var TupleTypeContext = /** @class */ (function (_super) {
    __extends(TupleTypeContext, _super);
    function TupleTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TupleTypeContext.prototype.tupleTypeAttribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TupleTypeAttributeContext);
        }
        else {
            return this.getRuleContext(i, TupleTypeAttributeContext);
        }
    };
    Object.defineProperty(TupleTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_tupleType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TupleTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterTupleType) {
            listener.enterTupleType(this);
        }
    };
    // @Override
    TupleTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitTupleType) {
            listener.exitTupleType(this);
        }
    };
    // @Override
    TupleTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitTupleType) {
            return visitor.visitTupleType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TupleTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TupleTypeContext = TupleTypeContext;
var TupleTypeAttributeContext = /** @class */ (function (_super) {
    __extends(TupleTypeAttributeContext, _super);
    function TupleTypeAttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TupleTypeAttributeContext.prototype.IDENTIFIER = function () { return this.getToken(ATLParser.IDENTIFIER, 0); };
    TupleTypeAttributeContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(TupleTypeAttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_tupleTypeAttribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TupleTypeAttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterTupleTypeAttribute) {
            listener.enterTupleTypeAttribute(this);
        }
    };
    // @Override
    TupleTypeAttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitTupleTypeAttribute) {
            listener.exitTupleTypeAttribute(this);
        }
    };
    // @Override
    TupleTypeAttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitTupleTypeAttribute) {
            return visitor.visitTupleTypeAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TupleTypeAttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TupleTypeAttributeContext = TupleTypeAttributeContext;
var MapTypeContext = /** @class */ (function (_super) {
    __extends(MapTypeContext, _super);
    function MapTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapTypeContext.prototype.oclType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OclTypeContext);
        }
        else {
            return this.getRuleContext(i, OclTypeContext);
        }
    };
    Object.defineProperty(MapTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_mapType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterMapType) {
            listener.enterMapType(this);
        }
    };
    // @Override
    MapTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitMapType) {
            listener.exitMapType(this);
        }
    };
    // @Override
    MapTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitMapType) {
            return visitor.visitMapType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapTypeContext = MapTypeContext;
var PrimitiveContext = /** @class */ (function (_super) {
    __extends(PrimitiveContext, _super);
    function PrimitiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveContext.prototype.numericType = function () {
        return this.tryGetRuleContext(0, NumericTypeContext);
    };
    PrimitiveContext.prototype.booleanType = function () {
        return this.tryGetRuleContext(0, BooleanTypeContext);
    };
    PrimitiveContext.prototype.stringType = function () {
        return this.tryGetRuleContext(0, StringTypeContext);
    };
    Object.defineProperty(PrimitiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_primitive; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimitiveContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimitive) {
            listener.enterPrimitive(this);
        }
    };
    // @Override
    PrimitiveContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimitive) {
            listener.exitPrimitive(this);
        }
    };
    // @Override
    PrimitiveContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimitive) {
            return visitor.visitPrimitive(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimitiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimitiveContext = PrimitiveContext;
var NumericTypeContext = /** @class */ (function (_super) {
    __extends(NumericTypeContext, _super);
    function NumericTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericTypeContext.prototype.integerType = function () {
        return this.tryGetRuleContext(0, IntegerTypeContext);
    };
    NumericTypeContext.prototype.realType = function () {
        return this.tryGetRuleContext(0, RealTypeContext);
    };
    Object.defineProperty(NumericTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_numericType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericType) {
            listener.enterNumericType(this);
        }
    };
    // @Override
    NumericTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericType) {
            listener.exitNumericType(this);
        }
    };
    // @Override
    NumericTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericType) {
            return visitor.visitNumericType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericTypeContext = NumericTypeContext;
var IntegerTypeContext = /** @class */ (function (_super) {
    __extends(IntegerTypeContext, _super);
    function IntegerTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(IntegerTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_integerType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterIntegerType) {
            listener.enterIntegerType(this);
        }
    };
    // @Override
    IntegerTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitIntegerType) {
            listener.exitIntegerType(this);
        }
    };
    // @Override
    IntegerTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitIntegerType) {
            return visitor.visitIntegerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerTypeContext = IntegerTypeContext;
var RealTypeContext = /** @class */ (function (_super) {
    __extends(RealTypeContext, _super);
    function RealTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RealTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_realType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RealTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterRealType) {
            listener.enterRealType(this);
        }
    };
    // @Override
    RealTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitRealType) {
            listener.exitRealType(this);
        }
    };
    // @Override
    RealTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitRealType) {
            return visitor.visitRealType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RealTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RealTypeContext = RealTypeContext;
var BooleanTypeContext = /** @class */ (function (_super) {
    __extends(BooleanTypeContext, _super);
    function BooleanTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BooleanTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_booleanType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BooleanTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanType) {
            listener.enterBooleanType(this);
        }
    };
    // @Override
    BooleanTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanType) {
            listener.exitBooleanType(this);
        }
    };
    // @Override
    BooleanTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanType) {
            return visitor.visitBooleanType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BooleanTypeContext = BooleanTypeContext;
var StringTypeContext = /** @class */ (function (_super) {
    __extends(StringTypeContext, _super);
    function StringTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StringTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_stringType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterStringType) {
            listener.enterStringType(this);
        }
    };
    // @Override
    StringTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitStringType) {
            listener.exitStringType(this);
        }
    };
    // @Override
    StringTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitStringType) {
            return visitor.visitStringType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringTypeContext = StringTypeContext;
var CollectionTypeContext = /** @class */ (function (_super) {
    __extends(CollectionTypeContext, _super);
    function CollectionTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CollectionTypeContext.prototype.bagType = function () {
        return this.tryGetRuleContext(0, BagTypeContext);
    };
    CollectionTypeContext.prototype.setType = function () {
        return this.tryGetRuleContext(0, SetTypeContext);
    };
    CollectionTypeContext.prototype.orderedSetType = function () {
        return this.tryGetRuleContext(0, OrderedSetTypeContext);
    };
    CollectionTypeContext.prototype.sequenceType = function () {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    };
    CollectionTypeContext.prototype.collectionType_abstractContents = function () {
        return this.tryGetRuleContext(0, CollectionType_abstractContentsContext);
    };
    Object.defineProperty(CollectionTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_collectionType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CollectionTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterCollectionType) {
            listener.enterCollectionType(this);
        }
    };
    // @Override
    CollectionTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitCollectionType) {
            listener.exitCollectionType(this);
        }
    };
    // @Override
    CollectionTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitCollectionType) {
            return visitor.visitCollectionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CollectionTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CollectionTypeContext = CollectionTypeContext;
var BagTypeContext = /** @class */ (function (_super) {
    __extends(BagTypeContext, _super);
    function BagTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BagTypeContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(BagTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_bagType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BagTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBagType) {
            listener.enterBagType(this);
        }
    };
    // @Override
    BagTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBagType) {
            listener.exitBagType(this);
        }
    };
    // @Override
    BagTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBagType) {
            return visitor.visitBagType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BagTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BagTypeContext = BagTypeContext;
var SetTypeContext = /** @class */ (function (_super) {
    __extends(SetTypeContext, _super);
    function SetTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetTypeContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(SetTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_setType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSetType) {
            listener.enterSetType(this);
        }
    };
    // @Override
    SetTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSetType) {
            listener.exitSetType(this);
        }
    };
    // @Override
    SetTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSetType) {
            return visitor.visitSetType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetTypeContext = SetTypeContext;
var OrderedSetTypeContext = /** @class */ (function (_super) {
    __extends(OrderedSetTypeContext, _super);
    function OrderedSetTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrderedSetTypeContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(OrderedSetTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_orderedSetType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrderedSetTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterOrderedSetType) {
            listener.enterOrderedSetType(this);
        }
    };
    // @Override
    OrderedSetTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitOrderedSetType) {
            listener.exitOrderedSetType(this);
        }
    };
    // @Override
    OrderedSetTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitOrderedSetType) {
            return visitor.visitOrderedSetType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrderedSetTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrderedSetTypeContext = OrderedSetTypeContext;
var SequenceTypeContext = /** @class */ (function (_super) {
    __extends(SequenceTypeContext, _super);
    function SequenceTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequenceTypeContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(SequenceTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_sequenceType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequenceTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSequenceType) {
            listener.enterSequenceType(this);
        }
    };
    // @Override
    SequenceTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSequenceType) {
            listener.exitSequenceType(this);
        }
    };
    // @Override
    SequenceTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSequenceType) {
            return visitor.visitSequenceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequenceTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequenceTypeContext = SequenceTypeContext;
var Priority_0Context = /** @class */ (function (_super) {
    __extends(Priority_0Context, _super);
    function Priority_0Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Priority_0Context.prototype.primary_oclExpression = function () {
        return this.getRuleContext(0, Primary_oclExpressionContext);
    };
    Priority_0Context.prototype.operationCallExp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OperationCallExpContext);
        }
        else {
            return this.getRuleContext(i, OperationCallExpContext);
        }
    };
    Priority_0Context.prototype.navigationOrAttributeCallExp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NavigationOrAttributeCallExpContext);
        }
        else {
            return this.getRuleContext(i, NavigationOrAttributeCallExpContext);
        }
    };
    Priority_0Context.prototype.iteratorExp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IteratorExpContext);
        }
        else {
            return this.getRuleContext(i, IteratorExpContext);
        }
    };
    Priority_0Context.prototype.iterateExp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IterateExpContext);
        }
        else {
            return this.getRuleContext(i, IterateExpContext);
        }
    };
    Priority_0Context.prototype.collectionOperationCallExp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CollectionOperationCallExpContext);
        }
        else {
            return this.getRuleContext(i, CollectionOperationCallExpContext);
        }
    };
    Object.defineProperty(Priority_0Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_priority_0; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Priority_0Context.prototype.enterRule = function (listener) {
        if (listener.enterPriority_0) {
            listener.enterPriority_0(this);
        }
    };
    // @Override
    Priority_0Context.prototype.exitRule = function (listener) {
        if (listener.exitPriority_0) {
            listener.exitPriority_0(this);
        }
    };
    // @Override
    Priority_0Context.prototype.accept = function (visitor) {
        if (visitor.visitPriority_0) {
            return visitor.visitPriority_0(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Priority_0Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Priority_0Context = Priority_0Context;
var Priority_1Context = /** @class */ (function (_super) {
    __extends(Priority_1Context, _super);
    function Priority_1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Priority_1Context.prototype.priority_0 = function () {
        return this.getRuleContext(0, Priority_0Context);
    };
    Object.defineProperty(Priority_1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_priority_1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Priority_1Context.prototype.enterRule = function (listener) {
        if (listener.enterPriority_1) {
            listener.enterPriority_1(this);
        }
    };
    // @Override
    Priority_1Context.prototype.exitRule = function (listener) {
        if (listener.exitPriority_1) {
            listener.exitPriority_1(this);
        }
    };
    // @Override
    Priority_1Context.prototype.accept = function (visitor) {
        if (visitor.visitPriority_1) {
            return visitor.visitPriority_1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Priority_1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Priority_1Context = Priority_1Context;
var Priority_2Context = /** @class */ (function (_super) {
    __extends(Priority_2Context, _super);
    function Priority_2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Priority_2Context.prototype.priority_1 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Priority_1Context);
        }
        else {
            return this.getRuleContext(i, Priority_1Context);
        }
    };
    Object.defineProperty(Priority_2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_priority_2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Priority_2Context.prototype.enterRule = function (listener) {
        if (listener.enterPriority_2) {
            listener.enterPriority_2(this);
        }
    };
    // @Override
    Priority_2Context.prototype.exitRule = function (listener) {
        if (listener.exitPriority_2) {
            listener.exitPriority_2(this);
        }
    };
    // @Override
    Priority_2Context.prototype.accept = function (visitor) {
        if (visitor.visitPriority_2) {
            return visitor.visitPriority_2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Priority_2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Priority_2Context = Priority_2Context;
var Priority_3Context = /** @class */ (function (_super) {
    __extends(Priority_3Context, _super);
    function Priority_3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Priority_3Context.prototype.priority_2 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Priority_2Context);
        }
        else {
            return this.getRuleContext(i, Priority_2Context);
        }
    };
    Object.defineProperty(Priority_3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_priority_3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Priority_3Context.prototype.enterRule = function (listener) {
        if (listener.enterPriority_3) {
            listener.enterPriority_3(this);
        }
    };
    // @Override
    Priority_3Context.prototype.exitRule = function (listener) {
        if (listener.exitPriority_3) {
            listener.exitPriority_3(this);
        }
    };
    // @Override
    Priority_3Context.prototype.accept = function (visitor) {
        if (visitor.visitPriority_3) {
            return visitor.visitPriority_3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Priority_3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Priority_3Context = Priority_3Context;
var Priority_4Context = /** @class */ (function (_super) {
    __extends(Priority_4Context, _super);
    function Priority_4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Priority_4Context.prototype.priority_3 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Priority_3Context);
        }
        else {
            return this.getRuleContext(i, Priority_3Context);
        }
    };
    Object.defineProperty(Priority_4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_priority_4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Priority_4Context.prototype.enterRule = function (listener) {
        if (listener.enterPriority_4) {
            listener.enterPriority_4(this);
        }
    };
    // @Override
    Priority_4Context.prototype.exitRule = function (listener) {
        if (listener.exitPriority_4) {
            listener.exitPriority_4(this);
        }
    };
    // @Override
    Priority_4Context.prototype.accept = function (visitor) {
        if (visitor.visitPriority_4) {
            return visitor.visitPriority_4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Priority_4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Priority_4Context = Priority_4Context;
var Priority_5Context = /** @class */ (function (_super) {
    __extends(Priority_5Context, _super);
    function Priority_5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Priority_5Context.prototype.priority_4 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Priority_4Context);
        }
        else {
            return this.getRuleContext(i, Priority_4Context);
        }
    };
    Object.defineProperty(Priority_5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_priority_5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Priority_5Context.prototype.enterRule = function (listener) {
        if (listener.enterPriority_5) {
            listener.enterPriority_5(this);
        }
    };
    // @Override
    Priority_5Context.prototype.exitRule = function (listener) {
        if (listener.exitPriority_5) {
            listener.exitPriority_5(this);
        }
    };
    // @Override
    Priority_5Context.prototype.accept = function (visitor) {
        if (visitor.visitPriority_5) {
            return visitor.visitPriority_5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Priority_5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Priority_5Context = Priority_5Context;
var MatchedRule_abstractContentsContext = /** @class */ (function (_super) {
    __extends(MatchedRule_abstractContentsContext, _super);
    function MatchedRule_abstractContentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MatchedRule_abstractContentsContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(ATLParser.IDENTIFIER);
        }
        else {
            return this.getToken(ATLParser.IDENTIFIER, i);
        }
    };
    MatchedRule_abstractContentsContext.prototype.inPattern = function () {
        return this.getRuleContext(0, InPatternContext);
    };
    MatchedRule_abstractContentsContext.prototype.outPattern = function () {
        return this.tryGetRuleContext(0, OutPatternContext);
    };
    MatchedRule_abstractContentsContext.prototype.actionBlock = function () {
        return this.tryGetRuleContext(0, ActionBlockContext);
    };
    MatchedRule_abstractContentsContext.prototype.ruleVariableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleVariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, RuleVariableDeclarationContext);
        }
    };
    Object.defineProperty(MatchedRule_abstractContentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_matchedRule_abstractContents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MatchedRule_abstractContentsContext.prototype.enterRule = function (listener) {
        if (listener.enterMatchedRule_abstractContents) {
            listener.enterMatchedRule_abstractContents(this);
        }
    };
    // @Override
    MatchedRule_abstractContentsContext.prototype.exitRule = function (listener) {
        if (listener.exitMatchedRule_abstractContents) {
            listener.exitMatchedRule_abstractContents(this);
        }
    };
    // @Override
    MatchedRule_abstractContentsContext.prototype.accept = function (visitor) {
        if (visitor.visitMatchedRule_abstractContents) {
            return visitor.visitMatchedRule_abstractContents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MatchedRule_abstractContentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MatchedRule_abstractContentsContext = MatchedRule_abstractContentsContext;
var OclType_abstractContentsContext = /** @class */ (function (_super) {
    __extends(OclType_abstractContentsContext, _super);
    function OclType_abstractContentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OclType_abstractContentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclType_abstractContents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclType_abstractContentsContext.prototype.enterRule = function (listener) {
        if (listener.enterOclType_abstractContents) {
            listener.enterOclType_abstractContents(this);
        }
    };
    // @Override
    OclType_abstractContentsContext.prototype.exitRule = function (listener) {
        if (listener.exitOclType_abstractContents) {
            listener.exitOclType_abstractContents(this);
        }
    };
    // @Override
    OclType_abstractContentsContext.prototype.accept = function (visitor) {
        if (visitor.visitOclType_abstractContents) {
            return visitor.visitOclType_abstractContents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclType_abstractContentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclType_abstractContentsContext = OclType_abstractContentsContext;
var OclAnyType_abstractContentsContext = /** @class */ (function (_super) {
    __extends(OclAnyType_abstractContentsContext, _super);
    function OclAnyType_abstractContentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OclAnyType_abstractContentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_oclAnyType_abstractContents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OclAnyType_abstractContentsContext.prototype.enterRule = function (listener) {
        if (listener.enterOclAnyType_abstractContents) {
            listener.enterOclAnyType_abstractContents(this);
        }
    };
    // @Override
    OclAnyType_abstractContentsContext.prototype.exitRule = function (listener) {
        if (listener.exitOclAnyType_abstractContents) {
            listener.exitOclAnyType_abstractContents(this);
        }
    };
    // @Override
    OclAnyType_abstractContentsContext.prototype.accept = function (visitor) {
        if (visitor.visitOclAnyType_abstractContents) {
            return visitor.visitOclAnyType_abstractContents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OclAnyType_abstractContentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OclAnyType_abstractContentsContext = OclAnyType_abstractContentsContext;
var CollectionType_abstractContentsContext = /** @class */ (function (_super) {
    __extends(CollectionType_abstractContentsContext, _super);
    function CollectionType_abstractContentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CollectionType_abstractContentsContext.prototype.oclType = function () {
        return this.getRuleContext(0, OclTypeContext);
    };
    Object.defineProperty(CollectionType_abstractContentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_collectionType_abstractContents; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CollectionType_abstractContentsContext.prototype.enterRule = function (listener) {
        if (listener.enterCollectionType_abstractContents) {
            listener.enterCollectionType_abstractContents(this);
        }
    };
    // @Override
    CollectionType_abstractContentsContext.prototype.exitRule = function (listener) {
        if (listener.exitCollectionType_abstractContents) {
            listener.exitCollectionType_abstractContents(this);
        }
    };
    // @Override
    CollectionType_abstractContentsContext.prototype.accept = function (visitor) {
        if (visitor.visitCollectionType_abstractContents) {
            return visitor.visitCollectionType_abstractContents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CollectionType_abstractContentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CollectionType_abstractContentsContext = CollectionType_abstractContentsContext;
var Primary_oclExpressionContext = /** @class */ (function (_super) {
    __extends(Primary_oclExpressionContext, _super);
    function Primary_oclExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Primary_oclExpressionContext.prototype.variableExp = function () {
        return this.tryGetRuleContext(0, VariableExpContext);
    };
    Primary_oclExpressionContext.prototype.oclUndefinedExp = function () {
        return this.tryGetRuleContext(0, OclUndefinedExpContext);
    };
    Primary_oclExpressionContext.prototype.primitiveExp = function () {
        return this.tryGetRuleContext(0, PrimitiveExpContext);
    };
    Primary_oclExpressionContext.prototype.ifExp = function () {
        return this.tryGetRuleContext(0, IfExpContext);
    };
    Primary_oclExpressionContext.prototype.superExp = function () {
        return this.tryGetRuleContext(0, SuperExpContext);
    };
    Primary_oclExpressionContext.prototype.enumLiteralExp = function () {
        return this.tryGetRuleContext(0, EnumLiteralExpContext);
    };
    Primary_oclExpressionContext.prototype.collectionExp = function () {
        return this.tryGetRuleContext(0, CollectionExpContext);
    };
    Primary_oclExpressionContext.prototype.mapExp = function () {
        return this.tryGetRuleContext(0, MapExpContext);
    };
    Primary_oclExpressionContext.prototype.tupleExp = function () {
        return this.tryGetRuleContext(0, TupleExpContext);
    };
    Primary_oclExpressionContext.prototype.oclType = function () {
        return this.tryGetRuleContext(0, OclTypeContext);
    };
    Primary_oclExpressionContext.prototype.oclExpression = function () {
        return this.tryGetRuleContext(0, OclExpressionContext);
    };
    Object.defineProperty(Primary_oclExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ATLParser.RULE_primary_oclExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Primary_oclExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimary_oclExpression) {
            listener.enterPrimary_oclExpression(this);
        }
    };
    // @Override
    Primary_oclExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimary_oclExpression) {
            listener.exitPrimary_oclExpression(this);
        }
    };
    // @Override
    Primary_oclExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimary_oclExpression) {
            return visitor.visitPrimary_oclExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Primary_oclExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Primary_oclExpressionContext = Primary_oclExpressionContext;
