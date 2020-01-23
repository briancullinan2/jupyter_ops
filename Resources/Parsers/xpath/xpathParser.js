"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/xpath/xpath.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var xpathParser = /** @class */ (function (_super) {
    __extends(xpathParser, _super);
    function xpathParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(xpathParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(xpathParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return xpathParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "xpath.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathParser.prototype, "ruleNames", {
        // @Override
        get: function () { return xpathParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathParser.prototype, "serializedATN", {
        // @Override
        get: function () { return xpathParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    xpathParser.prototype.main = function () {
        var _localctx = new MainContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, xpathParser.RULE_main);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this.expr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xpathParser.prototype.locationPath = function () {
        var _localctx = new LocationPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, xpathParser.RULE_locationPath);
        try {
            this.state = 58;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case xpathParser.T__0:
                case xpathParser.NodeType:
                case xpathParser.AxisName:
                case xpathParser.DOT:
                case xpathParser.MUL:
                case xpathParser.DOTDOT:
                case xpathParser.AT:
                case xpathParser.NCName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 56;
                        this.relativeLocationPath();
                    }
                    break;
                case xpathParser.PATHSEP:
                case xpathParser.ABRPATH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 57;
                        this.absoluteLocationPathNoroot();
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
    xpathParser.prototype.absoluteLocationPathNoroot = function () {
        var _localctx = new AbsoluteLocationPathNorootContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, xpathParser.RULE_absoluteLocationPathNoroot);
        try {
            this.state = 64;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case xpathParser.PATHSEP:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 60;
                        this.match(xpathParser.PATHSEP);
                        this.state = 61;
                        this.relativeLocationPath();
                    }
                    break;
                case xpathParser.ABRPATH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 62;
                        this.match(xpathParser.ABRPATH);
                        this.state = 63;
                        this.relativeLocationPath();
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
    xpathParser.prototype.relativeLocationPath = function () {
        var _localctx = new RelativeLocationPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, xpathParser.RULE_relativeLocationPath);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.step();
                this.state = 71;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xpathParser.PATHSEP || _la === xpathParser.ABRPATH) {
                    {
                        {
                            this.state = 67;
                            _la = this._input.LA(1);
                            if (!(_la === xpathParser.PATHSEP || _la === xpathParser.ABRPATH)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 68;
                            this.step();
                        }
                    }
                    this.state = 73;
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
    xpathParser.prototype.step = function () {
        var _localctx = new StepContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, xpathParser.RULE_step);
        var _la;
        try {
            this.state = 83;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case xpathParser.T__0:
                case xpathParser.NodeType:
                case xpathParser.AxisName:
                case xpathParser.MUL:
                case xpathParser.AT:
                case xpathParser.NCName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 74;
                        this.axisSpecifier();
                        this.state = 75;
                        this.nodeTest();
                        this.state = 79;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === xpathParser.LBRAC) {
                            {
                                {
                                    this.state = 76;
                                    this.predicate();
                                }
                            }
                            this.state = 81;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case xpathParser.DOT:
                case xpathParser.DOTDOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 82;
                        this.abbreviatedStep();
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
    xpathParser.prototype.axisSpecifier = function () {
        var _localctx = new AxisSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, xpathParser.RULE_axisSpecifier);
        var _la;
        try {
            this.state = 90;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 85;
                        this.match(xpathParser.AxisName);
                        this.state = 86;
                        this.match(xpathParser.CC);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 88;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === xpathParser.AT) {
                            {
                                this.state = 87;
                                this.match(xpathParser.AT);
                            }
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
    xpathParser.prototype.nodeTest = function () {
        var _localctx = new NodeTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, xpathParser.RULE_nodeTest);
        try {
            this.state = 100;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 92;
                        this.nameTest();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 93;
                        this.match(xpathParser.NodeType);
                        this.state = 94;
                        this.match(xpathParser.LPAR);
                        this.state = 95;
                        this.match(xpathParser.RPAR);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 96;
                        this.match(xpathParser.T__0);
                        this.state = 97;
                        this.match(xpathParser.LPAR);
                        this.state = 98;
                        this.match(xpathParser.Literal);
                        this.state = 99;
                        this.match(xpathParser.RPAR);
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
    xpathParser.prototype.predicate = function () {
        var _localctx = new PredicateContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, xpathParser.RULE_predicate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this.match(xpathParser.LBRAC);
                this.state = 103;
                this.expr();
                this.state = 104;
                this.match(xpathParser.RBRAC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xpathParser.prototype.abbreviatedStep = function () {
        var _localctx = new AbbreviatedStepContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, xpathParser.RULE_abbreviatedStep);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 106;
                _la = this._input.LA(1);
                if (!(_la === xpathParser.DOT || _la === xpathParser.DOTDOT)) {
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
    xpathParser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, xpathParser.RULE_expr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this.orExpr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xpathParser.prototype.primaryExpr = function () {
        var _localctx = new PrimaryExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, xpathParser.RULE_primaryExpr);
        try {
            this.state = 118;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case xpathParser.T__7:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 110;
                        this.variableReference();
                    }
                    break;
                case xpathParser.LPAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 111;
                        this.match(xpathParser.LPAR);
                        this.state = 112;
                        this.expr();
                        this.state = 113;
                        this.match(xpathParser.RPAR);
                    }
                    break;
                case xpathParser.Literal:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 115;
                        this.match(xpathParser.Literal);
                    }
                    break;
                case xpathParser.Number:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 116;
                        this.match(xpathParser.Number);
                    }
                    break;
                case xpathParser.NodeType:
                case xpathParser.AxisName:
                case xpathParser.NCName:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 117;
                        this.functionCall();
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
    xpathParser.prototype.functionCall = function () {
        var _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, xpathParser.RULE_functionCall);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 120;
                this.functionName();
                this.state = 121;
                this.match(xpathParser.LPAR);
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xpathParser.T__0) | (1 << xpathParser.T__7) | (1 << xpathParser.NodeType) | (1 << xpathParser.Number) | (1 << xpathParser.AxisName) | (1 << xpathParser.PATHSEP) | (1 << xpathParser.ABRPATH) | (1 << xpathParser.LPAR) | (1 << xpathParser.MINUS) | (1 << xpathParser.DOT) | (1 << xpathParser.MUL) | (1 << xpathParser.DOTDOT) | (1 << xpathParser.AT))) !== 0) || _la === xpathParser.Literal || _la === xpathParser.NCName) {
                    {
                        this.state = 122;
                        this.expr();
                        this.state = 127;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === xpathParser.COMMA) {
                            {
                                {
                                    this.state = 123;
                                    this.match(xpathParser.COMMA);
                                    this.state = 124;
                                    this.expr();
                                }
                            }
                            this.state = 129;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 132;
                this.match(xpathParser.RPAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xpathParser.prototype.unionExprNoRoot = function () {
        var _localctx = new UnionExprNoRootContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, xpathParser.RULE_unionExprNoRoot);
        var _la;
        try {
            this.state = 142;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 134;
                        this.pathExprNoRoot();
                        this.state = 137;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === xpathParser.PIPE) {
                            {
                                this.state = 135;
                                this.match(xpathParser.PIPE);
                                this.state = 136;
                                this.unionExprNoRoot();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 139;
                        this.match(xpathParser.PATHSEP);
                        this.state = 140;
                        this.match(xpathParser.PIPE);
                        this.state = 141;
                        this.unionExprNoRoot();
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
    xpathParser.prototype.pathExprNoRoot = function () {
        var _localctx = new PathExprNoRootContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, xpathParser.RULE_pathExprNoRoot);
        var _la;
        try {
            this.state = 150;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 144;
                        this.locationPath();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 145;
                        this.filterExpr();
                        this.state = 148;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === xpathParser.PATHSEP || _la === xpathParser.ABRPATH) {
                            {
                                this.state = 146;
                                _la = this._input.LA(1);
                                if (!(_la === xpathParser.PATHSEP || _la === xpathParser.ABRPATH)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 147;
                                this.relativeLocationPath();
                            }
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
    xpathParser.prototype.filterExpr = function () {
        var _localctx = new FilterExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, xpathParser.RULE_filterExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.primaryExpr();
                this.state = 156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xpathParser.LBRAC) {
                    {
                        {
                            this.state = 153;
                            this.predicate();
                        }
                    }
                    this.state = 158;
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
    xpathParser.prototype.orExpr = function () {
        var _localctx = new OrExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, xpathParser.RULE_orExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 159;
                this.andExpr();
                this.state = 164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xpathParser.T__1) {
                    {
                        {
                            this.state = 160;
                            this.match(xpathParser.T__1);
                            this.state = 161;
                            this.andExpr();
                        }
                    }
                    this.state = 166;
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
    xpathParser.prototype.andExpr = function () {
        var _localctx = new AndExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, xpathParser.RULE_andExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.equalityExpr();
                this.state = 172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xpathParser.T__2) {
                    {
                        {
                            this.state = 168;
                            this.match(xpathParser.T__2);
                            this.state = 169;
                            this.equalityExpr();
                        }
                    }
                    this.state = 174;
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
    xpathParser.prototype.equalityExpr = function () {
        var _localctx = new EqualityExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, xpathParser.RULE_equalityExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 175;
                this.relationalExpr();
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xpathParser.T__3 || _la === xpathParser.T__4) {
                    {
                        {
                            this.state = 176;
                            _la = this._input.LA(1);
                            if (!(_la === xpathParser.T__3 || _la === xpathParser.T__4)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 177;
                            this.relationalExpr();
                        }
                    }
                    this.state = 182;
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
    xpathParser.prototype.relationalExpr = function () {
        var _localctx = new RelationalExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, xpathParser.RULE_relationalExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
                this.additiveExpr();
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xpathParser.LESS) | (1 << xpathParser.MORE_) | (1 << xpathParser.LE) | (1 << xpathParser.GE))) !== 0)) {
                    {
                        {
                            this.state = 184;
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xpathParser.LESS) | (1 << xpathParser.MORE_) | (1 << xpathParser.LE) | (1 << xpathParser.GE))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 185;
                            this.additiveExpr();
                        }
                    }
                    this.state = 190;
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
    xpathParser.prototype.additiveExpr = function () {
        var _localctx = new AdditiveExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, xpathParser.RULE_additiveExpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 191;
                this.multiplicativeExpr();
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xpathParser.MINUS || _la === xpathParser.PLUS) {
                    {
                        {
                            this.state = 192;
                            _la = this._input.LA(1);
                            if (!(_la === xpathParser.MINUS || _la === xpathParser.PLUS)) {
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
                            this.multiplicativeExpr();
                        }
                    }
                    this.state = 198;
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
    xpathParser.prototype.multiplicativeExpr = function () {
        var _localctx = new MultiplicativeExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, xpathParser.RULE_multiplicativeExpr);
        var _la;
        try {
            this.state = 209;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 199;
                        this.unaryExprNoRoot();
                        this.state = 202;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xpathParser.T__5) | (1 << xpathParser.T__6) | (1 << xpathParser.MUL))) !== 0)) {
                            {
                                this.state = 200;
                                _la = this._input.LA(1);
                                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xpathParser.T__5) | (1 << xpathParser.T__6) | (1 << xpathParser.MUL))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 201;
                                this.multiplicativeExpr();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 204;
                        this.match(xpathParser.PATHSEP);
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === xpathParser.T__5 || _la === xpathParser.T__6) {
                            {
                                this.state = 205;
                                _la = this._input.LA(1);
                                if (!(_la === xpathParser.T__5 || _la === xpathParser.T__6)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 206;
                                this.multiplicativeExpr();
                            }
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
    xpathParser.prototype.unaryExprNoRoot = function () {
        var _localctx = new UnaryExprNoRootContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, xpathParser.RULE_unaryExprNoRoot);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === xpathParser.MINUS) {
                    {
                        {
                            this.state = 211;
                            this.match(xpathParser.MINUS);
                        }
                    }
                    this.state = 216;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 217;
                this.unionExprNoRoot();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xpathParser.prototype.qName = function () {
        var _localctx = new QNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, xpathParser.RULE_qName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                this.nCName();
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === xpathParser.COLON) {
                    {
                        this.state = 220;
                        this.match(xpathParser.COLON);
                        this.state = 221;
                        this.nCName();
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
    xpathParser.prototype.functionName = function () {
        var _localctx = new FunctionNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, xpathParser.RULE_functionName);
        try {
            this.state = 230;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 224;
                        this.nCName();
                        this.state = 225;
                        this.match(xpathParser.COLON);
                        this.state = 226;
                        this.nCName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 228;
                        this.match(xpathParser.NCName);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 229;
                        this.match(xpathParser.AxisName);
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
    xpathParser.prototype.variableReference = function () {
        var _localctx = new VariableReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, xpathParser.RULE_variableReference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.match(xpathParser.T__7);
                this.state = 233;
                this.qName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    xpathParser.prototype.nameTest = function () {
        var _localctx = new NameTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, xpathParser.RULE_nameTest);
        try {
            this.state = 241;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 235;
                        this.match(xpathParser.MUL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 236;
                        this.nCName();
                        this.state = 237;
                        this.match(xpathParser.COLON);
                        this.state = 238;
                        this.match(xpathParser.MUL);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 240;
                        this.qName();
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
    xpathParser.prototype.nCName = function () {
        var _localctx = new NCNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, xpathParser.RULE_nCName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 243;
                _la = this._input.LA(1);
                if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (xpathParser.NodeType - 9)) | (1 << (xpathParser.AxisName - 9)) | (1 << (xpathParser.NCName - 9)))) !== 0))) {
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
    Object.defineProperty(xpathParser, "_ATN", {
        get: function () {
            if (!xpathParser.__ATN) {
                xpathParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(xpathParser._serializedATN));
            }
            return xpathParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    xpathParser.T__0 = 1;
    xpathParser.T__1 = 2;
    xpathParser.T__2 = 3;
    xpathParser.T__3 = 4;
    xpathParser.T__4 = 5;
    xpathParser.T__5 = 6;
    xpathParser.T__6 = 7;
    xpathParser.T__7 = 8;
    xpathParser.NodeType = 9;
    xpathParser.Number = 10;
    xpathParser.AxisName = 11;
    xpathParser.PATHSEP = 12;
    xpathParser.ABRPATH = 13;
    xpathParser.LPAR = 14;
    xpathParser.RPAR = 15;
    xpathParser.LBRAC = 16;
    xpathParser.RBRAC = 17;
    xpathParser.MINUS = 18;
    xpathParser.PLUS = 19;
    xpathParser.DOT = 20;
    xpathParser.MUL = 21;
    xpathParser.DOTDOT = 22;
    xpathParser.AT = 23;
    xpathParser.COMMA = 24;
    xpathParser.PIPE = 25;
    xpathParser.LESS = 26;
    xpathParser.MORE_ = 27;
    xpathParser.LE = 28;
    xpathParser.GE = 29;
    xpathParser.COLON = 30;
    xpathParser.CC = 31;
    xpathParser.APOS = 32;
    xpathParser.QUOT = 33;
    xpathParser.Literal = 34;
    xpathParser.Whitespace = 35;
    xpathParser.NCName = 36;
    xpathParser.RULE_main = 0;
    xpathParser.RULE_locationPath = 1;
    xpathParser.RULE_absoluteLocationPathNoroot = 2;
    xpathParser.RULE_relativeLocationPath = 3;
    xpathParser.RULE_step = 4;
    xpathParser.RULE_axisSpecifier = 5;
    xpathParser.RULE_nodeTest = 6;
    xpathParser.RULE_predicate = 7;
    xpathParser.RULE_abbreviatedStep = 8;
    xpathParser.RULE_expr = 9;
    xpathParser.RULE_primaryExpr = 10;
    xpathParser.RULE_functionCall = 11;
    xpathParser.RULE_unionExprNoRoot = 12;
    xpathParser.RULE_pathExprNoRoot = 13;
    xpathParser.RULE_filterExpr = 14;
    xpathParser.RULE_orExpr = 15;
    xpathParser.RULE_andExpr = 16;
    xpathParser.RULE_equalityExpr = 17;
    xpathParser.RULE_relationalExpr = 18;
    xpathParser.RULE_additiveExpr = 19;
    xpathParser.RULE_multiplicativeExpr = 20;
    xpathParser.RULE_unaryExprNoRoot = 21;
    xpathParser.RULE_qName = 22;
    xpathParser.RULE_functionName = 23;
    xpathParser.RULE_variableReference = 24;
    xpathParser.RULE_nameTest = 25;
    xpathParser.RULE_nCName = 26;
    // tslint:disable:no-trailing-whitespace
    xpathParser.ruleNames = [
        "main", "locationPath", "absoluteLocationPathNoroot", "relativeLocationPath",
        "step", "axisSpecifier", "nodeTest", "predicate", "abbreviatedStep", "expr",
        "primaryExpr", "functionCall", "unionExprNoRoot", "pathExprNoRoot", "filterExpr",
        "orExpr", "andExpr", "equalityExpr", "relationalExpr", "additiveExpr",
        "multiplicativeExpr", "unaryExprNoRoot", "qName", "functionName", "variableReference",
        "nameTest", "nCName",
    ];
    xpathParser._LITERAL_NAMES = [
        undefined, "'processing-instruction'", "'or'", "'and'", "'='", "'!='",
        "'div'", "'mod'", "'$'", undefined, undefined, undefined, "'/'", "'//'",
        "'('", "')'", "'['", "']'", "'-'", "'+'", "'.'", "'*'", "'..'", "'@'",
        "','", "'|'", "'<'", "'>'", "'<='", "'>='", "':'", "'::'", "'''", "'\"'",
    ];
    xpathParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "NodeType", "Number", "AxisName", "PATHSEP", "ABRPATH",
        "LPAR", "RPAR", "LBRAC", "RBRAC", "MINUS", "PLUS", "DOT", "MUL", "DOTDOT",
        "AT", "COMMA", "PIPE", "LESS", "MORE_", "LE", "GE", "COLON", "CC", "APOS",
        "QUOT", "Literal", "Whitespace", "NCName",
    ];
    xpathParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(xpathParser._LITERAL_NAMES, xpathParser._SYMBOLIC_NAMES, []);
    xpathParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\xF8\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x05\x03=\n\x03\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x05\x04C\n\x04\x03\x05\x03\x05\x03\x05\x07\x05H\n\x05\f\x05\x0E\x05" +
        "K\v\x05\x03\x06\x03\x06\x03\x06\x07\x06P\n\x06\f\x06\x0E\x06S\v\x06\x03" +
        "\x06\x05\x06V\n\x06\x03\x07\x03\x07\x03\x07\x05\x07[\n\x07\x05\x07]\n" +
        "\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bg\n\b\x03\t" +
        "\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x05\fy\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\x80" +
        "\n\r\f\r\x0E\r\x83\v\r\x05\r\x85\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
        "\x05\x0E\x8C\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x91\n\x0E\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x05\x0F\x97\n\x0F\x05\x0F\x99\n\x0F\x03\x10\x03\x10" +
        "\x07\x10\x9D\n\x10\f\x10\x0E\x10\xA0\v\x10\x03\x11\x03\x11\x03\x11\x07" +
        "\x11\xA5\n\x11\f\x11\x0E\x11\xA8\v\x11\x03\x12\x03\x12\x03\x12\x07\x12" +
        "\xAD\n\x12\f\x12\x0E\x12\xB0\v\x12\x03\x13\x03\x13\x03\x13\x07\x13\xB5" +
        "\n\x13\f\x13\x0E\x13\xB8\v\x13\x03\x14\x03\x14\x03\x14\x07\x14\xBD\n\x14" +
        "\f\x14\x0E\x14\xC0\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\xC5\n\x15\f\x15" +
        "\x0E\x15\xC8\v\x15\x03\x16\x03\x16\x03\x16\x05\x16\xCD\n\x16\x03\x16\x03" +
        "\x16\x03\x16\x05\x16\xD2\n\x16\x05\x16\xD4\n\x16\x03\x17\x07\x17\xD7\n" +
        "\x17\f\x17\x0E\x17\xDA\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05" +
        "\x18\xE1\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
        "\xE9\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x05\x1B\xF4\n\x1B\x03\x1C\x03\x1C\x03\x1C\x02\x02\x02\x1D" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x022\x024\x026\x02\x02\n\x03\x02\x0E\x0F\x04\x02\x16" +
        "\x16\x18\x18\x03\x02\x06\x07\x03\x02\x1C\x1F\x03\x02\x14\x15\x04\x02\b" +
        "\t\x17\x17\x03\x02\b\t\x05\x02\v\v\r\r&&\x02\xFE\x028\x03\x02\x02\x02" +
        "\x04<\x03\x02\x02\x02\x06B\x03\x02\x02\x02\bD\x03\x02\x02\x02\nU\x03\x02" +
        "\x02\x02\f\\\x03\x02\x02\x02\x0Ef\x03\x02\x02\x02\x10h\x03\x02\x02\x02" +
        "\x12l\x03\x02\x02\x02\x14n\x03\x02\x02\x02\x16x\x03\x02\x02\x02\x18z\x03" +
        "\x02\x02\x02\x1A\x90\x03\x02\x02\x02\x1C\x98\x03\x02\x02\x02\x1E\x9A\x03" +
        "\x02\x02\x02 \xA1\x03\x02\x02\x02\"\xA9\x03\x02\x02\x02$\xB1\x03\x02\x02" +
        "\x02&\xB9\x03\x02\x02\x02(\xC1\x03\x02\x02\x02*\xD3\x03\x02\x02\x02,\xD8" +
        "\x03\x02\x02\x02.\xDD\x03\x02\x02\x020\xE8\x03\x02\x02\x022\xEA\x03\x02" +
        "\x02\x024\xF3\x03\x02\x02\x026\xF5\x03\x02\x02\x0289\x05\x14\v\x029\x03" +
        "\x03\x02\x02\x02:=\x05\b\x05\x02;=\x05\x06\x04\x02<:\x03\x02\x02\x02<" +
        ";\x03\x02\x02\x02=\x05\x03\x02\x02\x02>?\x07\x0E\x02\x02?C\x05\b\x05\x02" +
        "@A\x07\x0F\x02\x02AC\x05\b\x05\x02B>\x03\x02\x02\x02B@\x03\x02\x02\x02" +
        "C\x07\x03\x02\x02\x02DI\x05\n\x06\x02EF\t\x02\x02\x02FH\x05\n\x06\x02" +
        "GE\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
        "J\t\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x05\f\x07\x02MQ\x05\x0E\b\x02" +
        "NP\x05\x10\t\x02ON\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02" +
        "QR\x03\x02\x02\x02RV\x03\x02\x02\x02SQ\x03\x02\x02\x02TV\x05\x12\n\x02" +
        "UL\x03\x02\x02\x02UT\x03\x02\x02\x02V\v\x03\x02\x02\x02WX\x07\r\x02\x02" +
        "X]\x07!\x02\x02Y[\x07\x19\x02\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
        "[]\x03\x02\x02\x02\\W\x03\x02\x02\x02\\Z\x03\x02\x02\x02]\r\x03\x02\x02" +
        "\x02^g\x054\x1B\x02_`\x07\v\x02\x02`a\x07\x10\x02\x02ag\x07\x11\x02\x02" +
        "bc\x07\x03\x02\x02cd\x07\x10\x02\x02de\x07$\x02\x02eg\x07\x11\x02\x02" +
        "f^\x03\x02\x02\x02f_\x03\x02\x02\x02fb\x03\x02\x02\x02g\x0F\x03\x02\x02" +
        "\x02hi\x07\x12\x02\x02ij\x05\x14\v\x02jk\x07\x13\x02\x02k\x11\x03\x02" +
        "\x02\x02lm\t\x03\x02\x02m\x13\x03\x02\x02\x02no\x05 \x11\x02o\x15\x03" +
        "\x02\x02\x02py\x052\x1A\x02qr\x07\x10\x02\x02rs\x05\x14\v\x02st\x07\x11" +
        "\x02\x02ty\x03\x02\x02\x02uy\x07$\x02\x02vy\x07\f\x02\x02wy\x05\x18\r" +
        "\x02xp\x03\x02\x02\x02xq\x03\x02\x02\x02xu\x03\x02\x02\x02xv\x03\x02\x02" +
        "\x02xw\x03\x02\x02\x02y\x17\x03\x02\x02\x02z{\x050\x19\x02{\x84\x07\x10" +
        "\x02\x02|\x81\x05\x14\v\x02}~\x07\x1A\x02\x02~\x80\x05\x14\v\x02\x7F}" +
        "\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82" +
        "\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84|" +
        "\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87" +
        "\x07\x11\x02\x02\x87\x19\x03\x02\x02\x02\x88\x8B\x05\x1C\x0F\x02\x89\x8A" +
        "\x07\x1B\x02\x02\x8A\x8C\x05\x1A\x0E\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C" +
        "\x03\x02\x02\x02\x8C\x91\x03\x02\x02\x02\x8D\x8E\x07\x0E\x02\x02\x8E\x8F" +
        "\x07\x1B\x02\x02\x8F\x91\x05\x1A\x0E\x02\x90\x88\x03\x02\x02\x02\x90\x8D" +
        "\x03\x02\x02\x02\x91\x1B\x03\x02\x02\x02\x92\x99\x05\x04\x03\x02\x93\x96" +
        "\x05\x1E\x10\x02\x94\x95\t\x02\x02\x02\x95\x97\x05\b\x05\x02\x96\x94\x03" +
        "\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02\x02\x98\x92\x03" +
        "\x02\x02\x02\x98\x93\x03\x02\x02\x02\x99\x1D\x03\x02\x02\x02\x9A\x9E\x05" +
        "\x16\f\x02\x9B\x9D\x05\x10\t\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02" +
        "\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x1F\x03\x02" +
        "\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA6\x05\"\x12\x02\xA2\xA3\x07\x04" +
        "\x02\x02\xA3\xA5\x05\"\x12\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA8\x03\x02" +
        "\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7!\x03\x02" +
        "\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAE\x05$\x13\x02\xAA\xAB\x07\x05" +
        "\x02\x02\xAB\xAD\x05$\x13\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB0\x03\x02" +
        "\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF#\x03\x02" +
        "\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB6\x05&\x14\x02\xB2\xB3\t\x04\x02" +
        "\x02\xB3\xB5\x05&\x14\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB8\x03\x02\x02" +
        "\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7%\x03\x02\x02" +
        "\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBE\x05(\x15\x02\xBA\xBB\t\x05\x02\x02" +
        "\xBB\xBD\x05(\x15\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02" +
        "\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\'\x03\x02\x02\x02" +
        "\xC0\xBE\x03\x02\x02\x02\xC1\xC6\x05*\x16\x02\xC2\xC3\t\x06\x02\x02\xC3" +
        "\xC5\x05*\x16\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6" +
        "\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7)\x03\x02\x02\x02\xC8" +
        "\xC6\x03\x02\x02\x02\xC9\xCC\x05,\x17\x02\xCA\xCB\t\x07\x02\x02\xCB\xCD" +
        "\x05*\x16\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD4" +
        "\x03\x02\x02\x02\xCE\xD1\x07\x0E\x02\x02\xCF\xD0\t\b\x02\x02\xD0\xD2\x05" +
        "*\x16\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03" +
        "\x02\x02\x02\xD3\xC9\x03\x02\x02\x02\xD3\xCE\x03\x02\x02\x02\xD4+\x03" +
        "\x02\x02\x02\xD5\xD7\x07\x14\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03" +
        "\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03" +
        "\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDC\x05\x1A\x0E\x02\xDC-\x03" +
        "\x02\x02\x02\xDD\xE0\x056\x1C\x02\xDE\xDF\x07 \x02\x02\xDF\xE1\x056\x1C" +
        "\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1/\x03\x02\x02" +
        "\x02\xE2\xE3\x056\x1C\x02\xE3\xE4\x07 \x02\x02\xE4\xE5\x056\x1C\x02\xE5" +
        "\xE9\x03\x02\x02\x02\xE6\xE9\x07&\x02\x02\xE7\xE9\x07\r\x02\x02\xE8\xE2" +
        "\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE7\x03\x02\x02\x02\xE91" +
        "\x03\x02\x02\x02\xEA\xEB\x07\n\x02\x02\xEB\xEC\x05.\x18\x02\xEC3\x03\x02" +
        "\x02\x02\xED\xF4\x07\x17\x02\x02\xEE\xEF\x056\x1C\x02\xEF\xF0\x07 \x02" +
        "\x02\xF0\xF1\x07\x17\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF4\x05.\x18" +
        "\x02\xF3\xED\x03\x02\x02\x02\xF3\xEE\x03\x02\x02\x02\xF3\xF2\x03\x02\x02" +
        "\x02\xF45\x03\x02\x02\x02\xF5\xF6\t\t\x02\x02\xF67\x03\x02\x02\x02\x1E" +
        "<BIQUZ\\fx\x81\x84\x8B\x90\x96\x98\x9E\xA6\xAE\xB6\xBE\xC6\xCC\xD1\xD3" +
        "\xD8\xE0\xE8\xF3";
    return xpathParser;
}(Parser_1.Parser));
exports.xpathParser = xpathParser;
var MainContext = /** @class */ (function (_super) {
    __extends(MainContext, _super);
    function MainContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MainContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    Object.defineProperty(MainContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_main; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MainContext.prototype.enterRule = function (listener) {
        if (listener.enterMain) {
            listener.enterMain(this);
        }
    };
    // @Override
    MainContext.prototype.exitRule = function (listener) {
        if (listener.exitMain) {
            listener.exitMain(this);
        }
    };
    // @Override
    MainContext.prototype.accept = function (visitor) {
        if (visitor.visitMain) {
            return visitor.visitMain(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MainContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MainContext = MainContext;
var LocationPathContext = /** @class */ (function (_super) {
    __extends(LocationPathContext, _super);
    function LocationPathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LocationPathContext.prototype.relativeLocationPath = function () {
        return this.tryGetRuleContext(0, RelativeLocationPathContext);
    };
    LocationPathContext.prototype.absoluteLocationPathNoroot = function () {
        return this.tryGetRuleContext(0, AbsoluteLocationPathNorootContext);
    };
    Object.defineProperty(LocationPathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_locationPath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LocationPathContext.prototype.enterRule = function (listener) {
        if (listener.enterLocationPath) {
            listener.enterLocationPath(this);
        }
    };
    // @Override
    LocationPathContext.prototype.exitRule = function (listener) {
        if (listener.exitLocationPath) {
            listener.exitLocationPath(this);
        }
    };
    // @Override
    LocationPathContext.prototype.accept = function (visitor) {
        if (visitor.visitLocationPath) {
            return visitor.visitLocationPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LocationPathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LocationPathContext = LocationPathContext;
var AbsoluteLocationPathNorootContext = /** @class */ (function (_super) {
    __extends(AbsoluteLocationPathNorootContext, _super);
    function AbsoluteLocationPathNorootContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AbsoluteLocationPathNorootContext.prototype.PATHSEP = function () { return this.tryGetToken(xpathParser.PATHSEP, 0); };
    AbsoluteLocationPathNorootContext.prototype.relativeLocationPath = function () {
        return this.getRuleContext(0, RelativeLocationPathContext);
    };
    AbsoluteLocationPathNorootContext.prototype.ABRPATH = function () { return this.tryGetToken(xpathParser.ABRPATH, 0); };
    Object.defineProperty(AbsoluteLocationPathNorootContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_absoluteLocationPathNoroot; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AbsoluteLocationPathNorootContext.prototype.enterRule = function (listener) {
        if (listener.enterAbsoluteLocationPathNoroot) {
            listener.enterAbsoluteLocationPathNoroot(this);
        }
    };
    // @Override
    AbsoluteLocationPathNorootContext.prototype.exitRule = function (listener) {
        if (listener.exitAbsoluteLocationPathNoroot) {
            listener.exitAbsoluteLocationPathNoroot(this);
        }
    };
    // @Override
    AbsoluteLocationPathNorootContext.prototype.accept = function (visitor) {
        if (visitor.visitAbsoluteLocationPathNoroot) {
            return visitor.visitAbsoluteLocationPathNoroot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AbsoluteLocationPathNorootContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AbsoluteLocationPathNorootContext = AbsoluteLocationPathNorootContext;
var RelativeLocationPathContext = /** @class */ (function (_super) {
    __extends(RelativeLocationPathContext, _super);
    function RelativeLocationPathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelativeLocationPathContext.prototype.step = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StepContext);
        }
        else {
            return this.getRuleContext(i, StepContext);
        }
    };
    RelativeLocationPathContext.prototype.PATHSEP = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.PATHSEP);
        }
        else {
            return this.getToken(xpathParser.PATHSEP, i);
        }
    };
    RelativeLocationPathContext.prototype.ABRPATH = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.ABRPATH);
        }
        else {
            return this.getToken(xpathParser.ABRPATH, i);
        }
    };
    Object.defineProperty(RelativeLocationPathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_relativeLocationPath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelativeLocationPathContext.prototype.enterRule = function (listener) {
        if (listener.enterRelativeLocationPath) {
            listener.enterRelativeLocationPath(this);
        }
    };
    // @Override
    RelativeLocationPathContext.prototype.exitRule = function (listener) {
        if (listener.exitRelativeLocationPath) {
            listener.exitRelativeLocationPath(this);
        }
    };
    // @Override
    RelativeLocationPathContext.prototype.accept = function (visitor) {
        if (visitor.visitRelativeLocationPath) {
            return visitor.visitRelativeLocationPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelativeLocationPathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelativeLocationPathContext = RelativeLocationPathContext;
var StepContext = /** @class */ (function (_super) {
    __extends(StepContext, _super);
    function StepContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StepContext.prototype.axisSpecifier = function () {
        return this.tryGetRuleContext(0, AxisSpecifierContext);
    };
    StepContext.prototype.nodeTest = function () {
        return this.tryGetRuleContext(0, NodeTestContext);
    };
    StepContext.prototype.predicate = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }
        else {
            return this.getRuleContext(i, PredicateContext);
        }
    };
    StepContext.prototype.abbreviatedStep = function () {
        return this.tryGetRuleContext(0, AbbreviatedStepContext);
    };
    Object.defineProperty(StepContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_step; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StepContext.prototype.enterRule = function (listener) {
        if (listener.enterStep) {
            listener.enterStep(this);
        }
    };
    // @Override
    StepContext.prototype.exitRule = function (listener) {
        if (listener.exitStep) {
            listener.exitStep(this);
        }
    };
    // @Override
    StepContext.prototype.accept = function (visitor) {
        if (visitor.visitStep) {
            return visitor.visitStep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StepContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StepContext = StepContext;
var AxisSpecifierContext = /** @class */ (function (_super) {
    __extends(AxisSpecifierContext, _super);
    function AxisSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AxisSpecifierContext.prototype.AxisName = function () { return this.tryGetToken(xpathParser.AxisName, 0); };
    AxisSpecifierContext.prototype.CC = function () { return this.tryGetToken(xpathParser.CC, 0); };
    AxisSpecifierContext.prototype.AT = function () { return this.tryGetToken(xpathParser.AT, 0); };
    Object.defineProperty(AxisSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_axisSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AxisSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAxisSpecifier) {
            listener.enterAxisSpecifier(this);
        }
    };
    // @Override
    AxisSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAxisSpecifier) {
            listener.exitAxisSpecifier(this);
        }
    };
    // @Override
    AxisSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAxisSpecifier) {
            return visitor.visitAxisSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AxisSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AxisSpecifierContext = AxisSpecifierContext;
var NodeTestContext = /** @class */ (function (_super) {
    __extends(NodeTestContext, _super);
    function NodeTestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NodeTestContext.prototype.nameTest = function () {
        return this.tryGetRuleContext(0, NameTestContext);
    };
    NodeTestContext.prototype.NodeType = function () { return this.tryGetToken(xpathParser.NodeType, 0); };
    NodeTestContext.prototype.LPAR = function () { return this.tryGetToken(xpathParser.LPAR, 0); };
    NodeTestContext.prototype.RPAR = function () { return this.tryGetToken(xpathParser.RPAR, 0); };
    NodeTestContext.prototype.Literal = function () { return this.tryGetToken(xpathParser.Literal, 0); };
    Object.defineProperty(NodeTestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_nodeTest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NodeTestContext.prototype.enterRule = function (listener) {
        if (listener.enterNodeTest) {
            listener.enterNodeTest(this);
        }
    };
    // @Override
    NodeTestContext.prototype.exitRule = function (listener) {
        if (listener.exitNodeTest) {
            listener.exitNodeTest(this);
        }
    };
    // @Override
    NodeTestContext.prototype.accept = function (visitor) {
        if (visitor.visitNodeTest) {
            return visitor.visitNodeTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NodeTestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NodeTestContext = NodeTestContext;
var PredicateContext = /** @class */ (function (_super) {
    __extends(PredicateContext, _super);
    function PredicateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PredicateContext.prototype.LBRAC = function () { return this.getToken(xpathParser.LBRAC, 0); };
    PredicateContext.prototype.expr = function () {
        return this.getRuleContext(0, ExprContext);
    };
    PredicateContext.prototype.RBRAC = function () { return this.getToken(xpathParser.RBRAC, 0); };
    Object.defineProperty(PredicateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_predicate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PredicateContext.prototype.enterRule = function (listener) {
        if (listener.enterPredicate) {
            listener.enterPredicate(this);
        }
    };
    // @Override
    PredicateContext.prototype.exitRule = function (listener) {
        if (listener.exitPredicate) {
            listener.exitPredicate(this);
        }
    };
    // @Override
    PredicateContext.prototype.accept = function (visitor) {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PredicateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PredicateContext = PredicateContext;
var AbbreviatedStepContext = /** @class */ (function (_super) {
    __extends(AbbreviatedStepContext, _super);
    function AbbreviatedStepContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AbbreviatedStepContext.prototype.DOT = function () { return this.tryGetToken(xpathParser.DOT, 0); };
    AbbreviatedStepContext.prototype.DOTDOT = function () { return this.tryGetToken(xpathParser.DOTDOT, 0); };
    Object.defineProperty(AbbreviatedStepContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_abbreviatedStep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AbbreviatedStepContext.prototype.enterRule = function (listener) {
        if (listener.enterAbbreviatedStep) {
            listener.enterAbbreviatedStep(this);
        }
    };
    // @Override
    AbbreviatedStepContext.prototype.exitRule = function (listener) {
        if (listener.exitAbbreviatedStep) {
            listener.exitAbbreviatedStep(this);
        }
    };
    // @Override
    AbbreviatedStepContext.prototype.accept = function (visitor) {
        if (visitor.visitAbbreviatedStep) {
            return visitor.visitAbbreviatedStep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AbbreviatedStepContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AbbreviatedStepContext = AbbreviatedStepContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.orExpr = function () {
        return this.getRuleContext(0, OrExprContext);
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_expr; },
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
var PrimaryExprContext = /** @class */ (function (_super) {
    __extends(PrimaryExprContext, _super);
    function PrimaryExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryExprContext.prototype.variableReference = function () {
        return this.tryGetRuleContext(0, VariableReferenceContext);
    };
    PrimaryExprContext.prototype.LPAR = function () { return this.tryGetToken(xpathParser.LPAR, 0); };
    PrimaryExprContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    PrimaryExprContext.prototype.RPAR = function () { return this.tryGetToken(xpathParser.RPAR, 0); };
    PrimaryExprContext.prototype.Literal = function () { return this.tryGetToken(xpathParser.Literal, 0); };
    PrimaryExprContext.prototype.Number = function () { return this.tryGetToken(xpathParser.Number, 0); };
    PrimaryExprContext.prototype.functionCall = function () {
        return this.tryGetRuleContext(0, FunctionCallContext);
    };
    Object.defineProperty(PrimaryExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_primaryExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryExprContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryExpr) {
            listener.enterPrimaryExpr(this);
        }
    };
    // @Override
    PrimaryExprContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryExpr) {
            listener.exitPrimaryExpr(this);
        }
    };
    // @Override
    PrimaryExprContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryExpr) {
            return visitor.visitPrimaryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryExprContext = PrimaryExprContext;
var FunctionCallContext = /** @class */ (function (_super) {
    __extends(FunctionCallContext, _super);
    function FunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallContext.prototype.functionName = function () {
        return this.getRuleContext(0, FunctionNameContext);
    };
    FunctionCallContext.prototype.LPAR = function () { return this.getToken(xpathParser.LPAR, 0); };
    FunctionCallContext.prototype.RPAR = function () { return this.getToken(xpathParser.RPAR, 0); };
    FunctionCallContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    FunctionCallContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.COMMA);
        }
        else {
            return this.getToken(xpathParser.COMMA, i);
        }
    };
    Object.defineProperty(FunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_functionCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionCallContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionCallContext = FunctionCallContext;
var UnionExprNoRootContext = /** @class */ (function (_super) {
    __extends(UnionExprNoRootContext, _super);
    function UnionExprNoRootContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionExprNoRootContext.prototype.pathExprNoRoot = function () {
        return this.tryGetRuleContext(0, PathExprNoRootContext);
    };
    UnionExprNoRootContext.prototype.PIPE = function () { return this.tryGetToken(xpathParser.PIPE, 0); };
    UnionExprNoRootContext.prototype.unionExprNoRoot = function () {
        return this.tryGetRuleContext(0, UnionExprNoRootContext);
    };
    UnionExprNoRootContext.prototype.PATHSEP = function () { return this.tryGetToken(xpathParser.PATHSEP, 0); };
    Object.defineProperty(UnionExprNoRootContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_unionExprNoRoot; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionExprNoRootContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionExprNoRoot) {
            listener.enterUnionExprNoRoot(this);
        }
    };
    // @Override
    UnionExprNoRootContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionExprNoRoot) {
            listener.exitUnionExprNoRoot(this);
        }
    };
    // @Override
    UnionExprNoRootContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionExprNoRoot) {
            return visitor.visitUnionExprNoRoot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionExprNoRootContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionExprNoRootContext = UnionExprNoRootContext;
var PathExprNoRootContext = /** @class */ (function (_super) {
    __extends(PathExprNoRootContext, _super);
    function PathExprNoRootContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PathExprNoRootContext.prototype.locationPath = function () {
        return this.tryGetRuleContext(0, LocationPathContext);
    };
    PathExprNoRootContext.prototype.filterExpr = function () {
        return this.tryGetRuleContext(0, FilterExprContext);
    };
    PathExprNoRootContext.prototype.relativeLocationPath = function () {
        return this.tryGetRuleContext(0, RelativeLocationPathContext);
    };
    PathExprNoRootContext.prototype.PATHSEP = function () { return this.tryGetToken(xpathParser.PATHSEP, 0); };
    PathExprNoRootContext.prototype.ABRPATH = function () { return this.tryGetToken(xpathParser.ABRPATH, 0); };
    Object.defineProperty(PathExprNoRootContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_pathExprNoRoot; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PathExprNoRootContext.prototype.enterRule = function (listener) {
        if (listener.enterPathExprNoRoot) {
            listener.enterPathExprNoRoot(this);
        }
    };
    // @Override
    PathExprNoRootContext.prototype.exitRule = function (listener) {
        if (listener.exitPathExprNoRoot) {
            listener.exitPathExprNoRoot(this);
        }
    };
    // @Override
    PathExprNoRootContext.prototype.accept = function (visitor) {
        if (visitor.visitPathExprNoRoot) {
            return visitor.visitPathExprNoRoot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PathExprNoRootContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PathExprNoRootContext = PathExprNoRootContext;
var FilterExprContext = /** @class */ (function (_super) {
    __extends(FilterExprContext, _super);
    function FilterExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FilterExprContext.prototype.primaryExpr = function () {
        return this.getRuleContext(0, PrimaryExprContext);
    };
    FilterExprContext.prototype.predicate = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }
        else {
            return this.getRuleContext(i, PredicateContext);
        }
    };
    Object.defineProperty(FilterExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_filterExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FilterExprContext.prototype.enterRule = function (listener) {
        if (listener.enterFilterExpr) {
            listener.enterFilterExpr(this);
        }
    };
    // @Override
    FilterExprContext.prototype.exitRule = function (listener) {
        if (listener.exitFilterExpr) {
            listener.exitFilterExpr(this);
        }
    };
    // @Override
    FilterExprContext.prototype.accept = function (visitor) {
        if (visitor.visitFilterExpr) {
            return visitor.visitFilterExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FilterExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FilterExprContext = FilterExprContext;
var OrExprContext = /** @class */ (function (_super) {
    __extends(OrExprContext, _super);
    function OrExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrExprContext.prototype.andExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AndExprContext);
        }
        else {
            return this.getRuleContext(i, AndExprContext);
        }
    };
    Object.defineProperty(OrExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_orExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrExprContext.prototype.enterRule = function (listener) {
        if (listener.enterOrExpr) {
            listener.enterOrExpr(this);
        }
    };
    // @Override
    OrExprContext.prototype.exitRule = function (listener) {
        if (listener.exitOrExpr) {
            listener.exitOrExpr(this);
        }
    };
    // @Override
    OrExprContext.prototype.accept = function (visitor) {
        if (visitor.visitOrExpr) {
            return visitor.visitOrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrExprContext = OrExprContext;
var AndExprContext = /** @class */ (function (_super) {
    __extends(AndExprContext, _super);
    function AndExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AndExprContext.prototype.equalityExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EqualityExprContext);
        }
        else {
            return this.getRuleContext(i, EqualityExprContext);
        }
    };
    Object.defineProperty(AndExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_andExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AndExprContext.prototype.enterRule = function (listener) {
        if (listener.enterAndExpr) {
            listener.enterAndExpr(this);
        }
    };
    // @Override
    AndExprContext.prototype.exitRule = function (listener) {
        if (listener.exitAndExpr) {
            listener.exitAndExpr(this);
        }
    };
    // @Override
    AndExprContext.prototype.accept = function (visitor) {
        if (visitor.visitAndExpr) {
            return visitor.visitAndExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AndExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AndExprContext = AndExprContext;
var EqualityExprContext = /** @class */ (function (_super) {
    __extends(EqualityExprContext, _super);
    function EqualityExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualityExprContext.prototype.relationalExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationalExprContext);
        }
        else {
            return this.getRuleContext(i, RelationalExprContext);
        }
    };
    Object.defineProperty(EqualityExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_equalityExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqualityExprContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityExpr) {
            listener.enterEqualityExpr(this);
        }
    };
    // @Override
    EqualityExprContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityExpr) {
            listener.exitEqualityExpr(this);
        }
    };
    // @Override
    EqualityExprContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityExpr) {
            return visitor.visitEqualityExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualityExprContext = EqualityExprContext;
var RelationalExprContext = /** @class */ (function (_super) {
    __extends(RelationalExprContext, _super);
    function RelationalExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalExprContext.prototype.additiveExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExprContext);
        }
        else {
            return this.getRuleContext(i, AdditiveExprContext);
        }
    };
    RelationalExprContext.prototype.LESS = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.LESS);
        }
        else {
            return this.getToken(xpathParser.LESS, i);
        }
    };
    RelationalExprContext.prototype.MORE_ = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.MORE_);
        }
        else {
            return this.getToken(xpathParser.MORE_, i);
        }
    };
    RelationalExprContext.prototype.LE = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.LE);
        }
        else {
            return this.getToken(xpathParser.LE, i);
        }
    };
    RelationalExprContext.prototype.GE = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.GE);
        }
        else {
            return this.getToken(xpathParser.GE, i);
        }
    };
    Object.defineProperty(RelationalExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_relationalExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationalExprContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalExpr) {
            listener.enterRelationalExpr(this);
        }
    };
    // @Override
    RelationalExprContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalExpr) {
            listener.exitRelationalExpr(this);
        }
    };
    // @Override
    RelationalExprContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalExpr) {
            return visitor.visitRelationalExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalExprContext = RelationalExprContext;
var AdditiveExprContext = /** @class */ (function (_super) {
    __extends(AdditiveExprContext, _super);
    function AdditiveExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveExprContext.prototype.multiplicativeExpr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExprContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeExprContext);
        }
    };
    AdditiveExprContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.PLUS);
        }
        else {
            return this.getToken(xpathParser.PLUS, i);
        }
    };
    AdditiveExprContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.MINUS);
        }
        else {
            return this.getToken(xpathParser.MINUS, i);
        }
    };
    Object.defineProperty(AdditiveExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_additiveExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditiveExprContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveExpr) {
            listener.enterAdditiveExpr(this);
        }
    };
    // @Override
    AdditiveExprContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveExpr) {
            listener.exitAdditiveExpr(this);
        }
    };
    // @Override
    AdditiveExprContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveExpr) {
            return visitor.visitAdditiveExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveExprContext = AdditiveExprContext;
var MultiplicativeExprContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExprContext, _super);
    function MultiplicativeExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeExprContext.prototype.unaryExprNoRoot = function () {
        return this.tryGetRuleContext(0, UnaryExprNoRootContext);
    };
    MultiplicativeExprContext.prototype.multiplicativeExpr = function () {
        return this.tryGetRuleContext(0, MultiplicativeExprContext);
    };
    MultiplicativeExprContext.prototype.MUL = function () { return this.tryGetToken(xpathParser.MUL, 0); };
    MultiplicativeExprContext.prototype.PATHSEP = function () { return this.tryGetToken(xpathParser.PATHSEP, 0); };
    Object.defineProperty(MultiplicativeExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_multiplicativeExpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicativeExprContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeExpr) {
            listener.enterMultiplicativeExpr(this);
        }
    };
    // @Override
    MultiplicativeExprContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeExpr) {
            listener.exitMultiplicativeExpr(this);
        }
    };
    // @Override
    MultiplicativeExprContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeExpr) {
            return visitor.visitMultiplicativeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeExprContext = MultiplicativeExprContext;
var UnaryExprNoRootContext = /** @class */ (function (_super) {
    __extends(UnaryExprNoRootContext, _super);
    function UnaryExprNoRootContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryExprNoRootContext.prototype.unionExprNoRoot = function () {
        return this.getRuleContext(0, UnionExprNoRootContext);
    };
    UnaryExprNoRootContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(xpathParser.MINUS);
        }
        else {
            return this.getToken(xpathParser.MINUS, i);
        }
    };
    Object.defineProperty(UnaryExprNoRootContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_unaryExprNoRoot; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryExprNoRootContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryExprNoRoot) {
            listener.enterUnaryExprNoRoot(this);
        }
    };
    // @Override
    UnaryExprNoRootContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryExprNoRoot) {
            listener.exitUnaryExprNoRoot(this);
        }
    };
    // @Override
    UnaryExprNoRootContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryExprNoRoot) {
            return visitor.visitUnaryExprNoRoot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryExprNoRootContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryExprNoRootContext = UnaryExprNoRootContext;
var QNameContext = /** @class */ (function (_super) {
    __extends(QNameContext, _super);
    function QNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QNameContext.prototype.nCName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NCNameContext);
        }
        else {
            return this.getRuleContext(i, NCNameContext);
        }
    };
    QNameContext.prototype.COLON = function () { return this.tryGetToken(xpathParser.COLON, 0); };
    Object.defineProperty(QNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_qName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QNameContext.prototype.enterRule = function (listener) {
        if (listener.enterQName) {
            listener.enterQName(this);
        }
    };
    // @Override
    QNameContext.prototype.exitRule = function (listener) {
        if (listener.exitQName) {
            listener.exitQName(this);
        }
    };
    // @Override
    QNameContext.prototype.accept = function (visitor) {
        if (visitor.visitQName) {
            return visitor.visitQName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QNameContext = QNameContext;
var FunctionNameContext = /** @class */ (function (_super) {
    __extends(FunctionNameContext, _super);
    function FunctionNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionNameContext.prototype.nCName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NCNameContext);
        }
        else {
            return this.getRuleContext(i, NCNameContext);
        }
    };
    FunctionNameContext.prototype.COLON = function () { return this.tryGetToken(xpathParser.COLON, 0); };
    FunctionNameContext.prototype.NCName = function () { return this.tryGetToken(xpathParser.NCName, 0); };
    FunctionNameContext.prototype.AxisName = function () { return this.tryGetToken(xpathParser.AxisName, 0); };
    Object.defineProperty(FunctionNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_functionName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionName) {
            listener.enterFunctionName(this);
        }
    };
    // @Override
    FunctionNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionName) {
            listener.exitFunctionName(this);
        }
    };
    // @Override
    FunctionNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionNameContext = FunctionNameContext;
var VariableReferenceContext = /** @class */ (function (_super) {
    __extends(VariableReferenceContext, _super);
    function VariableReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableReferenceContext.prototype.qName = function () {
        return this.getRuleContext(0, QNameContext);
    };
    Object.defineProperty(VariableReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_variableReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableReference) {
            listener.enterVariableReference(this);
        }
    };
    // @Override
    VariableReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableReference) {
            listener.exitVariableReference(this);
        }
    };
    // @Override
    VariableReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableReference) {
            return visitor.visitVariableReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableReferenceContext = VariableReferenceContext;
var NameTestContext = /** @class */ (function (_super) {
    __extends(NameTestContext, _super);
    function NameTestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameTestContext.prototype.MUL = function () { return this.tryGetToken(xpathParser.MUL, 0); };
    NameTestContext.prototype.nCName = function () {
        return this.tryGetRuleContext(0, NCNameContext);
    };
    NameTestContext.prototype.COLON = function () { return this.tryGetToken(xpathParser.COLON, 0); };
    NameTestContext.prototype.qName = function () {
        return this.tryGetRuleContext(0, QNameContext);
    };
    Object.defineProperty(NameTestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_nameTest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameTestContext.prototype.enterRule = function (listener) {
        if (listener.enterNameTest) {
            listener.enterNameTest(this);
        }
    };
    // @Override
    NameTestContext.prototype.exitRule = function (listener) {
        if (listener.exitNameTest) {
            listener.exitNameTest(this);
        }
    };
    // @Override
    NameTestContext.prototype.accept = function (visitor) {
        if (visitor.visitNameTest) {
            return visitor.visitNameTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameTestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameTestContext = NameTestContext;
var NCNameContext = /** @class */ (function (_super) {
    __extends(NCNameContext, _super);
    function NCNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NCNameContext.prototype.NCName = function () { return this.tryGetToken(xpathParser.NCName, 0); };
    NCNameContext.prototype.AxisName = function () { return this.tryGetToken(xpathParser.AxisName, 0); };
    NCNameContext.prototype.NodeType = function () { return this.tryGetToken(xpathParser.NodeType, 0); };
    Object.defineProperty(NCNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return xpathParser.RULE_nCName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NCNameContext.prototype.enterRule = function (listener) {
        if (listener.enterNCName) {
            listener.enterNCName(this);
        }
    };
    // @Override
    NCNameContext.prototype.exitRule = function (listener) {
        if (listener.exitNCName) {
            listener.exitNCName(this);
        }
    };
    // @Override
    NCNameContext.prototype.accept = function (visitor) {
        if (visitor.visitNCName) {
            return visitor.visitNCName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NCNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NCNameContext = NCNameContext;
