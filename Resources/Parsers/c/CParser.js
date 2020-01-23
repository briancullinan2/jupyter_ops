"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/c/C.g4 by ANTLR 4.7.3-SNAPSHOT
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
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var CParser = /** @class */ (function (_super) {
    __extends(CParser, _super);
    function CParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(CParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "C.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    CParser.prototype.primaryExpression = function () {
        var _localctx = new PrimaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CParser.RULE_primaryExpression);
        var _la;
        try {
            var _alt = void 0;
            this.state = 207;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 174;
                        this.match(CParser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 175;
                        this.match(CParser.Constant);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 177;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 176;
                                            this.match(CParser.StringLiteral);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 179;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 181;
                        this.match(CParser.LeftParen);
                        this.state = 182;
                        this.expression(0);
                        this.state = 183;
                        this.match(CParser.RightParen);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 185;
                        this.genericSelection();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 187;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.T__0) {
                            {
                                this.state = 186;
                                this.match(CParser.T__0);
                            }
                        }
                        this.state = 189;
                        this.match(CParser.LeftParen);
                        this.state = 190;
                        this.compoundStatement();
                        this.state = 191;
                        this.match(CParser.RightParen);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 193;
                        this.match(CParser.T__1);
                        this.state = 194;
                        this.match(CParser.LeftParen);
                        this.state = 195;
                        this.unaryExpression();
                        this.state = 196;
                        this.match(CParser.Comma);
                        this.state = 197;
                        this.typeName();
                        this.state = 198;
                        this.match(CParser.RightParen);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 200;
                        this.match(CParser.T__2);
                        this.state = 201;
                        this.match(CParser.LeftParen);
                        this.state = 202;
                        this.typeName();
                        this.state = 203;
                        this.match(CParser.Comma);
                        this.state = 204;
                        this.unaryExpression();
                        this.state = 205;
                        this.match(CParser.RightParen);
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
    CParser.prototype.genericSelection = function () {
        var _localctx = new GenericSelectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CParser.RULE_genericSelection);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                this.match(CParser.Generic);
                this.state = 210;
                this.match(CParser.LeftParen);
                this.state = 211;
                this.assignmentExpression();
                this.state = 212;
                this.match(CParser.Comma);
                this.state = 213;
                this.genericAssocList(0);
                this.state = 214;
                this.match(CParser.RightParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.genericAssocList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new GenericAssocListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 4;
        this.enterRecursionRule(_localctx, 4, CParser.RULE_genericAssocList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 217;
                    this.genericAssociation();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 224;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new GenericAssocListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_genericAssocList);
                                this.state = 219;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 220;
                                this.match(CParser.Comma);
                                this.state = 221;
                                this.genericAssociation();
                            }
                        }
                    }
                    this.state = 226;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.genericAssociation = function () {
        var _localctx = new GenericAssociationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CParser.RULE_genericAssociation);
        try {
            this.state = 234;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.T__0:
                case CParser.T__3:
                case CParser.T__4:
                case CParser.T__5:
                case CParser.T__6:
                case CParser.Char:
                case CParser.Const:
                case CParser.Double:
                case CParser.Enum:
                case CParser.Float:
                case CParser.Int:
                case CParser.Long:
                case CParser.Restrict:
                case CParser.Short:
                case CParser.Signed:
                case CParser.Struct:
                case CParser.Union:
                case CParser.Unsigned:
                case CParser.Void:
                case CParser.Volatile:
                case CParser.Atomic:
                case CParser.Bool:
                case CParser.Complex:
                case CParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 227;
                        this.typeName();
                        this.state = 228;
                        this.match(CParser.Colon);
                        this.state = 229;
                        this.assignmentExpression();
                    }
                    break;
                case CParser.Default:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 231;
                        this.match(CParser.Default);
                        this.state = 232;
                        this.match(CParser.Colon);
                        this.state = 233;
                        this.assignmentExpression();
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
    CParser.prototype.postfixExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new PostfixExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 8;
        this.enterRecursionRule(_localctx, 8, CParser.RULE_postfixExpression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 237;
                            this.primaryExpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 238;
                            this.match(CParser.LeftParen);
                            this.state = 239;
                            this.typeName();
                            this.state = 240;
                            this.match(CParser.RightParen);
                            this.state = 241;
                            this.match(CParser.LeftBrace);
                            this.state = 242;
                            this.initializerList(0);
                            this.state = 243;
                            this.match(CParser.RightBrace);
                        }
                        break;
                    case 3:
                        {
                            this.state = 245;
                            this.match(CParser.LeftParen);
                            this.state = 246;
                            this.typeName();
                            this.state = 247;
                            this.match(CParser.RightParen);
                            this.state = 248;
                            this.match(CParser.LeftBrace);
                            this.state = 249;
                            this.initializerList(0);
                            this.state = 250;
                            this.match(CParser.Comma);
                            this.state = 251;
                            this.match(CParser.RightBrace);
                        }
                        break;
                    case 4:
                        {
                            this.state = 253;
                            this.match(CParser.T__0);
                            this.state = 254;
                            this.match(CParser.LeftParen);
                            this.state = 255;
                            this.typeName();
                            this.state = 256;
                            this.match(CParser.RightParen);
                            this.state = 257;
                            this.match(CParser.LeftBrace);
                            this.state = 258;
                            this.initializerList(0);
                            this.state = 259;
                            this.match(CParser.RightBrace);
                        }
                        break;
                    case 5:
                        {
                            this.state = 261;
                            this.match(CParser.T__0);
                            this.state = 262;
                            this.match(CParser.LeftParen);
                            this.state = 263;
                            this.typeName();
                            this.state = 264;
                            this.match(CParser.RightParen);
                            this.state = 265;
                            this.match(CParser.LeftBrace);
                            this.state = 266;
                            this.initializerList(0);
                            this.state = 267;
                            this.match(CParser.Comma);
                            this.state = 268;
                            this.match(CParser.RightBrace);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 295;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 293;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
                                        this.state = 272;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 273;
                                        this.match(CParser.LeftBracket);
                                        this.state = 274;
                                        this.expression(0);
                                        this.state = 275;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
                                        this.state = 277;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 278;
                                        this.match(CParser.LeftParen);
                                        this.state = 280;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                                            {
                                                this.state = 279;
                                                this.argumentExpressionList(0);
                                            }
                                        }
                                        this.state = 282;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
                                        this.state = 283;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 284;
                                        this.match(CParser.Dot);
                                        this.state = 285;
                                        this.match(CParser.Identifier);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
                                        this.state = 286;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 287;
                                        this.match(CParser.Arrow);
                                        this.state = 288;
                                        this.match(CParser.Identifier);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
                                        this.state = 289;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 290;
                                        this.match(CParser.PlusPlus);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new PostfixExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_postfixExpression);
                                        this.state = 291;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 292;
                                        this.match(CParser.MinusMinus);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 297;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.argumentExpressionList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ArgumentExpressionListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 10;
        this.enterRecursionRule(_localctx, 10, CParser.RULE_argumentExpressionList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 299;
                    this.assignmentExpression();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 306;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ArgumentExpressionListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_argumentExpressionList);
                                this.state = 301;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 302;
                                this.match(CParser.Comma);
                                this.state = 303;
                                this.assignmentExpression();
                            }
                        }
                    }
                    this.state = 308;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.unaryExpression = function () {
        var _localctx = new UnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CParser.RULE_unaryExpression);
        try {
            this.state = 331;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 309;
                        this.postfixExpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 310;
                        this.match(CParser.PlusPlus);
                        this.state = 311;
                        this.unaryExpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 312;
                        this.match(CParser.MinusMinus);
                        this.state = 313;
                        this.unaryExpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 314;
                        this.unaryOperator();
                        this.state = 315;
                        this.castExpression();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 317;
                        this.match(CParser.Sizeof);
                        this.state = 318;
                        this.unaryExpression();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 319;
                        this.match(CParser.Sizeof);
                        this.state = 320;
                        this.match(CParser.LeftParen);
                        this.state = 321;
                        this.typeName();
                        this.state = 322;
                        this.match(CParser.RightParen);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 324;
                        this.match(CParser.Alignof);
                        this.state = 325;
                        this.match(CParser.LeftParen);
                        this.state = 326;
                        this.typeName();
                        this.state = 327;
                        this.match(CParser.RightParen);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 329;
                        this.match(CParser.AndAnd);
                        this.state = 330;
                        this.match(CParser.Identifier);
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
    CParser.prototype.unaryOperator = function () {
        var _localctx = new UnaryOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CParser.RULE_unaryOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                _la = this._input.LA(1);
                if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0))) {
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
    CParser.prototype.castExpression = function () {
        var _localctx = new CastExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CParser.RULE_castExpression);
        try {
            this.state = 348;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 335;
                        this.match(CParser.LeftParen);
                        this.state = 336;
                        this.typeName();
                        this.state = 337;
                        this.match(CParser.RightParen);
                        this.state = 338;
                        this.castExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 340;
                        this.match(CParser.T__0);
                        this.state = 341;
                        this.match(CParser.LeftParen);
                        this.state = 342;
                        this.typeName();
                        this.state = 343;
                        this.match(CParser.RightParen);
                        this.state = 344;
                        this.castExpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 346;
                        this.unaryExpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 347;
                        this.match(CParser.DigitSequence);
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
    CParser.prototype.multiplicativeExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new MultiplicativeExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 18;
        this.enterRecursionRule(_localctx, 18, CParser.RULE_multiplicativeExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 351;
                    this.castExpression();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 364;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 362;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 353;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 354;
                                        this.match(CParser.Star);
                                        this.state = 355;
                                        this.castExpression();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 356;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 357;
                                        this.match(CParser.Div);
                                        this.state = 358;
                                        this.castExpression();
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 359;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 360;
                                        this.match(CParser.Mod);
                                        this.state = 361;
                                        this.castExpression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 366;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.additiveExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new AdditiveExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 20;
        this.enterRecursionRule(_localctx, 20, CParser.RULE_additiveExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 368;
                    this.multiplicativeExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 378;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 376;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new AdditiveExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_additiveExpression);
                                        this.state = 370;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 371;
                                        this.match(CParser.Plus);
                                        this.state = 372;
                                        this.multiplicativeExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AdditiveExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_additiveExpression);
                                        this.state = 373;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 374;
                                        this.match(CParser.Minus);
                                        this.state = 375;
                                        this.multiplicativeExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 380;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.shiftExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ShiftExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 22;
        this.enterRecursionRule(_localctx, 22, CParser.RULE_shiftExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 382;
                    this.additiveExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 392;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 390;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ShiftExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_shiftExpression);
                                        this.state = 384;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 385;
                                        this.match(CParser.LeftShift);
                                        this.state = 386;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ShiftExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_shiftExpression);
                                        this.state = 387;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 388;
                                        this.match(CParser.RightShift);
                                        this.state = 389;
                                        this.additiveExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 394;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.relationalExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new RelationalExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 24;
        this.enterRecursionRule(_localctx, 24, CParser.RULE_relationalExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 396;
                    this.shiftExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 412;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 410;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new RelationalExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 398;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 399;
                                        this.match(CParser.Less);
                                        this.state = 400;
                                        this.shiftExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new RelationalExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 401;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 402;
                                        this.match(CParser.Greater);
                                        this.state = 403;
                                        this.shiftExpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new RelationalExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 404;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 405;
                                        this.match(CParser.LessEqual);
                                        this.state = 406;
                                        this.shiftExpression(0);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new RelationalExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 407;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 408;
                                        this.match(CParser.GreaterEqual);
                                        this.state = 409;
                                        this.shiftExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 414;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.equalityExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new EqualityExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 26;
        this.enterRecursionRule(_localctx, 26, CParser.RULE_equalityExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 416;
                    this.relationalExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 426;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 424;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new EqualityExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_equalityExpression);
                                        this.state = 418;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 419;
                                        this.match(CParser.Equal);
                                        this.state = 420;
                                        this.relationalExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new EqualityExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_equalityExpression);
                                        this.state = 421;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 422;
                                        this.match(CParser.NotEqual);
                                        this.state = 423;
                                        this.relationalExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 428;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.andExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new AndExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 28;
        this.enterRecursionRule(_localctx, 28, CParser.RULE_andExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 430;
                    this.equalityExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 437;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new AndExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_andExpression);
                                this.state = 432;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 433;
                                this.match(CParser.And);
                                this.state = 434;
                                this.equalityExpression(0);
                            }
                        }
                    }
                    this.state = 439;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.exclusiveOrExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExclusiveOrExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 30;
        this.enterRecursionRule(_localctx, 30, CParser.RULE_exclusiveOrExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 441;
                    this.andExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 448;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ExclusiveOrExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_exclusiveOrExpression);
                                this.state = 443;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 444;
                                this.match(CParser.Caret);
                                this.state = 445;
                                this.andExpression(0);
                            }
                        }
                    }
                    this.state = 450;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.inclusiveOrExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new InclusiveOrExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 32;
        this.enterRecursionRule(_localctx, 32, CParser.RULE_inclusiveOrExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 452;
                    this.exclusiveOrExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 459;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new InclusiveOrExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_inclusiveOrExpression);
                                this.state = 454;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 455;
                                this.match(CParser.Or);
                                this.state = 456;
                                this.exclusiveOrExpression(0);
                            }
                        }
                    }
                    this.state = 461;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.logicalAndExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new LogicalAndExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 34;
        this.enterRecursionRule(_localctx, 34, CParser.RULE_logicalAndExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 463;
                    this.inclusiveOrExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 470;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new LogicalAndExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_logicalAndExpression);
                                this.state = 465;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 466;
                                this.match(CParser.AndAnd);
                                this.state = 467;
                                this.inclusiveOrExpression(0);
                            }
                        }
                    }
                    this.state = 472;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.logicalOrExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new LogicalOrExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 36;
        this.enterRecursionRule(_localctx, 36, CParser.RULE_logicalOrExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 474;
                    this.logicalAndExpression(0);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 481;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new LogicalOrExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_logicalOrExpression);
                                this.state = 476;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 477;
                                this.match(CParser.OrOr);
                                this.state = 478;
                                this.logicalAndExpression(0);
                            }
                        }
                    }
                    this.state = 483;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.conditionalExpression = function () {
        var _localctx = new ConditionalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CParser.RULE_conditionalExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 484;
                this.logicalOrExpression(0);
                this.state = 490;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 485;
                            this.match(CParser.Question);
                            this.state = 486;
                            this.expression(0);
                            this.state = 487;
                            this.match(CParser.Colon);
                            this.state = 488;
                            this.conditionalExpression();
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
    CParser.prototype.assignmentExpression = function () {
        var _localctx = new AssignmentExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, CParser.RULE_assignmentExpression);
        try {
            this.state = 498;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 492;
                        this.conditionalExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 493;
                        this.unaryExpression();
                        this.state = 494;
                        this.assignmentOperator();
                        this.state = 495;
                        this.assignmentExpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 497;
                        this.match(CParser.DigitSequence);
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
    CParser.prototype.assignmentOperator = function () {
        var _localctx = new AssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, CParser.RULE_assignmentOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 500;
                _la = this._input.LA(1);
                if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CParser.Assign - 89)) | (1 << (CParser.StarAssign - 89)) | (1 << (CParser.DivAssign - 89)) | (1 << (CParser.ModAssign - 89)) | (1 << (CParser.PlusAssign - 89)) | (1 << (CParser.MinusAssign - 89)) | (1 << (CParser.LeftShiftAssign - 89)) | (1 << (CParser.RightShiftAssign - 89)) | (1 << (CParser.AndAssign - 89)) | (1 << (CParser.XorAssign - 89)) | (1 << (CParser.OrAssign - 89)))) !== 0))) {
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
    CParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 44;
        this.enterRecursionRule(_localctx, 44, CParser.RULE_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 503;
                    this.assignmentExpression();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 510;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                this.state = 505;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 506;
                                this.match(CParser.Comma);
                                this.state = 507;
                                this.assignmentExpression();
                            }
                        }
                    }
                    this.state = 512;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.constantExpression = function () {
        var _localctx = new ConstantExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, CParser.RULE_constantExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 513;
                this.conditionalExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CParser.RULE_declaration);
        try {
            this.state = 523;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 515;
                        this.declarationSpecifiers();
                        this.state = 516;
                        this.initDeclaratorList(0);
                        this.state = 517;
                        this.match(CParser.Semi);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 519;
                        this.declarationSpecifiers();
                        this.state = 520;
                        this.match(CParser.Semi);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 522;
                        this.staticAssertDeclaration();
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
    CParser.prototype.declarationSpecifiers = function () {
        var _localctx = new DeclarationSpecifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CParser.RULE_declarationSpecifiers);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 526;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 525;
                                    this.declarationSpecifier();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 528;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
    CParser.prototype.declarationSpecifiers2 = function () {
        var _localctx = new DeclarationSpecifiers2Context(this._ctx, this.state);
        this.enterRule(_localctx, 52, CParser.RULE_declarationSpecifiers2);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 531;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 530;
                                    this.declarationSpecifier();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 533;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
    CParser.prototype.declarationSpecifier = function () {
        var _localctx = new DeclarationSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, CParser.RULE_declarationSpecifier);
        try {
            this.state = 540;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 535;
                        this.storageClassSpecifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 536;
                        this.typeSpecifier(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 537;
                        this.typeQualifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 538;
                        this.functionSpecifier();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 539;
                        this.alignmentSpecifier();
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
    CParser.prototype.initDeclaratorList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new InitDeclaratorListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 56;
        this.enterRecursionRule(_localctx, 56, CParser.RULE_initDeclaratorList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 543;
                    this.initDeclarator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 550;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new InitDeclaratorListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_initDeclaratorList);
                                this.state = 545;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 546;
                                this.match(CParser.Comma);
                                this.state = 547;
                                this.initDeclarator();
                            }
                        }
                    }
                    this.state = 552;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.initDeclarator = function () {
        var _localctx = new InitDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, CParser.RULE_initDeclarator);
        try {
            this.state = 558;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 553;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 554;
                        this.declarator();
                        this.state = 555;
                        this.match(CParser.Assign);
                        this.state = 556;
                        this.initializer();
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
    CParser.prototype.storageClassSpecifier = function () {
        var _localctx = new StorageClassSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, CParser.RULE_storageClassSpecifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 560;
                _la = this._input.LA(1);
                if (!(_la === CParser.Auto || _la === CParser.Extern || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CParser.Register - 34)) | (1 << (CParser.Static - 34)) | (1 << (CParser.Typedef - 34)) | (1 << (CParser.ThreadLocal - 34)))) !== 0))) {
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
    CParser.prototype.typeSpecifier = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new TypeSpecifierContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 62;
        this.enterRecursionRule(_localctx, 62, CParser.RULE_typeSpecifier, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 577;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CParser.T__3:
                    case CParser.T__4:
                    case CParser.T__5:
                    case CParser.Char:
                    case CParser.Double:
                    case CParser.Float:
                    case CParser.Int:
                    case CParser.Long:
                    case CParser.Short:
                    case CParser.Signed:
                    case CParser.Unsigned:
                    case CParser.Void:
                    case CParser.Bool:
                    case CParser.Complex:
                        {
                            this.state = 563;
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Float))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0))) {
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
                    case CParser.T__0:
                        {
                            this.state = 564;
                            this.match(CParser.T__0);
                            this.state = 565;
                            this.match(CParser.LeftParen);
                            this.state = 566;
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 567;
                            this.match(CParser.RightParen);
                        }
                        break;
                    case CParser.Atomic:
                        {
                            this.state = 568;
                            this.atomicTypeSpecifier();
                        }
                        break;
                    case CParser.Struct:
                    case CParser.Union:
                        {
                            this.state = 569;
                            this.structOrUnionSpecifier();
                        }
                        break;
                    case CParser.Enum:
                        {
                            this.state = 570;
                            this.enumSpecifier();
                        }
                        break;
                    case CParser.Identifier:
                        {
                            this.state = 571;
                            this.typedefName();
                        }
                        break;
                    case CParser.T__6:
                        {
                            this.state = 572;
                            this.match(CParser.T__6);
                            this.state = 573;
                            this.match(CParser.LeftParen);
                            this.state = 574;
                            this.constantExpression();
                            this.state = 575;
                            this.match(CParser.RightParen);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 583;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeSpecifierContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_typeSpecifier);
                                this.state = 579;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 580;
                                this.pointer();
                            }
                        }
                    }
                    this.state = 585;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structOrUnionSpecifier = function () {
        var _localctx = new StructOrUnionSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, CParser.RULE_structOrUnionSpecifier);
        var _la;
        try {
            this.state = 597;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 586;
                        this.structOrUnion();
                        this.state = 588;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Identifier) {
                            {
                                this.state = 587;
                                this.match(CParser.Identifier);
                            }
                        }
                        this.state = 590;
                        this.match(CParser.LeftBrace);
                        this.state = 591;
                        this.structDeclarationList(0);
                        this.state = 592;
                        this.match(CParser.RightBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 594;
                        this.structOrUnion();
                        this.state = 595;
                        this.match(CParser.Identifier);
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
    CParser.prototype.structOrUnion = function () {
        var _localctx = new StructOrUnionContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, CParser.RULE_structOrUnion);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 599;
                _la = this._input.LA(1);
                if (!(_la === CParser.Struct || _la === CParser.Union)) {
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
    CParser.prototype.structDeclarationList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new StructDeclarationListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 68;
        this.enterRecursionRule(_localctx, 68, CParser.RULE_structDeclarationList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 602;
                    this.structDeclaration();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 608;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new StructDeclarationListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_structDeclarationList);
                                this.state = 604;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 605;
                                this.structDeclaration();
                            }
                        }
                    }
                    this.state = 610;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structDeclaration = function () {
        var _localctx = new StructDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, CParser.RULE_structDeclaration);
        var _la;
        try {
            this.state = 618;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.T__0:
                case CParser.T__3:
                case CParser.T__4:
                case CParser.T__5:
                case CParser.T__6:
                case CParser.Char:
                case CParser.Const:
                case CParser.Double:
                case CParser.Enum:
                case CParser.Float:
                case CParser.Int:
                case CParser.Long:
                case CParser.Restrict:
                case CParser.Short:
                case CParser.Signed:
                case CParser.Struct:
                case CParser.Union:
                case CParser.Unsigned:
                case CParser.Void:
                case CParser.Volatile:
                case CParser.Atomic:
                case CParser.Bool:
                case CParser.Complex:
                case CParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 611;
                        this.specifierQualifierList();
                        this.state = 613;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CParser.LeftParen - 59)) | (1 << (CParser.Star - 59)) | (1 << (CParser.Caret - 59)) | (1 << (CParser.Colon - 59)))) !== 0) || _la === CParser.Identifier) {
                            {
                                this.state = 612;
                                this.structDeclaratorList(0);
                            }
                        }
                        this.state = 615;
                        this.match(CParser.Semi);
                    }
                    break;
                case CParser.StaticAssert:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 617;
                        this.staticAssertDeclaration();
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
    CParser.prototype.specifierQualifierList = function () {
        var _localctx = new SpecifierQualifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, CParser.RULE_specifierQualifierList);
        try {
            this.state = 628;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 620;
                        this.typeSpecifier(0);
                        this.state = 622;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                            case 1:
                                {
                                    this.state = 621;
                                    this.specifierQualifierList();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 624;
                        this.typeQualifier();
                        this.state = 626;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                            case 1:
                                {
                                    this.state = 625;
                                    this.specifierQualifierList();
                                }
                                break;
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
    CParser.prototype.structDeclaratorList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new StructDeclaratorListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 74;
        this.enterRecursionRule(_localctx, 74, CParser.RULE_structDeclaratorList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 631;
                    this.structDeclarator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 638;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new StructDeclaratorListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_structDeclaratorList);
                                this.state = 633;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 634;
                                this.match(CParser.Comma);
                                this.state = 635;
                                this.structDeclarator();
                            }
                        }
                    }
                    this.state = 640;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structDeclarator = function () {
        var _localctx = new StructDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, CParser.RULE_structDeclarator);
        var _la;
        try {
            this.state = 647;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 641;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 643;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CParser.LeftParen - 59)) | (1 << (CParser.Star - 59)) | (1 << (CParser.Caret - 59)))) !== 0) || _la === CParser.Identifier) {
                            {
                                this.state = 642;
                                this.declarator();
                            }
                        }
                        this.state = 645;
                        this.match(CParser.Colon);
                        this.state = 646;
                        this.constantExpression();
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
    CParser.prototype.enumSpecifier = function () {
        var _localctx = new EnumSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, CParser.RULE_enumSpecifier);
        var _la;
        try {
            this.state = 668;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 649;
                        this.match(CParser.Enum);
                        this.state = 651;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Identifier) {
                            {
                                this.state = 650;
                                this.match(CParser.Identifier);
                            }
                        }
                        this.state = 653;
                        this.match(CParser.LeftBrace);
                        this.state = 654;
                        this.enumeratorList(0);
                        this.state = 655;
                        this.match(CParser.RightBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 657;
                        this.match(CParser.Enum);
                        this.state = 659;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Identifier) {
                            {
                                this.state = 658;
                                this.match(CParser.Identifier);
                            }
                        }
                        this.state = 661;
                        this.match(CParser.LeftBrace);
                        this.state = 662;
                        this.enumeratorList(0);
                        this.state = 663;
                        this.match(CParser.Comma);
                        this.state = 664;
                        this.match(CParser.RightBrace);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 666;
                        this.match(CParser.Enum);
                        this.state = 667;
                        this.match(CParser.Identifier);
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
    CParser.prototype.enumeratorList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new EnumeratorListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 80;
        this.enterRecursionRule(_localctx, 80, CParser.RULE_enumeratorList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 671;
                    this.enumerator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 678;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new EnumeratorListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_enumeratorList);
                                this.state = 673;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 674;
                                this.match(CParser.Comma);
                                this.state = 675;
                                this.enumerator();
                            }
                        }
                    }
                    this.state = 680;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.enumerator = function () {
        var _localctx = new EnumeratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, CParser.RULE_enumerator);
        try {
            this.state = 686;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 681;
                        this.enumerationConstant();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 682;
                        this.enumerationConstant();
                        this.state = 683;
                        this.match(CParser.Assign);
                        this.state = 684;
                        this.constantExpression();
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
    CParser.prototype.enumerationConstant = function () {
        var _localctx = new EnumerationConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, CParser.RULE_enumerationConstant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                this.match(CParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.atomicTypeSpecifier = function () {
        var _localctx = new AtomicTypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, CParser.RULE_atomicTypeSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 690;
                this.match(CParser.Atomic);
                this.state = 691;
                this.match(CParser.LeftParen);
                this.state = 692;
                this.typeName();
                this.state = 693;
                this.match(CParser.RightParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.typeQualifier = function () {
        var _localctx = new TypeQualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, CParser.RULE_typeQualifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 695;
                _la = this._input.LA(1);
                if (!(_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0))) {
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
    CParser.prototype.functionSpecifier = function () {
        var _localctx = new FunctionSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, CParser.RULE_functionSpecifier);
        var _la;
        try {
            this.state = 703;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.T__7:
                case CParser.T__8:
                case CParser.Inline:
                case CParser.Noreturn:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 697;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.Inline))) !== 0) || _la === CParser.Noreturn)) {
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
                case CParser.T__11:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 698;
                        this.gccAttributeSpecifier();
                    }
                    break;
                case CParser.T__9:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 699;
                        this.match(CParser.T__9);
                        this.state = 700;
                        this.match(CParser.LeftParen);
                        this.state = 701;
                        this.match(CParser.Identifier);
                        this.state = 702;
                        this.match(CParser.RightParen);
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
    CParser.prototype.alignmentSpecifier = function () {
        var _localctx = new AlignmentSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, CParser.RULE_alignmentSpecifier);
        try {
            this.state = 715;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 705;
                        this.match(CParser.Alignas);
                        this.state = 706;
                        this.match(CParser.LeftParen);
                        this.state = 707;
                        this.typeName();
                        this.state = 708;
                        this.match(CParser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 710;
                        this.match(CParser.Alignas);
                        this.state = 711;
                        this.match(CParser.LeftParen);
                        this.state = 712;
                        this.constantExpression();
                        this.state = 713;
                        this.match(CParser.RightParen);
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
    CParser.prototype.declarator = function () {
        var _localctx = new DeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, CParser.RULE_declarator);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 718;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.Star || _la === CParser.Caret) {
                    {
                        this.state = 717;
                        this.pointer();
                    }
                }
                this.state = 720;
                this.directDeclarator(0);
                this.state = 724;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 721;
                                this.gccDeclaratorExtension();
                            }
                        }
                    }
                    this.state = 726;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
    CParser.prototype.directDeclarator = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new DirectDeclaratorContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 96;
        this.enterRecursionRule(_localctx, 96, CParser.RULE_directDeclarator, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 744;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                    case 1:
                        {
                            this.state = 728;
                            this.match(CParser.Identifier);
                        }
                        break;
                    case 2:
                        {
                            this.state = 729;
                            this.match(CParser.LeftParen);
                            this.state = 730;
                            this.declarator();
                            this.state = 731;
                            this.match(CParser.RightParen);
                        }
                        break;
                    case 3:
                        {
                            this.state = 733;
                            this.match(CParser.Identifier);
                            this.state = 734;
                            this.match(CParser.Colon);
                            this.state = 735;
                            this.match(CParser.DigitSequence);
                        }
                        break;
                    case 4:
                        {
                            this.state = 736;
                            this.match(CParser.LeftParen);
                            this.state = 738;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Float))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)))) !== 0) || _la === CParser.Identifier) {
                                {
                                    this.state = 737;
                                    this.typeSpecifier(0);
                                }
                            }
                            this.state = 740;
                            this.pointer();
                            this.state = 741;
                            this.directDeclarator(0);
                            this.state = 742;
                            this.match(CParser.RightParen);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 791;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 789;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 746;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 747;
                                        this.match(CParser.LeftBracket);
                                        this.state = 749;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                                            {
                                                this.state = 748;
                                                this.typeQualifierList(0);
                                            }
                                        }
                                        this.state = 752;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                                            {
                                                this.state = 751;
                                                this.assignmentExpression();
                                            }
                                        }
                                        this.state = 754;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 755;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 756;
                                        this.match(CParser.LeftBracket);
                                        this.state = 757;
                                        this.match(CParser.Static);
                                        this.state = 759;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                                            {
                                                this.state = 758;
                                                this.typeQualifierList(0);
                                            }
                                        }
                                        this.state = 761;
                                        this.assignmentExpression();
                                        this.state = 762;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 764;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 765;
                                        this.match(CParser.LeftBracket);
                                        this.state = 766;
                                        this.typeQualifierList(0);
                                        this.state = 767;
                                        this.match(CParser.Static);
                                        this.state = 768;
                                        this.assignmentExpression();
                                        this.state = 769;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 771;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 772;
                                        this.match(CParser.LeftBracket);
                                        this.state = 774;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                                            {
                                                this.state = 773;
                                                this.typeQualifierList(0);
                                            }
                                        }
                                        this.state = 776;
                                        this.match(CParser.Star);
                                        this.state = 777;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 778;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 779;
                                        this.match(CParser.LeftParen);
                                        this.state = 780;
                                        this.parameterTypeList();
                                        this.state = 781;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 783;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 784;
                                        this.match(CParser.LeftParen);
                                        this.state = 786;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CParser.Identifier) {
                                            {
                                                this.state = 785;
                                                this.identifierList(0);
                                            }
                                        }
                                        this.state = 788;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 793;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.gccDeclaratorExtension = function () {
        var _localctx = new GccDeclaratorExtensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, CParser.RULE_gccDeclaratorExtension);
        var _la;
        try {
            this.state = 803;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.T__10:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 794;
                        this.match(CParser.T__10);
                        this.state = 795;
                        this.match(CParser.LeftParen);
                        this.state = 797;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 796;
                                    this.match(CParser.StringLiteral);
                                }
                            }
                            this.state = 799;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === CParser.StringLiteral);
                        this.state = 801;
                        this.match(CParser.RightParen);
                    }
                    break;
                case CParser.T__11:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 802;
                        this.gccAttributeSpecifier();
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
    CParser.prototype.gccAttributeSpecifier = function () {
        var _localctx = new GccAttributeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, CParser.RULE_gccAttributeSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 805;
                this.match(CParser.T__11);
                this.state = 806;
                this.match(CParser.LeftParen);
                this.state = 807;
                this.match(CParser.LeftParen);
                this.state = 808;
                this.gccAttributeList();
                this.state = 809;
                this.match(CParser.RightParen);
                this.state = 810;
                this.match(CParser.RightParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.gccAttributeList = function () {
        var _localctx = new GccAttributeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, CParser.RULE_gccAttributeList);
        var _la;
        try {
            this.state = 821;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 812;
                        this.gccAttribute();
                        this.state = 817;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CParser.Comma) {
                            {
                                {
                                    this.state = 813;
                                    this.match(CParser.Comma);
                                    this.state = 814;
                                    this.gccAttribute();
                                }
                            }
                            this.state = 819;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    // tslint:disable-next-line:no-empty
                    {
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
    CParser.prototype.gccAttribute = function () {
        var _localctx = new GccAttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, CParser.RULE_gccAttribute);
        var _la;
        try {
            this.state = 832;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.T__0:
                case CParser.T__1:
                case CParser.T__2:
                case CParser.T__3:
                case CParser.T__4:
                case CParser.T__5:
                case CParser.T__6:
                case CParser.T__7:
                case CParser.T__8:
                case CParser.T__9:
                case CParser.T__10:
                case CParser.T__11:
                case CParser.T__12:
                case CParser.T__13:
                case CParser.Auto:
                case CParser.Break:
                case CParser.Case:
                case CParser.Char:
                case CParser.Const:
                case CParser.Continue:
                case CParser.Default:
                case CParser.Do:
                case CParser.Double:
                case CParser.Else:
                case CParser.Enum:
                case CParser.Extern:
                case CParser.Float:
                case CParser.For:
                case CParser.Goto:
                case CParser.If:
                case CParser.Inline:
                case CParser.Int:
                case CParser.Long:
                case CParser.Register:
                case CParser.Restrict:
                case CParser.Return:
                case CParser.Short:
                case CParser.Signed:
                case CParser.Sizeof:
                case CParser.Static:
                case CParser.Struct:
                case CParser.Switch:
                case CParser.Typedef:
                case CParser.Union:
                case CParser.Unsigned:
                case CParser.Void:
                case CParser.Volatile:
                case CParser.While:
                case CParser.Alignas:
                case CParser.Alignof:
                case CParser.Atomic:
                case CParser.Bool:
                case CParser.Complex:
                case CParser.Generic:
                case CParser.Imaginary:
                case CParser.Noreturn:
                case CParser.StaticAssert:
                case CParser.ThreadLocal:
                case CParser.LeftBracket:
                case CParser.RightBracket:
                case CParser.LeftBrace:
                case CParser.RightBrace:
                case CParser.Less:
                case CParser.LessEqual:
                case CParser.Greater:
                case CParser.GreaterEqual:
                case CParser.LeftShift:
                case CParser.RightShift:
                case CParser.Plus:
                case CParser.PlusPlus:
                case CParser.Minus:
                case CParser.MinusMinus:
                case CParser.Star:
                case CParser.Div:
                case CParser.Mod:
                case CParser.And:
                case CParser.Or:
                case CParser.AndAnd:
                case CParser.OrOr:
                case CParser.Caret:
                case CParser.Not:
                case CParser.Tilde:
                case CParser.Question:
                case CParser.Colon:
                case CParser.Semi:
                case CParser.Assign:
                case CParser.StarAssign:
                case CParser.DivAssign:
                case CParser.ModAssign:
                case CParser.PlusAssign:
                case CParser.MinusAssign:
                case CParser.LeftShiftAssign:
                case CParser.RightShiftAssign:
                case CParser.AndAssign:
                case CParser.XorAssign:
                case CParser.OrAssign:
                case CParser.Equal:
                case CParser.NotEqual:
                case CParser.Arrow:
                case CParser.Dot:
                case CParser.Ellipsis:
                case CParser.Identifier:
                case CParser.Constant:
                case CParser.DigitSequence:
                case CParser.StringLiteral:
                case CParser.ComplexDefine:
                case CParser.IncludeDirective:
                case CParser.AsmBlock:
                case CParser.LineAfterPreprocessing:
                case CParser.LineDirective:
                case CParser.PragmaDirective:
                case CParser.Whitespace:
                case CParser.Newline:
                case CParser.BlockComment:
                case CParser.LineComment:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 823;
                        _la = this._input.LA(1);
                        if (_la <= 0 || (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CParser.LeftParen - 59)) | (1 << (CParser.RightParen - 59)) | (1 << (CParser.Comma - 59)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 829;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.LeftParen) {
                            {
                                this.state = 824;
                                this.match(CParser.LeftParen);
                                this.state = 826;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                                    {
                                        this.state = 825;
                                        this.argumentExpressionList(0);
                                    }
                                }
                                this.state = 828;
                                this.match(CParser.RightParen);
                            }
                        }
                    }
                    break;
                case CParser.RightParen:
                case CParser.Comma:
                    this.enterOuterAlt(_localctx, 2);
                    // tslint:disable-next-line:no-empty
                    {
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
    CParser.prototype.nestedParenthesesBlock = function () {
        var _localctx = new NestedParenthesesBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, CParser.RULE_nestedParenthesesBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 841;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Else) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.Goto) | (1 << CParser.If) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Return - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Sizeof - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Switch - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Imaginary - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBracket - 32)) | (1 << (CParser.RightBracket - 32)) | (1 << (CParser.LeftBrace - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.RightBrace - 64)) | (1 << (CParser.Less - 64)) | (1 << (CParser.LessEqual - 64)) | (1 << (CParser.Greater - 64)) | (1 << (CParser.GreaterEqual - 64)) | (1 << (CParser.LeftShift - 64)) | (1 << (CParser.RightShift - 64)) | (1 << (CParser.Plus - 64)) | (1 << (CParser.PlusPlus - 64)) | (1 << (CParser.Minus - 64)) | (1 << (CParser.MinusMinus - 64)) | (1 << (CParser.Star - 64)) | (1 << (CParser.Div - 64)) | (1 << (CParser.Mod - 64)) | (1 << (CParser.And - 64)) | (1 << (CParser.Or - 64)) | (1 << (CParser.AndAnd - 64)) | (1 << (CParser.OrOr - 64)) | (1 << (CParser.Caret - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Question - 64)) | (1 << (CParser.Colon - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Comma - 64)) | (1 << (CParser.Assign - 64)) | (1 << (CParser.StarAssign - 64)) | (1 << (CParser.DivAssign - 64)) | (1 << (CParser.ModAssign - 64)) | (1 << (CParser.PlusAssign - 64)) | (1 << (CParser.MinusAssign - 64)) | (1 << (CParser.LeftShiftAssign - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CParser.RightShiftAssign - 96)) | (1 << (CParser.AndAssign - 96)) | (1 << (CParser.XorAssign - 96)) | (1 << (CParser.OrAssign - 96)) | (1 << (CParser.Equal - 96)) | (1 << (CParser.NotEqual - 96)) | (1 << (CParser.Arrow - 96)) | (1 << (CParser.Dot - 96)) | (1 << (CParser.Ellipsis - 96)) | (1 << (CParser.Identifier - 96)) | (1 << (CParser.Constant - 96)) | (1 << (CParser.DigitSequence - 96)) | (1 << (CParser.StringLiteral - 96)) | (1 << (CParser.ComplexDefine - 96)) | (1 << (CParser.IncludeDirective - 96)) | (1 << (CParser.AsmBlock - 96)) | (1 << (CParser.LineAfterPreprocessing - 96)) | (1 << (CParser.LineDirective - 96)) | (1 << (CParser.PragmaDirective - 96)) | (1 << (CParser.Whitespace - 96)) | (1 << (CParser.Newline - 96)) | (1 << (CParser.BlockComment - 96)) | (1 << (CParser.LineComment - 96)))) !== 0)) {
                    {
                        this.state = 839;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CParser.T__0:
                            case CParser.T__1:
                            case CParser.T__2:
                            case CParser.T__3:
                            case CParser.T__4:
                            case CParser.T__5:
                            case CParser.T__6:
                            case CParser.T__7:
                            case CParser.T__8:
                            case CParser.T__9:
                            case CParser.T__10:
                            case CParser.T__11:
                            case CParser.T__12:
                            case CParser.T__13:
                            case CParser.Auto:
                            case CParser.Break:
                            case CParser.Case:
                            case CParser.Char:
                            case CParser.Const:
                            case CParser.Continue:
                            case CParser.Default:
                            case CParser.Do:
                            case CParser.Double:
                            case CParser.Else:
                            case CParser.Enum:
                            case CParser.Extern:
                            case CParser.Float:
                            case CParser.For:
                            case CParser.Goto:
                            case CParser.If:
                            case CParser.Inline:
                            case CParser.Int:
                            case CParser.Long:
                            case CParser.Register:
                            case CParser.Restrict:
                            case CParser.Return:
                            case CParser.Short:
                            case CParser.Signed:
                            case CParser.Sizeof:
                            case CParser.Static:
                            case CParser.Struct:
                            case CParser.Switch:
                            case CParser.Typedef:
                            case CParser.Union:
                            case CParser.Unsigned:
                            case CParser.Void:
                            case CParser.Volatile:
                            case CParser.While:
                            case CParser.Alignas:
                            case CParser.Alignof:
                            case CParser.Atomic:
                            case CParser.Bool:
                            case CParser.Complex:
                            case CParser.Generic:
                            case CParser.Imaginary:
                            case CParser.Noreturn:
                            case CParser.StaticAssert:
                            case CParser.ThreadLocal:
                            case CParser.LeftBracket:
                            case CParser.RightBracket:
                            case CParser.LeftBrace:
                            case CParser.RightBrace:
                            case CParser.Less:
                            case CParser.LessEqual:
                            case CParser.Greater:
                            case CParser.GreaterEqual:
                            case CParser.LeftShift:
                            case CParser.RightShift:
                            case CParser.Plus:
                            case CParser.PlusPlus:
                            case CParser.Minus:
                            case CParser.MinusMinus:
                            case CParser.Star:
                            case CParser.Div:
                            case CParser.Mod:
                            case CParser.And:
                            case CParser.Or:
                            case CParser.AndAnd:
                            case CParser.OrOr:
                            case CParser.Caret:
                            case CParser.Not:
                            case CParser.Tilde:
                            case CParser.Question:
                            case CParser.Colon:
                            case CParser.Semi:
                            case CParser.Comma:
                            case CParser.Assign:
                            case CParser.StarAssign:
                            case CParser.DivAssign:
                            case CParser.ModAssign:
                            case CParser.PlusAssign:
                            case CParser.MinusAssign:
                            case CParser.LeftShiftAssign:
                            case CParser.RightShiftAssign:
                            case CParser.AndAssign:
                            case CParser.XorAssign:
                            case CParser.OrAssign:
                            case CParser.Equal:
                            case CParser.NotEqual:
                            case CParser.Arrow:
                            case CParser.Dot:
                            case CParser.Ellipsis:
                            case CParser.Identifier:
                            case CParser.Constant:
                            case CParser.DigitSequence:
                            case CParser.StringLiteral:
                            case CParser.ComplexDefine:
                            case CParser.IncludeDirective:
                            case CParser.AsmBlock:
                            case CParser.LineAfterPreprocessing:
                            case CParser.LineDirective:
                            case CParser.PragmaDirective:
                            case CParser.Whitespace:
                            case CParser.Newline:
                            case CParser.BlockComment:
                            case CParser.LineComment:
                                {
                                    this.state = 834;
                                    _la = this._input.LA(1);
                                    if (_la <= 0 || (_la === CParser.LeftParen || _la === CParser.RightParen)) {
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
                            case CParser.LeftParen:
                                {
                                    this.state = 835;
                                    this.match(CParser.LeftParen);
                                    this.state = 836;
                                    this.nestedParenthesesBlock();
                                    this.state = 837;
                                    this.match(CParser.RightParen);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 843;
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
    CParser.prototype.pointer = function () {
        var _localctx = new PointerContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, CParser.RULE_pointer);
        var _la;
        try {
            this.state = 862;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 844;
                        this.match(CParser.Star);
                        this.state = 846;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                            case 1:
                                {
                                    this.state = 845;
                                    this.typeQualifierList(0);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 848;
                        this.match(CParser.Star);
                        this.state = 850;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                            {
                                this.state = 849;
                                this.typeQualifierList(0);
                            }
                        }
                        this.state = 852;
                        this.pointer();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 853;
                        this.match(CParser.Caret);
                        this.state = 855;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                            case 1:
                                {
                                    this.state = 854;
                                    this.typeQualifierList(0);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 857;
                        this.match(CParser.Caret);
                        this.state = 859;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                            {
                                this.state = 858;
                                this.typeQualifierList(0);
                            }
                        }
                        this.state = 861;
                        this.pointer();
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
    CParser.prototype.typeQualifierList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new TypeQualifierListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 110;
        this.enterRecursionRule(_localctx, 110, CParser.RULE_typeQualifierList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 865;
                    this.typeQualifier();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 871;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeQualifierListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_typeQualifierList);
                                this.state = 867;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 868;
                                this.typeQualifier();
                            }
                        }
                    }
                    this.state = 873;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.parameterTypeList = function () {
        var _localctx = new ParameterTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, CParser.RULE_parameterTypeList);
        try {
            this.state = 879;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 874;
                        this.parameterList(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 875;
                        this.parameterList(0);
                        this.state = 876;
                        this.match(CParser.Comma);
                        this.state = 877;
                        this.match(CParser.Ellipsis);
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
    CParser.prototype.parameterList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ParameterListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 114;
        this.enterRecursionRule(_localctx, 114, CParser.RULE_parameterList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 882;
                    this.parameterDeclaration();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 889;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ParameterListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_parameterList);
                                this.state = 884;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 885;
                                this.match(CParser.Comma);
                                this.state = 886;
                                this.parameterDeclaration();
                            }
                        }
                    }
                    this.state = 891;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.parameterDeclaration = function () {
        var _localctx = new ParameterDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, CParser.RULE_parameterDeclaration);
        try {
            this.state = 899;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 892;
                        this.declarationSpecifiers();
                        this.state = 893;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 895;
                        this.declarationSpecifiers2();
                        this.state = 897;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                            case 1:
                                {
                                    this.state = 896;
                                    this.abstractDeclarator();
                                }
                                break;
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
    CParser.prototype.identifierList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new IdentifierListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 118;
        this.enterRecursionRule(_localctx, 118, CParser.RULE_identifierList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 902;
                    this.match(CParser.Identifier);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 909;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new IdentifierListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_identifierList);
                                this.state = 904;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 905;
                                this.match(CParser.Comma);
                                this.state = 906;
                                this.match(CParser.Identifier);
                            }
                        }
                    }
                    this.state = 911;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.typeName = function () {
        var _localctx = new TypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, CParser.RULE_typeName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 912;
                this.specifierQualifierList();
                this.state = 914;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CParser.LeftParen - 59)) | (1 << (CParser.LeftBracket - 59)) | (1 << (CParser.Star - 59)) | (1 << (CParser.Caret - 59)))) !== 0)) {
                    {
                        this.state = 913;
                        this.abstractDeclarator();
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
    CParser.prototype.abstractDeclarator = function () {
        var _localctx = new AbstractDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, CParser.RULE_abstractDeclarator);
        var _la;
        try {
            var _alt = void 0;
            this.state = 927;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 916;
                        this.pointer();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 918;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Star || _la === CParser.Caret) {
                            {
                                this.state = 917;
                                this.pointer();
                            }
                        }
                        this.state = 920;
                        this.directAbstractDeclarator(0);
                        this.state = 924;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 921;
                                        this.gccDeclaratorExtension();
                                    }
                                }
                            }
                            this.state = 926;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
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
    CParser.prototype.directAbstractDeclarator = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new DirectAbstractDeclaratorContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 124;
        this.enterRecursionRule(_localctx, 124, CParser.RULE_directAbstractDeclarator, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 975;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        {
                            this.state = 930;
                            this.match(CParser.LeftParen);
                            this.state = 931;
                            this.abstractDeclarator();
                            this.state = 932;
                            this.match(CParser.RightParen);
                            this.state = 936;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 933;
                                            this.gccDeclaratorExtension();
                                        }
                                    }
                                }
                                this.state = 938;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 939;
                            this.match(CParser.LeftBracket);
                            this.state = 941;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                                {
                                    this.state = 940;
                                    this.typeQualifierList(0);
                                }
                            }
                            this.state = 944;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                                {
                                    this.state = 943;
                                    this.assignmentExpression();
                                }
                            }
                            this.state = 946;
                            this.match(CParser.RightBracket);
                        }
                        break;
                    case 3:
                        {
                            this.state = 947;
                            this.match(CParser.LeftBracket);
                            this.state = 948;
                            this.match(CParser.Static);
                            this.state = 950;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                                {
                                    this.state = 949;
                                    this.typeQualifierList(0);
                                }
                            }
                            this.state = 952;
                            this.assignmentExpression();
                            this.state = 953;
                            this.match(CParser.RightBracket);
                        }
                        break;
                    case 4:
                        {
                            this.state = 955;
                            this.match(CParser.LeftBracket);
                            this.state = 956;
                            this.typeQualifierList(0);
                            this.state = 957;
                            this.match(CParser.Static);
                            this.state = 958;
                            this.assignmentExpression();
                            this.state = 959;
                            this.match(CParser.RightBracket);
                        }
                        break;
                    case 5:
                        {
                            this.state = 961;
                            this.match(CParser.LeftBracket);
                            this.state = 962;
                            this.match(CParser.Star);
                            this.state = 963;
                            this.match(CParser.RightBracket);
                        }
                        break;
                    case 6:
                        {
                            this.state = 964;
                            this.match(CParser.LeftParen);
                            this.state = 966;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__11) | (1 << CParser.Auto) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || _la === CParser.Identifier) {
                                {
                                    this.state = 965;
                                    this.parameterTypeList();
                                }
                            }
                            this.state = 968;
                            this.match(CParser.RightParen);
                            this.state = 972;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 969;
                                            this.gccDeclaratorExtension();
                                        }
                                    }
                                }
                                this.state = 974;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                            }
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1020;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1018;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 977;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 978;
                                        this.match(CParser.LeftBracket);
                                        this.state = 980;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                                            {
                                                this.state = 979;
                                                this.typeQualifierList(0);
                                            }
                                        }
                                        this.state = 983;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                                            {
                                                this.state = 982;
                                                this.assignmentExpression();
                                            }
                                        }
                                        this.state = 985;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 986;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 987;
                                        this.match(CParser.LeftBracket);
                                        this.state = 988;
                                        this.match(CParser.Static);
                                        this.state = 990;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.Restrict - 35)) | (1 << (CParser.Volatile - 35)) | (1 << (CParser.Atomic - 35)))) !== 0)) {
                                            {
                                                this.state = 989;
                                                this.typeQualifierList(0);
                                            }
                                        }
                                        this.state = 992;
                                        this.assignmentExpression();
                                        this.state = 993;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 995;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 996;
                                        this.match(CParser.LeftBracket);
                                        this.state = 997;
                                        this.typeQualifierList(0);
                                        this.state = 998;
                                        this.match(CParser.Static);
                                        this.state = 999;
                                        this.assignmentExpression();
                                        this.state = 1000;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 1002;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 1003;
                                        this.match(CParser.LeftBracket);
                                        this.state = 1004;
                                        this.match(CParser.Star);
                                        this.state = 1005;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 1006;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 1007;
                                        this.match(CParser.LeftParen);
                                        this.state = 1009;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__11) | (1 << CParser.Auto) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || _la === CParser.Identifier) {
                                            {
                                                this.state = 1008;
                                                this.parameterTypeList();
                                            }
                                        }
                                        this.state = 1011;
                                        this.match(CParser.RightParen);
                                        this.state = 1015;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1012;
                                                        this.gccDeclaratorExtension();
                                                    }
                                                }
                                            }
                                            this.state = 1017;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1022;
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.typedefName = function () {
        var _localctx = new TypedefNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, CParser.RULE_typedefName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1023;
                this.match(CParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.initializer = function () {
        var _localctx = new InitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, CParser.RULE_initializer);
        try {
            this.state = 1035;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1025;
                        this.assignmentExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1026;
                        this.match(CParser.LeftBrace);
                        this.state = 1027;
                        this.initializerList(0);
                        this.state = 1028;
                        this.match(CParser.RightBrace);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1030;
                        this.match(CParser.LeftBrace);
                        this.state = 1031;
                        this.initializerList(0);
                        this.state = 1032;
                        this.match(CParser.Comma);
                        this.state = 1033;
                        this.match(CParser.RightBrace);
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
    CParser.prototype.initializerList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new InitializerListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 130;
        this.enterRecursionRule(_localctx, 130, CParser.RULE_initializerList, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1039;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === CParser.LeftBracket || _la === CParser.Dot) {
                        {
                            this.state = 1038;
                            this.designation();
                        }
                    }
                    this.state = 1041;
                    this.initializer();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1051;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new InitializerListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_initializerList);
                                this.state = 1043;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1044;
                                this.match(CParser.Comma);
                                this.state = 1046;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === CParser.LeftBracket || _la === CParser.Dot) {
                                    {
                                        this.state = 1045;
                                        this.designation();
                                    }
                                }
                                this.state = 1048;
                                this.initializer();
                            }
                        }
                    }
                    this.state = 1053;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.designation = function () {
        var _localctx = new DesignationContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, CParser.RULE_designation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1054;
                this.designatorList(0);
                this.state = 1055;
                this.match(CParser.Assign);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.designatorList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new DesignatorListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 134;
        this.enterRecursionRule(_localctx, 134, CParser.RULE_designatorList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1058;
                    this.designator();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1064;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new DesignatorListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_designatorList);
                                this.state = 1060;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1061;
                                this.designator();
                            }
                        }
                    }
                    this.state = 1066;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.designator = function () {
        var _localctx = new DesignatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, CParser.RULE_designator);
        try {
            this.state = 1073;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.LeftBracket:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1067;
                        this.match(CParser.LeftBracket);
                        this.state = 1068;
                        this.constantExpression();
                        this.state = 1069;
                        this.match(CParser.RightBracket);
                    }
                    break;
                case CParser.Dot:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1071;
                        this.match(CParser.Dot);
                        this.state = 1072;
                        this.match(CParser.Identifier);
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
    CParser.prototype.staticAssertDeclaration = function () {
        var _localctx = new StaticAssertDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, CParser.RULE_staticAssertDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1075;
                this.match(CParser.StaticAssert);
                this.state = 1076;
                this.match(CParser.LeftParen);
                this.state = 1077;
                this.constantExpression();
                this.state = 1078;
                this.match(CParser.Comma);
                this.state = 1080;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1079;
                            this.match(CParser.StringLiteral);
                        }
                    }
                    this.state = 1082;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === CParser.StringLiteral);
                this.state = 1084;
                this.match(CParser.RightParen);
                this.state = 1085;
                this.match(CParser.Semi);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, CParser.RULE_statement);
        var _la;
        try {
            this.state = 1124;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1087;
                        this.labeledStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1088;
                        this.compoundStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1089;
                        this.expressionStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1090;
                        this.selectionStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1091;
                        this.iterationStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1092;
                        this.jumpStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1093;
                        _la = this._input.LA(1);
                        if (!(_la === CParser.T__10 || _la === CParser.T__12)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1094;
                        _la = this._input.LA(1);
                        if (!(_la === CParser.T__13 || _la === CParser.Volatile)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1095;
                        this.match(CParser.LeftParen);
                        this.state = 1104;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                            {
                                this.state = 1096;
                                this.logicalOrExpression(0);
                                this.state = 1101;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === CParser.Comma) {
                                    {
                                        {
                                            this.state = 1097;
                                            this.match(CParser.Comma);
                                            this.state = 1098;
                                            this.logicalOrExpression(0);
                                        }
                                    }
                                    this.state = 1103;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1119;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CParser.Colon) {
                            {
                                {
                                    this.state = 1106;
                                    this.match(CParser.Colon);
                                    this.state = 1115;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                                        {
                                            this.state = 1107;
                                            this.logicalOrExpression(0);
                                            this.state = 1112;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === CParser.Comma) {
                                                {
                                                    {
                                                        this.state = 1108;
                                                        this.match(CParser.Comma);
                                                        this.state = 1109;
                                                        this.logicalOrExpression(0);
                                                    }
                                                }
                                                this.state = 1114;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 1121;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1122;
                        this.match(CParser.RightParen);
                        this.state = 1123;
                        this.match(CParser.Semi);
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
    CParser.prototype.labeledStatement = function () {
        var _localctx = new LabeledStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, CParser.RULE_labeledStatement);
        try {
            this.state = 1137;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1126;
                        this.match(CParser.Identifier);
                        this.state = 1127;
                        this.match(CParser.Colon);
                        this.state = 1128;
                        this.statement();
                    }
                    break;
                case CParser.Case:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1129;
                        this.match(CParser.Case);
                        this.state = 1130;
                        this.constantExpression();
                        this.state = 1131;
                        this.match(CParser.Colon);
                        this.state = 1132;
                        this.statement();
                    }
                    break;
                case CParser.Default:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1134;
                        this.match(CParser.Default);
                        this.state = 1135;
                        this.match(CParser.Colon);
                        this.state = 1136;
                        this.statement();
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
    CParser.prototype.compoundStatement = function () {
        var _localctx = new CompoundStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, CParser.RULE_compoundStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1139;
                this.match(CParser.LeftBrace);
                this.state = 1141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.Goto) | (1 << CParser.If) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Return - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Sizeof - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Switch - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBrace - 32)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)) | (1 << (CParser.Semi - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                    {
                        this.state = 1140;
                        this.blockItemList(0);
                    }
                }
                this.state = 1143;
                this.match(CParser.RightBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.blockItemList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new BlockItemListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 146;
        this.enterRecursionRule(_localctx, 146, CParser.RULE_blockItemList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1146;
                    this.blockItem();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1152;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BlockItemListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_blockItemList);
                                this.state = 1148;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1149;
                                this.blockItem();
                            }
                        }
                    }
                    this.state = 1154;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.blockItem = function () {
        var _localctx = new BlockItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, CParser.RULE_blockItem);
        try {
            this.state = 1157;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1155;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1156;
                        this.declaration();
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
    CParser.prototype.expressionStatement = function () {
        var _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, CParser.RULE_expressionStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                    {
                        this.state = 1159;
                        this.expression(0);
                    }
                }
                this.state = 1162;
                this.match(CParser.Semi);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.selectionStatement = function () {
        var _localctx = new SelectionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, CParser.RULE_selectionStatement);
        try {
            this.state = 1179;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.If:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1164;
                        this.match(CParser.If);
                        this.state = 1165;
                        this.match(CParser.LeftParen);
                        this.state = 1166;
                        this.expression(0);
                        this.state = 1167;
                        this.match(CParser.RightParen);
                        this.state = 1168;
                        this.statement();
                        this.state = 1171;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1169;
                                    this.match(CParser.Else);
                                    this.state = 1170;
                                    this.statement();
                                }
                                break;
                        }
                    }
                    break;
                case CParser.Switch:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1173;
                        this.match(CParser.Switch);
                        this.state = 1174;
                        this.match(CParser.LeftParen);
                        this.state = 1175;
                        this.expression(0);
                        this.state = 1176;
                        this.match(CParser.RightParen);
                        this.state = 1177;
                        this.statement();
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
    CParser.prototype.iterationStatement = function () {
        var _localctx = new IterationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, CParser.RULE_iterationStatement);
        try {
            this.state = 1201;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.While:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1181;
                        this.match(CParser.While);
                        this.state = 1182;
                        this.match(CParser.LeftParen);
                        this.state = 1183;
                        this.expression(0);
                        this.state = 1184;
                        this.match(CParser.RightParen);
                        this.state = 1185;
                        this.statement();
                    }
                    break;
                case CParser.Do:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1187;
                        this.match(CParser.Do);
                        this.state = 1188;
                        this.statement();
                        this.state = 1189;
                        this.match(CParser.While);
                        this.state = 1190;
                        this.match(CParser.LeftParen);
                        this.state = 1191;
                        this.expression(0);
                        this.state = 1192;
                        this.match(CParser.RightParen);
                        this.state = 1193;
                        this.match(CParser.Semi);
                    }
                    break;
                case CParser.For:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1195;
                        this.match(CParser.For);
                        this.state = 1196;
                        this.match(CParser.LeftParen);
                        this.state = 1197;
                        this.forCondition();
                        this.state = 1198;
                        this.match(CParser.RightParen);
                        this.state = 1199;
                        this.statement();
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
    CParser.prototype.forCondition = function () {
        var _localctx = new ForConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, CParser.RULE_forCondition);
        var _la;
        try {
            this.state = 1223;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1203;
                        this.forDeclaration();
                        this.state = 1204;
                        this.match(CParser.Semi);
                        this.state = 1206;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                            {
                                this.state = 1205;
                                this.forExpression(0);
                            }
                        }
                        this.state = 1208;
                        this.match(CParser.Semi);
                        this.state = 1210;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                            {
                                this.state = 1209;
                                this.forExpression(0);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1213;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                            {
                                this.state = 1212;
                                this.expression(0);
                            }
                        }
                        this.state = 1215;
                        this.match(CParser.Semi);
                        this.state = 1217;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                            {
                                this.state = 1216;
                                this.forExpression(0);
                            }
                        }
                        this.state = 1219;
                        this.match(CParser.Semi);
                        this.state = 1221;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                            {
                                this.state = 1220;
                                this.forExpression(0);
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
    CParser.prototype.forDeclaration = function () {
        var _localctx = new ForDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, CParser.RULE_forDeclaration);
        try {
            this.state = 1229;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1225;
                        this.declarationSpecifiers();
                        this.state = 1226;
                        this.initDeclaratorList(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1228;
                        this.declarationSpecifiers();
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
    CParser.prototype.forExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ForExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 160;
        this.enterRecursionRule(_localctx, 160, CParser.RULE_forExpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1232;
                    this.assignmentExpression();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1239;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ForExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_forExpression);
                                this.state = 1234;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1235;
                                this.match(CParser.Comma);
                                this.state = 1236;
                                this.assignmentExpression();
                            }
                        }
                    }
                    this.state = 1241;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.jumpStatement = function () {
        var _localctx = new JumpStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, CParser.RULE_jumpStatement);
        var _la;
        try {
            this.state = 1258;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1242;
                        this.match(CParser.Goto);
                        this.state = 1243;
                        this.match(CParser.Identifier);
                        this.state = 1244;
                        this.match(CParser.Semi);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1245;
                        this.match(CParser.Continue);
                        this.state = 1246;
                        this.match(CParser.Semi);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1247;
                        this.match(CParser.Break);
                        this.state = 1248;
                        this.match(CParser.Semi);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1249;
                        this.match(CParser.Return);
                        this.state = 1251;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CParser.Sizeof - 39)) | (1 << (CParser.Alignof - 39)) | (1 << (CParser.Generic - 39)) | (1 << (CParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CParser.Plus - 71)) | (1 << (CParser.PlusPlus - 71)) | (1 << (CParser.Minus - 71)) | (1 << (CParser.MinusMinus - 71)) | (1 << (CParser.Star - 71)) | (1 << (CParser.And - 71)) | (1 << (CParser.AndAnd - 71)) | (1 << (CParser.Not - 71)) | (1 << (CParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CParser.Identifier - 105)) | (1 << (CParser.Constant - 105)) | (1 << (CParser.DigitSequence - 105)) | (1 << (CParser.StringLiteral - 105)))) !== 0)) {
                            {
                                this.state = 1250;
                                this.expression(0);
                            }
                        }
                        this.state = 1253;
                        this.match(CParser.Semi);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1254;
                        this.match(CParser.Goto);
                        this.state = 1255;
                        this.unaryExpression();
                        this.state = 1256;
                        this.match(CParser.Semi);
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
    CParser.prototype.compilationUnit = function () {
        var _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, CParser.RULE_compilationUnit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__11) | (1 << CParser.Auto) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)) | (1 << (CParser.LeftParen - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CParser.Star - 75)) | (1 << (CParser.Caret - 75)) | (1 << (CParser.Semi - 75)) | (1 << (CParser.Identifier - 75)))) !== 0)) {
                    {
                        this.state = 1260;
                        this.translationUnit(0);
                    }
                }
                this.state = 1263;
                this.match(CParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.translationUnit = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new TranslationUnitContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 166;
        this.enterRecursionRule(_localctx, 166, CParser.RULE_translationUnit, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1266;
                    this.externalDeclaration();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1272;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TranslationUnitContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_translationUnit);
                                this.state = 1268;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1269;
                                this.externalDeclaration();
                            }
                        }
                    }
                    this.state = 1274;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.externalDeclaration = function () {
        var _localctx = new ExternalDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, CParser.RULE_externalDeclaration);
        try {
            this.state = 1278;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1275;
                        this.functionDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1276;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1277;
                        this.match(CParser.Semi);
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
    CParser.prototype.functionDefinition = function () {
        var _localctx = new FunctionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, CParser.RULE_functionDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1281;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                    case 1:
                        {
                            this.state = 1280;
                            this.declarationSpecifiers();
                        }
                        break;
                }
                this.state = 1283;
                this.declarator();
                this.state = 1285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__11) | (1 << CParser.Auto) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Int - 32)) | (1 << (CParser.Long - 32)) | (1 << (CParser.Register - 32)) | (1 << (CParser.Restrict - 32)) | (1 << (CParser.Short - 32)) | (1 << (CParser.Signed - 32)) | (1 << (CParser.Static - 32)) | (1 << (CParser.Struct - 32)) | (1 << (CParser.Typedef - 32)) | (1 << (CParser.Union - 32)) | (1 << (CParser.Unsigned - 32)) | (1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)))) !== 0) || _la === CParser.Identifier) {
                    {
                        this.state = 1284;
                        this.declarationList(0);
                    }
                }
                this.state = 1287;
                this.compoundStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.declarationList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new DeclarationListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 172;
        this.enterRecursionRule(_localctx, 172, CParser.RULE_declarationList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1290;
                    this.declaration();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1296;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new DeclarationListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_declarationList);
                                this.state = 1292;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1293;
                                this.declaration();
                            }
                        }
                    }
                    this.state = 1298;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    CParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.genericAssocList_sempred(_localctx, predIndex);
            case 4:
                return this.postfixExpression_sempred(_localctx, predIndex);
            case 5:
                return this.argumentExpressionList_sempred(_localctx, predIndex);
            case 9:
                return this.multiplicativeExpression_sempred(_localctx, predIndex);
            case 10:
                return this.additiveExpression_sempred(_localctx, predIndex);
            case 11:
                return this.shiftExpression_sempred(_localctx, predIndex);
            case 12:
                return this.relationalExpression_sempred(_localctx, predIndex);
            case 13:
                return this.equalityExpression_sempred(_localctx, predIndex);
            case 14:
                return this.andExpression_sempred(_localctx, predIndex);
            case 15:
                return this.exclusiveOrExpression_sempred(_localctx, predIndex);
            case 16:
                return this.inclusiveOrExpression_sempred(_localctx, predIndex);
            case 17:
                return this.logicalAndExpression_sempred(_localctx, predIndex);
            case 18:
                return this.logicalOrExpression_sempred(_localctx, predIndex);
            case 22:
                return this.expression_sempred(_localctx, predIndex);
            case 28:
                return this.initDeclaratorList_sempred(_localctx, predIndex);
            case 31:
                return this.typeSpecifier_sempred(_localctx, predIndex);
            case 34:
                return this.structDeclarationList_sempred(_localctx, predIndex);
            case 37:
                return this.structDeclaratorList_sempred(_localctx, predIndex);
            case 40:
                return this.enumeratorList_sempred(_localctx, predIndex);
            case 48:
                return this.directDeclarator_sempred(_localctx, predIndex);
            case 55:
                return this.typeQualifierList_sempred(_localctx, predIndex);
            case 57:
                return this.parameterList_sempred(_localctx, predIndex);
            case 59:
                return this.identifierList_sempred(_localctx, predIndex);
            case 62:
                return this.directAbstractDeclarator_sempred(_localctx, predIndex);
            case 65:
                return this.initializerList_sempred(_localctx, predIndex);
            case 67:
                return this.designatorList_sempred(_localctx, predIndex);
            case 73:
                return this.blockItemList_sempred(_localctx, predIndex);
            case 80:
                return this.forExpression_sempred(_localctx, predIndex);
            case 83:
                return this.translationUnit_sempred(_localctx, predIndex);
            case 86:
                return this.declarationList_sempred(_localctx, predIndex);
        }
        return true;
    };
    CParser.prototype.genericAssocList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.postfixExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 10);
            case 2:
                return this.precpred(this._ctx, 9);
            case 3:
                return this.precpred(this._ctx, 8);
            case 4:
                return this.precpred(this._ctx, 7);
            case 5:
                return this.precpred(this._ctx, 6);
            case 6:
                return this.precpred(this._ctx, 5);
        }
        return true;
    };
    CParser.prototype.argumentExpressionList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 7:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.multiplicativeExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 8:
                return this.precpred(this._ctx, 3);
            case 9:
                return this.precpred(this._ctx, 2);
            case 10:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.additiveExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 11:
                return this.precpred(this._ctx, 2);
            case 12:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.shiftExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 13:
                return this.precpred(this._ctx, 2);
            case 14:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.relationalExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 15:
                return this.precpred(this._ctx, 4);
            case 16:
                return this.precpred(this._ctx, 3);
            case 17:
                return this.precpred(this._ctx, 2);
            case 18:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.equalityExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 19:
                return this.precpred(this._ctx, 2);
            case 20:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.andExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 21:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.exclusiveOrExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 22:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.inclusiveOrExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 23:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.logicalAndExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 24:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.logicalOrExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 25:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 26:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.initDeclaratorList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 27:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.typeSpecifier_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 28:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.structDeclarationList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 29:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.structDeclaratorList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 30:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.enumeratorList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 31:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.directDeclarator_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 32:
                return this.precpred(this._ctx, 8);
            case 33:
                return this.precpred(this._ctx, 7);
            case 34:
                return this.precpred(this._ctx, 6);
            case 35:
                return this.precpred(this._ctx, 5);
            case 36:
                return this.precpred(this._ctx, 4);
            case 37:
                return this.precpred(this._ctx, 3);
        }
        return true;
    };
    CParser.prototype.typeQualifierList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 38:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.parameterList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 39:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.identifierList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 40:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.directAbstractDeclarator_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 41:
                return this.precpred(this._ctx, 5);
            case 42:
                return this.precpred(this._ctx, 4);
            case 43:
                return this.precpred(this._ctx, 3);
            case 44:
                return this.precpred(this._ctx, 2);
            case 45:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.initializerList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 46:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.designatorList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 47:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.blockItemList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 48:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.forExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 49:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.translationUnit_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 50:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CParser.prototype.declarationList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 51:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(CParser, "_ATN", {
        get: function () {
            if (!CParser.__ATN) {
                CParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
            }
            return CParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    CParser.T__0 = 1;
    CParser.T__1 = 2;
    CParser.T__2 = 3;
    CParser.T__3 = 4;
    CParser.T__4 = 5;
    CParser.T__5 = 6;
    CParser.T__6 = 7;
    CParser.T__7 = 8;
    CParser.T__8 = 9;
    CParser.T__9 = 10;
    CParser.T__10 = 11;
    CParser.T__11 = 12;
    CParser.T__12 = 13;
    CParser.T__13 = 14;
    CParser.Auto = 15;
    CParser.Break = 16;
    CParser.Case = 17;
    CParser.Char = 18;
    CParser.Const = 19;
    CParser.Continue = 20;
    CParser.Default = 21;
    CParser.Do = 22;
    CParser.Double = 23;
    CParser.Else = 24;
    CParser.Enum = 25;
    CParser.Extern = 26;
    CParser.Float = 27;
    CParser.For = 28;
    CParser.Goto = 29;
    CParser.If = 30;
    CParser.Inline = 31;
    CParser.Int = 32;
    CParser.Long = 33;
    CParser.Register = 34;
    CParser.Restrict = 35;
    CParser.Return = 36;
    CParser.Short = 37;
    CParser.Signed = 38;
    CParser.Sizeof = 39;
    CParser.Static = 40;
    CParser.Struct = 41;
    CParser.Switch = 42;
    CParser.Typedef = 43;
    CParser.Union = 44;
    CParser.Unsigned = 45;
    CParser.Void = 46;
    CParser.Volatile = 47;
    CParser.While = 48;
    CParser.Alignas = 49;
    CParser.Alignof = 50;
    CParser.Atomic = 51;
    CParser.Bool = 52;
    CParser.Complex = 53;
    CParser.Generic = 54;
    CParser.Imaginary = 55;
    CParser.Noreturn = 56;
    CParser.StaticAssert = 57;
    CParser.ThreadLocal = 58;
    CParser.LeftParen = 59;
    CParser.RightParen = 60;
    CParser.LeftBracket = 61;
    CParser.RightBracket = 62;
    CParser.LeftBrace = 63;
    CParser.RightBrace = 64;
    CParser.Less = 65;
    CParser.LessEqual = 66;
    CParser.Greater = 67;
    CParser.GreaterEqual = 68;
    CParser.LeftShift = 69;
    CParser.RightShift = 70;
    CParser.Plus = 71;
    CParser.PlusPlus = 72;
    CParser.Minus = 73;
    CParser.MinusMinus = 74;
    CParser.Star = 75;
    CParser.Div = 76;
    CParser.Mod = 77;
    CParser.And = 78;
    CParser.Or = 79;
    CParser.AndAnd = 80;
    CParser.OrOr = 81;
    CParser.Caret = 82;
    CParser.Not = 83;
    CParser.Tilde = 84;
    CParser.Question = 85;
    CParser.Colon = 86;
    CParser.Semi = 87;
    CParser.Comma = 88;
    CParser.Assign = 89;
    CParser.StarAssign = 90;
    CParser.DivAssign = 91;
    CParser.ModAssign = 92;
    CParser.PlusAssign = 93;
    CParser.MinusAssign = 94;
    CParser.LeftShiftAssign = 95;
    CParser.RightShiftAssign = 96;
    CParser.AndAssign = 97;
    CParser.XorAssign = 98;
    CParser.OrAssign = 99;
    CParser.Equal = 100;
    CParser.NotEqual = 101;
    CParser.Arrow = 102;
    CParser.Dot = 103;
    CParser.Ellipsis = 104;
    CParser.Identifier = 105;
    CParser.Constant = 106;
    CParser.DigitSequence = 107;
    CParser.StringLiteral = 108;
    CParser.ComplexDefine = 109;
    CParser.IncludeDirective = 110;
    CParser.AsmBlock = 111;
    CParser.LineAfterPreprocessing = 112;
    CParser.LineDirective = 113;
    CParser.PragmaDirective = 114;
    CParser.Whitespace = 115;
    CParser.Newline = 116;
    CParser.BlockComment = 117;
    CParser.LineComment = 118;
    CParser.RULE_primaryExpression = 0;
    CParser.RULE_genericSelection = 1;
    CParser.RULE_genericAssocList = 2;
    CParser.RULE_genericAssociation = 3;
    CParser.RULE_postfixExpression = 4;
    CParser.RULE_argumentExpressionList = 5;
    CParser.RULE_unaryExpression = 6;
    CParser.RULE_unaryOperator = 7;
    CParser.RULE_castExpression = 8;
    CParser.RULE_multiplicativeExpression = 9;
    CParser.RULE_additiveExpression = 10;
    CParser.RULE_shiftExpression = 11;
    CParser.RULE_relationalExpression = 12;
    CParser.RULE_equalityExpression = 13;
    CParser.RULE_andExpression = 14;
    CParser.RULE_exclusiveOrExpression = 15;
    CParser.RULE_inclusiveOrExpression = 16;
    CParser.RULE_logicalAndExpression = 17;
    CParser.RULE_logicalOrExpression = 18;
    CParser.RULE_conditionalExpression = 19;
    CParser.RULE_assignmentExpression = 20;
    CParser.RULE_assignmentOperator = 21;
    CParser.RULE_expression = 22;
    CParser.RULE_constantExpression = 23;
    CParser.RULE_declaration = 24;
    CParser.RULE_declarationSpecifiers = 25;
    CParser.RULE_declarationSpecifiers2 = 26;
    CParser.RULE_declarationSpecifier = 27;
    CParser.RULE_initDeclaratorList = 28;
    CParser.RULE_initDeclarator = 29;
    CParser.RULE_storageClassSpecifier = 30;
    CParser.RULE_typeSpecifier = 31;
    CParser.RULE_structOrUnionSpecifier = 32;
    CParser.RULE_structOrUnion = 33;
    CParser.RULE_structDeclarationList = 34;
    CParser.RULE_structDeclaration = 35;
    CParser.RULE_specifierQualifierList = 36;
    CParser.RULE_structDeclaratorList = 37;
    CParser.RULE_structDeclarator = 38;
    CParser.RULE_enumSpecifier = 39;
    CParser.RULE_enumeratorList = 40;
    CParser.RULE_enumerator = 41;
    CParser.RULE_enumerationConstant = 42;
    CParser.RULE_atomicTypeSpecifier = 43;
    CParser.RULE_typeQualifier = 44;
    CParser.RULE_functionSpecifier = 45;
    CParser.RULE_alignmentSpecifier = 46;
    CParser.RULE_declarator = 47;
    CParser.RULE_directDeclarator = 48;
    CParser.RULE_gccDeclaratorExtension = 49;
    CParser.RULE_gccAttributeSpecifier = 50;
    CParser.RULE_gccAttributeList = 51;
    CParser.RULE_gccAttribute = 52;
    CParser.RULE_nestedParenthesesBlock = 53;
    CParser.RULE_pointer = 54;
    CParser.RULE_typeQualifierList = 55;
    CParser.RULE_parameterTypeList = 56;
    CParser.RULE_parameterList = 57;
    CParser.RULE_parameterDeclaration = 58;
    CParser.RULE_identifierList = 59;
    CParser.RULE_typeName = 60;
    CParser.RULE_abstractDeclarator = 61;
    CParser.RULE_directAbstractDeclarator = 62;
    CParser.RULE_typedefName = 63;
    CParser.RULE_initializer = 64;
    CParser.RULE_initializerList = 65;
    CParser.RULE_designation = 66;
    CParser.RULE_designatorList = 67;
    CParser.RULE_designator = 68;
    CParser.RULE_staticAssertDeclaration = 69;
    CParser.RULE_statement = 70;
    CParser.RULE_labeledStatement = 71;
    CParser.RULE_compoundStatement = 72;
    CParser.RULE_blockItemList = 73;
    CParser.RULE_blockItem = 74;
    CParser.RULE_expressionStatement = 75;
    CParser.RULE_selectionStatement = 76;
    CParser.RULE_iterationStatement = 77;
    CParser.RULE_forCondition = 78;
    CParser.RULE_forDeclaration = 79;
    CParser.RULE_forExpression = 80;
    CParser.RULE_jumpStatement = 81;
    CParser.RULE_compilationUnit = 82;
    CParser.RULE_translationUnit = 83;
    CParser.RULE_externalDeclaration = 84;
    CParser.RULE_functionDefinition = 85;
    CParser.RULE_declarationList = 86;
    // tslint:disable:no-trailing-whitespace
    CParser.ruleNames = [
        "primaryExpression", "genericSelection", "genericAssocList", "genericAssociation",
        "postfixExpression", "argumentExpressionList", "unaryExpression", "unaryOperator",
        "castExpression", "multiplicativeExpression", "additiveExpression", "shiftExpression",
        "relationalExpression", "equalityExpression", "andExpression", "exclusiveOrExpression",
        "inclusiveOrExpression", "logicalAndExpression", "logicalOrExpression",
        "conditionalExpression", "assignmentExpression", "assignmentOperator",
        "expression", "constantExpression", "declaration", "declarationSpecifiers",
        "declarationSpecifiers2", "declarationSpecifier", "initDeclaratorList",
        "initDeclarator", "storageClassSpecifier", "typeSpecifier", "structOrUnionSpecifier",
        "structOrUnion", "structDeclarationList", "structDeclaration", "specifierQualifierList",
        "structDeclaratorList", "structDeclarator", "enumSpecifier", "enumeratorList",
        "enumerator", "enumerationConstant", "atomicTypeSpecifier", "typeQualifier",
        "functionSpecifier", "alignmentSpecifier", "declarator", "directDeclarator",
        "gccDeclaratorExtension", "gccAttributeSpecifier", "gccAttributeList",
        "gccAttribute", "nestedParenthesesBlock", "pointer", "typeQualifierList",
        "parameterTypeList", "parameterList", "parameterDeclaration", "identifierList",
        "typeName", "abstractDeclarator", "directAbstractDeclarator", "typedefName",
        "initializer", "initializerList", "designation", "designatorList", "designator",
        "staticAssertDeclaration", "statement", "labeledStatement", "compoundStatement",
        "blockItemList", "blockItem", "expressionStatement", "selectionStatement",
        "iterationStatement", "forCondition", "forDeclaration", "forExpression",
        "jumpStatement", "compilationUnit", "translationUnit", "externalDeclaration",
        "functionDefinition", "declarationList",
    ];
    CParser._LITERAL_NAMES = [
        undefined, "'__extension__'", "'__builtin_va_arg'", "'__builtin_offsetof'",
        "'__m128'", "'__m128d'", "'__m128i'", "'__typeof__'", "'__inline__'",
        "'__stdcall'", "'__declspec'", "'__asm'", "'__attribute__'", "'__asm__'",
        "'__volatile__'", "'auto'", "'break'", "'case'", "'char'", "'const'",
        "'continue'", "'default'", "'do'", "'double'", "'else'", "'enum'", "'extern'",
        "'float'", "'for'", "'goto'", "'if'", "'inline'", "'int'", "'long'", "'register'",
        "'restrict'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'",
        "'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", "'void'",
        "'volatile'", "'while'", "'_Alignas'", "'_Alignof'", "'_Atomic'", "'_Bool'",
        "'_Complex'", "'_Generic'", "'_Imaginary'", "'_Noreturn'", "'_Static_assert'",
        "'_Thread_local'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'<'", "'<='",
        "'>'", "'>='", "'<<'", "'>>'", "'+'", "'++'", "'-'", "'--'", "'*'", "'/'",
        "'%'", "'&'", "'|'", "'&&'", "'||'", "'^'", "'!'", "'~'", "'?'", "':'",
        "';'", "','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='",
        "'>>='", "'&='", "'^='", "'|='", "'=='", "'!='", "'->'", "'.'", "'...'",
    ];
    CParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "Auto", "Break", "Case", "Char", "Const", "Continue", "Default",
        "Do", "Double", "Else", "Enum", "Extern", "Float", "For", "Goto", "If",
        "Inline", "Int", "Long", "Register", "Restrict", "Return", "Short", "Signed",
        "Sizeof", "Static", "Struct", "Switch", "Typedef", "Union", "Unsigned",
        "Void", "Volatile", "While", "Alignas", "Alignof", "Atomic", "Bool", "Complex",
        "Generic", "Imaginary", "Noreturn", "StaticAssert", "ThreadLocal", "LeftParen",
        "RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace",
        "Less", "LessEqual", "Greater", "GreaterEqual", "LeftShift", "RightShift",
        "Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", "Mod", "And",
        "Or", "AndAnd", "OrOr", "Caret", "Not", "Tilde", "Question", "Colon",
        "Semi", "Comma", "Assign", "StarAssign", "DivAssign", "ModAssign", "PlusAssign",
        "MinusAssign", "LeftShiftAssign", "RightShiftAssign", "AndAssign", "XorAssign",
        "OrAssign", "Equal", "NotEqual", "Arrow", "Dot", "Ellipsis", "Identifier",
        "Constant", "DigitSequence", "StringLiteral", "ComplexDefine", "IncludeDirective",
        "AsmBlock", "LineAfterPreprocessing", "LineDirective", "PragmaDirective",
        "Whitespace", "Newline", "BlockComment", "LineComment",
    ];
    CParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);
    CParser._serializedATNSegments = 3;
    CParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03x\u0516\x04\x02" +
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
        "X\tX\x03\x02\x03\x02\x03\x02\x06\x02\xB4\n\x02\r\x02\x0E\x02\xB5\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xBE\n\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xD2" +
        "\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xE1\n\x04\f\x04\x0E\x04" +
        "\xE4\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
        "\x05\xED\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x05\x06\u0111\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x05\x06\u011B\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0128\n\x06\f" +
        "\x06\x0E\x06\u012B\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x07\x07\u0133\n\x07\f\x07\x0E\x07\u0136\v\x07\x03\b\x03\b\x03\b\x03\b" +
        "\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u014E\n\b\x03\t\x03\t\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x05\n\u015F\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x07\v\u016D\n\v\f\v\x0E\v\u0170\v\v\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u017B\n\f\f\f\x0E\f\u017E" +
        "\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0189" +
        "\n\r\f\r\x0E\r\u018C\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x07\x0E\u019D\n\x0E\f\x0E\x0E\x0E\u01A0\v\x0E\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01AB\n\x0F\f" +
        "\x0F\x0E\x0F\u01AE\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x07\x10\u01B6\n\x10\f\x10\x0E\x10\u01B9\v\x10\x03\x11\x03\x11\x03\x11" +
        "\x03\x11\x03\x11\x03\x11\x07\x11\u01C1\n\x11\f\x11\x0E\x11\u01C4\v\x11" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u01CC\n\x12\f" +
        "\x12\x0E\x12\u01CF\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x07\x13\u01D7\n\x13\f\x13\x0E\x13\u01DA\v\x13\x03\x14\x03\x14\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x07\x14\u01E2\n\x14\f\x14\x0E\x14\u01E5\v\x14" +
        "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01ED\n\x15\x03" +
        "\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01F5\n\x16\x03\x17" +
        "\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01FF" +
        "\n\x18\f\x18\x0E\x18\u0202\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u020E\n\x1A\x03\x1B\x06" +
        "\x1B\u0211\n\x1B\r\x1B\x0E\x1B\u0212\x03\x1C\x06\x1C\u0216\n\x1C\r\x1C" +
        "\x0E\x1C\u0217\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u021F\n" +
        "\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0227\n\x1E" +
        "\f\x1E\x0E\x1E\u022A\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05" +
        "\x1F\u0231\n\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0244\n!\x03!\x03!\x07!\u0248\n!" +
        "\f!\x0E!\u024B\v!\x03\"\x03\"\x05\"\u024F\n\"\x03\"\x03\"\x03\"\x03\"" +
        "\x03\"\x03\"\x03\"\x05\"\u0258\n\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$" +
        "\x07$\u0261\n$\f$\x0E$\u0264\v$\x03%\x03%\x05%\u0268\n%\x03%\x03%\x03" +
        "%\x05%\u026D\n%\x03&\x03&\x05&\u0271\n&\x03&\x03&\x05&\u0275\n&\x05&\u0277" +
        "\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u027F\n\'\f\'\x0E\'\u0282" +
        "\v\'\x03(\x03(\x05(\u0286\n(\x03(\x03(\x05(\u028A\n(\x03)\x03)\x05)\u028E" +
        "\n)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0296\n)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x05)\u029F\n)\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u02A7\n*" +
        "\f*\x0E*\u02AA\v*\x03+\x03+\x03+\x03+\x03+\x05+\u02B1\n+\x03,\x03,\x03" +
        "-\x03-\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u02C2" +
        "\n/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u02CE\n0\x03" +
        "1\x051\u02D1\n1\x031\x031\x071\u02D5\n1\f1\x0E1\u02D8\v1\x032\x032\x03" +
        "2\x032\x032\x032\x032\x032\x032\x032\x032\x052\u02E5\n2\x032\x032\x03" +
        "2\x032\x052\u02EB\n2\x032\x032\x032\x052\u02F0\n2\x032\x052\u02F3\n2\x03" +
        "2\x032\x032\x032\x032\x052\u02FA\n2\x032\x032\x032\x032\x032\x032\x03" +
        "2\x032\x032\x032\x032\x032\x032\x052\u0309\n2\x032\x032\x032\x032\x03" +
        "2\x032\x032\x032\x032\x032\x052\u0315\n2\x032\x072\u0318\n2\f2\x0E2\u031B" +
        "\v2\x033\x033\x033\x063\u0320\n3\r3\x0E3\u0321\x033\x033\x053\u0326\n" +
        "3\x034\x034\x034\x034\x034\x034\x034\x035\x035\x035\x075\u0332\n5\f5\x0E" +
        "5\u0335\v5\x035\x055\u0338\n5\x036\x036\x036\x056\u033D\n6\x036\x056\u0340" +
        "\n6\x036\x056\u0343\n6\x037\x037\x037\x037\x037\x077\u034A\n7\f7\x0E7" +
        "\u034D\v7\x038\x038\x058\u0351\n8\x038\x038\x058\u0355\n8\x038\x038\x03" +
        "8\x058\u035A\n8\x038\x038\x058\u035E\n8\x038\x058\u0361\n8\x039\x039\x03" +
        "9\x039\x039\x079\u0368\n9\f9\x0E9\u036B\v9\x03:\x03:\x03:\x03:\x03:\x05" +
        ":\u0372\n:\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u037A\n;\f;\x0E;\u037D\v" +
        ";\x03<\x03<\x03<\x03<\x03<\x05<\u0384\n<\x05<\u0386\n<\x03=\x03=\x03=" +
        "\x03=\x03=\x03=\x07=\u038E\n=\f=\x0E=\u0391\v=\x03>\x03>\x05>\u0395\n" +
        ">\x03?\x03?\x05?\u0399\n?\x03?\x03?\x07?\u039D\n?\f?\x0E?\u03A0\v?\x05" +
        "?\u03A2\n?\x03@\x03@\x03@\x03@\x03@\x07@\u03A9\n@\f@\x0E@\u03AC\v@\x03" +
        "@\x03@\x05@\u03B0\n@\x03@\x05@\u03B3\n@\x03@\x03@\x03@\x03@\x05@\u03B9" +
        "\n@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
        "@\x05@\u03C9\n@\x03@\x03@\x07@\u03CD\n@\f@\x0E@\u03D0\v@\x05@\u03D2\n" +
        "@\x03@\x03@\x03@\x05@\u03D7\n@\x03@\x05@\u03DA\n@\x03@\x03@\x03@\x03@" +
        "\x03@\x05@\u03E1\n@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@" +
        "\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u03F4\n@\x03@\x03@\x07@\u03F8" +
        "\n@\f@\x0E@\u03FB\v@\x07@\u03FD\n@\f@\x0E@\u0400\v@\x03A\x03A\x03B\x03" +
        "B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u040E\nB\x03C\x03C\x05" +
        "C\u0412\nC\x03C\x03C\x03C\x03C\x03C\x05C\u0419\nC\x03C\x07C\u041C\nC\f" +
        "C\x0EC\u041F\vC\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x07E\u0429\nE" +
        "\fE\x0EE\u042C\vE\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0434\nF\x03G\x03" +
        "G\x03G\x03G\x03G\x06G\u043B\nG\rG\x0EG\u043C\x03G\x03G\x03G\x03H\x03H" +
        "\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x07H\u044E\nH\fH\x0E" +
        "H\u0451\vH\x05H\u0453\nH\x03H\x03H\x03H\x03H\x07H\u0459\nH\fH\x0EH\u045C" +
        "\vH\x05H\u045E\nH\x07H\u0460\nH\fH\x0EH\u0463\vH\x03H\x03H\x05H\u0467" +
        "\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0474" +
        "\nI\x03J\x03J\x05J\u0478\nJ\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x07K\u0481" +
        "\nK\fK\x0EK\u0484\vK\x03L\x03L\x05L\u0488\nL\x03M\x05M\u048B\nM\x03M\x03" +
        "M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0496\nN\x03N\x03N\x03N\x03" +
        "N\x03N\x03N\x05N\u049E\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
        "O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u04B4\n" +
        "O\x03P\x03P\x03P\x05P\u04B9\nP\x03P\x03P\x05P\u04BD\nP\x03P\x05P\u04C0" +
        "\nP\x03P\x03P\x05P\u04C4\nP\x03P\x03P\x05P\u04C8\nP\x05P\u04CA\nP\x03" +
        "Q\x03Q\x03Q\x03Q\x05Q\u04D0\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x07R\u04D8" +
        "\nR\fR\x0ER\u04DB\vR\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05" +
        "S\u04E6\nS\x03S\x03S\x03S\x03S\x03S\x05S\u04ED\nS\x03T\x05T\u04F0\nT\x03" +
        "T\x03T\x03U\x03U\x03U\x03U\x03U\x07U\u04F9\nU\fU\x0EU\u04FC\vU\x03V\x03" +
        "V\x03V\x05V\u0501\nV\x03W\x05W\u0504\nW\x03W\x03W\x05W\u0508\nW\x03W\x03" +
        "W\x03X\x03X\x03X\x03X\x03X\x07X\u0511\nX\fX\x0EX\u0514\vX\x03X\x02\x02" +
        " \x06\n\f\x14\x16\x18\x1A\x1C\x1E \"$&.:@FLRbptx~\x84\x88\x94\xA2\xA8" +
        "\xAEY\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
        "\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
        "(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
        "D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
        "`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
        "|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
        "\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
        "\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\x02\x0E\x07" +
        "\x02IIKKMMPPUV\x03\x02[e\b\x02\x11\x11\x1C\x1C$$**--<<\n\x02\x06\b\x14" +
        "\x14\x19\x19\x1D\x1D\"#\'(/067\x03\x02\x06\b\x04\x02++..\x06\x02\x15\x15" +
        "%%1155\x05\x02\n\v!!::\x04\x02=>ZZ\x03\x02=>\x04\x02\r\r\x0F\x0F\x04\x02" +
        "\x10\x1011\x02\u058B\x02\xD1\x03\x02\x02\x02\x04\xD3\x03\x02\x02\x02\x06" +
        "\xDA\x03\x02\x02\x02\b\xEC\x03\x02\x02\x02\n\u0110\x03\x02\x02\x02\f\u012C" +
        "\x03\x02\x02\x02\x0E\u014D\x03\x02\x02\x02\x10\u014F\x03\x02\x02\x02\x12" +
        "\u015E\x03\x02\x02\x02\x14\u0160\x03\x02\x02\x02\x16\u0171\x03\x02\x02" +
        "\x02\x18\u017F\x03\x02\x02\x02\x1A\u018D\x03\x02\x02\x02\x1C\u01A1\x03" +
        "\x02\x02\x02\x1E\u01AF\x03\x02\x02\x02 \u01BA\x03\x02\x02\x02\"\u01C5" +
        "\x03\x02\x02\x02$\u01D0\x03\x02\x02\x02&\u01DB\x03\x02\x02\x02(\u01E6" +
        "\x03\x02\x02\x02*\u01F4\x03\x02\x02\x02,\u01F6\x03\x02\x02\x02.\u01F8" +
        "\x03\x02\x02\x020\u0203\x03\x02\x02\x022\u020D\x03\x02\x02\x024\u0210" +
        "\x03\x02\x02\x026\u0215\x03\x02\x02\x028\u021E\x03\x02\x02\x02:\u0220" +
        "\x03\x02\x02\x02<\u0230\x03\x02\x02\x02>\u0232\x03\x02\x02\x02@\u0243" +
        "\x03\x02\x02\x02B\u0257\x03\x02\x02\x02D\u0259\x03\x02\x02\x02F\u025B" +
        "\x03\x02\x02\x02H\u026C\x03\x02\x02\x02J\u0276\x03\x02\x02\x02L\u0278" +
        "\x03\x02\x02\x02N\u0289\x03\x02\x02\x02P\u029E\x03\x02\x02\x02R\u02A0" +
        "\x03\x02\x02\x02T\u02B0\x03\x02\x02\x02V\u02B2\x03\x02\x02\x02X\u02B4" +
        "\x03\x02\x02\x02Z\u02B9\x03\x02\x02\x02\\\u02C1\x03\x02\x02\x02^\u02CD" +
        "\x03\x02\x02\x02`\u02D0\x03\x02\x02\x02b\u02EA\x03\x02\x02\x02d\u0325" +
        "\x03\x02\x02\x02f\u0327\x03\x02\x02\x02h\u0337\x03\x02\x02\x02j\u0342" +
        "\x03\x02\x02\x02l\u034B\x03\x02\x02\x02n\u0360\x03\x02\x02\x02p\u0362" +
        "\x03\x02\x02\x02r\u0371\x03\x02\x02\x02t\u0373\x03\x02\x02\x02v\u0385" +
        "\x03\x02\x02\x02x\u0387\x03\x02\x02\x02z\u0392\x03\x02\x02\x02|\u03A1" +
        "\x03\x02\x02\x02~\u03D1\x03\x02\x02\x02\x80\u0401\x03\x02\x02\x02\x82" +
        "\u040D\x03\x02\x02\x02\x84\u040F\x03\x02\x02\x02\x86\u0420\x03\x02\x02" +
        "\x02\x88\u0423\x03\x02\x02\x02\x8A\u0433\x03\x02\x02\x02\x8C\u0435\x03" +
        "\x02\x02\x02\x8E\u0466\x03\x02\x02\x02\x90\u0473\x03\x02\x02\x02\x92\u0475" +
        "\x03\x02\x02\x02\x94\u047B\x03\x02\x02\x02\x96\u0487\x03\x02\x02\x02\x98" +
        "\u048A\x03\x02\x02\x02\x9A\u049D\x03\x02\x02\x02\x9C\u04B3\x03\x02\x02" +
        "\x02\x9E\u04C9\x03\x02\x02\x02\xA0\u04CF\x03\x02\x02\x02\xA2\u04D1\x03" +
        "\x02\x02\x02\xA4\u04EC\x03\x02\x02\x02\xA6\u04EF\x03\x02\x02\x02\xA8\u04F3" +
        "\x03\x02\x02\x02\xAA\u0500\x03\x02\x02\x02\xAC\u0503\x03\x02\x02\x02\xAE" +
        "\u050B\x03\x02\x02\x02\xB0\xD2\x07k\x02\x02\xB1\xD2\x07l\x02\x02\xB2\xB4" +
        "\x07n\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB3" +
        "\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xD2\x03\x02\x02\x02\xB7\xB8" +
        "\x07=\x02\x02\xB8\xB9\x05.\x18\x02\xB9\xBA\x07>\x02\x02\xBA\xD2\x03\x02" +
        "\x02\x02\xBB\xD2\x05\x04\x03\x02\xBC\xBE\x07\x03\x02\x02\xBD\xBC\x03\x02" +
        "\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x07=" +
        "\x02\x02\xC0\xC1\x05\x92J\x02\xC1\xC2\x07>\x02\x02\xC2\xD2\x03\x02\x02" +
        "\x02\xC3\xC4\x07\x04\x02\x02\xC4\xC5\x07=\x02\x02\xC5\xC6\x05\x0E\b\x02" +
        "\xC6\xC7\x07Z\x02\x02\xC7\xC8\x05z>\x02\xC8\xC9\x07>\x02\x02\xC9\xD2\x03" +
        "\x02\x02\x02\xCA\xCB\x07\x05\x02\x02\xCB\xCC\x07=\x02\x02\xCC\xCD\x05" +
        "z>\x02\xCD\xCE\x07Z\x02\x02\xCE\xCF\x05\x0E\b\x02\xCF\xD0\x07>\x02\x02" +
        "\xD0\xD2\x03\x02\x02\x02\xD1\xB0\x03\x02\x02\x02\xD1\xB1\x03\x02\x02\x02" +
        "\xD1\xB3\x03\x02\x02\x02\xD1\xB7\x03\x02\x02\x02\xD1\xBB\x03\x02\x02\x02" +
        "\xD1\xBD\x03\x02\x02\x02\xD1\xC3\x03\x02\x02\x02\xD1\xCA\x03\x02\x02\x02" +
        "\xD2\x03\x03\x02\x02\x02\xD3\xD4\x078\x02\x02\xD4\xD5\x07=\x02\x02\xD5" +
        "\xD6\x05*\x16\x02\xD6\xD7\x07Z\x02\x02\xD7\xD8\x05\x06\x04\x02\xD8\xD9" +
        "\x07>\x02\x02\xD9\x05\x03\x02\x02\x02\xDA\xDB\b\x04\x01\x02\xDB\xDC\x05" +
        "\b\x05\x02\xDC\xE2\x03\x02\x02\x02\xDD\xDE\f\x03\x02\x02\xDE\xDF\x07Z" +
        "\x02\x02\xDF\xE1\x05\b\x05\x02\xE0\xDD\x03\x02\x02\x02\xE1\xE4\x03\x02" +
        "\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\x07\x03\x02" +
        "\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE6\x05z>\x02\xE6\xE7\x07X\x02\x02" +
        "\xE7\xE8\x05*\x16\x02\xE8\xED\x03\x02\x02\x02\xE9\xEA\x07\x17\x02\x02" +
        "\xEA\xEB\x07X\x02\x02\xEB\xED\x05*\x16\x02\xEC\xE5\x03\x02\x02\x02\xEC" +
        "\xE9\x03\x02\x02\x02\xED\t\x03\x02\x02\x02\xEE\xEF\b\x06\x01\x02\xEF\u0111" +
        "\x05\x02\x02\x02\xF0\xF1\x07=\x02\x02\xF1\xF2\x05z>\x02\xF2\xF3\x07>\x02" +
        "\x02\xF3\xF4\x07A\x02\x02\xF4\xF5\x05\x84C\x02\xF5\xF6\x07B\x02\x02\xF6" +
        "\u0111\x03\x02\x02\x02\xF7\xF8\x07=\x02\x02\xF8\xF9\x05z>\x02\xF9\xFA" +
        "\x07>\x02\x02\xFA\xFB\x07A\x02\x02\xFB\xFC\x05\x84C\x02\xFC\xFD\x07Z\x02" +
        "\x02\xFD\xFE\x07B\x02\x02\xFE\u0111\x03\x02\x02\x02\xFF\u0100\x07\x03" +
        "\x02\x02\u0100\u0101\x07=\x02\x02\u0101\u0102\x05z>\x02\u0102\u0103\x07" +
        ">\x02\x02\u0103\u0104\x07A\x02\x02\u0104\u0105\x05\x84C\x02\u0105\u0106" +
        "\x07B\x02\x02\u0106\u0111\x03\x02\x02\x02\u0107\u0108\x07\x03\x02\x02" +
        "\u0108\u0109\x07=\x02\x02\u0109\u010A\x05z>\x02\u010A\u010B\x07>\x02\x02" +
        "\u010B\u010C\x07A\x02\x02\u010C\u010D\x05\x84C\x02\u010D\u010E\x07Z\x02" +
        "\x02\u010E\u010F\x07B\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\xEE\x03" +
        "\x02\x02\x02\u0110\xF0\x03\x02\x02\x02\u0110\xF7\x03\x02\x02\x02\u0110" +
        "\xFF\x03\x02\x02\x02\u0110\u0107\x03\x02\x02\x02\u0111\u0129\x03\x02\x02" +
        "\x02\u0112\u0113\f\f\x02\x02\u0113\u0114\x07?\x02\x02\u0114\u0115\x05" +
        ".\x18\x02\u0115\u0116\x07@\x02\x02\u0116\u0128\x03\x02\x02\x02\u0117\u0118" +
        "\f\v\x02\x02\u0118\u011A\x07=\x02\x02\u0119\u011B\x05\f\x07\x02\u011A" +
        "\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02" +
        "\x02\x02\u011C\u0128\x07>\x02\x02\u011D\u011E\f\n\x02\x02\u011E\u011F" +
        "\x07i\x02\x02\u011F\u0128\x07k\x02\x02\u0120\u0121\f\t\x02\x02\u0121\u0122" +
        "\x07h\x02\x02\u0122\u0128\x07k\x02\x02\u0123\u0124\f\b\x02\x02\u0124\u0128" +
        "\x07J\x02\x02\u0125\u0126\f\x07\x02\x02\u0126\u0128\x07L\x02\x02\u0127" +
        "\u0112\x03\x02\x02\x02\u0127\u0117\x03\x02\x02\x02\u0127\u011D\x03\x02" +
        "\x02\x02\u0127\u0120\x03\x02\x02\x02\u0127\u0123\x03\x02\x02\x02\u0127" +
        "\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02" +
        "\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\v\x03\x02\x02\x02\u012B\u0129" +
        "\x03\x02\x02\x02\u012C\u012D\b\x07\x01\x02\u012D\u012E\x05*\x16\x02\u012E" +
        "\u0134\x03\x02\x02\x02\u012F\u0130\f\x03\x02\x02\u0130\u0131\x07Z\x02" +
        "\x02\u0131\u0133\x05*\x16\x02\u0132\u012F\x03\x02\x02\x02\u0133\u0136" +
        "\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02" +
        "\u0135\r\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137\u014E\x05\n" +
        "\x06\x02\u0138\u0139\x07J\x02\x02\u0139\u014E\x05\x0E\b\x02\u013A\u013B" +
        "\x07L\x02\x02\u013B\u014E\x05\x0E\b\x02\u013C\u013D\x05\x10\t\x02\u013D" +
        "\u013E\x05\x12\n\x02\u013E\u014E\x03\x02\x02\x02\u013F\u0140\x07)\x02" +
        "\x02\u0140\u014E\x05\x0E\b\x02\u0141\u0142\x07)\x02\x02\u0142\u0143\x07" +
        "=\x02\x02\u0143\u0144\x05z>\x02\u0144\u0145\x07>\x02\x02\u0145\u014E\x03" +
        "\x02\x02\x02\u0146\u0147\x074\x02\x02\u0147\u0148\x07=\x02\x02\u0148\u0149" +
        "\x05z>\x02\u0149\u014A\x07>\x02\x02\u014A\u014E\x03\x02\x02\x02\u014B" +
        "\u014C\x07R\x02\x02\u014C\u014E\x07k\x02\x02\u014D\u0137\x03\x02\x02\x02" +
        "\u014D\u0138\x03\x02\x02\x02\u014D\u013A\x03\x02\x02\x02\u014D\u013C\x03" +
        "\x02\x02\x02\u014D\u013F\x03\x02\x02\x02\u014D\u0141\x03\x02\x02\x02\u014D" +
        "\u0146\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\x0F\x03\x02\x02" +
        "\x02\u014F\u0150\t\x02\x02\x02\u0150\x11\x03\x02\x02\x02\u0151\u0152\x07" +
        "=\x02\x02\u0152\u0153\x05z>\x02\u0153\u0154\x07>\x02\x02\u0154\u0155\x05" +
        "\x12\n\x02\u0155\u015F\x03\x02\x02\x02\u0156\u0157\x07\x03\x02\x02\u0157" +
        "\u0158\x07=\x02\x02\u0158\u0159\x05z>\x02\u0159\u015A\x07>\x02\x02\u015A" +
        "\u015B\x05\x12\n\x02\u015B\u015F\x03\x02\x02\x02\u015C\u015F\x05\x0E\b" +
        "\x02\u015D\u015F\x07m\x02\x02\u015E\u0151\x03\x02\x02\x02\u015E\u0156" +
        "\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015D\x03\x02\x02\x02" +
        "\u015F\x13\x03\x02\x02\x02\u0160\u0161\b\v\x01\x02\u0161\u0162\x05\x12" +
        "\n\x02\u0162\u016E\x03\x02\x02\x02\u0163\u0164\f\x05\x02\x02\u0164\u0165" +
        "\x07M\x02\x02\u0165\u016D\x05\x12\n\x02\u0166\u0167\f\x04\x02\x02\u0167" +
        "\u0168\x07N\x02\x02\u0168\u016D\x05\x12\n\x02\u0169\u016A\f\x03\x02\x02" +
        "\u016A\u016B\x07O\x02\x02\u016B\u016D\x05\x12\n\x02\u016C\u0163\x03\x02" +
        "\x02\x02\u016C\u0166\x03\x02\x02\x02\u016C\u0169\x03\x02\x02\x02\u016D" +
        "\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02" +
        "\x02\x02\u016F\x15\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0172" +
        "\b\f";
    CParser._serializedATNSegment1 = "\x01\x02\u0172\u0173\x05\x14\v\x02\u0173\u017C\x03\x02\x02\x02\u0174\u0175" +
        "\f\x04\x02\x02\u0175\u0176\x07I\x02\x02\u0176\u017B\x05\x14\v\x02\u0177" +
        "\u0178\f\x03\x02\x02\u0178\u0179\x07K\x02\x02\u0179\u017B\x05\x14\v\x02" +
        "\u017A\u0174\x03\x02\x02\x02\u017A\u0177\x03\x02\x02\x02\u017B\u017E\x03" +
        "\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
        "\x17\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0180\b\r\x01\x02" +
        "\u0180\u0181\x05\x16\f\x02\u0181\u018A\x03\x02\x02\x02\u0182\u0183\f\x04" +
        "\x02\x02\u0183\u0184\x07G\x02\x02\u0184\u0189\x05\x16\f\x02\u0185\u0186" +
        "\f\x03\x02\x02\u0186\u0187\x07H\x02\x02\u0187\u0189\x05\x16\f\x02\u0188" +
        "\u0182\x03\x02\x02\x02\u0188\u0185\x03\x02\x02\x02\u0189\u018C\x03\x02" +
        "\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
        "\x19\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u018E\b\x0E\x01" +
        "\x02\u018E\u018F\x05\x18\r\x02\u018F\u019E\x03\x02\x02\x02\u0190\u0191" +
        "\f\x06\x02\x02\u0191\u0192\x07C\x02\x02\u0192\u019D\x05\x18\r\x02\u0193" +
        "\u0194\f\x05\x02\x02\u0194\u0195\x07E\x02\x02\u0195\u019D\x05\x18\r\x02" +
        "\u0196\u0197\f\x04\x02\x02\u0197\u0198\x07D\x02\x02\u0198\u019D\x05\x18" +
        "\r\x02\u0199\u019A\f\x03\x02\x02\u019A\u019B\x07F\x02\x02\u019B\u019D" +
        "\x05\x18\r\x02\u019C\u0190\x03\x02\x02\x02\u019C\u0193\x03\x02\x02\x02" +
        "\u019C\u0196\x03\x02\x02\x02\u019C\u0199\x03\x02\x02\x02\u019D\u01A0\x03" +
        "\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F" +
        "\x1B\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A2\b\x0F\x01" +
        "\x02\u01A2\u01A3\x05\x1A\x0E\x02\u01A3\u01AC\x03\x02\x02\x02\u01A4\u01A5" +
        "\f\x04\x02\x02\u01A5\u01A6\x07f\x02\x02\u01A6\u01AB\x05\x1A\x0E\x02\u01A7" +
        "\u01A8\f\x03\x02\x02\u01A8\u01A9\x07g\x02\x02\u01A9\u01AB\x05\x1A\x0E" +
        "\x02\u01AA\u01A4\x03\x02\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AB\u01AE" +
        "\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02" +
        "\u01AD\x1D\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B0\b\x10" +
        "\x01\x02\u01B0\u01B1\x05\x1C\x0F\x02\u01B1\u01B7\x03\x02\x02\x02\u01B2" +
        "\u01B3\f\x03\x02\x02\u01B3\u01B4\x07P\x02\x02\u01B4\u01B6\x05\x1C\x0F" +
        "\x02\u01B5\u01B2\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5" +
        "\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\x1F\x03\x02\x02\x02" +
        "\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BB\b\x11\x01\x02\u01BB\u01BC\x05" +
        "\x1E\x10\x02\u01BC\u01C2\x03\x02\x02\x02\u01BD\u01BE\f\x03\x02\x02\u01BE" +
        "\u01BF\x07T\x02\x02\u01BF\u01C1\x05\x1E\x10\x02\u01C0\u01BD\x03\x02\x02" +
        "\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3" +
        "\x03\x02\x02\x02\u01C3!\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5" +
        "\u01C6\b\x12\x01\x02\u01C6\u01C7\x05 \x11\x02\u01C7\u01CD\x03\x02\x02" +
        "\x02\u01C8\u01C9\f\x03\x02\x02\u01C9\u01CA\x07Q\x02\x02\u01CA\u01CC\x05" +
        " \x11\x02\u01CB\u01C8\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD" +
        "\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE#\x03\x02\x02" +
        "\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0\u01D1\b\x13\x01\x02\u01D1\u01D2" +
        "\x05\"\x12\x02\u01D2\u01D8\x03\x02\x02\x02\u01D3\u01D4\f\x03\x02\x02\u01D4" +
        "\u01D5\x07R\x02\x02\u01D5\u01D7\x05\"\x12\x02\u01D6\u01D3\x03\x02\x02" +
        "\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9" +
        "\x03\x02\x02\x02\u01D9%\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB" +
        "\u01DC\b\x14\x01\x02\u01DC\u01DD\x05$\x13\x02\u01DD\u01E3\x03\x02\x02" +
        "\x02\u01DE\u01DF\f\x03\x02\x02\u01DF\u01E0\x07S\x02\x02\u01E0\u01E2\x05" +
        "$\x13\x02\u01E1\u01DE\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3" +
        "\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\'\x03\x02\x02" +
        "\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01EC\x05&\x14\x02\u01E7\u01E8" +
        "\x07W\x02\x02\u01E8\u01E9\x05.\x18\x02\u01E9\u01EA\x07X\x02\x02\u01EA" +
        "\u01EB\x05(\x15\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01E7\x03\x02\x02" +
        "\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED)\x03\x02\x02\x02\u01EE\u01F5\x05" +
        "(\x15\x02\u01EF\u01F0\x05\x0E\b\x02\u01F0\u01F1\x05,\x17\x02\u01F1\u01F2" +
        "\x05*\x16\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F5\x07m\x02\x02\u01F4" +
        "\u01EE\x03\x02\x02\x02\u01F4\u01EF\x03\x02\x02\x02\u01F4\u01F3\x03\x02" +
        "\x02\x02\u01F5+\x03\x02\x02\x02\u01F6\u01F7\t\x03\x02\x02\u01F7-\x03\x02" +
        "\x02\x02\u01F8\u01F9\b\x18\x01\x02\u01F9\u01FA\x05*\x16\x02\u01FA\u0200" +
        "\x03\x02\x02\x02\u01FB\u01FC\f\x03\x02\x02\u01FC\u01FD\x07Z\x02\x02\u01FD" +
        "\u01FF\x05*\x16\x02\u01FE\u01FB\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02" +
        "\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201/\x03" +
        "\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203\u0204\x05(\x15\x02\u0204" +
        "1\x03\x02\x02\x02\u0205\u0206\x054\x1B\x02\u0206\u0207\x05:\x1E\x02\u0207" +
        "\u0208\x07Y\x02\x02\u0208\u020E\x03\x02\x02\x02\u0209\u020A\x054\x1B\x02" +
        "\u020A\u020B\x07Y\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020E\x05" +
        "\x8CG\x02\u020D\u0205\x03\x02\x02\x02\u020D\u0209\x03\x02\x02\x02\u020D" +
        "\u020C\x03\x02\x02\x02\u020E3\x03\x02\x02\x02\u020F\u0211\x058\x1D\x02" +
        "\u0210\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0210\x03" +
        "\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u02135\x03\x02\x02\x02\u0214" +
        "\u0216\x058\x1D\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02" +
        "\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u02187\x03" +
        "\x02\x02\x02\u0219\u021F\x05> \x02\u021A\u021F\x05@!\x02\u021B\u021F\x05" +
        "Z.\x02\u021C\u021F\x05\\/\x02\u021D\u021F\x05^0\x02\u021E\u0219\x03\x02" +
        "\x02\x02\u021E\u021A\x03\x02\x02\x02\u021E\u021B\x03\x02\x02\x02\u021E" +
        "\u021C\x03\x02\x02\x02\u021E\u021D\x03\x02\x02\x02\u021F9\x03\x02\x02" +
        "\x02\u0220\u0221\b\x1E\x01\x02\u0221\u0222\x05<\x1F\x02\u0222\u0228\x03" +
        "\x02\x02\x02\u0223\u0224\f\x03\x02\x02\u0224\u0225\x07Z\x02\x02\u0225" +
        "\u0227\x05<\x1F\x02\u0226\u0223\x03\x02\x02\x02\u0227\u022A\x03\x02\x02" +
        "\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229;\x03" +
        "\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u0231\x05`1\x02\u022C\u022D" +
        "\x05`1\x02\u022D\u022E\x07[\x02\x02\u022E\u022F\x05\x82B\x02\u022F\u0231" +
        "\x03\x02\x02\x02\u0230\u022B\x03\x02\x02\x02\u0230\u022C\x03\x02\x02\x02" +
        "\u0231=\x03\x02\x02\x02\u0232\u0233\t\x04\x02\x02\u0233?\x03\x02\x02\x02" +
        "\u0234\u0235\b!\x01\x02\u0235\u0244\t\x05\x02\x02\u0236\u0237\x07\x03" +
        "\x02\x02\u0237\u0238\x07=\x02\x02\u0238\u0239\t\x06\x02\x02\u0239\u0244" +
        "\x07>\x02\x02\u023A\u0244\x05X-\x02\u023B\u0244\x05B\"\x02\u023C\u0244" +
        "\x05P)\x02\u023D\u0244\x05\x80A\x02\u023E\u023F\x07\t\x02\x02\u023F\u0240" +
        "\x07=\x02\x02\u0240\u0241\x050\x19\x02\u0241\u0242\x07>\x02\x02\u0242" +
        "\u0244\x03\x02\x02\x02\u0243\u0234\x03\x02\x02\x02\u0243\u0236\x03\x02" +
        "\x02\x02\u0243\u023A\x03\x02\x02\x02\u0243\u023B\x03\x02\x02\x02\u0243" +
        "\u023C\x03\x02\x02\x02\u0243\u023D\x03\x02\x02\x02\u0243\u023E\x03\x02" +
        "\x02\x02\u0244\u0249\x03\x02\x02\x02\u0245\u0246\f\x03\x02\x02\u0246\u0248" +
        "\x05n8\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249" +
        "\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024AA\x03\x02\x02" +
        "\x02\u024B\u0249\x03\x02\x02\x02\u024C\u024E\x05D#\x02\u024D\u024F\x07" +
        "k\x02\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F" +
        "\u0250\x03\x02\x02\x02\u0250\u0251\x07A\x02\x02\u0251\u0252\x05F$\x02" +
        "\u0252\u0253\x07B\x02\x02\u0253\u0258\x03\x02\x02\x02\u0254\u0255\x05" +
        "D#\x02\u0255\u0256\x07k\x02\x02\u0256\u0258\x03\x02\x02\x02\u0257\u024C" +
        "\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0258C\x03\x02\x02\x02\u0259" +
        "\u025A\t\x07\x02\x02\u025AE\x03\x02\x02\x02\u025B\u025C\b$\x01\x02\u025C" +
        "\u025D\x05H%\x02\u025D\u0262\x03\x02\x02\x02\u025E\u025F\f\x03\x02\x02" +
        "\u025F\u0261\x05H%\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0264\x03\x02" +
        "\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263" +
        "G\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0265\u0267\x05J&\x02\u0266" +
        "\u0268\x05L\'\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03\x02\x02" +
        "\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026A\x07Y\x02\x02\u026A\u026D" +
        "\x03\x02\x02\x02\u026B\u026D\x05\x8CG\x02\u026C\u0265\x03\x02\x02\x02" +
        "\u026C\u026B\x03\x02\x02\x02\u026DI\x03\x02\x02\x02\u026E\u0270\x05@!" +
        "\x02\u026F\u0271\x05J&\x02\u0270\u026F\x03\x02\x02\x02\u0270\u0271\x03" +
        "\x02\x02\x02\u0271\u0277\x03\x02\x02\x02\u0272\u0274\x05Z.\x02\u0273\u0275" +
        "\x05J&\x02\u0274\u0273\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275" +
        "\u0277\x03\x02\x02\x02\u0276\u026E\x03\x02\x02\x02\u0276\u0272\x03\x02" +
        "\x02\x02\u0277K\x03\x02\x02\x02\u0278\u0279\b\'\x01\x02\u0279\u027A\x05" +
        "N(\x02\u027A\u0280\x03\x02\x02\x02\u027B\u027C\f\x03\x02\x02\u027C\u027D" +
        "\x07Z\x02\x02\u027D\u027F\x05N(\x02\u027E\u027B\x03\x02\x02\x02\u027F" +
        "\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02" +
        "\x02\x02\u0281M\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283\u028A" +
        "\x05`1\x02\u0284\u0286\x05`1\x02\u0285\u0284\x03\x02\x02\x02\u0285\u0286" +
        "\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0288\x07X\x02\x02" +
        "\u0288\u028A\x050\x19\x02\u0289\u0283\x03\x02\x02\x02\u0289\u0285\x03" +
        "\x02\x02\x02\u028AO\x03\x02\x02\x02\u028B\u028D\x07\x1B\x02\x02\u028C" +
        "\u028E\x07k\x02\x02\u028D\u028C\x03\x02\x02\x02\u028D\u028E\x03\x02\x02" +
        "\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x07A\x02\x02\u0290\u0291" +
        "\x05R*\x02\u0291\u0292\x07B\x02\x02\u0292\u029F\x03\x02\x02\x02\u0293" +
        "\u0295\x07\x1B\x02\x02\u0294\u0296\x07k\x02\x02\u0295\u0294\x03\x02\x02" +
        "\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0298" +
        "\x07A\x02\x02\u0298\u0299\x05R*\x02\u0299\u029A\x07Z\x02\x02\u029A\u029B" +
        "\x07B\x02\x02\u029B\u029F\x03\x02\x02\x02\u029C\u029D\x07\x1B\x02\x02" +
        "\u029D\u029F\x07k\x02\x02\u029E\u028B\x03\x02\x02\x02\u029E\u0293\x03" +
        "\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029FQ\x03\x02\x02\x02\u02A0" +
        "\u02A1\b*\x01\x02\u02A1\u02A2\x05T+\x02\u02A2\u02A8\x03\x02\x02\x02\u02A3" +
        "\u02A4\f\x03\x02\x02\u02A4\u02A5\x07Z\x02\x02\u02A5\u02A7\x05T+\x02\u02A6" +
        "\u02A3\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6\x03\x02" +
        "\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9S\x03\x02\x02\x02\u02AA\u02A8" +
        "\x03\x02\x02\x02\u02AB\u02B1\x05V,\x02\u02AC\u02AD\x05V,\x02\u02AD\u02AE" +
        "\x07[\x02\x02\u02AE\u02AF\x050\x19\x02\u02AF\u02B1\x03\x02\x02\x02\u02B0" +
        "\u02AB\x03\x02\x02\x02\u02B0\u02AC\x03\x02\x02\x02\u02B1U\x03\x02\x02" +
        "\x02\u02B2\u02B3\x07k\x02\x02\u02B3W\x03\x02\x02\x02\u02B4\u02B5\x075" +
        "\x02\x02\u02B5\u02B6\x07=\x02\x02\u02B6\u02B7\x05z>\x02\u02B7\u02B8\x07" +
        ">\x02\x02\u02B8Y\x03\x02\x02\x02\u02B9\u02BA\t\b\x02\x02\u02BA[\x03\x02" +
        "\x02\x02\u02BB\u02C2\t\t\x02\x02\u02BC\u02C2\x05f4\x02\u02BD\u02BE\x07" +
        "\f\x02\x02\u02BE\u02BF\x07=\x02\x02\u02BF\u02C0\x07k\x02\x02\u02C0\u02C2" +
        "\x07>\x02\x02\u02C1\u02BB\x03\x02\x02\x02\u02C1\u02BC\x03\x02\x02\x02" +
        "\u02C1\u02BD\x03\x02\x02\x02\u02C2]\x03\x02\x02\x02\u02C3\u02C4\x073\x02" +
        "\x02\u02C4\u02C5\x07=\x02\x02\u02C5\u02C6\x05z>\x02\u02C6\u02C7\x07>\x02" +
        "\x02\u02C7\u02CE\x03\x02\x02\x02\u02C8\u02C9\x073\x02\x02\u02C9\u02CA" +
        "\x07=\x02\x02\u02CA\u02CB\x050\x19\x02\u02CB\u02CC\x07>\x02\x02\u02CC" +
        "\u02CE\x03\x02\x02\x02\u02CD\u02C3\x03\x02\x02\x02\u02CD\u02C8\x03\x02" +
        "\x02\x02\u02CE_\x03\x02\x02\x02\u02CF\u02D1\x05n8\x02\u02D0\u02CF\x03" +
        "\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2" +
        "\u02D6\x05b2\x02\u02D3\u02D5\x05d3\x02\u02D4\u02D3\x03\x02\x02\x02\u02D5" +
        "\u02D8\x03\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02" +
        "\x02\x02\u02D7a\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D9\u02DA" +
        "\b2\x01\x02\u02DA\u02EB\x07k\x02\x02\u02DB\u02DC\x07=\x02\x02\u02DC\u02DD" +
        "\x05`1\x02\u02DD\u02DE\x07>\x02\x02\u02DE\u02EB\x03\x02\x02\x02\u02DF" +
        "\u02E0\x07k\x02\x02\u02E0\u02E1\x07X\x02\x02\u02E1\u02EB\x07m\x02\x02" +
        "\u02E2\u02E4\x07=\x02\x02\u02E3\u02E5\x05@!\x02\u02E4\u02E3\x03\x02\x02" +
        "\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7" +
        "\x05n8\x02\u02E7\u02E8\x05b2\x02\u02E8\u02E9\x07>\x02\x02\u02E9\u02EB" +
        "\x03\x02\x02\x02\u02EA\u02D9\x03\x02\x02\x02\u02EA\u02DB\x03\x02\x02\x02" +
        "\u02EA\u02DF\x03\x02\x02\x02\u02EA\u02E2\x03\x02\x02\x02\u02EB\u0319\x03" +
        "\x02\x02\x02\u02EC\u02ED\f\n\x02\x02\u02ED\u02EF\x07?\x02\x02\u02EE\u02F0" +
        "\x05p9\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0" +
        "\u02F2\x03\x02\x02\x02\u02F1\u02F3\x05*\x16\x02\u02F2\u02F1\x03\x02\x02" +
        "\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u0318" +
        "\x07@\x02\x02\u02F5\u02F6\f\t\x02\x02\u02F6\u02F7\x07?\x02\x02\u02F7\u02F9" +
        "\x07*\x02\x02\u02F8\u02FA\x05p9\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9" +
        "\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC\x05*\x16" +
        "\x02\u02FC\u02FD\x07@\x02\x02\u02FD\u0318\x03\x02\x02\x02\u02FE\u02FF" +
        "\f\b\x02\x02\u02FF\u0300\x07?\x02\x02\u0300\u0301\x05p9\x02\u0301\u0302" +
        "\x07*\x02\x02\u0302\u0303\x05*\x16\x02\u0303\u0304\x07@\x02\x02\u0304" +
        "\u0318\x03\x02\x02\x02\u0305\u0306\f\x07\x02\x02\u0306\u0308\x07?\x02" +
        "\x02\u0307\u0309\x05p9\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03" +
        "\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x07M\x02\x02\u030B" +
        "\u0318\x07@\x02\x02\u030C\u030D\f\x06\x02\x02\u030D\u030E\x07=\x02\x02" +
        "\u030E\u030F\x05r:\x02\u030F\u0310\x07>\x02\x02\u0310\u0318\x03\x02\x02" +
        "\x02\u0311\u0312\f\x05\x02\x02\u0312\u0314\x07=\x02\x02\u0313\u0315\x05" +
        "x=\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0316" +
        "\x03\x02\x02\x02\u0316\u0318\x07>\x02\x02\u0317\u02EC\x03\x02\x02\x02" +
        "\u0317\u02F5\x03\x02\x02\x02\u0317\u02FE\x03\x02\x02\x02\u0317\u0305\x03" +
        "\x02\x02\x02\u0317\u030C\x03\x02\x02\x02\u0317\u0311\x03\x02\x02\x02\u0318" +
        "\u031B\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u0319\u031A\x03\x02" +
        "\x02\x02\u031Ac\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031C\u031D" +
        "\x07\r\x02\x02\u031D\u031F\x07=\x02\x02\u031E\u0320\x07n\x02\x02\u031F" +
        "\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u031F\x03\x02" +
        "\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323" +
        "\u0326\x07>\x02\x02\u0324\u0326\x05f4\x02\u0325\u031C\x03\x02\x02\x02" +
        "\u0325\u0324\x03\x02\x02\x02\u0326e\x03\x02\x02\x02\u0327\u0328\x07\x0E" +
        "\x02\x02\u0328\u0329\x07=\x02\x02\u0329\u032A\x07=\x02\x02\u032A\u032B" +
        "\x05h5\x02\u032B\u032C\x07>\x02\x02\u032C\u032D\x07>\x02\x02\u032Dg\x03" +
        "\x02\x02\x02\u032E\u0333\x05j6\x02\u032F\u0330\x07Z\x02\x02\u0330\u0332" +
        "\x05j6\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0335\x03\x02\x02\x02\u0333" +
        "\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0338\x03\x02" +
        "\x02\x02\u0335\u0333\x03\x02\x02\x02\u0336\u0338\x03\x02\x02\x02\u0337" +
        "\u032E\x03\x02\x02\x02\u0337\u0336\x03\x02\x02\x02\u0338i\x03\x02\x02" +
        "\x02\u0339\u033F\n\n\x02\x02\u033A\u033C\x07=\x02\x02\u033B\u033D\x05" +
        "\f\x07\x02\u033C\u033B\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D" +
        "\u033E\x03\x02\x02\x02\u033E\u0340\x07>\x02\x02\u033F\u033A\x03\x02\x02" +
        "\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0343\x03\x02\x02\x02\u0341\u0343" +
        "\x03\x02\x02\x02\u0342\u0339\x03\x02\x02\x02\u0342\u0341\x03\x02\x02\x02" +
        "\u0343k\x03\x02\x02\x02\u0344\u034A\n\v\x02\x02\u0345\u0346\x07=\x02\x02" +
        "\u0346\u0347\x05l7\x02\u0347\u0348\x07>\x02\x02\u0348\u034A\x03\x02\x02" +
        "\x02\u0349\u0344\x03\x02\x02\x02\u0349\u0345\x03\x02\x02\x02\u034A\u034D" +
        "\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02" +
        "\u034Cm\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034E\u0350\x07M\x02" +
        "\x02\u034F\u0351\x05p9\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03" +
        "\x02\x02\x02\u0351\u0361\x03\x02\x02\x02\u0352\u0354\x07M\x02\x02\u0353" +
        "\u0355\x05p9\x02\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02" +
        "\u0355\u0356\x03\x02\x02\x02\u0356\u0361\x05n8\x02\u0357\u0359\x07T\x02" +
        "\x02\u0358\u035A\x05p9\x02\u0359\u0358\x03\x02\x02\x02\u0359\u035A\x03" +
        "\x02\x02\x02\u035A\u0361\x03\x02\x02\x02\u035B\u035D\x07T\x02\x02\u035C" +
        "\u035E\x05p9\x02\u035D\u035C\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02" +
        "\u035E\u035F\x03\x02\x02\x02\u035F\u0361\x05n8\x02\u0360\u034E\x03\x02" +
        "\x02\x02\u0360\u0352\x03\x02\x02\x02\u0360\u0357\x03\x02\x02\x02\u0360" +
        "\u035B\x03\x02\x02\x02\u0361o\x03\x02\x02\x02\u0362\u0363\b9\x01\x02\u0363" +
        "\u0364\x05Z.\x02\u0364\u0369\x03\x02\x02\x02\u0365\u0366\f\x03\x02\x02" +
        "\u0366\u0368\x05Z.\x02\u0367\u0365\x03\x02\x02\x02\u0368\u036B\x03\x02" +
        "\x02\x02\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A" +
        "q\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036C\u0372\x05t;\x02\u036D" +
        "\u036E\x05t;\x02\u036E\u036F\x07Z\x02\x02\u036F\u0370\x07j\x02\x02\u0370" +
        "\u0372\x03\x02\x02\x02\u0371\u036C\x03\x02\x02\x02\u0371\u036D\x03\x02" +
        "\x02\x02\u0372s\x03\x02\x02\x02\u0373\u0374\b;\x01\x02\u0374\u0375\x05" +
        "v<\x02\u0375\u037B\x03\x02\x02\x02\u0376\u0377\f\x03\x02\x02\u0377\u0378" +
        "\x07Z\x02\x02\u0378\u037A\x05v<\x02\u0379\u0376\x03\x02\x02\x02\u037A" +
        "\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037B\u037C\x03\x02" +
        "\x02\x02\u037Cu\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037E\u037F" +
        "\x054\x1B\x02\u037F\u0380\x05`1\x02\u0380\u0386\x03\x02\x02\x02\u0381" +
        "\u0383\x056\x1C\x02\u0382\u0384\x05|?\x02\u0383\u0382\x03\x02\x02\x02" +
        "\u0383\u0384\x03\x02\x02\x02\u0384\u0386\x03\x02\x02\x02\u0385\u037E\x03" +
        "\x02\x02\x02\u0385\u0381\x03\x02\x02\x02\u0386w\x03\x02\x02\x02\u0387" +
        "\u0388\b=\x01\x02\u0388\u0389\x07k\x02\x02\u0389\u038F\x03\x02\x02\x02" +
        "\u038A\u038B\f\x03\x02\x02\u038B\u038C\x07Z\x02\x02\u038C\u038E\x07k\x02" +
        "\x02\u038D\u038A\x03\x02\x02\x02\u038E\u0391\x03\x02\x02\x02\u038F\u038D" +
        "\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390y\x03\x02\x02\x02\u0391" +
        "\u038F\x03\x02\x02\x02\u0392\u0394\x05J&\x02\u0393\u0395\x05|?\x02\u0394" +
        "\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395{\x03\x02\x02" +
        "\x02\u0396\u03A2\x05n8\x02\u0397\u0399\x05n8\x02\u0398\u0397\x03\x02\x02" +
        "\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039E" +
        "\x05~@\x02\u039B\u039D\x05d3\x02\u039C\u039B\x03\x02\x02\x02\u039D\u03A0" +
        "\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02" +
        "\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u0396\x03" +
        "\x02\x02\x02\u03A1\u0398\x03\x02\x02\x02\u03A2}\x03\x02\x02\x02\u03A3" +
        "\u03A4\b@\x01\x02\u03A4\u03A5\x07=\x02\x02\u03A5\u03A6\x05|?\x02\u03A6" +
        "\u03AA\x07>\x02\x02\u03A7\u03A9\x05d3\x02\u03A8\u03A7\x03\x02\x02\x02" +
        "\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03" +
        "\x02\x02\x02\u03AB\u03D2\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD" +
        "\u03AF\x07?\x02\x02\u03AE\u03B0\x05p9\x02\u03AF\u03AE\x03\x02\x02\x02" +
        "\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B2\x03\x02\x02\x02\u03B1\u03B3\x05" +
        "*\x16\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3" +
        "\u03B4\x03\x02\x02\x02\u03B4\u03D2\x07@\x02\x02\u03B5\u03B6\x07?\x02\x02" +
        "\u03B6\u03B8\x07*\x02\x02\u03B7\u03B9\x05p9\x02\u03B8\u03B7\x03\x02\x02" +
        "\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BB" +
        "\x05*\x16\x02\u03BB\u03BC\x07@\x02\x02\u03BC\u03D2\x03\x02\x02\x02\u03BD" +
        "\u03BE\x07?\x02\x02\u03BE\u03BF\x05p9\x02\u03BF\u03C0\x07*\x02\x02\u03C0" +
        "\u03C1\x05*\x16\x02\u03C1\u03C2\x07@\x02\x02\u03C2\u03D2\x03\x02\x02\x02" +
        "\u03C3\u03C4\x07?\x02\x02\u03C4\u03C5\x07M\x02\x02\u03C5\u03D2\x07@\x02" +
        "\x02\u03C6\u03C8\x07=\x02\x02\u03C7\u03C9\x05r:\x02\u03C8\u03C7\x03\x02" +
        "\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA" +
        "\u03CE\x07>\x02\x02\u03CB\u03CD\x05d3\x02\u03CC\u03CB\x03\x02\x02\x02" +
        "\u03CD\u03D0\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03" +
        "\x02\x02\x02\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1" +
        "\u03A3\x03\x02\x02\x02\u03D1\u03AD\x03\x02\x02\x02\u03D1\u03B5\x03\x02" +
        "\x02\x02\u03D1\u03BD\x03\x02\x02\x02\u03D1\u03C3\x03\x02\x02\x02\u03D1" +
        "\u03C6\x03\x02\x02\x02\u03D2\u03FE\x03\x02\x02\x02\u03D3\u03D4\f\x07\x02" +
        "\x02\u03D4\u03D6\x07?\x02\x02\u03D5\u03D7\x05p9\x02\u03D6\u03D5\x03\x02" +
        "\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D9\x03\x02\x02\x02\u03D8" +
        "\u03DA\x05*\x16\x02\u03D9\u03D8\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02" +
        "\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03FD\x07@\x02\x02\u03DC\u03DD" +
        "\f\x06\x02\x02\u03DD\u03DE\x07?\x02\x02\u03DE\u03E0\x07*\x02\x02\u03DF" +
        "\u03E1\x05p9\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02" +
        "\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x05*\x16\x02\u03E3\u03E4\x07" +
        "@\x02\x02\u03E4\u03FD\x03\x02\x02\x02\u03E5\u03E6\f\x05\x02\x02\u03E6" +
        "\u03E7\x07?\x02\x02\u03E7\u03E8\x05p9\x02\u03E8\u03E9\x07*\x02\x02\u03E9" +
        "\u03EA\x05*\x16\x02\u03EA\u03EB\x07@\x02\x02\u03EB\u03FD\x03\x02\x02\x02" +
        "\u03EC\u03ED\f\x04\x02\x02\u03ED\u03EE\x07?\x02\x02\u03EE\u03EF\x07M\x02" +
        "\x02\u03EF\u03FD\x07@\x02\x02\u03F0\u03F1\f\x03\x02\x02\u03F1\u03F3\x07" +
        "=\x02\x02\u03F2\u03F4\x05r:\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3\u03F4" +
        "\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F9\x07>\x02\x02" +
        "\u03F6\u03F8\x05d3\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8\u03FB\x03\x02" +
        "\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA" +
        "\u03FD\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FC\u03D3\x03\x02" +
        "\x02\x02\u03FC\u03DC\x03\x02\x02\x02\u03FC\u03E5\x03\x02\x02\x02\u03FC" +
        "\u03EC\x03\x02\x02\x02\u03FC\u03F0\x03\x02\x02\x02\u03FD\u0400\x03\x02" +
        "\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF" +
        "\x7F\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0402\x07k\x02" +
        "\x02\u0402\x81\x03\x02\x02\x02\u0403\u040E\x05*\x16\x02\u0404\u0405\x07" +
        "A\x02\x02\u0405\u0406\x05\x84C\x02\u0406\u0407\x07B\x02\x02\u0407\u040E" +
        "\x03\x02\x02\x02\u0408\u0409\x07A\x02\x02\u0409\u040A\x05\x84C\x02\u040A" +
        "\u040B\x07Z\x02\x02\u040B\u040C\x07B\x02\x02\u040C\u040E\x03\x02\x02\x02" +
        "\u040D\u0403\x03\x02\x02\x02\u040D\u0404\x03\x02\x02\x02\u040D\u0408\x03" +
        "\x02\x02\x02\u040E\x83\x03\x02\x02\x02\u040F\u0411\bC\x01\x02\u0410\u0412" +
        "\x05\x86D\x02\u0411\u0410\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02" +
        "\u0412\u0413\x03\x02\x02\x02\u0413\u0414\x05\x82B\x02\u0414\u041D\x03" +
        "\x02\x02\x02\u0415\u0416\f\x03\x02\x02\u0416\u0418\x07Z\x02\x02\u0417" +
        "\u0419\x05\x86D\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419\x03\x02\x02" +
        "\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041C\x05\x82B\x02\u041B\u0415" +
        "\x03\x02\x02\x02\u041C\u041F\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02" +
        "\u041D\u041E\x03\x02\x02\x02\u041E\x85\x03\x02\x02\x02\u041F\u041D\x03" +
        "\x02\x02\x02\u0420\u0421\x05\x88E\x02\u0421\u0422\x07[\x02\x02\u0422\x87" +
        "\x03\x02\x02\x02\u0423\u0424\bE\x01\x02\u0424\u0425\x05\x8AF\x02\u0425" +
        "\u042A\x03\x02\x02\x02\u0426\u0427\f\x03\x02\x02\u0427\u0429\x05\x8AF" +
        "\x02\u0428\u0426\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428" +
        "\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\x89\x03\x02\x02\x02" +
        "\u042C\u042A\x03\x02\x02\x02\u042D\u042E\x07?\x02\x02\u042E\u042F\x05" +
        "0\x19\x02\u042F\u0430\x07@\x02\x02\u0430\u0434\x03\x02\x02\x02\u0431\u0432" +
        "\x07i\x02\x02\u0432\u0434\x07k\x02\x02\u0433\u042D\x03\x02\x02\x02\u0433" +
        "\u0431\x03\x02\x02\x02";
    CParser._serializedATNSegment2 = "\u0434\x8B\x03\x02\x02\x02\u0435\u0436\x07;\x02\x02\u0436\u0437\x07=\x02" +
        "\x02\u0437\u0438\x050\x19\x02\u0438\u043A\x07Z\x02\x02\u0439\u043B\x07" +
        "n\x02\x02\u043A\u0439\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C" +
        "\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03\x02" +
        "\x02\x02\u043E\u043F\x07>\x02\x02\u043F\u0440\x07Y\x02\x02\u0440\x8D\x03" +
        "\x02\x02\x02\u0441\u0467\x05\x90I\x02\u0442\u0467\x05\x92J\x02\u0443\u0467" +
        "\x05\x98M\x02\u0444\u0467\x05\x9AN\x02\u0445\u0467\x05\x9CO\x02\u0446" +
        "\u0467\x05\xA4S\x02\u0447\u0448\t\f\x02\x02\u0448\u0449\t\r\x02\x02\u0449" +
        "\u0452\x07=\x02\x02\u044A\u044F\x05&\x14\x02\u044B\u044C\x07Z\x02\x02" +
        "\u044C\u044E\x05&\x14\x02\u044D\u044B\x03\x02\x02\x02\u044E\u0451\x03" +
        "\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450" +
        "\u0453\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0452\u044A\x03\x02" +
        "\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0461\x03\x02\x02\x02\u0454" +
        "\u045D\x07X\x02\x02\u0455\u045A\x05&\x14\x02\u0456\u0457\x07Z\x02\x02" +
        "\u0457\u0459\x05&\x14\x02\u0458\u0456\x03\x02\x02\x02\u0459\u045C\x03" +
        "\x02\x02\x02\u045A\u0458\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B" +
        "\u045E\x03\x02\x02\x02\u045C\u045A\x03\x02\x02\x02\u045D\u0455\x03\x02" +
        "\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u0460\x03\x02\x02\x02\u045F" +
        "\u0454\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02\u0461\u045F\x03\x02" +
        "\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0464\x03\x02\x02\x02\u0463" +
        "\u0461\x03\x02\x02\x02\u0464\u0465\x07>\x02\x02\u0465\u0467\x07Y\x02\x02" +
        "\u0466\u0441\x03\x02\x02\x02\u0466\u0442\x03\x02\x02\x02\u0466\u0443\x03" +
        "\x02\x02\x02\u0466\u0444\x03\x02\x02\x02\u0466\u0445\x03\x02\x02\x02\u0466" +
        "\u0446\x03\x02\x02\x02\u0466\u0447\x03\x02\x02\x02\u0467\x8F\x03\x02\x02" +
        "\x02\u0468\u0469\x07k\x02\x02\u0469\u046A\x07X\x02\x02\u046A\u0474\x05" +
        "\x8EH\x02\u046B\u046C\x07\x13\x02\x02\u046C\u046D\x050\x19\x02\u046D\u046E" +
        "\x07X\x02\x02\u046E\u046F\x05\x8EH\x02\u046F\u0474\x03\x02\x02\x02\u0470" +
        "\u0471\x07\x17\x02\x02\u0471\u0472\x07X\x02\x02\u0472\u0474\x05\x8EH\x02" +
        "\u0473\u0468\x03\x02\x02\x02\u0473\u046B\x03\x02\x02\x02\u0473\u0470\x03" +
        "\x02\x02\x02\u0474\x91\x03\x02\x02\x02\u0475\u0477\x07A\x02\x02\u0476" +
        "\u0478\x05\x94K\x02\u0477\u0476\x03\x02\x02\x02\u0477\u0478\x03\x02\x02" +
        "\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047A\x07B\x02\x02\u047A\x93\x03" +
        "\x02\x02\x02\u047B\u047C\bK\x01\x02\u047C\u047D\x05\x96L\x02\u047D\u0482" +
        "\x03\x02\x02\x02\u047E\u047F\f\x03\x02\x02\u047F\u0481\x05\x96L\x02\u0480" +
        "\u047E\x03\x02\x02\x02\u0481\u0484\x03\x02\x02\x02\u0482\u0480\x03\x02" +
        "\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\x95\x03\x02\x02\x02\u0484\u0482" +
        "\x03\x02\x02\x02\u0485\u0488\x05\x8EH\x02\u0486\u0488\x052\x1A\x02\u0487" +
        "\u0485\x03\x02\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488\x97\x03\x02\x02" +
        "\x02\u0489\u048B\x05.\x18\x02\u048A\u0489\x03\x02\x02\x02\u048A\u048B" +
        "\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C\u048D\x07Y\x02\x02" +
        "\u048D\x99\x03\x02\x02\x02\u048E\u048F\x07 \x02\x02\u048F\u0490\x07=\x02" +
        "\x02\u0490\u0491\x05.\x18\x02\u0491\u0492\x07>\x02\x02\u0492\u0495\x05" +
        "\x8EH\x02\u0493\u0494\x07\x1A\x02\x02\u0494\u0496\x05\x8EH\x02\u0495\u0493" +
        "\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u049E\x03\x02\x02\x02" +
        "\u0497\u0498\x07,\x02\x02\u0498\u0499\x07=\x02\x02\u0499\u049A\x05.\x18" +
        "\x02\u049A\u049B\x07>\x02\x02\u049B\u049C\x05\x8EH\x02\u049C\u049E\x03" +
        "\x02\x02\x02\u049D\u048E\x03\x02\x02\x02\u049D\u0497\x03\x02\x02\x02\u049E" +
        "\x9B\x03\x02\x02\x02\u049F\u04A0\x072\x02\x02\u04A0\u04A1\x07=\x02\x02" +
        "\u04A1\u04A2\x05.\x18\x02\u04A2\u04A3\x07>\x02\x02\u04A3\u04A4\x05\x8E" +
        "H\x02\u04A4\u04B4\x03\x02\x02\x02\u04A5\u04A6\x07\x18\x02\x02\u04A6\u04A7" +
        "\x05\x8EH\x02\u04A7\u04A8\x072\x02\x02\u04A8\u04A9\x07=\x02\x02\u04A9" +
        "\u04AA\x05.\x18\x02\u04AA\u04AB\x07>\x02\x02\u04AB\u04AC\x07Y\x02\x02" +
        "\u04AC\u04B4\x03\x02\x02\x02\u04AD\u04AE\x07\x1E\x02\x02\u04AE\u04AF\x07" +
        "=\x02\x02\u04AF\u04B0\x05\x9EP\x02\u04B0\u04B1\x07>\x02\x02\u04B1\u04B2" +
        "\x05\x8EH\x02\u04B2\u04B4\x03\x02\x02\x02\u04B3\u049F\x03\x02\x02\x02" +
        "\u04B3\u04A5\x03\x02\x02\x02\u04B3\u04AD\x03\x02\x02\x02\u04B4\x9D\x03" +
        "\x02\x02\x02\u04B5\u04B6\x05\xA0Q\x02\u04B6\u04B8\x07Y\x02\x02\u04B7\u04B9" +
        "\x05\xA2R\x02\u04B8\u04B7\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02" +
        "\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BC\x07Y\x02\x02\u04BB\u04BD\x05" +
        "\xA2R\x02\u04BC\u04BB\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD" +
        "\u04CA\x03\x02\x02\x02\u04BE\u04C0\x05.\x18\x02\u04BF\u04BE\x03\x02\x02" +
        "\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C3" +
        "\x07Y\x02\x02\u04C2\u04C4\x05\xA2R\x02\u04C3\u04C2\x03\x02\x02\x02\u04C3" +
        "\u04C4\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C7\x07Y\x02" +
        "\x02\u04C6\u04C8\x05\xA2R\x02\u04C7\u04C6\x03\x02\x02\x02\u04C7\u04C8" +
        "\x03\x02\x02\x02\u04C8\u04CA\x03\x02\x02\x02\u04C9\u04B5\x03\x02\x02\x02" +
        "\u04C9\u04BF\x03\x02\x02\x02\u04CA\x9F\x03\x02\x02\x02\u04CB\u04CC\x05" +
        "4\x1B\x02\u04CC\u04CD\x05:\x1E\x02\u04CD\u04D0\x03\x02\x02\x02\u04CE\u04D0" +
        "\x054\x1B\x02\u04CF\u04CB\x03\x02\x02\x02\u04CF\u04CE\x03\x02\x02\x02" +
        "\u04D0\xA1\x03\x02\x02\x02\u04D1\u04D2\bR\x01\x02\u04D2\u04D3\x05*\x16" +
        "\x02\u04D3\u04D9\x03\x02\x02\x02\u04D4\u04D5\f\x03\x02\x02\u04D5\u04D6" +
        "\x07Z\x02\x02\u04D6\u04D8\x05*\x16\x02\u04D7\u04D4\x03\x02\x02\x02\u04D8" +
        "\u04DB\x03\x02\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04D9\u04DA\x03\x02" +
        "\x02\x02\u04DA\xA3\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC\u04DD" +
        "\x07\x1F\x02\x02\u04DD\u04DE\x07k\x02\x02\u04DE\u04ED\x07Y\x02\x02\u04DF" +
        "\u04E0\x07\x16\x02\x02\u04E0\u04ED\x07Y\x02\x02\u04E1\u04E2\x07\x12\x02" +
        "\x02\u04E2\u04ED\x07Y\x02\x02\u04E3\u04E5\x07&\x02\x02\u04E4\u04E6\x05" +
        ".\x18\x02\u04E5\u04E4\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6" +
        "\u04E7\x03\x02\x02\x02\u04E7\u04ED\x07Y\x02\x02\u04E8\u04E9\x07\x1F\x02" +
        "\x02\u04E9\u04EA\x05\x0E\b\x02\u04EA\u04EB\x07Y\x02\x02\u04EB\u04ED\x03" +
        "\x02\x02\x02\u04EC\u04DC\x03\x02\x02\x02\u04EC\u04DF\x03\x02\x02\x02\u04EC" +
        "\u04E1\x03\x02\x02\x02\u04EC\u04E3\x03\x02\x02\x02\u04EC\u04E8\x03\x02" +
        "\x02\x02\u04ED\xA5\x03\x02\x02\x02\u04EE\u04F0\x05\xA8U\x02\u04EF\u04EE" +
        "\x03\x02\x02\x02\u04EF\u04F0\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02" +
        "\u04F1\u04F2\x07\x02\x02\x03\u04F2\xA7\x03\x02\x02\x02\u04F3\u04F4\bU" +
        "\x01\x02\u04F4\u04F5\x05\xAAV\x02\u04F5\u04FA\x03\x02\x02\x02\u04F6\u04F7" +
        "\f\x03\x02\x02\u04F7\u04F9\x05\xAAV\x02\u04F8\u04F6\x03\x02\x02\x02\u04F9" +
        "\u04FC\x03\x02\x02\x02\u04FA\u04F8\x03\x02\x02\x02\u04FA\u04FB\x03\x02" +
        "\x02\x02\u04FB\xA9\x03\x02\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FD\u0501" +
        "\x05\xACW\x02\u04FE\u0501\x052\x1A\x02\u04FF\u0501\x07Y\x02\x02\u0500" +
        "\u04FD\x03\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0500\u04FF\x03\x02" +
        "\x02\x02\u0501\xAB\x03\x02\x02\x02\u0502\u0504\x054\x1B\x02\u0503\u0502" +
        "\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02" +
        "\u0505\u0507\x05`1\x02\u0506\u0508\x05\xAEX\x02\u0507\u0506\x03\x02\x02" +
        "\x02\u0507\u0508\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050A" +
        "\x05\x92J\x02\u050A\xAD\x03\x02\x02\x02\u050B\u050C\bX\x01\x02\u050C\u050D" +
        "\x052\x1A\x02\u050D\u0512\x03\x02\x02\x02\u050E\u050F\f\x03\x02\x02\u050F" +
        "\u0511\x052\x1A\x02\u0510\u050E\x03\x02\x02\x02\u0511\u0514\x03\x02\x02" +
        "\x02\u0512\u0510\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\xAF" +
        "\x03\x02\x02\x02\u0514\u0512\x03\x02\x02\x02\x90\xB5\xBD\xD1\xE2\xEC\u0110" +
        "\u011A\u0127\u0129\u0134\u014D\u015E\u016C\u016E\u017A\u017C\u0188\u018A" +
        "\u019C\u019E\u01AA\u01AC\u01B7\u01C2\u01CD\u01D8\u01E3\u01EC\u01F4\u0200" +
        "\u020D\u0212\u0217\u021E\u0228\u0230\u0243\u0249\u024E\u0257\u0262\u0267" +
        "\u026C\u0270\u0274\u0276\u0280\u0285\u0289\u028D\u0295\u029E\u02A8\u02B0" +
        "\u02C1\u02CD\u02D0\u02D6\u02E4\u02EA\u02EF\u02F2\u02F9\u0308\u0314\u0317" +
        "\u0319\u0321\u0325\u0333\u0337\u033C\u033F\u0342\u0349\u034B\u0350\u0354" +
        "\u0359\u035D\u0360\u0369\u0371\u037B\u0383\u0385\u038F\u0394\u0398\u039E" +
        "\u03A1\u03AA\u03AF\u03B2\u03B8\u03C8\u03CE\u03D1\u03D6\u03D9\u03E0\u03F3" +
        "\u03F9\u03FC\u03FE\u040D\u0411\u0418\u041D\u042A\u0433\u043C\u044F\u0452" +
        "\u045A\u045D\u0461\u0466\u0473\u0477\u0482\u0487\u048A\u0495\u049D\u04B3" +
        "\u04B8\u04BC\u04BF\u04C3\u04C7\u04C9\u04CF\u04D9\u04E5\u04EC\u04EF\u04FA" +
        "\u0500\u0503\u0507\u0512";
    CParser._serializedATN = Utils.join([
        CParser._serializedATNSegment0,
        CParser._serializedATNSegment1,
        CParser._serializedATNSegment2,
    ], "");
    return CParser;
}(Parser_1.Parser));
exports.CParser = CParser;
var PrimaryExpressionContext = /** @class */ (function (_super) {
    __extends(PrimaryExpressionContext, _super);
    function PrimaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryExpressionContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    PrimaryExpressionContext.prototype.Constant = function () { return this.tryGetToken(CParser.Constant, 0); };
    PrimaryExpressionContext.prototype.StringLiteral = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.StringLiteral);
        }
        else {
            return this.getToken(CParser.StringLiteral, i);
        }
    };
    PrimaryExpressionContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    PrimaryExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    PrimaryExpressionContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    PrimaryExpressionContext.prototype.genericSelection = function () {
        return this.tryGetRuleContext(0, GenericSelectionContext);
    };
    PrimaryExpressionContext.prototype.compoundStatement = function () {
        return this.tryGetRuleContext(0, CompoundStatementContext);
    };
    PrimaryExpressionContext.prototype.unaryExpression = function () {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    };
    PrimaryExpressionContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    PrimaryExpressionContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(PrimaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_primaryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryExpression) {
            listener.enterPrimaryExpression(this);
        }
    };
    // @Override
    PrimaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryExpression) {
            listener.exitPrimaryExpression(this);
        }
    };
    // @Override
    PrimaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryExpression) {
            return visitor.visitPrimaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryExpressionContext = PrimaryExpressionContext;
var GenericSelectionContext = /** @class */ (function (_super) {
    __extends(GenericSelectionContext, _super);
    function GenericSelectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GenericSelectionContext.prototype.Generic = function () { return this.getToken(CParser.Generic, 0); };
    GenericSelectionContext.prototype.LeftParen = function () { return this.getToken(CParser.LeftParen, 0); };
    GenericSelectionContext.prototype.assignmentExpression = function () {
        return this.getRuleContext(0, AssignmentExpressionContext);
    };
    GenericSelectionContext.prototype.Comma = function () { return this.getToken(CParser.Comma, 0); };
    GenericSelectionContext.prototype.genericAssocList = function () {
        return this.getRuleContext(0, GenericAssocListContext);
    };
    GenericSelectionContext.prototype.RightParen = function () { return this.getToken(CParser.RightParen, 0); };
    Object.defineProperty(GenericSelectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_genericSelection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GenericSelectionContext.prototype.enterRule = function (listener) {
        if (listener.enterGenericSelection) {
            listener.enterGenericSelection(this);
        }
    };
    // @Override
    GenericSelectionContext.prototype.exitRule = function (listener) {
        if (listener.exitGenericSelection) {
            listener.exitGenericSelection(this);
        }
    };
    // @Override
    GenericSelectionContext.prototype.accept = function (visitor) {
        if (visitor.visitGenericSelection) {
            return visitor.visitGenericSelection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenericSelectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GenericSelectionContext = GenericSelectionContext;
var GenericAssocListContext = /** @class */ (function (_super) {
    __extends(GenericAssocListContext, _super);
    function GenericAssocListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GenericAssocListContext.prototype.genericAssociation = function () {
        return this.getRuleContext(0, GenericAssociationContext);
    };
    GenericAssocListContext.prototype.genericAssocList = function () {
        return this.tryGetRuleContext(0, GenericAssocListContext);
    };
    GenericAssocListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(GenericAssocListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_genericAssocList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GenericAssocListContext.prototype.enterRule = function (listener) {
        if (listener.enterGenericAssocList) {
            listener.enterGenericAssocList(this);
        }
    };
    // @Override
    GenericAssocListContext.prototype.exitRule = function (listener) {
        if (listener.exitGenericAssocList) {
            listener.exitGenericAssocList(this);
        }
    };
    // @Override
    GenericAssocListContext.prototype.accept = function (visitor) {
        if (visitor.visitGenericAssocList) {
            return visitor.visitGenericAssocList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenericAssocListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GenericAssocListContext = GenericAssocListContext;
var GenericAssociationContext = /** @class */ (function (_super) {
    __extends(GenericAssociationContext, _super);
    function GenericAssociationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GenericAssociationContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    GenericAssociationContext.prototype.Colon = function () { return this.getToken(CParser.Colon, 0); };
    GenericAssociationContext.prototype.assignmentExpression = function () {
        return this.getRuleContext(0, AssignmentExpressionContext);
    };
    GenericAssociationContext.prototype.Default = function () { return this.tryGetToken(CParser.Default, 0); };
    Object.defineProperty(GenericAssociationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_genericAssociation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GenericAssociationContext.prototype.enterRule = function (listener) {
        if (listener.enterGenericAssociation) {
            listener.enterGenericAssociation(this);
        }
    };
    // @Override
    GenericAssociationContext.prototype.exitRule = function (listener) {
        if (listener.exitGenericAssociation) {
            listener.exitGenericAssociation(this);
        }
    };
    // @Override
    GenericAssociationContext.prototype.accept = function (visitor) {
        if (visitor.visitGenericAssociation) {
            return visitor.visitGenericAssociation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenericAssociationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GenericAssociationContext = GenericAssociationContext;
var PostfixExpressionContext = /** @class */ (function (_super) {
    __extends(PostfixExpressionContext, _super);
    function PostfixExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostfixExpressionContext.prototype.primaryExpression = function () {
        return this.tryGetRuleContext(0, PrimaryExpressionContext);
    };
    PostfixExpressionContext.prototype.postfixExpression = function () {
        return this.tryGetRuleContext(0, PostfixExpressionContext);
    };
    PostfixExpressionContext.prototype.LeftBracket = function () { return this.tryGetToken(CParser.LeftBracket, 0); };
    PostfixExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    PostfixExpressionContext.prototype.RightBracket = function () { return this.tryGetToken(CParser.RightBracket, 0); };
    PostfixExpressionContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    PostfixExpressionContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    PostfixExpressionContext.prototype.argumentExpressionList = function () {
        return this.tryGetRuleContext(0, ArgumentExpressionListContext);
    };
    PostfixExpressionContext.prototype.Dot = function () { return this.tryGetToken(CParser.Dot, 0); };
    PostfixExpressionContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    PostfixExpressionContext.prototype.Arrow = function () { return this.tryGetToken(CParser.Arrow, 0); };
    PostfixExpressionContext.prototype.PlusPlus = function () { return this.tryGetToken(CParser.PlusPlus, 0); };
    PostfixExpressionContext.prototype.MinusMinus = function () { return this.tryGetToken(CParser.MinusMinus, 0); };
    PostfixExpressionContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    PostfixExpressionContext.prototype.LeftBrace = function () { return this.tryGetToken(CParser.LeftBrace, 0); };
    PostfixExpressionContext.prototype.initializerList = function () {
        return this.tryGetRuleContext(0, InitializerListContext);
    };
    PostfixExpressionContext.prototype.RightBrace = function () { return this.tryGetToken(CParser.RightBrace, 0); };
    PostfixExpressionContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(PostfixExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_postfixExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PostfixExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostfixExpression) {
            listener.enterPostfixExpression(this);
        }
    };
    // @Override
    PostfixExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostfixExpression) {
            listener.exitPostfixExpression(this);
        }
    };
    // @Override
    PostfixExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostfixExpression) {
            return visitor.visitPostfixExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostfixExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PostfixExpressionContext = PostfixExpressionContext;
var ArgumentExpressionListContext = /** @class */ (function (_super) {
    __extends(ArgumentExpressionListContext, _super);
    function ArgumentExpressionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentExpressionListContext.prototype.assignmentExpression = function () {
        return this.getRuleContext(0, AssignmentExpressionContext);
    };
    ArgumentExpressionListContext.prototype.argumentExpressionList = function () {
        return this.tryGetRuleContext(0, ArgumentExpressionListContext);
    };
    ArgumentExpressionListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(ArgumentExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_argumentExpressionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentExpressionListContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentExpressionList) {
            listener.enterArgumentExpressionList(this);
        }
    };
    // @Override
    ArgumentExpressionListContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentExpressionList) {
            listener.exitArgumentExpressionList(this);
        }
    };
    // @Override
    ArgumentExpressionListContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentExpressionList) {
            return visitor.visitArgumentExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentExpressionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentExpressionListContext = ArgumentExpressionListContext;
var UnaryExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryExpressionContext, _super);
    function UnaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryExpressionContext.prototype.postfixExpression = function () {
        return this.tryGetRuleContext(0, PostfixExpressionContext);
    };
    UnaryExpressionContext.prototype.PlusPlus = function () { return this.tryGetToken(CParser.PlusPlus, 0); };
    UnaryExpressionContext.prototype.unaryExpression = function () {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    };
    UnaryExpressionContext.prototype.MinusMinus = function () { return this.tryGetToken(CParser.MinusMinus, 0); };
    UnaryExpressionContext.prototype.unaryOperator = function () {
        return this.tryGetRuleContext(0, UnaryOperatorContext);
    };
    UnaryExpressionContext.prototype.castExpression = function () {
        return this.tryGetRuleContext(0, CastExpressionContext);
    };
    UnaryExpressionContext.prototype.Sizeof = function () { return this.tryGetToken(CParser.Sizeof, 0); };
    UnaryExpressionContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    UnaryExpressionContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    UnaryExpressionContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    UnaryExpressionContext.prototype.Alignof = function () { return this.tryGetToken(CParser.Alignof, 0); };
    UnaryExpressionContext.prototype.AndAnd = function () { return this.tryGetToken(CParser.AndAnd, 0); };
    UnaryExpressionContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    Object.defineProperty(UnaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_unaryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryExpression) {
            listener.enterUnaryExpression(this);
        }
    };
    // @Override
    UnaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryExpression) {
            listener.exitUnaryExpression(this);
        }
    };
    // @Override
    UnaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryExpressionContext = UnaryExpressionContext;
var UnaryOperatorContext = /** @class */ (function (_super) {
    __extends(UnaryOperatorContext, _super);
    function UnaryOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryOperatorContext.prototype.And = function () { return this.tryGetToken(CParser.And, 0); };
    UnaryOperatorContext.prototype.Star = function () { return this.tryGetToken(CParser.Star, 0); };
    UnaryOperatorContext.prototype.Plus = function () { return this.tryGetToken(CParser.Plus, 0); };
    UnaryOperatorContext.prototype.Minus = function () { return this.tryGetToken(CParser.Minus, 0); };
    UnaryOperatorContext.prototype.Tilde = function () { return this.tryGetToken(CParser.Tilde, 0); };
    UnaryOperatorContext.prototype.Not = function () { return this.tryGetToken(CParser.Not, 0); };
    Object.defineProperty(UnaryOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_unaryOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnaryOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryOperator) {
            listener.enterUnaryOperator(this);
        }
    };
    // @Override
    UnaryOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryOperator) {
            listener.exitUnaryOperator(this);
        }
    };
    // @Override
    UnaryOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryOperator) {
            return visitor.visitUnaryOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryOperatorContext = UnaryOperatorContext;
var CastExpressionContext = /** @class */ (function (_super) {
    __extends(CastExpressionContext, _super);
    function CastExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CastExpressionContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    CastExpressionContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    CastExpressionContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    CastExpressionContext.prototype.castExpression = function () {
        return this.tryGetRuleContext(0, CastExpressionContext);
    };
    CastExpressionContext.prototype.unaryExpression = function () {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    };
    CastExpressionContext.prototype.DigitSequence = function () { return this.tryGetToken(CParser.DigitSequence, 0); };
    Object.defineProperty(CastExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_castExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CastExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCastExpression) {
            listener.enterCastExpression(this);
        }
    };
    // @Override
    CastExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCastExpression) {
            listener.exitCastExpression(this);
        }
    };
    // @Override
    CastExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCastExpression) {
            return visitor.visitCastExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CastExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CastExpressionContext = CastExpressionContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeExpressionContext.prototype.castExpression = function () {
        return this.getRuleContext(0, CastExpressionContext);
    };
    MultiplicativeExpressionContext.prototype.multiplicativeExpression = function () {
        return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
    };
    MultiplicativeExpressionContext.prototype.Star = function () { return this.tryGetToken(CParser.Star, 0); };
    MultiplicativeExpressionContext.prototype.Div = function () { return this.tryGetToken(CParser.Div, 0); };
    MultiplicativeExpressionContext.prototype.Mod = function () { return this.tryGetToken(CParser.Mod, 0); };
    Object.defineProperty(MultiplicativeExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_multiplicativeExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicativeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveExpressionContext.prototype.multiplicativeExpression = function () {
        return this.getRuleContext(0, MultiplicativeExpressionContext);
    };
    AdditiveExpressionContext.prototype.additiveExpression = function () {
        return this.tryGetRuleContext(0, AdditiveExpressionContext);
    };
    AdditiveExpressionContext.prototype.Plus = function () { return this.tryGetToken(CParser.Plus, 0); };
    AdditiveExpressionContext.prototype.Minus = function () { return this.tryGetToken(CParser.Minus, 0); };
    Object.defineProperty(AdditiveExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_additiveExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditiveExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var ShiftExpressionContext = /** @class */ (function (_super) {
    __extends(ShiftExpressionContext, _super);
    function ShiftExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ShiftExpressionContext.prototype.additiveExpression = function () {
        return this.getRuleContext(0, AdditiveExpressionContext);
    };
    ShiftExpressionContext.prototype.shiftExpression = function () {
        return this.tryGetRuleContext(0, ShiftExpressionContext);
    };
    ShiftExpressionContext.prototype.LeftShift = function () { return this.tryGetToken(CParser.LeftShift, 0); };
    ShiftExpressionContext.prototype.RightShift = function () { return this.tryGetToken(CParser.RightShift, 0); };
    Object.defineProperty(ShiftExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_shiftExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ShiftExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterShiftExpression) {
            listener.enterShiftExpression(this);
        }
    };
    // @Override
    ShiftExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitShiftExpression) {
            listener.exitShiftExpression(this);
        }
    };
    // @Override
    ShiftExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitShiftExpression) {
            return visitor.visitShiftExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ShiftExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ShiftExpressionContext = ShiftExpressionContext;
var RelationalExpressionContext = /** @class */ (function (_super) {
    __extends(RelationalExpressionContext, _super);
    function RelationalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalExpressionContext.prototype.shiftExpression = function () {
        return this.getRuleContext(0, ShiftExpressionContext);
    };
    RelationalExpressionContext.prototype.relationalExpression = function () {
        return this.tryGetRuleContext(0, RelationalExpressionContext);
    };
    RelationalExpressionContext.prototype.Less = function () { return this.tryGetToken(CParser.Less, 0); };
    RelationalExpressionContext.prototype.Greater = function () { return this.tryGetToken(CParser.Greater, 0); };
    RelationalExpressionContext.prototype.LessEqual = function () { return this.tryGetToken(CParser.LessEqual, 0); };
    RelationalExpressionContext.prototype.GreaterEqual = function () { return this.tryGetToken(CParser.GreaterEqual, 0); };
    Object.defineProperty(RelationalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_relationalExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalExpressionContext = RelationalExpressionContext;
var EqualityExpressionContext = /** @class */ (function (_super) {
    __extends(EqualityExpressionContext, _super);
    function EqualityExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualityExpressionContext.prototype.relationalExpression = function () {
        return this.getRuleContext(0, RelationalExpressionContext);
    };
    EqualityExpressionContext.prototype.equalityExpression = function () {
        return this.tryGetRuleContext(0, EqualityExpressionContext);
    };
    EqualityExpressionContext.prototype.Equal = function () { return this.tryGetToken(CParser.Equal, 0); };
    EqualityExpressionContext.prototype.NotEqual = function () { return this.tryGetToken(CParser.NotEqual, 0); };
    Object.defineProperty(EqualityExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_equalityExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqualityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualityExpressionContext = EqualityExpressionContext;
var AndExpressionContext = /** @class */ (function (_super) {
    __extends(AndExpressionContext, _super);
    function AndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AndExpressionContext.prototype.equalityExpression = function () {
        return this.getRuleContext(0, EqualityExpressionContext);
    };
    AndExpressionContext.prototype.andExpression = function () {
        return this.tryGetRuleContext(0, AndExpressionContext);
    };
    AndExpressionContext.prototype.And = function () { return this.tryGetToken(CParser.And, 0); };
    Object.defineProperty(AndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_andExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAndExpression) {
            listener.enterAndExpression(this);
        }
    };
    // @Override
    AndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAndExpression) {
            listener.exitAndExpression(this);
        }
    };
    // @Override
    AndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AndExpressionContext = AndExpressionContext;
var ExclusiveOrExpressionContext = /** @class */ (function (_super) {
    __extends(ExclusiveOrExpressionContext, _super);
    function ExclusiveOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExclusiveOrExpressionContext.prototype.andExpression = function () {
        return this.getRuleContext(0, AndExpressionContext);
    };
    ExclusiveOrExpressionContext.prototype.exclusiveOrExpression = function () {
        return this.tryGetRuleContext(0, ExclusiveOrExpressionContext);
    };
    ExclusiveOrExpressionContext.prototype.Caret = function () { return this.tryGetToken(CParser.Caret, 0); };
    Object.defineProperty(ExclusiveOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_exclusiveOrExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExclusiveOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExclusiveOrExpression) {
            listener.enterExclusiveOrExpression(this);
        }
    };
    // @Override
    ExclusiveOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExclusiveOrExpression) {
            listener.exitExclusiveOrExpression(this);
        }
    };
    // @Override
    ExclusiveOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExclusiveOrExpression) {
            return visitor.visitExclusiveOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExclusiveOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExclusiveOrExpressionContext = ExclusiveOrExpressionContext;
var InclusiveOrExpressionContext = /** @class */ (function (_super) {
    __extends(InclusiveOrExpressionContext, _super);
    function InclusiveOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InclusiveOrExpressionContext.prototype.exclusiveOrExpression = function () {
        return this.getRuleContext(0, ExclusiveOrExpressionContext);
    };
    InclusiveOrExpressionContext.prototype.inclusiveOrExpression = function () {
        return this.tryGetRuleContext(0, InclusiveOrExpressionContext);
    };
    InclusiveOrExpressionContext.prototype.Or = function () { return this.tryGetToken(CParser.Or, 0); };
    Object.defineProperty(InclusiveOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_inclusiveOrExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InclusiveOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInclusiveOrExpression) {
            listener.enterInclusiveOrExpression(this);
        }
    };
    // @Override
    InclusiveOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInclusiveOrExpression) {
            listener.exitInclusiveOrExpression(this);
        }
    };
    // @Override
    InclusiveOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInclusiveOrExpression) {
            return visitor.visitInclusiveOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InclusiveOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InclusiveOrExpressionContext = InclusiveOrExpressionContext;
var LogicalAndExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalAndExpressionContext, _super);
    function LogicalAndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalAndExpressionContext.prototype.inclusiveOrExpression = function () {
        return this.getRuleContext(0, InclusiveOrExpressionContext);
    };
    LogicalAndExpressionContext.prototype.logicalAndExpression = function () {
        return this.tryGetRuleContext(0, LogicalAndExpressionContext);
    };
    LogicalAndExpressionContext.prototype.AndAnd = function () { return this.tryGetToken(CParser.AndAnd, 0); };
    Object.defineProperty(LogicalAndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_logicalAndExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicalAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalAndExpression) {
            listener.enterLogicalAndExpression(this);
        }
    };
    // @Override
    LogicalAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalAndExpression) {
            listener.exitLogicalAndExpression(this);
        }
    };
    // @Override
    LogicalAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalAndExpression) {
            return visitor.visitLogicalAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalAndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalAndExpressionContext = LogicalAndExpressionContext;
var LogicalOrExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalOrExpressionContext, _super);
    function LogicalOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalOrExpressionContext.prototype.logicalAndExpression = function () {
        return this.getRuleContext(0, LogicalAndExpressionContext);
    };
    LogicalOrExpressionContext.prototype.logicalOrExpression = function () {
        return this.tryGetRuleContext(0, LogicalOrExpressionContext);
    };
    LogicalOrExpressionContext.prototype.OrOr = function () { return this.tryGetToken(CParser.OrOr, 0); };
    Object.defineProperty(LogicalOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_logicalOrExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LogicalOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalOrExpression) {
            listener.enterLogicalOrExpression(this);
        }
    };
    // @Override
    LogicalOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalOrExpression) {
            listener.exitLogicalOrExpression(this);
        }
    };
    // @Override
    LogicalOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalOrExpression) {
            return visitor.visitLogicalOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalOrExpressionContext = LogicalOrExpressionContext;
var ConditionalExpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalExpressionContext, _super);
    function ConditionalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalExpressionContext.prototype.logicalOrExpression = function () {
        return this.getRuleContext(0, LogicalOrExpressionContext);
    };
    ConditionalExpressionContext.prototype.Question = function () { return this.tryGetToken(CParser.Question, 0); };
    ConditionalExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ConditionalExpressionContext.prototype.Colon = function () { return this.tryGetToken(CParser.Colon, 0); };
    ConditionalExpressionContext.prototype.conditionalExpression = function () {
        return this.tryGetRuleContext(0, ConditionalExpressionContext);
    };
    Object.defineProperty(ConditionalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_conditionalExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalExpression) {
            listener.enterConditionalExpression(this);
        }
    };
    // @Override
    ConditionalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalExpression) {
            listener.exitConditionalExpression(this);
        }
    };
    // @Override
    ConditionalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalExpression) {
            return visitor.visitConditionalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalExpressionContext = ConditionalExpressionContext;
var AssignmentExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentExpressionContext, _super);
    function AssignmentExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentExpressionContext.prototype.conditionalExpression = function () {
        return this.tryGetRuleContext(0, ConditionalExpressionContext);
    };
    AssignmentExpressionContext.prototype.unaryExpression = function () {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    };
    AssignmentExpressionContext.prototype.assignmentOperator = function () {
        return this.tryGetRuleContext(0, AssignmentOperatorContext);
    };
    AssignmentExpressionContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    AssignmentExpressionContext.prototype.DigitSequence = function () { return this.tryGetToken(CParser.DigitSequence, 0); };
    Object.defineProperty(AssignmentExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_assignmentExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentExpressionContext = AssignmentExpressionContext;
var AssignmentOperatorContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorContext, _super);
    function AssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOperatorContext.prototype.Assign = function () { return this.tryGetToken(CParser.Assign, 0); };
    AssignmentOperatorContext.prototype.StarAssign = function () { return this.tryGetToken(CParser.StarAssign, 0); };
    AssignmentOperatorContext.prototype.DivAssign = function () { return this.tryGetToken(CParser.DivAssign, 0); };
    AssignmentOperatorContext.prototype.ModAssign = function () { return this.tryGetToken(CParser.ModAssign, 0); };
    AssignmentOperatorContext.prototype.PlusAssign = function () { return this.tryGetToken(CParser.PlusAssign, 0); };
    AssignmentOperatorContext.prototype.MinusAssign = function () { return this.tryGetToken(CParser.MinusAssign, 0); };
    AssignmentOperatorContext.prototype.LeftShiftAssign = function () { return this.tryGetToken(CParser.LeftShiftAssign, 0); };
    AssignmentOperatorContext.prototype.RightShiftAssign = function () { return this.tryGetToken(CParser.RightShiftAssign, 0); };
    AssignmentOperatorContext.prototype.AndAssign = function () { return this.tryGetToken(CParser.AndAssign, 0); };
    AssignmentOperatorContext.prototype.XorAssign = function () { return this.tryGetToken(CParser.XorAssign, 0); };
    AssignmentOperatorContext.prototype.OrAssign = function () { return this.tryGetToken(CParser.OrAssign, 0); };
    Object.defineProperty(AssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_assignmentOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentOperatorContext = AssignmentOperatorContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.assignmentExpression = function () {
        return this.getRuleContext(0, AssignmentExpressionContext);
    };
    ExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ExpressionContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_expression; },
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
var ConstantExpressionContext = /** @class */ (function (_super) {
    __extends(ConstantExpressionContext, _super);
    function ConstantExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantExpressionContext.prototype.conditionalExpression = function () {
        return this.getRuleContext(0, ConditionalExpressionContext);
    };
    Object.defineProperty(ConstantExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_constantExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantExpression) {
            listener.enterConstantExpression(this);
        }
    };
    // @Override
    ConstantExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantExpression) {
            listener.exitConstantExpression(this);
        }
    };
    // @Override
    ConstantExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantExpression) {
            return visitor.visitConstantExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantExpressionContext = ConstantExpressionContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.declarationSpecifiers = function () {
        return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
    };
    DeclarationContext.prototype.initDeclaratorList = function () {
        return this.tryGetRuleContext(0, InitDeclaratorListContext);
    };
    DeclarationContext.prototype.Semi = function () { return this.tryGetToken(CParser.Semi, 0); };
    DeclarationContext.prototype.staticAssertDeclaration = function () {
        return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationContext = DeclarationContext;
var DeclarationSpecifiersContext = /** @class */ (function (_super) {
    __extends(DeclarationSpecifiersContext, _super);
    function DeclarationSpecifiersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationSpecifiersContext.prototype.declarationSpecifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationSpecifierContext);
        }
        else {
            return this.getRuleContext(i, DeclarationSpecifierContext);
        }
    };
    Object.defineProperty(DeclarationSpecifiersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarationSpecifiers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationSpecifiersContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclarationSpecifiers) {
            listener.enterDeclarationSpecifiers(this);
        }
    };
    // @Override
    DeclarationSpecifiersContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclarationSpecifiers) {
            listener.exitDeclarationSpecifiers(this);
        }
    };
    // @Override
    DeclarationSpecifiersContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclarationSpecifiers) {
            return visitor.visitDeclarationSpecifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationSpecifiersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationSpecifiersContext = DeclarationSpecifiersContext;
var DeclarationSpecifiers2Context = /** @class */ (function (_super) {
    __extends(DeclarationSpecifiers2Context, _super);
    function DeclarationSpecifiers2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationSpecifiers2Context.prototype.declarationSpecifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationSpecifierContext);
        }
        else {
            return this.getRuleContext(i, DeclarationSpecifierContext);
        }
    };
    Object.defineProperty(DeclarationSpecifiers2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarationSpecifiers2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationSpecifiers2Context.prototype.enterRule = function (listener) {
        if (listener.enterDeclarationSpecifiers2) {
            listener.enterDeclarationSpecifiers2(this);
        }
    };
    // @Override
    DeclarationSpecifiers2Context.prototype.exitRule = function (listener) {
        if (listener.exitDeclarationSpecifiers2) {
            listener.exitDeclarationSpecifiers2(this);
        }
    };
    // @Override
    DeclarationSpecifiers2Context.prototype.accept = function (visitor) {
        if (visitor.visitDeclarationSpecifiers2) {
            return visitor.visitDeclarationSpecifiers2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationSpecifiers2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationSpecifiers2Context = DeclarationSpecifiers2Context;
var DeclarationSpecifierContext = /** @class */ (function (_super) {
    __extends(DeclarationSpecifierContext, _super);
    function DeclarationSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationSpecifierContext.prototype.storageClassSpecifier = function () {
        return this.tryGetRuleContext(0, StorageClassSpecifierContext);
    };
    DeclarationSpecifierContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    DeclarationSpecifierContext.prototype.typeQualifier = function () {
        return this.tryGetRuleContext(0, TypeQualifierContext);
    };
    DeclarationSpecifierContext.prototype.functionSpecifier = function () {
        return this.tryGetRuleContext(0, FunctionSpecifierContext);
    };
    DeclarationSpecifierContext.prototype.alignmentSpecifier = function () {
        return this.tryGetRuleContext(0, AlignmentSpecifierContext);
    };
    Object.defineProperty(DeclarationSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarationSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclarationSpecifier) {
            listener.enterDeclarationSpecifier(this);
        }
    };
    // @Override
    DeclarationSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclarationSpecifier) {
            listener.exitDeclarationSpecifier(this);
        }
    };
    // @Override
    DeclarationSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclarationSpecifier) {
            return visitor.visitDeclarationSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationSpecifierContext = DeclarationSpecifierContext;
var InitDeclaratorListContext = /** @class */ (function (_super) {
    __extends(InitDeclaratorListContext, _super);
    function InitDeclaratorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitDeclaratorListContext.prototype.initDeclarator = function () {
        return this.getRuleContext(0, InitDeclaratorContext);
    };
    InitDeclaratorListContext.prototype.initDeclaratorList = function () {
        return this.tryGetRuleContext(0, InitDeclaratorListContext);
    };
    InitDeclaratorListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(InitDeclaratorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_initDeclaratorList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitDeclaratorListContext.prototype.enterRule = function (listener) {
        if (listener.enterInitDeclaratorList) {
            listener.enterInitDeclaratorList(this);
        }
    };
    // @Override
    InitDeclaratorListContext.prototype.exitRule = function (listener) {
        if (listener.exitInitDeclaratorList) {
            listener.exitInitDeclaratorList(this);
        }
    };
    // @Override
    InitDeclaratorListContext.prototype.accept = function (visitor) {
        if (visitor.visitInitDeclaratorList) {
            return visitor.visitInitDeclaratorList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitDeclaratorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitDeclaratorListContext = InitDeclaratorListContext;
var InitDeclaratorContext = /** @class */ (function (_super) {
    __extends(InitDeclaratorContext, _super);
    function InitDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitDeclaratorContext.prototype.declarator = function () {
        return this.getRuleContext(0, DeclaratorContext);
    };
    InitDeclaratorContext.prototype.Assign = function () { return this.tryGetToken(CParser.Assign, 0); };
    InitDeclaratorContext.prototype.initializer = function () {
        return this.tryGetRuleContext(0, InitializerContext);
    };
    Object.defineProperty(InitDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_initDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterInitDeclarator) {
            listener.enterInitDeclarator(this);
        }
    };
    // @Override
    InitDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitInitDeclarator) {
            listener.exitInitDeclarator(this);
        }
    };
    // @Override
    InitDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitInitDeclarator) {
            return visitor.visitInitDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitDeclaratorContext = InitDeclaratorContext;
var StorageClassSpecifierContext = /** @class */ (function (_super) {
    __extends(StorageClassSpecifierContext, _super);
    function StorageClassSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StorageClassSpecifierContext.prototype.Typedef = function () { return this.tryGetToken(CParser.Typedef, 0); };
    StorageClassSpecifierContext.prototype.Extern = function () { return this.tryGetToken(CParser.Extern, 0); };
    StorageClassSpecifierContext.prototype.Static = function () { return this.tryGetToken(CParser.Static, 0); };
    StorageClassSpecifierContext.prototype.ThreadLocal = function () { return this.tryGetToken(CParser.ThreadLocal, 0); };
    StorageClassSpecifierContext.prototype.Auto = function () { return this.tryGetToken(CParser.Auto, 0); };
    StorageClassSpecifierContext.prototype.Register = function () { return this.tryGetToken(CParser.Register, 0); };
    Object.defineProperty(StorageClassSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_storageClassSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StorageClassSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterStorageClassSpecifier) {
            listener.enterStorageClassSpecifier(this);
        }
    };
    // @Override
    StorageClassSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitStorageClassSpecifier) {
            listener.exitStorageClassSpecifier(this);
        }
    };
    // @Override
    StorageClassSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitStorageClassSpecifier) {
            return visitor.visitStorageClassSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StorageClassSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StorageClassSpecifierContext = StorageClassSpecifierContext;
var TypeSpecifierContext = /** @class */ (function (_super) {
    __extends(TypeSpecifierContext, _super);
    function TypeSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSpecifierContext.prototype.Void = function () { return this.tryGetToken(CParser.Void, 0); };
    TypeSpecifierContext.prototype.Char = function () { return this.tryGetToken(CParser.Char, 0); };
    TypeSpecifierContext.prototype.Short = function () { return this.tryGetToken(CParser.Short, 0); };
    TypeSpecifierContext.prototype.Int = function () { return this.tryGetToken(CParser.Int, 0); };
    TypeSpecifierContext.prototype.Long = function () { return this.tryGetToken(CParser.Long, 0); };
    TypeSpecifierContext.prototype.Float = function () { return this.tryGetToken(CParser.Float, 0); };
    TypeSpecifierContext.prototype.Double = function () { return this.tryGetToken(CParser.Double, 0); };
    TypeSpecifierContext.prototype.Signed = function () { return this.tryGetToken(CParser.Signed, 0); };
    TypeSpecifierContext.prototype.Unsigned = function () { return this.tryGetToken(CParser.Unsigned, 0); };
    TypeSpecifierContext.prototype.Bool = function () { return this.tryGetToken(CParser.Bool, 0); };
    TypeSpecifierContext.prototype.Complex = function () { return this.tryGetToken(CParser.Complex, 0); };
    TypeSpecifierContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    TypeSpecifierContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    TypeSpecifierContext.prototype.atomicTypeSpecifier = function () {
        return this.tryGetRuleContext(0, AtomicTypeSpecifierContext);
    };
    TypeSpecifierContext.prototype.structOrUnionSpecifier = function () {
        return this.tryGetRuleContext(0, StructOrUnionSpecifierContext);
    };
    TypeSpecifierContext.prototype.enumSpecifier = function () {
        return this.tryGetRuleContext(0, EnumSpecifierContext);
    };
    TypeSpecifierContext.prototype.typedefName = function () {
        return this.tryGetRuleContext(0, TypedefNameContext);
    };
    TypeSpecifierContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    TypeSpecifierContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    TypeSpecifierContext.prototype.pointer = function () {
        return this.tryGetRuleContext(0, PointerContext);
    };
    Object.defineProperty(TypeSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_typeSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSpecifier) {
            listener.enterTypeSpecifier(this);
        }
    };
    // @Override
    TypeSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSpecifier) {
            listener.exitTypeSpecifier(this);
        }
    };
    // @Override
    TypeSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSpecifier) {
            return visitor.visitTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSpecifierContext = TypeSpecifierContext;
var StructOrUnionSpecifierContext = /** @class */ (function (_super) {
    __extends(StructOrUnionSpecifierContext, _super);
    function StructOrUnionSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructOrUnionSpecifierContext.prototype.structOrUnion = function () {
        return this.getRuleContext(0, StructOrUnionContext);
    };
    StructOrUnionSpecifierContext.prototype.LeftBrace = function () { return this.tryGetToken(CParser.LeftBrace, 0); };
    StructOrUnionSpecifierContext.prototype.structDeclarationList = function () {
        return this.tryGetRuleContext(0, StructDeclarationListContext);
    };
    StructOrUnionSpecifierContext.prototype.RightBrace = function () { return this.tryGetToken(CParser.RightBrace, 0); };
    StructOrUnionSpecifierContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    Object.defineProperty(StructOrUnionSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structOrUnionSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructOrUnionSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterStructOrUnionSpecifier) {
            listener.enterStructOrUnionSpecifier(this);
        }
    };
    // @Override
    StructOrUnionSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitStructOrUnionSpecifier) {
            listener.exitStructOrUnionSpecifier(this);
        }
    };
    // @Override
    StructOrUnionSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitStructOrUnionSpecifier) {
            return visitor.visitStructOrUnionSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructOrUnionSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructOrUnionSpecifierContext = StructOrUnionSpecifierContext;
var StructOrUnionContext = /** @class */ (function (_super) {
    __extends(StructOrUnionContext, _super);
    function StructOrUnionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructOrUnionContext.prototype.Struct = function () { return this.tryGetToken(CParser.Struct, 0); };
    StructOrUnionContext.prototype.Union = function () { return this.tryGetToken(CParser.Union, 0); };
    Object.defineProperty(StructOrUnionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structOrUnion; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructOrUnionContext.prototype.enterRule = function (listener) {
        if (listener.enterStructOrUnion) {
            listener.enterStructOrUnion(this);
        }
    };
    // @Override
    StructOrUnionContext.prototype.exitRule = function (listener) {
        if (listener.exitStructOrUnion) {
            listener.exitStructOrUnion(this);
        }
    };
    // @Override
    StructOrUnionContext.prototype.accept = function (visitor) {
        if (visitor.visitStructOrUnion) {
            return visitor.visitStructOrUnion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructOrUnionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructOrUnionContext = StructOrUnionContext;
var StructDeclarationListContext = /** @class */ (function (_super) {
    __extends(StructDeclarationListContext, _super);
    function StructDeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclarationListContext.prototype.structDeclaration = function () {
        return this.getRuleContext(0, StructDeclarationContext);
    };
    StructDeclarationListContext.prototype.structDeclarationList = function () {
        return this.tryGetRuleContext(0, StructDeclarationListContext);
    };
    Object.defineProperty(StructDeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structDeclarationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructDeclarationListContext.prototype.enterRule = function (listener) {
        if (listener.enterStructDeclarationList) {
            listener.enterStructDeclarationList(this);
        }
    };
    // @Override
    StructDeclarationListContext.prototype.exitRule = function (listener) {
        if (listener.exitStructDeclarationList) {
            listener.exitStructDeclarationList(this);
        }
    };
    // @Override
    StructDeclarationListContext.prototype.accept = function (visitor) {
        if (visitor.visitStructDeclarationList) {
            return visitor.visitStructDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructDeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclarationListContext = StructDeclarationListContext;
var StructDeclarationContext = /** @class */ (function (_super) {
    __extends(StructDeclarationContext, _super);
    function StructDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclarationContext.prototype.specifierQualifierList = function () {
        return this.tryGetRuleContext(0, SpecifierQualifierListContext);
    };
    StructDeclarationContext.prototype.Semi = function () { return this.tryGetToken(CParser.Semi, 0); };
    StructDeclarationContext.prototype.structDeclaratorList = function () {
        return this.tryGetRuleContext(0, StructDeclaratorListContext);
    };
    StructDeclarationContext.prototype.staticAssertDeclaration = function () {
        return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
    };
    Object.defineProperty(StructDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterStructDeclaration) {
            listener.enterStructDeclaration(this);
        }
    };
    // @Override
    StructDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitStructDeclaration) {
            listener.exitStructDeclaration(this);
        }
    };
    // @Override
    StructDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitStructDeclaration) {
            return visitor.visitStructDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclarationContext = StructDeclarationContext;
var SpecifierQualifierListContext = /** @class */ (function (_super) {
    __extends(SpecifierQualifierListContext, _super);
    function SpecifierQualifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpecifierQualifierListContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    SpecifierQualifierListContext.prototype.specifierQualifierList = function () {
        return this.tryGetRuleContext(0, SpecifierQualifierListContext);
    };
    SpecifierQualifierListContext.prototype.typeQualifier = function () {
        return this.tryGetRuleContext(0, TypeQualifierContext);
    };
    Object.defineProperty(SpecifierQualifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_specifierQualifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpecifierQualifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecifierQualifierList) {
            listener.enterSpecifierQualifierList(this);
        }
    };
    // @Override
    SpecifierQualifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecifierQualifierList) {
            listener.exitSpecifierQualifierList(this);
        }
    };
    // @Override
    SpecifierQualifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecifierQualifierList) {
            return visitor.visitSpecifierQualifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecifierQualifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecifierQualifierListContext = SpecifierQualifierListContext;
var StructDeclaratorListContext = /** @class */ (function (_super) {
    __extends(StructDeclaratorListContext, _super);
    function StructDeclaratorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclaratorListContext.prototype.structDeclarator = function () {
        return this.getRuleContext(0, StructDeclaratorContext);
    };
    StructDeclaratorListContext.prototype.structDeclaratorList = function () {
        return this.tryGetRuleContext(0, StructDeclaratorListContext);
    };
    StructDeclaratorListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(StructDeclaratorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structDeclaratorList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructDeclaratorListContext.prototype.enterRule = function (listener) {
        if (listener.enterStructDeclaratorList) {
            listener.enterStructDeclaratorList(this);
        }
    };
    // @Override
    StructDeclaratorListContext.prototype.exitRule = function (listener) {
        if (listener.exitStructDeclaratorList) {
            listener.exitStructDeclaratorList(this);
        }
    };
    // @Override
    StructDeclaratorListContext.prototype.accept = function (visitor) {
        if (visitor.visitStructDeclaratorList) {
            return visitor.visitStructDeclaratorList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructDeclaratorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclaratorListContext = StructDeclaratorListContext;
var StructDeclaratorContext = /** @class */ (function (_super) {
    __extends(StructDeclaratorContext, _super);
    function StructDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclaratorContext.prototype.declarator = function () {
        return this.tryGetRuleContext(0, DeclaratorContext);
    };
    StructDeclaratorContext.prototype.Colon = function () { return this.tryGetToken(CParser.Colon, 0); };
    StructDeclaratorContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    Object.defineProperty(StructDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterStructDeclarator) {
            listener.enterStructDeclarator(this);
        }
    };
    // @Override
    StructDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitStructDeclarator) {
            listener.exitStructDeclarator(this);
        }
    };
    // @Override
    StructDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitStructDeclarator) {
            return visitor.visitStructDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclaratorContext = StructDeclaratorContext;
var EnumSpecifierContext = /** @class */ (function (_super) {
    __extends(EnumSpecifierContext, _super);
    function EnumSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumSpecifierContext.prototype.Enum = function () { return this.getToken(CParser.Enum, 0); };
    EnumSpecifierContext.prototype.LeftBrace = function () { return this.tryGetToken(CParser.LeftBrace, 0); };
    EnumSpecifierContext.prototype.enumeratorList = function () {
        return this.tryGetRuleContext(0, EnumeratorListContext);
    };
    EnumSpecifierContext.prototype.RightBrace = function () { return this.tryGetToken(CParser.RightBrace, 0); };
    EnumSpecifierContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    EnumSpecifierContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(EnumSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_enumSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumSpecifier) {
            listener.enterEnumSpecifier(this);
        }
    };
    // @Override
    EnumSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumSpecifier) {
            listener.exitEnumSpecifier(this);
        }
    };
    // @Override
    EnumSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumSpecifier) {
            return visitor.visitEnumSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumSpecifierContext = EnumSpecifierContext;
var EnumeratorListContext = /** @class */ (function (_super) {
    __extends(EnumeratorListContext, _super);
    function EnumeratorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratorListContext.prototype.enumerator = function () {
        return this.getRuleContext(0, EnumeratorContext);
    };
    EnumeratorListContext.prototype.enumeratorList = function () {
        return this.tryGetRuleContext(0, EnumeratorListContext);
    };
    EnumeratorListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(EnumeratorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_enumeratorList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumeratorListContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumeratorList) {
            listener.enterEnumeratorList(this);
        }
    };
    // @Override
    EnumeratorListContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumeratorList) {
            listener.exitEnumeratorList(this);
        }
    };
    // @Override
    EnumeratorListContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumeratorList) {
            return visitor.visitEnumeratorList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumeratorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumeratorListContext = EnumeratorListContext;
var EnumeratorContext = /** @class */ (function (_super) {
    __extends(EnumeratorContext, _super);
    function EnumeratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratorContext.prototype.enumerationConstant = function () {
        return this.getRuleContext(0, EnumerationConstantContext);
    };
    EnumeratorContext.prototype.Assign = function () { return this.tryGetToken(CParser.Assign, 0); };
    EnumeratorContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    Object.defineProperty(EnumeratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_enumerator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumeratorContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumerator) {
            listener.enterEnumerator(this);
        }
    };
    // @Override
    EnumeratorContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumerator) {
            listener.exitEnumerator(this);
        }
    };
    // @Override
    EnumeratorContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumerator) {
            return visitor.visitEnumerator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumeratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumeratorContext = EnumeratorContext;
var EnumerationConstantContext = /** @class */ (function (_super) {
    __extends(EnumerationConstantContext, _super);
    function EnumerationConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumerationConstantContext.prototype.Identifier = function () { return this.getToken(CParser.Identifier, 0); };
    Object.defineProperty(EnumerationConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_enumerationConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumerationConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumerationConstant) {
            listener.enterEnumerationConstant(this);
        }
    };
    // @Override
    EnumerationConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumerationConstant) {
            listener.exitEnumerationConstant(this);
        }
    };
    // @Override
    EnumerationConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumerationConstant) {
            return visitor.visitEnumerationConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumerationConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumerationConstantContext = EnumerationConstantContext;
var AtomicTypeSpecifierContext = /** @class */ (function (_super) {
    __extends(AtomicTypeSpecifierContext, _super);
    function AtomicTypeSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomicTypeSpecifierContext.prototype.Atomic = function () { return this.getToken(CParser.Atomic, 0); };
    AtomicTypeSpecifierContext.prototype.LeftParen = function () { return this.getToken(CParser.LeftParen, 0); };
    AtomicTypeSpecifierContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    AtomicTypeSpecifierContext.prototype.RightParen = function () { return this.getToken(CParser.RightParen, 0); };
    Object.defineProperty(AtomicTypeSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_atomicTypeSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomicTypeSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomicTypeSpecifier) {
            listener.enterAtomicTypeSpecifier(this);
        }
    };
    // @Override
    AtomicTypeSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomicTypeSpecifier) {
            listener.exitAtomicTypeSpecifier(this);
        }
    };
    // @Override
    AtomicTypeSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomicTypeSpecifier) {
            return visitor.visitAtomicTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomicTypeSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomicTypeSpecifierContext = AtomicTypeSpecifierContext;
var TypeQualifierContext = /** @class */ (function (_super) {
    __extends(TypeQualifierContext, _super);
    function TypeQualifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeQualifierContext.prototype.Const = function () { return this.tryGetToken(CParser.Const, 0); };
    TypeQualifierContext.prototype.Restrict = function () { return this.tryGetToken(CParser.Restrict, 0); };
    TypeQualifierContext.prototype.Volatile = function () { return this.tryGetToken(CParser.Volatile, 0); };
    TypeQualifierContext.prototype.Atomic = function () { return this.tryGetToken(CParser.Atomic, 0); };
    Object.defineProperty(TypeQualifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_typeQualifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeQualifierContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeQualifier) {
            listener.enterTypeQualifier(this);
        }
    };
    // @Override
    TypeQualifierContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeQualifier) {
            listener.exitTypeQualifier(this);
        }
    };
    // @Override
    TypeQualifierContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeQualifier) {
            return visitor.visitTypeQualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeQualifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeQualifierContext = TypeQualifierContext;
var FunctionSpecifierContext = /** @class */ (function (_super) {
    __extends(FunctionSpecifierContext, _super);
    function FunctionSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionSpecifierContext.prototype.Inline = function () { return this.tryGetToken(CParser.Inline, 0); };
    FunctionSpecifierContext.prototype.Noreturn = function () { return this.tryGetToken(CParser.Noreturn, 0); };
    FunctionSpecifierContext.prototype.gccAttributeSpecifier = function () {
        return this.tryGetRuleContext(0, GccAttributeSpecifierContext);
    };
    FunctionSpecifierContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    FunctionSpecifierContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    FunctionSpecifierContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    Object.defineProperty(FunctionSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_functionSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionSpecifier) {
            listener.enterFunctionSpecifier(this);
        }
    };
    // @Override
    FunctionSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionSpecifier) {
            listener.exitFunctionSpecifier(this);
        }
    };
    // @Override
    FunctionSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionSpecifier) {
            return visitor.visitFunctionSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionSpecifierContext = FunctionSpecifierContext;
var AlignmentSpecifierContext = /** @class */ (function (_super) {
    __extends(AlignmentSpecifierContext, _super);
    function AlignmentSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlignmentSpecifierContext.prototype.Alignas = function () { return this.getToken(CParser.Alignas, 0); };
    AlignmentSpecifierContext.prototype.LeftParen = function () { return this.getToken(CParser.LeftParen, 0); };
    AlignmentSpecifierContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    AlignmentSpecifierContext.prototype.RightParen = function () { return this.getToken(CParser.RightParen, 0); };
    AlignmentSpecifierContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    Object.defineProperty(AlignmentSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_alignmentSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlignmentSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAlignmentSpecifier) {
            listener.enterAlignmentSpecifier(this);
        }
    };
    // @Override
    AlignmentSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAlignmentSpecifier) {
            listener.exitAlignmentSpecifier(this);
        }
    };
    // @Override
    AlignmentSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAlignmentSpecifier) {
            return visitor.visitAlignmentSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlignmentSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlignmentSpecifierContext = AlignmentSpecifierContext;
var DeclaratorContext = /** @class */ (function (_super) {
    __extends(DeclaratorContext, _super);
    function DeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclaratorContext.prototype.directDeclarator = function () {
        return this.getRuleContext(0, DirectDeclaratorContext);
    };
    DeclaratorContext.prototype.pointer = function () {
        return this.tryGetRuleContext(0, PointerContext);
    };
    DeclaratorContext.prototype.gccDeclaratorExtension = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GccDeclaratorExtensionContext);
        }
        else {
            return this.getRuleContext(i, GccDeclaratorExtensionContext);
        }
    };
    Object.defineProperty(DeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclarator) {
            listener.enterDeclarator(this);
        }
    };
    // @Override
    DeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclarator) {
            listener.exitDeclarator(this);
        }
    };
    // @Override
    DeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclarator) {
            return visitor.visitDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclaratorContext = DeclaratorContext;
var DirectDeclaratorContext = /** @class */ (function (_super) {
    __extends(DirectDeclaratorContext, _super);
    function DirectDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectDeclaratorContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    DirectDeclaratorContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    DirectDeclaratorContext.prototype.declarator = function () {
        return this.tryGetRuleContext(0, DeclaratorContext);
    };
    DirectDeclaratorContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    DirectDeclaratorContext.prototype.directDeclarator = function () {
        return this.tryGetRuleContext(0, DirectDeclaratorContext);
    };
    DirectDeclaratorContext.prototype.LeftBracket = function () { return this.tryGetToken(CParser.LeftBracket, 0); };
    DirectDeclaratorContext.prototype.RightBracket = function () { return this.tryGetToken(CParser.RightBracket, 0); };
    DirectDeclaratorContext.prototype.typeQualifierList = function () {
        return this.tryGetRuleContext(0, TypeQualifierListContext);
    };
    DirectDeclaratorContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    DirectDeclaratorContext.prototype.Static = function () { return this.tryGetToken(CParser.Static, 0); };
    DirectDeclaratorContext.prototype.Star = function () { return this.tryGetToken(CParser.Star, 0); };
    DirectDeclaratorContext.prototype.parameterTypeList = function () {
        return this.tryGetRuleContext(0, ParameterTypeListContext);
    };
    DirectDeclaratorContext.prototype.identifierList = function () {
        return this.tryGetRuleContext(0, IdentifierListContext);
    };
    DirectDeclaratorContext.prototype.Colon = function () { return this.tryGetToken(CParser.Colon, 0); };
    DirectDeclaratorContext.prototype.DigitSequence = function () { return this.tryGetToken(CParser.DigitSequence, 0); };
    DirectDeclaratorContext.prototype.pointer = function () {
        return this.tryGetRuleContext(0, PointerContext);
    };
    DirectDeclaratorContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    Object.defineProperty(DirectDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_directDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectDeclarator) {
            listener.enterDirectDeclarator(this);
        }
    };
    // @Override
    DirectDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectDeclarator) {
            listener.exitDirectDeclarator(this);
        }
    };
    // @Override
    DirectDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectDeclarator) {
            return visitor.visitDirectDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectDeclaratorContext = DirectDeclaratorContext;
var GccDeclaratorExtensionContext = /** @class */ (function (_super) {
    __extends(GccDeclaratorExtensionContext, _super);
    function GccDeclaratorExtensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GccDeclaratorExtensionContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    GccDeclaratorExtensionContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    GccDeclaratorExtensionContext.prototype.StringLiteral = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.StringLiteral);
        }
        else {
            return this.getToken(CParser.StringLiteral, i);
        }
    };
    GccDeclaratorExtensionContext.prototype.gccAttributeSpecifier = function () {
        return this.tryGetRuleContext(0, GccAttributeSpecifierContext);
    };
    Object.defineProperty(GccDeclaratorExtensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_gccDeclaratorExtension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GccDeclaratorExtensionContext.prototype.enterRule = function (listener) {
        if (listener.enterGccDeclaratorExtension) {
            listener.enterGccDeclaratorExtension(this);
        }
    };
    // @Override
    GccDeclaratorExtensionContext.prototype.exitRule = function (listener) {
        if (listener.exitGccDeclaratorExtension) {
            listener.exitGccDeclaratorExtension(this);
        }
    };
    // @Override
    GccDeclaratorExtensionContext.prototype.accept = function (visitor) {
        if (visitor.visitGccDeclaratorExtension) {
            return visitor.visitGccDeclaratorExtension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GccDeclaratorExtensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GccDeclaratorExtensionContext = GccDeclaratorExtensionContext;
var GccAttributeSpecifierContext = /** @class */ (function (_super) {
    __extends(GccAttributeSpecifierContext, _super);
    function GccAttributeSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GccAttributeSpecifierContext.prototype.LeftParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.LeftParen);
        }
        else {
            return this.getToken(CParser.LeftParen, i);
        }
    };
    GccAttributeSpecifierContext.prototype.gccAttributeList = function () {
        return this.getRuleContext(0, GccAttributeListContext);
    };
    GccAttributeSpecifierContext.prototype.RightParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.RightParen);
        }
        else {
            return this.getToken(CParser.RightParen, i);
        }
    };
    Object.defineProperty(GccAttributeSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_gccAttributeSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GccAttributeSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterGccAttributeSpecifier) {
            listener.enterGccAttributeSpecifier(this);
        }
    };
    // @Override
    GccAttributeSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitGccAttributeSpecifier) {
            listener.exitGccAttributeSpecifier(this);
        }
    };
    // @Override
    GccAttributeSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitGccAttributeSpecifier) {
            return visitor.visitGccAttributeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GccAttributeSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GccAttributeSpecifierContext = GccAttributeSpecifierContext;
var GccAttributeListContext = /** @class */ (function (_super) {
    __extends(GccAttributeListContext, _super);
    function GccAttributeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GccAttributeListContext.prototype.gccAttribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GccAttributeContext);
        }
        else {
            return this.getRuleContext(i, GccAttributeContext);
        }
    };
    GccAttributeListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(GccAttributeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_gccAttributeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GccAttributeListContext.prototype.enterRule = function (listener) {
        if (listener.enterGccAttributeList) {
            listener.enterGccAttributeList(this);
        }
    };
    // @Override
    GccAttributeListContext.prototype.exitRule = function (listener) {
        if (listener.exitGccAttributeList) {
            listener.exitGccAttributeList(this);
        }
    };
    // @Override
    GccAttributeListContext.prototype.accept = function (visitor) {
        if (visitor.visitGccAttributeList) {
            return visitor.visitGccAttributeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GccAttributeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GccAttributeListContext = GccAttributeListContext;
var GccAttributeContext = /** @class */ (function (_super) {
    __extends(GccAttributeContext, _super);
    function GccAttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GccAttributeContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    GccAttributeContext.prototype.LeftParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.LeftParen);
        }
        else {
            return this.getToken(CParser.LeftParen, i);
        }
    };
    GccAttributeContext.prototype.RightParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.RightParen);
        }
        else {
            return this.getToken(CParser.RightParen, i);
        }
    };
    GccAttributeContext.prototype.argumentExpressionList = function () {
        return this.tryGetRuleContext(0, ArgumentExpressionListContext);
    };
    Object.defineProperty(GccAttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_gccAttribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GccAttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterGccAttribute) {
            listener.enterGccAttribute(this);
        }
    };
    // @Override
    GccAttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitGccAttribute) {
            listener.exitGccAttribute(this);
        }
    };
    // @Override
    GccAttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitGccAttribute) {
            return visitor.visitGccAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GccAttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GccAttributeContext = GccAttributeContext;
var NestedParenthesesBlockContext = /** @class */ (function (_super) {
    __extends(NestedParenthesesBlockContext, _super);
    function NestedParenthesesBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NestedParenthesesBlockContext.prototype.LeftParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.LeftParen);
        }
        else {
            return this.getToken(CParser.LeftParen, i);
        }
    };
    NestedParenthesesBlockContext.prototype.nestedParenthesesBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NestedParenthesesBlockContext);
        }
        else {
            return this.getRuleContext(i, NestedParenthesesBlockContext);
        }
    };
    NestedParenthesesBlockContext.prototype.RightParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.RightParen);
        }
        else {
            return this.getToken(CParser.RightParen, i);
        }
    };
    Object.defineProperty(NestedParenthesesBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_nestedParenthesesBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NestedParenthesesBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterNestedParenthesesBlock) {
            listener.enterNestedParenthesesBlock(this);
        }
    };
    // @Override
    NestedParenthesesBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitNestedParenthesesBlock) {
            listener.exitNestedParenthesesBlock(this);
        }
    };
    // @Override
    NestedParenthesesBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitNestedParenthesesBlock) {
            return visitor.visitNestedParenthesesBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NestedParenthesesBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NestedParenthesesBlockContext = NestedParenthesesBlockContext;
var PointerContext = /** @class */ (function (_super) {
    __extends(PointerContext, _super);
    function PointerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointerContext.prototype.Star = function () { return this.tryGetToken(CParser.Star, 0); };
    PointerContext.prototype.typeQualifierList = function () {
        return this.tryGetRuleContext(0, TypeQualifierListContext);
    };
    PointerContext.prototype.pointer = function () {
        return this.tryGetRuleContext(0, PointerContext);
    };
    PointerContext.prototype.Caret = function () { return this.tryGetToken(CParser.Caret, 0); };
    Object.defineProperty(PointerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_pointer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PointerContext.prototype.enterRule = function (listener) {
        if (listener.enterPointer) {
            listener.enterPointer(this);
        }
    };
    // @Override
    PointerContext.prototype.exitRule = function (listener) {
        if (listener.exitPointer) {
            listener.exitPointer(this);
        }
    };
    // @Override
    PointerContext.prototype.accept = function (visitor) {
        if (visitor.visitPointer) {
            return visitor.visitPointer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointerContext = PointerContext;
var TypeQualifierListContext = /** @class */ (function (_super) {
    __extends(TypeQualifierListContext, _super);
    function TypeQualifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeQualifierListContext.prototype.typeQualifier = function () {
        return this.getRuleContext(0, TypeQualifierContext);
    };
    TypeQualifierListContext.prototype.typeQualifierList = function () {
        return this.tryGetRuleContext(0, TypeQualifierListContext);
    };
    Object.defineProperty(TypeQualifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_typeQualifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeQualifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeQualifierList) {
            listener.enterTypeQualifierList(this);
        }
    };
    // @Override
    TypeQualifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeQualifierList) {
            listener.exitTypeQualifierList(this);
        }
    };
    // @Override
    TypeQualifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeQualifierList) {
            return visitor.visitTypeQualifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeQualifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeQualifierListContext = TypeQualifierListContext;
var ParameterTypeListContext = /** @class */ (function (_super) {
    __extends(ParameterTypeListContext, _super);
    function ParameterTypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterTypeListContext.prototype.parameterList = function () {
        return this.getRuleContext(0, ParameterListContext);
    };
    ParameterTypeListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    ParameterTypeListContext.prototype.Ellipsis = function () { return this.tryGetToken(CParser.Ellipsis, 0); };
    Object.defineProperty(ParameterTypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_parameterTypeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterTypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterTypeList) {
            listener.enterParameterTypeList(this);
        }
    };
    // @Override
    ParameterTypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterTypeList) {
            listener.exitParameterTypeList(this);
        }
    };
    // @Override
    ParameterTypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterTypeList) {
            return visitor.visitParameterTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterTypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterTypeListContext = ParameterTypeListContext;
var ParameterListContext = /** @class */ (function (_super) {
    __extends(ParameterListContext, _super);
    function ParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterListContext.prototype.parameterDeclaration = function () {
        return this.getRuleContext(0, ParameterDeclarationContext);
    };
    ParameterListContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    ParameterListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(ParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_parameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterList) {
            listener.enterParameterList(this);
        }
    };
    // @Override
    ParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterList) {
            listener.exitParameterList(this);
        }
    };
    // @Override
    ParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterListContext = ParameterListContext;
var ParameterDeclarationContext = /** @class */ (function (_super) {
    __extends(ParameterDeclarationContext, _super);
    function ParameterDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterDeclarationContext.prototype.declarationSpecifiers = function () {
        return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
    };
    ParameterDeclarationContext.prototype.declarator = function () {
        return this.tryGetRuleContext(0, DeclaratorContext);
    };
    ParameterDeclarationContext.prototype.declarationSpecifiers2 = function () {
        return this.tryGetRuleContext(0, DeclarationSpecifiers2Context);
    };
    ParameterDeclarationContext.prototype.abstractDeclarator = function () {
        return this.tryGetRuleContext(0, AbstractDeclaratorContext);
    };
    Object.defineProperty(ParameterDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_parameterDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterDeclaration) {
            listener.enterParameterDeclaration(this);
        }
    };
    // @Override
    ParameterDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterDeclaration) {
            listener.exitParameterDeclaration(this);
        }
    };
    // @Override
    ParameterDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterDeclaration) {
            return visitor.visitParameterDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterDeclarationContext = ParameterDeclarationContext;
var IdentifierListContext = /** @class */ (function (_super) {
    __extends(IdentifierListContext, _super);
    function IdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierListContext.prototype.Identifier = function () { return this.getToken(CParser.Identifier, 0); };
    IdentifierListContext.prototype.identifierList = function () {
        return this.tryGetRuleContext(0, IdentifierListContext);
    };
    IdentifierListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(IdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_identifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierList) {
            listener.enterIdentifierList(this);
        }
    };
    // @Override
    IdentifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierList) {
            listener.exitIdentifierList(this);
        }
    };
    // @Override
    IdentifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierListContext = IdentifierListContext;
var TypeNameContext = /** @class */ (function (_super) {
    __extends(TypeNameContext, _super);
    function TypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNameContext.prototype.specifierQualifierList = function () {
        return this.getRuleContext(0, SpecifierQualifierListContext);
    };
    TypeNameContext.prototype.abstractDeclarator = function () {
        return this.tryGetRuleContext(0, AbstractDeclaratorContext);
    };
    Object.defineProperty(TypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_typeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeNameContext = TypeNameContext;
var AbstractDeclaratorContext = /** @class */ (function (_super) {
    __extends(AbstractDeclaratorContext, _super);
    function AbstractDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AbstractDeclaratorContext.prototype.pointer = function () {
        return this.tryGetRuleContext(0, PointerContext);
    };
    AbstractDeclaratorContext.prototype.directAbstractDeclarator = function () {
        return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
    };
    AbstractDeclaratorContext.prototype.gccDeclaratorExtension = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GccDeclaratorExtensionContext);
        }
        else {
            return this.getRuleContext(i, GccDeclaratorExtensionContext);
        }
    };
    Object.defineProperty(AbstractDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_abstractDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AbstractDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterAbstractDeclarator) {
            listener.enterAbstractDeclarator(this);
        }
    };
    // @Override
    AbstractDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitAbstractDeclarator) {
            listener.exitAbstractDeclarator(this);
        }
    };
    // @Override
    AbstractDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitAbstractDeclarator) {
            return visitor.visitAbstractDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AbstractDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AbstractDeclaratorContext = AbstractDeclaratorContext;
var DirectAbstractDeclaratorContext = /** @class */ (function (_super) {
    __extends(DirectAbstractDeclaratorContext, _super);
    function DirectAbstractDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectAbstractDeclaratorContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    DirectAbstractDeclaratorContext.prototype.abstractDeclarator = function () {
        return this.tryGetRuleContext(0, AbstractDeclaratorContext);
    };
    DirectAbstractDeclaratorContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    DirectAbstractDeclaratorContext.prototype.gccDeclaratorExtension = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GccDeclaratorExtensionContext);
        }
        else {
            return this.getRuleContext(i, GccDeclaratorExtensionContext);
        }
    };
    DirectAbstractDeclaratorContext.prototype.LeftBracket = function () { return this.tryGetToken(CParser.LeftBracket, 0); };
    DirectAbstractDeclaratorContext.prototype.RightBracket = function () { return this.tryGetToken(CParser.RightBracket, 0); };
    DirectAbstractDeclaratorContext.prototype.typeQualifierList = function () {
        return this.tryGetRuleContext(0, TypeQualifierListContext);
    };
    DirectAbstractDeclaratorContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    DirectAbstractDeclaratorContext.prototype.Static = function () { return this.tryGetToken(CParser.Static, 0); };
    DirectAbstractDeclaratorContext.prototype.Star = function () { return this.tryGetToken(CParser.Star, 0); };
    DirectAbstractDeclaratorContext.prototype.parameterTypeList = function () {
        return this.tryGetRuleContext(0, ParameterTypeListContext);
    };
    DirectAbstractDeclaratorContext.prototype.directAbstractDeclarator = function () {
        return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
    };
    Object.defineProperty(DirectAbstractDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_directAbstractDeclarator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectAbstractDeclaratorContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectAbstractDeclarator) {
            listener.enterDirectAbstractDeclarator(this);
        }
    };
    // @Override
    DirectAbstractDeclaratorContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectAbstractDeclarator) {
            listener.exitDirectAbstractDeclarator(this);
        }
    };
    // @Override
    DirectAbstractDeclaratorContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectAbstractDeclarator) {
            return visitor.visitDirectAbstractDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectAbstractDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectAbstractDeclaratorContext = DirectAbstractDeclaratorContext;
var TypedefNameContext = /** @class */ (function (_super) {
    __extends(TypedefNameContext, _super);
    function TypedefNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedefNameContext.prototype.Identifier = function () { return this.getToken(CParser.Identifier, 0); };
    Object.defineProperty(TypedefNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_typedefName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedefNameContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedefName) {
            listener.enterTypedefName(this);
        }
    };
    // @Override
    TypedefNameContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedefName) {
            listener.exitTypedefName(this);
        }
    };
    // @Override
    TypedefNameContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedefName) {
            return visitor.visitTypedefName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedefNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedefNameContext = TypedefNameContext;
var InitializerContext = /** @class */ (function (_super) {
    __extends(InitializerContext, _super);
    function InitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    InitializerContext.prototype.LeftBrace = function () { return this.tryGetToken(CParser.LeftBrace, 0); };
    InitializerContext.prototype.initializerList = function () {
        return this.tryGetRuleContext(0, InitializerListContext);
    };
    InitializerContext.prototype.RightBrace = function () { return this.tryGetToken(CParser.RightBrace, 0); };
    InitializerContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(InitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_initializer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitializerContext.prototype.enterRule = function (listener) {
        if (listener.enterInitializer) {
            listener.enterInitializer(this);
        }
    };
    // @Override
    InitializerContext.prototype.exitRule = function (listener) {
        if (listener.exitInitializer) {
            listener.exitInitializer(this);
        }
    };
    // @Override
    InitializerContext.prototype.accept = function (visitor) {
        if (visitor.visitInitializer) {
            return visitor.visitInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializerContext = InitializerContext;
var InitializerListContext = /** @class */ (function (_super) {
    __extends(InitializerListContext, _super);
    function InitializerListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerListContext.prototype.initializer = function () {
        return this.getRuleContext(0, InitializerContext);
    };
    InitializerListContext.prototype.designation = function () {
        return this.tryGetRuleContext(0, DesignationContext);
    };
    InitializerListContext.prototype.initializerList = function () {
        return this.tryGetRuleContext(0, InitializerListContext);
    };
    InitializerListContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(InitializerListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_initializerList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitializerListContext.prototype.enterRule = function (listener) {
        if (listener.enterInitializerList) {
            listener.enterInitializerList(this);
        }
    };
    // @Override
    InitializerListContext.prototype.exitRule = function (listener) {
        if (listener.exitInitializerList) {
            listener.exitInitializerList(this);
        }
    };
    // @Override
    InitializerListContext.prototype.accept = function (visitor) {
        if (visitor.visitInitializerList) {
            return visitor.visitInitializerList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitializerListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializerListContext = InitializerListContext;
var DesignationContext = /** @class */ (function (_super) {
    __extends(DesignationContext, _super);
    function DesignationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesignationContext.prototype.designatorList = function () {
        return this.getRuleContext(0, DesignatorListContext);
    };
    DesignationContext.prototype.Assign = function () { return this.getToken(CParser.Assign, 0); };
    Object.defineProperty(DesignationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_designation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DesignationContext.prototype.enterRule = function (listener) {
        if (listener.enterDesignation) {
            listener.enterDesignation(this);
        }
    };
    // @Override
    DesignationContext.prototype.exitRule = function (listener) {
        if (listener.exitDesignation) {
            listener.exitDesignation(this);
        }
    };
    // @Override
    DesignationContext.prototype.accept = function (visitor) {
        if (visitor.visitDesignation) {
            return visitor.visitDesignation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesignationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DesignationContext = DesignationContext;
var DesignatorListContext = /** @class */ (function (_super) {
    __extends(DesignatorListContext, _super);
    function DesignatorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesignatorListContext.prototype.designator = function () {
        return this.getRuleContext(0, DesignatorContext);
    };
    DesignatorListContext.prototype.designatorList = function () {
        return this.tryGetRuleContext(0, DesignatorListContext);
    };
    Object.defineProperty(DesignatorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_designatorList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DesignatorListContext.prototype.enterRule = function (listener) {
        if (listener.enterDesignatorList) {
            listener.enterDesignatorList(this);
        }
    };
    // @Override
    DesignatorListContext.prototype.exitRule = function (listener) {
        if (listener.exitDesignatorList) {
            listener.exitDesignatorList(this);
        }
    };
    // @Override
    DesignatorListContext.prototype.accept = function (visitor) {
        if (visitor.visitDesignatorList) {
            return visitor.visitDesignatorList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesignatorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DesignatorListContext = DesignatorListContext;
var DesignatorContext = /** @class */ (function (_super) {
    __extends(DesignatorContext, _super);
    function DesignatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesignatorContext.prototype.LeftBracket = function () { return this.tryGetToken(CParser.LeftBracket, 0); };
    DesignatorContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    DesignatorContext.prototype.RightBracket = function () { return this.tryGetToken(CParser.RightBracket, 0); };
    DesignatorContext.prototype.Dot = function () { return this.tryGetToken(CParser.Dot, 0); };
    DesignatorContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    Object.defineProperty(DesignatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_designator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DesignatorContext.prototype.enterRule = function (listener) {
        if (listener.enterDesignator) {
            listener.enterDesignator(this);
        }
    };
    // @Override
    DesignatorContext.prototype.exitRule = function (listener) {
        if (listener.exitDesignator) {
            listener.exitDesignator(this);
        }
    };
    // @Override
    DesignatorContext.prototype.accept = function (visitor) {
        if (visitor.visitDesignator) {
            return visitor.visitDesignator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesignatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DesignatorContext = DesignatorContext;
var StaticAssertDeclarationContext = /** @class */ (function (_super) {
    __extends(StaticAssertDeclarationContext, _super);
    function StaticAssertDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StaticAssertDeclarationContext.prototype.StaticAssert = function () { return this.getToken(CParser.StaticAssert, 0); };
    StaticAssertDeclarationContext.prototype.LeftParen = function () { return this.getToken(CParser.LeftParen, 0); };
    StaticAssertDeclarationContext.prototype.constantExpression = function () {
        return this.getRuleContext(0, ConstantExpressionContext);
    };
    StaticAssertDeclarationContext.prototype.Comma = function () { return this.getToken(CParser.Comma, 0); };
    StaticAssertDeclarationContext.prototype.RightParen = function () { return this.getToken(CParser.RightParen, 0); };
    StaticAssertDeclarationContext.prototype.Semi = function () { return this.getToken(CParser.Semi, 0); };
    StaticAssertDeclarationContext.prototype.StringLiteral = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.StringLiteral);
        }
        else {
            return this.getToken(CParser.StringLiteral, i);
        }
    };
    Object.defineProperty(StaticAssertDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_staticAssertDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StaticAssertDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterStaticAssertDeclaration) {
            listener.enterStaticAssertDeclaration(this);
        }
    };
    // @Override
    StaticAssertDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitStaticAssertDeclaration) {
            listener.exitStaticAssertDeclaration(this);
        }
    };
    // @Override
    StaticAssertDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitStaticAssertDeclaration) {
            return visitor.visitStaticAssertDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StaticAssertDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StaticAssertDeclarationContext = StaticAssertDeclarationContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.labeledStatement = function () {
        return this.tryGetRuleContext(0, LabeledStatementContext);
    };
    StatementContext.prototype.compoundStatement = function () {
        return this.tryGetRuleContext(0, CompoundStatementContext);
    };
    StatementContext.prototype.expressionStatement = function () {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    };
    StatementContext.prototype.selectionStatement = function () {
        return this.tryGetRuleContext(0, SelectionStatementContext);
    };
    StatementContext.prototype.iterationStatement = function () {
        return this.tryGetRuleContext(0, IterationStatementContext);
    };
    StatementContext.prototype.jumpStatement = function () {
        return this.tryGetRuleContext(0, JumpStatementContext);
    };
    StatementContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    StatementContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    StatementContext.prototype.Semi = function () { return this.tryGetToken(CParser.Semi, 0); };
    StatementContext.prototype.Volatile = function () { return this.tryGetToken(CParser.Volatile, 0); };
    StatementContext.prototype.logicalOrExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicalOrExpressionContext);
        }
        else {
            return this.getRuleContext(i, LogicalOrExpressionContext);
        }
    };
    StatementContext.prototype.Colon = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Colon);
        }
        else {
            return this.getToken(CParser.Colon, i);
        }
    };
    StatementContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_statement; },
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
var LabeledStatementContext = /** @class */ (function (_super) {
    __extends(LabeledStatementContext, _super);
    function LabeledStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabeledStatementContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    LabeledStatementContext.prototype.Colon = function () { return this.getToken(CParser.Colon, 0); };
    LabeledStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    LabeledStatementContext.prototype.Case = function () { return this.tryGetToken(CParser.Case, 0); };
    LabeledStatementContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    LabeledStatementContext.prototype.Default = function () { return this.tryGetToken(CParser.Default, 0); };
    Object.defineProperty(LabeledStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_labeledStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabeledStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterLabeledStatement) {
            listener.enterLabeledStatement(this);
        }
    };
    // @Override
    LabeledStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitLabeledStatement) {
            listener.exitLabeledStatement(this);
        }
    };
    // @Override
    LabeledStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitLabeledStatement) {
            return visitor.visitLabeledStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabeledStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabeledStatementContext = LabeledStatementContext;
var CompoundStatementContext = /** @class */ (function (_super) {
    __extends(CompoundStatementContext, _super);
    function CompoundStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompoundStatementContext.prototype.LeftBrace = function () { return this.getToken(CParser.LeftBrace, 0); };
    CompoundStatementContext.prototype.RightBrace = function () { return this.getToken(CParser.RightBrace, 0); };
    CompoundStatementContext.prototype.blockItemList = function () {
        return this.tryGetRuleContext(0, BlockItemListContext);
    };
    Object.defineProperty(CompoundStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_compoundStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompoundStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCompoundStatement) {
            listener.enterCompoundStatement(this);
        }
    };
    // @Override
    CompoundStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCompoundStatement) {
            listener.exitCompoundStatement(this);
        }
    };
    // @Override
    CompoundStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCompoundStatement) {
            return visitor.visitCompoundStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompoundStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompoundStatementContext = CompoundStatementContext;
var BlockItemListContext = /** @class */ (function (_super) {
    __extends(BlockItemListContext, _super);
    function BlockItemListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockItemListContext.prototype.blockItem = function () {
        return this.getRuleContext(0, BlockItemContext);
    };
    BlockItemListContext.prototype.blockItemList = function () {
        return this.tryGetRuleContext(0, BlockItemListContext);
    };
    Object.defineProperty(BlockItemListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_blockItemList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockItemListContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockItemList) {
            listener.enterBlockItemList(this);
        }
    };
    // @Override
    BlockItemListContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockItemList) {
            listener.exitBlockItemList(this);
        }
    };
    // @Override
    BlockItemListContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockItemList) {
            return visitor.visitBlockItemList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockItemListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockItemListContext = BlockItemListContext;
var BlockItemContext = /** @class */ (function (_super) {
    __extends(BlockItemContext, _super);
    function BlockItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockItemContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    BlockItemContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    Object.defineProperty(BlockItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_blockItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockItemContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockItem) {
            listener.enterBlockItem(this);
        }
    };
    // @Override
    BlockItemContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockItem) {
            listener.exitBlockItem(this);
        }
    };
    // @Override
    BlockItemContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockItem) {
            return visitor.visitBlockItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockItemContext = BlockItemContext;
var ExpressionStatementContext = /** @class */ (function (_super) {
    __extends(ExpressionStatementContext, _super);
    function ExpressionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatementContext.prototype.Semi = function () { return this.getToken(CParser.Semi, 0); };
    ExpressionStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ExpressionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_expressionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionStatementContext = ExpressionStatementContext;
var SelectionStatementContext = /** @class */ (function (_super) {
    __extends(SelectionStatementContext, _super);
    function SelectionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectionStatementContext.prototype.If = function () { return this.tryGetToken(CParser.If, 0); };
    SelectionStatementContext.prototype.LeftParen = function () { return this.getToken(CParser.LeftParen, 0); };
    SelectionStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SelectionStatementContext.prototype.RightParen = function () { return this.getToken(CParser.RightParen, 0); };
    SelectionStatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    SelectionStatementContext.prototype.Else = function () { return this.tryGetToken(CParser.Else, 0); };
    SelectionStatementContext.prototype.Switch = function () { return this.tryGetToken(CParser.Switch, 0); };
    Object.defineProperty(SelectionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_selectionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSelectionStatement) {
            listener.enterSelectionStatement(this);
        }
    };
    // @Override
    SelectionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSelectionStatement) {
            listener.exitSelectionStatement(this);
        }
    };
    // @Override
    SelectionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSelectionStatement) {
            return visitor.visitSelectionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectionStatementContext = SelectionStatementContext;
var IterationStatementContext = /** @class */ (function (_super) {
    __extends(IterationStatementContext, _super);
    function IterationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IterationStatementContext.prototype.While = function () { return this.tryGetToken(CParser.While, 0); };
    IterationStatementContext.prototype.LeftParen = function () { return this.getToken(CParser.LeftParen, 0); };
    IterationStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    IterationStatementContext.prototype.RightParen = function () { return this.getToken(CParser.RightParen, 0); };
    IterationStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    IterationStatementContext.prototype.Do = function () { return this.tryGetToken(CParser.Do, 0); };
    IterationStatementContext.prototype.Semi = function () { return this.tryGetToken(CParser.Semi, 0); };
    IterationStatementContext.prototype.For = function () { return this.tryGetToken(CParser.For, 0); };
    IterationStatementContext.prototype.forCondition = function () {
        return this.tryGetRuleContext(0, ForConditionContext);
    };
    Object.defineProperty(IterationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_iterationStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IterationStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIterationStatement) {
            listener.enterIterationStatement(this);
        }
    };
    // @Override
    IterationStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIterationStatement) {
            listener.exitIterationStatement(this);
        }
    };
    // @Override
    IterationStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIterationStatement) {
            return visitor.visitIterationStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IterationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IterationStatementContext = IterationStatementContext;
var ForConditionContext = /** @class */ (function (_super) {
    __extends(ForConditionContext, _super);
    function ForConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForConditionContext.prototype.forDeclaration = function () {
        return this.tryGetRuleContext(0, ForDeclarationContext);
    };
    ForConditionContext.prototype.Semi = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Semi);
        }
        else {
            return this.getToken(CParser.Semi, i);
        }
    };
    ForConditionContext.prototype.forExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ForExpressionContext);
        }
        else {
            return this.getRuleContext(i, ForExpressionContext);
        }
    };
    ForConditionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ForConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_forCondition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterForCondition) {
            listener.enterForCondition(this);
        }
    };
    // @Override
    ForConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitForCondition) {
            listener.exitForCondition(this);
        }
    };
    // @Override
    ForConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitForCondition) {
            return visitor.visitForCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForConditionContext = ForConditionContext;
var ForDeclarationContext = /** @class */ (function (_super) {
    __extends(ForDeclarationContext, _super);
    function ForDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForDeclarationContext.prototype.declarationSpecifiers = function () {
        return this.getRuleContext(0, DeclarationSpecifiersContext);
    };
    ForDeclarationContext.prototype.initDeclaratorList = function () {
        return this.tryGetRuleContext(0, InitDeclaratorListContext);
    };
    Object.defineProperty(ForDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_forDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterForDeclaration) {
            listener.enterForDeclaration(this);
        }
    };
    // @Override
    ForDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitForDeclaration) {
            listener.exitForDeclaration(this);
        }
    };
    // @Override
    ForDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitForDeclaration) {
            return visitor.visitForDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForDeclarationContext = ForDeclarationContext;
var ForExpressionContext = /** @class */ (function (_super) {
    __extends(ForExpressionContext, _super);
    function ForExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForExpressionContext.prototype.assignmentExpression = function () {
        return this.getRuleContext(0, AssignmentExpressionContext);
    };
    ForExpressionContext.prototype.forExpression = function () {
        return this.tryGetRuleContext(0, ForExpressionContext);
    };
    ForExpressionContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(ForExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_forExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterForExpression) {
            listener.enterForExpression(this);
        }
    };
    // @Override
    ForExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitForExpression) {
            listener.exitForExpression(this);
        }
    };
    // @Override
    ForExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitForExpression) {
            return visitor.visitForExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForExpressionContext = ForExpressionContext;
var JumpStatementContext = /** @class */ (function (_super) {
    __extends(JumpStatementContext, _super);
    function JumpStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    JumpStatementContext.prototype.Goto = function () { return this.tryGetToken(CParser.Goto, 0); };
    JumpStatementContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    JumpStatementContext.prototype.Semi = function () { return this.getToken(CParser.Semi, 0); };
    JumpStatementContext.prototype.Continue = function () { return this.tryGetToken(CParser.Continue, 0); };
    JumpStatementContext.prototype.Break = function () { return this.tryGetToken(CParser.Break, 0); };
    JumpStatementContext.prototype.Return = function () { return this.tryGetToken(CParser.Return, 0); };
    JumpStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    JumpStatementContext.prototype.unaryExpression = function () {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    };
    Object.defineProperty(JumpStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_jumpStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    JumpStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterJumpStatement) {
            listener.enterJumpStatement(this);
        }
    };
    // @Override
    JumpStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitJumpStatement) {
            listener.exitJumpStatement(this);
        }
    };
    // @Override
    JumpStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitJumpStatement) {
            return visitor.visitJumpStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return JumpStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.JumpStatementContext = JumpStatementContext;
var CompilationUnitContext = /** @class */ (function (_super) {
    __extends(CompilationUnitContext, _super);
    function CompilationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilationUnitContext.prototype.EOF = function () { return this.getToken(CParser.EOF, 0); };
    CompilationUnitContext.prototype.translationUnit = function () {
        return this.tryGetRuleContext(0, TranslationUnitContext);
    };
    Object.defineProperty(CompilationUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_compilationUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompilationUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterCompilationUnit) {
            listener.enterCompilationUnit(this);
        }
    };
    // @Override
    CompilationUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitCompilationUnit) {
            listener.exitCompilationUnit(this);
        }
    };
    // @Override
    CompilationUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompilationUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompilationUnitContext = CompilationUnitContext;
var TranslationUnitContext = /** @class */ (function (_super) {
    __extends(TranslationUnitContext, _super);
    function TranslationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TranslationUnitContext.prototype.externalDeclaration = function () {
        return this.getRuleContext(0, ExternalDeclarationContext);
    };
    TranslationUnitContext.prototype.translationUnit = function () {
        return this.tryGetRuleContext(0, TranslationUnitContext);
    };
    Object.defineProperty(TranslationUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_translationUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TranslationUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterTranslationUnit) {
            listener.enterTranslationUnit(this);
        }
    };
    // @Override
    TranslationUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitTranslationUnit) {
            listener.exitTranslationUnit(this);
        }
    };
    // @Override
    TranslationUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitTranslationUnit) {
            return visitor.visitTranslationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TranslationUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TranslationUnitContext = TranslationUnitContext;
var ExternalDeclarationContext = /** @class */ (function (_super) {
    __extends(ExternalDeclarationContext, _super);
    function ExternalDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExternalDeclarationContext.prototype.functionDefinition = function () {
        return this.tryGetRuleContext(0, FunctionDefinitionContext);
    };
    ExternalDeclarationContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    ExternalDeclarationContext.prototype.Semi = function () { return this.tryGetToken(CParser.Semi, 0); };
    Object.defineProperty(ExternalDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_externalDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExternalDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterExternalDeclaration) {
            listener.enterExternalDeclaration(this);
        }
    };
    // @Override
    ExternalDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitExternalDeclaration) {
            listener.exitExternalDeclaration(this);
        }
    };
    // @Override
    ExternalDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitExternalDeclaration) {
            return visitor.visitExternalDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExternalDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExternalDeclarationContext = ExternalDeclarationContext;
var FunctionDefinitionContext = /** @class */ (function (_super) {
    __extends(FunctionDefinitionContext, _super);
    function FunctionDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDefinitionContext.prototype.declarator = function () {
        return this.getRuleContext(0, DeclaratorContext);
    };
    FunctionDefinitionContext.prototype.compoundStatement = function () {
        return this.getRuleContext(0, CompoundStatementContext);
    };
    FunctionDefinitionContext.prototype.declarationSpecifiers = function () {
        return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
    };
    FunctionDefinitionContext.prototype.declarationList = function () {
        return this.tryGetRuleContext(0, DeclarationListContext);
    };
    Object.defineProperty(FunctionDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_functionDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDefinition) {
            listener.enterFunctionDefinition(this);
        }
    };
    // @Override
    FunctionDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDefinition) {
            listener.exitFunctionDefinition(this);
        }
    };
    // @Override
    FunctionDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDefinition) {
            return visitor.visitFunctionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDefinitionContext = FunctionDefinitionContext;
var DeclarationListContext = /** @class */ (function (_super) {
    __extends(DeclarationListContext, _super);
    function DeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationListContext.prototype.declaration = function () {
        return this.getRuleContext(0, DeclarationContext);
    };
    DeclarationListContext.prototype.declarationList = function () {
        return this.tryGetRuleContext(0, DeclarationListContext);
    };
    Object.defineProperty(DeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarationList; },
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
